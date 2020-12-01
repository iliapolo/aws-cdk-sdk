/**
 * @schema AcceptHandshakeRequest
 */
export interface AcceptHandshakeRequest {
  /**
   * @schema AcceptHandshakeRequest#HandshakeId
   */
  readonly handshakeId: string;

}

/**
 * @schema AcceptHandshakeResponse
 */
export interface AcceptHandshakeResponse {
  /**
   * @schema AcceptHandshakeResponse#Handshake
   */
  readonly handshake?: Handshake;

}

/**
 * @schema AttachPolicyRequest
 */
export interface AttachPolicyRequest {
  /**
   * @schema AttachPolicyRequest#PolicyId
   */
  readonly policyId: string;

  /**
   * @schema AttachPolicyRequest#TargetId
   */
  readonly targetId: string;

}

/**
 * @schema CancelHandshakeRequest
 */
export interface CancelHandshakeRequest {
  /**
   * @schema CancelHandshakeRequest#HandshakeId
   */
  readonly handshakeId: string;

}

/**
 * @schema CancelHandshakeResponse
 */
export interface CancelHandshakeResponse {
  /**
   * @schema CancelHandshakeResponse#Handshake
   */
  readonly handshake?: Handshake;

}

/**
 * @schema CreateAccountRequest
 */
export interface CreateAccountRequest {
  /**
   * @schema CreateAccountRequest#Email
   */
  readonly email: string;

  /**
   * @schema CreateAccountRequest#AccountName
   */
  readonly accountName: string;

  /**
   * @schema CreateAccountRequest#RoleName
   */
  readonly roleName?: string;

  /**
   * @schema CreateAccountRequest#IamUserAccessToBilling
   */
  readonly iamUserAccessToBilling?: string;

  /**
   * @schema CreateAccountRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateAccountResponse
 */
export interface CreateAccountResponse {
  /**
   * @schema CreateAccountResponse#CreateAccountStatus
   */
  readonly createAccountStatus?: CreateAccountStatus;

}

/**
 * @schema CreateGovCloudAccountRequest
 */
export interface CreateGovCloudAccountRequest {
  /**
   * @schema CreateGovCloudAccountRequest#Email
   */
  readonly email: string;

  /**
   * @schema CreateGovCloudAccountRequest#AccountName
   */
  readonly accountName: string;

  /**
   * @schema CreateGovCloudAccountRequest#RoleName
   */
  readonly roleName?: string;

  /**
   * @schema CreateGovCloudAccountRequest#IamUserAccessToBilling
   */
  readonly iamUserAccessToBilling?: string;

  /**
   * @schema CreateGovCloudAccountRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateGovCloudAccountResponse
 */
export interface CreateGovCloudAccountResponse {
  /**
   * @schema CreateGovCloudAccountResponse#CreateAccountStatus
   */
  readonly createAccountStatus?: CreateAccountStatus;

}

/**
 * @schema CreateOrganizationRequest
 */
export interface CreateOrganizationRequest {
  /**
   * @schema CreateOrganizationRequest#FeatureSet
   */
  readonly featureSet?: string;

}

/**
 * @schema CreateOrganizationResponse
 */
export interface CreateOrganizationResponse {
  /**
   * @schema CreateOrganizationResponse#Organization
   */
  readonly organization?: Organization;

}

/**
 * @schema CreateOrganizationalUnitRequest
 */
export interface CreateOrganizationalUnitRequest {
  /**
   * @schema CreateOrganizationalUnitRequest#ParentId
   */
  readonly parentId: string;

  /**
   * @schema CreateOrganizationalUnitRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateOrganizationalUnitRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateOrganizationalUnitResponse
 */
export interface CreateOrganizationalUnitResponse {
  /**
   * @schema CreateOrganizationalUnitResponse#OrganizationalUnit
   */
  readonly organizationalUnit?: OrganizationalUnit;

}

/**
 * @schema CreatePolicyRequest
 */
export interface CreatePolicyRequest {
  /**
   * @schema CreatePolicyRequest#Content
   */
  readonly content: string;

  /**
   * @schema CreatePolicyRequest#Description
   */
  readonly description: string;

  /**
   * @schema CreatePolicyRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreatePolicyRequest#Type
   */
  readonly type: string;

