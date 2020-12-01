/**
 * @schema AddTagsToResourceMessage
 */
export interface AddTagsToResourceMessage {
  /**
   * @schema AddTagsToResourceMessage#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema AddTagsToResourceMessage#Tags
   */
  readonly tags: Tag[];

}

/**
 * @schema AddTagsToResourceResponse
 */
export interface AddTagsToResourceResponse {
}

/**
 * @schema ApplyPendingMaintenanceActionMessage
 */
export interface ApplyPendingMaintenanceActionMessage {
  /**
   * @schema ApplyPendingMaintenanceActionMessage#ReplicationInstanceArn
   */
  readonly replicationInstanceArn: string;

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
 * @schema ApplyPendingMaintenanceActionResponse
 */
export interface ApplyPendingMaintenanceActionResponse {
  /**
   * @schema ApplyPendingMaintenanceActionResponse#ResourcePendingMaintenanceActions
   */
  readonly resourcePendingMaintenanceActions?: ResourcePendingMaintenanceActions;

}

/**
 * @schema CancelReplicationTaskAssessmentRunMessage
 */
export interface CancelReplicationTaskAssessmentRunMessage {
  /**
   * @schema CancelReplicationTaskAssessmentRunMessage#ReplicationTaskAssessmentRunArn
   */
  readonly replicationTaskAssessmentRunArn: string;

}

/**
 * @schema CancelReplicationTaskAssessmentRunResponse
 */
export interface CancelReplicationTaskAssessmentRunResponse {
  /**
   * @schema CancelReplicationTaskAssessmentRunResponse#ReplicationTaskAssessmentRun
   */
  readonly replicationTaskAssessmentRun?: ReplicationTaskAssessmentRun;

}

/**
 * @schema CreateEndpointMessage
 */
export interface CreateEndpointMessage {
  /**
   * @schema CreateEndpointMessage#EndpointIdentifier
   */
  readonly endpointIdentifier: string;

  /**
   * @schema CreateEndpointMessage#EndpointType
   */
  readonly endpointType: string;

  /**
   * @schema CreateEndpointMessage#EngineName
   */
  readonly engineName: string;

  /**
   * @schema CreateEndpointMessage#Username
   */
  readonly username?: string;

  /**
   * @schema CreateEndpointMessage#Password
   */
  readonly password?: string;

  /**
   * @schema CreateEndpointMessage#ServerName
   */
  readonly serverName?: string;

  /**
   * @schema CreateEndpointMessage#Port
   */
  readonly port?: number;

  /**
   * @schema CreateEndpointMessage#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema CreateEndpointMessage#ExtraConnectionAttributes
   */
  readonly extraConnectionAttributes?: string;

  /**
   * @schema CreateEndpointMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema CreateEndpointMessage#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateEndpointMessage#CertificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema CreateEndpointMessage#SslMode
   */
  readonly sslMode?: string;

  /**
   * @schema CreateEndpointMessage#ServiceAccessRoleArn
   */
  readonly serviceAccessRoleArn?: string;

  /**
   * @schema CreateEndpointMessage#ExternalTableDefinition
   */
  readonly externalTableDefinition?: string;

  /**
   * @schema CreateEndpointMessage#DynamoDbSettings
   */
  readonly dynamoDbSettings?: DynamoDbSettings;

  /**
   * @schema CreateEndpointMessage#S3Settings
   */
  readonly s3Settings?: S3Settings;

  /**
   * @schema CreateEndpointMessage#DmsTransferSettings
   */
  readonly dmsTransferSettings?: DmsTransferSettings;

  /**
   * @schema CreateEndpointMessage#MongoDbSettings
   */
  readonly mongoDbSettings?: MongoDbSettings;

  /**
   * @schema CreateEndpointMessage#KinesisSettings
   */
  readonly kinesisSettings?: KinesisSettings;

  /**
   * @schema CreateEndpointMessage#KafkaSettings
   */
  readonly kafkaSettings?: KafkaSettings;

  /**
   * @schema CreateEndpointMessage#ElasticsearchSettings
   */
  readonly elasticsearchSettings?: ElasticsearchSettings;

  /**
   * @schema CreateEndpointMessage#NeptuneSettings
   */
  readonly neptuneSettings?: NeptuneSettings;

  /**
   * @schema CreateEndpointMessage#RedshiftSettings
   */
  readonly redshiftSettings?: RedshiftSettings;

  /**
   * @schema CreateEndpointMessage#PostgreSQLSettings
   */
  readonly postgreSqlSettings?: PostgreSqlSettings;

  /**
   * @schema CreateEndpointMessage#MySQLSettings
   */
  readonly mySqlSettings?: MySqlSettings;

  /**
   * @schema CreateEndpointMessage#OracleSettings
   */
  readonly oracleSettings?: OracleSettings;

  /**
   * @schema CreateEndpointMessage#SybaseSettings
   */
  readonly sybaseSettings?: SybaseSettings;

  /**
   * @schema CreateEndpointMessage#MicrosoftSQLServerSettings
   */
  readonly microsoftSqlServerSettings?: MicrosoftSqlServerSettings;

  /**
   * @schema CreateEndpointMessage#IBMDb2Settings
   */
  readonly ibmDb2Settings?: IbmDb2Settings;

  /**
   * @schema CreateEndpointMessage#ResourceIdentifier
   */
  readonly resourceIdentifier?: string;

  /**
   * @schema CreateEndpointMessage#DocDbSettings
   */
  readonly docDbSettings?: DocDbSettings;

}

/**
 * @schema CreateEndpointResponse
 */
export interface CreateEndpointResponse {
  /**
   * @schema CreateEndpointResponse#Endpoint
   */
  readonly endpoint?: Endpoint;

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
 * @schema CreateEventSubscriptionResponse
 */
export interface CreateEventSubscriptionResponse {
  /**
   * @schema CreateEventSubscriptionResponse#EventSubscription
   */
  readonly eventSubscription?: EventSubscription;

}

/**
 * @schema CreateReplicationInstanceMessage
 */
export interface CreateReplicationInstanceMessage {
  /**
   * @schema CreateReplicationInstanceMessage#ReplicationInstanceIdentifier
   */
  readonly replicationInstanceIdentifier: string;

  /**
   * @schema CreateReplicationInstanceMessage#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema CreateReplicationInstanceMessage#ReplicationInstanceClass
   */
  readonly replicationInstanceClass: string;

  /**
   * @schema CreateReplicationInstanceMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema CreateReplicationInstanceMessage#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema CreateReplicationInstanceMessage#ReplicationSubnetGroupIdentifier
   */
  readonly replicationSubnetGroupIdentifier?: string;

  /**
   * @schema CreateReplicationInstanceMessage#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema CreateReplicationInstanceMessage#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema CreateReplicationInstanceMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema CreateReplicationInstanceMessage#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema CreateReplicationInstanceMessage#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateReplicationInstanceMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema CreateReplicationInstanceMessage#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema CreateReplicationInstanceMessage#DnsNameServers
   */
  readonly dnsNameServers?: string;

  /**
   * @schema CreateReplicationInstanceMessage#ResourceIdentifier
   */
  readonly resourceIdentifier?: string;

}

/**
 * @schema CreateReplicationInstanceResponse
 */
export interface CreateReplicationInstanceResponse {
  /**
   * @schema CreateReplicationInstanceResponse#ReplicationInstance
   */
  readonly replicationInstance?: ReplicationInstance;

}

/**
 * @schema CreateReplicationSubnetGroupMessage
 */
export interface CreateReplicationSubnetGroupMessage {
  /**
   * @schema CreateReplicationSubnetGroupMessage#ReplicationSubnetGroupIdentifier
   */
  readonly replicationSubnetGroupIdentifier: string;

  /**
   * @schema CreateReplicationSubnetGroupMessage#ReplicationSubnetGroupDescription
   */
  readonly replicationSubnetGroupDescription: string;

  /**
   * @schema CreateReplicationSubnetGroupMessage#SubnetIds
   */
  readonly subnetIds: string[];

  /**
   * @schema CreateReplicationSubnetGroupMessage#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateReplicationSubnetGroupResponse
 */
export interface CreateReplicationSubnetGroupResponse {
  /**
   * @schema CreateReplicationSubnetGroupResponse#ReplicationSubnetGroup
   */
  readonly replicationSubnetGroup?: ReplicationSubnetGroup;

}

/**
 * @schema CreateReplicationTaskMessage
 */
export interface CreateReplicationTaskMessage {
  /**
   * @schema CreateReplicationTaskMessage#ReplicationTaskIdentifier
   */
  readonly replicationTaskIdentifier: string;

  /**
   * @schema CreateReplicationTaskMessage#SourceEndpointArn
   */
  readonly sourceEndpointArn: string;

  /**
   * @schema CreateReplicationTaskMessage#TargetEndpointArn
   */
  readonly targetEndpointArn: string;

  /**
   * @schema CreateReplicationTaskMessage#ReplicationInstanceArn
   */
  readonly replicationInstanceArn: string;

  /**
   * @schema CreateReplicationTaskMessage#MigrationType
   */
  readonly migrationType: string;

  /**
   * @schema CreateReplicationTaskMessage#TableMappings
   */
  readonly tableMappings: string;

  /**
   * @schema CreateReplicationTaskMessage#ReplicationTaskSettings
   */
  readonly replicationTaskSettings?: string;

  /**
   * @schema CreateReplicationTaskMessage#CdcStartTime
   */
  readonly cdcStartTime?: string;

  /**
   * @schema CreateReplicationTaskMessage#CdcStartPosition
   */
  readonly cdcStartPosition?: string;

  /**
   * @schema CreateReplicationTaskMessage#CdcStopPosition
   */
  readonly cdcStopPosition?: string;

  /**
   * @schema CreateReplicationTaskMessage#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateReplicationTaskMessage#TaskData
   */
  readonly taskData?: string;

  /**
   * @schema CreateReplicationTaskMessage#ResourceIdentifier
   */
  readonly resourceIdentifier?: string;

}

/**
 * @schema CreateReplicationTaskResponse
 */
export interface CreateReplicationTaskResponse {
  /**
   * @schema CreateReplicationTaskResponse#ReplicationTask
   */
  readonly replicationTask?: ReplicationTask;

}

/**
 * @schema DeleteCertificateMessage
 */
export interface DeleteCertificateMessage {
  /**
   * @schema DeleteCertificateMessage#CertificateArn
   */
  readonly certificateArn: string;

}

/**
 * @schema DeleteCertificateResponse
 */
export interface DeleteCertificateResponse {
  /**
   * @schema DeleteCertificateResponse#Certificate
   */
  readonly certificate?: Certificate;

}

/**
 * @schema DeleteConnectionMessage
 */
export interface DeleteConnectionMessage {
  /**
   * @schema DeleteConnectionMessage#EndpointArn
   */
  readonly endpointArn: string;

