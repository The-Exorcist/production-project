import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Dropdown } from 'shared/ui/Popups';
import {
    getUserAuthData, isUserAdmin, isUserManager, userActions,
} from 'entities/User';
import { useDispatch, useSelector } from 'react-redux';

interface AvatarDropdownProps {
   className?: string;
}

export const AvatarDropdown = memo((props : AvatarDropdownProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const authData = useSelector(getUserAuthData);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const isAdminPanelAvailable = isAdmin || isManager;

    if (!authData) return null;

    return (

        <Dropdown
            className={classNames('', {}, [className])}
            direction="bottom left"
            items={[
                {
                    content: t('Профиль'),
                    href: `${RoutePath.profile}/${authData.id}`,
                },
                ...(isAdminPanelAvailable ? [{
                    content: t('Админ панель'),
                    href: `${RoutePath.admin_panel}`,
                }] : []),
                {
                    content: t('Выйти'),
                    onClick: onLogout,
                },
            ]}
            trigger={<Avatar size={30} src={authData.avatar} />}
        />

    );
});
