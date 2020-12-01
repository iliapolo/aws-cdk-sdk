/**
 * @schema CreateServerRequest
 */
export interface CreateServerRequest {
  /**
   * @schema CreateServerRequest#Certificate
   */
  readonly certificate?: string;

  /**
   * @schema CreateServerRequest#EndpointDetails
   */
  readonly endpointDetails?: EndpointDetails;

  /**
   * @schema CreateServerRequest#EndpointType
   */
  readonly endpointType?: string;

  /**
   * @schema CreateServerRequest#HostKey
   */
  readonly hostKey?: string;

  /**
   * @schema CreateServerRequest#IdentityProviderDetails
   */
  readonly identityProviderDetails?: IdentityProviderDetails;

  /**
   * @schema CreateServerRequest#IdentityProviderType
   */
  readonly identityProviderType?: string;

  /**
   * @schema CreateServerRequest#LoggingRole
   */
  readonly loggingRole?: string;

  /**
   * @schema CreateServerRequest#Protocols
   */
  readonly protocols?: string[];

  /**
   * @schema CreateServerRequest#SecurityPolicyName
   */
  readonly securityPolicyName?: string;

  /**
   * @schema CreateServerRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateServerResponse
 */
export interface CreateServerResponse {
  /**
   * @schema CreateServerResponse#ServerId
   */
  readonly serverId: string;

}

/**
 * @schema CreateUserRequest
 */
export interface CreateUserRequest {
  /**
   * @schema CreateUserRequest#HomeDirectory
   */
  readonly homeDirectory?: string;

  /**
   * @schema CreateUserRequest#HomeDirectoryType
   */
  readonly homeDirectoryType?: string;

  /**
   * @schema CreateUserRequest#HomeDirectoryMappings
   */
  readonly homeDirectoryMappings?: HomeDirectoryMapEntry[];

  /**
   * @schema CreateUserRequest#Policy
   */
  readonly policy?: string;

  /**
   * @schema CreateUserRequest#Role
   */
  readonly role: string;

  /**
   * @schema CreateUserRequest#ServerId
   */
  readonly serverId: string;

  /**
   * @schema CreateUserRequest#SshPublicKeyBody
   */
  readonly sshPublicKeyBody?: string;

  /**
   * @schema CreateUserRequest#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateUserRequest#UserName
   */
  readonly userName: string;

}

/**
 * @schema CreateUserResponse
 */
export interface CreateUserResponse {
  /**
   * @schema CreateUserResponse#ServerId
   */
  readonly serverId: string;

  /**
   * @schema CreateUserResponse#UserName
   */
  readonly userName: string;

}

/**
 * @schema DeleteServerRequest
 */
export interface DeleteServerRequest {
  /**
   * @schema DeleteServerRequest#ServerId
   */
  readonly serverId: string;

}

/**
 * @schema DeleteSshPublicKeyRequest
 */
export interface DeleteSshPublicKeyRequest {
  /**
   * @schema DeleteSshPublicKeyRequest#ServerId
   */
  readonly serverId: string;

  /**
   * @schema DeleteSshPublicKeyRequest#SshPublicKeyId
   */
  readonly sshPublicKeyId: string;

  /**
   * @schema DeleteSshPublicKeyRequest#UserName
   */
  readonly userName: string;

}

/**
 * @schema DeleteUserRequest
 */
export interface DeleteUserRequest {
  /**
   * @schema DeleteUserRequest#ServerId
   */
  readonly serverId: string;

  /**
   * @schema DeleteUserRequest#UserName
   */
  readonly userName: string;

}

/**
 * @schema DescribeSecurityPolicyRequest
 */
export interface DescribeSecurityPolicyRequest {
  /**
   * @schema DescribeSecurityPolicyRequest#SecurityPolicyName
   */
  readonly securityPolicyName: string;

}

/**
 * @schema DescribeSecurityPolicyResponse
 */
export interface DescribeSecurityPolicyResponse {
  /**
   * @schema DescribeSecurityPolicyResponse#SecurityPolicy
   */
  readonly securityPolicy: DescribedSecurityPolicy;

}

/**
 * @schema DescribeServerRequest
 */
export interface DescribeServerRequest {
  /**
   * @schema DescribeServerRequest#ServerId
   */
  readonly serverId: string;

}

/**
 * @schema DescribeServerResponse
 */
export interface DescribeServerResponse {
  /**
   * @schema DescribeServerResponse#Server
   */
  readonly server: DescribedServer;

}

/**
 * @schema DescribeUserRequest
 */
export interface DescribeUserRequest {
  /**
   * @schema DescribeUserRequest#ServerId
   */
  readonly serverId: string;

