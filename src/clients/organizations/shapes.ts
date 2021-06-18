/**
 * @schema OrganizationsAcceptHandshakeRequest
 */
export interface OrganizationsAcceptHandshakeRequest {
  /**
   * @schema OrganizationsAcceptHandshakeRequest#HandshakeId
   */
  readonly handshakeId: string;

}

/**
 * @schema OrganizationsAcceptHandshakeResponse
 */
export interface OrganizationsAcceptHandshakeResponse {
  /**
   * @schema OrganizationsAcceptHandshakeResponse#Handshake
   */
  readonly handshake?: OrganizationsHandshake;

}

/**
 * @schema OrganizationsAttachPolicyRequest
 */
export interface OrganizationsAttachPolicyRequest {
  /**
   * @schema OrganizationsAttachPolicyRequest#PolicyId
   */
  readonly policyId: string;

  /**
   * @schema OrganizationsAttachPolicyRequest#TargetId
   */
  readonly targetId: string;

}

/**
 * @schema OrganizationsCancelHandshakeRequest
 */
export interface OrganizationsCancelHandshakeRequest {
  /**
   * @schema OrganizationsCancelHandshakeRequest#HandshakeId
   */
  readonly handshakeId: string;

}

/**
 * @schema OrganizationsCancelHandshakeResponse
 */
export interface OrganizationsCancelHandshakeResponse {
  /**
   * @schema OrganizationsCancelHandshakeResponse#Handshake
   */
  readonly handshake?: OrganizationsHandshake;

}

/**
 * @schema OrganizationsCreateAccountRequest
 */
export interface OrganizationsCreateAccountRequest {
  /**
   * @schema OrganizationsCreateAccountRequest#Email
   */
  readonly email: string;

  /**
   * @schema OrganizationsCreateAccountRequest#AccountName
   */
  readonly accountName: string;

  /**
   * @schema OrganizationsCreateAccountRequest#RoleName
   */
  readonly roleName?: string;

  /**
   * @schema OrganizationsCreateAccountRequest#IamUserAccessToBilling
   */
  readonly iamUserAccessToBilling?: string;

  /**
   * @schema OrganizationsCreateAccountRequest#Tags
   */
  readonly tags?: OrganizationsTag[];

}

/**
 * @schema OrganizationsCreateAccountResponse
 */
export interface OrganizationsCreateAccountResponse {
  /**
   * @schema OrganizationsCreateAccountResponse#CreateAccountStatus
   */
  readonly createAccountStatus?: OrganizationsCreateAccountStatus;

}

/**
 * @schema OrganizationsCreateGovCloudAccountRequest
 */
export interface OrganizationsCreateGovCloudAccountRequest {
  /**
   * @schema OrganizationsCreateGovCloudAccountRequest#Email
   */
  readonly email: string;

  /**
   * @schema OrganizationsCreateGovCloudAccountRequest#AccountName
   */
  readonly accountName: string;

  /**
   * @schema OrganizationsCreateGovCloudAccountRequest#RoleName
   */
  readonly roleName?: string;

  /**
   * @schema OrganizationsCreateGovCloudAccountRequest#IamUserAccessToBilling
   */
  readonly iamUserAccessToBilling?: string;

  /**
   * @schema OrganizationsCreateGovCloudAccountRequest#Tags
   */
  readonly tags?: OrganizationsTag[];

}

/**
 * @schema OrganizationsCreateGovCloudAccountResponse
 */
export interface OrganizationsCreateGovCloudAccountResponse {
  /**
   * @schema OrganizationsCreateGovCloudAccountResponse#CreateAccountStatus
   */
  readonly createAccountStatus?: OrganizationsCreateAccountStatus;

}

/**
 * @schema OrganizationsCreateOrganizationRequest
 */
export interface OrganizationsCreateOrganizationRequest {
  /**
   * @schema OrganizationsCreateOrganizationRequest#FeatureSet
   */
  readonly featureSet?: string;

}

/**
 * @schema OrganizationsCreateOrganizationResponse
 */
export interface OrganizationsCreateOrganizationResponse {
  /**
   * @schema OrganizationsCreateOrganizationResponse#Organization
   */
  readonly organization?: OrganizationsOrganization;

}

/**
 * @schema OrganizationsCreateOrganizationalUnitRequest
 */
export interface OrganizationsCreateOrganizationalUnitRequest {
  /**
   * @schema OrganizationsCreateOrganizationalUnitRequest#ParentId
   */
  readonly parentId: string;

  /**
   * @schema OrganizationsCreateOrganizationalUnitRequest#Name
   */
  readonly name: string;

  /**
   * @schema OrganizationsCreateOrganizationalUnitRequest#Tags
   */
  readonly tags?: OrganizationsTag[];

}

/**
 * @schema OrganizationsCreateOrganizationalUnitResponse
 */
export interface OrganizationsCreateOrganizationalUnitResponse {
  /**
   * @schema OrganizationsCreateOrganizationalUnitResponse#OrganizationalUnit
   */
  readonly organizationalUnit?: OrganizationsOrganizationalUnit;

}

