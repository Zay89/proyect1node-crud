const listDB = [
    {
        id: 1,
        name: "Operaciones básicas",
        description: "Sumas y restas",
        complete: "false" 
    },
    {
        id: 2,
        name: "Álgebra",
        description: "Sumas y restas de primer grado",
        complete: "false" 
    }
]
    


const getAllList = () => {
    return listDB
}


const getListById = (id) => {
    const filteredDB = listDB.filter((list) => list.id === id)
    return filteredDB[0]
}


const createList = (listObj) => {
    if (listDB.length === 0){
        const newList = {
            id: 1,
            name: listObj.name,
            description: listObj.description,
            complete: listObj.complete
        }
        listDB.push(newList)
        return newList
    }
    const newList = {
            id: listDB[listDB.length - 1 ].id + 1,
            name: listObj.name,
            description: listObj.description,
            complete: listObj.complete
    }
        listDB.push(newList)
        return newList
}


const deleteList = (id) => {
    const index = listDB.findIndex(item => item.id === id)

    if (index !== -1) {
        listDB.splice(index, 1)
    } 
    return listDB
}


const updateList = (id, data) => {
    const index = listDB.findIndex(item => item.id === id)

    if (index !== -1) {
        listDB[index] = data
        return listDB[index]
    }else {
        createList(data)
        return listDB.at(-1)
    }
}


module.exports = {
    getAllList,
    getListById,
    createList,
    deleteList,
    updateList
}