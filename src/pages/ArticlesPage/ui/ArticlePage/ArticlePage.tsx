import { ArticleList, ArticleView } from 'entities/Article';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlePage.module.scss';

interface ArticlePageProps {
   className?: string;
}

const ArticlePage = (props: ArticlePageProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ArticlePage, {}, [className])}>
            {t('Aricles page')}
            <ArticleList
                view={ArticleView.TILE}
                articles={[]}
            />
        </div>
    );
};

export default memo(ArticlePage);
