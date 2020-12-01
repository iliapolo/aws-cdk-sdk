/**
 * @schema AssumeRoleRequest
 */
export interface AssumeRoleRequest {
  /**
   * @schema AssumeRoleRequest#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema AssumeRoleRequest#RoleSessionName
   */
  readonly roleSessionName: string;

  /**
   * @schema AssumeRoleRequest#PolicyArns
   */
  readonly policyArns?: PolicyDescriptorType[];

  /**
   * @schema AssumeRoleRequest#Policy
   */
  readonly policy?: string;

  /**
   * @schema AssumeRoleRequest#DurationSeconds
   */
  readonly durationSeconds?: number;

  /**
   * @schema AssumeRoleRequest#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema AssumeRoleRequest#TransitiveTagKeys
   */
  readonly transitiveTagKeys?: string[];

  /**
   * @schema AssumeRoleRequest#ExternalId
   */
  readonly externalId?: string;

  /**
   * @schema AssumeRoleRequest#SerialNumber
   */
  readonly serialNumber?: string;

  /**
   * @schema AssumeRoleRequest#TokenCode
   */
  readonly tokenCode?: string;

}

/**
 * @schema AssumeRoleResponse
 */
export interface AssumeRoleResponse {
  /**
   * @schema AssumeRoleResponse#Credentials
   */
  readonly credentials?: Credentials;

  /**
   * @schema AssumeRoleResponse#AssumedRoleUser
   */
  readonly assumedRoleUser?: AssumedRoleUser;

  /**
   * @schema AssumeRoleResponse#PackedPolicySize
   */
  readonly packedPolicySize?: number;

}

/**
 * @schema AssumeRoleWithSamlRequest
 */
export interface AssumeRoleWithSamlRequest {
  /**
   * @schema AssumeRoleWithSamlRequest#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema AssumeRoleWithSamlRequest#PrincipalArn
   */
  readonly principalArn: string;

  /**
   * @schema AssumeRoleWithSamlRequest#SAMLAssertion
   */
  readonly samlAssertion: string;

  /**
   * @schema AssumeRoleWithSamlRequest#PolicyArns
   */
  readonly policyArns?: PolicyDescriptorType[];

  /**
   * @schema AssumeRoleWithSamlRequest#Policy
   */
  readonly policy?: string;

  /**
   * @schema AssumeRoleWithSamlRequest#DurationSeconds
   */
  readonly durationSeconds?: number;

}

/**
 * @schema AssumeRoleWithSamlResponse
 */
export interface AssumeRoleWithSamlResponse {
  /**
   * @schema AssumeRoleWithSamlResponse#Credentials
   */
  readonly credentials?: Credentials;

  /**
   * @schema AssumeRoleWithSamlResponse#AssumedRoleUser
   */
  readonly assumedRoleUser?: AssumedRoleUser;

  /**
   * @schema AssumeRoleWithSamlResponse#PackedPolicySize
   */
  readonly packedPolicySize?: number;

  /**
   * @schema AssumeRoleWithSamlResponse#Subject
   */
  readonly subject?: string;

  /**
   * @schema AssumeRoleWithSamlResponse#SubjectType
   */
  readonly subjectType?: string;

  /**
   * @schema AssumeRoleWithSamlResponse#Issuer
   */
  readonly issuer?: string;

  /**
   * @schema AssumeRoleWithSamlResponse#Audience
   */
  readonly audience?: string;

  /**
   * @schema AssumeRoleWithSamlResponse#NameQualifier
   */
  readonly nameQualifier?: string;

}

/**
 * @schema AssumeRoleWithWebIdentityRequest
 */
export interface AssumeRoleWithWebIdentityRequest {
  /**
   * @schema AssumeRoleWithWebIdentityRequest#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema AssumeRoleWithWebIdentityRequest#RoleSessionName
   */
  readonly roleSessionName: string;

  /**
   * @schema AssumeRoleWithWebIdentityRequest#WebIdentityToken
   */
  readonly webIdentityToken: string;

  /**
   * @schema AssumeRoleWithWebIdentityRequest#ProviderId
   */
  readonly providerId?: string;

  /**
   * @schema AssumeRoleWithWebIdentityRequest#PolicyArns
   */
  readonly policyArns?: PolicyDescriptorType[];

  /**
   * @schema AssumeRoleWithWebIdentityRequest#Policy
   */
  readonly policy?: string;

  /**
   * @schema AssumeRoleWithWebIdentityRequest#DurationSeconds
   */
  readonly durationSeconds?: number;

}

/**
 * @schema AssumeRoleWithWebIdentityResponse
 */
export interface AssumeRoleWithWebIdentityResponse {
  /**
   * @schema AssumeRoleWithWebIdentityResponse#Credentials
   */
  readonly credentials?: Credentials;

  /**
   * @schema AssumeRoleWithWebIdentityResponse#SubjectFromWebIdentityToken
   */
  readonly subjectFromWebIdentityToken?: string;

