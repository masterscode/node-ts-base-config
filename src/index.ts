import express, { Request, Response, NextFunction} from 'express';


const app = express();

app.use('/use', (req:Request, res:Response, next:NextFunction)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With, Content,Accept ');
    res.setHeader('Access-Control-Allow-Methods','GET,PUT, POST, PATCH, DELETE, OPTIONS');
    next();
});

app.get('/', (req:Request, res:Response):void =>{
    res.json({data:'welcome to node - ts'});
});

app.listen('5000', ():void=>{
    console.log('app  server is running');   
});