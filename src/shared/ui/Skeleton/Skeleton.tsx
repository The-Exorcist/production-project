import { CSSProperties, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
   className?: string;
   height?: number | string;
   width?: number | string;
   border?: string;
}

export const Skeleton: FC<SkeletonProps> = (props) => {
    const {
        className,
        height,
        width,
        border,
    } = props;

    const style: CSSProperties = {
        width,
        height,
        borderRadius: border,
    };

    return (
        <div
            style={style}
            className={classNames(cls.Skeleton, {}, [className])}
        />
    );
};
