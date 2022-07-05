<template>
  <div class="input">   
    <div class="input__button">
      <label :for="name" class="input__button-label">
        {{ text }}
      </label>
      <!-- bouton masqué - cause design-->
      <input ref="selectInput" style="display: none" type="file" accept="image/*" :name="name" @click="selectImage">
    </div>
    <!--Preview de l'image -->
    <div v-if="imagePath" class="input__preview">
      <img :src="imagePath" class="input__preview-image">
    </div>  
    <!-- bouton visible -->
    <ButtonSecondary :text="'modifier'" :isRed="'false'" @click.prevent="$refs.selectInput.click()" />
  </div>  
</template>

<script>
export default {
    props: ['name', 'text'],
    data(){
        return {
            imagePath: null
        };
    },
    methods: {
        /**
         * selection d'une image
         */
        selectImage(){

        }
    }

};
</script>

<style scoped>

</style>