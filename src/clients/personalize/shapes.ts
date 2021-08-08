/**
 * @schema PersonalizeCreateBatchInferenceJobRequest
 */
export interface PersonalizeCreateBatchInferenceJobRequest {
  /**
   * @schema PersonalizeCreateBatchInferenceJobRequest#jobName
   */
  readonly jobName: string;

  /**
   * @schema PersonalizeCreateBatchInferenceJobRequest#solutionVersionArn
   */
  readonly solutionVersionArn: string;

  /**
   * @schema PersonalizeCreateBatchInferenceJobRequest#filterArn
   */
  readonly filterArn?: string;

  /**
   * @schema PersonalizeCreateBatchInferenceJobRequest#numResults
   */
  readonly numResults?: number;

  /**
   * @schema PersonalizeCreateBatchInferenceJobRequest#jobInput
   */
  readonly jobInput: PersonalizeBatchInferenceJobInput;

  /**
   * @schema PersonalizeCreateBatchInferenceJobRequest#jobOutput
   */
  readonly jobOutput: PersonalizeBatchInferenceJobOutput;

  /**
   * @schema PersonalizeCreateBatchInferenceJobRequest#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema PersonalizeCreateBatchInferenceJobRequest#batchInferenceJobConfig
   */
  readonly batchInferenceJobConfig?: PersonalizeBatchInferenceJobConfig;

}

/**
 * Converts an object of type 'PersonalizeCreateBatchInferenceJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeCreateBatchInferenceJobRequest(obj: PersonalizeCreateBatchInferenceJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobName': obj.jobName,
    'solutionVersionArn': obj.solutionVersionArn,
    'filterArn': obj.filterArn,
    'numResults': obj.numResults,
    'jobInput': toJson_PersonalizeBatchInferenceJobInput(obj.jobInput),
    'jobOutput': toJson_PersonalizeBatchInferenceJobOutput(obj.jobOutput),
    'roleArn': obj.roleArn,
    'batchInferenceJobConfig': toJson_PersonalizeBatchInferenceJobConfig(obj.batchInferenceJobConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeCreateBatchInferenceJobResponse
 */
export interface PersonalizeCreateBatchInferenceJobResponse {
  /**
   * @schema PersonalizeCreateBatchInferenceJobResponse#batchInferenceJobArn
   */
  readonly batchInferenceJobArn?: string;

}

/**
 * Converts an object of type 'PersonalizeCreateBatchInferenceJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeCreateBatchInferenceJobResponse(obj: PersonalizeCreateBatchInferenceJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'batchInferenceJobArn': obj.batchInferenceJobArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeCreateCampaignRequest
 */
export interface PersonalizeCreateCampaignRequest {
  /**
   * @schema PersonalizeCreateCampaignRequest#name
   */
  readonly name: string;

  /**
   * @schema PersonalizeCreateCampaignRequest#solutionVersionArn
   */
  readonly solutionVersionArn: string;

  /**
   * @schema PersonalizeCreateCampaignRequest#minProvisionedTPS
   */
  readonly minProvisionedTps?: number;

  /**
   * @schema PersonalizeCreateCampaignRequest#campaignConfig
   */
  readonly campaignConfig?: PersonalizeCampaignConfig;

}

/**
 * Converts an object of type 'PersonalizeCreateCampaignRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeCreateCampaignRequest(obj: PersonalizeCreateCampaignRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'solutionVersionArn': obj.solutionVersionArn,
    'minProvisionedTPS': obj.minProvisionedTps,
    'campaignConfig': toJson_PersonalizeCampaignConfig(obj.campaignConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeCreateCampaignResponse
 */
export interface PersonalizeCreateCampaignResponse {
  /**
   * @schema PersonalizeCreateCampaignResponse#campaignArn
   */
  readonly campaignArn?: string;

}

/**
 * Converts an object of type 'PersonalizeCreateCampaignResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeCreateCampaignResponse(obj: PersonalizeCreateCampaignResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'campaignArn': obj.campaignArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeCreateDatasetRequest
 */
export interface PersonalizeCreateDatasetRequest {
  /**
   * @schema PersonalizeCreateDatasetRequest#name
   */
  readonly name: string;

  /**
   * @schema PersonalizeCreateDatasetRequest#schemaArn
   */
  readonly schemaArn: string;

  /**
   * @schema PersonalizeCreateDatasetRequest#datasetGroupArn
   */
  readonly datasetGroupArn: string;

  /**
   * @schema PersonalizeCreateDatasetRequest#datasetType
   */
  readonly datasetType: string;

}

/**
 * Converts an object of type 'PersonalizeCreateDatasetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeCreateDatasetRequest(obj: PersonalizeCreateDatasetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'schemaArn': obj.schemaArn,
    'datasetGroupArn': obj.datasetGroupArn,
    'datasetType': obj.datasetType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeCreateDatasetResponse
 */
export interface PersonalizeCreateDatasetResponse {
  /**
   * @schema PersonalizeCreateDatasetResponse#datasetArn
   */
  readonly datasetArn?: string;

}

/**
 * Converts an object of type 'PersonalizeCreateDatasetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeCreateDatasetResponse(obj: PersonalizeCreateDatasetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'datasetArn': obj.datasetArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeCreateDatasetExportJobRequest
 */
export interface PersonalizeCreateDatasetExportJobRequest {
  /**
   * @schema PersonalizeCreateDatasetExportJobRequest#jobName
   */
  readonly jobName: string;

  /**
   * @schema PersonalizeCreateDatasetExportJobRequest#datasetArn
   */
  readonly datasetArn: string;

  /**
   * @schema PersonalizeCreateDatasetExportJobRequest#ingestionMode
   */
  readonly ingestionMode?: string;

  /**
   * @schema PersonalizeCreateDatasetExportJobRequest#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema PersonalizeCreateDatasetExportJobRequest#jobOutput
   */
  readonly jobOutput: PersonalizeDatasetExportJobOutput;

}

/**
 * Converts an object of type 'PersonalizeCreateDatasetExportJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeCreateDatasetExportJobRequest(obj: PersonalizeCreateDatasetExportJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobName': obj.jobName,
    'datasetArn': obj.datasetArn,
    'ingestionMode': obj.ingestionMode,
    'roleArn': obj.roleArn,
    'jobOutput': toJson_PersonalizeDatasetExportJobOutput(obj.jobOutput),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeCreateDatasetExportJobResponse
 */
export interface PersonalizeCreateDatasetExportJobResponse {
  /**
   * @schema PersonalizeCreateDatasetExportJobResponse#datasetExportJobArn
   */
  readonly datasetExportJobArn?: string;

}

/**
 * Converts an object of type 'PersonalizeCreateDatasetExportJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeCreateDatasetExportJobResponse(obj: PersonalizeCreateDatasetExportJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'datasetExportJobArn': obj.datasetExportJobArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeCreateDatasetGroupRequest
 */
export interface PersonalizeCreateDatasetGroupRequest {
  /**
   * @schema PersonalizeCreateDatasetGroupRequest#name
   */
  readonly name: string;

  /**
   * @schema PersonalizeCreateDatasetGroupRequest#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema PersonalizeCreateDatasetGroupRequest#kmsKeyArn
   */
  readonly kmsKeyArn?: string;

}

/**
 * Converts an object of type 'PersonalizeCreateDatasetGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeCreateDatasetGroupRequest(obj: PersonalizeCreateDatasetGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'roleArn': obj.roleArn,
    'kmsKeyArn': obj.kmsKeyArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeCreateDatasetGroupResponse
 */
export interface PersonalizeCreateDatasetGroupResponse {
  /**
   * @schema PersonalizeCreateDatasetGroupResponse#datasetGroupArn
   */
  readonly datasetGroupArn?: string;

}

/**
 * Converts an object of type 'PersonalizeCreateDatasetGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeCreateDatasetGroupResponse(obj: PersonalizeCreateDatasetGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'datasetGroupArn': obj.datasetGroupArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeCreateDatasetImportJobRequest
 */
export interface PersonalizeCreateDatasetImportJobRequest {
  /**
   * @schema PersonalizeCreateDatasetImportJobRequest#jobName
   */
  readonly jobName: string;

  /**
   * @schema PersonalizeCreateDatasetImportJobRequest#datasetArn
   */
  readonly datasetArn: string;

  /**
   * @schema PersonalizeCreateDatasetImportJobRequest#dataSource
   */
  readonly dataSource: PersonalizeDataSource;

  /**
   * @schema PersonalizeCreateDatasetImportJobRequest#roleArn
   */
  readonly roleArn: string;

}

/**
 * Converts an object of type 'PersonalizeCreateDatasetImportJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeCreateDatasetImportJobRequest(obj: PersonalizeCreateDatasetImportJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobName': obj.jobName,
    'datasetArn': obj.datasetArn,
    'dataSource': toJson_PersonalizeDataSource(obj.dataSource),
    'roleArn': obj.roleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeCreateDatasetImportJobResponse
 */
export interface PersonalizeCreateDatasetImportJobResponse {
  /**
   * @schema PersonalizeCreateDatasetImportJobResponse#datasetImportJobArn
   */
  readonly datasetImportJobArn?: string;

}

/**
 * Converts an object of type 'PersonalizeCreateDatasetImportJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeCreateDatasetImportJobResponse(obj: PersonalizeCreateDatasetImportJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'datasetImportJobArn': obj.datasetImportJobArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeCreateEventTrackerRequest
 */
export interface PersonalizeCreateEventTrackerRequest {
  /**
   * @schema PersonalizeCreateEventTrackerRequest#name
   */
  readonly name: string;

  /**
   * @schema PersonalizeCreateEventTrackerRequest#datasetGroupArn
   */
  readonly datasetGroupArn: string;

}

/**
 * Converts an object of type 'PersonalizeCreateEventTrackerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeCreateEventTrackerRequest(obj: PersonalizeCreateEventTrackerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'datasetGroupArn': obj.datasetGroupArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeCreateEventTrackerResponse
 */
export interface PersonalizeCreateEventTrackerResponse {
  /**
   * @schema PersonalizeCreateEventTrackerResponse#eventTrackerArn
   */
  readonly eventTrackerArn?: string;

  /**
   * @schema PersonalizeCreateEventTrackerResponse#trackingId
   */
  readonly trackingId?: string;

}

/**
 * Converts an object of type 'PersonalizeCreateEventTrackerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeCreateEventTrackerResponse(obj: PersonalizeCreateEventTrackerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'eventTrackerArn': obj.eventTrackerArn,
    'trackingId': obj.trackingId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeCreateFilterRequest
 */
export interface PersonalizeCreateFilterRequest {
  /**
   * @schema PersonalizeCreateFilterRequest#name
   */
  readonly name: string;

  /**
   * @schema PersonalizeCreateFilterRequest#datasetGroupArn
   */
  readonly datasetGroupArn: string;

  /**
   * @schema PersonalizeCreateFilterRequest#filterExpression
   */
  readonly filterExpression: string;

}

/**
 * Converts an object of type 'PersonalizeCreateFilterRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeCreateFilterRequest(obj: PersonalizeCreateFilterRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'datasetGroupArn': obj.datasetGroupArn,
    'filterExpression': obj.filterExpression,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeCreateFilterResponse
 */
export interface PersonalizeCreateFilterResponse {
  /**
   * @schema PersonalizeCreateFilterResponse#filterArn
   */
  readonly filterArn?: string;

}

/**
 * Converts an object of type 'PersonalizeCreateFilterResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeCreateFilterResponse(obj: PersonalizeCreateFilterResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'filterArn': obj.filterArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeCreateSchemaRequest
 */
export interface PersonalizeCreateSchemaRequest {
  /**
   * @schema PersonalizeCreateSchemaRequest#name
   */
  readonly name: string;

  /**
   * @schema PersonalizeCreateSchemaRequest#schema
   */
  readonly schema: string;

}

/**
 * Converts an object of type 'PersonalizeCreateSchemaRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeCreateSchemaRequest(obj: PersonalizeCreateSchemaRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'schema': obj.schema,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeCreateSchemaResponse
 */
export interface PersonalizeCreateSchemaResponse {
  /**
   * @schema PersonalizeCreateSchemaResponse#schemaArn
   */
  readonly schemaArn?: string;

}

