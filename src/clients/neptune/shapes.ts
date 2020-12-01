/**
 * @schema AddRoleToDbClusterMessage
 */
export interface AddRoleToDbClusterMessage {
  /**
   * @schema AddRoleToDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

  /**
   * @schema AddRoleToDbClusterMessage#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema AddRoleToDbClusterMessage#FeatureName
   */
  readonly featureName?: string;

}

/**
 * @schema AddSourceIdentifierToSubscriptionMessage
 */
export interface AddSourceIdentifierToSubscriptionMessage {
  /**
   * @schema AddSourceIdentifierToSubscriptionMessage#SubscriptionName
   */
  readonly subscriptionName: string;

  /**
   * @schema AddSourceIdentifierToSubscriptionMessage#SourceIdentifier
   */
  readonly sourceIdentifier: string;

}

/**
 * @schema AddSourceIdentifierToSubscriptionResult
 */
export interface AddSourceIdentifierToSubscriptionResult {
  /**
   * @schema AddSourceIdentifierToSubscriptionResult#EventSubscription
   */
  readonly eventSubscription?: EventSubscription;

}

/**
 * @schema AddTagsToResourceMessage
 */
export interface AddTagsToResourceMessage {
  /**
   * @schema AddTagsToResourceMessage#ResourceName
   */
  readonly resourceName: string;

  /**
   * @schema AddTagsToResourceMessage#Tags
   */
  readonly tags: Tag[];

}

/**
 * @schema ApplyPendingMaintenanceActionMessage
 */
export interface ApplyPendingMaintenanceActionMessage {
  /**
   * @schema ApplyPendingMaintenanceActionMessage#ResourceIdentifier
   */
  readonly resourceIdentifier: string;

  /**
   * @schema ApplyPendingMaintenanceActionMessage#ApplyAction
   */
  readonly applyAction: string;

  /**
   * @schema ApplyPendingMaintenanceActionMessage#OptInType
   */
  readonly optInType: string;

}

/**
 * @schema ApplyPendingMaintenanceActionResult
 */
export interface ApplyPendingMaintenanceActionResult {
  /**
   * @schema ApplyPendingMaintenanceActionResult#ResourcePendingMaintenanceActions
   */
  readonly resourcePendingMaintenanceActions?: ResourcePendingMaintenanceActions;

}

/**
 * @schema CopyDbClusterParameterGroupMessage
 */
export interface CopyDbClusterParameterGroupMessage {
  /**
   * @schema CopyDbClusterParameterGroupMessage#SourceDBClusterParameterGroupIdentifier
   */
  readonly sourceDbClusterParameterGroupIdentifier: string;

  /**
   * @schema CopyDbClusterParameterGroupMessage#TargetDBClusterParameterGroupIdentifier
   */
  readonly targetDbClusterParameterGroupIdentifier: string;

  /**
   * @schema CopyDbClusterParameterGroupMessage#TargetDBClusterParameterGroupDescription
   */
  readonly targetDbClusterParameterGroupDescription: string;

  /**
   * @schema CopyDbClusterParameterGroupMessage#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CopyDbClusterParameterGroupResult
 */
export interface CopyDbClusterParameterGroupResult {
  /**
   * @schema CopyDbClusterParameterGroupResult#DBClusterParameterGroup
   */
  readonly dbClusterParameterGroup?: DbClusterParameterGroup;

}

/**
 * @schema CopyDbClusterSnapshotMessage
 */
export interface CopyDbClusterSnapshotMessage {
  /**
   * @schema CopyDbClusterSnapshotMessage#SourceDBClusterSnapshotIdentifier
   */
  readonly sourceDbClusterSnapshotIdentifier: string;

  /**
   * @schema CopyDbClusterSnapshotMessage#TargetDBClusterSnapshotIdentifier
   */
  readonly targetDbClusterSnapshotIdentifier: string;

  /**
   * @schema CopyDbClusterSnapshotMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema CopyDbClusterSnapshotMessage#PreSignedUrl
   */
  readonly preSignedUrl?: string;

  /**
   * @schema CopyDbClusterSnapshotMessage#CopyTags
   */
  readonly copyTags?: boolean;

  /**
   * @schema CopyDbClusterSnapshotMessage#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CopyDbClusterSnapshotResult
 */
export interface CopyDbClusterSnapshotResult {
  /**
   * @schema CopyDbClusterSnapshotResult#DBClusterSnapshot
   */
  readonly dbClusterSnapshot?: DbClusterSnapshot;

}

/**
 * @schema CopyDbParameterGroupMessage
 */
export interface CopyDbParameterGroupMessage {
  /**
   * @schema CopyDbParameterGroupMessage#SourceDBParameterGroupIdentifier
   */
  readonly sourceDbParameterGroupIdentifier: string;

  /**
   * @schema CopyDbParameterGroupMessage#TargetDBParameterGroupIdentifier
   */
  readonly targetDbParameterGroupIdentifier: string;

  /**
   * @schema CopyDbParameterGroupMessage#TargetDBParameterGroupDescription
   */
  readonly targetDbParameterGroupDescription: string;

  /**
   * @schema CopyDbParameterGroupMessage#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CopyDbParameterGroupResult
 */
export interface CopyDbParameterGroupResult {
  /**
   * @schema CopyDbParameterGroupResult#DBParameterGroup
   */
  readonly dbParameterGroup?: DbParameterGroup;

}

/**
 * @schema CreateDbClusterMessage
 */
export interface CreateDbClusterMessage {
  /**
   * @schema CreateDbClusterMessage#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema CreateDbClusterMessage#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema CreateDbClusterMessage#CharacterSetName
   */
  readonly characterSetName?: string;

  /**
   * @schema CreateDbClusterMessage#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema CreateDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

  /**
   * @schema CreateDbClusterMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

  /**
   * @schema CreateDbClusterMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema CreateDbClusterMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema CreateDbClusterMessage#Engine
   */
  readonly engine: string;

  /**
   * @schema CreateDbClusterMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema CreateDbClusterMessage#Port
   */
  readonly port?: number;

  /**
   * @schema CreateDbClusterMessage#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema CreateDbClusterMessage#MasterUserPassword
   */
  readonly masterUserPassword?: string;

  /**
   * @schema CreateDbClusterMessage#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema CreateDbClusterMessage#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema CreateDbClusterMessage#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema CreateDbClusterMessage#ReplicationSourceIdentifier
   */
  readonly replicationSourceIdentifier?: string;

  /**
   * @schema CreateDbClusterMessage#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateDbClusterMessage#StorageEncrypted
   */
  readonly storageEncrypted?: boolean;

  /**
   * @schema CreateDbClusterMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema CreateDbClusterMessage#PreSignedUrl
   */
  readonly preSignedUrl?: string;

  /**
   * @schema CreateDbClusterMessage#EnableIAMDatabaseAuthentication
   */
  readonly enableIamDatabaseAuthentication?: boolean;

  /**
   * @schema CreateDbClusterMessage#EnableCloudwatchLogsExports
   */
  readonly enableCloudwatchLogsExports?: string[];

  /**
   * @schema CreateDbClusterMessage#DeletionProtection
   */
  readonly deletionProtection?: boolean;

}

/**
 * @schema CreateDbClusterResult
 */
export interface CreateDbClusterResult {
  /**
   * @schema CreateDbClusterResult#DBCluster
   */
  readonly dbCluster?: DbCluster;

}

/**
 * @schema CreateDbClusterEndpointMessage
 */
export interface CreateDbClusterEndpointMessage {
  /**
   * @schema CreateDbClusterEndpointMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

  /**
   * @schema CreateDbClusterEndpointMessage#DBClusterEndpointIdentifier
   */
  readonly dbClusterEndpointIdentifier: string;

  /**
   * @schema CreateDbClusterEndpointMessage#EndpointType
   */
  readonly endpointType: string;

  /**
   * @schema CreateDbClusterEndpointMessage#StaticMembers
   */
  readonly staticMembers?: string[];

  /**
   * @schema CreateDbClusterEndpointMessage#ExcludedMembers
   */
  readonly excludedMembers?: string[];

  /**
   * @schema CreateDbClusterEndpointMessage#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateDbClusterEndpointOutput
 */
export interface CreateDbClusterEndpointOutput {
  /**
   * @schema CreateDbClusterEndpointOutput#DBClusterEndpointIdentifier
   */
  readonly dbClusterEndpointIdentifier?: string;

  /**
   * @schema CreateDbClusterEndpointOutput#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema CreateDbClusterEndpointOutput#DBClusterEndpointResourceIdentifier
   */
  readonly dbClusterEndpointResourceIdentifier?: string;

  /**
   * @schema CreateDbClusterEndpointOutput#Endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema CreateDbClusterEndpointOutput#Status
   */
  readonly status?: string;

  /**
   * @schema CreateDbClusterEndpointOutput#EndpointType
   */
  readonly endpointType?: string;

  /**
   * @schema CreateDbClusterEndpointOutput#CustomEndpointType
   */
  readonly customEndpointType?: string;

  /**
   * @schema CreateDbClusterEndpointOutput#StaticMembers
   */
  readonly staticMembers?: string[];

  /**
   * @schema CreateDbClusterEndpointOutput#ExcludedMembers
   */
  readonly excludedMembers?: string[];

  /**
   * @schema CreateDbClusterEndpointOutput#DBClusterEndpointArn
   */
  readonly dbClusterEndpointArn?: string;

}

/**
 * @schema CreateDbClusterParameterGroupMessage
 */
export interface CreateDbClusterParameterGroupMessage {
  /**
   * @schema CreateDbClusterParameterGroupMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName: string;

  /**
   * @schema CreateDbClusterParameterGroupMessage#DBParameterGroupFamily
   */
  readonly dbParameterGroupFamily: string;

  /**
   * @schema CreateDbClusterParameterGroupMessage#Description
   */
  readonly description: string;

  /**
   * @schema CreateDbClusterParameterGroupMessage#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateDbClusterParameterGroupResult
 */
export interface CreateDbClusterParameterGroupResult {
  /**
   * @schema CreateDbClusterParameterGroupResult#DBClusterParameterGroup
   */
  readonly dbClusterParameterGroup?: DbClusterParameterGroup;

}

/**
 * @schema CreateDbClusterSnapshotMessage
 */
export interface CreateDbClusterSnapshotMessage {
  /**
   * @schema CreateDbClusterSnapshotMessage#DBClusterSnapshotIdentifier
   */
  readonly dbClusterSnapshotIdentifier: string;

  /**
   * @schema CreateDbClusterSnapshotMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

  /**
   * @schema CreateDbClusterSnapshotMessage#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateDbClusterSnapshotResult
 */
export interface CreateDbClusterSnapshotResult {
  /**
   * @schema CreateDbClusterSnapshotResult#DBClusterSnapshot
   */
  readonly dbClusterSnapshot?: DbClusterSnapshot;

}

/**
 * @schema CreateDbInstanceMessage
 */
export interface CreateDbInstanceMessage {
  /**
   * @schema CreateDbInstanceMessage#DBName
   */
  readonly dbName?: string;

