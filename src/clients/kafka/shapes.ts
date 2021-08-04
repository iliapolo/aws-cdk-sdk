/**
 * @schema KafkaBatchAssociateScramSecretRequest
 */
export interface KafkaBatchAssociateScramSecretRequest {
  /**
   * @schema KafkaBatchAssociateScramSecretRequest#ClusterArn
   */
  readonly clusterArn: string;

  /**
   * @schema KafkaBatchAssociateScramSecretRequest#SecretArnList
   */
  readonly secretArnList: string[];

}

/**
 * @schema KafkaBatchAssociateScramSecretResponse
 */
export interface KafkaBatchAssociateScramSecretResponse {
  /**
   * @schema KafkaBatchAssociateScramSecretResponse#ClusterArn
   */
  readonly clusterArn?: string;

  /**
   * @schema KafkaBatchAssociateScramSecretResponse#UnprocessedScramSecrets
   */
  readonly unprocessedScramSecrets?: KafkaUnprocessedScramSecret[];

}

/**
 * @schema KafkaCreateClusterRequest
 */
export interface KafkaCreateClusterRequest {
  /**
   * @schema KafkaCreateClusterRequest#BrokerNodeGroupInfo
   */
  readonly brokerNodeGroupInfo: KafkaBrokerNodeGroupInfo;

  /**
   * @schema KafkaCreateClusterRequest#ClientAuthentication
   */
  readonly clientAuthentication?: KafkaClientAuthentication;

  /**
   * @schema KafkaCreateClusterRequest#ClusterName
   */
  readonly clusterName: string;

  /**
   * @schema KafkaCreateClusterRequest#ConfigurationInfo
   */
  readonly configurationInfo?: KafkaConfigurationInfo;

  /**
   * @schema KafkaCreateClusterRequest#EncryptionInfo
   */
  readonly encryptionInfo?: KafkaEncryptionInfo;

  /**
   * @schema KafkaCreateClusterRequest#EnhancedMonitoring
   */
  readonly enhancedMonitoring?: string;

  /**
   * @schema KafkaCreateClusterRequest#OpenMonitoring
   */
  readonly openMonitoring?: KafkaOpenMonitoringInfo;

  /**
   * @schema KafkaCreateClusterRequest#KafkaVersion
   */
  readonly kafkaVersion: string;

  /**
   * @schema KafkaCreateClusterRequest#LoggingInfo
   */
  readonly loggingInfo?: KafkaLoggingInfo;

  /**
   * @schema KafkaCreateClusterRequest#NumberOfBrokerNodes
   */
  readonly numberOfBrokerNodes: number;

  /**
   * @schema KafkaCreateClusterRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema KafkaCreateClusterResponse
 */
export interface KafkaCreateClusterResponse {
  /**
   * @schema KafkaCreateClusterResponse#ClusterArn
   */
  readonly clusterArn?: string;

  /**
   * @schema KafkaCreateClusterResponse#ClusterName
   */
  readonly clusterName?: string;

  /**
   * @schema KafkaCreateClusterResponse#State
   */
  readonly state?: string;

}

/**
 * @schema KafkaCreateConfigurationRequest
 */
export interface KafkaCreateConfigurationRequest {
  /**
   * @schema KafkaCreateConfigurationRequest#Description
   */
  readonly description?: string;

  /**
   * @schema KafkaCreateConfigurationRequest#KafkaVersions
   */
  readonly kafkaVersions?: string[];

  /**
   * @schema KafkaCreateConfigurationRequest#Name
   */
  readonly name: string;

  /**
   * @schema KafkaCreateConfigurationRequest#ServerProperties
   */
  readonly serverProperties: any;

}

/**
 * @schema KafkaCreateConfigurationResponse
 */
export interface KafkaCreateConfigurationResponse {
  /**
   * @schema KafkaCreateConfigurationResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema KafkaCreateConfigurationResponse#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema KafkaCreateConfigurationResponse#LatestRevision
   */
  readonly latestRevision?: KafkaConfigurationRevision;

  /**
   * @schema KafkaCreateConfigurationResponse#Name
   */
  readonly name?: string;

  /**
   * @schema KafkaCreateConfigurationResponse#State
   */
  readonly state?: string;

}

/**
 * @schema KafkaDeleteClusterRequest
 */
export interface KafkaDeleteClusterRequest {
  /**
   * @schema KafkaDeleteClusterRequest#ClusterArn
   */
  readonly clusterArn: string;

  /**
   * @schema KafkaDeleteClusterRequest#CurrentVersion
   */
  readonly currentVersion?: string;

}

/**
 * @schema KafkaDeleteClusterResponse
 */
export interface KafkaDeleteClusterResponse {
  /**
   * @schema KafkaDeleteClusterResponse#ClusterArn
   */
  readonly clusterArn?: string;

