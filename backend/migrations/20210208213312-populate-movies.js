module.exports = {
  // upgrading
  async up(db, client) {
    await db
      .collection("movies")
      .insertMany([
        { title: "Avatar" },
        { title: "Star Wars" },
        { title: "Terminator" },
        { title: "Titanic" },
        { title: "The Pursuit of Happiness" },
      ]);
  },

  // downgrading
  async down(db, client) {
    await db.collection("movies").deleteMany({
      title: {
        $in: ["Avatar", "Star Wars", "Terminator", "Titanic", "The Pursuit of Happiness"],
      },
    });
  },
};
