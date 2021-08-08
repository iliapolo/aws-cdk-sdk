/**
 * @schema StsAssumeRoleRequest
 */
export interface StsAssumeRoleRequest {
  /**
   * @schema StsAssumeRoleRequest#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema StsAssumeRoleRequest#RoleSessionName
   */
  readonly roleSessionName?: string;

  /**
   * @schema StsAssumeRoleRequest#PolicyArns
   */
  readonly policyArns?: StsPolicyDescriptorType[];

  /**
   * @schema StsAssumeRoleRequest#Policy
   */
  readonly policy?: string;

  /**
   * @schema StsAssumeRoleRequest#DurationSeconds
   */
  readonly durationSeconds?: number;

  /**
   * @schema StsAssumeRoleRequest#Tags
   */
  readonly tags?: StsTag[];

  /**
   * @schema StsAssumeRoleRequest#TransitiveTagKeys
   */
  readonly transitiveTagKeys?: string[];

  /**
   * @schema StsAssumeRoleRequest#ExternalId
   */
  readonly externalId?: string;

  /**
   * @schema StsAssumeRoleRequest#SerialNumber
   */
  readonly serialNumber?: string;

  /**
   * @schema StsAssumeRoleRequest#TokenCode
   */
  readonly tokenCode?: string;

  /**
   * @schema StsAssumeRoleRequest#SourceIdentity
   */
  readonly sourceIdentity?: string;

}

/**
 * Converts an object of type 'StsAssumeRoleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StsAssumeRoleRequest(obj: StsAssumeRoleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoleArn': obj.roleArn,
    'RoleSessionName': obj.roleSessionName,
    'PolicyArns': obj.policyArns?.map(y => toJson_StsPolicyDescriptorType(y)),
    'Policy': obj.policy,
    'DurationSeconds': obj.durationSeconds,
    'Tags': obj.tags?.map(y => toJson_StsTag(y)),
    'TransitiveTagKeys': obj.transitiveTagKeys?.map(y => y),
    'ExternalId': obj.externalId,
    'SerialNumber': obj.serialNumber,
    'TokenCode': obj.tokenCode,
    'SourceIdentity': obj.sourceIdentity,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StsAssumeRoleResponse
 */
export interface StsAssumeRoleResponse {
  /**
   * @schema StsAssumeRoleResponse#Credentials
   */
  readonly credentials?: StsCredentials;

  /**
   * @schema StsAssumeRoleResponse#AssumedRoleUser
   */
  readonly assumedRoleUser?: StsAssumedRoleUser;

  /**
   * @schema StsAssumeRoleResponse#PackedPolicySize
   */
  readonly packedPolicySize?: number;

  /**
   * @schema StsAssumeRoleResponse#SourceIdentity
   */
  readonly sourceIdentity?: string;

}

/**
 * Converts an object of type 'StsAssumeRoleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StsAssumeRoleResponse(obj: StsAssumeRoleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Credentials': toJson_StsCredentials(obj.credentials),
    'AssumedRoleUser': toJson_StsAssumedRoleUser(obj.assumedRoleUser),
    'PackedPolicySize': obj.packedPolicySize,
    'SourceIdentity': obj.sourceIdentity,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StsAssumeRoleWithSamlRequest
 */
export interface StsAssumeRoleWithSamlRequest {
  /**
   * @schema StsAssumeRoleWithSamlRequest#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema StsAssumeRoleWithSamlRequest#PrincipalArn
   */
  readonly principalArn?: string;

  /**
   * @schema StsAssumeRoleWithSamlRequest#SAMLAssertion
   */
  readonly samlAssertion?: string;

  /**
   * @schema StsAssumeRoleWithSamlRequest#PolicyArns
   */
  readonly policyArns?: StsPolicyDescriptorType[];

  /**
   * @schema StsAssumeRoleWithSamlRequest#Policy
   */
  readonly policy?: string;

  /**
   * @schema StsAssumeRoleWithSamlRequest#DurationSeconds
   */
  readonly durationSeconds?: number;

}

/**
 * Converts an object of type 'StsAssumeRoleWithSamlRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StsAssumeRoleWithSamlRequest(obj: StsAssumeRoleWithSamlRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoleArn': obj.roleArn,
    'PrincipalArn': obj.principalArn,
    'SAMLAssertion': obj.samlAssertion,
    'PolicyArns': obj.policyArns?.map(y => toJson_StsPolicyDescriptorType(y)),
    'Policy': obj.policy,
    'DurationSeconds': obj.durationSeconds,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StsAssumeRoleWithSamlResponse
 */
