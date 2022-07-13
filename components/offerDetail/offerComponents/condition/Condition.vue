<template>
  <!-- contenu de la condition -->
  <li class="condition detail--text"> 
    {{ condition }}
  </li>
</template>

<script>
export default {
    props: ['condition']
};
</script>

<style scoped>
.condition::first-letter{
  text-transform: capitalize;
}
.condition{
  list-style-type: circle;
  list-style-position: inside;
}
</style>