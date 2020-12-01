/**
 * @schema AssociateAdminAccountRequest
 */
export interface AssociateAdminAccountRequest {
  /**
   * @schema AssociateAdminAccountRequest#AdminAccount
   */
  readonly adminAccount: string;

}

/**
 * @schema DeleteAppsListRequest
 */
export interface DeleteAppsListRequest {
  /**
   * @schema DeleteAppsListRequest#ListId
   */
  readonly listId: string;

}

/**
 * @schema DeleteNotificationChannelRequest
 */
export interface DeleteNotificationChannelRequest {
}

/**
 * @schema DeletePolicyRequest
 */
export interface DeletePolicyRequest {
  /**
   * @schema DeletePolicyRequest#PolicyId
   */
  readonly policyId: string;

  /**
   * @schema DeletePolicyRequest#DeleteAllPolicyResources
   */
  readonly deleteAllPolicyResources?: boolean;

}

/**
 * @schema DeleteProtocolsListRequest
 */
export interface DeleteProtocolsListRequest {
  /**
   * @schema DeleteProtocolsListRequest#ListId
   */
  readonly listId: string;

}

/**
 * @schema DisassociateAdminAccountRequest
 */
export interface DisassociateAdminAccountRequest {
}

/**
 * @schema GetAdminAccountRequest
 */
export interface GetAdminAccountRequest {
}

/**
 * @schema GetAdminAccountResponse
 */
export interface GetAdminAccountResponse {
  /**
   * @schema GetAdminAccountResponse#AdminAccount
   */
  readonly adminAccount?: string;

  /**
   * @schema GetAdminAccountResponse#RoleStatus
   */
  readonly roleStatus?: string;

}

/**
 * @schema GetAppsListRequest
 */
export interface GetAppsListRequest {
  /**
   * @schema GetAppsListRequest#ListId
   */
  readonly listId: string;

  /**
   * @schema GetAppsListRequest#DefaultList
   */
  readonly defaultList?: boolean;

}

/**
 * @schema GetAppsListResponse
 */
export interface GetAppsListResponse {
  /**
   * @schema GetAppsListResponse#AppsList
   */
  readonly appsList?: AppsListData;

  /**
   * @schema GetAppsListResponse#AppsListArn
   */
  readonly appsListArn?: string;

}

/**
 * @schema GetComplianceDetailRequest
 */
export interface GetComplianceDetailRequest {
  /**
   * @schema GetComplianceDetailRequest#PolicyId
   */
  readonly policyId: string;

  /**
   * @schema GetComplianceDetailRequest#MemberAccount
   */
  readonly memberAccount: string;

}

/**
 * @schema GetComplianceDetailResponse
 */
export interface GetComplianceDetailResponse {
  /**
   * @schema GetComplianceDetailResponse#PolicyComplianceDetail
   */
  readonly policyComplianceDetail?: PolicyComplianceDetail;

}

/**
 * @schema GetNotificationChannelRequest
 */
export interface GetNotificationChannelRequest {
}

/**
 * @schema GetNotificationChannelResponse
 */
export interface GetNotificationChannelResponse {
  /**
   * @schema GetNotificationChannelResponse#SnsTopicArn
   */
  readonly snsTopicArn?: string;

  /**
   * @schema GetNotificationChannelResponse#SnsRoleName
   */
  readonly snsRoleName?: string;

}

/**
 * @schema GetPolicyRequest
 */
export interface GetPolicyRequest {
  /**
   * @schema GetPolicyRequest#PolicyId
   */
  readonly policyId: string;

}

/**
 * @schema GetPolicyResponse
 */
export interface GetPolicyResponse {
  /**
   * @schema GetPolicyResponse#Policy
   */
  readonly policy?: Policy;

  /**
   * @schema GetPolicyResponse#PolicyArn
   */
  readonly policyArn?: string;

}

/**
 * @schema GetProtectionStatusRequest
 */
export interface GetProtectionStatusRequest {
  /**
   * @schema GetProtectionStatusRequest#PolicyId
   */
  readonly policyId: string;

  /**
   * @schema GetProtectionStatusRequest#MemberAccountId
   */
  readonly memberAccountId?: string;

