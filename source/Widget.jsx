import React from 'react';

export default class Widget extends React.PureComponent{
    onChildChange = (newChild, oldChild) => {
        let { value, onChange } = this.props;
        let newChildren = (value.children || []).map(c => c === oldChild ? newChild : c);
        this.onChildrenChange(newChildren);
    };
    onChildrenChange = (newChildren) => {
        let { value, onChange } = this.props;
        onChange({ ...value, children: newChildren });
    };
    onPropsChange = (newProps) => {
        let { value, onChange } = this.props;
        onChange({ ...value, props: newProps });
    };
    render(){
        let { value, components, editors } = this.props;
        let Component = components[value.type];
        let children = (value.children || []).map(child => 
            <Widget 
                value={ child } 
                components={ components } 
                editors={ editors } 
                onChange={ newChild => this.onChildChange(newChild, child) }
            />
        )
        return (
            <Component { ...value.props }>
                {children}
            </Component>
        );
    }
}