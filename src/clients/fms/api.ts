import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class FmsClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public associateAdminAccount(input: shapes.FmsAssociateAdminAccountRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateAdminAccount',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.AssociateAdminAccount'),
        parameters: {
          AdminAccount: input.adminAccount,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AssociateAdminAccount', props);
  }

  public deleteAppsList(input: shapes.FmsDeleteAppsListRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAppsList',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.DeleteAppsList'),
        parameters: {
          ListId: input.listId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteAppsList', props);
  }

  public deleteNotificationChannel(): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteNotificationChannel',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.DeleteNotificationChannel'),
        parameters: {
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteNotificationChannel', props);
  }

  public deletePolicy(input: shapes.FmsDeletePolicyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deletePolicy',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.DeletePolicy'),
        parameters: {
          PolicyId: input.policyId,
          DeleteAllPolicyResources: input.deleteAllPolicyResources,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeletePolicy', props);
  }

  public deleteProtocolsList(input: shapes.FmsDeleteProtocolsListRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteProtocolsList',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.DeleteProtocolsList'),
        parameters: {
          ListId: input.listId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteProtocolsList', props);
  }

  public disassociateAdminAccount(): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateAdminAccount',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.DisassociateAdminAccount'),
        parameters: {
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisassociateAdminAccount', props);
  }

  public fetchAdminAccount(): FMSResponsesFetchAdminAccount {
    return new FMSResponsesFetchAdminAccount(this, this.__resources);
  }

  public fetchAppsList(input: shapes.FmsGetAppsListRequest): FMSResponsesFetchAppsList {
    return new FMSResponsesFetchAppsList(this, this.__resources, input);
  }

  public fetchComplianceDetail(input: shapes.FmsGetComplianceDetailRequest): FMSResponsesFetchComplianceDetail {
    return new FMSResponsesFetchComplianceDetail(this, this.__resources, input);
  }

  public fetchNotificationChannel(): FMSResponsesFetchNotificationChannel {
    return new FMSResponsesFetchNotificationChannel(this, this.__resources);
  }

  public fetchPolicy(input: shapes.FmsGetPolicyRequest): FMSResponsesFetchPolicy {
    return new FMSResponsesFetchPolicy(this, this.__resources, input);
  }

  public fetchProtectionStatus(input: shapes.FmsGetProtectionStatusRequest): FMSResponsesFetchProtectionStatus {
    return new FMSResponsesFetchProtectionStatus(this, this.__resources, input);
  }

  public fetchProtocolsList(input: shapes.FmsGetProtocolsListRequest): FMSResponsesFetchProtocolsList {
    return new FMSResponsesFetchProtocolsList(this, this.__resources, input);
  }

  public fetchViolationDetails(input: shapes.FmsGetViolationDetailsRequest): FMSResponsesFetchViolationDetails {
    return new FMSResponsesFetchViolationDetails(this, this.__resources, input);
  }

  public listAppsLists(input: shapes.FmsListAppsListsRequest): FMSResponsesListAppsLists {
    return new FMSResponsesListAppsLists(this, this.__resources, input);
  }

  public listComplianceStatus(input: shapes.FmsListComplianceStatusRequest): FMSResponsesListComplianceStatus {
    return new FMSResponsesListComplianceStatus(this, this.__resources, input);
  }

  public listMemberAccounts(input: shapes.FmsListMemberAccountsRequest): FMSResponsesListMemberAccounts {
    return new FMSResponsesListMemberAccounts(this, this.__resources, input);
  }

  public listPolicies(input: shapes.FmsListPoliciesRequest): FMSResponsesListPolicies {
    return new FMSResponsesListPolicies(this, this.__resources, input);
  }

  public listProtocolsLists(input: shapes.FmsListProtocolsListsRequest): FMSResponsesListProtocolsLists {
    return new FMSResponsesListProtocolsLists(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.FmsListTagsForResourceRequest): FMSResponsesListTagsForResource {
    return new FMSResponsesListTagsForResource(this, this.__resources, input);
  }

  public putAppsList(input: shapes.FmsPutAppsListRequest): FMSResponsesPutAppsList {
    return new FMSResponsesPutAppsList(this, this.__resources, input);
  }

  public putNotificationChannel(input: shapes.FmsPutNotificationChannelRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putNotificationChannel',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.PutNotificationChannel'),
        parameters: {
          SnsTopicArn: input.snsTopicArn,
          SnsRoleName: input.snsRoleName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutNotificationChannel', props);
  }

  public putPolicy(input: shapes.FmsPutPolicyRequest): FMSResponsesPutPolicy {
    return new FMSResponsesPutPolicy(this, this.__resources, input);
  }

  public putProtocolsList(input: shapes.FmsPutProtocolsListRequest): FMSResponsesPutProtocolsList {
    return new FMSResponsesPutProtocolsList(this, this.__resources, input);
  }

  public tagResource(input: shapes.FmsTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.TagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          TagList: input.tagList,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.FmsUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.UntagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

}

export class FMSResponsesFetchAdminAccount {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get adminAccount(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAdminAccount',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.GetAdminAccount.AdminAccount'),
        outputPath: 'AdminAccount',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAdminAccount.AdminAccount', props);
    return resource.getResponseField('AdminAccount') as unknown as string;
  }

  public get roleStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAdminAccount',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.GetAdminAccount.RoleStatus'),
        outputPath: 'RoleStatus',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAdminAccount.RoleStatus', props);
    return resource.getResponseField('RoleStatus') as unknown as string;
  }

}

export class FMSResponsesFetchAppsList {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FmsGetAppsListRequest) {
  }

  public get appsList(): FMSResponsesFetchAppsListAppsList {
    return new FMSResponsesFetchAppsListAppsList(this.__scope, this.__resources, this.__input);
  }

  public get appsListArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAppsList',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.GetAppsList.AppsListArn'),
        outputPath: 'AppsListArn',
        parameters: {
          ListId: this.__input.listId,
          DefaultList: this.__input.defaultList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAppsList.AppsListArn', props);
    return resource.getResponseField('AppsListArn') as unknown as string;
  }

}

export class FMSResponsesFetchAppsListAppsList {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FmsGetAppsListRequest) {
  }

  public get listId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAppsList',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.GetAppsList.AppsList.ListId'),
        outputPath: 'AppsList.ListId',
        parameters: {
          ListId: this.__input.listId,
          DefaultList: this.__input.defaultList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAppsList.AppsList.ListId', props);
    return resource.getResponseField('AppsList.ListId') as unknown as string;
  }

  public get listName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAppsList',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.GetAppsList.AppsList.ListName'),
        outputPath: 'AppsList.ListName',
        parameters: {
          ListId: this.__input.listId,
          DefaultList: this.__input.defaultList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAppsList.AppsList.ListName', props);
    return resource.getResponseField('AppsList.ListName') as unknown as string;
  }

  public get listUpdateToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAppsList',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.GetAppsList.AppsList.ListUpdateToken'),
        outputPath: 'AppsList.ListUpdateToken',
        parameters: {
          ListId: this.__input.listId,
          DefaultList: this.__input.defaultList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAppsList.AppsList.ListUpdateToken', props);
    return resource.getResponseField('AppsList.ListUpdateToken') as unknown as string;
  }

  public get createTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAppsList',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.GetAppsList.AppsList.CreateTime'),
        outputPath: 'AppsList.CreateTime',
        parameters: {
          ListId: this.__input.listId,
          DefaultList: this.__input.defaultList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAppsList.AppsList.CreateTime', props);
    return resource.getResponseField('AppsList.CreateTime') as unknown as string;
  }

  public get lastUpdateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAppsList',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.GetAppsList.AppsList.LastUpdateTime'),
        outputPath: 'AppsList.LastUpdateTime',
        parameters: {
          ListId: this.__input.listId,
          DefaultList: this.__input.defaultList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAppsList.AppsList.LastUpdateTime', props);
    return resource.getResponseField('AppsList.LastUpdateTime') as unknown as string;
  }

  public get appsList(): shapes.FmsApp[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAppsList',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.GetAppsList.AppsList.AppsList'),
        outputPath: 'AppsList.AppsList',
        parameters: {
          ListId: this.__input.listId,
          DefaultList: this.__input.defaultList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAppsList.AppsList.AppsList', props);
    return resource.getResponseField('AppsList.AppsList') as unknown as shapes.FmsApp[];
  }

  public get previousAppsList(): Record<string, shapes.FmsApp[]> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAppsList',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.GetAppsList.AppsList.PreviousAppsList'),
        outputPath: 'AppsList.PreviousAppsList',
        parameters: {
          ListId: this.__input.listId,
          DefaultList: this.__input.defaultList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAppsList.AppsList.PreviousAppsList', props);
    return resource.getResponseField('AppsList.PreviousAppsList') as unknown as Record<string, shapes.FmsApp[]>;
  }

}

