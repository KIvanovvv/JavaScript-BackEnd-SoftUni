const { Schema, model, Types } = require("mongoose");

const courseSchema = new Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true, maxlength: 50 },
  imageUrl: { type: String, required: true },
  duration: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  enrolled: { type: [Types.ObjectId], ref: "User", default: [] },
});

courseSchema.index(
  { title: 1 },
  {
    collation: {
      locale: "en",
      strength: 2,
    },
  }
);

const Course = model("Course", courseSchema);

module.exports = Course;
