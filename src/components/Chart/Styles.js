import { makeStyles } from '@material-ui/core/styles';


const chartStyles = makeStyles((theme) => ({
    root: {
        width: 1000,
        display: 'flex',
        margin: '1rem auto',
        [theme.breakpoints.down('md')]: {
            width: 800,
        },
        [theme.breakpoints.down('sm')]: {
            width: 340,
        },
    },
}));

export { chartStyles };