/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRegister } from "@/hooks/auth/useRegister";
import { ErrorValidations } from "@/types/ErrorValidation";
import { useState, type FC, type FormEvent } from "react";
import { useNavigate } from "react-router";

const Register: FC = () => {
    const navigate = useNavigate();

    const { mutate, isPending } = useRegister();

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const [errors, setErrors] = useState<ErrorValidations>({});

    const handleRegister = async (e: FormEvent) => {
        e.preventDefault();

        mutate({
            name,
            email,
            password
        }, {
            onSuccess: () => {
                navigate('/login')
            },
            onError: (error: any) => {
                setErrors(error.response.data.errors)
            }
        })
    }

    return (
        <div>

        </div>
    )

}