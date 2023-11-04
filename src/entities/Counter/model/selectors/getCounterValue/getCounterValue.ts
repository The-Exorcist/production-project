import { createSelector } from '@reduxjs/toolkit';
import { CounterSchema } from 'entities/Counter/model/types/counterSchema';
import { getCounter } from '../getCounter/getCounter';

export const getCounerValue = createSelector(
    getCounter,
    (counter: CounterSchema) => counter.value,
);