/**
 * Converts an object of type 'PersonalizeCreateSchemaResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeCreateSchemaResponse(obj: PersonalizeCreateSchemaResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'schemaArn': obj.schemaArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeCreateSolutionRequest
 */
export interface PersonalizeCreateSolutionRequest {
  /**
   * @schema PersonalizeCreateSolutionRequest#name
   */
  readonly name: string;

  /**
   * @schema PersonalizeCreateSolutionRequest#performHPO
   */
  readonly performHpo?: boolean;

  /**
   * @schema PersonalizeCreateSolutionRequest#performAutoML
   */
  readonly performAutoMl?: boolean;

  /**
   * @schema PersonalizeCreateSolutionRequest#recipeArn
   */
  readonly recipeArn?: string;

  /**
   * @schema PersonalizeCreateSolutionRequest#datasetGroupArn
   */
  readonly datasetGroupArn: string;

  /**
   * @schema PersonalizeCreateSolutionRequest#eventType
   */
  readonly eventType?: string;

  /**
   * @schema PersonalizeCreateSolutionRequest#solutionConfig
   */
  readonly solutionConfig?: PersonalizeSolutionConfig;

}

/**
 * Converts an object of type 'PersonalizeCreateSolutionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeCreateSolutionRequest(obj: PersonalizeCreateSolutionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'performHPO': obj.performHpo,
    'performAutoML': obj.performAutoMl,
    'recipeArn': obj.recipeArn,
    'datasetGroupArn': obj.datasetGroupArn,
    'eventType': obj.eventType,
    'solutionConfig': toJson_PersonalizeSolutionConfig(obj.solutionConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeCreateSolutionResponse
 */
export interface PersonalizeCreateSolutionResponse {
  /**
   * @schema PersonalizeCreateSolutionResponse#solutionArn
   */
  readonly solutionArn?: string;

}

/**
 * Converts an object of type 'PersonalizeCreateSolutionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeCreateSolutionResponse(obj: PersonalizeCreateSolutionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'solutionArn': obj.solutionArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeCreateSolutionVersionRequest
 */
export interface PersonalizeCreateSolutionVersionRequest {
  /**
   * @schema PersonalizeCreateSolutionVersionRequest#solutionArn
   */
  readonly solutionArn: string;

  /**
   * @schema PersonalizeCreateSolutionVersionRequest#trainingMode
   */
  readonly trainingMode?: string;

}

/**
 * Converts an object of type 'PersonalizeCreateSolutionVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeCreateSolutionVersionRequest(obj: PersonalizeCreateSolutionVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'solutionArn': obj.solutionArn,
    'trainingMode': obj.trainingMode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeCreateSolutionVersionResponse
 */
export interface PersonalizeCreateSolutionVersionResponse {
  /**
   * @schema PersonalizeCreateSolutionVersionResponse#solutionVersionArn
   */
  readonly solutionVersionArn?: string;

}

/**
 * Converts an object of type 'PersonalizeCreateSolutionVersionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeCreateSolutionVersionResponse(obj: PersonalizeCreateSolutionVersionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'solutionVersionArn': obj.solutionVersionArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeDeleteCampaignRequest
 */
export interface PersonalizeDeleteCampaignRequest {
  /**
   * @schema PersonalizeDeleteCampaignRequest#campaignArn
   */
  readonly campaignArn: string;

}

/**
 * Converts an object of type 'PersonalizeDeleteCampaignRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeDeleteCampaignRequest(obj: PersonalizeDeleteCampaignRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'campaignArn': obj.campaignArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeDeleteDatasetRequest
 */
export interface PersonalizeDeleteDatasetRequest {
  /**
   * @schema PersonalizeDeleteDatasetRequest#datasetArn
   */
  readonly datasetArn: string;

}

/**
 * Converts an object of type 'PersonalizeDeleteDatasetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeDeleteDatasetRequest(obj: PersonalizeDeleteDatasetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'datasetArn': obj.datasetArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeDeleteDatasetGroupRequest
 */
export interface PersonalizeDeleteDatasetGroupRequest {
  /**
   * @schema PersonalizeDeleteDatasetGroupRequest#datasetGroupArn
   */
  readonly datasetGroupArn: string;

}

/**
 * Converts an object of type 'PersonalizeDeleteDatasetGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeDeleteDatasetGroupRequest(obj: PersonalizeDeleteDatasetGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'datasetGroupArn': obj.datasetGroupArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeDeleteEventTrackerRequest
 */
export interface PersonalizeDeleteEventTrackerRequest {
  /**
   * @schema PersonalizeDeleteEventTrackerRequest#eventTrackerArn
   */
  readonly eventTrackerArn: string;

}

/**
 * Converts an object of type 'PersonalizeDeleteEventTrackerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeDeleteEventTrackerRequest(obj: PersonalizeDeleteEventTrackerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'eventTrackerArn': obj.eventTrackerArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeDeleteFilterRequest
 */
export interface PersonalizeDeleteFilterRequest {
  /**
   * @schema PersonalizeDeleteFilterRequest#filterArn
   */
  readonly filterArn: string;

}

/**
 * Converts an object of type 'PersonalizeDeleteFilterRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeDeleteFilterRequest(obj: PersonalizeDeleteFilterRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'filterArn': obj.filterArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeDeleteSchemaRequest
 */
export interface PersonalizeDeleteSchemaRequest {
  /**
   * @schema PersonalizeDeleteSchemaRequest#schemaArn
   */
  readonly schemaArn: string;

}

/**
 * Converts an object of type 'PersonalizeDeleteSchemaRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeDeleteSchemaRequest(obj: PersonalizeDeleteSchemaRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'schemaArn': obj.schemaArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeDeleteSolutionRequest
 */
export interface PersonalizeDeleteSolutionRequest {
  /**
   * @schema PersonalizeDeleteSolutionRequest#solutionArn
   */
  readonly solutionArn: string;

}

/**
 * Converts an object of type 'PersonalizeDeleteSolutionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeDeleteSolutionRequest(obj: PersonalizeDeleteSolutionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'solutionArn': obj.solutionArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeDescribeAlgorithmRequest
 */
export interface PersonalizeDescribeAlgorithmRequest {
  /**
   * @schema PersonalizeDescribeAlgorithmRequest#algorithmArn
   */
  readonly algorithmArn: string;

}

/**
 * Converts an object of type 'PersonalizeDescribeAlgorithmRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeDescribeAlgorithmRequest(obj: PersonalizeDescribeAlgorithmRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'algorithmArn': obj.algorithmArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeDescribeAlgorithmResponse
 */
export interface PersonalizeDescribeAlgorithmResponse {
  /**
   * @schema PersonalizeDescribeAlgorithmResponse#algorithm
   */
  readonly algorithm?: PersonalizeAlgorithm;

}

/**
 * Converts an object of type 'PersonalizeDescribeAlgorithmResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeDescribeAlgorithmResponse(obj: PersonalizeDescribeAlgorithmResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'algorithm': toJson_PersonalizeAlgorithm(obj.algorithm),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeDescribeBatchInferenceJobRequest
 */
export interface PersonalizeDescribeBatchInferenceJobRequest {
  /**
   * @schema PersonalizeDescribeBatchInferenceJobRequest#batchInferenceJobArn
   */
  readonly batchInferenceJobArn: string;

}

/**
 * Converts an object of type 'PersonalizeDescribeBatchInferenceJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeDescribeBatchInferenceJobRequest(obj: PersonalizeDescribeBatchInferenceJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'batchInferenceJobArn': obj.batchInferenceJobArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeDescribeBatchInferenceJobResponse
 */
export interface PersonalizeDescribeBatchInferenceJobResponse {
  /**
   * @schema PersonalizeDescribeBatchInferenceJobResponse#batchInferenceJob
   */
  readonly batchInferenceJob?: PersonalizeBatchInferenceJob;

}

/**
 * Converts an object of type 'PersonalizeDescribeBatchInferenceJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeDescribeBatchInferenceJobResponse(obj: PersonalizeDescribeBatchInferenceJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'batchInferenceJob': toJson_PersonalizeBatchInferenceJob(obj.batchInferenceJob),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeDescribeCampaignRequest
 */
export interface PersonalizeDescribeCampaignRequest {
  /**
   * @schema PersonalizeDescribeCampaignRequest#campaignArn
   */
  readonly campaignArn: string;

}

/**
 * Converts an object of type 'PersonalizeDescribeCampaignRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeDescribeCampaignRequest(obj: PersonalizeDescribeCampaignRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'campaignArn': obj.campaignArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeDescribeCampaignResponse
 */
export interface PersonalizeDescribeCampaignResponse {
  /**
   * @schema PersonalizeDescribeCampaignResponse#campaign
   */
  readonly campaign?: PersonalizeCampaign;

}

/**
 * Converts an object of type 'PersonalizeDescribeCampaignResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeDescribeCampaignResponse(obj: PersonalizeDescribeCampaignResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'campaign': toJson_PersonalizeCampaign(obj.campaign),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeDescribeDatasetRequest
 */
export interface PersonalizeDescribeDatasetRequest {
  /**
   * @schema PersonalizeDescribeDatasetRequest#datasetArn
   */
  readonly datasetArn: string;

}

/**
 * Converts an object of type 'PersonalizeDescribeDatasetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeDescribeDatasetRequest(obj: PersonalizeDescribeDatasetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'datasetArn': obj.datasetArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeDescribeDatasetResponse
 */
export interface PersonalizeDescribeDatasetResponse {
  /**
   * @schema PersonalizeDescribeDatasetResponse#dataset
   */
  readonly dataset?: PersonalizeDataset;

}

/**
 * Converts an object of type 'PersonalizeDescribeDatasetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeDescribeDatasetResponse(obj: PersonalizeDescribeDatasetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'dataset': toJson_PersonalizeDataset(obj.dataset),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeDescribeDatasetExportJobRequest
 */
export interface PersonalizeDescribeDatasetExportJobRequest {
  /**
   * @schema PersonalizeDescribeDatasetExportJobRequest#datasetExportJobArn
   */
  readonly datasetExportJobArn: string;

}

/**
 * Converts an object of type 'PersonalizeDescribeDatasetExportJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeDescribeDatasetExportJobRequest(obj: PersonalizeDescribeDatasetExportJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'datasetExportJobArn': obj.datasetExportJobArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeDescribeDatasetExportJobResponse
 */
export interface PersonalizeDescribeDatasetExportJobResponse {
  /**
   * @schema PersonalizeDescribeDatasetExportJobResponse#datasetExportJob
   */
  readonly datasetExportJob?: PersonalizeDatasetExportJob;

}

/**
 * Converts an object of type 'PersonalizeDescribeDatasetExportJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeDescribeDatasetExportJobResponse(obj: PersonalizeDescribeDatasetExportJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'datasetExportJob': toJson_PersonalizeDatasetExportJob(obj.datasetExportJob),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeDescribeDatasetGroupRequest
 */
export interface PersonalizeDescribeDatasetGroupRequest {
  /**
   * @schema PersonalizeDescribeDatasetGroupRequest#datasetGroupArn
   */
  readonly datasetGroupArn: string;

}

/**
 * Converts an object of type 'PersonalizeDescribeDatasetGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeDescribeDatasetGroupRequest(obj: PersonalizeDescribeDatasetGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'datasetGroupArn': obj.datasetGroupArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeDescribeDatasetGroupResponse
 */
export interface PersonalizeDescribeDatasetGroupResponse {
  /**
   * @schema PersonalizeDescribeDatasetGroupResponse#datasetGroup
   */
  readonly datasetGroup?: PersonalizeDatasetGroup;

}

/**
 * Converts an object of type 'PersonalizeDescribeDatasetGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeDescribeDatasetGroupResponse(obj: PersonalizeDescribeDatasetGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'datasetGroup': toJson_PersonalizeDatasetGroup(obj.datasetGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeDescribeDatasetImportJobRequest
 */
export interface PersonalizeDescribeDatasetImportJobRequest {
  /**
   * @schema PersonalizeDescribeDatasetImportJobRequest#datasetImportJobArn
   */
  readonly datasetImportJobArn: string;

}

/**
 * Converts an object of type 'PersonalizeDescribeDatasetImportJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeDescribeDatasetImportJobRequest(obj: PersonalizeDescribeDatasetImportJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'datasetImportJobArn': obj.datasetImportJobArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeDescribeDatasetImportJobResponse
 */
