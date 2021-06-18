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

  public fetchAdminAccount(): FMSFetchAdminAccount {
    return new FMSFetchAdminAccount(this, 'FetchAdminAccount', this.__resources);
  }

  public fetchAppsList(input: shapes.FmsGetAppsListRequest): FMSFetchAppsList {
    return new FMSFetchAppsList(this, 'FetchAppsList', this.__resources, input);
  }

  public fetchComplianceDetail(input: shapes.FmsGetComplianceDetailRequest): FMSFetchComplianceDetail {
    return new FMSFetchComplianceDetail(this, 'FetchComplianceDetail', this.__resources, input);
  }

  public fetchNotificationChannel(): FMSFetchNotificationChannel {
    return new FMSFetchNotificationChannel(this, 'FetchNotificationChannel', this.__resources);
  }

  public fetchPolicy(input: shapes.FmsGetPolicyRequest): FMSFetchPolicy {
    return new FMSFetchPolicy(this, 'FetchPolicy', this.__resources, input);
  }

  public fetchProtectionStatus(input: shapes.FmsGetProtectionStatusRequest): FMSFetchProtectionStatus {
    return new FMSFetchProtectionStatus(this, 'FetchProtectionStatus', this.__resources, input);
  }

  public fetchProtocolsList(input: shapes.FmsGetProtocolsListRequest): FMSFetchProtocolsList {
    return new FMSFetchProtocolsList(this, 'FetchProtocolsList', this.__resources, input);
  }

  public fetchViolationDetails(input: shapes.FmsGetViolationDetailsRequest): FMSFetchViolationDetails {
    return new FMSFetchViolationDetails(this, 'FetchViolationDetails', this.__resources, input);
  }

  public listAppsLists(input: shapes.FmsListAppsListsRequest): FMSListAppsLists {
    return new FMSListAppsLists(this, 'ListAppsLists', this.__resources, input);
  }

  public listComplianceStatus(input: shapes.FmsListComplianceStatusRequest): FMSListComplianceStatus {
    return new FMSListComplianceStatus(this, 'ListComplianceStatus', this.__resources, input);
  }

  public listMemberAccounts(input: shapes.FmsListMemberAccountsRequest): FMSListMemberAccounts {
    return new FMSListMemberAccounts(this, 'ListMemberAccounts', this.__resources, input);
  }

  public listPolicies(input: shapes.FmsListPoliciesRequest): FMSListPolicies {
    return new FMSListPolicies(this, 'ListPolicies', this.__resources, input);
  }

  public listProtocolsLists(input: shapes.FmsListProtocolsListsRequest): FMSListProtocolsLists {
    return new FMSListProtocolsLists(this, 'ListProtocolsLists', this.__resources, input);
  }

  public listTagsForResource(input: shapes.FmsListTagsForResourceRequest): FMSListTagsForResource {
    return new FMSListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public putAppsList(input: shapes.FmsPutAppsListRequest): FMSPutAppsList {
    return new FMSPutAppsList(this, 'PutAppsList', this.__resources, input);
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

  public putPolicy(input: shapes.FmsPutPolicyRequest): FMSPutPolicy {
    return new FMSPutPolicy(this, 'PutPolicy', this.__resources, input);
  }

  public putProtocolsList(input: shapes.FmsPutProtocolsListRequest): FMSPutProtocolsList {
    return new FMSPutProtocolsList(this, 'PutProtocolsList', this.__resources, input);
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

export class FMSFetchAdminAccount extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'GetAdminAccount.AdminAccount', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetAdminAccount.RoleStatus', props);
    return resource.getResponseField('RoleStatus') as unknown as string;
  }

}

export class FMSFetchAppsList extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FmsGetAppsListRequest) {
    super(scope, id);
  }

  public get appsList(): FMSFetchAppsListAppsList {
    return new FMSFetchAppsListAppsList(this, 'AppsList', this.__resources, this.input);
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
          ListId: this.input.listId,
          DefaultList: this.input.defaultList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAppsList.AppsListArn', props);
    return resource.getResponseField('AppsListArn') as unknown as string;
  }

}

export class FMSFetchAppsListAppsList extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FmsGetAppsListRequest) {
    super(scope, id);
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
          ListId: this.input.listId,
          DefaultList: this.input.defaultList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAppsList.AppsList.ListId', props);
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
          ListId: this.input.listId,
          DefaultList: this.input.defaultList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAppsList.AppsList.ListName', props);
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
          ListId: this.input.listId,
          DefaultList: this.input.defaultList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAppsList.AppsList.ListUpdateToken', props);
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
          ListId: this.input.listId,
          DefaultList: this.input.defaultList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAppsList.AppsList.CreateTime', props);
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
          ListId: this.input.listId,
          DefaultList: this.input.defaultList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAppsList.AppsList.LastUpdateTime', props);
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
          ListId: this.input.listId,
          DefaultList: this.input.defaultList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAppsList.AppsList.AppsList', props);
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
          ListId: this.input.listId,
          DefaultList: this.input.defaultList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAppsList.AppsList.PreviousAppsList', props);
    return resource.getResponseField('AppsList.PreviousAppsList') as unknown as Record<string, shapes.FmsApp[]>;
  }

}

