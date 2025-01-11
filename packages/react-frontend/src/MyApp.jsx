// src/MyApp.jsx
import React, {useState} from "react";
import Table from "./Table";
import Form from "./Form";

//create the data
// const characters = [
    
// ];

function MyApp(){
    const [characters, setCharacters] = useState([]);

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

    //finds the character at the index and removes it from the list of characters and then setCharacters to the updated list.
    function removeOneCharacter(index) {
        const updated = characters.filter((character, i) => {
            return i !== index;
        });
        setCharacters(updated);
    }

    //
    function updateList(person){
        setCharacters([...characters, person]);
    }
}

export default MyApp;