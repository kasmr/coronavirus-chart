import React, { useContext } from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Brightness4OutlinedIcon from '@material-ui/icons/Brightness4Outlined';

import { GlobalContext } from '../../context/GlobalState';


const ThemeSwitcher = () => {

    const { themeType, switchThemeType } = useContext(GlobalContext);

    return (
        <FormControlLabel label="" className="switch" control={
            <Checkbox color="default"
                      onChange={switchThemeType}
                      checked={themeType === 'light'}
                      icon={<Brightness4OutlinedIcon style={{ fontSize: 40 }}/>}
                      checkedIcon={<Brightness7Icon style={{ fontSize: 40 }} color="inherit"/>}/>
        }/>
    );
};

export { ThemeSwitcher };