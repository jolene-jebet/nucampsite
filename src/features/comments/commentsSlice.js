import { COMMENTS } from '../../app/shared/COMMENTS';

export const selectCommentsByCampsite = () => {
    return COMMENTS.filter(
        (comment) => comment.campsiteId === parseInt(campsiteId)
    );
}