<template>  
  <article>
    <!-- code de remboursement -->
    <p class="detail--text title--header center">
      code {{ code }}
    </p>
    <!-- montant du remboursement -->
    <p class="detail--text title--header">    
      status du remboursement d'un montant de {{ refund }} € 
    </p>
  </article>  
</template>

<script>
export default {
    props: ['refund', 'code']
};
</script>

<style scoped>
  .center{
    text-align: center;
  }
</style>