  /**
   * @schema DeleteConnectionMessage#ReplicationInstanceArn
   */
  readonly replicationInstanceArn: string;

}

/**
 * @schema DeleteConnectionResponse
 */
export interface DeleteConnectionResponse {
  /**
   * @schema DeleteConnectionResponse#Connection
   */
  readonly connection?: Connection;

}

/**
 * @schema DeleteEndpointMessage
 */
export interface DeleteEndpointMessage {
  /**
   * @schema DeleteEndpointMessage#EndpointArn
   */
  readonly endpointArn: string;

}

/**
 * @schema DeleteEndpointResponse
 */
export interface DeleteEndpointResponse {
  /**
   * @schema DeleteEndpointResponse#Endpoint
   */
  readonly endpoint?: Endpoint;

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
 * @schema DeleteEventSubscriptionResponse
 */
export interface DeleteEventSubscriptionResponse {
  /**
   * @schema DeleteEventSubscriptionResponse#EventSubscription
   */
  readonly eventSubscription?: EventSubscription;

}

/**
 * @schema DeleteReplicationInstanceMessage
 */
export interface DeleteReplicationInstanceMessage {
  /**
   * @schema DeleteReplicationInstanceMessage#ReplicationInstanceArn
   */
  readonly replicationInstanceArn: string;

}

/**
 * @schema DeleteReplicationInstanceResponse
 */
export interface DeleteReplicationInstanceResponse {
  /**
   * @schema DeleteReplicationInstanceResponse#ReplicationInstance
   */
  readonly replicationInstance?: ReplicationInstance;

}

/**
 * @schema DeleteReplicationSubnetGroupMessage
 */
export interface DeleteReplicationSubnetGroupMessage {
  /**
   * @schema DeleteReplicationSubnetGroupMessage#ReplicationSubnetGroupIdentifier
   */
  readonly replicationSubnetGroupIdentifier: string;

}

/**
 * @schema DeleteReplicationSubnetGroupResponse
 */
export interface DeleteReplicationSubnetGroupResponse {
}

/**
 * @schema DeleteReplicationTaskMessage
 */
export interface DeleteReplicationTaskMessage {
  /**
   * @schema DeleteReplicationTaskMessage#ReplicationTaskArn
   */
  readonly replicationTaskArn: string;

}

/**
 * @schema DeleteReplicationTaskResponse
 */
export interface DeleteReplicationTaskResponse {
  /**
   * @schema DeleteReplicationTaskResponse#ReplicationTask
   */
  readonly replicationTask?: ReplicationTask;

}

/**
 * @schema DeleteReplicationTaskAssessmentRunMessage
 */
export interface DeleteReplicationTaskAssessmentRunMessage {
  /**
   * @schema DeleteReplicationTaskAssessmentRunMessage#ReplicationTaskAssessmentRunArn
   */
  readonly replicationTaskAssessmentRunArn: string;

}

/**
 * @schema DeleteReplicationTaskAssessmentRunResponse
 */
export interface DeleteReplicationTaskAssessmentRunResponse {
  /**
   * @schema DeleteReplicationTaskAssessmentRunResponse#ReplicationTaskAssessmentRun
   */
  readonly replicationTaskAssessmentRun?: ReplicationTaskAssessmentRun;

}

/**
 * @schema DescribeAccountAttributesMessage
 */
export interface DescribeAccountAttributesMessage {
}

/**
 * @schema DescribeAccountAttributesResponse
 */
export interface DescribeAccountAttributesResponse {
  /**
   * @schema DescribeAccountAttributesResponse#AccountQuotas
   */
  readonly accountQuotas?: AccountQuota[];

  /**
   * @schema DescribeAccountAttributesResponse#UniqueAccountIdentifier
   */
  readonly uniqueAccountIdentifier?: string;

}

/**
 * @schema DescribeApplicableIndividualAssessmentsMessage
 */
export interface DescribeApplicableIndividualAssessmentsMessage {
  /**
   * @schema DescribeApplicableIndividualAssessmentsMessage#ReplicationTaskArn
   */
  readonly replicationTaskArn?: string;

  /**
   * @schema DescribeApplicableIndividualAssessmentsMessage#ReplicationInstanceArn
   */
  readonly replicationInstanceArn?: string;

  /**
   * @schema DescribeApplicableIndividualAssessmentsMessage#SourceEngineName
   */
  readonly sourceEngineName?: string;

  /**
   * @schema DescribeApplicableIndividualAssessmentsMessage#TargetEngineName
   */
  readonly targetEngineName?: string;

  /**
   * @schema DescribeApplicableIndividualAssessmentsMessage#MigrationType
   */
  readonly migrationType?: string;

  /**
   * @schema DescribeApplicableIndividualAssessmentsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeApplicableIndividualAssessmentsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DescribeApplicableIndividualAssessmentsResponse
 */
export interface DescribeApplicableIndividualAssessmentsResponse {
  /**
   * @schema DescribeApplicableIndividualAssessmentsResponse#IndividualAssessmentNames
   */
  readonly individualAssessmentNames?: string[];

  /**
   * @schema DescribeApplicableIndividualAssessmentsResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DescribeCertificatesMessage
 */
export interface DescribeCertificatesMessage {
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
 * @schema DescribeCertificatesResponse
 */
export interface DescribeCertificatesResponse {
  /**
   * @schema DescribeCertificatesResponse#Marker
   */
  readonly marker?: string;

  /**
   * @schema DescribeCertificatesResponse#Certificates
   */
  readonly certificates?: Certificate[];

}

/**
 * @schema DescribeConnectionsMessage
 */
export interface DescribeConnectionsMessage {
  /**
   * @schema DescribeConnectionsMessage#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeConnectionsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeConnectionsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DescribeConnectionsResponse
 */
export interface DescribeConnectionsResponse {
  /**
   * @schema DescribeConnectionsResponse#Marker
   */
  readonly marker?: string;

  /**
   * @schema DescribeConnectionsResponse#Connections
   */
  readonly connections?: Connection[];

}

/**
 * @schema DescribeEndpointTypesMessage
 */
export interface DescribeEndpointTypesMessage {
  /**
   * @schema DescribeEndpointTypesMessage#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeEndpointTypesMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeEndpointTypesMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DescribeEndpointTypesResponse
 */
export interface DescribeEndpointTypesResponse {
  /**
   * @schema DescribeEndpointTypesResponse#Marker
   */
  readonly marker?: string;

  /**
   * @schema DescribeEndpointTypesResponse#SupportedEndpointTypes
   */
  readonly supportedEndpointTypes?: SupportedEndpointType[];

}

/**
 * @schema DescribeEndpointsMessage
 */
export interface DescribeEndpointsMessage {
  /**
   * @schema DescribeEndpointsMessage#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeEndpointsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeEndpointsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DescribeEndpointsResponse
 */
export interface DescribeEndpointsResponse {
  /**
   * @schema DescribeEndpointsResponse#Marker
   */
  readonly marker?: string;

  /**
   * @schema DescribeEndpointsResponse#Endpoints
   */
  readonly endpoints?: Endpoint[];

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
 * @schema DescribeEventCategoriesResponse
 */
export interface DescribeEventCategoriesResponse {
  /**
   * @schema DescribeEventCategoriesResponse#EventCategoryGroupList
   */
  readonly eventCategoryGroupList?: EventCategoryGroup[];

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
 * @schema DescribeEventSubscriptionsResponse
 */
export interface DescribeEventSubscriptionsResponse {
  /**
   * @schema DescribeEventSubscriptionsResponse#Marker
   */
  readonly marker?: string;

  /**
   * @schema DescribeEventSubscriptionsResponse#EventSubscriptionsList
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
 * @schema DescribeEventsResponse
 */
export interface DescribeEventsResponse {
  /**
   * @schema DescribeEventsResponse#Marker
   */
  readonly marker?: string;

  /**
   * @schema DescribeEventsResponse#Events
   */
  readonly events?: Event[];

}

/**
 * @schema DescribeOrderableReplicationInstancesMessage
 */
export interface DescribeOrderableReplicationInstancesMessage {
  /**
   * @schema DescribeOrderableReplicationInstancesMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeOrderableReplicationInstancesMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DescribeOrderableReplicationInstancesResponse
 */
export interface DescribeOrderableReplicationInstancesResponse {
  /**
   * @schema DescribeOrderableReplicationInstancesResponse#OrderableReplicationInstances
   */
  readonly orderableReplicationInstances?: OrderableReplicationInstance[];

  /**
   * @schema DescribeOrderableReplicationInstancesResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DescribePendingMaintenanceActionsMessage
 */
export interface DescribePendingMaintenanceActionsMessage {
  /**
   * @schema DescribePendingMaintenanceActionsMessage#ReplicationInstanceArn
   */
  readonly replicationInstanceArn?: string;

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
 * @schema DescribePendingMaintenanceActionsResponse
 */
export interface DescribePendingMaintenanceActionsResponse {
  /**
   * @schema DescribePendingMaintenanceActionsResponse#PendingMaintenanceActions
   */
  readonly pendingMaintenanceActions?: ResourcePendingMaintenanceActions[];

  /**
   * @schema DescribePendingMaintenanceActionsResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DescribeRefreshSchemasStatusMessage
 */
export interface DescribeRefreshSchemasStatusMessage {
  /**
   * @schema DescribeRefreshSchemasStatusMessage#EndpointArn
   */
  readonly endpointArn: string;

}

/**
 * @schema DescribeRefreshSchemasStatusResponse
 */
export interface DescribeRefreshSchemasStatusResponse {
  /**
   * @schema DescribeRefreshSchemasStatusResponse#RefreshSchemasStatus
   */
  readonly refreshSchemasStatus?: RefreshSchemasStatus;

}

/**
 * @schema DescribeReplicationInstanceTaskLogsMessage
 */
export interface DescribeReplicationInstanceTaskLogsMessage {
  /**
   * @schema DescribeReplicationInstanceTaskLogsMessage#ReplicationInstanceArn
   */
  readonly replicationInstanceArn: string;

  /**
   * @schema DescribeReplicationInstanceTaskLogsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeReplicationInstanceTaskLogsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DescribeReplicationInstanceTaskLogsResponse
 */
export interface DescribeReplicationInstanceTaskLogsResponse {
  /**
   * @schema DescribeReplicationInstanceTaskLogsResponse#ReplicationInstanceArn
   */
  readonly replicationInstanceArn?: string;

  /**
   * @schema DescribeReplicationInstanceTaskLogsResponse#ReplicationInstanceTaskLogs
   */
  readonly replicationInstanceTaskLogs?: ReplicationInstanceTaskLog[];

  /**
   * @schema DescribeReplicationInstanceTaskLogsResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DescribeReplicationInstancesMessage
 */
export interface DescribeReplicationInstancesMessage {
  /**
   * @schema DescribeReplicationInstancesMessage#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeReplicationInstancesMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeReplicationInstancesMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DescribeReplicationInstancesResponse
 */
export interface DescribeReplicationInstancesResponse {
  /**
   * @schema DescribeReplicationInstancesResponse#Marker
   */
  readonly marker?: string;

