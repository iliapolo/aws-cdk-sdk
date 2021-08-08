/**
 * @schema RamAcceptResourceShareInvitationRequest
 */
export interface RamAcceptResourceShareInvitationRequest {
  /**
   * @schema RamAcceptResourceShareInvitationRequest#resourceShareInvitationArn
   */
  readonly resourceShareInvitationArn: string;

  /**
   * @schema RamAcceptResourceShareInvitationRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * Converts an object of type 'RamAcceptResourceShareInvitationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RamAcceptResourceShareInvitationRequest(obj: RamAcceptResourceShareInvitationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceShareInvitationArn': obj.resourceShareInvitationArn,
    'clientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RamAcceptResourceShareInvitationResponse
 */
export interface RamAcceptResourceShareInvitationResponse {
  /**
   * @schema RamAcceptResourceShareInvitationResponse#resourceShareInvitation
   */
  readonly resourceShareInvitation?: RamResourceShareInvitation;

  /**
   * @schema RamAcceptResourceShareInvitationResponse#clientToken
   */
  readonly clientToken?: string;

}

/**
 * Converts an object of type 'RamAcceptResourceShareInvitationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RamAcceptResourceShareInvitationResponse(obj: RamAcceptResourceShareInvitationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceShareInvitation': toJson_RamResourceShareInvitation(obj.resourceShareInvitation),
    'clientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RamAssociateResourceShareRequest
 */
export interface RamAssociateResourceShareRequest {
  /**
   * @schema RamAssociateResourceShareRequest#resourceShareArn
   */
  readonly resourceShareArn: string;

  /**
   * @schema RamAssociateResourceShareRequest#resourceArns
   */
  readonly resourceArns?: string[];

  /**
   * @schema RamAssociateResourceShareRequest#principals
   */
  readonly principals?: string[];

  /**
   * @schema RamAssociateResourceShareRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * Converts an object of type 'RamAssociateResourceShareRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RamAssociateResourceShareRequest(obj: RamAssociateResourceShareRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceShareArn': obj.resourceShareArn,
    'resourceArns': obj.resourceArns?.map(y => y),
    'principals': obj.principals?.map(y => y),
    'clientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RamAssociateResourceShareResponse
 */
export interface RamAssociateResourceShareResponse {
  /**
   * @schema RamAssociateResourceShareResponse#resourceShareAssociations
   */
  readonly resourceShareAssociations?: RamResourceShareAssociation[];

  /**
   * @schema RamAssociateResourceShareResponse#clientToken
   */
  readonly clientToken?: string;

}

/**
 * Converts an object of type 'RamAssociateResourceShareResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RamAssociateResourceShareResponse(obj: RamAssociateResourceShareResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceShareAssociations': obj.resourceShareAssociations?.map(y => toJson_RamResourceShareAssociation(y)),
    'clientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RamAssociateResourceSharePermissionRequest
 */
export interface RamAssociateResourceSharePermissionRequest {
  /**
   * @schema RamAssociateResourceSharePermissionRequest#resourceShareArn
   */
  readonly resourceShareArn: string;

  /**
   * @schema RamAssociateResourceSharePermissionRequest#permissionArn
   */
  readonly permissionArn: string;

  /**
   * @schema RamAssociateResourceSharePermissionRequest#replace
   */
  readonly replace?: boolean;

  /**
   * @schema RamAssociateResourceSharePermissionRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema RamAssociateResourceSharePermissionRequest#permissionVersion
   */
  readonly permissionVersion?: number;

}

/**
 * Converts an object of type 'RamAssociateResourceSharePermissionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RamAssociateResourceSharePermissionRequest(obj: RamAssociateResourceSharePermissionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceShareArn': obj.resourceShareArn,
    'permissionArn': obj.permissionArn,
    'replace': obj.replace,
    'clientToken': obj.clientToken,
    'permissionVersion': obj.permissionVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RamAssociateResourceSharePermissionResponse
 */
export interface RamAssociateResourceSharePermissionResponse {
  /**
   * @schema RamAssociateResourceSharePermissionResponse#returnValue
   */
  readonly returnValue?: boolean;

  /**
   * @schema RamAssociateResourceSharePermissionResponse#clientToken
   */
  readonly clientToken?: string;

}

/**
 * Converts an object of type 'RamAssociateResourceSharePermissionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RamAssociateResourceSharePermissionResponse(obj: RamAssociateResourceSharePermissionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'returnValue': obj.returnValue,
    'clientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RamCreateResourceShareRequest
 */
export interface RamCreateResourceShareRequest {
  /**
   * @schema RamCreateResourceShareRequest#name
   */
  readonly name: string;

  /**
   * @schema RamCreateResourceShareRequest#resourceArns
   */
  readonly resourceArns?: string[];

  /**
   * @schema RamCreateResourceShareRequest#principals
   */
  readonly principals?: string[];

