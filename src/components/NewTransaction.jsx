import { Box, Typography, TextField, Button, styled } from "@mui/material";
const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  & > h5 & > div & > Button {
    margin-top: 50px;
  }
`;
const NewTransaction = () => {
  return (
    <Box>
      <Typography variant="h5">New Transcation</Typography>
      <TextField label="Enter Expense" />
      <TextField label="Enter Amount" />
      <Button variant="contained">Add Transcation</Button>
    </Box>
  );
};
export default NewTransaction;
