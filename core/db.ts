import mongoose, { ConnectOptions } from 'mongoose'

mongoose.Promise = Promise

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/twitter', {
  useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    poolSize: parseInt(process.env.POOL_SIZE!),
  } as ConnectOptions)
  .then((res) => {
    console.log(
      'Connected to Distribution API Database - Initial Connection'
    );
  })
  .catch((err) => {
    console.log(
      `Initial Distribution API Database connection error occured -`,
      err
    );
})

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error'))

export { db, mongoose }