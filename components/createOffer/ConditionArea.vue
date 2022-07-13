<template>
  <!-- liste des conditions pour une offre -->
  <div class="condition">
    <p class="condition__text">
      conditions de récupération
    </p>
    <FormFormComponentsCheckbox v-for="(condition) in conditions" :id="condition.id" :key="condition.id" :name="condition.id" :text="condition.text" @selectCondition="selectCondition" /> 
  </div> 
</template>

<script>

export default {
    props: ['conditions'],  
    data(){
        return {
            //tableau de conditions selectionnée
            checkedItems: []
        };
    },
    methods: {
        /**
         * ajout dans le tableau de la condition qui est selectionnée
         */
        selectCondition(condition){
            this.checkedItems.push(condition);

            //renvoi le tableau des conditions de l'offre
            this.$emit('selectCondition', this.checkedItems);
        }
    }
};
</script>

<style scoped>
.condition__text{
  padding-bottom: 1em;
}

.condition__text::first-letter{
  text-transform: capitalize;
}

@media screen and (min-width:768px) {
  .condition__text{
    font-size: var(--p20);
  }
  
}
</style>