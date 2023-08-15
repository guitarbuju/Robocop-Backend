
const express= require ('express')

const App= express()

const {lista}=require('./content')

const cors = require('cors');

const bp = require('body-parser')

App.use(bp.json())

App.use(bp.urlencoded({ extended: true }))

App.use(cors())

//Basic method GET to display list

App.get('/',(req,res)=>{
  res.send(lista)

})

// Suscribe new items to the list

App.post('/add',(req,res)=>{
  let newObj=req.body
  console.log(newObj)
  lista.push(newObj)
  console.log(lista)
  res.send(lista)
})

//Delete items from the list

App.delete('/del',(req,res)=>{
  let id=Number(req.body.id)
  console.log(`èste es el delete id ${id}`)
  
 let index=0
 
  if(lista.length>1){index=id-1}
  else if(lista.length=1){index=0}
  
  console.log(`èste es el delete indice ${index}`)
 
  
 lista.splice(index,1)
    console.log(lista)
    res.send(lista)


})

// Patch method set lists items to done

App.patch('/patch',(req,res)=>{
  let id=Number(req.body.id)
  console.log(`èste es el patch id ${id}`)
  
let index=0
 
  
  if(lista.length>1){index=id-1}
  else if(lista.length=1){index=0}
  console.log(`èste es el patch indice ${index}`)
  
  
  
  
  console.log(index)
  lista[index].done=true
  console.log(lista)
  res.send(lista)
})

//Port configuration

const PUERTO=process.env.PORT || 3010
App.listen(PUERTO,()=>{
    console.log(`Servidor escuchando en puerto ${PUERTO}...`)
})