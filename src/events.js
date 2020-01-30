import React from 'react'
import {List, Datagrid, TextField, DateField, NumberField, BooleanField, ImageField, BooleanInput, DateInput, NumberInput, ImageInput, ReferenceField, EditButton, SelectInput, TextInput, Edit, SimpleForm, ReferenceInput, Create, Filter} from 'react-admin'

export const EventList = props => {
    return (
        <List {...props} title="Evenements" exporter={false} pagination={false} >
            <Datagrid rowClick="edit">
                <TextField source="id" sortable={false} />
                <TextField source="name" label="Titre de l'evenement" sortable={false} />
                <DateField source="date" label="Date" sortable={false} />
                <TextField source="rdv_point" label="Point de rendez-vous" sortable={false} />
                <TextField source="mission" label="Mission" sortable={false} />
                <NumberField source="status" label="Status" sortable={false} />
                <BooleanField source="pending" label="Validé" sortable={false} />
                <ImageField source="url" label="Photo" sortable={false} />
            </Datagrid>
        </List>
    )
}

export const EventEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <BooleanInput source="pending" label="Validé " />
            <TextInput source="name" label="Titre de l'evenement" />
            <TextInput source="position" label="Position"/>
            <DateInput source="date" label="Date"/>
            <TextInput source="rdv_point" label="Point de rendez-vous" />
            <TextInput source="mission" label="Mission" />
            <NumberInput source="status" label="Status" />
            <ImageInput source="url" accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    </Edit>
);
 