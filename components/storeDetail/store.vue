<template>
  <article class="store">
    <header>   
      <!-- image -->      
      <StoreDetailStoreComponentImage :imagePath="store.imagePath" :storeName="store.name" />   
    </header>
    <main>
      <!-- type de commerce -->
      <StoreDetailStoreComponentItem class="aera--space" :title="'type de commerce'" :text="store.type" />

      <!-- decription du commerce -->
      <StoreDetailStoreComponentItem class="aera--space" :title="'description du commerce'" :text="store.description" />

      <!-- tel -->
      <StoreDetailStoreComponentItem class="aera--space" :title="'téléphone'" :text="store.phone" />

      <!-- email -->
      <StoreDetailStoreComponentItem class="aera--space" :title="'email'" :text="store.email" />

      <!-- adresse -->
      <StoreDetailStoreComponentItem class="aera--space" :title="'adress'" :text="store.adress +'-'+ store.city" />
    </main>
    <footer>
      <!-- bouton access au offre du commerce -->
      <CommonButtonOfferFilterByStore class="margin-bottom" />
    </footer>
  </article>
</template>

<script>
export default {
    props: ['store']
};
</script>

<style scoped>
  .store {
    max-width: 768px;
  }

  .margin-bottom{
    margin-bottom: 2em;
  }

</style>