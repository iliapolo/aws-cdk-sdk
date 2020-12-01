/**
 * @schema AcceptReservedNodeExchangeInputMessage
 */
export interface AcceptReservedNodeExchangeInputMessage {
  /**
   * @schema AcceptReservedNodeExchangeInputMessage#ReservedNodeId
   */
  readonly reservedNodeId: string;

  /**
   * @schema AcceptReservedNodeExchangeInputMessage#TargetReservedNodeOfferingId
   */
  readonly targetReservedNodeOfferingId: string;

}

/**
 * @schema AcceptReservedNodeExchangeOutputMessage
 */
export interface AcceptReservedNodeExchangeOutputMessage {
  /**
   * @schema AcceptReservedNodeExchangeOutputMessage#ExchangedReservedNode
   */
  readonly exchangedReservedNode?: ReservedNode;

}

/**
 * @schema AuthorizeClusterSecurityGroupIngressMessage
 */
export interface AuthorizeClusterSecurityGroupIngressMessage {
  /**
   * @schema AuthorizeClusterSecurityGroupIngressMessage#ClusterSecurityGroupName
   */
  readonly clusterSecurityGroupName: string;

  /**
   * @schema AuthorizeClusterSecurityGroupIngressMessage#CIDRIP
   */
  readonly cidrip?: string;

  /**
   * @schema AuthorizeClusterSecurityGroupIngressMessage#EC2SecurityGroupName
   */
  readonly ec2SecurityGroupName?: string;

  /**
   * @schema AuthorizeClusterSecurityGroupIngressMessage#EC2SecurityGroupOwnerId
   */
  readonly ec2SecurityGroupOwnerId?: string;

}

/**
 * @schema AuthorizeClusterSecurityGroupIngressResult
 */
export interface AuthorizeClusterSecurityGroupIngressResult {
  /**
   * @schema AuthorizeClusterSecurityGroupIngressResult#ClusterSecurityGroup
   */
  readonly clusterSecurityGroup?: ClusterSecurityGroup;

}

/**
 * @schema AuthorizeSnapshotAccessMessage
 */
export interface AuthorizeSnapshotAccessMessage {
  /**
   * @schema AuthorizeSnapshotAccessMessage#SnapshotIdentifier
   */
  readonly snapshotIdentifier: string;

  /**
   * @schema AuthorizeSnapshotAccessMessage#SnapshotClusterIdentifier
   */
  readonly snapshotClusterIdentifier?: string;

  /**
   * @schema AuthorizeSnapshotAccessMessage#AccountWithRestoreAccess
   */
  readonly accountWithRestoreAccess: string;

}

/**
 * @schema AuthorizeSnapshotAccessResult
 */
export interface AuthorizeSnapshotAccessResult {
  /**
   * @schema AuthorizeSnapshotAccessResult#Snapshot
   */
  readonly snapshot?: Snapshot;

}

/**
 * @schema BatchDeleteClusterSnapshotsRequest
 */
export interface BatchDeleteClusterSnapshotsRequest {
  /**
   * @schema BatchDeleteClusterSnapshotsRequest#Identifiers
   */
  readonly identifiers: DeleteClusterSnapshotMessage[];

}

/**
 * @schema BatchDeleteClusterSnapshotsResult
 */
export interface BatchDeleteClusterSnapshotsResult {
  /**
   * @schema BatchDeleteClusterSnapshotsResult#Resources
   */
  readonly resources?: string[];

  /**
   * @schema BatchDeleteClusterSnapshotsResult#Errors
   */
  readonly errors?: SnapshotErrorMessage[];

}

/**
 * @schema BatchModifyClusterSnapshotsMessage
 */
export interface BatchModifyClusterSnapshotsMessage {
  /**
   * @schema BatchModifyClusterSnapshotsMessage#SnapshotIdentifierList
   */
  readonly snapshotIdentifierList: string[];

  /**
   * @schema BatchModifyClusterSnapshotsMessage#ManualSnapshotRetentionPeriod
   */
  readonly manualSnapshotRetentionPeriod?: number;

  /**
   * @schema BatchModifyClusterSnapshotsMessage#Force
   */
  readonly force?: boolean;

}

/**
 * @schema BatchModifyClusterSnapshotsOutputMessage
 */
export interface BatchModifyClusterSnapshotsOutputMessage {
  /**
   * @schema BatchModifyClusterSnapshotsOutputMessage#Resources
   */
  readonly resources?: string[];

  /**
   * @schema BatchModifyClusterSnapshotsOutputMessage#Errors
   */
  readonly errors?: SnapshotErrorMessage[];

}

/**
 * @schema CancelResizeMessage
 */
export interface CancelResizeMessage {
  /**
   * @schema CancelResizeMessage#ClusterIdentifier
   */
  readonly clusterIdentifier: string;

}

/**
 * @schema ResizeProgressMessage
 */
export interface ResizeProgressMessage {
  /**
   * @schema ResizeProgressMessage#TargetNodeType
   */
  readonly targetNodeType?: string;

  /**
   * @schema ResizeProgressMessage#TargetNumberOfNodes
   */
  readonly targetNumberOfNodes?: number;

  /**
   * @schema ResizeProgressMessage#TargetClusterType
   */
  readonly targetClusterType?: string;

  /**
   * @schema ResizeProgressMessage#Status
   */
  readonly status?: string;

  /**
   * @schema ResizeProgressMessage#ImportTablesCompleted
   */
  readonly importTablesCompleted?: string[];

  /**
   * @schema ResizeProgressMessage#ImportTablesInProgress
   */
  readonly importTablesInProgress?: string[];

  /**
   * @schema ResizeProgressMessage#ImportTablesNotStarted
   */
  readonly importTablesNotStarted?: string[];

  /**
   * @schema ResizeProgressMessage#AvgResizeRateInMegaBytesPerSecond
   */
  readonly avgResizeRateInMegaBytesPerSecond?: number;

  /**
   * @schema ResizeProgressMessage#TotalResizeDataInMegaBytes
   */
  readonly totalResizeDataInMegaBytes?: number;

  /**
   * @schema ResizeProgressMessage#ProgressInMegaBytes
   */
  readonly progressInMegaBytes?: number;

  /**
   * @schema ResizeProgressMessage#ElapsedTimeInSeconds
   */
  readonly elapsedTimeInSeconds?: number;

  /**
   * @schema ResizeProgressMessage#EstimatedTimeToCompletionInSeconds
   */
  readonly estimatedTimeToCompletionInSeconds?: number;

  /**
   * @schema ResizeProgressMessage#ResizeType
   */
  readonly resizeType?: string;

  /**
   * @schema ResizeProgressMessage#Message
   */
  readonly message?: string;

  /**
   * @schema ResizeProgressMessage#TargetEncryptionType
   */
  readonly targetEncryptionType?: string;

  /**
   * @schema ResizeProgressMessage#DataTransferProgressPercent
   */
  readonly dataTransferProgressPercent?: number;

}

/**
 * @schema CopyClusterSnapshotMessage
 */
export interface CopyClusterSnapshotMessage {
  /**
   * @schema CopyClusterSnapshotMessage#SourceSnapshotIdentifier
   */
  readonly sourceSnapshotIdentifier: string;

  /**
   * @schema CopyClusterSnapshotMessage#SourceSnapshotClusterIdentifier
   */
  readonly sourceSnapshotClusterIdentifier?: string;

  /**
   * @schema CopyClusterSnapshotMessage#TargetSnapshotIdentifier
   */
  readonly targetSnapshotIdentifier: string;

  /**
   * @schema CopyClusterSnapshotMessage#ManualSnapshotRetentionPeriod
   */
  readonly manualSnapshotRetentionPeriod?: number;

}

/**
 * @schema CopyClusterSnapshotResult
 */
export interface CopyClusterSnapshotResult {
  /**
   * @schema CopyClusterSnapshotResult#Snapshot
   */
  readonly snapshot?: Snapshot;

}

/**
 * @schema CreateClusterMessage
 */
export interface CreateClusterMessage {
  /**
   * @schema CreateClusterMessage#DBName
   */
  readonly dbName?: string;

  /**
   * @schema CreateClusterMessage#ClusterIdentifier
   */
  readonly clusterIdentifier: string;

  /**
   * @schema CreateClusterMessage#ClusterType
   */
  readonly clusterType?: string;

  /**
   * @schema CreateClusterMessage#NodeType
   */
  readonly nodeType: string;

  /**
   * @schema CreateClusterMessage#MasterUsername
   */
  readonly masterUsername: string;

  /**
   * @schema CreateClusterMessage#MasterUserPassword
   */
  readonly masterUserPassword: string;

  /**
   * @schema CreateClusterMessage#ClusterSecurityGroups
   */
  readonly clusterSecurityGroups?: string[];

  /**
   * @schema CreateClusterMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema CreateClusterMessage#ClusterSubnetGroupName
   */
  readonly clusterSubnetGroupName?: string;

  /**
   * @schema CreateClusterMessage#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema CreateClusterMessage#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema CreateClusterMessage#ClusterParameterGroupName
   */
  readonly clusterParameterGroupName?: string;

  /**
   * @schema CreateClusterMessage#AutomatedSnapshotRetentionPeriod
   */
  readonly automatedSnapshotRetentionPeriod?: number;

  /**
   * @schema CreateClusterMessage#ManualSnapshotRetentionPeriod
   */
  readonly manualSnapshotRetentionPeriod?: number;

  /**
   * @schema CreateClusterMessage#Port
   */
  readonly port?: number;

  /**
   * @schema CreateClusterMessage#ClusterVersion
   */
  readonly clusterVersion?: string;

  /**
   * @schema CreateClusterMessage#AllowVersionUpgrade
   */
  readonly allowVersionUpgrade?: boolean;

  /**
   * @schema CreateClusterMessage#NumberOfNodes
   */
  readonly numberOfNodes?: number;

  /**
   * @schema CreateClusterMessage#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema CreateClusterMessage#Encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema CreateClusterMessage#HsmClientCertificateIdentifier
   */
  readonly hsmClientCertificateIdentifier?: string;

  /**
   * @schema CreateClusterMessage#HsmConfigurationIdentifier
   */
  readonly hsmConfigurationIdentifier?: string;

  /**
   * @schema CreateClusterMessage#ElasticIp
   */
  readonly elasticIp?: string;

  /**
   * @schema CreateClusterMessage#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateClusterMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema CreateClusterMessage#EnhancedVpcRouting
   */
  readonly enhancedVpcRouting?: boolean;

  /**
   * @schema CreateClusterMessage#AdditionalInfo
   */
  readonly additionalInfo?: string;

  /**
   * @schema CreateClusterMessage#IamRoles
   */
  readonly iamRoles?: string[];

  /**
   * @schema CreateClusterMessage#MaintenanceTrackName
   */
  readonly maintenanceTrackName?: string;

  /**
   * @schema CreateClusterMessage#SnapshotScheduleIdentifier
   */
  readonly snapshotScheduleIdentifier?: string;

}

/**
 * @schema CreateClusterResult
 */
export interface CreateClusterResult {
  /**
   * @schema CreateClusterResult#Cluster
   */
  readonly cluster?: Cluster;

}

/**
 * @schema CreateClusterParameterGroupMessage
 */
export interface CreateClusterParameterGroupMessage {
  /**
   * @schema CreateClusterParameterGroupMessage#ParameterGroupName
   */
  readonly parameterGroupName: string;

  /**
   * @schema CreateClusterParameterGroupMessage#ParameterGroupFamily
   */
  readonly parameterGroupFamily: string;

  /**
   * @schema CreateClusterParameterGroupMessage#Description
   */
  readonly description: string;

  /**
   * @schema CreateClusterParameterGroupMessage#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateClusterParameterGroupResult
 */
export interface CreateClusterParameterGroupResult {
  /**
   * @schema CreateClusterParameterGroupResult#ClusterParameterGroup
   */
  readonly clusterParameterGroup?: ClusterParameterGroup;

}

/**
 * @schema CreateClusterSecurityGroupMessage
 */
export interface CreateClusterSecurityGroupMessage {
  /**
   * @schema CreateClusterSecurityGroupMessage#ClusterSecurityGroupName
   */
  readonly clusterSecurityGroupName: string;

  /**
   * @schema CreateClusterSecurityGroupMessage#Description
   */
  readonly description: string;

  /**
   * @schema CreateClusterSecurityGroupMessage#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateClusterSecurityGroupResult
 */
export interface CreateClusterSecurityGroupResult {
  /**
   * @schema CreateClusterSecurityGroupResult#ClusterSecurityGroup
   */
  readonly clusterSecurityGroup?: ClusterSecurityGroup;

}

/**
 * @schema CreateClusterSnapshotMessage
 */
export interface CreateClusterSnapshotMessage {
  /**
   * @schema CreateClusterSnapshotMessage#SnapshotIdentifier
   */
  readonly snapshotIdentifier: string;

  /**
   * @schema CreateClusterSnapshotMessage#ClusterIdentifier
   */
  readonly clusterIdentifier: string;

  /**
   * @schema CreateClusterSnapshotMessage#ManualSnapshotRetentionPeriod
   */
  readonly manualSnapshotRetentionPeriod?: number;

