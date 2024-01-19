type FilmPosterProps = {
  name : string;
  imgSrc : string;
  link : string;
}

export default function FilmPoster(props : FilmPosterProps){
  return(
    <>
      <div className="small-film-card__image">
        <img src={props.imgSrc}
          alt={props.name} width="280" height="175"
        />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href={props.link}>{props.name}</a>
      </h3>
    </>
  );
}
