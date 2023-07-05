import {IoMdNotificationsOutline} from "react-icons/io"
import {AiOutlineMessage} from "react-icons/ai"
import {GrAddCircle} from "react-icons/gr"
const Navbar = ({user}) =>{
    return(
        <nav>
            <div className="logo">
                El-p
            </div>
            <div className="notifications">
                <div className="notification">
                    <div className="icon">
                        <IoMdNotificationsOutline/>
                    </div>
                    <div className="number">2</div>
                </div>
                <div className="notification">
                    <div className="icon">
                        <AiOutlineMessage/>
                    </div>
                    <div className="number">1</div>
                </div>
                <div className="add-photo">
                    <GrAddCircle/>
                </div>
                <div className="username">{user}</div>
            </div>
        </nav>
    )
}
export default Navbar