  /**
   * @schema AssumeRoleWithWebIdentityResponse#AssumedRoleUser
   */
  readonly assumedRoleUser?: AssumedRoleUser;

  /**
   * @schema AssumeRoleWithWebIdentityResponse#PackedPolicySize
   */
  readonly packedPolicySize?: number;

  /**
   * @schema AssumeRoleWithWebIdentityResponse#Provider
   */
  readonly provider?: string;

  /**
   * @schema AssumeRoleWithWebIdentityResponse#Audience
   */
  readonly audience?: string;

}

/**
 * @schema DecodeAuthorizationMessageRequest
 */
export interface DecodeAuthorizationMessageRequest {
  /**
   * @schema DecodeAuthorizationMessageRequest#EncodedMessage
   */
  readonly encodedMessage: string;

}

/**
 * @schema DecodeAuthorizationMessageResponse
 */
export interface DecodeAuthorizationMessageResponse {
  /**
   * @schema DecodeAuthorizationMessageResponse#DecodedMessage
   */
  readonly decodedMessage?: string;

}

/**
 * @schema GetAccessKeyInfoRequest
 */
export interface GetAccessKeyInfoRequest {
  /**
   * @schema GetAccessKeyInfoRequest#AccessKeyId
   */
  readonly accessKeyId: string;

}

/**
 * @schema GetAccessKeyInfoResponse
 */
export interface GetAccessKeyInfoResponse {
  /**
   * @schema GetAccessKeyInfoResponse#Account
   */
  readonly account?: string;

}

/**
 * @schema GetCallerIdentityRequest
 */
export interface GetCallerIdentityRequest {
}

/**
 * @schema GetCallerIdentityResponse
 */
export interface GetCallerIdentityResponse {
  /**
   * @schema GetCallerIdentityResponse#UserId
   */
  readonly userId?: string;

  /**
   * @schema GetCallerIdentityResponse#Account
   */
  readonly account?: string;

  /**
   * @schema GetCallerIdentityResponse#Arn
   */
  readonly arn?: string;

}

/**
 * @schema GetFederationTokenRequest
 */
export interface GetFederationTokenRequest {
  /**
   * @schema GetFederationTokenRequest#Name
   */
  readonly name: string;

  /**
   * @schema GetFederationTokenRequest#Policy
   */
  readonly policy?: string;

  /**
   * @schema GetFederationTokenRequest#PolicyArns
   */
  readonly policyArns?: PolicyDescriptorType[];

  /**
   * @schema GetFederationTokenRequest#DurationSeconds
   */
  readonly durationSeconds?: number;

  /**
   * @schema GetFederationTokenRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema GetFederationTokenResponse
 */
export interface GetFederationTokenResponse {
  /**
   * @schema GetFederationTokenResponse#Credentials
   */
  readonly credentials?: Credentials;

  /**
   * @schema GetFederationTokenResponse#FederatedUser
   */
  readonly federatedUser?: FederatedUser;

  /**
   * @schema GetFederationTokenResponse#PackedPolicySize
   */
  readonly packedPolicySize?: number;

}

/**
 * @schema GetSessionTokenRequest
 */
export interface GetSessionTokenRequest {
  /**
   * @schema GetSessionTokenRequest#DurationSeconds
   */
  readonly durationSeconds?: number;

  /**
   * @schema GetSessionTokenRequest#SerialNumber
   */
  readonly serialNumber?: string;

  /**
   * @schema GetSessionTokenRequest#TokenCode
   */
  readonly tokenCode?: string;

}

/**
 * @schema GetSessionTokenResponse
 */
export interface GetSessionTokenResponse {
  /**
   * @schema GetSessionTokenResponse#Credentials
   */
  readonly credentials?: Credentials;

}

/**
 * @schema PolicyDescriptorType
 */
export interface PolicyDescriptorType {
  /**
   * @schema PolicyDescriptorType#arn
   */
  readonly arn?: string;

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
 * @schema Credentials
 */
export interface Credentials {
  /**
   * @schema Credentials#AccessKeyId
   */
  readonly accessKeyId: string;

  /**
   * @schema Credentials#SecretAccessKey
   */
  readonly secretAccessKey: string;

  /**
   * @schema Credentials#SessionToken
   */
  readonly sessionToken: string;

  /**
   * @schema Credentials#Expiration
   */
  readonly expiration: string;

}

/**
 * @schema AssumedRoleUser
 */
export interface AssumedRoleUser {
  /**
   * @schema AssumedRoleUser#AssumedRoleId
   */
  readonly assumedRoleId: string;

  /**
   * @schema AssumedRoleUser#Arn
   */
  readonly arn: string;

}

/**
 * @schema FederatedUser
 */
export interface FederatedUser {
  /**
   * @schema FederatedUser#FederatedUserId
   */
  readonly federatedUserId: string;

  /**
   * @schema FederatedUser#Arn
   */
  readonly arn: string;

}
