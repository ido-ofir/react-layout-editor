import React, { Component } from 'react';
import './switch.scss'
class Input extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value: props.value,
            isChecked: false
        };
    }

    componentDidMount() {
        const { type, value } = this.props;
        
    }

    onChange = (type, event) => {
        if (type === 'switch') {
            let isChecked = !this.state.isChecked;
            this.setState({ isChecked  })
            if (this.props.onChange) this.props.onChange(event, isChecked)

        } else {
            this.setState({ value: event.target.value })
            if (this.props.onChange) this.props.onChange(event, event.target.value)
        }
    }

    renderInput = type => {
        switch (type) {
            case 'select':
                return (
                    <select name={ this.props.name  } >
                        {
                            this.props.options.map((opt, idx) => <option key={ idx } value={ opt } >{ opt.toUpperCase()  }</option>)
                        }
                    </select>
                );
            
            case 'boolean':
                return (
                    <label className={ 'switch' }>
                        <input checked={ this.state.sisChecked } type={ 'checkbox' } onChange={ e => { this.onChange('switch', e) } } />
                        <span className={ 'slider' }></span>
                    </label>
                ) 

            default:
                return (
                    <input
                        type={type}
                        name={ this.props.name }
                        onChange={ e => { this.onChange('input', e) }}
                        value={this.state.value} />
                )
        }
    }

    render() {
        let { type, style, name, label, description } = this.props;
        return (
            <div style={ styles.root }>
                <label for={ name }>{ label }</label>
                {
                    this.renderInput(type)
                }
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
const styles = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: 'max-content',
        height: 'auto',
    },
    descrpition: {
        margin: 0
    }
}
export default Input