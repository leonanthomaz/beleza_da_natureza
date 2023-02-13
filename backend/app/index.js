require('dotenv').config()
const { json } = require('express')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const path = require('path')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const authRouter = require('./routes/auth')
const productRouter = require('./routes/product')

app.use(express.json())
app.use(bodyParser.json())

// app.use((req, res, next)=>{
//     res.header("Access-Control-Allow-Origin", process.env.BASEURL)
//     res.header("Access-Control-Allow-Methods", "OPTIONS,GET,PUT,PATCH,POST,DELETE")
//     res.header("Access-Control-Allow-Headers", 
//                 "X-PINGOTHER, Content-Type, Authorization")
//     res.header('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
//     app.use(cors())
//     next()
// })

app.use(cors({origin: process.env.BASEURL,credentials: true}));
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
  if (req.method === "OPTIONS") {
      return res.status(200).end();
  } else {
      next(); 
  }
});

// app.use(cors());
// app.use((req,res,next)=>{
//     res.header('Access-Control-Allow-Headers, *, Access-Control-Allow-Origin', 'Origin, X-Requested-with, Content_Type,Accept,Authorization', process.env.BASEURL);
//     if(req.method === 'OPTIONS') {
//         res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,DELETE,GET');
//         return res.status(200).json({msg: "Finalmente problema de cors resolvido!"});
//     }else{
//         return res.status(500).json({msg: "Erro cabuloso!"});
//     }
//     next();
// });




// mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser: true }, function (err) { 
//     if (err) throw err; console.log('Conectado ao Mongo'); });

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })
.then(()=>{
    console.log('MongoDB rodando!')
}).catch((error)=>{
    console.log('Erro: ', error)
})

app.use("/img", express.static(path.join(__dirname, "img")));

app.use('/auth', authRouter)
app.use('/products', productRouter)

app.listen(PORT, ()=>{
    console.log(`Aplicativo rodando na porta: ${PORT}`)
})