  /**
   * @schema DescribeReplicationInstancesResponse#ReplicationInstances
   */
  readonly replicationInstances?: ReplicationInstance[];

}

/**
 * @schema DescribeReplicationSubnetGroupsMessage
 */
export interface DescribeReplicationSubnetGroupsMessage {
  /**
   * @schema DescribeReplicationSubnetGroupsMessage#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeReplicationSubnetGroupsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeReplicationSubnetGroupsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DescribeReplicationSubnetGroupsResponse
 */
export interface DescribeReplicationSubnetGroupsResponse {
  /**
   * @schema DescribeReplicationSubnetGroupsResponse#Marker
   */
  readonly marker?: string;

  /**
   * @schema DescribeReplicationSubnetGroupsResponse#ReplicationSubnetGroups
   */
  readonly replicationSubnetGroups?: ReplicationSubnetGroup[];

}

/**
 * @schema DescribeReplicationTaskAssessmentResultsMessage
 */
export interface DescribeReplicationTaskAssessmentResultsMessage {
  /**
   * @schema DescribeReplicationTaskAssessmentResultsMessage#ReplicationTaskArn
   */
  readonly replicationTaskArn?: string;

  /**
   * @schema DescribeReplicationTaskAssessmentResultsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeReplicationTaskAssessmentResultsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DescribeReplicationTaskAssessmentResultsResponse
 */
export interface DescribeReplicationTaskAssessmentResultsResponse {
  /**
   * @schema DescribeReplicationTaskAssessmentResultsResponse#Marker
   */
  readonly marker?: string;

  /**
   * @schema DescribeReplicationTaskAssessmentResultsResponse#BucketName
   */
  readonly bucketName?: string;

  /**
   * @schema DescribeReplicationTaskAssessmentResultsResponse#ReplicationTaskAssessmentResults
   */
  readonly replicationTaskAssessmentResults?: ReplicationTaskAssessmentResult[];

}

/**
 * @schema DescribeReplicationTaskAssessmentRunsMessage
 */
export interface DescribeReplicationTaskAssessmentRunsMessage {
  /**
   * @schema DescribeReplicationTaskAssessmentRunsMessage#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeReplicationTaskAssessmentRunsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeReplicationTaskAssessmentRunsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DescribeReplicationTaskAssessmentRunsResponse
 */
export interface DescribeReplicationTaskAssessmentRunsResponse {
  /**
   * @schema DescribeReplicationTaskAssessmentRunsResponse#Marker
   */
  readonly marker?: string;

  /**
   * @schema DescribeReplicationTaskAssessmentRunsResponse#ReplicationTaskAssessmentRuns
   */
  readonly replicationTaskAssessmentRuns?: ReplicationTaskAssessmentRun[];

}

/**
 * @schema DescribeReplicationTaskIndividualAssessmentsMessage
 */
export interface DescribeReplicationTaskIndividualAssessmentsMessage {
  /**
   * @schema DescribeReplicationTaskIndividualAssessmentsMessage#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeReplicationTaskIndividualAssessmentsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeReplicationTaskIndividualAssessmentsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DescribeReplicationTaskIndividualAssessmentsResponse
 */
export interface DescribeReplicationTaskIndividualAssessmentsResponse {
  /**
   * @schema DescribeReplicationTaskIndividualAssessmentsResponse#Marker
   */
  readonly marker?: string;

  /**
   * @schema DescribeReplicationTaskIndividualAssessmentsResponse#ReplicationTaskIndividualAssessments
   */
  readonly replicationTaskIndividualAssessments?: ReplicationTaskIndividualAssessment[];

}

/**
 * @schema DescribeReplicationTasksMessage
 */
export interface DescribeReplicationTasksMessage {
  /**
   * @schema DescribeReplicationTasksMessage#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeReplicationTasksMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeReplicationTasksMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DescribeReplicationTasksMessage#WithoutSettings
   */
  readonly withoutSettings?: boolean;

}

/**
 * @schema DescribeReplicationTasksResponse
 */
export interface DescribeReplicationTasksResponse {
  /**
   * @schema DescribeReplicationTasksResponse#Marker
   */
  readonly marker?: string;

  /**
   * @schema DescribeReplicationTasksResponse#ReplicationTasks
   */
  readonly replicationTasks?: ReplicationTask[];

}

/**
 * @schema DescribeSchemasMessage
 */
export interface DescribeSchemasMessage {
  /**
   * @schema DescribeSchemasMessage#EndpointArn
   */
  readonly endpointArn: string;

  /**
   * @schema DescribeSchemasMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeSchemasMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DescribeSchemasResponse
 */
export interface DescribeSchemasResponse {
  /**
   * @schema DescribeSchemasResponse#Marker
   */
  readonly marker?: string;

  /**
   * @schema DescribeSchemasResponse#Schemas
   */
  readonly schemas?: string[];

}

/**
 * @schema DescribeTableStatisticsMessage
 */
export interface DescribeTableStatisticsMessage {
  /**
   * @schema DescribeTableStatisticsMessage#ReplicationTaskArn
   */
  readonly replicationTaskArn: string;

  /**
   * @schema DescribeTableStatisticsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeTableStatisticsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DescribeTableStatisticsMessage#Filters
   */
  readonly filters?: Filter[];

}

/**
 * @schema DescribeTableStatisticsResponse
 */
export interface DescribeTableStatisticsResponse {
  /**
   * @schema DescribeTableStatisticsResponse#ReplicationTaskArn
   */
  readonly replicationTaskArn?: string;

  /**
   * @schema DescribeTableStatisticsResponse#TableStatistics
   */
  readonly tableStatistics?: TableStatistics[];

  /**
   * @schema DescribeTableStatisticsResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema ImportCertificateMessage
 */
export interface ImportCertificateMessage {
  /**
   * @schema ImportCertificateMessage#CertificateIdentifier
   */
  readonly certificateIdentifier: string;

  /**
   * @schema ImportCertificateMessage#CertificatePem
   */
  readonly certificatePem?: string;

  /**
   * @schema ImportCertificateMessage#CertificateWallet
   */
  readonly certificateWallet?: any;

  /**
   * @schema ImportCertificateMessage#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema ImportCertificateResponse
 */
export interface ImportCertificateResponse {
  /**
   * @schema ImportCertificateResponse#Certificate
   */
  readonly certificate?: Certificate;

}

/**
 * @schema ListTagsForResourceMessage
 */
export interface ListTagsForResourceMessage {
  /**
   * @schema ListTagsForResourceMessage#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema ListTagsForResourceResponse
 */
export interface ListTagsForResourceResponse {
  /**
   * @schema ListTagsForResourceResponse#TagList
   */
  readonly tagList?: Tag[];

}

/**
 * @schema ModifyEndpointMessage
 */
export interface ModifyEndpointMessage {
  /**
   * @schema ModifyEndpointMessage#EndpointArn
   */
  readonly endpointArn: string;

  /**
   * @schema ModifyEndpointMessage#EndpointIdentifier
   */
  readonly endpointIdentifier?: string;

  /**
   * @schema ModifyEndpointMessage#EndpointType
   */
  readonly endpointType?: string;

  /**
   * @schema ModifyEndpointMessage#EngineName
   */
  readonly engineName?: string;

  /**
   * @schema ModifyEndpointMessage#Username
   */
  readonly username?: string;

  /**
   * @schema ModifyEndpointMessage#Password
   */
  readonly password?: string;

  /**
   * @schema ModifyEndpointMessage#ServerName
   */
  readonly serverName?: string;

  /**
   * @schema ModifyEndpointMessage#Port
   */
  readonly port?: number;

  /**
   * @schema ModifyEndpointMessage#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema ModifyEndpointMessage#ExtraConnectionAttributes
   */
  readonly extraConnectionAttributes?: string;

  /**
   * @schema ModifyEndpointMessage#CertificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema ModifyEndpointMessage#SslMode
   */
  readonly sslMode?: string;

  /**
   * @schema ModifyEndpointMessage#ServiceAccessRoleArn
   */
  readonly serviceAccessRoleArn?: string;

  /**
   * @schema ModifyEndpointMessage#ExternalTableDefinition
   */
  readonly externalTableDefinition?: string;

  /**
   * @schema ModifyEndpointMessage#DynamoDbSettings
   */
  readonly dynamoDbSettings?: DynamoDbSettings;

  /**
   * @schema ModifyEndpointMessage#S3Settings
   */
  readonly s3Settings?: S3Settings;

  /**
   * @schema ModifyEndpointMessage#DmsTransferSettings
   */
  readonly dmsTransferSettings?: DmsTransferSettings;

  /**
   * @schema ModifyEndpointMessage#MongoDbSettings
   */
  readonly mongoDbSettings?: MongoDbSettings;

  /**
   * @schema ModifyEndpointMessage#KinesisSettings
   */
  readonly kinesisSettings?: KinesisSettings;

  /**
   * @schema ModifyEndpointMessage#KafkaSettings
   */
  readonly kafkaSettings?: KafkaSettings;

  /**
   * @schema ModifyEndpointMessage#ElasticsearchSettings
   */
  readonly elasticsearchSettings?: ElasticsearchSettings;

  /**
   * @schema ModifyEndpointMessage#NeptuneSettings
   */
  readonly neptuneSettings?: NeptuneSettings;

  /**
   * @schema ModifyEndpointMessage#RedshiftSettings
   */
  readonly redshiftSettings?: RedshiftSettings;

  /**
   * @schema ModifyEndpointMessage#PostgreSQLSettings
   */
  readonly postgreSqlSettings?: PostgreSqlSettings;

  /**
   * @schema ModifyEndpointMessage#MySQLSettings
   */
  readonly mySqlSettings?: MySqlSettings;

  /**
   * @schema ModifyEndpointMessage#OracleSettings
   */
  readonly oracleSettings?: OracleSettings;

  /**
   * @schema ModifyEndpointMessage#SybaseSettings
   */
  readonly sybaseSettings?: SybaseSettings;

  /**
   * @schema ModifyEndpointMessage#MicrosoftSQLServerSettings
   */
  readonly microsoftSqlServerSettings?: MicrosoftSqlServerSettings;

  /**
   * @schema ModifyEndpointMessage#IBMDb2Settings
   */
  readonly ibmDb2Settings?: IbmDb2Settings;

