// --------------------------------------
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

// --------------------------------------
// 캐릭터 기본정보
export interface CharacterBasic {
  date: string | null; // 조회 날짜 (예: 2023-12-21T00:00+09:00)
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

// -------------------------------------------
//  캐릭터 스탯
export interface StatEntry {
  stat_name: string;
  stat_value: string; // 숫자지만 문자열로 들어옴
}
export interface CharacterStat {
  date: string | null;
  character_class: string;
  final_stat: StatEntry[];
  remain_ap: number;
}

// -------------------------------------------
//  인기도 조회
export interface CharacterPopularity {
  date: string | null;
  popularity: number;
}

// ------------------------------------------
//  하이퍼 스탯
// 개별 스탯 항목
export interface HyperStatItem {
  stat_type: string;
  stat_point: number;    // 투자한 포인트 수
  stat_level: number;    // 해당 스탯 레벨
  stat_increase: string; // 상승량 (예: "+5%")
}

// 메인 인터페이스
export interface CharacterHyperStat {
  date: string | null;                       // 조회 기준일 (KST)
  character_class: string;                  // 캐릭터 직업
  use_preset_no: string;                    // 적용 중인 프리셋 번호
  use_available_hyper_stat: number;         // 사용 가능한 하이퍼스탯 포인트

  hyper_stat_preset_1: HyperStatItem[];     // 1번 프리셋
  hyper_stat_preset_1_remain_point: number; // 1번 프리셋 잔여 포인트

  hyper_stat_preset_2: HyperStatItem[];     
  hyper_stat_preset_2_remain_point: number;

  hyper_stat_preset_3: HyperStatItem[];     
  hyper_stat_preset_3_remain_point: number;
}


// 성향
export interface CharacterPropencity {
  date: string | null;
  charisma_level: string;
  sensibility_level: string;
  insight_level: string;
  willingness_level: string;
  handicraft_level: string;
  charm_level: string;
}