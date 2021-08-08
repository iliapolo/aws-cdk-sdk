/**
 * @schema DataBrewBatchDeleteRecipeVersionRequest
 */
export interface DataBrewBatchDeleteRecipeVersionRequest {
  /**
   * @schema DataBrewBatchDeleteRecipeVersionRequest#Name
   */
  readonly name?: string;

  /**
   * @schema DataBrewBatchDeleteRecipeVersionRequest#RecipeVersions
   */
  readonly recipeVersions?: string[];

}

/**
 * Converts an object of type 'DataBrewBatchDeleteRecipeVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewBatchDeleteRecipeVersionRequest(obj: DataBrewBatchDeleteRecipeVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'RecipeVersions': obj.recipeVersions?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewBatchDeleteRecipeVersionResponse
 */
export interface DataBrewBatchDeleteRecipeVersionResponse {
  /**
   * @schema DataBrewBatchDeleteRecipeVersionResponse#Name
   */
  readonly name?: string;

  /**
   * @schema DataBrewBatchDeleteRecipeVersionResponse#Errors
   */
  readonly errors?: DataBrewRecipeVersionErrorDetail[];

}

/**
 * Converts an object of type 'DataBrewBatchDeleteRecipeVersionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewBatchDeleteRecipeVersionResponse(obj: DataBrewBatchDeleteRecipeVersionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Errors': obj.errors?.map(y => toJson_DataBrewRecipeVersionErrorDetail(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewCreateDatasetRequest
 */
export interface DataBrewCreateDatasetRequest {
  /**
   * @schema DataBrewCreateDatasetRequest#Name
   */
  readonly name?: string;

  /**
   * @schema DataBrewCreateDatasetRequest#Format
   */
  readonly format?: string;

  /**
   * @schema DataBrewCreateDatasetRequest#FormatOptions
   */
  readonly formatOptions?: DataBrewFormatOptions;

  /**
   * @schema DataBrewCreateDatasetRequest#Input
   */
  readonly input?: DataBrewInput;

  /**
   * @schema DataBrewCreateDatasetRequest#PathOptions
   */
  readonly pathOptions?: DataBrewPathOptions;

  /**
   * @schema DataBrewCreateDatasetRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'DataBrewCreateDatasetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewCreateDatasetRequest(obj: DataBrewCreateDatasetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Format': obj.format,
    'FormatOptions': toJson_DataBrewFormatOptions(obj.formatOptions),
    'Input': toJson_DataBrewInput(obj.input),
    'PathOptions': toJson_DataBrewPathOptions(obj.pathOptions),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewCreateDatasetResponse
 */
export interface DataBrewCreateDatasetResponse {
  /**
   * @schema DataBrewCreateDatasetResponse#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'DataBrewCreateDatasetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewCreateDatasetResponse(obj: DataBrewCreateDatasetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewCreateProfileJobRequest
 */
export interface DataBrewCreateProfileJobRequest {
  /**
   * @schema DataBrewCreateProfileJobRequest#DatasetName
   */
  readonly datasetName?: string;

  /**
   * @schema DataBrewCreateProfileJobRequest#EncryptionKeyArn
   */
  readonly encryptionKeyArn?: string;

  /**
   * @schema DataBrewCreateProfileJobRequest#EncryptionMode
   */
  readonly encryptionMode?: string;

  /**
   * @schema DataBrewCreateProfileJobRequest#Name
   */
  readonly name?: string;

  /**
   * @schema DataBrewCreateProfileJobRequest#LogSubscription
   */
  readonly logSubscription?: string;

  /**
   * @schema DataBrewCreateProfileJobRequest#MaxCapacity
   */
  readonly maxCapacity?: number;

  /**
   * @schema DataBrewCreateProfileJobRequest#MaxRetries
   */
  readonly maxRetries?: number;

  /**
   * @schema DataBrewCreateProfileJobRequest#OutputLocation
   */
  readonly outputLocation?: DataBrewS3Location;

  /**
   * @schema DataBrewCreateProfileJobRequest#Configuration
   */
  readonly configuration?: DataBrewProfileConfiguration;

  /**
   * @schema DataBrewCreateProfileJobRequest#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema DataBrewCreateProfileJobRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema DataBrewCreateProfileJobRequest#Timeout
   */
  readonly timeout?: number;

  /**
   * @schema DataBrewCreateProfileJobRequest#JobSample
   */
  readonly jobSample?: DataBrewJobSample;

}

/**
 * Converts an object of type 'DataBrewCreateProfileJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewCreateProfileJobRequest(obj: DataBrewCreateProfileJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DatasetName': obj.datasetName,
    'EncryptionKeyArn': obj.encryptionKeyArn,
    'EncryptionMode': obj.encryptionMode,
    'Name': obj.name,
    'LogSubscription': obj.logSubscription,
    'MaxCapacity': obj.maxCapacity,
    'MaxRetries': obj.maxRetries,
    'OutputLocation': toJson_DataBrewS3Location(obj.outputLocation),
    'Configuration': toJson_DataBrewProfileConfiguration(obj.configuration),
    'RoleArn': obj.roleArn,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Timeout': obj.timeout,
    'JobSample': toJson_DataBrewJobSample(obj.jobSample),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewCreateProfileJobResponse
 */
export interface DataBrewCreateProfileJobResponse {
  /**
   * @schema DataBrewCreateProfileJobResponse#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'DataBrewCreateProfileJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewCreateProfileJobResponse(obj: DataBrewCreateProfileJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewCreateProjectRequest
 */
export interface DataBrewCreateProjectRequest {
  /**
   * @schema DataBrewCreateProjectRequest#DatasetName
   */
  readonly datasetName?: string;

  /**
   * @schema DataBrewCreateProjectRequest#Name
   */
  readonly name?: string;

  /**
   * @schema DataBrewCreateProjectRequest#RecipeName
   */
  readonly recipeName?: string;

  /**
   * @schema DataBrewCreateProjectRequest#Sample
   */
  readonly sample?: DataBrewSample;

  /**
   * @schema DataBrewCreateProjectRequest#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema DataBrewCreateProjectRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'DataBrewCreateProjectRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewCreateProjectRequest(obj: DataBrewCreateProjectRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DatasetName': obj.datasetName,
    'Name': obj.name,
    'RecipeName': obj.recipeName,
    'Sample': toJson_DataBrewSample(obj.sample),
    'RoleArn': obj.roleArn,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewCreateProjectResponse
 */
export interface DataBrewCreateProjectResponse {
  /**
   * @schema DataBrewCreateProjectResponse#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'DataBrewCreateProjectResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewCreateProjectResponse(obj: DataBrewCreateProjectResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewCreateRecipeRequest
 */
export interface DataBrewCreateRecipeRequest {
  /**
   * @schema DataBrewCreateRecipeRequest#Description
   */
  readonly description?: string;

  /**
   * @schema DataBrewCreateRecipeRequest#Name
   */
  readonly name?: string;

  /**
   * @schema DataBrewCreateRecipeRequest#Steps
   */
  readonly steps?: DataBrewRecipeStep[];

  /**
   * @schema DataBrewCreateRecipeRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'DataBrewCreateRecipeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewCreateRecipeRequest(obj: DataBrewCreateRecipeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Description': obj.description,
    'Name': obj.name,
    'Steps': obj.steps?.map(y => toJson_DataBrewRecipeStep(y)),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewCreateRecipeResponse
 */
export interface DataBrewCreateRecipeResponse {
  /**
   * @schema DataBrewCreateRecipeResponse#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'DataBrewCreateRecipeResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewCreateRecipeResponse(obj: DataBrewCreateRecipeResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewCreateRecipeJobRequest
 */
export interface DataBrewCreateRecipeJobRequest {
  /**
   * @schema DataBrewCreateRecipeJobRequest#DatasetName
   */
  readonly datasetName?: string;

  /**
   * @schema DataBrewCreateRecipeJobRequest#EncryptionKeyArn
   */
  readonly encryptionKeyArn?: string;

  /**
   * @schema DataBrewCreateRecipeJobRequest#EncryptionMode
   */
  readonly encryptionMode?: string;

  /**
   * @schema DataBrewCreateRecipeJobRequest#Name
   */
  readonly name?: string;

  /**
   * @schema DataBrewCreateRecipeJobRequest#LogSubscription
   */
  readonly logSubscription?: string;

  /**
   * @schema DataBrewCreateRecipeJobRequest#MaxCapacity
   */
  readonly maxCapacity?: number;

  /**
   * @schema DataBrewCreateRecipeJobRequest#MaxRetries
   */
  readonly maxRetries?: number;

  /**
   * @schema DataBrewCreateRecipeJobRequest#Outputs
   */
  readonly outputs?: DataBrewOutput[];

  /**
   * @schema DataBrewCreateRecipeJobRequest#DataCatalogOutputs
   */
  readonly dataCatalogOutputs?: DataBrewDataCatalogOutput[];

  /**
   * @schema DataBrewCreateRecipeJobRequest#DatabaseOutputs
   */
  readonly databaseOutputs?: DataBrewDatabaseOutput[];

  /**
   * @schema DataBrewCreateRecipeJobRequest#ProjectName
   */
  readonly projectName?: string;

  /**
   * @schema DataBrewCreateRecipeJobRequest#RecipeReference
   */
  readonly recipeReference?: DataBrewRecipeReference;

  /**
   * @schema DataBrewCreateRecipeJobRequest#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema DataBrewCreateRecipeJobRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema DataBrewCreateRecipeJobRequest#Timeout
   */
  readonly timeout?: number;

}

/**
 * Converts an object of type 'DataBrewCreateRecipeJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewCreateRecipeJobRequest(obj: DataBrewCreateRecipeJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DatasetName': obj.datasetName,
    'EncryptionKeyArn': obj.encryptionKeyArn,
    'EncryptionMode': obj.encryptionMode,
    'Name': obj.name,
    'LogSubscription': obj.logSubscription,
    'MaxCapacity': obj.maxCapacity,
    'MaxRetries': obj.maxRetries,
    'Outputs': obj.outputs?.map(y => toJson_DataBrewOutput(y)),
    'DataCatalogOutputs': obj.dataCatalogOutputs?.map(y => toJson_DataBrewDataCatalogOutput(y)),
    'DatabaseOutputs': obj.databaseOutputs?.map(y => toJson_DataBrewDatabaseOutput(y)),
    'ProjectName': obj.projectName,
    'RecipeReference': toJson_DataBrewRecipeReference(obj.recipeReference),
    'RoleArn': obj.roleArn,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Timeout': obj.timeout,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewCreateRecipeJobResponse
 */
export interface DataBrewCreateRecipeJobResponse {
  /**
   * @schema DataBrewCreateRecipeJobResponse#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'DataBrewCreateRecipeJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewCreateRecipeJobResponse(obj: DataBrewCreateRecipeJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewCreateScheduleRequest
 */
export interface DataBrewCreateScheduleRequest {
  /**
   * @schema DataBrewCreateScheduleRequest#JobNames
   */
  readonly jobNames?: string[];

