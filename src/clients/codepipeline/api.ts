import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class CodePipelineClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public acknowledgeJob(input: shapes.CodePipelineAcknowledgeJobInput): CodePipelineAcknowledgeJob {
    return new CodePipelineAcknowledgeJob(this, 'AcknowledgeJob', this.__resources, input);
  }

  public acknowledgeThirdPartyJob(input: shapes.CodePipelineAcknowledgeThirdPartyJobInput): CodePipelineAcknowledgeThirdPartyJob {
    return new CodePipelineAcknowledgeThirdPartyJob(this, 'AcknowledgeThirdPartyJob', this.__resources, input);
  }

  public createCustomActionType(input: shapes.CodePipelineCreateCustomActionTypeInput): CodePipelineCreateCustomActionType {
    return new CodePipelineCreateCustomActionType(this, 'CreateCustomActionType', this.__resources, input);
  }

  public createPipeline(input: shapes.CodePipelineCreatePipelineInput): CodePipelineCreatePipeline {
    return new CodePipelineCreatePipeline(this, 'CreatePipeline', this.__resources, input);
  }

  public deleteCustomActionType(input: shapes.CodePipelineDeleteCustomActionTypeInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCustomActionType',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.DeleteCustomActionType'),
        parameters: {
          category: input.category,
          provider: input.provider,
          version: input.version,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteCustomActionType', props);
  }

  public deletePipeline(input: shapes.CodePipelineDeletePipelineInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deletePipeline',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.DeletePipeline'),
        parameters: {
          name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeletePipeline', props);
  }

  public deleteWebhook(input: shapes.CodePipelineDeleteWebhookInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteWebhook',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.DeleteWebhook'),
        parameters: {
          name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteWebhook', props);
  }

  public deregisterWebhookWithThirdParty(input: shapes.CodePipelineDeregisterWebhookWithThirdPartyInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterWebhookWithThirdParty',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.DeregisterWebhookWithThirdParty'),
        parameters: {
          webhookName: input.webhookName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeregisterWebhookWithThirdParty', props);
  }

  public disableStageTransition(input: shapes.CodePipelineDisableStageTransitionInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disableStageTransition',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.DisableStageTransition'),
        parameters: {
          pipelineName: input.pipelineName,
          stageName: input.stageName,
          transitionType: input.transitionType,
          reason: input.reason,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisableStageTransition', props);
  }

  public enableStageTransition(input: shapes.CodePipelineEnableStageTransitionInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'enableStageTransition',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.EnableStageTransition'),
        parameters: {
          pipelineName: input.pipelineName,
          stageName: input.stageName,
          transitionType: input.transitionType,
        },
      },
    };
    new cr.AwsCustomResource(this, 'EnableStageTransition', props);
  }

  public fetchJobDetails(input: shapes.CodePipelineGetJobDetailsInput): CodePipelineFetchJobDetails {
    return new CodePipelineFetchJobDetails(this, 'FetchJobDetails', this.__resources, input);
  }

  public fetchPipeline(input: shapes.CodePipelineGetPipelineInput): CodePipelineFetchPipeline {
    return new CodePipelineFetchPipeline(this, 'FetchPipeline', this.__resources, input);
  }

  public fetchPipelineExecution(input: shapes.CodePipelineGetPipelineExecutionInput): CodePipelineFetchPipelineExecution {
    return new CodePipelineFetchPipelineExecution(this, 'FetchPipelineExecution', this.__resources, input);
  }

  public fetchPipelineState(input: shapes.CodePipelineGetPipelineStateInput): CodePipelineFetchPipelineState {
    return new CodePipelineFetchPipelineState(this, 'FetchPipelineState', this.__resources, input);
  }

  public fetchThirdPartyJobDetails(input: shapes.CodePipelineGetThirdPartyJobDetailsInput): CodePipelineFetchThirdPartyJobDetails {
    return new CodePipelineFetchThirdPartyJobDetails(this, 'FetchThirdPartyJobDetails', this.__resources, input);
  }

  public listActionExecutions(input: shapes.CodePipelineListActionExecutionsInput): CodePipelineListActionExecutions {
    return new CodePipelineListActionExecutions(this, 'ListActionExecutions', this.__resources, input);
  }

  public listActionTypes(input: shapes.CodePipelineListActionTypesInput): CodePipelineListActionTypes {
    return new CodePipelineListActionTypes(this, 'ListActionTypes', this.__resources, input);
  }

  public listPipelineExecutions(input: shapes.CodePipelineListPipelineExecutionsInput): CodePipelineListPipelineExecutions {
    return new CodePipelineListPipelineExecutions(this, 'ListPipelineExecutions', this.__resources, input);
  }

  public listPipelines(input: shapes.CodePipelineListPipelinesInput): CodePipelineListPipelines {
    return new CodePipelineListPipelines(this, 'ListPipelines', this.__resources, input);
  }

  public listTagsForResource(input: shapes.CodePipelineListTagsForResourceInput): CodePipelineListTagsForResource {
    return new CodePipelineListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public listWebhooks(input: shapes.CodePipelineListWebhooksInput): CodePipelineListWebhooks {
    return new CodePipelineListWebhooks(this, 'ListWebhooks', this.__resources, input);
  }

  public pollForJobs(input: shapes.CodePipelinePollForJobsInput): CodePipelinePollForJobs {
    return new CodePipelinePollForJobs(this, 'PollForJobs', this.__resources, input);
  }

  public pollForThirdPartyJobs(input: shapes.CodePipelinePollForThirdPartyJobsInput): CodePipelinePollForThirdPartyJobs {
    return new CodePipelinePollForThirdPartyJobs(this, 'PollForThirdPartyJobs', this.__resources, input);
  }

  public putActionRevision(input: shapes.CodePipelinePutActionRevisionInput): CodePipelinePutActionRevision {
    return new CodePipelinePutActionRevision(this, 'PutActionRevision', this.__resources, input);
  }

  public putApprovalResult(input: shapes.CodePipelinePutApprovalResultInput): CodePipelinePutApprovalResult {
    return new CodePipelinePutApprovalResult(this, 'PutApprovalResult', this.__resources, input);
  }

  public putJobFailureResult(input: shapes.CodePipelinePutJobFailureResultInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putJobFailureResult',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.PutJobFailureResult'),
        parameters: {
          jobId: input.jobId,
          failureDetails: {
            type: input.failureDetails.type,
            message: input.failureDetails.message,
            externalExecutionId: input.failureDetails.externalExecutionId,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutJobFailureResult', props);
  }

  public putJobSuccessResult(input: shapes.CodePipelinePutJobSuccessResultInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putJobSuccessResult',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.PutJobSuccessResult'),
        parameters: {
          jobId: input.jobId,
          currentRevision: {
            revision: input.currentRevision?.revision,
            changeIdentifier: input.currentRevision?.changeIdentifier,
            created: input.currentRevision?.created,
            revisionSummary: input.currentRevision?.revisionSummary,
          },
          continuationToken: input.continuationToken,
          executionDetails: {
            summary: input.executionDetails?.summary,
            externalExecutionId: input.executionDetails?.externalExecutionId,
            percentComplete: input.executionDetails?.percentComplete,
          },
          outputVariables: input.outputVariables,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutJobSuccessResult', props);
  }

  public putThirdPartyJobFailureResult(input: shapes.CodePipelinePutThirdPartyJobFailureResultInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putThirdPartyJobFailureResult',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.PutThirdPartyJobFailureResult'),
        parameters: {
          jobId: input.jobId,
          clientToken: input.clientToken,
          failureDetails: {
            type: input.failureDetails.type,
            message: input.failureDetails.message,
            externalExecutionId: input.failureDetails.externalExecutionId,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutThirdPartyJobFailureResult', props);
  }

  public putThirdPartyJobSuccessResult(input: shapes.CodePipelinePutThirdPartyJobSuccessResultInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putThirdPartyJobSuccessResult',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.PutThirdPartyJobSuccessResult'),
        parameters: {
          jobId: input.jobId,
          clientToken: input.clientToken,
          currentRevision: {
            revision: input.currentRevision?.revision,
            changeIdentifier: input.currentRevision?.changeIdentifier,
            created: input.currentRevision?.created,
            revisionSummary: input.currentRevision?.revisionSummary,
          },
          continuationToken: input.continuationToken,
          executionDetails: {
            summary: input.executionDetails?.summary,
            externalExecutionId: input.executionDetails?.externalExecutionId,
            percentComplete: input.executionDetails?.percentComplete,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutThirdPartyJobSuccessResult', props);
  }

  public putWebhook(input: shapes.CodePipelinePutWebhookInput): CodePipelinePutWebhook {
    return new CodePipelinePutWebhook(this, 'PutWebhook', this.__resources, input);
  }

  public registerWebhookWithThirdParty(input: shapes.CodePipelineRegisterWebhookWithThirdPartyInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerWebhookWithThirdParty',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.RegisterWebhookWithThirdParty'),
        parameters: {
          webhookName: input.webhookName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RegisterWebhookWithThirdParty', props);
  }

  public retryStageExecution(input: shapes.CodePipelineRetryStageExecutionInput): CodePipelineRetryStageExecution {
    return new CodePipelineRetryStageExecution(this, 'RetryStageExecution', this.__resources, input);
  }

  public startPipelineExecution(input: shapes.CodePipelineStartPipelineExecutionInput): CodePipelineStartPipelineExecution {
    return new CodePipelineStartPipelineExecution(this, 'StartPipelineExecution', this.__resources, input);
  }

  public stopPipelineExecution(input: shapes.CodePipelineStopPipelineExecutionInput): CodePipelineStopPipelineExecution {
    return new CodePipelineStopPipelineExecution(this, 'StopPipelineExecution', this.__resources, input);
  }

  public tagResource(input: shapes.CodePipelineTagResourceInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.TagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.CodePipelineUntagResourceInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.UntagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updatePipeline(input: shapes.CodePipelineUpdatePipelineInput): CodePipelineUpdatePipeline {
    return new CodePipelineUpdatePipeline(this, 'UpdatePipeline', this.__resources, input);
  }

}

export class CodePipelineAcknowledgeJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodePipelineAcknowledgeJobInput) {
    super(scope, id);
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'acknowledgeJob',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.AcknowledgeJob.status'),
        outputPath: 'status',
        parameters: {
          jobId: this.input.jobId,
          nonce: this.input.nonce,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AcknowledgeJob.status', props);
    return resource.getResponseField('status') as unknown as string;
  }

}

export class CodePipelineAcknowledgeThirdPartyJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodePipelineAcknowledgeThirdPartyJobInput) {
    super(scope, id);
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'acknowledgeThirdPartyJob',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.AcknowledgeThirdPartyJob.status'),
        outputPath: 'status',
        parameters: {
          jobId: this.input.jobId,
          nonce: this.input.nonce,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AcknowledgeThirdPartyJob.status', props);
    return resource.getResponseField('status') as unknown as string;
  }

}

export class CodePipelineCreateCustomActionType extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodePipelineCreateCustomActionTypeInput) {
    super(scope, id);
  }

  public get actionType(): CodePipelineCreateCustomActionTypeActionType {
    return new CodePipelineCreateCustomActionTypeActionType(this, 'ActionType', this.__resources, this.input);
  }

  public get tags(): shapes.CodePipelineTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCustomActionType',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.CreateCustomActionType.tags'),
        outputPath: 'tags',
        parameters: {
          category: this.input.category,
          provider: this.input.provider,
          version: this.input.version,
          settings: {
            thirdPartyConfigurationUrl: this.input.settings?.thirdPartyConfigurationUrl,
            entityUrlTemplate: this.input.settings?.entityUrlTemplate,
            executionUrlTemplate: this.input.settings?.executionUrlTemplate,
            revisionUrlTemplate: this.input.settings?.revisionUrlTemplate,
          },
          configurationProperties: this.input.configurationProperties,
          inputArtifactDetails: {
            minimumCount: this.input.inputArtifactDetails.minimumCount,
            maximumCount: this.input.inputArtifactDetails.maximumCount,
          },
          outputArtifactDetails: {
            minimumCount: this.input.outputArtifactDetails.minimumCount,
            maximumCount: this.input.outputArtifactDetails.maximumCount,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCustomActionType.tags', props);
    return resource.getResponseField('tags') as unknown as shapes.CodePipelineTag[];
  }

}

