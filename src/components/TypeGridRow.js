import React from './node_modules/react';

import './TypeGrid.css';
import TypeGridRowLetter from './TypeGridRowLetter';


class TypeGridRow extends React.Component {
    
    render() {
        return (
            <div className="App">
                <section className="App-section">
                    {createRows(this.props.name, this.props)}
                </section>
            </div>
        )
    }
}

export default TypeGridRow

function createRowLetter(letter, props) {
    return(
        <div>
    <TypeGridRowLetter mouseX={props.mouseX} mouseY={props.mouseY}>
        {letter}
    </TypeGridRowLetter>
    </div>
    )
}

function createRows(str,props) {
    let chars = str.split('');
    return chars.map(c => createRowLetter(c, props));
}

