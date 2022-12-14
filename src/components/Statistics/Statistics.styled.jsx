import styled from "styled-components";

export const StatisticBox = styled.section`
    
`;

export const StatTitle = styled.h2`
    
`;

export const StatList = styled.ul`
    list-style: none;
`;

export const StatItem = styled.li`
   background-color: ${getRandomHexColor}; 
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const StatLabel = styled.span`
    
`;

export const StatQty = styled.span`
    
`;