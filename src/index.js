import React from "react";
import ReactDOM from "react-dom";

function getButtonText(){
    return 'Hi There!';
}

const App = () => {
    // const ButtonText = 'click me!';
        return ( 
        // <div> Hi There!</div>
        <div>
            <label htmlFor="name" className="label">Enter email</label>
            <input id="name" type="text" />
            <button style={{backgroundColor:'red', color:'white'}}>{getButtonText()}</button>
        </div>
        )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)