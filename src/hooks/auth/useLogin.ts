import API from "@/services/api"
import type { LoginRequestType } from "@/types/LoginRequestType"
import { useMutation } from "@tanstack/react-query"

export const useLogin = () => {

    const LoginRequest = async (data: LoginRequestType) => {
        const response = await API.post('/api/v1/auth/signin', data)
        return response.data
    }

    return useMutation({
        mutationFn: LoginRequest,
    })
}