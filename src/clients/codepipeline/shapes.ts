/**
 * @schema AcknowledgeJobInput
 */
export interface AcknowledgeJobInput {
  /**
   * @schema AcknowledgeJobInput#jobId
   */
  readonly jobId: string;

  /**
   * @schema AcknowledgeJobInput#nonce
   */
  readonly nonce: string;

}

/**
 * @schema AcknowledgeJobOutput
 */
export interface AcknowledgeJobOutput {
  /**
   * @schema AcknowledgeJobOutput#status
   */
  readonly status?: string;

}

/**
 * @schema AcknowledgeThirdPartyJobInput
 */
export interface AcknowledgeThirdPartyJobInput {
  /**
   * @schema AcknowledgeThirdPartyJobInput#jobId
   */
  readonly jobId: string;

  /**
   * @schema AcknowledgeThirdPartyJobInput#nonce
   */
  readonly nonce: string;

  /**
   * @schema AcknowledgeThirdPartyJobInput#clientToken
   */
  readonly clientToken: string;

}

/**
 * @schema AcknowledgeThirdPartyJobOutput
 */
export interface AcknowledgeThirdPartyJobOutput {
  /**
   * @schema AcknowledgeThirdPartyJobOutput#status
   */
  readonly status?: string;

}

/**
 * @schema CreateCustomActionTypeInput
 */
export interface CreateCustomActionTypeInput {
  /**
   * @schema CreateCustomActionTypeInput#category
   */
  readonly category: string;

  /**
   * @schema CreateCustomActionTypeInput#provider
   */
  readonly provider: string;

  /**
   * @schema CreateCustomActionTypeInput#version
   */
  readonly version: string;

  /**
   * @schema CreateCustomActionTypeInput#settings
   */
  readonly settings?: ActionTypeSettings;

  /**
   * @schema CreateCustomActionTypeInput#configurationProperties
   */
  readonly configurationProperties?: ActionConfigurationProperty[];

  /**
   * @schema CreateCustomActionTypeInput#inputArtifactDetails
   */
  readonly inputArtifactDetails: ArtifactDetails;

  /**
   * @schema CreateCustomActionTypeInput#outputArtifactDetails
   */
  readonly outputArtifactDetails: ArtifactDetails;

  /**
   * @schema CreateCustomActionTypeInput#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateCustomActionTypeOutput
 */
export interface CreateCustomActionTypeOutput {
  /**
   * @schema CreateCustomActionTypeOutput#actionType
   */
  readonly actionType: ActionType;

  /**
   * @schema CreateCustomActionTypeOutput#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreatePipelineInput
 */
export interface CreatePipelineInput {
  /**
   * @schema CreatePipelineInput#pipeline
   */
  readonly pipeline: PipelineDeclaration;

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
   * @schema CreatePipelineOutput#pipeline
   */
  readonly pipeline?: PipelineDeclaration;

  /**
   * @schema CreatePipelineOutput#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema DeleteCustomActionTypeInput
 */
export interface DeleteCustomActionTypeInput {
  /**
   * @schema DeleteCustomActionTypeInput#category
   */
  readonly category: string;

  /**
   * @schema DeleteCustomActionTypeInput#provider
   */
  readonly provider: string;

  /**
   * @schema DeleteCustomActionTypeInput#version
   */
  readonly version: string;

}

/**
 * @schema DeletePipelineInput
 */
export interface DeletePipelineInput {
  /**
   * @schema DeletePipelineInput#name
   */
  readonly name: string;

}

/**
 * @schema DeleteWebhookInput
 */
export interface DeleteWebhookInput {
  /**
   * @schema DeleteWebhookInput#name
   */
  readonly name: string;

}

/**
 * @schema DeleteWebhookOutput
 */
export interface DeleteWebhookOutput {
}

/**
 * @schema DeregisterWebhookWithThirdPartyInput
 */
export interface DeregisterWebhookWithThirdPartyInput {
  /**
   * @schema DeregisterWebhookWithThirdPartyInput#webhookName
   */
  readonly webhookName?: string;

}

/**
 * @schema DeregisterWebhookWithThirdPartyOutput
 */
export interface DeregisterWebhookWithThirdPartyOutput {
}

/**
 * @schema DisableStageTransitionInput
 */
export interface DisableStageTransitionInput {
  /**
   * @schema DisableStageTransitionInput#pipelineName
   */
  readonly pipelineName: string;

  /**
   * @schema DisableStageTransitionInput#stageName
   */
  readonly stageName: string;

  /**
   * @schema DisableStageTransitionInput#transitionType
   */
  readonly transitionType: string;

  /**
   * @schema DisableStageTransitionInput#reason
   */
  readonly reason: string;

}

/**
 * @schema EnableStageTransitionInput
 */
export interface EnableStageTransitionInput {
  /**
   * @schema EnableStageTransitionInput#pipelineName
   */
  readonly pipelineName: string;

  /**
   * @schema EnableStageTransitionInput#stageName
   */
  readonly stageName: string;

  /**
   * @schema EnableStageTransitionInput#transitionType
   */
  readonly transitionType: string;

}

/**
 * @schema GetJobDetailsInput
 */
export interface GetJobDetailsInput {
  /**
   * @schema GetJobDetailsInput#jobId
   */
  readonly jobId: string;

}

/**
 * @schema GetJobDetailsOutput
 */
export interface GetJobDetailsOutput {
  /**
   * @schema GetJobDetailsOutput#jobDetails
   */
  readonly jobDetails?: JobDetails;

}

/**
 * @schema GetPipelineInput
 */
export interface GetPipelineInput {
  /**
   * @schema GetPipelineInput#name
   */
  readonly name: string;

