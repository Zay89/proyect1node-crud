const { getAllList, getListById, createList, deleteList, updateList } = require('./list.controlers')

const getAll = (req, res) => {
    const data = getAllList()
    res.status(200).json(data)
}


const getById = (req, res) => {
    const id = Number(req,params.id)

    if(id){
        const data = getListById(id)
        if(data.id) {
            res.status(200).json(data)
        } else {
            res.status(400).json({message: 'Invalid ID'})
        }  
    } else {
        res.status(400).json({message: 'ID is not a number'})
    }
}


const created = (req, res) => {
    const data = req.body

    if(data.name && data.description && data.complete){
        const response = createList(data)
        res.status(201).json(response)
    } else {
        res.status(400).json({message: 'Wrong data'})
    }
}

const deleted = (req, res) => {
    const id = Number(req.params.id)

    if (deleteList(id)) {
        res.status(204).json({message: 'ID deleted'})
    } else {
        res.status(400).json({message: 'Invalid ID'})
    }
}

const updated = (req, res) => {
    const id = Number(req.params.id)
    const data = req.body

    if(data.name && data.description && data.complete) {
        const response = updateList(data)
        res.status(201).json(response)
    } else {
        res.status(400).json({message: 'Invalid ID'})
    }
}


module.exports = {
    getAll,
    getById,
    created,
    deleted,
    updated
}