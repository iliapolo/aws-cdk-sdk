/**
 * @schema LookoutEquipmentCreateDatasetRequest
 */
export interface LookoutEquipmentCreateDatasetRequest {
  /**
   * @schema LookoutEquipmentCreateDatasetRequest#DatasetName
   */
  readonly datasetName?: string;

  /**
   * @schema LookoutEquipmentCreateDatasetRequest#DatasetSchema
   */
  readonly datasetSchema?: LookoutEquipmentDatasetSchema;

  /**
   * @schema LookoutEquipmentCreateDatasetRequest#ServerSideKmsKeyId
   */
  readonly serverSideKmsKeyId?: string;

  /**
   * @schema LookoutEquipmentCreateDatasetRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema LookoutEquipmentCreateDatasetRequest#Tags
   */
  readonly tags?: LookoutEquipmentTag[];

}

/**
 * Converts an object of type 'LookoutEquipmentCreateDatasetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutEquipmentCreateDatasetRequest(obj: LookoutEquipmentCreateDatasetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DatasetName': obj.datasetName,
    'DatasetSchema': toJson_LookoutEquipmentDatasetSchema(obj.datasetSchema),
    'ServerSideKmsKeyId': obj.serverSideKmsKeyId,
    'ClientToken': obj.clientToken,
    'Tags': obj.tags?.map(y => toJson_LookoutEquipmentTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutEquipmentCreateDatasetResponse
 */
export interface LookoutEquipmentCreateDatasetResponse {
  /**
   * @schema LookoutEquipmentCreateDatasetResponse#DatasetName
   */
  readonly datasetName?: string;

  /**
   * @schema LookoutEquipmentCreateDatasetResponse#DatasetArn
   */
  readonly datasetArn?: string;

  /**
   * @schema LookoutEquipmentCreateDatasetResponse#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'LookoutEquipmentCreateDatasetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutEquipmentCreateDatasetResponse(obj: LookoutEquipmentCreateDatasetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DatasetName': obj.datasetName,
    'DatasetArn': obj.datasetArn,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutEquipmentCreateInferenceSchedulerRequest
 */
export interface LookoutEquipmentCreateInferenceSchedulerRequest {
  /**
   * @schema LookoutEquipmentCreateInferenceSchedulerRequest#ModelName
   */
  readonly modelName?: string;

  /**
   * @schema LookoutEquipmentCreateInferenceSchedulerRequest#InferenceSchedulerName
   */
  readonly inferenceSchedulerName?: string;

  /**
   * @schema LookoutEquipmentCreateInferenceSchedulerRequest#DataDelayOffsetInMinutes
   */
  readonly dataDelayOffsetInMinutes?: number;

  /**
   * @schema LookoutEquipmentCreateInferenceSchedulerRequest#DataUploadFrequency
   */
  readonly dataUploadFrequency?: string;

  /**
   * @schema LookoutEquipmentCreateInferenceSchedulerRequest#DataInputConfiguration
   */
  readonly dataInputConfiguration?: LookoutEquipmentInferenceInputConfiguration;

  /**
   * @schema LookoutEquipmentCreateInferenceSchedulerRequest#DataOutputConfiguration
   */
  readonly dataOutputConfiguration?: LookoutEquipmentInferenceOutputConfiguration;

  /**
   * @schema LookoutEquipmentCreateInferenceSchedulerRequest#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema LookoutEquipmentCreateInferenceSchedulerRequest#ServerSideKmsKeyId
   */
  readonly serverSideKmsKeyId?: string;

  /**
   * @schema LookoutEquipmentCreateInferenceSchedulerRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema LookoutEquipmentCreateInferenceSchedulerRequest#Tags
   */
  readonly tags?: LookoutEquipmentTag[];

}

/**
 * Converts an object of type 'LookoutEquipmentCreateInferenceSchedulerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutEquipmentCreateInferenceSchedulerRequest(obj: LookoutEquipmentCreateInferenceSchedulerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ModelName': obj.modelName,
    'InferenceSchedulerName': obj.inferenceSchedulerName,
    'DataDelayOffsetInMinutes': obj.dataDelayOffsetInMinutes,
    'DataUploadFrequency': obj.dataUploadFrequency,
    'DataInputConfiguration': toJson_LookoutEquipmentInferenceInputConfiguration(obj.dataInputConfiguration),
    'DataOutputConfiguration': toJson_LookoutEquipmentInferenceOutputConfiguration(obj.dataOutputConfiguration),
    'RoleArn': obj.roleArn,
    'ServerSideKmsKeyId': obj.serverSideKmsKeyId,
    'ClientToken': obj.clientToken,
    'Tags': obj.tags?.map(y => toJson_LookoutEquipmentTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutEquipmentCreateInferenceSchedulerResponse
 */
export interface LookoutEquipmentCreateInferenceSchedulerResponse {
  /**
   * @schema LookoutEquipmentCreateInferenceSchedulerResponse#InferenceSchedulerArn
   */
  readonly inferenceSchedulerArn?: string;

  /**
   * @schema LookoutEquipmentCreateInferenceSchedulerResponse#InferenceSchedulerName
   */
  readonly inferenceSchedulerName?: string;

  /**
   * @schema LookoutEquipmentCreateInferenceSchedulerResponse#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'LookoutEquipmentCreateInferenceSchedulerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutEquipmentCreateInferenceSchedulerResponse(obj: LookoutEquipmentCreateInferenceSchedulerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InferenceSchedulerArn': obj.inferenceSchedulerArn,
    'InferenceSchedulerName': obj.inferenceSchedulerName,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutEquipmentCreateModelRequest
 */
export interface LookoutEquipmentCreateModelRequest {
  /**
   * @schema LookoutEquipmentCreateModelRequest#ModelName
   */
  readonly modelName?: string;

  /**
   * @schema LookoutEquipmentCreateModelRequest#DatasetName
   */
  readonly datasetName?: string;

  /**
   * @schema LookoutEquipmentCreateModelRequest#DatasetSchema
   */
  readonly datasetSchema?: LookoutEquipmentDatasetSchema;

  /**
   * @schema LookoutEquipmentCreateModelRequest#LabelsInputConfiguration
   */
  readonly labelsInputConfiguration?: LookoutEquipmentLabelsInputConfiguration;

  /**
   * @schema LookoutEquipmentCreateModelRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema LookoutEquipmentCreateModelRequest#TrainingDataStartTime
   */
  readonly trainingDataStartTime?: string;

  /**
   * @schema LookoutEquipmentCreateModelRequest#TrainingDataEndTime
   */
  readonly trainingDataEndTime?: string;

  /**
   * @schema LookoutEquipmentCreateModelRequest#EvaluationDataStartTime
   */
  readonly evaluationDataStartTime?: string;

  /**
   * @schema LookoutEquipmentCreateModelRequest#EvaluationDataEndTime
   */
  readonly evaluationDataEndTime?: string;

