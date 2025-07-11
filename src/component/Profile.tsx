import { Box, Stack, Typography } from "@mui/material";

const Profile = () => {
  return (
    <Stack direction={'row'} alignItems={'center'} gap={2}>
      <Box component={"img"} src={""} alt={""} sx={{border:'1px solid #000', borderRadius: '50%', width: 64, height: 64}} />
      <Stack>
        <Typography>닉네임</Typography>
        <Stack direction={'row'} gap={2}>
          <Typography>Lv.123</Typography>
          <Typography>월드</Typography>
          <Typography>직업</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Profile;