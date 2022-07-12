<template>
  <article class="form">
    <!-- titre du formaulaire -->
    <header class="form__header"> 
      <h2>
        {{ title }}
      </h2>
    </header>
    <main class="form__main" :style="{ 'backgroundImage': `url(${image})`}">     
      <form ref="form" class="form__main-inner">
        <!-- injection contenu du formulaire -->
        <slot></slot>

        <!-- boutton validation -->
        <CommonButtonPrimary class="form__button" :text="confirmButtonText" @click.native.prevent="clickAction" />
        <!-- boutton annulation -->
        <CommonButtonSecondary v-if="cancelButtonText" :isRed="true" :text="cancelButtonText" />
      </form>
    </main>
  </article>
</template>

<script>
import image from '~/assets/image/hand.png';
export default {
    props: ['title', 'confirmButtonText', 'cancelButtonText'],
    data(){
        return {
            image
        };
    },
    methods: {
        /**
         * soumission des données
         */
        clickAction(e){
            // formdata avec les données du formulaire
            const data = new FormData(this.$refs.form);
            this.$emit('clickAction', data);
        }
    }

};
</script>

<style scoped>
  .form{
    display: flex;
    flex-direction: column;
    width: 100%;
    background: rgb(249, 255, 253);
    height: 100%;
    align-items: center;
    justify-content: center;
  }

  .form__header{
    width: 100%;
    font-size: var(--p20);
    font-weight: var(--bold);    
    text-align: center;
    padding: 2em 1em;    
    color: var(--grn);
  }

  .form__header::first-letter{
    text-transform: uppercase;    
  }

  .form__main{
    width: 100%;    
    background: var(--wht);   
    display: flex;
    align-items: center;
    justify-content: center;
    background-position: 50% 30px;
    background-repeat: no-repeat;
    background-size: 45%;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    padding: 1em;
    max-width: 500px;
  }

  .form__main-inner{
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    padding-top: 150px;
  }

  .form__button{    
    margin-top: 2em;
  }

@media screen and (min-width: 768px) {
  .form__main-inner{    
    padding-top: 150px;
  }

  .form__header{
    font-size: var(--p20);
  }
  
}
</style>