  /**
   * @schema LookoutEquipmentCreateModelRequest#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema LookoutEquipmentCreateModelRequest#DataPreProcessingConfiguration
   */
  readonly dataPreProcessingConfiguration?: LookoutEquipmentDataPreProcessingConfiguration;

  /**
   * @schema LookoutEquipmentCreateModelRequest#ServerSideKmsKeyId
   */
  readonly serverSideKmsKeyId?: string;

  /**
   * @schema LookoutEquipmentCreateModelRequest#Tags
   */
  readonly tags?: LookoutEquipmentTag[];

}

/**
 * Converts an object of type 'LookoutEquipmentCreateModelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutEquipmentCreateModelRequest(obj: LookoutEquipmentCreateModelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ModelName': obj.modelName,
    'DatasetName': obj.datasetName,
    'DatasetSchema': toJson_LookoutEquipmentDatasetSchema(obj.datasetSchema),
    'LabelsInputConfiguration': toJson_LookoutEquipmentLabelsInputConfiguration(obj.labelsInputConfiguration),
    'ClientToken': obj.clientToken,
    'TrainingDataStartTime': obj.trainingDataStartTime,
    'TrainingDataEndTime': obj.trainingDataEndTime,
    'EvaluationDataStartTime': obj.evaluationDataStartTime,
    'EvaluationDataEndTime': obj.evaluationDataEndTime,
    'RoleArn': obj.roleArn,
    'DataPreProcessingConfiguration': toJson_LookoutEquipmentDataPreProcessingConfiguration(obj.dataPreProcessingConfiguration),
    'ServerSideKmsKeyId': obj.serverSideKmsKeyId,
    'Tags': obj.tags?.map(y => toJson_LookoutEquipmentTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutEquipmentCreateModelResponse
 */
export interface LookoutEquipmentCreateModelResponse {
  /**
   * @schema LookoutEquipmentCreateModelResponse#ModelArn
   */
  readonly modelArn?: string;

  /**
   * @schema LookoutEquipmentCreateModelResponse#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'LookoutEquipmentCreateModelResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutEquipmentCreateModelResponse(obj: LookoutEquipmentCreateModelResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ModelArn': obj.modelArn,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutEquipmentDeleteDatasetRequest
 */
export interface LookoutEquipmentDeleteDatasetRequest {
  /**
   * @schema LookoutEquipmentDeleteDatasetRequest#DatasetName
   */
  readonly datasetName?: string;

}

/**
 * Converts an object of type 'LookoutEquipmentDeleteDatasetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutEquipmentDeleteDatasetRequest(obj: LookoutEquipmentDeleteDatasetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DatasetName': obj.datasetName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutEquipmentDeleteInferenceSchedulerRequest
 */
export interface LookoutEquipmentDeleteInferenceSchedulerRequest {
  /**
   * @schema LookoutEquipmentDeleteInferenceSchedulerRequest#InferenceSchedulerName
   */
  readonly inferenceSchedulerName?: string;

}

/**
 * Converts an object of type 'LookoutEquipmentDeleteInferenceSchedulerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutEquipmentDeleteInferenceSchedulerRequest(obj: LookoutEquipmentDeleteInferenceSchedulerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InferenceSchedulerName': obj.inferenceSchedulerName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutEquipmentDeleteModelRequest
 */
export interface LookoutEquipmentDeleteModelRequest {
  /**
   * @schema LookoutEquipmentDeleteModelRequest#ModelName
   */
  readonly modelName?: string;

}

/**
 * Converts an object of type 'LookoutEquipmentDeleteModelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutEquipmentDeleteModelRequest(obj: LookoutEquipmentDeleteModelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ModelName': obj.modelName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutEquipmentDescribeDataIngestionJobRequest
 */
export interface LookoutEquipmentDescribeDataIngestionJobRequest {
  /**
   * @schema LookoutEquipmentDescribeDataIngestionJobRequest#JobId
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'LookoutEquipmentDescribeDataIngestionJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutEquipmentDescribeDataIngestionJobRequest(obj: LookoutEquipmentDescribeDataIngestionJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutEquipmentDescribeDataIngestionJobResponse
 */
export interface LookoutEquipmentDescribeDataIngestionJobResponse {
  /**
   * @schema LookoutEquipmentDescribeDataIngestionJobResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema LookoutEquipmentDescribeDataIngestionJobResponse#DatasetArn
   */
  readonly datasetArn?: string;

  /**
   * @schema LookoutEquipmentDescribeDataIngestionJobResponse#IngestionInputConfiguration
   */
  readonly ingestionInputConfiguration?: LookoutEquipmentIngestionInputConfiguration;

  /**
   * @schema LookoutEquipmentDescribeDataIngestionJobResponse#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema LookoutEquipmentDescribeDataIngestionJobResponse#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema LookoutEquipmentDescribeDataIngestionJobResponse#Status
   */
  readonly status?: string;

  /**
   * @schema LookoutEquipmentDescribeDataIngestionJobResponse#FailedReason
   */
  readonly failedReason?: string;

}

/**
 * Converts an object of type 'LookoutEquipmentDescribeDataIngestionJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutEquipmentDescribeDataIngestionJobResponse(obj: LookoutEquipmentDescribeDataIngestionJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'DatasetArn': obj.datasetArn,
    'IngestionInputConfiguration': toJson_LookoutEquipmentIngestionInputConfiguration(obj.ingestionInputConfiguration),
    'RoleArn': obj.roleArn,
    'CreatedAt': obj.createdAt,
    'Status': obj.status,
    'FailedReason': obj.failedReason,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutEquipmentDescribeDatasetRequest
 */
export interface LookoutEquipmentDescribeDatasetRequest {
  /**
   * @schema LookoutEquipmentDescribeDatasetRequest#DatasetName
   */
  readonly datasetName?: string;

}

/**
 * Converts an object of type 'LookoutEquipmentDescribeDatasetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutEquipmentDescribeDatasetRequest(obj: LookoutEquipmentDescribeDatasetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DatasetName': obj.datasetName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutEquipmentDescribeDatasetResponse
 */
export interface LookoutEquipmentDescribeDatasetResponse {
  /**
   * @schema LookoutEquipmentDescribeDatasetResponse#DatasetName
   */
  readonly datasetName?: string;

  /**
   * @schema LookoutEquipmentDescribeDatasetResponse#DatasetArn
   */
  readonly datasetArn?: string;

  /**
   * @schema LookoutEquipmentDescribeDatasetResponse#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema LookoutEquipmentDescribeDatasetResponse#LastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema LookoutEquipmentDescribeDatasetResponse#Status
   */
  readonly status?: string;

  /**
   * @schema LookoutEquipmentDescribeDatasetResponse#Schema
   */
  readonly schema?: string;

  /**
   * @schema LookoutEquipmentDescribeDatasetResponse#ServerSideKmsKeyId
   */
  readonly serverSideKmsKeyId?: string;

