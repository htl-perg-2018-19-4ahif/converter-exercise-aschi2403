#!/usr/bin/env node
let args = require('args');

args.option('source', 'A float value that should be converted.(e.g. 5)')
    .option('sourceUnit', 'A source unit (e.g. m = meters)')
    .option('const', 'The constant string "to"', 'to')
    .option('targetUnit', 'A target unit(e.g. cm = centimeters');

const flags = args.parse(process.argv);
const measures = [{source: 'm', target: [{unit: 'cm', factor: 100}, {unit: 'mm', factor: 1000}]}, {source: 'cm', target: [{unit: 'cm', target: [{unit: 'm', factor: 0.01}, {unit: 'mm', factor: 10}]}]}, {source: 'mm', target: [{unit: 'cm', factor: 0.1}, {unit: 'm', factor: 0.001}]}, {source: 'kg', target: [{unit: 'g', factor: 1000}]}, {source: 'g', target: [{unit: 'kg', factor: 0.001}]}];
console.log(`sourceUnit:   ${flags.sourceUnit}`);

//console.log("Hello");
for(let i = 0; i < measures.length; i++) {
    
    if(measures[i].source == flags.sourceUnit) {
        console.log("Hello");
        for(var y = 0; y < measures[i].target.length; y++) {
            if(measures[i].target[y].unit == flags.targetUnit) {
                console.log(flags.source + ' ' + flags.sourceUnit + ' are ' + flags.source * measures[i].target[y].factor + ' ' + flags.targetUnit);
            }
        }
    }
}