  /**
   * @schema KafkaDeleteClusterResponse#State
   */
  readonly state?: string;

}

/**
 * @schema KafkaDeleteConfigurationRequest
 */
export interface KafkaDeleteConfigurationRequest {
  /**
   * @schema KafkaDeleteConfigurationRequest#Arn
   */
  readonly arn: string;

}

/**
 * @schema KafkaDeleteConfigurationResponse
 */
export interface KafkaDeleteConfigurationResponse {
  /**
   * @schema KafkaDeleteConfigurationResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema KafkaDeleteConfigurationResponse#State
   */
  readonly state?: string;

}

/**
 * @schema KafkaDescribeClusterRequest
 */
export interface KafkaDescribeClusterRequest {
  /**
   * @schema KafkaDescribeClusterRequest#ClusterArn
   */
  readonly clusterArn: string;

}

/**
 * @schema KafkaDescribeClusterResponse
 */
export interface KafkaDescribeClusterResponse {
  /**
   * @schema KafkaDescribeClusterResponse#ClusterInfo
   */
  readonly clusterInfo?: KafkaClusterInfo;

}

/**
 * @schema KafkaDescribeClusterOperationRequest
 */
export interface KafkaDescribeClusterOperationRequest {
  /**
   * @schema KafkaDescribeClusterOperationRequest#ClusterOperationArn
   */
  readonly clusterOperationArn: string;

}

/**
 * @schema KafkaDescribeClusterOperationResponse
 */
export interface KafkaDescribeClusterOperationResponse {
  /**
   * @schema KafkaDescribeClusterOperationResponse#ClusterOperationInfo
   */
  readonly clusterOperationInfo?: KafkaClusterOperationInfo;

}

/**
 * @schema KafkaDescribeConfigurationRequest
 */
export interface KafkaDescribeConfigurationRequest {
  /**
   * @schema KafkaDescribeConfigurationRequest#Arn
   */
  readonly arn: string;

}

/**
 * @schema KafkaDescribeConfigurationResponse
 */
export interface KafkaDescribeConfigurationResponse {
  /**
   * @schema KafkaDescribeConfigurationResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema KafkaDescribeConfigurationResponse#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema KafkaDescribeConfigurationResponse#Description
   */
  readonly description?: string;

  /**
   * @schema KafkaDescribeConfigurationResponse#KafkaVersions
   */
  readonly kafkaVersions?: string[];

  /**
   * @schema KafkaDescribeConfigurationResponse#LatestRevision
   */
  readonly latestRevision?: KafkaConfigurationRevision;

  /**
   * @schema KafkaDescribeConfigurationResponse#Name
   */
  readonly name?: string;

  /**
   * @schema KafkaDescribeConfigurationResponse#State
   */
  readonly state?: string;

}

/**
 * @schema KafkaDescribeConfigurationRevisionRequest
 */
export interface KafkaDescribeConfigurationRevisionRequest {
  /**
   * @schema KafkaDescribeConfigurationRevisionRequest#Arn
   */
  readonly arn: string;

  /**
   * @schema KafkaDescribeConfigurationRevisionRequest#Revision
   */
  readonly revision: number;

}

/**
 * @schema KafkaDescribeConfigurationRevisionResponse
 */
export interface KafkaDescribeConfigurationRevisionResponse {
  /**
   * @schema KafkaDescribeConfigurationRevisionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema KafkaDescribeConfigurationRevisionResponse#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema KafkaDescribeConfigurationRevisionResponse#Description
   */
  readonly description?: string;

  /**
   * @schema KafkaDescribeConfigurationRevisionResponse#Revision
   */
  readonly revision?: number;

  /**
   * @schema KafkaDescribeConfigurationRevisionResponse#ServerProperties
   */
  readonly serverProperties?: any;

}

/**
 * @schema KafkaBatchDisassociateScramSecretRequest
 */
export interface KafkaBatchDisassociateScramSecretRequest {
  /**
   * @schema KafkaBatchDisassociateScramSecretRequest#ClusterArn
   */
  readonly clusterArn: string;

  /**
   * @schema KafkaBatchDisassociateScramSecretRequest#SecretArnList
   */
  readonly secretArnList: string[];

}

/**
 * @schema KafkaBatchDisassociateScramSecretResponse
 */
export interface KafkaBatchDisassociateScramSecretResponse {
  /**
   * @schema KafkaBatchDisassociateScramSecretResponse#ClusterArn
   */
  readonly clusterArn?: string;

  /**
   * @schema KafkaBatchDisassociateScramSecretResponse#UnprocessedScramSecrets
   */
  readonly unprocessedScramSecrets?: KafkaUnprocessedScramSecret[];

}

/**
 * @schema KafkaGetBootstrapBrokersRequest
 */
export interface KafkaGetBootstrapBrokersRequest {
  /**
   * @schema KafkaGetBootstrapBrokersRequest#ClusterArn
   */
  readonly clusterArn: string;

}

/**
 * @schema KafkaGetBootstrapBrokersResponse
 */
export interface KafkaGetBootstrapBrokersResponse {
  /**
   * @schema KafkaGetBootstrapBrokersResponse#BootstrapBrokerString
   */
  readonly bootstrapBrokerString?: string;

  /**
   * @schema KafkaGetBootstrapBrokersResponse#BootstrapBrokerStringTls
   */
  readonly bootstrapBrokerStringTls?: string;

