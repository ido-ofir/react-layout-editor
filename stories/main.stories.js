import React from 'react';
import { ReactLayoutEditor } from '../source';
// import ReactLayoutEditor from '../source';
import Drop from '../source/Drop.jsx';

export default { title: 'ReactEditor' };

let style = { border: '1px solid #ddd', padding: 10}
let A = ({ children, testA }) => <div style={ style }><Drop onDrop={ console.log }><p>A { testA || '1' }</p></Drop>{ children }</div>
let B = ({ children, testB }) => <div style={ style }><Drop onDrop={ console.log }><p>B { testB || '1' }</p></Drop>{ children }</div>
let components = {A, B};

let String = ({ children, value, onChange, label }) => <div style={ style }>{label}<input value={value} onChange={e => onChange(e.target.value)}/></div>
let Boolean = ({ children, value, onChange, label }) => <div style={ style }>{label}<input type="checkbox" value={value} onChange={e => onChange(e.target.checked)}/></div>
let inputs = {String, Boolean};
class EditorStory extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: {
                id: '1',
                type: 'A',
                children: [
                    {
                        id: '2',
                        type: 'B',
                        children: [
                            {
                                id: '3',
                                type: 'B'
                            }
                        ]
                    }
                ]
            },
            widgets: [
                {
                    label: 'A'
                },
                {
                    label: 'B'
                }
            ],
            schemas: {
                'A': [
                    {
                        key: 'testA',
                        label: 'testA',
                        type: 'String'
                    }
                ],
                'B': [
                    {
                        key: 'testB',
                        label: 'testB',
                        type: 'Boolean'
                    }
                ]
            }
        };
    }
    render(){
        let { value, widgets, schemas } = this.state;
        return (
            <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
                <ReactLayoutEditor 
                    value={ value } 
                    components={ components } 
                    widgets={widgets}
                    inputs={inputs}
                    schemas={schemas}
                    onChange={value => this.setState({value})}
                />
            </div>
        );
    }
}

export const editor = () => <EditorStory/>;