import React from './node_modules/react';
import './TypeGrid.css';

import TypeGridRow from './TypeGridRow';


class TypeGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {x: 0, y: 0};
  }

    componentDidMount(){
      document.addEventListener('mousemove', e => {
        this.setState({ 
          x: e.clientX,
          y: e.clientY})
        })
    }
  
    render() {
        return (
          <div>
            <TypeGridRow mouseX={this.state.x} mouseY={this.state.y} name="NoahSokoloff"/>
            
          </div>
        );
      }
  }


export default TypeGrid