  /**
   * @schema DataBrewCreateScheduleRequest#CronExpression
   */
  readonly cronExpression?: string;

  /**
   * @schema DataBrewCreateScheduleRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema DataBrewCreateScheduleRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'DataBrewCreateScheduleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewCreateScheduleRequest(obj: DataBrewCreateScheduleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobNames': obj.jobNames?.map(y => y),
    'CronExpression': obj.cronExpression,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewCreateScheduleResponse
 */
export interface DataBrewCreateScheduleResponse {
  /**
   * @schema DataBrewCreateScheduleResponse#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'DataBrewCreateScheduleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewCreateScheduleResponse(obj: DataBrewCreateScheduleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewDeleteDatasetRequest
 */
export interface DataBrewDeleteDatasetRequest {
  /**
   * @schema DataBrewDeleteDatasetRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'DataBrewDeleteDatasetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewDeleteDatasetRequest(obj: DataBrewDeleteDatasetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewDeleteDatasetResponse
 */
export interface DataBrewDeleteDatasetResponse {
  /**
   * @schema DataBrewDeleteDatasetResponse#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'DataBrewDeleteDatasetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewDeleteDatasetResponse(obj: DataBrewDeleteDatasetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewDeleteJobRequest
 */
export interface DataBrewDeleteJobRequest {
  /**
   * @schema DataBrewDeleteJobRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'DataBrewDeleteJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewDeleteJobRequest(obj: DataBrewDeleteJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewDeleteJobResponse
 */
export interface DataBrewDeleteJobResponse {
  /**
   * @schema DataBrewDeleteJobResponse#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'DataBrewDeleteJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewDeleteJobResponse(obj: DataBrewDeleteJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewDeleteProjectRequest
 */
export interface DataBrewDeleteProjectRequest {
  /**
   * @schema DataBrewDeleteProjectRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'DataBrewDeleteProjectRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewDeleteProjectRequest(obj: DataBrewDeleteProjectRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewDeleteProjectResponse
 */
export interface DataBrewDeleteProjectResponse {
  /**
   * @schema DataBrewDeleteProjectResponse#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'DataBrewDeleteProjectResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewDeleteProjectResponse(obj: DataBrewDeleteProjectResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewDeleteRecipeVersionRequest
 */
export interface DataBrewDeleteRecipeVersionRequest {
  /**
   * @schema DataBrewDeleteRecipeVersionRequest#Name
   */
  readonly name?: string;

  /**
   * @schema DataBrewDeleteRecipeVersionRequest#RecipeVersion
   */
  readonly recipeVersion?: string;

}

/**
 * Converts an object of type 'DataBrewDeleteRecipeVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewDeleteRecipeVersionRequest(obj: DataBrewDeleteRecipeVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'RecipeVersion': obj.recipeVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewDeleteRecipeVersionResponse
 */
export interface DataBrewDeleteRecipeVersionResponse {
  /**
   * @schema DataBrewDeleteRecipeVersionResponse#Name
   */
  readonly name?: string;

  /**
   * @schema DataBrewDeleteRecipeVersionResponse#RecipeVersion
   */
  readonly recipeVersion?: string;

}

/**
 * Converts an object of type 'DataBrewDeleteRecipeVersionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewDeleteRecipeVersionResponse(obj: DataBrewDeleteRecipeVersionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'RecipeVersion': obj.recipeVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewDeleteScheduleRequest
 */
export interface DataBrewDeleteScheduleRequest {
  /**
   * @schema DataBrewDeleteScheduleRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'DataBrewDeleteScheduleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewDeleteScheduleRequest(obj: DataBrewDeleteScheduleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewDeleteScheduleResponse
 */
export interface DataBrewDeleteScheduleResponse {
  /**
   * @schema DataBrewDeleteScheduleResponse#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'DataBrewDeleteScheduleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewDeleteScheduleResponse(obj: DataBrewDeleteScheduleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewDescribeDatasetRequest
 */
export interface DataBrewDescribeDatasetRequest {
  /**
   * @schema DataBrewDescribeDatasetRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'DataBrewDescribeDatasetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewDescribeDatasetRequest(obj: DataBrewDescribeDatasetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewDescribeDatasetResponse
 */
export interface DataBrewDescribeDatasetResponse {
  /**
   * @schema DataBrewDescribeDatasetResponse#CreatedBy
   */
  readonly createdBy?: string;

  /**
   * @schema DataBrewDescribeDatasetResponse#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema DataBrewDescribeDatasetResponse#Name
   */
  readonly name?: string;

  /**
   * @schema DataBrewDescribeDatasetResponse#Format
   */
  readonly format?: string;

  /**
   * @schema DataBrewDescribeDatasetResponse#FormatOptions
   */
  readonly formatOptions?: DataBrewFormatOptions;

  /**
   * @schema DataBrewDescribeDatasetResponse#Input
   */
  readonly input?: DataBrewInput;

  /**
   * @schema DataBrewDescribeDatasetResponse#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema DataBrewDescribeDatasetResponse#LastModifiedBy
   */
  readonly lastModifiedBy?: string;

  /**
   * @schema DataBrewDescribeDatasetResponse#Source
   */
  readonly source?: string;

  /**
   * @schema DataBrewDescribeDatasetResponse#PathOptions
   */
  readonly pathOptions?: DataBrewPathOptions;

  /**
   * @schema DataBrewDescribeDatasetResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema DataBrewDescribeDatasetResponse#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'DataBrewDescribeDatasetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewDescribeDatasetResponse(obj: DataBrewDescribeDatasetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CreatedBy': obj.createdBy,
    'CreateDate': obj.createDate,
    'Name': obj.name,
    'Format': obj.format,
    'FormatOptions': toJson_DataBrewFormatOptions(obj.formatOptions),
    'Input': toJson_DataBrewInput(obj.input),
    'LastModifiedDate': obj.lastModifiedDate,
    'LastModifiedBy': obj.lastModifiedBy,
    'Source': obj.source,
    'PathOptions': toJson_DataBrewPathOptions(obj.pathOptions),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewDescribeJobRequest
 */
export interface DataBrewDescribeJobRequest {
  /**
   * @schema DataBrewDescribeJobRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'DataBrewDescribeJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewDescribeJobRequest(obj: DataBrewDescribeJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewDescribeJobResponse
 */
export interface DataBrewDescribeJobResponse {
  /**
   * @schema DataBrewDescribeJobResponse#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema DataBrewDescribeJobResponse#CreatedBy
   */
  readonly createdBy?: string;

  /**
   * @schema DataBrewDescribeJobResponse#DatasetName
   */
  readonly datasetName?: string;

  /**
   * @schema DataBrewDescribeJobResponse#EncryptionKeyArn
   */
  readonly encryptionKeyArn?: string;

  /**
   * @schema DataBrewDescribeJobResponse#EncryptionMode
   */
  readonly encryptionMode?: string;

  /**
   * @schema DataBrewDescribeJobResponse#Name
   */
  readonly name?: string;

  /**
   * @schema DataBrewDescribeJobResponse#Type
   */
  readonly type?: string;

  /**
   * @schema DataBrewDescribeJobResponse#LastModifiedBy
   */
  readonly lastModifiedBy?: string;

  /**
   * @schema DataBrewDescribeJobResponse#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema DataBrewDescribeJobResponse#LogSubscription
   */
  readonly logSubscription?: string;

  /**
   * @schema DataBrewDescribeJobResponse#MaxCapacity
   */
  readonly maxCapacity?: number;

  /**
   * @schema DataBrewDescribeJobResponse#MaxRetries
   */
  readonly maxRetries?: number;

  /**
   * @schema DataBrewDescribeJobResponse#Outputs
   */
  readonly outputs?: DataBrewOutput[];

  /**
   * @schema DataBrewDescribeJobResponse#DataCatalogOutputs
   */
  readonly dataCatalogOutputs?: DataBrewDataCatalogOutput[];

  /**
   * @schema DataBrewDescribeJobResponse#DatabaseOutputs
   */
  readonly databaseOutputs?: DataBrewDatabaseOutput[];

  /**
   * @schema DataBrewDescribeJobResponse#ProjectName
   */
  readonly projectName?: string;

  /**
   * @schema DataBrewDescribeJobResponse#ProfileConfiguration
   */
  readonly profileConfiguration?: DataBrewProfileConfiguration;

  /**
   * @schema DataBrewDescribeJobResponse#RecipeReference
   */
  readonly recipeReference?: DataBrewRecipeReference;

  /**
   * @schema DataBrewDescribeJobResponse#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema DataBrewDescribeJobResponse#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema DataBrewDescribeJobResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema DataBrewDescribeJobResponse#Timeout
   */
  readonly timeout?: number;

  /**
   * @schema DataBrewDescribeJobResponse#JobSample
   */
  readonly jobSample?: DataBrewJobSample;

}

/**
 * Converts an object of type 'DataBrewDescribeJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewDescribeJobResponse(obj: DataBrewDescribeJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CreateDate': obj.createDate,
    'CreatedBy': obj.createdBy,
    'DatasetName': obj.datasetName,
    'EncryptionKeyArn': obj.encryptionKeyArn,
    'EncryptionMode': obj.encryptionMode,
    'Name': obj.name,
    'Type': obj.type,
    'LastModifiedBy': obj.lastModifiedBy,
    'LastModifiedDate': obj.lastModifiedDate,
    'LogSubscription': obj.logSubscription,
    'MaxCapacity': obj.maxCapacity,
    'MaxRetries': obj.maxRetries,
    'Outputs': obj.outputs?.map(y => toJson_DataBrewOutput(y)),
    'DataCatalogOutputs': obj.dataCatalogOutputs?.map(y => toJson_DataBrewDataCatalogOutput(y)),
    'DatabaseOutputs': obj.databaseOutputs?.map(y => toJson_DataBrewDatabaseOutput(y)),
    'ProjectName': obj.projectName,
    'ProfileConfiguration': toJson_DataBrewProfileConfiguration(obj.profileConfiguration),
    'RecipeReference': toJson_DataBrewRecipeReference(obj.recipeReference),
    'ResourceArn': obj.resourceArn,
    'RoleArn': obj.roleArn,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Timeout': obj.timeout,
    'JobSample': toJson_DataBrewJobSample(obj.jobSample),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewDescribeJobRunRequest
 */
export interface DataBrewDescribeJobRunRequest {
  /**
   * @schema DataBrewDescribeJobRunRequest#Name
   */
  readonly name?: string;

  /**
   * @schema DataBrewDescribeJobRunRequest#RunId
   */
  readonly runId?: string;

}

/**
 * Converts an object of type 'DataBrewDescribeJobRunRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewDescribeJobRunRequest(obj: DataBrewDescribeJobRunRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'RunId': obj.runId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewDescribeJobRunResponse
 */
export interface DataBrewDescribeJobRunResponse {
  /**
   * @schema DataBrewDescribeJobRunResponse#Attempt
   */
  readonly attempt?: number;

