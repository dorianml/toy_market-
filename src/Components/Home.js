import NavBar from "./Navbar"
import SearchBar from "./SearchBar"
import List from "./List"

const Home = () => {

const handleChangeTab = () => {

}

    return (
        <div className="Home">
            <NavBar/>
            <SearchBar handleChange={handleChangeTab} />
            <List/>
        </div>
    )
}

export default Home