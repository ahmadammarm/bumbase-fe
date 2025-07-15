// import useMutation dari '@tanstack/react-query';
import API from '@/services/api';
import type { RegisterRequestType } from '@/types/RegisterRequestType';
import { useMutation } from '@tanstack/react-query';

/**
 * Hook untuk melakukan registrasi pengguna baru.
 * Menggunakan useMutation dari @tanstack/react-query untuk mengelola status permintaan.
 */
export const useRegister = () => {

    return useMutation({

        mutationFn: async (data: RegisterRequestType) => {

            const response = await API.post('/api/register', data);

            return response.data;
        }
    });
};