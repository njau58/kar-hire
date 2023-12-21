
import { porche, mclaren } from "../../assets/images"
import { v4 as uuidv4 } from 'uuid';

export interface CarProps{

    type?:string
    vihicle_name?:string
    hire_price?:number
    year_manufatured?:number
    no_of_passangers?:number
    imageSrc:string[]
    Id:string,
    location?:'Nairobi' | 'Mombasa' | 'Nakuru',
    transmission_type?:'manual' | 'auto'
    badge?:'Hire' | 'Sale',
    features?:string[] 
    description?:string

  }

    export interface CarTypeProps {
        type: string;
        image?: any;
       
      }

      export const make = [
        "Sedan",
        "Suv",
        "HatchBack",
        "StationWagon",
        "PickUp",
        "Van",
        "Coupe",
      ];
   





        const vihicles:CarProps[]=[
            {

                type:'Sedan',
                Id:uuidv4(),
                vihicle_name:'Toyota Premio',
                transmission_type:'manual',
                badge:'Hire',
                hire_price:4000,
                imageSrc:[porche,porche,porche],
                location:'Nairobi',
                features:['Air Conditining', 'Tinted Windows', 'Reverse Camera', 'FM Radio'],
                description:`The Toyota Noah is one of our two types of people movers in stock. It has a spacious interior, versatile seating configurations, comfortable features, advanced safety technologies, and sleek design. It can accommodate families, provide ample cargo space, and offer a smooth and enjoyable driving experience.

                Known as the Toyota Noah, NAV 1 or Esquire in some markets, the Noah is a very capable 7-seater which shuttles its charges in air-conditioned comfort while enjoying the tunes from an in-dash CD/Radio. If your island holiday includes a larger family, small group or working crew, then this vehicle is the choice for which you’ve been looking.`

            },
            {

                type:'Coupe',
                  Id:uuidv4(),
                vihicle_name:'Toyota Noah',
                transmission_type:'auto',
                badge:'Hire',
                hire_price:7000,
                imageSrc:[mclaren, mclaren,mclaren],
                location:'Nairobi',
                    features:['Air Conditining', 'Tinted Windows', 'Reverse Camera', 'FM Radio']
            },
            {

                type:'Van',
                  Id:uuidv4(),
                vihicle_name:'Toyota Voxy',
                transmission_type:'manual',
                badge:'Hire',
                hire_price:7000,
                imageSrc:[porche, porche, porche],
                location:'Nairobi',
                    features:['Air Conditining', 'Tinted Windows', 'Reverse Camera', 'FM Radio']
            },
            {

                type:'Suv',
                  Id:uuidv4(),
                vihicle_name:'Toyota Prado',
                transmission_type:'manual',
                badge:'Hire',
                hire_price:16000,
                imageSrc:[porche, porche, porche],
                  location:'Nairobi',
                      features:['Air Conditining', 'Tinted Windows', 'Reverse Camera', 'FM Radio']
            },

            {

                type:'Sedan',
                  Id:uuidv4(),
                vihicle_name:'Toyota Axio',
                transmission_type:'manual',
                badge:'Hire',
                hire_price:4000,
                    imageSrc:[porche, porche, porche],
                  location:'Nairobi',
                      features:['Air Conditining', 'Tinted Windows', 'Reverse Camera', 'FM Radio']
            },

            {

                type:'Suv',
                  Id:uuidv4(),
                vihicle_name:'Honda CRV',
                transmission_type:'manual',
                badge:'Hire',
                hire_price:4000,
                    imageSrc:[porche, porche, porche],
                  location:'Nairobi',
                      features:['Air Conditining', 'Tinted Windows', 'Reverse Camera', 'FM Radio']
            },
            {

                type:'Suv',
                  Id:uuidv4(),
                vihicle_name:'Honda CRV3',
                transmission_type:'manual',
                badge:'Hire',
                hire_price:4000,
                    imageSrc:[porche, porche, porche],
                  location:'Nairobi',
                      features:['Air Conditining', 'Tinted Windows', 'Reverse Camera', 'FM Radio']
            },

        ]


    export default vihicles