  /**
   * @schema LookoutEquipmentDescribeDatasetResponse#IngestionInputConfiguration
   */
  readonly ingestionInputConfiguration?: LookoutEquipmentIngestionInputConfiguration;

}

/**
 * Converts an object of type 'LookoutEquipmentDescribeDatasetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutEquipmentDescribeDatasetResponse(obj: LookoutEquipmentDescribeDatasetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DatasetName': obj.datasetName,
    'DatasetArn': obj.datasetArn,
    'CreatedAt': obj.createdAt,
    'LastUpdatedAt': obj.lastUpdatedAt,
    'Status': obj.status,
    'Schema': obj.schema,
    'ServerSideKmsKeyId': obj.serverSideKmsKeyId,
    'IngestionInputConfiguration': toJson_LookoutEquipmentIngestionInputConfiguration(obj.ingestionInputConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutEquipmentDescribeInferenceSchedulerRequest
 */
export interface LookoutEquipmentDescribeInferenceSchedulerRequest {
  /**
   * @schema LookoutEquipmentDescribeInferenceSchedulerRequest#InferenceSchedulerName
   */
  readonly inferenceSchedulerName?: string;

}

/**
 * Converts an object of type 'LookoutEquipmentDescribeInferenceSchedulerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutEquipmentDescribeInferenceSchedulerRequest(obj: LookoutEquipmentDescribeInferenceSchedulerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InferenceSchedulerName': obj.inferenceSchedulerName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutEquipmentDescribeInferenceSchedulerResponse
 */
export interface LookoutEquipmentDescribeInferenceSchedulerResponse {
  /**
   * @schema LookoutEquipmentDescribeInferenceSchedulerResponse#ModelArn
   */
  readonly modelArn?: string;

  /**
   * @schema LookoutEquipmentDescribeInferenceSchedulerResponse#ModelName
   */
  readonly modelName?: string;

  /**
   * @schema LookoutEquipmentDescribeInferenceSchedulerResponse#InferenceSchedulerName
   */
  readonly inferenceSchedulerName?: string;

  /**
   * @schema LookoutEquipmentDescribeInferenceSchedulerResponse#InferenceSchedulerArn
   */
  readonly inferenceSchedulerArn?: string;

  /**
   * @schema LookoutEquipmentDescribeInferenceSchedulerResponse#Status
   */
  readonly status?: string;

  /**
   * @schema LookoutEquipmentDescribeInferenceSchedulerResponse#DataDelayOffsetInMinutes
   */
  readonly dataDelayOffsetInMinutes?: number;

  /**
   * @schema LookoutEquipmentDescribeInferenceSchedulerResponse#DataUploadFrequency
   */
  readonly dataUploadFrequency?: string;

  /**
   * @schema LookoutEquipmentDescribeInferenceSchedulerResponse#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema LookoutEquipmentDescribeInferenceSchedulerResponse#UpdatedAt
   */
  readonly updatedAt?: string;

  /**
   * @schema LookoutEquipmentDescribeInferenceSchedulerResponse#DataInputConfiguration
   */
  readonly dataInputConfiguration?: LookoutEquipmentInferenceInputConfiguration;

  /**
   * @schema LookoutEquipmentDescribeInferenceSchedulerResponse#DataOutputConfiguration
   */
  readonly dataOutputConfiguration?: LookoutEquipmentInferenceOutputConfiguration;

  /**
   * @schema LookoutEquipmentDescribeInferenceSchedulerResponse#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema LookoutEquipmentDescribeInferenceSchedulerResponse#ServerSideKmsKeyId
   */
  readonly serverSideKmsKeyId?: string;

}

/**
 * Converts an object of type 'LookoutEquipmentDescribeInferenceSchedulerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutEquipmentDescribeInferenceSchedulerResponse(obj: LookoutEquipmentDescribeInferenceSchedulerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ModelArn': obj.modelArn,
    'ModelName': obj.modelName,
    'InferenceSchedulerName': obj.inferenceSchedulerName,
    'InferenceSchedulerArn': obj.inferenceSchedulerArn,
    'Status': obj.status,
    'DataDelayOffsetInMinutes': obj.dataDelayOffsetInMinutes,
    'DataUploadFrequency': obj.dataUploadFrequency,
    'CreatedAt': obj.createdAt,
    'UpdatedAt': obj.updatedAt,
    'DataInputConfiguration': toJson_LookoutEquipmentInferenceInputConfiguration(obj.dataInputConfiguration),
    'DataOutputConfiguration': toJson_LookoutEquipmentInferenceOutputConfiguration(obj.dataOutputConfiguration),
    'RoleArn': obj.roleArn,
    'ServerSideKmsKeyId': obj.serverSideKmsKeyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutEquipmentDescribeModelRequest
 */
export interface LookoutEquipmentDescribeModelRequest {
  /**
   * @schema LookoutEquipmentDescribeModelRequest#ModelName
   */
  readonly modelName?: string;

}

/**
 * Converts an object of type 'LookoutEquipmentDescribeModelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutEquipmentDescribeModelRequest(obj: LookoutEquipmentDescribeModelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ModelName': obj.modelName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutEquipmentDescribeModelResponse
 */
export interface LookoutEquipmentDescribeModelResponse {
  /**
   * @schema LookoutEquipmentDescribeModelResponse#ModelName
   */
  readonly modelName?: string;

  /**
   * @schema LookoutEquipmentDescribeModelResponse#ModelArn
   */
  readonly modelArn?: string;

  /**
   * @schema LookoutEquipmentDescribeModelResponse#DatasetName
   */
  readonly datasetName?: string;

  /**
   * @schema LookoutEquipmentDescribeModelResponse#DatasetArn
   */
  readonly datasetArn?: string;

  /**
   * @schema LookoutEquipmentDescribeModelResponse#Schema
   */
  readonly schema?: string;

  /**
   * @schema LookoutEquipmentDescribeModelResponse#LabelsInputConfiguration
   */
  readonly labelsInputConfiguration?: LookoutEquipmentLabelsInputConfiguration;

  /**
   * @schema LookoutEquipmentDescribeModelResponse#TrainingDataStartTime
   */
  readonly trainingDataStartTime?: string;

  /**
   * @schema LookoutEquipmentDescribeModelResponse#TrainingDataEndTime
   */
  readonly trainingDataEndTime?: string;

  /**
   * @schema LookoutEquipmentDescribeModelResponse#EvaluationDataStartTime
   */
  readonly evaluationDataStartTime?: string;

  /**
   * @schema LookoutEquipmentDescribeModelResponse#EvaluationDataEndTime
   */
  readonly evaluationDataEndTime?: string;

  /**
   * @schema LookoutEquipmentDescribeModelResponse#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema LookoutEquipmentDescribeModelResponse#DataPreProcessingConfiguration
   */
  readonly dataPreProcessingConfiguration?: LookoutEquipmentDataPreProcessingConfiguration;

  /**
   * @schema LookoutEquipmentDescribeModelResponse#Status
   */
  readonly status?: string;

