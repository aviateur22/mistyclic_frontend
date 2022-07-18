import utils from '~/helpers/utils';

/**
 * gestion des offres
 */
export const actions = {
    /**
     * Création d'une offre
     * @param {object} state - 
     * @param {object} data - données de l'offre
     */
    async createOffer(state, data){
        const createOffer = await this.$axios.post(utils.offerApi.createOffer.endPoint, data, { root: true });      
        state.commit('flashMessage/addFlashMessage', { message: createOffer.data.message, error: false }, {root: true});
    },

    /**
     * Mise a jour d'une offre
     * @param {object} state - 
     * @param {object} data - données de l'offre 
     */
    async updateOffer(state, data){
        const updateOffer = await this.$axios.patch(utils.offerApi.updateOffer, data, { root: true });
        state.commit('flashMessage/addFlashMessage', { message: updateOffer.data.message, error: false }, {root: true});
    }

};