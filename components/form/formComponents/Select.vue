<template>
  <!-- selection du sex -->
  <article class="input">
    <label :for="name" class="input__label">
      {{ text }}
    </label>
    <select v-model="selectedItem" class="input__select" :name="name">
      <!-- message présentée et non selectable -->
      <option selected disabled value="">
        {{ introProposal }}
      </option>
      <!-- liste en fonction de ce que renseigne l'ituluisateur -->
      <option v-for="(item) in items" :key="item.id" :name="name">
        {{ item.name }}
      </option>        
    </select>
  </article>
</template>

<script>
export default {
    props: ['items', 'name', 'introProposal', 'text'],
    data(){
        return {
            //item de selectionné
            selectedItem: undefined
        };
    }

};
</script>

<style>

</style>