export interface PersonalizeDescribeDatasetImportJobResponse {
  /**
   * @schema PersonalizeDescribeDatasetImportJobResponse#datasetImportJob
   */
  readonly datasetImportJob?: PersonalizeDatasetImportJob;

}

/**
 * Converts an object of type 'PersonalizeDescribeDatasetImportJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeDescribeDatasetImportJobResponse(obj: PersonalizeDescribeDatasetImportJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'datasetImportJob': toJson_PersonalizeDatasetImportJob(obj.datasetImportJob),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeDescribeEventTrackerRequest
 */
export interface PersonalizeDescribeEventTrackerRequest {
  /**
   * @schema PersonalizeDescribeEventTrackerRequest#eventTrackerArn
   */
  readonly eventTrackerArn: string;

}

/**
 * Converts an object of type 'PersonalizeDescribeEventTrackerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeDescribeEventTrackerRequest(obj: PersonalizeDescribeEventTrackerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'eventTrackerArn': obj.eventTrackerArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeDescribeEventTrackerResponse
 */
export interface PersonalizeDescribeEventTrackerResponse {
  /**
   * @schema PersonalizeDescribeEventTrackerResponse#eventTracker
   */
  readonly eventTracker?: PersonalizeEventTracker;

}

/**
 * Converts an object of type 'PersonalizeDescribeEventTrackerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeDescribeEventTrackerResponse(obj: PersonalizeDescribeEventTrackerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'eventTracker': toJson_PersonalizeEventTracker(obj.eventTracker),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeDescribeFeatureTransformationRequest
 */
export interface PersonalizeDescribeFeatureTransformationRequest {
  /**
   * @schema PersonalizeDescribeFeatureTransformationRequest#featureTransformationArn
   */
  readonly featureTransformationArn: string;

}

/**
 * Converts an object of type 'PersonalizeDescribeFeatureTransformationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeDescribeFeatureTransformationRequest(obj: PersonalizeDescribeFeatureTransformationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'featureTransformationArn': obj.featureTransformationArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeDescribeFeatureTransformationResponse
 */
export interface PersonalizeDescribeFeatureTransformationResponse {
  /**
   * @schema PersonalizeDescribeFeatureTransformationResponse#featureTransformation
   */
  readonly featureTransformation?: PersonalizeFeatureTransformation;

}

/**
 * Converts an object of type 'PersonalizeDescribeFeatureTransformationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeDescribeFeatureTransformationResponse(obj: PersonalizeDescribeFeatureTransformationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'featureTransformation': toJson_PersonalizeFeatureTransformation(obj.featureTransformation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeDescribeFilterRequest
 */
export interface PersonalizeDescribeFilterRequest {
  /**
   * @schema PersonalizeDescribeFilterRequest#filterArn
   */
  readonly filterArn: string;

}

/**
 * Converts an object of type 'PersonalizeDescribeFilterRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeDescribeFilterRequest(obj: PersonalizeDescribeFilterRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'filterArn': obj.filterArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeDescribeFilterResponse
 */
export interface PersonalizeDescribeFilterResponse {
  /**
   * @schema PersonalizeDescribeFilterResponse#filter
   */
  readonly filter?: PersonalizeFilter;

}

/**
 * Converts an object of type 'PersonalizeDescribeFilterResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeDescribeFilterResponse(obj: PersonalizeDescribeFilterResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'filter': toJson_PersonalizeFilter(obj.filter),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeDescribeRecipeRequest
 */
export interface PersonalizeDescribeRecipeRequest {
  /**
   * @schema PersonalizeDescribeRecipeRequest#recipeArn
   */
  readonly recipeArn: string;

}

/**
 * Converts an object of type 'PersonalizeDescribeRecipeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeDescribeRecipeRequest(obj: PersonalizeDescribeRecipeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'recipeArn': obj.recipeArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeDescribeRecipeResponse
 */
export interface PersonalizeDescribeRecipeResponse {
  /**
   * @schema PersonalizeDescribeRecipeResponse#recipe
   */
  readonly recipe?: PersonalizeRecipe;

}

/**
 * Converts an object of type 'PersonalizeDescribeRecipeResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeDescribeRecipeResponse(obj: PersonalizeDescribeRecipeResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'recipe': toJson_PersonalizeRecipe(obj.recipe),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeDescribeSchemaRequest
 */
export interface PersonalizeDescribeSchemaRequest {
  /**
   * @schema PersonalizeDescribeSchemaRequest#schemaArn
   */
  readonly schemaArn: string;

}

/**
 * Converts an object of type 'PersonalizeDescribeSchemaRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeDescribeSchemaRequest(obj: PersonalizeDescribeSchemaRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'schemaArn': obj.schemaArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeDescribeSchemaResponse
 */
export interface PersonalizeDescribeSchemaResponse {
  /**
   * @schema PersonalizeDescribeSchemaResponse#schema
   */
  readonly schema?: PersonalizeDatasetSchema;

}

/**
 * Converts an object of type 'PersonalizeDescribeSchemaResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeDescribeSchemaResponse(obj: PersonalizeDescribeSchemaResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'schema': toJson_PersonalizeDatasetSchema(obj.schema),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeDescribeSolutionRequest
 */
export interface PersonalizeDescribeSolutionRequest {
  /**
   * @schema PersonalizeDescribeSolutionRequest#solutionArn
   */
  readonly solutionArn: string;

}

/**
 * Converts an object of type 'PersonalizeDescribeSolutionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeDescribeSolutionRequest(obj: PersonalizeDescribeSolutionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'solutionArn': obj.solutionArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeDescribeSolutionResponse
 */
export interface PersonalizeDescribeSolutionResponse {
  /**
   * @schema PersonalizeDescribeSolutionResponse#solution
   */
  readonly solution?: PersonalizeSolution;

}

/**
 * Converts an object of type 'PersonalizeDescribeSolutionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeDescribeSolutionResponse(obj: PersonalizeDescribeSolutionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'solution': toJson_PersonalizeSolution(obj.solution),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeDescribeSolutionVersionRequest
 */
export interface PersonalizeDescribeSolutionVersionRequest {
  /**
   * @schema PersonalizeDescribeSolutionVersionRequest#solutionVersionArn
   */
  readonly solutionVersionArn: string;

}

/**
 * Converts an object of type 'PersonalizeDescribeSolutionVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeDescribeSolutionVersionRequest(obj: PersonalizeDescribeSolutionVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'solutionVersionArn': obj.solutionVersionArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeDescribeSolutionVersionResponse
 */
export interface PersonalizeDescribeSolutionVersionResponse {
  /**
   * @schema PersonalizeDescribeSolutionVersionResponse#solutionVersion
   */
  readonly solutionVersion?: PersonalizeSolutionVersion;

}

/**
 * Converts an object of type 'PersonalizeDescribeSolutionVersionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeDescribeSolutionVersionResponse(obj: PersonalizeDescribeSolutionVersionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'solutionVersion': toJson_PersonalizeSolutionVersion(obj.solutionVersion),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeGetSolutionMetricsRequest
 */
export interface PersonalizeGetSolutionMetricsRequest {
  /**
   * @schema PersonalizeGetSolutionMetricsRequest#solutionVersionArn
   */
  readonly solutionVersionArn: string;

}

/**
 * Converts an object of type 'PersonalizeGetSolutionMetricsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeGetSolutionMetricsRequest(obj: PersonalizeGetSolutionMetricsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'solutionVersionArn': obj.solutionVersionArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeGetSolutionMetricsResponse
 */
export interface PersonalizeGetSolutionMetricsResponse {
  /**
   * @schema PersonalizeGetSolutionMetricsResponse#solutionVersionArn
   */
  readonly solutionVersionArn?: string;

  /**
   * @schema PersonalizeGetSolutionMetricsResponse#metrics
   */
  readonly metrics?: { [key: string]: number };

}

/**
 * Converts an object of type 'PersonalizeGetSolutionMetricsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeGetSolutionMetricsResponse(obj: PersonalizeGetSolutionMetricsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'solutionVersionArn': obj.solutionVersionArn,
    'metrics': ((obj.metrics) === undefined) ? undefined : (Object.entries(obj.metrics).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeListBatchInferenceJobsRequest
 */
export interface PersonalizeListBatchInferenceJobsRequest {
  /**
   * @schema PersonalizeListBatchInferenceJobsRequest#solutionVersionArn
   */
  readonly solutionVersionArn?: string;

  /**
   * @schema PersonalizeListBatchInferenceJobsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema PersonalizeListBatchInferenceJobsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'PersonalizeListBatchInferenceJobsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeListBatchInferenceJobsRequest(obj: PersonalizeListBatchInferenceJobsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'solutionVersionArn': obj.solutionVersionArn,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeListBatchInferenceJobsResponse
 */
export interface PersonalizeListBatchInferenceJobsResponse {
  /**
   * @schema PersonalizeListBatchInferenceJobsResponse#batchInferenceJobs
   */
  readonly batchInferenceJobs?: PersonalizeBatchInferenceJobSummary[];

  /**
   * @schema PersonalizeListBatchInferenceJobsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'PersonalizeListBatchInferenceJobsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeListBatchInferenceJobsResponse(obj: PersonalizeListBatchInferenceJobsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'batchInferenceJobs': obj.batchInferenceJobs?.map(y => toJson_PersonalizeBatchInferenceJobSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeListCampaignsRequest
 */
export interface PersonalizeListCampaignsRequest {
  /**
   * @schema PersonalizeListCampaignsRequest#solutionArn
   */
  readonly solutionArn?: string;

  /**
   * @schema PersonalizeListCampaignsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema PersonalizeListCampaignsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'PersonalizeListCampaignsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeListCampaignsRequest(obj: PersonalizeListCampaignsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'solutionArn': obj.solutionArn,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeListCampaignsResponse
 */
export interface PersonalizeListCampaignsResponse {
  /**
   * @schema PersonalizeListCampaignsResponse#campaigns
   */
  readonly campaigns?: PersonalizeCampaignSummary[];

  /**
   * @schema PersonalizeListCampaignsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'PersonalizeListCampaignsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeListCampaignsResponse(obj: PersonalizeListCampaignsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'campaigns': obj.campaigns?.map(y => toJson_PersonalizeCampaignSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeListDatasetExportJobsRequest
 */
export interface PersonalizeListDatasetExportJobsRequest {
  /**
   * @schema PersonalizeListDatasetExportJobsRequest#datasetArn
   */
  readonly datasetArn?: string;

  /**
   * @schema PersonalizeListDatasetExportJobsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema PersonalizeListDatasetExportJobsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'PersonalizeListDatasetExportJobsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeListDatasetExportJobsRequest(obj: PersonalizeListDatasetExportJobsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'datasetArn': obj.datasetArn,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeListDatasetExportJobsResponse
 */
export interface PersonalizeListDatasetExportJobsResponse {
  /**
   * @schema PersonalizeListDatasetExportJobsResponse#datasetExportJobs
   */
  readonly datasetExportJobs?: PersonalizeDatasetExportJobSummary[];

  /**
   * @schema PersonalizeListDatasetExportJobsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'PersonalizeListDatasetExportJobsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeListDatasetExportJobsResponse(obj: PersonalizeListDatasetExportJobsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'datasetExportJobs': obj.datasetExportJobs?.map(y => toJson_PersonalizeDatasetExportJobSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeListDatasetGroupsRequest
 */
export interface PersonalizeListDatasetGroupsRequest {
  /**
   * @schema PersonalizeListDatasetGroupsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema PersonalizeListDatasetGroupsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'PersonalizeListDatasetGroupsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeListDatasetGroupsRequest(obj: PersonalizeListDatasetGroupsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeListDatasetGroupsResponse
 */
export interface PersonalizeListDatasetGroupsResponse {
  /**
   * @schema PersonalizeListDatasetGroupsResponse#datasetGroups
   */
  readonly datasetGroups?: PersonalizeDatasetGroupSummary[];

  /**
   * @schema PersonalizeListDatasetGroupsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'PersonalizeListDatasetGroupsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeListDatasetGroupsResponse(obj: PersonalizeListDatasetGroupsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'datasetGroups': obj.datasetGroups?.map(y => toJson_PersonalizeDatasetGroupSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeListDatasetImportJobsRequest
 */
export interface PersonalizeListDatasetImportJobsRequest {
  /**
   * @schema PersonalizeListDatasetImportJobsRequest#datasetArn
   */
  readonly datasetArn?: string;

