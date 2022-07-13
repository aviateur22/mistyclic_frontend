<template>
  <!-- données descriptive -->
  <article class="description">
    <header class="title--header detail--text">
      <p> 
        {{ title }}
      </p>
    </header>
    <!-- text -->
    <main class="description__main detail--text">
      <StoreDetailStoreComponentText :text="text" />
    </main>
  </article>
</template>

<script>
export default {
    props: ['title', 'text']
};
</script>

<style>

</style>