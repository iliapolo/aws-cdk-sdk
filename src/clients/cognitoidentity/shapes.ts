/**
 * @schema CognitoIdentityCreateIdentityPoolInput
 */
export interface CognitoIdentityCreateIdentityPoolInput {
  /**
   * @schema CognitoIdentityCreateIdentityPoolInput#IdentityPoolName
   */
  readonly identityPoolName?: string;

  /**
   * @schema CognitoIdentityCreateIdentityPoolInput#AllowUnauthenticatedIdentities
   */
  readonly allowUnauthenticatedIdentities?: boolean;

  /**
   * @schema CognitoIdentityCreateIdentityPoolInput#AllowClassicFlow
   */
  readonly allowClassicFlow?: boolean;

  /**
   * @schema CognitoIdentityCreateIdentityPoolInput#SupportedLoginProviders
   */
  readonly supportedLoginProviders?: { [key: string]: string };

  /**
   * @schema CognitoIdentityCreateIdentityPoolInput#DeveloperProviderName
   */
  readonly developerProviderName?: string;

  /**
   * @schema CognitoIdentityCreateIdentityPoolInput#OpenIdConnectProviderARNs
   */
  readonly openIdConnectProviderArNs?: string[];

  /**
   * @schema CognitoIdentityCreateIdentityPoolInput#CognitoIdentityProviders
   */
  readonly cognitoIdentityProviders?: CognitoIdentityCognitoIdentityProvider[];

  /**
   * @schema CognitoIdentityCreateIdentityPoolInput#SamlProviderARNs
   */
  readonly samlProviderArNs?: string[];

  /**
   * @schema CognitoIdentityCreateIdentityPoolInput#IdentityPoolTags
   */
  readonly identityPoolTags?: { [key: string]: string };

}

/**
 * Converts an object of type 'CognitoIdentityCreateIdentityPoolInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoIdentityCreateIdentityPoolInput(obj: CognitoIdentityCreateIdentityPoolInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityPoolName': obj.identityPoolName,
    'AllowUnauthenticatedIdentities': obj.allowUnauthenticatedIdentities,
    'AllowClassicFlow': obj.allowClassicFlow,
    'SupportedLoginProviders': ((obj.supportedLoginProviders) === undefined) ? undefined : (Object.entries(obj.supportedLoginProviders).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'DeveloperProviderName': obj.developerProviderName,
    'OpenIdConnectProviderARNs': obj.openIdConnectProviderArNs?.map(y => y),
    'CognitoIdentityProviders': obj.cognitoIdentityProviders?.map(y => toJson_CognitoIdentityCognitoIdentityProvider(y)),
    'SamlProviderARNs': obj.samlProviderArNs?.map(y => y),
    'IdentityPoolTags': ((obj.identityPoolTags) === undefined) ? undefined : (Object.entries(obj.identityPoolTags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoIdentityIdentityPool
 */
export interface CognitoIdentityIdentityPool {
  /**
   * @schema CognitoIdentityIdentityPool#IdentityPoolId
   */
  readonly identityPoolId?: string;

  /**
   * @schema CognitoIdentityIdentityPool#IdentityPoolName
   */
  readonly identityPoolName?: string;

  /**
   * @schema CognitoIdentityIdentityPool#AllowUnauthenticatedIdentities
   */
  readonly allowUnauthenticatedIdentities?: boolean;

  /**
   * @schema CognitoIdentityIdentityPool#AllowClassicFlow
   */
  readonly allowClassicFlow?: boolean;

  /**
   * @schema CognitoIdentityIdentityPool#SupportedLoginProviders
   */
  readonly supportedLoginProviders?: { [key: string]: string };

  /**
   * @schema CognitoIdentityIdentityPool#DeveloperProviderName
   */
  readonly developerProviderName?: string;

  /**
   * @schema CognitoIdentityIdentityPool#OpenIdConnectProviderARNs
   */
  readonly openIdConnectProviderArNs?: string[];

  /**
   * @schema CognitoIdentityIdentityPool#CognitoIdentityProviders
   */
  readonly cognitoIdentityProviders?: CognitoIdentityCognitoIdentityProvider[];

  /**
   * @schema CognitoIdentityIdentityPool#SamlProviderARNs
   */
  readonly samlProviderArNs?: string[];

  /**
   * @schema CognitoIdentityIdentityPool#IdentityPoolTags
   */
  readonly identityPoolTags?: { [key: string]: string };

}

