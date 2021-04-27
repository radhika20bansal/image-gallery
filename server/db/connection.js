const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://imagegallery:ImageGallery@cluster0.3a5p2.mongodb.net/imagegallerydb?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});