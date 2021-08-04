/**
 * @schema GreengrassAssociateRoleToGroupRequest
 */
export interface GreengrassAssociateRoleToGroupRequest {
  /**
   * @schema GreengrassAssociateRoleToGroupRequest#GroupId
   */
  readonly groupId: string;

  /**
   * @schema GreengrassAssociateRoleToGroupRequest#RoleArn
   */
  readonly roleArn: string;

}

/**
 * @schema GreengrassAssociateRoleToGroupResponse
 */
export interface GreengrassAssociateRoleToGroupResponse {
  /**
   * @schema GreengrassAssociateRoleToGroupResponse#AssociatedAt
   */
  readonly associatedAt?: string;

}

/**
 * @schema GreengrassAssociateServiceRoleToAccountRequest
 */
export interface GreengrassAssociateServiceRoleToAccountRequest {
  /**
   * @schema GreengrassAssociateServiceRoleToAccountRequest#RoleArn
   */
  readonly roleArn: string;

}

/**
 * @schema GreengrassAssociateServiceRoleToAccountResponse
 */
export interface GreengrassAssociateServiceRoleToAccountResponse {
  /**
   * @schema GreengrassAssociateServiceRoleToAccountResponse#AssociatedAt
   */
  readonly associatedAt?: string;

}

/**
 * @schema GreengrassCreateConnectorDefinitionRequest
 */
export interface GreengrassCreateConnectorDefinitionRequest {
  /**
   * @schema GreengrassCreateConnectorDefinitionRequest#AmznClientToken
   */
  readonly amznClientToken?: string;

  /**
   * @schema GreengrassCreateConnectorDefinitionRequest#InitialVersion
   */
  readonly initialVersion?: GreengrassConnectorDefinitionVersion;

  /**
   * @schema GreengrassCreateConnectorDefinitionRequest#Name
   */
  readonly name?: string;

  /**
   * @schema GreengrassCreateConnectorDefinitionRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema GreengrassCreateConnectorDefinitionResponse
 */
export interface GreengrassCreateConnectorDefinitionResponse {
  /**
   * @schema GreengrassCreateConnectorDefinitionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassCreateConnectorDefinitionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassCreateConnectorDefinitionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassCreateConnectorDefinitionResponse#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema GreengrassCreateConnectorDefinitionResponse#LatestVersion
   */
  readonly latestVersion?: string;

  /**
   * @schema GreengrassCreateConnectorDefinitionResponse#LatestVersionArn
   */
  readonly latestVersionArn?: string;

  /**
   * @schema GreengrassCreateConnectorDefinitionResponse#Name
   */
  readonly name?: string;

}

/**
 * @schema GreengrassCreateConnectorDefinitionVersionRequest
 */
export interface GreengrassCreateConnectorDefinitionVersionRequest {
  /**
   * @schema GreengrassCreateConnectorDefinitionVersionRequest#AmznClientToken
   */
  readonly amznClientToken?: string;

  /**
   * @schema GreengrassCreateConnectorDefinitionVersionRequest#ConnectorDefinitionId
   */
  readonly connectorDefinitionId: string;

  /**
   * @schema GreengrassCreateConnectorDefinitionVersionRequest#Connectors
   */
  readonly connectors?: GreengrassConnector[];

}

/**
 * @schema GreengrassCreateConnectorDefinitionVersionResponse
 */
export interface GreengrassCreateConnectorDefinitionVersionResponse {
  /**
   * @schema GreengrassCreateConnectorDefinitionVersionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassCreateConnectorDefinitionVersionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassCreateConnectorDefinitionVersionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassCreateConnectorDefinitionVersionResponse#Version
   */
  readonly version?: string;

}

/**
 * @schema GreengrassCreateCoreDefinitionRequest
 */
export interface GreengrassCreateCoreDefinitionRequest {
  /**
   * @schema GreengrassCreateCoreDefinitionRequest#AmznClientToken
   */
  readonly amznClientToken?: string;

  /**
   * @schema GreengrassCreateCoreDefinitionRequest#InitialVersion
   */
  readonly initialVersion?: GreengrassCoreDefinitionVersion;

  /**
   * @schema GreengrassCreateCoreDefinitionRequest#Name
   */
  readonly name?: string;

  /**
   * @schema GreengrassCreateCoreDefinitionRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema GreengrassCreateCoreDefinitionResponse
 */
export interface GreengrassCreateCoreDefinitionResponse {
  /**
   * @schema GreengrassCreateCoreDefinitionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassCreateCoreDefinitionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassCreateCoreDefinitionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassCreateCoreDefinitionResponse#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema GreengrassCreateCoreDefinitionResponse#LatestVersion
   */
  readonly latestVersion?: string;

  /**
   * @schema GreengrassCreateCoreDefinitionResponse#LatestVersionArn
   */
  readonly latestVersionArn?: string;

  /**
   * @schema GreengrassCreateCoreDefinitionResponse#Name
   */
  readonly name?: string;

}

/**
 * @schema GreengrassCreateCoreDefinitionVersionRequest
 */
export interface GreengrassCreateCoreDefinitionVersionRequest {
  /**
   * @schema GreengrassCreateCoreDefinitionVersionRequest#AmznClientToken
   */
  readonly amznClientToken?: string;

  /**
   * @schema GreengrassCreateCoreDefinitionVersionRequest#CoreDefinitionId
   */
  readonly coreDefinitionId: string;

  /**
   * @schema GreengrassCreateCoreDefinitionVersionRequest#Cores
   */
  readonly cores?: GreengrassCore[];

}

/**
 * @schema GreengrassCreateCoreDefinitionVersionResponse
 */
export interface GreengrassCreateCoreDefinitionVersionResponse {
  /**
   * @schema GreengrassCreateCoreDefinitionVersionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassCreateCoreDefinitionVersionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassCreateCoreDefinitionVersionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassCreateCoreDefinitionVersionResponse#Version
   */
  readonly version?: string;

}

/**
 * @schema GreengrassCreateDeploymentRequest
 */
export interface GreengrassCreateDeploymentRequest {
  /**
   * @schema GreengrassCreateDeploymentRequest#AmznClientToken
   */
  readonly amznClientToken?: string;

  /**
   * @schema GreengrassCreateDeploymentRequest#DeploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema GreengrassCreateDeploymentRequest#DeploymentType
   */
  readonly deploymentType: string;

  /**
   * @schema GreengrassCreateDeploymentRequest#GroupId
   */
  readonly groupId: string;

  /**
   * @schema GreengrassCreateDeploymentRequest#GroupVersionId
   */
  readonly groupVersionId?: string;

}

/**
 * @schema GreengrassCreateDeploymentResponse
 */
export interface GreengrassCreateDeploymentResponse {
  /**
   * @schema GreengrassCreateDeploymentResponse#DeploymentArn
   */
  readonly deploymentArn?: string;

  /**
   * @schema GreengrassCreateDeploymentResponse#DeploymentId
   */
  readonly deploymentId?: string;

}

/**
 * @schema GreengrassCreateDeviceDefinitionRequest
 */
export interface GreengrassCreateDeviceDefinitionRequest {
  /**
   * @schema GreengrassCreateDeviceDefinitionRequest#AmznClientToken
   */
  readonly amznClientToken?: string;

  /**
   * @schema GreengrassCreateDeviceDefinitionRequest#InitialVersion
   */
  readonly initialVersion?: GreengrassDeviceDefinitionVersion;

  /**
   * @schema GreengrassCreateDeviceDefinitionRequest#Name
   */
  readonly name?: string;

  /**
   * @schema GreengrassCreateDeviceDefinitionRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema GreengrassCreateDeviceDefinitionResponse
 */
export interface GreengrassCreateDeviceDefinitionResponse {
  /**
   * @schema GreengrassCreateDeviceDefinitionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassCreateDeviceDefinitionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassCreateDeviceDefinitionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassCreateDeviceDefinitionResponse#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema GreengrassCreateDeviceDefinitionResponse#LatestVersion
   */
  readonly latestVersion?: string;

  /**
   * @schema GreengrassCreateDeviceDefinitionResponse#LatestVersionArn
   */
  readonly latestVersionArn?: string;

  /**
   * @schema GreengrassCreateDeviceDefinitionResponse#Name
   */
  readonly name?: string;

}

/**
 * @schema GreengrassCreateDeviceDefinitionVersionRequest
 */
export interface GreengrassCreateDeviceDefinitionVersionRequest {
  /**
   * @schema GreengrassCreateDeviceDefinitionVersionRequest#AmznClientToken
   */
  readonly amznClientToken?: string;

  /**
   * @schema GreengrassCreateDeviceDefinitionVersionRequest#DeviceDefinitionId
   */
  readonly deviceDefinitionId: string;

  /**
   * @schema GreengrassCreateDeviceDefinitionVersionRequest#Devices
   */
  readonly devices?: GreengrassDevice[];

}

/**
 * @schema GreengrassCreateDeviceDefinitionVersionResponse
 */
export interface GreengrassCreateDeviceDefinitionVersionResponse {
  /**
   * @schema GreengrassCreateDeviceDefinitionVersionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassCreateDeviceDefinitionVersionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassCreateDeviceDefinitionVersionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassCreateDeviceDefinitionVersionResponse#Version
   */
  readonly version?: string;

}

/**
 * @schema GreengrassCreateFunctionDefinitionRequest
 */
export interface GreengrassCreateFunctionDefinitionRequest {
  /**
   * @schema GreengrassCreateFunctionDefinitionRequest#AmznClientToken
   */
  readonly amznClientToken?: string;

  /**
   * @schema GreengrassCreateFunctionDefinitionRequest#InitialVersion
   */
  readonly initialVersion?: GreengrassFunctionDefinitionVersion;

  /**
   * @schema GreengrassCreateFunctionDefinitionRequest#Name
   */
  readonly name?: string;

  /**
   * @schema GreengrassCreateFunctionDefinitionRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema GreengrassCreateFunctionDefinitionResponse
 */
export interface GreengrassCreateFunctionDefinitionResponse {
  /**
   * @schema GreengrassCreateFunctionDefinitionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassCreateFunctionDefinitionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassCreateFunctionDefinitionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassCreateFunctionDefinitionResponse#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema GreengrassCreateFunctionDefinitionResponse#LatestVersion
   */
  readonly latestVersion?: string;

  /**
   * @schema GreengrassCreateFunctionDefinitionResponse#LatestVersionArn
   */
  readonly latestVersionArn?: string;

  /**
   * @schema GreengrassCreateFunctionDefinitionResponse#Name
   */
  readonly name?: string;

}

/**
 * @schema GreengrassCreateFunctionDefinitionVersionRequest
 */
export interface GreengrassCreateFunctionDefinitionVersionRequest {
  /**
   * @schema GreengrassCreateFunctionDefinitionVersionRequest#AmznClientToken
   */
  readonly amznClientToken?: string;

  /**
   * @schema GreengrassCreateFunctionDefinitionVersionRequest#DefaultConfig
   */
  readonly defaultConfig?: GreengrassFunctionDefaultConfig;

  /**
   * @schema GreengrassCreateFunctionDefinitionVersionRequest#FunctionDefinitionId
   */
  readonly functionDefinitionId: string;

  /**
   * @schema GreengrassCreateFunctionDefinitionVersionRequest#Functions
   */
  readonly functions?: GreengrassFunction[];

}

/**
 * @schema GreengrassCreateFunctionDefinitionVersionResponse
 */
export interface GreengrassCreateFunctionDefinitionVersionResponse {
  /**
   * @schema GreengrassCreateFunctionDefinitionVersionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassCreateFunctionDefinitionVersionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassCreateFunctionDefinitionVersionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassCreateFunctionDefinitionVersionResponse#Version
   */
  readonly version?: string;

}

/**
 * @schema GreengrassCreateGroupRequest
 */
export interface GreengrassCreateGroupRequest {
  /**
   * @schema GreengrassCreateGroupRequest#AmznClientToken
   */
  readonly amznClientToken?: string;