  /**
   * @schema DataBrewDescribeJobRunResponse#CompletedOn
   */
  readonly completedOn?: string;

  /**
   * @schema DataBrewDescribeJobRunResponse#DatasetName
   */
  readonly datasetName?: string;

  /**
   * @schema DataBrewDescribeJobRunResponse#ErrorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema DataBrewDescribeJobRunResponse#ExecutionTime
   */
  readonly executionTime?: number;

  /**
   * @schema DataBrewDescribeJobRunResponse#JobName
   */
  readonly jobName?: string;

  /**
   * @schema DataBrewDescribeJobRunResponse#ProfileConfiguration
   */
  readonly profileConfiguration?: DataBrewProfileConfiguration;

  /**
   * @schema DataBrewDescribeJobRunResponse#RunId
   */
  readonly runId?: string;

  /**
   * @schema DataBrewDescribeJobRunResponse#State
   */
  readonly state?: string;

  /**
   * @schema DataBrewDescribeJobRunResponse#LogSubscription
   */
  readonly logSubscription?: string;

  /**
   * @schema DataBrewDescribeJobRunResponse#LogGroupName
   */
  readonly logGroupName?: string;

  /**
   * @schema DataBrewDescribeJobRunResponse#Outputs
   */
  readonly outputs?: DataBrewOutput[];

  /**
   * @schema DataBrewDescribeJobRunResponse#DataCatalogOutputs
   */
  readonly dataCatalogOutputs?: DataBrewDataCatalogOutput[];

  /**
   * @schema DataBrewDescribeJobRunResponse#DatabaseOutputs
   */
  readonly databaseOutputs?: DataBrewDatabaseOutput[];

  /**
   * @schema DataBrewDescribeJobRunResponse#RecipeReference
   */
  readonly recipeReference?: DataBrewRecipeReference;

  /**
   * @schema DataBrewDescribeJobRunResponse#StartedBy
   */
  readonly startedBy?: string;

  /**
   * @schema DataBrewDescribeJobRunResponse#StartedOn
   */
  readonly startedOn?: string;

  /**
   * @schema DataBrewDescribeJobRunResponse#JobSample
   */
  readonly jobSample?: DataBrewJobSample;

}

/**
 * Converts an object of type 'DataBrewDescribeJobRunResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewDescribeJobRunResponse(obj: DataBrewDescribeJobRunResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Attempt': obj.attempt,
    'CompletedOn': obj.completedOn,
    'DatasetName': obj.datasetName,
    'ErrorMessage': obj.errorMessage,
    'ExecutionTime': obj.executionTime,
    'JobName': obj.jobName,
    'ProfileConfiguration': toJson_DataBrewProfileConfiguration(obj.profileConfiguration),
    'RunId': obj.runId,
    'State': obj.state,
    'LogSubscription': obj.logSubscription,
    'LogGroupName': obj.logGroupName,
    'Outputs': obj.outputs?.map(y => toJson_DataBrewOutput(y)),
    'DataCatalogOutputs': obj.dataCatalogOutputs?.map(y => toJson_DataBrewDataCatalogOutput(y)),
    'DatabaseOutputs': obj.databaseOutputs?.map(y => toJson_DataBrewDatabaseOutput(y)),
    'RecipeReference': toJson_DataBrewRecipeReference(obj.recipeReference),
    'StartedBy': obj.startedBy,
    'StartedOn': obj.startedOn,
    'JobSample': toJson_DataBrewJobSample(obj.jobSample),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewDescribeProjectRequest
 */
export interface DataBrewDescribeProjectRequest {
  /**
   * @schema DataBrewDescribeProjectRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'DataBrewDescribeProjectRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewDescribeProjectRequest(obj: DataBrewDescribeProjectRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewDescribeProjectResponse
 */
export interface DataBrewDescribeProjectResponse {
  /**
   * @schema DataBrewDescribeProjectResponse#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema DataBrewDescribeProjectResponse#CreatedBy
   */
  readonly createdBy?: string;

  /**
   * @schema DataBrewDescribeProjectResponse#DatasetName
   */
  readonly datasetName?: string;

  /**
   * @schema DataBrewDescribeProjectResponse#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema DataBrewDescribeProjectResponse#LastModifiedBy
   */
  readonly lastModifiedBy?: string;

  /**
   * @schema DataBrewDescribeProjectResponse#Name
   */
  readonly name?: string;

  /**
   * @schema DataBrewDescribeProjectResponse#RecipeName
   */
  readonly recipeName?: string;

  /**
   * @schema DataBrewDescribeProjectResponse#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema DataBrewDescribeProjectResponse#Sample
   */
  readonly sample?: DataBrewSample;

  /**
   * @schema DataBrewDescribeProjectResponse#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema DataBrewDescribeProjectResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema DataBrewDescribeProjectResponse#SessionStatus
   */
  readonly sessionStatus?: string;

  /**
   * @schema DataBrewDescribeProjectResponse#OpenedBy
   */
  readonly openedBy?: string;

  /**
   * @schema DataBrewDescribeProjectResponse#OpenDate
   */
  readonly openDate?: string;

}

/**
 * Converts an object of type 'DataBrewDescribeProjectResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewDescribeProjectResponse(obj: DataBrewDescribeProjectResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CreateDate': obj.createDate,
    'CreatedBy': obj.createdBy,
    'DatasetName': obj.datasetName,
    'LastModifiedDate': obj.lastModifiedDate,
    'LastModifiedBy': obj.lastModifiedBy,
    'Name': obj.name,
    'RecipeName': obj.recipeName,
    'ResourceArn': obj.resourceArn,
    'Sample': toJson_DataBrewSample(obj.sample),
    'RoleArn': obj.roleArn,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'SessionStatus': obj.sessionStatus,
    'OpenedBy': obj.openedBy,
    'OpenDate': obj.openDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewDescribeRecipeRequest
 */
export interface DataBrewDescribeRecipeRequest {
  /**
   * @schema DataBrewDescribeRecipeRequest#Name
   */
  readonly name?: string;

  /**
   * @schema DataBrewDescribeRecipeRequest#RecipeVersion
   */
  readonly recipeVersion?: string;

}

/**
 * Converts an object of type 'DataBrewDescribeRecipeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewDescribeRecipeRequest(obj: DataBrewDescribeRecipeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'RecipeVersion': obj.recipeVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewDescribeRecipeResponse
 */
export interface DataBrewDescribeRecipeResponse {
  /**
   * @schema DataBrewDescribeRecipeResponse#CreatedBy
   */
  readonly createdBy?: string;

  /**
   * @schema DataBrewDescribeRecipeResponse#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema DataBrewDescribeRecipeResponse#LastModifiedBy
   */
  readonly lastModifiedBy?: string;

  /**
   * @schema DataBrewDescribeRecipeResponse#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema DataBrewDescribeRecipeResponse#ProjectName
   */
  readonly projectName?: string;

  /**
   * @schema DataBrewDescribeRecipeResponse#PublishedBy
   */
  readonly publishedBy?: string;

  /**
   * @schema DataBrewDescribeRecipeResponse#PublishedDate
   */
  readonly publishedDate?: string;

  /**
   * @schema DataBrewDescribeRecipeResponse#Description
   */
  readonly description?: string;

  /**
   * @schema DataBrewDescribeRecipeResponse#Name
   */
  readonly name?: string;

  /**
   * @schema DataBrewDescribeRecipeResponse#Steps
   */
  readonly steps?: DataBrewRecipeStep[];

  /**
   * @schema DataBrewDescribeRecipeResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema DataBrewDescribeRecipeResponse#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema DataBrewDescribeRecipeResponse#RecipeVersion
   */
  readonly recipeVersion?: string;

}

/**
 * Converts an object of type 'DataBrewDescribeRecipeResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewDescribeRecipeResponse(obj: DataBrewDescribeRecipeResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CreatedBy': obj.createdBy,
    'CreateDate': obj.createDate,
    'LastModifiedBy': obj.lastModifiedBy,
    'LastModifiedDate': obj.lastModifiedDate,
    'ProjectName': obj.projectName,
    'PublishedBy': obj.publishedBy,
    'PublishedDate': obj.publishedDate,
    'Description': obj.description,
    'Name': obj.name,
    'Steps': obj.steps?.map(y => toJson_DataBrewRecipeStep(y)),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'ResourceArn': obj.resourceArn,
    'RecipeVersion': obj.recipeVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewDescribeScheduleRequest
 */
export interface DataBrewDescribeScheduleRequest {
  /**
   * @schema DataBrewDescribeScheduleRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'DataBrewDescribeScheduleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewDescribeScheduleRequest(obj: DataBrewDescribeScheduleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewDescribeScheduleResponse
 */
export interface DataBrewDescribeScheduleResponse {
  /**
   * @schema DataBrewDescribeScheduleResponse#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema DataBrewDescribeScheduleResponse#CreatedBy
   */
  readonly createdBy?: string;

  /**
   * @schema DataBrewDescribeScheduleResponse#JobNames
   */
  readonly jobNames?: string[];

  /**
   * @schema DataBrewDescribeScheduleResponse#LastModifiedBy
   */
  readonly lastModifiedBy?: string;

  /**
   * @schema DataBrewDescribeScheduleResponse#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema DataBrewDescribeScheduleResponse#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema DataBrewDescribeScheduleResponse#CronExpression
   */
  readonly cronExpression?: string;

  /**
   * @schema DataBrewDescribeScheduleResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema DataBrewDescribeScheduleResponse#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'DataBrewDescribeScheduleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewDescribeScheduleResponse(obj: DataBrewDescribeScheduleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CreateDate': obj.createDate,
    'CreatedBy': obj.createdBy,
    'JobNames': obj.jobNames?.map(y => y),
    'LastModifiedBy': obj.lastModifiedBy,
    'LastModifiedDate': obj.lastModifiedDate,
    'ResourceArn': obj.resourceArn,
    'CronExpression': obj.cronExpression,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewListDatasetsRequest
 */
export interface DataBrewListDatasetsRequest {
  /**
   * @schema DataBrewListDatasetsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DataBrewListDatasetsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DataBrewListDatasetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewListDatasetsRequest(obj: DataBrewListDatasetsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewListDatasetsResponse
 */
export interface DataBrewListDatasetsResponse {
  /**
   * @schema DataBrewListDatasetsResponse#Datasets
   */
  readonly datasets?: DataBrewDataset[];

  /**
   * @schema DataBrewListDatasetsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DataBrewListDatasetsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewListDatasetsResponse(obj: DataBrewListDatasetsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Datasets': obj.datasets?.map(y => toJson_DataBrewDataset(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewListJobRunsRequest
 */
export interface DataBrewListJobRunsRequest {
  /**
   * @schema DataBrewListJobRunsRequest#Name
   */
  readonly name?: string;