/**
 * @schema OrganizationsCreatePolicyRequest
 */
export interface OrganizationsCreatePolicyRequest {
  /**
   * @schema OrganizationsCreatePolicyRequest#Content
   */
  readonly content: string;

  /**
   * @schema OrganizationsCreatePolicyRequest#Description
   */
  readonly description: string;

  /**
   * @schema OrganizationsCreatePolicyRequest#Name
   */
  readonly name: string;

  /**
   * @schema OrganizationsCreatePolicyRequest#Type
   */
  readonly type: string;

  /**
   * @schema OrganizationsCreatePolicyRequest#Tags
   */
  readonly tags?: OrganizationsTag[];

}

/**
 * @schema OrganizationsCreatePolicyResponse
 */
export interface OrganizationsCreatePolicyResponse {
  /**
   * @schema OrganizationsCreatePolicyResponse#Policy
   */
  readonly policy?: OrganizationsPolicy;

}

/**
 * @schema OrganizationsDeclineHandshakeRequest
 */
export interface OrganizationsDeclineHandshakeRequest {
  /**
   * @schema OrganizationsDeclineHandshakeRequest#HandshakeId
   */
  readonly handshakeId: string;

}

/**
 * @schema OrganizationsDeclineHandshakeResponse
 */
export interface OrganizationsDeclineHandshakeResponse {
  /**
   * @schema OrganizationsDeclineHandshakeResponse#Handshake
   */
  readonly handshake?: OrganizationsHandshake;

}

/**
 * @schema OrganizationsDeleteOrganizationalUnitRequest
 */
export interface OrganizationsDeleteOrganizationalUnitRequest {
  /**
   * @schema OrganizationsDeleteOrganizationalUnitRequest#OrganizationalUnitId
   */
  readonly organizationalUnitId: string;

}

/**
 * @schema OrganizationsDeletePolicyRequest
 */
export interface OrganizationsDeletePolicyRequest {
  /**
   * @schema OrganizationsDeletePolicyRequest#PolicyId
   */
  readonly policyId: string;

}

/**
 * @schema OrganizationsDeregisterDelegatedAdministratorRequest
 */
export interface OrganizationsDeregisterDelegatedAdministratorRequest {
  /**
   * @schema OrganizationsDeregisterDelegatedAdministratorRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema OrganizationsDeregisterDelegatedAdministratorRequest#ServicePrincipal
   */
  readonly servicePrincipal: string;

}

/**
 * @schema OrganizationsDescribeAccountRequest
 */
export interface OrganizationsDescribeAccountRequest {
  /**
   * @schema OrganizationsDescribeAccountRequest#AccountId
   */
  readonly accountId: string;

}

/**
 * @schema OrganizationsDescribeAccountResponse
 */
export interface OrganizationsDescribeAccountResponse {
  /**
   * @schema OrganizationsDescribeAccountResponse#Account
   */
  readonly account?: OrganizationsAccount;

}

/**
 * @schema OrganizationsDescribeCreateAccountStatusRequest
 */
export interface OrganizationsDescribeCreateAccountStatusRequest {
  /**
   * @schema OrganizationsDescribeCreateAccountStatusRequest#CreateAccountRequestId
   */
  readonly createAccountRequestId: string;

}

/**
 * @schema OrganizationsDescribeCreateAccountStatusResponse
 */
export interface OrganizationsDescribeCreateAccountStatusResponse {
  /**
   * @schema OrganizationsDescribeCreateAccountStatusResponse#CreateAccountStatus
   */
  readonly createAccountStatus?: OrganizationsCreateAccountStatus;

}

/**
 * @schema OrganizationsDescribeEffectivePolicyRequest
 */
export interface OrganizationsDescribeEffectivePolicyRequest {
  /**
   * @schema OrganizationsDescribeEffectivePolicyRequest#PolicyType
   */
  readonly policyType: string;

  /**
   * @schema OrganizationsDescribeEffectivePolicyRequest#TargetId
   */
  readonly targetId?: string;

}

/**
 * @schema OrganizationsDescribeEffectivePolicyResponse
 */
export interface OrganizationsDescribeEffectivePolicyResponse {
  /**
   * @schema OrganizationsDescribeEffectivePolicyResponse#EffectivePolicy
   */
  readonly effectivePolicy?: OrganizationsEffectivePolicy;

}

/**
 * @schema OrganizationsDescribeHandshakeRequest
 */
export interface OrganizationsDescribeHandshakeRequest {
  /**
   * @schema OrganizationsDescribeHandshakeRequest#HandshakeId
   */
  readonly handshakeId: string;

}

/**
 * @schema OrganizationsDescribeHandshakeResponse
 */
export interface OrganizationsDescribeHandshakeResponse {
  /**
   * @schema OrganizationsDescribeHandshakeResponse#Handshake
   */
  readonly handshake?: OrganizationsHandshake;

}

