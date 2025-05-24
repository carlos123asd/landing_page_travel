import londonSection1 from "../assets/london/section3.jpg"
import londonSection11 from "../assets/london/section33.jpg"
import londonSection111 from "../assets/london/section333.jpg"
import londonSection1111 from "../assets/london/section3333.jpg"

export const sliderImagen = {
    'london': {
        '1': londonSection1,
        '2': londonSection11,
        '3': londonSection111,
        '4': londonSection1111,
        length: 4
    }
}

export type sliderImagenSpace = keyof typeof sliderImagen;
export type sliderImagenSection<T extends sliderImagenSpace> = keyof typeof sliderImagen[T];