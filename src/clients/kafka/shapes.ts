/**
 * @schema BatchAssociateScramSecretRequest
 */
export interface BatchAssociateScramSecretRequest {
  /**
   * @schema BatchAssociateScramSecretRequest#ClusterArn
   */
  readonly clusterArn: string;

  /**
   * @schema BatchAssociateScramSecretRequest#SecretArnList
   */
  readonly secretArnList: string[];

}

/**
 * @schema BatchAssociateScramSecretResponse
 */
export interface BatchAssociateScramSecretResponse {
  /**
   * @schema BatchAssociateScramSecretResponse#ClusterArn
   */
  readonly clusterArn?: string;

  /**
   * @schema BatchAssociateScramSecretResponse#UnprocessedScramSecrets
   */
  readonly unprocessedScramSecrets?: UnprocessedScramSecret[];

}

/**
 * @schema CreateClusterRequest
 */
export interface CreateClusterRequest {
  /**
   * @schema CreateClusterRequest#BrokerNodeGroupInfo
   */
  readonly brokerNodeGroupInfo: BrokerNodeGroupInfo;

  /**
   * @schema CreateClusterRequest#ClientAuthentication
   */
  readonly clientAuthentication?: ClientAuthentication;

  /**
   * @schema CreateClusterRequest#ClusterName
   */
  readonly clusterName: string;

  /**
   * @schema CreateClusterRequest#ConfigurationInfo
   */
  readonly configurationInfo?: ConfigurationInfo;

  /**
   * @schema CreateClusterRequest#EncryptionInfo
   */
  readonly encryptionInfo?: EncryptionInfo;

  /**
   * @schema CreateClusterRequest#EnhancedMonitoring
   */
  readonly enhancedMonitoring?: string;

  /**
   * @schema CreateClusterRequest#OpenMonitoring
   */
  readonly openMonitoring?: OpenMonitoringInfo;

  /**
   * @schema CreateClusterRequest#KafkaVersion
   */
  readonly kafkaVersion: string;

  /**
   * @schema CreateClusterRequest#LoggingInfo
   */
  readonly loggingInfo?: LoggingInfo;

  /**
   * @schema CreateClusterRequest#NumberOfBrokerNodes
   */
  readonly numberOfBrokerNodes: number;

  /**
   * @schema CreateClusterRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateClusterResponse
 */
export interface CreateClusterResponse {
  /**
   * @schema CreateClusterResponse#ClusterArn
   */
  readonly clusterArn?: string;

  /**
   * @schema CreateClusterResponse#ClusterName
   */
  readonly clusterName?: string;

  /**
   * @schema CreateClusterResponse#State
   */
  readonly state?: string;

}

/**
 * @schema CreateConfigurationRequest
 */
export interface CreateConfigurationRequest {
  /**
   * @schema CreateConfigurationRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateConfigurationRequest#KafkaVersions
   */
  readonly kafkaVersions?: string[];

  /**
   * @schema CreateConfigurationRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateConfigurationRequest#ServerProperties
   */
  readonly serverProperties: any;

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
   * @schema CreateConfigurationResponse#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema CreateConfigurationResponse#LatestRevision
   */
  readonly latestRevision?: ConfigurationRevision;

  /**
   * @schema CreateConfigurationResponse#Name
   */
  readonly name?: string;

  /**
   * @schema CreateConfigurationResponse#State
   */
  readonly state?: string;

}

/**
 * @schema DeleteClusterRequest
 */
export interface DeleteClusterRequest {
  /**
   * @schema DeleteClusterRequest#ClusterArn
   */
  readonly clusterArn: string;

  /**
   * @schema DeleteClusterRequest#CurrentVersion
   */
  readonly currentVersion?: string;

}

/**
 * @schema DeleteClusterResponse
 */
export interface DeleteClusterResponse {
  /**
   * @schema DeleteClusterResponse#ClusterArn
   */
  readonly clusterArn?: string;