  /**
   * @schema LookoutEquipmentDescribeModelResponse#TrainingExecutionStartTime
   */
  readonly trainingExecutionStartTime?: string;

  /**
   * @schema LookoutEquipmentDescribeModelResponse#TrainingExecutionEndTime
   */
  readonly trainingExecutionEndTime?: string;

  /**
   * @schema LookoutEquipmentDescribeModelResponse#FailedReason
   */
  readonly failedReason?: string;

  /**
   * @schema LookoutEquipmentDescribeModelResponse#ModelMetrics
   */
  readonly modelMetrics?: string;

  /**
   * @schema LookoutEquipmentDescribeModelResponse#LastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

  /**
   * @schema LookoutEquipmentDescribeModelResponse#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema LookoutEquipmentDescribeModelResponse#ServerSideKmsKeyId
   */
  readonly serverSideKmsKeyId?: string;

}

/**
 * Converts an object of type 'LookoutEquipmentDescribeModelResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutEquipmentDescribeModelResponse(obj: LookoutEquipmentDescribeModelResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ModelName': obj.modelName,
    'ModelArn': obj.modelArn,
    'DatasetName': obj.datasetName,
    'DatasetArn': obj.datasetArn,
    'Schema': obj.schema,
    'LabelsInputConfiguration': toJson_LookoutEquipmentLabelsInputConfiguration(obj.labelsInputConfiguration),
    'TrainingDataStartTime': obj.trainingDataStartTime,
    'TrainingDataEndTime': obj.trainingDataEndTime,
    'EvaluationDataStartTime': obj.evaluationDataStartTime,
    'EvaluationDataEndTime': obj.evaluationDataEndTime,
    'RoleArn': obj.roleArn,
    'DataPreProcessingConfiguration': toJson_LookoutEquipmentDataPreProcessingConfiguration(obj.dataPreProcessingConfiguration),
    'Status': obj.status,
    'TrainingExecutionStartTime': obj.trainingExecutionStartTime,
    'TrainingExecutionEndTime': obj.trainingExecutionEndTime,
    'FailedReason': obj.failedReason,
    'ModelMetrics': obj.modelMetrics,
    'LastUpdatedTime': obj.lastUpdatedTime,
    'CreatedAt': obj.createdAt,
    'ServerSideKmsKeyId': obj.serverSideKmsKeyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutEquipmentListDataIngestionJobsRequest
 */
export interface LookoutEquipmentListDataIngestionJobsRequest {
  /**
   * @schema LookoutEquipmentListDataIngestionJobsRequest#DatasetName
   */
  readonly datasetName?: string;

  /**
   * @schema LookoutEquipmentListDataIngestionJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema LookoutEquipmentListDataIngestionJobsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema LookoutEquipmentListDataIngestionJobsRequest#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'LookoutEquipmentListDataIngestionJobsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutEquipmentListDataIngestionJobsRequest(obj: LookoutEquipmentListDataIngestionJobsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DatasetName': obj.datasetName,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutEquipmentListDataIngestionJobsResponse
 */
export interface LookoutEquipmentListDataIngestionJobsResponse {
  /**
   * @schema LookoutEquipmentListDataIngestionJobsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema LookoutEquipmentListDataIngestionJobsResponse#DataIngestionJobSummaries
   */
  readonly dataIngestionJobSummaries?: LookoutEquipmentDataIngestionJobSummary[];

}

/**
 * Converts an object of type 'LookoutEquipmentListDataIngestionJobsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutEquipmentListDataIngestionJobsResponse(obj: LookoutEquipmentListDataIngestionJobsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'DataIngestionJobSummaries': obj.dataIngestionJobSummaries?.map(y => toJson_LookoutEquipmentDataIngestionJobSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutEquipmentListDatasetsRequest
 */
export interface LookoutEquipmentListDatasetsRequest {
  /**
   * @schema LookoutEquipmentListDatasetsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema LookoutEquipmentListDatasetsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema LookoutEquipmentListDatasetsRequest#DatasetNameBeginsWith
   */
  readonly datasetNameBeginsWith?: string;

}

/**
 * Converts an object of type 'LookoutEquipmentListDatasetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutEquipmentListDatasetsRequest(obj: LookoutEquipmentListDatasetsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'DatasetNameBeginsWith': obj.datasetNameBeginsWith,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutEquipmentListDatasetsResponse
 */
export interface LookoutEquipmentListDatasetsResponse {
  /**
   * @schema LookoutEquipmentListDatasetsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema LookoutEquipmentListDatasetsResponse#DatasetSummaries
   */
  readonly datasetSummaries?: LookoutEquipmentDatasetSummary[];

}

/**
 * Converts an object of type 'LookoutEquipmentListDatasetsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutEquipmentListDatasetsResponse(obj: LookoutEquipmentListDatasetsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'DatasetSummaries': obj.datasetSummaries?.map(y => toJson_LookoutEquipmentDatasetSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutEquipmentListInferenceExecutionsRequest
 */
export interface LookoutEquipmentListInferenceExecutionsRequest {
  /**
   * @schema LookoutEquipmentListInferenceExecutionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema LookoutEquipmentListInferenceExecutionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema LookoutEquipmentListInferenceExecutionsRequest#InferenceSchedulerName
   */
  readonly inferenceSchedulerName?: string;

  /**
   * @schema LookoutEquipmentListInferenceExecutionsRequest#DataStartTimeAfter
   */
  readonly dataStartTimeAfter?: string;

  /**
   * @schema LookoutEquipmentListInferenceExecutionsRequest#DataEndTimeBefore
   */
  readonly dataEndTimeBefore?: string;

  /**
   * @schema LookoutEquipmentListInferenceExecutionsRequest#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'LookoutEquipmentListInferenceExecutionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutEquipmentListInferenceExecutionsRequest(obj: LookoutEquipmentListInferenceExecutionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'InferenceSchedulerName': obj.inferenceSchedulerName,
    'DataStartTimeAfter': obj.dataStartTimeAfter,
    'DataEndTimeBefore': obj.dataEndTimeBefore,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutEquipmentListInferenceExecutionsResponse
 */
export interface LookoutEquipmentListInferenceExecutionsResponse {
  /**
   * @schema LookoutEquipmentListInferenceExecutionsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema LookoutEquipmentListInferenceExecutionsResponse#InferenceExecutionSummaries
   */
  readonly inferenceExecutionSummaries?: LookoutEquipmentInferenceExecutionSummary[];

}

/**
 * Converts an object of type 'LookoutEquipmentListInferenceExecutionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutEquipmentListInferenceExecutionsResponse(obj: LookoutEquipmentListInferenceExecutionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'InferenceExecutionSummaries': obj.inferenceExecutionSummaries?.map(y => toJson_LookoutEquipmentInferenceExecutionSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutEquipmentListInferenceSchedulersRequest
 */
export interface LookoutEquipmentListInferenceSchedulersRequest {
  /**
   * @schema LookoutEquipmentListInferenceSchedulersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema LookoutEquipmentListInferenceSchedulersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema LookoutEquipmentListInferenceSchedulersRequest#InferenceSchedulerNameBeginsWith
   */
  readonly inferenceSchedulerNameBeginsWith?: string;

