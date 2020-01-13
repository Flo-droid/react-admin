import React from 'react';
import jsonServerProvider from 'ra-data-json-server'
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin'
import { UserList } from './users'
import {PostList, PostEdit, PostCreate} from './posts'
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from './Dashboard';
import authProvider from './authProvider'

const dataProvider = jsonServerProvider('https://cleantest.herokuapp.com')

const App = () => {
  console.log(dataProvider)
  return (
    <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
      <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
      <Resource name="users" list={ListGuesser} icon={UserIcon}/>
    </Admin>
  );
}

export default App;

// The X-Total-Count header is missing in the HTTP Response. The jsonServer Data Provider expects responses for lists of resources to contain this header with the total number of results to build the pagination. If you are using CORS, did you declare X-Total-Count in the Access-Control-Expose-Headers header?