import type { UserType } from "@/types/UserType";
import Cookies from "js-cookie";

export const useAuthUser = (): UserType | null => {
    const user = Cookies.get('token');

    return user ? JSON.parse(user) as UserType : null;

}