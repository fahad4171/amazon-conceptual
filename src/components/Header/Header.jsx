import { NavLink } from "react-router-dom";
import Dashboard from './../Dashboard/Dashboard';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a href="/" className="btn btn-ghost text-2xl text-yellow-500">Amazon</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 font-semibold gap-2">
                        <NavLink to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "btn-success" : ""
                            }> <button className="btn">Home</button> 
                        </NavLink>
                        <NavLink to="/products"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "btn-success" : ""
                            }> <button className="btn">Products</button> 
                        </NavLink>
                        <NavLink to="/dashboard"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "btn-success" : ""
                            }> <button className="btn">Dashboard</button> 
                        </NavLink>
                        

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;