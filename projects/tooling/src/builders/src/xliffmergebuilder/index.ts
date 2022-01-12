import {createBuilder, BuilderContext} from '@angular-devkit/architect.js';
import XliffmergeBuilder from './xliffmerge.builder';
import {JsonObject} from '@angular-devkit/core.js';

export default createBuilder((options: JsonObject, context: BuilderContext) => {
  const xliffmergeBuilder = new XliffmergeBuilder(context);
  return xliffmergeBuilder.run(options).toPromise();
});
