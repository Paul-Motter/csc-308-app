// src/MyApp.jsx
import React, {useState, useEffect} from "react";
import Table from "./Table";
import Form from "./Form";

//create the data
// const characters = [
    
// ];

function MyApp(){

    //useState hook used to dynamically change characters by using setCharacters
    const [characters, setCharacters] = useState([]);

    //useEffect hook used to initially populate the field from backend.
    useEffect( () => {
        fetchUsers()
            .then((res) => res.json())
            .then((json) => setCharacters(json["users_list"]))
            .catch((error) => {console.log(error);});
    }, [] //second argument is an empty erray that indicates the effect hook to run when MyApp first mounts.
    );

    return (
        <div> 
            <h1>Hello, React!</h1> 
            <Table 
                characterData={characters}
                removeCharacter={removeOneCharacter}
            /> {/*pass characters data to the table functions.*/}
            <Form 
                handleSubmit={updateList}
            />
        </div>
    );

    //uses useState with seCharacters.
    //finds the character at the index and removes it from the list of characters and then setCharacters to the updated list.
    function removeOneCharacter(index) {
        const characterToRemove = characters[index];
        //call endpoint.
        deleteUser(characterToRemove.id)
            .then((res) => {
                //if user not found.
                if (res.status === 404) {
                    throw new Error(res.body)}
                //if user found and deleted on backend
                else if(res.status === 204){
                    setCharacters(characters.filter((character, i) => {
                        return i !== index;
                    }));
                //any unexpected response.
                } else {
                    throw new Error(`Improper Status code. ${res.status}: ${res.body}`)
                }
            })
            .catch((error) => console.log(error));
    }
    //upadtes the list with another character/person.
    function updateList(person){
        postUser(person)
            .then((res) => {
                if (res.status === 201) return res.json();
                else {
                    throw new Error(`Improper Status code. ${res.status}: ${res.body}`)
                }
            })
            .then((json) => setCharacters([...characters, json]))
            .catch((error) => console.log(error));
    }

    function fetchUsers() {
        const promise = fetch("http://localhost:8000/users");
        return promise;
    }

    function postUser(person) {
        const promise = fetch("Http://localhost:8000/users", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(person),
        });
        return promise;
    }

    function deleteUser(id) {
        const promise = fetch(`Http://localhost:8000/users/${id}` , {
            method: "DELETE"
        })
        return promise;
    }
}

export default MyApp;