/**
 * Converts an object of type 'CognitoIdentityIdentityPool' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoIdentityIdentityPool(obj: CognitoIdentityIdentityPool | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityPoolId': obj.identityPoolId,
    'IdentityPoolName': obj.identityPoolName,
    'AllowUnauthenticatedIdentities': obj.allowUnauthenticatedIdentities,
    'AllowClassicFlow': obj.allowClassicFlow,
    'SupportedLoginProviders': ((obj.supportedLoginProviders) === undefined) ? undefined : (Object.entries(obj.supportedLoginProviders).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'DeveloperProviderName': obj.developerProviderName,
    'OpenIdConnectProviderARNs': obj.openIdConnectProviderArNs?.map(y => y),
    'CognitoIdentityProviders': obj.cognitoIdentityProviders?.map(y => toJson_CognitoIdentityCognitoIdentityProvider(y)),
    'SamlProviderARNs': obj.samlProviderArNs?.map(y => y),
    'IdentityPoolTags': ((obj.identityPoolTags) === undefined) ? undefined : (Object.entries(obj.identityPoolTags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoIdentityDeleteIdentitiesInput
 */
export interface CognitoIdentityDeleteIdentitiesInput {
  /**
   * @schema CognitoIdentityDeleteIdentitiesInput#IdentityIdsToDelete
   */
  readonly identityIdsToDelete?: string[];

}

/**
 * Converts an object of type 'CognitoIdentityDeleteIdentitiesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoIdentityDeleteIdentitiesInput(obj: CognitoIdentityDeleteIdentitiesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityIdsToDelete': obj.identityIdsToDelete?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoIdentityDeleteIdentitiesResponse
 */
export interface CognitoIdentityDeleteIdentitiesResponse {
  /**
   * @schema CognitoIdentityDeleteIdentitiesResponse#UnprocessedIdentityIds
   */
  readonly unprocessedIdentityIds?: CognitoIdentityUnprocessedIdentityId[];

}

/**
 * Converts an object of type 'CognitoIdentityDeleteIdentitiesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoIdentityDeleteIdentitiesResponse(obj: CognitoIdentityDeleteIdentitiesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UnprocessedIdentityIds': obj.unprocessedIdentityIds?.map(y => toJson_CognitoIdentityUnprocessedIdentityId(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoIdentityDeleteIdentityPoolInput
 */
export interface CognitoIdentityDeleteIdentityPoolInput {
  /**
   * @schema CognitoIdentityDeleteIdentityPoolInput#IdentityPoolId
   */
  readonly identityPoolId?: string;

}

/**
 * Converts an object of type 'CognitoIdentityDeleteIdentityPoolInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoIdentityDeleteIdentityPoolInput(obj: CognitoIdentityDeleteIdentityPoolInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityPoolId': obj.identityPoolId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoIdentityDescribeIdentityInput
 */
export interface CognitoIdentityDescribeIdentityInput {
  /**
   * @schema CognitoIdentityDescribeIdentityInput#IdentityId
   */
  readonly identityId?: string;

}

/**
 * Converts an object of type 'CognitoIdentityDescribeIdentityInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoIdentityDescribeIdentityInput(obj: CognitoIdentityDescribeIdentityInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityId': obj.identityId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoIdentityIdentityDescription
 */
export interface CognitoIdentityIdentityDescription {
  /**
   * @schema CognitoIdentityIdentityDescription#IdentityId
   */
  readonly identityId?: string;

  /**
   * @schema CognitoIdentityIdentityDescription#Logins
   */
  readonly logins?: string[];

  /**
   * @schema CognitoIdentityIdentityDescription#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema CognitoIdentityIdentityDescription#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

}

/**
 * Converts an object of type 'CognitoIdentityIdentityDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoIdentityIdentityDescription(obj: CognitoIdentityIdentityDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityId': obj.identityId,
    'Logins': obj.logins?.map(y => y),
    'CreationDate': obj.creationDate,
    'LastModifiedDate': obj.lastModifiedDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoIdentityDescribeIdentityPoolInput
 */
export interface CognitoIdentityDescribeIdentityPoolInput {
  /**
   * @schema CognitoIdentityDescribeIdentityPoolInput#IdentityPoolId
   */
  readonly identityPoolId?: string;

}

/**
 * Converts an object of type 'CognitoIdentityDescribeIdentityPoolInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoIdentityDescribeIdentityPoolInput(obj: CognitoIdentityDescribeIdentityPoolInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityPoolId': obj.identityPoolId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoIdentityGetCredentialsForIdentityInput
 */
export interface CognitoIdentityGetCredentialsForIdentityInput {
  /**
   * @schema CognitoIdentityGetCredentialsForIdentityInput#IdentityId
   */
  readonly identityId?: string;

  /**
   * @schema CognitoIdentityGetCredentialsForIdentityInput#Logins
   */
  readonly logins?: { [key: string]: string };