  /**
   * @schema GreengrassCreateGroupRequest#InitialVersion
   */
  readonly initialVersion?: GreengrassGroupVersion;

  /**
   * @schema GreengrassCreateGroupRequest#Name
   */
  readonly name?: string;

  /**
   * @schema GreengrassCreateGroupRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema GreengrassCreateGroupResponse
 */
export interface GreengrassCreateGroupResponse {
  /**
   * @schema GreengrassCreateGroupResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassCreateGroupResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassCreateGroupResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassCreateGroupResponse#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema GreengrassCreateGroupResponse#LatestVersion
   */
  readonly latestVersion?: string;

  /**
   * @schema GreengrassCreateGroupResponse#LatestVersionArn
   */
  readonly latestVersionArn?: string;

  /**
   * @schema GreengrassCreateGroupResponse#Name
   */
  readonly name?: string;

}

/**
 * @schema GreengrassCreateGroupCertificateAuthorityRequest
 */
export interface GreengrassCreateGroupCertificateAuthorityRequest {
  /**
   * @schema GreengrassCreateGroupCertificateAuthorityRequest#AmznClientToken
   */
  readonly amznClientToken?: string;

  /**
   * @schema GreengrassCreateGroupCertificateAuthorityRequest#GroupId
   */
  readonly groupId: string;

}

/**
 * @schema GreengrassCreateGroupCertificateAuthorityResponse
 */
export interface GreengrassCreateGroupCertificateAuthorityResponse {
  /**
   * @schema GreengrassCreateGroupCertificateAuthorityResponse#GroupCertificateAuthorityArn
   */
  readonly groupCertificateAuthorityArn?: string;

}

/**
 * @schema GreengrassCreateGroupVersionRequest
 */
export interface GreengrassCreateGroupVersionRequest {
  /**
   * @schema GreengrassCreateGroupVersionRequest#AmznClientToken
   */
  readonly amznClientToken?: string;

  /**
   * @schema GreengrassCreateGroupVersionRequest#ConnectorDefinitionVersionArn
   */
  readonly connectorDefinitionVersionArn?: string;

  /**
   * @schema GreengrassCreateGroupVersionRequest#CoreDefinitionVersionArn
   */
  readonly coreDefinitionVersionArn?: string;

  /**
   * @schema GreengrassCreateGroupVersionRequest#DeviceDefinitionVersionArn
   */
  readonly deviceDefinitionVersionArn?: string;

  /**
   * @schema GreengrassCreateGroupVersionRequest#FunctionDefinitionVersionArn
   */
  readonly functionDefinitionVersionArn?: string;

  /**
   * @schema GreengrassCreateGroupVersionRequest#GroupId
   */
  readonly groupId: string;

  /**
   * @schema GreengrassCreateGroupVersionRequest#LoggerDefinitionVersionArn
   */
  readonly loggerDefinitionVersionArn?: string;

  /**
   * @schema GreengrassCreateGroupVersionRequest#ResourceDefinitionVersionArn
   */
  readonly resourceDefinitionVersionArn?: string;

  /**
   * @schema GreengrassCreateGroupVersionRequest#SubscriptionDefinitionVersionArn
   */
  readonly subscriptionDefinitionVersionArn?: string;

}

/**
 * @schema GreengrassCreateGroupVersionResponse
 */
export interface GreengrassCreateGroupVersionResponse {
  /**
   * @schema GreengrassCreateGroupVersionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassCreateGroupVersionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassCreateGroupVersionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassCreateGroupVersionResponse#Version
   */
  readonly version?: string;

}

/**
 * @schema GreengrassCreateLoggerDefinitionRequest
 */
export interface GreengrassCreateLoggerDefinitionRequest {
  /**
   * @schema GreengrassCreateLoggerDefinitionRequest#AmznClientToken
   */
  readonly amznClientToken?: string;

  /**
   * @schema GreengrassCreateLoggerDefinitionRequest#InitialVersion
   */
  readonly initialVersion?: GreengrassLoggerDefinitionVersion;

  /**
   * @schema GreengrassCreateLoggerDefinitionRequest#Name
   */
  readonly name?: string;

  /**
   * @schema GreengrassCreateLoggerDefinitionRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema GreengrassCreateLoggerDefinitionResponse
 */
export interface GreengrassCreateLoggerDefinitionResponse {
  /**
   * @schema GreengrassCreateLoggerDefinitionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassCreateLoggerDefinitionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassCreateLoggerDefinitionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassCreateLoggerDefinitionResponse#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema GreengrassCreateLoggerDefinitionResponse#LatestVersion
   */
  readonly latestVersion?: string;

  /**
   * @schema GreengrassCreateLoggerDefinitionResponse#LatestVersionArn
   */
  readonly latestVersionArn?: string;

  /**
   * @schema GreengrassCreateLoggerDefinitionResponse#Name
   */
  readonly name?: string;

}

/**
 * @schema GreengrassCreateLoggerDefinitionVersionRequest
 */
export interface GreengrassCreateLoggerDefinitionVersionRequest {
  /**
   * @schema GreengrassCreateLoggerDefinitionVersionRequest#AmznClientToken
   */
  readonly amznClientToken?: string;

  /**
   * @schema GreengrassCreateLoggerDefinitionVersionRequest#LoggerDefinitionId
   */
  readonly loggerDefinitionId: string;

  /**
   * @schema GreengrassCreateLoggerDefinitionVersionRequest#Loggers
   */
  readonly loggers?: GreengrassLogger[];

}

/**
 * @schema GreengrassCreateLoggerDefinitionVersionResponse
 */
export interface GreengrassCreateLoggerDefinitionVersionResponse {
  /**
   * @schema GreengrassCreateLoggerDefinitionVersionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassCreateLoggerDefinitionVersionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassCreateLoggerDefinitionVersionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassCreateLoggerDefinitionVersionResponse#Version
   */
  readonly version?: string;

}

/**
 * @schema GreengrassCreateResourceDefinitionRequest
 */
export interface GreengrassCreateResourceDefinitionRequest {
  /**
   * @schema GreengrassCreateResourceDefinitionRequest#AmznClientToken
   */
  readonly amznClientToken?: string;

  /**
   * @schema GreengrassCreateResourceDefinitionRequest#InitialVersion
   */
  readonly initialVersion?: GreengrassResourceDefinitionVersion;

  /**
   * @schema GreengrassCreateResourceDefinitionRequest#Name
   */
  readonly name?: string;

  /**
   * @schema GreengrassCreateResourceDefinitionRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema GreengrassCreateResourceDefinitionResponse
 */
export interface GreengrassCreateResourceDefinitionResponse {
  /**
   * @schema GreengrassCreateResourceDefinitionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassCreateResourceDefinitionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassCreateResourceDefinitionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassCreateResourceDefinitionResponse#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema GreengrassCreateResourceDefinitionResponse#LatestVersion
   */
  readonly latestVersion?: string;

  /**
   * @schema GreengrassCreateResourceDefinitionResponse#LatestVersionArn
   */
  readonly latestVersionArn?: string;

  /**
   * @schema GreengrassCreateResourceDefinitionResponse#Name
   */
  readonly name?: string;

}

/**
 * @schema GreengrassCreateResourceDefinitionVersionRequest
 */
export interface GreengrassCreateResourceDefinitionVersionRequest {
  /**
   * @schema GreengrassCreateResourceDefinitionVersionRequest#AmznClientToken
   */
  readonly amznClientToken?: string;

  /**
   * @schema GreengrassCreateResourceDefinitionVersionRequest#ResourceDefinitionId
   */
  readonly resourceDefinitionId: string;

  /**
   * @schema GreengrassCreateResourceDefinitionVersionRequest#Resources
   */
  readonly resources?: GreengrassResource[];

}

/**
 * @schema GreengrassCreateResourceDefinitionVersionResponse
 */
export interface GreengrassCreateResourceDefinitionVersionResponse {
  /**
   * @schema GreengrassCreateResourceDefinitionVersionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassCreateResourceDefinitionVersionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassCreateResourceDefinitionVersionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassCreateResourceDefinitionVersionResponse#Version
   */
  readonly version?: string;

}

/**
 * @schema GreengrassCreateSoftwareUpdateJobRequest
 */
export interface GreengrassCreateSoftwareUpdateJobRequest {
  /**
   * @schema GreengrassCreateSoftwareUpdateJobRequest#AmznClientToken
   */
  readonly amznClientToken?: string;

  /**
   * @schema GreengrassCreateSoftwareUpdateJobRequest#S3UrlSignerRole
   */
  readonly s3UrlSignerRole: string;

  /**
   * @schema GreengrassCreateSoftwareUpdateJobRequest#SoftwareToUpdate
   */
  readonly softwareToUpdate: string;

  /**
   * @schema GreengrassCreateSoftwareUpdateJobRequest#UpdateAgentLogLevel
   */
  readonly updateAgentLogLevel?: string;

  /**
   * @schema GreengrassCreateSoftwareUpdateJobRequest#UpdateTargets
   */
  readonly updateTargets: string[];

  /**
   * @schema GreengrassCreateSoftwareUpdateJobRequest#UpdateTargetsArchitecture
   */
  readonly updateTargetsArchitecture: string;

  /**
   * @schema GreengrassCreateSoftwareUpdateJobRequest#UpdateTargetsOperatingSystem
   */
  readonly updateTargetsOperatingSystem: string;

}

/**
 * @schema GreengrassCreateSoftwareUpdateJobResponse
 */
export interface GreengrassCreateSoftwareUpdateJobResponse {
  /**
   * @schema GreengrassCreateSoftwareUpdateJobResponse#IotJobArn
   */
  readonly iotJobArn?: string;

  /**
   * @schema GreengrassCreateSoftwareUpdateJobResponse#IotJobId
   */
  readonly iotJobId?: string;

  /**
   * @schema GreengrassCreateSoftwareUpdateJobResponse#PlatformSoftwareVersion
   */
  readonly platformSoftwareVersion?: string;

}

/**
 * @schema GreengrassCreateSubscriptionDefinitionRequest
 */
export interface GreengrassCreateSubscriptionDefinitionRequest {
  /**
   * @schema GreengrassCreateSubscriptionDefinitionRequest#AmznClientToken
   */
  readonly amznClientToken?: string;

  /**
   * @schema GreengrassCreateSubscriptionDefinitionRequest#InitialVersion
   */
  readonly initialVersion?: GreengrassSubscriptionDefinitionVersion;

  /**
   * @schema GreengrassCreateSubscriptionDefinitionRequest#Name
   */
  readonly name?: string;

  /**
   * @schema GreengrassCreateSubscriptionDefinitionRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema GreengrassCreateSubscriptionDefinitionResponse
 */
export interface GreengrassCreateSubscriptionDefinitionResponse {
  /**
   * @schema GreengrassCreateSubscriptionDefinitionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassCreateSubscriptionDefinitionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassCreateSubscriptionDefinitionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassCreateSubscriptionDefinitionResponse#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema GreengrassCreateSubscriptionDefinitionResponse#LatestVersion
   */
  readonly latestVersion?: string;

  /**
   * @schema GreengrassCreateSubscriptionDefinitionResponse#LatestVersionArn
   */
  readonly latestVersionArn?: string;

  /**
   * @schema GreengrassCreateSubscriptionDefinitionResponse#Name
   */
  readonly name?: string;

}

/**
 * @schema GreengrassCreateSubscriptionDefinitionVersionRequest
 */
export interface GreengrassCreateSubscriptionDefinitionVersionRequest {
  /**
   * @schema GreengrassCreateSubscriptionDefinitionVersionRequest#AmznClientToken
   */
  readonly amznClientToken?: string;

  /**
   * @schema GreengrassCreateSubscriptionDefinitionVersionRequest#SubscriptionDefinitionId
   */
  readonly subscriptionDefinitionId: string;

