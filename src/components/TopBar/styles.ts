import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    container :{
        display:"flex",
        flexDirection:"row",
        background:'black',
        alignContent: "stretch",
        justifyContent:"center",
        position: "sticky",
        top:"0px"
    },
    button: {
        color:'black',
        width:'100%',
    },
    textBlock: {
        maxWidth:'50px'
    }

}));