<template>
  <article class="store">
    <header class="store__header">
      <page-title :text="'mon commerce'" />
    </header>
    <main class="store__main">     
      <!-- renseignement store -->
      <section class="aera--space">
        <store-input-presentation />
      </section>     

      <!-- info supp store-->
      <section class="aera--space">       
        <!-- textaera -->
        <text-area :text="'courte présentation du commerce'" :placeHolder="'Quelques informations sur votre commerce'" />
      </section>

      <!-- image -->
      <section class="aera--space">
        <upload-image :name="'image'" :text="'ajouter une photo'" />
      </section>
    </main>

    <!-- boutton de validation  -->
    <footer class="store__footer">
      <button-aera />
    </footer>
  </article>
</template>

<script>
import PageTitle from '~/components/form/PageTitle.vue';
import TextArea from '~/components/form/TextArea.vue';
import UploadImage from '~/components/form/UploadImage.vue';
import ButtonAera from '~/components/common/ButtonAera.vue';
import StoreInputPresentation from '~/components/createStore/StoreInputPresentation.vue';
export default {
    components: { ButtonAera, PageTitle, TextArea, UploadImage, StoreInputPresentation },
    data() {
        return {
            //conditions de l'offre
            cities: [
                {
                    id: 1,
                    name: 'Auterive',
                    zip: '31190'
                },
                {
                    id: 2,
                    name: 'Miremont',
                    zip: '31190'
                },
                {
                    id: 3,
                    name: 'Muret',
                    zip: '31600'
                },
                {
                    id: 4,
                    name: 'Blagnac',
                    zip: '31700'
                },
            ]
        };
    }
};
</script>

<style scoped>

  .store{
    width: 100%;
    background: var(--grn);  
    max-width: 768px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 5px;
  }
  
  .store main{
    width: 100%;
    border-radius: 15px 15px 0px 0px;
    background: var(--wht);
    padding: 2em 1em;
  }

  .store__footer{    
    width: 100%;
    background: var(--wht);
    padding: 2em 1em;
  }

</style>