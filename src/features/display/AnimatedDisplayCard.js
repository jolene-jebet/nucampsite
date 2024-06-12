import { useState, useEffect } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { useSpring, animated} from 'react-spring';

function AnimatedDisplayCard ({ item }){
    const { image, name, description } = item ;
    //initializing the initial state of toggle to false 
    const [ toggle, setToggle ] = useState(false);
    //the styling variable
    const animatedStyle = useSpring({
        // when the value of toggle changes from false to true, the opacity changes from 0 to 1
        opacity: toggle ? 1 : 0,
        transform: toggle ? 'scale(1,1)' : 'scale(1,0)',
        config: { duration: 500}
    });

    //useEffect tells react that whenever the animateddisplaycard is rendered/ rerendered we wish to perform a side effect
    useEffect(() => {
        setToggle(true);
    }, []);

    return(
        <animated.div style={animatedStyle}>
            <Card>
                <CardImg src={image} alt={name} />
                <CardBody>
                    <CardTitle>{name}</CardTitle>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card> 
        </animated.div>
        
    );
}

export default AnimatedDisplayCard;