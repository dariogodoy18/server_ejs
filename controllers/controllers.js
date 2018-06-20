let localEntrys = [{
    title: 'Lambo',
    content: 'aventador',
    published: new Date()}]

const index = (req, res) => {
    res.render('index', {
        title: 'Home',
        entries: localEntrys
    })
}

const newEntry = (req, res) => {
    res.render('new_entry', {
        title: 'New Entry'
    })
}

const addNewEntry = (req, res) => {
    if(!req.body.title || !req.body.body){
        res.send(400).send('Tickets must have a title and a body')
    }

    let inputReceived = {
        title: req.body.title,
        content: req.body.body,
        published: new Date()
    }

    localEntrys.push(inputReceived)
    
    console.log(localEntrys.length)
    res.redirect('/')
}

module.exports = {
    index,
    newEntry,
    addNewEntry, 
    localEntrys
}