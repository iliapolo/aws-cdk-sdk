/**
 * @schema TransferCreateServerRequest
 */
export interface TransferCreateServerRequest {
  /**
   * @schema TransferCreateServerRequest#Certificate
   */
  readonly certificate?: string;

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
 * @schema TransferCreateServerResponse
 */
export interface TransferCreateServerResponse {
  /**
   * @schema TransferCreateServerResponse#ServerId
   */
  readonly serverId: string;

}

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
   * @schema TransferCreateUserRequest#Role
   */
  readonly role: string;

  /**
   * @schema TransferCreateUserRequest#ServerId
   */
  readonly serverId: string;

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
  readonly userName: string;

}

/**
 * @schema TransferCreateUserResponse
 */
export interface TransferCreateUserResponse {
  /**
   * @schema TransferCreateUserResponse#ServerId
   */
  readonly serverId: string;

  /**
   * @schema TransferCreateUserResponse#UserName
   */
  readonly userName: string;

}

/**
 * @schema TransferDeleteServerRequest
 */
export interface TransferDeleteServerRequest {
  /**
   * @schema TransferDeleteServerRequest#ServerId
   */
  readonly serverId: string;

}

/**
 * @schema TransferDeleteSshPublicKeyRequest
 */
export interface TransferDeleteSshPublicKeyRequest {
  /**
   * @schema TransferDeleteSshPublicKeyRequest#ServerId
   */
  readonly serverId: string;

  /**
   * @schema TransferDeleteSshPublicKeyRequest#SshPublicKeyId
   */
  readonly sshPublicKeyId: string;

  /**
   * @schema TransferDeleteSshPublicKeyRequest#UserName
   */
  readonly userName: string;

}

/**
 * @schema TransferDeleteUserRequest
 */
export interface TransferDeleteUserRequest {
  /**
   * @schema TransferDeleteUserRequest#ServerId
   */
  readonly serverId: string;

  /**
   * @schema TransferDeleteUserRequest#UserName
   */
  readonly userName: string;

}

/**
 * @schema TransferDescribeSecurityPolicyRequest
 */
export interface TransferDescribeSecurityPolicyRequest {
  /**
   * @schema TransferDescribeSecurityPolicyRequest#SecurityPolicyName
   */
  readonly securityPolicyName: string;

}

/**
 * @schema TransferDescribeSecurityPolicyResponse
 */
export interface TransferDescribeSecurityPolicyResponse {
  /**
   * @schema TransferDescribeSecurityPolicyResponse#SecurityPolicy
   */
  readonly securityPolicy: TransferDescribedSecurityPolicy;

}

/**
 * @schema TransferDescribeServerRequest
 */
export interface TransferDescribeServerRequest {
  /**
   * @schema TransferDescribeServerRequest#ServerId
   */
  readonly serverId: string;

}

/**
 * @schema TransferDescribeServerResponse
 */
export interface TransferDescribeServerResponse {
  /**
   * @schema TransferDescribeServerResponse#Server
   */
  readonly server: TransferDescribedServer;

}

/**
 * @schema TransferDescribeUserRequest
 */
export interface TransferDescribeUserRequest {
  /**
   * @schema TransferDescribeUserRequest#ServerId
   */
  readonly serverId: string;

  /**
   * @schema TransferDescribeUserRequest#UserName
   */
  readonly userName: string;

}

/**
 * @schema TransferDescribeUserResponse
 */
export interface TransferDescribeUserResponse {
  /**
   * @schema TransferDescribeUserResponse#ServerId
   */
  readonly serverId: string;

  /**
   * @schema TransferDescribeUserResponse#User
   */
  readonly user: TransferDescribedUser;

}

/**
 * @schema TransferImportSshPublicKeyRequest
 */
export interface TransferImportSshPublicKeyRequest {
  /**
   * @schema TransferImportSshPublicKeyRequest#ServerId
   */
  readonly serverId: string;

  /**
   * @schema TransferImportSshPublicKeyRequest#SshPublicKeyBody
   */
  readonly sshPublicKeyBody: string;

  /**
   * @schema TransferImportSshPublicKeyRequest#UserName
   */
  readonly userName: string;

}

/**
 * @schema TransferImportSshPublicKeyResponse
 */
export interface TransferImportSshPublicKeyResponse {
  /**
   * @schema TransferImportSshPublicKeyResponse#ServerId
   */
  readonly serverId: string;

  /**
   * @schema TransferImportSshPublicKeyResponse#SshPublicKeyId
   */
  readonly sshPublicKeyId: string;

  /**
   * @schema TransferImportSshPublicKeyResponse#UserName
   */
  readonly userName: string;

}

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
  readonly securityPolicyNames: string[];

}

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
  readonly servers: TransferListedServer[];

}

/**
 * @schema TransferListTagsForResourceRequest
 */