  /**
   * @schema KafkaGetBootstrapBrokersResponse#BootstrapBrokerStringSaslScram
   */
  readonly bootstrapBrokerStringSaslScram?: string;

}

/**
 * @schema KafkaGetCompatibleKafkaVersionsRequest
 */
export interface KafkaGetCompatibleKafkaVersionsRequest {
  /**
   * @schema KafkaGetCompatibleKafkaVersionsRequest#ClusterArn
   */
  readonly clusterArn?: string;

}

/**
 * @schema KafkaGetCompatibleKafkaVersionsResponse
 */
export interface KafkaGetCompatibleKafkaVersionsResponse {
  /**
   * @schema KafkaGetCompatibleKafkaVersionsResponse#CompatibleKafkaVersions
   */
  readonly compatibleKafkaVersions?: KafkaCompatibleKafkaVersion[];

}

/**
 * @schema KafkaListClusterOperationsRequest
 */
export interface KafkaListClusterOperationsRequest {
  /**
   * @schema KafkaListClusterOperationsRequest#ClusterArn
   */
  readonly clusterArn: string;

  /**
   * @schema KafkaListClusterOperationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema KafkaListClusterOperationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema KafkaListClusterOperationsResponse
 */
export interface KafkaListClusterOperationsResponse {
  /**
   * @schema KafkaListClusterOperationsResponse#ClusterOperationInfoList
   */
  readonly clusterOperationInfoList?: KafkaClusterOperationInfo[];

  /**
   * @schema KafkaListClusterOperationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema KafkaListClustersRequest
 */
export interface KafkaListClustersRequest {
  /**
   * @schema KafkaListClustersRequest#ClusterNameFilter
   */
  readonly clusterNameFilter?: string;

  /**
   * @schema KafkaListClustersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema KafkaListClustersRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema KafkaListClustersResponse
 */
export interface KafkaListClustersResponse {
  /**
   * @schema KafkaListClustersResponse#ClusterInfoList
   */
  readonly clusterInfoList?: KafkaClusterInfo[];

  /**
   * @schema KafkaListClustersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema KafkaListConfigurationRevisionsRequest
 */
export interface KafkaListConfigurationRevisionsRequest {
  /**
   * @schema KafkaListConfigurationRevisionsRequest#Arn
   */
  readonly arn: string;

  /**
   * @schema KafkaListConfigurationRevisionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema KafkaListConfigurationRevisionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema KafkaListConfigurationRevisionsResponse
 */
export interface KafkaListConfigurationRevisionsResponse {
  /**
   * @schema KafkaListConfigurationRevisionsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema KafkaListConfigurationRevisionsResponse#Revisions
   */
  readonly revisions?: KafkaConfigurationRevision[];

}

/**
 * @schema KafkaListConfigurationsRequest
 */
export interface KafkaListConfigurationsRequest {
  /**
   * @schema KafkaListConfigurationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema KafkaListConfigurationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema KafkaListConfigurationsResponse
 */
export interface KafkaListConfigurationsResponse {
  /**
   * @schema KafkaListConfigurationsResponse#Configurations
   */
  readonly configurations?: KafkaConfiguration[];

  /**
   * @schema KafkaListConfigurationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema KafkaListKafkaVersionsRequest
 */
export interface KafkaListKafkaVersionsRequest {
  /**
   * @schema KafkaListKafkaVersionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema KafkaListKafkaVersionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema KafkaListKafkaVersionsResponse
 */
export interface KafkaListKafkaVersionsResponse {
  /**
   * @schema KafkaListKafkaVersionsResponse#KafkaVersions
   */
  readonly kafkaVersions?: KafkaKafkaVersion[];

  /**
   * @schema KafkaListKafkaVersionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema KafkaListNodesRequest
 */
export interface KafkaListNodesRequest {
  /**
   * @schema KafkaListNodesRequest#ClusterArn
   */
  readonly clusterArn: string;

  /**
   * @schema KafkaListNodesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema KafkaListNodesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema KafkaListNodesResponse
 */
export interface KafkaListNodesResponse {
  /**
   * @schema KafkaListNodesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema KafkaListNodesResponse#NodeInfoList
   */
  readonly nodeInfoList?: KafkaNodeInfo[];

}

/**
 * @schema KafkaListScramSecretsRequest
 */
export interface KafkaListScramSecretsRequest {
  /**
   * @schema KafkaListScramSecretsRequest#ClusterArn
   */
  readonly clusterArn: string;

  /**
   * @schema KafkaListScramSecretsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema KafkaListScramSecretsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema KafkaListScramSecretsResponse
 */
export interface KafkaListScramSecretsResponse {
  /**
   * @schema KafkaListScramSecretsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema KafkaListScramSecretsResponse#SecretArnList
   */
  readonly secretArnList?: string[];

}

/**
 * @schema KafkaListTagsForResourceRequest
 */
export interface KafkaListTagsForResourceRequest {
  /**
   * @schema KafkaListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema KafkaListTagsForResourceResponse
 */
export interface KafkaListTagsForResourceResponse {
  /**
   * @schema KafkaListTagsForResourceResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema KafkaRebootBrokerRequest
 */
export interface KafkaRebootBrokerRequest {
  /**
   * @schema KafkaRebootBrokerRequest#BrokerIds
   */
  readonly brokerIds: string[];

