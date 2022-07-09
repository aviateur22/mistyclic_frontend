<template>
  <!-- renseignement sur l'offre -->
  <article>
    <main class="main">     
      <input-text 
        :placeHolder="'150'"
        :name="'budjet'"
        :type="'number'"         
        :text="'budget total de l\'offre en euros €'" 
        :requires="true"
      />

      <input-text 
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
import InputText from '../form/InputText.vue';
export default {
    components: { InputText }

};
</script>

<style scoped>

</style>