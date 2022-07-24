import { makeStyles } from '@material-ui/core/styles';


const loaderStyles = makeStyles((theme) => ({
    spinner: {
        display: 'flex',
        height: '25vh',
        justifyContent: 'center',
        alignItems: 'center',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));

export { loaderStyles };
