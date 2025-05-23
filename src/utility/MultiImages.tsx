import londonsection1 from "../assets/london/section1.jpg"
import londonsection11 from "../assets/london/section11.jpg"
import londonsection2 from "../assets/london/section4.jpg"
import londonsection22 from "../assets/london/section44.jpg"
import londonsection222 from "../assets/london/section444.jpg"
export const multiImages = {
    'london': {
        '1': [
            {imagen:londonsection1,titulo:"Tower Bridge",subtitulo:"An iconic symbol of London"},
            {imagen:londonsection11,titulo:"The Shard",subtitulo:"The tallest building in the United Kingdom"}
        ],
        '2': [
            {imagen:londonsection2,titulo:"Say cheese",subtitulo:"A cheese store near Borough Market"},
            {imagen:londonsection22,titulo:"Mr Fogg's",subtitulo:"Beautiful decorated cocktail bar"},
            {imagen:londonsection222,titulo:"The Salisbury Pub",subtitulo:"Pub with a wonderful Victorian interior"}
        ]
    }
}

export type MultiImagesSpace  = keyof typeof multiImages
export type MultiImagesSection<T extends MultiImagesSpace> = keyof typeof multiImages[T]; 