  /**
   * @schema DescribeUserRequest#UserName
   */
  readonly userName: string;

}

/**
 * @schema DescribeUserResponse
 */
export interface DescribeUserResponse {
  /**
   * @schema DescribeUserResponse#ServerId
   */
  readonly serverId: string;

  /**
   * @schema DescribeUserResponse#User
   */
  readonly user: DescribedUser;

}

/**
 * @schema ImportSshPublicKeyRequest
 */
export interface ImportSshPublicKeyRequest {
  /**
   * @schema ImportSshPublicKeyRequest#ServerId
   */
  readonly serverId: string;

  /**
   * @schema ImportSshPublicKeyRequest#SshPublicKeyBody
   */
  readonly sshPublicKeyBody: string;

  /**
   * @schema ImportSshPublicKeyRequest#UserName
   */
  readonly userName: string;

}

/**
 * @schema ImportSshPublicKeyResponse
 */
export interface ImportSshPublicKeyResponse {
  /**
   * @schema ImportSshPublicKeyResponse#ServerId
   */
  readonly serverId: string;

  /**
   * @schema ImportSshPublicKeyResponse#SshPublicKeyId
   */
  readonly sshPublicKeyId: string;

  /**
   * @schema ImportSshPublicKeyResponse#UserName
   */
  readonly userName: string;

}

/**
 * @schema ListSecurityPoliciesRequest
 */
export interface ListSecurityPoliciesRequest {
  /**
   * @schema ListSecurityPoliciesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListSecurityPoliciesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListSecurityPoliciesResponse
 */
export interface ListSecurityPoliciesResponse {
  /**
   * @schema ListSecurityPoliciesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListSecurityPoliciesResponse#SecurityPolicyNames
   */
  readonly securityPolicyNames: string[];

}

/**
 * @schema ListServersRequest
 */
export interface ListServersRequest {
  /**
   * @schema ListServersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListServersRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListServersResponse
 */
export interface ListServersResponse {
  /**
   * @schema ListServersResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListServersResponse#Servers
   */
  readonly servers: ListedServer[];

}

/**
 * @schema ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * @schema ListTagsForResourceRequest#Arn
   */
  readonly arn: string;

  /**
   * @schema ListTagsForResourceRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListTagsForResourceRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsForResourceResponse
 */
export interface ListTagsForResourceResponse {
  /**
   * @schema ListTagsForResourceResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema ListTagsForResourceResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListTagsForResourceResponse#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema ListUsersRequest
 */
export interface ListUsersRequest {
  /**
   * @schema ListUsersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListUsersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListUsersRequest#ServerId
   */
  readonly serverId: string;

}

/**
 * @schema ListUsersResponse
 */
export interface ListUsersResponse {
  /**
   * @schema ListUsersResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListUsersResponse#ServerId
   */
  readonly serverId: string;

  /**
   * @schema ListUsersResponse#Users
   */
  readonly users: ListedUser[];

}

/**
 * @schema StartServerRequest
 */
export interface StartServerRequest {
  /**
   * @schema StartServerRequest#ServerId
   */
  readonly serverId: string;

}

/**
 * @schema StopServerRequest
 */
export interface StopServerRequest {
  /**
   * @schema StopServerRequest#ServerId
   */
  readonly serverId: string;

}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#Arn
   */
  readonly arn: string;

  /**
   * @schema TagResourceRequest#Tags
   */
  readonly tags: Tag[];

}

/**
 * @schema TestIdentityProviderRequest
 */
export interface TestIdentityProviderRequest {
  /**
   * @schema TestIdentityProviderRequest#ServerId
   */
  readonly serverId: string;

  /**
   * @schema TestIdentityProviderRequest#ServerProtocol
   */
  readonly serverProtocol?: string;

  /**
   * @schema TestIdentityProviderRequest#SourceIp
   */
  readonly sourceIp?: string;

  /**
   * @schema TestIdentityProviderRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema TestIdentityProviderRequest#UserPassword
   */
  readonly userPassword?: string;

}

/**
 * @schema TestIdentityProviderResponse
 */
export interface TestIdentityProviderResponse {
  /**
   * @schema TestIdentityProviderResponse#Response
   */
  readonly response?: string;

