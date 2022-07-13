<template>
  <section>
    <!-- text de success -->
    <p class="success detail--text"> 
      votre remboursement est effectué 
    </p>
    <!-- button ok -->
    <CommonButtonPrimary :text="'ok'" @click.native="backHome" />
  </section>  
</template>

<script>
export default {
    methods: {
        /**
         * retour accueil
         */
        backHome(){
            this.$router.push({
                path: '/'
            });
        }
    }

};
</script>

<style scoped>
.success{
  color: var(--grn);  
  text-align: center;
  width: 100%;
  padding: 2em 1em;
}
</style>