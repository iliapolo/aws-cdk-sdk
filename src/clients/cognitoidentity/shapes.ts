/**
 * @schema CreateIdentityPoolInput
 */
export interface CreateIdentityPoolInput {
  /**
   * @schema CreateIdentityPoolInput#IdentityPoolName
   */
  readonly identityPoolName: string;

  /**
   * @schema CreateIdentityPoolInput#AllowUnauthenticatedIdentities
   */
  readonly allowUnauthenticatedIdentities: boolean;

  /**
   * @schema CreateIdentityPoolInput#AllowClassicFlow
   */
  readonly allowClassicFlow?: boolean;

  /**
   * @schema CreateIdentityPoolInput#SupportedLoginProviders
   */
  readonly supportedLoginProviders?: { [key: string]: string };

  /**
   * @schema CreateIdentityPoolInput#DeveloperProviderName
   */
  readonly developerProviderName?: string;

  /**
   * @schema CreateIdentityPoolInput#OpenIdConnectProviderARNs
   */
  readonly openIdConnectProviderArNs?: string[];

  /**
   * @schema CreateIdentityPoolInput#CognitoIdentityProviders
   */
  readonly cognitoIdentityProviders?: CognitoIdentityProvider[];

  /**
   * @schema CreateIdentityPoolInput#SamlProviderARNs
   */
  readonly samlProviderArNs?: string[];

  /**
   * @schema CreateIdentityPoolInput#IdentityPoolTags
   */
  readonly identityPoolTags?: { [key: string]: string };

}

/**
 * @schema IdentityPool
 */
export interface IdentityPool {
  /**
   * @schema IdentityPool#IdentityPoolId
   */
  readonly identityPoolId: string;

  /**
   * @schema IdentityPool#IdentityPoolName
   */
  readonly identityPoolName: string;

  /**
   * @schema IdentityPool#AllowUnauthenticatedIdentities
   */
  readonly allowUnauthenticatedIdentities: boolean;

  /**
   * @schema IdentityPool#AllowClassicFlow
   */
  readonly allowClassicFlow?: boolean;

  /**
   * @schema IdentityPool#SupportedLoginProviders
   */
  readonly supportedLoginProviders?: { [key: string]: string };

  /**
   * @schema IdentityPool#DeveloperProviderName
   */
  readonly developerProviderName?: string;

  /**
   * @schema IdentityPool#OpenIdConnectProviderARNs
   */
  readonly openIdConnectProviderArNs?: string[];

  /**
   * @schema IdentityPool#CognitoIdentityProviders
   */
  readonly cognitoIdentityProviders?: CognitoIdentityProvider[];

  /**
   * @schema IdentityPool#SamlProviderARNs
   */
  readonly samlProviderArNs?: string[];

  /**
   * @schema IdentityPool#IdentityPoolTags
   */
  readonly identityPoolTags?: { [key: string]: string };

}

/**
 * @schema DeleteIdentitiesInput
 */
export interface DeleteIdentitiesInput {
  /**
   * @schema DeleteIdentitiesInput#IdentityIdsToDelete
   */
  readonly identityIdsToDelete: string[];

}

/**
 * @schema DeleteIdentitiesResponse
 */
export interface DeleteIdentitiesResponse {
  /**
   * @schema DeleteIdentitiesResponse#UnprocessedIdentityIds
   */
  readonly unprocessedIdentityIds?: UnprocessedIdentityId[];

}

/**
 * @schema DeleteIdentityPoolInput
 */
export interface DeleteIdentityPoolInput {
  /**
   * @schema DeleteIdentityPoolInput#IdentityPoolId
   */
  readonly identityPoolId: string;

}

/**
 * @schema DescribeIdentityInput
 */
export interface DescribeIdentityInput {
  /**
   * @schema DescribeIdentityInput#IdentityId
   */
  readonly identityId: string;

}

/**
 * @schema IdentityDescription
 */
export interface IdentityDescription {
  /**
   * @schema IdentityDescription#IdentityId
   */
  readonly identityId?: string;

  /**
   * @schema IdentityDescription#Logins
   */
  readonly logins?: string[];

