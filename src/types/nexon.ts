// 캐릭터 리스트
export interface Character {
  character_class: string;
  character_level: number;
  character_name: string;
  ocid: string;
  world_name: string;
}

export interface CharacterListResponse {
  account_list: {
    character_list: Character[];
  }[];
}

// 캐릭터 기본정보
export interface CharacterBasic {
  date: string; // 조회 날짜 (예: 2023-12-21T00:00+09:00)
  character_name: string;
  world_name: string;
  character_gender: string;
  character_class: string;
  character_class_level: string;
  character_level: number;
  character_exp: number;
  character_exp_rate: string;
  character_guild_name: string;
  character_image: string; // ✅ 캐릭터 이미지 URL
  character_date_create: string;
  access_flag: string;
  liberation_quest_clear_flag: string;
}
