import React from 'react';
import './styles.scss';
import { useParams } from 'react-router-dom';

interface UserProfile {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
}


export default function Profil() {

    const { id } = useParams();
    const [userProfile, setUserProfile] = React.useState<UserProfile | null>(null);

    React.useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await fetch(`http://localhost:3000/user/${id}`);
                if (response.ok) {
                    const userProfile = await response.json();
                    setUserProfile(userProfile);
                }
            } catch (error) {
                console.log(error); ('Erreur lors de la récupération du profil : ' + error);
            }
        };
        fetchUserProfile();
    }, [id]);

    if (!userProfile) {
        return <div>Chargement...</div>;
    }



    return (
        <div className='profil'>
        <h1 className='profil__title'>Profil</h1>
        <p>Prénom : {userProfile.firstName}</p>
        <p>Nom : {userProfile.lastName}</p>
        <p>Email : {userProfile.email}</p>
        </div>
    )
}