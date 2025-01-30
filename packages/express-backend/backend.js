// backend.js
import express from "express";
import cors from "cors";
import user_services from "./user_services.js";

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
// const users = {
//     users_list: [
//         {
//             id: "xyz789",
//             name: "Charlie",
//             job: "Janitor"
//           },
//           {
//             id: "abc123",
//             name: "Mac",
//             job: "Bouncer"
//           },
//           {
//             id: "ppp222",
//             name: "Mac",
//             job: "Professor"
//           },
//           {
//             id: "yat999",
//             name: "Dee",
//             job: "Aspring actress"
//           },
//           {
//             id: "zap555",
//             name: "Dennis",
//             job: "Bartender"
//           }
//     ]
//   };

//GET /users Test
app.get("/users", (req, res) => {
    //get users will return results in an array or an empty array.
    //valid query parameters are string:name, and string:job.
    let query = user_services.getUsers(req.query.name, req.query.job);
    query.then((result) => {
        //good response.
        return res.send({users_list: result});
    }).catch((err) => {
        //error response.
        console.log(err);
    });

    // //get entire list of users to later narrow down.
    // let result = users.users_list;
    // //if searching for a specific job.
    // if (req.query.job != undefined){
    //     result = result.filter((user) => user.job === req.query.job)
    // }
    // //if searching for a specific name
    // if (req.query.name != undefined){
    //     result = result.filter((user) => user.name === req.query.name)
    // }
    // //send back the user_list.
    // res.send({users_list: result});
});
// //Function for GET /users/:id endpoint.
// const findUserById = (id) => {
//     return users.users_list.find((user) => user.id === id);
// };

//GET /users/:id
app.get("/users/:id", (req, res) => {
    //Should only return one user or null if not found. since it is searching by id.
    let query = user_services.findUserById(req.params.id);
    query.then((result) => {
        //No ID matched.
        if (result == null) {
            return res.status(404).send("Resource not found.");
        } 
        //Two results mean duplicate IDs.
        else if (result.length > 1) {
            console.log("Duplicate IDs in users_list:" + result);
        }
        //Return Result.
        return res.send(result);
    }).catch((err) => {
        console.log(err);
    });

    // const id = req.params.id;
    // let result = findUserById(id);
    // if (result === undefined) {
    //     res.status(404).send("Resource not found.")
    // }
    // else{
    //     res.send(result);
    // }
});

// //Function for POST /users
// const addUser = (user) => {
//     users.users_list.push(user);
//     return user;
// };

//POST /users
app.post("/users", (req, res) => {
    //Adds a user in the form.
    /*{
        name: "Name",
        job: "Job"
    }*/
    console.log(req.body);
    let query = user_services.addUser(req.body);
    query.then((result) => {
        //successful.
        res.status(201).send(result);
    }).catch((err) => {
        //error.
        res.status(400).send("Bad Request: " + err);
    });

    // const userToAdd = req.body;
    // userToAdd.id = generateId();
    // addUser(userToAdd);
    // res.status(201).send(userToAdd);
});
// //generate a 6 digit random unique id for an added user.
// function generateId(){
//     do{
//         //generate id.
//         var id = "";
//         for (let i = 0; i < 6; i++){
//             //get one chaaracter to add to the id.
//             id+=((Math.floor(Math.random()*10)).toString());
//         }
//     //check for duplicate ids.
//     } while (users.users_list.filter((user) => id == user.id).length !== 0)
//     return id;
// }

//Function for DELETE /users/:id
const deleteUser = (id) => {
    return users.users_list = users.users_list.filter((user) => user.id !== id);
};

//DELETE /users/:id
app.delete("/users/:id", (req, res) => {
    //removes user with the given id. if id is not found returns null. if it's an invalid id throws BSONError error.
    let query = user_services.removeUser(req.params.id);
    query.then((result) => {
        if (result == null){
            return res.status(404).send("Resource not found");
        } else {
            return res.status(204).send()
        }
    }).catch((err) => {
        res.status(400).send("Bad Request: " + err);
    });
    // const length = users.users_list.length;
    // deleteUser(req.params.id);
    // if (length === users.users_list.length){
    //     res.status(404).send("Resource not found.")
    // } else {
    //     res.status(204).send();
    // }
});
