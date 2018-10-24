#!/usr/bin/env node
let args = require('args');
/*
args.option('source', 'A float value that should be converted.(e.g. 5)')
    .option('sourceUnit', 'A source unit (e.g. m = meters)')
    .option('const', 'The constant string "to"', 'to')
    .option('targetUnit', 'A target unit(e.g. cm = centimeters');
*/
//const flags = args.parse(process.argv);
const measures = [{source: 'm', target: [{unit: 'cm', factor: 100}, {unit: 'mm', factor: 1000}, {unit: 'm', factor: 1}]}, {unit: 'm', factor: 1}, {source: 'cm', target: [{unit: 'cm', target: [{unit: 'm', factor: 0.01}, {unit: 'mm', factor: 10}, {unit: 'cm', factor: 1}]}]}, {source: 'mm', target: [{unit: 'cm', factor: 0.1}, {unit: 'm', factor: 0.001}, {unit: 'cm', factor: 1}]}, {source: 'kg', target: [{unit: 'g', factor: 1000}, {unit: 'kg', factor: 1}]}, {source: 'g', target: [{unit: 'kg', factor: 0.001}, {unit: 'g', factor: 1}]}];
//console.log(`sourceUnit:   ${flags.sourceUnit}`);

//console.log("Hello");

if(!process.argv.includes('to') || process.argv.length != 6 || isNaN(process.argv[2])) {
    console.log('Invalid parameters'); //console.log because test doesn't recognize console.error
    process.exit(1);
}

for(let i = 0; i < measures.length; i++) {
    if(measures[i].source == process.argv[3]) {
        for(var y = 0; y < measures[i].target.length; y++) {
            if(measures[i].target[y].unit == process.argv[5]) {
                console.log(process.argv[2] + ' ' + process.argv[3] + ' are ' + process.argv[2] * measures[i].target[y].factor + ' ' + process.argv[5]);
                process.exit(0);
            }
        }
    }
}
console.log('Invalid parameters');