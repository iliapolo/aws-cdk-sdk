import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class DetectiveClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public acceptInvitation(input: shapes.DetectiveAcceptInvitationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'acceptInvitation',
        service: 'Detective',
        physicalResourceId: cr.PhysicalResourceId.of('Detective.AcceptInvitation'),
        parameters: {
          GraphArn: input.graphArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AcceptInvitation', props);
  }

  public createGraph(input: shapes.DetectiveCreateGraphRequest): DetectiveResponsesCreateGraph {
    return new DetectiveResponsesCreateGraph(this, this.__resources, input);
  }

  public createMembers(input: shapes.DetectiveCreateMembersRequest): DetectiveResponsesCreateMembers {
    return new DetectiveResponsesCreateMembers(this, this.__resources, input);
  }

  public deleteGraph(input: shapes.DetectiveDeleteGraphRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteGraph',
        service: 'Detective',
        physicalResourceId: cr.PhysicalResourceId.of('Detective.DeleteGraph'),
        parameters: {
          GraphArn: input.graphArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteGraph', props);
  }

  public deleteMembers(input: shapes.DetectiveDeleteMembersRequest): DetectiveResponsesDeleteMembers {
    return new DetectiveResponsesDeleteMembers(this, this.__resources, input);
  }

  public disassociateMembership(input: shapes.DetectiveDisassociateMembershipRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateMembership',
        service: 'Detective',
        physicalResourceId: cr.PhysicalResourceId.of('Detective.DisassociateMembership'),
        parameters: {
          GraphArn: input.graphArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisassociateMembership', props);
  }

  public fetchMembers(input: shapes.DetectiveGetMembersRequest): DetectiveResponsesFetchMembers {
    return new DetectiveResponsesFetchMembers(this, this.__resources, input);
  }

  public listGraphs(input: shapes.DetectiveListGraphsRequest): DetectiveResponsesListGraphs {
    return new DetectiveResponsesListGraphs(this, this.__resources, input);
  }

  public listInvitations(input: shapes.DetectiveListInvitationsRequest): DetectiveResponsesListInvitations {
    return new DetectiveResponsesListInvitations(this, this.__resources, input);
  }

  public listMembers(input: shapes.DetectiveListMembersRequest): DetectiveResponsesListMembers {
    return new DetectiveResponsesListMembers(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.DetectiveListTagsForResourceRequest): DetectiveResponsesListTagsForResource {
    return new DetectiveResponsesListTagsForResource(this, this.__resources, input);
  }

  public rejectInvitation(input: shapes.DetectiveRejectInvitationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rejectInvitation',
        service: 'Detective',
        physicalResourceId: cr.PhysicalResourceId.of('Detective.RejectInvitation'),
        parameters: {
          GraphArn: input.graphArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RejectInvitation', props);
  }

  public startMonitoringMember(input: shapes.DetectiveStartMonitoringMemberRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMonitoringMember',
        service: 'Detective',
        physicalResourceId: cr.PhysicalResourceId.of('Detective.StartMonitoringMember'),
        parameters: {
          GraphArn: input.graphArn,
          AccountId: input.accountId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StartMonitoringMember', props);
  }

  public tagResource(input: shapes.DetectiveTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'Detective',
        physicalResourceId: cr.PhysicalResourceId.of('Detective.TagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.DetectiveUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'Detective',
        physicalResourceId: cr.PhysicalResourceId.of('Detective.UntagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

}

export class DetectiveResponsesCreateGraph {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DetectiveCreateGraphRequest) {
  }

  public get graphArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGraph',
        service: 'Detective',
        physicalResourceId: cr.PhysicalResourceId.of('Detective.CreateGraph.GraphArn'),
        outputPath: 'GraphArn',
        parameters: {
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGraph.GraphArn', props);
    return resource.getResponseField('GraphArn') as unknown as string;
  }

}

export class DetectiveResponsesCreateMembers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DetectiveCreateMembersRequest) {
  }

  public get members(): shapes.DetectiveMemberDetail[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMembers',
        service: 'Detective',
        physicalResourceId: cr.PhysicalResourceId.of('Detective.CreateMembers.Members'),
        outputPath: 'Members',
        parameters: {
          GraphArn: this.__input.graphArn,
          Message: this.__input.message,
          DisableEmailNotification: this.__input.disableEmailNotification,
          Accounts: this.__input.accounts,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMembers.Members', props);
    return resource.getResponseField('Members') as unknown as shapes.DetectiveMemberDetail[];
  }

  public get unprocessedAccounts(): shapes.DetectiveUnprocessedAccount[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMembers',
        service: 'Detective',
        physicalResourceId: cr.PhysicalResourceId.of('Detective.CreateMembers.UnprocessedAccounts'),
        outputPath: 'UnprocessedAccounts',
        parameters: {
          GraphArn: this.__input.graphArn,
          Message: this.__input.message,
          DisableEmailNotification: this.__input.disableEmailNotification,
          Accounts: this.__input.accounts,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMembers.UnprocessedAccounts', props);
    return resource.getResponseField('UnprocessedAccounts') as unknown as shapes.DetectiveUnprocessedAccount[];
  }

}

export class DetectiveResponsesDeleteMembers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DetectiveDeleteMembersRequest) {
  }

  public get accountIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteMembers',
        service: 'Detective',
        physicalResourceId: cr.PhysicalResourceId.of('Detective.DeleteMembers.AccountIds'),
        outputPath: 'AccountIds',
        parameters: {
          GraphArn: this.__input.graphArn,
          AccountIds: this.__input.accountIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteMembers.AccountIds', props);
    return resource.getResponseField('AccountIds') as unknown as string[];
  }

  public get unprocessedAccounts(): shapes.DetectiveUnprocessedAccount[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteMembers',
        service: 'Detective',
        physicalResourceId: cr.PhysicalResourceId.of('Detective.DeleteMembers.UnprocessedAccounts'),
        outputPath: 'UnprocessedAccounts',
        parameters: {
          GraphArn: this.__input.graphArn,
          AccountIds: this.__input.accountIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteMembers.UnprocessedAccounts', props);
    return resource.getResponseField('UnprocessedAccounts') as unknown as shapes.DetectiveUnprocessedAccount[];
  }

}

export class DetectiveResponsesFetchMembers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DetectiveGetMembersRequest) {
  }

  public get memberDetails(): shapes.DetectiveMemberDetail[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMembers',
        service: 'Detective',
        physicalResourceId: cr.PhysicalResourceId.of('Detective.GetMembers.MemberDetails'),
        outputPath: 'MemberDetails',
        parameters: {
          GraphArn: this.__input.graphArn,
          AccountIds: this.__input.accountIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMembers.MemberDetails', props);
    return resource.getResponseField('MemberDetails') as unknown as shapes.DetectiveMemberDetail[];
  }

  public get unprocessedAccounts(): shapes.DetectiveUnprocessedAccount[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMembers',
        service: 'Detective',
        physicalResourceId: cr.PhysicalResourceId.of('Detective.GetMembers.UnprocessedAccounts'),
        outputPath: 'UnprocessedAccounts',
        parameters: {
          GraphArn: this.__input.graphArn,
          AccountIds: this.__input.accountIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMembers.UnprocessedAccounts', props);
    return resource.getResponseField('UnprocessedAccounts') as unknown as shapes.DetectiveUnprocessedAccount[];
  }

}

export class DetectiveResponsesListGraphs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DetectiveListGraphsRequest) {
  }

  public get graphList(): shapes.DetectiveGraph[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGraphs',
        service: 'Detective',
        physicalResourceId: cr.PhysicalResourceId.of('Detective.ListGraphs.GraphList'),
        outputPath: 'GraphList',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGraphs.GraphList', props);
    return resource.getResponseField('GraphList') as unknown as shapes.DetectiveGraph[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGraphs',
        service: 'Detective',
        physicalResourceId: cr.PhysicalResourceId.of('Detective.ListGraphs.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGraphs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class DetectiveResponsesListInvitations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DetectiveListInvitationsRequest) {
  }

  public get invitations(): shapes.DetectiveMemberDetail[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listInvitations',
        service: 'Detective',
        physicalResourceId: cr.PhysicalResourceId.of('Detective.ListInvitations.Invitations'),
        outputPath: 'Invitations',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListInvitations.Invitations', props);
    return resource.getResponseField('Invitations') as unknown as shapes.DetectiveMemberDetail[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listInvitations',
        service: 'Detective',
        physicalResourceId: cr.PhysicalResourceId.of('Detective.ListInvitations.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListInvitations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class DetectiveResponsesListMembers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DetectiveListMembersRequest) {
  }

  public get memberDetails(): shapes.DetectiveMemberDetail[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listMembers',
        service: 'Detective',
        physicalResourceId: cr.PhysicalResourceId.of('Detective.ListMembers.MemberDetails'),
        outputPath: 'MemberDetails',
        parameters: {
          GraphArn: this.__input.graphArn,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListMembers.MemberDetails', props);
    return resource.getResponseField('MemberDetails') as unknown as shapes.DetectiveMemberDetail[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listMembers',
        service: 'Detective',
        physicalResourceId: cr.PhysicalResourceId.of('Detective.ListMembers.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          GraphArn: this.__input.graphArn,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListMembers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class DetectiveResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DetectiveListTagsForResourceRequest) {
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'Detective',
        physicalResourceId: cr.PhysicalResourceId.of('Detective.ListTagsForResource.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

