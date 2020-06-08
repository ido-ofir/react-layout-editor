import React from 'react';
import Drag from './Drag.jsx';

export default class AddWidgetPanel extends React.PureComponent{
    render(){
        let { widgets = [], style } = this.props;
        return (
            <div 
                style={{ 
                    height: '100%',
                    width: '100%',
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'space-around',
                    padding: '10px 0',
                    ...style
                }}>
                {
                    widgets.map((item, i) => {
                        return (
                            <Drag 
                                data={item}
                                key={i} 
                                style={{ 
                                    width: 40,
                                    height: 40,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: '1px solid #ddd'
                                    }}>
                                { item.label }
                            </Drag>
                        );
                    })
                }
            </div>
        );
    }
}