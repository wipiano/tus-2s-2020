import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import {Link} from 'react-router-dom'

type ItemProps = {
    path: string,
    text: string,
    icon: "Dashboard" | "People",
}

const Item: React.FC<ItemProps> = ({path, text, icon}) => {
    return (
        <Link to={path}>
            <ListItem button>
                <ListItemIcon>
                    {icon === "Dashboard" ? <DashboardIcon/>
                        : icon === "People" ? <PeopleIcon/>
                            : <DashboardIcon/>}
                </ListItemIcon>
                <ListItemText primary={text}/>
            </ListItem>
        </Link>
    )
}

export const mainListItems = (
    <div>
        <Item path="/" text="Dashboard" icon="Dashboard"/>
        {/*<Item path="/test" text="test" icon="Dashboard"/>*/}
    </div>
);

