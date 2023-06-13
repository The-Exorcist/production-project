import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'widget/ThemeSwitcher';
import { LangSwitcher } from 'widget/LangSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

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
                    toggle
                </button>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher className="theme-switcher" />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
