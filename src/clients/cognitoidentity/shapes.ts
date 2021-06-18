/**
 * @schema CognitoIdentityCreateIdentityPoolInput
 */
export interface CognitoIdentityCreateIdentityPoolInput {
  /**
   * @schema CognitoIdentityCreateIdentityPoolInput#IdentityPoolName
   */
  readonly identityPoolName: string;

  /**
   * @schema CognitoIdentityCreateIdentityPoolInput#AllowUnauthenticatedIdentities
   */
  readonly allowUnauthenticatedIdentities: boolean;

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
 * @schema CognitoIdentityIdentityPool
 */
export interface CognitoIdentityIdentityPool {
  /**
   * @schema CognitoIdentityIdentityPool#IdentityPoolId
   */
  readonly identityPoolId: string;

  /**
   * @schema CognitoIdentityIdentityPool#IdentityPoolName
   */
  readonly identityPoolName: string;

  /**
   * @schema CognitoIdentityIdentityPool#AllowUnauthenticatedIdentities
   */
  readonly allowUnauthenticatedIdentities: boolean;

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
 * @schema CognitoIdentityDeleteIdentitiesInput
 */
export interface CognitoIdentityDeleteIdentitiesInput {
  /**
   * @schema CognitoIdentityDeleteIdentitiesInput#IdentityIdsToDelete
   */
  readonly identityIdsToDelete: string[];

}

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
 * @schema CognitoIdentityDeleteIdentityPoolInput
 */
export interface CognitoIdentityDeleteIdentityPoolInput {
  /**
   * @schema CognitoIdentityDeleteIdentityPoolInput#IdentityPoolId
   */
  readonly identityPoolId: string;

}

/**
 * @schema CognitoIdentityDescribeIdentityInput
 */
export interface CognitoIdentityDescribeIdentityInput {
  /**
   * @schema CognitoIdentityDescribeIdentityInput#IdentityId
   */
  readonly identityId: string;

}

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
 * @schema CognitoIdentityDescribeIdentityPoolInput
 */
export interface CognitoIdentityDescribeIdentityPoolInput {
  /**
   * @schema CognitoIdentityDescribeIdentityPoolInput#IdentityPoolId
   */
  readonly identityPoolId: string;

}

/**
 * @schema CognitoIdentityGetCredentialsForIdentityInput
 */
export interface CognitoIdentityGetCredentialsForIdentityInput {
  /**
   * @schema CognitoIdentityGetCredentialsForIdentityInput#IdentityId
   */
  readonly identityId: string;

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
  readonly identityPoolId: string;

  /**
   * @schema CognitoIdentityGetIdInput#Logins
   */
  readonly logins?: { [key: string]: string };

}

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
 * @schema CognitoIdentityGetIdentityPoolRolesInput
 */
export interface CognitoIdentityGetIdentityPoolRolesInput {
  /**
   * @schema CognitoIdentityGetIdentityPoolRolesInput#IdentityPoolId
   */
  readonly identityPoolId: string;

}

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
 * @schema CognitoIdentityGetOpenIdTokenInput
 */
export interface CognitoIdentityGetOpenIdTokenInput {
  /**
   * @schema CognitoIdentityGetOpenIdTokenInput#IdentityId
   */
  readonly identityId: string;

  /**
   * @schema CognitoIdentityGetOpenIdTokenInput#Logins
   */
  readonly logins?: { [key: string]: string };

}

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
 * @schema CognitoIdentityGetOpenIdTokenForDeveloperIdentityInput
 */
export interface CognitoIdentityGetOpenIdTokenForDeveloperIdentityInput {
  /**
   * @schema CognitoIdentityGetOpenIdTokenForDeveloperIdentityInput#IdentityPoolId
   */
  readonly identityPoolId: string;

  /**
   * @schema CognitoIdentityGetOpenIdTokenForDeveloperIdentityInput#IdentityId
   */
  readonly identityId?: string;

  /**
   * @schema CognitoIdentityGetOpenIdTokenForDeveloperIdentityInput#Logins
   */
  readonly logins: { [key: string]: string };

  /**
   * @schema CognitoIdentityGetOpenIdTokenForDeveloperIdentityInput#TokenDuration
   */
  readonly tokenDuration?: number;

}

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
 * @schema CognitoIdentityListIdentitiesInput
 */
export interface CognitoIdentityListIdentitiesInput {
  /**
   * @schema CognitoIdentityListIdentitiesInput#IdentityPoolId
   */
  readonly identityPoolId: string;

  /**
   * @schema CognitoIdentityListIdentitiesInput#MaxResults
   */
  readonly maxResults: number;

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
 * @schema CognitoIdentityListIdentityPoolsInput
 */
export interface CognitoIdentityListIdentityPoolsInput {
  /**
   * @schema CognitoIdentityListIdentityPoolsInput#MaxResults
   */
  readonly maxResults: number;