  /**
   * @schema CreateClusterSnapshotMessage#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateClusterSnapshotResult
 */
export interface CreateClusterSnapshotResult {
  /**
   * @schema CreateClusterSnapshotResult#Snapshot
   */
  readonly snapshot?: Snapshot;

}

/**
 * @schema CreateClusterSubnetGroupMessage
 */
export interface CreateClusterSubnetGroupMessage {
  /**
   * @schema CreateClusterSubnetGroupMessage#ClusterSubnetGroupName
   */
  readonly clusterSubnetGroupName: string;

  /**
   * @schema CreateClusterSubnetGroupMessage#Description
   */
  readonly description: string;

  /**
   * @schema CreateClusterSubnetGroupMessage#SubnetIds
   */
  readonly subnetIds: string[];

  /**
   * @schema CreateClusterSubnetGroupMessage#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateClusterSubnetGroupResult
 */
export interface CreateClusterSubnetGroupResult {
  /**
   * @schema CreateClusterSubnetGroupResult#ClusterSubnetGroup
   */
  readonly clusterSubnetGroup?: ClusterSubnetGroup;

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
   * @schema CreateEventSubscriptionMessage#SourceIds
   */
  readonly sourceIds?: string[];

  /**
   * @schema CreateEventSubscriptionMessage#EventCategories
   */
  readonly eventCategories?: string[];

  /**
   * @schema CreateEventSubscriptionMessage#Severity
   */
  readonly severity?: string;

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
 * @schema CreateHsmClientCertificateMessage
 */
export interface CreateHsmClientCertificateMessage {
  /**
   * @schema CreateHsmClientCertificateMessage#HsmClientCertificateIdentifier
   */
  readonly hsmClientCertificateIdentifier: string;

  /**
   * @schema CreateHsmClientCertificateMessage#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateHsmClientCertificateResult
 */
export interface CreateHsmClientCertificateResult {
  /**
   * @schema CreateHsmClientCertificateResult#HsmClientCertificate
   */
  readonly hsmClientCertificate?: HsmClientCertificate;

}

/**
 * @schema CreateHsmConfigurationMessage
 */
export interface CreateHsmConfigurationMessage {
  /**
   * @schema CreateHsmConfigurationMessage#HsmConfigurationIdentifier
   */
  readonly hsmConfigurationIdentifier: string;

  /**
   * @schema CreateHsmConfigurationMessage#Description
   */
  readonly description: string;

  /**
   * @schema CreateHsmConfigurationMessage#HsmIpAddress
   */
  readonly hsmIpAddress: string;

  /**
   * @schema CreateHsmConfigurationMessage#HsmPartitionName
   */
  readonly hsmPartitionName: string;

  /**
   * @schema CreateHsmConfigurationMessage#HsmPartitionPassword
   */
  readonly hsmPartitionPassword: string;

  /**
   * @schema CreateHsmConfigurationMessage#HsmServerPublicCertificate
   */
  readonly hsmServerPublicCertificate: string;

  /**
   * @schema CreateHsmConfigurationMessage#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateHsmConfigurationResult
 */
export interface CreateHsmConfigurationResult {
  /**
   * @schema CreateHsmConfigurationResult#HsmConfiguration
   */
  readonly hsmConfiguration?: HsmConfiguration;

}

/**
 * @schema CreateScheduledActionMessage
 */
export interface CreateScheduledActionMessage {
  /**
   * @schema CreateScheduledActionMessage#ScheduledActionName
   */
  readonly scheduledActionName: string;

  /**
   * @schema CreateScheduledActionMessage#TargetAction
   */
  readonly targetAction: ScheduledActionType;

  /**
   * @schema CreateScheduledActionMessage#Schedule
   */
  readonly schedule: string;

  /**
   * @schema CreateScheduledActionMessage#IamRole
   */
  readonly iamRole: string;

  /**
   * @schema CreateScheduledActionMessage#ScheduledActionDescription
   */
  readonly scheduledActionDescription?: string;

  /**
   * @schema CreateScheduledActionMessage#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema CreateScheduledActionMessage#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema CreateScheduledActionMessage#Enable
   */
  readonly enable?: boolean;

}

/**
 * @schema ScheduledAction
 */
export interface ScheduledAction {
  /**
   * @schema ScheduledAction#ScheduledActionName
   */
  readonly scheduledActionName?: string;

  /**
   * @schema ScheduledAction#TargetAction
   */
  readonly targetAction?: ScheduledActionType;

  /**
   * @schema ScheduledAction#Schedule
   */
  readonly schedule?: string;

  /**
   * @schema ScheduledAction#IamRole
   */
  readonly iamRole?: string;

  /**
   * @schema ScheduledAction#ScheduledActionDescription
   */
  readonly scheduledActionDescription?: string;

  /**
   * @schema ScheduledAction#State
   */
  readonly state?: string;

  /**
   * @schema ScheduledAction#NextInvocations
   */
  readonly nextInvocations?: string[];

  /**
   * @schema ScheduledAction#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema ScheduledAction#EndTime
   */
  readonly endTime?: string;

}

/**
 * @schema CreateSnapshotCopyGrantMessage
 */
export interface CreateSnapshotCopyGrantMessage {
  /**
   * @schema CreateSnapshotCopyGrantMessage#SnapshotCopyGrantName
   */
  readonly snapshotCopyGrantName: string;

  /**
   * @schema CreateSnapshotCopyGrantMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema CreateSnapshotCopyGrantMessage#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateSnapshotCopyGrantResult
 */
export interface CreateSnapshotCopyGrantResult {
  /**
   * @schema CreateSnapshotCopyGrantResult#SnapshotCopyGrant
   */
  readonly snapshotCopyGrant?: SnapshotCopyGrant;

}

/**
 * @schema CreateSnapshotScheduleMessage
 */
export interface CreateSnapshotScheduleMessage {
  /**
   * @schema CreateSnapshotScheduleMessage#ScheduleDefinitions
   */
  readonly scheduleDefinitions?: string[];

  /**
   * @schema CreateSnapshotScheduleMessage#ScheduleIdentifier
   */
  readonly scheduleIdentifier?: string;

  /**
   * @schema CreateSnapshotScheduleMessage#ScheduleDescription
   */
  readonly scheduleDescription?: string;

  /**
   * @schema CreateSnapshotScheduleMessage#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateSnapshotScheduleMessage#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema CreateSnapshotScheduleMessage#NextInvocations
   */
  readonly nextInvocations?: number;

}

/**
 * @schema SnapshotSchedule
 */
export interface SnapshotSchedule {
  /**
   * @schema SnapshotSchedule#ScheduleDefinitions
   */
  readonly scheduleDefinitions?: string[];

  /**
   * @schema SnapshotSchedule#ScheduleIdentifier
   */
  readonly scheduleIdentifier?: string;

  /**
   * @schema SnapshotSchedule#ScheduleDescription
   */
  readonly scheduleDescription?: string;

  /**
   * @schema SnapshotSchedule#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema SnapshotSchedule#NextInvocations
   */
  readonly nextInvocations?: string[];

  /**
   * @schema SnapshotSchedule#AssociatedClusterCount
   */
  readonly associatedClusterCount?: number;

  /**
   * @schema SnapshotSchedule#AssociatedClusters
   */
  readonly associatedClusters?: ClusterAssociatedToSchedule[];

}

/**
 * @schema CreateTagsMessage
 */
export interface CreateTagsMessage {
  /**
   * @schema CreateTagsMessage#ResourceName
   */
  readonly resourceName: string;

  /**
   * @schema CreateTagsMessage#Tags
   */
  readonly tags: Tag[];

}

/**
 * @schema CreateUsageLimitMessage
 */
export interface CreateUsageLimitMessage {
  /**
   * @schema CreateUsageLimitMessage#ClusterIdentifier
   */
  readonly clusterIdentifier: string;

  /**
   * @schema CreateUsageLimitMessage#FeatureType
   */
  readonly featureType: string;

  /**
   * @schema CreateUsageLimitMessage#LimitType
   */
  readonly limitType: string;

  /**
   * @schema CreateUsageLimitMessage#Amount
   */
  readonly amount: number;

  /**
   * @schema CreateUsageLimitMessage#Period
   */
  readonly period?: string;

  /**
   * @schema CreateUsageLimitMessage#BreachAction
   */
  readonly breachAction?: string;

  /**
   * @schema CreateUsageLimitMessage#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema UsageLimit
 */
export interface UsageLimit {
  /**
   * @schema UsageLimit#UsageLimitId
   */
  readonly usageLimitId?: string;

  /**
   * @schema UsageLimit#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema UsageLimit#FeatureType
   */
  readonly featureType?: string;

  /**
   * @schema UsageLimit#LimitType
   */
  readonly limitType?: string;

  /**
   * @schema UsageLimit#Amount
   */
  readonly amount?: number;

  /**
   * @schema UsageLimit#Period
   */
  readonly period?: string;

  /**
   * @schema UsageLimit#BreachAction
   */
  readonly breachAction?: string;

  /**
   * @schema UsageLimit#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema DeleteClusterMessage
 */
export interface DeleteClusterMessage {
  /**
   * @schema DeleteClusterMessage#ClusterIdentifier
   */
  readonly clusterIdentifier: string;

  /**
   * @schema DeleteClusterMessage#SkipFinalClusterSnapshot
   */
  readonly skipFinalClusterSnapshot?: boolean;

  /**
   * @schema DeleteClusterMessage#FinalClusterSnapshotIdentifier
   */
  readonly finalClusterSnapshotIdentifier?: string;

  /**
   * @schema DeleteClusterMessage#FinalClusterSnapshotRetentionPeriod
   */
  readonly finalClusterSnapshotRetentionPeriod?: number;

}

/**
 * @schema DeleteClusterResult
 */
export interface DeleteClusterResult {
  /**
   * @schema DeleteClusterResult#Cluster
   */
  readonly cluster?: Cluster;

}

/**
 * @schema DeleteClusterParameterGroupMessage
 */
export interface DeleteClusterParameterGroupMessage {
  /**
   * @schema DeleteClusterParameterGroupMessage#ParameterGroupName
   */
  readonly parameterGroupName: string;

}

/**
 * @schema DeleteClusterSecurityGroupMessage
 */
export interface DeleteClusterSecurityGroupMessage {
  /**
   * @schema DeleteClusterSecurityGroupMessage#ClusterSecurityGroupName
   */
  readonly clusterSecurityGroupName: string;

}

/**
 * @schema DeleteClusterSnapshotMessage
 */
export interface DeleteClusterSnapshotMessage {
  /**
   * @schema DeleteClusterSnapshotMessage#SnapshotIdentifier
   */
  readonly snapshotIdentifier: string;

  /**
   * @schema DeleteClusterSnapshotMessage#SnapshotClusterIdentifier
   */
  readonly snapshotClusterIdentifier?: string;

}

/**
 * @schema DeleteClusterSnapshotResult
 */
export interface DeleteClusterSnapshotResult {
  /**
   * @schema DeleteClusterSnapshotResult#Snapshot
   */
  readonly snapshot?: Snapshot;

}

/**
 * @schema DeleteClusterSubnetGroupMessage
 */
export interface DeleteClusterSubnetGroupMessage {
  /**
   * @schema DeleteClusterSubnetGroupMessage#ClusterSubnetGroupName
   */
  readonly clusterSubnetGroupName: string;

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
 * @schema DeleteHsmClientCertificateMessage
 */
export interface DeleteHsmClientCertificateMessage {
  /**
   * @schema DeleteHsmClientCertificateMessage#HsmClientCertificateIdentifier
   */
  readonly hsmClientCertificateIdentifier: string;

}

/**
 * @schema DeleteHsmConfigurationMessage
 */
export interface DeleteHsmConfigurationMessage {
  /**
   * @schema DeleteHsmConfigurationMessage#HsmConfigurationIdentifier
   */
  readonly hsmConfigurationIdentifier: string;

}

/**
 * @schema DeleteScheduledActionMessage
 */
export interface DeleteScheduledActionMessage {
  /**
   * @schema DeleteScheduledActionMessage#ScheduledActionName
   */
  readonly scheduledActionName: string;

}

/**
 * @schema DeleteSnapshotCopyGrantMessage
 */
export interface DeleteSnapshotCopyGrantMessage {
  /**
   * @schema DeleteSnapshotCopyGrantMessage#SnapshotCopyGrantName
   */
  readonly snapshotCopyGrantName: string;

}

/**
 * @schema DeleteSnapshotScheduleMessage
 */
export interface DeleteSnapshotScheduleMessage {
  /**
   * @schema DeleteSnapshotScheduleMessage#ScheduleIdentifier
   */
  readonly scheduleIdentifier: string;

}

/**
 * @schema DeleteTagsMessage
 */
export interface DeleteTagsMessage {
  /**
   * @schema DeleteTagsMessage#ResourceName
   */
  readonly resourceName: string;