  /**
   * @schema GetProtectionStatusRequest#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema GetProtectionStatusRequest#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema GetProtectionStatusRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetProtectionStatusRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema GetProtectionStatusResponse
 */
export interface GetProtectionStatusResponse {
  /**
   * @schema GetProtectionStatusResponse#AdminAccountId
   */
  readonly adminAccountId?: string;

  /**
   * @schema GetProtectionStatusResponse#ServiceType
   */
  readonly serviceType?: string;

  /**
   * @schema GetProtectionStatusResponse#Data
   */
  readonly data?: string;

  /**
   * @schema GetProtectionStatusResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetProtocolsListRequest
 */
export interface GetProtocolsListRequest {
  /**
   * @schema GetProtocolsListRequest#ListId
   */
  readonly listId: string;

  /**
   * @schema GetProtocolsListRequest#DefaultList
   */
  readonly defaultList?: boolean;

}

/**
 * @schema GetProtocolsListResponse
 */
export interface GetProtocolsListResponse {
  /**
   * @schema GetProtocolsListResponse#ProtocolsList
   */
  readonly protocolsList?: ProtocolsListData;

  /**
   * @schema GetProtocolsListResponse#ProtocolsListArn
   */
  readonly protocolsListArn?: string;

}

/**
 * @schema GetViolationDetailsRequest
 */
export interface GetViolationDetailsRequest {
  /**
   * @schema GetViolationDetailsRequest#PolicyId
   */
  readonly policyId: string;

  /**
   * @schema GetViolationDetailsRequest#MemberAccount
   */
  readonly memberAccount: string;

  /**
   * @schema GetViolationDetailsRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema GetViolationDetailsRequest#ResourceType
   */
  readonly resourceType: string;

}

/**
 * @schema GetViolationDetailsResponse
 */
export interface GetViolationDetailsResponse {
  /**
   * @schema GetViolationDetailsResponse#ViolationDetail
   */
  readonly violationDetail?: ViolationDetail;

}

/**
 * @schema ListAppsListsRequest
 */
export interface ListAppsListsRequest {
  /**
   * @schema ListAppsListsRequest#DefaultLists
   */
  readonly defaultLists?: boolean;

  /**
   * @schema ListAppsListsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListAppsListsRequest#MaxResults
   */
  readonly maxResults: number;

}

/**
 * @schema ListAppsListsResponse
 */
export interface ListAppsListsResponse {
  /**
   * @schema ListAppsListsResponse#AppsLists
   */
  readonly appsLists?: AppsListDataSummary[];

  /**
   * @schema ListAppsListsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListComplianceStatusRequest
 */
export interface ListComplianceStatusRequest {
  /**
   * @schema ListComplianceStatusRequest#PolicyId
   */
  readonly policyId: string;

  /**
   * @schema ListComplianceStatusRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListComplianceStatusRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListComplianceStatusResponse
 */
export interface ListComplianceStatusResponse {
  /**
   * @schema ListComplianceStatusResponse#PolicyComplianceStatusList
   */
  readonly policyComplianceStatusList?: PolicyComplianceStatus[];

  /**
   * @schema ListComplianceStatusResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListMemberAccountsRequest
 */
export interface ListMemberAccountsRequest {
  /**
   * @schema ListMemberAccountsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListMemberAccountsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListMemberAccountsResponse
 */
export interface ListMemberAccountsResponse {
  /**
   * @schema ListMemberAccountsResponse#MemberAccounts
   */
  readonly memberAccounts?: string[];

  /**
   * @schema ListMemberAccountsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListPoliciesRequest
 */
export interface ListPoliciesRequest {
  /**
   * @schema ListPoliciesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListPoliciesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListPoliciesResponse
 */
export interface ListPoliciesResponse {
  /**
   * @schema ListPoliciesResponse#PolicyList
   */
  readonly policyList?: PolicySummary[];

  /**
   * @schema ListPoliciesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListProtocolsListsRequest
 */
export interface ListProtocolsListsRequest {
  /**
   * @schema ListProtocolsListsRequest#DefaultLists
   */
  readonly defaultLists?: boolean;

