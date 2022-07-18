<template>
  <!-- ville a séléctionner -->
  <article class="proposal" @click="selectProposal">
    <main class="proposal__main">
      <p class="proposal__text">
        {{ proposal }}
      </p>
    </main>
  </article>
</template>

<script>
export default {
    props: ['proposal'],
    methods: {
        /**
         * selection d'une proposition
         * @param {Text} proposal - la selection
         */
        selectProposal(){
            this.$emit('selectProposal', this.proposal);          
        }
    }
};
</script>

<style scoped>
  .proposal{
    width: 100%;
    padding: 1em;
    background: var(--wht);
    box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
    cursor: pointer;
    text-transform: lowercase;
  }

  .proposal:hover{
    background: var(--light-blue);
  }

  .proposal::first-letter{
    text-transform: uppercase;
  }

</style>