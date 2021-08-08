/**
 * @schema FraudDetectorBatchCreateVariableRequest
 */
export interface FraudDetectorBatchCreateVariableRequest {
  /**
   * @schema FraudDetectorBatchCreateVariableRequest#variableEntries
   */
  readonly variableEntries: FraudDetectorVariableEntry[];

  /**
   * @schema FraudDetectorBatchCreateVariableRequest#tags
   */
  readonly tags?: FraudDetectorTag[];

}

/**
 * Converts an object of type 'FraudDetectorBatchCreateVariableRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorBatchCreateVariableRequest(obj: FraudDetectorBatchCreateVariableRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'variableEntries': obj.variableEntries?.map(y => toJson_FraudDetectorVariableEntry(y)),
    'tags': obj.tags?.map(y => toJson_FraudDetectorTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorBatchCreateVariableResult
 */
export interface FraudDetectorBatchCreateVariableResult {
  /**
   * @schema FraudDetectorBatchCreateVariableResult#errors
   */
  readonly errors?: FraudDetectorBatchCreateVariableError[];

}

/**
 * Converts an object of type 'FraudDetectorBatchCreateVariableResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorBatchCreateVariableResult(obj: FraudDetectorBatchCreateVariableResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'errors': obj.errors?.map(y => toJson_FraudDetectorBatchCreateVariableError(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorBatchGetVariableRequest
 */
export interface FraudDetectorBatchGetVariableRequest {
  /**
   * @schema FraudDetectorBatchGetVariableRequest#names
   */
  readonly names: string[];

}

/**
 * Converts an object of type 'FraudDetectorBatchGetVariableRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorBatchGetVariableRequest(obj: FraudDetectorBatchGetVariableRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'names': obj.names?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorBatchGetVariableResult
 */
export interface FraudDetectorBatchGetVariableResult {
  /**
   * @schema FraudDetectorBatchGetVariableResult#variables
   */
  readonly variables?: FraudDetectorVariable[];

  /**
   * @schema FraudDetectorBatchGetVariableResult#errors
   */
  readonly errors?: FraudDetectorBatchGetVariableError[];

}

/**
 * Converts an object of type 'FraudDetectorBatchGetVariableResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorBatchGetVariableResult(obj: FraudDetectorBatchGetVariableResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'variables': obj.variables?.map(y => toJson_FraudDetectorVariable(y)),
    'errors': obj.errors?.map(y => toJson_FraudDetectorBatchGetVariableError(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorCancelBatchPredictionJobRequest
 */
export interface FraudDetectorCancelBatchPredictionJobRequest {
  /**
   * @schema FraudDetectorCancelBatchPredictionJobRequest#jobId
   */
  readonly jobId: string;

}

/**
 * Converts an object of type 'FraudDetectorCancelBatchPredictionJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorCancelBatchPredictionJobRequest(obj: FraudDetectorCancelBatchPredictionJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorCancelBatchPredictionJobResult
 */
export interface FraudDetectorCancelBatchPredictionJobResult {
}

/**
 * Converts an object of type 'FraudDetectorCancelBatchPredictionJobResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorCancelBatchPredictionJobResult(obj: FraudDetectorCancelBatchPredictionJobResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorCreateBatchPredictionJobRequest
 */
export interface FraudDetectorCreateBatchPredictionJobRequest {
  /**
   * @schema FraudDetectorCreateBatchPredictionJobRequest#jobId
   */
  readonly jobId: string;

  /**
   * @schema FraudDetectorCreateBatchPredictionJobRequest#inputPath
   */
  readonly inputPath: string;

  /**
   * @schema FraudDetectorCreateBatchPredictionJobRequest#outputPath
   */
  readonly outputPath: string;

  /**
   * @schema FraudDetectorCreateBatchPredictionJobRequest#eventTypeName
   */
  readonly eventTypeName: string;

  /**
   * @schema FraudDetectorCreateBatchPredictionJobRequest#detectorName
   */
  readonly detectorName: string;

  /**
   * @schema FraudDetectorCreateBatchPredictionJobRequest#detectorVersion
   */
  readonly detectorVersion?: string;

  /**
   * @schema FraudDetectorCreateBatchPredictionJobRequest#iamRoleArn
   */
  readonly iamRoleArn: string;

  /**
   * @schema FraudDetectorCreateBatchPredictionJobRequest#tags
   */
  readonly tags?: FraudDetectorTag[];

}

/**
 * Converts an object of type 'FraudDetectorCreateBatchPredictionJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorCreateBatchPredictionJobRequest(obj: FraudDetectorCreateBatchPredictionJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobId': obj.jobId,
    'inputPath': obj.inputPath,
    'outputPath': obj.outputPath,
    'eventTypeName': obj.eventTypeName,
    'detectorName': obj.detectorName,
    'detectorVersion': obj.detectorVersion,
    'iamRoleArn': obj.iamRoleArn,
    'tags': obj.tags?.map(y => toJson_FraudDetectorTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorCreateBatchPredictionJobResult
 */
export interface FraudDetectorCreateBatchPredictionJobResult {
}

/**
 * Converts an object of type 'FraudDetectorCreateBatchPredictionJobResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorCreateBatchPredictionJobResult(obj: FraudDetectorCreateBatchPredictionJobResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorCreateDetectorVersionRequest
 */
export interface FraudDetectorCreateDetectorVersionRequest {
  /**
   * @schema FraudDetectorCreateDetectorVersionRequest#detectorId
   */
  readonly detectorId: string;

  /**
   * @schema FraudDetectorCreateDetectorVersionRequest#description
   */
  readonly description?: string;

  /**
   * @schema FraudDetectorCreateDetectorVersionRequest#externalModelEndpoints
   */
  readonly externalModelEndpoints?: string[];

  /**
   * @schema FraudDetectorCreateDetectorVersionRequest#rules
   */
  readonly rules: FraudDetectorRule[];

  /**
   * @schema FraudDetectorCreateDetectorVersionRequest#modelVersions
   */
  readonly modelVersions?: FraudDetectorModelVersion[];

  /**
   * @schema FraudDetectorCreateDetectorVersionRequest#ruleExecutionMode
   */
  readonly ruleExecutionMode?: string;

  /**
   * @schema FraudDetectorCreateDetectorVersionRequest#tags
   */
  readonly tags?: FraudDetectorTag[];

}

/**
 * Converts an object of type 'FraudDetectorCreateDetectorVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorCreateDetectorVersionRequest(obj: FraudDetectorCreateDetectorVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'detectorId': obj.detectorId,
    'description': obj.description,
    'externalModelEndpoints': obj.externalModelEndpoints?.map(y => y),
    'rules': obj.rules?.map(y => toJson_FraudDetectorRule(y)),
    'modelVersions': obj.modelVersions?.map(y => toJson_FraudDetectorModelVersion(y)),
    'ruleExecutionMode': obj.ruleExecutionMode,
    'tags': obj.tags?.map(y => toJson_FraudDetectorTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorCreateDetectorVersionResult
 */
export interface FraudDetectorCreateDetectorVersionResult {
  /**
   * @schema FraudDetectorCreateDetectorVersionResult#detectorId
   */
  readonly detectorId?: string;

  /**
   * @schema FraudDetectorCreateDetectorVersionResult#detectorVersionId
   */
  readonly detectorVersionId?: string;

  /**
   * @schema FraudDetectorCreateDetectorVersionResult#status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'FraudDetectorCreateDetectorVersionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorCreateDetectorVersionResult(obj: FraudDetectorCreateDetectorVersionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'detectorId': obj.detectorId,
    'detectorVersionId': obj.detectorVersionId,
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorCreateModelRequest
 */
export interface FraudDetectorCreateModelRequest {
  /**
   * @schema FraudDetectorCreateModelRequest#modelId
   */
  readonly modelId: string;

  /**
   * @schema FraudDetectorCreateModelRequest#modelType
   */
  readonly modelType: string;

  /**
   * @schema FraudDetectorCreateModelRequest#description
   */
  readonly description?: string;

  /**
   * @schema FraudDetectorCreateModelRequest#eventTypeName
   */
  readonly eventTypeName: string;

  /**
   * @schema FraudDetectorCreateModelRequest#tags
   */
  readonly tags?: FraudDetectorTag[];

}

/**
 * Converts an object of type 'FraudDetectorCreateModelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorCreateModelRequest(obj: FraudDetectorCreateModelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'modelId': obj.modelId,
    'modelType': obj.modelType,
    'description': obj.description,
    'eventTypeName': obj.eventTypeName,
    'tags': obj.tags?.map(y => toJson_FraudDetectorTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorCreateModelResult
 */
export interface FraudDetectorCreateModelResult {
}

/**
 * Converts an object of type 'FraudDetectorCreateModelResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorCreateModelResult(obj: FraudDetectorCreateModelResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorCreateModelVersionRequest
 */
export interface FraudDetectorCreateModelVersionRequest {
  /**
   * @schema FraudDetectorCreateModelVersionRequest#modelId
   */
  readonly modelId: string;

  /**
   * @schema FraudDetectorCreateModelVersionRequest#modelType
   */
  readonly modelType: string;

  /**
   * @schema FraudDetectorCreateModelVersionRequest#trainingDataSource
   */
  readonly trainingDataSource: string;

  /**
   * @schema FraudDetectorCreateModelVersionRequest#trainingDataSchema
   */
  readonly trainingDataSchema: FraudDetectorTrainingDataSchema;

  /**
   * @schema FraudDetectorCreateModelVersionRequest#externalEventsDetail
   */
  readonly externalEventsDetail?: FraudDetectorExternalEventsDetail;

  /**
   * @schema FraudDetectorCreateModelVersionRequest#tags
   */
  readonly tags?: FraudDetectorTag[];

}

/**
 * Converts an object of type 'FraudDetectorCreateModelVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorCreateModelVersionRequest(obj: FraudDetectorCreateModelVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'modelId': obj.modelId,
    'modelType': obj.modelType,
    'trainingDataSource': obj.trainingDataSource,
    'trainingDataSchema': toJson_FraudDetectorTrainingDataSchema(obj.trainingDataSchema),
    'externalEventsDetail': toJson_FraudDetectorExternalEventsDetail(obj.externalEventsDetail),
    'tags': obj.tags?.map(y => toJson_FraudDetectorTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorCreateModelVersionResult
 */
export interface FraudDetectorCreateModelVersionResult {
  /**
   * @schema FraudDetectorCreateModelVersionResult#modelId
   */
  readonly modelId?: string;

  /**
   * @schema FraudDetectorCreateModelVersionResult#modelType
   */
  readonly modelType?: string;

  /**
   * @schema FraudDetectorCreateModelVersionResult#modelVersionNumber
   */
  readonly modelVersionNumber?: string;

  /**
   * @schema FraudDetectorCreateModelVersionResult#status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'FraudDetectorCreateModelVersionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorCreateModelVersionResult(obj: FraudDetectorCreateModelVersionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'modelId': obj.modelId,
    'modelType': obj.modelType,
    'modelVersionNumber': obj.modelVersionNumber,
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorCreateRuleRequest
 */
export interface FraudDetectorCreateRuleRequest {
  /**
   * @schema FraudDetectorCreateRuleRequest#ruleId
   */
  readonly ruleId: string;

  /**
   * @schema FraudDetectorCreateRuleRequest#detectorId
   */
  readonly detectorId: string;

  /**
   * @schema FraudDetectorCreateRuleRequest#description
   */
  readonly description?: string;

  /**
   * @schema FraudDetectorCreateRuleRequest#expression
   */
  readonly expression: string;

  /**
   * @schema FraudDetectorCreateRuleRequest#language
   */
  readonly language: string;

  /**
   * @schema FraudDetectorCreateRuleRequest#outcomes
   */
  readonly outcomes: string[];

