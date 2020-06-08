import React from 'react';
import { 
    Button,
    Divider,
    Image,
    Paragraph,
    Title
 } from 'ui';

export default {
    title: 'UI',
    decorators: [
        story => <div style={{height: '100%', padding: '50px 0', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{story()}</div>
    ]
};
export const button = () => <Button variant='outlined'>Hello</Button>;
export const divider = () => <Divider style={{ width: '100%' }}/>;
export const image = () => <Image value='hello' />;
export const paragraph = () => <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Paragraph>;
export const title = () => <Title>Title</Title>;