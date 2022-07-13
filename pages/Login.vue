<template>
  <section class="form">
    <!-- formulaire de connexion -->
    <Form :title="'se connecter à son compte'" :confirmButtonText="'connexion'" @clickAction="clickAction">
      <!-- email -->
      <FormFormComponentsInputText :name="'email'" :type="'text'" :text="'email'" :placeHolder="'toto@hotmail.fr'" :require="true" />

      <!-- mote de passe -->
      <FormFormComponentsInputText :name="'password'" :type="'password'" :text="'votre mot de passe'" :placeHolder="'mot de passe'" :require="true" />
    </Form>
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
  justify-items: center;
  align-items: center;
  width: 100%;
}

</style>