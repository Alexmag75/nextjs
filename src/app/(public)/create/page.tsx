import {addCarAction} from "@/actions/ar.actions";
import Form from "next/form";


export default function CreateCarPage() {
    return (
        <div className="p-8 max-w-md">
            <h1 className="text-2xl font-bold mb-4">Додати автомобіль</h1>

            <Form action={addCarAction} className="flex flex-col gap-4">
                <input name="brand" placeholder="Марка" required className="border p-2 rounded" />
                <input name="year" type="number" placeholder="Рік" required className="border p-2 rounded" />
                <input name="price" type="number" placeholder="Ціна" required className="border p-2 rounded" />

                <button
                    type="submit"
                    className="bg-green-600 text-white p-2 rounded hover:bg-green-700"
                >
                    Додати
                </button>
            </Form>
        </div>
    );
}