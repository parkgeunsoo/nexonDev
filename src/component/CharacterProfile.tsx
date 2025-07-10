import type { Character } from "../types/nexon";

interface Props {
  profile: Character | null;
}

const CharacterProfile = ({ profile }: Props) => {
  return (
    <div>
      {profile ? (
        <div>
          <h2>{profile.character_name}</h2>
          <p>월드: {profile.world_name}</p>
          <p>직업: {profile.character_class}</p>
          <p>레벨: {profile.character_level}</p>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default CharacterProfile;
