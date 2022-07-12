import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
      imageContainer: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
      },
      image: {
            maxHeight: "300px",
            maxWidth: "100%",
            margin: "5px",
            boxShadow: "5px 5px 5px black",
      },
}));
