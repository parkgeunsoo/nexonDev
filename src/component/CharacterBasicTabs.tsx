import { Box, Tabs, Tab } from "@mui/material";
import { useState } from "react";
import CharacterBasicInfo from "./CharacterBasicInfo";
import CharacterBasicPropensity from "./CharacterBasicPropensity";
import type { ProfileType } from "../types/componentTypes";

import type { TabPanelProps } from "../types/componentTypes";

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

const CharacterBasicTabs = ({ profile }: { profile: ProfileType | null }) => {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs"
          sx={{ "& .MuiTabs-indicator": { bgcolor: "transparent" } }}>
          <Tab label="기본/스탯" sx={{ width: "33.3%" }} />
          <Tab label="성향" sx={{ width: "33.3%" }} />
          <Tab label="기타" sx={{ width: "33.3%" }} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <CharacterBasicInfo profile={profile} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <CharacterBasicPropensity />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}></CustomTabPanel>
    </Box>
  );
};

export default CharacterBasicTabs;
