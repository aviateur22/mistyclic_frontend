import utils from '~/helpers/utils';

export const actions = {
    /**
     * récupération d'un token pour soumission formulaire
     */
    async getToken(){       
        const { data } = await this.$axios.get(utils.tokenApi.getToken.endPoint, {root: true});
        
        return data.token;
    }
};