  /**
   * @schema DeleteTagsMessage#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema DeleteUsageLimitMessage
 */
export interface DeleteUsageLimitMessage {
  /**
   * @schema DeleteUsageLimitMessage#UsageLimitId
   */
  readonly usageLimitId: string;

}

/**
 * @schema DescribeAccountAttributesMessage
 */
export interface DescribeAccountAttributesMessage {
  /**
   * @schema DescribeAccountAttributesMessage#AttributeNames
   */
  readonly attributeNames?: string[];

}

/**
 * @schema AccountAttributeList
 */
export interface AccountAttributeList {
  /**
   * @schema AccountAttributeList#AccountAttributes
   */
  readonly accountAttributes?: AccountAttribute[];

}

/**
 * @schema DescribeClusterDbRevisionsMessage
 */
export interface DescribeClusterDbRevisionsMessage {
  /**
   * @schema DescribeClusterDbRevisionsMessage#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema DescribeClusterDbRevisionsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeClusterDbRevisionsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema ClusterDbRevisionsMessage
 */
export interface ClusterDbRevisionsMessage {
  /**
   * @schema ClusterDbRevisionsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema ClusterDbRevisionsMessage#ClusterDbRevisions
   */
  readonly clusterDbRevisions?: ClusterDbRevision[];

}

/**
 * @schema DescribeClusterParameterGroupsMessage
 */
export interface DescribeClusterParameterGroupsMessage {
  /**
   * @schema DescribeClusterParameterGroupsMessage#ParameterGroupName
   */
  readonly parameterGroupName?: string;

  /**
   * @schema DescribeClusterParameterGroupsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeClusterParameterGroupsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DescribeClusterParameterGroupsMessage#TagKeys
   */
  readonly tagKeys?: string[];

  /**
   * @schema DescribeClusterParameterGroupsMessage#TagValues
   */
  readonly tagValues?: string[];

}

/**
 * @schema ClusterParameterGroupsMessage
 */
export interface ClusterParameterGroupsMessage {
  /**
   * @schema ClusterParameterGroupsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema ClusterParameterGroupsMessage#ParameterGroups
   */
  readonly parameterGroups?: ClusterParameterGroup[];

}

/**
 * @schema DescribeClusterParametersMessage
 */
export interface DescribeClusterParametersMessage {
  /**
   * @schema DescribeClusterParametersMessage#ParameterGroupName
   */
  readonly parameterGroupName: string;

  /**
   * @schema DescribeClusterParametersMessage#Source
   */
  readonly source?: string;

  /**
   * @schema DescribeClusterParametersMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeClusterParametersMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema ClusterParameterGroupDetails
 */
export interface ClusterParameterGroupDetails {
  /**
   * @schema ClusterParameterGroupDetails#Parameters
   */
  readonly parameters?: Parameter[];

  /**
   * @schema ClusterParameterGroupDetails#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DescribeClusterSecurityGroupsMessage
 */
export interface DescribeClusterSecurityGroupsMessage {
  /**
   * @schema DescribeClusterSecurityGroupsMessage#ClusterSecurityGroupName
   */
  readonly clusterSecurityGroupName?: string;

  /**
   * @schema DescribeClusterSecurityGroupsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeClusterSecurityGroupsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DescribeClusterSecurityGroupsMessage#TagKeys
   */
  readonly tagKeys?: string[];

  /**
   * @schema DescribeClusterSecurityGroupsMessage#TagValues
   */
  readonly tagValues?: string[];

}

/**
 * @schema ClusterSecurityGroupMessage
 */
export interface ClusterSecurityGroupMessage {
  /**
   * @schema ClusterSecurityGroupMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema ClusterSecurityGroupMessage#ClusterSecurityGroups
   */
  readonly clusterSecurityGroups?: ClusterSecurityGroup[];

}

/**
 * @schema DescribeClusterSnapshotsMessage
 */
export interface DescribeClusterSnapshotsMessage {
  /**
   * @schema DescribeClusterSnapshotsMessage#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema DescribeClusterSnapshotsMessage#SnapshotIdentifier
   */
  readonly snapshotIdentifier?: string;

  /**
   * @schema DescribeClusterSnapshotsMessage#SnapshotType
   */
  readonly snapshotType?: string;

  /**
   * @schema DescribeClusterSnapshotsMessage#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema DescribeClusterSnapshotsMessage#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema DescribeClusterSnapshotsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeClusterSnapshotsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DescribeClusterSnapshotsMessage#OwnerAccount
   */
  readonly ownerAccount?: string;

  /**
   * @schema DescribeClusterSnapshotsMessage#TagKeys
   */
  readonly tagKeys?: string[];

  /**
   * @schema DescribeClusterSnapshotsMessage#TagValues
   */
  readonly tagValues?: string[];

  /**
   * @schema DescribeClusterSnapshotsMessage#ClusterExists
   */
  readonly clusterExists?: boolean;

  /**
   * @schema DescribeClusterSnapshotsMessage#SortingEntities
   */
  readonly sortingEntities?: SnapshotSortingEntity[];

}

/**
 * @schema SnapshotMessage
 */
export interface SnapshotMessage {
  /**
   * @schema SnapshotMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema SnapshotMessage#Snapshots
   */
  readonly snapshots?: Snapshot[];

}

/**
 * @schema DescribeClusterSubnetGroupsMessage
 */
export interface DescribeClusterSubnetGroupsMessage {
  /**
   * @schema DescribeClusterSubnetGroupsMessage#ClusterSubnetGroupName
   */
  readonly clusterSubnetGroupName?: string;

  /**
   * @schema DescribeClusterSubnetGroupsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeClusterSubnetGroupsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DescribeClusterSubnetGroupsMessage#TagKeys
   */
  readonly tagKeys?: string[];

  /**
   * @schema DescribeClusterSubnetGroupsMessage#TagValues
   */
  readonly tagValues?: string[];

}

/**
 * @schema ClusterSubnetGroupMessage
 */
export interface ClusterSubnetGroupMessage {
  /**
   * @schema ClusterSubnetGroupMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema ClusterSubnetGroupMessage#ClusterSubnetGroups
   */
  readonly clusterSubnetGroups?: ClusterSubnetGroup[];

}

/**
 * @schema DescribeClusterTracksMessage
 */
export interface DescribeClusterTracksMessage {
  /**
   * @schema DescribeClusterTracksMessage#MaintenanceTrackName
   */
  readonly maintenanceTrackName?: string;

  /**
   * @schema DescribeClusterTracksMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeClusterTracksMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema TrackListMessage
 */
export interface TrackListMessage {
  /**
   * @schema TrackListMessage#MaintenanceTracks
   */
  readonly maintenanceTracks?: MaintenanceTrack[];

  /**
   * @schema TrackListMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DescribeClusterVersionsMessage
 */
export interface DescribeClusterVersionsMessage {
  /**
   * @schema DescribeClusterVersionsMessage#ClusterVersion
   */
  readonly clusterVersion?: string;

  /**
   * @schema DescribeClusterVersionsMessage#ClusterParameterGroupFamily
   */
  readonly clusterParameterGroupFamily?: string;

  /**
   * @schema DescribeClusterVersionsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeClusterVersionsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema ClusterVersionsMessage
 */
export interface ClusterVersionsMessage {
  /**
   * @schema ClusterVersionsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema ClusterVersionsMessage#ClusterVersions
   */
  readonly clusterVersions?: ClusterVersion[];

}

/**
 * @schema DescribeClustersMessage
 */
export interface DescribeClustersMessage {
  /**
   * @schema DescribeClustersMessage#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema DescribeClustersMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeClustersMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DescribeClustersMessage#TagKeys
   */
  readonly tagKeys?: string[];

  /**
   * @schema DescribeClustersMessage#TagValues
   */
  readonly tagValues?: string[];

}

/**
 * @schema ClustersMessage
 */
export interface ClustersMessage {
  /**
   * @schema ClustersMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema ClustersMessage#Clusters
   */
  readonly clusters?: Cluster[];

}

/**
 * @schema DescribeDefaultClusterParametersMessage
 */
export interface DescribeDefaultClusterParametersMessage {
  /**
   * @schema DescribeDefaultClusterParametersMessage#ParameterGroupFamily
   */
  readonly parameterGroupFamily: string;

  /**
   * @schema DescribeDefaultClusterParametersMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeDefaultClusterParametersMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DescribeDefaultClusterParametersResult
 */
export interface DescribeDefaultClusterParametersResult {
  /**
   * @schema DescribeDefaultClusterParametersResult#DefaultClusterParameters
   */
  readonly defaultClusterParameters?: DefaultClusterParameters;

}

/**
 * @schema DescribeEventCategoriesMessage
 */
export interface DescribeEventCategoriesMessage {
  /**
   * @schema DescribeEventCategoriesMessage#SourceType
   */
  readonly sourceType?: string;

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
   * @schema DescribeEventSubscriptionsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeEventSubscriptionsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DescribeEventSubscriptionsMessage#TagKeys
   */
  readonly tagKeys?: string[];

  /**
   * @schema DescribeEventSubscriptionsMessage#TagValues
   */
  readonly tagValues?: string[];

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
 * @schema DescribeHsmClientCertificatesMessage
 */
export interface DescribeHsmClientCertificatesMessage {
  /**
   * @schema DescribeHsmClientCertificatesMessage#HsmClientCertificateIdentifier
   */
  readonly hsmClientCertificateIdentifier?: string;

  /**
   * @schema DescribeHsmClientCertificatesMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeHsmClientCertificatesMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DescribeHsmClientCertificatesMessage#TagKeys
   */
  readonly tagKeys?: string[];

  /**
   * @schema DescribeHsmClientCertificatesMessage#TagValues
   */
  readonly tagValues?: string[];

}

/**
 * @schema HsmClientCertificateMessage
 */
export interface HsmClientCertificateMessage {
  /**
   * @schema HsmClientCertificateMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema HsmClientCertificateMessage#HsmClientCertificates
   */
  readonly hsmClientCertificates?: HsmClientCertificate[];

}

/**
 * @schema DescribeHsmConfigurationsMessage
 */
export interface DescribeHsmConfigurationsMessage {
  /**
   * @schema DescribeHsmConfigurationsMessage#HsmConfigurationIdentifier
   */
  readonly hsmConfigurationIdentifier?: string;

  /**
   * @schema DescribeHsmConfigurationsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeHsmConfigurationsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DescribeHsmConfigurationsMessage#TagKeys
   */
  readonly tagKeys?: string[];

  /**
   * @schema DescribeHsmConfigurationsMessage#TagValues
   */
  readonly tagValues?: string[];

}

/**
 * @schema HsmConfigurationMessage
 */
export interface HsmConfigurationMessage {
  /**
   * @schema HsmConfigurationMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema HsmConfigurationMessage#HsmConfigurations
   */
  readonly hsmConfigurations?: HsmConfiguration[];

}

/**
 * @schema DescribeLoggingStatusMessage
 */
export interface DescribeLoggingStatusMessage {
  /**
   * @schema DescribeLoggingStatusMessage#ClusterIdentifier
   */
  readonly clusterIdentifier: string;

}

/**
 * @schema LoggingStatus
 */
export interface LoggingStatus {
  /**
   * @schema LoggingStatus#LoggingEnabled
   */
  readonly loggingEnabled?: boolean;

  /**
   * @schema LoggingStatus#BucketName
   */
  readonly bucketName?: string;

  /**
   * @schema LoggingStatus#S3KeyPrefix
   */
  readonly s3KeyPrefix?: string;

  /**
   * @schema LoggingStatus#LastSuccessfulDeliveryTime
   */
  readonly lastSuccessfulDeliveryTime?: string;

  /**
   * @schema LoggingStatus#LastFailureTime
   */
  readonly lastFailureTime?: string;

  /**
   * @schema LoggingStatus#LastFailureMessage
   */
  readonly lastFailureMessage?: string;

}

/**
 * @schema DescribeNodeConfigurationOptionsMessage
 */
export interface DescribeNodeConfigurationOptionsMessage {
  /**
   * @schema DescribeNodeConfigurationOptionsMessage#ActionType
   */
  readonly actionType: string;

  /**
   * @schema DescribeNodeConfigurationOptionsMessage#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema DescribeNodeConfigurationOptionsMessage#SnapshotIdentifier
   */
  readonly snapshotIdentifier?: string;

  /**
   * @schema DescribeNodeConfigurationOptionsMessage#OwnerAccount
   */
  readonly ownerAccount?: string;

  /**
   * @schema DescribeNodeConfigurationOptionsMessage#Filters
   */
  readonly filters?: NodeConfigurationOptionsFilter[];

  /**
   * @schema DescribeNodeConfigurationOptionsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DescribeNodeConfigurationOptionsMessage#MaxRecords
   */
  readonly maxRecords?: number;

}

/**
 * @schema NodeConfigurationOptionsMessage
 */
export interface NodeConfigurationOptionsMessage {
  /**
   * @schema NodeConfigurationOptionsMessage#NodeConfigurationOptionList
   */
  readonly nodeConfigurationOptionList?: NodeConfigurationOption[];

  /**
   * @schema NodeConfigurationOptionsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DescribeOrderableClusterOptionsMessage
 */
export interface DescribeOrderableClusterOptionsMessage {
  /**
   * @schema DescribeOrderableClusterOptionsMessage#ClusterVersion
   */
  readonly clusterVersion?: string;

  /**
   * @schema DescribeOrderableClusterOptionsMessage#NodeType
   */
  readonly nodeType?: string;

  /**
   * @schema DescribeOrderableClusterOptionsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeOrderableClusterOptionsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema OrderableClusterOptionsMessage
 */
export interface OrderableClusterOptionsMessage {
  /**
   * @schema OrderableClusterOptionsMessage#OrderableClusterOptions
   */
  readonly orderableClusterOptions?: OrderableClusterOption[];

