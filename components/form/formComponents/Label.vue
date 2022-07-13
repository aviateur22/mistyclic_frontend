<template>
  <div class="input">
    <label :for="name" class="input__label">
      {{ text }}
    </label>
    <p :name="name" min="0" class="input__text input--gray">
      {{ price }}
    </p>
  </div>
</template>

<script>
export default {
    props: ['text', 'name', 'price'],
    data(){
        return {            
            
        };
    }
};
</script>
<style scoped>
  .input--gray{
    color: #757575;
  }
</style>