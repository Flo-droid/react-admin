import React, { useCallback } from 'react'
import { Route, useHistory } from 'react-router-dom'
import { List, BooleanField, Datagrid, TextField, Edit, SimpleForm, TextInput, ChipField, DateField, NumberField, ImageField, ImageInput, ArrayField, SingleFieldList, DateInput, ReferenceInput, SelectInput, ArrayInput, NumberInput, SimpleFormIterator} from 'react-admin'
import { Drawer, useMediaQuery, makeStyles } from '@material-ui/core';
import Validate from './validate'

export const Events = props => {
    const history = useHistory();

    const handleClose = useCallback(() => {
        history.push('/events');
    }, [history])

    return (
        <div>
            <Route path="/events/:id">
                {({ match }) => {
                    const isMatch = !!(
                        match&&
                        match.params && 
                        match.params.id !== 'create'
                    )

                    return (
                        <>
                            <List {...props} filter={{ pending : false}}>
                                <Datagrid rowClick="edit">
                                    <TextField source="id" />
                                    <TextField source="name" />
                                    <DateField source="date" />
                                    <TextField source="rdv_point" />
                                    <TextField source="mission" />
                                    <NumberField source="status" />
                                    <BooleanField source="pending" />
                                    <ImageField source="url" />
                                </Datagrid>
                            </List>
                            <Drawer
                                variant="persistent"
                                open={isMatch}
                                anchor="right"
                                onClose={handleClose}
                            >
                                {isMatch ?
                                    <Validate
                                        id={match.params.id} 
                                        onCancel={handleClose} 
                                        {...props} 
                                    />
                                : null }                                
                            </Drawer>
                        </>
                    )
                }}
            </Route>
        </div>
    )
}