  /**
   * @schema KafkaRebootBrokerRequest#ClusterArn
   */
  readonly clusterArn: string;

}

/**
 * @schema KafkaRebootBrokerResponse
 */
export interface KafkaRebootBrokerResponse {
  /**
   * @schema KafkaRebootBrokerResponse#ClusterArn
   */
  readonly clusterArn?: string;

  /**
   * @schema KafkaRebootBrokerResponse#ClusterOperationArn
   */
  readonly clusterOperationArn?: string;

}

/**
 * @schema KafkaTagResourceRequest
 */
export interface KafkaTagResourceRequest {
  /**
   * @schema KafkaTagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema KafkaTagResourceRequest#Tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema KafkaUntagResourceRequest
 */
export interface KafkaUntagResourceRequest {
  /**
   * @schema KafkaUntagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema KafkaUntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema KafkaUpdateBrokerCountRequest
 */
export interface KafkaUpdateBrokerCountRequest {
  /**
   * @schema KafkaUpdateBrokerCountRequest#ClusterArn
   */
  readonly clusterArn: string;

  /**
   * @schema KafkaUpdateBrokerCountRequest#CurrentVersion
   */
  readonly currentVersion: string;

  /**
   * @schema KafkaUpdateBrokerCountRequest#TargetNumberOfBrokerNodes
   */
  readonly targetNumberOfBrokerNodes: number;

}

/**
 * @schema KafkaUpdateBrokerCountResponse
 */
export interface KafkaUpdateBrokerCountResponse {
  /**
   * @schema KafkaUpdateBrokerCountResponse#ClusterArn
   */
  readonly clusterArn?: string;

  /**
   * @schema KafkaUpdateBrokerCountResponse#ClusterOperationArn
   */
  readonly clusterOperationArn?: string;

}

/**
 * @schema KafkaUpdateBrokerStorageRequest
 */
export interface KafkaUpdateBrokerStorageRequest {
  /**
   * @schema KafkaUpdateBrokerStorageRequest#ClusterArn
   */
  readonly clusterArn: string;

  /**
   * @schema KafkaUpdateBrokerStorageRequest#CurrentVersion
   */
  readonly currentVersion: string;

  /**
   * @schema KafkaUpdateBrokerStorageRequest#TargetBrokerEBSVolumeInfo
   */
  readonly targetBrokerEbsVolumeInfo: KafkaBrokerEbsVolumeInfo[];

}

/**
 * @schema KafkaUpdateBrokerStorageResponse
 */
export interface KafkaUpdateBrokerStorageResponse {
  /**
   * @schema KafkaUpdateBrokerStorageResponse#ClusterArn
   */
  readonly clusterArn?: string;

  /**
   * @schema KafkaUpdateBrokerStorageResponse#ClusterOperationArn
   */
  readonly clusterOperationArn?: string;

}

/**
 * @schema KafkaUpdateConfigurationRequest
 */
export interface KafkaUpdateConfigurationRequest {
  /**
   * @schema KafkaUpdateConfigurationRequest#Arn
   */
  readonly arn: string;

  /**
   * @schema KafkaUpdateConfigurationRequest#Description
   */
  readonly description?: string;

  /**
   * @schema KafkaUpdateConfigurationRequest#ServerProperties
   */
  readonly serverProperties: any;

}

/**
 * @schema KafkaUpdateConfigurationResponse
 */
export interface KafkaUpdateConfigurationResponse {
  /**
   * @schema KafkaUpdateConfigurationResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema KafkaUpdateConfigurationResponse#LatestRevision
   */
  readonly latestRevision?: KafkaConfigurationRevision;

}

/**
 * @schema KafkaUpdateClusterConfigurationRequest
 */
export interface KafkaUpdateClusterConfigurationRequest {
  /**
   * @schema KafkaUpdateClusterConfigurationRequest#ClusterArn
   */
  readonly clusterArn: string;

  /**
   * @schema KafkaUpdateClusterConfigurationRequest#ConfigurationInfo
   */
  readonly configurationInfo: KafkaConfigurationInfo;

  /**
   * @schema KafkaUpdateClusterConfigurationRequest#CurrentVersion
   */
  readonly currentVersion: string;

}

/**
 * @schema KafkaUpdateClusterConfigurationResponse
 */
export interface KafkaUpdateClusterConfigurationResponse {
  /**
   * @schema KafkaUpdateClusterConfigurationResponse#ClusterArn
   */
  readonly clusterArn?: string;

  /**
   * @schema KafkaUpdateClusterConfigurationResponse#ClusterOperationArn
   */
  readonly clusterOperationArn?: string;

}

/**
 * @schema KafkaUpdateClusterKafkaVersionRequest
 */
export interface KafkaUpdateClusterKafkaVersionRequest {
  /**
   * @schema KafkaUpdateClusterKafkaVersionRequest#ClusterArn
   */
  readonly clusterArn: string;

  /**
   * @schema KafkaUpdateClusterKafkaVersionRequest#ConfigurationInfo
   */
  readonly configurationInfo?: KafkaConfigurationInfo;

  /**
   * @schema KafkaUpdateClusterKafkaVersionRequest#CurrentVersion
   */
  readonly currentVersion: string;

