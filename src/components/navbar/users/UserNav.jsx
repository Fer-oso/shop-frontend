import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { startLogoutUser } from '../../../store/authThunk';

export const UserNav = () => {

    const dispatch = useDispatch();

    const onClickLogout = () => {

        dispatch(startLogoutUser());
    }

    return (
        <>
            <li className="nav-item dropdown">
                <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Users
                </a>
                <ul className="dropdown-menu">
                    <li>
                        <NavLink to="/users" className="dropdown-item">All users</NavLink>
                    </li>
                    <li>
                        <Link  onClick={onClickLogout} className="dropdown-item">Logout</Link>
                    </li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            Something else here
                        </a>
                    </li>
                </ul>
            </li>
        </>
    )
}
