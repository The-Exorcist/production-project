import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';
import './styles/index.scss';

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to={'/'}>Главня</Link>
            <Link to={'/about'}>О сайте</Link>
            <AppRouter />
        </div>
    );
};

export default App;