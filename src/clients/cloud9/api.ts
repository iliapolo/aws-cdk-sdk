import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class Cloud9Client extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createEnvironmentEc2(input: shapes.Cloud9CreateEnvironmentEc2Request): Cloud9ResponsesCreateEnvironmentEc2 {
    return new Cloud9ResponsesCreateEnvironmentEc2(this, this.__resources, input);
  }

  public createEnvironmentMembership(input: shapes.Cloud9CreateEnvironmentMembershipRequest): Cloud9ResponsesCreateEnvironmentMembership {
    return new Cloud9ResponsesCreateEnvironmentMembership(this, this.__resources, input);
  }

  public deleteEnvironment(input: shapes.Cloud9DeleteEnvironmentRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEnvironment',
        service: 'Cloud9',
        physicalResourceId: cr.PhysicalResourceId.of('Cloud9.DeleteEnvironment'),
        parameters: {
          environmentId: input.environmentId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteEnvironment', props);
  }

  public deleteEnvironmentMembership(input: shapes.Cloud9DeleteEnvironmentMembershipRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEnvironmentMembership',
        service: 'Cloud9',
        physicalResourceId: cr.PhysicalResourceId.of('Cloud9.DeleteEnvironmentMembership'),
        parameters: {
          environmentId: input.environmentId,
          userArn: input.userArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteEnvironmentMembership', props);
  }

  public describeEnvironmentMemberships(input: shapes.Cloud9DescribeEnvironmentMembershipsRequest): Cloud9ResponsesDescribeEnvironmentMemberships {
    return new Cloud9ResponsesDescribeEnvironmentMemberships(this, this.__resources, input);
  }

  public describeEnvironmentStatus(input: shapes.Cloud9DescribeEnvironmentStatusRequest): Cloud9ResponsesDescribeEnvironmentStatus {
    return new Cloud9ResponsesDescribeEnvironmentStatus(this, this.__resources, input);
  }

  public describeEnvironments(input: shapes.Cloud9DescribeEnvironmentsRequest): Cloud9ResponsesDescribeEnvironments {
    return new Cloud9ResponsesDescribeEnvironments(this, this.__resources, input);
  }

  public listEnvironments(input: shapes.Cloud9ListEnvironmentsRequest): Cloud9ResponsesListEnvironments {
    return new Cloud9ResponsesListEnvironments(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.Cloud9ListTagsForResourceRequest): Cloud9ResponsesListTagsForResource {
    return new Cloud9ResponsesListTagsForResource(this, this.__resources, input);
  }

  public tagResource(input: shapes.Cloud9TagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'Cloud9',
        physicalResourceId: cr.PhysicalResourceId.of('Cloud9.TagResource'),
        parameters: {
          ResourceARN: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.Cloud9UntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'Cloud9',
        physicalResourceId: cr.PhysicalResourceId.of('Cloud9.UntagResource'),
        parameters: {
          ResourceARN: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateEnvironment(input: shapes.Cloud9UpdateEnvironmentRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironment',
        service: 'Cloud9',
        physicalResourceId: cr.PhysicalResourceId.of('Cloud9.UpdateEnvironment'),
        parameters: {
          environmentId: input.environmentId,
          name: input.name,
          description: input.description,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateEnvironment', props);
  }

  public updateEnvironmentMembership(input: shapes.Cloud9UpdateEnvironmentMembershipRequest): Cloud9ResponsesUpdateEnvironmentMembership {
    return new Cloud9ResponsesUpdateEnvironmentMembership(this, this.__resources, input);
  }

}

export class Cloud9ResponsesCreateEnvironmentEc2 {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Cloud9CreateEnvironmentEc2Request) {
  }

  public get environmentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironmentEc2',
        service: 'Cloud9',
        physicalResourceId: cr.PhysicalResourceId.of('Cloud9.CreateEnvironmentEC2.environmentId'),
        outputPath: 'environmentId',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          clientRequestToken: this.__input.clientRequestToken,
          instanceType: this.__input.instanceType,
          subnetId: this.__input.subnetId,
          automaticStopTimeMinutes: this.__input.automaticStopTimeMinutes,
          ownerArn: this.__input.ownerArn,
          tags: this.__input.tags,
          connectionType: this.__input.connectionType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironmentEC2.environmentId', props);
    return resource.getResponseField('environmentId') as unknown as string;
  }

}

export class Cloud9ResponsesCreateEnvironmentMembership {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Cloud9CreateEnvironmentMembershipRequest) {
  }

  public get membership(): Cloud9ResponsesCreateEnvironmentMembershipMembership {
    return new Cloud9ResponsesCreateEnvironmentMembershipMembership(this.__scope, this.__resources, this.__input);
  }

}

export class Cloud9ResponsesCreateEnvironmentMembershipMembership {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Cloud9CreateEnvironmentMembershipRequest) {
  }

  public get permissions(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironmentMembership',
        service: 'Cloud9',
        physicalResourceId: cr.PhysicalResourceId.of('Cloud9.CreateEnvironmentMembership.membership.permissions'),
        outputPath: 'membership.permissions',
        parameters: {
          environmentId: this.__input.environmentId,
          userArn: this.__input.userArn,
          permissions: this.__input.permissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironmentMembership.membership.permissions', props);
    return resource.getResponseField('membership.permissions') as unknown as string;
  }

  public get userId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironmentMembership',
        service: 'Cloud9',
        physicalResourceId: cr.PhysicalResourceId.of('Cloud9.CreateEnvironmentMembership.membership.userId'),
        outputPath: 'membership.userId',
        parameters: {
          environmentId: this.__input.environmentId,
          userArn: this.__input.userArn,
          permissions: this.__input.permissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironmentMembership.membership.userId', props);
    return resource.getResponseField('membership.userId') as unknown as string;
  }

  public get userArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironmentMembership',
        service: 'Cloud9',
        physicalResourceId: cr.PhysicalResourceId.of('Cloud9.CreateEnvironmentMembership.membership.userArn'),
        outputPath: 'membership.userArn',
        parameters: {
          environmentId: this.__input.environmentId,
          userArn: this.__input.userArn,
          permissions: this.__input.permissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironmentMembership.membership.userArn', props);
    return resource.getResponseField('membership.userArn') as unknown as string;
  }

  public get environmentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironmentMembership',
        service: 'Cloud9',
        physicalResourceId: cr.PhysicalResourceId.of('Cloud9.CreateEnvironmentMembership.membership.environmentId'),
        outputPath: 'membership.environmentId',
        parameters: {
          environmentId: this.__input.environmentId,
          userArn: this.__input.userArn,
          permissions: this.__input.permissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironmentMembership.membership.environmentId', props);
    return resource.getResponseField('membership.environmentId') as unknown as string;
  }

  public get lastAccess(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironmentMembership',
        service: 'Cloud9',
        physicalResourceId: cr.PhysicalResourceId.of('Cloud9.CreateEnvironmentMembership.membership.lastAccess'),
        outputPath: 'membership.lastAccess',
        parameters: {
          environmentId: this.__input.environmentId,
          userArn: this.__input.userArn,
          permissions: this.__input.permissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironmentMembership.membership.lastAccess', props);
    return resource.getResponseField('membership.lastAccess') as unknown as string;
  }

}

export class Cloud9ResponsesDescribeEnvironmentMemberships {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Cloud9DescribeEnvironmentMembershipsRequest) {
  }

  public get memberships(): shapes.Cloud9EnvironmentMember[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEnvironmentMemberships',
        service: 'Cloud9',
        physicalResourceId: cr.PhysicalResourceId.of('Cloud9.DescribeEnvironmentMemberships.memberships'),
        outputPath: 'memberships',
        parameters: {
          userArn: this.__input.userArn,
          environmentId: this.__input.environmentId,
          permissions: this.__input.permissions,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEnvironmentMemberships.memberships', props);
    return resource.getResponseField('memberships') as unknown as shapes.Cloud9EnvironmentMember[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEnvironmentMemberships',
        service: 'Cloud9',
        physicalResourceId: cr.PhysicalResourceId.of('Cloud9.DescribeEnvironmentMemberships.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          userArn: this.__input.userArn,
          environmentId: this.__input.environmentId,
          permissions: this.__input.permissions,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEnvironmentMemberships.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class Cloud9ResponsesDescribeEnvironmentStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Cloud9DescribeEnvironmentStatusRequest) {
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEnvironmentStatus',
        service: 'Cloud9',
        physicalResourceId: cr.PhysicalResourceId.of('Cloud9.DescribeEnvironmentStatus.status'),
        outputPath: 'status',
        parameters: {
          environmentId: this.__input.environmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEnvironmentStatus.status', props);
    return resource.getResponseField('status') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEnvironmentStatus',
        service: 'Cloud9',
        physicalResourceId: cr.PhysicalResourceId.of('Cloud9.DescribeEnvironmentStatus.message'),
        outputPath: 'message',
        parameters: {
          environmentId: this.__input.environmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEnvironmentStatus.message', props);
    return resource.getResponseField('message') as unknown as string;
  }

}

export class Cloud9ResponsesDescribeEnvironments {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Cloud9DescribeEnvironmentsRequest) {
  }

  public get environments(): shapes.Cloud9Environment[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEnvironments',
        service: 'Cloud9',
        physicalResourceId: cr.PhysicalResourceId.of('Cloud9.DescribeEnvironments.environments'),
        outputPath: 'environments',
        parameters: {
          environmentIds: this.__input.environmentIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEnvironments.environments', props);
    return resource.getResponseField('environments') as unknown as shapes.Cloud9Environment[];
  }

}

export class Cloud9ResponsesListEnvironments {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Cloud9ListEnvironmentsRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEnvironments',
        service: 'Cloud9',
        physicalResourceId: cr.PhysicalResourceId.of('Cloud9.ListEnvironments.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEnvironments.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

  public get environmentIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEnvironments',
        service: 'Cloud9',
        physicalResourceId: cr.PhysicalResourceId.of('Cloud9.ListEnvironments.environmentIds'),
        outputPath: 'environmentIds',
        parameters: {
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEnvironments.environmentIds', props);
    return resource.getResponseField('environmentIds') as unknown as string[];
  }

}

export class Cloud9ResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Cloud9ListTagsForResourceRequest) {
  }

  public get tags(): shapes.Cloud9Tag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'Cloud9',
        physicalResourceId: cr.PhysicalResourceId.of('Cloud9.ListTagsForResource.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceARN: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.Cloud9Tag[];
  }

}

export class Cloud9ResponsesUpdateEnvironmentMembership {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Cloud9UpdateEnvironmentMembershipRequest) {
  }

  public get membership(): Cloud9ResponsesUpdateEnvironmentMembershipMembership {
    return new Cloud9ResponsesUpdateEnvironmentMembershipMembership(this.__scope, this.__resources, this.__input);
  }

}

export class Cloud9ResponsesUpdateEnvironmentMembershipMembership {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Cloud9UpdateEnvironmentMembershipRequest) {
  }

  public get permissions(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironmentMembership',
        service: 'Cloud9',
        physicalResourceId: cr.PhysicalResourceId.of('Cloud9.UpdateEnvironmentMembership.membership.permissions'),
        outputPath: 'membership.permissions',
        parameters: {
          environmentId: this.__input.environmentId,
          userArn: this.__input.userArn,
          permissions: this.__input.permissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironmentMembership.membership.permissions', props);
    return resource.getResponseField('membership.permissions') as unknown as string;
  }

  public get userId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironmentMembership',
        service: 'Cloud9',
        physicalResourceId: cr.PhysicalResourceId.of('Cloud9.UpdateEnvironmentMembership.membership.userId'),
        outputPath: 'membership.userId',
        parameters: {
          environmentId: this.__input.environmentId,
          userArn: this.__input.userArn,
          permissions: this.__input.permissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironmentMembership.membership.userId', props);
    return resource.getResponseField('membership.userId') as unknown as string;
  }

  public get userArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironmentMembership',
        service: 'Cloud9',
        physicalResourceId: cr.PhysicalResourceId.of('Cloud9.UpdateEnvironmentMembership.membership.userArn'),
        outputPath: 'membership.userArn',
        parameters: {
          environmentId: this.__input.environmentId,
          userArn: this.__input.userArn,
          permissions: this.__input.permissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironmentMembership.membership.userArn', props);
    return resource.getResponseField('membership.userArn') as unknown as string;
  }

  public get environmentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironmentMembership',
        service: 'Cloud9',
        physicalResourceId: cr.PhysicalResourceId.of('Cloud9.UpdateEnvironmentMembership.membership.environmentId'),
        outputPath: 'membership.environmentId',
        parameters: {
          environmentId: this.__input.environmentId,
          userArn: this.__input.userArn,
          permissions: this.__input.permissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironmentMembership.membership.environmentId', props);
    return resource.getResponseField('membership.environmentId') as unknown as string;
  }

  public get lastAccess(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironmentMembership',
        service: 'Cloud9',
        physicalResourceId: cr.PhysicalResourceId.of('Cloud9.UpdateEnvironmentMembership.membership.lastAccess'),
        outputPath: 'membership.lastAccess',
        parameters: {
          environmentId: this.__input.environmentId,
          userArn: this.__input.userArn,
          permissions: this.__input.permissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironmentMembership.membership.lastAccess', props);
    return resource.getResponseField('membership.lastAccess') as unknown as string;
  }

}

