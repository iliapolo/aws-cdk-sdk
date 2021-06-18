import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class IdentityStoreClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public describeGroup(input: shapes.IdentityStoreDescribeGroupRequest): IdentityStoreDescribeGroup {
    return new IdentityStoreDescribeGroup(this, 'DescribeGroup', this.__resources, input);
  }

  public describeUser(input: shapes.IdentityStoreDescribeUserRequest): IdentityStoreDescribeUser {
    return new IdentityStoreDescribeUser(this, 'DescribeUser', this.__resources, input);
  }

  public listGroups(input: shapes.IdentityStoreListGroupsRequest): IdentityStoreListGroups {
    return new IdentityStoreListGroups(this, 'ListGroups', this.__resources, input);
  }

  public listUsers(input: shapes.IdentityStoreListUsersRequest): IdentityStoreListUsers {
    return new IdentityStoreListUsers(this, 'ListUsers', this.__resources, input);
  }

}

export class IdentityStoreDescribeGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IdentityStoreDescribeGroupRequest) {
    super(scope, id);
  }

  public get groupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGroup',
        service: 'IdentityStore',
        physicalResourceId: cr.PhysicalResourceId.of('IdentityStore.DescribeGroup.GroupId'),
        outputPath: 'GroupId',
        parameters: {
          IdentityStoreId: this.input.identityStoreId,
          GroupId: this.input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGroup.GroupId', props);
    return resource.getResponseField('GroupId') as unknown as string;
  }

  public get displayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGroup',
        service: 'IdentityStore',
        physicalResourceId: cr.PhysicalResourceId.of('IdentityStore.DescribeGroup.DisplayName'),
        outputPath: 'DisplayName',
        parameters: {
          IdentityStoreId: this.input.identityStoreId,
          GroupId: this.input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGroup.DisplayName', props);
    return resource.getResponseField('DisplayName') as unknown as string;
  }

}

export class IdentityStoreDescribeUser extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IdentityStoreDescribeUserRequest) {
    super(scope, id);
  }

  public get userName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUser',
        service: 'IdentityStore',
        physicalResourceId: cr.PhysicalResourceId.of('IdentityStore.DescribeUser.UserName'),
        outputPath: 'UserName',
        parameters: {
          IdentityStoreId: this.input.identityStoreId,
          UserId: this.input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUser.UserName', props);
    return resource.getResponseField('UserName') as unknown as string;
  }

  public get userId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUser',
        service: 'IdentityStore',
        physicalResourceId: cr.PhysicalResourceId.of('IdentityStore.DescribeUser.UserId'),
        outputPath: 'UserId',
        parameters: {
          IdentityStoreId: this.input.identityStoreId,
          UserId: this.input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUser.UserId', props);
    return resource.getResponseField('UserId') as unknown as string;
  }

}

export class IdentityStoreListGroups extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IdentityStoreListGroupsRequest) {
    super(scope, id);
  }

  public get groups(): shapes.IdentityStoreGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGroups',
        service: 'IdentityStore',
        physicalResourceId: cr.PhysicalResourceId.of('IdentityStore.ListGroups.Groups'),
        outputPath: 'Groups',
        parameters: {
          IdentityStoreId: this.input.identityStoreId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          Filters: this.input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListGroups.Groups', props);
    return resource.getResponseField('Groups') as unknown as shapes.IdentityStoreGroup[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGroups',
        service: 'IdentityStore',
        physicalResourceId: cr.PhysicalResourceId.of('IdentityStore.ListGroups.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          IdentityStoreId: this.input.identityStoreId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          Filters: this.input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListGroups.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class IdentityStoreListUsers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IdentityStoreListUsersRequest) {
    super(scope, id);
  }

  public get users(): shapes.IdentityStoreUser[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listUsers',
        service: 'IdentityStore',
        physicalResourceId: cr.PhysicalResourceId.of('IdentityStore.ListUsers.Users'),
        outputPath: 'Users',
        parameters: {
          IdentityStoreId: this.input.identityStoreId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          Filters: this.input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListUsers.Users', props);
    return resource.getResponseField('Users') as unknown as shapes.IdentityStoreUser[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listUsers',
        service: 'IdentityStore',
        physicalResourceId: cr.PhysicalResourceId.of('IdentityStore.ListUsers.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          IdentityStoreId: this.input.identityStoreId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          Filters: this.input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListUsers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

