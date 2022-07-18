<template>
  <!-- renseignement sur le commerce -->
  <article>
    <main class="main">  
      <!--  nom du commerce-->
      <FormFormComponentsInputText
        :placeHolder="'chez poupille'"
        :name="'name'"
        :type="'text'"         
        :text="'nom du commerce'" 
        :required="true"
      />

      <!-- type de commerce -->
      <FormFormComponentsInputText
        :placeHolder="'Séléctionnez un type de commerce'"
        :name="'type'"
        :type="'text'"         
        :text="'type de commerce'" 
        :required="true"
      />

      <!-- adresse -->
      <FormFormComponentsInputText
        :placeHolder="'32 bis des chemins du vercor'"
        :name="'adress'"
        :type="'text'"         
        :text="'adresse - Rue'" 
        :required="true"
      />

      <!-- ville -->
      <FormFormComponentsInputText
        :placeHolder="'Auterive'"
        :name="'city'"
        :type="'text'"         
        :text="'ville'" 
        :required="true"
      />

      <!-- code postale -->
      <FormFormComponentsInputText
        :placeHolder="'31190'"
        :name="'zip'"
        :type="'text'"         
        :text="'code postal'" 
        :required="true"
      />

      <!-- téléphone -->
      <FormFormComponentsInputText
        :placeHolder="'05 61 30 .. ..'"
        :name="'phone'"
        :type="'tel'"         
        :text="'téléphone du commerce'" 
        :required="true"
      />

      <!-- email -->
      <FormFormComponentsInputText
        :placeHolder="'moncommerce@hotmail.fr'"
        :name="'email'"
        :type="'email'"         
        :text="'email du commerce'" 
        :required="false"
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