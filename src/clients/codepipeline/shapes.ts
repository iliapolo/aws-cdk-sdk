/**
 * @schema CodePipelineAcknowledgeJobInput
 */
export interface CodePipelineAcknowledgeJobInput {
  /**
   * @schema CodePipelineAcknowledgeJobInput#jobId
   */
  readonly jobId: string;

  /**
   * @schema CodePipelineAcknowledgeJobInput#nonce
   */
  readonly nonce: string;

}

/**
 * @schema CodePipelineAcknowledgeJobOutput
 */
export interface CodePipelineAcknowledgeJobOutput {
  /**
   * @schema CodePipelineAcknowledgeJobOutput#status
   */
  readonly status?: string;

}

/**
 * @schema CodePipelineAcknowledgeThirdPartyJobInput
 */
export interface CodePipelineAcknowledgeThirdPartyJobInput {
  /**
   * @schema CodePipelineAcknowledgeThirdPartyJobInput#jobId
   */
  readonly jobId: string;

  /**
   * @schema CodePipelineAcknowledgeThirdPartyJobInput#nonce
   */
  readonly nonce: string;

  /**
   * @schema CodePipelineAcknowledgeThirdPartyJobInput#clientToken
   */
  readonly clientToken: string;

}

/**
 * @schema CodePipelineAcknowledgeThirdPartyJobOutput
 */
export interface CodePipelineAcknowledgeThirdPartyJobOutput {
  /**
   * @schema CodePipelineAcknowledgeThirdPartyJobOutput#status
   */
  readonly status?: string;

}

/**
 * @schema CodePipelineCreateCustomActionTypeInput
 */
export interface CodePipelineCreateCustomActionTypeInput {
  /**
   * @schema CodePipelineCreateCustomActionTypeInput#category
   */
  readonly category: string;

  /**
   * @schema CodePipelineCreateCustomActionTypeInput#provider
   */
  readonly provider: string;

  /**
   * @schema CodePipelineCreateCustomActionTypeInput#version
   */
  readonly version: string;

  /**
   * @schema CodePipelineCreateCustomActionTypeInput#settings
   */
  readonly settings?: CodePipelineActionTypeSettings;

  /**
   * @schema CodePipelineCreateCustomActionTypeInput#configurationProperties
   */
  readonly configurationProperties?: CodePipelineActionConfigurationProperty[];

  /**
   * @schema CodePipelineCreateCustomActionTypeInput#inputArtifactDetails
   */
  readonly inputArtifactDetails: CodePipelineArtifactDetails;

  /**
   * @schema CodePipelineCreateCustomActionTypeInput#outputArtifactDetails
   */
  readonly outputArtifactDetails: CodePipelineArtifactDetails;

  /**
   * @schema CodePipelineCreateCustomActionTypeInput#tags
   */
  readonly tags?: CodePipelineTag[];

}

/**
 * @schema CodePipelineCreateCustomActionTypeOutput
 */
export interface CodePipelineCreateCustomActionTypeOutput {
  /**
   * @schema CodePipelineCreateCustomActionTypeOutput#actionType
   */
  readonly actionType: CodePipelineActionType;

  /**
   * @schema CodePipelineCreateCustomActionTypeOutput#tags
   */
  readonly tags?: CodePipelineTag[];

}

/**
 * @schema CodePipelineCreatePipelineInput
 */
export interface CodePipelineCreatePipelineInput {
  /**
   * @schema CodePipelineCreatePipelineInput#pipeline
   */
  readonly pipeline: CodePipelinePipelineDeclaration;

  /**
   * @schema CodePipelineCreatePipelineInput#tags
   */
  readonly tags?: CodePipelineTag[];

}

/**
 * @schema CodePipelineCreatePipelineOutput
 */
export interface CodePipelineCreatePipelineOutput {
  /**
   * @schema CodePipelineCreatePipelineOutput#pipeline
   */
  readonly pipeline?: CodePipelinePipelineDeclaration;

  /**
   * @schema CodePipelineCreatePipelineOutput#tags
   */
  readonly tags?: CodePipelineTag[];

}

/**
 * @schema CodePipelineDeleteCustomActionTypeInput
 */
export interface CodePipelineDeleteCustomActionTypeInput {
  /**
   * @schema CodePipelineDeleteCustomActionTypeInput#category
   */
  readonly category: string;

  /**
   * @schema CodePipelineDeleteCustomActionTypeInput#provider
   */
  readonly provider: string;

  /**
   * @schema CodePipelineDeleteCustomActionTypeInput#version
   */
  readonly version: string;

}

/**
 * @schema CodePipelineDeletePipelineInput
 */
export interface CodePipelineDeletePipelineInput {
  /**
   * @schema CodePipelineDeletePipelineInput#name
   */
  readonly name: string;

}

/**
 * @schema CodePipelineDeleteWebhookInput
 */
export interface CodePipelineDeleteWebhookInput {
  /**
   * @schema CodePipelineDeleteWebhookInput#name
   */
  readonly name: string;

}

/**
 * @schema CodePipelineDeleteWebhookOutput
 */
export interface CodePipelineDeleteWebhookOutput {
}

/**
 * @schema CodePipelineDeregisterWebhookWithThirdPartyInput
 */
export interface CodePipelineDeregisterWebhookWithThirdPartyInput {
  /**
   * @schema CodePipelineDeregisterWebhookWithThirdPartyInput#webhookName
   */
  readonly webhookName?: string;

}

/**
 * @schema CodePipelineDeregisterWebhookWithThirdPartyOutput
 */
export interface CodePipelineDeregisterWebhookWithThirdPartyOutput {
}

/**
 * @schema CodePipelineDisableStageTransitionInput
 */
export interface CodePipelineDisableStageTransitionInput {
  /**
   * @schema CodePipelineDisableStageTransitionInput#pipelineName
   */
  readonly pipelineName: string;

  /**
   * @schema CodePipelineDisableStageTransitionInput#stageName
   */
  readonly stageName: string;

  /**
   * @schema CodePipelineDisableStageTransitionInput#transitionType
   */
  readonly transitionType: string;

  /**
   * @schema CodePipelineDisableStageTransitionInput#reason
   */
  readonly reason: string;

}

/**
 * @schema CodePipelineEnableStageTransitionInput
 */
export interface CodePipelineEnableStageTransitionInput {
  /**
   * @schema CodePipelineEnableStageTransitionInput#pipelineName
   */
  readonly pipelineName: string;

  /**
   * @schema CodePipelineEnableStageTransitionInput#stageName
   */
  readonly stageName: string;

  /**
   * @schema CodePipelineEnableStageTransitionInput#transitionType
   */
  readonly transitionType: string;

}

/**
 * @schema CodePipelineGetJobDetailsInput
 */
export interface CodePipelineGetJobDetailsInput {
  /**
   * @schema CodePipelineGetJobDetailsInput#jobId
   */
  readonly jobId: string;

}

/**
 * @schema CodePipelineGetJobDetailsOutput
 */
export interface CodePipelineGetJobDetailsOutput {
  /**
   * @schema CodePipelineGetJobDetailsOutput#jobDetails
   */
  readonly jobDetails?: CodePipelineJobDetails;

}

