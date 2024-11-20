import { useRoutes } from "react-router-dom";
import Feed from "../pages/Feed";
import BookMarks from "../pages/BookMarks";



export const BaseRoutes = () => {
    let element = useRoutes([
        {
            path: "/",
            element: <Feed />
        },
        {
            path: "/bookMarks",
            element: <BookMarks />
        },
    ]);

    return element;
}