export class CodePipelineCreateCustomActionTypeActionType extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodePipelineCreateCustomActionTypeInput) {
    super(scope, id);
  }

  public get id(): CodePipelineCreateCustomActionTypeActionTypeId {
    return new CodePipelineCreateCustomActionTypeActionTypeId(this, 'Id', this.__resources, this.input);
  }

  public get settings(): CodePipelineCreateCustomActionTypeActionTypeSettings {
    return new CodePipelineCreateCustomActionTypeActionTypeSettings(this, 'Settings', this.__resources, this.input);
  }

  public get actionConfigurationProperties(): shapes.CodePipelineActionConfigurationProperty[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCustomActionType',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.CreateCustomActionType.actionType.actionConfigurationProperties'),
        outputPath: 'actionType.actionConfigurationProperties',
        parameters: {
          category: this.input.category,
          provider: this.input.provider,
          version: this.input.version,
          settings: {
            thirdPartyConfigurationUrl: this.input.settings?.thirdPartyConfigurationUrl,
            entityUrlTemplate: this.input.settings?.entityUrlTemplate,
            executionUrlTemplate: this.input.settings?.executionUrlTemplate,
            revisionUrlTemplate: this.input.settings?.revisionUrlTemplate,
          },
          configurationProperties: this.input.configurationProperties,
          inputArtifactDetails: {
            minimumCount: this.input.inputArtifactDetails.minimumCount,
            maximumCount: this.input.inputArtifactDetails.maximumCount,
          },
          outputArtifactDetails: {
            minimumCount: this.input.outputArtifactDetails.minimumCount,
            maximumCount: this.input.outputArtifactDetails.maximumCount,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCustomActionType.actionType.actionConfigurationProperties', props);
    return resource.getResponseField('actionType.actionConfigurationProperties') as unknown as shapes.CodePipelineActionConfigurationProperty[];
  }

  public get inputArtifactDetails(): CodePipelineCreateCustomActionTypeActionTypeInputArtifactDetails {
    return new CodePipelineCreateCustomActionTypeActionTypeInputArtifactDetails(this, 'InputArtifactDetails', this.__resources, this.input);
  }

  public get outputArtifactDetails(): CodePipelineCreateCustomActionTypeActionTypeOutputArtifactDetails {
    return new CodePipelineCreateCustomActionTypeActionTypeOutputArtifactDetails(this, 'OutputArtifactDetails', this.__resources, this.input);
  }

}

export class CodePipelineCreateCustomActionTypeActionTypeId extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodePipelineCreateCustomActionTypeInput) {
    super(scope, id);
  }

  public get category(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCustomActionType',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.CreateCustomActionType.actionType.id.category'),
        outputPath: 'actionType.id.category',
        parameters: {
          category: this.input.category,
          provider: this.input.provider,
          version: this.input.version,
          settings: {
            thirdPartyConfigurationUrl: this.input.settings?.thirdPartyConfigurationUrl,
            entityUrlTemplate: this.input.settings?.entityUrlTemplate,
            executionUrlTemplate: this.input.settings?.executionUrlTemplate,
            revisionUrlTemplate: this.input.settings?.revisionUrlTemplate,
          },
          configurationProperties: this.input.configurationProperties,
          inputArtifactDetails: {
            minimumCount: this.input.inputArtifactDetails.minimumCount,
            maximumCount: this.input.inputArtifactDetails.maximumCount,
          },
          outputArtifactDetails: {
            minimumCount: this.input.outputArtifactDetails.minimumCount,
            maximumCount: this.input.outputArtifactDetails.maximumCount,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCustomActionType.actionType.id.category', props);
    return resource.getResponseField('actionType.id.category') as unknown as string;
  }

  public get owner(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCustomActionType',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.CreateCustomActionType.actionType.id.owner'),
        outputPath: 'actionType.id.owner',
        parameters: {
          category: this.input.category,
          provider: this.input.provider,
          version: this.input.version,
          settings: {
            thirdPartyConfigurationUrl: this.input.settings?.thirdPartyConfigurationUrl,
            entityUrlTemplate: this.input.settings?.entityUrlTemplate,
            executionUrlTemplate: this.input.settings?.executionUrlTemplate,
            revisionUrlTemplate: this.input.settings?.revisionUrlTemplate,
          },
          configurationProperties: this.input.configurationProperties,
          inputArtifactDetails: {
            minimumCount: this.input.inputArtifactDetails.minimumCount,
            maximumCount: this.input.inputArtifactDetails.maximumCount,
          },
          outputArtifactDetails: {
            minimumCount: this.input.outputArtifactDetails.minimumCount,
            maximumCount: this.input.outputArtifactDetails.maximumCount,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCustomActionType.actionType.id.owner', props);
    return resource.getResponseField('actionType.id.owner') as unknown as string;
  }

  public get provider(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCustomActionType',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.CreateCustomActionType.actionType.id.provider'),
        outputPath: 'actionType.id.provider',
        parameters: {
          category: this.input.category,
          provider: this.input.provider,
          version: this.input.version,
          settings: {
            thirdPartyConfigurationUrl: this.input.settings?.thirdPartyConfigurationUrl,
            entityUrlTemplate: this.input.settings?.entityUrlTemplate,
            executionUrlTemplate: this.input.settings?.executionUrlTemplate,
            revisionUrlTemplate: this.input.settings?.revisionUrlTemplate,
          },
          configurationProperties: this.input.configurationProperties,
          inputArtifactDetails: {
            minimumCount: this.input.inputArtifactDetails.minimumCount,
            maximumCount: this.input.inputArtifactDetails.maximumCount,
          },
          outputArtifactDetails: {
            minimumCount: this.input.outputArtifactDetails.minimumCount,
            maximumCount: this.input.outputArtifactDetails.maximumCount,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCustomActionType.actionType.id.provider', props);
    return resource.getResponseField('actionType.id.provider') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCustomActionType',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.CreateCustomActionType.actionType.id.version'),
        outputPath: 'actionType.id.version',
        parameters: {
          category: this.input.category,
          provider: this.input.provider,
          version: this.input.version,
          settings: {
            thirdPartyConfigurationUrl: this.input.settings?.thirdPartyConfigurationUrl,
            entityUrlTemplate: this.input.settings?.entityUrlTemplate,
            executionUrlTemplate: this.input.settings?.executionUrlTemplate,
            revisionUrlTemplate: this.input.settings?.revisionUrlTemplate,
          },
          configurationProperties: this.input.configurationProperties,
          inputArtifactDetails: {
            minimumCount: this.input.inputArtifactDetails.minimumCount,
            maximumCount: this.input.inputArtifactDetails.maximumCount,
          },
          outputArtifactDetails: {
            minimumCount: this.input.outputArtifactDetails.minimumCount,
            maximumCount: this.input.outputArtifactDetails.maximumCount,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCustomActionType.actionType.id.version', props);
    return resource.getResponseField('actionType.id.version') as unknown as string;
  }

}

export class CodePipelineCreateCustomActionTypeActionTypeSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodePipelineCreateCustomActionTypeInput) {
    super(scope, id);
  }

  public get thirdPartyConfigurationUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCustomActionType',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.CreateCustomActionType.actionType.settings.thirdPartyConfigurationUrl'),
        outputPath: 'actionType.settings.thirdPartyConfigurationUrl',
        parameters: {
          category: this.input.category,
          provider: this.input.provider,
          version: this.input.version,
          settings: {
            thirdPartyConfigurationUrl: this.input.settings?.thirdPartyConfigurationUrl,
            entityUrlTemplate: this.input.settings?.entityUrlTemplate,
            executionUrlTemplate: this.input.settings?.executionUrlTemplate,
            revisionUrlTemplate: this.input.settings?.revisionUrlTemplate,
          },
          configurationProperties: this.input.configurationProperties,
          inputArtifactDetails: {
            minimumCount: this.input.inputArtifactDetails.minimumCount,
            maximumCount: this.input.inputArtifactDetails.maximumCount,
          },
          outputArtifactDetails: {
            minimumCount: this.input.outputArtifactDetails.minimumCount,
            maximumCount: this.input.outputArtifactDetails.maximumCount,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCustomActionType.actionType.settings.thirdPartyConfigurationUrl', props);
    return resource.getResponseField('actionType.settings.thirdPartyConfigurationUrl') as unknown as string;
  }

  public get entityUrlTemplate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCustomActionType',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.CreateCustomActionType.actionType.settings.entityUrlTemplate'),
        outputPath: 'actionType.settings.entityUrlTemplate',
        parameters: {
          category: this.input.category,
          provider: this.input.provider,
          version: this.input.version,
          settings: {
            thirdPartyConfigurationUrl: this.input.settings?.thirdPartyConfigurationUrl,
            entityUrlTemplate: this.input.settings?.entityUrlTemplate,
            executionUrlTemplate: this.input.settings?.executionUrlTemplate,
            revisionUrlTemplate: this.input.settings?.revisionUrlTemplate,
          },
          configurationProperties: this.input.configurationProperties,
          inputArtifactDetails: {
            minimumCount: this.input.inputArtifactDetails.minimumCount,
            maximumCount: this.input.inputArtifactDetails.maximumCount,
          },
          outputArtifactDetails: {
            minimumCount: this.input.outputArtifactDetails.minimumCount,
            maximumCount: this.input.outputArtifactDetails.maximumCount,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCustomActionType.actionType.settings.entityUrlTemplate', props);
    return resource.getResponseField('actionType.settings.entityUrlTemplate') as unknown as string;
  }

  public get executionUrlTemplate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCustomActionType',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.CreateCustomActionType.actionType.settings.executionUrlTemplate'),
        outputPath: 'actionType.settings.executionUrlTemplate',
        parameters: {
          category: this.input.category,
          provider: this.input.provider,
          version: this.input.version,
          settings: {
            thirdPartyConfigurationUrl: this.input.settings?.thirdPartyConfigurationUrl,
            entityUrlTemplate: this.input.settings?.entityUrlTemplate,
            executionUrlTemplate: this.input.settings?.executionUrlTemplate,
            revisionUrlTemplate: this.input.settings?.revisionUrlTemplate,
          },
          configurationProperties: this.input.configurationProperties,
          inputArtifactDetails: {
            minimumCount: this.input.inputArtifactDetails.minimumCount,
            maximumCount: this.input.inputArtifactDetails.maximumCount,
          },
          outputArtifactDetails: {
            minimumCount: this.input.outputArtifactDetails.minimumCount,
            maximumCount: this.input.outputArtifactDetails.maximumCount,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCustomActionType.actionType.settings.executionUrlTemplate', props);
    return resource.getResponseField('actionType.settings.executionUrlTemplate') as unknown as string;
  }

  public get revisionUrlTemplate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCustomActionType',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.CreateCustomActionType.actionType.settings.revisionUrlTemplate'),
        outputPath: 'actionType.settings.revisionUrlTemplate',
        parameters: {
          category: this.input.category,
          provider: this.input.provider,
          version: this.input.version,
          settings: {
            thirdPartyConfigurationUrl: this.input.settings?.thirdPartyConfigurationUrl,
            entityUrlTemplate: this.input.settings?.entityUrlTemplate,
            executionUrlTemplate: this.input.settings?.executionUrlTemplate,
            revisionUrlTemplate: this.input.settings?.revisionUrlTemplate,
          },
          configurationProperties: this.input.configurationProperties,
          inputArtifactDetails: {
            minimumCount: this.input.inputArtifactDetails.minimumCount,
            maximumCount: this.input.inputArtifactDetails.maximumCount,
          },
          outputArtifactDetails: {
            minimumCount: this.input.outputArtifactDetails.minimumCount,
            maximumCount: this.input.outputArtifactDetails.maximumCount,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCustomActionType.actionType.settings.revisionUrlTemplate', props);
    return resource.getResponseField('actionType.settings.revisionUrlTemplate') as unknown as string;
  }

}

export class CodePipelineCreateCustomActionTypeActionTypeInputArtifactDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodePipelineCreateCustomActionTypeInput) {
    super(scope, id);
  }

  public get minimumCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCustomActionType',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.CreateCustomActionType.actionType.inputArtifactDetails.minimumCount'),
        outputPath: 'actionType.inputArtifactDetails.minimumCount',
        parameters: {
          category: this.input.category,
          provider: this.input.provider,
          version: this.input.version,
          settings: {
            thirdPartyConfigurationUrl: this.input.settings?.thirdPartyConfigurationUrl,
            entityUrlTemplate: this.input.settings?.entityUrlTemplate,
            executionUrlTemplate: this.input.settings?.executionUrlTemplate,
            revisionUrlTemplate: this.input.settings?.revisionUrlTemplate,
          },
          configurationProperties: this.input.configurationProperties,
          inputArtifactDetails: {
            minimumCount: this.input.inputArtifactDetails.minimumCount,
            maximumCount: this.input.inputArtifactDetails.maximumCount,
          },
          outputArtifactDetails: {
            minimumCount: this.input.outputArtifactDetails.minimumCount,
            maximumCount: this.input.outputArtifactDetails.maximumCount,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCustomActionType.actionType.inputArtifactDetails.minimumCount', props);
    return resource.getResponseField('actionType.inputArtifactDetails.minimumCount') as unknown as number;
  }

  public get maximumCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCustomActionType',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.CreateCustomActionType.actionType.inputArtifactDetails.maximumCount'),
        outputPath: 'actionType.inputArtifactDetails.maximumCount',
        parameters: {
          category: this.input.category,
          provider: this.input.provider,
          version: this.input.version,
          settings: {
            thirdPartyConfigurationUrl: this.input.settings?.thirdPartyConfigurationUrl,
            entityUrlTemplate: this.input.settings?.entityUrlTemplate,
            executionUrlTemplate: this.input.settings?.executionUrlTemplate,
            revisionUrlTemplate: this.input.settings?.revisionUrlTemplate,
          },
          configurationProperties: this.input.configurationProperties,
          inputArtifactDetails: {
            minimumCount: this.input.inputArtifactDetails.minimumCount,
            maximumCount: this.input.inputArtifactDetails.maximumCount,
          },
          outputArtifactDetails: {
            minimumCount: this.input.outputArtifactDetails.minimumCount,
            maximumCount: this.input.outputArtifactDetails.maximumCount,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCustomActionType.actionType.inputArtifactDetails.maximumCount', props);
    return resource.getResponseField('actionType.inputArtifactDetails.maximumCount') as unknown as number;
  }

}

