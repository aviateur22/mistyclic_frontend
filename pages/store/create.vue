<template>
  <section class="form">
    <!-- formulaire de connexion -->
    <Form :title="'mon commerce'" :confirmButtonText="'valider'" :cancelButtonText="'annuler'" @clickAction="clickAction">
      <!-- renseignement store -->
      <CreateStoreInputPresentation class="aera--space" />  

      <!-- info supp store textaera-->
      <FormFormComponentsTextArea class="aera--space" :text="'courte présentation du commerce'" :placeHolder="'Quelques informations sur votre commerce'" :name="'presentation'" />
      
      <!-- image -->
      <FormFormComponentsUploadImage class="aera--space" :name="'image'" :text="'ajouter une photo'" />
    </Form>
  </section>  
</template>

<script>
import utils from '~/helpers/utils';
export default {
    async asyncData({$axios}){
        //const { data } = await $axios.get(utils.tokenApi.getToken);
        //console.log(data);
    },
    data(){
        return {
            //token csurf
            token: undefined
        };     
    },
    async fetch(){
        //Récuprération token
        //this.token = await this.$store.dispatch('actionHandler/wrapperAction', { action: 'token/getToken' });        
    },
    
    fetchOnServer: false,
    async created(){
        this.token = await this.$store.dispatch('actionHandler/wrapperAction', { action: 'token/getToken' });       
    },
    methods: {
        /**
         * Création d'un store
         * @param {FormData} data - données du formulaire
         */
        async clickAction(data){
            //ajout du token dans les données
            data.append('token', this.token);
            console.log(Object.fromEntries(data.entries()))

            //soumission du formaulaire
            const createStore = await this.$store.dispatch('actionHandler/wrapperAction', { action: 'store/createStore', data });
            console.log(createStore);
        }
    }   
};
</script>

<style scoped>
.form{
  display: flex;
  justify-items: center;
  align-items: center;
  width: 100%;
}

</style>