import image1 from "../assets/images/screenshots/image-1.png";
import image2 from "../assets/images/screenshots/image-2.png";
import image3 from "../assets/images/screenshots/image-3.png";
import image4 from "../assets/images/screenshots/image-4.png";
import image5 from "../assets/images/screenshots/image-5.jpeg";

const loadLoacalCollection = () => {
      const images = [
            {
                  id: 1,
                  src: image1,
                  title: "foo",
                  description: "bar",
            },
            {
                  id: 2,
                  src: image2,
                  title: "foo",
                  description: "bar",
            },
            {
                  id: 3,
                  src: image3,
                  title: "foo",
                  description: "bar",
            },
            {
                  id: 4,
                  src: image4,
                  title: "foo",
                  description: "bar",
            },
            {
                  id: 5,
                  src: image5,
                  title: "foo",
                  description: "bar",
            },
      ];

      return images;
};

export const ImageLoader = {
      loadLoacalCollection,
};