export class FMSFetchComplianceDetail extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FmsGetComplianceDetailRequest) {
    super(scope, id);
  }

  public get policyComplianceDetail(): FMSFetchComplianceDetailPolicyComplianceDetail {
    return new FMSFetchComplianceDetailPolicyComplianceDetail(this, 'PolicyComplianceDetail', this.__resources, this.input);
  }

}

export class FMSFetchComplianceDetailPolicyComplianceDetail extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FmsGetComplianceDetailRequest) {
    super(scope, id);
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
          PolicyId: this.input.policyId,
          MemberAccount: this.input.memberAccount,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetComplianceDetail.PolicyComplianceDetail.PolicyOwner', props);
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
          PolicyId: this.input.policyId,
          MemberAccount: this.input.memberAccount,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetComplianceDetail.PolicyComplianceDetail.PolicyId', props);
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
          PolicyId: this.input.policyId,
          MemberAccount: this.input.memberAccount,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetComplianceDetail.PolicyComplianceDetail.MemberAccount', props);
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
          PolicyId: this.input.policyId,
          MemberAccount: this.input.memberAccount,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetComplianceDetail.PolicyComplianceDetail.Violators', props);
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
          PolicyId: this.input.policyId,
          MemberAccount: this.input.memberAccount,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetComplianceDetail.PolicyComplianceDetail.EvaluationLimitExceeded', props);
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
          PolicyId: this.input.policyId,
          MemberAccount: this.input.memberAccount,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetComplianceDetail.PolicyComplianceDetail.ExpiredAt', props);
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
          PolicyId: this.input.policyId,
          MemberAccount: this.input.memberAccount,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetComplianceDetail.PolicyComplianceDetail.IssueInfoMap', props);
    return resource.getResponseField('PolicyComplianceDetail.IssueInfoMap') as unknown as Record<string, string>;
  }

}

export class FMSFetchNotificationChannel extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'GetNotificationChannel.SnsTopicArn', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetNotificationChannel.SnsRoleName', props);
    return resource.getResponseField('SnsRoleName') as unknown as string;
  }

}

export class FMSFetchPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FmsGetPolicyRequest) {
    super(scope, id);
  }

  public get policy(): FMSFetchPolicyPolicy {
    return new FMSFetchPolicyPolicy(this, 'Policy', this.__resources, this.input);
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
          PolicyId: this.input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPolicy.PolicyArn', props);
    return resource.getResponseField('PolicyArn') as unknown as string;
  }

}

export class FMSFetchPolicyPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FmsGetPolicyRequest) {
    super(scope, id);
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
          PolicyId: this.input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPolicy.Policy.PolicyId', props);
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
          PolicyId: this.input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPolicy.Policy.PolicyName', props);
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
          PolicyId: this.input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPolicy.Policy.PolicyUpdateToken', props);
    return resource.getResponseField('Policy.PolicyUpdateToken') as unknown as string;
  }

  public get securityServicePolicyData(): FMSFetchPolicyPolicySecurityServicePolicyData {
    return new FMSFetchPolicyPolicySecurityServicePolicyData(this, 'SecurityServicePolicyData', this.__resources, this.input);
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
          PolicyId: this.input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPolicy.Policy.ResourceType', props);
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
          PolicyId: this.input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPolicy.Policy.ResourceTypeList', props);
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
          PolicyId: this.input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPolicy.Policy.ResourceTags', props);
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
          PolicyId: this.input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPolicy.Policy.ExcludeResourceTags', props);
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
          PolicyId: this.input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPolicy.Policy.RemediationEnabled', props);
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
          PolicyId: this.input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPolicy.Policy.IncludeMap', props);
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
          PolicyId: this.input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPolicy.Policy.ExcludeMap', props);
    return resource.getResponseField('Policy.ExcludeMap') as unknown as Record<string, string[]>;
  }

}

export class FMSFetchPolicyPolicySecurityServicePolicyData extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FmsGetPolicyRequest) {
    super(scope, id);
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
          PolicyId: this.input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPolicy.Policy.SecurityServicePolicyData.Type', props);
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
          PolicyId: this.input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPolicy.Policy.SecurityServicePolicyData.ManagedServiceData', props);
    return resource.getResponseField('Policy.SecurityServicePolicyData.ManagedServiceData') as unknown as string;
  }

}