  /**
   * @schema KafkaUpdateClusterKafkaVersionRequest#TargetKafkaVersion
   */
  readonly targetKafkaVersion: string;

}

/**
 * @schema KafkaUpdateClusterKafkaVersionResponse
 */
export interface KafkaUpdateClusterKafkaVersionResponse {
  /**
   * @schema KafkaUpdateClusterKafkaVersionResponse#ClusterArn
   */
  readonly clusterArn?: string;

  /**
   * @schema KafkaUpdateClusterKafkaVersionResponse#ClusterOperationArn
   */
  readonly clusterOperationArn?: string;

}

/**
 * @schema KafkaUpdateMonitoringRequest
 */
export interface KafkaUpdateMonitoringRequest {
  /**
   * @schema KafkaUpdateMonitoringRequest#ClusterArn
   */
  readonly clusterArn: string;

  /**
   * @schema KafkaUpdateMonitoringRequest#CurrentVersion
   */
  readonly currentVersion: string;

  /**
   * @schema KafkaUpdateMonitoringRequest#EnhancedMonitoring
   */
  readonly enhancedMonitoring?: string;

  /**
   * @schema KafkaUpdateMonitoringRequest#OpenMonitoring
   */
  readonly openMonitoring?: KafkaOpenMonitoringInfo;

  /**
   * @schema KafkaUpdateMonitoringRequest#LoggingInfo
   */
  readonly loggingInfo?: KafkaLoggingInfo;

}

/**
 * @schema KafkaUpdateMonitoringResponse
 */
export interface KafkaUpdateMonitoringResponse {
  /**
   * @schema KafkaUpdateMonitoringResponse#ClusterArn
   */
  readonly clusterArn?: string;

  /**
   * @schema KafkaUpdateMonitoringResponse#ClusterOperationArn
   */
  readonly clusterOperationArn?: string;

}

/**
 * @schema KafkaUnprocessedScramSecret
 */
export interface KafkaUnprocessedScramSecret {
  /**
   * @schema KafkaUnprocessedScramSecret#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema KafkaUnprocessedScramSecret#ErrorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema KafkaUnprocessedScramSecret#SecretArn
   */
  readonly secretArn?: string;

}

/**
 * @schema KafkaBrokerNodeGroupInfo
 */
export interface KafkaBrokerNodeGroupInfo {
  /**
   * @schema KafkaBrokerNodeGroupInfo#BrokerAZDistribution
   */
  readonly brokerAzDistribution?: string;

  /**
   * @schema KafkaBrokerNodeGroupInfo#ClientSubnets
   */
  readonly clientSubnets: string[];

  /**
   * @schema KafkaBrokerNodeGroupInfo#InstanceType
   */
  readonly instanceType: string;

  /**
   * @schema KafkaBrokerNodeGroupInfo#SecurityGroups
   */
  readonly securityGroups?: string[];

  /**
   * @schema KafkaBrokerNodeGroupInfo#StorageInfo
   */
  readonly storageInfo?: KafkaStorageInfo;

}

/**
 * @schema KafkaClientAuthentication
 */
export interface KafkaClientAuthentication {
  /**
   * @schema KafkaClientAuthentication#Sasl
   */
  readonly sasl?: KafkaSasl;

  /**
   * @schema KafkaClientAuthentication#Tls
   */
  readonly tls?: KafkaTls;

}

/**
 * @schema KafkaConfigurationInfo
 */
export interface KafkaConfigurationInfo {
  /**
   * @schema KafkaConfigurationInfo#Arn
   */
  readonly arn: string;

  /**
   * @schema KafkaConfigurationInfo#Revision
   */
  readonly revision: number;

}

/**
 * @schema KafkaEncryptionInfo
 */
export interface KafkaEncryptionInfo {
  /**
   * @schema KafkaEncryptionInfo#EncryptionAtRest
   */
  readonly encryptionAtRest?: KafkaEncryptionAtRest;

  /**
   * @schema KafkaEncryptionInfo#EncryptionInTransit
   */
  readonly encryptionInTransit?: KafkaEncryptionInTransit;

}

/**
 * @schema KafkaOpenMonitoringInfo
 */
export interface KafkaOpenMonitoringInfo {
  /**
   * @schema KafkaOpenMonitoringInfo#Prometheus
   */
  readonly prometheus: KafkaPrometheusInfo;

}

/**
 * @schema KafkaLoggingInfo
 */
export interface KafkaLoggingInfo {
  /**
   * @schema KafkaLoggingInfo#BrokerLogs
   */
  readonly brokerLogs: KafkaBrokerLogs;

}

/**
 * @schema KafkaConfigurationRevision
 */
export interface KafkaConfigurationRevision {
  /**
   * @schema KafkaConfigurationRevision#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema KafkaConfigurationRevision#Description
   */
  readonly description?: string;

  /**
   * @schema KafkaConfigurationRevision#Revision
   */
  readonly revision: number;

}

/**
 * @schema KafkaClusterInfo
 */
export interface KafkaClusterInfo {
  /**
   * @schema KafkaClusterInfo#ActiveOperationArn
   */
  readonly activeOperationArn?: string;

