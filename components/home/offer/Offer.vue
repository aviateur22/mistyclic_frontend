<template>
  <!-- compsition dune offre -->
  <article>    
    <header>     
      <!-- titre de l'offre --> 
      <Title :title="offer.title" />
      <!-- titre du commerce -->
      <store-name :name="offer.name" />
      <!-- remboursement -->
      <refund-price :refund="offer.refund" />
    </header>
    <main>
      <OfferImage :image="offer.image" />
      <!-- bouton recherche offre commerce -->
      <store-offers-button />
      <!-- type de commerce -->
      <store-type :storetype="offer.type" />
    </main>
  </article>
</template>

<script>
import OfferImage from './components/Image.vue';
import RefundPrice from './components/RefundPrice.vue';
import StoreName from './components/StoreName.vue';
import StoreOffersButton from './components/StoreOffersButton.vue';
import StoreType from './components/StoreType.vue';
import Title from './components/Title.vue';
export default {
    components: { Title, StoreName, StoreOffersButton, StoreType, RefundPrice, OfferImage},    
    props: ['offer']
};
</script>

<style>

</style>