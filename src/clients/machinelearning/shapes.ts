/**
 * @schema MachineLearningAddTagsInput
 */
export interface MachineLearningAddTagsInput {
  /**
   * @schema MachineLearningAddTagsInput#Tags
   */
  readonly tags?: MachineLearningTag[];

  /**
   * @schema MachineLearningAddTagsInput#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema MachineLearningAddTagsInput#ResourceType
   */
  readonly resourceType?: string;

}

/**
 * Converts an object of type 'MachineLearningAddTagsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningAddTagsInput(obj: MachineLearningAddTagsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': obj.tags?.map(y => toJson_MachineLearningTag(y)),
    'ResourceId': obj.resourceId,
    'ResourceType': obj.resourceType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningAddTagsOutput
 */
export interface MachineLearningAddTagsOutput {
  /**
   * @schema MachineLearningAddTagsOutput#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema MachineLearningAddTagsOutput#ResourceType
   */
  readonly resourceType?: string;

}

/**
 * Converts an object of type 'MachineLearningAddTagsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningAddTagsOutput(obj: MachineLearningAddTagsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceId': obj.resourceId,
    'ResourceType': obj.resourceType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningCreateBatchPredictionInput
 */
export interface MachineLearningCreateBatchPredictionInput {
  /**
   * @schema MachineLearningCreateBatchPredictionInput#BatchPredictionId
   */
  readonly batchPredictionId?: string;

  /**
   * @schema MachineLearningCreateBatchPredictionInput#BatchPredictionName
   */
  readonly batchPredictionName?: string;

  /**
   * @schema MachineLearningCreateBatchPredictionInput#MLModelId
   */
  readonly mlModelId?: string;

  /**
   * @schema MachineLearningCreateBatchPredictionInput#BatchPredictionDataSourceId
   */
  readonly batchPredictionDataSourceId?: string;

  /**
   * @schema MachineLearningCreateBatchPredictionInput#OutputUri
   */
  readonly outputUri?: string;

}

/**
 * Converts an object of type 'MachineLearningCreateBatchPredictionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningCreateBatchPredictionInput(obj: MachineLearningCreateBatchPredictionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BatchPredictionId': obj.batchPredictionId,
    'BatchPredictionName': obj.batchPredictionName,
    'MLModelId': obj.mlModelId,
    'BatchPredictionDataSourceId': obj.batchPredictionDataSourceId,
    'OutputUri': obj.outputUri,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningCreateBatchPredictionOutput
 */
export interface MachineLearningCreateBatchPredictionOutput {
  /**
   * @schema MachineLearningCreateBatchPredictionOutput#BatchPredictionId
   */
  readonly batchPredictionId?: string;

}

/**
 * Converts an object of type 'MachineLearningCreateBatchPredictionOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningCreateBatchPredictionOutput(obj: MachineLearningCreateBatchPredictionOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BatchPredictionId': obj.batchPredictionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningCreateDataSourceFromRdsInput
 */
export interface MachineLearningCreateDataSourceFromRdsInput {
  /**
   * @schema MachineLearningCreateDataSourceFromRdsInput#DataSourceId
   */
  readonly dataSourceId?: string;

  /**
   * @schema MachineLearningCreateDataSourceFromRdsInput#DataSourceName
   */
  readonly dataSourceName?: string;

  /**
   * @schema MachineLearningCreateDataSourceFromRdsInput#RDSData
   */
  readonly rdsData?: MachineLearningRdsDataSpec;

  /**
   * @schema MachineLearningCreateDataSourceFromRdsInput#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema MachineLearningCreateDataSourceFromRdsInput#ComputeStatistics
   */
  readonly computeStatistics?: boolean;

}

/**
 * Converts an object of type 'MachineLearningCreateDataSourceFromRdsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningCreateDataSourceFromRdsInput(obj: MachineLearningCreateDataSourceFromRdsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataSourceId': obj.dataSourceId,
    'DataSourceName': obj.dataSourceName,
    'RDSData': toJson_MachineLearningRdsDataSpec(obj.rdsData),
    'RoleARN': obj.roleArn,
    'ComputeStatistics': obj.computeStatistics,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningCreateDataSourceFromRdsOutput
 */
export interface MachineLearningCreateDataSourceFromRdsOutput {
  /**
   * @schema MachineLearningCreateDataSourceFromRdsOutput#DataSourceId
   */
  readonly dataSourceId?: string;

}

/**
 * Converts an object of type 'MachineLearningCreateDataSourceFromRdsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningCreateDataSourceFromRdsOutput(obj: MachineLearningCreateDataSourceFromRdsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataSourceId': obj.dataSourceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningCreateDataSourceFromRedshiftInput
 */
export interface MachineLearningCreateDataSourceFromRedshiftInput {
  /**
   * @schema MachineLearningCreateDataSourceFromRedshiftInput#DataSourceId
   */
  readonly dataSourceId?: string;

  /**
   * @schema MachineLearningCreateDataSourceFromRedshiftInput#DataSourceName
   */
  readonly dataSourceName?: string;

  /**
   * @schema MachineLearningCreateDataSourceFromRedshiftInput#DataSpec
   */
  readonly dataSpec?: MachineLearningRedshiftDataSpec;

  /**
   * @schema MachineLearningCreateDataSourceFromRedshiftInput#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema MachineLearningCreateDataSourceFromRedshiftInput#ComputeStatistics
   */
  readonly computeStatistics?: boolean;

}

/**
 * Converts an object of type 'MachineLearningCreateDataSourceFromRedshiftInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningCreateDataSourceFromRedshiftInput(obj: MachineLearningCreateDataSourceFromRedshiftInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataSourceId': obj.dataSourceId,
    'DataSourceName': obj.dataSourceName,
    'DataSpec': toJson_MachineLearningRedshiftDataSpec(obj.dataSpec),
    'RoleARN': obj.roleArn,
    'ComputeStatistics': obj.computeStatistics,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningCreateDataSourceFromRedshiftOutput
 */
export interface MachineLearningCreateDataSourceFromRedshiftOutput {
  /**
   * @schema MachineLearningCreateDataSourceFromRedshiftOutput#DataSourceId
   */
  readonly dataSourceId?: string;

}

/**
 * Converts an object of type 'MachineLearningCreateDataSourceFromRedshiftOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningCreateDataSourceFromRedshiftOutput(obj: MachineLearningCreateDataSourceFromRedshiftOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataSourceId': obj.dataSourceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningCreateDataSourceFromS3Input
 */
export interface MachineLearningCreateDataSourceFromS3Input {
  /**
   * @schema MachineLearningCreateDataSourceFromS3Input#DataSourceId
   */
  readonly dataSourceId?: string;

  /**
   * @schema MachineLearningCreateDataSourceFromS3Input#DataSourceName
   */
  readonly dataSourceName?: string;

  /**
   * @schema MachineLearningCreateDataSourceFromS3Input#DataSpec
   */
  readonly dataSpec?: MachineLearningS3DataSpec;

  /**
   * @schema MachineLearningCreateDataSourceFromS3Input#ComputeStatistics
   */
  readonly computeStatistics?: boolean;

}

/**
 * Converts an object of type 'MachineLearningCreateDataSourceFromS3Input' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningCreateDataSourceFromS3Input(obj: MachineLearningCreateDataSourceFromS3Input | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataSourceId': obj.dataSourceId,
    'DataSourceName': obj.dataSourceName,
    'DataSpec': toJson_MachineLearningS3DataSpec(obj.dataSpec),
    'ComputeStatistics': obj.computeStatistics,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningCreateDataSourceFromS3Output
 */
export interface MachineLearningCreateDataSourceFromS3Output {
  /**
   * @schema MachineLearningCreateDataSourceFromS3Output#DataSourceId
   */
  readonly dataSourceId?: string;

}

/**
 * Converts an object of type 'MachineLearningCreateDataSourceFromS3Output' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningCreateDataSourceFromS3Output(obj: MachineLearningCreateDataSourceFromS3Output | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataSourceId': obj.dataSourceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningCreateEvaluationInput
 */
export interface MachineLearningCreateEvaluationInput {
  /**
   * @schema MachineLearningCreateEvaluationInput#EvaluationId
   */
  readonly evaluationId?: string;

  /**
   * @schema MachineLearningCreateEvaluationInput#EvaluationName
   */
  readonly evaluationName?: string;

  /**
   * @schema MachineLearningCreateEvaluationInput#MLModelId
   */
  readonly mlModelId?: string;

  /**
   * @schema MachineLearningCreateEvaluationInput#EvaluationDataSourceId
   */
  readonly evaluationDataSourceId?: string;

}

/**
 * Converts an object of type 'MachineLearningCreateEvaluationInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningCreateEvaluationInput(obj: MachineLearningCreateEvaluationInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EvaluationId': obj.evaluationId,
    'EvaluationName': obj.evaluationName,
    'MLModelId': obj.mlModelId,
    'EvaluationDataSourceId': obj.evaluationDataSourceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningCreateEvaluationOutput
 */
