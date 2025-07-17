// 프로필 정보 넘길 props
export interface ProfileType {
  character_image: string;
  character_name: string;
  character_class: string;
  world_name: string;
  character_level: string;
  character_guild_name?: string;
}

// 캐릭터 스텟
export interface StatType {
  stat_name: string;
  stat_value: string | number;
}

// 하이퍼스텟
export interface HyperStatProps {
  use_preset_no: string;
  stat_type: string;
  stat_point: number; // 투자한 포인트 수
  stat_level: number; // 해당 스탯 레벨
  stat_increase: string;
}

// 인기도
export interface PopularityType {
  date?: string | null;
  popularity: number;
}

// 공통으로 받아서 쓴 프로필,인기도,스탯, 하이퍼스탯 타입 props
export interface CharacterBasicTabsProps {
  profile: ProfileType | null;
  popularity: PopularityType | null;
  statList: StatType[];
  hyper: HyperStatProps[];
}

// 탭버튼 컴포넌트
export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
