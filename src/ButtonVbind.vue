<template>
  <div>
    <label for="css">css<input id="css" type="text" @input="myClass = $event.target.value"/></label>
  </div>
  <P v-bind:class="myClass">classe css: {{ myClass }}</P>
</template>

<script>
export default {
  name: 'ButtonVbind',
  data() {
    return {
      myClass: '',
    };
  },
};
</script>

<style>
.p {
  background-color: blueviolet;
}

.g {
  background-color: green;
}
</style>
