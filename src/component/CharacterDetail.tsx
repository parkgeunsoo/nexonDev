import { Box, Stack, Typography } from "@mui/material";
import Profile from "./Profile";
import { useParams } from "react-router-dom";
import { use, useEffect, useState } from "react";
import {
  getCharacterStat,
  getCharacterBasic,
  getCharacterHyperStat,
  getCharacterAbility,
  getPopularity,
} from "../api/nexon";
import CustomButton from "./CustomButton";
import PeopleIcon from "@mui/icons-material/People";
import IosShareIcon from "@mui/icons-material/IosShare";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CharacterBasicTabs from "./CharacterBasicTabs";

import type{
  ProfileType,
  StatType,
  HyperStatProps,
  PopularityType,
} from "../types/componentTypes";
import CharacterAllTabs from "./CharacterAllTabs";



const CharacterDetail = () => {
  // tab useState
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const [profile, setProfile] = useState<ProfileType | null>(null);
  const [statList, setStatList] = useState<StatType[]>([]);
  const { ocid } = useParams<{ ocid: string }>();
  const [hyper, setHyper] = useState<HyperStatProps[]>([]);
  const [popularity, setPopularity] = useState<PopularityType | null>(null);
  console.log(ocid);

  useEffect(() => {
    if (!ocid) return;

    // 캐릭터 스텟
    const getStat = async () => {
      try {
        const stat = await getCharacterStat(ocid);
        const basic = await getCharacterBasic(ocid);
        console.log(stat);
        const data = {
          character_image: basic.character_image,
          character_name: basic.character_name,
          character_class: basic.character_class,
          world_name: basic.world_name,
          character_level: basic.character_level.toString(),
          character_guild_name: basic.character_guild_name,
        };
        setProfile(data);
        setStatList(stat.final_stat);
        console.log(profile);
      } catch (error) {
        console.error(error);
      }
    };
    // 하이퍼스텟
    const fetchHyper = async () => {
      try {
        const res = await getCharacterHyperStat(ocid);
        const preset1 = res.hyper_stat_preset_1;

        const converted = preset1.map((item) => ({
          ...item,
          use_preset_no: "1", // 고정
        }));
        setHyper(converted);
        console.log(converted);
      } catch (error) {
        console.error(error);
      }
    };
    // 인기도
    const fetchPopularity = async () => {
      try {
        const res = await getPopularity(ocid);
        setPopularity(res);
        console.log(res);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPopularity();
    getStat(); // 캐릭터 스텟
    fetchHyper(); // 하이퍼스탯

    console.log("CharacterDetail 마운트됨");
  }, [ocid]);

  return (
    <Stack>
      <Stack>
        <Profile profile={profile} />
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          spacing={2}
          padding={2}>
          <CustomButton
            sx={{
              bgcolor: "transparent",
              border: "1px solid #666",
              width: "100%",
              padding: "3px 10px",
              borderRadius: 36,
              fontWeight: 400,
              color: "#999",
            }}>
            <PeopleIcon sx={{ mr: 1, width: "18px" }} /> 친구/길드원
          </CustomButton>
          <CustomButton
            sx={{
              bgcolor: "transparent",
              border: "1px solid #666",
              width: "100%",
              padding: "3px 10px",
              borderRadius: 36,
              fontWeight: 400,
              color: "#999",
              fontSize: 14,
            }}>
            <IosShareIcon sx={{ mr: 1, width: "18px" }} />
            공유/저장
          </CustomButton>
        </Stack>
      </Stack>
      <CharacterAllTabs />
      <CharacterBasicTabs
        profile={profile}
        popularity={popularity}
        statList={statList}
        hyper={hyper}
      />
    </Stack>
  );
};

export default CharacterDetail;

{
  /* <Stack>
  <CharacterBasicInfo
    profile={profile}
    popularity={popularity}
    statList={statList}
    hyper={hyper}
  />
</Stack>; */
}

// 1. 데이터는 최상위에서 한 번만 요청해라
// CharacterDetail이 ocid를 가지고 있다면,

// getCharacterBasic(ocid)도 여기서 한 번만 호출하는 게 맞음

// ❌ Profile 컴포넌트 안에서 API 다시 부르면 "중복 요청"이 됨

// 2. 필요한 데이터만 Profile로 props로 넘겨라
// getCharacterBasic() 결과 중에서
// 사진, 월드, 닉네임, 직업만 props로 넘겨주기

// 👉 const { image, name, class, world } = data → 이 중 필요한 것만 Profile한테 주기
