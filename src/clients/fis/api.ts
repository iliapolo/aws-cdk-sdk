import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class FisClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createExperimentTemplate(input: shapes.FisCreateExperimentTemplateRequest): FisResponsesCreateExperimentTemplate {
    return new FisResponsesCreateExperimentTemplate(this, this.__resources, input);
  }

  public deleteExperimentTemplate(input: shapes.FisDeleteExperimentTemplateRequest): FisResponsesDeleteExperimentTemplate {
    return new FisResponsesDeleteExperimentTemplate(this, this.__resources, input);
  }

  public fetchAction(input: shapes.FisGetActionRequest): FisResponsesFetchAction {
    return new FisResponsesFetchAction(this, this.__resources, input);
  }

  public fetchExperiment(input: shapes.FisGetExperimentRequest): FisResponsesFetchExperiment {
    return new FisResponsesFetchExperiment(this, this.__resources, input);
  }

  public fetchExperimentTemplate(input: shapes.FisGetExperimentTemplateRequest): FisResponsesFetchExperimentTemplate {
    return new FisResponsesFetchExperimentTemplate(this, this.__resources, input);
  }

  public listActions(input: shapes.FisListActionsRequest): FisResponsesListActions {
    return new FisResponsesListActions(this, this.__resources, input);
  }

  public listExperimentTemplates(input: shapes.FisListExperimentTemplatesRequest): FisResponsesListExperimentTemplates {
    return new FisResponsesListExperimentTemplates(this, this.__resources, input);
  }

  public listExperiments(input: shapes.FisListExperimentsRequest): FisResponsesListExperiments {
    return new FisResponsesListExperiments(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.FisListTagsForResourceRequest): FisResponsesListTagsForResource {
    return new FisResponsesListTagsForResource(this, this.__resources, input);
  }

  public startExperiment(input: shapes.FisStartExperimentRequest): FisResponsesStartExperiment {
    return new FisResponsesStartExperiment(this, this.__resources, input);
  }

  public stopExperiment(input: shapes.FisStopExperimentRequest): FisResponsesStopExperiment {
    return new FisResponsesStopExperiment(this, this.__resources, input);
  }

  public tagResource(input: shapes.FisTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.TagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.FisUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.UntagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateExperimentTemplate(input: shapes.FisUpdateExperimentTemplateRequest): FisResponsesUpdateExperimentTemplate {
    return new FisResponsesUpdateExperimentTemplate(this, this.__resources, input);
  }

}

export class FisResponsesCreateExperimentTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FisCreateExperimentTemplateRequest) {
  }

  public get experimentTemplate(): FisResponsesCreateExperimentTemplateExperimentTemplate {
    return new FisResponsesCreateExperimentTemplateExperimentTemplate(this.__scope, this.__resources, this.__input);
  }

}