/**
 * @schema CodePipelineGetPipelineInput
 */
export interface CodePipelineGetPipelineInput {
  /**
   * @schema CodePipelineGetPipelineInput#name
   */
  readonly name: string;

  /**
   * @schema CodePipelineGetPipelineInput#version
   */
  readonly version?: number;

}

/**
 * @schema CodePipelineGetPipelineOutput
 */
export interface CodePipelineGetPipelineOutput {
  /**
   * @schema CodePipelineGetPipelineOutput#pipeline
   */
  readonly pipeline?: CodePipelinePipelineDeclaration;

  /**
   * @schema CodePipelineGetPipelineOutput#metadata
   */
  readonly metadata?: CodePipelinePipelineMetadata;

}

/**
 * @schema CodePipelineGetPipelineExecutionInput
 */
export interface CodePipelineGetPipelineExecutionInput {
  /**
   * @schema CodePipelineGetPipelineExecutionInput#pipelineName
   */
  readonly pipelineName: string;

  /**
   * @schema CodePipelineGetPipelineExecutionInput#pipelineExecutionId
   */
  readonly pipelineExecutionId: string;

}

/**
 * @schema CodePipelineGetPipelineExecutionOutput
 */
export interface CodePipelineGetPipelineExecutionOutput {
  /**
   * @schema CodePipelineGetPipelineExecutionOutput#pipelineExecution
   */
  readonly pipelineExecution?: CodePipelinePipelineExecution;

}

/**
 * @schema CodePipelineGetPipelineStateInput
 */
export interface CodePipelineGetPipelineStateInput {
  /**
   * @schema CodePipelineGetPipelineStateInput#name
   */
  readonly name: string;

}

/**
 * @schema CodePipelineGetPipelineStateOutput
 */
export interface CodePipelineGetPipelineStateOutput {
  /**
   * @schema CodePipelineGetPipelineStateOutput#pipelineName
   */
  readonly pipelineName?: string;

  /**
   * @schema CodePipelineGetPipelineStateOutput#pipelineVersion
   */
  readonly pipelineVersion?: number;

  /**
   * @schema CodePipelineGetPipelineStateOutput#stageStates
   */
  readonly stageStates?: CodePipelineStageState[];

  /**
   * @schema CodePipelineGetPipelineStateOutput#created
   */
  readonly created?: string;

  /**
   * @schema CodePipelineGetPipelineStateOutput#updated
   */
  readonly updated?: string;

}

/**
 * @schema CodePipelineGetThirdPartyJobDetailsInput
 */
export interface CodePipelineGetThirdPartyJobDetailsInput {
  /**
   * @schema CodePipelineGetThirdPartyJobDetailsInput#jobId
   */
  readonly jobId: string;

  /**
   * @schema CodePipelineGetThirdPartyJobDetailsInput#clientToken
   */
  readonly clientToken: string;

}

/**
 * @schema CodePipelineGetThirdPartyJobDetailsOutput
 */
export interface CodePipelineGetThirdPartyJobDetailsOutput {
  /**
   * @schema CodePipelineGetThirdPartyJobDetailsOutput#jobDetails
   */
  readonly jobDetails?: CodePipelineThirdPartyJobDetails;

}

/**
 * @schema CodePipelineListActionExecutionsInput
 */
export interface CodePipelineListActionExecutionsInput {
  /**
   * @schema CodePipelineListActionExecutionsInput#pipelineName
   */
  readonly pipelineName: string;

  /**
   * @schema CodePipelineListActionExecutionsInput#filter
   */
  readonly filter?: CodePipelineActionExecutionFilter;

  /**
   * @schema CodePipelineListActionExecutionsInput#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CodePipelineListActionExecutionsInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CodePipelineListActionExecutionsOutput
 */
export interface CodePipelineListActionExecutionsOutput {
  /**
   * @schema CodePipelineListActionExecutionsOutput#actionExecutionDetails
   */
  readonly actionExecutionDetails?: CodePipelineActionExecutionDetail[];

  /**
   * @schema CodePipelineListActionExecutionsOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CodePipelineListActionTypesInput
 */
export interface CodePipelineListActionTypesInput {
  /**
   * @schema CodePipelineListActionTypesInput#actionOwnerFilter
   */
  readonly actionOwnerFilter?: string;

  /**
   * @schema CodePipelineListActionTypesInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CodePipelineListActionTypesOutput
 */
export interface CodePipelineListActionTypesOutput {
  /**
   * @schema CodePipelineListActionTypesOutput#actionTypes
   */
  readonly actionTypes: CodePipelineActionType[];

  /**
   * @schema CodePipelineListActionTypesOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CodePipelineListPipelineExecutionsInput
 */
export interface CodePipelineListPipelineExecutionsInput {
  /**
   * @schema CodePipelineListPipelineExecutionsInput#pipelineName
   */
  readonly pipelineName: string;

  /**
   * @schema CodePipelineListPipelineExecutionsInput#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CodePipelineListPipelineExecutionsInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CodePipelineListPipelineExecutionsOutput
 */
export interface CodePipelineListPipelineExecutionsOutput {
  /**
   * @schema CodePipelineListPipelineExecutionsOutput#pipelineExecutionSummaries
   */
  readonly pipelineExecutionSummaries?: CodePipelinePipelineExecutionSummary[];

  /**
   * @schema CodePipelineListPipelineExecutionsOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CodePipelineListPipelinesInput
 */
export interface CodePipelineListPipelinesInput {
  /**
   * @schema CodePipelineListPipelinesInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CodePipelineListPipelinesOutput
 */
export interface CodePipelineListPipelinesOutput {
  /**
   * @schema CodePipelineListPipelinesOutput#pipelines
   */
  readonly pipelines?: CodePipelinePipelineSummary[];

  /**
   * @schema CodePipelineListPipelinesOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CodePipelineListTagsForResourceInput
 */
export interface CodePipelineListTagsForResourceInput {
  /**
   * @schema CodePipelineListTagsForResourceInput#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema CodePipelineListTagsForResourceInput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodePipelineListTagsForResourceInput#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema CodePipelineListTagsForResourceOutput
 */
export interface CodePipelineListTagsForResourceOutput {
  /**
   * @schema CodePipelineListTagsForResourceOutput#tags
   */
  readonly tags?: CodePipelineTag[];

  /**
   * @schema CodePipelineListTagsForResourceOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CodePipelineListWebhooksInput
 */
export interface CodePipelineListWebhooksInput {
  /**
   * @schema CodePipelineListWebhooksInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodePipelineListWebhooksInput#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema CodePipelineListWebhooksOutput
 */
export interface CodePipelineListWebhooksOutput {
  /**
   * @schema CodePipelineListWebhooksOutput#webhooks
   */
  readonly webhooks?: CodePipelineListWebhookItem[];

  /**
   * @schema CodePipelineListWebhooksOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CodePipelinePollForJobsInput
 */
export interface CodePipelinePollForJobsInput {
  /**
   * @schema CodePipelinePollForJobsInput#actionTypeId
   */
  readonly actionTypeId: CodePipelineActionTypeId;

