import { ImageList, ImageListItem } from "@material-ui/core";
import { TopBar } from "../../components/TopBar";
import { ImageLoader } from "../../helpers/image-loader";
import { useStyles } from "./styles";

export const PhotoGallery = () => {
      const classes = useStyles();

      const images = ImageLoader.loadLoacalCollection();

      return (
            <TopBar>
                  <ImageList>
                        {images.map((item) => (
                              <ImageListItem key={item.src}>
                                    <img
                                          src={`${item.src}?w=161&fit=crop&auto=format`}
                                          srcSet={`${item.src}?w=161&fit=crop&auto=format&dpr=2 2x`}
                                          alt={item.title}
                                          loading="lazy"
                                    />
                              </ImageListItem>
                        ))}
                  </ImageList>
            </TopBar>
      );
};