export interface StsAssumeRoleWithSamlResponse {
  /**
   * @schema StsAssumeRoleWithSamlResponse#Credentials
   */
  readonly credentials?: StsCredentials;

  /**
   * @schema StsAssumeRoleWithSamlResponse#AssumedRoleUser
   */
  readonly assumedRoleUser?: StsAssumedRoleUser;

  /**
   * @schema StsAssumeRoleWithSamlResponse#PackedPolicySize
   */
  readonly packedPolicySize?: number;

  /**
   * @schema StsAssumeRoleWithSamlResponse#Subject
   */
  readonly subject?: string;

  /**
   * @schema StsAssumeRoleWithSamlResponse#SubjectType
   */
  readonly subjectType?: string;

  /**
   * @schema StsAssumeRoleWithSamlResponse#Issuer
   */
  readonly issuer?: string;

  /**
   * @schema StsAssumeRoleWithSamlResponse#Audience
   */
  readonly audience?: string;

  /**
   * @schema StsAssumeRoleWithSamlResponse#NameQualifier
   */
  readonly nameQualifier?: string;

  /**
   * @schema StsAssumeRoleWithSamlResponse#SourceIdentity
   */
  readonly sourceIdentity?: string;

}

/**
 * Converts an object of type 'StsAssumeRoleWithSamlResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StsAssumeRoleWithSamlResponse(obj: StsAssumeRoleWithSamlResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Credentials': toJson_StsCredentials(obj.credentials),
    'AssumedRoleUser': toJson_StsAssumedRoleUser(obj.assumedRoleUser),
    'PackedPolicySize': obj.packedPolicySize,
    'Subject': obj.subject,
    'SubjectType': obj.subjectType,
    'Issuer': obj.issuer,
    'Audience': obj.audience,
    'NameQualifier': obj.nameQualifier,
    'SourceIdentity': obj.sourceIdentity,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StsAssumeRoleWithWebIdentityRequest
 */
export interface StsAssumeRoleWithWebIdentityRequest {
  /**
   * @schema StsAssumeRoleWithWebIdentityRequest#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema StsAssumeRoleWithWebIdentityRequest#RoleSessionName
   */
  readonly roleSessionName?: string;

  /**
   * @schema StsAssumeRoleWithWebIdentityRequest#WebIdentityToken
   */
  readonly webIdentityToken?: string;

  /**
   * @schema StsAssumeRoleWithWebIdentityRequest#ProviderId
   */
  readonly providerId?: string;

  /**
   * @schema StsAssumeRoleWithWebIdentityRequest#PolicyArns
   */
  readonly policyArns?: StsPolicyDescriptorType[];

  /**
   * @schema StsAssumeRoleWithWebIdentityRequest#Policy
   */
  readonly policy?: string;

  /**
   * @schema StsAssumeRoleWithWebIdentityRequest#DurationSeconds
   */
  readonly durationSeconds?: number;

}

/**
 * Converts an object of type 'StsAssumeRoleWithWebIdentityRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StsAssumeRoleWithWebIdentityRequest(obj: StsAssumeRoleWithWebIdentityRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoleArn': obj.roleArn,
    'RoleSessionName': obj.roleSessionName,
    'WebIdentityToken': obj.webIdentityToken,
    'ProviderId': obj.providerId,
    'PolicyArns': obj.policyArns?.map(y => toJson_StsPolicyDescriptorType(y)),
    'Policy': obj.policy,
    'DurationSeconds': obj.durationSeconds,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StsAssumeRoleWithWebIdentityResponse
 */
export interface StsAssumeRoleWithWebIdentityResponse {
  /**
   * @schema StsAssumeRoleWithWebIdentityResponse#Credentials
   */
  readonly credentials?: StsCredentials;

  /**
   * @schema StsAssumeRoleWithWebIdentityResponse#SubjectFromWebIdentityToken
   */
  readonly subjectFromWebIdentityToken?: string;

  /**
   * @schema StsAssumeRoleWithWebIdentityResponse#AssumedRoleUser
   */
  readonly assumedRoleUser?: StsAssumedRoleUser;

  /**
   * @schema StsAssumeRoleWithWebIdentityResponse#PackedPolicySize
   */
  readonly packedPolicySize?: number;

