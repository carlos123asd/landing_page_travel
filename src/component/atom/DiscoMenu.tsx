import machupichu from '../../assets/machupichu/machupichu.jpg'
import london from '../../assets/london/london.jpg'
import singapore from '../../assets/singapore/singapore.jpg'
import bali from '../../assets/bali/bali.jpg'
import { useMenu } from '../../context/MenuContext'

export default function DiscoMenu() {
    const {menuActive} = useMenu()
    return <>
        <div className='contentDisc'>
            <div className='contentDiscAuxExternal'>
                <img style={menuActive === 'machu picchu' ? {opacity: 1,transform: "rotate(180deg)"} : {opacity: 0,transform: "rotate(360deg)"}} src={machupichu} alt="" />
                <img style={menuActive === 'london' ? {opacity: 1,transform: "rotate(360deg)"} : {}} src={london} alt="" />
                <img style={menuActive === 'singapore' ? {opacity: 1,transform: "rotate(540deg)"} : {}} src={singapore} alt="" />
                <img style={menuActive === 'bali' ? {opacity: 1,transform: "rotate(360deg)"} : {}} src={bali} alt="" />
            </div>
            <div className='contentDiscAuxInternal'>
                <img style={menuActive === 'machu picchu' ? {opacity: 1} : {opacity: 0}} src={machupichu} alt="" />
                <img style={menuActive === 'london' ? {opacity: 1} : {opacity: 0}} src={london} alt="" />
                <img style={menuActive === 'singapore' ? {opacity: 1} : {opacity: 0}} src={singapore} alt="" />
                <img style={menuActive === 'bali' ? {opacity: 1} : {opacity: 0}} src={bali} alt="" />
            </div>
        </div>
    </>
}