  /**
   * @schema GetPipelineInput#version
   */
  readonly version?: number;

}

/**
 * @schema GetPipelineOutput
 */
export interface GetPipelineOutput {
  /**
   * @schema GetPipelineOutput#pipeline
   */
  readonly pipeline?: PipelineDeclaration;

  /**
   * @schema GetPipelineOutput#metadata
   */
  readonly metadata?: PipelineMetadata;

}

/**
 * @schema GetPipelineExecutionInput
 */
export interface GetPipelineExecutionInput {
  /**
   * @schema GetPipelineExecutionInput#pipelineName
   */
  readonly pipelineName: string;

  /**
   * @schema GetPipelineExecutionInput#pipelineExecutionId
   */
  readonly pipelineExecutionId: string;

}

/**
 * @schema GetPipelineExecutionOutput
 */
export interface GetPipelineExecutionOutput {
  /**
   * @schema GetPipelineExecutionOutput#pipelineExecution
   */
  readonly pipelineExecution?: PipelineExecution;

}

/**
 * @schema GetPipelineStateInput
 */
export interface GetPipelineStateInput {
  /**
   * @schema GetPipelineStateInput#name
   */
  readonly name: string;

}

/**
 * @schema GetPipelineStateOutput
 */
export interface GetPipelineStateOutput {
  /**
   * @schema GetPipelineStateOutput#pipelineName
   */
  readonly pipelineName?: string;

  /**
   * @schema GetPipelineStateOutput#pipelineVersion
   */
  readonly pipelineVersion?: number;

  /**
   * @schema GetPipelineStateOutput#stageStates
   */
  readonly stageStates?: StageState[];

  /**
   * @schema GetPipelineStateOutput#created
   */
  readonly created?: string;

  /**
   * @schema GetPipelineStateOutput#updated
   */
  readonly updated?: string;

}

/**
 * @schema GetThirdPartyJobDetailsInput
 */
export interface GetThirdPartyJobDetailsInput {
  /**
   * @schema GetThirdPartyJobDetailsInput#jobId
   */
  readonly jobId: string;

  /**
   * @schema GetThirdPartyJobDetailsInput#clientToken
   */
  readonly clientToken: string;

}

/**
 * @schema GetThirdPartyJobDetailsOutput
 */
export interface GetThirdPartyJobDetailsOutput {
  /**
   * @schema GetThirdPartyJobDetailsOutput#jobDetails
   */
  readonly jobDetails?: ThirdPartyJobDetails;

}

/**
 * @schema ListActionExecutionsInput
 */
export interface ListActionExecutionsInput {
  /**
   * @schema ListActionExecutionsInput#pipelineName
   */
  readonly pipelineName: string;

  /**
   * @schema ListActionExecutionsInput#filter
   */
  readonly filter?: ActionExecutionFilter;

  /**
   * @schema ListActionExecutionsInput#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListActionExecutionsInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListActionExecutionsOutput
 */
export interface ListActionExecutionsOutput {
  /**
   * @schema ListActionExecutionsOutput#actionExecutionDetails
   */
  readonly actionExecutionDetails?: ActionExecutionDetail[];

  /**
   * @schema ListActionExecutionsOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListActionTypesInput
 */
export interface ListActionTypesInput {
  /**
   * @schema ListActionTypesInput#actionOwnerFilter
   */
  readonly actionOwnerFilter?: string;

  /**
   * @schema ListActionTypesInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListActionTypesOutput
 */
export interface ListActionTypesOutput {
  /**
   * @schema ListActionTypesOutput#actionTypes
   */
  readonly actionTypes: ActionType[];

  /**
   * @schema ListActionTypesOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListPipelineExecutionsInput
 */
export interface ListPipelineExecutionsInput {
  /**
   * @schema ListPipelineExecutionsInput#pipelineName
   */
  readonly pipelineName: string;

  /**
   * @schema ListPipelineExecutionsInput#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListPipelineExecutionsInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListPipelineExecutionsOutput
 */
export interface ListPipelineExecutionsOutput {
  /**
   * @schema ListPipelineExecutionsOutput#pipelineExecutionSummaries
   */
  readonly pipelineExecutionSummaries?: PipelineExecutionSummary[];

  /**
   * @schema ListPipelineExecutionsOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListPipelinesInput
 */
export interface ListPipelinesInput {
  /**
   * @schema ListPipelinesInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListPipelinesOutput
 */
export interface ListPipelinesOutput {
  /**
   * @schema ListPipelinesOutput#pipelines
   */
  readonly pipelines?: PipelineSummary[];

  /**
   * @schema ListPipelinesOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsForResourceInput
 */
export interface ListTagsForResourceInput {
  /**
   * @schema ListTagsForResourceInput#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema ListTagsForResourceInput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListTagsForResourceInput#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListTagsForResourceOutput
 */
export interface ListTagsForResourceOutput {
  /**
   * @schema ListTagsForResourceOutput#tags
   */
  readonly tags?: Tag[];

  /**
   * @schema ListTagsForResourceOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListWebhooksInput
 */
export interface ListWebhooksInput {
  /**
   * @schema ListWebhooksInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListWebhooksInput#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListWebhooksOutput
 */
export interface ListWebhooksOutput {
  /**
   * @schema ListWebhooksOutput#webhooks
   */
  readonly webhooks?: ListWebhookItem[];

  /**
   * @schema ListWebhooksOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema PollForJobsInput
 */
export interface PollForJobsInput {
  /**
   * @schema PollForJobsInput#actionTypeId
   */
  readonly actionTypeId: ActionTypeId;

  /**
   * @schema PollForJobsInput#maxBatchSize
   */
  readonly maxBatchSize?: number;

