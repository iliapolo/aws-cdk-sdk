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
 * @schema FraudDetectorBatchCreateVariableResult
 */
export interface FraudDetectorBatchCreateVariableResult {
  /**
   * @schema FraudDetectorBatchCreateVariableResult#errors
   */
  readonly errors?: FraudDetectorBatchCreateVariableError[];

}

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
 * @schema FraudDetectorCreateModelResult
 */
export interface FraudDetectorCreateModelResult {
}

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
 * @schema FraudDetectorCreateRuleResult
 */
export interface FraudDetectorCreateRuleResult {
  /**
   * @schema FraudDetectorCreateRuleResult#rule
   */
  readonly rule?: FraudDetectorRule;

}

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
 * @schema FraudDetectorCreateVariableResult
 */
export interface FraudDetectorCreateVariableResult {
}

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
 * @schema FraudDetectorDeleteDetectorResult
 */
export interface FraudDetectorDeleteDetectorResult {
}

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
 * @schema FraudDetectorDeleteDetectorVersionResult
 */
export interface FraudDetectorDeleteDetectorVersionResult {
}

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
 * @schema FraudDetectorDeleteEntityTypeResult
 */
export interface FraudDetectorDeleteEntityTypeResult {
}

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
 * @schema FraudDetectorDeleteEventResult
 */
export interface FraudDetectorDeleteEventResult {
}

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
 * @schema FraudDetectorDeleteEventTypeResult
 */
export interface FraudDetectorDeleteEventTypeResult {
}

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
 * @schema FraudDetectorDeleteExternalModelResult
 */
export interface FraudDetectorDeleteExternalModelResult {
}

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
 * @schema FraudDetectorDeleteLabelResult
 */
export interface FraudDetectorDeleteLabelResult {
}

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
 * @schema FraudDetectorDeleteModelResult
 */
export interface FraudDetectorDeleteModelResult {
}

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
 * @schema FraudDetectorDeleteModelVersionResult
 */
export interface FraudDetectorDeleteModelVersionResult {
}

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
 * @schema FraudDetectorDeleteOutcomeResult
 */
export interface FraudDetectorDeleteOutcomeResult {
}

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
 * @schema FraudDetectorDeleteRuleResult
 */
export interface FraudDetectorDeleteRuleResult {
}

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
 * @schema FraudDetectorDeleteVariableResult
 */
export interface FraudDetectorDeleteVariableResult {
}

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
 * @schema FraudDetectorGetKmsEncryptionKeyResult
 */
export interface FraudDetectorGetKmsEncryptionKeyResult {
  /**
   * @schema FraudDetectorGetKmsEncryptionKeyResult#kmsKey
   */
  readonly kmsKey?: FraudDetectorKmsKey;

}

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
 * @schema FraudDetectorListTagsForResourceRequest
 */
export interface FraudDetectorListTagsForResourceRequest {
  /**
   * @schema FraudDetectorListTagsForResourceRequest#resourceARN
   */
  readonly resourceARN?: string;

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
 * @schema FraudDetectorPutDetectorResult
 */
export interface FraudDetectorPutDetectorResult {
}

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
 * @schema FraudDetectorPutEntityTypeResult
 */
export interface FraudDetectorPutEntityTypeResult {
}

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
 * @schema FraudDetectorPutEventTypeResult
 */
export interface FraudDetectorPutEventTypeResult {
}

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
 * @schema FraudDetectorPutExternalModelResult
 */
export interface FraudDetectorPutExternalModelResult {
}

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
 * @schema FraudDetectorPutKmsEncryptionKeyResult
 */
export interface FraudDetectorPutKmsEncryptionKeyResult {
}

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
 * @schema FraudDetectorPutLabelResult
 */
export interface FraudDetectorPutLabelResult {
}

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
 * @schema FraudDetectorPutOutcomeResult
 */
export interface FraudDetectorPutOutcomeResult {
}

/**
 * @schema FraudDetectorTagResourceRequest
 */
export interface FraudDetectorTagResourceRequest {
  /**
   * @schema FraudDetectorTagResourceRequest#resourceARN
   */
  readonly resourceARN?: string;

  /**
   * @schema FraudDetectorTagResourceRequest#tags
   */
  readonly tags: FraudDetectorTag[];

}

/**
 * @schema FraudDetectorTagResourceResult
 */
export interface FraudDetectorTagResourceResult {
}

/**
 * @schema FraudDetectorUntagResourceRequest
 */
export interface FraudDetectorUntagResourceRequest {
  /**
   * @schema FraudDetectorUntagResourceRequest#resourceARN
   */
  readonly resourceARN?: string;

  /**
   * @schema FraudDetectorUntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema FraudDetectorUntagResourceResult
 */
export interface FraudDetectorUntagResourceResult {
}

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
 * @schema FraudDetectorUpdateDetectorVersionResult
 */
export interface FraudDetectorUpdateDetectorVersionResult {
}

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
 * @schema FraudDetectorUpdateDetectorVersionMetadataResult
 */
export interface FraudDetectorUpdateDetectorVersionMetadataResult {
}

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
 * @schema FraudDetectorUpdateDetectorVersionStatusResult
 */
export interface FraudDetectorUpdateDetectorVersionStatusResult {
}

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
 * @schema FraudDetectorUpdateModelResult
 */
export interface FraudDetectorUpdateModelResult {
}

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
 * @schema FraudDetectorUpdateModelVersionStatusResult
 */
export interface FraudDetectorUpdateModelVersionStatusResult {
}

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
 * @schema FraudDetectorUpdateRuleMetadataResult
 */
export interface FraudDetectorUpdateRuleMetadataResult {
}

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
 * @schema FraudDetectorUpdateRuleVersionResult
 */
export interface FraudDetectorUpdateRuleVersionResult {
  /**
   * @schema FraudDetectorUpdateRuleVersionResult#rule
   */
  readonly rule?: FraudDetectorRule;

}

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
 * @schema FraudDetectorUpdateVariableResult
 */
export interface FraudDetectorUpdateVariableResult {
}

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
 * @schema FraudDetectorKmsKey
 */
export interface FraudDetectorKmsKey {
  /**
   * @schema FraudDetectorKmsKey#kmsEncryptionKeyArn
   */
  readonly kmsEncryptionKeyArn?: string;

}

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
 * @schema FraudDetectorLabelSchema
 */
export interface FraudDetectorLabelSchema {
  /**
   * @schema FraudDetectorLabelSchema#labelMapper
   */
  readonly labelMapper: { [key: string]: string[] };

}

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

}

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