  /**
   * @schema TestIdentityProviderResponse#StatusCode
   */
  readonly statusCode: number;

  /**
   * @schema TestIdentityProviderResponse#Message
   */
  readonly message?: string;

  /**
   * @schema TestIdentityProviderResponse#Url
   */
  readonly url: string;

}

/**
 * @schema UntagResourceRequest
 */
export interface UntagResourceRequest {
  /**
   * @schema UntagResourceRequest#Arn
   */
  readonly arn: string;

  /**
   * @schema UntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UpdateServerRequest
 */
export interface UpdateServerRequest {
  /**
   * @schema UpdateServerRequest#Certificate
   */
  readonly certificate?: string;

  /**
   * @schema UpdateServerRequest#EndpointDetails
   */
  readonly endpointDetails?: EndpointDetails;

  /**
   * @schema UpdateServerRequest#EndpointType
   */
  readonly endpointType?: string;

  /**
   * @schema UpdateServerRequest#HostKey
   */
  readonly hostKey?: string;

  /**
   * @schema UpdateServerRequest#IdentityProviderDetails
   */
  readonly identityProviderDetails?: IdentityProviderDetails;

  /**
   * @schema UpdateServerRequest#LoggingRole
   */
  readonly loggingRole?: string;

  /**
   * @schema UpdateServerRequest#Protocols
   */
  readonly protocols?: string[];

  /**
   * @schema UpdateServerRequest#SecurityPolicyName
   */
  readonly securityPolicyName?: string;

  /**
   * @schema UpdateServerRequest#ServerId
   */
  readonly serverId: string;

}

/**
 * @schema UpdateServerResponse
 */
export interface UpdateServerResponse {
  /**
   * @schema UpdateServerResponse#ServerId
   */
  readonly serverId: string;

}

/**
 * @schema UpdateUserRequest
 */
export interface UpdateUserRequest {
  /**
   * @schema UpdateUserRequest#HomeDirectory
   */
  readonly homeDirectory?: string;

  /**
   * @schema UpdateUserRequest#HomeDirectoryType
   */
  readonly homeDirectoryType?: string;

  /**
   * @schema UpdateUserRequest#HomeDirectoryMappings
   */
  readonly homeDirectoryMappings?: HomeDirectoryMapEntry[];

  /**
   * @schema UpdateUserRequest#Policy
   */
  readonly policy?: string;

  /**
   * @schema UpdateUserRequest#Role
   */
  readonly role?: string;

  /**
   * @schema UpdateUserRequest#ServerId
   */
  readonly serverId: string;

  /**
   * @schema UpdateUserRequest#UserName
   */
  readonly userName: string;

}

/**
 * @schema UpdateUserResponse
 */
export interface UpdateUserResponse {
  /**
   * @schema UpdateUserResponse#ServerId
   */
  readonly serverId: string;

  /**
   * @schema UpdateUserResponse#UserName
   */
  readonly userName: string;

}

/**
 * @schema EndpointDetails
 */
export interface EndpointDetails {
  /**
   * @schema EndpointDetails#AddressAllocationIds
   */
  readonly addressAllocationIds?: string[];

  /**
   * @schema EndpointDetails#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema EndpointDetails#VpcEndpointId
   */
  readonly vpcEndpointId?: string;

  /**
   * @schema EndpointDetails#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema EndpointDetails#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

}

/**
 * @schema IdentityProviderDetails
 */
export interface IdentityProviderDetails {
  /**
   * @schema IdentityProviderDetails#Url
   */
  readonly url?: string;

  /**
   * @schema IdentityProviderDetails#InvocationRole
   */
  readonly invocationRole?: string;

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
 * @schema HomeDirectoryMapEntry
 */
export interface HomeDirectoryMapEntry {
  /**
   * @schema HomeDirectoryMapEntry#Entry
   */
  readonly entry: string;

  /**
   * @schema HomeDirectoryMapEntry#Target
   */
  readonly target: string;

}

/**
 * @schema DescribedSecurityPolicy
 */
export interface DescribedSecurityPolicy {
  /**
   * @schema DescribedSecurityPolicy#Fips
   */
  readonly fips?: boolean;

  /**
   * @schema DescribedSecurityPolicy#SecurityPolicyName
   */
  readonly securityPolicyName: string;

  /**
   * @schema DescribedSecurityPolicy#SshCiphers
   */
  readonly sshCiphers?: string[];

  /**
   * @schema DescribedSecurityPolicy#SshKexs
   */
  readonly sshKexs?: string[];

