<template>
  <div class="input">
    <label :for="name" class="input__label">
      {{ text }}
    </label>
    <input :type="type" :name="name" :placeholder="placeHolder" min="0" class="input__text" :required="required">
  </div>
</template>

<script>
export default {
    props: ['name', 'type', 'text', 'placeHolder', 'required']

};
</script>

<style scoped>
  .input{
    display: flex;
    flex-direction: column;
    padding: 0.6em 0em;
  }

  .input__label{
    padding: 0.3em;
  }

  .input__label::first-letter{
    text-transform: capitalize; 
  }

  .input__text{
    height: 35px;
    border: 0.5px solid var(--flash-grn);
    border-radius: 8px;
    padding-left: 5px ;
    text-decoration: none;        
    outline: none;
  }

   @media screen and (min-width: 768px) {
    .input__label{ 
      font-size: var(--p20);
    }

    .input__text{
      font-size: var(--p20);
    }
  }

</style>