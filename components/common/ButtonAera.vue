<template>
  <!-- validation ou annumation -->
  <div class="button__action">
    <CommonButtonPrimary :text="'valider'" :isRed="false" />
    <CommonButtonSecondary :text="'annuler'" :isRed="true" />
  </div>
</template>

<script>

export default { 
};
</script>

<style scoped>
  .button__action{       
    max-width: 768px;
    display: flex;
    flex-direction: column;
    width: 100%;    
  }
</style>