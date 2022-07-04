<template>
  <div>    
    <Navbar />       
    <div class="outer__container">
      <div class="inner__container">        
        <FlashMessage />
        <nuxt />
      </div>
    </div>    
    <Footer />
  </div>  
</template>

<script>
import Navbar from '~/components/navigation/Navbar.vue';
export default {
    components: {
        Navbar
    }

};
</script>

<style scoped>
  *{
    font-family: 'raleway',"sans-serif";

  }
  .main__container{
    min-height: 100vh;
    width: 100%;
    background: green;
    display: flex;
    flex-direction: column;
  }

  .outer__container, .inner__container{
    margin-top: var(--navbar-height);
    min-height: calc( 100vh - var(--navbar-height) - var(--footer-height));
  }

  .outer__container{
    position: relative;
  }

</style>