export class FisResponsesCreateExperimentTemplateExperimentTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FisCreateExperimentTemplateRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createExperimentTemplate',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.CreateExperimentTemplate.experimentTemplate.id'),
        outputPath: 'experimentTemplate.id',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          stopConditions: this.__input.stopConditions,
          targets: this.__input.targets,
          actions: this.__input.actions,
          roleArn: this.__input.roleArn,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateExperimentTemplate.experimentTemplate.id', props);
    return resource.getResponseField('experimentTemplate.id') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createExperimentTemplate',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.CreateExperimentTemplate.experimentTemplate.description'),
        outputPath: 'experimentTemplate.description',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          stopConditions: this.__input.stopConditions,
          targets: this.__input.targets,
          actions: this.__input.actions,
          roleArn: this.__input.roleArn,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateExperimentTemplate.experimentTemplate.description', props);
    return resource.getResponseField('experimentTemplate.description') as unknown as string;
  }

  public get targets(): Record<string, shapes.FisExperimentTemplateTarget> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createExperimentTemplate',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.CreateExperimentTemplate.experimentTemplate.targets'),
        outputPath: 'experimentTemplate.targets',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          stopConditions: this.__input.stopConditions,
          targets: this.__input.targets,
          actions: this.__input.actions,
          roleArn: this.__input.roleArn,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateExperimentTemplate.experimentTemplate.targets', props);
    return resource.getResponseField('experimentTemplate.targets') as unknown as Record<string, shapes.FisExperimentTemplateTarget>;
  }

  public get actions(): Record<string, shapes.FisExperimentTemplateAction> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createExperimentTemplate',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.CreateExperimentTemplate.experimentTemplate.actions'),
        outputPath: 'experimentTemplate.actions',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          stopConditions: this.__input.stopConditions,
          targets: this.__input.targets,
          actions: this.__input.actions,
          roleArn: this.__input.roleArn,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateExperimentTemplate.experimentTemplate.actions', props);
    return resource.getResponseField('experimentTemplate.actions') as unknown as Record<string, shapes.FisExperimentTemplateAction>;
  }

  public get stopConditions(): shapes.FisExperimentTemplateStopCondition[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createExperimentTemplate',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.CreateExperimentTemplate.experimentTemplate.stopConditions'),
        outputPath: 'experimentTemplate.stopConditions',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          stopConditions: this.__input.stopConditions,
          targets: this.__input.targets,
          actions: this.__input.actions,
          roleArn: this.__input.roleArn,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateExperimentTemplate.experimentTemplate.stopConditions', props);
    return resource.getResponseField('experimentTemplate.stopConditions') as unknown as shapes.FisExperimentTemplateStopCondition[];
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createExperimentTemplate',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.CreateExperimentTemplate.experimentTemplate.creationTime'),
        outputPath: 'experimentTemplate.creationTime',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          stopConditions: this.__input.stopConditions,
          targets: this.__input.targets,
          actions: this.__input.actions,
          roleArn: this.__input.roleArn,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateExperimentTemplate.experimentTemplate.creationTime', props);
    return resource.getResponseField('experimentTemplate.creationTime') as unknown as string;
  }

  public get lastUpdateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createExperimentTemplate',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.CreateExperimentTemplate.experimentTemplate.lastUpdateTime'),
        outputPath: 'experimentTemplate.lastUpdateTime',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          stopConditions: this.__input.stopConditions,
          targets: this.__input.targets,
          actions: this.__input.actions,
          roleArn: this.__input.roleArn,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateExperimentTemplate.experimentTemplate.lastUpdateTime', props);
    return resource.getResponseField('experimentTemplate.lastUpdateTime') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createExperimentTemplate',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.CreateExperimentTemplate.experimentTemplate.roleArn'),
        outputPath: 'experimentTemplate.roleArn',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          stopConditions: this.__input.stopConditions,
          targets: this.__input.targets,
          actions: this.__input.actions,
          roleArn: this.__input.roleArn,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateExperimentTemplate.experimentTemplate.roleArn', props);
    return resource.getResponseField('experimentTemplate.roleArn') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createExperimentTemplate',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.CreateExperimentTemplate.experimentTemplate.tags'),
        outputPath: 'experimentTemplate.tags',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          stopConditions: this.__input.stopConditions,
          targets: this.__input.targets,
          actions: this.__input.actions,
          roleArn: this.__input.roleArn,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateExperimentTemplate.experimentTemplate.tags', props);
    return resource.getResponseField('experimentTemplate.tags') as unknown as Record<string, string>;
  }

}

export class FisResponsesDeleteExperimentTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FisDeleteExperimentTemplateRequest) {
  }

  public get experimentTemplate(): FisResponsesDeleteExperimentTemplateExperimentTemplate {
    return new FisResponsesDeleteExperimentTemplateExperimentTemplate(this.__scope, this.__resources, this.__input);
  }

}

