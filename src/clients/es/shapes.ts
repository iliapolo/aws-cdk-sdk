/**
 * Contains interfaces for use with the ES client.
 */
export interface AcceptInboundCrossClusterSearchConnectionRequest {
  /**
   * The id of the inbound connection that you want to accept.
   */
  readonly crossClusterSearchConnectionId: CrossClusterSearchConnectionId;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface AcceptInboundCrossClusterSearchConnectionResponse {
  /**
   * Specifies the InboundCrossClusterSearchConnection of accepted inbound connection.
   */
  readonly crossClusterSearchConnection?: InboundCrossClusterSearchConnection;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface InboundCrossClusterSearchConnection {
  /**
   * Specifies the DomainInformation for the source Elasticsearch domain.
   */
  readonly sourceDomainInfo?: DomainInformation;
  /**
   * Specifies the DomainInformation for the destination Elasticsearch domain.
   */
  readonly destinationDomainInfo?: DomainInformation;
  /**
   * Specifies the connection id for the inbound cross-cluster search connection.
   */
  readonly crossClusterSearchConnectionId?: CrossClusterSearchConnectionId;
  /**
   * Specifies the InboundCrossClusterSearchConnectionStatus for the outbound connection.
   */
  readonly connectionStatus?: InboundCrossClusterSearchConnectionStatus;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface DomainInformation {
  /**
   * Specifies the DomainName.
   */
  readonly ownerId?: OwnerId;
  /**
   * Specifies the DomainName.
   */
  readonly domainName: DomainName;
  /**
   * Specifies the DomainName.
   */
  readonly region?: Region;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface DomainInformation {
  /**
   * Specifies the DomainName.
   */
  readonly ownerId?: OwnerId;
  /**
   * Specifies the DomainName.
   */
  readonly domainName: DomainName;
  /**
   * Specifies the DomainName.
   */
  readonly region?: Region;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface InboundCrossClusterSearchConnectionStatus {
  /**
   * The state code for inbound connection.
   * This can be one of the following:  PENDING_ACCEPTANCE: Inbound connection is not yet accepted by destination domain owner.
   * APPROVED: Inbound connection is pending acceptance by destination domain owner.
   * REJECTING: Inbound connection rejection is in process.
   * REJECTED: Inbound connection is rejected.
   * DELETING: Inbound connection deletion is in progress.
   * DELETED: Inbound connection is deleted and cannot be used further.
   */
  readonly statusCode?: InboundCrossClusterSearchConnectionStatusCode;
  /**
   * Specifies verbose information for the inbound connection status.
   */
  readonly message?: CrossClusterSearchConnectionStatusMessage;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface AddTagsRequest {
  /**
   * Specify the ARN for which you want to add the tags.
   */
  readonly arn: ARN;
  /**
   * List of Tag that need to be added for the Elasticsearch domain.
   */
  readonly tagList: TagList;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface Tag {
  /**
   * Specifies the TagKey, the name of the tag.
   * Tag keys must be unique for the Elasticsearch domain to which they are attached.
   */
  readonly key: TagKey;
  /**
   * Specifies the TagValue, the value assigned to the corresponding tag key.
   * Tag values can be null and do not have to be unique in a tag set.
   * For example, you can have a key value pair in a tag set of project : Trinity and cost-center : Trinity.
   */
  readonly value: TagValue;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface AssociatePackageRequest {
  /**
   * Internal ID of the package that you want to associate with a domain.
   * Use DescribePackages to find this value.
   */
  readonly packageId: PackageID;
  /**
   * Name of the domain that you want to associate the package with.
   */
  readonly domainName: DomainName;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface AssociatePackageResponse {
  /**
   * DomainPackageDetails.
   */
  readonly domainPackageDetails?: DomainPackageDetails;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface DomainPackageDetails {
  /**
   * Internal ID of the package.
   */
  readonly packageId?: PackageID;
  /**
   * User specified name of the package.
   */
  readonly packageName?: PackageName;
  /**
   * Currently supports only TXT-DICTIONARY.
   */
  readonly packageType?: PackageType;
  /**
   * Timestamp of the most-recent update to the association status.
   */
  readonly lastUpdated?: LastUpdated;
  /**
   * Name of the domain you've associated a package with.
   */
  readonly domainName?: DomainName;
  /**
   * State of the association.
   * Values are ASSOCIATING/ASSOCIATION_FAILED/ACTIVE/DISSOCIATING/DISSOCIATION_FAILED.
   */
  readonly domainPackageStatus?: DomainPackageStatus;
  /**
   * State of the association.
   * Values are ASSOCIATING/ASSOCIATION_FAILED/ACTIVE/DISSOCIATING/DISSOCIATION_FAILED.
   */
  readonly packageVersion?: PackageVersion;
  /**
   * The relative path on Amazon ES nodes, which can be used as synonym_path when the package is synonym file.
   */
  readonly referencePath?: ReferencePath;
  /**
   * Additional information if the package is in an error state.
   * Null otherwise.
   */
  readonly errorDetails?: ErrorDetails;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface ErrorDetails {
  /**
   * Specifies the status of the Encryption At Rest options for the specified Elasticsearch domain.
   */
  readonly errorType?: ErrorType;
  /**
   * Specifies the status of the Encryption At Rest options for the specified Elasticsearch domain.
   */
  readonly errorMessage?: ErrorMessage;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface CancelElasticsearchServiceSoftwareUpdateRequest {
  /**
   * The name of the domain that you want to stop the latest service software update on.
   */
  readonly domainName: DomainName;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface CancelElasticsearchServiceSoftwareUpdateResponse {
  /**
   * The current status of the Elasticsearch service software update.
   */
  readonly serviceSoftwareOptions?: ServiceSoftwareOptions;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface ServiceSoftwareOptions {
  /**
   * The current service software version that is present on the domain.
   */
  readonly currentVersion?: String;
  /**
   * The new service software version if one is available.
   */
  readonly newVersion?: String;
  /**
   * True if you are able to update you service software version.
   * False if you are not able to update your service software version.
   */
  readonly updateAvailable?: Boolean;
  /**
   * True if you are able to cancel your service software version update.
   * False if you are not able to cancel your service software version.
   */
  readonly cancellable?: Boolean;
  /**
   * The status of your service software update.
   * This field can take the following values: ELIGIBLE, PENDING_UPDATE, IN_PROGRESS, COMPLETED, and NOT_ELIGIBLE.
   */
  readonly updateStatus?: DeploymentStatus;
  /**
   * The description of the UpdateStatus.
   */
  readonly description?: String;
  /**
   * Timestamp, in Epoch time, until which you can manually request a service software update.
   * After this date, we automatically update your service software.
   */
  readonly automatedUpdateDate?: DeploymentCloseDateTimeStamp;
  /**
   * True if a service software is never automatically updated.
   * False if a service software is automatically updated after AutomatedUpdateDate.
   */
  readonly optionalDeployment?: Boolean;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface CreateElasticsearchDomainRequest {
  /**
   * The name of the Elasticsearch domain that you are creating.
   * Domain names are unique across the domains owned by an account within an AWS region.
   * Domain names must start with a lowercase letter and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
   */
  readonly domainName: DomainName;
  /**
   * String of format X.
   * Y to specify version for the Elasticsearch domain eg.
   * "1.
   * 5" or "2.
   * 3".
   * For more information, see Creating Elasticsearch Domains in the Amazon Elasticsearch Service Developer Guide.
   */
  readonly elasticsearchVersion?: ElasticsearchVersionString;
  /**
   * Configuration options for an Elasticsearch domain.
   * Specifies the instance type and number of instances in the domain cluster.
   */
  readonly elasticsearchClusterConfig?: ElasticsearchClusterConfig;
  /**
   * Options to enable, disable and specify the type and size of EBS storage volumes.
   */
  readonly ebsOptions?: EBSOptions;
  /**
   * IAM access policy as a JSON-formatted string.
   */
  readonly accessPolicies?: PolicyDocument;
  /**
   * Option to set time, in UTC format, of the daily automated snapshot.
   * Default value is 0 hours.
   */
  readonly snapshotOptions?: SnapshotOptions;
  /**
   * Options to specify the subnets and security groups for VPC endpoint.
   * For more information, see Creating a VPC in VPC Endpoints for Amazon Elasticsearch Service Domains.
   */
  readonly vpcOptions?: VPCOptions;
  /**
   * Options to specify the Cognito user and identity pools for Kibana authentication.
   * For more information, see Amazon Cognito Authentication for Kibana.
   */
  readonly cognitoOptions?: CognitoOptions;
  /**
   * Specifies the Encryption At Rest Options.
   */
  readonly encryptionAtRestOptions?: EncryptionAtRestOptions;
  /**
   * Specifies the NodeToNodeEncryptionOptions.
   */
  readonly nodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions;
  /**
   * Option to allow references to indices in an HTTP request body.
   * Must be false when configuring access to individual sub-resources.
   * By default, the value is true.
   * See Configuration Advanced Options for more information.
   */
  readonly advancedOptions?: AdvancedOptions;
  /**
   * Map of LogType and LogPublishingOption, each containing options to publish a given type of Elasticsearch log.
   */
  readonly logPublishingOptions?: LogPublishingOptions;
  /**
   * Options to specify configuration that will be applied to the domain endpoint.
   */
  readonly domainEndpointOptions?: DomainEndpointOptions;
  /**
   * Specifies advanced security options.
   */
  readonly advancedSecurityOptions?: AdvancedSecurityOptionsInput;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface ElasticsearchClusterConfig {
  /**
   * The instance type for an Elasticsearch cluster.
   * UltraWarm instance types are not supported for data instances.
   */
  readonly instanceType?: ESPartitionInstanceType;
  /**
   * The number of instances in the specified domain cluster.
   */
  readonly instanceCount?: IntegerClass;
  /**
   * A boolean value to indicate whether a dedicated master node is enabled.
   * See About Dedicated Master Nodes for more information.
   */
  readonly dedicatedMasterEnabled?: Boolean;
  /**
   * A boolean value to indicate whether zone awareness is enabled.
   * See About Zone Awareness for more information.
   */
  readonly zoneAwarenessEnabled?: Boolean;
  /**
   * Specifies the zone awareness configuration for a domain when zone awareness is enabled.
   */
  readonly zoneAwarenessConfig?: ZoneAwarenessConfig;
  /**
   * The instance type for a dedicated master node.
   */
  readonly dedicatedMasterType?: ESPartitionInstanceType;
  /**
   * Total number of dedicated master nodes, active and on standby, for the cluster.
   */
  readonly dedicatedMasterCount?: IntegerClass;
  /**
   * True to enable warm storage.
   */
  readonly warmEnabled?: Boolean;
  /**
   * The instance type for the Elasticsearch cluster's warm nodes.
   */
  readonly warmType?: ESWarmPartitionInstanceType;
  /**
   * The number of warm nodes in the cluster.
   */
  readonly warmCount?: IntegerClass;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface ZoneAwarenessConfig {
  /**
   * An integer value to indicate the number of availability zones for a domain when zone awareness is enabled.
   * This should be equal to number of subnets if VPC endpoints is enabled.
   */
  readonly availabilityZoneCount?: IntegerClass;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface EBSOptions {
  /**
   * Specifies whether EBS-based storage is enabled.
   */
  readonly ebsEnabled?: Boolean;
  /**
   * Specifies the volume type for EBS-based storage.
   */
  readonly volumeType?: VolumeType;
  /**
   * Integer to specify the size of an EBS volume.
   */
  readonly volumeSize?: IntegerClass;
  /**
   * Specifies the IOPD for a Provisioned IOPS EBS volume (SSD).
   */
  readonly iops?: IntegerClass;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface SnapshotOptions {
  /**
   * Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain.
   * Default value is 0 hours.
   */
  readonly automatedSnapshotStartHour?: IntegerClass;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface VPCOptions {
  /**
   * Specifies the subnets for VPC endpoint.
   */
  readonly subnetIds?: StringList;
  /**
   * Specifies the security groups for VPC endpoint.
   */
  readonly securityGroupIds?: StringList;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface CognitoOptions {
  /**
   * Specifies the option to enable Cognito for Kibana authentication.
   */
  readonly enabled?: Boolean;
  /**
   * Specifies the Cognito user pool ID for Kibana authentication.
   */
  readonly userPoolId?: UserPoolId;
  /**
   * Specifies the Cognito identity pool ID for Kibana authentication.
   */
  readonly identityPoolId?: IdentityPoolId;
  /**
   * Specifies the role ARN that provides Elasticsearch permissions for accessing Cognito resources.
   */
  readonly roleArn?: RoleArn;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface EncryptionAtRestOptions {
  /**
   * Specifies the option to enable Encryption At Rest.
   */
  readonly enabled?: Boolean;
  /**
   * Specifies the KMS Key ID for Encryption At Rest options.
   */
  readonly kmsKeyId?: KmsKeyId;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface NodeToNodeEncryptionOptions {
  /**
   * Specify true to enable node-to-node encryption.
   */
  readonly enabled?: Boolean;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface DomainEndpointOptions {
  /**
   * Specify if only HTTPS endpoint should be enabled for the Elasticsearch domain.
   */
  readonly enforceHttps?: Boolean;
  /**
   * Specify the TLS security policy that needs to be applied to the HTTPS endpoint of Elasticsearch domain.
   * It can be one of the following values:  Policy-Min-TLS-1-0-2019-07:  TLS security policy which supports TLSv1.
   * 0 and higher.
   * Policy-Min-TLS-1-2-2019-07:  TLS security policy which supports only TLSv1.
   * 2.
   */
  readonly tlsSecurityPolicy?: TLSSecurityPolicy;
  /**
   * Specify if custom endpoint should be enabled for the Elasticsearch domain.
   */
  readonly customEndpointEnabled?: Boolean;
  /**
   * Specify the fully qualified domain for your custom endpoint.
   */
  readonly customEndpoint?: DomainNameFqdn;
  /**
   * Specify ACM certificate ARN for your custom endpoint.
   */
  readonly customEndpointCertificateArn?: ARN;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface AdvancedSecurityOptionsInput {
  /**
   * True if advanced security is enabled.
   */
  readonly enabled?: Boolean;
  /**
   * True if the internal user database is enabled.
   */
  readonly internalUserDatabaseEnabled?: Boolean;
  /**
   * Credentials for the master user: username and password, ARN, or both.
   */
  readonly masterUserOptions?: MasterUserOptions;
  /**
   * Specifies the SAML application configuration for the domain.
   */
  readonly samlOptions?: SAMLOptionsInput;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface MasterUserOptions {
  /**
   * ARN for the master user (if IAM is enabled).
   */
  readonly masterUserArn?: ARN;
  /**
   * The master user's username, which is stored in the Amazon Elasticsearch Service domain's internal database.
   */
  readonly masterUserName?: Username;
  /**
   * The master user's password, which is stored in the Amazon Elasticsearch Service domain's internal database.
   */
  readonly masterUserPassword?: Password;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface SAMLOptionsInput {
  /**
   * True if SAML is enabled.
   */
  readonly enabled?: Boolean;
  /**
   * Specifies the SAML Identity Provider's information.
   */
  readonly idp?: SAMLIdp;
  /**
   * The SAML master username, which is stored in the Amazon Elasticsearch Service domain's internal database.
   */
  readonly masterUserName?: Username;
  /**
   * The backend role to which the SAML master user is mapped to.
   */
  readonly masterBackendRole?: BackendRole;
  /**
   * The key to use for matching the SAML Subject attribute.
   */
  readonly subjectKey?: String;
  /**
   * The key to use for matching the SAML Roles attribute.
   */
  readonly rolesKey?: String;
  /**
   * The duration, in minutes, after which a user session becomes inactive.
   * Acceptable values are between 1 and 1440, and the default value is 60.
   */
  readonly sessionTimeoutMinutes?: IntegerClass;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface SAMLIdp {
  /**
   * The Metadata of the SAML application in xml format.
   */
  readonly metadataContent: SAMLMetadata;
  /**
   * The unique Entity ID of the application in SAML Identity Provider.
   */
  readonly entityId: SAMLEntityId;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface CreateElasticsearchDomainResponse {
  /**
   * The status of the newly created Elasticsearch domain.
   */
  readonly domainStatus?: ElasticsearchDomainStatus;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface ElasticsearchDomainStatus {
  /**
   * The unique identifier for the specified Elasticsearch domain.
   */
  readonly domainId: DomainId;
  /**
   * The name of an Elasticsearch domain.
   * Domain names are unique across the domains owned by an account within an AWS region.
   * Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
   */
  readonly domainName: DomainName;
  /**
   * The Amazon resource name (ARN) of an Elasticsearch domain.
   * See Identifiers for IAM Entities in Using AWS Identity and Access Management for more information.
   */
  readonly arn: ARN;
  /**
   * The domain creation status.
   * True if the creation of an Elasticsearch domain is complete.
   * False if domain creation is still in progress.
   */
  readonly created?: Boolean;
  /**
   * The domain deletion status.
   * True if a delete request has been received for the domain but resource cleanup is still in progress.
   * False if the domain has not been deleted.
   * Once domain deletion is complete, the status of the domain is no longer returned.
   */
  readonly deleted?: Boolean;
  /**
   * The Elasticsearch domain endpoint that you use to submit index and search requests.
   */
  readonly endpoint?: ServiceUrl;
  /**
   * Map containing the Elasticsearch domain endpoints used to submit index and search requests.
   * Example key, value: 'vpc','vpc-endpoint-h2dsd34efgyghrtguk5gt6j2foh4.
   * us-east-1.
   * es.
   * amazonaws.
   * com'.
   */
  readonly endpoints?: EndpointsMap;
  /**
   * The status of the Elasticsearch domain configuration.
   * True if Amazon Elasticsearch Service is processing configuration changes.
   * False if the configuration is active.
   */
  readonly processing?: Boolean;
  /**
   * The status of an Elasticsearch domain version upgrade.
   * True if Amazon Elasticsearch Service is undergoing a version upgrade.
   * False if the configuration is active.
   */
  readonly upgradeProcessing?: Boolean;
  /**
   * The status of an Elasticsearch domain version upgrade.
   * True if Amazon Elasticsearch Service is undergoing a version upgrade.
   * False if the configuration is active.
   */
  readonly elasticsearchVersion?: ElasticsearchVersionString;
  /**
   * The type and number of instances in the domain cluster.
   */
  readonly elasticsearchClusterConfig: ElasticsearchClusterConfig;
  /**
   * The EBSOptions for the specified domain.
   * See Configuring EBS-based Storage for more information.
   */
  readonly ebsOptions?: EBSOptions;
  /**
   * IAM access policy as a JSON-formatted string.
   */
  readonly accessPolicies?: PolicyDocument;
  /**
   * Specifies the status of the SnapshotOptions.
   */
  readonly snapshotOptions?: SnapshotOptions;
  /**
   * The VPCOptions for the specified domain.
   * For more information, see VPC Endpoints for Amazon Elasticsearch Service Domains.
   */
  readonly vpcOptions?: VPCDerivedInfo;
  /**
   * The CognitoOptions for the specified domain.
   * For more information, see Amazon Cognito Authentication for Kibana.
   */
  readonly cognitoOptions?: CognitoOptions;
  /**
   * Specifies the status of the EncryptionAtRestOptions.
   */
  readonly encryptionAtRestOptions?: EncryptionAtRestOptions;
  /**
   * Specifies the status of the NodeToNodeEncryptionOptions.
   */
  readonly nodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions;
  /**
   * Specifies the status of the AdvancedOptions.
   */
  readonly advancedOptions?: AdvancedOptions;
  /**
   * Log publishing options for the given domain.
   */
  readonly logPublishingOptions?: LogPublishingOptions;
  /**
   * The current status of the Elasticsearch domain's service software.
   */
  readonly serviceSoftwareOptions?: ServiceSoftwareOptions;
  /**
   * The current status of the Elasticsearch domain's endpoint options.
   */
  readonly domainEndpointOptions?: DomainEndpointOptions;
  /**
   * The current status of the Elasticsearch domain's advanced security options.
   */
  readonly advancedSecurityOptions?: AdvancedSecurityOptions;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface ElasticsearchClusterConfig {
  /**
   * The instance type for an Elasticsearch cluster.
   * UltraWarm instance types are not supported for data instances.
   */
  readonly instanceType?: ESPartitionInstanceType;
  /**
   * The number of instances in the specified domain cluster.
   */
  readonly instanceCount?: IntegerClass;
  /**
   * A boolean value to indicate whether a dedicated master node is enabled.
   * See About Dedicated Master Nodes for more information.
   */
  readonly dedicatedMasterEnabled?: Boolean;
  /**
   * A boolean value to indicate whether zone awareness is enabled.
   * See About Zone Awareness for more information.
   */
  readonly zoneAwarenessEnabled?: Boolean;
  /**
   * Specifies the zone awareness configuration for a domain when zone awareness is enabled.
   */
  readonly zoneAwarenessConfig?: ZoneAwarenessConfig;
  /**
   * The instance type for a dedicated master node.
   */
  readonly dedicatedMasterType?: ESPartitionInstanceType;
  /**
   * Total number of dedicated master nodes, active and on standby, for the cluster.
   */
  readonly dedicatedMasterCount?: IntegerClass;
  /**
   * True to enable warm storage.
   */
  readonly warmEnabled?: Boolean;
  /**
   * The instance type for the Elasticsearch cluster's warm nodes.
   */
  readonly warmType?: ESWarmPartitionInstanceType;
  /**
   * The number of warm nodes in the cluster.
   */
  readonly warmCount?: IntegerClass;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface ZoneAwarenessConfig {
  /**
   * An integer value to indicate the number of availability zones for a domain when zone awareness is enabled.
   * This should be equal to number of subnets if VPC endpoints is enabled.
   */
  readonly availabilityZoneCount?: IntegerClass;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface EBSOptions {
  /**
   * Specifies whether EBS-based storage is enabled.
   */
  readonly ebsEnabled?: Boolean;
  /**
   * Specifies the volume type for EBS-based storage.
   */
  readonly volumeType?: VolumeType;
  /**
   * Integer to specify the size of an EBS volume.
   */
  readonly volumeSize?: IntegerClass;
  /**
   * Specifies the IOPD for a Provisioned IOPS EBS volume (SSD).
   */
  readonly iops?: IntegerClass;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface SnapshotOptions {
  /**
   * Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain.
   * Default value is 0 hours.
   */
  readonly automatedSnapshotStartHour?: IntegerClass;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface VPCDerivedInfo {
  /**
   * The VPC Id for the Elasticsearch domain.
   * Exists only if the domain was created with VPCOptions.
   */
  readonly vpcId?: String;
  /**
   * Specifies the subnets for VPC endpoint.
   */
  readonly subnetIds?: StringList;
  /**
   * The availability zones for the Elasticsearch domain.
   * Exists only if the domain was created with VPCOptions.
   */
  readonly availabilityZones?: StringList;
  /**
   * Specifies the security groups for VPC endpoint.
   */
  readonly securityGroupIds?: StringList;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface CognitoOptions {
  /**
   * Specifies the option to enable Cognito for Kibana authentication.
   */
  readonly enabled?: Boolean;
  /**
   * Specifies the Cognito user pool ID for Kibana authentication.
   */
  readonly userPoolId?: UserPoolId;
  /**
   * Specifies the Cognito identity pool ID for Kibana authentication.
   */
  readonly identityPoolId?: IdentityPoolId;
  /**
   * Specifies the role ARN that provides Elasticsearch permissions for accessing Cognito resources.
   */
  readonly roleArn?: RoleArn;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface EncryptionAtRestOptions {
  /**
   * Specifies the option to enable Encryption At Rest.
   */
  readonly enabled?: Boolean;
  /**
   * Specifies the KMS Key ID for Encryption At Rest options.
   */
  readonly kmsKeyId?: KmsKeyId;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface NodeToNodeEncryptionOptions {
  /**
   * Specify true to enable node-to-node encryption.
   */
  readonly enabled?: Boolean;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface ServiceSoftwareOptions {
  /**
   * The current service software version that is present on the domain.
   */
  readonly currentVersion?: String;
  /**
   * The new service software version if one is available.
   */
  readonly newVersion?: String;
  /**
   * True if you are able to update you service software version.
   * False if you are not able to update your service software version.
   */
  readonly updateAvailable?: Boolean;
  /**
   * True if you are able to cancel your service software version update.
   * False if you are not able to cancel your service software version.
   */
  readonly cancellable?: Boolean;
  /**
   * The status of your service software update.
   * This field can take the following values: ELIGIBLE, PENDING_UPDATE, IN_PROGRESS, COMPLETED, and NOT_ELIGIBLE.
   */
  readonly updateStatus?: DeploymentStatus;
  /**
   * The description of the UpdateStatus.
   */
  readonly description?: String;
  /**
   * Timestamp, in Epoch time, until which you can manually request a service software update.
   * After this date, we automatically update your service software.
   */
  readonly automatedUpdateDate?: DeploymentCloseDateTimeStamp;
  /**
   * True if a service software is never automatically updated.
   * False if a service software is automatically updated after AutomatedUpdateDate.
   */
  readonly optionalDeployment?: Boolean;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface DomainEndpointOptions {
  /**
   * Specify if only HTTPS endpoint should be enabled for the Elasticsearch domain.
   */
  readonly enforceHttps?: Boolean;
  /**
   * Specify the TLS security policy that needs to be applied to the HTTPS endpoint of Elasticsearch domain.
   * It can be one of the following values:  Policy-Min-TLS-1-0-2019-07:  TLS security policy which supports TLSv1.
   * 0 and higher.
   * Policy-Min-TLS-1-2-2019-07:  TLS security policy which supports only TLSv1.
   * 2.
   */
  readonly tlsSecurityPolicy?: TLSSecurityPolicy;
  /**
   * Specify if custom endpoint should be enabled for the Elasticsearch domain.
   */
  readonly customEndpointEnabled?: Boolean;
  /**
   * Specify the fully qualified domain for your custom endpoint.
   */
  readonly customEndpoint?: DomainNameFqdn;
  /**
   * Specify ACM certificate ARN for your custom endpoint.
   */
  readonly customEndpointCertificateArn?: ARN;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface AdvancedSecurityOptions {
  /**
   * True if advanced security is enabled.
   */
  readonly enabled?: Boolean;
  /**
   * True if the internal user database is enabled.
   */
  readonly internalUserDatabaseEnabled?: Boolean;
  /**
   * Describes the SAML application configured for a domain.
   */
  readonly samlOptions?: SAMLOptionsOutput;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface SAMLOptionsOutput {
  /**
   * True if SAML is enabled.
   */
  readonly enabled?: Boolean;
  /**
   * Describes the SAML Identity Provider's information.
   */
  readonly idp?: SAMLIdp;
  /**
   * The key used for matching the SAML Subject attribute.
   */
  readonly subjectKey?: String;
  /**
   * The key used for matching the SAML Roles attribute.
   */
  readonly rolesKey?: String;
  /**
   * The duration, in minutes, after which a user session becomes inactive.
   */
  readonly sessionTimeoutMinutes?: IntegerClass;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface SAMLIdp {
  /**
   * The Metadata of the SAML application in xml format.
   */
  readonly metadataContent: SAMLMetadata;
  /**
   * The unique Entity ID of the application in SAML Identity Provider.
   */
  readonly entityId: SAMLEntityId;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface CreateOutboundCrossClusterSearchConnectionRequest {
  /**
   * Specifies the DomainInformation for the source Elasticsearch domain.
   */
  readonly sourceDomainInfo: DomainInformation;
  /**
   * Specifies the DomainInformation for the destination Elasticsearch domain.
   */
  readonly destinationDomainInfo: DomainInformation;
  /**
   * Specifies the connection alias that will be used by the customer for this connection.
   */
  readonly connectionAlias: ConnectionAlias;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface DomainInformation {
  /**
   * Specifies the DomainName.
   */
  readonly ownerId?: OwnerId;
  /**
   * Specifies the DomainName.
   */
  readonly domainName: DomainName;
  /**
   * Specifies the DomainName.
   */
  readonly region?: Region;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface DomainInformation {
  /**
   * Specifies the DomainName.
   */
  readonly ownerId?: OwnerId;
  /**
   * Specifies the DomainName.
   */
  readonly domainName: DomainName;
  /**
   * Specifies the DomainName.
   */
  readonly region?: Region;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface CreateOutboundCrossClusterSearchConnectionResponse {
  /**
   * Specifies the DomainInformation for the source Elasticsearch domain.
   */
  readonly sourceDomainInfo?: DomainInformation;
  /**
   * Specifies the DomainInformation for the destination Elasticsearch domain.
   */
  readonly destinationDomainInfo?: DomainInformation;
  /**
   * Specifies the connection alias provided during the create connection request.
   */
  readonly connectionAlias?: ConnectionAlias;
  /**
   * Specifies the OutboundCrossClusterSearchConnectionStatus for the newly created connection.
   */
  readonly connectionStatus?: OutboundCrossClusterSearchConnectionStatus;
  /**
   * Unique id for the created outbound connection, which is used for subsequent operations on connection.
   */
  readonly crossClusterSearchConnectionId?: CrossClusterSearchConnectionId;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface DomainInformation {
  /**
   * Specifies the DomainName.
   */
  readonly ownerId?: OwnerId;
  /**
   * Specifies the DomainName.
   */
  readonly domainName: DomainName;
  /**
   * Specifies the DomainName.
   */
  readonly region?: Region;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface DomainInformation {
  /**
   * Specifies the DomainName.
   */
  readonly ownerId?: OwnerId;
  /**
   * Specifies the DomainName.
   */
  readonly domainName: DomainName;
  /**
   * Specifies the DomainName.
   */
  readonly region?: Region;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface OutboundCrossClusterSearchConnectionStatus {
  /**
   * The state code for outbound connection.
   * This can be one of the following:  VALIDATING: The outbound connection request is being validated.
   * VALIDATION_FAILED: Validation failed for the connection request.
   * PENDING_ACCEPTANCE: Outbound connection request is validated and is not yet accepted by destination domain owner.
   * PROVISIONING: Outbound connection request is in process.
   * ACTIVE: Outbound connection is active and ready to use.
   * REJECTED: Outbound connection request is rejected by destination domain owner.
   * DELETING: Outbound connection deletion is in progress.
   * DELETED: Outbound connection is deleted and cannot be used further.
   */
  readonly statusCode?: OutboundCrossClusterSearchConnectionStatusCode;
  /**
   * Specifies verbose information for the outbound connection status.
   */
  readonly message?: CrossClusterSearchConnectionStatusMessage;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface CreatePackageRequest {
  /**
   * Unique identifier for the package.
   */
  readonly packageName: PackageName;
  /**
   * Type of package.
   * Currently supports only TXT-DICTIONARY.
   */
  readonly packageType: PackageType;
  /**
   * Description of the package.
   */
  readonly packageDescription?: PackageDescription;
  /**
   * The customer S3 location PackageSource for importing the package.
   */
  readonly packageSource: PackageSource;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface PackageSource {
  /**
   * Name of the bucket containing the package.
   */
  readonly s3BucketName?: S3BucketName;
  /**
   * Key (file name) of the package.
   */
  readonly s3Key?: S3Key;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface CreatePackageResponse {
  /**
   * Information about the package PackageDetails.
   */
  readonly packageDetails?: PackageDetails;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface PackageDetails {
  /**
   * Internal ID of the package.
   */
  readonly packageId?: PackageID;
  /**
   * User specified name of the package.
   */
  readonly packageName?: PackageName;
  /**
   * Currently supports only TXT-DICTIONARY.
   */
  readonly packageType?: PackageType;
  /**
   * User-specified description of the package.
   */
  readonly packageDescription?: PackageDescription;
  /**
   * Current state of the package.
   * Values are COPYING/COPY_FAILED/AVAILABLE/DELETING/DELETE_FAILED.
   */
  readonly packageStatus?: PackageStatus;
  /**
   * Timestamp which tells creation date of the package.
   */
  readonly createdAt?: CreatedAt;
  /**
   * Timestamp which tells creation date of the package.
   */
  readonly lastUpdatedAt?: LastUpdated;
  /**
   * Timestamp which tells creation date of the package.
   */
  readonly availablePackageVersion?: PackageVersion;
  /**
   * Additional information if the package is in an error state.
   * Null otherwise.
   */
  readonly errorDetails?: ErrorDetails;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface ErrorDetails {
  /**
   * Specifies the status of the Encryption At Rest options for the specified Elasticsearch domain.
   */
  readonly errorType?: ErrorType;
  /**
   * Specifies the status of the Encryption At Rest options for the specified Elasticsearch domain.
   */
  readonly errorMessage?: ErrorMessage;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface DeleteElasticsearchDomainRequest {
  /**
   * The name of the Elasticsearch domain that you want to permanently delete.
   */
  readonly domainName: DomainName;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface DeleteElasticsearchDomainResponse {
  /**
   * The status of the Elasticsearch domain being deleted.
   */
  readonly domainStatus?: ElasticsearchDomainStatus;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface ElasticsearchDomainStatus {
  /**
   * The unique identifier for the specified Elasticsearch domain.
   */
  readonly domainId: DomainId;
  /**
   * The name of an Elasticsearch domain.
   * Domain names are unique across the domains owned by an account within an AWS region.
   * Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
   */
  readonly domainName: DomainName;
  /**
   * The Amazon resource name (ARN) of an Elasticsearch domain.
   * See Identifiers for IAM Entities in Using AWS Identity and Access Management for more information.
   */
  readonly arn: ARN;
  /**
   * The domain creation status.
   * True if the creation of an Elasticsearch domain is complete.
   * False if domain creation is still in progress.
   */
  readonly created?: Boolean;
  /**
   * The domain deletion status.
   * True if a delete request has been received for the domain but resource cleanup is still in progress.
   * False if the domain has not been deleted.
   * Once domain deletion is complete, the status of the domain is no longer returned.
   */
  readonly deleted?: Boolean;
  /**
   * The Elasticsearch domain endpoint that you use to submit index and search requests.
   */
  readonly endpoint?: ServiceUrl;
  /**
   * Map containing the Elasticsearch domain endpoints used to submit index and search requests.
   * Example key, value: 'vpc','vpc-endpoint-h2dsd34efgyghrtguk5gt6j2foh4.
   * us-east-1.
   * es.
   * amazonaws.
   * com'.
   */
  readonly endpoints?: EndpointsMap;
  /**
   * The status of the Elasticsearch domain configuration.
   * True if Amazon Elasticsearch Service is processing configuration changes.
   * False if the configuration is active.
   */
  readonly processing?: Boolean;
  /**
   * The status of an Elasticsearch domain version upgrade.
   * True if Amazon Elasticsearch Service is undergoing a version upgrade.
   * False if the configuration is active.
   */
  readonly upgradeProcessing?: Boolean;
  /**
   * The status of an Elasticsearch domain version upgrade.
   * True if Amazon Elasticsearch Service is undergoing a version upgrade.
   * False if the configuration is active.
   */
  readonly elasticsearchVersion?: ElasticsearchVersionString;
  /**
   * The type and number of instances in the domain cluster.
   */
  readonly elasticsearchClusterConfig: ElasticsearchClusterConfig;
  /**
   * The EBSOptions for the specified domain.
   * See Configuring EBS-based Storage for more information.
   */
  readonly ebsOptions?: EBSOptions;
  /**
   * IAM access policy as a JSON-formatted string.
   */
  readonly accessPolicies?: PolicyDocument;
  /**
   * Specifies the status of the SnapshotOptions.
   */
  readonly snapshotOptions?: SnapshotOptions;
  /**
   * The VPCOptions for the specified domain.
   * For more information, see VPC Endpoints for Amazon Elasticsearch Service Domains.
   */
  readonly vpcOptions?: VPCDerivedInfo;
  /**
   * The CognitoOptions for the specified domain.
   * For more information, see Amazon Cognito Authentication for Kibana.
   */
  readonly cognitoOptions?: CognitoOptions;
  /**
   * Specifies the status of the EncryptionAtRestOptions.
   */
  readonly encryptionAtRestOptions?: EncryptionAtRestOptions;
  /**
   * Specifies the status of the NodeToNodeEncryptionOptions.
   */
  readonly nodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions;
  /**
   * Specifies the status of the AdvancedOptions.
   */
  readonly advancedOptions?: AdvancedOptions;
  /**
   * Log publishing options for the given domain.
   */
  readonly logPublishingOptions?: LogPublishingOptions;
  /**
   * The current status of the Elasticsearch domain's service software.
   */
  readonly serviceSoftwareOptions?: ServiceSoftwareOptions;
  /**
   * The current status of the Elasticsearch domain's endpoint options.
   */
  readonly domainEndpointOptions?: DomainEndpointOptions;
  /**
   * The current status of the Elasticsearch domain's advanced security options.
   */
  readonly advancedSecurityOptions?: AdvancedSecurityOptions;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface ElasticsearchClusterConfig {
  /**
   * The instance type for an Elasticsearch cluster.
   * UltraWarm instance types are not supported for data instances.
   */
  readonly instanceType?: ESPartitionInstanceType;
  /**
   * The number of instances in the specified domain cluster.
   */
  readonly instanceCount?: IntegerClass;
  /**
   * A boolean value to indicate whether a dedicated master node is enabled.
   * See About Dedicated Master Nodes for more information.
   */
  readonly dedicatedMasterEnabled?: Boolean;
  /**
   * A boolean value to indicate whether zone awareness is enabled.
   * See About Zone Awareness for more information.
   */
  readonly zoneAwarenessEnabled?: Boolean;
  /**
   * Specifies the zone awareness configuration for a domain when zone awareness is enabled.
   */
  readonly zoneAwarenessConfig?: ZoneAwarenessConfig;
  /**
   * The instance type for a dedicated master node.
   */
  readonly dedicatedMasterType?: ESPartitionInstanceType;
  /**
   * Total number of dedicated master nodes, active and on standby, for the cluster.
   */
  readonly dedicatedMasterCount?: IntegerClass;
  /**
   * True to enable warm storage.
   */
  readonly warmEnabled?: Boolean;
  /**
   * The instance type for the Elasticsearch cluster's warm nodes.
   */
  readonly warmType?: ESWarmPartitionInstanceType;
  /**
   * The number of warm nodes in the cluster.
   */
  readonly warmCount?: IntegerClass;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface ZoneAwarenessConfig {
  /**
   * An integer value to indicate the number of availability zones for a domain when zone awareness is enabled.
   * This should be equal to number of subnets if VPC endpoints is enabled.
   */
  readonly availabilityZoneCount?: IntegerClass;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface EBSOptions {
  /**
   * Specifies whether EBS-based storage is enabled.
   */
  readonly ebsEnabled?: Boolean;
  /**
   * Specifies the volume type for EBS-based storage.
   */
  readonly volumeType?: VolumeType;
  /**
   * Integer to specify the size of an EBS volume.
   */
  readonly volumeSize?: IntegerClass;
  /**
   * Specifies the IOPD for a Provisioned IOPS EBS volume (SSD).
   */
  readonly iops?: IntegerClass;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface SnapshotOptions {
  /**
   * Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain.
   * Default value is 0 hours.
   */
  readonly automatedSnapshotStartHour?: IntegerClass;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface VPCDerivedInfo {
  /**
   * The VPC Id for the Elasticsearch domain.
   * Exists only if the domain was created with VPCOptions.
   */
  readonly vpcId?: String;
  /**
   * Specifies the subnets for VPC endpoint.
   */
  readonly subnetIds?: StringList;
  /**
   * The availability zones for the Elasticsearch domain.
   * Exists only if the domain was created with VPCOptions.
   */
  readonly availabilityZones?: StringList;
  /**
   * Specifies the security groups for VPC endpoint.
   */
  readonly securityGroupIds?: StringList;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface CognitoOptions {
  /**
   * Specifies the option to enable Cognito for Kibana authentication.
   */
  readonly enabled?: Boolean;
  /**
   * Specifies the Cognito user pool ID for Kibana authentication.
   */
  readonly userPoolId?: UserPoolId;
  /**
   * Specifies the Cognito identity pool ID for Kibana authentication.
   */
  readonly identityPoolId?: IdentityPoolId;
  /**
   * Specifies the role ARN that provides Elasticsearch permissions for accessing Cognito resources.
   */
  readonly roleArn?: RoleArn;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface EncryptionAtRestOptions {
  /**
   * Specifies the option to enable Encryption At Rest.
   */
  readonly enabled?: Boolean;
  /**
   * Specifies the KMS Key ID for Encryption At Rest options.
   */
  readonly kmsKeyId?: KmsKeyId;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface NodeToNodeEncryptionOptions {
  /**
   * Specify true to enable node-to-node encryption.
   */
  readonly enabled?: Boolean;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface ServiceSoftwareOptions {
  /**
   * The current service software version that is present on the domain.
   */
  readonly currentVersion?: String;
  /**
   * The new service software version if one is available.
   */
  readonly newVersion?: String;
  /**
   * True if you are able to update you service software version.
   * False if you are not able to update your service software version.
   */
  readonly updateAvailable?: Boolean;
  /**
   * True if you are able to cancel your service software version update.
   * False if you are not able to cancel your service software version.
   */
  readonly cancellable?: Boolean;
  /**
   * The status of your service software update.
   * This field can take the following values: ELIGIBLE, PENDING_UPDATE, IN_PROGRESS, COMPLETED, and NOT_ELIGIBLE.
   */
  readonly updateStatus?: DeploymentStatus;
  /**
   * The description of the UpdateStatus.
   */
  readonly description?: String;
  /**
   * Timestamp, in Epoch time, until which you can manually request a service software update.
   * After this date, we automatically update your service software.
   */
  readonly automatedUpdateDate?: DeploymentCloseDateTimeStamp;
  /**
   * True if a service software is never automatically updated.
   * False if a service software is automatically updated after AutomatedUpdateDate.
   */
  readonly optionalDeployment?: Boolean;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface DomainEndpointOptions {
  /**
   * Specify if only HTTPS endpoint should be enabled for the Elasticsearch domain.
   */
  readonly enforceHttps?: Boolean;
  /**
   * Specify the TLS security policy that needs to be applied to the HTTPS endpoint of Elasticsearch domain.
   * It can be one of the following values:  Policy-Min-TLS-1-0-2019-07:  TLS security policy which supports TLSv1.
   * 0 and higher.
   * Policy-Min-TLS-1-2-2019-07:  TLS security policy which supports only TLSv1.
   * 2.
   */
  readonly tlsSecurityPolicy?: TLSSecurityPolicy;
  /**
   * Specify if custom endpoint should be enabled for the Elasticsearch domain.
   */
  readonly customEndpointEnabled?: Boolean;
  /**
   * Specify the fully qualified domain for your custom endpoint.
   */
  readonly customEndpoint?: DomainNameFqdn;
  /**
   * Specify ACM certificate ARN for your custom endpoint.
   */
  readonly customEndpointCertificateArn?: ARN;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface AdvancedSecurityOptions {
  /**
   * True if advanced security is enabled.
   */
  readonly enabled?: Boolean;
  /**
   * True if the internal user database is enabled.
   */
  readonly internalUserDatabaseEnabled?: Boolean;
  /**
   * Describes the SAML application configured for a domain.
   */
  readonly samlOptions?: SAMLOptionsOutput;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface SAMLOptionsOutput {
  /**
   * True if SAML is enabled.
   */
  readonly enabled?: Boolean;
  /**
   * Describes the SAML Identity Provider's information.
   */
  readonly idp?: SAMLIdp;
  /**
   * The key used for matching the SAML Subject attribute.
   */
  readonly subjectKey?: String;
  /**
   * The key used for matching the SAML Roles attribute.
   */
  readonly rolesKey?: String;
  /**
   * The duration, in minutes, after which a user session becomes inactive.
   */
  readonly sessionTimeoutMinutes?: IntegerClass;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface SAMLIdp {
  /**
   * The Metadata of the SAML application in xml format.
   */
  readonly metadataContent: SAMLMetadata;
  /**
   * The unique Entity ID of the application in SAML Identity Provider.
   */
  readonly entityId: SAMLEntityId;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface DeleteInboundCrossClusterSearchConnectionRequest {
  /**
   * The id of the inbound connection that you want to permanently delete.
   */
  readonly crossClusterSearchConnectionId: CrossClusterSearchConnectionId;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface DeleteInboundCrossClusterSearchConnectionResponse {
  /**
   * Specifies the InboundCrossClusterSearchConnection of deleted inbound connection.
   */
  readonly crossClusterSearchConnection?: InboundCrossClusterSearchConnection;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface InboundCrossClusterSearchConnection {
  /**
   * Specifies the DomainInformation for the source Elasticsearch domain.
   */
  readonly sourceDomainInfo?: DomainInformation;
  /**
   * Specifies the DomainInformation for the destination Elasticsearch domain.
   */
  readonly destinationDomainInfo?: DomainInformation;
  /**
   * Specifies the connection id for the inbound cross-cluster search connection.
   */
  readonly crossClusterSearchConnectionId?: CrossClusterSearchConnectionId;
  /**
   * Specifies the InboundCrossClusterSearchConnectionStatus for the outbound connection.
   */
  readonly connectionStatus?: InboundCrossClusterSearchConnectionStatus;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface DomainInformation {
  /**
   * Specifies the DomainName.
   */
  readonly ownerId?: OwnerId;
  /**
   * Specifies the DomainName.
   */
  readonly domainName: DomainName;
  /**
   * Specifies the DomainName.
   */
  readonly region?: Region;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface DomainInformation {
  /**
   * Specifies the DomainName.
   */
  readonly ownerId?: OwnerId;
  /**
   * Specifies the DomainName.
   */
  readonly domainName: DomainName;
  /**
   * Specifies the DomainName.
   */
  readonly region?: Region;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface InboundCrossClusterSearchConnectionStatus {
  /**
   * The state code for inbound connection.
   * This can be one of the following:  PENDING_ACCEPTANCE: Inbound connection is not yet accepted by destination domain owner.
   * APPROVED: Inbound connection is pending acceptance by destination domain owner.
   * REJECTING: Inbound connection rejection is in process.
   * REJECTED: Inbound connection is rejected.
   * DELETING: Inbound connection deletion is in progress.
   * DELETED: Inbound connection is deleted and cannot be used further.
   */
  readonly statusCode?: InboundCrossClusterSearchConnectionStatusCode;
  /**
   * Specifies verbose information for the inbound connection status.
   */
  readonly message?: CrossClusterSearchConnectionStatusMessage;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface DeleteOutboundCrossClusterSearchConnectionRequest {
  /**
   * The id of the outbound connection that you want to permanently delete.
   */
  readonly crossClusterSearchConnectionId: CrossClusterSearchConnectionId;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface DeleteOutboundCrossClusterSearchConnectionResponse {
  /**
   * Specifies the OutboundCrossClusterSearchConnection of deleted outbound connection.
   */
  readonly crossClusterSearchConnection?: OutboundCrossClusterSearchConnection;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface OutboundCrossClusterSearchConnection {
  /**
   * Specifies the DomainInformation for the source Elasticsearch domain.
   */
  readonly sourceDomainInfo?: DomainInformation;
  /**
   * Specifies the DomainInformation for the destination Elasticsearch domain.
   */
  readonly destinationDomainInfo?: DomainInformation;
  /**
   * Specifies the connection id for the outbound cross-cluster search connection.
   */
  readonly crossClusterSearchConnectionId?: CrossClusterSearchConnectionId;
  /**
   * Specifies the connection alias for the outbound cross-cluster search connection.
   */
  readonly connectionAlias?: ConnectionAlias;
  /**
   * Specifies the OutboundCrossClusterSearchConnectionStatus for the outbound connection.
   */
  readonly connectionStatus?: OutboundCrossClusterSearchConnectionStatus;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface DomainInformation {
  /**
   * Specifies the DomainName.
   */
  readonly ownerId?: OwnerId;
  /**
   * Specifies the DomainName.
   */
  readonly domainName: DomainName;
  /**
   * Specifies the DomainName.
   */
  readonly region?: Region;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface DomainInformation {
  /**
   * Specifies the DomainName.
   */
  readonly ownerId?: OwnerId;
  /**
   * Specifies the DomainName.
   */
  readonly domainName: DomainName;
  /**
   * Specifies the DomainName.
   */
  readonly region?: Region;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface OutboundCrossClusterSearchConnectionStatus {
  /**
   * The state code for outbound connection.
   * This can be one of the following:  VALIDATING: The outbound connection request is being validated.
   * VALIDATION_FAILED: Validation failed for the connection request.
   * PENDING_ACCEPTANCE: Outbound connection request is validated and is not yet accepted by destination domain owner.
   * PROVISIONING: Outbound connection request is in process.
   * ACTIVE: Outbound connection is active and ready to use.
   * REJECTED: Outbound connection request is rejected by destination domain owner.
   * DELETING: Outbound connection deletion is in progress.
   * DELETED: Outbound connection is deleted and cannot be used further.
   */
  readonly statusCode?: OutboundCrossClusterSearchConnectionStatusCode;
  /**
   * Specifies verbose information for the outbound connection status.
   */
  readonly message?: CrossClusterSearchConnectionStatusMessage;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface DeletePackageRequest {
  /**
   * Internal ID of the package that you want to delete.
   * Use DescribePackages to find this value.
   */
  readonly packageId: PackageID;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface DeletePackageResponse {
  /**
   * PackageDetails.
   */
  readonly packageDetails?: PackageDetails;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface PackageDetails {
  /**
   * Internal ID of the package.
   */
  readonly packageId?: PackageID;
  /**
   * User specified name of the package.
   */
  readonly packageName?: PackageName;
  /**
   * Currently supports only TXT-DICTIONARY.
   */
  readonly packageType?: PackageType;
  /**
   * User-specified description of the package.
   */
  readonly packageDescription?: PackageDescription;
  /**
   * Current state of the package.
   * Values are COPYING/COPY_FAILED/AVAILABLE/DELETING/DELETE_FAILED.
   */
  readonly packageStatus?: PackageStatus;
  /**
   * Timestamp which tells creation date of the package.
   */
  readonly createdAt?: CreatedAt;
  /**
   * Timestamp which tells creation date of the package.
   */
  readonly lastUpdatedAt?: LastUpdated;
  /**
   * Timestamp which tells creation date of the package.
   */
  readonly availablePackageVersion?: PackageVersion;
  /**
   * Additional information if the package is in an error state.
   * Null otherwise.
   */
  readonly errorDetails?: ErrorDetails;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface ErrorDetails {
  /**
   * Specifies the status of the Encryption At Rest options for the specified Elasticsearch domain.
   */
  readonly errorType?: ErrorType;
  /**
   * Specifies the status of the Encryption At Rest options for the specified Elasticsearch domain.
   */
  readonly errorMessage?: ErrorMessage;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface DescribeElasticsearchDomainRequest {
  /**
   * The name of the Elasticsearch domain for which you want information.
   */
  readonly domainName: DomainName;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface DescribeElasticsearchDomainResponse {
  /**
   * The current status of the Elasticsearch domain.
   */
  readonly domainStatus: ElasticsearchDomainStatus;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface ElasticsearchDomainStatus {
  /**
   * The unique identifier for the specified Elasticsearch domain.
   */
  readonly domainId: DomainId;
  /**
   * The name of an Elasticsearch domain.
   * Domain names are unique across the domains owned by an account within an AWS region.
   * Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
   */
  readonly domainName: DomainName;
  /**
   * The Amazon resource name (ARN) of an Elasticsearch domain.
   * See Identifiers for IAM Entities in Using AWS Identity and Access Management for more information.
   */
  readonly arn: ARN;
  /**
   * The domain creation status.
   * True if the creation of an Elasticsearch domain is complete.
   * False if domain creation is still in progress.
   */
  readonly created?: Boolean;
  /**
   * The domain deletion status.
   * True if a delete request has been received for the domain but resource cleanup is still in progress.
   * False if the domain has not been deleted.
   * Once domain deletion is complete, the status of the domain is no longer returned.
   */
  readonly deleted?: Boolean;
  /**
   * The Elasticsearch domain endpoint that you use to submit index and search requests.
   */
  readonly endpoint?: ServiceUrl;
  /**
   * Map containing the Elasticsearch domain endpoints used to submit index and search requests.
   * Example key, value: 'vpc','vpc-endpoint-h2dsd34efgyghrtguk5gt6j2foh4.
   * us-east-1.
   * es.
   * amazonaws.
   * com'.
   */
  readonly endpoints?: EndpointsMap;
  /**
   * The status of the Elasticsearch domain configuration.
   * True if Amazon Elasticsearch Service is processing configuration changes.
   * False if the configuration is active.
   */
  readonly processing?: Boolean;
  /**
   * The status of an Elasticsearch domain version upgrade.
   * True if Amazon Elasticsearch Service is undergoing a version upgrade.
   * False if the configuration is active.
   */
  readonly upgradeProcessing?: Boolean;
  /**
   * The status of an Elasticsearch domain version upgrade.
   * True if Amazon Elasticsearch Service is undergoing a version upgrade.
   * False if the configuration is active.
   */
  readonly elasticsearchVersion?: ElasticsearchVersionString;
  /**
   * The type and number of instances in the domain cluster.
   */
  readonly elasticsearchClusterConfig: ElasticsearchClusterConfig;
  /**
   * The EBSOptions for the specified domain.
   * See Configuring EBS-based Storage for more information.
   */
  readonly ebsOptions?: EBSOptions;
  /**
   * IAM access policy as a JSON-formatted string.
   */
  readonly accessPolicies?: PolicyDocument;
  /**
   * Specifies the status of the SnapshotOptions.
   */
  readonly snapshotOptions?: SnapshotOptions;
  /**
   * The VPCOptions for the specified domain.
   * For more information, see VPC Endpoints for Amazon Elasticsearch Service Domains.
   */
  readonly vpcOptions?: VPCDerivedInfo;
  /**
   * The CognitoOptions for the specified domain.
   * For more information, see Amazon Cognito Authentication for Kibana.
   */
  readonly cognitoOptions?: CognitoOptions;
  /**
   * Specifies the status of the EncryptionAtRestOptions.
   */
  readonly encryptionAtRestOptions?: EncryptionAtRestOptions;
  /**
   * Specifies the status of the NodeToNodeEncryptionOptions.
   */
  readonly nodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions;
  /**
   * Specifies the status of the AdvancedOptions.
   */
  readonly advancedOptions?: AdvancedOptions;
  /**
   * Log publishing options for the given domain.
   */
  readonly logPublishingOptions?: LogPublishingOptions;
  /**
   * The current status of the Elasticsearch domain's service software.
   */
  readonly serviceSoftwareOptions?: ServiceSoftwareOptions;
  /**
   * The current status of the Elasticsearch domain's endpoint options.
   */
  readonly domainEndpointOptions?: DomainEndpointOptions;
  /**
   * The current status of the Elasticsearch domain's advanced security options.
   */
  readonly advancedSecurityOptions?: AdvancedSecurityOptions;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface ElasticsearchClusterConfig {
  /**
   * The instance type for an Elasticsearch cluster.
   * UltraWarm instance types are not supported for data instances.
   */
  readonly instanceType?: ESPartitionInstanceType;
  /**
   * The number of instances in the specified domain cluster.
   */
  readonly instanceCount?: IntegerClass;
  /**
   * A boolean value to indicate whether a dedicated master node is enabled.
   * See About Dedicated Master Nodes for more information.
   */
  readonly dedicatedMasterEnabled?: Boolean;
  /**
   * A boolean value to indicate whether zone awareness is enabled.
   * See About Zone Awareness for more information.
   */
  readonly zoneAwarenessEnabled?: Boolean;
  /**
   * Specifies the zone awareness configuration for a domain when zone awareness is enabled.
   */
  readonly zoneAwarenessConfig?: ZoneAwarenessConfig;
  /**
   * The instance type for a dedicated master node.
   */
  readonly dedicatedMasterType?: ESPartitionInstanceType;
  /**
   * Total number of dedicated master nodes, active and on standby, for the cluster.
   */
  readonly dedicatedMasterCount?: IntegerClass;
  /**
   * True to enable warm storage.
   */
  readonly warmEnabled?: Boolean;
  /**
   * The instance type for the Elasticsearch cluster's warm nodes.
   */
  readonly warmType?: ESWarmPartitionInstanceType;
  /**
   * The number of warm nodes in the cluster.
   */
  readonly warmCount?: IntegerClass;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface ZoneAwarenessConfig {
  /**
   * An integer value to indicate the number of availability zones for a domain when zone awareness is enabled.
   * This should be equal to number of subnets if VPC endpoints is enabled.
   */
  readonly availabilityZoneCount?: IntegerClass;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface EBSOptions {
  /**
   * Specifies whether EBS-based storage is enabled.
   */
  readonly ebsEnabled?: Boolean;
  /**
   * Specifies the volume type for EBS-based storage.
   */
  readonly volumeType?: VolumeType;
  /**
   * Integer to specify the size of an EBS volume.
   */
  readonly volumeSize?: IntegerClass;
  /**
   * Specifies the IOPD for a Provisioned IOPS EBS volume (SSD).
   */
  readonly iops?: IntegerClass;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface SnapshotOptions {
  /**
   * Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain.
   * Default value is 0 hours.
   */
  readonly automatedSnapshotStartHour?: IntegerClass;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface VPCDerivedInfo {
  /**
   * The VPC Id for the Elasticsearch domain.
   * Exists only if the domain was created with VPCOptions.
   */
  readonly vpcId?: String;
  /**
   * Specifies the subnets for VPC endpoint.
   */
  readonly subnetIds?: StringList;
  /**
   * The availability zones for the Elasticsearch domain.
   * Exists only if the domain was created with VPCOptions.
   */
  readonly availabilityZones?: StringList;
  /**
   * Specifies the security groups for VPC endpoint.
   */
  readonly securityGroupIds?: StringList;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface CognitoOptions {
  /**
   * Specifies the option to enable Cognito for Kibana authentication.
   */
  readonly enabled?: Boolean;
  /**
   * Specifies the Cognito user pool ID for Kibana authentication.
   */
  readonly userPoolId?: UserPoolId;
  /**
   * Specifies the Cognito identity pool ID for Kibana authentication.
   */
  readonly identityPoolId?: IdentityPoolId;
  /**
   * Specifies the role ARN that provides Elasticsearch permissions for accessing Cognito resources.
   */
  readonly roleArn?: RoleArn;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface EncryptionAtRestOptions {
  /**
   * Specifies the option to enable Encryption At Rest.
   */
  readonly enabled?: Boolean;
  /**
   * Specifies the KMS Key ID for Encryption At Rest options.
   */
  readonly kmsKeyId?: KmsKeyId;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface NodeToNodeEncryptionOptions {
  /**
   * Specify true to enable node-to-node encryption.
   */
  readonly enabled?: Boolean;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface ServiceSoftwareOptions {
  /**
   * The current service software version that is present on the domain.
   */
  readonly currentVersion?: String;
  /**
   * The new service software version if one is available.
   */
  readonly newVersion?: String;
  /**
   * True if you are able to update you service software version.
   * False if you are not able to update your service software version.
   */
  readonly updateAvailable?: Boolean;
  /**
   * True if you are able to cancel your service software version update.
   * False if you are not able to cancel your service software version.
   */
  readonly cancellable?: Boolean;
  /**
   * The status of your service software update.
   * This field can take the following values: ELIGIBLE, PENDING_UPDATE, IN_PROGRESS, COMPLETED, and NOT_ELIGIBLE.
   */
  readonly updateStatus?: DeploymentStatus;
  /**
   * The description of the UpdateStatus.
   */
  readonly description?: String;
  /**
   * Timestamp, in Epoch time, until which you can manually request a service software update.
   * After this date, we automatically update your service software.
   */
  readonly automatedUpdateDate?: DeploymentCloseDateTimeStamp;
  /**
   * True if a service software is never automatically updated.
   * False if a service software is automatically updated after AutomatedUpdateDate.
   */
  readonly optionalDeployment?: Boolean;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface DomainEndpointOptions {
  /**
   * Specify if only HTTPS endpoint should be enabled for the Elasticsearch domain.
   */
  readonly enforceHttps?: Boolean;
  /**
   * Specify the TLS security policy that needs to be applied to the HTTPS endpoint of Elasticsearch domain.
   * It can be one of the following values:  Policy-Min-TLS-1-0-2019-07:  TLS security policy which supports TLSv1.
   * 0 and higher.
   * Policy-Min-TLS-1-2-2019-07:  TLS security policy which supports only TLSv1.
   * 2.
   */
  readonly tlsSecurityPolicy?: TLSSecurityPolicy;
  /**
   * Specify if custom endpoint should be enabled for the Elasticsearch domain.
   */
  readonly customEndpointEnabled?: Boolean;
  /**
   * Specify the fully qualified domain for your custom endpoint.
   */
  readonly customEndpoint?: DomainNameFqdn;
  /**
   * Specify ACM certificate ARN for your custom endpoint.
   */
  readonly customEndpointCertificateArn?: ARN;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface AdvancedSecurityOptions {
  /**
   * True if advanced security is enabled.
   */
  readonly enabled?: Boolean;
  /**
   * True if the internal user database is enabled.
   */
  readonly internalUserDatabaseEnabled?: Boolean;
  /**
   * Describes the SAML application configured for a domain.
   */
  readonly samlOptions?: SAMLOptionsOutput;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface SAMLOptionsOutput {
  /**
   * True if SAML is enabled.
   */
  readonly enabled?: Boolean;
  /**
   * Describes the SAML Identity Provider's information.
   */
  readonly idp?: SAMLIdp;
  /**
   * The key used for matching the SAML Subject attribute.
   */
  readonly subjectKey?: String;
  /**
   * The key used for matching the SAML Roles attribute.
   */
  readonly rolesKey?: String;
  /**
   * The duration, in minutes, after which a user session becomes inactive.
   */
  readonly sessionTimeoutMinutes?: IntegerClass;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface SAMLIdp {
  /**
   * The Metadata of the SAML application in xml format.
   */
  readonly metadataContent: SAMLMetadata;
  /**
   * The unique Entity ID of the application in SAML Identity Provider.
   */
  readonly entityId: SAMLEntityId;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface DescribeElasticsearchDomainConfigRequest {
  /**
   * The Elasticsearch domain that you want to get information about.
   */
  readonly domainName: DomainName;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface DescribeElasticsearchDomainConfigResponse {
  /**
   * The configuration information of the domain requested in the DescribeElasticsearchDomainConfig request.
   */
  readonly domainConfig: ElasticsearchDomainConfig;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface ElasticsearchDomainConfig {
  /**
   * String of format X.
   * Y to specify version for the Elasticsearch domain.
   */
  readonly elasticsearchVersion?: ElasticsearchVersionStatus;
  /**
   * Specifies the ElasticsearchClusterConfig for the Elasticsearch domain.
   */
  readonly elasticsearchClusterConfig?: ElasticsearchClusterConfigStatus;
  /**
   * Specifies the EBSOptions for the Elasticsearch domain.
   */
  readonly ebsOptions?: EBSOptionsStatus;
  /**
   * IAM access policy as a JSON-formatted string.
   */
  readonly accessPolicies?: AccessPoliciesStatus;
  /**
   * Specifies the SnapshotOptions for the Elasticsearch domain.
   */
  readonly snapshotOptions?: SnapshotOptionsStatus;
  /**
   * The VPCOptions for the specified domain.
   * For more information, see VPC Endpoints for Amazon Elasticsearch Service Domains.
   */
  readonly vpcOptions?: VPCDerivedInfoStatus;
  /**
   * The CognitoOptions for the specified domain.
   * For more information, see Amazon Cognito Authentication for Kibana.
   */
  readonly cognitoOptions?: CognitoOptionsStatus;
  /**
   * Specifies the EncryptionAtRestOptions for the Elasticsearch domain.
   */
  readonly encryptionAtRestOptions?: EncryptionAtRestOptionsStatus;
  /**
   * Specifies the NodeToNodeEncryptionOptions for the Elasticsearch domain.
   */
  readonly nodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptionsStatus;
  /**
   * Specifies the AdvancedOptions for the domain.
   * See Configuring Advanced Options for more information.
   */
  readonly advancedOptions?: AdvancedOptionsStatus;
  /**
   * Log publishing options for the given domain.
   */
  readonly logPublishingOptions?: LogPublishingOptionsStatus;
  /**
   * Specifies the DomainEndpointOptions for the Elasticsearch domain.
   */
  readonly domainEndpointOptions?: DomainEndpointOptionsStatus;
  /**
   * Specifies AdvancedSecurityOptions for the domain.
   */
  readonly advancedSecurityOptions?: AdvancedSecurityOptionsStatus;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface ElasticsearchVersionStatus {
  /**
   * Specifies the Elasticsearch version for the specified Elasticsearch domain.
   */
  readonly options: ElasticsearchVersionString;
  /**
   * Specifies the status of the Elasticsearch version options for the specified Elasticsearch domain.
   */
  readonly status: OptionStatus;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface OptionStatus {
  /**
   * Timestamp which tells the creation date for the entity.
   */
  readonly creationDate: UpdateTimestamp;
  /**
   * Timestamp which tells the last updated time for the entity.
   */
  readonly updateDate: UpdateTimestamp;
  /**
   * Specifies the latest version for the entity.
   */
  readonly updateVersion?: UIntValue;
  /**
   * Provides the OptionState for the Elasticsearch domain.
   */
  readonly state: OptionState;
  /**
   * Indicates whether the Elasticsearch domain is being deleted.
   */
  readonly pendingDeletion?: Boolean;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface ElasticsearchClusterConfigStatus {
  /**
   * Specifies the cluster configuration for the specified Elasticsearch domain.
   */
  readonly options: ElasticsearchClusterConfig;
  /**
   * Specifies the status of the configuration for the specified Elasticsearch domain.
   */
  readonly status: OptionStatus;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface ElasticsearchClusterConfig {
  /**
   * The instance type for an Elasticsearch cluster.
   * UltraWarm instance types are not supported for data instances.
   */
  readonly instanceType?: ESPartitionInstanceType;
  /**
   * The number of instances in the specified domain cluster.
   */
  readonly instanceCount?: IntegerClass;
  /**
   * A boolean value to indicate whether a dedicated master node is enabled.
   * See About Dedicated Master Nodes for more information.
   */
  readonly dedicatedMasterEnabled?: Boolean;
  /**
   * A boolean value to indicate whether zone awareness is enabled.
   * See About Zone Awareness for more information.
   */
  readonly zoneAwarenessEnabled?: Boolean;
  /**
   * Specifies the zone awareness configuration for a domain when zone awareness is enabled.
   */
  readonly zoneAwarenessConfig?: ZoneAwarenessConfig;
  /**
   * The instance type for a dedicated master node.
   */
  readonly dedicatedMasterType?: ESPartitionInstanceType;
  /**
   * Total number of dedicated master nodes, active and on standby, for the cluster.
   */
  readonly dedicatedMasterCount?: IntegerClass;
  /**
   * True to enable warm storage.
   */
  readonly warmEnabled?: Boolean;
  /**
   * The instance type for the Elasticsearch cluster's warm nodes.
   */
  readonly warmType?: ESWarmPartitionInstanceType;
  /**
   * The number of warm nodes in the cluster.
   */
  readonly warmCount?: IntegerClass;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface ZoneAwarenessConfig {
  /**
   * An integer value to indicate the number of availability zones for a domain when zone awareness is enabled.
   * This should be equal to number of subnets if VPC endpoints is enabled.
   */
  readonly availabilityZoneCount?: IntegerClass;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface OptionStatus {
  /**
   * Timestamp which tells the creation date for the entity.
   */
  readonly creationDate: UpdateTimestamp;
  /**
   * Timestamp which tells the last updated time for the entity.
   */
  readonly updateDate: UpdateTimestamp;
  /**
   * Specifies the latest version for the entity.
   */
  readonly updateVersion?: UIntValue;
  /**
   * Provides the OptionState for the Elasticsearch domain.
   */
  readonly state: OptionState;
  /**
   * Indicates whether the Elasticsearch domain is being deleted.
   */
  readonly pendingDeletion?: Boolean;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface EBSOptionsStatus {
  /**
   * Specifies the EBS options for the specified Elasticsearch domain.
   */
  readonly options: EBSOptions;
  /**
   * Specifies the status of the EBS options for the specified Elasticsearch domain.
   */
  readonly status: OptionStatus;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface EBSOptions {
  /**
   * Specifies whether EBS-based storage is enabled.
   */
  readonly ebsEnabled?: Boolean;
  /**
   * Specifies the volume type for EBS-based storage.
   */
  readonly volumeType?: VolumeType;
  /**
   * Integer to specify the size of an EBS volume.
   */
  readonly volumeSize?: IntegerClass;
  /**
   * Specifies the IOPD for a Provisioned IOPS EBS volume (SSD).
   */
  readonly iops?: IntegerClass;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface OptionStatus {
  /**
   * Timestamp which tells the creation date for the entity.
   */
  readonly creationDate: UpdateTimestamp;
  /**
   * Timestamp which tells the last updated time for the entity.
   */
  readonly updateDate: UpdateTimestamp;
  /**
   * Specifies the latest version for the entity.
   */
  readonly updateVersion?: UIntValue;
  /**
   * Provides the OptionState for the Elasticsearch domain.
   */
  readonly state: OptionState;
  /**
   * Indicates whether the Elasticsearch domain is being deleted.
   */
  readonly pendingDeletion?: Boolean;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface AccessPoliciesStatus {
  /**
   * The access policy configured for the Elasticsearch domain.
   * Access policies may be resource-based, IP-based, or IAM-based.
   * See  Configuring Access Policiesfor more information.
   */
  readonly options: PolicyDocument;
  /**
   * The status of the access policy for the Elasticsearch domain.
   * See OptionStatus for the status information that's included.
   */
  readonly status: OptionStatus;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface OptionStatus {
  /**
   * Timestamp which tells the creation date for the entity.
   */
  readonly creationDate: UpdateTimestamp;
  /**
   * Timestamp which tells the last updated time for the entity.
   */
  readonly updateDate: UpdateTimestamp;
  /**
   * Specifies the latest version for the entity.
   */
  readonly updateVersion?: UIntValue;
  /**
   * Provides the OptionState for the Elasticsearch domain.
   */
  readonly state: OptionState;
  /**
   * Indicates whether the Elasticsearch domain is being deleted.
   */
  readonly pendingDeletion?: Boolean;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface SnapshotOptionsStatus {
  /**
   * Specifies the daily snapshot options specified for the Elasticsearch domain.
   */
  readonly options: SnapshotOptions;
  /**
   * Specifies the status of a daily automated snapshot.
   */
  readonly status: OptionStatus;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface SnapshotOptions {
  /**
   * Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain.
   * Default value is 0 hours.
   */
  readonly automatedSnapshotStartHour?: IntegerClass;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface OptionStatus {
  /**
   * Timestamp which tells the creation date for the entity.
   */
  readonly creationDate: UpdateTimestamp;
  /**
   * Timestamp which tells the last updated time for the entity.
   */
  readonly updateDate: UpdateTimestamp;
  /**
   * Specifies the latest version for the entity.
   */
  readonly updateVersion?: UIntValue;
  /**
   * Provides the OptionState for the Elasticsearch domain.
   */
  readonly state: OptionState;
  /**
   * Indicates whether the Elasticsearch domain is being deleted.
   */
  readonly pendingDeletion?: Boolean;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface VPCDerivedInfoStatus {
  /**
   * Specifies the VPC options for the specified Elasticsearch domain.
   */
  readonly options: VPCDerivedInfo;
  /**
   * Specifies the status of the VPC options for the specified Elasticsearch domain.
   */
  readonly status: OptionStatus;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface VPCDerivedInfo {
  /**
   * The VPC Id for the Elasticsearch domain.
   * Exists only if the domain was created with VPCOptions.
   */
  readonly vpcId?: String;
  /**
   * Specifies the subnets for VPC endpoint.
   */
  readonly subnetIds?: StringList;
  /**
   * The availability zones for the Elasticsearch domain.
   * Exists only if the domain was created with VPCOptions.
   */
  readonly availabilityZones?: StringList;
  /**
   * Specifies the security groups for VPC endpoint.
   */
  readonly securityGroupIds?: StringList;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface OptionStatus {
  /**
   * Timestamp which tells the creation date for the entity.
   */
  readonly creationDate: UpdateTimestamp;
  /**
   * Timestamp which tells the last updated time for the entity.
   */
  readonly updateDate: UpdateTimestamp;
  /**
   * Specifies the latest version for the entity.
   */
  readonly updateVersion?: UIntValue;
  /**
   * Provides the OptionState for the Elasticsearch domain.
   */
  readonly state: OptionState;
  /**
   * Indicates whether the Elasticsearch domain is being deleted.
   */
  readonly pendingDeletion?: Boolean;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface CognitoOptionsStatus {
  /**
   * Specifies the Cognito options for the specified Elasticsearch domain.
   */
  readonly options: CognitoOptions;
  /**
   * Specifies the status of the Cognito options for the specified Elasticsearch domain.
   */
  readonly status: OptionStatus;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface CognitoOptions {
  /**
   * Specifies the option to enable Cognito for Kibana authentication.
   */
  readonly enabled?: Boolean;
  /**
   * Specifies the Cognito user pool ID for Kibana authentication.
   */
  readonly userPoolId?: UserPoolId;
  /**
   * Specifies the Cognito identity pool ID for Kibana authentication.
   */
  readonly identityPoolId?: IdentityPoolId;
  /**
   * Specifies the role ARN that provides Elasticsearch permissions for accessing Cognito resources.
   */
  readonly roleArn?: RoleArn;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface OptionStatus {
  /**
   * Timestamp which tells the creation date for the entity.
   */
  readonly creationDate: UpdateTimestamp;
  /**
   * Timestamp which tells the last updated time for the entity.
   */
  readonly updateDate: UpdateTimestamp;
  /**
   * Specifies the latest version for the entity.
   */
  readonly updateVersion?: UIntValue;
  /**
   * Provides the OptionState for the Elasticsearch domain.
   */
  readonly state: OptionState;
  /**
   * Indicates whether the Elasticsearch domain is being deleted.
   */
  readonly pendingDeletion?: Boolean;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface EncryptionAtRestOptionsStatus {
  /**
   * Specifies the Encryption At Rest options for the specified Elasticsearch domain.
   */
  readonly options: EncryptionAtRestOptions;
  /**
   * Specifies the status of the Encryption At Rest options for the specified Elasticsearch domain.
   */
  readonly status: OptionStatus;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface EncryptionAtRestOptions {
  /**
   * Specifies the option to enable Encryption At Rest.
   */
  readonly enabled?: Boolean;
  /**
   * Specifies the KMS Key ID for Encryption At Rest options.
   */
  readonly kmsKeyId?: KmsKeyId;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface OptionStatus {
  /**
   * Timestamp which tells the creation date for the entity.
   */
  readonly creationDate: UpdateTimestamp;
  /**
   * Timestamp which tells the last updated time for the entity.
   */
  readonly updateDate: UpdateTimestamp;
  /**
   * Specifies the latest version for the entity.
   */
  readonly updateVersion?: UIntValue;
  /**
   * Provides the OptionState for the Elasticsearch domain.
   */
  readonly state: OptionState;
  /**
   * Indicates whether the Elasticsearch domain is being deleted.
   */
  readonly pendingDeletion?: Boolean;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface NodeToNodeEncryptionOptionsStatus {
  /**
   * Specifies the node-to-node encryption options for the specified Elasticsearch domain.
   */
  readonly options: NodeToNodeEncryptionOptions;
  /**
   * Specifies the status of the node-to-node encryption options for the specified Elasticsearch domain.
   */
  readonly status: OptionStatus;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface NodeToNodeEncryptionOptions {
  /**
   * Specify true to enable node-to-node encryption.
   */
  readonly enabled?: Boolean;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface OptionStatus {
  /**
   * Timestamp which tells the creation date for the entity.
   */
  readonly creationDate: UpdateTimestamp;
  /**
   * Timestamp which tells the last updated time for the entity.
   */
  readonly updateDate: UpdateTimestamp;
  /**
   * Specifies the latest version for the entity.
   */
  readonly updateVersion?: UIntValue;
  /**
   * Provides the OptionState for the Elasticsearch domain.
   */
  readonly state: OptionState;
  /**
   * Indicates whether the Elasticsearch domain is being deleted.
   */
  readonly pendingDeletion?: Boolean;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface AdvancedOptionsStatus {
  /**
   * Specifies the status of advanced options for the specified Elasticsearch domain.
   */
  readonly options: AdvancedOptions;
  /**
   * Specifies the status of OptionStatus for advanced options for the specified Elasticsearch domain.
   */
  readonly status: OptionStatus;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface OptionStatus {
  /**
   * Timestamp which tells the creation date for the entity.
   */
  readonly creationDate: UpdateTimestamp;
  /**
   * Timestamp which tells the last updated time for the entity.
   */
  readonly updateDate: UpdateTimestamp;
  /**
   * Specifies the latest version for the entity.
   */
  readonly updateVersion?: UIntValue;
  /**
   * Provides the OptionState for the Elasticsearch domain.
   */
  readonly state: OptionState;
  /**
   * Indicates whether the Elasticsearch domain is being deleted.
   */
  readonly pendingDeletion?: Boolean;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface LogPublishingOptionsStatus {
  /**
   * The log publishing options configured for the Elasticsearch domain.
   */
  readonly options?: LogPublishingOptions;
  /**
   * The status of the log publishing options for the Elasticsearch domain.
   * See OptionStatus for the status information that's included.
   */
  readonly status?: OptionStatus;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface OptionStatus {
  /**
   * Timestamp which tells the creation date for the entity.
   */
  readonly creationDate: UpdateTimestamp;
  /**
   * Timestamp which tells the last updated time for the entity.
   */
  readonly updateDate: UpdateTimestamp;
  /**
   * Specifies the latest version for the entity.
   */
  readonly updateVersion?: UIntValue;
  /**
   * Provides the OptionState for the Elasticsearch domain.
   */
  readonly state: OptionState;
  /**
   * Indicates whether the Elasticsearch domain is being deleted.
   */
  readonly pendingDeletion?: Boolean;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface DomainEndpointOptionsStatus {
  /**
   * Options to configure endpoint for the Elasticsearch domain.
   */
  readonly options: DomainEndpointOptions;
  /**
   * The status of the endpoint options for the Elasticsearch domain.
   * See OptionStatus for the status information that's included.
   */
  readonly status: OptionStatus;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface DomainEndpointOptions {
  /**
   * Specify if only HTTPS endpoint should be enabled for the Elasticsearch domain.
   */
  readonly enforceHttps?: Boolean;
  /**
   * Specify the TLS security policy that needs to be applied to the HTTPS endpoint of Elasticsearch domain.
   * It can be one of the following values:  Policy-Min-TLS-1-0-2019-07:  TLS security policy which supports TLSv1.
   * 0 and higher.
   * Policy-Min-TLS-1-2-2019-07:  TLS security policy which supports only TLSv1.
   * 2.
   */
  readonly tlsSecurityPolicy?: TLSSecurityPolicy;
  /**
   * Specify if custom endpoint should be enabled for the Elasticsearch domain.
   */
  readonly customEndpointEnabled?: Boolean;
  /**
   * Specify the fully qualified domain for your custom endpoint.
   */
  readonly customEndpoint?: DomainNameFqdn;
  /**
   * Specify ACM certificate ARN for your custom endpoint.
   */
  readonly customEndpointCertificateArn?: ARN;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface OptionStatus {
  /**
   * Timestamp which tells the creation date for the entity.
   */
  readonly creationDate: UpdateTimestamp;
  /**
   * Timestamp which tells the last updated time for the entity.
   */
  readonly updateDate: UpdateTimestamp;
  /**
   * Specifies the latest version for the entity.
   */
  readonly updateVersion?: UIntValue;
  /**
   * Provides the OptionState for the Elasticsearch domain.
   */
  readonly state: OptionState;
  /**
   * Indicates whether the Elasticsearch domain is being deleted.
   */
  readonly pendingDeletion?: Boolean;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface AdvancedSecurityOptionsStatus {
  /**
   * Specifies advanced security options for the specified Elasticsearch domain.
   */
  readonly options: AdvancedSecurityOptions;
  /**
   * Status of the advanced security options for the specified Elasticsearch domain.
   */
  readonly status: OptionStatus;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface AdvancedSecurityOptions {
  /**
   * True if advanced security is enabled.
   */
  readonly enabled?: Boolean;
  /**
   * True if the internal user database is enabled.
   */
  readonly internalUserDatabaseEnabled?: Boolean;
  /**
   * Describes the SAML application configured for a domain.
   */
  readonly samlOptions?: SAMLOptionsOutput;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface SAMLOptionsOutput {
  /**
   * True if SAML is enabled.
   */
  readonly enabled?: Boolean;
  /**
   * Describes the SAML Identity Provider's information.
   */
  readonly idp?: SAMLIdp;
  /**
   * The key used for matching the SAML Subject attribute.
   */
  readonly subjectKey?: String;
  /**
   * The key used for matching the SAML Roles attribute.
   */
  readonly rolesKey?: String;
  /**
   * The duration, in minutes, after which a user session becomes inactive.
   */
  readonly sessionTimeoutMinutes?: IntegerClass;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface SAMLIdp {
  /**
   * The Metadata of the SAML application in xml format.
   */
  readonly metadataContent: SAMLMetadata;
  /**
   * The unique Entity ID of the application in SAML Identity Provider.
   */
  readonly entityId: SAMLEntityId;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface OptionStatus {
  /**
   * Timestamp which tells the creation date for the entity.
   */
  readonly creationDate: UpdateTimestamp;
  /**
   * Timestamp which tells the last updated time for the entity.
   */
  readonly updateDate: UpdateTimestamp;
  /**
   * Specifies the latest version for the entity.
   */
  readonly updateVersion?: UIntValue;
  /**
   * Provides the OptionState for the Elasticsearch domain.
   */
  readonly state: OptionState;
  /**
   * Indicates whether the Elasticsearch domain is being deleted.
   */
  readonly pendingDeletion?: Boolean;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface DescribeElasticsearchDomainsRequest {
  /**
   * The Elasticsearch domains for which you want information.
   */
  readonly domainNames: DomainNameList;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface DescribeElasticsearchDomainsResponse {
  /**
   * The status of the domains requested in the DescribeElasticsearchDomains request.
   */
  readonly domainStatusList: ElasticsearchDomainStatusList;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface ElasticsearchDomainStatus {
  /**
   * The unique identifier for the specified Elasticsearch domain.
   */
  readonly domainId: DomainId;
  /**
   * The name of an Elasticsearch domain.
   * Domain names are unique across the domains owned by an account within an AWS region.
   * Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
   */
  readonly domainName: DomainName;
  /**
   * The Amazon resource name (ARN) of an Elasticsearch domain.
   * See Identifiers for IAM Entities in Using AWS Identity and Access Management for more information.
   */
  readonly arn: ARN;
  /**
   * The domain creation status.
   * True if the creation of an Elasticsearch domain is complete.
   * False if domain creation is still in progress.
   */
  readonly created?: Boolean;
  /**
   * The domain deletion status.
   * True if a delete request has been received for the domain but resource cleanup is still in progress.
   * False if the domain has not been deleted.
   * Once domain deletion is complete, the status of the domain is no longer returned.
   */
  readonly deleted?: Boolean;
  /**
   * The Elasticsearch domain endpoint that you use to submit index and search requests.
   */
  readonly endpoint?: ServiceUrl;
  /**
   * Map containing the Elasticsearch domain endpoints used to submit index and search requests.
   * Example key, value: 'vpc','vpc-endpoint-h2dsd34efgyghrtguk5gt6j2foh4.
   * us-east-1.
   * es.
   * amazonaws.
   * com'.
   */
  readonly endpoints?: EndpointsMap;
  /**
   * The status of the Elasticsearch domain configuration.
   * True if Amazon Elasticsearch Service is processing configuration changes.
   * False if the configuration is active.
   */
  readonly processing?: Boolean;
  /**
   * The status of an Elasticsearch domain version upgrade.
   * True if Amazon Elasticsearch Service is undergoing a version upgrade.
   * False if the configuration is active.
   */
  readonly upgradeProcessing?: Boolean;
  /**
   * The status of an Elasticsearch domain version upgrade.
   * True if Amazon Elasticsearch Service is undergoing a version upgrade.
   * False if the configuration is active.
   */
  readonly elasticsearchVersion?: ElasticsearchVersionString;
  /**
   * The type and number of instances in the domain cluster.
   */
  readonly elasticsearchClusterConfig: ElasticsearchClusterConfig;
  /**
   * The EBSOptions for the specified domain.
   * See Configuring EBS-based Storage for more information.
   */
  readonly ebsOptions?: EBSOptions;
  /**
   * IAM access policy as a JSON-formatted string.
   */
  readonly accessPolicies?: PolicyDocument;
  /**
   * Specifies the status of the SnapshotOptions.
   */
  readonly snapshotOptions?: SnapshotOptions;
  /**
   * The VPCOptions for the specified domain.
   * For more information, see VPC Endpoints for Amazon Elasticsearch Service Domains.
   */
  readonly vpcOptions?: VPCDerivedInfo;
  /**
   * The CognitoOptions for the specified domain.
   * For more information, see Amazon Cognito Authentication for Kibana.
   */
  readonly cognitoOptions?: CognitoOptions;
  /**
   * Specifies the status of the EncryptionAtRestOptions.
   */
  readonly encryptionAtRestOptions?: EncryptionAtRestOptions;
  /**
   * Specifies the status of the NodeToNodeEncryptionOptions.
   */
  readonly nodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions;
  /**
   * Specifies the status of the AdvancedOptions.
   */
  readonly advancedOptions?: AdvancedOptions;
  /**
   * Log publishing options for the given domain.
   */
  readonly logPublishingOptions?: LogPublishingOptions;
  /**
   * The current status of the Elasticsearch domain's service software.
   */
  readonly serviceSoftwareOptions?: ServiceSoftwareOptions;
  /**
   * The current status of the Elasticsearch domain's endpoint options.
   */
  readonly domainEndpointOptions?: DomainEndpointOptions;
  /**
   * The current status of the Elasticsearch domain's advanced security options.
   */
  readonly advancedSecurityOptions?: AdvancedSecurityOptions;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface ElasticsearchClusterConfig {
  /**
   * The instance type for an Elasticsearch cluster.
   * UltraWarm instance types are not supported for data instances.
   */
  readonly instanceType?: ESPartitionInstanceType;
  /**
   * The number of instances in the specified domain cluster.
   */
  readonly instanceCount?: IntegerClass;
  /**
   * A boolean value to indicate whether a dedicated master node is enabled.
   * See About Dedicated Master Nodes for more information.
   */
  readonly dedicatedMasterEnabled?: Boolean;
  /**
   * A boolean value to indicate whether zone awareness is enabled.
   * See About Zone Awareness for more information.
   */
  readonly zoneAwarenessEnabled?: Boolean;
  /**
   * Specifies the zone awareness configuration for a domain when zone awareness is enabled.
   */
  readonly zoneAwarenessConfig?: ZoneAwarenessConfig;
  /**
   * The instance type for a dedicated master node.
   */
  readonly dedicatedMasterType?: ESPartitionInstanceType;
  /**
   * Total number of dedicated master nodes, active and on standby, for the cluster.
   */
  readonly dedicatedMasterCount?: IntegerClass;
  /**
   * True to enable warm storage.
   */
  readonly warmEnabled?: Boolean;
  /**
   * The instance type for the Elasticsearch cluster's warm nodes.
   */
  readonly warmType?: ESWarmPartitionInstanceType;
  /**
   * The number of warm nodes in the cluster.
   */
  readonly warmCount?: IntegerClass;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface ZoneAwarenessConfig {
  /**
   * An integer value to indicate the number of availability zones for a domain when zone awareness is enabled.
   * This should be equal to number of subnets if VPC endpoints is enabled.
   */
  readonly availabilityZoneCount?: IntegerClass;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface EBSOptions {
  /**
   * Specifies whether EBS-based storage is enabled.
   */
  readonly ebsEnabled?: Boolean;
  /**
   * Specifies the volume type for EBS-based storage.
   */
  readonly volumeType?: VolumeType;
  /**
   * Integer to specify the size of an EBS volume.
   */
  readonly volumeSize?: IntegerClass;
  /**
   * Specifies the IOPD for a Provisioned IOPS EBS volume (SSD).
   */
  readonly iops?: IntegerClass;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface SnapshotOptions {
  /**
   * Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain.
   * Default value is 0 hours.
   */
  readonly automatedSnapshotStartHour?: IntegerClass;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface VPCDerivedInfo {
  /**
   * The VPC Id for the Elasticsearch domain.
   * Exists only if the domain was created with VPCOptions.
   */
  readonly vpcId?: String;
  /**
   * Specifies the subnets for VPC endpoint.
   */
  readonly subnetIds?: StringList;
  /**
   * The availability zones for the Elasticsearch domain.
   * Exists only if the domain was created with VPCOptions.
   */
  readonly availabilityZones?: StringList;
  /**
   * Specifies the security groups for VPC endpoint.
   */
  readonly securityGroupIds?: StringList;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface CognitoOptions {
  /**
   * Specifies the option to enable Cognito for Kibana authentication.
   */
  readonly enabled?: Boolean;
  /**
   * Specifies the Cognito user pool ID for Kibana authentication.
   */
  readonly userPoolId?: UserPoolId;
  /**
   * Specifies the Cognito identity pool ID for Kibana authentication.
   */
  readonly identityPoolId?: IdentityPoolId;
  /**
   * Specifies the role ARN that provides Elasticsearch permissions for accessing Cognito resources.
   */
  readonly roleArn?: RoleArn;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface EncryptionAtRestOptions {
  /**
   * Specifies the option to enable Encryption At Rest.
   */
  readonly enabled?: Boolean;
  /**
   * Specifies the KMS Key ID for Encryption At Rest options.
   */
  readonly kmsKeyId?: KmsKeyId;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface NodeToNodeEncryptionOptions {
  /**
   * Specify true to enable node-to-node encryption.
   */
  readonly enabled?: Boolean;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface ServiceSoftwareOptions {
  /**
   * The current service software version that is present on the domain.
   */
  readonly currentVersion?: String;
  /**
   * The new service software version if one is available.
   */
  readonly newVersion?: String;
  /**
   * True if you are able to update you service software version.
   * False if you are not able to update your service software version.
   */
  readonly updateAvailable?: Boolean;
  /**
   * True if you are able to cancel your service software version update.
   * False if you are not able to cancel your service software version.
   */
  readonly cancellable?: Boolean;
  /**
   * The status of your service software update.
   * This field can take the following values: ELIGIBLE, PENDING_UPDATE, IN_PROGRESS, COMPLETED, and NOT_ELIGIBLE.
   */
  readonly updateStatus?: DeploymentStatus;
  /**
   * The description of the UpdateStatus.
   */
  readonly description?: String;
  /**
   * Timestamp, in Epoch time, until which you can manually request a service software update.
   * After this date, we automatically update your service software.
   */
  readonly automatedUpdateDate?: DeploymentCloseDateTimeStamp;
  /**
   * True if a service software is never automatically updated.
   * False if a service software is automatically updated after AutomatedUpdateDate.
   */
  readonly optionalDeployment?: Boolean;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface DomainEndpointOptions {
  /**
   * Specify if only HTTPS endpoint should be enabled for the Elasticsearch domain.
   */
  readonly enforceHttps?: Boolean;
  /**
   * Specify the TLS security policy that needs to be applied to the HTTPS endpoint of Elasticsearch domain.
   * It can be one of the following values:  Policy-Min-TLS-1-0-2019-07:  TLS security policy which supports TLSv1.
   * 0 and higher.
   * Policy-Min-TLS-1-2-2019-07:  TLS security policy which supports only TLSv1.
   * 2.
   */
  readonly tlsSecurityPolicy?: TLSSecurityPolicy;
  /**
   * Specify if custom endpoint should be enabled for the Elasticsearch domain.
   */
  readonly customEndpointEnabled?: Boolean;
  /**
   * Specify the fully qualified domain for your custom endpoint.
   */
  readonly customEndpoint?: DomainNameFqdn;
  /**
   * Specify ACM certificate ARN for your custom endpoint.
   */
  readonly customEndpointCertificateArn?: ARN;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface AdvancedSecurityOptions {
  /**
   * True if advanced security is enabled.
   */
  readonly enabled?: Boolean;
  /**
   * True if the internal user database is enabled.
   */
  readonly internalUserDatabaseEnabled?: Boolean;
  /**
   * Describes the SAML application configured for a domain.
   */
  readonly samlOptions?: SAMLOptionsOutput;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface SAMLOptionsOutput {
  /**
   * True if SAML is enabled.
   */
  readonly enabled?: Boolean;
  /**
   * Describes the SAML Identity Provider's information.
   */
  readonly idp?: SAMLIdp;
  /**
   * The key used for matching the SAML Subject attribute.
   */
  readonly subjectKey?: String;
  /**
   * The key used for matching the SAML Roles attribute.
   */
  readonly rolesKey?: String;
  /**
   * The duration, in minutes, after which a user session becomes inactive.
   */
  readonly sessionTimeoutMinutes?: IntegerClass;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface SAMLIdp {
  /**
   * The Metadata of the SAML application in xml format.
   */
  readonly metadataContent: SAMLMetadata;
  /**
   * The unique Entity ID of the application in SAML Identity Provider.
   */
  readonly entityId: SAMLEntityId;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface DescribeElasticsearchInstanceTypeLimitsRequest {
  /**
   * DomainName represents the name of the Domain that we are trying to modify.
   * This should be present only if we are querying for Elasticsearch  Limits  for existing domain.
   */
  readonly domainName?: DomainName;
  /**
   * The instance type for an Elasticsearch cluster for which Elasticsearch  Limits  are needed.
   */
  readonly instanceType: ESPartitionInstanceType;
  /**
   * Version of Elasticsearch for which  Limits  are needed.
   */
  readonly elasticsearchVersion: ElasticsearchVersionString;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface DescribeElasticsearchInstanceTypeLimitsResponse {
  /**
   * Version of Elasticsearch for which  Limits  are needed.
   */
  readonly limitsByRole?: LimitsByRole;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface DescribeInboundCrossClusterSearchConnectionsRequest {
  /**
   * A list of filters used to match properties for inbound cross-cluster search connection.
   * Available Filter names for this operation are:  cross-cluster-search-connection-id source-domain-info.
   * domain-name source-domain-info.
   * owner-id source-domain-info.
   * region destination-domain-info.
   * domain-name.
   */
  readonly filters?: FilterList;
  /**
   * Set this value to limit the number of results returned.
   * If not specified, defaults to 100.
   */
  readonly maxResults?: MaxResults;
  /**
   * NextToken is sent in case the earlier API call results contain the NextToken.
   * It is used for pagination.
   */
  readonly nextToken?: NextToken;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface Filter {
  /**
   * Specifies the name of the filter.
   */
  readonly name?: NonEmptyString;
  /**
   * Contains one or more values for the filter.
   */
  readonly values?: ValueStringList;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface DescribeInboundCrossClusterSearchConnectionsResponse {
  /**
   * Consists of list of InboundCrossClusterSearchConnection matching the specified filter criteria.
   */
  readonly crossClusterSearchConnections?: InboundCrossClusterSearchConnections;
  /**
   * If more results are available and NextToken is present, make the next request to the same API with the received NextToken to paginate the remaining results.
   */
  readonly nextToken?: NextToken;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface InboundCrossClusterSearchConnection {
  /**
   * Specifies the DomainInformation for the source Elasticsearch domain.
   */
  readonly sourceDomainInfo?: DomainInformation;
  /**
   * Specifies the DomainInformation for the destination Elasticsearch domain.
   */
  readonly destinationDomainInfo?: DomainInformation;
  /**
   * Specifies the connection id for the inbound cross-cluster search connection.
   */
  readonly crossClusterSearchConnectionId?: CrossClusterSearchConnectionId;
  /**
   * Specifies the InboundCrossClusterSearchConnectionStatus for the outbound connection.
   */
  readonly connectionStatus?: InboundCrossClusterSearchConnectionStatus;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface DomainInformation {
  /**
   * Specifies the DomainName.
   */
  readonly ownerId?: OwnerId;
  /**
   * Specifies the DomainName.
   */
  readonly domainName: DomainName;
  /**
   * Specifies the DomainName.
   */
  readonly region?: Region;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface DomainInformation {
  /**
   * Specifies the DomainName.
   */
  readonly ownerId?: OwnerId;
  /**
   * Specifies the DomainName.
   */
  readonly domainName: DomainName;
  /**
   * Specifies the DomainName.
   */
  readonly region?: Region;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface InboundCrossClusterSearchConnectionStatus {
  /**
   * The state code for inbound connection.
   * This can be one of the following:  PENDING_ACCEPTANCE: Inbound connection is not yet accepted by destination domain owner.
   * APPROVED: Inbound connection is pending acceptance by destination domain owner.
   * REJECTING: Inbound connection rejection is in process.
   * REJECTED: Inbound connection is rejected.
   * DELETING: Inbound connection deletion is in progress.
   * DELETED: Inbound connection is deleted and cannot be used further.
   */
  readonly statusCode?: InboundCrossClusterSearchConnectionStatusCode;
  /**
   * Specifies verbose information for the inbound connection status.
   */
  readonly message?: CrossClusterSearchConnectionStatusMessage;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface DescribeOutboundCrossClusterSearchConnectionsRequest {
  /**
   * A list of filters used to match properties for outbound cross-cluster search connection.
   * Available Filter names for this operation are:  cross-cluster-search-connection-id destination-domain-info.
   * domain-name destination-domain-info.
   * owner-id destination-domain-info.
   * region source-domain-info.
   * domain-name.
   */
  readonly filters?: FilterList;
  /**
   * Set this value to limit the number of results returned.
   * If not specified, defaults to 100.
   */
  readonly maxResults?: MaxResults;
  /**
   * NextToken is sent in case the earlier API call results contain the NextToken.
   * It is used for pagination.
   */
  readonly nextToken?: NextToken;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface Filter {
  /**
   * Specifies the name of the filter.
   */
  readonly name?: NonEmptyString;
  /**
   * Contains one or more values for the filter.
   */
  readonly values?: ValueStringList;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface DescribeOutboundCrossClusterSearchConnectionsResponse {
  /**
   * Consists of list of OutboundCrossClusterSearchConnection matching the specified filter criteria.
   */
  readonly crossClusterSearchConnections?: OutboundCrossClusterSearchConnections;
  /**
   * If more results are available and NextToken is present, make the next request to the same API with the received NextToken to paginate the remaining results.
   */
  readonly nextToken?: NextToken;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface OutboundCrossClusterSearchConnection {
  /**
   * Specifies the DomainInformation for the source Elasticsearch domain.
   */
  readonly sourceDomainInfo?: DomainInformation;
  /**
   * Specifies the DomainInformation for the destination Elasticsearch domain.
   */
  readonly destinationDomainInfo?: DomainInformation;
  /**
   * Specifies the connection id for the outbound cross-cluster search connection.
   */
  readonly crossClusterSearchConnectionId?: CrossClusterSearchConnectionId;
  /**
   * Specifies the connection alias for the outbound cross-cluster search connection.
   */
  readonly connectionAlias?: ConnectionAlias;
  /**
   * Specifies the OutboundCrossClusterSearchConnectionStatus for the outbound connection.
   */
  readonly connectionStatus?: OutboundCrossClusterSearchConnectionStatus;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface DomainInformation {
  /**
   * Specifies the DomainName.
   */
  readonly ownerId?: OwnerId;
  /**
   * Specifies the DomainName.
   */
  readonly domainName: DomainName;
  /**
   * Specifies the DomainName.
   */
  readonly region?: Region;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface DomainInformation {
  /**
   * Specifies the DomainName.
   */
  readonly ownerId?: OwnerId;
  /**
   * Specifies the DomainName.
   */
  readonly domainName: DomainName;
  /**
   * Specifies the DomainName.
   */
  readonly region?: Region;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface OutboundCrossClusterSearchConnectionStatus {
  /**
   * The state code for outbound connection.
   * This can be one of the following:  VALIDATING: The outbound connection request is being validated.
   * VALIDATION_FAILED: Validation failed for the connection request.
   * PENDING_ACCEPTANCE: Outbound connection request is validated and is not yet accepted by destination domain owner.
   * PROVISIONING: Outbound connection request is in process.
   * ACTIVE: Outbound connection is active and ready to use.
   * REJECTED: Outbound connection request is rejected by destination domain owner.
   * DELETING: Outbound connection deletion is in progress.
   * DELETED: Outbound connection is deleted and cannot be used further.
   */
  readonly statusCode?: OutboundCrossClusterSearchConnectionStatusCode;
  /**
   * Specifies verbose information for the outbound connection status.
   */
  readonly message?: CrossClusterSearchConnectionStatusMessage;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface DescribePackagesRequest {
  /**
   * Only returns packages that match the DescribePackagesFilterList values.
   */
  readonly filters?: DescribePackagesFilterList;
  /**
   * Limits results to a maximum number of packages.
   */
  readonly maxResults?: MaxResults;
  /**
   * Used for pagination.
   * Only necessary if a previous API call includes a non-null NextToken value.
   * If provided, returns results for the next page.
   */
  readonly nextToken?: NextToken;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface DescribePackagesFilter {
  /**
   * Any field from PackageDetails.
   */
  readonly name?: DescribePackagesFilterName;
  /**
   * A list of values for the specified field.
   */
  readonly value?: DescribePackagesFilterValues;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface DescribePackagesResponse {
  /**
   * List of PackageDetails objects.
   */
  readonly packageDetailsList?: PackageDetailsList;
  /**
   * List of PackageDetails objects.
   */
  readonly nextToken?: String;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface PackageDetails {
  /**
   * Internal ID of the package.
   */
  readonly packageId?: PackageID;
  /**
   * User specified name of the package.
   */
  readonly packageName?: PackageName;
  /**
   * Currently supports only TXT-DICTIONARY.
   */
  readonly packageType?: PackageType;
  /**
   * User-specified description of the package.
   */
  readonly packageDescription?: PackageDescription;
  /**
   * Current state of the package.
   * Values are COPYING/COPY_FAILED/AVAILABLE/DELETING/DELETE_FAILED.
   */
  readonly packageStatus?: PackageStatus;
  /**
   * Timestamp which tells creation date of the package.
   */
  readonly createdAt?: CreatedAt;
  /**
   * Timestamp which tells creation date of the package.
   */
  readonly lastUpdatedAt?: LastUpdated;
  /**
   * Timestamp which tells creation date of the package.
   */
  readonly availablePackageVersion?: PackageVersion;
  /**
   * Additional information if the package is in an error state.
   * Null otherwise.
   */
  readonly errorDetails?: ErrorDetails;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface ErrorDetails {
  /**
   * Specifies the status of the Encryption At Rest options for the specified Elasticsearch domain.
   */
  readonly errorType?: ErrorType;
  /**
   * Specifies the status of the Encryption At Rest options for the specified Elasticsearch domain.
   */
  readonly errorMessage?: ErrorMessage;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface DescribeReservedElasticsearchInstanceOfferingsRequest {
  /**
   * The offering identifier filter value.
   * Use this parameter to show only the available offering that matches the specified reservation identifier.
   */
  readonly reservedElasticsearchInstanceOfferingId?: GUID;
  /**
   * Set this value to limit the number of results returned.
   * If not specified, defaults to 100.
   */
  readonly maxResults?: MaxResults;
  /**
   * NextToken should be sent in case if earlier API call produced result containing NextToken.
   * It is used for pagination.
   */
  readonly nextToken?: NextToken;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface DescribeReservedElasticsearchInstanceOfferingsResponse {
  /**
   * Provides an identifier to allow retrieval of paginated results.
   */
  readonly nextToken?: NextToken;
  /**
   * List of reserved Elasticsearch instance offerings.
   */
  readonly reservedElasticsearchInstanceOfferings?: ReservedElasticsearchInstanceOfferingList;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface ReservedElasticsearchInstanceOffering {
  /**
   * The Elasticsearch reserved instance offering identifier.
   */
  readonly reservedElasticsearchInstanceOfferingId?: GUID;
  /**
   * The Elasticsearch instance type offered by the reserved instance offering.
   */
  readonly elasticsearchInstanceType?: ESPartitionInstanceType;
  /**
   * The duration, in seconds, for which the offering will reserve the Elasticsearch instance.
   */
  readonly duration?: Integer;
  /**
   * The upfront fixed charge you will pay to purchase the specific reserved Elasticsearch instance offering.
   */
  readonly fixedPrice?: Double;
  /**
   * The rate you are charged for each hour the domain that is using the offering is running.
   */
  readonly usagePrice?: Double;
  /**
   * The currency code for the reserved Elasticsearch instance offering.
   */
  readonly currencyCode?: String;
  /**
   * Payment option for the reserved Elasticsearch instance offering.
   */
  readonly paymentOption?: ReservedElasticsearchInstancePaymentOption;
  /**
   * The charge to your account regardless of whether you are creating any domains using the instance offering.
   */
  readonly recurringCharges?: RecurringChargeList;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface RecurringCharge {
  /**
   * The monetary amount of the recurring charge.
   */
  readonly recurringChargeAmount?: Double;
  /**
   * The frequency of the recurring charge.
   */
  readonly recurringChargeFrequency?: String;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface DescribeReservedElasticsearchInstancesRequest {
  /**
   * The reserved instance identifier filter value.
   * Use this parameter to show only the reservation that matches the specified reserved Elasticsearch instance ID.
   */
  readonly reservedElasticsearchInstanceId?: GUID;
  /**
   * Set this value to limit the number of results returned.
   * If not specified, defaults to 100.
   */
  readonly maxResults?: MaxResults;
  /**
   * NextToken should be sent in case if earlier API call produced result containing NextToken.
   * It is used for pagination.
   */
  readonly nextToken?: NextToken;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface DescribeReservedElasticsearchInstancesResponse {
  /**
   * Provides an identifier to allow retrieval of paginated results.
   */
  readonly nextToken?: String;
  /**
   * List of reserved Elasticsearch instances.
   */
  readonly reservedElasticsearchInstances?: ReservedElasticsearchInstanceList;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface ReservedElasticsearchInstance {
  /**
   * The customer-specified identifier to track this reservation.
   */
  readonly reservationName?: ReservationToken;
  /**
   * The unique identifier for the reservation.
   */
  readonly reservedElasticsearchInstanceId?: GUID;
  /**
   * The offering identifier.
   */
  readonly reservedElasticsearchInstanceOfferingId?: String;
  /**
   * The Elasticsearch instance type offered by the reserved instance offering.
   */
  readonly elasticsearchInstanceType?: ESPartitionInstanceType;
  /**
   * The time the reservation started.
   */
  readonly startTime?: UpdateTimestamp;
  /**
   * The duration, in seconds, for which the Elasticsearch instance is reserved.
   */
  readonly duration?: Integer;
  /**
   * The upfront fixed charge you will paid to purchase the specific reserved Elasticsearch instance offering.
   */
  readonly fixedPrice?: Double;
  /**
   * The rate you are charged for each hour for the domain that is using this reserved instance.
   */
  readonly usagePrice?: Double;
  /**
   * The currency code for the reserved Elasticsearch instance offering.
   */
  readonly currencyCode?: String;
  /**
   * The number of Elasticsearch instances that have been reserved.
   */
  readonly elasticsearchInstanceCount?: Integer;
  /**
   * The state of the reserved Elasticsearch instance.
   */
  readonly state?: String;
  /**
   * The payment option as defined in the reserved Elasticsearch instance offering.
   */
  readonly paymentOption?: ReservedElasticsearchInstancePaymentOption;
  /**
   * The charge to your account regardless of whether you are creating any domains using the instance offering.
   */
  readonly recurringCharges?: RecurringChargeList;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface RecurringCharge {
  /**
   * The monetary amount of the recurring charge.
   */
  readonly recurringChargeAmount?: Double;
  /**
   * The frequency of the recurring charge.
   */
  readonly recurringChargeFrequency?: String;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface DissociatePackageRequest {
  /**
   * Internal ID of the package that you want to associate with a domain.
   * Use DescribePackages to find this value.
   */
  readonly packageId: PackageID;
  /**
   * Name of the domain that you want to associate the package with.
   */
  readonly domainName: DomainName;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface DissociatePackageResponse {
  /**
   * DomainPackageDetails.
   */
  readonly domainPackageDetails?: DomainPackageDetails;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface DomainPackageDetails {
  /**
   * Internal ID of the package.
   */
  readonly packageId?: PackageID;
  /**
   * User specified name of the package.
   */
  readonly packageName?: PackageName;
  /**
   * Currently supports only TXT-DICTIONARY.
   */
  readonly packageType?: PackageType;
  /**
   * Timestamp of the most-recent update to the association status.
   */
  readonly lastUpdated?: LastUpdated;
  /**
   * Name of the domain you've associated a package with.
   */
  readonly domainName?: DomainName;
  /**
   * State of the association.
   * Values are ASSOCIATING/ASSOCIATION_FAILED/ACTIVE/DISSOCIATING/DISSOCIATION_FAILED.
   */
  readonly domainPackageStatus?: DomainPackageStatus;
  /**
   * State of the association.
   * Values are ASSOCIATING/ASSOCIATION_FAILED/ACTIVE/DISSOCIATING/DISSOCIATION_FAILED.
   */
  readonly packageVersion?: PackageVersion;
  /**
   * The relative path on Amazon ES nodes, which can be used as synonym_path when the package is synonym file.
   */
  readonly referencePath?: ReferencePath;
  /**
   * Additional information if the package is in an error state.
   * Null otherwise.
   */
  readonly errorDetails?: ErrorDetails;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface ErrorDetails {
  /**
   * Specifies the status of the Encryption At Rest options for the specified Elasticsearch domain.
   */
  readonly errorType?: ErrorType;
  /**
   * Specifies the status of the Encryption At Rest options for the specified Elasticsearch domain.
   */
  readonly errorMessage?: ErrorMessage;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface GetCompatibleElasticsearchVersionsRequest {
  /**
   * Contains one or more values for the filter.
   */
  readonly domainName?: DomainName;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface GetCompatibleElasticsearchVersionsResponse {
  /**
   * A map of compatible Elasticsearch versions returned as part of the  GetCompatibleElasticsearchVersions  operation.
   */
  readonly compatibleElasticsearchVersions?: CompatibleElasticsearchVersionsList;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface CompatibleVersionsMap {
  /**
   * The current version of Elasticsearch on which a domain is.
   */
  readonly sourceVersion?: ElasticsearchVersionString;
  /**
   * The current version of Elasticsearch on which a domain is.
   */
  readonly targetVersions?: ElasticsearchVersionList;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface GetPackageVersionHistoryRequest {
  /**
   * Returns an audit history of versions of the package.
   */
  readonly packageId: PackageID;
  /**
   * Limits results to a maximum number of versions.
   */
  readonly maxResults?: MaxResults;
  /**
   * Used for pagination.
   * Only necessary if a previous API call includes a non-null NextToken value.
   * If provided, returns results for the next page.
   */
  readonly nextToken?: NextToken;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface GetPackageVersionHistoryResponse {
  /**
   * Used for pagination.
   * Only necessary if a previous API call includes a non-null NextToken value.
   * If provided, returns results for the next page.
   */
  readonly packageId?: PackageID;
  /**
   * List of PackageVersionHistory objects.
   */
  readonly packageVersionHistoryList?: PackageVersionHistoryList;
  /**
   * List of PackageVersionHistory objects.
   */
  readonly nextToken?: String;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface PackageVersionHistory {
  /**
   * Version of the package.
   */
  readonly packageVersion?: PackageVersion;
  /**
   * A message associated with the version.
   */
  readonly commitMessage?: CommitMessage;
  /**
   * Timestamp which tells creation time of the package version.
   */
  readonly createdAt?: CreatedAt;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface GetUpgradeHistoryRequest {
  /**
   * List of PackageVersionHistory objects.
   */
  readonly domainName: DomainName;
  /**
   * List of PackageVersionHistory objects.
   */
  readonly maxResults?: MaxResults;
  /**
   * List of PackageVersionHistory objects.
   */
  readonly nextToken?: NextToken;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface GetUpgradeHistoryResponse {
  /**
   * A list of  UpgradeHistory  objects corresponding to each Upgrade or Upgrade Eligibility Check performed on a domain returned as part of  GetUpgradeHistoryResponse  object.
   */
  readonly upgradeHistories?: UpgradeHistoryList;
  /**
   * Pagination token that needs to be supplied to the next call to get the next page of results.
   */
  readonly nextToken?: String;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface UpgradeHistory {
  /**
   * A string that describes the update briefly.
   */
  readonly upgradeName?: UpgradeName;
  /**
   * UTC Timestamp at which the Upgrade API call was made in "yyyy-MM-ddTHH:mm:ssZ" format.
   */
  readonly startTimestamp?: StartTimestamp;
  /**
   * The overall status of the update.
   * The status can take one of the following values:  In Progress Succeeded Succeeded with Issues Failed.
   */
  readonly upgradeStatus?: UpgradeStatus;
  /**
   * A list of  UpgradeStepItem  s representing information about each step performed as pard of a specific Upgrade or Upgrade Eligibility Check.
   */
  readonly stepsList?: UpgradeStepsList;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface UpgradeStepItem {
  /**
   * Represents one of 3 steps that an Upgrade or Upgrade Eligibility Check does through:  PreUpgradeCheck Snapshot Upgrade.
   */
  readonly upgradeStep?: UpgradeStep;
  /**
   * The status of a particular step during an upgrade.
   * The status can take one of the following values:  In Progress Succeeded Succeeded with Issues Failed.
   */
  readonly upgradeStepStatus?: UpgradeStatus;
  /**
   * A list of strings containing detailed information about the errors encountered in a particular step.
   */
  readonly issues?: Issues;
  /**
   * The Floating point value representing progress percentage of a particular step.
   */
  readonly progressPercent?: Double;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface GetUpgradeStatusRequest {
  /**
   * Pagination token that needs to be supplied to the next call to get the next page of results.
   */
  readonly domainName: DomainName;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface GetUpgradeStatusResponse {
  /**
   * Represents one of 3 steps that an Upgrade or Upgrade Eligibility Check does through:  PreUpgradeCheck Snapshot Upgrade.
   */
  readonly upgradeStep?: UpgradeStep;
  /**
   * One of 4 statuses that a step can go through returned as part of the  GetUpgradeStatusResponse  object.
   * The status can take one of the following values:  In Progress Succeeded Succeeded with Issues Failed.
   */
  readonly stepStatus?: UpgradeStatus;
  /**
   * A string that describes the update briefly.
   */
  readonly upgradeName?: UpgradeName;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface ListDomainNamesResponse {
  /**
   * List of Elasticsearch domain names.
   */
  readonly domainNames?: DomainInfoList;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface DomainInfo {
  /**
   * Specifies the DomainName.
   */
  readonly domainName?: DomainName;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface ListDomainsForPackageRequest {
  /**
   * The package for which to list domains.
   */
  readonly packageId: PackageID;
  /**
   * Limits results to a maximum number of domains.
   */
  readonly maxResults?: MaxResults;
  /**
   * Used for pagination.
   * Only necessary if a previous API call includes a non-null NextToken value.
   * If provided, returns results for the next page.
   */
  readonly nextToken?: NextToken;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface ListDomainsForPackageResponse {
  /**
   * List of DomainPackageDetails objects.
   */
  readonly domainPackageDetailsList?: DomainPackageDetailsList;
  /**
   * List of DomainPackageDetails objects.
   */
  readonly nextToken?: String;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface DomainPackageDetails {
  /**
   * Internal ID of the package.
   */
  readonly packageId?: PackageID;
  /**
   * User specified name of the package.
   */
  readonly packageName?: PackageName;
  /**
   * Currently supports only TXT-DICTIONARY.
   */
  readonly packageType?: PackageType;
  /**
   * Timestamp of the most-recent update to the association status.
   */
  readonly lastUpdated?: LastUpdated;
  /**
   * Name of the domain you've associated a package with.
   */
  readonly domainName?: DomainName;
  /**
   * State of the association.
   * Values are ASSOCIATING/ASSOCIATION_FAILED/ACTIVE/DISSOCIATING/DISSOCIATION_FAILED.
   */
  readonly domainPackageStatus?: DomainPackageStatus;
  /**
   * State of the association.
   * Values are ASSOCIATING/ASSOCIATION_FAILED/ACTIVE/DISSOCIATING/DISSOCIATION_FAILED.
   */
  readonly packageVersion?: PackageVersion;
  /**
   * The relative path on Amazon ES nodes, which can be used as synonym_path when the package is synonym file.
   */
  readonly referencePath?: ReferencePath;
  /**
   * Additional information if the package is in an error state.
   * Null otherwise.
   */
  readonly errorDetails?: ErrorDetails;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface ErrorDetails {
  /**
   * Specifies the status of the Encryption At Rest options for the specified Elasticsearch domain.
   */
  readonly errorType?: ErrorType;
  /**
   * Specifies the status of the Encryption At Rest options for the specified Elasticsearch domain.
   */
  readonly errorMessage?: ErrorMessage;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface ListElasticsearchInstanceTypesRequest {
  /**
   * Version of Elasticsearch for which list of supported elasticsearch instance types are needed.
   */
  readonly elasticsearchVersion: ElasticsearchVersionString;
  /**
   * DomainName represents the name of the Domain that we are trying to modify.
   * This should be present only if we are querying for list of available Elasticsearch instance types when modifying existing domain.
   */
  readonly domainName?: DomainName;
  /**
   * Set this value to limit the number of results returned.
   * Value provided must be greater than 30 else it wont be honored.
   */
  readonly maxResults?: MaxResults;
  /**
   * NextToken should be sent in case if earlier API call produced result containing NextToken.
   * It is used for pagination.
   */
  readonly nextToken?: NextToken;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface ListElasticsearchInstanceTypesResponse {
  /**
   * List of instance types supported by Amazon Elasticsearch service for given  ElasticsearchVersion.
   */
  readonly elasticsearchInstanceTypes?: ElasticsearchInstanceTypeList;
  /**
   * In case if there are more results available NextToken would be present, make further request to the same API with received NextToken to paginate remaining results.
   */
  readonly nextToken?: NextToken;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface ListElasticsearchVersionsRequest {
  /**
   * Set this value to limit the number of results returned.
   * Value provided must be greater than 10 else it wont be honored.
   */
  readonly maxResults?: MaxResults;
  /**
   * Set this value to limit the number of results returned.
   * Value provided must be greater than 10 else it wont be honored.
   */
  readonly nextToken?: NextToken;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface ListElasticsearchVersionsResponse {
  /**
   * Set this value to limit the number of results returned.
   * Value provided must be greater than 10 else it wont be honored.
   */
  readonly elasticsearchVersions?: ElasticsearchVersionList;
  /**
   * Set this value to limit the number of results returned.
   * Value provided must be greater than 10 else it wont be honored.
   */
  readonly nextToken?: NextToken;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface ListPackagesForDomainRequest {
  /**
   * The name of the domain for which you want to list associated packages.
   */
  readonly domainName: DomainName;
  /**
   * Limits results to a maximum number of packages.
   */
  readonly maxResults?: MaxResults;
  /**
   * Used for pagination.
   * Only necessary if a previous API call includes a non-null NextToken value.
   * If provided, returns results for the next page.
   */
  readonly nextToken?: NextToken;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface ListPackagesForDomainResponse {
  /**
   * List of DomainPackageDetails objects.
   */
  readonly domainPackageDetailsList?: DomainPackageDetailsList;
  /**
   * Pagination token that needs to be supplied to the next call to get the next page of results.
   */
  readonly nextToken?: String;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface DomainPackageDetails {
  /**
   * Internal ID of the package.
   */
  readonly packageId?: PackageID;
  /**
   * User specified name of the package.
   */
  readonly packageName?: PackageName;
  /**
   * Currently supports only TXT-DICTIONARY.
   */
  readonly packageType?: PackageType;
  /**
   * Timestamp of the most-recent update to the association status.
   */
  readonly lastUpdated?: LastUpdated;
  /**
   * Name of the domain you've associated a package with.
   */
  readonly domainName?: DomainName;
  /**
   * State of the association.
   * Values are ASSOCIATING/ASSOCIATION_FAILED/ACTIVE/DISSOCIATING/DISSOCIATION_FAILED.
   */
  readonly domainPackageStatus?: DomainPackageStatus;
  /**
   * State of the association.
   * Values are ASSOCIATING/ASSOCIATION_FAILED/ACTIVE/DISSOCIATING/DISSOCIATION_FAILED.
   */
  readonly packageVersion?: PackageVersion;
  /**
   * The relative path on Amazon ES nodes, which can be used as synonym_path when the package is synonym file.
   */
  readonly referencePath?: ReferencePath;
  /**
   * Additional information if the package is in an error state.
   * Null otherwise.
   */
  readonly errorDetails?: ErrorDetails;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface ErrorDetails {
  /**
   * Specifies the status of the Encryption At Rest options for the specified Elasticsearch domain.
   */
  readonly errorType?: ErrorType;
  /**
   * Specifies the status of the Encryption At Rest options for the specified Elasticsearch domain.
   */
  readonly errorMessage?: ErrorMessage;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface ListTagsRequest {
  /**
   * Specify the ARN for the Elasticsearch domain to which the tags are attached that you want to view.
   */
  readonly arn: ARN;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface ListTagsResponse {
  /**
   * List of Tag for the requested Elasticsearch domain.
   */
  readonly tagList?: TagList;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface Tag {
  /**
   * Specifies the TagKey, the name of the tag.
   * Tag keys must be unique for the Elasticsearch domain to which they are attached.
   */
  readonly key: TagKey;
  /**
   * Specifies the TagValue, the value assigned to the corresponding tag key.
   * Tag values can be null and do not have to be unique in a tag set.
   * For example, you can have a key value pair in a tag set of project : Trinity and cost-center : Trinity.
   */
  readonly value: TagValue;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface PurchaseReservedElasticsearchInstanceOfferingRequest {
  /**
   * The ID of the reserved Elasticsearch instance offering to purchase.
   */
  readonly reservedElasticsearchInstanceOfferingId: GUID;
  /**
   * A customer-specified identifier to track this reservation.
   */
  readonly reservationName: ReservationToken;
  /**
   * The number of Elasticsearch instances to reserve.
   */
  readonly instanceCount?: InstanceCount;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface PurchaseReservedElasticsearchInstanceOfferingResponse {
  /**
   * Details of the reserved Elasticsearch instance which was purchased.
   */
  readonly reservedElasticsearchInstanceId?: GUID;
  /**
   * The customer-specified identifier used to track this reservation.
   */
  readonly reservationName?: ReservationToken;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface RejectInboundCrossClusterSearchConnectionRequest {
  /**
   * The id of the inbound connection that you want to reject.
   */
  readonly crossClusterSearchConnectionId: CrossClusterSearchConnectionId;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface RejectInboundCrossClusterSearchConnectionResponse {
  /**
   * Specifies the InboundCrossClusterSearchConnection of rejected inbound connection.
   */
  readonly crossClusterSearchConnection?: InboundCrossClusterSearchConnection;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface InboundCrossClusterSearchConnection {
  /**
   * Specifies the DomainInformation for the source Elasticsearch domain.
   */
  readonly sourceDomainInfo?: DomainInformation;
  /**
   * Specifies the DomainInformation for the destination Elasticsearch domain.
   */
  readonly destinationDomainInfo?: DomainInformation;
  /**
   * Specifies the connection id for the inbound cross-cluster search connection.
   */
  readonly crossClusterSearchConnectionId?: CrossClusterSearchConnectionId;
  /**
   * Specifies the InboundCrossClusterSearchConnectionStatus for the outbound connection.
   */
  readonly connectionStatus?: InboundCrossClusterSearchConnectionStatus;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface DomainInformation {
  /**
   * Specifies the DomainName.
   */
  readonly ownerId?: OwnerId;
  /**
   * Specifies the DomainName.
   */
  readonly domainName: DomainName;
  /**
   * Specifies the DomainName.
   */
  readonly region?: Region;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface DomainInformation {
  /**
   * Specifies the DomainName.
   */
  readonly ownerId?: OwnerId;
  /**
   * Specifies the DomainName.
   */
  readonly domainName: DomainName;
  /**
   * Specifies the DomainName.
   */
  readonly region?: Region;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface InboundCrossClusterSearchConnectionStatus {
  /**
   * The state code for inbound connection.
   * This can be one of the following:  PENDING_ACCEPTANCE: Inbound connection is not yet accepted by destination domain owner.
   * APPROVED: Inbound connection is pending acceptance by destination domain owner.
   * REJECTING: Inbound connection rejection is in process.
   * REJECTED: Inbound connection is rejected.
   * DELETING: Inbound connection deletion is in progress.
   * DELETED: Inbound connection is deleted and cannot be used further.
   */
  readonly statusCode?: InboundCrossClusterSearchConnectionStatusCode;
  /**
   * Specifies verbose information for the inbound connection status.
   */
  readonly message?: CrossClusterSearchConnectionStatusMessage;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface RemoveTagsRequest {
  /**
   * Specifies the ARN for the Elasticsearch domain from which you want to delete the specified tags.
   */
  readonly arn: ARN;
  /**
   * Specifies the TagKey list which you want to remove from the Elasticsearch domain.
   */
  readonly tagKeys: StringList;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface StartElasticsearchServiceSoftwareUpdateRequest {
  /**
   * The name of the domain that you want to update to the latest service software.
   */
  readonly domainName: DomainName;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface StartElasticsearchServiceSoftwareUpdateResponse {
  /**
   * The current status of the Elasticsearch service software update.
   */
  readonly serviceSoftwareOptions?: ServiceSoftwareOptions;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface ServiceSoftwareOptions {
  /**
   * The current service software version that is present on the domain.
   */
  readonly currentVersion?: String;
  /**
   * The new service software version if one is available.
   */
  readonly newVersion?: String;
  /**
   * True if you are able to update you service software version.
   * False if you are not able to update your service software version.
   */
  readonly updateAvailable?: Boolean;
  /**
   * True if you are able to cancel your service software version update.
   * False if you are not able to cancel your service software version.
   */
  readonly cancellable?: Boolean;
  /**
   * The status of your service software update.
   * This field can take the following values: ELIGIBLE, PENDING_UPDATE, IN_PROGRESS, COMPLETED, and NOT_ELIGIBLE.
   */
  readonly updateStatus?: DeploymentStatus;
  /**
   * The description of the UpdateStatus.
   */
  readonly description?: String;
  /**
   * Timestamp, in Epoch time, until which you can manually request a service software update.
   * After this date, we automatically update your service software.
   */
  readonly automatedUpdateDate?: DeploymentCloseDateTimeStamp;
  /**
   * True if a service software is never automatically updated.
   * False if a service software is automatically updated after AutomatedUpdateDate.
   */
  readonly optionalDeployment?: Boolean;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface UpdateElasticsearchDomainConfigRequest {
  /**
   * The name of the Elasticsearch domain that you are updating.
   */
  readonly domainName: DomainName;
  /**
   * The type and number of instances to instantiate for the domain cluster.
   */
  readonly elasticsearchClusterConfig?: ElasticsearchClusterConfig;
  /**
   * Specify the type and size of the EBS volume that you want to use.
   */
  readonly ebsOptions?: EBSOptions;
  /**
   * Option to set the time, in UTC format, for the daily automated snapshot.
   * Default value is 0 hours.
   */
  readonly snapshotOptions?: SnapshotOptions;
  /**
   * Options to specify the subnets and security groups for VPC endpoint.
   * For more information, see Creating a VPC in VPC Endpoints for Amazon Elasticsearch Service Domains.
   */
  readonly vpcOptions?: VPCOptions;
  /**
   * Options to specify the Cognito user and identity pools for Kibana authentication.
   * For more information, see Amazon Cognito Authentication for Kibana.
   */
  readonly cognitoOptions?: CognitoOptions;
  /**
   * Modifies the advanced option to allow references to indices in an HTTP request body.
   * Must be false when configuring access to individual sub-resources.
   * By default, the value is true.
   * See Configuration Advanced Options for more information.
   */
  readonly advancedOptions?: AdvancedOptions;
  /**
   * IAM access policy as a JSON-formatted string.
   */
  readonly accessPolicies?: PolicyDocument;
  /**
   * Map of LogType and LogPublishingOption, each containing options to publish a given type of Elasticsearch log.
   */
  readonly logPublishingOptions?: LogPublishingOptions;
  /**
   * Options to specify configuration that will be applied to the domain endpoint.
   */
  readonly domainEndpointOptions?: DomainEndpointOptions;
  /**
   * Specifies advanced security options.
   */
  readonly advancedSecurityOptions?: AdvancedSecurityOptionsInput;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface ElasticsearchClusterConfig {
  /**
   * The instance type for an Elasticsearch cluster.
   * UltraWarm instance types are not supported for data instances.
   */
  readonly instanceType?: ESPartitionInstanceType;
  /**
   * The number of instances in the specified domain cluster.
   */
  readonly instanceCount?: IntegerClass;
  /**
   * A boolean value to indicate whether a dedicated master node is enabled.
   * See About Dedicated Master Nodes for more information.
   */
  readonly dedicatedMasterEnabled?: Boolean;
  /**
   * A boolean value to indicate whether zone awareness is enabled.
   * See About Zone Awareness for more information.
   */
  readonly zoneAwarenessEnabled?: Boolean;
  /**
   * Specifies the zone awareness configuration for a domain when zone awareness is enabled.
   */
  readonly zoneAwarenessConfig?: ZoneAwarenessConfig;
  /**
   * The instance type for a dedicated master node.
   */
  readonly dedicatedMasterType?: ESPartitionInstanceType;
  /**
   * Total number of dedicated master nodes, active and on standby, for the cluster.
   */
  readonly dedicatedMasterCount?: IntegerClass;
  /**
   * True to enable warm storage.
   */
  readonly warmEnabled?: Boolean;
  /**
   * The instance type for the Elasticsearch cluster's warm nodes.
   */
  readonly warmType?: ESWarmPartitionInstanceType;
  /**
   * The number of warm nodes in the cluster.
   */
  readonly warmCount?: IntegerClass;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface ZoneAwarenessConfig {
  /**
   * An integer value to indicate the number of availability zones for a domain when zone awareness is enabled.
   * This should be equal to number of subnets if VPC endpoints is enabled.
   */
  readonly availabilityZoneCount?: IntegerClass;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface EBSOptions {
  /**
   * Specifies whether EBS-based storage is enabled.
   */
  readonly ebsEnabled?: Boolean;
  /**
   * Specifies the volume type for EBS-based storage.
   */
  readonly volumeType?: VolumeType;
  /**
   * Integer to specify the size of an EBS volume.
   */
  readonly volumeSize?: IntegerClass;
  /**
   * Specifies the IOPD for a Provisioned IOPS EBS volume (SSD).
   */
  readonly iops?: IntegerClass;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface SnapshotOptions {
  /**
   * Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain.
   * Default value is 0 hours.
   */
  readonly automatedSnapshotStartHour?: IntegerClass;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface VPCOptions {
  /**
   * Specifies the subnets for VPC endpoint.
   */
  readonly subnetIds?: StringList;
  /**
   * Specifies the security groups for VPC endpoint.
   */
  readonly securityGroupIds?: StringList;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface CognitoOptions {
  /**
   * Specifies the option to enable Cognito for Kibana authentication.
   */
  readonly enabled?: Boolean;
  /**
   * Specifies the Cognito user pool ID for Kibana authentication.
   */
  readonly userPoolId?: UserPoolId;
  /**
   * Specifies the Cognito identity pool ID for Kibana authentication.
   */
  readonly identityPoolId?: IdentityPoolId;
  /**
   * Specifies the role ARN that provides Elasticsearch permissions for accessing Cognito resources.
   */
  readonly roleArn?: RoleArn;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface DomainEndpointOptions {
  /**
   * Specify if only HTTPS endpoint should be enabled for the Elasticsearch domain.
   */
  readonly enforceHttps?: Boolean;
  /**
   * Specify the TLS security policy that needs to be applied to the HTTPS endpoint of Elasticsearch domain.
   * It can be one of the following values:  Policy-Min-TLS-1-0-2019-07:  TLS security policy which supports TLSv1.
   * 0 and higher.
   * Policy-Min-TLS-1-2-2019-07:  TLS security policy which supports only TLSv1.
   * 2.
   */
  readonly tlsSecurityPolicy?: TLSSecurityPolicy;
  /**
   * Specify if custom endpoint should be enabled for the Elasticsearch domain.
   */
  readonly customEndpointEnabled?: Boolean;
  /**
   * Specify the fully qualified domain for your custom endpoint.
   */
  readonly customEndpoint?: DomainNameFqdn;
  /**
   * Specify ACM certificate ARN for your custom endpoint.
   */
  readonly customEndpointCertificateArn?: ARN;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface AdvancedSecurityOptionsInput {
  /**
   * True if advanced security is enabled.
   */
  readonly enabled?: Boolean;
  /**
   * True if the internal user database is enabled.
   */
  readonly internalUserDatabaseEnabled?: Boolean;
  /**
   * Credentials for the master user: username and password, ARN, or both.
   */
  readonly masterUserOptions?: MasterUserOptions;
  /**
   * Specifies the SAML application configuration for the domain.
   */
  readonly samlOptions?: SAMLOptionsInput;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface MasterUserOptions {
  /**
   * ARN for the master user (if IAM is enabled).
   */
  readonly masterUserArn?: ARN;
  /**
   * The master user's username, which is stored in the Amazon Elasticsearch Service domain's internal database.
   */
  readonly masterUserName?: Username;
  /**
   * The master user's password, which is stored in the Amazon Elasticsearch Service domain's internal database.
   */
  readonly masterUserPassword?: Password;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface SAMLOptionsInput {
  /**
   * True if SAML is enabled.
   */
  readonly enabled?: Boolean;
  /**
   * Specifies the SAML Identity Provider's information.
   */
  readonly idp?: SAMLIdp;
  /**
   * The SAML master username, which is stored in the Amazon Elasticsearch Service domain's internal database.
   */
  readonly masterUserName?: Username;
  /**
   * The backend role to which the SAML master user is mapped to.
   */
  readonly masterBackendRole?: BackendRole;
  /**
   * The key to use for matching the SAML Subject attribute.
   */
  readonly subjectKey?: String;
  /**
   * The key to use for matching the SAML Roles attribute.
   */
  readonly rolesKey?: String;
  /**
   * The duration, in minutes, after which a user session becomes inactive.
   * Acceptable values are between 1 and 1440, and the default value is 60.
   */
  readonly sessionTimeoutMinutes?: IntegerClass;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface SAMLIdp {
  /**
   * The Metadata of the SAML application in xml format.
   */
  readonly metadataContent: SAMLMetadata;
  /**
   * The unique Entity ID of the application in SAML Identity Provider.
   */
  readonly entityId: SAMLEntityId;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface UpdateElasticsearchDomainConfigResponse {
  /**
   * The status of the updated Elasticsearch domain.
   */
  readonly domainConfig: ElasticsearchDomainConfig;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface ElasticsearchDomainConfig {
  /**
   * String of format X.
   * Y to specify version for the Elasticsearch domain.
   */
  readonly elasticsearchVersion?: ElasticsearchVersionStatus;
  /**
   * Specifies the ElasticsearchClusterConfig for the Elasticsearch domain.
   */
  readonly elasticsearchClusterConfig?: ElasticsearchClusterConfigStatus;
  /**
   * Specifies the EBSOptions for the Elasticsearch domain.
   */
  readonly ebsOptions?: EBSOptionsStatus;
  /**
   * IAM access policy as a JSON-formatted string.
   */
  readonly accessPolicies?: AccessPoliciesStatus;
  /**
   * Specifies the SnapshotOptions for the Elasticsearch domain.
   */
  readonly snapshotOptions?: SnapshotOptionsStatus;
  /**
   * The VPCOptions for the specified domain.
   * For more information, see VPC Endpoints for Amazon Elasticsearch Service Domains.
   */
  readonly vpcOptions?: VPCDerivedInfoStatus;
  /**
   * The CognitoOptions for the specified domain.
   * For more information, see Amazon Cognito Authentication for Kibana.
   */
  readonly cognitoOptions?: CognitoOptionsStatus;
  /**
   * Specifies the EncryptionAtRestOptions for the Elasticsearch domain.
   */
  readonly encryptionAtRestOptions?: EncryptionAtRestOptionsStatus;
  /**
   * Specifies the NodeToNodeEncryptionOptions for the Elasticsearch domain.
   */
  readonly nodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptionsStatus;
  /**
   * Specifies the AdvancedOptions for the domain.
   * See Configuring Advanced Options for more information.
   */
  readonly advancedOptions?: AdvancedOptionsStatus;
  /**
   * Log publishing options for the given domain.
   */
  readonly logPublishingOptions?: LogPublishingOptionsStatus;
  /**
   * Specifies the DomainEndpointOptions for the Elasticsearch domain.
   */
  readonly domainEndpointOptions?: DomainEndpointOptionsStatus;
  /**
   * Specifies AdvancedSecurityOptions for the domain.
   */
  readonly advancedSecurityOptions?: AdvancedSecurityOptionsStatus;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface ElasticsearchVersionStatus {
  /**
   * Specifies the Elasticsearch version for the specified Elasticsearch domain.
   */
  readonly options: ElasticsearchVersionString;
  /**
   * Specifies the status of the Elasticsearch version options for the specified Elasticsearch domain.
   */
  readonly status: OptionStatus;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface OptionStatus {
  /**
   * Timestamp which tells the creation date for the entity.
   */
  readonly creationDate: UpdateTimestamp;
  /**
   * Timestamp which tells the last updated time for the entity.
   */
  readonly updateDate: UpdateTimestamp;
  /**
   * Specifies the latest version for the entity.
   */
  readonly updateVersion?: UIntValue;
  /**
   * Provides the OptionState for the Elasticsearch domain.
   */
  readonly state: OptionState;
  /**
   * Indicates whether the Elasticsearch domain is being deleted.
   */
  readonly pendingDeletion?: Boolean;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface ElasticsearchClusterConfigStatus {
  /**
   * Specifies the cluster configuration for the specified Elasticsearch domain.
   */
  readonly options: ElasticsearchClusterConfig;
  /**
   * Specifies the status of the configuration for the specified Elasticsearch domain.
   */
  readonly status: OptionStatus;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface ElasticsearchClusterConfig {
  /**
   * The instance type for an Elasticsearch cluster.
   * UltraWarm instance types are not supported for data instances.
   */
  readonly instanceType?: ESPartitionInstanceType;
  /**
   * The number of instances in the specified domain cluster.
   */
  readonly instanceCount?: IntegerClass;
  /**
   * A boolean value to indicate whether a dedicated master node is enabled.
   * See About Dedicated Master Nodes for more information.
   */
  readonly dedicatedMasterEnabled?: Boolean;
  /**
   * A boolean value to indicate whether zone awareness is enabled.
   * See About Zone Awareness for more information.
   */
  readonly zoneAwarenessEnabled?: Boolean;
  /**
   * Specifies the zone awareness configuration for a domain when zone awareness is enabled.
   */
  readonly zoneAwarenessConfig?: ZoneAwarenessConfig;
  /**
   * The instance type for a dedicated master node.
   */
  readonly dedicatedMasterType?: ESPartitionInstanceType;
  /**
   * Total number of dedicated master nodes, active and on standby, for the cluster.
   */
  readonly dedicatedMasterCount?: IntegerClass;
  /**
   * True to enable warm storage.
   */
  readonly warmEnabled?: Boolean;
  /**
   * The instance type for the Elasticsearch cluster's warm nodes.
   */
  readonly warmType?: ESWarmPartitionInstanceType;
  /**
   * The number of warm nodes in the cluster.
   */
  readonly warmCount?: IntegerClass;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface ZoneAwarenessConfig {
  /**
   * An integer value to indicate the number of availability zones for a domain when zone awareness is enabled.
   * This should be equal to number of subnets if VPC endpoints is enabled.
   */
  readonly availabilityZoneCount?: IntegerClass;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface OptionStatus {
  /**
   * Timestamp which tells the creation date for the entity.
   */
  readonly creationDate: UpdateTimestamp;
  /**
   * Timestamp which tells the last updated time for the entity.
   */
  readonly updateDate: UpdateTimestamp;
  /**
   * Specifies the latest version for the entity.
   */
  readonly updateVersion?: UIntValue;
  /**
   * Provides the OptionState for the Elasticsearch domain.
   */
  readonly state: OptionState;
  /**
   * Indicates whether the Elasticsearch domain is being deleted.
   */
  readonly pendingDeletion?: Boolean;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface EBSOptionsStatus {
  /**
   * Specifies the EBS options for the specified Elasticsearch domain.
   */
  readonly options: EBSOptions;
  /**
   * Specifies the status of the EBS options for the specified Elasticsearch domain.
   */
  readonly status: OptionStatus;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface EBSOptions {
  /**
   * Specifies whether EBS-based storage is enabled.
   */
  readonly ebsEnabled?: Boolean;
  /**
   * Specifies the volume type for EBS-based storage.
   */
  readonly volumeType?: VolumeType;
  /**
   * Integer to specify the size of an EBS volume.
   */
  readonly volumeSize?: IntegerClass;
  /**
   * Specifies the IOPD for a Provisioned IOPS EBS volume (SSD).
   */
  readonly iops?: IntegerClass;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface OptionStatus {
  /**
   * Timestamp which tells the creation date for the entity.
   */
  readonly creationDate: UpdateTimestamp;
  /**
   * Timestamp which tells the last updated time for the entity.
   */
  readonly updateDate: UpdateTimestamp;
  /**
   * Specifies the latest version for the entity.
   */
  readonly updateVersion?: UIntValue;
  /**
   * Provides the OptionState for the Elasticsearch domain.
   */
  readonly state: OptionState;
  /**
   * Indicates whether the Elasticsearch domain is being deleted.
   */
  readonly pendingDeletion?: Boolean;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface AccessPoliciesStatus {
  /**
   * The access policy configured for the Elasticsearch domain.
   * Access policies may be resource-based, IP-based, or IAM-based.
   * See  Configuring Access Policiesfor more information.
   */
  readonly options: PolicyDocument;
  /**
   * The status of the access policy for the Elasticsearch domain.
   * See OptionStatus for the status information that's included.
   */
  readonly status: OptionStatus;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface OptionStatus {
  /**
   * Timestamp which tells the creation date for the entity.
   */
  readonly creationDate: UpdateTimestamp;
  /**
   * Timestamp which tells the last updated time for the entity.
   */
  readonly updateDate: UpdateTimestamp;
  /**
   * Specifies the latest version for the entity.
   */
  readonly updateVersion?: UIntValue;
  /**
   * Provides the OptionState for the Elasticsearch domain.
   */
  readonly state: OptionState;
  /**
   * Indicates whether the Elasticsearch domain is being deleted.
   */
  readonly pendingDeletion?: Boolean;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface SnapshotOptionsStatus {
  /**
   * Specifies the daily snapshot options specified for the Elasticsearch domain.
   */
  readonly options: SnapshotOptions;
  /**
   * Specifies the status of a daily automated snapshot.
   */
  readonly status: OptionStatus;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface SnapshotOptions {
  /**
   * Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain.
   * Default value is 0 hours.
   */
  readonly automatedSnapshotStartHour?: IntegerClass;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface OptionStatus {
  /**
   * Timestamp which tells the creation date for the entity.
   */
  readonly creationDate: UpdateTimestamp;
  /**
   * Timestamp which tells the last updated time for the entity.
   */
  readonly updateDate: UpdateTimestamp;
  /**
   * Specifies the latest version for the entity.
   */
  readonly updateVersion?: UIntValue;
  /**
   * Provides the OptionState for the Elasticsearch domain.
   */
  readonly state: OptionState;
  /**
   * Indicates whether the Elasticsearch domain is being deleted.
   */
  readonly pendingDeletion?: Boolean;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface VPCDerivedInfoStatus {
  /**
   * Specifies the VPC options for the specified Elasticsearch domain.
   */
  readonly options: VPCDerivedInfo;
  /**
   * Specifies the status of the VPC options for the specified Elasticsearch domain.
   */
  readonly status: OptionStatus;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface VPCDerivedInfo {
  /**
   * The VPC Id for the Elasticsearch domain.
   * Exists only if the domain was created with VPCOptions.
   */
  readonly vpcId?: String;
  /**
   * Specifies the subnets for VPC endpoint.
   */
  readonly subnetIds?: StringList;
  /**
   * The availability zones for the Elasticsearch domain.
   * Exists only if the domain was created with VPCOptions.
   */
  readonly availabilityZones?: StringList;
  /**
   * Specifies the security groups for VPC endpoint.
   */
  readonly securityGroupIds?: StringList;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface OptionStatus {
  /**
   * Timestamp which tells the creation date for the entity.
   */
  readonly creationDate: UpdateTimestamp;
  /**
   * Timestamp which tells the last updated time for the entity.
   */
  readonly updateDate: UpdateTimestamp;
  /**
   * Specifies the latest version for the entity.
   */
  readonly updateVersion?: UIntValue;
  /**
   * Provides the OptionState for the Elasticsearch domain.
   */
  readonly state: OptionState;
  /**
   * Indicates whether the Elasticsearch domain is being deleted.
   */
  readonly pendingDeletion?: Boolean;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface CognitoOptionsStatus {
  /**
   * Specifies the Cognito options for the specified Elasticsearch domain.
   */
  readonly options: CognitoOptions;
  /**
   * Specifies the status of the Cognito options for the specified Elasticsearch domain.
   */
  readonly status: OptionStatus;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface CognitoOptions {
  /**
   * Specifies the option to enable Cognito for Kibana authentication.
   */
  readonly enabled?: Boolean;
  /**
   * Specifies the Cognito user pool ID for Kibana authentication.
   */
  readonly userPoolId?: UserPoolId;
  /**
   * Specifies the Cognito identity pool ID for Kibana authentication.
   */
  readonly identityPoolId?: IdentityPoolId;
  /**
   * Specifies the role ARN that provides Elasticsearch permissions for accessing Cognito resources.
   */
  readonly roleArn?: RoleArn;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface OptionStatus {
  /**
   * Timestamp which tells the creation date for the entity.
   */
  readonly creationDate: UpdateTimestamp;
  /**
   * Timestamp which tells the last updated time for the entity.
   */
  readonly updateDate: UpdateTimestamp;
  /**
   * Specifies the latest version for the entity.
   */
  readonly updateVersion?: UIntValue;
  /**
   * Provides the OptionState for the Elasticsearch domain.
   */
  readonly state: OptionState;
  /**
   * Indicates whether the Elasticsearch domain is being deleted.
   */
  readonly pendingDeletion?: Boolean;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface EncryptionAtRestOptionsStatus {
  /**
   * Specifies the Encryption At Rest options for the specified Elasticsearch domain.
   */
  readonly options: EncryptionAtRestOptions;
  /**
   * Specifies the status of the Encryption At Rest options for the specified Elasticsearch domain.
   */
  readonly status: OptionStatus;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface EncryptionAtRestOptions {
  /**
   * Specifies the option to enable Encryption At Rest.
   */
  readonly enabled?: Boolean;
  /**
   * Specifies the KMS Key ID for Encryption At Rest options.
   */
  readonly kmsKeyId?: KmsKeyId;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface OptionStatus {
  /**
   * Timestamp which tells the creation date for the entity.
   */
  readonly creationDate: UpdateTimestamp;
  /**
   * Timestamp which tells the last updated time for the entity.
   */
  readonly updateDate: UpdateTimestamp;
  /**
   * Specifies the latest version for the entity.
   */
  readonly updateVersion?: UIntValue;
  /**
   * Provides the OptionState for the Elasticsearch domain.
   */
  readonly state: OptionState;
  /**
   * Indicates whether the Elasticsearch domain is being deleted.
   */
  readonly pendingDeletion?: Boolean;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface NodeToNodeEncryptionOptionsStatus {
  /**
   * Specifies the node-to-node encryption options for the specified Elasticsearch domain.
   */
  readonly options: NodeToNodeEncryptionOptions;
  /**
   * Specifies the status of the node-to-node encryption options for the specified Elasticsearch domain.
   */
  readonly status: OptionStatus;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface NodeToNodeEncryptionOptions {
  /**
   * Specify true to enable node-to-node encryption.
   */
  readonly enabled?: Boolean;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface OptionStatus {
  /**
   * Timestamp which tells the creation date for the entity.
   */
  readonly creationDate: UpdateTimestamp;
  /**
   * Timestamp which tells the last updated time for the entity.
   */
  readonly updateDate: UpdateTimestamp;
  /**
   * Specifies the latest version for the entity.
   */
  readonly updateVersion?: UIntValue;
  /**
   * Provides the OptionState for the Elasticsearch domain.
   */
  readonly state: OptionState;
  /**
   * Indicates whether the Elasticsearch domain is being deleted.
   */
  readonly pendingDeletion?: Boolean;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface AdvancedOptionsStatus {
  /**
   * Specifies the status of advanced options for the specified Elasticsearch domain.
   */
  readonly options: AdvancedOptions;
  /**
   * Specifies the status of OptionStatus for advanced options for the specified Elasticsearch domain.
   */
  readonly status: OptionStatus;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface OptionStatus {
  /**
   * Timestamp which tells the creation date for the entity.
   */
  readonly creationDate: UpdateTimestamp;
  /**
   * Timestamp which tells the last updated time for the entity.
   */
  readonly updateDate: UpdateTimestamp;
  /**
   * Specifies the latest version for the entity.
   */
  readonly updateVersion?: UIntValue;
  /**
   * Provides the OptionState for the Elasticsearch domain.
   */
  readonly state: OptionState;
  /**
   * Indicates whether the Elasticsearch domain is being deleted.
   */
  readonly pendingDeletion?: Boolean;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface LogPublishingOptionsStatus {
  /**
   * The log publishing options configured for the Elasticsearch domain.
   */
  readonly options?: LogPublishingOptions;
  /**
   * The status of the log publishing options for the Elasticsearch domain.
   * See OptionStatus for the status information that's included.
   */
  readonly status?: OptionStatus;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface OptionStatus {
  /**
   * Timestamp which tells the creation date for the entity.
   */
  readonly creationDate: UpdateTimestamp;
  /**
   * Timestamp which tells the last updated time for the entity.
   */
  readonly updateDate: UpdateTimestamp;
  /**
   * Specifies the latest version for the entity.
   */
  readonly updateVersion?: UIntValue;
  /**
   * Provides the OptionState for the Elasticsearch domain.
   */
  readonly state: OptionState;
  /**
   * Indicates whether the Elasticsearch domain is being deleted.
   */
  readonly pendingDeletion?: Boolean;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface DomainEndpointOptionsStatus {
  /**
   * Options to configure endpoint for the Elasticsearch domain.
   */
  readonly options: DomainEndpointOptions;
  /**
   * The status of the endpoint options for the Elasticsearch domain.
   * See OptionStatus for the status information that's included.
   */
  readonly status: OptionStatus;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface DomainEndpointOptions {
  /**
   * Specify if only HTTPS endpoint should be enabled for the Elasticsearch domain.
   */
  readonly enforceHttps?: Boolean;
  /**
   * Specify the TLS security policy that needs to be applied to the HTTPS endpoint of Elasticsearch domain.
   * It can be one of the following values:  Policy-Min-TLS-1-0-2019-07:  TLS security policy which supports TLSv1.
   * 0 and higher.
   * Policy-Min-TLS-1-2-2019-07:  TLS security policy which supports only TLSv1.
   * 2.
   */
  readonly tlsSecurityPolicy?: TLSSecurityPolicy;
  /**
   * Specify if custom endpoint should be enabled for the Elasticsearch domain.
   */
  readonly customEndpointEnabled?: Boolean;
  /**
   * Specify the fully qualified domain for your custom endpoint.
   */
  readonly customEndpoint?: DomainNameFqdn;
  /**
   * Specify ACM certificate ARN for your custom endpoint.
   */
  readonly customEndpointCertificateArn?: ARN;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface OptionStatus {
  /**
   * Timestamp which tells the creation date for the entity.
   */
  readonly creationDate: UpdateTimestamp;
  /**
   * Timestamp which tells the last updated time for the entity.
   */
  readonly updateDate: UpdateTimestamp;
  /**
   * Specifies the latest version for the entity.
   */
  readonly updateVersion?: UIntValue;
  /**
   * Provides the OptionState for the Elasticsearch domain.
   */
  readonly state: OptionState;
  /**
   * Indicates whether the Elasticsearch domain is being deleted.
   */
  readonly pendingDeletion?: Boolean;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface AdvancedSecurityOptionsStatus {
  /**
   * Specifies advanced security options for the specified Elasticsearch domain.
   */
  readonly options: AdvancedSecurityOptions;
  /**
   * Status of the advanced security options for the specified Elasticsearch domain.
   */
  readonly status: OptionStatus;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface AdvancedSecurityOptions {
  /**
   * True if advanced security is enabled.
   */
  readonly enabled?: Boolean;
  /**
   * True if the internal user database is enabled.
   */
  readonly internalUserDatabaseEnabled?: Boolean;
  /**
   * Describes the SAML application configured for a domain.
   */
  readonly samlOptions?: SAMLOptionsOutput;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface SAMLOptionsOutput {
  /**
   * True if SAML is enabled.
   */
  readonly enabled?: Boolean;
  /**
   * Describes the SAML Identity Provider's information.
   */
  readonly idp?: SAMLIdp;
  /**
   * The key used for matching the SAML Subject attribute.
   */
  readonly subjectKey?: String;
  /**
   * The key used for matching the SAML Roles attribute.
   */
  readonly rolesKey?: String;
  /**
   * The duration, in minutes, after which a user session becomes inactive.
   */
  readonly sessionTimeoutMinutes?: IntegerClass;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface SAMLIdp {
  /**
   * The Metadata of the SAML application in xml format.
   */
  readonly metadataContent: SAMLMetadata;
  /**
   * The unique Entity ID of the application in SAML Identity Provider.
   */
  readonly entityId: SAMLEntityId;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface OptionStatus {
  /**
   * Timestamp which tells the creation date for the entity.
   */
  readonly creationDate: UpdateTimestamp;
  /**
   * Timestamp which tells the last updated time for the entity.
   */
  readonly updateDate: UpdateTimestamp;
  /**
   * Specifies the latest version for the entity.
   */
  readonly updateVersion?: UIntValue;
  /**
   * Provides the OptionState for the Elasticsearch domain.
   */
  readonly state: OptionState;
  /**
   * Indicates whether the Elasticsearch domain is being deleted.
   */
  readonly pendingDeletion?: Boolean;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface UpdatePackageRequest {
  /**
   * Unique identifier for the package.
   */
  readonly packageId: PackageID;
  /**
   * Unique identifier for the package.
   */
  readonly packageSource: PackageSource;
  /**
   * New description of the package.
   */
  readonly packageDescription?: PackageDescription;
  /**
   * An info message for the new version which will be shown as part of GetPackageVersionHistoryResponse.
   */
  readonly commitMessage?: CommitMessage;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface PackageSource {
  /**
   * Name of the bucket containing the package.
   */
  readonly s3BucketName?: S3BucketName;
  /**
   * Key (file name) of the package.
   */
  readonly s3Key?: S3Key;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface UpdatePackageResponse {
  /**
   * Information about the package PackageDetails.
   */
  readonly packageDetails?: PackageDetails;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface PackageDetails {
  /**
   * Internal ID of the package.
   */
  readonly packageId?: PackageID;
  /**
   * User specified name of the package.
   */
  readonly packageName?: PackageName;
  /**
   * Currently supports only TXT-DICTIONARY.
   */
  readonly packageType?: PackageType;
  /**
   * User-specified description of the package.
   */
  readonly packageDescription?: PackageDescription;
  /**
   * Current state of the package.
   * Values are COPYING/COPY_FAILED/AVAILABLE/DELETING/DELETE_FAILED.
   */
  readonly packageStatus?: PackageStatus;
  /**
   * Timestamp which tells creation date of the package.
   */
  readonly createdAt?: CreatedAt;
  /**
   * Timestamp which tells creation date of the package.
   */
  readonly lastUpdatedAt?: LastUpdated;
  /**
   * Timestamp which tells creation date of the package.
   */
  readonly availablePackageVersion?: PackageVersion;
  /**
   * Additional information if the package is in an error state.
   * Null otherwise.
   */
  readonly errorDetails?: ErrorDetails;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface ErrorDetails {
  /**
   * Specifies the status of the Encryption At Rest options for the specified Elasticsearch domain.
   */
  readonly errorType?: ErrorType;
  /**
   * Specifies the status of the Encryption At Rest options for the specified Elasticsearch domain.
   */
  readonly errorMessage?: ErrorMessage;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface UpgradeElasticsearchDomainRequest {
  /**
   * Information about the package PackageDetails.
   */
  readonly domainName: DomainName;
  /**
   * The version of Elasticsearch that you intend to upgrade the domain to.
   */
  readonly targetVersion: ElasticsearchVersionString;
  /**
   * This flag, when set to True, indicates that an Upgrade Eligibility Check needs to be performed.
   * This will not actually perform the Upgrade.
   */
  readonly performCheckOnly?: Boolean;
}

/**
 * Contains interfaces for use with the ES client.
 */
export interface UpgradeElasticsearchDomainResponse {
  /**
   * This flag, when set to True, indicates that an Upgrade Eligibility Check needs to be performed.
   * This will not actually perform the Upgrade.
   */
  readonly domainName?: DomainName;
  /**
   * The version of Elasticsearch that you intend to upgrade the domain to.
   */
  readonly targetVersion?: ElasticsearchVersionString;
  /**
   * This flag, when set to True, indicates that an Upgrade Eligibility Check needs to be performed.
   * This will not actually perform the Upgrade.
   */
  readonly performCheckOnly?: Boolean;
}

export type ARN = string;
export type AdditionalLimitList = AdditionalLimit[];
export type AdvancedOptions = {[key: string]: String};
export type BackendRole = string;
export type Boolean = boolean;
export type CloudWatchLogsLogGroupArn = string;
export type CommitMessage = string;
export type CompatibleElasticsearchVersionsList = CompatibleVersionsMap[];
export type ConnectionAlias = string;
export type CreatedAt = Date;
export type CrossClusterSearchConnectionId = string;
export type CrossClusterSearchConnectionStatusMessage = string;
export type DeploymentCloseDateTimeStamp = Date;
export type DeploymentStatus = 'PENDING_UPDATE'|'IN_PROGRESS'|'COMPLETED'|'NOT_ELIGIBLE'|'ELIGIBLE'|string;
export type DescribePackagesFilterList = DescribePackagesFilter[];
export type DescribePackagesFilterName = 'PackageID'|'PackageName'|'PackageStatus'|string;
export type DescribePackagesFilterValue = string;
export type DescribePackagesFilterValues = DescribePackagesFilterValue[];
export type DomainId = string;
export type DomainInfoList = DomainInfo[];
export type DomainName = string;
export type DomainNameFqdn = string;
export type DomainNameList = DomainName[];
export type DomainPackageDetailsList = DomainPackageDetails[];
export type DomainPackageStatus = 'ASSOCIATING'|'ASSOCIATION_FAILED'|'ACTIVE'|'DISSOCIATING'|'DISSOCIATION_FAILED'|string;
export type Double = number;
export type ESPartitionInstanceType = 'm3.medium.elasticsearch'|'m3.large.elasticsearch'|'m3.xlarge.elasticsearch'|'m3.2xlarge.elasticsearch'|'m4.large.elasticsearch'|'m4.xlarge.elasticsearch'|'m4.2xlarge.elasticsearch'|'m4.4xlarge.elasticsearch'|'m4.10xlarge.elasticsearch'|'m5.large.elasticsearch'|'m5.xlarge.elasticsearch'|'m5.2xlarge.elasticsearch'|'m5.4xlarge.elasticsearch'|'m5.12xlarge.elasticsearch'|'r5.large.elasticsearch'|'r5.xlarge.elasticsearch'|'r5.2xlarge.elasticsearch'|'r5.4xlarge.elasticsearch'|'r5.12xlarge.elasticsearch'|'c5.large.elasticsearch'|'c5.xlarge.elasticsearch'|'c5.2xlarge.elasticsearch'|'c5.4xlarge.elasticsearch'|'c5.9xlarge.elasticsearch'|'c5.18xlarge.elasticsearch'|'ultrawarm1.medium.elasticsearch'|'ultrawarm1.large.elasticsearch'|'t2.micro.elasticsearch'|'t2.small.elasticsearch'|'t2.medium.elasticsearch'|'r3.large.elasticsearch'|'r3.xlarge.elasticsearch'|'r3.2xlarge.elasticsearch'|'r3.4xlarge.elasticsearch'|'r3.8xlarge.elasticsearch'|'i2.xlarge.elasticsearch'|'i2.2xlarge.elasticsearch'|'d2.xlarge.elasticsearch'|'d2.2xlarge.elasticsearch'|'d2.4xlarge.elasticsearch'|'d2.8xlarge.elasticsearch'|'c4.large.elasticsearch'|'c4.xlarge.elasticsearch'|'c4.2xlarge.elasticsearch'|'c4.4xlarge.elasticsearch'|'c4.8xlarge.elasticsearch'|'r4.large.elasticsearch'|'r4.xlarge.elasticsearch'|'r4.2xlarge.elasticsearch'|'r4.4xlarge.elasticsearch'|'r4.8xlarge.elasticsearch'|'r4.16xlarge.elasticsearch'|'i3.large.elasticsearch'|'i3.xlarge.elasticsearch'|'i3.2xlarge.elasticsearch'|'i3.4xlarge.elasticsearch'|'i3.8xlarge.elasticsearch'|'i3.16xlarge.elasticsearch'|string;
export type ESWarmPartitionInstanceType = 'ultrawarm1.medium.elasticsearch'|'ultrawarm1.large.elasticsearch'|string;
export type ElasticsearchDomainStatusList = ElasticsearchDomainStatus[];
export type ElasticsearchInstanceTypeList = ESPartitionInstanceType[];
export type ElasticsearchVersionList = ElasticsearchVersionString[];
export type ElasticsearchVersionString = string;
export type EndpointsMap = {[key: string]: ServiceUrl};
export type ErrorMessage = string;
export type ErrorType = string;
export type FilterList = Filter[];
export type GUID = string;
export type IdentityPoolId = string;
export type InboundCrossClusterSearchConnectionStatusCode = 'PENDING_ACCEPTANCE'|'APPROVED'|'REJECTING'|'REJECTED'|'DELETING'|'DELETED'|string;
export type InboundCrossClusterSearchConnections = InboundCrossClusterSearchConnection[];
export type InstanceCount = number;
export type InstanceRole = string;
export type Integer = number;
export type IntegerClass = number;
export type Issue = string;
export type Issues = Issue[];
export type KmsKeyId = string;
export type LastUpdated = Date;
export type LimitName = string;
export type LimitValue = string;
export type LimitValueList = LimitValue[];
export type LimitsByRole = {[key: string]: Limits};
export type LogPublishingOptions = {[key: string]: LogPublishingOption};
export type LogType = 'INDEX_SLOW_LOGS'|'SEARCH_SLOW_LOGS'|'ES_APPLICATION_LOGS'|'AUDIT_LOGS'|string;
export type MaxResults = number;
export type MaximumInstanceCount = number;
export type MinimumInstanceCount = number;
export type NextToken = string;
export type NonEmptyString = string;
export type OptionState = 'RequiresIndexDocuments'|'Processing'|'Active'|string;
export type OutboundCrossClusterSearchConnectionStatusCode = 'PENDING_ACCEPTANCE'|'VALIDATING'|'VALIDATION_FAILED'|'PROVISIONING'|'ACTIVE'|'REJECTED'|'DELETING'|'DELETED'|string;
export type OutboundCrossClusterSearchConnections = OutboundCrossClusterSearchConnection[];
export type OwnerId = string;
export type PackageDescription = string;
export type PackageDetailsList = PackageDetails[];
export type PackageID = string;
export type PackageName = string;
export type PackageStatus = 'COPYING'|'COPY_FAILED'|'VALIDATING'|'VALIDATION_FAILED'|'AVAILABLE'|'DELETING'|'DELETED'|'DELETE_FAILED'|string;
export type PackageType = 'TXT-DICTIONARY'|string;
export type PackageVersion = string;
export type PackageVersionHistoryList = PackageVersionHistory[];
export type Password = string;
export type PolicyDocument = string;
export type RecurringChargeList = RecurringCharge[];
export type ReferencePath = string;
export type Region = string;
export type ReservationToken = string;
export type ReservedElasticsearchInstanceList = ReservedElasticsearchInstance[];
export type ReservedElasticsearchInstanceOfferingList = ReservedElasticsearchInstanceOffering[];
export type ReservedElasticsearchInstancePaymentOption = 'ALL_UPFRONT'|'PARTIAL_UPFRONT'|'NO_UPFRONT'|string;
export type RoleArn = string;
export type S3BucketName = string;
export type S3Key = string;
export type SAMLEntityId = string;
export type SAMLMetadata = string;
export type ServiceUrl = string;
export type StartTimestamp = Date;
export type StorageSubTypeName = string;
export type StorageTypeLimitList = StorageTypeLimit[];
export type StorageTypeList = StorageType[];
export type StorageTypeName = string;
export type String = string;
export type StringList = String[];
export type TLSSecurityPolicy = 'Policy-Min-TLS-1-0-2019-07'|'Policy-Min-TLS-1-2-2019-07'|string;
export type TagKey = string;
export type TagList = Tag[];
export type TagValue = string;
export type UIntValue = number;
export type UpdateTimestamp = Date;
export type UpgradeHistoryList = UpgradeHistory[];
export type UpgradeName = string;
export type UpgradeStatus = 'IN_PROGRESS'|'SUCCEEDED'|'SUCCEEDED_WITH_ISSUES'|'FAILED'|string;
export type UpgradeStep = 'PRE_UPGRADE_CHECK'|'SNAPSHOT'|'UPGRADE'|string;
export type UpgradeStepsList = UpgradeStepItem[];
export type UserPoolId = string;
export type Username = string;
export type ValueStringList = NonEmptyString[];
export type VolumeType = 'standard'|'gp2'|'io1'|string;
export type apiVersion = '2015-01-01'|'latest'|string;
