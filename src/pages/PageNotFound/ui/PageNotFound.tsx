import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './PageNotFound.module.scss';

interface PageNotFoundProps {
 className?: string;
}
export function PageNotFound({ className }: PageNotFoundProps) {
    const { t } = useTranslation();
    return (

        <div className={classNames(cls.PageNotFound, {}, [])}>
            {t('Страница не найдена...')}
        </div>

    );
}