  /**
   * @schema DataBrewListJobRunsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DataBrewListJobRunsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DataBrewListJobRunsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewListJobRunsRequest(obj: DataBrewListJobRunsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewListJobRunsResponse
 */
export interface DataBrewListJobRunsResponse {
  /**
   * @schema DataBrewListJobRunsResponse#JobRuns
   */
  readonly jobRuns?: DataBrewJobRun[];

  /**
   * @schema DataBrewListJobRunsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DataBrewListJobRunsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewListJobRunsResponse(obj: DataBrewListJobRunsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobRuns': obj.jobRuns?.map(y => toJson_DataBrewJobRun(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewListJobsRequest
 */
export interface DataBrewListJobsRequest {
  /**
   * @schema DataBrewListJobsRequest#DatasetName
   */
  readonly datasetName?: string;

  /**
   * @schema DataBrewListJobsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DataBrewListJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DataBrewListJobsRequest#ProjectName
   */
  readonly projectName?: string;

}

/**
 * Converts an object of type 'DataBrewListJobsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewListJobsRequest(obj: DataBrewListJobsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DatasetName': obj.datasetName,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'ProjectName': obj.projectName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewListJobsResponse
 */
export interface DataBrewListJobsResponse {
  /**
   * @schema DataBrewListJobsResponse#Jobs
   */
  readonly jobs?: DataBrewJob[];

  /**
   * @schema DataBrewListJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DataBrewListJobsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewListJobsResponse(obj: DataBrewListJobsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Jobs': obj.jobs?.map(y => toJson_DataBrewJob(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewListProjectsRequest
 */
export interface DataBrewListProjectsRequest {
  /**
   * @schema DataBrewListProjectsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DataBrewListProjectsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'DataBrewListProjectsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewListProjectsRequest(obj: DataBrewListProjectsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewListProjectsResponse
 */
export interface DataBrewListProjectsResponse {
  /**
   * @schema DataBrewListProjectsResponse#Projects
   */
  readonly projects?: DataBrewProject[];

  /**
   * @schema DataBrewListProjectsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DataBrewListProjectsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewListProjectsResponse(obj: DataBrewListProjectsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Projects': obj.projects?.map(y => toJson_DataBrewProject(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewListRecipeVersionsRequest
 */
export interface DataBrewListRecipeVersionsRequest {
  /**
   * @schema DataBrewListRecipeVersionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DataBrewListRecipeVersionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DataBrewListRecipeVersionsRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'DataBrewListRecipeVersionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewListRecipeVersionsRequest(obj: DataBrewListRecipeVersionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewListRecipeVersionsResponse
 */
export interface DataBrewListRecipeVersionsResponse {
  /**
   * @schema DataBrewListRecipeVersionsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DataBrewListRecipeVersionsResponse#Recipes
   */
  readonly recipes?: DataBrewRecipe[];

}

/**
 * Converts an object of type 'DataBrewListRecipeVersionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewListRecipeVersionsResponse(obj: DataBrewListRecipeVersionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'Recipes': obj.recipes?.map(y => toJson_DataBrewRecipe(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewListRecipesRequest
 */
export interface DataBrewListRecipesRequest {
  /**
   * @schema DataBrewListRecipesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DataBrewListRecipesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DataBrewListRecipesRequest#RecipeVersion
   */
  readonly recipeVersion?: string;

}

/**
 * Converts an object of type 'DataBrewListRecipesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewListRecipesRequest(obj: DataBrewListRecipesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'RecipeVersion': obj.recipeVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewListRecipesResponse
 */
export interface DataBrewListRecipesResponse {
  /**
   * @schema DataBrewListRecipesResponse#Recipes
   */
  readonly recipes?: DataBrewRecipe[];

  /**
   * @schema DataBrewListRecipesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DataBrewListRecipesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewListRecipesResponse(obj: DataBrewListRecipesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Recipes': obj.recipes?.map(y => toJson_DataBrewRecipe(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewListSchedulesRequest
 */
export interface DataBrewListSchedulesRequest {
  /**
   * @schema DataBrewListSchedulesRequest#JobName
   */
  readonly jobName?: string;

  /**
   * @schema DataBrewListSchedulesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DataBrewListSchedulesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DataBrewListSchedulesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewListSchedulesRequest(obj: DataBrewListSchedulesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobName': obj.jobName,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewListSchedulesResponse
 */
export interface DataBrewListSchedulesResponse {
  /**
   * @schema DataBrewListSchedulesResponse#Schedules
   */
  readonly schedules?: DataBrewSchedule[];

  /**
   * @schema DataBrewListSchedulesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DataBrewListSchedulesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewListSchedulesResponse(obj: DataBrewListSchedulesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Schedules': obj.schedules?.map(y => toJson_DataBrewSchedule(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewListTagsForResourceRequest
 */
export interface DataBrewListTagsForResourceRequest {
  /**
   * @schema DataBrewListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'DataBrewListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewListTagsForResourceRequest(obj: DataBrewListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewListTagsForResourceResponse
 */
export interface DataBrewListTagsForResourceResponse {
  /**
   * @schema DataBrewListTagsForResourceResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'DataBrewListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewListTagsForResourceResponse(obj: DataBrewListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewPublishRecipeRequest
 */
export interface DataBrewPublishRecipeRequest {
  /**
   * @schema DataBrewPublishRecipeRequest#Description
   */
  readonly description?: string;

  /**
   * @schema DataBrewPublishRecipeRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'DataBrewPublishRecipeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewPublishRecipeRequest(obj: DataBrewPublishRecipeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Description': obj.description,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewPublishRecipeResponse
 */
export interface DataBrewPublishRecipeResponse {
  /**
   * @schema DataBrewPublishRecipeResponse#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'DataBrewPublishRecipeResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewPublishRecipeResponse(obj: DataBrewPublishRecipeResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewSendProjectSessionActionRequest
 */
export interface DataBrewSendProjectSessionActionRequest {
  /**
   * @schema DataBrewSendProjectSessionActionRequest#Preview
   */
  readonly preview?: boolean;

  /**
   * @schema DataBrewSendProjectSessionActionRequest#Name
   */
  readonly name?: string;

  /**
   * @schema DataBrewSendProjectSessionActionRequest#RecipeStep
   */
  readonly recipeStep?: DataBrewRecipeStep;

  /**
   * @schema DataBrewSendProjectSessionActionRequest#StepIndex
   */
  readonly stepIndex?: number;

  /**
   * @schema DataBrewSendProjectSessionActionRequest#ClientSessionId
   */
  readonly clientSessionId?: string;

  /**
   * @schema DataBrewSendProjectSessionActionRequest#ViewFrame
   */
  readonly viewFrame?: DataBrewViewFrame;

}

/**
 * Converts an object of type 'DataBrewSendProjectSessionActionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewSendProjectSessionActionRequest(obj: DataBrewSendProjectSessionActionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Preview': obj.preview,
    'Name': obj.name,
    'RecipeStep': toJson_DataBrewRecipeStep(obj.recipeStep),
    'StepIndex': obj.stepIndex,
    'ClientSessionId': obj.clientSessionId,
    'ViewFrame': toJson_DataBrewViewFrame(obj.viewFrame),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewSendProjectSessionActionResponse
 */
export interface DataBrewSendProjectSessionActionResponse {
  /**
   * @schema DataBrewSendProjectSessionActionResponse#Result
   */
  readonly result?: string;

  /**
   * @schema DataBrewSendProjectSessionActionResponse#Name
   */
  readonly name?: string;

  /**
   * @schema DataBrewSendProjectSessionActionResponse#ActionId
   */
  readonly actionId?: number;

}

/**
 * Converts an object of type 'DataBrewSendProjectSessionActionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewSendProjectSessionActionResponse(obj: DataBrewSendProjectSessionActionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Result': obj.result,
    'Name': obj.name,
    'ActionId': obj.actionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewStartJobRunRequest
 */
export interface DataBrewStartJobRunRequest {
  /**
   * @schema DataBrewStartJobRunRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'DataBrewStartJobRunRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewStartJobRunRequest(obj: DataBrewStartJobRunRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewStartJobRunResponse
 */
export interface DataBrewStartJobRunResponse {
  /**
   * @schema DataBrewStartJobRunResponse#RunId
   */
  readonly runId?: string;

}

/**
 * Converts an object of type 'DataBrewStartJobRunResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewStartJobRunResponse(obj: DataBrewStartJobRunResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RunId': obj.runId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewStartProjectSessionRequest
 */
export interface DataBrewStartProjectSessionRequest {
  /**
   * @schema DataBrewStartProjectSessionRequest#Name
   */
  readonly name?: string;

  /**
   * @schema DataBrewStartProjectSessionRequest#AssumeControl
   */
  readonly assumeControl?: boolean;

}

/**
 * Converts an object of type 'DataBrewStartProjectSessionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewStartProjectSessionRequest(obj: DataBrewStartProjectSessionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'AssumeControl': obj.assumeControl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewStartProjectSessionResponse
 */
export interface DataBrewStartProjectSessionResponse {
  /**
   * @schema DataBrewStartProjectSessionResponse#Name
   */
  readonly name?: string;

  /**
   * @schema DataBrewStartProjectSessionResponse#ClientSessionId
   */
  readonly clientSessionId?: string;

}

/**
 * Converts an object of type 'DataBrewStartProjectSessionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewStartProjectSessionResponse(obj: DataBrewStartProjectSessionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'ClientSessionId': obj.clientSessionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewStopJobRunRequest
 */
export interface DataBrewStopJobRunRequest {
  /**
   * @schema DataBrewStopJobRunRequest#Name
   */
  readonly name?: string;

  /**
   * @schema DataBrewStopJobRunRequest#RunId
   */
  readonly runId?: string;

}

/**
 * Converts an object of type 'DataBrewStopJobRunRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewStopJobRunRequest(obj: DataBrewStopJobRunRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'RunId': obj.runId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewStopJobRunResponse
 */
export interface DataBrewStopJobRunResponse {
  /**
   * @schema DataBrewStopJobRunResponse#RunId
   */
  readonly runId?: string;

}

/**
 * Converts an object of type 'DataBrewStopJobRunResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewStopJobRunResponse(obj: DataBrewStopJobRunResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RunId': obj.runId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewTagResourceRequest
 */
export interface DataBrewTagResourceRequest {
  /**
   * @schema DataBrewTagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema DataBrewTagResourceRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'DataBrewTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewTagResourceRequest(obj: DataBrewTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewTagResourceResponse
 */
export interface DataBrewTagResourceResponse {
}

/**
 * Converts an object of type 'DataBrewTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewTagResourceResponse(obj: DataBrewTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewUntagResourceRequest
 */
export interface DataBrewUntagResourceRequest {
  /**
   * @schema DataBrewUntagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema DataBrewUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'DataBrewUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewUntagResourceRequest(obj: DataBrewUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewUntagResourceResponse
 */
export interface DataBrewUntagResourceResponse {
}

/**
 * Converts an object of type 'DataBrewUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewUntagResourceResponse(obj: DataBrewUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewUpdateDatasetRequest
 */
export interface DataBrewUpdateDatasetRequest {
  /**
   * @schema DataBrewUpdateDatasetRequest#Name
   */
  readonly name?: string;