  /**
   * @schema RamCreateResourceShareRequest#tags
   */
  readonly tags?: RamTag[];

  /**
   * @schema RamCreateResourceShareRequest#allowExternalPrincipals
   */
  readonly allowExternalPrincipals?: boolean;

  /**
   * @schema RamCreateResourceShareRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema RamCreateResourceShareRequest#permissionArns
   */
  readonly permissionArns?: string[];

}

/**
 * Converts an object of type 'RamCreateResourceShareRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RamCreateResourceShareRequest(obj: RamCreateResourceShareRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'resourceArns': obj.resourceArns?.map(y => y),
    'principals': obj.principals?.map(y => y),
    'tags': obj.tags?.map(y => toJson_RamTag(y)),
    'allowExternalPrincipals': obj.allowExternalPrincipals,
    'clientToken': obj.clientToken,
    'permissionArns': obj.permissionArns?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RamCreateResourceShareResponse
 */
export interface RamCreateResourceShareResponse {
  /**
   * @schema RamCreateResourceShareResponse#resourceShare
   */
  readonly resourceShare?: RamResourceShare;

  /**
   * @schema RamCreateResourceShareResponse#clientToken
   */
  readonly clientToken?: string;

}

/**
 * Converts an object of type 'RamCreateResourceShareResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RamCreateResourceShareResponse(obj: RamCreateResourceShareResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceShare': toJson_RamResourceShare(obj.resourceShare),
    'clientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RamDeleteResourceShareRequest
 */
export interface RamDeleteResourceShareRequest {
  /**
   * @schema RamDeleteResourceShareRequest#resourceShareArn
   */
  readonly resourceShareArn: string;

  /**
   * @schema RamDeleteResourceShareRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * Converts an object of type 'RamDeleteResourceShareRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RamDeleteResourceShareRequest(obj: RamDeleteResourceShareRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceShareArn': obj.resourceShareArn,
    'clientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RamDeleteResourceShareResponse
 */
export interface RamDeleteResourceShareResponse {
  /**
   * @schema RamDeleteResourceShareResponse#returnValue
   */
  readonly returnValue?: boolean;

  /**
   * @schema RamDeleteResourceShareResponse#clientToken
   */
  readonly clientToken?: string;

}

/**
 * Converts an object of type 'RamDeleteResourceShareResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RamDeleteResourceShareResponse(obj: RamDeleteResourceShareResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'returnValue': obj.returnValue,
    'clientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RamDisassociateResourceShareRequest
 */
export interface RamDisassociateResourceShareRequest {
  /**
   * @schema RamDisassociateResourceShareRequest#resourceShareArn
   */
  readonly resourceShareArn: string;

  /**
   * @schema RamDisassociateResourceShareRequest#resourceArns
   */
  readonly resourceArns?: string[];

  /**
   * @schema RamDisassociateResourceShareRequest#principals
   */
  readonly principals?: string[];

  /**
   * @schema RamDisassociateResourceShareRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * Converts an object of type 'RamDisassociateResourceShareRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RamDisassociateResourceShareRequest(obj: RamDisassociateResourceShareRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceShareArn': obj.resourceShareArn,
    'resourceArns': obj.resourceArns?.map(y => y),
    'principals': obj.principals?.map(y => y),
    'clientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RamDisassociateResourceShareResponse
 */
export interface RamDisassociateResourceShareResponse {
  /**
   * @schema RamDisassociateResourceShareResponse#resourceShareAssociations
   */
  readonly resourceShareAssociations?: RamResourceShareAssociation[];

  /**
   * @schema RamDisassociateResourceShareResponse#clientToken
   */
  readonly clientToken?: string;

}

/**
 * Converts an object of type 'RamDisassociateResourceShareResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RamDisassociateResourceShareResponse(obj: RamDisassociateResourceShareResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceShareAssociations': obj.resourceShareAssociations?.map(y => toJson_RamResourceShareAssociation(y)),
    'clientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RamDisassociateResourceSharePermissionRequest
 */
export interface RamDisassociateResourceSharePermissionRequest {
  /**
   * @schema RamDisassociateResourceSharePermissionRequest#resourceShareArn
   */
  readonly resourceShareArn: string;

  /**
   * @schema RamDisassociateResourceSharePermissionRequest#permissionArn
   */
  readonly permissionArn: string;

  /**
   * @schema RamDisassociateResourceSharePermissionRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * Converts an object of type 'RamDisassociateResourceSharePermissionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RamDisassociateResourceSharePermissionRequest(obj: RamDisassociateResourceSharePermissionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceShareArn': obj.resourceShareArn,
    'permissionArn': obj.permissionArn,
    'clientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RamDisassociateResourceSharePermissionResponse
 */
export interface RamDisassociateResourceSharePermissionResponse {
  /**
   * @schema RamDisassociateResourceSharePermissionResponse#returnValue
   */
  readonly returnValue?: boolean;