  /**
   * @schema PollForJobsInput#queryParam
   */
  readonly queryParam?: { [key: string]: string };

}

/**
 * @schema PollForJobsOutput
 */
export interface PollForJobsOutput {
  /**
   * @schema PollForJobsOutput#jobs
   */
  readonly jobs?: Job[];

}

/**
 * @schema PollForThirdPartyJobsInput
 */
export interface PollForThirdPartyJobsInput {
  /**
   * @schema PollForThirdPartyJobsInput#actionTypeId
   */
  readonly actionTypeId: ActionTypeId;

  /**
   * @schema PollForThirdPartyJobsInput#maxBatchSize
   */
  readonly maxBatchSize?: number;

}

/**
 * @schema PollForThirdPartyJobsOutput
 */
export interface PollForThirdPartyJobsOutput {
  /**
   * @schema PollForThirdPartyJobsOutput#jobs
   */
  readonly jobs?: ThirdPartyJob[];

}

/**
 * @schema PutActionRevisionInput
 */
export interface PutActionRevisionInput {
  /**
   * @schema PutActionRevisionInput#pipelineName
   */
  readonly pipelineName: string;

  /**
   * @schema PutActionRevisionInput#stageName
   */
  readonly stageName: string;

  /**
   * @schema PutActionRevisionInput#actionName
   */
  readonly actionName: string;

  /**
   * @schema PutActionRevisionInput#actionRevision
   */
  readonly actionRevision: ActionRevision;

}

/**
 * @schema PutActionRevisionOutput
 */
export interface PutActionRevisionOutput {
  /**
   * @schema PutActionRevisionOutput#newRevision
   */
  readonly newRevision?: boolean;

  /**
   * @schema PutActionRevisionOutput#pipelineExecutionId
   */
  readonly pipelineExecutionId?: string;

}

/**
 * @schema PutApprovalResultInput
 */
export interface PutApprovalResultInput {
  /**
   * @schema PutApprovalResultInput#pipelineName
   */
  readonly pipelineName: string;

  /**
   * @schema PutApprovalResultInput#stageName
   */
  readonly stageName: string;

  /**
   * @schema PutApprovalResultInput#actionName
   */
  readonly actionName: string;

  /**
   * @schema PutApprovalResultInput#result
   */
  readonly result: ApprovalResult;

  /**
   * @schema PutApprovalResultInput#token
   */
  readonly token: string;

}

/**
 * @schema PutApprovalResultOutput
 */
export interface PutApprovalResultOutput {
  /**
   * @schema PutApprovalResultOutput#approvedAt
   */
  readonly approvedAt?: string;

}

/**
 * @schema PutJobFailureResultInput
 */
export interface PutJobFailureResultInput {
  /**
   * @schema PutJobFailureResultInput#jobId
   */
  readonly jobId: string;

  /**
   * @schema PutJobFailureResultInput#failureDetails
   */
  readonly failureDetails: FailureDetails;

}

/**
 * @schema PutJobSuccessResultInput
 */
export interface PutJobSuccessResultInput {
  /**
   * @schema PutJobSuccessResultInput#jobId
   */
  readonly jobId: string;

  /**
   * @schema PutJobSuccessResultInput#currentRevision
   */
  readonly currentRevision?: CurrentRevision;

  /**
   * @schema PutJobSuccessResultInput#continuationToken
   */
  readonly continuationToken?: string;

  /**
   * @schema PutJobSuccessResultInput#executionDetails
   */
  readonly executionDetails?: ExecutionDetails;

  /**
   * @schema PutJobSuccessResultInput#outputVariables
   */
  readonly outputVariables?: { [key: string]: string };

}

/**
 * @schema PutThirdPartyJobFailureResultInput
 */
export interface PutThirdPartyJobFailureResultInput {
  /**
   * @schema PutThirdPartyJobFailureResultInput#jobId
   */
  readonly jobId: string;

  /**
   * @schema PutThirdPartyJobFailureResultInput#clientToken
   */
  readonly clientToken: string;

  /**
   * @schema PutThirdPartyJobFailureResultInput#failureDetails
   */
  readonly failureDetails: FailureDetails;

}

/**
 * @schema PutThirdPartyJobSuccessResultInput
 */
export interface PutThirdPartyJobSuccessResultInput {
  /**
   * @schema PutThirdPartyJobSuccessResultInput#jobId
   */
  readonly jobId: string;

  /**
   * @schema PutThirdPartyJobSuccessResultInput#clientToken
   */
  readonly clientToken: string;

  /**
   * @schema PutThirdPartyJobSuccessResultInput#currentRevision
   */
  readonly currentRevision?: CurrentRevision;

  /**
   * @schema PutThirdPartyJobSuccessResultInput#continuationToken
   */
  readonly continuationToken?: string;

  /**
   * @schema PutThirdPartyJobSuccessResultInput#executionDetails
   */
  readonly executionDetails?: ExecutionDetails;

}

/**
 * @schema PutWebhookInput
 */
export interface PutWebhookInput {
  /**
   * @schema PutWebhookInput#webhook
   */
  readonly webhook: WebhookDefinition;

  /**
   * @schema PutWebhookInput#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema PutWebhookOutput
 */
export interface PutWebhookOutput {
  /**
   * @schema PutWebhookOutput#webhook
   */
  readonly webhook?: ListWebhookItem;

}

/**
 * @schema RegisterWebhookWithThirdPartyInput
 */
export interface RegisterWebhookWithThirdPartyInput {
  /**
   * @schema RegisterWebhookWithThirdPartyInput#webhookName
   */
  readonly webhookName?: string;

}

/**
 * @schema RegisterWebhookWithThirdPartyOutput
 */
export interface RegisterWebhookWithThirdPartyOutput {
}

/**
 * @schema RetryStageExecutionInput
 */
export interface RetryStageExecutionInput {
  /**
   * @schema RetryStageExecutionInput#pipelineName
   */
  readonly pipelineName: string;

