import React from 'react';
import './styles.scss';
import { useParams } from 'react-router-dom';
import { UserProfile } from '../types';
import { useContext } from 'react';
import { AuthContext } from '../AuthContext';

export default function Profil() {

    const { id } = useParams();
    const { userProfile } = useContext(AuthContext);
    const [ userProfileData, setUserProfileData ] = React.useState<UserProfile | null>(null);

    console.log("userProfile", userProfile)
    console.log("userProfileData", userProfileData)

    React.useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await fetch(`http://localhost:3000/user/${id}`);
                if (response.ok) {
                    const userProfileData = await response.json();
                    setUserProfileData(userProfileData);
                }
            } catch (error) {
                console.log(error); ('Erreur lors de la récupération du profil : ' + error);
            }
        };
        fetchUserProfile();
    }, [id]);

    if (!userProfileData) {
        return <div>Chargement...</div>;
    }

    return (
        <div className='profil'>
        <h1 className='profil__title'>Profil</h1>
        <p>Prénom : {userProfileData.firstName}</p>
        <p>Nom : {userProfileData.lastName}</p>
        <p>Email : {userProfileData.email}</p>
        </div>
    )
}