  /**
   * @schema DeleteClusterResponse#State
   */
  readonly state?: string;

}

/**
 * @schema DeleteConfigurationRequest
 */
export interface DeleteConfigurationRequest {
  /**
   * @schema DeleteConfigurationRequest#Arn
   */
  readonly arn: string;

}

/**
 * @schema DeleteConfigurationResponse
 */
export interface DeleteConfigurationResponse {
  /**
   * @schema DeleteConfigurationResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema DeleteConfigurationResponse#State
   */
  readonly state?: string;

}

/**
 * @schema DescribeClusterRequest
 */
export interface DescribeClusterRequest {
  /**
   * @schema DescribeClusterRequest#ClusterArn
   */
  readonly clusterArn: string;

}

/**
 * @schema DescribeClusterResponse
 */
export interface DescribeClusterResponse {
  /**
   * @schema DescribeClusterResponse#ClusterInfo
   */
  readonly clusterInfo?: ClusterInfo;

}

/**
 * @schema DescribeClusterOperationRequest
 */
export interface DescribeClusterOperationRequest {
  /**
   * @schema DescribeClusterOperationRequest#ClusterOperationArn
   */
  readonly clusterOperationArn: string;

}

/**
 * @schema DescribeClusterOperationResponse
 */
export interface DescribeClusterOperationResponse {
  /**
   * @schema DescribeClusterOperationResponse#ClusterOperationInfo
   */
  readonly clusterOperationInfo?: ClusterOperationInfo;

}

/**
 * @schema DescribeConfigurationRequest
 */
export interface DescribeConfigurationRequest {
  /**
   * @schema DescribeConfigurationRequest#Arn
   */
  readonly arn: string;

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
   * @schema DescribeConfigurationResponse#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema DescribeConfigurationResponse#Description
   */
  readonly description?: string;

  /**
   * @schema DescribeConfigurationResponse#KafkaVersions
   */
  readonly kafkaVersions?: string[];

  /**
   * @schema DescribeConfigurationResponse#LatestRevision
   */
  readonly latestRevision?: ConfigurationRevision;

  /**
   * @schema DescribeConfigurationResponse#Name
   */
  readonly name?: string;

  /**
   * @schema DescribeConfigurationResponse#State
   */
  readonly state?: string;

}

/**
 * @schema DescribeConfigurationRevisionRequest
 */
export interface DescribeConfigurationRevisionRequest {
  /**
   * @schema DescribeConfigurationRevisionRequest#Arn
   */
  readonly arn: string;

  /**
   * @schema DescribeConfigurationRevisionRequest#Revision
   */
  readonly revision: number;

}

/**
 * @schema DescribeConfigurationRevisionResponse
 */
export interface DescribeConfigurationRevisionResponse {
  /**
   * @schema DescribeConfigurationRevisionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema DescribeConfigurationRevisionResponse#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema DescribeConfigurationRevisionResponse#Description
   */
  readonly description?: string;

  /**
   * @schema DescribeConfigurationRevisionResponse#Revision
   */
  readonly revision?: number;

  /**
   * @schema DescribeConfigurationRevisionResponse#ServerProperties
   */
  readonly serverProperties?: any;

}

/**
 * @schema BatchDisassociateScramSecretRequest
 */
export interface BatchDisassociateScramSecretRequest {
  /**
   * @schema BatchDisassociateScramSecretRequest#ClusterArn
   */
  readonly clusterArn: string;

  /**
   * @schema BatchDisassociateScramSecretRequest#SecretArnList
   */
  readonly secretArnList: string[];

}

/**
 * @schema BatchDisassociateScramSecretResponse
 */
export interface BatchDisassociateScramSecretResponse {
  /**
   * @schema BatchDisassociateScramSecretResponse#ClusterArn
   */
  readonly clusterArn?: string;

  /**
   * @schema BatchDisassociateScramSecretResponse#UnprocessedScramSecrets
   */
  readonly unprocessedScramSecrets?: UnprocessedScramSecret[];

}

/**
 * @schema GetBootstrapBrokersRequest
 */
export interface GetBootstrapBrokersRequest {
  /**
   * @schema GetBootstrapBrokersRequest#ClusterArn
   */
  readonly clusterArn: string;

}

/**
 * @schema GetBootstrapBrokersResponse
 */
export interface GetBootstrapBrokersResponse {
  /**
   * @schema GetBootstrapBrokersResponse#BootstrapBrokerString
   */
  readonly bootstrapBrokerString?: string;

  /**
   * @schema GetBootstrapBrokersResponse#BootstrapBrokerStringTls
   */
  readonly bootstrapBrokerStringTls?: string;

