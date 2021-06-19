/**
 * @schema MqCreateBrokerRequest
 */
export interface MqCreateBrokerRequest {
  /**
   * @schema MqCreateBrokerRequest#AuthenticationStrategy
   */
  readonly authenticationStrategy?: string;

  /**
   * @schema MqCreateBrokerRequest#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema MqCreateBrokerRequest#BrokerName
   */
  readonly brokerName?: string;

  /**
   * @schema MqCreateBrokerRequest#Configuration
   */
  readonly configuration?: MqConfigurationId;

  /**
   * @schema MqCreateBrokerRequest#CreatorRequestId
   */
  readonly creatorRequestId?: string;

  /**
   * @schema MqCreateBrokerRequest#DeploymentMode
   */
  readonly deploymentMode?: string;

  /**
   * @schema MqCreateBrokerRequest#EncryptionOptions
   */
  readonly encryptionOptions?: MqEncryptionOptions;

  /**
   * @schema MqCreateBrokerRequest#EngineType
   */
  readonly engineType?: string;

  /**
   * @schema MqCreateBrokerRequest#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema MqCreateBrokerRequest#HostInstanceType
   */
  readonly hostInstanceType?: string;

  /**
   * @schema MqCreateBrokerRequest#LdapServerMetadata
   */
  readonly ldapServerMetadata?: MqLdapServerMetadataInput;

  /**
   * @schema MqCreateBrokerRequest#Logs
   */
  readonly logs?: MqLogs;

  /**
   * @schema MqCreateBrokerRequest#MaintenanceWindowStartTime
   */
  readonly maintenanceWindowStartTime?: MqWeeklyStartTime;

  /**
   * @schema MqCreateBrokerRequest#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema MqCreateBrokerRequest#SecurityGroups
   */
  readonly securityGroups?: string[];

  /**
   * @schema MqCreateBrokerRequest#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema MqCreateBrokerRequest#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema MqCreateBrokerRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema MqCreateBrokerRequest#Users
   */
  readonly users?: MqUser[];

}

/**
 * @schema MqCreateBrokerResponse
 */
export interface MqCreateBrokerResponse {
  /**
   * @schema MqCreateBrokerResponse#BrokerArn
   */
  readonly brokerArn?: string;

  /**
   * @schema MqCreateBrokerResponse#BrokerId
   */
  readonly brokerId?: string;

}

/**
 * @schema MqCreateConfigurationRequest
 */
export interface MqCreateConfigurationRequest {
  /**
   * @schema MqCreateConfigurationRequest#AuthenticationStrategy
   */
  readonly authenticationStrategy?: string;

  /**
   * @schema MqCreateConfigurationRequest#EngineType
   */
  readonly engineType?: string;

  /**
   * @schema MqCreateConfigurationRequest#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema MqCreateConfigurationRequest#Name
   */
  readonly name?: string;

  /**
   * @schema MqCreateConfigurationRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema MqCreateConfigurationResponse
 */
export interface MqCreateConfigurationResponse {
  /**
   * @schema MqCreateConfigurationResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MqCreateConfigurationResponse#AuthenticationStrategy
   */
  readonly authenticationStrategy?: string;

  /**
   * @schema MqCreateConfigurationResponse#Created
   */
  readonly created?: string;

  /**
   * @schema MqCreateConfigurationResponse#Id
   */
  readonly id?: string;

  /**
   * @schema MqCreateConfigurationResponse#LatestRevision
   */
  readonly latestRevision?: MqConfigurationRevision;

  /**
   * @schema MqCreateConfigurationResponse#Name
   */
  readonly name?: string;

}

/**
 * @schema MqCreateTagsRequest
 */
export interface MqCreateTagsRequest {
  /**
   * @schema MqCreateTagsRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema MqCreateTagsRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema MqCreateUserRequest
 */
export interface MqCreateUserRequest {
  /**
   * @schema MqCreateUserRequest#BrokerId
   */
  readonly brokerId: string;

