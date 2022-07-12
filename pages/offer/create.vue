<template>
  <section class="form">
    <!-- formulaire de connexion -->
    <Form :title="'mon offre'" :confirmButtonText="'valider'" :cancelButtonText="'annuler'" @clickAction="clickAction">
      <!-- renseignement offre -->
      <CreateOfferInformationArea class="aera--space" />

      <!-- conditions -->
      <CreateOfferConditionArea class="aera--space" :conditions="conditions" />       

      <!-- info supp textarea-->      
      <FormFormComponentsTextArea class="aera--space" :text="'informations supplémentaires sur l\'offre'" />

      <!-- image -->
      <FormFormComponentsUploadImage class="aera--space" :name="'image'" :text="'ajouter une photo'" />

      <!-- prix de l'offre -->
      <CreateOfferPriceArea class="aera--space" />
    </Form>
  </section>  
</template>

<script>
export default {
    data() {
        return {
            conditions: [
                {
                    id: 1,
                    text: 'Non cumulable avec d’autre offre'
                },
                {
                    id: 2,
                    text: 'A retirer sur place'
                },
                {
                    id: 3,
                    text: 'A réserver'
                },
                {
                    id: 4,
                    text: 'En fonction de la disponibilité du jour'
                },
            ]
        };
    },
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