/**
 * @schema DataPipelineActivatePipelineInput
 */
export interface DataPipelineActivatePipelineInput {
  /**
   * @schema DataPipelineActivatePipelineInput#pipelineId
   */
  readonly pipelineId: string;

  /**
   * @schema DataPipelineActivatePipelineInput#parameterValues
   */
  readonly parameterValues?: DataPipelineParameterValue[];

  /**
   * @schema DataPipelineActivatePipelineInput#startTimestamp
   */
  readonly startTimestamp?: string;

}

/**
 * @schema DataPipelineActivatePipelineOutput
 */
export interface DataPipelineActivatePipelineOutput {
}

/**
 * @schema DataPipelineAddTagsInput
 */
export interface DataPipelineAddTagsInput {
  /**
   * @schema DataPipelineAddTagsInput#pipelineId
   */
  readonly pipelineId: string;

  /**
   * @schema DataPipelineAddTagsInput#tags
   */
  readonly tags: DataPipelineTag[];

}

/**
 * @schema DataPipelineAddTagsOutput
 */
export interface DataPipelineAddTagsOutput {
}

/**
 * @schema DataPipelineCreatePipelineInput
 */
export interface DataPipelineCreatePipelineInput {
  /**
   * @schema DataPipelineCreatePipelineInput#name
   */
  readonly name: string;

  /**
   * @schema DataPipelineCreatePipelineInput#uniqueId
   */
  readonly uniqueId: string;

  /**
   * @schema DataPipelineCreatePipelineInput#description
   */
  readonly description?: string;

  /**
   * @schema DataPipelineCreatePipelineInput#tags
   */
  readonly tags?: DataPipelineTag[];

}

/**
 * @schema DataPipelineCreatePipelineOutput
 */
export interface DataPipelineCreatePipelineOutput {
  /**
   * @schema DataPipelineCreatePipelineOutput#pipelineId
   */
  readonly pipelineId: string;

}

/**
 * @schema DataPipelineDeactivatePipelineInput
 */
export interface DataPipelineDeactivatePipelineInput {
  /**
   * @schema DataPipelineDeactivatePipelineInput#pipelineId
   */
  readonly pipelineId: string;

  /**
   * @schema DataPipelineDeactivatePipelineInput#cancelActive
   */
  readonly cancelActive?: boolean;

}

/**
 * @schema DataPipelineDeactivatePipelineOutput
 */
export interface DataPipelineDeactivatePipelineOutput {
}

/**
 * @schema DataPipelineDeletePipelineInput
 */
export interface DataPipelineDeletePipelineInput {
  /**
   * @schema DataPipelineDeletePipelineInput#pipelineId
   */
  readonly pipelineId: string;

}

/**
 * @schema DataPipelineDescribeObjectsInput
 */
export interface DataPipelineDescribeObjectsInput {
  /**
   * @schema DataPipelineDescribeObjectsInput#pipelineId
   */
  readonly pipelineId: string;

  /**
   * @schema DataPipelineDescribeObjectsInput#objectIds
   */
  readonly objectIds: string[];

  /**
   * @schema DataPipelineDescribeObjectsInput#evaluateExpressions
   */
  readonly evaluateExpressions?: boolean;

  /**
   * @schema DataPipelineDescribeObjectsInput#marker
   */
  readonly marker?: string;

}

/**
 * @schema DataPipelineDescribeObjectsOutput
 */
export interface DataPipelineDescribeObjectsOutput {
  /**
   * @schema DataPipelineDescribeObjectsOutput#pipelineObjects
   */
  readonly pipelineObjects: DataPipelinePipelineObject[];

  /**
   * @schema DataPipelineDescribeObjectsOutput#marker
   */
  readonly marker?: string;

  /**
   * @schema DataPipelineDescribeObjectsOutput#hasMoreResults
   */
  readonly hasMoreResults?: boolean;

}

/**
 * @schema DataPipelineDescribePipelinesInput
 */
