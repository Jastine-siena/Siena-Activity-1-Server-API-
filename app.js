const express = require('express');
const app = express();

const dsUsers =[
    {
        id: 1,
        name: 'John Doe'
    },
    {
        id: 1,
        name: 'Jane Doe'
    }
]
app.get('/api/users', (req, res) =>{
    res.send(dsUsers);
});
app.get('/api/users/:id', (req,res) =>{
    const user = dsUsers.find((c) => c.id === parseInt(req.params.id));

    if(!user)
    return res.status(404).send('The user with the given id was not found.');
res.send(user);
})

app.get('api/users', (req,res) =>{
//sort by name from parameters)
if(req.query.sortBy === 'name'){
    dsUsers.sort((a,b) => {
        if(a.name <b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
    })
}
//return the list of users
res.send(dsUsers);
});


/*app.get('/', (req, res) =>{
    res.send('Hello World');
});

app.get('/api/test', (req,res) =>{
    res.send([{ id: 1, text: 'Test Object'}])
});

app.get ('/api/post/:year/:month', (req,res) => { 
    res.send(req.query)
});*/

const port = process.env.PORT || 3000;
app.listen(port, () =>
    console.log(`Listening to http://localhost: ${port}....`)
);

