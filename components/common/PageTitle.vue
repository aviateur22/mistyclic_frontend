<template>
  <article class="title">
    <main class="title__main">
      <h2 class="title__title">
        {{ text }}
      </h2>
    </main>
  </article>
</template>

<script>
export default {
    props: ['text']
};
</script>

<style scoped>
    .title{
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--grn);
        color: var(--wht);
        padding: 1.5em 2em;
        font-size: var(--p24);
        text-transform: uppercase;
        font-weight: bold;
    }
  @media screen and (min-width:768px) {
    .title{       
        font-size: var(--p32);
    }
    
  }

</style>