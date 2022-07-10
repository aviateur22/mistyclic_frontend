<template>
  <article class="offer">
    <header class="offer__header">
      <FormPageTitle :text="'mon offre'" />
    </header>
    <main class="offer__main">     
      <!-- renseignement offre -->
      <section class="aera--space">
        <CreateOfferInformationArea />
      </section> 

      <!-- conditions -->
      <section class="aera--space">
        <!-- checkbox -->
        <CreateOfferConditionArea :conditions="conditions" />        
      </section>

      <!-- info supp -->
      <section class="aera--space">       
        <!-- textaera -->
        <FormTextArea :text="'informations supplémentaires sur l\'offre'" />
      </section>

      <!-- image -->
      <section class="aera--space">
        <FormUploadImage :name="'image'" :text="'ajouter une photo'" />
      </section>

      <!-- prix de l'offre -->
      <section class="aera--space">
        <CreateOfferPriceArea />
      </section>
    </main>
    <footer class="offer__footer">
      <!-- boutton soumission formulaire -->
      <CommonButtonAera />
    </footer>
  </article>
</template>

<script>
export default {
    components: { },
    data() {
        return {
            //conditions de l'offre
            conditions: [
                {
                    id: 1,
                    text: 'non cumulable avec d\'autres offres'
                },
                {
                    id: 2,
                    text: 'à retirer sur place'
                },
                {
                    id: 3,
                    text: 'à réserver'
                },
                {
                    id: 4,
                    text: 'fonction de la diponibilité du jour'
                },
            ]
        };
    }
};
</script>

<style scoped>

  .offer{
    width: 100%;
    background: var(--grn);  
    max-width: 768px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 5px;
  }
  
  .offer main{
    width: 100%;
    border-radius: 15px 15px 0px 0px;
    background: var(--wht);
    padding: 2em 1em;
  }

  .offer__footer{    
    width: 100%;
    background: var(--wht);
    padding: 2em 1em;
  }

</style>