  /**
   * @schema PersonalizeListDatasetImportJobsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema PersonalizeListDatasetImportJobsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'PersonalizeListDatasetImportJobsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeListDatasetImportJobsRequest(obj: PersonalizeListDatasetImportJobsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'datasetArn': obj.datasetArn,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeListDatasetImportJobsResponse
 */
export interface PersonalizeListDatasetImportJobsResponse {
  /**
   * @schema PersonalizeListDatasetImportJobsResponse#datasetImportJobs
   */
  readonly datasetImportJobs?: PersonalizeDatasetImportJobSummary[];

  /**
   * @schema PersonalizeListDatasetImportJobsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'PersonalizeListDatasetImportJobsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeListDatasetImportJobsResponse(obj: PersonalizeListDatasetImportJobsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'datasetImportJobs': obj.datasetImportJobs?.map(y => toJson_PersonalizeDatasetImportJobSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeListDatasetsRequest
 */
export interface PersonalizeListDatasetsRequest {
  /**
   * @schema PersonalizeListDatasetsRequest#datasetGroupArn
   */
  readonly datasetGroupArn?: string;

  /**
   * @schema PersonalizeListDatasetsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema PersonalizeListDatasetsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'PersonalizeListDatasetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeListDatasetsRequest(obj: PersonalizeListDatasetsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'datasetGroupArn': obj.datasetGroupArn,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeListDatasetsResponse
 */
export interface PersonalizeListDatasetsResponse {
  /**
   * @schema PersonalizeListDatasetsResponse#datasets
   */
  readonly datasets?: PersonalizeDatasetSummary[];

  /**
   * @schema PersonalizeListDatasetsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'PersonalizeListDatasetsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeListDatasetsResponse(obj: PersonalizeListDatasetsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'datasets': obj.datasets?.map(y => toJson_PersonalizeDatasetSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeListEventTrackersRequest
 */
export interface PersonalizeListEventTrackersRequest {
  /**
   * @schema PersonalizeListEventTrackersRequest#datasetGroupArn
   */
  readonly datasetGroupArn?: string;

  /**
   * @schema PersonalizeListEventTrackersRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema PersonalizeListEventTrackersRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'PersonalizeListEventTrackersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeListEventTrackersRequest(obj: PersonalizeListEventTrackersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'datasetGroupArn': obj.datasetGroupArn,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeListEventTrackersResponse
 */
export interface PersonalizeListEventTrackersResponse {
  /**
   * @schema PersonalizeListEventTrackersResponse#eventTrackers
   */
  readonly eventTrackers?: PersonalizeEventTrackerSummary[];

  /**
   * @schema PersonalizeListEventTrackersResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'PersonalizeListEventTrackersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeListEventTrackersResponse(obj: PersonalizeListEventTrackersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'eventTrackers': obj.eventTrackers?.map(y => toJson_PersonalizeEventTrackerSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeListFiltersRequest
 */
export interface PersonalizeListFiltersRequest {
  /**
   * @schema PersonalizeListFiltersRequest#datasetGroupArn
   */
  readonly datasetGroupArn?: string;

  /**
   * @schema PersonalizeListFiltersRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema PersonalizeListFiltersRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'PersonalizeListFiltersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeListFiltersRequest(obj: PersonalizeListFiltersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'datasetGroupArn': obj.datasetGroupArn,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeListFiltersResponse
 */
export interface PersonalizeListFiltersResponse {
  /**
   * @schema PersonalizeListFiltersResponse#Filters
   */
  readonly filters?: PersonalizeFilterSummary[];

  /**
   * @schema PersonalizeListFiltersResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'PersonalizeListFiltersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeListFiltersResponse(obj: PersonalizeListFiltersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Filters': obj.filters?.map(y => toJson_PersonalizeFilterSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeListRecipesRequest
 */
export interface PersonalizeListRecipesRequest {
  /**
   * @schema PersonalizeListRecipesRequest#recipeProvider
   */
  readonly recipeProvider?: string;

  /**
   * @schema PersonalizeListRecipesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema PersonalizeListRecipesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'PersonalizeListRecipesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeListRecipesRequest(obj: PersonalizeListRecipesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'recipeProvider': obj.recipeProvider,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeListRecipesResponse
 */
export interface PersonalizeListRecipesResponse {
  /**
   * @schema PersonalizeListRecipesResponse#recipes
   */
  readonly recipes?: PersonalizeRecipeSummary[];

  /**
   * @schema PersonalizeListRecipesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'PersonalizeListRecipesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeListRecipesResponse(obj: PersonalizeListRecipesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'recipes': obj.recipes?.map(y => toJson_PersonalizeRecipeSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeListSchemasRequest
 */
export interface PersonalizeListSchemasRequest {
  /**
   * @schema PersonalizeListSchemasRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema PersonalizeListSchemasRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'PersonalizeListSchemasRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeListSchemasRequest(obj: PersonalizeListSchemasRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeListSchemasResponse
 */
export interface PersonalizeListSchemasResponse {
  /**
   * @schema PersonalizeListSchemasResponse#schemas
   */
  readonly schemas?: PersonalizeDatasetSchemaSummary[];

  /**
   * @schema PersonalizeListSchemasResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'PersonalizeListSchemasResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeListSchemasResponse(obj: PersonalizeListSchemasResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'schemas': obj.schemas?.map(y => toJson_PersonalizeDatasetSchemaSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeListSolutionVersionsRequest
 */
export interface PersonalizeListSolutionVersionsRequest {
  /**
   * @schema PersonalizeListSolutionVersionsRequest#solutionArn
   */
  readonly solutionArn?: string;

  /**
   * @schema PersonalizeListSolutionVersionsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema PersonalizeListSolutionVersionsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'PersonalizeListSolutionVersionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeListSolutionVersionsRequest(obj: PersonalizeListSolutionVersionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'solutionArn': obj.solutionArn,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeListSolutionVersionsResponse
 */
export interface PersonalizeListSolutionVersionsResponse {
  /**
   * @schema PersonalizeListSolutionVersionsResponse#solutionVersions
   */
  readonly solutionVersions?: PersonalizeSolutionVersionSummary[];

  /**
   * @schema PersonalizeListSolutionVersionsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'PersonalizeListSolutionVersionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeListSolutionVersionsResponse(obj: PersonalizeListSolutionVersionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'solutionVersions': obj.solutionVersions?.map(y => toJson_PersonalizeSolutionVersionSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeListSolutionsRequest
 */
export interface PersonalizeListSolutionsRequest {
  /**
   * @schema PersonalizeListSolutionsRequest#datasetGroupArn
   */
  readonly datasetGroupArn?: string;

  /**
   * @schema PersonalizeListSolutionsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema PersonalizeListSolutionsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'PersonalizeListSolutionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeListSolutionsRequest(obj: PersonalizeListSolutionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'datasetGroupArn': obj.datasetGroupArn,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeListSolutionsResponse
 */
export interface PersonalizeListSolutionsResponse {
  /**
   * @schema PersonalizeListSolutionsResponse#solutions
   */
  readonly solutions?: PersonalizeSolutionSummary[];

  /**
   * @schema PersonalizeListSolutionsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'PersonalizeListSolutionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeListSolutionsResponse(obj: PersonalizeListSolutionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'solutions': obj.solutions?.map(y => toJson_PersonalizeSolutionSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeStopSolutionVersionCreationRequest
 */
export interface PersonalizeStopSolutionVersionCreationRequest {
  /**
   * @schema PersonalizeStopSolutionVersionCreationRequest#solutionVersionArn
   */
  readonly solutionVersionArn: string;

}

/**
 * Converts an object of type 'PersonalizeStopSolutionVersionCreationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeStopSolutionVersionCreationRequest(obj: PersonalizeStopSolutionVersionCreationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'solutionVersionArn': obj.solutionVersionArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeUpdateCampaignRequest
 */
export interface PersonalizeUpdateCampaignRequest {
  /**
   * @schema PersonalizeUpdateCampaignRequest#campaignArn
   */
  readonly campaignArn: string;

  /**
   * @schema PersonalizeUpdateCampaignRequest#solutionVersionArn
   */
  readonly solutionVersionArn?: string;

  /**
   * @schema PersonalizeUpdateCampaignRequest#minProvisionedTPS
   */
  readonly minProvisionedTps?: number;

  /**
   * @schema PersonalizeUpdateCampaignRequest#campaignConfig
   */
  readonly campaignConfig?: PersonalizeCampaignConfig;

}

/**
 * Converts an object of type 'PersonalizeUpdateCampaignRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeUpdateCampaignRequest(obj: PersonalizeUpdateCampaignRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'campaignArn': obj.campaignArn,
    'solutionVersionArn': obj.solutionVersionArn,
    'minProvisionedTPS': obj.minProvisionedTps,
    'campaignConfig': toJson_PersonalizeCampaignConfig(obj.campaignConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeUpdateCampaignResponse
 */
export interface PersonalizeUpdateCampaignResponse {
  /**
   * @schema PersonalizeUpdateCampaignResponse#campaignArn
   */
  readonly campaignArn?: string;

}

/**
 * Converts an object of type 'PersonalizeUpdateCampaignResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeUpdateCampaignResponse(obj: PersonalizeUpdateCampaignResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'campaignArn': obj.campaignArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeBatchInferenceJobInput
 */
export interface PersonalizeBatchInferenceJobInput {
  /**
   * @schema PersonalizeBatchInferenceJobInput#s3DataSource
   */
  readonly s3DataSource: PersonalizeS3DataConfig;

}

/**
 * Converts an object of type 'PersonalizeBatchInferenceJobInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeBatchInferenceJobInput(obj: PersonalizeBatchInferenceJobInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    's3DataSource': toJson_PersonalizeS3DataConfig(obj.s3DataSource),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeBatchInferenceJobOutput
 */
export interface PersonalizeBatchInferenceJobOutput {
  /**
   * @schema PersonalizeBatchInferenceJobOutput#s3DataDestination
   */
  readonly s3DataDestination: PersonalizeS3DataConfig;

}

/**
 * Converts an object of type 'PersonalizeBatchInferenceJobOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeBatchInferenceJobOutput(obj: PersonalizeBatchInferenceJobOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    's3DataDestination': toJson_PersonalizeS3DataConfig(obj.s3DataDestination),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeBatchInferenceJobConfig
 */
export interface PersonalizeBatchInferenceJobConfig {
  /**
   * @schema PersonalizeBatchInferenceJobConfig#itemExplorationConfig
   */
  readonly itemExplorationConfig?: { [key: string]: string };

}

/**
 * Converts an object of type 'PersonalizeBatchInferenceJobConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeBatchInferenceJobConfig(obj: PersonalizeBatchInferenceJobConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'itemExplorationConfig': ((obj.itemExplorationConfig) === undefined) ? undefined : (Object.entries(obj.itemExplorationConfig).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeCampaignConfig
 */
export interface PersonalizeCampaignConfig {
  /**
   * @schema PersonalizeCampaignConfig#itemExplorationConfig
   */
  readonly itemExplorationConfig?: { [key: string]: string };

}

/**
 * Converts an object of type 'PersonalizeCampaignConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeCampaignConfig(obj: PersonalizeCampaignConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'itemExplorationConfig': ((obj.itemExplorationConfig) === undefined) ? undefined : (Object.entries(obj.itemExplorationConfig).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeDatasetExportJobOutput
 */
export interface PersonalizeDatasetExportJobOutput {
  /**
   * @schema PersonalizeDatasetExportJobOutput#s3DataDestination
   */
  readonly s3DataDestination: PersonalizeS3DataConfig;

}

/**
 * Converts an object of type 'PersonalizeDatasetExportJobOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeDatasetExportJobOutput(obj: PersonalizeDatasetExportJobOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    's3DataDestination': toJson_PersonalizeS3DataConfig(obj.s3DataDestination),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeDataSource
 */
export interface PersonalizeDataSource {
  /**
   * @schema PersonalizeDataSource#dataLocation
   */
  readonly dataLocation?: string;

}

/**
 * Converts an object of type 'PersonalizeDataSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeDataSource(obj: PersonalizeDataSource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'dataLocation': obj.dataLocation,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeSolutionConfig
 */
export interface PersonalizeSolutionConfig {
  /**
   * @schema PersonalizeSolutionConfig#eventValueThreshold
   */
  readonly eventValueThreshold?: string;

