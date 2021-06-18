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

  public createPipeline(input: shapes.DataPipelineCreatePipelineInput): DataPipelineCreatePipeline {
    return new DataPipelineCreatePipeline(this, 'CreatePipeline', this.__resources, input);
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

  public describeObjects(input: shapes.DataPipelineDescribeObjectsInput): DataPipelineDescribeObjects {
    return new DataPipelineDescribeObjects(this, 'DescribeObjects', this.__resources, input);
  }

  public describePipelines(input: shapes.DataPipelineDescribePipelinesInput): DataPipelineDescribePipelines {
    return new DataPipelineDescribePipelines(this, 'DescribePipelines', this.__resources, input);
  }

  public evaluateExpression(input: shapes.DataPipelineEvaluateExpressionInput): DataPipelineEvaluateExpression {
    return new DataPipelineEvaluateExpression(this, 'EvaluateExpression', this.__resources, input);
  }

  public fetchPipelineDefinition(input: shapes.DataPipelineGetPipelineDefinitionInput): DataPipelineFetchPipelineDefinition {
    return new DataPipelineFetchPipelineDefinition(this, 'FetchPipelineDefinition', this.__resources, input);
  }

  public listPipelines(input: shapes.DataPipelineListPipelinesInput): DataPipelineListPipelines {
    return new DataPipelineListPipelines(this, 'ListPipelines', this.__resources, input);
  }

  public pollForTask(input: shapes.DataPipelinePollForTaskInput): DataPipelinePollForTask {
    return new DataPipelinePollForTask(this, 'PollForTask', this.__resources, input);
  }

  public putPipelineDefinition(input: shapes.DataPipelinePutPipelineDefinitionInput): DataPipelinePutPipelineDefinition {
    return new DataPipelinePutPipelineDefinition(this, 'PutPipelineDefinition', this.__resources, input);
  }

  public queryObjects(input: shapes.DataPipelineQueryObjectsInput): DataPipelineQueryObjects {
    return new DataPipelineQueryObjects(this, 'QueryObjects', this.__resources, input);
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

  public reportTaskProgress(input: shapes.DataPipelineReportTaskProgressInput): DataPipelineReportTaskProgress {
    return new DataPipelineReportTaskProgress(this, 'ReportTaskProgress', this.__resources, input);
  }

  public reportTaskRunnerHeartbeat(input: shapes.DataPipelineReportTaskRunnerHeartbeatInput): DataPipelineReportTaskRunnerHeartbeat {
    return new DataPipelineReportTaskRunnerHeartbeat(this, 'ReportTaskRunnerHeartbeat', this.__resources, input);
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

  public validatePipelineDefinition(input: shapes.DataPipelineValidatePipelineDefinitionInput): DataPipelineValidatePipelineDefinition {
    return new DataPipelineValidatePipelineDefinition(this, 'ValidatePipelineDefinition', this.__resources, input);
  }

}

export class DataPipelineCreatePipeline extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataPipelineCreatePipelineInput) {
    super(scope, id);
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
          name: this.input.name,
          uniqueId: this.input.uniqueId,
          description: this.input.description,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePipeline.pipelineId', props);
    return resource.getResponseField('pipelineId') as unknown as string;
  }

}

export class DataPipelineDescribeObjects extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataPipelineDescribeObjectsInput) {
    super(scope, id);
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
          pipelineId: this.input.pipelineId,
          objectIds: this.input.objectIds,
          evaluateExpressions: this.input.evaluateExpressions,
          marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeObjects.pipelineObjects', props);
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
          pipelineId: this.input.pipelineId,
          objectIds: this.input.objectIds,
          evaluateExpressions: this.input.evaluateExpressions,
          marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeObjects.marker', props);
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
          pipelineId: this.input.pipelineId,
          objectIds: this.input.objectIds,
          evaluateExpressions: this.input.evaluateExpressions,
          marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeObjects.hasMoreResults', props);
    return resource.getResponseField('hasMoreResults') as unknown as boolean;
  }

}

export class DataPipelineDescribePipelines extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataPipelineDescribePipelinesInput) {
    super(scope, id);
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
          pipelineIds: this.input.pipelineIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePipelines.pipelineDescriptionList', props);
    return resource.getResponseField('pipelineDescriptionList') as unknown as shapes.DataPipelinePipelineDescription[];
  }

}

export class DataPipelineEvaluateExpression extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataPipelineEvaluateExpressionInput) {
    super(scope, id);
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
          pipelineId: this.input.pipelineId,
          objectId: this.input.objectId,
          expression: this.input.expression,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'EvaluateExpression.evaluatedExpression', props);
    return resource.getResponseField('evaluatedExpression') as unknown as string;
  }

}

export class DataPipelineFetchPipelineDefinition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataPipelineGetPipelineDefinitionInput) {
    super(scope, id);
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
          pipelineId: this.input.pipelineId,
          version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPipelineDefinition.pipelineObjects', props);
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
          pipelineId: this.input.pipelineId,
          version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPipelineDefinition.parameterObjects', props);
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
          pipelineId: this.input.pipelineId,
          version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPipelineDefinition.parameterValues', props);
    return resource.getResponseField('parameterValues') as unknown as shapes.DataPipelineParameterValue[];
  }

}