  /**
   * @schema LookoutEquipmentListInferenceSchedulersRequest#ModelName
   */
  readonly modelName?: string;

}

/**
 * Converts an object of type 'LookoutEquipmentListInferenceSchedulersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutEquipmentListInferenceSchedulersRequest(obj: LookoutEquipmentListInferenceSchedulersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'InferenceSchedulerNameBeginsWith': obj.inferenceSchedulerNameBeginsWith,
    'ModelName': obj.modelName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutEquipmentListInferenceSchedulersResponse
 */
export interface LookoutEquipmentListInferenceSchedulersResponse {
  /**
   * @schema LookoutEquipmentListInferenceSchedulersResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema LookoutEquipmentListInferenceSchedulersResponse#InferenceSchedulerSummaries
   */
  readonly inferenceSchedulerSummaries?: LookoutEquipmentInferenceSchedulerSummary[];

}

/**
 * Converts an object of type 'LookoutEquipmentListInferenceSchedulersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutEquipmentListInferenceSchedulersResponse(obj: LookoutEquipmentListInferenceSchedulersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'InferenceSchedulerSummaries': obj.inferenceSchedulerSummaries?.map(y => toJson_LookoutEquipmentInferenceSchedulerSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutEquipmentListModelsRequest
 */
export interface LookoutEquipmentListModelsRequest {
  /**
   * @schema LookoutEquipmentListModelsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema LookoutEquipmentListModelsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema LookoutEquipmentListModelsRequest#Status
   */
  readonly status?: string;

  /**
   * @schema LookoutEquipmentListModelsRequest#ModelNameBeginsWith
   */
  readonly modelNameBeginsWith?: string;

  /**
   * @schema LookoutEquipmentListModelsRequest#DatasetNameBeginsWith
   */
  readonly datasetNameBeginsWith?: string;

}

/**
 * Converts an object of type 'LookoutEquipmentListModelsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutEquipmentListModelsRequest(obj: LookoutEquipmentListModelsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'Status': obj.status,
    'ModelNameBeginsWith': obj.modelNameBeginsWith,
    'DatasetNameBeginsWith': obj.datasetNameBeginsWith,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutEquipmentListModelsResponse
 */
export interface LookoutEquipmentListModelsResponse {
  /**
   * @schema LookoutEquipmentListModelsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema LookoutEquipmentListModelsResponse#ModelSummaries
   */
  readonly modelSummaries?: LookoutEquipmentModelSummary[];

}

/**
 * Converts an object of type 'LookoutEquipmentListModelsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutEquipmentListModelsResponse(obj: LookoutEquipmentListModelsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'ModelSummaries': obj.modelSummaries?.map(y => toJson_LookoutEquipmentModelSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutEquipmentListTagsForResourceRequest
 */
export interface LookoutEquipmentListTagsForResourceRequest {
  /**
   * @schema LookoutEquipmentListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'LookoutEquipmentListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutEquipmentListTagsForResourceRequest(obj: LookoutEquipmentListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutEquipmentListTagsForResourceResponse
 */
export interface LookoutEquipmentListTagsForResourceResponse {
  /**
   * @schema LookoutEquipmentListTagsForResourceResponse#Tags
   */
  readonly tags?: LookoutEquipmentTag[];

}

/**
 * Converts an object of type 'LookoutEquipmentListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutEquipmentListTagsForResourceResponse(obj: LookoutEquipmentListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': obj.tags?.map(y => toJson_LookoutEquipmentTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutEquipmentStartDataIngestionJobRequest
 */
export interface LookoutEquipmentStartDataIngestionJobRequest {
  /**
   * @schema LookoutEquipmentStartDataIngestionJobRequest#DatasetName
   */
  readonly datasetName?: string;

  /**
   * @schema LookoutEquipmentStartDataIngestionJobRequest#IngestionInputConfiguration
   */
  readonly ingestionInputConfiguration?: LookoutEquipmentIngestionInputConfiguration;

  /**
   * @schema LookoutEquipmentStartDataIngestionJobRequest#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema LookoutEquipmentStartDataIngestionJobRequest#ClientToken
   */
  readonly clientToken?: string;

}

/**
 * Converts an object of type 'LookoutEquipmentStartDataIngestionJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutEquipmentStartDataIngestionJobRequest(obj: LookoutEquipmentStartDataIngestionJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DatasetName': obj.datasetName,
    'IngestionInputConfiguration': toJson_LookoutEquipmentIngestionInputConfiguration(obj.ingestionInputConfiguration),
    'RoleArn': obj.roleArn,
    'ClientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutEquipmentStartDataIngestionJobResponse
 */
export interface LookoutEquipmentStartDataIngestionJobResponse {
  /**
   * @schema LookoutEquipmentStartDataIngestionJobResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema LookoutEquipmentStartDataIngestionJobResponse#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'LookoutEquipmentStartDataIngestionJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutEquipmentStartDataIngestionJobResponse(obj: LookoutEquipmentStartDataIngestionJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutEquipmentStartInferenceSchedulerRequest
 */
export interface LookoutEquipmentStartInferenceSchedulerRequest {
  /**
   * @schema LookoutEquipmentStartInferenceSchedulerRequest#InferenceSchedulerName
   */
  readonly inferenceSchedulerName?: string;

}

/**
 * Converts an object of type 'LookoutEquipmentStartInferenceSchedulerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutEquipmentStartInferenceSchedulerRequest(obj: LookoutEquipmentStartInferenceSchedulerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InferenceSchedulerName': obj.inferenceSchedulerName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutEquipmentStartInferenceSchedulerResponse
 */
export interface LookoutEquipmentStartInferenceSchedulerResponse {
  /**
   * @schema LookoutEquipmentStartInferenceSchedulerResponse#ModelArn
   */
  readonly modelArn?: string;

  /**
   * @schema LookoutEquipmentStartInferenceSchedulerResponse#ModelName
   */
  readonly modelName?: string;

  /**
   * @schema LookoutEquipmentStartInferenceSchedulerResponse#InferenceSchedulerName
   */
  readonly inferenceSchedulerName?: string;

  /**
   * @schema LookoutEquipmentStartInferenceSchedulerResponse#InferenceSchedulerArn
   */
  readonly inferenceSchedulerArn?: string;

