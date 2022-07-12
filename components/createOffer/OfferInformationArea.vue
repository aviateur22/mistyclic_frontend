<template>
  <!-- renseignement sur l'offre -->
  <article>
    <main class="main">     
      <FormFormComponentsInputText
        :placeHolder="'150'"
        :name="'budjet'"
        :type="'number'"         
        :text="'budget total de l\'offre en euros €'" 
        :requires="true"
      />

      <FormFormComponentsInputText
        :placeHolder="'1'"
        :name="'budjet'"
        :type="'number'"         
        :text="'remise par client en en euros €'" 
        :requires="true"
      />
    </main>   
  </article>
</template>

<script>
export default {
};
</script>

<style scoped>

</style>