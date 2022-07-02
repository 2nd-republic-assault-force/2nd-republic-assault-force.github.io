import { useStyles } from "./styles";
import { LinkButton } from "../LinkButton";
import { useTheme } from "@material-ui/core";

export const TopBar: React.FC = (props) => {
      const theme = useTheme();
      const classes = useStyles(theme);

      return (
            <>
                  <div className={classes.container}>
                        <LinkButton link="/" text="Home" />
                        <LinkButton link="/photos" text="Photo Gallery" />
                        <LinkButton link="/photos" text="2RAF Streamers" />
                        <LinkButton link="/stats" text="Stats" />
                  </div>
                  <div className={classes.children}>{props.children}</div>
            </>
      );
};
