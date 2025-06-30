import { useForm } from "react-hook-form";
import { useState } from "react";
import { useCharacterSearch } from "../hooks/useCharacterSearch";
import type { Character, CharacterBasic } from "../types/nexon";
import CharacterProfile from "./CharacterProfile";

interface FormValues {
  name: string;
}

const CharacterSearch = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const [name, setName] = useState("");

  const { characters, imgs, loading, error } = useCharacterSearch(name);
  const [selected, setSelected] = useState<Character | null>(null);

  const onSubmit = (data: FormValues) => {
    setName(data.name); // 입력한 닉네임을 useCharacterSearch에 넘김
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} placeholder="캐릭터 닉네임 입력" />
        <button type="submit">조회</button>
      </form>

      {loading && <p>로딩 중...</p>}
      {error && <p>{error}</p>}

      <div className="character_profile">
        <CharacterProfile profile={selected} />
      </div>

      <ul className="character-list">
        {characters.map((char) => (
          <li key={char.ocid} onClick={() => setSelected(char)}>
            {imgs && (
              <img src={imgs.character_image} alt={imgs.character_name} />
            )}
            <p>{char.character_name}</p>
            <p>
              Lv.<span>{char.character_level}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterSearch;
