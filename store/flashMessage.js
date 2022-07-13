export const state = () => ({
/**
   * liste des messages
   */
    message: [],
   
});

export const getters = {
    /**
     * Renvoie la liste des messages
     * @param {*} state 
     * @returns 
     */
    getFlashMessage: (state)=>{        
        return state.message;
    }
};

export const mutations = {    
    /**
     * ajout d'un message
     * @param {Object} state 
     * @param {Object} value - FlashMessage
     * @property {Text} value.message - text du message
     * @property {Boolean} value.error - true: couleur rouge - false couleur vert
     */
    addFlashMessage(state, value){
        //génération d'un id unique basé sur le temps en millisenconde 
        const timestamp = new Date().getUTCMilliseconds();
        value.id = timestamp;

        // ajout du flash message
        state.message.push(value);
    },

    /**
     * suppression d'un message
     * @param {Object} state 
     * @param {Number} index - élément a supprimer
     */
    removeFlashMessage(state, index){        
        state.message.splice(index, 1);
    }
};