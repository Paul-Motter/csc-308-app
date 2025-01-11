// src/MyApp.jsx
import React, {useState} from "react";
import Table from "./Table";

//create the data
// const characters = [
    
// ];

function MyApp(){
    const [characters, setCharacters] = useState([
        {
            name: "Charlie",
            job: "Janitor"
        },{
            name: "Mac",
            job: "Bouncer"
        },{
            name: "Dee",
            job: "Aspiring Actress"
        },{
            name: "Dennis",
            job: "Bartender"
        }
    ]);

    return (
        <div> 
            <h1>Hello, React!</h1> 
            <Table 
                characterData={characters}
                removeCharacter={removeOneCharacter}
            /> {/*pass characters data to the table functions.*/}
        </div>
    );

    //finds the character at the index and removes it from the list of characters and then setCharacters to the updated list.
    function removeOneCharacter(index) {
        const updated = characters.filter((character, i) => {
            return i !== index;
        });
        setCharacters(updated);
    }
}

export default MyApp;