  /**
   * @schema MqCreateUserRequest#ConsoleAccess
   */
  readonly consoleAccess?: boolean;

  /**
   * @schema MqCreateUserRequest#Groups
   */
  readonly groups?: string[];

  /**
   * @schema MqCreateUserRequest#Password
   */
  readonly password?: string;

  /**
   * @schema MqCreateUserRequest#Username
   */
  readonly username: string;

}

/**
 * @schema MqCreateUserResponse
 */
export interface MqCreateUserResponse {
}

/**
 * @schema MqDeleteBrokerRequest
 */
export interface MqDeleteBrokerRequest {
  /**
   * @schema MqDeleteBrokerRequest#BrokerId
   */
  readonly brokerId: string;

}

/**
 * @schema MqDeleteBrokerResponse
 */
export interface MqDeleteBrokerResponse {
  /**
   * @schema MqDeleteBrokerResponse#BrokerId
   */
  readonly brokerId?: string;

}

/**
 * @schema MqDeleteTagsRequest
 */
export interface MqDeleteTagsRequest {
  /**
   * @schema MqDeleteTagsRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema MqDeleteTagsRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema MqDeleteUserRequest
 */
export interface MqDeleteUserRequest {
  /**
   * @schema MqDeleteUserRequest#BrokerId
   */
  readonly brokerId: string;

  /**
   * @schema MqDeleteUserRequest#Username
   */
  readonly username: string;

}

/**
 * @schema MqDeleteUserResponse
 */
export interface MqDeleteUserResponse {
}

/**
 * @schema MqDescribeBrokerRequest
 */
export interface MqDescribeBrokerRequest {
  /**
   * @schema MqDescribeBrokerRequest#BrokerId
   */
  readonly brokerId: string;

}

/**
 * @schema MqDescribeBrokerResponse
 */
export interface MqDescribeBrokerResponse {
  /**
   * @schema MqDescribeBrokerResponse#AuthenticationStrategy
   */
  readonly authenticationStrategy?: string;

  /**
   * @schema MqDescribeBrokerResponse#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema MqDescribeBrokerResponse#BrokerArn
   */
  readonly brokerArn?: string;

  /**
   * @schema MqDescribeBrokerResponse#BrokerId
   */
  readonly brokerId?: string;

  /**
   * @schema MqDescribeBrokerResponse#BrokerInstances
   */
  readonly brokerInstances?: MqBrokerInstance[];

  /**
   * @schema MqDescribeBrokerResponse#BrokerName
   */
  readonly brokerName?: string;

  /**
   * @schema MqDescribeBrokerResponse#BrokerState
   */
  readonly brokerState?: string;

  /**
   * @schema MqDescribeBrokerResponse#Configurations
   */
  readonly configurations?: MqConfigurations;

  /**
   * @schema MqDescribeBrokerResponse#Created
   */
  readonly created?: string;

  /**
   * @schema MqDescribeBrokerResponse#DeploymentMode
   */
  readonly deploymentMode?: string;

  /**
   * @schema MqDescribeBrokerResponse#EncryptionOptions
   */
  readonly encryptionOptions?: MqEncryptionOptions;

  /**
   * @schema MqDescribeBrokerResponse#EngineType
   */
  readonly engineType?: string;

  /**
   * @schema MqDescribeBrokerResponse#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema MqDescribeBrokerResponse#HostInstanceType
   */
  readonly hostInstanceType?: string;

  /**
   * @schema MqDescribeBrokerResponse#LdapServerMetadata
   */
  readonly ldapServerMetadata?: MqLdapServerMetadataOutput;

  /**
   * @schema MqDescribeBrokerResponse#Logs
   */
  readonly logs?: MqLogsSummary;

  /**
   * @schema MqDescribeBrokerResponse#MaintenanceWindowStartTime
   */
  readonly maintenanceWindowStartTime?: MqWeeklyStartTime;

  /**
   * @schema MqDescribeBrokerResponse#PendingAuthenticationStrategy
   */
  readonly pendingAuthenticationStrategy?: string;

