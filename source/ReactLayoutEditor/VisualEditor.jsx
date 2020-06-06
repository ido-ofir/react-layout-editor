import React from 'react';
import Widget from './Widget.jsx';

export default class VisualEditor extends React.PureComponent{
    set = (path, value) => {
        
    };
    render(){
        let { value, onChange, components, editors, style } = this.props;
        return (
            <div style={{ height: '100%', width: '100%', position: 'relative', ...style }}>
                <Widget value={ value } onChange={ onChange } components={ components } editors={ editors }/>
            </div>
        );
    }
}