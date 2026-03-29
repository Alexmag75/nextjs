'use server';

import { revalidatePath } from 'next/cache';
import {carService} from "@/servisec/api.servise";
import {ICar} from "@/modeles/ICar";

export async function addCarAction(carData: ICar) {

    try {
        await carService.create(carData);
    } catch (e) {
        console.error("Помилка створення:", e);
        return;
    }

    revalidatePath('/cars');
}