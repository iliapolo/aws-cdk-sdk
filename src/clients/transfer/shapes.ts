/**
 * @schema TransferCreateAccessRequest
 */
export interface TransferCreateAccessRequest {
  /**
   * @schema TransferCreateAccessRequest#HomeDirectory
   */
  readonly homeDirectory?: string;

  /**
   * @schema TransferCreateAccessRequest#HomeDirectoryType
   */
  readonly homeDirectoryType?: string;

  /**
   * @schema TransferCreateAccessRequest#HomeDirectoryMappings
   */
  readonly homeDirectoryMappings?: TransferHomeDirectoryMapEntry[];

  /**
   * @schema TransferCreateAccessRequest#Policy
   */
  readonly policy?: string;

  /**
   * @schema TransferCreateAccessRequest#PosixProfile
   */
  readonly posixProfile?: TransferPosixProfile;

  /**
   * @schema TransferCreateAccessRequest#Role
   */
  readonly role?: string;

  /**
   * @schema TransferCreateAccessRequest#ServerId
   */
  readonly serverId?: string;

  /**
   * @schema TransferCreateAccessRequest#ExternalId
   */
  readonly externalId?: string;

}

/**
 * Converts an object of type 'TransferCreateAccessRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TransferCreateAccessRequest(obj: TransferCreateAccessRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HomeDirectory': obj.homeDirectory,
    'HomeDirectoryType': obj.homeDirectoryType,
    'HomeDirectoryMappings': obj.homeDirectoryMappings?.map(y => toJson_TransferHomeDirectoryMapEntry(y)),
    'Policy': obj.policy,
    'PosixProfile': toJson_TransferPosixProfile(obj.posixProfile),
    'Role': obj.role,
    'ServerId': obj.serverId,
    'ExternalId': obj.externalId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TransferCreateAccessResponse
 */
export interface TransferCreateAccessResponse {
  /**
   * @schema TransferCreateAccessResponse#ServerId
   */
  readonly serverId?: string;

  /**
   * @schema TransferCreateAccessResponse#ExternalId
   */
  readonly externalId?: string;

}

/**
 * Converts an object of type 'TransferCreateAccessResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TransferCreateAccessResponse(obj: TransferCreateAccessResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServerId': obj.serverId,
    'ExternalId': obj.externalId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TransferCreateServerRequest
 */
export interface TransferCreateServerRequest {
  /**
   * @schema TransferCreateServerRequest#Certificate
   */
  readonly certificate?: string;

  /**
   * @schema TransferCreateServerRequest#Domain
   */
  readonly domain?: string;

  /**
   * @schema TransferCreateServerRequest#EndpointDetails
   */
  readonly endpointDetails?: TransferEndpointDetails;

  /**
   * @schema TransferCreateServerRequest#EndpointType
   */
  readonly endpointType?: string;

  /**
   * @schema TransferCreateServerRequest#HostKey
   */
  readonly hostKey?: string;

  /**
   * @schema TransferCreateServerRequest#IdentityProviderDetails
   */
  readonly identityProviderDetails?: TransferIdentityProviderDetails;

  /**
   * @schema TransferCreateServerRequest#IdentityProviderType
   */
  readonly identityProviderType?: string;

  /**
   * @schema TransferCreateServerRequest#LoggingRole
   */
  readonly loggingRole?: string;

  /**
   * @schema TransferCreateServerRequest#Protocols
   */
  readonly protocols?: string[];

  /**
   * @schema TransferCreateServerRequest#SecurityPolicyName
   */
  readonly securityPolicyName?: string;

  /**
   * @schema TransferCreateServerRequest#Tags
   */
  readonly tags?: TransferTag[];

}

/**
 * Converts an object of type 'TransferCreateServerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TransferCreateServerRequest(obj: TransferCreateServerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Certificate': obj.certificate,
    'Domain': obj.domain,
    'EndpointDetails': toJson_TransferEndpointDetails(obj.endpointDetails),
    'EndpointType': obj.endpointType,
    'HostKey': obj.hostKey,
    'IdentityProviderDetails': toJson_TransferIdentityProviderDetails(obj.identityProviderDetails),
    'IdentityProviderType': obj.identityProviderType,
    'LoggingRole': obj.loggingRole,
    'Protocols': obj.protocols?.map(y => y),
    'SecurityPolicyName': obj.securityPolicyName,
    'Tags': obj.tags?.map(y => toJson_TransferTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TransferCreateServerResponse
 */
export interface TransferCreateServerResponse {
  /**
   * @schema TransferCreateServerResponse#ServerId
   */
  readonly serverId?: string;

}

/**
 * Converts an object of type 'TransferCreateServerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TransferCreateServerResponse(obj: TransferCreateServerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServerId': obj.serverId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TransferCreateUserRequest
 */
export interface TransferCreateUserRequest {
  /**
   * @schema TransferCreateUserRequest#HomeDirectory
   */
  readonly homeDirectory?: string;

  /**
   * @schema TransferCreateUserRequest#HomeDirectoryType
   */
  readonly homeDirectoryType?: string;

  /**
   * @schema TransferCreateUserRequest#HomeDirectoryMappings
   */
  readonly homeDirectoryMappings?: TransferHomeDirectoryMapEntry[];

  /**
   * @schema TransferCreateUserRequest#Policy
   */
  readonly policy?: string;

  /**
   * @schema TransferCreateUserRequest#PosixProfile
   */
  readonly posixProfile?: TransferPosixProfile;

