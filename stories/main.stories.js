import React from 'react';
import { ReactLayoutEditor } from '../source';

export default { title: 'ReactEditor' };

let style = { border: '1px solid #ddd', padding: 10}
let A = ({ children }) => <div style={ style }><p>A</p>{ children }</div>
let B = ({ children }) => <div style={ style }><p>B</p>{ children }</div>
let components = {A, B};

class EditorStory extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: {
                type: 'A',
                children: [
                    {
                        type: 'B',
                        children: [
                            {
                                type: 'B'
                            }
                        ]
                    }
                ]
            }
        };
    }
    render(){
        let { value } = this.state;
        return (
            <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
                <ReactLayoutEditor value={ value } components={ components } onChange={ value => this.setState(value) }/>
            </div>
        );
    }
}

export const editor = () => <EditorStory/>;