  /**
   * @schema FraudDetectorCreateRuleRequest#tags
   */
  readonly tags?: FraudDetectorTag[];

}

/**
 * Converts an object of type 'FraudDetectorCreateRuleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorCreateRuleRequest(obj: FraudDetectorCreateRuleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ruleId': obj.ruleId,
    'detectorId': obj.detectorId,
    'description': obj.description,
    'expression': obj.expression,
    'language': obj.language,
    'outcomes': obj.outcomes?.map(y => y),
    'tags': obj.tags?.map(y => toJson_FraudDetectorTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorCreateRuleResult
 */
export interface FraudDetectorCreateRuleResult {
  /**
   * @schema FraudDetectorCreateRuleResult#rule
   */
  readonly rule?: FraudDetectorRule;

}

/**
 * Converts an object of type 'FraudDetectorCreateRuleResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorCreateRuleResult(obj: FraudDetectorCreateRuleResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'rule': toJson_FraudDetectorRule(obj.rule),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorCreateVariableRequest
 */
export interface FraudDetectorCreateVariableRequest {
  /**
   * @schema FraudDetectorCreateVariableRequest#name
   */
  readonly name: string;

  /**
   * @schema FraudDetectorCreateVariableRequest#dataType
   */
  readonly dataType: string;

  /**
   * @schema FraudDetectorCreateVariableRequest#dataSource
   */
  readonly dataSource: string;

  /**
   * @schema FraudDetectorCreateVariableRequest#defaultValue
   */
  readonly defaultValue: string;

  /**
   * @schema FraudDetectorCreateVariableRequest#description
   */
  readonly description?: string;

  /**
   * @schema FraudDetectorCreateVariableRequest#variableType
   */
  readonly variableType?: string;

  /**
   * @schema FraudDetectorCreateVariableRequest#tags
   */
  readonly tags?: FraudDetectorTag[];

}

/**
 * Converts an object of type 'FraudDetectorCreateVariableRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorCreateVariableRequest(obj: FraudDetectorCreateVariableRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'dataType': obj.dataType,
    'dataSource': obj.dataSource,
    'defaultValue': obj.defaultValue,
    'description': obj.description,
    'variableType': obj.variableType,
    'tags': obj.tags?.map(y => toJson_FraudDetectorTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorCreateVariableResult
 */
export interface FraudDetectorCreateVariableResult {
}

/**
 * Converts an object of type 'FraudDetectorCreateVariableResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorCreateVariableResult(obj: FraudDetectorCreateVariableResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorDeleteBatchPredictionJobRequest
 */
export interface FraudDetectorDeleteBatchPredictionJobRequest {
  /**
   * @schema FraudDetectorDeleteBatchPredictionJobRequest#jobId
   */
  readonly jobId: string;

}

/**
 * Converts an object of type 'FraudDetectorDeleteBatchPredictionJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorDeleteBatchPredictionJobRequest(obj: FraudDetectorDeleteBatchPredictionJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorDeleteBatchPredictionJobResult
 */
export interface FraudDetectorDeleteBatchPredictionJobResult {
}

/**
 * Converts an object of type 'FraudDetectorDeleteBatchPredictionJobResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorDeleteBatchPredictionJobResult(obj: FraudDetectorDeleteBatchPredictionJobResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorDeleteDetectorRequest
 */
export interface FraudDetectorDeleteDetectorRequest {
  /**
   * @schema FraudDetectorDeleteDetectorRequest#detectorId
   */
  readonly detectorId: string;

}

/**
 * Converts an object of type 'FraudDetectorDeleteDetectorRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorDeleteDetectorRequest(obj: FraudDetectorDeleteDetectorRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'detectorId': obj.detectorId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorDeleteDetectorResult
 */
export interface FraudDetectorDeleteDetectorResult {
}

/**
 * Converts an object of type 'FraudDetectorDeleteDetectorResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorDeleteDetectorResult(obj: FraudDetectorDeleteDetectorResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorDeleteDetectorVersionRequest
 */
export interface FraudDetectorDeleteDetectorVersionRequest {
  /**
   * @schema FraudDetectorDeleteDetectorVersionRequest#detectorId
   */
  readonly detectorId: string;

  /**
   * @schema FraudDetectorDeleteDetectorVersionRequest#detectorVersionId
   */
  readonly detectorVersionId: string;

}

/**
 * Converts an object of type 'FraudDetectorDeleteDetectorVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorDeleteDetectorVersionRequest(obj: FraudDetectorDeleteDetectorVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'detectorId': obj.detectorId,
    'detectorVersionId': obj.detectorVersionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorDeleteDetectorVersionResult
 */
export interface FraudDetectorDeleteDetectorVersionResult {
}

/**
 * Converts an object of type 'FraudDetectorDeleteDetectorVersionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorDeleteDetectorVersionResult(obj: FraudDetectorDeleteDetectorVersionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorDeleteEntityTypeRequest
 */
export interface FraudDetectorDeleteEntityTypeRequest {
  /**
   * @schema FraudDetectorDeleteEntityTypeRequest#name
   */
  readonly name: string;

}

/**
 * Converts an object of type 'FraudDetectorDeleteEntityTypeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorDeleteEntityTypeRequest(obj: FraudDetectorDeleteEntityTypeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorDeleteEntityTypeResult
 */
export interface FraudDetectorDeleteEntityTypeResult {
}

/**
 * Converts an object of type 'FraudDetectorDeleteEntityTypeResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorDeleteEntityTypeResult(obj: FraudDetectorDeleteEntityTypeResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorDeleteEventRequest
 */
export interface FraudDetectorDeleteEventRequest {
  /**
   * @schema FraudDetectorDeleteEventRequest#eventId
   */
  readonly eventId: string;

  /**
   * @schema FraudDetectorDeleteEventRequest#eventTypeName
   */
  readonly eventTypeName: string;

}

/**
 * Converts an object of type 'FraudDetectorDeleteEventRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorDeleteEventRequest(obj: FraudDetectorDeleteEventRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'eventId': obj.eventId,
    'eventTypeName': obj.eventTypeName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorDeleteEventResult
 */
export interface FraudDetectorDeleteEventResult {
}

/**
 * Converts an object of type 'FraudDetectorDeleteEventResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorDeleteEventResult(obj: FraudDetectorDeleteEventResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorDeleteEventTypeRequest
 */
export interface FraudDetectorDeleteEventTypeRequest {
  /**
   * @schema FraudDetectorDeleteEventTypeRequest#name
   */
  readonly name: string;

}

/**
 * Converts an object of type 'FraudDetectorDeleteEventTypeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorDeleteEventTypeRequest(obj: FraudDetectorDeleteEventTypeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorDeleteEventTypeResult
 */
export interface FraudDetectorDeleteEventTypeResult {
}

/**
 * Converts an object of type 'FraudDetectorDeleteEventTypeResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorDeleteEventTypeResult(obj: FraudDetectorDeleteEventTypeResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorDeleteExternalModelRequest
 */
export interface FraudDetectorDeleteExternalModelRequest {
  /**
   * @schema FraudDetectorDeleteExternalModelRequest#modelEndpoint
   */
  readonly modelEndpoint: string;

}

/**
 * Converts an object of type 'FraudDetectorDeleteExternalModelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorDeleteExternalModelRequest(obj: FraudDetectorDeleteExternalModelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'modelEndpoint': obj.modelEndpoint,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorDeleteExternalModelResult
 */
export interface FraudDetectorDeleteExternalModelResult {
}

/**
 * Converts an object of type 'FraudDetectorDeleteExternalModelResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorDeleteExternalModelResult(obj: FraudDetectorDeleteExternalModelResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorDeleteLabelRequest
 */
export interface FraudDetectorDeleteLabelRequest {
  /**
   * @schema FraudDetectorDeleteLabelRequest#name
   */
  readonly name: string;

}

/**
 * Converts an object of type 'FraudDetectorDeleteLabelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorDeleteLabelRequest(obj: FraudDetectorDeleteLabelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorDeleteLabelResult
 */
export interface FraudDetectorDeleteLabelResult {
}

/**
 * Converts an object of type 'FraudDetectorDeleteLabelResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorDeleteLabelResult(obj: FraudDetectorDeleteLabelResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorDeleteModelRequest
 */
export interface FraudDetectorDeleteModelRequest {
  /**
   * @schema FraudDetectorDeleteModelRequest#modelId
   */
  readonly modelId: string;

  /**
   * @schema FraudDetectorDeleteModelRequest#modelType
   */
  readonly modelType: string;

}

/**
 * Converts an object of type 'FraudDetectorDeleteModelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorDeleteModelRequest(obj: FraudDetectorDeleteModelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'modelId': obj.modelId,
    'modelType': obj.modelType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorDeleteModelResult
 */
export interface FraudDetectorDeleteModelResult {
}

/**
 * Converts an object of type 'FraudDetectorDeleteModelResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorDeleteModelResult(obj: FraudDetectorDeleteModelResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorDeleteModelVersionRequest
 */
export interface FraudDetectorDeleteModelVersionRequest {
  /**
   * @schema FraudDetectorDeleteModelVersionRequest#modelId
   */
  readonly modelId: string;

  /**
   * @schema FraudDetectorDeleteModelVersionRequest#modelType
   */
  readonly modelType: string;

  /**
   * @schema FraudDetectorDeleteModelVersionRequest#modelVersionNumber
   */
  readonly modelVersionNumber: string;

}

/**
 * Converts an object of type 'FraudDetectorDeleteModelVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorDeleteModelVersionRequest(obj: FraudDetectorDeleteModelVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'modelId': obj.modelId,
    'modelType': obj.modelType,
    'modelVersionNumber': obj.modelVersionNumber,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorDeleteModelVersionResult
 */
export interface FraudDetectorDeleteModelVersionResult {
}

/**
 * Converts an object of type 'FraudDetectorDeleteModelVersionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorDeleteModelVersionResult(obj: FraudDetectorDeleteModelVersionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorDeleteOutcomeRequest
 */
export interface FraudDetectorDeleteOutcomeRequest {
  /**
   * @schema FraudDetectorDeleteOutcomeRequest#name
   */
  readonly name: string;

}

/**
 * Converts an object of type 'FraudDetectorDeleteOutcomeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorDeleteOutcomeRequest(obj: FraudDetectorDeleteOutcomeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorDeleteOutcomeResult
 */
export interface FraudDetectorDeleteOutcomeResult {
}

/**
 * Converts an object of type 'FraudDetectorDeleteOutcomeResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorDeleteOutcomeResult(obj: FraudDetectorDeleteOutcomeResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorDeleteRuleRequest
 */
export interface FraudDetectorDeleteRuleRequest {
  /**
   * @schema FraudDetectorDeleteRuleRequest#rule
   */
  readonly rule: FraudDetectorRule;

}

/**
 * Converts an object of type 'FraudDetectorDeleteRuleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorDeleteRuleRequest(obj: FraudDetectorDeleteRuleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'rule': toJson_FraudDetectorRule(obj.rule),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorDeleteRuleResult
 */
export interface FraudDetectorDeleteRuleResult {
}

/**
 * Converts an object of type 'FraudDetectorDeleteRuleResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorDeleteRuleResult(obj: FraudDetectorDeleteRuleResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorDeleteVariableRequest
 */
export interface FraudDetectorDeleteVariableRequest {
  /**
   * @schema FraudDetectorDeleteVariableRequest#name
   */
  readonly name: string;

}

/**
 * Converts an object of type 'FraudDetectorDeleteVariableRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorDeleteVariableRequest(obj: FraudDetectorDeleteVariableRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorDeleteVariableResult
 */
export interface FraudDetectorDeleteVariableResult {
}

/**
 * Converts an object of type 'FraudDetectorDeleteVariableResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorDeleteVariableResult(obj: FraudDetectorDeleteVariableResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorDescribeDetectorRequest
 */
export interface FraudDetectorDescribeDetectorRequest {
  /**
   * @schema FraudDetectorDescribeDetectorRequest#detectorId
   */
  readonly detectorId: string;

  /**
   * @schema FraudDetectorDescribeDetectorRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema FraudDetectorDescribeDetectorRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'FraudDetectorDescribeDetectorRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorDescribeDetectorRequest(obj: FraudDetectorDescribeDetectorRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'detectorId': obj.detectorId,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorDescribeDetectorResult
 */
export interface FraudDetectorDescribeDetectorResult {
  /**
   * @schema FraudDetectorDescribeDetectorResult#detectorId
   */
  readonly detectorId?: string;

  /**
   * @schema FraudDetectorDescribeDetectorResult#detectorVersionSummaries
   */
  readonly detectorVersionSummaries?: FraudDetectorDetectorVersionSummary[];

