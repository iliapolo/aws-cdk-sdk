import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class CodePipelineClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public acknowledgeJob(input: shapes.CodePipelineAcknowledgeJobInput): CodePipelineResponsesAcknowledgeJob {
    return new CodePipelineResponsesAcknowledgeJob(this, this.__resources, input);
  }

  public acknowledgeThirdPartyJob(input: shapes.CodePipelineAcknowledgeThirdPartyJobInput): CodePipelineResponsesAcknowledgeThirdPartyJob {
    return new CodePipelineResponsesAcknowledgeThirdPartyJob(this, this.__resources, input);
  }

  public createCustomActionType(input: shapes.CodePipelineCreateCustomActionTypeInput): CodePipelineResponsesCreateCustomActionType {
    return new CodePipelineResponsesCreateCustomActionType(this, this.__resources, input);
  }

  public createPipeline(input: shapes.CodePipelineCreatePipelineInput): CodePipelineResponsesCreatePipeline {
    return new CodePipelineResponsesCreatePipeline(this, this.__resources, input);
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

  public fetchActionType(input: shapes.CodePipelineGetActionTypeInput): CodePipelineResponsesFetchActionType {
    return new CodePipelineResponsesFetchActionType(this, this.__resources, input);
  }

  public fetchJobDetails(input: shapes.CodePipelineGetJobDetailsInput): CodePipelineResponsesFetchJobDetails {
    return new CodePipelineResponsesFetchJobDetails(this, this.__resources, input);
  }

  public fetchPipeline(input: shapes.CodePipelineGetPipelineInput): CodePipelineResponsesFetchPipeline {
    return new CodePipelineResponsesFetchPipeline(this, this.__resources, input);
  }

  public fetchPipelineExecution(input: shapes.CodePipelineGetPipelineExecutionInput): CodePipelineResponsesFetchPipelineExecution {
    return new CodePipelineResponsesFetchPipelineExecution(this, this.__resources, input);
  }

  public fetchPipelineState(input: shapes.CodePipelineGetPipelineStateInput): CodePipelineResponsesFetchPipelineState {
    return new CodePipelineResponsesFetchPipelineState(this, this.__resources, input);
  }

  public fetchThirdPartyJobDetails(input: shapes.CodePipelineGetThirdPartyJobDetailsInput): CodePipelineResponsesFetchThirdPartyJobDetails {
    return new CodePipelineResponsesFetchThirdPartyJobDetails(this, this.__resources, input);
  }

  public listActionExecutions(input: shapes.CodePipelineListActionExecutionsInput): CodePipelineResponsesListActionExecutions {
    return new CodePipelineResponsesListActionExecutions(this, this.__resources, input);
  }

  public listActionTypes(input: shapes.CodePipelineListActionTypesInput): CodePipelineResponsesListActionTypes {
    return new CodePipelineResponsesListActionTypes(this, this.__resources, input);
  }

  public listPipelineExecutions(input: shapes.CodePipelineListPipelineExecutionsInput): CodePipelineResponsesListPipelineExecutions {
    return new CodePipelineResponsesListPipelineExecutions(this, this.__resources, input);
  }

  public listPipelines(input: shapes.CodePipelineListPipelinesInput): CodePipelineResponsesListPipelines {
    return new CodePipelineResponsesListPipelines(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.CodePipelineListTagsForResourceInput): CodePipelineResponsesListTagsForResource {
    return new CodePipelineResponsesListTagsForResource(this, this.__resources, input);
  }

  public listWebhooks(input: shapes.CodePipelineListWebhooksInput): CodePipelineResponsesListWebhooks {
    return new CodePipelineResponsesListWebhooks(this, this.__resources, input);
  }

  public pollForJobs(input: shapes.CodePipelinePollForJobsInput): CodePipelineResponsesPollForJobs {
    return new CodePipelineResponsesPollForJobs(this, this.__resources, input);
  }

  public pollForThirdPartyJobs(input: shapes.CodePipelinePollForThirdPartyJobsInput): CodePipelineResponsesPollForThirdPartyJobs {
    return new CodePipelineResponsesPollForThirdPartyJobs(this, this.__resources, input);
  }

  public putActionRevision(input: shapes.CodePipelinePutActionRevisionInput): CodePipelineResponsesPutActionRevision {
    return new CodePipelineResponsesPutActionRevision(this, this.__resources, input);
  }

  public putApprovalResult(input: shapes.CodePipelinePutApprovalResultInput): CodePipelineResponsesPutApprovalResult {
    return new CodePipelineResponsesPutApprovalResult(this, this.__resources, input);
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

  public putWebhook(input: shapes.CodePipelinePutWebhookInput): CodePipelineResponsesPutWebhook {
    return new CodePipelineResponsesPutWebhook(this, this.__resources, input);
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

  public retryStageExecution(input: shapes.CodePipelineRetryStageExecutionInput): CodePipelineResponsesRetryStageExecution {
    return new CodePipelineResponsesRetryStageExecution(this, this.__resources, input);
  }

  public startPipelineExecution(input: shapes.CodePipelineStartPipelineExecutionInput): CodePipelineResponsesStartPipelineExecution {
    return new CodePipelineResponsesStartPipelineExecution(this, this.__resources, input);
  }

  public stopPipelineExecution(input: shapes.CodePipelineStopPipelineExecutionInput): CodePipelineResponsesStopPipelineExecution {
    return new CodePipelineResponsesStopPipelineExecution(this, this.__resources, input);
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

  public updateActionType(input: shapes.CodePipelineUpdateActionTypeInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateActionType',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.UpdateActionType'),
        parameters: {
          actionType: {
            description: input.actionType.description,
            executor: {
              configuration: {
                lambdaExecutorConfiguration: {
                  lambdaFunctionArn: input.actionType.executor.configuration.lambdaExecutorConfiguration?.lambdaFunctionArn,
                },
                jobWorkerExecutorConfiguration: {
                  pollingAccounts: input.actionType.executor.configuration.jobWorkerExecutorConfiguration?.pollingAccounts,
                  pollingServicePrincipals: input.actionType.executor.configuration.jobWorkerExecutorConfiguration?.pollingServicePrincipals,
                },
              },
              type: input.actionType.executor.type,
              policyStatementsTemplate: input.actionType.executor.policyStatementsTemplate,
              jobTimeout: input.actionType.executor.jobTimeout,
            },
            id: {
              category: input.actionType.id.category,
              owner: input.actionType.id.owner,
              provider: input.actionType.id.provider,
              version: input.actionType.id.version,
            },
            inputArtifactDetails: {
              minimumCount: input.actionType.inputArtifactDetails.minimumCount,
              maximumCount: input.actionType.inputArtifactDetails.maximumCount,
            },
            outputArtifactDetails: {
              minimumCount: input.actionType.outputArtifactDetails.minimumCount,
              maximumCount: input.actionType.outputArtifactDetails.maximumCount,
            },
            permissions: {
              allowedAccounts: input.actionType.permissions?.allowedAccounts,
            },
            properties: input.actionType.properties,
            urls: {
              configurationUrl: input.actionType.urls?.configurationUrl,
              entityUrlTemplate: input.actionType.urls?.entityUrlTemplate,
              executionUrlTemplate: input.actionType.urls?.executionUrlTemplate,
              revisionUrlTemplate: input.actionType.urls?.revisionUrlTemplate,
            },
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateActionType', props);
  }

  public updatePipeline(input: shapes.CodePipelineUpdatePipelineInput): CodePipelineResponsesUpdatePipeline {
    return new CodePipelineResponsesUpdatePipeline(this, this.__resources, input);
  }

}

export class CodePipelineResponsesAcknowledgeJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelineAcknowledgeJobInput) {
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
          jobId: this.__input.jobId,
          nonce: this.__input.nonce,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AcknowledgeJob.status', props);
    return resource.getResponseField('status') as unknown as string;
  }

}

export class CodePipelineResponsesAcknowledgeThirdPartyJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelineAcknowledgeThirdPartyJobInput) {
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
          jobId: this.__input.jobId,
          nonce: this.__input.nonce,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AcknowledgeThirdPartyJob.status', props);
    return resource.getResponseField('status') as unknown as string;
  }

}

export class CodePipelineResponsesCreateCustomActionType {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelineCreateCustomActionTypeInput) {
  }

  public get actionType(): CodePipelineResponsesCreateCustomActionTypeActionType {
    return new CodePipelineResponsesCreateCustomActionTypeActionType(this.__scope, this.__resources, this.__input);
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
          category: this.__input.category,
          provider: this.__input.provider,
          version: this.__input.version,
          settings: {
            thirdPartyConfigurationUrl: this.__input.settings?.thirdPartyConfigurationUrl,
            entityUrlTemplate: this.__input.settings?.entityUrlTemplate,
            executionUrlTemplate: this.__input.settings?.executionUrlTemplate,
            revisionUrlTemplate: this.__input.settings?.revisionUrlTemplate,
          },
          configurationProperties: this.__input.configurationProperties,
          inputArtifactDetails: {
            minimumCount: this.__input.inputArtifactDetails.minimumCount,
            maximumCount: this.__input.inputArtifactDetails.maximumCount,
          },
          outputArtifactDetails: {
            minimumCount: this.__input.outputArtifactDetails.minimumCount,
            maximumCount: this.__input.outputArtifactDetails.maximumCount,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCustomActionType.tags', props);
    return resource.getResponseField('tags') as unknown as shapes.CodePipelineTag[];
  }

}

export class CodePipelineResponsesCreateCustomActionTypeActionType {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelineCreateCustomActionTypeInput) {
  }

  public get id(): CodePipelineResponsesCreateCustomActionTypeActionTypeId {
    return new CodePipelineResponsesCreateCustomActionTypeActionTypeId(this.__scope, this.__resources, this.__input);
  }

  public get settings(): CodePipelineResponsesCreateCustomActionTypeActionTypeSettings {
    return new CodePipelineResponsesCreateCustomActionTypeActionTypeSettings(this.__scope, this.__resources, this.__input);
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
          category: this.__input.category,
          provider: this.__input.provider,
          version: this.__input.version,
          settings: {
            thirdPartyConfigurationUrl: this.__input.settings?.thirdPartyConfigurationUrl,
            entityUrlTemplate: this.__input.settings?.entityUrlTemplate,
            executionUrlTemplate: this.__input.settings?.executionUrlTemplate,
            revisionUrlTemplate: this.__input.settings?.revisionUrlTemplate,
          },
          configurationProperties: this.__input.configurationProperties,
          inputArtifactDetails: {
            minimumCount: this.__input.inputArtifactDetails.minimumCount,
            maximumCount: this.__input.inputArtifactDetails.maximumCount,
          },
          outputArtifactDetails: {
            minimumCount: this.__input.outputArtifactDetails.minimumCount,
            maximumCount: this.__input.outputArtifactDetails.maximumCount,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCustomActionType.actionType.actionConfigurationProperties', props);
    return resource.getResponseField('actionType.actionConfigurationProperties') as unknown as shapes.CodePipelineActionConfigurationProperty[];
  }

  public get inputArtifactDetails(): CodePipelineResponsesCreateCustomActionTypeActionTypeInputArtifactDetails {
    return new CodePipelineResponsesCreateCustomActionTypeActionTypeInputArtifactDetails(this.__scope, this.__resources, this.__input);
  }

  public get outputArtifactDetails(): CodePipelineResponsesCreateCustomActionTypeActionTypeOutputArtifactDetails {
    return new CodePipelineResponsesCreateCustomActionTypeActionTypeOutputArtifactDetails(this.__scope, this.__resources, this.__input);
  }

}

export class CodePipelineResponsesCreateCustomActionTypeActionTypeId {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelineCreateCustomActionTypeInput) {
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
          category: this.__input.category,
          provider: this.__input.provider,
          version: this.__input.version,
          settings: {
            thirdPartyConfigurationUrl: this.__input.settings?.thirdPartyConfigurationUrl,
            entityUrlTemplate: this.__input.settings?.entityUrlTemplate,
            executionUrlTemplate: this.__input.settings?.executionUrlTemplate,
            revisionUrlTemplate: this.__input.settings?.revisionUrlTemplate,
          },
          configurationProperties: this.__input.configurationProperties,
          inputArtifactDetails: {
            minimumCount: this.__input.inputArtifactDetails.minimumCount,
            maximumCount: this.__input.inputArtifactDetails.maximumCount,
          },
          outputArtifactDetails: {
            minimumCount: this.__input.outputArtifactDetails.minimumCount,
            maximumCount: this.__input.outputArtifactDetails.maximumCount,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCustomActionType.actionType.id.category', props);
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
          category: this.__input.category,
          provider: this.__input.provider,
          version: this.__input.version,
          settings: {
            thirdPartyConfigurationUrl: this.__input.settings?.thirdPartyConfigurationUrl,
            entityUrlTemplate: this.__input.settings?.entityUrlTemplate,
            executionUrlTemplate: this.__input.settings?.executionUrlTemplate,
            revisionUrlTemplate: this.__input.settings?.revisionUrlTemplate,
          },
          configurationProperties: this.__input.configurationProperties,
          inputArtifactDetails: {
            minimumCount: this.__input.inputArtifactDetails.minimumCount,
            maximumCount: this.__input.inputArtifactDetails.maximumCount,
          },
          outputArtifactDetails: {
            minimumCount: this.__input.outputArtifactDetails.minimumCount,
            maximumCount: this.__input.outputArtifactDetails.maximumCount,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCustomActionType.actionType.id.owner', props);
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
          category: this.__input.category,
          provider: this.__input.provider,
          version: this.__input.version,
          settings: {
            thirdPartyConfigurationUrl: this.__input.settings?.thirdPartyConfigurationUrl,
            entityUrlTemplate: this.__input.settings?.entityUrlTemplate,
            executionUrlTemplate: this.__input.settings?.executionUrlTemplate,
            revisionUrlTemplate: this.__input.settings?.revisionUrlTemplate,
          },
          configurationProperties: this.__input.configurationProperties,
          inputArtifactDetails: {
            minimumCount: this.__input.inputArtifactDetails.minimumCount,
            maximumCount: this.__input.inputArtifactDetails.maximumCount,
          },
          outputArtifactDetails: {
            minimumCount: this.__input.outputArtifactDetails.minimumCount,
            maximumCount: this.__input.outputArtifactDetails.maximumCount,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCustomActionType.actionType.id.provider', props);
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
          category: this.__input.category,
          provider: this.__input.provider,
          version: this.__input.version,
          settings: {
            thirdPartyConfigurationUrl: this.__input.settings?.thirdPartyConfigurationUrl,
            entityUrlTemplate: this.__input.settings?.entityUrlTemplate,
            executionUrlTemplate: this.__input.settings?.executionUrlTemplate,
            revisionUrlTemplate: this.__input.settings?.revisionUrlTemplate,
          },
          configurationProperties: this.__input.configurationProperties,
          inputArtifactDetails: {
            minimumCount: this.__input.inputArtifactDetails.minimumCount,
            maximumCount: this.__input.inputArtifactDetails.maximumCount,
          },
          outputArtifactDetails: {
            minimumCount: this.__input.outputArtifactDetails.minimumCount,
            maximumCount: this.__input.outputArtifactDetails.maximumCount,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCustomActionType.actionType.id.version', props);
    return resource.getResponseField('actionType.id.version') as unknown as string;
  }

}

export class CodePipelineResponsesCreateCustomActionTypeActionTypeSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelineCreateCustomActionTypeInput) {
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
          category: this.__input.category,
          provider: this.__input.provider,
          version: this.__input.version,
          settings: {
            thirdPartyConfigurationUrl: this.__input.settings?.thirdPartyConfigurationUrl,
            entityUrlTemplate: this.__input.settings?.entityUrlTemplate,
            executionUrlTemplate: this.__input.settings?.executionUrlTemplate,
            revisionUrlTemplate: this.__input.settings?.revisionUrlTemplate,
          },
          configurationProperties: this.__input.configurationProperties,
          inputArtifactDetails: {
            minimumCount: this.__input.inputArtifactDetails.minimumCount,
            maximumCount: this.__input.inputArtifactDetails.maximumCount,
          },
          outputArtifactDetails: {
            minimumCount: this.__input.outputArtifactDetails.minimumCount,
            maximumCount: this.__input.outputArtifactDetails.maximumCount,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCustomActionType.actionType.settings.thirdPartyConfigurationUrl', props);
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
          category: this.__input.category,
          provider: this.__input.provider,
          version: this.__input.version,
          settings: {
            thirdPartyConfigurationUrl: this.__input.settings?.thirdPartyConfigurationUrl,
            entityUrlTemplate: this.__input.settings?.entityUrlTemplate,
            executionUrlTemplate: this.__input.settings?.executionUrlTemplate,
            revisionUrlTemplate: this.__input.settings?.revisionUrlTemplate,
          },
          configurationProperties: this.__input.configurationProperties,
          inputArtifactDetails: {
            minimumCount: this.__input.inputArtifactDetails.minimumCount,
            maximumCount: this.__input.inputArtifactDetails.maximumCount,
          },
          outputArtifactDetails: {
            minimumCount: this.__input.outputArtifactDetails.minimumCount,
            maximumCount: this.__input.outputArtifactDetails.maximumCount,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCustomActionType.actionType.settings.entityUrlTemplate', props);
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
          category: this.__input.category,
          provider: this.__input.provider,
          version: this.__input.version,
          settings: {
            thirdPartyConfigurationUrl: this.__input.settings?.thirdPartyConfigurationUrl,
            entityUrlTemplate: this.__input.settings?.entityUrlTemplate,
            executionUrlTemplate: this.__input.settings?.executionUrlTemplate,
            revisionUrlTemplate: this.__input.settings?.revisionUrlTemplate,
          },
          configurationProperties: this.__input.configurationProperties,
          inputArtifactDetails: {
            minimumCount: this.__input.inputArtifactDetails.minimumCount,
            maximumCount: this.__input.inputArtifactDetails.maximumCount,
          },
          outputArtifactDetails: {
            minimumCount: this.__input.outputArtifactDetails.minimumCount,
            maximumCount: this.__input.outputArtifactDetails.maximumCount,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCustomActionType.actionType.settings.executionUrlTemplate', props);
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
          category: this.__input.category,
          provider: this.__input.provider,
          version: this.__input.version,
          settings: {
            thirdPartyConfigurationUrl: this.__input.settings?.thirdPartyConfigurationUrl,
            entityUrlTemplate: this.__input.settings?.entityUrlTemplate,
            executionUrlTemplate: this.__input.settings?.executionUrlTemplate,
            revisionUrlTemplate: this.__input.settings?.revisionUrlTemplate,
          },
          configurationProperties: this.__input.configurationProperties,
          inputArtifactDetails: {
            minimumCount: this.__input.inputArtifactDetails.minimumCount,
            maximumCount: this.__input.inputArtifactDetails.maximumCount,
          },
          outputArtifactDetails: {
            minimumCount: this.__input.outputArtifactDetails.minimumCount,
            maximumCount: this.__input.outputArtifactDetails.maximumCount,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCustomActionType.actionType.settings.revisionUrlTemplate', props);
    return resource.getResponseField('actionType.settings.revisionUrlTemplate') as unknown as string;
  }

}

export class CodePipelineResponsesCreateCustomActionTypeActionTypeInputArtifactDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelineCreateCustomActionTypeInput) {
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
          category: this.__input.category,
          provider: this.__input.provider,
          version: this.__input.version,
          settings: {
            thirdPartyConfigurationUrl: this.__input.settings?.thirdPartyConfigurationUrl,
            entityUrlTemplate: this.__input.settings?.entityUrlTemplate,
            executionUrlTemplate: this.__input.settings?.executionUrlTemplate,
            revisionUrlTemplate: this.__input.settings?.revisionUrlTemplate,
          },
          configurationProperties: this.__input.configurationProperties,
          inputArtifactDetails: {
            minimumCount: this.__input.inputArtifactDetails.minimumCount,
            maximumCount: this.__input.inputArtifactDetails.maximumCount,
          },
          outputArtifactDetails: {
            minimumCount: this.__input.outputArtifactDetails.minimumCount,
            maximumCount: this.__input.outputArtifactDetails.maximumCount,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCustomActionType.actionType.inputArtifactDetails.minimumCount', props);
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
          category: this.__input.category,
          provider: this.__input.provider,
          version: this.__input.version,
          settings: {
            thirdPartyConfigurationUrl: this.__input.settings?.thirdPartyConfigurationUrl,
            entityUrlTemplate: this.__input.settings?.entityUrlTemplate,
            executionUrlTemplate: this.__input.settings?.executionUrlTemplate,
            revisionUrlTemplate: this.__input.settings?.revisionUrlTemplate,
          },
          configurationProperties: this.__input.configurationProperties,
          inputArtifactDetails: {
            minimumCount: this.__input.inputArtifactDetails.minimumCount,
            maximumCount: this.__input.inputArtifactDetails.maximumCount,
          },
          outputArtifactDetails: {
            minimumCount: this.__input.outputArtifactDetails.minimumCount,
            maximumCount: this.__input.outputArtifactDetails.maximumCount,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCustomActionType.actionType.inputArtifactDetails.maximumCount', props);
    return resource.getResponseField('actionType.inputArtifactDetails.maximumCount') as unknown as number;
  }

}

export class CodePipelineResponsesCreateCustomActionTypeActionTypeOutputArtifactDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelineCreateCustomActionTypeInput) {
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
          category: this.__input.category,
          provider: this.__input.provider,
          version: this.__input.version,
          settings: {
            thirdPartyConfigurationUrl: this.__input.settings?.thirdPartyConfigurationUrl,
            entityUrlTemplate: this.__input.settings?.entityUrlTemplate,
            executionUrlTemplate: this.__input.settings?.executionUrlTemplate,
            revisionUrlTemplate: this.__input.settings?.revisionUrlTemplate,
          },
          configurationProperties: this.__input.configurationProperties,
          inputArtifactDetails: {
            minimumCount: this.__input.inputArtifactDetails.minimumCount,
            maximumCount: this.__input.inputArtifactDetails.maximumCount,
          },
          outputArtifactDetails: {
            minimumCount: this.__input.outputArtifactDetails.minimumCount,
            maximumCount: this.__input.outputArtifactDetails.maximumCount,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCustomActionType.actionType.outputArtifactDetails.minimumCount', props);
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
          category: this.__input.category,
          provider: this.__input.provider,
          version: this.__input.version,
          settings: {
            thirdPartyConfigurationUrl: this.__input.settings?.thirdPartyConfigurationUrl,
            entityUrlTemplate: this.__input.settings?.entityUrlTemplate,
            executionUrlTemplate: this.__input.settings?.executionUrlTemplate,
            revisionUrlTemplate: this.__input.settings?.revisionUrlTemplate,
          },
          configurationProperties: this.__input.configurationProperties,
          inputArtifactDetails: {
            minimumCount: this.__input.inputArtifactDetails.minimumCount,
            maximumCount: this.__input.inputArtifactDetails.maximumCount,
          },
          outputArtifactDetails: {
            minimumCount: this.__input.outputArtifactDetails.minimumCount,
            maximumCount: this.__input.outputArtifactDetails.maximumCount,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCustomActionType.actionType.outputArtifactDetails.maximumCount', props);
    return resource.getResponseField('actionType.outputArtifactDetails.maximumCount') as unknown as number;
  }

}

export class CodePipelineResponsesCreatePipeline {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelineCreatePipelineInput) {
  }

  public get pipeline(): CodePipelineResponsesCreatePipelinePipeline {
    return new CodePipelineResponsesCreatePipelinePipeline(this.__scope, this.__resources, this.__input);
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
            name: this.__input.pipeline.name,
            roleArn: this.__input.pipeline.roleArn,
            artifactStore: {
              type: this.__input.pipeline.artifactStore?.type,
              location: this.__input.pipeline.artifactStore?.location,
              encryptionKey: {
                id: this.__input.pipeline.artifactStore?.encryptionKey?.id,
                type: this.__input.pipeline.artifactStore?.encryptionKey?.type,
              },
            },
            artifactStores: this.__input.pipeline.artifactStores,
            stages: this.__input.pipeline.stages,
            version: this.__input.pipeline.version,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePipeline.tags', props);
    return resource.getResponseField('tags') as unknown as shapes.CodePipelineTag[];
  }

}

export class CodePipelineResponsesCreatePipelinePipeline {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelineCreatePipelineInput) {
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
            name: this.__input.pipeline.name,
            roleArn: this.__input.pipeline.roleArn,
            artifactStore: {
              type: this.__input.pipeline.artifactStore?.type,
              location: this.__input.pipeline.artifactStore?.location,
              encryptionKey: {
                id: this.__input.pipeline.artifactStore?.encryptionKey?.id,
                type: this.__input.pipeline.artifactStore?.encryptionKey?.type,
              },
            },
            artifactStores: this.__input.pipeline.artifactStores,
            stages: this.__input.pipeline.stages,
            version: this.__input.pipeline.version,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePipeline.pipeline.name', props);
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
            name: this.__input.pipeline.name,
            roleArn: this.__input.pipeline.roleArn,
            artifactStore: {
              type: this.__input.pipeline.artifactStore?.type,
              location: this.__input.pipeline.artifactStore?.location,
              encryptionKey: {
                id: this.__input.pipeline.artifactStore?.encryptionKey?.id,
                type: this.__input.pipeline.artifactStore?.encryptionKey?.type,
              },
            },
            artifactStores: this.__input.pipeline.artifactStores,
            stages: this.__input.pipeline.stages,
            version: this.__input.pipeline.version,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePipeline.pipeline.roleArn', props);
    return resource.getResponseField('pipeline.roleArn') as unknown as string;
  }

  public get artifactStore(): CodePipelineResponsesCreatePipelinePipelineArtifactStore {
    return new CodePipelineResponsesCreatePipelinePipelineArtifactStore(this.__scope, this.__resources, this.__input);
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
            name: this.__input.pipeline.name,
            roleArn: this.__input.pipeline.roleArn,
            artifactStore: {
              type: this.__input.pipeline.artifactStore?.type,
              location: this.__input.pipeline.artifactStore?.location,
              encryptionKey: {
                id: this.__input.pipeline.artifactStore?.encryptionKey?.id,
                type: this.__input.pipeline.artifactStore?.encryptionKey?.type,
              },
            },
            artifactStores: this.__input.pipeline.artifactStores,
            stages: this.__input.pipeline.stages,
            version: this.__input.pipeline.version,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePipeline.pipeline.artifactStores', props);
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
            name: this.__input.pipeline.name,
            roleArn: this.__input.pipeline.roleArn,
            artifactStore: {
              type: this.__input.pipeline.artifactStore?.type,
              location: this.__input.pipeline.artifactStore?.location,
              encryptionKey: {
                id: this.__input.pipeline.artifactStore?.encryptionKey?.id,
                type: this.__input.pipeline.artifactStore?.encryptionKey?.type,
              },
            },
            artifactStores: this.__input.pipeline.artifactStores,
            stages: this.__input.pipeline.stages,
            version: this.__input.pipeline.version,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePipeline.pipeline.stages', props);
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
            name: this.__input.pipeline.name,
            roleArn: this.__input.pipeline.roleArn,
            artifactStore: {
              type: this.__input.pipeline.artifactStore?.type,
              location: this.__input.pipeline.artifactStore?.location,
              encryptionKey: {
                id: this.__input.pipeline.artifactStore?.encryptionKey?.id,
                type: this.__input.pipeline.artifactStore?.encryptionKey?.type,
              },
            },
            artifactStores: this.__input.pipeline.artifactStores,
            stages: this.__input.pipeline.stages,
            version: this.__input.pipeline.version,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePipeline.pipeline.version', props);
    return resource.getResponseField('pipeline.version') as unknown as number;
  }

}

export class CodePipelineResponsesCreatePipelinePipelineArtifactStore {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelineCreatePipelineInput) {
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
            name: this.__input.pipeline.name,
            roleArn: this.__input.pipeline.roleArn,
            artifactStore: {
              type: this.__input.pipeline.artifactStore?.type,
              location: this.__input.pipeline.artifactStore?.location,
              encryptionKey: {
                id: this.__input.pipeline.artifactStore?.encryptionKey?.id,
                type: this.__input.pipeline.artifactStore?.encryptionKey?.type,
              },
            },
            artifactStores: this.__input.pipeline.artifactStores,
            stages: this.__input.pipeline.stages,
            version: this.__input.pipeline.version,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePipeline.pipeline.artifactStore.type', props);
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
            name: this.__input.pipeline.name,
            roleArn: this.__input.pipeline.roleArn,
            artifactStore: {
              type: this.__input.pipeline.artifactStore?.type,
              location: this.__input.pipeline.artifactStore?.location,
              encryptionKey: {
                id: this.__input.pipeline.artifactStore?.encryptionKey?.id,
                type: this.__input.pipeline.artifactStore?.encryptionKey?.type,
              },
            },
            artifactStores: this.__input.pipeline.artifactStores,
            stages: this.__input.pipeline.stages,
            version: this.__input.pipeline.version,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePipeline.pipeline.artifactStore.location', props);
    return resource.getResponseField('pipeline.artifactStore.location') as unknown as string;
  }

  public get encryptionKey(): CodePipelineResponsesCreatePipelinePipelineArtifactStoreEncryptionKey {
    return new CodePipelineResponsesCreatePipelinePipelineArtifactStoreEncryptionKey(this.__scope, this.__resources, this.__input);
  }

}

export class CodePipelineResponsesCreatePipelinePipelineArtifactStoreEncryptionKey {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelineCreatePipelineInput) {
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
            name: this.__input.pipeline.name,
            roleArn: this.__input.pipeline.roleArn,
            artifactStore: {
              type: this.__input.pipeline.artifactStore?.type,
              location: this.__input.pipeline.artifactStore?.location,
              encryptionKey: {
                id: this.__input.pipeline.artifactStore?.encryptionKey?.id,
                type: this.__input.pipeline.artifactStore?.encryptionKey?.type,
              },
            },
            artifactStores: this.__input.pipeline.artifactStores,
            stages: this.__input.pipeline.stages,
            version: this.__input.pipeline.version,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePipeline.pipeline.artifactStore.encryptionKey.id', props);
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
            name: this.__input.pipeline.name,
            roleArn: this.__input.pipeline.roleArn,
            artifactStore: {
              type: this.__input.pipeline.artifactStore?.type,
              location: this.__input.pipeline.artifactStore?.location,
              encryptionKey: {
                id: this.__input.pipeline.artifactStore?.encryptionKey?.id,
                type: this.__input.pipeline.artifactStore?.encryptionKey?.type,
              },
            },
            artifactStores: this.__input.pipeline.artifactStores,
            stages: this.__input.pipeline.stages,
            version: this.__input.pipeline.version,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePipeline.pipeline.artifactStore.encryptionKey.type', props);
    return resource.getResponseField('pipeline.artifactStore.encryptionKey.type') as unknown as string;
  }

}

export class CodePipelineResponsesFetchActionType {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelineGetActionTypeInput) {
  }

  public get actionType(): CodePipelineResponsesFetchActionTypeActionType {
    return new CodePipelineResponsesFetchActionTypeActionType(this.__scope, this.__resources, this.__input);
  }

}

export class CodePipelineResponsesFetchActionTypeActionType {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelineGetActionTypeInput) {
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getActionType',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetActionType.actionType.description'),
        outputPath: 'actionType.description',
        parameters: {
          category: this.__input.category,
          owner: this.__input.owner,
          provider: this.__input.provider,
          version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetActionType.actionType.description', props);
    return resource.getResponseField('actionType.description') as unknown as string;
  }

  public get executor(): CodePipelineResponsesFetchActionTypeActionTypeExecutor {
    return new CodePipelineResponsesFetchActionTypeActionTypeExecutor(this.__scope, this.__resources, this.__input);
  }

  public get id(): CodePipelineResponsesFetchActionTypeActionTypeId {
    return new CodePipelineResponsesFetchActionTypeActionTypeId(this.__scope, this.__resources, this.__input);
  }

  public get inputArtifactDetails(): CodePipelineResponsesFetchActionTypeActionTypeInputArtifactDetails {
    return new CodePipelineResponsesFetchActionTypeActionTypeInputArtifactDetails(this.__scope, this.__resources, this.__input);
  }

  public get outputArtifactDetails(): CodePipelineResponsesFetchActionTypeActionTypeOutputArtifactDetails {
    return new CodePipelineResponsesFetchActionTypeActionTypeOutputArtifactDetails(this.__scope, this.__resources, this.__input);
  }

  public get permissions(): CodePipelineResponsesFetchActionTypeActionTypePermissions {
    return new CodePipelineResponsesFetchActionTypeActionTypePermissions(this.__scope, this.__resources, this.__input);
  }

  public get properties(): shapes.CodePipelineActionTypeProperty[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getActionType',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetActionType.actionType.properties'),
        outputPath: 'actionType.properties',
        parameters: {
          category: this.__input.category,
          owner: this.__input.owner,
          provider: this.__input.provider,
          version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetActionType.actionType.properties', props);
    return resource.getResponseField('actionType.properties') as unknown as shapes.CodePipelineActionTypeProperty[];
  }

  public get urls(): CodePipelineResponsesFetchActionTypeActionTypeUrls {
    return new CodePipelineResponsesFetchActionTypeActionTypeUrls(this.__scope, this.__resources, this.__input);
  }

}