export interface MachineLearningCreateEvaluationOutput {
  /**
   * @schema MachineLearningCreateEvaluationOutput#EvaluationId
   */
  readonly evaluationId?: string;

}

/**
 * Converts an object of type 'MachineLearningCreateEvaluationOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningCreateEvaluationOutput(obj: MachineLearningCreateEvaluationOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EvaluationId': obj.evaluationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningCreateMlModelInput
 */
export interface MachineLearningCreateMlModelInput {
  /**
   * @schema MachineLearningCreateMlModelInput#MLModelId
   */
  readonly mlModelId?: string;

  /**
   * @schema MachineLearningCreateMlModelInput#MLModelName
   */
  readonly mlModelName?: string;

  /**
   * @schema MachineLearningCreateMlModelInput#MLModelType
   */
  readonly mlModelType?: string;

  /**
   * @schema MachineLearningCreateMlModelInput#Parameters
   */
  readonly parameters?: { [key: string]: string };

  /**
   * @schema MachineLearningCreateMlModelInput#TrainingDataSourceId
   */
  readonly trainingDataSourceId?: string;

  /**
   * @schema MachineLearningCreateMlModelInput#Recipe
   */
  readonly recipe?: string;

  /**
   * @schema MachineLearningCreateMlModelInput#RecipeUri
   */
  readonly recipeUri?: string;

}

/**
 * Converts an object of type 'MachineLearningCreateMlModelInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningCreateMlModelInput(obj: MachineLearningCreateMlModelInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MLModelId': obj.mlModelId,
    'MLModelName': obj.mlModelName,
    'MLModelType': obj.mlModelType,
    'Parameters': ((obj.parameters) === undefined) ? undefined : (Object.entries(obj.parameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'TrainingDataSourceId': obj.trainingDataSourceId,
    'Recipe': obj.recipe,
    'RecipeUri': obj.recipeUri,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningCreateMlModelOutput
 */
export interface MachineLearningCreateMlModelOutput {
  /**
   * @schema MachineLearningCreateMlModelOutput#MLModelId
   */
  readonly mlModelId?: string;

}

/**
 * Converts an object of type 'MachineLearningCreateMlModelOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningCreateMlModelOutput(obj: MachineLearningCreateMlModelOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MLModelId': obj.mlModelId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningCreateRealtimeEndpointInput
 */
export interface MachineLearningCreateRealtimeEndpointInput {
  /**
   * @schema MachineLearningCreateRealtimeEndpointInput#MLModelId
   */
  readonly mlModelId?: string;

}

/**
 * Converts an object of type 'MachineLearningCreateRealtimeEndpointInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningCreateRealtimeEndpointInput(obj: MachineLearningCreateRealtimeEndpointInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MLModelId': obj.mlModelId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningCreateRealtimeEndpointOutput
 */
export interface MachineLearningCreateRealtimeEndpointOutput {
  /**
   * @schema MachineLearningCreateRealtimeEndpointOutput#MLModelId
   */
  readonly mlModelId?: string;

  /**
   * @schema MachineLearningCreateRealtimeEndpointOutput#RealtimeEndpointInfo
   */
  readonly realtimeEndpointInfo?: MachineLearningRealtimeEndpointInfo;

}

/**
 * Converts an object of type 'MachineLearningCreateRealtimeEndpointOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningCreateRealtimeEndpointOutput(obj: MachineLearningCreateRealtimeEndpointOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MLModelId': obj.mlModelId,
    'RealtimeEndpointInfo': toJson_MachineLearningRealtimeEndpointInfo(obj.realtimeEndpointInfo),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningDeleteBatchPredictionInput
 */
export interface MachineLearningDeleteBatchPredictionInput {
  /**
   * @schema MachineLearningDeleteBatchPredictionInput#BatchPredictionId
   */
  readonly batchPredictionId?: string;

}

/**
 * Converts an object of type 'MachineLearningDeleteBatchPredictionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningDeleteBatchPredictionInput(obj: MachineLearningDeleteBatchPredictionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BatchPredictionId': obj.batchPredictionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningDeleteBatchPredictionOutput
 */
export interface MachineLearningDeleteBatchPredictionOutput {
  /**
   * @schema MachineLearningDeleteBatchPredictionOutput#BatchPredictionId
   */
  readonly batchPredictionId?: string;

}

/**
 * Converts an object of type 'MachineLearningDeleteBatchPredictionOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningDeleteBatchPredictionOutput(obj: MachineLearningDeleteBatchPredictionOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BatchPredictionId': obj.batchPredictionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningDeleteDataSourceInput
 */
export interface MachineLearningDeleteDataSourceInput {
  /**
   * @schema MachineLearningDeleteDataSourceInput#DataSourceId
   */
  readonly dataSourceId?: string;

}

/**
 * Converts an object of type 'MachineLearningDeleteDataSourceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningDeleteDataSourceInput(obj: MachineLearningDeleteDataSourceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataSourceId': obj.dataSourceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningDeleteDataSourceOutput
 */
export interface MachineLearningDeleteDataSourceOutput {
  /**
   * @schema MachineLearningDeleteDataSourceOutput#DataSourceId
   */
  readonly dataSourceId?: string;

}

/**
 * Converts an object of type 'MachineLearningDeleteDataSourceOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningDeleteDataSourceOutput(obj: MachineLearningDeleteDataSourceOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataSourceId': obj.dataSourceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningDeleteEvaluationInput
 */
export interface MachineLearningDeleteEvaluationInput {
  /**
   * @schema MachineLearningDeleteEvaluationInput#EvaluationId
   */
  readonly evaluationId?: string;

}

/**
 * Converts an object of type 'MachineLearningDeleteEvaluationInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningDeleteEvaluationInput(obj: MachineLearningDeleteEvaluationInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EvaluationId': obj.evaluationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningDeleteEvaluationOutput
 */
export interface MachineLearningDeleteEvaluationOutput {
  /**
   * @schema MachineLearningDeleteEvaluationOutput#EvaluationId
   */
  readonly evaluationId?: string;

}

/**
 * Converts an object of type 'MachineLearningDeleteEvaluationOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningDeleteEvaluationOutput(obj: MachineLearningDeleteEvaluationOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EvaluationId': obj.evaluationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningDeleteMlModelInput
 */
export interface MachineLearningDeleteMlModelInput {
  /**
   * @schema MachineLearningDeleteMlModelInput#MLModelId
   */
  readonly mlModelId?: string;

}

/**
 * Converts an object of type 'MachineLearningDeleteMlModelInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningDeleteMlModelInput(obj: MachineLearningDeleteMlModelInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MLModelId': obj.mlModelId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningDeleteMlModelOutput
 */
export interface MachineLearningDeleteMlModelOutput {
  /**
   * @schema MachineLearningDeleteMlModelOutput#MLModelId
   */
  readonly mlModelId?: string;

}

/**
 * Converts an object of type 'MachineLearningDeleteMlModelOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningDeleteMlModelOutput(obj: MachineLearningDeleteMlModelOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MLModelId': obj.mlModelId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningDeleteRealtimeEndpointInput
 */
export interface MachineLearningDeleteRealtimeEndpointInput {
  /**
   * @schema MachineLearningDeleteRealtimeEndpointInput#MLModelId
   */
  readonly mlModelId?: string;

}

/**
 * Converts an object of type 'MachineLearningDeleteRealtimeEndpointInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningDeleteRealtimeEndpointInput(obj: MachineLearningDeleteRealtimeEndpointInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MLModelId': obj.mlModelId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningDeleteRealtimeEndpointOutput
 */
export interface MachineLearningDeleteRealtimeEndpointOutput {
  /**
   * @schema MachineLearningDeleteRealtimeEndpointOutput#MLModelId
   */
  readonly mlModelId?: string;

  /**
   * @schema MachineLearningDeleteRealtimeEndpointOutput#RealtimeEndpointInfo
   */
  readonly realtimeEndpointInfo?: MachineLearningRealtimeEndpointInfo;

}

/**
 * Converts an object of type 'MachineLearningDeleteRealtimeEndpointOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningDeleteRealtimeEndpointOutput(obj: MachineLearningDeleteRealtimeEndpointOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MLModelId': obj.mlModelId,
    'RealtimeEndpointInfo': toJson_MachineLearningRealtimeEndpointInfo(obj.realtimeEndpointInfo),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningDeleteTagsInput
 */
export interface MachineLearningDeleteTagsInput {
  /**
   * @schema MachineLearningDeleteTagsInput#TagKeys
   */
  readonly tagKeys?: string[];

  /**
   * @schema MachineLearningDeleteTagsInput#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema MachineLearningDeleteTagsInput#ResourceType
   */
  readonly resourceType?: string;

}

/**
 * Converts an object of type 'MachineLearningDeleteTagsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningDeleteTagsInput(obj: MachineLearningDeleteTagsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TagKeys': obj.tagKeys?.map(y => y),
    'ResourceId': obj.resourceId,
    'ResourceType': obj.resourceType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningDeleteTagsOutput
 */
