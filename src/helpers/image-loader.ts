const loadLoacalCollection = () => {
      const images = [
            {
                  id: 1,
                  src: "./assets/images/screenshots/image-1.png",
                  title: "foo",
                  description: "bar",
            },
            {
                  id: 2,
                  src: "./assets/images/screenshots/image-2.png",
                  title: "foo",
                  description: "bar",
            },
            {
                  id: 3,
                  src: "./assets/images/screenshots/image-3.png",
                  title: "foo",
                  description: "bar",
            },
            {
                  id: 4,
                  src: "./assets/images/screenshots/image-4.png",
                  title: "foo",
                  description: "bar",
            },
            {
                  id: 5,
                  src: "./assets/images/screenshots/image-5.jpeg",
                  title: "foo",
                  description: "bar",
            },
      ];

      return images;
};

export const ImageLoader = {
      loadLoacalCollection,
};
