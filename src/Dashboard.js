import React, {useHistory} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

const styles = {
    dash: { display: 'flex', flexDirection: 'column', alignItems: 'center'},
    button: { maxWidth: '30%' },
};

export default () => (
    <Card style={styles.dash}>
        <CardHeader title="Bienvenue sur la page d'administration de Clean my calanques" />
        <CardContent>Indications à donner</CardContent>
        <a href='https://localhost:3000' style={styles.button}><button>Retour sur l'application</button></a>
    </Card>
);