export interface MachineLearningDeleteTagsOutput {
  /**
   * @schema MachineLearningDeleteTagsOutput#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema MachineLearningDeleteTagsOutput#ResourceType
   */
  readonly resourceType?: string;

}

/**
 * Converts an object of type 'MachineLearningDeleteTagsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningDeleteTagsOutput(obj: MachineLearningDeleteTagsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceId': obj.resourceId,
    'ResourceType': obj.resourceType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningDescribeBatchPredictionsInput
 */
export interface MachineLearningDescribeBatchPredictionsInput {
  /**
   * @schema MachineLearningDescribeBatchPredictionsInput#FilterVariable
   */
  readonly filterVariable?: string;

  /**
   * @schema MachineLearningDescribeBatchPredictionsInput#EQ
   */
  readonly eq?: string;

  /**
   * @schema MachineLearningDescribeBatchPredictionsInput#GT
   */
  readonly gt?: string;

  /**
   * @schema MachineLearningDescribeBatchPredictionsInput#LT
   */
  readonly lt?: string;

  /**
   * @schema MachineLearningDescribeBatchPredictionsInput#GE
   */
  readonly ge?: string;

  /**
   * @schema MachineLearningDescribeBatchPredictionsInput#LE
   */
  readonly le?: string;

  /**
   * @schema MachineLearningDescribeBatchPredictionsInput#NE
   */
  readonly ne?: string;

  /**
   * @schema MachineLearningDescribeBatchPredictionsInput#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema MachineLearningDescribeBatchPredictionsInput#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema MachineLearningDescribeBatchPredictionsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema MachineLearningDescribeBatchPredictionsInput#Limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'MachineLearningDescribeBatchPredictionsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningDescribeBatchPredictionsInput(obj: MachineLearningDescribeBatchPredictionsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FilterVariable': obj.filterVariable,
    'EQ': obj.eq,
    'GT': obj.gt,
    'LT': obj.lt,
    'GE': obj.ge,
    'LE': obj.le,
    'NE': obj.ne,
    'Prefix': obj.prefix,
    'SortOrder': obj.sortOrder,
    'NextToken': obj.nextToken,
    'Limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningDescribeBatchPredictionsOutput
 */
export interface MachineLearningDescribeBatchPredictionsOutput {
  /**
   * @schema MachineLearningDescribeBatchPredictionsOutput#Results
   */
  readonly results?: MachineLearningBatchPrediction[];

  /**
   * @schema MachineLearningDescribeBatchPredictionsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MachineLearningDescribeBatchPredictionsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningDescribeBatchPredictionsOutput(obj: MachineLearningDescribeBatchPredictionsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Results': obj.results?.map(y => toJson_MachineLearningBatchPrediction(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningDescribeDataSourcesInput
 */
export interface MachineLearningDescribeDataSourcesInput {
  /**
   * @schema MachineLearningDescribeDataSourcesInput#FilterVariable
   */
  readonly filterVariable?: string;

  /**
   * @schema MachineLearningDescribeDataSourcesInput#EQ
   */
  readonly eq?: string;

  /**
   * @schema MachineLearningDescribeDataSourcesInput#GT
   */
  readonly gt?: string;

  /**
   * @schema MachineLearningDescribeDataSourcesInput#LT
   */
  readonly lt?: string;

  /**
   * @schema MachineLearningDescribeDataSourcesInput#GE
   */
  readonly ge?: string;

  /**
   * @schema MachineLearningDescribeDataSourcesInput#LE
   */
  readonly le?: string;

  /**
   * @schema MachineLearningDescribeDataSourcesInput#NE
   */
  readonly ne?: string;

  /**
   * @schema MachineLearningDescribeDataSourcesInput#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema MachineLearningDescribeDataSourcesInput#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema MachineLearningDescribeDataSourcesInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema MachineLearningDescribeDataSourcesInput#Limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'MachineLearningDescribeDataSourcesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningDescribeDataSourcesInput(obj: MachineLearningDescribeDataSourcesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FilterVariable': obj.filterVariable,
    'EQ': obj.eq,
    'GT': obj.gt,
    'LT': obj.lt,
    'GE': obj.ge,
    'LE': obj.le,
    'NE': obj.ne,
    'Prefix': obj.prefix,
    'SortOrder': obj.sortOrder,
    'NextToken': obj.nextToken,
    'Limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningDescribeDataSourcesOutput
 */
export interface MachineLearningDescribeDataSourcesOutput {
  /**
   * @schema MachineLearningDescribeDataSourcesOutput#Results
   */
  readonly results?: MachineLearningDataSource[];

  /**
   * @schema MachineLearningDescribeDataSourcesOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MachineLearningDescribeDataSourcesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningDescribeDataSourcesOutput(obj: MachineLearningDescribeDataSourcesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Results': obj.results?.map(y => toJson_MachineLearningDataSource(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningDescribeEvaluationsInput
 */
export interface MachineLearningDescribeEvaluationsInput {
  /**
   * @schema MachineLearningDescribeEvaluationsInput#FilterVariable
   */
  readonly filterVariable?: string;

  /**
   * @schema MachineLearningDescribeEvaluationsInput#EQ
   */
  readonly eq?: string;

  /**
   * @schema MachineLearningDescribeEvaluationsInput#GT
   */
  readonly gt?: string;

  /**
   * @schema MachineLearningDescribeEvaluationsInput#LT
   */
  readonly lt?: string;

  /**
   * @schema MachineLearningDescribeEvaluationsInput#GE
   */
  readonly ge?: string;

  /**
   * @schema MachineLearningDescribeEvaluationsInput#LE
   */
  readonly le?: string;

  /**
   * @schema MachineLearningDescribeEvaluationsInput#NE
   */
  readonly ne?: string;

  /**
   * @schema MachineLearningDescribeEvaluationsInput#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema MachineLearningDescribeEvaluationsInput#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema MachineLearningDescribeEvaluationsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema MachineLearningDescribeEvaluationsInput#Limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'MachineLearningDescribeEvaluationsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningDescribeEvaluationsInput(obj: MachineLearningDescribeEvaluationsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FilterVariable': obj.filterVariable,
    'EQ': obj.eq,
    'GT': obj.gt,
    'LT': obj.lt,
    'GE': obj.ge,
    'LE': obj.le,
    'NE': obj.ne,
    'Prefix': obj.prefix,
    'SortOrder': obj.sortOrder,
    'NextToken': obj.nextToken,
    'Limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningDescribeEvaluationsOutput
 */
export interface MachineLearningDescribeEvaluationsOutput {
  /**
   * @schema MachineLearningDescribeEvaluationsOutput#Results
   */
  readonly results?: MachineLearningEvaluation[];

  /**
   * @schema MachineLearningDescribeEvaluationsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MachineLearningDescribeEvaluationsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningDescribeEvaluationsOutput(obj: MachineLearningDescribeEvaluationsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Results': obj.results?.map(y => toJson_MachineLearningEvaluation(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningDescribeMlModelsInput
 */
export interface MachineLearningDescribeMlModelsInput {
  /**
   * @schema MachineLearningDescribeMlModelsInput#FilterVariable
   */
  readonly filterVariable?: string;

  /**
   * @schema MachineLearningDescribeMlModelsInput#EQ
   */
  readonly eq?: string;

  /**
   * @schema MachineLearningDescribeMlModelsInput#GT
   */
  readonly gt?: string;

  /**
   * @schema MachineLearningDescribeMlModelsInput#LT
   */
  readonly lt?: string;

  /**
   * @schema MachineLearningDescribeMlModelsInput#GE
   */
  readonly ge?: string;

  /**
   * @schema MachineLearningDescribeMlModelsInput#LE
   */
  readonly le?: string;

  /**
   * @schema MachineLearningDescribeMlModelsInput#NE
   */
  readonly ne?: string;

  /**
   * @schema MachineLearningDescribeMlModelsInput#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema MachineLearningDescribeMlModelsInput#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema MachineLearningDescribeMlModelsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema MachineLearningDescribeMlModelsInput#Limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'MachineLearningDescribeMlModelsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningDescribeMlModelsInput(obj: MachineLearningDescribeMlModelsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FilterVariable': obj.filterVariable,
    'EQ': obj.eq,
    'GT': obj.gt,
    'LT': obj.lt,
    'GE': obj.ge,
    'LE': obj.le,
    'NE': obj.ne,
    'Prefix': obj.prefix,
    'SortOrder': obj.sortOrder,
    'NextToken': obj.nextToken,
    'Limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningDescribeMlModelsOutput
 */
export interface MachineLearningDescribeMlModelsOutput {
  /**
   * @schema MachineLearningDescribeMlModelsOutput#Results
   */
  readonly results?: MachineLearningMlModel[];

