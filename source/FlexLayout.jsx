import React from 'react';

export default class FlexLayout extends React.Component{
    render(){
        let { types, onDrop, ...props } = this.props;
        return (
            <div { ...props } onDragOver={ this.onDragOver } onDrop={ this.onDrop }></div>
        );
    }
}