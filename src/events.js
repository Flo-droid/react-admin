import React from 'react'
import { List, Datagrid, TextField, Edit, SimpleForm, TextInput, ChipField, DateField, NumberField, ImageField, ImageInput, ArrayField, SingleFieldList, DateInput, ReferenceInput, SelectInput, ArrayInput, NumberInput, SimpleFormIterator} from 'react-admin'

export const EventList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <DateField source="date" />
            <TextField source="rdv_point" />
            <TextField source="mission" />
            <NumberField source="status" />
            <ArrayField source="Before_pics"><SingleFieldList><ImageField source="url" /></SingleFieldList></ArrayField>
        </Datagrid>
    </List>
);

export const EventEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <DateInput source="date" />
            <TextInput source="rdv_point" />
            <TextInput source="mission" />
            <NumberInput source="status" />
            <ArrayInput source="Before_pics"><SimpleFormIterator><TextInput source="id" />
                <ImageInput source="pictures" label="Related pictures" accept="image/*">
                    <ImageField source="src" title="title" />
                </ImageInput>                
                <DateInput source="createdAt" />
                <DateInput source="updatedAt" />
                {/* <ReferenceInput source="EventId" reference="Events"><SelectInput optionText="id" /></ReferenceInput> */}
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Edit>
);