import { COMMENTS } from '../../app/shared/COMMENTS';

export const selectCommentsByCampsiteId = (campsiteId) => {
    return COMMENTS.filter(
        //tests whether comment is strictly equal to the integer value of the campsiteId
        (comment) => comment.campsiteId === parseInt(campsiteId)
    );
}