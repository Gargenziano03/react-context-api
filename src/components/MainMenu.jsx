import { Link, NavLink } from "react-router-dom";
export default function MainMenu() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <NavLink to="/ChiSiamo">Info</NavLink>
            <NavLink to="/ListPost">List</NavLink>
        </nav>
    )
}