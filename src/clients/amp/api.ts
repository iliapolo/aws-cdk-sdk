import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class AmpClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createWorkspace(input: shapes.AmpCreateWorkspaceRequest): AmpResponsesCreateWorkspace {
    return new AmpResponsesCreateWorkspace(this, this.__resources, input);
  }

  public deleteWorkspace(input: shapes.AmpDeleteWorkspaceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteWorkspace',
        service: 'Amp',
        physicalResourceId: cr.PhysicalResourceId.of('Amp.DeleteWorkspace'),
        parameters: {
          clientToken: input.clientToken,
          workspaceId: input.workspaceId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteWorkspace', props);
  }

  public describeWorkspace(input: shapes.AmpDescribeWorkspaceRequest): AmpResponsesDescribeWorkspace {
    return new AmpResponsesDescribeWorkspace(this, this.__resources, input);
  }

  public listWorkspaces(input: shapes.AmpListWorkspacesRequest): AmpResponsesListWorkspaces {
    return new AmpResponsesListWorkspaces(this, this.__resources, input);
  }

  public updateWorkspaceAlias(input: shapes.AmpUpdateWorkspaceAliasRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWorkspaceAlias',
        service: 'Amp',
        physicalResourceId: cr.PhysicalResourceId.of('Amp.UpdateWorkspaceAlias'),
        parameters: {
          alias: input.alias,
          clientToken: input.clientToken,
          workspaceId: input.workspaceId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateWorkspaceAlias', props);
  }

}

export class AmpResponsesCreateWorkspace {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmpCreateWorkspaceRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWorkspace',
        service: 'Amp',
        physicalResourceId: cr.PhysicalResourceId.of('Amp.CreateWorkspace.arn'),
        outputPath: 'arn',
        parameters: {
          alias: this.__input.alias,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWorkspace.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

  public get status(): AmpResponsesCreateWorkspaceStatus {
    return new AmpResponsesCreateWorkspaceStatus(this.__scope, this.__resources, this.__input);
  }

  public get workspaceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWorkspace',
        service: 'Amp',
        physicalResourceId: cr.PhysicalResourceId.of('Amp.CreateWorkspace.workspaceId'),
        outputPath: 'workspaceId',
        parameters: {
          alias: this.__input.alias,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWorkspace.workspaceId', props);
    return resource.getResponseField('workspaceId') as unknown as string;
  }

}

export class AmpResponsesCreateWorkspaceStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmpCreateWorkspaceRequest) {
  }

  public get statusCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWorkspace',
        service: 'Amp',
        physicalResourceId: cr.PhysicalResourceId.of('Amp.CreateWorkspace.status.statusCode'),
        outputPath: 'status.statusCode',
        parameters: {
          alias: this.__input.alias,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWorkspace.status.statusCode', props);
    return resource.getResponseField('status.statusCode') as unknown as string;
  }

}

export class AmpResponsesDescribeWorkspace {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmpDescribeWorkspaceRequest) {
  }

  public get workspace(): AmpResponsesDescribeWorkspaceWorkspace {
    return new AmpResponsesDescribeWorkspaceWorkspace(this.__scope, this.__resources, this.__input);
  }

}

export class AmpResponsesDescribeWorkspaceWorkspace {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmpDescribeWorkspaceRequest) {
  }

  public get alias(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkspace',
        service: 'Amp',
        physicalResourceId: cr.PhysicalResourceId.of('Amp.DescribeWorkspace.workspace.alias'),
        outputPath: 'workspace.alias',
        parameters: {
          workspaceId: this.__input.workspaceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkspace.workspace.alias', props);
    return resource.getResponseField('workspace.alias') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkspace',
        service: 'Amp',
        physicalResourceId: cr.PhysicalResourceId.of('Amp.DescribeWorkspace.workspace.arn'),
        outputPath: 'workspace.arn',
        parameters: {
          workspaceId: this.__input.workspaceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkspace.workspace.arn', props);
    return resource.getResponseField('workspace.arn') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkspace',
        service: 'Amp',
        physicalResourceId: cr.PhysicalResourceId.of('Amp.DescribeWorkspace.workspace.createdAt'),
        outputPath: 'workspace.createdAt',
        parameters: {
          workspaceId: this.__input.workspaceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkspace.workspace.createdAt', props);
    return resource.getResponseField('workspace.createdAt') as unknown as string;
  }

  public get prometheusEndpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkspace',
        service: 'Amp',
        physicalResourceId: cr.PhysicalResourceId.of('Amp.DescribeWorkspace.workspace.prometheusEndpoint'),
        outputPath: 'workspace.prometheusEndpoint',
        parameters: {
          workspaceId: this.__input.workspaceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkspace.workspace.prometheusEndpoint', props);
    return resource.getResponseField('workspace.prometheusEndpoint') as unknown as string;
  }

  public get status(): AmpResponsesDescribeWorkspaceWorkspaceStatus {
    return new AmpResponsesDescribeWorkspaceWorkspaceStatus(this.__scope, this.__resources, this.__input);
  }

  public get workspaceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkspace',
        service: 'Amp',
        physicalResourceId: cr.PhysicalResourceId.of('Amp.DescribeWorkspace.workspace.workspaceId'),
        outputPath: 'workspace.workspaceId',
        parameters: {
          workspaceId: this.__input.workspaceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkspace.workspace.workspaceId', props);
    return resource.getResponseField('workspace.workspaceId') as unknown as string;
  }

}

export class AmpResponsesDescribeWorkspaceWorkspaceStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmpDescribeWorkspaceRequest) {
  }

  public get statusCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkspace',
        service: 'Amp',
        physicalResourceId: cr.PhysicalResourceId.of('Amp.DescribeWorkspace.workspace.status.statusCode'),
        outputPath: 'workspace.status.statusCode',
        parameters: {
          workspaceId: this.__input.workspaceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkspace.workspace.status.statusCode', props);
    return resource.getResponseField('workspace.status.statusCode') as unknown as string;
  }

}

export class AmpResponsesListWorkspaces {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmpListWorkspacesRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listWorkspaces',
        service: 'Amp',
        physicalResourceId: cr.PhysicalResourceId.of('Amp.ListWorkspaces.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          alias: this.__input.alias,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListWorkspaces.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

  public get workspaces(): shapes.AmpWorkspaceSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listWorkspaces',
        service: 'Amp',
        physicalResourceId: cr.PhysicalResourceId.of('Amp.ListWorkspaces.workspaces'),
        outputPath: 'workspaces',
        parameters: {
          alias: this.__input.alias,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListWorkspaces.workspaces', props);
    return resource.getResponseField('workspaces') as unknown as shapes.AmpWorkspaceSummary[];
  }

}

