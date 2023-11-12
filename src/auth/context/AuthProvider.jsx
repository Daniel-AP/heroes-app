import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./AuthReducer"
import { types } from "./types";

export const AuthProvider = ({ children }) => {

    const init = () => {

        const user = localStorage.getItem("user");

        return {
            logged: !!user,
            user: user
        }

    }

    const [ authenticated, dispatch ] = useReducer(authReducer, {}, init);

    const login = ( user ) => {

        const action = {

            type: types.login,
            payload: user

        }

        localStorage.setItem("user", user);

        dispatch(action)

    }

    const logout = () => {

        const action = {

            type: types.logout,
            payload: {}

        }

        localStorage.removeItem("user");

        dispatch(action)

    }

    return (
        <AuthContext.Provider value={{authenticated, login, logout}}>
            { children }
        </AuthContext.Provider>
    )
}