  /**
   * @schema CodePipelinePollForJobsInput#maxBatchSize
   */
  readonly maxBatchSize?: number;

  /**
   * @schema CodePipelinePollForJobsInput#queryParam
   */
  readonly queryParam?: { [key: string]: string };

}

/**
 * @schema CodePipelinePollForJobsOutput
 */
export interface CodePipelinePollForJobsOutput {
  /**
   * @schema CodePipelinePollForJobsOutput#jobs
   */
  readonly jobs?: CodePipelineJob[];

}

/**
 * @schema CodePipelinePollForThirdPartyJobsInput
 */
export interface CodePipelinePollForThirdPartyJobsInput {
  /**
   * @schema CodePipelinePollForThirdPartyJobsInput#actionTypeId
   */
  readonly actionTypeId: CodePipelineActionTypeId;

  /**
   * @schema CodePipelinePollForThirdPartyJobsInput#maxBatchSize
   */
  readonly maxBatchSize?: number;

}

/**
 * @schema CodePipelinePollForThirdPartyJobsOutput
 */
export interface CodePipelinePollForThirdPartyJobsOutput {
  /**
   * @schema CodePipelinePollForThirdPartyJobsOutput#jobs
   */
  readonly jobs?: CodePipelineThirdPartyJob[];

}

/**
 * @schema CodePipelinePutActionRevisionInput
 */
export interface CodePipelinePutActionRevisionInput {
  /**
   * @schema CodePipelinePutActionRevisionInput#pipelineName
   */
  readonly pipelineName: string;

  /**
   * @schema CodePipelinePutActionRevisionInput#stageName
   */
  readonly stageName: string;

  /**
   * @schema CodePipelinePutActionRevisionInput#actionName
   */
  readonly actionName: string;

  /**
   * @schema CodePipelinePutActionRevisionInput#actionRevision
   */
  readonly actionRevision: CodePipelineActionRevision;

}

/**
 * @schema CodePipelinePutActionRevisionOutput
 */
export interface CodePipelinePutActionRevisionOutput {
  /**
   * @schema CodePipelinePutActionRevisionOutput#newRevision
   */
  readonly newRevision?: boolean;

  /**
   * @schema CodePipelinePutActionRevisionOutput#pipelineExecutionId
   */
  readonly pipelineExecutionId?: string;

}

/**
 * @schema CodePipelinePutApprovalResultInput
 */
export interface CodePipelinePutApprovalResultInput {
  /**
   * @schema CodePipelinePutApprovalResultInput#pipelineName
   */
  readonly pipelineName: string;

  /**
   * @schema CodePipelinePutApprovalResultInput#stageName
   */
  readonly stageName: string;

  /**
   * @schema CodePipelinePutApprovalResultInput#actionName
   */
  readonly actionName: string;

  /**
   * @schema CodePipelinePutApprovalResultInput#result
   */
  readonly result: CodePipelineApprovalResult;

  /**
   * @schema CodePipelinePutApprovalResultInput#token
   */
  readonly token: string;

}

/**
 * @schema CodePipelinePutApprovalResultOutput
 */
export interface CodePipelinePutApprovalResultOutput {
  /**
   * @schema CodePipelinePutApprovalResultOutput#approvedAt
   */
  readonly approvedAt?: string;

}

/**
 * @schema CodePipelinePutJobFailureResultInput
 */
export interface CodePipelinePutJobFailureResultInput {
  /**
   * @schema CodePipelinePutJobFailureResultInput#jobId
   */
  readonly jobId: string;

  /**
   * @schema CodePipelinePutJobFailureResultInput#failureDetails
   */
  readonly failureDetails: CodePipelineFailureDetails;

}

/**
 * @schema CodePipelinePutJobSuccessResultInput
 */
export interface CodePipelinePutJobSuccessResultInput {
  /**
   * @schema CodePipelinePutJobSuccessResultInput#jobId
   */
  readonly jobId: string;

  /**
   * @schema CodePipelinePutJobSuccessResultInput#currentRevision
   */
  readonly currentRevision?: CodePipelineCurrentRevision;

  /**
   * @schema CodePipelinePutJobSuccessResultInput#continuationToken
   */
  readonly continuationToken?: string;

  /**
   * @schema CodePipelinePutJobSuccessResultInput#executionDetails
   */
  readonly executionDetails?: CodePipelineExecutionDetails;

  /**
   * @schema CodePipelinePutJobSuccessResultInput#outputVariables
   */
  readonly outputVariables?: { [key: string]: string };

}

/**
 * @schema CodePipelinePutThirdPartyJobFailureResultInput
 */
export interface CodePipelinePutThirdPartyJobFailureResultInput {
  /**
   * @schema CodePipelinePutThirdPartyJobFailureResultInput#jobId
   */
  readonly jobId: string;

  /**
   * @schema CodePipelinePutThirdPartyJobFailureResultInput#clientToken
   */
  readonly clientToken: string;

  /**
   * @schema CodePipelinePutThirdPartyJobFailureResultInput#failureDetails
   */
  readonly failureDetails: CodePipelineFailureDetails;

}

/**
 * @schema CodePipelinePutThirdPartyJobSuccessResultInput
 */
export interface CodePipelinePutThirdPartyJobSuccessResultInput {
  /**
   * @schema CodePipelinePutThirdPartyJobSuccessResultInput#jobId
   */
  readonly jobId: string;

  /**
   * @schema CodePipelinePutThirdPartyJobSuccessResultInput#clientToken
   */
  readonly clientToken: string;

  /**
   * @schema CodePipelinePutThirdPartyJobSuccessResultInput#currentRevision
   */
  readonly currentRevision?: CodePipelineCurrentRevision;

  /**
   * @schema CodePipelinePutThirdPartyJobSuccessResultInput#continuationToken
   */
  readonly continuationToken?: string;

  /**
   * @schema CodePipelinePutThirdPartyJobSuccessResultInput#executionDetails
   */
  readonly executionDetails?: CodePipelineExecutionDetails;

}

/**
 * @schema CodePipelinePutWebhookInput
 */
export interface CodePipelinePutWebhookInput {
  /**
   * @schema CodePipelinePutWebhookInput#webhook
   */
  readonly webhook: CodePipelineWebhookDefinition;

  /**
   * @schema CodePipelinePutWebhookInput#tags
   */
  readonly tags?: CodePipelineTag[];

}

/**
 * @schema CodePipelinePutWebhookOutput
 */
export interface CodePipelinePutWebhookOutput {
  /**
   * @schema CodePipelinePutWebhookOutput#webhook
   */
  readonly webhook?: CodePipelineListWebhookItem;

}

/**
 * @schema CodePipelineRegisterWebhookWithThirdPartyInput
 */
export interface CodePipelineRegisterWebhookWithThirdPartyInput {
  /**
   * @schema CodePipelineRegisterWebhookWithThirdPartyInput#webhookName
   */
  readonly webhookName?: string;

}

/**
 * @schema CodePipelineRegisterWebhookWithThirdPartyOutput
 */
export interface CodePipelineRegisterWebhookWithThirdPartyOutput {
}

/**
 * @schema CodePipelineRetryStageExecutionInput
 */
export interface CodePipelineRetryStageExecutionInput {
  /**
   * @schema CodePipelineRetryStageExecutionInput#pipelineName
   */
  readonly pipelineName: string;