  /**
   * @schema LookoutEquipmentStartInferenceSchedulerResponse#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'LookoutEquipmentStartInferenceSchedulerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutEquipmentStartInferenceSchedulerResponse(obj: LookoutEquipmentStartInferenceSchedulerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ModelArn': obj.modelArn,
    'ModelName': obj.modelName,
    'InferenceSchedulerName': obj.inferenceSchedulerName,
    'InferenceSchedulerArn': obj.inferenceSchedulerArn,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutEquipmentStopInferenceSchedulerRequest
 */
export interface LookoutEquipmentStopInferenceSchedulerRequest {
  /**
   * @schema LookoutEquipmentStopInferenceSchedulerRequest#InferenceSchedulerName
   */
  readonly inferenceSchedulerName?: string;

}

/**
 * Converts an object of type 'LookoutEquipmentStopInferenceSchedulerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutEquipmentStopInferenceSchedulerRequest(obj: LookoutEquipmentStopInferenceSchedulerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InferenceSchedulerName': obj.inferenceSchedulerName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutEquipmentStopInferenceSchedulerResponse
 */
export interface LookoutEquipmentStopInferenceSchedulerResponse {
  /**
   * @schema LookoutEquipmentStopInferenceSchedulerResponse#ModelArn
   */
  readonly modelArn?: string;

  /**
   * @schema LookoutEquipmentStopInferenceSchedulerResponse#ModelName
   */
  readonly modelName?: string;

  /**
   * @schema LookoutEquipmentStopInferenceSchedulerResponse#InferenceSchedulerName
   */
  readonly inferenceSchedulerName?: string;

  /**
   * @schema LookoutEquipmentStopInferenceSchedulerResponse#InferenceSchedulerArn
   */
  readonly inferenceSchedulerArn?: string;

  /**
   * @schema LookoutEquipmentStopInferenceSchedulerResponse#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'LookoutEquipmentStopInferenceSchedulerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutEquipmentStopInferenceSchedulerResponse(obj: LookoutEquipmentStopInferenceSchedulerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ModelArn': obj.modelArn,
    'ModelName': obj.modelName,
    'InferenceSchedulerName': obj.inferenceSchedulerName,
    'InferenceSchedulerArn': obj.inferenceSchedulerArn,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutEquipmentTagResourceRequest
 */
export interface LookoutEquipmentTagResourceRequest {
  /**
   * @schema LookoutEquipmentTagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema LookoutEquipmentTagResourceRequest#Tags
   */
  readonly tags?: LookoutEquipmentTag[];

}

/**
 * Converts an object of type 'LookoutEquipmentTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutEquipmentTagResourceRequest(obj: LookoutEquipmentTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'Tags': obj.tags?.map(y => toJson_LookoutEquipmentTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutEquipmentTagResourceResponse
 */
export interface LookoutEquipmentTagResourceResponse {
}

/**
 * Converts an object of type 'LookoutEquipmentTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutEquipmentTagResourceResponse(obj: LookoutEquipmentTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutEquipmentUntagResourceRequest
 */
export interface LookoutEquipmentUntagResourceRequest {
  /**
   * @schema LookoutEquipmentUntagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema LookoutEquipmentUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'LookoutEquipmentUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutEquipmentUntagResourceRequest(obj: LookoutEquipmentUntagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema LookoutEquipmentUntagResourceResponse
 */
export interface LookoutEquipmentUntagResourceResponse {
}

/**
 * Converts an object of type 'LookoutEquipmentUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutEquipmentUntagResourceResponse(obj: LookoutEquipmentUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutEquipmentUpdateInferenceSchedulerRequest
 */
export interface LookoutEquipmentUpdateInferenceSchedulerRequest {
  /**
   * @schema LookoutEquipmentUpdateInferenceSchedulerRequest#InferenceSchedulerName
   */
  readonly inferenceSchedulerName?: string;

  /**
   * @schema LookoutEquipmentUpdateInferenceSchedulerRequest#DataDelayOffsetInMinutes
   */
  readonly dataDelayOffsetInMinutes?: number;

  /**
   * @schema LookoutEquipmentUpdateInferenceSchedulerRequest#DataUploadFrequency
   */
  readonly dataUploadFrequency?: string;

  /**
   * @schema LookoutEquipmentUpdateInferenceSchedulerRequest#DataInputConfiguration
   */
  readonly dataInputConfiguration?: LookoutEquipmentInferenceInputConfiguration;

  /**
   * @schema LookoutEquipmentUpdateInferenceSchedulerRequest#DataOutputConfiguration
   */
  readonly dataOutputConfiguration?: LookoutEquipmentInferenceOutputConfiguration;

  /**
   * @schema LookoutEquipmentUpdateInferenceSchedulerRequest#RoleArn
   */
  readonly roleArn?: string;

}

/**
 * Converts an object of type 'LookoutEquipmentUpdateInferenceSchedulerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutEquipmentUpdateInferenceSchedulerRequest(obj: LookoutEquipmentUpdateInferenceSchedulerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InferenceSchedulerName': obj.inferenceSchedulerName,
    'DataDelayOffsetInMinutes': obj.dataDelayOffsetInMinutes,
    'DataUploadFrequency': obj.dataUploadFrequency,
    'DataInputConfiguration': toJson_LookoutEquipmentInferenceInputConfiguration(obj.dataInputConfiguration),
    'DataOutputConfiguration': toJson_LookoutEquipmentInferenceOutputConfiguration(obj.dataOutputConfiguration),
    'RoleArn': obj.roleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutEquipmentDatasetSchema
 */
export interface LookoutEquipmentDatasetSchema {
  /**
   * @schema LookoutEquipmentDatasetSchema#InlineDataSchema
   */
  readonly inlineDataSchema?: string;

}

/**
 * Converts an object of type 'LookoutEquipmentDatasetSchema' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutEquipmentDatasetSchema(obj: LookoutEquipmentDatasetSchema | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InlineDataSchema': obj.inlineDataSchema,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutEquipmentTag
 */
export interface LookoutEquipmentTag {
  /**
   * @schema LookoutEquipmentTag#Key
   */
  readonly key?: string;

  /**
   * @schema LookoutEquipmentTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'LookoutEquipmentTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutEquipmentTag(obj: LookoutEquipmentTag | undefined): Record<string, any> | undefined {
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
 * @schema LookoutEquipmentInferenceInputConfiguration
 */
export interface LookoutEquipmentInferenceInputConfiguration {
  /**
   * @schema LookoutEquipmentInferenceInputConfiguration#S3InputConfiguration
   */
  readonly s3InputConfiguration?: LookoutEquipmentInferenceS3InputConfiguration;

  /**
   * @schema LookoutEquipmentInferenceInputConfiguration#InputTimeZoneOffset
   */
  readonly inputTimeZoneOffset?: string;

  /**
   * @schema LookoutEquipmentInferenceInputConfiguration#InferenceInputNameConfiguration
   */
  readonly inferenceInputNameConfiguration?: LookoutEquipmentInferenceInputNameConfiguration;

}

/**
 * Converts an object of type 'LookoutEquipmentInferenceInputConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutEquipmentInferenceInputConfiguration(obj: LookoutEquipmentInferenceInputConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3InputConfiguration': toJson_LookoutEquipmentInferenceS3InputConfiguration(obj.s3InputConfiguration),
    'InputTimeZoneOffset': obj.inputTimeZoneOffset,
    'InferenceInputNameConfiguration': toJson_LookoutEquipmentInferenceInputNameConfiguration(obj.inferenceInputNameConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutEquipmentInferenceOutputConfiguration
 */
export interface LookoutEquipmentInferenceOutputConfiguration {
  /**
   * @schema LookoutEquipmentInferenceOutputConfiguration#S3OutputConfiguration
   */
  readonly s3OutputConfiguration?: LookoutEquipmentInferenceS3OutputConfiguration;

