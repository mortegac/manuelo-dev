// import Link from "next/link";
// import { PrismicProvider } from "@prismicio/react";
// import { PrismicPreview } from "@prismicio/next";
import {useState, useEffect} from 'react';
import Image from "next/image";
import { ThemeProvider } from "styled-components";
import ReactTextTransition, { presets } from "react-text-transition";

import PageContainer from '../lib/RMT_Common_Components/commonComponents/Containers/PageContainer/PageContainer';
import SectionContainer from '../lib/RMT_Common_Components/commonComponents/Containers/SectionContainer/SectionContainer';
import SliceContainer from '../lib/RMT_Common_Components/commonComponents/Containers/SliceContainer/SliceContainer';
import image from '../lib/RMT_Common_Components/commonAssets/image-Hero.svg';
// import { repositoryName, linkResolver } from "../prismicio";
import { GlobalStyle, theme } from "../lib/RMT_Common_Components/commonStyles";

// const internalLinkComponent = ({ href, children, ...props }) => (
//   <Link href={href}>
//     <a {...props}>{children}</a>
//   </Link>
// );
const TEXTS = [
  "teach and pass on my knowledge", 
  "develop Web applications", 
  "work with serverless technologies",
  "create amazing mobile apps"];

export default function App({ Component, pageProps }) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  // const [textIndex, setTextIndex] =  useState(0)

  // useEffect( ()=>{

  //   setInterval(() => {
  //     // if (texts.length === textIndex){
  //     //   setTextIndex(0)
  //     // }else{
  //       setTextIndex(textIndex + 1)
  //     // }
  //   }, 3000);


  // }, [textIndex])
  return (
    <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          {/* <Component {...pageProps} /> */}
          <PageContainer>
            <SectionContainer>
              <SliceContainer style={{minWidth:'500px', overflow: 'hidden'}}>
                <h1>Hi, I’m
                  <span style={{display:'block', color:'#4BA0D3'}}>Manuel Ortega</span>
                </h1>
                <section style={{color:'#6D7B81'}}>
                  I love
                  <ReactTextTransition
                    text={TEXTS[index % TEXTS.length]}
                    // springConfig={presets.gentle}
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
            

          </PageContainer>
        </ThemeProvider>
    </>
  );
}
