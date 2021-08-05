/**
 * @schema FmsAssociateAdminAccountRequest
 */
export interface FmsAssociateAdminAccountRequest {
  /**
   * @schema FmsAssociateAdminAccountRequest#AdminAccount
   */
  readonly adminAccount: string;

}

/**
 * @schema FmsDeleteAppsListRequest
 */
export interface FmsDeleteAppsListRequest {
  /**
   * @schema FmsDeleteAppsListRequest#ListId
   */
  readonly listId: string;

}

/**
 * @schema FmsDeleteNotificationChannelRequest
 */
export interface FmsDeleteNotificationChannelRequest {
}

/**
 * @schema FmsDeletePolicyRequest
 */
export interface FmsDeletePolicyRequest {
  /**
   * @schema FmsDeletePolicyRequest#PolicyId
   */
  readonly policyId: string;

  /**
   * @schema FmsDeletePolicyRequest#DeleteAllPolicyResources
   */
  readonly deleteAllPolicyResources?: boolean;

}

/**
 * @schema FmsDeleteProtocolsListRequest
 */
export interface FmsDeleteProtocolsListRequest {
  /**
   * @schema FmsDeleteProtocolsListRequest#ListId
   */
  readonly listId: string;

}

/**
 * @schema FmsDisassociateAdminAccountRequest
 */
export interface FmsDisassociateAdminAccountRequest {
}

/**
 * @schema FmsGetAdminAccountRequest
 */
export interface FmsGetAdminAccountRequest {
}

/**
 * @schema FmsGetAdminAccountResponse
 */
export interface FmsGetAdminAccountResponse {
  /**
   * @schema FmsGetAdminAccountResponse#AdminAccount
   */
  readonly adminAccount?: string;

  /**
   * @schema FmsGetAdminAccountResponse#RoleStatus
   */
  readonly roleStatus?: string;

}

/**
 * @schema FmsGetAppsListRequest
 */
export interface FmsGetAppsListRequest {
  /**
   * @schema FmsGetAppsListRequest#ListId
   */
  readonly listId: string;

  /**
   * @schema FmsGetAppsListRequest#DefaultList
   */
  readonly defaultList?: boolean;

}

/**
 * @schema FmsGetAppsListResponse
 */
export interface FmsGetAppsListResponse {
  /**
   * @schema FmsGetAppsListResponse#AppsList
   */
  readonly appsList?: FmsAppsListData;

  /**
   * @schema FmsGetAppsListResponse#AppsListArn
   */
  readonly appsListArn?: string;

}

/**
 * @schema FmsGetComplianceDetailRequest
 */
export interface FmsGetComplianceDetailRequest {
  /**
   * @schema FmsGetComplianceDetailRequest#PolicyId
   */
  readonly policyId: string;

  /**
   * @schema FmsGetComplianceDetailRequest#MemberAccount
   */
  readonly memberAccount: string;

}

/**
 * @schema FmsGetComplianceDetailResponse
 */
export interface FmsGetComplianceDetailResponse {
  /**
   * @schema FmsGetComplianceDetailResponse#PolicyComplianceDetail
   */
  readonly policyComplianceDetail?: FmsPolicyComplianceDetail;

}

/**
 * @schema FmsGetNotificationChannelRequest
 */
export interface FmsGetNotificationChannelRequest {
}

/**
 * @schema FmsGetNotificationChannelResponse
 */
export interface FmsGetNotificationChannelResponse {
  /**
   * @schema FmsGetNotificationChannelResponse#SnsTopicArn
   */
  readonly snsTopicArn?: string;

  /**
   * @schema FmsGetNotificationChannelResponse#SnsRoleName
   */
  readonly snsRoleName?: string;

}

/**
 * @schema FmsGetPolicyRequest
 */
export interface FmsGetPolicyRequest {
  /**
   * @schema FmsGetPolicyRequest#PolicyId
   */
  readonly policyId: string;

}

/**
 * @schema FmsGetPolicyResponse
 */
export interface FmsGetPolicyResponse {
  /**
   * @schema FmsGetPolicyResponse#Policy
   */
  readonly policy?: FmsPolicy;

