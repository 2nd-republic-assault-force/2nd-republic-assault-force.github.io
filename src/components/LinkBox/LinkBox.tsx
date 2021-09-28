import { Button } from "@material-ui/core";
import { useStyles }from './styles'
type LinkBoxProps = {
    destinationLink: string;
    text:string;
}

export const LinkBox = (props: LinkBoxProps) => {
    
    const classes = useStyles();
    
    return (
    <Button
        color="primary"
        variant="contained"
        className={classes.button}
        href={props.destinationLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.text}
      </Button>
    )
}