  /**
   * @schema MachineLearningDescribeMlModelsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MachineLearningDescribeMlModelsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningDescribeMlModelsOutput(obj: MachineLearningDescribeMlModelsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Results': obj.results?.map(y => toJson_MachineLearningMlModel(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningDescribeTagsInput
 */
export interface MachineLearningDescribeTagsInput {
  /**
   * @schema MachineLearningDescribeTagsInput#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema MachineLearningDescribeTagsInput#ResourceType
   */
  readonly resourceType?: string;

}

/**
 * Converts an object of type 'MachineLearningDescribeTagsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningDescribeTagsInput(obj: MachineLearningDescribeTagsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceId': obj.resourceId,
    'ResourceType': obj.resourceType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningDescribeTagsOutput
 */
export interface MachineLearningDescribeTagsOutput {
  /**
   * @schema MachineLearningDescribeTagsOutput#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema MachineLearningDescribeTagsOutput#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema MachineLearningDescribeTagsOutput#Tags
   */
  readonly tags?: MachineLearningTag[];

}

/**
 * Converts an object of type 'MachineLearningDescribeTagsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningDescribeTagsOutput(obj: MachineLearningDescribeTagsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceId': obj.resourceId,
    'ResourceType': obj.resourceType,
    'Tags': obj.tags?.map(y => toJson_MachineLearningTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningGetBatchPredictionInput
 */
export interface MachineLearningGetBatchPredictionInput {
  /**
   * @schema MachineLearningGetBatchPredictionInput#BatchPredictionId
   */
  readonly batchPredictionId?: string;

}

/**
 * Converts an object of type 'MachineLearningGetBatchPredictionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningGetBatchPredictionInput(obj: MachineLearningGetBatchPredictionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BatchPredictionId': obj.batchPredictionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningGetBatchPredictionOutput
 */
export interface MachineLearningGetBatchPredictionOutput {
  /**
   * @schema MachineLearningGetBatchPredictionOutput#BatchPredictionId
   */
  readonly batchPredictionId?: string;

  /**
   * @schema MachineLearningGetBatchPredictionOutput#MLModelId
   */
  readonly mlModelId?: string;

  /**
   * @schema MachineLearningGetBatchPredictionOutput#BatchPredictionDataSourceId
   */
  readonly batchPredictionDataSourceId?: string;

  /**
   * @schema MachineLearningGetBatchPredictionOutput#InputDataLocationS3
   */
  readonly inputDataLocationS3?: string;

  /**
   * @schema MachineLearningGetBatchPredictionOutput#CreatedByIamUser
   */
  readonly createdByIamUser?: string;

  /**
   * @schema MachineLearningGetBatchPredictionOutput#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema MachineLearningGetBatchPredictionOutput#LastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema MachineLearningGetBatchPredictionOutput#Name
   */
  readonly name?: string;

  /**
   * @schema MachineLearningGetBatchPredictionOutput#Status
   */
  readonly status?: string;

  /**
   * @schema MachineLearningGetBatchPredictionOutput#OutputUri
   */
  readonly outputUri?: string;

  /**
   * @schema MachineLearningGetBatchPredictionOutput#LogUri
   */
  readonly logUri?: string;

  /**
   * @schema MachineLearningGetBatchPredictionOutput#Message
   */
  readonly message?: string;

  /**
   * @schema MachineLearningGetBatchPredictionOutput#ComputeTime
   */
  readonly computeTime?: number;

  /**
   * @schema MachineLearningGetBatchPredictionOutput#FinishedAt
   */
  readonly finishedAt?: string;

  /**
   * @schema MachineLearningGetBatchPredictionOutput#StartedAt
   */
  readonly startedAt?: string;

  /**
   * @schema MachineLearningGetBatchPredictionOutput#TotalRecordCount
   */
  readonly totalRecordCount?: number;

  /**
   * @schema MachineLearningGetBatchPredictionOutput#InvalidRecordCount
   */
  readonly invalidRecordCount?: number;

}

/**
 * Converts an object of type 'MachineLearningGetBatchPredictionOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningGetBatchPredictionOutput(obj: MachineLearningGetBatchPredictionOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BatchPredictionId': obj.batchPredictionId,
    'MLModelId': obj.mlModelId,
    'BatchPredictionDataSourceId': obj.batchPredictionDataSourceId,
    'InputDataLocationS3': obj.inputDataLocationS3,
    'CreatedByIamUser': obj.createdByIamUser,
    'CreatedAt': obj.createdAt,
    'LastUpdatedAt': obj.lastUpdatedAt,
    'Name': obj.name,
    'Status': obj.status,
    'OutputUri': obj.outputUri,
    'LogUri': obj.logUri,
    'Message': obj.message,
    'ComputeTime': obj.computeTime,
    'FinishedAt': obj.finishedAt,
    'StartedAt': obj.startedAt,
    'TotalRecordCount': obj.totalRecordCount,
    'InvalidRecordCount': obj.invalidRecordCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningGetDataSourceInput
 */
export interface MachineLearningGetDataSourceInput {
  /**
   * @schema MachineLearningGetDataSourceInput#DataSourceId
   */
  readonly dataSourceId?: string;

  /**
   * @schema MachineLearningGetDataSourceInput#Verbose
   */
  readonly verbose?: boolean;

}

/**
 * Converts an object of type 'MachineLearningGetDataSourceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningGetDataSourceInput(obj: MachineLearningGetDataSourceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataSourceId': obj.dataSourceId,
    'Verbose': obj.verbose,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningGetDataSourceOutput
 */
export interface MachineLearningGetDataSourceOutput {
  /**
   * @schema MachineLearningGetDataSourceOutput#DataSourceId
   */
  readonly dataSourceId?: string;

  /**
   * @schema MachineLearningGetDataSourceOutput#DataLocationS3
   */
  readonly dataLocationS3?: string;

  /**
   * @schema MachineLearningGetDataSourceOutput#DataRearrangement
   */
  readonly dataRearrangement?: string;

  /**
   * @schema MachineLearningGetDataSourceOutput#CreatedByIamUser
   */
  readonly createdByIamUser?: string;

  /**
   * @schema MachineLearningGetDataSourceOutput#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema MachineLearningGetDataSourceOutput#LastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema MachineLearningGetDataSourceOutput#DataSizeInBytes
   */
  readonly dataSizeInBytes?: number;

  /**
   * @schema MachineLearningGetDataSourceOutput#NumberOfFiles
   */
  readonly numberOfFiles?: number;

  /**
   * @schema MachineLearningGetDataSourceOutput#Name
   */
  readonly name?: string;

  /**
   * @schema MachineLearningGetDataSourceOutput#Status
   */
  readonly status?: string;

  /**
   * @schema MachineLearningGetDataSourceOutput#LogUri
   */
  readonly logUri?: string;

  /**
   * @schema MachineLearningGetDataSourceOutput#Message
   */
  readonly message?: string;

  /**
   * @schema MachineLearningGetDataSourceOutput#RedshiftMetadata
   */
  readonly redshiftMetadata?: MachineLearningRedshiftMetadata;

  /**
   * @schema MachineLearningGetDataSourceOutput#RDSMetadata
   */
  readonly rdsMetadata?: MachineLearningRdsMetadata;

  /**
   * @schema MachineLearningGetDataSourceOutput#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema MachineLearningGetDataSourceOutput#ComputeStatistics
   */
  readonly computeStatistics?: boolean;

  /**
   * @schema MachineLearningGetDataSourceOutput#ComputeTime
   */
  readonly computeTime?: number;

  /**
   * @schema MachineLearningGetDataSourceOutput#FinishedAt
   */
  readonly finishedAt?: string;

  /**
   * @schema MachineLearningGetDataSourceOutput#StartedAt
   */
  readonly startedAt?: string;

  /**
   * @schema MachineLearningGetDataSourceOutput#DataSourceSchema
   */
  readonly dataSourceSchema?: string;

}

/**
 * Converts an object of type 'MachineLearningGetDataSourceOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningGetDataSourceOutput(obj: MachineLearningGetDataSourceOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataSourceId': obj.dataSourceId,
    'DataLocationS3': obj.dataLocationS3,
    'DataRearrangement': obj.dataRearrangement,
    'CreatedByIamUser': obj.createdByIamUser,
    'CreatedAt': obj.createdAt,
    'LastUpdatedAt': obj.lastUpdatedAt,
    'DataSizeInBytes': obj.dataSizeInBytes,
    'NumberOfFiles': obj.numberOfFiles,
    'Name': obj.name,
    'Status': obj.status,
    'LogUri': obj.logUri,
    'Message': obj.message,
    'RedshiftMetadata': toJson_MachineLearningRedshiftMetadata(obj.redshiftMetadata),
    'RDSMetadata': toJson_MachineLearningRdsMetadata(obj.rdsMetadata),
    'RoleARN': obj.roleArn,
    'ComputeStatistics': obj.computeStatistics,
    'ComputeTime': obj.computeTime,
    'FinishedAt': obj.finishedAt,
    'StartedAt': obj.startedAt,
    'DataSourceSchema': obj.dataSourceSchema,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningGetEvaluationInput
 */
export interface MachineLearningGetEvaluationInput {
  /**
   * @schema MachineLearningGetEvaluationInput#EvaluationId
   */
  readonly evaluationId?: string;

}

/**
 * Converts an object of type 'MachineLearningGetEvaluationInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningGetEvaluationInput(obj: MachineLearningGetEvaluationInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EvaluationId': obj.evaluationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningGetEvaluationOutput
 */
export interface MachineLearningGetEvaluationOutput {
  /**
   * @schema MachineLearningGetEvaluationOutput#EvaluationId
   */
  readonly evaluationId?: string;

