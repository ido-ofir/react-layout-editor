import React from 'react';
import { Input } from '../source';
import { action, actions } from '@storybook/addon-actions';
import { withKnobs, text, select } from "@storybook/addon-knobs";

export default { 
    title: 'Inputs', 
    component: Input,
    decorators: [withKnobs] 
};


export const input = () => <Input />;

export const WithAction = () => {

    const getSelect = () => {
        const options = [
            'Select',
            'Boolean',
            'String',
            'Number'
        ]
        return select('Input Type', options, 'String');
    }
    
    // let {  onChange, label, description } = this.props;
    return (
        <Input 
            label={ text('Label', 'Input Label') }
            isChecked={ text('Label', 'Input Label') }
            name={ text('Name', 'Input Name') }
            onChange={ action('onChange') }
            description={ text('Description', 'Input description') }
            value={ text('Value', 'Change Me') } 
            options={[
                'Handle',
                'With',
                'Care',
            ]}
            type={ getSelect() }/>
    );  
}
