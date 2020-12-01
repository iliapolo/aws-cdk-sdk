/**
 * @schema AcceptInvitationRequest
 */
export interface AcceptInvitationRequest {
  /**
   * @schema AcceptInvitationRequest#GraphArn
   */
  readonly graphArn: string;

}

/**
 * @schema CreateGraphResponse
 */
export interface CreateGraphResponse {
  /**
   * @schema CreateGraphResponse#GraphArn
   */
  readonly graphArn?: string;

}

/**
 * @schema CreateMembersRequest
 */
export interface CreateMembersRequest {
  /**
   * @schema CreateMembersRequest#GraphArn
   */
  readonly graphArn: string;

  /**
   * @schema CreateMembersRequest#Message
   */
  readonly message?: string;

  /**
   * @schema CreateMembersRequest#Accounts
   */
  readonly accounts: Account[];

}

/**
 * @schema CreateMembersResponse
 */
export interface CreateMembersResponse {
  /**
   * @schema CreateMembersResponse#Members
   */
  readonly members?: MemberDetail[];

  /**
   * @schema CreateMembersResponse#UnprocessedAccounts
   */
  readonly unprocessedAccounts?: UnprocessedAccount[];

}

/**
 * @schema DeleteGraphRequest
 */
export interface DeleteGraphRequest {
  /**
   * @schema DeleteGraphRequest#GraphArn
   */
  readonly graphArn: string;

}

/**
 * @schema DeleteMembersRequest
 */
export interface DeleteMembersRequest {
  /**
   * @schema DeleteMembersRequest#GraphArn
   */
  readonly graphArn: string;

  /**
   * @schema DeleteMembersRequest#AccountIds
   */
  readonly accountIds: string[];

}

/**
 * @schema DeleteMembersResponse
 */
export interface DeleteMembersResponse {
  /**
   * @schema DeleteMembersResponse#AccountIds
   */
  readonly accountIds?: string[];

  /**
   * @schema DeleteMembersResponse#UnprocessedAccounts
   */
  readonly unprocessedAccounts?: UnprocessedAccount[];

}

/**
 * @schema DisassociateMembershipRequest
 */
export interface DisassociateMembershipRequest {
  /**
   * @schema DisassociateMembershipRequest#GraphArn
   */
  readonly graphArn: string;

}

/**
 * @schema GetMembersRequest
 */
export interface GetMembersRequest {
  /**
   * @schema GetMembersRequest#GraphArn
   */
  readonly graphArn: string;

  /**
   * @schema GetMembersRequest#AccountIds
   */
  readonly accountIds: string[];

}

/**
 * @schema GetMembersResponse
 */
export interface GetMembersResponse {
  /**
   * @schema GetMembersResponse#MemberDetails
   */
  readonly memberDetails?: MemberDetail[];

  /**
   * @schema GetMembersResponse#UnprocessedAccounts
   */
  readonly unprocessedAccounts?: UnprocessedAccount[];

}

/**
 * @schema ListGraphsRequest
 */
export interface ListGraphsRequest {
  /**
   * @schema ListGraphsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListGraphsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListGraphsResponse
 */
export interface ListGraphsResponse {
  /**
   * @schema ListGraphsResponse#GraphList
   */
  readonly graphList?: Graph[];

  /**
   * @schema ListGraphsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListInvitationsRequest
 */
export interface ListInvitationsRequest {
  /**
   * @schema ListInvitationsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListInvitationsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListInvitationsResponse
 */
export interface ListInvitationsResponse {
  /**
   * @schema ListInvitationsResponse#Invitations
   */
  readonly invitations?: MemberDetail[];

  /**
   * @schema ListInvitationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListMembersRequest
 */
export interface ListMembersRequest {
  /**
   * @schema ListMembersRequest#GraphArn
   */
  readonly graphArn: string;

  /**
   * @schema ListMembersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListMembersRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListMembersResponse
 */
export interface ListMembersResponse {
  /**
   * @schema ListMembersResponse#MemberDetails
   */
  readonly memberDetails?: MemberDetail[];

  /**
   * @schema ListMembersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema RejectInvitationRequest
 */
export interface RejectInvitationRequest {
  /**
   * @schema RejectInvitationRequest#GraphArn
   */
  readonly graphArn: string;

}

/**
 * @schema StartMonitoringMemberRequest
 */
export interface StartMonitoringMemberRequest {
  /**
   * @schema StartMonitoringMemberRequest#GraphArn
   */
  readonly graphArn: string;

  /**
   * @schema StartMonitoringMemberRequest#AccountId
   */
  readonly accountId: string;

}

/**
 * @schema Account
 */
export interface Account {
  /**
   * @schema Account#AccountId
   */
  readonly accountId: string;

  /**
   * @schema Account#EmailAddress
   */
  readonly emailAddress: string;

}

/**
 * @schema MemberDetail
 */
export interface MemberDetail {
  /**
   * @schema MemberDetail#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema MemberDetail#EmailAddress
   */
  readonly emailAddress?: string;

  /**
   * @schema MemberDetail#GraphArn
   */
  readonly graphArn?: string;

  /**
   * @schema MemberDetail#MasterId
   */
  readonly masterId?: string;

  /**
   * @schema MemberDetail#Status
   */
  readonly status?: string;

  /**
   * @schema MemberDetail#DisabledReason
   */
  readonly disabledReason?: string;

  /**
   * @schema MemberDetail#InvitedTime
   */
  readonly invitedTime?: string;

  /**
   * @schema MemberDetail#UpdatedTime
   */
  readonly updatedTime?: string;

  /**
   * @schema MemberDetail#PercentOfGraphUtilization
   */
  readonly percentOfGraphUtilization?: number;

  /**
   * @schema MemberDetail#PercentOfGraphUtilizationUpdatedTime
   */
  readonly percentOfGraphUtilizationUpdatedTime?: string;

}

/**
 * @schema UnprocessedAccount
 */
export interface UnprocessedAccount {
  /**
   * @schema UnprocessedAccount#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema UnprocessedAccount#Reason
   */
  readonly reason?: string;

}

/**
 * @schema Graph
 */
export interface Graph {
  /**
   * @schema Graph#Arn
   */
  readonly arn?: string;

  /**
   * @schema Graph#CreatedTime
   */
  readonly createdTime?: string;

}