export interface TransferListTagsForResourceRequest {
  /**
   * @schema TransferListTagsForResourceRequest#Arn
   */
  readonly arn: string;

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
  readonly serverId: string;

}

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
  readonly serverId: string;

  /**
   * @schema TransferListUsersResponse#Users
   */
  readonly users: TransferListedUser[];

}

/**
 * @schema TransferStartServerRequest
 */
export interface TransferStartServerRequest {
  /**
   * @schema TransferStartServerRequest#ServerId
   */
  readonly serverId: string;

}

/**
 * @schema TransferStopServerRequest
 */
export interface TransferStopServerRequest {
  /**
   * @schema TransferStopServerRequest#ServerId
   */
  readonly serverId: string;

}

/**
 * @schema TransferTagResourceRequest
 */
export interface TransferTagResourceRequest {
  /**
   * @schema TransferTagResourceRequest#Arn
   */
  readonly arn: string;

  /**
   * @schema TransferTagResourceRequest#Tags
   */
  readonly tags: TransferTag[];

}

/**
 * @schema TransferTestIdentityProviderRequest
 */
export interface TransferTestIdentityProviderRequest {
  /**
   * @schema TransferTestIdentityProviderRequest#ServerId
   */
  readonly serverId: string;

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
  readonly userName: string;

  /**
   * @schema TransferTestIdentityProviderRequest#UserPassword
   */
  readonly userPassword?: string;

}

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
  readonly statusCode: number;

  /**
   * @schema TransferTestIdentityProviderResponse#Message
   */
  readonly message?: string;

  /**
   * @schema TransferTestIdentityProviderResponse#Url
   */
  readonly url: string;

}

/**
 * @schema TransferUntagResourceRequest
 */
export interface TransferUntagResourceRequest {
  /**
   * @schema TransferUntagResourceRequest#Arn
   */
  readonly arn: string;

  /**
   * @schema TransferUntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema TransferUpdateServerRequest
 */
export interface TransferUpdateServerRequest {
  /**
   * @schema TransferUpdateServerRequest#Certificate
   */
  readonly certificate?: string;

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
  readonly serverId: string;

}

/**
 * @schema TransferUpdateServerResponse
 */
export interface TransferUpdateServerResponse {
  /**
   * @schema TransferUpdateServerResponse#ServerId
   */
  readonly serverId: string;

}

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
   * @schema TransferUpdateUserRequest#Role
   */
  readonly role?: string;

  /**
   * @schema TransferUpdateUserRequest#ServerId
   */
  readonly serverId: string;

  /**
   * @schema TransferUpdateUserRequest#UserName
   */
  readonly userName: string;

}

/**
 * @schema TransferUpdateUserResponse
 */
export interface TransferUpdateUserResponse {
  /**
   * @schema TransferUpdateUserResponse#ServerId
   */
  readonly serverId: string;

  /**
   * @schema TransferUpdateUserResponse#UserName
   */
  readonly userName: string;

}

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

}

/**
 * @schema TransferTag
 */
export interface TransferTag {
  /**
   * @schema TransferTag#Key
   */
  readonly key: string;

  /**
   * @schema TransferTag#Value
   */
  readonly value: string;

}

/**
 * @schema TransferHomeDirectoryMapEntry
 */
export interface TransferHomeDirectoryMapEntry {
  /**
   * @schema TransferHomeDirectoryMapEntry#Entry
   */
  readonly entry: string;

  /**
   * @schema TransferHomeDirectoryMapEntry#Target
   */
  readonly target: string;

}

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
  readonly securityPolicyName: string;

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
 * @schema TransferDescribedServer
 */
export interface TransferDescribedServer {
  /**
   * @schema TransferDescribedServer#Arn
   */
  readonly arn: string;

  /**
   * @schema TransferDescribedServer#Certificate
   */
  readonly certificate?: string;

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
 * @schema TransferDescribedUser
 */
export interface TransferDescribedUser {
  /**
   * @schema TransferDescribedUser#Arn
   */
  readonly arn: string;

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
 * @schema TransferListedServer
 */
export interface TransferListedServer {
  /**
   * @schema TransferListedServer#Arn
   */
  readonly arn: string;

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
 * @schema TransferListedUser
 */
export interface TransferListedUser {
  /**
   * @schema TransferListedUser#Arn
   */
  readonly arn: string;

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
 * @schema TransferSshPublicKey
 */
export interface TransferSshPublicKey {
  /**
   * @schema TransferSshPublicKey#DateImported
   */
  readonly dateImported: string;

  /**
   * @schema TransferSshPublicKey#SshPublicKeyBody
   */
  readonly sshPublicKeyBody: string;

  /**
   * @schema TransferSshPublicKey#SshPublicKeyId
   */
  readonly sshPublicKeyId: string;

}
