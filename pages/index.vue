<template>
  <article>
    <!-- filtre des offres -->
    <header>
      <filter-area />
    </header>
    <!-- les offres -->
    <main>
      <offer-list :offers="offers" />
    </main>
  </article>
</template>

<script>
import FilterArea from '~/components/home/FilterArea.vue';
import OfferList from '~/components/home/OfferList.vue';
export default {
    name: 'IndexPage',
    components: { FilterArea, OfferList },    
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
                    refund: '0.50'
                },
                {
                    id: 2,
                    name: 'autant en opporte le vent',
                    title: 'belle baguette',
                    image: 'https://raw.githubusercontent.com/aviateur22/picture_lesson/main/baguette.jpg',
                    type: 'boulangerie',
                    refund: '0.50'
                },
                {
                    id: 3,
                    name: 'Loreil',
                    title: '2 chocolatine',
                    image: 'https://raw.githubusercontent.com/aviateur22/picture_lesson/main/chocolatine.jpg',
                    type: 'boucherie',
                    refund: '0.50'
                },
                {
                    id: 4,
                    name: 'Loreil',
                    title: 'steack haché',
                    image: 'https://raw.githubusercontent.com/aviateur22/picture_lesson/main/steak%20hach%C3%A9.jpg',
                    type: 'boucherie',
                    refund: '0.50'
                }
            ]
        };
    }
};
</script>
