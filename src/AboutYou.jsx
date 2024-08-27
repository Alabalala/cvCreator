import { useState } from "react";

export default function AboutYou() {
  const [profile, setProfile] = useState({
    userName: "",
    surname: "",
    title: "",
    YoE: "",
    BasedIn: "",
  });

  const [isEditing, setIsEditing] = useState(true);

  const handleAboutYouSave = () => {
    setIsEditing(false);
  };

  const handleAboutYouEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="profile bigSection">
      {isEditing ? (
        <>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="name"
            value={profile.userName}
            onChange={(e) =>
              setProfile({ ...profile, userName: e.target.value })
            }
          />

          <label htmlFor="surname">Surname</label>
          <input
            type="text"
            className="surname"
            value={profile.surname}
            onChange={(e) =>
              setProfile({ ...profile, surname: e.target.value })
            }
          />

          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="title"
            value={profile.title}
            onChange={(e) => setProfile({ ...profile, title: e.target.value })}
          />

          <label htmlFor="YoE">Years of experience:</label>
          <input
            type="text"
            className="YoE"
            value={profile.YoE}
            onChange={(e) => setProfile({ ...profile, YoE: e.target.value })}
          />

          <label htmlFor="basedIn">Based in</label>
          <input
            type="text"
            className="basedIn"
            value={profile.BasedIn}
            onChange={(e) =>
              setProfile({ ...profile, BasedIn: e.target.value })
            }
          />

          <button onClick={handleAboutYouSave}>Save</button>
        </>
      ) : (
        <div className="renderedProfile">
          <button className="editButton" onClick={handleAboutYouEdit}>
            <i className="fa-solid fa-pen"></i>
          </button>
          <h2>Profile Summary</h2>
          <p>
            <strong>Name:</strong> {profile.userName}
          </p>
          <p>
            <strong>Surname:</strong> {profile.surname}
          </p>
          <p>
            <strong>Title:</strong> {profile.title}
          </p>
          <p>
            <strong>Years of Experience:</strong> {profile.YoE}
          </p>
          <p>
            <strong>Based in:</strong> {profile.BasedIn}
          </p>
        </div>
      )}
    </div>
  );
}