  /**
   * @schema KafkaClusterInfo#BrokerNodeGroupInfo
   */
  readonly brokerNodeGroupInfo?: KafkaBrokerNodeGroupInfo;

  /**
   * @schema KafkaClusterInfo#ClientAuthentication
   */
  readonly clientAuthentication?: KafkaClientAuthentication;

  /**
   * @schema KafkaClusterInfo#ClusterArn
   */
  readonly clusterArn?: string;

  /**
   * @schema KafkaClusterInfo#ClusterName
   */
  readonly clusterName?: string;

  /**
   * @schema KafkaClusterInfo#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema KafkaClusterInfo#CurrentBrokerSoftwareInfo
   */
  readonly currentBrokerSoftwareInfo?: KafkaBrokerSoftwareInfo;

  /**
   * @schema KafkaClusterInfo#CurrentVersion
   */
  readonly currentVersion?: string;

  /**
   * @schema KafkaClusterInfo#EncryptionInfo
   */
  readonly encryptionInfo?: KafkaEncryptionInfo;

  /**
   * @schema KafkaClusterInfo#EnhancedMonitoring
   */
  readonly enhancedMonitoring?: string;

  /**
   * @schema KafkaClusterInfo#OpenMonitoring
   */
  readonly openMonitoring?: KafkaOpenMonitoring;

  /**
   * @schema KafkaClusterInfo#LoggingInfo
   */
  readonly loggingInfo?: KafkaLoggingInfo;

  /**
   * @schema KafkaClusterInfo#NumberOfBrokerNodes
   */
  readonly numberOfBrokerNodes?: number;

  /**
   * @schema KafkaClusterInfo#State
   */
  readonly state?: string;

  /**
   * @schema KafkaClusterInfo#StateInfo
   */
  readonly stateInfo?: KafkaStateInfo;

  /**
   * @schema KafkaClusterInfo#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema KafkaClusterInfo#ZookeeperConnectString
   */
  readonly zookeeperConnectString?: string;

  /**
   * @schema KafkaClusterInfo#ZookeeperConnectStringTls
   */
  readonly zookeeperConnectStringTls?: string;

}

/**
 * @schema KafkaClusterOperationInfo
 */
export interface KafkaClusterOperationInfo {
  /**
   * @schema KafkaClusterOperationInfo#ClientRequestId
   */
  readonly clientRequestId?: string;

  /**
   * @schema KafkaClusterOperationInfo#ClusterArn
   */
  readonly clusterArn?: string;

  /**
   * @schema KafkaClusterOperationInfo#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema KafkaClusterOperationInfo#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema KafkaClusterOperationInfo#ErrorInfo
   */
  readonly errorInfo?: KafkaErrorInfo;

  /**
   * @schema KafkaClusterOperationInfo#OperationArn
   */
  readonly operationArn?: string;

  /**
   * @schema KafkaClusterOperationInfo#OperationState
   */
  readonly operationState?: string;

  /**
   * @schema KafkaClusterOperationInfo#OperationSteps
   */
  readonly operationSteps?: KafkaClusterOperationStep[];

  /**
   * @schema KafkaClusterOperationInfo#OperationType
   */
  readonly operationType?: string;

  /**
   * @schema KafkaClusterOperationInfo#SourceClusterInfo
   */
  readonly sourceClusterInfo?: KafkaMutableClusterInfo;

  /**
   * @schema KafkaClusterOperationInfo#TargetClusterInfo
   */
  readonly targetClusterInfo?: KafkaMutableClusterInfo;

}

/**
 * @schema KafkaCompatibleKafkaVersion
 */
export interface KafkaCompatibleKafkaVersion {
  /**
   * @schema KafkaCompatibleKafkaVersion#SourceVersion
   */
  readonly sourceVersion?: string;

  /**
   * @schema KafkaCompatibleKafkaVersion#TargetVersions
   */
  readonly targetVersions?: string[];

}

/**
 * @schema KafkaConfiguration
 */
export interface KafkaConfiguration {
  /**
   * @schema KafkaConfiguration#Arn
   */
  readonly arn: string;

  /**
   * @schema KafkaConfiguration#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema KafkaConfiguration#Description
   */
  readonly description: string;

  /**
   * @schema KafkaConfiguration#KafkaVersions
   */
  readonly kafkaVersions: string[];

  /**
   * @schema KafkaConfiguration#LatestRevision
   */
  readonly latestRevision: KafkaConfigurationRevision;

  /**
   * @schema KafkaConfiguration#Name
   */
  readonly name: string;

  /**
   * @schema KafkaConfiguration#State
   */
  readonly state: string;

}

/**
 * @schema KafkaKafkaVersion
 */
export interface KafkaKafkaVersion {
  /**
   * @schema KafkaKafkaVersion#Version
   */
  readonly version?: string;

  /**
   * @schema KafkaKafkaVersion#Status
   */
  readonly status?: string;

}

/**
 * @schema KafkaNodeInfo
 */
export interface KafkaNodeInfo {
  /**
   * @schema KafkaNodeInfo#AddedToClusterTime
   */
  readonly addedToClusterTime?: string;

  /**
   * @schema KafkaNodeInfo#BrokerNodeInfo
   */
  readonly brokerNodeInfo?: KafkaBrokerNodeInfo;