export class FMSFetchProtectionStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FmsGetProtectionStatusRequest) {
    super(scope, id);
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
          PolicyId: this.input.policyId,
          MemberAccountId: this.input.memberAccountId,
          StartTime: this.input.startTime,
          EndTime: this.input.endTime,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetProtectionStatus.AdminAccountId', props);
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
          PolicyId: this.input.policyId,
          MemberAccountId: this.input.memberAccountId,
          StartTime: this.input.startTime,
          EndTime: this.input.endTime,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetProtectionStatus.ServiceType', props);
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
          PolicyId: this.input.policyId,
          MemberAccountId: this.input.memberAccountId,
          StartTime: this.input.startTime,
          EndTime: this.input.endTime,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetProtectionStatus.Data', props);
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
          PolicyId: this.input.policyId,
          MemberAccountId: this.input.memberAccountId,
          StartTime: this.input.startTime,
          EndTime: this.input.endTime,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetProtectionStatus.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class FMSFetchProtocolsList extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FmsGetProtocolsListRequest) {
    super(scope, id);
  }

  public get protocolsList(): FMSFetchProtocolsListProtocolsList {
    return new FMSFetchProtocolsListProtocolsList(this, 'ProtocolsList', this.__resources, this.input);
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
          ListId: this.input.listId,
          DefaultList: this.input.defaultList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetProtocolsList.ProtocolsListArn', props);
    return resource.getResponseField('ProtocolsListArn') as unknown as string;
  }

}

export class FMSFetchProtocolsListProtocolsList extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FmsGetProtocolsListRequest) {
    super(scope, id);
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
          ListId: this.input.listId,
          DefaultList: this.input.defaultList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetProtocolsList.ProtocolsList.ListId', props);
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
          ListId: this.input.listId,
          DefaultList: this.input.defaultList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetProtocolsList.ProtocolsList.ListName', props);
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
          ListId: this.input.listId,
          DefaultList: this.input.defaultList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetProtocolsList.ProtocolsList.ListUpdateToken', props);
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
          ListId: this.input.listId,
          DefaultList: this.input.defaultList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetProtocolsList.ProtocolsList.CreateTime', props);
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
          ListId: this.input.listId,
          DefaultList: this.input.defaultList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetProtocolsList.ProtocolsList.LastUpdateTime', props);
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
          ListId: this.input.listId,
          DefaultList: this.input.defaultList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetProtocolsList.ProtocolsList.ProtocolsList', props);
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
          ListId: this.input.listId,
          DefaultList: this.input.defaultList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetProtocolsList.ProtocolsList.PreviousProtocolsList', props);
    return resource.getResponseField('ProtocolsList.PreviousProtocolsList') as unknown as Record<string, string[]>;
  }

}

export class FMSFetchViolationDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FmsGetViolationDetailsRequest) {
    super(scope, id);
  }

  public get violationDetail(): FMSFetchViolationDetailsViolationDetail {
    return new FMSFetchViolationDetailsViolationDetail(this, 'ViolationDetail', this.__resources, this.input);
  }

}

export class FMSFetchViolationDetailsViolationDetail extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FmsGetViolationDetailsRequest) {
    super(scope, id);
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
          PolicyId: this.input.policyId,
          MemberAccount: this.input.memberAccount,
          ResourceId: this.input.resourceId,
          ResourceType: this.input.resourceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetViolationDetails.ViolationDetail.PolicyId', props);
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
          PolicyId: this.input.policyId,
          MemberAccount: this.input.memberAccount,
          ResourceId: this.input.resourceId,
          ResourceType: this.input.resourceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetViolationDetails.ViolationDetail.MemberAccount', props);
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
          PolicyId: this.input.policyId,
          MemberAccount: this.input.memberAccount,
          ResourceId: this.input.resourceId,
          ResourceType: this.input.resourceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetViolationDetails.ViolationDetail.ResourceId', props);
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
          PolicyId: this.input.policyId,
          MemberAccount: this.input.memberAccount,
          ResourceId: this.input.resourceId,
          ResourceType: this.input.resourceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetViolationDetails.ViolationDetail.ResourceType', props);
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
          PolicyId: this.input.policyId,
          MemberAccount: this.input.memberAccount,
          ResourceId: this.input.resourceId,
          ResourceType: this.input.resourceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetViolationDetails.ViolationDetail.ResourceViolations', props);
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
          PolicyId: this.input.policyId,
          MemberAccount: this.input.memberAccount,
          ResourceId: this.input.resourceId,
          ResourceType: this.input.resourceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetViolationDetails.ViolationDetail.ResourceTags', props);
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
          PolicyId: this.input.policyId,
          MemberAccount: this.input.memberAccount,
          ResourceId: this.input.resourceId,
          ResourceType: this.input.resourceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetViolationDetails.ViolationDetail.ResourceDescription', props);
    return resource.getResponseField('ViolationDetail.ResourceDescription') as unknown as string;
  }

}

