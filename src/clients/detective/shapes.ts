/**
 * @schema DetectiveAcceptInvitationRequest
 */
export interface DetectiveAcceptInvitationRequest {
  /**
   * @schema DetectiveAcceptInvitationRequest#GraphArn
   */
  readonly graphArn: string;

}

/**
 * @schema DetectiveCreateGraphResponse
 */
export interface DetectiveCreateGraphResponse {
  /**
   * @schema DetectiveCreateGraphResponse#GraphArn
   */
  readonly graphArn?: string;

}

/**
 * @schema DetectiveCreateMembersRequest
 */
export interface DetectiveCreateMembersRequest {
  /**
   * @schema DetectiveCreateMembersRequest#GraphArn
   */
  readonly graphArn: string;

  /**
   * @schema DetectiveCreateMembersRequest#Message
   */
  readonly message?: string;

  /**
   * @schema DetectiveCreateMembersRequest#Accounts
   */
  readonly accounts: DetectiveAccount[];

}

/**
 * @schema DetectiveCreateMembersResponse
 */
export interface DetectiveCreateMembersResponse {
  /**
   * @schema DetectiveCreateMembersResponse#Members
   */
  readonly members?: DetectiveMemberDetail[];

  /**
   * @schema DetectiveCreateMembersResponse#UnprocessedAccounts
   */
  readonly unprocessedAccounts?: DetectiveUnprocessedAccount[];

}

/**
 * @schema DetectiveDeleteGraphRequest
 */
export interface DetectiveDeleteGraphRequest {
  /**
   * @schema DetectiveDeleteGraphRequest#GraphArn
   */
  readonly graphArn: string;

}

/**
 * @schema DetectiveDeleteMembersRequest
 */
export interface DetectiveDeleteMembersRequest {
  /**
   * @schema DetectiveDeleteMembersRequest#GraphArn
   */
  readonly graphArn: string;

  /**
   * @schema DetectiveDeleteMembersRequest#AccountIds
   */
  readonly accountIds: string[];

}

/**
 * @schema DetectiveDeleteMembersResponse
 */
export interface DetectiveDeleteMembersResponse {
  /**
   * @schema DetectiveDeleteMembersResponse#AccountIds
   */
  readonly accountIds?: string[];

  /**
   * @schema DetectiveDeleteMembersResponse#UnprocessedAccounts
   */
  readonly unprocessedAccounts?: DetectiveUnprocessedAccount[];

}

/**
 * @schema DetectiveDisassociateMembershipRequest
 */
export interface DetectiveDisassociateMembershipRequest {
  /**
   * @schema DetectiveDisassociateMembershipRequest#GraphArn
   */
  readonly graphArn: string;

}

/**
 * @schema DetectiveGetMembersRequest
 */
export interface DetectiveGetMembersRequest {
  /**
   * @schema DetectiveGetMembersRequest#GraphArn
   */
  readonly graphArn: string;

  /**
   * @schema DetectiveGetMembersRequest#AccountIds
   */
  readonly accountIds: string[];

}

/**
 * @schema DetectiveGetMembersResponse
 */
export interface DetectiveGetMembersResponse {
  /**
   * @schema DetectiveGetMembersResponse#MemberDetails
   */
  readonly memberDetails?: DetectiveMemberDetail[];

  /**
   * @schema DetectiveGetMembersResponse#UnprocessedAccounts
   */
  readonly unprocessedAccounts?: DetectiveUnprocessedAccount[];

}

/**
 * @schema DetectiveListGraphsRequest
 */
export interface DetectiveListGraphsRequest {
  /**
   * @schema DetectiveListGraphsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DetectiveListGraphsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema DetectiveListGraphsResponse
 */
export interface DetectiveListGraphsResponse {
  /**
   * @schema DetectiveListGraphsResponse#GraphList
   */
  readonly graphList?: DetectiveGraph[];

  /**
   * @schema DetectiveListGraphsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DetectiveListInvitationsRequest
 */
export interface DetectiveListInvitationsRequest {
  /**
   * @schema DetectiveListInvitationsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DetectiveListInvitationsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema DetectiveListInvitationsResponse
 */
export interface DetectiveListInvitationsResponse {
  /**
   * @schema DetectiveListInvitationsResponse#Invitations
   */
  readonly invitations?: DetectiveMemberDetail[];

  /**
   * @schema DetectiveListInvitationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DetectiveListMembersRequest
 */
export interface DetectiveListMembersRequest {
  /**
   * @schema DetectiveListMembersRequest#GraphArn
   */
  readonly graphArn: string;

  /**
   * @schema DetectiveListMembersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DetectiveListMembersRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema DetectiveListMembersResponse
 */
export interface DetectiveListMembersResponse {
  /**
   * @schema DetectiveListMembersResponse#MemberDetails
   */
  readonly memberDetails?: DetectiveMemberDetail[];

  /**
   * @schema DetectiveListMembersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DetectiveRejectInvitationRequest
 */
export interface DetectiveRejectInvitationRequest {
  /**
   * @schema DetectiveRejectInvitationRequest#GraphArn
   */
  readonly graphArn: string;

}

/**
 * @schema DetectiveStartMonitoringMemberRequest
 */
export interface DetectiveStartMonitoringMemberRequest {
  /**
   * @schema DetectiveStartMonitoringMemberRequest#GraphArn
   */
  readonly graphArn: string;

  /**
   * @schema DetectiveStartMonitoringMemberRequest#AccountId
   */
  readonly accountId: string;

}

/**
 * @schema DetectiveAccount
 */
export interface DetectiveAccount {
  /**
   * @schema DetectiveAccount#AccountId
   */
  readonly accountId: string;

  /**
   * @schema DetectiveAccount#EmailAddress
   */
  readonly emailAddress: string;

}

/**
 * @schema DetectiveMemberDetail
 */
export interface DetectiveMemberDetail {
  /**
   * @schema DetectiveMemberDetail#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema DetectiveMemberDetail#EmailAddress
   */
  readonly emailAddress?: string;

  /**
   * @schema DetectiveMemberDetail#GraphArn
   */
  readonly graphArn?: string;

  /**
   * @schema DetectiveMemberDetail#MasterId
   */
  readonly masterId?: string;

  /**
   * @schema DetectiveMemberDetail#Status
   */
  readonly status?: string;

  /**
   * @schema DetectiveMemberDetail#DisabledReason
   */
  readonly disabledReason?: string;

  /**
   * @schema DetectiveMemberDetail#InvitedTime
   */
  readonly invitedTime?: string;

  /**
   * @schema DetectiveMemberDetail#UpdatedTime
   */
  readonly updatedTime?: string;

  /**
   * @schema DetectiveMemberDetail#PercentOfGraphUtilization
   */
  readonly percentOfGraphUtilization?: number;

  /**
   * @schema DetectiveMemberDetail#PercentOfGraphUtilizationUpdatedTime
   */
  readonly percentOfGraphUtilizationUpdatedTime?: string;

}

/**
 * @schema DetectiveUnprocessedAccount
 */
export interface DetectiveUnprocessedAccount {
  /**
   * @schema DetectiveUnprocessedAccount#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema DetectiveUnprocessedAccount#Reason
   */
  readonly reason?: string;

}

/**
 * @schema DetectiveGraph
 */
export interface DetectiveGraph {
  /**
   * @schema DetectiveGraph#Arn
   */
  readonly arn?: string;

  /**
   * @schema DetectiveGraph#CreatedTime
   */
  readonly createdTime?: string;

}
