'use strict';
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const ResourceSchema = mongoose.Schema({ any: Object });

ResourceSchema.methods.serialize = function() {
  return {
    attribute1: this.attribute1 || '',
    attribute2: this.attribute2 || '',
    attribute3: this.attribute3 || ''
  };
};

const Resource = mongoose.model('Resource', ResourceSchema);

module.exports = {Resource};
