import React, { useEffect, useState } from 'react';
import type { EquipmentItem, OptionStats } from "../types/nexon";
import { Box, List, ListItem, Stack, Typography } from '@mui/material';
import Modal from "@mui/material/Modal";

type Props = {
  freeset: EquipmentItem[];
};
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: '100%',
  height: '100%',
  bgcolor: "#000",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
};
const EquimentFreeset1 = ({ freeset }: Props) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = (item: EquipmentItem) => {
    setClickItem(item);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false)
    setClickItem(null);
  }
  const [clickItem, setClickItem] = useState<EquipmentItem | null>(null);
  console.log('123', clickItem);

  const statKeys: (keyof OptionStats)[] = [
    "str",
    "dex",
    "int",
    "luk",
    "max_hp",
    "max_mp",
    "attack_power",
    "magic_power",
    "armor",
    "speed",
    "jump",
    "boss_damage",
    "ignore_monster_armor",
    "all_stat",
    "damage",
    "max_hp_rate",
    "max_mp_rate",
    "equipment_level_decrease",
  ];
  
  const statLabels: Record<string, string> = {
    str: "STR",
    dex: "DEX",
    int: "INT",
    luk: "LUK",
    all_stat: "올스탯",
    max_hp: "MaxHP",
    max_mp: "MaxMP",
    attack_power: "공격력",
    magic_power: "마력",
    armor: "방어력",
    speed: "이동속도",
    jump: "점프력",
    boss_damage: "보스 몬스터 데미지",
    ignore_monster_armor: "몬스터 방어율 무시",
    damage: "데미지",
    max_hp_rate: "MaxHP(%)",
    max_mp_rate: "MaxMP(%)",
    equipment_level_decrease: "착용 레벨 감소",
  };

  const percentageKeys = new Set([
    "boss_damage",
    "ignore_monster_armor",
    "damage",
    "max_hp_rate",
    "max_mp_rate",
    "equipment_level_decrease",
    "all_stat",
  ]);

  const totalStatDetail = (key: keyof OptionStats) => {
    const base = Number(clickItem.item_base_option?.[key] ?? 0);
    const add = Number(clickItem.item_add_option?.[key] ?? 0);
    const etc = Number(clickItem.item_etc_option?.[key] ?? 0);
    const star = Number(clickItem.item_starforce_option?.[key] ?? 0);
    const total = base + add + etc + star;
    return {base, add ,etc, star, total}
  };
  const potentialGradeColors: Record<string, string> = {
    레어: "#7ca8ff",
    에픽: "#b95eff",
    유니크: "#ffe400",
    레전드리: "#00e676",
  };

  return (
    <>
      {freeset.map((item, index) => (
        <Stack
          key={index}
          direction={"row"}
          alignItems={"center"}
          spacing={4}
          py={1.5}
          sx={{ borderBottom: "1px solid #666" }}>
          <Box
            component={"img"}
            src={item.item_icon}
            alt={item.item_description}
            sx={{ width: 45, flexShrink: 0 }}
          />
          <Stack alignItems={"start"} onClick={() => handleOpen(item)}>
            <Typography
              sx={{
                fontSize: 10,
                bgcolor: "#56565c",
                borderRadius: 5,
                display: "inline",
                padding: "1px 6px",
                mb: 0.5,
                color: "#ccc",
              }}>
              {item.starforce}성 강화
            </Typography>
            <Typography sx={{ fontSize: 15 }}>
              {item.item_name} (+{item.scroll_upgrade})
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "#999" }}>
              ({item.potential_option_grade} 아이템) {item.item_equipment_part}
            </Typography>
          </Stack>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box sx={style}>
              {clickItem ? (
                <>
                  <Stack>
                    <Stack justifyContent={"center"}>
                      {/* <Box
                        component={"img"}
                        src={clickItem.item_icon}
                        alt={clickItem.item_description}
                        sx={{
                          width: 100,
                          flexShrink: 0,
                          margin: "0 auto 20px",
                        }}
                      /> */}
                    </Stack>
                    <Stack alignItems={"center"}>
                      <Typography
                        sx={{
                          fontSize: 10,
                          bgcolor: "#56565c",
                          borderRadius: 5,
                          display: "inline",
                          padding: "1px 6px",
                          mb: 0.5,
                          color: "#ccc",
                        }}>
                        {clickItem.starforce}성 강화
                      </Typography>
                      <Typography sx={{ fontSize: 15 }}>
                        {clickItem.item_name} (+{clickItem.scroll_upgrade})
                      </Typography>
                      <Typography variant="subtitle1" sx={{ color: "#999" }}>
                        ({clickItem.potential_option_grade} 아이템)
                        {clickItem.item_equipment_part}
                      </Typography>
                    </Stack>
                    {clickItem.item_base_option && (
                      <Stack
                        sx={{
                          borderBottom: "1px solid #666",
                          py: 1.5,
                          px: 0.5,
                        }}>
                        <Stack direction="row" sx={{ width: "100%" }} mb={0.5}>
                          <Typography
                            variant="subtitle1"
                            sx={{ width: "45%", color: "#999" }}>
                            요구 레벨
                          </Typography>
                          <Typography variant="subtitle1" sx={{ width: "55%" }}>
                            {clickItem.item_base_option.base_equipment_level}
                          </Typography>
                        </Stack>
                      </Stack>
                    )}
                    <Stack
                      sx={{
                        borderBottom: "1px solid #666",
                        py: 1.5,
                        px: 0.5,
                      }}>
                      {clickItem.item_equipment_part && (
                        <Stack direction="row" sx={{ width: "100%" }} mb={0.5}>
                          <Typography
                            variant="subtitle1"
                            sx={{ width: "45%", color: "#999" }}>
                            장비분류
                          </Typography>
                          <Typography variant="subtitle1" sx={{ width: "55%" }}>
                            {clickItem.item_equipment_part}
                          </Typography>
                        </Stack>
                      )}
                      {statKeys.map((key) => {
                        const { base, add, etc, star, total } =
                          totalStatDetail(key);
                        if (total <= 0) return null;

                        const label = statLabels[key] ?? key;
                        const suffix = percentageKeys.has(key) ? "%" : "";

                        const isOnlyBase = add === 0 && etc === 0 && star === 0;

                        const parts: React.ReactNode[] = [
                          <span style={{ color: "#ffffff" }} key="base">
                            {base}
                          </span>,
                        ];
                        if (add > 0)
                          parts.push(
                            <span style={{ color: "#4caf50" }} key="add">
                              +{add}
                            </span>
                          );
                        if (etc > 0)
                          parts.push(
                            <span style={{ color: "#ce93d8" }} key="etc">
                              +{etc}
                            </span>
                          );
                        if (star > 0)
                          parts.push(
                            <span style={{ color: "#ffb300" }} key="star">
                              +{star}
                            </span>
                          );

                        return (
                          <Stack
                            key={key}
                            direction="row"
                            sx={{ width: "100%" }}
                            mb={0.5}>
                            <Typography
                              variant="subtitle1"
                              sx={{
                                width: "45%",
                                color: isOnlyBase ? "#999" : "#4dabf7",
                              }}>
                              {label}
                            </Typography>
                            <Typography
                              variant="subtitle1"
                              sx={{
                                width: "55%",
                                color: isOnlyBase ? "#ffffff" : "#4dabf7",
                              }}>
                              +{total}
                              {suffix}
                              {parts.length > 1 && (
                                <span style={{ marginLeft: 4, color: "#fff" }}>
                                  (
                                  {parts.map((part, idx) => (
                                    <React.Fragment key={idx}>
                                      {idx > 0 && ""}
                                      {part}
                                    </React.Fragment>
                                  ))}
                                  )
                                </span>
                              )}
                            </Typography>
                          </Stack>
                        );
                      })}
                      <Stack direction="row" sx={{ width: "100%" }} mb={0.5}>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            width: "45%",
                          }}>
                          주문서 잔여 횟수
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            width: "55%",
                          }}>
                          {clickItem.scroll_upgradeable_count}
                        </Typography>
                      </Stack>
                    </Stack>
                    <Stack
                      sx={{
                        borderBottom: "1px solid #666",
                        py: 1.5,
                        px: 0.5,
                      }}>
                      <Stack
                        direction="row"
                        alignItems={"center"}
                        sx={{ width: "100%" }}
                        mb={0.5}>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            width: "45%",
                            color:
                              potentialGradeColors[clickItem.potential_option_grade ?? ''] || "#ccc",
                          }}>
                          잠재옵션
                          <br />({clickItem.potential_option_grade} 아이템)
                        </Typography>
                        <Typography variant="subtitle1" sx={{ width: "55%" }}>
                          <List>
                            <ListItem>{clickItem.potential_option_1}</ListItem>
                            <ListItem>{clickItem.potential_option_2}</ListItem>
                            <ListItem>{clickItem.potential_option_3}</ListItem>
                          </List>
                        </Typography>
                      </Stack>
                    </Stack>
                    <Stack
                      sx={{
                        borderBottom: "1px solid #666",
                        py: 1.5,
                        px: 0.5,
                      }}>
                      <Stack
                        direction="row"
                        alignItems={"center"}
                        sx={{ width: "100%" }}
                        mb={0.5}>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            width: "45%",
                            color:
                              potentialGradeColors[
                                clickItem.additional_potential_option_grade ?? ''
                              ] || "#ccc",
                          }}>
                          에디셔널 잠재옵션
                          <br />({clickItem.additional_potential_option_grade}
                          아이템)
                        </Typography>
                        <Typography variant="subtitle1" sx={{ width: "55%" }}>
                          <List>
                            <ListItem>
                              {clickItem.additional_potential_option_1}
                            </ListItem>
                            <ListItem>
                              {clickItem.additional_potential_option_2}
                            </ListItem>
                            <ListItem>
                              {clickItem.additional_potential_option_3}
                            </ListItem>
                          </List>
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                </>
              ) : (
                <Typography>로딩 중...</Typography>
              )}
            </Box>
          </Modal>
        </Stack>
      ))}
    </>
  );
};

export default EquimentFreeset1;