  /**
   * @schema RetryStageExecutionInput#stageName
   */
  readonly stageName: string;

  /**
   * @schema RetryStageExecutionInput#pipelineExecutionId
   */
  readonly pipelineExecutionId: string;

  /**
   * @schema RetryStageExecutionInput#retryMode
   */
  readonly retryMode: string;

}

/**
 * @schema RetryStageExecutionOutput
 */
export interface RetryStageExecutionOutput {
  /**
   * @schema RetryStageExecutionOutput#pipelineExecutionId
   */
  readonly pipelineExecutionId?: string;

}

/**
 * @schema StartPipelineExecutionInput
 */
export interface StartPipelineExecutionInput {
  /**
   * @schema StartPipelineExecutionInput#name
   */
  readonly name: string;

  /**
   * @schema StartPipelineExecutionInput#clientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * @schema StartPipelineExecutionOutput
 */
export interface StartPipelineExecutionOutput {
  /**
   * @schema StartPipelineExecutionOutput#pipelineExecutionId
   */
  readonly pipelineExecutionId?: string;

}

/**
 * @schema StopPipelineExecutionInput
 */
export interface StopPipelineExecutionInput {
  /**
   * @schema StopPipelineExecutionInput#pipelineName
   */
  readonly pipelineName: string;

  /**
   * @schema StopPipelineExecutionInput#pipelineExecutionId
   */
  readonly pipelineExecutionId: string;

  /**
   * @schema StopPipelineExecutionInput#abandon
   */
  readonly abandon?: boolean;

  /**
   * @schema StopPipelineExecutionInput#reason
   */
  readonly reason?: string;

}

/**
 * @schema StopPipelineExecutionOutput
 */
export interface StopPipelineExecutionOutput {
  /**
   * @schema StopPipelineExecutionOutput#pipelineExecutionId
   */
  readonly pipelineExecutionId?: string;

}

/**
 * @schema TagResourceInput
 */
export interface TagResourceInput {
  /**
   * @schema TagResourceInput#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema TagResourceInput#tags
   */
  readonly tags: Tag[];

}

/**
 * @schema TagResourceOutput
 */
export interface TagResourceOutput {
}

/**
 * @schema UntagResourceInput
 */
export interface UntagResourceInput {
  /**
   * @schema UntagResourceInput#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema UntagResourceInput#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UntagResourceOutput
 */
export interface UntagResourceOutput {
}

/**
 * @schema UpdatePipelineInput
 */
export interface UpdatePipelineInput {
  /**
   * @schema UpdatePipelineInput#pipeline
   */
  readonly pipeline: PipelineDeclaration;

}

/**
 * @schema UpdatePipelineOutput
 */
export interface UpdatePipelineOutput {
  /**
   * @schema UpdatePipelineOutput#pipeline
   */
  readonly pipeline?: PipelineDeclaration;

}

/**
 * @schema ActionTypeSettings
 */
export interface ActionTypeSettings {
  /**
   * @schema ActionTypeSettings#thirdPartyConfigurationUrl
   */
  readonly thirdPartyConfigurationUrl?: string;

  /**
   * @schema ActionTypeSettings#entityUrlTemplate
   */
  readonly entityUrlTemplate?: string;

  /**
   * @schema ActionTypeSettings#executionUrlTemplate
   */
  readonly executionUrlTemplate?: string;

  /**
   * @schema ActionTypeSettings#revisionUrlTemplate
   */
  readonly revisionUrlTemplate?: string;

}

/**
 * @schema ActionConfigurationProperty
 */
export interface ActionConfigurationProperty {
  /**
   * @schema ActionConfigurationProperty#name
   */
  readonly name: string;

  /**
   * @schema ActionConfigurationProperty#required
   */
  readonly required: boolean;

  /**
   * @schema ActionConfigurationProperty#key
   */
  readonly key: boolean;

  /**
   * @schema ActionConfigurationProperty#secret
   */
  readonly secret: boolean;

  /**
   * @schema ActionConfigurationProperty#queryable
   */
  readonly queryable?: boolean;

  /**
   * @schema ActionConfigurationProperty#description
   */
  readonly description?: string;

  /**
   * @schema ActionConfigurationProperty#type
   */
  readonly type?: string;

}

/**
 * @schema ArtifactDetails
 */
export interface ArtifactDetails {
  /**
   * @schema ArtifactDetails#minimumCount
   */
  readonly minimumCount: number;

  /**
   * @schema ArtifactDetails#maximumCount
   */
  readonly maximumCount: number;

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
 * @schema ActionType
 */
export interface ActionType {
  /**
   * @schema ActionType#id
   */
  readonly id: ActionTypeId;

  /**
   * @schema ActionType#settings
   */
  readonly settings?: ActionTypeSettings;

  /**
   * @schema ActionType#actionConfigurationProperties
   */
  readonly actionConfigurationProperties?: ActionConfigurationProperty[];

  /**
   * @schema ActionType#inputArtifactDetails
   */
  readonly inputArtifactDetails: ArtifactDetails;

  /**
   * @schema ActionType#outputArtifactDetails
   */
  readonly outputArtifactDetails: ArtifactDetails;

}

/**
 * @schema PipelineDeclaration
 */
export interface PipelineDeclaration {
  /**
   * @schema PipelineDeclaration#name
   */
  readonly name: string;

  /**
   * @schema PipelineDeclaration#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema PipelineDeclaration#artifactStore
   */
  readonly artifactStore?: ArtifactStore;

  /**
   * @schema PipelineDeclaration#artifactStores
   */
  readonly artifactStores?: { [key: string]: ArtifactStore };

  /**
   * @schema PipelineDeclaration#stages
   */
  readonly stages: StageDeclaration[];