export class FMSListAppsLists extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FmsListAppsListsRequest) {
    super(scope, id);
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
          DefaultLists: this.input.defaultLists,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAppsLists.AppsLists', props);
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
          DefaultLists: this.input.defaultLists,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAppsLists.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class FMSListComplianceStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FmsListComplianceStatusRequest) {
    super(scope, id);
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
          PolicyId: this.input.policyId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListComplianceStatus.PolicyComplianceStatusList', props);
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
          PolicyId: this.input.policyId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListComplianceStatus.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class FMSListMemberAccounts extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FmsListMemberAccountsRequest) {
    super(scope, id);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListMemberAccounts.MemberAccounts', props);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListMemberAccounts.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class FMSListPolicies extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FmsListPoliciesRequest) {
    super(scope, id);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPolicies.PolicyList', props);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPolicies.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class FMSListProtocolsLists extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FmsListProtocolsListsRequest) {
    super(scope, id);
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
          DefaultLists: this.input.defaultLists,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListProtocolsLists.ProtocolsLists', props);
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
          DefaultLists: this.input.defaultLists,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListProtocolsLists.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class FMSListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FmsListTagsForResourceRequest) {
    super(scope, id);
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
          ResourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.TagList', props);
    return resource.getResponseField('TagList') as unknown as shapes.FmsTag[];
  }

}

export class FMSPutAppsList extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FmsPutAppsListRequest) {
    super(scope, id);
  }

  public get appsList(): FMSPutAppsListAppsList {
    return new FMSPutAppsListAppsList(this, 'AppsList', this.__resources, this.input);
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
            ListId: this.input.appsList.listId,
            ListName: this.input.appsList.listName,
            ListUpdateToken: this.input.appsList.listUpdateToken,
            CreateTime: this.input.appsList.createTime,
            LastUpdateTime: this.input.appsList.lastUpdateTime,
            AppsList: this.input.appsList.appsList,
            PreviousAppsList: this.input.appsList.previousAppsList,
          },
          TagList: this.input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutAppsList.AppsListArn', props);
    return resource.getResponseField('AppsListArn') as unknown as string;
  }

}

export class FMSPutAppsListAppsList extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FmsPutAppsListRequest) {
    super(scope, id);
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
            ListId: this.input.appsList.listId,
            ListName: this.input.appsList.listName,
            ListUpdateToken: this.input.appsList.listUpdateToken,
            CreateTime: this.input.appsList.createTime,
            LastUpdateTime: this.input.appsList.lastUpdateTime,
            AppsList: this.input.appsList.appsList,
            PreviousAppsList: this.input.appsList.previousAppsList,
          },
          TagList: this.input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutAppsList.AppsList.ListId', props);
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
            ListId: this.input.appsList.listId,
            ListName: this.input.appsList.listName,
            ListUpdateToken: this.input.appsList.listUpdateToken,
            CreateTime: this.input.appsList.createTime,
            LastUpdateTime: this.input.appsList.lastUpdateTime,
            AppsList: this.input.appsList.appsList,
            PreviousAppsList: this.input.appsList.previousAppsList,
          },
          TagList: this.input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutAppsList.AppsList.ListName', props);
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
            ListId: this.input.appsList.listId,
            ListName: this.input.appsList.listName,
            ListUpdateToken: this.input.appsList.listUpdateToken,
            CreateTime: this.input.appsList.createTime,
            LastUpdateTime: this.input.appsList.lastUpdateTime,
            AppsList: this.input.appsList.appsList,
            PreviousAppsList: this.input.appsList.previousAppsList,
          },
          TagList: this.input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutAppsList.AppsList.ListUpdateToken', props);
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
            ListId: this.input.appsList.listId,
            ListName: this.input.appsList.listName,
            ListUpdateToken: this.input.appsList.listUpdateToken,
            CreateTime: this.input.appsList.createTime,
            LastUpdateTime: this.input.appsList.lastUpdateTime,
            AppsList: this.input.appsList.appsList,
            PreviousAppsList: this.input.appsList.previousAppsList,
          },
          TagList: this.input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutAppsList.AppsList.CreateTime', props);
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
            ListId: this.input.appsList.listId,
            ListName: this.input.appsList.listName,
            ListUpdateToken: this.input.appsList.listUpdateToken,
            CreateTime: this.input.appsList.createTime,
            LastUpdateTime: this.input.appsList.lastUpdateTime,
            AppsList: this.input.appsList.appsList,
            PreviousAppsList: this.input.appsList.previousAppsList,
          },
          TagList: this.input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutAppsList.AppsList.LastUpdateTime', props);
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
            ListId: this.input.appsList.listId,
            ListName: this.input.appsList.listName,
            ListUpdateToken: this.input.appsList.listUpdateToken,
            CreateTime: this.input.appsList.createTime,
            LastUpdateTime: this.input.appsList.lastUpdateTime,
            AppsList: this.input.appsList.appsList,
            PreviousAppsList: this.input.appsList.previousAppsList,
          },
          TagList: this.input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutAppsList.AppsList.AppsList', props);
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
            ListId: this.input.appsList.listId,
            ListName: this.input.appsList.listName,
            ListUpdateToken: this.input.appsList.listUpdateToken,
            CreateTime: this.input.appsList.createTime,
            LastUpdateTime: this.input.appsList.lastUpdateTime,
            AppsList: this.input.appsList.appsList,
            PreviousAppsList: this.input.appsList.previousAppsList,
          },
          TagList: this.input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutAppsList.AppsList.PreviousAppsList', props);
    return resource.getResponseField('AppsList.PreviousAppsList') as unknown as Record<string, shapes.FmsApp[]>;
  }

}

