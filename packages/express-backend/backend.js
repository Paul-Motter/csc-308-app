// backend.js
import express from "express";
import cors from "cors";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

//GET / root endpoint
app.get("/", (req, res) => {
    res.send("Hello World!");    
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

//Data for /users endpoints.
const users = {
    users_list: [
        {
            id: "xyz789",
            name: "Charlie",
            job: "Janitor"
          },
          {
            id: "abc123",
            name: "Mac",
            job: "Bouncer"
          },
          {
            id: "ppp222",
            name: "Mac",
            job: "Professor"
          },
          {
            id: "yat999",
            name: "Dee",
            job: "Aspring actress"
          },
          {
            id: "zap555",
            name: "Dennis",
            job: "Bartender"
          }
    ]
  };

//GET /users Test
app.get("/users", (req, res) => {
    let result = users.users_list;
    if (req.query.job != undefined){
        result = result.filter((user) => user.job === req.query.job)
    }
    if (req.query.name != undefined){
        result = result.filter((user) => user.name === req.query.name)
    }
    res.send({users_list: result});
});

//Function for GET /users/:id endpoint.
const findUserById = (id) => {
    return users.users_list.find((user) => user.id === id);
};

//GET /users/:id
app.get("/users/:id", (req, res) => {
    const id = req.params.id;
    let result = findUserById(id);
    if (result === undefined) {
        res.status(404).send("Resource not found.")
    }
    else{
        res.send(result);
    }
});

//Function for POST /users
const addUser = (user) => {
    users.users_list.push(user);
    return user;
};

//POST /users
app.post("/users", (req, res) => {
    const userToAdd = req.body;
    userToAdd.id = generateId();
    addUser(userToAdd);
    res.status(201).send(userToAdd);
});
//generate a 6 digit random unique id for an added user.
function generateId(){
    do{
        //generate id.
        var id = "";
        for (let i = 0; i < 6; i++){
            //get one chaaracter to add to the id.
            id+=((Math.floor(Math.random()*10)).toString());
        }
    //check for duplicate ids.
    } while (users.users_list.filter((user) => id == user.id).length !== 0)
    return id;
}

//Function for DELETE /users/:id
const deleteUser = (id) => {
    return users.users_list = users.users_list.filter((user) => user.id !== id);
};

//DELETE /users/:id
app.delete("/users/:id", (req, res) => {
    const length = users.users_list.length;
    deleteUser(req.params.id);
    if (length === users.users_list.length){
        res.status(404).send("Resource not found.")
    } else {
        res.status(204).send();
    }
});