export class FMSResponsesFetchComplianceDetail {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FmsGetComplianceDetailRequest) {
  }

  public get policyComplianceDetail(): FMSResponsesFetchComplianceDetailPolicyComplianceDetail {
    return new FMSResponsesFetchComplianceDetailPolicyComplianceDetail(this.__scope, this.__resources, this.__input);
  }

}

export class FMSResponsesFetchComplianceDetailPolicyComplianceDetail {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FmsGetComplianceDetailRequest) {
  }

  public get policyOwner(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getComplianceDetail',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.GetComplianceDetail.PolicyComplianceDetail.PolicyOwner'),
        outputPath: 'PolicyComplianceDetail.PolicyOwner',
        parameters: {
          PolicyId: this.__input.policyId,
          MemberAccount: this.__input.memberAccount,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetComplianceDetail.PolicyComplianceDetail.PolicyOwner', props);
    return resource.getResponseField('PolicyComplianceDetail.PolicyOwner') as unknown as string;
  }

  public get policyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getComplianceDetail',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.GetComplianceDetail.PolicyComplianceDetail.PolicyId'),
        outputPath: 'PolicyComplianceDetail.PolicyId',
        parameters: {
          PolicyId: this.__input.policyId,
          MemberAccount: this.__input.memberAccount,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetComplianceDetail.PolicyComplianceDetail.PolicyId', props);
    return resource.getResponseField('PolicyComplianceDetail.PolicyId') as unknown as string;
  }

  public get memberAccount(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getComplianceDetail',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.GetComplianceDetail.PolicyComplianceDetail.MemberAccount'),
        outputPath: 'PolicyComplianceDetail.MemberAccount',
        parameters: {
          PolicyId: this.__input.policyId,
          MemberAccount: this.__input.memberAccount,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetComplianceDetail.PolicyComplianceDetail.MemberAccount', props);
    return resource.getResponseField('PolicyComplianceDetail.MemberAccount') as unknown as string;
  }

  public get violators(): shapes.FmsComplianceViolator[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getComplianceDetail',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.GetComplianceDetail.PolicyComplianceDetail.Violators'),
        outputPath: 'PolicyComplianceDetail.Violators',
        parameters: {
          PolicyId: this.__input.policyId,
          MemberAccount: this.__input.memberAccount,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetComplianceDetail.PolicyComplianceDetail.Violators', props);
    return resource.getResponseField('PolicyComplianceDetail.Violators') as unknown as shapes.FmsComplianceViolator[];
  }

  public get evaluationLimitExceeded(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getComplianceDetail',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.GetComplianceDetail.PolicyComplianceDetail.EvaluationLimitExceeded'),
        outputPath: 'PolicyComplianceDetail.EvaluationLimitExceeded',
        parameters: {
          PolicyId: this.__input.policyId,
          MemberAccount: this.__input.memberAccount,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetComplianceDetail.PolicyComplianceDetail.EvaluationLimitExceeded', props);
    return resource.getResponseField('PolicyComplianceDetail.EvaluationLimitExceeded') as unknown as boolean;
  }

  public get expiredAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getComplianceDetail',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.GetComplianceDetail.PolicyComplianceDetail.ExpiredAt'),
        outputPath: 'PolicyComplianceDetail.ExpiredAt',
        parameters: {
          PolicyId: this.__input.policyId,
          MemberAccount: this.__input.memberAccount,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetComplianceDetail.PolicyComplianceDetail.ExpiredAt', props);
    return resource.getResponseField('PolicyComplianceDetail.ExpiredAt') as unknown as string;
  }

  public get issueInfoMap(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getComplianceDetail',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.GetComplianceDetail.PolicyComplianceDetail.IssueInfoMap'),
        outputPath: 'PolicyComplianceDetail.IssueInfoMap',
        parameters: {
          PolicyId: this.__input.policyId,
          MemberAccount: this.__input.memberAccount,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetComplianceDetail.PolicyComplianceDetail.IssueInfoMap', props);
    return resource.getResponseField('PolicyComplianceDetail.IssueInfoMap') as unknown as Record<string, string>;
  }

}

export class FMSResponsesFetchNotificationChannel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get snsTopicArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNotificationChannel',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.GetNotificationChannel.SnsTopicArn'),
        outputPath: 'SnsTopicArn',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNotificationChannel.SnsTopicArn', props);
    return resource.getResponseField('SnsTopicArn') as unknown as string;
  }

  public get snsRoleName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNotificationChannel',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.GetNotificationChannel.SnsRoleName'),
        outputPath: 'SnsRoleName',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNotificationChannel.SnsRoleName', props);
    return resource.getResponseField('SnsRoleName') as unknown as string;
  }

}

export class FMSResponsesFetchPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FmsGetPolicyRequest) {
  }

  public get policy(): FMSResponsesFetchPolicyPolicy {
    return new FMSResponsesFetchPolicyPolicy(this.__scope, this.__resources, this.__input);
  }

  public get policyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPolicy',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.GetPolicy.PolicyArn'),
        outputPath: 'PolicyArn',
        parameters: {
          PolicyId: this.__input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPolicy.PolicyArn', props);
    return resource.getResponseField('PolicyArn') as unknown as string;
  }

}

export class FMSResponsesFetchPolicyPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FmsGetPolicyRequest) {
  }

  public get policyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPolicy',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.GetPolicy.Policy.PolicyId'),
        outputPath: 'Policy.PolicyId',
        parameters: {
          PolicyId: this.__input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPolicy.Policy.PolicyId', props);
    return resource.getResponseField('Policy.PolicyId') as unknown as string;
  }

  public get policyName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPolicy',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.GetPolicy.Policy.PolicyName'),
        outputPath: 'Policy.PolicyName',
        parameters: {
          PolicyId: this.__input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPolicy.Policy.PolicyName', props);
    return resource.getResponseField('Policy.PolicyName') as unknown as string;
  }

  public get policyUpdateToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPolicy',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.GetPolicy.Policy.PolicyUpdateToken'),
        outputPath: 'Policy.PolicyUpdateToken',
        parameters: {
          PolicyId: this.__input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPolicy.Policy.PolicyUpdateToken', props);
    return resource.getResponseField('Policy.PolicyUpdateToken') as unknown as string;
  }

  public get securityServicePolicyData(): FMSResponsesFetchPolicyPolicySecurityServicePolicyData {
    return new FMSResponsesFetchPolicyPolicySecurityServicePolicyData(this.__scope, this.__resources, this.__input);
  }

  public get resourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPolicy',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.GetPolicy.Policy.ResourceType'),
        outputPath: 'Policy.ResourceType',
        parameters: {
          PolicyId: this.__input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPolicy.Policy.ResourceType', props);
    return resource.getResponseField('Policy.ResourceType') as unknown as string;
  }

  public get resourceTypeList(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPolicy',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.GetPolicy.Policy.ResourceTypeList'),
        outputPath: 'Policy.ResourceTypeList',
        parameters: {
          PolicyId: this.__input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPolicy.Policy.ResourceTypeList', props);
    return resource.getResponseField('Policy.ResourceTypeList') as unknown as string[];
  }

  public get resourceTags(): shapes.FmsResourceTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPolicy',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.GetPolicy.Policy.ResourceTags'),
        outputPath: 'Policy.ResourceTags',
        parameters: {
          PolicyId: this.__input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPolicy.Policy.ResourceTags', props);
    return resource.getResponseField('Policy.ResourceTags') as unknown as shapes.FmsResourceTag[];
  }

  public get excludeResourceTags(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPolicy',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.GetPolicy.Policy.ExcludeResourceTags'),
        outputPath: 'Policy.ExcludeResourceTags',
        parameters: {
          PolicyId: this.__input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPolicy.Policy.ExcludeResourceTags', props);
    return resource.getResponseField('Policy.ExcludeResourceTags') as unknown as boolean;
  }

  public get remediationEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPolicy',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.GetPolicy.Policy.RemediationEnabled'),
        outputPath: 'Policy.RemediationEnabled',
        parameters: {
          PolicyId: this.__input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPolicy.Policy.RemediationEnabled', props);
    return resource.getResponseField('Policy.RemediationEnabled') as unknown as boolean;
  }

  public get includeMap(): Record<string, string[]> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPolicy',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.GetPolicy.Policy.IncludeMap'),
        outputPath: 'Policy.IncludeMap',
        parameters: {
          PolicyId: this.__input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPolicy.Policy.IncludeMap', props);
    return resource.getResponseField('Policy.IncludeMap') as unknown as Record<string, string[]>;
  }

  public get excludeMap(): Record<string, string[]> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPolicy',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.GetPolicy.Policy.ExcludeMap'),
        outputPath: 'Policy.ExcludeMap',
        parameters: {
          PolicyId: this.__input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPolicy.Policy.ExcludeMap', props);
    return resource.getResponseField('Policy.ExcludeMap') as unknown as Record<string, string[]>;
  }

}

export class FMSResponsesFetchPolicyPolicySecurityServicePolicyData {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FmsGetPolicyRequest) {
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPolicy',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.GetPolicy.Policy.SecurityServicePolicyData.Type'),
        outputPath: 'Policy.SecurityServicePolicyData.Type',
        parameters: {
          PolicyId: this.__input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPolicy.Policy.SecurityServicePolicyData.Type', props);
    return resource.getResponseField('Policy.SecurityServicePolicyData.Type') as unknown as string;
  }

  public get managedServiceData(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPolicy',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.GetPolicy.Policy.SecurityServicePolicyData.ManagedServiceData'),
        outputPath: 'Policy.SecurityServicePolicyData.ManagedServiceData',
        parameters: {
          PolicyId: this.__input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPolicy.Policy.SecurityServicePolicyData.ManagedServiceData', props);
    return resource.getResponseField('Policy.SecurityServicePolicyData.ManagedServiceData') as unknown as string;
  }

}

export class FMSResponsesFetchProtectionStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FmsGetProtectionStatusRequest) {
  }

  public get adminAccountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProtectionStatus',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.GetProtectionStatus.AdminAccountId'),
        outputPath: 'AdminAccountId',
        parameters: {
          PolicyId: this.__input.policyId,
          MemberAccountId: this.__input.memberAccountId,
          StartTime: this.__input.startTime,
          EndTime: this.__input.endTime,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProtectionStatus.AdminAccountId', props);
    return resource.getResponseField('AdminAccountId') as unknown as string;
  }

  public get serviceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProtectionStatus',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.GetProtectionStatus.ServiceType'),
        outputPath: 'ServiceType',
        parameters: {
          PolicyId: this.__input.policyId,
          MemberAccountId: this.__input.memberAccountId,
          StartTime: this.__input.startTime,
          EndTime: this.__input.endTime,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProtectionStatus.ServiceType', props);
    return resource.getResponseField('ServiceType') as unknown as string;
  }

  public get data(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProtectionStatus',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.GetProtectionStatus.Data'),
        outputPath: 'Data',
        parameters: {
          PolicyId: this.__input.policyId,
          MemberAccountId: this.__input.memberAccountId,
          StartTime: this.__input.startTime,
          EndTime: this.__input.endTime,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProtectionStatus.Data', props);
    return resource.getResponseField('Data') as unknown as string;
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProtectionStatus',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.GetProtectionStatus.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          PolicyId: this.__input.policyId,
          MemberAccountId: this.__input.memberAccountId,
          StartTime: this.__input.startTime,
          EndTime: this.__input.endTime,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProtectionStatus.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class FMSResponsesFetchProtocolsList {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FmsGetProtocolsListRequest) {
  }

  public get protocolsList(): FMSResponsesFetchProtocolsListProtocolsList {
    return new FMSResponsesFetchProtocolsListProtocolsList(this.__scope, this.__resources, this.__input);
  }

  public get protocolsListArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProtocolsList',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.GetProtocolsList.ProtocolsListArn'),
        outputPath: 'ProtocolsListArn',
        parameters: {
          ListId: this.__input.listId,
          DefaultList: this.__input.defaultList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProtocolsList.ProtocolsListArn', props);
    return resource.getResponseField('ProtocolsListArn') as unknown as string;
  }

}

export class FMSResponsesFetchProtocolsListProtocolsList {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FmsGetProtocolsListRequest) {
  }

  public get listId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProtocolsList',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.GetProtocolsList.ProtocolsList.ListId'),
        outputPath: 'ProtocolsList.ListId',
        parameters: {
          ListId: this.__input.listId,
          DefaultList: this.__input.defaultList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProtocolsList.ProtocolsList.ListId', props);
    return resource.getResponseField('ProtocolsList.ListId') as unknown as string;
  }

  public get listName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProtocolsList',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.GetProtocolsList.ProtocolsList.ListName'),
        outputPath: 'ProtocolsList.ListName',
        parameters: {
          ListId: this.__input.listId,
          DefaultList: this.__input.defaultList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProtocolsList.ProtocolsList.ListName', props);
    return resource.getResponseField('ProtocolsList.ListName') as unknown as string;
  }

  public get listUpdateToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProtocolsList',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.GetProtocolsList.ProtocolsList.ListUpdateToken'),
        outputPath: 'ProtocolsList.ListUpdateToken',
        parameters: {
          ListId: this.__input.listId,
          DefaultList: this.__input.defaultList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProtocolsList.ProtocolsList.ListUpdateToken', props);
    return resource.getResponseField('ProtocolsList.ListUpdateToken') as unknown as string;
  }

  public get createTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProtocolsList',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.GetProtocolsList.ProtocolsList.CreateTime'),
        outputPath: 'ProtocolsList.CreateTime',
        parameters: {
          ListId: this.__input.listId,
          DefaultList: this.__input.defaultList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProtocolsList.ProtocolsList.CreateTime', props);
    return resource.getResponseField('ProtocolsList.CreateTime') as unknown as string;
  }

  public get lastUpdateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProtocolsList',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.GetProtocolsList.ProtocolsList.LastUpdateTime'),
        outputPath: 'ProtocolsList.LastUpdateTime',
        parameters: {
          ListId: this.__input.listId,
          DefaultList: this.__input.defaultList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProtocolsList.ProtocolsList.LastUpdateTime', props);
    return resource.getResponseField('ProtocolsList.LastUpdateTime') as unknown as string;
  }

  public get protocolsList(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProtocolsList',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.GetProtocolsList.ProtocolsList.ProtocolsList'),
        outputPath: 'ProtocolsList.ProtocolsList',
        parameters: {
          ListId: this.__input.listId,
          DefaultList: this.__input.defaultList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProtocolsList.ProtocolsList.ProtocolsList', props);
    return resource.getResponseField('ProtocolsList.ProtocolsList') as unknown as string[];
  }

  public get previousProtocolsList(): Record<string, string[]> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProtocolsList',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.GetProtocolsList.ProtocolsList.PreviousProtocolsList'),
        outputPath: 'ProtocolsList.PreviousProtocolsList',
        parameters: {
          ListId: this.__input.listId,
          DefaultList: this.__input.defaultList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProtocolsList.ProtocolsList.PreviousProtocolsList', props);
    return resource.getResponseField('ProtocolsList.PreviousProtocolsList') as unknown as Record<string, string[]>;
  }

}

export class FMSResponsesFetchViolationDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FmsGetViolationDetailsRequest) {
  }

  public get violationDetail(): FMSResponsesFetchViolationDetailsViolationDetail {
    return new FMSResponsesFetchViolationDetailsViolationDetail(this.__scope, this.__resources, this.__input);
  }

}

export class FMSResponsesFetchViolationDetailsViolationDetail {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FmsGetViolationDetailsRequest) {
  }

  public get policyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getViolationDetails',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.GetViolationDetails.ViolationDetail.PolicyId'),
        outputPath: 'ViolationDetail.PolicyId',
        parameters: {
          PolicyId: this.__input.policyId,
          MemberAccount: this.__input.memberAccount,
          ResourceId: this.__input.resourceId,
          ResourceType: this.__input.resourceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetViolationDetails.ViolationDetail.PolicyId', props);
    return resource.getResponseField('ViolationDetail.PolicyId') as unknown as string;
  }

  public get memberAccount(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getViolationDetails',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.GetViolationDetails.ViolationDetail.MemberAccount'),
        outputPath: 'ViolationDetail.MemberAccount',
        parameters: {
          PolicyId: this.__input.policyId,
          MemberAccount: this.__input.memberAccount,
          ResourceId: this.__input.resourceId,
          ResourceType: this.__input.resourceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetViolationDetails.ViolationDetail.MemberAccount', props);
    return resource.getResponseField('ViolationDetail.MemberAccount') as unknown as string;
  }

  public get resourceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getViolationDetails',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.GetViolationDetails.ViolationDetail.ResourceId'),
        outputPath: 'ViolationDetail.ResourceId',
        parameters: {
          PolicyId: this.__input.policyId,
          MemberAccount: this.__input.memberAccount,
          ResourceId: this.__input.resourceId,
          ResourceType: this.__input.resourceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetViolationDetails.ViolationDetail.ResourceId', props);
    return resource.getResponseField('ViolationDetail.ResourceId') as unknown as string;
  }

  public get resourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getViolationDetails',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.GetViolationDetails.ViolationDetail.ResourceType'),
        outputPath: 'ViolationDetail.ResourceType',
        parameters: {
          PolicyId: this.__input.policyId,
          MemberAccount: this.__input.memberAccount,
          ResourceId: this.__input.resourceId,
          ResourceType: this.__input.resourceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetViolationDetails.ViolationDetail.ResourceType', props);
    return resource.getResponseField('ViolationDetail.ResourceType') as unknown as string;
  }

  public get resourceViolations(): shapes.FmsResourceViolation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getViolationDetails',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.GetViolationDetails.ViolationDetail.ResourceViolations'),
        outputPath: 'ViolationDetail.ResourceViolations',
        parameters: {
          PolicyId: this.__input.policyId,
          MemberAccount: this.__input.memberAccount,
          ResourceId: this.__input.resourceId,
          ResourceType: this.__input.resourceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetViolationDetails.ViolationDetail.ResourceViolations', props);
    return resource.getResponseField('ViolationDetail.ResourceViolations') as unknown as shapes.FmsResourceViolation[];
  }

  public get resourceTags(): shapes.FmsTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getViolationDetails',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.GetViolationDetails.ViolationDetail.ResourceTags'),
        outputPath: 'ViolationDetail.ResourceTags',
        parameters: {
          PolicyId: this.__input.policyId,
          MemberAccount: this.__input.memberAccount,
          ResourceId: this.__input.resourceId,
          ResourceType: this.__input.resourceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetViolationDetails.ViolationDetail.ResourceTags', props);
    return resource.getResponseField('ViolationDetail.ResourceTags') as unknown as shapes.FmsTag[];
  }

  public get resourceDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getViolationDetails',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.GetViolationDetails.ViolationDetail.ResourceDescription'),
        outputPath: 'ViolationDetail.ResourceDescription',
        parameters: {
          PolicyId: this.__input.policyId,
          MemberAccount: this.__input.memberAccount,
          ResourceId: this.__input.resourceId,
          ResourceType: this.__input.resourceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetViolationDetails.ViolationDetail.ResourceDescription', props);
    return resource.getResponseField('ViolationDetail.ResourceDescription') as unknown as string;
  }

}

export class FMSResponsesListAppsLists {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FmsListAppsListsRequest) {
  }

  public get appsLists(): shapes.FmsAppsListDataSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAppsLists',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.ListAppsLists.AppsLists'),
        outputPath: 'AppsLists',
        parameters: {
          DefaultLists: this.__input.defaultLists,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAppsLists.AppsLists', props);
    return resource.getResponseField('AppsLists') as unknown as shapes.FmsAppsListDataSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAppsLists',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.ListAppsLists.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          DefaultLists: this.__input.defaultLists,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAppsLists.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class FMSResponsesListComplianceStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FmsListComplianceStatusRequest) {
  }

  public get policyComplianceStatusList(): shapes.FmsPolicyComplianceStatus[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listComplianceStatus',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.ListComplianceStatus.PolicyComplianceStatusList'),
        outputPath: 'PolicyComplianceStatusList',
        parameters: {
          PolicyId: this.__input.policyId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListComplianceStatus.PolicyComplianceStatusList', props);
    return resource.getResponseField('PolicyComplianceStatusList') as unknown as shapes.FmsPolicyComplianceStatus[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listComplianceStatus',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.ListComplianceStatus.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          PolicyId: this.__input.policyId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListComplianceStatus.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class FMSResponsesListMemberAccounts {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FmsListMemberAccountsRequest) {
  }

  public get memberAccounts(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listMemberAccounts',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.ListMemberAccounts.MemberAccounts'),
        outputPath: 'MemberAccounts',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListMemberAccounts.MemberAccounts', props);
    return resource.getResponseField('MemberAccounts') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listMemberAccounts',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.ListMemberAccounts.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListMemberAccounts.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class FMSResponsesListPolicies {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FmsListPoliciesRequest) {
  }

  public get policyList(): shapes.FmsPolicySummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPolicies',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.ListPolicies.PolicyList'),
        outputPath: 'PolicyList',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPolicies.PolicyList', props);
    return resource.getResponseField('PolicyList') as unknown as shapes.FmsPolicySummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPolicies',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.ListPolicies.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPolicies.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class FMSResponsesListProtocolsLists {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FmsListProtocolsListsRequest) {
  }

  public get protocolsLists(): shapes.FmsProtocolsListDataSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listProtocolsLists',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.ListProtocolsLists.ProtocolsLists'),
        outputPath: 'ProtocolsLists',
        parameters: {
          DefaultLists: this.__input.defaultLists,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListProtocolsLists.ProtocolsLists', props);
    return resource.getResponseField('ProtocolsLists') as unknown as shapes.FmsProtocolsListDataSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listProtocolsLists',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.ListProtocolsLists.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          DefaultLists: this.__input.defaultLists,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListProtocolsLists.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class FMSResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FmsListTagsForResourceRequest) {
  }

  public get tagList(): shapes.FmsTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.ListTagsForResource.TagList'),
        outputPath: 'TagList',
        parameters: {
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.TagList', props);
    return resource.getResponseField('TagList') as unknown as shapes.FmsTag[];
  }

}

