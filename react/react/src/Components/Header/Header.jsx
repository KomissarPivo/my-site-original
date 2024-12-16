import React from 'react'; 
import key from '../../assets/key.png'; 
import { useSelector, useDispatch } from 'react-redux'; 
import { logout } from '../Features/ProfileSlice'; 
import s from './Header.module.css'; 

const Header = () => { 
    const isAuth = useSelector((state) => state.profile.isAuth);
    const dispatch = useDispatch(); 

    const handleLogout = () => { 
        dispatch(logout()); 
    }; 

    return ( 
        <header> 
            <div className={s.d}> 
                <a className={s.btn} href="/"><img className={s.logo} src={key} alt="Logo" /></a> 
                <ul className={s.nav}> 
                    <li className={s.li}><a className={s.a} href="/MP">Главная</a></li> 
                    <li className={s.li}><a className={s.a} href="/catalog">Каталог</a></li> 
                    {isAuth ? ( 
                        <li className={s.li}><button className={s.ab} onClick={handleLogout}>Выйти из аккаунта</button></li> 
                    ) : ( 
                        <li className={s.li}><a className={s.a} href="/login">Войти</a></li> 
                    )} 

                </ul> 
            </div> 
        </header> 
    ); 
}; 

export default Header;