  /**
   * @schema KafkaNodeInfo#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema KafkaNodeInfo#NodeARN
   */
  readonly nodeArn?: string;

  /**
   * @schema KafkaNodeInfo#NodeType
   */
  readonly nodeType?: string;

  /**
   * @schema KafkaNodeInfo#ZookeeperNodeInfo
   */
  readonly zookeeperNodeInfo?: KafkaZookeeperNodeInfo;

}

/**
 * @schema KafkaBrokerEbsVolumeInfo
 */
export interface KafkaBrokerEbsVolumeInfo {
  /**
   * @schema KafkaBrokerEbsVolumeInfo#KafkaBrokerNodeId
   */
  readonly kafkaBrokerNodeId: string;

  /**
   * @schema KafkaBrokerEbsVolumeInfo#VolumeSizeGB
   */
  readonly volumeSizeGb: number;

}

/**
 * @schema KafkaStorageInfo
 */
export interface KafkaStorageInfo {
  /**
   * @schema KafkaStorageInfo#EbsStorageInfo
   */
  readonly ebsStorageInfo?: KafkaEbsStorageInfo;

}

/**
 * @schema KafkaSasl
 */
export interface KafkaSasl {
  /**
   * @schema KafkaSasl#Scram
   */
  readonly scram?: KafkaScram;

}

/**
 * @schema KafkaTls
 */
export interface KafkaTls {
  /**
   * @schema KafkaTls#CertificateAuthorityArnList
   */
  readonly certificateAuthorityArnList?: string[];

}

/**
 * @schema KafkaEncryptionAtRest
 */
export interface KafkaEncryptionAtRest {
  /**
   * @schema KafkaEncryptionAtRest#DataVolumeKMSKeyId
   */
  readonly dataVolumeKmsKeyId: string;

}

/**
 * @schema KafkaEncryptionInTransit
 */
export interface KafkaEncryptionInTransit {
  /**
   * @schema KafkaEncryptionInTransit#ClientBroker
   */
  readonly clientBroker?: string;

  /**
   * @schema KafkaEncryptionInTransit#InCluster
   */
  readonly inCluster?: boolean;

}

/**
 * @schema KafkaPrometheusInfo
 */
export interface KafkaPrometheusInfo {
  /**
   * @schema KafkaPrometheusInfo#JmxExporter
   */
  readonly jmxExporter?: KafkaJmxExporterInfo;

  /**
   * @schema KafkaPrometheusInfo#NodeExporter
   */
  readonly nodeExporter?: KafkaNodeExporterInfo;

}

/**
 * @schema KafkaBrokerLogs
 */
export interface KafkaBrokerLogs {
  /**
   * @schema KafkaBrokerLogs#CloudWatchLogs
   */
  readonly cloudWatchLogs?: KafkaCloudWatchLogs;

  /**
   * @schema KafkaBrokerLogs#Firehose
   */
  readonly firehose?: KafkaFirehose;

  /**
   * @schema KafkaBrokerLogs#S3
   */
  readonly s3?: KafkaS3;

}

/**
 * @schema KafkaBrokerSoftwareInfo
 */
export interface KafkaBrokerSoftwareInfo {
  /**
   * @schema KafkaBrokerSoftwareInfo#ConfigurationArn
   */
  readonly configurationArn?: string;

  /**
   * @schema KafkaBrokerSoftwareInfo#ConfigurationRevision
   */
  readonly configurationRevision?: number;

  /**
   * @schema KafkaBrokerSoftwareInfo#KafkaVersion
   */
  readonly kafkaVersion?: string;

}

/**
 * @schema KafkaOpenMonitoring
 */
export interface KafkaOpenMonitoring {
  /**
   * @schema KafkaOpenMonitoring#Prometheus
   */
  readonly prometheus: KafkaPrometheus;

}

/**
 * @schema KafkaStateInfo
 */
export interface KafkaStateInfo {
  /**
   * @schema KafkaStateInfo#Code
   */
  readonly code?: string;

  /**
   * @schema KafkaStateInfo#Message
   */
  readonly message?: string;

}

/**
 * @schema KafkaErrorInfo
 */
export interface KafkaErrorInfo {
  /**
   * @schema KafkaErrorInfo#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema KafkaErrorInfo#ErrorString
   */
  readonly errorString?: string;

}

/**
 * @schema KafkaClusterOperationStep
 */
export interface KafkaClusterOperationStep {
  /**
   * @schema KafkaClusterOperationStep#StepInfo
   */
  readonly stepInfo?: KafkaClusterOperationStepInfo;

  /**
   * @schema KafkaClusterOperationStep#StepName
   */
  readonly stepName?: string;

}

/**
 * @schema KafkaMutableClusterInfo
 */
export interface KafkaMutableClusterInfo {
  /**
   * @schema KafkaMutableClusterInfo#BrokerEBSVolumeInfo
   */
  readonly brokerEbsVolumeInfo?: KafkaBrokerEbsVolumeInfo[];

  /**
   * @schema KafkaMutableClusterInfo#ConfigurationInfo
   */
  readonly configurationInfo?: KafkaConfigurationInfo;