export interface DataPipelineDescribePipelinesInput {
  /**
   * @schema DataPipelineDescribePipelinesInput#pipelineIds
   */
  readonly pipelineIds: string[];

}

/**
 * @schema DataPipelineDescribePipelinesOutput
 */
export interface DataPipelineDescribePipelinesOutput {
  /**
   * @schema DataPipelineDescribePipelinesOutput#pipelineDescriptionList
   */
  readonly pipelineDescriptionList: DataPipelinePipelineDescription[];

}

/**
 * @schema DataPipelineEvaluateExpressionInput
 */
export interface DataPipelineEvaluateExpressionInput {
  /**
   * @schema DataPipelineEvaluateExpressionInput#pipelineId
   */
  readonly pipelineId: string;

  /**
   * @schema DataPipelineEvaluateExpressionInput#objectId
   */
  readonly objectId: string;

  /**
   * @schema DataPipelineEvaluateExpressionInput#expression
   */
  readonly expression: string;

}

/**
 * @schema DataPipelineEvaluateExpressionOutput
 */
export interface DataPipelineEvaluateExpressionOutput {
  /**
   * @schema DataPipelineEvaluateExpressionOutput#evaluatedExpression
   */
  readonly evaluatedExpression: string;

}

/**
 * @schema DataPipelineGetPipelineDefinitionInput
 */
export interface DataPipelineGetPipelineDefinitionInput {
  /**
   * @schema DataPipelineGetPipelineDefinitionInput#pipelineId
   */
  readonly pipelineId: string;

  /**
   * @schema DataPipelineGetPipelineDefinitionInput#version
   */
  readonly version?: string;

}

/**
 * @schema DataPipelineGetPipelineDefinitionOutput
 */
export interface DataPipelineGetPipelineDefinitionOutput {
  /**
   * @schema DataPipelineGetPipelineDefinitionOutput#pipelineObjects
   */
  readonly pipelineObjects?: DataPipelinePipelineObject[];

  /**
   * @schema DataPipelineGetPipelineDefinitionOutput#parameterObjects
   */
  readonly parameterObjects?: DataPipelineParameterObject[];

  /**
   * @schema DataPipelineGetPipelineDefinitionOutput#parameterValues
   */
  readonly parameterValues?: DataPipelineParameterValue[];

}

/**
 * @schema DataPipelineListPipelinesInput
 */
export interface DataPipelineListPipelinesInput {
  /**
   * @schema DataPipelineListPipelinesInput#marker
   */
  readonly marker?: string;

}

/**
 * @schema DataPipelineListPipelinesOutput
 */
export interface DataPipelineListPipelinesOutput {
  /**
   * @schema DataPipelineListPipelinesOutput#pipelineIdList
   */
  readonly pipelineIdList: DataPipelinePipelineIdName[];

  /**
   * @schema DataPipelineListPipelinesOutput#marker
   */
  readonly marker?: string;

  /**
   * @schema DataPipelineListPipelinesOutput#hasMoreResults
   */
  readonly hasMoreResults?: boolean;

}

/**
 * @schema DataPipelinePollForTaskInput
 */
export interface DataPipelinePollForTaskInput {
  /**
   * @schema DataPipelinePollForTaskInput#workerGroup
   */
  readonly workerGroup: string;

  /**
   * @schema DataPipelinePollForTaskInput#hostname
   */
  readonly hostname?: string;

  /**
   * @schema DataPipelinePollForTaskInput#instanceIdentity
   */
  readonly instanceIdentity?: DataPipelineInstanceIdentity;

}

/**
 * @schema DataPipelinePollForTaskOutput
 */
export interface DataPipelinePollForTaskOutput {
  /**
   * @schema DataPipelinePollForTaskOutput#taskObject
   */
  readonly taskObject?: DataPipelineTaskObject;

}

/**
 * @schema DataPipelinePutPipelineDefinitionInput
 */
export interface DataPipelinePutPipelineDefinitionInput {
  /**
   * @schema DataPipelinePutPipelineDefinitionInput#pipelineId
   */
  readonly pipelineId: string;

