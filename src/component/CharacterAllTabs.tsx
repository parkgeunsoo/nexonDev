import { Box, Tabs, Tab } from "@mui/material";
import { useState } from "react";
import CharacterBasicTabs from "./CharacterBasicTabs";
import type { ProfileType } from "../types/componentTypes";

import type { TabPanelProps } from "../types/componentTypes";
import CharacterEquipmentTabs from "./CharacterEquipmentTabs";

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const CharacterAllTabs = ({ profile }: { profile: ProfileType | null }) => {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", px: 2 }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs"
          sx={{
            "& .MuiTabs-list": {
              flexFlow: "wrap",
              gap: 1.5,
            },
            "& .MuiTabs-indicator": {
              bgcolor: "transparent",
            },
            "& .MuiButtonBase-root": {
              minWidth: "auto",
              backgroundColor: "#222",
              borderRadius: "32px",
              padding: "6px 12px",
              minHeight: "auto",
              height: " auto",
              maxWidth: "100%",
            },
          }}>
          <Tab label="기본정보" />
          <Tab label="장비" />
          <Tab label="캐시" />
          <Tab label="인벤토리" />
          <Tab label="스킬" />
          <Tab label="펫" />
          <Tab label="길드" />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <CharacterBasicTabs profile={profile} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <CharacterEquipmentTabs />
      </CustomTabPanel>
    </Box>
  );
};

export default CharacterAllTabs;
