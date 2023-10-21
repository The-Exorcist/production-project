import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { counterActions } from '../model/slice/counterSlice';
import { getCounerValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounerValue);
    const { t } = useTranslation();

    const increament = () => {
        dispatch(counterActions.increment());
    };

    const decreament = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button
                onClick={increament}
                data-testid="increment-btn"
            >
                { t('Increament')}
            </Button>
            <Button
                onClick={decreament}
                data-testid="decrement-btn"
            >
                { t('Decreament')}
            </Button>
        </div>
    );
};
