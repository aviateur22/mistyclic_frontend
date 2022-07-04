<template>  
  <nav class="nav">    
    <!-- mobile menu -->
    <NavbarMobile v-if="displayNavbarMobile" @toggleNavbarMobile="toggleNavbarMobile" />

    <!-- titre + image -->
    <section class="nav__title-section">
      <img src="~/assets/image/icone.png" alt="image d'une poignée entre 2 mains">
      <h1 class="nav__title">
        mistyclic
      </h1>
    </section>

    <!--  navigation -->
    <section v-if="!displayMobileButton" class="nav__item-section">
      <ul class="nav__list">
        <li class="nav__mobile-li">
          <nuxt-link class="nav__mobile-link" to="/login">
            connexion | s'inscrire
          </nuxt-link>            
        </li>
        <li class="nav__mobile-li">
          <nuxt-link class="nav__mobile-link" to="/login">
            commerce
          </nuxt-link>            
        </li>
        <li class="nav__mobile-li">
          <nuxt-link class="nav__mobile-link" to="/login">
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
         * 
         */
        toggleNavbarMobile(){
            this.displayNavbarMobile = !this.displayNavbarMobile;
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
    width: 100%;
    height: var(--navbar-height);
    display: flex;
    width: 100%;
    justify-content: space-between;    
    align-items: center;
    padding: 0.5em 0em;
  }

  .nav__title-section{
    display: flex;
    align-items: center;
    padding: 1em;
  }

  nav h1{
    color: var(--grn);
    font-size: var(--p32);
    font-weight: var(--bold); 
    text-transform: uppercase;   
    padding-left: 0.5em

  }
  section img{
    height: var(--navbar-height)
  }

  .nav__title{
    font-size: var(--p48);
  }

  section ul{
    display: flex;
  }

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
    }

    .nav__mobile-li{
      margin: 2em 0em;
      width: 100%;
      text-align: center;
    }

    .nav__mobile-link{
      text-transform: uppercase;
      text-decoration: none; 
      font-weight: var(--light-bold);
      color: var(--blk)
    }    
  }
</style>