import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectCampsiteById } from '../features/campsites/campsitesSlice';
import CampsiteDetail from '../features/campsites/CampsiteDetail';

function CampsiteDetailPage (){
    //destructuring a variable,campsiteId, from a call to the useParams function
    const { campsiteId } = useParams();
    const campsite = selectCampsiteById(campsiteId);

    return (
        <Container>
            <Row>
                <CampsiteDetail campsite={campsite} />
            </Row>
        </Container>
    );
}

export default CampsiteDetailPage;