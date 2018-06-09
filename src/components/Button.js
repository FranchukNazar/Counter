import React, { Component } from 'react';
import { Button as SemanticButton } from 'semantic-ui-react';


export default class Button extends Component {
    render() {
        return (
            <SemanticButton inverted color={this.props.color}>
                {this.props.name}
            </SemanticButton>
        );
    }
};
