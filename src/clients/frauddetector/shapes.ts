/**
 * @schema BatchCreateVariableRequest
 */
export interface BatchCreateVariableRequest {
  /**
   * @schema BatchCreateVariableRequest#variableEntries
   */
  readonly variableEntries: VariableEntry[];

  /**
   * @schema BatchCreateVariableRequest#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema BatchCreateVariableResult
 */
export interface BatchCreateVariableResult {
  /**
   * @schema BatchCreateVariableResult#errors
   */
  readonly errors?: BatchCreateVariableError[];

}

/**
 * @schema BatchGetVariableRequest
 */
export interface BatchGetVariableRequest {
  /**
   * @schema BatchGetVariableRequest#names
   */
  readonly names: string[];

}

/**
 * @schema BatchGetVariableResult
 */
export interface BatchGetVariableResult {
  /**
   * @schema BatchGetVariableResult#variables
   */
  readonly variables?: Variable[];

  /**
   * @schema BatchGetVariableResult#errors
   */
  readonly errors?: BatchGetVariableError[];

}

/**
 * @schema CreateDetectorVersionRequest
 */
export interface CreateDetectorVersionRequest {
  /**
   * @schema CreateDetectorVersionRequest#detectorId
   */
  readonly detectorId: string;

  /**
   * @schema CreateDetectorVersionRequest#description
   */
  readonly description?: string;

  /**
   * @schema CreateDetectorVersionRequest#externalModelEndpoints
   */
  readonly externalModelEndpoints?: string[];

  /**
   * @schema CreateDetectorVersionRequest#rules
   */
  readonly rules: Rule[];

  /**
   * @schema CreateDetectorVersionRequest#modelVersions
   */
  readonly modelVersions?: ModelVersion[];

  /**
   * @schema CreateDetectorVersionRequest#ruleExecutionMode
   */
  readonly ruleExecutionMode?: string;

  /**
   * @schema CreateDetectorVersionRequest#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateDetectorVersionResult
 */
export interface CreateDetectorVersionResult {
  /**
   * @schema CreateDetectorVersionResult#detectorId
   */
  readonly detectorId?: string;

  /**
   * @schema CreateDetectorVersionResult#detectorVersionId
   */
  readonly detectorVersionId?: string;

  /**
   * @schema CreateDetectorVersionResult#status
   */
  readonly status?: string;

}

/**
 * @schema CreateModelRequest
 */
export interface CreateModelRequest {
  /**
   * @schema CreateModelRequest#modelId
   */
  readonly modelId: string;

  /**
   * @schema CreateModelRequest#modelType
   */
  readonly modelType: string;

  /**
   * @schema CreateModelRequest#description
   */
  readonly description?: string;

  /**
   * @schema CreateModelRequest#eventTypeName
   */
  readonly eventTypeName: string;

  /**
   * @schema CreateModelRequest#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateModelResult
 */
export interface CreateModelResult {
}

/**
 * @schema CreateModelVersionRequest
 */
export interface CreateModelVersionRequest {
  /**
   * @schema CreateModelVersionRequest#modelId
   */
  readonly modelId: string;

  /**
   * @schema CreateModelVersionRequest#modelType
   */
  readonly modelType: string;

  /**
   * @schema CreateModelVersionRequest#trainingDataSource
   */
  readonly trainingDataSource: string;

  /**
   * @schema CreateModelVersionRequest#trainingDataSchema
   */
  readonly trainingDataSchema: TrainingDataSchema;

  /**
   * @schema CreateModelVersionRequest#externalEventsDetail
   */
  readonly externalEventsDetail?: ExternalEventsDetail;

  /**
   * @schema CreateModelVersionRequest#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateModelVersionResult
 */
export interface CreateModelVersionResult {
  /**
   * @schema CreateModelVersionResult#modelId
   */
  readonly modelId?: string;

  /**
   * @schema CreateModelVersionResult#modelType
   */
  readonly modelType?: string;

  /**
   * @schema CreateModelVersionResult#modelVersionNumber
   */
  readonly modelVersionNumber?: string;

  /**
   * @schema CreateModelVersionResult#status
   */
  readonly status?: string;

}

/**
 * @schema CreateRuleRequest
 */
export interface CreateRuleRequest {
  /**
   * @schema CreateRuleRequest#ruleId
   */
  readonly ruleId: string;

  /**
   * @schema CreateRuleRequest#detectorId
   */
  readonly detectorId: string;

  /**
   * @schema CreateRuleRequest#description
   */
  readonly description?: string;

  /**
   * @schema CreateRuleRequest#expression
   */
  readonly expression: string;

  /**
   * @schema CreateRuleRequest#language
   */
  readonly language: string;

  /**
   * @schema CreateRuleRequest#outcomes
   */
  readonly outcomes: string[];

  /**
   * @schema CreateRuleRequest#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateRuleResult
 */
export interface CreateRuleResult {
  /**
   * @schema CreateRuleResult#rule
   */
  readonly rule?: Rule;

}

/**
 * @schema CreateVariableRequest
 */
export interface CreateVariableRequest {
  /**
   * @schema CreateVariableRequest#name
   */
  readonly name: string;

  /**
   * @schema CreateVariableRequest#dataType
   */
  readonly dataType: string;

  /**
   * @schema CreateVariableRequest#dataSource
   */
  readonly dataSource: string;

  /**
   * @schema CreateVariableRequest#defaultValue
   */
  readonly defaultValue: string;

  /**
   * @schema CreateVariableRequest#description
   */
  readonly description?: string;

  /**
   * @schema CreateVariableRequest#variableType
   */
  readonly variableType?: string;

