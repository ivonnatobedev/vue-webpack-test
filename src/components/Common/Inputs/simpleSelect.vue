<template>
  <label>
    {{ label }}
    <v-select
      :options="dataList"
      :on-change="onChange"
    />
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
      data: {
        type: Array,
        required: true
      },
      selected: {
        type: Number,
        default: 0
      },
      inputLabel: {
        type: String,
        default: ''
      },
      getData: {
        type: Function,
        default: function (value) {
          return value;
        }
      }
    },
    data() {
      return {
        valuesList: this.data,
        selectedValue: '',
        label: this.inputLabel
      };
    },
    computed: {
      dataList: function () {
        return this.data;
      }
    },
    methods: {
      onChange: function (val) {
        return this.getData(val);
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
</style>
