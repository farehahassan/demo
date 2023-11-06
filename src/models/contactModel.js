import { Schema, model, models } from "mongoose";

const contactSchema = new Schema({
    name: {
        type: String,
        // required: true, // Use "required" instead of "require"
    },
    email: {
        type: String,
        // required: true, // Use "required" instead of "require"
    },
    message: {
        type: String,
        // required: true, // Use "required" instead of "require"
    },
});

const Contact = models.Contact || model("Contact", contactSchema);

export default Contact;
