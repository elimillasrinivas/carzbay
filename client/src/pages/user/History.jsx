import React from 'react';
import styled from 'styled-components';

const HistoryContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const HistoryHeader = styled.h2`
  color: #1e0c60;
`;

const HistoryList = styled.ul`
  list-style: none;
  padding: 0;
`;

const HistoryItem = styled.li`
  margin-bottom: 10px;
`;

const DateLabel = styled.strong`
  display: block;
  color: #1e0c60;
  margin-bottom: 5px;
`;

const ActionLabel = styled.strong`
  color: #1e0c60;
`;

const History = ({ userHistory }) => {
  return (
    <HistoryContainer>
      <HistoryHeader>History</HistoryHeader>
      <HistoryList>
        {userHistory.map((item, index) => (
          <HistoryItem key={index}>
            <DateLabel>Date: {item.date}</DateLabel>
            <ActionLabel>Action: {item.action}</ActionLabel>
          </HistoryItem>
        ))}
      </HistoryList>
    </HistoryContainer>
  );
};

export default History;
