import { Box, ImageListItem } from "@material-ui/core";
import { ImageList } from "@mui/material";
// import { useEffect } from "react";
import { ImageLoader } from "../../helpers/image-loader";
import { useStyles } from "./styles";

export const ImageCollage: React.FC = () => {
      const classes = useStyles();
      const images = ImageLoader.loadLoacalCollection();

      const sorted = images.sort((image1, image2) => {
            if (image1.id < image2.id) {
                  return -1;
            }
            if (image1.id < image2.id) {
                  return 1;
            } else return 0;
      });

      return (
            <Box className={classes.imageContainer}>
                  {sorted.map((item) => (
                        <img
                              className={classes.image}
                              src={`${item.src}?fit=crop`}
                              alt={item.title}
                              loading="lazy"
                              key={item.src}
                        />
                  ))}
            </Box>
      );
};