export class CodePipelineResponsesFetchActionTypeActionTypeExecutor {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelineGetActionTypeInput) {
  }

  public get configuration(): CodePipelineResponsesFetchActionTypeActionTypeExecutorConfiguration {
    return new CodePipelineResponsesFetchActionTypeActionTypeExecutorConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getActionType',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetActionType.actionType.executor.type'),
        outputPath: 'actionType.executor.type',
        parameters: {
          category: this.__input.category,
          owner: this.__input.owner,
          provider: this.__input.provider,
          version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetActionType.actionType.executor.type', props);
    return resource.getResponseField('actionType.executor.type') as unknown as string;
  }

  public get policyStatementsTemplate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getActionType',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetActionType.actionType.executor.policyStatementsTemplate'),
        outputPath: 'actionType.executor.policyStatementsTemplate',
        parameters: {
          category: this.__input.category,
          owner: this.__input.owner,
          provider: this.__input.provider,
          version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetActionType.actionType.executor.policyStatementsTemplate', props);
    return resource.getResponseField('actionType.executor.policyStatementsTemplate') as unknown as string;
  }

  public get jobTimeout(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getActionType',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetActionType.actionType.executor.jobTimeout'),
        outputPath: 'actionType.executor.jobTimeout',
        parameters: {
          category: this.__input.category,
          owner: this.__input.owner,
          provider: this.__input.provider,
          version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetActionType.actionType.executor.jobTimeout', props);
    return resource.getResponseField('actionType.executor.jobTimeout') as unknown as number;
  }

}