  /**
   * @schema KafkaMutableClusterInfo#NumberOfBrokerNodes
   */
  readonly numberOfBrokerNodes?: number;

  /**
   * @schema KafkaMutableClusterInfo#EnhancedMonitoring
   */
  readonly enhancedMonitoring?: string;

  /**
   * @schema KafkaMutableClusterInfo#OpenMonitoring
   */
  readonly openMonitoring?: KafkaOpenMonitoring;

  /**
   * @schema KafkaMutableClusterInfo#KafkaVersion
   */
  readonly kafkaVersion?: string;

  /**
   * @schema KafkaMutableClusterInfo#LoggingInfo
   */
  readonly loggingInfo?: KafkaLoggingInfo;

}

/**
 * @schema KafkaBrokerNodeInfo
 */
export interface KafkaBrokerNodeInfo {
  /**
   * @schema KafkaBrokerNodeInfo#AttachedENIId
   */
  readonly attachedEniId?: string;

  /**
   * @schema KafkaBrokerNodeInfo#BrokerId
   */
  readonly brokerId?: number;

  /**
   * @schema KafkaBrokerNodeInfo#ClientSubnet
   */
  readonly clientSubnet?: string;

  /**
   * @schema KafkaBrokerNodeInfo#ClientVpcIpAddress
   */
  readonly clientVpcIpAddress?: string;

  /**
   * @schema KafkaBrokerNodeInfo#CurrentBrokerSoftwareInfo
   */
  readonly currentBrokerSoftwareInfo?: KafkaBrokerSoftwareInfo;

  /**
   * @schema KafkaBrokerNodeInfo#Endpoints
   */
  readonly endpoints?: string[];

}

/**
 * @schema KafkaZookeeperNodeInfo
 */
export interface KafkaZookeeperNodeInfo {
  /**
   * @schema KafkaZookeeperNodeInfo#AttachedENIId
   */
  readonly attachedEniId?: string;

  /**
   * @schema KafkaZookeeperNodeInfo#ClientVpcIpAddress
   */
  readonly clientVpcIpAddress?: string;

  /**
   * @schema KafkaZookeeperNodeInfo#Endpoints
   */
  readonly endpoints?: string[];

  /**
   * @schema KafkaZookeeperNodeInfo#ZookeeperId
   */
  readonly zookeeperId?: number;

  /**
   * @schema KafkaZookeeperNodeInfo#ZookeeperVersion
   */
  readonly zookeeperVersion?: string;

}

/**
 * @schema KafkaEbsStorageInfo
 */
export interface KafkaEbsStorageInfo {
  /**
   * @schema KafkaEbsStorageInfo#VolumeSize
   */
  readonly volumeSize?: number;

}

/**
 * @schema KafkaScram
 */
export interface KafkaScram {
  /**
   * @schema KafkaScram#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema KafkaJmxExporterInfo
 */
export interface KafkaJmxExporterInfo {
  /**
   * @schema KafkaJmxExporterInfo#EnabledInBroker
   */
  readonly enabledInBroker: boolean;

}

/**
 * @schema KafkaNodeExporterInfo
 */
export interface KafkaNodeExporterInfo {
  /**
   * @schema KafkaNodeExporterInfo#EnabledInBroker
   */
  readonly enabledInBroker: boolean;

}

/**
 * @schema KafkaCloudWatchLogs
 */
export interface KafkaCloudWatchLogs {
  /**
   * @schema KafkaCloudWatchLogs#Enabled
   */
  readonly enabled: boolean;

  /**
   * @schema KafkaCloudWatchLogs#LogGroup
   */
  readonly logGroup?: string;

}

/**
 * @schema KafkaFirehose
 */
export interface KafkaFirehose {
  /**
   * @schema KafkaFirehose#DeliveryStream
   */
  readonly deliveryStream?: string;

  /**
   * @schema KafkaFirehose#Enabled
   */
  readonly enabled: boolean;

}

/**
 * @schema KafkaS3
 */
export interface KafkaS3 {
  /**
   * @schema KafkaS3#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema KafkaS3#Enabled
   */
  readonly enabled: boolean;

  /**
   * @schema KafkaS3#Prefix
   */
  readonly prefix?: string;

}

/**
 * @schema KafkaPrometheus
 */
export interface KafkaPrometheus {
  /**
   * @schema KafkaPrometheus#JmxExporter
   */
  readonly jmxExporter?: KafkaJmxExporter;

  /**
   * @schema KafkaPrometheus#NodeExporter
   */
  readonly nodeExporter?: KafkaNodeExporter;

}

/**
 * @schema KafkaClusterOperationStepInfo
 */
export interface KafkaClusterOperationStepInfo {
  /**
   * @schema KafkaClusterOperationStepInfo#StepStatus
   */
  readonly stepStatus?: string;

}

/**
 * @schema KafkaJmxExporter
 */
export interface KafkaJmxExporter {
  /**
   * @schema KafkaJmxExporter#EnabledInBroker
   */
  readonly enabledInBroker: boolean;

}

/**
 * @schema KafkaNodeExporter
 */
export interface KafkaNodeExporter {
  /**
   * @schema KafkaNodeExporter#EnabledInBroker
   */
  readonly enabledInBroker: boolean;

}