  /**
   * @schema GetBootstrapBrokersResponse#BootstrapBrokerStringSaslScram
   */
  readonly bootstrapBrokerStringSaslScram?: string;

}

/**
 * @schema GetCompatibleKafkaVersionsRequest
 */
export interface GetCompatibleKafkaVersionsRequest {
  /**
   * @schema GetCompatibleKafkaVersionsRequest#ClusterArn
   */
  readonly clusterArn?: string;

}

/**
 * @schema GetCompatibleKafkaVersionsResponse
 */
export interface GetCompatibleKafkaVersionsResponse {
  /**
   * @schema GetCompatibleKafkaVersionsResponse#CompatibleKafkaVersions
   */
  readonly compatibleKafkaVersions?: CompatibleKafkaVersion[];

}

/**
 * @schema ListClusterOperationsRequest
 */
export interface ListClusterOperationsRequest {
  /**
   * @schema ListClusterOperationsRequest#ClusterArn
   */
  readonly clusterArn: string;

  /**
   * @schema ListClusterOperationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListClusterOperationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListClusterOperationsResponse
 */
export interface ListClusterOperationsResponse {
  /**
   * @schema ListClusterOperationsResponse#ClusterOperationInfoList
   */
  readonly clusterOperationInfoList?: ClusterOperationInfo[];

  /**
   * @schema ListClusterOperationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListClustersRequest
 */
export interface ListClustersRequest {
  /**
   * @schema ListClustersRequest#ClusterNameFilter
   */
  readonly clusterNameFilter?: string;

  /**
   * @schema ListClustersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListClustersRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListClustersResponse
 */
export interface ListClustersResponse {
  /**
   * @schema ListClustersResponse#ClusterInfoList
   */
  readonly clusterInfoList?: ClusterInfo[];

  /**
   * @schema ListClustersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListConfigurationRevisionsRequest
 */
export interface ListConfigurationRevisionsRequest {
  /**
   * @schema ListConfigurationRevisionsRequest#Arn
   */
  readonly arn: string;

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
   * @schema ListConfigurationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListKafkaVersionsRequest
 */
export interface ListKafkaVersionsRequest {
  /**
   * @schema ListKafkaVersionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListKafkaVersionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListKafkaVersionsResponse
 */
export interface ListKafkaVersionsResponse {
  /**
   * @schema ListKafkaVersionsResponse#KafkaVersions
   */
  readonly kafkaVersions?: KafkaVersion[];

  /**
   * @schema ListKafkaVersionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListNodesRequest
 */
export interface ListNodesRequest {
  /**
   * @schema ListNodesRequest#ClusterArn
   */
  readonly clusterArn: string;

  /**
   * @schema ListNodesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListNodesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListNodesResponse
 */
export interface ListNodesResponse {
  /**
   * @schema ListNodesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListNodesResponse#NodeInfoList
   */
  readonly nodeInfoList?: NodeInfo[];

}

/**
 * @schema ListScramSecretsRequest
 */
export interface ListScramSecretsRequest {
  /**
   * @schema ListScramSecretsRequest#ClusterArn
   */
  readonly clusterArn: string;

  /**
   * @schema ListScramSecretsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListScramSecretsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListScramSecretsResponse
 */
export interface ListScramSecretsResponse {
  /**
   * @schema ListScramSecretsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListScramSecretsResponse#SecretArnList
   */
  readonly secretArnList?: string[];

}

/**
 * @schema ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * @schema ListTagsForResourceRequest#ResourceArn
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
 * @schema RebootBrokerRequest
 */
export interface RebootBrokerRequest {
  /**
   * @schema RebootBrokerRequest#BrokerIds
   */
  readonly brokerIds: string[];

  /**
   * @schema RebootBrokerRequest#ClusterArn
   */
  readonly clusterArn: string;

}

/**
 * @schema RebootBrokerResponse
 */
export interface RebootBrokerResponse {
  /**
   * @schema RebootBrokerResponse#ClusterArn
   */
  readonly clusterArn?: string;

  /**
   * @schema RebootBrokerResponse#ClusterOperationArn
   */
  readonly clusterOperationArn?: string;

}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema TagResourceRequest#Tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema UntagResourceRequest
 */
export interface UntagResourceRequest {
  /**
   * @schema UntagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema UntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UpdateBrokerCountRequest
 */
export interface UpdateBrokerCountRequest {
  /**
   * @schema UpdateBrokerCountRequest#ClusterArn
   */
  readonly clusterArn: string;

