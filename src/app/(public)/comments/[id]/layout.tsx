import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'CommentsIdLayout metadata'
}
type Props = { children: React.ReactNode }
const CommentsIdLayout = ({children}: Props) => {
    return (
        <>
            {children}
        </>
    );
};

export default CommentsIdLayout;