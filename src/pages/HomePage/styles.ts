import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
      container: {
            display: "flex",
            flexDirection: "column",
      },
      textBlock: {
            maxWidth: "400px",
      },
      AppHeader: {
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
      },
}));
