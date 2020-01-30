import React from 'react'
import {List, Datagrid, TextField, ImageField, BooleanField, DateField, Edit, SimpleForm, TextInput, BooleanInput} from 'react-admin'

export const GalerieList = props => (
    <List {...props} exporter={false} pagination={false}>
        <Datagrid rowClick="edit">
            <TextField source="id" sortable={false} />
            <ImageField source="url" label="Photo" sortable={false} />
            <BooleanField source="pending" label="Validé" sortable={false} />
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