  /**
   * @schema IdentityDescription#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema IdentityDescription#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

}

/**
 * @schema DescribeIdentityPoolInput
 */
export interface DescribeIdentityPoolInput {
  /**
   * @schema DescribeIdentityPoolInput#IdentityPoolId
   */
  readonly identityPoolId: string;

}

/**
 * @schema GetCredentialsForIdentityInput
 */
export interface GetCredentialsForIdentityInput {
  /**
   * @schema GetCredentialsForIdentityInput#IdentityId
   */
  readonly identityId: string;

  /**
   * @schema GetCredentialsForIdentityInput#Logins
   */
  readonly logins?: { [key: string]: string };

  /**
   * @schema GetCredentialsForIdentityInput#CustomRoleArn
   */
  readonly customRoleArn?: string;

}

/**
 * @schema GetCredentialsForIdentityResponse
 */
export interface GetCredentialsForIdentityResponse {
  /**
   * @schema GetCredentialsForIdentityResponse#IdentityId
   */
  readonly identityId?: string;

  /**
   * @schema GetCredentialsForIdentityResponse#Credentials
   */
  readonly credentials?: Credentials;

}

/**
 * @schema GetIdInput
 */
export interface GetIdInput {
  /**
   * @schema GetIdInput#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema GetIdInput#IdentityPoolId
   */
  readonly identityPoolId: string;

  /**
   * @schema GetIdInput#Logins
   */
  readonly logins?: { [key: string]: string };

}

/**
 * @schema GetIdResponse
 */
export interface GetIdResponse {
  /**
   * @schema GetIdResponse#IdentityId
   */
  readonly identityId?: string;

}

/**
 * @schema GetIdentityPoolRolesInput
 */
export interface GetIdentityPoolRolesInput {
  /**
   * @schema GetIdentityPoolRolesInput#IdentityPoolId
   */
  readonly identityPoolId: string;

}

/**
 * @schema GetIdentityPoolRolesResponse
 */
export interface GetIdentityPoolRolesResponse {
  /**
   * @schema GetIdentityPoolRolesResponse#IdentityPoolId
   */
  readonly identityPoolId?: string;

  /**
   * @schema GetIdentityPoolRolesResponse#Roles
   */
  readonly roles?: { [key: string]: string };

  /**
   * @schema GetIdentityPoolRolesResponse#RoleMappings
   */
  readonly roleMappings?: { [key: string]: RoleMapping };

}

/**
 * @schema GetOpenIdTokenInput
 */
export interface GetOpenIdTokenInput {
  /**
   * @schema GetOpenIdTokenInput#IdentityId
   */
  readonly identityId: string;

  /**
   * @schema GetOpenIdTokenInput#Logins
   */
  readonly logins?: { [key: string]: string };

}

/**
 * @schema GetOpenIdTokenResponse
 */
export interface GetOpenIdTokenResponse {
  /**
   * @schema GetOpenIdTokenResponse#IdentityId
   */
  readonly identityId?: string;

  /**
   * @schema GetOpenIdTokenResponse#Token
   */
  readonly token?: string;

}

/**
 * @schema GetOpenIdTokenForDeveloperIdentityInput
 */
export interface GetOpenIdTokenForDeveloperIdentityInput {
  /**
   * @schema GetOpenIdTokenForDeveloperIdentityInput#IdentityPoolId
   */
  readonly identityPoolId: string;

  /**
   * @schema GetOpenIdTokenForDeveloperIdentityInput#IdentityId
   */
  readonly identityId?: string;

  /**
   * @schema GetOpenIdTokenForDeveloperIdentityInput#Logins
   */
  readonly logins: { [key: string]: string };

  /**
   * @schema GetOpenIdTokenForDeveloperIdentityInput#TokenDuration
   */
  readonly tokenDuration?: number;

}

/**
 * @schema GetOpenIdTokenForDeveloperIdentityResponse
 */
export interface GetOpenIdTokenForDeveloperIdentityResponse {
  /**
   * @schema GetOpenIdTokenForDeveloperIdentityResponse#IdentityId
   */
  readonly identityId?: string;

