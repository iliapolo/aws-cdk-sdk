/**
 * @schema CreateBrokerRequest
 */
export interface CreateBrokerRequest {
  /**
   * @schema CreateBrokerRequest#AuthenticationStrategy
   */
  readonly authenticationStrategy?: string;

  /**
   * @schema CreateBrokerRequest#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema CreateBrokerRequest#BrokerName
   */
  readonly brokerName?: string;

  /**
   * @schema CreateBrokerRequest#Configuration
   */
  readonly configuration?: ConfigurationId;

  /**
   * @schema CreateBrokerRequest#CreatorRequestId
   */
  readonly creatorRequestId?: string;

  /**
   * @schema CreateBrokerRequest#DeploymentMode
   */
  readonly deploymentMode?: string;

  /**
   * @schema CreateBrokerRequest#EncryptionOptions
   */
  readonly encryptionOptions?: EncryptionOptions;

  /**
   * @schema CreateBrokerRequest#EngineType
   */
  readonly engineType?: string;

  /**
   * @schema CreateBrokerRequest#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema CreateBrokerRequest#HostInstanceType
   */
  readonly hostInstanceType?: string;

  /**
   * @schema CreateBrokerRequest#LdapServerMetadata
   */
  readonly ldapServerMetadata?: LdapServerMetadataInput;

  /**
   * @schema CreateBrokerRequest#Logs
   */
  readonly logs?: Logs;

  /**
   * @schema CreateBrokerRequest#MaintenanceWindowStartTime
   */
  readonly maintenanceWindowStartTime?: WeeklyStartTime;

  /**
   * @schema CreateBrokerRequest#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema CreateBrokerRequest#SecurityGroups
   */
  readonly securityGroups?: string[];

  /**
   * @schema CreateBrokerRequest#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema CreateBrokerRequest#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema CreateBrokerRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema CreateBrokerRequest#Users
   */
  readonly users?: User[];

}

/**
 * @schema CreateBrokerResponse
 */
export interface CreateBrokerResponse {
  /**
   * @schema CreateBrokerResponse#BrokerArn
   */
  readonly brokerArn?: string;

  /**
   * @schema CreateBrokerResponse#BrokerId
   */
  readonly brokerId?: string;

}

/**
 * @schema CreateConfigurationRequest
 */
export interface CreateConfigurationRequest {
  /**
   * @schema CreateConfigurationRequest#AuthenticationStrategy
   */
  readonly authenticationStrategy?: string;

  /**
   * @schema CreateConfigurationRequest#EngineType
   */
  readonly engineType?: string;

  /**
   * @schema CreateConfigurationRequest#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema CreateConfigurationRequest#Name
   */
  readonly name?: string;

  /**
   * @schema CreateConfigurationRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateConfigurationResponse
 */
export interface CreateConfigurationResponse {
  /**
   * @schema CreateConfigurationResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema CreateConfigurationResponse#AuthenticationStrategy
   */
  readonly authenticationStrategy?: string;

  /**
   * @schema CreateConfigurationResponse#Created
   */
  readonly created?: string;

  /**
   * @schema CreateConfigurationResponse#Id
   */
  readonly id?: string;

  /**
   * @schema CreateConfigurationResponse#LatestRevision
   */
  readonly latestRevision?: ConfigurationRevision;

  /**
   * @schema CreateConfigurationResponse#Name
   */
  readonly name?: string;

}

/**
 * @schema CreateTagsRequest
 */
export interface CreateTagsRequest {
  /**
   * @schema CreateTagsRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema CreateTagsRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateUserRequest
 */
export interface CreateUserRequest {
  /**
   * @schema CreateUserRequest#BrokerId
   */
  readonly brokerId: string;

  /**
   * @schema CreateUserRequest#ConsoleAccess
   */
  readonly consoleAccess?: boolean;

  /**
   * @schema CreateUserRequest#Groups
   */
  readonly groups?: string[];

  /**
   * @schema CreateUserRequest#Password
   */
  readonly password?: string;

