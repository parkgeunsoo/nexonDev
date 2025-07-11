import { Stack } from '@mui/material';
import Profile from './Profile';
import { useParams } from 'react-router-dom';


const CharacterDetail = () => {

  const { ocid } = useParams();
  console.log(ocid)
  return (
    <Stack>
      <Profile />
    </Stack>
  );
};

export default CharacterDetail;



// 1. 데이터는 최상위에서 한 번만 요청해라
// CharacterDetail이 ocid를 가지고 있다면,

// getCharacterBasic(ocid)도 여기서 한 번만 호출하는 게 맞음

// ❌ Profile 컴포넌트 안에서 API 다시 부르면 "중복 요청"이 됨

// 2. 필요한 데이터만 Profile로 props로 넘겨라
// getCharacterBasic() 결과 중에서
// 사진, 월드, 닉네임, 직업만 props로 넘겨주기

// 👉 const { image, name, class, world } = data → 이 중 필요한 것만 Profile한테 주기