  /**
   * @schema FmsGetPolicyResponse#PolicyArn
   */
  readonly policyArn?: string;

}

/**
 * @schema FmsGetProtectionStatusRequest
 */
export interface FmsGetProtectionStatusRequest {
  /**
   * @schema FmsGetProtectionStatusRequest#PolicyId
   */
  readonly policyId: string;

  /**
   * @schema FmsGetProtectionStatusRequest#MemberAccountId
   */
  readonly memberAccountId?: string;

  /**
   * @schema FmsGetProtectionStatusRequest#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema FmsGetProtectionStatusRequest#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema FmsGetProtectionStatusRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema FmsGetProtectionStatusRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema FmsGetProtectionStatusResponse
 */
export interface FmsGetProtectionStatusResponse {
  /**
   * @schema FmsGetProtectionStatusResponse#AdminAccountId
   */
  readonly adminAccountId?: string;

  /**
   * @schema FmsGetProtectionStatusResponse#ServiceType
   */
  readonly serviceType?: string;

  /**
   * @schema FmsGetProtectionStatusResponse#Data
   */
  readonly data?: string;

  /**
   * @schema FmsGetProtectionStatusResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema FmsGetProtocolsListRequest
 */
export interface FmsGetProtocolsListRequest {
  /**
   * @schema FmsGetProtocolsListRequest#ListId
   */
  readonly listId: string;

  /**
   * @schema FmsGetProtocolsListRequest#DefaultList
   */
  readonly defaultList?: boolean;

}

/**
 * @schema FmsGetProtocolsListResponse
 */
export interface FmsGetProtocolsListResponse {
  /**
   * @schema FmsGetProtocolsListResponse#ProtocolsList
   */
  readonly protocolsList?: FmsProtocolsListData;

  /**
   * @schema FmsGetProtocolsListResponse#ProtocolsListArn
   */
  readonly protocolsListArn?: string;

}

/**
 * @schema FmsGetViolationDetailsRequest
 */
export interface FmsGetViolationDetailsRequest {
  /**
   * @schema FmsGetViolationDetailsRequest#PolicyId
   */
  readonly policyId: string;

  /**
   * @schema FmsGetViolationDetailsRequest#MemberAccount
   */
  readonly memberAccount: string;

  /**
   * @schema FmsGetViolationDetailsRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema FmsGetViolationDetailsRequest#ResourceType
   */
  readonly resourceType: string;

}

/**
 * @schema FmsGetViolationDetailsResponse
 */
export interface FmsGetViolationDetailsResponse {
  /**
   * @schema FmsGetViolationDetailsResponse#ViolationDetail
   */
  readonly violationDetail?: FmsViolationDetail;

}

/**
 * @schema FmsListAppsListsRequest
 */
export interface FmsListAppsListsRequest {
  /**
   * @schema FmsListAppsListsRequest#DefaultLists
   */
  readonly defaultLists?: boolean;

  /**
   * @schema FmsListAppsListsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema FmsListAppsListsRequest#MaxResults
   */
  readonly maxResults: number;

}

/**
 * @schema FmsListAppsListsResponse
 */
export interface FmsListAppsListsResponse {
  /**
   * @schema FmsListAppsListsResponse#AppsLists
   */
  readonly appsLists?: FmsAppsListDataSummary[];

  /**
   * @schema FmsListAppsListsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema FmsListComplianceStatusRequest
 */
export interface FmsListComplianceStatusRequest {
  /**
   * @schema FmsListComplianceStatusRequest#PolicyId
   */
  readonly policyId: string;

  /**
   * @schema FmsListComplianceStatusRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema FmsListComplianceStatusRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema FmsListComplianceStatusResponse
 */
export interface FmsListComplianceStatusResponse {
  /**
   * @schema FmsListComplianceStatusResponse#PolicyComplianceStatusList
   */
  readonly policyComplianceStatusList?: FmsPolicyComplianceStatus[];