  /**
   * @schema RamDisassociateResourceSharePermissionResponse#clientToken
   */
  readonly clientToken?: string;

}

/**
 * Converts an object of type 'RamDisassociateResourceSharePermissionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RamDisassociateResourceSharePermissionResponse(obj: RamDisassociateResourceSharePermissionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'returnValue': obj.returnValue,
    'clientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RamEnableSharingWithAwsOrganizationRequest
 */
export interface RamEnableSharingWithAwsOrganizationRequest {
}

/**
 * Converts an object of type 'RamEnableSharingWithAwsOrganizationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RamEnableSharingWithAwsOrganizationRequest(obj: RamEnableSharingWithAwsOrganizationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RamEnableSharingWithAwsOrganizationResponse
 */
export interface RamEnableSharingWithAwsOrganizationResponse {
  /**
   * @schema RamEnableSharingWithAwsOrganizationResponse#returnValue
   */
  readonly returnValue?: boolean;

}

/**
 * Converts an object of type 'RamEnableSharingWithAwsOrganizationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RamEnableSharingWithAwsOrganizationResponse(obj: RamEnableSharingWithAwsOrganizationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'returnValue': obj.returnValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RamGetPermissionRequest
 */
export interface RamGetPermissionRequest {
  /**
   * @schema RamGetPermissionRequest#permissionArn
   */
  readonly permissionArn: string;

  /**
   * @schema RamGetPermissionRequest#permissionVersion
   */
  readonly permissionVersion?: number;

}

/**
 * Converts an object of type 'RamGetPermissionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RamGetPermissionRequest(obj: RamGetPermissionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'permissionArn': obj.permissionArn,
    'permissionVersion': obj.permissionVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RamGetPermissionResponse
 */
export interface RamGetPermissionResponse {
  /**
   * @schema RamGetPermissionResponse#permission
   */
  readonly permission?: RamResourceSharePermissionDetail;

}

/**
 * Converts an object of type 'RamGetPermissionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RamGetPermissionResponse(obj: RamGetPermissionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'permission': toJson_RamResourceSharePermissionDetail(obj.permission),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RamGetResourcePoliciesRequest
 */
export interface RamGetResourcePoliciesRequest {
  /**
   * @schema RamGetResourcePoliciesRequest#resourceArns
   */
  readonly resourceArns: string[];

  /**
   * @schema RamGetResourcePoliciesRequest#principal
   */
  readonly principal?: string;

  /**
   * @schema RamGetResourcePoliciesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RamGetResourcePoliciesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'RamGetResourcePoliciesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RamGetResourcePoliciesRequest(obj: RamGetResourcePoliciesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArns': obj.resourceArns?.map(y => y),
    'principal': obj.principal,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RamGetResourcePoliciesResponse
 */
export interface RamGetResourcePoliciesResponse {
  /**
   * @schema RamGetResourcePoliciesResponse#policies
   */
  readonly policies?: string[];

  /**
   * @schema RamGetResourcePoliciesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'RamGetResourcePoliciesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RamGetResourcePoliciesResponse(obj: RamGetResourcePoliciesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'policies': obj.policies?.map(y => y),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RamGetResourceShareAssociationsRequest
 */
export interface RamGetResourceShareAssociationsRequest {
  /**
   * @schema RamGetResourceShareAssociationsRequest#associationType
   */
  readonly associationType: string;

  /**
   * @schema RamGetResourceShareAssociationsRequest#resourceShareArns
   */
  readonly resourceShareArns?: string[];

  /**
   * @schema RamGetResourceShareAssociationsRequest#resourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema RamGetResourceShareAssociationsRequest#principal
   */
  readonly principal?: string;

  /**
   * @schema RamGetResourceShareAssociationsRequest#associationStatus
   */
  readonly associationStatus?: string;

  /**
   * @schema RamGetResourceShareAssociationsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RamGetResourceShareAssociationsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'RamGetResourceShareAssociationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RamGetResourceShareAssociationsRequest(obj: RamGetResourceShareAssociationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'associationType': obj.associationType,
    'resourceShareArns': obj.resourceShareArns?.map(y => y),
    'resourceArn': obj.resourceArn,
    'principal': obj.principal,
    'associationStatus': obj.associationStatus,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RamGetResourceShareAssociationsResponse
 */
export interface RamGetResourceShareAssociationsResponse {
  /**
   * @schema RamGetResourceShareAssociationsResponse#resourceShareAssociations
   */
  readonly resourceShareAssociations?: RamResourceShareAssociation[];

  /**
   * @schema RamGetResourceShareAssociationsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'RamGetResourceShareAssociationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RamGetResourceShareAssociationsResponse(obj: RamGetResourceShareAssociationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceShareAssociations': obj.resourceShareAssociations?.map(y => toJson_RamResourceShareAssociation(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RamGetResourceShareInvitationsRequest
 */
export interface RamGetResourceShareInvitationsRequest {
  /**
   * @schema RamGetResourceShareInvitationsRequest#resourceShareInvitationArns
   */
  readonly resourceShareInvitationArns?: string[];