export class CodePipelineResponsesFetchActionTypeActionTypeExecutorConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelineGetActionTypeInput) {
  }

  public get lambdaExecutorConfiguration(): CodePipelineResponsesFetchActionTypeActionTypeExecutorConfigurationLambdaExecutorConfiguration {
    return new CodePipelineResponsesFetchActionTypeActionTypeExecutorConfigurationLambdaExecutorConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get jobWorkerExecutorConfiguration(): CodePipelineResponsesFetchActionTypeActionTypeExecutorConfigurationJobWorkerExecutorConfiguration {
    return new CodePipelineResponsesFetchActionTypeActionTypeExecutorConfigurationJobWorkerExecutorConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class CodePipelineResponsesFetchActionTypeActionTypeExecutorConfigurationLambdaExecutorConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelineGetActionTypeInput) {
  }

  public get lambdaFunctionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getActionType',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetActionType.actionType.executor.configuration.lambdaExecutorConfiguration.lambdaFunctionArn'),
        outputPath: 'actionType.executor.configuration.lambdaExecutorConfiguration.lambdaFunctionArn',
        parameters: {
          category: this.__input.category,
          owner: this.__input.owner,
          provider: this.__input.provider,
          version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetActionType.actionType.executor.configuration.lambdaExecutorConfiguration.lambdaFunctionArn', props);
    return resource.getResponseField('actionType.executor.configuration.lambdaExecutorConfiguration.lambdaFunctionArn') as unknown as string;
  }

}