  /**
   * @schema CreatePolicyRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreatePolicyResponse
 */
export interface CreatePolicyResponse {
  /**
   * @schema CreatePolicyResponse#Policy
   */
  readonly policy?: Policy;

}

/**
 * @schema DeclineHandshakeRequest
 */
export interface DeclineHandshakeRequest {
  /**
   * @schema DeclineHandshakeRequest#HandshakeId
   */
  readonly handshakeId: string;

}

/**
 * @schema DeclineHandshakeResponse
 */
export interface DeclineHandshakeResponse {
  /**
   * @schema DeclineHandshakeResponse#Handshake
   */
  readonly handshake?: Handshake;

}

/**
 * @schema DeleteOrganizationalUnitRequest
 */
export interface DeleteOrganizationalUnitRequest {
  /**
   * @schema DeleteOrganizationalUnitRequest#OrganizationalUnitId
   */
  readonly organizationalUnitId: string;

}

/**
 * @schema DeletePolicyRequest
 */
export interface DeletePolicyRequest {
  /**
   * @schema DeletePolicyRequest#PolicyId
   */
  readonly policyId: string;

}

/**
 * @schema DeregisterDelegatedAdministratorRequest
 */
export interface DeregisterDelegatedAdministratorRequest {
  /**
   * @schema DeregisterDelegatedAdministratorRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema DeregisterDelegatedAdministratorRequest#ServicePrincipal
   */
  readonly servicePrincipal: string;

}

/**
 * @schema DescribeAccountRequest
 */
export interface DescribeAccountRequest {
  /**
   * @schema DescribeAccountRequest#AccountId
   */
  readonly accountId: string;

}

/**
 * @schema DescribeAccountResponse
 */
export interface DescribeAccountResponse {
  /**
   * @schema DescribeAccountResponse#Account
   */
  readonly account?: Account;

}

/**
 * @schema DescribeCreateAccountStatusRequest
 */
export interface DescribeCreateAccountStatusRequest {
  /**
   * @schema DescribeCreateAccountStatusRequest#CreateAccountRequestId
   */
  readonly createAccountRequestId: string;

}

/**
 * @schema DescribeCreateAccountStatusResponse
 */
export interface DescribeCreateAccountStatusResponse {
  /**
   * @schema DescribeCreateAccountStatusResponse#CreateAccountStatus
   */
  readonly createAccountStatus?: CreateAccountStatus;

}

/**
 * @schema DescribeEffectivePolicyRequest
 */
export interface DescribeEffectivePolicyRequest {
  /**
   * @schema DescribeEffectivePolicyRequest#PolicyType
   */
  readonly policyType: string;

  /**
   * @schema DescribeEffectivePolicyRequest#TargetId
   */
  readonly targetId?: string;

}

/**
 * @schema DescribeEffectivePolicyResponse
 */
export interface DescribeEffectivePolicyResponse {
  /**
   * @schema DescribeEffectivePolicyResponse#EffectivePolicy
   */
  readonly effectivePolicy?: EffectivePolicy;

}

/**
 * @schema DescribeHandshakeRequest
 */
export interface DescribeHandshakeRequest {
  /**
   * @schema DescribeHandshakeRequest#HandshakeId
   */
  readonly handshakeId: string;

}

/**
 * @schema DescribeHandshakeResponse
 */
export interface DescribeHandshakeResponse {
  /**
   * @schema DescribeHandshakeResponse#Handshake
   */
  readonly handshake?: Handshake;

}

/**
 * @schema DescribeOrganizationResponse
 */
export interface DescribeOrganizationResponse {
  /**
   * @schema DescribeOrganizationResponse#Organization
   */
  readonly organization?: Organization;

}

/**
 * @schema DescribeOrganizationalUnitRequest
 */
export interface DescribeOrganizationalUnitRequest {
  /**
   * @schema DescribeOrganizationalUnitRequest#OrganizationalUnitId
   */
  readonly organizationalUnitId: string;

}

/**
 * @schema DescribeOrganizationalUnitResponse
 */
export interface DescribeOrganizationalUnitResponse {
  /**
   * @schema DescribeOrganizationalUnitResponse#OrganizationalUnit
   */
  readonly organizationalUnit?: OrganizationalUnit;

}

/**
 * @schema DescribePolicyRequest
 */
export interface DescribePolicyRequest {
  /**
   * @schema DescribePolicyRequest#PolicyId
   */
  readonly policyId: string;

}

/**
 * @schema DescribePolicyResponse
 */
export interface DescribePolicyResponse {
  /**
   * @schema DescribePolicyResponse#Policy
   */
  readonly policy?: Policy;

}

/**
 * @schema DetachPolicyRequest
 */
export interface DetachPolicyRequest {
  /**
   * @schema DetachPolicyRequest#PolicyId
   */
  readonly policyId: string;

