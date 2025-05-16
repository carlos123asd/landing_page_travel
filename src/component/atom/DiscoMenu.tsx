import capeTown from '../../assets/capetown/capetown.jpg'
import london from '../../assets/london/london.jpg'
import singapore from '../../assets/singapore/singapore.jpg'
import bali from '../../assets/bali/bali.jpg'
import useMenu from '../../hooks/useMenu'

export default function DiscoMenu() {
    const {menuActive} = useMenu().context
    return <>
        <div className='contentDisc'>
            <div className='contentDiscAuxExternal'>
                <img style={menuActive === 'cape town' ? {opacity: 1,transform: "rotate(180deg)"} : {opacity: 0,transform: "rotate(360deg)"}} src={capeTown} alt="" />
                <img style={menuActive === 'london' ? {opacity: 1,transform: "rotate(360deg)"} : {}} src={london} alt="" />
                <img style={menuActive === 'singapore' ? {opacity: 1,transform: "rotate(540deg)"} : {}} src={singapore} alt="" />
                <img style={menuActive === 'bali' ? {opacity: 1,transform: "rotate(360deg)"} : {}} src={bali} alt="" />
            </div>
            <div className='contentDiscAuxInternal'>
                <img style={menuActive === 'cape town' ? {opacity: 1} : {opacity: 0}} src={capeTown} alt="" />
                <img style={menuActive === 'london' ? {opacity: 1} : {opacity: 0}} src={london} alt="" />
                <img style={menuActive === 'singapore' ? {opacity: 1} : {opacity: 0}} src={singapore} alt="" />
                <img style={menuActive === 'bali' ? {opacity: 1} : {opacity: 0}} src={bali} alt="" />
            </div>
        </div>
    </>
}




