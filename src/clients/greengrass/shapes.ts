/**
 * @schema AssociateRoleToGroupRequest
 */
export interface AssociateRoleToGroupRequest {
  /**
   * @schema AssociateRoleToGroupRequest#GroupId
   */
  readonly groupId: string;

  /**
   * @schema AssociateRoleToGroupRequest#RoleArn
   */
  readonly roleArn: string;

}

/**
 * @schema AssociateRoleToGroupResponse
 */
export interface AssociateRoleToGroupResponse {
  /**
   * @schema AssociateRoleToGroupResponse#AssociatedAt
   */
  readonly associatedAt?: string;

}

/**
 * @schema AssociateServiceRoleToAccountRequest
 */
export interface AssociateServiceRoleToAccountRequest {
  /**
   * @schema AssociateServiceRoleToAccountRequest#RoleArn
   */
  readonly roleArn: string;

}

/**
 * @schema AssociateServiceRoleToAccountResponse
 */
export interface AssociateServiceRoleToAccountResponse {
  /**
   * @schema AssociateServiceRoleToAccountResponse#AssociatedAt
   */
  readonly associatedAt?: string;

}

/**
 * @schema CreateConnectorDefinitionRequest
 */
export interface CreateConnectorDefinitionRequest {
  /**
   * @schema CreateConnectorDefinitionRequest#AmznClientToken
   */
  readonly amznClientToken?: string;

  /**
   * @schema CreateConnectorDefinitionRequest#InitialVersion
   */
  readonly initialVersion?: ConnectorDefinitionVersion;

  /**
   * @schema CreateConnectorDefinitionRequest#Name
   */
  readonly name?: string;

  /**
   * @schema CreateConnectorDefinitionRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateConnectorDefinitionResponse
 */
export interface CreateConnectorDefinitionResponse {
  /**
   * @schema CreateConnectorDefinitionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema CreateConnectorDefinitionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema CreateConnectorDefinitionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema CreateConnectorDefinitionResponse#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema CreateConnectorDefinitionResponse#LatestVersion
   */
  readonly latestVersion?: string;

  /**
   * @schema CreateConnectorDefinitionResponse#LatestVersionArn
   */
  readonly latestVersionArn?: string;

  /**
   * @schema CreateConnectorDefinitionResponse#Name
   */
  readonly name?: string;

}

/**
 * @schema CreateConnectorDefinitionVersionRequest
 */
export interface CreateConnectorDefinitionVersionRequest {
  /**
   * @schema CreateConnectorDefinitionVersionRequest#AmznClientToken
   */
  readonly amznClientToken?: string;

  /**
   * @schema CreateConnectorDefinitionVersionRequest#ConnectorDefinitionId
   */
  readonly connectorDefinitionId: string;

  /**
   * @schema CreateConnectorDefinitionVersionRequest#Connectors
   */
  readonly connectors?: Connector[];

}

/**
 * @schema CreateConnectorDefinitionVersionResponse
 */
export interface CreateConnectorDefinitionVersionResponse {
  /**
   * @schema CreateConnectorDefinitionVersionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema CreateConnectorDefinitionVersionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema CreateConnectorDefinitionVersionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema CreateConnectorDefinitionVersionResponse#Version
   */
  readonly version?: string;

}

/**
 * @schema CreateCoreDefinitionRequest
 */
export interface CreateCoreDefinitionRequest {
  /**
   * @schema CreateCoreDefinitionRequest#AmznClientToken
   */
  readonly amznClientToken?: string;

  /**
   * @schema CreateCoreDefinitionRequest#InitialVersion
   */
  readonly initialVersion?: CoreDefinitionVersion;

  /**
   * @schema CreateCoreDefinitionRequest#Name
   */
  readonly name?: string;

  /**
   * @schema CreateCoreDefinitionRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateCoreDefinitionResponse
 */
export interface CreateCoreDefinitionResponse {
  /**
   * @schema CreateCoreDefinitionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema CreateCoreDefinitionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema CreateCoreDefinitionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema CreateCoreDefinitionResponse#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema CreateCoreDefinitionResponse#LatestVersion
   */
  readonly latestVersion?: string;

  /**
   * @schema CreateCoreDefinitionResponse#LatestVersionArn
   */
  readonly latestVersionArn?: string;

  /**
   * @schema CreateCoreDefinitionResponse#Name
   */
  readonly name?: string;

}

/**
 * @schema CreateCoreDefinitionVersionRequest
 */
export interface CreateCoreDefinitionVersionRequest {
  /**
   * @schema CreateCoreDefinitionVersionRequest#AmznClientToken
   */
  readonly amznClientToken?: string;

  /**
   * @schema CreateCoreDefinitionVersionRequest#CoreDefinitionId
   */
  readonly coreDefinitionId: string;

  /**
   * @schema CreateCoreDefinitionVersionRequest#Cores
   */
  readonly cores?: Core[];

}

/**
 * @schema CreateCoreDefinitionVersionResponse
 */
export interface CreateCoreDefinitionVersionResponse {
  /**
   * @schema CreateCoreDefinitionVersionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema CreateCoreDefinitionVersionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema CreateCoreDefinitionVersionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema CreateCoreDefinitionVersionResponse#Version
   */
  readonly version?: string;

}

/**
 * @schema CreateDeploymentRequest
 */
export interface CreateDeploymentRequest {
  /**
   * @schema CreateDeploymentRequest#AmznClientToken
   */
  readonly amznClientToken?: string;

  /**
   * @schema CreateDeploymentRequest#DeploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema CreateDeploymentRequest#DeploymentType
   */
  readonly deploymentType: string;

  /**
   * @schema CreateDeploymentRequest#GroupId
   */
  readonly groupId: string;

  /**
   * @schema CreateDeploymentRequest#GroupVersionId
   */
  readonly groupVersionId?: string;

}

/**
 * @schema CreateDeploymentResponse
 */
export interface CreateDeploymentResponse {
  /**
   * @schema CreateDeploymentResponse#DeploymentArn
   */
  readonly deploymentArn?: string;

  /**
   * @schema CreateDeploymentResponse#DeploymentId
   */
  readonly deploymentId?: string;

}

/**
 * @schema CreateDeviceDefinitionRequest
 */
export interface CreateDeviceDefinitionRequest {
  /**
   * @schema CreateDeviceDefinitionRequest#AmznClientToken
   */
  readonly amznClientToken?: string;

  /**
   * @schema CreateDeviceDefinitionRequest#InitialVersion
   */
  readonly initialVersion?: DeviceDefinitionVersion;

  /**
   * @schema CreateDeviceDefinitionRequest#Name
   */
  readonly name?: string;

  /**
   * @schema CreateDeviceDefinitionRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateDeviceDefinitionResponse
 */
export interface CreateDeviceDefinitionResponse {
  /**
   * @schema CreateDeviceDefinitionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema CreateDeviceDefinitionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema CreateDeviceDefinitionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema CreateDeviceDefinitionResponse#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema CreateDeviceDefinitionResponse#LatestVersion
   */
  readonly latestVersion?: string;

  /**
   * @schema CreateDeviceDefinitionResponse#LatestVersionArn
   */
  readonly latestVersionArn?: string;

  /**
   * @schema CreateDeviceDefinitionResponse#Name
   */
  readonly name?: string;

}

/**
 * @schema CreateDeviceDefinitionVersionRequest
 */
export interface CreateDeviceDefinitionVersionRequest {
  /**
   * @schema CreateDeviceDefinitionVersionRequest#AmznClientToken
   */
  readonly amznClientToken?: string;

  /**
   * @schema CreateDeviceDefinitionVersionRequest#DeviceDefinitionId
   */
  readonly deviceDefinitionId: string;

  /**
   * @schema CreateDeviceDefinitionVersionRequest#Devices
   */
  readonly devices?: Device[];

}

/**
 * @schema CreateDeviceDefinitionVersionResponse
 */
export interface CreateDeviceDefinitionVersionResponse {
  /**
   * @schema CreateDeviceDefinitionVersionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema CreateDeviceDefinitionVersionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema CreateDeviceDefinitionVersionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema CreateDeviceDefinitionVersionResponse#Version
   */
  readonly version?: string;

}

/**
 * @schema CreateFunctionDefinitionRequest
 */
export interface CreateFunctionDefinitionRequest {
  /**
   * @schema CreateFunctionDefinitionRequest#AmznClientToken
   */
  readonly amznClientToken?: string;

  /**
   * @schema CreateFunctionDefinitionRequest#InitialVersion
   */
  readonly initialVersion?: FunctionDefinitionVersion;

  /**
   * @schema CreateFunctionDefinitionRequest#Name
   */
  readonly name?: string;

  /**
   * @schema CreateFunctionDefinitionRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateFunctionDefinitionResponse
 */
export interface CreateFunctionDefinitionResponse {
  /**
   * @schema CreateFunctionDefinitionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema CreateFunctionDefinitionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema CreateFunctionDefinitionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema CreateFunctionDefinitionResponse#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema CreateFunctionDefinitionResponse#LatestVersion
   */
  readonly latestVersion?: string;

  /**
   * @schema CreateFunctionDefinitionResponse#LatestVersionArn
   */
  readonly latestVersionArn?: string;

  /**
   * @schema CreateFunctionDefinitionResponse#Name
   */
  readonly name?: string;

}

/**
 * @schema CreateFunctionDefinitionVersionRequest
 */
export interface CreateFunctionDefinitionVersionRequest {
  /**
   * @schema CreateFunctionDefinitionVersionRequest#AmznClientToken
   */
  readonly amznClientToken?: string;

  /**
   * @schema CreateFunctionDefinitionVersionRequest#DefaultConfig
   */
  readonly defaultConfig?: FunctionDefaultConfig;

  /**
   * @schema CreateFunctionDefinitionVersionRequest#FunctionDefinitionId
   */
  readonly functionDefinitionId: string;

  /**
   * @schema CreateFunctionDefinitionVersionRequest#Functions
   */
  readonly functions?: Function[];

}

/**
 * @schema CreateFunctionDefinitionVersionResponse
 */
export interface CreateFunctionDefinitionVersionResponse {
  /**
   * @schema CreateFunctionDefinitionVersionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema CreateFunctionDefinitionVersionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema CreateFunctionDefinitionVersionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema CreateFunctionDefinitionVersionResponse#Version
   */
  readonly version?: string;

}

/**
 * @schema CreateGroupRequest
 */
export interface CreateGroupRequest {
  /**
   * @schema CreateGroupRequest#AmznClientToken
   */
  readonly amznClientToken?: string;

