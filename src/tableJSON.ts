const jsonMockTabletParams1 = `
{
    "header": ["1 column", "2 column", "3 column", "4 column","5 column","6 column","7 column","8 column"],
    "row":[
     ["1.1 some text","1.2 some text","1.3 some text","1.4 some text","1.5 some text","1.6 some text"], 
    ["2.1","2.2","2.3","2.4","2.5","2.6"], 
    ["3.1","3.2","3.3","3.4","3.5","3.6"],
    ["4.1","4.2","4.3","4.4","4.5","4.6"]
    ]
}
`;
const jsonMockTabletParams2 = `
{
    "header": ["1 column", "2 column", "3 column", "4 column","5 column","6 column"],
    "row":[
     ["1.1 some text","1.2 some text","1.3 some text","1.4 some text","1.5 some text","1.6 some text"], 
     ["2.1","2.2","2.3","2.4","2.5","2.6"], 
     ["3.1","3.2","3.3","3.4","3.5","3.6"],
     ["4.1","4.2","4.3","4.4","4.5","4.6"],
     ["5.1","5.2","5.3","5.4","5.5","5.6"],
     ["6.1","6.2","6.3","6.4","6.5","6.6"],
     ["7.1","7.2","7.3","7,4","7.5","7.6"],
     ["8.1","8.2","8.3","8,4","8.5","8.6"],
     ["9.1","9.2","9.3","9,4","9.5","9.6"]          
    ]
}
`;
const jsonMockTabletParams3 = `

{
    "header": ["1 column", "2 column", "3 column", "4 column"],
    "row":[
    ["1.1","1.2","1.3","1.4"], 
    ["2.1","2.2","2.3","2.4"], 
    ["3.1","3.2","3.3","3.4"],
    ["4.1","4.2","4.3","4.4"]
    ]
}
`;
const data = {
    'dataUrl1': jsonMockTabletParams1,
    'dataUrl2': jsonMockTabletParams2,
    'dataUrl3': jsonMockTabletParams3,

};

export const getTableParams = (dataUrl: string) => {
    // @ts-ignore
    return JSON.parse(data[dataUrl]);
};
export type tableParamsType = {
    'header': Array<string>,
    'row': Array<Array<string>>
}