  /**
   * @schema RamGetResourceShareInvitationsRequest#resourceShareArns
   */
  readonly resourceShareArns?: string[];

  /**
   * @schema RamGetResourceShareInvitationsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RamGetResourceShareInvitationsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'RamGetResourceShareInvitationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RamGetResourceShareInvitationsRequest(obj: RamGetResourceShareInvitationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceShareInvitationArns': obj.resourceShareInvitationArns?.map(y => y),
    'resourceShareArns': obj.resourceShareArns?.map(y => y),
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RamGetResourceShareInvitationsResponse
 */
export interface RamGetResourceShareInvitationsResponse {
  /**
   * @schema RamGetResourceShareInvitationsResponse#resourceShareInvitations
   */
  readonly resourceShareInvitations?: RamResourceShareInvitation[];

  /**
   * @schema RamGetResourceShareInvitationsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'RamGetResourceShareInvitationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RamGetResourceShareInvitationsResponse(obj: RamGetResourceShareInvitationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceShareInvitations': obj.resourceShareInvitations?.map(y => toJson_RamResourceShareInvitation(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RamGetResourceSharesRequest
 */
export interface RamGetResourceSharesRequest {
  /**
   * @schema RamGetResourceSharesRequest#resourceShareArns
   */
  readonly resourceShareArns?: string[];

  /**
   * @schema RamGetResourceSharesRequest#resourceShareStatus
   */
  readonly resourceShareStatus?: string;

  /**
   * @schema RamGetResourceSharesRequest#resourceOwner
   */
  readonly resourceOwner: string;

  /**
   * @schema RamGetResourceSharesRequest#name
   */
  readonly name?: string;

  /**
   * @schema RamGetResourceSharesRequest#tagFilters
   */
  readonly tagFilters?: RamTagFilter[];

  /**
   * @schema RamGetResourceSharesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RamGetResourceSharesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema RamGetResourceSharesRequest#permissionArn
   */
  readonly permissionArn?: string;

}

/**
 * Converts an object of type 'RamGetResourceSharesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RamGetResourceSharesRequest(obj: RamGetResourceSharesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceShareArns': obj.resourceShareArns?.map(y => y),
    'resourceShareStatus': obj.resourceShareStatus,
    'resourceOwner': obj.resourceOwner,
    'name': obj.name,
    'tagFilters': obj.tagFilters?.map(y => toJson_RamTagFilter(y)),
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
    'permissionArn': obj.permissionArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RamGetResourceSharesResponse
 */
export interface RamGetResourceSharesResponse {
  /**
   * @schema RamGetResourceSharesResponse#resourceShares
   */
  readonly resourceShares?: RamResourceShare[];

  /**
   * @schema RamGetResourceSharesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'RamGetResourceSharesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RamGetResourceSharesResponse(obj: RamGetResourceSharesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceShares': obj.resourceShares?.map(y => toJson_RamResourceShare(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RamListPendingInvitationResourcesRequest
 */
export interface RamListPendingInvitationResourcesRequest {
  /**
   * @schema RamListPendingInvitationResourcesRequest#resourceShareInvitationArn
   */
  readonly resourceShareInvitationArn: string;

  /**
   * @schema RamListPendingInvitationResourcesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RamListPendingInvitationResourcesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'RamListPendingInvitationResourcesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RamListPendingInvitationResourcesRequest(obj: RamListPendingInvitationResourcesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceShareInvitationArn': obj.resourceShareInvitationArn,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RamListPendingInvitationResourcesResponse
 */
export interface RamListPendingInvitationResourcesResponse {
  /**
   * @schema RamListPendingInvitationResourcesResponse#resources
   */
  readonly resources?: RamResource[];

  /**
   * @schema RamListPendingInvitationResourcesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'RamListPendingInvitationResourcesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RamListPendingInvitationResourcesResponse(obj: RamListPendingInvitationResourcesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resources': obj.resources?.map(y => toJson_RamResource(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RamListPermissionsRequest
 */
export interface RamListPermissionsRequest {
  /**
   * @schema RamListPermissionsRequest#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema RamListPermissionsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RamListPermissionsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'RamListPermissionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RamListPermissionsRequest(obj: RamListPermissionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceType': obj.resourceType,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RamListPermissionsResponse
 */
export interface RamListPermissionsResponse {
  /**
   * @schema RamListPermissionsResponse#permissions
   */
  readonly permissions?: RamResourceSharePermissionSummary[];

  /**
   * @schema RamListPermissionsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'RamListPermissionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RamListPermissionsResponse(obj: RamListPermissionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'permissions': obj.permissions?.map(y => toJson_RamResourceSharePermissionSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RamListPrincipalsRequest
 */
export interface RamListPrincipalsRequest {
  /**
   * @schema RamListPrincipalsRequest#resourceOwner
   */
  readonly resourceOwner: string;