  /**
   * @schema CreateGroupRequest#InitialVersion
   */
  readonly initialVersion?: GroupVersion;

  /**
   * @schema CreateGroupRequest#Name
   */
  readonly name?: string;

  /**
   * @schema CreateGroupRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateGroupResponse
 */
export interface CreateGroupResponse {
  /**
   * @schema CreateGroupResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema CreateGroupResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema CreateGroupResponse#Id
   */
  readonly id?: string;

  /**
   * @schema CreateGroupResponse#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema CreateGroupResponse#LatestVersion
   */
  readonly latestVersion?: string;

  /**
   * @schema CreateGroupResponse#LatestVersionArn
   */
  readonly latestVersionArn?: string;

  /**
   * @schema CreateGroupResponse#Name
   */
  readonly name?: string;

}

/**
 * @schema CreateGroupCertificateAuthorityRequest
 */
export interface CreateGroupCertificateAuthorityRequest {
  /**
   * @schema CreateGroupCertificateAuthorityRequest#AmznClientToken
   */
  readonly amznClientToken?: string;

  /**
   * @schema CreateGroupCertificateAuthorityRequest#GroupId
   */
  readonly groupId: string;

}

/**
 * @schema CreateGroupCertificateAuthorityResponse
 */
export interface CreateGroupCertificateAuthorityResponse {
  /**
   * @schema CreateGroupCertificateAuthorityResponse#GroupCertificateAuthorityArn
   */
  readonly groupCertificateAuthorityArn?: string;

}

/**
 * @schema CreateGroupVersionRequest
 */
export interface CreateGroupVersionRequest {
  /**
   * @schema CreateGroupVersionRequest#AmznClientToken
   */
  readonly amznClientToken?: string;

  /**
   * @schema CreateGroupVersionRequest#ConnectorDefinitionVersionArn
   */
  readonly connectorDefinitionVersionArn?: string;

  /**
   * @schema CreateGroupVersionRequest#CoreDefinitionVersionArn
   */
  readonly coreDefinitionVersionArn?: string;

  /**
   * @schema CreateGroupVersionRequest#DeviceDefinitionVersionArn
   */
  readonly deviceDefinitionVersionArn?: string;

  /**
   * @schema CreateGroupVersionRequest#FunctionDefinitionVersionArn
   */
  readonly functionDefinitionVersionArn?: string;

  /**
   * @schema CreateGroupVersionRequest#GroupId
   */
  readonly groupId: string;

  /**
   * @schema CreateGroupVersionRequest#LoggerDefinitionVersionArn
   */
  readonly loggerDefinitionVersionArn?: string;

  /**
   * @schema CreateGroupVersionRequest#ResourceDefinitionVersionArn
   */
  readonly resourceDefinitionVersionArn?: string;

  /**
   * @schema CreateGroupVersionRequest#SubscriptionDefinitionVersionArn
   */
  readonly subscriptionDefinitionVersionArn?: string;

}

/**
 * @schema CreateGroupVersionResponse
 */
export interface CreateGroupVersionResponse {
  /**
   * @schema CreateGroupVersionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema CreateGroupVersionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema CreateGroupVersionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema CreateGroupVersionResponse#Version
   */
  readonly version?: string;

}

/**
 * @schema CreateLoggerDefinitionRequest
 */
export interface CreateLoggerDefinitionRequest {
  /**
   * @schema CreateLoggerDefinitionRequest#AmznClientToken
   */
  readonly amznClientToken?: string;

  /**
   * @schema CreateLoggerDefinitionRequest#InitialVersion
   */
  readonly initialVersion?: LoggerDefinitionVersion;

  /**
   * @schema CreateLoggerDefinitionRequest#Name
   */
  readonly name?: string;

  /**
   * @schema CreateLoggerDefinitionRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateLoggerDefinitionResponse
 */
export interface CreateLoggerDefinitionResponse {
  /**
   * @schema CreateLoggerDefinitionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema CreateLoggerDefinitionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema CreateLoggerDefinitionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema CreateLoggerDefinitionResponse#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema CreateLoggerDefinitionResponse#LatestVersion
   */
  readonly latestVersion?: string;

  /**
   * @schema CreateLoggerDefinitionResponse#LatestVersionArn
   */
  readonly latestVersionArn?: string;

  /**
   * @schema CreateLoggerDefinitionResponse#Name
   */
  readonly name?: string;

}

/**
 * @schema CreateLoggerDefinitionVersionRequest
 */
export interface CreateLoggerDefinitionVersionRequest {
  /**
   * @schema CreateLoggerDefinitionVersionRequest#AmznClientToken
   */
  readonly amznClientToken?: string;

  /**
   * @schema CreateLoggerDefinitionVersionRequest#LoggerDefinitionId
   */
  readonly loggerDefinitionId: string;

  /**
   * @schema CreateLoggerDefinitionVersionRequest#Loggers
   */
  readonly loggers?: Logger[];

}

/**
 * @schema CreateLoggerDefinitionVersionResponse
 */
export interface CreateLoggerDefinitionVersionResponse {
  /**
   * @schema CreateLoggerDefinitionVersionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema CreateLoggerDefinitionVersionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema CreateLoggerDefinitionVersionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema CreateLoggerDefinitionVersionResponse#Version
   */
  readonly version?: string;

}

/**
 * @schema CreateResourceDefinitionRequest
 */
export interface CreateResourceDefinitionRequest {
  /**
   * @schema CreateResourceDefinitionRequest#AmznClientToken
   */
  readonly amznClientToken?: string;

  /**
   * @schema CreateResourceDefinitionRequest#InitialVersion
   */
  readonly initialVersion?: ResourceDefinitionVersion;

  /**
   * @schema CreateResourceDefinitionRequest#Name
   */
  readonly name?: string;

  /**
   * @schema CreateResourceDefinitionRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateResourceDefinitionResponse
 */
export interface CreateResourceDefinitionResponse {
  /**
   * @schema CreateResourceDefinitionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema CreateResourceDefinitionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema CreateResourceDefinitionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema CreateResourceDefinitionResponse#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema CreateResourceDefinitionResponse#LatestVersion
   */
  readonly latestVersion?: string;

  /**
   * @schema CreateResourceDefinitionResponse#LatestVersionArn
   */
  readonly latestVersionArn?: string;

  /**
   * @schema CreateResourceDefinitionResponse#Name
   */
  readonly name?: string;

}

/**
 * @schema CreateResourceDefinitionVersionRequest
 */
export interface CreateResourceDefinitionVersionRequest {
  /**
   * @schema CreateResourceDefinitionVersionRequest#AmznClientToken
   */
  readonly amznClientToken?: string;

  /**
   * @schema CreateResourceDefinitionVersionRequest#ResourceDefinitionId
   */
  readonly resourceDefinitionId: string;

  /**
   * @schema CreateResourceDefinitionVersionRequest#Resources
   */
  readonly resources?: Resource[];

}

/**
 * @schema CreateResourceDefinitionVersionResponse
 */
export interface CreateResourceDefinitionVersionResponse {
  /**
   * @schema CreateResourceDefinitionVersionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema CreateResourceDefinitionVersionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema CreateResourceDefinitionVersionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema CreateResourceDefinitionVersionResponse#Version
   */
  readonly version?: string;

}

/**
 * @schema CreateSoftwareUpdateJobRequest
 */
export interface CreateSoftwareUpdateJobRequest {
  /**
   * @schema CreateSoftwareUpdateJobRequest#AmznClientToken
   */
  readonly amznClientToken?: string;

  /**
   * @schema CreateSoftwareUpdateJobRequest#S3UrlSignerRole
   */
  readonly s3UrlSignerRole: string;

  /**
   * @schema CreateSoftwareUpdateJobRequest#SoftwareToUpdate
   */
  readonly softwareToUpdate: string;

  /**
   * @schema CreateSoftwareUpdateJobRequest#UpdateAgentLogLevel
   */
  readonly updateAgentLogLevel?: string;

  /**
   * @schema CreateSoftwareUpdateJobRequest#UpdateTargets
   */
  readonly updateTargets: string[];

  /**
   * @schema CreateSoftwareUpdateJobRequest#UpdateTargetsArchitecture
   */
  readonly updateTargetsArchitecture: string;

  /**
   * @schema CreateSoftwareUpdateJobRequest#UpdateTargetsOperatingSystem
   */
  readonly updateTargetsOperatingSystem: string;

}

/**
 * @schema CreateSoftwareUpdateJobResponse
 */
export interface CreateSoftwareUpdateJobResponse {
  /**
   * @schema CreateSoftwareUpdateJobResponse#IotJobArn
   */
  readonly iotJobArn?: string;

  /**
   * @schema CreateSoftwareUpdateJobResponse#IotJobId
   */
  readonly iotJobId?: string;

  /**
   * @schema CreateSoftwareUpdateJobResponse#PlatformSoftwareVersion
   */
  readonly platformSoftwareVersion?: string;

}

/**
 * @schema CreateSubscriptionDefinitionRequest
 */
export interface CreateSubscriptionDefinitionRequest {
  /**
   * @schema CreateSubscriptionDefinitionRequest#AmznClientToken
   */
  readonly amznClientToken?: string;

  /**
   * @schema CreateSubscriptionDefinitionRequest#InitialVersion
   */
  readonly initialVersion?: SubscriptionDefinitionVersion;

  /**
   * @schema CreateSubscriptionDefinitionRequest#Name
   */
  readonly name?: string;

  /**
   * @schema CreateSubscriptionDefinitionRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateSubscriptionDefinitionResponse
 */
export interface CreateSubscriptionDefinitionResponse {
  /**
   * @schema CreateSubscriptionDefinitionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema CreateSubscriptionDefinitionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema CreateSubscriptionDefinitionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema CreateSubscriptionDefinitionResponse#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema CreateSubscriptionDefinitionResponse#LatestVersion
   */
  readonly latestVersion?: string;

  /**
   * @schema CreateSubscriptionDefinitionResponse#LatestVersionArn
   */
  readonly latestVersionArn?: string;