  /**
   * @schema DescribedSecurityPolicy#SshMacs
   */
  readonly sshMacs?: string[];

  /**
   * @schema DescribedSecurityPolicy#TlsCiphers
   */
  readonly tlsCiphers?: string[];

}

/**
 * @schema DescribedServer
 */
export interface DescribedServer {
  /**
   * @schema DescribedServer#Arn
   */
  readonly arn: string;

  /**
   * @schema DescribedServer#Certificate
   */
  readonly certificate?: string;

  /**
   * @schema DescribedServer#EndpointDetails
   */
  readonly endpointDetails?: EndpointDetails;

  /**
   * @schema DescribedServer#EndpointType
   */
  readonly endpointType?: string;

  /**
   * @schema DescribedServer#HostKeyFingerprint
   */
  readonly hostKeyFingerprint?: string;

  /**
   * @schema DescribedServer#IdentityProviderDetails
   */
  readonly identityProviderDetails?: IdentityProviderDetails;

  /**
   * @schema DescribedServer#IdentityProviderType
   */
  readonly identityProviderType?: string;

  /**
   * @schema DescribedServer#LoggingRole
   */
  readonly loggingRole?: string;

  /**
   * @schema DescribedServer#Protocols
   */
  readonly protocols?: string[];

  /**
   * @schema DescribedServer#SecurityPolicyName
   */
  readonly securityPolicyName?: string;

  /**
   * @schema DescribedServer#ServerId
   */
  readonly serverId?: string;

  /**
   * @schema DescribedServer#State
   */
  readonly state?: string;

  /**
   * @schema DescribedServer#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema DescribedServer#UserCount
   */
  readonly userCount?: number;

}

/**
 * @schema DescribedUser
 */
export interface DescribedUser {
  /**
   * @schema DescribedUser#Arn
   */
  readonly arn: string;

  /**
   * @schema DescribedUser#HomeDirectory
   */
  readonly homeDirectory?: string;

  /**
   * @schema DescribedUser#HomeDirectoryMappings
   */
  readonly homeDirectoryMappings?: HomeDirectoryMapEntry[];

  /**
   * @schema DescribedUser#HomeDirectoryType
   */
  readonly homeDirectoryType?: string;

  /**
   * @schema DescribedUser#Policy
   */
  readonly policy?: string;

  /**
   * @schema DescribedUser#Role
   */
  readonly role?: string;

  /**
   * @schema DescribedUser#SshPublicKeys
   */
  readonly sshPublicKeys?: SshPublicKey[];

  /**
   * @schema DescribedUser#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema DescribedUser#UserName
   */
  readonly userName?: string;

}

/**
 * @schema ListedServer
 */
export interface ListedServer {
  /**
   * @schema ListedServer#Arn
   */
  readonly arn: string;

  /**
   * @schema ListedServer#IdentityProviderType
   */
  readonly identityProviderType?: string;

  /**
   * @schema ListedServer#EndpointType
   */
  readonly endpointType?: string;

  /**
   * @schema ListedServer#LoggingRole
   */
  readonly loggingRole?: string;

  /**
   * @schema ListedServer#ServerId
   */
  readonly serverId?: string;

  /**
   * @schema ListedServer#State
   */
  readonly state?: string;

  /**
   * @schema ListedServer#UserCount
   */
  readonly userCount?: number;

}

/**
 * @schema ListedUser
 */
export interface ListedUser {
  /**
   * @schema ListedUser#Arn
   */
  readonly arn: string;

  /**
   * @schema ListedUser#HomeDirectory
   */
  readonly homeDirectory?: string;

  /**
   * @schema ListedUser#HomeDirectoryType
   */
  readonly homeDirectoryType?: string;

  /**
   * @schema ListedUser#Role
   */
  readonly role?: string;

  /**
   * @schema ListedUser#SshPublicKeyCount
   */
  readonly sshPublicKeyCount?: number;

  /**
   * @schema ListedUser#UserName
   */
  readonly userName?: string;

}

/**
 * @schema SshPublicKey
 */
export interface SshPublicKey {
  /**
   * @schema SshPublicKey#DateImported
   */
  readonly dateImported: string;

  /**
   * @schema SshPublicKey#SshPublicKeyBody
   */
  readonly sshPublicKeyBody: string;

  /**
   * @schema SshPublicKey#SshPublicKeyId
   */
  readonly sshPublicKeyId: string;

}
