import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/SideBar';
import { Suspense, useEffect } from 'react';
import AppRouter from './providers/router/ui/AppRouter';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';

function App() {
    const { theme } = useTheme();

    return (
        <div
            className={classNames('App', {
                hovered: true,
                selected: false,
            }, [theme])}
        >
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
