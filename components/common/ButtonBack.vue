<template>
  <!-- bouton retour en arriere -->
  <button class="button__back" @click="backPage">
    <!-- svg fleche -->
    <svg class="button__back-svg" viewBox="0 0 32 32">
      <g data-name="Layer 2">
        <path fill="#525252" d="M31,16A15,15,0,1,1,16,1,15,15,0,0,1,31,16ZM3,16A13,13,0,1,0,16,3,13,13,0,0,0,3,16Z" />
        <path fill="#525252" d="M19.87,10.41,14.29,16l5.58,5.59a1,1,0,0,1,0,1.41h0a1,1,0,0,1-1.41,0L12.1,16.64a.91.91,0,0,1,0-1.28L18.46,9a1,1,0,0,1,1.41,0h0A1,1,0,0,1,19.87,10.41Z" />
      </g>
    </svg>
  </button>
</template>

<script>
export default {
    props: ['routeName'],
    methods: {
        /**
         * retour en arriere
         */
        backPage(){
            this.$router.push({ name: this.routeName });
        }

    }
};
</script>

<style scoped>
  .button__back{
    border: none;
    background: var(--wht);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all var(--t3ms) ease-in-out;
  }

  .button__back:hover{
    transform: scale(1.05);
  }

  .button__back-svg{
    max-width: 100%;
    max-height: 100%;

  }

</style>