  /**
   * @schema MqDescribeBrokerResponse#PendingEngineVersion
   */
  readonly pendingEngineVersion?: string;

  /**
   * @schema MqDescribeBrokerResponse#PendingHostInstanceType
   */
  readonly pendingHostInstanceType?: string;

  /**
   * @schema MqDescribeBrokerResponse#PendingLdapServerMetadata
   */
  readonly pendingLdapServerMetadata?: MqLdapServerMetadataOutput;

  /**
   * @schema MqDescribeBrokerResponse#PendingSecurityGroups
   */
  readonly pendingSecurityGroups?: string[];

  /**
   * @schema MqDescribeBrokerResponse#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema MqDescribeBrokerResponse#SecurityGroups
   */
  readonly securityGroups?: string[];

  /**
   * @schema MqDescribeBrokerResponse#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema MqDescribeBrokerResponse#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema MqDescribeBrokerResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema MqDescribeBrokerResponse#Users
   */
  readonly users?: MqUserSummary[];

}

/**
 * @schema MqDescribeBrokerEngineTypesRequest
 */
export interface MqDescribeBrokerEngineTypesRequest {
  /**
   * @schema MqDescribeBrokerEngineTypesRequest#EngineType
   */
  readonly engineType?: string;

  /**
   * @schema MqDescribeBrokerEngineTypesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MqDescribeBrokerEngineTypesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MqDescribeBrokerEngineTypesResponse
 */
export interface MqDescribeBrokerEngineTypesResponse {
  /**
   * @schema MqDescribeBrokerEngineTypesResponse#BrokerEngineTypes
   */
  readonly brokerEngineTypes?: MqBrokerEngineType[];

  /**
   * @schema MqDescribeBrokerEngineTypesResponse#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MqDescribeBrokerEngineTypesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MqDescribeBrokerInstanceOptionsRequest
 */
export interface MqDescribeBrokerInstanceOptionsRequest {
  /**
   * @schema MqDescribeBrokerInstanceOptionsRequest#EngineType
   */
  readonly engineType?: string;

  /**
   * @schema MqDescribeBrokerInstanceOptionsRequest#HostInstanceType
   */
  readonly hostInstanceType?: string;

  /**
   * @schema MqDescribeBrokerInstanceOptionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MqDescribeBrokerInstanceOptionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema MqDescribeBrokerInstanceOptionsRequest#StorageType
   */
  readonly storageType?: string;

}

/**
 * @schema MqDescribeBrokerInstanceOptionsResponse
 */
export interface MqDescribeBrokerInstanceOptionsResponse {
  /**
   * @schema MqDescribeBrokerInstanceOptionsResponse#BrokerInstanceOptions
   */
  readonly brokerInstanceOptions?: MqBrokerInstanceOption[];

  /**
   * @schema MqDescribeBrokerInstanceOptionsResponse#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MqDescribeBrokerInstanceOptionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MqDescribeConfigurationRequest
 */
export interface MqDescribeConfigurationRequest {
  /**
   * @schema MqDescribeConfigurationRequest#ConfigurationId
   */
  readonly configurationId: string;

}

/**
 * @schema MqDescribeConfigurationResponse
 */
export interface MqDescribeConfigurationResponse {
  /**
   * @schema MqDescribeConfigurationResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MqDescribeConfigurationResponse#AuthenticationStrategy
   */
  readonly authenticationStrategy?: string;

  /**
   * @schema MqDescribeConfigurationResponse#Created
   */
  readonly created?: string;

  /**
   * @schema MqDescribeConfigurationResponse#Description
   */
  readonly description?: string;

  /**
   * @schema MqDescribeConfigurationResponse#EngineType
   */
  readonly engineType?: string;

  /**
   * @schema MqDescribeConfigurationResponse#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema MqDescribeConfigurationResponse#Id
   */
  readonly id?: string;

  /**
   * @schema MqDescribeConfigurationResponse#LatestRevision
   */
  readonly latestRevision?: MqConfigurationRevision;

