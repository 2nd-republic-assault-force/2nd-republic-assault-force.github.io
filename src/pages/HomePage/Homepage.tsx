import { LinkFooter } from "../../components/LinkFooter";
import outfitLogo from "../../assets/images/2raflogo.png";
import { Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import { TopBar } from "../../components/TopBar";

export const Homepage: React.FC = () => {
      const classes = useStyles();

      return (
            <div>
                  <TopBar>
                        <div className={classes.AppHeader}>
                              <img
                                    src={outfitLogo}
                                    className="App-logo"
                                    alt="logo"
                              />
                              <Typography
                                    color={"secondary"}
                                    className={classes.textBlock}
                              >
                                    2RAF is a Planetside 2 Outfit on Emerald
                                    specializing in combined arms play. Join us
                                    Wednesdays and Fridays from 7:45 - 10:00 EST
                                    for our weekly operations and follow us on
                                    our social media:
                              </Typography>
                              <LinkFooter />
                        </div>
                  </TopBar>
            </div>
      );
};