export class CodePipelineResponsesFetchActionTypeActionTypeExecutorConfigurationJobWorkerExecutorConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelineGetActionTypeInput) {
  }

  public get pollingAccounts(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getActionType',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetActionType.actionType.executor.configuration.jobWorkerExecutorConfiguration.pollingAccounts'),
        outputPath: 'actionType.executor.configuration.jobWorkerExecutorConfiguration.pollingAccounts',
        parameters: {
          category: this.__input.category,
          owner: this.__input.owner,
          provider: this.__input.provider,
          version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetActionType.actionType.executor.configuration.jobWorkerExecutorConfiguration.pollingAccounts', props);
    return resource.getResponseField('actionType.executor.configuration.jobWorkerExecutorConfiguration.pollingAccounts') as unknown as string[];
  }

  public get pollingServicePrincipals(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getActionType',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetActionType.actionType.executor.configuration.jobWorkerExecutorConfiguration.pollingServicePrincipals'),
        outputPath: 'actionType.executor.configuration.jobWorkerExecutorConfiguration.pollingServicePrincipals',
        parameters: {
          category: this.__input.category,
          owner: this.__input.owner,
          provider: this.__input.provider,
          version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetActionType.actionType.executor.configuration.jobWorkerExecutorConfiguration.pollingServicePrincipals', props);
    return resource.getResponseField('actionType.executor.configuration.jobWorkerExecutorConfiguration.pollingServicePrincipals') as unknown as string[];
  }

}

export class CodePipelineResponsesFetchActionTypeActionTypeId {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelineGetActionTypeInput) {
  }

  public get category(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getActionType',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetActionType.actionType.id.category'),
        outputPath: 'actionType.id.category',
        parameters: {
          category: this.__input.category,
          owner: this.__input.owner,
          provider: this.__input.provider,
          version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetActionType.actionType.id.category', props);
    return resource.getResponseField('actionType.id.category') as unknown as string;
  }

  public get owner(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getActionType',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetActionType.actionType.id.owner'),
        outputPath: 'actionType.id.owner',
        parameters: {
          category: this.__input.category,
          owner: this.__input.owner,
          provider: this.__input.provider,
          version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetActionType.actionType.id.owner', props);
    return resource.getResponseField('actionType.id.owner') as unknown as string;
  }

  public get provider(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getActionType',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetActionType.actionType.id.provider'),
        outputPath: 'actionType.id.provider',
        parameters: {
          category: this.__input.category,
          owner: this.__input.owner,
          provider: this.__input.provider,
          version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetActionType.actionType.id.provider', props);
    return resource.getResponseField('actionType.id.provider') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getActionType',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetActionType.actionType.id.version'),
        outputPath: 'actionType.id.version',
        parameters: {
          category: this.__input.category,
          owner: this.__input.owner,
          provider: this.__input.provider,
          version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetActionType.actionType.id.version', props);
    return resource.getResponseField('actionType.id.version') as unknown as string;
  }

}

export class CodePipelineResponsesFetchActionTypeActionTypeInputArtifactDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelineGetActionTypeInput) {
  }

  public get minimumCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getActionType',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetActionType.actionType.inputArtifactDetails.minimumCount'),
        outputPath: 'actionType.inputArtifactDetails.minimumCount',
        parameters: {
          category: this.__input.category,
          owner: this.__input.owner,
          provider: this.__input.provider,
          version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetActionType.actionType.inputArtifactDetails.minimumCount', props);
    return resource.getResponseField('actionType.inputArtifactDetails.minimumCount') as unknown as number;
  }

  public get maximumCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getActionType',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetActionType.actionType.inputArtifactDetails.maximumCount'),
        outputPath: 'actionType.inputArtifactDetails.maximumCount',
        parameters: {
          category: this.__input.category,
          owner: this.__input.owner,
          provider: this.__input.provider,
          version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetActionType.actionType.inputArtifactDetails.maximumCount', props);
    return resource.getResponseField('actionType.inputArtifactDetails.maximumCount') as unknown as number;
  }

}

