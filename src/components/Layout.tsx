import clsx from 'clsx';
import React from 'react';

export const Layout = ({ children, background }) => {
    return <section className={clsx('py-20', background)}>{children}</section>;
};