/**
 * @schema OrganizationsDescribeOrganizationResponse
 */
export interface OrganizationsDescribeOrganizationResponse {
  /**
   * @schema OrganizationsDescribeOrganizationResponse#Organization
   */
  readonly organization?: OrganizationsOrganization;

}

/**
 * @schema OrganizationsDescribeOrganizationalUnitRequest
 */
export interface OrganizationsDescribeOrganizationalUnitRequest {
  /**
   * @schema OrganizationsDescribeOrganizationalUnitRequest#OrganizationalUnitId
   */
  readonly organizationalUnitId: string;

}

/**
 * @schema OrganizationsDescribeOrganizationalUnitResponse
 */
export interface OrganizationsDescribeOrganizationalUnitResponse {
  /**
   * @schema OrganizationsDescribeOrganizationalUnitResponse#OrganizationalUnit
   */
  readonly organizationalUnit?: OrganizationsOrganizationalUnit;

}

/**
 * @schema OrganizationsDescribePolicyRequest
 */
export interface OrganizationsDescribePolicyRequest {
  /**
   * @schema OrganizationsDescribePolicyRequest#PolicyId
   */
  readonly policyId: string;

}

/**
 * @schema OrganizationsDescribePolicyResponse
 */
export interface OrganizationsDescribePolicyResponse {
  /**
   * @schema OrganizationsDescribePolicyResponse#Policy
   */
  readonly policy?: OrganizationsPolicy;

}

/**
 * @schema OrganizationsDetachPolicyRequest
 */
export interface OrganizationsDetachPolicyRequest {
  /**
   * @schema OrganizationsDetachPolicyRequest#PolicyId
   */
  readonly policyId: string;

  /**
   * @schema OrganizationsDetachPolicyRequest#TargetId
   */
  readonly targetId: string;

}

/**
 * @schema OrganizationsDisableAwsServiceAccessRequest
 */
export interface OrganizationsDisableAwsServiceAccessRequest {
  /**
   * @schema OrganizationsDisableAwsServiceAccessRequest#ServicePrincipal
   */
  readonly servicePrincipal: string;

}

/**
 * @schema OrganizationsDisablePolicyTypeRequest
 */
export interface OrganizationsDisablePolicyTypeRequest {
  /**
   * @schema OrganizationsDisablePolicyTypeRequest#RootId
   */
  readonly rootId: string;

  /**
   * @schema OrganizationsDisablePolicyTypeRequest#PolicyType
   */
  readonly policyType: string;

}

/**
 * @schema OrganizationsDisablePolicyTypeResponse
 */
export interface OrganizationsDisablePolicyTypeResponse {
  /**
   * @schema OrganizationsDisablePolicyTypeResponse#Root
   */
  readonly root?: OrganizationsRoot;

}

/**
 * @schema OrganizationsEnableAwsServiceAccessRequest
 */
export interface OrganizationsEnableAwsServiceAccessRequest {
  /**
   * @schema OrganizationsEnableAwsServiceAccessRequest#ServicePrincipal
   */
  readonly servicePrincipal: string;

}

/**
 * @schema OrganizationsEnableAllFeaturesRequest
 */
export interface OrganizationsEnableAllFeaturesRequest {
}

/**
 * @schema OrganizationsEnableAllFeaturesResponse
 */
export interface OrganizationsEnableAllFeaturesResponse {
  /**
   * @schema OrganizationsEnableAllFeaturesResponse#Handshake
   */
  readonly handshake?: OrganizationsHandshake;

}

/**
 * @schema OrganizationsEnablePolicyTypeRequest
 */
export interface OrganizationsEnablePolicyTypeRequest {
  /**
   * @schema OrganizationsEnablePolicyTypeRequest#RootId
   */
  readonly rootId: string;

  /**
   * @schema OrganizationsEnablePolicyTypeRequest#PolicyType
   */
  readonly policyType: string;

}

/**
 * @schema OrganizationsEnablePolicyTypeResponse
 */
export interface OrganizationsEnablePolicyTypeResponse {
  /**
   * @schema OrganizationsEnablePolicyTypeResponse#Root
   */
  readonly root?: OrganizationsRoot;

}

/**
 * @schema OrganizationsInviteAccountToOrganizationRequest
 */
export interface OrganizationsInviteAccountToOrganizationRequest {
  /**
   * @schema OrganizationsInviteAccountToOrganizationRequest#Target
   */
  readonly target: OrganizationsHandshakeParty;

  /**
   * @schema OrganizationsInviteAccountToOrganizationRequest#Notes
   */
  readonly notes?: string;

  /**
   * @schema OrganizationsInviteAccountToOrganizationRequest#Tags
   */
  readonly tags?: OrganizationsTag[];

}

/**
 * @schema OrganizationsInviteAccountToOrganizationResponse
 */
export interface OrganizationsInviteAccountToOrganizationResponse {
  /**
   * @schema OrganizationsInviteAccountToOrganizationResponse#Handshake
   */
  readonly handshake?: OrganizationsHandshake;

}

