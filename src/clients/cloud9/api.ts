import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class Cloud9Client extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createEnvironmentEc2(input: shapes.Cloud9CreateEnvironmentEc2Request): Cloud9CreateEnvironmentEc2 {
    return new Cloud9CreateEnvironmentEc2(this, 'CreateEnvironmentEc2', this.__resources, input);
  }

  public createEnvironmentMembership(input: shapes.Cloud9CreateEnvironmentMembershipRequest): Cloud9CreateEnvironmentMembership {
    return new Cloud9CreateEnvironmentMembership(this, 'CreateEnvironmentMembership', this.__resources, input);
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

  public describeEnvironmentMemberships(input: shapes.Cloud9DescribeEnvironmentMembershipsRequest): Cloud9DescribeEnvironmentMemberships {
    return new Cloud9DescribeEnvironmentMemberships(this, 'DescribeEnvironmentMemberships', this.__resources, input);
  }

  public describeEnvironmentStatus(input: shapes.Cloud9DescribeEnvironmentStatusRequest): Cloud9DescribeEnvironmentStatus {
    return new Cloud9DescribeEnvironmentStatus(this, 'DescribeEnvironmentStatus', this.__resources, input);
  }

  public describeEnvironments(input: shapes.Cloud9DescribeEnvironmentsRequest): Cloud9DescribeEnvironments {
    return new Cloud9DescribeEnvironments(this, 'DescribeEnvironments', this.__resources, input);
  }

  public listEnvironments(input: shapes.Cloud9ListEnvironmentsRequest): Cloud9ListEnvironments {
    return new Cloud9ListEnvironments(this, 'ListEnvironments', this.__resources, input);
  }

  public listTagsForResource(input: shapes.Cloud9ListTagsForResourceRequest): Cloud9ListTagsForResource {
    return new Cloud9ListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
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

  public updateEnvironmentMembership(input: shapes.Cloud9UpdateEnvironmentMembershipRequest): Cloud9UpdateEnvironmentMembership {
    return new Cloud9UpdateEnvironmentMembership(this, 'UpdateEnvironmentMembership', this.__resources, input);
  }

}

export class Cloud9CreateEnvironmentEc2 extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Cloud9CreateEnvironmentEc2Request) {
    super(scope, id);
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
          name: this.input.name,
          description: this.input.description,
          clientRequestToken: this.input.clientRequestToken,
          instanceType: this.input.instanceType,
          subnetId: this.input.subnetId,
          automaticStopTimeMinutes: this.input.automaticStopTimeMinutes,
          ownerArn: this.input.ownerArn,
          tags: this.input.tags,
          connectionType: this.input.connectionType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEnvironmentEC2.environmentId', props);
    return resource.getResponseField('environmentId') as unknown as string;
  }

}

export class Cloud9CreateEnvironmentMembership extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Cloud9CreateEnvironmentMembershipRequest) {
    super(scope, id);
  }

  public get membership(): Cloud9CreateEnvironmentMembershipMembership {
    return new Cloud9CreateEnvironmentMembershipMembership(this, 'Membership', this.__resources, this.input);
  }

}

export class Cloud9CreateEnvironmentMembershipMembership extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Cloud9CreateEnvironmentMembershipRequest) {
    super(scope, id);
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
          environmentId: this.input.environmentId,
          userArn: this.input.userArn,
          permissions: this.input.permissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEnvironmentMembership.membership.permissions', props);
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
          environmentId: this.input.environmentId,
          userArn: this.input.userArn,
          permissions: this.input.permissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEnvironmentMembership.membership.userId', props);
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
          environmentId: this.input.environmentId,
          userArn: this.input.userArn,
          permissions: this.input.permissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEnvironmentMembership.membership.userArn', props);
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
          environmentId: this.input.environmentId,
          userArn: this.input.userArn,
          permissions: this.input.permissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEnvironmentMembership.membership.environmentId', props);
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
          environmentId: this.input.environmentId,
          userArn: this.input.userArn,
          permissions: this.input.permissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEnvironmentMembership.membership.lastAccess', props);
    return resource.getResponseField('membership.lastAccess') as unknown as string;
  }

}

export class Cloud9DescribeEnvironmentMemberships extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Cloud9DescribeEnvironmentMembershipsRequest) {
    super(scope, id);
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
          userArn: this.input.userArn,
          environmentId: this.input.environmentId,
          permissions: this.input.permissions,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEnvironmentMemberships.memberships', props);
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
          userArn: this.input.userArn,
          environmentId: this.input.environmentId,
          permissions: this.input.permissions,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEnvironmentMemberships.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class Cloud9DescribeEnvironmentStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Cloud9DescribeEnvironmentStatusRequest) {
    super(scope, id);
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
          environmentId: this.input.environmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEnvironmentStatus.status', props);
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
          environmentId: this.input.environmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEnvironmentStatus.message', props);
    return resource.getResponseField('message') as unknown as string;
  }

}

export class Cloud9DescribeEnvironments extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Cloud9DescribeEnvironmentsRequest) {
    super(scope, id);
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
          environmentIds: this.input.environmentIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEnvironments.environments', props);
    return resource.getResponseField('environments') as unknown as shapes.Cloud9Environment[];
  }

}

export class Cloud9ListEnvironments extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Cloud9ListEnvironmentsRequest) {
    super(scope, id);
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
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListEnvironments.nextToken', props);
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
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListEnvironments.environmentIds', props);
    return resource.getResponseField('environmentIds') as unknown as string[];
  }

}

export class Cloud9ListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Cloud9ListTagsForResourceRequest) {
    super(scope, id);
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
          ResourceARN: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.Cloud9Tag[];
  }

}

export class Cloud9UpdateEnvironmentMembership extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Cloud9UpdateEnvironmentMembershipRequest) {
    super(scope, id);
  }

  public get membership(): Cloud9UpdateEnvironmentMembershipMembership {
    return new Cloud9UpdateEnvironmentMembershipMembership(this, 'Membership', this.__resources, this.input);
  }

}

export class Cloud9UpdateEnvironmentMembershipMembership extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Cloud9UpdateEnvironmentMembershipRequest) {
    super(scope, id);
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
          environmentId: this.input.environmentId,
          userArn: this.input.userArn,
          permissions: this.input.permissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEnvironmentMembership.membership.permissions', props);
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
          environmentId: this.input.environmentId,
          userArn: this.input.userArn,
          permissions: this.input.permissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEnvironmentMembership.membership.userId', props);
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
          environmentId: this.input.environmentId,
          userArn: this.input.userArn,
          permissions: this.input.permissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEnvironmentMembership.membership.userArn', props);
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
          environmentId: this.input.environmentId,
          userArn: this.input.userArn,
          permissions: this.input.permissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEnvironmentMembership.membership.environmentId', props);
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
          environmentId: this.input.environmentId,
          userArn: this.input.userArn,
          permissions: this.input.permissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEnvironmentMembership.membership.lastAccess', props);
    return resource.getResponseField('membership.lastAccess') as unknown as string;
  }

}