  /**
   * @schema MqDescribeConfigurationResponse#Name
   */
  readonly name?: string;

  /**
   * @schema MqDescribeConfigurationResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema MqDescribeConfigurationRevisionRequest
 */
export interface MqDescribeConfigurationRevisionRequest {
  /**
   * @schema MqDescribeConfigurationRevisionRequest#ConfigurationId
   */
  readonly configurationId: string;

  /**
   * @schema MqDescribeConfigurationRevisionRequest#ConfigurationRevision
   */
  readonly configurationRevision: string;

}

/**
 * @schema MqDescribeConfigurationRevisionResponse
 */
export interface MqDescribeConfigurationRevisionResponse {
  /**
   * @schema MqDescribeConfigurationRevisionResponse#ConfigurationId
   */
  readonly configurationId?: string;

  /**
   * @schema MqDescribeConfigurationRevisionResponse#Created
   */
  readonly created?: string;

  /**
   * @schema MqDescribeConfigurationRevisionResponse#Data
   */
  readonly data?: string;

  /**
   * @schema MqDescribeConfigurationRevisionResponse#Description
   */
  readonly description?: string;

}

/**
 * @schema MqDescribeUserRequest
 */
export interface MqDescribeUserRequest {
  /**
   * @schema MqDescribeUserRequest#BrokerId
   */
  readonly brokerId: string;

  /**
   * @schema MqDescribeUserRequest#Username
   */
  readonly username: string;

}

/**
 * @schema MqDescribeUserResponse
 */
export interface MqDescribeUserResponse {
  /**
   * @schema MqDescribeUserResponse#BrokerId
   */
  readonly brokerId?: string;

  /**
   * @schema MqDescribeUserResponse#ConsoleAccess
   */
  readonly consoleAccess?: boolean;

  /**
   * @schema MqDescribeUserResponse#Groups
   */
  readonly groups?: string[];

  /**
   * @schema MqDescribeUserResponse#Pending
   */
  readonly pending?: MqUserPendingChanges;

  /**
   * @schema MqDescribeUserResponse#Username
   */
  readonly username?: string;

}

/**
 * @schema MqListBrokersRequest
 */
export interface MqListBrokersRequest {
  /**
   * @schema MqListBrokersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MqListBrokersRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MqListBrokersResponse
 */
export interface MqListBrokersResponse {
  /**
   * @schema MqListBrokersResponse#BrokerSummaries
   */
  readonly brokerSummaries?: MqBrokerSummary[];

  /**
   * @schema MqListBrokersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MqListConfigurationRevisionsRequest
 */
export interface MqListConfigurationRevisionsRequest {
  /**
   * @schema MqListConfigurationRevisionsRequest#ConfigurationId
   */
  readonly configurationId: string;

  /**
   * @schema MqListConfigurationRevisionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MqListConfigurationRevisionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MqListConfigurationRevisionsResponse
 */
export interface MqListConfigurationRevisionsResponse {
  /**
   * @schema MqListConfigurationRevisionsResponse#ConfigurationId
   */
  readonly configurationId?: string;

  /**
   * @schema MqListConfigurationRevisionsResponse#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MqListConfigurationRevisionsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema MqListConfigurationRevisionsResponse#Revisions
   */
  readonly revisions?: MqConfigurationRevision[];

}

/**
 * @schema MqListConfigurationsRequest
 */
export interface MqListConfigurationsRequest {
  /**
   * @schema MqListConfigurationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MqListConfigurationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MqListConfigurationsResponse
 */
export interface MqListConfigurationsResponse {
  /**
   * @schema MqListConfigurationsResponse#Configurations
   */
  readonly configurations?: MqConfiguration[];

  /**
   * @schema MqListConfigurationsResponse#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MqListConfigurationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MqListTagsRequest
 */
export interface MqListTagsRequest {
  /**
   * @schema MqListTagsRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema MqListTagsResponse
 */
export interface MqListTagsResponse {
  /**
   * @schema MqListTagsResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema MqListUsersRequest
 */
export interface MqListUsersRequest {
  /**
   * @schema MqListUsersRequest#BrokerId
   */
  readonly brokerId: string;

