import SignInError from './sign-in-error.tsx';
import AsyncComponent from '../../components/async-component/async-component.tsx';
import {useAppSelector} from '../../hooks';
import {getError} from '../../store/reducers/error/selectors.ts';
import {FormEvent, useState} from 'react';
import {getUserData} from '../../store/reducers/user/selectors.ts';
import {store} from '../../store';
import {checkAuthAction, loginAction} from '../../store/api-actions/user.ts';

type FormState = {
  email : string;
  password : string;
}

export default function SignInForm(){
  const errors = useAppSelector(getError);

  const [formData, setFormData] = useState<FormState>({email : '', password : ''});
  const userData = useAppSelector(getUserData);
  function onSubmit(evt : FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    store.dispatch(loginAction({login : formData.email, password : formData.password}));
    store.dispatch(checkAuthAction());
  }

  return(
    <form onSubmit={onSubmit} className="sign-in__form" >
      {errors !== null && <SignInError/>}
      <div className="sign-in__fields">
        <div className="sign-in__field">
          <input className="sign-in__input" type="email" placeholder="Email address" name="user-email"
            id="user-email" value={formData.email} onChange={(e) => setFormData({...formData, email : e.target.value})}
          />
          <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
        </div>
        <div className="sign-in__field">
          <input className="sign-in__input" type="password" placeholder="Password" name="user-password"
            id="user-password" value={formData.password} onChange={(e) => setFormData({...formData, password : e.target.value})}
          />
          <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
        </div>
      </div>
      <div className="sign-in__submit">
        <button className="sign-in__btn" type="submit" disabled={userData.isLoginDataLoading}>
          <AsyncComponent isLoading={userData.isLoginDataLoading}>
            <div>Sign in</div>
          </AsyncComponent>
        </button>
      </div>
    </form>
  );
}
