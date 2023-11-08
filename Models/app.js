app.get("/", async (req, res) => {
    Room.insertMany([
      {
        room: "자바스크립트 단톡방",
        members: [],
      },
      {
        room: "리액트 단톡방",
        members: [],
      },
      {
        room: "NodeJS 단톡방",
        members: [],
      },
    ])
      .then(() => res.send("ok"))
      .catch((error) => res.send(error));
  });