  /**
   * @schema PersonalizeSolutionConfig#hpoConfig
   */
  readonly hpoConfig?: PersonalizeHpoConfig;

  /**
   * @schema PersonalizeSolutionConfig#algorithmHyperParameters
   */
  readonly algorithmHyperParameters?: { [key: string]: string };

  /**
   * @schema PersonalizeSolutionConfig#featureTransformationParameters
   */
  readonly featureTransformationParameters?: { [key: string]: string };

  /**
   * @schema PersonalizeSolutionConfig#autoMLConfig
   */
  readonly autoMlConfig?: PersonalizeAutoMlConfig;

  /**
   * @schema PersonalizeSolutionConfig#optimizationObjective
   */
  readonly optimizationObjective?: PersonalizeOptimizationObjective;

}

/**
 * Converts an object of type 'PersonalizeSolutionConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeSolutionConfig(obj: PersonalizeSolutionConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'eventValueThreshold': obj.eventValueThreshold,
    'hpoConfig': toJson_PersonalizeHpoConfig(obj.hpoConfig),
    'algorithmHyperParameters': ((obj.algorithmHyperParameters) === undefined) ? undefined : (Object.entries(obj.algorithmHyperParameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'featureTransformationParameters': ((obj.featureTransformationParameters) === undefined) ? undefined : (Object.entries(obj.featureTransformationParameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'autoMLConfig': toJson_PersonalizeAutoMlConfig(obj.autoMlConfig),
    'optimizationObjective': toJson_PersonalizeOptimizationObjective(obj.optimizationObjective),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeAlgorithm
 */
export interface PersonalizeAlgorithm {
  /**
   * @schema PersonalizeAlgorithm#name
   */
  readonly name?: string;

  /**
   * @schema PersonalizeAlgorithm#algorithmArn
   */
  readonly algorithmArn?: string;

  /**
   * @schema PersonalizeAlgorithm#algorithmImage
   */
  readonly algorithmImage?: PersonalizeAlgorithmImage;

  /**
   * @schema PersonalizeAlgorithm#defaultHyperParameters
   */
  readonly defaultHyperParameters?: { [key: string]: string };

  /**
   * @schema PersonalizeAlgorithm#defaultHyperParameterRanges
   */
  readonly defaultHyperParameterRanges?: PersonalizeDefaultHyperParameterRanges;

  /**
   * @schema PersonalizeAlgorithm#defaultResourceConfig
   */
  readonly defaultResourceConfig?: { [key: string]: string };

  /**
   * @schema PersonalizeAlgorithm#trainingInputMode
   */
  readonly trainingInputMode?: string;

  /**
   * @schema PersonalizeAlgorithm#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema PersonalizeAlgorithm#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema PersonalizeAlgorithm#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

}

/**
 * Converts an object of type 'PersonalizeAlgorithm' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeAlgorithm(obj: PersonalizeAlgorithm | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'algorithmArn': obj.algorithmArn,
    'algorithmImage': toJson_PersonalizeAlgorithmImage(obj.algorithmImage),
    'defaultHyperParameters': ((obj.defaultHyperParameters) === undefined) ? undefined : (Object.entries(obj.defaultHyperParameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'defaultHyperParameterRanges': toJson_PersonalizeDefaultHyperParameterRanges(obj.defaultHyperParameterRanges),
    'defaultResourceConfig': ((obj.defaultResourceConfig) === undefined) ? undefined : (Object.entries(obj.defaultResourceConfig).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'trainingInputMode': obj.trainingInputMode,
    'roleArn': obj.roleArn,
    'creationDateTime': obj.creationDateTime,
    'lastUpdatedDateTime': obj.lastUpdatedDateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeBatchInferenceJob
 */
export interface PersonalizeBatchInferenceJob {
  /**
   * @schema PersonalizeBatchInferenceJob#jobName
   */
  readonly jobName?: string;

  /**
   * @schema PersonalizeBatchInferenceJob#batchInferenceJobArn
   */
  readonly batchInferenceJobArn?: string;

  /**
   * @schema PersonalizeBatchInferenceJob#filterArn
   */
  readonly filterArn?: string;

  /**
   * @schema PersonalizeBatchInferenceJob#failureReason
   */
  readonly failureReason?: string;

  /**
   * @schema PersonalizeBatchInferenceJob#solutionVersionArn
   */
  readonly solutionVersionArn?: string;

  /**
   * @schema PersonalizeBatchInferenceJob#numResults
   */
  readonly numResults?: number;

  /**
   * @schema PersonalizeBatchInferenceJob#jobInput
   */
  readonly jobInput?: PersonalizeBatchInferenceJobInput;

  /**
   * @schema PersonalizeBatchInferenceJob#jobOutput
   */
  readonly jobOutput?: PersonalizeBatchInferenceJobOutput;

  /**
   * @schema PersonalizeBatchInferenceJob#batchInferenceJobConfig
   */
  readonly batchInferenceJobConfig?: PersonalizeBatchInferenceJobConfig;

  /**
   * @schema PersonalizeBatchInferenceJob#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema PersonalizeBatchInferenceJob#status
   */
  readonly status?: string;

  /**
   * @schema PersonalizeBatchInferenceJob#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema PersonalizeBatchInferenceJob#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

}

/**
 * Converts an object of type 'PersonalizeBatchInferenceJob' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeBatchInferenceJob(obj: PersonalizeBatchInferenceJob | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobName': obj.jobName,
    'batchInferenceJobArn': obj.batchInferenceJobArn,
    'filterArn': obj.filterArn,
    'failureReason': obj.failureReason,
    'solutionVersionArn': obj.solutionVersionArn,
    'numResults': obj.numResults,
    'jobInput': toJson_PersonalizeBatchInferenceJobInput(obj.jobInput),
    'jobOutput': toJson_PersonalizeBatchInferenceJobOutput(obj.jobOutput),
    'batchInferenceJobConfig': toJson_PersonalizeBatchInferenceJobConfig(obj.batchInferenceJobConfig),
    'roleArn': obj.roleArn,
    'status': obj.status,
    'creationDateTime': obj.creationDateTime,
    'lastUpdatedDateTime': obj.lastUpdatedDateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeCampaign
 */
export interface PersonalizeCampaign {
  /**
   * @schema PersonalizeCampaign#name
   */
  readonly name?: string;

  /**
   * @schema PersonalizeCampaign#campaignArn
   */
  readonly campaignArn?: string;

  /**
   * @schema PersonalizeCampaign#solutionVersionArn
   */
  readonly solutionVersionArn?: string;

  /**
   * @schema PersonalizeCampaign#minProvisionedTPS
   */
  readonly minProvisionedTps?: number;

  /**
   * @schema PersonalizeCampaign#campaignConfig
   */
  readonly campaignConfig?: PersonalizeCampaignConfig;

  /**
   * @schema PersonalizeCampaign#status
   */
  readonly status?: string;

  /**
   * @schema PersonalizeCampaign#failureReason
   */
  readonly failureReason?: string;

  /**
   * @schema PersonalizeCampaign#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema PersonalizeCampaign#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

  /**
   * @schema PersonalizeCampaign#latestCampaignUpdate
   */
  readonly latestCampaignUpdate?: PersonalizeCampaignUpdateSummary;

}

/**
 * Converts an object of type 'PersonalizeCampaign' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeCampaign(obj: PersonalizeCampaign | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'campaignArn': obj.campaignArn,
    'solutionVersionArn': obj.solutionVersionArn,
    'minProvisionedTPS': obj.minProvisionedTps,
    'campaignConfig': toJson_PersonalizeCampaignConfig(obj.campaignConfig),
    'status': obj.status,
    'failureReason': obj.failureReason,
    'creationDateTime': obj.creationDateTime,
    'lastUpdatedDateTime': obj.lastUpdatedDateTime,
    'latestCampaignUpdate': toJson_PersonalizeCampaignUpdateSummary(obj.latestCampaignUpdate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeDataset
 */
export interface PersonalizeDataset {
  /**
   * @schema PersonalizeDataset#name
   */
  readonly name?: string;

  /**
   * @schema PersonalizeDataset#datasetArn
   */
  readonly datasetArn?: string;

  /**
   * @schema PersonalizeDataset#datasetGroupArn
   */
  readonly datasetGroupArn?: string;

  /**
   * @schema PersonalizeDataset#datasetType
   */
  readonly datasetType?: string;

  /**
   * @schema PersonalizeDataset#schemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema PersonalizeDataset#status
   */
  readonly status?: string;

  /**
   * @schema PersonalizeDataset#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema PersonalizeDataset#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

}

/**
 * Converts an object of type 'PersonalizeDataset' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeDataset(obj: PersonalizeDataset | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'datasetArn': obj.datasetArn,
    'datasetGroupArn': obj.datasetGroupArn,
    'datasetType': obj.datasetType,
    'schemaArn': obj.schemaArn,
    'status': obj.status,
    'creationDateTime': obj.creationDateTime,
    'lastUpdatedDateTime': obj.lastUpdatedDateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeDatasetExportJob
 */
export interface PersonalizeDatasetExportJob {
  /**
   * @schema PersonalizeDatasetExportJob#jobName
   */
  readonly jobName?: string;

  /**
   * @schema PersonalizeDatasetExportJob#datasetExportJobArn
   */
  readonly datasetExportJobArn?: string;

  /**
   * @schema PersonalizeDatasetExportJob#datasetArn
   */
  readonly datasetArn?: string;

  /**
   * @schema PersonalizeDatasetExportJob#ingestionMode
   */
  readonly ingestionMode?: string;

  /**
   * @schema PersonalizeDatasetExportJob#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema PersonalizeDatasetExportJob#status
   */
  readonly status?: string;

  /**
   * @schema PersonalizeDatasetExportJob#jobOutput
   */
  readonly jobOutput?: PersonalizeDatasetExportJobOutput;

  /**
   * @schema PersonalizeDatasetExportJob#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema PersonalizeDatasetExportJob#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

  /**
   * @schema PersonalizeDatasetExportJob#failureReason
   */
  readonly failureReason?: string;

}

/**
 * Converts an object of type 'PersonalizeDatasetExportJob' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeDatasetExportJob(obj: PersonalizeDatasetExportJob | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobName': obj.jobName,
    'datasetExportJobArn': obj.datasetExportJobArn,
    'datasetArn': obj.datasetArn,
    'ingestionMode': obj.ingestionMode,
    'roleArn': obj.roleArn,
    'status': obj.status,
    'jobOutput': toJson_PersonalizeDatasetExportJobOutput(obj.jobOutput),
    'creationDateTime': obj.creationDateTime,
    'lastUpdatedDateTime': obj.lastUpdatedDateTime,
    'failureReason': obj.failureReason,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeDatasetGroup
 */
export interface PersonalizeDatasetGroup {
  /**
   * @schema PersonalizeDatasetGroup#name
   */
  readonly name?: string;

  /**
   * @schema PersonalizeDatasetGroup#datasetGroupArn
   */
  readonly datasetGroupArn?: string;

  /**
   * @schema PersonalizeDatasetGroup#status
   */
  readonly status?: string;

  /**
   * @schema PersonalizeDatasetGroup#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema PersonalizeDatasetGroup#kmsKeyArn
   */
  readonly kmsKeyArn?: string;

  /**
   * @schema PersonalizeDatasetGroup#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema PersonalizeDatasetGroup#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

  /**
   * @schema PersonalizeDatasetGroup#failureReason
   */
  readonly failureReason?: string;

}

/**
 * Converts an object of type 'PersonalizeDatasetGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeDatasetGroup(obj: PersonalizeDatasetGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'datasetGroupArn': obj.datasetGroupArn,
    'status': obj.status,
    'roleArn': obj.roleArn,
    'kmsKeyArn': obj.kmsKeyArn,
    'creationDateTime': obj.creationDateTime,
    'lastUpdatedDateTime': obj.lastUpdatedDateTime,
    'failureReason': obj.failureReason,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeDatasetImportJob
 */
export interface PersonalizeDatasetImportJob {
  /**
   * @schema PersonalizeDatasetImportJob#jobName
   */
  readonly jobName?: string;

  /**
   * @schema PersonalizeDatasetImportJob#datasetImportJobArn
   */
  readonly datasetImportJobArn?: string;

  /**
   * @schema PersonalizeDatasetImportJob#datasetArn
   */
  readonly datasetArn?: string;

