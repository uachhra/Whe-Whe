import React, { useState } from 'react';
import './App.css';
import UserInputComponent from './components/userData';
import SummaryComponent from './components/popUpMsg';

const MAX_SELECTIONS = 5;
const MAX_TOKENS = 20;

function App() {

  const [tokens, setTokens] = useState([...defaultTokens]);
  const [cashEnabled, setCashEnabled] = useState(false);
  const [cash, setCash] = useState(0);

  const onClearClicked = () => {
    console.log('Setting Defaults');
    const defaults = tokens.map(t => ({
      ...t,
      selected: false
    }))
    setTokens(defaults);
    clearCash();
  }

  const clearCash = () => {
    setCash(0);
    setCashEnabled(false);
  }

  const onCashButtonPressed = (value = 0) => {
    if (cashEnabled) {
      const updatedCash = cash + value;
      setCash(updatedCash);
    } else {
      alert('User cannot bet with less than 5 numbers.');
    }
  }

  const onCashSummaryClicked = () => {
    const selectedNumbers = tokens.filter(t => t.selected).map(t => t.value).join(', ');
    alert(`You are playing for $${cash} And, your selected numbers are: ${selectedNumbers}`);
  }

  const toggleTokenSelection = (token) => {
    if (!token.selected) {
      if (canSelectTokens(tokens)) {
        const updatedTokens = toggleSelection(token, tokens);
        setTokens(updatedTokens);
        if (!canSelectTokens(tokens)) {
          setCashEnabled(true);
        }
      } else {
        alert('You can only select 5 numbers');
      }
    } else {
      const updatedTokens = toggleSelection(token, tokens);
      setTokens(updatedTokens);
      clearCash();
    }
  }

  const randomNumbers = () => {
    const RANDOM_NUMBER_COUNT = 5;
    const randomNumbers = [];
    while (randomNumbers.length < RANDOM_NUMBER_COUNT) {
      let r = Math.floor(Math.random() * MAX_TOKENS) + 1;
      if (randomNumbers.indexOf(r) === -1) randomNumbers.push(r);
    }
    setTokens(tokens.map(({ value }) => ({
      value,
      selected: randomNumbers.includes(value)
    })));
    
    setCashEnabled(true);
  }

  return (
    <div className="container">
      <div className="row">
        <UserInputComponent tokens={tokens}
          toggleTokenSelection={toggleTokenSelection}
          onCashButtonPressed={onCashButtonPressed}
          onClearClicked={onClearClicked}
          onCashSummaryClicked={onCashSummaryClicked}
          onRandomButtonClicked={randomNumbers}
          cashEnabled={cashEnabled} />

        <SummaryComponent tokens={tokens.filter(t => t.selected)} cash={cash} />

      </div>
    </div>
  );
}

const defaultTokens = [...Array(20).keys()].map(v => ({
  value: v + 1,
  selected: false
}));

const canSelectTokens = (tokens = []) => {
  return tokens.filter(t => t.selected).length < MAX_SELECTIONS;
}

const toggleSelection = (token, tokens = []) => {
  const { value, selected } = token;
  const updatedTokens = [...tokens];
  const tempToken = updatedTokens.find(t => t.value === value);
  tempToken.selected = !selected;
  return updatedTokens;
}

export default App;