  /**
   * @schema OrderableClusterOptionsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DescribeReservedNodeOfferingsMessage
 */
export interface DescribeReservedNodeOfferingsMessage {
  /**
   * @schema DescribeReservedNodeOfferingsMessage#ReservedNodeOfferingId
   */
  readonly reservedNodeOfferingId?: string;

  /**
   * @schema DescribeReservedNodeOfferingsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeReservedNodeOfferingsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema ReservedNodeOfferingsMessage
 */
export interface ReservedNodeOfferingsMessage {
  /**
   * @schema ReservedNodeOfferingsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema ReservedNodeOfferingsMessage#ReservedNodeOfferings
   */
  readonly reservedNodeOfferings?: ReservedNodeOffering[];

}

/**
 * @schema DescribeReservedNodesMessage
 */
export interface DescribeReservedNodesMessage {
  /**
   * @schema DescribeReservedNodesMessage#ReservedNodeId
   */
  readonly reservedNodeId?: string;

  /**
   * @schema DescribeReservedNodesMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeReservedNodesMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema ReservedNodesMessage
 */
export interface ReservedNodesMessage {
  /**
   * @schema ReservedNodesMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema ReservedNodesMessage#ReservedNodes
   */
  readonly reservedNodes?: ReservedNode[];

}

/**
 * @schema DescribeResizeMessage
 */
export interface DescribeResizeMessage {
  /**
   * @schema DescribeResizeMessage#ClusterIdentifier
   */
  readonly clusterIdentifier: string;

}

/**
 * @schema DescribeScheduledActionsMessage
 */
export interface DescribeScheduledActionsMessage {
  /**
   * @schema DescribeScheduledActionsMessage#ScheduledActionName
   */
  readonly scheduledActionName?: string;

  /**
   * @schema DescribeScheduledActionsMessage#TargetActionType
   */
  readonly targetActionType?: string;

  /**
   * @schema DescribeScheduledActionsMessage#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema DescribeScheduledActionsMessage#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema DescribeScheduledActionsMessage#Active
   */
  readonly active?: boolean;

  /**
   * @schema DescribeScheduledActionsMessage#Filters
   */
  readonly filters?: ScheduledActionFilter[];

  /**
   * @schema DescribeScheduledActionsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DescribeScheduledActionsMessage#MaxRecords
   */
  readonly maxRecords?: number;

}

/**
 * @schema ScheduledActionsMessage
 */
export interface ScheduledActionsMessage {
  /**
   * @schema ScheduledActionsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema ScheduledActionsMessage#ScheduledActions
   */
  readonly scheduledActions?: ScheduledAction[];

}

/**
 * @schema DescribeSnapshotCopyGrantsMessage
 */
export interface DescribeSnapshotCopyGrantsMessage {
  /**
   * @schema DescribeSnapshotCopyGrantsMessage#SnapshotCopyGrantName
   */
  readonly snapshotCopyGrantName?: string;

  /**
   * @schema DescribeSnapshotCopyGrantsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeSnapshotCopyGrantsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DescribeSnapshotCopyGrantsMessage#TagKeys
   */
  readonly tagKeys?: string[];

  /**
   * @schema DescribeSnapshotCopyGrantsMessage#TagValues
   */
  readonly tagValues?: string[];

}

/**
 * @schema SnapshotCopyGrantMessage
 */
export interface SnapshotCopyGrantMessage {
  /**
   * @schema SnapshotCopyGrantMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema SnapshotCopyGrantMessage#SnapshotCopyGrants
   */
  readonly snapshotCopyGrants?: SnapshotCopyGrant[];

}

/**
 * @schema DescribeSnapshotSchedulesMessage
 */
export interface DescribeSnapshotSchedulesMessage {
  /**
   * @schema DescribeSnapshotSchedulesMessage#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema DescribeSnapshotSchedulesMessage#ScheduleIdentifier
   */
  readonly scheduleIdentifier?: string;

  /**
   * @schema DescribeSnapshotSchedulesMessage#TagKeys
   */
  readonly tagKeys?: string[];

  /**
   * @schema DescribeSnapshotSchedulesMessage#TagValues
   */
  readonly tagValues?: string[];

  /**
   * @schema DescribeSnapshotSchedulesMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DescribeSnapshotSchedulesMessage#MaxRecords
   */
  readonly maxRecords?: number;

}

/**
 * @schema DescribeSnapshotSchedulesOutputMessage
 */
export interface DescribeSnapshotSchedulesOutputMessage {
  /**
   * @schema DescribeSnapshotSchedulesOutputMessage#SnapshotSchedules
   */
  readonly snapshotSchedules?: SnapshotSchedule[];

  /**
   * @schema DescribeSnapshotSchedulesOutputMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema CustomerStorageMessage
 */
export interface CustomerStorageMessage {
  /**
   * @schema CustomerStorageMessage#TotalBackupSizeInMegaBytes
   */
  readonly totalBackupSizeInMegaBytes?: number;

  /**
   * @schema CustomerStorageMessage#TotalProvisionedStorageInMegaBytes
   */
  readonly totalProvisionedStorageInMegaBytes?: number;

}

/**
 * @schema DescribeTableRestoreStatusMessage
 */
export interface DescribeTableRestoreStatusMessage {
  /**
   * @schema DescribeTableRestoreStatusMessage#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema DescribeTableRestoreStatusMessage#TableRestoreRequestId
   */
  readonly tableRestoreRequestId?: string;

  /**
   * @schema DescribeTableRestoreStatusMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeTableRestoreStatusMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema TableRestoreStatusMessage
 */
export interface TableRestoreStatusMessage {
  /**
   * @schema TableRestoreStatusMessage#TableRestoreStatusDetails
   */
  readonly tableRestoreStatusDetails?: TableRestoreStatus[];

  /**
   * @schema TableRestoreStatusMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DescribeTagsMessage
 */
export interface DescribeTagsMessage {
  /**
   * @schema DescribeTagsMessage#ResourceName
   */
  readonly resourceName?: string;

  /**
   * @schema DescribeTagsMessage#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema DescribeTagsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeTagsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DescribeTagsMessage#TagKeys
   */
  readonly tagKeys?: string[];

  /**
   * @schema DescribeTagsMessage#TagValues
   */
  readonly tagValues?: string[];

}

/**
 * @schema TaggedResourceListMessage
 */
export interface TaggedResourceListMessage {
  /**
   * @schema TaggedResourceListMessage#TaggedResources
   */
  readonly taggedResources?: TaggedResource[];

  /**
   * @schema TaggedResourceListMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DescribeUsageLimitsMessage
 */
export interface DescribeUsageLimitsMessage {
  /**
   * @schema DescribeUsageLimitsMessage#UsageLimitId
   */
  readonly usageLimitId?: string;

  /**
   * @schema DescribeUsageLimitsMessage#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema DescribeUsageLimitsMessage#FeatureType
   */
  readonly featureType?: string;

  /**
   * @schema DescribeUsageLimitsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeUsageLimitsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DescribeUsageLimitsMessage#TagKeys
   */
  readonly tagKeys?: string[];

  /**
   * @schema DescribeUsageLimitsMessage#TagValues
   */
  readonly tagValues?: string[];

}

/**
 * @schema UsageLimitList
 */
export interface UsageLimitList {
  /**
   * @schema UsageLimitList#UsageLimits
   */
  readonly usageLimits?: UsageLimit[];

  /**
   * @schema UsageLimitList#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DisableLoggingMessage
 */
export interface DisableLoggingMessage {
  /**
   * @schema DisableLoggingMessage#ClusterIdentifier
   */
  readonly clusterIdentifier: string;

}

/**
 * @schema DisableSnapshotCopyMessage
 */
export interface DisableSnapshotCopyMessage {
  /**
   * @schema DisableSnapshotCopyMessage#ClusterIdentifier
   */
  readonly clusterIdentifier: string;

}

/**
 * @schema DisableSnapshotCopyResult
 */
export interface DisableSnapshotCopyResult {
  /**
   * @schema DisableSnapshotCopyResult#Cluster
   */
  readonly cluster?: Cluster;

}

/**
 * @schema EnableLoggingMessage
 */
export interface EnableLoggingMessage {
  /**
   * @schema EnableLoggingMessage#ClusterIdentifier
   */
  readonly clusterIdentifier: string;

  /**
   * @schema EnableLoggingMessage#BucketName
   */
  readonly bucketName: string;

  /**
   * @schema EnableLoggingMessage#S3KeyPrefix
   */
  readonly s3KeyPrefix?: string;

}

/**
 * @schema EnableSnapshotCopyMessage
 */
export interface EnableSnapshotCopyMessage {
  /**
   * @schema EnableSnapshotCopyMessage#ClusterIdentifier
   */
  readonly clusterIdentifier: string;

  /**
   * @schema EnableSnapshotCopyMessage#DestinationRegion
   */
  readonly destinationRegion: string;

  /**
   * @schema EnableSnapshotCopyMessage#RetentionPeriod
   */
  readonly retentionPeriod?: number;

  /**
   * @schema EnableSnapshotCopyMessage#SnapshotCopyGrantName
   */
  readonly snapshotCopyGrantName?: string;

  /**
   * @schema EnableSnapshotCopyMessage#ManualSnapshotRetentionPeriod
   */
  readonly manualSnapshotRetentionPeriod?: number;

}

/**
 * @schema EnableSnapshotCopyResult
 */
export interface EnableSnapshotCopyResult {
  /**
   * @schema EnableSnapshotCopyResult#Cluster
   */
  readonly cluster?: Cluster;

}

/**
 * @schema GetClusterCredentialsMessage
 */
export interface GetClusterCredentialsMessage {
  /**
   * @schema GetClusterCredentialsMessage#DbUser
   */
  readonly dbUser: string;

  /**
   * @schema GetClusterCredentialsMessage#DbName
   */
  readonly dbName?: string;

  /**
   * @schema GetClusterCredentialsMessage#ClusterIdentifier
   */
  readonly clusterIdentifier: string;

  /**
   * @schema GetClusterCredentialsMessage#DurationSeconds
   */
  readonly durationSeconds?: number;

  /**
   * @schema GetClusterCredentialsMessage#AutoCreate
   */
  readonly autoCreate?: boolean;

  /**
   * @schema GetClusterCredentialsMessage#DbGroups
   */
  readonly dbGroups?: string[];

}

/**
 * @schema ClusterCredentials
 */
export interface ClusterCredentials {
  /**
   * @schema ClusterCredentials#DbUser
   */
  readonly dbUser?: string;

  /**
   * @schema ClusterCredentials#DbPassword
   */
  readonly dbPassword?: string;

  /**
   * @schema ClusterCredentials#Expiration
   */
  readonly expiration?: string;

}

/**
 * @schema GetReservedNodeExchangeOfferingsInputMessage
 */
export interface GetReservedNodeExchangeOfferingsInputMessage {
  /**
   * @schema GetReservedNodeExchangeOfferingsInputMessage#ReservedNodeId
   */
  readonly reservedNodeId: string;

  /**
   * @schema GetReservedNodeExchangeOfferingsInputMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema GetReservedNodeExchangeOfferingsInputMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema GetReservedNodeExchangeOfferingsOutputMessage
 */
export interface GetReservedNodeExchangeOfferingsOutputMessage {
  /**
   * @schema GetReservedNodeExchangeOfferingsOutputMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema GetReservedNodeExchangeOfferingsOutputMessage#ReservedNodeOfferings
   */
  readonly reservedNodeOfferings?: ReservedNodeOffering[];

}

/**
 * @schema ModifyClusterMessage
 */
export interface ModifyClusterMessage {
  /**
   * @schema ModifyClusterMessage#ClusterIdentifier
   */
  readonly clusterIdentifier: string;

  /**
   * @schema ModifyClusterMessage#ClusterType
   */
  readonly clusterType?: string;

  /**
   * @schema ModifyClusterMessage#NodeType
   */
  readonly nodeType?: string;

  /**
   * @schema ModifyClusterMessage#NumberOfNodes
   */
  readonly numberOfNodes?: number;

  /**
   * @schema ModifyClusterMessage#ClusterSecurityGroups
   */
  readonly clusterSecurityGroups?: string[];

  /**
   * @schema ModifyClusterMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema ModifyClusterMessage#MasterUserPassword
   */
  readonly masterUserPassword?: string;

  /**
   * @schema ModifyClusterMessage#ClusterParameterGroupName
   */
  readonly clusterParameterGroupName?: string;

  /**
   * @schema ModifyClusterMessage#AutomatedSnapshotRetentionPeriod
   */
  readonly automatedSnapshotRetentionPeriod?: number;

  /**
   * @schema ModifyClusterMessage#ManualSnapshotRetentionPeriod
   */
  readonly manualSnapshotRetentionPeriod?: number;

  /**
   * @schema ModifyClusterMessage#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema ModifyClusterMessage#ClusterVersion
   */
  readonly clusterVersion?: string;

  /**
   * @schema ModifyClusterMessage#AllowVersionUpgrade
   */
  readonly allowVersionUpgrade?: boolean;

  /**
   * @schema ModifyClusterMessage#HsmClientCertificateIdentifier
   */
  readonly hsmClientCertificateIdentifier?: string;

  /**
   * @schema ModifyClusterMessage#HsmConfigurationIdentifier
   */
  readonly hsmConfigurationIdentifier?: string;

