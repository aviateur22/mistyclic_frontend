<template>
  <article class="input">
    <label :for="name" class="input__label iput--padding">
      {{ text }}
    </label>
    <main>
      <!-- bouton masqué - cause design-->
      <input ref="selectInput" style="display: none" type="file" accept="image/*" :name="name" @change="selectImage">
      <!--Preview de l'image -->
      <div v-if="imagePath" class="input__preview">
        <img :src="imagePath" class="input__preview-image">
      </div>  
    </main>
    <!-- bouton de substitution -->
    <footer class="input__footer">
      <div class="input__button-container">
        <buttonSecondary :text="'modifier'" :isRed="true" @click.native.prevent="$refs.selectInput.click()" />
      </div>      
    </footer>
  </article>
</template>

<script>
import buttonSecondary from '../common/ButtonSecondary.vue';
export default {
    components: { buttonSecondary },
    props: ['name', 'text'],
    data(){
        return {
            imagePath: require('~/assets/image/selectImage2.png')
        };
    },
    methods: {
        /**
         * selection d'une image
         */
        selectImage(){
            /** select file in input */           
            this.imagePath = URL.createObjectURL(this.$refs.selectInput.files[0]);
        }
    }

};
</script>

<style scoped>

  .input{
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
  }

  .iput--padding{
    padding-bottom: 1em;
  }

  /* image */
  .input__preview{
    width:100%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .input__preview-image{
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    max-width: 100%;
    max-height: 100%;    
  }

  /* boutton */
  .input__footer{
    width: 100%;   
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .input__button-container{
    width: 100%;
    max-width: 450px;     
    padding: 0.5em;
  }

</style>