export class DataPipelineListPipelines extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataPipelineListPipelinesInput) {
    super(scope, id);
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
          marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPipelines.pipelineIdList', props);
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
          marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPipelines.marker', props);
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
          marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPipelines.hasMoreResults', props);
    return resource.getResponseField('hasMoreResults') as unknown as boolean;
  }

}

export class DataPipelinePollForTask extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataPipelinePollForTaskInput) {
    super(scope, id);
  }

  public get taskObject(): DataPipelinePollForTaskTaskObject {
    return new DataPipelinePollForTaskTaskObject(this, 'TaskObject', this.__resources, this.input);
  }

}

export class DataPipelinePollForTaskTaskObject extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataPipelinePollForTaskInput) {
    super(scope, id);
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
          workerGroup: this.input.workerGroup,
          hostname: this.input.hostname,
          instanceIdentity: {
            document: this.input.instanceIdentity?.document,
            signature: this.input.instanceIdentity?.signature,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PollForTask.taskObject.taskId', props);
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
          workerGroup: this.input.workerGroup,
          hostname: this.input.hostname,
          instanceIdentity: {
            document: this.input.instanceIdentity?.document,
            signature: this.input.instanceIdentity?.signature,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PollForTask.taskObject.pipelineId', props);
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
          workerGroup: this.input.workerGroup,
          hostname: this.input.hostname,
          instanceIdentity: {
            document: this.input.instanceIdentity?.document,
            signature: this.input.instanceIdentity?.signature,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PollForTask.taskObject.attemptId', props);
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
          workerGroup: this.input.workerGroup,
          hostname: this.input.hostname,
          instanceIdentity: {
            document: this.input.instanceIdentity?.document,
            signature: this.input.instanceIdentity?.signature,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PollForTask.taskObject.objects', props);
    return resource.getResponseField('taskObject.objects') as unknown as Record<string, shapes.DataPipelinePipelineObject>;
  }

}

export class DataPipelinePutPipelineDefinition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataPipelinePutPipelineDefinitionInput) {
    super(scope, id);
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
          pipelineId: this.input.pipelineId,
          pipelineObjects: this.input.pipelineObjects,
          parameterObjects: this.input.parameterObjects,
          parameterValues: this.input.parameterValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutPipelineDefinition.validationErrors', props);
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
          pipelineId: this.input.pipelineId,
          pipelineObjects: this.input.pipelineObjects,
          parameterObjects: this.input.parameterObjects,
          parameterValues: this.input.parameterValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutPipelineDefinition.validationWarnings', props);
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
          pipelineId: this.input.pipelineId,
          pipelineObjects: this.input.pipelineObjects,
          parameterObjects: this.input.parameterObjects,
          parameterValues: this.input.parameterValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutPipelineDefinition.errored', props);
    return resource.getResponseField('errored') as unknown as boolean;
  }

}

export class DataPipelineQueryObjects extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataPipelineQueryObjectsInput) {
    super(scope, id);
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
          pipelineId: this.input.pipelineId,
          query: {
            selectors: this.input.query?.selectors,
          },
          sphere: this.input.sphere,
          marker: this.input.marker,
          limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'QueryObjects.ids', props);
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
          pipelineId: this.input.pipelineId,
          query: {
            selectors: this.input.query?.selectors,
          },
          sphere: this.input.sphere,
          marker: this.input.marker,
          limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'QueryObjects.marker', props);
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
          pipelineId: this.input.pipelineId,
          query: {
            selectors: this.input.query?.selectors,
          },
          sphere: this.input.sphere,
          marker: this.input.marker,
          limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'QueryObjects.hasMoreResults', props);
    return resource.getResponseField('hasMoreResults') as unknown as boolean;
  }

}

export class DataPipelineReportTaskProgress extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataPipelineReportTaskProgressInput) {
    super(scope, id);
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
          taskId: this.input.taskId,
          fields: this.input.fields,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReportTaskProgress.canceled', props);
    return resource.getResponseField('canceled') as unknown as boolean;
  }

}

export class DataPipelineReportTaskRunnerHeartbeat extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataPipelineReportTaskRunnerHeartbeatInput) {
    super(scope, id);
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
          taskrunnerId: this.input.taskrunnerId,
          workerGroup: this.input.workerGroup,
          hostname: this.input.hostname,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReportTaskRunnerHeartbeat.terminate', props);
    return resource.getResponseField('terminate') as unknown as boolean;
  }

}

export class DataPipelineValidatePipelineDefinition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataPipelineValidatePipelineDefinitionInput) {
    super(scope, id);
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
          pipelineId: this.input.pipelineId,
          pipelineObjects: this.input.pipelineObjects,
          parameterObjects: this.input.parameterObjects,
          parameterValues: this.input.parameterValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ValidatePipelineDefinition.validationErrors', props);
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
          pipelineId: this.input.pipelineId,
          pipelineObjects: this.input.pipelineObjects,
          parameterObjects: this.input.parameterObjects,
          parameterValues: this.input.parameterValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ValidatePipelineDefinition.validationWarnings', props);
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
          pipelineId: this.input.pipelineId,
          pipelineObjects: this.input.pipelineObjects,
          parameterObjects: this.input.parameterObjects,
          parameterValues: this.input.parameterValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ValidatePipelineDefinition.errored', props);
    return resource.getResponseField('errored') as unknown as boolean;
  }

}

