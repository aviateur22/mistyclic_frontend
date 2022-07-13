<template>
  <div class="input">
    <label :for="name" class="input__label">
      {{ text }}
    </label>
    <input v-model="value" :type="type" :name="name" :placeholder="placeHolder" min="0" class="input__text" :required="required" @click="inputUpdate" @change="inputUpdate" @keyup="inputUpdate">
  </div>
</template>

<script>
export default {
    props: ['name', 'type', 'text', 'placeHolder', 'required'],
    data(){
        return {
            //valeur de l'input
            value: null
        };
    },
    methods: {
        /**
         * renvoie le contenu du v-model
         */
        inputUpdate(){
            this.$emit('getValue', this.value);           
        }
    }
};
</script>

<style scoped>
  .input{
    display: flex;
    flex-direction: column;
    padding: 0.6em 0em;
  }
</style>