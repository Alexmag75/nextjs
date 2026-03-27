import {FC} from "react";
import {ICar} from "@/modeles/ICar";
import './carsComponent.css'

type Props = {
   car:ICar

}

export const CarsComponent:FC<Props> =({car})=> {
    return(
        <div>
            <div className="max-w-sm border rounded-xl p-5 shadow-md bg-white hover:shadow-lg transition-shadow">
                <h2 className="text-xl font-bold text-slate-800 uppercase tracking-tight">
                    {car.brand}
                </h2>

                <div className="flex justify-between items-center mt-3">
    <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm font-medium rounded-full">
      Рік: {car.year}
    </span>

                    <span className="text-lg font-semibold text-emerald-600">
                     ${car.price}
    </span>
                </div>
            </div>
        </div>
    )


}