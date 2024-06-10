import { Card, CardImg, CardText, CardBody, Col } from 'reactstrap';


const CampsiteDetail = ( {campsite} ) => {
    const { image, name, description } = campsite;

    return (
        //This reduces the width that this Col component takes from 12/12ths of its Row to 5/12ths of its Row. We have also reduced its margin size from m-4 (1.5 rem) to m-1 (0.25 rem).
        <Col md='5' className='m-1'>
            <Card>
                <CardImg top src={image} alt={name} />
                <CardBody>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
        </Col>
    );
};

export default CampsiteDetail;