  /**
   * @schema DetachPolicyRequest#TargetId
   */
  readonly targetId: string;

}

/**
 * @schema DisableAwsServiceAccessRequest
 */
export interface DisableAwsServiceAccessRequest {
  /**
   * @schema DisableAwsServiceAccessRequest#ServicePrincipal
   */
  readonly servicePrincipal: string;

}

/**
 * @schema DisablePolicyTypeRequest
 */
export interface DisablePolicyTypeRequest {
  /**
   * @schema DisablePolicyTypeRequest#RootId
   */
  readonly rootId: string;

  /**
   * @schema DisablePolicyTypeRequest#PolicyType
   */
  readonly policyType: string;

}

/**
 * @schema DisablePolicyTypeResponse
 */
export interface DisablePolicyTypeResponse {
  /**
   * @schema DisablePolicyTypeResponse#Root
   */
  readonly root?: Root;

}

/**
 * @schema EnableAwsServiceAccessRequest
 */
export interface EnableAwsServiceAccessRequest {
  /**
   * @schema EnableAwsServiceAccessRequest#ServicePrincipal
   */
  readonly servicePrincipal: string;

}

/**
 * @schema EnableAllFeaturesRequest
 */
export interface EnableAllFeaturesRequest {
}

/**
 * @schema EnableAllFeaturesResponse
 */
export interface EnableAllFeaturesResponse {
  /**
   * @schema EnableAllFeaturesResponse#Handshake
   */
  readonly handshake?: Handshake;

}

/**
 * @schema EnablePolicyTypeRequest
 */
export interface EnablePolicyTypeRequest {
  /**
   * @schema EnablePolicyTypeRequest#RootId
   */
  readonly rootId: string;

  /**
   * @schema EnablePolicyTypeRequest#PolicyType
   */
  readonly policyType: string;

}

/**
 * @schema EnablePolicyTypeResponse
 */
export interface EnablePolicyTypeResponse {
  /**
   * @schema EnablePolicyTypeResponse#Root
   */
  readonly root?: Root;

}

/**
 * @schema InviteAccountToOrganizationRequest
 */
export interface InviteAccountToOrganizationRequest {
  /**
   * @schema InviteAccountToOrganizationRequest#Target
   */
  readonly target: HandshakeParty;

  /**
   * @schema InviteAccountToOrganizationRequest#Notes
   */
  readonly notes?: string;

  /**
   * @schema InviteAccountToOrganizationRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema InviteAccountToOrganizationResponse
 */
export interface InviteAccountToOrganizationResponse {
  /**
   * @schema InviteAccountToOrganizationResponse#Handshake
   */
  readonly handshake?: Handshake;

}

/**
 * @schema ListAwsServiceAccessForOrganizationRequest
 */
export interface ListAwsServiceAccessForOrganizationRequest {
  /**
   * @schema ListAwsServiceAccessForOrganizationRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListAwsServiceAccessForOrganizationRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListAwsServiceAccessForOrganizationResponse
 */
export interface ListAwsServiceAccessForOrganizationResponse {
  /**
   * @schema ListAwsServiceAccessForOrganizationResponse#EnabledServicePrincipals
   */
  readonly enabledServicePrincipals?: EnabledServicePrincipal[];

  /**
   * @schema ListAwsServiceAccessForOrganizationResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListAccountsRequest
 */
export interface ListAccountsRequest {
  /**
   * @schema ListAccountsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListAccountsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListAccountsResponse
 */
export interface ListAccountsResponse {
  /**
   * @schema ListAccountsResponse#Accounts
   */
  readonly accounts?: Account[];

  /**
   * @schema ListAccountsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListAccountsForParentRequest
 */
export interface ListAccountsForParentRequest {
  /**
   * @schema ListAccountsForParentRequest#ParentId
   */
  readonly parentId: string;

  /**
   * @schema ListAccountsForParentRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListAccountsForParentRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListAccountsForParentResponse
 */
export interface ListAccountsForParentResponse {
  /**
   * @schema ListAccountsForParentResponse#Accounts
   */
  readonly accounts?: Account[];