  /**
   * @schema ListProtocolsListsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListProtocolsListsRequest#MaxResults
   */
  readonly maxResults: number;

}

/**
 * @schema ListProtocolsListsResponse
 */
export interface ListProtocolsListsResponse {
  /**
   * @schema ListProtocolsListsResponse#ProtocolsLists
   */
  readonly protocolsLists?: ProtocolsListDataSummary[];

  /**
   * @schema ListProtocolsListsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * @schema ListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema ListTagsForResourceResponse
 */
export interface ListTagsForResourceResponse {
  /**
   * @schema ListTagsForResourceResponse#TagList
   */
  readonly tagList?: Tag[];

}

/**
 * @schema PutAppsListRequest
 */
export interface PutAppsListRequest {
  /**
   * @schema PutAppsListRequest#AppsList
   */
  readonly appsList: AppsListData;

  /**
   * @schema PutAppsListRequest#TagList
   */
  readonly tagList?: Tag[];

}

/**
 * @schema PutAppsListResponse
 */
export interface PutAppsListResponse {
  /**
   * @schema PutAppsListResponse#AppsList
   */
  readonly appsList?: AppsListData;

  /**
   * @schema PutAppsListResponse#AppsListArn
   */
  readonly appsListArn?: string;

}

/**
 * @schema PutNotificationChannelRequest
 */
export interface PutNotificationChannelRequest {
  /**
   * @schema PutNotificationChannelRequest#SnsTopicArn
   */
  readonly snsTopicArn: string;

  /**
   * @schema PutNotificationChannelRequest#SnsRoleName
   */
  readonly snsRoleName: string;

}

/**
 * @schema PutPolicyRequest
 */
export interface PutPolicyRequest {
  /**
   * @schema PutPolicyRequest#Policy
   */
  readonly policy: Policy;

  /**
   * @schema PutPolicyRequest#TagList
   */
  readonly tagList?: Tag[];

}

/**
 * @schema PutPolicyResponse
 */
export interface PutPolicyResponse {
  /**
   * @schema PutPolicyResponse#Policy
   */
  readonly policy?: Policy;

  /**
   * @schema PutPolicyResponse#PolicyArn
   */
  readonly policyArn?: string;

}

/**
 * @schema PutProtocolsListRequest
 */
export interface PutProtocolsListRequest {
  /**
   * @schema PutProtocolsListRequest#ProtocolsList
   */
  readonly protocolsList: ProtocolsListData;

  /**
   * @schema PutProtocolsListRequest#TagList
   */
  readonly tagList?: Tag[];

}

/**
 * @schema PutProtocolsListResponse
 */
export interface PutProtocolsListResponse {
  /**
   * @schema PutProtocolsListResponse#ProtocolsList
   */
  readonly protocolsList?: ProtocolsListData;

  /**
   * @schema PutProtocolsListResponse#ProtocolsListArn
   */
  readonly protocolsListArn?: string;

}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema TagResourceRequest#TagList
   */
  readonly tagList: Tag[];

}

/**
 * @schema TagResourceResponse
 */
export interface TagResourceResponse {
}

/**
 * @schema UntagResourceRequest
 */
export interface UntagResourceRequest {
  /**
   * @schema UntagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema UntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UntagResourceResponse
 */
export interface UntagResourceResponse {
}

/**
 * @schema AppsListData
 */
export interface AppsListData {
  /**
   * @schema AppsListData#ListId
   */
  readonly listId?: string;

  /**
   * @schema AppsListData#ListName
   */
  readonly listName: string;

  /**
   * @schema AppsListData#ListUpdateToken
   */
  readonly listUpdateToken?: string;

  /**
   * @schema AppsListData#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema AppsListData#LastUpdateTime
   */
  readonly lastUpdateTime?: string;

  /**
   * @schema AppsListData#AppsList
   */
  readonly appsList: App[];

  /**
   * @schema AppsListData#PreviousAppsList
   */
  readonly previousAppsList?: { [key: string]: App[] };

}

/**
 * @schema PolicyComplianceDetail
 */
export interface PolicyComplianceDetail {
  /**
   * @schema PolicyComplianceDetail#PolicyOwner
   */
  readonly policyOwner?: string;

  /**
   * @schema PolicyComplianceDetail#PolicyId
   */
  readonly policyId?: string;

