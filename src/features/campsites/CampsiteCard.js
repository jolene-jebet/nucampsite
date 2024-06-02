//importing components from reactstrap

import {Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';
import { Link } from 'react-router-dom';

////defining the component CampsiteCard
const CampsiteCard = (({ campsite }) => {
    //a const for further destructuring
    const { id, image, name } = campsite;
    //returning statements rendering the things exported from reactstrap
    return(
        // this link thing uses tempelate literal syntax to turn the id variable into a string 
        <Link to={`${id}`}>
           <Card>
            <CardImg
                width = '100%'
                src = {image}
                alt = {name}
            />

            <CardImgOverlay>
                <CardTitle>{name}</CardTitle>
            </CardImgOverlay>
        </Card>
        </Link>
        
    );
})

export default CampsiteCard;