export class CodePipelineCreateCustomActionTypeActionTypeOutputArtifactDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodePipelineCreateCustomActionTypeInput) {
    super(scope, id);
  }

  public get minimumCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCustomActionType',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.CreateCustomActionType.actionType.outputArtifactDetails.minimumCount'),
        outputPath: 'actionType.outputArtifactDetails.minimumCount',
        parameters: {
          category: this.input.category,
          provider: this.input.provider,
          version: this.input.version,
          settings: {
            thirdPartyConfigurationUrl: this.input.settings?.thirdPartyConfigurationUrl,
            entityUrlTemplate: this.input.settings?.entityUrlTemplate,
            executionUrlTemplate: this.input.settings?.executionUrlTemplate,
            revisionUrlTemplate: this.input.settings?.revisionUrlTemplate,
          },
          configurationProperties: this.input.configurationProperties,
          inputArtifactDetails: {
            minimumCount: this.input.inputArtifactDetails.minimumCount,
            maximumCount: this.input.inputArtifactDetails.maximumCount,
          },
          outputArtifactDetails: {
            minimumCount: this.input.outputArtifactDetails.minimumCount,
            maximumCount: this.input.outputArtifactDetails.maximumCount,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCustomActionType.actionType.outputArtifactDetails.minimumCount', props);
    return resource.getResponseField('actionType.outputArtifactDetails.minimumCount') as unknown as number;
  }

  public get maximumCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCustomActionType',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.CreateCustomActionType.actionType.outputArtifactDetails.maximumCount'),
        outputPath: 'actionType.outputArtifactDetails.maximumCount',
        parameters: {
          category: this.input.category,
          provider: this.input.provider,
          version: this.input.version,
          settings: {
            thirdPartyConfigurationUrl: this.input.settings?.thirdPartyConfigurationUrl,
            entityUrlTemplate: this.input.settings?.entityUrlTemplate,
            executionUrlTemplate: this.input.settings?.executionUrlTemplate,
            revisionUrlTemplate: this.input.settings?.revisionUrlTemplate,
          },
          configurationProperties: this.input.configurationProperties,
          inputArtifactDetails: {
            minimumCount: this.input.inputArtifactDetails.minimumCount,
            maximumCount: this.input.inputArtifactDetails.maximumCount,
          },
          outputArtifactDetails: {
            minimumCount: this.input.outputArtifactDetails.minimumCount,
            maximumCount: this.input.outputArtifactDetails.maximumCount,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCustomActionType.actionType.outputArtifactDetails.maximumCount', props);
    return resource.getResponseField('actionType.outputArtifactDetails.maximumCount') as unknown as number;
  }

}

export class CodePipelineCreatePipeline extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodePipelineCreatePipelineInput) {
    super(scope, id);
  }

  public get pipeline(): CodePipelineCreatePipelinePipeline {
    return new CodePipelineCreatePipelinePipeline(this, 'Pipeline', this.__resources, this.input);
  }

  public get tags(): shapes.CodePipelineTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPipeline',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.CreatePipeline.tags'),
        outputPath: 'tags',
        parameters: {
          pipeline: {
            name: this.input.pipeline.name,
            roleArn: this.input.pipeline.roleArn,
            artifactStore: {
              type: this.input.pipeline.artifactStore?.type,
              location: this.input.pipeline.artifactStore?.location,
              encryptionKey: {
                id: this.input.pipeline.artifactStore?.encryptionKey?.id,
                type: this.input.pipeline.artifactStore?.encryptionKey?.type,
              },
            },
            artifactStores: this.input.pipeline.artifactStores,
            stages: this.input.pipeline.stages,
            version: this.input.pipeline.version,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePipeline.tags', props);
    return resource.getResponseField('tags') as unknown as shapes.CodePipelineTag[];
  }

}

export class CodePipelineCreatePipelinePipeline extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodePipelineCreatePipelineInput) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPipeline',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.CreatePipeline.pipeline.name'),
        outputPath: 'pipeline.name',
        parameters: {
          pipeline: {
            name: this.input.pipeline.name,
            roleArn: this.input.pipeline.roleArn,
            artifactStore: {
              type: this.input.pipeline.artifactStore?.type,
              location: this.input.pipeline.artifactStore?.location,
              encryptionKey: {
                id: this.input.pipeline.artifactStore?.encryptionKey?.id,
                type: this.input.pipeline.artifactStore?.encryptionKey?.type,
              },
            },
            artifactStores: this.input.pipeline.artifactStores,
            stages: this.input.pipeline.stages,
            version: this.input.pipeline.version,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePipeline.pipeline.name', props);
    return resource.getResponseField('pipeline.name') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPipeline',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.CreatePipeline.pipeline.roleArn'),
        outputPath: 'pipeline.roleArn',
        parameters: {
          pipeline: {
            name: this.input.pipeline.name,
            roleArn: this.input.pipeline.roleArn,
            artifactStore: {
              type: this.input.pipeline.artifactStore?.type,
              location: this.input.pipeline.artifactStore?.location,
              encryptionKey: {
                id: this.input.pipeline.artifactStore?.encryptionKey?.id,
                type: this.input.pipeline.artifactStore?.encryptionKey?.type,
              },
            },
            artifactStores: this.input.pipeline.artifactStores,
            stages: this.input.pipeline.stages,
            version: this.input.pipeline.version,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePipeline.pipeline.roleArn', props);
    return resource.getResponseField('pipeline.roleArn') as unknown as string;
  }

  public get artifactStore(): CodePipelineCreatePipelinePipelineArtifactStore {
    return new CodePipelineCreatePipelinePipelineArtifactStore(this, 'ArtifactStore', this.__resources, this.input);
  }

  public get artifactStores(): Record<string, shapes.CodePipelineArtifactStore> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPipeline',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.CreatePipeline.pipeline.artifactStores'),
        outputPath: 'pipeline.artifactStores',
        parameters: {
          pipeline: {
            name: this.input.pipeline.name,
            roleArn: this.input.pipeline.roleArn,
            artifactStore: {
              type: this.input.pipeline.artifactStore?.type,
              location: this.input.pipeline.artifactStore?.location,
              encryptionKey: {
                id: this.input.pipeline.artifactStore?.encryptionKey?.id,
                type: this.input.pipeline.artifactStore?.encryptionKey?.type,
              },
            },
            artifactStores: this.input.pipeline.artifactStores,
            stages: this.input.pipeline.stages,
            version: this.input.pipeline.version,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePipeline.pipeline.artifactStores', props);
    return resource.getResponseField('pipeline.artifactStores') as unknown as Record<string, shapes.CodePipelineArtifactStore>;
  }

  public get stages(): shapes.CodePipelineStageDeclaration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPipeline',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.CreatePipeline.pipeline.stages'),
        outputPath: 'pipeline.stages',
        parameters: {
          pipeline: {
            name: this.input.pipeline.name,
            roleArn: this.input.pipeline.roleArn,
            artifactStore: {
              type: this.input.pipeline.artifactStore?.type,
              location: this.input.pipeline.artifactStore?.location,
              encryptionKey: {
                id: this.input.pipeline.artifactStore?.encryptionKey?.id,
                type: this.input.pipeline.artifactStore?.encryptionKey?.type,
              },
            },
            artifactStores: this.input.pipeline.artifactStores,
            stages: this.input.pipeline.stages,
            version: this.input.pipeline.version,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePipeline.pipeline.stages', props);
    return resource.getResponseField('pipeline.stages') as unknown as shapes.CodePipelineStageDeclaration[];
  }

  public get version(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPipeline',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.CreatePipeline.pipeline.version'),
        outputPath: 'pipeline.version',
        parameters: {
          pipeline: {
            name: this.input.pipeline.name,
            roleArn: this.input.pipeline.roleArn,
            artifactStore: {
              type: this.input.pipeline.artifactStore?.type,
              location: this.input.pipeline.artifactStore?.location,
              encryptionKey: {
                id: this.input.pipeline.artifactStore?.encryptionKey?.id,
                type: this.input.pipeline.artifactStore?.encryptionKey?.type,
              },
            },
            artifactStores: this.input.pipeline.artifactStores,
            stages: this.input.pipeline.stages,
            version: this.input.pipeline.version,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePipeline.pipeline.version', props);
    return resource.getResponseField('pipeline.version') as unknown as number;
  }

}

export class CodePipelineCreatePipelinePipelineArtifactStore extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodePipelineCreatePipelineInput) {
    super(scope, id);
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPipeline',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.CreatePipeline.pipeline.artifactStore.type'),
        outputPath: 'pipeline.artifactStore.type',
        parameters: {
          pipeline: {
            name: this.input.pipeline.name,
            roleArn: this.input.pipeline.roleArn,
            artifactStore: {
              type: this.input.pipeline.artifactStore?.type,
              location: this.input.pipeline.artifactStore?.location,
              encryptionKey: {
                id: this.input.pipeline.artifactStore?.encryptionKey?.id,
                type: this.input.pipeline.artifactStore?.encryptionKey?.type,
              },
            },
            artifactStores: this.input.pipeline.artifactStores,
            stages: this.input.pipeline.stages,
            version: this.input.pipeline.version,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePipeline.pipeline.artifactStore.type', props);
    return resource.getResponseField('pipeline.artifactStore.type') as unknown as string;
  }

  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPipeline',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.CreatePipeline.pipeline.artifactStore.location'),
        outputPath: 'pipeline.artifactStore.location',
        parameters: {
          pipeline: {
            name: this.input.pipeline.name,
            roleArn: this.input.pipeline.roleArn,
            artifactStore: {
              type: this.input.pipeline.artifactStore?.type,
              location: this.input.pipeline.artifactStore?.location,
              encryptionKey: {
                id: this.input.pipeline.artifactStore?.encryptionKey?.id,
                type: this.input.pipeline.artifactStore?.encryptionKey?.type,
              },
            },
            artifactStores: this.input.pipeline.artifactStores,
            stages: this.input.pipeline.stages,
            version: this.input.pipeline.version,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePipeline.pipeline.artifactStore.location', props);
    return resource.getResponseField('pipeline.artifactStore.location') as unknown as string;
  }

  public get encryptionKey(): CodePipelineCreatePipelinePipelineArtifactStoreEncryptionKey {
    return new CodePipelineCreatePipelinePipelineArtifactStoreEncryptionKey(this, 'EncryptionKey', this.__resources, this.input);
  }

}

export class CodePipelineCreatePipelinePipelineArtifactStoreEncryptionKey extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodePipelineCreatePipelineInput) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPipeline',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.CreatePipeline.pipeline.artifactStore.encryptionKey.id'),
        outputPath: 'pipeline.artifactStore.encryptionKey.id',
        parameters: {
          pipeline: {
            name: this.input.pipeline.name,
            roleArn: this.input.pipeline.roleArn,
            artifactStore: {
              type: this.input.pipeline.artifactStore?.type,
              location: this.input.pipeline.artifactStore?.location,
              encryptionKey: {
                id: this.input.pipeline.artifactStore?.encryptionKey?.id,
                type: this.input.pipeline.artifactStore?.encryptionKey?.type,
              },
            },
            artifactStores: this.input.pipeline.artifactStores,
            stages: this.input.pipeline.stages,
            version: this.input.pipeline.version,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePipeline.pipeline.artifactStore.encryptionKey.id', props);
    return resource.getResponseField('pipeline.artifactStore.encryptionKey.id') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPipeline',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.CreatePipeline.pipeline.artifactStore.encryptionKey.type'),
        outputPath: 'pipeline.artifactStore.encryptionKey.type',
        parameters: {
          pipeline: {
            name: this.input.pipeline.name,
            roleArn: this.input.pipeline.roleArn,
            artifactStore: {
              type: this.input.pipeline.artifactStore?.type,
              location: this.input.pipeline.artifactStore?.location,
              encryptionKey: {
                id: this.input.pipeline.artifactStore?.encryptionKey?.id,
                type: this.input.pipeline.artifactStore?.encryptionKey?.type,
              },
            },
            artifactStores: this.input.pipeline.artifactStores,
            stages: this.input.pipeline.stages,
            version: this.input.pipeline.version,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePipeline.pipeline.artifactStore.encryptionKey.type', props);
    return resource.getResponseField('pipeline.artifactStore.encryptionKey.type') as unknown as string;
  }

}

export class CodePipelineFetchJobDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodePipelineGetJobDetailsInput) {
    super(scope, id);
  }

  public get jobDetails(): CodePipelineFetchJobDetailsJobDetails {
    return new CodePipelineFetchJobDetailsJobDetails(this, 'JobDetails', this.__resources, this.input);
  }

}

export class CodePipelineFetchJobDetailsJobDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodePipelineGetJobDetailsInput) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobDetails',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetJobDetails.jobDetails.id'),
        outputPath: 'jobDetails.id',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJobDetails.jobDetails.id', props);
    return resource.getResponseField('jobDetails.id') as unknown as string;
  }

  public get data(): CodePipelineFetchJobDetailsJobDetailsData {
    return new CodePipelineFetchJobDetailsJobDetailsData(this, 'Data', this.__resources, this.input);
  }

  public get accountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobDetails',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetJobDetails.jobDetails.accountId'),
        outputPath: 'jobDetails.accountId',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJobDetails.jobDetails.accountId', props);
    return resource.getResponseField('jobDetails.accountId') as unknown as string;
  }

}

export class CodePipelineFetchJobDetailsJobDetailsData extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodePipelineGetJobDetailsInput) {
    super(scope, id);
  }

  public get actionTypeId(): CodePipelineFetchJobDetailsJobDetailsDataActionTypeId {
    return new CodePipelineFetchJobDetailsJobDetailsDataActionTypeId(this, 'ActionTypeId', this.__resources, this.input);
  }

  public get actionConfiguration(): CodePipelineFetchJobDetailsJobDetailsDataActionConfiguration {
    return new CodePipelineFetchJobDetailsJobDetailsDataActionConfiguration(this, 'ActionConfiguration', this.__resources, this.input);
  }

  public get pipelineContext(): CodePipelineFetchJobDetailsJobDetailsDataPipelineContext {
    return new CodePipelineFetchJobDetailsJobDetailsDataPipelineContext(this, 'PipelineContext', this.__resources, this.input);
  }

  public get inputArtifacts(): shapes.CodePipelineArtifact[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobDetails',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetJobDetails.jobDetails.data.inputArtifacts'),
        outputPath: 'jobDetails.data.inputArtifacts',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJobDetails.jobDetails.data.inputArtifacts', props);
    return resource.getResponseField('jobDetails.data.inputArtifacts') as unknown as shapes.CodePipelineArtifact[];
  }

  public get outputArtifacts(): shapes.CodePipelineArtifact[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobDetails',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetJobDetails.jobDetails.data.outputArtifacts'),
        outputPath: 'jobDetails.data.outputArtifacts',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJobDetails.jobDetails.data.outputArtifacts', props);
    return resource.getResponseField('jobDetails.data.outputArtifacts') as unknown as shapes.CodePipelineArtifact[];
  }

  public get artifactCredentials(): CodePipelineFetchJobDetailsJobDetailsDataArtifactCredentials {
    return new CodePipelineFetchJobDetailsJobDetailsDataArtifactCredentials(this, 'ArtifactCredentials', this.__resources, this.input);
  }

  public get continuationToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobDetails',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetJobDetails.jobDetails.data.continuationToken'),
        outputPath: 'jobDetails.data.continuationToken',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJobDetails.jobDetails.data.continuationToken', props);
    return resource.getResponseField('jobDetails.data.continuationToken') as unknown as string;
  }

  public get encryptionKey(): CodePipelineFetchJobDetailsJobDetailsDataEncryptionKey {
    return new CodePipelineFetchJobDetailsJobDetailsDataEncryptionKey(this, 'EncryptionKey', this.__resources, this.input);
  }

}

export class CodePipelineFetchJobDetailsJobDetailsDataActionTypeId extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodePipelineGetJobDetailsInput) {
    super(scope, id);
  }

  public get category(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobDetails',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetJobDetails.jobDetails.data.actionTypeId.category'),
        outputPath: 'jobDetails.data.actionTypeId.category',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJobDetails.jobDetails.data.actionTypeId.category', props);
    return resource.getResponseField('jobDetails.data.actionTypeId.category') as unknown as string;
  }

  public get owner(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobDetails',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetJobDetails.jobDetails.data.actionTypeId.owner'),
        outputPath: 'jobDetails.data.actionTypeId.owner',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJobDetails.jobDetails.data.actionTypeId.owner', props);
    return resource.getResponseField('jobDetails.data.actionTypeId.owner') as unknown as string;
  }

  public get provider(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobDetails',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetJobDetails.jobDetails.data.actionTypeId.provider'),
        outputPath: 'jobDetails.data.actionTypeId.provider',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJobDetails.jobDetails.data.actionTypeId.provider', props);
    return resource.getResponseField('jobDetails.data.actionTypeId.provider') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobDetails',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetJobDetails.jobDetails.data.actionTypeId.version'),
        outputPath: 'jobDetails.data.actionTypeId.version',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJobDetails.jobDetails.data.actionTypeId.version', props);
    return resource.getResponseField('jobDetails.data.actionTypeId.version') as unknown as string;
  }

}

export class CodePipelineFetchJobDetailsJobDetailsDataActionConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodePipelineGetJobDetailsInput) {
    super(scope, id);
  }

  public get configuration(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobDetails',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetJobDetails.jobDetails.data.actionConfiguration.configuration'),
        outputPath: 'jobDetails.data.actionConfiguration.configuration',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJobDetails.jobDetails.data.actionConfiguration.configuration', props);
    return resource.getResponseField('jobDetails.data.actionConfiguration.configuration') as unknown as Record<string, string>;
  }

}

export class CodePipelineFetchJobDetailsJobDetailsDataPipelineContext extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodePipelineGetJobDetailsInput) {
    super(scope, id);
  }

  public get pipelineName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobDetails',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetJobDetails.jobDetails.data.pipelineContext.pipelineName'),
        outputPath: 'jobDetails.data.pipelineContext.pipelineName',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJobDetails.jobDetails.data.pipelineContext.pipelineName', props);
    return resource.getResponseField('jobDetails.data.pipelineContext.pipelineName') as unknown as string;
  }

  public get stage(): CodePipelineFetchJobDetailsJobDetailsDataPipelineContextStage {
    return new CodePipelineFetchJobDetailsJobDetailsDataPipelineContextStage(this, 'Stage', this.__resources, this.input);
  }

  public get action(): CodePipelineFetchJobDetailsJobDetailsDataPipelineContextAction {
    return new CodePipelineFetchJobDetailsJobDetailsDataPipelineContextAction(this, 'Action', this.__resources, this.input);
  }

  public get pipelineArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobDetails',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetJobDetails.jobDetails.data.pipelineContext.pipelineArn'),
        outputPath: 'jobDetails.data.pipelineContext.pipelineArn',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJobDetails.jobDetails.data.pipelineContext.pipelineArn', props);
    return resource.getResponseField('jobDetails.data.pipelineContext.pipelineArn') as unknown as string;
  }

  public get pipelineExecutionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobDetails',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetJobDetails.jobDetails.data.pipelineContext.pipelineExecutionId'),
        outputPath: 'jobDetails.data.pipelineContext.pipelineExecutionId',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJobDetails.jobDetails.data.pipelineContext.pipelineExecutionId', props);
    return resource.getResponseField('jobDetails.data.pipelineContext.pipelineExecutionId') as unknown as string;
  }

}

export class CodePipelineFetchJobDetailsJobDetailsDataPipelineContextStage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodePipelineGetJobDetailsInput) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobDetails',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetJobDetails.jobDetails.data.pipelineContext.stage.name'),
        outputPath: 'jobDetails.data.pipelineContext.stage.name',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJobDetails.jobDetails.data.pipelineContext.stage.name', props);
    return resource.getResponseField('jobDetails.data.pipelineContext.stage.name') as unknown as string;
  }

}

export class CodePipelineFetchJobDetailsJobDetailsDataPipelineContextAction extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodePipelineGetJobDetailsInput) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobDetails',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetJobDetails.jobDetails.data.pipelineContext.action.name'),
        outputPath: 'jobDetails.data.pipelineContext.action.name',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJobDetails.jobDetails.data.pipelineContext.action.name', props);
    return resource.getResponseField('jobDetails.data.pipelineContext.action.name') as unknown as string;
  }

  public get actionExecutionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobDetails',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetJobDetails.jobDetails.data.pipelineContext.action.actionExecutionId'),
        outputPath: 'jobDetails.data.pipelineContext.action.actionExecutionId',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJobDetails.jobDetails.data.pipelineContext.action.actionExecutionId', props);
    return resource.getResponseField('jobDetails.data.pipelineContext.action.actionExecutionId') as unknown as string;
  }

}

export class CodePipelineFetchJobDetailsJobDetailsDataArtifactCredentials extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodePipelineGetJobDetailsInput) {
    super(scope, id);
  }

  public get accessKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobDetails',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetJobDetails.jobDetails.data.artifactCredentials.accessKeyId'),
        outputPath: 'jobDetails.data.artifactCredentials.accessKeyId',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJobDetails.jobDetails.data.artifactCredentials.accessKeyId', props);
    return resource.getResponseField('jobDetails.data.artifactCredentials.accessKeyId') as unknown as string;
  }

  public get secretAccessKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobDetails',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetJobDetails.jobDetails.data.artifactCredentials.secretAccessKey'),
        outputPath: 'jobDetails.data.artifactCredentials.secretAccessKey',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJobDetails.jobDetails.data.artifactCredentials.secretAccessKey', props);
    return resource.getResponseField('jobDetails.data.artifactCredentials.secretAccessKey') as unknown as string;
  }

  public get sessionToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobDetails',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetJobDetails.jobDetails.data.artifactCredentials.sessionToken'),
        outputPath: 'jobDetails.data.artifactCredentials.sessionToken',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJobDetails.jobDetails.data.artifactCredentials.sessionToken', props);
    return resource.getResponseField('jobDetails.data.artifactCredentials.sessionToken') as unknown as string;
  }

}

export class CodePipelineFetchJobDetailsJobDetailsDataEncryptionKey extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodePipelineGetJobDetailsInput) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobDetails',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetJobDetails.jobDetails.data.encryptionKey.id'),
        outputPath: 'jobDetails.data.encryptionKey.id',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJobDetails.jobDetails.data.encryptionKey.id', props);
    return resource.getResponseField('jobDetails.data.encryptionKey.id') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobDetails',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetJobDetails.jobDetails.data.encryptionKey.type'),
        outputPath: 'jobDetails.data.encryptionKey.type',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJobDetails.jobDetails.data.encryptionKey.type', props);
    return resource.getResponseField('jobDetails.data.encryptionKey.type') as unknown as string;
  }

}

export class CodePipelineFetchPipeline extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodePipelineGetPipelineInput) {
    super(scope, id);
  }

  public get pipeline(): CodePipelineFetchPipelinePipeline {
    return new CodePipelineFetchPipelinePipeline(this, 'Pipeline', this.__resources, this.input);
  }

  public get metadata(): CodePipelineFetchPipelineMetadata {
    return new CodePipelineFetchPipelineMetadata(this, 'Metadata', this.__resources, this.input);
  }

}