  /**
   * @schema PipelineDeclaration#version
   */
  readonly version?: number;

}

/**
 * @schema JobDetails
 */
export interface JobDetails {
  /**
   * @schema JobDetails#id
   */
  readonly id?: string;

  /**
   * @schema JobDetails#data
   */
  readonly data?: JobData;

  /**
   * @schema JobDetails#accountId
   */
  readonly accountId?: string;

}

/**
 * @schema PipelineMetadata
 */
export interface PipelineMetadata {
  /**
   * @schema PipelineMetadata#pipelineArn
   */
  readonly pipelineArn?: string;

  /**
   * @schema PipelineMetadata#created
   */
  readonly created?: string;

  /**
   * @schema PipelineMetadata#updated
   */
  readonly updated?: string;

}

/**
 * @schema PipelineExecution
 */
export interface PipelineExecution {
  /**
   * @schema PipelineExecution#pipelineName
   */
  readonly pipelineName?: string;

  /**
   * @schema PipelineExecution#pipelineVersion
   */
  readonly pipelineVersion?: number;

  /**
   * @schema PipelineExecution#pipelineExecutionId
   */
  readonly pipelineExecutionId?: string;

  /**
   * @schema PipelineExecution#status
   */
  readonly status?: string;

  /**
   * @schema PipelineExecution#artifactRevisions
   */
  readonly artifactRevisions?: ArtifactRevision[];

}

/**
 * @schema StageState
 */
export interface StageState {
  /**
   * @schema StageState#stageName
   */
  readonly stageName?: string;

  /**
   * @schema StageState#inboundExecution
   */
  readonly inboundExecution?: StageExecution;

  /**
   * @schema StageState#inboundTransitionState
   */
  readonly inboundTransitionState?: TransitionState;

  /**
   * @schema StageState#actionStates
   */
  readonly actionStates?: ActionState[];

  /**
   * @schema StageState#latestExecution
   */
  readonly latestExecution?: StageExecution;

}

/**
 * @schema ThirdPartyJobDetails
 */
export interface ThirdPartyJobDetails {
  /**
   * @schema ThirdPartyJobDetails#id
   */
  readonly id?: string;

  /**
   * @schema ThirdPartyJobDetails#data
   */
  readonly data?: ThirdPartyJobData;

  /**
   * @schema ThirdPartyJobDetails#nonce
   */
  readonly nonce?: string;

}

/**
 * @schema ActionExecutionFilter
 */
export interface ActionExecutionFilter {
  /**
   * @schema ActionExecutionFilter#pipelineExecutionId
   */
  readonly pipelineExecutionId?: string;

}

/**
 * @schema ActionExecutionDetail
 */
export interface ActionExecutionDetail {
  /**
   * @schema ActionExecutionDetail#pipelineExecutionId
   */
  readonly pipelineExecutionId?: string;

  /**
   * @schema ActionExecutionDetail#actionExecutionId
   */
  readonly actionExecutionId?: string;

  /**
   * @schema ActionExecutionDetail#pipelineVersion
   */
  readonly pipelineVersion?: number;

  /**
   * @schema ActionExecutionDetail#stageName
   */
  readonly stageName?: string;

  /**
   * @schema ActionExecutionDetail#actionName
   */
  readonly actionName?: string;

  /**
   * @schema ActionExecutionDetail#startTime
   */
  readonly startTime?: string;

  /**
   * @schema ActionExecutionDetail#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

  /**
   * @schema ActionExecutionDetail#status
   */
  readonly status?: string;

  /**
   * @schema ActionExecutionDetail#input
   */
  readonly input?: ActionExecutionInput;

  /**
   * @schema ActionExecutionDetail#output
   */
  readonly output?: ActionExecutionOutput;

}

/**
 * @schema PipelineExecutionSummary
 */
export interface PipelineExecutionSummary {
  /**
   * @schema PipelineExecutionSummary#pipelineExecutionId
   */
  readonly pipelineExecutionId?: string;

  /**
   * @schema PipelineExecutionSummary#status
   */
  readonly status?: string;

  /**
   * @schema PipelineExecutionSummary#startTime
   */
  readonly startTime?: string;

  /**
   * @schema PipelineExecutionSummary#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

  /**
   * @schema PipelineExecutionSummary#sourceRevisions
   */
  readonly sourceRevisions?: SourceRevision[];

  /**
   * @schema PipelineExecutionSummary#trigger
   */
  readonly trigger?: ExecutionTrigger;

  /**
   * @schema PipelineExecutionSummary#stopTrigger
   */
  readonly stopTrigger?: StopExecutionTrigger;

}

/**
 * @schema PipelineSummary
 */
export interface PipelineSummary {
  /**
   * @schema PipelineSummary#name
   */
  readonly name?: string;

  /**
   * @schema PipelineSummary#version
   */
  readonly version?: number;

  /**
   * @schema PipelineSummary#created
   */
  readonly created?: string;

  /**
   * @schema PipelineSummary#updated
   */
  readonly updated?: string;

}

/**
 * @schema ListWebhookItem
 */
export interface ListWebhookItem {
  /**
   * @schema ListWebhookItem#definition
   */
  readonly definition: WebhookDefinition;

  /**
   * @schema ListWebhookItem#url
   */
  readonly url: string;

  /**
   * @schema ListWebhookItem#errorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema ListWebhookItem#errorCode
   */
  readonly errorCode?: string;

  /**
   * @schema ListWebhookItem#lastTriggered
   */
  readonly lastTriggered?: string;

  /**
   * @schema ListWebhookItem#arn
   */
  readonly arn?: string;

  /**
   * @schema ListWebhookItem#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema ActionTypeId
 */
export interface ActionTypeId {
  /**
   * @schema ActionTypeId#category
   */
  readonly category: string;

  /**
   * @schema ActionTypeId#owner
   */
  readonly owner: string;

