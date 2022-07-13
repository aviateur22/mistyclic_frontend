<template>
  <!-- détail sur un store -->
  <article>
    <Store :store="store" />
  </article>
</template>

<script>
export default {
    data(){
        return {
            store: {
                id: 1,
                name: 'chezPoupile',
                description: 'Nous aimons le travail bien fait. Tous nos produits sont fait maison. La qualité et l\'amour du travail bien fait',
                imagePath: 'https://raw.githubusercontent.com/aviateur22/picture_lesson/main/boulangerie.jpg',
                type: 'boulangerie',
                adress: '48 chemin des près',
                city: '31190 Auterive',
                phone: '05 61 30 25 36',
                mail: 'ma_boulangerie.com',
                slug: 'mon-bouquet-de-fleur'
            }
        };
    }
};
</script>

<style scoped>

</style>