  /**
   * @schema TransferCreateUserRequest#Role
   */
  readonly role?: string;

  /**
   * @schema TransferCreateUserRequest#ServerId
   */
  readonly serverId?: string;

  /**
   * @schema TransferCreateUserRequest#SshPublicKeyBody
   */
  readonly sshPublicKeyBody?: string;

  /**
   * @schema TransferCreateUserRequest#Tags
   */
  readonly tags?: TransferTag[];

  /**
   * @schema TransferCreateUserRequest#UserName
   */
  readonly userName?: string;

}

/**
 * Converts an object of type 'TransferCreateUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TransferCreateUserRequest(obj: TransferCreateUserRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HomeDirectory': obj.homeDirectory,
    'HomeDirectoryType': obj.homeDirectoryType,
    'HomeDirectoryMappings': obj.homeDirectoryMappings?.map(y => toJson_TransferHomeDirectoryMapEntry(y)),
    'Policy': obj.policy,
    'PosixProfile': toJson_TransferPosixProfile(obj.posixProfile),
    'Role': obj.role,
    'ServerId': obj.serverId,
    'SshPublicKeyBody': obj.sshPublicKeyBody,
    'Tags': obj.tags?.map(y => toJson_TransferTag(y)),
    'UserName': obj.userName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TransferCreateUserResponse
 */
export interface TransferCreateUserResponse {
  /**
   * @schema TransferCreateUserResponse#ServerId
   */
  readonly serverId?: string;

  /**
   * @schema TransferCreateUserResponse#UserName
   */
  readonly userName?: string;

}

/**
 * Converts an object of type 'TransferCreateUserResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TransferCreateUserResponse(obj: TransferCreateUserResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServerId': obj.serverId,
    'UserName': obj.userName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TransferDeleteAccessRequest
 */
export interface TransferDeleteAccessRequest {
  /**
   * @schema TransferDeleteAccessRequest#ServerId
   */
  readonly serverId?: string;

  /**
   * @schema TransferDeleteAccessRequest#ExternalId
   */
  readonly externalId?: string;

}

/**
 * Converts an object of type 'TransferDeleteAccessRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TransferDeleteAccessRequest(obj: TransferDeleteAccessRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServerId': obj.serverId,
    'ExternalId': obj.externalId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TransferDeleteServerRequest
 */
export interface TransferDeleteServerRequest {
  /**
   * @schema TransferDeleteServerRequest#ServerId
   */
  readonly serverId?: string;

}

/**
 * Converts an object of type 'TransferDeleteServerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TransferDeleteServerRequest(obj: TransferDeleteServerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServerId': obj.serverId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TransferDeleteSshPublicKeyRequest
 */
export interface TransferDeleteSshPublicKeyRequest {
  /**
   * @schema TransferDeleteSshPublicKeyRequest#ServerId
   */
  readonly serverId?: string;

  /**
   * @schema TransferDeleteSshPublicKeyRequest#SshPublicKeyId
   */
  readonly sshPublicKeyId?: string;

  /**
   * @schema TransferDeleteSshPublicKeyRequest#UserName
   */
  readonly userName?: string;

}

/**
 * Converts an object of type 'TransferDeleteSshPublicKeyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TransferDeleteSshPublicKeyRequest(obj: TransferDeleteSshPublicKeyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServerId': obj.serverId,
    'SshPublicKeyId': obj.sshPublicKeyId,
    'UserName': obj.userName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TransferDeleteUserRequest
 */
export interface TransferDeleteUserRequest {
  /**
   * @schema TransferDeleteUserRequest#ServerId
   */
  readonly serverId?: string;

  /**
   * @schema TransferDeleteUserRequest#UserName
   */
  readonly userName?: string;

}

/**
 * Converts an object of type 'TransferDeleteUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TransferDeleteUserRequest(obj: TransferDeleteUserRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServerId': obj.serverId,
    'UserName': obj.userName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TransferDescribeAccessRequest
 */
export interface TransferDescribeAccessRequest {
  /**
   * @schema TransferDescribeAccessRequest#ServerId
   */
  readonly serverId?: string;

  /**
   * @schema TransferDescribeAccessRequest#ExternalId
   */
  readonly externalId?: string;

}

/**
 * Converts an object of type 'TransferDescribeAccessRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TransferDescribeAccessRequest(obj: TransferDescribeAccessRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServerId': obj.serverId,
    'ExternalId': obj.externalId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TransferDescribeAccessResponse
 */
export interface TransferDescribeAccessResponse {
  /**
   * @schema TransferDescribeAccessResponse#ServerId
   */
  readonly serverId?: string;

  /**
   * @schema TransferDescribeAccessResponse#Access
   */
  readonly access?: TransferDescribedAccess;

}

/**
 * Converts an object of type 'TransferDescribeAccessResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TransferDescribeAccessResponse(obj: TransferDescribeAccessResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServerId': obj.serverId,
    'Access': toJson_TransferDescribedAccess(obj.access),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TransferDescribeSecurityPolicyRequest
 */
export interface TransferDescribeSecurityPolicyRequest {
  /**
   * @schema TransferDescribeSecurityPolicyRequest#SecurityPolicyName
   */
  readonly securityPolicyName?: string;

}

/**
 * Converts an object of type 'TransferDescribeSecurityPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TransferDescribeSecurityPolicyRequest(obj: TransferDescribeSecurityPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SecurityPolicyName': obj.securityPolicyName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TransferDescribeSecurityPolicyResponse
 */