  /**
   * @schema GetOpenIdTokenForDeveloperIdentityResponse#Token
   */
  readonly token?: string;

}

/**
 * @schema ListIdentitiesInput
 */
export interface ListIdentitiesInput {
  /**
   * @schema ListIdentitiesInput#IdentityPoolId
   */
  readonly identityPoolId: string;

  /**
   * @schema ListIdentitiesInput#MaxResults
   */
  readonly maxResults: number;

  /**
   * @schema ListIdentitiesInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListIdentitiesInput#HideDisabled
   */
  readonly hideDisabled?: boolean;

}

/**
 * @schema ListIdentitiesResponse
 */
export interface ListIdentitiesResponse {
  /**
   * @schema ListIdentitiesResponse#IdentityPoolId
   */
  readonly identityPoolId?: string;

  /**
   * @schema ListIdentitiesResponse#Identities
   */
  readonly identities?: IdentityDescription[];

  /**
   * @schema ListIdentitiesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListIdentityPoolsInput
 */
export interface ListIdentityPoolsInput {
  /**
   * @schema ListIdentityPoolsInput#MaxResults
   */
  readonly maxResults: number;

  /**
   * @schema ListIdentityPoolsInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListIdentityPoolsResponse
 */
export interface ListIdentityPoolsResponse {
  /**
   * @schema ListIdentityPoolsResponse#IdentityPools
   */
  readonly identityPools?: IdentityPoolShortDescription[];

  /**
   * @schema ListIdentityPoolsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsForResourceInput
 */
export interface ListTagsForResourceInput {
  /**
   * @schema ListTagsForResourceInput#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema ListTagsForResourceResponse
 */
export interface ListTagsForResourceResponse {
  /**
   * @schema ListTagsForResourceResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema LookupDeveloperIdentityInput
 */
export interface LookupDeveloperIdentityInput {
  /**
   * @schema LookupDeveloperIdentityInput#IdentityPoolId
   */
  readonly identityPoolId: string;

  /**
   * @schema LookupDeveloperIdentityInput#IdentityId
   */
  readonly identityId?: string;

  /**
   * @schema LookupDeveloperIdentityInput#DeveloperUserIdentifier
   */
  readonly developerUserIdentifier?: string;

  /**
   * @schema LookupDeveloperIdentityInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema LookupDeveloperIdentityInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema LookupDeveloperIdentityResponse
 */
export interface LookupDeveloperIdentityResponse {
  /**
   * @schema LookupDeveloperIdentityResponse#IdentityId
   */
  readonly identityId?: string;

  /**
   * @schema LookupDeveloperIdentityResponse#DeveloperUserIdentifierList
   */
  readonly developerUserIdentifierList?: string[];

  /**
   * @schema LookupDeveloperIdentityResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MergeDeveloperIdentitiesInput
 */
export interface MergeDeveloperIdentitiesInput {
  /**
   * @schema MergeDeveloperIdentitiesInput#SourceUserIdentifier
   */
  readonly sourceUserIdentifier: string;

  /**
   * @schema MergeDeveloperIdentitiesInput#DestinationUserIdentifier
   */
  readonly destinationUserIdentifier: string;

  /**
   * @schema MergeDeveloperIdentitiesInput#DeveloperProviderName
   */
  readonly developerProviderName: string;

  /**
   * @schema MergeDeveloperIdentitiesInput#IdentityPoolId
   */
  readonly identityPoolId: string;

}

/**
 * @schema MergeDeveloperIdentitiesResponse
 */
export interface MergeDeveloperIdentitiesResponse {
  /**
   * @schema MergeDeveloperIdentitiesResponse#IdentityId
   */
  readonly identityId?: string;

}

/**
 * @schema SetIdentityPoolRolesInput
 */
export interface SetIdentityPoolRolesInput {
  /**
   * @schema SetIdentityPoolRolesInput#IdentityPoolId
   */
  readonly identityPoolId: string;

  /**
   * @schema SetIdentityPoolRolesInput#Roles
   */
  readonly roles: { [key: string]: string };