  /**
   * @schema ModifyEndpointMessage#DocDbSettings
   */
  readonly docDbSettings?: DocDbSettings;

}

/**
 * @schema ModifyEndpointResponse
 */
export interface ModifyEndpointResponse {
  /**
   * @schema ModifyEndpointResponse#Endpoint
   */
  readonly endpoint?: Endpoint;

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
 * @schema ModifyEventSubscriptionResponse
 */
export interface ModifyEventSubscriptionResponse {
  /**
   * @schema ModifyEventSubscriptionResponse#EventSubscription
   */
  readonly eventSubscription?: EventSubscription;

}

/**
 * @schema ModifyReplicationInstanceMessage
 */
export interface ModifyReplicationInstanceMessage {
  /**
   * @schema ModifyReplicationInstanceMessage#ReplicationInstanceArn
   */
  readonly replicationInstanceArn: string;

  /**
   * @schema ModifyReplicationInstanceMessage#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema ModifyReplicationInstanceMessage#ApplyImmediately
   */
  readonly applyImmediately?: boolean;

  /**
   * @schema ModifyReplicationInstanceMessage#ReplicationInstanceClass
   */
  readonly replicationInstanceClass?: string;

  /**
   * @schema ModifyReplicationInstanceMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema ModifyReplicationInstanceMessage#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema ModifyReplicationInstanceMessage#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema ModifyReplicationInstanceMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema ModifyReplicationInstanceMessage#AllowMajorVersionUpgrade
   */
  readonly allowMajorVersionUpgrade?: boolean;

  /**
   * @schema ModifyReplicationInstanceMessage#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema ModifyReplicationInstanceMessage#ReplicationInstanceIdentifier
   */
  readonly replicationInstanceIdentifier?: string;

}

/**
 * @schema ModifyReplicationInstanceResponse
 */
export interface ModifyReplicationInstanceResponse {
  /**
   * @schema ModifyReplicationInstanceResponse#ReplicationInstance
   */
  readonly replicationInstance?: ReplicationInstance;

}

/**
 * @schema ModifyReplicationSubnetGroupMessage
 */
export interface ModifyReplicationSubnetGroupMessage {
  /**
   * @schema ModifyReplicationSubnetGroupMessage#ReplicationSubnetGroupIdentifier
   */
  readonly replicationSubnetGroupIdentifier: string;

  /**
   * @schema ModifyReplicationSubnetGroupMessage#ReplicationSubnetGroupDescription
   */
  readonly replicationSubnetGroupDescription?: string;

  /**
   * @schema ModifyReplicationSubnetGroupMessage#SubnetIds
   */
  readonly subnetIds: string[];

}

/**
 * @schema ModifyReplicationSubnetGroupResponse
 */
export interface ModifyReplicationSubnetGroupResponse {
  /**
   * @schema ModifyReplicationSubnetGroupResponse#ReplicationSubnetGroup
   */
  readonly replicationSubnetGroup?: ReplicationSubnetGroup;

}

/**
 * @schema ModifyReplicationTaskMessage
 */
export interface ModifyReplicationTaskMessage {
  /**
   * @schema ModifyReplicationTaskMessage#ReplicationTaskArn
   */
  readonly replicationTaskArn: string;

  /**
   * @schema ModifyReplicationTaskMessage#ReplicationTaskIdentifier
   */
  readonly replicationTaskIdentifier?: string;

  /**
   * @schema ModifyReplicationTaskMessage#MigrationType
   */
  readonly migrationType?: string;

  /**
   * @schema ModifyReplicationTaskMessage#TableMappings
   */
  readonly tableMappings?: string;

  /**
   * @schema ModifyReplicationTaskMessage#ReplicationTaskSettings
   */
  readonly replicationTaskSettings?: string;

  /**
   * @schema ModifyReplicationTaskMessage#CdcStartTime
   */
  readonly cdcStartTime?: string;

  /**
   * @schema ModifyReplicationTaskMessage#CdcStartPosition
   */
  readonly cdcStartPosition?: string;

  /**
   * @schema ModifyReplicationTaskMessage#CdcStopPosition
   */
  readonly cdcStopPosition?: string;

  /**
   * @schema ModifyReplicationTaskMessage#TaskData
   */
  readonly taskData?: string;

}

/**
 * @schema ModifyReplicationTaskResponse
 */
export interface ModifyReplicationTaskResponse {
  /**
   * @schema ModifyReplicationTaskResponse#ReplicationTask
   */
  readonly replicationTask?: ReplicationTask;

}

/**
 * @schema MoveReplicationTaskMessage
 */
export interface MoveReplicationTaskMessage {
  /**
   * @schema MoveReplicationTaskMessage#ReplicationTaskArn
   */
  readonly replicationTaskArn: string;

  /**
   * @schema MoveReplicationTaskMessage#TargetReplicationInstanceArn
   */
  readonly targetReplicationInstanceArn: string;

}

/**
 * @schema MoveReplicationTaskResponse
 */
export interface MoveReplicationTaskResponse {
  /**
   * @schema MoveReplicationTaskResponse#ReplicationTask
   */
  readonly replicationTask?: ReplicationTask;

}

/**
 * @schema RebootReplicationInstanceMessage
 */
export interface RebootReplicationInstanceMessage {
  /**
   * @schema RebootReplicationInstanceMessage#ReplicationInstanceArn
   */
  readonly replicationInstanceArn: string;

  /**
   * @schema RebootReplicationInstanceMessage#ForceFailover
   */
  readonly forceFailover?: boolean;

}

/**
 * @schema RebootReplicationInstanceResponse
 */
export interface RebootReplicationInstanceResponse {
  /**
   * @schema RebootReplicationInstanceResponse#ReplicationInstance
   */
  readonly replicationInstance?: ReplicationInstance;

}

/**
 * @schema RefreshSchemasMessage
 */
export interface RefreshSchemasMessage {
  /**
   * @schema RefreshSchemasMessage#EndpointArn
   */
  readonly endpointArn: string;

  /**
   * @schema RefreshSchemasMessage#ReplicationInstanceArn
   */
  readonly replicationInstanceArn: string;

}

/**
 * @schema RefreshSchemasResponse
 */
export interface RefreshSchemasResponse {
  /**
   * @schema RefreshSchemasResponse#RefreshSchemasStatus
   */
  readonly refreshSchemasStatus?: RefreshSchemasStatus;

}

/**
 * @schema ReloadTablesMessage
 */
export interface ReloadTablesMessage {
  /**
   * @schema ReloadTablesMessage#ReplicationTaskArn
   */
  readonly replicationTaskArn: string;

  /**
   * @schema ReloadTablesMessage#TablesToReload
   */
  readonly tablesToReload: TableToReload[];

  /**
   * @schema ReloadTablesMessage#ReloadOption
   */
  readonly reloadOption?: string;

}

/**
 * @schema ReloadTablesResponse
 */
export interface ReloadTablesResponse {
  /**
   * @schema ReloadTablesResponse#ReplicationTaskArn
   */
  readonly replicationTaskArn?: string;

}

/**
 * @schema RemoveTagsFromResourceMessage
 */
export interface RemoveTagsFromResourceMessage {
  /**
   * @schema RemoveTagsFromResourceMessage#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema RemoveTagsFromResourceMessage#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema RemoveTagsFromResourceResponse
 */
export interface RemoveTagsFromResourceResponse {
}

/**
 * @schema StartReplicationTaskMessage
 */
export interface StartReplicationTaskMessage {
  /**
   * @schema StartReplicationTaskMessage#ReplicationTaskArn
   */
  readonly replicationTaskArn: string;

  /**
   * @schema StartReplicationTaskMessage#StartReplicationTaskType
   */
  readonly startReplicationTaskType: string;

  /**
   * @schema StartReplicationTaskMessage#CdcStartTime
   */
  readonly cdcStartTime?: string;

  /**
   * @schema StartReplicationTaskMessage#CdcStartPosition
   */
  readonly cdcStartPosition?: string;

  /**
   * @schema StartReplicationTaskMessage#CdcStopPosition
   */
  readonly cdcStopPosition?: string;

}

/**
 * @schema StartReplicationTaskResponse
 */
export interface StartReplicationTaskResponse {
  /**
   * @schema StartReplicationTaskResponse#ReplicationTask
   */
  readonly replicationTask?: ReplicationTask;

}

/**
 * @schema StartReplicationTaskAssessmentMessage
 */
export interface StartReplicationTaskAssessmentMessage {
  /**
   * @schema StartReplicationTaskAssessmentMessage#ReplicationTaskArn
   */
  readonly replicationTaskArn: string;

}

/**
 * @schema StartReplicationTaskAssessmentResponse
 */
export interface StartReplicationTaskAssessmentResponse {
  /**
   * @schema StartReplicationTaskAssessmentResponse#ReplicationTask
   */
  readonly replicationTask?: ReplicationTask;

}

/**
 * @schema StartReplicationTaskAssessmentRunMessage
 */
export interface StartReplicationTaskAssessmentRunMessage {
  /**
   * @schema StartReplicationTaskAssessmentRunMessage#ReplicationTaskArn
   */
  readonly replicationTaskArn: string;

  /**
   * @schema StartReplicationTaskAssessmentRunMessage#ServiceAccessRoleArn
   */
  readonly serviceAccessRoleArn: string;

  /**
   * @schema StartReplicationTaskAssessmentRunMessage#ResultLocationBucket
   */
  readonly resultLocationBucket: string;

  /**
   * @schema StartReplicationTaskAssessmentRunMessage#ResultLocationFolder
   */
  readonly resultLocationFolder?: string;

  /**
   * @schema StartReplicationTaskAssessmentRunMessage#ResultEncryptionMode
   */
  readonly resultEncryptionMode?: string;

  /**
   * @schema StartReplicationTaskAssessmentRunMessage#ResultKmsKeyArn
   */
  readonly resultKmsKeyArn?: string;

  /**
   * @schema StartReplicationTaskAssessmentRunMessage#AssessmentRunName
   */
  readonly assessmentRunName: string;

  /**
   * @schema StartReplicationTaskAssessmentRunMessage#IncludeOnly
   */
  readonly includeOnly?: string[];

  /**
   * @schema StartReplicationTaskAssessmentRunMessage#Exclude
   */
  readonly exclude?: string[];

}

/**
 * @schema StartReplicationTaskAssessmentRunResponse
 */
export interface StartReplicationTaskAssessmentRunResponse {
  /**
   * @schema StartReplicationTaskAssessmentRunResponse#ReplicationTaskAssessmentRun
   */
  readonly replicationTaskAssessmentRun?: ReplicationTaskAssessmentRun;

}

/**
 * @schema StopReplicationTaskMessage
 */
export interface StopReplicationTaskMessage {
  /**
   * @schema StopReplicationTaskMessage#ReplicationTaskArn
   */
  readonly replicationTaskArn: string;

}

/**
 * @schema StopReplicationTaskResponse
 */
export interface StopReplicationTaskResponse {
  /**
   * @schema StopReplicationTaskResponse#ReplicationTask
   */
  readonly replicationTask?: ReplicationTask;

}

/**
 * @schema TestConnectionMessage
 */
export interface TestConnectionMessage {
  /**
   * @schema TestConnectionMessage#ReplicationInstanceArn
   */
  readonly replicationInstanceArn: string;

