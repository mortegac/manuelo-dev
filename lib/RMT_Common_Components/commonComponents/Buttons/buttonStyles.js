import styled from "styled-components";

export const Anchor = styled.a`
    &.fullwidth {
        width: 100%;
        @media (max-width: 768px) {
            width: 100%;
        }
    }
    @media(max-width: 500px) {
        width: 100%;
    }
    text-decoration:none;
    &.normal{
        width:fit-content;
    }
`;
export const ButtonContainer = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 24px;
    font-weight: bold;
    font-family: 'Nunito Sans', sans-serif;
    white-space: nowrap;
    border-radius: ${(props) => props.borderRadius};
    font-size: 16px;
    line-height: 24px;
    border: none;   
    cursor: pointer;
    transition: background 0.3s ease;
    height: ${(props) => props.height};
    width: 100%;
    background: ${(props) => props.bgColor};
    color:  ${(props) => props.textColor};
    border:  1px solid ${(props) => props.borderColor}; 
    :hover {
        background-color: ${(props) => props.bgHover};
        color: ${(props) => props.bgHoverText};
    }
    @media (max-width: 768px) {
        margin-bottom: 16px;
    }
`;