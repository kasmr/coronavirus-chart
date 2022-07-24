import { makeStyles } from '@material-ui/core/styles';


const pickerStyles = makeStyles((theme) => ({
    formControl: {
        display: 'flex',
        width: 300,
        margin: '1rem auto',
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export { pickerStyles };