  /**
   * @schema PersonalizeDatasetImportJob#dataSource
   */
  readonly dataSource?: PersonalizeDataSource;

  /**
   * @schema PersonalizeDatasetImportJob#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema PersonalizeDatasetImportJob#status
   */
  readonly status?: string;

  /**
   * @schema PersonalizeDatasetImportJob#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema PersonalizeDatasetImportJob#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

  /**
   * @schema PersonalizeDatasetImportJob#failureReason
   */
  readonly failureReason?: string;

}

/**
 * Converts an object of type 'PersonalizeDatasetImportJob' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeDatasetImportJob(obj: PersonalizeDatasetImportJob | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobName': obj.jobName,
    'datasetImportJobArn': obj.datasetImportJobArn,
    'datasetArn': obj.datasetArn,
    'dataSource': toJson_PersonalizeDataSource(obj.dataSource),
    'roleArn': obj.roleArn,
    'status': obj.status,
    'creationDateTime': obj.creationDateTime,
    'lastUpdatedDateTime': obj.lastUpdatedDateTime,
    'failureReason': obj.failureReason,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeEventTracker
 */
export interface PersonalizeEventTracker {
  /**
   * @schema PersonalizeEventTracker#name
   */
  readonly name?: string;

  /**
   * @schema PersonalizeEventTracker#eventTrackerArn
   */
  readonly eventTrackerArn?: string;

  /**
   * @schema PersonalizeEventTracker#accountId
   */
  readonly accountId?: string;

  /**
   * @schema PersonalizeEventTracker#trackingId
   */
  readonly trackingId?: string;

  /**
   * @schema PersonalizeEventTracker#datasetGroupArn
   */
  readonly datasetGroupArn?: string;

  /**
   * @schema PersonalizeEventTracker#status
   */
  readonly status?: string;

  /**
   * @schema PersonalizeEventTracker#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema PersonalizeEventTracker#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

}

/**
 * Converts an object of type 'PersonalizeEventTracker' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeEventTracker(obj: PersonalizeEventTracker | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'eventTrackerArn': obj.eventTrackerArn,
    'accountId': obj.accountId,
    'trackingId': obj.trackingId,
    'datasetGroupArn': obj.datasetGroupArn,
    'status': obj.status,
    'creationDateTime': obj.creationDateTime,
    'lastUpdatedDateTime': obj.lastUpdatedDateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeFeatureTransformation
 */
export interface PersonalizeFeatureTransformation {
  /**
   * @schema PersonalizeFeatureTransformation#name
   */
  readonly name?: string;

  /**
   * @schema PersonalizeFeatureTransformation#featureTransformationArn
   */
  readonly featureTransformationArn?: string;

  /**
   * @schema PersonalizeFeatureTransformation#defaultParameters
   */
  readonly defaultParameters?: { [key: string]: string };

  /**
   * @schema PersonalizeFeatureTransformation#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema PersonalizeFeatureTransformation#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

  /**
   * @schema PersonalizeFeatureTransformation#status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'PersonalizeFeatureTransformation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeFeatureTransformation(obj: PersonalizeFeatureTransformation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'featureTransformationArn': obj.featureTransformationArn,
    'defaultParameters': ((obj.defaultParameters) === undefined) ? undefined : (Object.entries(obj.defaultParameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'creationDateTime': obj.creationDateTime,
    'lastUpdatedDateTime': obj.lastUpdatedDateTime,
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeFilter
 */
export interface PersonalizeFilter {
  /**
   * @schema PersonalizeFilter#name
   */
  readonly name?: string;

  /**
   * @schema PersonalizeFilter#filterArn
   */
  readonly filterArn?: string;

  /**
   * @schema PersonalizeFilter#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema PersonalizeFilter#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

  /**
   * @schema PersonalizeFilter#datasetGroupArn
   */
  readonly datasetGroupArn?: string;

  /**
   * @schema PersonalizeFilter#failureReason
   */
  readonly failureReason?: string;

  /**
   * @schema PersonalizeFilter#filterExpression
   */
  readonly filterExpression?: string;

  /**
   * @schema PersonalizeFilter#status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'PersonalizeFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeFilter(obj: PersonalizeFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'filterArn': obj.filterArn,
    'creationDateTime': obj.creationDateTime,
    'lastUpdatedDateTime': obj.lastUpdatedDateTime,
    'datasetGroupArn': obj.datasetGroupArn,
    'failureReason': obj.failureReason,
    'filterExpression': obj.filterExpression,
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeRecipe
 */
export interface PersonalizeRecipe {
  /**
   * @schema PersonalizeRecipe#name
   */
  readonly name?: string;

  /**
   * @schema PersonalizeRecipe#recipeArn
   */
  readonly recipeArn?: string;

  /**
   * @schema PersonalizeRecipe#algorithmArn
   */
  readonly algorithmArn?: string;

  /**
   * @schema PersonalizeRecipe#featureTransformationArn
   */
  readonly featureTransformationArn?: string;

  /**
   * @schema PersonalizeRecipe#status
   */
  readonly status?: string;

  /**
   * @schema PersonalizeRecipe#description
   */
  readonly description?: string;

  /**
   * @schema PersonalizeRecipe#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema PersonalizeRecipe#recipeType
   */
  readonly recipeType?: string;

  /**
   * @schema PersonalizeRecipe#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

}

/**
 * Converts an object of type 'PersonalizeRecipe' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeRecipe(obj: PersonalizeRecipe | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'recipeArn': obj.recipeArn,
    'algorithmArn': obj.algorithmArn,
    'featureTransformationArn': obj.featureTransformationArn,
    'status': obj.status,
    'description': obj.description,
    'creationDateTime': obj.creationDateTime,
    'recipeType': obj.recipeType,
    'lastUpdatedDateTime': obj.lastUpdatedDateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeDatasetSchema
 */
export interface PersonalizeDatasetSchema {
  /**
   * @schema PersonalizeDatasetSchema#name
   */
  readonly name?: string;

  /**
   * @schema PersonalizeDatasetSchema#schemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema PersonalizeDatasetSchema#schema
   */
  readonly schema?: string;

  /**
   * @schema PersonalizeDatasetSchema#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema PersonalizeDatasetSchema#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

}

/**
 * Converts an object of type 'PersonalizeDatasetSchema' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeDatasetSchema(obj: PersonalizeDatasetSchema | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'schemaArn': obj.schemaArn,
    'schema': obj.schema,
    'creationDateTime': obj.creationDateTime,
    'lastUpdatedDateTime': obj.lastUpdatedDateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeSolution
 */
export interface PersonalizeSolution {
  /**
   * @schema PersonalizeSolution#name
   */
  readonly name?: string;

  /**
   * @schema PersonalizeSolution#solutionArn
   */
  readonly solutionArn?: string;

  /**
   * @schema PersonalizeSolution#performHPO
   */
  readonly performHpo?: boolean;

  /**
   * @schema PersonalizeSolution#performAutoML
   */
  readonly performAutoMl?: boolean;

  /**
   * @schema PersonalizeSolution#recipeArn
   */
  readonly recipeArn?: string;

  /**
   * @schema PersonalizeSolution#datasetGroupArn
   */
  readonly datasetGroupArn?: string;

  /**
   * @schema PersonalizeSolution#eventType
   */
  readonly eventType?: string;

  /**
   * @schema PersonalizeSolution#solutionConfig
   */
  readonly solutionConfig?: PersonalizeSolutionConfig;

  /**
   * @schema PersonalizeSolution#autoMLResult
   */
  readonly autoMlResult?: PersonalizeAutoMlResult;

  /**
   * @schema PersonalizeSolution#status
   */
  readonly status?: string;

  /**
   * @schema PersonalizeSolution#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema PersonalizeSolution#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

  /**
   * @schema PersonalizeSolution#latestSolutionVersion
   */
  readonly latestSolutionVersion?: PersonalizeSolutionVersionSummary;

}

/**
 * Converts an object of type 'PersonalizeSolution' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeSolution(obj: PersonalizeSolution | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'solutionArn': obj.solutionArn,
    'performHPO': obj.performHpo,
    'performAutoML': obj.performAutoMl,
    'recipeArn': obj.recipeArn,
    'datasetGroupArn': obj.datasetGroupArn,
    'eventType': obj.eventType,
    'solutionConfig': toJson_PersonalizeSolutionConfig(obj.solutionConfig),
    'autoMLResult': toJson_PersonalizeAutoMlResult(obj.autoMlResult),
    'status': obj.status,
    'creationDateTime': obj.creationDateTime,
    'lastUpdatedDateTime': obj.lastUpdatedDateTime,
    'latestSolutionVersion': toJson_PersonalizeSolutionVersionSummary(obj.latestSolutionVersion),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeSolutionVersion
 */
export interface PersonalizeSolutionVersion {
  /**
   * @schema PersonalizeSolutionVersion#solutionVersionArn
   */
  readonly solutionVersionArn?: string;

  /**
   * @schema PersonalizeSolutionVersion#solutionArn
   */
  readonly solutionArn?: string;

  /**
   * @schema PersonalizeSolutionVersion#performHPO
   */
  readonly performHpo?: boolean;

  /**
   * @schema PersonalizeSolutionVersion#performAutoML
   */
  readonly performAutoMl?: boolean;

  /**
   * @schema PersonalizeSolutionVersion#recipeArn
   */
  readonly recipeArn?: string;

  /**
   * @schema PersonalizeSolutionVersion#eventType
   */
  readonly eventType?: string;

  /**
   * @schema PersonalizeSolutionVersion#datasetGroupArn
   */
  readonly datasetGroupArn?: string;

  /**
   * @schema PersonalizeSolutionVersion#solutionConfig
   */
  readonly solutionConfig?: PersonalizeSolutionConfig;

  /**
   * @schema PersonalizeSolutionVersion#trainingHours
   */
  readonly trainingHours?: number;

  /**
   * @schema PersonalizeSolutionVersion#trainingMode
   */
  readonly trainingMode?: string;

  /**
   * @schema PersonalizeSolutionVersion#tunedHPOParams
   */
  readonly tunedHpoParams?: PersonalizeTunedHpoParams;

  /**
   * @schema PersonalizeSolutionVersion#status
   */
  readonly status?: string;

  /**
   * @schema PersonalizeSolutionVersion#failureReason
   */
  readonly failureReason?: string;

  /**
   * @schema PersonalizeSolutionVersion#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema PersonalizeSolutionVersion#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

}

/**
 * Converts an object of type 'PersonalizeSolutionVersion' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeSolutionVersion(obj: PersonalizeSolutionVersion | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'solutionVersionArn': obj.solutionVersionArn,
    'solutionArn': obj.solutionArn,
    'performHPO': obj.performHpo,
    'performAutoML': obj.performAutoMl,
    'recipeArn': obj.recipeArn,
    'eventType': obj.eventType,
    'datasetGroupArn': obj.datasetGroupArn,
    'solutionConfig': toJson_PersonalizeSolutionConfig(obj.solutionConfig),
    'trainingHours': obj.trainingHours,
    'trainingMode': obj.trainingMode,
    'tunedHPOParams': toJson_PersonalizeTunedHpoParams(obj.tunedHpoParams),
    'status': obj.status,
    'failureReason': obj.failureReason,
    'creationDateTime': obj.creationDateTime,
    'lastUpdatedDateTime': obj.lastUpdatedDateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeBatchInferenceJobSummary
 */
export interface PersonalizeBatchInferenceJobSummary {
  /**
   * @schema PersonalizeBatchInferenceJobSummary#batchInferenceJobArn
   */
  readonly batchInferenceJobArn?: string;

  /**
   * @schema PersonalizeBatchInferenceJobSummary#jobName
   */
  readonly jobName?: string;

  /**
   * @schema PersonalizeBatchInferenceJobSummary#status
   */
  readonly status?: string;

  /**
   * @schema PersonalizeBatchInferenceJobSummary#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema PersonalizeBatchInferenceJobSummary#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

  /**
   * @schema PersonalizeBatchInferenceJobSummary#failureReason
   */
  readonly failureReason?: string;

