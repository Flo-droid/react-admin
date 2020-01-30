import React from 'react'
import { List, Datagrid, TextField, Edit, SimpleForm, TextInput, ImageField, NumberField, NumberInput} from 'react-admin'

export const UserList = props => (
    <List {...props} title="Utilisateurs" >
        <Datagrid rowClick="edit">
            <TextField source="firstname" label="Prénom" sortable={false} />
            <TextField source="lastname" label="Nom" sortable={false} />
            <TextField source="pseudo" label="Pseudo" sortable={false} />
            <TextField source="mail" label="Email" sortable={false} />
            <TextField source="phone" label="Téléphone" sortable={false} />
            <TextField source="description" label="Description" sortable={false} />
            <TextField source="hobbies" label="Hobbies" sortable={false} />
            <NumberField source="privileges" label="Privilèges" sortable={false} />
            <ImageField source="profil_pic" label="Photo" sortable={false} />
        </Datagrid>
    </List>
);

export const UserEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="firstname" label="Prénom" />
            <TextInput source="lastname" label="Nom" />
            <TextInput source="mail" label="Email" />
            <TextInput source="pseudo" label="Pseudo" />
            <TextInput source="phone" label="Téléphone" />
            <TextInput source="description" label="Description" />
            <TextInput source="hobbies" label="Hobbies" />
            <NumberInput source="privileges" label="Privilèges" />
        </SimpleForm>
    </Edit>
);