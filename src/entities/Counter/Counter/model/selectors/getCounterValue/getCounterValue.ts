import { createSelector } from '@reduxjs/toolkit';
import { getCounter } from '../getCounter/getCounter';

export const getCounerValue = createSelector(
    getCounter,
    (counter) => counter.value,
);
