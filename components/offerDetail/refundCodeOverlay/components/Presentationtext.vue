<template>
  <article class="presentation">
    <!-- titre principal -->
    <header class="presentation__header">
      <h2 class="presentation__title">
        remboursement immédiat
      </h2>
    </header>

    <!-- text de présentation  -->
    <main class="presentation__main">
      <p class="detail--text">
        Afin d'activer le remboursement, transmettez votre code au commerçant 
      </p>
    </main>
  </article>  
</template>

<script>
export default {

};
</script>

<style scoped>
  .presentation{
    display: flex;
    flex-direction: column;
  }
  .presentation__title{
    text-transform: uppercase;
    text-align: center;
    font-size: var(--p20);
    font-weight: var(--bold);
    color: var(--dark-gry);
    padding: 2em 0em;
  }

  @media screen and (min-width: 768px) {
    .presentation__title{     
      font-size: var(--p24);
    }
  }

</style>