  /**
   * @schema CreateVariableRequest#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateVariableResult
 */
export interface CreateVariableResult {
}

/**
 * @schema DeleteDetectorRequest
 */
export interface DeleteDetectorRequest {
  /**
   * @schema DeleteDetectorRequest#detectorId
   */
  readonly detectorId: string;

}

/**
 * @schema DeleteDetectorResult
 */
export interface DeleteDetectorResult {
}

/**
 * @schema DeleteDetectorVersionRequest
 */
export interface DeleteDetectorVersionRequest {
  /**
   * @schema DeleteDetectorVersionRequest#detectorId
   */
  readonly detectorId: string;

  /**
   * @schema DeleteDetectorVersionRequest#detectorVersionId
   */
  readonly detectorVersionId: string;

}

/**
 * @schema DeleteDetectorVersionResult
 */
export interface DeleteDetectorVersionResult {
}

/**
 * @schema DeleteEntityTypeRequest
 */
export interface DeleteEntityTypeRequest {
  /**
   * @schema DeleteEntityTypeRequest#name
   */
  readonly name: string;

}

/**
 * @schema DeleteEntityTypeResult
 */
export interface DeleteEntityTypeResult {
}

/**
 * @schema DeleteEventRequest
 */
export interface DeleteEventRequest {
  /**
   * @schema DeleteEventRequest#eventId
   */
  readonly eventId: string;

  /**
   * @schema DeleteEventRequest#eventTypeName
   */
  readonly eventTypeName: string;

}

/**
 * @schema DeleteEventResult
 */
export interface DeleteEventResult {
}

/**
 * @schema DeleteEventTypeRequest
 */
export interface DeleteEventTypeRequest {
  /**
   * @schema DeleteEventTypeRequest#name
   */
  readonly name: string;

}

/**
 * @schema DeleteEventTypeResult
 */
export interface DeleteEventTypeResult {
}

/**
 * @schema DeleteExternalModelRequest
 */
export interface DeleteExternalModelRequest {
  /**
   * @schema DeleteExternalModelRequest#modelEndpoint
   */
  readonly modelEndpoint: string;

}

/**
 * @schema DeleteExternalModelResult
 */
export interface DeleteExternalModelResult {
}

/**
 * @schema DeleteLabelRequest
 */
export interface DeleteLabelRequest {
  /**
   * @schema DeleteLabelRequest#name
   */
  readonly name: string;

}

/**
 * @schema DeleteLabelResult
 */
export interface DeleteLabelResult {
}

/**
 * @schema DeleteModelRequest
 */
export interface DeleteModelRequest {
  /**
   * @schema DeleteModelRequest#modelId
   */
  readonly modelId: string;

  /**
   * @schema DeleteModelRequest#modelType
   */
  readonly modelType: string;

}

/**
 * @schema DeleteModelResult
 */
export interface DeleteModelResult {
}

/**
 * @schema DeleteModelVersionRequest
 */
export interface DeleteModelVersionRequest {
  /**
   * @schema DeleteModelVersionRequest#modelId
   */
  readonly modelId: string;

  /**
   * @schema DeleteModelVersionRequest#modelType
   */
  readonly modelType: string;

  /**
   * @schema DeleteModelVersionRequest#modelVersionNumber
   */
  readonly modelVersionNumber: string;

}

/**
 * @schema DeleteModelVersionResult
 */
export interface DeleteModelVersionResult {
}

/**
 * @schema DeleteOutcomeRequest
 */
export interface DeleteOutcomeRequest {
  /**
   * @schema DeleteOutcomeRequest#name
   */
  readonly name: string;

}

/**
 * @schema DeleteOutcomeResult
 */
export interface DeleteOutcomeResult {
}

/**
 * @schema DeleteRuleRequest
 */
export interface DeleteRuleRequest {
  /**
   * @schema DeleteRuleRequest#rule
   */
  readonly rule: Rule;

}

/**
 * @schema DeleteRuleResult
 */
export interface DeleteRuleResult {
}

/**
 * @schema DeleteVariableRequest
 */
export interface DeleteVariableRequest {
  /**
   * @schema DeleteVariableRequest#name
   */
  readonly name: string;

}

/**
 * @schema DeleteVariableResult
 */
export interface DeleteVariableResult {
}

/**
 * @schema DescribeDetectorRequest
 */
export interface DescribeDetectorRequest {
  /**
   * @schema DescribeDetectorRequest#detectorId
   */
  readonly detectorId: string;

  /**
   * @schema DescribeDetectorRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeDetectorRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema DescribeDetectorResult
 */
export interface DescribeDetectorResult {
  /**
   * @schema DescribeDetectorResult#detectorId
   */
  readonly detectorId?: string;

  /**
   * @schema DescribeDetectorResult#detectorVersionSummaries
   */
  readonly detectorVersionSummaries?: DetectorVersionSummary[];

  /**
   * @schema DescribeDetectorResult#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeDetectorResult#arn
   */
  readonly arn?: string;

}

/**
 * @schema DescribeModelVersionsRequest
 */
export interface DescribeModelVersionsRequest {
  /**
   * @schema DescribeModelVersionsRequest#modelId
   */
  readonly modelId?: string;

  /**
   * @schema DescribeModelVersionsRequest#modelVersionNumber
   */
  readonly modelVersionNumber?: string;

  /**
   * @schema DescribeModelVersionsRequest#modelType
   */
  readonly modelType?: string;

  /**
   * @schema DescribeModelVersionsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeModelVersionsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema DescribeModelVersionsResult
 */
export interface DescribeModelVersionsResult {
  /**
   * @schema DescribeModelVersionsResult#modelVersionDetails
   */
  readonly modelVersionDetails?: ModelVersionDetail[];

  /**
   * @schema DescribeModelVersionsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetDetectorVersionRequest
 */
export interface GetDetectorVersionRequest {
  /**
   * @schema GetDetectorVersionRequest#detectorId
   */
  readonly detectorId: string;

