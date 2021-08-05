import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class IdentityStoreClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public describeGroup(input: shapes.IdentityStoreDescribeGroupRequest): IdentityStoreResponsesDescribeGroup {
    return new IdentityStoreResponsesDescribeGroup(this, this.__resources, input);
  }

  public describeUser(input: shapes.IdentityStoreDescribeUserRequest): IdentityStoreResponsesDescribeUser {
    return new IdentityStoreResponsesDescribeUser(this, this.__resources, input);
  }

  public listGroups(input: shapes.IdentityStoreListGroupsRequest): IdentityStoreResponsesListGroups {
    return new IdentityStoreResponsesListGroups(this, this.__resources, input);
  }

  public listUsers(input: shapes.IdentityStoreListUsersRequest): IdentityStoreResponsesListUsers {
    return new IdentityStoreResponsesListUsers(this, this.__resources, input);
  }

}

export class IdentityStoreResponsesDescribeGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IdentityStoreDescribeGroupRequest) {
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
          IdentityStoreId: this.__input.identityStoreId,
          GroupId: this.__input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGroup.GroupId', props);
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
          IdentityStoreId: this.__input.identityStoreId,
          GroupId: this.__input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGroup.DisplayName', props);
    return resource.getResponseField('DisplayName') as unknown as string;
  }

}

export class IdentityStoreResponsesDescribeUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IdentityStoreDescribeUserRequest) {
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
          IdentityStoreId: this.__input.identityStoreId,
          UserId: this.__input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUser.UserName', props);
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
          IdentityStoreId: this.__input.identityStoreId,
          UserId: this.__input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUser.UserId', props);
    return resource.getResponseField('UserId') as unknown as string;
  }

}

export class IdentityStoreResponsesListGroups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IdentityStoreListGroupsRequest) {
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
          IdentityStoreId: this.__input.identityStoreId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          Filters: this.__input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGroups.Groups', props);
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
          IdentityStoreId: this.__input.identityStoreId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          Filters: this.__input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGroups.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class IdentityStoreResponsesListUsers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IdentityStoreListUsersRequest) {
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
          IdentityStoreId: this.__input.identityStoreId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          Filters: this.__input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListUsers.Users', props);
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
          IdentityStoreId: this.__input.identityStoreId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          Filters: this.__input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListUsers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

