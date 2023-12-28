const { Schema, model, Types } = require('mongoose');
const moment = require('moment');

// Common options for both schemas
const commonOptions = {
  // ... your common options here
};

// Validation Middleware
const reactionBodyValidator = [
  ({ length }) => length <= 280,
  'Reaction must be less than 280 characters.',
];

const thoughtTextValidator = [
  ({ length }) => length <= 280,
  'Thought must be less than 280 characters.',
];

// Reaction Schema
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      validate: reactionBodyValidator,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) =>
        moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a'),
    },
  },
  {
    ...commonOptions,
  }
);

// Thought Schema
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      validate: thoughtTextValidator,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) =>
        moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a'),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    ...commonOptions,
  }
);

// Virtual Field for Reaction Count
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

// Create the Thought model using the ThoughtSchema
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
