/**
 * @schema StsAssumeRoleRequest
 */
export interface StsAssumeRoleRequest {
  /**
   * @schema StsAssumeRoleRequest#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema StsAssumeRoleRequest#RoleSessionName
   */
  readonly roleSessionName: string;

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

}

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

}

/**
 * @schema StsAssumeRoleWithSamlRequest
 */
export interface StsAssumeRoleWithSamlRequest {
  /**
   * @schema StsAssumeRoleWithSamlRequest#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema StsAssumeRoleWithSamlRequest#PrincipalArn
   */
  readonly principalArn: string;

  /**
   * @schema StsAssumeRoleWithSamlRequest#SAMLAssertion
   */
  readonly samlAssertion: string;

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

}

/**
 * @schema StsAssumeRoleWithWebIdentityRequest
 */
export interface StsAssumeRoleWithWebIdentityRequest {
  /**
   * @schema StsAssumeRoleWithWebIdentityRequest#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema StsAssumeRoleWithWebIdentityRequest#RoleSessionName
   */
  readonly roleSessionName: string;

  /**
   * @schema StsAssumeRoleWithWebIdentityRequest#WebIdentityToken
   */
  readonly webIdentityToken: string;

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

}

/**
 * @schema StsDecodeAuthorizationMessageRequest
 */
export interface StsDecodeAuthorizationMessageRequest {
  /**
   * @schema StsDecodeAuthorizationMessageRequest#EncodedMessage
   */
  readonly encodedMessage: string;

}

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
 * @schema StsGetAccessKeyInfoRequest
 */
export interface StsGetAccessKeyInfoRequest {
  /**
   * @schema StsGetAccessKeyInfoRequest#AccessKeyId
   */
  readonly accessKeyId: string;

}

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
 * @schema StsGetCallerIdentityRequest
 */
export interface StsGetCallerIdentityRequest {
}

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
 * @schema StsGetFederationTokenRequest
 */
export interface StsGetFederationTokenRequest {
  /**
   * @schema StsGetFederationTokenRequest#Name
   */
  readonly name: string;

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
 * @schema StsGetSessionTokenResponse
 */
export interface StsGetSessionTokenResponse {
  /**
   * @schema StsGetSessionTokenResponse#Credentials
   */
  readonly credentials?: StsCredentials;

}

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
 * @schema StsTag
 */
export interface StsTag {
  /**
   * @schema StsTag#Key
   */
  readonly key: string;

  /**
   * @schema StsTag#Value
   */
  readonly value: string;

}

/**
 * @schema StsCredentials
 */
export interface StsCredentials {
  /**
   * @schema StsCredentials#AccessKeyId
   */
  readonly accessKeyId: string;

  /**
   * @schema StsCredentials#SecretAccessKey
   */
  readonly secretAccessKey: string;

  /**
   * @schema StsCredentials#SessionToken
   */
  readonly sessionToken: string;

  /**
   * @schema StsCredentials#Expiration
   */
  readonly expiration: string;

}

/**
 * @schema StsAssumedRoleUser
 */
export interface StsAssumedRoleUser {
  /**
   * @schema StsAssumedRoleUser#AssumedRoleId
   */
  readonly assumedRoleId: string;

  /**
   * @schema StsAssumedRoleUser#Arn
   */
  readonly arn: string;

}

/**
 * @schema StsFederatedUser
 */
export interface StsFederatedUser {
  /**
   * @schema StsFederatedUser#FederatedUserId
   */
  readonly federatedUserId: string;

  /**
   * @schema StsFederatedUser#Arn
   */
  readonly arn: string;

}
