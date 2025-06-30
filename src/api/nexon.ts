import { nexonApi } from "./axiosInstance";
import type {
  Character,
  CharacterListResponse,
  CharacterBasic,
} from "../types/nexon";

// Ocid 조회
export const getOcid = async (characterName: string): Promise<string> => {
  const res = await nexonApi.get<Character>(
    "https://open.api.nexon.com/maplestory/v1/id",
    {
      params: {
        character_name: characterName,
      },
    }
  );
  return res.data.ocid;
};

// 캐릭터 상세조회
export const getCharacterList = async (
  ocid: string
): Promise<CharacterListResponse> => {
  const res = await nexonApi.get<CharacterListResponse>(
    "https://open.api.nexon.com/maplestory/v1/character/list",
    {
      params: { ocid },
    }
  );
  return res.data;
};

// 캐릭터 기본정보
export const getCharacterBasic = async (
  ocid: string,
  date?: string
): Promise<CharacterBasic> => {
  const res = await nexonApi.get<CharacterBasic>(
    "https://open.api.nexon.com/maplestory/v1/character/basic",
    {
      params: {
        ocid,
        date, // 선택값: 지정 안 하면 오늘 날짜
      },
    }
  );
  return res.data;
};