  /**
   * @schema CreateDbInstanceMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier: string;

  /**
   * @schema CreateDbInstanceMessage#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema CreateDbInstanceMessage#DBInstanceClass
   */
  readonly dbInstanceClass: string;

  /**
   * @schema CreateDbInstanceMessage#Engine
   */
  readonly engine: string;

  /**
   * @schema CreateDbInstanceMessage#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema CreateDbInstanceMessage#MasterUserPassword
   */
  readonly masterUserPassword?: string;

  /**
   * @schema CreateDbInstanceMessage#DBSecurityGroups
   */
  readonly dbSecurityGroups?: string[];

  /**
   * @schema CreateDbInstanceMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema CreateDbInstanceMessage#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema CreateDbInstanceMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema CreateDbInstanceMessage#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema CreateDbInstanceMessage#DBParameterGroupName
   */
  readonly dbParameterGroupName?: string;

  /**
   * @schema CreateDbInstanceMessage#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema CreateDbInstanceMessage#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema CreateDbInstanceMessage#Port
   */
  readonly port?: number;

  /**
   * @schema CreateDbInstanceMessage#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema CreateDbInstanceMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema CreateDbInstanceMessage#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema CreateDbInstanceMessage#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema CreateDbInstanceMessage#Iops
   */
  readonly iops?: number;

  /**
   * @schema CreateDbInstanceMessage#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema CreateDbInstanceMessage#CharacterSetName
   */
  readonly characterSetName?: string;

  /**
   * @schema CreateDbInstanceMessage#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema CreateDbInstanceMessage#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateDbInstanceMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema CreateDbInstanceMessage#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema CreateDbInstanceMessage#TdeCredentialArn
   */
  readonly tdeCredentialArn?: string;

  /**
   * @schema CreateDbInstanceMessage#TdeCredentialPassword
   */
  readonly tdeCredentialPassword?: string;

  /**
   * @schema CreateDbInstanceMessage#StorageEncrypted
   */
  readonly storageEncrypted?: boolean;

  /**
   * @schema CreateDbInstanceMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema CreateDbInstanceMessage#Domain
   */
  readonly domain?: string;

  /**
   * @schema CreateDbInstanceMessage#CopyTagsToSnapshot
   */
  readonly copyTagsToSnapshot?: boolean;

  /**
   * @schema CreateDbInstanceMessage#MonitoringInterval
   */
  readonly monitoringInterval?: number;

  /**
   * @schema CreateDbInstanceMessage#MonitoringRoleArn
   */
  readonly monitoringRoleArn?: string;

  /**
   * @schema CreateDbInstanceMessage#DomainIAMRoleName
   */
  readonly domainIamRoleName?: string;

  /**
   * @schema CreateDbInstanceMessage#PromotionTier
   */
  readonly promotionTier?: number;

  /**
   * @schema CreateDbInstanceMessage#Timezone
   */
  readonly timezone?: string;

  /**
   * @schema CreateDbInstanceMessage#EnableIAMDatabaseAuthentication
   */
  readonly enableIamDatabaseAuthentication?: boolean;

  /**
   * @schema CreateDbInstanceMessage#EnablePerformanceInsights
   */
  readonly enablePerformanceInsights?: boolean;

  /**
   * @schema CreateDbInstanceMessage#PerformanceInsightsKMSKeyId
   */
  readonly performanceInsightsKmsKeyId?: string;

  /**
   * @schema CreateDbInstanceMessage#EnableCloudwatchLogsExports
   */
  readonly enableCloudwatchLogsExports?: string[];

  /**
   * @schema CreateDbInstanceMessage#DeletionProtection
   */
  readonly deletionProtection?: boolean;

}

/**
 * @schema CreateDbInstanceResult
 */
export interface CreateDbInstanceResult {
  /**
   * @schema CreateDbInstanceResult#DBInstance
   */
  readonly dbInstance?: DbInstance;

}

/**
 * @schema CreateDbParameterGroupMessage
 */
export interface CreateDbParameterGroupMessage {
  /**
   * @schema CreateDbParameterGroupMessage#DBParameterGroupName
   */
  readonly dbParameterGroupName: string;

  /**
   * @schema CreateDbParameterGroupMessage#DBParameterGroupFamily
   */
  readonly dbParameterGroupFamily: string;

  /**
   * @schema CreateDbParameterGroupMessage#Description
   */
  readonly description: string;

  /**
   * @schema CreateDbParameterGroupMessage#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateDbParameterGroupResult
 */
export interface CreateDbParameterGroupResult {
  /**
   * @schema CreateDbParameterGroupResult#DBParameterGroup
   */
  readonly dbParameterGroup?: DbParameterGroup;

}

/**
 * @schema CreateDbSubnetGroupMessage
 */
export interface CreateDbSubnetGroupMessage {
  /**
   * @schema CreateDbSubnetGroupMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName: string;

  /**
   * @schema CreateDbSubnetGroupMessage#DBSubnetGroupDescription
   */
  readonly dbSubnetGroupDescription: string;

  /**
   * @schema CreateDbSubnetGroupMessage#SubnetIds
   */
  readonly subnetIds: string[];

  /**
   * @schema CreateDbSubnetGroupMessage#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateDbSubnetGroupResult
 */
export interface CreateDbSubnetGroupResult {
  /**
   * @schema CreateDbSubnetGroupResult#DBSubnetGroup
   */
  readonly dbSubnetGroup?: DbSubnetGroup;

}

/**
 * @schema CreateEventSubscriptionMessage
 */
export interface CreateEventSubscriptionMessage {
  /**
   * @schema CreateEventSubscriptionMessage#SubscriptionName
   */
  readonly subscriptionName: string;

  /**
   * @schema CreateEventSubscriptionMessage#SnsTopicArn
   */
  readonly snsTopicArn: string;

  /**
   * @schema CreateEventSubscriptionMessage#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema CreateEventSubscriptionMessage#EventCategories
   */
  readonly eventCategories?: string[];

  /**
   * @schema CreateEventSubscriptionMessage#SourceIds
   */
  readonly sourceIds?: string[];

  /**
   * @schema CreateEventSubscriptionMessage#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema CreateEventSubscriptionMessage#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateEventSubscriptionResult
 */
export interface CreateEventSubscriptionResult {
  /**
   * @schema CreateEventSubscriptionResult#EventSubscription
   */
  readonly eventSubscription?: EventSubscription;

}

/**
 * @schema DeleteDbClusterMessage
 */
export interface DeleteDbClusterMessage {
  /**
   * @schema DeleteDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

  /**
   * @schema DeleteDbClusterMessage#SkipFinalSnapshot
   */
  readonly skipFinalSnapshot?: boolean;

  /**
   * @schema DeleteDbClusterMessage#FinalDBSnapshotIdentifier
   */
  readonly finalDbSnapshotIdentifier?: string;

}

/**
 * @schema DeleteDbClusterResult
 */
export interface DeleteDbClusterResult {
  /**
   * @schema DeleteDbClusterResult#DBCluster
   */
  readonly dbCluster?: DbCluster;

}

/**
 * @schema DeleteDbClusterEndpointMessage
 */
export interface DeleteDbClusterEndpointMessage {
  /**
   * @schema DeleteDbClusterEndpointMessage#DBClusterEndpointIdentifier
   */
  readonly dbClusterEndpointIdentifier: string;

}

/**
 * @schema DeleteDbClusterEndpointOutput
 */
export interface DeleteDbClusterEndpointOutput {
  /**
   * @schema DeleteDbClusterEndpointOutput#DBClusterEndpointIdentifier
   */
  readonly dbClusterEndpointIdentifier?: string;

  /**
   * @schema DeleteDbClusterEndpointOutput#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema DeleteDbClusterEndpointOutput#DBClusterEndpointResourceIdentifier
   */
  readonly dbClusterEndpointResourceIdentifier?: string;

  /**
   * @schema DeleteDbClusterEndpointOutput#Endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema DeleteDbClusterEndpointOutput#Status
   */
  readonly status?: string;

  /**
   * @schema DeleteDbClusterEndpointOutput#EndpointType
   */
  readonly endpointType?: string;

  /**
   * @schema DeleteDbClusterEndpointOutput#CustomEndpointType
   */
  readonly customEndpointType?: string;

  /**
   * @schema DeleteDbClusterEndpointOutput#StaticMembers
   */
  readonly staticMembers?: string[];

  /**
   * @schema DeleteDbClusterEndpointOutput#ExcludedMembers
   */
  readonly excludedMembers?: string[];

  /**
   * @schema DeleteDbClusterEndpointOutput#DBClusterEndpointArn
   */
  readonly dbClusterEndpointArn?: string;

}

/**
 * @schema DeleteDbClusterParameterGroupMessage
 */
export interface DeleteDbClusterParameterGroupMessage {
  /**
   * @schema DeleteDbClusterParameterGroupMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName: string;

}

/**
 * @schema DeleteDbClusterSnapshotMessage
 */
export interface DeleteDbClusterSnapshotMessage {
  /**
   * @schema DeleteDbClusterSnapshotMessage#DBClusterSnapshotIdentifier
   */
  readonly dbClusterSnapshotIdentifier: string;

}

/**
 * @schema DeleteDbClusterSnapshotResult
 */
export interface DeleteDbClusterSnapshotResult {
  /**
   * @schema DeleteDbClusterSnapshotResult#DBClusterSnapshot
   */
  readonly dbClusterSnapshot?: DbClusterSnapshot;

}

/**
 * @schema DeleteDbInstanceMessage
 */
export interface DeleteDbInstanceMessage {
  /**
   * @schema DeleteDbInstanceMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier: string;

  /**
   * @schema DeleteDbInstanceMessage#SkipFinalSnapshot
   */
  readonly skipFinalSnapshot?: boolean;

