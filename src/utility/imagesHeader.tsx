import imagenMachuPichu from '../assets/machupichu/header.jpg'
import imageLondon from '../assets/london/header.jpg'
import imageSingapur from '../assets/singapore/header.jpg'
import imageBali from '../assets/bali/header.jpg'

export const imageMap = {
    'machupicchu': imagenMachuPichu,
    'london': imageLondon,
    'singapore': imageSingapur,
    'bali': imageBali
}

export type ImageMapKeys = keyof typeof imageMap;