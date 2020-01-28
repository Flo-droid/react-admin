import React from 'react'
import {List, Datagrid, TextField, ImageField, BooleanField, DateField, Edit, SimpleForm, TextInput, BooleanInput} from 'react-admin'

export const GalerieList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ImageField source="url" label="Photo" />
            <BooleanField source="pending" label="Validé" />
        </Datagrid>
    </List>
);

export const GalerieEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="url" label="Photo" />
            <BooleanInput source="pending" label="Validé" />
        </SimpleForm>
    </Edit>
);