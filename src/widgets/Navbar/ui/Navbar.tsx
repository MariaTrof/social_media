import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/Applink/Applink';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export function Navbar({ className }: NavbarProps) {
    return (
        <div className={classNames(cls.navbar, {}, [])}>

            <div className={cls.links}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to="/"
                    className={cls.mainLink}
                >
                    MAIN
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
                    ABOUT
                </AppLink>
            </div>
        </div>
    );
}
