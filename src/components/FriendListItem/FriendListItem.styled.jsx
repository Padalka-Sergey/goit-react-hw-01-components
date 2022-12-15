import styled from "styled-components";

export const Item = styled.li`
    list-style: none;
    display: flex;
    align-items: center;
     `;

const bgc = props => {
        switch (props.bgcIsOnline) {
            case true:
                return 'green';
            case false:
                return 'red';
            default:
                return 'black';
        }
    }

export const Status = styled.span`
    
    width: 20px;
    height: 20px;
    border-radius: 50%;
   background-color: ${bgc};
   
`;



export const Avatar = styled.img`

`;

export const Name = styled.p`
   
`;