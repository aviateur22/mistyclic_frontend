<template>
  <!-- renseignement sur l'offre -->
  <article>
    <main class="main">  
      <!-- budget de l'offre -->
      <FormFormComponentsInputText        
        :placeHolder="'150'"
        :name="'budget'"
        :type="'number'"         
        :text="'budget total de l\'offre en euros €'" 
        :required="true"                
        @getValue="getBudgetPrice"
      />
      
      <!-- remise par client -->
      <FormFormComponentsInputText
        :placeHolder="'1'"
        :name="'individualRefund'"
        :type="'number'"         
        :text="'remise par client en en euros €'" 
        :required="true"        
      />
    </main>   
  </article>
</template>

<script>
export default {
    data(){
        return {
            //remise global
            budgetPrice: 0,

            //rembourssement par client
            individualRefund: 0
        };
    },
    methods: {
        /**
         * récupération budget global
         */
        getBudgetPrice(value){
            this.budgetPrice = value;            
            //remonte la données au parent
            this.$emit('getBudgetPrice', value);
        }
    }
};
</script>

<style scoped>

</style>