  /**
   * @schema FmsListComplianceStatusResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema FmsListMemberAccountsRequest
 */
export interface FmsListMemberAccountsRequest {
  /**
   * @schema FmsListMemberAccountsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema FmsListMemberAccountsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema FmsListMemberAccountsResponse
 */
export interface FmsListMemberAccountsResponse {
  /**
   * @schema FmsListMemberAccountsResponse#MemberAccounts
   */
  readonly memberAccounts?: string[];

  /**
   * @schema FmsListMemberAccountsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema FmsListPoliciesRequest
 */
export interface FmsListPoliciesRequest {
  /**
   * @schema FmsListPoliciesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema FmsListPoliciesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema FmsListPoliciesResponse
 */
export interface FmsListPoliciesResponse {
  /**
   * @schema FmsListPoliciesResponse#PolicyList
   */
  readonly policyList?: FmsPolicySummary[];

  /**
   * @schema FmsListPoliciesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema FmsListProtocolsListsRequest
 */
export interface FmsListProtocolsListsRequest {
  /**
   * @schema FmsListProtocolsListsRequest#DefaultLists
   */
  readonly defaultLists?: boolean;

  /**
   * @schema FmsListProtocolsListsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema FmsListProtocolsListsRequest#MaxResults
   */
  readonly maxResults: number;

}

/**
 * @schema FmsListProtocolsListsResponse
 */
export interface FmsListProtocolsListsResponse {
  /**
   * @schema FmsListProtocolsListsResponse#ProtocolsLists
   */
  readonly protocolsLists?: FmsProtocolsListDataSummary[];

  /**
   * @schema FmsListProtocolsListsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema FmsListTagsForResourceRequest
 */
export interface FmsListTagsForResourceRequest {
  /**
   * @schema FmsListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema FmsListTagsForResourceResponse
 */
export interface FmsListTagsForResourceResponse {
  /**
   * @schema FmsListTagsForResourceResponse#TagList
   */
  readonly tagList?: FmsTag[];

}

/**
 * @schema FmsPutAppsListRequest
 */
export interface FmsPutAppsListRequest {
  /**
   * @schema FmsPutAppsListRequest#AppsList
   */
  readonly appsList: FmsAppsListData;

  /**
   * @schema FmsPutAppsListRequest#TagList
   */
  readonly tagList?: FmsTag[];

}

/**
 * @schema FmsPutAppsListResponse
 */
export interface FmsPutAppsListResponse {
  /**
   * @schema FmsPutAppsListResponse#AppsList
   */
  readonly appsList?: FmsAppsListData;

  /**
   * @schema FmsPutAppsListResponse#AppsListArn
   */
  readonly appsListArn?: string;

}

/**
 * @schema FmsPutNotificationChannelRequest
 */
export interface FmsPutNotificationChannelRequest {
  /**
   * @schema FmsPutNotificationChannelRequest#SnsTopicArn
   */
  readonly snsTopicArn: string;

  /**
   * @schema FmsPutNotificationChannelRequest#SnsRoleName
   */
  readonly snsRoleName: string;

}

/**
 * @schema FmsPutPolicyRequest
 */
export interface FmsPutPolicyRequest {
  /**
   * @schema FmsPutPolicyRequest#Policy
   */
  readonly policy: FmsPolicy;

  /**
   * @schema FmsPutPolicyRequest#TagList
   */
  readonly tagList?: FmsTag[];

}

/**
 * @schema FmsPutPolicyResponse
 */
export interface FmsPutPolicyResponse {
  /**
   * @schema FmsPutPolicyResponse#Policy
   */
  readonly policy?: FmsPolicy;

  /**
   * @schema FmsPutPolicyResponse#PolicyArn
   */
  readonly policyArn?: string;

}

/**
 * @schema FmsPutProtocolsListRequest
 */
export interface FmsPutProtocolsListRequest {
  /**
   * @schema FmsPutProtocolsListRequest#ProtocolsList
   */
  readonly protocolsList: FmsProtocolsListData;