/**
 * @schema OrganizationsListAwsServiceAccessForOrganizationRequest
 */
export interface OrganizationsListAwsServiceAccessForOrganizationRequest {
  /**
   * @schema OrganizationsListAwsServiceAccessForOrganizationRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema OrganizationsListAwsServiceAccessForOrganizationRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema OrganizationsListAwsServiceAccessForOrganizationResponse
 */
export interface OrganizationsListAwsServiceAccessForOrganizationResponse {
  /**
   * @schema OrganizationsListAwsServiceAccessForOrganizationResponse#EnabledServicePrincipals
   */
  readonly enabledServicePrincipals?: OrganizationsEnabledServicePrincipal[];

  /**
   * @schema OrganizationsListAwsServiceAccessForOrganizationResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema OrganizationsListAccountsRequest
 */
export interface OrganizationsListAccountsRequest {
  /**
   * @schema OrganizationsListAccountsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema OrganizationsListAccountsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema OrganizationsListAccountsResponse
 */
export interface OrganizationsListAccountsResponse {
  /**
   * @schema OrganizationsListAccountsResponse#Accounts
   */
  readonly accounts?: OrganizationsAccount[];

  /**
   * @schema OrganizationsListAccountsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema OrganizationsListAccountsForParentRequest
 */
export interface OrganizationsListAccountsForParentRequest {
  /**
   * @schema OrganizationsListAccountsForParentRequest#ParentId
   */
  readonly parentId: string;

  /**
   * @schema OrganizationsListAccountsForParentRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema OrganizationsListAccountsForParentRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema OrganizationsListAccountsForParentResponse
 */
export interface OrganizationsListAccountsForParentResponse {
  /**
   * @schema OrganizationsListAccountsForParentResponse#Accounts
   */
  readonly accounts?: OrganizationsAccount[];

  /**
   * @schema OrganizationsListAccountsForParentResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema OrganizationsListChildrenRequest
 */
export interface OrganizationsListChildrenRequest {
  /**
   * @schema OrganizationsListChildrenRequest#ParentId
   */
  readonly parentId: string;

  /**
   * @schema OrganizationsListChildrenRequest#ChildType
   */
  readonly childType: string;

  /**
   * @schema OrganizationsListChildrenRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema OrganizationsListChildrenRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema OrganizationsListChildrenResponse
 */
export interface OrganizationsListChildrenResponse {
  /**
   * @schema OrganizationsListChildrenResponse#Children
   */
  readonly children?: OrganizationsChild[];

  /**
   * @schema OrganizationsListChildrenResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema OrganizationsListCreateAccountStatusRequest
 */
export interface OrganizationsListCreateAccountStatusRequest {
  /**
   * @schema OrganizationsListCreateAccountStatusRequest#States
   */
  readonly states?: string[];

  /**
   * @schema OrganizationsListCreateAccountStatusRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema OrganizationsListCreateAccountStatusRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema OrganizationsListCreateAccountStatusResponse
 */
export interface OrganizationsListCreateAccountStatusResponse {
  /**
   * @schema OrganizationsListCreateAccountStatusResponse#CreateAccountStatuses
   */
  readonly createAccountStatuses?: OrganizationsCreateAccountStatus[];

  /**
   * @schema OrganizationsListCreateAccountStatusResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema OrganizationsListDelegatedAdministratorsRequest
 */
export interface OrganizationsListDelegatedAdministratorsRequest {
  /**
   * @schema OrganizationsListDelegatedAdministratorsRequest#ServicePrincipal
   */
  readonly servicePrincipal?: string;

  /**
   * @schema OrganizationsListDelegatedAdministratorsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema OrganizationsListDelegatedAdministratorsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema OrganizationsListDelegatedAdministratorsResponse
 */
export interface OrganizationsListDelegatedAdministratorsResponse {
  /**
   * @schema OrganizationsListDelegatedAdministratorsResponse#DelegatedAdministrators
   */
  readonly delegatedAdministrators?: OrganizationsDelegatedAdministrator[];

  /**
   * @schema OrganizationsListDelegatedAdministratorsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema OrganizationsListDelegatedServicesForAccountRequest
 */
export interface OrganizationsListDelegatedServicesForAccountRequest {
  /**
   * @schema OrganizationsListDelegatedServicesForAccountRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema OrganizationsListDelegatedServicesForAccountRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema OrganizationsListDelegatedServicesForAccountRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema OrganizationsListDelegatedServicesForAccountResponse
 */
export interface OrganizationsListDelegatedServicesForAccountResponse {
  /**
   * @schema OrganizationsListDelegatedServicesForAccountResponse#DelegatedServices
   */
  readonly delegatedServices?: OrganizationsDelegatedService[];

