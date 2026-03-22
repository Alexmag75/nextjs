import {FC} from "react";

type Props ={
    params: {id: string};
}

const CommentsIdPage:FC<Props> = async ({params}) => {
   const {id}=await params;
    return (
        <div>
            Комментарии пользователя {id}
        </div>
    );
};

export default CommentsIdPage;