export class FMSPutPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FmsPutPolicyRequest) {
    super(scope, id);
  }

  public get policy(): FMSPutPolicyPolicy {
    return new FMSPutPolicyPolicy(this, 'Policy', this.__resources, this.input);
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
            PolicyId: this.input.policy.policyId,
            PolicyName: this.input.policy.policyName,
            PolicyUpdateToken: this.input.policy.policyUpdateToken,
            SecurityServicePolicyData: {
              Type: this.input.policy.securityServicePolicyData.type,
              ManagedServiceData: this.input.policy.securityServicePolicyData.managedServiceData,
            },
            ResourceType: this.input.policy.resourceType,
            ResourceTypeList: this.input.policy.resourceTypeList,
            ResourceTags: this.input.policy.resourceTags,
            ExcludeResourceTags: this.input.policy.excludeResourceTags,
            RemediationEnabled: this.input.policy.remediationEnabled,
            IncludeMap: this.input.policy.includeMap,
            ExcludeMap: this.input.policy.excludeMap,
          },
          TagList: this.input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutPolicy.PolicyArn', props);
    return resource.getResponseField('PolicyArn') as unknown as string;
  }

}

export class FMSPutPolicyPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FmsPutPolicyRequest) {
    super(scope, id);
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
            PolicyId: this.input.policy.policyId,
            PolicyName: this.input.policy.policyName,
            PolicyUpdateToken: this.input.policy.policyUpdateToken,
            SecurityServicePolicyData: {
              Type: this.input.policy.securityServicePolicyData.type,
              ManagedServiceData: this.input.policy.securityServicePolicyData.managedServiceData,
            },
            ResourceType: this.input.policy.resourceType,
            ResourceTypeList: this.input.policy.resourceTypeList,
            ResourceTags: this.input.policy.resourceTags,
            ExcludeResourceTags: this.input.policy.excludeResourceTags,
            RemediationEnabled: this.input.policy.remediationEnabled,
            IncludeMap: this.input.policy.includeMap,
            ExcludeMap: this.input.policy.excludeMap,
          },
          TagList: this.input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutPolicy.Policy.PolicyId', props);
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
            PolicyId: this.input.policy.policyId,
            PolicyName: this.input.policy.policyName,
            PolicyUpdateToken: this.input.policy.policyUpdateToken,
            SecurityServicePolicyData: {
              Type: this.input.policy.securityServicePolicyData.type,
              ManagedServiceData: this.input.policy.securityServicePolicyData.managedServiceData,
            },
            ResourceType: this.input.policy.resourceType,
            ResourceTypeList: this.input.policy.resourceTypeList,
            ResourceTags: this.input.policy.resourceTags,
            ExcludeResourceTags: this.input.policy.excludeResourceTags,
            RemediationEnabled: this.input.policy.remediationEnabled,
            IncludeMap: this.input.policy.includeMap,
            ExcludeMap: this.input.policy.excludeMap,
          },
          TagList: this.input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutPolicy.Policy.PolicyName', props);
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
            PolicyId: this.input.policy.policyId,
            PolicyName: this.input.policy.policyName,
            PolicyUpdateToken: this.input.policy.policyUpdateToken,
            SecurityServicePolicyData: {
              Type: this.input.policy.securityServicePolicyData.type,
              ManagedServiceData: this.input.policy.securityServicePolicyData.managedServiceData,
            },
            ResourceType: this.input.policy.resourceType,
            ResourceTypeList: this.input.policy.resourceTypeList,
            ResourceTags: this.input.policy.resourceTags,
            ExcludeResourceTags: this.input.policy.excludeResourceTags,
            RemediationEnabled: this.input.policy.remediationEnabled,
            IncludeMap: this.input.policy.includeMap,
            ExcludeMap: this.input.policy.excludeMap,
          },
          TagList: this.input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutPolicy.Policy.PolicyUpdateToken', props);
    return resource.getResponseField('Policy.PolicyUpdateToken') as unknown as string;
  }

  public get securityServicePolicyData(): FMSPutPolicyPolicySecurityServicePolicyData {
    return new FMSPutPolicyPolicySecurityServicePolicyData(this, 'SecurityServicePolicyData', this.__resources, this.input);
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
            PolicyId: this.input.policy.policyId,
            PolicyName: this.input.policy.policyName,
            PolicyUpdateToken: this.input.policy.policyUpdateToken,
            SecurityServicePolicyData: {
              Type: this.input.policy.securityServicePolicyData.type,
              ManagedServiceData: this.input.policy.securityServicePolicyData.managedServiceData,
            },
            ResourceType: this.input.policy.resourceType,
            ResourceTypeList: this.input.policy.resourceTypeList,
            ResourceTags: this.input.policy.resourceTags,
            ExcludeResourceTags: this.input.policy.excludeResourceTags,
            RemediationEnabled: this.input.policy.remediationEnabled,
            IncludeMap: this.input.policy.includeMap,
            ExcludeMap: this.input.policy.excludeMap,
          },
          TagList: this.input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutPolicy.Policy.ResourceType', props);
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
            PolicyId: this.input.policy.policyId,
            PolicyName: this.input.policy.policyName,
            PolicyUpdateToken: this.input.policy.policyUpdateToken,
            SecurityServicePolicyData: {
              Type: this.input.policy.securityServicePolicyData.type,
              ManagedServiceData: this.input.policy.securityServicePolicyData.managedServiceData,
            },
            ResourceType: this.input.policy.resourceType,
            ResourceTypeList: this.input.policy.resourceTypeList,
            ResourceTags: this.input.policy.resourceTags,
            ExcludeResourceTags: this.input.policy.excludeResourceTags,
            RemediationEnabled: this.input.policy.remediationEnabled,
            IncludeMap: this.input.policy.includeMap,
            ExcludeMap: this.input.policy.excludeMap,
          },
          TagList: this.input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutPolicy.Policy.ResourceTypeList', props);
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
            PolicyId: this.input.policy.policyId,
            PolicyName: this.input.policy.policyName,
            PolicyUpdateToken: this.input.policy.policyUpdateToken,
            SecurityServicePolicyData: {
              Type: this.input.policy.securityServicePolicyData.type,
              ManagedServiceData: this.input.policy.securityServicePolicyData.managedServiceData,
            },
            ResourceType: this.input.policy.resourceType,
            ResourceTypeList: this.input.policy.resourceTypeList,
            ResourceTags: this.input.policy.resourceTags,
            ExcludeResourceTags: this.input.policy.excludeResourceTags,
            RemediationEnabled: this.input.policy.remediationEnabled,
            IncludeMap: this.input.policy.includeMap,
            ExcludeMap: this.input.policy.excludeMap,
          },
          TagList: this.input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutPolicy.Policy.ResourceTags', props);
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
            PolicyId: this.input.policy.policyId,
            PolicyName: this.input.policy.policyName,
            PolicyUpdateToken: this.input.policy.policyUpdateToken,
            SecurityServicePolicyData: {
              Type: this.input.policy.securityServicePolicyData.type,
              ManagedServiceData: this.input.policy.securityServicePolicyData.managedServiceData,
            },
            ResourceType: this.input.policy.resourceType,
            ResourceTypeList: this.input.policy.resourceTypeList,
            ResourceTags: this.input.policy.resourceTags,
            ExcludeResourceTags: this.input.policy.excludeResourceTags,
            RemediationEnabled: this.input.policy.remediationEnabled,
            IncludeMap: this.input.policy.includeMap,
            ExcludeMap: this.input.policy.excludeMap,
          },
          TagList: this.input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutPolicy.Policy.ExcludeResourceTags', props);
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
            PolicyId: this.input.policy.policyId,
            PolicyName: this.input.policy.policyName,
            PolicyUpdateToken: this.input.policy.policyUpdateToken,
            SecurityServicePolicyData: {
              Type: this.input.policy.securityServicePolicyData.type,
              ManagedServiceData: this.input.policy.securityServicePolicyData.managedServiceData,
            },
            ResourceType: this.input.policy.resourceType,
            ResourceTypeList: this.input.policy.resourceTypeList,
            ResourceTags: this.input.policy.resourceTags,
            ExcludeResourceTags: this.input.policy.excludeResourceTags,
            RemediationEnabled: this.input.policy.remediationEnabled,
            IncludeMap: this.input.policy.includeMap,
            ExcludeMap: this.input.policy.excludeMap,
          },
          TagList: this.input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutPolicy.Policy.RemediationEnabled', props);
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
            PolicyId: this.input.policy.policyId,
            PolicyName: this.input.policy.policyName,
            PolicyUpdateToken: this.input.policy.policyUpdateToken,
            SecurityServicePolicyData: {
              Type: this.input.policy.securityServicePolicyData.type,
              ManagedServiceData: this.input.policy.securityServicePolicyData.managedServiceData,
            },
            ResourceType: this.input.policy.resourceType,
            ResourceTypeList: this.input.policy.resourceTypeList,
            ResourceTags: this.input.policy.resourceTags,
            ExcludeResourceTags: this.input.policy.excludeResourceTags,
            RemediationEnabled: this.input.policy.remediationEnabled,
            IncludeMap: this.input.policy.includeMap,
            ExcludeMap: this.input.policy.excludeMap,
          },
          TagList: this.input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutPolicy.Policy.IncludeMap', props);
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
            PolicyId: this.input.policy.policyId,
            PolicyName: this.input.policy.policyName,
            PolicyUpdateToken: this.input.policy.policyUpdateToken,
            SecurityServicePolicyData: {
              Type: this.input.policy.securityServicePolicyData.type,
              ManagedServiceData: this.input.policy.securityServicePolicyData.managedServiceData,
            },
            ResourceType: this.input.policy.resourceType,
            ResourceTypeList: this.input.policy.resourceTypeList,
            ResourceTags: this.input.policy.resourceTags,
            ExcludeResourceTags: this.input.policy.excludeResourceTags,
            RemediationEnabled: this.input.policy.remediationEnabled,
            IncludeMap: this.input.policy.includeMap,
            ExcludeMap: this.input.policy.excludeMap,
          },
          TagList: this.input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutPolicy.Policy.ExcludeMap', props);
    return resource.getResponseField('Policy.ExcludeMap') as unknown as Record<string, string[]>;
  }

}