export class FisResponsesDeleteExperimentTemplateExperimentTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FisDeleteExperimentTemplateRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteExperimentTemplate',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.DeleteExperimentTemplate.experimentTemplate.id'),
        outputPath: 'experimentTemplate.id',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteExperimentTemplate.experimentTemplate.id', props);
    return resource.getResponseField('experimentTemplate.id') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteExperimentTemplate',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.DeleteExperimentTemplate.experimentTemplate.description'),
        outputPath: 'experimentTemplate.description',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteExperimentTemplate.experimentTemplate.description', props);
    return resource.getResponseField('experimentTemplate.description') as unknown as string;
  }

  public get targets(): Record<string, shapes.FisExperimentTemplateTarget> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteExperimentTemplate',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.DeleteExperimentTemplate.experimentTemplate.targets'),
        outputPath: 'experimentTemplate.targets',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteExperimentTemplate.experimentTemplate.targets', props);
    return resource.getResponseField('experimentTemplate.targets') as unknown as Record<string, shapes.FisExperimentTemplateTarget>;
  }

  public get actions(): Record<string, shapes.FisExperimentTemplateAction> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteExperimentTemplate',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.DeleteExperimentTemplate.experimentTemplate.actions'),
        outputPath: 'experimentTemplate.actions',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteExperimentTemplate.experimentTemplate.actions', props);
    return resource.getResponseField('experimentTemplate.actions') as unknown as Record<string, shapes.FisExperimentTemplateAction>;
  }

  public get stopConditions(): shapes.FisExperimentTemplateStopCondition[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteExperimentTemplate',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.DeleteExperimentTemplate.experimentTemplate.stopConditions'),
        outputPath: 'experimentTemplate.stopConditions',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteExperimentTemplate.experimentTemplate.stopConditions', props);
    return resource.getResponseField('experimentTemplate.stopConditions') as unknown as shapes.FisExperimentTemplateStopCondition[];
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteExperimentTemplate',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.DeleteExperimentTemplate.experimentTemplate.creationTime'),
        outputPath: 'experimentTemplate.creationTime',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteExperimentTemplate.experimentTemplate.creationTime', props);
    return resource.getResponseField('experimentTemplate.creationTime') as unknown as string;
  }

  public get lastUpdateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteExperimentTemplate',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.DeleteExperimentTemplate.experimentTemplate.lastUpdateTime'),
        outputPath: 'experimentTemplate.lastUpdateTime',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteExperimentTemplate.experimentTemplate.lastUpdateTime', props);
    return resource.getResponseField('experimentTemplate.lastUpdateTime') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteExperimentTemplate',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.DeleteExperimentTemplate.experimentTemplate.roleArn'),
        outputPath: 'experimentTemplate.roleArn',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteExperimentTemplate.experimentTemplate.roleArn', props);
    return resource.getResponseField('experimentTemplate.roleArn') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteExperimentTemplate',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.DeleteExperimentTemplate.experimentTemplate.tags'),
        outputPath: 'experimentTemplate.tags',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteExperimentTemplate.experimentTemplate.tags', props);
    return resource.getResponseField('experimentTemplate.tags') as unknown as Record<string, string>;
  }

}

export class FisResponsesFetchAction {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FisGetActionRequest) {
  }

  public get action(): FisResponsesFetchActionAction {
    return new FisResponsesFetchActionAction(this.__scope, this.__resources, this.__input);
  }

}

export class FisResponsesFetchActionAction {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FisGetActionRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAction',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.GetAction.action.id'),
        outputPath: 'action.id',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAction.action.id', props);
    return resource.getResponseField('action.id') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAction',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.GetAction.action.description'),
        outputPath: 'action.description',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAction.action.description', props);
    return resource.getResponseField('action.description') as unknown as string;
  }

  public get parameters(): Record<string, shapes.FisActionParameter> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAction',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.GetAction.action.parameters'),
        outputPath: 'action.parameters',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAction.action.parameters', props);
    return resource.getResponseField('action.parameters') as unknown as Record<string, shapes.FisActionParameter>;
  }

  public get targets(): Record<string, shapes.FisActionTarget> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAction',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.GetAction.action.targets'),
        outputPath: 'action.targets',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAction.action.targets', props);
    return resource.getResponseField('action.targets') as unknown as Record<string, shapes.FisActionTarget>;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAction',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.GetAction.action.tags'),
        outputPath: 'action.tags',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAction.action.tags', props);
    return resource.getResponseField('action.tags') as unknown as Record<string, string>;
  }

}

export class FisResponsesFetchExperiment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FisGetExperimentRequest) {
  }

  public get experiment(): FisResponsesFetchExperimentExperiment {
    return new FisResponsesFetchExperimentExperiment(this.__scope, this.__resources, this.__input);
  }

}

