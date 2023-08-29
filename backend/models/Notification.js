const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const notificationSchema = new Schema(
    {
        user_id: {
            type: String,
            required: true,
        },
        list: {
            type: Array,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Notification", notificationSchema);
