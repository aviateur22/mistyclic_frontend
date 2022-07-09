<template>
  <article>
    <input-text 
      :placeHolder="'150'"
      :name="'commission'"
      :type="'number'"         
      :text="'commission en euros € - 10%'" 
      :requires="true"
    />

    <input-text
      :placeHolder="'1'"
      :name="'tva'"
      :type="'number'"         
      :text="'prix TVA en euros €'" 
      :requires="true" 
    />

    <input-text
      :placeHolder="'1'"
      :name="'totalPrice'"
      :type="'number'"         
      :text="'prix total en euros €'" 
      :requires="true"
    />
  </article>
</template>

<script>
import InputText from '../form/InputText.vue';
export default {
    components: { InputText }
};
</script>

<style>

</style>