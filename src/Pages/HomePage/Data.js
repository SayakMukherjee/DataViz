
/**
This file is contains the data for all the sections.
 */
import { GlobalTemperature, DisastersGraph, SankeyGraph, EmissionGraph, StreamGraph, TreeMapGraph } from '../../visualizations';

// Hero object
export const heroObj = {
    vid: require('../../videos/heroImage.mp4'),
    headLine: 'Climate Change',
    description: 'Cause, Effect & Solutions'
};

// Introduction to climate change
export const introObj = {
    lightBg: true,
    lightTopLine: false,
    lightTextDesc: false,
    // eslint-disable-next-line no-multi-str
    description: "Long-term shift in temperatures and weather patterns is called climate changed.\
                Natural events such as solar cycles can result in climate change. However, since the 1880s human actions \
                such as burning of fossil fuels have been the primary reason for drastic changes in the climate.",
    headLine: 'What is Climate Change?',
    lightText: false,
    topLine: '',
    additional: "- Source: United Nations Climate Action"
};

// Effects 
export const effectsObj = {
    lightBg: false,
    imgStart: '',
    lightTopLine: true,
    lightTextDesc: true,
    // eslint-disable-next-line no-multi-str
    description: "Earth's temperature is increasing alarmingly year by year. \
                The graph alongside shows deviation per year from the 1951 - 1980 mean. \
                We can clearly see an increasing trend which is a topic of grave concern. \
                Earth's temperature has already increased by 1°C and its impact is very serious and devastating. ",
    headLine: 'Rise in Global Temperature',
    lightText: true,
    topLine: 'Effects',
    viz: GlobalTemperature,
    additional: "*DataSource- Ourworldindata"
};

//Effects
export const effectsObjTwo = {
    lightBg: false,
    imgStart: 'start',
    lightTopLine: true,
    lightTextDesc: true,
    // eslint-disable-next-line no-multi-str
    description: 'Changes in climate conditions have affected the likelihood of disasters significantly. \
                The plot below shows a dramatic rise in the number of catastrophic natural disasters across \
                different parts of the world.',
    headLine: 'Never Ending Natural Disasters ',
    lightText: true,
    topLine: 'Effects',
    viz: DisastersGraph,
    additional: "*Countries whose disaster data was not available have been deleted from the graph. DataSource: EM-DAT Public"  
    
};

//Cause
export const causeObj = {
    lightBg: true,
    lightTopLine: false,
    lightTextDesc: false,
    // eslint-disable-next-line no-multi-str
    description: "Greenhouse Gases (GHGs) emitted mainly from burning of fossil fuels create a blanket around\
                the Earth, trapping the sun's heat and causing climate change. The Kyoto Protocol identified six \
                main greenhouse gases which have significant impact: CO2(carbon dioxide), \
                CH4(methane), N2O (nitrous oxide), HFCs (hydrofluorocarbons), PFCs(perfluorocarbons) and \
                SF6 (sulfur hexafluoride). Carbon dioxide among them is the most prominent GHG with the highest impact.",
    headLine: 'What is causing Climate Change?',
    lightText: false,
    topLine: '',
    additional: "- Source: Udara et al. Global Research on Carbon Emissions: A Scientometric Review. Sustainability. 2019"
};

// Carbon Dioxide emissions
export const emissionObj = {
    lightBg: false,
    imgStart: '',
    lightTopLine: true,
    lightTextDesc: true,
    // eslint-disable-next-line no-multi-str
    description: "Human activities like power generation, and transportation by burning fossil fuels \
                adds large quantities of carbon dioxide in the environment. This plot, shows the annual \
                global emissions of carbon dioxide (CO2), measured in million tonnes, over the year from burining \
                of different types of fossil fuels.",
    headLine: "CO2 Emissions Continue to Rise",
    lightText: true,
    topLine: 'Cause',
    viz: EmissionGraph
};

// Global efforts to counter climate change
export const effortsObj = {
    lightBg: true,
    lightTopLine: false,
    lightTextDesc: false,
    // eslint-disable-next-line no-multi-str
    description: "Global co-operation is quintessential in addressing climate change, improving lives \
                and protecting the environment. International co-operations are guided by agreements such as \
                the Paris Agreement and the UN Convention on Climate Change. Actions to fight climate change \
                can be put broadly in following categories: \
                Cutting Emissions, Adapting to impacts & Financing the adjustments.",
    headLine: 'Global Initiatives to Counter Climate Change',
    lightText: false,
    topLine: '',
    additional: "- Source: United Nations Climate Action"
};

export const effortsObjTwo = {
    lightBg: false,
    imgStart: 'start',
    lightTopLine: true,
    lightTextDesc: true,
    // eslint-disable-next-line no-multi-str
    description: 'Governments from across the world meet every year at the Conference of Parties to discuss \
                how to deal with climate change. The adjacent graph shows an analysis of a selected set of recurring \
                themes at each COP over the years. This provides an insight into the evolving focus.',
    headLine: 'Conference of Parties (COP)',
    lightText: true,
    topLine: 'Global Initiatives',
    viz: StreamGraph
};

export const effortsObjThree = {
    lightBg: true,
    imgStart: '',
    lightTopLine: false,
    lightTextDesc: false,
    // eslint-disable-next-line no-multi-str
    description: 'Adaptation to climate change and mitigating the causes of CO2 emission will eventually lead to better \
                livelihood and preserve the natural ecosystems. But climate action requires significant financial \
                investements. With the increase in international co-operation, funds are being allocated by the developed \
                countries to assist developing countries in moving towards a greener economy. Adjacent graph shows the \
                adaptation and mitigation funds approved between 2002 and 2016.',
    headLine: 'Adaptation & Mitigation Funds',
    lightText: false,
    topLine: 'Global Initiatives',
    viz: TreeMapGraph
};

export const effortsObjFour = {
    lightBg: false,
    imgStart: 'start',
    lightTopLine: true,
    lightTextDesc: true,
    // eslint-disable-next-line no-multi-str
    description: 'Funds are mostly multilateral in nature. Once deposited, they are distributed among the countries \
                that need them. In the adjacent graph we see the movement of the following adaptation funds between the top \
                10 contributors and top 20 donors: Adaptation Fund (AF), Adaptation for Smallholder Agriculture Programme (ASAP), \
                Least Developed Countries Fund (LDCF), MDG Achievement Fund (MAF), Pilot Programme for Climate and Resilience (PPCR)\
                Special Climate Change Fund (SCCF)',
    headLine: 'Moving Funds between Donors and Recipients',
    lightText: true,
    topLine: 'Global Initiatives',
    viz: SankeyGraph,
    additional: ""
};

// Individual Efforts
export const supportObj = {
    lightBg: true,
    lightTopLine: false,
    lightTextDesc: false,
    // eslint-disable-next-line no-multi-str
    description: "Humans have caused a drastic climate change over the years. While the historical impacts \
                are irreversible, we can prevent further damages. Directed internation co-operation can help us achieve \
                our aim of mitigation and adaptation globally. Additionally, individuals can also help in combating global warming and \
                taking care of the planet. Our lifestyle choices have a significant \
                impact. Two-thirds of the greenhouse gases emissions are linked to private \
                households. By making smart choices like saving energy or recycling, we can drive the change.",
    headLine: 'Concluding Thoughts',
    lightText: false,
    topLine: '',
    additional: "- Source: United Nations Act Now"
};