  /**
   * @schema PersonalizeBatchInferenceJobSummary#solutionVersionArn
   */
  readonly solutionVersionArn?: string;

}

/**
 * Converts an object of type 'PersonalizeBatchInferenceJobSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeBatchInferenceJobSummary(obj: PersonalizeBatchInferenceJobSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'batchInferenceJobArn': obj.batchInferenceJobArn,
    'jobName': obj.jobName,
    'status': obj.status,
    'creationDateTime': obj.creationDateTime,
    'lastUpdatedDateTime': obj.lastUpdatedDateTime,
    'failureReason': obj.failureReason,
    'solutionVersionArn': obj.solutionVersionArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeCampaignSummary
 */
export interface PersonalizeCampaignSummary {
  /**
   * @schema PersonalizeCampaignSummary#name
   */
  readonly name?: string;

  /**
   * @schema PersonalizeCampaignSummary#campaignArn
   */
  readonly campaignArn?: string;

  /**
   * @schema PersonalizeCampaignSummary#status
   */
  readonly status?: string;

  /**
   * @schema PersonalizeCampaignSummary#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema PersonalizeCampaignSummary#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

  /**
   * @schema PersonalizeCampaignSummary#failureReason
   */
  readonly failureReason?: string;

}

/**
 * Converts an object of type 'PersonalizeCampaignSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeCampaignSummary(obj: PersonalizeCampaignSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'campaignArn': obj.campaignArn,
    'status': obj.status,
    'creationDateTime': obj.creationDateTime,
    'lastUpdatedDateTime': obj.lastUpdatedDateTime,
    'failureReason': obj.failureReason,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeDatasetExportJobSummary
 */
export interface PersonalizeDatasetExportJobSummary {
  /**
   * @schema PersonalizeDatasetExportJobSummary#datasetExportJobArn
   */
  readonly datasetExportJobArn?: string;

  /**
   * @schema PersonalizeDatasetExportJobSummary#jobName
   */
  readonly jobName?: string;

  /**
   * @schema PersonalizeDatasetExportJobSummary#status
   */
  readonly status?: string;

  /**
   * @schema PersonalizeDatasetExportJobSummary#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema PersonalizeDatasetExportJobSummary#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

  /**
   * @schema PersonalizeDatasetExportJobSummary#failureReason
   */
  readonly failureReason?: string;

}

/**
 * Converts an object of type 'PersonalizeDatasetExportJobSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeDatasetExportJobSummary(obj: PersonalizeDatasetExportJobSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'datasetExportJobArn': obj.datasetExportJobArn,
    'jobName': obj.jobName,
    'status': obj.status,
    'creationDateTime': obj.creationDateTime,
    'lastUpdatedDateTime': obj.lastUpdatedDateTime,
    'failureReason': obj.failureReason,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeDatasetGroupSummary
 */
export interface PersonalizeDatasetGroupSummary {
  /**
   * @schema PersonalizeDatasetGroupSummary#name
   */
  readonly name?: string;

  /**
   * @schema PersonalizeDatasetGroupSummary#datasetGroupArn
   */
  readonly datasetGroupArn?: string;

  /**
   * @schema PersonalizeDatasetGroupSummary#status
   */
  readonly status?: string;

  /**
   * @schema PersonalizeDatasetGroupSummary#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema PersonalizeDatasetGroupSummary#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

  /**
   * @schema PersonalizeDatasetGroupSummary#failureReason
   */
  readonly failureReason?: string;

}

/**
 * Converts an object of type 'PersonalizeDatasetGroupSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeDatasetGroupSummary(obj: PersonalizeDatasetGroupSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'datasetGroupArn': obj.datasetGroupArn,
    'status': obj.status,
    'creationDateTime': obj.creationDateTime,
    'lastUpdatedDateTime': obj.lastUpdatedDateTime,
    'failureReason': obj.failureReason,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeDatasetImportJobSummary
 */
export interface PersonalizeDatasetImportJobSummary {
  /**
   * @schema PersonalizeDatasetImportJobSummary#datasetImportJobArn
   */
  readonly datasetImportJobArn?: string;

  /**
   * @schema PersonalizeDatasetImportJobSummary#jobName
   */
  readonly jobName?: string;

  /**
   * @schema PersonalizeDatasetImportJobSummary#status
   */
  readonly status?: string;

  /**
   * @schema PersonalizeDatasetImportJobSummary#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema PersonalizeDatasetImportJobSummary#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

  /**
   * @schema PersonalizeDatasetImportJobSummary#failureReason
   */
  readonly failureReason?: string;

}

/**
 * Converts an object of type 'PersonalizeDatasetImportJobSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeDatasetImportJobSummary(obj: PersonalizeDatasetImportJobSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'datasetImportJobArn': obj.datasetImportJobArn,
    'jobName': obj.jobName,
    'status': obj.status,
    'creationDateTime': obj.creationDateTime,
    'lastUpdatedDateTime': obj.lastUpdatedDateTime,
    'failureReason': obj.failureReason,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeDatasetSummary
 */
export interface PersonalizeDatasetSummary {
  /**
   * @schema PersonalizeDatasetSummary#name
   */
  readonly name?: string;

  /**
   * @schema PersonalizeDatasetSummary#datasetArn
   */
  readonly datasetArn?: string;

  /**
   * @schema PersonalizeDatasetSummary#datasetType
   */
  readonly datasetType?: string;

  /**
   * @schema PersonalizeDatasetSummary#status
   */
  readonly status?: string;

  /**
   * @schema PersonalizeDatasetSummary#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema PersonalizeDatasetSummary#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

}

/**
 * Converts an object of type 'PersonalizeDatasetSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeDatasetSummary(obj: PersonalizeDatasetSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'datasetArn': obj.datasetArn,
    'datasetType': obj.datasetType,
    'status': obj.status,
    'creationDateTime': obj.creationDateTime,
    'lastUpdatedDateTime': obj.lastUpdatedDateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeEventTrackerSummary
 */
export interface PersonalizeEventTrackerSummary {
  /**
   * @schema PersonalizeEventTrackerSummary#name
   */
  readonly name?: string;

  /**
   * @schema PersonalizeEventTrackerSummary#eventTrackerArn
   */
  readonly eventTrackerArn?: string;

  /**
   * @schema PersonalizeEventTrackerSummary#status
   */
  readonly status?: string;

  /**
   * @schema PersonalizeEventTrackerSummary#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema PersonalizeEventTrackerSummary#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

}

/**
 * Converts an object of type 'PersonalizeEventTrackerSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeEventTrackerSummary(obj: PersonalizeEventTrackerSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'eventTrackerArn': obj.eventTrackerArn,
    'status': obj.status,
    'creationDateTime': obj.creationDateTime,
    'lastUpdatedDateTime': obj.lastUpdatedDateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeFilterSummary
 */
export interface PersonalizeFilterSummary {
  /**
   * @schema PersonalizeFilterSummary#name
   */
  readonly name?: string;

  /**
   * @schema PersonalizeFilterSummary#filterArn
   */
  readonly filterArn?: string;

  /**
   * @schema PersonalizeFilterSummary#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema PersonalizeFilterSummary#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

  /**
   * @schema PersonalizeFilterSummary#datasetGroupArn
   */
  readonly datasetGroupArn?: string;

  /**
   * @schema PersonalizeFilterSummary#failureReason
   */
  readonly failureReason?: string;

  /**
   * @schema PersonalizeFilterSummary#status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'PersonalizeFilterSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeFilterSummary(obj: PersonalizeFilterSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'filterArn': obj.filterArn,
    'creationDateTime': obj.creationDateTime,
    'lastUpdatedDateTime': obj.lastUpdatedDateTime,
    'datasetGroupArn': obj.datasetGroupArn,
    'failureReason': obj.failureReason,
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeRecipeSummary
 */
export interface PersonalizeRecipeSummary {
  /**
   * @schema PersonalizeRecipeSummary#name
   */
  readonly name?: string;

  /**
   * @schema PersonalizeRecipeSummary#recipeArn
   */
  readonly recipeArn?: string;

  /**
   * @schema PersonalizeRecipeSummary#status
   */
  readonly status?: string;

  /**
   * @schema PersonalizeRecipeSummary#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema PersonalizeRecipeSummary#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

}

/**
 * Converts an object of type 'PersonalizeRecipeSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeRecipeSummary(obj: PersonalizeRecipeSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'recipeArn': obj.recipeArn,
    'status': obj.status,
    'creationDateTime': obj.creationDateTime,
    'lastUpdatedDateTime': obj.lastUpdatedDateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeDatasetSchemaSummary
 */
export interface PersonalizeDatasetSchemaSummary {
  /**
   * @schema PersonalizeDatasetSchemaSummary#name
   */
  readonly name?: string;

  /**
   * @schema PersonalizeDatasetSchemaSummary#schemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema PersonalizeDatasetSchemaSummary#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema PersonalizeDatasetSchemaSummary#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

}

/**
 * Converts an object of type 'PersonalizeDatasetSchemaSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeDatasetSchemaSummary(obj: PersonalizeDatasetSchemaSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'schemaArn': obj.schemaArn,
    'creationDateTime': obj.creationDateTime,
    'lastUpdatedDateTime': obj.lastUpdatedDateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeSolutionVersionSummary
 */
export interface PersonalizeSolutionVersionSummary {
  /**
   * @schema PersonalizeSolutionVersionSummary#solutionVersionArn
   */
  readonly solutionVersionArn?: string;

  /**
   * @schema PersonalizeSolutionVersionSummary#status
   */
  readonly status?: string;

  /**
   * @schema PersonalizeSolutionVersionSummary#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema PersonalizeSolutionVersionSummary#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

  /**
   * @schema PersonalizeSolutionVersionSummary#failureReason
   */
  readonly failureReason?: string;

}

/**
 * Converts an object of type 'PersonalizeSolutionVersionSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeSolutionVersionSummary(obj: PersonalizeSolutionVersionSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'solutionVersionArn': obj.solutionVersionArn,
    'status': obj.status,
    'creationDateTime': obj.creationDateTime,
    'lastUpdatedDateTime': obj.lastUpdatedDateTime,
    'failureReason': obj.failureReason,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeSolutionSummary
 */
export interface PersonalizeSolutionSummary {
  /**
   * @schema PersonalizeSolutionSummary#name
   */
  readonly name?: string;

  /**
   * @schema PersonalizeSolutionSummary#solutionArn
   */
  readonly solutionArn?: string;

  /**
   * @schema PersonalizeSolutionSummary#status
   */
  readonly status?: string;

  /**
   * @schema PersonalizeSolutionSummary#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema PersonalizeSolutionSummary#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

}

/**
 * Converts an object of type 'PersonalizeSolutionSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeSolutionSummary(obj: PersonalizeSolutionSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'solutionArn': obj.solutionArn,
    'status': obj.status,
    'creationDateTime': obj.creationDateTime,
    'lastUpdatedDateTime': obj.lastUpdatedDateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeS3DataConfig
 */
export interface PersonalizeS3DataConfig {
  /**
   * @schema PersonalizeS3DataConfig#path
   */
  readonly path: string;

  /**
   * @schema PersonalizeS3DataConfig#kmsKeyArn
   */
  readonly kmsKeyArn?: string;

}

/**
 * Converts an object of type 'PersonalizeS3DataConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeS3DataConfig(obj: PersonalizeS3DataConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'path': obj.path,
    'kmsKeyArn': obj.kmsKeyArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeHpoConfig
 */
export interface PersonalizeHpoConfig {
  /**
   * @schema PersonalizeHpoConfig#hpoObjective
   */
  readonly hpoObjective?: PersonalizeHpoObjective;

  /**
   * @schema PersonalizeHpoConfig#hpoResourceConfig
   */
  readonly hpoResourceConfig?: PersonalizeHpoResourceConfig;

  /**
   * @schema PersonalizeHpoConfig#algorithmHyperParameterRanges
   */
  readonly algorithmHyperParameterRanges?: PersonalizeHyperParameterRanges;

}

/**
 * Converts an object of type 'PersonalizeHpoConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeHpoConfig(obj: PersonalizeHpoConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'hpoObjective': toJson_PersonalizeHpoObjective(obj.hpoObjective),
    'hpoResourceConfig': toJson_PersonalizeHpoResourceConfig(obj.hpoResourceConfig),
    'algorithmHyperParameterRanges': toJson_PersonalizeHyperParameterRanges(obj.algorithmHyperParameterRanges),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeAutoMlConfig
 */
export interface PersonalizeAutoMlConfig {
  /**
   * @schema PersonalizeAutoMlConfig#metricName
   */
  readonly metricName?: string;

