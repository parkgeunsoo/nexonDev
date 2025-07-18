import React, { useEffect, useState } from "react";
import type { EquipmentItem } from "../types/nexon";
import { Box, Stack, Typography } from "@mui/material";

type Props = {
  freeset: EquipmentItem[];
};

const EquimentFreeset3 = ({ freeset }: Props) => {
  // useEffect(() => {
  //   const [test1, setTest1] = useState<Props>();
  //   setTest1(freeset);
  //   console.log(test1)
  // }, [])

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
          <Stack alignItems={"start"}>
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
        </Stack>
      ))}
    </>
  );
};

export default EquimentFreeset3;