  /**
   * @schema FmsPutProtocolsListRequest#TagList
   */
  readonly tagList?: FmsTag[];

}

/**
 * @schema FmsPutProtocolsListResponse
 */
export interface FmsPutProtocolsListResponse {
  /**
   * @schema FmsPutProtocolsListResponse#ProtocolsList
   */
  readonly protocolsList?: FmsProtocolsListData;

  /**
   * @schema FmsPutProtocolsListResponse#ProtocolsListArn
   */
  readonly protocolsListArn?: string;

}

/**
 * @schema FmsTagResourceRequest
 */
export interface FmsTagResourceRequest {
  /**
   * @schema FmsTagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema FmsTagResourceRequest#TagList
   */
  readonly tagList: FmsTag[];

}

/**
 * @schema FmsTagResourceResponse
 */
export interface FmsTagResourceResponse {
}

/**
 * @schema FmsUntagResourceRequest
 */
export interface FmsUntagResourceRequest {
  /**
   * @schema FmsUntagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema FmsUntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema FmsUntagResourceResponse
 */
export interface FmsUntagResourceResponse {
}

/**
 * @schema FmsAppsListData
 */
export interface FmsAppsListData {
  /**
   * @schema FmsAppsListData#ListId
   */
  readonly listId?: string;

  /**
   * @schema FmsAppsListData#ListName
   */
  readonly listName: string;

  /**
   * @schema FmsAppsListData#ListUpdateToken
   */
  readonly listUpdateToken?: string;

  /**
   * @schema FmsAppsListData#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema FmsAppsListData#LastUpdateTime
   */
  readonly lastUpdateTime?: string;

  /**
   * @schema FmsAppsListData#AppsList
   */
  readonly appsList: FmsApp[];

  /**
   * @schema FmsAppsListData#PreviousAppsList
   */
  readonly previousAppsList?: { [key: string]: FmsApp[] };

}

/**
 * @schema FmsPolicyComplianceDetail
 */
export interface FmsPolicyComplianceDetail {
  /**
   * @schema FmsPolicyComplianceDetail#PolicyOwner
   */
  readonly policyOwner?: string;

  /**
   * @schema FmsPolicyComplianceDetail#PolicyId
   */
  readonly policyId?: string;

  /**
   * @schema FmsPolicyComplianceDetail#MemberAccount
   */
  readonly memberAccount?: string;

  /**
   * @schema FmsPolicyComplianceDetail#Violators
   */
  readonly violators?: FmsComplianceViolator[];

  /**
   * @schema FmsPolicyComplianceDetail#EvaluationLimitExceeded
   */
  readonly evaluationLimitExceeded?: boolean;

  /**
   * @schema FmsPolicyComplianceDetail#ExpiredAt
   */
  readonly expiredAt?: string;

  /**
   * @schema FmsPolicyComplianceDetail#IssueInfoMap
   */
  readonly issueInfoMap?: { [key: string]: string };

}

/**
 * @schema FmsPolicy
 */
export interface FmsPolicy {
  /**
   * @schema FmsPolicy#PolicyId
   */
  readonly policyId?: string;

  /**
   * @schema FmsPolicy#PolicyName
   */
  readonly policyName: string;

  /**
   * @schema FmsPolicy#PolicyUpdateToken
   */
  readonly policyUpdateToken?: string;

  /**
   * @schema FmsPolicy#SecurityServicePolicyData
   */
  readonly securityServicePolicyData: FmsSecurityServicePolicyData;

  /**
   * @schema FmsPolicy#ResourceType
   */
  readonly resourceType: string;

  /**
   * @schema FmsPolicy#ResourceTypeList
   */
  readonly resourceTypeList?: string[];

  /**
   * @schema FmsPolicy#ResourceTags
   */
  readonly resourceTags?: FmsResourceTag[];

  /**
   * @schema FmsPolicy#ExcludeResourceTags
   */
  readonly excludeResourceTags: boolean;

  /**
   * @schema FmsPolicy#RemediationEnabled
   */
  readonly remediationEnabled: boolean;

  /**
   * @schema FmsPolicy#IncludeMap
   */
  readonly includeMap?: { [key: string]: string[] };

