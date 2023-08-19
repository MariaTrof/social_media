import {
    ButtonHTMLAttributes,
    FC,
    PropsWithChildren,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
  // eslint-disable-next-line no-unused-vars
  CLEAR = 'clear',
  // eslint-disable-next-line no-unused-vars
  OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
    className,
    children,
    theme,
    ...otherProps
}) => (
    <button
        type="button"
        className={classNames(cls.Button, { [cls[theme]]: true }, [className])}
        {...otherProps}
    >
        {children}
    </button>
);
