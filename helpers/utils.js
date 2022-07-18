/**
 * Renvois les URL de connection avec le back-end
 */
const utils = {
    //path récupération token
    tokenApi: {
        getToken: { endPoint: '/api/tokens'}    
    },   
    //path API pour les offres
    offerApi: {       
        createOffer: { endPoint: '/api/offers'},
        updateOffer: { endPoint: 'api/offers/:offerId'},
        deleteOffer: { endPoint: 'api/offers/:offerId'},
        getAllOffers: {endPoint: '/api/offers'},
        offerByCity: { endPoint: '/api/offers/by-city/:cityId'},
        offerByStore: { endPoint: '/api/offers/by-store/:storeId'},
        offerByStoreType: { endPoint: ''}
    },
    //path API pour les stores
    storeApi: {
        createStore: { endPoint: 'api/stores'},
        updateStore: { endPoint: 'api/stores/:storeId'},        
    },
    //path API pour les villes
    cityApi: {
        getCitiesByName: { endPoint: 'api/cities/:name'}
    }
};
export default utils;