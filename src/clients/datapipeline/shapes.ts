/**
 * @schema ActivatePipelineInput
 */
export interface ActivatePipelineInput {
  /**
   * @schema ActivatePipelineInput#pipelineId
   */
  readonly pipelineId: string;

  /**
   * @schema ActivatePipelineInput#parameterValues
   */
  readonly parameterValues?: ParameterValue[];

  /**
   * @schema ActivatePipelineInput#startTimestamp
   */
  readonly startTimestamp?: string;

}

/**
 * @schema ActivatePipelineOutput
 */
export interface ActivatePipelineOutput {
}

/**
 * @schema AddTagsInput
 */
export interface AddTagsInput {
  /**
   * @schema AddTagsInput#pipelineId
   */
  readonly pipelineId: string;

  /**
   * @schema AddTagsInput#tags
   */
  readonly tags: Tag[];

}

/**
 * @schema AddTagsOutput
 */
export interface AddTagsOutput {
}

/**
 * @schema CreatePipelineInput
 */
export interface CreatePipelineInput {
  /**
   * @schema CreatePipelineInput#name
   */
  readonly name: string;

  /**
   * @schema CreatePipelineInput#uniqueId
   */
  readonly uniqueId: string;

  /**
   * @schema CreatePipelineInput#description
   */
  readonly description?: string;

  /**
   * @schema CreatePipelineInput#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreatePipelineOutput
 */
export interface CreatePipelineOutput {
  /**
   * @schema CreatePipelineOutput#pipelineId
   */
  readonly pipelineId: string;

}

/**
 * @schema DeactivatePipelineInput
 */
export interface DeactivatePipelineInput {
  /**
   * @schema DeactivatePipelineInput#pipelineId
   */
  readonly pipelineId: string;

  /**
   * @schema DeactivatePipelineInput#cancelActive
   */
  readonly cancelActive?: boolean;

}

/**
 * @schema DeactivatePipelineOutput
 */
export interface DeactivatePipelineOutput {
}

/**
 * @schema DeletePipelineInput
 */
export interface DeletePipelineInput {
  /**
   * @schema DeletePipelineInput#pipelineId
   */
  readonly pipelineId: string;

}

/**
 * @schema DescribeObjectsInput
 */
export interface DescribeObjectsInput {
  /**
   * @schema DescribeObjectsInput#pipelineId
   */
  readonly pipelineId: string;

  /**
   * @schema DescribeObjectsInput#objectIds
   */
  readonly objectIds: string[];

  /**
   * @schema DescribeObjectsInput#evaluateExpressions
   */
  readonly evaluateExpressions?: boolean;

  /**
   * @schema DescribeObjectsInput#marker
   */
  readonly marker?: string;

}

/**
 * @schema DescribeObjectsOutput
 */
export interface DescribeObjectsOutput {
  /**
   * @schema DescribeObjectsOutput#pipelineObjects
   */
  readonly pipelineObjects: PipelineObject[];

  /**
   * @schema DescribeObjectsOutput#marker
   */
  readonly marker?: string;

  /**
   * @schema DescribeObjectsOutput#hasMoreResults
   */
  readonly hasMoreResults?: boolean;

}

/**
 * @schema DescribePipelinesInput
 */
export interface DescribePipelinesInput {
  /**
   * @schema DescribePipelinesInput#pipelineIds
   */
  readonly pipelineIds: string[];

}

/**
 * @schema DescribePipelinesOutput
 */
export interface DescribePipelinesOutput {
  /**
   * @schema DescribePipelinesOutput#pipelineDescriptionList
   */
  readonly pipelineDescriptionList: PipelineDescription[];

}

/**
 * @schema EvaluateExpressionInput
 */
export interface EvaluateExpressionInput {
  /**
   * @schema EvaluateExpressionInput#pipelineId
   */
  readonly pipelineId: string;

  /**
   * @schema EvaluateExpressionInput#objectId
   */
  readonly objectId: string;

