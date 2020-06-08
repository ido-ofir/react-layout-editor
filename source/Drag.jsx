import React from 'react';

export default class Drag extends React.Component{
    onDragStart = (e) => {
        let { type = 'react-drag', data } = this.props;
        e.dataTransfer.setData(type, JSON.stringify(data));
    };
    render(){
        let { type, data, ...props } = this.props;
        return (
            <div { ...props } draggable onDragStart={ this.onDragStart }></div>
        );
    }
}