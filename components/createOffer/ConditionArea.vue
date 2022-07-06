<template>
  <!-- liste des conditions pour une offre -->
  <div class="condition">
    <p class="condition__text">
      conditions de récupération
    </p>
    <checkbox v-for="(condition, i) in conditions" :key="i" :name="i" :text="condition.text" />
  </div>
</template>

<script>
import Checkbox from '../common/Checkbox.vue';
export default {
    components: { Checkbox },
    props: ['conditions'],
    created(){
        console.log(this.conditions);
    }

};
</script>

<style scoped>
.condition__text{
  padding-bottom: 1em;
}

.condition__text::first-letter{
  text-transform: capitalize;
}

@media screen and (min-width:768px) {
  .condition__text{
    font-size: var(--p20);
  }
  
}
</style>