import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui';
import cls from './Navbar.module.scss';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';

interface NavbarProps {
    className?: string;
};

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink to={"/"} className={cls.mainLink} theme={AppLinkTheme.RED}>
                    Главня
                </AppLink>
                <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>
                    О сайте
                </AppLink>
            </div>
        </div>
    );
};
