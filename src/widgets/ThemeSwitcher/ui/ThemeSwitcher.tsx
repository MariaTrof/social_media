import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider/ui';
import MyMelody from 'shared/assets/icons/icons8-my-melody (1).svg';
import Kuromi from 'shared/assets/icons/icons8-kuromi.svg';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
  className?: string
}

export function ThemeSwitcher({ className }: ThemeSwitcherProps) {
    const { theme, switchTheme } = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames('', {}, [className])}
            onClick={switchTheme}
        >
            {theme === Theme.dark ? <MyMelody /> : <Kuromi />}
        </Button>
    );
}
