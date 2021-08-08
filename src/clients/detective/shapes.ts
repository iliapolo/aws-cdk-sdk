/**
 * @schema DetectiveAcceptInvitationRequest
 */
export interface DetectiveAcceptInvitationRequest {
  /**
   * @schema DetectiveAcceptInvitationRequest#GraphArn
   */
  readonly graphArn?: string;

}

/**
 * Converts an object of type 'DetectiveAcceptInvitationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DetectiveAcceptInvitationRequest(obj: DetectiveAcceptInvitationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GraphArn': obj.graphArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DetectiveCreateGraphRequest
 */
export interface DetectiveCreateGraphRequest {
  /**
   * @schema DetectiveCreateGraphRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'DetectiveCreateGraphRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DetectiveCreateGraphRequest(obj: DetectiveCreateGraphRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DetectiveCreateGraphResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DetectiveCreateGraphResponse(obj: DetectiveCreateGraphResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GraphArn': obj.graphArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DetectiveCreateMembersRequest
 */
export interface DetectiveCreateMembersRequest {
  /**
   * @schema DetectiveCreateMembersRequest#GraphArn
   */
  readonly graphArn?: string;

  /**
   * @schema DetectiveCreateMembersRequest#Message
   */
  readonly message?: string;

  /**
   * @schema DetectiveCreateMembersRequest#DisableEmailNotification
   */
  readonly disableEmailNotification?: boolean;

  /**
   * @schema DetectiveCreateMembersRequest#Accounts
   */
  readonly accounts?: DetectiveAccount[];

}

/**
 * Converts an object of type 'DetectiveCreateMembersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DetectiveCreateMembersRequest(obj: DetectiveCreateMembersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GraphArn': obj.graphArn,
    'Message': obj.message,
    'DisableEmailNotification': obj.disableEmailNotification,
    'Accounts': obj.accounts?.map(y => toJson_DetectiveAccount(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DetectiveCreateMembersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DetectiveCreateMembersResponse(obj: DetectiveCreateMembersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Members': obj.members?.map(y => toJson_DetectiveMemberDetail(y)),
    'UnprocessedAccounts': obj.unprocessedAccounts?.map(y => toJson_DetectiveUnprocessedAccount(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DetectiveDeleteGraphRequest
 */
export interface DetectiveDeleteGraphRequest {
  /**
   * @schema DetectiveDeleteGraphRequest#GraphArn
   */
  readonly graphArn?: string;

}

/**
 * Converts an object of type 'DetectiveDeleteGraphRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DetectiveDeleteGraphRequest(obj: DetectiveDeleteGraphRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GraphArn': obj.graphArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DetectiveDeleteMembersRequest
 */
export interface DetectiveDeleteMembersRequest {
  /**
   * @schema DetectiveDeleteMembersRequest#GraphArn
   */
  readonly graphArn?: string;

  /**
   * @schema DetectiveDeleteMembersRequest#AccountIds
   */
  readonly accountIds?: string[];

}

/**
 * Converts an object of type 'DetectiveDeleteMembersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DetectiveDeleteMembersRequest(obj: DetectiveDeleteMembersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GraphArn': obj.graphArn,
    'AccountIds': obj.accountIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DetectiveDeleteMembersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DetectiveDeleteMembersResponse(obj: DetectiveDeleteMembersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountIds': obj.accountIds?.map(y => y),
    'UnprocessedAccounts': obj.unprocessedAccounts?.map(y => toJson_DetectiveUnprocessedAccount(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DetectiveDisassociateMembershipRequest
 */
export interface DetectiveDisassociateMembershipRequest {
  /**
   * @schema DetectiveDisassociateMembershipRequest#GraphArn
   */
  readonly graphArn?: string;

}

/**
 * Converts an object of type 'DetectiveDisassociateMembershipRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DetectiveDisassociateMembershipRequest(obj: DetectiveDisassociateMembershipRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GraphArn': obj.graphArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DetectiveGetMembersRequest
 */
export interface DetectiveGetMembersRequest {
  /**
   * @schema DetectiveGetMembersRequest#GraphArn
   */
  readonly graphArn?: string;