  /**
   * @schema GreengrassCreateSubscriptionDefinitionVersionRequest#Subscriptions
   */
  readonly subscriptions?: GreengrassSubscription[];

}

/**
 * @schema GreengrassCreateSubscriptionDefinitionVersionResponse
 */
export interface GreengrassCreateSubscriptionDefinitionVersionResponse {
  /**
   * @schema GreengrassCreateSubscriptionDefinitionVersionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassCreateSubscriptionDefinitionVersionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassCreateSubscriptionDefinitionVersionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassCreateSubscriptionDefinitionVersionResponse#Version
   */
  readonly version?: string;

}

/**
 * @schema GreengrassDeleteConnectorDefinitionRequest
 */
export interface GreengrassDeleteConnectorDefinitionRequest {
  /**
   * @schema GreengrassDeleteConnectorDefinitionRequest#ConnectorDefinitionId
   */
  readonly connectorDefinitionId: string;

}

/**
 * @schema GreengrassDeleteConnectorDefinitionResponse
 */
export interface GreengrassDeleteConnectorDefinitionResponse {
}

/**
 * @schema GreengrassDeleteCoreDefinitionRequest
 */
export interface GreengrassDeleteCoreDefinitionRequest {
  /**
   * @schema GreengrassDeleteCoreDefinitionRequest#CoreDefinitionId
   */
  readonly coreDefinitionId: string;

}

/**
 * @schema GreengrassDeleteCoreDefinitionResponse
 */
export interface GreengrassDeleteCoreDefinitionResponse {
}

/**
 * @schema GreengrassDeleteDeviceDefinitionRequest
 */
export interface GreengrassDeleteDeviceDefinitionRequest {
  /**
   * @schema GreengrassDeleteDeviceDefinitionRequest#DeviceDefinitionId
   */
  readonly deviceDefinitionId: string;

}

/**
 * @schema GreengrassDeleteDeviceDefinitionResponse
 */
export interface GreengrassDeleteDeviceDefinitionResponse {
}

/**
 * @schema GreengrassDeleteFunctionDefinitionRequest
 */
export interface GreengrassDeleteFunctionDefinitionRequest {
  /**
   * @schema GreengrassDeleteFunctionDefinitionRequest#FunctionDefinitionId
   */
  readonly functionDefinitionId: string;

}

/**
 * @schema GreengrassDeleteFunctionDefinitionResponse
 */
export interface GreengrassDeleteFunctionDefinitionResponse {
}

/**
 * @schema GreengrassDeleteGroupRequest
 */
export interface GreengrassDeleteGroupRequest {
  /**
   * @schema GreengrassDeleteGroupRequest#GroupId
   */
  readonly groupId: string;

}

/**
 * @schema GreengrassDeleteGroupResponse
 */
export interface GreengrassDeleteGroupResponse {
}

/**
 * @schema GreengrassDeleteLoggerDefinitionRequest
 */
export interface GreengrassDeleteLoggerDefinitionRequest {
  /**
   * @schema GreengrassDeleteLoggerDefinitionRequest#LoggerDefinitionId
   */
  readonly loggerDefinitionId: string;

}

/**
 * @schema GreengrassDeleteLoggerDefinitionResponse
 */
export interface GreengrassDeleteLoggerDefinitionResponse {
}

/**
 * @schema GreengrassDeleteResourceDefinitionRequest
 */
export interface GreengrassDeleteResourceDefinitionRequest {
  /**
   * @schema GreengrassDeleteResourceDefinitionRequest#ResourceDefinitionId
   */
  readonly resourceDefinitionId: string;

}

/**
 * @schema GreengrassDeleteResourceDefinitionResponse
 */
export interface GreengrassDeleteResourceDefinitionResponse {
}

/**
 * @schema GreengrassDeleteSubscriptionDefinitionRequest
 */
export interface GreengrassDeleteSubscriptionDefinitionRequest {
  /**
   * @schema GreengrassDeleteSubscriptionDefinitionRequest#SubscriptionDefinitionId
   */
  readonly subscriptionDefinitionId: string;

}

/**
 * @schema GreengrassDeleteSubscriptionDefinitionResponse
 */
export interface GreengrassDeleteSubscriptionDefinitionResponse {
}

/**
 * @schema GreengrassDisassociateRoleFromGroupRequest
 */
export interface GreengrassDisassociateRoleFromGroupRequest {
  /**
   * @schema GreengrassDisassociateRoleFromGroupRequest#GroupId
   */
  readonly groupId: string;

}

/**
 * @schema GreengrassDisassociateRoleFromGroupResponse
 */
export interface GreengrassDisassociateRoleFromGroupResponse {
  /**
   * @schema GreengrassDisassociateRoleFromGroupResponse#DisassociatedAt
   */
  readonly disassociatedAt?: string;

}

/**
 * @schema GreengrassDisassociateServiceRoleFromAccountRequest
 */
export interface GreengrassDisassociateServiceRoleFromAccountRequest {
}

/**
 * @schema GreengrassDisassociateServiceRoleFromAccountResponse
 */
export interface GreengrassDisassociateServiceRoleFromAccountResponse {
  /**
   * @schema GreengrassDisassociateServiceRoleFromAccountResponse#DisassociatedAt
   */
  readonly disassociatedAt?: string;

}

/**
 * @schema GreengrassGetAssociatedRoleRequest
 */
export interface GreengrassGetAssociatedRoleRequest {
  /**
   * @schema GreengrassGetAssociatedRoleRequest#GroupId
   */
  readonly groupId: string;

}

/**
 * @schema GreengrassGetAssociatedRoleResponse
 */
export interface GreengrassGetAssociatedRoleResponse {
  /**
   * @schema GreengrassGetAssociatedRoleResponse#AssociatedAt
   */
  readonly associatedAt?: string;

  /**
   * @schema GreengrassGetAssociatedRoleResponse#RoleArn
   */
  readonly roleArn?: string;

}

/**
 * @schema GreengrassGetBulkDeploymentStatusRequest
 */
export interface GreengrassGetBulkDeploymentStatusRequest {
  /**
   * @schema GreengrassGetBulkDeploymentStatusRequest#BulkDeploymentId
   */
  readonly bulkDeploymentId: string;

}

/**
 * @schema GreengrassGetBulkDeploymentStatusResponse
 */
export interface GreengrassGetBulkDeploymentStatusResponse {
  /**
   * @schema GreengrassGetBulkDeploymentStatusResponse#BulkDeploymentMetrics
   */
  readonly bulkDeploymentMetrics?: GreengrassBulkDeploymentMetrics;

  /**
   * @schema GreengrassGetBulkDeploymentStatusResponse#BulkDeploymentStatus
   */
  readonly bulkDeploymentStatus?: string;

  /**
   * @schema GreengrassGetBulkDeploymentStatusResponse#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema GreengrassGetBulkDeploymentStatusResponse#ErrorDetails
   */
  readonly errorDetails?: GreengrassErrorDetail[];

  /**
   * @schema GreengrassGetBulkDeploymentStatusResponse#ErrorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema GreengrassGetBulkDeploymentStatusResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema GreengrassGetConnectivityInfoRequest
 */
export interface GreengrassGetConnectivityInfoRequest {
  /**
   * @schema GreengrassGetConnectivityInfoRequest#ThingName
   */
  readonly thingName: string;

}

/**
 * @schema GreengrassGetConnectivityInfoResponse
 */
export interface GreengrassGetConnectivityInfoResponse {
  /**
   * @schema GreengrassGetConnectivityInfoResponse#ConnectivityInfo
   */
  readonly connectivityInfo?: GreengrassConnectivityInfo[];

  /**
   * @schema GreengrassGetConnectivityInfoResponse#Message
   */
  readonly message?: string;

}

/**
 * @schema GreengrassGetConnectorDefinitionRequest
 */
export interface GreengrassGetConnectorDefinitionRequest {
  /**
   * @schema GreengrassGetConnectorDefinitionRequest#ConnectorDefinitionId
   */
  readonly connectorDefinitionId: string;

}

/**
 * @schema GreengrassGetConnectorDefinitionResponse
 */
export interface GreengrassGetConnectorDefinitionResponse {
  /**
   * @schema GreengrassGetConnectorDefinitionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassGetConnectorDefinitionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassGetConnectorDefinitionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassGetConnectorDefinitionResponse#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema GreengrassGetConnectorDefinitionResponse#LatestVersion
   */
  readonly latestVersion?: string;

  /**
   * @schema GreengrassGetConnectorDefinitionResponse#LatestVersionArn
   */
  readonly latestVersionArn?: string;

  /**
   * @schema GreengrassGetConnectorDefinitionResponse#Name
   */
  readonly name?: string;

  /**
   * @schema GreengrassGetConnectorDefinitionResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema GreengrassGetConnectorDefinitionVersionRequest
 */
export interface GreengrassGetConnectorDefinitionVersionRequest {
  /**
   * @schema GreengrassGetConnectorDefinitionVersionRequest#ConnectorDefinitionId
   */
  readonly connectorDefinitionId: string;

  /**
   * @schema GreengrassGetConnectorDefinitionVersionRequest#ConnectorDefinitionVersionId
   */
  readonly connectorDefinitionVersionId: string;

  /**
   * @schema GreengrassGetConnectorDefinitionVersionRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GreengrassGetConnectorDefinitionVersionResponse
 */
export interface GreengrassGetConnectorDefinitionVersionResponse {
  /**
   * @schema GreengrassGetConnectorDefinitionVersionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassGetConnectorDefinitionVersionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassGetConnectorDefinitionVersionResponse#Definition
   */
  readonly definition?: GreengrassConnectorDefinitionVersion;

  /**
   * @schema GreengrassGetConnectorDefinitionVersionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassGetConnectorDefinitionVersionResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GreengrassGetConnectorDefinitionVersionResponse#Version
   */
  readonly version?: string;

}

/**
 * @schema GreengrassGetCoreDefinitionRequest
 */
export interface GreengrassGetCoreDefinitionRequest {
  /**
   * @schema GreengrassGetCoreDefinitionRequest#CoreDefinitionId
   */
  readonly coreDefinitionId: string;

}

/**
 * @schema GreengrassGetCoreDefinitionResponse
 */
export interface GreengrassGetCoreDefinitionResponse {
  /**
   * @schema GreengrassGetCoreDefinitionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassGetCoreDefinitionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassGetCoreDefinitionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassGetCoreDefinitionResponse#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema GreengrassGetCoreDefinitionResponse#LatestVersion
   */
  readonly latestVersion?: string;

  /**
   * @schema GreengrassGetCoreDefinitionResponse#LatestVersionArn
   */
  readonly latestVersionArn?: string;

  /**
   * @schema GreengrassGetCoreDefinitionResponse#Name
   */
  readonly name?: string;

  /**
   * @schema GreengrassGetCoreDefinitionResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema GreengrassGetCoreDefinitionVersionRequest
 */
export interface GreengrassGetCoreDefinitionVersionRequest {
  /**
   * @schema GreengrassGetCoreDefinitionVersionRequest#CoreDefinitionId
   */
  readonly coreDefinitionId: string;

  /**
   * @schema GreengrassGetCoreDefinitionVersionRequest#CoreDefinitionVersionId
   */
  readonly coreDefinitionVersionId: string;

}

/**
 * @schema GreengrassGetCoreDefinitionVersionResponse
 */
export interface GreengrassGetCoreDefinitionVersionResponse {
  /**
   * @schema GreengrassGetCoreDefinitionVersionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassGetCoreDefinitionVersionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassGetCoreDefinitionVersionResponse#Definition
   */
  readonly definition?: GreengrassCoreDefinitionVersion;

  /**
   * @schema GreengrassGetCoreDefinitionVersionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassGetCoreDefinitionVersionResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GreengrassGetCoreDefinitionVersionResponse#Version
   */
  readonly version?: string;

}

/**
 * @schema GreengrassGetDeploymentStatusRequest
 */
export interface GreengrassGetDeploymentStatusRequest {
  /**
   * @schema GreengrassGetDeploymentStatusRequest#DeploymentId
   */
  readonly deploymentId: string;

