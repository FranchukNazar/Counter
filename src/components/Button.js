import React, { Component } from 'react';
import { Button as SemanticButton } from 'semantic-ui-react';


export default class Button extends Component {
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick () {
        const { handleClick, name} = this.props;
        handleClick(name.toLowerCase());
    }
    render() {
        const {color, name} = this.props;
        return (
            <SemanticButton onClick={this.handleClick} inverted color={color} size='massive'>
                {name}
            </SemanticButton>
        );
    }
};