  /**
   * @schema OrganizationsListDelegatedServicesForAccountResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema OrganizationsListHandshakesForAccountRequest
 */
export interface OrganizationsListHandshakesForAccountRequest {
  /**
   * @schema OrganizationsListHandshakesForAccountRequest#Filter
   */
  readonly filter?: OrganizationsHandshakeFilter;

  /**
   * @schema OrganizationsListHandshakesForAccountRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema OrganizationsListHandshakesForAccountRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema OrganizationsListHandshakesForAccountResponse
 */
export interface OrganizationsListHandshakesForAccountResponse {
  /**
   * @schema OrganizationsListHandshakesForAccountResponse#Handshakes
   */
  readonly handshakes?: OrganizationsHandshake[];

  /**
   * @schema OrganizationsListHandshakesForAccountResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema OrganizationsListHandshakesForOrganizationRequest
 */
export interface OrganizationsListHandshakesForOrganizationRequest {
  /**
   * @schema OrganizationsListHandshakesForOrganizationRequest#Filter
   */
  readonly filter?: OrganizationsHandshakeFilter;

  /**
   * @schema OrganizationsListHandshakesForOrganizationRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema OrganizationsListHandshakesForOrganizationRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema OrganizationsListHandshakesForOrganizationResponse
 */
export interface OrganizationsListHandshakesForOrganizationResponse {
  /**
   * @schema OrganizationsListHandshakesForOrganizationResponse#Handshakes
   */
  readonly handshakes?: OrganizationsHandshake[];

  /**
   * @schema OrganizationsListHandshakesForOrganizationResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema OrganizationsListOrganizationalUnitsForParentRequest
 */
export interface OrganizationsListOrganizationalUnitsForParentRequest {
  /**
   * @schema OrganizationsListOrganizationalUnitsForParentRequest#ParentId
   */
  readonly parentId: string;

  /**
   * @schema OrganizationsListOrganizationalUnitsForParentRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema OrganizationsListOrganizationalUnitsForParentRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema OrganizationsListOrganizationalUnitsForParentResponse
 */
export interface OrganizationsListOrganizationalUnitsForParentResponse {
  /**
   * @schema OrganizationsListOrganizationalUnitsForParentResponse#OrganizationalUnits
   */
  readonly organizationalUnits?: OrganizationsOrganizationalUnit[];

  /**
   * @schema OrganizationsListOrganizationalUnitsForParentResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema OrganizationsListParentsRequest
 */
export interface OrganizationsListParentsRequest {
  /**
   * @schema OrganizationsListParentsRequest#ChildId
   */
  readonly childId: string;

  /**
   * @schema OrganizationsListParentsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema OrganizationsListParentsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema OrganizationsListParentsResponse
 */
export interface OrganizationsListParentsResponse {
  /**
   * @schema OrganizationsListParentsResponse#Parents
   */
  readonly parents?: OrganizationsParent[];

  /**
   * @schema OrganizationsListParentsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema OrganizationsListPoliciesRequest
 */
export interface OrganizationsListPoliciesRequest {
  /**
   * @schema OrganizationsListPoliciesRequest#Filter
   */
  readonly filter: string;

  /**
   * @schema OrganizationsListPoliciesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema OrganizationsListPoliciesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema OrganizationsListPoliciesResponse
 */
export interface OrganizationsListPoliciesResponse {
  /**
   * @schema OrganizationsListPoliciesResponse#Policies
   */
  readonly policies?: OrganizationsPolicySummary[];

  /**
   * @schema OrganizationsListPoliciesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema OrganizationsListPoliciesForTargetRequest
 */
export interface OrganizationsListPoliciesForTargetRequest {
  /**
   * @schema OrganizationsListPoliciesForTargetRequest#TargetId
   */
  readonly targetId: string;

  /**
   * @schema OrganizationsListPoliciesForTargetRequest#Filter
   */
  readonly filter: string;

  /**
   * @schema OrganizationsListPoliciesForTargetRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema OrganizationsListPoliciesForTargetRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema OrganizationsListPoliciesForTargetResponse
 */
export interface OrganizationsListPoliciesForTargetResponse {
  /**
   * @schema OrganizationsListPoliciesForTargetResponse#Policies
   */
  readonly policies?: OrganizationsPolicySummary[];

  /**
   * @schema OrganizationsListPoliciesForTargetResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema OrganizationsListRootsRequest
 */
export interface OrganizationsListRootsRequest {
  /**
   * @schema OrganizationsListRootsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema OrganizationsListRootsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema OrganizationsListRootsResponse
 */
export interface OrganizationsListRootsResponse {
  /**
   * @schema OrganizationsListRootsResponse#Roots
   */
  readonly roots?: OrganizationsRoot[];

  /**
   * @schema OrganizationsListRootsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema OrganizationsListTagsForResourceRequest
 */
export interface OrganizationsListTagsForResourceRequest {
  /**
   * @schema OrganizationsListTagsForResourceRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema OrganizationsListTagsForResourceRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema OrganizationsListTagsForResourceResponse
 */
export interface OrganizationsListTagsForResourceResponse {
  /**
   * @schema OrganizationsListTagsForResourceResponse#Tags
   */
  readonly tags?: OrganizationsTag[];