  /**
   * @schema GetDetectorVersionRequest#detectorVersionId
   */
  readonly detectorVersionId: string;

}

/**
 * @schema GetDetectorVersionResult
 */
export interface GetDetectorVersionResult {
  /**
   * @schema GetDetectorVersionResult#detectorId
   */
  readonly detectorId?: string;

  /**
   * @schema GetDetectorVersionResult#detectorVersionId
   */
  readonly detectorVersionId?: string;

  /**
   * @schema GetDetectorVersionResult#description
   */
  readonly description?: string;

  /**
   * @schema GetDetectorVersionResult#externalModelEndpoints
   */
  readonly externalModelEndpoints?: string[];

  /**
   * @schema GetDetectorVersionResult#modelVersions
   */
  readonly modelVersions?: ModelVersion[];

  /**
   * @schema GetDetectorVersionResult#rules
   */
  readonly rules?: Rule[];

  /**
   * @schema GetDetectorVersionResult#status
   */
  readonly status?: string;

  /**
   * @schema GetDetectorVersionResult#lastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

  /**
   * @schema GetDetectorVersionResult#createdTime
   */
  readonly createdTime?: string;

  /**
   * @schema GetDetectorVersionResult#ruleExecutionMode
   */
  readonly ruleExecutionMode?: string;

  /**
   * @schema GetDetectorVersionResult#arn
   */
  readonly arn?: string;

}

/**
 * @schema GetDetectorsRequest
 */
export interface GetDetectorsRequest {
  /**
   * @schema GetDetectorsRequest#detectorId
   */
  readonly detectorId?: string;

  /**
   * @schema GetDetectorsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetDetectorsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema GetDetectorsResult
 */
export interface GetDetectorsResult {
  /**
   * @schema GetDetectorsResult#detectors
   */
  readonly detectors?: Detector[];

  /**
   * @schema GetDetectorsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetEntityTypesRequest
 */
export interface GetEntityTypesRequest {
  /**
   * @schema GetEntityTypesRequest#name
   */
  readonly name?: string;

  /**
   * @schema GetEntityTypesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetEntityTypesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema GetEntityTypesResult
 */
export interface GetEntityTypesResult {
  /**
   * @schema GetEntityTypesResult#entityTypes
   */
  readonly entityTypes?: EntityType[];

  /**
   * @schema GetEntityTypesResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetEventPredictionRequest
 */
export interface GetEventPredictionRequest {
  /**
   * @schema GetEventPredictionRequest#detectorId
   */
  readonly detectorId: string;

  /**
   * @schema GetEventPredictionRequest#detectorVersionId
   */
  readonly detectorVersionId?: string;

  /**
   * @schema GetEventPredictionRequest#eventId
   */
  readonly eventId: string;

  /**
   * @schema GetEventPredictionRequest#eventTypeName
   */
  readonly eventTypeName: string;

  /**
   * @schema GetEventPredictionRequest#entities
   */
  readonly entities: Entity[];

  /**
   * @schema GetEventPredictionRequest#eventTimestamp
   */
  readonly eventTimestamp: string;

  /**
   * @schema GetEventPredictionRequest#eventVariables
   */
  readonly eventVariables: { [key: string]: string };

  /**
   * @schema GetEventPredictionRequest#externalModelEndpointDataBlobs
   */
  readonly externalModelEndpointDataBlobs?: { [key: string]: ModelEndpointDataBlob };

}

/**
 * @schema GetEventPredictionResult
 */
export interface GetEventPredictionResult {
  /**
   * @schema GetEventPredictionResult#modelScores
   */
  readonly modelScores?: ModelScores[];

  /**
   * @schema GetEventPredictionResult#ruleResults
   */
  readonly ruleResults?: RuleResult[];

}

/**
 * @schema GetEventTypesRequest
 */
export interface GetEventTypesRequest {
  /**
   * @schema GetEventTypesRequest#name
   */
  readonly name?: string;

  /**
   * @schema GetEventTypesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetEventTypesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema GetEventTypesResult
 */
export interface GetEventTypesResult {
  /**
   * @schema GetEventTypesResult#eventTypes
   */
  readonly eventTypes?: EventType[];

  /**
   * @schema GetEventTypesResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetExternalModelsRequest
 */
export interface GetExternalModelsRequest {
  /**
   * @schema GetExternalModelsRequest#modelEndpoint
   */
  readonly modelEndpoint?: string;

  /**
   * @schema GetExternalModelsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetExternalModelsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema GetExternalModelsResult
 */
export interface GetExternalModelsResult {
  /**
   * @schema GetExternalModelsResult#externalModels
   */
  readonly externalModels?: ExternalModel[];

  /**
   * @schema GetExternalModelsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetKmsEncryptionKeyResult
 */
export interface GetKmsEncryptionKeyResult {
  /**
   * @schema GetKmsEncryptionKeyResult#kmsKey
   */
  readonly kmsKey?: KmsKey;

}

/**
 * @schema GetLabelsRequest
 */
export interface GetLabelsRequest {
  /**
   * @schema GetLabelsRequest#name
   */
  readonly name?: string;

  /**
   * @schema GetLabelsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetLabelsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema GetLabelsResult
 */
export interface GetLabelsResult {
  /**
   * @schema GetLabelsResult#labels
   */
  readonly labels?: Label[];

  /**
   * @schema GetLabelsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetModelVersionRequest
 */
export interface GetModelVersionRequest {
  /**
   * @schema GetModelVersionRequest#modelId
   */
  readonly modelId: string;

  /**
   * @schema GetModelVersionRequest#modelType
   */
  readonly modelType: string;

  /**
   * @schema GetModelVersionRequest#modelVersionNumber
   */
  readonly modelVersionNumber: string;

}

/**
 * @schema GetModelVersionResult
 */
export interface GetModelVersionResult {
  /**
   * @schema GetModelVersionResult#modelId
   */
  readonly modelId?: string;