  /**
   * @schema CognitoIdentityGetCredentialsForIdentityInput#CustomRoleArn
   */
  readonly customRoleArn?: string;

}

/**
 * Converts an object of type 'CognitoIdentityGetCredentialsForIdentityInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoIdentityGetCredentialsForIdentityInput(obj: CognitoIdentityGetCredentialsForIdentityInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityId': obj.identityId,
    'Logins': ((obj.logins) === undefined) ? undefined : (Object.entries(obj.logins).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'CustomRoleArn': obj.customRoleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoIdentityGetCredentialsForIdentityResponse
 */
export interface CognitoIdentityGetCredentialsForIdentityResponse {
  /**
   * @schema CognitoIdentityGetCredentialsForIdentityResponse#IdentityId
   */
  readonly identityId?: string;

  /**
   * @schema CognitoIdentityGetCredentialsForIdentityResponse#Credentials
   */
  readonly credentials?: CognitoIdentityCredentials;

}

/**
 * Converts an object of type 'CognitoIdentityGetCredentialsForIdentityResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoIdentityGetCredentialsForIdentityResponse(obj: CognitoIdentityGetCredentialsForIdentityResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityId': obj.identityId,
    'Credentials': toJson_CognitoIdentityCredentials(obj.credentials),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoIdentityGetIdInput
 */
export interface CognitoIdentityGetIdInput {
  /**
   * @schema CognitoIdentityGetIdInput#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema CognitoIdentityGetIdInput#IdentityPoolId
   */
  readonly identityPoolId?: string;

  /**
   * @schema CognitoIdentityGetIdInput#Logins
   */
  readonly logins?: { [key: string]: string };

}

/**
 * Converts an object of type 'CognitoIdentityGetIdInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoIdentityGetIdInput(obj: CognitoIdentityGetIdInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'IdentityPoolId': obj.identityPoolId,
    'Logins': ((obj.logins) === undefined) ? undefined : (Object.entries(obj.logins).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoIdentityGetIdResponse
 */
export interface CognitoIdentityGetIdResponse {
  /**
   * @schema CognitoIdentityGetIdResponse#IdentityId
   */
  readonly identityId?: string;

}

/**
 * Converts an object of type 'CognitoIdentityGetIdResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoIdentityGetIdResponse(obj: CognitoIdentityGetIdResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityId': obj.identityId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoIdentityGetIdentityPoolRolesInput
 */
export interface CognitoIdentityGetIdentityPoolRolesInput {
  /**
   * @schema CognitoIdentityGetIdentityPoolRolesInput#IdentityPoolId
   */
  readonly identityPoolId?: string;

}

/**
 * Converts an object of type 'CognitoIdentityGetIdentityPoolRolesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoIdentityGetIdentityPoolRolesInput(obj: CognitoIdentityGetIdentityPoolRolesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityPoolId': obj.identityPoolId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoIdentityGetIdentityPoolRolesResponse
 */
export interface CognitoIdentityGetIdentityPoolRolesResponse {
  /**
   * @schema CognitoIdentityGetIdentityPoolRolesResponse#IdentityPoolId
   */
  readonly identityPoolId?: string;

  /**
   * @schema CognitoIdentityGetIdentityPoolRolesResponse#Roles
   */
  readonly roles?: { [key: string]: string };

  /**
   * @schema CognitoIdentityGetIdentityPoolRolesResponse#RoleMappings
   */
  readonly roleMappings?: { [key: string]: CognitoIdentityRoleMapping };

}

/**
 * Converts an object of type 'CognitoIdentityGetIdentityPoolRolesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoIdentityGetIdentityPoolRolesResponse(obj: CognitoIdentityGetIdentityPoolRolesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityPoolId': obj.identityPoolId,
    'Roles': ((obj.roles) === undefined) ? undefined : (Object.entries(obj.roles).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'RoleMappings': ((obj.roleMappings) === undefined) ? undefined : (Object.entries(obj.roleMappings).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_CognitoIdentityRoleMapping(i[1]) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoIdentityGetOpenIdTokenInput
 */
export interface CognitoIdentityGetOpenIdTokenInput {
  /**
   * @schema CognitoIdentityGetOpenIdTokenInput#IdentityId
   */
  readonly identityId?: string;

  /**
   * @schema CognitoIdentityGetOpenIdTokenInput#Logins
   */
  readonly logins?: { [key: string]: string };

}

/**
 * Converts an object of type 'CognitoIdentityGetOpenIdTokenInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoIdentityGetOpenIdTokenInput(obj: CognitoIdentityGetOpenIdTokenInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityId': obj.identityId,
    'Logins': ((obj.logins) === undefined) ? undefined : (Object.entries(obj.logins).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoIdentityGetOpenIdTokenResponse
 */
export interface CognitoIdentityGetOpenIdTokenResponse {
  /**
   * @schema CognitoIdentityGetOpenIdTokenResponse#IdentityId
   */
  readonly identityId?: string;