  /**
   * @schema FmsPolicy#ExcludeMap
   */
  readonly excludeMap?: { [key: string]: string[] };

}

/**
 * @schema FmsProtocolsListData
 */
export interface FmsProtocolsListData {
  /**
   * @schema FmsProtocolsListData#ListId
   */
  readonly listId?: string;

  /**
   * @schema FmsProtocolsListData#ListName
   */
  readonly listName: string;

  /**
   * @schema FmsProtocolsListData#ListUpdateToken
   */
  readonly listUpdateToken?: string;

  /**
   * @schema FmsProtocolsListData#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema FmsProtocolsListData#LastUpdateTime
   */
  readonly lastUpdateTime?: string;

  /**
   * @schema FmsProtocolsListData#ProtocolsList
   */
  readonly protocolsList: string[];

  /**
   * @schema FmsProtocolsListData#PreviousProtocolsList
   */
  readonly previousProtocolsList?: { [key: string]: string[] };

}

/**
 * @schema FmsViolationDetail
 */
export interface FmsViolationDetail {
  /**
   * @schema FmsViolationDetail#PolicyId
   */
  readonly policyId: string;

  /**
   * @schema FmsViolationDetail#MemberAccount
   */
  readonly memberAccount: string;

  /**
   * @schema FmsViolationDetail#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema FmsViolationDetail#ResourceType
   */
  readonly resourceType: string;

  /**
   * @schema FmsViolationDetail#ResourceViolations
   */
  readonly resourceViolations: FmsResourceViolation[];

  /**
   * @schema FmsViolationDetail#ResourceTags
   */
  readonly resourceTags?: FmsTag[];

  /**
   * @schema FmsViolationDetail#ResourceDescription
   */
  readonly resourceDescription?: string;

}

/**
 * @schema FmsAppsListDataSummary
 */
export interface FmsAppsListDataSummary {
  /**
   * @schema FmsAppsListDataSummary#ListArn
   */
  readonly listArn?: string;

  /**
   * @schema FmsAppsListDataSummary#ListId
   */
  readonly listId?: string;

  /**
   * @schema FmsAppsListDataSummary#ListName
   */
  readonly listName?: string;

  /**
   * @schema FmsAppsListDataSummary#AppsList
   */
  readonly appsList?: FmsApp[];

}

/**
 * @schema FmsPolicyComplianceStatus
 */
export interface FmsPolicyComplianceStatus {
  /**
   * @schema FmsPolicyComplianceStatus#PolicyOwner
   */
  readonly policyOwner?: string;

  /**
   * @schema FmsPolicyComplianceStatus#PolicyId
   */
  readonly policyId?: string;

  /**
   * @schema FmsPolicyComplianceStatus#PolicyName
   */
  readonly policyName?: string;

  /**
   * @schema FmsPolicyComplianceStatus#MemberAccount
   */
  readonly memberAccount?: string;

  /**
   * @schema FmsPolicyComplianceStatus#EvaluationResults
   */
  readonly evaluationResults?: FmsEvaluationResult[];

  /**
   * @schema FmsPolicyComplianceStatus#LastUpdated
   */
  readonly lastUpdated?: string;

  /**
   * @schema FmsPolicyComplianceStatus#IssueInfoMap
   */
  readonly issueInfoMap?: { [key: string]: string };

}

/**
 * @schema FmsPolicySummary
 */
export interface FmsPolicySummary {
  /**
   * @schema FmsPolicySummary#PolicyArn
   */
  readonly policyArn?: string;

  /**
   * @schema FmsPolicySummary#PolicyId
   */
  readonly policyId?: string;

  /**
   * @schema FmsPolicySummary#PolicyName
   */
  readonly policyName?: string;

  /**
   * @schema FmsPolicySummary#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema FmsPolicySummary#SecurityServiceType
   */
  readonly securityServiceType?: string;

  /**
   * @schema FmsPolicySummary#RemediationEnabled
   */
  readonly remediationEnabled?: boolean;

}

/**
 * @schema FmsProtocolsListDataSummary
 */
export interface FmsProtocolsListDataSummary {
  /**
   * @schema FmsProtocolsListDataSummary#ListArn
   */
  readonly listArn?: string;

