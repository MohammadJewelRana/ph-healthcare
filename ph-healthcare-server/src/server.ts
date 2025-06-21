
// import { Server } from 'http';
 



// async function main() {
//     const server: Server = app.listen(config.port, () => {
//         console.log("Sever is running on port ", config.port);
//     });

//     const exitHandler = () => {
//         if (server) {
//             server.close(() => {
//                 console.info("Server closed!")
//             })
//         }
//         process.exit(1);
//     };
//     process.on('uncaughtException', (error) => {
//         console.log(error);
//         exitHandler();
//     });

//     process.on('unhandledRejection', (error) => {
//         console.log(error);
//         exitHandler();
//     })
// };

// main();



import express from 'express'
const app=express();

const port=3000;

app.listen(port,()=>{
    console.log('App is listening on port ', port);
    
})