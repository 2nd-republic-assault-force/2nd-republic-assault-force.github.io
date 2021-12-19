import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStyles } from "./styles";



export const TopBar: React.FC = (props) => {

    const history = useHistory()
    const classNames = useStyles();
    
    //add 4 buttons for the different links

 return (<><div className={classNames.container} >
        <Button variant='contained' color='primary' className={classNames.button} onClick={(event) => {
            history.push('/')
        }}>
            Home
        </Button >
        <Button  variant='contained' color='primary' className={classNames.button} onClick={(event) => {
            history.push('/photos')
        }}>
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