var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var AccountSchema = new Schema({
  Company: {
    type: String
  },
  lyrics: {
    type: String
  },
  url: {
    type: String
  }
});

var Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;
