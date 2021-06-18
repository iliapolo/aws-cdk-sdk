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

  public createGraph(): DetectiveCreateGraph {
    return new DetectiveCreateGraph(this, 'CreateGraph', this.__resources);
  }

  public createMembers(input: shapes.DetectiveCreateMembersRequest): DetectiveCreateMembers {
    return new DetectiveCreateMembers(this, 'CreateMembers', this.__resources, input);
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

  public deleteMembers(input: shapes.DetectiveDeleteMembersRequest): DetectiveDeleteMembers {
    return new DetectiveDeleteMembers(this, 'DeleteMembers', this.__resources, input);
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

  public fetchMembers(input: shapes.DetectiveGetMembersRequest): DetectiveFetchMembers {
    return new DetectiveFetchMembers(this, 'FetchMembers', this.__resources, input);
  }

  public listGraphs(input: shapes.DetectiveListGraphsRequest): DetectiveListGraphs {
    return new DetectiveListGraphs(this, 'ListGraphs', this.__resources, input);
  }

  public listInvitations(input: shapes.DetectiveListInvitationsRequest): DetectiveListInvitations {
    return new DetectiveListInvitations(this, 'ListInvitations', this.__resources, input);
  }

  public listMembers(input: shapes.DetectiveListMembersRequest): DetectiveListMembers {
    return new DetectiveListMembers(this, 'ListMembers', this.__resources, input);
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

}

export class DetectiveCreateGraph extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get graphArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGraph',
        service: 'Detective',
        physicalResourceId: cr.PhysicalResourceId.of('Detective.CreateGraph.GraphArn'),
        outputPath: 'GraphArn',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGraph.GraphArn', props);
    return resource.getResponseField('GraphArn') as unknown as string;
  }

}

export class DetectiveCreateMembers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DetectiveCreateMembersRequest) {
    super(scope, id);
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
          GraphArn: this.input.graphArn,
          Message: this.input.message,
          Accounts: this.input.accounts,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMembers.Members', props);
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
          GraphArn: this.input.graphArn,
          Message: this.input.message,
          Accounts: this.input.accounts,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMembers.UnprocessedAccounts', props);
    return resource.getResponseField('UnprocessedAccounts') as unknown as shapes.DetectiveUnprocessedAccount[];
  }

}

export class DetectiveDeleteMembers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DetectiveDeleteMembersRequest) {
    super(scope, id);
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
          GraphArn: this.input.graphArn,
          AccountIds: this.input.accountIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteMembers.AccountIds', props);
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
          GraphArn: this.input.graphArn,
          AccountIds: this.input.accountIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteMembers.UnprocessedAccounts', props);
    return resource.getResponseField('UnprocessedAccounts') as unknown as shapes.DetectiveUnprocessedAccount[];
  }

}

export class DetectiveFetchMembers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DetectiveGetMembersRequest) {
    super(scope, id);
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
          GraphArn: this.input.graphArn,
          AccountIds: this.input.accountIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMembers.MemberDetails', props);
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
          GraphArn: this.input.graphArn,
          AccountIds: this.input.accountIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMembers.UnprocessedAccounts', props);
    return resource.getResponseField('UnprocessedAccounts') as unknown as shapes.DetectiveUnprocessedAccount[];
  }

}

export class DetectiveListGraphs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DetectiveListGraphsRequest) {
    super(scope, id);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListGraphs.GraphList', props);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListGraphs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class DetectiveListInvitations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DetectiveListInvitationsRequest) {
    super(scope, id);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListInvitations.Invitations', props);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListInvitations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class DetectiveListMembers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DetectiveListMembersRequest) {
    super(scope, id);
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
          GraphArn: this.input.graphArn,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListMembers.MemberDetails', props);
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
          GraphArn: this.input.graphArn,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListMembers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

