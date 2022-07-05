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
    min-height: calc( 100vh - var(--navbar-height) - var(--footer-height));
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .outer__container{
    margin-top: var(--navbar-height);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (min-width: 768px) {
    .inner__container{
      width: 768px;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    }
  }

  @media screen and (min-width: 1024px) {
     .inner__container{
      width: 1024px;
    }
    
  }
</style>