  /**
   * @schema CreateSubscriptionDefinitionResponse#Name
   */
  readonly name?: string;

}

/**
 * @schema CreateSubscriptionDefinitionVersionRequest
 */
export interface CreateSubscriptionDefinitionVersionRequest {
  /**
   * @schema CreateSubscriptionDefinitionVersionRequest#AmznClientToken
   */
  readonly amznClientToken?: string;

  /**
   * @schema CreateSubscriptionDefinitionVersionRequest#SubscriptionDefinitionId
   */
  readonly subscriptionDefinitionId: string;

  /**
   * @schema CreateSubscriptionDefinitionVersionRequest#Subscriptions
   */
  readonly subscriptions?: Subscription[];

}

/**
 * @schema CreateSubscriptionDefinitionVersionResponse
 */
export interface CreateSubscriptionDefinitionVersionResponse {
  /**
   * @schema CreateSubscriptionDefinitionVersionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema CreateSubscriptionDefinitionVersionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema CreateSubscriptionDefinitionVersionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema CreateSubscriptionDefinitionVersionResponse#Version
   */
  readonly version?: string;

}

/**
 * @schema DeleteConnectorDefinitionRequest
 */
export interface DeleteConnectorDefinitionRequest {
  /**
   * @schema DeleteConnectorDefinitionRequest#ConnectorDefinitionId
   */
  readonly connectorDefinitionId: string;

}

/**
 * @schema DeleteConnectorDefinitionResponse
 */
export interface DeleteConnectorDefinitionResponse {
}

/**
 * @schema DeleteCoreDefinitionRequest
 */
export interface DeleteCoreDefinitionRequest {
  /**
   * @schema DeleteCoreDefinitionRequest#CoreDefinitionId
   */
  readonly coreDefinitionId: string;

}

/**
 * @schema DeleteCoreDefinitionResponse
 */
export interface DeleteCoreDefinitionResponse {
}

/**
 * @schema DeleteDeviceDefinitionRequest
 */
export interface DeleteDeviceDefinitionRequest {
  /**
   * @schema DeleteDeviceDefinitionRequest#DeviceDefinitionId
   */
  readonly deviceDefinitionId: string;

}

/**
 * @schema DeleteDeviceDefinitionResponse
 */
export interface DeleteDeviceDefinitionResponse {
}

/**
 * @schema DeleteFunctionDefinitionRequest
 */
export interface DeleteFunctionDefinitionRequest {
  /**
   * @schema DeleteFunctionDefinitionRequest#FunctionDefinitionId
   */
  readonly functionDefinitionId: string;

}

/**
 * @schema DeleteFunctionDefinitionResponse
 */
export interface DeleteFunctionDefinitionResponse {
}

/**
 * @schema DeleteGroupRequest
 */
export interface DeleteGroupRequest {
  /**
   * @schema DeleteGroupRequest#GroupId
   */
  readonly groupId: string;

}

/**
 * @schema DeleteGroupResponse
 */
export interface DeleteGroupResponse {
}

/**
 * @schema DeleteLoggerDefinitionRequest
 */
export interface DeleteLoggerDefinitionRequest {
  /**
   * @schema DeleteLoggerDefinitionRequest#LoggerDefinitionId
   */
  readonly loggerDefinitionId: string;

}

/**
 * @schema DeleteLoggerDefinitionResponse
 */
export interface DeleteLoggerDefinitionResponse {
}

/**
 * @schema DeleteResourceDefinitionRequest
 */
export interface DeleteResourceDefinitionRequest {
  /**
   * @schema DeleteResourceDefinitionRequest#ResourceDefinitionId
   */
  readonly resourceDefinitionId: string;

}

/**
 * @schema DeleteResourceDefinitionResponse
 */
export interface DeleteResourceDefinitionResponse {
}

/**
 * @schema DeleteSubscriptionDefinitionRequest
 */
export interface DeleteSubscriptionDefinitionRequest {
  /**
   * @schema DeleteSubscriptionDefinitionRequest#SubscriptionDefinitionId
   */
  readonly subscriptionDefinitionId: string;

}

/**
 * @schema DeleteSubscriptionDefinitionResponse
 */
export interface DeleteSubscriptionDefinitionResponse {
}

/**
 * @schema DisassociateRoleFromGroupRequest
 */
export interface DisassociateRoleFromGroupRequest {
  /**
   * @schema DisassociateRoleFromGroupRequest#GroupId
   */
  readonly groupId: string;

}

/**
 * @schema DisassociateRoleFromGroupResponse
 */
export interface DisassociateRoleFromGroupResponse {
  /**
   * @schema DisassociateRoleFromGroupResponse#DisassociatedAt
   */
  readonly disassociatedAt?: string;

}

/**
 * @schema DisassociateServiceRoleFromAccountRequest
 */
export interface DisassociateServiceRoleFromAccountRequest {
}

/**
 * @schema DisassociateServiceRoleFromAccountResponse
 */
export interface DisassociateServiceRoleFromAccountResponse {
  /**
   * @schema DisassociateServiceRoleFromAccountResponse#DisassociatedAt
   */
  readonly disassociatedAt?: string;

}

/**
 * @schema GetAssociatedRoleRequest
 */
export interface GetAssociatedRoleRequest {
  /**
   * @schema GetAssociatedRoleRequest#GroupId
   */
  readonly groupId: string;

}

/**
 * @schema GetAssociatedRoleResponse
 */
export interface GetAssociatedRoleResponse {
  /**
   * @schema GetAssociatedRoleResponse#AssociatedAt
   */
  readonly associatedAt?: string;

  /**
   * @schema GetAssociatedRoleResponse#RoleArn
   */
  readonly roleArn?: string;

}

/**
 * @schema GetBulkDeploymentStatusRequest
 */
export interface GetBulkDeploymentStatusRequest {
  /**
   * @schema GetBulkDeploymentStatusRequest#BulkDeploymentId
   */
  readonly bulkDeploymentId: string;

}

/**
 * @schema GetBulkDeploymentStatusResponse
 */
export interface GetBulkDeploymentStatusResponse {
  /**
   * @schema GetBulkDeploymentStatusResponse#BulkDeploymentMetrics
   */
  readonly bulkDeploymentMetrics?: BulkDeploymentMetrics;

  /**
   * @schema GetBulkDeploymentStatusResponse#BulkDeploymentStatus
   */
  readonly bulkDeploymentStatus?: string;

  /**
   * @schema GetBulkDeploymentStatusResponse#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema GetBulkDeploymentStatusResponse#ErrorDetails
   */
  readonly errorDetails?: ErrorDetail[];

  /**
   * @schema GetBulkDeploymentStatusResponse#ErrorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema GetBulkDeploymentStatusResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema GetConnectivityInfoRequest
 */
export interface GetConnectivityInfoRequest {
  /**
   * @schema GetConnectivityInfoRequest#ThingName
   */
  readonly thingName: string;

}

/**
 * @schema GetConnectivityInfoResponse
 */
export interface GetConnectivityInfoResponse {
  /**
   * @schema GetConnectivityInfoResponse#ConnectivityInfo
   */
  readonly connectivityInfo?: ConnectivityInfo[];

  /**
   * @schema GetConnectivityInfoResponse#Message
   */
  readonly message?: string;

}

/**
 * @schema GetConnectorDefinitionRequest
 */
export interface GetConnectorDefinitionRequest {
  /**
   * @schema GetConnectorDefinitionRequest#ConnectorDefinitionId
   */
  readonly connectorDefinitionId: string;

}

/**
 * @schema GetConnectorDefinitionResponse
 */
export interface GetConnectorDefinitionResponse {
  /**
   * @schema GetConnectorDefinitionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GetConnectorDefinitionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GetConnectorDefinitionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GetConnectorDefinitionResponse#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema GetConnectorDefinitionResponse#LatestVersion
   */
  readonly latestVersion?: string;

  /**
   * @schema GetConnectorDefinitionResponse#LatestVersionArn
   */
  readonly latestVersionArn?: string;

  /**
   * @schema GetConnectorDefinitionResponse#Name
   */
  readonly name?: string;

  /**
   * @schema GetConnectorDefinitionResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema GetConnectorDefinitionVersionRequest
 */
export interface GetConnectorDefinitionVersionRequest {
  /**
   * @schema GetConnectorDefinitionVersionRequest#ConnectorDefinitionId
   */
  readonly connectorDefinitionId: string;

  /**
   * @schema GetConnectorDefinitionVersionRequest#ConnectorDefinitionVersionId
   */
  readonly connectorDefinitionVersionId: string;

  /**
   * @schema GetConnectorDefinitionVersionRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetConnectorDefinitionVersionResponse
 */
export interface GetConnectorDefinitionVersionResponse {
  /**
   * @schema GetConnectorDefinitionVersionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GetConnectorDefinitionVersionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GetConnectorDefinitionVersionResponse#Definition
   */
  readonly definition?: ConnectorDefinitionVersion;

  /**
   * @schema GetConnectorDefinitionVersionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GetConnectorDefinitionVersionResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetConnectorDefinitionVersionResponse#Version
   */
  readonly version?: string;

}

/**
 * @schema GetCoreDefinitionRequest
 */
export interface GetCoreDefinitionRequest {
  /**
   * @schema GetCoreDefinitionRequest#CoreDefinitionId
   */
  readonly coreDefinitionId: string;

}

/**
 * @schema GetCoreDefinitionResponse
 */
export interface GetCoreDefinitionResponse {
  /**
   * @schema GetCoreDefinitionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GetCoreDefinitionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GetCoreDefinitionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GetCoreDefinitionResponse#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema GetCoreDefinitionResponse#LatestVersion
   */
  readonly latestVersion?: string;

  /**
   * @schema GetCoreDefinitionResponse#LatestVersionArn
   */
  readonly latestVersionArn?: string;

  /**
   * @schema GetCoreDefinitionResponse#Name
   */
  readonly name?: string;

  /**
   * @schema GetCoreDefinitionResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema GetCoreDefinitionVersionRequest
 */
export interface GetCoreDefinitionVersionRequest {
  /**
   * @schema GetCoreDefinitionVersionRequest#CoreDefinitionId
   */
  readonly coreDefinitionId: string;

  /**
   * @schema GetCoreDefinitionVersionRequest#CoreDefinitionVersionId
   */
  readonly coreDefinitionVersionId: string;

}

/**
 * @schema GetCoreDefinitionVersionResponse
 */
export interface GetCoreDefinitionVersionResponse {
  /**
   * @schema GetCoreDefinitionVersionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GetCoreDefinitionVersionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GetCoreDefinitionVersionResponse#Definition
   */
  readonly definition?: CoreDefinitionVersion;