  /**
   * @schema ActionTypeId#provider
   */
  readonly provider: string;

  /**
   * @schema ActionTypeId#version
   */
  readonly version: string;

}

/**
 * @schema Job
 */
export interface Job {
  /**
   * @schema Job#id
   */
  readonly id?: string;

  /**
   * @schema Job#data
   */
  readonly data?: JobData;

  /**
   * @schema Job#nonce
   */
  readonly nonce?: string;

  /**
   * @schema Job#accountId
   */
  readonly accountId?: string;

}

/**
 * @schema ThirdPartyJob
 */
export interface ThirdPartyJob {
  /**
   * @schema ThirdPartyJob#clientId
   */
  readonly clientId?: string;

  /**
   * @schema ThirdPartyJob#jobId
   */
  readonly jobId?: string;

}

/**
 * @schema ActionRevision
 */
export interface ActionRevision {
  /**
   * @schema ActionRevision#revisionId
   */
  readonly revisionId: string;

  /**
   * @schema ActionRevision#revisionChangeId
   */
  readonly revisionChangeId: string;

  /**
   * @schema ActionRevision#created
   */
  readonly created: string;

}

/**
 * @schema ApprovalResult
 */
export interface ApprovalResult {
  /**
   * @schema ApprovalResult#summary
   */
  readonly summary: string;

  /**
   * @schema ApprovalResult#status
   */
  readonly status: string;

}

/**
 * @schema FailureDetails
 */
export interface FailureDetails {
  /**
   * @schema FailureDetails#type
   */
  readonly type: string;

  /**
   * @schema FailureDetails#message
   */
  readonly message: string;

  /**
   * @schema FailureDetails#externalExecutionId
   */
  readonly externalExecutionId?: string;

}

/**
 * @schema CurrentRevision
 */
export interface CurrentRevision {
  /**
   * @schema CurrentRevision#revision
   */
  readonly revision: string;

  /**
   * @schema CurrentRevision#changeIdentifier
   */
  readonly changeIdentifier: string;

  /**
   * @schema CurrentRevision#created
   */
  readonly created?: string;

  /**
   * @schema CurrentRevision#revisionSummary
   */
  readonly revisionSummary?: string;

}

/**
 * @schema ExecutionDetails
 */
export interface ExecutionDetails {
  /**
   * @schema ExecutionDetails#summary
   */
  readonly summary?: string;

  /**
   * @schema ExecutionDetails#externalExecutionId
   */
  readonly externalExecutionId?: string;

  /**
   * @schema ExecutionDetails#percentComplete
   */
  readonly percentComplete?: number;

}

/**
 * @schema WebhookDefinition
 */
export interface WebhookDefinition {
  /**
   * @schema WebhookDefinition#name
   */
  readonly name: string;

  /**
   * @schema WebhookDefinition#targetPipeline
   */
  readonly targetPipeline: string;

  /**
   * @schema WebhookDefinition#targetAction
   */
  readonly targetAction: string;

  /**
   * @schema WebhookDefinition#filters
   */
  readonly filters: WebhookFilterRule[];

  /**
   * @schema WebhookDefinition#authentication
   */
  readonly authentication: string;

  /**
   * @schema WebhookDefinition#authenticationConfiguration
   */
  readonly authenticationConfiguration: WebhookAuthConfiguration;

}

/**
 * @schema ArtifactStore
 */
export interface ArtifactStore {
  /**
   * @schema ArtifactStore#type
   */
  readonly type: string;

  /**
   * @schema ArtifactStore#location
   */
  readonly location: string;

  /**
   * @schema ArtifactStore#encryptionKey
   */
  readonly encryptionKey?: EncryptionKey;

}

/**
 * @schema StageDeclaration
 */
export interface StageDeclaration {
  /**
   * @schema StageDeclaration#name
   */
  readonly name: string;

  /**
   * @schema StageDeclaration#blockers
   */
  readonly blockers?: BlockerDeclaration[];

  /**
   * @schema StageDeclaration#actions
   */
  readonly actions: ActionDeclaration[];

}

/**
 * @schema JobData
 */
export interface JobData {
  /**
   * @schema JobData#actionTypeId
   */
  readonly actionTypeId?: ActionTypeId;

  /**
   * @schema JobData#actionConfiguration
   */
  readonly actionConfiguration?: ActionConfiguration;

  /**
   * @schema JobData#pipelineContext
   */
  readonly pipelineContext?: PipelineContext;

  /**
   * @schema JobData#inputArtifacts
   */
  readonly inputArtifacts?: Artifact[];

  /**
   * @schema JobData#outputArtifacts
   */
  readonly outputArtifacts?: Artifact[];

  /**
   * @schema JobData#artifactCredentials
   */
  readonly artifactCredentials?: AwsSessionCredentials;

  /**
   * @schema JobData#continuationToken
   */
  readonly continuationToken?: string;

  /**
   * @schema JobData#encryptionKey
   */
  readonly encryptionKey?: EncryptionKey;

}

/**
 * @schema ArtifactRevision
 */
export interface ArtifactRevision {
  /**
   * @schema ArtifactRevision#name
   */
  readonly name?: string;

  /**
   * @schema ArtifactRevision#revisionId
   */
  readonly revisionId?: string;

  /**
   * @schema ArtifactRevision#revisionChangeIdentifier
   */
  readonly revisionChangeIdentifier?: string;

  /**
   * @schema ArtifactRevision#revisionSummary
   */
  readonly revisionSummary?: string;

  /**
   * @schema ArtifactRevision#created
   */
  readonly created?: string;

  /**
   * @schema ArtifactRevision#revisionUrl
   */
  readonly revisionUrl?: string;

}

/**
 * @schema StageExecution
 */
export interface StageExecution {
  /**
   * @schema StageExecution#pipelineExecutionId
   */
  readonly pipelineExecutionId: string;

