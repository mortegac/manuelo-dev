import styled from "styled-components";
 
export const SectionContainerBase = styled.div`
    display: flex;
    flex-direction: row;
    -webkit-box-pack: center;
 
    -webkit-box-align: center;z
    width:100%;
    margin: 0 auto;
    overflow: hidden;



    width:1136px;
    background-color: transparent;
 
    justify-content: flex-start;
    align-items: flex-start;

    
    max-width:${(props) => props.theme.maxWidthPageContainer};
    // padding:${(props) => props.theme.paddingPageContainer};
    
    @media (max-width: 850px) {
        flex-direction: column;
        width:100%;
        min-height:500px;
        justify-content: center;
        align-items: center;
    }
`;