export class CodePipelineResponsesFetchActionTypeActionTypeOutputArtifactDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelineGetActionTypeInput) {
  }

  public get minimumCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getActionType',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetActionType.actionType.outputArtifactDetails.minimumCount'),
        outputPath: 'actionType.outputArtifactDetails.minimumCount',
        parameters: {
          category: this.__input.category,
          owner: this.__input.owner,
          provider: this.__input.provider,
          version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetActionType.actionType.outputArtifactDetails.minimumCount', props);
    return resource.getResponseField('actionType.outputArtifactDetails.minimumCount') as unknown as number;
  }

  public get maximumCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getActionType',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetActionType.actionType.outputArtifactDetails.maximumCount'),
        outputPath: 'actionType.outputArtifactDetails.maximumCount',
        parameters: {
          category: this.__input.category,
          owner: this.__input.owner,
          provider: this.__input.provider,
          version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetActionType.actionType.outputArtifactDetails.maximumCount', props);
    return resource.getResponseField('actionType.outputArtifactDetails.maximumCount') as unknown as number;
  }

}

export class CodePipelineResponsesFetchActionTypeActionTypePermissions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelineGetActionTypeInput) {
  }

  public get allowedAccounts(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getActionType',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetActionType.actionType.permissions.allowedAccounts'),
        outputPath: 'actionType.permissions.allowedAccounts',
        parameters: {
          category: this.__input.category,
          owner: this.__input.owner,
          provider: this.__input.provider,
          version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetActionType.actionType.permissions.allowedAccounts', props);
    return resource.getResponseField('actionType.permissions.allowedAccounts') as unknown as string[];
  }

}

export class CodePipelineResponsesFetchActionTypeActionTypeUrls {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelineGetActionTypeInput) {
  }

  public get configurationUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getActionType',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetActionType.actionType.urls.configurationUrl'),
        outputPath: 'actionType.urls.configurationUrl',
        parameters: {
          category: this.__input.category,
          owner: this.__input.owner,
          provider: this.__input.provider,
          version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetActionType.actionType.urls.configurationUrl', props);
    return resource.getResponseField('actionType.urls.configurationUrl') as unknown as string;
  }

  public get entityUrlTemplate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getActionType',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetActionType.actionType.urls.entityUrlTemplate'),
        outputPath: 'actionType.urls.entityUrlTemplate',
        parameters: {
          category: this.__input.category,
          owner: this.__input.owner,
          provider: this.__input.provider,
          version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetActionType.actionType.urls.entityUrlTemplate', props);
    return resource.getResponseField('actionType.urls.entityUrlTemplate') as unknown as string;
  }

  public get executionUrlTemplate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getActionType',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetActionType.actionType.urls.executionUrlTemplate'),
        outputPath: 'actionType.urls.executionUrlTemplate',
        parameters: {
          category: this.__input.category,
          owner: this.__input.owner,
          provider: this.__input.provider,
          version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetActionType.actionType.urls.executionUrlTemplate', props);
    return resource.getResponseField('actionType.urls.executionUrlTemplate') as unknown as string;
  }

  public get revisionUrlTemplate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getActionType',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetActionType.actionType.urls.revisionUrlTemplate'),
        outputPath: 'actionType.urls.revisionUrlTemplate',
        parameters: {
          category: this.__input.category,
          owner: this.__input.owner,
          provider: this.__input.provider,
          version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetActionType.actionType.urls.revisionUrlTemplate', props);
    return resource.getResponseField('actionType.urls.revisionUrlTemplate') as unknown as string;
  }

}

export class CodePipelineResponsesFetchJobDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelineGetJobDetailsInput) {
  }

  public get jobDetails(): CodePipelineResponsesFetchJobDetailsJobDetails {
    return new CodePipelineResponsesFetchJobDetailsJobDetails(this.__scope, this.__resources, this.__input);
  }

}

export class CodePipelineResponsesFetchJobDetailsJobDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelineGetJobDetailsInput) {
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJobDetails.jobDetails.id', props);
    return resource.getResponseField('jobDetails.id') as unknown as string;
  }

  public get data(): CodePipelineResponsesFetchJobDetailsJobDetailsData {
    return new CodePipelineResponsesFetchJobDetailsJobDetailsData(this.__scope, this.__resources, this.__input);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJobDetails.jobDetails.accountId', props);
    return resource.getResponseField('jobDetails.accountId') as unknown as string;
  }

}

export class CodePipelineResponsesFetchJobDetailsJobDetailsData {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelineGetJobDetailsInput) {
  }

  public get actionTypeId(): CodePipelineResponsesFetchJobDetailsJobDetailsDataActionTypeId {
    return new CodePipelineResponsesFetchJobDetailsJobDetailsDataActionTypeId(this.__scope, this.__resources, this.__input);
  }

  public get actionConfiguration(): CodePipelineResponsesFetchJobDetailsJobDetailsDataActionConfiguration {
    return new CodePipelineResponsesFetchJobDetailsJobDetailsDataActionConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get pipelineContext(): CodePipelineResponsesFetchJobDetailsJobDetailsDataPipelineContext {
    return new CodePipelineResponsesFetchJobDetailsJobDetailsDataPipelineContext(this.__scope, this.__resources, this.__input);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJobDetails.jobDetails.data.inputArtifacts', props);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJobDetails.jobDetails.data.outputArtifacts', props);
    return resource.getResponseField('jobDetails.data.outputArtifacts') as unknown as shapes.CodePipelineArtifact[];
  }

  public get artifactCredentials(): CodePipelineResponsesFetchJobDetailsJobDetailsDataArtifactCredentials {
    return new CodePipelineResponsesFetchJobDetailsJobDetailsDataArtifactCredentials(this.__scope, this.__resources, this.__input);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJobDetails.jobDetails.data.continuationToken', props);
    return resource.getResponseField('jobDetails.data.continuationToken') as unknown as string;
  }

  public get encryptionKey(): CodePipelineResponsesFetchJobDetailsJobDetailsDataEncryptionKey {
    return new CodePipelineResponsesFetchJobDetailsJobDetailsDataEncryptionKey(this.__scope, this.__resources, this.__input);
  }

}

export class CodePipelineResponsesFetchJobDetailsJobDetailsDataActionTypeId {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelineGetJobDetailsInput) {
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJobDetails.jobDetails.data.actionTypeId.category', props);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJobDetails.jobDetails.data.actionTypeId.owner', props);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJobDetails.jobDetails.data.actionTypeId.provider', props);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJobDetails.jobDetails.data.actionTypeId.version', props);
    return resource.getResponseField('jobDetails.data.actionTypeId.version') as unknown as string;
  }

}

export class CodePipelineResponsesFetchJobDetailsJobDetailsDataActionConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelineGetJobDetailsInput) {
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJobDetails.jobDetails.data.actionConfiguration.configuration', props);
    return resource.getResponseField('jobDetails.data.actionConfiguration.configuration') as unknown as Record<string, string>;
  }

}

export class CodePipelineResponsesFetchJobDetailsJobDetailsDataPipelineContext {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelineGetJobDetailsInput) {
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJobDetails.jobDetails.data.pipelineContext.pipelineName', props);
    return resource.getResponseField('jobDetails.data.pipelineContext.pipelineName') as unknown as string;
  }

  public get stage(): CodePipelineResponsesFetchJobDetailsJobDetailsDataPipelineContextStage {
    return new CodePipelineResponsesFetchJobDetailsJobDetailsDataPipelineContextStage(this.__scope, this.__resources, this.__input);
  }

  public get action(): CodePipelineResponsesFetchJobDetailsJobDetailsDataPipelineContextAction {
    return new CodePipelineResponsesFetchJobDetailsJobDetailsDataPipelineContextAction(this.__scope, this.__resources, this.__input);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJobDetails.jobDetails.data.pipelineContext.pipelineArn', props);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJobDetails.jobDetails.data.pipelineContext.pipelineExecutionId', props);
    return resource.getResponseField('jobDetails.data.pipelineContext.pipelineExecutionId') as unknown as string;
  }

}

export class CodePipelineResponsesFetchJobDetailsJobDetailsDataPipelineContextStage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelineGetJobDetailsInput) {
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJobDetails.jobDetails.data.pipelineContext.stage.name', props);
    return resource.getResponseField('jobDetails.data.pipelineContext.stage.name') as unknown as string;
  }

}

export class CodePipelineResponsesFetchJobDetailsJobDetailsDataPipelineContextAction {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelineGetJobDetailsInput) {
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJobDetails.jobDetails.data.pipelineContext.action.name', props);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJobDetails.jobDetails.data.pipelineContext.action.actionExecutionId', props);
    return resource.getResponseField('jobDetails.data.pipelineContext.action.actionExecutionId') as unknown as string;
  }

}

export class CodePipelineResponsesFetchJobDetailsJobDetailsDataArtifactCredentials {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelineGetJobDetailsInput) {
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJobDetails.jobDetails.data.artifactCredentials.accessKeyId', props);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJobDetails.jobDetails.data.artifactCredentials.secretAccessKey', props);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJobDetails.jobDetails.data.artifactCredentials.sessionToken', props);
    return resource.getResponseField('jobDetails.data.artifactCredentials.sessionToken') as unknown as string;
  }

}

export class CodePipelineResponsesFetchJobDetailsJobDetailsDataEncryptionKey {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelineGetJobDetailsInput) {
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJobDetails.jobDetails.data.encryptionKey.id', props);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJobDetails.jobDetails.data.encryptionKey.type', props);
    return resource.getResponseField('jobDetails.data.encryptionKey.type') as unknown as string;
  }

}

export class CodePipelineResponsesFetchPipeline {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelineGetPipelineInput) {
  }

  public get pipeline(): CodePipelineResponsesFetchPipelinePipeline {
    return new CodePipelineResponsesFetchPipelinePipeline(this.__scope, this.__resources, this.__input);
  }

  public get metadata(): CodePipelineResponsesFetchPipelineMetadata {
    return new CodePipelineResponsesFetchPipelineMetadata(this.__scope, this.__resources, this.__input);
  }

}

export class CodePipelineResponsesFetchPipelinePipeline {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelineGetPipelineInput) {
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
          name: this.__input.name,
          version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPipeline.pipeline.name', props);
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
          name: this.__input.name,
          version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPipeline.pipeline.roleArn', props);
    return resource.getResponseField('pipeline.roleArn') as unknown as string;
  }

  public get artifactStore(): CodePipelineResponsesFetchPipelinePipelineArtifactStore {
    return new CodePipelineResponsesFetchPipelinePipelineArtifactStore(this.__scope, this.__resources, this.__input);
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
          name: this.__input.name,
          version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPipeline.pipeline.artifactStores', props);
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
          name: this.__input.name,
          version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPipeline.pipeline.stages', props);
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
          name: this.__input.name,
          version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPipeline.pipeline.version', props);
    return resource.getResponseField('pipeline.version') as unknown as number;
  }

}