  /**
   * @schema MachineLearningGetEvaluationOutput#MLModelId
   */
  readonly mlModelId?: string;

  /**
   * @schema MachineLearningGetEvaluationOutput#EvaluationDataSourceId
   */
  readonly evaluationDataSourceId?: string;

  /**
   * @schema MachineLearningGetEvaluationOutput#InputDataLocationS3
   */
  readonly inputDataLocationS3?: string;

  /**
   * @schema MachineLearningGetEvaluationOutput#CreatedByIamUser
   */
  readonly createdByIamUser?: string;

  /**
   * @schema MachineLearningGetEvaluationOutput#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema MachineLearningGetEvaluationOutput#LastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema MachineLearningGetEvaluationOutput#Name
   */
  readonly name?: string;

  /**
   * @schema MachineLearningGetEvaluationOutput#Status
   */
  readonly status?: string;

  /**
   * @schema MachineLearningGetEvaluationOutput#PerformanceMetrics
   */
  readonly performanceMetrics?: MachineLearningPerformanceMetrics;

  /**
   * @schema MachineLearningGetEvaluationOutput#LogUri
   */
  readonly logUri?: string;

  /**
   * @schema MachineLearningGetEvaluationOutput#Message
   */
  readonly message?: string;

  /**
   * @schema MachineLearningGetEvaluationOutput#ComputeTime
   */
  readonly computeTime?: number;

  /**
   * @schema MachineLearningGetEvaluationOutput#FinishedAt
   */
  readonly finishedAt?: string;

  /**
   * @schema MachineLearningGetEvaluationOutput#StartedAt
   */
  readonly startedAt?: string;

}

/**
 * Converts an object of type 'MachineLearningGetEvaluationOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningGetEvaluationOutput(obj: MachineLearningGetEvaluationOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EvaluationId': obj.evaluationId,
    'MLModelId': obj.mlModelId,
    'EvaluationDataSourceId': obj.evaluationDataSourceId,
    'InputDataLocationS3': obj.inputDataLocationS3,
    'CreatedByIamUser': obj.createdByIamUser,
    'CreatedAt': obj.createdAt,
    'LastUpdatedAt': obj.lastUpdatedAt,
    'Name': obj.name,
    'Status': obj.status,
    'PerformanceMetrics': toJson_MachineLearningPerformanceMetrics(obj.performanceMetrics),
    'LogUri': obj.logUri,
    'Message': obj.message,
    'ComputeTime': obj.computeTime,
    'FinishedAt': obj.finishedAt,
    'StartedAt': obj.startedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningGetMlModelInput
 */
export interface MachineLearningGetMlModelInput {
  /**
   * @schema MachineLearningGetMlModelInput#MLModelId
   */
  readonly mlModelId?: string;

  /**
   * @schema MachineLearningGetMlModelInput#Verbose
   */
  readonly verbose?: boolean;

}

/**
 * Converts an object of type 'MachineLearningGetMlModelInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningGetMlModelInput(obj: MachineLearningGetMlModelInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MLModelId': obj.mlModelId,
    'Verbose': obj.verbose,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningGetMlModelOutput
 */
export interface MachineLearningGetMlModelOutput {
  /**
   * @schema MachineLearningGetMlModelOutput#MLModelId
   */
  readonly mlModelId?: string;

  /**
   * @schema MachineLearningGetMlModelOutput#TrainingDataSourceId
   */
  readonly trainingDataSourceId?: string;

  /**
   * @schema MachineLearningGetMlModelOutput#CreatedByIamUser
   */
  readonly createdByIamUser?: string;

  /**
   * @schema MachineLearningGetMlModelOutput#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema MachineLearningGetMlModelOutput#LastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema MachineLearningGetMlModelOutput#Name
   */
  readonly name?: string;

  /**
   * @schema MachineLearningGetMlModelOutput#Status
   */
  readonly status?: string;

  /**
   * @schema MachineLearningGetMlModelOutput#SizeInBytes
   */
  readonly sizeInBytes?: number;

  /**
   * @schema MachineLearningGetMlModelOutput#EndpointInfo
   */
  readonly endpointInfo?: MachineLearningRealtimeEndpointInfo;

  /**
   * @schema MachineLearningGetMlModelOutput#TrainingParameters
   */
  readonly trainingParameters?: { [key: string]: string };

  /**
   * @schema MachineLearningGetMlModelOutput#InputDataLocationS3
   */
  readonly inputDataLocationS3?: string;

  /**
   * @schema MachineLearningGetMlModelOutput#MLModelType
   */
  readonly mlModelType?: string;

  /**
   * @schema MachineLearningGetMlModelOutput#ScoreThreshold
   */
  readonly scoreThreshold?: number;

  /**
   * @schema MachineLearningGetMlModelOutput#ScoreThresholdLastUpdatedAt
   */
  readonly scoreThresholdLastUpdatedAt?: string;

  /**
   * @schema MachineLearningGetMlModelOutput#LogUri
   */
  readonly logUri?: string;

  /**
   * @schema MachineLearningGetMlModelOutput#Message
   */
  readonly message?: string;

  /**
   * @schema MachineLearningGetMlModelOutput#ComputeTime
   */
  readonly computeTime?: number;

  /**
   * @schema MachineLearningGetMlModelOutput#FinishedAt
   */
  readonly finishedAt?: string;

  /**
   * @schema MachineLearningGetMlModelOutput#StartedAt
   */
  readonly startedAt?: string;

  /**
   * @schema MachineLearningGetMlModelOutput#Recipe
   */
  readonly recipe?: string;

  /**
   * @schema MachineLearningGetMlModelOutput#Schema
   */
  readonly schema?: string;

}

/**
 * Converts an object of type 'MachineLearningGetMlModelOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningGetMlModelOutput(obj: MachineLearningGetMlModelOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MLModelId': obj.mlModelId,
    'TrainingDataSourceId': obj.trainingDataSourceId,
    'CreatedByIamUser': obj.createdByIamUser,
    'CreatedAt': obj.createdAt,
    'LastUpdatedAt': obj.lastUpdatedAt,
    'Name': obj.name,
    'Status': obj.status,
    'SizeInBytes': obj.sizeInBytes,
    'EndpointInfo': toJson_MachineLearningRealtimeEndpointInfo(obj.endpointInfo),
    'TrainingParameters': ((obj.trainingParameters) === undefined) ? undefined : (Object.entries(obj.trainingParameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'InputDataLocationS3': obj.inputDataLocationS3,
    'MLModelType': obj.mlModelType,
    'ScoreThreshold': obj.scoreThreshold,
    'ScoreThresholdLastUpdatedAt': obj.scoreThresholdLastUpdatedAt,
    'LogUri': obj.logUri,
    'Message': obj.message,
    'ComputeTime': obj.computeTime,
    'FinishedAt': obj.finishedAt,
    'StartedAt': obj.startedAt,
    'Recipe': obj.recipe,
    'Schema': obj.schema,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningPredictInput
 */
export interface MachineLearningPredictInput {
  /**
   * @schema MachineLearningPredictInput#MLModelId
   */
  readonly mlModelId?: string;

  /**
   * @schema MachineLearningPredictInput#Record
   */
  readonly record?: { [key: string]: string };

  /**
   * @schema MachineLearningPredictInput#PredictEndpoint
   */
  readonly predictEndpoint?: string;

}

/**
 * Converts an object of type 'MachineLearningPredictInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningPredictInput(obj: MachineLearningPredictInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MLModelId': obj.mlModelId,
    'Record': ((obj.record) === undefined) ? undefined : (Object.entries(obj.record).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'PredictEndpoint': obj.predictEndpoint,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningPredictOutput
 */
export interface MachineLearningPredictOutput {
  /**
   * @schema MachineLearningPredictOutput#Prediction
   */
  readonly prediction?: MachineLearningPrediction;

}

/**
 * Converts an object of type 'MachineLearningPredictOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningPredictOutput(obj: MachineLearningPredictOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Prediction': toJson_MachineLearningPrediction(obj.prediction),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningUpdateBatchPredictionInput
 */
export interface MachineLearningUpdateBatchPredictionInput {
  /**
   * @schema MachineLearningUpdateBatchPredictionInput#BatchPredictionId
   */
  readonly batchPredictionId?: string;

