<template>
  <nav class="nav__mobile">
    <!-- bouton fermeture -->
    <button class="nav__mobile-close-btn" @click="toggleNavbarMobile">
      <svg viewBox="0 0 352 512">
        <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"> </path>
      </svg>
    </button>  
    <!-- outer - background couleur grise -->
    <div class="nav__mobile-outer">
      <!-- inner - backround - coleur blanche -->
      <div class="nav__mobile-inner">      
        <!-- image -->
        <section class="nav__mobile-title">
          <img src="~/assets/image/icone.png" alt="">
        </section>

        <!-- navigation -->
        <section class="nav__mobile-items">
          <ul class="nav__mobile-list">
            <li class="nav__mobile-li">
              <nuxt-link class="nav__mobile-link" to="/login">
                connexion
              </nuxt-link>            
            </li>
            <li class="nav__mobile-li">
              <nuxt-link class="nav__mobile-link" to="/login">
                inscription
              </nuxt-link>            
            </li>
            <li class="nav__mobile-li">
              <nuxt-link class="nav__mobile-link" to="/login">
                mon compte
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
      </div>
    </div>     
  </nav>
</template>

<script>
export default {
    data(){
        return {
            
        };
    },
    methods: {
        /**
         * affiche ou masque nabar mobile
         */
        toggleNavbarMobile(){
            this.$emit('toggleNavbarMobile');            
        }
      
    }

};
</script>

<style scoped>
  .nav__mobile{
    width: 100%;    
    position: fixed;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    background: var(--wht);
    display: flex;
    flex-direction: column;    
    z-index: 1;
  }

  /* button fermeture  */
  .nav__mobile-close-btn{
    position: absolute;
    right: 5px;
    top: 5px;
    background: transparent;
    border: 0px;
    cursor: pointer;
    width: 50px;
  }

  nav svg{
    width: 100%;
  }

  /* image */
  .nav__mobile-title{
    margin-top: 50px;
    height: 300px;
    max-width: 180px;
  }

  .nav__mobile-title img{
    width: 100%;
  }

  /* div exterieur */
  .nav__mobile-outer{
    background:  rgba(0, 0, 0, 0.4);
    height: 100%;
  }

  /* contenu interieur */
  .nav__mobile-inner{
    width: 85%;
    background: var(--wht);
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }  

  .nav__mobile-items{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    color: var(--blk);
    cursor: pointer;
  }
</style>