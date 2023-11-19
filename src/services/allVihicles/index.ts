
import { porche, mclaren } from "../../assets/images"

export interface CarProps{

    brand?:string
    vihicle_name?:string
    sale_price?:number
    hire_price?:number
    year_manufatured?:number
    no_of_passangers?:number
    imageSrc?:string
    transmission_type?:'manual' | 'auto'
    badge?:'Hire' | 'Sale'}
   





        const vihicles:CarProps[]=[
            {

                brand:'Toyota',
                vihicle_name:'Toyota Premio',
                transmission_type:'manual',
                badge:'Hire',
                hire_price:4000,
                imageSrc:porche

            },
            {

                brand:'Toyota',
                vihicle_name:'Toyota Noah',
                transmission_type:'auto',
                badge:'Hire',
                hire_price:7000,
                imageSrc:mclaren
            },
            {

                brand:'Toyota',
                vihicle_name:'Toyota Voxy',
                transmission_type:'manual',
                badge:'Hire',
                hire_price:7000,
                imageSrc:porche
            },
            {

                brand:'Toyota',
                vihicle_name:'Toyota Prado',
                transmission_type:'manual',
                badge:'Hire',
                hire_price:16000,
                  imageSrc:porche
            },

            {

                brand:'Toyota',
                vihicle_name:'Toyota Axio',
                transmission_type:'manual',
                badge:'Hire',
                hire_price:4000,
                  imageSrc:porche
            },

            {

                brand:'Honda',
                vihicle_name:'Honda CRV',
                transmission_type:'manual',
                badge:'Hire',
                hire_price:4000,
                  imageSrc:porche
            },
            {

                brand:'Honda',
                vihicle_name:'Honda CRV3',
                transmission_type:'manual',
                badge:'Hire',
                hire_price:4000,
                  imageSrc:porche
            },

        ]


    export default vihicles