  /**
   * @schema GetModelVersionResult#modelType
   */
  readonly modelType?: string;

  /**
   * @schema GetModelVersionResult#modelVersionNumber
   */
  readonly modelVersionNumber?: string;

  /**
   * @schema GetModelVersionResult#trainingDataSource
   */
  readonly trainingDataSource?: string;

  /**
   * @schema GetModelVersionResult#trainingDataSchema
   */
  readonly trainingDataSchema?: TrainingDataSchema;

  /**
   * @schema GetModelVersionResult#externalEventsDetail
   */
  readonly externalEventsDetail?: ExternalEventsDetail;

  /**
   * @schema GetModelVersionResult#status
   */
  readonly status?: string;

  /**
   * @schema GetModelVersionResult#arn
   */
  readonly arn?: string;

}

/**
 * @schema GetModelsRequest
 */
export interface GetModelsRequest {
  /**
   * @schema GetModelsRequest#modelId
   */
  readonly modelId?: string;

  /**
   * @schema GetModelsRequest#modelType
   */
  readonly modelType?: string;

  /**
   * @schema GetModelsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetModelsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema GetModelsResult
 */
export interface GetModelsResult {
  /**
   * @schema GetModelsResult#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetModelsResult#models
   */
  readonly models?: Model[];

}

/**
 * @schema GetOutcomesRequest
 */
export interface GetOutcomesRequest {
  /**
   * @schema GetOutcomesRequest#name
   */
  readonly name?: string;

  /**
   * @schema GetOutcomesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetOutcomesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema GetOutcomesResult
 */
export interface GetOutcomesResult {
  /**
   * @schema GetOutcomesResult#outcomes
   */
  readonly outcomes?: Outcome[];

  /**
   * @schema GetOutcomesResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetRulesRequest
 */
export interface GetRulesRequest {
  /**
   * @schema GetRulesRequest#ruleId
   */
  readonly ruleId?: string;

  /**
   * @schema GetRulesRequest#detectorId
   */
  readonly detectorId: string;

  /**
   * @schema GetRulesRequest#ruleVersion
   */
  readonly ruleVersion?: string;

  /**
   * @schema GetRulesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetRulesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema GetRulesResult
 */
export interface GetRulesResult {
  /**
   * @schema GetRulesResult#ruleDetails
   */
  readonly ruleDetails?: RuleDetail[];

  /**
   * @schema GetRulesResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetVariablesRequest
 */
export interface GetVariablesRequest {
  /**
   * @schema GetVariablesRequest#name
   */
  readonly name?: string;

  /**
   * @schema GetVariablesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetVariablesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema GetVariablesResult
 */
export interface GetVariablesResult {
  /**
   * @schema GetVariablesResult#variables
   */
  readonly variables?: Variable[];

  /**
   * @schema GetVariablesResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * @schema ListTagsForResourceRequest#resourceARN
   */
  readonly resourceARN?: string;

  /**
   * @schema ListTagsForResourceRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListTagsForResourceRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListTagsForResourceResult
 */
export interface ListTagsForResourceResult {
  /**
   * @schema ListTagsForResourceResult#tags
   */
  readonly tags?: Tag[];

  /**
   * @schema ListTagsForResourceResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema PutDetectorRequest
 */
export interface PutDetectorRequest {
  /**
   * @schema PutDetectorRequest#detectorId
   */
  readonly detectorId: string;

  /**
   * @schema PutDetectorRequest#description
   */
  readonly description?: string;

  /**
   * @schema PutDetectorRequest#eventTypeName
   */
  readonly eventTypeName: string;

  /**
   * @schema PutDetectorRequest#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema PutDetectorResult
 */
export interface PutDetectorResult {
}

/**
 * @schema PutEntityTypeRequest
 */
export interface PutEntityTypeRequest {
  /**
   * @schema PutEntityTypeRequest#name
   */
  readonly name: string;

  /**
   * @schema PutEntityTypeRequest#description
   */
  readonly description?: string;

  /**
   * @schema PutEntityTypeRequest#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema PutEntityTypeResult
 */
export interface PutEntityTypeResult {
}

/**
 * @schema PutEventTypeRequest
 */
export interface PutEventTypeRequest {
  /**
   * @schema PutEventTypeRequest#name
   */
  readonly name: string;

  /**
   * @schema PutEventTypeRequest#description
   */
  readonly description?: string;

  /**
   * @schema PutEventTypeRequest#eventVariables
   */
  readonly eventVariables: string[];

  /**
   * @schema PutEventTypeRequest#labels
   */
  readonly labels?: string[];

  /**
   * @schema PutEventTypeRequest#entityTypes
   */
  readonly entityTypes: string[];

  /**
   * @schema PutEventTypeRequest#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema PutEventTypeResult
 */
export interface PutEventTypeResult {
}

/**
 * @schema PutExternalModelRequest
 */
export interface PutExternalModelRequest {
  /**
   * @schema PutExternalModelRequest#modelEndpoint
   */
  readonly modelEndpoint: string;

  /**
   * @schema PutExternalModelRequest#modelSource
   */
  readonly modelSource: string;

  /**
   * @schema PutExternalModelRequest#invokeModelEndpointRoleArn
   */
  readonly invokeModelEndpointRoleArn: string;

  /**
   * @schema PutExternalModelRequest#inputConfiguration
   */
  readonly inputConfiguration: ModelInputConfiguration;

  /**
   * @schema PutExternalModelRequest#outputConfiguration
   */
  readonly outputConfiguration: ModelOutputConfiguration;

  /**
   * @schema PutExternalModelRequest#modelEndpointStatus
   */
  readonly modelEndpointStatus: string;