export class FMSResponsesPutAppsList {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FmsPutAppsListRequest) {
  }

  public get appsList(): FMSResponsesPutAppsListAppsList {
    return new FMSResponsesPutAppsListAppsList(this.__scope, this.__resources, this.__input);
  }

  public get appsListArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putAppsList',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.PutAppsList.AppsListArn'),
        outputPath: 'AppsListArn',
        parameters: {
          AppsList: {
            ListId: this.__input.appsList.listId,
            ListName: this.__input.appsList.listName,
            ListUpdateToken: this.__input.appsList.listUpdateToken,
            CreateTime: this.__input.appsList.createTime,
            LastUpdateTime: this.__input.appsList.lastUpdateTime,
            AppsList: this.__input.appsList.appsList,
            PreviousAppsList: this.__input.appsList.previousAppsList,
          },
          TagList: this.__input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutAppsList.AppsListArn', props);
    return resource.getResponseField('AppsListArn') as unknown as string;
  }

}

export class FMSResponsesPutAppsListAppsList {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FmsPutAppsListRequest) {
  }

  public get listId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putAppsList',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.PutAppsList.AppsList.ListId'),
        outputPath: 'AppsList.ListId',
        parameters: {
          AppsList: {
            ListId: this.__input.appsList.listId,
            ListName: this.__input.appsList.listName,
            ListUpdateToken: this.__input.appsList.listUpdateToken,
            CreateTime: this.__input.appsList.createTime,
            LastUpdateTime: this.__input.appsList.lastUpdateTime,
            AppsList: this.__input.appsList.appsList,
            PreviousAppsList: this.__input.appsList.previousAppsList,
          },
          TagList: this.__input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutAppsList.AppsList.ListId', props);
    return resource.getResponseField('AppsList.ListId') as unknown as string;
  }

  public get listName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putAppsList',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.PutAppsList.AppsList.ListName'),
        outputPath: 'AppsList.ListName',
        parameters: {
          AppsList: {
            ListId: this.__input.appsList.listId,
            ListName: this.__input.appsList.listName,
            ListUpdateToken: this.__input.appsList.listUpdateToken,
            CreateTime: this.__input.appsList.createTime,
            LastUpdateTime: this.__input.appsList.lastUpdateTime,
            AppsList: this.__input.appsList.appsList,
            PreviousAppsList: this.__input.appsList.previousAppsList,
          },
          TagList: this.__input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutAppsList.AppsList.ListName', props);
    return resource.getResponseField('AppsList.ListName') as unknown as string;
  }

  public get listUpdateToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putAppsList',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.PutAppsList.AppsList.ListUpdateToken'),
        outputPath: 'AppsList.ListUpdateToken',
        parameters: {
          AppsList: {
            ListId: this.__input.appsList.listId,
            ListName: this.__input.appsList.listName,
            ListUpdateToken: this.__input.appsList.listUpdateToken,
            CreateTime: this.__input.appsList.createTime,
            LastUpdateTime: this.__input.appsList.lastUpdateTime,
            AppsList: this.__input.appsList.appsList,
            PreviousAppsList: this.__input.appsList.previousAppsList,
          },
          TagList: this.__input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutAppsList.AppsList.ListUpdateToken', props);
    return resource.getResponseField('AppsList.ListUpdateToken') as unknown as string;
  }

  public get createTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putAppsList',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.PutAppsList.AppsList.CreateTime'),
        outputPath: 'AppsList.CreateTime',
        parameters: {
          AppsList: {
            ListId: this.__input.appsList.listId,
            ListName: this.__input.appsList.listName,
            ListUpdateToken: this.__input.appsList.listUpdateToken,
            CreateTime: this.__input.appsList.createTime,
            LastUpdateTime: this.__input.appsList.lastUpdateTime,
            AppsList: this.__input.appsList.appsList,
            PreviousAppsList: this.__input.appsList.previousAppsList,
          },
          TagList: this.__input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutAppsList.AppsList.CreateTime', props);
    return resource.getResponseField('AppsList.CreateTime') as unknown as string;
  }

  public get lastUpdateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putAppsList',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.PutAppsList.AppsList.LastUpdateTime'),
        outputPath: 'AppsList.LastUpdateTime',
        parameters: {
          AppsList: {
            ListId: this.__input.appsList.listId,
            ListName: this.__input.appsList.listName,
            ListUpdateToken: this.__input.appsList.listUpdateToken,
            CreateTime: this.__input.appsList.createTime,
            LastUpdateTime: this.__input.appsList.lastUpdateTime,
            AppsList: this.__input.appsList.appsList,
            PreviousAppsList: this.__input.appsList.previousAppsList,
          },
          TagList: this.__input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutAppsList.AppsList.LastUpdateTime', props);
    return resource.getResponseField('AppsList.LastUpdateTime') as unknown as string;
  }

  public get appsList(): shapes.FmsApp[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putAppsList',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.PutAppsList.AppsList.AppsList'),
        outputPath: 'AppsList.AppsList',
        parameters: {
          AppsList: {
            ListId: this.__input.appsList.listId,
            ListName: this.__input.appsList.listName,
            ListUpdateToken: this.__input.appsList.listUpdateToken,
            CreateTime: this.__input.appsList.createTime,
            LastUpdateTime: this.__input.appsList.lastUpdateTime,
            AppsList: this.__input.appsList.appsList,
            PreviousAppsList: this.__input.appsList.previousAppsList,
          },
          TagList: this.__input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutAppsList.AppsList.AppsList', props);
    return resource.getResponseField('AppsList.AppsList') as unknown as shapes.FmsApp[];
  }

  public get previousAppsList(): Record<string, shapes.FmsApp[]> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putAppsList',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.PutAppsList.AppsList.PreviousAppsList'),
        outputPath: 'AppsList.PreviousAppsList',
        parameters: {
          AppsList: {
            ListId: this.__input.appsList.listId,
            ListName: this.__input.appsList.listName,
            ListUpdateToken: this.__input.appsList.listUpdateToken,
            CreateTime: this.__input.appsList.createTime,
            LastUpdateTime: this.__input.appsList.lastUpdateTime,
            AppsList: this.__input.appsList.appsList,
            PreviousAppsList: this.__input.appsList.previousAppsList,
          },
          TagList: this.__input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutAppsList.AppsList.PreviousAppsList', props);
    return resource.getResponseField('AppsList.PreviousAppsList') as unknown as Record<string, shapes.FmsApp[]>;
  }

}