  /**
   * @schema MachineLearningUpdateBatchPredictionInput#BatchPredictionName
   */
  readonly batchPredictionName?: string;

}

/**
 * Converts an object of type 'MachineLearningUpdateBatchPredictionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningUpdateBatchPredictionInput(obj: MachineLearningUpdateBatchPredictionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BatchPredictionId': obj.batchPredictionId,
    'BatchPredictionName': obj.batchPredictionName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningUpdateBatchPredictionOutput
 */
export interface MachineLearningUpdateBatchPredictionOutput {
  /**
   * @schema MachineLearningUpdateBatchPredictionOutput#BatchPredictionId
   */
  readonly batchPredictionId?: string;

}

/**
 * Converts an object of type 'MachineLearningUpdateBatchPredictionOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningUpdateBatchPredictionOutput(obj: MachineLearningUpdateBatchPredictionOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BatchPredictionId': obj.batchPredictionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningUpdateDataSourceInput
 */
export interface MachineLearningUpdateDataSourceInput {
  /**
   * @schema MachineLearningUpdateDataSourceInput#DataSourceId
   */
  readonly dataSourceId?: string;

  /**
   * @schema MachineLearningUpdateDataSourceInput#DataSourceName
   */
  readonly dataSourceName?: string;

}

/**
 * Converts an object of type 'MachineLearningUpdateDataSourceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningUpdateDataSourceInput(obj: MachineLearningUpdateDataSourceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataSourceId': obj.dataSourceId,
    'DataSourceName': obj.dataSourceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningUpdateDataSourceOutput
 */
export interface MachineLearningUpdateDataSourceOutput {
  /**
   * @schema MachineLearningUpdateDataSourceOutput#DataSourceId
   */
  readonly dataSourceId?: string;

}

/**
 * Converts an object of type 'MachineLearningUpdateDataSourceOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningUpdateDataSourceOutput(obj: MachineLearningUpdateDataSourceOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataSourceId': obj.dataSourceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningUpdateEvaluationInput
 */
export interface MachineLearningUpdateEvaluationInput {
  /**
   * @schema MachineLearningUpdateEvaluationInput#EvaluationId
   */
  readonly evaluationId?: string;

  /**
   * @schema MachineLearningUpdateEvaluationInput#EvaluationName
   */
  readonly evaluationName?: string;

}

/**
 * Converts an object of type 'MachineLearningUpdateEvaluationInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningUpdateEvaluationInput(obj: MachineLearningUpdateEvaluationInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EvaluationId': obj.evaluationId,
    'EvaluationName': obj.evaluationName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningUpdateEvaluationOutput
 */
export interface MachineLearningUpdateEvaluationOutput {
  /**
   * @schema MachineLearningUpdateEvaluationOutput#EvaluationId
   */
  readonly evaluationId?: string;

}

/**
 * Converts an object of type 'MachineLearningUpdateEvaluationOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningUpdateEvaluationOutput(obj: MachineLearningUpdateEvaluationOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EvaluationId': obj.evaluationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningUpdateMlModelInput
 */
export interface MachineLearningUpdateMlModelInput {
  /**
   * @schema MachineLearningUpdateMlModelInput#MLModelId
   */
  readonly mlModelId?: string;

  /**
   * @schema MachineLearningUpdateMlModelInput#MLModelName
   */
  readonly mlModelName?: string;

  /**
   * @schema MachineLearningUpdateMlModelInput#ScoreThreshold
   */
  readonly scoreThreshold?: number;

}

/**
 * Converts an object of type 'MachineLearningUpdateMlModelInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningUpdateMlModelInput(obj: MachineLearningUpdateMlModelInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MLModelId': obj.mlModelId,
    'MLModelName': obj.mlModelName,
    'ScoreThreshold': obj.scoreThreshold,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningUpdateMlModelOutput
 */
export interface MachineLearningUpdateMlModelOutput {
  /**
   * @schema MachineLearningUpdateMlModelOutput#MLModelId
   */
  readonly mlModelId?: string;

}

/**
 * Converts an object of type 'MachineLearningUpdateMlModelOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningUpdateMlModelOutput(obj: MachineLearningUpdateMlModelOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MLModelId': obj.mlModelId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningTag
 */
export interface MachineLearningTag {
  /**
   * @schema MachineLearningTag#Key
   */
  readonly key?: string;

  /**
   * @schema MachineLearningTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'MachineLearningTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningTag(obj: MachineLearningTag | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningRdsDataSpec
 */
export interface MachineLearningRdsDataSpec {
  /**
   * @schema MachineLearningRdsDataSpec#DatabaseInformation
   */
  readonly databaseInformation?: MachineLearningRdsDatabase;

  /**
   * @schema MachineLearningRdsDataSpec#SelectSqlQuery
   */
  readonly selectSqlQuery?: string;

  /**
   * @schema MachineLearningRdsDataSpec#DatabaseCredentials
   */
  readonly databaseCredentials?: MachineLearningRdsDatabaseCredentials;

  /**
   * @schema MachineLearningRdsDataSpec#S3StagingLocation
   */
  readonly s3StagingLocation?: string;

  /**
   * @schema MachineLearningRdsDataSpec#DataRearrangement
   */
  readonly dataRearrangement?: string;

  /**
   * @schema MachineLearningRdsDataSpec#DataSchema
   */
  readonly dataSchema?: string;

  /**
   * @schema MachineLearningRdsDataSpec#DataSchemaUri
   */
  readonly dataSchemaUri?: string;

  /**
   * @schema MachineLearningRdsDataSpec#ResourceRole
   */
  readonly resourceRole?: string;

  /**
   * @schema MachineLearningRdsDataSpec#ServiceRole
   */
  readonly serviceRole?: string;

  /**
   * @schema MachineLearningRdsDataSpec#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema MachineLearningRdsDataSpec#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

}

/**
 * Converts an object of type 'MachineLearningRdsDataSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningRdsDataSpec(obj: MachineLearningRdsDataSpec | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DatabaseInformation': toJson_MachineLearningRdsDatabase(obj.databaseInformation),
    'SelectSqlQuery': obj.selectSqlQuery,
    'DatabaseCredentials': toJson_MachineLearningRdsDatabaseCredentials(obj.databaseCredentials),
    'S3StagingLocation': obj.s3StagingLocation,
    'DataRearrangement': obj.dataRearrangement,
    'DataSchema': obj.dataSchema,
    'DataSchemaUri': obj.dataSchemaUri,
    'ResourceRole': obj.resourceRole,
    'ServiceRole': obj.serviceRole,
    'SubnetId': obj.subnetId,
    'SecurityGroupIds': obj.securityGroupIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningRedshiftDataSpec
 */
export interface MachineLearningRedshiftDataSpec {
  /**
   * @schema MachineLearningRedshiftDataSpec#DatabaseInformation
   */
  readonly databaseInformation?: MachineLearningRedshiftDatabase;

  /**
   * @schema MachineLearningRedshiftDataSpec#SelectSqlQuery
   */
  readonly selectSqlQuery?: string;

  /**
   * @schema MachineLearningRedshiftDataSpec#DatabaseCredentials
   */
  readonly databaseCredentials?: MachineLearningRedshiftDatabaseCredentials;

  /**
   * @schema MachineLearningRedshiftDataSpec#S3StagingLocation
   */
  readonly s3StagingLocation?: string;

  /**
   * @schema MachineLearningRedshiftDataSpec#DataRearrangement
   */
  readonly dataRearrangement?: string;

  /**
   * @schema MachineLearningRedshiftDataSpec#DataSchema
   */
  readonly dataSchema?: string;

  /**
   * @schema MachineLearningRedshiftDataSpec#DataSchemaUri
   */
  readonly dataSchemaUri?: string;

}

/**
 * Converts an object of type 'MachineLearningRedshiftDataSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningRedshiftDataSpec(obj: MachineLearningRedshiftDataSpec | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DatabaseInformation': toJson_MachineLearningRedshiftDatabase(obj.databaseInformation),
    'SelectSqlQuery': obj.selectSqlQuery,
    'DatabaseCredentials': toJson_MachineLearningRedshiftDatabaseCredentials(obj.databaseCredentials),
    'S3StagingLocation': obj.s3StagingLocation,
    'DataRearrangement': obj.dataRearrangement,
    'DataSchema': obj.dataSchema,
    'DataSchemaUri': obj.dataSchemaUri,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningS3DataSpec
 */
export interface MachineLearningS3DataSpec {
  /**
   * @schema MachineLearningS3DataSpec#DataLocationS3
   */
  readonly dataLocationS3?: string;

  /**
   * @schema MachineLearningS3DataSpec#DataRearrangement
   */
  readonly dataRearrangement?: string;

  /**
   * @schema MachineLearningS3DataSpec#DataSchema
   */
  readonly dataSchema?: string;

  /**
   * @schema MachineLearningS3DataSpec#DataSchemaLocationS3
   */
  readonly dataSchemaLocationS3?: string;

}

/**
 * Converts an object of type 'MachineLearningS3DataSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningS3DataSpec(obj: MachineLearningS3DataSpec | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataLocationS3': obj.dataLocationS3,
    'DataRearrangement': obj.dataRearrangement,
    'DataSchema': obj.dataSchema,
    'DataSchemaLocationS3': obj.dataSchemaLocationS3,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningRealtimeEndpointInfo
 */
export interface MachineLearningRealtimeEndpointInfo {
  /**
   * @schema MachineLearningRealtimeEndpointInfo#PeakRequestsPerSecond
   */
  readonly peakRequestsPerSecond?: number;