  /**
   * @schema ModifyClusterMessage#NewClusterIdentifier
   */
  readonly newClusterIdentifier?: string;

  /**
   * @schema ModifyClusterMessage#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema ModifyClusterMessage#ElasticIp
   */
  readonly elasticIp?: string;

  /**
   * @schema ModifyClusterMessage#EnhancedVpcRouting
   */
  readonly enhancedVpcRouting?: boolean;

  /**
   * @schema ModifyClusterMessage#MaintenanceTrackName
   */
  readonly maintenanceTrackName?: string;

  /**
   * @schema ModifyClusterMessage#Encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema ModifyClusterMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * @schema ModifyClusterResult
 */
export interface ModifyClusterResult {
  /**
   * @schema ModifyClusterResult#Cluster
   */
  readonly cluster?: Cluster;

}

/**
 * @schema ModifyClusterDbRevisionMessage
 */
export interface ModifyClusterDbRevisionMessage {
  /**
   * @schema ModifyClusterDbRevisionMessage#ClusterIdentifier
   */
  readonly clusterIdentifier: string;

  /**
   * @schema ModifyClusterDbRevisionMessage#RevisionTarget
   */
  readonly revisionTarget: string;

}

/**
 * @schema ModifyClusterDbRevisionResult
 */
export interface ModifyClusterDbRevisionResult {
  /**
   * @schema ModifyClusterDbRevisionResult#Cluster
   */
  readonly cluster?: Cluster;

}

/**
 * @schema ModifyClusterIamRolesMessage
 */
export interface ModifyClusterIamRolesMessage {
  /**
   * @schema ModifyClusterIamRolesMessage#ClusterIdentifier
   */
  readonly clusterIdentifier: string;

  /**
   * @schema ModifyClusterIamRolesMessage#AddIamRoles
   */
  readonly addIamRoles?: string[];

  /**
   * @schema ModifyClusterIamRolesMessage#RemoveIamRoles
   */
  readonly removeIamRoles?: string[];

}

/**
 * @schema ModifyClusterIamRolesResult
 */
export interface ModifyClusterIamRolesResult {
  /**
   * @schema ModifyClusterIamRolesResult#Cluster
   */
  readonly cluster?: Cluster;

}

/**
 * @schema ModifyClusterMaintenanceMessage
 */
export interface ModifyClusterMaintenanceMessage {
  /**
   * @schema ModifyClusterMaintenanceMessage#ClusterIdentifier
   */
  readonly clusterIdentifier: string;

  /**
   * @schema ModifyClusterMaintenanceMessage#DeferMaintenance
   */
  readonly deferMaintenance?: boolean;

  /**
   * @schema ModifyClusterMaintenanceMessage#DeferMaintenanceIdentifier
   */
  readonly deferMaintenanceIdentifier?: string;

  /**
   * @schema ModifyClusterMaintenanceMessage#DeferMaintenanceStartTime
   */
  readonly deferMaintenanceStartTime?: string;

  /**
   * @schema ModifyClusterMaintenanceMessage#DeferMaintenanceEndTime
   */
  readonly deferMaintenanceEndTime?: string;

  /**
   * @schema ModifyClusterMaintenanceMessage#DeferMaintenanceDuration
   */
  readonly deferMaintenanceDuration?: number;

}

/**
 * @schema ModifyClusterMaintenanceResult
 */
export interface ModifyClusterMaintenanceResult {
  /**
   * @schema ModifyClusterMaintenanceResult#Cluster
   */
  readonly cluster?: Cluster;

}

/**
 * @schema ModifyClusterParameterGroupMessage
 */
export interface ModifyClusterParameterGroupMessage {
  /**
   * @schema ModifyClusterParameterGroupMessage#ParameterGroupName
   */
  readonly parameterGroupName: string;

  /**
   * @schema ModifyClusterParameterGroupMessage#Parameters
   */
  readonly parameters: Parameter[];

}

/**
 * @schema ClusterParameterGroupNameMessage
 */
export interface ClusterParameterGroupNameMessage {
  /**
   * @schema ClusterParameterGroupNameMessage#ParameterGroupName
   */
  readonly parameterGroupName?: string;

  /**
   * @schema ClusterParameterGroupNameMessage#ParameterGroupStatus
   */
  readonly parameterGroupStatus?: string;

}

/**
 * @schema ModifyClusterSnapshotMessage
 */
export interface ModifyClusterSnapshotMessage {
  /**
   * @schema ModifyClusterSnapshotMessage#SnapshotIdentifier
   */
  readonly snapshotIdentifier: string;

  /**
   * @schema ModifyClusterSnapshotMessage#ManualSnapshotRetentionPeriod
   */
  readonly manualSnapshotRetentionPeriod?: number;

  /**
   * @schema ModifyClusterSnapshotMessage#Force
   */
  readonly force?: boolean;

}

/**
 * @schema ModifyClusterSnapshotResult
 */
export interface ModifyClusterSnapshotResult {
  /**
   * @schema ModifyClusterSnapshotResult#Snapshot
   */
  readonly snapshot?: Snapshot;

}

/**
 * @schema ModifyClusterSnapshotScheduleMessage
 */
export interface ModifyClusterSnapshotScheduleMessage {
  /**
   * @schema ModifyClusterSnapshotScheduleMessage#ClusterIdentifier
   */
  readonly clusterIdentifier: string;

  /**
   * @schema ModifyClusterSnapshotScheduleMessage#ScheduleIdentifier
   */
  readonly scheduleIdentifier?: string;

  /**
   * @schema ModifyClusterSnapshotScheduleMessage#DisassociateSchedule
   */
  readonly disassociateSchedule?: boolean;

}

/**
 * @schema ModifyClusterSubnetGroupMessage
 */
export interface ModifyClusterSubnetGroupMessage {
  /**
   * @schema ModifyClusterSubnetGroupMessage#ClusterSubnetGroupName
   */
  readonly clusterSubnetGroupName: string;

  /**
   * @schema ModifyClusterSubnetGroupMessage#Description
   */
  readonly description?: string;

  /**
   * @schema ModifyClusterSubnetGroupMessage#SubnetIds
   */
  readonly subnetIds: string[];

}

/**
 * @schema ModifyClusterSubnetGroupResult
 */
export interface ModifyClusterSubnetGroupResult {
  /**
   * @schema ModifyClusterSubnetGroupResult#ClusterSubnetGroup
   */
  readonly clusterSubnetGroup?: ClusterSubnetGroup;

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
   * @schema ModifyEventSubscriptionMessage#SourceIds
   */
  readonly sourceIds?: string[];

  /**
   * @schema ModifyEventSubscriptionMessage#EventCategories
   */
  readonly eventCategories?: string[];

  /**
   * @schema ModifyEventSubscriptionMessage#Severity
   */
  readonly severity?: string;

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
 * @schema ModifyScheduledActionMessage
 */
export interface ModifyScheduledActionMessage {
  /**
   * @schema ModifyScheduledActionMessage#ScheduledActionName
   */
  readonly scheduledActionName: string;

  /**
   * @schema ModifyScheduledActionMessage#TargetAction
   */
  readonly targetAction?: ScheduledActionType;

  /**
   * @schema ModifyScheduledActionMessage#Schedule
   */
  readonly schedule?: string;

  /**
   * @schema ModifyScheduledActionMessage#IamRole
   */
  readonly iamRole?: string;

  /**
   * @schema ModifyScheduledActionMessage#ScheduledActionDescription
   */
  readonly scheduledActionDescription?: string;

  /**
   * @schema ModifyScheduledActionMessage#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema ModifyScheduledActionMessage#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema ModifyScheduledActionMessage#Enable
   */
  readonly enable?: boolean;

}

/**
 * @schema ModifySnapshotCopyRetentionPeriodMessage
 */
export interface ModifySnapshotCopyRetentionPeriodMessage {
  /**
   * @schema ModifySnapshotCopyRetentionPeriodMessage#ClusterIdentifier
   */
  readonly clusterIdentifier: string;

  /**
   * @schema ModifySnapshotCopyRetentionPeriodMessage#RetentionPeriod
   */
  readonly retentionPeriod: number;

  /**
   * @schema ModifySnapshotCopyRetentionPeriodMessage#Manual
   */
  readonly manual?: boolean;

}

/**
 * @schema ModifySnapshotCopyRetentionPeriodResult
 */
export interface ModifySnapshotCopyRetentionPeriodResult {
  /**
   * @schema ModifySnapshotCopyRetentionPeriodResult#Cluster
   */
  readonly cluster?: Cluster;

}

/**
 * @schema ModifySnapshotScheduleMessage
 */
export interface ModifySnapshotScheduleMessage {
  /**
   * @schema ModifySnapshotScheduleMessage#ScheduleIdentifier
   */
  readonly scheduleIdentifier: string;

  /**
   * @schema ModifySnapshotScheduleMessage#ScheduleDefinitions
   */
  readonly scheduleDefinitions: string[];

}

/**
 * @schema ModifyUsageLimitMessage
 */
export interface ModifyUsageLimitMessage {
  /**
   * @schema ModifyUsageLimitMessage#UsageLimitId
   */
  readonly usageLimitId: string;

  /**
   * @schema ModifyUsageLimitMessage#Amount
   */
  readonly amount?: number;

  /**
   * @schema ModifyUsageLimitMessage#BreachAction
   */
  readonly breachAction?: string;

}

/**
 * @schema PauseClusterMessage
 */
export interface PauseClusterMessage {
  /**
   * @schema PauseClusterMessage#ClusterIdentifier
   */
  readonly clusterIdentifier: string;

}

/**
 * @schema PauseClusterResult
 */
export interface PauseClusterResult {
  /**
   * @schema PauseClusterResult#Cluster
   */
  readonly cluster?: Cluster;

}

/**
 * @schema PurchaseReservedNodeOfferingMessage
 */
export interface PurchaseReservedNodeOfferingMessage {
  /**
   * @schema PurchaseReservedNodeOfferingMessage#ReservedNodeOfferingId
   */
  readonly reservedNodeOfferingId: string;

  /**
   * @schema PurchaseReservedNodeOfferingMessage#NodeCount
   */
  readonly nodeCount?: number;

}

/**
 * @schema PurchaseReservedNodeOfferingResult
 */
export interface PurchaseReservedNodeOfferingResult {
  /**
   * @schema PurchaseReservedNodeOfferingResult#ReservedNode
   */
  readonly reservedNode?: ReservedNode;

}

/**
 * @schema RebootClusterMessage
 */
export interface RebootClusterMessage {
  /**
   * @schema RebootClusterMessage#ClusterIdentifier
   */
  readonly clusterIdentifier: string;

}

/**
 * @schema RebootClusterResult
 */
export interface RebootClusterResult {
  /**
   * @schema RebootClusterResult#Cluster
   */
  readonly cluster?: Cluster;

}

/**
 * @schema ResetClusterParameterGroupMessage
 */
export interface ResetClusterParameterGroupMessage {
  /**
   * @schema ResetClusterParameterGroupMessage#ParameterGroupName
   */
  readonly parameterGroupName: string;

  /**
   * @schema ResetClusterParameterGroupMessage#ResetAllParameters
   */
  readonly resetAllParameters?: boolean;

  /**
   * @schema ResetClusterParameterGroupMessage#Parameters
   */
  readonly parameters?: Parameter[];

}

/**
 * @schema ResizeClusterMessage
 */
export interface ResizeClusterMessage {
  /**
   * @schema ResizeClusterMessage#ClusterIdentifier
   */
  readonly clusterIdentifier: string;

  /**
   * @schema ResizeClusterMessage#ClusterType
   */
  readonly clusterType?: string;

  /**
   * @schema ResizeClusterMessage#NodeType
   */
  readonly nodeType?: string;

  /**
   * @schema ResizeClusterMessage#NumberOfNodes
   */
  readonly numberOfNodes?: number;

  /**
   * @schema ResizeClusterMessage#Classic
   */
  readonly classic?: boolean;

}

/**
 * @schema ResizeClusterResult
 */
export interface ResizeClusterResult {
  /**
   * @schema ResizeClusterResult#Cluster
   */
  readonly cluster?: Cluster;

}

/**
 * @schema RestoreFromClusterSnapshotMessage
 */
export interface RestoreFromClusterSnapshotMessage {
  /**
   * @schema RestoreFromClusterSnapshotMessage#ClusterIdentifier
   */
  readonly clusterIdentifier: string;

  /**
   * @schema RestoreFromClusterSnapshotMessage#SnapshotIdentifier
   */
  readonly snapshotIdentifier: string;

  /**
   * @schema RestoreFromClusterSnapshotMessage#SnapshotClusterIdentifier
   */
  readonly snapshotClusterIdentifier?: string;

  /**
   * @schema RestoreFromClusterSnapshotMessage#Port
   */
  readonly port?: number;

  /**
   * @schema RestoreFromClusterSnapshotMessage#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema RestoreFromClusterSnapshotMessage#AllowVersionUpgrade
   */
  readonly allowVersionUpgrade?: boolean;

  /**
   * @schema RestoreFromClusterSnapshotMessage#ClusterSubnetGroupName
   */
  readonly clusterSubnetGroupName?: string;

  /**
   * @schema RestoreFromClusterSnapshotMessage#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema RestoreFromClusterSnapshotMessage#OwnerAccount
   */
  readonly ownerAccount?: string;

