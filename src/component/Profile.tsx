import { Box, Stack, Typography } from "@mui/material";

interface InfoProps {
  character_image: string;
  character_name: string;
  character_class: string;
  world_name: string;
  character_level: string;
}

const Profile = ({ profile }: { profile: InfoProps | null }) => {
  if (!profile) return null;

  return (
    <Stack direction="row" alignItems="center" gap={2} p={2}>
      <Box
        component="img"
        // src={profile.character_image} // ✅ 실제 이미지 연결
        alt={profile.character_image}
        sx={{
          borderRadius: "50%",
          width: 76,
          height: 76,
          bgcolor: "#2C2C2F",
        }}
      />
      <Stack>
        <Typography variant="body1" mb={1}>
          {profile.character_name}
        </Typography>
        <Stack direction="row" alignItems={"center"} gap={2}>
          <Typography variant="subtitle1" color="#B5B5BD" lineHeight={1}>
            Lv.{profile.character_level}
          </Typography>
          <Typography color="#B5B5BD" sx={{ fontSize: 12 }} lineHeight={1}>
            |
          </Typography>
          <Typography variant="subtitle1" color="#B5B5BD" lineHeight={1}>
            {profile.world_name}
          </Typography>
          <Typography color="#B5B5BD" sx={{ fontSize: 12 }} lineHeight={1}>
            |
          </Typography>
          <Typography variant="subtitle1" color="#B5B5BD" lineHeight={1}>
            {profile.character_class}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Profile;