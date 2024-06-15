import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { getAddCommentFormError } from '../../model/selectors/getAddCommentFormError/getAddCommentFormError';
import { getAddCommentFormText } from '../../model/selectors/getAddCommentFormText/getAddCommentFormText';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slices/addCommentFormSlice';
import cls from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
   className?: string;
   onSendComment: (text: string) => void;
}

const reducer: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo((props : AddCommentFormProps) => {
    const { className, onSendComment } = props;
    const { t } = useTranslation();
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [onCommentTextChange, text, onSendComment]);

    return (
        <DynamicModuleLoader reducers={reducer}>
            <div className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input
                    className={cls.input}
                    onChange={onCommentTextChange}
                    value={text}
                    placeholder={t('Add a comment')}
                />
                <Button
                    theme={ButtonTheme.OUTLINE}
                    onClick={onSendHandler}
                >
                    { t('Send')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default AddCommentForm;
