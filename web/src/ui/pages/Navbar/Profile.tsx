import React from "react";
import Icon from "../../Icon";

interface ProfileProps {}

const Profile: React.FC<ProfileProps> = () => (
  <div>
    <Icon style={{ width: 45, height: 45 }}>
      <img
        className="rounded-full"
        width={30}
        height={30}
        src="https://avatars.githubusercontent.com/u/67149699?v=4"
        alt="profile"
      />
    </Icon>
  </div>
);

export default Profile;
