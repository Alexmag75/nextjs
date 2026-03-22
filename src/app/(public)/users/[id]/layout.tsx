import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'UsersIdLayout metadata'
}
type Props = { children: React.ReactNode }
const UsersIdLayout = ({children}: Props) => {
    return (
        <>
            {children}
        </>
    );
};

export default UsersIdLayout;