export interface TransferDescribeSecurityPolicyResponse {
  /**
   * @schema TransferDescribeSecurityPolicyResponse#SecurityPolicy
   */
  readonly securityPolicy?: TransferDescribedSecurityPolicy;

}

/**
 * Converts an object of type 'TransferDescribeSecurityPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TransferDescribeSecurityPolicyResponse(obj: TransferDescribeSecurityPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SecurityPolicy': toJson_TransferDescribedSecurityPolicy(obj.securityPolicy),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TransferDescribeServerRequest
 */
export interface TransferDescribeServerRequest {
  /**
   * @schema TransferDescribeServerRequest#ServerId
   */
  readonly serverId?: string;

}

/**
 * Converts an object of type 'TransferDescribeServerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TransferDescribeServerRequest(obj: TransferDescribeServerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServerId': obj.serverId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TransferDescribeServerResponse
 */
export interface TransferDescribeServerResponse {
  /**
   * @schema TransferDescribeServerResponse#Server
   */
  readonly server?: TransferDescribedServer;

}

/**
 * Converts an object of type 'TransferDescribeServerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TransferDescribeServerResponse(obj: TransferDescribeServerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Server': toJson_TransferDescribedServer(obj.server),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TransferDescribeUserRequest
 */
export interface TransferDescribeUserRequest {
  /**
   * @schema TransferDescribeUserRequest#ServerId
   */
  readonly serverId?: string;

  /**
   * @schema TransferDescribeUserRequest#UserName
   */
  readonly userName?: string;

}

/**
 * Converts an object of type 'TransferDescribeUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TransferDescribeUserRequest(obj: TransferDescribeUserRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServerId': obj.serverId,
    'UserName': obj.userName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TransferDescribeUserResponse
 */
export interface TransferDescribeUserResponse {
  /**
   * @schema TransferDescribeUserResponse#ServerId
   */
  readonly serverId?: string;

  /**
   * @schema TransferDescribeUserResponse#User
   */
  readonly user?: TransferDescribedUser;

}

/**
 * Converts an object of type 'TransferDescribeUserResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TransferDescribeUserResponse(obj: TransferDescribeUserResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServerId': obj.serverId,
    'User': toJson_TransferDescribedUser(obj.user),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TransferImportSshPublicKeyRequest
 */
export interface TransferImportSshPublicKeyRequest {
  /**
   * @schema TransferImportSshPublicKeyRequest#ServerId
   */
  readonly serverId?: string;

  /**
   * @schema TransferImportSshPublicKeyRequest#SshPublicKeyBody
   */
  readonly sshPublicKeyBody?: string;

  /**
   * @schema TransferImportSshPublicKeyRequest#UserName
   */
  readonly userName?: string;

}

/**
 * Converts an object of type 'TransferImportSshPublicKeyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TransferImportSshPublicKeyRequest(obj: TransferImportSshPublicKeyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServerId': obj.serverId,
    'SshPublicKeyBody': obj.sshPublicKeyBody,
    'UserName': obj.userName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TransferImportSshPublicKeyResponse
 */
export interface TransferImportSshPublicKeyResponse {
  /**
   * @schema TransferImportSshPublicKeyResponse#ServerId
   */
  readonly serverId?: string;

  /**
   * @schema TransferImportSshPublicKeyResponse#SshPublicKeyId
   */
  readonly sshPublicKeyId?: string;

  /**
   * @schema TransferImportSshPublicKeyResponse#UserName
   */
  readonly userName?: string;

}

/**
 * Converts an object of type 'TransferImportSshPublicKeyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TransferImportSshPublicKeyResponse(obj: TransferImportSshPublicKeyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServerId': obj.serverId,
    'SshPublicKeyId': obj.sshPublicKeyId,
    'UserName': obj.userName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TransferListAccessesRequest
 */
export interface TransferListAccessesRequest {
  /**
   * @schema TransferListAccessesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema TransferListAccessesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema TransferListAccessesRequest#ServerId
   */
  readonly serverId?: string;

}

/**
 * Converts an object of type 'TransferListAccessesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TransferListAccessesRequest(obj: TransferListAccessesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'ServerId': obj.serverId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TransferListAccessesResponse
 */
export interface TransferListAccessesResponse {
  /**
   * @schema TransferListAccessesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema TransferListAccessesResponse#ServerId
   */
  readonly serverId?: string;

  /**
   * @schema TransferListAccessesResponse#Accesses
   */
  readonly accesses?: TransferListedAccess[];

}

/**
 * Converts an object of type 'TransferListAccessesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TransferListAccessesResponse(obj: TransferListAccessesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'ServerId': obj.serverId,
    'Accesses': obj.accesses?.map(y => toJson_TransferListedAccess(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TransferListSecurityPoliciesRequest
 */
