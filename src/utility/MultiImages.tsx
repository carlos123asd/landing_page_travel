import londonsection1 from "../assets/london/section1.jpg"
import londonsection11 from "../assets/london/section11.jpg"
import londonsection2 from "../assets/london/section4.jpg"
import londonsection22 from "../assets/london/section44.jpg"
import londonsection222 from "../assets/london/section444.jpg"
import singaporesection1 from "../assets/singapore/section3.jpg"
import singaporesection11 from "../assets/singapore/section33.jpg"
import singaporesection111 from "../assets/singapore/section333.jpg"
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
    },
    'singapore': {
        '1': [
            {imagen:singaporesection1,titulo:"Gardens by the Bay",subtitulo:"The view from Marina Bay Sands observation deck"},
            {imagen:singaporesection11,titulo:"Supertrees",subtitulo:"You can find 18 of them in the park area"},
            {imagen:singaporesection111,titulo:"Cloud Forest",subtitulo:"The path down from the mountain"}
        ]
    }
}

export type MultiImagesSpace  = keyof typeof multiImages
export type MultiImagesSection<T extends MultiImagesSpace> = keyof typeof multiImages[T]; 