  /**
   * @schema DeleteDbInstanceMessage#FinalDBSnapshotIdentifier
   */
  readonly finalDbSnapshotIdentifier?: string;

}

/**
 * @schema DeleteDbInstanceResult
 */
export interface DeleteDbInstanceResult {
  /**
   * @schema DeleteDbInstanceResult#DBInstance
   */
  readonly dbInstance?: DbInstance;

}

/**
 * @schema DeleteDbParameterGroupMessage
 */
export interface DeleteDbParameterGroupMessage {
  /**
   * @schema DeleteDbParameterGroupMessage#DBParameterGroupName
   */
  readonly dbParameterGroupName: string;

}

/**
 * @schema DeleteDbSubnetGroupMessage
 */
export interface DeleteDbSubnetGroupMessage {
  /**
   * @schema DeleteDbSubnetGroupMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName: string;

}

/**
 * @schema DeleteEventSubscriptionMessage
 */
export interface DeleteEventSubscriptionMessage {
  /**
   * @schema DeleteEventSubscriptionMessage#SubscriptionName
   */
  readonly subscriptionName: string;

}

/**
 * @schema DeleteEventSubscriptionResult
 */
export interface DeleteEventSubscriptionResult {
  /**
   * @schema DeleteEventSubscriptionResult#EventSubscription
   */
  readonly eventSubscription?: EventSubscription;

}

/**
 * @schema DescribeDbClusterEndpointsMessage
 */
export interface DescribeDbClusterEndpointsMessage {
  /**
   * @schema DescribeDbClusterEndpointsMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema DescribeDbClusterEndpointsMessage#DBClusterEndpointIdentifier
   */
  readonly dbClusterEndpointIdentifier?: string;

  /**
   * @schema DescribeDbClusterEndpointsMessage#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeDbClusterEndpointsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeDbClusterEndpointsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DbClusterEndpointMessage
 */
export interface DbClusterEndpointMessage {
  /**
   * @schema DbClusterEndpointMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DbClusterEndpointMessage#DBClusterEndpoints
   */
  readonly dbClusterEndpoints?: DbClusterEndpoint[];

}

/**
 * @schema DescribeDbClusterParameterGroupsMessage
 */
export interface DescribeDbClusterParameterGroupsMessage {
  /**
   * @schema DescribeDbClusterParameterGroupsMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

  /**
   * @schema DescribeDbClusterParameterGroupsMessage#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeDbClusterParameterGroupsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeDbClusterParameterGroupsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DbClusterParameterGroupsMessage
 */
export interface DbClusterParameterGroupsMessage {
  /**
   * @schema DbClusterParameterGroupsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DbClusterParameterGroupsMessage#DBClusterParameterGroups
   */
  readonly dbClusterParameterGroups?: DbClusterParameterGroup[];

}

/**
 * @schema DescribeDbClusterParametersMessage
 */
export interface DescribeDbClusterParametersMessage {
  /**
   * @schema DescribeDbClusterParametersMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName: string;

  /**
   * @schema DescribeDbClusterParametersMessage#Source
   */
  readonly source?: string;

  /**
   * @schema DescribeDbClusterParametersMessage#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeDbClusterParametersMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeDbClusterParametersMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DbClusterParameterGroupDetails
 */
export interface DbClusterParameterGroupDetails {
  /**
   * @schema DbClusterParameterGroupDetails#Parameters
   */
  readonly parameters?: Parameter[];

  /**
   * @schema DbClusterParameterGroupDetails#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DescribeDbClusterSnapshotAttributesMessage
 */
export interface DescribeDbClusterSnapshotAttributesMessage {
  /**
   * @schema DescribeDbClusterSnapshotAttributesMessage#DBClusterSnapshotIdentifier
   */
  readonly dbClusterSnapshotIdentifier: string;

}

/**
 * @schema DescribeDbClusterSnapshotAttributesResult
 */
export interface DescribeDbClusterSnapshotAttributesResult {
  /**
   * @schema DescribeDbClusterSnapshotAttributesResult#DBClusterSnapshotAttributesResult
   */
  readonly dbClusterSnapshotAttributesResult?: DbClusterSnapshotAttributesResult;

}

/**
 * @schema DescribeDbClusterSnapshotsMessage
 */
export interface DescribeDbClusterSnapshotsMessage {
  /**
   * @schema DescribeDbClusterSnapshotsMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema DescribeDbClusterSnapshotsMessage#DBClusterSnapshotIdentifier
   */
  readonly dbClusterSnapshotIdentifier?: string;

  /**
   * @schema DescribeDbClusterSnapshotsMessage#SnapshotType
   */
  readonly snapshotType?: string;

  /**
   * @schema DescribeDbClusterSnapshotsMessage#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeDbClusterSnapshotsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeDbClusterSnapshotsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DescribeDbClusterSnapshotsMessage#IncludeShared
   */
  readonly includeShared?: boolean;

  /**
   * @schema DescribeDbClusterSnapshotsMessage#IncludePublic
   */
  readonly includePublic?: boolean;

}

/**
 * @schema DbClusterSnapshotMessage
 */
export interface DbClusterSnapshotMessage {
  /**
   * @schema DbClusterSnapshotMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DbClusterSnapshotMessage#DBClusterSnapshots
   */
  readonly dbClusterSnapshots?: DbClusterSnapshot[];

}

/**
 * @schema DescribeDbClustersMessage
 */
export interface DescribeDbClustersMessage {
  /**
   * @schema DescribeDbClustersMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema DescribeDbClustersMessage#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeDbClustersMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeDbClustersMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DbClusterMessage
 */
export interface DbClusterMessage {
  /**
   * @schema DbClusterMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DbClusterMessage#DBClusters
   */
  readonly dbClusters?: DbCluster[];

}

/**
 * @schema DescribeDbEngineVersionsMessage
 */
export interface DescribeDbEngineVersionsMessage {
  /**
   * @schema DescribeDbEngineVersionsMessage#Engine
   */
  readonly engine?: string;

  /**
   * @schema DescribeDbEngineVersionsMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema DescribeDbEngineVersionsMessage#DBParameterGroupFamily
   */
  readonly dbParameterGroupFamily?: string;

  /**
   * @schema DescribeDbEngineVersionsMessage#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeDbEngineVersionsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeDbEngineVersionsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DescribeDbEngineVersionsMessage#DefaultOnly
   */
  readonly defaultOnly?: boolean;

  /**
   * @schema DescribeDbEngineVersionsMessage#ListSupportedCharacterSets
   */
  readonly listSupportedCharacterSets?: boolean;

  /**
   * @schema DescribeDbEngineVersionsMessage#ListSupportedTimezones
   */
  readonly listSupportedTimezones?: boolean;

}

/**
 * @schema DbEngineVersionMessage
 */
export interface DbEngineVersionMessage {
  /**
   * @schema DbEngineVersionMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DbEngineVersionMessage#DBEngineVersions
   */
  readonly dbEngineVersions?: DbEngineVersion[];

}

/**
 * @schema DescribeDbInstancesMessage
 */
export interface DescribeDbInstancesMessage {
  /**
   * @schema DescribeDbInstancesMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema DescribeDbInstancesMessage#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeDbInstancesMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeDbInstancesMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DbInstanceMessage
 */
export interface DbInstanceMessage {
  /**
   * @schema DbInstanceMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DbInstanceMessage#DBInstances
   */
  readonly dbInstances?: DbInstance[];

}

/**
 * @schema DescribeDbParameterGroupsMessage
 */
export interface DescribeDbParameterGroupsMessage {
  /**
   * @schema DescribeDbParameterGroupsMessage#DBParameterGroupName
   */
  readonly dbParameterGroupName?: string;

  /**
   * @schema DescribeDbParameterGroupsMessage#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeDbParameterGroupsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeDbParameterGroupsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DbParameterGroupsMessage
 */
export interface DbParameterGroupsMessage {
  /**
   * @schema DbParameterGroupsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DbParameterGroupsMessage#DBParameterGroups
   */
  readonly dbParameterGroups?: DbParameterGroup[];

}

/**
 * @schema DescribeDbParametersMessage
 */
export interface DescribeDbParametersMessage {
  /**
   * @schema DescribeDbParametersMessage#DBParameterGroupName
   */
  readonly dbParameterGroupName: string;

  /**
   * @schema DescribeDbParametersMessage#Source
   */
  readonly source?: string;

  /**
   * @schema DescribeDbParametersMessage#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeDbParametersMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeDbParametersMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DbParameterGroupDetails
 */
export interface DbParameterGroupDetails {
  /**
   * @schema DbParameterGroupDetails#Parameters
   */
  readonly parameters?: Parameter[];

  /**
   * @schema DbParameterGroupDetails#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DescribeDbSubnetGroupsMessage
 */
export interface DescribeDbSubnetGroupsMessage {
  /**
   * @schema DescribeDbSubnetGroupsMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema DescribeDbSubnetGroupsMessage#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeDbSubnetGroupsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeDbSubnetGroupsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DbSubnetGroupMessage
 */
export interface DbSubnetGroupMessage {
  /**
   * @schema DbSubnetGroupMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DbSubnetGroupMessage#DBSubnetGroups
   */
  readonly dbSubnetGroups?: DbSubnetGroup[];

}

/**
 * @schema DescribeEngineDefaultClusterParametersMessage
 */
export interface DescribeEngineDefaultClusterParametersMessage {
  /**
   * @schema DescribeEngineDefaultClusterParametersMessage#DBParameterGroupFamily
   */
  readonly dbParameterGroupFamily: string;

  /**
   * @schema DescribeEngineDefaultClusterParametersMessage#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeEngineDefaultClusterParametersMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeEngineDefaultClusterParametersMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DescribeEngineDefaultClusterParametersResult
 */
export interface DescribeEngineDefaultClusterParametersResult {
  /**
   * @schema DescribeEngineDefaultClusterParametersResult#EngineDefaults
   */
  readonly engineDefaults?: EngineDefaults;

}

/**
 * @schema DescribeEngineDefaultParametersMessage
 */
export interface DescribeEngineDefaultParametersMessage {
  /**
   * @schema DescribeEngineDefaultParametersMessage#DBParameterGroupFamily
   */
  readonly dbParameterGroupFamily: string;

  /**
   * @schema DescribeEngineDefaultParametersMessage#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeEngineDefaultParametersMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeEngineDefaultParametersMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DescribeEngineDefaultParametersResult
 */
export interface DescribeEngineDefaultParametersResult {
  /**
   * @schema DescribeEngineDefaultParametersResult#EngineDefaults
   */
  readonly engineDefaults?: EngineDefaults;

}

/**
 * @schema DescribeEventCategoriesMessage
 */
export interface DescribeEventCategoriesMessage {
  /**
   * @schema DescribeEventCategoriesMessage#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema DescribeEventCategoriesMessage#Filters
   */
  readonly filters?: Filter[];

}

/**
 * @schema EventCategoriesMessage
 */
export interface EventCategoriesMessage {
  /**
   * @schema EventCategoriesMessage#EventCategoriesMapList
   */
  readonly eventCategoriesMapList?: EventCategoriesMap[];

}

/**
 * @schema DescribeEventSubscriptionsMessage
 */
export interface DescribeEventSubscriptionsMessage {
  /**
   * @schema DescribeEventSubscriptionsMessage#SubscriptionName
   */
  readonly subscriptionName?: string;