  /**
   * @schema OrganizationsListTagsForResourceResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema OrganizationsListTargetsForPolicyRequest
 */
export interface OrganizationsListTargetsForPolicyRequest {
  /**
   * @schema OrganizationsListTargetsForPolicyRequest#PolicyId
   */
  readonly policyId: string;

  /**
   * @schema OrganizationsListTargetsForPolicyRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema OrganizationsListTargetsForPolicyRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema OrganizationsListTargetsForPolicyResponse
 */
export interface OrganizationsListTargetsForPolicyResponse {
  /**
   * @schema OrganizationsListTargetsForPolicyResponse#Targets
   */
  readonly targets?: OrganizationsPolicyTargetSummary[];

  /**
   * @schema OrganizationsListTargetsForPolicyResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema OrganizationsMoveAccountRequest
 */
export interface OrganizationsMoveAccountRequest {
  /**
   * @schema OrganizationsMoveAccountRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema OrganizationsMoveAccountRequest#SourceParentId
   */
  readonly sourceParentId: string;

  /**
   * @schema OrganizationsMoveAccountRequest#DestinationParentId
   */
  readonly destinationParentId: string;

}

/**
 * @schema OrganizationsRegisterDelegatedAdministratorRequest
 */
export interface OrganizationsRegisterDelegatedAdministratorRequest {
  /**
   * @schema OrganizationsRegisterDelegatedAdministratorRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema OrganizationsRegisterDelegatedAdministratorRequest#ServicePrincipal
   */
  readonly servicePrincipal: string;

}

/**
 * @schema OrganizationsRemoveAccountFromOrganizationRequest
 */
export interface OrganizationsRemoveAccountFromOrganizationRequest {
  /**
   * @schema OrganizationsRemoveAccountFromOrganizationRequest#AccountId
   */
  readonly accountId: string;

}

/**
 * @schema OrganizationsTagResourceRequest
 */
export interface OrganizationsTagResourceRequest {
  /**
   * @schema OrganizationsTagResourceRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema OrganizationsTagResourceRequest#Tags
   */
  readonly tags: OrganizationsTag[];

}

/**
 * @schema OrganizationsUntagResourceRequest
 */
export interface OrganizationsUntagResourceRequest {
  /**
   * @schema OrganizationsUntagResourceRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema OrganizationsUntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema OrganizationsUpdateOrganizationalUnitRequest
 */
export interface OrganizationsUpdateOrganizationalUnitRequest {
  /**
   * @schema OrganizationsUpdateOrganizationalUnitRequest#OrganizationalUnitId
   */
  readonly organizationalUnitId: string;

  /**
   * @schema OrganizationsUpdateOrganizationalUnitRequest#Name
   */
  readonly name?: string;

}

/**
 * @schema OrganizationsUpdateOrganizationalUnitResponse
 */
export interface OrganizationsUpdateOrganizationalUnitResponse {
  /**
   * @schema OrganizationsUpdateOrganizationalUnitResponse#OrganizationalUnit
   */
  readonly organizationalUnit?: OrganizationsOrganizationalUnit;

}

/**
 * @schema OrganizationsUpdatePolicyRequest
 */
export interface OrganizationsUpdatePolicyRequest {
  /**
   * @schema OrganizationsUpdatePolicyRequest#PolicyId
   */
  readonly policyId: string;

  /**
   * @schema OrganizationsUpdatePolicyRequest#Name
   */
  readonly name?: string;

  /**
   * @schema OrganizationsUpdatePolicyRequest#Description
   */
  readonly description?: string;

  /**
   * @schema OrganizationsUpdatePolicyRequest#Content
   */
  readonly content?: string;

}

/**
 * @schema OrganizationsUpdatePolicyResponse
 */
export interface OrganizationsUpdatePolicyResponse {
  /**
   * @schema OrganizationsUpdatePolicyResponse#Policy
   */
  readonly policy?: OrganizationsPolicy;

}

/**
 * @schema OrganizationsHandshake
 */
export interface OrganizationsHandshake {
  /**
   * @schema OrganizationsHandshake#Id
   */
  readonly id?: string;

  /**
   * @schema OrganizationsHandshake#Arn
   */
  readonly arn?: string;

  /**
   * @schema OrganizationsHandshake#Parties
   */
  readonly parties?: OrganizationsHandshakeParty[];

  /**
   * @schema OrganizationsHandshake#State
   */
  readonly state?: string;

  /**
   * @schema OrganizationsHandshake#RequestedTimestamp
   */
  readonly requestedTimestamp?: string;

  /**
   * @schema OrganizationsHandshake#ExpirationTimestamp
   */
  readonly expirationTimestamp?: string;