  /**
   * @schema CreateUserRequest#Username
   */
  readonly username: string;

}

/**
 * @schema CreateUserResponse
 */
export interface CreateUserResponse {
}

/**
 * @schema DeleteBrokerRequest
 */
export interface DeleteBrokerRequest {
  /**
   * @schema DeleteBrokerRequest#BrokerId
   */
  readonly brokerId: string;

}

/**
 * @schema DeleteBrokerResponse
 */
export interface DeleteBrokerResponse {
  /**
   * @schema DeleteBrokerResponse#BrokerId
   */
  readonly brokerId?: string;

}

/**
 * @schema DeleteTagsRequest
 */
export interface DeleteTagsRequest {
  /**
   * @schema DeleteTagsRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema DeleteTagsRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema DeleteUserRequest
 */
export interface DeleteUserRequest {
  /**
   * @schema DeleteUserRequest#BrokerId
   */
  readonly brokerId: string;

  /**
   * @schema DeleteUserRequest#Username
   */
  readonly username: string;

}

/**
 * @schema DeleteUserResponse
 */
export interface DeleteUserResponse {
}

/**
 * @schema DescribeBrokerRequest
 */
export interface DescribeBrokerRequest {
  /**
   * @schema DescribeBrokerRequest#BrokerId
   */
  readonly brokerId: string;

}

/**
 * @schema DescribeBrokerResponse
 */
export interface DescribeBrokerResponse {
  /**
   * @schema DescribeBrokerResponse#AuthenticationStrategy
   */
  readonly authenticationStrategy?: string;

  /**
   * @schema DescribeBrokerResponse#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema DescribeBrokerResponse#BrokerArn
   */
  readonly brokerArn?: string;

  /**
   * @schema DescribeBrokerResponse#BrokerId
   */
  readonly brokerId?: string;

  /**
   * @schema DescribeBrokerResponse#BrokerInstances
   */
  readonly brokerInstances?: BrokerInstance[];

  /**
   * @schema DescribeBrokerResponse#BrokerName
   */
  readonly brokerName?: string;

  /**
   * @schema DescribeBrokerResponse#BrokerState
   */
  readonly brokerState?: string;

  /**
   * @schema DescribeBrokerResponse#Configurations
   */
  readonly configurations?: Configurations;

  /**
   * @schema DescribeBrokerResponse#Created
   */
  readonly created?: string;

  /**
   * @schema DescribeBrokerResponse#DeploymentMode
   */
  readonly deploymentMode?: string;

  /**
   * @schema DescribeBrokerResponse#EncryptionOptions
   */
  readonly encryptionOptions?: EncryptionOptions;

  /**
   * @schema DescribeBrokerResponse#EngineType
   */
  readonly engineType?: string;

  /**
   * @schema DescribeBrokerResponse#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema DescribeBrokerResponse#HostInstanceType
   */
  readonly hostInstanceType?: string;

  /**
   * @schema DescribeBrokerResponse#LdapServerMetadata
   */
  readonly ldapServerMetadata?: LdapServerMetadataOutput;

  /**
   * @schema DescribeBrokerResponse#Logs
   */
  readonly logs?: LogsSummary;

  /**
   * @schema DescribeBrokerResponse#MaintenanceWindowStartTime
   */
  readonly maintenanceWindowStartTime?: WeeklyStartTime;

  /**
   * @schema DescribeBrokerResponse#PendingAuthenticationStrategy
   */
  readonly pendingAuthenticationStrategy?: string;

  /**
   * @schema DescribeBrokerResponse#PendingEngineVersion
   */
  readonly pendingEngineVersion?: string;

  /**
   * @schema DescribeBrokerResponse#PendingHostInstanceType
   */
  readonly pendingHostInstanceType?: string;

  /**
   * @schema DescribeBrokerResponse#PendingLdapServerMetadata
   */
  readonly pendingLdapServerMetadata?: LdapServerMetadataOutput;

  /**
   * @schema DescribeBrokerResponse#PendingSecurityGroups
   */
  readonly pendingSecurityGroups?: string[];

  /**
   * @schema DescribeBrokerResponse#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema DescribeBrokerResponse#SecurityGroups
   */
  readonly securityGroups?: string[];

  /**
   * @schema DescribeBrokerResponse#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema DescribeBrokerResponse#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema DescribeBrokerResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema DescribeBrokerResponse#Users
   */
  readonly users?: UserSummary[];

}

/**
 * @schema DescribeBrokerEngineTypesRequest
 */
export interface DescribeBrokerEngineTypesRequest {
  /**
   * @schema DescribeBrokerEngineTypesRequest#EngineType
   */
  readonly engineType?: string;

