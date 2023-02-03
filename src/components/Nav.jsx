import SearchBar from "./SearchBar";
import {Link} from "react-router-dom";

const Nav = ({onSearch}) =>{
    return(
        <nav>
            <Link to="/">Logout</Link>
            <Link to="home">Home</Link>
            <Link to="about">About</Link>
            <SearchBar onSearch={onSearch}/>
        </nav>
    )
}

export default Nav;
