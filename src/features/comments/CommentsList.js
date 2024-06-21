import { Col } from 'reactstrap';
import Comment from './Comment';
import { selectCommentsByCampsiteId } from './commentsSlice';
import CommentForm from './CommentForm';

const CommentsList = ({ campsiteId }) => {
    const comments = selectCommentsByCampsiteId(campsiteId);
    //if block checks that comment value is not falsy
    if (comments && comments.length > 0) {
        return (
            <Col md='5' className='m-1'>
                <h4>Comments</h4>
                {comments.map((comment) => {
                    return <Comment key={comment.id} comment={comment} />;
                })}

                <CommentForm campsiteId={campsiteId}/>
            </Col>
        
        );
    }
    //this is returned if the statement is false
    return (
        <Col md='5' className='m-1'>
            There are no comments for this campsite yet.
        </Col>
        
    );
}

export default CommentsList;