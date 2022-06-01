import { useStyles } from "./styles";
import { LinkButton } from "../LinkButton";

export const TopBar: React.FC = (props) => {
  const classNames = useStyles();

  return (
    <>
      <div className={classNames.container}>
        <LinkButton link="/" text="Home" />
        <LinkButton link="/photos" text="Photo Gallery" />
        <LinkButton link="/photos" text="2RAF Streamers" />
        <LinkButton link="/stats" text="Stats" />
      </div>
      {props.children}
    </>
  );
};