  /**
   * @schema DataPipelinePutPipelineDefinitionInput#pipelineObjects
   */
  readonly pipelineObjects: DataPipelinePipelineObject[];

  /**
   * @schema DataPipelinePutPipelineDefinitionInput#parameterObjects
   */
  readonly parameterObjects?: DataPipelineParameterObject[];

  /**
   * @schema DataPipelinePutPipelineDefinitionInput#parameterValues
   */
  readonly parameterValues?: DataPipelineParameterValue[];

}

/**
 * @schema DataPipelinePutPipelineDefinitionOutput
 */
export interface DataPipelinePutPipelineDefinitionOutput {
  /**
   * @schema DataPipelinePutPipelineDefinitionOutput#validationErrors
   */
  readonly validationErrors?: DataPipelineValidationError[];

  /**
   * @schema DataPipelinePutPipelineDefinitionOutput#validationWarnings
   */
  readonly validationWarnings?: DataPipelineValidationWarning[];

  /**
   * @schema DataPipelinePutPipelineDefinitionOutput#errored
   */
  readonly errored: boolean;

}

/**
 * @schema DataPipelineQueryObjectsInput
 */
export interface DataPipelineQueryObjectsInput {
  /**
   * @schema DataPipelineQueryObjectsInput#pipelineId
   */
  readonly pipelineId: string;

  /**
   * @schema DataPipelineQueryObjectsInput#query
   */
  readonly query?: DataPipelineQuery;

  /**
   * @schema DataPipelineQueryObjectsInput#sphere
   */
  readonly sphere: string;

  /**
   * @schema DataPipelineQueryObjectsInput#marker
   */
  readonly marker?: string;

  /**
   * @schema DataPipelineQueryObjectsInput#limit
   */
  readonly limit?: number;

}

/**
 * @schema DataPipelineQueryObjectsOutput
 */
export interface DataPipelineQueryObjectsOutput {
  /**
   * @schema DataPipelineQueryObjectsOutput#ids
   */
  readonly ids?: string[];

  /**
   * @schema DataPipelineQueryObjectsOutput#marker
   */
  readonly marker?: string;

  /**
   * @schema DataPipelineQueryObjectsOutput#hasMoreResults
   */
  readonly hasMoreResults?: boolean;

}

/**
 * @schema DataPipelineRemoveTagsInput
 */
export interface DataPipelineRemoveTagsInput {
  /**
   * @schema DataPipelineRemoveTagsInput#pipelineId
   */
  readonly pipelineId: string;

  /**
   * @schema DataPipelineRemoveTagsInput#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema DataPipelineRemoveTagsOutput
 */
export interface DataPipelineRemoveTagsOutput {
}

/**
 * @schema DataPipelineReportTaskProgressInput
 */
export interface DataPipelineReportTaskProgressInput {
  /**
   * @schema DataPipelineReportTaskProgressInput#taskId
   */
  readonly taskId: string;

  /**
   * @schema DataPipelineReportTaskProgressInput#fields
   */
  readonly fields?: DataPipelineField[];

}

/**
 * @schema DataPipelineReportTaskProgressOutput
 */
export interface DataPipelineReportTaskProgressOutput {
  /**
   * @schema DataPipelineReportTaskProgressOutput#canceled
   */
  readonly canceled: boolean;

}

/**
 * @schema DataPipelineReportTaskRunnerHeartbeatInput
 */
export interface DataPipelineReportTaskRunnerHeartbeatInput {
  /**
   * @schema DataPipelineReportTaskRunnerHeartbeatInput#taskrunnerId
   */
  readonly taskrunnerId: string;

  /**
   * @schema DataPipelineReportTaskRunnerHeartbeatInput#workerGroup
   */
  readonly workerGroup?: string;

