import { Link, Outlet } from "react-router-dom";
import Dashboard from './../Dashboard/Dashboard';

const DashboardLayout = () => {
    return (
        <div className="flex gap-7 mb-10">
            <div className=" bg-slate-900 p-4">
                <ul className="flex flex-col font-bold text-2xl mt-6 ">
                    <li><Link to={'/dashboard'}>Dashboard</Link></li>
                    <li><Link to={'/dashboard/profile'}>Profile</Link></li>
                    <li><Link to={'/dashboard/editProfile'}>Edit Profile</Link></li>
                </ul>

            </div>
            <div className="bg-green-400 text-black w-3/4">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;