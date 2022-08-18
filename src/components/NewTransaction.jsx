import { useState } from "react";
import { Box, Typography, TextField, Button, styled } from "@mui/material";
const Container = styled(Box)`
  display: flex;

  flex-direction: column;
  & > h5 & > div & > Button {
    margin-top: 50px;
  }
`;
const NewTransaction = ({ setTransactions }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState();
  const addTransaction = () => {
    const transaction = {
      id: Math.floor(Math.random() * 1000000),
      text: text,
      amount: +amount,
    };
    setTransactions((prevState) => [transaction, ...prevState]);
  };
  return (
    <Container>
      <Typography variant="h5">New Transcation</Typography>
      <TextField
        label="Enter Expense"
        onChange={(e) => setText(e.target.value)}
      />
      <TextField
        label="Enter Amount"
        onChange={(e) => setAmount(e.target.value)}
      />
      <Button variant="contained" onClick={() => addTransaction()}>
        Add Transcation
      </Button>
    </Container>
  );
};
export default NewTransaction;
