<template>
  <div class="users-form">
    <h3>{{ title }}</h3>
    <form>
      <text-input
        :inputName="'name'"
        :inputLabel="'Name'"
        :inputPlaceholder="'Example: John Doe'"
        :inputValue="formData.values.name"
        :dataHandler="dataHandler"
        :inputValidators="[validators.required, validators.name]"
        :required="true"
      />
      <text-input
        :inputName="'email'"
        :inputLabel="'Email'"
        :inputPlaceholder="'Example: johndoe@mail.com'"
        :inputValue="formData.values.email"
        :dataHandler="dataHandler"
        :inputValidators="[validators.required, validators.email]"
        :required="true"
      />
      <text-input
        :inputName="'phone'"
        :inputLabel="'Phone'"
        :inputPlaceholder="'Example: 333-333-33'"
        :inputValue="formData.values.phone"
        :dataHandler="dataHandler"
        :inputMask="phoneMask"
      />
      <text-input
        :inputName="'website'"
        :inputLabel="'Website'"
        :inputPlaceholder="'www.somesite.com'"
        :inputValue="formData.values.website"
        :dataHandler="dataHandler"
        :inputValidators="[validators.website]"
      />
      <simple-select
        :inputName="'companies'"
        :inputLabel="'Select company'"
        :data="companiesList"
        :get-data="getSelectedCountry"
        :inputValue="formData.values.company ? formData.values.company.name : ''"
      />
      <action-button
        :text="'Back'"
        :handleClick="onBackHandler"
        :type="'normal'"
        :size="'md'"
      />
      <action-button
        :text="btnText"
        :handleClick="onSubmit"
        :type="'success'"
        :size="'md'"
        :disabled="!formData.isValid"
      />
    </form>
  </div>
</template>

<script>
  import TextInput from '../../Common/Inputs/textInput';
  import ActionButton from '../../Common/Inputs/actionButton';
  import SimpleSelect from '../../Common/Inputs/simpleSelect';
  import { name, required, email, website } from '../../../utils/helpers/formValidators';
  import { phone } from '../../../utils/helpers/inputMasks';
  import { getUsers, addUser, editUser } from '../../../store/actions';

  export default {
    name: 'UsersForm',
    components: { TextInput, ActionButton, SimpleSelect },
    data() {
      return {
        //title: '',
        formData: {
          values: {
            name: '',
            email: '',
            phone: '',
            website: '',
            company: {}
          },
          asyncErrors: [],    // async validation errors, throws into component via :asyncErrors
          isValid: true
        },
        validators: {
          name,
          required,
          email,
          website
        }
      };
    },
    methods: {
      dataHandler: function (data, errors, event) {
        console.log(data);
        this.formData.values[event.target.name] = data;
        this.formData.isValid = !errors.length;
      },
      onSubmit: function (e) {
        e.preventDefault();
        if (this.mode === 'edit') {
          this.onEdit();
        } else {
          this.onCreate();
        }
        this.$router.push({ path: '/users' });
      },
      phoneMask: function (value) {
        return phone(value);
      },
      getSelectedCountry: function (val) {
        this.formData.values.company = this.$store.state.users.companiesList.find(company => {
          return company.name === val;
        });
      },
      onCreateMode: function () {
        this.type = 'create';
        if (!this.$store.state.users.usersList.length) {
          this.$store.dispatch(getUsers());
        }
      },
      onEditMode: function () {
        this.type = 'edit';
        const that = this;
        if (!that.$store.state.users.usersList.length) {
          that.$store.dispatch(getUsers())
            .then(() => {
              const obj = that.$store.state.users.usersList.find(usr => {
                return usr.id.toString() === that.$route.params.id.toString();
              });
              that.formData.values = { ...obj };
            });
        } else {
          const obj = that.$store.state.users.usersList.find(usr => {
            return usr.id.toString() === that.$route.params.id.toString();
          });
          that.formData.values = { ...obj };
        }
      },
      onCreate: function () {
        this.$store.dispatch(addUser({
          ...this.formData.values,
          id: this.$store.state.users.usersList.length + 1
        }));
      },
      onEdit: function () {
        this.$store.dispatch(editUser(this.formData.values));
      },
      onBackHandler: function (e) {
        e.preventDefault();
        this.$router.go(-1);
      }
    },
    computed: {
      companiesList: function () {
        return this.$store.state.users.companiesList.map(company => company.name);
      },
      mode: function () {
        return this.$route.params.id ? 'edit' : 'add';
      },
      btnText: function () {
        return this.mode === 'edit' ? 'Edit' : 'Add';
      },
      title: function () {
        return this.mode === 'edit' ? `Edit ${this.formData.values.name}` : 'Add new user';
      }
    },
    created: async function () {
      if (this.$route.params.id) {
        this.onEditMode();
      } else {
        this.onCreateMode();
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3:after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: #878787;
  }
  
  form {
    width: 400px;
    margin: 20px auto;
  }
</style>
