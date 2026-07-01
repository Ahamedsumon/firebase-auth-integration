import { AuthContext } from "../AuthContext/AuthContext";


const AuthProvider = ({children}) => {
    const userInfo = {
        email: "allu@ballu.khor"
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;