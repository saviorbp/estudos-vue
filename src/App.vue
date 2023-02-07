<template>
  <div id="app">
    <ButtonVue></ButtonVue>
    <h1>Props e diretiva</h1>
    <h2>v-bind, v-if e v-show</h2>
    <ButtonVbind></ButtonVbind>
    <p>{{ titulo }}</p>
  </div>
</template>

<script>
import ButtonVue from './ButtonVue.vue';
import ButtonVbind from './ButtonVbind.vue';

export default {
  name: 'App',
  components: {
    ButtonVue,
    ButtonVbind,
  },
  data() {
    return {
      titulo: 'usando vue js 3',

    };
  },
};
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  right: 100vh;
}
</style>
