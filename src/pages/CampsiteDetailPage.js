import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectCampsiteById } from '../features/campsites/campsitesSlice';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import SubHeader from '../components/SubHeader';
import CommentsList from '../features/comments/CommentsList';

function CampsiteDetailPage (){
    //destructuring a variable,campsiteId, from a call to the useParams function
    const { campsiteId } = useParams();
    const campsite = selectCampsiteById(campsiteId);

    return (
        <Container>
            {/* the detail prop will cause the second breadcrumb item we set to be conditionally rendered by the subheader component */}
            <SubHeader current={campsite.name} detail={true} />
            <Row>
                <CampsiteDetail campsite={campsite} />
                <CommentsList campsiteId={campsiteId} />
            </Row>
        </Container>
    );
}

export default CampsiteDetailPage;