export interface TransferListSecurityPoliciesRequest {
  /**
   * @schema TransferListSecurityPoliciesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema TransferListSecurityPoliciesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'TransferListSecurityPoliciesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TransferListSecurityPoliciesRequest(obj: TransferListSecurityPoliciesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TransferListSecurityPoliciesResponse
 */
export interface TransferListSecurityPoliciesResponse {
  /**
   * @schema TransferListSecurityPoliciesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema TransferListSecurityPoliciesResponse#SecurityPolicyNames
   */
  readonly securityPolicyNames?: string[];

}

/**
 * Converts an object of type 'TransferListSecurityPoliciesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TransferListSecurityPoliciesResponse(obj: TransferListSecurityPoliciesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'SecurityPolicyNames': obj.securityPolicyNames?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TransferListServersRequest
 */
export interface TransferListServersRequest {
  /**
   * @schema TransferListServersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema TransferListServersRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'TransferListServersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TransferListServersRequest(obj: TransferListServersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TransferListServersResponse
 */
export interface TransferListServersResponse {
  /**
   * @schema TransferListServersResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema TransferListServersResponse#Servers
   */
  readonly servers?: TransferListedServer[];

}

/**
 * Converts an object of type 'TransferListServersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TransferListServersResponse(obj: TransferListServersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'Servers': obj.servers?.map(y => toJson_TransferListedServer(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TransferListTagsForResourceRequest
 */
export interface TransferListTagsForResourceRequest {
  /**
   * @schema TransferListTagsForResourceRequest#Arn
   */
  readonly arn?: string;

  /**
   * @schema TransferListTagsForResourceRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema TransferListTagsForResourceRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'TransferListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TransferListTagsForResourceRequest(obj: TransferListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TransferListTagsForResourceResponse
 */
export interface TransferListTagsForResourceResponse {
  /**
   * @schema TransferListTagsForResourceResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema TransferListTagsForResourceResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema TransferListTagsForResourceResponse#Tags
   */
  readonly tags?: TransferTag[];

}

/**
 * Converts an object of type 'TransferListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TransferListTagsForResourceResponse(obj: TransferListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'NextToken': obj.nextToken,
    'Tags': obj.tags?.map(y => toJson_TransferTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TransferListUsersRequest
 */
export interface TransferListUsersRequest {
  /**
   * @schema TransferListUsersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema TransferListUsersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema TransferListUsersRequest#ServerId
   */
  readonly serverId?: string;

}

/**
 * Converts an object of type 'TransferListUsersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TransferListUsersRequest(obj: TransferListUsersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'ServerId': obj.serverId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TransferListUsersResponse
 */
export interface TransferListUsersResponse {
  /**
   * @schema TransferListUsersResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema TransferListUsersResponse#ServerId
   */
  readonly serverId?: string;

  /**
   * @schema TransferListUsersResponse#Users
   */
  readonly users?: TransferListedUser[];

}

/**
 * Converts an object of type 'TransferListUsersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TransferListUsersResponse(obj: TransferListUsersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'ServerId': obj.serverId,
    'Users': obj.users?.map(y => toJson_TransferListedUser(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TransferStartServerRequest
 */
export interface TransferStartServerRequest {
  /**
   * @schema TransferStartServerRequest#ServerId
   */
  readonly serverId?: string;

}

/**
 * Converts an object of type 'TransferStartServerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TransferStartServerRequest(obj: TransferStartServerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServerId': obj.serverId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TransferStopServerRequest
 */
export interface TransferStopServerRequest {
  /**
   * @schema TransferStopServerRequest#ServerId
   */
  readonly serverId?: string;

}

/**
 * Converts an object of type 'TransferStopServerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TransferStopServerRequest(obj: TransferStopServerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServerId': obj.serverId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TransferTagResourceRequest
 */
export interface TransferTagResourceRequest {
  /**
   * @schema TransferTagResourceRequest#Arn
   */
  readonly arn?: string;

  /**
   * @schema TransferTagResourceRequest#Tags
   */
  readonly tags?: TransferTag[];

}

/**
 * Converts an object of type 'TransferTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TransferTagResourceRequest(obj: TransferTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Tags': obj.tags?.map(y => toJson_TransferTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TransferTestIdentityProviderRequest
 */
export interface TransferTestIdentityProviderRequest {
  /**
   * @schema TransferTestIdentityProviderRequest#ServerId
   */
  readonly serverId?: string;

  /**
   * @schema TransferTestIdentityProviderRequest#ServerProtocol
   */
  readonly serverProtocol?: string;

  /**
   * @schema TransferTestIdentityProviderRequest#SourceIp
   */
  readonly sourceIp?: string;

  /**
   * @schema TransferTestIdentityProviderRequest#UserName
   */
  readonly userName?: string;

  /**
   * @schema TransferTestIdentityProviderRequest#UserPassword
   */
  readonly userPassword?: string;

}

/**
 * Converts an object of type 'TransferTestIdentityProviderRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TransferTestIdentityProviderRequest(obj: TransferTestIdentityProviderRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServerId': obj.serverId,
    'ServerProtocol': obj.serverProtocol,
    'SourceIp': obj.sourceIp,
    'UserName': obj.userName,
    'UserPassword': obj.userPassword,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TransferTestIdentityProviderResponse
 */
export interface TransferTestIdentityProviderResponse {
  /**
   * @schema TransferTestIdentityProviderResponse#Response
   */
  readonly response?: string;

  /**
   * @schema TransferTestIdentityProviderResponse#StatusCode
   */
  readonly statusCode?: number;

  /**
   * @schema TransferTestIdentityProviderResponse#Message
   */
  readonly message?: string;

  /**
   * @schema TransferTestIdentityProviderResponse#Url
   */
  readonly url?: string;

}

/**
 * Converts an object of type 'TransferTestIdentityProviderResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TransferTestIdentityProviderResponse(obj: TransferTestIdentityProviderResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Response': obj.response,
    'StatusCode': obj.statusCode,
    'Message': obj.message,
    'Url': obj.url,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TransferUntagResourceRequest
 */
export interface TransferUntagResourceRequest {
  /**
   * @schema TransferUntagResourceRequest#Arn
   */
  readonly arn?: string;

