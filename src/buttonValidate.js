import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import ThumbUp from '@material-ui/icons/ThumbUp';
import { useTranslate, useUpdate, useNotify, useRedirect } from 'react-admin';

const AcceptButton = ({ record }) => {
    const notify= useNotify()
    const redirectTo= useRedirect();

    const [approve, {loading}] = useUpdate(
        'events',
        record.id,
        {pending : true},
        record,
        {
            undoable: true,
            onSuccess: () => {
                notify(
                    'Cet evenement a été validé',
                    'info',
                    {},
                    true
                );
                redirectTo('/events')
            },
            onFailure : () => {
                notify(
                    "Une erreur s'est produite",
                    'warning'
                )
            },
        }
    )

    return (
            <Button
                variant="outlined"
                color="primary"
                size="small"
                onClick={approve}
                disabled={loading} >
                <ThumbUp color='primary' style={{ paddingRigh: '0.5em', color: 'green'}} /> Validé
            </Button>
    )
}

export default AcceptButton