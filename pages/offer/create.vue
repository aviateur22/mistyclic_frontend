<template>
  <section class="form">
    <!-- formulaire de connexion -->
    <Form :title="'mon offre'" :confirmButtonText="'valider'" :cancelButtonText="'annuler'" @clickAction="submitForm">
      <!-- renseignement offre -->
      <CreateOfferInformationArea class="aera--space" @getBudgetPrice="getBudgetPrice" @getIndividualPrice="getIndividualPrice" />

      <!-- conditions -->
      <CreateOfferConditionArea class="aera--space" :conditions="conditions" @selectCondition="selectCondition" />       

      <!-- info supp textarea-->      
      <FormFormComponentsTextArea class="aera--space" :text="'informations supplémentaires sur l\'offre'" />

      <!-- image -->
      <FormFormComponentsUploadImage class="aera--space" :name="'image'" :text="'ajouter une photo'" />

      <!-- prix de l'offre -->
      <CreateOfferPriceArea :budgetPrice="budgetPrice" :price="price" class="aera--space" @getCalculatedPrice="calculatedPrice" />
    </Form>
  </section>  
</template>

<script>
export default {
    //verification connecté et professionnel
    middleware: ['authenticate', 'admin'],
    data() {
        return {
            //conditions disponible pour l'offre
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
            ],           
            
            // prix offre tva + commission en %
            price: {                    
                tva: 20,
                commission: 10 
            },

            //condition sélectionnée pour l'offre
            selectedConditions: [],

            //Prix global de
            budgetPrice: 0,

            //Prix calculé TVA/Commission/TTC
            calculCulatedPrice: {}
        };
    },
    methods: {
        /**
         * soummission de l'offre
         */
        submitForm(data){
            //ajout des conditrion d'offre
            data.append('conditions', this.selectedConditions);

            //ajout TVA
            data.append('tva', this.calculCulatedPrice.tvaPrice);

            //ajout commission
            data.append('commission', this.calculCulatedPrice.commissionPrice);

            //ajout Prix TTC calculé
            data.append('ttc', this.calculCulatedPrice.totalPrice);

            console.log(Object.fromEntries(data.entries()));
        },

        /**
         * Rembourssement par client
         */
        getIndividualPrice(){

        },

        /**
         * Budget total de l'offre
         */
        getBudgetPrice(value){
            this.budgetPrice = value;
        },
        
        /**
         * Récupération des prix calculés
         */
        calculatedPrice(value){
            this.calculCulatedPrice = value;
        },

        /**
         * mise a jour des conditions selectionnées
         */
        selectCondition(conditions){
            this.selectedConditions = conditions;
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