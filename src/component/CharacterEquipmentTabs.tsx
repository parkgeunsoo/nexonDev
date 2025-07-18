import React, { useEffect, useState } from 'react';
import { Box, Tabs, Tab } from "@mui/material";
import type { TabPanelProps } from "../types/componentTypes";
import { useParams } from 'react-router-dom';

import type { EquipmentItem, CharacterEquipmentResponse } from "../types/nexon";
import { getCharacterEquipment} from "../api/nexon";
import EquimentFreeset1 from './EquimentFreeset1';
import EquimentFreeset2 from "./EquimentFreeset2";
import EquimentFreeset3 from "./EquimentFreeset3";

interface EquimentType {
  item_equipment_preset_1: EquipmentItem[];
  item_equipment_preset_2: EquipmentItem[];
  item_equipment_preset_3: EquipmentItem[];
}
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


const CharacterEquipmentTabs = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const { ocid } = useParams<{ ocid: string }>();
  
  const [freeset1, setFreeset1] = useState<EquipmentItem[]>([]);
  const [freeset2, setFreeset2] = useState<EquipmentItem[]>([]);
  const [freeset3, setFreeset3] = useState<EquipmentItem[]>([]);


  useEffect(() => {
    if (!ocid) return;

    const fetchEquipmentLise = async () => {
      try {
        const data = await getCharacterEquipment(ocid);
        setFreeset1(data.item_equipment_preset_1);
        setFreeset2(data.item_equipment_preset_2);
        setFreeset3(data.item_equipment_preset_3);
        console.log(data)
      } catch (error) {
        console.error(error);
      }
    }
    fetchEquipmentLise();
  }, [ocid])
  

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs"
          sx={{ "& .MuiTabs-indicator": { bgcolor: "transparent" } }}>
          <Tab label="프리셋1" sx={{ width: "25%" }} />
          <Tab label="프리셋2" sx={{ width: "25%" }} />
          <Tab label="프리셋3" sx={{ width: "25%" }} />
          <Tab label="심볼" sx={{ width: "25%" }} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <EquimentFreeset1 freeset={freeset1} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <EquimentFreeset2 freeset={freeset2} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <EquimentFreeset3 freeset={freeset3} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}></CustomTabPanel>
    </Box>
  );
};

export default CharacterEquipmentTabs;