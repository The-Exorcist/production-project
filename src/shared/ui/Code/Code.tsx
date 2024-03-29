import { useCallback } from 'react';
import CopyIcon from 'shared/assets/icons/copy-20-20.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '../Button/Button';
import cls from './Code.module.scss';

interface CodeProps {
   className?: string;
   text: string;
}

export const Code = (props : CodeProps) => {
    const { className, text } = props;
    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.code, {}, [className])}>
            <Button className={cls.copyBtn} theme={ButtonTheme.CLEAR} onClick={onCopy}>
                <CopyIcon className={cls.CopyIcon} />
            </Button>
            <code>
                {text}
            </code>
        </pre>
    );
};
