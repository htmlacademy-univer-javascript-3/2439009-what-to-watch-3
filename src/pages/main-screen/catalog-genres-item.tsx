import {store} from '../../store';
import {changeGenre, loadFilms} from '../../store/action.ts';

export type CatalogGenresItemProps = {
  isActive : boolean;
  value : string;
  onclick : () => void;
}

export function CatalogGenresItem(props : CatalogGenresItemProps){
  function onClick() {
    store.dispatch(changeGenre(props.value));
    store.dispatch(loadFilms());
    props.onclick();
  }
  return(
    <li className={`catalog__genres-item catalog__genres-item${ props.isActive ? '--active' : ''}`}>
      <a onClick={onClick} className="catalog__genres-link" >{props.value}</a>
    </li>
  );
}