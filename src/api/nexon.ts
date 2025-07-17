import { nexonApi } from "./axiosInstance";
import type {
  Character,
  CharacterListResponse,
  CharacterBasic,
  CharacterStat,
  CharacterHyperStat,
  CharacterPopularity,
  CharacterPropencity,
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

// 인기도 정보 조회
export const getPopularity = async (
  ocid: string,
  date?: string
): Promise<CharacterPopularity> => {
  const res = await nexonApi.get<CharacterPopularity>(
    "https://open.api.nexon.com/maplestory/v1/character/popularity",
    {
      params: {
        ocid,
        date, // 선택값: 지정 안 하면 오늘 날짜
      },
    }
  );
  return res.data;
};

// 종합 능력치 정보 조회
export const getCharacterStat = async (
  ocid: string,
  date?: string
): Promise<CharacterStat> => {
  const res = await nexonApi.get<CharacterStat>(
    "https://open.api.nexon.com/maplestory/v1/character/stat",
    {
      params: {
        ocid,
        date, // 선택값: 지정 안 하면 오늘 날짜
      },
    }
  );
  return res.data;
};

// 하이퍼스탯 정보 조회
export const getCharacterHyperStat = async (
  ocid: string,
  date?: string
): Promise<CharacterHyperStat> => {
  const res = await nexonApi.get<CharacterHyperStat>(
    "https://open.api.nexon.com/maplestory/v1/character/hyper-stat",
    {
      params: {
        ocid,
        date, // 선택값: 지정 안 하면 오늘 날짜
      },
    }
  );
  return res.data;
};

// 어빌리티 정보 조회
export const getCharacterAbility = async (
  ocid: string,
  date?: string
): Promise<CharacterStat> => {
  const res = await nexonApi.get<CharacterStat>(
    "https://open.api.nexon.com/maplestory/v1/character/ability",
    {
      params: {
        ocid,
        date, // 선택값: 지정 안 하면 오늘 날짜
      },
    }
  );
  return res.data;
};

// 성향 정보 조회
export const getCharacterPropencity = async (
  ocid: string,
  date?: string
): Promise<CharacterPropencity> => {
  const res = await nexonApi.get<CharacterPropencity>(
    "https://open.api.nexon.com/maplestory/v1/character/propensity",
    {
      params: {
        ocid,
        date, // 선택값: 지정 안 하면 오늘 날짜
      },
    }
  );
  return res.data;
};