  /**
   * @schema RamListPrincipalsRequest#resourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema RamListPrincipalsRequest#principals
   */
  readonly principals?: string[];

  /**
   * @schema RamListPrincipalsRequest#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema RamListPrincipalsRequest#resourceShareArns
   */
  readonly resourceShareArns?: string[];

  /**
   * @schema RamListPrincipalsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RamListPrincipalsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'RamListPrincipalsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RamListPrincipalsRequest(obj: RamListPrincipalsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceOwner': obj.resourceOwner,
    'resourceArn': obj.resourceArn,
    'principals': obj.principals?.map(y => y),
    'resourceType': obj.resourceType,
    'resourceShareArns': obj.resourceShareArns?.map(y => y),
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RamListPrincipalsResponse
 */
export interface RamListPrincipalsResponse {
  /**
   * @schema RamListPrincipalsResponse#principals
   */
  readonly principals?: RamPrincipal[];

  /**
   * @schema RamListPrincipalsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'RamListPrincipalsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RamListPrincipalsResponse(obj: RamListPrincipalsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'principals': obj.principals?.map(y => toJson_RamPrincipal(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RamListResourceSharePermissionsRequest
 */
export interface RamListResourceSharePermissionsRequest {
  /**
   * @schema RamListResourceSharePermissionsRequest#resourceShareArn
   */
  readonly resourceShareArn: string;

  /**
   * @schema RamListResourceSharePermissionsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RamListResourceSharePermissionsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'RamListResourceSharePermissionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RamListResourceSharePermissionsRequest(obj: RamListResourceSharePermissionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceShareArn': obj.resourceShareArn,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RamListResourceSharePermissionsResponse
 */
export interface RamListResourceSharePermissionsResponse {
  /**
   * @schema RamListResourceSharePermissionsResponse#permissions
   */
  readonly permissions?: RamResourceSharePermissionSummary[];

  /**
   * @schema RamListResourceSharePermissionsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'RamListResourceSharePermissionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RamListResourceSharePermissionsResponse(obj: RamListResourceSharePermissionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'permissions': obj.permissions?.map(y => toJson_RamResourceSharePermissionSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RamListResourceTypesRequest
 */
export interface RamListResourceTypesRequest {
  /**
   * @schema RamListResourceTypesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RamListResourceTypesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'RamListResourceTypesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RamListResourceTypesRequest(obj: RamListResourceTypesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RamListResourceTypesResponse
 */
export interface RamListResourceTypesResponse {
  /**
   * @schema RamListResourceTypesResponse#resourceTypes
   */
  readonly resourceTypes?: RamServiceNameAndResourceType[];

  /**
   * @schema RamListResourceTypesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'RamListResourceTypesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RamListResourceTypesResponse(obj: RamListResourceTypesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceTypes': obj.resourceTypes?.map(y => toJson_RamServiceNameAndResourceType(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RamListResourcesRequest
 */
export interface RamListResourcesRequest {
  /**
   * @schema RamListResourcesRequest#resourceOwner
   */
  readonly resourceOwner: string;

  /**
   * @schema RamListResourcesRequest#principal
   */
  readonly principal?: string;

  /**
   * @schema RamListResourcesRequest#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema RamListResourcesRequest#resourceArns
   */
  readonly resourceArns?: string[];

  /**
   * @schema RamListResourcesRequest#resourceShareArns
   */
  readonly resourceShareArns?: string[];

  /**
   * @schema RamListResourcesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RamListResourcesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'RamListResourcesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RamListResourcesRequest(obj: RamListResourcesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceOwner': obj.resourceOwner,
    'principal': obj.principal,
    'resourceType': obj.resourceType,
    'resourceArns': obj.resourceArns?.map(y => y),
    'resourceShareArns': obj.resourceShareArns?.map(y => y),
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RamListResourcesResponse
 */
export interface RamListResourcesResponse {
  /**
   * @schema RamListResourcesResponse#resources
   */
  readonly resources?: RamResource[];

  /**
   * @schema RamListResourcesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'RamListResourcesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RamListResourcesResponse(obj: RamListResourcesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resources': obj.resources?.map(y => toJson_RamResource(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RamPromoteResourceShareCreatedFromPolicyRequest
 */
export interface RamPromoteResourceShareCreatedFromPolicyRequest {
  /**
   * @schema RamPromoteResourceShareCreatedFromPolicyRequest#resourceShareArn
   */
  readonly resourceShareArn: string;

}

/**
 * Converts an object of type 'RamPromoteResourceShareCreatedFromPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RamPromoteResourceShareCreatedFromPolicyRequest(obj: RamPromoteResourceShareCreatedFromPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceShareArn': obj.resourceShareArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RamPromoteResourceShareCreatedFromPolicyResponse
 */
export interface RamPromoteResourceShareCreatedFromPolicyResponse {
  /**
   * @schema RamPromoteResourceShareCreatedFromPolicyResponse#returnValue
   */
  readonly returnValue?: boolean;

}

/**
 * Converts an object of type 'RamPromoteResourceShareCreatedFromPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RamPromoteResourceShareCreatedFromPolicyResponse(obj: RamPromoteResourceShareCreatedFromPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'returnValue': obj.returnValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RamRejectResourceShareInvitationRequest
 */
export interface RamRejectResourceShareInvitationRequest {
  /**
   * @schema RamRejectResourceShareInvitationRequest#resourceShareInvitationArn
   */
  readonly resourceShareInvitationArn: string;