  /**
   * @schema CodePipelineRetryStageExecutionInput#stageName
   */
  readonly stageName: string;

  /**
   * @schema CodePipelineRetryStageExecutionInput#pipelineExecutionId
   */
  readonly pipelineExecutionId: string;

  /**
   * @schema CodePipelineRetryStageExecutionInput#retryMode
   */
  readonly retryMode: string;

}

/**
 * @schema CodePipelineRetryStageExecutionOutput
 */
export interface CodePipelineRetryStageExecutionOutput {
  /**
   * @schema CodePipelineRetryStageExecutionOutput#pipelineExecutionId
   */
  readonly pipelineExecutionId?: string;

}

/**
 * @schema CodePipelineStartPipelineExecutionInput
 */
export interface CodePipelineStartPipelineExecutionInput {
  /**
   * @schema CodePipelineStartPipelineExecutionInput#name
   */
  readonly name: string;

  /**
   * @schema CodePipelineStartPipelineExecutionInput#clientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * @schema CodePipelineStartPipelineExecutionOutput
 */
export interface CodePipelineStartPipelineExecutionOutput {
  /**
   * @schema CodePipelineStartPipelineExecutionOutput#pipelineExecutionId
   */
  readonly pipelineExecutionId?: string;

}

/**
 * @schema CodePipelineStopPipelineExecutionInput
 */
export interface CodePipelineStopPipelineExecutionInput {
  /**
   * @schema CodePipelineStopPipelineExecutionInput#pipelineName
   */
  readonly pipelineName: string;

  /**
   * @schema CodePipelineStopPipelineExecutionInput#pipelineExecutionId
   */
  readonly pipelineExecutionId: string;

  /**
   * @schema CodePipelineStopPipelineExecutionInput#abandon
   */
  readonly abandon?: boolean;

  /**
   * @schema CodePipelineStopPipelineExecutionInput#reason
   */
  readonly reason?: string;

}

/**
 * @schema CodePipelineStopPipelineExecutionOutput
 */
export interface CodePipelineStopPipelineExecutionOutput {
  /**
   * @schema CodePipelineStopPipelineExecutionOutput#pipelineExecutionId
   */
  readonly pipelineExecutionId?: string;

}

/**
 * @schema CodePipelineTagResourceInput
 */
export interface CodePipelineTagResourceInput {
  /**
   * @schema CodePipelineTagResourceInput#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema CodePipelineTagResourceInput#tags
   */
  readonly tags: CodePipelineTag[];

}

/**
 * @schema CodePipelineTagResourceOutput
 */
export interface CodePipelineTagResourceOutput {
}

/**
 * @schema CodePipelineUntagResourceInput
 */
export interface CodePipelineUntagResourceInput {
  /**
   * @schema CodePipelineUntagResourceInput#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema CodePipelineUntagResourceInput#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema CodePipelineUntagResourceOutput
 */
export interface CodePipelineUntagResourceOutput {
}

/**
 * @schema CodePipelineUpdatePipelineInput
 */
export interface CodePipelineUpdatePipelineInput {
  /**
   * @schema CodePipelineUpdatePipelineInput#pipeline
   */
  readonly pipeline: CodePipelinePipelineDeclaration;

}

/**
 * @schema CodePipelineUpdatePipelineOutput
 */
export interface CodePipelineUpdatePipelineOutput {
  /**
   * @schema CodePipelineUpdatePipelineOutput#pipeline
   */
  readonly pipeline?: CodePipelinePipelineDeclaration;

}

/**
 * @schema CodePipelineActionTypeSettings
 */
export interface CodePipelineActionTypeSettings {
  /**
   * @schema CodePipelineActionTypeSettings#thirdPartyConfigurationUrl
   */
  readonly thirdPartyConfigurationUrl?: string;

  /**
   * @schema CodePipelineActionTypeSettings#entityUrlTemplate
   */
  readonly entityUrlTemplate?: string;

  /**
   * @schema CodePipelineActionTypeSettings#executionUrlTemplate
   */
  readonly executionUrlTemplate?: string;

  /**
   * @schema CodePipelineActionTypeSettings#revisionUrlTemplate
   */
  readonly revisionUrlTemplate?: string;

}

/**
 * @schema CodePipelineActionConfigurationProperty
 */
export interface CodePipelineActionConfigurationProperty {
  /**
   * @schema CodePipelineActionConfigurationProperty#name
   */
  readonly name: string;

  /**
   * @schema CodePipelineActionConfigurationProperty#required
   */
  readonly required: boolean;

  /**
   * @schema CodePipelineActionConfigurationProperty#key
   */
  readonly key: boolean;

  /**
   * @schema CodePipelineActionConfigurationProperty#secret
   */
  readonly secret: boolean;

  /**
   * @schema CodePipelineActionConfigurationProperty#queryable
   */
  readonly queryable?: boolean;

  /**
   * @schema CodePipelineActionConfigurationProperty#description
   */
  readonly description?: string;

  /**
   * @schema CodePipelineActionConfigurationProperty#type
   */
  readonly type?: string;

}

/**
 * @schema CodePipelineArtifactDetails
 */
export interface CodePipelineArtifactDetails {
  /**
   * @schema CodePipelineArtifactDetails#minimumCount
   */
  readonly minimumCount: number;

  /**
   * @schema CodePipelineArtifactDetails#maximumCount
   */
  readonly maximumCount: number;

}

/**
 * @schema CodePipelineTag
 */
export interface CodePipelineTag {
  /**
   * @schema CodePipelineTag#key
   */
  readonly key: string;

  /**
   * @schema CodePipelineTag#value
   */
  readonly value: string;

}

/**
 * @schema CodePipelineActionType
 */
export interface CodePipelineActionType {
  /**
   * @schema CodePipelineActionType#id
   */
  readonly id: CodePipelineActionTypeId;

  /**
   * @schema CodePipelineActionType#settings
   */
  readonly settings?: CodePipelineActionTypeSettings;

  /**
   * @schema CodePipelineActionType#actionConfigurationProperties
   */
  readonly actionConfigurationProperties?: CodePipelineActionConfigurationProperty[];

  /**
   * @schema CodePipelineActionType#inputArtifactDetails
   */
  readonly inputArtifactDetails: CodePipelineArtifactDetails;

  /**
   * @schema CodePipelineActionType#outputArtifactDetails
   */
  readonly outputArtifactDetails: CodePipelineArtifactDetails;

}

/**
 * @schema CodePipelinePipelineDeclaration
 */
export interface CodePipelinePipelineDeclaration {
  /**
   * @schema CodePipelinePipelineDeclaration#name
   */
  readonly name: string;

  /**
   * @schema CodePipelinePipelineDeclaration#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema CodePipelinePipelineDeclaration#artifactStore
   */
  readonly artifactStore?: CodePipelineArtifactStore;