  /**
   * @schema TestConnectionMessage#EndpointArn
   */
  readonly endpointArn: string;

}

/**
 * @schema TestConnectionResponse
 */
export interface TestConnectionResponse {
  /**
   * @schema TestConnectionResponse#Connection
   */
  readonly connection?: Connection;

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
 * @schema ReplicationTaskAssessmentRun
 */
export interface ReplicationTaskAssessmentRun {
  /**
   * @schema ReplicationTaskAssessmentRun#ReplicationTaskAssessmentRunArn
   */
  readonly replicationTaskAssessmentRunArn?: string;

  /**
   * @schema ReplicationTaskAssessmentRun#ReplicationTaskArn
   */
  readonly replicationTaskArn?: string;

  /**
   * @schema ReplicationTaskAssessmentRun#Status
   */
  readonly status?: string;

  /**
   * @schema ReplicationTaskAssessmentRun#ReplicationTaskAssessmentRunCreationDate
   */
  readonly replicationTaskAssessmentRunCreationDate?: string;

  /**
   * @schema ReplicationTaskAssessmentRun#AssessmentProgress
   */
  readonly assessmentProgress?: ReplicationTaskAssessmentRunProgress;

  /**
   * @schema ReplicationTaskAssessmentRun#LastFailureMessage
   */
  readonly lastFailureMessage?: string;

  /**
   * @schema ReplicationTaskAssessmentRun#ServiceAccessRoleArn
   */
  readonly serviceAccessRoleArn?: string;

  /**
   * @schema ReplicationTaskAssessmentRun#ResultLocationBucket
   */
  readonly resultLocationBucket?: string;

  /**
   * @schema ReplicationTaskAssessmentRun#ResultLocationFolder
   */
  readonly resultLocationFolder?: string;

  /**
   * @schema ReplicationTaskAssessmentRun#ResultEncryptionMode
   */
  readonly resultEncryptionMode?: string;

  /**
   * @schema ReplicationTaskAssessmentRun#ResultKmsKeyArn
   */
  readonly resultKmsKeyArn?: string;

  /**
   * @schema ReplicationTaskAssessmentRun#AssessmentRunName
   */
  readonly assessmentRunName?: string;

}

/**
 * @schema DynamoDbSettings
 */
export interface DynamoDbSettings {
  /**
   * @schema DynamoDbSettings#ServiceAccessRoleArn
   */
  readonly serviceAccessRoleArn: string;

}

/**
 * @schema S3Settings
 */
export interface S3Settings {
  /**
   * @schema S3Settings#ServiceAccessRoleArn
   */
  readonly serviceAccessRoleArn?: string;

  /**
   * @schema S3Settings#ExternalTableDefinition
   */
  readonly externalTableDefinition?: string;

  /**
   * @schema S3Settings#CsvRowDelimiter
   */
  readonly csvRowDelimiter?: string;

  /**
   * @schema S3Settings#CsvDelimiter
   */
  readonly csvDelimiter?: string;

  /**
   * @schema S3Settings#BucketFolder
   */
  readonly bucketFolder?: string;

  /**
   * @schema S3Settings#BucketName
   */
  readonly bucketName?: string;

  /**
   * @schema S3Settings#CompressionType
   */
  readonly compressionType?: string;

  /**
   * @schema S3Settings#EncryptionMode
   */
  readonly encryptionMode?: string;

  /**
   * @schema S3Settings#ServerSideEncryptionKmsKeyId
   */
  readonly serverSideEncryptionKmsKeyId?: string;

  /**
   * @schema S3Settings#DataFormat
   */
  readonly dataFormat?: string;

  /**
   * @schema S3Settings#EncodingType
   */
  readonly encodingType?: string;

  /**
   * @schema S3Settings#DictPageSizeLimit
   */
  readonly dictPageSizeLimit?: number;

  /**
   * @schema S3Settings#RowGroupLength
   */
  readonly rowGroupLength?: number;

  /**
   * @schema S3Settings#DataPageSize
   */
  readonly dataPageSize?: number;

  /**
   * @schema S3Settings#ParquetVersion
   */
  readonly parquetVersion?: string;

  /**
   * @schema S3Settings#EnableStatistics
   */
  readonly enableStatistics?: boolean;

  /**
   * @schema S3Settings#IncludeOpForFullLoad
   */
  readonly includeOpForFullLoad?: boolean;

  /**
   * @schema S3Settings#CdcInsertsOnly
   */
  readonly cdcInsertsOnly?: boolean;

  /**
   * @schema S3Settings#TimestampColumnName
   */
  readonly timestampColumnName?: string;

  /**
   * @schema S3Settings#ParquetTimestampInMillisecond
   */
  readonly parquetTimestampInMillisecond?: boolean;

  /**
   * @schema S3Settings#CdcInsertsAndUpdates
   */
  readonly cdcInsertsAndUpdates?: boolean;

  /**
   * @schema S3Settings#DatePartitionEnabled
   */
  readonly datePartitionEnabled?: boolean;

  /**
   * @schema S3Settings#DatePartitionSequence
   */
  readonly datePartitionSequence?: string;

  /**
   * @schema S3Settings#DatePartitionDelimiter
   */
  readonly datePartitionDelimiter?: string;

}

/**
 * @schema DmsTransferSettings
 */
export interface DmsTransferSettings {
  /**
   * @schema DmsTransferSettings#ServiceAccessRoleArn
   */
  readonly serviceAccessRoleArn?: string;

  /**
   * @schema DmsTransferSettings#BucketName
   */
  readonly bucketName?: string;

}

/**
 * @schema MongoDbSettings
 */
export interface MongoDbSettings {
  /**
   * @schema MongoDbSettings#Username
   */
  readonly username?: string;

  /**
   * @schema MongoDbSettings#Password
   */
  readonly password?: string;

  /**
   * @schema MongoDbSettings#ServerName
   */
  readonly serverName?: string;

  /**
   * @schema MongoDbSettings#Port
   */
  readonly port?: number;

  /**
   * @schema MongoDbSettings#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema MongoDbSettings#AuthType
   */
  readonly authType?: string;

  /**
   * @schema MongoDbSettings#AuthMechanism
   */
  readonly authMechanism?: string;

  /**
   * @schema MongoDbSettings#NestingLevel
   */
  readonly nestingLevel?: string;

  /**
   * @schema MongoDbSettings#ExtractDocId
   */
  readonly extractDocId?: string;

  /**
   * @schema MongoDbSettings#DocsToInvestigate
   */
  readonly docsToInvestigate?: string;

  /**
   * @schema MongoDbSettings#AuthSource
   */
  readonly authSource?: string;

  /**
   * @schema MongoDbSettings#KmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * @schema KinesisSettings
 */
export interface KinesisSettings {
  /**
   * @schema KinesisSettings#StreamArn
   */
  readonly streamArn?: string;

  /**
   * @schema KinesisSettings#MessageFormat
   */
  readonly messageFormat?: string;

  /**
   * @schema KinesisSettings#ServiceAccessRoleArn
   */
  readonly serviceAccessRoleArn?: string;

  /**
   * @schema KinesisSettings#IncludeTransactionDetails
   */
  readonly includeTransactionDetails?: boolean;

  /**
   * @schema KinesisSettings#IncludePartitionValue
   */
  readonly includePartitionValue?: boolean;

  /**
   * @schema KinesisSettings#PartitionIncludeSchemaTable
   */
  readonly partitionIncludeSchemaTable?: boolean;

  /**
   * @schema KinesisSettings#IncludeTableAlterOperations
   */
  readonly includeTableAlterOperations?: boolean;

  /**
   * @schema KinesisSettings#IncludeControlDetails
   */
  readonly includeControlDetails?: boolean;

  /**
   * @schema KinesisSettings#IncludeNullAndEmpty
   */
  readonly includeNullAndEmpty?: boolean;

}

/**
 * @schema KafkaSettings
 */
export interface KafkaSettings {
  /**
   * @schema KafkaSettings#Broker
   */
  readonly broker?: string;

  /**
   * @schema KafkaSettings#Topic
   */
  readonly topic?: string;

  /**
   * @schema KafkaSettings#MessageFormat
   */
  readonly messageFormat?: string;

  /**
   * @schema KafkaSettings#IncludeTransactionDetails
   */
  readonly includeTransactionDetails?: boolean;

  /**
   * @schema KafkaSettings#IncludePartitionValue
   */
  readonly includePartitionValue?: boolean;

  /**
   * @schema KafkaSettings#PartitionIncludeSchemaTable
   */
  readonly partitionIncludeSchemaTable?: boolean;

  /**
   * @schema KafkaSettings#IncludeTableAlterOperations
   */
  readonly includeTableAlterOperations?: boolean;

  /**
   * @schema KafkaSettings#IncludeControlDetails
   */
  readonly includeControlDetails?: boolean;

  /**
   * @schema KafkaSettings#MessageMaxBytes
   */
  readonly messageMaxBytes?: number;

  /**
   * @schema KafkaSettings#IncludeNullAndEmpty
   */
  readonly includeNullAndEmpty?: boolean;

}

/**
 * @schema ElasticsearchSettings
 */
export interface ElasticsearchSettings {
  /**
   * @schema ElasticsearchSettings#ServiceAccessRoleArn
   */
  readonly serviceAccessRoleArn: string;

  /**
   * @schema ElasticsearchSettings#EndpointUri
   */
  readonly endpointUri: string;

  /**
   * @schema ElasticsearchSettings#FullLoadErrorPercentage
   */
  readonly fullLoadErrorPercentage?: number;

  /**
   * @schema ElasticsearchSettings#ErrorRetryDuration
   */
  readonly errorRetryDuration?: number;

}

/**
 * @schema NeptuneSettings
 */
export interface NeptuneSettings {
  /**
   * @schema NeptuneSettings#ServiceAccessRoleArn
   */
  readonly serviceAccessRoleArn?: string;

  /**
   * @schema NeptuneSettings#S3BucketName
   */
  readonly s3BucketName: string;

  /**
   * @schema NeptuneSettings#S3BucketFolder
   */
  readonly s3BucketFolder: string;

  /**
   * @schema NeptuneSettings#ErrorRetryDuration
   */
  readonly errorRetryDuration?: number;

  /**
   * @schema NeptuneSettings#MaxFileSize
   */
  readonly maxFileSize?: number;

  /**
   * @schema NeptuneSettings#MaxRetryCount
   */
  readonly maxRetryCount?: number;

  /**
   * @schema NeptuneSettings#IamAuthEnabled
   */
  readonly iamAuthEnabled?: boolean;

}

/**
 * @schema RedshiftSettings
 */
export interface RedshiftSettings {
  /**
   * @schema RedshiftSettings#AcceptAnyDate
   */
  readonly acceptAnyDate?: boolean;

  /**
   * @schema RedshiftSettings#AfterConnectScript
   */
  readonly afterConnectScript?: string;