  /**
   * @schema DescribeEventSubscriptionsMessage#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeEventSubscriptionsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeEventSubscriptionsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema EventSubscriptionsMessage
 */
export interface EventSubscriptionsMessage {
  /**
   * @schema EventSubscriptionsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema EventSubscriptionsMessage#EventSubscriptionsList
   */
  readonly eventSubscriptionsList?: EventSubscription[];

}

/**
 * @schema DescribeEventsMessage
 */
export interface DescribeEventsMessage {
  /**
   * @schema DescribeEventsMessage#SourceIdentifier
   */
  readonly sourceIdentifier?: string;

  /**
   * @schema DescribeEventsMessage#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema DescribeEventsMessage#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema DescribeEventsMessage#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema DescribeEventsMessage#Duration
   */
  readonly duration?: number;

  /**
   * @schema DescribeEventsMessage#EventCategories
   */
  readonly eventCategories?: string[];

  /**
   * @schema DescribeEventsMessage#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeEventsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeEventsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema EventsMessage
 */
export interface EventsMessage {
  /**
   * @schema EventsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema EventsMessage#Events
   */
  readonly events?: Event[];

}

/**
 * @schema DescribeOrderableDbInstanceOptionsMessage
 */
export interface DescribeOrderableDbInstanceOptionsMessage {
  /**
   * @schema DescribeOrderableDbInstanceOptionsMessage#Engine
   */
  readonly engine: string;

  /**
   * @schema DescribeOrderableDbInstanceOptionsMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema DescribeOrderableDbInstanceOptionsMessage#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema DescribeOrderableDbInstanceOptionsMessage#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema DescribeOrderableDbInstanceOptionsMessage#Vpc
   */
  readonly vpc?: boolean;

  /**
   * @schema DescribeOrderableDbInstanceOptionsMessage#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeOrderableDbInstanceOptionsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeOrderableDbInstanceOptionsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema OrderableDbInstanceOptionsMessage
 */
export interface OrderableDbInstanceOptionsMessage {
  /**
   * @schema OrderableDbInstanceOptionsMessage#OrderableDBInstanceOptions
   */
  readonly orderableDbInstanceOptions?: OrderableDbInstanceOption[];

  /**
   * @schema OrderableDbInstanceOptionsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DescribePendingMaintenanceActionsMessage
 */
export interface DescribePendingMaintenanceActionsMessage {
  /**
   * @schema DescribePendingMaintenanceActionsMessage#ResourceIdentifier
   */
  readonly resourceIdentifier?: string;

  /**
   * @schema DescribePendingMaintenanceActionsMessage#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribePendingMaintenanceActionsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DescribePendingMaintenanceActionsMessage#MaxRecords
   */
  readonly maxRecords?: number;

}

/**
 * @schema PendingMaintenanceActionsMessage
 */
export interface PendingMaintenanceActionsMessage {
  /**
   * @schema PendingMaintenanceActionsMessage#PendingMaintenanceActions
   */
  readonly pendingMaintenanceActions?: ResourcePendingMaintenanceActions[];

  /**
   * @schema PendingMaintenanceActionsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DescribeValidDbInstanceModificationsMessage
 */
export interface DescribeValidDbInstanceModificationsMessage {
  /**
   * @schema DescribeValidDbInstanceModificationsMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier: string;

}

/**
 * @schema DescribeValidDbInstanceModificationsResult
 */
export interface DescribeValidDbInstanceModificationsResult {
  /**
   * @schema DescribeValidDbInstanceModificationsResult#ValidDBInstanceModificationsMessage
   */
  readonly validDbInstanceModificationsMessage?: ValidDbInstanceModificationsMessage;

}

/**
 * @schema FailoverDbClusterMessage
 */
export interface FailoverDbClusterMessage {
  /**
   * @schema FailoverDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema FailoverDbClusterMessage#TargetDBInstanceIdentifier
   */
  readonly targetDbInstanceIdentifier?: string;

}

/**
 * @schema FailoverDbClusterResult
 */
export interface FailoverDbClusterResult {
  /**
   * @schema FailoverDbClusterResult#DBCluster
   */
  readonly dbCluster?: DbCluster;

}

/**
 * @schema ListTagsForResourceMessage
 */
export interface ListTagsForResourceMessage {
  /**
   * @schema ListTagsForResourceMessage#ResourceName
   */
  readonly resourceName: string;

  /**
   * @schema ListTagsForResourceMessage#Filters
   */
  readonly filters?: Filter[];

}

/**
 * @schema TagListMessage
 */
export interface TagListMessage {
  /**
   * @schema TagListMessage#TagList
   */
  readonly tagList?: Tag[];

}

/**
 * @schema ModifyDbClusterMessage
 */
export interface ModifyDbClusterMessage {
  /**
   * @schema ModifyDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

  /**
   * @schema ModifyDbClusterMessage#NewDBClusterIdentifier
   */
  readonly newDbClusterIdentifier?: string;

  /**
   * @schema ModifyDbClusterMessage#ApplyImmediately
   */
  readonly applyImmediately?: boolean;

  /**
   * @schema ModifyDbClusterMessage#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema ModifyDbClusterMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

  /**
   * @schema ModifyDbClusterMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema ModifyDbClusterMessage#Port
   */
  readonly port?: number;

  /**
   * @schema ModifyDbClusterMessage#MasterUserPassword
   */
  readonly masterUserPassword?: string;

  /**
   * @schema ModifyDbClusterMessage#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema ModifyDbClusterMessage#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema ModifyDbClusterMessage#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema ModifyDbClusterMessage#EnableIAMDatabaseAuthentication
   */
  readonly enableIamDatabaseAuthentication?: boolean;

  /**
   * @schema ModifyDbClusterMessage#CloudwatchLogsExportConfiguration
   */
  readonly cloudwatchLogsExportConfiguration?: CloudwatchLogsExportConfiguration;

  /**
   * @schema ModifyDbClusterMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema ModifyDbClusterMessage#DeletionProtection
   */
  readonly deletionProtection?: boolean;

}

/**
 * @schema ModifyDbClusterResult
 */
export interface ModifyDbClusterResult {
  /**
   * @schema ModifyDbClusterResult#DBCluster
   */
  readonly dbCluster?: DbCluster;

}

/**
 * @schema ModifyDbClusterEndpointMessage
 */
export interface ModifyDbClusterEndpointMessage {
  /**
   * @schema ModifyDbClusterEndpointMessage#DBClusterEndpointIdentifier
   */
  readonly dbClusterEndpointIdentifier: string;

  /**
   * @schema ModifyDbClusterEndpointMessage#EndpointType
   */
  readonly endpointType?: string;

  /**
   * @schema ModifyDbClusterEndpointMessage#StaticMembers
   */
  readonly staticMembers?: string[];

  /**
   * @schema ModifyDbClusterEndpointMessage#ExcludedMembers
   */
  readonly excludedMembers?: string[];

}

/**
 * @schema ModifyDbClusterEndpointOutput
 */
export interface ModifyDbClusterEndpointOutput {
  /**
   * @schema ModifyDbClusterEndpointOutput#DBClusterEndpointIdentifier
   */
  readonly dbClusterEndpointIdentifier?: string;

  /**
   * @schema ModifyDbClusterEndpointOutput#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema ModifyDbClusterEndpointOutput#DBClusterEndpointResourceIdentifier
   */
  readonly dbClusterEndpointResourceIdentifier?: string;

  /**
   * @schema ModifyDbClusterEndpointOutput#Endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema ModifyDbClusterEndpointOutput#Status
   */
  readonly status?: string;

  /**
   * @schema ModifyDbClusterEndpointOutput#EndpointType
   */
  readonly endpointType?: string;

  /**
   * @schema ModifyDbClusterEndpointOutput#CustomEndpointType
   */
  readonly customEndpointType?: string;

  /**
   * @schema ModifyDbClusterEndpointOutput#StaticMembers
   */
  readonly staticMembers?: string[];

  /**
   * @schema ModifyDbClusterEndpointOutput#ExcludedMembers
   */
  readonly excludedMembers?: string[];

  /**
   * @schema ModifyDbClusterEndpointOutput#DBClusterEndpointArn
   */
  readonly dbClusterEndpointArn?: string;

}

/**
 * @schema ModifyDbClusterParameterGroupMessage
 */
export interface ModifyDbClusterParameterGroupMessage {
  /**
   * @schema ModifyDbClusterParameterGroupMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName: string;

  /**
   * @schema ModifyDbClusterParameterGroupMessage#Parameters
   */
  readonly parameters: Parameter[];

}

/**
 * @schema DbClusterParameterGroupNameMessage
 */
export interface DbClusterParameterGroupNameMessage {
  /**
   * @schema DbClusterParameterGroupNameMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

}

/**
 * @schema ModifyDbClusterSnapshotAttributeMessage
 */
export interface ModifyDbClusterSnapshotAttributeMessage {
  /**
   * @schema ModifyDbClusterSnapshotAttributeMessage#DBClusterSnapshotIdentifier
   */
  readonly dbClusterSnapshotIdentifier: string;

  /**
   * @schema ModifyDbClusterSnapshotAttributeMessage#AttributeName
   */
  readonly attributeName: string;

  /**
   * @schema ModifyDbClusterSnapshotAttributeMessage#ValuesToAdd
   */
  readonly valuesToAdd?: string[];

  /**
   * @schema ModifyDbClusterSnapshotAttributeMessage#ValuesToRemove
   */
  readonly valuesToRemove?: string[];

}

/**
 * @schema ModifyDbClusterSnapshotAttributeResult
 */
export interface ModifyDbClusterSnapshotAttributeResult {
  /**
   * @schema ModifyDbClusterSnapshotAttributeResult#DBClusterSnapshotAttributesResult
   */
  readonly dbClusterSnapshotAttributesResult?: DbClusterSnapshotAttributesResult;

}

/**
 * @schema ModifyDbInstanceMessage
 */
export interface ModifyDbInstanceMessage {
  /**
   * @schema ModifyDbInstanceMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier: string;

  /**
   * @schema ModifyDbInstanceMessage#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema ModifyDbInstanceMessage#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema ModifyDbInstanceMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema ModifyDbInstanceMessage#DBSecurityGroups
   */
  readonly dbSecurityGroups?: string[];

  /**
   * @schema ModifyDbInstanceMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema ModifyDbInstanceMessage#ApplyImmediately
   */
  readonly applyImmediately?: boolean;

  /**
   * @schema ModifyDbInstanceMessage#MasterUserPassword
   */
  readonly masterUserPassword?: string;

  /**
   * @schema ModifyDbInstanceMessage#DBParameterGroupName
   */
  readonly dbParameterGroupName?: string;

  /**
   * @schema ModifyDbInstanceMessage#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema ModifyDbInstanceMessage#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema ModifyDbInstanceMessage#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema ModifyDbInstanceMessage#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema ModifyDbInstanceMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema ModifyDbInstanceMessage#AllowMajorVersionUpgrade
   */
  readonly allowMajorVersionUpgrade?: boolean;

