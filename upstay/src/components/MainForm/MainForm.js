import React from 'react';
import './MainForm.css'
const MainForm = ({title, inputs}) => {

    function handleSubmit(event) {
        event.preventDefault();
        alert(`You submitted the form`);
    }

    function renderTypeOfCell(el) {
        if (el.type === "text") {
            return <input pattern="[a-zA-Z]+" key={el.index} name="firstName" placeholder="First Name"/>
        }
        if (el.type === "number") {
            return <input key={el.index} type="number" name="age" placeholder="Age"/>
        }
        if (el.type === "radio") {
            return <div key={el.index}>
                <input
                    type="radio"
                    value="man"
                />
                Man
                <input
                    type="radio"
                    value="female"
                />
                Female
                <input
                    type="radio"
                    value="u/n"
                />
                U/N
            </div>
        }
    }

    return (
        <div>
            <h1>{title}</h1>
            <form>
                {
                    inputs.map((el) =>
                        <div className="cell">
                            {renderTypeOfCell(el)}
                        </div>
                    )
                }
                <button onClick={handleSubmit}>submit</button>
            </form>
        </div>
    );
};

export default MainForm;