  /**
   * @schema CognitoIdentityGetOpenIdTokenResponse#Token
   */
  readonly token?: string;

}

/**
 * Converts an object of type 'CognitoIdentityGetOpenIdTokenResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoIdentityGetOpenIdTokenResponse(obj: CognitoIdentityGetOpenIdTokenResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityId': obj.identityId,
    'Token': obj.token,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoIdentityGetOpenIdTokenForDeveloperIdentityInput
 */
export interface CognitoIdentityGetOpenIdTokenForDeveloperIdentityInput {
  /**
   * @schema CognitoIdentityGetOpenIdTokenForDeveloperIdentityInput#IdentityPoolId
   */
  readonly identityPoolId?: string;

  /**
   * @schema CognitoIdentityGetOpenIdTokenForDeveloperIdentityInput#IdentityId
   */
  readonly identityId?: string;

  /**
   * @schema CognitoIdentityGetOpenIdTokenForDeveloperIdentityInput#Logins
   */
  readonly logins?: { [key: string]: string };

  /**
   * @schema CognitoIdentityGetOpenIdTokenForDeveloperIdentityInput#PrincipalTags
   */
  readonly principalTags?: { [key: string]: string };

  /**
   * @schema CognitoIdentityGetOpenIdTokenForDeveloperIdentityInput#TokenDuration
   */
  readonly tokenDuration?: number;

}

/**
 * Converts an object of type 'CognitoIdentityGetOpenIdTokenForDeveloperIdentityInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoIdentityGetOpenIdTokenForDeveloperIdentityInput(obj: CognitoIdentityGetOpenIdTokenForDeveloperIdentityInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityPoolId': obj.identityPoolId,
    'IdentityId': obj.identityId,
    'Logins': ((obj.logins) === undefined) ? undefined : (Object.entries(obj.logins).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'PrincipalTags': ((obj.principalTags) === undefined) ? undefined : (Object.entries(obj.principalTags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'TokenDuration': obj.tokenDuration,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoIdentityGetOpenIdTokenForDeveloperIdentityResponse
 */
export interface CognitoIdentityGetOpenIdTokenForDeveloperIdentityResponse {
  /**
   * @schema CognitoIdentityGetOpenIdTokenForDeveloperIdentityResponse#IdentityId
   */
  readonly identityId?: string;

  /**
   * @schema CognitoIdentityGetOpenIdTokenForDeveloperIdentityResponse#Token
   */
  readonly token?: string;

}

/**
 * Converts an object of type 'CognitoIdentityGetOpenIdTokenForDeveloperIdentityResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoIdentityGetOpenIdTokenForDeveloperIdentityResponse(obj: CognitoIdentityGetOpenIdTokenForDeveloperIdentityResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityId': obj.identityId,
    'Token': obj.token,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoIdentityGetPrincipalTagAttributeMapInput
 */
export interface CognitoIdentityGetPrincipalTagAttributeMapInput {
  /**
   * @schema CognitoIdentityGetPrincipalTagAttributeMapInput#IdentityPoolId
   */
  readonly identityPoolId?: string;

  /**
   * @schema CognitoIdentityGetPrincipalTagAttributeMapInput#IdentityProviderName
   */
  readonly identityProviderName?: string;

}

/**
 * Converts an object of type 'CognitoIdentityGetPrincipalTagAttributeMapInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoIdentityGetPrincipalTagAttributeMapInput(obj: CognitoIdentityGetPrincipalTagAttributeMapInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityPoolId': obj.identityPoolId,
    'IdentityProviderName': obj.identityProviderName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoIdentityGetPrincipalTagAttributeMapResponse
 */
export interface CognitoIdentityGetPrincipalTagAttributeMapResponse {
  /**
   * @schema CognitoIdentityGetPrincipalTagAttributeMapResponse#IdentityPoolId
   */
  readonly identityPoolId?: string;

  /**
   * @schema CognitoIdentityGetPrincipalTagAttributeMapResponse#IdentityProviderName
   */
  readonly identityProviderName?: string;

  /**
   * @schema CognitoIdentityGetPrincipalTagAttributeMapResponse#UseDefaults
   */
  readonly useDefaults?: boolean;

  /**
   * @schema CognitoIdentityGetPrincipalTagAttributeMapResponse#PrincipalTags
   */
  readonly principalTags?: { [key: string]: string };

}

/**
 * Converts an object of type 'CognitoIdentityGetPrincipalTagAttributeMapResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoIdentityGetPrincipalTagAttributeMapResponse(obj: CognitoIdentityGetPrincipalTagAttributeMapResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityPoolId': obj.identityPoolId,
    'IdentityProviderName': obj.identityProviderName,
    'UseDefaults': obj.useDefaults,
    'PrincipalTags': ((obj.principalTags) === undefined) ? undefined : (Object.entries(obj.principalTags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoIdentityListIdentitiesInput
 */
export interface CognitoIdentityListIdentitiesInput {
  /**
   * @schema CognitoIdentityListIdentitiesInput#IdentityPoolId
   */
  readonly identityPoolId?: string;

