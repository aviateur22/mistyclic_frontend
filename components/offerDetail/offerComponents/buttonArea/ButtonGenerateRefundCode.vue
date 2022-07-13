<template>
  <article>
    <header>
      <!-- titre -->
      <p class="title--header detail--text">
        utiliser cette offre
      </p>
    </header>
    <main>
      <!-- générer un code de remboursement -->
      <CommonButtonPrimary @click.native="setRefundOverlayVisibility" :text="'Générer un code'" :isRed="false" />
    </main>
  </article>
</template>
<script>
export default {
    methods: {
        /**
         * Affichage génération d'un code de remboursement
         */
        setRefundOverlayVisibility(){
            this.$emit('setRefundOverlayVisibility', true);      
        }
    }
};
</script>

<style scoped>

</style>