  /**
   * @schema RamRejectResourceShareInvitationRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * Converts an object of type 'RamRejectResourceShareInvitationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RamRejectResourceShareInvitationRequest(obj: RamRejectResourceShareInvitationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceShareInvitationArn': obj.resourceShareInvitationArn,
    'clientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RamRejectResourceShareInvitationResponse
 */
export interface RamRejectResourceShareInvitationResponse {
  /**
   * @schema RamRejectResourceShareInvitationResponse#resourceShareInvitation
   */
  readonly resourceShareInvitation?: RamResourceShareInvitation;

  /**
   * @schema RamRejectResourceShareInvitationResponse#clientToken
   */
  readonly clientToken?: string;

}

/**
 * Converts an object of type 'RamRejectResourceShareInvitationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RamRejectResourceShareInvitationResponse(obj: RamRejectResourceShareInvitationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceShareInvitation': toJson_RamResourceShareInvitation(obj.resourceShareInvitation),
    'clientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RamTagResourceRequest
 */
export interface RamTagResourceRequest {
  /**
   * @schema RamTagResourceRequest#resourceShareArn
   */
  readonly resourceShareArn: string;

  /**
   * @schema RamTagResourceRequest#tags
   */
  readonly tags: RamTag[];

}

/**
 * Converts an object of type 'RamTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RamTagResourceRequest(obj: RamTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceShareArn': obj.resourceShareArn,
    'tags': obj.tags?.map(y => toJson_RamTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RamTagResourceResponse
 */
export interface RamTagResourceResponse {
}

/**
 * Converts an object of type 'RamTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RamTagResourceResponse(obj: RamTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RamUntagResourceRequest
 */
export interface RamUntagResourceRequest {
  /**
   * @schema RamUntagResourceRequest#resourceShareArn
   */
  readonly resourceShareArn: string;

  /**
   * @schema RamUntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * Converts an object of type 'RamUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RamUntagResourceRequest(obj: RamUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceShareArn': obj.resourceShareArn,
    'tagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RamUntagResourceResponse
 */
export interface RamUntagResourceResponse {
}

/**
 * Converts an object of type 'RamUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RamUntagResourceResponse(obj: RamUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RamUpdateResourceShareRequest
 */
export interface RamUpdateResourceShareRequest {
  /**
   * @schema RamUpdateResourceShareRequest#resourceShareArn
   */
  readonly resourceShareArn: string;

  /**
   * @schema RamUpdateResourceShareRequest#name
   */
  readonly name?: string;

  /**
   * @schema RamUpdateResourceShareRequest#allowExternalPrincipals
   */
  readonly allowExternalPrincipals?: boolean;

  /**
   * @schema RamUpdateResourceShareRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * Converts an object of type 'RamUpdateResourceShareRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RamUpdateResourceShareRequest(obj: RamUpdateResourceShareRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceShareArn': obj.resourceShareArn,
    'name': obj.name,
    'allowExternalPrincipals': obj.allowExternalPrincipals,
    'clientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RamUpdateResourceShareResponse
 */
export interface RamUpdateResourceShareResponse {
  /**
   * @schema RamUpdateResourceShareResponse#resourceShare
   */
  readonly resourceShare?: RamResourceShare;

  /**
   * @schema RamUpdateResourceShareResponse#clientToken
   */
  readonly clientToken?: string;

}

/**
 * Converts an object of type 'RamUpdateResourceShareResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RamUpdateResourceShareResponse(obj: RamUpdateResourceShareResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceShare': toJson_RamResourceShare(obj.resourceShare),
    'clientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RamResourceShareInvitation
 */
export interface RamResourceShareInvitation {
  /**
   * @schema RamResourceShareInvitation#resourceShareInvitationArn
   */
  readonly resourceShareInvitationArn?: string;

  /**
   * @schema RamResourceShareInvitation#resourceShareName
   */
  readonly resourceShareName?: string;

  /**
   * @schema RamResourceShareInvitation#resourceShareArn
   */
  readonly resourceShareArn?: string;

  /**
   * @schema RamResourceShareInvitation#senderAccountId
   */
  readonly senderAccountId?: string;