  /**
   * @schema CognitoIdentityListIdentitiesInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CognitoIdentityListIdentitiesInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CognitoIdentityListIdentitiesInput#HideDisabled
   */
  readonly hideDisabled?: boolean;

}

/**
 * Converts an object of type 'CognitoIdentityListIdentitiesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoIdentityListIdentitiesInput(obj: CognitoIdentityListIdentitiesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityPoolId': obj.identityPoolId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'HideDisabled': obj.hideDisabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoIdentityListIdentitiesResponse
 */
export interface CognitoIdentityListIdentitiesResponse {
  /**
   * @schema CognitoIdentityListIdentitiesResponse#IdentityPoolId
   */
  readonly identityPoolId?: string;

  /**
   * @schema CognitoIdentityListIdentitiesResponse#Identities
   */
  readonly identities?: CognitoIdentityIdentityDescription[];

  /**
   * @schema CognitoIdentityListIdentitiesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CognitoIdentityListIdentitiesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoIdentityListIdentitiesResponse(obj: CognitoIdentityListIdentitiesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityPoolId': obj.identityPoolId,
    'Identities': obj.identities?.map(y => toJson_CognitoIdentityIdentityDescription(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoIdentityListIdentityPoolsInput
 */
export interface CognitoIdentityListIdentityPoolsInput {
  /**
   * @schema CognitoIdentityListIdentityPoolsInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CognitoIdentityListIdentityPoolsInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CognitoIdentityListIdentityPoolsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoIdentityListIdentityPoolsInput(obj: CognitoIdentityListIdentityPoolsInput | undefined): Record<string, any> | undefined {
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
 * @schema CognitoIdentityListIdentityPoolsResponse
 */
export interface CognitoIdentityListIdentityPoolsResponse {
  /**
   * @schema CognitoIdentityListIdentityPoolsResponse#IdentityPools
   */
  readonly identityPools?: CognitoIdentityIdentityPoolShortDescription[];

  /**
   * @schema CognitoIdentityListIdentityPoolsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CognitoIdentityListIdentityPoolsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoIdentityListIdentityPoolsResponse(obj: CognitoIdentityListIdentityPoolsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityPools': obj.identityPools?.map(y => toJson_CognitoIdentityIdentityPoolShortDescription(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoIdentityListTagsForResourceInput
 */
export interface CognitoIdentityListTagsForResourceInput {
  /**
   * @schema CognitoIdentityListTagsForResourceInput#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'CognitoIdentityListTagsForResourceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoIdentityListTagsForResourceInput(obj: CognitoIdentityListTagsForResourceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoIdentityListTagsForResourceResponse
 */
export interface CognitoIdentityListTagsForResourceResponse {
  /**
   * @schema CognitoIdentityListTagsForResourceResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'CognitoIdentityListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoIdentityListTagsForResourceResponse(obj: CognitoIdentityListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoIdentityLookupDeveloperIdentityInput
 */
export interface CognitoIdentityLookupDeveloperIdentityInput {
  /**
   * @schema CognitoIdentityLookupDeveloperIdentityInput#IdentityPoolId
   */
  readonly identityPoolId?: string;

  /**
   * @schema CognitoIdentityLookupDeveloperIdentityInput#IdentityId
   */
  readonly identityId?: string;

  /**
   * @schema CognitoIdentityLookupDeveloperIdentityInput#DeveloperUserIdentifier
   */
  readonly developerUserIdentifier?: string;

  /**
   * @schema CognitoIdentityLookupDeveloperIdentityInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CognitoIdentityLookupDeveloperIdentityInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CognitoIdentityLookupDeveloperIdentityInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoIdentityLookupDeveloperIdentityInput(obj: CognitoIdentityLookupDeveloperIdentityInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityPoolId': obj.identityPoolId,
    'IdentityId': obj.identityId,
    'DeveloperUserIdentifier': obj.developerUserIdentifier,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoIdentityLookupDeveloperIdentityResponse
 */
export interface CognitoIdentityLookupDeveloperIdentityResponse {
  /**
   * @schema CognitoIdentityLookupDeveloperIdentityResponse#IdentityId
   */
  readonly identityId?: string;

  /**
   * @schema CognitoIdentityLookupDeveloperIdentityResponse#DeveloperUserIdentifierList
   */
  readonly developerUserIdentifierList?: string[];

