import React from 'react';
import Widget from './Widget.jsx';

export default class VisualEditor extends React.PureComponent{
    constructor(props){
        super(props);
        this.listeners = {};
        this.hovered = null;
        this.selected = null;
    }
    componentDidMount(){
        this.el.addEventListener('dragleave', this.onDragLeave, false);
    }
    componentWillUnmount(){
        this.el.removeEventListener('dragleave', this.onDragLeave, false);
    }
    onDragLeave = (e) => {
        if(!this.el.contains(e.relatedTarget)){
            this.onHover();
        }
    };
    onHover = (key) => {
        if(this.hovered === key){ return; }
        let a = this.listeners[this.hovered];
        let b = this.listeners[key];
        this.hovered = key;
        a && a();
        b && b();
    };
    onSelect = (key, value) => {
        if(this.selected === key){ return; }
        let a = this.listeners[this.selected];
        let b = this.listeners[key];
        let onSelect = this.props.onSelect;
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
            <div ref={ el => this.el = el } style={{ height: '100%', width: '100%', position: 'relative', ...style }}>
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