  /**
   * @schema RestoreFromClusterSnapshotMessage#HsmClientCertificateIdentifier
   */
  readonly hsmClientCertificateIdentifier?: string;

  /**
   * @schema RestoreFromClusterSnapshotMessage#HsmConfigurationIdentifier
   */
  readonly hsmConfigurationIdentifier?: string;

  /**
   * @schema RestoreFromClusterSnapshotMessage#ElasticIp
   */
  readonly elasticIp?: string;

  /**
   * @schema RestoreFromClusterSnapshotMessage#ClusterParameterGroupName
   */
  readonly clusterParameterGroupName?: string;

  /**
   * @schema RestoreFromClusterSnapshotMessage#ClusterSecurityGroups
   */
  readonly clusterSecurityGroups?: string[];

  /**
   * @schema RestoreFromClusterSnapshotMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema RestoreFromClusterSnapshotMessage#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema RestoreFromClusterSnapshotMessage#AutomatedSnapshotRetentionPeriod
   */
  readonly automatedSnapshotRetentionPeriod?: number;

  /**
   * @schema RestoreFromClusterSnapshotMessage#ManualSnapshotRetentionPeriod
   */
  readonly manualSnapshotRetentionPeriod?: number;

  /**
   * @schema RestoreFromClusterSnapshotMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema RestoreFromClusterSnapshotMessage#NodeType
   */
  readonly nodeType?: string;

  /**
   * @schema RestoreFromClusterSnapshotMessage#EnhancedVpcRouting
   */
  readonly enhancedVpcRouting?: boolean;

  /**
   * @schema RestoreFromClusterSnapshotMessage#AdditionalInfo
   */
  readonly additionalInfo?: string;

  /**
   * @schema RestoreFromClusterSnapshotMessage#IamRoles
   */
  readonly iamRoles?: string[];

  /**
   * @schema RestoreFromClusterSnapshotMessage#MaintenanceTrackName
   */
  readonly maintenanceTrackName?: string;

  /**
   * @schema RestoreFromClusterSnapshotMessage#SnapshotScheduleIdentifier
   */
  readonly snapshotScheduleIdentifier?: string;

  /**
   * @schema RestoreFromClusterSnapshotMessage#NumberOfNodes
   */
  readonly numberOfNodes?: number;

}

/**
 * @schema RestoreFromClusterSnapshotResult
 */
export interface RestoreFromClusterSnapshotResult {
  /**
   * @schema RestoreFromClusterSnapshotResult#Cluster
   */
  readonly cluster?: Cluster;

}

/**
 * @schema RestoreTableFromClusterSnapshotMessage
 */
export interface RestoreTableFromClusterSnapshotMessage {
  /**
   * @schema RestoreTableFromClusterSnapshotMessage#ClusterIdentifier
   */
  readonly clusterIdentifier: string;

  /**
   * @schema RestoreTableFromClusterSnapshotMessage#SnapshotIdentifier
   */
  readonly snapshotIdentifier: string;

  /**
   * @schema RestoreTableFromClusterSnapshotMessage#SourceDatabaseName
   */
  readonly sourceDatabaseName: string;

  /**
   * @schema RestoreTableFromClusterSnapshotMessage#SourceSchemaName
   */
  readonly sourceSchemaName?: string;

  /**
   * @schema RestoreTableFromClusterSnapshotMessage#SourceTableName
   */
  readonly sourceTableName: string;

  /**
   * @schema RestoreTableFromClusterSnapshotMessage#TargetDatabaseName
   */
  readonly targetDatabaseName?: string;

  /**
   * @schema RestoreTableFromClusterSnapshotMessage#TargetSchemaName
   */
  readonly targetSchemaName?: string;

  /**
   * @schema RestoreTableFromClusterSnapshotMessage#NewTableName
   */
  readonly newTableName: string;

}

/**
 * @schema RestoreTableFromClusterSnapshotResult
 */
export interface RestoreTableFromClusterSnapshotResult {
  /**
   * @schema RestoreTableFromClusterSnapshotResult#TableRestoreStatus
   */
  readonly tableRestoreStatus?: TableRestoreStatus;

}

/**
 * @schema ResumeClusterMessage
 */
export interface ResumeClusterMessage {
  /**
   * @schema ResumeClusterMessage#ClusterIdentifier
   */
  readonly clusterIdentifier: string;

}

/**
 * @schema ResumeClusterResult
 */
export interface ResumeClusterResult {
  /**
   * @schema ResumeClusterResult#Cluster
   */
  readonly cluster?: Cluster;

}

/**
 * @schema RevokeClusterSecurityGroupIngressMessage
 */
export interface RevokeClusterSecurityGroupIngressMessage {
  /**
   * @schema RevokeClusterSecurityGroupIngressMessage#ClusterSecurityGroupName
   */
  readonly clusterSecurityGroupName: string;

  /**
   * @schema RevokeClusterSecurityGroupIngressMessage#CIDRIP
   */
  readonly cidrip?: string;

  /**
   * @schema RevokeClusterSecurityGroupIngressMessage#EC2SecurityGroupName
   */
  readonly ec2SecurityGroupName?: string;

  /**
   * @schema RevokeClusterSecurityGroupIngressMessage#EC2SecurityGroupOwnerId
   */
  readonly ec2SecurityGroupOwnerId?: string;

}

/**
 * @schema RevokeClusterSecurityGroupIngressResult
 */
export interface RevokeClusterSecurityGroupIngressResult {
  /**
   * @schema RevokeClusterSecurityGroupIngressResult#ClusterSecurityGroup
   */
  readonly clusterSecurityGroup?: ClusterSecurityGroup;

}

/**
 * @schema RevokeSnapshotAccessMessage
 */
export interface RevokeSnapshotAccessMessage {
  /**
   * @schema RevokeSnapshotAccessMessage#SnapshotIdentifier
   */
  readonly snapshotIdentifier: string;

  /**
   * @schema RevokeSnapshotAccessMessage#SnapshotClusterIdentifier
   */
  readonly snapshotClusterIdentifier?: string;

  /**
   * @schema RevokeSnapshotAccessMessage#AccountWithRestoreAccess
   */
  readonly accountWithRestoreAccess: string;

}

/**
 * @schema RevokeSnapshotAccessResult
 */
export interface RevokeSnapshotAccessResult {
  /**
   * @schema RevokeSnapshotAccessResult#Snapshot
   */
  readonly snapshot?: Snapshot;

}

/**
 * @schema RotateEncryptionKeyMessage
 */
export interface RotateEncryptionKeyMessage {
  /**
   * @schema RotateEncryptionKeyMessage#ClusterIdentifier
   */
  readonly clusterIdentifier: string;

}

/**
 * @schema RotateEncryptionKeyResult
 */
export interface RotateEncryptionKeyResult {
  /**
   * @schema RotateEncryptionKeyResult#Cluster
   */
  readonly cluster?: Cluster;

}

/**
 * @schema ReservedNode
 */
export interface ReservedNode {
  /**
   * @schema ReservedNode#ReservedNodeId
   */
  readonly reservedNodeId?: string;

  /**
   * @schema ReservedNode#ReservedNodeOfferingId
   */
  readonly reservedNodeOfferingId?: string;

  /**
   * @schema ReservedNode#NodeType
   */
  readonly nodeType?: string;

  /**
   * @schema ReservedNode#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema ReservedNode#Duration
   */
  readonly duration?: number;

  /**
   * @schema ReservedNode#FixedPrice
   */
  readonly fixedPrice?: number;

  /**
   * @schema ReservedNode#UsagePrice
   */
  readonly usagePrice?: number;

  /**
   * @schema ReservedNode#CurrencyCode
   */
  readonly currencyCode?: string;

  /**
   * @schema ReservedNode#NodeCount
   */
  readonly nodeCount?: number;

  /**
   * @schema ReservedNode#State
   */
  readonly state?: string;

  /**
   * @schema ReservedNode#OfferingType
   */
  readonly offeringType?: string;

  /**
   * @schema ReservedNode#RecurringCharges
   */
  readonly recurringCharges?: RecurringCharge[];

  /**
   * @schema ReservedNode#ReservedNodeOfferingType
   */
  readonly reservedNodeOfferingType?: string;

}

/**
 * @schema ClusterSecurityGroup
 */
export interface ClusterSecurityGroup {
  /**
   * @schema ClusterSecurityGroup#ClusterSecurityGroupName
   */
  readonly clusterSecurityGroupName?: string;

  /**
   * @schema ClusterSecurityGroup#Description
   */
  readonly description?: string;

  /**
   * @schema ClusterSecurityGroup#EC2SecurityGroups
   */
  readonly ec2SecurityGroups?: Ec2SecurityGroup[];

  /**
   * @schema ClusterSecurityGroup#IPRanges
   */
  readonly ipRanges?: IpRange[];

  /**
   * @schema ClusterSecurityGroup#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema Snapshot
 */
export interface Snapshot {
  /**
   * @schema Snapshot#SnapshotIdentifier
   */
  readonly snapshotIdentifier?: string;

  /**
   * @schema Snapshot#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema Snapshot#SnapshotCreateTime
   */
  readonly snapshotCreateTime?: string;

  /**
   * @schema Snapshot#Status
   */
  readonly status?: string;

  /**
   * @schema Snapshot#Port
   */
  readonly port?: number;

  /**
   * @schema Snapshot#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema Snapshot#ClusterCreateTime
   */
  readonly clusterCreateTime?: string;

  /**
   * @schema Snapshot#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema Snapshot#ClusterVersion
   */
  readonly clusterVersion?: string;

  /**
   * @schema Snapshot#SnapshotType
   */
  readonly snapshotType?: string;

  /**
   * @schema Snapshot#NodeType
   */
  readonly nodeType?: string;

  /**
   * @schema Snapshot#NumberOfNodes
   */
  readonly numberOfNodes?: number;

  /**
   * @schema Snapshot#DBName
   */
  readonly dbName?: string;

  /**
   * @schema Snapshot#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema Snapshot#Encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema Snapshot#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema Snapshot#EncryptedWithHSM
   */
  readonly encryptedWithHsm?: boolean;

  /**
   * @schema Snapshot#AccountsWithRestoreAccess
   */
  readonly accountsWithRestoreAccess?: AccountWithRestoreAccess[];

  /**
   * @schema Snapshot#OwnerAccount
   */
  readonly ownerAccount?: string;

  /**
   * @schema Snapshot#TotalBackupSizeInMegaBytes
   */
  readonly totalBackupSizeInMegaBytes?: number;

  /**
   * @schema Snapshot#ActualIncrementalBackupSizeInMegaBytes
   */
  readonly actualIncrementalBackupSizeInMegaBytes?: number;

  /**
   * @schema Snapshot#BackupProgressInMegaBytes
   */
  readonly backupProgressInMegaBytes?: number;

  /**
   * @schema Snapshot#CurrentBackupRateInMegaBytesPerSecond
   */
  readonly currentBackupRateInMegaBytesPerSecond?: number;

  /**
   * @schema Snapshot#EstimatedSecondsToCompletion
   */
  readonly estimatedSecondsToCompletion?: number;

  /**
   * @schema Snapshot#ElapsedTimeInSeconds
   */
  readonly elapsedTimeInSeconds?: number;

  /**
   * @schema Snapshot#SourceRegion
   */
  readonly sourceRegion?: string;

  /**
   * @schema Snapshot#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema Snapshot#RestorableNodeTypes
   */
  readonly restorableNodeTypes?: string[];

  /**
   * @schema Snapshot#EnhancedVpcRouting
   */
  readonly enhancedVpcRouting?: boolean;

  /**
   * @schema Snapshot#MaintenanceTrackName
   */
  readonly maintenanceTrackName?: string;

  /**
   * @schema Snapshot#ManualSnapshotRetentionPeriod
   */
  readonly manualSnapshotRetentionPeriod?: number;

  /**
   * @schema Snapshot#ManualSnapshotRemainingDays
   */
  readonly manualSnapshotRemainingDays?: number;

  /**
   * @schema Snapshot#SnapshotRetentionStartTime
   */
  readonly snapshotRetentionStartTime?: string;

}

/**
 * @schema SnapshotErrorMessage
 */
export interface SnapshotErrorMessage {
  /**
   * @schema SnapshotErrorMessage#SnapshotIdentifier
   */
  readonly snapshotIdentifier?: string;

  /**
   * @schema SnapshotErrorMessage#SnapshotClusterIdentifier
   */
  readonly snapshotClusterIdentifier?: string;

  /**
   * @schema SnapshotErrorMessage#FailureCode
   */
  readonly failureCode?: string;

  /**
   * @schema SnapshotErrorMessage#FailureReason
   */
  readonly failureReason?: string;

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
 * @schema Cluster
 */
export interface Cluster {
  /**
   * @schema Cluster#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema Cluster#NodeType
   */
  readonly nodeType?: string;

  /**
   * @schema Cluster#ClusterStatus
   */
  readonly clusterStatus?: string;

  /**
   * @schema Cluster#ClusterAvailabilityStatus
   */
  readonly clusterAvailabilityStatus?: string;

  /**
   * @schema Cluster#ModifyStatus
   */
  readonly modifyStatus?: string;

  /**
   * @schema Cluster#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema Cluster#DBName
   */
  readonly dbName?: string;

  /**
   * @schema Cluster#Endpoint
   */
  readonly endpoint?: Endpoint;

