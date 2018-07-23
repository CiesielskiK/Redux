import uuid from 'uuid';

export const ADD_COMMENT = 'ADD_COMMENT',
             EDIT_COMMENT = 'EDIT_COMMENT',
             REMOVE_COMMENT = 'REMOVE_COMMENT',
             THUMB_UP_COMMENT = 'THUMB_UP_COMMENT',
             THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

export const addComment = text => ({
    type: ADD_COMMENT,
    text,
    id: uuid.v4()
});

export const editComment = (text, id) => ({
    type: EDIT_COMMENT,
    text,
    id
});

export const removeComment = id => ({
    type: REMOVE_COMMENT,
    id
});

export const thumbUpComment = id => ({
    type: THUMB_UP_COMMENT,
    id
});

export const thumnDownComment = id => ({
    type: THUMB_DOWN_COMMENT,
    id
});