export class CodePipelineResponsesFetchPipelinePipelineArtifactStore {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelineGetPipelineInput) {
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
          name: this.__input.name,
          version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPipeline.pipeline.artifactStore.type', props);
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
          name: this.__input.name,
          version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPipeline.pipeline.artifactStore.location', props);
    return resource.getResponseField('pipeline.artifactStore.location') as unknown as string;
  }

  public get encryptionKey(): CodePipelineResponsesFetchPipelinePipelineArtifactStoreEncryptionKey {
    return new CodePipelineResponsesFetchPipelinePipelineArtifactStoreEncryptionKey(this.__scope, this.__resources, this.__input);
  }

}

export class CodePipelineResponsesFetchPipelinePipelineArtifactStoreEncryptionKey {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelineGetPipelineInput) {
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
          name: this.__input.name,
          version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPipeline.pipeline.artifactStore.encryptionKey.id', props);
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
          name: this.__input.name,
          version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPipeline.pipeline.artifactStore.encryptionKey.type', props);
    return resource.getResponseField('pipeline.artifactStore.encryptionKey.type') as unknown as string;
  }

}

export class CodePipelineResponsesFetchPipelineMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelineGetPipelineInput) {
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
          name: this.__input.name,
          version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPipeline.metadata.pipelineArn', props);
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
          name: this.__input.name,
          version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPipeline.metadata.created', props);
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
          name: this.__input.name,
          version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPipeline.metadata.updated', props);
    return resource.getResponseField('metadata.updated') as unknown as string;
  }

}

export class CodePipelineResponsesFetchPipelineExecution {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelineGetPipelineExecutionInput) {
  }

  public get pipelineExecution(): CodePipelineResponsesFetchPipelineExecutionPipelineExecution {
    return new CodePipelineResponsesFetchPipelineExecutionPipelineExecution(this.__scope, this.__resources, this.__input);
  }

}

export class CodePipelineResponsesFetchPipelineExecutionPipelineExecution {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelineGetPipelineExecutionInput) {
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
          pipelineName: this.__input.pipelineName,
          pipelineExecutionId: this.__input.pipelineExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPipelineExecution.pipelineExecution.pipelineName', props);
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
          pipelineName: this.__input.pipelineName,
          pipelineExecutionId: this.__input.pipelineExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPipelineExecution.pipelineExecution.pipelineVersion', props);
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
          pipelineName: this.__input.pipelineName,
          pipelineExecutionId: this.__input.pipelineExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPipelineExecution.pipelineExecution.pipelineExecutionId', props);
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
          pipelineName: this.__input.pipelineName,
          pipelineExecutionId: this.__input.pipelineExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPipelineExecution.pipelineExecution.status', props);
    return resource.getResponseField('pipelineExecution.status') as unknown as string;
  }

  public get statusSummary(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPipelineExecution',
        service: 'CodePipeline',
        physicalResourceId: cr.PhysicalResourceId.of('CodePipeline.GetPipelineExecution.pipelineExecution.statusSummary'),
        outputPath: 'pipelineExecution.statusSummary',
        parameters: {
          pipelineName: this.__input.pipelineName,
          pipelineExecutionId: this.__input.pipelineExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPipelineExecution.pipelineExecution.statusSummary', props);
    return resource.getResponseField('pipelineExecution.statusSummary') as unknown as string;
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
          pipelineName: this.__input.pipelineName,
          pipelineExecutionId: this.__input.pipelineExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPipelineExecution.pipelineExecution.artifactRevisions', props);
    return resource.getResponseField('pipelineExecution.artifactRevisions') as unknown as shapes.CodePipelineArtifactRevision[];
  }

}

export class CodePipelineResponsesFetchPipelineState {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelineGetPipelineStateInput) {
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
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPipelineState.pipelineName', props);
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
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPipelineState.pipelineVersion', props);
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
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPipelineState.stageStates', props);
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
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPipelineState.created', props);
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
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPipelineState.updated', props);
    return resource.getResponseField('updated') as unknown as string;
  }

}

export class CodePipelineResponsesFetchThirdPartyJobDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelineGetThirdPartyJobDetailsInput) {
  }

  public get jobDetails(): CodePipelineResponsesFetchThirdPartyJobDetailsJobDetails {
    return new CodePipelineResponsesFetchThirdPartyJobDetailsJobDetails(this.__scope, this.__resources, this.__input);
  }

}

export class CodePipelineResponsesFetchThirdPartyJobDetailsJobDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelineGetThirdPartyJobDetailsInput) {
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
          jobId: this.__input.jobId,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetThirdPartyJobDetails.jobDetails.id', props);
    return resource.getResponseField('jobDetails.id') as unknown as string;
  }

  public get data(): CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsData {
    return new CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsData(this.__scope, this.__resources, this.__input);
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
          jobId: this.__input.jobId,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetThirdPartyJobDetails.jobDetails.nonce', props);
    return resource.getResponseField('jobDetails.nonce') as unknown as string;
  }

}

export class CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsData {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelineGetThirdPartyJobDetailsInput) {
  }

  public get actionTypeId(): CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataActionTypeId {
    return new CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataActionTypeId(this.__scope, this.__resources, this.__input);
  }

  public get actionConfiguration(): CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataActionConfiguration {
    return new CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataActionConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get pipelineContext(): CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataPipelineContext {
    return new CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataPipelineContext(this.__scope, this.__resources, this.__input);
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
          jobId: this.__input.jobId,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetThirdPartyJobDetails.jobDetails.data.inputArtifacts', props);
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
          jobId: this.__input.jobId,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetThirdPartyJobDetails.jobDetails.data.outputArtifacts', props);
    return resource.getResponseField('jobDetails.data.outputArtifacts') as unknown as shapes.CodePipelineArtifact[];
  }

  public get artifactCredentials(): CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataArtifactCredentials {
    return new CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataArtifactCredentials(this.__scope, this.__resources, this.__input);
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
          jobId: this.__input.jobId,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetThirdPartyJobDetails.jobDetails.data.continuationToken', props);
    return resource.getResponseField('jobDetails.data.continuationToken') as unknown as string;
  }

  public get encryptionKey(): CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataEncryptionKey {
    return new CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataEncryptionKey(this.__scope, this.__resources, this.__input);
  }

}

export class CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataActionTypeId {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelineGetThirdPartyJobDetailsInput) {
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
          jobId: this.__input.jobId,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetThirdPartyJobDetails.jobDetails.data.actionTypeId.category', props);
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
          jobId: this.__input.jobId,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetThirdPartyJobDetails.jobDetails.data.actionTypeId.owner', props);
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
          jobId: this.__input.jobId,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetThirdPartyJobDetails.jobDetails.data.actionTypeId.provider', props);
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
          jobId: this.__input.jobId,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetThirdPartyJobDetails.jobDetails.data.actionTypeId.version', props);
    return resource.getResponseField('jobDetails.data.actionTypeId.version') as unknown as string;
  }

}

export class CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataActionConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelineGetThirdPartyJobDetailsInput) {
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
          jobId: this.__input.jobId,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetThirdPartyJobDetails.jobDetails.data.actionConfiguration.configuration', props);
    return resource.getResponseField('jobDetails.data.actionConfiguration.configuration') as unknown as Record<string, string>;
  }

}

export class CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataPipelineContext {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelineGetThirdPartyJobDetailsInput) {
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
          jobId: this.__input.jobId,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetThirdPartyJobDetails.jobDetails.data.pipelineContext.pipelineName', props);
    return resource.getResponseField('jobDetails.data.pipelineContext.pipelineName') as unknown as string;
  }

  public get stage(): CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataPipelineContextStage {
    return new CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataPipelineContextStage(this.__scope, this.__resources, this.__input);
  }

  public get action(): CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataPipelineContextAction {
    return new CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataPipelineContextAction(this.__scope, this.__resources, this.__input);
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
          jobId: this.__input.jobId,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetThirdPartyJobDetails.jobDetails.data.pipelineContext.pipelineArn', props);
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
          jobId: this.__input.jobId,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetThirdPartyJobDetails.jobDetails.data.pipelineContext.pipelineExecutionId', props);
    return resource.getResponseField('jobDetails.data.pipelineContext.pipelineExecutionId') as unknown as string;
  }

}

export class CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataPipelineContextStage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelineGetThirdPartyJobDetailsInput) {
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
          jobId: this.__input.jobId,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetThirdPartyJobDetails.jobDetails.data.pipelineContext.stage.name', props);
    return resource.getResponseField('jobDetails.data.pipelineContext.stage.name') as unknown as string;
  }

}

export class CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataPipelineContextAction {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelineGetThirdPartyJobDetailsInput) {
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
          jobId: this.__input.jobId,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetThirdPartyJobDetails.jobDetails.data.pipelineContext.action.name', props);
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
          jobId: this.__input.jobId,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetThirdPartyJobDetails.jobDetails.data.pipelineContext.action.actionExecutionId', props);
    return resource.getResponseField('jobDetails.data.pipelineContext.action.actionExecutionId') as unknown as string;
  }

}

export class CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataArtifactCredentials {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelineGetThirdPartyJobDetailsInput) {
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
          jobId: this.__input.jobId,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetThirdPartyJobDetails.jobDetails.data.artifactCredentials.accessKeyId', props);
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
          jobId: this.__input.jobId,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetThirdPartyJobDetails.jobDetails.data.artifactCredentials.secretAccessKey', props);
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
          jobId: this.__input.jobId,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetThirdPartyJobDetails.jobDetails.data.artifactCredentials.sessionToken', props);
    return resource.getResponseField('jobDetails.data.artifactCredentials.sessionToken') as unknown as string;
  }

}