  /**
   * @schema StageExecution#status
   */
  readonly status: string;

}

/**
 * @schema TransitionState
 */
export interface TransitionState {
  /**
   * @schema TransitionState#enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema TransitionState#lastChangedBy
   */
  readonly lastChangedBy?: string;

  /**
   * @schema TransitionState#lastChangedAt
   */
  readonly lastChangedAt?: string;

  /**
   * @schema TransitionState#disabledReason
   */
  readonly disabledReason?: string;

}

/**
 * @schema ActionState
 */
export interface ActionState {
  /**
   * @schema ActionState#actionName
   */
  readonly actionName?: string;

  /**
   * @schema ActionState#currentRevision
   */
  readonly currentRevision?: ActionRevision;

  /**
   * @schema ActionState#latestExecution
   */
  readonly latestExecution?: ActionExecution;

  /**
   * @schema ActionState#entityUrl
   */
  readonly entityUrl?: string;

  /**
   * @schema ActionState#revisionUrl
   */
  readonly revisionUrl?: string;

}

/**
 * @schema ThirdPartyJobData
 */
export interface ThirdPartyJobData {
  /**
   * @schema ThirdPartyJobData#actionTypeId
   */
  readonly actionTypeId?: ActionTypeId;

  /**
   * @schema ThirdPartyJobData#actionConfiguration
   */
  readonly actionConfiguration?: ActionConfiguration;

  /**
   * @schema ThirdPartyJobData#pipelineContext
   */
  readonly pipelineContext?: PipelineContext;

  /**
   * @schema ThirdPartyJobData#inputArtifacts
   */
  readonly inputArtifacts?: Artifact[];

  /**
   * @schema ThirdPartyJobData#outputArtifacts
   */
  readonly outputArtifacts?: Artifact[];

  /**
   * @schema ThirdPartyJobData#artifactCredentials
   */
  readonly artifactCredentials?: AwsSessionCredentials;

  /**
   * @schema ThirdPartyJobData#continuationToken
   */
  readonly continuationToken?: string;

  /**
   * @schema ThirdPartyJobData#encryptionKey
   */
  readonly encryptionKey?: EncryptionKey;

}

/**
 * @schema ActionExecutionInput
 */
export interface ActionExecutionInput {
  /**
   * @schema ActionExecutionInput#actionTypeId
   */
  readonly actionTypeId?: ActionTypeId;

  /**
   * @schema ActionExecutionInput#configuration
   */
  readonly configuration?: { [key: string]: string };

  /**
   * @schema ActionExecutionInput#resolvedConfiguration
   */
  readonly resolvedConfiguration?: { [key: string]: string };

  /**
   * @schema ActionExecutionInput#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema ActionExecutionInput#region
   */
  readonly region?: string;

  /**
   * @schema ActionExecutionInput#inputArtifacts
   */
  readonly inputArtifacts?: ArtifactDetail[];

  /**
   * @schema ActionExecutionInput#namespace
   */
  readonly namespace?: string;

}

/**
 * @schema ActionExecutionOutput
 */
export interface ActionExecutionOutput {
  /**
   * @schema ActionExecutionOutput#outputArtifacts
   */
  readonly outputArtifacts?: ArtifactDetail[];

  /**
   * @schema ActionExecutionOutput#executionResult
   */
  readonly executionResult?: ActionExecutionResult;

  /**
   * @schema ActionExecutionOutput#outputVariables
   */
  readonly outputVariables?: { [key: string]: string };

}

/**
 * @schema SourceRevision
 */
export interface SourceRevision {
  /**
   * @schema SourceRevision#actionName
   */
  readonly actionName: string;

  /**
   * @schema SourceRevision#revisionId
   */
  readonly revisionId?: string;

  /**
   * @schema SourceRevision#revisionSummary
   */
  readonly revisionSummary?: string;

  /**
   * @schema SourceRevision#revisionUrl
   */
  readonly revisionUrl?: string;

}

/**
 * @schema ExecutionTrigger
 */
export interface ExecutionTrigger {
  /**
   * @schema ExecutionTrigger#triggerType
   */
  readonly triggerType?: string;

  /**
   * @schema ExecutionTrigger#triggerDetail
   */
  readonly triggerDetail?: string;

}

/**
 * @schema StopExecutionTrigger
 */
export interface StopExecutionTrigger {
  /**
   * @schema StopExecutionTrigger#reason
   */
  readonly reason?: string;

}

/**
 * @schema WebhookFilterRule
 */
export interface WebhookFilterRule {
  /**
   * @schema WebhookFilterRule#jsonPath
   */
  readonly jsonPath: string;

  /**
   * @schema WebhookFilterRule#matchEquals
   */
  readonly matchEquals?: string;

}

/**
 * @schema WebhookAuthConfiguration
 */
export interface WebhookAuthConfiguration {
  /**
   * @schema WebhookAuthConfiguration#AllowedIPRange
   */
  readonly allowedIpRange?: string;

  /**
   * @schema WebhookAuthConfiguration#SecretToken
   */
  readonly secretToken?: string;

}

/**
 * @schema EncryptionKey
 */
export interface EncryptionKey {
  /**
   * @schema EncryptionKey#id
   */
  readonly id: string;

  /**
   * @schema EncryptionKey#type
   */
  readonly type: string;

}

/**
 * @schema BlockerDeclaration
 */
export interface BlockerDeclaration {
  /**
   * @schema BlockerDeclaration#name
   */
  readonly name: string;

  /**
   * @schema BlockerDeclaration#type
   */
  readonly type: string;

}

/**
 * @schema ActionDeclaration
 */
export interface ActionDeclaration {
  /**
   * @schema ActionDeclaration#name
   */
  readonly name: string;

