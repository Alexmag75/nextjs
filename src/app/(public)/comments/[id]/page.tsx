import {FC} from "react";

type Props ={
    params: {id: string};
}

const CommentsIdPage:FC<Props> = async ({params}) => {
   const {id}=await params;
    return (
        <div>
            Comments {id}
        </div>
    );
};

export default CommentsIdPage;