export class FisResponsesFetchExperimentExperiment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FisGetExperimentRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getExperiment',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.GetExperiment.experiment.id'),
        outputPath: 'experiment.id',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetExperiment.experiment.id', props);
    return resource.getResponseField('experiment.id') as unknown as string;
  }

  public get experimentTemplateId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getExperiment',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.GetExperiment.experiment.experimentTemplateId'),
        outputPath: 'experiment.experimentTemplateId',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetExperiment.experiment.experimentTemplateId', props);
    return resource.getResponseField('experiment.experimentTemplateId') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getExperiment',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.GetExperiment.experiment.roleArn'),
        outputPath: 'experiment.roleArn',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetExperiment.experiment.roleArn', props);
    return resource.getResponseField('experiment.roleArn') as unknown as string;
  }

  public get state(): FisResponsesFetchExperimentExperimentState {
    return new FisResponsesFetchExperimentExperimentState(this.__scope, this.__resources, this.__input);
  }

  public get targets(): Record<string, shapes.FisExperimentTarget> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getExperiment',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.GetExperiment.experiment.targets'),
        outputPath: 'experiment.targets',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetExperiment.experiment.targets', props);
    return resource.getResponseField('experiment.targets') as unknown as Record<string, shapes.FisExperimentTarget>;
  }

  public get actions(): Record<string, shapes.FisExperimentAction> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getExperiment',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.GetExperiment.experiment.actions'),
        outputPath: 'experiment.actions',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetExperiment.experiment.actions', props);
    return resource.getResponseField('experiment.actions') as unknown as Record<string, shapes.FisExperimentAction>;
  }

  public get stopConditions(): shapes.FisExperimentStopCondition[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getExperiment',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.GetExperiment.experiment.stopConditions'),
        outputPath: 'experiment.stopConditions',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetExperiment.experiment.stopConditions', props);
    return resource.getResponseField('experiment.stopConditions') as unknown as shapes.FisExperimentStopCondition[];
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getExperiment',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.GetExperiment.experiment.creationTime'),
        outputPath: 'experiment.creationTime',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetExperiment.experiment.creationTime', props);
    return resource.getResponseField('experiment.creationTime') as unknown as string;
  }

  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getExperiment',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.GetExperiment.experiment.startTime'),
        outputPath: 'experiment.startTime',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetExperiment.experiment.startTime', props);
    return resource.getResponseField('experiment.startTime') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getExperiment',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.GetExperiment.experiment.endTime'),
        outputPath: 'experiment.endTime',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetExperiment.experiment.endTime', props);
    return resource.getResponseField('experiment.endTime') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getExperiment',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.GetExperiment.experiment.tags'),
        outputPath: 'experiment.tags',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetExperiment.experiment.tags', props);
    return resource.getResponseField('experiment.tags') as unknown as Record<string, string>;
  }

}

export class FisResponsesFetchExperimentExperimentState {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FisGetExperimentRequest) {
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getExperiment',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.GetExperiment.experiment.state.status'),
        outputPath: 'experiment.state.status',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetExperiment.experiment.state.status', props);
    return resource.getResponseField('experiment.state.status') as unknown as string;
  }

  public get reason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getExperiment',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.GetExperiment.experiment.state.reason'),
        outputPath: 'experiment.state.reason',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetExperiment.experiment.state.reason', props);
    return resource.getResponseField('experiment.state.reason') as unknown as string;
  }

}

export class FisResponsesFetchExperimentTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FisGetExperimentTemplateRequest) {
  }

  public get experimentTemplate(): FisResponsesFetchExperimentTemplateExperimentTemplate {
    return new FisResponsesFetchExperimentTemplateExperimentTemplate(this.__scope, this.__resources, this.__input);
  }

}

