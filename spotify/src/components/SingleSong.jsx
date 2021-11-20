import { useState } from "react"
import { Link } from "react-router-dom"


const SingleSong = ({song}) => {
    return (
        <>
   
        <Link to="/album/:songID">
       <div className="music-card mx-2 text-white"  id="cardHover">
        <div className="media d-flex">
          <img
            src={song.cover_medium}
            className="mr-3 img-fluid img1"
            alt="..."
          />
          <div className="media-body bodyHover d-flex align-self-center">
            {/* <h6>{song.title}</h6> */}
          </div>
        </div>
      </div>
    </Link>
    </>
    )
}

export default SingleSong