  /**
   * @schema ActionDeclaration#actionTypeId
   */
  readonly actionTypeId: ActionTypeId;

  /**
   * @schema ActionDeclaration#runOrder
   */
  readonly runOrder?: number;

  /**
   * @schema ActionDeclaration#configuration
   */
  readonly configuration?: { [key: string]: string };

  /**
   * @schema ActionDeclaration#outputArtifacts
   */
  readonly outputArtifacts?: OutputArtifact[];

  /**
   * @schema ActionDeclaration#inputArtifacts
   */
  readonly inputArtifacts?: InputArtifact[];

  /**
   * @schema ActionDeclaration#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema ActionDeclaration#region
   */
  readonly region?: string;

  /**
   * @schema ActionDeclaration#namespace
   */
  readonly namespace?: string;

}

/**
 * @schema ActionConfiguration
 */
export interface ActionConfiguration {
  /**
   * @schema ActionConfiguration#configuration
   */
  readonly configuration?: { [key: string]: string };

}

/**
 * @schema PipelineContext
 */
export interface PipelineContext {
  /**
   * @schema PipelineContext#pipelineName
   */
  readonly pipelineName?: string;

  /**
   * @schema PipelineContext#stage
   */
  readonly stage?: StageContext;

  /**
   * @schema PipelineContext#action
   */
  readonly action?: ActionContext;

  /**
   * @schema PipelineContext#pipelineArn
   */
  readonly pipelineArn?: string;

  /**
   * @schema PipelineContext#pipelineExecutionId
   */
  readonly pipelineExecutionId?: string;

}

/**
 * @schema Artifact
 */
export interface Artifact {
  /**
   * @schema Artifact#name
   */
  readonly name?: string;

  /**
   * @schema Artifact#revision
   */
  readonly revision?: string;

  /**
   * @schema Artifact#location
   */
  readonly location?: ArtifactLocation;

}

/**
 * @schema AwsSessionCredentials
 */
export interface AwsSessionCredentials {
  /**
   * @schema AwsSessionCredentials#accessKeyId
   */
  readonly accessKeyId: string;

  /**
   * @schema AwsSessionCredentials#secretAccessKey
   */
  readonly secretAccessKey: string;

  /**
   * @schema AwsSessionCredentials#sessionToken
   */
  readonly sessionToken: string;

}

/**
 * @schema ActionExecution
 */
export interface ActionExecution {
  /**
   * @schema ActionExecution#actionExecutionId
   */
  readonly actionExecutionId?: string;

  /**
   * @schema ActionExecution#status
   */
  readonly status?: string;

  /**
   * @schema ActionExecution#summary
   */
  readonly summary?: string;

  /**
   * @schema ActionExecution#lastStatusChange
   */
  readonly lastStatusChange?: string;

  /**
   * @schema ActionExecution#token
   */
  readonly token?: string;

  /**
   * @schema ActionExecution#lastUpdatedBy
   */
  readonly lastUpdatedBy?: string;

  /**
   * @schema ActionExecution#externalExecutionId
   */
  readonly externalExecutionId?: string;

  /**
   * @schema ActionExecution#externalExecutionUrl
   */
  readonly externalExecutionUrl?: string;

  /**
   * @schema ActionExecution#percentComplete
   */
  readonly percentComplete?: number;

  /**
   * @schema ActionExecution#errorDetails
   */
  readonly errorDetails?: ErrorDetails;

}

/**
 * @schema ArtifactDetail
 */
export interface ArtifactDetail {
  /**
   * @schema ArtifactDetail#name
   */
  readonly name?: string;

  /**
   * @schema ArtifactDetail#s3location
   */
  readonly s3location?: S3Location;

}

/**
 * @schema ActionExecutionResult
 */
export interface ActionExecutionResult {
  /**
   * @schema ActionExecutionResult#externalExecutionId
   */
  readonly externalExecutionId?: string;

  /**
   * @schema ActionExecutionResult#externalExecutionSummary
   */
  readonly externalExecutionSummary?: string;

  /**
   * @schema ActionExecutionResult#externalExecutionUrl
   */
  readonly externalExecutionUrl?: string;

}

/**
 * @schema OutputArtifact
 */
export interface OutputArtifact {
  /**
   * @schema OutputArtifact#name
   */
  readonly name: string;

}

/**
 * @schema InputArtifact
 */
export interface InputArtifact {
  /**
   * @schema InputArtifact#name
   */
  readonly name: string;

}

/**
 * @schema StageContext
 */
export interface StageContext {
  /**
   * @schema StageContext#name
   */
  readonly name?: string;

}

/**
 * @schema ActionContext
 */
export interface ActionContext {
  /**
   * @schema ActionContext#name
   */
  readonly name?: string;

  /**
   * @schema ActionContext#actionExecutionId
   */
  readonly actionExecutionId?: string;

}

/**
 * @schema ArtifactLocation
 */
export interface ArtifactLocation {
  /**
   * @schema ArtifactLocation#type
   */
  readonly type?: string;

  /**
   * @schema ArtifactLocation#s3Location
   */
  readonly s3Location?: S3ArtifactLocation;

}

/**
 * @schema ErrorDetails
 */
export interface ErrorDetails {
  /**
   * @schema ErrorDetails#code
   */
  readonly code?: string;

  /**
   * @schema ErrorDetails#message
   */
  readonly message?: string;

}

/**
 * @schema S3Location
 */
export interface S3Location {
  /**
   * @schema S3Location#bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3Location#key
   */
  readonly key?: string;

}

/**
 * @schema S3ArtifactLocation
 */
export interface S3ArtifactLocation {
  /**
   * @schema S3ArtifactLocation#bucketName
   */
  readonly bucketName: string;

  /**
   * @schema S3ArtifactLocation#objectKey
   */
  readonly objectKey: string;

}