  /**
   * @schema UpdateBrokerCountRequest#CurrentVersion
   */
  readonly currentVersion: string;

  /**
   * @schema UpdateBrokerCountRequest#TargetNumberOfBrokerNodes
   */
  readonly targetNumberOfBrokerNodes: number;

}

/**
 * @schema UpdateBrokerCountResponse
 */
export interface UpdateBrokerCountResponse {
  /**
   * @schema UpdateBrokerCountResponse#ClusterArn
   */
  readonly clusterArn?: string;

  /**
   * @schema UpdateBrokerCountResponse#ClusterOperationArn
   */
  readonly clusterOperationArn?: string;

}

/**
 * @schema UpdateBrokerStorageRequest
 */
export interface UpdateBrokerStorageRequest {
  /**
   * @schema UpdateBrokerStorageRequest#ClusterArn
   */
  readonly clusterArn: string;

  /**
   * @schema UpdateBrokerStorageRequest#CurrentVersion
   */
  readonly currentVersion: string;

  /**
   * @schema UpdateBrokerStorageRequest#TargetBrokerEBSVolumeInfo
   */
  readonly targetBrokerEbsVolumeInfo: BrokerEbsVolumeInfo[];

}

/**
 * @schema UpdateBrokerStorageResponse
 */
export interface UpdateBrokerStorageResponse {
  /**
   * @schema UpdateBrokerStorageResponse#ClusterArn
   */
  readonly clusterArn?: string;

  /**
   * @schema UpdateBrokerStorageResponse#ClusterOperationArn
   */
  readonly clusterOperationArn?: string;

}

/**
 * @schema UpdateConfigurationRequest
 */
export interface UpdateConfigurationRequest {
  /**
   * @schema UpdateConfigurationRequest#Arn
   */
  readonly arn: string;

  /**
   * @schema UpdateConfigurationRequest#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateConfigurationRequest#ServerProperties
   */
  readonly serverProperties: any;

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
   * @schema UpdateConfigurationResponse#LatestRevision
   */
  readonly latestRevision?: ConfigurationRevision;

}

/**
 * @schema UpdateClusterConfigurationRequest
 */
export interface UpdateClusterConfigurationRequest {
  /**
   * @schema UpdateClusterConfigurationRequest#ClusterArn
   */
  readonly clusterArn: string;

  /**
   * @schema UpdateClusterConfigurationRequest#ConfigurationInfo
   */
  readonly configurationInfo: ConfigurationInfo;

  /**
   * @schema UpdateClusterConfigurationRequest#CurrentVersion
   */
  readonly currentVersion: string;

}

/**
 * @schema UpdateClusterConfigurationResponse
 */
export interface UpdateClusterConfigurationResponse {
  /**
   * @schema UpdateClusterConfigurationResponse#ClusterArn
   */
  readonly clusterArn?: string;

  /**
   * @schema UpdateClusterConfigurationResponse#ClusterOperationArn
   */
  readonly clusterOperationArn?: string;

}

/**
 * @schema UpdateClusterKafkaVersionRequest
 */
export interface UpdateClusterKafkaVersionRequest {
  /**
   * @schema UpdateClusterKafkaVersionRequest#ClusterArn
   */
  readonly clusterArn: string;

  /**
   * @schema UpdateClusterKafkaVersionRequest#ConfigurationInfo
   */
  readonly configurationInfo?: ConfigurationInfo;

  /**
   * @schema UpdateClusterKafkaVersionRequest#CurrentVersion
   */
  readonly currentVersion: string;

  /**
   * @schema UpdateClusterKafkaVersionRequest#TargetKafkaVersion
   */
  readonly targetKafkaVersion: string;

}

/**
 * @schema UpdateClusterKafkaVersionResponse
 */
export interface UpdateClusterKafkaVersionResponse {
  /**
   * @schema UpdateClusterKafkaVersionResponse#ClusterArn
   */
  readonly clusterArn?: string;

  /**
   * @schema UpdateClusterKafkaVersionResponse#ClusterOperationArn
   */
  readonly clusterOperationArn?: string;

}

/**
 * @schema UpdateMonitoringRequest
 */
export interface UpdateMonitoringRequest {
  /**
   * @schema UpdateMonitoringRequest#ClusterArn
   */
  readonly clusterArn: string;

  /**
   * @schema UpdateMonitoringRequest#CurrentVersion
   */
  readonly currentVersion: string;