  /**
   * @schema CodePipelinePipelineDeclaration#artifactStores
   */
  readonly artifactStores?: { [key: string]: CodePipelineArtifactStore };

  /**
   * @schema CodePipelinePipelineDeclaration#stages
   */
  readonly stages: CodePipelineStageDeclaration[];

  /**
   * @schema CodePipelinePipelineDeclaration#version
   */
  readonly version?: number;

}

/**
 * @schema CodePipelineJobDetails
 */
export interface CodePipelineJobDetails {
  /**
   * @schema CodePipelineJobDetails#id
   */
  readonly id?: string;

  /**
   * @schema CodePipelineJobDetails#data
   */
  readonly data?: CodePipelineJobData;

  /**
   * @schema CodePipelineJobDetails#accountId
   */
  readonly accountId?: string;

}

/**
 * @schema CodePipelinePipelineMetadata
 */
export interface CodePipelinePipelineMetadata {
  /**
   * @schema CodePipelinePipelineMetadata#pipelineArn
   */
  readonly pipelineArn?: string;

  /**
   * @schema CodePipelinePipelineMetadata#created
   */
  readonly created?: string;

  /**
   * @schema CodePipelinePipelineMetadata#updated
   */
  readonly updated?: string;

}

/**
 * @schema CodePipelinePipelineExecution
 */
export interface CodePipelinePipelineExecution {
  /**
   * @schema CodePipelinePipelineExecution#pipelineName
   */
  readonly pipelineName?: string;

  /**
   * @schema CodePipelinePipelineExecution#pipelineVersion
   */
  readonly pipelineVersion?: number;

  /**
   * @schema CodePipelinePipelineExecution#pipelineExecutionId
   */
  readonly pipelineExecutionId?: string;

  /**
   * @schema CodePipelinePipelineExecution#status
   */
  readonly status?: string;

  /**
   * @schema CodePipelinePipelineExecution#artifactRevisions
   */
  readonly artifactRevisions?: CodePipelineArtifactRevision[];

}

/**
 * @schema CodePipelineStageState
 */
export interface CodePipelineStageState {
  /**
   * @schema CodePipelineStageState#stageName
   */
  readonly stageName?: string;

  /**
   * @schema CodePipelineStageState#inboundExecution
   */
  readonly inboundExecution?: CodePipelineStageExecution;

  /**
   * @schema CodePipelineStageState#inboundTransitionState
   */
  readonly inboundTransitionState?: CodePipelineTransitionState;

  /**
   * @schema CodePipelineStageState#actionStates
   */
  readonly actionStates?: CodePipelineActionState[];

  /**
   * @schema CodePipelineStageState#latestExecution
   */
  readonly latestExecution?: CodePipelineStageExecution;

}

/**
 * @schema CodePipelineThirdPartyJobDetails
 */
export interface CodePipelineThirdPartyJobDetails {
  /**
   * @schema CodePipelineThirdPartyJobDetails#id
   */
  readonly id?: string;

  /**
   * @schema CodePipelineThirdPartyJobDetails#data
   */
  readonly data?: CodePipelineThirdPartyJobData;

  /**
   * @schema CodePipelineThirdPartyJobDetails#nonce
   */
  readonly nonce?: string;

}

/**
 * @schema CodePipelineActionExecutionFilter
 */
export interface CodePipelineActionExecutionFilter {
  /**
   * @schema CodePipelineActionExecutionFilter#pipelineExecutionId
   */
  readonly pipelineExecutionId?: string;

}

/**
 * @schema CodePipelineActionExecutionDetail
 */
export interface CodePipelineActionExecutionDetail {
  /**
   * @schema CodePipelineActionExecutionDetail#pipelineExecutionId
   */
  readonly pipelineExecutionId?: string;

  /**
   * @schema CodePipelineActionExecutionDetail#actionExecutionId
   */
  readonly actionExecutionId?: string;

  /**
   * @schema CodePipelineActionExecutionDetail#pipelineVersion
   */
  readonly pipelineVersion?: number;

  /**
   * @schema CodePipelineActionExecutionDetail#stageName
   */
  readonly stageName?: string;

  /**
   * @schema CodePipelineActionExecutionDetail#actionName
   */
  readonly actionName?: string;

  /**
   * @schema CodePipelineActionExecutionDetail#startTime
   */
  readonly startTime?: string;

  /**
   * @schema CodePipelineActionExecutionDetail#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

  /**
   * @schema CodePipelineActionExecutionDetail#status
   */
  readonly status?: string;

  /**
   * @schema CodePipelineActionExecutionDetail#input
   */
  readonly input?: CodePipelineActionExecutionInput;

  /**
   * @schema CodePipelineActionExecutionDetail#output
   */
  readonly output?: CodePipelineActionExecutionOutput;

}

/**
 * @schema CodePipelinePipelineExecutionSummary
 */
export interface CodePipelinePipelineExecutionSummary {
  /**
   * @schema CodePipelinePipelineExecutionSummary#pipelineExecutionId
   */
  readonly pipelineExecutionId?: string;

  /**
   * @schema CodePipelinePipelineExecutionSummary#status
   */
  readonly status?: string;

  /**
   * @schema CodePipelinePipelineExecutionSummary#startTime
   */
  readonly startTime?: string;

  /**
   * @schema CodePipelinePipelineExecutionSummary#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

  /**
   * @schema CodePipelinePipelineExecutionSummary#sourceRevisions
   */
  readonly sourceRevisions?: CodePipelineSourceRevision[];

  /**
   * @schema CodePipelinePipelineExecutionSummary#trigger
   */
  readonly trigger?: CodePipelineExecutionTrigger;

  /**
   * @schema CodePipelinePipelineExecutionSummary#stopTrigger
   */
  readonly stopTrigger?: CodePipelineStopExecutionTrigger;

}

/**
 * @schema CodePipelinePipelineSummary
 */
export interface CodePipelinePipelineSummary {
  /**
   * @schema CodePipelinePipelineSummary#name
   */
  readonly name?: string;

  /**
   * @schema CodePipelinePipelineSummary#version
   */
  readonly version?: number;

  /**
   * @schema CodePipelinePipelineSummary#created
   */
  readonly created?: string;

  /**
   * @schema CodePipelinePipelineSummary#updated
   */
  readonly updated?: string;

}

/**
 * @schema CodePipelineListWebhookItem
 */
export interface CodePipelineListWebhookItem {
  /**
   * @schema CodePipelineListWebhookItem#definition
   */
  readonly definition: CodePipelineWebhookDefinition;

  /**
   * @schema CodePipelineListWebhookItem#url
   */
  readonly url: string;

  /**
   * @schema CodePipelineListWebhookItem#errorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema CodePipelineListWebhookItem#errorCode
   */
  readonly errorCode?: string;

  /**
   * @schema CodePipelineListWebhookItem#lastTriggered
   */
  readonly lastTriggered?: string;

  /**
   * @schema CodePipelineListWebhookItem#arn
   */
  readonly arn?: string;

