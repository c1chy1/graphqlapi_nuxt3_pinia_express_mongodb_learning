import { model, Schema } from "mongoose";

const postSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        } },

    { timestamps: true }
);

export default model("Posts", postSchema);