  /**
   * @schema PutExternalModelRequest#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema PutExternalModelResult
 */
export interface PutExternalModelResult {
}

/**
 * @schema PutKmsEncryptionKeyRequest
 */
export interface PutKmsEncryptionKeyRequest {
  /**
   * @schema PutKmsEncryptionKeyRequest#kmsEncryptionKeyArn
   */
  readonly kmsEncryptionKeyArn: string;

}

/**
 * @schema PutKmsEncryptionKeyResult
 */
export interface PutKmsEncryptionKeyResult {
}

/**
 * @schema PutLabelRequest
 */
export interface PutLabelRequest {
  /**
   * @schema PutLabelRequest#name
   */
  readonly name: string;

  /**
   * @schema PutLabelRequest#description
   */
  readonly description?: string;

  /**
   * @schema PutLabelRequest#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema PutLabelResult
 */
export interface PutLabelResult {
}

/**
 * @schema PutOutcomeRequest
 */
export interface PutOutcomeRequest {
  /**
   * @schema PutOutcomeRequest#name
   */
  readonly name: string;

  /**
   * @schema PutOutcomeRequest#description
   */
  readonly description?: string;

  /**
   * @schema PutOutcomeRequest#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema PutOutcomeResult
 */
export interface PutOutcomeResult {
}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#resourceARN
   */
  readonly resourceARN?: string;

  /**
   * @schema TagResourceRequest#tags
   */
  readonly tags: Tag[];

}

/**
 * @schema TagResourceResult
 */
export interface TagResourceResult {
}

/**
 * @schema UntagResourceRequest
 */
export interface UntagResourceRequest {
  /**
   * @schema UntagResourceRequest#resourceARN
   */
  readonly resourceARN?: string;

  /**
   * @schema UntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UntagResourceResult
 */
export interface UntagResourceResult {
}

/**
 * @schema UpdateDetectorVersionRequest
 */
export interface UpdateDetectorVersionRequest {
  /**
   * @schema UpdateDetectorVersionRequest#detectorId
   */
  readonly detectorId: string;

  /**
   * @schema UpdateDetectorVersionRequest#detectorVersionId
   */
  readonly detectorVersionId: string;

  /**
   * @schema UpdateDetectorVersionRequest#externalModelEndpoints
   */
  readonly externalModelEndpoints: string[];

  /**
   * @schema UpdateDetectorVersionRequest#rules
   */
  readonly rules: Rule[];

  /**
   * @schema UpdateDetectorVersionRequest#description
   */
  readonly description?: string;

  /**
   * @schema UpdateDetectorVersionRequest#modelVersions
   */
  readonly modelVersions?: ModelVersion[];

  /**
   * @schema UpdateDetectorVersionRequest#ruleExecutionMode
   */
  readonly ruleExecutionMode?: string;

}

/**
 * @schema UpdateDetectorVersionResult
 */
export interface UpdateDetectorVersionResult {
}

/**
 * @schema UpdateDetectorVersionMetadataRequest
 */
export interface UpdateDetectorVersionMetadataRequest {
  /**
   * @schema UpdateDetectorVersionMetadataRequest#detectorId
   */
  readonly detectorId: string;

  /**
   * @schema UpdateDetectorVersionMetadataRequest#detectorVersionId
   */
  readonly detectorVersionId: string;

  /**
   * @schema UpdateDetectorVersionMetadataRequest#description
   */
  readonly description: string;

}

/**
 * @schema UpdateDetectorVersionMetadataResult
 */
export interface UpdateDetectorVersionMetadataResult {
}

/**
 * @schema UpdateDetectorVersionStatusRequest
 */
export interface UpdateDetectorVersionStatusRequest {
  /**
   * @schema UpdateDetectorVersionStatusRequest#detectorId
   */
  readonly detectorId: string;

  /**
   * @schema UpdateDetectorVersionStatusRequest#detectorVersionId
   */
  readonly detectorVersionId: string;

  /**
   * @schema UpdateDetectorVersionStatusRequest#status
   */
  readonly status: string;

}

/**
 * @schema UpdateDetectorVersionStatusResult
 */
export interface UpdateDetectorVersionStatusResult {
}

/**
 * @schema UpdateModelRequest
 */
export interface UpdateModelRequest {
  /**
   * @schema UpdateModelRequest#modelId
   */
  readonly modelId: string;

  /**
   * @schema UpdateModelRequest#modelType
   */
  readonly modelType: string;

  /**
   * @schema UpdateModelRequest#description
   */
  readonly description?: string;

}

/**
 * @schema UpdateModelResult
 */
export interface UpdateModelResult {
}

/**
 * @schema UpdateModelVersionRequest
 */
export interface UpdateModelVersionRequest {
  /**
   * @schema UpdateModelVersionRequest#modelId
   */
  readonly modelId: string;

  /**
   * @schema UpdateModelVersionRequest#modelType
   */
  readonly modelType: string;

  /**
   * @schema UpdateModelVersionRequest#majorVersionNumber
   */
  readonly majorVersionNumber: string;

  /**
   * @schema UpdateModelVersionRequest#externalEventsDetail
   */
  readonly externalEventsDetail?: ExternalEventsDetail;

  /**
   * @schema UpdateModelVersionRequest#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema UpdateModelVersionResult
 */
export interface UpdateModelVersionResult {
  /**
   * @schema UpdateModelVersionResult#modelId
   */
  readonly modelId?: string;

  /**
   * @schema UpdateModelVersionResult#modelType
   */
  readonly modelType?: string;

  /**
   * @schema UpdateModelVersionResult#modelVersionNumber
   */
  readonly modelVersionNumber?: string;

  /**
   * @schema UpdateModelVersionResult#status
   */
  readonly status?: string;

}

/**
 * @schema UpdateModelVersionStatusRequest
 */
export interface UpdateModelVersionStatusRequest {
  /**
   * @schema UpdateModelVersionStatusRequest#modelId
   */
  readonly modelId: string;

  /**
   * @schema UpdateModelVersionStatusRequest#modelType
   */
  readonly modelType: string;