  /**
   * @schema RedshiftSettings#BucketFolder
   */
  readonly bucketFolder?: string;

  /**
   * @schema RedshiftSettings#BucketName
   */
  readonly bucketName?: string;

  /**
   * @schema RedshiftSettings#CaseSensitiveNames
   */
  readonly caseSensitiveNames?: boolean;

  /**
   * @schema RedshiftSettings#CompUpdate
   */
  readonly compUpdate?: boolean;

  /**
   * @schema RedshiftSettings#ConnectionTimeout
   */
  readonly connectionTimeout?: number;

  /**
   * @schema RedshiftSettings#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema RedshiftSettings#DateFormat
   */
  readonly dateFormat?: string;

  /**
   * @schema RedshiftSettings#EmptyAsNull
   */
  readonly emptyAsNull?: boolean;

  /**
   * @schema RedshiftSettings#EncryptionMode
   */
  readonly encryptionMode?: string;

  /**
   * @schema RedshiftSettings#ExplicitIds
   */
  readonly explicitIds?: boolean;

  /**
   * @schema RedshiftSettings#FileTransferUploadStreams
   */
  readonly fileTransferUploadStreams?: number;

  /**
   * @schema RedshiftSettings#LoadTimeout
   */
  readonly loadTimeout?: number;

  /**
   * @schema RedshiftSettings#MaxFileSize
   */
  readonly maxFileSize?: number;

  /**
   * @schema RedshiftSettings#Password
   */
  readonly password?: string;

  /**
   * @schema RedshiftSettings#Port
   */
  readonly port?: number;

  /**
   * @schema RedshiftSettings#RemoveQuotes
   */
  readonly removeQuotes?: boolean;

  /**
   * @schema RedshiftSettings#ReplaceInvalidChars
   */
  readonly replaceInvalidChars?: string;

  /**
   * @schema RedshiftSettings#ReplaceChars
   */
  readonly replaceChars?: string;

  /**
   * @schema RedshiftSettings#ServerName
   */
  readonly serverName?: string;

  /**
   * @schema RedshiftSettings#ServiceAccessRoleArn
   */
  readonly serviceAccessRoleArn?: string;

  /**
   * @schema RedshiftSettings#ServerSideEncryptionKmsKeyId
   */
  readonly serverSideEncryptionKmsKeyId?: string;

  /**
   * @schema RedshiftSettings#TimeFormat
   */
  readonly timeFormat?: string;

  /**
   * @schema RedshiftSettings#TrimBlanks
   */
  readonly trimBlanks?: boolean;

  /**
   * @schema RedshiftSettings#TruncateColumns
   */
  readonly truncateColumns?: boolean;

  /**
   * @schema RedshiftSettings#Username
   */
  readonly username?: string;

  /**
   * @schema RedshiftSettings#WriteBufferSize
   */
  readonly writeBufferSize?: number;

}

/**
 * @schema PostgreSqlSettings
 */
export interface PostgreSqlSettings {
  /**
   * @schema PostgreSqlSettings#AfterConnectScript
   */
  readonly afterConnectScript?: string;

  /**
   * @schema PostgreSqlSettings#CaptureDdls
   */
  readonly captureDdls?: boolean;

  /**
   * @schema PostgreSqlSettings#MaxFileSize
   */
  readonly maxFileSize?: number;

  /**
   * @schema PostgreSqlSettings#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema PostgreSqlSettings#DdlArtifactsSchema
   */
  readonly ddlArtifactsSchema?: string;

  /**
   * @schema PostgreSqlSettings#ExecuteTimeout
   */
  readonly executeTimeout?: number;

  /**
   * @schema PostgreSqlSettings#FailTasksOnLobTruncation
   */
  readonly failTasksOnLobTruncation?: boolean;

  /**
   * @schema PostgreSqlSettings#Password
   */
  readonly password?: string;

  /**
   * @schema PostgreSqlSettings#Port
   */
  readonly port?: number;

  /**
   * @schema PostgreSqlSettings#ServerName
   */
  readonly serverName?: string;

  /**
   * @schema PostgreSqlSettings#Username
   */
  readonly username?: string;

  /**
   * @schema PostgreSqlSettings#SlotName
   */
  readonly slotName?: string;

}

/**
 * @schema MySqlSettings
 */
export interface MySqlSettings {
  /**
   * @schema MySqlSettings#AfterConnectScript
   */
  readonly afterConnectScript?: string;

  /**
   * @schema MySqlSettings#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema MySqlSettings#EventsPollInterval
   */
  readonly eventsPollInterval?: number;

  /**
   * @schema MySqlSettings#TargetDbType
   */
  readonly targetDbType?: string;

  /**
   * @schema MySqlSettings#MaxFileSize
   */
  readonly maxFileSize?: number;

  /**
   * @schema MySqlSettings#ParallelLoadThreads
   */
  readonly parallelLoadThreads?: number;

  /**
   * @schema MySqlSettings#Password
   */
  readonly password?: string;

  /**
   * @schema MySqlSettings#Port
   */
  readonly port?: number;

  /**
   * @schema MySqlSettings#ServerName
   */
  readonly serverName?: string;

  /**
   * @schema MySqlSettings#ServerTimezone
   */
  readonly serverTimezone?: string;

  /**
   * @schema MySqlSettings#Username
   */
  readonly username?: string;

}

/**
 * @schema OracleSettings
 */
export interface OracleSettings {
  /**
   * @schema OracleSettings#AddSupplementalLogging
   */
  readonly addSupplementalLogging?: boolean;

  /**
   * @schema OracleSettings#ArchivedLogDestId
   */
  readonly archivedLogDestId?: number;

  /**
   * @schema OracleSettings#AdditionalArchivedLogDestId
   */
  readonly additionalArchivedLogDestId?: number;

  /**
   * @schema OracleSettings#AllowSelectNestedTables
   */
  readonly allowSelectNestedTables?: boolean;

  /**
   * @schema OracleSettings#ParallelAsmReadThreads
   */
  readonly parallelAsmReadThreads?: number;

  /**
   * @schema OracleSettings#ReadAheadBlocks
   */
  readonly readAheadBlocks?: number;

  /**
   * @schema OracleSettings#AccessAlternateDirectly
   */
  readonly accessAlternateDirectly?: boolean;

  /**
   * @schema OracleSettings#UseAlternateFolderForOnline
   */
  readonly useAlternateFolderForOnline?: boolean;

  /**
   * @schema OracleSettings#OraclePathPrefix
   */
  readonly oraclePathPrefix?: string;

  /**
   * @schema OracleSettings#UsePathPrefix
   */
  readonly usePathPrefix?: string;

  /**
   * @schema OracleSettings#ReplacePathPrefix
   */
  readonly replacePathPrefix?: boolean;

  /**
   * @schema OracleSettings#EnableHomogenousTablespace
   */
  readonly enableHomogenousTablespace?: boolean;

  /**
   * @schema OracleSettings#DirectPathNoLog
   */
  readonly directPathNoLog?: boolean;

  /**
   * @schema OracleSettings#ArchivedLogsOnly
   */
  readonly archivedLogsOnly?: boolean;

  /**
   * @schema OracleSettings#AsmPassword
   */
  readonly asmPassword?: string;

  /**
   * @schema OracleSettings#AsmServer
   */
  readonly asmServer?: string;

  /**
   * @schema OracleSettings#AsmUser
   */
  readonly asmUser?: string;

  /**
   * @schema OracleSettings#CharLengthSemantics
   */
  readonly charLengthSemantics?: string;

  /**
   * @schema OracleSettings#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema OracleSettings#DirectPathParallelLoad
   */
  readonly directPathParallelLoad?: boolean;

  /**
   * @schema OracleSettings#FailTasksOnLobTruncation
   */
  readonly failTasksOnLobTruncation?: boolean;

  /**
   * @schema OracleSettings#NumberDatatypeScale
   */
  readonly numberDatatypeScale?: number;

  /**
   * @schema OracleSettings#Password
   */
  readonly password?: string;

  /**
   * @schema OracleSettings#Port
   */
  readonly port?: number;

  /**
   * @schema OracleSettings#ReadTableSpaceName
   */
  readonly readTableSpaceName?: boolean;

  /**
   * @schema OracleSettings#RetryInterval
   */
  readonly retryInterval?: number;

  /**
   * @schema OracleSettings#SecurityDbEncryption
   */
  readonly securityDbEncryption?: string;

  /**
   * @schema OracleSettings#SecurityDbEncryptionName
   */
  readonly securityDbEncryptionName?: string;

  /**
   * @schema OracleSettings#ServerName
   */
  readonly serverName?: string;

  /**
   * @schema OracleSettings#Username
   */
  readonly username?: string;

}

/**
 * @schema SybaseSettings
 */
export interface SybaseSettings {
  /**
   * @schema SybaseSettings#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema SybaseSettings#Password
   */
  readonly password?: string;

  /**
   * @schema SybaseSettings#Port
   */
  readonly port?: number;

  /**
   * @schema SybaseSettings#ServerName
   */
  readonly serverName?: string;

  /**
   * @schema SybaseSettings#Username
   */
  readonly username?: string;

}

/**
 * @schema MicrosoftSqlServerSettings
 */
export interface MicrosoftSqlServerSettings {
  /**
   * @schema MicrosoftSqlServerSettings#Port
   */
  readonly port?: number;

  /**
   * @schema MicrosoftSqlServerSettings#BcpPacketSize
   */
  readonly bcpPacketSize?: number;

  /**
   * @schema MicrosoftSqlServerSettings#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema MicrosoftSqlServerSettings#ControlTablesFileGroup
   */
  readonly controlTablesFileGroup?: string;

  /**
   * @schema MicrosoftSqlServerSettings#Password
   */
  readonly password?: string;

  /**
   * @schema MicrosoftSqlServerSettings#ReadBackupOnly
   */
  readonly readBackupOnly?: boolean;

  /**
   * @schema MicrosoftSqlServerSettings#SafeguardPolicy
   */
  readonly safeguardPolicy?: string;

  /**
   * @schema MicrosoftSqlServerSettings#ServerName
   */
  readonly serverName?: string;

  /**
   * @schema MicrosoftSqlServerSettings#Username
   */
  readonly username?: string;

  /**
   * @schema MicrosoftSqlServerSettings#UseBcpFullLoad
   */
  readonly useBcpFullLoad?: boolean;

}

/**
 * @schema IbmDb2Settings
 */
export interface IbmDb2Settings {
  /**
   * @schema IbmDb2Settings#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema IbmDb2Settings#Password
   */
  readonly password?: string;

  /**
   * @schema IbmDb2Settings#Port
   */
  readonly port?: number;

  /**
   * @schema IbmDb2Settings#ServerName
   */
  readonly serverName?: string;

  /**
   * @schema IbmDb2Settings#SetDataCaptureChanges
   */
  readonly setDataCaptureChanges?: boolean;