  /**
   * @schema GreengrassGetDeploymentStatusRequest#GroupId
   */
  readonly groupId: string;

}

/**
 * @schema GreengrassGetDeploymentStatusResponse
 */
export interface GreengrassGetDeploymentStatusResponse {
  /**
   * @schema GreengrassGetDeploymentStatusResponse#DeploymentStatus
   */
  readonly deploymentStatus?: string;

  /**
   * @schema GreengrassGetDeploymentStatusResponse#DeploymentType
   */
  readonly deploymentType?: string;

  /**
   * @schema GreengrassGetDeploymentStatusResponse#ErrorDetails
   */
  readonly errorDetails?: GreengrassErrorDetail[];

  /**
   * @schema GreengrassGetDeploymentStatusResponse#ErrorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema GreengrassGetDeploymentStatusResponse#UpdatedAt
   */
  readonly updatedAt?: string;

}

/**
 * @schema GreengrassGetDeviceDefinitionRequest
 */
export interface GreengrassGetDeviceDefinitionRequest {
  /**
   * @schema GreengrassGetDeviceDefinitionRequest#DeviceDefinitionId
   */
  readonly deviceDefinitionId: string;

}

/**
 * @schema GreengrassGetDeviceDefinitionResponse
 */
export interface GreengrassGetDeviceDefinitionResponse {
  /**
   * @schema GreengrassGetDeviceDefinitionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassGetDeviceDefinitionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassGetDeviceDefinitionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassGetDeviceDefinitionResponse#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema GreengrassGetDeviceDefinitionResponse#LatestVersion
   */
  readonly latestVersion?: string;

  /**
   * @schema GreengrassGetDeviceDefinitionResponse#LatestVersionArn
   */
  readonly latestVersionArn?: string;

  /**
   * @schema GreengrassGetDeviceDefinitionResponse#Name
   */
  readonly name?: string;

  /**
   * @schema GreengrassGetDeviceDefinitionResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema GreengrassGetDeviceDefinitionVersionRequest
 */
export interface GreengrassGetDeviceDefinitionVersionRequest {
  /**
   * @schema GreengrassGetDeviceDefinitionVersionRequest#DeviceDefinitionId
   */
  readonly deviceDefinitionId: string;

  /**
   * @schema GreengrassGetDeviceDefinitionVersionRequest#DeviceDefinitionVersionId
   */
  readonly deviceDefinitionVersionId: string;

  /**
   * @schema GreengrassGetDeviceDefinitionVersionRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GreengrassGetDeviceDefinitionVersionResponse
 */
export interface GreengrassGetDeviceDefinitionVersionResponse {
  /**
   * @schema GreengrassGetDeviceDefinitionVersionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassGetDeviceDefinitionVersionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassGetDeviceDefinitionVersionResponse#Definition
   */
  readonly definition?: GreengrassDeviceDefinitionVersion;

  /**
   * @schema GreengrassGetDeviceDefinitionVersionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassGetDeviceDefinitionVersionResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GreengrassGetDeviceDefinitionVersionResponse#Version
   */
  readonly version?: string;

}

/**
 * @schema GreengrassGetFunctionDefinitionRequest
 */
export interface GreengrassGetFunctionDefinitionRequest {
  /**
   * @schema GreengrassGetFunctionDefinitionRequest#FunctionDefinitionId
   */
  readonly functionDefinitionId: string;

}

/**
 * @schema GreengrassGetFunctionDefinitionResponse
 */
export interface GreengrassGetFunctionDefinitionResponse {
  /**
   * @schema GreengrassGetFunctionDefinitionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassGetFunctionDefinitionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassGetFunctionDefinitionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassGetFunctionDefinitionResponse#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema GreengrassGetFunctionDefinitionResponse#LatestVersion
   */
  readonly latestVersion?: string;

  /**
   * @schema GreengrassGetFunctionDefinitionResponse#LatestVersionArn
   */
  readonly latestVersionArn?: string;

  /**
   * @schema GreengrassGetFunctionDefinitionResponse#Name
   */
  readonly name?: string;

  /**
   * @schema GreengrassGetFunctionDefinitionResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema GreengrassGetFunctionDefinitionVersionRequest
 */
export interface GreengrassGetFunctionDefinitionVersionRequest {
  /**
   * @schema GreengrassGetFunctionDefinitionVersionRequest#FunctionDefinitionId
   */
  readonly functionDefinitionId: string;

  /**
   * @schema GreengrassGetFunctionDefinitionVersionRequest#FunctionDefinitionVersionId
   */
  readonly functionDefinitionVersionId: string;

  /**
   * @schema GreengrassGetFunctionDefinitionVersionRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GreengrassGetFunctionDefinitionVersionResponse
 */
export interface GreengrassGetFunctionDefinitionVersionResponse {
  /**
   * @schema GreengrassGetFunctionDefinitionVersionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassGetFunctionDefinitionVersionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassGetFunctionDefinitionVersionResponse#Definition
   */
  readonly definition?: GreengrassFunctionDefinitionVersion;

  /**
   * @schema GreengrassGetFunctionDefinitionVersionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassGetFunctionDefinitionVersionResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GreengrassGetFunctionDefinitionVersionResponse#Version
   */
  readonly version?: string;

}

/**
 * @schema GreengrassGetGroupRequest
 */
export interface GreengrassGetGroupRequest {
  /**
   * @schema GreengrassGetGroupRequest#GroupId
   */
  readonly groupId: string;

}

/**
 * @schema GreengrassGetGroupResponse
 */
export interface GreengrassGetGroupResponse {
  /**
   * @schema GreengrassGetGroupResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassGetGroupResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassGetGroupResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassGetGroupResponse#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema GreengrassGetGroupResponse#LatestVersion
   */
  readonly latestVersion?: string;

  /**
   * @schema GreengrassGetGroupResponse#LatestVersionArn
   */
  readonly latestVersionArn?: string;

  /**
   * @schema GreengrassGetGroupResponse#Name
   */
  readonly name?: string;

  /**
   * @schema GreengrassGetGroupResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema GreengrassGetGroupCertificateAuthorityRequest
 */
export interface GreengrassGetGroupCertificateAuthorityRequest {
  /**
   * @schema GreengrassGetGroupCertificateAuthorityRequest#CertificateAuthorityId
   */
  readonly certificateAuthorityId: string;

  /**
   * @schema GreengrassGetGroupCertificateAuthorityRequest#GroupId
   */
  readonly groupId: string;

}

/**
 * @schema GreengrassGetGroupCertificateAuthorityResponse
 */
export interface GreengrassGetGroupCertificateAuthorityResponse {
  /**
   * @schema GreengrassGetGroupCertificateAuthorityResponse#GroupCertificateAuthorityArn
   */
  readonly groupCertificateAuthorityArn?: string;

  /**
   * @schema GreengrassGetGroupCertificateAuthorityResponse#GroupCertificateAuthorityId
   */
  readonly groupCertificateAuthorityId?: string;

  /**
   * @schema GreengrassGetGroupCertificateAuthorityResponse#PemEncodedCertificate
   */
  readonly pemEncodedCertificate?: string;

}

/**
 * @schema GreengrassGetGroupCertificateConfigurationRequest
 */
export interface GreengrassGetGroupCertificateConfigurationRequest {
  /**
   * @schema GreengrassGetGroupCertificateConfigurationRequest#GroupId
   */
  readonly groupId: string;

}

/**
 * @schema GreengrassGetGroupCertificateConfigurationResponse
 */
export interface GreengrassGetGroupCertificateConfigurationResponse {
  /**
   * @schema GreengrassGetGroupCertificateConfigurationResponse#CertificateAuthorityExpiryInMilliseconds
   */
  readonly certificateAuthorityExpiryInMilliseconds?: string;

  /**
   * @schema GreengrassGetGroupCertificateConfigurationResponse#CertificateExpiryInMilliseconds
   */
  readonly certificateExpiryInMilliseconds?: string;

  /**
   * @schema GreengrassGetGroupCertificateConfigurationResponse#GroupId
   */
  readonly groupId?: string;

}

/**
 * @schema GreengrassGetGroupVersionRequest
 */
export interface GreengrassGetGroupVersionRequest {
  /**
   * @schema GreengrassGetGroupVersionRequest#GroupId
   */
  readonly groupId: string;

  /**
   * @schema GreengrassGetGroupVersionRequest#GroupVersionId
   */
  readonly groupVersionId: string;

}

/**
 * @schema GreengrassGetGroupVersionResponse
 */
export interface GreengrassGetGroupVersionResponse {
  /**
   * @schema GreengrassGetGroupVersionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassGetGroupVersionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassGetGroupVersionResponse#Definition
   */
  readonly definition?: GreengrassGroupVersion;

  /**
   * @schema GreengrassGetGroupVersionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassGetGroupVersionResponse#Version
   */
  readonly version?: string;

}

/**
 * @schema GreengrassGetLoggerDefinitionRequest
 */
export interface GreengrassGetLoggerDefinitionRequest {
  /**
   * @schema GreengrassGetLoggerDefinitionRequest#LoggerDefinitionId
   */
  readonly loggerDefinitionId: string;

}

/**
 * @schema GreengrassGetLoggerDefinitionResponse
 */
export interface GreengrassGetLoggerDefinitionResponse {
  /**
   * @schema GreengrassGetLoggerDefinitionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassGetLoggerDefinitionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassGetLoggerDefinitionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassGetLoggerDefinitionResponse#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema GreengrassGetLoggerDefinitionResponse#LatestVersion
   */
  readonly latestVersion?: string;

  /**
   * @schema GreengrassGetLoggerDefinitionResponse#LatestVersionArn
   */
  readonly latestVersionArn?: string;

  /**
   * @schema GreengrassGetLoggerDefinitionResponse#Name
   */
  readonly name?: string;

  /**
   * @schema GreengrassGetLoggerDefinitionResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema GreengrassGetLoggerDefinitionVersionRequest
 */
export interface GreengrassGetLoggerDefinitionVersionRequest {
  /**
   * @schema GreengrassGetLoggerDefinitionVersionRequest#LoggerDefinitionId
   */
  readonly loggerDefinitionId: string;

  /**
   * @schema GreengrassGetLoggerDefinitionVersionRequest#LoggerDefinitionVersionId
   */
  readonly loggerDefinitionVersionId: string;

  /**
   * @schema GreengrassGetLoggerDefinitionVersionRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GreengrassGetLoggerDefinitionVersionResponse
 */
export interface GreengrassGetLoggerDefinitionVersionResponse {
  /**
   * @schema GreengrassGetLoggerDefinitionVersionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassGetLoggerDefinitionVersionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassGetLoggerDefinitionVersionResponse#Definition
   */
  readonly definition?: GreengrassLoggerDefinitionVersion;

  /**
   * @schema GreengrassGetLoggerDefinitionVersionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassGetLoggerDefinitionVersionResponse#Version
   */
  readonly version?: string;

}

/**
 * @schema GreengrassGetResourceDefinitionRequest
 */
export interface GreengrassGetResourceDefinitionRequest {
  /**
   * @schema GreengrassGetResourceDefinitionRequest#ResourceDefinitionId
   */
  readonly resourceDefinitionId: string;

}

/**
 * @schema GreengrassGetResourceDefinitionResponse
 */
export interface GreengrassGetResourceDefinitionResponse {
  /**
   * @schema GreengrassGetResourceDefinitionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassGetResourceDefinitionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassGetResourceDefinitionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassGetResourceDefinitionResponse#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema GreengrassGetResourceDefinitionResponse#LatestVersion
   */
  readonly latestVersion?: string;

  /**
   * @schema GreengrassGetResourceDefinitionResponse#LatestVersionArn
   */
  readonly latestVersionArn?: string;

  /**
   * @schema GreengrassGetResourceDefinitionResponse#Name
   */
  readonly name?: string;