  /**
   * @schema ListAccountsForParentResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListChildrenRequest
 */
export interface ListChildrenRequest {
  /**
   * @schema ListChildrenRequest#ParentId
   */
  readonly parentId: string;

  /**
   * @schema ListChildrenRequest#ChildType
   */
  readonly childType: string;

  /**
   * @schema ListChildrenRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListChildrenRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListChildrenResponse
 */
export interface ListChildrenResponse {
  /**
   * @schema ListChildrenResponse#Children
   */
  readonly children?: Child[];

  /**
   * @schema ListChildrenResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListCreateAccountStatusRequest
 */
export interface ListCreateAccountStatusRequest {
  /**
   * @schema ListCreateAccountStatusRequest#States
   */
  readonly states?: string[];

  /**
   * @schema ListCreateAccountStatusRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListCreateAccountStatusRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListCreateAccountStatusResponse
 */
export interface ListCreateAccountStatusResponse {
  /**
   * @schema ListCreateAccountStatusResponse#CreateAccountStatuses
   */
  readonly createAccountStatuses?: CreateAccountStatus[];

  /**
   * @schema ListCreateAccountStatusResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListDelegatedAdministratorsRequest
 */
export interface ListDelegatedAdministratorsRequest {
  /**
   * @schema ListDelegatedAdministratorsRequest#ServicePrincipal
   */
  readonly servicePrincipal?: string;

  /**
   * @schema ListDelegatedAdministratorsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListDelegatedAdministratorsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListDelegatedAdministratorsResponse
 */
export interface ListDelegatedAdministratorsResponse {
  /**
   * @schema ListDelegatedAdministratorsResponse#DelegatedAdministrators
   */
  readonly delegatedAdministrators?: DelegatedAdministrator[];

  /**
   * @schema ListDelegatedAdministratorsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListDelegatedServicesForAccountRequest
 */
export interface ListDelegatedServicesForAccountRequest {
  /**
   * @schema ListDelegatedServicesForAccountRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema ListDelegatedServicesForAccountRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListDelegatedServicesForAccountRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListDelegatedServicesForAccountResponse
 */
export interface ListDelegatedServicesForAccountResponse {
  /**
   * @schema ListDelegatedServicesForAccountResponse#DelegatedServices
   */
  readonly delegatedServices?: DelegatedService[];

  /**
   * @schema ListDelegatedServicesForAccountResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListHandshakesForAccountRequest
 */
export interface ListHandshakesForAccountRequest {
  /**
   * @schema ListHandshakesForAccountRequest#Filter
   */
  readonly filter?: HandshakeFilter;

  /**
   * @schema ListHandshakesForAccountRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListHandshakesForAccountRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListHandshakesForAccountResponse
 */
export interface ListHandshakesForAccountResponse {
  /**
   * @schema ListHandshakesForAccountResponse#Handshakes
   */
  readonly handshakes?: Handshake[];

  /**
   * @schema ListHandshakesForAccountResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListHandshakesForOrganizationRequest
 */
export interface ListHandshakesForOrganizationRequest {
  /**
   * @schema ListHandshakesForOrganizationRequest#Filter
   */
  readonly filter?: HandshakeFilter;

  /**
   * @schema ListHandshakesForOrganizationRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListHandshakesForOrganizationRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListHandshakesForOrganizationResponse
 */
export interface ListHandshakesForOrganizationResponse {
  /**
   * @schema ListHandshakesForOrganizationResponse#Handshakes
   */
  readonly handshakes?: Handshake[];

  /**
   * @schema ListHandshakesForOrganizationResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListOrganizationalUnitsForParentRequest
 */
export interface ListOrganizationalUnitsForParentRequest {
  /**
   * @schema ListOrganizationalUnitsForParentRequest#ParentId
   */
  readonly parentId: string;

  /**
   * @schema ListOrganizationalUnitsForParentRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListOrganizationalUnitsForParentRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListOrganizationalUnitsForParentResponse
 */
export interface ListOrganizationalUnitsForParentResponse {
  /**
   * @schema ListOrganizationalUnitsForParentResponse#OrganizationalUnits
   */
  readonly organizationalUnits?: OrganizationalUnit[];

  /**
   * @schema ListOrganizationalUnitsForParentResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListParentsRequest
 */
export interface ListParentsRequest {
  /**
   * @schema ListParentsRequest#ChildId
   */
  readonly childId: string;

