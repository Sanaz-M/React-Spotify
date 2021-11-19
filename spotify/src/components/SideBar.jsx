import { Link } from 'react-router-dom'

const SideBar = () => (

    <div id="navbar" className="w-25">
        <div className="menu-nav">
            <div id="logo">
                <img src='assets/Spotify.png' width="135px" height="40px" alt="Spotify logo" />
            </div>
            <div className="links-nav">
                <Link to="/">
                    <img src="assets/home.png" width="20px" height="20px" alt="..." />
                    <p>Home</p>
                </Link>
            </div>
            <div className="links-nav">
                <Link to="/Search">
                    <img src="assets/search.png" width="22px" height="24px" alt="..." />
                    <p>Search</p>
                </Link>
            </div>
            <div id="yourLibrary" className="links-nav">
                <Link to="/album">
                    <img src="assets/library.png" width="22px" height="22px" alt="..." />
                    <p>Your Library</p>
                </Link>
            </div>
            <div className="links-nav">
                <Link to="/playlist">
                    <img src="assets/creat-playlist.png" width="22px" height="22px" alt="..." />
                    <p>Create Playlist</p>
                    </Link>
            </div>
            <div className="links-nav mb-2">
                <Link to="/artist">
                    <img src="assets/liked-song.png" width="24px" height="24px" alt="..." />
                    <p>Liked Songs</p>
                    </Link>
            </div>
        </div>
        <div><hr /></div>


        <div id="scrollbar1" className="scrollbar sidebar-bottom scrollbar-black bordered-black square">
            <div className="links-small-nav">
                <Link to="#">Funky Heavy bluesy</Link>
            </div>
            <div className="links-small-nav">
                <Link to="#">Funky Heavy bluesy</Link>
            </div>
        </div>
        <div id="installApp-sticky">
            <i className="fas fa-arrow-alt-circle-down mr-2"></i><span>Install App</span>
        </div>
    </div>
)

export default SideBar