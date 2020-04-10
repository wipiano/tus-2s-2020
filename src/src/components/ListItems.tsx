import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import {Link} from 'react-router-dom'
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import LinkIcon from '@material-ui/icons/Link';

type ItemProps = {
    path: string,
    text: string,
    icon: "Dashboard" | "People" | "Event" | "Book" | "Link",
}

const Item: React.FC<ItemProps> = ({path, text, icon}) => {
    return (
        <Link to={path}>
            <ListItem button>
                <ListItemIcon>
                    {icon === "Dashboard" ? <DashboardIcon/>
                        : icon === "People" ? <PeopleIcon/>
                        : icon === "Event" ? <EventAvailableIcon/>
                        : icon === "Book" ? <ImportContactsIcon/>
                        : icon === "Link" ? <LinkIcon/>
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
        <Item path="/event" text="直近のイベント" icon="Event"/>
        <Item path="/syllabus" text="履修について" icon="Book"/>
        <Item path="/links" text="リンク集" icon="Link"/>
        {/*<Item path="/test" text="test" icon="Dashboard"/>*/}
    </div>
);

