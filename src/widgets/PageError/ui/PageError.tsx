import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {

 className?: string;

}

export function PageError({ className }: PageErrorProps) {
    const { t } = useTranslation();
    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };
    return (

        <div className={classNames(cls.PageError, {}, [className])}>
            <p>{t('Что-то пошло не так')}</p>
            <p>{t('Попробуйте перезапустить странницу')}</p>
            <Button onClick={reloadPage}>
                {t('Перезапустить')}
            </Button>

        </div>

    );
}
