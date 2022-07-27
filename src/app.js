const express = require ('express');
const listRouter = require('./List/list.router').router

const app = express();

app.use(express.json());


app.use('/api/v1', listRouter)


// // Ruta para obtener todas mis litas
// app.get('/list', (req, res) => {
//     res.status(200).json(listDB)
// })

// // Ruta para obtener una lista en especifico
// app.get('/list/:id', (req, res) => {
//     const id = Number(req.params.id)
//     const filteredDB = listDB.filter(item => item.id === id)
    
//     if (filteredDB.length > 0) {
//         res.status(200).json(filteredDB[0])
//     } else {
//         res.status(400).json({message: 'Invalid ID'})
//     } 
// })


// app.post('/list', (req, res) => {
//     const data = req.body
    
//     if (listDB.length === 0){
//         const newList = {
//             id: 1,
//             ...data
//         }
//         listDB.push(newList)
//     } else {
//         const newList = {
//             id: listDB[listDB.length -1].id + 1,
//             ...data
//         }
//         listDB.push(newList)
//     }
//     res.status(201).json(listDB)
// })


// app.delete('/list/:id', (req, res) => {
//     const id = Number(req.params.id)
//     const index = listDB.findIndex(item => item.id === id)

//     if (index !== -1){
//         listDB.splice(index, 1)
//         res.status(204).json()
//     } else {
//         res.status(400).json({message: 'Invalid ID'})
//     } 
// })


// app.put('/list/:id', (req, res) => {
//     const id = Number(req.params.id)
//     const data = req.body
//     const index = listDB.findIndex(item => item.id === id)

//     if(index === -1){
//         res.status(400).json({message: 'Invalid ID'})
//     }

//     if (data.name && data.description && data.complete){
//         listDB[index] = {
//             id,
//             name: data.name,
//             description: data.description,
//             complete: data.complete
//     }
//     res.status(200).json(listDB)
//     } else {
//         res.status(400).json({message: 'Missing data'})
//     }
// })


  






 app.listen (8000, () => {
         console.log('Server started at port 8000')
})

