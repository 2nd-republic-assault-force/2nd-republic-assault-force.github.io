import { Button } from "@material-ui/core";
import { useStyles } from "./styles";



export const TopBar: React.FC = (props) => {

    const classNames = useStyles();
    
    //add 4 buttons for the different links

 return (<><div className={classNames.container} >
        <Button variant='contained' color='primary' className={classNames.button}>
            Home
        </Button >
        <Button  variant='contained' color='primary' className={classNames.button}>
            Photo Gallery
        </Button>
        <Button  variant='contained' color='primary' className={classNames.button}>
            2RAF Streamers
        </Button>
        <Button  variant='contained' color='primary' className={classNames.button}>
            Stats
        </Button>
    </div>
    {props.children}
    </>)
}