  /**
   * @schema CodePipelineListWebhookItem#tags
   */
  readonly tags?: CodePipelineTag[];

}

/**
 * @schema CodePipelineActionTypeId
 */
export interface CodePipelineActionTypeId {
  /**
   * @schema CodePipelineActionTypeId#category
   */
  readonly category: string;

  /**
   * @schema CodePipelineActionTypeId#owner
   */
  readonly owner: string;

  /**
   * @schema CodePipelineActionTypeId#provider
   */
  readonly provider: string;

  /**
   * @schema CodePipelineActionTypeId#version
   */
  readonly version: string;

}

/**
 * @schema CodePipelineJob
 */
export interface CodePipelineJob {
  /**
   * @schema CodePipelineJob#id
   */
  readonly id?: string;

  /**
   * @schema CodePipelineJob#data
   */
  readonly data?: CodePipelineJobData;

  /**
   * @schema CodePipelineJob#nonce
   */
  readonly nonce?: string;

  /**
   * @schema CodePipelineJob#accountId
   */
  readonly accountId?: string;

}

/**
 * @schema CodePipelineThirdPartyJob
 */
export interface CodePipelineThirdPartyJob {
  /**
   * @schema CodePipelineThirdPartyJob#clientId
   */
  readonly clientId?: string;

  /**
   * @schema CodePipelineThirdPartyJob#jobId
   */
  readonly jobId?: string;

}

/**
 * @schema CodePipelineActionRevision
 */
export interface CodePipelineActionRevision {
  /**
   * @schema CodePipelineActionRevision#revisionId
   */
  readonly revisionId: string;

  /**
   * @schema CodePipelineActionRevision#revisionChangeId
   */
  readonly revisionChangeId: string;

  /**
   * @schema CodePipelineActionRevision#created
   */
  readonly created: string;

}

/**
 * @schema CodePipelineApprovalResult
 */
export interface CodePipelineApprovalResult {
  /**
   * @schema CodePipelineApprovalResult#summary
   */
  readonly summary: string;

  /**
   * @schema CodePipelineApprovalResult#status
   */
  readonly status: string;

}

/**
 * @schema CodePipelineFailureDetails
 */
export interface CodePipelineFailureDetails {
  /**
   * @schema CodePipelineFailureDetails#type
   */
  readonly type: string;

  /**
   * @schema CodePipelineFailureDetails#message
   */
  readonly message: string;

  /**
   * @schema CodePipelineFailureDetails#externalExecutionId
   */
  readonly externalExecutionId?: string;

}

/**
 * @schema CodePipelineCurrentRevision
 */
export interface CodePipelineCurrentRevision {
  /**
   * @schema CodePipelineCurrentRevision#revision
   */
  readonly revision: string;

  /**
   * @schema CodePipelineCurrentRevision#changeIdentifier
   */
  readonly changeIdentifier: string;

  /**
   * @schema CodePipelineCurrentRevision#created
   */
  readonly created?: string;

  /**
   * @schema CodePipelineCurrentRevision#revisionSummary
   */
  readonly revisionSummary?: string;

}

/**
 * @schema CodePipelineExecutionDetails
 */
export interface CodePipelineExecutionDetails {
  /**
   * @schema CodePipelineExecutionDetails#summary
   */
  readonly summary?: string;

  /**
   * @schema CodePipelineExecutionDetails#externalExecutionId
   */
  readonly externalExecutionId?: string;

  /**
   * @schema CodePipelineExecutionDetails#percentComplete
   */
  readonly percentComplete?: number;

}

/**
 * @schema CodePipelineWebhookDefinition
 */
export interface CodePipelineWebhookDefinition {
  /**
   * @schema CodePipelineWebhookDefinition#name
   */
  readonly name: string;

  /**
   * @schema CodePipelineWebhookDefinition#targetPipeline
   */
  readonly targetPipeline: string;

  /**
   * @schema CodePipelineWebhookDefinition#targetAction
   */
  readonly targetAction: string;

  /**
   * @schema CodePipelineWebhookDefinition#filters
   */
  readonly filters: CodePipelineWebhookFilterRule[];

  /**
   * @schema CodePipelineWebhookDefinition#authentication
   */
  readonly authentication: string;

  /**
   * @schema CodePipelineWebhookDefinition#authenticationConfiguration
   */
  readonly authenticationConfiguration: CodePipelineWebhookAuthConfiguration;

}

/**
 * @schema CodePipelineArtifactStore
 */
export interface CodePipelineArtifactStore {
  /**
   * @schema CodePipelineArtifactStore#type
   */
  readonly type: string;

  /**
   * @schema CodePipelineArtifactStore#location
   */
  readonly location: string;

  /**
   * @schema CodePipelineArtifactStore#encryptionKey
   */
  readonly encryptionKey?: CodePipelineEncryptionKey;

}

/**
 * @schema CodePipelineStageDeclaration
 */
export interface CodePipelineStageDeclaration {
  /**
   * @schema CodePipelineStageDeclaration#name
   */
  readonly name: string;

  /**
   * @schema CodePipelineStageDeclaration#blockers
   */
  readonly blockers?: CodePipelineBlockerDeclaration[];

  /**
   * @schema CodePipelineStageDeclaration#actions
   */
  readonly actions: CodePipelineActionDeclaration[];

}

/**
 * @schema CodePipelineJobData
 */
export interface CodePipelineJobData {
  /**
   * @schema CodePipelineJobData#actionTypeId
   */
  readonly actionTypeId?: CodePipelineActionTypeId;

  /**
   * @schema CodePipelineJobData#actionConfiguration
   */
  readonly actionConfiguration?: CodePipelineActionConfiguration;

  /**
   * @schema CodePipelineJobData#pipelineContext
   */
  readonly pipelineContext?: CodePipelinePipelineContext;

  /**
   * @schema CodePipelineJobData#inputArtifacts
   */
  readonly inputArtifacts?: CodePipelineArtifact[];

  /**
   * @schema CodePipelineJobData#outputArtifacts
   */
  readonly outputArtifacts?: CodePipelineArtifact[];

  /**
   * @schema CodePipelineJobData#artifactCredentials
   */
  readonly artifactCredentials?: CodePipelineAwsSessionCredentials;

  /**
   * @schema CodePipelineJobData#continuationToken
   */
  readonly continuationToken?: string;

  /**
   * @schema CodePipelineJobData#encryptionKey
   */
  readonly encryptionKey?: CodePipelineEncryptionKey;

}

/**
 * @schema CodePipelineArtifactRevision
 */
export interface CodePipelineArtifactRevision {
  /**
   * @schema CodePipelineArtifactRevision#name
   */
  readonly name?: string;

  /**
   * @schema CodePipelineArtifactRevision#revisionId
   */
  readonly revisionId?: string;

  /**
   * @schema CodePipelineArtifactRevision#revisionChangeIdentifier
   */
  readonly revisionChangeIdentifier?: string;

  /**
   * @schema CodePipelineArtifactRevision#revisionSummary
   */
  readonly revisionSummary?: string;

  /**
   * @schema CodePipelineArtifactRevision#created
   */
  readonly created?: string;

