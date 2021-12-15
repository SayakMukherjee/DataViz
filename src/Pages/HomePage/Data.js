
import { TestGraph, TestGraph2, SankeyGraph, TestGraph3, EmissionGraph, StreamGraph } from '../../visualizations';

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
    topLine: 'Effects of Climate Change',
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
    topLine: 'Devastating impacts',
    viz: TestGraph2
};

export const emissionObj = {
    lightBg: false,
    imgStart: '',
    lightTopLine: true,
    lightTextDesc: true,
    description: "It is well known that the increase in greenhouse gasses has led to climate change. This plot, showing the annual global emissions of carbon dioxide (CO2), measured in million tonnes,"
        + "shows the amount of CO2 that has been released in the atmosphere over the years.",
    headLine: "CO2",
    lightText: true,
    topLine: 'Why the climate is changing',
    viz: EmissionGraph
}

export const homeObjThree = {
    lightBg: false,
    imgStart: 'start',
    lightTopLine: true,
    lightTextDesc: true,
    description: 'Adaptation funds and their exchange cover almost all countries in the world, however only thirty countries contribute to 86% of all money. These ten countries deposited this amount of money from 2002 to 2015. After being deposited, the money then needs to be approved. When approved, money is already allocated by each fund between the countries who need them.',
    headLine: 'The funds\' journey: from donors to recipients',
    lightText: true,
    topLine: 'Adaptation Funds',
    viz: SankeyGraph
};

export const streamObj = {
    lightBg: false,
    imgStart: 'start',
    lightTopLine: true,
    lightTextDesc: true,
    description: 'Adaptation funds and their exchange cover almost all countries in the world, however only thirty countries contribute to 86% of all money. These ten countries deposited this amount of money from 2002 to 2015. After being deposited, the money then needs to be approved. When approved, money is already allocated by each fund between the countries who need them.',
    headLine: 'The funds\' journey: from donors to recipients',
    lightText: true,
    topLine: 'Adaptation Funds',
    viz: StreamGraph
};