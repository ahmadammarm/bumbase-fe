/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRegister } from "@/hooks/auth/useRegister";
import { type ErrorValidations } from "@/types/ErrorValidation";
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
        <div className="flex justify-center">
            <div className="w-full max-w-2xl">
                <div className="bg-white rounded-2xl shadow p-6">
                    <h4 className="text-center font-bold text-xl mb-4">REGISTER</h4>
                    <hr className="mb-4" />
                    <form onSubmit={handleRegister}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Full Name */}
                            <div className="mb-2">
                                <label className="block text-sm font-semibold mb-1">Full Name</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Full Name"
                                />
                                {errors.Name && (
                                    <div className="bg-red-100 text-red-700 mt-2 p-2 rounded-lg text-sm">
                                        {errors.Name}
                                    </div>
                                )}
                            </div>

                            {/* Email */}
                            <div className="mb-2">
                                <label className="block text-sm font-semibold mb-1">Email address</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Email Address"
                                />
                                {errors.Email && (
                                    <div className="bg-red-100 text-red-700 mt-2 p-2 rounded-lg text-sm">
                                        {errors.Email}
                                    </div>
                                )}
                            </div>

                            {/* Password */}
                            <div className="mb-2">
                                <label className="block text-sm font-semibold mb-1">Password</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Password"
                                />
                                {errors.Password && (
                                    <div className="bg-red-100 text-red-700 mt-2 p-2 rounded-lg text-sm">
                                        {errors.Password}
                                    </div>
                                )}
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 mt-4 rounded-lg hover:bg-blue-700 transition duration-200"
                            disabled={isPending}
                        >
                            {isPending ? 'Loading...' : 'REGISTER'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register