  /**
   * @schema RamResourceShareInvitation#receiverAccountId
   */
  readonly receiverAccountId?: string;

  /**
   * @schema RamResourceShareInvitation#invitationTimestamp
   */
  readonly invitationTimestamp?: string;

  /**
   * @schema RamResourceShareInvitation#status
   */
  readonly status?: string;

  /**
   * @schema RamResourceShareInvitation#resourceShareAssociations
   */
  readonly resourceShareAssociations?: RamResourceShareAssociation[];

  /**
   * @schema RamResourceShareInvitation#receiverArn
   */
  readonly receiverArn?: string;

}

/**
 * Converts an object of type 'RamResourceShareInvitation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RamResourceShareInvitation(obj: RamResourceShareInvitation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceShareInvitationArn': obj.resourceShareInvitationArn,
    'resourceShareName': obj.resourceShareName,
    'resourceShareArn': obj.resourceShareArn,
    'senderAccountId': obj.senderAccountId,
    'receiverAccountId': obj.receiverAccountId,
    'invitationTimestamp': obj.invitationTimestamp,
    'status': obj.status,
    'resourceShareAssociations': obj.resourceShareAssociations?.map(y => toJson_RamResourceShareAssociation(y)),
    'receiverArn': obj.receiverArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RamResourceShareAssociation
 */
export interface RamResourceShareAssociation {
  /**
   * @schema RamResourceShareAssociation#resourceShareArn
   */
  readonly resourceShareArn?: string;

  /**
   * @schema RamResourceShareAssociation#resourceShareName
   */
  readonly resourceShareName?: string;

  /**
   * @schema RamResourceShareAssociation#associatedEntity
   */
  readonly associatedEntity?: string;

  /**
   * @schema RamResourceShareAssociation#associationType
   */
  readonly associationType?: string;

  /**
   * @schema RamResourceShareAssociation#status
   */
  readonly status?: string;

  /**
   * @schema RamResourceShareAssociation#statusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema RamResourceShareAssociation#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema RamResourceShareAssociation#lastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

  /**
   * @schema RamResourceShareAssociation#external
   */
  readonly external?: boolean;

}

/**
 * Converts an object of type 'RamResourceShareAssociation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RamResourceShareAssociation(obj: RamResourceShareAssociation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceShareArn': obj.resourceShareArn,
    'resourceShareName': obj.resourceShareName,
    'associatedEntity': obj.associatedEntity,
    'associationType': obj.associationType,
    'status': obj.status,
    'statusMessage': obj.statusMessage,
    'creationTime': obj.creationTime,
    'lastUpdatedTime': obj.lastUpdatedTime,
    'external': obj.external,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RamTag
 */
export interface RamTag {
  /**
   * @schema RamTag#key
   */
  readonly key?: string;

  /**
   * @schema RamTag#value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'RamTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RamTag(obj: RamTag | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'key': obj.key,
    'value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RamResourceShare
 */
export interface RamResourceShare {
  /**
   * @schema RamResourceShare#resourceShareArn
   */
  readonly resourceShareArn?: string;

  /**
   * @schema RamResourceShare#name
   */
  readonly name?: string;

  /**
   * @schema RamResourceShare#owningAccountId
   */
  readonly owningAccountId?: string;

  /**
   * @schema RamResourceShare#allowExternalPrincipals
   */
  readonly allowExternalPrincipals?: boolean;

  /**
   * @schema RamResourceShare#status
   */
  readonly status?: string;

  /**
   * @schema RamResourceShare#statusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema RamResourceShare#tags
   */
  readonly tags?: RamTag[];

  /**
   * @schema RamResourceShare#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema RamResourceShare#lastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

  /**
   * @schema RamResourceShare#featureSet
   */
  readonly featureSet?: string;

}

/**
 * Converts an object of type 'RamResourceShare' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RamResourceShare(obj: RamResourceShare | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceShareArn': obj.resourceShareArn,
    'name': obj.name,
    'owningAccountId': obj.owningAccountId,
    'allowExternalPrincipals': obj.allowExternalPrincipals,
    'status': obj.status,
    'statusMessage': obj.statusMessage,
    'tags': obj.tags?.map(y => toJson_RamTag(y)),
    'creationTime': obj.creationTime,
    'lastUpdatedTime': obj.lastUpdatedTime,
    'featureSet': obj.featureSet,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RamResourceSharePermissionDetail
 */
export interface RamResourceSharePermissionDetail {
  /**
   * @schema RamResourceSharePermissionDetail#arn
   */
  readonly arn?: string;

  /**
   * @schema RamResourceSharePermissionDetail#version
   */
  readonly version?: string;

  /**
   * @schema RamResourceSharePermissionDetail#defaultVersion
   */
  readonly defaultVersion?: boolean;

  /**
   * @schema RamResourceSharePermissionDetail#name
   */
  readonly name?: string;

