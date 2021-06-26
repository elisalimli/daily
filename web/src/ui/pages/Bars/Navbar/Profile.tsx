import React from "react";
import Icon from "../../../Icon";

interface ProfileProps {}

// the reason of the creating this component is syntax.
// I mean we must call the "icon" prop like this:<Icon .../>
const ProfileImg = () => (
  <img
    className="rounded-full"
    width={40}
    height={40}
    src="https://avatars.githubusercontent.com/u/67149699?v=4"
    alt="profile"
  />
);

const Profile: React.FC<ProfileProps> = () => {
  return (
    <div>
      <Icon icon={ProfileImg} style={{ width: 55, height: 55 }} />
    </div>
  );
};

export default Profile;