  /**
   * @schema ListParentsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListParentsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListParentsResponse
 */
export interface ListParentsResponse {
  /**
   * @schema ListParentsResponse#Parents
   */
  readonly parents?: Parent[];

  /**
   * @schema ListParentsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListPoliciesRequest
 */
export interface ListPoliciesRequest {
  /**
   * @schema ListPoliciesRequest#Filter
   */
  readonly filter: string;

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
   * @schema ListPoliciesResponse#Policies
   */
  readonly policies?: PolicySummary[];

  /**
   * @schema ListPoliciesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListPoliciesForTargetRequest
 */
export interface ListPoliciesForTargetRequest {
  /**
   * @schema ListPoliciesForTargetRequest#TargetId
   */
  readonly targetId: string;

  /**
   * @schema ListPoliciesForTargetRequest#Filter
   */
  readonly filter: string;

  /**
   * @schema ListPoliciesForTargetRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListPoliciesForTargetRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListPoliciesForTargetResponse
 */
export interface ListPoliciesForTargetResponse {
  /**
   * @schema ListPoliciesForTargetResponse#Policies
   */
  readonly policies?: PolicySummary[];

  /**
   * @schema ListPoliciesForTargetResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListRootsRequest
 */
export interface ListRootsRequest {
  /**
   * @schema ListRootsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListRootsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListRootsResponse
 */
export interface ListRootsResponse {
  /**
   * @schema ListRootsResponse#Roots
   */
  readonly roots?: Root[];

  /**
   * @schema ListRootsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * @schema ListTagsForResourceRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema ListTagsForResourceRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsForResourceResponse
 */
export interface ListTagsForResourceResponse {
  /**
   * @schema ListTagsForResourceResponse#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema ListTagsForResourceResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTargetsForPolicyRequest
 */
export interface ListTargetsForPolicyRequest {
  /**
   * @schema ListTargetsForPolicyRequest#PolicyId
   */
  readonly policyId: string;

  /**
   * @schema ListTargetsForPolicyRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListTargetsForPolicyRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListTargetsForPolicyResponse
 */
export interface ListTargetsForPolicyResponse {
  /**
   * @schema ListTargetsForPolicyResponse#Targets
   */
  readonly targets?: PolicyTargetSummary[];

  /**
   * @schema ListTargetsForPolicyResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MoveAccountRequest
 */
export interface MoveAccountRequest {
  /**
   * @schema MoveAccountRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema MoveAccountRequest#SourceParentId
   */
  readonly sourceParentId: string;

  /**
   * @schema MoveAccountRequest#DestinationParentId
   */
  readonly destinationParentId: string;

}

/**
 * @schema RegisterDelegatedAdministratorRequest
 */
export interface RegisterDelegatedAdministratorRequest {
  /**
   * @schema RegisterDelegatedAdministratorRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema RegisterDelegatedAdministratorRequest#ServicePrincipal
   */
  readonly servicePrincipal: string;

}

/**
 * @schema RemoveAccountFromOrganizationRequest
 */
export interface RemoveAccountFromOrganizationRequest {
  /**
   * @schema RemoveAccountFromOrganizationRequest#AccountId
   */
  readonly accountId: string;

}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema TagResourceRequest#Tags
   */
  readonly tags: Tag[];

}

/**
 * @schema UntagResourceRequest
 */
export interface UntagResourceRequest {
  /**
   * @schema UntagResourceRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema UntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UpdateOrganizationalUnitRequest
 */
export interface UpdateOrganizationalUnitRequest {
  /**
   * @schema UpdateOrganizationalUnitRequest#OrganizationalUnitId
   */
  readonly organizationalUnitId: string;

  /**
   * @schema UpdateOrganizationalUnitRequest#Name
   */
  readonly name?: string;

}

/**
 * @schema UpdateOrganizationalUnitResponse
 */
export interface UpdateOrganizationalUnitResponse {
  /**
   * @schema UpdateOrganizationalUnitResponse#OrganizationalUnit
   */
  readonly organizationalUnit?: OrganizationalUnit;

}

/**
 * @schema UpdatePolicyRequest
 */
export interface UpdatePolicyRequest {
  /**
   * @schema UpdatePolicyRequest#PolicyId
   */
  readonly policyId: string;

  /**
   * @schema UpdatePolicyRequest#Name
   */
  readonly name?: string;

  /**
   * @schema UpdatePolicyRequest#Description
   */
  readonly description?: string;