  /**
   * @schema FmsProtocolsListDataSummary#ListId
   */
  readonly listId?: string;

  /**
   * @schema FmsProtocolsListDataSummary#ListName
   */
  readonly listName?: string;

  /**
   * @schema FmsProtocolsListDataSummary#ProtocolsList
   */
  readonly protocolsList?: string[];

}

/**
 * @schema FmsTag
 */
export interface FmsTag {
  /**
   * @schema FmsTag#Key
   */
  readonly key: string;

  /**
   * @schema FmsTag#Value
   */
  readonly value: string;

}

/**
 * @schema FmsApp
 */
export interface FmsApp {
  /**
   * @schema FmsApp#AppName
   */
  readonly appName: string;

  /**
   * @schema FmsApp#Protocol
   */
  readonly protocol: string;

  /**
   * @schema FmsApp#Port
   */
  readonly port: number;

}

/**
 * @schema FmsComplianceViolator
 */
export interface FmsComplianceViolator {
  /**
   * @schema FmsComplianceViolator#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema FmsComplianceViolator#ViolationReason
   */
  readonly violationReason?: string;

  /**
   * @schema FmsComplianceViolator#ResourceType
   */
  readonly resourceType?: string;

}

/**
 * @schema FmsSecurityServicePolicyData
 */
export interface FmsSecurityServicePolicyData {
  /**
   * @schema FmsSecurityServicePolicyData#Type
   */
  readonly type: string;

  /**
   * @schema FmsSecurityServicePolicyData#ManagedServiceData
   */
  readonly managedServiceData?: string;

}

/**
 * @schema FmsResourceTag
 */
export interface FmsResourceTag {
  /**
   * @schema FmsResourceTag#Key
   */
  readonly key: string;

  /**
   * @schema FmsResourceTag#Value
   */
  readonly value?: string;

}

/**
 * @schema FmsResourceViolation
 */
export interface FmsResourceViolation {
  /**
   * @schema FmsResourceViolation#AwsVPCSecurityGroupViolation
   */
  readonly awsVpcSecurityGroupViolation?: FmsAwsVpcSecurityGroupViolation;

  /**
   * @schema FmsResourceViolation#AwsEc2NetworkInterfaceViolation
   */
  readonly awsEc2NetworkInterfaceViolation?: FmsAwsEc2NetworkInterfaceViolation;

  /**
   * @schema FmsResourceViolation#AwsEc2InstanceViolation
   */
  readonly awsEc2InstanceViolation?: FmsAwsEc2InstanceViolation;

  /**
   * @schema FmsResourceViolation#NetworkFirewallMissingFirewallViolation
   */
  readonly networkFirewallMissingFirewallViolation?: FmsNetworkFirewallMissingFirewallViolation;

  /**
   * @schema FmsResourceViolation#NetworkFirewallMissingSubnetViolation
   */
  readonly networkFirewallMissingSubnetViolation?: FmsNetworkFirewallMissingSubnetViolation;

  /**
   * @schema FmsResourceViolation#NetworkFirewallMissingExpectedRTViolation
   */
  readonly networkFirewallMissingExpectedRtViolation?: FmsNetworkFirewallMissingExpectedRtViolation;

  /**
   * @schema FmsResourceViolation#NetworkFirewallPolicyModifiedViolation
   */
  readonly networkFirewallPolicyModifiedViolation?: FmsNetworkFirewallPolicyModifiedViolation;

}

/**
 * @schema FmsEvaluationResult
 */
export interface FmsEvaluationResult {
  /**
   * @schema FmsEvaluationResult#ComplianceStatus
   */
  readonly complianceStatus?: string;

  /**
   * @schema FmsEvaluationResult#ViolatorCount
   */
  readonly violatorCount?: number;