export class CodePipelineFetchPipelinePipeline extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodePipelineGetPipelineInput) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPipeline',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetPipeline.pipeline.name'),
        outputPath: 'pipeline.name',
        parameters: {
          name: this.input.name,
          version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPipeline.pipeline.name', props);
    return resource.getResponseField('pipeline.name') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPipeline',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetPipeline.pipeline.roleArn'),
        outputPath: 'pipeline.roleArn',
        parameters: {
          name: this.input.name,
          version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPipeline.pipeline.roleArn', props);
    return resource.getResponseField('pipeline.roleArn') as unknown as string;
  }

  public get artifactStore(): CodePipelineFetchPipelinePipelineArtifactStore {
    return new CodePipelineFetchPipelinePipelineArtifactStore(this, 'ArtifactStore', this.__resources, this.input);
  }

  public get artifactStores(): Record<string, shapes.CodePipelineArtifactStore> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPipeline',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetPipeline.pipeline.artifactStores'),
        outputPath: 'pipeline.artifactStores',
        parameters: {
          name: this.input.name,
          version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPipeline.pipeline.artifactStores', props);
    return resource.getResponseField('pipeline.artifactStores') as unknown as Record<string, shapes.CodePipelineArtifactStore>;
  }

  public get stages(): shapes.CodePipelineStageDeclaration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPipeline',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetPipeline.pipeline.stages'),
        outputPath: 'pipeline.stages',
        parameters: {
          name: this.input.name,
          version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPipeline.pipeline.stages', props);
    return resource.getResponseField('pipeline.stages') as unknown as shapes.CodePipelineStageDeclaration[];
  }

  public get version(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPipeline',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetPipeline.pipeline.version'),
        outputPath: 'pipeline.version',
        parameters: {
          name: this.input.name,
          version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPipeline.pipeline.version', props);
    return resource.getResponseField('pipeline.version') as unknown as number;
  }

}

export class CodePipelineFetchPipelinePipelineArtifactStore extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodePipelineGetPipelineInput) {
    super(scope, id);
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPipeline',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetPipeline.pipeline.artifactStore.type'),
        outputPath: 'pipeline.artifactStore.type',
        parameters: {
          name: this.input.name,
          version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPipeline.pipeline.artifactStore.type', props);
    return resource.getResponseField('pipeline.artifactStore.type') as unknown as string;
  }

  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPipeline',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetPipeline.pipeline.artifactStore.location'),
        outputPath: 'pipeline.artifactStore.location',
        parameters: {
          name: this.input.name,
          version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPipeline.pipeline.artifactStore.location', props);
    return resource.getResponseField('pipeline.artifactStore.location') as unknown as string;
  }

  public get encryptionKey(): CodePipelineFetchPipelinePipelineArtifactStoreEncryptionKey {
    return new CodePipelineFetchPipelinePipelineArtifactStoreEncryptionKey(this, 'EncryptionKey', this.__resources, this.input);
  }

}

export class CodePipelineFetchPipelinePipelineArtifactStoreEncryptionKey extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodePipelineGetPipelineInput) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPipeline',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetPipeline.pipeline.artifactStore.encryptionKey.id'),
        outputPath: 'pipeline.artifactStore.encryptionKey.id',
        parameters: {
          name: this.input.name,
          version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPipeline.pipeline.artifactStore.encryptionKey.id', props);
    return resource.getResponseField('pipeline.artifactStore.encryptionKey.id') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPipeline',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetPipeline.pipeline.artifactStore.encryptionKey.type'),
        outputPath: 'pipeline.artifactStore.encryptionKey.type',
        parameters: {
          name: this.input.name,
          version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPipeline.pipeline.artifactStore.encryptionKey.type', props);
    return resource.getResponseField('pipeline.artifactStore.encryptionKey.type') as unknown as string;
  }

}

export class CodePipelineFetchPipelineMetadata extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodePipelineGetPipelineInput) {
    super(scope, id);
  }

  public get pipelineArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPipeline',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetPipeline.metadata.pipelineArn'),
        outputPath: 'metadata.pipelineArn',
        parameters: {
          name: this.input.name,
          version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPipeline.metadata.pipelineArn', props);
    return resource.getResponseField('metadata.pipelineArn') as unknown as string;
  }

  public get created(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPipeline',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetPipeline.metadata.created'),
        outputPath: 'metadata.created',
        parameters: {
          name: this.input.name,
          version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPipeline.metadata.created', props);
    return resource.getResponseField('metadata.created') as unknown as string;
  }

  public get updated(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPipeline',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetPipeline.metadata.updated'),
        outputPath: 'metadata.updated',
        parameters: {
          name: this.input.name,
          version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPipeline.metadata.updated', props);
    return resource.getResponseField('metadata.updated') as unknown as string;
  }

}

export class CodePipelineFetchPipelineExecution extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodePipelineGetPipelineExecutionInput) {
    super(scope, id);
  }

  public get pipelineExecution(): CodePipelineFetchPipelineExecutionPipelineExecution {
    return new CodePipelineFetchPipelineExecutionPipelineExecution(this, 'PipelineExecution', this.__resources, this.input);
  }

}

export class CodePipelineFetchPipelineExecutionPipelineExecution extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodePipelineGetPipelineExecutionInput) {
    super(scope, id);
  }

  public get pipelineName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPipelineExecution',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetPipelineExecution.pipelineExecution.pipelineName'),
        outputPath: 'pipelineExecution.pipelineName',
        parameters: {
          pipelineName: this.input.pipelineName,
          pipelineExecutionId: this.input.pipelineExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPipelineExecution.pipelineExecution.pipelineName', props);
    return resource.getResponseField('pipelineExecution.pipelineName') as unknown as string;
  }

  public get pipelineVersion(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPipelineExecution',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetPipelineExecution.pipelineExecution.pipelineVersion'),
        outputPath: 'pipelineExecution.pipelineVersion',
        parameters: {
          pipelineName: this.input.pipelineName,
          pipelineExecutionId: this.input.pipelineExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPipelineExecution.pipelineExecution.pipelineVersion', props);
    return resource.getResponseField('pipelineExecution.pipelineVersion') as unknown as number;
  }

  public get pipelineExecutionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPipelineExecution',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetPipelineExecution.pipelineExecution.pipelineExecutionId'),
        outputPath: 'pipelineExecution.pipelineExecutionId',
        parameters: {
          pipelineName: this.input.pipelineName,
          pipelineExecutionId: this.input.pipelineExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPipelineExecution.pipelineExecution.pipelineExecutionId', props);
    return resource.getResponseField('pipelineExecution.pipelineExecutionId') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPipelineExecution',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetPipelineExecution.pipelineExecution.status'),
        outputPath: 'pipelineExecution.status',
        parameters: {
          pipelineName: this.input.pipelineName,
          pipelineExecutionId: this.input.pipelineExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPipelineExecution.pipelineExecution.status', props);
    return resource.getResponseField('pipelineExecution.status') as unknown as string;
  }

  public get artifactRevisions(): shapes.CodePipelineArtifactRevision[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPipelineExecution',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetPipelineExecution.pipelineExecution.artifactRevisions'),
        outputPath: 'pipelineExecution.artifactRevisions',
        parameters: {
          pipelineName: this.input.pipelineName,
          pipelineExecutionId: this.input.pipelineExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPipelineExecution.pipelineExecution.artifactRevisions', props);
    return resource.getResponseField('pipelineExecution.artifactRevisions') as unknown as shapes.CodePipelineArtifactRevision[];
  }

}

export class CodePipelineFetchPipelineState extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodePipelineGetPipelineStateInput) {
    super(scope, id);
  }

  public get pipelineName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPipelineState',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetPipelineState.pipelineName'),
        outputPath: 'pipelineName',
        parameters: {
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPipelineState.pipelineName', props);
    return resource.getResponseField('pipelineName') as unknown as string;
  }

  public get pipelineVersion(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPipelineState',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetPipelineState.pipelineVersion'),
        outputPath: 'pipelineVersion',
        parameters: {
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPipelineState.pipelineVersion', props);
    return resource.getResponseField('pipelineVersion') as unknown as number;
  }

  public get stageStates(): shapes.CodePipelineStageState[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPipelineState',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetPipelineState.stageStates'),
        outputPath: 'stageStates',
        parameters: {
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPipelineState.stageStates', props);
    return resource.getResponseField('stageStates') as unknown as shapes.CodePipelineStageState[];
  }

  public get created(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPipelineState',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetPipelineState.created'),
        outputPath: 'created',
        parameters: {
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPipelineState.created', props);
    return resource.getResponseField('created') as unknown as string;
  }

  public get updated(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPipelineState',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetPipelineState.updated'),
        outputPath: 'updated',
        parameters: {
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPipelineState.updated', props);
    return resource.getResponseField('updated') as unknown as string;
  }

}

export class CodePipelineFetchThirdPartyJobDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodePipelineGetThirdPartyJobDetailsInput) {
    super(scope, id);
  }

  public get jobDetails(): CodePipelineFetchThirdPartyJobDetailsJobDetails {
    return new CodePipelineFetchThirdPartyJobDetailsJobDetails(this, 'JobDetails', this.__resources, this.input);
  }

}

export class CodePipelineFetchThirdPartyJobDetailsJobDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodePipelineGetThirdPartyJobDetailsInput) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getThirdPartyJobDetails',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetThirdPartyJobDetails.jobDetails.id'),
        outputPath: 'jobDetails.id',
        parameters: {
          jobId: this.input.jobId,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetThirdPartyJobDetails.jobDetails.id', props);
    return resource.getResponseField('jobDetails.id') as unknown as string;
  }

  public get data(): CodePipelineFetchThirdPartyJobDetailsJobDetailsData {
    return new CodePipelineFetchThirdPartyJobDetailsJobDetailsData(this, 'Data', this.__resources, this.input);
  }

  public get nonce(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getThirdPartyJobDetails',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetThirdPartyJobDetails.jobDetails.nonce'),
        outputPath: 'jobDetails.nonce',
        parameters: {
          jobId: this.input.jobId,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetThirdPartyJobDetails.jobDetails.nonce', props);
    return resource.getResponseField('jobDetails.nonce') as unknown as string;
  }

}

export class CodePipelineFetchThirdPartyJobDetailsJobDetailsData extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodePipelineGetThirdPartyJobDetailsInput) {
    super(scope, id);
  }

  public get actionTypeId(): CodePipelineFetchThirdPartyJobDetailsJobDetailsDataActionTypeId {
    return new CodePipelineFetchThirdPartyJobDetailsJobDetailsDataActionTypeId(this, 'ActionTypeId', this.__resources, this.input);
  }

  public get actionConfiguration(): CodePipelineFetchThirdPartyJobDetailsJobDetailsDataActionConfiguration {
    return new CodePipelineFetchThirdPartyJobDetailsJobDetailsDataActionConfiguration(this, 'ActionConfiguration', this.__resources, this.input);
  }

  public get pipelineContext(): CodePipelineFetchThirdPartyJobDetailsJobDetailsDataPipelineContext {
    return new CodePipelineFetchThirdPartyJobDetailsJobDetailsDataPipelineContext(this, 'PipelineContext', this.__resources, this.input);
  }

  public get inputArtifacts(): shapes.CodePipelineArtifact[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getThirdPartyJobDetails',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetThirdPartyJobDetails.jobDetails.data.inputArtifacts'),
        outputPath: 'jobDetails.data.inputArtifacts',
        parameters: {
          jobId: this.input.jobId,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetThirdPartyJobDetails.jobDetails.data.inputArtifacts', props);
    return resource.getResponseField('jobDetails.data.inputArtifacts') as unknown as shapes.CodePipelineArtifact[];
  }

  public get outputArtifacts(): shapes.CodePipelineArtifact[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getThirdPartyJobDetails',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetThirdPartyJobDetails.jobDetails.data.outputArtifacts'),
        outputPath: 'jobDetails.data.outputArtifacts',
        parameters: {
          jobId: this.input.jobId,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetThirdPartyJobDetails.jobDetails.data.outputArtifacts', props);
    return resource.getResponseField('jobDetails.data.outputArtifacts') as unknown as shapes.CodePipelineArtifact[];
  }

  public get artifactCredentials(): CodePipelineFetchThirdPartyJobDetailsJobDetailsDataArtifactCredentials {
    return new CodePipelineFetchThirdPartyJobDetailsJobDetailsDataArtifactCredentials(this, 'ArtifactCredentials', this.__resources, this.input);
  }

  public get continuationToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getThirdPartyJobDetails',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetThirdPartyJobDetails.jobDetails.data.continuationToken'),
        outputPath: 'jobDetails.data.continuationToken',
        parameters: {
          jobId: this.input.jobId,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetThirdPartyJobDetails.jobDetails.data.continuationToken', props);
    return resource.getResponseField('jobDetails.data.continuationToken') as unknown as string;
  }

  public get encryptionKey(): CodePipelineFetchThirdPartyJobDetailsJobDetailsDataEncryptionKey {
    return new CodePipelineFetchThirdPartyJobDetailsJobDetailsDataEncryptionKey(this, 'EncryptionKey', this.__resources, this.input);
  }

}

