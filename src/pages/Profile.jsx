import { useOutletContext } from "react-router-dom"
import "./css/Profile.css"
import Map from "../assets/Map.png"

const Profile = () => {
    const usercontext = useOutletContext()

    const user = usercontext[0]

    return (
        <div className="_6gqr">
            <div className="vagrants-fees">
                <div className="profile">
                    <img src={user.profilepicture} alt="Profile picture" />
                    <span>{user.name}</span>
                </div>
                <div className="cervices-ink">
                    <div>
                        <span>Username &nbsp; :</span>
                        <span>{user.username}</span>
                    </div>
                    <div>
                        <span>e-mail &nbsp; :</span>
                        <span>{user.email}</span>
                    </div>
                    <div>
                        <span>Phone &nbsp; :</span>
                        <span>{user.phone.slice(0,14)}</span>
                    </div>
                    <div>
                        <span>Website &nbsp; :</span>
                        <span>{user.website}</span>
                    </div>
                    <hr />
                </div>
                <div className="cervices-ink">
                    <span className="company">Company</span>
                    <div>
                        <span>Name &nbsp; :</span>
                        <span>{user.company.name}</span>
                    </div>
                    <div>
                        <span>catchphrase &nbsp; :</span>
                        <span>{user.company.catchPhrase}</span>
                    </div>
                    <div>
                        <span>bs &nbsp; :</span>
                        <span>{user.company.bs}</span>
                    </div>
                </div>
            </div>
            <div className="deems-cub">
                <div className="cervices-ink">
                    <span className="address">Address:</span>
                    <div>
                        <span>Street &nbsp; :</span>
                        <span>{user.address.street}</span>
                    </div>
                    <div>
                        <span>Suite &nbsp; :</span>
                        <span>{user.address.suite}</span>
                    </div>
                    <div>
                        <span>City &nbsp; :</span>
                        <span>{user.address.city}</span>
                    </div>
                    <div>
                        <span>Zipcode &nbsp; :</span>
                        <span>{user.address.zipcode}</span>
                    </div>
                </div>
                <div className="outbakes-ship">
                    <div>
                        <img src={Map} />
                    </div>
                    <div className="location">
                        <div>
                            <span>Lat:</span>
                            <span>{user.address.geo.lat}</span>
                        </div>
                        <div>
                            <span>Long:</span>
                            <span>{user.address.geo.lng}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
