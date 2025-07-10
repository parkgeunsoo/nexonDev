import { useEffect, useState } from "react";
import { getOcid, getCharacterList, getCharacterBasic } from "../api/nexon";
import type { Character, CharacterBasic } from "../types/nexon";

export const useCharacterSearch = (characterName: string) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchInfo, setSearchInfo] = useState<CharacterBasic>();

  useEffect(() => {
    if (!characterName) {
      return;
    }
    const fetch = async () => {
      setLoading(true);
      setError(null);
      try {
        const ocid = await getOcid(characterName);
        // const res = await getCharacterList(ocid);
        // const list = res.account_list?.[0]?.character_list ?? [];
        const searchInfo = await getCharacterBasic(ocid);
        // setCharacters(list);
        setSearchInfo(searchInfo);
      } catch (err) {
        console.error(err);
        setError("캐릭터 정보를 불러오는 데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, [characterName]);

  return { characters, searchInfo, loading, error };
};
