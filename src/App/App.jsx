import { useEffect } from 'react';
import { appTitle } from '../config';
import logo from '../icons/logo.svg';
import classes from './App.module.css';
import { SaveButton } from '../components/Buttons/SaveButton/SaveButton';

export const App = () => {
  useEffect(() => {
    document.title = appTitle;
  }, []);

  return (
    <div className={classes.App}>
      <header className={classes.Header}>
        <img src={logo} className={classes.Logo} alt='logo' />
        <h1 className={classes.Text}>Learn React with Dev Incubator</h1>
        <SaveButton />
      </header>
    </div>
  );
};
