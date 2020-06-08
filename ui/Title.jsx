import React from 'react';

export default class Title extends React.Component {
    constructor(props) {
        super(props);


    }

    render() {
        const { children, ...props } = this.props;

        return (
            <h1 {...props}>
                {children}
            </h1>
        )
    }
}