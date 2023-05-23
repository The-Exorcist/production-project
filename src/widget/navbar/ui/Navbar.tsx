import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui';
import cls from './Navbar.module.scss';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widget/ThemeSwitcher';

interface NavbarProps {
    className?: string;
};

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <ThemeSwitcher className={'theme-switcher'} />
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
