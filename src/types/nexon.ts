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
export interface CharacterBasicResponse {
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
export interface CharacterStatResponse {
  date: string | null;
  character_class: string;
  final_stat: StatEntry[];
  remain_ap: number;
}

// -------------------------------------------
//  인기도 조회
export interface CharacterPopularityResponse {
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
export interface CharacterHyperStatResponse {
  date: string | null; // 조회 기준일 (KST)
  character_class: string; // 캐릭터 직업
  use_preset_no: string; // 적용 중인 프리셋 번호
  use_available_hyper_stat: number; // 사용 가능한 하이퍼스탯 포인트

  hyper_stat_preset_1: HyperStatItem[]; // 1번 프리셋
  hyper_stat_preset_1_remain_point: number; // 1번 프리셋 잔여 포인트

  hyper_stat_preset_2: HyperStatItem[];
  hyper_stat_preset_2_remain_point: number;

  hyper_stat_preset_3: HyperStatItem[];
  hyper_stat_preset_3_remain_point: number;
}

// 장비에 붙는 능력치들 (기본, 추가, 최종 옵션에 공통적으로 사용)
export interface OptionStats {
  str: string; // STR
  dex: string; // DEX
  int: string; // INT
  luk: string; // LUK
  max_hp: string; // 최대 HP
  max_mp: string; // 최대 MP
  attack_power: string; // 공격력
  magic_power: string; // 마력
  armor?: string; // 방어력
  speed?: string; // 이동속도
  jump?: string; // 점프력
  boss_damage?: string; // 보스 데미지 증가 (%)
  ignore_monster_armor?: string; // 방어율 무시 (%)
  all_stat?: string; // 올스탯 (%)
  damage?: string; // 데미지 (%)
  max_hp_rate?: string; // 최대 HP (%)
  max_mp_rate?: string; // 최대 MP (%)
  equipment_level_decrease?: number; // 착용 레벨 감소
  base_equipment_level?: number; // 기본 착용 레벨
}
// 성향
export interface CharacterPropensityResponse {
  date: string | null;
  charisma_level: string;
  sensibility_level: string;
  insight_level: string;
  willingness_level: string;
  handicraft_level: string;
  charm_level: string;
}


// 캐릭터 장비 API 전체 응답 구조

// 장비 한 개의 전체 정보 구조
export interface EquipmentItem {
  item_equipment_part: string; // 장비 부위명
  item_equipment_slot?: string; // 장비 슬롯 위치 (기본 장비)
  equipment_slot?: string; // 장비 슬롯 위치 (프리셋용)
  item_name: string; // 장비 명
  item_icon: string; // 장비 아이콘
  item_description?: string; // 설명
  item_shape_name?: string; // 외형 장비 명
  item_shape_icon?: string; // 외형 아이콘
  item_gender?: string; // 전용 성별

  item_total_option?: OptionStats; // 최종 옵션
  item_base_option?: OptionStats; // 기본 옵션

  potential_option_flag?: string; // 잠재능력 봉인 여부
  additional_potential_option_flag?: string; // 에디셔널 잠재능력 봉인 여부
  potential_option_grade?: string; // 잠재능력 등급
  additional_potential_option_grade?: string; // 에디셔널 잠재 등급

  potential_option_1?: string; // 잠재능력 1줄
  potential_option_2?: string;
  potential_option_3?: string;
  additional_potential_option_1?: string; // 에디셔널 1줄
  additional_potential_option_2?: string;
  additional_potential_option_3?: string;

  equipment_level_increase?: number; // 착용 레벨 증가

  item_exceptional_option?: OptionStats & { exceptional_upgrade?: number }; // 익셉셔널 강화 정보
  item_add_option?: OptionStats; // 추가 옵션
  item_etc_option?: OptionStats; // 기타 옵션
  item_starforce_option?: OptionStats; // 스타포스 옵션

  growth_exp?: number; // 성장 경험치
  growth_level?: number; // 성장 레벨

  scroll_upgrade?: string; // 주문서 사용 횟수
  cuttable_count?: string; // 가위 사용 가능 횟수
  golden_hammer_flag?: string; // 황금 망치 적용 여부
  scroll_resilience_count?: string; // 복구 가능 횟수
  scroll_upgradeable_count?: string; // 주문서 잔여 횟수

  soul_name?: string; // 소울 이름
  soul_option?: string; // 소울 옵션

  starforce?: string; // 강화 단계 (별 갯수)
  starforce_scroll_flag?: string; // 놀장강 사용 여부

  special_ring_level?: number; // 특수 반지 레벨

  date_expire?: string; // 유효 기간
  freestyle_flag?: string; // 프리스타일 쿠폰 적용 여부
}
export interface CharacterEquipmentResponse {
  date: string; // 조회 기준일 (KST)
  character_gender: string; // 성별
  character_class: string; // 직업
  preset_no: number; // 현재 적용된 프리셋 번호

  item_equipment: EquipmentItem[]; // 현재 장착 장비 목록
  item_equipment_preset_1: EquipmentItem[]; // 1번 프리셋 장비
  item_equipment_preset_2: EquipmentItem[]; // 2번 프리셋 장비
  item_equipment_preset_3: EquipmentItem[]; // 3번 프리셋 장비

  title?: {
    title_name: string; // 칭호 명
    title_icon: string; // 칭호 아이콘
    title_description: string; // 칭호 설명
    date_expire: string | null; // 칭호 유효기간
    date_option_expire: string | null; // 옵션 유효기간
    title_shape_name: string; // 외형 등록 칭호 이름
    title_shape_icon: string;
    title_shape_description: string;
  };

  medal_shape?: {
    medal_shape_name: string; // 훈장 이름
    medal_shape_icon: string;
    medal_shape_description: string;
    medal_shape_changed_name: string; // 모루 적용 훈장 이름
    medal_shape_changed_icon: string;
    medal_shape_changed_description: string;
  };

  dragon_equipment?: EquipmentItem[]; // 에반 전용 드래곤 장비
  mechanic_equipment?: EquipmentItem[]; // 메카닉 전용 장비
}