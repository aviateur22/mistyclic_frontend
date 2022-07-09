<template>
  <!-- validation ou annumation -->
  <div class="button__action">
    <button-primary :text="'valider'" :isRed="false" />
    <button-secondary :text="'annuler'" :isRed="true" />
  </div>
</template>

<script>
import ButtonPrimary from '../form/ButtonPrimary.vue';
import ButtonSecondary from '../form/buttonSecondary.vue';
export default {
    components: { ButtonPrimary, ButtonSecondary },
};
</script>

<style scoped>
  .button__action{    
    display: flex;
    flex-direction: column;
    width: 100%;
  }
</style>