  /**
   * @schema CognitoIdentityLookupDeveloperIdentityResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CognitoIdentityLookupDeveloperIdentityResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoIdentityLookupDeveloperIdentityResponse(obj: CognitoIdentityLookupDeveloperIdentityResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityId': obj.identityId,
    'DeveloperUserIdentifierList': obj.developerUserIdentifierList?.map(y => y),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoIdentityMergeDeveloperIdentitiesInput
 */
export interface CognitoIdentityMergeDeveloperIdentitiesInput {
  /**
   * @schema CognitoIdentityMergeDeveloperIdentitiesInput#SourceUserIdentifier
   */
  readonly sourceUserIdentifier?: string;

  /**
   * @schema CognitoIdentityMergeDeveloperIdentitiesInput#DestinationUserIdentifier
   */
  readonly destinationUserIdentifier?: string;

  /**
   * @schema CognitoIdentityMergeDeveloperIdentitiesInput#DeveloperProviderName
   */
  readonly developerProviderName?: string;

  /**
   * @schema CognitoIdentityMergeDeveloperIdentitiesInput#IdentityPoolId
   */
  readonly identityPoolId?: string;

}

/**
 * Converts an object of type 'CognitoIdentityMergeDeveloperIdentitiesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoIdentityMergeDeveloperIdentitiesInput(obj: CognitoIdentityMergeDeveloperIdentitiesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceUserIdentifier': obj.sourceUserIdentifier,
    'DestinationUserIdentifier': obj.destinationUserIdentifier,
    'DeveloperProviderName': obj.developerProviderName,
    'IdentityPoolId': obj.identityPoolId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoIdentityMergeDeveloperIdentitiesResponse
 */
export interface CognitoIdentityMergeDeveloperIdentitiesResponse {
  /**
   * @schema CognitoIdentityMergeDeveloperIdentitiesResponse#IdentityId
   */
  readonly identityId?: string;

}

/**
 * Converts an object of type 'CognitoIdentityMergeDeveloperIdentitiesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoIdentityMergeDeveloperIdentitiesResponse(obj: CognitoIdentityMergeDeveloperIdentitiesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityId': obj.identityId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoIdentitySetIdentityPoolRolesInput
 */
export interface CognitoIdentitySetIdentityPoolRolesInput {
  /**
   * @schema CognitoIdentitySetIdentityPoolRolesInput#IdentityPoolId
   */
  readonly identityPoolId?: string;

  /**
   * @schema CognitoIdentitySetIdentityPoolRolesInput#Roles
   */
  readonly roles?: { [key: string]: string };

  /**
   * @schema CognitoIdentitySetIdentityPoolRolesInput#RoleMappings
   */
  readonly roleMappings?: { [key: string]: CognitoIdentityRoleMapping };

}

/**
 * Converts an object of type 'CognitoIdentitySetIdentityPoolRolesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoIdentitySetIdentityPoolRolesInput(obj: CognitoIdentitySetIdentityPoolRolesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityPoolId': obj.identityPoolId,
    'Roles': ((obj.roles) === undefined) ? undefined : (Object.entries(obj.roles).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'RoleMappings': ((obj.roleMappings) === undefined) ? undefined : (Object.entries(obj.roleMappings).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_CognitoIdentityRoleMapping(i[1]) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoIdentitySetPrincipalTagAttributeMapInput
 */
export interface CognitoIdentitySetPrincipalTagAttributeMapInput {
  /**
   * @schema CognitoIdentitySetPrincipalTagAttributeMapInput#IdentityPoolId
   */
  readonly identityPoolId?: string;

  /**
   * @schema CognitoIdentitySetPrincipalTagAttributeMapInput#IdentityProviderName
   */
  readonly identityProviderName?: string;

  /**
   * @schema CognitoIdentitySetPrincipalTagAttributeMapInput#UseDefaults
   */
  readonly useDefaults?: boolean;

  /**
   * @schema CognitoIdentitySetPrincipalTagAttributeMapInput#PrincipalTags
   */
  readonly principalTags?: { [key: string]: string };

}

/**
 * Converts an object of type 'CognitoIdentitySetPrincipalTagAttributeMapInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoIdentitySetPrincipalTagAttributeMapInput(obj: CognitoIdentitySetPrincipalTagAttributeMapInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityPoolId': obj.identityPoolId,
    'IdentityProviderName': obj.identityProviderName,
    'UseDefaults': obj.useDefaults,
    'PrincipalTags': ((obj.principalTags) === undefined) ? undefined : (Object.entries(obj.principalTags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoIdentitySetPrincipalTagAttributeMapResponse
 */
export interface CognitoIdentitySetPrincipalTagAttributeMapResponse {
  /**
   * @schema CognitoIdentitySetPrincipalTagAttributeMapResponse#IdentityPoolId
   */
  readonly identityPoolId?: string;

