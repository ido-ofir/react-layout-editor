import React from 'react';

export default class Image extends React.Component {
    constructor(props) {
        super(props);


    }

    render() {
        const { children, ...props } = this.props;

        return (
            <p {...props}>
                {children}
            </p>
        )
    }
}