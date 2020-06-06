import React, { Component } from 'react';

class Input extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value: undefined
        };
    }

    onChange = e => {
        this.setState({ value: e.target.value })

    }

    render() {
        let { type, style, value, onChange, label, description } = this.props;
        return (
            <div style={{ height: '100%', width: '100%', position: 'relative', ...style }}>
                <h4>{ label }</h4>
                <input 
                    type={ type } 
                    onChange={ onChange }
                    value={ value } />
                <p>
                    {description}
                </p>
            </div>
        );
    }
}

Input.defaultProps = {
    type: 'text',
    value: undefined,
    onChange: e => { console.log('e.target ->', e.target) },
    label: 'Input Label',
    description: 'Input description'
}

export default Input