  /**
   * @schema DescribeBrokerEngineTypesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeBrokerEngineTypesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeBrokerEngineTypesResponse
 */
export interface DescribeBrokerEngineTypesResponse {
  /**
   * @schema DescribeBrokerEngineTypesResponse#BrokerEngineTypes
   */
  readonly brokerEngineTypes?: BrokerEngineType[];

  /**
   * @schema DescribeBrokerEngineTypesResponse#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeBrokerEngineTypesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeBrokerInstanceOptionsRequest
 */
export interface DescribeBrokerInstanceOptionsRequest {
  /**
   * @schema DescribeBrokerInstanceOptionsRequest#EngineType
   */
  readonly engineType?: string;

  /**
   * @schema DescribeBrokerInstanceOptionsRequest#HostInstanceType
   */
  readonly hostInstanceType?: string;

  /**
   * @schema DescribeBrokerInstanceOptionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeBrokerInstanceOptionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeBrokerInstanceOptionsRequest#StorageType
   */
  readonly storageType?: string;

}

/**
 * @schema DescribeBrokerInstanceOptionsResponse
 */
export interface DescribeBrokerInstanceOptionsResponse {
  /**
   * @schema DescribeBrokerInstanceOptionsResponse#BrokerInstanceOptions
   */
  readonly brokerInstanceOptions?: BrokerInstanceOption[];

  /**
   * @schema DescribeBrokerInstanceOptionsResponse#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeBrokerInstanceOptionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeConfigurationRequest
 */
export interface DescribeConfigurationRequest {
  /**
   * @schema DescribeConfigurationRequest#ConfigurationId
   */
  readonly configurationId: string;

}

/**
 * @schema DescribeConfigurationResponse
 */
export interface DescribeConfigurationResponse {
  /**
   * @schema DescribeConfigurationResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema DescribeConfigurationResponse#AuthenticationStrategy
   */
  readonly authenticationStrategy?: string;

  /**
   * @schema DescribeConfigurationResponse#Created
   */
  readonly created?: string;

  /**
   * @schema DescribeConfigurationResponse#Description
   */
  readonly description?: string;

  /**
   * @schema DescribeConfigurationResponse#EngineType
   */
  readonly engineType?: string;

  /**
   * @schema DescribeConfigurationResponse#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema DescribeConfigurationResponse#Id
   */
  readonly id?: string;

  /**
   * @schema DescribeConfigurationResponse#LatestRevision
   */
  readonly latestRevision?: ConfigurationRevision;

  /**
   * @schema DescribeConfigurationResponse#Name
   */
  readonly name?: string;

  /**
   * @schema DescribeConfigurationResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema DescribeConfigurationRevisionRequest
 */
export interface DescribeConfigurationRevisionRequest {
  /**
   * @schema DescribeConfigurationRevisionRequest#ConfigurationId
   */
  readonly configurationId: string;

  /**
   * @schema DescribeConfigurationRevisionRequest#ConfigurationRevision
   */
  readonly configurationRevision: string;

}

/**
 * @schema DescribeConfigurationRevisionResponse
 */
export interface DescribeConfigurationRevisionResponse {
  /**
   * @schema DescribeConfigurationRevisionResponse#ConfigurationId
   */
  readonly configurationId?: string;

  /**
   * @schema DescribeConfigurationRevisionResponse#Created
   */
  readonly created?: string;

  /**
   * @schema DescribeConfigurationRevisionResponse#Data
   */
  readonly data?: string;

  /**
   * @schema DescribeConfigurationRevisionResponse#Description
   */
  readonly description?: string;

}

/**
 * @schema DescribeUserRequest
 */
export interface DescribeUserRequest {
  /**
   * @schema DescribeUserRequest#BrokerId
   */
  readonly brokerId: string;

  /**
   * @schema DescribeUserRequest#Username
   */
  readonly username: string;

}

/**
 * @schema DescribeUserResponse
 */
export interface DescribeUserResponse {
  /**
   * @schema DescribeUserResponse#BrokerId
   */
  readonly brokerId?: string;

  /**
   * @schema DescribeUserResponse#ConsoleAccess
   */
  readonly consoleAccess?: boolean;

