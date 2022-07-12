<template>
  <article>
    <FormFormComponentsInputText
      :placeHolder="'150'"
      :name="'commission'"
      :type="'number'"         
      :text="'commission en euros € - 10%'" 
      :requires="true"
    />

    <FormFormComponentsInputText
      :placeHolder="'1'"
      :name="'tva'"
      :type="'number'"         
      :text="'prix TVA en euros €'" 
      :requires="true" 
    />

    <FormFormComponentsInputText
      :placeHolder="'1'"
      :name="'totalPrice'"
      :type="'number'"         
      :text="'prix total en euros €'" 
      :requires="true"
    />
  </article>
</template>

<script>
export default {
};
</script>

<style>

</style>