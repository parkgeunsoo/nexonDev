import { Stack, Typography } from "@mui/material";

import type { CharacterBasicTabsProps } from "../types/componentTypes";

const CharacterBasicInfo = ({
  profile,
  popularity,
  statList,
  hyper,
}: CharacterBasicTabsProps) => {

  
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

        {profile && (
          <Stack direction="row" sx={{ width: "100%" }} mb={0.5}>
            <Typography
              variant="subtitle1"
              sx={{ width: "45%", color: "#999" }}>
              길드
            </Typography>
            <Typography variant="subtitle1" sx={{ width: "55%" }}>
              {profile.character_guild_name}
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
