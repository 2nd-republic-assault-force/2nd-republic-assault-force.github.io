export type AppContext = {
  firebase: {
    db: FirebaseFirestore.Firestore;
    projectId: string;
    credentials: Credential;
  };
};