  /**
   * @schema MqListUsersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MqListUsersRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MqListUsersResponse
 */
export interface MqListUsersResponse {
  /**
   * @schema MqListUsersResponse#BrokerId
   */
  readonly brokerId?: string;

  /**
   * @schema MqListUsersResponse#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MqListUsersResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema MqListUsersResponse#Users
   */
  readonly users?: MqUserSummary[];

}

/**
 * @schema MqRebootBrokerRequest
 */
export interface MqRebootBrokerRequest {
  /**
   * @schema MqRebootBrokerRequest#BrokerId
   */
  readonly brokerId: string;

}

/**
 * @schema MqRebootBrokerResponse
 */
export interface MqRebootBrokerResponse {
}

/**
 * @schema MqUpdateBrokerRequest
 */
export interface MqUpdateBrokerRequest {
  /**
   * @schema MqUpdateBrokerRequest#AuthenticationStrategy
   */
  readonly authenticationStrategy?: string;

  /**
   * @schema MqUpdateBrokerRequest#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema MqUpdateBrokerRequest#BrokerId
   */
  readonly brokerId: string;

  /**
   * @schema MqUpdateBrokerRequest#Configuration
   */
  readonly configuration?: MqConfigurationId;

  /**
   * @schema MqUpdateBrokerRequest#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema MqUpdateBrokerRequest#HostInstanceType
   */
  readonly hostInstanceType?: string;

  /**
   * @schema MqUpdateBrokerRequest#LdapServerMetadata
   */
  readonly ldapServerMetadata?: MqLdapServerMetadataInput;

  /**
   * @schema MqUpdateBrokerRequest#Logs
   */
  readonly logs?: MqLogs;

  /**
   * @schema MqUpdateBrokerRequest#SecurityGroups
   */
  readonly securityGroups?: string[];

}

/**
 * @schema MqUpdateBrokerResponse
 */
export interface MqUpdateBrokerResponse {
  /**
   * @schema MqUpdateBrokerResponse#AuthenticationStrategy
   */
  readonly authenticationStrategy?: string;

  /**
   * @schema MqUpdateBrokerResponse#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema MqUpdateBrokerResponse#BrokerId
   */
  readonly brokerId?: string;

  /**
   * @schema MqUpdateBrokerResponse#Configuration
   */
  readonly configuration?: MqConfigurationId;

  /**
   * @schema MqUpdateBrokerResponse#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema MqUpdateBrokerResponse#HostInstanceType
   */
  readonly hostInstanceType?: string;

  /**
   * @schema MqUpdateBrokerResponse#LdapServerMetadata
   */
  readonly ldapServerMetadata?: MqLdapServerMetadataOutput;

  /**
   * @schema MqUpdateBrokerResponse#Logs
   */
  readonly logs?: MqLogs;

  /**
   * @schema MqUpdateBrokerResponse#SecurityGroups
   */
  readonly securityGroups?: string[];

}

/**
 * @schema MqUpdateConfigurationRequest
 */
export interface MqUpdateConfigurationRequest {
  /**
   * @schema MqUpdateConfigurationRequest#ConfigurationId
   */
  readonly configurationId: string;

  /**
   * @schema MqUpdateConfigurationRequest#Data
   */
  readonly data?: string;

  /**
   * @schema MqUpdateConfigurationRequest#Description
   */
  readonly description?: string;

}

/**
 * @schema MqUpdateConfigurationResponse
 */
export interface MqUpdateConfigurationResponse {
  /**
   * @schema MqUpdateConfigurationResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MqUpdateConfigurationResponse#Created
   */
  readonly created?: string;

  /**
   * @schema MqUpdateConfigurationResponse#Id
   */
  readonly id?: string;

  /**
   * @schema MqUpdateConfigurationResponse#LatestRevision
   */
  readonly latestRevision?: MqConfigurationRevision;

