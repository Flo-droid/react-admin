import React from 'react';
import jsonServerProvider from 'ra-data-json-server'
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin'
import { UserList, UserEdit } from './users'
import {PostList, PostEdit, PostCreate} from './posts'
import {Events} from './events'
import {EventList, EventEdit} from './eventsmodif'
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from './Dashboard';
import authProvider from './authProvider'
import { GalerieList, GalerieEdit } from './galerie';

const dataProvider = jsonServerProvider('https://clean-my-calanques.herokuapp.com')

const App = () => {
  return (
    <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
      <Resource name="users" list={UserList} edit={UserEdit} options={{ label: 'Utilisateurs' }}/>
      {/* <Resource name="events" list={Events}  options={{ label: 'Validation evenements' }}/> */}
      <Resource name="events" list={EventList}  edit={EventEdit} options={{ label: 'Evenements' }}/>
      <Resource name="galerie" list={GalerieList} edit={GalerieEdit} />
    </Admin>
  );
}

export default App;


// export const UploadList = props => (
//   <List {...props}>
//       <Datagrid rowClick="edit">
//           <TextField source="id" />
//           <UrlField source="url" />
//           <DateField source="createdAt" />
//           <DateField source="updatedAt" />
//           <ReferenceField source="EventId" reference="Events"><TextField source="id" /></ReferenceField>
//           <NumberField source="Event.id" />
//       </Datagrid>
//   </List>
// );

// Permanent Filter
// You can choose to always filter the list, without letting the user disable this filter - for instance to display only published posts. Write the filter to be passed to the REST client in the filter props:

// // in src/posts.js
// export const PostList = (props) => (
//     <List {...props} filter={{ is_published: true }}>
//         ...
//     </List>
// )