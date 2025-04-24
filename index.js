
// import express from 'express'
// import cors from 'cors'
// import dotenv from 'dotenv'
// import cookieParser from 'cookie-parser'
// dotenv.config()
// import morgan from 'morgan'
// import helmet from 'helmet'
// import connectDB from './config/connectDB.js'
// import userRouter from './route/userRoute.js'

// const app = express()
// app.use(cors({
//     credentials : true,
//     origin : process.env.FRONTEND_URL
// }))
// app.use(express.json())
// app.use(cookieParser())
// app.use(morgan())
// app.use(helmet({
//     crossOriginResourcePolicy : false
// }))

// const PORT = 6000 || process.env.PORT

// app.get("/",(request,response)=>{
//     ///server to client
//     // response.json({
//     //     message : "Server is running " + PORT



        

//     res.json(`
//         <!DOCTYPE html>
//         <html lang="en">
//         <head>
//           <meta charset="UTF-8" />
//           <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
//           <title>Server Status</title>
//           <style>
//             * {
//               box-sizing: border-box;
//               margin: 0;
//               padding: 0;
//             }
    
//             body {
//               font-family: 'Segoe UI', sans-serif;
//               background: linear-gradient(135deg, #ff416c, #ff4b2b);
//               color: white;
//               display: flex;
//               justify-content: center;
//               align-items: center;
//               height: 100vh;
//               text-align: center;
//             }
    
//             .container {
//               background: rgba(255, 255, 255, 0.1);
//               padding: 40px;
//               border-radius: 20px;
//               box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
//               max-width: 90%;
//               width: 400px;
//             }
    
//             h1 {
//               font-size: 2.5rem;
//               margin-bottom: 10px;
//             }
    
//             p {
//               font-size: 1.2rem;
//               opacity: 0.85;
//             }
    
//             @media (max-width: 600px) {
//               .container {
//                 padding: 30px 20px;
//               }
    
//               h1 {
//                 font-size: 2rem;
//               }
    
//               p {
//                 font-size: 1rem;
//               }
//             }
//           </style>
//         </head>
//         <body>
//           <div class="container">
//            <h2>🚀 Welcome to my website</h2>
//             <h3>🚀 Server is Running!</h3>
//             <p>API is live and listening on port <strong>${PORT}</strong></p>
//           </div>
//         </body>
//         </html>
//       `);
//     });






//     // })
// // })

// app.use('/api',userRouter)

// connectDB().then(()=>{
//     app.listen(PORT,()=>{
//         console.log("Server is running",PORT)
//     })
// })










import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import helmet from 'helmet'
import connectDB from './config/connectDB.js'
import userRouter from './route/userRoute.js'

dotenv.config()

const app = express()

app.use(cors({
  credentials: true,
  origin: process.env.FRONTEND_URL
}))
app.use(express.json())
app.use(cookieParser())
app.use(morgan('dev'))
app.use(helmet({
  crossOriginResourcePolicy: false
}))

const PORT = process.env.PORT || 6000

app.get("/", (req, res) => {
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Server Status</title>
        <style>
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
  
          body {
            font-family: 'Segoe UI', sans-serif;
            background-image: url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1950&q=80');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            color: white;
            text-align: center;
          }
  
          .container {
            background: rgba(0, 0, 0, 0.6);
            padding: 40px;
            border-radius: 20px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
            max-width: 90%;
            width: 400px;
          }
  
          h1, h2 {
            margin-bottom: 10px;
          }
  
          p {
            font-size: 1.2rem;
            opacity: 0.9;
          }
  
          @media (max-width: 600px) {
            .container {
              padding: 30px 20px;
            }
  
            h1 {
              font-size: 2rem;
            }
  
            p {
              font-size: 1rem;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>🌿 Welcome to My Server</h2>
          <h3>✅ Server is Running!</h3>
          <p>API is live and listening on port <strong>${PORT}</strong></p>
        </div>
      </body>
      </html>
    `)
  })

app.use('/api', userRouter)

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("✅ Server is running on port", PORT)
  })
})


