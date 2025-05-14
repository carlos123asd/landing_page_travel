import imagenMachuPichuAirOne from '../assets/machupichu/air1.jpg'
import imagenMachuPichuAirTwo from '../assets/machupichu/air2.jpg'
type ImagesOrganismoUnoType = {
    [key: string]: {
        titulo: { titulo1: string; titulo2: string };
        subtitulo: { subtitulo1: string; subtitulo2: string };
        image: {
            imagenMachuPichuAirOne: string;
            imagenMachuPichuAirTwo: string;
        };
    };
};

export const imagesOrganismoUno: ImagesOrganismoUnoType = {
    'machupicchu': {
        titulo: {titulo1:"Cape Town",titulo2:"The Twelve Apostles"},
        subtitulo: {
            subtitulo1:"Both Table Mountain and the newly build stadium stand out",
            subtitulo2:"A 6 km mountain range that actually consists of 18 peaks—not 12"
         },
        image:{
            imagenMachuPichuAirOne,
            imagenMachuPichuAirTwo
        }
    }
};

export type ImageMapKeysOrganismoUno = keyof typeof imagesOrganismoUno;