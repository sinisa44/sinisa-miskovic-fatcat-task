import clsx from 'clsx';
import React from 'react';

type LayoutProps = {
    background?: string;
    children: React.ReactNode;
}
export const Layout: React.FC<LayoutProps> = ({ children, background }) => {
    return <section className={clsx('py-20', background)}>{children}</section>;
};
