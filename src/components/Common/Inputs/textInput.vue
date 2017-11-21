<template>
  <label
    :class="className"
  >
    {{ `${label + isRequired}` }}
    <input
      :name="name"
      :placeholder="placeholder"
      v-model.lazy="value"
      @input="onChange"
    />
    <span className="errorMessage">
      {{ allErrors }}
    </span>
  </label>
</template>
<script>
  export default {
    name: this.inputName,
    props: {
      inputName: {
        type: String,
        required: true
      },
      inputValue: {
        type: String,
        default: ''
      },
      inputPlaceholder: {
        type: String,
        default: ''
      },
      dataHandler: {
        type: Function,
        required: true
      },
      inputValidators: {
        type: Array,
        default: function () {
          return [];
        }
      },
      inputMask: {
        type: Function,
        default: function (value) {
          return value;
        }
      },
      required: {
        type: Boolean,
        default: false
      },
      inputLabel: {
        type: String,
        default: ''
      },
      asyncErrors: {
        type: Array,
        default: function () {
          return [];
        }
      }
    },
    created: function () {
      this.validate(this.masked(this.value));
      this.value = this.masked(this.value);
    },
    methods: {
      onChange: function (e) {
        this.validate(this.masked(e.target.value));
        this.value = this.masked(e.target.value);
        this.dataHandler(this.value, this.errors, e);
      },
      validate: function (value) {
        const errors = [];
        this.validators.forEach(validator => {
          const error = validator(value);
          if (error) {
            errors.push(error);
          }
        });
        this.errors = errors;
      },
      masked: function (value) {
        return this.mask(value);
      }
    },
    data: function () {
      return {
        name: this.inputName,
        value: this.inputValue,
        placeholder: this.inputPlaceholder,
        errors: [],
        validators: this.inputValidators,
        mask: this.inputMask,
        label: this.inputLabel
      };
    },
    watch: {
      inputValue: function (value) {
        this.validate(this.masked(value));
        this.value = this.masked(value);
      }
    },
    computed: {
      allErrors: function () {
        return this.errors.join(', ');
      },
      className: function () {
        return this.errors.length > 0 ? 'error' : '';
      },
      isRequired: function () {
        return this.required ? '*' : '';
      }
    }
  };
</script>
<style scoped>
  label {
    display: block;
    margin: 5px 0;
    width: 100%;
    font-weight: bold;
    font-size: 1.1em;
  }
  
  span {
    display: block;
    margin: 0;
    font-weight: normal;
    color: #ff2709;
  }
  
  input {
    width: 100%;
    border: 1px solid rgba(60, 60, 60, 0.26);
    border-radius: 4px;
    padding: 5px;
    box-sizing: border-box;
    outline: none;
    font-size: 1em;
    color: #1a1a1a;
  }

  input:focus, input:active {
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
  }
  
  .error input {
    border-color: #ff320f;
  }
</style>
