import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Page } from 'shared/ui/Page/Page';

interface ArticleEditPageProps {
   className?: string;
}

const ArticleEditPage = memo((props : ArticleEditPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
    const isEdit = Boolean(id);

    return (
        <Page>
            { isEdit
                ? t('Редактирование статьи с ID ') + id
                : t('Создание новой статьи')}
        </Page>
    );
});

export default ArticleEditPage;
