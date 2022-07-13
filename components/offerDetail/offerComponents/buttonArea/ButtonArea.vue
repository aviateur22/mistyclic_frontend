<template>
  <!-- button action -->
  <article>
    <main>
      <!-- génération d'un code de remboursement -->
      <OfferDetailOfferComponentsButtonGenerateRefundCode @setRefundOverlayVisibility="setRefundOverlayVisibility" class="aera--space" />

      <!-- voir les offres de ce commerce -->
      <OfferDetailOfferComponentsButtonOfferByStore />
    </main>
  </article>
</template>

<script>
export default {
    methods: {
        /**
         * affichage code de remboursement
         */
        setRefundOverlayVisibility(value){
            this.$emit('setRefundOverlayVisibility', value);
        }
    }
};
</script>

<style>

</style>