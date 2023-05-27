import React, { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Sidebar } from 'widget/Sidebar';
import { Navbar } from 'widget/navbar';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import './styles/index.scss';

function App() {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
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