  /**
   * @schema GetCoreDefinitionVersionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GetCoreDefinitionVersionResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetCoreDefinitionVersionResponse#Version
   */
  readonly version?: string;

}

/**
 * @schema GetDeploymentStatusRequest
 */
export interface GetDeploymentStatusRequest {
  /**
   * @schema GetDeploymentStatusRequest#DeploymentId
   */
  readonly deploymentId: string;

  /**
   * @schema GetDeploymentStatusRequest#GroupId
   */
  readonly groupId: string;

}

/**
 * @schema GetDeploymentStatusResponse
 */
export interface GetDeploymentStatusResponse {
  /**
   * @schema GetDeploymentStatusResponse#DeploymentStatus
   */
  readonly deploymentStatus?: string;

  /**
   * @schema GetDeploymentStatusResponse#DeploymentType
   */
  readonly deploymentType?: string;

  /**
   * @schema GetDeploymentStatusResponse#ErrorDetails
   */
  readonly errorDetails?: ErrorDetail[];

  /**
   * @schema GetDeploymentStatusResponse#ErrorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema GetDeploymentStatusResponse#UpdatedAt
   */
  readonly updatedAt?: string;

}

/**
 * @schema GetDeviceDefinitionRequest
 */
export interface GetDeviceDefinitionRequest {
  /**
   * @schema GetDeviceDefinitionRequest#DeviceDefinitionId
   */
  readonly deviceDefinitionId: string;

}

/**
 * @schema GetDeviceDefinitionResponse
 */
export interface GetDeviceDefinitionResponse {
  /**
   * @schema GetDeviceDefinitionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GetDeviceDefinitionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GetDeviceDefinitionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GetDeviceDefinitionResponse#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema GetDeviceDefinitionResponse#LatestVersion
   */
  readonly latestVersion?: string;

  /**
   * @schema GetDeviceDefinitionResponse#LatestVersionArn
   */
  readonly latestVersionArn?: string;

  /**
   * @schema GetDeviceDefinitionResponse#Name
   */
  readonly name?: string;

  /**
   * @schema GetDeviceDefinitionResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema GetDeviceDefinitionVersionRequest
 */
export interface GetDeviceDefinitionVersionRequest {
  /**
   * @schema GetDeviceDefinitionVersionRequest#DeviceDefinitionId
   */
  readonly deviceDefinitionId: string;

  /**
   * @schema GetDeviceDefinitionVersionRequest#DeviceDefinitionVersionId
   */
  readonly deviceDefinitionVersionId: string;

  /**
   * @schema GetDeviceDefinitionVersionRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetDeviceDefinitionVersionResponse
 */
export interface GetDeviceDefinitionVersionResponse {
  /**
   * @schema GetDeviceDefinitionVersionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GetDeviceDefinitionVersionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GetDeviceDefinitionVersionResponse#Definition
   */
  readonly definition?: DeviceDefinitionVersion;

  /**
   * @schema GetDeviceDefinitionVersionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GetDeviceDefinitionVersionResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetDeviceDefinitionVersionResponse#Version
   */
  readonly version?: string;

}

/**
 * @schema GetFunctionDefinitionRequest
 */
export interface GetFunctionDefinitionRequest {
  /**
   * @schema GetFunctionDefinitionRequest#FunctionDefinitionId
   */
  readonly functionDefinitionId: string;

}

/**
 * @schema GetFunctionDefinitionResponse
 */
export interface GetFunctionDefinitionResponse {
  /**
   * @schema GetFunctionDefinitionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GetFunctionDefinitionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GetFunctionDefinitionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GetFunctionDefinitionResponse#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema GetFunctionDefinitionResponse#LatestVersion
   */
  readonly latestVersion?: string;

  /**
   * @schema GetFunctionDefinitionResponse#LatestVersionArn
   */
  readonly latestVersionArn?: string;

  /**
   * @schema GetFunctionDefinitionResponse#Name
   */
  readonly name?: string;

  /**
   * @schema GetFunctionDefinitionResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema GetFunctionDefinitionVersionRequest
 */
export interface GetFunctionDefinitionVersionRequest {
  /**
   * @schema GetFunctionDefinitionVersionRequest#FunctionDefinitionId
   */
  readonly functionDefinitionId: string;

  /**
   * @schema GetFunctionDefinitionVersionRequest#FunctionDefinitionVersionId
   */
  readonly functionDefinitionVersionId: string;

  /**
   * @schema GetFunctionDefinitionVersionRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetFunctionDefinitionVersionResponse
 */
export interface GetFunctionDefinitionVersionResponse {
  /**
   * @schema GetFunctionDefinitionVersionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GetFunctionDefinitionVersionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GetFunctionDefinitionVersionResponse#Definition
   */
  readonly definition?: FunctionDefinitionVersion;

  /**
   * @schema GetFunctionDefinitionVersionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GetFunctionDefinitionVersionResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetFunctionDefinitionVersionResponse#Version
   */
  readonly version?: string;

}

/**
 * @schema GetGroupRequest
 */
export interface GetGroupRequest {
  /**
   * @schema GetGroupRequest#GroupId
   */
  readonly groupId: string;

}

/**
 * @schema GetGroupResponse
 */
export interface GetGroupResponse {
  /**
   * @schema GetGroupResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GetGroupResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GetGroupResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GetGroupResponse#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema GetGroupResponse#LatestVersion
   */
  readonly latestVersion?: string;

  /**
   * @schema GetGroupResponse#LatestVersionArn
   */
  readonly latestVersionArn?: string;

  /**
   * @schema GetGroupResponse#Name
   */
  readonly name?: string;

  /**
   * @schema GetGroupResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema GetGroupCertificateAuthorityRequest
 */
export interface GetGroupCertificateAuthorityRequest {
  /**
   * @schema GetGroupCertificateAuthorityRequest#CertificateAuthorityId
   */
  readonly certificateAuthorityId: string;

  /**
   * @schema GetGroupCertificateAuthorityRequest#GroupId
   */
  readonly groupId: string;

}

/**
 * @schema GetGroupCertificateAuthorityResponse
 */
export interface GetGroupCertificateAuthorityResponse {
  /**
   * @schema GetGroupCertificateAuthorityResponse#GroupCertificateAuthorityArn
   */
  readonly groupCertificateAuthorityArn?: string;

  /**
   * @schema GetGroupCertificateAuthorityResponse#GroupCertificateAuthorityId
   */
  readonly groupCertificateAuthorityId?: string;

  /**
   * @schema GetGroupCertificateAuthorityResponse#PemEncodedCertificate
   */
  readonly pemEncodedCertificate?: string;

}

/**
 * @schema GetGroupCertificateConfigurationRequest
 */
export interface GetGroupCertificateConfigurationRequest {
  /**
   * @schema GetGroupCertificateConfigurationRequest#GroupId
   */
  readonly groupId: string;

}

/**
 * @schema GetGroupCertificateConfigurationResponse
 */
export interface GetGroupCertificateConfigurationResponse {
  /**
   * @schema GetGroupCertificateConfigurationResponse#CertificateAuthorityExpiryInMilliseconds
   */
  readonly certificateAuthorityExpiryInMilliseconds?: string;

  /**
   * @schema GetGroupCertificateConfigurationResponse#CertificateExpiryInMilliseconds
   */
  readonly certificateExpiryInMilliseconds?: string;

  /**
   * @schema GetGroupCertificateConfigurationResponse#GroupId
   */
  readonly groupId?: string;

}

/**
 * @schema GetGroupVersionRequest
 */
export interface GetGroupVersionRequest {
  /**
   * @schema GetGroupVersionRequest#GroupId
   */
  readonly groupId: string;

  /**
   * @schema GetGroupVersionRequest#GroupVersionId
   */
  readonly groupVersionId: string;

}

/**
 * @schema GetGroupVersionResponse
 */
export interface GetGroupVersionResponse {
  /**
   * @schema GetGroupVersionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GetGroupVersionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GetGroupVersionResponse#Definition
   */
  readonly definition?: GroupVersion;

  /**
   * @schema GetGroupVersionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GetGroupVersionResponse#Version
   */
  readonly version?: string;

}

/**
 * @schema GetLoggerDefinitionRequest
 */
export interface GetLoggerDefinitionRequest {
  /**
   * @schema GetLoggerDefinitionRequest#LoggerDefinitionId
   */
  readonly loggerDefinitionId: string;

}

/**
 * @schema GetLoggerDefinitionResponse
 */
export interface GetLoggerDefinitionResponse {
  /**
   * @schema GetLoggerDefinitionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GetLoggerDefinitionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GetLoggerDefinitionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GetLoggerDefinitionResponse#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema GetLoggerDefinitionResponse#LatestVersion
   */
  readonly latestVersion?: string;

  /**
   * @schema GetLoggerDefinitionResponse#LatestVersionArn
   */
  readonly latestVersionArn?: string;

  /**
   * @schema GetLoggerDefinitionResponse#Name
   */
  readonly name?: string;

  /**
   * @schema GetLoggerDefinitionResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema GetLoggerDefinitionVersionRequest
 */
export interface GetLoggerDefinitionVersionRequest {
  /**
   * @schema GetLoggerDefinitionVersionRequest#LoggerDefinitionId
   */
  readonly loggerDefinitionId: string;

  /**
   * @schema GetLoggerDefinitionVersionRequest#LoggerDefinitionVersionId
   */
  readonly loggerDefinitionVersionId: string;

  /**
   * @schema GetLoggerDefinitionVersionRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetLoggerDefinitionVersionResponse
 */
export interface GetLoggerDefinitionVersionResponse {
  /**
   * @schema GetLoggerDefinitionVersionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GetLoggerDefinitionVersionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GetLoggerDefinitionVersionResponse#Definition
   */
  readonly definition?: LoggerDefinitionVersion;

  /**
   * @schema GetLoggerDefinitionVersionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GetLoggerDefinitionVersionResponse#Version
   */
  readonly version?: string;

}

/**
 * @schema GetResourceDefinitionRequest
 */
export interface GetResourceDefinitionRequest {
  /**
   * @schema GetResourceDefinitionRequest#ResourceDefinitionId
   */
  readonly resourceDefinitionId: string;

}

/**
 * @schema GetResourceDefinitionResponse
 */
export interface GetResourceDefinitionResponse {
  /**
   * @schema GetResourceDefinitionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GetResourceDefinitionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GetResourceDefinitionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GetResourceDefinitionResponse#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema GetResourceDefinitionResponse#LatestVersion
   */
  readonly latestVersion?: string;