  /**
   * @schema FmsEvaluationResult#EvaluationLimitExceeded
   */
  readonly evaluationLimitExceeded?: boolean;

}

/**
 * @schema FmsAwsVpcSecurityGroupViolation
 */
export interface FmsAwsVpcSecurityGroupViolation {
  /**
   * @schema FmsAwsVpcSecurityGroupViolation#ViolationTarget
   */
  readonly violationTarget?: string;

  /**
   * @schema FmsAwsVpcSecurityGroupViolation#ViolationTargetDescription
   */
  readonly violationTargetDescription?: string;

  /**
   * @schema FmsAwsVpcSecurityGroupViolation#PartialMatches
   */
  readonly partialMatches?: FmsPartialMatch[];

  /**
   * @schema FmsAwsVpcSecurityGroupViolation#PossibleSecurityGroupRemediationActions
   */
  readonly possibleSecurityGroupRemediationActions?: FmsSecurityGroupRemediationAction[];

}

/**
 * @schema FmsAwsEc2NetworkInterfaceViolation
 */
export interface FmsAwsEc2NetworkInterfaceViolation {
  /**
   * @schema FmsAwsEc2NetworkInterfaceViolation#ViolationTarget
   */
  readonly violationTarget?: string;

  /**
   * @schema FmsAwsEc2NetworkInterfaceViolation#ViolatingSecurityGroups
   */
  readonly violatingSecurityGroups?: string[];

}

/**
 * @schema FmsAwsEc2InstanceViolation
 */
export interface FmsAwsEc2InstanceViolation {
  /**
   * @schema FmsAwsEc2InstanceViolation#ViolationTarget
   */
  readonly violationTarget?: string;

  /**
   * @schema FmsAwsEc2InstanceViolation#AwsEc2NetworkInterfaceViolations
   */
  readonly awsEc2NetworkInterfaceViolations?: FmsAwsEc2NetworkInterfaceViolation[];

}

/**
 * @schema FmsNetworkFirewallMissingFirewallViolation
 */
export interface FmsNetworkFirewallMissingFirewallViolation {
  /**
   * @schema FmsNetworkFirewallMissingFirewallViolation#ViolationTarget
   */
  readonly violationTarget?: string;

  /**
   * @schema FmsNetworkFirewallMissingFirewallViolation#VPC
   */
  readonly vpc?: string;

  /**
   * @schema FmsNetworkFirewallMissingFirewallViolation#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema FmsNetworkFirewallMissingFirewallViolation#TargetViolationReason
   */
  readonly targetViolationReason?: string;

}

/**
 * @schema FmsNetworkFirewallMissingSubnetViolation
 */
export interface FmsNetworkFirewallMissingSubnetViolation {
  /**
   * @schema FmsNetworkFirewallMissingSubnetViolation#ViolationTarget
   */
  readonly violationTarget?: string;

  /**
   * @schema FmsNetworkFirewallMissingSubnetViolation#VPC
   */
  readonly vpc?: string;

  /**
   * @schema FmsNetworkFirewallMissingSubnetViolation#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema FmsNetworkFirewallMissingSubnetViolation#TargetViolationReason
   */
  readonly targetViolationReason?: string;

}

/**
 * @schema FmsNetworkFirewallMissingExpectedRtViolation
 */
export interface FmsNetworkFirewallMissingExpectedRtViolation {
  /**
   * @schema FmsNetworkFirewallMissingExpectedRtViolation#ViolationTarget
   */
  readonly violationTarget?: string;

  /**
   * @schema FmsNetworkFirewallMissingExpectedRtViolation#VPC
   */
  readonly vpc?: string;

  /**
   * @schema FmsNetworkFirewallMissingExpectedRtViolation#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema FmsNetworkFirewallMissingExpectedRtViolation#CurrentRouteTable
   */
  readonly currentRouteTable?: string;

  /**
   * @schema FmsNetworkFirewallMissingExpectedRtViolation#ExpectedRouteTable
   */
  readonly expectedRouteTable?: string;

}

/**
 * @schema FmsNetworkFirewallPolicyModifiedViolation
 */
export interface FmsNetworkFirewallPolicyModifiedViolation {
  /**
   * @schema FmsNetworkFirewallPolicyModifiedViolation#ViolationTarget
   */
  readonly violationTarget?: string;

