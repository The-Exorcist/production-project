/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                onClick={onToggleModal}
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
            >
                {t('Войти')}
            </Button>
            <Modal
                isOpen={isAuthModal}
                onClose={onToggleModal}
            >
                {/* eslint-disable-next-line max-len */}
                {t('Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt odio quas voluptatem eaque officia doloribus a! Harum esse eum enim magnam officia, non mollitia eos? Accusamus perspiciatis unde soluta eaque? Sit aspernatur excepturi dolorum, libero eligendi repudiandae aperiam dolorem iure at. Voluptatibus iure eligendi sequi repudiandae ex provident architecto consequatur laborum deserunt dolor officiis exercitationem earum eos amet, iste similique non libero maxime beatae quae, id tempora veritatis labore perferendis? Dolores dolorem deserunt ex facilis quia sequi consectetur, temporibus ad voluptatibus provident hic? Repudiandae ex quos laudantium quo fuga suscipit dolores maxime similique expedita non nisi sequi voluptates, vel odio!')}
            </Modal>
        </div>
    );
};
