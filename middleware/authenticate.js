/**
 * vérification si utilisateur connecté
 * @param {object} store
 * @param {object} redirect
 * @returns 
 */
export default function({ store, redirect }) {    
    if(!store.state.userStatus.authenticate) {     
        //ajout d'un message d'erreur
        store.commit('flashMessage/addFlashMessage', { message: 'acces interdit', error: true });

        //Renvoie page de connexion
        return redirect('/login');
    }
}