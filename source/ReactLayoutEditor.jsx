import React from 'react';
import VisualEditor from './VisualEditor.jsx';
import PropsEditor from './PropsEditor.jsx';
import AddWidgetPanel from './AddWidgetPanel.jsx';
import utils from './utils.js';

export default class ReactLayoutEditor extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {
            selectedKey: null,
            selectedItem: null,
            selectedSchema: null
        };
    }
    onSelectComponent = (key, item) => {
        let { components, schemas = {} } = this.props;
        let schema = schemas[item.type] || components[item.type]?.schema;
        this.setState({
            selectedKey: key,
            selectedItem: item,
            selectedSchema: schema || null,
        });
    };
    setProps = (props) => {
        let { selectedKey } = this.state;
        let { value, onChange } = this.props;
        let path = selectedKey.split('/');
        let fullPath = [];
        path.map((id, i) => {
            if(i > 0){
                fullPath.push({id});
            }
            if(i < path.length - 1){
                fullPath.push('children');
            }
        });
        fullPath.push('props');
        let newValue = utils.set(value, fullPath, props);
        onChange && onChange(newValue);
    };
    render(){
        let { style, value, onChange, components, schemas, widgets, inputs } = this.props;
        let { selectedSchema, selectedItem } = this.state;
        return (
            <div style={{ height: '100%', width: '100%', position: 'relative', display: 'flex', ...style }}>
                <div style={{ width: 200, borderRight: '1px solid #ddd' }}>
                    <AddWidgetPanel widgets={ widgets }/>
                </div>
                <VisualEditor
                    ref={ el => this.visualEditor = el }
                    value={ value } 
                    onChange={ onChange } 
                    components={ components }
                    onSelect={ this.onSelectComponent }
                />
                <div style={{ width: 200, borderLeft: '1px solid #ddd' }}>
                    <PropsEditor
                        schema={ selectedSchema }
                        value={ selectedItem?.props || {} }
                        onChange={ this.setProps }
                        inputs={ inputs }
                    />
                </div>
            </div>
        );
    }
}