  /**
   * @schema FraudDetectorDescribeDetectorResult#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema FraudDetectorDescribeDetectorResult#arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'FraudDetectorDescribeDetectorResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorDescribeDetectorResult(obj: FraudDetectorDescribeDetectorResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'detectorId': obj.detectorId,
    'detectorVersionSummaries': obj.detectorVersionSummaries?.map(y => toJson_FraudDetectorDetectorVersionSummary(y)),
    'nextToken': obj.nextToken,
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorDescribeModelVersionsRequest
 */
export interface FraudDetectorDescribeModelVersionsRequest {
  /**
   * @schema FraudDetectorDescribeModelVersionsRequest#modelId
   */
  readonly modelId?: string;

  /**
   * @schema FraudDetectorDescribeModelVersionsRequest#modelVersionNumber
   */
  readonly modelVersionNumber?: string;

  /**
   * @schema FraudDetectorDescribeModelVersionsRequest#modelType
   */
  readonly modelType?: string;

  /**
   * @schema FraudDetectorDescribeModelVersionsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema FraudDetectorDescribeModelVersionsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'FraudDetectorDescribeModelVersionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorDescribeModelVersionsRequest(obj: FraudDetectorDescribeModelVersionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'modelId': obj.modelId,
    'modelVersionNumber': obj.modelVersionNumber,
    'modelType': obj.modelType,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorDescribeModelVersionsResult
 */
export interface FraudDetectorDescribeModelVersionsResult {
  /**
   * @schema FraudDetectorDescribeModelVersionsResult#modelVersionDetails
   */
  readonly modelVersionDetails?: FraudDetectorModelVersionDetail[];

  /**
   * @schema FraudDetectorDescribeModelVersionsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'FraudDetectorDescribeModelVersionsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorDescribeModelVersionsResult(obj: FraudDetectorDescribeModelVersionsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'modelVersionDetails': obj.modelVersionDetails?.map(y => toJson_FraudDetectorModelVersionDetail(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorGetBatchPredictionJobsRequest
 */
export interface FraudDetectorGetBatchPredictionJobsRequest {
  /**
   * @schema FraudDetectorGetBatchPredictionJobsRequest#jobId
   */
  readonly jobId?: string;

  /**
   * @schema FraudDetectorGetBatchPredictionJobsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema FraudDetectorGetBatchPredictionJobsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'FraudDetectorGetBatchPredictionJobsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorGetBatchPredictionJobsRequest(obj: FraudDetectorGetBatchPredictionJobsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobId': obj.jobId,
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorGetBatchPredictionJobsResult
 */
export interface FraudDetectorGetBatchPredictionJobsResult {
  /**
   * @schema FraudDetectorGetBatchPredictionJobsResult#batchPredictions
   */
  readonly batchPredictions?: FraudDetectorBatchPrediction[];

  /**
   * @schema FraudDetectorGetBatchPredictionJobsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'FraudDetectorGetBatchPredictionJobsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorGetBatchPredictionJobsResult(obj: FraudDetectorGetBatchPredictionJobsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'batchPredictions': obj.batchPredictions?.map(y => toJson_FraudDetectorBatchPrediction(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorGetDetectorVersionRequest
 */
export interface FraudDetectorGetDetectorVersionRequest {
  /**
   * @schema FraudDetectorGetDetectorVersionRequest#detectorId
   */
  readonly detectorId: string;

  /**
   * @schema FraudDetectorGetDetectorVersionRequest#detectorVersionId
   */
  readonly detectorVersionId: string;

}

/**
 * Converts an object of type 'FraudDetectorGetDetectorVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorGetDetectorVersionRequest(obj: FraudDetectorGetDetectorVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'detectorId': obj.detectorId,
    'detectorVersionId': obj.detectorVersionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorGetDetectorVersionResult
 */
export interface FraudDetectorGetDetectorVersionResult {
  /**
   * @schema FraudDetectorGetDetectorVersionResult#detectorId
   */
  readonly detectorId?: string;

  /**
   * @schema FraudDetectorGetDetectorVersionResult#detectorVersionId
   */
  readonly detectorVersionId?: string;

  /**
   * @schema FraudDetectorGetDetectorVersionResult#description
   */
  readonly description?: string;

  /**
   * @schema FraudDetectorGetDetectorVersionResult#externalModelEndpoints
   */
  readonly externalModelEndpoints?: string[];

  /**
   * @schema FraudDetectorGetDetectorVersionResult#modelVersions
   */
  readonly modelVersions?: FraudDetectorModelVersion[];

  /**
   * @schema FraudDetectorGetDetectorVersionResult#rules
   */
  readonly rules?: FraudDetectorRule[];

  /**
   * @schema FraudDetectorGetDetectorVersionResult#status
   */
  readonly status?: string;

  /**
   * @schema FraudDetectorGetDetectorVersionResult#lastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

  /**
   * @schema FraudDetectorGetDetectorVersionResult#createdTime
   */
  readonly createdTime?: string;

  /**
   * @schema FraudDetectorGetDetectorVersionResult#ruleExecutionMode
   */
  readonly ruleExecutionMode?: string;

  /**
   * @schema FraudDetectorGetDetectorVersionResult#arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'FraudDetectorGetDetectorVersionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorGetDetectorVersionResult(obj: FraudDetectorGetDetectorVersionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'detectorId': obj.detectorId,
    'detectorVersionId': obj.detectorVersionId,
    'description': obj.description,
    'externalModelEndpoints': obj.externalModelEndpoints?.map(y => y),
    'modelVersions': obj.modelVersions?.map(y => toJson_FraudDetectorModelVersion(y)),
    'rules': obj.rules?.map(y => toJson_FraudDetectorRule(y)),
    'status': obj.status,
    'lastUpdatedTime': obj.lastUpdatedTime,
    'createdTime': obj.createdTime,
    'ruleExecutionMode': obj.ruleExecutionMode,
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorGetDetectorsRequest
 */
export interface FraudDetectorGetDetectorsRequest {
  /**
   * @schema FraudDetectorGetDetectorsRequest#detectorId
   */
  readonly detectorId?: string;

  /**
   * @schema FraudDetectorGetDetectorsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema FraudDetectorGetDetectorsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'FraudDetectorGetDetectorsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorGetDetectorsRequest(obj: FraudDetectorGetDetectorsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'detectorId': obj.detectorId,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorGetDetectorsResult
 */
export interface FraudDetectorGetDetectorsResult {
  /**
   * @schema FraudDetectorGetDetectorsResult#detectors
   */
  readonly detectors?: FraudDetectorDetector[];

  /**
   * @schema FraudDetectorGetDetectorsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'FraudDetectorGetDetectorsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorGetDetectorsResult(obj: FraudDetectorGetDetectorsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'detectors': obj.detectors?.map(y => toJson_FraudDetectorDetector(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorGetEntityTypesRequest
 */
export interface FraudDetectorGetEntityTypesRequest {
  /**
   * @schema FraudDetectorGetEntityTypesRequest#name
   */
  readonly name?: string;

  /**
   * @schema FraudDetectorGetEntityTypesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema FraudDetectorGetEntityTypesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'FraudDetectorGetEntityTypesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorGetEntityTypesRequest(obj: FraudDetectorGetEntityTypesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorGetEntityTypesResult
 */
export interface FraudDetectorGetEntityTypesResult {
  /**
   * @schema FraudDetectorGetEntityTypesResult#entityTypes
   */
  readonly entityTypes?: FraudDetectorEntityType[];

  /**
   * @schema FraudDetectorGetEntityTypesResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'FraudDetectorGetEntityTypesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorGetEntityTypesResult(obj: FraudDetectorGetEntityTypesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'entityTypes': obj.entityTypes?.map(y => toJson_FraudDetectorEntityType(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorGetEventPredictionRequest
 */
export interface FraudDetectorGetEventPredictionRequest {
  /**
   * @schema FraudDetectorGetEventPredictionRequest#detectorId
   */
  readonly detectorId: string;

  /**
   * @schema FraudDetectorGetEventPredictionRequest#detectorVersionId
   */
  readonly detectorVersionId?: string;

  /**
   * @schema FraudDetectorGetEventPredictionRequest#eventId
   */
  readonly eventId: string;

  /**
   * @schema FraudDetectorGetEventPredictionRequest#eventTypeName
   */
  readonly eventTypeName: string;

  /**
   * @schema FraudDetectorGetEventPredictionRequest#entities
   */
  readonly entities: FraudDetectorEntity[];

  /**
   * @schema FraudDetectorGetEventPredictionRequest#eventTimestamp
   */
  readonly eventTimestamp: string;

  /**
   * @schema FraudDetectorGetEventPredictionRequest#eventVariables
   */
  readonly eventVariables: { [key: string]: string };

  /**
   * @schema FraudDetectorGetEventPredictionRequest#externalModelEndpointDataBlobs
   */
  readonly externalModelEndpointDataBlobs?: { [key: string]: FraudDetectorModelEndpointDataBlob };

}

/**
 * Converts an object of type 'FraudDetectorGetEventPredictionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorGetEventPredictionRequest(obj: FraudDetectorGetEventPredictionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'detectorId': obj.detectorId,
    'detectorVersionId': obj.detectorVersionId,
    'eventId': obj.eventId,
    'eventTypeName': obj.eventTypeName,
    'entities': obj.entities?.map(y => toJson_FraudDetectorEntity(y)),
    'eventTimestamp': obj.eventTimestamp,
    'eventVariables': ((obj.eventVariables) === undefined) ? undefined : (Object.entries(obj.eventVariables).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'externalModelEndpointDataBlobs': ((obj.externalModelEndpointDataBlobs) === undefined) ? undefined : (Object.entries(obj.externalModelEndpointDataBlobs).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_FraudDetectorModelEndpointDataBlob(i[1]) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorGetEventPredictionResult
 */
export interface FraudDetectorGetEventPredictionResult {
  /**
   * @schema FraudDetectorGetEventPredictionResult#modelScores
   */
  readonly modelScores?: FraudDetectorModelScores[];

  /**
   * @schema FraudDetectorGetEventPredictionResult#ruleResults
   */
  readonly ruleResults?: FraudDetectorRuleResult[];

}

/**
 * Converts an object of type 'FraudDetectorGetEventPredictionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorGetEventPredictionResult(obj: FraudDetectorGetEventPredictionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'modelScores': obj.modelScores?.map(y => toJson_FraudDetectorModelScores(y)),
    'ruleResults': obj.ruleResults?.map(y => toJson_FraudDetectorRuleResult(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorGetEventTypesRequest
 */
export interface FraudDetectorGetEventTypesRequest {
  /**
   * @schema FraudDetectorGetEventTypesRequest#name
   */
  readonly name?: string;

  /**
   * @schema FraudDetectorGetEventTypesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema FraudDetectorGetEventTypesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'FraudDetectorGetEventTypesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorGetEventTypesRequest(obj: FraudDetectorGetEventTypesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorGetEventTypesResult
 */
export interface FraudDetectorGetEventTypesResult {
  /**
   * @schema FraudDetectorGetEventTypesResult#eventTypes
   */
  readonly eventTypes?: FraudDetectorEventType[];

  /**
   * @schema FraudDetectorGetEventTypesResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'FraudDetectorGetEventTypesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorGetEventTypesResult(obj: FraudDetectorGetEventTypesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'eventTypes': obj.eventTypes?.map(y => toJson_FraudDetectorEventType(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorGetExternalModelsRequest
 */
export interface FraudDetectorGetExternalModelsRequest {
  /**
   * @schema FraudDetectorGetExternalModelsRequest#modelEndpoint
   */
  readonly modelEndpoint?: string;

  /**
   * @schema FraudDetectorGetExternalModelsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema FraudDetectorGetExternalModelsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'FraudDetectorGetExternalModelsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorGetExternalModelsRequest(obj: FraudDetectorGetExternalModelsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'modelEndpoint': obj.modelEndpoint,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorGetExternalModelsResult
 */
export interface FraudDetectorGetExternalModelsResult {
  /**
   * @schema FraudDetectorGetExternalModelsResult#externalModels
   */
  readonly externalModels?: FraudDetectorExternalModel[];