  /**
   * @schema PolicyComplianceDetail#MemberAccount
   */
  readonly memberAccount?: string;

  /**
   * @schema PolicyComplianceDetail#Violators
   */
  readonly violators?: ComplianceViolator[];

  /**
   * @schema PolicyComplianceDetail#EvaluationLimitExceeded
   */
  readonly evaluationLimitExceeded?: boolean;

  /**
   * @schema PolicyComplianceDetail#ExpiredAt
   */
  readonly expiredAt?: string;

  /**
   * @schema PolicyComplianceDetail#IssueInfoMap
   */
  readonly issueInfoMap?: { [key: string]: string };

}

/**
 * @schema Policy
 */
export interface Policy {
  /**
   * @schema Policy#PolicyId
   */
  readonly policyId?: string;

  /**
   * @schema Policy#PolicyName
   */
  readonly policyName: string;

  /**
   * @schema Policy#PolicyUpdateToken
   */
  readonly policyUpdateToken?: string;

  /**
   * @schema Policy#SecurityServicePolicyData
   */
  readonly securityServicePolicyData: SecurityServicePolicyData;

  /**
   * @schema Policy#ResourceType
   */
  readonly resourceType: string;

  /**
   * @schema Policy#ResourceTypeList
   */
  readonly resourceTypeList?: string[];

  /**
   * @schema Policy#ResourceTags
   */
  readonly resourceTags?: ResourceTag[];

  /**
   * @schema Policy#ExcludeResourceTags
   */
  readonly excludeResourceTags: boolean;

  /**
   * @schema Policy#RemediationEnabled
   */
  readonly remediationEnabled: boolean;

  /**
   * @schema Policy#IncludeMap
   */
  readonly includeMap?: { [key: string]: string[] };

  /**
   * @schema Policy#ExcludeMap
   */
  readonly excludeMap?: { [key: string]: string[] };

}

/**
 * @schema ProtocolsListData
 */
export interface ProtocolsListData {
  /**
   * @schema ProtocolsListData#ListId
   */
  readonly listId?: string;

  /**
   * @schema ProtocolsListData#ListName
   */
  readonly listName: string;

  /**
   * @schema ProtocolsListData#ListUpdateToken
   */
  readonly listUpdateToken?: string;

  /**
   * @schema ProtocolsListData#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema ProtocolsListData#LastUpdateTime
   */
  readonly lastUpdateTime?: string;

  /**
   * @schema ProtocolsListData#ProtocolsList
   */
  readonly protocolsList: string[];

  /**
   * @schema ProtocolsListData#PreviousProtocolsList
   */
  readonly previousProtocolsList?: { [key: string]: string[] };

}

/**
 * @schema ViolationDetail
 */
export interface ViolationDetail {
  /**
   * @schema ViolationDetail#PolicyId
   */
  readonly policyId: string;

  /**
   * @schema ViolationDetail#MemberAccount
   */
  readonly memberAccount: string;

  /**
   * @schema ViolationDetail#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema ViolationDetail#ResourceType
   */
  readonly resourceType: string;

  /**
   * @schema ViolationDetail#ResourceViolations
   */
  readonly resourceViolations: ResourceViolation[];

  /**
   * @schema ViolationDetail#ResourceTags
   */
  readonly resourceTags?: Tag[];

  /**
   * @schema ViolationDetail#ResourceDescription
   */
  readonly resourceDescription?: string;

}

/**
 * @schema AppsListDataSummary
 */
export interface AppsListDataSummary {
  /**
   * @schema AppsListDataSummary#ListArn
   */
  readonly listArn?: string;

  /**
   * @schema AppsListDataSummary#ListId
   */
  readonly listId?: string;

  /**
   * @schema AppsListDataSummary#ListName
   */
  readonly listName?: string;

  /**
   * @schema AppsListDataSummary#AppsList
   */
  readonly appsList?: App[];

}

/**
 * @schema PolicyComplianceStatus
 */
export interface PolicyComplianceStatus {
  /**
   * @schema PolicyComplianceStatus#PolicyOwner
   */
  readonly policyOwner?: string;

  /**
   * @schema PolicyComplianceStatus#PolicyId
   */
  readonly policyId?: string;