  /**
   * @schema PersonalizeAutoMlConfig#recipeList
   */
  readonly recipeList?: string[];

}

/**
 * Converts an object of type 'PersonalizeAutoMlConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeAutoMlConfig(obj: PersonalizeAutoMlConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'metricName': obj.metricName,
    'recipeList': obj.recipeList?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeOptimizationObjective
 */
export interface PersonalizeOptimizationObjective {
  /**
   * @schema PersonalizeOptimizationObjective#itemAttribute
   */
  readonly itemAttribute?: string;

  /**
   * @schema PersonalizeOptimizationObjective#objectiveSensitivity
   */
  readonly objectiveSensitivity?: string;

}

/**
 * Converts an object of type 'PersonalizeOptimizationObjective' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeOptimizationObjective(obj: PersonalizeOptimizationObjective | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'itemAttribute': obj.itemAttribute,
    'objectiveSensitivity': obj.objectiveSensitivity,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeAlgorithmImage
 */
export interface PersonalizeAlgorithmImage {
  /**
   * @schema PersonalizeAlgorithmImage#name
   */
  readonly name?: string;

  /**
   * @schema PersonalizeAlgorithmImage#dockerURI
   */
  readonly dockerUri?: string;

}

/**
 * Converts an object of type 'PersonalizeAlgorithmImage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeAlgorithmImage(obj: PersonalizeAlgorithmImage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'dockerURI': obj.dockerUri,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeDefaultHyperParameterRanges
 */
export interface PersonalizeDefaultHyperParameterRanges {
  /**
   * @schema PersonalizeDefaultHyperParameterRanges#integerHyperParameterRanges
   */
  readonly integerHyperParameterRanges?: PersonalizeDefaultIntegerHyperParameterRange[];

  /**
   * @schema PersonalizeDefaultHyperParameterRanges#continuousHyperParameterRanges
   */
  readonly continuousHyperParameterRanges?: PersonalizeDefaultContinuousHyperParameterRange[];

  /**
   * @schema PersonalizeDefaultHyperParameterRanges#categoricalHyperParameterRanges
   */
  readonly categoricalHyperParameterRanges?: PersonalizeDefaultCategoricalHyperParameterRange[];

}

/**
 * Converts an object of type 'PersonalizeDefaultHyperParameterRanges' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeDefaultHyperParameterRanges(obj: PersonalizeDefaultHyperParameterRanges | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'integerHyperParameterRanges': obj.integerHyperParameterRanges?.map(y => toJson_PersonalizeDefaultIntegerHyperParameterRange(y)),
    'continuousHyperParameterRanges': obj.continuousHyperParameterRanges?.map(y => toJson_PersonalizeDefaultContinuousHyperParameterRange(y)),
    'categoricalHyperParameterRanges': obj.categoricalHyperParameterRanges?.map(y => toJson_PersonalizeDefaultCategoricalHyperParameterRange(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeCampaignUpdateSummary
 */
export interface PersonalizeCampaignUpdateSummary {
  /**
   * @schema PersonalizeCampaignUpdateSummary#solutionVersionArn
   */
  readonly solutionVersionArn?: string;

  /**
   * @schema PersonalizeCampaignUpdateSummary#minProvisionedTPS
   */
  readonly minProvisionedTps?: number;

  /**
   * @schema PersonalizeCampaignUpdateSummary#campaignConfig
   */
  readonly campaignConfig?: PersonalizeCampaignConfig;

  /**
   * @schema PersonalizeCampaignUpdateSummary#status
   */
  readonly status?: string;

  /**
   * @schema PersonalizeCampaignUpdateSummary#failureReason
   */
  readonly failureReason?: string;

  /**
   * @schema PersonalizeCampaignUpdateSummary#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema PersonalizeCampaignUpdateSummary#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

}

/**
 * Converts an object of type 'PersonalizeCampaignUpdateSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeCampaignUpdateSummary(obj: PersonalizeCampaignUpdateSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'solutionVersionArn': obj.solutionVersionArn,
    'minProvisionedTPS': obj.minProvisionedTps,
    'campaignConfig': toJson_PersonalizeCampaignConfig(obj.campaignConfig),
    'status': obj.status,
    'failureReason': obj.failureReason,
    'creationDateTime': obj.creationDateTime,
    'lastUpdatedDateTime': obj.lastUpdatedDateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeAutoMlResult
 */
export interface PersonalizeAutoMlResult {
  /**
   * @schema PersonalizeAutoMlResult#bestRecipeArn
   */
  readonly bestRecipeArn?: string;

}

/**
 * Converts an object of type 'PersonalizeAutoMlResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeAutoMlResult(obj: PersonalizeAutoMlResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bestRecipeArn': obj.bestRecipeArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeTunedHpoParams
 */
export interface PersonalizeTunedHpoParams {
  /**
   * @schema PersonalizeTunedHpoParams#algorithmHyperParameters
   */
  readonly algorithmHyperParameters?: { [key: string]: string };

}

/**
 * Converts an object of type 'PersonalizeTunedHpoParams' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeTunedHpoParams(obj: PersonalizeTunedHpoParams | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'algorithmHyperParameters': ((obj.algorithmHyperParameters) === undefined) ? undefined : (Object.entries(obj.algorithmHyperParameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeHpoObjective
 */
export interface PersonalizeHpoObjective {
  /**
   * @schema PersonalizeHpoObjective#type
   */
  readonly type?: string;

  /**
   * @schema PersonalizeHpoObjective#metricName
   */
  readonly metricName?: string;

  /**
   * @schema PersonalizeHpoObjective#metricRegex
   */
  readonly metricRegex?: string;

}

/**
 * Converts an object of type 'PersonalizeHpoObjective' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeHpoObjective(obj: PersonalizeHpoObjective | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'type': obj.type,
    'metricName': obj.metricName,
    'metricRegex': obj.metricRegex,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeHpoResourceConfig
 */
export interface PersonalizeHpoResourceConfig {
  /**
   * @schema PersonalizeHpoResourceConfig#maxNumberOfTrainingJobs
   */
  readonly maxNumberOfTrainingJobs?: string;

  /**
   * @schema PersonalizeHpoResourceConfig#maxParallelTrainingJobs
   */
  readonly maxParallelTrainingJobs?: string;

}

/**
 * Converts an object of type 'PersonalizeHpoResourceConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeHpoResourceConfig(obj: PersonalizeHpoResourceConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'maxNumberOfTrainingJobs': obj.maxNumberOfTrainingJobs,
    'maxParallelTrainingJobs': obj.maxParallelTrainingJobs,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeHyperParameterRanges
 */
export interface PersonalizeHyperParameterRanges {
  /**
   * @schema PersonalizeHyperParameterRanges#integerHyperParameterRanges
   */
  readonly integerHyperParameterRanges?: PersonalizeIntegerHyperParameterRange[];

  /**
   * @schema PersonalizeHyperParameterRanges#continuousHyperParameterRanges
   */
  readonly continuousHyperParameterRanges?: PersonalizeContinuousHyperParameterRange[];

  /**
   * @schema PersonalizeHyperParameterRanges#categoricalHyperParameterRanges
   */
  readonly categoricalHyperParameterRanges?: PersonalizeCategoricalHyperParameterRange[];

}

/**
 * Converts an object of type 'PersonalizeHyperParameterRanges' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeHyperParameterRanges(obj: PersonalizeHyperParameterRanges | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'integerHyperParameterRanges': obj.integerHyperParameterRanges?.map(y => toJson_PersonalizeIntegerHyperParameterRange(y)),
    'continuousHyperParameterRanges': obj.continuousHyperParameterRanges?.map(y => toJson_PersonalizeContinuousHyperParameterRange(y)),
    'categoricalHyperParameterRanges': obj.categoricalHyperParameterRanges?.map(y => toJson_PersonalizeCategoricalHyperParameterRange(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeDefaultIntegerHyperParameterRange
 */
export interface PersonalizeDefaultIntegerHyperParameterRange {
  /**
   * @schema PersonalizeDefaultIntegerHyperParameterRange#name
   */
  readonly name?: string;

  /**
   * @schema PersonalizeDefaultIntegerHyperParameterRange#minValue
   */
  readonly minValue?: number;

  /**
   * @schema PersonalizeDefaultIntegerHyperParameterRange#maxValue
   */
  readonly maxValue?: number;

  /**
   * @schema PersonalizeDefaultIntegerHyperParameterRange#isTunable
   */
  readonly isTunable?: boolean;

}

/**
 * Converts an object of type 'PersonalizeDefaultIntegerHyperParameterRange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeDefaultIntegerHyperParameterRange(obj: PersonalizeDefaultIntegerHyperParameterRange | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'minValue': obj.minValue,
    'maxValue': obj.maxValue,
    'isTunable': obj.isTunable,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeDefaultContinuousHyperParameterRange
 */
export interface PersonalizeDefaultContinuousHyperParameterRange {
  /**
   * @schema PersonalizeDefaultContinuousHyperParameterRange#name
   */
  readonly name?: string;

  /**
   * @schema PersonalizeDefaultContinuousHyperParameterRange#minValue
   */
  readonly minValue?: number;

  /**
   * @schema PersonalizeDefaultContinuousHyperParameterRange#maxValue
   */
  readonly maxValue?: number;

  /**
   * @schema PersonalizeDefaultContinuousHyperParameterRange#isTunable
   */
  readonly isTunable?: boolean;

}

/**
 * Converts an object of type 'PersonalizeDefaultContinuousHyperParameterRange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeDefaultContinuousHyperParameterRange(obj: PersonalizeDefaultContinuousHyperParameterRange | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'minValue': obj.minValue,
    'maxValue': obj.maxValue,
    'isTunable': obj.isTunable,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeDefaultCategoricalHyperParameterRange
 */
export interface PersonalizeDefaultCategoricalHyperParameterRange {
  /**
   * @schema PersonalizeDefaultCategoricalHyperParameterRange#name
   */
  readonly name?: string;

  /**
   * @schema PersonalizeDefaultCategoricalHyperParameterRange#values
   */
  readonly values?: string[];

  /**
   * @schema PersonalizeDefaultCategoricalHyperParameterRange#isTunable
   */
  readonly isTunable?: boolean;

}

/**
 * Converts an object of type 'PersonalizeDefaultCategoricalHyperParameterRange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeDefaultCategoricalHyperParameterRange(obj: PersonalizeDefaultCategoricalHyperParameterRange | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'values': obj.values?.map(y => y),
    'isTunable': obj.isTunable,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeIntegerHyperParameterRange
 */
export interface PersonalizeIntegerHyperParameterRange {
  /**
   * @schema PersonalizeIntegerHyperParameterRange#name
   */
  readonly name?: string;

  /**
   * @schema PersonalizeIntegerHyperParameterRange#minValue
   */
  readonly minValue?: number;

  /**
   * @schema PersonalizeIntegerHyperParameterRange#maxValue
   */
  readonly maxValue?: number;

}

/**
 * Converts an object of type 'PersonalizeIntegerHyperParameterRange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeIntegerHyperParameterRange(obj: PersonalizeIntegerHyperParameterRange | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'minValue': obj.minValue,
    'maxValue': obj.maxValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeContinuousHyperParameterRange
 */
export interface PersonalizeContinuousHyperParameterRange {
  /**
   * @schema PersonalizeContinuousHyperParameterRange#name
   */
  readonly name?: string;

  /**
   * @schema PersonalizeContinuousHyperParameterRange#minValue
   */
  readonly minValue?: number;

  /**
   * @schema PersonalizeContinuousHyperParameterRange#maxValue
   */
  readonly maxValue?: number;

}

/**
 * Converts an object of type 'PersonalizeContinuousHyperParameterRange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeContinuousHyperParameterRange(obj: PersonalizeContinuousHyperParameterRange | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'minValue': obj.minValue,
    'maxValue': obj.maxValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PersonalizeCategoricalHyperParameterRange
 */
export interface PersonalizeCategoricalHyperParameterRange {
  /**
   * @schema PersonalizeCategoricalHyperParameterRange#name
   */
  readonly name?: string;

  /**
   * @schema PersonalizeCategoricalHyperParameterRange#values
   */
  readonly values?: string[];

}

/**
 * Converts an object of type 'PersonalizeCategoricalHyperParameterRange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PersonalizeCategoricalHyperParameterRange(obj: PersonalizeCategoricalHyperParameterRange | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'values': obj.values?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