  /**
   * @schema LookoutEquipmentInferenceOutputConfiguration#KmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * Converts an object of type 'LookoutEquipmentInferenceOutputConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutEquipmentInferenceOutputConfiguration(obj: LookoutEquipmentInferenceOutputConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3OutputConfiguration': toJson_LookoutEquipmentInferenceS3OutputConfiguration(obj.s3OutputConfiguration),
    'KmsKeyId': obj.kmsKeyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutEquipmentLabelsInputConfiguration
 */
export interface LookoutEquipmentLabelsInputConfiguration {
  /**
   * @schema LookoutEquipmentLabelsInputConfiguration#S3InputConfiguration
   */
  readonly s3InputConfiguration?: LookoutEquipmentLabelsS3InputConfiguration;

}

/**
 * Converts an object of type 'LookoutEquipmentLabelsInputConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutEquipmentLabelsInputConfiguration(obj: LookoutEquipmentLabelsInputConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3InputConfiguration': toJson_LookoutEquipmentLabelsS3InputConfiguration(obj.s3InputConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutEquipmentDataPreProcessingConfiguration
 */
export interface LookoutEquipmentDataPreProcessingConfiguration {
  /**
   * @schema LookoutEquipmentDataPreProcessingConfiguration#TargetSamplingRate
   */
  readonly targetSamplingRate?: string;

}

/**
 * Converts an object of type 'LookoutEquipmentDataPreProcessingConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutEquipmentDataPreProcessingConfiguration(obj: LookoutEquipmentDataPreProcessingConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TargetSamplingRate': obj.targetSamplingRate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutEquipmentIngestionInputConfiguration
 */
export interface LookoutEquipmentIngestionInputConfiguration {
  /**
   * @schema LookoutEquipmentIngestionInputConfiguration#S3InputConfiguration
   */
  readonly s3InputConfiguration?: LookoutEquipmentIngestionS3InputConfiguration;

}

/**
 * Converts an object of type 'LookoutEquipmentIngestionInputConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutEquipmentIngestionInputConfiguration(obj: LookoutEquipmentIngestionInputConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3InputConfiguration': toJson_LookoutEquipmentIngestionS3InputConfiguration(obj.s3InputConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutEquipmentDataIngestionJobSummary
 */
export interface LookoutEquipmentDataIngestionJobSummary {
  /**
   * @schema LookoutEquipmentDataIngestionJobSummary#JobId
   */
  readonly jobId?: string;

  /**
   * @schema LookoutEquipmentDataIngestionJobSummary#DatasetName
   */
  readonly datasetName?: string;

  /**
   * @schema LookoutEquipmentDataIngestionJobSummary#DatasetArn
   */
  readonly datasetArn?: string;

  /**
   * @schema LookoutEquipmentDataIngestionJobSummary#IngestionInputConfiguration
   */
  readonly ingestionInputConfiguration?: LookoutEquipmentIngestionInputConfiguration;

  /**
   * @schema LookoutEquipmentDataIngestionJobSummary#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'LookoutEquipmentDataIngestionJobSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutEquipmentDataIngestionJobSummary(obj: LookoutEquipmentDataIngestionJobSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'DatasetName': obj.datasetName,
    'DatasetArn': obj.datasetArn,
    'IngestionInputConfiguration': toJson_LookoutEquipmentIngestionInputConfiguration(obj.ingestionInputConfiguration),
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutEquipmentDatasetSummary
 */
export interface LookoutEquipmentDatasetSummary {
  /**
   * @schema LookoutEquipmentDatasetSummary#DatasetName
   */
  readonly datasetName?: string;

  /**
   * @schema LookoutEquipmentDatasetSummary#DatasetArn
   */
  readonly datasetArn?: string;

  /**
   * @schema LookoutEquipmentDatasetSummary#Status
   */
  readonly status?: string;

  /**
   * @schema LookoutEquipmentDatasetSummary#CreatedAt
   */
  readonly createdAt?: string;

}

/**
 * Converts an object of type 'LookoutEquipmentDatasetSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutEquipmentDatasetSummary(obj: LookoutEquipmentDatasetSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DatasetName': obj.datasetName,
    'DatasetArn': obj.datasetArn,
    'Status': obj.status,
    'CreatedAt': obj.createdAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutEquipmentInferenceExecutionSummary
 */
export interface LookoutEquipmentInferenceExecutionSummary {
  /**
   * @schema LookoutEquipmentInferenceExecutionSummary#ModelName
   */
  readonly modelName?: string;

  /**
   * @schema LookoutEquipmentInferenceExecutionSummary#ModelArn
   */
  readonly modelArn?: string;

  /**
   * @schema LookoutEquipmentInferenceExecutionSummary#InferenceSchedulerName
   */
  readonly inferenceSchedulerName?: string;

  /**
   * @schema LookoutEquipmentInferenceExecutionSummary#InferenceSchedulerArn
   */
  readonly inferenceSchedulerArn?: string;

  /**
   * @schema LookoutEquipmentInferenceExecutionSummary#ScheduledStartTime
   */
  readonly scheduledStartTime?: string;

  /**
   * @schema LookoutEquipmentInferenceExecutionSummary#DataStartTime
   */
  readonly dataStartTime?: string;

  /**
   * @schema LookoutEquipmentInferenceExecutionSummary#DataEndTime
   */
  readonly dataEndTime?: string;

  /**
   * @schema LookoutEquipmentInferenceExecutionSummary#DataInputConfiguration
   */
  readonly dataInputConfiguration?: LookoutEquipmentInferenceInputConfiguration;

  /**
   * @schema LookoutEquipmentInferenceExecutionSummary#DataOutputConfiguration
   */
  readonly dataOutputConfiguration?: LookoutEquipmentInferenceOutputConfiguration;

  /**
   * @schema LookoutEquipmentInferenceExecutionSummary#CustomerResultObject
   */
  readonly customerResultObject?: LookoutEquipmentS3Object;

  /**
   * @schema LookoutEquipmentInferenceExecutionSummary#Status
   */
  readonly status?: string;

