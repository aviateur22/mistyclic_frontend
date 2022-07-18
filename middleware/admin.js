/**
 * vérification si role administrateur
 * @param {object} store
 * @param {object} redirect
 * @returns 
 */
export default function({ store, redirect }) { 
    if(parseInt(store.state.userStatus.role, 10) < 4){    
        //ajout d'un message d'erreur
        store.commit('flashMessage/addFlashMessage', { message: 'acces interdit', error: true });

        //renvoie à l'accueil
        return redirect('/');
    }
}