<template>
  <!-- boutton voire les offres du commerce -->
  <button class="offer__button">
    Voire toutes les offres de ce commerçant
  </button>
</template>

<script>
export default {

};
</script>

<style scoped>
  .offer__button{
    font-size: var(--p16);
    background: var(--yel-grn);
    border: none;
    padding: 0.5em 0.5em;
    color: var(--light-gry);
    cursor: pointer;
    border-radius: 10px;
    width: 100%;
    align-self: flex-end;
    transition: all var(--t3ms) ease-in-out;
  }

  .offer__button:hover{
    transform: scale(1.01);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  @media screen and (min-width: 768px) {
    .offer__button{
      font-size: var(--p20);

    }
    
  }
</style>