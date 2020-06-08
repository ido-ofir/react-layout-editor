import React from 'react';

export default class Drop extends React.Component{
    onDragStart = (e) => {
        let { type, data } = this.props;
        e.dataTransfer.setData(type, JSON.stringify(data));
    };
    onDragOver = (e) => {
        e.preventDefault();
    };
    onDrop = (e) => {
        let { types, onDrop, type = 'react-drag' } = this.props;
        e.preventDefault();
        if(types){

        }
        else{
            let text = e.dataTransfer.getData(type);
            console.log(text)
            try{
                let data = JSON.parse(text);
                onDrop && onDrop(data);
            }
            catch(err){
                console.error(err);
            }
        }
    };
    render(){
        let { types, onDrop, ...props } = this.props;
        return (
            <div { ...props } onDragOver={ this.onDragOver } onDrop={ this.onDrop }></div>
        );
    }
}