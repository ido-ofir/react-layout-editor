import React from 'react';

class WidgetRenderer extends React.PureComponent{
    render(){
        let { value, components } = this.props;
        let Component = components[value.type];
        let children = (value.children || []).map(child => <WidgetRenderer value={ child } components={ components }/>)
        return (
            <Component { ...value.props }>
                {children}
            </Component>
        );
    }
}

export default class ReactLayoutRenderer extends React.Component{
    render(){
        let { value, components, style } = this.props;
        return (
            <div style={{ height: '100%', width: '100%', position: 'relative', ...style }}>
                <WidgetRenderer value={ value } components={ components }/>
            </div>
        );
    }
}