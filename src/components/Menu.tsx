import Link from "next/link";
export const Menu = () => {
    return (
        <>
            <ul>
                <li>
                    <Link href="/">home</Link>
                </li>

                <li>
                    <Link href="/cars" >cars</Link >
                </li>

                <li>
                    <Link href="/create">create cars</Link>
                </li>

            </ul>
            <hr/>
        </>
    );
};