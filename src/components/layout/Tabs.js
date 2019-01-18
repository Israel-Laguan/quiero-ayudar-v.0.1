import React from 'react';
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const Tabs = (props) => {

    const setTabs =[
        {
            type:'tabItem',
            icon:'',
            text:'Cuando',
            link:'/cuando',
            restricted: false,
        },
        {
            type:'tabItem',
            icon:'',
            text:'Donde',
            link:'/donde',
            restricted: false,
        },
        {
            type:'tabItem',
            icon:'',
            text:'Enque',
            link:'/enque',
            restricted: false,
        }

    ]

    return(
        <div>
            <AppBar position="static">
                <Toolbar>
                    {
                        setTabs.map((tab, key) => (
                            <Link to={tab.link}>
                                <Button color="default">{tab.text}</Button>
                            </Link>
                        ))
                    }
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Tabs;