export class CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataEncryptionKey {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelineGetThirdPartyJobDetailsInput) {
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
          jobId: this.__input.jobId,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetThirdPartyJobDetails.jobDetails.data.encryptionKey.id', props);
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
          jobId: this.__input.jobId,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetThirdPartyJobDetails.jobDetails.data.encryptionKey.type', props);
    return resource.getResponseField('jobDetails.data.encryptionKey.type') as unknown as string;
  }

}

export class CodePipelineResponsesListActionExecutions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelineListActionExecutionsInput) {
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
          pipelineName: this.__input.pipelineName,
          filter: {
            pipelineExecutionId: this.__input.filter?.pipelineExecutionId,
          },
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListActionExecutions.actionExecutionDetails', props);
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
          pipelineName: this.__input.pipelineName,
          filter: {
            pipelineExecutionId: this.__input.filter?.pipelineExecutionId,
          },
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListActionExecutions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodePipelineResponsesListActionTypes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelineListActionTypesInput) {
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
          actionOwnerFilter: this.__input.actionOwnerFilter,
          nextToken: this.__input.nextToken,
          regionFilter: this.__input.regionFilter,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListActionTypes.actionTypes', props);
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
          actionOwnerFilter: this.__input.actionOwnerFilter,
          nextToken: this.__input.nextToken,
          regionFilter: this.__input.regionFilter,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListActionTypes.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodePipelineResponsesListPipelineExecutions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelineListPipelineExecutionsInput) {
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
          pipelineName: this.__input.pipelineName,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPipelineExecutions.pipelineExecutionSummaries', props);
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
          pipelineName: this.__input.pipelineName,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPipelineExecutions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodePipelineResponsesListPipelines {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelineListPipelinesInput) {
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPipelines.pipelines', props);
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPipelines.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodePipelineResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelineListTagsForResourceInput) {
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
          resourceArn: this.__input.resourceArn,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.tags', props);
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
          resourceArn: this.__input.resourceArn,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodePipelineResponsesListWebhooks {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelineListWebhooksInput) {
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
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListWebhooks.webhooks', props);
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
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListWebhooks.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CodePipelineResponsesPollForJobs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelinePollForJobsInput) {
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
            category: this.__input.actionTypeId.category,
            owner: this.__input.actionTypeId.owner,
            provider: this.__input.actionTypeId.provider,
            version: this.__input.actionTypeId.version,
          },
          maxBatchSize: this.__input.maxBatchSize,
          queryParam: this.__input.queryParam,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PollForJobs.jobs', props);
    return resource.getResponseField('jobs') as unknown as shapes.CodePipelineJob[];
  }

}

export class CodePipelineResponsesPollForThirdPartyJobs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelinePollForThirdPartyJobsInput) {
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
            category: this.__input.actionTypeId.category,
            owner: this.__input.actionTypeId.owner,
            provider: this.__input.actionTypeId.provider,
            version: this.__input.actionTypeId.version,
          },
          maxBatchSize: this.__input.maxBatchSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PollForThirdPartyJobs.jobs', props);
    return resource.getResponseField('jobs') as unknown as shapes.CodePipelineThirdPartyJob[];
  }

}

export class CodePipelineResponsesPutActionRevision {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelinePutActionRevisionInput) {
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
          pipelineName: this.__input.pipelineName,
          stageName: this.__input.stageName,
          actionName: this.__input.actionName,
          actionRevision: {
            revisionId: this.__input.actionRevision.revisionId,
            revisionChangeId: this.__input.actionRevision.revisionChangeId,
            created: this.__input.actionRevision.created,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutActionRevision.newRevision', props);
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
          pipelineName: this.__input.pipelineName,
          stageName: this.__input.stageName,
          actionName: this.__input.actionName,
          actionRevision: {
            revisionId: this.__input.actionRevision.revisionId,
            revisionChangeId: this.__input.actionRevision.revisionChangeId,
            created: this.__input.actionRevision.created,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutActionRevision.pipelineExecutionId', props);
    return resource.getResponseField('pipelineExecutionId') as unknown as string;
  }

}

export class CodePipelineResponsesPutApprovalResult {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelinePutApprovalResultInput) {
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
          pipelineName: this.__input.pipelineName,
          stageName: this.__input.stageName,
          actionName: this.__input.actionName,
          result: {
            summary: this.__input.result.summary,
            status: this.__input.result.status,
          },
          token: this.__input.token,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutApprovalResult.approvedAt', props);
    return resource.getResponseField('approvedAt') as unknown as string;
  }

}

export class CodePipelineResponsesPutWebhook {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelinePutWebhookInput) {
  }

  public get webhook(): CodePipelineResponsesPutWebhookWebhook {
    return new CodePipelineResponsesPutWebhookWebhook(this.__scope, this.__resources, this.__input);
  }

}

export class CodePipelineResponsesPutWebhookWebhook {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelinePutWebhookInput) {
  }

  public get definition(): CodePipelineResponsesPutWebhookWebhookDefinition {
    return new CodePipelineResponsesPutWebhookWebhookDefinition(this.__scope, this.__resources, this.__input);
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
            name: this.__input.webhook.name,
            targetPipeline: this.__input.webhook.targetPipeline,
            targetAction: this.__input.webhook.targetAction,
            filters: this.__input.webhook.filters,
            authentication: this.__input.webhook.authentication,
            authenticationConfiguration: {
              AllowedIPRange: this.__input.webhook.authenticationConfiguration.allowedIpRange,
              SecretToken: this.__input.webhook.authenticationConfiguration.secretToken,
            },
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutWebhook.webhook.url', props);
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
            name: this.__input.webhook.name,
            targetPipeline: this.__input.webhook.targetPipeline,
            targetAction: this.__input.webhook.targetAction,
            filters: this.__input.webhook.filters,
            authentication: this.__input.webhook.authentication,
            authenticationConfiguration: {
              AllowedIPRange: this.__input.webhook.authenticationConfiguration.allowedIpRange,
              SecretToken: this.__input.webhook.authenticationConfiguration.secretToken,
            },
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutWebhook.webhook.errorMessage', props);
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
            name: this.__input.webhook.name,
            targetPipeline: this.__input.webhook.targetPipeline,
            targetAction: this.__input.webhook.targetAction,
            filters: this.__input.webhook.filters,
            authentication: this.__input.webhook.authentication,
            authenticationConfiguration: {
              AllowedIPRange: this.__input.webhook.authenticationConfiguration.allowedIpRange,
              SecretToken: this.__input.webhook.authenticationConfiguration.secretToken,
            },
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutWebhook.webhook.errorCode', props);
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
            name: this.__input.webhook.name,
            targetPipeline: this.__input.webhook.targetPipeline,
            targetAction: this.__input.webhook.targetAction,
            filters: this.__input.webhook.filters,
            authentication: this.__input.webhook.authentication,
            authenticationConfiguration: {
              AllowedIPRange: this.__input.webhook.authenticationConfiguration.allowedIpRange,
              SecretToken: this.__input.webhook.authenticationConfiguration.secretToken,
            },
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutWebhook.webhook.lastTriggered', props);
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
            name: this.__input.webhook.name,
            targetPipeline: this.__input.webhook.targetPipeline,
            targetAction: this.__input.webhook.targetAction,
            filters: this.__input.webhook.filters,
            authentication: this.__input.webhook.authentication,
            authenticationConfiguration: {
              AllowedIPRange: this.__input.webhook.authenticationConfiguration.allowedIpRange,
              SecretToken: this.__input.webhook.authenticationConfiguration.secretToken,
            },
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutWebhook.webhook.arn', props);
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
            name: this.__input.webhook.name,
            targetPipeline: this.__input.webhook.targetPipeline,
            targetAction: this.__input.webhook.targetAction,
            filters: this.__input.webhook.filters,
            authentication: this.__input.webhook.authentication,
            authenticationConfiguration: {
              AllowedIPRange: this.__input.webhook.authenticationConfiguration.allowedIpRange,
              SecretToken: this.__input.webhook.authenticationConfiguration.secretToken,
            },
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutWebhook.webhook.tags', props);
    return resource.getResponseField('webhook.tags') as unknown as shapes.CodePipelineTag[];
  }

}

export class CodePipelineResponsesPutWebhookWebhookDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelinePutWebhookInput) {
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
            name: this.__input.webhook.name,
            targetPipeline: this.__input.webhook.targetPipeline,
            targetAction: this.__input.webhook.targetAction,
            filters: this.__input.webhook.filters,
            authentication: this.__input.webhook.authentication,
            authenticationConfiguration: {
              AllowedIPRange: this.__input.webhook.authenticationConfiguration.allowedIpRange,
              SecretToken: this.__input.webhook.authenticationConfiguration.secretToken,
            },
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutWebhook.webhook.definition.name', props);
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
            name: this.__input.webhook.name,
            targetPipeline: this.__input.webhook.targetPipeline,
            targetAction: this.__input.webhook.targetAction,
            filters: this.__input.webhook.filters,
            authentication: this.__input.webhook.authentication,
            authenticationConfiguration: {
              AllowedIPRange: this.__input.webhook.authenticationConfiguration.allowedIpRange,
              SecretToken: this.__input.webhook.authenticationConfiguration.secretToken,
            },
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutWebhook.webhook.definition.targetPipeline', props);
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
            name: this.__input.webhook.name,
            targetPipeline: this.__input.webhook.targetPipeline,
            targetAction: this.__input.webhook.targetAction,
            filters: this.__input.webhook.filters,
            authentication: this.__input.webhook.authentication,
            authenticationConfiguration: {
              AllowedIPRange: this.__input.webhook.authenticationConfiguration.allowedIpRange,
              SecretToken: this.__input.webhook.authenticationConfiguration.secretToken,
            },
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutWebhook.webhook.definition.targetAction', props);
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
            name: this.__input.webhook.name,
            targetPipeline: this.__input.webhook.targetPipeline,
            targetAction: this.__input.webhook.targetAction,
            filters: this.__input.webhook.filters,
            authentication: this.__input.webhook.authentication,
            authenticationConfiguration: {
              AllowedIPRange: this.__input.webhook.authenticationConfiguration.allowedIpRange,
              SecretToken: this.__input.webhook.authenticationConfiguration.secretToken,
            },
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutWebhook.webhook.definition.filters', props);
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
            name: this.__input.webhook.name,
            targetPipeline: this.__input.webhook.targetPipeline,
            targetAction: this.__input.webhook.targetAction,
            filters: this.__input.webhook.filters,
            authentication: this.__input.webhook.authentication,
            authenticationConfiguration: {
              AllowedIPRange: this.__input.webhook.authenticationConfiguration.allowedIpRange,
              SecretToken: this.__input.webhook.authenticationConfiguration.secretToken,
            },
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutWebhook.webhook.definition.authentication', props);
    return resource.getResponseField('webhook.definition.authentication') as unknown as string;
  }

  public get authenticationConfiguration(): CodePipelineResponsesPutWebhookWebhookDefinitionAuthenticationConfiguration {
    return new CodePipelineResponsesPutWebhookWebhookDefinitionAuthenticationConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class CodePipelineResponsesPutWebhookWebhookDefinitionAuthenticationConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelinePutWebhookInput) {
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
            name: this.__input.webhook.name,
            targetPipeline: this.__input.webhook.targetPipeline,
            targetAction: this.__input.webhook.targetAction,
            filters: this.__input.webhook.filters,
            authentication: this.__input.webhook.authentication,
            authenticationConfiguration: {
              AllowedIPRange: this.__input.webhook.authenticationConfiguration.allowedIpRange,
              SecretToken: this.__input.webhook.authenticationConfiguration.secretToken,
            },
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutWebhook.webhook.definition.authenticationConfiguration.AllowedIPRange', props);
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
            name: this.__input.webhook.name,
            targetPipeline: this.__input.webhook.targetPipeline,
            targetAction: this.__input.webhook.targetAction,
            filters: this.__input.webhook.filters,
            authentication: this.__input.webhook.authentication,
            authenticationConfiguration: {
              AllowedIPRange: this.__input.webhook.authenticationConfiguration.allowedIpRange,
              SecretToken: this.__input.webhook.authenticationConfiguration.secretToken,
            },
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutWebhook.webhook.definition.authenticationConfiguration.SecretToken', props);
    return resource.getResponseField('webhook.definition.authenticationConfiguration.SecretToken') as unknown as string;
  }

}

