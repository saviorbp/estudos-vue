<template>
  <button @click="click">
    Click ButtonVue {{ count }} times
  </button>
  <p>{{ saudacao() }}</p>
</template>

<script>
export default {
  name: 'ButtonVue',
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    click() {
      this.count += 1;
    },
    saudacao() {
      return 'saudaçao methods';
    },
  },
};
</script>
