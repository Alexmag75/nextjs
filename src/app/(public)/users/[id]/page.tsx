import {FC} from "react";

type Props= {
    params: { id:string }
}

const UsersIdPage:FC<Props> = async ({params}) => {
    const {id} = await params;
    return (
        <div>
            Пользоватеь {id}
        </div>
    );
};

export default UsersIdPage;
