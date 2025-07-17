import { Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import type { CharacterPropencity } from '../types/nexon'
import { getCharacterPropencity } from "../api/nexon";

const CharacterBasicPropensity = () => {
  const {ocid} = useParams<{ocid: string}>();
  const [propensity, setPropensity] = useState<CharacterPropencity | null>(null);


  useEffect(() => {
    if (!ocid) return;

    const fetchPropencity = async () => {
      try {
        const res = await getCharacterPropencity(ocid);
        setPropensity(res);
        console.log("res", res);
      } catch (error) {
        console.error(error)
      }
    }
    
    fetchPropencity();
  }, [ocid])
  return (
    <Stack px={2} mb={4}>
      {propensity && (
        <Stack direction={"column"} spacing={4}>
          <Stack>
            <Typography
              variant="body2"
              sx={{
                paddingBottom: 0.8,
                borderBottom: "1px solid #666",
                mb: 1,
              }}>
              카리스마
            </Typography>
            <Stack direction="row" sx={{ width: "100%" }} mb={0.5}>
              <Typography
                variant="subtitle1"
                sx={{ width: "35%", color: "#999" }}>
                레벨
              </Typography>
              <Typography variant="subtitle1" sx={{ width: "65%" }}>
                Lv.{propensity.charisma_level}
              </Typography>
            </Stack>
            <Stack direction="row" sx={{ width: "100%" }} mb={0.5}>
              <Typography
                variant="subtitle1"
                sx={{ width: "35%", color: "#999" }}>
                오늘 획득치
              </Typography>
              <Typography variant="subtitle1" sx={{ width: "65%" }}>
                0 / 500
              </Typography>
            </Stack>
          </Stack>
          <Stack>
            <Typography
              variant="body2"
              sx={{
                paddingBottom: 0.8,
                borderBottom: "1px solid #666",
                mb: 1,
              }}>
              감성
            </Typography>
            <Stack direction="row" sx={{ width: "100%" }} mb={0.5}>
              <Typography
                variant="subtitle1"
                sx={{ width: "35%", color: "#999" }}>
                레벨
              </Typography>
              <Typography variant="subtitle1" sx={{ width: "65%" }}>
                Lv.{propensity.sensibility_level}
              </Typography>
            </Stack>
            <Stack direction="row" sx={{ width: "100%" }} mb={0.5}>
              <Typography
                variant="subtitle1"
                sx={{ width: "35%", color: "#999" }}>
                오늘 획득치
              </Typography>
              <Typography variant="subtitle1" sx={{ width: "65%" }}>
                0 / 500
              </Typography>
            </Stack>
          </Stack>
          <Stack>
            <Typography
              variant="body2"
              sx={{
                paddingBottom: 0.8,
                borderBottom: "1px solid #666",
                mb: 1,
              }}>
              통찰력
            </Typography>
            <Stack direction="row" sx={{ width: "100%" }} mb={0.5}>
              <Typography
                variant="subtitle1"
                sx={{ width: "35%", color: "#999" }}>
                레벨
              </Typography>
              <Typography variant="subtitle1" sx={{ width: "65%" }}>
                Lv.{propensity.insight_level}
              </Typography>
            </Stack>
            <Stack direction="row" sx={{ width: "100%" }} mb={0.5}>
              <Typography
                variant="subtitle1"
                sx={{ width: "35%", color: "#999" }}>
                오늘 획득치
              </Typography>
              <Typography variant="subtitle1" sx={{ width: "65%" }}>
                0 / 500
              </Typography>
            </Stack>
          </Stack>
          <Stack>
            <Typography
              variant="body2"
              sx={{
                paddingBottom: 0.8,
                borderBottom: "1px solid #666",
                mb: 1,
              }}>
              의지
            </Typography>
            <Stack direction="row" sx={{ width: "100%" }} mb={0.5}>
              <Typography
                variant="subtitle1"
                sx={{ width: "35%", color: "#999" }}>
                레벨
              </Typography>
              <Typography variant="subtitle1" sx={{ width: "65%" }}>
                Lv.{propensity.willingness_level}
              </Typography>
            </Stack>
            <Stack direction="row" sx={{ width: "100%" }} mb={0.5}>
              <Typography
                variant="subtitle1"
                sx={{ width: "35%", color: "#999" }}>
                오늘 획득치
              </Typography>
              <Typography variant="subtitle1" sx={{ width: "65%" }}>
                0 / 500
              </Typography>
            </Stack>
          </Stack>
          <Stack>
            <Typography
              variant="body2"
              sx={{
                paddingBottom: 0.8,
                borderBottom: "1px solid #666",
                mb: 1,
              }}>
              손재주
            </Typography>
            <Stack direction="row" sx={{ width: "100%" }} mb={0.5}>
              <Typography
                variant="subtitle1"
                sx={{ width: "35%", color: "#999" }}>
                레벨
              </Typography>
              <Typography variant="subtitle1" sx={{ width: "65%" }}>
                Lv.{propensity.handicraft_level}
              </Typography>
            </Stack>
            <Stack direction="row" sx={{ width: "100%" }} mb={0.5}>
              <Typography
                variant="subtitle1"
                sx={{ width: "35%", color: "#999" }}>
                오늘 획득치
              </Typography>
              <Typography variant="subtitle1" sx={{ width: "65%" }}>
                0 / 500
              </Typography>
            </Stack>
          </Stack>
          <Stack>
            <Typography
              variant="body2"
              sx={{
                paddingBottom: 0.8,
                borderBottom: "1px solid #666",
                mb: 1,
              }}>
              매력
            </Typography>
            <Stack direction="row" sx={{ width: "100%" }} mb={0.5}>
              <Typography
                variant="subtitle1"
                sx={{ width: "35%", color: "#999" }}>
                레벨
              </Typography>
              <Typography variant="subtitle1" sx={{ width: "65%" }}>
                Lv.{propensity.charm_level}
              </Typography>
            </Stack>
            <Stack direction="row" sx={{ width: "100%" }} mb={0.5}>
              <Typography
                variant="subtitle1"
                sx={{ width: "35%", color: "#999" }}>
                오늘 획득치
              </Typography>
              <Typography variant="subtitle1" sx={{ width: "65%" }}>
                0 / 500
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      )}
    </Stack>
  );
};

export default CharacterBasicPropensity;