  /**
   * @schema DetectiveGetMembersRequest#AccountIds
   */
  readonly accountIds?: string[];

}

/**
 * Converts an object of type 'DetectiveGetMembersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DetectiveGetMembersRequest(obj: DetectiveGetMembersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GraphArn': obj.graphArn,
    'AccountIds': obj.accountIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DetectiveGetMembersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DetectiveGetMembersResponse(obj: DetectiveGetMembersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MemberDetails': obj.memberDetails?.map(y => toJson_DetectiveMemberDetail(y)),
    'UnprocessedAccounts': obj.unprocessedAccounts?.map(y => toJson_DetectiveUnprocessedAccount(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DetectiveListGraphsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DetectiveListGraphsRequest(obj: DetectiveListGraphsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DetectiveListGraphsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DetectiveListGraphsResponse(obj: DetectiveListGraphsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GraphList': obj.graphList?.map(y => toJson_DetectiveGraph(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DetectiveListInvitationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DetectiveListInvitationsRequest(obj: DetectiveListInvitationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DetectiveListInvitationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DetectiveListInvitationsResponse(obj: DetectiveListInvitationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Invitations': obj.invitations?.map(y => toJson_DetectiveMemberDetail(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DetectiveListMembersRequest
 */
export interface DetectiveListMembersRequest {
  /**
   * @schema DetectiveListMembersRequest#GraphArn
   */
  readonly graphArn?: string;

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
 * Converts an object of type 'DetectiveListMembersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DetectiveListMembersRequest(obj: DetectiveListMembersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GraphArn': obj.graphArn,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DetectiveListMembersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DetectiveListMembersResponse(obj: DetectiveListMembersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MemberDetails': obj.memberDetails?.map(y => toJson_DetectiveMemberDetail(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DetectiveListTagsForResourceRequest
 */
export interface DetectiveListTagsForResourceRequest {
  /**
   * @schema DetectiveListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'DetectiveListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DetectiveListTagsForResourceRequest(obj: DetectiveListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DetectiveListTagsForResourceResponse
 */
export interface DetectiveListTagsForResourceResponse {
  /**
   * @schema DetectiveListTagsForResourceResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'DetectiveListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DetectiveListTagsForResourceResponse(obj: DetectiveListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DetectiveRejectInvitationRequest
 */
export interface DetectiveRejectInvitationRequest {
  /**
   * @schema DetectiveRejectInvitationRequest#GraphArn
   */
  readonly graphArn?: string;

}

/**
 * Converts an object of type 'DetectiveRejectInvitationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DetectiveRejectInvitationRequest(obj: DetectiveRejectInvitationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GraphArn': obj.graphArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DetectiveStartMonitoringMemberRequest
 */
export interface DetectiveStartMonitoringMemberRequest {
  /**
   * @schema DetectiveStartMonitoringMemberRequest#GraphArn
   */
  readonly graphArn?: string;

  /**
   * @schema DetectiveStartMonitoringMemberRequest#AccountId
   */
  readonly accountId?: string;

}

/**
 * Converts an object of type 'DetectiveStartMonitoringMemberRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DetectiveStartMonitoringMemberRequest(obj: DetectiveStartMonitoringMemberRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GraphArn': obj.graphArn,
    'AccountId': obj.accountId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DetectiveTagResourceRequest
 */
export interface DetectiveTagResourceRequest {
  /**
   * @schema DetectiveTagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema DetectiveTagResourceRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'DetectiveTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DetectiveTagResourceRequest(obj: DetectiveTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DetectiveTagResourceResponse
 */
export interface DetectiveTagResourceResponse {
}

/**
 * Converts an object of type 'DetectiveTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DetectiveTagResourceResponse(obj: DetectiveTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DetectiveUntagResourceRequest
 */
export interface DetectiveUntagResourceRequest {
  /**
   * @schema DetectiveUntagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema DetectiveUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'DetectiveUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DetectiveUntagResourceRequest(obj: DetectiveUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DetectiveUntagResourceResponse
 */
export interface DetectiveUntagResourceResponse {
}

/**
 * Converts an object of type 'DetectiveUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DetectiveUntagResourceResponse(obj: DetectiveUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DetectiveAccount
 */
export interface DetectiveAccount {
  /**
   * @schema DetectiveAccount#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema DetectiveAccount#EmailAddress
   */
  readonly emailAddress?: string;

}

/**
 * Converts an object of type 'DetectiveAccount' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DetectiveAccount(obj: DetectiveAccount | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'EmailAddress': obj.emailAddress,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
   * @schema DetectiveMemberDetail#AdministratorId
   */
  readonly administratorId?: string;

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
   * @schema DetectiveMemberDetail#VolumeUsageInBytes
   */
  readonly volumeUsageInBytes?: number;

  /**
   * @schema DetectiveMemberDetail#VolumeUsageUpdatedTime
   */
  readonly volumeUsageUpdatedTime?: string;

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
 * Converts an object of type 'DetectiveMemberDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DetectiveMemberDetail(obj: DetectiveMemberDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'EmailAddress': obj.emailAddress,
    'GraphArn': obj.graphArn,
    'MasterId': obj.masterId,
    'AdministratorId': obj.administratorId,
    'Status': obj.status,
    'DisabledReason': obj.disabledReason,
    'InvitedTime': obj.invitedTime,
    'UpdatedTime': obj.updatedTime,
    'VolumeUsageInBytes': obj.volumeUsageInBytes,
    'VolumeUsageUpdatedTime': obj.volumeUsageUpdatedTime,
    'PercentOfGraphUtilization': obj.percentOfGraphUtilization,
    'PercentOfGraphUtilizationUpdatedTime': obj.percentOfGraphUtilizationUpdatedTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DetectiveUnprocessedAccount' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DetectiveUnprocessedAccount(obj: DetectiveUnprocessedAccount | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'Reason': obj.reason,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

/**
 * Converts an object of type 'DetectiveGraph' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DetectiveGraph(obj: DetectiveGraph | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CreatedTime': obj.createdTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
