import utils from '~/helpers/utils';

/**
 * gestion des villes
 */
export const actions = {
    /**
     * récupération d'une liste de villes en fonction d'un nom
     * @param {Object} state 
     * @param {Text} name - nom de la ville a chercher
     */
    async getCitiesByName(state, name){
        //requête
        const endPoint = utils.cityApi.getCitiesByName.endPoint.replace(':name', name);

        //récupération de la donnée
        const {data} = await this.$axios.get(endPoint, {root: true});
        return data;
    } 
};