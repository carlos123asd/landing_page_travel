import londonsection1 from "../assets/london/section1.jpg"
import londonsection11 from "../assets/london/section11.jpg"
export const multiImages = {
    'london': {
        '1': [
            {imagen:londonsection1,titulo:"Tower Bridge",subtitulo:"An iconic symbol of London"},
            {imagen:londonsection11,titulo:"The Shard",subtitulo:"The tallest building in the United Kingdom"}
        ],
        '2': [

        ]
    }
}

export type MultiImagesSpace  = keyof typeof multiImages
export type MultiImagesSection<T extends MultiImagesSpace> = keyof typeof multiImages[T]; 