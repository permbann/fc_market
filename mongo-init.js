db.createUser({
  user: "fc",
  pwd: "monarchs8luff",
  roles: [
    {
      role: "readWrite",
      db: "market",
    },
  ],
});
