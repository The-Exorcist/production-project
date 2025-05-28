import { NotificationList } from 'entities/Notification';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { classNames } from 'shared/lib/classNames/classNames';
import { Popover } from 'shared/ui/Popups';
import NotificationIcon from 'shared/assets/icons/bell-18-18.svg';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
   className?: string;
}

export const NotificationButton = memo((props : NotificationButtonProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <Popover
            className={classNames(cls.NotificationButton, {}, [className])}
            direction="bottom left"
            trigger={(
                <Button theme={ButtonTheme.CLEAR}>
                    <Icon Svg={NotificationIcon} inverted />
                </Button>
            )}
        >
            <NotificationList className={cls.notifications} />
        </Popover>
    );
});
