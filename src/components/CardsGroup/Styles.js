import { makeStyles } from '@material-ui/core/styles';


const cardsGroupStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'content-box',
        gap: '5rem',
        [theme.breakpoints.down('sm')]: {
            gap: 0,
        },
        [theme.breakpoints.down('md')]: {
            gap: '1rem',
        },
    },
    root: {
        minWidth: 275,
        width: 350,
        height: 200,
        margin: '1rem 0',
        padding: '1rem',
    },
    infected: {
        borderTop: '#3d6cb9 15px solid',
    },
    healed: {
        borderTop: '#0b8457 15px solid',
    },
    dead: {
        borderTop: '#c03546 15px solid',
    },
    title: {
        fontSize: '1.5rem',
    },
    pos: {
        marginBottom: 12,
    },
}));

export { cardsGroupStyles };