export class CodePipelineFetchThirdPartyJobDetailsJobDetailsDataActionTypeId extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodePipelineGetThirdPartyJobDetailsInput) {
    super(scope, id);
  }

  public get category(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getThirdPartyJobDetails',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetThirdPartyJobDetails.jobDetails.data.actionTypeId.category'),
        outputPath: 'jobDetails.data.actionTypeId.category',
        parameters: {
          jobId: this.input.jobId,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetThirdPartyJobDetails.jobDetails.data.actionTypeId.category', props);
    return resource.getResponseField('jobDetails.data.actionTypeId.category') as unknown as string;
  }

  public get owner(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getThirdPartyJobDetails',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetThirdPartyJobDetails.jobDetails.data.actionTypeId.owner'),
        outputPath: 'jobDetails.data.actionTypeId.owner',
        parameters: {
          jobId: this.input.jobId,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetThirdPartyJobDetails.jobDetails.data.actionTypeId.owner', props);
    return resource.getResponseField('jobDetails.data.actionTypeId.owner') as unknown as string;
  }

  public get provider(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getThirdPartyJobDetails',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetThirdPartyJobDetails.jobDetails.data.actionTypeId.provider'),
        outputPath: 'jobDetails.data.actionTypeId.provider',
        parameters: {
          jobId: this.input.jobId,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetThirdPartyJobDetails.jobDetails.data.actionTypeId.provider', props);
    return resource.getResponseField('jobDetails.data.actionTypeId.provider') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getThirdPartyJobDetails',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetThirdPartyJobDetails.jobDetails.data.actionTypeId.version'),
        outputPath: 'jobDetails.data.actionTypeId.version',
        parameters: {
          jobId: this.input.jobId,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetThirdPartyJobDetails.jobDetails.data.actionTypeId.version', props);
    return resource.getResponseField('jobDetails.data.actionTypeId.version') as unknown as string;
  }

}

export class CodePipelineFetchThirdPartyJobDetailsJobDetailsDataActionConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodePipelineGetThirdPartyJobDetailsInput) {
    super(scope, id);
  }

  public get configuration(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getThirdPartyJobDetails',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetThirdPartyJobDetails.jobDetails.data.actionConfiguration.configuration'),
        outputPath: 'jobDetails.data.actionConfiguration.configuration',
        parameters: {
          jobId: this.input.jobId,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetThirdPartyJobDetails.jobDetails.data.actionConfiguration.configuration', props);
    return resource.getResponseField('jobDetails.data.actionConfiguration.configuration') as unknown as Record<string, string>;
  }

}

export class CodePipelineFetchThirdPartyJobDetailsJobDetailsDataPipelineContext extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodePipelineGetThirdPartyJobDetailsInput) {
    super(scope, id);
  }

  public get pipelineName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getThirdPartyJobDetails',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetThirdPartyJobDetails.jobDetails.data.pipelineContext.pipelineName'),
        outputPath: 'jobDetails.data.pipelineContext.pipelineName',
        parameters: {
          jobId: this.input.jobId,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetThirdPartyJobDetails.jobDetails.data.pipelineContext.pipelineName', props);
    return resource.getResponseField('jobDetails.data.pipelineContext.pipelineName') as unknown as string;
  }

  public get stage(): CodePipelineFetchThirdPartyJobDetailsJobDetailsDataPipelineContextStage {
    return new CodePipelineFetchThirdPartyJobDetailsJobDetailsDataPipelineContextStage(this, 'Stage', this.__resources, this.input);
  }

  public get action(): CodePipelineFetchThirdPartyJobDetailsJobDetailsDataPipelineContextAction {
    return new CodePipelineFetchThirdPartyJobDetailsJobDetailsDataPipelineContextAction(this, 'Action', this.__resources, this.input);
  }

  public get pipelineArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getThirdPartyJobDetails',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetThirdPartyJobDetails.jobDetails.data.pipelineContext.pipelineArn'),
        outputPath: 'jobDetails.data.pipelineContext.pipelineArn',
        parameters: {
          jobId: this.input.jobId,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetThirdPartyJobDetails.jobDetails.data.pipelineContext.pipelineArn', props);
    return resource.getResponseField('jobDetails.data.pipelineContext.pipelineArn') as unknown as string;
  }

  public get pipelineExecutionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getThirdPartyJobDetails',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetThirdPartyJobDetails.jobDetails.data.pipelineContext.pipelineExecutionId'),
        outputPath: 'jobDetails.data.pipelineContext.pipelineExecutionId',
        parameters: {
          jobId: this.input.jobId,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetThirdPartyJobDetails.jobDetails.data.pipelineContext.pipelineExecutionId', props);
    return resource.getResponseField('jobDetails.data.pipelineContext.pipelineExecutionId') as unknown as string;
  }

}

export class CodePipelineFetchThirdPartyJobDetailsJobDetailsDataPipelineContextStage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodePipelineGetThirdPartyJobDetailsInput) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getThirdPartyJobDetails',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetThirdPartyJobDetails.jobDetails.data.pipelineContext.stage.name'),
        outputPath: 'jobDetails.data.pipelineContext.stage.name',
        parameters: {
          jobId: this.input.jobId,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetThirdPartyJobDetails.jobDetails.data.pipelineContext.stage.name', props);
    return resource.getResponseField('jobDetails.data.pipelineContext.stage.name') as unknown as string;
  }

}

export class CodePipelineFetchThirdPartyJobDetailsJobDetailsDataPipelineContextAction extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodePipelineGetThirdPartyJobDetailsInput) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getThirdPartyJobDetails',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetThirdPartyJobDetails.jobDetails.data.pipelineContext.action.name'),
        outputPath: 'jobDetails.data.pipelineContext.action.name',
        parameters: {
          jobId: this.input.jobId,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetThirdPartyJobDetails.jobDetails.data.pipelineContext.action.name', props);
    return resource.getResponseField('jobDetails.data.pipelineContext.action.name') as unknown as string;
  }

  public get actionExecutionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getThirdPartyJobDetails',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetThirdPartyJobDetails.jobDetails.data.pipelineContext.action.actionExecutionId'),
        outputPath: 'jobDetails.data.pipelineContext.action.actionExecutionId',
        parameters: {
          jobId: this.input.jobId,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetThirdPartyJobDetails.jobDetails.data.pipelineContext.action.actionExecutionId', props);
    return resource.getResponseField('jobDetails.data.pipelineContext.action.actionExecutionId') as unknown as string;
  }

}

export class CodePipelineFetchThirdPartyJobDetailsJobDetailsDataArtifactCredentials extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodePipelineGetThirdPartyJobDetailsInput) {
    super(scope, id);
  }

  public get accessKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getThirdPartyJobDetails',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetThirdPartyJobDetails.jobDetails.data.artifactCredentials.accessKeyId'),
        outputPath: 'jobDetails.data.artifactCredentials.accessKeyId',
        parameters: {
          jobId: this.input.jobId,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetThirdPartyJobDetails.jobDetails.data.artifactCredentials.accessKeyId', props);
    return resource.getResponseField('jobDetails.data.artifactCredentials.accessKeyId') as unknown as string;
  }

  public get secretAccessKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getThirdPartyJobDetails',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetThirdPartyJobDetails.jobDetails.data.artifactCredentials.secretAccessKey'),
        outputPath: 'jobDetails.data.artifactCredentials.secretAccessKey',
        parameters: {
          jobId: this.input.jobId,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetThirdPartyJobDetails.jobDetails.data.artifactCredentials.secretAccessKey', props);
    return resource.getResponseField('jobDetails.data.artifactCredentials.secretAccessKey') as unknown as string;
  }

  public get sessionToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getThirdPartyJobDetails',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetThirdPartyJobDetails.jobDetails.data.artifactCredentials.sessionToken'),
        outputPath: 'jobDetails.data.artifactCredentials.sessionToken',
        parameters: {
          jobId: this.input.jobId,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetThirdPartyJobDetails.jobDetails.data.artifactCredentials.sessionToken', props);
    return resource.getResponseField('jobDetails.data.artifactCredentials.sessionToken') as unknown as string;
  }

}

export class CodePipelineFetchThirdPartyJobDetailsJobDetailsDataEncryptionKey extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodePipelineGetThirdPartyJobDetailsInput) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getThirdPartyJobDetails',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetThirdPartyJobDetails.jobDetails.data.encryptionKey.id'),
        outputPath: 'jobDetails.data.encryptionKey.id',
        parameters: {
          jobId: this.input.jobId,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetThirdPartyJobDetails.jobDetails.data.encryptionKey.id', props);
    return resource.getResponseField('jobDetails.data.encryptionKey.id') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getThirdPartyJobDetails',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetThirdPartyJobDetails.jobDetails.data.encryptionKey.type'),
        outputPath: 'jobDetails.data.encryptionKey.type',
        parameters: {
          jobId: this.input.jobId,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetThirdPartyJobDetails.jobDetails.data.encryptionKey.type', props);
    return resource.getResponseField('jobDetails.data.encryptionKey.type') as unknown as string;
  }

}

export class CodePipelineListActionExecutions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodePipelineListActionExecutionsInput) {
    super(scope, id);
  }

  public get actionExecutionDetails(): shapes.CodePipelineActionExecutionDetail[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listActionExecutions',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.ListActionExecutions.actionExecutionDetails'),
        outputPath: 'actionExecutionDetails',
        parameters: {
          pipelineName: this.input.pipelineName,
          filter: {
            pipelineExecutionId: this.input.filter?.pipelineExecutionId,
          },
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListActionExecutions.actionExecutionDetails', props);
    return resource.getResponseField('actionExecutionDetails') as unknown as shapes.CodePipelineActionExecutionDetail[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listActionExecutions',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.ListActionExecutions.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          pipelineName: this.input.pipelineName,
          filter: {
            pipelineExecutionId: this.input.filter?.pipelineExecutionId,
          },
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListActionExecutions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodePipelineListActionTypes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodePipelineListActionTypesInput) {
    super(scope, id);
  }

  public get actionTypes(): shapes.CodePipelineActionType[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listActionTypes',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.ListActionTypes.actionTypes'),
        outputPath: 'actionTypes',
        parameters: {
          actionOwnerFilter: this.input.actionOwnerFilter,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListActionTypes.actionTypes', props);
    return resource.getResponseField('actionTypes') as unknown as shapes.CodePipelineActionType[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listActionTypes',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.ListActionTypes.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          actionOwnerFilter: this.input.actionOwnerFilter,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListActionTypes.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodePipelineListPipelineExecutions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodePipelineListPipelineExecutionsInput) {
    super(scope, id);
  }

  public get pipelineExecutionSummaries(): shapes.CodePipelinePipelineExecutionSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPipelineExecutions',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.ListPipelineExecutions.pipelineExecutionSummaries'),
        outputPath: 'pipelineExecutionSummaries',
        parameters: {
          pipelineName: this.input.pipelineName,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPipelineExecutions.pipelineExecutionSummaries', props);
    return resource.getResponseField('pipelineExecutionSummaries') as unknown as shapes.CodePipelinePipelineExecutionSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPipelineExecutions',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.ListPipelineExecutions.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          pipelineName: this.input.pipelineName,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPipelineExecutions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodePipelineListPipelines extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodePipelineListPipelinesInput) {
    super(scope, id);
  }

  public get pipelines(): shapes.CodePipelinePipelineSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPipelines',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.ListPipelines.pipelines'),
        outputPath: 'pipelines',
        parameters: {
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPipelines.pipelines', props);
    return resource.getResponseField('pipelines') as unknown as shapes.CodePipelinePipelineSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPipelines',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.ListPipelines.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPipelines.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodePipelineListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodePipelineListTagsForResourceInput) {
    super(scope, id);
  }

  public get tags(): shapes.CodePipelineTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.ListTagsForResource.tags'),
        outputPath: 'tags',
        parameters: {
          resourceArn: this.input.resourceArn,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.tags', props);
    return resource.getResponseField('tags') as unknown as shapes.CodePipelineTag[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.ListTagsForResource.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          resourceArn: this.input.resourceArn,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodePipelineListWebhooks extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodePipelineListWebhooksInput) {
    super(scope, id);
  }

  public get webhooks(): shapes.CodePipelineListWebhookItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listWebhooks',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.ListWebhooks.webhooks'),
        outputPath: 'webhooks',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListWebhooks.webhooks', props);
    return resource.getResponseField('webhooks') as unknown as shapes.CodePipelineListWebhookItem[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listWebhooks',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.ListWebhooks.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListWebhooks.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CodePipelinePollForJobs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodePipelinePollForJobsInput) {
    super(scope, id);
  }

  public get jobs(): shapes.CodePipelineJob[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'pollForJobs',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.PollForJobs.jobs'),
        outputPath: 'jobs',
        parameters: {
          actionTypeId: {
            category: this.input.actionTypeId.category,
            owner: this.input.actionTypeId.owner,
            provider: this.input.actionTypeId.provider,
            version: this.input.actionTypeId.version,
          },
          maxBatchSize: this.input.maxBatchSize,
          queryParam: this.input.queryParam,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PollForJobs.jobs', props);
    return resource.getResponseField('jobs') as unknown as shapes.CodePipelineJob[];
  }

}