  /**
   * @schema FraudDetectorGetExternalModelsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'FraudDetectorGetExternalModelsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorGetExternalModelsResult(obj: FraudDetectorGetExternalModelsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'externalModels': obj.externalModels?.map(y => toJson_FraudDetectorExternalModel(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorGetKmsEncryptionKeyResult
 */
export interface FraudDetectorGetKmsEncryptionKeyResult {
  /**
   * @schema FraudDetectorGetKmsEncryptionKeyResult#kmsKey
   */
  readonly kmsKey?: FraudDetectorKmsKey;

}

/**
 * Converts an object of type 'FraudDetectorGetKmsEncryptionKeyResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorGetKmsEncryptionKeyResult(obj: FraudDetectorGetKmsEncryptionKeyResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'kmsKey': toJson_FraudDetectorKmsKey(obj.kmsKey),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorGetLabelsRequest
 */
export interface FraudDetectorGetLabelsRequest {
  /**
   * @schema FraudDetectorGetLabelsRequest#name
   */
  readonly name?: string;

  /**
   * @schema FraudDetectorGetLabelsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema FraudDetectorGetLabelsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'FraudDetectorGetLabelsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorGetLabelsRequest(obj: FraudDetectorGetLabelsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorGetLabelsResult
 */
export interface FraudDetectorGetLabelsResult {
  /**
   * @schema FraudDetectorGetLabelsResult#labels
   */
  readonly labels?: FraudDetectorLabel[];

  /**
   * @schema FraudDetectorGetLabelsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'FraudDetectorGetLabelsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorGetLabelsResult(obj: FraudDetectorGetLabelsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'labels': obj.labels?.map(y => toJson_FraudDetectorLabel(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorGetModelVersionRequest
 */
export interface FraudDetectorGetModelVersionRequest {
  /**
   * @schema FraudDetectorGetModelVersionRequest#modelId
   */
  readonly modelId: string;

  /**
   * @schema FraudDetectorGetModelVersionRequest#modelType
   */
  readonly modelType: string;

  /**
   * @schema FraudDetectorGetModelVersionRequest#modelVersionNumber
   */
  readonly modelVersionNumber: string;

}

/**
 * Converts an object of type 'FraudDetectorGetModelVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorGetModelVersionRequest(obj: FraudDetectorGetModelVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'modelId': obj.modelId,
    'modelType': obj.modelType,
    'modelVersionNumber': obj.modelVersionNumber,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorGetModelVersionResult
 */
export interface FraudDetectorGetModelVersionResult {
  /**
   * @schema FraudDetectorGetModelVersionResult#modelId
   */
  readonly modelId?: string;

  /**
   * @schema FraudDetectorGetModelVersionResult#modelType
   */
  readonly modelType?: string;

  /**
   * @schema FraudDetectorGetModelVersionResult#modelVersionNumber
   */
  readonly modelVersionNumber?: string;

  /**
   * @schema FraudDetectorGetModelVersionResult#trainingDataSource
   */
  readonly trainingDataSource?: string;

  /**
   * @schema FraudDetectorGetModelVersionResult#trainingDataSchema
   */
  readonly trainingDataSchema?: FraudDetectorTrainingDataSchema;

  /**
   * @schema FraudDetectorGetModelVersionResult#externalEventsDetail
   */
  readonly externalEventsDetail?: FraudDetectorExternalEventsDetail;

  /**
   * @schema FraudDetectorGetModelVersionResult#status
   */
  readonly status?: string;

  /**
   * @schema FraudDetectorGetModelVersionResult#arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'FraudDetectorGetModelVersionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorGetModelVersionResult(obj: FraudDetectorGetModelVersionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'modelId': obj.modelId,
    'modelType': obj.modelType,
    'modelVersionNumber': obj.modelVersionNumber,
    'trainingDataSource': obj.trainingDataSource,
    'trainingDataSchema': toJson_FraudDetectorTrainingDataSchema(obj.trainingDataSchema),
    'externalEventsDetail': toJson_FraudDetectorExternalEventsDetail(obj.externalEventsDetail),
    'status': obj.status,
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorGetModelsRequest
 */
export interface FraudDetectorGetModelsRequest {
  /**
   * @schema FraudDetectorGetModelsRequest#modelId
   */
  readonly modelId?: string;

  /**
   * @schema FraudDetectorGetModelsRequest#modelType
   */
  readonly modelType?: string;

  /**
   * @schema FraudDetectorGetModelsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema FraudDetectorGetModelsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'FraudDetectorGetModelsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorGetModelsRequest(obj: FraudDetectorGetModelsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'modelId': obj.modelId,
    'modelType': obj.modelType,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorGetModelsResult
 */
export interface FraudDetectorGetModelsResult {
  /**
   * @schema FraudDetectorGetModelsResult#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema FraudDetectorGetModelsResult#models
   */
  readonly models?: FraudDetectorModel[];

}

/**
 * Converts an object of type 'FraudDetectorGetModelsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorGetModelsResult(obj: FraudDetectorGetModelsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'models': obj.models?.map(y => toJson_FraudDetectorModel(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorGetOutcomesRequest
 */
export interface FraudDetectorGetOutcomesRequest {
  /**
   * @schema FraudDetectorGetOutcomesRequest#name
   */
  readonly name?: string;

  /**
   * @schema FraudDetectorGetOutcomesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema FraudDetectorGetOutcomesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'FraudDetectorGetOutcomesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorGetOutcomesRequest(obj: FraudDetectorGetOutcomesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorGetOutcomesResult
 */
export interface FraudDetectorGetOutcomesResult {
  /**
   * @schema FraudDetectorGetOutcomesResult#outcomes
   */
  readonly outcomes?: FraudDetectorOutcome[];

  /**
   * @schema FraudDetectorGetOutcomesResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'FraudDetectorGetOutcomesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorGetOutcomesResult(obj: FraudDetectorGetOutcomesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'outcomes': obj.outcomes?.map(y => toJson_FraudDetectorOutcome(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorGetRulesRequest
 */
export interface FraudDetectorGetRulesRequest {
  /**
   * @schema FraudDetectorGetRulesRequest#ruleId
   */
  readonly ruleId?: string;

  /**
   * @schema FraudDetectorGetRulesRequest#detectorId
   */
  readonly detectorId: string;

  /**
   * @schema FraudDetectorGetRulesRequest#ruleVersion
   */
  readonly ruleVersion?: string;

  /**
   * @schema FraudDetectorGetRulesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema FraudDetectorGetRulesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'FraudDetectorGetRulesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorGetRulesRequest(obj: FraudDetectorGetRulesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ruleId': obj.ruleId,
    'detectorId': obj.detectorId,
    'ruleVersion': obj.ruleVersion,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorGetRulesResult
 */
export interface FraudDetectorGetRulesResult {
  /**
   * @schema FraudDetectorGetRulesResult#ruleDetails
   */
  readonly ruleDetails?: FraudDetectorRuleDetail[];

  /**
   * @schema FraudDetectorGetRulesResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'FraudDetectorGetRulesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorGetRulesResult(obj: FraudDetectorGetRulesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ruleDetails': obj.ruleDetails?.map(y => toJson_FraudDetectorRuleDetail(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorGetVariablesRequest
 */
export interface FraudDetectorGetVariablesRequest {
  /**
   * @schema FraudDetectorGetVariablesRequest#name
   */
  readonly name?: string;

  /**
   * @schema FraudDetectorGetVariablesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema FraudDetectorGetVariablesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'FraudDetectorGetVariablesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorGetVariablesRequest(obj: FraudDetectorGetVariablesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorGetVariablesResult
 */
export interface FraudDetectorGetVariablesResult {
  /**
   * @schema FraudDetectorGetVariablesResult#variables
   */
  readonly variables?: FraudDetectorVariable[];

  /**
   * @schema FraudDetectorGetVariablesResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'FraudDetectorGetVariablesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorGetVariablesResult(obj: FraudDetectorGetVariablesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'variables': obj.variables?.map(y => toJson_FraudDetectorVariable(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorListTagsForResourceRequest
 */
export interface FraudDetectorListTagsForResourceRequest {
  /**
   * @schema FraudDetectorListTagsForResourceRequest#resourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema FraudDetectorListTagsForResourceRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema FraudDetectorListTagsForResourceRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'FraudDetectorListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorListTagsForResourceRequest(obj: FraudDetectorListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceARN': obj.resourceArn,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorListTagsForResourceResult
 */
export interface FraudDetectorListTagsForResourceResult {
  /**
   * @schema FraudDetectorListTagsForResourceResult#tags
   */
  readonly tags?: FraudDetectorTag[];

  /**
   * @schema FraudDetectorListTagsForResourceResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'FraudDetectorListTagsForResourceResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorListTagsForResourceResult(obj: FraudDetectorListTagsForResourceResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tags': obj.tags?.map(y => toJson_FraudDetectorTag(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorPutDetectorRequest
 */
export interface FraudDetectorPutDetectorRequest {
  /**
   * @schema FraudDetectorPutDetectorRequest#detectorId
   */
  readonly detectorId: string;

  /**
   * @schema FraudDetectorPutDetectorRequest#description
   */
  readonly description?: string;

  /**
   * @schema FraudDetectorPutDetectorRequest#eventTypeName
   */
  readonly eventTypeName: string;

  /**
   * @schema FraudDetectorPutDetectorRequest#tags
   */
  readonly tags?: FraudDetectorTag[];

}

/**
 * Converts an object of type 'FraudDetectorPutDetectorRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorPutDetectorRequest(obj: FraudDetectorPutDetectorRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'detectorId': obj.detectorId,
    'description': obj.description,
    'eventTypeName': obj.eventTypeName,
    'tags': obj.tags?.map(y => toJson_FraudDetectorTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorPutDetectorResult
 */
export interface FraudDetectorPutDetectorResult {
}

/**
 * Converts an object of type 'FraudDetectorPutDetectorResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorPutDetectorResult(obj: FraudDetectorPutDetectorResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorPutEntityTypeRequest
 */
export interface FraudDetectorPutEntityTypeRequest {
  /**
   * @schema FraudDetectorPutEntityTypeRequest#name
   */
  readonly name: string;

  /**
   * @schema FraudDetectorPutEntityTypeRequest#description
   */
  readonly description?: string;

  /**
   * @schema FraudDetectorPutEntityTypeRequest#tags
   */
  readonly tags?: FraudDetectorTag[];

}

/**
 * Converts an object of type 'FraudDetectorPutEntityTypeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorPutEntityTypeRequest(obj: FraudDetectorPutEntityTypeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'description': obj.description,
    'tags': obj.tags?.map(y => toJson_FraudDetectorTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorPutEntityTypeResult
 */
export interface FraudDetectorPutEntityTypeResult {
}

/**
 * Converts an object of type 'FraudDetectorPutEntityTypeResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorPutEntityTypeResult(obj: FraudDetectorPutEntityTypeResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorPutEventTypeRequest
 */
export interface FraudDetectorPutEventTypeRequest {
  /**
   * @schema FraudDetectorPutEventTypeRequest#name
   */
  readonly name: string;

  /**
   * @schema FraudDetectorPutEventTypeRequest#description
   */
  readonly description?: string;

  /**
   * @schema FraudDetectorPutEventTypeRequest#eventVariables
   */
  readonly eventVariables: string[];

  /**
   * @schema FraudDetectorPutEventTypeRequest#labels
   */
  readonly labels?: string[];

  /**
   * @schema FraudDetectorPutEventTypeRequest#entityTypes
   */
  readonly entityTypes: string[];

  /**
   * @schema FraudDetectorPutEventTypeRequest#tags
   */
  readonly tags?: FraudDetectorTag[];

}

/**
 * Converts an object of type 'FraudDetectorPutEventTypeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorPutEventTypeRequest(obj: FraudDetectorPutEventTypeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'description': obj.description,
    'eventVariables': obj.eventVariables?.map(y => y),
    'labels': obj.labels?.map(y => y),
    'entityTypes': obj.entityTypes?.map(y => y),
    'tags': obj.tags?.map(y => toJson_FraudDetectorTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorPutEventTypeResult
 */
export interface FraudDetectorPutEventTypeResult {
}

/**
 * Converts an object of type 'FraudDetectorPutEventTypeResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorPutEventTypeResult(obj: FraudDetectorPutEventTypeResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorPutExternalModelRequest
 */
export interface FraudDetectorPutExternalModelRequest {
  /**
   * @schema FraudDetectorPutExternalModelRequest#modelEndpoint
   */
  readonly modelEndpoint: string;