  /**
   * @schema TransferUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'TransferUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TransferUntagResourceRequest(obj: TransferUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TransferUpdateAccessRequest
 */
export interface TransferUpdateAccessRequest {
  /**
   * @schema TransferUpdateAccessRequest#HomeDirectory
   */
  readonly homeDirectory?: string;

  /**
   * @schema TransferUpdateAccessRequest#HomeDirectoryType
   */
  readonly homeDirectoryType?: string;

  /**
   * @schema TransferUpdateAccessRequest#HomeDirectoryMappings
   */
  readonly homeDirectoryMappings?: TransferHomeDirectoryMapEntry[];

  /**
   * @schema TransferUpdateAccessRequest#Policy
   */
  readonly policy?: string;

  /**
   * @schema TransferUpdateAccessRequest#PosixProfile
   */
  readonly posixProfile?: TransferPosixProfile;

  /**
   * @schema TransferUpdateAccessRequest#Role
   */
  readonly role?: string;

  /**
   * @schema TransferUpdateAccessRequest#ServerId
   */
  readonly serverId?: string;

  /**
   * @schema TransferUpdateAccessRequest#ExternalId
   */
  readonly externalId?: string;

}

/**
 * Converts an object of type 'TransferUpdateAccessRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TransferUpdateAccessRequest(obj: TransferUpdateAccessRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HomeDirectory': obj.homeDirectory,
    'HomeDirectoryType': obj.homeDirectoryType,
    'HomeDirectoryMappings': obj.homeDirectoryMappings?.map(y => toJson_TransferHomeDirectoryMapEntry(y)),
    'Policy': obj.policy,
    'PosixProfile': toJson_TransferPosixProfile(obj.posixProfile),
    'Role': obj.role,
    'ServerId': obj.serverId,
    'ExternalId': obj.externalId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TransferUpdateAccessResponse
 */
export interface TransferUpdateAccessResponse {
  /**
   * @schema TransferUpdateAccessResponse#ServerId
   */
  readonly serverId?: string;

  /**
   * @schema TransferUpdateAccessResponse#ExternalId
   */
  readonly externalId?: string;

}

/**
 * Converts an object of type 'TransferUpdateAccessResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TransferUpdateAccessResponse(obj: TransferUpdateAccessResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServerId': obj.serverId,
    'ExternalId': obj.externalId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TransferUpdateServerRequest
 */
export interface TransferUpdateServerRequest {
  /**
   * @schema TransferUpdateServerRequest#Certificate
   */
  readonly certificate?: string;

  /**
   * @schema TransferUpdateServerRequest#ProtocolDetails
   */
  readonly protocolDetails?: TransferProtocolDetails;

  /**
   * @schema TransferUpdateServerRequest#EndpointDetails
   */
  readonly endpointDetails?: TransferEndpointDetails;

  /**
   * @schema TransferUpdateServerRequest#EndpointType
   */
  readonly endpointType?: string;

  /**
   * @schema TransferUpdateServerRequest#HostKey
   */
  readonly hostKey?: string;

  /**
   * @schema TransferUpdateServerRequest#IdentityProviderDetails
   */
  readonly identityProviderDetails?: TransferIdentityProviderDetails;

  /**
   * @schema TransferUpdateServerRequest#LoggingRole
   */
  readonly loggingRole?: string;

  /**
   * @schema TransferUpdateServerRequest#Protocols
   */
  readonly protocols?: string[];

  /**
   * @schema TransferUpdateServerRequest#SecurityPolicyName
   */
  readonly securityPolicyName?: string;

  /**
   * @schema TransferUpdateServerRequest#ServerId
   */
  readonly serverId?: string;

}

/**
 * Converts an object of type 'TransferUpdateServerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TransferUpdateServerRequest(obj: TransferUpdateServerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Certificate': obj.certificate,
    'ProtocolDetails': toJson_TransferProtocolDetails(obj.protocolDetails),
    'EndpointDetails': toJson_TransferEndpointDetails(obj.endpointDetails),
    'EndpointType': obj.endpointType,
    'HostKey': obj.hostKey,
    'IdentityProviderDetails': toJson_TransferIdentityProviderDetails(obj.identityProviderDetails),
    'LoggingRole': obj.loggingRole,
    'Protocols': obj.protocols?.map(y => y),
    'SecurityPolicyName': obj.securityPolicyName,
    'ServerId': obj.serverId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TransferUpdateServerResponse
 */
export interface TransferUpdateServerResponse {
  /**
   * @schema TransferUpdateServerResponse#ServerId
   */
  readonly serverId?: string;

}

/**
 * Converts an object of type 'TransferUpdateServerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TransferUpdateServerResponse(obj: TransferUpdateServerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServerId': obj.serverId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TransferUpdateUserRequest
 */
export interface TransferUpdateUserRequest {
  /**
   * @schema TransferUpdateUserRequest#HomeDirectory
   */
  readonly homeDirectory?: string;

  /**
   * @schema TransferUpdateUserRequest#HomeDirectoryType
   */
  readonly homeDirectoryType?: string;

  /**
   * @schema TransferUpdateUserRequest#HomeDirectoryMappings
   */
  readonly homeDirectoryMappings?: TransferHomeDirectoryMapEntry[];

