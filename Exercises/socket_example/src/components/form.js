import React from "react";


class Form extends React.Component{
    render() {
        return (
            <div>
                <input placeholder="Username"/>
                <textarea placeholder="Message"></textarea>
                <button>Send</button>
            </div>
        );
    }

}

export default Form;