  /**
   * @schema FraudDetectorPutExternalModelRequest#modelSource
   */
  readonly modelSource: string;

  /**
   * @schema FraudDetectorPutExternalModelRequest#invokeModelEndpointRoleArn
   */
  readonly invokeModelEndpointRoleArn: string;

  /**
   * @schema FraudDetectorPutExternalModelRequest#inputConfiguration
   */
  readonly inputConfiguration: FraudDetectorModelInputConfiguration;

  /**
   * @schema FraudDetectorPutExternalModelRequest#outputConfiguration
   */
  readonly outputConfiguration: FraudDetectorModelOutputConfiguration;

  /**
   * @schema FraudDetectorPutExternalModelRequest#modelEndpointStatus
   */
  readonly modelEndpointStatus: string;

  /**
   * @schema FraudDetectorPutExternalModelRequest#tags
   */
  readonly tags?: FraudDetectorTag[];

}

/**
 * Converts an object of type 'FraudDetectorPutExternalModelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorPutExternalModelRequest(obj: FraudDetectorPutExternalModelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'modelEndpoint': obj.modelEndpoint,
    'modelSource': obj.modelSource,
    'invokeModelEndpointRoleArn': obj.invokeModelEndpointRoleArn,
    'inputConfiguration': toJson_FraudDetectorModelInputConfiguration(obj.inputConfiguration),
    'outputConfiguration': toJson_FraudDetectorModelOutputConfiguration(obj.outputConfiguration),
    'modelEndpointStatus': obj.modelEndpointStatus,
    'tags': obj.tags?.map(y => toJson_FraudDetectorTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorPutExternalModelResult
 */
export interface FraudDetectorPutExternalModelResult {
}

/**
 * Converts an object of type 'FraudDetectorPutExternalModelResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorPutExternalModelResult(obj: FraudDetectorPutExternalModelResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorPutKmsEncryptionKeyRequest
 */
export interface FraudDetectorPutKmsEncryptionKeyRequest {
  /**
   * @schema FraudDetectorPutKmsEncryptionKeyRequest#kmsEncryptionKeyArn
   */
  readonly kmsEncryptionKeyArn: string;

}

/**
 * Converts an object of type 'FraudDetectorPutKmsEncryptionKeyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorPutKmsEncryptionKeyRequest(obj: FraudDetectorPutKmsEncryptionKeyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'kmsEncryptionKeyArn': obj.kmsEncryptionKeyArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorPutKmsEncryptionKeyResult
 */
export interface FraudDetectorPutKmsEncryptionKeyResult {
}

/**
 * Converts an object of type 'FraudDetectorPutKmsEncryptionKeyResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorPutKmsEncryptionKeyResult(obj: FraudDetectorPutKmsEncryptionKeyResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorPutLabelRequest
 */
export interface FraudDetectorPutLabelRequest {
  /**
   * @schema FraudDetectorPutLabelRequest#name
   */
  readonly name: string;

  /**
   * @schema FraudDetectorPutLabelRequest#description
   */
  readonly description?: string;

  /**
   * @schema FraudDetectorPutLabelRequest#tags
   */
  readonly tags?: FraudDetectorTag[];

}

/**
 * Converts an object of type 'FraudDetectorPutLabelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorPutLabelRequest(obj: FraudDetectorPutLabelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'description': obj.description,
    'tags': obj.tags?.map(y => toJson_FraudDetectorTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorPutLabelResult
 */
export interface FraudDetectorPutLabelResult {
}

/**
 * Converts an object of type 'FraudDetectorPutLabelResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorPutLabelResult(obj: FraudDetectorPutLabelResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorPutOutcomeRequest
 */
export interface FraudDetectorPutOutcomeRequest {
  /**
   * @schema FraudDetectorPutOutcomeRequest#name
   */
  readonly name: string;

  /**
   * @schema FraudDetectorPutOutcomeRequest#description
   */
  readonly description?: string;

  /**
   * @schema FraudDetectorPutOutcomeRequest#tags
   */
  readonly tags?: FraudDetectorTag[];

}

/**
 * Converts an object of type 'FraudDetectorPutOutcomeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorPutOutcomeRequest(obj: FraudDetectorPutOutcomeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'description': obj.description,
    'tags': obj.tags?.map(y => toJson_FraudDetectorTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorPutOutcomeResult
 */
export interface FraudDetectorPutOutcomeResult {
}

/**
 * Converts an object of type 'FraudDetectorPutOutcomeResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorPutOutcomeResult(obj: FraudDetectorPutOutcomeResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorTagResourceRequest
 */
export interface FraudDetectorTagResourceRequest {
  /**
   * @schema FraudDetectorTagResourceRequest#resourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema FraudDetectorTagResourceRequest#tags
   */
  readonly tags: FraudDetectorTag[];

}

/**
 * Converts an object of type 'FraudDetectorTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorTagResourceRequest(obj: FraudDetectorTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceARN': obj.resourceArn,
    'tags': obj.tags?.map(y => toJson_FraudDetectorTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorTagResourceResult
 */
export interface FraudDetectorTagResourceResult {
}

/**
 * Converts an object of type 'FraudDetectorTagResourceResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorTagResourceResult(obj: FraudDetectorTagResourceResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorUntagResourceRequest
 */
export interface FraudDetectorUntagResourceRequest {
  /**
   * @schema FraudDetectorUntagResourceRequest#resourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema FraudDetectorUntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * Converts an object of type 'FraudDetectorUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorUntagResourceRequest(obj: FraudDetectorUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceARN': obj.resourceArn,
    'tagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorUntagResourceResult
 */
export interface FraudDetectorUntagResourceResult {
}

/**
 * Converts an object of type 'FraudDetectorUntagResourceResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorUntagResourceResult(obj: FraudDetectorUntagResourceResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorUpdateDetectorVersionRequest
 */
export interface FraudDetectorUpdateDetectorVersionRequest {
  /**
   * @schema FraudDetectorUpdateDetectorVersionRequest#detectorId
   */
  readonly detectorId: string;

  /**
   * @schema FraudDetectorUpdateDetectorVersionRequest#detectorVersionId
   */
  readonly detectorVersionId: string;

  /**
   * @schema FraudDetectorUpdateDetectorVersionRequest#externalModelEndpoints
   */
  readonly externalModelEndpoints: string[];

  /**
   * @schema FraudDetectorUpdateDetectorVersionRequest#rules
   */
  readonly rules: FraudDetectorRule[];

  /**
   * @schema FraudDetectorUpdateDetectorVersionRequest#description
   */
  readonly description?: string;

  /**
   * @schema FraudDetectorUpdateDetectorVersionRequest#modelVersions
   */
  readonly modelVersions?: FraudDetectorModelVersion[];

  /**
   * @schema FraudDetectorUpdateDetectorVersionRequest#ruleExecutionMode
   */
  readonly ruleExecutionMode?: string;

}

/**
 * Converts an object of type 'FraudDetectorUpdateDetectorVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorUpdateDetectorVersionRequest(obj: FraudDetectorUpdateDetectorVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'detectorId': obj.detectorId,
    'detectorVersionId': obj.detectorVersionId,
    'externalModelEndpoints': obj.externalModelEndpoints?.map(y => y),
    'rules': obj.rules?.map(y => toJson_FraudDetectorRule(y)),
    'description': obj.description,
    'modelVersions': obj.modelVersions?.map(y => toJson_FraudDetectorModelVersion(y)),
    'ruleExecutionMode': obj.ruleExecutionMode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorUpdateDetectorVersionResult
 */
export interface FraudDetectorUpdateDetectorVersionResult {
}

/**
 * Converts an object of type 'FraudDetectorUpdateDetectorVersionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorUpdateDetectorVersionResult(obj: FraudDetectorUpdateDetectorVersionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorUpdateDetectorVersionMetadataRequest
 */
export interface FraudDetectorUpdateDetectorVersionMetadataRequest {
  /**
   * @schema FraudDetectorUpdateDetectorVersionMetadataRequest#detectorId
   */
  readonly detectorId: string;

  /**
   * @schema FraudDetectorUpdateDetectorVersionMetadataRequest#detectorVersionId
   */
  readonly detectorVersionId: string;

  /**
   * @schema FraudDetectorUpdateDetectorVersionMetadataRequest#description
   */
  readonly description: string;

}

/**
 * Converts an object of type 'FraudDetectorUpdateDetectorVersionMetadataRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorUpdateDetectorVersionMetadataRequest(obj: FraudDetectorUpdateDetectorVersionMetadataRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'detectorId': obj.detectorId,
    'detectorVersionId': obj.detectorVersionId,
    'description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorUpdateDetectorVersionMetadataResult
 */
export interface FraudDetectorUpdateDetectorVersionMetadataResult {
}

/**
 * Converts an object of type 'FraudDetectorUpdateDetectorVersionMetadataResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorUpdateDetectorVersionMetadataResult(obj: FraudDetectorUpdateDetectorVersionMetadataResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorUpdateDetectorVersionStatusRequest
 */
export interface FraudDetectorUpdateDetectorVersionStatusRequest {
  /**
   * @schema FraudDetectorUpdateDetectorVersionStatusRequest#detectorId
   */
  readonly detectorId: string;

  /**
   * @schema FraudDetectorUpdateDetectorVersionStatusRequest#detectorVersionId
   */
  readonly detectorVersionId: string;

  /**
   * @schema FraudDetectorUpdateDetectorVersionStatusRequest#status
   */
  readonly status: string;

}

/**
 * Converts an object of type 'FraudDetectorUpdateDetectorVersionStatusRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorUpdateDetectorVersionStatusRequest(obj: FraudDetectorUpdateDetectorVersionStatusRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'detectorId': obj.detectorId,
    'detectorVersionId': obj.detectorVersionId,
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorUpdateDetectorVersionStatusResult
 */
export interface FraudDetectorUpdateDetectorVersionStatusResult {
}

/**
 * Converts an object of type 'FraudDetectorUpdateDetectorVersionStatusResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorUpdateDetectorVersionStatusResult(obj: FraudDetectorUpdateDetectorVersionStatusResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorUpdateModelRequest
 */
export interface FraudDetectorUpdateModelRequest {
  /**
   * @schema FraudDetectorUpdateModelRequest#modelId
   */
  readonly modelId: string;

  /**
   * @schema FraudDetectorUpdateModelRequest#modelType
   */
  readonly modelType: string;

  /**
   * @schema FraudDetectorUpdateModelRequest#description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'FraudDetectorUpdateModelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorUpdateModelRequest(obj: FraudDetectorUpdateModelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'modelId': obj.modelId,
    'modelType': obj.modelType,
    'description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorUpdateModelResult
 */
export interface FraudDetectorUpdateModelResult {
}

/**
 * Converts an object of type 'FraudDetectorUpdateModelResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorUpdateModelResult(obj: FraudDetectorUpdateModelResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorUpdateModelVersionRequest
 */
export interface FraudDetectorUpdateModelVersionRequest {
  /**
   * @schema FraudDetectorUpdateModelVersionRequest#modelId
   */
  readonly modelId: string;

  /**
   * @schema FraudDetectorUpdateModelVersionRequest#modelType
   */
  readonly modelType: string;

  /**
   * @schema FraudDetectorUpdateModelVersionRequest#majorVersionNumber
   */
  readonly majorVersionNumber: string;

  /**
   * @schema FraudDetectorUpdateModelVersionRequest#externalEventsDetail
   */
  readonly externalEventsDetail?: FraudDetectorExternalEventsDetail;

  /**
   * @schema FraudDetectorUpdateModelVersionRequest#tags
   */
  readonly tags?: FraudDetectorTag[];

}

/**
 * Converts an object of type 'FraudDetectorUpdateModelVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorUpdateModelVersionRequest(obj: FraudDetectorUpdateModelVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'modelId': obj.modelId,
    'modelType': obj.modelType,
    'majorVersionNumber': obj.majorVersionNumber,
    'externalEventsDetail': toJson_FraudDetectorExternalEventsDetail(obj.externalEventsDetail),
    'tags': obj.tags?.map(y => toJson_FraudDetectorTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorUpdateModelVersionResult
 */
export interface FraudDetectorUpdateModelVersionResult {
  /**
   * @schema FraudDetectorUpdateModelVersionResult#modelId
   */
  readonly modelId?: string;

