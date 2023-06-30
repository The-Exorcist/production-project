import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { useTranslation } from 'react-i18next';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button
                    data-testid="sidebar-toggle"
                    type="button"
                    onClick={onToggle}
                    style={{
                        cursor: 'pointer',
                        backgroundColor: 'var(--primary-color)',
                        color: 'var(--inverted-primary-color)',
                    }}
                >
                    {t('Переключить')}
                </button>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher className="theme-switcher" />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};