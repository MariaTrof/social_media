import { classNames } from 'shared/lib/classNames/classNames';

import {
    type ButtonHTMLAttributes,
    type FC,
    type PropsWithChildren,
} from 'react';
import cls from 'Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
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