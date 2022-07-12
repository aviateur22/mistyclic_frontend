<template>
  <section class="form">
    <!-- formulaire de connexion -->
    <Form 
      :title="'se connecter à son compte'" 
      :confirmButtonText="'connexion'" 
      @clickAction="clickAction"
    >
      <!-- email -->
      <FormFormComponentsInputText :name="'email'" :type="'text'" :text="'email'" :placeHolder="'toto@hotmail.fr'" :require="true" />

      <!-- mote de passe -->
      <FormFormComponentsInputText :name="'password'" :type="'password'" :text="'votre mot de passe'" :placeHolder="'mot de passe'" :require="true" />        

      <!-- mote de passe confirmation -->
      <FormFormComponentsInputText :name="'confirmPassword'" :type="'password'" :text="'confirmer votre mot de passe'" :placeHolder="'confirmation du mot de passe'" :require="true" />        

      <!-- ville -->
      <FormSFormFormComponentsSelect :name="'city'" :items="cities" :introProposal="'sélectionner votre ville'" :text="'ville'" :require="true" />

      <!-- status de la société -->
      <FormFormComponentsUploadDocument :name="'doc'" :text="'status de la société'" :require="true" />
    </Form>
    <CommonButtonSecondary :text="'je suis un particulier'" />
  </section>  
</template>

<script>
export default {
    methods: {
    /**
     * connexion au compte
     */
        clickAction(data){
            console.log(Object.fromEntries(data.entries()));            
        }
    }

};
</script>

<style scoped>
.form{
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  width: 100%;
}

</style>