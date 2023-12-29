import {store} from './store';

export type FilmShort = {
    id : string;
    name : string;
    previewImage : string;
    previewVideoLink : string;
    genre : string;
}

export type Film = {
  id : string;
  name : string;
  posterImage : string;
  backgroundImage : string;
  backgroundColor : string;
  videoLink : string;
  description : string;
  rating : string;
  scoresCount : string;
  director : string;
  starring : string[];
  runTime : string;
  genre : string;
  released : string;
  isFavorite : boolean;
}

export type AuthData = {
    login: string;
    password: string;
};

export type UserData = {
    id: number;
    email: string;
    token: string;
};

export type ErrorData = {
    property : string;
    messages : string[];
}

export type FilmComment = {
  id : string;
  date : string;
  user : string;
  comment : string;
  rating : string;
}

export type FilmCommentBeingSent = {
  id : string;
  comment : string;
  rating : number;
}

export type AppDispatch = typeof store.dispatch;

export type State = ReturnType<typeof store.getState>;
