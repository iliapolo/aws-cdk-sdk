import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class DataPipelineClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public activatePipeline(input: shapes.DataPipelineActivatePipelineInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'activatePipeline',
        service: 'DataPipeline',
        physicalResourceId: cr.PhysicalResourceId.of('DataPipeline.ActivatePipeline'),
        parameters: {
          pipelineId: input.pipelineId,
          parameterValues: input.parameterValues,
          startTimestamp: input.startTimestamp,
        },
      },
    };
    new cr.AwsCustomResource(this, 'ActivatePipeline', props);
  }

  public addTags(input: shapes.DataPipelineAddTagsInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addTags',
        service: 'DataPipeline',
        physicalResourceId: cr.PhysicalResourceId.of('DataPipeline.AddTags'),
        parameters: {
          pipelineId: input.pipelineId,
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AddTags', props);
  }

  public createPipeline(input: shapes.DataPipelineCreatePipelineInput): DataPipelineResponsesCreatePipeline {
    return new DataPipelineResponsesCreatePipeline(this, this.__resources, input);
  }

  public deactivatePipeline(input: shapes.DataPipelineDeactivatePipelineInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deactivatePipeline',
        service: 'DataPipeline',
        physicalResourceId: cr.PhysicalResourceId.of('DataPipeline.DeactivatePipeline'),
        parameters: {
          pipelineId: input.pipelineId,
          cancelActive: input.cancelActive,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeactivatePipeline', props);
  }

  public deletePipeline(input: shapes.DataPipelineDeletePipelineInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deletePipeline',
        service: 'DataPipeline',
        physicalResourceId: cr.PhysicalResourceId.of('DataPipeline.DeletePipeline'),
        parameters: {
          pipelineId: input.pipelineId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeletePipeline', props);
  }

  public describeObjects(input: shapes.DataPipelineDescribeObjectsInput): DataPipelineResponsesDescribeObjects {
    return new DataPipelineResponsesDescribeObjects(this, this.__resources, input);
  }

  public describePipelines(input: shapes.DataPipelineDescribePipelinesInput): DataPipelineResponsesDescribePipelines {
    return new DataPipelineResponsesDescribePipelines(this, this.__resources, input);
  }

  public evaluateExpression(input: shapes.DataPipelineEvaluateExpressionInput): DataPipelineResponsesEvaluateExpression {
    return new DataPipelineResponsesEvaluateExpression(this, this.__resources, input);
  }

  public fetchPipelineDefinition(input: shapes.DataPipelineGetPipelineDefinitionInput): DataPipelineResponsesFetchPipelineDefinition {
    return new DataPipelineResponsesFetchPipelineDefinition(this, this.__resources, input);
  }

  public listPipelines(input: shapes.DataPipelineListPipelinesInput): DataPipelineResponsesListPipelines {
    return new DataPipelineResponsesListPipelines(this, this.__resources, input);
  }

  public pollForTask(input: shapes.DataPipelinePollForTaskInput): DataPipelineResponsesPollForTask {
    return new DataPipelineResponsesPollForTask(this, this.__resources, input);
  }

  public putPipelineDefinition(input: shapes.DataPipelinePutPipelineDefinitionInput): DataPipelineResponsesPutPipelineDefinition {
    return new DataPipelineResponsesPutPipelineDefinition(this, this.__resources, input);
  }

  public queryObjects(input: shapes.DataPipelineQueryObjectsInput): DataPipelineResponsesQueryObjects {
    return new DataPipelineResponsesQueryObjects(this, this.__resources, input);
  }

  public removeTags(input: shapes.DataPipelineRemoveTagsInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'removeTags',
        service: 'DataPipeline',
        physicalResourceId: cr.PhysicalResourceId.of('DataPipeline.RemoveTags'),
        parameters: {
          pipelineId: input.pipelineId,
          tagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RemoveTags', props);
  }

  public reportTaskProgress(input: shapes.DataPipelineReportTaskProgressInput): DataPipelineResponsesReportTaskProgress {
    return new DataPipelineResponsesReportTaskProgress(this, this.__resources, input);
  }

  public reportTaskRunnerHeartbeat(input: shapes.DataPipelineReportTaskRunnerHeartbeatInput): DataPipelineResponsesReportTaskRunnerHeartbeat {
    return new DataPipelineResponsesReportTaskRunnerHeartbeat(this, this.__resources, input);
  }

  public setStatus(input: shapes.DataPipelineSetStatusInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'setStatus',
        service: 'DataPipeline',
        physicalResourceId: cr.PhysicalResourceId.of('DataPipeline.SetStatus'),
        parameters: {
          pipelineId: input.pipelineId,
          objectIds: input.objectIds,
          status: input.status,
        },
      },
    };
    new cr.AwsCustomResource(this, 'SetStatus', props);
  }

  public setTaskStatus(input: shapes.DataPipelineSetTaskStatusInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'setTaskStatus',
        service: 'DataPipeline',
        physicalResourceId: cr.PhysicalResourceId.of('DataPipeline.SetTaskStatus'),
        parameters: {
          taskId: input.taskId,
          taskStatus: input.taskStatus,
          errorId: input.errorId,
          errorMessage: input.errorMessage,
          errorStackTrace: input.errorStackTrace,
        },
      },
    };
    new cr.AwsCustomResource(this, 'SetTaskStatus', props);
  }

  public validatePipelineDefinition(input: shapes.DataPipelineValidatePipelineDefinitionInput): DataPipelineResponsesValidatePipelineDefinition {
    return new DataPipelineResponsesValidatePipelineDefinition(this, this.__resources, input);
  }

}

