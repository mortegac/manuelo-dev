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
import { GlobalStyle, theme } from "../lib/RMT_Common_Components/commonStyles";


const TEXTS = [
  "teach and pass on my knowledge", 
  "develop Web applications", 
  "work with serverless technologies",
  "create amazing mobile apps"];

export default function App() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
 
  return (
    <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
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
