import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';

const ForbiddenPage = () => {
    const { t } = useTranslation('');

    return (
        <Page>
            {t('Доступ только для авторизованных пользователей')}
        </Page>
    );
};

export default ForbiddenPage;