  /**
   * @schema TransferUpdateUserRequest#Policy
   */
  readonly policy?: string;

  /**
   * @schema TransferUpdateUserRequest#PosixProfile
   */
  readonly posixProfile?: TransferPosixProfile;

  /**
   * @schema TransferUpdateUserRequest#Role
   */
  readonly role?: string;

  /**
   * @schema TransferUpdateUserRequest#ServerId
   */
  readonly serverId?: string;

  /**
   * @schema TransferUpdateUserRequest#UserName
   */
  readonly userName?: string;

}

/**
 * Converts an object of type 'TransferUpdateUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TransferUpdateUserRequest(obj: TransferUpdateUserRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HomeDirectory': obj.homeDirectory,
    'HomeDirectoryType': obj.homeDirectoryType,
    'HomeDirectoryMappings': obj.homeDirectoryMappings?.map(y => toJson_TransferHomeDirectoryMapEntry(y)),
    'Policy': obj.policy,
    'PosixProfile': toJson_TransferPosixProfile(obj.posixProfile),
    'Role': obj.role,
    'ServerId': obj.serverId,
    'UserName': obj.userName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TransferUpdateUserResponse
 */
export interface TransferUpdateUserResponse {
  /**
   * @schema TransferUpdateUserResponse#ServerId
   */
  readonly serverId?: string;

  /**
   * @schema TransferUpdateUserResponse#UserName
   */
  readonly userName?: string;

}

/**
 * Converts an object of type 'TransferUpdateUserResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TransferUpdateUserResponse(obj: TransferUpdateUserResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServerId': obj.serverId,
    'UserName': obj.userName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TransferHomeDirectoryMapEntry
 */
export interface TransferHomeDirectoryMapEntry {
  /**
   * @schema TransferHomeDirectoryMapEntry#Entry
   */
  readonly entry?: string;

  /**
   * @schema TransferHomeDirectoryMapEntry#Target
   */
  readonly target?: string;

}

/**
 * Converts an object of type 'TransferHomeDirectoryMapEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TransferHomeDirectoryMapEntry(obj: TransferHomeDirectoryMapEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Entry': obj.entry,
    'Target': obj.target,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TransferPosixProfile
 */
export interface TransferPosixProfile {
  /**
   * @schema TransferPosixProfile#Uid
   */
  readonly uid?: number;

  /**
   * @schema TransferPosixProfile#Gid
   */
  readonly gid?: number;

  /**
   * @schema TransferPosixProfile#SecondaryGids
   */
  readonly secondaryGids?: number[];

}

/**
 * Converts an object of type 'TransferPosixProfile' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TransferPosixProfile(obj: TransferPosixProfile | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Uid': obj.uid,
    'Gid': obj.gid,
    'SecondaryGids': obj.secondaryGids?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TransferEndpointDetails
 */
export interface TransferEndpointDetails {
  /**
   * @schema TransferEndpointDetails#AddressAllocationIds
   */
  readonly addressAllocationIds?: string[];

  /**
   * @schema TransferEndpointDetails#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema TransferEndpointDetails#VpcEndpointId
   */
  readonly vpcEndpointId?: string;

  /**
   * @schema TransferEndpointDetails#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema TransferEndpointDetails#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

}

/**
 * Converts an object of type 'TransferEndpointDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TransferEndpointDetails(obj: TransferEndpointDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AddressAllocationIds': obj.addressAllocationIds?.map(y => y),
    'SubnetIds': obj.subnetIds?.map(y => y),
    'VpcEndpointId': obj.vpcEndpointId,
    'VpcId': obj.vpcId,
    'SecurityGroupIds': obj.securityGroupIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TransferIdentityProviderDetails
 */
export interface TransferIdentityProviderDetails {
  /**
   * @schema TransferIdentityProviderDetails#Url
   */
  readonly url?: string;

  /**
   * @schema TransferIdentityProviderDetails#InvocationRole
   */
  readonly invocationRole?: string;

  /**
   * @schema TransferIdentityProviderDetails#DirectoryId
   */
  readonly directoryId?: string;

}

/**
 * Converts an object of type 'TransferIdentityProviderDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TransferIdentityProviderDetails(obj: TransferIdentityProviderDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Url': obj.url,
    'InvocationRole': obj.invocationRole,
    'DirectoryId': obj.directoryId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TransferTag
 */
export interface TransferTag {
  /**
   * @schema TransferTag#Key
   */
  readonly key?: string;

  /**
   * @schema TransferTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'TransferTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TransferTag(obj: TransferTag | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TransferDescribedAccess
 */
export interface TransferDescribedAccess {
  /**
   * @schema TransferDescribedAccess#HomeDirectory
   */
  readonly homeDirectory?: string;

  /**
   * @schema TransferDescribedAccess#HomeDirectoryMappings
   */
  readonly homeDirectoryMappings?: TransferHomeDirectoryMapEntry[];

  /**
   * @schema TransferDescribedAccess#HomeDirectoryType
   */
  readonly homeDirectoryType?: string;

  /**
   * @schema TransferDescribedAccess#Policy
   */
  readonly policy?: string;

  /**
   * @schema TransferDescribedAccess#PosixProfile
   */
  readonly posixProfile?: TransferPosixProfile;

  /**
   * @schema TransferDescribedAccess#Role
   */
  readonly role?: string;