  /**
   * @schema MachineLearningRealtimeEndpointInfo#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema MachineLearningRealtimeEndpointInfo#EndpointUrl
   */
  readonly endpointUrl?: string;

  /**
   * @schema MachineLearningRealtimeEndpointInfo#EndpointStatus
   */
  readonly endpointStatus?: string;

}

/**
 * Converts an object of type 'MachineLearningRealtimeEndpointInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningRealtimeEndpointInfo(obj: MachineLearningRealtimeEndpointInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PeakRequestsPerSecond': obj.peakRequestsPerSecond,
    'CreatedAt': obj.createdAt,
    'EndpointUrl': obj.endpointUrl,
    'EndpointStatus': obj.endpointStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningBatchPrediction
 */
export interface MachineLearningBatchPrediction {
  /**
   * @schema MachineLearningBatchPrediction#BatchPredictionId
   */
  readonly batchPredictionId?: string;

  /**
   * @schema MachineLearningBatchPrediction#MLModelId
   */
  readonly mlModelId?: string;

  /**
   * @schema MachineLearningBatchPrediction#BatchPredictionDataSourceId
   */
  readonly batchPredictionDataSourceId?: string;

  /**
   * @schema MachineLearningBatchPrediction#InputDataLocationS3
   */
  readonly inputDataLocationS3?: string;

  /**
   * @schema MachineLearningBatchPrediction#CreatedByIamUser
   */
  readonly createdByIamUser?: string;

  /**
   * @schema MachineLearningBatchPrediction#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema MachineLearningBatchPrediction#LastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema MachineLearningBatchPrediction#Name
   */
  readonly name?: string;

  /**
   * @schema MachineLearningBatchPrediction#Status
   */
  readonly status?: string;

  /**
   * @schema MachineLearningBatchPrediction#OutputUri
   */
  readonly outputUri?: string;

  /**
   * @schema MachineLearningBatchPrediction#Message
   */
  readonly message?: string;

  /**
   * @schema MachineLearningBatchPrediction#ComputeTime
   */
  readonly computeTime?: number;

  /**
   * @schema MachineLearningBatchPrediction#FinishedAt
   */
  readonly finishedAt?: string;

  /**
   * @schema MachineLearningBatchPrediction#StartedAt
   */
  readonly startedAt?: string;

  /**
   * @schema MachineLearningBatchPrediction#TotalRecordCount
   */
  readonly totalRecordCount?: number;

  /**
   * @schema MachineLearningBatchPrediction#InvalidRecordCount
   */
  readonly invalidRecordCount?: number;

}

/**
 * Converts an object of type 'MachineLearningBatchPrediction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningBatchPrediction(obj: MachineLearningBatchPrediction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BatchPredictionId': obj.batchPredictionId,
    'MLModelId': obj.mlModelId,
    'BatchPredictionDataSourceId': obj.batchPredictionDataSourceId,
    'InputDataLocationS3': obj.inputDataLocationS3,
    'CreatedByIamUser': obj.createdByIamUser,
    'CreatedAt': obj.createdAt,
    'LastUpdatedAt': obj.lastUpdatedAt,
    'Name': obj.name,
    'Status': obj.status,
    'OutputUri': obj.outputUri,
    'Message': obj.message,
    'ComputeTime': obj.computeTime,
    'FinishedAt': obj.finishedAt,
    'StartedAt': obj.startedAt,
    'TotalRecordCount': obj.totalRecordCount,
    'InvalidRecordCount': obj.invalidRecordCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningDataSource
 */
export interface MachineLearningDataSource {
  /**
   * @schema MachineLearningDataSource#DataSourceId
   */
  readonly dataSourceId?: string;

  /**
   * @schema MachineLearningDataSource#DataLocationS3
   */
  readonly dataLocationS3?: string;

  /**
   * @schema MachineLearningDataSource#DataRearrangement
   */
  readonly dataRearrangement?: string;

  /**
   * @schema MachineLearningDataSource#CreatedByIamUser
   */
  readonly createdByIamUser?: string;

  /**
   * @schema MachineLearningDataSource#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema MachineLearningDataSource#LastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema MachineLearningDataSource#DataSizeInBytes
   */
  readonly dataSizeInBytes?: number;

  /**
   * @schema MachineLearningDataSource#NumberOfFiles
   */
  readonly numberOfFiles?: number;

  /**
   * @schema MachineLearningDataSource#Name
   */
  readonly name?: string;

  /**
   * @schema MachineLearningDataSource#Status
   */
  readonly status?: string;

  /**
   * @schema MachineLearningDataSource#Message
   */
  readonly message?: string;

  /**
   * @schema MachineLearningDataSource#RedshiftMetadata
   */
  readonly redshiftMetadata?: MachineLearningRedshiftMetadata;

  /**
   * @schema MachineLearningDataSource#RDSMetadata
   */
  readonly rdsMetadata?: MachineLearningRdsMetadata;

  /**
   * @schema MachineLearningDataSource#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema MachineLearningDataSource#ComputeStatistics
   */
  readonly computeStatistics?: boolean;

  /**
   * @schema MachineLearningDataSource#ComputeTime
   */
  readonly computeTime?: number;

  /**
   * @schema MachineLearningDataSource#FinishedAt
   */
  readonly finishedAt?: string;

  /**
   * @schema MachineLearningDataSource#StartedAt
   */
  readonly startedAt?: string;

}

/**
 * Converts an object of type 'MachineLearningDataSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningDataSource(obj: MachineLearningDataSource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataSourceId': obj.dataSourceId,
    'DataLocationS3': obj.dataLocationS3,
    'DataRearrangement': obj.dataRearrangement,
    'CreatedByIamUser': obj.createdByIamUser,
    'CreatedAt': obj.createdAt,
    'LastUpdatedAt': obj.lastUpdatedAt,
    'DataSizeInBytes': obj.dataSizeInBytes,
    'NumberOfFiles': obj.numberOfFiles,
    'Name': obj.name,
    'Status': obj.status,
    'Message': obj.message,
    'RedshiftMetadata': toJson_MachineLearningRedshiftMetadata(obj.redshiftMetadata),
    'RDSMetadata': toJson_MachineLearningRdsMetadata(obj.rdsMetadata),
    'RoleARN': obj.roleArn,
    'ComputeStatistics': obj.computeStatistics,
    'ComputeTime': obj.computeTime,
    'FinishedAt': obj.finishedAt,
    'StartedAt': obj.startedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningEvaluation
 */
export interface MachineLearningEvaluation {
  /**
   * @schema MachineLearningEvaluation#EvaluationId
   */
  readonly evaluationId?: string;

  /**
   * @schema MachineLearningEvaluation#MLModelId
   */
  readonly mlModelId?: string;

  /**
   * @schema MachineLearningEvaluation#EvaluationDataSourceId
   */
  readonly evaluationDataSourceId?: string;

  /**
   * @schema MachineLearningEvaluation#InputDataLocationS3
   */
  readonly inputDataLocationS3?: string;

  /**
   * @schema MachineLearningEvaluation#CreatedByIamUser
   */
  readonly createdByIamUser?: string;

  /**
   * @schema MachineLearningEvaluation#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema MachineLearningEvaluation#LastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema MachineLearningEvaluation#Name
   */
  readonly name?: string;

  /**
   * @schema MachineLearningEvaluation#Status
   */
  readonly status?: string;

  /**
   * @schema MachineLearningEvaluation#PerformanceMetrics
   */
  readonly performanceMetrics?: MachineLearningPerformanceMetrics;

  /**
   * @schema MachineLearningEvaluation#Message
   */
  readonly message?: string;

  /**
   * @schema MachineLearningEvaluation#ComputeTime
   */
  readonly computeTime?: number;

  /**
   * @schema MachineLearningEvaluation#FinishedAt
   */
  readonly finishedAt?: string;

  /**
   * @schema MachineLearningEvaluation#StartedAt
   */
  readonly startedAt?: string;

}

/**
 * Converts an object of type 'MachineLearningEvaluation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningEvaluation(obj: MachineLearningEvaluation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EvaluationId': obj.evaluationId,
    'MLModelId': obj.mlModelId,
    'EvaluationDataSourceId': obj.evaluationDataSourceId,
    'InputDataLocationS3': obj.inputDataLocationS3,
    'CreatedByIamUser': obj.createdByIamUser,
    'CreatedAt': obj.createdAt,
    'LastUpdatedAt': obj.lastUpdatedAt,
    'Name': obj.name,
    'Status': obj.status,
    'PerformanceMetrics': toJson_MachineLearningPerformanceMetrics(obj.performanceMetrics),
    'Message': obj.message,
    'ComputeTime': obj.computeTime,
    'FinishedAt': obj.finishedAt,
    'StartedAt': obj.startedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningMlModel
 */
export interface MachineLearningMlModel {
  /**
   * @schema MachineLearningMlModel#MLModelId
   */
  readonly mlModelId?: string;

