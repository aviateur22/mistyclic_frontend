<template>
  <!-- code de remboursement -->
  <article class="refund">
    <!-- titre -->
    <header class="refund__overlay">
      <p class="refund__text title--header detail--text">
        Votre code de remboursement:
      </p>
    </header>
    <!-- code de remboursement -->
    <main>
      <p class="refund__code">
        {{ code }}
      </p>
    </main>
  </article>
</template>

<script>
export default {
    props: ['code']

};
</script>

<style scoped>
  .refund__text{
    padding-top: 2em;
    padding-bottom: 1em;
  }

  .refund__code{
    color: var(--grn);
    font-weight: var(--bold);
    font-size: var(--p20);
  }

  @media screen and (min-width: 768px) {
    .refund__code{
      font-size: var(--p24);
    }    
  }
</style>