  /**
   * @schema FraudDetectorUpdateModelVersionResult#modelType
   */
  readonly modelType?: string;

  /**
   * @schema FraudDetectorUpdateModelVersionResult#modelVersionNumber
   */
  readonly modelVersionNumber?: string;

  /**
   * @schema FraudDetectorUpdateModelVersionResult#status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'FraudDetectorUpdateModelVersionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorUpdateModelVersionResult(obj: FraudDetectorUpdateModelVersionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'modelId': obj.modelId,
    'modelType': obj.modelType,
    'modelVersionNumber': obj.modelVersionNumber,
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorUpdateModelVersionStatusRequest
 */
export interface FraudDetectorUpdateModelVersionStatusRequest {
  /**
   * @schema FraudDetectorUpdateModelVersionStatusRequest#modelId
   */
  readonly modelId: string;

  /**
   * @schema FraudDetectorUpdateModelVersionStatusRequest#modelType
   */
  readonly modelType: string;

  /**
   * @schema FraudDetectorUpdateModelVersionStatusRequest#modelVersionNumber
   */
  readonly modelVersionNumber: string;

  /**
   * @schema FraudDetectorUpdateModelVersionStatusRequest#status
   */
  readonly status: string;

}

/**
 * Converts an object of type 'FraudDetectorUpdateModelVersionStatusRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorUpdateModelVersionStatusRequest(obj: FraudDetectorUpdateModelVersionStatusRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'modelId': obj.modelId,
    'modelType': obj.modelType,
    'modelVersionNumber': obj.modelVersionNumber,
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorUpdateModelVersionStatusResult
 */
export interface FraudDetectorUpdateModelVersionStatusResult {
}

/**
 * Converts an object of type 'FraudDetectorUpdateModelVersionStatusResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorUpdateModelVersionStatusResult(obj: FraudDetectorUpdateModelVersionStatusResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorUpdateRuleMetadataRequest
 */
export interface FraudDetectorUpdateRuleMetadataRequest {
  /**
   * @schema FraudDetectorUpdateRuleMetadataRequest#rule
   */
  readonly rule: FraudDetectorRule;

  /**
   * @schema FraudDetectorUpdateRuleMetadataRequest#description
   */
  readonly description: string;

}

/**
 * Converts an object of type 'FraudDetectorUpdateRuleMetadataRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorUpdateRuleMetadataRequest(obj: FraudDetectorUpdateRuleMetadataRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'rule': toJson_FraudDetectorRule(obj.rule),
    'description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorUpdateRuleMetadataResult
 */
export interface FraudDetectorUpdateRuleMetadataResult {
}

/**
 * Converts an object of type 'FraudDetectorUpdateRuleMetadataResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorUpdateRuleMetadataResult(obj: FraudDetectorUpdateRuleMetadataResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorUpdateRuleVersionRequest
 */
export interface FraudDetectorUpdateRuleVersionRequest {
  /**
   * @schema FraudDetectorUpdateRuleVersionRequest#rule
   */
  readonly rule: FraudDetectorRule;

  /**
   * @schema FraudDetectorUpdateRuleVersionRequest#description
   */
  readonly description?: string;

  /**
   * @schema FraudDetectorUpdateRuleVersionRequest#expression
   */
  readonly expression: string;

  /**
   * @schema FraudDetectorUpdateRuleVersionRequest#language
   */
  readonly language: string;

  /**
   * @schema FraudDetectorUpdateRuleVersionRequest#outcomes
   */
  readonly outcomes: string[];

  /**
   * @schema FraudDetectorUpdateRuleVersionRequest#tags
   */
  readonly tags?: FraudDetectorTag[];

}

/**
 * Converts an object of type 'FraudDetectorUpdateRuleVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorUpdateRuleVersionRequest(obj: FraudDetectorUpdateRuleVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'rule': toJson_FraudDetectorRule(obj.rule),
    'description': obj.description,
    'expression': obj.expression,
    'language': obj.language,
    'outcomes': obj.outcomes?.map(y => y),
    'tags': obj.tags?.map(y => toJson_FraudDetectorTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorUpdateRuleVersionResult
 */
export interface FraudDetectorUpdateRuleVersionResult {
  /**
   * @schema FraudDetectorUpdateRuleVersionResult#rule
   */
  readonly rule?: FraudDetectorRule;

}

/**
 * Converts an object of type 'FraudDetectorUpdateRuleVersionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorUpdateRuleVersionResult(obj: FraudDetectorUpdateRuleVersionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'rule': toJson_FraudDetectorRule(obj.rule),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorUpdateVariableRequest
 */
export interface FraudDetectorUpdateVariableRequest {
  /**
   * @schema FraudDetectorUpdateVariableRequest#name
   */
  readonly name: string;

  /**
   * @schema FraudDetectorUpdateVariableRequest#defaultValue
   */
  readonly defaultValue?: string;

  /**
   * @schema FraudDetectorUpdateVariableRequest#description
   */
  readonly description?: string;

  /**
   * @schema FraudDetectorUpdateVariableRequest#variableType
   */
  readonly variableType?: string;

}

/**
 * Converts an object of type 'FraudDetectorUpdateVariableRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorUpdateVariableRequest(obj: FraudDetectorUpdateVariableRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'defaultValue': obj.defaultValue,
    'description': obj.description,
    'variableType': obj.variableType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorUpdateVariableResult
 */
export interface FraudDetectorUpdateVariableResult {
}

/**
 * Converts an object of type 'FraudDetectorUpdateVariableResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorUpdateVariableResult(obj: FraudDetectorUpdateVariableResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorVariableEntry
 */
export interface FraudDetectorVariableEntry {
  /**
   * @schema FraudDetectorVariableEntry#name
   */
  readonly name?: string;

  /**
   * @schema FraudDetectorVariableEntry#dataType
   */
  readonly dataType?: string;

  /**
   * @schema FraudDetectorVariableEntry#dataSource
   */
  readonly dataSource?: string;

  /**
   * @schema FraudDetectorVariableEntry#defaultValue
   */
  readonly defaultValue?: string;

  /**
   * @schema FraudDetectorVariableEntry#description
   */
  readonly description?: string;

  /**
   * @schema FraudDetectorVariableEntry#variableType
   */
  readonly variableType?: string;

}

/**
 * Converts an object of type 'FraudDetectorVariableEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorVariableEntry(obj: FraudDetectorVariableEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'dataType': obj.dataType,
    'dataSource': obj.dataSource,
    'defaultValue': obj.defaultValue,
    'description': obj.description,
    'variableType': obj.variableType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorTag
 */
export interface FraudDetectorTag {
  /**
   * @schema FraudDetectorTag#key
   */
  readonly key: string;

  /**
   * @schema FraudDetectorTag#value
   */
  readonly value: string;

}

/**
 * Converts an object of type 'FraudDetectorTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorTag(obj: FraudDetectorTag | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'key': obj.key,
    'value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorBatchCreateVariableError
 */
export interface FraudDetectorBatchCreateVariableError {
  /**
   * @schema FraudDetectorBatchCreateVariableError#name
   */
  readonly name?: string;

  /**
   * @schema FraudDetectorBatchCreateVariableError#code
   */
  readonly code?: number;

  /**
   * @schema FraudDetectorBatchCreateVariableError#message
   */
  readonly message?: string;

}

/**
 * Converts an object of type 'FraudDetectorBatchCreateVariableError' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorBatchCreateVariableError(obj: FraudDetectorBatchCreateVariableError | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'code': obj.code,
    'message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorVariable
 */
export interface FraudDetectorVariable {
  /**
   * @schema FraudDetectorVariable#name
   */
  readonly name?: string;

  /**
   * @schema FraudDetectorVariable#dataType
   */
  readonly dataType?: string;

  /**
   * @schema FraudDetectorVariable#dataSource
   */
  readonly dataSource?: string;

  /**
   * @schema FraudDetectorVariable#defaultValue
   */
  readonly defaultValue?: string;

  /**
   * @schema FraudDetectorVariable#description
   */
  readonly description?: string;

  /**
   * @schema FraudDetectorVariable#variableType
   */
  readonly variableType?: string;

  /**
   * @schema FraudDetectorVariable#lastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

  /**
   * @schema FraudDetectorVariable#createdTime
   */
  readonly createdTime?: string;

  /**
   * @schema FraudDetectorVariable#arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'FraudDetectorVariable' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorVariable(obj: FraudDetectorVariable | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'dataType': obj.dataType,
    'dataSource': obj.dataSource,
    'defaultValue': obj.defaultValue,
    'description': obj.description,
    'variableType': obj.variableType,
    'lastUpdatedTime': obj.lastUpdatedTime,
    'createdTime': obj.createdTime,
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorBatchGetVariableError
 */
export interface FraudDetectorBatchGetVariableError {
  /**
   * @schema FraudDetectorBatchGetVariableError#name
   */
  readonly name?: string;

  /**
   * @schema FraudDetectorBatchGetVariableError#code
   */
  readonly code?: number;

  /**
   * @schema FraudDetectorBatchGetVariableError#message
   */
  readonly message?: string;

}

/**
 * Converts an object of type 'FraudDetectorBatchGetVariableError' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorBatchGetVariableError(obj: FraudDetectorBatchGetVariableError | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'code': obj.code,
    'message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorRule
 */
export interface FraudDetectorRule {
  /**
   * @schema FraudDetectorRule#detectorId
   */
  readonly detectorId: string;

  /**
   * @schema FraudDetectorRule#ruleId
   */
  readonly ruleId: string;

  /**
   * @schema FraudDetectorRule#ruleVersion
   */
  readonly ruleVersion: string;

}

/**
 * Converts an object of type 'FraudDetectorRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorRule(obj: FraudDetectorRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'detectorId': obj.detectorId,
    'ruleId': obj.ruleId,
    'ruleVersion': obj.ruleVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorModelVersion
 */
export interface FraudDetectorModelVersion {
  /**
   * @schema FraudDetectorModelVersion#modelId
   */
  readonly modelId: string;

  /**
   * @schema FraudDetectorModelVersion#modelType
   */
  readonly modelType: string;

  /**
   * @schema FraudDetectorModelVersion#modelVersionNumber
   */
  readonly modelVersionNumber: string;

  /**
   * @schema FraudDetectorModelVersion#arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'FraudDetectorModelVersion' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorModelVersion(obj: FraudDetectorModelVersion | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'modelId': obj.modelId,
    'modelType': obj.modelType,
    'modelVersionNumber': obj.modelVersionNumber,
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorTrainingDataSchema
 */
export interface FraudDetectorTrainingDataSchema {
  /**
   * @schema FraudDetectorTrainingDataSchema#modelVariables
   */
  readonly modelVariables: string[];

  /**
   * @schema FraudDetectorTrainingDataSchema#labelSchema
   */
  readonly labelSchema: FraudDetectorLabelSchema;

}

/**
 * Converts an object of type 'FraudDetectorTrainingDataSchema' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorTrainingDataSchema(obj: FraudDetectorTrainingDataSchema | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'modelVariables': obj.modelVariables?.map(y => y),
    'labelSchema': toJson_FraudDetectorLabelSchema(obj.labelSchema),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorExternalEventsDetail
 */
export interface FraudDetectorExternalEventsDetail {
  /**
   * @schema FraudDetectorExternalEventsDetail#dataLocation
   */
  readonly dataLocation: string;

  /**
   * @schema FraudDetectorExternalEventsDetail#dataAccessRoleArn
   */
  readonly dataAccessRoleArn: string;

}

/**
 * Converts an object of type 'FraudDetectorExternalEventsDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorExternalEventsDetail(obj: FraudDetectorExternalEventsDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'dataLocation': obj.dataLocation,
    'dataAccessRoleArn': obj.dataAccessRoleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorDetectorVersionSummary
 */
export interface FraudDetectorDetectorVersionSummary {
  /**
   * @schema FraudDetectorDetectorVersionSummary#detectorVersionId
   */
  readonly detectorVersionId?: string;

  /**
   * @schema FraudDetectorDetectorVersionSummary#status
   */
  readonly status?: string;

