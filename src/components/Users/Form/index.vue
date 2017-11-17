<template>
  <div class="users-form">
    <h3>{{ title }}</h3>
    <form>
      <text-input
        :inputName="'name'"
        :inputLabel="'Name'"
        :inputPlaceholder="'Example: John Doe'"
        :inputValue="''"
        :dataHandler="dataHandler"
        :inputValidators="[validators.required, validators.name]"
        :required="true"
      />
      <text-input
        :inputName="'email'"
        :inputLabel="'Email'"
        :inputPlaceholder="'Example: johndoe@mail.com'"
        :inputValue="''"
        :dataHandler="dataHandler"
        :inputValidators="[validators.required, validators.email]"
        :required="true"
      />
      <text-input
        :inputName="'phone'"
        :inputLabel="'Phone'"
        :inputPlaceholder="'Example: 333-333-33'"
        :inputValue="''"
        :dataHandler="dataHandler"
        :inputMask="phoneMask"
      />
      <text-input
        :inputName="'website'"
        :inputLabel="'Website'"
        :inputPlaceholder="'www.somesite.com'"
        :inputValue="''"
        :dataHandler="dataHandler"
        :inputValidators="[validators.website]"
      />
      <action-button
        :text="'Add'"
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
  import { name, required, email, website } from '../../../utils/helpers/formValidators';
  import { phone } from '../../../utils/helpers/inputMasks';
  // name, userName, email, phone, website, company
  export default {
    name: 'UsersForm',
    components: { TextInput, ActionButton },
    data() {
      return {
        title: this.$route.params.id ? this.$route.params.id : 'Add new user',
        formData: {
          values: {
            name: '',
            email: '',
            phone: '',
            website: ''
          },
          asyncErrors: [],    // async validation errors, throws into component like :asyncErrors
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
        //console.log('handler event', event);
        //console.log('handler data', data);
        //console.log('handler errors', errors);
        this.formData.values[event.target.name] = data;
        this.formData.isValid = !errors.length;
      },
      onSubmit: function (e) {
        e.preventDefault();
        console.log('formData', this.formData);
        //console.log(this.$route);
      },
      phoneMask: function (value) {
        return phone(value);
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
