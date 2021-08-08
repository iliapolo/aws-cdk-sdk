export enum ShapeType {

  DOUBLE = 'double',

  BLOB = 'blob',

  MAP = 'map',

  LIST = 'list',

  STRUCTURE = 'structure',

  BOOLEAN = 'boolean',

  INTEGER = 'integer',

  LONG = 'long',

  FLOAT = 'float',

  STRING = 'string',

  TIMESTAMP = 'timestamp',

}

export interface Method {

  readonly inputShape?: string;

  readonly outputShape?: string;

  readonly name: string;

  readonly outputPath: string[];

}

export interface Property {

  readonly output: string;

  readonly outputPath: string[];

  readonly name: string;

  readonly action: string;

}

export interface ClientApiSpec {

  readonly metadata: any;

  readonly operations: Record<string, Operation>;

  readonly shapes: Record<string, Shape>;

  readonly documentation: string;
}

export interface Shape {

  readonly required?: string[];

  readonly members?: Record<string, Member>;

  readonly member?: Member;

  readonly key?: Key;

  readonly value?: Value;

  readonly eventstream?: boolean;

  readonly type: string;

  readonly documentation?: string;
}

export interface Key {

  readonly shape: string;

}

export interface Value {

  readonly shape: string;

}

export interface Member {

  readonly shape: string;

  readonly documentation?: string;
}

export interface Operation {

  readonly output?: Output;

  readonly input?: Input;

  readonly documentation: string;

}

export interface Input {

  readonly shape: string;
}

export interface Output {

  readonly shape: string;
}