  /**
   * @schema StsAssumeRoleWithWebIdentityResponse#Provider
   */
  readonly provider?: string;

  /**
   * @schema StsAssumeRoleWithWebIdentityResponse#Audience
   */
  readonly audience?: string;

  /**
   * @schema StsAssumeRoleWithWebIdentityResponse#SourceIdentity
   */
  readonly sourceIdentity?: string;

}

/**
 * Converts an object of type 'StsAssumeRoleWithWebIdentityResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StsAssumeRoleWithWebIdentityResponse(obj: StsAssumeRoleWithWebIdentityResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Credentials': toJson_StsCredentials(obj.credentials),
    'SubjectFromWebIdentityToken': obj.subjectFromWebIdentityToken,
    'AssumedRoleUser': toJson_StsAssumedRoleUser(obj.assumedRoleUser),
    'PackedPolicySize': obj.packedPolicySize,
    'Provider': obj.provider,
    'Audience': obj.audience,
    'SourceIdentity': obj.sourceIdentity,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StsDecodeAuthorizationMessageRequest
 */
export interface StsDecodeAuthorizationMessageRequest {
  /**
   * @schema StsDecodeAuthorizationMessageRequest#EncodedMessage
   */
  readonly encodedMessage?: string;

}

/**
 * Converts an object of type 'StsDecodeAuthorizationMessageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StsDecodeAuthorizationMessageRequest(obj: StsDecodeAuthorizationMessageRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EncodedMessage': obj.encodedMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StsDecodeAuthorizationMessageResponse
 */
export interface StsDecodeAuthorizationMessageResponse {
  /**
   * @schema StsDecodeAuthorizationMessageResponse#DecodedMessage
   */
  readonly decodedMessage?: string;

}

/**
 * Converts an object of type 'StsDecodeAuthorizationMessageResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StsDecodeAuthorizationMessageResponse(obj: StsDecodeAuthorizationMessageResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DecodedMessage': obj.decodedMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StsGetAccessKeyInfoRequest
 */
export interface StsGetAccessKeyInfoRequest {
  /**
   * @schema StsGetAccessKeyInfoRequest#AccessKeyId
   */
  readonly accessKeyId?: string;

}

/**
 * Converts an object of type 'StsGetAccessKeyInfoRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StsGetAccessKeyInfoRequest(obj: StsGetAccessKeyInfoRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccessKeyId': obj.accessKeyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StsGetAccessKeyInfoResponse
 */
export interface StsGetAccessKeyInfoResponse {
  /**
   * @schema StsGetAccessKeyInfoResponse#Account
   */
  readonly account?: string;

}

/**
 * Converts an object of type 'StsGetAccessKeyInfoResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StsGetAccessKeyInfoResponse(obj: StsGetAccessKeyInfoResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Account': obj.account,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StsGetCallerIdentityRequest
 */
export interface StsGetCallerIdentityRequest {
}

/**
 * Converts an object of type 'StsGetCallerIdentityRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StsGetCallerIdentityRequest(obj: StsGetCallerIdentityRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StsGetCallerIdentityResponse
 */
export interface StsGetCallerIdentityResponse {
  /**
   * @schema StsGetCallerIdentityResponse#UserId
   */
  readonly userId?: string;

  /**
   * @schema StsGetCallerIdentityResponse#Account
   */
  readonly account?: string;

  /**
   * @schema StsGetCallerIdentityResponse#Arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'StsGetCallerIdentityResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StsGetCallerIdentityResponse(obj: StsGetCallerIdentityResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserId': obj.userId,
    'Account': obj.account,
    'Arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StsGetFederationTokenRequest
 */
export interface StsGetFederationTokenRequest {
  /**
   * @schema StsGetFederationTokenRequest#Name
   */
  readonly name?: string;

  /**
   * @schema StsGetFederationTokenRequest#Policy
   */
  readonly policy?: string;

  /**
   * @schema StsGetFederationTokenRequest#PolicyArns
   */
  readonly policyArns?: StsPolicyDescriptorType[];

  /**
   * @schema StsGetFederationTokenRequest#DurationSeconds
   */
  readonly durationSeconds?: number;

