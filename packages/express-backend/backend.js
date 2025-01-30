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
});

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
});

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
});

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
});
