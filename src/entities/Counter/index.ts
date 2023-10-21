import { Counter } from './Counter/ui/Counter';
import { counterReducer } from './Counter/model/slice/counterSlice';
import type { CounterSchema } from './Counter/model/types/counterSchema';

export {
    CounterSchema,
    counterReducer,
    Counter,
};
