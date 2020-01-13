import React from 'react'
import { List, Datagrid, TextField, EmailField} from 'react-admin'
import MyUrlField from './MyUrlField'

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="lastname" />
            <TextField source="firstname" />
            <EmailField source="email" />
            <TextField source="phone" />
            <MyUrlField source="website" />
            <TextField source="company.name" />
        </Datagrid>
    </List>
);