  /**
   * @schema PolicyComplianceStatus#PolicyName
   */
  readonly policyName?: string;

  /**
   * @schema PolicyComplianceStatus#MemberAccount
   */
  readonly memberAccount?: string;

  /**
   * @schema PolicyComplianceStatus#EvaluationResults
   */
  readonly evaluationResults?: EvaluationResult[];

  /**
   * @schema PolicyComplianceStatus#LastUpdated
   */
  readonly lastUpdated?: string;

  /**
   * @schema PolicyComplianceStatus#IssueInfoMap
   */
  readonly issueInfoMap?: { [key: string]: string };

}

/**
 * @schema PolicySummary
 */
export interface PolicySummary {
  /**
   * @schema PolicySummary#PolicyArn
   */
  readonly policyArn?: string;

  /**
   * @schema PolicySummary#PolicyId
   */
  readonly policyId?: string;

  /**
   * @schema PolicySummary#PolicyName
   */
  readonly policyName?: string;

  /**
   * @schema PolicySummary#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema PolicySummary#SecurityServiceType
   */
  readonly securityServiceType?: string;

  /**
   * @schema PolicySummary#RemediationEnabled
   */
  readonly remediationEnabled?: boolean;

}

/**
 * @schema ProtocolsListDataSummary
 */
export interface ProtocolsListDataSummary {
  /**
   * @schema ProtocolsListDataSummary#ListArn
   */
  readonly listArn?: string;

  /**
   * @schema ProtocolsListDataSummary#ListId
   */
  readonly listId?: string;

  /**
   * @schema ProtocolsListDataSummary#ListName
   */
  readonly listName?: string;

  /**
   * @schema ProtocolsListDataSummary#ProtocolsList
   */
  readonly protocolsList?: string[];

}

/**
 * @schema Tag
 */
export interface Tag {
  /**
   * @schema Tag#Key
   */
  readonly key: string;

  /**
   * @schema Tag#Value
   */
  readonly value: string;

}

/**
 * @schema App
 */
export interface App {
  /**
   * @schema App#AppName
   */
  readonly appName: string;

  /**
   * @schema App#Protocol
   */
  readonly protocol: string;

  /**
   * @schema App#Port
   */
  readonly port: number;

}

/**
 * @schema ComplianceViolator
 */
export interface ComplianceViolator {
  /**
   * @schema ComplianceViolator#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema ComplianceViolator#ViolationReason
   */
  readonly violationReason?: string;

  /**
   * @schema ComplianceViolator#ResourceType
   */
  readonly resourceType?: string;

}

/**
 * @schema SecurityServicePolicyData
 */
export interface SecurityServicePolicyData {
  /**
   * @schema SecurityServicePolicyData#Type
   */
  readonly type: string;

  /**
   * @schema SecurityServicePolicyData#ManagedServiceData
   */
  readonly managedServiceData?: string;

}

/**
 * @schema ResourceTag
 */
export interface ResourceTag {
  /**
   * @schema ResourceTag#Key
   */
  readonly key: string;

  /**
   * @schema ResourceTag#Value
   */
  readonly value?: string;

}

/**
 * @schema ResourceViolation
 */
export interface ResourceViolation {
  /**
   * @schema ResourceViolation#AwsVPCSecurityGroupViolation
   */
  readonly awsVpcSecurityGroupViolation?: AwsVpcSecurityGroupViolation;

  /**
   * @schema ResourceViolation#AwsEc2NetworkInterfaceViolation
   */
  readonly awsEc2NetworkInterfaceViolation?: AwsEc2NetworkInterfaceViolation;

  /**
   * @schema ResourceViolation#AwsEc2InstanceViolation
   */
  readonly awsEc2InstanceViolation?: AwsEc2InstanceViolation;

  /**
   * @schema ResourceViolation#NetworkFirewallMissingFirewallViolation
   */
  readonly networkFirewallMissingFirewallViolation?: NetworkFirewallMissingFirewallViolation;

  /**
   * @schema ResourceViolation#NetworkFirewallMissingSubnetViolation
   */
  readonly networkFirewallMissingSubnetViolation?: NetworkFirewallMissingSubnetViolation;