  /**
   * @schema StsGetFederationTokenRequest#Tags
   */
  readonly tags?: StsTag[];

}

/**
 * Converts an object of type 'StsGetFederationTokenRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StsGetFederationTokenRequest(obj: StsGetFederationTokenRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Policy': obj.policy,
    'PolicyArns': obj.policyArns?.map(y => toJson_StsPolicyDescriptorType(y)),
    'DurationSeconds': obj.durationSeconds,
    'Tags': obj.tags?.map(y => toJson_StsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StsGetFederationTokenResponse
 */
export interface StsGetFederationTokenResponse {
  /**
   * @schema StsGetFederationTokenResponse#Credentials
   */
  readonly credentials?: StsCredentials;

  /**
   * @schema StsGetFederationTokenResponse#FederatedUser
   */
  readonly federatedUser?: StsFederatedUser;

  /**
   * @schema StsGetFederationTokenResponse#PackedPolicySize
   */
  readonly packedPolicySize?: number;

}

/**
 * Converts an object of type 'StsGetFederationTokenResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StsGetFederationTokenResponse(obj: StsGetFederationTokenResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Credentials': toJson_StsCredentials(obj.credentials),
    'FederatedUser': toJson_StsFederatedUser(obj.federatedUser),
    'PackedPolicySize': obj.packedPolicySize,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StsGetSessionTokenRequest
 */
export interface StsGetSessionTokenRequest {
  /**
   * @schema StsGetSessionTokenRequest#DurationSeconds
   */
  readonly durationSeconds?: number;

  /**
   * @schema StsGetSessionTokenRequest#SerialNumber
   */
  readonly serialNumber?: string;

  /**
   * @schema StsGetSessionTokenRequest#TokenCode
   */
  readonly tokenCode?: string;

}

/**
 * Converts an object of type 'StsGetSessionTokenRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StsGetSessionTokenRequest(obj: StsGetSessionTokenRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DurationSeconds': obj.durationSeconds,
    'SerialNumber': obj.serialNumber,
    'TokenCode': obj.tokenCode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StsGetSessionTokenResponse
 */
export interface StsGetSessionTokenResponse {
  /**
   * @schema StsGetSessionTokenResponse#Credentials
   */
  readonly credentials?: StsCredentials;

}

/**
 * Converts an object of type 'StsGetSessionTokenResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StsGetSessionTokenResponse(obj: StsGetSessionTokenResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Credentials': toJson_StsCredentials(obj.credentials),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StsPolicyDescriptorType
 */
export interface StsPolicyDescriptorType {
  /**
   * @schema StsPolicyDescriptorType#arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'StsPolicyDescriptorType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StsPolicyDescriptorType(obj: StsPolicyDescriptorType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StsTag
 */
export interface StsTag {
  /**
   * @schema StsTag#Key
   */
  readonly key?: string;

  /**
   * @schema StsTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'StsTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StsTag(obj: StsTag | undefined): Record<string, any> | undefined {
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
 * @schema StsCredentials
 */
export interface StsCredentials {
  /**
   * @schema StsCredentials#AccessKeyId
   */
  readonly accessKeyId?: string;

  /**
   * @schema StsCredentials#SecretAccessKey
   */
  readonly secretAccessKey?: string;

  /**
   * @schema StsCredentials#SessionToken
   */
  readonly sessionToken?: string;

  /**
   * @schema StsCredentials#Expiration
   */
  readonly expiration?: string;

}

/**
 * Converts an object of type 'StsCredentials' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StsCredentials(obj: StsCredentials | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccessKeyId': obj.accessKeyId,
    'SecretAccessKey': obj.secretAccessKey,
    'SessionToken': obj.sessionToken,
    'Expiration': obj.expiration,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StsAssumedRoleUser
 */
export interface StsAssumedRoleUser {
  /**
   * @schema StsAssumedRoleUser#AssumedRoleId
   */
  readonly assumedRoleId?: string;

  /**
   * @schema StsAssumedRoleUser#Arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'StsAssumedRoleUser' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StsAssumedRoleUser(obj: StsAssumedRoleUser | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssumedRoleId': obj.assumedRoleId,
    'Arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StsFederatedUser
 */
export interface StsFederatedUser {
  /**
   * @schema StsFederatedUser#FederatedUserId
   */
  readonly federatedUserId?: string;

  /**
   * @schema StsFederatedUser#Arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'StsFederatedUser' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StsFederatedUser(obj: StsFederatedUser | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FederatedUserId': obj.federatedUserId,
    'Arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