  /**
   * @schema UpdatePolicyRequest#Content
   */
  readonly content?: string;

}

/**
 * @schema UpdatePolicyResponse
 */
export interface UpdatePolicyResponse {
  /**
   * @schema UpdatePolicyResponse#Policy
   */
  readonly policy?: Policy;

}

/**
 * @schema Handshake
 */
export interface Handshake {
  /**
   * @schema Handshake#Id
   */
  readonly id?: string;

  /**
   * @schema Handshake#Arn
   */
  readonly arn?: string;

  /**
   * @schema Handshake#Parties
   */
  readonly parties?: HandshakeParty[];

  /**
   * @schema Handshake#State
   */
  readonly state?: string;

  /**
   * @schema Handshake#RequestedTimestamp
   */
  readonly requestedTimestamp?: string;

  /**
   * @schema Handshake#ExpirationTimestamp
   */
  readonly expirationTimestamp?: string;

  /**
   * @schema Handshake#Action
   */
  readonly action?: string;

  /**
   * @schema Handshake#Resources
   */
  readonly resources?: HandshakeResource[];

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
 * @schema CreateAccountStatus
 */
export interface CreateAccountStatus {
  /**
   * @schema CreateAccountStatus#Id
   */
  readonly id?: string;

  /**
   * @schema CreateAccountStatus#AccountName
   */
  readonly accountName?: string;

  /**
   * @schema CreateAccountStatus#State
   */
  readonly state?: string;

  /**
   * @schema CreateAccountStatus#RequestedTimestamp
   */
  readonly requestedTimestamp?: string;

  /**
   * @schema CreateAccountStatus#CompletedTimestamp
   */
  readonly completedTimestamp?: string;

  /**
   * @schema CreateAccountStatus#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema CreateAccountStatus#GovCloudAccountId
   */
  readonly govCloudAccountId?: string;

  /**
   * @schema CreateAccountStatus#FailureReason
   */
  readonly failureReason?: string;

}

/**
 * @schema Organization
 */
export interface Organization {
  /**
   * @schema Organization#Id
   */
  readonly id?: string;

  /**
   * @schema Organization#Arn
   */
  readonly arn?: string;

  /**
   * @schema Organization#FeatureSet
   */
  readonly featureSet?: string;

  /**
   * @schema Organization#MasterAccountArn
   */
  readonly masterAccountArn?: string;

  /**
   * @schema Organization#MasterAccountId
   */
  readonly masterAccountId?: string;

  /**
   * @schema Organization#MasterAccountEmail
   */
  readonly masterAccountEmail?: string;

  /**
   * @schema Organization#AvailablePolicyTypes
   */
  readonly availablePolicyTypes?: PolicyTypeSummary[];

}

/**
 * @schema OrganizationalUnit
 */
export interface OrganizationalUnit {
  /**
   * @schema OrganizationalUnit#Id
   */
  readonly id?: string;

  /**
   * @schema OrganizationalUnit#Arn
   */
  readonly arn?: string;

  /**
   * @schema OrganizationalUnit#Name
   */
  readonly name?: string;

}

/**
 * @schema Policy
 */
export interface Policy {
  /**
   * @schema Policy#PolicySummary
   */
  readonly policySummary?: PolicySummary;

  /**
   * @schema Policy#Content
   */
  readonly content?: string;

}

/**
 * @schema Account
 */
export interface Account {
  /**
   * @schema Account#Id
   */
  readonly id?: string;

  /**
   * @schema Account#Arn
   */
  readonly arn?: string;

  /**
   * @schema Account#Email
   */
  readonly email?: string;

  /**
   * @schema Account#Name
   */
  readonly name?: string;

  /**
   * @schema Account#Status
   */
  readonly status?: string;

  /**
   * @schema Account#JoinedMethod
   */
  readonly joinedMethod?: string;

  /**
   * @schema Account#JoinedTimestamp
   */
  readonly joinedTimestamp?: string;

}

/**
 * @schema EffectivePolicy
 */
export interface EffectivePolicy {
  /**
   * @schema EffectivePolicy#PolicyContent
   */
  readonly policyContent?: string;

  /**
   * @schema EffectivePolicy#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema EffectivePolicy#TargetId
   */
  readonly targetId?: string;

  /**
   * @schema EffectivePolicy#PolicyType
   */
  readonly policyType?: string;

}

/**
 * @schema Root
 */
export interface Root {
  /**
   * @schema Root#Id
   */
  readonly id?: string;