  /**
   * @schema GreengrassGetResourceDefinitionResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema GreengrassGetResourceDefinitionVersionRequest
 */
export interface GreengrassGetResourceDefinitionVersionRequest {
  /**
   * @schema GreengrassGetResourceDefinitionVersionRequest#ResourceDefinitionId
   */
  readonly resourceDefinitionId: string;

  /**
   * @schema GreengrassGetResourceDefinitionVersionRequest#ResourceDefinitionVersionId
   */
  readonly resourceDefinitionVersionId: string;

}

/**
 * @schema GreengrassGetResourceDefinitionVersionResponse
 */
export interface GreengrassGetResourceDefinitionVersionResponse {
  /**
   * @schema GreengrassGetResourceDefinitionVersionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassGetResourceDefinitionVersionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassGetResourceDefinitionVersionResponse#Definition
   */
  readonly definition?: GreengrassResourceDefinitionVersion;

  /**
   * @schema GreengrassGetResourceDefinitionVersionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassGetResourceDefinitionVersionResponse#Version
   */
  readonly version?: string;

}

/**
 * @schema GreengrassGetServiceRoleForAccountRequest
 */
export interface GreengrassGetServiceRoleForAccountRequest {
}

/**
 * @schema GreengrassGetServiceRoleForAccountResponse
 */
export interface GreengrassGetServiceRoleForAccountResponse {
  /**
   * @schema GreengrassGetServiceRoleForAccountResponse#AssociatedAt
   */
  readonly associatedAt?: string;

  /**
   * @schema GreengrassGetServiceRoleForAccountResponse#RoleArn
   */
  readonly roleArn?: string;

}

/**
 * @schema GreengrassGetSubscriptionDefinitionRequest
 */
export interface GreengrassGetSubscriptionDefinitionRequest {
  /**
   * @schema GreengrassGetSubscriptionDefinitionRequest#SubscriptionDefinitionId
   */
  readonly subscriptionDefinitionId: string;

}

/**
 * @schema GreengrassGetSubscriptionDefinitionResponse
 */
export interface GreengrassGetSubscriptionDefinitionResponse {
  /**
   * @schema GreengrassGetSubscriptionDefinitionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassGetSubscriptionDefinitionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassGetSubscriptionDefinitionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassGetSubscriptionDefinitionResponse#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema GreengrassGetSubscriptionDefinitionResponse#LatestVersion
   */
  readonly latestVersion?: string;

  /**
   * @schema GreengrassGetSubscriptionDefinitionResponse#LatestVersionArn
   */
  readonly latestVersionArn?: string;

  /**
   * @schema GreengrassGetSubscriptionDefinitionResponse#Name
   */
  readonly name?: string;

  /**
   * @schema GreengrassGetSubscriptionDefinitionResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema GreengrassGetSubscriptionDefinitionVersionRequest
 */
export interface GreengrassGetSubscriptionDefinitionVersionRequest {
  /**
   * @schema GreengrassGetSubscriptionDefinitionVersionRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GreengrassGetSubscriptionDefinitionVersionRequest#SubscriptionDefinitionId
   */
  readonly subscriptionDefinitionId: string;

  /**
   * @schema GreengrassGetSubscriptionDefinitionVersionRequest#SubscriptionDefinitionVersionId
   */
  readonly subscriptionDefinitionVersionId: string;

}

/**
 * @schema GreengrassGetSubscriptionDefinitionVersionResponse
 */
export interface GreengrassGetSubscriptionDefinitionVersionResponse {
  /**
   * @schema GreengrassGetSubscriptionDefinitionVersionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassGetSubscriptionDefinitionVersionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassGetSubscriptionDefinitionVersionResponse#Definition
   */
  readonly definition?: GreengrassSubscriptionDefinitionVersion;

  /**
   * @schema GreengrassGetSubscriptionDefinitionVersionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassGetSubscriptionDefinitionVersionResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GreengrassGetSubscriptionDefinitionVersionResponse#Version
   */
  readonly version?: string;

}

/**
 * @schema GreengrassGetThingRuntimeConfigurationRequest
 */
export interface GreengrassGetThingRuntimeConfigurationRequest {
  /**
   * @schema GreengrassGetThingRuntimeConfigurationRequest#ThingName
   */
  readonly thingName: string;

}

/**
 * @schema GreengrassGetThingRuntimeConfigurationResponse
 */
export interface GreengrassGetThingRuntimeConfigurationResponse {
  /**
   * @schema GreengrassGetThingRuntimeConfigurationResponse#RuntimeConfiguration
   */
  readonly runtimeConfiguration?: GreengrassRuntimeConfiguration;

}

/**
 * @schema GreengrassListBulkDeploymentDetailedReportsRequest
 */
export interface GreengrassListBulkDeploymentDetailedReportsRequest {
  /**
   * @schema GreengrassListBulkDeploymentDetailedReportsRequest#BulkDeploymentId
   */
  readonly bulkDeploymentId: string;

  /**
   * @schema GreengrassListBulkDeploymentDetailedReportsRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema GreengrassListBulkDeploymentDetailedReportsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GreengrassListBulkDeploymentDetailedReportsResponse
 */
export interface GreengrassListBulkDeploymentDetailedReportsResponse {
  /**
   * @schema GreengrassListBulkDeploymentDetailedReportsResponse#Deployments
   */
  readonly deployments?: GreengrassBulkDeploymentResult[];

  /**
   * @schema GreengrassListBulkDeploymentDetailedReportsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GreengrassListBulkDeploymentsRequest
 */
export interface GreengrassListBulkDeploymentsRequest {
  /**
   * @schema GreengrassListBulkDeploymentsRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema GreengrassListBulkDeploymentsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GreengrassListBulkDeploymentsResponse
 */
export interface GreengrassListBulkDeploymentsResponse {
  /**
   * @schema GreengrassListBulkDeploymentsResponse#BulkDeployments
   */
  readonly bulkDeployments?: GreengrassBulkDeployment[];

  /**
   * @schema GreengrassListBulkDeploymentsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GreengrassListConnectorDefinitionVersionsRequest
 */
export interface GreengrassListConnectorDefinitionVersionsRequest {
  /**
   * @schema GreengrassListConnectorDefinitionVersionsRequest#ConnectorDefinitionId
   */
  readonly connectorDefinitionId: string;

  /**
   * @schema GreengrassListConnectorDefinitionVersionsRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema GreengrassListConnectorDefinitionVersionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GreengrassListConnectorDefinitionVersionsResponse
 */
export interface GreengrassListConnectorDefinitionVersionsResponse {
  /**
   * @schema GreengrassListConnectorDefinitionVersionsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GreengrassListConnectorDefinitionVersionsResponse#Versions
   */
  readonly versions?: GreengrassVersionInformation[];

}

/**
 * @schema GreengrassListConnectorDefinitionsRequest
 */
export interface GreengrassListConnectorDefinitionsRequest {
  /**
   * @schema GreengrassListConnectorDefinitionsRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema GreengrassListConnectorDefinitionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GreengrassListConnectorDefinitionsResponse
 */
export interface GreengrassListConnectorDefinitionsResponse {
  /**
   * @schema GreengrassListConnectorDefinitionsResponse#Definitions
   */
  readonly definitions?: GreengrassDefinitionInformation[];

  /**
   * @schema GreengrassListConnectorDefinitionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GreengrassListCoreDefinitionVersionsRequest
 */
export interface GreengrassListCoreDefinitionVersionsRequest {
  /**
   * @schema GreengrassListCoreDefinitionVersionsRequest#CoreDefinitionId
   */
  readonly coreDefinitionId: string;

  /**
   * @schema GreengrassListCoreDefinitionVersionsRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema GreengrassListCoreDefinitionVersionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GreengrassListCoreDefinitionVersionsResponse
 */
export interface GreengrassListCoreDefinitionVersionsResponse {
  /**
   * @schema GreengrassListCoreDefinitionVersionsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GreengrassListCoreDefinitionVersionsResponse#Versions
   */
  readonly versions?: GreengrassVersionInformation[];

}

/**
 * @schema GreengrassListCoreDefinitionsRequest
 */
export interface GreengrassListCoreDefinitionsRequest {
  /**
   * @schema GreengrassListCoreDefinitionsRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema GreengrassListCoreDefinitionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GreengrassListCoreDefinitionsResponse
 */
export interface GreengrassListCoreDefinitionsResponse {
  /**
   * @schema GreengrassListCoreDefinitionsResponse#Definitions
   */
  readonly definitions?: GreengrassDefinitionInformation[];

  /**
   * @schema GreengrassListCoreDefinitionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GreengrassListDeploymentsRequest
 */
export interface GreengrassListDeploymentsRequest {
  /**
   * @schema GreengrassListDeploymentsRequest#GroupId
   */
  readonly groupId: string;

  /**
   * @schema GreengrassListDeploymentsRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema GreengrassListDeploymentsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GreengrassListDeploymentsResponse
 */
export interface GreengrassListDeploymentsResponse {
  /**
   * @schema GreengrassListDeploymentsResponse#Deployments
   */
  readonly deployments?: GreengrassDeployment[];

  /**
   * @schema GreengrassListDeploymentsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GreengrassListDeviceDefinitionVersionsRequest
 */
export interface GreengrassListDeviceDefinitionVersionsRequest {
  /**
   * @schema GreengrassListDeviceDefinitionVersionsRequest#DeviceDefinitionId
   */
  readonly deviceDefinitionId: string;

  /**
   * @schema GreengrassListDeviceDefinitionVersionsRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema GreengrassListDeviceDefinitionVersionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GreengrassListDeviceDefinitionVersionsResponse
 */
export interface GreengrassListDeviceDefinitionVersionsResponse {
  /**
   * @schema GreengrassListDeviceDefinitionVersionsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GreengrassListDeviceDefinitionVersionsResponse#Versions
   */
  readonly versions?: GreengrassVersionInformation[];

}

/**
 * @schema GreengrassListDeviceDefinitionsRequest
 */
export interface GreengrassListDeviceDefinitionsRequest {
  /**
   * @schema GreengrassListDeviceDefinitionsRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema GreengrassListDeviceDefinitionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GreengrassListDeviceDefinitionsResponse
 */
export interface GreengrassListDeviceDefinitionsResponse {
  /**
   * @schema GreengrassListDeviceDefinitionsResponse#Definitions
   */
  readonly definitions?: GreengrassDefinitionInformation[];

  /**
   * @schema GreengrassListDeviceDefinitionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GreengrassListFunctionDefinitionVersionsRequest
 */
export interface GreengrassListFunctionDefinitionVersionsRequest {
  /**
   * @schema GreengrassListFunctionDefinitionVersionsRequest#FunctionDefinitionId
   */
  readonly functionDefinitionId: string;

  /**
   * @schema GreengrassListFunctionDefinitionVersionsRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema GreengrassListFunctionDefinitionVersionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GreengrassListFunctionDefinitionVersionsResponse
 */
export interface GreengrassListFunctionDefinitionVersionsResponse {
  /**
   * @schema GreengrassListFunctionDefinitionVersionsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GreengrassListFunctionDefinitionVersionsResponse#Versions
   */
  readonly versions?: GreengrassVersionInformation[];

}

/**
 * @schema GreengrassListFunctionDefinitionsRequest
 */
export interface GreengrassListFunctionDefinitionsRequest {
  /**
   * @schema GreengrassListFunctionDefinitionsRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema GreengrassListFunctionDefinitionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GreengrassListFunctionDefinitionsResponse
 */
export interface GreengrassListFunctionDefinitionsResponse {
  /**
   * @schema GreengrassListFunctionDefinitionsResponse#Definitions
   */
  readonly definitions?: GreengrassDefinitionInformation[];

