<template>  
  <nav class="nav">    
    <!-- mobile menu -->
    <NavbarMobile v-if="displayNavbarMobile" @toggleNavbarMobile="toggleNavbarMobile" />

    <!-- titre + image -->
    <section class="nav__title-section">
      <nuxt-link class="nav__mobile-link" to="/">
        <div class="nav__title-container">
          <img src="~/assets/image/icone.png" alt="image d'une poignée entre 2 mains">
          <h1 class="nav__title">
            mistyclic
          </h1>
        </div>        
      </nuxt-link>           
    </section>

    <!--  navigation -->
    <section v-if="!displayMobileButton" class="nav__item-section">
      <ul class="nav__list">
        <li class="nav__mobile-li">
          <nuxt-link class="nav__mobile-link" to="/login">
            connexion
          </nuxt-link>            
        </li>
        <li class="nav__mobile-li">
          <nuxt-link class="nav__mobile-link" to="/register/Client">
            inscription
          </nuxt-link>            
        </li>
        <li class="nav__mobile-li">
          <nuxt-link class="nav__mobile-link" to="/login">
            mon compte
          </nuxt-link>            
        </li>       
        <li class="nav__mobile-li">
          <nuxt-link class="nav__mobile-link" to="/offer/create">
            nouvelle offre
          </nuxt-link>            
        </li>
        <!--  link professionnel -->
        <li class="nav__mobile-li">
          <nuxt-link class="nav__mobile-link" to="/store/create">
            commerce
          </nuxt-link>            
        </li>
        <li class="nav__mobile-li">
          <nuxt-link class="nav__mobile-link" to="/offer/create">
            offre
          </nuxt-link>            
        </li>
      </ul>
    </section>

    <!-- burger menu -->
    <section v-if="displayMobileButton" class="nav__button-mobile">
      <div class="nav__burger" @click="toggleNavbarMobile">
        <div class="nav__line" />
        <div class="nav__line" />
        <div class="nav__line" />
      </div>
    </section>
  </nav>  
</template>

<script>
import NavbarMobile from '~/components/navigation/NavbarMobile.vue';
export default {
    components: {
        NavbarMobile
    },
    data(){
        return {
            //affichage navbar mobile
            displayNavbarMobile: false,

            //affichage du button mobile
            displayMobileButton: false,

            //breakpoint
            breakPoint: 768
        };
    },
    mounted(){
        window.addEventListener('resize', this.toggleMobileButton);
        this.toggleMobileButton();
    },
    methods: {
        /**
         * gestion affichage menu mobile
         */
        toggleNavbarMobile(){
            this.displayNavbarMobile = !this.displayNavbarMobile;

            if(this.displayNavbarMobile){
                this.displayMobileButton = false;
            } else {
                this.displayMobileButton = true;
            }
        },

        /**
         * affiche ou masque le bouton mobile
         */
        toggleMobileButton(){
            if(window.innerWidth <= this.breakPoint){
                this.displayMobileButton = true;
            } else {
                this.displayMobileButton = false;
                this.displayNavbarMobile = false;
            }
        }
    }
};
</script>

<style scoped>

  .nav{
    height: var(--navbar-height);
    display: flex;
    width: 100%;
    justify-content: space-between;    
    align-items: center;    
    box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 1px -2px;
    position: fixed;
    top: 0px;
    z-index: 2;
    background: var(--wht);
  }

  /* logo + titre */
  .nav__title-section{
    display: flex;
    align-items: center;
    padding: 0.5em;
  }

  nav h1{
    color: var(--grn);
    font-size: var(--p32);
    font-weight: var(--bold); 
    text-transform: uppercase;   
    padding-left: 0.2em

  }

  section img{
    padding: 0.2em;
    height: 65px
  }

  .nav__title-container{
    display: flex;
    align-items: center;
  }

  .nav__mobile-link{
      text-transform: uppercase;
      text-decoration: none; 
      font-weight: var(--light-bold);
      color: var(--blk);
      padding: 1em;
      width: auto;
    }    

  /* navigation */
  .nav__item-section{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding-right: 2em;
  }

  section ul{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* burger menu  */
  .nav__button-mobile{
    display: flex;
    padding-right: 1em;
    cursor: pointer;
  }

  .nav__burger{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0em 1em;
    cursor: pointer;
  }

  .nav__line{
    width: 30px;
    height: 3px;
    margin: 2px 0px;
    background-color:black;
    border-radius: 5px;
  }

  @media screen and (min-width: 768px) {
    nav h1{
      font-size: var(--p48);
      padding-left: 0.5em;
    }

    .nav__mobile-li{
      text-align: center;
      height: 100%;
      display: flex;
    }
  }
</style>