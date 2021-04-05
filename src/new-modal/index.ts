import { strings,  } from '@angular-devkit/core';
import { apply, Rule, SchematicContext, Tree,template, url, mergeWith } from '@angular-devkit/schematics';
import { Schema } from './schema';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function newModal(_options: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const sourceTemplate = url('./files')
    const spt = apply(sourceTemplate,[
      template({..._options,...strings})
    ])

    return mergeWith(spt)(tree, _context) ;
  };
}