  /**
   * @schema MachineLearningMlModel#TrainingDataSourceId
   */
  readonly trainingDataSourceId?: string;

  /**
   * @schema MachineLearningMlModel#CreatedByIamUser
   */
  readonly createdByIamUser?: string;

  /**
   * @schema MachineLearningMlModel#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema MachineLearningMlModel#LastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema MachineLearningMlModel#Name
   */
  readonly name?: string;

  /**
   * @schema MachineLearningMlModel#Status
   */
  readonly status?: string;

  /**
   * @schema MachineLearningMlModel#SizeInBytes
   */
  readonly sizeInBytes?: number;

  /**
   * @schema MachineLearningMlModel#EndpointInfo
   */
  readonly endpointInfo?: MachineLearningRealtimeEndpointInfo;

  /**
   * @schema MachineLearningMlModel#TrainingParameters
   */
  readonly trainingParameters?: { [key: string]: string };

  /**
   * @schema MachineLearningMlModel#InputDataLocationS3
   */
  readonly inputDataLocationS3?: string;

  /**
   * @schema MachineLearningMlModel#Algorithm
   */
  readonly algorithm?: string;

  /**
   * @schema MachineLearningMlModel#MLModelType
   */
  readonly mlModelType?: string;

  /**
   * @schema MachineLearningMlModel#ScoreThreshold
   */
  readonly scoreThreshold?: number;

  /**
   * @schema MachineLearningMlModel#ScoreThresholdLastUpdatedAt
   */
  readonly scoreThresholdLastUpdatedAt?: string;

  /**
   * @schema MachineLearningMlModel#Message
   */
  readonly message?: string;

  /**
   * @schema MachineLearningMlModel#ComputeTime
   */
  readonly computeTime?: number;

  /**
   * @schema MachineLearningMlModel#FinishedAt
   */
  readonly finishedAt?: string;

  /**
   * @schema MachineLearningMlModel#StartedAt
   */
  readonly startedAt?: string;

}

/**
 * Converts an object of type 'MachineLearningMlModel' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningMlModel(obj: MachineLearningMlModel | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MLModelId': obj.mlModelId,
    'TrainingDataSourceId': obj.trainingDataSourceId,
    'CreatedByIamUser': obj.createdByIamUser,
    'CreatedAt': obj.createdAt,
    'LastUpdatedAt': obj.lastUpdatedAt,
    'Name': obj.name,
    'Status': obj.status,
    'SizeInBytes': obj.sizeInBytes,
    'EndpointInfo': toJson_MachineLearningRealtimeEndpointInfo(obj.endpointInfo),
    'TrainingParameters': ((obj.trainingParameters) === undefined) ? undefined : (Object.entries(obj.trainingParameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'InputDataLocationS3': obj.inputDataLocationS3,
    'Algorithm': obj.algorithm,
    'MLModelType': obj.mlModelType,
    'ScoreThreshold': obj.scoreThreshold,
    'ScoreThresholdLastUpdatedAt': obj.scoreThresholdLastUpdatedAt,
    'Message': obj.message,
    'ComputeTime': obj.computeTime,
    'FinishedAt': obj.finishedAt,
    'StartedAt': obj.startedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningRedshiftMetadata
 */
export interface MachineLearningRedshiftMetadata {
  /**
   * @schema MachineLearningRedshiftMetadata#RedshiftDatabase
   */
  readonly redshiftDatabase?: MachineLearningRedshiftDatabase;

  /**
   * @schema MachineLearningRedshiftMetadata#DatabaseUserName
   */
  readonly databaseUserName?: string;

  /**
   * @schema MachineLearningRedshiftMetadata#SelectSqlQuery
   */
  readonly selectSqlQuery?: string;

}

/**
 * Converts an object of type 'MachineLearningRedshiftMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningRedshiftMetadata(obj: MachineLearningRedshiftMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RedshiftDatabase': toJson_MachineLearningRedshiftDatabase(obj.redshiftDatabase),
    'DatabaseUserName': obj.databaseUserName,
    'SelectSqlQuery': obj.selectSqlQuery,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningRdsMetadata
 */
export interface MachineLearningRdsMetadata {
  /**
   * @schema MachineLearningRdsMetadata#Database
   */
  readonly database?: MachineLearningRdsDatabase;

  /**
   * @schema MachineLearningRdsMetadata#DatabaseUserName
   */
  readonly databaseUserName?: string;

  /**
   * @schema MachineLearningRdsMetadata#SelectSqlQuery
   */
  readonly selectSqlQuery?: string;

  /**
   * @schema MachineLearningRdsMetadata#ResourceRole
   */
  readonly resourceRole?: string;

  /**
   * @schema MachineLearningRdsMetadata#ServiceRole
   */
  readonly serviceRole?: string;

  /**
   * @schema MachineLearningRdsMetadata#DataPipelineId
   */
  readonly dataPipelineId?: string;

}

/**
 * Converts an object of type 'MachineLearningRdsMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningRdsMetadata(obj: MachineLearningRdsMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Database': toJson_MachineLearningRdsDatabase(obj.database),
    'DatabaseUserName': obj.databaseUserName,
    'SelectSqlQuery': obj.selectSqlQuery,
    'ResourceRole': obj.resourceRole,
    'ServiceRole': obj.serviceRole,
    'DataPipelineId': obj.dataPipelineId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningPerformanceMetrics
 */
export interface MachineLearningPerformanceMetrics {
  /**
   * @schema MachineLearningPerformanceMetrics#Properties
   */
  readonly properties?: { [key: string]: string };

}

/**
 * Converts an object of type 'MachineLearningPerformanceMetrics' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningPerformanceMetrics(obj: MachineLearningPerformanceMetrics | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Properties': ((obj.properties) === undefined) ? undefined : (Object.entries(obj.properties).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningPrediction
 */
export interface MachineLearningPrediction {
  /**
   * @schema MachineLearningPrediction#predictedLabel
   */
  readonly predictedLabel?: string;

  /**
   * @schema MachineLearningPrediction#predictedValue
   */
  readonly predictedValue?: number;

  /**
   * @schema MachineLearningPrediction#predictedScores
   */
  readonly predictedScores?: { [key: string]: number };

  /**
   * @schema MachineLearningPrediction#details
   */
  readonly details?: { [key: string]: string };

}

/**
 * Converts an object of type 'MachineLearningPrediction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningPrediction(obj: MachineLearningPrediction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'predictedLabel': obj.predictedLabel,
    'predictedValue': obj.predictedValue,
    'predictedScores': ((obj.predictedScores) === undefined) ? undefined : (Object.entries(obj.predictedScores).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'details': ((obj.details) === undefined) ? undefined : (Object.entries(obj.details).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningRdsDatabase
 */
export interface MachineLearningRdsDatabase {
  /**
   * @schema MachineLearningRdsDatabase#InstanceIdentifier
   */
  readonly instanceIdentifier?: string;

  /**
   * @schema MachineLearningRdsDatabase#DatabaseName
   */
  readonly databaseName?: string;

}

/**
 * Converts an object of type 'MachineLearningRdsDatabase' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningRdsDatabase(obj: MachineLearningRdsDatabase | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceIdentifier': obj.instanceIdentifier,
    'DatabaseName': obj.databaseName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningRdsDatabaseCredentials
 */
export interface MachineLearningRdsDatabaseCredentials {
  /**
   * @schema MachineLearningRdsDatabaseCredentials#Username
   */
  readonly username?: string;

  /**
   * @schema MachineLearningRdsDatabaseCredentials#Password
   */
  readonly password?: string;

}

/**
 * Converts an object of type 'MachineLearningRdsDatabaseCredentials' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningRdsDatabaseCredentials(obj: MachineLearningRdsDatabaseCredentials | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Username': obj.username,
    'Password': obj.password,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningRedshiftDatabase
 */
export interface MachineLearningRedshiftDatabase {
  /**
   * @schema MachineLearningRedshiftDatabase#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema MachineLearningRedshiftDatabase#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

}

/**
 * Converts an object of type 'MachineLearningRedshiftDatabase' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningRedshiftDatabase(obj: MachineLearningRedshiftDatabase | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DatabaseName': obj.databaseName,
    'ClusterIdentifier': obj.clusterIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MachineLearningRedshiftDatabaseCredentials
 */
export interface MachineLearningRedshiftDatabaseCredentials {
  /**
   * @schema MachineLearningRedshiftDatabaseCredentials#Username
   */
  readonly username?: string;

  /**
   * @schema MachineLearningRedshiftDatabaseCredentials#Password
   */
  readonly password?: string;

}

/**
 * Converts an object of type 'MachineLearningRedshiftDatabaseCredentials' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MachineLearningRedshiftDatabaseCredentials(obj: MachineLearningRedshiftDatabaseCredentials | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Username': obj.username,
    'Password': obj.password,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
