<template>
  <div class="checkbox">
    <input v-model="isChecked" type="checkbox" :name="name" class="checkbox__content">
    <!-- background si active-->
    <div v-if="isChecked" class="checkbox--color" />

    <!-- text -->
    <label :for="name" class="checkbox__label" @click="toggleButton">
      {{ text }}
    </label>    
  </div>
</template>

<script>
export default {
    props: ['name', 'text'],
    data(){
        return {
            //statu de la checkbox
            isChecked: true
        };
    },
    methods: {
        /**
         * modification état checkBox
         */
        toggleButton(){
            this.isChecked = !this.isChecked;
        }
    }

};
</script>

<style scoped>
  .checkbox {
    padding: 1em 0em;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;  
    height: 20px;  
  }
  .checkbox__content{
    display: none;
  }

  .checkbox__label::before{
    content: '';
    position: absolute;
    left: 0px;
    top: 50%;
    transform: translateY(-50%);
    height: 20px;
    width: 20px;
    border: 0.2px solid var(--flash-grn);
    border-radius: 5px;
    display: block;
    cursor: pointer;
  }

  .checkbox--color{
    content: '';
    position: absolute;
    left: 0px;
    top: 50%;
    transform: translateY(-50%);
    height: 20px;
    width: 20px;
    border: 0.2px solid var(--flash-grn);
    border-radius: 5px;
    background: green;
    display: block;
    cursor: pointer;
  }

  .checkbox__label::first-letter{
    text-transform: capitalize;
  }

  .checkbox__label{    
    padding-left: 1.8em;        
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    .checkbox__label{ 
      font-size: var(--p20);
    }
  }
</style>