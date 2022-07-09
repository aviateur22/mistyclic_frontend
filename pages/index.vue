<template>
  <article class="home">
    <!-- filtre des offres -->
    <header>
      <filter-offer />
    </header>
    <!-- les offres -->
    <main>
      <offer-list class="home__offer" :offers="offers" />
    </main>
  </article>
</template>

<script>
import FilterOffer from '~/components/filterOffer/FilterOffer.vue';
import OfferList from '~/components/home/offerList/OfferList.vue';
export default {
    name: 'IndexPage',
    components: { OfferList, FilterOffer },    
    layout: 'default',
    data(){
        return {
            /**list des offres */
            offers: [
                {
                    id: 1,
                    name: 'chez poupilles',
                    title: 'mon bouquet de fleur',
                    image: 'https://raw.githubusercontent.com/aviateur22/picture_lesson/main/bouquet.png',
                    type: 'fleuriste',
                    refund: '0.50',
                    slug: 'mon-bouquet-de-fleur'
                },
                {
                    id: 2,
                    name: 'autant en opporte le vent',
                    title: '2 belles baguettes',
                    image: 'https://raw.githubusercontent.com/aviateur22/picture_lesson/main/baguette.jpg',
                    type: 'boulangerie',
                    refund: '0.50',
                    slug: '2-belles-baguettes'
                },
                {
                    id: 3,
                    name: 'Loreil',
                    title: '2 chocolatines',
                    image: 'https://raw.githubusercontent.com/aviateur22/picture_lesson/main/chocolatine.jpg',
                    type: 'boucherie',
                    refund: '0.50',
                    slug: '2-chocolatines'
                },
                {
                    id: 4,
                    name: 'Bernat',
                    title: '4 steacks hachés',
                    image: 'https://raw.githubusercontent.com/aviateur22/picture_lesson/main/steak%20hach%C3%A9.jpg',
                    type: 'boucherie',
                    refund: '0.50',
                    slug: '4-steacks-hachés',
                }
            ]            
        };
    }
};
</script>
<style scoped>
  .home{
    width: 100%;
  }

  .home__offer{
    display: flex;
    flex-direction: column;    
    padding: 0em 0.5em;
  }
</style>
