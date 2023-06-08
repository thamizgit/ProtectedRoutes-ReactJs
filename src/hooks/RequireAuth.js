import useAuth from "./useAuth"
import { Outlet,Navigate,useLocation } from "react-router-dom";
const RequireAuth = ({allowedRoles}) => {
    const {auth} = useAuth();
    const currlocation = useLocation();

    return (
        auth?.roles?.find(role => allowedRoles?.includes(role)) ? <Outlet /> : auth?.username ? <Navigate to="/unauthorized" state={{from:currlocation}} replace/> : <Navigate to="/login" state={{from: currlocation}} replace />
    )
}
export default RequireAuth