import { Box, Stack, Typography } from "@mui/material";
import Profile from "./Profile";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  getCharacterBasic,
} from "../api/nexon";
import CustomButton from "./CustomButton";
import PeopleIcon from "@mui/icons-material/People";
import IosShareIcon from "@mui/icons-material/IosShare";
import CharacterAllTabs from "./CharacterAllTabs";

import type { ProfileType } from "../types/componentTypes";

const CharacterDetail = () => {
  const [profile, setProfile] = useState<ProfileType | null>(null);
  const { ocid } = useParams<{ ocid: string }>();

  useEffect(() => {
    if (!ocid) return;

    const fetchBasic = async () => {
      try {
        const basic = await getCharacterBasic(ocid);
        const data = {
          character_image: basic.character_image,
          character_name: basic.character_name,
          character_class: basic.character_class,
          world_name: basic.world_name,
          character_level: basic.character_level.toString(),
          character_guild_name: basic.character_guild_name,
        };
        setProfile(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBasic();
  }, [ocid]);

  return (
    <Stack>
      <Stack>
        <Profile profile={profile} />
        <Stack direction="row" alignItems="center" justifyContent="center" spacing={2} padding={2}>
          <CustomButton
            sx={{ bgcolor: "transparent", border: "1px solid #666", width: "100%", padding: "3px 10px", borderRadius: 36, fontWeight: 400, color: "#999" }}>
            <PeopleIcon sx={{ mr: 1, width: "18px" }} /> 친구/길드원
          </CustomButton>
          <CustomButton
            sx={{ bgcolor: "transparent", border: "1px solid #666", width: "100%", padding: "3px 10px", borderRadius: 36, fontWeight: 400, color: "#999", fontSize: 14 }}>
            <IosShareIcon sx={{ mr: 1, width: "18px" }} /> 공유/저장
          </CustomButton>
        </Stack>
      </Stack>
      <CharacterAllTabs profile={profile} />
    </Stack>
  );
};

export default CharacterDetail;