export class CodePipelinePollForThirdPartyJobs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodePipelinePollForThirdPartyJobsInput) {
    super(scope, id);
  }

  public get jobs(): shapes.CodePipelineThirdPartyJob[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'pollForThirdPartyJobs',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.PollForThirdPartyJobs.jobs'),
        outputPath: 'jobs',
        parameters: {
          actionTypeId: {
            category: this.input.actionTypeId.category,
            owner: this.input.actionTypeId.owner,
            provider: this.input.actionTypeId.provider,
            version: this.input.actionTypeId.version,
          },
          maxBatchSize: this.input.maxBatchSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PollForThirdPartyJobs.jobs', props);
    return resource.getResponseField('jobs') as unknown as shapes.CodePipelineThirdPartyJob[];
  }

}

export class CodePipelinePutActionRevision extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodePipelinePutActionRevisionInput) {
    super(scope, id);
  }

  public get newRevision(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putActionRevision',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.PutActionRevision.newRevision'),
        outputPath: 'newRevision',
        parameters: {
          pipelineName: this.input.pipelineName,
          stageName: this.input.stageName,
          actionName: this.input.actionName,
          actionRevision: {
            revisionId: this.input.actionRevision.revisionId,
            revisionChangeId: this.input.actionRevision.revisionChangeId,
            created: this.input.actionRevision.created,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutActionRevision.newRevision', props);
    return resource.getResponseField('newRevision') as unknown as boolean;
  }

  public get pipelineExecutionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putActionRevision',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.PutActionRevision.pipelineExecutionId'),
        outputPath: 'pipelineExecutionId',
        parameters: {
          pipelineName: this.input.pipelineName,
          stageName: this.input.stageName,
          actionName: this.input.actionName,
          actionRevision: {
            revisionId: this.input.actionRevision.revisionId,
            revisionChangeId: this.input.actionRevision.revisionChangeId,
            created: this.input.actionRevision.created,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutActionRevision.pipelineExecutionId', props);
    return resource.getResponseField('pipelineExecutionId') as unknown as string;
  }

}

export class CodePipelinePutApprovalResult extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodePipelinePutApprovalResultInput) {
    super(scope, id);
  }

  public get approvedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putApprovalResult',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.PutApprovalResult.approvedAt'),
        outputPath: 'approvedAt',
        parameters: {
          pipelineName: this.input.pipelineName,
          stageName: this.input.stageName,
          actionName: this.input.actionName,
          result: {
            summary: this.input.result.summary,
            status: this.input.result.status,
          },
          token: this.input.token,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutApprovalResult.approvedAt', props);
    return resource.getResponseField('approvedAt') as unknown as string;
  }

}

export class CodePipelinePutWebhook extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodePipelinePutWebhookInput) {
    super(scope, id);
  }

  public get webhook(): CodePipelinePutWebhookWebhook {
    return new CodePipelinePutWebhookWebhook(this, 'Webhook', this.__resources, this.input);
  }

}

export class CodePipelinePutWebhookWebhook extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodePipelinePutWebhookInput) {
    super(scope, id);
  }

  public get definition(): CodePipelinePutWebhookWebhookDefinition {
    return new CodePipelinePutWebhookWebhookDefinition(this, 'Definition', this.__resources, this.input);
  }

  public get url(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putWebhook',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.PutWebhook.webhook.url'),
        outputPath: 'webhook.url',
        parameters: {
          webhook: {
            name: this.input.webhook.name,
            targetPipeline: this.input.webhook.targetPipeline,
            targetAction: this.input.webhook.targetAction,
            filters: this.input.webhook.filters,
            authentication: this.input.webhook.authentication,
            authenticationConfiguration: {
              AllowedIPRange: this.input.webhook.authenticationConfiguration.allowedIpRange,
              SecretToken: this.input.webhook.authenticationConfiguration.secretToken,
            },
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutWebhook.webhook.url', props);
    return resource.getResponseField('webhook.url') as unknown as string;
  }

  public get errorMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putWebhook',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.PutWebhook.webhook.errorMessage'),
        outputPath: 'webhook.errorMessage',
        parameters: {
          webhook: {
            name: this.input.webhook.name,
            targetPipeline: this.input.webhook.targetPipeline,
            targetAction: this.input.webhook.targetAction,
            filters: this.input.webhook.filters,
            authentication: this.input.webhook.authentication,
            authenticationConfiguration: {
              AllowedIPRange: this.input.webhook.authenticationConfiguration.allowedIpRange,
              SecretToken: this.input.webhook.authenticationConfiguration.secretToken,
            },
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutWebhook.webhook.errorMessage', props);
    return resource.getResponseField('webhook.errorMessage') as unknown as string;
  }

  public get errorCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putWebhook',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.PutWebhook.webhook.errorCode'),
        outputPath: 'webhook.errorCode',
        parameters: {
          webhook: {
            name: this.input.webhook.name,
            targetPipeline: this.input.webhook.targetPipeline,
            targetAction: this.input.webhook.targetAction,
            filters: this.input.webhook.filters,
            authentication: this.input.webhook.authentication,
            authenticationConfiguration: {
              AllowedIPRange: this.input.webhook.authenticationConfiguration.allowedIpRange,
              SecretToken: this.input.webhook.authenticationConfiguration.secretToken,
            },
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutWebhook.webhook.errorCode', props);
    return resource.getResponseField('webhook.errorCode') as unknown as string;
  }

  public get lastTriggered(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putWebhook',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.PutWebhook.webhook.lastTriggered'),
        outputPath: 'webhook.lastTriggered',
        parameters: {
          webhook: {
            name: this.input.webhook.name,
            targetPipeline: this.input.webhook.targetPipeline,
            targetAction: this.input.webhook.targetAction,
            filters: this.input.webhook.filters,
            authentication: this.input.webhook.authentication,
            authenticationConfiguration: {
              AllowedIPRange: this.input.webhook.authenticationConfiguration.allowedIpRange,
              SecretToken: this.input.webhook.authenticationConfiguration.secretToken,
            },
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutWebhook.webhook.lastTriggered', props);
    return resource.getResponseField('webhook.lastTriggered') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putWebhook',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.PutWebhook.webhook.arn'),
        outputPath: 'webhook.arn',
        parameters: {
          webhook: {
            name: this.input.webhook.name,
            targetPipeline: this.input.webhook.targetPipeline,
            targetAction: this.input.webhook.targetAction,
            filters: this.input.webhook.filters,
            authentication: this.input.webhook.authentication,
            authenticationConfiguration: {
              AllowedIPRange: this.input.webhook.authenticationConfiguration.allowedIpRange,
              SecretToken: this.input.webhook.authenticationConfiguration.secretToken,
            },
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutWebhook.webhook.arn', props);
    return resource.getResponseField('webhook.arn') as unknown as string;
  }

  public get tags(): shapes.CodePipelineTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putWebhook',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.PutWebhook.webhook.tags'),
        outputPath: 'webhook.tags',
        parameters: {
          webhook: {
            name: this.input.webhook.name,
            targetPipeline: this.input.webhook.targetPipeline,
            targetAction: this.input.webhook.targetAction,
            filters: this.input.webhook.filters,
            authentication: this.input.webhook.authentication,
            authenticationConfiguration: {
              AllowedIPRange: this.input.webhook.authenticationConfiguration.allowedIpRange,
              SecretToken: this.input.webhook.authenticationConfiguration.secretToken,
            },
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutWebhook.webhook.tags', props);
    return resource.getResponseField('webhook.tags') as unknown as shapes.CodePipelineTag[];
  }

}

export class CodePipelinePutWebhookWebhookDefinition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodePipelinePutWebhookInput) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putWebhook',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.PutWebhook.webhook.definition.name'),
        outputPath: 'webhook.definition.name',
        parameters: {
          webhook: {
            name: this.input.webhook.name,
            targetPipeline: this.input.webhook.targetPipeline,
            targetAction: this.input.webhook.targetAction,
            filters: this.input.webhook.filters,
            authentication: this.input.webhook.authentication,
            authenticationConfiguration: {
              AllowedIPRange: this.input.webhook.authenticationConfiguration.allowedIpRange,
              SecretToken: this.input.webhook.authenticationConfiguration.secretToken,
            },
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutWebhook.webhook.definition.name', props);
    return resource.getResponseField('webhook.definition.name') as unknown as string;
  }

  public get targetPipeline(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putWebhook',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.PutWebhook.webhook.definition.targetPipeline'),
        outputPath: 'webhook.definition.targetPipeline',
        parameters: {
          webhook: {
            name: this.input.webhook.name,
            targetPipeline: this.input.webhook.targetPipeline,
            targetAction: this.input.webhook.targetAction,
            filters: this.input.webhook.filters,
            authentication: this.input.webhook.authentication,
            authenticationConfiguration: {
              AllowedIPRange: this.input.webhook.authenticationConfiguration.allowedIpRange,
              SecretToken: this.input.webhook.authenticationConfiguration.secretToken,
            },
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutWebhook.webhook.definition.targetPipeline', props);
    return resource.getResponseField('webhook.definition.targetPipeline') as unknown as string;
  }

  public get targetAction(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putWebhook',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.PutWebhook.webhook.definition.targetAction'),
        outputPath: 'webhook.definition.targetAction',
        parameters: {
          webhook: {
            name: this.input.webhook.name,
            targetPipeline: this.input.webhook.targetPipeline,
            targetAction: this.input.webhook.targetAction,
            filters: this.input.webhook.filters,
            authentication: this.input.webhook.authentication,
            authenticationConfiguration: {
              AllowedIPRange: this.input.webhook.authenticationConfiguration.allowedIpRange,
              SecretToken: this.input.webhook.authenticationConfiguration.secretToken,
            },
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutWebhook.webhook.definition.targetAction', props);
    return resource.getResponseField('webhook.definition.targetAction') as unknown as string;
  }

  public get filters(): shapes.CodePipelineWebhookFilterRule[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putWebhook',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.PutWebhook.webhook.definition.filters'),
        outputPath: 'webhook.definition.filters',
        parameters: {
          webhook: {
            name: this.input.webhook.name,
            targetPipeline: this.input.webhook.targetPipeline,
            targetAction: this.input.webhook.targetAction,
            filters: this.input.webhook.filters,
            authentication: this.input.webhook.authentication,
            authenticationConfiguration: {
              AllowedIPRange: this.input.webhook.authenticationConfiguration.allowedIpRange,
              SecretToken: this.input.webhook.authenticationConfiguration.secretToken,
            },
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutWebhook.webhook.definition.filters', props);
    return resource.getResponseField('webhook.definition.filters') as unknown as shapes.CodePipelineWebhookFilterRule[];
  }

  public get authentication(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putWebhook',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.PutWebhook.webhook.definition.authentication'),
        outputPath: 'webhook.definition.authentication',
        parameters: {
          webhook: {
            name: this.input.webhook.name,
            targetPipeline: this.input.webhook.targetPipeline,
            targetAction: this.input.webhook.targetAction,
            filters: this.input.webhook.filters,
            authentication: this.input.webhook.authentication,
            authenticationConfiguration: {
              AllowedIPRange: this.input.webhook.authenticationConfiguration.allowedIpRange,
              SecretToken: this.input.webhook.authenticationConfiguration.secretToken,
            },
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutWebhook.webhook.definition.authentication', props);
    return resource.getResponseField('webhook.definition.authentication') as unknown as string;
  }

  public get authenticationConfiguration(): CodePipelinePutWebhookWebhookDefinitionAuthenticationConfiguration {
    return new CodePipelinePutWebhookWebhookDefinitionAuthenticationConfiguration(this, 'AuthenticationConfiguration', this.__resources, this.input);
  }

}

export class CodePipelinePutWebhookWebhookDefinitionAuthenticationConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodePipelinePutWebhookInput) {
    super(scope, id);
  }

  public get allowedIpRange(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putWebhook',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.PutWebhook.webhook.definition.authenticationConfiguration.AllowedIPRange'),
        outputPath: 'webhook.definition.authenticationConfiguration.AllowedIPRange',
        parameters: {
          webhook: {
            name: this.input.webhook.name,
            targetPipeline: this.input.webhook.targetPipeline,
            targetAction: this.input.webhook.targetAction,
            filters: this.input.webhook.filters,
            authentication: this.input.webhook.authentication,
            authenticationConfiguration: {
              AllowedIPRange: this.input.webhook.authenticationConfiguration.allowedIpRange,
              SecretToken: this.input.webhook.authenticationConfiguration.secretToken,
            },
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutWebhook.webhook.definition.authenticationConfiguration.AllowedIPRange', props);
    return resource.getResponseField('webhook.definition.authenticationConfiguration.AllowedIPRange') as unknown as string;
  }

  public get secretToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putWebhook',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.PutWebhook.webhook.definition.authenticationConfiguration.SecretToken'),
        outputPath: 'webhook.definition.authenticationConfiguration.SecretToken',
        parameters: {
          webhook: {
            name: this.input.webhook.name,
            targetPipeline: this.input.webhook.targetPipeline,
            targetAction: this.input.webhook.targetAction,
            filters: this.input.webhook.filters,
            authentication: this.input.webhook.authentication,
            authenticationConfiguration: {
              AllowedIPRange: this.input.webhook.authenticationConfiguration.allowedIpRange,
              SecretToken: this.input.webhook.authenticationConfiguration.secretToken,
            },
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutWebhook.webhook.definition.authenticationConfiguration.SecretToken', props);
    return resource.getResponseField('webhook.definition.authenticationConfiguration.SecretToken') as unknown as string;
  }

}

export class CodePipelineRetryStageExecution extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodePipelineRetryStageExecutionInput) {
    super(scope, id);
  }

  public get pipelineExecutionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'retryStageExecution',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.RetryStageExecution.pipelineExecutionId'),
        outputPath: 'pipelineExecutionId',
        parameters: {
          pipelineName: this.input.pipelineName,
          stageName: this.input.stageName,
          pipelineExecutionId: this.input.pipelineExecutionId,
          retryMode: this.input.retryMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RetryStageExecution.pipelineExecutionId', props);
    return resource.getResponseField('pipelineExecutionId') as unknown as string;
  }

}

export class CodePipelineStartPipelineExecution extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodePipelineStartPipelineExecutionInput) {
    super(scope, id);
  }

  public get pipelineExecutionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startPipelineExecution',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.StartPipelineExecution.pipelineExecutionId'),
        outputPath: 'pipelineExecutionId',
        parameters: {
          name: this.input.name,
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartPipelineExecution.pipelineExecutionId', props);
    return resource.getResponseField('pipelineExecutionId') as unknown as string;
  }

}