  /**
   * @schema GetResourceDefinitionResponse#LatestVersionArn
   */
  readonly latestVersionArn?: string;

  /**
   * @schema GetResourceDefinitionResponse#Name
   */
  readonly name?: string;

  /**
   * @schema GetResourceDefinitionResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema GetResourceDefinitionVersionRequest
 */
export interface GetResourceDefinitionVersionRequest {
  /**
   * @schema GetResourceDefinitionVersionRequest#ResourceDefinitionId
   */
  readonly resourceDefinitionId: string;

  /**
   * @schema GetResourceDefinitionVersionRequest#ResourceDefinitionVersionId
   */
  readonly resourceDefinitionVersionId: string;

}

/**
 * @schema GetResourceDefinitionVersionResponse
 */
export interface GetResourceDefinitionVersionResponse {
  /**
   * @schema GetResourceDefinitionVersionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GetResourceDefinitionVersionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GetResourceDefinitionVersionResponse#Definition
   */
  readonly definition?: ResourceDefinitionVersion;

  /**
   * @schema GetResourceDefinitionVersionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GetResourceDefinitionVersionResponse#Version
   */
  readonly version?: string;

}

/**
 * @schema GetServiceRoleForAccountRequest
 */
export interface GetServiceRoleForAccountRequest {
}

/**
 * @schema GetServiceRoleForAccountResponse
 */
export interface GetServiceRoleForAccountResponse {
  /**
   * @schema GetServiceRoleForAccountResponse#AssociatedAt
   */
  readonly associatedAt?: string;

  /**
   * @schema GetServiceRoleForAccountResponse#RoleArn
   */
  readonly roleArn?: string;

}

/**
 * @schema GetSubscriptionDefinitionRequest
 */
export interface GetSubscriptionDefinitionRequest {
  /**
   * @schema GetSubscriptionDefinitionRequest#SubscriptionDefinitionId
   */
  readonly subscriptionDefinitionId: string;

}

/**
 * @schema GetSubscriptionDefinitionResponse
 */
export interface GetSubscriptionDefinitionResponse {
  /**
   * @schema GetSubscriptionDefinitionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GetSubscriptionDefinitionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GetSubscriptionDefinitionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GetSubscriptionDefinitionResponse#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema GetSubscriptionDefinitionResponse#LatestVersion
   */
  readonly latestVersion?: string;

  /**
   * @schema GetSubscriptionDefinitionResponse#LatestVersionArn
   */
  readonly latestVersionArn?: string;

  /**
   * @schema GetSubscriptionDefinitionResponse#Name
   */
  readonly name?: string;

  /**
   * @schema GetSubscriptionDefinitionResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema GetSubscriptionDefinitionVersionRequest
 */
export interface GetSubscriptionDefinitionVersionRequest {
  /**
   * @schema GetSubscriptionDefinitionVersionRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetSubscriptionDefinitionVersionRequest#SubscriptionDefinitionId
   */
  readonly subscriptionDefinitionId: string;

  /**
   * @schema GetSubscriptionDefinitionVersionRequest#SubscriptionDefinitionVersionId
   */
  readonly subscriptionDefinitionVersionId: string;

}

/**
 * @schema GetSubscriptionDefinitionVersionResponse
 */
export interface GetSubscriptionDefinitionVersionResponse {
  /**
   * @schema GetSubscriptionDefinitionVersionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GetSubscriptionDefinitionVersionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GetSubscriptionDefinitionVersionResponse#Definition
   */
  readonly definition?: SubscriptionDefinitionVersion;

  /**
   * @schema GetSubscriptionDefinitionVersionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GetSubscriptionDefinitionVersionResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetSubscriptionDefinitionVersionResponse#Version
   */
  readonly version?: string;

}

/**
 * @schema GetThingRuntimeConfigurationRequest
 */
export interface GetThingRuntimeConfigurationRequest {
  /**
   * @schema GetThingRuntimeConfigurationRequest#ThingName
   */
  readonly thingName: string;

}

/**
 * @schema GetThingRuntimeConfigurationResponse
 */
export interface GetThingRuntimeConfigurationResponse {
  /**
   * @schema GetThingRuntimeConfigurationResponse#RuntimeConfiguration
   */
  readonly runtimeConfiguration?: RuntimeConfiguration;

}

/**
 * @schema ListBulkDeploymentDetailedReportsRequest
 */
export interface ListBulkDeploymentDetailedReportsRequest {
  /**
   * @schema ListBulkDeploymentDetailedReportsRequest#BulkDeploymentId
   */
  readonly bulkDeploymentId: string;

  /**
   * @schema ListBulkDeploymentDetailedReportsRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema ListBulkDeploymentDetailedReportsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListBulkDeploymentDetailedReportsResponse
 */
export interface ListBulkDeploymentDetailedReportsResponse {
  /**
   * @schema ListBulkDeploymentDetailedReportsResponse#Deployments
   */
  readonly deployments?: BulkDeploymentResult[];

  /**
   * @schema ListBulkDeploymentDetailedReportsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListBulkDeploymentsRequest
 */
export interface ListBulkDeploymentsRequest {
  /**
   * @schema ListBulkDeploymentsRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema ListBulkDeploymentsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListBulkDeploymentsResponse
 */
export interface ListBulkDeploymentsResponse {
  /**
   * @schema ListBulkDeploymentsResponse#BulkDeployments
   */
  readonly bulkDeployments?: BulkDeployment[];

  /**
   * @schema ListBulkDeploymentsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListConnectorDefinitionVersionsRequest
 */
export interface ListConnectorDefinitionVersionsRequest {
  /**
   * @schema ListConnectorDefinitionVersionsRequest#ConnectorDefinitionId
   */
  readonly connectorDefinitionId: string;

  /**
   * @schema ListConnectorDefinitionVersionsRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema ListConnectorDefinitionVersionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListConnectorDefinitionVersionsResponse
 */
export interface ListConnectorDefinitionVersionsResponse {
  /**
   * @schema ListConnectorDefinitionVersionsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListConnectorDefinitionVersionsResponse#Versions
   */
  readonly versions?: VersionInformation[];

}

/**
 * @schema ListConnectorDefinitionsRequest
 */
export interface ListConnectorDefinitionsRequest {
  /**
   * @schema ListConnectorDefinitionsRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema ListConnectorDefinitionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListConnectorDefinitionsResponse
 */
export interface ListConnectorDefinitionsResponse {
  /**
   * @schema ListConnectorDefinitionsResponse#Definitions
   */
  readonly definitions?: DefinitionInformation[];

  /**
   * @schema ListConnectorDefinitionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListCoreDefinitionVersionsRequest
 */
export interface ListCoreDefinitionVersionsRequest {
  /**
   * @schema ListCoreDefinitionVersionsRequest#CoreDefinitionId
   */
  readonly coreDefinitionId: string;

  /**
   * @schema ListCoreDefinitionVersionsRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema ListCoreDefinitionVersionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListCoreDefinitionVersionsResponse
 */
export interface ListCoreDefinitionVersionsResponse {
  /**
   * @schema ListCoreDefinitionVersionsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListCoreDefinitionVersionsResponse#Versions
   */
  readonly versions?: VersionInformation[];

}

/**
 * @schema ListCoreDefinitionsRequest
 */
export interface ListCoreDefinitionsRequest {
  /**
   * @schema ListCoreDefinitionsRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema ListCoreDefinitionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListCoreDefinitionsResponse
 */
export interface ListCoreDefinitionsResponse {
  /**
   * @schema ListCoreDefinitionsResponse#Definitions
   */
  readonly definitions?: DefinitionInformation[];

  /**
   * @schema ListCoreDefinitionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListDeploymentsRequest
 */
export interface ListDeploymentsRequest {
  /**
   * @schema ListDeploymentsRequest#GroupId
   */
  readonly groupId: string;

  /**
   * @schema ListDeploymentsRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema ListDeploymentsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListDeploymentsResponse
 */
export interface ListDeploymentsResponse {
  /**
   * @schema ListDeploymentsResponse#Deployments
   */
  readonly deployments?: Deployment[];

  /**
   * @schema ListDeploymentsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListDeviceDefinitionVersionsRequest
 */
export interface ListDeviceDefinitionVersionsRequest {
  /**
   * @schema ListDeviceDefinitionVersionsRequest#DeviceDefinitionId
   */
  readonly deviceDefinitionId: string;

  /**
   * @schema ListDeviceDefinitionVersionsRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema ListDeviceDefinitionVersionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListDeviceDefinitionVersionsResponse
 */
export interface ListDeviceDefinitionVersionsResponse {
  /**
   * @schema ListDeviceDefinitionVersionsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListDeviceDefinitionVersionsResponse#Versions
   */
  readonly versions?: VersionInformation[];

}

/**
 * @schema ListDeviceDefinitionsRequest
 */
export interface ListDeviceDefinitionsRequest {
  /**
   * @schema ListDeviceDefinitionsRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema ListDeviceDefinitionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListDeviceDefinitionsResponse
 */
export interface ListDeviceDefinitionsResponse {
  /**
   * @schema ListDeviceDefinitionsResponse#Definitions
   */
  readonly definitions?: DefinitionInformation[];

  /**
   * @schema ListDeviceDefinitionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListFunctionDefinitionVersionsRequest
 */
export interface ListFunctionDefinitionVersionsRequest {
  /**
   * @schema ListFunctionDefinitionVersionsRequest#FunctionDefinitionId
   */
  readonly functionDefinitionId: string;

  /**
   * @schema ListFunctionDefinitionVersionsRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema ListFunctionDefinitionVersionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListFunctionDefinitionVersionsResponse
 */
export interface ListFunctionDefinitionVersionsResponse {
  /**
   * @schema ListFunctionDefinitionVersionsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListFunctionDefinitionVersionsResponse#Versions
   */
  readonly versions?: VersionInformation[];

}

/**
 * @schema ListFunctionDefinitionsRequest
 */
export interface ListFunctionDefinitionsRequest {
  /**
   * @schema ListFunctionDefinitionsRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema ListFunctionDefinitionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListFunctionDefinitionsResponse
 */
export interface ListFunctionDefinitionsResponse {
  /**
   * @schema ListFunctionDefinitionsResponse#Definitions
   */
  readonly definitions?: DefinitionInformation[];