  /**
   * @schema UpdateModelVersionStatusRequest#modelVersionNumber
   */
  readonly modelVersionNumber: string;

  /**
   * @schema UpdateModelVersionStatusRequest#status
   */
  readonly status: string;

}

/**
 * @schema UpdateModelVersionStatusResult
 */
export interface UpdateModelVersionStatusResult {
}

/**
 * @schema UpdateRuleMetadataRequest
 */
export interface UpdateRuleMetadataRequest {
  /**
   * @schema UpdateRuleMetadataRequest#rule
   */
  readonly rule: Rule;

  /**
   * @schema UpdateRuleMetadataRequest#description
   */
  readonly description: string;

}

/**
 * @schema UpdateRuleMetadataResult
 */
export interface UpdateRuleMetadataResult {
}

/**
 * @schema UpdateRuleVersionRequest
 */
export interface UpdateRuleVersionRequest {
  /**
   * @schema UpdateRuleVersionRequest#rule
   */
  readonly rule: Rule;

  /**
   * @schema UpdateRuleVersionRequest#description
   */
  readonly description?: string;

  /**
   * @schema UpdateRuleVersionRequest#expression
   */
  readonly expression: string;

  /**
   * @schema UpdateRuleVersionRequest#language
   */
  readonly language: string;

  /**
   * @schema UpdateRuleVersionRequest#outcomes
   */
  readonly outcomes: string[];

  /**
   * @schema UpdateRuleVersionRequest#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema UpdateRuleVersionResult
 */
export interface UpdateRuleVersionResult {
  /**
   * @schema UpdateRuleVersionResult#rule
   */
  readonly rule?: Rule;

}

/**
 * @schema UpdateVariableRequest
 */
export interface UpdateVariableRequest {
  /**
   * @schema UpdateVariableRequest#name
   */
  readonly name: string;

  /**
   * @schema UpdateVariableRequest#defaultValue
   */
  readonly defaultValue?: string;

  /**
   * @schema UpdateVariableRequest#description
   */
  readonly description?: string;

  /**
   * @schema UpdateVariableRequest#variableType
   */
  readonly variableType?: string;

}

/**
 * @schema UpdateVariableResult
 */
export interface UpdateVariableResult {
}

/**
 * @schema VariableEntry
 */
export interface VariableEntry {
  /**
   * @schema VariableEntry#name
   */
  readonly name?: string;

  /**
   * @schema VariableEntry#dataType
   */
  readonly dataType?: string;

  /**
   * @schema VariableEntry#dataSource
   */
  readonly dataSource?: string;

  /**
   * @schema VariableEntry#defaultValue
   */
  readonly defaultValue?: string;

  /**
   * @schema VariableEntry#description
   */
  readonly description?: string;

  /**
   * @schema VariableEntry#variableType
   */
  readonly variableType?: string;

}

/**
 * @schema Tag
 */
export interface Tag {
  /**
   * @schema Tag#key
   */
  readonly key: string;

  /**
   * @schema Tag#value
   */
  readonly value: string;

}

/**
 * @schema BatchCreateVariableError
 */
export interface BatchCreateVariableError {
  /**
   * @schema BatchCreateVariableError#name
   */
  readonly name?: string;

  /**
   * @schema BatchCreateVariableError#code
   */
  readonly code?: number;

  /**
   * @schema BatchCreateVariableError#message
   */
  readonly message?: string;

}

/**
 * @schema Variable
 */
export interface Variable {
  /**
   * @schema Variable#name
   */
  readonly name?: string;

  /**
   * @schema Variable#dataType
   */
  readonly dataType?: string;

  /**
   * @schema Variable#dataSource
   */
  readonly dataSource?: string;

  /**
   * @schema Variable#defaultValue
   */
  readonly defaultValue?: string;

  /**
   * @schema Variable#description
   */
  readonly description?: string;

  /**
   * @schema Variable#variableType
   */
  readonly variableType?: string;

  /**
   * @schema Variable#lastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

  /**
   * @schema Variable#createdTime
   */
  readonly createdTime?: string;

  /**
   * @schema Variable#arn
   */
  readonly arn?: string;

}

/**
 * @schema BatchGetVariableError
 */
export interface BatchGetVariableError {
  /**
   * @schema BatchGetVariableError#name
   */
  readonly name?: string;

  /**
   * @schema BatchGetVariableError#code
   */
  readonly code?: number;

  /**
   * @schema BatchGetVariableError#message
   */
  readonly message?: string;

}

/**
 * @schema Rule
 */
export interface Rule {
  /**
   * @schema Rule#detectorId
   */
  readonly detectorId: string;

  /**
   * @schema Rule#ruleId
   */
  readonly ruleId: string;

  /**
   * @schema Rule#ruleVersion
   */
  readonly ruleVersion: string;

}

/**
 * @schema ModelVersion
 */
export interface ModelVersion {
  /**
   * @schema ModelVersion#modelId
   */
  readonly modelId: string;

  /**
   * @schema ModelVersion#modelType
   */
  readonly modelType: string;

  /**
   * @schema ModelVersion#modelVersionNumber
   */
  readonly modelVersionNumber: string;

  /**
   * @schema ModelVersion#arn
   */
  readonly arn?: string;

}

/**
 * @schema TrainingDataSchema
 */
export interface TrainingDataSchema {
  /**
   * @schema TrainingDataSchema#modelVariables
   */
  readonly modelVariables: string[];

  /**
   * @schema TrainingDataSchema#labelSchema
   */
  readonly labelSchema: LabelSchema;

}

/**
 * @schema ExternalEventsDetail
 */
export interface ExternalEventsDetail {
  /**
   * @schema ExternalEventsDetail#dataLocation
   */
  readonly dataLocation: string;

