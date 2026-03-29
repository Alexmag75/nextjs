'use client';

import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { useRouter } from 'next/navigation';
import { addCarAction } from "@/actions/car.actions";
import { ICar } from "@/modeles/ICar";
import {carSchema} from "@/schemas/car.schema";

export default function CreateCarPage() {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<ICar>({
        resolver: joiResolver(carSchema),
        mode: 'onTouched'
    });
    const onSubmit = async (data: ICar) => {
        try {
             await addCarAction(data as any);
            router.push('/cars');
        } catch (error) {
            console.error(error);
            alert('Помилка при збереженні');
        }
    };

    return (
        <div className="p-8 max-w-md">
            <h1 className="text-2xl font-bold mb-4">Додати автомобіль</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                 <div>
                    <input
                        {...register('brand')}
                        placeholder="Марка"
                        className={`border p-2 rounded w-full ${errors.brand ? 'border-red-500' : ''}`}
                    />
                    {errors.brand && <p className="text-red-500 text-sm mt-1">{errors.brand.message}</p>}
                </div>

                <div>
                    <input
                        type="number"
                        {...register('year')}
                        placeholder="Рік"
                        className={`border p-2 rounded w-full ${errors.year ? 'border-red-500' : ''}`}
                    />
                    {errors.year && <p className="text-red-500 text-sm mt-1">{errors.year.message}</p>}
                </div>

                <div>
                    <input
                        type="number"
                        {...register('price')}
                        placeholder="Ціна"
                        className={`border p-2 rounded w-full ${errors.price ? 'border-red-500' : ''}`}
                    />
                    {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>}
                </div>

                <button
                    type="submit"
                    className="bg-green-600 text-white p-2 rounded hover:bg-green-700 disabled:bg-gray-400 transition-colors"
                >
                    Додати
                </button>
            </form>
        </div>
    );
}