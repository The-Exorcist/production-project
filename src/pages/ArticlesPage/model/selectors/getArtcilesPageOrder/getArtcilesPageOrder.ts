import { StateSchema } from 'app/providers/StoreProvider';

export const getArtcilesPageOrder = (state: StateSchema) => state.articlesPage?.order ?? 'asc';
