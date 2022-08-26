import React from 'react'

import { createRoot } from "react-dom/client";

class Test extends React.Component {
    render() {
        var list = window.props;
        return (
            <>
                <h1>other</h1>
                <div>{list.map(item => <TestChild key={item.pk}  
                    question={item.question_text}/> )}
                </div>
            </>
        )
    }
}

class TestChild extends React.Component {
    render() {
     return <li><b>{this.props.question}</b></li>;
    }
}


const rootElement = document.getElementById("react");
const root = createRoot(rootElement);

root.render(
    <Test/>
);
