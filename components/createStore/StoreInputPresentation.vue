<template>
  <!-- renseignement sur le commerce -->
  <article>
    <main class="main">     
      <input-text 
        :placeHolder="'chez poupille'"
        :name="'name'"
        :type="'text'"         
        :text="'nom du commerce'" 
        :requires="true"
      />

      <input-text 
        :placeHolder="'Séléctionnez un type de commerce'"
        :name="'type'"
        :type="'text'"         
        :text="'type de commerce'" 
        :requires="true"
      />

      <input-text 
        :placeHolder="'32 bis des chemins du vercor'"
        :name="'adress'"
        :type="'text'"         
        :text="'adresse - Rue'" 
        :requires="true"
      />

      <input-text 
        :placeHolder="'Auterive'"
        :name="'type'"
        :type="'text'"         
        :text="'ville'" 
        :requires="true"
      />

      <input-text 
        :placeHolder="'31190'"
        :name="'type'"
        :type="'text'"         
        :text="'code postal'" 
        :requires="true"
      />
    </main>   
  </article>
</template>

<script>
import InputText from '../common/InputText.vue';
export default {
    components: { InputText }

};
</script>

<style scoped>

</style>