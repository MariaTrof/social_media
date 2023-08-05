import { Button } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

//компонент для тестирования ошибки ErrorBoundary

export function BugButton() {
    const [error, setError] = useState(false);
    const throwEr = () => setError(true);
    const { t } = useTranslation();
    useEffect(
        () => {
            if (error) {
                throw new Error();
            }
        },
        [error],
    );
    return (
    // eslint-disable-next-line i18next/no-literal-string
        <Button onClick={throwEr}>
            {t('throw error')}
        </Button>
    );
}
