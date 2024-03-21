'use server'
import { revalidatePath } from "next/cache";
import db from "@/lib/db";

export async function AddClient (data: FormData) {
    const first_name = data.get('first_name');
    const middle_name = data.get('middle_name');
    const last_name = data.get('last_name');
    const email = data.get('email');
    const phone = data.get('phone');

    try {
        // Создаём пользователя (клиента)
        const newUser = await db.user.create({
            data: {
                first_name: first_name?.toString(),
                middle_name: middle_name?.toString(),
                last_name: last_name?.toString(),
                email: email?.toString(),
                phone: phone?.toString()
            }
        });
        console.log(newUser);
        revalidatePath('/');
    } catch (error) {
        console.error('Ошибка при создании пользователя и задачи:', error);
    }
}
