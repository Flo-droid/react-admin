import React from 'react'
import MuiToolbar from '@material-ui/core/Toolbar';
import { DeleteButton, } from 'react-admin'
import AcceptButton from './buttonValidate'


const AcceptToolBar = ({basePath, record, resource}) => {


    return (

        <MuiToolbar >
            {record && record.pending == false ?
                <AcceptButton record={record}/>
                : <span />
            }
            
            <DeleteButton basePath={basePath} record={record} resource={resource} variant="outlined"
                color="primary"
                size="small"/>
        </MuiToolbar >  
        
    )
}

export default AcceptToolBar