  /**
   * @schema MqUpdateConfigurationResponse#Name
   */
  readonly name?: string;

  /**
   * @schema MqUpdateConfigurationResponse#Warnings
   */
  readonly warnings?: MqSanitizationWarning[];

}

/**
 * @schema MqUpdateUserRequest
 */
export interface MqUpdateUserRequest {
  /**
   * @schema MqUpdateUserRequest#BrokerId
   */
  readonly brokerId: string;

  /**
   * @schema MqUpdateUserRequest#ConsoleAccess
   */
  readonly consoleAccess?: boolean;

  /**
   * @schema MqUpdateUserRequest#Groups
   */
  readonly groups?: string[];

  /**
   * @schema MqUpdateUserRequest#Password
   */
  readonly password?: string;

  /**
   * @schema MqUpdateUserRequest#Username
   */
  readonly username: string;

}

/**
 * @schema MqUpdateUserResponse
 */
export interface MqUpdateUserResponse {
}

/**
 * @schema MqConfigurationId
 */
export interface MqConfigurationId {
  /**
   * @schema MqConfigurationId#Id
   */
  readonly id?: string;

  /**
   * @schema MqConfigurationId#Revision
   */
  readonly revision?: number;

}

/**
 * @schema MqEncryptionOptions
 */
export interface MqEncryptionOptions {
  /**
   * @schema MqEncryptionOptions#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema MqEncryptionOptions#UseAwsOwnedKey
   */
  readonly useAwsOwnedKey: boolean;

}

/**
 * @schema MqLdapServerMetadataInput
 */
export interface MqLdapServerMetadataInput {
  /**
   * @schema MqLdapServerMetadataInput#Hosts
   */
  readonly hosts?: string[];

  /**
   * @schema MqLdapServerMetadataInput#RoleBase
   */
  readonly roleBase?: string;

  /**
   * @schema MqLdapServerMetadataInput#RoleName
   */
  readonly roleName?: string;

  /**
   * @schema MqLdapServerMetadataInput#RoleSearchMatching
   */
  readonly roleSearchMatching?: string;

  /**
   * @schema MqLdapServerMetadataInput#RoleSearchSubtree
   */
  readonly roleSearchSubtree?: boolean;

  /**
   * @schema MqLdapServerMetadataInput#ServiceAccountPassword
   */
  readonly serviceAccountPassword?: string;

  /**
   * @schema MqLdapServerMetadataInput#ServiceAccountUsername
   */
  readonly serviceAccountUsername?: string;

  /**
   * @schema MqLdapServerMetadataInput#UserBase
   */
  readonly userBase?: string;

  /**
   * @schema MqLdapServerMetadataInput#UserRoleName
   */
  readonly userRoleName?: string;

  /**
   * @schema MqLdapServerMetadataInput#UserSearchMatching
   */
  readonly userSearchMatching?: string;

  /**
   * @schema MqLdapServerMetadataInput#UserSearchSubtree
   */
  readonly userSearchSubtree?: boolean;

}

/**
 * @schema MqLogs
 */
export interface MqLogs {
  /**
   * @schema MqLogs#Audit
   */
  readonly audit?: boolean;

  /**
   * @schema MqLogs#General
   */
  readonly general?: boolean;

}

/**
 * @schema MqWeeklyStartTime
 */
export interface MqWeeklyStartTime {
  /**
   * @schema MqWeeklyStartTime#DayOfWeek
   */
  readonly dayOfWeek?: string;

  /**
   * @schema MqWeeklyStartTime#TimeOfDay
   */
  readonly timeOfDay?: string;

  /**
   * @schema MqWeeklyStartTime#TimeZone
   */
  readonly timeZone?: string;

}

/**
 * @schema MqUser
 */
export interface MqUser {
  /**
   * @schema MqUser#ConsoleAccess
   */
  readonly consoleAccess?: boolean;

  /**
   * @schema MqUser#Groups
   */
  readonly groups?: string[];