  /**
   * @schema TransferDescribedAccess#ExternalId
   */
  readonly externalId?: string;

}

/**
 * Converts an object of type 'TransferDescribedAccess' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TransferDescribedAccess(obj: TransferDescribedAccess | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HomeDirectory': obj.homeDirectory,
    'HomeDirectoryMappings': obj.homeDirectoryMappings?.map(y => toJson_TransferHomeDirectoryMapEntry(y)),
    'HomeDirectoryType': obj.homeDirectoryType,
    'Policy': obj.policy,
    'PosixProfile': toJson_TransferPosixProfile(obj.posixProfile),
    'Role': obj.role,
    'ExternalId': obj.externalId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TransferDescribedSecurityPolicy
 */
export interface TransferDescribedSecurityPolicy {
  /**
   * @schema TransferDescribedSecurityPolicy#Fips
   */
  readonly fips?: boolean;

  /**
   * @schema TransferDescribedSecurityPolicy#SecurityPolicyName
   */
  readonly securityPolicyName?: string;

  /**
   * @schema TransferDescribedSecurityPolicy#SshCiphers
   */
  readonly sshCiphers?: string[];

  /**
   * @schema TransferDescribedSecurityPolicy#SshKexs
   */
  readonly sshKexs?: string[];

  /**
   * @schema TransferDescribedSecurityPolicy#SshMacs
   */
  readonly sshMacs?: string[];

  /**
   * @schema TransferDescribedSecurityPolicy#TlsCiphers
   */
  readonly tlsCiphers?: string[];

}

/**
 * Converts an object of type 'TransferDescribedSecurityPolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TransferDescribedSecurityPolicy(obj: TransferDescribedSecurityPolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Fips': obj.fips,
    'SecurityPolicyName': obj.securityPolicyName,
    'SshCiphers': obj.sshCiphers?.map(y => y),
    'SshKexs': obj.sshKexs?.map(y => y),
    'SshMacs': obj.sshMacs?.map(y => y),
    'TlsCiphers': obj.tlsCiphers?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TransferDescribedServer
 */
export interface TransferDescribedServer {
  /**
   * @schema TransferDescribedServer#Arn
   */
  readonly arn?: string;

  /**
   * @schema TransferDescribedServer#Certificate
   */
  readonly certificate?: string;

  /**
   * @schema TransferDescribedServer#ProtocolDetails
   */
  readonly protocolDetails?: TransferProtocolDetails;

  /**
   * @schema TransferDescribedServer#Domain
   */
  readonly domain?: string;

  /**
   * @schema TransferDescribedServer#EndpointDetails
   */
  readonly endpointDetails?: TransferEndpointDetails;

  /**
   * @schema TransferDescribedServer#EndpointType
   */
  readonly endpointType?: string;

  /**
   * @schema TransferDescribedServer#HostKeyFingerprint
   */
  readonly hostKeyFingerprint?: string;

  /**
   * @schema TransferDescribedServer#IdentityProviderDetails
   */
  readonly identityProviderDetails?: TransferIdentityProviderDetails;

  /**
   * @schema TransferDescribedServer#IdentityProviderType
   */
  readonly identityProviderType?: string;

  /**
   * @schema TransferDescribedServer#LoggingRole
   */
  readonly loggingRole?: string;

  /**
   * @schema TransferDescribedServer#Protocols
   */
  readonly protocols?: string[];

  /**
   * @schema TransferDescribedServer#SecurityPolicyName
   */
  readonly securityPolicyName?: string;

  /**
   * @schema TransferDescribedServer#ServerId
   */
  readonly serverId?: string;

  /**
   * @schema TransferDescribedServer#State
   */
  readonly state?: string;

  /**
   * @schema TransferDescribedServer#Tags
   */
  readonly tags?: TransferTag[];

  /**
   * @schema TransferDescribedServer#UserCount
   */
  readonly userCount?: number;

}

/**
 * Converts an object of type 'TransferDescribedServer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TransferDescribedServer(obj: TransferDescribedServer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Certificate': obj.certificate,
    'ProtocolDetails': toJson_TransferProtocolDetails(obj.protocolDetails),
    'Domain': obj.domain,
    'EndpointDetails': toJson_TransferEndpointDetails(obj.endpointDetails),
    'EndpointType': obj.endpointType,
    'HostKeyFingerprint': obj.hostKeyFingerprint,
    'IdentityProviderDetails': toJson_TransferIdentityProviderDetails(obj.identityProviderDetails),
    'IdentityProviderType': obj.identityProviderType,
    'LoggingRole': obj.loggingRole,
    'Protocols': obj.protocols?.map(y => y),
    'SecurityPolicyName': obj.securityPolicyName,
    'ServerId': obj.serverId,
    'State': obj.state,
    'Tags': obj.tags?.map(y => toJson_TransferTag(y)),
    'UserCount': obj.userCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TransferDescribedUser
 */
export interface TransferDescribedUser {
  /**
   * @schema TransferDescribedUser#Arn
   */
  readonly arn?: string;

  /**
   * @schema TransferDescribedUser#HomeDirectory
   */
  readonly homeDirectory?: string;

  /**
   * @schema TransferDescribedUser#HomeDirectoryMappings
   */
  readonly homeDirectoryMappings?: TransferHomeDirectoryMapEntry[];

  /**
   * @schema TransferDescribedUser#HomeDirectoryType
   */
  readonly homeDirectoryType?: string;

