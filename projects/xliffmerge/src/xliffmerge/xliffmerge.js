#!/usr/bin/env node
//require('../src/xliffmerge/main.js')
//import '../src/xliffmerge/main.js';

let myModule;
import("../src/xliffmerge/xliff-merge.js").then(module => {
    myModule = module
    myModule.main(process.argv);
});


// import {XliffMerge} from './xliff-merge';
// /**
//  * Created by martin on 15.02.2017.
//  * Command line interface xliffmerge
//  */
//
// XliffMerge.main(process.argv);