  /**
   * @schema Root#Arn
   */
  readonly arn?: string;

  /**
   * @schema Root#Name
   */
  readonly name?: string;

  /**
   * @schema Root#PolicyTypes
   */
  readonly policyTypes?: PolicyTypeSummary[];

}

/**
 * @schema HandshakeParty
 */
export interface HandshakeParty {
  /**
   * @schema HandshakeParty#Id
   */
  readonly id: string;

  /**
   * @schema HandshakeParty#Type
   */
  readonly type: string;

}

/**
 * @schema EnabledServicePrincipal
 */
export interface EnabledServicePrincipal {
  /**
   * @schema EnabledServicePrincipal#ServicePrincipal
   */
  readonly servicePrincipal?: string;

  /**
   * @schema EnabledServicePrincipal#DateEnabled
   */
  readonly dateEnabled?: string;

}

/**
 * @schema Child
 */
export interface Child {
  /**
   * @schema Child#Id
   */
  readonly id?: string;

  /**
   * @schema Child#Type
   */
  readonly type?: string;

}

/**
 * @schema DelegatedAdministrator
 */
export interface DelegatedAdministrator {
  /**
   * @schema DelegatedAdministrator#Id
   */
  readonly id?: string;

  /**
   * @schema DelegatedAdministrator#Arn
   */
  readonly arn?: string;

  /**
   * @schema DelegatedAdministrator#Email
   */
  readonly email?: string;

  /**
   * @schema DelegatedAdministrator#Name
   */
  readonly name?: string;

  /**
   * @schema DelegatedAdministrator#Status
   */
  readonly status?: string;

  /**
   * @schema DelegatedAdministrator#JoinedMethod
   */
  readonly joinedMethod?: string;

  /**
   * @schema DelegatedAdministrator#JoinedTimestamp
   */
  readonly joinedTimestamp?: string;

  /**
   * @schema DelegatedAdministrator#DelegationEnabledDate
   */
  readonly delegationEnabledDate?: string;

}

/**
 * @schema DelegatedService
 */
export interface DelegatedService {
  /**
   * @schema DelegatedService#ServicePrincipal
   */
  readonly servicePrincipal?: string;

  /**
   * @schema DelegatedService#DelegationEnabledDate
   */
  readonly delegationEnabledDate?: string;

}

/**
 * @schema HandshakeFilter
 */
export interface HandshakeFilter {
  /**
   * @schema HandshakeFilter#ActionType
   */
  readonly actionType?: string;

  /**
   * @schema HandshakeFilter#ParentHandshakeId
   */
  readonly parentHandshakeId?: string;

}

/**
 * @schema Parent
 */
export interface Parent {
  /**
   * @schema Parent#Id
   */
  readonly id?: string;

  /**
   * @schema Parent#Type
   */
  readonly type?: string;

}

/**
 * @schema PolicySummary
 */
export interface PolicySummary {
  /**
   * @schema PolicySummary#Id
   */
  readonly id?: string;

  /**
   * @schema PolicySummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema PolicySummary#Name
   */
  readonly name?: string;

  /**
   * @schema PolicySummary#Description
   */
  readonly description?: string;

  /**
   * @schema PolicySummary#Type
   */
  readonly type?: string;

  /**
   * @schema PolicySummary#AwsManaged
   */
  readonly awsManaged?: boolean;

}

/**
 * @schema PolicyTargetSummary
 */
export interface PolicyTargetSummary {
  /**
   * @schema PolicyTargetSummary#TargetId
   */
  readonly targetId?: string;

  /**
   * @schema PolicyTargetSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema PolicyTargetSummary#Name
   */
  readonly name?: string;

  /**
   * @schema PolicyTargetSummary#Type
   */
  readonly type?: string;

}

/**
 * @schema HandshakeResource
 */
export interface HandshakeResource {
  /**
   * @schema HandshakeResource#Value
   */
  readonly value?: string;

  /**
   * @schema HandshakeResource#Type
   */
  readonly type?: string;

  /**
   * @schema HandshakeResource#Resources
   */
  readonly resources?: HandshakeResource[];

}

/**
 * @schema PolicyTypeSummary
 */
export interface PolicyTypeSummary {
  /**
   * @schema PolicyTypeSummary#Type
   */
  readonly type?: string;

  /**
   * @schema PolicyTypeSummary#Status
   */
  readonly status?: string;

}
