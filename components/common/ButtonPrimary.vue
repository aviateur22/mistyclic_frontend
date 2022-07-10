<template>
  <button :class="{'color--red': isRed}" class="button__primary">
    {{ text }}
  </button>
</template>

<script>
export default {
    props: ['text', 'isRed']
};
</script>

<style scoped>
    .button__primary{ 
        width: 100%;      
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--grn);
        text-transform: uppercase;
        color: var(--wht);        
        border-radius: 10px;
        font-size: var(--p24);
        font-weight: var(--bold);
        width: 100%;
        border: 1px solid var(--flash-grn);
        padding: 0.3em 0em;
        margin: 0.2em 0em;
        cursor: pointer;
    }

    .color--red {
        background: var(--red);
    }

    @media screen and (min-width: 768px) {
        .button__primary{       
            font-size: var(--p32);
        }
    }
</style>