  /**
   * @schema DataPipelineReportTaskRunnerHeartbeatInput#hostname
   */
  readonly hostname?: string;

}

/**
 * @schema DataPipelineReportTaskRunnerHeartbeatOutput
 */
export interface DataPipelineReportTaskRunnerHeartbeatOutput {
  /**
   * @schema DataPipelineReportTaskRunnerHeartbeatOutput#terminate
   */
  readonly terminate: boolean;

}

/**
 * @schema DataPipelineSetStatusInput
 */
export interface DataPipelineSetStatusInput {
  /**
   * @schema DataPipelineSetStatusInput#pipelineId
   */
  readonly pipelineId: string;

  /**
   * @schema DataPipelineSetStatusInput#objectIds
   */
  readonly objectIds: string[];

  /**
   * @schema DataPipelineSetStatusInput#status
   */
  readonly status: string;

}

/**
 * @schema DataPipelineSetTaskStatusInput
 */
export interface DataPipelineSetTaskStatusInput {
  /**
   * @schema DataPipelineSetTaskStatusInput#taskId
   */
  readonly taskId: string;

  /**
   * @schema DataPipelineSetTaskStatusInput#taskStatus
   */
  readonly taskStatus: string;

  /**
   * @schema DataPipelineSetTaskStatusInput#errorId
   */
  readonly errorId?: string;

  /**
   * @schema DataPipelineSetTaskStatusInput#errorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema DataPipelineSetTaskStatusInput#errorStackTrace
   */
  readonly errorStackTrace?: string;

}

/**
 * @schema DataPipelineSetTaskStatusOutput
 */
export interface DataPipelineSetTaskStatusOutput {
}

/**
 * @schema DataPipelineValidatePipelineDefinitionInput
 */
export interface DataPipelineValidatePipelineDefinitionInput {
  /**
   * @schema DataPipelineValidatePipelineDefinitionInput#pipelineId
   */
  readonly pipelineId: string;

  /**
   * @schema DataPipelineValidatePipelineDefinitionInput#pipelineObjects
   */
  readonly pipelineObjects: DataPipelinePipelineObject[];

  /**
   * @schema DataPipelineValidatePipelineDefinitionInput#parameterObjects
   */
  readonly parameterObjects?: DataPipelineParameterObject[];

  /**
   * @schema DataPipelineValidatePipelineDefinitionInput#parameterValues
   */
  readonly parameterValues?: DataPipelineParameterValue[];

}

/**
 * @schema DataPipelineValidatePipelineDefinitionOutput
 */
export interface DataPipelineValidatePipelineDefinitionOutput {
  /**
   * @schema DataPipelineValidatePipelineDefinitionOutput#validationErrors
   */
  readonly validationErrors?: DataPipelineValidationError[];

  /**
   * @schema DataPipelineValidatePipelineDefinitionOutput#validationWarnings
   */
  readonly validationWarnings?: DataPipelineValidationWarning[];

  /**
   * @schema DataPipelineValidatePipelineDefinitionOutput#errored
   */
  readonly errored: boolean;

}

/**
 * @schema DataPipelineParameterValue
 */
export interface DataPipelineParameterValue {
  /**
   * @schema DataPipelineParameterValue#id
   */
  readonly id: string;

  /**
   * @schema DataPipelineParameterValue#stringValue
   */
  readonly stringValue: string;

}

/**
 * @schema DataPipelineTag
 */
export interface DataPipelineTag {
  /**
   * @schema DataPipelineTag#key
   */
  readonly key: string;

  /**
   * @schema DataPipelineTag#value
   */
  readonly value: string;

}

/**
 * @schema DataPipelinePipelineObject
 */
export interface DataPipelinePipelineObject {
  /**
   * @schema DataPipelinePipelineObject#id
   */
  readonly id: string;

  /**
   * @schema DataPipelinePipelineObject#name
   */
  readonly name: string;

  /**
   * @schema DataPipelinePipelineObject#fields
   */
  readonly fields: DataPipelineField[];

}

/**
 * @schema DataPipelinePipelineDescription
 */
export interface DataPipelinePipelineDescription {
  /**
   * @schema DataPipelinePipelineDescription#pipelineId
   */
  readonly pipelineId: string;

