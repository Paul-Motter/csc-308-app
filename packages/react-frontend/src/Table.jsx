// src/Table.jsx
import React from "react";

function TabelHeader(){
    return(
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>ID</th>
            </tr>
        </thead>
    );
}

function TableBody(props){
    //map tha name and jobs to a row with two collumns.
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>{row._id}</td>
                <td>
                    <button onClick={() => props.removeCharacter(index)}>
                        x
                    </button>
                </td>
            </tr>
        );
    });
    //return a table body with the rows and columnms inserted.
    return(
      <tbody>
        {rows}
      </tbody>
    )
}

function Table(props){
    return (
        <table>
            <TabelHeader/>
            <TableBody 
                characterData={props.characterData}
                removeCharacter={props.removeCharacter}
            /> {/*pass characterData and removeCharacter function to the table body*/}
        </table>
    );
}

export default Table;