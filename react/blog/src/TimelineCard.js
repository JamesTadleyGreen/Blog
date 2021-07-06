import {Box, Paper, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: '6px 16px',
    },
    secondaryTail: {
      backgroundColor: theme.palette.secondary.main,
    },
}));

export default function TimelineCard(props) {
    const classes = useStyles();

    return(
        <Box width="100%">
            <Paper elevation={3} square>
                {props.img && <img src={props.img} alt="Logo" width="100%"/>}
                <Typography variant="h6" component="h1">
                    {props.title}
                </Typography>
                <Typography>
                    {props.subtitle}
                </Typography>
                <Typography>
                    {props.desc}
                </Typography>
            </Paper>
        </Box>
    );
}