<template>
  <div class="input">
    <label :for="name" class="input__label">
      {{ text }}
    </label>
    <textarea type="text" name="message" class="input__text text--area" :placeholder="placeHolder" :required="required" />
  </div>
</template>

<script>
export default {
    props: ['name', 'text', 'placeHolder', 'required']

};
</script>

<style scoped>
  .input{
    display: flex;
    flex-direction: column;
  }
  .text--area{
    height: 200px; 
  }
</style>