  /**
   * @schema MqUser#Password
   */
  readonly password?: string;

  /**
   * @schema MqUser#Username
   */
  readonly username?: string;

}

/**
 * @schema MqConfigurationRevision
 */
export interface MqConfigurationRevision {
  /**
   * @schema MqConfigurationRevision#Created
   */
  readonly created?: string;

  /**
   * @schema MqConfigurationRevision#Description
   */
  readonly description?: string;

  /**
   * @schema MqConfigurationRevision#Revision
   */
  readonly revision?: number;

}

/**
 * @schema MqBrokerInstance
 */
export interface MqBrokerInstance {
  /**
   * @schema MqBrokerInstance#ConsoleURL
   */
  readonly consoleUrl?: string;

  /**
   * @schema MqBrokerInstance#Endpoints
   */
  readonly endpoints?: string[];

  /**
   * @schema MqBrokerInstance#IpAddress
   */
  readonly ipAddress?: string;

}

/**
 * @schema MqConfigurations
 */
export interface MqConfigurations {
  /**
   * @schema MqConfigurations#Current
   */
  readonly current?: MqConfigurationId;

  /**
   * @schema MqConfigurations#History
   */
  readonly history?: MqConfigurationId[];

  /**
   * @schema MqConfigurations#Pending
   */
  readonly pending?: MqConfigurationId;

}

/**
 * @schema MqLdapServerMetadataOutput
 */
export interface MqLdapServerMetadataOutput {
  /**
   * @schema MqLdapServerMetadataOutput#Hosts
   */
  readonly hosts?: string[];

  /**
   * @schema MqLdapServerMetadataOutput#RoleBase
   */
  readonly roleBase?: string;

  /**
   * @schema MqLdapServerMetadataOutput#RoleName
   */
  readonly roleName?: string;

  /**
   * @schema MqLdapServerMetadataOutput#RoleSearchMatching
   */
  readonly roleSearchMatching?: string;

  /**
   * @schema MqLdapServerMetadataOutput#RoleSearchSubtree
   */
  readonly roleSearchSubtree?: boolean;

  /**
   * @schema MqLdapServerMetadataOutput#ServiceAccountUsername
   */
  readonly serviceAccountUsername?: string;

  /**
   * @schema MqLdapServerMetadataOutput#UserBase
   */
  readonly userBase?: string;

  /**
   * @schema MqLdapServerMetadataOutput#UserRoleName
   */
  readonly userRoleName?: string;

  /**
   * @schema MqLdapServerMetadataOutput#UserSearchMatching
   */
  readonly userSearchMatching?: string;

  /**
   * @schema MqLdapServerMetadataOutput#UserSearchSubtree
   */
  readonly userSearchSubtree?: boolean;

}

/**
 * @schema MqLogsSummary
 */
export interface MqLogsSummary {
  /**
   * @schema MqLogsSummary#Audit
   */
  readonly audit?: boolean;

  /**
   * @schema MqLogsSummary#AuditLogGroup
   */
  readonly auditLogGroup?: string;

  /**
   * @schema MqLogsSummary#General
   */
  readonly general?: boolean;

  /**
   * @schema MqLogsSummary#GeneralLogGroup
   */
  readonly generalLogGroup?: string;

  /**
   * @schema MqLogsSummary#Pending
   */
  readonly pending?: MqPendingLogs;

}

/**
 * @schema MqUserSummary
 */
export interface MqUserSummary {
  /**
   * @schema MqUserSummary#PendingChange
   */
  readonly pendingChange?: string;

  /**
   * @schema MqUserSummary#Username
   */
  readonly username?: string;

}

/**
 * @schema MqBrokerEngineType
 */
export interface MqBrokerEngineType {
  /**
   * @schema MqBrokerEngineType#EngineType
   */
  readonly engineType?: string;

  /**
   * @schema MqBrokerEngineType#EngineVersions
   */
  readonly engineVersions?: MqEngineVersion[];

}

/**
 * @schema MqBrokerInstanceOption
 */
export interface MqBrokerInstanceOption {
  /**
   * @schema MqBrokerInstanceOption#AvailabilityZones
   */
  readonly availabilityZones?: MqAvailabilityZone[];