  /**
   * @schema UpdateMonitoringRequest#EnhancedMonitoring
   */
  readonly enhancedMonitoring?: string;

  /**
   * @schema UpdateMonitoringRequest#OpenMonitoring
   */
  readonly openMonitoring?: OpenMonitoringInfo;

  /**
   * @schema UpdateMonitoringRequest#LoggingInfo
   */
  readonly loggingInfo?: LoggingInfo;

}

/**
 * @schema UpdateMonitoringResponse
 */
export interface UpdateMonitoringResponse {
  /**
   * @schema UpdateMonitoringResponse#ClusterArn
   */
  readonly clusterArn?: string;

  /**
   * @schema UpdateMonitoringResponse#ClusterOperationArn
   */
  readonly clusterOperationArn?: string;

}

/**
 * @schema UnprocessedScramSecret
 */
export interface UnprocessedScramSecret {
  /**
   * @schema UnprocessedScramSecret#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema UnprocessedScramSecret#ErrorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema UnprocessedScramSecret#SecretArn
   */
  readonly secretArn?: string;

}

/**
 * @schema BrokerNodeGroupInfo
 */
export interface BrokerNodeGroupInfo {
  /**
   * @schema BrokerNodeGroupInfo#BrokerAZDistribution
   */
  readonly brokerAzDistribution?: string;

  /**
   * @schema BrokerNodeGroupInfo#ClientSubnets
   */
  readonly clientSubnets: string[];

  /**
   * @schema BrokerNodeGroupInfo#InstanceType
   */
  readonly instanceType: string;

  /**
   * @schema BrokerNodeGroupInfo#SecurityGroups
   */
  readonly securityGroups?: string[];

  /**
   * @schema BrokerNodeGroupInfo#StorageInfo
   */
  readonly storageInfo?: StorageInfo;

}

/**
 * @schema ClientAuthentication
 */
export interface ClientAuthentication {
  /**
   * @schema ClientAuthentication#Sasl
   */
  readonly sasl?: Sasl;

  /**
   * @schema ClientAuthentication#Tls
   */
  readonly tls?: Tls;

}

/**
 * @schema ConfigurationInfo
 */
export interface ConfigurationInfo {
  /**
   * @schema ConfigurationInfo#Arn
   */
  readonly arn: string;

  /**
   * @schema ConfigurationInfo#Revision
   */
  readonly revision: number;

}

/**
 * @schema EncryptionInfo
 */
export interface EncryptionInfo {
  /**
   * @schema EncryptionInfo#EncryptionAtRest
   */
  readonly encryptionAtRest?: EncryptionAtRest;

  /**
   * @schema EncryptionInfo#EncryptionInTransit
   */
  readonly encryptionInTransit?: EncryptionInTransit;

}

/**
 * @schema OpenMonitoringInfo
 */
export interface OpenMonitoringInfo {
  /**
   * @schema OpenMonitoringInfo#Prometheus
   */
  readonly prometheus: PrometheusInfo;

}

/**
 * @schema LoggingInfo
 */
export interface LoggingInfo {
  /**
   * @schema LoggingInfo#BrokerLogs
   */
  readonly brokerLogs: BrokerLogs;

}

/**
 * @schema ConfigurationRevision
 */
export interface ConfigurationRevision {
  /**
   * @schema ConfigurationRevision#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema ConfigurationRevision#Description
   */
  readonly description?: string;

  /**
   * @schema ConfigurationRevision#Revision
   */
  readonly revision: number;

}

/**
 * @schema ClusterInfo
 */
export interface ClusterInfo {
  /**
   * @schema ClusterInfo#ActiveOperationArn
   */
  readonly activeOperationArn?: string;

  /**
   * @schema ClusterInfo#BrokerNodeGroupInfo
   */
  readonly brokerNodeGroupInfo?: BrokerNodeGroupInfo;

  /**
   * @schema ClusterInfo#ClientAuthentication
   */
  readonly clientAuthentication?: ClientAuthentication;

  /**
   * @schema ClusterInfo#ClusterArn
   */
  readonly clusterArn?: string;

  /**
   * @schema ClusterInfo#ClusterName
   */
  readonly clusterName?: string;

  /**
   * @schema ClusterInfo#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema ClusterInfo#CurrentBrokerSoftwareInfo
   */
  readonly currentBrokerSoftwareInfo?: BrokerSoftwareInfo;

