import imagenCapeTown from '../assets/capetown/header.jpg'
import imageLondon from '../assets/london/header.jpg'
import imageSingapur from '../assets/singapore/header.jpg'
import imageBali from '../assets/bali/header.jpg'

export const imageMap = {
    'cape town': imagenCapeTown,
    'london': imageLondon,
    'singapore': imageSingapur,
    'bali': imageBali
}

export type ImageMapKeys = keyof typeof imageMap;