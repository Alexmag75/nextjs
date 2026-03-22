import {FC} from "react";

type Props ={
    params: {id: string};
}
const PostsIdPage:FC<Props> = async ({params}) =>{
    const {id}=await params;
    return (
        <div>
            Posts {id}
        </div>
    );
};

export default PostsIdPage;
