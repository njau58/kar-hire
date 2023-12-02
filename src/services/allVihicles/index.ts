
import { porche, mclaren } from "../../assets/images"

export interface CarProps{

    type?:string
    vihicle_name?:string
    hire_price?:number
    year_manufatured?:number
    no_of_passangers?:number
    imageSrc?:string
    transmission_type?:'manual' | 'auto'
    badge?:'Hire' | 'Sale'}
   





        const vihicles:CarProps[]=[
            {

                type:'Sedan',
                vihicle_name:'Toyota Premio',
                transmission_type:'manual',
                badge:'Hire',
                hire_price:4000,
                imageSrc:porche

            },
            {

                type:'Coupe',
                vihicle_name:'Toyota Noah',
                transmission_type:'auto',
                badge:'Hire',
                hire_price:7000,
                imageSrc:mclaren
            },
            {

                type:'Van',
                vihicle_name:'Toyota Voxy',
                transmission_type:'manual',
                badge:'Hire',
                hire_price:7000,
                imageSrc:porche
            },
            {

                type:'Suv',
                vihicle_name:'Toyota Prado',
                transmission_type:'manual',
                badge:'Hire',
                hire_price:16000,
                  imageSrc:porche
            },

            {

                type:'Sedan',
                vihicle_name:'Toyota Axio',
                transmission_type:'manual',
                badge:'Hire',
                hire_price:4000,
                  imageSrc:porche
            },

            {

                type:'Suv',
                vihicle_name:'Honda CRV',
                transmission_type:'manual',
                badge:'Hire',
                hire_price:4000,
                  imageSrc:porche
            },
            {

                type:'Suv',
                vihicle_name:'Honda CRV3',
                transmission_type:'manual',
                badge:'Hire',
                hire_price:4000,
                  imageSrc:porche
            },

        ]


    export default vihicles