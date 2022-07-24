import { makeStyles } from '@material-ui/core/styles';


const useHeadingStyles = makeStyles((theme) => ({
    title: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '3rem',
        margin: '2rem 0',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column-reverse',
            marginBottom: '1rem',
            marginTop: '2rem',
            fontSize: '1.75rem',
            fontWeight: 'bold',
            textAlign: 'center',
        },
    },
    img: {
        marginLeft: '2rem',
        width: '6%',
        [theme.breakpoints.down('sm')]: {
            width: '20%',
            marginLeft: 0,
            marginBottom: '1rem',
        },
    },
}));

export { useHeadingStyles };