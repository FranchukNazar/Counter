import React, { Component } from 'react';
import { Button as SemanticButton } from 'semantic-ui-react';


export default class Button extends Component {
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick () {
        this.props.onClick(this.props.name.toLowerCase());
    }
    render() {
        return (
            <SemanticButton onClick={this.handleClick} inverted color={this.props.color} size='massive'>
                {this.props.name}
            </SemanticButton>
        );
    }
};

