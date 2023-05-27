import { useState, useEffect } from "react"
import "./css/Users.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Users = () => {
    const [users, setUsers] = useState(undefined)

    const navigate = useNavigate()

    useEffect(() => {
        const init = async () => {
            const response = await axios.get("https://panorbit.in/api/users.json")

            if (response.status === 200) {
                setUsers(response.data.users)
            }
        }
        init()
    }, [])

    return (
        <div className="_1pbn">
            <div className="container">
                <div className="heading">
                    Select an account
                </div>
                <div className="suitcase-oohs">
                    <div className="users">
                        {users ? (
                            users.map((item, index) => {
                                return (
                                    <div 
                                        key={index} 
                                        className="airtimes-phi"
                                        onClick={() => navigate(`/user/${item.id}`)}
                                    >
                                        <div className="profile">
                                            <img src={item.profilepicture} alt="Profile picture" />
                                        </div>
                                        <span>{item.name}</span>
                                    </div>
                                )
                            })
                        ) : undefined}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Users
