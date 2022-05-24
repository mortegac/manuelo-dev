import styled from "styled-components";

export const PageContainerBase = styled.div`
    height:100%;
    width:100%;

    margin:0;
    box-sizing:border-box;
    display:flex;
    justify-content:start;
    align-items:center;

    

    // color:${(props) => props.theme.colors.primary};
    font-size:${(props) => props.theme.fontFamily};
    padding:${(props) => props.theme.paddingPage};
    cursor: default;
    h1{ font-size: 3.5rem; margin:0px;}
    h2{ font-size: 2.8rem; }
    h3{ font-size: 1rem; }
    h4{ font-size: 1rem;
        font-weight: 500;
    }
    h5{}
    h6{}
   


}
`;