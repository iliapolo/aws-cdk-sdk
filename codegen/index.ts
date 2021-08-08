import { CodeMaker } from 'codemaker';
import * as path from 'path';

const FILENAME = 'index.ts';

/**
 * Properties for `IndexGenerator`.
 */
 export interface IndexGeneratorProps {

   /**
    * The directory to generate the api to.
    */
   readonly outDir: string;

   /**
    * The filename of the shapes file. All types from this file will be exported.
    */
   readonly shapesFileName: string;

   /**
    * The filename of the api file. All types from this file will be exported.
    */
    readonly apiFileName: string;

}

/**
 * Generator for the index file of a client directory.
 */
export class IndexGenerator {

  private readonly _props: IndexGeneratorProps;

  constructor(props: IndexGeneratorProps) {
    this._props = props;
  }

  public async gen() {
    const index = new CodeMaker({ indentationLevel: 2 });
    index.openFile(FILENAME);
    index.line(`export * from './${path.basename(this._props.apiFileName, '.ts')}';`)
    index.line(`export * from './${path.basename(this._props.shapesFileName, '.ts')}';`)
    index.closeFile(FILENAME);
    await index.save(this._props.outDir);
  }
}