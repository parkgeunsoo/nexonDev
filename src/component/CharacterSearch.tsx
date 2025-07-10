import { useForm } from "react-hook-form";
import { useState } from "react";
import { useCharacterSearch } from "../hooks/useCharacterSearch";
import type { Character, CharacterBasic } from "../types/nexon";
import CharacterProfile from "./CharacterProfile";
import Button from "@mui/material/Button";

interface FormValues {
  name: string;
}

const CharacterSearch = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const [name, setName] = useState("");

  const { characters, searchInfo, loading, error } = useCharacterSearch(name);
  const [selected, setSelected] = useState<Character | null>(null);

  const onSubmit = (data: FormValues) => {
    setName(data.name); // 입력한 닉네임을 useCharacterSearch에 넘김
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="form-control"
          {...register("name")}
          placeholder="캐릭터 닉네임 입력"
        />
        <button type="submit" className="btn">
          검색
        </button>
        <Button variant="text">Text</Button>
      </form>

      <div className="character_profile">
        <CharacterProfile profile={selected} />
      </div>

      <div className="character-list">
        {searchInfo && (
          <div className="characterInfoWrap">
            <div className="img">
              <img
                src={searchInfo.character_image}
                alt={searchInfo.character_name}
              />
            </div>
            <div className="characterInfo">
              <div className="leftInfo">
                <p className="name">{searchInfo.character_name}</p>
                <p className="class">{searchInfo.character_class}</p>
              </div>
              <div className="rightInfo">
                <p className="level">{searchInfo.character_level}</p>
                <p className="desc">Level</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CharacterSearch;
