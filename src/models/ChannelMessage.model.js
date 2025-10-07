import mongoose from "mongoose";

const ChannelMessageSchema = new mongoose.Schema(
    {
        channel: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Channel',
            required: true
        },
        member: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Member',
            required: true
        },
        content: {
            type: String,
            required: true,
            trim: true
        },
       messageType:  {
            type: String,
            enum: ['text', 'image', 'file', 'system'],
            default: 'text'
        },
        repliedTo: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ChannelMessage'
        },
        reactions: [{
            member: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Member'
            },
            emoji: String
        }]
    },
    {
        timestamps: true
    }
);

const ChannelMessage = mongoose.model('ChannelMessage', ChannelMessageSchema);
export default ChannelMessage;