  /**
   * @schema ListFunctionDefinitionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListGroupCertificateAuthoritiesRequest
 */
export interface ListGroupCertificateAuthoritiesRequest {
  /**
   * @schema ListGroupCertificateAuthoritiesRequest#GroupId
   */
  readonly groupId: string;

}

/**
 * @schema ListGroupCertificateAuthoritiesResponse
 */
export interface ListGroupCertificateAuthoritiesResponse {
  /**
   * @schema ListGroupCertificateAuthoritiesResponse#GroupCertificateAuthorities
   */
  readonly groupCertificateAuthorities?: GroupCertificateAuthorityProperties[];

}

/**
 * @schema ListGroupVersionsRequest
 */
export interface ListGroupVersionsRequest {
  /**
   * @schema ListGroupVersionsRequest#GroupId
   */
  readonly groupId: string;

  /**
   * @schema ListGroupVersionsRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema ListGroupVersionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListGroupVersionsResponse
 */
export interface ListGroupVersionsResponse {
  /**
   * @schema ListGroupVersionsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListGroupVersionsResponse#Versions
   */
  readonly versions?: VersionInformation[];

}

/**
 * @schema ListGroupsRequest
 */
export interface ListGroupsRequest {
  /**
   * @schema ListGroupsRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema ListGroupsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListGroupsResponse
 */
export interface ListGroupsResponse {
  /**
   * @schema ListGroupsResponse#Groups
   */
  readonly groups?: GroupInformation[];

  /**
   * @schema ListGroupsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListLoggerDefinitionVersionsRequest
 */
export interface ListLoggerDefinitionVersionsRequest {
  /**
   * @schema ListLoggerDefinitionVersionsRequest#LoggerDefinitionId
   */
  readonly loggerDefinitionId: string;

  /**
   * @schema ListLoggerDefinitionVersionsRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema ListLoggerDefinitionVersionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListLoggerDefinitionVersionsResponse
 */
export interface ListLoggerDefinitionVersionsResponse {
  /**
   * @schema ListLoggerDefinitionVersionsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListLoggerDefinitionVersionsResponse#Versions
   */
  readonly versions?: VersionInformation[];

}

/**
 * @schema ListLoggerDefinitionsRequest
 */
export interface ListLoggerDefinitionsRequest {
  /**
   * @schema ListLoggerDefinitionsRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema ListLoggerDefinitionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListLoggerDefinitionsResponse
 */
export interface ListLoggerDefinitionsResponse {
  /**
   * @schema ListLoggerDefinitionsResponse#Definitions
   */
  readonly definitions?: DefinitionInformation[];

  /**
   * @schema ListLoggerDefinitionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListResourceDefinitionVersionsRequest
 */
export interface ListResourceDefinitionVersionsRequest {
  /**
   * @schema ListResourceDefinitionVersionsRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema ListResourceDefinitionVersionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListResourceDefinitionVersionsRequest#ResourceDefinitionId
   */
  readonly resourceDefinitionId: string;

}

/**
 * @schema ListResourceDefinitionVersionsResponse
 */
export interface ListResourceDefinitionVersionsResponse {
  /**
   * @schema ListResourceDefinitionVersionsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListResourceDefinitionVersionsResponse#Versions
   */
  readonly versions?: VersionInformation[];

}

/**
 * @schema ListResourceDefinitionsRequest
 */
export interface ListResourceDefinitionsRequest {
  /**
   * @schema ListResourceDefinitionsRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema ListResourceDefinitionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListResourceDefinitionsResponse
 */
export interface ListResourceDefinitionsResponse {
  /**
   * @schema ListResourceDefinitionsResponse#Definitions
   */
  readonly definitions?: DefinitionInformation[];

  /**
   * @schema ListResourceDefinitionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListSubscriptionDefinitionVersionsRequest
 */
export interface ListSubscriptionDefinitionVersionsRequest {
  /**
   * @schema ListSubscriptionDefinitionVersionsRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema ListSubscriptionDefinitionVersionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListSubscriptionDefinitionVersionsRequest#SubscriptionDefinitionId
   */
  readonly subscriptionDefinitionId: string;

}

/**
 * @schema ListSubscriptionDefinitionVersionsResponse
 */
export interface ListSubscriptionDefinitionVersionsResponse {
  /**
   * @schema ListSubscriptionDefinitionVersionsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListSubscriptionDefinitionVersionsResponse#Versions
   */
  readonly versions?: VersionInformation[];

}

/**
 * @schema ListSubscriptionDefinitionsRequest
 */
export interface ListSubscriptionDefinitionsRequest {
  /**
   * @schema ListSubscriptionDefinitionsRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema ListSubscriptionDefinitionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListSubscriptionDefinitionsResponse
 */
export interface ListSubscriptionDefinitionsResponse {
  /**
   * @schema ListSubscriptionDefinitionsResponse#Definitions
   */
  readonly definitions?: DefinitionInformation[];

  /**
   * @schema ListSubscriptionDefinitionsResponse#NextToken
   */
  readonly nextToken?: string;

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
   * @schema ListTagsForResourceResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema ResetDeploymentsRequest
 */
export interface ResetDeploymentsRequest {
  /**
   * @schema ResetDeploymentsRequest#AmznClientToken
   */
  readonly amznClientToken?: string;

  /**
   * @schema ResetDeploymentsRequest#Force
   */
  readonly force?: boolean;

  /**
   * @schema ResetDeploymentsRequest#GroupId
   */
  readonly groupId: string;

}

/**
 * @schema ResetDeploymentsResponse
 */
export interface ResetDeploymentsResponse {
  /**
   * @schema ResetDeploymentsResponse#DeploymentArn
   */
  readonly deploymentArn?: string;

  /**
   * @schema ResetDeploymentsResponse#DeploymentId
   */
  readonly deploymentId?: string;

}

/**
 * @schema StartBulkDeploymentRequest
 */
export interface StartBulkDeploymentRequest {
  /**
   * @schema StartBulkDeploymentRequest#AmznClientToken
   */
  readonly amznClientToken?: string;

  /**
   * @schema StartBulkDeploymentRequest#ExecutionRoleArn
   */
  readonly executionRoleArn: string;

  /**
   * @schema StartBulkDeploymentRequest#InputFileUri
   */
  readonly inputFileUri: string;

  /**
   * @schema StartBulkDeploymentRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema StartBulkDeploymentResponse
 */
export interface StartBulkDeploymentResponse {
  /**
   * @schema StartBulkDeploymentResponse#BulkDeploymentArn
   */
  readonly bulkDeploymentArn?: string;

  /**
   * @schema StartBulkDeploymentResponse#BulkDeploymentId
   */
  readonly bulkDeploymentId?: string;

}

/**
 * @schema StopBulkDeploymentRequest
 */
export interface StopBulkDeploymentRequest {
  /**
   * @schema StopBulkDeploymentRequest#BulkDeploymentId
   */
  readonly bulkDeploymentId: string;

}

/**
 * @schema StopBulkDeploymentResponse
 */
export interface StopBulkDeploymentResponse {
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
   * @schema TagResourceRequest#tags
   */
  readonly tags?: { [key: string]: string };

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
 * @schema UpdateConnectivityInfoRequest
 */
export interface UpdateConnectivityInfoRequest {
  /**
   * @schema UpdateConnectivityInfoRequest#ConnectivityInfo
   */
  readonly connectivityInfo?: ConnectivityInfo[];

  /**
   * @schema UpdateConnectivityInfoRequest#ThingName
   */
  readonly thingName: string;

}

/**
 * @schema UpdateConnectivityInfoResponse
 */
export interface UpdateConnectivityInfoResponse {
  /**
   * @schema UpdateConnectivityInfoResponse#Message
   */
  readonly message?: string;

  /**
   * @schema UpdateConnectivityInfoResponse#Version
   */
  readonly version?: string;

}

/**
 * @schema UpdateConnectorDefinitionRequest
 */
export interface UpdateConnectorDefinitionRequest {
  /**
   * @schema UpdateConnectorDefinitionRequest#ConnectorDefinitionId
   */
  readonly connectorDefinitionId: string;

  /**
   * @schema UpdateConnectorDefinitionRequest#Name
   */
  readonly name?: string;

}

/**
 * @schema UpdateConnectorDefinitionResponse
 */
export interface UpdateConnectorDefinitionResponse {
}

/**
 * @schema UpdateCoreDefinitionRequest
 */
export interface UpdateCoreDefinitionRequest {
  /**
   * @schema UpdateCoreDefinitionRequest#CoreDefinitionId
   */
  readonly coreDefinitionId: string;

  /**
   * @schema UpdateCoreDefinitionRequest#Name
   */
  readonly name?: string;

}

/**
 * @schema UpdateCoreDefinitionResponse
 */
export interface UpdateCoreDefinitionResponse {
}

/**
 * @schema UpdateDeviceDefinitionRequest
 */
export interface UpdateDeviceDefinitionRequest {
  /**
   * @schema UpdateDeviceDefinitionRequest#DeviceDefinitionId
   */
  readonly deviceDefinitionId: string;

  /**
   * @schema UpdateDeviceDefinitionRequest#Name
   */
  readonly name?: string;

}

/**
 * @schema UpdateDeviceDefinitionResponse
 */
export interface UpdateDeviceDefinitionResponse {
}

/**
 * @schema UpdateFunctionDefinitionRequest
 */
export interface UpdateFunctionDefinitionRequest {
  /**
   * @schema UpdateFunctionDefinitionRequest#FunctionDefinitionId
   */
  readonly functionDefinitionId: string;

  /**
   * @schema UpdateFunctionDefinitionRequest#Name
   */
  readonly name?: string;

}

/**
 * @schema UpdateFunctionDefinitionResponse
 */
export interface UpdateFunctionDefinitionResponse {
}

/**
 * @schema UpdateGroupRequest
 */
export interface UpdateGroupRequest {
  /**
   * @schema UpdateGroupRequest#GroupId
   */
  readonly groupId: string;

  /**
   * @schema UpdateGroupRequest#Name
   */
  readonly name?: string;

}

/**
 * @schema UpdateGroupResponse
 */
export interface UpdateGroupResponse {
}

/**
 * @schema UpdateGroupCertificateConfigurationRequest
 */
export interface UpdateGroupCertificateConfigurationRequest {
  /**
   * @schema UpdateGroupCertificateConfigurationRequest#CertificateExpiryInMilliseconds
   */
  readonly certificateExpiryInMilliseconds?: string;

