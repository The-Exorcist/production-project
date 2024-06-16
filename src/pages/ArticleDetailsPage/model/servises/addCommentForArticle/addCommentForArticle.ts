import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { getArticleDetailsData } from 'entities/Article/model/selectors/articleDetails';
import { getUserAuthData } from 'entities/User';
import { getAddCommentFormText }
    from 'features/addCommentForm/model/selectors/getAddCommentFormText/getAddCommentFormText';
import { addCommentFormActions } from 'features/addCommentForm/model/slices/addCommentFormSlice';
import { fetchCommentsByArticleId } from '../../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<
    Comment,
    void,
    ThunkConfig<string>
>(
    'articleDetails/addCommentForArticle',
    async (authData, thunkApi) => {
        const {
            extra, dispatch, rejectWithValue, getState,
        } = thunkApi;

        const userData = getUserAuthData(getState());
        const text = getAddCommentFormText(getState());
        const article = getArticleDetailsData(getState());

        if (!userData || !text || !article) {
            return rejectWithValue('no data');
        }

        try {
            const response = await extra.api.post<Comment>('/comments', {
                articleId: article.id,
                userId: userData.id,
                text,
            });

            if (!response.data) {
                throw new Error();
            }

            dispatch(addCommentFormActions.setText(''));
            dispatch(fetchCommentsByArticleId(article.id));

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);