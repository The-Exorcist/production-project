import { AppDispatch, createReduxStore } from './config/store';
import { StoreProvider } from './ui/StoreProvider';
import type { StateSchema, ThunkConfig } from './config/StateSchema';

export {
    AppDispatch,
    StateSchema,
    StoreProvider,
    ThunkConfig,
    createReduxStore,
};
