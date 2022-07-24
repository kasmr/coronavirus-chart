import React, { useContext } from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { GlobalContext } from '../../context/GlobalState';


const ThemeSwitcher = () => {

    const { theme, switchThemeType } = useContext(GlobalContext);

    return (
        <FormControlLabel label="" className="switch" control={
            <Checkbox color="default"
                      onChange={switchThemeType}
                      checked={theme === 'dark'}
                      icon={<Brightness3Icon style={{ fontSize: 40 }} color="inherit"/>}
                      checkedIcon={<WbSunnyIcon style={{ fontSize: 40 }}/>}/>
        }/>
    );
};

export { ThemeSwitcher };