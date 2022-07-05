<template>
  <button :class="{'color--red': isRed}" class="button__secondary">
    {{ text }}
  </button>
</template>

<script>
export default {
    props: ['text', 'isRed']
};
</script>

<style scoped>
    .button__secondary{       
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--wht);
        text-transform: uppercase;
        color: var(--grn);        
        border: 0.5px solid var(--grn);
        border-radius: 10px;
        font-size: var(--p20);
        font-weight: var(--light-bold);
        width: 100%;
        padding: 0.3em 0em;
        margin: 0.2em 0em;
        cursor: pointer;
    }
    
    .color--red {
        color: var(--red);        
        border: 0.5px solid var(--red);
    }

    @media screen and (min-width: 768px) {
        .button__secondary{       
            font-size: var(--p24);
        }
    }
</style>