import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';

function MainPage() {
    const { t } = useTranslation();
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };
    return (
        <Page>
            {t('Главная страница')}
        </Page>
    );
}

export default MainPage;