  /**
   * @schema OrganizationsHandshake#Action
   */
  readonly action?: string;

  /**
   * @schema OrganizationsHandshake#Resources
   */
  readonly resources?: OrganizationsHandshakeResource[];

}

/**
 * @schema OrganizationsTag
 */
export interface OrganizationsTag {
  /**
   * @schema OrganizationsTag#Key
   */
  readonly key: string;

  /**
   * @schema OrganizationsTag#Value
   */
  readonly value: string;

}

/**
 * @schema OrganizationsCreateAccountStatus
 */
export interface OrganizationsCreateAccountStatus {
  /**
   * @schema OrganizationsCreateAccountStatus#Id
   */
  readonly id?: string;

  /**
   * @schema OrganizationsCreateAccountStatus#AccountName
   */
  readonly accountName?: string;

  /**
   * @schema OrganizationsCreateAccountStatus#State
   */
  readonly state?: string;

  /**
   * @schema OrganizationsCreateAccountStatus#RequestedTimestamp
   */
  readonly requestedTimestamp?: string;

  /**
   * @schema OrganizationsCreateAccountStatus#CompletedTimestamp
   */
  readonly completedTimestamp?: string;

  /**
   * @schema OrganizationsCreateAccountStatus#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema OrganizationsCreateAccountStatus#GovCloudAccountId
   */
  readonly govCloudAccountId?: string;

  /**
   * @schema OrganizationsCreateAccountStatus#FailureReason
   */
  readonly failureReason?: string;

}

/**
 * @schema OrganizationsOrganization
 */
export interface OrganizationsOrganization {
  /**
   * @schema OrganizationsOrganization#Id
   */
  readonly id?: string;

  /**
   * @schema OrganizationsOrganization#Arn
   */
  readonly arn?: string;

  /**
   * @schema OrganizationsOrganization#FeatureSet
   */
  readonly featureSet?: string;

  /**
   * @schema OrganizationsOrganization#MasterAccountArn
   */
  readonly masterAccountArn?: string;

  /**
   * @schema OrganizationsOrganization#MasterAccountId
   */
  readonly masterAccountId?: string;

  /**
   * @schema OrganizationsOrganization#MasterAccountEmail
   */
  readonly masterAccountEmail?: string;

  /**
   * @schema OrganizationsOrganization#AvailablePolicyTypes
   */
  readonly availablePolicyTypes?: OrganizationsPolicyTypeSummary[];

}

/**
 * @schema OrganizationsOrganizationalUnit
 */
export interface OrganizationsOrganizationalUnit {
  /**
   * @schema OrganizationsOrganizationalUnit#Id
   */
  readonly id?: string;

  /**
   * @schema OrganizationsOrganizationalUnit#Arn
   */
  readonly arn?: string;

  /**
   * @schema OrganizationsOrganizationalUnit#Name
   */
  readonly name?: string;

}

/**
 * @schema OrganizationsPolicy
 */
export interface OrganizationsPolicy {
  /**
   * @schema OrganizationsPolicy#PolicySummary
   */
  readonly policySummary?: OrganizationsPolicySummary;

  /**
   * @schema OrganizationsPolicy#Content
   */
  readonly content?: string;

}

/**
 * @schema OrganizationsAccount
 */
export interface OrganizationsAccount {
  /**
   * @schema OrganizationsAccount#Id
   */
  readonly id?: string;

  /**
   * @schema OrganizationsAccount#Arn
   */
  readonly arn?: string;

  /**
   * @schema OrganizationsAccount#Email
   */
  readonly email?: string;

  /**
   * @schema OrganizationsAccount#Name
   */
  readonly name?: string;

  /**
   * @schema OrganizationsAccount#Status
   */
  readonly status?: string;

  /**
   * @schema OrganizationsAccount#JoinedMethod
   */
  readonly joinedMethod?: string;

  /**
   * @schema OrganizationsAccount#JoinedTimestamp
   */
  readonly joinedTimestamp?: string;

}

/**
 * @schema OrganizationsEffectivePolicy
 */
export interface OrganizationsEffectivePolicy {
  /**
   * @schema OrganizationsEffectivePolicy#PolicyContent
   */
  readonly policyContent?: string;

  /**
   * @schema OrganizationsEffectivePolicy#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema OrganizationsEffectivePolicy#TargetId
   */
  readonly targetId?: string;

  /**
   * @schema OrganizationsEffectivePolicy#PolicyType
   */
  readonly policyType?: string;

}

/**
 * @schema OrganizationsRoot
 */
export interface OrganizationsRoot {
  /**
   * @schema OrganizationsRoot#Id
   */
  readonly id?: string;

  /**
   * @schema OrganizationsRoot#Arn
   */
  readonly arn?: string;

  /**
   * @schema OrganizationsRoot#Name
   */
  readonly name?: string;

