const SingleAlbum = (props) => {
    return (
        <div className="music-card mx-2 text-white">
        <div className="media d-flex">
          <img
            src={props.src}
            className="mr-3 img-fluid img1"
            alt="cover"
          />
          <div className="media-body bodyHover d-flex align-self-center">
            <h6>{props.title}</h6>
          </div>
        </div>
      </div>
      )
}
export default SingleAlbum;