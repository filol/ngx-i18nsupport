// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'core-js/es7/reflect.js';
import 'zone.js/dist/zone.js';
import 'zone.js/dist/zone-testing.js';
import { getTestBed } from '@angular/core/testing.js';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

declare const require: any;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
