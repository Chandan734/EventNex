const mongoose =require('mongoose');

mongoose.connect(`mongodb+srv://user2000:Chand1234@cluster0.pbqdca4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
  .then(() => console.log('Connected to MongoDB!'))
  .catch(err => console.error('Error connecting to MongoDB:', err));