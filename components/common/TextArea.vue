<template>
  <div class="input">
    <label :for="name" class="input__label">
      {{ text }}
    </label>
    <text-area type="text" name="message" :placeholder="placeHolder" :required="required" />
  </div>
</template>

<script>
export default {
    props: ['name', 'text', 'placeHolder', 'required']

};
</script>

<style scoped>

</style>