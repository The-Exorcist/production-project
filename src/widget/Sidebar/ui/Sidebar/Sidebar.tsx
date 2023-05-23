import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { useState } from 'react';
import { ThemeSwitcher } from 'widget/ThemeSwitcher';

interface SidebarProps {
    className?: string;
};

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev)
    }

    return (
        <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <button onClick={onToggle} style={{ cursor: "pointer" }}>toggle</button>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher className={'theme-switcher'} />
                {/* LangSwitchers */}
            </div>
        </div>
    );
};