import { TestGraph, TestGraph2 } from '../../visualizations';

export const heroObj = {
    vid: require('../../videos/heroImage.mp4'), 
    headLine: 'Climate Change', 
    // eslint-disable-next-line no-multi-str
    description: 'What is climate change? \
                What are its effects? \
                and What can we do? \
                Lets find out.'
};

export const homeObj = {
    lightBg: false,
    imgStart: '', 
    lightTopLine: true, 
    lightTextDesc: true,
    description: 'Global Temperature has risen by more than 1.5 degree',
    headLine: 'Global Temperature', 
    lightText: true, 
    topLine: 'Effects of Climate Change' ,
    viz: TestGraph
};

export const homeObjTwo = {
    lightBg: false,
    imgStart: 'start', 
    lightTopLine: true, 
    lightTextDesc: true,
    description: 'Carbon Dioxode is the most significant Green House Gas',
    headLine: 'Global Emmission', 
    lightText: true, 
    topLine: 'Causes of Climate Change' ,
    viz: TestGraph2
};