import { useState, useEffect } from "react"
import "./css/Dashboard.css"
import { Outlet, useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { BounceLoader } from "react-spinners"
import { BsChatRight } from "react-icons/bs"
import { BiChevronDown, BiChevronUp } from "react-icons/bi"
import { HiChevronRight } from "react-icons/hi"

const Dashboard = () => {
    const [user, setUser] = useState(undefined)
    const [users, setUsers] = useState(undefined)
    const [activeNav, setActiveNav] = useState(0)
    const [popup, setPopup] = useState(false)
    const [chatopen, setChatopen] = useState(false)

    const navigate = useNavigate()

    const { userid } = useParams()

    useEffect(() => {
        const init = async () => {
            const response = await axios.get("https://panorbit.in/api/users.json")

            if (response.status === 200) {
                setUsers(response.data.users.filter(item => item.id != userid))
                setUser(response.data.users.filter(item => item.id == userid))
            }
        }
        init()
    }, [userid])

    if (user === undefined) {
        return (
            <div className="_6ppe">
                <BounceLoader
                    color="rgb(106, 106, 212)"
                />
            </div>
        )
    }

    const navigation = ["Profile", "Posts", "Gallery", "ToDo"]

    const handleNavigation = (index) => {
        if (index === 0) {
            navigate(`/user/${userid}`)
        } else {
            navigate(`/user/${userid}/error`)
        }
        setActiveNav(index)
    }

    return (
        <div className="_9pzg">
            <div className="container" onClick={() => setPopup(false)}>
                <ul className="navigation">
                    {navigation.map((item, index) => (
                        <li 
                            key={index} 
                            className={activeNav === index ? "active" : undefined}
                            onClick={() => handleNavigation(index)}
                        >
                            {item}
                            {activeNav === index ? (
                                <div className="robes-tree">
                                    <div className="circle">
                                        <div className="square-up"></div>
                                        <div className="circle-up"></div>
                                        <div className="square-down"></div>
                                        <div className="circle-down"></div>
                                        <div className="chevron">
                                            <HiChevronRight />
                                        </div>
                                    </div>
                                </div>
                            ) : undefined}
                        </li>
                    ))}
                </ul>
                <div className="main">
                    <div className="header">
                        <span>{navigation[activeNav]}</span>
                        <div className="unguents-naps" onClick={e => {
                            e.stopPropagation()
                            setPopup(prev => !prev)
                        }}>
                            <img src={user[0].profilepicture} alt="Profile picture" />
                            <span>{user[0].name}</span>
                            {popup ? (
                                <div className="accounts">
                                    <div className="user">
                                        <img src={user[0].profilepicture} alt="Profile picture" />
                                        <span>{user[0].name}</span>
                                        <span>{user[0].email}</span>
                                    </div>
                                    <div className="window">
                                        <div className="users">
                                            {users.map((item, index) => (
                                                <div key={index} onClick={() => {
                                                    navigate(`/user/${item.id}`)
                                                    setActiveNav(0)
                                                }}>
                                                    <img src={item.profilepicture} alt="" />
                                                    <span>{item.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="sign-out">
                                        <button onClick={() => navigate("/")}>Sign out</button>
                                    </div>
                                </div>
                            ) : undefined}
                        </div>
                    </div>
                    <Outlet context={user} />
                </div>
                <div className="chatbox">
                    <div className="header" onClick={() => setChatopen(prev => !prev)}>
                        <div>
                            <BsChatRight />
                            <span>Chats</span>
                        </div>
                        {chatopen ? <BiChevronDown /> : <BiChevronUp />}
                    </div>
                    {chatopen ? <div className="users">
                        <div>
                            {users.map((item, index) => {
                                const on = Math.random() >= 0.5
                                return (
                                    <div className="hetaerae-lob">
                                        <div key={index} className="boffo-face">
                                            <img src={item.profilepicture} alt="" />
                                            <span>{item.name}</span>
                                        </div>
                                        <div className={on ? "dot green" : "dot"}></div>
                                    </div>
                                )
                            })}
                        </div>
                    </div> : undefined}
                </div>
            </div>
        </div>
    )
}

export default Dashboard