  /**
   * @schema CognitoIdentitySetPrincipalTagAttributeMapResponse#IdentityProviderName
   */
  readonly identityProviderName?: string;

  /**
   * @schema CognitoIdentitySetPrincipalTagAttributeMapResponse#UseDefaults
   */
  readonly useDefaults?: boolean;

  /**
   * @schema CognitoIdentitySetPrincipalTagAttributeMapResponse#PrincipalTags
   */
  readonly principalTags?: { [key: string]: string };

}

/**
 * Converts an object of type 'CognitoIdentitySetPrincipalTagAttributeMapResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoIdentitySetPrincipalTagAttributeMapResponse(obj: CognitoIdentitySetPrincipalTagAttributeMapResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityPoolId': obj.identityPoolId,
    'IdentityProviderName': obj.identityProviderName,
    'UseDefaults': obj.useDefaults,
    'PrincipalTags': ((obj.principalTags) === undefined) ? undefined : (Object.entries(obj.principalTags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoIdentityTagResourceInput
 */
export interface CognitoIdentityTagResourceInput {
  /**
   * @schema CognitoIdentityTagResourceInput#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema CognitoIdentityTagResourceInput#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'CognitoIdentityTagResourceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoIdentityTagResourceInput(obj: CognitoIdentityTagResourceInput | undefined): Record<string, any> | undefined {
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
 * @schema CognitoIdentityTagResourceResponse
 */
export interface CognitoIdentityTagResourceResponse {
}

/**
 * Converts an object of type 'CognitoIdentityTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoIdentityTagResourceResponse(obj: CognitoIdentityTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoIdentityUnlinkDeveloperIdentityInput
 */
export interface CognitoIdentityUnlinkDeveloperIdentityInput {
  /**
   * @schema CognitoIdentityUnlinkDeveloperIdentityInput#IdentityId
   */
  readonly identityId?: string;

  /**
   * @schema CognitoIdentityUnlinkDeveloperIdentityInput#IdentityPoolId
   */
  readonly identityPoolId?: string;

  /**
   * @schema CognitoIdentityUnlinkDeveloperIdentityInput#DeveloperProviderName
   */
  readonly developerProviderName?: string;

  /**
   * @schema CognitoIdentityUnlinkDeveloperIdentityInput#DeveloperUserIdentifier
   */
  readonly developerUserIdentifier?: string;

}

/**
 * Converts an object of type 'CognitoIdentityUnlinkDeveloperIdentityInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoIdentityUnlinkDeveloperIdentityInput(obj: CognitoIdentityUnlinkDeveloperIdentityInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityId': obj.identityId,
    'IdentityPoolId': obj.identityPoolId,
    'DeveloperProviderName': obj.developerProviderName,
    'DeveloperUserIdentifier': obj.developerUserIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoIdentityUnlinkIdentityInput
 */
export interface CognitoIdentityUnlinkIdentityInput {
  /**
   * @schema CognitoIdentityUnlinkIdentityInput#IdentityId
   */
  readonly identityId?: string;

  /**
   * @schema CognitoIdentityUnlinkIdentityInput#Logins
   */
  readonly logins?: { [key: string]: string };

  /**
   * @schema CognitoIdentityUnlinkIdentityInput#LoginsToRemove
   */
  readonly loginsToRemove?: string[];

}

/**
 * Converts an object of type 'CognitoIdentityUnlinkIdentityInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoIdentityUnlinkIdentityInput(obj: CognitoIdentityUnlinkIdentityInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityId': obj.identityId,
    'Logins': ((obj.logins) === undefined) ? undefined : (Object.entries(obj.logins).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'LoginsToRemove': obj.loginsToRemove?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoIdentityUntagResourceInput
 */
export interface CognitoIdentityUntagResourceInput {
  /**
   * @schema CognitoIdentityUntagResourceInput#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema CognitoIdentityUntagResourceInput#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'CognitoIdentityUntagResourceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoIdentityUntagResourceInput(obj: CognitoIdentityUntagResourceInput | undefined): Record<string, any> | undefined {
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
 * @schema CognitoIdentityUntagResourceResponse
 */
export interface CognitoIdentityUntagResourceResponse {
}

/**
 * Converts an object of type 'CognitoIdentityUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoIdentityUntagResourceResponse(obj: CognitoIdentityUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoIdentityCognitoIdentityProvider
 */
export interface CognitoIdentityCognitoIdentityProvider {
  /**
   * @schema CognitoIdentityCognitoIdentityProvider#ProviderName
   */
  readonly providerName?: string;

  /**
   * @schema CognitoIdentityCognitoIdentityProvider#ClientId
   */
  readonly clientId?: string;