export class FisResponsesFetchExperimentTemplateExperimentTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FisGetExperimentTemplateRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getExperimentTemplate',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.GetExperimentTemplate.experimentTemplate.id'),
        outputPath: 'experimentTemplate.id',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetExperimentTemplate.experimentTemplate.id', props);
    return resource.getResponseField('experimentTemplate.id') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getExperimentTemplate',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.GetExperimentTemplate.experimentTemplate.description'),
        outputPath: 'experimentTemplate.description',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetExperimentTemplate.experimentTemplate.description', props);
    return resource.getResponseField('experimentTemplate.description') as unknown as string;
  }

  public get targets(): Record<string, shapes.FisExperimentTemplateTarget> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getExperimentTemplate',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.GetExperimentTemplate.experimentTemplate.targets'),
        outputPath: 'experimentTemplate.targets',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetExperimentTemplate.experimentTemplate.targets', props);
    return resource.getResponseField('experimentTemplate.targets') as unknown as Record<string, shapes.FisExperimentTemplateTarget>;
  }

  public get actions(): Record<string, shapes.FisExperimentTemplateAction> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getExperimentTemplate',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.GetExperimentTemplate.experimentTemplate.actions'),
        outputPath: 'experimentTemplate.actions',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetExperimentTemplate.experimentTemplate.actions', props);
    return resource.getResponseField('experimentTemplate.actions') as unknown as Record<string, shapes.FisExperimentTemplateAction>;
  }

  public get stopConditions(): shapes.FisExperimentTemplateStopCondition[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getExperimentTemplate',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.GetExperimentTemplate.experimentTemplate.stopConditions'),
        outputPath: 'experimentTemplate.stopConditions',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetExperimentTemplate.experimentTemplate.stopConditions', props);
    return resource.getResponseField('experimentTemplate.stopConditions') as unknown as shapes.FisExperimentTemplateStopCondition[];
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getExperimentTemplate',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.GetExperimentTemplate.experimentTemplate.creationTime'),
        outputPath: 'experimentTemplate.creationTime',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetExperimentTemplate.experimentTemplate.creationTime', props);
    return resource.getResponseField('experimentTemplate.creationTime') as unknown as string;
  }

  public get lastUpdateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getExperimentTemplate',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.GetExperimentTemplate.experimentTemplate.lastUpdateTime'),
        outputPath: 'experimentTemplate.lastUpdateTime',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetExperimentTemplate.experimentTemplate.lastUpdateTime', props);
    return resource.getResponseField('experimentTemplate.lastUpdateTime') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getExperimentTemplate',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.GetExperimentTemplate.experimentTemplate.roleArn'),
        outputPath: 'experimentTemplate.roleArn',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetExperimentTemplate.experimentTemplate.roleArn', props);
    return resource.getResponseField('experimentTemplate.roleArn') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getExperimentTemplate',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.GetExperimentTemplate.experimentTemplate.tags'),
        outputPath: 'experimentTemplate.tags',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetExperimentTemplate.experimentTemplate.tags', props);
    return resource.getResponseField('experimentTemplate.tags') as unknown as Record<string, string>;
  }

}

export class FisResponsesListActions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FisListActionsRequest) {
  }

  public get actions(): shapes.FisActionSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listActions',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.ListActions.actions'),
        outputPath: 'actions',
        parameters: {
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListActions.actions', props);
    return resource.getResponseField('actions') as unknown as shapes.FisActionSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listActions',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.ListActions.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListActions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class FisResponsesListExperimentTemplates {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FisListExperimentTemplatesRequest) {
  }

  public get experimentTemplates(): shapes.FisExperimentTemplateSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listExperimentTemplates',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.ListExperimentTemplates.experimentTemplates'),
        outputPath: 'experimentTemplates',
        parameters: {
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListExperimentTemplates.experimentTemplates', props);
    return resource.getResponseField('experimentTemplates') as unknown as shapes.FisExperimentTemplateSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listExperimentTemplates',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.ListExperimentTemplates.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListExperimentTemplates.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class FisResponsesListExperiments {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FisListExperimentsRequest) {
  }

  public get experiments(): shapes.FisExperimentSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listExperiments',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.ListExperiments.experiments'),
        outputPath: 'experiments',
        parameters: {
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListExperiments.experiments', props);
    return resource.getResponseField('experiments') as unknown as shapes.FisExperimentSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listExperiments',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.ListExperiments.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListExperiments.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class FisResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FisListTagsForResourceRequest) {
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.ListTagsForResource.tags'),
        outputPath: 'tags',
        parameters: {
          resourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class FisResponsesStartExperiment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FisStartExperimentRequest) {
  }

  public get experiment(): FisResponsesStartExperimentExperiment {
    return new FisResponsesStartExperimentExperiment(this.__scope, this.__resources, this.__input);
  }

}

