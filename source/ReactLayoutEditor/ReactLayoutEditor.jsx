import React from 'react';
import VisualEditor from './VisualEditor.jsx';

export default class ReactLayoutEditor extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {
            value: []
        };
    }
    render(){
        let { style, value, onChange, components } = this.props;
        return (
            <div style={{ height: '100%', width: '100%', position: 'relative', ...style }}>
                <VisualEditor value={ value } onChange={ onChange } components={ components }/>
            </div>
        );
    }
}