  /**
   * @schema DataBrewUpdateDatasetRequest#Format
   */
  readonly format?: string;

  /**
   * @schema DataBrewUpdateDatasetRequest#FormatOptions
   */
  readonly formatOptions?: DataBrewFormatOptions;

  /**
   * @schema DataBrewUpdateDatasetRequest#Input
   */
  readonly input?: DataBrewInput;

  /**
   * @schema DataBrewUpdateDatasetRequest#PathOptions
   */
  readonly pathOptions?: DataBrewPathOptions;

}

/**
 * Converts an object of type 'DataBrewUpdateDatasetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewUpdateDatasetRequest(obj: DataBrewUpdateDatasetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Format': obj.format,
    'FormatOptions': toJson_DataBrewFormatOptions(obj.formatOptions),
    'Input': toJson_DataBrewInput(obj.input),
    'PathOptions': toJson_DataBrewPathOptions(obj.pathOptions),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewUpdateDatasetResponse
 */
export interface DataBrewUpdateDatasetResponse {
  /**
   * @schema DataBrewUpdateDatasetResponse#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'DataBrewUpdateDatasetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewUpdateDatasetResponse(obj: DataBrewUpdateDatasetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewUpdateProfileJobRequest
 */
export interface DataBrewUpdateProfileJobRequest {
  /**
   * @schema DataBrewUpdateProfileJobRequest#Configuration
   */
  readonly configuration?: DataBrewProfileConfiguration;

  /**
   * @schema DataBrewUpdateProfileJobRequest#EncryptionKeyArn
   */
  readonly encryptionKeyArn?: string;

  /**
   * @schema DataBrewUpdateProfileJobRequest#EncryptionMode
   */
  readonly encryptionMode?: string;

  /**
   * @schema DataBrewUpdateProfileJobRequest#Name
   */
  readonly name?: string;

  /**
   * @schema DataBrewUpdateProfileJobRequest#LogSubscription
   */
  readonly logSubscription?: string;

  /**
   * @schema DataBrewUpdateProfileJobRequest#MaxCapacity
   */
  readonly maxCapacity?: number;

  /**
   * @schema DataBrewUpdateProfileJobRequest#MaxRetries
   */
  readonly maxRetries?: number;

  /**
   * @schema DataBrewUpdateProfileJobRequest#OutputLocation
   */
  readonly outputLocation?: DataBrewS3Location;

  /**
   * @schema DataBrewUpdateProfileJobRequest#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema DataBrewUpdateProfileJobRequest#Timeout
   */
  readonly timeout?: number;

  /**
   * @schema DataBrewUpdateProfileJobRequest#JobSample
   */
  readonly jobSample?: DataBrewJobSample;

}

/**
 * Converts an object of type 'DataBrewUpdateProfileJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewUpdateProfileJobRequest(obj: DataBrewUpdateProfileJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Configuration': toJson_DataBrewProfileConfiguration(obj.configuration),
    'EncryptionKeyArn': obj.encryptionKeyArn,
    'EncryptionMode': obj.encryptionMode,
    'Name': obj.name,
    'LogSubscription': obj.logSubscription,
    'MaxCapacity': obj.maxCapacity,
    'MaxRetries': obj.maxRetries,
    'OutputLocation': toJson_DataBrewS3Location(obj.outputLocation),
    'RoleArn': obj.roleArn,
    'Timeout': obj.timeout,
    'JobSample': toJson_DataBrewJobSample(obj.jobSample),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewUpdateProfileJobResponse
 */
export interface DataBrewUpdateProfileJobResponse {
  /**
   * @schema DataBrewUpdateProfileJobResponse#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'DataBrewUpdateProfileJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewUpdateProfileJobResponse(obj: DataBrewUpdateProfileJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewUpdateProjectRequest
 */
export interface DataBrewUpdateProjectRequest {
  /**
   * @schema DataBrewUpdateProjectRequest#Sample
   */
  readonly sample?: DataBrewSample;

  /**
   * @schema DataBrewUpdateProjectRequest#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema DataBrewUpdateProjectRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'DataBrewUpdateProjectRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewUpdateProjectRequest(obj: DataBrewUpdateProjectRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Sample': toJson_DataBrewSample(obj.sample),
    'RoleArn': obj.roleArn,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewUpdateProjectResponse
 */
export interface DataBrewUpdateProjectResponse {
  /**
   * @schema DataBrewUpdateProjectResponse#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema DataBrewUpdateProjectResponse#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'DataBrewUpdateProjectResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewUpdateProjectResponse(obj: DataBrewUpdateProjectResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LastModifiedDate': obj.lastModifiedDate,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewUpdateRecipeRequest
 */
export interface DataBrewUpdateRecipeRequest {
  /**
   * @schema DataBrewUpdateRecipeRequest#Description
   */
  readonly description?: string;

  /**
   * @schema DataBrewUpdateRecipeRequest#Name
   */
  readonly name?: string;

  /**
   * @schema DataBrewUpdateRecipeRequest#Steps
   */
  readonly steps?: DataBrewRecipeStep[];

}

/**
 * Converts an object of type 'DataBrewUpdateRecipeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewUpdateRecipeRequest(obj: DataBrewUpdateRecipeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Description': obj.description,
    'Name': obj.name,
    'Steps': obj.steps?.map(y => toJson_DataBrewRecipeStep(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewUpdateRecipeResponse
 */
export interface DataBrewUpdateRecipeResponse {
  /**
   * @schema DataBrewUpdateRecipeResponse#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'DataBrewUpdateRecipeResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewUpdateRecipeResponse(obj: DataBrewUpdateRecipeResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewUpdateRecipeJobRequest
 */
export interface DataBrewUpdateRecipeJobRequest {
  /**
   * @schema DataBrewUpdateRecipeJobRequest#EncryptionKeyArn
   */
  readonly encryptionKeyArn?: string;

  /**
   * @schema DataBrewUpdateRecipeJobRequest#EncryptionMode
   */
  readonly encryptionMode?: string;

  /**
   * @schema DataBrewUpdateRecipeJobRequest#Name
   */
  readonly name?: string;

  /**
   * @schema DataBrewUpdateRecipeJobRequest#LogSubscription
   */
  readonly logSubscription?: string;

  /**
   * @schema DataBrewUpdateRecipeJobRequest#MaxCapacity
   */
  readonly maxCapacity?: number;

  /**
   * @schema DataBrewUpdateRecipeJobRequest#MaxRetries
   */
  readonly maxRetries?: number;

  /**
   * @schema DataBrewUpdateRecipeJobRequest#Outputs
   */
  readonly outputs?: DataBrewOutput[];

  /**
   * @schema DataBrewUpdateRecipeJobRequest#DataCatalogOutputs
   */
  readonly dataCatalogOutputs?: DataBrewDataCatalogOutput[];

  /**
   * @schema DataBrewUpdateRecipeJobRequest#DatabaseOutputs
   */
  readonly databaseOutputs?: DataBrewDatabaseOutput[];

  /**
   * @schema DataBrewUpdateRecipeJobRequest#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema DataBrewUpdateRecipeJobRequest#Timeout
   */
  readonly timeout?: number;

}

/**
 * Converts an object of type 'DataBrewUpdateRecipeJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewUpdateRecipeJobRequest(obj: DataBrewUpdateRecipeJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EncryptionKeyArn': obj.encryptionKeyArn,
    'EncryptionMode': obj.encryptionMode,
    'Name': obj.name,
    'LogSubscription': obj.logSubscription,
    'MaxCapacity': obj.maxCapacity,
    'MaxRetries': obj.maxRetries,
    'Outputs': obj.outputs?.map(y => toJson_DataBrewOutput(y)),
    'DataCatalogOutputs': obj.dataCatalogOutputs?.map(y => toJson_DataBrewDataCatalogOutput(y)),
    'DatabaseOutputs': obj.databaseOutputs?.map(y => toJson_DataBrewDatabaseOutput(y)),
    'RoleArn': obj.roleArn,
    'Timeout': obj.timeout,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewUpdateRecipeJobResponse
 */
export interface DataBrewUpdateRecipeJobResponse {
  /**
   * @schema DataBrewUpdateRecipeJobResponse#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'DataBrewUpdateRecipeJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewUpdateRecipeJobResponse(obj: DataBrewUpdateRecipeJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewUpdateScheduleRequest
 */
export interface DataBrewUpdateScheduleRequest {
  /**
   * @schema DataBrewUpdateScheduleRequest#JobNames
   */
  readonly jobNames?: string[];

  /**
   * @schema DataBrewUpdateScheduleRequest#CronExpression
   */
  readonly cronExpression?: string;

  /**
   * @schema DataBrewUpdateScheduleRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'DataBrewUpdateScheduleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewUpdateScheduleRequest(obj: DataBrewUpdateScheduleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobNames': obj.jobNames?.map(y => y),
    'CronExpression': obj.cronExpression,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewUpdateScheduleResponse
 */
export interface DataBrewUpdateScheduleResponse {
  /**
   * @schema DataBrewUpdateScheduleResponse#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'DataBrewUpdateScheduleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewUpdateScheduleResponse(obj: DataBrewUpdateScheduleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewRecipeVersionErrorDetail
 */
export interface DataBrewRecipeVersionErrorDetail {
  /**
   * @schema DataBrewRecipeVersionErrorDetail#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema DataBrewRecipeVersionErrorDetail#ErrorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema DataBrewRecipeVersionErrorDetail#RecipeVersion
   */
  readonly recipeVersion?: string;

}

/**
 * Converts an object of type 'DataBrewRecipeVersionErrorDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewRecipeVersionErrorDetail(obj: DataBrewRecipeVersionErrorDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ErrorCode': obj.errorCode,
    'ErrorMessage': obj.errorMessage,
    'RecipeVersion': obj.recipeVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewFormatOptions
 */
export interface DataBrewFormatOptions {
  /**
   * @schema DataBrewFormatOptions#Json
   */
  readonly json?: DataBrewJsonOptions;

  /**
   * @schema DataBrewFormatOptions#Excel
   */
  readonly excel?: DataBrewExcelOptions;

  /**
   * @schema DataBrewFormatOptions#Csv
   */
  readonly csv?: DataBrewCsvOptions;

}

/**
 * Converts an object of type 'DataBrewFormatOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewFormatOptions(obj: DataBrewFormatOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Json': toJson_DataBrewJsonOptions(obj.json),
    'Excel': toJson_DataBrewExcelOptions(obj.excel),
    'Csv': toJson_DataBrewCsvOptions(obj.csv),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewInput
 */
export interface DataBrewInput {
  /**
   * @schema DataBrewInput#S3InputDefinition
   */
  readonly s3InputDefinition?: DataBrewS3Location;

