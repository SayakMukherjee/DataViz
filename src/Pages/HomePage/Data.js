import { TestGraph, TestGraph2, EmissionGraph } from '../../visualizations';

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
    description: 'The plot alongside shows how the number of diasters have increased in all the countries along the globe ',
    headLine: 'Natural Disasters ', 
    lightText: true, 
    topLine: 'Devastating impacts' ,
    viz: TestGraph2
};

export const homeObjThree = {
    lightBg: false,
    imgStart: '', 
    lightTopLine: true, 
    lightTextDesc: true,
    description: "It is well known that the increase in greenhouse gasses has led to climate change. This plot, showing the annual global emissions of carbon dioxide (CO2), measured in million tonnes," 
    + "shows the amount of CO2 that has been released in the atmosphere over the years.",
    headLine: "CO2", 
    lightText: true, 
    topLine: 'Why the climate is changing' ,
    viz: EmissionGraph
};