  /**
   * @schema DescribeUserResponse#Groups
   */
  readonly groups?: string[];

  /**
   * @schema DescribeUserResponse#Pending
   */
  readonly pending?: UserPendingChanges;

  /**
   * @schema DescribeUserResponse#Username
   */
  readonly username?: string;

}

/**
 * @schema ListBrokersRequest
 */
export interface ListBrokersRequest {
  /**
   * @schema ListBrokersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListBrokersRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListBrokersResponse
 */
export interface ListBrokersResponse {
  /**
   * @schema ListBrokersResponse#BrokerSummaries
   */
  readonly brokerSummaries?: BrokerSummary[];

  /**
   * @schema ListBrokersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListConfigurationRevisionsRequest
 */
export interface ListConfigurationRevisionsRequest {
  /**
   * @schema ListConfigurationRevisionsRequest#ConfigurationId
   */
  readonly configurationId: string;

  /**
   * @schema ListConfigurationRevisionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListConfigurationRevisionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListConfigurationRevisionsResponse
 */
export interface ListConfigurationRevisionsResponse {
  /**
   * @schema ListConfigurationRevisionsResponse#ConfigurationId
   */
  readonly configurationId?: string;

  /**
   * @schema ListConfigurationRevisionsResponse#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListConfigurationRevisionsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListConfigurationRevisionsResponse#Revisions
   */
  readonly revisions?: ConfigurationRevision[];

}

/**
 * @schema ListConfigurationsRequest
 */
export interface ListConfigurationsRequest {
  /**
   * @schema ListConfigurationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListConfigurationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListConfigurationsResponse
 */
export interface ListConfigurationsResponse {
  /**
   * @schema ListConfigurationsResponse#Configurations
   */
  readonly configurations?: Configuration[];

  /**
   * @schema ListConfigurationsResponse#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListConfigurationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsRequest
 */
export interface ListTagsRequest {
  /**
   * @schema ListTagsRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema ListTagsResponse
 */
export interface ListTagsResponse {
  /**
   * @schema ListTagsResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema ListUsersRequest
 */
export interface ListUsersRequest {
  /**
   * @schema ListUsersRequest#BrokerId
   */
  readonly brokerId: string;

  /**
   * @schema ListUsersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListUsersRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListUsersResponse
 */
export interface ListUsersResponse {
  /**
   * @schema ListUsersResponse#BrokerId
   */
  readonly brokerId?: string;

  /**
   * @schema ListUsersResponse#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListUsersResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListUsersResponse#Users
   */
  readonly users?: UserSummary[];

}

/**
 * @schema RebootBrokerRequest
 */
export interface RebootBrokerRequest {
  /**
   * @schema RebootBrokerRequest#BrokerId
   */
  readonly brokerId: string;

}

/**
 * @schema RebootBrokerResponse
 */
export interface RebootBrokerResponse {
}

/**
 * @schema UpdateBrokerRequest
 */
export interface UpdateBrokerRequest {
  /**
   * @schema UpdateBrokerRequest#AuthenticationStrategy
   */
  readonly authenticationStrategy?: string;

  /**
   * @schema UpdateBrokerRequest#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema UpdateBrokerRequest#BrokerId
   */
  readonly brokerId: string;

  /**
   * @schema UpdateBrokerRequest#Configuration
   */
  readonly configuration?: ConfigurationId;

  /**
   * @schema UpdateBrokerRequest#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema UpdateBrokerRequest#HostInstanceType
   */
  readonly hostInstanceType?: string;

  /**
   * @schema UpdateBrokerRequest#LdapServerMetadata
   */
  readonly ldapServerMetadata?: LdapServerMetadataInput;

  /**
   * @schema UpdateBrokerRequest#Logs
   */
  readonly logs?: Logs;

  /**
   * @schema UpdateBrokerRequest#SecurityGroups
   */
  readonly securityGroups?: string[];

}

/**
 * @schema UpdateBrokerResponse
 */
export interface UpdateBrokerResponse {
  /**
   * @schema UpdateBrokerResponse#AuthenticationStrategy
   */
  readonly authenticationStrategy?: string;

