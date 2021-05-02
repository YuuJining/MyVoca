import { BottomNavigation } from "@material-ui/core";
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import CreateIcon from '@material-ui/icons/Create';
import styled from 'styled-components';
import { useHistory }  from 'react-router-dom'
import React, { useState } from "react";
import { Create } from "@material-ui/icons";

const AppLayout = () => {
    const [isLoggedIn, setIsLoggedIn] = useState('false');
    const [value, setValue] = useState('');
    const MyBottom = styled(BottomNavigation)`
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
	    padding: 15px 0;
	    text-align: center;
    `;
    const history = useHistory();
    const handleChange = (event, newValue) => {
      history.push(`/${newValue}`);
      setValue(newValue);
    };
    return (
        <MyBottom
            value={value}
            onChange={handleChange}
            showLabels>
            <BottomNavigationAction label="단어추가" value="addvoca" icon={<AddCircleOutlineIcon />}/>
            <BottomNavigationAction label="단어시험" value="exam" icon={<CreateIcon />}/>
            <BottomNavigationAction label="즐겨찾기" value="like" icon={<FavoriteIcon />}/>
        </MyBottom>
    )
}

export default AppLayout;