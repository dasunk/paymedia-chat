import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Comment {
    id: number;
    text: string;
    date: string;
    votes: number;
    user: string;
}

interface CommentsState {
    comments: Comment[];
}

const initialState: CommentsState = {
    comments: [],
};

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        addComment: (state, action: PayloadAction<string>) => {
            const newComment: Comment = {
                id: state.comments.length + 1,
                text: action.payload,
                date: new Date().toLocaleString(),
                votes: 0,
                user: 'user1',
            };
            state.comments.push(newComment);
        },
    },
});

export const { addComment } = commentsSlice.actions;
export default commentsSlice.reducer;