  /**
   * @schema FraudDetectorDetectorVersionSummary#description
   */
  readonly description?: string;

  /**
   * @schema FraudDetectorDetectorVersionSummary#lastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

}

/**
 * Converts an object of type 'FraudDetectorDetectorVersionSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorDetectorVersionSummary(obj: FraudDetectorDetectorVersionSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'detectorVersionId': obj.detectorVersionId,
    'status': obj.status,
    'description': obj.description,
    'lastUpdatedTime': obj.lastUpdatedTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorModelVersionDetail
 */
export interface FraudDetectorModelVersionDetail {
  /**
   * @schema FraudDetectorModelVersionDetail#modelId
   */
  readonly modelId?: string;

  /**
   * @schema FraudDetectorModelVersionDetail#modelType
   */
  readonly modelType?: string;

  /**
   * @schema FraudDetectorModelVersionDetail#modelVersionNumber
   */
  readonly modelVersionNumber?: string;

  /**
   * @schema FraudDetectorModelVersionDetail#status
   */
  readonly status?: string;

  /**
   * @schema FraudDetectorModelVersionDetail#trainingDataSource
   */
  readonly trainingDataSource?: string;

  /**
   * @schema FraudDetectorModelVersionDetail#trainingDataSchema
   */
  readonly trainingDataSchema?: FraudDetectorTrainingDataSchema;

  /**
   * @schema FraudDetectorModelVersionDetail#externalEventsDetail
   */
  readonly externalEventsDetail?: FraudDetectorExternalEventsDetail;

  /**
   * @schema FraudDetectorModelVersionDetail#trainingResult
   */
  readonly trainingResult?: FraudDetectorTrainingResult;

  /**
   * @schema FraudDetectorModelVersionDetail#lastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

  /**
   * @schema FraudDetectorModelVersionDetail#createdTime
   */
  readonly createdTime?: string;

  /**
   * @schema FraudDetectorModelVersionDetail#arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'FraudDetectorModelVersionDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorModelVersionDetail(obj: FraudDetectorModelVersionDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'modelId': obj.modelId,
    'modelType': obj.modelType,
    'modelVersionNumber': obj.modelVersionNumber,
    'status': obj.status,
    'trainingDataSource': obj.trainingDataSource,
    'trainingDataSchema': toJson_FraudDetectorTrainingDataSchema(obj.trainingDataSchema),
    'externalEventsDetail': toJson_FraudDetectorExternalEventsDetail(obj.externalEventsDetail),
    'trainingResult': toJson_FraudDetectorTrainingResult(obj.trainingResult),
    'lastUpdatedTime': obj.lastUpdatedTime,
    'createdTime': obj.createdTime,
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorBatchPrediction
 */
export interface FraudDetectorBatchPrediction {
  /**
   * @schema FraudDetectorBatchPrediction#jobId
   */
  readonly jobId?: string;

  /**
   * @schema FraudDetectorBatchPrediction#status
   */
  readonly status?: string;

  /**
   * @schema FraudDetectorBatchPrediction#failureReason
   */
  readonly failureReason?: string;

  /**
   * @schema FraudDetectorBatchPrediction#startTime
   */
  readonly startTime?: string;

  /**
   * @schema FraudDetectorBatchPrediction#completionTime
   */
  readonly completionTime?: string;

  /**
   * @schema FraudDetectorBatchPrediction#lastHeartbeatTime
   */
  readonly lastHeartbeatTime?: string;

  /**
   * @schema FraudDetectorBatchPrediction#inputPath
   */
  readonly inputPath?: string;

  /**
   * @schema FraudDetectorBatchPrediction#outputPath
   */
  readonly outputPath?: string;

  /**
   * @schema FraudDetectorBatchPrediction#eventTypeName
   */
  readonly eventTypeName?: string;

  /**
   * @schema FraudDetectorBatchPrediction#detectorName
   */
  readonly detectorName?: string;

  /**
   * @schema FraudDetectorBatchPrediction#detectorVersion
   */
  readonly detectorVersion?: string;

  /**
   * @schema FraudDetectorBatchPrediction#iamRoleArn
   */
  readonly iamRoleArn?: string;

  /**
   * @schema FraudDetectorBatchPrediction#arn
   */
  readonly arn?: string;

  /**
   * @schema FraudDetectorBatchPrediction#processedRecordsCount
   */
  readonly processedRecordsCount?: number;

  /**
   * @schema FraudDetectorBatchPrediction#totalRecordsCount
   */
  readonly totalRecordsCount?: number;

}

/**
 * Converts an object of type 'FraudDetectorBatchPrediction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorBatchPrediction(obj: FraudDetectorBatchPrediction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobId': obj.jobId,
    'status': obj.status,
    'failureReason': obj.failureReason,
    'startTime': obj.startTime,
    'completionTime': obj.completionTime,
    'lastHeartbeatTime': obj.lastHeartbeatTime,
    'inputPath': obj.inputPath,
    'outputPath': obj.outputPath,
    'eventTypeName': obj.eventTypeName,
    'detectorName': obj.detectorName,
    'detectorVersion': obj.detectorVersion,
    'iamRoleArn': obj.iamRoleArn,
    'arn': obj.arn,
    'processedRecordsCount': obj.processedRecordsCount,
    'totalRecordsCount': obj.totalRecordsCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorDetector
 */
export interface FraudDetectorDetector {
  /**
   * @schema FraudDetectorDetector#detectorId
   */
  readonly detectorId?: string;

  /**
   * @schema FraudDetectorDetector#description
   */
  readonly description?: string;

  /**
   * @schema FraudDetectorDetector#eventTypeName
   */
  readonly eventTypeName?: string;

  /**
   * @schema FraudDetectorDetector#lastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

  /**
   * @schema FraudDetectorDetector#createdTime
   */
  readonly createdTime?: string;

  /**
   * @schema FraudDetectorDetector#arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'FraudDetectorDetector' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorDetector(obj: FraudDetectorDetector | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'detectorId': obj.detectorId,
    'description': obj.description,
    'eventTypeName': obj.eventTypeName,
    'lastUpdatedTime': obj.lastUpdatedTime,
    'createdTime': obj.createdTime,
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorEntityType
 */
export interface FraudDetectorEntityType {
  /**
   * @schema FraudDetectorEntityType#name
   */
  readonly name?: string;

  /**
   * @schema FraudDetectorEntityType#description
   */
  readonly description?: string;

  /**
   * @schema FraudDetectorEntityType#lastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

  /**
   * @schema FraudDetectorEntityType#createdTime
   */
  readonly createdTime?: string;

  /**
   * @schema FraudDetectorEntityType#arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'FraudDetectorEntityType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorEntityType(obj: FraudDetectorEntityType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'description': obj.description,
    'lastUpdatedTime': obj.lastUpdatedTime,
    'createdTime': obj.createdTime,
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorEntity
 */
export interface FraudDetectorEntity {
  /**
   * @schema FraudDetectorEntity#entityType
   */
  readonly entityType: string;

  /**
   * @schema FraudDetectorEntity#entityId
   */
  readonly entityId: string;

}

/**
 * Converts an object of type 'FraudDetectorEntity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorEntity(obj: FraudDetectorEntity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'entityType': obj.entityType,
    'entityId': obj.entityId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorModelEndpointDataBlob
 */
export interface FraudDetectorModelEndpointDataBlob {
  /**
   * @schema FraudDetectorModelEndpointDataBlob#byteBuffer
   */
  readonly byteBuffer?: any;

  /**
   * @schema FraudDetectorModelEndpointDataBlob#contentType
   */
  readonly contentType?: string;

}

/**
 * Converts an object of type 'FraudDetectorModelEndpointDataBlob' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorModelEndpointDataBlob(obj: FraudDetectorModelEndpointDataBlob | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'byteBuffer': obj.byteBuffer,
    'contentType': obj.contentType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorModelScores
 */
export interface FraudDetectorModelScores {
  /**
   * @schema FraudDetectorModelScores#modelVersion
   */
  readonly modelVersion?: FraudDetectorModelVersion;

  /**
   * @schema FraudDetectorModelScores#scores
   */
  readonly scores?: { [key: string]: number };

}

/**
 * Converts an object of type 'FraudDetectorModelScores' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorModelScores(obj: FraudDetectorModelScores | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'modelVersion': toJson_FraudDetectorModelVersion(obj.modelVersion),
    'scores': ((obj.scores) === undefined) ? undefined : (Object.entries(obj.scores).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorRuleResult
 */
export interface FraudDetectorRuleResult {
  /**
   * @schema FraudDetectorRuleResult#ruleId
   */
  readonly ruleId?: string;

  /**
   * @schema FraudDetectorRuleResult#outcomes
   */
  readonly outcomes?: string[];

}

/**
 * Converts an object of type 'FraudDetectorRuleResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorRuleResult(obj: FraudDetectorRuleResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ruleId': obj.ruleId,
    'outcomes': obj.outcomes?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorEventType
 */
export interface FraudDetectorEventType {
  /**
   * @schema FraudDetectorEventType#name
   */
  readonly name?: string;

  /**
   * @schema FraudDetectorEventType#description
   */
  readonly description?: string;

  /**
   * @schema FraudDetectorEventType#eventVariables
   */
  readonly eventVariables?: string[];

  /**
   * @schema FraudDetectorEventType#labels
   */
  readonly labels?: string[];

  /**
   * @schema FraudDetectorEventType#entityTypes
   */
  readonly entityTypes?: string[];

  /**
   * @schema FraudDetectorEventType#lastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

  /**
   * @schema FraudDetectorEventType#createdTime
   */
  readonly createdTime?: string;

  /**
   * @schema FraudDetectorEventType#arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'FraudDetectorEventType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorEventType(obj: FraudDetectorEventType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'description': obj.description,
    'eventVariables': obj.eventVariables?.map(y => y),
    'labels': obj.labels?.map(y => y),
    'entityTypes': obj.entityTypes?.map(y => y),
    'lastUpdatedTime': obj.lastUpdatedTime,
    'createdTime': obj.createdTime,
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorExternalModel
 */
export interface FraudDetectorExternalModel {
  /**
   * @schema FraudDetectorExternalModel#modelEndpoint
   */
  readonly modelEndpoint?: string;

  /**
   * @schema FraudDetectorExternalModel#modelSource
   */
  readonly modelSource?: string;

  /**
   * @schema FraudDetectorExternalModel#invokeModelEndpointRoleArn
   */
  readonly invokeModelEndpointRoleArn?: string;

  /**
   * @schema FraudDetectorExternalModel#inputConfiguration
   */
  readonly inputConfiguration?: FraudDetectorModelInputConfiguration;

  /**
   * @schema FraudDetectorExternalModel#outputConfiguration
   */
  readonly outputConfiguration?: FraudDetectorModelOutputConfiguration;

  /**
   * @schema FraudDetectorExternalModel#modelEndpointStatus
   */
  readonly modelEndpointStatus?: string;

  /**
   * @schema FraudDetectorExternalModel#lastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

  /**
   * @schema FraudDetectorExternalModel#createdTime
   */
  readonly createdTime?: string;

  /**
   * @schema FraudDetectorExternalModel#arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'FraudDetectorExternalModel' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorExternalModel(obj: FraudDetectorExternalModel | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'modelEndpoint': obj.modelEndpoint,
    'modelSource': obj.modelSource,
    'invokeModelEndpointRoleArn': obj.invokeModelEndpointRoleArn,
    'inputConfiguration': toJson_FraudDetectorModelInputConfiguration(obj.inputConfiguration),
    'outputConfiguration': toJson_FraudDetectorModelOutputConfiguration(obj.outputConfiguration),
    'modelEndpointStatus': obj.modelEndpointStatus,
    'lastUpdatedTime': obj.lastUpdatedTime,
    'createdTime': obj.createdTime,
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorKmsKey
 */
export interface FraudDetectorKmsKey {
  /**
   * @schema FraudDetectorKmsKey#kmsEncryptionKeyArn
   */
  readonly kmsEncryptionKeyArn?: string;

}

/**
 * Converts an object of type 'FraudDetectorKmsKey' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorKmsKey(obj: FraudDetectorKmsKey | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'kmsEncryptionKeyArn': obj.kmsEncryptionKeyArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorLabel
 */
export interface FraudDetectorLabel {
  /**
   * @schema FraudDetectorLabel#name
   */
  readonly name?: string;