  /**
   * @schema DataPipelinePipelineDescription#name
   */
  readonly name: string;

  /**
   * @schema DataPipelinePipelineDescription#fields
   */
  readonly fields: DataPipelineField[];

  /**
   * @schema DataPipelinePipelineDescription#description
   */
  readonly description?: string;

  /**
   * @schema DataPipelinePipelineDescription#tags
   */
  readonly tags?: DataPipelineTag[];

}

/**
 * @schema DataPipelineParameterObject
 */
export interface DataPipelineParameterObject {
  /**
   * @schema DataPipelineParameterObject#id
   */
  readonly id: string;

  /**
   * @schema DataPipelineParameterObject#attributes
   */
  readonly attributes: DataPipelineParameterAttribute[];

}

/**
 * @schema DataPipelinePipelineIdName
 */
export interface DataPipelinePipelineIdName {
  /**
   * @schema DataPipelinePipelineIdName#id
   */
  readonly id?: string;

  /**
   * @schema DataPipelinePipelineIdName#name
   */
  readonly name?: string;

}

/**
 * @schema DataPipelineInstanceIdentity
 */
export interface DataPipelineInstanceIdentity {
  /**
   * @schema DataPipelineInstanceIdentity#document
   */
  readonly document?: string;

  /**
   * @schema DataPipelineInstanceIdentity#signature
   */
  readonly signature?: string;

}

/**
 * @schema DataPipelineTaskObject
 */
export interface DataPipelineTaskObject {
  /**
   * @schema DataPipelineTaskObject#taskId
   */
  readonly taskId?: string;

  /**
   * @schema DataPipelineTaskObject#pipelineId
   */
  readonly pipelineId?: string;

  /**
   * @schema DataPipelineTaskObject#attemptId
   */
  readonly attemptId?: string;

  /**
   * @schema DataPipelineTaskObject#objects
   */
  readonly objects?: { [key: string]: DataPipelinePipelineObject };

}

/**
 * @schema DataPipelineValidationError
 */
export interface DataPipelineValidationError {
  /**
   * @schema DataPipelineValidationError#id
   */
  readonly id?: string;

  /**
   * @schema DataPipelineValidationError#errors
   */
  readonly errors?: string[];

}

/**
 * @schema DataPipelineValidationWarning
 */
export interface DataPipelineValidationWarning {
  /**
   * @schema DataPipelineValidationWarning#id
   */
  readonly id?: string;

  /**
   * @schema DataPipelineValidationWarning#warnings
   */
  readonly warnings?: string[];

}

/**
 * @schema DataPipelineQuery
 */
export interface DataPipelineQuery {
  /**
   * @schema DataPipelineQuery#selectors
   */
  readonly selectors?: DataPipelineSelector[];

}

/**
 * @schema DataPipelineField
 */
export interface DataPipelineField {
  /**
   * @schema DataPipelineField#key
   */
  readonly key: string;

  /**
   * @schema DataPipelineField#stringValue
   */
  readonly stringValue?: string;

  /**
   * @schema DataPipelineField#refValue
   */
  readonly refValue?: string;

}

/**
 * @schema DataPipelineParameterAttribute
 */
export interface DataPipelineParameterAttribute {
  /**
   * @schema DataPipelineParameterAttribute#key
   */
  readonly key: string;

  /**
   * @schema DataPipelineParameterAttribute#stringValue
   */
  readonly stringValue: string;

}

/**
 * @schema DataPipelineSelector
 */
export interface DataPipelineSelector {
  /**
   * @schema DataPipelineSelector#fieldName
   */
  readonly fieldName?: string;

  /**
   * @schema DataPipelineSelector#operator
   */
  readonly operator?: DataPipelineOperator;

}

/**
 * @schema DataPipelineOperator
 */
export interface DataPipelineOperator {
  /**
   * @schema DataPipelineOperator#type
   */
  readonly type?: string;

  /**
   * @schema DataPipelineOperator#values
   */
  readonly values?: string[];

}