  /**
   * @schema DataBrewInput#DataCatalogInputDefinition
   */
  readonly dataCatalogInputDefinition?: DataBrewDataCatalogInputDefinition;

  /**
   * @schema DataBrewInput#DatabaseInputDefinition
   */
  readonly databaseInputDefinition?: DataBrewDatabaseInputDefinition;

}

/**
 * Converts an object of type 'DataBrewInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewInput(obj: DataBrewInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3InputDefinition': toJson_DataBrewS3Location(obj.s3InputDefinition),
    'DataCatalogInputDefinition': toJson_DataBrewDataCatalogInputDefinition(obj.dataCatalogInputDefinition),
    'DatabaseInputDefinition': toJson_DataBrewDatabaseInputDefinition(obj.databaseInputDefinition),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewPathOptions
 */
export interface DataBrewPathOptions {
  /**
   * @schema DataBrewPathOptions#LastModifiedDateCondition
   */
  readonly lastModifiedDateCondition?: DataBrewFilterExpression;

  /**
   * @schema DataBrewPathOptions#FilesLimit
   */
  readonly filesLimit?: DataBrewFilesLimit;

  /**
   * @schema DataBrewPathOptions#Parameters
   */
  readonly parameters?: { [key: string]: DataBrewDatasetParameter };

}

/**
 * Converts an object of type 'DataBrewPathOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewPathOptions(obj: DataBrewPathOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LastModifiedDateCondition': toJson_DataBrewFilterExpression(obj.lastModifiedDateCondition),
    'FilesLimit': toJson_DataBrewFilesLimit(obj.filesLimit),
    'Parameters': ((obj.parameters) === undefined) ? undefined : (Object.entries(obj.parameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_DataBrewDatasetParameter(i[1]) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewS3Location
 */
export interface DataBrewS3Location {
  /**
   * @schema DataBrewS3Location#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema DataBrewS3Location#Key
   */
  readonly key?: string;

}

/**
 * Converts an object of type 'DataBrewS3Location' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewS3Location(obj: DataBrewS3Location | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'Key': obj.key,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewProfileConfiguration
 */
export interface DataBrewProfileConfiguration {
  /**
   * @schema DataBrewProfileConfiguration#DatasetStatisticsConfiguration
   */
  readonly datasetStatisticsConfiguration?: DataBrewStatisticsConfiguration;

  /**
   * @schema DataBrewProfileConfiguration#ProfileColumns
   */
  readonly profileColumns?: DataBrewColumnSelector[];

  /**
   * @schema DataBrewProfileConfiguration#ColumnStatisticsConfigurations
   */
  readonly columnStatisticsConfigurations?: DataBrewColumnStatisticsConfiguration[];

}

/**
 * Converts an object of type 'DataBrewProfileConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewProfileConfiguration(obj: DataBrewProfileConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DatasetStatisticsConfiguration': toJson_DataBrewStatisticsConfiguration(obj.datasetStatisticsConfiguration),
    'ProfileColumns': obj.profileColumns?.map(y => toJson_DataBrewColumnSelector(y)),
    'ColumnStatisticsConfigurations': obj.columnStatisticsConfigurations?.map(y => toJson_DataBrewColumnStatisticsConfiguration(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewJobSample
 */
export interface DataBrewJobSample {
  /**
   * @schema DataBrewJobSample#Mode
   */
  readonly mode?: string;

  /**
   * @schema DataBrewJobSample#Size
   */
  readonly size?: number;

}

/**
 * Converts an object of type 'DataBrewJobSample' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewJobSample(obj: DataBrewJobSample | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Mode': obj.mode,
    'Size': obj.size,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewSample
 */
export interface DataBrewSample {
  /**
   * @schema DataBrewSample#Size
   */
  readonly size?: number;

  /**
   * @schema DataBrewSample#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'DataBrewSample' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewSample(obj: DataBrewSample | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Size': obj.size,
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewRecipeStep
 */
export interface DataBrewRecipeStep {
  /**
   * @schema DataBrewRecipeStep#Action
   */
  readonly action?: DataBrewRecipeAction;

  /**
   * @schema DataBrewRecipeStep#ConditionExpressions
   */
  readonly conditionExpressions?: DataBrewConditionExpression[];

}

/**
 * Converts an object of type 'DataBrewRecipeStep' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewRecipeStep(obj: DataBrewRecipeStep | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Action': toJson_DataBrewRecipeAction(obj.action),
    'ConditionExpressions': obj.conditionExpressions?.map(y => toJson_DataBrewConditionExpression(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewOutput
 */
export interface DataBrewOutput {
  /**
   * @schema DataBrewOutput#CompressionFormat
   */
  readonly compressionFormat?: string;

  /**
   * @schema DataBrewOutput#Format
   */
  readonly format?: string;

  /**
   * @schema DataBrewOutput#PartitionColumns
   */
  readonly partitionColumns?: string[];

  /**
   * @schema DataBrewOutput#Location
   */
  readonly location?: DataBrewS3Location;

  /**
   * @schema DataBrewOutput#Overwrite
   */
  readonly overwrite?: boolean;

  /**
   * @schema DataBrewOutput#FormatOptions
   */
  readonly formatOptions?: DataBrewOutputFormatOptions;

}

/**
 * Converts an object of type 'DataBrewOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewOutput(obj: DataBrewOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CompressionFormat': obj.compressionFormat,
    'Format': obj.format,
    'PartitionColumns': obj.partitionColumns?.map(y => y),
    'Location': toJson_DataBrewS3Location(obj.location),
    'Overwrite': obj.overwrite,
    'FormatOptions': toJson_DataBrewOutputFormatOptions(obj.formatOptions),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewDataCatalogOutput
 */
export interface DataBrewDataCatalogOutput {
  /**
   * @schema DataBrewDataCatalogOutput#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema DataBrewDataCatalogOutput#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema DataBrewDataCatalogOutput#TableName
   */
  readonly tableName?: string;

  /**
   * @schema DataBrewDataCatalogOutput#S3Options
   */
  readonly s3Options?: DataBrewS3TableOutputOptions;

  /**
   * @schema DataBrewDataCatalogOutput#DatabaseOptions
   */
  readonly databaseOptions?: DataBrewDatabaseTableOutputOptions;

  /**
   * @schema DataBrewDataCatalogOutput#Overwrite
   */
  readonly overwrite?: boolean;

}

/**
 * Converts an object of type 'DataBrewDataCatalogOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewDataCatalogOutput(obj: DataBrewDataCatalogOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'DatabaseName': obj.databaseName,
    'TableName': obj.tableName,
    'S3Options': toJson_DataBrewS3TableOutputOptions(obj.s3Options),
    'DatabaseOptions': toJson_DataBrewDatabaseTableOutputOptions(obj.databaseOptions),
    'Overwrite': obj.overwrite,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewDatabaseOutput
 */
export interface DataBrewDatabaseOutput {
  /**
   * @schema DataBrewDatabaseOutput#GlueConnectionName
   */
  readonly glueConnectionName?: string;

  /**
   * @schema DataBrewDatabaseOutput#DatabaseOptions
   */
  readonly databaseOptions?: DataBrewDatabaseTableOutputOptions;

  /**
   * @schema DataBrewDatabaseOutput#DatabaseOutputMode
   */
  readonly databaseOutputMode?: string;

}

/**
 * Converts an object of type 'DataBrewDatabaseOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewDatabaseOutput(obj: DataBrewDatabaseOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlueConnectionName': obj.glueConnectionName,
    'DatabaseOptions': toJson_DataBrewDatabaseTableOutputOptions(obj.databaseOptions),
    'DatabaseOutputMode': obj.databaseOutputMode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewRecipeReference
 */
export interface DataBrewRecipeReference {
  /**
   * @schema DataBrewRecipeReference#Name
   */
  readonly name?: string;

  /**
   * @schema DataBrewRecipeReference#RecipeVersion
   */
  readonly recipeVersion?: string;

}

/**
 * Converts an object of type 'DataBrewRecipeReference' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewRecipeReference(obj: DataBrewRecipeReference | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'RecipeVersion': obj.recipeVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewDataset
 */
export interface DataBrewDataset {
  /**
   * @schema DataBrewDataset#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema DataBrewDataset#CreatedBy
   */
  readonly createdBy?: string;

  /**
   * @schema DataBrewDataset#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema DataBrewDataset#Name
   */
  readonly name?: string;

  /**
   * @schema DataBrewDataset#Format
   */
  readonly format?: string;

  /**
   * @schema DataBrewDataset#FormatOptions
   */
  readonly formatOptions?: DataBrewFormatOptions;

  /**
   * @schema DataBrewDataset#Input
   */
  readonly input?: DataBrewInput;

  /**
   * @schema DataBrewDataset#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema DataBrewDataset#LastModifiedBy
   */
  readonly lastModifiedBy?: string;

  /**
   * @schema DataBrewDataset#Source
   */
  readonly source?: string;

  /**
   * @schema DataBrewDataset#PathOptions
   */
  readonly pathOptions?: DataBrewPathOptions;

  /**
   * @schema DataBrewDataset#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema DataBrewDataset#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'DataBrewDataset' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewDataset(obj: DataBrewDataset | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'CreatedBy': obj.createdBy,
    'CreateDate': obj.createDate,
    'Name': obj.name,
    'Format': obj.format,
    'FormatOptions': toJson_DataBrewFormatOptions(obj.formatOptions),
    'Input': toJson_DataBrewInput(obj.input),
    'LastModifiedDate': obj.lastModifiedDate,
    'LastModifiedBy': obj.lastModifiedBy,
    'Source': obj.source,
    'PathOptions': toJson_DataBrewPathOptions(obj.pathOptions),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewJobRun
 */
export interface DataBrewJobRun {
  /**
   * @schema DataBrewJobRun#Attempt
   */
  readonly attempt?: number;

  /**
   * @schema DataBrewJobRun#CompletedOn
   */
  readonly completedOn?: string;

  /**
   * @schema DataBrewJobRun#DatasetName
   */
  readonly datasetName?: string;

  /**
   * @schema DataBrewJobRun#ErrorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema DataBrewJobRun#ExecutionTime
   */
  readonly executionTime?: number;

  /**
   * @schema DataBrewJobRun#JobName
   */
  readonly jobName?: string;

  /**
   * @schema DataBrewJobRun#RunId
   */
  readonly runId?: string;

  /**
   * @schema DataBrewJobRun#State
   */
  readonly state?: string;

  /**
   * @schema DataBrewJobRun#LogSubscription
   */
  readonly logSubscription?: string;

  /**
   * @schema DataBrewJobRun#LogGroupName
   */
  readonly logGroupName?: string;

  /**
   * @schema DataBrewJobRun#Outputs
   */
  readonly outputs?: DataBrewOutput[];

