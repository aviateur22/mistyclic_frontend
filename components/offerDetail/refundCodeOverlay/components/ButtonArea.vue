<template>
  <!-- bouton -->
  <article class="button_area">
    <header>
      <!-- explication action -->
      <p class="button_area-text title--header detail--text">
        Vérifier votre remboursement quand votre commercant vous le dira
      </p>
    </header>
    <main>
      <!-- bouton vérifier -->
      <CommonButtonPrimary :text="'vérifier'" :isRed="false" @click.native="checkRefundStatus" />

      <!-- bouton plus tard -->
      <CommonButtonSecondary :text="'plus tard'" :isRed="true" @click.native="closeOverlay" />
    </main>
  </article>
</template>

<script>
export default {
    methods: {
        /**
         * fermeture overlay code de remboursement
         */
        closeOverlay(){
            this.$emit('closeOverlay', false);
        },

        /**
         * status de remboursement
         */
        checkRefundStatus(){
            this.$emit('checkRefundStatus');
        }
    }

};
</script>

<style scoped>
  .button_area-text{
    padding-top: 2em;
    padding-bottom: 1em;
    font-weight: var(--normal);
  }
</style>