  /**
   * @schema GreengrassListFunctionDefinitionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GreengrassListGroupCertificateAuthoritiesRequest
 */
export interface GreengrassListGroupCertificateAuthoritiesRequest {
  /**
   * @schema GreengrassListGroupCertificateAuthoritiesRequest#GroupId
   */
  readonly groupId: string;

}

/**
 * @schema GreengrassListGroupCertificateAuthoritiesResponse
 */
export interface GreengrassListGroupCertificateAuthoritiesResponse {
  /**
   * @schema GreengrassListGroupCertificateAuthoritiesResponse#GroupCertificateAuthorities
   */
  readonly groupCertificateAuthorities?: GreengrassGroupCertificateAuthorityProperties[];

}

/**
 * @schema GreengrassListGroupVersionsRequest
 */
export interface GreengrassListGroupVersionsRequest {
  /**
   * @schema GreengrassListGroupVersionsRequest#GroupId
   */
  readonly groupId: string;

  /**
   * @schema GreengrassListGroupVersionsRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema GreengrassListGroupVersionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GreengrassListGroupVersionsResponse
 */
export interface GreengrassListGroupVersionsResponse {
  /**
   * @schema GreengrassListGroupVersionsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GreengrassListGroupVersionsResponse#Versions
   */
  readonly versions?: GreengrassVersionInformation[];

}

/**
 * @schema GreengrassListGroupsRequest
 */
export interface GreengrassListGroupsRequest {
  /**
   * @schema GreengrassListGroupsRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema GreengrassListGroupsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GreengrassListGroupsResponse
 */
export interface GreengrassListGroupsResponse {
  /**
   * @schema GreengrassListGroupsResponse#Groups
   */
  readonly groups?: GreengrassGroupInformation[];

  /**
   * @schema GreengrassListGroupsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GreengrassListLoggerDefinitionVersionsRequest
 */
export interface GreengrassListLoggerDefinitionVersionsRequest {
  /**
   * @schema GreengrassListLoggerDefinitionVersionsRequest#LoggerDefinitionId
   */
  readonly loggerDefinitionId: string;

  /**
   * @schema GreengrassListLoggerDefinitionVersionsRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema GreengrassListLoggerDefinitionVersionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GreengrassListLoggerDefinitionVersionsResponse
 */
export interface GreengrassListLoggerDefinitionVersionsResponse {
  /**
   * @schema GreengrassListLoggerDefinitionVersionsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GreengrassListLoggerDefinitionVersionsResponse#Versions
   */
  readonly versions?: GreengrassVersionInformation[];

}

/**
 * @schema GreengrassListLoggerDefinitionsRequest
 */
export interface GreengrassListLoggerDefinitionsRequest {
  /**
   * @schema GreengrassListLoggerDefinitionsRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema GreengrassListLoggerDefinitionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GreengrassListLoggerDefinitionsResponse
 */
export interface GreengrassListLoggerDefinitionsResponse {
  /**
   * @schema GreengrassListLoggerDefinitionsResponse#Definitions
   */
  readonly definitions?: GreengrassDefinitionInformation[];

  /**
   * @schema GreengrassListLoggerDefinitionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GreengrassListResourceDefinitionVersionsRequest
 */
export interface GreengrassListResourceDefinitionVersionsRequest {
  /**
   * @schema GreengrassListResourceDefinitionVersionsRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema GreengrassListResourceDefinitionVersionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GreengrassListResourceDefinitionVersionsRequest#ResourceDefinitionId
   */
  readonly resourceDefinitionId: string;

}

/**
 * @schema GreengrassListResourceDefinitionVersionsResponse
 */
export interface GreengrassListResourceDefinitionVersionsResponse {
  /**
   * @schema GreengrassListResourceDefinitionVersionsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GreengrassListResourceDefinitionVersionsResponse#Versions
   */
  readonly versions?: GreengrassVersionInformation[];

}

/**
 * @schema GreengrassListResourceDefinitionsRequest
 */
export interface GreengrassListResourceDefinitionsRequest {
  /**
   * @schema GreengrassListResourceDefinitionsRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema GreengrassListResourceDefinitionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GreengrassListResourceDefinitionsResponse
 */
export interface GreengrassListResourceDefinitionsResponse {
  /**
   * @schema GreengrassListResourceDefinitionsResponse#Definitions
   */
  readonly definitions?: GreengrassDefinitionInformation[];

  /**
   * @schema GreengrassListResourceDefinitionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GreengrassListSubscriptionDefinitionVersionsRequest
 */
export interface GreengrassListSubscriptionDefinitionVersionsRequest {
  /**
   * @schema GreengrassListSubscriptionDefinitionVersionsRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema GreengrassListSubscriptionDefinitionVersionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GreengrassListSubscriptionDefinitionVersionsRequest#SubscriptionDefinitionId
   */
  readonly subscriptionDefinitionId: string;

}

/**
 * @schema GreengrassListSubscriptionDefinitionVersionsResponse
 */
export interface GreengrassListSubscriptionDefinitionVersionsResponse {
  /**
   * @schema GreengrassListSubscriptionDefinitionVersionsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GreengrassListSubscriptionDefinitionVersionsResponse#Versions
   */
  readonly versions?: GreengrassVersionInformation[];

}

/**
 * @schema GreengrassListSubscriptionDefinitionsRequest
 */
export interface GreengrassListSubscriptionDefinitionsRequest {
  /**
   * @schema GreengrassListSubscriptionDefinitionsRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema GreengrassListSubscriptionDefinitionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GreengrassListSubscriptionDefinitionsResponse
 */
export interface GreengrassListSubscriptionDefinitionsResponse {
  /**
   * @schema GreengrassListSubscriptionDefinitionsResponse#Definitions
   */
  readonly definitions?: GreengrassDefinitionInformation[];

  /**
   * @schema GreengrassListSubscriptionDefinitionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GreengrassListTagsForResourceRequest
 */
export interface GreengrassListTagsForResourceRequest {
  /**
   * @schema GreengrassListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema GreengrassListTagsForResourceResponse
 */
export interface GreengrassListTagsForResourceResponse {
  /**
   * @schema GreengrassListTagsForResourceResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema GreengrassResetDeploymentsRequest
 */
export interface GreengrassResetDeploymentsRequest {
  /**
   * @schema GreengrassResetDeploymentsRequest#AmznClientToken
   */
  readonly amznClientToken?: string;

  /**
   * @schema GreengrassResetDeploymentsRequest#Force
   */
  readonly force?: boolean;

  /**
   * @schema GreengrassResetDeploymentsRequest#GroupId
   */
  readonly groupId: string;

}

/**
 * @schema GreengrassResetDeploymentsResponse
 */
export interface GreengrassResetDeploymentsResponse {
  /**
   * @schema GreengrassResetDeploymentsResponse#DeploymentArn
   */
  readonly deploymentArn?: string;

  /**
   * @schema GreengrassResetDeploymentsResponse#DeploymentId
   */
  readonly deploymentId?: string;

}

/**
 * @schema GreengrassStartBulkDeploymentRequest
 */
export interface GreengrassStartBulkDeploymentRequest {
  /**
   * @schema GreengrassStartBulkDeploymentRequest#AmznClientToken
   */
  readonly amznClientToken?: string;

  /**
   * @schema GreengrassStartBulkDeploymentRequest#ExecutionRoleArn
   */
  readonly executionRoleArn: string;

  /**
   * @schema GreengrassStartBulkDeploymentRequest#InputFileUri
   */
  readonly inputFileUri: string;

  /**
   * @schema GreengrassStartBulkDeploymentRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema GreengrassStartBulkDeploymentResponse
 */
export interface GreengrassStartBulkDeploymentResponse {
  /**
   * @schema GreengrassStartBulkDeploymentResponse#BulkDeploymentArn
   */
  readonly bulkDeploymentArn?: string;

  /**
   * @schema GreengrassStartBulkDeploymentResponse#BulkDeploymentId
   */
  readonly bulkDeploymentId?: string;

}

/**
 * @schema GreengrassStopBulkDeploymentRequest
 */
export interface GreengrassStopBulkDeploymentRequest {
  /**
   * @schema GreengrassStopBulkDeploymentRequest#BulkDeploymentId
   */
  readonly bulkDeploymentId: string;

}

/**
 * @schema GreengrassStopBulkDeploymentResponse
 */
export interface GreengrassStopBulkDeploymentResponse {
}

/**
 * @schema GreengrassTagResourceRequest
 */
export interface GreengrassTagResourceRequest {
  /**
   * @schema GreengrassTagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema GreengrassTagResourceRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema GreengrassUntagResourceRequest
 */
export interface GreengrassUntagResourceRequest {
  /**
   * @schema GreengrassUntagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema GreengrassUntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema GreengrassUpdateConnectivityInfoRequest
 */
export interface GreengrassUpdateConnectivityInfoRequest {
  /**
   * @schema GreengrassUpdateConnectivityInfoRequest#ConnectivityInfo
   */
  readonly connectivityInfo?: GreengrassConnectivityInfo[];

  /**
   * @schema GreengrassUpdateConnectivityInfoRequest#ThingName
   */
  readonly thingName: string;

}

/**
 * @schema GreengrassUpdateConnectivityInfoResponse
 */
export interface GreengrassUpdateConnectivityInfoResponse {
  /**
   * @schema GreengrassUpdateConnectivityInfoResponse#Message
   */
  readonly message?: string;

  /**
   * @schema GreengrassUpdateConnectivityInfoResponse#Version
   */
  readonly version?: string;

}

/**
 * @schema GreengrassUpdateConnectorDefinitionRequest
 */
export interface GreengrassUpdateConnectorDefinitionRequest {
  /**
   * @schema GreengrassUpdateConnectorDefinitionRequest#ConnectorDefinitionId
   */
  readonly connectorDefinitionId: string;

  /**
   * @schema GreengrassUpdateConnectorDefinitionRequest#Name
   */
  readonly name?: string;

}

/**
 * @schema GreengrassUpdateConnectorDefinitionResponse
 */
export interface GreengrassUpdateConnectorDefinitionResponse {
}

/**
 * @schema GreengrassUpdateCoreDefinitionRequest
 */
export interface GreengrassUpdateCoreDefinitionRequest {
  /**
   * @schema GreengrassUpdateCoreDefinitionRequest#CoreDefinitionId
   */
  readonly coreDefinitionId: string;

  /**
   * @schema GreengrassUpdateCoreDefinitionRequest#Name
   */
  readonly name?: string;

}

/**
 * @schema GreengrassUpdateCoreDefinitionResponse
 */
export interface GreengrassUpdateCoreDefinitionResponse {
}

/**
 * @schema GreengrassUpdateDeviceDefinitionRequest
 */
export interface GreengrassUpdateDeviceDefinitionRequest {
  /**
   * @schema GreengrassUpdateDeviceDefinitionRequest#DeviceDefinitionId
   */
  readonly deviceDefinitionId: string;

  /**
   * @schema GreengrassUpdateDeviceDefinitionRequest#Name
   */
  readonly name?: string;

}

/**
 * @schema GreengrassUpdateDeviceDefinitionResponse
 */
export interface GreengrassUpdateDeviceDefinitionResponse {
}

/**
 * @schema GreengrassUpdateFunctionDefinitionRequest
 */
export interface GreengrassUpdateFunctionDefinitionRequest {
  /**
   * @schema GreengrassUpdateFunctionDefinitionRequest#FunctionDefinitionId
   */
  readonly functionDefinitionId: string;

  /**
   * @schema GreengrassUpdateFunctionDefinitionRequest#Name
   */
  readonly name?: string;

}

/**
 * @schema GreengrassUpdateFunctionDefinitionResponse
 */
export interface GreengrassUpdateFunctionDefinitionResponse {
}

/**
 * @schema GreengrassUpdateGroupRequest
 */
export interface GreengrassUpdateGroupRequest {
  /**
   * @schema GreengrassUpdateGroupRequest#GroupId
   */
  readonly groupId: string;

