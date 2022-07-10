<template>
  <!-- ville a séléctionner -->
  <article class="city" @click="selectCity">
    <main class="city__main">
      <p class="city__text">
        {{ city }}
      </p>
    </main>
  </article>
</template>

<script>
export default {
    props: ['city'],
    methods: {
        /**
         * selection d'une ville pour filtrage offre
         * @param {Text} city - nom de la ville
         */
        selectCity(){
            this.$emit('selectCity', this.city);          
        }
    }
};
</script>

<style scoped>
  .city{
    width: 100%;
    padding: 1em;
    background: var(--wht);
    box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
    cursor: pointer;
  }

</style>