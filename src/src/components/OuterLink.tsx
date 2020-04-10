import React from 'react';

type Props = {
    href: string
}

const OuterLink: React.FC<Props> = (props) => {
    return (<a href={props.href} target="_blank" rel="noreferrer noopener">{props.children}</a>);
}

export default OuterLink;