  /**
   * @schema ExternalEventsDetail#dataAccessRoleArn
   */
  readonly dataAccessRoleArn: string;

}

/**
 * @schema DetectorVersionSummary
 */
export interface DetectorVersionSummary {
  /**
   * @schema DetectorVersionSummary#detectorVersionId
   */
  readonly detectorVersionId?: string;

  /**
   * @schema DetectorVersionSummary#status
   */
  readonly status?: string;

  /**
   * @schema DetectorVersionSummary#description
   */
  readonly description?: string;

  /**
   * @schema DetectorVersionSummary#lastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

}

/**
 * @schema ModelVersionDetail
 */
export interface ModelVersionDetail {
  /**
   * @schema ModelVersionDetail#modelId
   */
  readonly modelId?: string;

  /**
   * @schema ModelVersionDetail#modelType
   */
  readonly modelType?: string;

  /**
   * @schema ModelVersionDetail#modelVersionNumber
   */
  readonly modelVersionNumber?: string;

  /**
   * @schema ModelVersionDetail#status
   */
  readonly status?: string;

  /**
   * @schema ModelVersionDetail#trainingDataSource
   */
  readonly trainingDataSource?: string;

  /**
   * @schema ModelVersionDetail#trainingDataSchema
   */
  readonly trainingDataSchema?: TrainingDataSchema;

  /**
   * @schema ModelVersionDetail#externalEventsDetail
   */
  readonly externalEventsDetail?: ExternalEventsDetail;

  /**
   * @schema ModelVersionDetail#trainingResult
   */
  readonly trainingResult?: TrainingResult;

  /**
   * @schema ModelVersionDetail#lastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

  /**
   * @schema ModelVersionDetail#createdTime
   */
  readonly createdTime?: string;

  /**
   * @schema ModelVersionDetail#arn
   */
  readonly arn?: string;

}

/**
 * @schema Detector
 */
export interface Detector {
  /**
   * @schema Detector#detectorId
   */
  readonly detectorId?: string;

  /**
   * @schema Detector#description
   */
  readonly description?: string;

  /**
   * @schema Detector#eventTypeName
   */
  readonly eventTypeName?: string;

  /**
   * @schema Detector#lastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

  /**
   * @schema Detector#createdTime
   */
  readonly createdTime?: string;

  /**
   * @schema Detector#arn
   */
  readonly arn?: string;

}

/**
 * @schema EntityType
 */
export interface EntityType {
  /**
   * @schema EntityType#name
   */
  readonly name?: string;

  /**
   * @schema EntityType#description
   */
  readonly description?: string;

  /**
   * @schema EntityType#lastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

  /**
   * @schema EntityType#createdTime
   */
  readonly createdTime?: string;

  /**
   * @schema EntityType#arn
   */
  readonly arn?: string;

}

/**
 * @schema Entity
 */
export interface Entity {
  /**
   * @schema Entity#entityType
   */
  readonly entityType: string;

  /**
   * @schema Entity#entityId
   */
  readonly entityId: string;

}

/**
 * @schema ModelEndpointDataBlob
 */
export interface ModelEndpointDataBlob {
  /**
   * @schema ModelEndpointDataBlob#byteBuffer
   */
  readonly byteBuffer?: any;

  /**
   * @schema ModelEndpointDataBlob#contentType
   */
  readonly contentType?: string;

}

/**
 * @schema ModelScores
 */
export interface ModelScores {
  /**
   * @schema ModelScores#modelVersion
   */
  readonly modelVersion?: ModelVersion;

  /**
   * @schema ModelScores#scores
   */
  readonly scores?: { [key: string]: number };

}

/**
 * @schema RuleResult
 */
export interface RuleResult {
  /**
   * @schema RuleResult#ruleId
   */
  readonly ruleId?: string;

  /**
   * @schema RuleResult#outcomes
   */
  readonly outcomes?: string[];

}

/**
 * @schema EventType
 */
export interface EventType {
  /**
   * @schema EventType#name
   */
  readonly name?: string;

  /**
   * @schema EventType#description
   */
  readonly description?: string;

  /**
   * @schema EventType#eventVariables
   */
  readonly eventVariables?: string[];

  /**
   * @schema EventType#labels
   */
  readonly labels?: string[];

  /**
   * @schema EventType#entityTypes
   */
  readonly entityTypes?: string[];

  /**
   * @schema EventType#lastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

  /**
   * @schema EventType#createdTime
   */
  readonly createdTime?: string;

  /**
   * @schema EventType#arn
   */
  readonly arn?: string;

}

/**
 * @schema ExternalModel
 */
export interface ExternalModel {
  /**
   * @schema ExternalModel#modelEndpoint
   */
  readonly modelEndpoint?: string;

  /**
   * @schema ExternalModel#modelSource
   */
  readonly modelSource?: string;

  /**
   * @schema ExternalModel#invokeModelEndpointRoleArn
   */
  readonly invokeModelEndpointRoleArn?: string;

  /**
   * @schema ExternalModel#inputConfiguration
   */
  readonly inputConfiguration?: ModelInputConfiguration;

  /**
   * @schema ExternalModel#outputConfiguration
   */
  readonly outputConfiguration?: ModelOutputConfiguration;

  /**
   * @schema ExternalModel#modelEndpointStatus
   */
  readonly modelEndpointStatus?: string;

  /**
   * @schema ExternalModel#lastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

  /**
   * @schema ExternalModel#createdTime
   */
  readonly createdTime?: string;

  /**
   * @schema ExternalModel#arn
   */
  readonly arn?: string;

}

/**
 * @schema KmsKey
 */
export interface KmsKey {
  /**
   * @schema KmsKey#kmsEncryptionKeyArn
   */
  readonly kmsEncryptionKeyArn?: string;

}

/**
 * @schema Label
 */
export interface Label {
  /**
   * @schema Label#name
   */
  readonly name?: string;

  /**
   * @schema Label#description
   */
  readonly description?: string;

