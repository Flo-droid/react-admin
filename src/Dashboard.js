import React, {useHistory} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

const styles = {
    dash: { display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign : 'center'},
    button: { maxWidth: '30%' },
};

export default () => (
    <Card style={styles.dash}>
        <CardHeader title="Bienvenue sur la page d'administration de Clean my calanques" />
        <CardContent><p>Ici vous pouvez gérer l'application Clean my calanques.</p>
            <p>Vous pouvez gérer les utilisateurs ainsi que les interêts, les évenements et les photos postés par la communauté.</p>
            <p>Pour valider les photos, les interêts ou les évenements, il faut cliquer sur la catégorie correspondante puis choisir l'objet que vous voulez modifier ou valider.
            Dans la fenêtre qui s'ouvrira, vous pourrez modifier les champs que vous souhaitez ou validé pour que celle-ci soit disponible sur l'application.</p>
            <p>Pour revenir à l'application principale, un bouton est disponible ci dessous pour y retourner.</p>
        </CardContent>
        <a href='https://cleanmycalanques.netlify.com' style={styles.button}><button>Retour sur l'application</button></a>
    </Card>
);