export class FisResponsesStartExperimentExperiment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FisStartExperimentRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startExperiment',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.StartExperiment.experiment.id'),
        outputPath: 'experiment.id',
        parameters: {
          clientToken: this.__input.clientToken,
          experimentTemplateId: this.__input.experimentTemplateId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartExperiment.experiment.id', props);
    return resource.getResponseField('experiment.id') as unknown as string;
  }

  public get experimentTemplateId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startExperiment',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.StartExperiment.experiment.experimentTemplateId'),
        outputPath: 'experiment.experimentTemplateId',
        parameters: {
          clientToken: this.__input.clientToken,
          experimentTemplateId: this.__input.experimentTemplateId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartExperiment.experiment.experimentTemplateId', props);
    return resource.getResponseField('experiment.experimentTemplateId') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startExperiment',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.StartExperiment.experiment.roleArn'),
        outputPath: 'experiment.roleArn',
        parameters: {
          clientToken: this.__input.clientToken,
          experimentTemplateId: this.__input.experimentTemplateId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartExperiment.experiment.roleArn', props);
    return resource.getResponseField('experiment.roleArn') as unknown as string;
  }

  public get state(): FisResponsesStartExperimentExperimentState {
    return new FisResponsesStartExperimentExperimentState(this.__scope, this.__resources, this.__input);
  }

  public get targets(): Record<string, shapes.FisExperimentTarget> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startExperiment',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.StartExperiment.experiment.targets'),
        outputPath: 'experiment.targets',
        parameters: {
          clientToken: this.__input.clientToken,
          experimentTemplateId: this.__input.experimentTemplateId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartExperiment.experiment.targets', props);
    return resource.getResponseField('experiment.targets') as unknown as Record<string, shapes.FisExperimentTarget>;
  }

  public get actions(): Record<string, shapes.FisExperimentAction> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startExperiment',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.StartExperiment.experiment.actions'),
        outputPath: 'experiment.actions',
        parameters: {
          clientToken: this.__input.clientToken,
          experimentTemplateId: this.__input.experimentTemplateId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartExperiment.experiment.actions', props);
    return resource.getResponseField('experiment.actions') as unknown as Record<string, shapes.FisExperimentAction>;
  }

  public get stopConditions(): shapes.FisExperimentStopCondition[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startExperiment',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.StartExperiment.experiment.stopConditions'),
        outputPath: 'experiment.stopConditions',
        parameters: {
          clientToken: this.__input.clientToken,
          experimentTemplateId: this.__input.experimentTemplateId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartExperiment.experiment.stopConditions', props);
    return resource.getResponseField('experiment.stopConditions') as unknown as shapes.FisExperimentStopCondition[];
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startExperiment',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.StartExperiment.experiment.creationTime'),
        outputPath: 'experiment.creationTime',
        parameters: {
          clientToken: this.__input.clientToken,
          experimentTemplateId: this.__input.experimentTemplateId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartExperiment.experiment.creationTime', props);
    return resource.getResponseField('experiment.creationTime') as unknown as string;
  }

  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startExperiment',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.StartExperiment.experiment.startTime'),
        outputPath: 'experiment.startTime',
        parameters: {
          clientToken: this.__input.clientToken,
          experimentTemplateId: this.__input.experimentTemplateId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartExperiment.experiment.startTime', props);
    return resource.getResponseField('experiment.startTime') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startExperiment',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.StartExperiment.experiment.endTime'),
        outputPath: 'experiment.endTime',
        parameters: {
          clientToken: this.__input.clientToken,
          experimentTemplateId: this.__input.experimentTemplateId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartExperiment.experiment.endTime', props);
    return resource.getResponseField('experiment.endTime') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startExperiment',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.StartExperiment.experiment.tags'),
        outputPath: 'experiment.tags',
        parameters: {
          clientToken: this.__input.clientToken,
          experimentTemplateId: this.__input.experimentTemplateId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartExperiment.experiment.tags', props);
    return resource.getResponseField('experiment.tags') as unknown as Record<string, string>;
  }

}

export class FisResponsesStartExperimentExperimentState {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FisStartExperimentRequest) {
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startExperiment',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.StartExperiment.experiment.state.status'),
        outputPath: 'experiment.state.status',
        parameters: {
          clientToken: this.__input.clientToken,
          experimentTemplateId: this.__input.experimentTemplateId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartExperiment.experiment.state.status', props);
    return resource.getResponseField('experiment.state.status') as unknown as string;
  }

  public get reason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startExperiment',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.StartExperiment.experiment.state.reason'),
        outputPath: 'experiment.state.reason',
        parameters: {
          clientToken: this.__input.clientToken,
          experimentTemplateId: this.__input.experimentTemplateId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartExperiment.experiment.state.reason', props);
    return resource.getResponseField('experiment.state.reason') as unknown as string;
  }

}

export class FisResponsesStopExperiment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FisStopExperimentRequest) {
  }

  public get experiment(): FisResponsesStopExperimentExperiment {
    return new FisResponsesStopExperimentExperiment(this.__scope, this.__resources, this.__input);
  }

}

