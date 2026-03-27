import {ICar} from "@/modeles/ICar";
const API_URL = 'http://185.69.152.209/carsAPI/v1';

export const carService = {
    getAll: async (): Promise<ICar[]> => {
       return  await fetch(`${API_URL}/cars`)
            .then(res => res.json());
    },
    create: async (car: ICar): Promise<ICar> => {
        const res = await fetch(`${API_URL}/cars`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(car)
        });
        if (!res.ok) {
            throw new Error('Помилка при створенні авто');
        }
        return res.json();
    }
};