  /**
   * @schema Label#lastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

  /**
   * @schema Label#createdTime
   */
  readonly createdTime?: string;

  /**
   * @schema Label#arn
   */
  readonly arn?: string;

}

/**
 * @schema Model
 */
export interface Model {
  /**
   * @schema Model#modelId
   */
  readonly modelId?: string;

  /**
   * @schema Model#modelType
   */
  readonly modelType?: string;

  /**
   * @schema Model#description
   */
  readonly description?: string;

  /**
   * @schema Model#eventTypeName
   */
  readonly eventTypeName?: string;

  /**
   * @schema Model#createdTime
   */
  readonly createdTime?: string;

  /**
   * @schema Model#lastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

  /**
   * @schema Model#arn
   */
  readonly arn?: string;

}

/**
 * @schema Outcome
 */
export interface Outcome {
  /**
   * @schema Outcome#name
   */
  readonly name?: string;

  /**
   * @schema Outcome#description
   */
  readonly description?: string;

  /**
   * @schema Outcome#lastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

  /**
   * @schema Outcome#createdTime
   */
  readonly createdTime?: string;

  /**
   * @schema Outcome#arn
   */
  readonly arn?: string;

}

/**
 * @schema RuleDetail
 */
export interface RuleDetail {
  /**
   * @schema RuleDetail#ruleId
   */
  readonly ruleId?: string;

  /**
   * @schema RuleDetail#description
   */
  readonly description?: string;

  /**
   * @schema RuleDetail#detectorId
   */
  readonly detectorId?: string;

  /**
   * @schema RuleDetail#ruleVersion
   */
  readonly ruleVersion?: string;

  /**
   * @schema RuleDetail#expression
   */
  readonly expression?: string;

  /**
   * @schema RuleDetail#language
   */
  readonly language?: string;

  /**
   * @schema RuleDetail#outcomes
   */
  readonly outcomes?: string[];

  /**
   * @schema RuleDetail#lastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

  /**
   * @schema RuleDetail#createdTime
   */
  readonly createdTime?: string;

  /**
   * @schema RuleDetail#arn
   */
  readonly arn?: string;

}

/**
 * @schema ModelInputConfiguration
 */
export interface ModelInputConfiguration {
  /**
   * @schema ModelInputConfiguration#eventTypeName
   */
  readonly eventTypeName?: string;

  /**
   * @schema ModelInputConfiguration#format
   */
  readonly format?: string;

  /**
   * @schema ModelInputConfiguration#useEventVariables
   */
  readonly useEventVariables: boolean;

  /**
   * @schema ModelInputConfiguration#jsonInputTemplate
   */
  readonly jsonInputTemplate?: string;

  /**
   * @schema ModelInputConfiguration#csvInputTemplate
   */
  readonly csvInputTemplate?: string;

}

/**
 * @schema ModelOutputConfiguration
 */
export interface ModelOutputConfiguration {
  /**
   * @schema ModelOutputConfiguration#format
   */
  readonly format: string;

  /**
   * @schema ModelOutputConfiguration#jsonKeyToVariableMap
   */
  readonly jsonKeyToVariableMap?: { [key: string]: string };

  /**
   * @schema ModelOutputConfiguration#csvIndexToVariableMap
   */
  readonly csvIndexToVariableMap?: { [key: string]: string };

}

/**
 * @schema LabelSchema
 */
export interface LabelSchema {
  /**
   * @schema LabelSchema#labelMapper
   */
  readonly labelMapper: { [key: string]: string[] };

}

/**
 * @schema TrainingResult
 */
export interface TrainingResult {
  /**
   * @schema TrainingResult#dataValidationMetrics
   */
  readonly dataValidationMetrics?: DataValidationMetrics;

  /**
   * @schema TrainingResult#trainingMetrics
   */
  readonly trainingMetrics?: TrainingMetrics;

}

/**
 * @schema DataValidationMetrics
 */
export interface DataValidationMetrics {
  /**
   * @schema DataValidationMetrics#fileLevelMessages
   */
  readonly fileLevelMessages?: FileValidationMessage[];

  /**
   * @schema DataValidationMetrics#fieldLevelMessages
   */
  readonly fieldLevelMessages?: FieldValidationMessage[];

}

/**
 * @schema TrainingMetrics
 */
export interface TrainingMetrics {
  /**
   * @schema TrainingMetrics#auc
   */
  readonly auc?: number;

  /**
   * @schema TrainingMetrics#metricDataPoints
   */
  readonly metricDataPoints?: MetricDataPoint[];

}

/**
 * @schema FileValidationMessage
 */
export interface FileValidationMessage {
  /**
   * @schema FileValidationMessage#title
   */
  readonly title?: string;

  /**
   * @schema FileValidationMessage#content
   */
  readonly content?: string;

  /**
   * @schema FileValidationMessage#type
   */
  readonly type?: string;

}

/**
 * @schema FieldValidationMessage
 */
export interface FieldValidationMessage {
  /**
   * @schema FieldValidationMessage#fieldName
   */
  readonly fieldName?: string;

  /**
   * @schema FieldValidationMessage#identifier
   */
  readonly identifier?: string;

  /**
   * @schema FieldValidationMessage#title
   */
  readonly title?: string;

  /**
   * @schema FieldValidationMessage#content
   */
  readonly content?: string;

  /**
   * @schema FieldValidationMessage#type
   */
  readonly type?: string;

}

/**
 * @schema MetricDataPoint
 */
export interface MetricDataPoint {
  /**
   * @schema MetricDataPoint#fpr
   */
  readonly fpr?: number;

  /**
   * @schema MetricDataPoint#precision
   */
  readonly precision?: number;

  /**
   * @schema MetricDataPoint#tpr
   */
  readonly tpr?: number;

  /**
   * @schema MetricDataPoint#threshold
   */
  readonly threshold?: number;

}
