<template>
  <!-- renseignement sur le commerce -->
  <article>
    <main class="main">     
      <FormFormComponentsInputText
        :placeHolder="'chez poupille'"
        :name="'name'"
        :type="'text'"         
        :text="'nom du commerce'" 
        :requires="true"
      />

      <FormFormComponentsInputText
        :placeHolder="'Séléctionnez un type de commerce'"
        :name="'type'"
        :type="'text'"         
        :text="'type de commerce'" 
        :requires="true"
      />

      <FormFormComponentsInputText
        :placeHolder="'32 bis des chemins du vercor'"
        :name="'adress'"
        :type="'text'"         
        :text="'adresse - Rue'" 
        :requires="true"
      />

      <FormFormComponentsInputText
        :placeHolder="'Auterive'"
        :name="'city'"
        :type="'text'"         
        :text="'ville'" 
        :requires="true"
      />

      <FormFormComponentsInputText
        :placeHolder="'31190'"
        :name="'zip'"
        :type="'text'"         
        :text="'code postal'" 
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