import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Typography, styled, Box } from "@mui/material";
//components
import Balance from "./components/Balance";
import ExpenseCard from "./components/ExpenseCard";
import NewTransaction from "./components/NewTransaction";
import Transactions from "./components/Transactions";
const Header = styled(Typography)`
  font-size: 36px;
  color: blue;
  text-transform: uppercase;
`;
const Component = styled(Box)`
  display: flex;
  background: white;
  width: 800px;
  padding: 10px;
  border-radius: 20px;
  margin: auto;
  & > div {
    height: 70vh;
    width: 50%;
    padding: 10px;
  }
`;

function App() {
  const [transactions, setTranscations] = useState([
    { id: 1, text: "momos", amount: -20 },
    { id: 2, text: "Salary", amount: 3000 },
    { id: 3, text: "Book", amount: -100 },
    { id: 4, text: "Bonus", amount: 1500 },
  ]);
  return (
    <Box className="App">
      <Header>Expense Tracker</Header>
      <Component>
        <Box>
          <Balance />
          <ExpenseCard />
          <NewTransaction />
        </Box>
        <Box>
          <Transactions transactions={transactions} />
        </Box>
      </Component>
    </Box>
  );
}

export default App;