  /**
   * @schema CodePipelineArtifactRevision#revisionUrl
   */
  readonly revisionUrl?: string;

}

/**
 * @schema CodePipelineStageExecution
 */
export interface CodePipelineStageExecution {
  /**
   * @schema CodePipelineStageExecution#pipelineExecutionId
   */
  readonly pipelineExecutionId: string;

  /**
   * @schema CodePipelineStageExecution#status
   */
  readonly status: string;

}

/**
 * @schema CodePipelineTransitionState
 */
export interface CodePipelineTransitionState {
  /**
   * @schema CodePipelineTransitionState#enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema CodePipelineTransitionState#lastChangedBy
   */
  readonly lastChangedBy?: string;

  /**
   * @schema CodePipelineTransitionState#lastChangedAt
   */
  readonly lastChangedAt?: string;

  /**
   * @schema CodePipelineTransitionState#disabledReason
   */
  readonly disabledReason?: string;

}

/**
 * @schema CodePipelineActionState
 */
export interface CodePipelineActionState {
  /**
   * @schema CodePipelineActionState#actionName
   */
  readonly actionName?: string;

  /**
   * @schema CodePipelineActionState#currentRevision
   */
  readonly currentRevision?: CodePipelineActionRevision;

  /**
   * @schema CodePipelineActionState#latestExecution
   */
  readonly latestExecution?: CodePipelineActionExecution;

  /**
   * @schema CodePipelineActionState#entityUrl
   */
  readonly entityUrl?: string;

  /**
   * @schema CodePipelineActionState#revisionUrl
   */
  readonly revisionUrl?: string;

}

/**
 * @schema CodePipelineThirdPartyJobData
 */
export interface CodePipelineThirdPartyJobData {
  /**
   * @schema CodePipelineThirdPartyJobData#actionTypeId
   */
  readonly actionTypeId?: CodePipelineActionTypeId;

  /**
   * @schema CodePipelineThirdPartyJobData#actionConfiguration
   */
  readonly actionConfiguration?: CodePipelineActionConfiguration;

  /**
   * @schema CodePipelineThirdPartyJobData#pipelineContext
   */
  readonly pipelineContext?: CodePipelinePipelineContext;

  /**
   * @schema CodePipelineThirdPartyJobData#inputArtifacts
   */
  readonly inputArtifacts?: CodePipelineArtifact[];

  /**
   * @schema CodePipelineThirdPartyJobData#outputArtifacts
   */
  readonly outputArtifacts?: CodePipelineArtifact[];

  /**
   * @schema CodePipelineThirdPartyJobData#artifactCredentials
   */
  readonly artifactCredentials?: CodePipelineAwsSessionCredentials;

  /**
   * @schema CodePipelineThirdPartyJobData#continuationToken
   */
  readonly continuationToken?: string;

  /**
   * @schema CodePipelineThirdPartyJobData#encryptionKey
   */
  readonly encryptionKey?: CodePipelineEncryptionKey;

}

/**
 * @schema CodePipelineActionExecutionInput
 */
export interface CodePipelineActionExecutionInput {
  /**
   * @schema CodePipelineActionExecutionInput#actionTypeId
   */
  readonly actionTypeId?: CodePipelineActionTypeId;

  /**
   * @schema CodePipelineActionExecutionInput#configuration
   */
  readonly configuration?: { [key: string]: string };

  /**
   * @schema CodePipelineActionExecutionInput#resolvedConfiguration
   */
  readonly resolvedConfiguration?: { [key: string]: string };

  /**
   * @schema CodePipelineActionExecutionInput#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema CodePipelineActionExecutionInput#region
   */
  readonly region?: string;

  /**
   * @schema CodePipelineActionExecutionInput#inputArtifacts
   */
  readonly inputArtifacts?: CodePipelineArtifactDetail[];

  /**
   * @schema CodePipelineActionExecutionInput#namespace
   */
  readonly namespace?: string;

}

/**
 * @schema CodePipelineActionExecutionOutput
 */
export interface CodePipelineActionExecutionOutput {
  /**
   * @schema CodePipelineActionExecutionOutput#outputArtifacts
   */
  readonly outputArtifacts?: CodePipelineArtifactDetail[];

  /**
   * @schema CodePipelineActionExecutionOutput#executionResult
   */
  readonly executionResult?: CodePipelineActionExecutionResult;

  /**
   * @schema CodePipelineActionExecutionOutput#outputVariables
   */
  readonly outputVariables?: { [key: string]: string };

}

/**
 * @schema CodePipelineSourceRevision
 */
export interface CodePipelineSourceRevision {
  /**
   * @schema CodePipelineSourceRevision#actionName
   */
  readonly actionName: string;

  /**
   * @schema CodePipelineSourceRevision#revisionId
   */
  readonly revisionId?: string;

  /**
   * @schema CodePipelineSourceRevision#revisionSummary
   */
  readonly revisionSummary?: string;

  /**
   * @schema CodePipelineSourceRevision#revisionUrl
   */
  readonly revisionUrl?: string;

}

/**
 * @schema CodePipelineExecutionTrigger
 */
export interface CodePipelineExecutionTrigger {
  /**
   * @schema CodePipelineExecutionTrigger#triggerType
   */
  readonly triggerType?: string;

  /**
   * @schema CodePipelineExecutionTrigger#triggerDetail
   */
  readonly triggerDetail?: string;

}

/**
 * @schema CodePipelineStopExecutionTrigger
 */
export interface CodePipelineStopExecutionTrigger {
  /**
   * @schema CodePipelineStopExecutionTrigger#reason
   */
  readonly reason?: string;

}

/**
 * @schema CodePipelineWebhookFilterRule
 */
export interface CodePipelineWebhookFilterRule {
  /**
   * @schema CodePipelineWebhookFilterRule#jsonPath
   */
  readonly jsonPath: string;

  /**
   * @schema CodePipelineWebhookFilterRule#matchEquals
   */
  readonly matchEquals?: string;

}

/**
 * @schema CodePipelineWebhookAuthConfiguration
 */
export interface CodePipelineWebhookAuthConfiguration {
  /**
   * @schema CodePipelineWebhookAuthConfiguration#AllowedIPRange
   */
  readonly allowedIpRange?: string;

  /**
   * @schema CodePipelineWebhookAuthConfiguration#SecretToken
   */
  readonly secretToken?: string;

}

/**
 * @schema CodePipelineEncryptionKey
 */
export interface CodePipelineEncryptionKey {
  /**
   * @schema CodePipelineEncryptionKey#id
   */
  readonly id: string;

  /**
   * @schema CodePipelineEncryptionKey#type
   */
  readonly type: string;

}

/**
 * @schema CodePipelineBlockerDeclaration
 */
export interface CodePipelineBlockerDeclaration {
  /**
   * @schema CodePipelineBlockerDeclaration#name
   */
  readonly name: string;

  /**
   * @schema CodePipelineBlockerDeclaration#type
   */
  readonly type: string;

}

/**
 * @schema CodePipelineActionDeclaration
 */
export interface CodePipelineActionDeclaration {
  /**
   * @schema CodePipelineActionDeclaration#name
   */
  readonly name: string;