  /**
   * @schema TransferDescribedUser#Policy
   */
  readonly policy?: string;

  /**
   * @schema TransferDescribedUser#PosixProfile
   */
  readonly posixProfile?: TransferPosixProfile;

  /**
   * @schema TransferDescribedUser#Role
   */
  readonly role?: string;

  /**
   * @schema TransferDescribedUser#SshPublicKeys
   */
  readonly sshPublicKeys?: TransferSshPublicKey[];

  /**
   * @schema TransferDescribedUser#Tags
   */
  readonly tags?: TransferTag[];

  /**
   * @schema TransferDescribedUser#UserName
   */
  readonly userName?: string;

}

/**
 * Converts an object of type 'TransferDescribedUser' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TransferDescribedUser(obj: TransferDescribedUser | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'HomeDirectory': obj.homeDirectory,
    'HomeDirectoryMappings': obj.homeDirectoryMappings?.map(y => toJson_TransferHomeDirectoryMapEntry(y)),
    'HomeDirectoryType': obj.homeDirectoryType,
    'Policy': obj.policy,
    'PosixProfile': toJson_TransferPosixProfile(obj.posixProfile),
    'Role': obj.role,
    'SshPublicKeys': obj.sshPublicKeys?.map(y => toJson_TransferSshPublicKey(y)),
    'Tags': obj.tags?.map(y => toJson_TransferTag(y)),
    'UserName': obj.userName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TransferListedAccess
 */
export interface TransferListedAccess {
  /**
   * @schema TransferListedAccess#HomeDirectory
   */
  readonly homeDirectory?: string;

  /**
   * @schema TransferListedAccess#HomeDirectoryType
   */
  readonly homeDirectoryType?: string;

  /**
   * @schema TransferListedAccess#Role
   */
  readonly role?: string;

  /**
   * @schema TransferListedAccess#ExternalId
   */
  readonly externalId?: string;

}

/**
 * Converts an object of type 'TransferListedAccess' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TransferListedAccess(obj: TransferListedAccess | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HomeDirectory': obj.homeDirectory,
    'HomeDirectoryType': obj.homeDirectoryType,
    'Role': obj.role,
    'ExternalId': obj.externalId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TransferListedServer
 */
export interface TransferListedServer {
  /**
   * @schema TransferListedServer#Arn
   */
  readonly arn?: string;

  /**
   * @schema TransferListedServer#Domain
   */
  readonly domain?: string;

  /**
   * @schema TransferListedServer#IdentityProviderType
   */
  readonly identityProviderType?: string;

  /**
   * @schema TransferListedServer#EndpointType
   */
  readonly endpointType?: string;

  /**
   * @schema TransferListedServer#LoggingRole
   */
  readonly loggingRole?: string;

  /**
   * @schema TransferListedServer#ServerId
   */
  readonly serverId?: string;

  /**
   * @schema TransferListedServer#State
   */
  readonly state?: string;

  /**
   * @schema TransferListedServer#UserCount
   */
  readonly userCount?: number;

}

/**
 * Converts an object of type 'TransferListedServer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TransferListedServer(obj: TransferListedServer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Domain': obj.domain,
    'IdentityProviderType': obj.identityProviderType,
    'EndpointType': obj.endpointType,
    'LoggingRole': obj.loggingRole,
    'ServerId': obj.serverId,
    'State': obj.state,
    'UserCount': obj.userCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TransferListedUser
 */
export interface TransferListedUser {
  /**
   * @schema TransferListedUser#Arn
   */
  readonly arn?: string;

  /**
   * @schema TransferListedUser#HomeDirectory
   */
  readonly homeDirectory?: string;

  /**
   * @schema TransferListedUser#HomeDirectoryType
   */
  readonly homeDirectoryType?: string;

  /**
   * @schema TransferListedUser#Role
   */
  readonly role?: string;

  /**
   * @schema TransferListedUser#SshPublicKeyCount
   */
  readonly sshPublicKeyCount?: number;

  /**
   * @schema TransferListedUser#UserName
   */
  readonly userName?: string;

}

/**
 * Converts an object of type 'TransferListedUser' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TransferListedUser(obj: TransferListedUser | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'HomeDirectory': obj.homeDirectory,
    'HomeDirectoryType': obj.homeDirectoryType,
    'Role': obj.role,
    'SshPublicKeyCount': obj.sshPublicKeyCount,
    'UserName': obj.userName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TransferProtocolDetails
 */
export interface TransferProtocolDetails {
  /**
   * @schema TransferProtocolDetails#PassiveIp
   */
  readonly passiveIp?: string;

}

/**
 * Converts an object of type 'TransferProtocolDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TransferProtocolDetails(obj: TransferProtocolDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PassiveIp': obj.passiveIp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TransferSshPublicKey
 */
export interface TransferSshPublicKey {
  /**
   * @schema TransferSshPublicKey#DateImported
   */
  readonly dateImported?: string;

  /**
   * @schema TransferSshPublicKey#SshPublicKeyBody
   */
  readonly sshPublicKeyBody?: string;

  /**
   * @schema TransferSshPublicKey#SshPublicKeyId
   */
  readonly sshPublicKeyId?: string;

}

/**
 * Converts an object of type 'TransferSshPublicKey' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TransferSshPublicKey(obj: TransferSshPublicKey | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DateImported': obj.dateImported,
    'SshPublicKeyBody': obj.sshPublicKeyBody,
    'SshPublicKeyId': obj.sshPublicKeyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
