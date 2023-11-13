import { useNavigate } from "react-router-dom"; 

export interface ProfileProps{}

const Profile: React.FunctionComponent<ProfileProps> = () =>  {
    const navigation = useNavigate()
    return ( 
            <div>Profile</div>
    )
}


export default Profile;