  /**
   * @schema IbmDb2Settings#CurrentLsn
   */
  readonly currentLsn?: string;

  /**
   * @schema IbmDb2Settings#MaxKBytesPerRead
   */
  readonly maxKBytesPerRead?: number;

  /**
   * @schema IbmDb2Settings#Username
   */
  readonly username?: string;

}

/**
 * @schema DocDbSettings
 */
export interface DocDbSettings {
  /**
   * @schema DocDbSettings#Username
   */
  readonly username?: string;

  /**
   * @schema DocDbSettings#Password
   */
  readonly password?: string;

  /**
   * @schema DocDbSettings#ServerName
   */
  readonly serverName?: string;

  /**
   * @schema DocDbSettings#Port
   */
  readonly port?: number;

  /**
   * @schema DocDbSettings#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema DocDbSettings#NestingLevel
   */
  readonly nestingLevel?: string;

  /**
   * @schema DocDbSettings#ExtractDocId
   */
  readonly extractDocId?: boolean;

  /**
   * @schema DocDbSettings#DocsToInvestigate
   */
  readonly docsToInvestigate?: number;

  /**
   * @schema DocDbSettings#KmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * @schema Endpoint
 */
export interface Endpoint {
  /**
   * @schema Endpoint#EndpointIdentifier
   */
  readonly endpointIdentifier?: string;

  /**
   * @schema Endpoint#EndpointType
   */
  readonly endpointType?: string;

  /**
   * @schema Endpoint#EngineName
   */
  readonly engineName?: string;

  /**
   * @schema Endpoint#EngineDisplayName
   */
  readonly engineDisplayName?: string;

  /**
   * @schema Endpoint#Username
   */
  readonly username?: string;

  /**
   * @schema Endpoint#ServerName
   */
  readonly serverName?: string;

  /**
   * @schema Endpoint#Port
   */
  readonly port?: number;

  /**
   * @schema Endpoint#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema Endpoint#ExtraConnectionAttributes
   */
  readonly extraConnectionAttributes?: string;

  /**
   * @schema Endpoint#Status
   */
  readonly status?: string;

  /**
   * @schema Endpoint#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema Endpoint#EndpointArn
   */
  readonly endpointArn?: string;

  /**
   * @schema Endpoint#CertificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema Endpoint#SslMode
   */
  readonly sslMode?: string;

  /**
   * @schema Endpoint#ServiceAccessRoleArn
   */
  readonly serviceAccessRoleArn?: string;

  /**
   * @schema Endpoint#ExternalTableDefinition
   */
  readonly externalTableDefinition?: string;

  /**
   * @schema Endpoint#ExternalId
   */
  readonly externalId?: string;

  /**
   * @schema Endpoint#DynamoDbSettings
   */
  readonly dynamoDbSettings?: DynamoDbSettings;

  /**
   * @schema Endpoint#S3Settings
   */
  readonly s3Settings?: S3Settings;

  /**
   * @schema Endpoint#DmsTransferSettings
   */
  readonly dmsTransferSettings?: DmsTransferSettings;

  /**
   * @schema Endpoint#MongoDbSettings
   */
  readonly mongoDbSettings?: MongoDbSettings;

  /**
   * @schema Endpoint#KinesisSettings
   */
  readonly kinesisSettings?: KinesisSettings;

  /**
   * @schema Endpoint#KafkaSettings
   */
  readonly kafkaSettings?: KafkaSettings;

  /**
   * @schema Endpoint#ElasticsearchSettings
   */
  readonly elasticsearchSettings?: ElasticsearchSettings;

  /**
   * @schema Endpoint#NeptuneSettings
   */
  readonly neptuneSettings?: NeptuneSettings;

  /**
   * @schema Endpoint#RedshiftSettings
   */
  readonly redshiftSettings?: RedshiftSettings;

  /**
   * @schema Endpoint#PostgreSQLSettings
   */
  readonly postgreSqlSettings?: PostgreSqlSettings;

  /**
   * @schema Endpoint#MySQLSettings
   */
  readonly mySqlSettings?: MySqlSettings;

  /**
   * @schema Endpoint#OracleSettings
   */
  readonly oracleSettings?: OracleSettings;

  /**
   * @schema Endpoint#SybaseSettings
   */
  readonly sybaseSettings?: SybaseSettings;

  /**
   * @schema Endpoint#MicrosoftSQLServerSettings
   */
  readonly microsoftSqlServerSettings?: MicrosoftSqlServerSettings;

  /**
   * @schema Endpoint#IBMDb2Settings
   */
  readonly ibmDb2Settings?: IbmDb2Settings;

  /**
   * @schema Endpoint#DocDbSettings
   */
  readonly docDbSettings?: DocDbSettings;

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

}

/**
 * @schema ReplicationInstance
 */
export interface ReplicationInstance {
  /**
   * @schema ReplicationInstance#ReplicationInstanceIdentifier
   */
  readonly replicationInstanceIdentifier?: string;

  /**
   * @schema ReplicationInstance#ReplicationInstanceClass
   */
  readonly replicationInstanceClass?: string;

  /**
   * @schema ReplicationInstance#ReplicationInstanceStatus
   */
  readonly replicationInstanceStatus?: string;

  /**
   * @schema ReplicationInstance#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema ReplicationInstance#InstanceCreateTime
   */
  readonly instanceCreateTime?: string;

  /**
   * @schema ReplicationInstance#VpcSecurityGroups
   */
  readonly vpcSecurityGroups?: VpcSecurityGroupMembership[];

  /**
   * @schema ReplicationInstance#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema ReplicationInstance#ReplicationSubnetGroup
   */
  readonly replicationSubnetGroup?: ReplicationSubnetGroup;

  /**
   * @schema ReplicationInstance#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema ReplicationInstance#PendingModifiedValues
   */
  readonly pendingModifiedValues?: ReplicationPendingModifiedValues;

  /**
   * @schema ReplicationInstance#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema ReplicationInstance#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema ReplicationInstance#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema ReplicationInstance#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema ReplicationInstance#ReplicationInstanceArn
   */
  readonly replicationInstanceArn?: string;

  /**
   * @schema ReplicationInstance#ReplicationInstancePublicIpAddress
   */
  readonly replicationInstancePublicIpAddress?: string;

  /**
   * @schema ReplicationInstance#ReplicationInstancePrivateIpAddress
   */
  readonly replicationInstancePrivateIpAddress?: string;

  /**
   * @schema ReplicationInstance#ReplicationInstancePublicIpAddresses
   */
  readonly replicationInstancePublicIpAddresses?: string[];

  /**
   * @schema ReplicationInstance#ReplicationInstancePrivateIpAddresses
   */
  readonly replicationInstancePrivateIpAddresses?: string[];

  /**
   * @schema ReplicationInstance#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema ReplicationInstance#SecondaryAvailabilityZone
   */
  readonly secondaryAvailabilityZone?: string;

  /**
   * @schema ReplicationInstance#FreeUntil
   */
  readonly freeUntil?: string;

  /**
   * @schema ReplicationInstance#DnsNameServers
   */
  readonly dnsNameServers?: string;

}

/**
 * @schema ReplicationSubnetGroup
 */
export interface ReplicationSubnetGroup {
  /**
   * @schema ReplicationSubnetGroup#ReplicationSubnetGroupIdentifier
   */
  readonly replicationSubnetGroupIdentifier?: string;

  /**
   * @schema ReplicationSubnetGroup#ReplicationSubnetGroupDescription
   */
  readonly replicationSubnetGroupDescription?: string;

  /**
   * @schema ReplicationSubnetGroup#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema ReplicationSubnetGroup#SubnetGroupStatus
   */
  readonly subnetGroupStatus?: string;

  /**
   * @schema ReplicationSubnetGroup#Subnets
   */
  readonly subnets?: Subnet[];

}

/**
 * @schema ReplicationTask
 */
export interface ReplicationTask {
  /**
   * @schema ReplicationTask#ReplicationTaskIdentifier
   */
  readonly replicationTaskIdentifier?: string;

  /**
   * @schema ReplicationTask#SourceEndpointArn
   */
  readonly sourceEndpointArn?: string;

  /**
   * @schema ReplicationTask#TargetEndpointArn
   */
  readonly targetEndpointArn?: string;

  /**
   * @schema ReplicationTask#ReplicationInstanceArn
   */
  readonly replicationInstanceArn?: string;

  /**
   * @schema ReplicationTask#MigrationType
   */
  readonly migrationType?: string;

  /**
   * @schema ReplicationTask#TableMappings
   */
  readonly tableMappings?: string;

  /**
   * @schema ReplicationTask#ReplicationTaskSettings
   */
  readonly replicationTaskSettings?: string;

  /**
   * @schema ReplicationTask#Status
   */
  readonly status?: string;

  /**
   * @schema ReplicationTask#LastFailureMessage
   */
  readonly lastFailureMessage?: string;

  /**
   * @schema ReplicationTask#StopReason
   */
  readonly stopReason?: string;

  /**
   * @schema ReplicationTask#ReplicationTaskCreationDate
   */
  readonly replicationTaskCreationDate?: string;

  /**
   * @schema ReplicationTask#ReplicationTaskStartDate
   */
  readonly replicationTaskStartDate?: string;

  /**
   * @schema ReplicationTask#CdcStartPosition
   */
  readonly cdcStartPosition?: string;

  /**
   * @schema ReplicationTask#CdcStopPosition
   */
  readonly cdcStopPosition?: string;

  /**
   * @schema ReplicationTask#RecoveryCheckpoint
   */
  readonly recoveryCheckpoint?: string;

  /**
   * @schema ReplicationTask#ReplicationTaskArn
   */
  readonly replicationTaskArn?: string;

  /**
   * @schema ReplicationTask#ReplicationTaskStats
   */
  readonly replicationTaskStats?: ReplicationTaskStats;

  /**
   * @schema ReplicationTask#TaskData
   */
  readonly taskData?: string;

  /**
   * @schema ReplicationTask#TargetReplicationInstanceArn
   */
  readonly targetReplicationInstanceArn?: string;

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
   * @schema Certificate#CertificateCreationDate
   */
  readonly certificateCreationDate?: string;

  /**
   * @schema Certificate#CertificatePem
   */
  readonly certificatePem?: string;

  /**
   * @schema Certificate#CertificateWallet
   */
  readonly certificateWallet?: any;

  /**
   * @schema Certificate#CertificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema Certificate#CertificateOwner
   */
  readonly certificateOwner?: string;

  /**
   * @schema Certificate#ValidFromDate
   */
  readonly validFromDate?: string;

  /**
   * @schema Certificate#ValidToDate
   */
  readonly validToDate?: string;

  /**
   * @schema Certificate#SigningAlgorithm
   */
  readonly signingAlgorithm?: string;

