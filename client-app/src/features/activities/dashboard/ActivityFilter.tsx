import { Header, Menu } from "semantic-ui-react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import './style.css'

export default function ActivityFilter() {
    return (
        <>
            <Menu vertical size='large' style={{width: '100%', marginTop: 25}}>
                <Header icon={'filter'} attached color="teal" content="Filter" />
                <Menu.Item content="All Activities"/>
                <Menu.Item content="I'm going"/>
                <Menu.Item content="I'm hosting"/>
            </Menu>
            <Header />
            <Calendar />
        </>
        
    )
}