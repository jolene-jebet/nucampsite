import { PROMOTIONS } from '../../app/shared/PROMOTIONS';

//returns the first item in the PROMOTIONS array with a featured property set to true
export const selectFeaturedPromotion = () => {
    return PROMOTIONS.find((promotion) => promotion.featured);
}