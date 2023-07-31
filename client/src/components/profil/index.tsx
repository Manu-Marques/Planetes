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
        <div className='profil__principal'>
            <h1 className='profil__principal__title'>Profil</h1>
        </div>
        <div className="profil__container">
            <div className="profil__container__name">
                <p className='profil__container__name__firstName'>Prénom : {userProfileData.firstName}</p>
            </div>
            <div className="profil__container__lastName">
                <p className='profil__container__lastName__famillyName'>Nom : {userProfileData.lastName}</p>
            </div>
            <div className="profil__container__email">
                <p className='profil__container__email__emailAdress'>Email : {userProfileData.email}</p>
            </div>
        </div>
        </div>
    )
}