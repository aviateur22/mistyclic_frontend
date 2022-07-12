<template>
  <div class="overlay">
    <!-- gestion message sur le status du remboursement -->
    <article class="overlay__outer">   
      <header>
        <OfferDetailStatusRefundOverlayComponentsTitle :code="code" :refund="refund" />
      </header>  
      <main class="overlay__main">
        <!-- succées du remboursement -->
        <OfferDetailStatusRefundOverlayComponentsSuccessRefund v-if="success" />
        <!-- remboursement en attente -->
        <OfferDetailStatusRefundOverlayComponentsFailedRefund v-else @closeStatusOverlay="closeStatusOverlay" />
      </main>
    </article>
  </div>
</template>

<script>
export default {  
    props: ['refund', 'code'],
    data(){
        return {
            success: true
        };
    },
    methods: {
        /**
         * fermeture overlay code de remboursement
         */
        closeOverlay(value){
            this.$emit('closeOverlay', value);            
        },
        
        /**
         * fermeture overlay statis
         */
        closeStatusOverlay(){
            this.$emit('closeStatusOverlay');
        }
    }

};
</script>

<style scoped>
  .overlay{
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background: rgba(0, 0, 0, 0.6);
    padding: 1em 2em;
    overflow-y: scroll;
    margin-top: var(--navbar-height);
  }

  .overlay__outer{
    background: var(--wht);
    padding: 1em;
  }

</style>