export class CodePipelineResponsesRetryStageExecution {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelineRetryStageExecutionInput) {
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
          pipelineName: this.__input.pipelineName,
          stageName: this.__input.stageName,
          pipelineExecutionId: this.__input.pipelineExecutionId,
          retryMode: this.__input.retryMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RetryStageExecution.pipelineExecutionId', props);
    return resource.getResponseField('pipelineExecutionId') as unknown as string;
  }

}

export class CodePipelineResponsesStartPipelineExecution {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelineStartPipelineExecutionInput) {
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
          name: this.__input.name,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartPipelineExecution.pipelineExecutionId', props);
    return resource.getResponseField('pipelineExecutionId') as unknown as string;
  }

}

export class CodePipelineResponsesStopPipelineExecution {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelineStopPipelineExecutionInput) {
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
          pipelineName: this.__input.pipelineName,
          pipelineExecutionId: this.__input.pipelineExecutionId,
          abandon: this.__input.abandon,
          reason: this.__input.reason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopPipelineExecution.pipelineExecutionId', props);
    return resource.getResponseField('pipelineExecutionId') as unknown as string;
  }

}

export class CodePipelineResponsesUpdatePipeline {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelineUpdatePipelineInput) {
  }

  public get pipeline(): CodePipelineResponsesUpdatePipelinePipeline {
    return new CodePipelineResponsesUpdatePipelinePipeline(this.__scope, this.__resources, this.__input);
  }

}

export class CodePipelineResponsesUpdatePipelinePipeline {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelineUpdatePipelineInput) {
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
            name: this.__input.pipeline.name,
            roleArn: this.__input.pipeline.roleArn,
            artifactStore: {
              type: this.__input.pipeline.artifactStore?.type,
              location: this.__input.pipeline.artifactStore?.location,
              encryptionKey: {
                id: this.__input.pipeline.artifactStore?.encryptionKey?.id,
                type: this.__input.pipeline.artifactStore?.encryptionKey?.type,
              },
            },
            artifactStores: this.__input.pipeline.artifactStores,
            stages: this.__input.pipeline.stages,
            version: this.__input.pipeline.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePipeline.pipeline.name', props);
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
            name: this.__input.pipeline.name,
            roleArn: this.__input.pipeline.roleArn,
            artifactStore: {
              type: this.__input.pipeline.artifactStore?.type,
              location: this.__input.pipeline.artifactStore?.location,
              encryptionKey: {
                id: this.__input.pipeline.artifactStore?.encryptionKey?.id,
                type: this.__input.pipeline.artifactStore?.encryptionKey?.type,
              },
            },
            artifactStores: this.__input.pipeline.artifactStores,
            stages: this.__input.pipeline.stages,
            version: this.__input.pipeline.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePipeline.pipeline.roleArn', props);
    return resource.getResponseField('pipeline.roleArn') as unknown as string;
  }

  public get artifactStore(): CodePipelineResponsesUpdatePipelinePipelineArtifactStore {
    return new CodePipelineResponsesUpdatePipelinePipelineArtifactStore(this.__scope, this.__resources, this.__input);
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
            name: this.__input.pipeline.name,
            roleArn: this.__input.pipeline.roleArn,
            artifactStore: {
              type: this.__input.pipeline.artifactStore?.type,
              location: this.__input.pipeline.artifactStore?.location,
              encryptionKey: {
                id: this.__input.pipeline.artifactStore?.encryptionKey?.id,
                type: this.__input.pipeline.artifactStore?.encryptionKey?.type,
              },
            },
            artifactStores: this.__input.pipeline.artifactStores,
            stages: this.__input.pipeline.stages,
            version: this.__input.pipeline.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePipeline.pipeline.artifactStores', props);
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
            name: this.__input.pipeline.name,
            roleArn: this.__input.pipeline.roleArn,
            artifactStore: {
              type: this.__input.pipeline.artifactStore?.type,
              location: this.__input.pipeline.artifactStore?.location,
              encryptionKey: {
                id: this.__input.pipeline.artifactStore?.encryptionKey?.id,
                type: this.__input.pipeline.artifactStore?.encryptionKey?.type,
              },
            },
            artifactStores: this.__input.pipeline.artifactStores,
            stages: this.__input.pipeline.stages,
            version: this.__input.pipeline.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePipeline.pipeline.stages', props);
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
            name: this.__input.pipeline.name,
            roleArn: this.__input.pipeline.roleArn,
            artifactStore: {
              type: this.__input.pipeline.artifactStore?.type,
              location: this.__input.pipeline.artifactStore?.location,
              encryptionKey: {
                id: this.__input.pipeline.artifactStore?.encryptionKey?.id,
                type: this.__input.pipeline.artifactStore?.encryptionKey?.type,
              },
            },
            artifactStores: this.__input.pipeline.artifactStores,
            stages: this.__input.pipeline.stages,
            version: this.__input.pipeline.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePipeline.pipeline.version', props);
    return resource.getResponseField('pipeline.version') as unknown as number;
  }

}

export class CodePipelineResponsesUpdatePipelinePipelineArtifactStore {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelineUpdatePipelineInput) {
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
            name: this.__input.pipeline.name,
            roleArn: this.__input.pipeline.roleArn,
            artifactStore: {
              type: this.__input.pipeline.artifactStore?.type,
              location: this.__input.pipeline.artifactStore?.location,
              encryptionKey: {
                id: this.__input.pipeline.artifactStore?.encryptionKey?.id,
                type: this.__input.pipeline.artifactStore?.encryptionKey?.type,
              },
            },
            artifactStores: this.__input.pipeline.artifactStores,
            stages: this.__input.pipeline.stages,
            version: this.__input.pipeline.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePipeline.pipeline.artifactStore.type', props);
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
            name: this.__input.pipeline.name,
            roleArn: this.__input.pipeline.roleArn,
            artifactStore: {
              type: this.__input.pipeline.artifactStore?.type,
              location: this.__input.pipeline.artifactStore?.location,
              encryptionKey: {
                id: this.__input.pipeline.artifactStore?.encryptionKey?.id,
                type: this.__input.pipeline.artifactStore?.encryptionKey?.type,
              },
            },
            artifactStores: this.__input.pipeline.artifactStores,
            stages: this.__input.pipeline.stages,
            version: this.__input.pipeline.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePipeline.pipeline.artifactStore.location', props);
    return resource.getResponseField('pipeline.artifactStore.location') as unknown as string;
  }

  public get encryptionKey(): CodePipelineResponsesUpdatePipelinePipelineArtifactStoreEncryptionKey {
    return new CodePipelineResponsesUpdatePipelinePipelineArtifactStoreEncryptionKey(this.__scope, this.__resources, this.__input);
  }

}

export class CodePipelineResponsesUpdatePipelinePipelineArtifactStoreEncryptionKey {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodePipelineUpdatePipelineInput) {
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
            name: this.__input.pipeline.name,
            roleArn: this.__input.pipeline.roleArn,
            artifactStore: {
              type: this.__input.pipeline.artifactStore?.type,
              location: this.__input.pipeline.artifactStore?.location,
              encryptionKey: {
                id: this.__input.pipeline.artifactStore?.encryptionKey?.id,
                type: this.__input.pipeline.artifactStore?.encryptionKey?.type,
              },
            },
            artifactStores: this.__input.pipeline.artifactStores,
            stages: this.__input.pipeline.stages,
            version: this.__input.pipeline.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePipeline.pipeline.artifactStore.encryptionKey.id', props);
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
            name: this.__input.pipeline.name,
            roleArn: this.__input.pipeline.roleArn,
            artifactStore: {
              type: this.__input.pipeline.artifactStore?.type,
              location: this.__input.pipeline.artifactStore?.location,
              encryptionKey: {
                id: this.__input.pipeline.artifactStore?.encryptionKey?.id,
                type: this.__input.pipeline.artifactStore?.encryptionKey?.type,
              },
            },
            artifactStores: this.__input.pipeline.artifactStores,
            stages: this.__input.pipeline.stages,
            version: this.__input.pipeline.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePipeline.pipeline.artifactStore.encryptionKey.type', props);
    return resource.getResponseField('pipeline.artifactStore.encryptionKey.type') as unknown as string;
  }

}

