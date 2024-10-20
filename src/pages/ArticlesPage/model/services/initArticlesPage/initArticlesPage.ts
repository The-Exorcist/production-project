import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlesPageInited } from '../../selectors/getArticlesPageInited/getArticlesPageInited';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
    >(
        'articlesPage/initArticlesPage',
        async (_, thunkApi) => {
            const { getState, dispatch } = thunkApi;
            const inited = getArticlesPageInited(getState());

            if (!inited) {
                dispatch(articlesPageActions.initialState());
                dispatch(fetchArticlesList({
                    page: 1,
                }));
            }
        },
    );