  /**
   * @schema ModifyDbInstanceMessage#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema ModifyDbInstanceMessage#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema ModifyDbInstanceMessage#Iops
   */
  readonly iops?: number;

  /**
   * @schema ModifyDbInstanceMessage#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema ModifyDbInstanceMessage#NewDBInstanceIdentifier
   */
  readonly newDbInstanceIdentifier?: string;

  /**
   * @schema ModifyDbInstanceMessage#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema ModifyDbInstanceMessage#TdeCredentialArn
   */
  readonly tdeCredentialArn?: string;

  /**
   * @schema ModifyDbInstanceMessage#TdeCredentialPassword
   */
  readonly tdeCredentialPassword?: string;

  /**
   * @schema ModifyDbInstanceMessage#CACertificateIdentifier
   */
  readonly caCertificateIdentifier?: string;

  /**
   * @schema ModifyDbInstanceMessage#Domain
   */
  readonly domain?: string;

  /**
   * @schema ModifyDbInstanceMessage#CopyTagsToSnapshot
   */
  readonly copyTagsToSnapshot?: boolean;

  /**
   * @schema ModifyDbInstanceMessage#MonitoringInterval
   */
  readonly monitoringInterval?: number;

  /**
   * @schema ModifyDbInstanceMessage#DBPortNumber
   */
  readonly dbPortNumber?: number;

  /**
   * @schema ModifyDbInstanceMessage#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema ModifyDbInstanceMessage#MonitoringRoleArn
   */
  readonly monitoringRoleArn?: string;

  /**
   * @schema ModifyDbInstanceMessage#DomainIAMRoleName
   */
  readonly domainIamRoleName?: string;

  /**
   * @schema ModifyDbInstanceMessage#PromotionTier
   */
  readonly promotionTier?: number;

  /**
   * @schema ModifyDbInstanceMessage#EnableIAMDatabaseAuthentication
   */
  readonly enableIamDatabaseAuthentication?: boolean;

  /**
   * @schema ModifyDbInstanceMessage#EnablePerformanceInsights
   */
  readonly enablePerformanceInsights?: boolean;

  /**
   * @schema ModifyDbInstanceMessage#PerformanceInsightsKMSKeyId
   */
  readonly performanceInsightsKmsKeyId?: string;

  /**
   * @schema ModifyDbInstanceMessage#CloudwatchLogsExportConfiguration
   */
  readonly cloudwatchLogsExportConfiguration?: CloudwatchLogsExportConfiguration;

  /**
   * @schema ModifyDbInstanceMessage#DeletionProtection
   */
  readonly deletionProtection?: boolean;

}

/**
 * @schema ModifyDbInstanceResult
 */
export interface ModifyDbInstanceResult {
  /**
   * @schema ModifyDbInstanceResult#DBInstance
   */
  readonly dbInstance?: DbInstance;

}

/**
 * @schema ModifyDbParameterGroupMessage
 */
export interface ModifyDbParameterGroupMessage {
  /**
   * @schema ModifyDbParameterGroupMessage#DBParameterGroupName
   */
  readonly dbParameterGroupName: string;

  /**
   * @schema ModifyDbParameterGroupMessage#Parameters
   */
  readonly parameters: Parameter[];

}

/**
 * @schema DbParameterGroupNameMessage
 */
export interface DbParameterGroupNameMessage {
  /**
   * @schema DbParameterGroupNameMessage#DBParameterGroupName
   */
  readonly dbParameterGroupName?: string;

}

/**
 * @schema ModifyDbSubnetGroupMessage
 */
export interface ModifyDbSubnetGroupMessage {
  /**
   * @schema ModifyDbSubnetGroupMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName: string;

  /**
   * @schema ModifyDbSubnetGroupMessage#DBSubnetGroupDescription
   */
  readonly dbSubnetGroupDescription?: string;

  /**
   * @schema ModifyDbSubnetGroupMessage#SubnetIds
   */
  readonly subnetIds: string[];

}

/**
 * @schema ModifyDbSubnetGroupResult
 */
export interface ModifyDbSubnetGroupResult {
  /**
   * @schema ModifyDbSubnetGroupResult#DBSubnetGroup
   */
  readonly dbSubnetGroup?: DbSubnetGroup;

}

/**
 * @schema ModifyEventSubscriptionMessage
 */
export interface ModifyEventSubscriptionMessage {
  /**
   * @schema ModifyEventSubscriptionMessage#SubscriptionName
   */
  readonly subscriptionName: string;

  /**
   * @schema ModifyEventSubscriptionMessage#SnsTopicArn
   */
  readonly snsTopicArn?: string;

  /**
   * @schema ModifyEventSubscriptionMessage#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema ModifyEventSubscriptionMessage#EventCategories
   */
  readonly eventCategories?: string[];

  /**
   * @schema ModifyEventSubscriptionMessage#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema ModifyEventSubscriptionResult
 */
export interface ModifyEventSubscriptionResult {
  /**
   * @schema ModifyEventSubscriptionResult#EventSubscription
   */
  readonly eventSubscription?: EventSubscription;

}

/**
 * @schema PromoteReadReplicaDbClusterMessage
 */
export interface PromoteReadReplicaDbClusterMessage {
  /**
   * @schema PromoteReadReplicaDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

}

/**
 * @schema PromoteReadReplicaDbClusterResult
 */
export interface PromoteReadReplicaDbClusterResult {
  /**
   * @schema PromoteReadReplicaDbClusterResult#DBCluster
   */
  readonly dbCluster?: DbCluster;

}

/**
 * @schema RebootDbInstanceMessage
 */
export interface RebootDbInstanceMessage {
  /**
   * @schema RebootDbInstanceMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier: string;

  /**
   * @schema RebootDbInstanceMessage#ForceFailover
   */
  readonly forceFailover?: boolean;

}

/**
 * @schema RebootDbInstanceResult
 */
export interface RebootDbInstanceResult {
  /**
   * @schema RebootDbInstanceResult#DBInstance
   */
  readonly dbInstance?: DbInstance;

}

/**
 * @schema RemoveRoleFromDbClusterMessage
 */
export interface RemoveRoleFromDbClusterMessage {
  /**
   * @schema RemoveRoleFromDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

  /**
   * @schema RemoveRoleFromDbClusterMessage#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema RemoveRoleFromDbClusterMessage#FeatureName
   */
  readonly featureName?: string;

}

/**
 * @schema RemoveSourceIdentifierFromSubscriptionMessage
 */
export interface RemoveSourceIdentifierFromSubscriptionMessage {
  /**
   * @schema RemoveSourceIdentifierFromSubscriptionMessage#SubscriptionName
   */
  readonly subscriptionName: string;

  /**
   * @schema RemoveSourceIdentifierFromSubscriptionMessage#SourceIdentifier
   */
  readonly sourceIdentifier: string;

}

/**
 * @schema RemoveSourceIdentifierFromSubscriptionResult
 */
export interface RemoveSourceIdentifierFromSubscriptionResult {
  /**
   * @schema RemoveSourceIdentifierFromSubscriptionResult#EventSubscription
   */
  readonly eventSubscription?: EventSubscription;

}

/**
 * @schema RemoveTagsFromResourceMessage
 */
export interface RemoveTagsFromResourceMessage {
  /**
   * @schema RemoveTagsFromResourceMessage#ResourceName
   */
  readonly resourceName: string;

  /**
   * @schema RemoveTagsFromResourceMessage#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema ResetDbClusterParameterGroupMessage
 */
export interface ResetDbClusterParameterGroupMessage {
  /**
   * @schema ResetDbClusterParameterGroupMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName: string;

  /**
   * @schema ResetDbClusterParameterGroupMessage#ResetAllParameters
   */
  readonly resetAllParameters?: boolean;

  /**
   * @schema ResetDbClusterParameterGroupMessage#Parameters
   */
  readonly parameters?: Parameter[];

}

/**
 * @schema ResetDbParameterGroupMessage
 */
export interface ResetDbParameterGroupMessage {
  /**
   * @schema ResetDbParameterGroupMessage#DBParameterGroupName
   */
  readonly dbParameterGroupName: string;

  /**
   * @schema ResetDbParameterGroupMessage#ResetAllParameters
   */
  readonly resetAllParameters?: boolean;

  /**
   * @schema ResetDbParameterGroupMessage#Parameters
   */
  readonly parameters?: Parameter[];

}

/**
 * @schema RestoreDbClusterFromSnapshotMessage
 */
export interface RestoreDbClusterFromSnapshotMessage {
  /**
   * @schema RestoreDbClusterFromSnapshotMessage#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema RestoreDbClusterFromSnapshotMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

  /**
   * @schema RestoreDbClusterFromSnapshotMessage#SnapshotIdentifier
   */
  readonly snapshotIdentifier: string;

  /**
   * @schema RestoreDbClusterFromSnapshotMessage#Engine
   */
  readonly engine: string;

  /**
   * @schema RestoreDbClusterFromSnapshotMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema RestoreDbClusterFromSnapshotMessage#Port
   */
  readonly port?: number;

  /**
   * @schema RestoreDbClusterFromSnapshotMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema RestoreDbClusterFromSnapshotMessage#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema RestoreDbClusterFromSnapshotMessage#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema RestoreDbClusterFromSnapshotMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema RestoreDbClusterFromSnapshotMessage#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema RestoreDbClusterFromSnapshotMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema RestoreDbClusterFromSnapshotMessage#EnableIAMDatabaseAuthentication
   */
  readonly enableIamDatabaseAuthentication?: boolean;

  /**
   * @schema RestoreDbClusterFromSnapshotMessage#EnableCloudwatchLogsExports
   */
  readonly enableCloudwatchLogsExports?: string[];

  /**
   * @schema RestoreDbClusterFromSnapshotMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

  /**
   * @schema RestoreDbClusterFromSnapshotMessage#DeletionProtection
   */
  readonly deletionProtection?: boolean;

}

/**
 * @schema RestoreDbClusterFromSnapshotResult
 */
export interface RestoreDbClusterFromSnapshotResult {
  /**
   * @schema RestoreDbClusterFromSnapshotResult#DBCluster
   */
  readonly dbCluster?: DbCluster;

}

/**
 * @schema RestoreDbClusterToPointInTimeMessage
 */
export interface RestoreDbClusterToPointInTimeMessage {
  /**
   * @schema RestoreDbClusterToPointInTimeMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

  /**
   * @schema RestoreDbClusterToPointInTimeMessage#RestoreType
   */
  readonly restoreType?: string;

  /**
   * @schema RestoreDbClusterToPointInTimeMessage#SourceDBClusterIdentifier
   */
  readonly sourceDbClusterIdentifier: string;

  /**
   * @schema RestoreDbClusterToPointInTimeMessage#RestoreToTime
   */
  readonly restoreToTime?: string;