export class FMSResponsesPutPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FmsPutPolicyRequest) {
  }

  public get policy(): FMSResponsesPutPolicyPolicy {
    return new FMSResponsesPutPolicyPolicy(this.__scope, this.__resources, this.__input);
  }

  public get policyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putPolicy',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.PutPolicy.PolicyArn'),
        outputPath: 'PolicyArn',
        parameters: {
          Policy: {
            PolicyId: this.__input.policy.policyId,
            PolicyName: this.__input.policy.policyName,
            PolicyUpdateToken: this.__input.policy.policyUpdateToken,
            SecurityServicePolicyData: {
              Type: this.__input.policy.securityServicePolicyData.type,
              ManagedServiceData: this.__input.policy.securityServicePolicyData.managedServiceData,
            },
            ResourceType: this.__input.policy.resourceType,
            ResourceTypeList: this.__input.policy.resourceTypeList,
            ResourceTags: this.__input.policy.resourceTags,
            ExcludeResourceTags: this.__input.policy.excludeResourceTags,
            RemediationEnabled: this.__input.policy.remediationEnabled,
            IncludeMap: this.__input.policy.includeMap,
            ExcludeMap: this.__input.policy.excludeMap,
          },
          TagList: this.__input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutPolicy.PolicyArn', props);
    return resource.getResponseField('PolicyArn') as unknown as string;
  }

}

export class FMSResponsesPutPolicyPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FmsPutPolicyRequest) {
  }

  public get policyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putPolicy',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.PutPolicy.Policy.PolicyId'),
        outputPath: 'Policy.PolicyId',
        parameters: {
          Policy: {
            PolicyId: this.__input.policy.policyId,
            PolicyName: this.__input.policy.policyName,
            PolicyUpdateToken: this.__input.policy.policyUpdateToken,
            SecurityServicePolicyData: {
              Type: this.__input.policy.securityServicePolicyData.type,
              ManagedServiceData: this.__input.policy.securityServicePolicyData.managedServiceData,
            },
            ResourceType: this.__input.policy.resourceType,
            ResourceTypeList: this.__input.policy.resourceTypeList,
            ResourceTags: this.__input.policy.resourceTags,
            ExcludeResourceTags: this.__input.policy.excludeResourceTags,
            RemediationEnabled: this.__input.policy.remediationEnabled,
            IncludeMap: this.__input.policy.includeMap,
            ExcludeMap: this.__input.policy.excludeMap,
          },
          TagList: this.__input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutPolicy.Policy.PolicyId', props);
    return resource.getResponseField('Policy.PolicyId') as unknown as string;
  }

  public get policyName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putPolicy',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.PutPolicy.Policy.PolicyName'),
        outputPath: 'Policy.PolicyName',
        parameters: {
          Policy: {
            PolicyId: this.__input.policy.policyId,
            PolicyName: this.__input.policy.policyName,
            PolicyUpdateToken: this.__input.policy.policyUpdateToken,
            SecurityServicePolicyData: {
              Type: this.__input.policy.securityServicePolicyData.type,
              ManagedServiceData: this.__input.policy.securityServicePolicyData.managedServiceData,
            },
            ResourceType: this.__input.policy.resourceType,
            ResourceTypeList: this.__input.policy.resourceTypeList,
            ResourceTags: this.__input.policy.resourceTags,
            ExcludeResourceTags: this.__input.policy.excludeResourceTags,
            RemediationEnabled: this.__input.policy.remediationEnabled,
            IncludeMap: this.__input.policy.includeMap,
            ExcludeMap: this.__input.policy.excludeMap,
          },
          TagList: this.__input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutPolicy.Policy.PolicyName', props);
    return resource.getResponseField('Policy.PolicyName') as unknown as string;
  }

  public get policyUpdateToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putPolicy',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.PutPolicy.Policy.PolicyUpdateToken'),
        outputPath: 'Policy.PolicyUpdateToken',
        parameters: {
          Policy: {
            PolicyId: this.__input.policy.policyId,
            PolicyName: this.__input.policy.policyName,
            PolicyUpdateToken: this.__input.policy.policyUpdateToken,
            SecurityServicePolicyData: {
              Type: this.__input.policy.securityServicePolicyData.type,
              ManagedServiceData: this.__input.policy.securityServicePolicyData.managedServiceData,
            },
            ResourceType: this.__input.policy.resourceType,
            ResourceTypeList: this.__input.policy.resourceTypeList,
            ResourceTags: this.__input.policy.resourceTags,
            ExcludeResourceTags: this.__input.policy.excludeResourceTags,
            RemediationEnabled: this.__input.policy.remediationEnabled,
            IncludeMap: this.__input.policy.includeMap,
            ExcludeMap: this.__input.policy.excludeMap,
          },
          TagList: this.__input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutPolicy.Policy.PolicyUpdateToken', props);
    return resource.getResponseField('Policy.PolicyUpdateToken') as unknown as string;
  }

  public get securityServicePolicyData(): FMSResponsesPutPolicyPolicySecurityServicePolicyData {
    return new FMSResponsesPutPolicyPolicySecurityServicePolicyData(this.__scope, this.__resources, this.__input);
  }

  public get resourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putPolicy',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.PutPolicy.Policy.ResourceType'),
        outputPath: 'Policy.ResourceType',
        parameters: {
          Policy: {
            PolicyId: this.__input.policy.policyId,
            PolicyName: this.__input.policy.policyName,
            PolicyUpdateToken: this.__input.policy.policyUpdateToken,
            SecurityServicePolicyData: {
              Type: this.__input.policy.securityServicePolicyData.type,
              ManagedServiceData: this.__input.policy.securityServicePolicyData.managedServiceData,
            },
            ResourceType: this.__input.policy.resourceType,
            ResourceTypeList: this.__input.policy.resourceTypeList,
            ResourceTags: this.__input.policy.resourceTags,
            ExcludeResourceTags: this.__input.policy.excludeResourceTags,
            RemediationEnabled: this.__input.policy.remediationEnabled,
            IncludeMap: this.__input.policy.includeMap,
            ExcludeMap: this.__input.policy.excludeMap,
          },
          TagList: this.__input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutPolicy.Policy.ResourceType', props);
    return resource.getResponseField('Policy.ResourceType') as unknown as string;
  }

  public get resourceTypeList(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putPolicy',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.PutPolicy.Policy.ResourceTypeList'),
        outputPath: 'Policy.ResourceTypeList',
        parameters: {
          Policy: {
            PolicyId: this.__input.policy.policyId,
            PolicyName: this.__input.policy.policyName,
            PolicyUpdateToken: this.__input.policy.policyUpdateToken,
            SecurityServicePolicyData: {
              Type: this.__input.policy.securityServicePolicyData.type,
              ManagedServiceData: this.__input.policy.securityServicePolicyData.managedServiceData,
            },
            ResourceType: this.__input.policy.resourceType,
            ResourceTypeList: this.__input.policy.resourceTypeList,
            ResourceTags: this.__input.policy.resourceTags,
            ExcludeResourceTags: this.__input.policy.excludeResourceTags,
            RemediationEnabled: this.__input.policy.remediationEnabled,
            IncludeMap: this.__input.policy.includeMap,
            ExcludeMap: this.__input.policy.excludeMap,
          },
          TagList: this.__input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutPolicy.Policy.ResourceTypeList', props);
    return resource.getResponseField('Policy.ResourceTypeList') as unknown as string[];
  }

  public get resourceTags(): shapes.FmsResourceTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putPolicy',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.PutPolicy.Policy.ResourceTags'),
        outputPath: 'Policy.ResourceTags',
        parameters: {
          Policy: {
            PolicyId: this.__input.policy.policyId,
            PolicyName: this.__input.policy.policyName,
            PolicyUpdateToken: this.__input.policy.policyUpdateToken,
            SecurityServicePolicyData: {
              Type: this.__input.policy.securityServicePolicyData.type,
              ManagedServiceData: this.__input.policy.securityServicePolicyData.managedServiceData,
            },
            ResourceType: this.__input.policy.resourceType,
            ResourceTypeList: this.__input.policy.resourceTypeList,
            ResourceTags: this.__input.policy.resourceTags,
            ExcludeResourceTags: this.__input.policy.excludeResourceTags,
            RemediationEnabled: this.__input.policy.remediationEnabled,
            IncludeMap: this.__input.policy.includeMap,
            ExcludeMap: this.__input.policy.excludeMap,
          },
          TagList: this.__input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutPolicy.Policy.ResourceTags', props);
    return resource.getResponseField('Policy.ResourceTags') as unknown as shapes.FmsResourceTag[];
  }

  public get excludeResourceTags(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putPolicy',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.PutPolicy.Policy.ExcludeResourceTags'),
        outputPath: 'Policy.ExcludeResourceTags',
        parameters: {
          Policy: {
            PolicyId: this.__input.policy.policyId,
            PolicyName: this.__input.policy.policyName,
            PolicyUpdateToken: this.__input.policy.policyUpdateToken,
            SecurityServicePolicyData: {
              Type: this.__input.policy.securityServicePolicyData.type,
              ManagedServiceData: this.__input.policy.securityServicePolicyData.managedServiceData,
            },
            ResourceType: this.__input.policy.resourceType,
            ResourceTypeList: this.__input.policy.resourceTypeList,
            ResourceTags: this.__input.policy.resourceTags,
            ExcludeResourceTags: this.__input.policy.excludeResourceTags,
            RemediationEnabled: this.__input.policy.remediationEnabled,
            IncludeMap: this.__input.policy.includeMap,
            ExcludeMap: this.__input.policy.excludeMap,
          },
          TagList: this.__input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutPolicy.Policy.ExcludeResourceTags', props);
    return resource.getResponseField('Policy.ExcludeResourceTags') as unknown as boolean;
  }

  public get remediationEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putPolicy',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.PutPolicy.Policy.RemediationEnabled'),
        outputPath: 'Policy.RemediationEnabled',
        parameters: {
          Policy: {
            PolicyId: this.__input.policy.policyId,
            PolicyName: this.__input.policy.policyName,
            PolicyUpdateToken: this.__input.policy.policyUpdateToken,
            SecurityServicePolicyData: {
              Type: this.__input.policy.securityServicePolicyData.type,
              ManagedServiceData: this.__input.policy.securityServicePolicyData.managedServiceData,
            },
            ResourceType: this.__input.policy.resourceType,
            ResourceTypeList: this.__input.policy.resourceTypeList,
            ResourceTags: this.__input.policy.resourceTags,
            ExcludeResourceTags: this.__input.policy.excludeResourceTags,
            RemediationEnabled: this.__input.policy.remediationEnabled,
            IncludeMap: this.__input.policy.includeMap,
            ExcludeMap: this.__input.policy.excludeMap,
          },
          TagList: this.__input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutPolicy.Policy.RemediationEnabled', props);
    return resource.getResponseField('Policy.RemediationEnabled') as unknown as boolean;
  }

  public get includeMap(): Record<string, string[]> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putPolicy',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.PutPolicy.Policy.IncludeMap'),
        outputPath: 'Policy.IncludeMap',
        parameters: {
          Policy: {
            PolicyId: this.__input.policy.policyId,
            PolicyName: this.__input.policy.policyName,
            PolicyUpdateToken: this.__input.policy.policyUpdateToken,
            SecurityServicePolicyData: {
              Type: this.__input.policy.securityServicePolicyData.type,
              ManagedServiceData: this.__input.policy.securityServicePolicyData.managedServiceData,
            },
            ResourceType: this.__input.policy.resourceType,
            ResourceTypeList: this.__input.policy.resourceTypeList,
            ResourceTags: this.__input.policy.resourceTags,
            ExcludeResourceTags: this.__input.policy.excludeResourceTags,
            RemediationEnabled: this.__input.policy.remediationEnabled,
            IncludeMap: this.__input.policy.includeMap,
            ExcludeMap: this.__input.policy.excludeMap,
          },
          TagList: this.__input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutPolicy.Policy.IncludeMap', props);
    return resource.getResponseField('Policy.IncludeMap') as unknown as Record<string, string[]>;
  }

  public get excludeMap(): Record<string, string[]> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putPolicy',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.PutPolicy.Policy.ExcludeMap'),
        outputPath: 'Policy.ExcludeMap',
        parameters: {
          Policy: {
            PolicyId: this.__input.policy.policyId,
            PolicyName: this.__input.policy.policyName,
            PolicyUpdateToken: this.__input.policy.policyUpdateToken,
            SecurityServicePolicyData: {
              Type: this.__input.policy.securityServicePolicyData.type,
              ManagedServiceData: this.__input.policy.securityServicePolicyData.managedServiceData,
            },
            ResourceType: this.__input.policy.resourceType,
            ResourceTypeList: this.__input.policy.resourceTypeList,
            ResourceTags: this.__input.policy.resourceTags,
            ExcludeResourceTags: this.__input.policy.excludeResourceTags,
            RemediationEnabled: this.__input.policy.remediationEnabled,
            IncludeMap: this.__input.policy.includeMap,
            ExcludeMap: this.__input.policy.excludeMap,
          },
          TagList: this.__input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutPolicy.Policy.ExcludeMap', props);
    return resource.getResponseField('Policy.ExcludeMap') as unknown as Record<string, string[]>;
  }

}

