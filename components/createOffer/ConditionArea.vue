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
        console.log(this.conditions)
    }

};
</script>

<style>

</style>