import { FaClipboardList, FaUserAlt, FaSignOutAlt } from 'react-icons/fa';
import Image from 'next/image';
import avatar from '../../assets/images/avatar.png';

export default function UserBar(){

    return(
        <div className="container-user-bar">

            <div className="photo-area">
                <Image src={avatar} alt="user photo"/>
            </div>

            <div className="painel-area">

                <div className="btn-principals">

                    <ul>
                        <li>
                            <FaClipboardList size={25} color="#c4c4c4"/>
                            Dashboard
                        </li>

                        <li>
                            <FaUserAlt size={25} color="#c4c4c4"/>
                            User
                        </li>
                    </ul>

                </div>

                <div className="btn-logout">
                    <ul>
                        <li>
                            <FaSignOutAlt size={25} color="#c4c4c4"/>
                            Log Out
                        </li>
                    </ul>
                </div>

            </div>

        </div>
    )

}