export class FisResponsesStopExperimentExperiment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FisStopExperimentRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopExperiment',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.StopExperiment.experiment.id'),
        outputPath: 'experiment.id',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopExperiment.experiment.id', props);
    return resource.getResponseField('experiment.id') as unknown as string;
  }

  public get experimentTemplateId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopExperiment',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.StopExperiment.experiment.experimentTemplateId'),
        outputPath: 'experiment.experimentTemplateId',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopExperiment.experiment.experimentTemplateId', props);
    return resource.getResponseField('experiment.experimentTemplateId') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopExperiment',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.StopExperiment.experiment.roleArn'),
        outputPath: 'experiment.roleArn',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopExperiment.experiment.roleArn', props);
    return resource.getResponseField('experiment.roleArn') as unknown as string;
  }

  public get state(): FisResponsesStopExperimentExperimentState {
    return new FisResponsesStopExperimentExperimentState(this.__scope, this.__resources, this.__input);
  }

  public get targets(): Record<string, shapes.FisExperimentTarget> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopExperiment',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.StopExperiment.experiment.targets'),
        outputPath: 'experiment.targets',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopExperiment.experiment.targets', props);
    return resource.getResponseField('experiment.targets') as unknown as Record<string, shapes.FisExperimentTarget>;
  }

  public get actions(): Record<string, shapes.FisExperimentAction> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopExperiment',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.StopExperiment.experiment.actions'),
        outputPath: 'experiment.actions',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopExperiment.experiment.actions', props);
    return resource.getResponseField('experiment.actions') as unknown as Record<string, shapes.FisExperimentAction>;
  }

  public get stopConditions(): shapes.FisExperimentStopCondition[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopExperiment',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.StopExperiment.experiment.stopConditions'),
        outputPath: 'experiment.stopConditions',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopExperiment.experiment.stopConditions', props);
    return resource.getResponseField('experiment.stopConditions') as unknown as shapes.FisExperimentStopCondition[];
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopExperiment',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.StopExperiment.experiment.creationTime'),
        outputPath: 'experiment.creationTime',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopExperiment.experiment.creationTime', props);
    return resource.getResponseField('experiment.creationTime') as unknown as string;
  }

  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopExperiment',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.StopExperiment.experiment.startTime'),
        outputPath: 'experiment.startTime',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopExperiment.experiment.startTime', props);
    return resource.getResponseField('experiment.startTime') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopExperiment',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.StopExperiment.experiment.endTime'),
        outputPath: 'experiment.endTime',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopExperiment.experiment.endTime', props);
    return resource.getResponseField('experiment.endTime') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopExperiment',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.StopExperiment.experiment.tags'),
        outputPath: 'experiment.tags',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopExperiment.experiment.tags', props);
    return resource.getResponseField('experiment.tags') as unknown as Record<string, string>;
  }

}

export class FisResponsesStopExperimentExperimentState {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FisStopExperimentRequest) {
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopExperiment',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.StopExperiment.experiment.state.status'),
        outputPath: 'experiment.state.status',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopExperiment.experiment.state.status', props);
    return resource.getResponseField('experiment.state.status') as unknown as string;
  }

  public get reason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopExperiment',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.StopExperiment.experiment.state.reason'),
        outputPath: 'experiment.state.reason',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopExperiment.experiment.state.reason', props);
    return resource.getResponseField('experiment.state.reason') as unknown as string;
  }

}

export class FisResponsesUpdateExperimentTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FisUpdateExperimentTemplateRequest) {
  }

  public get experimentTemplate(): FisResponsesUpdateExperimentTemplateExperimentTemplate {
    return new FisResponsesUpdateExperimentTemplateExperimentTemplate(this.__scope, this.__resources, this.__input);
  }

}

