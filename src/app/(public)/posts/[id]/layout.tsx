import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'PostsIdLayout metadata'
}
type Props = { children: React.ReactNode }
const PostsIdLayout = ({children}: Props) => {
    return (
        <>
            {children}
        </>
    );
};

export default PostsIdLayout;