  /**
   * @schema FraudDetectorLabel#description
   */
  readonly description?: string;

  /**
   * @schema FraudDetectorLabel#lastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

  /**
   * @schema FraudDetectorLabel#createdTime
   */
  readonly createdTime?: string;

  /**
   * @schema FraudDetectorLabel#arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'FraudDetectorLabel' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorLabel(obj: FraudDetectorLabel | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'description': obj.description,
    'lastUpdatedTime': obj.lastUpdatedTime,
    'createdTime': obj.createdTime,
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorModel
 */
export interface FraudDetectorModel {
  /**
   * @schema FraudDetectorModel#modelId
   */
  readonly modelId?: string;

  /**
   * @schema FraudDetectorModel#modelType
   */
  readonly modelType?: string;

  /**
   * @schema FraudDetectorModel#description
   */
  readonly description?: string;

  /**
   * @schema FraudDetectorModel#eventTypeName
   */
  readonly eventTypeName?: string;

  /**
   * @schema FraudDetectorModel#createdTime
   */
  readonly createdTime?: string;

  /**
   * @schema FraudDetectorModel#lastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

  /**
   * @schema FraudDetectorModel#arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'FraudDetectorModel' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorModel(obj: FraudDetectorModel | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'modelId': obj.modelId,
    'modelType': obj.modelType,
    'description': obj.description,
    'eventTypeName': obj.eventTypeName,
    'createdTime': obj.createdTime,
    'lastUpdatedTime': obj.lastUpdatedTime,
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorOutcome
 */
export interface FraudDetectorOutcome {
  /**
   * @schema FraudDetectorOutcome#name
   */
  readonly name?: string;

  /**
   * @schema FraudDetectorOutcome#description
   */
  readonly description?: string;

  /**
   * @schema FraudDetectorOutcome#lastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

  /**
   * @schema FraudDetectorOutcome#createdTime
   */
  readonly createdTime?: string;

  /**
   * @schema FraudDetectorOutcome#arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'FraudDetectorOutcome' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorOutcome(obj: FraudDetectorOutcome | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'description': obj.description,
    'lastUpdatedTime': obj.lastUpdatedTime,
    'createdTime': obj.createdTime,
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorRuleDetail
 */
export interface FraudDetectorRuleDetail {
  /**
   * @schema FraudDetectorRuleDetail#ruleId
   */
  readonly ruleId?: string;

  /**
   * @schema FraudDetectorRuleDetail#description
   */
  readonly description?: string;

  /**
   * @schema FraudDetectorRuleDetail#detectorId
   */
  readonly detectorId?: string;

  /**
   * @schema FraudDetectorRuleDetail#ruleVersion
   */
  readonly ruleVersion?: string;

  /**
   * @schema FraudDetectorRuleDetail#expression
   */
  readonly expression?: string;

  /**
   * @schema FraudDetectorRuleDetail#language
   */
  readonly language?: string;

  /**
   * @schema FraudDetectorRuleDetail#outcomes
   */
  readonly outcomes?: string[];

  /**
   * @schema FraudDetectorRuleDetail#lastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

  /**
   * @schema FraudDetectorRuleDetail#createdTime
   */
  readonly createdTime?: string;

  /**
   * @schema FraudDetectorRuleDetail#arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'FraudDetectorRuleDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorRuleDetail(obj: FraudDetectorRuleDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ruleId': obj.ruleId,
    'description': obj.description,
    'detectorId': obj.detectorId,
    'ruleVersion': obj.ruleVersion,
    'expression': obj.expression,
    'language': obj.language,
    'outcomes': obj.outcomes?.map(y => y),
    'lastUpdatedTime': obj.lastUpdatedTime,
    'createdTime': obj.createdTime,
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorModelInputConfiguration
 */
export interface FraudDetectorModelInputConfiguration {
  /**
   * @schema FraudDetectorModelInputConfiguration#eventTypeName
   */
  readonly eventTypeName?: string;

  /**
   * @schema FraudDetectorModelInputConfiguration#format
   */
  readonly format?: string;

  /**
   * @schema FraudDetectorModelInputConfiguration#useEventVariables
   */
  readonly useEventVariables: boolean;

  /**
   * @schema FraudDetectorModelInputConfiguration#jsonInputTemplate
   */
  readonly jsonInputTemplate?: string;

  /**
   * @schema FraudDetectorModelInputConfiguration#csvInputTemplate
   */
  readonly csvInputTemplate?: string;

}

/**
 * Converts an object of type 'FraudDetectorModelInputConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorModelInputConfiguration(obj: FraudDetectorModelInputConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'eventTypeName': obj.eventTypeName,
    'format': obj.format,
    'useEventVariables': obj.useEventVariables,
    'jsonInputTemplate': obj.jsonInputTemplate,
    'csvInputTemplate': obj.csvInputTemplate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorModelOutputConfiguration
 */
export interface FraudDetectorModelOutputConfiguration {
  /**
   * @schema FraudDetectorModelOutputConfiguration#format
   */
  readonly format: string;

  /**
   * @schema FraudDetectorModelOutputConfiguration#jsonKeyToVariableMap
   */
  readonly jsonKeyToVariableMap?: { [key: string]: string };

  /**
   * @schema FraudDetectorModelOutputConfiguration#csvIndexToVariableMap
   */
  readonly csvIndexToVariableMap?: { [key: string]: string };

}

/**
 * Converts an object of type 'FraudDetectorModelOutputConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorModelOutputConfiguration(obj: FraudDetectorModelOutputConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'format': obj.format,
    'jsonKeyToVariableMap': ((obj.jsonKeyToVariableMap) === undefined) ? undefined : (Object.entries(obj.jsonKeyToVariableMap).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'csvIndexToVariableMap': ((obj.csvIndexToVariableMap) === undefined) ? undefined : (Object.entries(obj.csvIndexToVariableMap).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorLabelSchema
 */
export interface FraudDetectorLabelSchema {
  /**
   * @schema FraudDetectorLabelSchema#labelMapper
   */
  readonly labelMapper: { [key: string]: string[] };

}

/**
 * Converts an object of type 'FraudDetectorLabelSchema' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorLabelSchema(obj: FraudDetectorLabelSchema | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'labelMapper': ((obj.labelMapper) === undefined) ? undefined : (Object.entries(obj.labelMapper).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => y) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorTrainingResult
 */
export interface FraudDetectorTrainingResult {
  /**
   * @schema FraudDetectorTrainingResult#dataValidationMetrics
   */
  readonly dataValidationMetrics?: FraudDetectorDataValidationMetrics;

  /**
   * @schema FraudDetectorTrainingResult#trainingMetrics
   */
  readonly trainingMetrics?: FraudDetectorTrainingMetrics;

  /**
   * @schema FraudDetectorTrainingResult#variableImportanceMetrics
   */
  readonly variableImportanceMetrics?: FraudDetectorVariableImportanceMetrics;

}

/**
 * Converts an object of type 'FraudDetectorTrainingResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorTrainingResult(obj: FraudDetectorTrainingResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'dataValidationMetrics': toJson_FraudDetectorDataValidationMetrics(obj.dataValidationMetrics),
    'trainingMetrics': toJson_FraudDetectorTrainingMetrics(obj.trainingMetrics),
    'variableImportanceMetrics': toJson_FraudDetectorVariableImportanceMetrics(obj.variableImportanceMetrics),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorDataValidationMetrics
 */
export interface FraudDetectorDataValidationMetrics {
  /**
   * @schema FraudDetectorDataValidationMetrics#fileLevelMessages
   */
  readonly fileLevelMessages?: FraudDetectorFileValidationMessage[];

  /**
   * @schema FraudDetectorDataValidationMetrics#fieldLevelMessages
   */
  readonly fieldLevelMessages?: FraudDetectorFieldValidationMessage[];

}

/**
 * Converts an object of type 'FraudDetectorDataValidationMetrics' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorDataValidationMetrics(obj: FraudDetectorDataValidationMetrics | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'fileLevelMessages': obj.fileLevelMessages?.map(y => toJson_FraudDetectorFileValidationMessage(y)),
    'fieldLevelMessages': obj.fieldLevelMessages?.map(y => toJson_FraudDetectorFieldValidationMessage(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorTrainingMetrics
 */
export interface FraudDetectorTrainingMetrics {
  /**
   * @schema FraudDetectorTrainingMetrics#auc
   */
  readonly auc?: number;

  /**
   * @schema FraudDetectorTrainingMetrics#metricDataPoints
   */
  readonly metricDataPoints?: FraudDetectorMetricDataPoint[];

}

/**
 * Converts an object of type 'FraudDetectorTrainingMetrics' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorTrainingMetrics(obj: FraudDetectorTrainingMetrics | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'auc': obj.auc,
    'metricDataPoints': obj.metricDataPoints?.map(y => toJson_FraudDetectorMetricDataPoint(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorVariableImportanceMetrics
 */
export interface FraudDetectorVariableImportanceMetrics {
  /**
   * @schema FraudDetectorVariableImportanceMetrics#LogitMetrics
   */
  readonly logitMetrics?: FraudDetectorLogitMetric[];

}

/**
 * Converts an object of type 'FraudDetectorVariableImportanceMetrics' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorVariableImportanceMetrics(obj: FraudDetectorVariableImportanceMetrics | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LogitMetrics': obj.logitMetrics?.map(y => toJson_FraudDetectorLogitMetric(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorFileValidationMessage
 */
export interface FraudDetectorFileValidationMessage {
  /**
   * @schema FraudDetectorFileValidationMessage#title
   */
  readonly title?: string;

  /**
   * @schema FraudDetectorFileValidationMessage#content
   */
  readonly content?: string;

  /**
   * @schema FraudDetectorFileValidationMessage#type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'FraudDetectorFileValidationMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorFileValidationMessage(obj: FraudDetectorFileValidationMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'title': obj.title,
    'content': obj.content,
    'type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorFieldValidationMessage
 */
export interface FraudDetectorFieldValidationMessage {
  /**
   * @schema FraudDetectorFieldValidationMessage#fieldName
   */
  readonly fieldName?: string;

  /**
   * @schema FraudDetectorFieldValidationMessage#identifier
   */
  readonly identifier?: string;

  /**
   * @schema FraudDetectorFieldValidationMessage#title
   */
  readonly title?: string;

  /**
   * @schema FraudDetectorFieldValidationMessage#content
   */
  readonly content?: string;

  /**
   * @schema FraudDetectorFieldValidationMessage#type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'FraudDetectorFieldValidationMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorFieldValidationMessage(obj: FraudDetectorFieldValidationMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'fieldName': obj.fieldName,
    'identifier': obj.identifier,
    'title': obj.title,
    'content': obj.content,
    'type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorMetricDataPoint
 */
export interface FraudDetectorMetricDataPoint {
  /**
   * @schema FraudDetectorMetricDataPoint#fpr
   */
  readonly fpr?: number;

  /**
   * @schema FraudDetectorMetricDataPoint#precision
   */
  readonly precision?: number;

  /**
   * @schema FraudDetectorMetricDataPoint#tpr
   */
  readonly tpr?: number;

  /**
   * @schema FraudDetectorMetricDataPoint#threshold
   */
  readonly threshold?: number;

}

/**
 * Converts an object of type 'FraudDetectorMetricDataPoint' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorMetricDataPoint(obj: FraudDetectorMetricDataPoint | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'fpr': obj.fpr,
    'precision': obj.precision,
    'tpr': obj.tpr,
    'threshold': obj.threshold,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FraudDetectorLogitMetric
 */
export interface FraudDetectorLogitMetric {
  /**
   * @schema FraudDetectorLogitMetric#variableName
   */
  readonly variableName: string;

  /**
   * @schema FraudDetectorLogitMetric#variableType
   */
  readonly variableType: string;

  /**
   * @schema FraudDetectorLogitMetric#variableImportance
   */
  readonly variableImportance: number;

}

/**
 * Converts an object of type 'FraudDetectorLogitMetric' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FraudDetectorLogitMetric(obj: FraudDetectorLogitMetric | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'variableName': obj.variableName,
    'variableType': obj.variableType,
    'variableImportance': obj.variableImportance,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