  /**
   * @schema SetIdentityPoolRolesInput#RoleMappings
   */
  readonly roleMappings?: { [key: string]: RoleMapping };

}

/**
 * @schema TagResourceInput
 */
export interface TagResourceInput {
  /**
   * @schema TagResourceInput#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema TagResourceInput#Tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema TagResourceResponse
 */
export interface TagResourceResponse {
}

/**
 * @schema UnlinkDeveloperIdentityInput
 */
export interface UnlinkDeveloperIdentityInput {
  /**
   * @schema UnlinkDeveloperIdentityInput#IdentityId
   */
  readonly identityId: string;

  /**
   * @schema UnlinkDeveloperIdentityInput#IdentityPoolId
   */
  readonly identityPoolId: string;

  /**
   * @schema UnlinkDeveloperIdentityInput#DeveloperProviderName
   */
  readonly developerProviderName: string;

  /**
   * @schema UnlinkDeveloperIdentityInput#DeveloperUserIdentifier
   */
  readonly developerUserIdentifier: string;

}

/**
 * @schema UnlinkIdentityInput
 */
export interface UnlinkIdentityInput {
  /**
   * @schema UnlinkIdentityInput#IdentityId
   */
  readonly identityId: string;

  /**
   * @schema UnlinkIdentityInput#Logins
   */
  readonly logins: { [key: string]: string };

  /**
   * @schema UnlinkIdentityInput#LoginsToRemove
   */
  readonly loginsToRemove: string[];

}

/**
 * @schema UntagResourceInput
 */
export interface UntagResourceInput {
  /**
   * @schema UntagResourceInput#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema UntagResourceInput#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UntagResourceResponse
 */
export interface UntagResourceResponse {
}

/**
 * @schema CognitoIdentityProvider
 */
export interface CognitoIdentityProvider {
  /**
   * @schema CognitoIdentityProvider#ProviderName
   */
  readonly providerName?: string;

  /**
   * @schema CognitoIdentityProvider#ClientId
   */
  readonly clientId?: string;

  /**
   * @schema CognitoIdentityProvider#ServerSideTokenCheck
   */
  readonly serverSideTokenCheck?: boolean;

}

/**
 * @schema UnprocessedIdentityId
 */
export interface UnprocessedIdentityId {
  /**
   * @schema UnprocessedIdentityId#IdentityId
   */
  readonly identityId?: string;

  /**
   * @schema UnprocessedIdentityId#ErrorCode
   */
  readonly errorCode?: string;

}

/**
 * @schema Credentials
 */
export interface Credentials {
  /**
   * @schema Credentials#AccessKeyId
   */
  readonly accessKeyId?: string;

  /**
   * @schema Credentials#SecretKey
   */
  readonly secretKey?: string;

  /**
   * @schema Credentials#SessionToken
   */
  readonly sessionToken?: string;

  /**
   * @schema Credentials#Expiration
   */
  readonly expiration?: string;

}

/**
 * @schema RoleMapping
 */
export interface RoleMapping {
  /**
   * @schema RoleMapping#Type
   */
  readonly type: string;

  /**
   * @schema RoleMapping#AmbiguousRoleResolution
   */
  readonly ambiguousRoleResolution?: string;

  /**
   * @schema RoleMapping#RulesConfiguration
   */
  readonly rulesConfiguration?: RulesConfigurationType;

}

/**
 * @schema IdentityPoolShortDescription
 */
export interface IdentityPoolShortDescription {
  /**
   * @schema IdentityPoolShortDescription#IdentityPoolId
   */
  readonly identityPoolId?: string;

  /**
   * @schema IdentityPoolShortDescription#IdentityPoolName
   */
  readonly identityPoolName?: string;

}

/**
 * @schema RulesConfigurationType
 */
export interface RulesConfigurationType {
  /**
   * @schema RulesConfigurationType#Rules
   */
  readonly rules: MappingRule[];

}

/**
 * @schema MappingRule
 */
export interface MappingRule {
  /**
   * @schema MappingRule#Claim
   */
  readonly claim: string;

  /**
   * @schema MappingRule#MatchType
   */
  readonly matchType: string;

  /**
   * @schema MappingRule#Value
   */
  readonly value: string;

  /**
   * @schema MappingRule#RoleARN
   */
  readonly roleArn: string;

}