export class CodePipelineStopPipelineExecution extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodePipelineStopPipelineExecutionInput) {
    super(scope, id);
  }

  public get pipelineExecutionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopPipelineExecution',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.StopPipelineExecution.pipelineExecutionId'),
        outputPath: 'pipelineExecutionId',
        parameters: {
          pipelineName: this.input.pipelineName,
          pipelineExecutionId: this.input.pipelineExecutionId,
          abandon: this.input.abandon,
          reason: this.input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopPipelineExecution.pipelineExecutionId', props);
    return resource.getResponseField('pipelineExecutionId') as unknown as string;
  }

}

export class CodePipelineUpdatePipeline extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodePipelineUpdatePipelineInput) {
    super(scope, id);
  }

  public get pipeline(): CodePipelineUpdatePipelinePipeline {
    return new CodePipelineUpdatePipelinePipeline(this, 'Pipeline', this.__resources, this.input);
  }

}

export class CodePipelineUpdatePipelinePipeline extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodePipelineUpdatePipelineInput) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePipeline',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.UpdatePipeline.pipeline.name'),
        outputPath: 'pipeline.name',
        parameters: {
          pipeline: {
            name: this.input.pipeline.name,
            roleArn: this.input.pipeline.roleArn,
            artifactStore: {
              type: this.input.pipeline.artifactStore?.type,
              location: this.input.pipeline.artifactStore?.location,
              encryptionKey: {
                id: this.input.pipeline.artifactStore?.encryptionKey?.id,
                type: this.input.pipeline.artifactStore?.encryptionKey?.type,
              },
            },
            artifactStores: this.input.pipeline.artifactStores,
            stages: this.input.pipeline.stages,
            version: this.input.pipeline.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePipeline.pipeline.name', props);
    return resource.getResponseField('pipeline.name') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePipeline',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.UpdatePipeline.pipeline.roleArn'),
        outputPath: 'pipeline.roleArn',
        parameters: {
          pipeline: {
            name: this.input.pipeline.name,
            roleArn: this.input.pipeline.roleArn,
            artifactStore: {
              type: this.input.pipeline.artifactStore?.type,
              location: this.input.pipeline.artifactStore?.location,
              encryptionKey: {
                id: this.input.pipeline.artifactStore?.encryptionKey?.id,
                type: this.input.pipeline.artifactStore?.encryptionKey?.type,
              },
            },
            artifactStores: this.input.pipeline.artifactStores,
            stages: this.input.pipeline.stages,
            version: this.input.pipeline.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePipeline.pipeline.roleArn', props);
    return resource.getResponseField('pipeline.roleArn') as unknown as string;
  }

  public get artifactStore(): CodePipelineUpdatePipelinePipelineArtifactStore {
    return new CodePipelineUpdatePipelinePipelineArtifactStore(this, 'ArtifactStore', this.__resources, this.input);
  }

  public get artifactStores(): Record<string, shapes.CodePipelineArtifactStore> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePipeline',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.UpdatePipeline.pipeline.artifactStores'),
        outputPath: 'pipeline.artifactStores',
        parameters: {
          pipeline: {
            name: this.input.pipeline.name,
            roleArn: this.input.pipeline.roleArn,
            artifactStore: {
              type: this.input.pipeline.artifactStore?.type,
              location: this.input.pipeline.artifactStore?.location,
              encryptionKey: {
                id: this.input.pipeline.artifactStore?.encryptionKey?.id,
                type: this.input.pipeline.artifactStore?.encryptionKey?.type,
              },
            },
            artifactStores: this.input.pipeline.artifactStores,
            stages: this.input.pipeline.stages,
            version: this.input.pipeline.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePipeline.pipeline.artifactStores', props);
    return resource.getResponseField('pipeline.artifactStores') as unknown as Record<string, shapes.CodePipelineArtifactStore>;
  }

  public get stages(): shapes.CodePipelineStageDeclaration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePipeline',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.UpdatePipeline.pipeline.stages'),
        outputPath: 'pipeline.stages',
        parameters: {
          pipeline: {
            name: this.input.pipeline.name,
            roleArn: this.input.pipeline.roleArn,
            artifactStore: {
              type: this.input.pipeline.artifactStore?.type,
              location: this.input.pipeline.artifactStore?.location,
              encryptionKey: {
                id: this.input.pipeline.artifactStore?.encryptionKey?.id,
                type: this.input.pipeline.artifactStore?.encryptionKey?.type,
              },
            },
            artifactStores: this.input.pipeline.artifactStores,
            stages: this.input.pipeline.stages,
            version: this.input.pipeline.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePipeline.pipeline.stages', props);
    return resource.getResponseField('pipeline.stages') as unknown as shapes.CodePipelineStageDeclaration[];
  }

  public get version(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePipeline',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.UpdatePipeline.pipeline.version'),
        outputPath: 'pipeline.version',
        parameters: {
          pipeline: {
            name: this.input.pipeline.name,
            roleArn: this.input.pipeline.roleArn,
            artifactStore: {
              type: this.input.pipeline.artifactStore?.type,
              location: this.input.pipeline.artifactStore?.location,
              encryptionKey: {
                id: this.input.pipeline.artifactStore?.encryptionKey?.id,
                type: this.input.pipeline.artifactStore?.encryptionKey?.type,
              },
            },
            artifactStores: this.input.pipeline.artifactStores,
            stages: this.input.pipeline.stages,
            version: this.input.pipeline.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePipeline.pipeline.version', props);
    return resource.getResponseField('pipeline.version') as unknown as number;
  }

}

export class CodePipelineUpdatePipelinePipelineArtifactStore extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodePipelineUpdatePipelineInput) {
    super(scope, id);
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePipeline',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.UpdatePipeline.pipeline.artifactStore.type'),
        outputPath: 'pipeline.artifactStore.type',
        parameters: {
          pipeline: {
            name: this.input.pipeline.name,
            roleArn: this.input.pipeline.roleArn,
            artifactStore: {
              type: this.input.pipeline.artifactStore?.type,
              location: this.input.pipeline.artifactStore?.location,
              encryptionKey: {
                id: this.input.pipeline.artifactStore?.encryptionKey?.id,
                type: this.input.pipeline.artifactStore?.encryptionKey?.type,
              },
            },
            artifactStores: this.input.pipeline.artifactStores,
            stages: this.input.pipeline.stages,
            version: this.input.pipeline.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePipeline.pipeline.artifactStore.type', props);
    return resource.getResponseField('pipeline.artifactStore.type') as unknown as string;
  }

  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePipeline',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.UpdatePipeline.pipeline.artifactStore.location'),
        outputPath: 'pipeline.artifactStore.location',
        parameters: {
          pipeline: {
            name: this.input.pipeline.name,
            roleArn: this.input.pipeline.roleArn,
            artifactStore: {
              type: this.input.pipeline.artifactStore?.type,
              location: this.input.pipeline.artifactStore?.location,
              encryptionKey: {
                id: this.input.pipeline.artifactStore?.encryptionKey?.id,
                type: this.input.pipeline.artifactStore?.encryptionKey?.type,
              },
            },
            artifactStores: this.input.pipeline.artifactStores,
            stages: this.input.pipeline.stages,
            version: this.input.pipeline.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePipeline.pipeline.artifactStore.location', props);
    return resource.getResponseField('pipeline.artifactStore.location') as unknown as string;
  }

  public get encryptionKey(): CodePipelineUpdatePipelinePipelineArtifactStoreEncryptionKey {
    return new CodePipelineUpdatePipelinePipelineArtifactStoreEncryptionKey(this, 'EncryptionKey', this.__resources, this.input);
  }

}

export class CodePipelineUpdatePipelinePipelineArtifactStoreEncryptionKey extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodePipelineUpdatePipelineInput) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePipeline',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.UpdatePipeline.pipeline.artifactStore.encryptionKey.id'),
        outputPath: 'pipeline.artifactStore.encryptionKey.id',
        parameters: {
          pipeline: {
            name: this.input.pipeline.name,
            roleArn: this.input.pipeline.roleArn,
            artifactStore: {
              type: this.input.pipeline.artifactStore?.type,
              location: this.input.pipeline.artifactStore?.location,
              encryptionKey: {
                id: this.input.pipeline.artifactStore?.encryptionKey?.id,
                type: this.input.pipeline.artifactStore?.encryptionKey?.type,
              },
            },
            artifactStores: this.input.pipeline.artifactStores,
            stages: this.input.pipeline.stages,
            version: this.input.pipeline.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePipeline.pipeline.artifactStore.encryptionKey.id', props);
    return resource.getResponseField('pipeline.artifactStore.encryptionKey.id') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePipeline',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.UpdatePipeline.pipeline.artifactStore.encryptionKey.type'),
        outputPath: 'pipeline.artifactStore.encryptionKey.type',
        parameters: {
          pipeline: {
            name: this.input.pipeline.name,
            roleArn: this.input.pipeline.roleArn,
            artifactStore: {
              type: this.input.pipeline.artifactStore?.type,
              location: this.input.pipeline.artifactStore?.location,
              encryptionKey: {
                id: this.input.pipeline.artifactStore?.encryptionKey?.id,
                type: this.input.pipeline.artifactStore?.encryptionKey?.type,
              },
            },
            artifactStores: this.input.pipeline.artifactStores,
            stages: this.input.pipeline.stages,
            version: this.input.pipeline.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePipeline.pipeline.artifactStore.encryptionKey.type', props);
    return resource.getResponseField('pipeline.artifactStore.encryptionKey.type') as unknown as string;
  }

}