  /**
   * @schema RamResourceSharePermissionDetail#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema RamResourceSharePermissionDetail#permission
   */
  readonly permission?: string;

  /**
   * @schema RamResourceSharePermissionDetail#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema RamResourceSharePermissionDetail#lastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

  /**
   * @schema RamResourceSharePermissionDetail#isResourceTypeDefault
   */
  readonly isResourceTypeDefault?: boolean;

}

/**
 * Converts an object of type 'RamResourceSharePermissionDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RamResourceSharePermissionDetail(obj: RamResourceSharePermissionDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'version': obj.version,
    'defaultVersion': obj.defaultVersion,
    'name': obj.name,
    'resourceType': obj.resourceType,
    'permission': obj.permission,
    'creationTime': obj.creationTime,
    'lastUpdatedTime': obj.lastUpdatedTime,
    'isResourceTypeDefault': obj.isResourceTypeDefault,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RamTagFilter
 */
export interface RamTagFilter {
  /**
   * @schema RamTagFilter#tagKey
   */
  readonly tagKey?: string;

  /**
   * @schema RamTagFilter#tagValues
   */
  readonly tagValues?: string[];

}

/**
 * Converts an object of type 'RamTagFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RamTagFilter(obj: RamTagFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tagKey': obj.tagKey,
    'tagValues': obj.tagValues?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RamResource
 */
export interface RamResource {
  /**
   * @schema RamResource#arn
   */
  readonly arn?: string;

  /**
   * @schema RamResource#type
   */
  readonly type?: string;

  /**
   * @schema RamResource#resourceShareArn
   */
  readonly resourceShareArn?: string;

  /**
   * @schema RamResource#resourceGroupArn
   */
  readonly resourceGroupArn?: string;

  /**
   * @schema RamResource#status
   */
  readonly status?: string;

  /**
   * @schema RamResource#statusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema RamResource#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema RamResource#lastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

}

/**
 * Converts an object of type 'RamResource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RamResource(obj: RamResource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'type': obj.type,
    'resourceShareArn': obj.resourceShareArn,
    'resourceGroupArn': obj.resourceGroupArn,
    'status': obj.status,
    'statusMessage': obj.statusMessage,
    'creationTime': obj.creationTime,
    'lastUpdatedTime': obj.lastUpdatedTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RamResourceSharePermissionSummary
 */
export interface RamResourceSharePermissionSummary {
  /**
   * @schema RamResourceSharePermissionSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema RamResourceSharePermissionSummary#version
   */
  readonly version?: string;

  /**
   * @schema RamResourceSharePermissionSummary#defaultVersion
   */
  readonly defaultVersion?: boolean;

  /**
   * @schema RamResourceSharePermissionSummary#name
   */
  readonly name?: string;

  /**
   * @schema RamResourceSharePermissionSummary#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema RamResourceSharePermissionSummary#status
   */
  readonly status?: string;

  /**
   * @schema RamResourceSharePermissionSummary#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema RamResourceSharePermissionSummary#lastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

  /**
   * @schema RamResourceSharePermissionSummary#isResourceTypeDefault
   */
  readonly isResourceTypeDefault?: boolean;

}

/**
 * Converts an object of type 'RamResourceSharePermissionSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RamResourceSharePermissionSummary(obj: RamResourceSharePermissionSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'version': obj.version,
    'defaultVersion': obj.defaultVersion,
    'name': obj.name,
    'resourceType': obj.resourceType,
    'status': obj.status,
    'creationTime': obj.creationTime,
    'lastUpdatedTime': obj.lastUpdatedTime,
    'isResourceTypeDefault': obj.isResourceTypeDefault,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RamPrincipal
 */
export interface RamPrincipal {
  /**
   * @schema RamPrincipal#id
   */
  readonly id?: string;

  /**
   * @schema RamPrincipal#resourceShareArn
   */
  readonly resourceShareArn?: string;

  /**
   * @schema RamPrincipal#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema RamPrincipal#lastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

  /**
   * @schema RamPrincipal#external
   */
  readonly external?: boolean;

}

/**
 * Converts an object of type 'RamPrincipal' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RamPrincipal(obj: RamPrincipal | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'resourceShareArn': obj.resourceShareArn,
    'creationTime': obj.creationTime,
    'lastUpdatedTime': obj.lastUpdatedTime,
    'external': obj.external,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RamServiceNameAndResourceType
 */
export interface RamServiceNameAndResourceType {
  /**
   * @schema RamServiceNameAndResourceType#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema RamServiceNameAndResourceType#serviceName
   */
  readonly serviceName?: string;

}

/**
 * Converts an object of type 'RamServiceNameAndResourceType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RamServiceNameAndResourceType(obj: RamServiceNameAndResourceType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceType': obj.resourceType,
    'serviceName': obj.serviceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
