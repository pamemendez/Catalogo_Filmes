import React from "react";
import { useHistory } from "react-router-dom";
import "./ProfileSelection.css"; 

const profiles = [
  {
    name: "Pam",
    img: "https://m.media-amazon.com/images/M/MV5BYjg5NGRkMDctY2E0ZC00ZGU2LWEyMTEtMTZlM2MyMmJmM2UwXkEyXkFqcGc@._V1_.jpg",
  },
  {
    name: "Duda",
    img: "https://i.pinimg.com/736x/b8/13/aa/b813aa82c0d7a0a2ebb9daa355a331d2.jpg",
  },
  {
    name: "Mi",
    img: "https://i.pinimg.com/236x/54/91/04/549104563a381237b422d8497b61af4a.jpg",
  },
  {
    name: "Kath",
    img: "https://assets.epuzzle.info/puzzle/106/915/original.jpg",
  },
];

const ProfileSelection = () => {
  const history = useHistory();

  const handleProfileClick = (profile) => {

    localStorage.setItem("selectedProfile", JSON.stringify(profile));
    history.push("/home");
  };

  return (
    <div className="profile-selection">
      <h1>Quem está assistindo?</h1>
      <div className="profiles">
        {profiles.map((profile, index) => (
          <div
            key={index}
            className="profile"
            onClick={() => handleProfileClick(profile)}
          >
            <img src={profile.img} alt={profile.name} />
            <p>{profile.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileSelection;