export class FisResponsesUpdateExperimentTemplateExperimentTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FisUpdateExperimentTemplateRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateExperimentTemplate',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.UpdateExperimentTemplate.experimentTemplate.id'),
        outputPath: 'experimentTemplate.id',
        parameters: {
          id: this.__input.id,
          description: this.__input.description,
          stopConditions: this.__input.stopConditions,
          targets: this.__input.targets,
          actions: this.__input.actions,
          roleArn: this.__input.roleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateExperimentTemplate.experimentTemplate.id', props);
    return resource.getResponseField('experimentTemplate.id') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateExperimentTemplate',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.UpdateExperimentTemplate.experimentTemplate.description'),
        outputPath: 'experimentTemplate.description',
        parameters: {
          id: this.__input.id,
          description: this.__input.description,
          stopConditions: this.__input.stopConditions,
          targets: this.__input.targets,
          actions: this.__input.actions,
          roleArn: this.__input.roleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateExperimentTemplate.experimentTemplate.description', props);
    return resource.getResponseField('experimentTemplate.description') as unknown as string;
  }

  public get targets(): Record<string, shapes.FisExperimentTemplateTarget> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateExperimentTemplate',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.UpdateExperimentTemplate.experimentTemplate.targets'),
        outputPath: 'experimentTemplate.targets',
        parameters: {
          id: this.__input.id,
          description: this.__input.description,
          stopConditions: this.__input.stopConditions,
          targets: this.__input.targets,
          actions: this.__input.actions,
          roleArn: this.__input.roleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateExperimentTemplate.experimentTemplate.targets', props);
    return resource.getResponseField('experimentTemplate.targets') as unknown as Record<string, shapes.FisExperimentTemplateTarget>;
  }

  public get actions(): Record<string, shapes.FisExperimentTemplateAction> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateExperimentTemplate',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.UpdateExperimentTemplate.experimentTemplate.actions'),
        outputPath: 'experimentTemplate.actions',
        parameters: {
          id: this.__input.id,
          description: this.__input.description,
          stopConditions: this.__input.stopConditions,
          targets: this.__input.targets,
          actions: this.__input.actions,
          roleArn: this.__input.roleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateExperimentTemplate.experimentTemplate.actions', props);
    return resource.getResponseField('experimentTemplate.actions') as unknown as Record<string, shapes.FisExperimentTemplateAction>;
  }

  public get stopConditions(): shapes.FisExperimentTemplateStopCondition[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateExperimentTemplate',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.UpdateExperimentTemplate.experimentTemplate.stopConditions'),
        outputPath: 'experimentTemplate.stopConditions',
        parameters: {
          id: this.__input.id,
          description: this.__input.description,
          stopConditions: this.__input.stopConditions,
          targets: this.__input.targets,
          actions: this.__input.actions,
          roleArn: this.__input.roleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateExperimentTemplate.experimentTemplate.stopConditions', props);
    return resource.getResponseField('experimentTemplate.stopConditions') as unknown as shapes.FisExperimentTemplateStopCondition[];
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateExperimentTemplate',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.UpdateExperimentTemplate.experimentTemplate.creationTime'),
        outputPath: 'experimentTemplate.creationTime',
        parameters: {
          id: this.__input.id,
          description: this.__input.description,
          stopConditions: this.__input.stopConditions,
          targets: this.__input.targets,
          actions: this.__input.actions,
          roleArn: this.__input.roleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateExperimentTemplate.experimentTemplate.creationTime', props);
    return resource.getResponseField('experimentTemplate.creationTime') as unknown as string;
  }

  public get lastUpdateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateExperimentTemplate',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.UpdateExperimentTemplate.experimentTemplate.lastUpdateTime'),
        outputPath: 'experimentTemplate.lastUpdateTime',
        parameters: {
          id: this.__input.id,
          description: this.__input.description,
          stopConditions: this.__input.stopConditions,
          targets: this.__input.targets,
          actions: this.__input.actions,
          roleArn: this.__input.roleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateExperimentTemplate.experimentTemplate.lastUpdateTime', props);
    return resource.getResponseField('experimentTemplate.lastUpdateTime') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateExperimentTemplate',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.UpdateExperimentTemplate.experimentTemplate.roleArn'),
        outputPath: 'experimentTemplate.roleArn',
        parameters: {
          id: this.__input.id,
          description: this.__input.description,
          stopConditions: this.__input.stopConditions,
          targets: this.__input.targets,
          actions: this.__input.actions,
          roleArn: this.__input.roleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateExperimentTemplate.experimentTemplate.roleArn', props);
    return resource.getResponseField('experimentTemplate.roleArn') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateExperimentTemplate',
        service: 'Fis',
        physicalResourceId: cr.PhysicalResourceId.of('Fis.UpdateExperimentTemplate.experimentTemplate.tags'),
        outputPath: 'experimentTemplate.tags',
        parameters: {
          id: this.__input.id,
          description: this.__input.description,
          stopConditions: this.__input.stopConditions,
          targets: this.__input.targets,
          actions: this.__input.actions,
          roleArn: this.__input.roleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateExperimentTemplate.experimentTemplate.tags', props);
    return resource.getResponseField('experimentTemplate.tags') as unknown as Record<string, string>;
  }

}

