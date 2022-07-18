<template>
  <!-- filtrage de offres -->
  <article class="filter__type">
    <main class="filter__type-main">     
      <!-- recherche d'une ville -->
      <section class="filter__type-city">
        <!-- input box -->
        <FormFormComponentsInputText
          ref="inputBox"          
          :placeHolder="placeHolder"          
          :name="name"
          :type="'text'"         
          :text="text" 
          :required="true"            
          :selectedValue="proposal"   
          @getValue="updateListProposal"    
        />
        <!-- list des propositions -->
        <FormFormComponentsInputWithProposalListProposal 
          v-if="isVisible" 
          :prop="prop"
          :listProposal="listProposal" 
          @selectProposal="selectProposal" 
        />        
      </section>      
    </main>
  </article>
</template>

<script>
export default {
    props: ['name', 'text', 'placeHolder', 'listProposal', 'prop'],
    data(){
        return {
            //model pour l'input
            proposal: null,

            //visibilité liste des propositions
            isVisible: false,

            //valeur input text
            inputText: null
        };
    },
    methods: {
        /**
         * selection d'une donnée dans la liste
         * @param {Text} proposal - donnée de selectionnée
         */
        selectProposal(proposal){
            //v-model
            this.proposal = proposal;

            //masque la liste des villes
            this.isVisible = false;   
            
            //affiche le contenu de la selection en utilisant la proipriété désirée
            this.$refs.inputBox.selectValue(this.proposal[this.prop]);
        },       

        /**
         * récupération du inputBox et mise a jour des données a afficher
         */
        updateListProposal(data){
            //requete pour updater la liste des données
            this.$emit('updateProposalList', data);   

            //affiche ou masque la liste des proposition
            if(this.listProposal.length > 0 && data?.length > 0){
                this.isVisible = true;
            } else {
                this.isVisible = false;
            }       
        }
    }
};
</script>

<style scoped>
  .name--small{   
    width: auto;
    padding-right:1em ;
  }

  .filter__type-city{
    width: 100%;
    position: relative;
    flex-grow: 3;
  }
  .filter__type-input{
    width: 100%;
    font-size: var(--p16);    
    text-transform: uppercase;
    outline: none;
    border: none;
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);    
    text-align: right;
    font-size: var(--p16);
    font-weight: var(--bold);
  }

  @media screen and (min-width: 768px){
    .name--small{   
      width: 100%;
    }
     .filter__type-city{     
      flex-grow: 2;
    }    
  }

</style>