export class FMSResponsesPutPolicyPolicySecurityServicePolicyData {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FmsPutPolicyRequest) {
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putPolicy',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.PutPolicy.Policy.SecurityServicePolicyData.Type'),
        outputPath: 'Policy.SecurityServicePolicyData.Type',
        parameters: {
          Policy: {
            PolicyId: this.__input.policy.policyId,
            PolicyName: this.__input.policy.policyName,
            PolicyUpdateToken: this.__input.policy.policyUpdateToken,
            SecurityServicePolicyData: {
              Type: this.__input.policy.securityServicePolicyData.type,
              ManagedServiceData: this.__input.policy.securityServicePolicyData.managedServiceData,
            },
            ResourceType: this.__input.policy.resourceType,
            ResourceTypeList: this.__input.policy.resourceTypeList,
            ResourceTags: this.__input.policy.resourceTags,
            ExcludeResourceTags: this.__input.policy.excludeResourceTags,
            RemediationEnabled: this.__input.policy.remediationEnabled,
            IncludeMap: this.__input.policy.includeMap,
            ExcludeMap: this.__input.policy.excludeMap,
          },
          TagList: this.__input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutPolicy.Policy.SecurityServicePolicyData.Type', props);
    return resource.getResponseField('Policy.SecurityServicePolicyData.Type') as unknown as string;
  }

  public get managedServiceData(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putPolicy',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.PutPolicy.Policy.SecurityServicePolicyData.ManagedServiceData'),
        outputPath: 'Policy.SecurityServicePolicyData.ManagedServiceData',
        parameters: {
          Policy: {
            PolicyId: this.__input.policy.policyId,
            PolicyName: this.__input.policy.policyName,
            PolicyUpdateToken: this.__input.policy.policyUpdateToken,
            SecurityServicePolicyData: {
              Type: this.__input.policy.securityServicePolicyData.type,
              ManagedServiceData: this.__input.policy.securityServicePolicyData.managedServiceData,
            },
            ResourceType: this.__input.policy.resourceType,
            ResourceTypeList: this.__input.policy.resourceTypeList,
            ResourceTags: this.__input.policy.resourceTags,
            ExcludeResourceTags: this.__input.policy.excludeResourceTags,
            RemediationEnabled: this.__input.policy.remediationEnabled,
            IncludeMap: this.__input.policy.includeMap,
            ExcludeMap: this.__input.policy.excludeMap,
          },
          TagList: this.__input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutPolicy.Policy.SecurityServicePolicyData.ManagedServiceData', props);
    return resource.getResponseField('Policy.SecurityServicePolicyData.ManagedServiceData') as unknown as string;
  }

}

