import * as fs from 'fs';
import * as sdk from './sdk-repository';
import { ApiGenerator } from './api';
import { ShapesGenerator } from './shapes';
import { IndexGenerator } from '.';

const SHAPES_FILENAME = 'shapes.ts'
const API_FILENAME = 'api.ts';

/**
 * Properties for `ClientGenerator`.
 */
export interface ClientGeneratorProps {

  /**
   * The client to generate.
   */
  readonly client: sdk.Client;

  /**
   * The directory to generate the code to.
   */
  readonly outDir: string;

}

/**
 * Generator for the code of a client directory.
 */
export class ClientGenerator {

  private readonly shapes: ShapesGenerator;
  private readonly api: ApiGenerator;
  private readonly index: IndexGenerator;

  constructor(private readonly _props: ClientGeneratorProps) {

    this.shapes = new ShapesGenerator({
      client: this._props.client,
      outDir: this._props.outDir,
      fileName: SHAPES_FILENAME,
    });

    this.api = new ApiGenerator({
      client: this._props.client,
      outDir: this._props.outDir,
      fileName: API_FILENAME,
      shapesFileName: SHAPES_FILENAME,
    });

    this.index = new IndexGenerator({
      outDir: this._props.outDir,
      shapesFileName: SHAPES_FILENAME,
      apiFileName: API_FILENAME,
    });

    fs.mkdirSync(this._props.outDir, { recursive: true });
  }

  /**
   * Generate the client directory.
   */
  public async gen() {

    await this.shapes.gen();
    await this.api.gen();
    await this.index.gen();

  }

}

