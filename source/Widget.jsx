import React from 'react';
import ReactDom from 'react-dom';

class DropZone extends React.PureComponent{
    componentDidMount(){
        let {editor, pathKey} = this.props;
        editor.bind(pathKey, this.update);
    }
    componentWillUnmount(){
        let {editor, pathKey} = this.props;
        editor.unbind(pathKey);
    }
    update = () => {
        this.forceUpdate();
    };
    render(){
        let {editor, pathKey} = this.props;
        let isHovered = editor.hovered === pathKey;
        let isSelected = editor.selected === pathKey;
        return (
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, border: isSelected ? '2px solid #2a2' : isHovered ? '2px solid #22a' : 0, pointerEvents: 'none'}}>

            </div>
        );
    }
}

export default class Widget extends React.PureComponent{
    constructor(props){
        super(props);
        this.portal = document.createElement('div');
        this.path = (props.path || []).concat(props.value.id);
        this.key = this.path.join('/');
    }
    componentDidMount(){
        let el = ReactDom.findDOMNode(this);
        let position = getComputedStyle(el).position;
        if(position === 'static'){
            el.style.position = 'relative';
        }
        el.appendChild(this.portal);
        el.addEventListener('mouseenter', this.onMouseEnter, false);
        el.addEventListener('mouseleave', this.onMouseLeave, false);
        el.addEventListener('dragover', this.onDragOver, false);
        el.addEventListener('click', this.onClick, false);
        this.el = el;
    }
    componentWillUnmount(){
        this.el.removeEventListener('mouseenter', this.onMouseEnter, false);
        this.el.removeEventListener('mouseleave', this.onMouseLeave, false);
        this.el.removeEventListener('click', this.onClick, false);
    }
    onMouseEnter = (e) => {
        let { editor } = this.props;
        editor.onHover(this.key);
    };
    onMouseLeave = (e) => {
        let { editor, path } = this.props;
        editor.onHover((path || []).join('/'));
    };
    onDragOver = (e) => {
        let { editor } = this.props;
        e.preventDefault();
        e.stopPropagation();
        editor.onHover(this.key);
    };
    onClick = (e) => {
        let { editor, value } = this.props;
        e.stopPropagation();
        editor.onSelect(this.key, value);
    };
    // onChildChange = (newChild, oldChild) => {
    //     let { value, onChange } = this.props;
    //     let newChildren = (value.children || []).map(c => c === oldChild ? newChild : c);
    //     this.onChildrenChange(newChildren);
    // };
    // onChildrenChange = (newChildren) => {
    //     let { value, onChange } = this.props;
    //     onChange({ ...value, children: newChildren });
    // };
    // onPropsChange = (newProps) => {
    //     let { value, onChange } = this.props;
    //     onChange({ ...value, props: newProps });
    // };
    render(){
        let { value, components, editors, editor, path } = this.props;
        let Component = components[value.type];
        let children = (value.children || []).map(child => 
            <Widget 
                key={ child.id }
                value={ child } 
                components={ components } 
                editors={ editors }
                editor={ editor }
                path={ this.path }
                onChange={ newChild => this.onChildChange(newChild, child) }
            />
        )
        
        return (
            <>
                <Component { ...value.props }>
                    {children}
                </Component>
                {
                    ReactDom.createPortal(
                        <DropZone
                            pathKey={this.key}
                            editor={ editor }
                        />,
                        this.portal
                    )
                }
            </>
            
        );
    }
}