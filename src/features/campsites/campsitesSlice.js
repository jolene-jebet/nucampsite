import { CAMPSITES } from '../../app/shared/CAMPSITES';

export const selectAllCampsites = () => {
    return CAMPSITES;
}

// export const selectRandomCampsite = () => {
//     // wrong tessy return Math.floor(Math.random() * selectAllCampsites.length);
//     return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())];
// }

//function takes an argument of id and returns the first object in the CAMPSITES array with a matching id
export const selectCampsiteById = (id) => {
    return CAMPSITES.find((campsite) => campsite.id === id);
}

//the function returns the first item in the CAMPSITES array with a featured property set to true
export const selectFeaturedCampsite = () => {
    return CAMPSITES.find((campsite) => campsite.featured);
}