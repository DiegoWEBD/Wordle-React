import UserInfo from "./UserInfo"

const SelectUser = ({ users, setUser }) => {

    return(
        <div>
            {
                users.map(
                    user => <UserInfo 
                                user={user} 
                                key={user.name}
                            />
                )
            }
        </div>
    )
}

export default SelectUser