  /**
   * @schema RestoreDbClusterToPointInTimeMessage#UseLatestRestorableTime
   */
  readonly useLatestRestorableTime?: boolean;

  /**
   * @schema RestoreDbClusterToPointInTimeMessage#Port
   */
  readonly port?: number;

  /**
   * @schema RestoreDbClusterToPointInTimeMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema RestoreDbClusterToPointInTimeMessage#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema RestoreDbClusterToPointInTimeMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema RestoreDbClusterToPointInTimeMessage#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema RestoreDbClusterToPointInTimeMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema RestoreDbClusterToPointInTimeMessage#EnableIAMDatabaseAuthentication
   */
  readonly enableIamDatabaseAuthentication?: boolean;

  /**
   * @schema RestoreDbClusterToPointInTimeMessage#EnableCloudwatchLogsExports
   */
  readonly enableCloudwatchLogsExports?: string[];

  /**
   * @schema RestoreDbClusterToPointInTimeMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

  /**
   * @schema RestoreDbClusterToPointInTimeMessage#DeletionProtection
   */
  readonly deletionProtection?: boolean;

}

/**
 * @schema RestoreDbClusterToPointInTimeResult
 */
export interface RestoreDbClusterToPointInTimeResult {
  /**
   * @schema RestoreDbClusterToPointInTimeResult#DBCluster
   */
  readonly dbCluster?: DbCluster;

}

/**
 * @schema StartDbClusterMessage
 */
export interface StartDbClusterMessage {
  /**
   * @schema StartDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

}

/**
 * @schema StartDbClusterResult
 */
export interface StartDbClusterResult {
  /**
   * @schema StartDbClusterResult#DBCluster
   */
  readonly dbCluster?: DbCluster;

}

/**
 * @schema StopDbClusterMessage
 */
export interface StopDbClusterMessage {
  /**
   * @schema StopDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

}

/**
 * @schema StopDbClusterResult
 */
export interface StopDbClusterResult {
  /**
   * @schema StopDbClusterResult#DBCluster
   */
  readonly dbCluster?: DbCluster;

}

/**
 * @schema EventSubscription
 */
export interface EventSubscription {
  /**
   * @schema EventSubscription#CustomerAwsId
   */
  readonly customerAwsId?: string;

  /**
   * @schema EventSubscription#CustSubscriptionId
   */
  readonly custSubscriptionId?: string;

  /**
   * @schema EventSubscription#SnsTopicArn
   */
  readonly snsTopicArn?: string;

  /**
   * @schema EventSubscription#Status
   */
  readonly status?: string;

  /**
   * @schema EventSubscription#SubscriptionCreationTime
   */
  readonly subscriptionCreationTime?: string;

  /**
   * @schema EventSubscription#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema EventSubscription#SourceIdsList
   */
  readonly sourceIdsList?: string[];

  /**
   * @schema EventSubscription#EventCategoriesList
   */
  readonly eventCategoriesList?: string[];

  /**
   * @schema EventSubscription#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema EventSubscription#EventSubscriptionArn
   */
  readonly eventSubscriptionArn?: string;

}

/**
 * @schema Tag
 */
export interface Tag {
  /**
   * @schema Tag#Key
   */
  readonly key?: string;

  /**
   * @schema Tag#Value
   */
  readonly value?: string;

}

/**
 * @schema ResourcePendingMaintenanceActions
 */
export interface ResourcePendingMaintenanceActions {
  /**
   * @schema ResourcePendingMaintenanceActions#ResourceIdentifier
   */
  readonly resourceIdentifier?: string;

  /**
   * @schema ResourcePendingMaintenanceActions#PendingMaintenanceActionDetails
   */
  readonly pendingMaintenanceActionDetails?: PendingMaintenanceAction[];

}

/**
 * @schema DbClusterParameterGroup
 */
export interface DbClusterParameterGroup {
  /**
   * @schema DbClusterParameterGroup#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

  /**
   * @schema DbClusterParameterGroup#DBParameterGroupFamily
   */
  readonly dbParameterGroupFamily?: string;

  /**
   * @schema DbClusterParameterGroup#Description
   */
  readonly description?: string;

  /**
   * @schema DbClusterParameterGroup#DBClusterParameterGroupArn
   */
  readonly dbClusterParameterGroupArn?: string;

}

/**
 * @schema DbClusterSnapshot
 */
export interface DbClusterSnapshot {
  /**
   * @schema DbClusterSnapshot#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema DbClusterSnapshot#DBClusterSnapshotIdentifier
   */
  readonly dbClusterSnapshotIdentifier?: string;

  /**
   * @schema DbClusterSnapshot#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema DbClusterSnapshot#SnapshotCreateTime
   */
  readonly snapshotCreateTime?: string;

  /**
   * @schema DbClusterSnapshot#Engine
   */
  readonly engine?: string;

  /**
   * @schema DbClusterSnapshot#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema DbClusterSnapshot#Status
   */
  readonly status?: string;

  /**
   * @schema DbClusterSnapshot#Port
   */
  readonly port?: number;

  /**
   * @schema DbClusterSnapshot#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema DbClusterSnapshot#ClusterCreateTime
   */
  readonly clusterCreateTime?: string;

  /**
   * @schema DbClusterSnapshot#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema DbClusterSnapshot#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema DbClusterSnapshot#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema DbClusterSnapshot#SnapshotType
   */
  readonly snapshotType?: string;

  /**
   * @schema DbClusterSnapshot#PercentProgress
   */
  readonly percentProgress?: number;

  /**
   * @schema DbClusterSnapshot#StorageEncrypted
   */
  readonly storageEncrypted?: boolean;

  /**
   * @schema DbClusterSnapshot#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema DbClusterSnapshot#DBClusterSnapshotArn
   */
  readonly dbClusterSnapshotArn?: string;

  /**
   * @schema DbClusterSnapshot#SourceDBClusterSnapshotArn
   */
  readonly sourceDbClusterSnapshotArn?: string;

  /**
   * @schema DbClusterSnapshot#IAMDatabaseAuthenticationEnabled
   */
  readonly iamDatabaseAuthenticationEnabled?: boolean;

}

/**
 * @schema DbParameterGroup
 */
export interface DbParameterGroup {
  /**
   * @schema DbParameterGroup#DBParameterGroupName
   */
  readonly dbParameterGroupName?: string;

  /**
   * @schema DbParameterGroup#DBParameterGroupFamily
   */
  readonly dbParameterGroupFamily?: string;

  /**
   * @schema DbParameterGroup#Description
   */
  readonly description?: string;

  /**
   * @schema DbParameterGroup#DBParameterGroupArn
   */
  readonly dbParameterGroupArn?: string;

}

/**
 * @schema DbCluster
 */
export interface DbCluster {
  /**
   * @schema DbCluster#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema DbCluster#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema DbCluster#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema DbCluster#CharacterSetName
   */
  readonly characterSetName?: string;

  /**
   * @schema DbCluster#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema DbCluster#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema DbCluster#DBClusterParameterGroup
   */
  readonly dbClusterParameterGroup?: string;

  /**
   * @schema DbCluster#DBSubnetGroup
   */
  readonly dbSubnetGroup?: string;

  /**
   * @schema DbCluster#Status
   */
  readonly status?: string;

  /**
   * @schema DbCluster#PercentProgress
   */
  readonly percentProgress?: string;

  /**
   * @schema DbCluster#EarliestRestorableTime
   */
  readonly earliestRestorableTime?: string;

  /**
   * @schema DbCluster#Endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema DbCluster#ReaderEndpoint
   */
  readonly readerEndpoint?: string;

  /**
   * @schema DbCluster#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema DbCluster#Engine
   */
  readonly engine?: string;

  /**
   * @schema DbCluster#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema DbCluster#LatestRestorableTime
   */
  readonly latestRestorableTime?: string;

  /**
   * @schema DbCluster#Port
   */
  readonly port?: number;

  /**
   * @schema DbCluster#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema DbCluster#DBClusterOptionGroupMemberships
   */
  readonly dbClusterOptionGroupMemberships?: DbClusterOptionGroupStatus[];

  /**
   * @schema DbCluster#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema DbCluster#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema DbCluster#ReplicationSourceIdentifier
   */
  readonly replicationSourceIdentifier?: string;

  /**
   * @schema DbCluster#ReadReplicaIdentifiers
   */
  readonly readReplicaIdentifiers?: string[];

  /**
   * @schema DbCluster#DBClusterMembers
   */
  readonly dbClusterMembers?: DbClusterMember[];

  /**
   * @schema DbCluster#VpcSecurityGroups
   */
  readonly vpcSecurityGroups?: VpcSecurityGroupMembership[];

  /**
   * @schema DbCluster#HostedZoneId
   */
  readonly hostedZoneId?: string;

  /**
   * @schema DbCluster#StorageEncrypted
   */
  readonly storageEncrypted?: boolean;

  /**
   * @schema DbCluster#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema DbCluster#DbClusterResourceId
   */
  readonly dbClusterResourceId?: string;

  /**
   * @schema DbCluster#DBClusterArn
   */
  readonly dbClusterArn?: string;

  /**
   * @schema DbCluster#AssociatedRoles
   */
  readonly associatedRoles?: DbClusterRole[];

  /**
   * @schema DbCluster#IAMDatabaseAuthenticationEnabled
   */
  readonly iamDatabaseAuthenticationEnabled?: boolean;

  /**
   * @schema DbCluster#CloneGroupId
   */
  readonly cloneGroupId?: string;

  /**
   * @schema DbCluster#ClusterCreateTime
   */
  readonly clusterCreateTime?: string;

  /**
   * @schema DbCluster#EnabledCloudwatchLogsExports
   */
  readonly enabledCloudwatchLogsExports?: string[];

  /**
   * @schema DbCluster#DeletionProtection
   */
  readonly deletionProtection?: boolean;

}

/**
 * @schema DbInstance
 */
export interface DbInstance {
  /**
   * @schema DbInstance#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema DbInstance#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema DbInstance#Engine
   */
  readonly engine?: string;

  /**
   * @schema DbInstance#DBInstanceStatus
   */
  readonly dbInstanceStatus?: string;

  /**
   * @schema DbInstance#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema DbInstance#DBName
   */
  readonly dbName?: string;

  /**
   * @schema DbInstance#Endpoint
   */
  readonly endpoint?: Endpoint;

  /**
   * @schema DbInstance#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema DbInstance#InstanceCreateTime
   */
  readonly instanceCreateTime?: string;

  /**
   * @schema DbInstance#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema DbInstance#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema DbInstance#DBSecurityGroups
   */
  readonly dbSecurityGroups?: DbSecurityGroupMembership[];

  /**
   * @schema DbInstance#VpcSecurityGroups
   */
  readonly vpcSecurityGroups?: VpcSecurityGroupMembership[];