  /**
   * @schema UpdateBrokerResponse#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema UpdateBrokerResponse#BrokerId
   */
  readonly brokerId?: string;

  /**
   * @schema UpdateBrokerResponse#Configuration
   */
  readonly configuration?: ConfigurationId;

  /**
   * @schema UpdateBrokerResponse#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema UpdateBrokerResponse#HostInstanceType
   */
  readonly hostInstanceType?: string;

  /**
   * @schema UpdateBrokerResponse#LdapServerMetadata
   */
  readonly ldapServerMetadata?: LdapServerMetadataOutput;

  /**
   * @schema UpdateBrokerResponse#Logs
   */
  readonly logs?: Logs;

  /**
   * @schema UpdateBrokerResponse#SecurityGroups
   */
  readonly securityGroups?: string[];

}

/**
 * @schema UpdateConfigurationRequest
 */
export interface UpdateConfigurationRequest {
  /**
   * @schema UpdateConfigurationRequest#ConfigurationId
   */
  readonly configurationId: string;

  /**
   * @schema UpdateConfigurationRequest#Data
   */
  readonly data?: string;

  /**
   * @schema UpdateConfigurationRequest#Description
   */
  readonly description?: string;

}

/**
 * @schema UpdateConfigurationResponse
 */
export interface UpdateConfigurationResponse {
  /**
   * @schema UpdateConfigurationResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema UpdateConfigurationResponse#Created
   */
  readonly created?: string;

  /**
   * @schema UpdateConfigurationResponse#Id
   */
  readonly id?: string;

  /**
   * @schema UpdateConfigurationResponse#LatestRevision
   */
  readonly latestRevision?: ConfigurationRevision;

  /**
   * @schema UpdateConfigurationResponse#Name
   */
  readonly name?: string;

  /**
   * @schema UpdateConfigurationResponse#Warnings
   */
  readonly warnings?: SanitizationWarning[];

}

/**
 * @schema UpdateUserRequest
 */
export interface UpdateUserRequest {
  /**
   * @schema UpdateUserRequest#BrokerId
   */
  readonly brokerId: string;

  /**
   * @schema UpdateUserRequest#ConsoleAccess
   */
  readonly consoleAccess?: boolean;

  /**
   * @schema UpdateUserRequest#Groups
   */
  readonly groups?: string[];

  /**
   * @schema UpdateUserRequest#Password
   */
  readonly password?: string;

  /**
   * @schema UpdateUserRequest#Username
   */
  readonly username: string;

}

/**
 * @schema UpdateUserResponse
 */
export interface UpdateUserResponse {
}

/**
 * @schema ConfigurationId
 */
export interface ConfigurationId {
  /**
   * @schema ConfigurationId#Id
   */
  readonly id?: string;

  /**
   * @schema ConfigurationId#Revision
   */
  readonly revision?: number;

}

/**
 * @schema EncryptionOptions
 */
export interface EncryptionOptions {
  /**
   * @schema EncryptionOptions#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema EncryptionOptions#UseAwsOwnedKey
   */
  readonly useAwsOwnedKey: boolean;

}

/**
 * @schema LdapServerMetadataInput
 */
export interface LdapServerMetadataInput {
  /**
   * @schema LdapServerMetadataInput#Hosts
   */
  readonly hosts?: string[];

  /**
   * @schema LdapServerMetadataInput#RoleBase
   */
  readonly roleBase?: string;

  /**
   * @schema LdapServerMetadataInput#RoleName
   */
  readonly roleName?: string;

  /**
   * @schema LdapServerMetadataInput#RoleSearchMatching
   */
  readonly roleSearchMatching?: string;

  /**
   * @schema LdapServerMetadataInput#RoleSearchSubtree
   */
  readonly roleSearchSubtree?: boolean;

  /**
   * @schema LdapServerMetadataInput#ServiceAccountPassword
   */
  readonly serviceAccountPassword?: string;

  /**
   * @schema LdapServerMetadataInput#ServiceAccountUsername
   */
  readonly serviceAccountUsername?: string;

  /**
   * @schema LdapServerMetadataInput#UserBase
   */
  readonly userBase?: string;

  /**
   * @schema LdapServerMetadataInput#UserRoleName
   */
  readonly userRoleName?: string;

  /**
   * @schema LdapServerMetadataInput#UserSearchMatching
   */
  readonly userSearchMatching?: string;

