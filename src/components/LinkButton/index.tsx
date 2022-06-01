import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStyles } from "./styles";

type LinkButtonProps = {
  text: string;
  link: string;
};

export const LinkButton: React.FC<LinkButtonProps> = (props) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Button
      variant="contained"
      color="primary"
      className={classes.button}
      onClick={(event) => {
        history.push(props.link);
      }}
    >
      {props.text}
    </Button>
  );
};
