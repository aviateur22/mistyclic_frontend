import utils from '~/helpers/utils';

/**
 * gestion des commerces
 */
export const actions = {
    /**
     * création d'un store
     * @param {Object} state - 
     * @param {Object} data - données du store
     */
    async createStore(state, data){  
        const config = {
            headers: { 'Content-Type': 'multipart/form-data' }
        };  
        const createStore = await this.$axios.post(utils.storeApi.createStore.endPoint, data, { root: true });
        state.commit('flashMessage/addFlashMessage', { message: createStore.data.message, error: false }, {root: true});
    },

    /**
     * Mise à jour du store
     * @param {Object} state 
     * @param {Object} data - données du store
     */
    async updateStore(state, data){
        const updateStore = await this.$axios.patch(utils.storeApi.updateStore.endPoint, data, {root: true});
        state.commit('flashMessage/addFlashMessage', { message: updateStore.data.message, error: false }, {root: true});
    }
};