  /**
   * @schema DataBrewJobRun#DataCatalogOutputs
   */
  readonly dataCatalogOutputs?: DataBrewDataCatalogOutput[];

  /**
   * @schema DataBrewJobRun#DatabaseOutputs
   */
  readonly databaseOutputs?: DataBrewDatabaseOutput[];

  /**
   * @schema DataBrewJobRun#RecipeReference
   */
  readonly recipeReference?: DataBrewRecipeReference;

  /**
   * @schema DataBrewJobRun#StartedBy
   */
  readonly startedBy?: string;

  /**
   * @schema DataBrewJobRun#StartedOn
   */
  readonly startedOn?: string;

  /**
   * @schema DataBrewJobRun#JobSample
   */
  readonly jobSample?: DataBrewJobSample;

}

/**
 * Converts an object of type 'DataBrewJobRun' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewJobRun(obj: DataBrewJobRun | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Attempt': obj.attempt,
    'CompletedOn': obj.completedOn,
    'DatasetName': obj.datasetName,
    'ErrorMessage': obj.errorMessage,
    'ExecutionTime': obj.executionTime,
    'JobName': obj.jobName,
    'RunId': obj.runId,
    'State': obj.state,
    'LogSubscription': obj.logSubscription,
    'LogGroupName': obj.logGroupName,
    'Outputs': obj.outputs?.map(y => toJson_DataBrewOutput(y)),
    'DataCatalogOutputs': obj.dataCatalogOutputs?.map(y => toJson_DataBrewDataCatalogOutput(y)),
    'DatabaseOutputs': obj.databaseOutputs?.map(y => toJson_DataBrewDatabaseOutput(y)),
    'RecipeReference': toJson_DataBrewRecipeReference(obj.recipeReference),
    'StartedBy': obj.startedBy,
    'StartedOn': obj.startedOn,
    'JobSample': toJson_DataBrewJobSample(obj.jobSample),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewJob
 */
export interface DataBrewJob {
  /**
   * @schema DataBrewJob#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema DataBrewJob#CreatedBy
   */
  readonly createdBy?: string;

  /**
   * @schema DataBrewJob#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema DataBrewJob#DatasetName
   */
  readonly datasetName?: string;

  /**
   * @schema DataBrewJob#EncryptionKeyArn
   */
  readonly encryptionKeyArn?: string;

  /**
   * @schema DataBrewJob#EncryptionMode
   */
  readonly encryptionMode?: string;

  /**
   * @schema DataBrewJob#Name
   */
  readonly name?: string;

  /**
   * @schema DataBrewJob#Type
   */
  readonly type?: string;

  /**
   * @schema DataBrewJob#LastModifiedBy
   */
  readonly lastModifiedBy?: string;

  /**
   * @schema DataBrewJob#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema DataBrewJob#LogSubscription
   */
  readonly logSubscription?: string;

  /**
   * @schema DataBrewJob#MaxCapacity
   */
  readonly maxCapacity?: number;

  /**
   * @schema DataBrewJob#MaxRetries
   */
  readonly maxRetries?: number;

  /**
   * @schema DataBrewJob#Outputs
   */
  readonly outputs?: DataBrewOutput[];

  /**
   * @schema DataBrewJob#DataCatalogOutputs
   */
  readonly dataCatalogOutputs?: DataBrewDataCatalogOutput[];

  /**
   * @schema DataBrewJob#DatabaseOutputs
   */
  readonly databaseOutputs?: DataBrewDatabaseOutput[];

  /**
   * @schema DataBrewJob#ProjectName
   */
  readonly projectName?: string;

  /**
   * @schema DataBrewJob#RecipeReference
   */
  readonly recipeReference?: DataBrewRecipeReference;

  /**
   * @schema DataBrewJob#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema DataBrewJob#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema DataBrewJob#Timeout
   */
  readonly timeout?: number;

  /**
   * @schema DataBrewJob#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema DataBrewJob#JobSample
   */
  readonly jobSample?: DataBrewJobSample;

}

/**
 * Converts an object of type 'DataBrewJob' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewJob(obj: DataBrewJob | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'CreatedBy': obj.createdBy,
    'CreateDate': obj.createDate,
    'DatasetName': obj.datasetName,
    'EncryptionKeyArn': obj.encryptionKeyArn,
    'EncryptionMode': obj.encryptionMode,
    'Name': obj.name,
    'Type': obj.type,
    'LastModifiedBy': obj.lastModifiedBy,
    'LastModifiedDate': obj.lastModifiedDate,
    'LogSubscription': obj.logSubscription,
    'MaxCapacity': obj.maxCapacity,
    'MaxRetries': obj.maxRetries,
    'Outputs': obj.outputs?.map(y => toJson_DataBrewOutput(y)),
    'DataCatalogOutputs': obj.dataCatalogOutputs?.map(y => toJson_DataBrewDataCatalogOutput(y)),
    'DatabaseOutputs': obj.databaseOutputs?.map(y => toJson_DataBrewDatabaseOutput(y)),
    'ProjectName': obj.projectName,
    'RecipeReference': toJson_DataBrewRecipeReference(obj.recipeReference),
    'ResourceArn': obj.resourceArn,
    'RoleArn': obj.roleArn,
    'Timeout': obj.timeout,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'JobSample': toJson_DataBrewJobSample(obj.jobSample),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewProject
 */
export interface DataBrewProject {
  /**
   * @schema DataBrewProject#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema DataBrewProject#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema DataBrewProject#CreatedBy
   */
  readonly createdBy?: string;

  /**
   * @schema DataBrewProject#DatasetName
   */
  readonly datasetName?: string;

  /**
   * @schema DataBrewProject#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema DataBrewProject#LastModifiedBy
   */
  readonly lastModifiedBy?: string;

  /**
   * @schema DataBrewProject#Name
   */
  readonly name?: string;

  /**
   * @schema DataBrewProject#RecipeName
   */
  readonly recipeName?: string;

  /**
   * @schema DataBrewProject#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema DataBrewProject#Sample
   */
  readonly sample?: DataBrewSample;

  /**
   * @schema DataBrewProject#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema DataBrewProject#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema DataBrewProject#OpenedBy
   */
  readonly openedBy?: string;

  /**
   * @schema DataBrewProject#OpenDate
   */
  readonly openDate?: string;

}

/**
 * Converts an object of type 'DataBrewProject' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewProject(obj: DataBrewProject | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'CreateDate': obj.createDate,
    'CreatedBy': obj.createdBy,
    'DatasetName': obj.datasetName,
    'LastModifiedDate': obj.lastModifiedDate,
    'LastModifiedBy': obj.lastModifiedBy,
    'Name': obj.name,
    'RecipeName': obj.recipeName,
    'ResourceArn': obj.resourceArn,
    'Sample': toJson_DataBrewSample(obj.sample),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'RoleArn': obj.roleArn,
    'OpenedBy': obj.openedBy,
    'OpenDate': obj.openDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewRecipe
 */
export interface DataBrewRecipe {
  /**
   * @schema DataBrewRecipe#CreatedBy
   */
  readonly createdBy?: string;

  /**
   * @schema DataBrewRecipe#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema DataBrewRecipe#LastModifiedBy
   */
  readonly lastModifiedBy?: string;

  /**
   * @schema DataBrewRecipe#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema DataBrewRecipe#ProjectName
   */
  readonly projectName?: string;

  /**
   * @schema DataBrewRecipe#PublishedBy
   */
  readonly publishedBy?: string;

  /**
   * @schema DataBrewRecipe#PublishedDate
   */
  readonly publishedDate?: string;

  /**
   * @schema DataBrewRecipe#Description
   */
  readonly description?: string;

  /**
   * @schema DataBrewRecipe#Name
   */
  readonly name?: string;

  /**
   * @schema DataBrewRecipe#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema DataBrewRecipe#Steps
   */
  readonly steps?: DataBrewRecipeStep[];

  /**
   * @schema DataBrewRecipe#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema DataBrewRecipe#RecipeVersion
   */
  readonly recipeVersion?: string;

}

/**
 * Converts an object of type 'DataBrewRecipe' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewRecipe(obj: DataBrewRecipe | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CreatedBy': obj.createdBy,
    'CreateDate': obj.createDate,
    'LastModifiedBy': obj.lastModifiedBy,
    'LastModifiedDate': obj.lastModifiedDate,
    'ProjectName': obj.projectName,
    'PublishedBy': obj.publishedBy,
    'PublishedDate': obj.publishedDate,
    'Description': obj.description,
    'Name': obj.name,
    'ResourceArn': obj.resourceArn,
    'Steps': obj.steps?.map(y => toJson_DataBrewRecipeStep(y)),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'RecipeVersion': obj.recipeVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewSchedule
 */
export interface DataBrewSchedule {
  /**
   * @schema DataBrewSchedule#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema DataBrewSchedule#CreatedBy
   */
  readonly createdBy?: string;

  /**
   * @schema DataBrewSchedule#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema DataBrewSchedule#JobNames
   */
  readonly jobNames?: string[];

  /**
   * @schema DataBrewSchedule#LastModifiedBy
   */
  readonly lastModifiedBy?: string;

  /**
   * @schema DataBrewSchedule#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema DataBrewSchedule#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema DataBrewSchedule#CronExpression
   */
  readonly cronExpression?: string;

  /**
   * @schema DataBrewSchedule#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema DataBrewSchedule#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'DataBrewSchedule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewSchedule(obj: DataBrewSchedule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'CreatedBy': obj.createdBy,
    'CreateDate': obj.createDate,
    'JobNames': obj.jobNames?.map(y => y),
    'LastModifiedBy': obj.lastModifiedBy,
    'LastModifiedDate': obj.lastModifiedDate,
    'ResourceArn': obj.resourceArn,
    'CronExpression': obj.cronExpression,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewViewFrame
 */
export interface DataBrewViewFrame {
  /**
   * @schema DataBrewViewFrame#StartColumnIndex
   */
  readonly startColumnIndex?: number;

  /**
   * @schema DataBrewViewFrame#ColumnRange
   */
  readonly columnRange?: number;

  /**
   * @schema DataBrewViewFrame#HiddenColumns
   */
  readonly hiddenColumns?: string[];

}

/**
 * Converts an object of type 'DataBrewViewFrame' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewViewFrame(obj: DataBrewViewFrame | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StartColumnIndex': obj.startColumnIndex,
    'ColumnRange': obj.columnRange,
    'HiddenColumns': obj.hiddenColumns?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewJsonOptions
 */
export interface DataBrewJsonOptions {
  /**
   * @schema DataBrewJsonOptions#MultiLine
   */
  readonly multiLine?: boolean;

}

/**
 * Converts an object of type 'DataBrewJsonOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewJsonOptions(obj: DataBrewJsonOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MultiLine': obj.multiLine,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewExcelOptions
 */
export interface DataBrewExcelOptions {
  /**
   * @schema DataBrewExcelOptions#SheetNames
   */
  readonly sheetNames?: string[];