  /**
   * @schema DbInstance#DBParameterGroups
   */
  readonly dbParameterGroups?: DbParameterGroupStatus[];

  /**
   * @schema DbInstance#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema DbInstance#DBSubnetGroup
   */
  readonly dbSubnetGroup?: DbSubnetGroup;

  /**
   * @schema DbInstance#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema DbInstance#PendingModifiedValues
   */
  readonly pendingModifiedValues?: PendingModifiedValues;

  /**
   * @schema DbInstance#LatestRestorableTime
   */
  readonly latestRestorableTime?: string;

  /**
   * @schema DbInstance#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema DbInstance#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema DbInstance#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema DbInstance#ReadReplicaSourceDBInstanceIdentifier
   */
  readonly readReplicaSourceDbInstanceIdentifier?: string;

  /**
   * @schema DbInstance#ReadReplicaDBInstanceIdentifiers
   */
  readonly readReplicaDbInstanceIdentifiers?: string[];

  /**
   * @schema DbInstance#ReadReplicaDBClusterIdentifiers
   */
  readonly readReplicaDbClusterIdentifiers?: string[];

  /**
   * @schema DbInstance#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema DbInstance#Iops
   */
  readonly iops?: number;

  /**
   * @schema DbInstance#OptionGroupMemberships
   */
  readonly optionGroupMemberships?: OptionGroupMembership[];

  /**
   * @schema DbInstance#CharacterSetName
   */
  readonly characterSetName?: string;

  /**
   * @schema DbInstance#SecondaryAvailabilityZone
   */
  readonly secondaryAvailabilityZone?: string;

  /**
   * @schema DbInstance#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema DbInstance#StatusInfos
   */
  readonly statusInfos?: DbInstanceStatusInfo[];

  /**
   * @schema DbInstance#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema DbInstance#TdeCredentialArn
   */
  readonly tdeCredentialArn?: string;

  /**
   * @schema DbInstance#DbInstancePort
   */
  readonly dbInstancePort?: number;

  /**
   * @schema DbInstance#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema DbInstance#StorageEncrypted
   */
  readonly storageEncrypted?: boolean;

  /**
   * @schema DbInstance#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema DbInstance#DbiResourceId
   */
  readonly dbiResourceId?: string;

  /**
   * @schema DbInstance#CACertificateIdentifier
   */
  readonly caCertificateIdentifier?: string;

  /**
   * @schema DbInstance#DomainMemberships
   */
  readonly domainMemberships?: DomainMembership[];

  /**
   * @schema DbInstance#CopyTagsToSnapshot
   */
  readonly copyTagsToSnapshot?: boolean;

  /**
   * @schema DbInstance#MonitoringInterval
   */
  readonly monitoringInterval?: number;

  /**
   * @schema DbInstance#EnhancedMonitoringResourceArn
   */
  readonly enhancedMonitoringResourceArn?: string;

  /**
   * @schema DbInstance#MonitoringRoleArn
   */
  readonly monitoringRoleArn?: string;

  /**
   * @schema DbInstance#PromotionTier
   */
  readonly promotionTier?: number;

  /**
   * @schema DbInstance#DBInstanceArn
   */
  readonly dbInstanceArn?: string;

  /**
   * @schema DbInstance#Timezone
   */
  readonly timezone?: string;

  /**
   * @schema DbInstance#IAMDatabaseAuthenticationEnabled
   */
  readonly iamDatabaseAuthenticationEnabled?: boolean;

  /**
   * @schema DbInstance#PerformanceInsightsEnabled
   */
  readonly performanceInsightsEnabled?: boolean;

  /**
   * @schema DbInstance#PerformanceInsightsKMSKeyId
   */
  readonly performanceInsightsKmsKeyId?: string;

  /**
   * @schema DbInstance#EnabledCloudwatchLogsExports
   */
  readonly enabledCloudwatchLogsExports?: string[];

  /**
   * @schema DbInstance#DeletionProtection
   */
  readonly deletionProtection?: boolean;

}

/**
 * @schema DbSubnetGroup
 */
export interface DbSubnetGroup {
  /**
   * @schema DbSubnetGroup#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema DbSubnetGroup#DBSubnetGroupDescription
   */
  readonly dbSubnetGroupDescription?: string;

  /**
   * @schema DbSubnetGroup#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema DbSubnetGroup#SubnetGroupStatus
   */
  readonly subnetGroupStatus?: string;

  /**
   * @schema DbSubnetGroup#Subnets
   */
  readonly subnets?: Subnet[];

  /**
   * @schema DbSubnetGroup#DBSubnetGroupArn
   */
  readonly dbSubnetGroupArn?: string;

}

/**
 * @schema Filter
 */
export interface Filter {
  /**
   * @schema Filter#Name
   */
  readonly name: string;

  /**
   * @schema Filter#Values
   */
  readonly values: string[];

}

/**
 * @schema DbClusterEndpoint
 */
export interface DbClusterEndpoint {
  /**
   * @schema DbClusterEndpoint#DBClusterEndpointIdentifier
   */
  readonly dbClusterEndpointIdentifier?: string;

  /**
   * @schema DbClusterEndpoint#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema DbClusterEndpoint#DBClusterEndpointResourceIdentifier
   */
  readonly dbClusterEndpointResourceIdentifier?: string;

  /**
   * @schema DbClusterEndpoint#Endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema DbClusterEndpoint#Status
   */
  readonly status?: string;

  /**
   * @schema DbClusterEndpoint#EndpointType
   */
  readonly endpointType?: string;

  /**
   * @schema DbClusterEndpoint#CustomEndpointType
   */
  readonly customEndpointType?: string;

  /**
   * @schema DbClusterEndpoint#StaticMembers
   */
  readonly staticMembers?: string[];

  /**
   * @schema DbClusterEndpoint#ExcludedMembers
   */
  readonly excludedMembers?: string[];

  /**
   * @schema DbClusterEndpoint#DBClusterEndpointArn
   */
  readonly dbClusterEndpointArn?: string;

}

/**
 * @schema Parameter
 */
export interface Parameter {
  /**
   * @schema Parameter#ParameterName
   */
  readonly parameterName?: string;

  /**
   * @schema Parameter#ParameterValue
   */
  readonly parameterValue?: string;

  /**
   * @schema Parameter#Description
   */
  readonly description?: string;

  /**
   * @schema Parameter#Source
   */
  readonly source?: string;

  /**
   * @schema Parameter#ApplyType
   */
  readonly applyType?: string;

  /**
   * @schema Parameter#DataType
   */
  readonly dataType?: string;

  /**
   * @schema Parameter#AllowedValues
   */
  readonly allowedValues?: string;

  /**
   * @schema Parameter#IsModifiable
   */
  readonly isModifiable?: boolean;

  /**
   * @schema Parameter#MinimumEngineVersion
   */
  readonly minimumEngineVersion?: string;

  /**
   * @schema Parameter#ApplyMethod
   */
  readonly applyMethod?: string;

}

/**
 * @schema DbClusterSnapshotAttributesResult
 */
export interface DbClusterSnapshotAttributesResult {
  /**
   * @schema DbClusterSnapshotAttributesResult#DBClusterSnapshotIdentifier
   */
  readonly dbClusterSnapshotIdentifier?: string;

  /**
   * @schema DbClusterSnapshotAttributesResult#DBClusterSnapshotAttributes
   */
  readonly dbClusterSnapshotAttributes?: DbClusterSnapshotAttribute[];

}

/**
 * @schema DbEngineVersion
 */
export interface DbEngineVersion {
  /**
   * @schema DbEngineVersion#Engine
   */
  readonly engine?: string;

  /**
   * @schema DbEngineVersion#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema DbEngineVersion#DBParameterGroupFamily
   */
  readonly dbParameterGroupFamily?: string;

  /**
   * @schema DbEngineVersion#DBEngineDescription
   */
  readonly dbEngineDescription?: string;

  /**
   * @schema DbEngineVersion#DBEngineVersionDescription
   */
  readonly dbEngineVersionDescription?: string;

  /**
   * @schema DbEngineVersion#DefaultCharacterSet
   */
  readonly defaultCharacterSet?: CharacterSet;

  /**
   * @schema DbEngineVersion#SupportedCharacterSets
   */
  readonly supportedCharacterSets?: CharacterSet[];

  /**
   * @schema DbEngineVersion#ValidUpgradeTarget
   */
  readonly validUpgradeTarget?: UpgradeTarget[];

  /**
   * @schema DbEngineVersion#SupportedTimezones
   */
  readonly supportedTimezones?: Timezone[];

  /**
   * @schema DbEngineVersion#ExportableLogTypes
   */
  readonly exportableLogTypes?: string[];

  /**
   * @schema DbEngineVersion#SupportsLogExportsToCloudwatchLogs
   */
  readonly supportsLogExportsToCloudwatchLogs?: boolean;

  /**
   * @schema DbEngineVersion#SupportsReadReplica
   */
  readonly supportsReadReplica?: boolean;

}

/**
 * @schema EngineDefaults
 */
export interface EngineDefaults {
  /**
   * @schema EngineDefaults#DBParameterGroupFamily
   */
  readonly dbParameterGroupFamily?: string;

  /**
   * @schema EngineDefaults#Marker
   */
  readonly marker?: string;

  /**
   * @schema EngineDefaults#Parameters
   */
  readonly parameters?: Parameter[];

}

/**
 * @schema EventCategoriesMap
 */
export interface EventCategoriesMap {
  /**
   * @schema EventCategoriesMap#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema EventCategoriesMap#EventCategories
   */
  readonly eventCategories?: string[];

}

/**
 * @schema Event
 */
export interface Event {
  /**
   * @schema Event#SourceIdentifier
   */
  readonly sourceIdentifier?: string;

  /**
   * @schema Event#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema Event#Message
   */
  readonly message?: string;

  /**
   * @schema Event#EventCategories
   */
  readonly eventCategories?: string[];

  /**
   * @schema Event#Date
   */
  readonly date?: string;

  /**
   * @schema Event#SourceArn
   */
  readonly sourceArn?: string;

}

/**
 * @schema OrderableDbInstanceOption
 */
export interface OrderableDbInstanceOption {
  /**
   * @schema OrderableDbInstanceOption#Engine
   */
  readonly engine?: string;

  /**
   * @schema OrderableDbInstanceOption#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema OrderableDbInstanceOption#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema OrderableDbInstanceOption#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema OrderableDbInstanceOption#AvailabilityZones
   */
  readonly availabilityZones?: AvailabilityZone[];

  /**
   * @schema OrderableDbInstanceOption#MultiAZCapable
   */
  readonly multiAzCapable?: boolean;

  /**
   * @schema OrderableDbInstanceOption#ReadReplicaCapable
   */
  readonly readReplicaCapable?: boolean;