  /**
   * @schema EvaluateExpressionInput#expression
   */
  readonly expression: string;

}

/**
 * @schema EvaluateExpressionOutput
 */
export interface EvaluateExpressionOutput {
  /**
   * @schema EvaluateExpressionOutput#evaluatedExpression
   */
  readonly evaluatedExpression: string;

}

/**
 * @schema GetPipelineDefinitionInput
 */
export interface GetPipelineDefinitionInput {
  /**
   * @schema GetPipelineDefinitionInput#pipelineId
   */
  readonly pipelineId: string;

  /**
   * @schema GetPipelineDefinitionInput#version
   */
  readonly version?: string;

}

/**
 * @schema GetPipelineDefinitionOutput
 */
export interface GetPipelineDefinitionOutput {
  /**
   * @schema GetPipelineDefinitionOutput#pipelineObjects
   */
  readonly pipelineObjects?: PipelineObject[];

  /**
   * @schema GetPipelineDefinitionOutput#parameterObjects
   */
  readonly parameterObjects?: ParameterObject[];

  /**
   * @schema GetPipelineDefinitionOutput#parameterValues
   */
  readonly parameterValues?: ParameterValue[];

}

/**
 * @schema ListPipelinesInput
 */
export interface ListPipelinesInput {
  /**
   * @schema ListPipelinesInput#marker
   */
  readonly marker?: string;

}

/**
 * @schema ListPipelinesOutput
 */
export interface ListPipelinesOutput {
  /**
   * @schema ListPipelinesOutput#pipelineIdList
   */
  readonly pipelineIdList: PipelineIdName[];

  /**
   * @schema ListPipelinesOutput#marker
   */
  readonly marker?: string;

  /**
   * @schema ListPipelinesOutput#hasMoreResults
   */
  readonly hasMoreResults?: boolean;

}

/**
 * @schema PollForTaskInput
 */
export interface PollForTaskInput {
  /**
   * @schema PollForTaskInput#workerGroup
   */
  readonly workerGroup: string;

  /**
   * @schema PollForTaskInput#hostname
   */
  readonly hostname?: string;

  /**
   * @schema PollForTaskInput#instanceIdentity
   */
  readonly instanceIdentity?: InstanceIdentity;

}

/**
 * @schema PollForTaskOutput
 */
export interface PollForTaskOutput {
  /**
   * @schema PollForTaskOutput#taskObject
   */
  readonly taskObject?: TaskObject;

}

/**
 * @schema PutPipelineDefinitionInput
 */
export interface PutPipelineDefinitionInput {
  /**
   * @schema PutPipelineDefinitionInput#pipelineId
   */
  readonly pipelineId: string;

  /**
   * @schema PutPipelineDefinitionInput#pipelineObjects
   */
  readonly pipelineObjects: PipelineObject[];

  /**
   * @schema PutPipelineDefinitionInput#parameterObjects
   */
  readonly parameterObjects?: ParameterObject[];

  /**
   * @schema PutPipelineDefinitionInput#parameterValues
   */
  readonly parameterValues?: ParameterValue[];

}

/**
 * @schema PutPipelineDefinitionOutput
 */
export interface PutPipelineDefinitionOutput {
  /**
   * @schema PutPipelineDefinitionOutput#validationErrors
   */
  readonly validationErrors?: ValidationError[];

  /**
   * @schema PutPipelineDefinitionOutput#validationWarnings
   */
  readonly validationWarnings?: ValidationWarning[];

  /**
   * @schema PutPipelineDefinitionOutput#errored
   */
  readonly errored: boolean;

}

/**
 * @schema QueryObjectsInput
 */
export interface QueryObjectsInput {
  /**
   * @schema QueryObjectsInput#pipelineId
   */
  readonly pipelineId: string;

  /**
   * @schema QueryObjectsInput#query
   */
  readonly query?: Query;

  /**
   * @schema QueryObjectsInput#sphere
   */
  readonly sphere: string;

  /**
   * @schema QueryObjectsInput#marker
   */
  readonly marker?: string;