  /**
   * @schema LdapServerMetadataInput#UserSearchSubtree
   */
  readonly userSearchSubtree?: boolean;

}

/**
 * @schema Logs
 */
export interface Logs {
  /**
   * @schema Logs#Audit
   */
  readonly audit?: boolean;

  /**
   * @schema Logs#General
   */
  readonly general?: boolean;

}

/**
 * @schema WeeklyStartTime
 */
export interface WeeklyStartTime {
  /**
   * @schema WeeklyStartTime#DayOfWeek
   */
  readonly dayOfWeek?: string;

  /**
   * @schema WeeklyStartTime#TimeOfDay
   */
  readonly timeOfDay?: string;

  /**
   * @schema WeeklyStartTime#TimeZone
   */
  readonly timeZone?: string;

}

/**
 * @schema User
 */
export interface User {
  /**
   * @schema User#ConsoleAccess
   */
  readonly consoleAccess?: boolean;

  /**
   * @schema User#Groups
   */
  readonly groups?: string[];

  /**
   * @schema User#Password
   */
  readonly password?: string;

  /**
   * @schema User#Username
   */
  readonly username?: string;

}

/**
 * @schema ConfigurationRevision
 */
export interface ConfigurationRevision {
  /**
   * @schema ConfigurationRevision#Created
   */
  readonly created?: string;

  /**
   * @schema ConfigurationRevision#Description
   */
  readonly description?: string;

  /**
   * @schema ConfigurationRevision#Revision
   */
  readonly revision?: number;

}

/**
 * @schema BrokerInstance
 */
export interface BrokerInstance {
  /**
   * @schema BrokerInstance#ConsoleURL
   */
  readonly consoleUrl?: string;

  /**
   * @schema BrokerInstance#Endpoints
   */
  readonly endpoints?: string[];

  /**
   * @schema BrokerInstance#IpAddress
   */
  readonly ipAddress?: string;

}

/**
 * @schema Configurations
 */
export interface Configurations {
  /**
   * @schema Configurations#Current
   */
  readonly current?: ConfigurationId;

  /**
   * @schema Configurations#History
   */
  readonly history?: ConfigurationId[];

  /**
   * @schema Configurations#Pending
   */
  readonly pending?: ConfigurationId;

}

/**
 * @schema LdapServerMetadataOutput
 */
export interface LdapServerMetadataOutput {
  /**
   * @schema LdapServerMetadataOutput#Hosts
   */
  readonly hosts?: string[];

  /**
   * @schema LdapServerMetadataOutput#RoleBase
   */
  readonly roleBase?: string;

  /**
   * @schema LdapServerMetadataOutput#RoleName
   */
  readonly roleName?: string;

  /**
   * @schema LdapServerMetadataOutput#RoleSearchMatching
   */
  readonly roleSearchMatching?: string;

  /**
   * @schema LdapServerMetadataOutput#RoleSearchSubtree
   */
  readonly roleSearchSubtree?: boolean;

  /**
   * @schema LdapServerMetadataOutput#ServiceAccountUsername
   */
  readonly serviceAccountUsername?: string;

  /**
   * @schema LdapServerMetadataOutput#UserBase
   */
  readonly userBase?: string;

  /**
   * @schema LdapServerMetadataOutput#UserRoleName
   */
  readonly userRoleName?: string;

  /**
   * @schema LdapServerMetadataOutput#UserSearchMatching
   */
  readonly userSearchMatching?: string;

  /**
   * @schema LdapServerMetadataOutput#UserSearchSubtree
   */
  readonly userSearchSubtree?: boolean;

}

/**
 * @schema LogsSummary
 */
export interface LogsSummary {
  /**
   * @schema LogsSummary#Audit
   */
  readonly audit?: boolean;

  /**
   * @schema LogsSummary#AuditLogGroup
   */
  readonly auditLogGroup?: string;

  /**
   * @schema LogsSummary#General
   */
  readonly general?: boolean;

  /**
   * @schema LogsSummary#GeneralLogGroup
   */
  readonly generalLogGroup?: string;

  /**
   * @schema LogsSummary#Pending
   */
  readonly pending?: PendingLogs;

}

/**
 * @schema UserSummary
 */
export interface UserSummary {
  /**
   * @schema UserSummary#PendingChange
   */
  readonly pendingChange?: string;