  /**
   * @schema UpdateGroupCertificateConfigurationRequest#GroupId
   */
  readonly groupId: string;

}

/**
 * @schema UpdateGroupCertificateConfigurationResponse
 */
export interface UpdateGroupCertificateConfigurationResponse {
  /**
   * @schema UpdateGroupCertificateConfigurationResponse#CertificateAuthorityExpiryInMilliseconds
   */
  readonly certificateAuthorityExpiryInMilliseconds?: string;

  /**
   * @schema UpdateGroupCertificateConfigurationResponse#CertificateExpiryInMilliseconds
   */
  readonly certificateExpiryInMilliseconds?: string;

  /**
   * @schema UpdateGroupCertificateConfigurationResponse#GroupId
   */
  readonly groupId?: string;

}

/**
 * @schema UpdateLoggerDefinitionRequest
 */
export interface UpdateLoggerDefinitionRequest {
  /**
   * @schema UpdateLoggerDefinitionRequest#LoggerDefinitionId
   */
  readonly loggerDefinitionId: string;

  /**
   * @schema UpdateLoggerDefinitionRequest#Name
   */
  readonly name?: string;

}

/**
 * @schema UpdateLoggerDefinitionResponse
 */
export interface UpdateLoggerDefinitionResponse {
}

/**
 * @schema UpdateResourceDefinitionRequest
 */
export interface UpdateResourceDefinitionRequest {
  /**
   * @schema UpdateResourceDefinitionRequest#Name
   */
  readonly name?: string;

  /**
   * @schema UpdateResourceDefinitionRequest#ResourceDefinitionId
   */
  readonly resourceDefinitionId: string;

}

/**
 * @schema UpdateResourceDefinitionResponse
 */
export interface UpdateResourceDefinitionResponse {
}

/**
 * @schema UpdateSubscriptionDefinitionRequest
 */
export interface UpdateSubscriptionDefinitionRequest {
  /**
   * @schema UpdateSubscriptionDefinitionRequest#Name
   */
  readonly name?: string;

  /**
   * @schema UpdateSubscriptionDefinitionRequest#SubscriptionDefinitionId
   */
  readonly subscriptionDefinitionId: string;

}

/**
 * @schema UpdateSubscriptionDefinitionResponse
 */
export interface UpdateSubscriptionDefinitionResponse {
}

/**
 * @schema UpdateThingRuntimeConfigurationRequest
 */
export interface UpdateThingRuntimeConfigurationRequest {
  /**
   * @schema UpdateThingRuntimeConfigurationRequest#TelemetryConfiguration
   */
  readonly telemetryConfiguration?: TelemetryConfigurationUpdate;

  /**
   * @schema UpdateThingRuntimeConfigurationRequest#ThingName
   */
  readonly thingName: string;

}

/**
 * @schema UpdateThingRuntimeConfigurationResponse
 */
export interface UpdateThingRuntimeConfigurationResponse {
}

/**
 * @schema ConnectorDefinitionVersion
 */
export interface ConnectorDefinitionVersion {
  /**
   * @schema ConnectorDefinitionVersion#Connectors
   */
  readonly connectors?: Connector[];

}

/**
 * @schema Connector
 */
export interface Connector {
  /**
   * @schema Connector#ConnectorArn
   */
  readonly connectorArn: string;

  /**
   * @schema Connector#Id
   */
  readonly id: string;

  /**
   * @schema Connector#Parameters
   */
  readonly parameters?: { [key: string]: string };

}

/**
 * @schema CoreDefinitionVersion
 */
export interface CoreDefinitionVersion {
  /**
   * @schema CoreDefinitionVersion#Cores
   */
  readonly cores?: Core[];

}

/**
 * @schema Core
 */
export interface Core {
  /**
   * @schema Core#CertificateArn
   */
  readonly certificateArn: string;

  /**
   * @schema Core#Id
   */
  readonly id: string;

  /**
   * @schema Core#SyncShadow
   */
  readonly syncShadow?: boolean;

  /**
   * @schema Core#ThingArn
   */
  readonly thingArn: string;

}

/**
 * @schema DeviceDefinitionVersion
 */
export interface DeviceDefinitionVersion {
  /**
   * @schema DeviceDefinitionVersion#Devices
   */
  readonly devices?: Device[];

}

/**
 * @schema Device
 */
export interface Device {
  /**
   * @schema Device#CertificateArn
   */
  readonly certificateArn: string;

  /**
   * @schema Device#Id
   */
  readonly id: string;

  /**
   * @schema Device#SyncShadow
   */
  readonly syncShadow?: boolean;

  /**
   * @schema Device#ThingArn
   */
  readonly thingArn: string;

}

/**
 * @schema FunctionDefinitionVersion
 */
export interface FunctionDefinitionVersion {
  /**
   * @schema FunctionDefinitionVersion#DefaultConfig
   */
  readonly defaultConfig?: FunctionDefaultConfig;

  /**
   * @schema FunctionDefinitionVersion#Functions
   */
  readonly functions?: Function[];

}

/**
 * @schema FunctionDefaultConfig
 */
export interface FunctionDefaultConfig {
  /**
   * @schema FunctionDefaultConfig#Execution
   */
  readonly execution?: FunctionDefaultExecutionConfig;

}

/**
 * @schema Function
 */
export interface Function {
  /**
   * @schema Function#FunctionArn
   */
  readonly functionArn?: string;

  /**
   * @schema Function#FunctionConfiguration
   */
  readonly functionConfiguration?: FunctionConfiguration;

  /**
   * @schema Function#Id
   */
  readonly id: string;

}

/**
 * @schema GroupVersion
 */
export interface GroupVersion {
  /**
   * @schema GroupVersion#ConnectorDefinitionVersionArn
   */
  readonly connectorDefinitionVersionArn?: string;

  /**
   * @schema GroupVersion#CoreDefinitionVersionArn
   */
  readonly coreDefinitionVersionArn?: string;

  /**
   * @schema GroupVersion#DeviceDefinitionVersionArn
   */
  readonly deviceDefinitionVersionArn?: string;

  /**
   * @schema GroupVersion#FunctionDefinitionVersionArn
   */
  readonly functionDefinitionVersionArn?: string;

  /**
   * @schema GroupVersion#LoggerDefinitionVersionArn
   */
  readonly loggerDefinitionVersionArn?: string;

  /**
   * @schema GroupVersion#ResourceDefinitionVersionArn
   */
  readonly resourceDefinitionVersionArn?: string;

  /**
   * @schema GroupVersion#SubscriptionDefinitionVersionArn
   */
  readonly subscriptionDefinitionVersionArn?: string;

}

/**
 * @schema LoggerDefinitionVersion
 */
export interface LoggerDefinitionVersion {
  /**
   * @schema LoggerDefinitionVersion#Loggers
   */
  readonly loggers?: Logger[];

}

/**
 * @schema Logger
 */
export interface Logger {
  /**
   * @schema Logger#Component
   */
  readonly component: string;

  /**
   * @schema Logger#Id
   */
  readonly id: string;

  /**
   * @schema Logger#Level
   */
  readonly level: string;

  /**
   * @schema Logger#Space
   */
  readonly space?: number;

  /**
   * @schema Logger#Type
   */
  readonly type: string;

}

/**
 * @schema ResourceDefinitionVersion
 */
export interface ResourceDefinitionVersion {
  /**
   * @schema ResourceDefinitionVersion#Resources
   */
  readonly resources?: Resource[];

}

/**
 * @schema Resource
 */
export interface Resource {
  /**
   * @schema Resource#Id
   */
  readonly id: string;

  /**
   * @schema Resource#Name
   */
  readonly name: string;

  /**
   * @schema Resource#ResourceDataContainer
   */
  readonly resourceDataContainer: ResourceDataContainer;

}

/**
 * @schema SubscriptionDefinitionVersion
 */
export interface SubscriptionDefinitionVersion {
  /**
   * @schema SubscriptionDefinitionVersion#Subscriptions
   */
  readonly subscriptions?: Subscription[];

}

/**
 * @schema Subscription
 */
export interface Subscription {
  /**
   * @schema Subscription#Id
   */
  readonly id: string;

  /**
   * @schema Subscription#Source
   */
  readonly source: string;

  /**
   * @schema Subscription#Subject
   */
  readonly subject: string;

  /**
   * @schema Subscription#Target
   */
  readonly target: string;

}

/**
 * @schema BulkDeploymentMetrics
 */
export interface BulkDeploymentMetrics {
  /**
   * @schema BulkDeploymentMetrics#InvalidInputRecords
   */
  readonly invalidInputRecords?: number;

  /**
   * @schema BulkDeploymentMetrics#RecordsProcessed
   */
  readonly recordsProcessed?: number;

  /**
   * @schema BulkDeploymentMetrics#RetryAttempts
   */
  readonly retryAttempts?: number;

}

/**
 * @schema ErrorDetail
 */
export interface ErrorDetail {
  /**
   * @schema ErrorDetail#DetailedErrorCode
   */
  readonly detailedErrorCode?: string;

  /**
   * @schema ErrorDetail#DetailedErrorMessage
   */
  readonly detailedErrorMessage?: string;

}

/**
 * @schema ConnectivityInfo
 */
export interface ConnectivityInfo {
  /**
   * @schema ConnectivityInfo#HostAddress
   */
  readonly hostAddress?: string;

  /**
   * @schema ConnectivityInfo#Id
   */
  readonly id?: string;

  /**
   * @schema ConnectivityInfo#Metadata
   */
  readonly metadata?: string;

  /**
   * @schema ConnectivityInfo#PortNumber
   */
  readonly portNumber?: number;

}

/**
 * @schema RuntimeConfiguration
 */
export interface RuntimeConfiguration {
  /**
   * @schema RuntimeConfiguration#TelemetryConfiguration
   */
  readonly telemetryConfiguration?: TelemetryConfiguration;

}

/**
 * @schema BulkDeploymentResult
 */
export interface BulkDeploymentResult {
  /**
   * @schema BulkDeploymentResult#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema BulkDeploymentResult#DeploymentArn
   */
  readonly deploymentArn?: string;

  /**
   * @schema BulkDeploymentResult#DeploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema BulkDeploymentResult#DeploymentStatus
   */
  readonly deploymentStatus?: string;

  /**
   * @schema BulkDeploymentResult#DeploymentType
   */
  readonly deploymentType?: string;

