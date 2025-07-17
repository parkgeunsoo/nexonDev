import { Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  getCharacterStat,
  getCharacterHyperStat,
  getPopularity,
} from "../api/nexon";
import type {
  ProfileType,
  StatType,
  HyperStatProps,
  PopularityType,
} from "../types/componentTypes";

interface Props {
  profile: ProfileType | null;
}

const CharacterBasicInfo = ({ profile }: Props) => {
  const { ocid } = useParams<{ ocid: string }>();

  const [statList, setStatList] = useState<StatType[]>([]);
  const [hyper, setHyper] = useState<HyperStatProps[]>([]);
  const [popularity, setPopularity] = useState<PopularityType | null>(null);

  useEffect(() => {
    if (!ocid) return;

    const fetchStat = async () => {
      try {
        const statRes = await getCharacterStat(ocid);
        setStatList(statRes.final_stat);
      } catch (err) {
        console.error("Stat 불러오기 실패", err);
      }
    };

    const fetchHyper = async () => {
      try {
        const hyperRes = await getCharacterHyperStat(ocid);
        const preset1 = hyperRes.hyper_stat_preset_1;
        const converted = preset1.map((item) => ({
          ...item,
          use_preset_no: "1",
        }));
        setHyper(converted);
      } catch (err) {
        console.error("하이퍼스탯 불러오기 실패", err);
      }
    };

    const fetchPopularity = async () => {
      try {
        const popRes = await getPopularity(ocid);
        setPopularity(popRes);
      } catch (err) {
        console.error("인기도 불러오기 실패", err);
      }
    };

    fetchStat();
    fetchHyper();
    fetchPopularity();
  }, [ocid]);

  return (
    <>
      <Stack px={2} mb={4}>
        <Typography
          variant="body2"
          sx={{ paddingBottom: 0.8, borderBottom: "1px solid #666", mb: 1 }}>
          기본
        </Typography>

        {profile && (
          <>
            <Stack direction="row" sx={{ width: "100%" }} mb={0.5}>
              <Typography
                variant="subtitle1"
                sx={{ width: "45%", color: "#999" }}>
                월드
              </Typography>
              <Typography variant="subtitle1" sx={{ width: "55%" }}>
                {profile.world_name}
              </Typography>
            </Stack>
            <Stack direction="row" sx={{ width: "100%" }} mb={0.5}>
              <Typography
                variant="subtitle1"
                sx={{ width: "45%", color: "#999" }}>
                직업
              </Typography>
              <Typography variant="subtitle1" sx={{ width: "55%" }}>
                {profile.character_class}
              </Typography>
            </Stack>
            <Stack direction="row" sx={{ width: "100%" }} mb={0.5}>
              <Typography
                variant="subtitle1"
                sx={{ width: "45%", color: "#999" }}>
                길드
              </Typography>
              <Typography variant="subtitle1" sx={{ width: "55%" }}>
                {profile.character_guild_name || "-"}
              </Typography>
            </Stack>
          </>
        )}

        {popularity && (
          <Stack direction="row" sx={{ width: "100%" }} mb={0.5}>
            <Typography
              variant="subtitle1"
              sx={{ width: "45%", color: "#999" }}>
              인기도
            </Typography>
            <Typography variant="subtitle1" sx={{ width: "55%" }}>
              {popularity.popularity}
            </Typography>
          </Stack>
        )}
      </Stack>

      <Stack px={2}>
        <Typography
          variant="body2"
          sx={{ paddingBottom: 0.8, borderBottom: "1px solid #666", mb: 1 }}>
          스탯
        </Typography>

        {statList.map((item, index) => (
          <Stack key={index} direction="row" sx={{ width: "100%" }} mb={0.5}>
            <Typography
              variant="subtitle1"
              sx={{ width: "45%", color: "#999" }}>
              {item.stat_name}
            </Typography>
            <Typography variant="subtitle1" sx={{ width: "55%" }}>
              {item.stat_value}
            </Typography>
          </Stack>
        ))}

        <Stack direction="row" sx={{ width: "100%" }} mb={0.5}>
          <Typography variant="subtitle1" sx={{ width: "45%", color: "#999" }}>
            하이퍼스탯
          </Typography>
          <Stack sx={{ width: "55%" }}>
            {hyper.map((item, index) =>
              item.stat_level === 0 ? null : (
                <Stack key={index} sx={{ fontSize: 14 }}>
                  {item.stat_type}(Lv.{item.stat_level})
                  <Typography sx={{ fontSize: 14 }}>
                    {item.stat_increase}
                  </Typography>
                </Stack>
              )
            )}
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default CharacterBasicInfo;