  /**
   * @schema Certificate#KeyLength
   */
  readonly keyLength?: number;

}

/**
 * @schema Connection
 */
export interface Connection {
  /**
   * @schema Connection#ReplicationInstanceArn
   */
  readonly replicationInstanceArn?: string;

  /**
   * @schema Connection#EndpointArn
   */
  readonly endpointArn?: string;

  /**
   * @schema Connection#Status
   */
  readonly status?: string;

  /**
   * @schema Connection#LastFailureMessage
   */
  readonly lastFailureMessage?: string;

  /**
   * @schema Connection#EndpointIdentifier
   */
  readonly endpointIdentifier?: string;

  /**
   * @schema Connection#ReplicationInstanceIdentifier
   */
  readonly replicationInstanceIdentifier?: string;

}

/**
 * @schema AccountQuota
 */
export interface AccountQuota {
  /**
   * @schema AccountQuota#AccountQuotaName
   */
  readonly accountQuotaName?: string;

  /**
   * @schema AccountQuota#Used
   */
  readonly used?: number;

  /**
   * @schema AccountQuota#Max
   */
  readonly max?: number;

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
 * @schema SupportedEndpointType
 */
export interface SupportedEndpointType {
  /**
   * @schema SupportedEndpointType#EngineName
   */
  readonly engineName?: string;

  /**
   * @schema SupportedEndpointType#SupportsCDC
   */
  readonly supportsCdc?: boolean;

  /**
   * @schema SupportedEndpointType#EndpointType
   */
  readonly endpointType?: string;

  /**
   * @schema SupportedEndpointType#ReplicationInstanceEngineMinimumVersion
   */
  readonly replicationInstanceEngineMinimumVersion?: string;

  /**
   * @schema SupportedEndpointType#EngineDisplayName
   */
  readonly engineDisplayName?: string;

}

/**
 * @schema EventCategoryGroup
 */
export interface EventCategoryGroup {
  /**
   * @schema EventCategoryGroup#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema EventCategoryGroup#EventCategories
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

}

/**
 * @schema OrderableReplicationInstance
 */
export interface OrderableReplicationInstance {
  /**
   * @schema OrderableReplicationInstance#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema OrderableReplicationInstance#ReplicationInstanceClass
   */
  readonly replicationInstanceClass?: string;

  /**
   * @schema OrderableReplicationInstance#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema OrderableReplicationInstance#MinAllocatedStorage
   */
  readonly minAllocatedStorage?: number;

  /**
   * @schema OrderableReplicationInstance#MaxAllocatedStorage
   */
  readonly maxAllocatedStorage?: number;

  /**
   * @schema OrderableReplicationInstance#DefaultAllocatedStorage
   */
  readonly defaultAllocatedStorage?: number;

  /**
   * @schema OrderableReplicationInstance#IncludedAllocatedStorage
   */
  readonly includedAllocatedStorage?: number;

  /**
   * @schema OrderableReplicationInstance#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema OrderableReplicationInstance#ReleaseStatus
   */
  readonly releaseStatus?: string;

}

/**
 * @schema RefreshSchemasStatus
 */
export interface RefreshSchemasStatus {
  /**
   * @schema RefreshSchemasStatus#EndpointArn
   */
  readonly endpointArn?: string;

  /**
   * @schema RefreshSchemasStatus#ReplicationInstanceArn
   */
  readonly replicationInstanceArn?: string;

  /**
   * @schema RefreshSchemasStatus#Status
   */
  readonly status?: string;

  /**
   * @schema RefreshSchemasStatus#LastRefreshDate
   */
  readonly lastRefreshDate?: string;

  /**
   * @schema RefreshSchemasStatus#LastFailureMessage
   */
  readonly lastFailureMessage?: string;

}

/**
 * @schema ReplicationInstanceTaskLog
 */
export interface ReplicationInstanceTaskLog {
  /**
   * @schema ReplicationInstanceTaskLog#ReplicationTaskName
   */
  readonly replicationTaskName?: string;

  /**
   * @schema ReplicationInstanceTaskLog#ReplicationTaskArn
   */
  readonly replicationTaskArn?: string;

  /**
   * @schema ReplicationInstanceTaskLog#ReplicationInstanceTaskLogSize
   */
  readonly replicationInstanceTaskLogSize?: number;

}

/**
 * @schema ReplicationTaskAssessmentResult
 */
export interface ReplicationTaskAssessmentResult {
  /**
   * @schema ReplicationTaskAssessmentResult#ReplicationTaskIdentifier
   */
  readonly replicationTaskIdentifier?: string;

  /**
   * @schema ReplicationTaskAssessmentResult#ReplicationTaskArn
   */
  readonly replicationTaskArn?: string;

  /**
   * @schema ReplicationTaskAssessmentResult#ReplicationTaskLastAssessmentDate
   */
  readonly replicationTaskLastAssessmentDate?: string;

  /**
   * @schema ReplicationTaskAssessmentResult#AssessmentStatus
   */
  readonly assessmentStatus?: string;

  /**
   * @schema ReplicationTaskAssessmentResult#AssessmentResultsFile
   */
  readonly assessmentResultsFile?: string;

  /**
   * @schema ReplicationTaskAssessmentResult#AssessmentResults
   */
  readonly assessmentResults?: string;

  /**
   * @schema ReplicationTaskAssessmentResult#S3ObjectUrl
   */
  readonly s3ObjectUrl?: string;

}

/**
 * @schema ReplicationTaskIndividualAssessment
 */
export interface ReplicationTaskIndividualAssessment {
  /**
   * @schema ReplicationTaskIndividualAssessment#ReplicationTaskIndividualAssessmentArn
   */
  readonly replicationTaskIndividualAssessmentArn?: string;

  /**
   * @schema ReplicationTaskIndividualAssessment#ReplicationTaskAssessmentRunArn
   */
  readonly replicationTaskAssessmentRunArn?: string;

  /**
   * @schema ReplicationTaskIndividualAssessment#IndividualAssessmentName
   */
  readonly individualAssessmentName?: string;

  /**
   * @schema ReplicationTaskIndividualAssessment#Status
   */
  readonly status?: string;

  /**
   * @schema ReplicationTaskIndividualAssessment#ReplicationTaskIndividualAssessmentStartDate
   */
  readonly replicationTaskIndividualAssessmentStartDate?: string;

}

/**
 * @schema TableStatistics
 */
export interface TableStatistics {
  /**
   * @schema TableStatistics#SchemaName
   */
  readonly schemaName?: string;

  /**
   * @schema TableStatistics#TableName
   */
  readonly tableName?: string;

  /**
   * @schema TableStatistics#Inserts
   */
  readonly inserts?: number;

  /**
   * @schema TableStatistics#Deletes
   */
  readonly deletes?: number;

  /**
   * @schema TableStatistics#Updates
   */
  readonly updates?: number;

  /**
   * @schema TableStatistics#Ddls
   */
  readonly ddls?: number;

  /**
   * @schema TableStatistics#FullLoadRows
   */
  readonly fullLoadRows?: number;

  /**
   * @schema TableStatistics#FullLoadCondtnlChkFailedRows
   */
  readonly fullLoadCondtnlChkFailedRows?: number;

  /**
   * @schema TableStatistics#FullLoadErrorRows
   */
  readonly fullLoadErrorRows?: number;

  /**
   * @schema TableStatistics#FullLoadStartTime
   */
  readonly fullLoadStartTime?: string;

  /**
   * @schema TableStatistics#FullLoadEndTime
   */
  readonly fullLoadEndTime?: string;

  /**
   * @schema TableStatistics#FullLoadReloaded
   */
  readonly fullLoadReloaded?: boolean;

  /**
   * @schema TableStatistics#LastUpdateTime
   */
  readonly lastUpdateTime?: string;

  /**
   * @schema TableStatistics#TableState
   */
  readonly tableState?: string;

  /**
   * @schema TableStatistics#ValidationPendingRecords
   */
  readonly validationPendingRecords?: number;

  /**
   * @schema TableStatistics#ValidationFailedRecords
   */
  readonly validationFailedRecords?: number;

  /**
   * @schema TableStatistics#ValidationSuspendedRecords
   */
  readonly validationSuspendedRecords?: number;

  /**
   * @schema TableStatistics#ValidationState
   */
  readonly validationState?: string;

  /**
   * @schema TableStatistics#ValidationStateDetails
   */
  readonly validationStateDetails?: string;

}

/**
 * @schema TableToReload
 */
export interface TableToReload {
  /**
   * @schema TableToReload#SchemaName
   */
  readonly schemaName: string;

  /**
   * @schema TableToReload#TableName
   */
  readonly tableName: string;

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
 * @schema ReplicationTaskAssessmentRunProgress
 */
export interface ReplicationTaskAssessmentRunProgress {
  /**
   * @schema ReplicationTaskAssessmentRunProgress#IndividualAssessmentCount
   */
  readonly individualAssessmentCount?: number;

  /**
   * @schema ReplicationTaskAssessmentRunProgress#IndividualAssessmentCompletedCount
   */
  readonly individualAssessmentCompletedCount?: number;

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
 * @schema ReplicationPendingModifiedValues
 */
export interface ReplicationPendingModifiedValues {
  /**
   * @schema ReplicationPendingModifiedValues#ReplicationInstanceClass
   */
  readonly replicationInstanceClass?: string;

  /**
   * @schema ReplicationPendingModifiedValues#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema ReplicationPendingModifiedValues#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema ReplicationPendingModifiedValues#EngineVersion
   */
  readonly engineVersion?: string;

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
 * @schema ReplicationTaskStats
 */
export interface ReplicationTaskStats {
  /**
   * @schema ReplicationTaskStats#FullLoadProgressPercent
   */
  readonly fullLoadProgressPercent?: number;

  /**
   * @schema ReplicationTaskStats#ElapsedTimeMillis
   */
  readonly elapsedTimeMillis?: number;

  /**
   * @schema ReplicationTaskStats#TablesLoaded
   */
  readonly tablesLoaded?: number;

  /**
   * @schema ReplicationTaskStats#TablesLoading
   */
  readonly tablesLoading?: number;

  /**
   * @schema ReplicationTaskStats#TablesQueued
   */
  readonly tablesQueued?: number;

  /**
   * @schema ReplicationTaskStats#TablesErrored
   */
  readonly tablesErrored?: number;

  /**
   * @schema ReplicationTaskStats#FreshStartDate
   */
  readonly freshStartDate?: string;

  /**
   * @schema ReplicationTaskStats#StartDate
   */
  readonly startDate?: string;

  /**
   * @schema ReplicationTaskStats#StopDate
   */
  readonly stopDate?: string;

  /**
   * @schema ReplicationTaskStats#FullLoadStartDate
   */
  readonly fullLoadStartDate?: string;

  /**
   * @schema ReplicationTaskStats#FullLoadFinishDate
   */
  readonly fullLoadFinishDate?: string;

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