  /**
   * @schema GreengrassUpdateGroupRequest#Name
   */
  readonly name?: string;

}

/**
 * @schema GreengrassUpdateGroupResponse
 */
export interface GreengrassUpdateGroupResponse {
}

/**
 * @schema GreengrassUpdateGroupCertificateConfigurationRequest
 */
export interface GreengrassUpdateGroupCertificateConfigurationRequest {
  /**
   * @schema GreengrassUpdateGroupCertificateConfigurationRequest#CertificateExpiryInMilliseconds
   */
  readonly certificateExpiryInMilliseconds?: string;

  /**
   * @schema GreengrassUpdateGroupCertificateConfigurationRequest#GroupId
   */
  readonly groupId: string;

}

/**
 * @schema GreengrassUpdateGroupCertificateConfigurationResponse
 */
export interface GreengrassUpdateGroupCertificateConfigurationResponse {
  /**
   * @schema GreengrassUpdateGroupCertificateConfigurationResponse#CertificateAuthorityExpiryInMilliseconds
   */
  readonly certificateAuthorityExpiryInMilliseconds?: string;

  /**
   * @schema GreengrassUpdateGroupCertificateConfigurationResponse#CertificateExpiryInMilliseconds
   */
  readonly certificateExpiryInMilliseconds?: string;

  /**
   * @schema GreengrassUpdateGroupCertificateConfigurationResponse#GroupId
   */
  readonly groupId?: string;

}

/**
 * @schema GreengrassUpdateLoggerDefinitionRequest
 */
export interface GreengrassUpdateLoggerDefinitionRequest {
  /**
   * @schema GreengrassUpdateLoggerDefinitionRequest#LoggerDefinitionId
   */
  readonly loggerDefinitionId: string;

  /**
   * @schema GreengrassUpdateLoggerDefinitionRequest#Name
   */
  readonly name?: string;

}

/**
 * @schema GreengrassUpdateLoggerDefinitionResponse
 */
export interface GreengrassUpdateLoggerDefinitionResponse {
}

/**
 * @schema GreengrassUpdateResourceDefinitionRequest
 */
export interface GreengrassUpdateResourceDefinitionRequest {
  /**
   * @schema GreengrassUpdateResourceDefinitionRequest#Name
   */
  readonly name?: string;

  /**
   * @schema GreengrassUpdateResourceDefinitionRequest#ResourceDefinitionId
   */
  readonly resourceDefinitionId: string;

}

/**
 * @schema GreengrassUpdateResourceDefinitionResponse
 */
export interface GreengrassUpdateResourceDefinitionResponse {
}

/**
 * @schema GreengrassUpdateSubscriptionDefinitionRequest
 */
export interface GreengrassUpdateSubscriptionDefinitionRequest {
  /**
   * @schema GreengrassUpdateSubscriptionDefinitionRequest#Name
   */
  readonly name?: string;

  /**
   * @schema GreengrassUpdateSubscriptionDefinitionRequest#SubscriptionDefinitionId
   */
  readonly subscriptionDefinitionId: string;

}

/**
 * @schema GreengrassUpdateSubscriptionDefinitionResponse
 */
export interface GreengrassUpdateSubscriptionDefinitionResponse {
}

/**
 * @schema GreengrassUpdateThingRuntimeConfigurationRequest
 */
export interface GreengrassUpdateThingRuntimeConfigurationRequest {
  /**
   * @schema GreengrassUpdateThingRuntimeConfigurationRequest#TelemetryConfiguration
   */
  readonly telemetryConfiguration?: GreengrassTelemetryConfigurationUpdate;

  /**
   * @schema GreengrassUpdateThingRuntimeConfigurationRequest#ThingName
   */
  readonly thingName: string;

}

/**
 * @schema GreengrassUpdateThingRuntimeConfigurationResponse
 */
export interface GreengrassUpdateThingRuntimeConfigurationResponse {
}

/**
 * @schema GreengrassConnectorDefinitionVersion
 */
export interface GreengrassConnectorDefinitionVersion {
  /**
   * @schema GreengrassConnectorDefinitionVersion#Connectors
   */
  readonly connectors?: GreengrassConnector[];

}

/**
 * @schema GreengrassConnector
 */
export interface GreengrassConnector {
  /**
   * @schema GreengrassConnector#ConnectorArn
   */
  readonly connectorArn: string;

  /**
   * @schema GreengrassConnector#Id
   */
  readonly id: string;

  /**
   * @schema GreengrassConnector#Parameters
   */
  readonly parameters?: { [key: string]: string };

}

/**
 * @schema GreengrassCoreDefinitionVersion
 */
export interface GreengrassCoreDefinitionVersion {
  /**
   * @schema GreengrassCoreDefinitionVersion#Cores
   */
  readonly cores?: GreengrassCore[];

}

/**
 * @schema GreengrassCore
 */
export interface GreengrassCore {
  /**
   * @schema GreengrassCore#CertificateArn
   */
  readonly certificateArn: string;

  /**
   * @schema GreengrassCore#Id
   */
  readonly id: string;

  /**
   * @schema GreengrassCore#SyncShadow
   */
  readonly syncShadow?: boolean;

  /**
   * @schema GreengrassCore#ThingArn
   */
  readonly thingArn: string;

}

/**
 * @schema GreengrassDeviceDefinitionVersion
 */
export interface GreengrassDeviceDefinitionVersion {
  /**
   * @schema GreengrassDeviceDefinitionVersion#Devices
   */
  readonly devices?: GreengrassDevice[];

}

/**
 * @schema GreengrassDevice
 */
export interface GreengrassDevice {
  /**
   * @schema GreengrassDevice#CertificateArn
   */
  readonly certificateArn: string;

  /**
   * @schema GreengrassDevice#Id
   */
  readonly id: string;

  /**
   * @schema GreengrassDevice#SyncShadow
   */
  readonly syncShadow?: boolean;

  /**
   * @schema GreengrassDevice#ThingArn
   */
  readonly thingArn: string;

}

/**
 * @schema GreengrassFunctionDefinitionVersion
 */
export interface GreengrassFunctionDefinitionVersion {
  /**
   * @schema GreengrassFunctionDefinitionVersion#DefaultConfig
   */
  readonly defaultConfig?: GreengrassFunctionDefaultConfig;

  /**
   * @schema GreengrassFunctionDefinitionVersion#Functions
   */
  readonly functions?: GreengrassFunction[];

}

/**
 * @schema GreengrassFunctionDefaultConfig
 */
export interface GreengrassFunctionDefaultConfig {
  /**
   * @schema GreengrassFunctionDefaultConfig#Execution
   */
  readonly execution?: GreengrassFunctionDefaultExecutionConfig;

}

/**
 * @schema GreengrassFunction
 */
export interface GreengrassFunction {
  /**
   * @schema GreengrassFunction#FunctionArn
   */
  readonly functionArn?: string;

  /**
   * @schema GreengrassFunction#FunctionConfiguration
   */
  readonly functionConfiguration?: GreengrassFunctionConfiguration;

  /**
   * @schema GreengrassFunction#Id
   */
  readonly id: string;

}

/**
 * @schema GreengrassGroupVersion
 */
export interface GreengrassGroupVersion {
  /**
   * @schema GreengrassGroupVersion#ConnectorDefinitionVersionArn
   */
  readonly connectorDefinitionVersionArn?: string;

  /**
   * @schema GreengrassGroupVersion#CoreDefinitionVersionArn
   */
  readonly coreDefinitionVersionArn?: string;

  /**
   * @schema GreengrassGroupVersion#DeviceDefinitionVersionArn
   */
  readonly deviceDefinitionVersionArn?: string;

  /**
   * @schema GreengrassGroupVersion#FunctionDefinitionVersionArn
   */
  readonly functionDefinitionVersionArn?: string;

  /**
   * @schema GreengrassGroupVersion#LoggerDefinitionVersionArn
   */
  readonly loggerDefinitionVersionArn?: string;

  /**
   * @schema GreengrassGroupVersion#ResourceDefinitionVersionArn
   */
  readonly resourceDefinitionVersionArn?: string;

  /**
   * @schema GreengrassGroupVersion#SubscriptionDefinitionVersionArn
   */
  readonly subscriptionDefinitionVersionArn?: string;

}

/**
 * @schema GreengrassLoggerDefinitionVersion
 */
export interface GreengrassLoggerDefinitionVersion {
  /**
   * @schema GreengrassLoggerDefinitionVersion#Loggers
   */
  readonly loggers?: GreengrassLogger[];

}

/**
 * @schema GreengrassLogger
 */
export interface GreengrassLogger {
  /**
   * @schema GreengrassLogger#Component
   */
  readonly component: string;

  /**
   * @schema GreengrassLogger#Id
   */
  readonly id: string;

  /**
   * @schema GreengrassLogger#Level
   */
  readonly level: string;

  /**
   * @schema GreengrassLogger#Space
   */
  readonly space?: number;

  /**
   * @schema GreengrassLogger#Type
   */
  readonly type: string;

}

/**
 * @schema GreengrassResourceDefinitionVersion
 */
export interface GreengrassResourceDefinitionVersion {
  /**
   * @schema GreengrassResourceDefinitionVersion#Resources
   */
  readonly resources?: GreengrassResource[];

}

/**
 * @schema GreengrassResource
 */
export interface GreengrassResource {
  /**
   * @schema GreengrassResource#Id
   */
  readonly id: string;

  /**
   * @schema GreengrassResource#Name
   */
  readonly name: string;

  /**
   * @schema GreengrassResource#ResourceDataContainer
   */
  readonly resourceDataContainer: GreengrassResourceDataContainer;

}

/**
 * @schema GreengrassSubscriptionDefinitionVersion
 */
export interface GreengrassSubscriptionDefinitionVersion {
  /**
   * @schema GreengrassSubscriptionDefinitionVersion#Subscriptions
   */
  readonly subscriptions?: GreengrassSubscription[];

}

/**
 * @schema GreengrassSubscription
 */
export interface GreengrassSubscription {
  /**
   * @schema GreengrassSubscription#Id
   */
  readonly id: string;

  /**
   * @schema GreengrassSubscription#Source
   */
  readonly source: string;

  /**
   * @schema GreengrassSubscription#Subject
   */
  readonly subject: string;

  /**
   * @schema GreengrassSubscription#Target
   */
  readonly target: string;

}

/**
 * @schema GreengrassBulkDeploymentMetrics
 */
export interface GreengrassBulkDeploymentMetrics {
  /**
   * @schema GreengrassBulkDeploymentMetrics#InvalidInputRecords
   */
  readonly invalidInputRecords?: number;

  /**
   * @schema GreengrassBulkDeploymentMetrics#RecordsProcessed
   */
  readonly recordsProcessed?: number;

  /**
   * @schema GreengrassBulkDeploymentMetrics#RetryAttempts
   */
  readonly retryAttempts?: number;

}

/**
 * @schema GreengrassErrorDetail
 */
export interface GreengrassErrorDetail {
  /**
   * @schema GreengrassErrorDetail#DetailedErrorCode
   */
  readonly detailedErrorCode?: string;

  /**
   * @schema GreengrassErrorDetail#DetailedErrorMessage
   */
  readonly detailedErrorMessage?: string;

}

/**
 * @schema GreengrassConnectivityInfo
 */
export interface GreengrassConnectivityInfo {
  /**
   * @schema GreengrassConnectivityInfo#HostAddress
   */
  readonly hostAddress?: string;

  /**
   * @schema GreengrassConnectivityInfo#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassConnectivityInfo#Metadata
   */
  readonly metadata?: string;

  /**
   * @schema GreengrassConnectivityInfo#PortNumber
   */
  readonly portNumber?: number;

}

/**
 * @schema GreengrassRuntimeConfiguration
 */
export interface GreengrassRuntimeConfiguration {
  /**
   * @schema GreengrassRuntimeConfiguration#TelemetryConfiguration
   */
  readonly telemetryConfiguration?: GreengrassTelemetryConfiguration;

}

/**
 * @schema GreengrassBulkDeploymentResult
 */
export interface GreengrassBulkDeploymentResult {
  /**
   * @schema GreengrassBulkDeploymentResult#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema GreengrassBulkDeploymentResult#DeploymentArn
   */
  readonly deploymentArn?: string;

