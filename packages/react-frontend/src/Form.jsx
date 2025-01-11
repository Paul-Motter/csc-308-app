// src/Form.jsx
import React, {useState} from "react";

function Form(props){
    //data that can be changed by form.
    const [person, setPerson] = useState({
        name: "",
        job: ""
    });
    //function for changing data in Form by changing person through setPerson.
    function handleChange(event) {
        const{name, value} = event.target;
        if (name === "job")
            setPerson({
                name: person["name"],
                job: value
            });
        else 
            setPerson({
                name: value,
                job: person["job"]
            });
    }
    //submitting changes my calling function in parent.
    function submitForm(){
        props.handleSubmit(person);
        setPerson({
            name: "",
            job: ""
        });
    };
    //The actuall element to return.
    return (
        <form>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                name="name"
                id="name"
                value={person.name}
                onChange={handleChange}
            />
            <label htmlFor="job">Job</label>
            <input
                type="text"
                name="job"
                id="job"
                value={person.job}
                onChange={handleChange}
            />
            <input
                type="button"
                value="Submit"
                onClick={submitForm}
            />
        </form>
    );

}
export default Form;