  /**
   * @schema QueryObjectsInput#limit
   */
  readonly limit?: number;

}

/**
 * @schema QueryObjectsOutput
 */
export interface QueryObjectsOutput {
  /**
   * @schema QueryObjectsOutput#ids
   */
  readonly ids?: string[];

  /**
   * @schema QueryObjectsOutput#marker
   */
  readonly marker?: string;

  /**
   * @schema QueryObjectsOutput#hasMoreResults
   */
  readonly hasMoreResults?: boolean;

}

/**
 * @schema RemoveTagsInput
 */
export interface RemoveTagsInput {
  /**
   * @schema RemoveTagsInput#pipelineId
   */
  readonly pipelineId: string;

  /**
   * @schema RemoveTagsInput#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema RemoveTagsOutput
 */
export interface RemoveTagsOutput {
}

/**
 * @schema ReportTaskProgressInput
 */
export interface ReportTaskProgressInput {
  /**
   * @schema ReportTaskProgressInput#taskId
   */
  readonly taskId: string;

  /**
   * @schema ReportTaskProgressInput#fields
   */
  readonly fields?: Field[];

}

/**
 * @schema ReportTaskProgressOutput
 */
export interface ReportTaskProgressOutput {
  /**
   * @schema ReportTaskProgressOutput#canceled
   */
  readonly canceled: boolean;

}

/**
 * @schema ReportTaskRunnerHeartbeatInput
 */
export interface ReportTaskRunnerHeartbeatInput {
  /**
   * @schema ReportTaskRunnerHeartbeatInput#taskrunnerId
   */
  readonly taskrunnerId: string;

  /**
   * @schema ReportTaskRunnerHeartbeatInput#workerGroup
   */
  readonly workerGroup?: string;

  /**
   * @schema ReportTaskRunnerHeartbeatInput#hostname
   */
  readonly hostname?: string;

}

/**
 * @schema ReportTaskRunnerHeartbeatOutput
 */
export interface ReportTaskRunnerHeartbeatOutput {
  /**
   * @schema ReportTaskRunnerHeartbeatOutput#terminate
   */
  readonly terminate: boolean;

}

/**
 * @schema SetStatusInput
 */
export interface SetStatusInput {
  /**
   * @schema SetStatusInput#pipelineId
   */
  readonly pipelineId: string;

  /**
   * @schema SetStatusInput#objectIds
   */
  readonly objectIds: string[];

  /**
   * @schema SetStatusInput#status
   */
  readonly status: string;

}

/**
 * @schema SetTaskStatusInput
 */
export interface SetTaskStatusInput {
  /**
   * @schema SetTaskStatusInput#taskId
   */
  readonly taskId: string;

  /**
   * @schema SetTaskStatusInput#taskStatus
   */
  readonly taskStatus: string;

  /**
   * @schema SetTaskStatusInput#errorId
   */
  readonly errorId?: string;

  /**
   * @schema SetTaskStatusInput#errorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema SetTaskStatusInput#errorStackTrace
   */
  readonly errorStackTrace?: string;

}

/**
 * @schema SetTaskStatusOutput
 */
export interface SetTaskStatusOutput {
}

/**
 * @schema ValidatePipelineDefinitionInput
 */
export interface ValidatePipelineDefinitionInput {
  /**
   * @schema ValidatePipelineDefinitionInput#pipelineId
   */
  readonly pipelineId: string;

  /**
   * @schema ValidatePipelineDefinitionInput#pipelineObjects
   */
  readonly pipelineObjects: PipelineObject[];

  /**
   * @schema ValidatePipelineDefinitionInput#parameterObjects
   */
  readonly parameterObjects?: ParameterObject[];

  /**
   * @schema ValidatePipelineDefinitionInput#parameterValues
   */
  readonly parameterValues?: ParameterValue[];

}

/**
 * @schema ValidatePipelineDefinitionOutput
 */
export interface ValidatePipelineDefinitionOutput {
  /**
   * @schema ValidatePipelineDefinitionOutput#validationErrors
   */
  readonly validationErrors?: ValidationError[];

