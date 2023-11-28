import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import { Header, List, ListIcon, ListItem } from 'semantic-ui-react';


function App() {
  const [activities, setactivities] = useState([]);  

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities')
    .then(response => {
      console.log(response);
      setactivities(response.data)
    })
  }, [])

  return ( 
    <div>
      <Header as='h2' icon='users' content='Reactivities'/>
      <List>
        {activities.map((activities: any) => (
          <ListItem key={activities.id}>
            {activities.title}
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default App
