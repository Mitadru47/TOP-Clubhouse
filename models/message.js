const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const { DateTime } = require("luxon");

const MessageSchema = new Schema({

    title: { type: String, required: true },
    text: { type: String, required: true },

    timestamp: { type: Date, required: true },
    creator: { type: Schema.Types.ObjectId, ref: "User", required: true }
});

MessageSchema.virtual("url").get(function (){
    return "/index/message/" + this._id;
});

MessageSchema.virtual("beautifiedDate").get(function(){
    return DateTime.fromJSDate(this.timestamp).toLocaleString(DateTime.DATE_MED);
});

MessageSchema.virtual("formattedDate").get(function (){
    return DateTime.fromJSDate(this.timestamp).toISODate();
});

module.exports = mongoose.model("Message", MessageSchema);