<template>
  <button
    @click="handleClick"
    :class="[typeClass, sizeClass]"
    :disabled="isDisable"
  >
    {{ text }}
  </button>
</template>

<script>
  const types = [
    'normal',
    'warning',
    'success',
    'danger',
    'info'
  ];

  const sizes = [
    'sm',
    'md',
    'lg',
    'xlg'
  ];

  export default {
    name: 'ActionButton',
    props: {
      text: String,
      handleClick: Function,
      type: String,
      size: String,
      disabled: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      typeClass: function () {
        let name = types.find(tp => tp === this.type);
        if (name === 'undefined') {
          name = 'normal';
        }
        return name;
      },
      sizeClass: function () {
        let name = sizes.find(sz => sz === this.size);
        if (name === 'undefined') {
          name = 'md';
        }
        return name;
      },
      isDisable: function () {
        return this.disabled;
      }
    }
  };
</script>

<style>
  button {
    cursor: pointer;
    color: #fff;
    box-sizing: content-box;
    outline: none;
  }

  button:focus, button:active {
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
  }
  
  button:hover {
    cursor: pointer;
  }
  
  button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  
  .normal {
    background-color: #fff;
    border: 1px solid #b7b7b7;
    color: #b7b7b7;
  }

  .normal:hover, .normal:active {
    background-color: #b7b7b7;
    color: #fff;
  }

  .warning {
    background-color: #ffab0b;
    border: 1px solid #ffab0b;
  }

  .warning:hover, .warning:active {
    background-color: #fff;
    color: #ffab0b;
  }

  .success {
    background-color: #49b52a;
    border: 1px solid #49b52a;
  }

  .success:hover, .success:active {
    background-color: #fff;
    color: #49b52a;
  }

  .danger {
    background-color: #ff270c;
    border: 1px solid #ff270c;
  }

  .danger:hover, .danger:active {
    background-color: #fff;
    color: #ff270c;
  }

  .info {
    background-color: #3367de;
    border: 1px solid #3367de;
  }

  .info:hover, .info:active {
    background-color: #fff;
    color: #3367de;
  }

  .sm {
    border-radius: 3px;
    padding: 2px 5px;
    font-size: 0.7em;
  }

  .md {
    border-radius: 4px;
    padding: 5px 10px;
    font-size: 1em;
  }

  .lg {
    border-radius: 7px;
    padding: 10px 30px;
    font-size: 1.3em;
  }

  .xlg {
    border-radius: 10px;
    padding: 15px 40px;
    font-size: 1.6em;
  }
</style>
