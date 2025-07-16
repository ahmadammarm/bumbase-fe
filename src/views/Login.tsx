/* eslint-disable @typescript-eslint/no-explicit-any */
import { AuthContext } from "@/context/AuthContext";
import { useLogin } from "@/hooks/auth/useLogin";
import Cookies from "js-cookie";
import { useContext, useState, type FC } from "react";
import { useNavigate } from "react-router";

interface ErrorValidation {
    [key: string]: string;
}

const Login: FC = () => {

    const navigate = useNavigate();

    const { mutate, isPending } = useLogin();

    const { setIsAuthenticated } = useContext(AuthContext)!;

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const [errorValidation, setErrorValidation] = useState<ErrorValidation>({});


    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        mutate({ email, password }, {
            onSuccess: (data: any) => {
                Cookies.set('token', data.data.token)

                Cookies.set('user', JSON.stringify({
                    id: data.data.user.id,
                    email: data.data.user.email,
                    name: data.data.user.name
                }))

                setIsAuthenticated(true);
                navigate('/dashboard');
            },
            onError: (error: any) => {
                if (error.response?.status === 422) {
                    setErrorValidation(error.response.data.errors);
                } else {
                    setErrorValidation({ general: 'An unexpected error occurred. Please try again.' });
                }
            }
        });
    };

    return (
        <div>

        </div>
    )
}

export default Login;