  /**
   * @schema CodePipelineActionDeclaration#actionTypeId
   */
  readonly actionTypeId: CodePipelineActionTypeId;

  /**
   * @schema CodePipelineActionDeclaration#runOrder
   */
  readonly runOrder?: number;

  /**
   * @schema CodePipelineActionDeclaration#configuration
   */
  readonly configuration?: { [key: string]: string };

  /**
   * @schema CodePipelineActionDeclaration#outputArtifacts
   */
  readonly outputArtifacts?: CodePipelineOutputArtifact[];

  /**
   * @schema CodePipelineActionDeclaration#inputArtifacts
   */
  readonly inputArtifacts?: CodePipelineInputArtifact[];

  /**
   * @schema CodePipelineActionDeclaration#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema CodePipelineActionDeclaration#region
   */
  readonly region?: string;

  /**
   * @schema CodePipelineActionDeclaration#namespace
   */
  readonly namespace?: string;

}

/**
 * @schema CodePipelineActionConfiguration
 */
export interface CodePipelineActionConfiguration {
  /**
   * @schema CodePipelineActionConfiguration#configuration
   */
  readonly configuration?: { [key: string]: string };

}

/**
 * @schema CodePipelinePipelineContext
 */
export interface CodePipelinePipelineContext {
  /**
   * @schema CodePipelinePipelineContext#pipelineName
   */
  readonly pipelineName?: string;

  /**
   * @schema CodePipelinePipelineContext#stage
   */
  readonly stage?: CodePipelineStageContext;

  /**
   * @schema CodePipelinePipelineContext#action
   */
  readonly action?: CodePipelineActionContext;

  /**
   * @schema CodePipelinePipelineContext#pipelineArn
   */
  readonly pipelineArn?: string;

  /**
   * @schema CodePipelinePipelineContext#pipelineExecutionId
   */
  readonly pipelineExecutionId?: string;

}

/**
 * @schema CodePipelineArtifact
 */
export interface CodePipelineArtifact {
  /**
   * @schema CodePipelineArtifact#name
   */
  readonly name?: string;

  /**
   * @schema CodePipelineArtifact#revision
   */
  readonly revision?: string;

  /**
   * @schema CodePipelineArtifact#location
   */
  readonly location?: CodePipelineArtifactLocation;

}

/**
 * @schema CodePipelineAwsSessionCredentials
 */
export interface CodePipelineAwsSessionCredentials {
  /**
   * @schema CodePipelineAwsSessionCredentials#accessKeyId
   */
  readonly accessKeyId: string;

  /**
   * @schema CodePipelineAwsSessionCredentials#secretAccessKey
   */
  readonly secretAccessKey: string;

  /**
   * @schema CodePipelineAwsSessionCredentials#sessionToken
   */
  readonly sessionToken: string;

}

/**
 * @schema CodePipelineActionExecution
 */
export interface CodePipelineActionExecution {
  /**
   * @schema CodePipelineActionExecution#actionExecutionId
   */
  readonly actionExecutionId?: string;

  /**
   * @schema CodePipelineActionExecution#status
   */
  readonly status?: string;

  /**
   * @schema CodePipelineActionExecution#summary
   */
  readonly summary?: string;

  /**
   * @schema CodePipelineActionExecution#lastStatusChange
   */
  readonly lastStatusChange?: string;

  /**
   * @schema CodePipelineActionExecution#token
   */
  readonly token?: string;

  /**
   * @schema CodePipelineActionExecution#lastUpdatedBy
   */
  readonly lastUpdatedBy?: string;

  /**
   * @schema CodePipelineActionExecution#externalExecutionId
   */
  readonly externalExecutionId?: string;

  /**
   * @schema CodePipelineActionExecution#externalExecutionUrl
   */
  readonly externalExecutionUrl?: string;

  /**
   * @schema CodePipelineActionExecution#percentComplete
   */
  readonly percentComplete?: number;

  /**
   * @schema CodePipelineActionExecution#errorDetails
   */
  readonly errorDetails?: CodePipelineErrorDetails;

}

/**
 * @schema CodePipelineArtifactDetail
 */
export interface CodePipelineArtifactDetail {
  /**
   * @schema CodePipelineArtifactDetail#name
   */
  readonly name?: string;

  /**
   * @schema CodePipelineArtifactDetail#s3location
   */
  readonly s3location?: CodePipelineS3Location;

}

/**
 * @schema CodePipelineActionExecutionResult
 */
export interface CodePipelineActionExecutionResult {
  /**
   * @schema CodePipelineActionExecutionResult#externalExecutionId
   */
  readonly externalExecutionId?: string;

  /**
   * @schema CodePipelineActionExecutionResult#externalExecutionSummary
   */
  readonly externalExecutionSummary?: string;

  /**
   * @schema CodePipelineActionExecutionResult#externalExecutionUrl
   */
  readonly externalExecutionUrl?: string;

}

/**
 * @schema CodePipelineOutputArtifact
 */
export interface CodePipelineOutputArtifact {
  /**
   * @schema CodePipelineOutputArtifact#name
   */
  readonly name: string;

}

/**
 * @schema CodePipelineInputArtifact
 */
export interface CodePipelineInputArtifact {
  /**
   * @schema CodePipelineInputArtifact#name
   */
  readonly name: string;

}

/**
 * @schema CodePipelineStageContext
 */
export interface CodePipelineStageContext {
  /**
   * @schema CodePipelineStageContext#name
   */
  readonly name?: string;

}

/**
 * @schema CodePipelineActionContext
 */
export interface CodePipelineActionContext {
  /**
   * @schema CodePipelineActionContext#name
   */
  readonly name?: string;

  /**
   * @schema CodePipelineActionContext#actionExecutionId
   */
  readonly actionExecutionId?: string;

}

/**
 * @schema CodePipelineArtifactLocation
 */
export interface CodePipelineArtifactLocation {
  /**
   * @schema CodePipelineArtifactLocation#type
   */
  readonly type?: string;

  /**
   * @schema CodePipelineArtifactLocation#s3Location
   */
  readonly s3Location?: CodePipelineS3ArtifactLocation;

}

/**
 * @schema CodePipelineErrorDetails
 */
export interface CodePipelineErrorDetails {
  /**
   * @schema CodePipelineErrorDetails#code
   */
  readonly code?: string;

  /**
   * @schema CodePipelineErrorDetails#message
   */
  readonly message?: string;

}

/**
 * @schema CodePipelineS3Location
 */
export interface CodePipelineS3Location {
  /**
   * @schema CodePipelineS3Location#bucket
   */
  readonly bucket?: string;

  /**
   * @schema CodePipelineS3Location#key
   */
  readonly key?: string;

}

/**
 * @schema CodePipelineS3ArtifactLocation
 */
export interface CodePipelineS3ArtifactLocation {
  /**
   * @schema CodePipelineS3ArtifactLocation#bucketName
   */
  readonly bucketName: string;

  /**
   * @schema CodePipelineS3ArtifactLocation#objectKey
   */
  readonly objectKey: string;

}