export class FMSPutPolicyPolicySecurityServicePolicyData extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FmsPutPolicyRequest) {
    super(scope, id);
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
            PolicyId: this.input.policy.policyId,
            PolicyName: this.input.policy.policyName,
            PolicyUpdateToken: this.input.policy.policyUpdateToken,
            SecurityServicePolicyData: {
              Type: this.input.policy.securityServicePolicyData.type,
              ManagedServiceData: this.input.policy.securityServicePolicyData.managedServiceData,
            },
            ResourceType: this.input.policy.resourceType,
            ResourceTypeList: this.input.policy.resourceTypeList,
            ResourceTags: this.input.policy.resourceTags,
            ExcludeResourceTags: this.input.policy.excludeResourceTags,
            RemediationEnabled: this.input.policy.remediationEnabled,
            IncludeMap: this.input.policy.includeMap,
            ExcludeMap: this.input.policy.excludeMap,
          },
          TagList: this.input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutPolicy.Policy.SecurityServicePolicyData.Type', props);
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
            PolicyId: this.input.policy.policyId,
            PolicyName: this.input.policy.policyName,
            PolicyUpdateToken: this.input.policy.policyUpdateToken,
            SecurityServicePolicyData: {
              Type: this.input.policy.securityServicePolicyData.type,
              ManagedServiceData: this.input.policy.securityServicePolicyData.managedServiceData,
            },
            ResourceType: this.input.policy.resourceType,
            ResourceTypeList: this.input.policy.resourceTypeList,
            ResourceTags: this.input.policy.resourceTags,
            ExcludeResourceTags: this.input.policy.excludeResourceTags,
            RemediationEnabled: this.input.policy.remediationEnabled,
            IncludeMap: this.input.policy.includeMap,
            ExcludeMap: this.input.policy.excludeMap,
          },
          TagList: this.input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutPolicy.Policy.SecurityServicePolicyData.ManagedServiceData', props);
    return resource.getResponseField('Policy.SecurityServicePolicyData.ManagedServiceData') as unknown as string;
  }

}