  /**
   * @schema GreengrassBulkDeploymentResult#DeploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema GreengrassBulkDeploymentResult#DeploymentStatus
   */
  readonly deploymentStatus?: string;

  /**
   * @schema GreengrassBulkDeploymentResult#DeploymentType
   */
  readonly deploymentType?: string;

  /**
   * @schema GreengrassBulkDeploymentResult#ErrorDetails
   */
  readonly errorDetails?: GreengrassErrorDetail[];

  /**
   * @schema GreengrassBulkDeploymentResult#ErrorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema GreengrassBulkDeploymentResult#GroupArn
   */
  readonly groupArn?: string;

}

/**
 * @schema GreengrassBulkDeployment
 */
export interface GreengrassBulkDeployment {
  /**
   * @schema GreengrassBulkDeployment#BulkDeploymentArn
   */
  readonly bulkDeploymentArn?: string;

  /**
   * @schema GreengrassBulkDeployment#BulkDeploymentId
   */
  readonly bulkDeploymentId?: string;

  /**
   * @schema GreengrassBulkDeployment#CreatedAt
   */
  readonly createdAt?: string;

}

/**
 * @schema GreengrassVersionInformation
 */
export interface GreengrassVersionInformation {
  /**
   * @schema GreengrassVersionInformation#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassVersionInformation#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassVersionInformation#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassVersionInformation#Version
   */
  readonly version?: string;

}

/**
 * @schema GreengrassDefinitionInformation
 */
export interface GreengrassDefinitionInformation {
  /**
   * @schema GreengrassDefinitionInformation#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassDefinitionInformation#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassDefinitionInformation#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassDefinitionInformation#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema GreengrassDefinitionInformation#LatestVersion
   */
  readonly latestVersion?: string;

  /**
   * @schema GreengrassDefinitionInformation#LatestVersionArn
   */
  readonly latestVersionArn?: string;

  /**
   * @schema GreengrassDefinitionInformation#Name
   */
  readonly name?: string;

  /**
   * @schema GreengrassDefinitionInformation#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema GreengrassDeployment
 */
export interface GreengrassDeployment {
  /**
   * @schema GreengrassDeployment#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema GreengrassDeployment#DeploymentArn
   */
  readonly deploymentArn?: string;

  /**
   * @schema GreengrassDeployment#DeploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema GreengrassDeployment#DeploymentType
   */
  readonly deploymentType?: string;

  /**
   * @schema GreengrassDeployment#GroupArn
   */
  readonly groupArn?: string;

}

/**
 * @schema GreengrassGroupCertificateAuthorityProperties
 */
export interface GreengrassGroupCertificateAuthorityProperties {
  /**
   * @schema GreengrassGroupCertificateAuthorityProperties#GroupCertificateAuthorityArn
   */
  readonly groupCertificateAuthorityArn?: string;

  /**
   * @schema GreengrassGroupCertificateAuthorityProperties#GroupCertificateAuthorityId
   */
  readonly groupCertificateAuthorityId?: string;

}

/**
 * @schema GreengrassGroupInformation
 */
export interface GreengrassGroupInformation {
  /**
   * @schema GreengrassGroupInformation#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassGroupInformation#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassGroupInformation#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassGroupInformation#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema GreengrassGroupInformation#LatestVersion
   */
  readonly latestVersion?: string;

  /**
   * @schema GreengrassGroupInformation#LatestVersionArn
   */
  readonly latestVersionArn?: string;

  /**
   * @schema GreengrassGroupInformation#Name
   */
  readonly name?: string;

}

/**
 * @schema GreengrassTelemetryConfigurationUpdate
 */
export interface GreengrassTelemetryConfigurationUpdate {
  /**
   * @schema GreengrassTelemetryConfigurationUpdate#Telemetry
   */
  readonly telemetry: string;

}

/**
 * @schema GreengrassFunctionDefaultExecutionConfig
 */
export interface GreengrassFunctionDefaultExecutionConfig {
  /**
   * @schema GreengrassFunctionDefaultExecutionConfig#IsolationMode
   */
  readonly isolationMode?: string;

  /**
   * @schema GreengrassFunctionDefaultExecutionConfig#RunAs
   */
  readonly runAs?: GreengrassFunctionRunAsConfig;

}

/**
 * @schema GreengrassFunctionConfiguration
 */
export interface GreengrassFunctionConfiguration {
  /**
   * @schema GreengrassFunctionConfiguration#EncodingType
   */
  readonly encodingType?: string;

  /**
   * @schema GreengrassFunctionConfiguration#Environment
   */
  readonly environment?: GreengrassFunctionConfigurationEnvironment;

  /**
   * @schema GreengrassFunctionConfiguration#ExecArgs
   */
  readonly execArgs?: string;

  /**
   * @schema GreengrassFunctionConfiguration#Executable
   */
  readonly executable?: string;

  /**
   * @schema GreengrassFunctionConfiguration#MemorySize
   */
  readonly memorySize?: number;

  /**
   * @schema GreengrassFunctionConfiguration#Pinned
   */
  readonly pinned?: boolean;

  /**
   * @schema GreengrassFunctionConfiguration#Timeout
   */
  readonly timeout?: number;

}

/**
 * @schema GreengrassResourceDataContainer
 */
export interface GreengrassResourceDataContainer {
  /**
   * @schema GreengrassResourceDataContainer#LocalDeviceResourceData
   */
  readonly localDeviceResourceData?: GreengrassLocalDeviceResourceData;

  /**
   * @schema GreengrassResourceDataContainer#LocalVolumeResourceData
   */
  readonly localVolumeResourceData?: GreengrassLocalVolumeResourceData;

  /**
   * @schema GreengrassResourceDataContainer#S3MachineLearningModelResourceData
   */
  readonly s3MachineLearningModelResourceData?: GreengrassS3MachineLearningModelResourceData;

  /**
   * @schema GreengrassResourceDataContainer#SageMakerMachineLearningModelResourceData
   */
  readonly sageMakerMachineLearningModelResourceData?: GreengrassSageMakerMachineLearningModelResourceData;

  /**
   * @schema GreengrassResourceDataContainer#SecretsManagerSecretResourceData
   */
  readonly secretsManagerSecretResourceData?: GreengrassSecretsManagerSecretResourceData;

}

/**
 * @schema GreengrassTelemetryConfiguration
 */
export interface GreengrassTelemetryConfiguration {
  /**
   * @schema GreengrassTelemetryConfiguration#ConfigurationSyncStatus
   */
  readonly configurationSyncStatus?: string;

  /**
   * @schema GreengrassTelemetryConfiguration#Telemetry
   */
  readonly telemetry: string;

}

/**
 * @schema GreengrassFunctionRunAsConfig
 */
export interface GreengrassFunctionRunAsConfig {
  /**
   * @schema GreengrassFunctionRunAsConfig#Gid
   */
  readonly gid?: number;

  /**
   * @schema GreengrassFunctionRunAsConfig#Uid
   */
  readonly uid?: number;

}

/**
 * @schema GreengrassFunctionConfigurationEnvironment
 */
export interface GreengrassFunctionConfigurationEnvironment {
  /**
   * @schema GreengrassFunctionConfigurationEnvironment#AccessSysfs
   */
  readonly accessSysfs?: boolean;

  /**
   * @schema GreengrassFunctionConfigurationEnvironment#Execution
   */
  readonly execution?: GreengrassFunctionExecutionConfig;

  /**
   * @schema GreengrassFunctionConfigurationEnvironment#ResourceAccessPolicies
   */
  readonly resourceAccessPolicies?: GreengrassResourceAccessPolicy[];

  /**
   * @schema GreengrassFunctionConfigurationEnvironment#Variables
   */
  readonly variables?: { [key: string]: string };

}

/**
 * @schema GreengrassLocalDeviceResourceData
 */
export interface GreengrassLocalDeviceResourceData {
  /**
   * @schema GreengrassLocalDeviceResourceData#GroupOwnerSetting
   */
  readonly groupOwnerSetting?: GreengrassGroupOwnerSetting;

  /**
   * @schema GreengrassLocalDeviceResourceData#SourcePath
   */
  readonly sourcePath?: string;

}

/**
 * @schema GreengrassLocalVolumeResourceData
 */
export interface GreengrassLocalVolumeResourceData {
  /**
   * @schema GreengrassLocalVolumeResourceData#DestinationPath
   */
  readonly destinationPath?: string;

  /**
   * @schema GreengrassLocalVolumeResourceData#GroupOwnerSetting
   */
  readonly groupOwnerSetting?: GreengrassGroupOwnerSetting;

  /**
   * @schema GreengrassLocalVolumeResourceData#SourcePath
   */
  readonly sourcePath?: string;

}

/**
 * @schema GreengrassS3MachineLearningModelResourceData
 */
export interface GreengrassS3MachineLearningModelResourceData {
  /**
   * @schema GreengrassS3MachineLearningModelResourceData#DestinationPath
   */
  readonly destinationPath?: string;

  /**
   * @schema GreengrassS3MachineLearningModelResourceData#OwnerSetting
   */
  readonly ownerSetting?: GreengrassResourceDownloadOwnerSetting;

  /**
   * @schema GreengrassS3MachineLearningModelResourceData#S3Uri
   */
  readonly s3Uri?: string;

}

/**
 * @schema GreengrassSageMakerMachineLearningModelResourceData
 */
export interface GreengrassSageMakerMachineLearningModelResourceData {
  /**
   * @schema GreengrassSageMakerMachineLearningModelResourceData#DestinationPath
   */
  readonly destinationPath?: string;

  /**
   * @schema GreengrassSageMakerMachineLearningModelResourceData#OwnerSetting
   */
  readonly ownerSetting?: GreengrassResourceDownloadOwnerSetting;

  /**
   * @schema GreengrassSageMakerMachineLearningModelResourceData#SageMakerJobArn
   */
  readonly sageMakerJobArn?: string;

}

/**
 * @schema GreengrassSecretsManagerSecretResourceData
 */
export interface GreengrassSecretsManagerSecretResourceData {
  /**
   * @schema GreengrassSecretsManagerSecretResourceData#ARN
   */
  readonly arn?: string;

  /**
   * @schema GreengrassSecretsManagerSecretResourceData#AdditionalStagingLabelsToDownload
   */
  readonly additionalStagingLabelsToDownload?: string[];

}

/**
 * @schema GreengrassFunctionExecutionConfig
 */
export interface GreengrassFunctionExecutionConfig {
  /**
   * @schema GreengrassFunctionExecutionConfig#IsolationMode
   */
  readonly isolationMode?: string;

  /**
   * @schema GreengrassFunctionExecutionConfig#RunAs
   */
  readonly runAs?: GreengrassFunctionRunAsConfig;

}

/**
 * @schema GreengrassResourceAccessPolicy
 */
export interface GreengrassResourceAccessPolicy {
  /**
   * @schema GreengrassResourceAccessPolicy#Permission
   */
  readonly permission?: string;

  /**
   * @schema GreengrassResourceAccessPolicy#ResourceId
   */
  readonly resourceId: string;

}

/**
 * @schema GreengrassGroupOwnerSetting
 */
export interface GreengrassGroupOwnerSetting {
  /**
   * @schema GreengrassGroupOwnerSetting#AutoAddGroupOwner
   */
  readonly autoAddGroupOwner?: boolean;

  /**
   * @schema GreengrassGroupOwnerSetting#GroupOwner
   */
  readonly groupOwner?: string;

}

/**
 * @schema GreengrassResourceDownloadOwnerSetting
 */
export interface GreengrassResourceDownloadOwnerSetting {
  /**
   * @schema GreengrassResourceDownloadOwnerSetting#GroupOwner
   */
  readonly groupOwner: string;

  /**
   * @schema GreengrassResourceDownloadOwnerSetting#GroupPermission
   */
  readonly groupPermission: string;

}
