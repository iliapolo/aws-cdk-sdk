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
  readonly masterUsername: string;

  /**
   * @schema CreateDbClusterMessage#MasterUserPassword
   */
  readonly masterUserPassword: string;

  /**
   * @schema CreateDbClusterMessage#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema CreateDbClusterMessage#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

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
   * @schema CreateDbInstanceMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier: string;

  /**
   * @schema CreateDbInstanceMessage#DBInstanceClass
   */
  readonly dbInstanceClass: string;

  /**
   * @schema CreateDbInstanceMessage#Engine
   */
  readonly engine: string;

  /**
   * @schema CreateDbInstanceMessage#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema CreateDbInstanceMessage#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema CreateDbInstanceMessage#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema CreateDbInstanceMessage#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateDbInstanceMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier: string;

  /**
   * @schema CreateDbInstanceMessage#PromotionTier
   */
  readonly promotionTier?: number;

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
 * @schema DeleteDbSubnetGroupMessage
 */
export interface DeleteDbSubnetGroupMessage {
  /**
   * @schema DeleteDbSubnetGroupMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName: string;

}

/**
 * @schema DescribeCertificatesMessage
 */
export interface DescribeCertificatesMessage {
  /**
   * @schema DescribeCertificatesMessage#CertificateIdentifier
   */
  readonly certificateIdentifier?: string;

  /**
   * @schema DescribeCertificatesMessage#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeCertificatesMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeCertificatesMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema CertificateMessage
 */
export interface CertificateMessage {
  /**
   * @schema CertificateMessage#Certificates
   */
  readonly certificates?: Certificate[];

  /**
   * @schema CertificateMessage#Marker
   */
  readonly marker?: string;

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
   * @schema ModifyDbClusterMessage#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema ModifyDbClusterMessage#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

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
   * @schema ModifyDbInstanceMessage#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema ModifyDbInstanceMessage#ApplyImmediately
   */
  readonly applyImmediately?: boolean;

  /**
   * @schema ModifyDbInstanceMessage#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema ModifyDbInstanceMessage#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema ModifyDbInstanceMessage#NewDBInstanceIdentifier
   */
  readonly newDbInstanceIdentifier?: string;

  /**
   * @schema ModifyDbInstanceMessage#CACertificateIdentifier
   */
  readonly caCertificateIdentifier?: string;

  /**
   * @schema ModifyDbInstanceMessage#PromotionTier
   */
  readonly promotionTier?: number;

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
   * @schema RestoreDbClusterFromSnapshotMessage#EnableCloudwatchLogsExports
   */
  readonly enableCloudwatchLogsExports?: string[];

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
   * @schema RestoreDbClusterToPointInTimeMessage#EnableCloudwatchLogsExports
   */
  readonly enableCloudwatchLogsExports?: string[];

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

}

/**
 * @schema DbCluster
 */
export interface DbCluster {
  /**
   * @schema DbCluster#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema DbCluster#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

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
   * @schema DbCluster#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema DbCluster#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

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
   * @schema DbInstance#Endpoint
   */
  readonly endpoint?: Endpoint;

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
   * @schema DbInstance#VpcSecurityGroups
   */
  readonly vpcSecurityGroups?: VpcSecurityGroupMembership[];

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
   * @schema DbInstance#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema DbInstance#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema DbInstance#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema DbInstance#StatusInfos
   */
  readonly statusInfos?: DbInstanceStatusInfo[];

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
   * @schema DbInstance#PromotionTier
   */
  readonly promotionTier?: number;

  /**
   * @schema DbInstance#DBInstanceArn
   */
  readonly dbInstanceArn?: string;

  /**
   * @schema DbInstance#EnabledCloudwatchLogsExports
   */
  readonly enabledCloudwatchLogsExports?: string[];

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
 * @schema Certificate
 */
export interface Certificate {
  /**
   * @schema Certificate#CertificateIdentifier
   */
  readonly certificateIdentifier?: string;

  /**
   * @schema Certificate#CertificateType
   */
  readonly certificateType?: string;

  /**
   * @schema Certificate#Thumbprint
   */
  readonly thumbprint?: string;

  /**
   * @schema Certificate#ValidFrom
   */
  readonly validFrom?: string;

  /**
   * @schema Certificate#ValidTill
   */
  readonly validTill?: string;

  /**
   * @schema Certificate#CertificateArn
   */
  readonly certificateArn?: string;

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
   * @schema DbEngineVersion#ValidUpgradeTarget
   */
  readonly validUpgradeTarget?: UpgradeTarget[];

  /**
   * @schema DbEngineVersion#ExportableLogTypes
   */
  readonly exportableLogTypes?: string[];

  /**
   * @schema DbEngineVersion#SupportsLogExportsToCloudwatchLogs
   */
  readonly supportsLogExportsToCloudwatchLogs?: boolean;

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
   * @schema OrderableDbInstanceOption#Vpc
   */
  readonly vpc?: boolean;

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
 * @schema AvailabilityZone
 */
export interface AvailabilityZone {
  /**
   * @schema AvailabilityZone#Name
   */
  readonly name?: string;

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