  /**
   * @schema BulkDeploymentResult#ErrorDetails
   */
  readonly errorDetails?: ErrorDetail[];

  /**
   * @schema BulkDeploymentResult#ErrorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema BulkDeploymentResult#GroupArn
   */
  readonly groupArn?: string;

}

/**
 * @schema BulkDeployment
 */
export interface BulkDeployment {
  /**
   * @schema BulkDeployment#BulkDeploymentArn
   */
  readonly bulkDeploymentArn?: string;

  /**
   * @schema BulkDeployment#BulkDeploymentId
   */
  readonly bulkDeploymentId?: string;

  /**
   * @schema BulkDeployment#CreatedAt
   */
  readonly createdAt?: string;

}

/**
 * @schema VersionInformation
 */
export interface VersionInformation {
  /**
   * @schema VersionInformation#Arn
   */
  readonly arn?: string;

  /**
   * @schema VersionInformation#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema VersionInformation#Id
   */
  readonly id?: string;

  /**
   * @schema VersionInformation#Version
   */
  readonly version?: string;

}

/**
 * @schema DefinitionInformation
 */
export interface DefinitionInformation {
  /**
   * @schema DefinitionInformation#Arn
   */
  readonly arn?: string;

  /**
   * @schema DefinitionInformation#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema DefinitionInformation#Id
   */
  readonly id?: string;

  /**
   * @schema DefinitionInformation#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema DefinitionInformation#LatestVersion
   */
  readonly latestVersion?: string;

  /**
   * @schema DefinitionInformation#LatestVersionArn
   */
  readonly latestVersionArn?: string;

  /**
   * @schema DefinitionInformation#Name
   */
  readonly name?: string;

  /**
   * @schema DefinitionInformation#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema Deployment
 */
export interface Deployment {
  /**
   * @schema Deployment#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema Deployment#DeploymentArn
   */
  readonly deploymentArn?: string;

  /**
   * @schema Deployment#DeploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema Deployment#DeploymentType
   */
  readonly deploymentType?: string;

  /**
   * @schema Deployment#GroupArn
   */
  readonly groupArn?: string;

}

/**
 * @schema GroupCertificateAuthorityProperties
 */
export interface GroupCertificateAuthorityProperties {
  /**
   * @schema GroupCertificateAuthorityProperties#GroupCertificateAuthorityArn
   */
  readonly groupCertificateAuthorityArn?: string;

  /**
   * @schema GroupCertificateAuthorityProperties#GroupCertificateAuthorityId
   */
  readonly groupCertificateAuthorityId?: string;

}

/**
 * @schema GroupInformation
 */
export interface GroupInformation {
  /**
   * @schema GroupInformation#Arn
   */
  readonly arn?: string;

  /**
   * @schema GroupInformation#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GroupInformation#Id
   */
  readonly id?: string;

  /**
   * @schema GroupInformation#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema GroupInformation#LatestVersion
   */
  readonly latestVersion?: string;

  /**
   * @schema GroupInformation#LatestVersionArn
   */
  readonly latestVersionArn?: string;

  /**
   * @schema GroupInformation#Name
   */
  readonly name?: string;

}

/**
 * @schema TelemetryConfigurationUpdate
 */
export interface TelemetryConfigurationUpdate {
  /**
   * @schema TelemetryConfigurationUpdate#Telemetry
   */
  readonly telemetry: string;

}

/**
 * @schema FunctionDefaultExecutionConfig
 */
export interface FunctionDefaultExecutionConfig {
  /**
   * @schema FunctionDefaultExecutionConfig#IsolationMode
   */
  readonly isolationMode?: string;

  /**
   * @schema FunctionDefaultExecutionConfig#RunAs
   */
  readonly runAs?: FunctionRunAsConfig;

}

/**
 * @schema FunctionConfiguration
 */
export interface FunctionConfiguration {
  /**
   * @schema FunctionConfiguration#EncodingType
   */
  readonly encodingType?: string;

  /**
   * @schema FunctionConfiguration#Environment
   */
  readonly environment?: FunctionConfigurationEnvironment;

  /**
   * @schema FunctionConfiguration#ExecArgs
   */
  readonly execArgs?: string;

  /**
   * @schema FunctionConfiguration#Executable
   */
  readonly executable?: string;

  /**
   * @schema FunctionConfiguration#MemorySize
   */
  readonly memorySize?: number;

  /**
   * @schema FunctionConfiguration#Pinned
   */
  readonly pinned?: boolean;

  /**
   * @schema FunctionConfiguration#Timeout
   */
  readonly timeout?: number;

}

/**
 * @schema ResourceDataContainer
 */
export interface ResourceDataContainer {
  /**
   * @schema ResourceDataContainer#LocalDeviceResourceData
   */
  readonly localDeviceResourceData?: LocalDeviceResourceData;

  /**
   * @schema ResourceDataContainer#LocalVolumeResourceData
   */
  readonly localVolumeResourceData?: LocalVolumeResourceData;

  /**
   * @schema ResourceDataContainer#S3MachineLearningModelResourceData
   */
  readonly s3MachineLearningModelResourceData?: S3MachineLearningModelResourceData;

  /**
   * @schema ResourceDataContainer#SageMakerMachineLearningModelResourceData
   */
  readonly sageMakerMachineLearningModelResourceData?: SageMakerMachineLearningModelResourceData;

  /**
   * @schema ResourceDataContainer#SecretsManagerSecretResourceData
   */
  readonly secretsManagerSecretResourceData?: SecretsManagerSecretResourceData;

}

/**
 * @schema TelemetryConfiguration
 */
export interface TelemetryConfiguration {
  /**
   * @schema TelemetryConfiguration#ConfigurationSyncStatus
   */
  readonly configurationSyncStatus?: string;

  /**
   * @schema TelemetryConfiguration#Telemetry
   */
  readonly telemetry: string;

}

/**
 * @schema FunctionRunAsConfig
 */
export interface FunctionRunAsConfig {
  /**
   * @schema FunctionRunAsConfig#Gid
   */
  readonly gid?: number;

  /**
   * @schema FunctionRunAsConfig#Uid
   */
  readonly uid?: number;

}

/**
 * @schema FunctionConfigurationEnvironment
 */
export interface FunctionConfigurationEnvironment {
  /**
   * @schema FunctionConfigurationEnvironment#AccessSysfs
   */
  readonly accessSysfs?: boolean;

  /**
   * @schema FunctionConfigurationEnvironment#Execution
   */
  readonly execution?: FunctionExecutionConfig;

  /**
   * @schema FunctionConfigurationEnvironment#ResourceAccessPolicies
   */
  readonly resourceAccessPolicies?: ResourceAccessPolicy[];

  /**
   * @schema FunctionConfigurationEnvironment#Variables
   */
  readonly variables?: { [key: string]: string };

}

/**
 * @schema LocalDeviceResourceData
 */
export interface LocalDeviceResourceData {
  /**
   * @schema LocalDeviceResourceData#GroupOwnerSetting
   */
  readonly groupOwnerSetting?: GroupOwnerSetting;

  /**
   * @schema LocalDeviceResourceData#SourcePath
   */
  readonly sourcePath?: string;

}

/**
 * @schema LocalVolumeResourceData
 */
export interface LocalVolumeResourceData {
  /**
   * @schema LocalVolumeResourceData#DestinationPath
   */
  readonly destinationPath?: string;

  /**
   * @schema LocalVolumeResourceData#GroupOwnerSetting
   */
  readonly groupOwnerSetting?: GroupOwnerSetting;

  /**
   * @schema LocalVolumeResourceData#SourcePath
   */
  readonly sourcePath?: string;

}

/**
 * @schema S3MachineLearningModelResourceData
 */
export interface S3MachineLearningModelResourceData {
  /**
   * @schema S3MachineLearningModelResourceData#DestinationPath
   */
  readonly destinationPath?: string;

  /**
   * @schema S3MachineLearningModelResourceData#OwnerSetting
   */
  readonly ownerSetting?: ResourceDownloadOwnerSetting;

  /**
   * @schema S3MachineLearningModelResourceData#S3Uri
   */
  readonly s3Uri?: string;

}

/**
 * @schema SageMakerMachineLearningModelResourceData
 */
export interface SageMakerMachineLearningModelResourceData {
  /**
   * @schema SageMakerMachineLearningModelResourceData#DestinationPath
   */
  readonly destinationPath?: string;

  /**
   * @schema SageMakerMachineLearningModelResourceData#OwnerSetting
   */
  readonly ownerSetting?: ResourceDownloadOwnerSetting;

  /**
   * @schema SageMakerMachineLearningModelResourceData#SageMakerJobArn
   */
  readonly sageMakerJobArn?: string;

}

/**
 * @schema SecretsManagerSecretResourceData
 */
export interface SecretsManagerSecretResourceData {
  /**
   * @schema SecretsManagerSecretResourceData#ARN
   */
  readonly arn?: string;

  /**
   * @schema SecretsManagerSecretResourceData#AdditionalStagingLabelsToDownload
   */
  readonly additionalStagingLabelsToDownload?: string[];

}

/**
 * @schema FunctionExecutionConfig
 */
export interface FunctionExecutionConfig {
  /**
   * @schema FunctionExecutionConfig#IsolationMode
   */
  readonly isolationMode?: string;

  /**
   * @schema FunctionExecutionConfig#RunAs
   */
  readonly runAs?: FunctionRunAsConfig;

}

/**
 * @schema ResourceAccessPolicy
 */
export interface ResourceAccessPolicy {
  /**
   * @schema ResourceAccessPolicy#Permission
   */
  readonly permission?: string;

  /**
   * @schema ResourceAccessPolicy#ResourceId
   */
  readonly resourceId: string;

}

/**
 * @schema GroupOwnerSetting
 */
export interface GroupOwnerSetting {
  /**
   * @schema GroupOwnerSetting#AutoAddGroupOwner
   */
  readonly autoAddGroupOwner?: boolean;

  /**
   * @schema GroupOwnerSetting#GroupOwner
   */
  readonly groupOwner?: string;

}

/**
 * @schema ResourceDownloadOwnerSetting
 */
export interface ResourceDownloadOwnerSetting {
  /**
   * @schema ResourceDownloadOwnerSetting#GroupOwner
   */
  readonly groupOwner: string;

  /**
   * @schema ResourceDownloadOwnerSetting#GroupPermission
   */
  readonly groupPermission: string;

}
