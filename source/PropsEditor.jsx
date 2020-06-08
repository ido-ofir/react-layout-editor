import React from 'react';

export default class PropsEditor extends React.PureComponent{
    render(){
        let { value, onChange, inputs, schema, style } = this.props;
        if(!schema){
            schema = [];
        }
        return (
            <div style={{ height: '100%', width: '100%', position: 'relative', ...style }}>
                {
                    schema.map(item => {
                        let Input = inputs[item.type];
                        if(Input){
                            return (
                                <Input 
                                    onChange={ v => onChange({ ...value, [item.key]: v }) }
                                    value={ value[item.key] }
                                    label={ item.label }
                                    description={ item.description }/>
                            );
                        }
                        return <div>111</div>;
                    })
                }
            </div>
        );
    }
}