  /**
   * @schema CognitoIdentityCognitoIdentityProvider#ServerSideTokenCheck
   */
  readonly serverSideTokenCheck?: boolean;

}

/**
 * Converts an object of type 'CognitoIdentityCognitoIdentityProvider' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoIdentityCognitoIdentityProvider(obj: CognitoIdentityCognitoIdentityProvider | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProviderName': obj.providerName,
    'ClientId': obj.clientId,
    'ServerSideTokenCheck': obj.serverSideTokenCheck,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoIdentityUnprocessedIdentityId
 */
export interface CognitoIdentityUnprocessedIdentityId {
  /**
   * @schema CognitoIdentityUnprocessedIdentityId#IdentityId
   */
  readonly identityId?: string;

  /**
   * @schema CognitoIdentityUnprocessedIdentityId#ErrorCode
   */
  readonly errorCode?: string;

}

/**
 * Converts an object of type 'CognitoIdentityUnprocessedIdentityId' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoIdentityUnprocessedIdentityId(obj: CognitoIdentityUnprocessedIdentityId | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityId': obj.identityId,
    'ErrorCode': obj.errorCode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoIdentityCredentials
 */
export interface CognitoIdentityCredentials {
  /**
   * @schema CognitoIdentityCredentials#AccessKeyId
   */
  readonly accessKeyId?: string;

  /**
   * @schema CognitoIdentityCredentials#SecretKey
   */
  readonly secretKey?: string;

  /**
   * @schema CognitoIdentityCredentials#SessionToken
   */
  readonly sessionToken?: string;

  /**
   * @schema CognitoIdentityCredentials#Expiration
   */
  readonly expiration?: string;

}

/**
 * Converts an object of type 'CognitoIdentityCredentials' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoIdentityCredentials(obj: CognitoIdentityCredentials | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccessKeyId': obj.accessKeyId,
    'SecretKey': obj.secretKey,
    'SessionToken': obj.sessionToken,
    'Expiration': obj.expiration,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoIdentityRoleMapping
 */
export interface CognitoIdentityRoleMapping {
  /**
   * @schema CognitoIdentityRoleMapping#Type
   */
  readonly type?: string;

  /**
   * @schema CognitoIdentityRoleMapping#AmbiguousRoleResolution
   */
  readonly ambiguousRoleResolution?: string;

  /**
   * @schema CognitoIdentityRoleMapping#RulesConfiguration
   */
  readonly rulesConfiguration?: CognitoIdentityRulesConfigurationType;

}

/**
 * Converts an object of type 'CognitoIdentityRoleMapping' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoIdentityRoleMapping(obj: CognitoIdentityRoleMapping | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'AmbiguousRoleResolution': obj.ambiguousRoleResolution,
    'RulesConfiguration': toJson_CognitoIdentityRulesConfigurationType(obj.rulesConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoIdentityIdentityPoolShortDescription
 */
export interface CognitoIdentityIdentityPoolShortDescription {
  /**
   * @schema CognitoIdentityIdentityPoolShortDescription#IdentityPoolId
   */
  readonly identityPoolId?: string;

  /**
   * @schema CognitoIdentityIdentityPoolShortDescription#IdentityPoolName
   */
  readonly identityPoolName?: string;

}

/**
 * Converts an object of type 'CognitoIdentityIdentityPoolShortDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoIdentityIdentityPoolShortDescription(obj: CognitoIdentityIdentityPoolShortDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityPoolId': obj.identityPoolId,
    'IdentityPoolName': obj.identityPoolName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoIdentityRulesConfigurationType
 */
export interface CognitoIdentityRulesConfigurationType {
  /**
   * @schema CognitoIdentityRulesConfigurationType#Rules
   */
  readonly rules?: CognitoIdentityMappingRule[];

}

/**
 * Converts an object of type 'CognitoIdentityRulesConfigurationType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoIdentityRulesConfigurationType(obj: CognitoIdentityRulesConfigurationType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Rules': obj.rules?.map(y => toJson_CognitoIdentityMappingRule(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CognitoIdentityMappingRule
 */
export interface CognitoIdentityMappingRule {
  /**
   * @schema CognitoIdentityMappingRule#Claim
   */
  readonly claim?: string;

  /**
   * @schema CognitoIdentityMappingRule#MatchType
   */
  readonly matchType?: string;

  /**
   * @schema CognitoIdentityMappingRule#Value
   */
  readonly value?: string;

  /**
   * @schema CognitoIdentityMappingRule#RoleARN
   */
  readonly roleArn?: string;

}

/**
 * Converts an object of type 'CognitoIdentityMappingRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CognitoIdentityMappingRule(obj: CognitoIdentityMappingRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Claim': obj.claim,
    'MatchType': obj.matchType,
    'Value': obj.value,
    'RoleARN': obj.roleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