  /**
   * @schema DataBrewExcelOptions#SheetIndexes
   */
  readonly sheetIndexes?: number[];

  /**
   * @schema DataBrewExcelOptions#HeaderRow
   */
  readonly headerRow?: boolean;

}

/**
 * Converts an object of type 'DataBrewExcelOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewExcelOptions(obj: DataBrewExcelOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SheetNames': obj.sheetNames?.map(y => y),
    'SheetIndexes': obj.sheetIndexes?.map(y => y),
    'HeaderRow': obj.headerRow,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewCsvOptions
 */
export interface DataBrewCsvOptions {
  /**
   * @schema DataBrewCsvOptions#Delimiter
   */
  readonly delimiter?: string;

  /**
   * @schema DataBrewCsvOptions#HeaderRow
   */
  readonly headerRow?: boolean;

}

/**
 * Converts an object of type 'DataBrewCsvOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewCsvOptions(obj: DataBrewCsvOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Delimiter': obj.delimiter,
    'HeaderRow': obj.headerRow,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewDataCatalogInputDefinition
 */
export interface DataBrewDataCatalogInputDefinition {
  /**
   * @schema DataBrewDataCatalogInputDefinition#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema DataBrewDataCatalogInputDefinition#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema DataBrewDataCatalogInputDefinition#TableName
   */
  readonly tableName?: string;

  /**
   * @schema DataBrewDataCatalogInputDefinition#TempDirectory
   */
  readonly tempDirectory?: DataBrewS3Location;

}

/**
 * Converts an object of type 'DataBrewDataCatalogInputDefinition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewDataCatalogInputDefinition(obj: DataBrewDataCatalogInputDefinition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'DatabaseName': obj.databaseName,
    'TableName': obj.tableName,
    'TempDirectory': toJson_DataBrewS3Location(obj.tempDirectory),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewDatabaseInputDefinition
 */
export interface DataBrewDatabaseInputDefinition {
  /**
   * @schema DataBrewDatabaseInputDefinition#GlueConnectionName
   */
  readonly glueConnectionName?: string;

  /**
   * @schema DataBrewDatabaseInputDefinition#DatabaseTableName
   */
  readonly databaseTableName?: string;

  /**
   * @schema DataBrewDatabaseInputDefinition#TempDirectory
   */
  readonly tempDirectory?: DataBrewS3Location;

}

/**
 * Converts an object of type 'DataBrewDatabaseInputDefinition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewDatabaseInputDefinition(obj: DataBrewDatabaseInputDefinition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlueConnectionName': obj.glueConnectionName,
    'DatabaseTableName': obj.databaseTableName,
    'TempDirectory': toJson_DataBrewS3Location(obj.tempDirectory),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewFilterExpression
 */
export interface DataBrewFilterExpression {
  /**
   * @schema DataBrewFilterExpression#Expression
   */
  readonly expression?: string;

  /**
   * @schema DataBrewFilterExpression#ValuesMap
   */
  readonly valuesMap?: { [key: string]: string };

}

/**
 * Converts an object of type 'DataBrewFilterExpression' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewFilterExpression(obj: DataBrewFilterExpression | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Expression': obj.expression,
    'ValuesMap': ((obj.valuesMap) === undefined) ? undefined : (Object.entries(obj.valuesMap).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewFilesLimit
 */
export interface DataBrewFilesLimit {
  /**
   * @schema DataBrewFilesLimit#MaxFiles
   */
  readonly maxFiles?: number;

  /**
   * @schema DataBrewFilesLimit#OrderedBy
   */
  readonly orderedBy?: string;

  /**
   * @schema DataBrewFilesLimit#Order
   */
  readonly order?: string;

}

/**
 * Converts an object of type 'DataBrewFilesLimit' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewFilesLimit(obj: DataBrewFilesLimit | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxFiles': obj.maxFiles,
    'OrderedBy': obj.orderedBy,
    'Order': obj.order,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewDatasetParameter
 */
export interface DataBrewDatasetParameter {
  /**
   * @schema DataBrewDatasetParameter#Name
   */
  readonly name?: string;

  /**
   * @schema DataBrewDatasetParameter#Type
   */
  readonly type?: string;

  /**
   * @schema DataBrewDatasetParameter#DatetimeOptions
   */
  readonly datetimeOptions?: DataBrewDatetimeOptions;

  /**
   * @schema DataBrewDatasetParameter#CreateColumn
   */
  readonly createColumn?: boolean;

  /**
   * @schema DataBrewDatasetParameter#Filter
   */
  readonly filter?: DataBrewFilterExpression;

}

/**
 * Converts an object of type 'DataBrewDatasetParameter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewDatasetParameter(obj: DataBrewDatasetParameter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Type': obj.type,
    'DatetimeOptions': toJson_DataBrewDatetimeOptions(obj.datetimeOptions),
    'CreateColumn': obj.createColumn,
    'Filter': toJson_DataBrewFilterExpression(obj.filter),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewStatisticsConfiguration
 */
export interface DataBrewStatisticsConfiguration {
  /**
   * @schema DataBrewStatisticsConfiguration#IncludedStatistics
   */
  readonly includedStatistics?: string[];

  /**
   * @schema DataBrewStatisticsConfiguration#Overrides
   */
  readonly overrides?: DataBrewStatisticOverride[];

}

/**
 * Converts an object of type 'DataBrewStatisticsConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewStatisticsConfiguration(obj: DataBrewStatisticsConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IncludedStatistics': obj.includedStatistics?.map(y => y),
    'Overrides': obj.overrides?.map(y => toJson_DataBrewStatisticOverride(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewColumnSelector
 */
export interface DataBrewColumnSelector {
  /**
   * @schema DataBrewColumnSelector#Regex
   */
  readonly regex?: string;

  /**
   * @schema DataBrewColumnSelector#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'DataBrewColumnSelector' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewColumnSelector(obj: DataBrewColumnSelector | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Regex': obj.regex,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewColumnStatisticsConfiguration
 */
export interface DataBrewColumnStatisticsConfiguration {
  /**
   * @schema DataBrewColumnStatisticsConfiguration#Selectors
   */
  readonly selectors?: DataBrewColumnSelector[];

  /**
   * @schema DataBrewColumnStatisticsConfiguration#Statistics
   */
  readonly statistics?: DataBrewStatisticsConfiguration;

}

/**
 * Converts an object of type 'DataBrewColumnStatisticsConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewColumnStatisticsConfiguration(obj: DataBrewColumnStatisticsConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Selectors': obj.selectors?.map(y => toJson_DataBrewColumnSelector(y)),
    'Statistics': toJson_DataBrewStatisticsConfiguration(obj.statistics),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewRecipeAction
 */
export interface DataBrewRecipeAction {
  /**
   * @schema DataBrewRecipeAction#Operation
   */
  readonly operation?: string;

  /**
   * @schema DataBrewRecipeAction#Parameters
   */
  readonly parameters?: { [key: string]: string };

}

/**
 * Converts an object of type 'DataBrewRecipeAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewRecipeAction(obj: DataBrewRecipeAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Operation': obj.operation,
    'Parameters': ((obj.parameters) === undefined) ? undefined : (Object.entries(obj.parameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewConditionExpression
 */
export interface DataBrewConditionExpression {
  /**
   * @schema DataBrewConditionExpression#Condition
   */
  readonly condition?: string;

  /**
   * @schema DataBrewConditionExpression#Value
   */
  readonly value?: string;

  /**
   * @schema DataBrewConditionExpression#TargetColumn
   */
  readonly targetColumn?: string;

}

/**
 * Converts an object of type 'DataBrewConditionExpression' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewConditionExpression(obj: DataBrewConditionExpression | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Condition': obj.condition,
    'Value': obj.value,
    'TargetColumn': obj.targetColumn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewOutputFormatOptions
 */
export interface DataBrewOutputFormatOptions {
  /**
   * @schema DataBrewOutputFormatOptions#Csv
   */
  readonly csv?: DataBrewCsvOutputOptions;

}

/**
 * Converts an object of type 'DataBrewOutputFormatOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewOutputFormatOptions(obj: DataBrewOutputFormatOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Csv': toJson_DataBrewCsvOutputOptions(obj.csv),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewS3TableOutputOptions
 */
export interface DataBrewS3TableOutputOptions {
  /**
   * @schema DataBrewS3TableOutputOptions#Location
   */
  readonly location?: DataBrewS3Location;

}

/**
 * Converts an object of type 'DataBrewS3TableOutputOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewS3TableOutputOptions(obj: DataBrewS3TableOutputOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Location': toJson_DataBrewS3Location(obj.location),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewDatabaseTableOutputOptions
 */
export interface DataBrewDatabaseTableOutputOptions {
  /**
   * @schema DataBrewDatabaseTableOutputOptions#TempDirectory
   */
  readonly tempDirectory?: DataBrewS3Location;

  /**
   * @schema DataBrewDatabaseTableOutputOptions#TableName
   */
  readonly tableName?: string;

}

/**
 * Converts an object of type 'DataBrewDatabaseTableOutputOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewDatabaseTableOutputOptions(obj: DataBrewDatabaseTableOutputOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TempDirectory': toJson_DataBrewS3Location(obj.tempDirectory),
    'TableName': obj.tableName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewDatetimeOptions
 */
export interface DataBrewDatetimeOptions {
  /**
   * @schema DataBrewDatetimeOptions#Format
   */
  readonly format?: string;

  /**
   * @schema DataBrewDatetimeOptions#TimezoneOffset
   */
  readonly timezoneOffset?: string;

  /**
   * @schema DataBrewDatetimeOptions#LocaleCode
   */
  readonly localeCode?: string;

}

/**
 * Converts an object of type 'DataBrewDatetimeOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewDatetimeOptions(obj: DataBrewDatetimeOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Format': obj.format,
    'TimezoneOffset': obj.timezoneOffset,
    'LocaleCode': obj.localeCode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewStatisticOverride
 */
export interface DataBrewStatisticOverride {
  /**
   * @schema DataBrewStatisticOverride#Statistic
   */
  readonly statistic?: string;

  /**
   * @schema DataBrewStatisticOverride#Parameters
   */
  readonly parameters?: { [key: string]: string };

}

/**
 * Converts an object of type 'DataBrewStatisticOverride' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewStatisticOverride(obj: DataBrewStatisticOverride | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Statistic': obj.statistic,
    'Parameters': ((obj.parameters) === undefined) ? undefined : (Object.entries(obj.parameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataBrewCsvOutputOptions
 */
export interface DataBrewCsvOutputOptions {
  /**
   * @schema DataBrewCsvOutputOptions#Delimiter
   */
  readonly delimiter?: string;

}

/**
 * Converts an object of type 'DataBrewCsvOutputOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataBrewCsvOutputOptions(obj: DataBrewCsvOutputOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Delimiter': obj.delimiter,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