  /**
   * @schema ClusterInfo#CurrentVersion
   */
  readonly currentVersion?: string;

  /**
   * @schema ClusterInfo#EncryptionInfo
   */
  readonly encryptionInfo?: EncryptionInfo;

  /**
   * @schema ClusterInfo#EnhancedMonitoring
   */
  readonly enhancedMonitoring?: string;

  /**
   * @schema ClusterInfo#OpenMonitoring
   */
  readonly openMonitoring?: OpenMonitoring;

  /**
   * @schema ClusterInfo#LoggingInfo
   */
  readonly loggingInfo?: LoggingInfo;

  /**
   * @schema ClusterInfo#NumberOfBrokerNodes
   */
  readonly numberOfBrokerNodes?: number;

  /**
   * @schema ClusterInfo#State
   */
  readonly state?: string;

  /**
   * @schema ClusterInfo#StateInfo
   */
  readonly stateInfo?: StateInfo;

  /**
   * @schema ClusterInfo#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema ClusterInfo#ZookeeperConnectString
   */
  readonly zookeeperConnectString?: string;

  /**
   * @schema ClusterInfo#ZookeeperConnectStringTls
   */
  readonly zookeeperConnectStringTls?: string;

}

/**
 * @schema ClusterOperationInfo
 */
export interface ClusterOperationInfo {
  /**
   * @schema ClusterOperationInfo#ClientRequestId
   */
  readonly clientRequestId?: string;

  /**
   * @schema ClusterOperationInfo#ClusterArn
   */
  readonly clusterArn?: string;

  /**
   * @schema ClusterOperationInfo#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema ClusterOperationInfo#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema ClusterOperationInfo#ErrorInfo
   */
  readonly errorInfo?: ErrorInfo;

  /**
   * @schema ClusterOperationInfo#OperationArn
   */
  readonly operationArn?: string;

  /**
   * @schema ClusterOperationInfo#OperationState
   */
  readonly operationState?: string;

  /**
   * @schema ClusterOperationInfo#OperationSteps
   */
  readonly operationSteps?: ClusterOperationStep[];

  /**
   * @schema ClusterOperationInfo#OperationType
   */
  readonly operationType?: string;

  /**
   * @schema ClusterOperationInfo#SourceClusterInfo
   */
  readonly sourceClusterInfo?: MutableClusterInfo;

  /**
   * @schema ClusterOperationInfo#TargetClusterInfo
   */
  readonly targetClusterInfo?: MutableClusterInfo;

}

/**
 * @schema CompatibleKafkaVersion
 */
export interface CompatibleKafkaVersion {
  /**
   * @schema CompatibleKafkaVersion#SourceVersion
   */
  readonly sourceVersion?: string;

  /**
   * @schema CompatibleKafkaVersion#TargetVersions
   */
  readonly targetVersions?: string[];

}

/**
 * @schema Configuration
 */
export interface Configuration {
  /**
   * @schema Configuration#Arn
   */
  readonly arn: string;

  /**
   * @schema Configuration#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema Configuration#Description
   */
  readonly description: string;

  /**
   * @schema Configuration#KafkaVersions
   */
  readonly kafkaVersions: string[];

  /**
   * @schema Configuration#LatestRevision
   */
  readonly latestRevision: ConfigurationRevision;

  /**
   * @schema Configuration#Name
   */
  readonly name: string;

  /**
   * @schema Configuration#State
   */
  readonly state: string;

}

/**
 * @schema KafkaVersion
 */
export interface KafkaVersion {
  /**
   * @schema KafkaVersion#Version
   */
  readonly version?: string;

  /**
   * @schema KafkaVersion#Status
   */
  readonly status?: string;

}

/**
 * @schema NodeInfo
 */
export interface NodeInfo {
  /**
   * @schema NodeInfo#AddedToClusterTime
   */
  readonly addedToClusterTime?: string;

  /**
   * @schema NodeInfo#BrokerNodeInfo
   */
  readonly brokerNodeInfo?: BrokerNodeInfo;

  /**
   * @schema NodeInfo#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema NodeInfo#NodeARN
   */
  readonly nodeArn?: string;

  /**
   * @schema NodeInfo#NodeType
   */
  readonly nodeType?: string;

