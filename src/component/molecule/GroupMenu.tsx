import DiscoMenu from "../atom/DiscoMenu";
import Menu from "../atom/Menu";

export default function GroupMenu(){
    return <>
        <div className="groupMenu">
                <DiscoMenu />
                <Menu />
        </div>
    </>
}