export class FMSResponsesPutProtocolsList {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FmsPutProtocolsListRequest) {
  }

  public get protocolsList(): FMSResponsesPutProtocolsListProtocolsList {
    return new FMSResponsesPutProtocolsListProtocolsList(this.__scope, this.__resources, this.__input);
  }

  public get protocolsListArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putProtocolsList',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.PutProtocolsList.ProtocolsListArn'),
        outputPath: 'ProtocolsListArn',
        parameters: {
          ProtocolsList: {
            ListId: this.__input.protocolsList.listId,
            ListName: this.__input.protocolsList.listName,
            ListUpdateToken: this.__input.protocolsList.listUpdateToken,
            CreateTime: this.__input.protocolsList.createTime,
            LastUpdateTime: this.__input.protocolsList.lastUpdateTime,
            ProtocolsList: this.__input.protocolsList.protocolsList,
            PreviousProtocolsList: this.__input.protocolsList.previousProtocolsList,
          },
          TagList: this.__input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutProtocolsList.ProtocolsListArn', props);
    return resource.getResponseField('ProtocolsListArn') as unknown as string;
  }

}

export class FMSResponsesPutProtocolsListProtocolsList {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FmsPutProtocolsListRequest) {
  }

  public get listId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putProtocolsList',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.PutProtocolsList.ProtocolsList.ListId'),
        outputPath: 'ProtocolsList.ListId',
        parameters: {
          ProtocolsList: {
            ListId: this.__input.protocolsList.listId,
            ListName: this.__input.protocolsList.listName,
            ListUpdateToken: this.__input.protocolsList.listUpdateToken,
            CreateTime: this.__input.protocolsList.createTime,
            LastUpdateTime: this.__input.protocolsList.lastUpdateTime,
            ProtocolsList: this.__input.protocolsList.protocolsList,
            PreviousProtocolsList: this.__input.protocolsList.previousProtocolsList,
          },
          TagList: this.__input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutProtocolsList.ProtocolsList.ListId', props);
    return resource.getResponseField('ProtocolsList.ListId') as unknown as string;
  }

  public get listName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putProtocolsList',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.PutProtocolsList.ProtocolsList.ListName'),
        outputPath: 'ProtocolsList.ListName',
        parameters: {
          ProtocolsList: {
            ListId: this.__input.protocolsList.listId,
            ListName: this.__input.protocolsList.listName,
            ListUpdateToken: this.__input.protocolsList.listUpdateToken,
            CreateTime: this.__input.protocolsList.createTime,
            LastUpdateTime: this.__input.protocolsList.lastUpdateTime,
            ProtocolsList: this.__input.protocolsList.protocolsList,
            PreviousProtocolsList: this.__input.protocolsList.previousProtocolsList,
          },
          TagList: this.__input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutProtocolsList.ProtocolsList.ListName', props);
    return resource.getResponseField('ProtocolsList.ListName') as unknown as string;
  }

  public get listUpdateToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putProtocolsList',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.PutProtocolsList.ProtocolsList.ListUpdateToken'),
        outputPath: 'ProtocolsList.ListUpdateToken',
        parameters: {
          ProtocolsList: {
            ListId: this.__input.protocolsList.listId,
            ListName: this.__input.protocolsList.listName,
            ListUpdateToken: this.__input.protocolsList.listUpdateToken,
            CreateTime: this.__input.protocolsList.createTime,
            LastUpdateTime: this.__input.protocolsList.lastUpdateTime,
            ProtocolsList: this.__input.protocolsList.protocolsList,
            PreviousProtocolsList: this.__input.protocolsList.previousProtocolsList,
          },
          TagList: this.__input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutProtocolsList.ProtocolsList.ListUpdateToken', props);
    return resource.getResponseField('ProtocolsList.ListUpdateToken') as unknown as string;
  }

  public get createTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putProtocolsList',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.PutProtocolsList.ProtocolsList.CreateTime'),
        outputPath: 'ProtocolsList.CreateTime',
        parameters: {
          ProtocolsList: {
            ListId: this.__input.protocolsList.listId,
            ListName: this.__input.protocolsList.listName,
            ListUpdateToken: this.__input.protocolsList.listUpdateToken,
            CreateTime: this.__input.protocolsList.createTime,
            LastUpdateTime: this.__input.protocolsList.lastUpdateTime,
            ProtocolsList: this.__input.protocolsList.protocolsList,
            PreviousProtocolsList: this.__input.protocolsList.previousProtocolsList,
          },
          TagList: this.__input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutProtocolsList.ProtocolsList.CreateTime', props);
    return resource.getResponseField('ProtocolsList.CreateTime') as unknown as string;
  }

  public get lastUpdateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putProtocolsList',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.PutProtocolsList.ProtocolsList.LastUpdateTime'),
        outputPath: 'ProtocolsList.LastUpdateTime',
        parameters: {
          ProtocolsList: {
            ListId: this.__input.protocolsList.listId,
            ListName: this.__input.protocolsList.listName,
            ListUpdateToken: this.__input.protocolsList.listUpdateToken,
            CreateTime: this.__input.protocolsList.createTime,
            LastUpdateTime: this.__input.protocolsList.lastUpdateTime,
            ProtocolsList: this.__input.protocolsList.protocolsList,
            PreviousProtocolsList: this.__input.protocolsList.previousProtocolsList,
          },
          TagList: this.__input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutProtocolsList.ProtocolsList.LastUpdateTime', props);
    return resource.getResponseField('ProtocolsList.LastUpdateTime') as unknown as string;
  }

  public get protocolsList(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putProtocolsList',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.PutProtocolsList.ProtocolsList.ProtocolsList'),
        outputPath: 'ProtocolsList.ProtocolsList',
        parameters: {
          ProtocolsList: {
            ListId: this.__input.protocolsList.listId,
            ListName: this.__input.protocolsList.listName,
            ListUpdateToken: this.__input.protocolsList.listUpdateToken,
            CreateTime: this.__input.protocolsList.createTime,
            LastUpdateTime: this.__input.protocolsList.lastUpdateTime,
            ProtocolsList: this.__input.protocolsList.protocolsList,
            PreviousProtocolsList: this.__input.protocolsList.previousProtocolsList,
          },
          TagList: this.__input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutProtocolsList.ProtocolsList.ProtocolsList', props);
    return resource.getResponseField('ProtocolsList.ProtocolsList') as unknown as string[];
  }

  public get previousProtocolsList(): Record<string, string[]> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putProtocolsList',
        service: 'FMS',
        physicalResourceId: cr.PhysicalResourceId.of('FMS.PutProtocolsList.ProtocolsList.PreviousProtocolsList'),
        outputPath: 'ProtocolsList.PreviousProtocolsList',
        parameters: {
          ProtocolsList: {
            ListId: this.__input.protocolsList.listId,
            ListName: this.__input.protocolsList.listName,
            ListUpdateToken: this.__input.protocolsList.listUpdateToken,
            CreateTime: this.__input.protocolsList.createTime,
            LastUpdateTime: this.__input.protocolsList.lastUpdateTime,
            ProtocolsList: this.__input.protocolsList.protocolsList,
            PreviousProtocolsList: this.__input.protocolsList.previousProtocolsList,
          },
          TagList: this.__input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutProtocolsList.ProtocolsList.PreviousProtocolsList', props);
    return resource.getResponseField('ProtocolsList.PreviousProtocolsList') as unknown as Record<string, string[]>;
  }

}

