<template>
  <!-- liste de ville a selectionner -->
  <article class="proposal__list">
    <FormFormComponentsInputWithProposalSelectProposal v-for="(proposal) in listProposal" :key="proposal.id" :proposal="proposal[prop]" @selectProposal="selectProposal(proposal)" />
  </article>  
</template>

<script>

export default {  
    props: ['listProposal', 'prop'],
    methods: {
        /**
         * selection d'une proposition
         * @param {Text} proposal - la selection
         */
        selectProposal(proposal){
            this.$emit('selectProposal', proposal);
        }
    }

};
</script>

<style scoped>
  .proposal__list{
    position: absolute;
    top: 80px;
    right: 0px;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
} 

</style>