export class DataPipelineResponsesCreatePipeline {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataPipelineCreatePipelineInput) {
  }

  public get pipelineId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPipeline',
        service: 'DataPipeline',
        physicalResourceId: cr.PhysicalResourceId.of('DataPipeline.CreatePipeline.pipelineId'),
        outputPath: 'pipelineId',
        parameters: {
          name: this.__input.name,
          uniqueId: this.__input.uniqueId,
          description: this.__input.description,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePipeline.pipelineId', props);
    return resource.getResponseField('pipelineId') as unknown as string;
  }

}

export class DataPipelineResponsesDescribeObjects {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataPipelineDescribeObjectsInput) {
  }

  public get pipelineObjects(): shapes.DataPipelinePipelineObject[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeObjects',
        service: 'DataPipeline',
        physicalResourceId: cr.PhysicalResourceId.of('DataPipeline.DescribeObjects.pipelineObjects'),
        outputPath: 'pipelineObjects',
        parameters: {
          pipelineId: this.__input.pipelineId,
          objectIds: this.__input.objectIds,
          evaluateExpressions: this.__input.evaluateExpressions,
          marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeObjects.pipelineObjects', props);
    return resource.getResponseField('pipelineObjects') as unknown as shapes.DataPipelinePipelineObject[];
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeObjects',
        service: 'DataPipeline',
        physicalResourceId: cr.PhysicalResourceId.of('DataPipeline.DescribeObjects.marker'),
        outputPath: 'marker',
        parameters: {
          pipelineId: this.__input.pipelineId,
          objectIds: this.__input.objectIds,
          evaluateExpressions: this.__input.evaluateExpressions,
          marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeObjects.marker', props);
    return resource.getResponseField('marker') as unknown as string;
  }

  public get hasMoreResults(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeObjects',
        service: 'DataPipeline',
        physicalResourceId: cr.PhysicalResourceId.of('DataPipeline.DescribeObjects.hasMoreResults'),
        outputPath: 'hasMoreResults',
        parameters: {
          pipelineId: this.__input.pipelineId,
          objectIds: this.__input.objectIds,
          evaluateExpressions: this.__input.evaluateExpressions,
          marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeObjects.hasMoreResults', props);
    return resource.getResponseField('hasMoreResults') as unknown as boolean;
  }

}

export class DataPipelineResponsesDescribePipelines {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataPipelineDescribePipelinesInput) {
  }

  public get pipelineDescriptionList(): shapes.DataPipelinePipelineDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePipelines',
        service: 'DataPipeline',
        physicalResourceId: cr.PhysicalResourceId.of('DataPipeline.DescribePipelines.pipelineDescriptionList'),
        outputPath: 'pipelineDescriptionList',
        parameters: {
          pipelineIds: this.__input.pipelineIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePipelines.pipelineDescriptionList', props);
    return resource.getResponseField('pipelineDescriptionList') as unknown as shapes.DataPipelinePipelineDescription[];
  }

}

export class DataPipelineResponsesEvaluateExpression {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataPipelineEvaluateExpressionInput) {
  }

  public get evaluatedExpression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'evaluateExpression',
        service: 'DataPipeline',
        physicalResourceId: cr.PhysicalResourceId.of('DataPipeline.EvaluateExpression.evaluatedExpression'),
        outputPath: 'evaluatedExpression',
        parameters: {
          pipelineId: this.__input.pipelineId,
          objectId: this.__input.objectId,
          expression: this.__input.expression,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'EvaluateExpression.evaluatedExpression', props);
    return resource.getResponseField('evaluatedExpression') as unknown as string;
  }

}

export class DataPipelineResponsesFetchPipelineDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataPipelineGetPipelineDefinitionInput) {
  }

  public get pipelineObjects(): shapes.DataPipelinePipelineObject[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPipelineDefinition',
        service: 'DataPipeline',
        physicalResourceId: cr.PhysicalResourceId.of('DataPipeline.GetPipelineDefinition.pipelineObjects'),
        outputPath: 'pipelineObjects',
        parameters: {
          pipelineId: this.__input.pipelineId,
          version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPipelineDefinition.pipelineObjects', props);
    return resource.getResponseField('pipelineObjects') as unknown as shapes.DataPipelinePipelineObject[];
  }

  public get parameterObjects(): shapes.DataPipelineParameterObject[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPipelineDefinition',
        service: 'DataPipeline',
        physicalResourceId: cr.PhysicalResourceId.of('DataPipeline.GetPipelineDefinition.parameterObjects'),
        outputPath: 'parameterObjects',
        parameters: {
          pipelineId: this.__input.pipelineId,
          version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPipelineDefinition.parameterObjects', props);
    return resource.getResponseField('parameterObjects') as unknown as shapes.DataPipelineParameterObject[];
  }

  public get parameterValues(): shapes.DataPipelineParameterValue[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPipelineDefinition',
        service: 'DataPipeline',
        physicalResourceId: cr.PhysicalResourceId.of('DataPipeline.GetPipelineDefinition.parameterValues'),
        outputPath: 'parameterValues',
        parameters: {
          pipelineId: this.__input.pipelineId,
          version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPipelineDefinition.parameterValues', props);
    return resource.getResponseField('parameterValues') as unknown as shapes.DataPipelineParameterValue[];
  }

}

export class DataPipelineResponsesListPipelines {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataPipelineListPipelinesInput) {
  }

  public get pipelineIdList(): shapes.DataPipelinePipelineIdName[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPipelines',
        service: 'DataPipeline',
        physicalResourceId: cr.PhysicalResourceId.of('DataPipeline.ListPipelines.pipelineIdList'),
        outputPath: 'pipelineIdList',
        parameters: {
          marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPipelines.pipelineIdList', props);
    return resource.getResponseField('pipelineIdList') as unknown as shapes.DataPipelinePipelineIdName[];
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPipelines',
        service: 'DataPipeline',
        physicalResourceId: cr.PhysicalResourceId.of('DataPipeline.ListPipelines.marker'),
        outputPath: 'marker',
        parameters: {
          marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPipelines.marker', props);
    return resource.getResponseField('marker') as unknown as string;
  }

  public get hasMoreResults(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPipelines',
        service: 'DataPipeline',
        physicalResourceId: cr.PhysicalResourceId.of('DataPipeline.ListPipelines.hasMoreResults'),
        outputPath: 'hasMoreResults',
        parameters: {
          marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPipelines.hasMoreResults', props);
    return resource.getResponseField('hasMoreResults') as unknown as boolean;
  }

}

export class DataPipelineResponsesPollForTask {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataPipelinePollForTaskInput) {
  }

  public get taskObject(): DataPipelineResponsesPollForTaskTaskObject {
    return new DataPipelineResponsesPollForTaskTaskObject(this.__scope, this.__resources, this.__input);
  }

}

export class DataPipelineResponsesPollForTaskTaskObject {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataPipelinePollForTaskInput) {
  }

  public get taskId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'pollForTask',
        service: 'DataPipeline',
        physicalResourceId: cr.PhysicalResourceId.of('DataPipeline.PollForTask.taskObject.taskId'),
        outputPath: 'taskObject.taskId',
        parameters: {
          workerGroup: this.__input.workerGroup,
          hostname: this.__input.hostname,
          instanceIdentity: {
            document: this.__input.instanceIdentity?.document,
            signature: this.__input.instanceIdentity?.signature,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PollForTask.taskObject.taskId', props);
    return resource.getResponseField('taskObject.taskId') as unknown as string;
  }

  public get pipelineId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'pollForTask',
        service: 'DataPipeline',
        physicalResourceId: cr.PhysicalResourceId.of('DataPipeline.PollForTask.taskObject.pipelineId'),
        outputPath: 'taskObject.pipelineId',
        parameters: {
          workerGroup: this.__input.workerGroup,
          hostname: this.__input.hostname,
          instanceIdentity: {
            document: this.__input.instanceIdentity?.document,
            signature: this.__input.instanceIdentity?.signature,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PollForTask.taskObject.pipelineId', props);
    return resource.getResponseField('taskObject.pipelineId') as unknown as string;
  }

  public get attemptId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'pollForTask',
        service: 'DataPipeline',
        physicalResourceId: cr.PhysicalResourceId.of('DataPipeline.PollForTask.taskObject.attemptId'),
        outputPath: 'taskObject.attemptId',
        parameters: {
          workerGroup: this.__input.workerGroup,
          hostname: this.__input.hostname,
          instanceIdentity: {
            document: this.__input.instanceIdentity?.document,
            signature: this.__input.instanceIdentity?.signature,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PollForTask.taskObject.attemptId', props);
    return resource.getResponseField('taskObject.attemptId') as unknown as string;
  }

  public get objects(): Record<string, shapes.DataPipelinePipelineObject> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'pollForTask',
        service: 'DataPipeline',
        physicalResourceId: cr.PhysicalResourceId.of('DataPipeline.PollForTask.taskObject.objects'),
        outputPath: 'taskObject.objects',
        parameters: {
          workerGroup: this.__input.workerGroup,
          hostname: this.__input.hostname,
          instanceIdentity: {
            document: this.__input.instanceIdentity?.document,
            signature: this.__input.instanceIdentity?.signature,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PollForTask.taskObject.objects', props);
    return resource.getResponseField('taskObject.objects') as unknown as Record<string, shapes.DataPipelinePipelineObject>;
  }

}

export class DataPipelineResponsesPutPipelineDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataPipelinePutPipelineDefinitionInput) {
  }

  public get validationErrors(): shapes.DataPipelineValidationError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putPipelineDefinition',
        service: 'DataPipeline',
        physicalResourceId: cr.PhysicalResourceId.of('DataPipeline.PutPipelineDefinition.validationErrors'),
        outputPath: 'validationErrors',
        parameters: {
          pipelineId: this.__input.pipelineId,
          pipelineObjects: this.__input.pipelineObjects,
          parameterObjects: this.__input.parameterObjects,
          parameterValues: this.__input.parameterValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutPipelineDefinition.validationErrors', props);
    return resource.getResponseField('validationErrors') as unknown as shapes.DataPipelineValidationError[];
  }

  public get validationWarnings(): shapes.DataPipelineValidationWarning[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putPipelineDefinition',
        service: 'DataPipeline',
        physicalResourceId: cr.PhysicalResourceId.of('DataPipeline.PutPipelineDefinition.validationWarnings'),
        outputPath: 'validationWarnings',
        parameters: {
          pipelineId: this.__input.pipelineId,
          pipelineObjects: this.__input.pipelineObjects,
          parameterObjects: this.__input.parameterObjects,
          parameterValues: this.__input.parameterValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutPipelineDefinition.validationWarnings', props);
    return resource.getResponseField('validationWarnings') as unknown as shapes.DataPipelineValidationWarning[];
  }

  public get errored(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putPipelineDefinition',
        service: 'DataPipeline',
        physicalResourceId: cr.PhysicalResourceId.of('DataPipeline.PutPipelineDefinition.errored'),
        outputPath: 'errored',
        parameters: {
          pipelineId: this.__input.pipelineId,
          pipelineObjects: this.__input.pipelineObjects,
          parameterObjects: this.__input.parameterObjects,
          parameterValues: this.__input.parameterValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutPipelineDefinition.errored', props);
    return resource.getResponseField('errored') as unknown as boolean;
  }

}

export class DataPipelineResponsesQueryObjects {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataPipelineQueryObjectsInput) {
  }

  public get ids(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'queryObjects',
        service: 'DataPipeline',
        physicalResourceId: cr.PhysicalResourceId.of('DataPipeline.QueryObjects.ids'),
        outputPath: 'ids',
        parameters: {
          pipelineId: this.__input.pipelineId,
          query: {
            selectors: this.__input.query?.selectors,
          },
          sphere: this.__input.sphere,
          marker: this.__input.marker,
          limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'QueryObjects.ids', props);
    return resource.getResponseField('ids') as unknown as string[];
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'queryObjects',
        service: 'DataPipeline',
        physicalResourceId: cr.PhysicalResourceId.of('DataPipeline.QueryObjects.marker'),
        outputPath: 'marker',
        parameters: {
          pipelineId: this.__input.pipelineId,
          query: {
            selectors: this.__input.query?.selectors,
          },
          sphere: this.__input.sphere,
          marker: this.__input.marker,
          limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'QueryObjects.marker', props);
    return resource.getResponseField('marker') as unknown as string;
  }

  public get hasMoreResults(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'queryObjects',
        service: 'DataPipeline',
        physicalResourceId: cr.PhysicalResourceId.of('DataPipeline.QueryObjects.hasMoreResults'),
        outputPath: 'hasMoreResults',
        parameters: {
          pipelineId: this.__input.pipelineId,
          query: {
            selectors: this.__input.query?.selectors,
          },
          sphere: this.__input.sphere,
          marker: this.__input.marker,
          limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'QueryObjects.hasMoreResults', props);
    return resource.getResponseField('hasMoreResults') as unknown as boolean;
  }

}

export class DataPipelineResponsesReportTaskProgress {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataPipelineReportTaskProgressInput) {
  }

  public get canceled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'reportTaskProgress',
        service: 'DataPipeline',
        physicalResourceId: cr.PhysicalResourceId.of('DataPipeline.ReportTaskProgress.canceled'),
        outputPath: 'canceled',
        parameters: {
          taskId: this.__input.taskId,
          fields: this.__input.fields,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReportTaskProgress.canceled', props);
    return resource.getResponseField('canceled') as unknown as boolean;
  }

}

export class DataPipelineResponsesReportTaskRunnerHeartbeat {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataPipelineReportTaskRunnerHeartbeatInput) {
  }

  public get terminate(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'reportTaskRunnerHeartbeat',
        service: 'DataPipeline',
        physicalResourceId: cr.PhysicalResourceId.of('DataPipeline.ReportTaskRunnerHeartbeat.terminate'),
        outputPath: 'terminate',
        parameters: {
          taskrunnerId: this.__input.taskrunnerId,
          workerGroup: this.__input.workerGroup,
          hostname: this.__input.hostname,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReportTaskRunnerHeartbeat.terminate', props);
    return resource.getResponseField('terminate') as unknown as boolean;
  }

}

export class DataPipelineResponsesValidatePipelineDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataPipelineValidatePipelineDefinitionInput) {
  }

  public get validationErrors(): shapes.DataPipelineValidationError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'validatePipelineDefinition',
        service: 'DataPipeline',
        physicalResourceId: cr.PhysicalResourceId.of('DataPipeline.ValidatePipelineDefinition.validationErrors'),
        outputPath: 'validationErrors',
        parameters: {
          pipelineId: this.__input.pipelineId,
          pipelineObjects: this.__input.pipelineObjects,
          parameterObjects: this.__input.parameterObjects,
          parameterValues: this.__input.parameterValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ValidatePipelineDefinition.validationErrors', props);
    return resource.getResponseField('validationErrors') as unknown as shapes.DataPipelineValidationError[];
  }

  public get validationWarnings(): shapes.DataPipelineValidationWarning[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'validatePipelineDefinition',
        service: 'DataPipeline',
        physicalResourceId: cr.PhysicalResourceId.of('DataPipeline.ValidatePipelineDefinition.validationWarnings'),
        outputPath: 'validationWarnings',
        parameters: {
          pipelineId: this.__input.pipelineId,
          pipelineObjects: this.__input.pipelineObjects,
          parameterObjects: this.__input.parameterObjects,
          parameterValues: this.__input.parameterValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ValidatePipelineDefinition.validationWarnings', props);
    return resource.getResponseField('validationWarnings') as unknown as shapes.DataPipelineValidationWarning[];
  }

  public get errored(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'validatePipelineDefinition',
        service: 'DataPipeline',
        physicalResourceId: cr.PhysicalResourceId.of('DataPipeline.ValidatePipelineDefinition.errored'),
        outputPath: 'errored',
        parameters: {
          pipelineId: this.__input.pipelineId,
          pipelineObjects: this.__input.pipelineObjects,
          parameterObjects: this.__input.parameterObjects,
          parameterValues: this.__input.parameterValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ValidatePipelineDefinition.errored', props);
    return resource.getResponseField('errored') as unknown as boolean;
  }

}

