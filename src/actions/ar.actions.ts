'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import {carService} from "@/servisec/api.servise";

export async function addCarAction(formData: FormData) {
    const carData = {
        brand: formData.get('brand') as string,
        year: Number(formData.get('year')),
        price: Number(formData.get('price')),
    };
    try {
        await carService.create(carData);
    } catch (e) {
        console.error("Помилка створення:", e);
        return;
    }

    revalidatePath('/cars');
    redirect('/cars');
}