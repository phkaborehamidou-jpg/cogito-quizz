import { User } from 'lucide-react';

function Profile() {
  return (
    <>
      <div className="page-heading">
        <h1>Mon profil</h1>
        <p>Gérez vos informations personnelles</p>
      </div>
      <div className="empty-state">
        <User size={48} />
        <h2>Connectez-vous</h2>
        <p>Créez un compte ou connectez-vous pour gérer vos annonces et favoris.</p>
      </div>
    </>
  );
}

export default Profile;