  /**
   * @schema MqBrokerInstanceOption#EngineType
   */
  readonly engineType?: string;

  /**
   * @schema MqBrokerInstanceOption#HostInstanceType
   */
  readonly hostInstanceType?: string;

  /**
   * @schema MqBrokerInstanceOption#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema MqBrokerInstanceOption#SupportedDeploymentModes
   */
  readonly supportedDeploymentModes?: string[];

  /**
   * @schema MqBrokerInstanceOption#SupportedEngineVersions
   */
  readonly supportedEngineVersions?: string[];

}

/**
 * @schema MqUserPendingChanges
 */
export interface MqUserPendingChanges {
  /**
   * @schema MqUserPendingChanges#ConsoleAccess
   */
  readonly consoleAccess?: boolean;

  /**
   * @schema MqUserPendingChanges#Groups
   */
  readonly groups?: string[];

  /**
   * @schema MqUserPendingChanges#PendingChange
   */
  readonly pendingChange?: string;

}

/**
 * @schema MqBrokerSummary
 */
export interface MqBrokerSummary {
  /**
   * @schema MqBrokerSummary#BrokerArn
   */
  readonly brokerArn?: string;

  /**
   * @schema MqBrokerSummary#BrokerId
   */
  readonly brokerId?: string;

  /**
   * @schema MqBrokerSummary#BrokerName
   */
  readonly brokerName?: string;

  /**
   * @schema MqBrokerSummary#BrokerState
   */
  readonly brokerState?: string;

  /**
   * @schema MqBrokerSummary#Created
   */
  readonly created?: string;

  /**
   * @schema MqBrokerSummary#DeploymentMode
   */
  readonly deploymentMode?: string;

  /**
   * @schema MqBrokerSummary#EngineType
   */
  readonly engineType?: string;

  /**
   * @schema MqBrokerSummary#HostInstanceType
   */
  readonly hostInstanceType?: string;

}

/**
 * @schema MqConfiguration
 */
export interface MqConfiguration {
  /**
   * @schema MqConfiguration#Arn
   */
  readonly arn?: string;

  /**
   * @schema MqConfiguration#AuthenticationStrategy
   */
  readonly authenticationStrategy?: string;

  /**
   * @schema MqConfiguration#Created
   */
  readonly created?: string;

  /**
   * @schema MqConfiguration#Description
   */
  readonly description?: string;

  /**
   * @schema MqConfiguration#EngineType
   */
  readonly engineType?: string;

  /**
   * @schema MqConfiguration#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema MqConfiguration#Id
   */
  readonly id?: string;

  /**
   * @schema MqConfiguration#LatestRevision
   */
  readonly latestRevision?: MqConfigurationRevision;

  /**
   * @schema MqConfiguration#Name
   */
  readonly name?: string;

  /**
   * @schema MqConfiguration#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema MqSanitizationWarning
 */
export interface MqSanitizationWarning {
  /**
   * @schema MqSanitizationWarning#AttributeName
   */
  readonly attributeName?: string;

  /**
   * @schema MqSanitizationWarning#ElementName
   */
  readonly elementName?: string;

  /**
   * @schema MqSanitizationWarning#Reason
   */
  readonly reason?: string;

}

/**
 * @schema MqPendingLogs
 */
export interface MqPendingLogs {
  /**
   * @schema MqPendingLogs#Audit
   */
  readonly audit?: boolean;

  /**
   * @schema MqPendingLogs#General
   */
  readonly general?: boolean;

}

/**
 * @schema MqEngineVersion
 */
export interface MqEngineVersion {
  /**
   * @schema MqEngineVersion#Name
   */
  readonly name?: string;

}

/**
 * @schema MqAvailabilityZone
 */
export interface MqAvailabilityZone {
  /**
   * @schema MqAvailabilityZone#Name
   */
  readonly name?: string;

}
