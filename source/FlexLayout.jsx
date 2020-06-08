import React from 'react';

class FlexLayoutItem extends React.Component{
    render(){
        let { style, ...props } = this.props;
        return (
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                ...style
            }} { ...props }></div>
        );
    }
}

export default class FlexLayout extends React.Component{
    render(){
        let { style, ...props } = this.props;
        return (
            <div style={{

            }} { ...props }></div>
        );
    }
}