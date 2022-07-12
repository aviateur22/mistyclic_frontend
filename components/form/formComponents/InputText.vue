<template>
  <div class="input">
    <label :for="name" class="input__label">
      {{ text }}
    </label>
    <input :type="type" :name="name" :placeholder="placeHolder" min="0" class="input__text" :required="required">
  </div>
</template>

<script>
export default {
    props: ['name', 'type', 'text', 'placeHolder', 'required']

};
</script>

<style scoped>
  .input{
    display: flex;
    flex-direction: column;
    padding: 0.6em 0em;
  }
</style>