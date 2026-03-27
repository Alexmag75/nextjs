import {carService} from "@/servisec/api.servise";
import {ICar} from "@/modeles/ICar";
import {CarsComponent} from "@/components/carsComponent";
import './carsComponent.css'


export const Cars=async ()=>{

    const cars=await carService.getAll();

    return(
        <>
            <div style={{ margin: '20px', display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {
                    cars.map((car: ICar) => <CarsComponent car={car} key={car.id} />)
                }
            </div>

        </>
    )
}