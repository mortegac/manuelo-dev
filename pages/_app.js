// import Link from "next/link";
// import { PrismicProvider } from "@prismicio/react";
// import { PrismicPreview } from "@prismicio/next";
import {useState, useEffect} from 'react';
import Image from "next/image";
import styled, { ThemeProvider } from "styled-components";
import axios from 'axios';


import {Helmet} from "react-helmet";
import ReactTextTransition, { presets } from "react-text-transition";

import PageContainer from '../lib/RMT_Common_Components/commonComponents/Containers/PageContainer/PageContainer';
import SectionContainer from '../lib/RMT_Common_Components/commonComponents/Containers/SectionContainer/SectionContainer';
import SliceContainer from '../lib/RMT_Common_Components/commonComponents/Containers/SliceContainer/SliceContainer';
import image from '../lib/RMT_Common_Components/commonAssets/image-Hero.svg';
import { GlobalStyle, theme } from "../lib/RMT_Common_Components/commonStyles";
import Card from '../components/Card';


const URLAPI_DEV_TO = 'https://dev.to/api/articles?username=mortegac';

const Area = styled.div`
  background: #ffffff;  
  background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);  
  width: 100%;
  height:100vh;
  height:100vh;

.circles{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.circles li{
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: rgb(75 160 211 / 20%);
  animation: animate 25s linear infinite;
  bottom: -150px;
  
}

.circles li:nth-child(1){
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}


.circles li:nth-child(2){
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 12s;
}

.circles li:nth-child(3){
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
}

.circles li:nth-child(4){
  left: 40%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 18s;
}

.circles li:nth-child(5){
  left: 65%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
}

.circles li:nth-child(6){
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
}

.circles li:nth-child(7){
  left: 35%;
  width: 150px;
  height: 150px;
  animation-delay: 7s;
}

.circles li:nth-child(8){
  left: 50%;
  width: 25px;
  height: 25px;
  animation-delay: 15s;
  animation-duration: 45s;
}

.circles li:nth-child(9){
  left: 20%;
  width: 15px;
  height: 15px;
  animation-delay: 2s;
  animation-duration: 35s;
}

.circles li:nth-child(10){
  left: 85%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 11s;
}



@keyframes animate {

  0%{
      transform: translateY(0) rotate(0deg);
      opacity: 1;
      border-radius: 0;
  }

  100%{
      transform: translateY(-1000px) rotate(720deg);
      opacity: 0;
      border-radius: 50%;
  }

}
`;

const TEXTS = [
  "teach and pass on my knowledge", 
  "develop Web applications", 
  "work with serverless technologies",
  "create amazing mobile apps"];

  // Hi, I'm Robert. I create clean, accessible, and performant websites and webapps. My favourite tools are React, Gatsby and serverless functions, and I'm currently exploring the world of GraphQL. You can check out my resume here.

export default function App() {
  const [index, setIndex] = useState(0);
  const [post, setPost] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
 
  useEffect(() => {
  
    
    axios.get(URLAPI_DEV_TO)
    .then(res => {
      const post = res.data;
      setPost(post);
    })

  }, []);

  return (
    <>
        <GlobalStyle />
        <Helmet>
          <meta charSet="utf-8" />
          <title>Manuel Ortega Dev</title>
          <link rel="canonical" href="http://manuelo.dev" />
        </Helmet>
        <ThemeProvider theme={theme}>
          <PageContainer style={{ backgroundColor: 'transparent'}}>
            <SectionContainer style={{ backgroundColor: 'transparent', width: '100%', position: 'absolute', top:'10vh', left:'50vh'}}>
              <SliceContainer style={{backgroundColor: 'transparent', minWidth:'500px', overflow: 'hidden'}}>
                {/* <h1>Hi, I’m
                  <span style={{display:'block', color:'#4BA0D3'}}>Manuel Ortega</span>
                </h1> */}
                <h2>Hi, I’m
                </h2>
                <h1 style={{display:'block', color:'#4BA0D3'}}>Manuel Ortega</h1>
                {/* <span>{"I create clean, accessible, and performant websites and webapps. My favourite tools are React, Gatsby and serverless functions, and I'm currently exploring the world of GraphQL."}</span> */}
                <section style={{color:'#6D7B81'}}>
                  I love
                  <ReactTextTransition
                    text={TEXTS[index % TEXTS.length]}
                    springConfig={ presets.wobbly }
                    style={{ margin: "0 4px", color:'#000000' }}
                    inline
                  />
                </section>
              </SliceContainer>
              <SliceContainer style={{minWidth:'43%'}}>
                <Image src={image} />
              </SliceContainer>
              
             
            </SectionContainer>
            <SectionContainer style={{ backgroundColor: 'transparent', width: '100%', position: 'absolute', top:'50vh', left:'50vh'}}>

              <SliceContainer style={{backgroundColor: 'transparent', minWidth:'500px', overflow: 'hidden', display:'flex', flexDirection:'column'}}>
                <h2
                  style={
                    {
                      color:'#6D7B81',
                      fontSize:'26px',
                    }}
                >Publicaciones realizadas
                </h2>
              </SliceContainer>
            </SectionContainer>
            
            <SectionContainer style={{ backgroundColor: 'transparent', width: '100%', position: 'absolute', top:'56vh', left:'50vh'}}>
            
              <SliceContainer style={{backgroundColor: 'transparent', minWidth:'500px', overflow: 'hidden', display:'flex', flexDirection:'row', flexWrap: 'wrap'}}>
                {
                  post.map((item , index)=>(
                    // eslint-disable-next-line react/jsx-key
                    <Card
                      key={index}
                      image={item.cover_image}
                      likes={item.positive_reactions_count}
                      title={item.title}
                      url={item.url}
                      user={item.user.username}
                      description={item.description}
                    />

                  ))
                }
               
                {/* <span>{JSON.stringify(post,null, 2)}</span> */}
              </SliceContainer>
            </SectionContainer>


            <Area>
              <ul className="circles">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
              </ul>
            </Area >

          </PageContainer>
        </ThemeProvider>
    </>
  );
}
