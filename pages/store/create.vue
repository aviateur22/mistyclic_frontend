<template>
  <section class="form">
    <!-- formulaire de connexion -->
    <Form :title="'mon commerce'" :confirmButtonText="'valider'" :cancelButtonText="'annuler'" @clickAction="clickAction">
      <!-- renseignement store -->
      <CreateStoreInputPresentation class="aera--space" />  

      <!-- info supp store textaera-->
      <FormFormComponentsTextArea class="aera--space" :text="'courte présentation du commerce'" :placeHolder="'Quelques informations sur votre commerce'" />

      <!-- image -->
      <FormFormComponentsUploadImage class="aera--space" :name="'image'" :text="'ajouter une photo'" />
    </Form>
  </section>  
</template>

<script>
export default {
    methods: {
    /**
     * connexion au compte
     */
        clickAction(data){
            console.log(Object.fromEntries(data.entries()));            
        }
    }

};
</script>

<style scoped>
.form{
  display: flex;
  justify-items: center;
  align-items: center;
  width: 100%;
}

</style>