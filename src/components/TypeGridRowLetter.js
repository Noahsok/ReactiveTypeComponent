import React from './node_modules/react';

import './TypeGrid.css';

class TypeGridRowLetter extends React.Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef()
        this.state = { 
            scale: undefined,
            fontWeight: undefined
        }
    }
    componentWillUpdate() {
        const dx = (this.ref.current.offsetLeft + 50) - this.props.mouseX
        const dy = (this.ref.current.offsetTop + 50) - this.props.mouseY
        const dist = Math.sqrt(dx * dx + dy * dy)

        const scale = Math.exp(dist * -0.003)
        const fontWeight = 100 + (100 * Math.floor(8 * scale))

        if (scale !== this.state.scale || fontWeight !== this.state.fontWeight) {
            this.setState( { 
                scale,
                fontWeight,
            });  
        }

        console.log(this.state)
        // debugger
    }

    render() {
        const style={
            transform: `scale(${this.state.scale})`,
            fontWeight: `${this.state.fontWeight}` 
        }
        return(
            <div ref={this.ref} style={style}>
                {/* this.props.mouseX or mouseY shows the coordinates removing the code shows TypeGridRow letters  */}
                {/* {this.props.mouseX} {this.props.mouseY}  */}
                {this.props.children}
            </div>
        );
    }
}

export default TypeGridRowLetter