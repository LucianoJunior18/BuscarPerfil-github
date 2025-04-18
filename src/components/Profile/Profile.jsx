import "../Profile/Profile.css";

export default function Profile({ userData, animate }) {
    if (!userData) return null;

    return (
        <div className={`profile-card ${animate ? "fade-in" : ""}`}>
            <img src={userData.avatar_url} alt={userData.name} />
            <div className="info">
                <h2>{userData.name}</h2>
                <p>{userData.bio}</p>
            </div>
        </div>
    );
}
