import { Box, Typography, styled } from "@mui/material";
const BalanceText = styled(Typography)`
  font-size: 25px;
  margin-bottom: 20px;
`;
const Balance = () => {
  return (
    <Box>
      <Typography>Balance:100</Typography>
    </Box>
  );
};
export default Balance;