  /**
   * @schema OrderableDbInstanceOption#Vpc
   */
  readonly vpc?: boolean;

  /**
   * @schema OrderableDbInstanceOption#SupportsStorageEncryption
   */
  readonly supportsStorageEncryption?: boolean;

  /**
   * @schema OrderableDbInstanceOption#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema OrderableDbInstanceOption#SupportsIops
   */
  readonly supportsIops?: boolean;

  /**
   * @schema OrderableDbInstanceOption#SupportsEnhancedMonitoring
   */
  readonly supportsEnhancedMonitoring?: boolean;

  /**
   * @schema OrderableDbInstanceOption#SupportsIAMDatabaseAuthentication
   */
  readonly supportsIamDatabaseAuthentication?: boolean;

  /**
   * @schema OrderableDbInstanceOption#SupportsPerformanceInsights
   */
  readonly supportsPerformanceInsights?: boolean;

  /**
   * @schema OrderableDbInstanceOption#MinStorageSize
   */
  readonly minStorageSize?: number;

  /**
   * @schema OrderableDbInstanceOption#MaxStorageSize
   */
  readonly maxStorageSize?: number;

  /**
   * @schema OrderableDbInstanceOption#MinIopsPerDbInstance
   */
  readonly minIopsPerDbInstance?: number;

  /**
   * @schema OrderableDbInstanceOption#MaxIopsPerDbInstance
   */
  readonly maxIopsPerDbInstance?: number;

  /**
   * @schema OrderableDbInstanceOption#MinIopsPerGib
   */
  readonly minIopsPerGib?: number;

  /**
   * @schema OrderableDbInstanceOption#MaxIopsPerGib
   */
  readonly maxIopsPerGib?: number;

}

/**
 * @schema ValidDbInstanceModificationsMessage
 */
export interface ValidDbInstanceModificationsMessage {
  /**
   * @schema ValidDbInstanceModificationsMessage#Storage
   */
  readonly storage?: ValidStorageOptions[];

}

/**
 * @schema CloudwatchLogsExportConfiguration
 */
export interface CloudwatchLogsExportConfiguration {
  /**
   * @schema CloudwatchLogsExportConfiguration#EnableLogTypes
   */
  readonly enableLogTypes?: string[];

  /**
   * @schema CloudwatchLogsExportConfiguration#DisableLogTypes
   */
  readonly disableLogTypes?: string[];

}

/**
 * @schema PendingMaintenanceAction
 */
export interface PendingMaintenanceAction {
  /**
   * @schema PendingMaintenanceAction#Action
   */
  readonly action?: string;

  /**
   * @schema PendingMaintenanceAction#AutoAppliedAfterDate
   */
  readonly autoAppliedAfterDate?: string;

  /**
   * @schema PendingMaintenanceAction#ForcedApplyDate
   */
  readonly forcedApplyDate?: string;

  /**
   * @schema PendingMaintenanceAction#OptInStatus
   */
  readonly optInStatus?: string;

  /**
   * @schema PendingMaintenanceAction#CurrentApplyDate
   */
  readonly currentApplyDate?: string;

  /**
   * @schema PendingMaintenanceAction#Description
   */
  readonly description?: string;

}

/**
 * @schema DbClusterOptionGroupStatus
 */
export interface DbClusterOptionGroupStatus {
  /**
   * @schema DbClusterOptionGroupStatus#DBClusterOptionGroupName
   */
  readonly dbClusterOptionGroupName?: string;

  /**
   * @schema DbClusterOptionGroupStatus#Status
   */
  readonly status?: string;

}

/**
 * @schema DbClusterMember
 */
export interface DbClusterMember {
  /**
   * @schema DbClusterMember#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema DbClusterMember#IsClusterWriter
   */
  readonly isClusterWriter?: boolean;

  /**
   * @schema DbClusterMember#DBClusterParameterGroupStatus
   */
  readonly dbClusterParameterGroupStatus?: string;

  /**
   * @schema DbClusterMember#PromotionTier
   */
  readonly promotionTier?: number;

}

/**
 * @schema VpcSecurityGroupMembership
 */
export interface VpcSecurityGroupMembership {
  /**
   * @schema VpcSecurityGroupMembership#VpcSecurityGroupId
   */
  readonly vpcSecurityGroupId?: string;

  /**
   * @schema VpcSecurityGroupMembership#Status
   */
  readonly status?: string;

}

/**
 * @schema DbClusterRole
 */
export interface DbClusterRole {
  /**
   * @schema DbClusterRole#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema DbClusterRole#Status
   */
  readonly status?: string;

  /**
   * @schema DbClusterRole#FeatureName
   */
  readonly featureName?: string;

}

/**
 * @schema Endpoint
 */
export interface Endpoint {
  /**
   * @schema Endpoint#Address
   */
  readonly address?: string;

  /**
   * @schema Endpoint#Port
   */
  readonly port?: number;

  /**
   * @schema Endpoint#HostedZoneId
   */
  readonly hostedZoneId?: string;

}

/**
 * @schema DbSecurityGroupMembership
 */
export interface DbSecurityGroupMembership {
  /**
   * @schema DbSecurityGroupMembership#DBSecurityGroupName
   */
  readonly dbSecurityGroupName?: string;

  /**
   * @schema DbSecurityGroupMembership#Status
   */
  readonly status?: string;

}

/**
 * @schema DbParameterGroupStatus
 */
export interface DbParameterGroupStatus {
  /**
   * @schema DbParameterGroupStatus#DBParameterGroupName
   */
  readonly dbParameterGroupName?: string;

  /**
   * @schema DbParameterGroupStatus#ParameterApplyStatus
   */
  readonly parameterApplyStatus?: string;

}

/**
 * @schema PendingModifiedValues
 */
export interface PendingModifiedValues {
  /**
   * @schema PendingModifiedValues#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema PendingModifiedValues#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema PendingModifiedValues#MasterUserPassword
   */
  readonly masterUserPassword?: string;

  /**
   * @schema PendingModifiedValues#Port
   */
  readonly port?: number;

  /**
   * @schema PendingModifiedValues#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema PendingModifiedValues#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema PendingModifiedValues#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema PendingModifiedValues#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema PendingModifiedValues#Iops
   */
  readonly iops?: number;

  /**
   * @schema PendingModifiedValues#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema PendingModifiedValues#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema PendingModifiedValues#CACertificateIdentifier
   */
  readonly caCertificateIdentifier?: string;

  /**
   * @schema PendingModifiedValues#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema PendingModifiedValues#PendingCloudwatchLogsExports
   */
  readonly pendingCloudwatchLogsExports?: PendingCloudwatchLogsExports;

}

/**
 * @schema OptionGroupMembership
 */
export interface OptionGroupMembership {
  /**
   * @schema OptionGroupMembership#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema OptionGroupMembership#Status
   */
  readonly status?: string;

}

/**
 * @schema DbInstanceStatusInfo
 */
export interface DbInstanceStatusInfo {
  /**
   * @schema DbInstanceStatusInfo#StatusType
   */
  readonly statusType?: string;

  /**
   * @schema DbInstanceStatusInfo#Normal
   */
  readonly normal?: boolean;

  /**
   * @schema DbInstanceStatusInfo#Status
   */
  readonly status?: string;

  /**
   * @schema DbInstanceStatusInfo#Message
   */
  readonly message?: string;

}

/**
 * @schema DomainMembership
 */
export interface DomainMembership {
  /**
   * @schema DomainMembership#Domain
   */
  readonly domain?: string;

  /**
   * @schema DomainMembership#Status
   */
  readonly status?: string;

  /**
   * @schema DomainMembership#FQDN
   */
  readonly fqdn?: string;

  /**
   * @schema DomainMembership#IAMRoleName
   */
  readonly iamRoleName?: string;

}

/**
 * @schema Subnet
 */
export interface Subnet {
  /**
   * @schema Subnet#SubnetIdentifier
   */
  readonly subnetIdentifier?: string;

  /**
   * @schema Subnet#SubnetAvailabilityZone
   */
  readonly subnetAvailabilityZone?: AvailabilityZone;

  /**
   * @schema Subnet#SubnetStatus
   */
  readonly subnetStatus?: string;

}

/**
 * @schema DbClusterSnapshotAttribute
 */
export interface DbClusterSnapshotAttribute {
  /**
   * @schema DbClusterSnapshotAttribute#AttributeName
   */
  readonly attributeName?: string;

  /**
   * @schema DbClusterSnapshotAttribute#AttributeValues
   */
  readonly attributeValues?: string[];

}

/**
 * @schema CharacterSet
 */
export interface CharacterSet {
  /**
   * @schema CharacterSet#CharacterSetName
   */
  readonly characterSetName?: string;

  /**
   * @schema CharacterSet#CharacterSetDescription
   */
  readonly characterSetDescription?: string;

}

/**
 * @schema UpgradeTarget
 */
export interface UpgradeTarget {
  /**
   * @schema UpgradeTarget#Engine
   */
  readonly engine?: string;

  /**
   * @schema UpgradeTarget#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema UpgradeTarget#Description
   */
  readonly description?: string;

  /**
   * @schema UpgradeTarget#AutoUpgrade
   */
  readonly autoUpgrade?: boolean;

  /**
   * @schema UpgradeTarget#IsMajorVersionUpgrade
   */
  readonly isMajorVersionUpgrade?: boolean;

}

/**
 * @schema Timezone
 */
export interface Timezone {
  /**
   * @schema Timezone#TimezoneName
   */
  readonly timezoneName?: string;

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

/**
 * @schema ValidStorageOptions
 */
export interface ValidStorageOptions {
  /**
   * @schema ValidStorageOptions#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema ValidStorageOptions#StorageSize
   */
  readonly storageSize?: Range[];

  /**
   * @schema ValidStorageOptions#ProvisionedIops
   */
  readonly provisionedIops?: Range[];

  /**
   * @schema ValidStorageOptions#IopsToStorageRatio
   */
  readonly iopsToStorageRatio?: DoubleRange[];

}

/**
 * @schema PendingCloudwatchLogsExports
 */
export interface PendingCloudwatchLogsExports {
  /**
   * @schema PendingCloudwatchLogsExports#LogTypesToEnable
   */
  readonly logTypesToEnable?: string[];

  /**
   * @schema PendingCloudwatchLogsExports#LogTypesToDisable
   */
  readonly logTypesToDisable?: string[];

}

/**
 * @schema Range
 */
export interface Range {
  /**
   * @schema Range#From
   */
  readonly from?: number;

  /**
   * @schema Range#To
   */
  readonly to?: number;

  /**
   * @schema Range#Step
   */
  readonly step?: number;

}

/**
 * @schema DoubleRange
 */
export interface DoubleRange {
  /**
   * @schema DoubleRange#From
   */
  readonly from?: number;

  /**
   * @schema DoubleRange#To
   */
  readonly to?: number;

}
