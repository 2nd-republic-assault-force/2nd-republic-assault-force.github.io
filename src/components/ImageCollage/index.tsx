import { ImageListItem } from "@material-ui/core";
import { ImageList } from "@mui/material";
import { useEffect, useState } from "react";
import { useStyles } from "./styles";

const collageContainer: React.FC = (props) => {
      return <>{props.children}</>;
};

export const ImageCollage: React.FC = () => {
      const classes = useStyles();
      const [imagesList, setImages] = useState<string[]>([]);

      useEffect(() => {});

      return (
            <ImageList
                  sx={{ width: 500, height: 450 }}
                  className={classes.imageContainer}
                  rowHeight={450}
                  variant="woven"
                  cols={3}
                  gap={8}
                  component={collageContainer}
            >
                  {imagesList.map((item) => (
                        <ImageListItem key={item.img}>
                              <img
                                    src={`${item.img}?w=161&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                              />
                        </ImageListItem>
                  ))}
            </ImageList>
      );
};
