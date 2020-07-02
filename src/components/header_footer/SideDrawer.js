import React from 'react';
import { scroller } from 'react-scroll';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/list';
import ListItem from '@material-ui/core/ListItem';


const Sidedrawer = props =>{
    const scrolltoelement = element =>{
        scroller.scrollTo(element,{
            duration:1000,
            delay:70,
            smooth:true,
            offset: -150
        });
        props.onClose(false);
    };
    return(
        <Drawer
        anchor="right" open={props.open} onClose={value=>props.onClose(false)}>
            <List component="nav">
                <ListItem button onClick={()=>scrolltoelement('featured')}>
                Event start in 
                </ListItem>
                <ListItem button onClick={()=>scrolltoelement('faridfo')}>
                    FARID FO
                </ListItem>
                <ListItem button onClick={()=>scrolltoelement('highlights')}>
                    Highlights
                </ListItem>
                <ListItem button onClick={()=> scrolltoelement('pricing')}>
                    Pricing
                </ListItem>
                <ListItem button onClick={()=>scrolltoelement('location')}>
                    Location
                </ListItem>
            </List>
            
        </Drawer>

    );
};

export default Sidedrawer;