  /**
   * @schema ResourceViolation#NetworkFirewallMissingExpectedRTViolation
   */
  readonly networkFirewallMissingExpectedRtViolation?: NetworkFirewallMissingExpectedRtViolation;

  /**
   * @schema ResourceViolation#NetworkFirewallPolicyModifiedViolation
   */
  readonly networkFirewallPolicyModifiedViolation?: NetworkFirewallPolicyModifiedViolation;

}

/**
 * @schema EvaluationResult
 */
export interface EvaluationResult {
  /**
   * @schema EvaluationResult#ComplianceStatus
   */
  readonly complianceStatus?: string;

  /**
   * @schema EvaluationResult#ViolatorCount
   */
  readonly violatorCount?: number;

  /**
   * @schema EvaluationResult#EvaluationLimitExceeded
   */
  readonly evaluationLimitExceeded?: boolean;

}

/**
 * @schema AwsVpcSecurityGroupViolation
 */
export interface AwsVpcSecurityGroupViolation {
  /**
   * @schema AwsVpcSecurityGroupViolation#ViolationTarget
   */
  readonly violationTarget?: string;

  /**
   * @schema AwsVpcSecurityGroupViolation#ViolationTargetDescription
   */
  readonly violationTargetDescription?: string;

  /**
   * @schema AwsVpcSecurityGroupViolation#PartialMatches
   */
  readonly partialMatches?: PartialMatch[];

  /**
   * @schema AwsVpcSecurityGroupViolation#PossibleSecurityGroupRemediationActions
   */
  readonly possibleSecurityGroupRemediationActions?: SecurityGroupRemediationAction[];

}

/**
 * @schema AwsEc2NetworkInterfaceViolation
 */
export interface AwsEc2NetworkInterfaceViolation {
  /**
   * @schema AwsEc2NetworkInterfaceViolation#ViolationTarget
   */
  readonly violationTarget?: string;

  /**
   * @schema AwsEc2NetworkInterfaceViolation#ViolatingSecurityGroups
   */
  readonly violatingSecurityGroups?: string[];

}

/**
 * @schema AwsEc2InstanceViolation
 */
export interface AwsEc2InstanceViolation {
  /**
   * @schema AwsEc2InstanceViolation#ViolationTarget
   */
  readonly violationTarget?: string;

  /**
   * @schema AwsEc2InstanceViolation#AwsEc2NetworkInterfaceViolations
   */
  readonly awsEc2NetworkInterfaceViolations?: AwsEc2NetworkInterfaceViolation[];

}

/**
 * @schema NetworkFirewallMissingFirewallViolation
 */
export interface NetworkFirewallMissingFirewallViolation {
  /**
   * @schema NetworkFirewallMissingFirewallViolation#ViolationTarget
   */
  readonly violationTarget?: string;

  /**
   * @schema NetworkFirewallMissingFirewallViolation#VPC
   */
  readonly vpc?: string;

  /**
   * @schema NetworkFirewallMissingFirewallViolation#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema NetworkFirewallMissingFirewallViolation#TargetViolationReason
   */
  readonly targetViolationReason?: string;

}

/**
 * @schema NetworkFirewallMissingSubnetViolation
 */
export interface NetworkFirewallMissingSubnetViolation {
  /**
   * @schema NetworkFirewallMissingSubnetViolation#ViolationTarget
   */
  readonly violationTarget?: string;

  /**
   * @schema NetworkFirewallMissingSubnetViolation#VPC
   */
  readonly vpc?: string;

  /**
   * @schema NetworkFirewallMissingSubnetViolation#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema NetworkFirewallMissingSubnetViolation#TargetViolationReason
   */
  readonly targetViolationReason?: string;

}

/**
 * @schema NetworkFirewallMissingExpectedRtViolation
 */
export interface NetworkFirewallMissingExpectedRtViolation {
  /**
   * @schema NetworkFirewallMissingExpectedRtViolation#ViolationTarget
   */
  readonly violationTarget?: string;

  /**
   * @schema NetworkFirewallMissingExpectedRtViolation#VPC
   */
  readonly vpc?: string;

  /**
   * @schema NetworkFirewallMissingExpectedRtViolation#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema NetworkFirewallMissingExpectedRtViolation#CurrentRouteTable
   */
  readonly currentRouteTable?: string;

