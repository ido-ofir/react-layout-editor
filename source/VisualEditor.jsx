import React from 'react';
import Widget from './Widget.jsx';

export default class VisualEditor extends React.PureComponent{
    constructor(props){
        super(props);
        this.listeners = {};
        this.hovered = null;
        this.selected = null;
        top.editor = this;
    }
    set = (path, value) => {
        
    };
    onHover = (key) => {
        let a ,b = this.listeners[key];
        if(this.hovered){
            if(this.hovered === key){
                return;
            }
            a = this.listeners[this.hovered];
        }
        this.hovered = key;
        a && a();
        b && b();
    };
    onSelect = (key, value) => {
        let a ,b = this.listeners[key];
        let onSelect = this.props.onSelect;
        if(this.selected){
            if(this.selected === key){
                return;
            }
            a = this.listeners[this.selected];
        }
        this.selected = key;
        a && a();
        b && b();
        onSelect && onSelect(key, value);
    };
    bind = (key, cb) => {
        this.listeners[key] = cb;
    };
    unbind = (key) => {
        delete this.listeners[key];
    };
    render(){
        let { value, onChange, components, editors, style } = this.props;
        return (
            <div style={{ height: '100%', width: '100%', position: 'relative', ...style }}>
                <Widget 
                    value={ value } 
                    onChange={ onChange } 
                    components={ components } 
                    editors={ editors }
                    editor={this}
                />
            </div>
        );
    }
}