  /**
   * @schema NodeInfo#ZookeeperNodeInfo
   */
  readonly zookeeperNodeInfo?: ZookeeperNodeInfo;

}

/**
 * @schema BrokerEbsVolumeInfo
 */
export interface BrokerEbsVolumeInfo {
  /**
   * @schema BrokerEbsVolumeInfo#KafkaBrokerNodeId
   */
  readonly kafkaBrokerNodeId: string;

  /**
   * @schema BrokerEbsVolumeInfo#VolumeSizeGB
   */
  readonly volumeSizeGb: number;

}

/**
 * @schema StorageInfo
 */
export interface StorageInfo {
  /**
   * @schema StorageInfo#EbsStorageInfo
   */
  readonly ebsStorageInfo?: EbsStorageInfo;

}

/**
 * @schema Sasl
 */
export interface Sasl {
  /**
   * @schema Sasl#Scram
   */
  readonly scram?: Scram;

}

/**
 * @schema Tls
 */
export interface Tls {
  /**
   * @schema Tls#CertificateAuthorityArnList
   */
  readonly certificateAuthorityArnList?: string[];

}

/**
 * @schema EncryptionAtRest
 */
export interface EncryptionAtRest {
  /**
   * @schema EncryptionAtRest#DataVolumeKMSKeyId
   */
  readonly dataVolumeKmsKeyId: string;

}

/**
 * @schema EncryptionInTransit
 */
export interface EncryptionInTransit {
  /**
   * @schema EncryptionInTransit#ClientBroker
   */
  readonly clientBroker?: string;

  /**
   * @schema EncryptionInTransit#InCluster
   */
  readonly inCluster?: boolean;

}

/**
 * @schema PrometheusInfo
 */
export interface PrometheusInfo {
  /**
   * @schema PrometheusInfo#JmxExporter
   */
  readonly jmxExporter?: JmxExporterInfo;

  /**
   * @schema PrometheusInfo#NodeExporter
   */
  readonly nodeExporter?: NodeExporterInfo;

}

/**
 * @schema BrokerLogs
 */
export interface BrokerLogs {
  /**
   * @schema BrokerLogs#CloudWatchLogs
   */
  readonly cloudWatchLogs?: CloudWatchLogs;

  /**
   * @schema BrokerLogs#Firehose
   */
  readonly firehose?: Firehose;

  /**
   * @schema BrokerLogs#S3
   */
  readonly s3?: S3;

}

/**
 * @schema BrokerSoftwareInfo
 */
export interface BrokerSoftwareInfo {
  /**
   * @schema BrokerSoftwareInfo#ConfigurationArn
   */
  readonly configurationArn?: string;

  /**
   * @schema BrokerSoftwareInfo#ConfigurationRevision
   */
  readonly configurationRevision?: number;

  /**
   * @schema BrokerSoftwareInfo#KafkaVersion
   */
  readonly kafkaVersion?: string;

}

/**
 * @schema OpenMonitoring
 */
export interface OpenMonitoring {
  /**
   * @schema OpenMonitoring#Prometheus
   */
  readonly prometheus: Prometheus;

}

/**
 * @schema StateInfo
 */
export interface StateInfo {
  /**
   * @schema StateInfo#Code
   */
  readonly code?: string;

  /**
   * @schema StateInfo#Message
   */
  readonly message?: string;

}

/**
 * @schema ErrorInfo
 */
export interface ErrorInfo {
  /**
   * @schema ErrorInfo#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema ErrorInfo#ErrorString
   */
  readonly errorString?: string;

}

/**
 * @schema ClusterOperationStep
 */
export interface ClusterOperationStep {
  /**
   * @schema ClusterOperationStep#StepInfo
   */
  readonly stepInfo?: ClusterOperationStepInfo;

  /**
   * @schema ClusterOperationStep#StepName
   */
  readonly stepName?: string;

}

/**
 * @schema MutableClusterInfo
 */
export interface MutableClusterInfo {
  /**
   * @schema MutableClusterInfo#BrokerEBSVolumeInfo
   */
  readonly brokerEbsVolumeInfo?: BrokerEbsVolumeInfo[];

  /**
   * @schema MutableClusterInfo#ConfigurationInfo
   */
  readonly configurationInfo?: ConfigurationInfo;

  /**
   * @schema MutableClusterInfo#NumberOfBrokerNodes
   */
  readonly numberOfBrokerNodes?: number;

  /**
   * @schema MutableClusterInfo#EnhancedMonitoring
   */
  readonly enhancedMonitoring?: string;

