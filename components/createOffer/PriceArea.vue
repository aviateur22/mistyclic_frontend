<template>
  <article>
    <!-- commission de mistyclic -->
    <FormFormComponentsLabel      
      :name="'commission'"        
      :text="`commission de ${price.commission}% - en euros €`"    
      :price="commissionPrice"   
    />

    <!-- tva -->
    <FormFormComponentsLabel      
      :name="'tva'"        
      :text="`prix TVA ${price.tva}% - en euros €`"    
      :price="tvaPrice"   
    />

    <!-- prix TTC -->
    <FormFormComponentsLabel      
      :name="'totalPrice'"        
      :text="`prix total en euros €`"    
      :price="totalPrice"   
    />
  </article>
</template>

<script>
export default {
    props: ['budgetPrice', 'price'],
    data(){
        return {
            //Prix de la TVA
            tvaPrice: 0,

            //Prix de la commission
            commissionPrice: 0,

            //Prix total
            totalPrice: 0
        };
    },
    watch: {
        /**
         * Evolution de la commission et de la TVA
         */
        budgetPrice(newValue){
            //Pas de commission renseignée
            if(!this.price.commission || !this.price.tva){
                return;
            }
            //commission
            this.commissionPrice = (this.budgetPrice * this.price.commission / 100).toFixed(2);  

            //tva
            this.tvaPrice = (this.budgetPrice * this.price.tva / 100).toFixed(2);

            //prix total
            this.totalPrice = (Number(this.budgetPrice) + Number(this.tvaPrice) + Number(this.commissionPrice)).toFixed(2);

            //Renvois de prix calculés
            this.getCalculatedPrice({
                commissionPrice: this.commissionPrice,
                tvaPrice: this.tvaPrice,
                totalPrice: this.totalPrice
            });
        }
    },
    methods: {
        /**
         * Renvoie les prix calculés au parent
         */
        getCalculatedPrice(calculatedPrice){
            this.$emit('getCalculatedPrice', calculatedPrice);
        }
    }    
};
</script>

<style>

</style>