  /**
   * @schema ValidatePipelineDefinitionOutput#validationWarnings
   */
  readonly validationWarnings?: ValidationWarning[];

  /**
   * @schema ValidatePipelineDefinitionOutput#errored
   */
  readonly errored: boolean;

}

/**
 * @schema ParameterValue
 */
export interface ParameterValue {
  /**
   * @schema ParameterValue#id
   */
  readonly id: string;

  /**
   * @schema ParameterValue#stringValue
   */
  readonly stringValue: string;

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
 * @schema PipelineObject
 */
export interface PipelineObject {
  /**
   * @schema PipelineObject#id
   */
  readonly id: string;

  /**
   * @schema PipelineObject#name
   */
  readonly name: string;

  /**
   * @schema PipelineObject#fields
   */
  readonly fields: Field[];

}

/**
 * @schema PipelineDescription
 */
export interface PipelineDescription {
  /**
   * @schema PipelineDescription#pipelineId
   */
  readonly pipelineId: string;

  /**
   * @schema PipelineDescription#name
   */
  readonly name: string;

  /**
   * @schema PipelineDescription#fields
   */
  readonly fields: Field[];

  /**
   * @schema PipelineDescription#description
   */
  readonly description?: string;

  /**
   * @schema PipelineDescription#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema ParameterObject
 */
export interface ParameterObject {
  /**
   * @schema ParameterObject#id
   */
  readonly id: string;

  /**
   * @schema ParameterObject#attributes
   */
  readonly attributes: ParameterAttribute[];

}

/**
 * @schema PipelineIdName
 */
export interface PipelineIdName {
  /**
   * @schema PipelineIdName#id
   */
  readonly id?: string;

  /**
   * @schema PipelineIdName#name
   */
  readonly name?: string;

}

/**
 * @schema InstanceIdentity
 */
export interface InstanceIdentity {
  /**
   * @schema InstanceIdentity#document
   */
  readonly document?: string;

  /**
   * @schema InstanceIdentity#signature
   */
  readonly signature?: string;

}

/**
 * @schema TaskObject
 */
export interface TaskObject {
  /**
   * @schema TaskObject#taskId
   */
  readonly taskId?: string;

  /**
   * @schema TaskObject#pipelineId
   */
  readonly pipelineId?: string;

  /**
   * @schema TaskObject#attemptId
   */
  readonly attemptId?: string;

  /**
   * @schema TaskObject#objects
   */
  readonly objects?: { [key: string]: PipelineObject };

}

/**
 * @schema ValidationError
 */
export interface ValidationError {
  /**
   * @schema ValidationError#id
   */
  readonly id?: string;

  /**
   * @schema ValidationError#errors
   */
  readonly errors?: string[];

}

/**
 * @schema ValidationWarning
 */
export interface ValidationWarning {
  /**
   * @schema ValidationWarning#id
   */
  readonly id?: string;

  /**
   * @schema ValidationWarning#warnings
   */
  readonly warnings?: string[];

}

/**
 * @schema Query
 */
export interface Query {
  /**
   * @schema Query#selectors
   */
  readonly selectors?: Selector[];

}

/**
 * @schema Field
 */
export interface Field {
  /**
   * @schema Field#key
   */
  readonly key: string;

  /**
   * @schema Field#stringValue
   */
  readonly stringValue?: string;

  /**
   * @schema Field#refValue
   */
  readonly refValue?: string;

}

/**
 * @schema ParameterAttribute
 */
export interface ParameterAttribute {
  /**
   * @schema ParameterAttribute#key
   */
  readonly key: string;

  /**
   * @schema ParameterAttribute#stringValue
   */
  readonly stringValue: string;

}

/**
 * @schema Selector
 */
export interface Selector {
  /**
   * @schema Selector#fieldName
   */
  readonly fieldName?: string;

  /**
   * @schema Selector#operator
   */
  readonly operator?: Operator;

}

/**
 * @schema Operator
 */
export interface Operator {
  /**
   * @schema Operator#type
   */
  readonly type?: string;

  /**
   * @schema Operator#values
   */
  readonly values?: string[];

}
