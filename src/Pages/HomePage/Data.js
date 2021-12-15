
import { TestGraph, TestGraph2, SankeyGraph, TestGraph3, EmissionGraph, StreamGraph } from '../../visualizations';

export const heroObj = {
    vid: require('../../videos/heroImage.mp4'),
    headLine: 'Climate Change',
    // eslint-disable-next-line no-multi-str
    description: 'What is climate change? \
                What are its effects? \
                What can we do? \
                Lets find out.'
};

export const homeObj = {
    lightBg: false,
    imgStart: '',
    lightTopLine: true,
    lightTextDesc: true,
    description: "Earth's temperature is increasing alarmingly year by year. The graph alongside shows deviation per year from the 1951 - 1980 mean. We can clearly see an increasing trend which is a topic of grave concern. Earth's temperature has already increased by 1°C and its impact is very serious and devastating. ",
    headLine: 'Global Warming',
    lightText: true,
    topLine: 'What is Climate Change?',
    viz: TestGraph
};

export const homeObjTwo = {
    lightBg: false,
    imgStart: 'start',
    lightTopLine: true,
    lightTextDesc: true,
    description: 'Changes in the climate conditions have affected the likelihoof of disasters significantly. The plot below shows a dramatic rise in the number of catastrophic natural disasters across different parts of the world.  ',
    headLine: 'Never Ending Natural Disasters ',
    lightText: true,
    topLine: '',
    viz: TestGraph2,
    additional: "*Countries whose disaster data was not available have been deleted from the graph"
};

export const emissionObj = {
    lightBg: true,
    imgStart: '', 
    lightTopLine: false, 
    lightTextDesc: false,
    description: "It is well known that the increase in greenhouse gasses has led to climate change. This plot, showing the annual global emissions of carbon dioxide (CO2), measured in million tonnes," 
    + "shows the amount of CO2 that has been released in the atmosphere over the years.",
    headLine: "CO2", 
    lightText: false, 
    topLine: 'Why the climate is changing' ,
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