  /**
   * @schema LookoutEquipmentInferenceExecutionSummary#FailedReason
   */
  readonly failedReason?: string;

}

/**
 * Converts an object of type 'LookoutEquipmentInferenceExecutionSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutEquipmentInferenceExecutionSummary(obj: LookoutEquipmentInferenceExecutionSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ModelName': obj.modelName,
    'ModelArn': obj.modelArn,
    'InferenceSchedulerName': obj.inferenceSchedulerName,
    'InferenceSchedulerArn': obj.inferenceSchedulerArn,
    'ScheduledStartTime': obj.scheduledStartTime,
    'DataStartTime': obj.dataStartTime,
    'DataEndTime': obj.dataEndTime,
    'DataInputConfiguration': toJson_LookoutEquipmentInferenceInputConfiguration(obj.dataInputConfiguration),
    'DataOutputConfiguration': toJson_LookoutEquipmentInferenceOutputConfiguration(obj.dataOutputConfiguration),
    'CustomerResultObject': toJson_LookoutEquipmentS3Object(obj.customerResultObject),
    'Status': obj.status,
    'FailedReason': obj.failedReason,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutEquipmentInferenceSchedulerSummary
 */
export interface LookoutEquipmentInferenceSchedulerSummary {
  /**
   * @schema LookoutEquipmentInferenceSchedulerSummary#ModelName
   */
  readonly modelName?: string;

  /**
   * @schema LookoutEquipmentInferenceSchedulerSummary#ModelArn
   */
  readonly modelArn?: string;

  /**
   * @schema LookoutEquipmentInferenceSchedulerSummary#InferenceSchedulerName
   */
  readonly inferenceSchedulerName?: string;

  /**
   * @schema LookoutEquipmentInferenceSchedulerSummary#InferenceSchedulerArn
   */
  readonly inferenceSchedulerArn?: string;

  /**
   * @schema LookoutEquipmentInferenceSchedulerSummary#Status
   */
  readonly status?: string;

  /**
   * @schema LookoutEquipmentInferenceSchedulerSummary#DataDelayOffsetInMinutes
   */
  readonly dataDelayOffsetInMinutes?: number;

  /**
   * @schema LookoutEquipmentInferenceSchedulerSummary#DataUploadFrequency
   */
  readonly dataUploadFrequency?: string;

}

/**
 * Converts an object of type 'LookoutEquipmentInferenceSchedulerSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutEquipmentInferenceSchedulerSummary(obj: LookoutEquipmentInferenceSchedulerSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ModelName': obj.modelName,
    'ModelArn': obj.modelArn,
    'InferenceSchedulerName': obj.inferenceSchedulerName,
    'InferenceSchedulerArn': obj.inferenceSchedulerArn,
    'Status': obj.status,
    'DataDelayOffsetInMinutes': obj.dataDelayOffsetInMinutes,
    'DataUploadFrequency': obj.dataUploadFrequency,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutEquipmentModelSummary
 */
export interface LookoutEquipmentModelSummary {
  /**
   * @schema LookoutEquipmentModelSummary#ModelName
   */
  readonly modelName?: string;

  /**
   * @schema LookoutEquipmentModelSummary#ModelArn
   */
  readonly modelArn?: string;

  /**
   * @schema LookoutEquipmentModelSummary#DatasetName
   */
  readonly datasetName?: string;

  /**
   * @schema LookoutEquipmentModelSummary#DatasetArn
   */
  readonly datasetArn?: string;

  /**
   * @schema LookoutEquipmentModelSummary#Status
   */
  readonly status?: string;

  /**
   * @schema LookoutEquipmentModelSummary#CreatedAt
   */
  readonly createdAt?: string;

}

/**
 * Converts an object of type 'LookoutEquipmentModelSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutEquipmentModelSummary(obj: LookoutEquipmentModelSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ModelName': obj.modelName,
    'ModelArn': obj.modelArn,
    'DatasetName': obj.datasetName,
    'DatasetArn': obj.datasetArn,
    'Status': obj.status,
    'CreatedAt': obj.createdAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutEquipmentInferenceS3InputConfiguration
 */
export interface LookoutEquipmentInferenceS3InputConfiguration {
  /**
   * @schema LookoutEquipmentInferenceS3InputConfiguration#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema LookoutEquipmentInferenceS3InputConfiguration#Prefix
   */
  readonly prefix?: string;

}

/**
 * Converts an object of type 'LookoutEquipmentInferenceS3InputConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutEquipmentInferenceS3InputConfiguration(obj: LookoutEquipmentInferenceS3InputConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'Prefix': obj.prefix,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutEquipmentInferenceInputNameConfiguration
 */
export interface LookoutEquipmentInferenceInputNameConfiguration {
  /**
   * @schema LookoutEquipmentInferenceInputNameConfiguration#TimestampFormat
   */
  readonly timestampFormat?: string;

  /**
   * @schema LookoutEquipmentInferenceInputNameConfiguration#ComponentTimestampDelimiter
   */
  readonly componentTimestampDelimiter?: string;

}

/**
 * Converts an object of type 'LookoutEquipmentInferenceInputNameConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutEquipmentInferenceInputNameConfiguration(obj: LookoutEquipmentInferenceInputNameConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TimestampFormat': obj.timestampFormat,
    'ComponentTimestampDelimiter': obj.componentTimestampDelimiter,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutEquipmentInferenceS3OutputConfiguration
 */
export interface LookoutEquipmentInferenceS3OutputConfiguration {
  /**
   * @schema LookoutEquipmentInferenceS3OutputConfiguration#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema LookoutEquipmentInferenceS3OutputConfiguration#Prefix
   */
  readonly prefix?: string;

}

/**
 * Converts an object of type 'LookoutEquipmentInferenceS3OutputConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutEquipmentInferenceS3OutputConfiguration(obj: LookoutEquipmentInferenceS3OutputConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'Prefix': obj.prefix,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutEquipmentLabelsS3InputConfiguration
 */
export interface LookoutEquipmentLabelsS3InputConfiguration {
  /**
   * @schema LookoutEquipmentLabelsS3InputConfiguration#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema LookoutEquipmentLabelsS3InputConfiguration#Prefix
   */
  readonly prefix?: string;

}

/**
 * Converts an object of type 'LookoutEquipmentLabelsS3InputConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutEquipmentLabelsS3InputConfiguration(obj: LookoutEquipmentLabelsS3InputConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'Prefix': obj.prefix,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutEquipmentIngestionS3InputConfiguration
 */
export interface LookoutEquipmentIngestionS3InputConfiguration {
  /**
   * @schema LookoutEquipmentIngestionS3InputConfiguration#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema LookoutEquipmentIngestionS3InputConfiguration#Prefix
   */
  readonly prefix?: string;

}

/**
 * Converts an object of type 'LookoutEquipmentIngestionS3InputConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutEquipmentIngestionS3InputConfiguration(obj: LookoutEquipmentIngestionS3InputConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'Prefix': obj.prefix,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LookoutEquipmentS3Object
 */
export interface LookoutEquipmentS3Object {
  /**
   * @schema LookoutEquipmentS3Object#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema LookoutEquipmentS3Object#Key
   */
  readonly key?: string;

}

/**
 * Converts an object of type 'LookoutEquipmentS3Object' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LookoutEquipmentS3Object(obj: LookoutEquipmentS3Object | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'Key': obj.key,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
