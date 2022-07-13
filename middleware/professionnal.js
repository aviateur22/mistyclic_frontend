/**
 * vérification si role de professionnel
 * @param {object} store
 * @param {object} redirect
 * @returns 
 */
export default function({ store, redirect }) {        
    if(parseInt(store.state.userStatus.role, 10) < 3){       
        //ajout d'un message d'erreur
        store.commit('flashMessage/addFlashMessage', { message: 'acces interdit', error: true });

        //Renvoie à la page d'accueil
        return redirect('/');
    }
}