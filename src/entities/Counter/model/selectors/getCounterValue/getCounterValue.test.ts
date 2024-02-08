import { StateSchema } from 'app/providers/StoreProvider';
import { getCounerValue } from './getCounterValue';

describe('getCounterValue.test', () => {
    test('', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        expect(getCounerValue((state as StateSchema))).toEqual(10);
    });
});