  /**
   * @schema FmsNetworkFirewallPolicyModifiedViolation#CurrentPolicyDescription
   */
  readonly currentPolicyDescription?: FmsNetworkFirewallPolicyDescription;

  /**
   * @schema FmsNetworkFirewallPolicyModifiedViolation#ExpectedPolicyDescription
   */
  readonly expectedPolicyDescription?: FmsNetworkFirewallPolicyDescription;

}

/**
 * @schema FmsPartialMatch
 */
export interface FmsPartialMatch {
  /**
   * @schema FmsPartialMatch#Reference
   */
  readonly reference?: string;

  /**
   * @schema FmsPartialMatch#TargetViolationReasons
   */
  readonly targetViolationReasons?: string[];

}

/**
 * @schema FmsSecurityGroupRemediationAction
 */
export interface FmsSecurityGroupRemediationAction {
  /**
   * @schema FmsSecurityGroupRemediationAction#RemediationActionType
   */
  readonly remediationActionType?: string;

  /**
   * @schema FmsSecurityGroupRemediationAction#Description
   */
  readonly description?: string;

  /**
   * @schema FmsSecurityGroupRemediationAction#RemediationResult
   */
  readonly remediationResult?: FmsSecurityGroupRuleDescription;

  /**
   * @schema FmsSecurityGroupRemediationAction#IsDefaultAction
   */
  readonly isDefaultAction?: boolean;

}

/**
 * @schema FmsNetworkFirewallPolicyDescription
 */
export interface FmsNetworkFirewallPolicyDescription {
  /**
   * @schema FmsNetworkFirewallPolicyDescription#StatelessRuleGroups
   */
  readonly statelessRuleGroups?: FmsStatelessRuleGroup[];

  /**
   * @schema FmsNetworkFirewallPolicyDescription#StatelessDefaultActions
   */
  readonly statelessDefaultActions?: string[];

  /**
   * @schema FmsNetworkFirewallPolicyDescription#StatelessFragmentDefaultActions
   */
  readonly statelessFragmentDefaultActions?: string[];

  /**
   * @schema FmsNetworkFirewallPolicyDescription#StatelessCustomActions
   */
  readonly statelessCustomActions?: string[];

  /**
   * @schema FmsNetworkFirewallPolicyDescription#StatefulRuleGroups
   */
  readonly statefulRuleGroups?: FmsStatefulRuleGroup[];

}

/**
 * @schema FmsSecurityGroupRuleDescription
 */
export interface FmsSecurityGroupRuleDescription {
  /**
   * @schema FmsSecurityGroupRuleDescription#IPV4Range
   */
  readonly ipv4Range?: string;

  /**
   * @schema FmsSecurityGroupRuleDescription#IPV6Range
   */
  readonly ipv6Range?: string;

  /**
   * @schema FmsSecurityGroupRuleDescription#PrefixListId
   */
  readonly prefixListId?: string;

  /**
   * @schema FmsSecurityGroupRuleDescription#Protocol
   */
  readonly protocol?: string;

  /**
   * @schema FmsSecurityGroupRuleDescription#FromPort
   */
  readonly fromPort?: number;

  /**
   * @schema FmsSecurityGroupRuleDescription#ToPort
   */
  readonly toPort?: number;

}

/**
 * @schema FmsStatelessRuleGroup
 */
export interface FmsStatelessRuleGroup {
  /**
   * @schema FmsStatelessRuleGroup#RuleGroupName
   */
  readonly ruleGroupName?: string;

  /**
   * @schema FmsStatelessRuleGroup#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema FmsStatelessRuleGroup#Priority
   */
  readonly priority?: number;

}

/**
 * @schema FmsStatefulRuleGroup
 */
export interface FmsStatefulRuleGroup {
  /**
   * @schema FmsStatefulRuleGroup#RuleGroupName
   */
  readonly ruleGroupName?: string;

  /**
   * @schema FmsStatefulRuleGroup#ResourceId
   */
  readonly resourceId?: string;

}