  /**
   * @schema CognitoIdentityListIdentityPoolsInput#NextToken
   */
  readonly nextToken?: string;

}

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
 * @schema CognitoIdentityListTagsForResourceInput
 */
export interface CognitoIdentityListTagsForResourceInput {
  /**
   * @schema CognitoIdentityListTagsForResourceInput#ResourceArn
   */
  readonly resourceArn: string;

}

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
 * @schema CognitoIdentityLookupDeveloperIdentityInput
 */
export interface CognitoIdentityLookupDeveloperIdentityInput {
  /**
   * @schema CognitoIdentityLookupDeveloperIdentityInput#IdentityPoolId
   */
  readonly identityPoolId: string;

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
 * @schema CognitoIdentityMergeDeveloperIdentitiesInput
 */
export interface CognitoIdentityMergeDeveloperIdentitiesInput {
  /**
   * @schema CognitoIdentityMergeDeveloperIdentitiesInput#SourceUserIdentifier
   */
  readonly sourceUserIdentifier: string;

  /**
   * @schema CognitoIdentityMergeDeveloperIdentitiesInput#DestinationUserIdentifier
   */
  readonly destinationUserIdentifier: string;

  /**
   * @schema CognitoIdentityMergeDeveloperIdentitiesInput#DeveloperProviderName
   */
  readonly developerProviderName: string;

  /**
   * @schema CognitoIdentityMergeDeveloperIdentitiesInput#IdentityPoolId
   */
  readonly identityPoolId: string;

}

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
 * @schema CognitoIdentitySetIdentityPoolRolesInput
 */
export interface CognitoIdentitySetIdentityPoolRolesInput {
  /**
   * @schema CognitoIdentitySetIdentityPoolRolesInput#IdentityPoolId
   */
  readonly identityPoolId: string;

  /**
   * @schema CognitoIdentitySetIdentityPoolRolesInput#Roles
   */
  readonly roles: { [key: string]: string };

  /**
   * @schema CognitoIdentitySetIdentityPoolRolesInput#RoleMappings
   */
  readonly roleMappings?: { [key: string]: CognitoIdentityRoleMapping };

}

/**
 * @schema CognitoIdentityTagResourceInput
 */
export interface CognitoIdentityTagResourceInput {
  /**
   * @schema CognitoIdentityTagResourceInput#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema CognitoIdentityTagResourceInput#Tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema CognitoIdentityTagResourceResponse
 */
export interface CognitoIdentityTagResourceResponse {
}

/**
 * @schema CognitoIdentityUnlinkDeveloperIdentityInput
 */
export interface CognitoIdentityUnlinkDeveloperIdentityInput {
  /**
   * @schema CognitoIdentityUnlinkDeveloperIdentityInput#IdentityId
   */
  readonly identityId: string;

  /**
   * @schema CognitoIdentityUnlinkDeveloperIdentityInput#IdentityPoolId
   */
  readonly identityPoolId: string;

  /**
   * @schema CognitoIdentityUnlinkDeveloperIdentityInput#DeveloperProviderName
   */
  readonly developerProviderName: string;

  /**
   * @schema CognitoIdentityUnlinkDeveloperIdentityInput#DeveloperUserIdentifier
   */
  readonly developerUserIdentifier: string;

}

/**
 * @schema CognitoIdentityUnlinkIdentityInput
 */
export interface CognitoIdentityUnlinkIdentityInput {
  /**
   * @schema CognitoIdentityUnlinkIdentityInput#IdentityId
   */
  readonly identityId: string;

  /**
   * @schema CognitoIdentityUnlinkIdentityInput#Logins
   */
  readonly logins: { [key: string]: string };

  /**
   * @schema CognitoIdentityUnlinkIdentityInput#LoginsToRemove
   */
  readonly loginsToRemove: string[];

}

/**
 * @schema CognitoIdentityUntagResourceInput
 */
export interface CognitoIdentityUntagResourceInput {
  /**
   * @schema CognitoIdentityUntagResourceInput#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema CognitoIdentityUntagResourceInput#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema CognitoIdentityUntagResourceResponse
 */
export interface CognitoIdentityUntagResourceResponse {
}

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
 * @schema CognitoIdentityRoleMapping
 */
export interface CognitoIdentityRoleMapping {
  /**
   * @schema CognitoIdentityRoleMapping#Type
   */
  readonly type: string;

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
 * @schema CognitoIdentityRulesConfigurationType
 */
export interface CognitoIdentityRulesConfigurationType {
  /**
   * @schema CognitoIdentityRulesConfigurationType#Rules
   */
  readonly rules: CognitoIdentityMappingRule[];

}

/**
 * @schema CognitoIdentityMappingRule
 */
export interface CognitoIdentityMappingRule {
  /**
   * @schema CognitoIdentityMappingRule#Claim
   */
  readonly claim: string;

  /**
   * @schema CognitoIdentityMappingRule#MatchType
   */
  readonly matchType: string;

  /**
   * @schema CognitoIdentityMappingRule#Value
   */
  readonly value: string;

  /**
   * @schema CognitoIdentityMappingRule#RoleARN
   */
  readonly roleArn: string;

}
