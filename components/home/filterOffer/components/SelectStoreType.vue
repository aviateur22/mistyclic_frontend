<template>
  <select v-model="selectedItem" class="input__select" name="storeType">
    <!-- message présentée et non selectable -->
    <option selected disabled value="">
      Tous
    </option>
    <!-- liste en fonction de ce que renseigne l'ituluisateur -->
    <option v-for="(type) in storeType" :key="type.id" name="storeType">
      {{ type.name }}
    </option>        
  </select>
</template>

<script>
export default {
    props: ['storeType'],
    data(){
        return {
            selectedItem: null
        };
    }
};
</script>

<style scoped>
  .input__select{
    border: none;
    background: transparent;
    text-decoration: none;
    width: 100%;
    text-transform: uppercase;
    text-align: right;
    font-size: var(--p16);
    font-weight: var(--bold);
    outline: none;
  }

</style>