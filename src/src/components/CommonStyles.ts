import {makeStyles} from "@material-ui/core/styles";

const commonStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        maxWidth: 800
    },
    fixedHeight: {
        height: 240,
    },
}));

export default commonStyles;