  /**
   * @schema UserSummary#Username
   */
  readonly username?: string;

}

/**
 * @schema BrokerEngineType
 */
export interface BrokerEngineType {
  /**
   * @schema BrokerEngineType#EngineType
   */
  readonly engineType?: string;

  /**
   * @schema BrokerEngineType#EngineVersions
   */
  readonly engineVersions?: EngineVersion[];

}

/**
 * @schema BrokerInstanceOption
 */
export interface BrokerInstanceOption {
  /**
   * @schema BrokerInstanceOption#AvailabilityZones
   */
  readonly availabilityZones?: AvailabilityZone[];

  /**
   * @schema BrokerInstanceOption#EngineType
   */
  readonly engineType?: string;

  /**
   * @schema BrokerInstanceOption#HostInstanceType
   */
  readonly hostInstanceType?: string;

  /**
   * @schema BrokerInstanceOption#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema BrokerInstanceOption#SupportedDeploymentModes
   */
  readonly supportedDeploymentModes?: string[];

  /**
   * @schema BrokerInstanceOption#SupportedEngineVersions
   */
  readonly supportedEngineVersions?: string[];

}

/**
 * @schema UserPendingChanges
 */
export interface UserPendingChanges {
  /**
   * @schema UserPendingChanges#ConsoleAccess
   */
  readonly consoleAccess?: boolean;

  /**
   * @schema UserPendingChanges#Groups
   */
  readonly groups?: string[];

  /**
   * @schema UserPendingChanges#PendingChange
   */
  readonly pendingChange?: string;

}

/**
 * @schema BrokerSummary
 */
export interface BrokerSummary {
  /**
   * @schema BrokerSummary#BrokerArn
   */
  readonly brokerArn?: string;

  /**
   * @schema BrokerSummary#BrokerId
   */
  readonly brokerId?: string;

  /**
   * @schema BrokerSummary#BrokerName
   */
  readonly brokerName?: string;

  /**
   * @schema BrokerSummary#BrokerState
   */
  readonly brokerState?: string;

  /**
   * @schema BrokerSummary#Created
   */
  readonly created?: string;

  /**
   * @schema BrokerSummary#DeploymentMode
   */
  readonly deploymentMode?: string;

  /**
   * @schema BrokerSummary#EngineType
   */
  readonly engineType?: string;

  /**
   * @schema BrokerSummary#HostInstanceType
   */
  readonly hostInstanceType?: string;

}

/**
 * @schema Configuration
 */
export interface Configuration {
  /**
   * @schema Configuration#Arn
   */
  readonly arn?: string;

  /**
   * @schema Configuration#AuthenticationStrategy
   */
  readonly authenticationStrategy?: string;

  /**
   * @schema Configuration#Created
   */
  readonly created?: string;

  /**
   * @schema Configuration#Description
   */
  readonly description?: string;

  /**
   * @schema Configuration#EngineType
   */
  readonly engineType?: string;

  /**
   * @schema Configuration#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema Configuration#Id
   */
  readonly id?: string;

  /**
   * @schema Configuration#LatestRevision
   */
  readonly latestRevision?: ConfigurationRevision;

  /**
   * @schema Configuration#Name
   */
  readonly name?: string;

  /**
   * @schema Configuration#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema SanitizationWarning
 */
export interface SanitizationWarning {
  /**
   * @schema SanitizationWarning#AttributeName
   */
  readonly attributeName?: string;

  /**
   * @schema SanitizationWarning#ElementName
   */
  readonly elementName?: string;

  /**
   * @schema SanitizationWarning#Reason
   */
  readonly reason?: string;

}

/**
 * @schema PendingLogs
 */
export interface PendingLogs {
  /**
   * @schema PendingLogs#Audit
   */
  readonly audit?: boolean;

  /**
   * @schema PendingLogs#General
   */
  readonly general?: boolean;

}

/**
 * @schema EngineVersion
 */
export interface EngineVersion {
  /**
   * @schema EngineVersion#Name
   */
  readonly name?: string;

}

/**
 * @schema AvailabilityZone
 */
export interface AvailabilityZone {
  /**
   * @schema AvailabilityZone#Name
   */
  readonly name?: string;

}
