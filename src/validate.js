import React from 'react'
import buttonValidate from './buttonValidate'
import { useEditController, textInput, ImageField, ArrayField, SingleFieldList, NumberField, TextField, SimpleForm, DateField} from 'react-admin'
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import AcceptToolBar from './acceptToolbar';


const Validate = ({onCancel, ...props}) => {
    const controllerProps = useEditController(props)

    if (!controllerProps.record) {
        return null;
    }

    return (
        <div>
            <IconButton onClick={onCancel}><CloseIcon /></IconButton>
            <SimpleForm
                basePath={controllerProps.basePath}
                record={controllerProps.record}
                toolbar={<AcceptToolBar />}
                resource="events"
            >
                <TextField source="id" />
                <TextField source="name" />
                <DateField source="date" />
                <TextField source="rdv_point" />
                <TextField source="mission" />
                <NumberField source="status" />
                <ImageField source="url" />
            </SimpleForm>
        </div>
    )
}

export default Validate