  /**
   * @schema MutableClusterInfo#OpenMonitoring
   */
  readonly openMonitoring?: OpenMonitoring;

  /**
   * @schema MutableClusterInfo#KafkaVersion
   */
  readonly kafkaVersion?: string;

  /**
   * @schema MutableClusterInfo#LoggingInfo
   */
  readonly loggingInfo?: LoggingInfo;

}

/**
 * @schema BrokerNodeInfo
 */
export interface BrokerNodeInfo {
  /**
   * @schema BrokerNodeInfo#AttachedENIId
   */
  readonly attachedEniId?: string;

  /**
   * @schema BrokerNodeInfo#BrokerId
   */
  readonly brokerId?: number;

  /**
   * @schema BrokerNodeInfo#ClientSubnet
   */
  readonly clientSubnet?: string;

  /**
   * @schema BrokerNodeInfo#ClientVpcIpAddress
   */
  readonly clientVpcIpAddress?: string;

  /**
   * @schema BrokerNodeInfo#CurrentBrokerSoftwareInfo
   */
  readonly currentBrokerSoftwareInfo?: BrokerSoftwareInfo;

  /**
   * @schema BrokerNodeInfo#Endpoints
   */
  readonly endpoints?: string[];

}

/**
 * @schema ZookeeperNodeInfo
 */
export interface ZookeeperNodeInfo {
  /**
   * @schema ZookeeperNodeInfo#AttachedENIId
   */
  readonly attachedEniId?: string;

  /**
   * @schema ZookeeperNodeInfo#ClientVpcIpAddress
   */
  readonly clientVpcIpAddress?: string;

  /**
   * @schema ZookeeperNodeInfo#Endpoints
   */
  readonly endpoints?: string[];

  /**
   * @schema ZookeeperNodeInfo#ZookeeperId
   */
  readonly zookeeperId?: number;

  /**
   * @schema ZookeeperNodeInfo#ZookeeperVersion
   */
  readonly zookeeperVersion?: string;

}

/**
 * @schema EbsStorageInfo
 */
export interface EbsStorageInfo {
  /**
   * @schema EbsStorageInfo#VolumeSize
   */
  readonly volumeSize?: number;

}

/**
 * @schema Scram
 */
export interface Scram {
  /**
   * @schema Scram#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema JmxExporterInfo
 */
export interface JmxExporterInfo {
  /**
   * @schema JmxExporterInfo#EnabledInBroker
   */
  readonly enabledInBroker: boolean;

}

/**
 * @schema NodeExporterInfo
 */
export interface NodeExporterInfo {
  /**
   * @schema NodeExporterInfo#EnabledInBroker
   */
  readonly enabledInBroker: boolean;

}

/**
 * @schema CloudWatchLogs
 */
export interface CloudWatchLogs {
  /**
   * @schema CloudWatchLogs#Enabled
   */
  readonly enabled: boolean;

  /**
   * @schema CloudWatchLogs#LogGroup
   */
  readonly logGroup?: string;

}

/**
 * @schema Firehose
 */
export interface Firehose {
  /**
   * @schema Firehose#DeliveryStream
   */
  readonly deliveryStream?: string;

  /**
   * @schema Firehose#Enabled
   */
  readonly enabled: boolean;

}

/**
 * @schema S3
 */
export interface S3 {
  /**
   * @schema S3#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3#Enabled
   */
  readonly enabled: boolean;

  /**
   * @schema S3#Prefix
   */
  readonly prefix?: string;

}

/**
 * @schema Prometheus
 */
export interface Prometheus {
  /**
   * @schema Prometheus#JmxExporter
   */
  readonly jmxExporter?: JmxExporter;

  /**
   * @schema Prometheus#NodeExporter
   */
  readonly nodeExporter?: NodeExporter;

}

/**
 * @schema ClusterOperationStepInfo
 */
export interface ClusterOperationStepInfo {
  /**
   * @schema ClusterOperationStepInfo#StepStatus
   */
  readonly stepStatus?: string;

}

/**
 * @schema JmxExporter
 */
export interface JmxExporter {
  /**
   * @schema JmxExporter#EnabledInBroker
   */
  readonly enabledInBroker: boolean;

}

/**
 * @schema NodeExporter
 */
export interface NodeExporter {
  /**
   * @schema NodeExporter#EnabledInBroker
   */
  readonly enabledInBroker: boolean;

}
