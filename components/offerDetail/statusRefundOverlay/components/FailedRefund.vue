<template>
  <section>
    <!-- text de success -->
    <p class="success detail--text"> 
      remboursement en attente
    </p>
    <!-- button ok -->
    <CommonButtonPrimary :text="'actualiser'" :isRed="false" @click.native="backHome" />
    <CommonButtonSecondary :text="'fermer'" :isRed="true" @click.native="closeOverlay" />
  </section>  
</template>

<script>
export default {
    methods: {
        /**
         * actualisation du status du remboursement
         */
        backHome(){           
        },

        /**
         * fermeture overlay
         */
        closeOverlay(){
            this.$emit('closeStatusOverlay', false);
            console.log('i')
        }
    }

};
</script>

<style scoped>
.success{
  color: var(--red);  
  text-align: center;
  width: 100%;
  padding: 2em 1em;
}
</style>