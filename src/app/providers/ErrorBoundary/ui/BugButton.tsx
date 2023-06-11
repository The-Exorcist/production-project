import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

// Компонент для тестирования
export const BugButton = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();
    const onThrow = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button
            style={{
                color: 'var(--primary-color)',
                backgroundColor: '#eee',
                padding: '5px 15px',
            }}
            onClick={onThrow}
        >
            {t('Пробросить ошибку')}
        </Button>
    );
};