  /**
   * @schema Cluster#ClusterCreateTime
   */
  readonly clusterCreateTime?: string;

  /**
   * @schema Cluster#AutomatedSnapshotRetentionPeriod
   */
  readonly automatedSnapshotRetentionPeriod?: number;

  /**
   * @schema Cluster#ManualSnapshotRetentionPeriod
   */
  readonly manualSnapshotRetentionPeriod?: number;

  /**
   * @schema Cluster#ClusterSecurityGroups
   */
  readonly clusterSecurityGroups?: ClusterSecurityGroupMembership[];

  /**
   * @schema Cluster#VpcSecurityGroups
   */
  readonly vpcSecurityGroups?: VpcSecurityGroupMembership[];

  /**
   * @schema Cluster#ClusterParameterGroups
   */
  readonly clusterParameterGroups?: ClusterParameterGroupStatus[];

  /**
   * @schema Cluster#ClusterSubnetGroupName
   */
  readonly clusterSubnetGroupName?: string;

  /**
   * @schema Cluster#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema Cluster#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema Cluster#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema Cluster#PendingModifiedValues
   */
  readonly pendingModifiedValues?: PendingModifiedValues;

  /**
   * @schema Cluster#ClusterVersion
   */
  readonly clusterVersion?: string;

  /**
   * @schema Cluster#AllowVersionUpgrade
   */
  readonly allowVersionUpgrade?: boolean;

  /**
   * @schema Cluster#NumberOfNodes
   */
  readonly numberOfNodes?: number;

  /**
   * @schema Cluster#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema Cluster#Encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema Cluster#RestoreStatus
   */
  readonly restoreStatus?: RestoreStatus;

  /**
   * @schema Cluster#DataTransferProgress
   */
  readonly dataTransferProgress?: DataTransferProgress;

  /**
   * @schema Cluster#HsmStatus
   */
  readonly hsmStatus?: HsmStatus;

  /**
   * @schema Cluster#ClusterSnapshotCopyStatus
   */
  readonly clusterSnapshotCopyStatus?: ClusterSnapshotCopyStatus;

  /**
   * @schema Cluster#ClusterPublicKey
   */
  readonly clusterPublicKey?: string;

  /**
   * @schema Cluster#ClusterNodes
   */
  readonly clusterNodes?: ClusterNode[];

  /**
   * @schema Cluster#ElasticIpStatus
   */
  readonly elasticIpStatus?: ElasticIpStatus;

  /**
   * @schema Cluster#ClusterRevisionNumber
   */
  readonly clusterRevisionNumber?: string;

  /**
   * @schema Cluster#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema Cluster#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema Cluster#EnhancedVpcRouting
   */
  readonly enhancedVpcRouting?: boolean;

  /**
   * @schema Cluster#IamRoles
   */
  readonly iamRoles?: ClusterIamRole[];

  /**
   * @schema Cluster#PendingActions
   */
  readonly pendingActions?: string[];

  /**
   * @schema Cluster#MaintenanceTrackName
   */
  readonly maintenanceTrackName?: string;

  /**
   * @schema Cluster#ElasticResizeNumberOfNodeOptions
   */
  readonly elasticResizeNumberOfNodeOptions?: string;

  /**
   * @schema Cluster#DeferredMaintenanceWindows
   */
  readonly deferredMaintenanceWindows?: DeferredMaintenanceWindow[];

  /**
   * @schema Cluster#SnapshotScheduleIdentifier
   */
  readonly snapshotScheduleIdentifier?: string;

  /**
   * @schema Cluster#SnapshotScheduleState
   */
  readonly snapshotScheduleState?: string;

  /**
   * @schema Cluster#ExpectedNextSnapshotScheduleTime
   */
  readonly expectedNextSnapshotScheduleTime?: string;

  /**
   * @schema Cluster#ExpectedNextSnapshotScheduleTimeStatus
   */
  readonly expectedNextSnapshotScheduleTimeStatus?: string;

  /**
   * @schema Cluster#NextMaintenanceWindowStartTime
   */
  readonly nextMaintenanceWindowStartTime?: string;

  /**
   * @schema Cluster#ResizeInfo
   */
  readonly resizeInfo?: ResizeInfo;

  /**
   * @schema Cluster#ClusterNamespaceArn
   */
  readonly clusterNamespaceArn?: string;

}

/**
 * @schema ClusterParameterGroup
 */
export interface ClusterParameterGroup {
  /**
   * @schema ClusterParameterGroup#ParameterGroupName
   */
  readonly parameterGroupName?: string;

  /**
   * @schema ClusterParameterGroup#ParameterGroupFamily
   */
  readonly parameterGroupFamily?: string;

  /**
   * @schema ClusterParameterGroup#Description
   */
  readonly description?: string;

  /**
   * @schema ClusterParameterGroup#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema ClusterSubnetGroup
 */
export interface ClusterSubnetGroup {
  /**
   * @schema ClusterSubnetGroup#ClusterSubnetGroupName
   */
  readonly clusterSubnetGroupName?: string;

  /**
   * @schema ClusterSubnetGroup#Description
   */
  readonly description?: string;

  /**
   * @schema ClusterSubnetGroup#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema ClusterSubnetGroup#SubnetGroupStatus
   */
  readonly subnetGroupStatus?: string;

  /**
   * @schema ClusterSubnetGroup#Subnets
   */
  readonly subnets?: Subnet[];

  /**
   * @schema ClusterSubnetGroup#Tags
   */
  readonly tags?: Tag[];

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
   * @schema EventSubscription#Severity
   */
  readonly severity?: string;

  /**
   * @schema EventSubscription#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema EventSubscription#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema HsmClientCertificate
 */
export interface HsmClientCertificate {
  /**
   * @schema HsmClientCertificate#HsmClientCertificateIdentifier
   */
  readonly hsmClientCertificateIdentifier?: string;

  /**
   * @schema HsmClientCertificate#HsmClientCertificatePublicKey
   */
  readonly hsmClientCertificatePublicKey?: string;

  /**
   * @schema HsmClientCertificate#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema HsmConfiguration
 */
export interface HsmConfiguration {
  /**
   * @schema HsmConfiguration#HsmConfigurationIdentifier
   */
  readonly hsmConfigurationIdentifier?: string;

  /**
   * @schema HsmConfiguration#Description
   */
  readonly description?: string;

  /**
   * @schema HsmConfiguration#HsmIpAddress
   */
  readonly hsmIpAddress?: string;

  /**
   * @schema HsmConfiguration#HsmPartitionName
   */
  readonly hsmPartitionName?: string;

  /**
   * @schema HsmConfiguration#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema ScheduledActionType
 */
export interface ScheduledActionType {
  /**
   * @schema ScheduledActionType#ResizeCluster
   */
  readonly resizeCluster?: ResizeClusterMessage;

  /**
   * @schema ScheduledActionType#PauseCluster
   */
  readonly pauseCluster?: PauseClusterMessage;

  /**
   * @schema ScheduledActionType#ResumeCluster
   */
  readonly resumeCluster?: ResumeClusterMessage;

}

/**
 * @schema SnapshotCopyGrant
 */
export interface SnapshotCopyGrant {
  /**
   * @schema SnapshotCopyGrant#SnapshotCopyGrantName
   */
  readonly snapshotCopyGrantName?: string;

  /**
   * @schema SnapshotCopyGrant#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema SnapshotCopyGrant#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema ClusterAssociatedToSchedule
 */
export interface ClusterAssociatedToSchedule {
  /**
   * @schema ClusterAssociatedToSchedule#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema ClusterAssociatedToSchedule#ScheduleAssociationState
   */
  readonly scheduleAssociationState?: string;

}

/**
 * @schema AccountAttribute
 */
export interface AccountAttribute {
  /**
   * @schema AccountAttribute#AttributeName
   */
  readonly attributeName?: string;

  /**
   * @schema AccountAttribute#AttributeValues
   */
  readonly attributeValues?: AttributeValueTarget[];

}

/**
 * @schema ClusterDbRevision
 */
export interface ClusterDbRevision {
  /**
   * @schema ClusterDbRevision#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema ClusterDbRevision#CurrentDatabaseRevision
   */
  readonly currentDatabaseRevision?: string;

  /**
   * @schema ClusterDbRevision#DatabaseRevisionReleaseDate
   */
  readonly databaseRevisionReleaseDate?: string;

  /**
   * @schema ClusterDbRevision#RevisionTargets
   */
  readonly revisionTargets?: RevisionTarget[];

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
   * @schema Parameter#DataType
   */
  readonly dataType?: string;

  /**
   * @schema Parameter#AllowedValues
   */
  readonly allowedValues?: string;

  /**
   * @schema Parameter#ApplyType
   */
  readonly applyType?: string;

  /**
   * @schema Parameter#IsModifiable
   */
  readonly isModifiable?: boolean;

  /**
   * @schema Parameter#MinimumEngineVersion
   */
  readonly minimumEngineVersion?: string;

}

/**
 * @schema SnapshotSortingEntity
 */
export interface SnapshotSortingEntity {
  /**
   * @schema SnapshotSortingEntity#Attribute
   */
  readonly attribute: string;

  /**
   * @schema SnapshotSortingEntity#SortOrder
   */
  readonly sortOrder?: string;

}

/**
 * @schema MaintenanceTrack
 */
export interface MaintenanceTrack {
  /**
   * @schema MaintenanceTrack#MaintenanceTrackName
   */
  readonly maintenanceTrackName?: string;

  /**
   * @schema MaintenanceTrack#DatabaseVersion
   */
  readonly databaseVersion?: string;

  /**
   * @schema MaintenanceTrack#UpdateTargets
   */
  readonly updateTargets?: UpdateTarget[];

}

/**
 * @schema ClusterVersion
 */
export interface ClusterVersion {
  /**
   * @schema ClusterVersion#ClusterVersion
   */
  readonly clusterVersion?: string;

  /**
   * @schema ClusterVersion#ClusterParameterGroupFamily
   */
  readonly clusterParameterGroupFamily?: string;

  /**
   * @schema ClusterVersion#Description
   */
  readonly description?: string;

}

/**
 * @schema DefaultClusterParameters
 */
export interface DefaultClusterParameters {
  /**
   * @schema DefaultClusterParameters#ParameterGroupFamily
   */
  readonly parameterGroupFamily?: string;

  /**
   * @schema DefaultClusterParameters#Marker
   */
  readonly marker?: string;

  /**
   * @schema DefaultClusterParameters#Parameters
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
   * @schema EventCategoriesMap#Events
   */
  readonly events?: EventInfoMap[];

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
   * @schema Event#Severity
   */
  readonly severity?: string;

  /**
   * @schema Event#Date
   */
  readonly date?: string;

  /**
   * @schema Event#EventId
   */
  readonly eventId?: string;

}

/**
 * @schema NodeConfigurationOptionsFilter
 */
export interface NodeConfigurationOptionsFilter {
  /**
   * @schema NodeConfigurationOptionsFilter#Name
   */
  readonly name?: string;

  /**
   * @schema NodeConfigurationOptionsFilter#Operator
   */
  readonly operator?: string;

  /**
   * @schema NodeConfigurationOptionsFilter#Values
   */
  readonly values?: string[];

}

/**
 * @schema NodeConfigurationOption
 */
export interface NodeConfigurationOption {
  /**
   * @schema NodeConfigurationOption#NodeType
   */
  readonly nodeType?: string;

  /**
   * @schema NodeConfigurationOption#NumberOfNodes
   */
  readonly numberOfNodes?: number;

  /**
   * @schema NodeConfigurationOption#EstimatedDiskUtilizationPercent
   */
  readonly estimatedDiskUtilizationPercent?: number;

  /**
   * @schema NodeConfigurationOption#Mode
   */
  readonly mode?: string;

}

/**
 * @schema OrderableClusterOption
 */
export interface OrderableClusterOption {
  /**
   * @schema OrderableClusterOption#ClusterVersion
   */
  readonly clusterVersion?: string;

  /**
   * @schema OrderableClusterOption#ClusterType
   */
  readonly clusterType?: string;

  /**
   * @schema OrderableClusterOption#NodeType
   */
  readonly nodeType?: string;

  /**
   * @schema OrderableClusterOption#AvailabilityZones
   */
  readonly availabilityZones?: AvailabilityZone[];

}

/**
 * @schema ReservedNodeOffering
 */
export interface ReservedNodeOffering {
  /**
   * @schema ReservedNodeOffering#ReservedNodeOfferingId
   */
  readonly reservedNodeOfferingId?: string;

  /**
   * @schema ReservedNodeOffering#NodeType
   */
  readonly nodeType?: string;

  /**
   * @schema ReservedNodeOffering#Duration
   */
  readonly duration?: number;

  /**
   * @schema ReservedNodeOffering#FixedPrice
   */
  readonly fixedPrice?: number;

  /**
   * @schema ReservedNodeOffering#UsagePrice
   */
  readonly usagePrice?: number;

  /**
   * @schema ReservedNodeOffering#CurrencyCode
   */
  readonly currencyCode?: string;

  /**
   * @schema ReservedNodeOffering#OfferingType
   */
  readonly offeringType?: string;

  /**
   * @schema ReservedNodeOffering#RecurringCharges
   */
  readonly recurringCharges?: RecurringCharge[];

