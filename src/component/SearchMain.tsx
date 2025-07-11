import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Box,
  Grid,
  Stack,
} from "@mui/material";
import { useCharacterSearch } from "../hooks/useCharacterSearch";
import CustomButton from "../component/CustomButton";
import CustomInput from "../component/CustomInput";
import { useNavigate } from "react-router-dom";




interface FormValues {
  name: string;
}

const SearchMain = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const [name, setName] = useState("");
  const { searchInfo, loading, error, ocid } = useCharacterSearch(name);

  const onSubmit = (data: FormValues) => {
    setName(data.name);
  };

  const navigate = useNavigate();
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4, textAlign: "center" }}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          fontWeight={700}
          mb={4}>
          캐릭터 조회
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center">
            <Grid item xs>
              <CustomInput
                fullWidth
                label="캐릭터 닉네임 입력"
                variant="outlined"
                {...register("name")}
              />
            </Grid>
            <Grid item>
              <CustomButton type="submit">검색</CustomButton>
            </Grid>
          </Grid>
        </form>
      </Box>

      {loading && <p>검색 중...</p>}
      {error && <p>{error}</p>}

      {searchInfo && (
        <Card
          sx={{ mt: 4, width: "90%", margin: "0 auto" }}
          onClick={() => navigate(`/detail/${ocid}`)}>
          <Box
            component="img"
            textAlign={"center"}
            sx={{
              width: "150px",
              objectFit: "cover",
              display: "flex",
              margin: "0 auto 20px",
            }}
            src={searchInfo.character_image}
            alt={searchInfo.character_name}
          />
          <CardContent>
            <Stack
              direction="row"
              alignItems={"center"}
              justifyContent="space-between">
              <Stack>
                <Typography gutterBottom variant="h5" component="div">
                  {searchInfo.character_name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {searchInfo.world_name}
                </Typography>
              </Stack>
              <Stack>
                <Typography variant="body2" color="text.secondary">
                  {searchInfo.character_class}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {searchInfo.character_level}
                </Typography>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      )}
    </Container>
  );
};

export default SearchMain;