  /**
   * @schema NetworkFirewallMissingExpectedRtViolation#ExpectedRouteTable
   */
  readonly expectedRouteTable?: string;

}

/**
 * @schema NetworkFirewallPolicyModifiedViolation
 */
export interface NetworkFirewallPolicyModifiedViolation {
  /**
   * @schema NetworkFirewallPolicyModifiedViolation#ViolationTarget
   */
  readonly violationTarget?: string;

  /**
   * @schema NetworkFirewallPolicyModifiedViolation#CurrentPolicyDescription
   */
  readonly currentPolicyDescription?: NetworkFirewallPolicyDescription;

  /**
   * @schema NetworkFirewallPolicyModifiedViolation#ExpectedPolicyDescription
   */
  readonly expectedPolicyDescription?: NetworkFirewallPolicyDescription;

}

/**
 * @schema PartialMatch
 */
export interface PartialMatch {
  /**
   * @schema PartialMatch#Reference
   */
  readonly reference?: string;

  /**
   * @schema PartialMatch#TargetViolationReasons
   */
  readonly targetViolationReasons?: string[];

}

/**
 * @schema SecurityGroupRemediationAction
 */
export interface SecurityGroupRemediationAction {
  /**
   * @schema SecurityGroupRemediationAction#RemediationActionType
   */
  readonly remediationActionType?: string;

  /**
   * @schema SecurityGroupRemediationAction#Description
   */
  readonly description?: string;

  /**
   * @schema SecurityGroupRemediationAction#RemediationResult
   */
  readonly remediationResult?: SecurityGroupRuleDescription;

  /**
   * @schema SecurityGroupRemediationAction#IsDefaultAction
   */
  readonly isDefaultAction?: boolean;

}

/**
 * @schema NetworkFirewallPolicyDescription
 */
export interface NetworkFirewallPolicyDescription {
  /**
   * @schema NetworkFirewallPolicyDescription#StatelessRuleGroups
   */
  readonly statelessRuleGroups?: StatelessRuleGroup[];

  /**
   * @schema NetworkFirewallPolicyDescription#StatelessDefaultActions
   */
  readonly statelessDefaultActions?: string[];

  /**
   * @schema NetworkFirewallPolicyDescription#StatelessFragmentDefaultActions
   */
  readonly statelessFragmentDefaultActions?: string[];

  /**
   * @schema NetworkFirewallPolicyDescription#StatelessCustomActions
   */
  readonly statelessCustomActions?: string[];

  /**
   * @schema NetworkFirewallPolicyDescription#StatefulRuleGroups
   */
  readonly statefulRuleGroups?: StatefulRuleGroup[];

}

/**
 * @schema SecurityGroupRuleDescription
 */
export interface SecurityGroupRuleDescription {
  /**
   * @schema SecurityGroupRuleDescription#IPV4Range
   */
  readonly ipv4Range?: string;

  /**
   * @schema SecurityGroupRuleDescription#IPV6Range
   */
  readonly ipv6Range?: string;

  /**
   * @schema SecurityGroupRuleDescription#PrefixListId
   */
  readonly prefixListId?: string;

  /**
   * @schema SecurityGroupRuleDescription#Protocol
   */
  readonly protocol?: string;

  /**
   * @schema SecurityGroupRuleDescription#FromPort
   */
  readonly fromPort?: number;

  /**
   * @schema SecurityGroupRuleDescription#ToPort
   */
  readonly toPort?: number;

}

/**
 * @schema StatelessRuleGroup
 */
export interface StatelessRuleGroup {
  /**
   * @schema StatelessRuleGroup#RuleGroupName
   */
  readonly ruleGroupName?: string;

  /**
   * @schema StatelessRuleGroup#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema StatelessRuleGroup#Priority
   */
  readonly priority?: number;

}

/**
 * @schema StatefulRuleGroup
 */
export interface StatefulRuleGroup {
  /**
   * @schema StatefulRuleGroup#RuleGroupName
   */
  readonly ruleGroupName?: string;

  /**
   * @schema StatefulRuleGroup#ResourceId
   */
  readonly resourceId?: string;

}