  /**
   * @schema ReservedNodeOffering#ReservedNodeOfferingType
   */
  readonly reservedNodeOfferingType?: string;

}

/**
 * @schema ScheduledActionFilter
 */
export interface ScheduledActionFilter {
  /**
   * @schema ScheduledActionFilter#Name
   */
  readonly name: string;

  /**
   * @schema ScheduledActionFilter#Values
   */
  readonly values: string[];

}

/**
 * @schema TableRestoreStatus
 */
export interface TableRestoreStatus {
  /**
   * @schema TableRestoreStatus#TableRestoreRequestId
   */
  readonly tableRestoreRequestId?: string;

  /**
   * @schema TableRestoreStatus#Status
   */
  readonly status?: string;

  /**
   * @schema TableRestoreStatus#Message
   */
  readonly message?: string;

  /**
   * @schema TableRestoreStatus#RequestTime
   */
  readonly requestTime?: string;

  /**
   * @schema TableRestoreStatus#ProgressInMegaBytes
   */
  readonly progressInMegaBytes?: number;

  /**
   * @schema TableRestoreStatus#TotalDataInMegaBytes
   */
  readonly totalDataInMegaBytes?: number;

  /**
   * @schema TableRestoreStatus#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema TableRestoreStatus#SnapshotIdentifier
   */
  readonly snapshotIdentifier?: string;

  /**
   * @schema TableRestoreStatus#SourceDatabaseName
   */
  readonly sourceDatabaseName?: string;

  /**
   * @schema TableRestoreStatus#SourceSchemaName
   */
  readonly sourceSchemaName?: string;

  /**
   * @schema TableRestoreStatus#SourceTableName
   */
  readonly sourceTableName?: string;

  /**
   * @schema TableRestoreStatus#TargetDatabaseName
   */
  readonly targetDatabaseName?: string;

  /**
   * @schema TableRestoreStatus#TargetSchemaName
   */
  readonly targetSchemaName?: string;

  /**
   * @schema TableRestoreStatus#NewTableName
   */
  readonly newTableName?: string;

}

/**
 * @schema TaggedResource
 */
export interface TaggedResource {
  /**
   * @schema TaggedResource#Tag
   */
  readonly tag?: Tag;

  /**
   * @schema TaggedResource#ResourceName
   */
  readonly resourceName?: string;

  /**
   * @schema TaggedResource#ResourceType
   */
  readonly resourceType?: string;

}

/**
 * @schema RecurringCharge
 */
export interface RecurringCharge {
  /**
   * @schema RecurringCharge#RecurringChargeAmount
   */
  readonly recurringChargeAmount?: number;

  /**
   * @schema RecurringCharge#RecurringChargeFrequency
   */
  readonly recurringChargeFrequency?: string;

}

/**
 * @schema Ec2SecurityGroup
 */
export interface Ec2SecurityGroup {
  /**
   * @schema Ec2SecurityGroup#Status
   */
  readonly status?: string;

  /**
   * @schema Ec2SecurityGroup#EC2SecurityGroupName
   */
  readonly ec2SecurityGroupName?: string;

  /**
   * @schema Ec2SecurityGroup#EC2SecurityGroupOwnerId
   */
  readonly ec2SecurityGroupOwnerId?: string;

  /**
   * @schema Ec2SecurityGroup#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema IpRange
 */
export interface IpRange {
  /**
   * @schema IpRange#Status
   */
  readonly status?: string;

  /**
   * @schema IpRange#CIDRIP
   */
  readonly cidrip?: string;

  /**
   * @schema IpRange#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema AccountWithRestoreAccess
 */
export interface AccountWithRestoreAccess {
  /**
   * @schema AccountWithRestoreAccess#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema AccountWithRestoreAccess#AccountAlias
   */
  readonly accountAlias?: string;

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

}

/**
 * @schema ClusterSecurityGroupMembership
 */
export interface ClusterSecurityGroupMembership {
  /**
   * @schema ClusterSecurityGroupMembership#ClusterSecurityGroupName
   */
  readonly clusterSecurityGroupName?: string;

  /**
   * @schema ClusterSecurityGroupMembership#Status
   */
  readonly status?: string;

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
 * @schema ClusterParameterGroupStatus
 */
export interface ClusterParameterGroupStatus {
  /**
   * @schema ClusterParameterGroupStatus#ParameterGroupName
   */
  readonly parameterGroupName?: string;

  /**
   * @schema ClusterParameterGroupStatus#ParameterApplyStatus
   */
  readonly parameterApplyStatus?: string;

  /**
   * @schema ClusterParameterGroupStatus#ClusterParameterStatusList
   */
  readonly clusterParameterStatusList?: ClusterParameterStatus[];

}

/**
 * @schema PendingModifiedValues
 */
export interface PendingModifiedValues {
  /**
   * @schema PendingModifiedValues#MasterUserPassword
   */
  readonly masterUserPassword?: string;

  /**
   * @schema PendingModifiedValues#NodeType
   */
  readonly nodeType?: string;

  /**
   * @schema PendingModifiedValues#NumberOfNodes
   */
  readonly numberOfNodes?: number;

  /**
   * @schema PendingModifiedValues#ClusterType
   */
  readonly clusterType?: string;

  /**
   * @schema PendingModifiedValues#ClusterVersion
   */
  readonly clusterVersion?: string;

  /**
   * @schema PendingModifiedValues#AutomatedSnapshotRetentionPeriod
   */
  readonly automatedSnapshotRetentionPeriod?: number;

  /**
   * @schema PendingModifiedValues#ClusterIdentifier
   */
  readonly clusterIdentifier?: string;

  /**
   * @schema PendingModifiedValues#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema PendingModifiedValues#EnhancedVpcRouting
   */
  readonly enhancedVpcRouting?: boolean;

  /**
   * @schema PendingModifiedValues#MaintenanceTrackName
   */
  readonly maintenanceTrackName?: string;

  /**
   * @schema PendingModifiedValues#EncryptionType
   */
  readonly encryptionType?: string;

}

/**
 * @schema RestoreStatus
 */
export interface RestoreStatus {
  /**
   * @schema RestoreStatus#Status
   */
  readonly status?: string;

  /**
   * @schema RestoreStatus#CurrentRestoreRateInMegaBytesPerSecond
   */
  readonly currentRestoreRateInMegaBytesPerSecond?: number;

  /**
   * @schema RestoreStatus#SnapshotSizeInMegaBytes
   */
  readonly snapshotSizeInMegaBytes?: number;

  /**
   * @schema RestoreStatus#ProgressInMegaBytes
   */
  readonly progressInMegaBytes?: number;

  /**
   * @schema RestoreStatus#ElapsedTimeInSeconds
   */
  readonly elapsedTimeInSeconds?: number;

  /**
   * @schema RestoreStatus#EstimatedTimeToCompletionInSeconds
   */
  readonly estimatedTimeToCompletionInSeconds?: number;

}

/**
 * @schema DataTransferProgress
 */
export interface DataTransferProgress {
  /**
   * @schema DataTransferProgress#Status
   */
  readonly status?: string;

  /**
   * @schema DataTransferProgress#CurrentRateInMegaBytesPerSecond
   */
  readonly currentRateInMegaBytesPerSecond?: number;

  /**
   * @schema DataTransferProgress#TotalDataInMegaBytes
   */
  readonly totalDataInMegaBytes?: number;

  /**
   * @schema DataTransferProgress#DataTransferredInMegaBytes
   */
  readonly dataTransferredInMegaBytes?: number;

  /**
   * @schema DataTransferProgress#EstimatedTimeToCompletionInSeconds
   */
  readonly estimatedTimeToCompletionInSeconds?: number;

  /**
   * @schema DataTransferProgress#ElapsedTimeInSeconds
   */
  readonly elapsedTimeInSeconds?: number;

}

/**
 * @schema HsmStatus
 */
export interface HsmStatus {
  /**
   * @schema HsmStatus#HsmClientCertificateIdentifier
   */
  readonly hsmClientCertificateIdentifier?: string;

  /**
   * @schema HsmStatus#HsmConfigurationIdentifier
   */
  readonly hsmConfigurationIdentifier?: string;

  /**
   * @schema HsmStatus#Status
   */
  readonly status?: string;

}

/**
 * @schema ClusterSnapshotCopyStatus
 */
export interface ClusterSnapshotCopyStatus {
  /**
   * @schema ClusterSnapshotCopyStatus#DestinationRegion
   */
  readonly destinationRegion?: string;

  /**
   * @schema ClusterSnapshotCopyStatus#RetentionPeriod
   */
  readonly retentionPeriod?: number;

  /**
   * @schema ClusterSnapshotCopyStatus#ManualSnapshotRetentionPeriod
   */
  readonly manualSnapshotRetentionPeriod?: number;

  /**
   * @schema ClusterSnapshotCopyStatus#SnapshotCopyGrantName
   */
  readonly snapshotCopyGrantName?: string;

}

/**
 * @schema ClusterNode
 */
export interface ClusterNode {
  /**
   * @schema ClusterNode#NodeRole
   */
  readonly nodeRole?: string;

  /**
   * @schema ClusterNode#PrivateIPAddress
   */
  readonly privateIpAddress?: string;

  /**
   * @schema ClusterNode#PublicIPAddress
   */
  readonly publicIpAddress?: string;

}

/**
 * @schema ElasticIpStatus
 */
export interface ElasticIpStatus {
  /**
   * @schema ElasticIpStatus#ElasticIp
   */
  readonly elasticIp?: string;

  /**
   * @schema ElasticIpStatus#Status
   */
  readonly status?: string;

}

/**
 * @schema ClusterIamRole
 */
export interface ClusterIamRole {
  /**
   * @schema ClusterIamRole#IamRoleArn
   */
  readonly iamRoleArn?: string;

  /**
   * @schema ClusterIamRole#ApplyStatus
   */
  readonly applyStatus?: string;

}

/**
 * @schema DeferredMaintenanceWindow
 */
export interface DeferredMaintenanceWindow {
  /**
   * @schema DeferredMaintenanceWindow#DeferMaintenanceIdentifier
   */
  readonly deferMaintenanceIdentifier?: string;

  /**
   * @schema DeferredMaintenanceWindow#DeferMaintenanceStartTime
   */
  readonly deferMaintenanceStartTime?: string;

  /**
   * @schema DeferredMaintenanceWindow#DeferMaintenanceEndTime
   */
  readonly deferMaintenanceEndTime?: string;

}

/**
 * @schema ResizeInfo
 */
export interface ResizeInfo {
  /**
   * @schema ResizeInfo#ResizeType
   */
  readonly resizeType?: string;

  /**
   * @schema ResizeInfo#AllowCancelResize
   */
  readonly allowCancelResize?: boolean;

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
 * @schema AttributeValueTarget
 */
export interface AttributeValueTarget {
  /**
   * @schema AttributeValueTarget#AttributeValue
   */
  readonly attributeValue?: string;

}

/**
 * @schema RevisionTarget
 */
export interface RevisionTarget {
  /**
   * @schema RevisionTarget#DatabaseRevision
   */
  readonly databaseRevision?: string;

  /**
   * @schema RevisionTarget#Description
   */
  readonly description?: string;

  /**
   * @schema RevisionTarget#DatabaseRevisionReleaseDate
   */
  readonly databaseRevisionReleaseDate?: string;

}

/**
 * @schema UpdateTarget
 */
export interface UpdateTarget {
  /**
   * @schema UpdateTarget#MaintenanceTrackName
   */
  readonly maintenanceTrackName?: string;

  /**
   * @schema UpdateTarget#DatabaseVersion
   */
  readonly databaseVersion?: string;

  /**
   * @schema UpdateTarget#SupportedOperations
   */
  readonly supportedOperations?: SupportedOperation[];

}

/**
 * @schema EventInfoMap
 */
export interface EventInfoMap {
  /**
   * @schema EventInfoMap#EventId
   */
  readonly eventId?: string;

  /**
   * @schema EventInfoMap#EventCategories
   */
  readonly eventCategories?: string[];

  /**
   * @schema EventInfoMap#EventDescription
   */
  readonly eventDescription?: string;

  /**
   * @schema EventInfoMap#Severity
   */
  readonly severity?: string;

}

/**
 * @schema AvailabilityZone
 */
export interface AvailabilityZone {
  /**
   * @schema AvailabilityZone#Name
   */
  readonly name?: string;

  /**
   * @schema AvailabilityZone#SupportedPlatforms
   */
  readonly supportedPlatforms?: SupportedPlatform[];

}

/**
 * @schema ClusterParameterStatus
 */
export interface ClusterParameterStatus {
  /**
   * @schema ClusterParameterStatus#ParameterName
   */
  readonly parameterName?: string;

  /**
   * @schema ClusterParameterStatus#ParameterApplyStatus
   */
  readonly parameterApplyStatus?: string;

  /**
   * @schema ClusterParameterStatus#ParameterApplyErrorDescription
   */
  readonly parameterApplyErrorDescription?: string;

}

/**
 * @schema SupportedOperation
 */
export interface SupportedOperation {
  /**
   * @schema SupportedOperation#OperationName
   */
  readonly operationName?: string;

}

/**
 * @schema SupportedPlatform
 */
export interface SupportedPlatform {
  /**
   * @schema SupportedPlatform#Name
   */
  readonly name?: string;

}