export class FMSPutProtocolsList extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FmsPutProtocolsListRequest) {
    super(scope, id);
  }

  public get protocolsList(): FMSPutProtocolsListProtocolsList {
    return new FMSPutProtocolsListProtocolsList(this, 'ProtocolsList', this.__resources, this.input);
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
            ListId: this.input.protocolsList.listId,
            ListName: this.input.protocolsList.listName,
            ListUpdateToken: this.input.protocolsList.listUpdateToken,
            CreateTime: this.input.protocolsList.createTime,
            LastUpdateTime: this.input.protocolsList.lastUpdateTime,
            ProtocolsList: this.input.protocolsList.protocolsList,
            PreviousProtocolsList: this.input.protocolsList.previousProtocolsList,
          },
          TagList: this.input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutProtocolsList.ProtocolsListArn', props);
    return resource.getResponseField('ProtocolsListArn') as unknown as string;
  }

}

export class FMSPutProtocolsListProtocolsList extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FmsPutProtocolsListRequest) {
    super(scope, id);
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
            ListId: this.input.protocolsList.listId,
            ListName: this.input.protocolsList.listName,
            ListUpdateToken: this.input.protocolsList.listUpdateToken,
            CreateTime: this.input.protocolsList.createTime,
            LastUpdateTime: this.input.protocolsList.lastUpdateTime,
            ProtocolsList: this.input.protocolsList.protocolsList,
            PreviousProtocolsList: this.input.protocolsList.previousProtocolsList,
          },
          TagList: this.input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutProtocolsList.ProtocolsList.ListId', props);
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
            ListId: this.input.protocolsList.listId,
            ListName: this.input.protocolsList.listName,
            ListUpdateToken: this.input.protocolsList.listUpdateToken,
            CreateTime: this.input.protocolsList.createTime,
            LastUpdateTime: this.input.protocolsList.lastUpdateTime,
            ProtocolsList: this.input.protocolsList.protocolsList,
            PreviousProtocolsList: this.input.protocolsList.previousProtocolsList,
          },
          TagList: this.input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutProtocolsList.ProtocolsList.ListName', props);
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
            ListId: this.input.protocolsList.listId,
            ListName: this.input.protocolsList.listName,
            ListUpdateToken: this.input.protocolsList.listUpdateToken,
            CreateTime: this.input.protocolsList.createTime,
            LastUpdateTime: this.input.protocolsList.lastUpdateTime,
            ProtocolsList: this.input.protocolsList.protocolsList,
            PreviousProtocolsList: this.input.protocolsList.previousProtocolsList,
          },
          TagList: this.input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutProtocolsList.ProtocolsList.ListUpdateToken', props);
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
            ListId: this.input.protocolsList.listId,
            ListName: this.input.protocolsList.listName,
            ListUpdateToken: this.input.protocolsList.listUpdateToken,
            CreateTime: this.input.protocolsList.createTime,
            LastUpdateTime: this.input.protocolsList.lastUpdateTime,
            ProtocolsList: this.input.protocolsList.protocolsList,
            PreviousProtocolsList: this.input.protocolsList.previousProtocolsList,
          },
          TagList: this.input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutProtocolsList.ProtocolsList.CreateTime', props);
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
            ListId: this.input.protocolsList.listId,
            ListName: this.input.protocolsList.listName,
            ListUpdateToken: this.input.protocolsList.listUpdateToken,
            CreateTime: this.input.protocolsList.createTime,
            LastUpdateTime: this.input.protocolsList.lastUpdateTime,
            ProtocolsList: this.input.protocolsList.protocolsList,
            PreviousProtocolsList: this.input.protocolsList.previousProtocolsList,
          },
          TagList: this.input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutProtocolsList.ProtocolsList.LastUpdateTime', props);
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
            ListId: this.input.protocolsList.listId,
            ListName: this.input.protocolsList.listName,
            ListUpdateToken: this.input.protocolsList.listUpdateToken,
            CreateTime: this.input.protocolsList.createTime,
            LastUpdateTime: this.input.protocolsList.lastUpdateTime,
            ProtocolsList: this.input.protocolsList.protocolsList,
            PreviousProtocolsList: this.input.protocolsList.previousProtocolsList,
          },
          TagList: this.input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutProtocolsList.ProtocolsList.ProtocolsList', props);
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
            ListId: this.input.protocolsList.listId,
            ListName: this.input.protocolsList.listName,
            ListUpdateToken: this.input.protocolsList.listUpdateToken,
            CreateTime: this.input.protocolsList.createTime,
            LastUpdateTime: this.input.protocolsList.lastUpdateTime,
            ProtocolsList: this.input.protocolsList.protocolsList,
            PreviousProtocolsList: this.input.protocolsList.previousProtocolsList,
          },
          TagList: this.input.tagList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutProtocolsList.ProtocolsList.PreviousProtocolsList', props);
    return resource.getResponseField('ProtocolsList.PreviousProtocolsList') as unknown as Record<string, string[]>;
  }

}