  /**
   * @schema OrganizationsRoot#PolicyTypes
   */
  readonly policyTypes?: OrganizationsPolicyTypeSummary[];

}

/**
 * @schema OrganizationsHandshakeParty
 */
export interface OrganizationsHandshakeParty {
  /**
   * @schema OrganizationsHandshakeParty#Id
   */
  readonly id: string;

  /**
   * @schema OrganizationsHandshakeParty#Type
   */
  readonly type: string;

}

/**
 * @schema OrganizationsEnabledServicePrincipal
 */
export interface OrganizationsEnabledServicePrincipal {
  /**
   * @schema OrganizationsEnabledServicePrincipal#ServicePrincipal
   */
  readonly servicePrincipal?: string;

  /**
   * @schema OrganizationsEnabledServicePrincipal#DateEnabled
   */
  readonly dateEnabled?: string;

}

/**
 * @schema OrganizationsChild
 */
export interface OrganizationsChild {
  /**
   * @schema OrganizationsChild#Id
   */
  readonly id?: string;

  /**
   * @schema OrganizationsChild#Type
   */
  readonly type?: string;

}

/**
 * @schema OrganizationsDelegatedAdministrator
 */
export interface OrganizationsDelegatedAdministrator {
  /**
   * @schema OrganizationsDelegatedAdministrator#Id
   */
  readonly id?: string;

  /**
   * @schema OrganizationsDelegatedAdministrator#Arn
   */
  readonly arn?: string;

  /**
   * @schema OrganizationsDelegatedAdministrator#Email
   */
  readonly email?: string;

  /**
   * @schema OrganizationsDelegatedAdministrator#Name
   */
  readonly name?: string;

  /**
   * @schema OrganizationsDelegatedAdministrator#Status
   */
  readonly status?: string;

  /**
   * @schema OrganizationsDelegatedAdministrator#JoinedMethod
   */
  readonly joinedMethod?: string;

  /**
   * @schema OrganizationsDelegatedAdministrator#JoinedTimestamp
   */
  readonly joinedTimestamp?: string;

  /**
   * @schema OrganizationsDelegatedAdministrator#DelegationEnabledDate
   */
  readonly delegationEnabledDate?: string;

}

/**
 * @schema OrganizationsDelegatedService
 */
export interface OrganizationsDelegatedService {
  /**
   * @schema OrganizationsDelegatedService#ServicePrincipal
   */
  readonly servicePrincipal?: string;

  /**
   * @schema OrganizationsDelegatedService#DelegationEnabledDate
   */
  readonly delegationEnabledDate?: string;

}

/**
 * @schema OrganizationsHandshakeFilter
 */
export interface OrganizationsHandshakeFilter {
  /**
   * @schema OrganizationsHandshakeFilter#ActionType
   */
  readonly actionType?: string;

  /**
   * @schema OrganizationsHandshakeFilter#ParentHandshakeId
   */
  readonly parentHandshakeId?: string;

}

/**
 * @schema OrganizationsParent
 */
export interface OrganizationsParent {
  /**
   * @schema OrganizationsParent#Id
   */
  readonly id?: string;

  /**
   * @schema OrganizationsParent#Type
   */
  readonly type?: string;

}

/**
 * @schema OrganizationsPolicySummary
 */
export interface OrganizationsPolicySummary {
  /**
   * @schema OrganizationsPolicySummary#Id
   */
  readonly id?: string;

  /**
   * @schema OrganizationsPolicySummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema OrganizationsPolicySummary#Name
   */
  readonly name?: string;

  /**
   * @schema OrganizationsPolicySummary#Description
   */
  readonly description?: string;

  /**
   * @schema OrganizationsPolicySummary#Type
   */
  readonly type?: string;

  /**
   * @schema OrganizationsPolicySummary#AwsManaged
   */
  readonly awsManaged?: boolean;

}

/**
 * @schema OrganizationsPolicyTargetSummary
 */
export interface OrganizationsPolicyTargetSummary {
  /**
   * @schema OrganizationsPolicyTargetSummary#TargetId
   */
  readonly targetId?: string;

  /**
   * @schema OrganizationsPolicyTargetSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema OrganizationsPolicyTargetSummary#Name
   */
  readonly name?: string;

  /**
   * @schema OrganizationsPolicyTargetSummary#Type
   */
  readonly type?: string;

}

/**
 * @schema OrganizationsHandshakeResource
 */
export interface OrganizationsHandshakeResource {
  /**
   * @schema OrganizationsHandshakeResource#Value
   */
  readonly value?: string;

  /**
   * @schema OrganizationsHandshakeResource#Type
   */
  readonly type?: string;

  /**
   * @schema OrganizationsHandshakeResource#Resources
   */
  readonly resources?: OrganizationsHandshakeResource[];

}

/**
 * @schema OrganizationsPolicyTypeSummary
 */
export interface OrganizationsPolicyTypeSummary {
  /**
   * @schema OrganizationsPolicyTypeSummary#Type
   */
  readonly type?: string;

  /**
   * @schema OrganizationsPolicyTypeSummary#Status
   */
  readonly status?: string;

}
