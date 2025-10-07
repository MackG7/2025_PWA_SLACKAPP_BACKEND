import mongoose from "mongoose";

const channelSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            default: ""
        },
        type: {
            type: String,
            enum: ['workspace', 'direct', 'group'],
            default: 'workspace'
        },
        members: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Member',
            required: true
        }],
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Member',
            required: true
        },
        isActive: {
            type: Boolean,
            default: true
        },
        isPrivate: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true // Esto crea createdAt y updatedAt automáticamente
    }
);

const Channel = mongoose.model('Channel', channelSchema);
export default Channel;