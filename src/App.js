import React from 'react';
import jsonServerProvider from 'ra-data-json-server'
import { Admin, Resource} from 'react-admin'
import { UserList, UserEdit } from './users'
import {EventList, EventEdit} from './events'
import UserIcon from '@material-ui/icons/Group';
import Dashboard from './Dashboard';
import authProvider from './authProvider'
import { GalerieList, GalerieEdit } from './galerie';

const dataProvider = jsonServerProvider('https://clean-my-calanques.herokuapp.com')


const App = () => {
  return (
    <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
      <Resource name="users" list={UserList} edit={UserEdit} icon={UserIcon} options={{ label: 'Utilisateurs' }}/>
      <Resource name="events" list={EventList}  edit={EventEdit} options={{ label: 'Evenements' }}/>
      <Resource name="galerie" list={GalerieList} edit={GalerieEdit} />
    </Admin>
  );
}

export default App;