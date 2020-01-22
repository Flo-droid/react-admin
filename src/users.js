import React from 'react'
import { List, Datagrid, TextField, Edit, SimpleForm, TextInput, ImageField} from 'react-admin'

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="firstname" />
            <TextField source="lastname" />
            <TextField source="mail" />
            <TextField source="pseudo" />
            <TextField source="phone" />
            <TextField source="description" />
            <TextField source="hobbies" />
            <ImageField source="profil_pic" />
        </Datagrid>
    </List>
);

export const UserEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="firstname" />
            <TextInput source="lastname" />
            <TextInput source="mail" />
            <TextInput source="pseudo" />
            <TextInput source="phone" />
            <TextInput source="description" />
            <TextInput source="hobbies" />
        </SimpleForm>
    </Edit>
);