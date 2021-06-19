/**
 * @schema ElasticBeanstalkAbortEnvironmentUpdateMessage
 */
export interface ElasticBeanstalkAbortEnvironmentUpdateMessage {
  /**
   * @schema ElasticBeanstalkAbortEnvironmentUpdateMessage#EnvironmentId
   */
  readonly environmentId?: string;

  /**
   * @schema ElasticBeanstalkAbortEnvironmentUpdateMessage#EnvironmentName
   */
  readonly environmentName?: string;

}

/**
 * @schema ElasticBeanstalkApplyEnvironmentManagedActionRequest
 */
export interface ElasticBeanstalkApplyEnvironmentManagedActionRequest {
  /**
   * @schema ElasticBeanstalkApplyEnvironmentManagedActionRequest#EnvironmentName
   */
  readonly environmentName?: string;

  /**
   * @schema ElasticBeanstalkApplyEnvironmentManagedActionRequest#EnvironmentId
   */
  readonly environmentId?: string;

  /**
   * @schema ElasticBeanstalkApplyEnvironmentManagedActionRequest#ActionId
   */
  readonly actionId: string;

}

/**
 * @schema ElasticBeanstalkApplyEnvironmentManagedActionResult
 */
export interface ElasticBeanstalkApplyEnvironmentManagedActionResult {
  /**
   * @schema ElasticBeanstalkApplyEnvironmentManagedActionResult#ActionId
   */
  readonly actionId?: string;

  /**
   * @schema ElasticBeanstalkApplyEnvironmentManagedActionResult#ActionDescription
   */
  readonly actionDescription?: string;

  /**
   * @schema ElasticBeanstalkApplyEnvironmentManagedActionResult#ActionType
   */
  readonly actionType?: string;

  /**
   * @schema ElasticBeanstalkApplyEnvironmentManagedActionResult#Status
   */
  readonly status?: string;

}

/**
 * @schema ElasticBeanstalkAssociateEnvironmentOperationsRoleMessage
 */
export interface ElasticBeanstalkAssociateEnvironmentOperationsRoleMessage {
  /**
   * @schema ElasticBeanstalkAssociateEnvironmentOperationsRoleMessage#EnvironmentName
   */
  readonly environmentName: string;

  /**
   * @schema ElasticBeanstalkAssociateEnvironmentOperationsRoleMessage#OperationsRole
   */
  readonly operationsRole: string;

}

/**
 * @schema ElasticBeanstalkCheckDnsAvailabilityMessage
 */
export interface ElasticBeanstalkCheckDnsAvailabilityMessage {
  /**
   * @schema ElasticBeanstalkCheckDnsAvailabilityMessage#CNAMEPrefix
   */
  readonly cnamePrefix: string;

}

/**
 * @schema ElasticBeanstalkCheckDnsAvailabilityResultMessage
 */
export interface ElasticBeanstalkCheckDnsAvailabilityResultMessage {
  /**
   * @schema ElasticBeanstalkCheckDnsAvailabilityResultMessage#Available
   */
  readonly available?: boolean;

  /**
   * @schema ElasticBeanstalkCheckDnsAvailabilityResultMessage#FullyQualifiedCNAME
   */
  readonly fullyQualifiedCname?: string;

}

/**
 * @schema ElasticBeanstalkComposeEnvironmentsMessage
 */
export interface ElasticBeanstalkComposeEnvironmentsMessage {
  /**
   * @schema ElasticBeanstalkComposeEnvironmentsMessage#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema ElasticBeanstalkComposeEnvironmentsMessage#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema ElasticBeanstalkComposeEnvironmentsMessage#VersionLabels
   */
  readonly versionLabels?: string[];

}

/**
 * @schema ElasticBeanstalkEnvironmentDescriptionsMessage
 */
export interface ElasticBeanstalkEnvironmentDescriptionsMessage {
  /**
   * @schema ElasticBeanstalkEnvironmentDescriptionsMessage#Environments
   */
  readonly environments?: ElasticBeanstalkEnvironmentDescription[];

  /**
   * @schema ElasticBeanstalkEnvironmentDescriptionsMessage#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ElasticBeanstalkCreateApplicationMessage
 */
export interface ElasticBeanstalkCreateApplicationMessage {
  /**
   * @schema ElasticBeanstalkCreateApplicationMessage#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema ElasticBeanstalkCreateApplicationMessage#Description
   */
  readonly description?: string;

  /**
   * @schema ElasticBeanstalkCreateApplicationMessage#ResourceLifecycleConfig
   */
  readonly resourceLifecycleConfig?: ElasticBeanstalkApplicationResourceLifecycleConfig;

  /**
   * @schema ElasticBeanstalkCreateApplicationMessage#Tags
   */
  readonly tags?: ElasticBeanstalkTag[];

}

/**
 * @schema ElasticBeanstalkApplicationDescriptionMessage
 */
export interface ElasticBeanstalkApplicationDescriptionMessage {
  /**
   * @schema ElasticBeanstalkApplicationDescriptionMessage#Application
   */
  readonly application?: ElasticBeanstalkApplicationDescription;

}

/**
 * @schema ElasticBeanstalkCreateApplicationVersionMessage
 */
export interface ElasticBeanstalkCreateApplicationVersionMessage {
  /**
   * @schema ElasticBeanstalkCreateApplicationVersionMessage#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema ElasticBeanstalkCreateApplicationVersionMessage#VersionLabel
   */
  readonly versionLabel: string;

  /**
   * @schema ElasticBeanstalkCreateApplicationVersionMessage#Description
   */
  readonly description?: string;

  /**
   * @schema ElasticBeanstalkCreateApplicationVersionMessage#SourceBuildInformation
   */
  readonly sourceBuildInformation?: ElasticBeanstalkSourceBuildInformation;

  /**
   * @schema ElasticBeanstalkCreateApplicationVersionMessage#SourceBundle
   */
  readonly sourceBundle?: ElasticBeanstalkS3Location;

  /**
   * @schema ElasticBeanstalkCreateApplicationVersionMessage#BuildConfiguration
   */
  readonly buildConfiguration?: ElasticBeanstalkBuildConfiguration;

  /**
   * @schema ElasticBeanstalkCreateApplicationVersionMessage#AutoCreateApplication
   */
  readonly autoCreateApplication?: boolean;

  /**
   * @schema ElasticBeanstalkCreateApplicationVersionMessage#Process
   */
  readonly process?: boolean;

  /**
   * @schema ElasticBeanstalkCreateApplicationVersionMessage#Tags
   */
  readonly tags?: ElasticBeanstalkTag[];

}

/**
 * @schema ElasticBeanstalkApplicationVersionDescriptionMessage
 */
export interface ElasticBeanstalkApplicationVersionDescriptionMessage {
  /**
   * @schema ElasticBeanstalkApplicationVersionDescriptionMessage#ApplicationVersion
   */
  readonly applicationVersion?: ElasticBeanstalkApplicationVersionDescription;

}

/**
 * @schema ElasticBeanstalkCreateConfigurationTemplateMessage
 */
export interface ElasticBeanstalkCreateConfigurationTemplateMessage {
  /**
   * @schema ElasticBeanstalkCreateConfigurationTemplateMessage#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema ElasticBeanstalkCreateConfigurationTemplateMessage#TemplateName
   */
  readonly templateName: string;

  /**
   * @schema ElasticBeanstalkCreateConfigurationTemplateMessage#SolutionStackName
   */
  readonly solutionStackName?: string;

  /**
   * @schema ElasticBeanstalkCreateConfigurationTemplateMessage#PlatformArn
   */
  readonly platformArn?: string;

  /**
   * @schema ElasticBeanstalkCreateConfigurationTemplateMessage#SourceConfiguration
   */
  readonly sourceConfiguration?: ElasticBeanstalkSourceConfiguration;

  /**
   * @schema ElasticBeanstalkCreateConfigurationTemplateMessage#EnvironmentId
   */
  readonly environmentId?: string;

  /**
   * @schema ElasticBeanstalkCreateConfigurationTemplateMessage#Description
   */
  readonly description?: string;

  /**
   * @schema ElasticBeanstalkCreateConfigurationTemplateMessage#OptionSettings
   */
  readonly optionSettings?: ElasticBeanstalkConfigurationOptionSetting[];

  /**
   * @schema ElasticBeanstalkCreateConfigurationTemplateMessage#Tags
   */
  readonly tags?: ElasticBeanstalkTag[];

}

/**
 * @schema ElasticBeanstalkConfigurationSettingsDescription
 */
export interface ElasticBeanstalkConfigurationSettingsDescription {
  /**
   * @schema ElasticBeanstalkConfigurationSettingsDescription#SolutionStackName
   */
  readonly solutionStackName?: string;

  /**
   * @schema ElasticBeanstalkConfigurationSettingsDescription#PlatformArn
   */
  readonly platformArn?: string;

  /**
   * @schema ElasticBeanstalkConfigurationSettingsDescription#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema ElasticBeanstalkConfigurationSettingsDescription#TemplateName
   */
  readonly templateName?: string;

  /**
   * @schema ElasticBeanstalkConfigurationSettingsDescription#Description
   */
  readonly description?: string;

  /**
   * @schema ElasticBeanstalkConfigurationSettingsDescription#EnvironmentName
   */
  readonly environmentName?: string;

  /**
   * @schema ElasticBeanstalkConfigurationSettingsDescription#DeploymentStatus
   */
  readonly deploymentStatus?: string;

  /**
   * @schema ElasticBeanstalkConfigurationSettingsDescription#DateCreated
   */
  readonly dateCreated?: string;

  /**
   * @schema ElasticBeanstalkConfigurationSettingsDescription#DateUpdated
   */
  readonly dateUpdated?: string;

  /**
   * @schema ElasticBeanstalkConfigurationSettingsDescription#OptionSettings
   */
  readonly optionSettings?: ElasticBeanstalkConfigurationOptionSetting[];

}

/**
 * @schema ElasticBeanstalkCreateEnvironmentMessage
 */
export interface ElasticBeanstalkCreateEnvironmentMessage {
  /**
   * @schema ElasticBeanstalkCreateEnvironmentMessage#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema ElasticBeanstalkCreateEnvironmentMessage#EnvironmentName
   */
  readonly environmentName?: string;

  /**
   * @schema ElasticBeanstalkCreateEnvironmentMessage#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema ElasticBeanstalkCreateEnvironmentMessage#Description
   */
  readonly description?: string;

  /**
   * @schema ElasticBeanstalkCreateEnvironmentMessage#CNAMEPrefix
   */
  readonly cnamePrefix?: string;

  /**
   * @schema ElasticBeanstalkCreateEnvironmentMessage#Tier
   */
  readonly tier?: ElasticBeanstalkEnvironmentTier;

  /**
   * @schema ElasticBeanstalkCreateEnvironmentMessage#Tags
   */
  readonly tags?: ElasticBeanstalkTag[];

  /**
   * @schema ElasticBeanstalkCreateEnvironmentMessage#VersionLabel
   */
  readonly versionLabel?: string;

  /**
   * @schema ElasticBeanstalkCreateEnvironmentMessage#TemplateName
   */
  readonly templateName?: string;

  /**
   * @schema ElasticBeanstalkCreateEnvironmentMessage#SolutionStackName
   */
  readonly solutionStackName?: string;

  /**
   * @schema ElasticBeanstalkCreateEnvironmentMessage#PlatformArn
   */
  readonly platformArn?: string;

  /**
   * @schema ElasticBeanstalkCreateEnvironmentMessage#OptionSettings
   */
  readonly optionSettings?: ElasticBeanstalkConfigurationOptionSetting[];

  /**
   * @schema ElasticBeanstalkCreateEnvironmentMessage#OptionsToRemove
   */
  readonly optionsToRemove?: ElasticBeanstalkOptionSpecification[];

  /**
   * @schema ElasticBeanstalkCreateEnvironmentMessage#OperationsRole
   */
  readonly operationsRole?: string;

}

/**
 * @schema ElasticBeanstalkEnvironmentDescription
 */
export interface ElasticBeanstalkEnvironmentDescription {
  /**
   * @schema ElasticBeanstalkEnvironmentDescription#EnvironmentName
   */
  readonly environmentName?: string;

  /**
   * @schema ElasticBeanstalkEnvironmentDescription#EnvironmentId
   */
  readonly environmentId?: string;

  /**
   * @schema ElasticBeanstalkEnvironmentDescription#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema ElasticBeanstalkEnvironmentDescription#VersionLabel
   */
  readonly versionLabel?: string;

  /**
   * @schema ElasticBeanstalkEnvironmentDescription#SolutionStackName
   */
  readonly solutionStackName?: string;

  /**
   * @schema ElasticBeanstalkEnvironmentDescription#PlatformArn
   */
  readonly platformArn?: string;

  /**
   * @schema ElasticBeanstalkEnvironmentDescription#TemplateName
   */
  readonly templateName?: string;

  /**
   * @schema ElasticBeanstalkEnvironmentDescription#Description
   */
  readonly description?: string;

  /**
   * @schema ElasticBeanstalkEnvironmentDescription#EndpointURL
   */
  readonly endpointUrl?: string;

  /**
   * @schema ElasticBeanstalkEnvironmentDescription#CNAME
   */
  readonly cname?: string;

  /**
   * @schema ElasticBeanstalkEnvironmentDescription#DateCreated
   */
  readonly dateCreated?: string;

  /**
   * @schema ElasticBeanstalkEnvironmentDescription#DateUpdated
   */
  readonly dateUpdated?: string;

  /**
   * @schema ElasticBeanstalkEnvironmentDescription#Status
   */
  readonly status?: string;

  /**
   * @schema ElasticBeanstalkEnvironmentDescription#AbortableOperationInProgress
   */
  readonly abortableOperationInProgress?: boolean;

  /**
   * @schema ElasticBeanstalkEnvironmentDescription#Health
   */
  readonly health?: string;

  /**
   * @schema ElasticBeanstalkEnvironmentDescription#HealthStatus
   */
  readonly healthStatus?: string;

  /**
   * @schema ElasticBeanstalkEnvironmentDescription#Resources
   */
  readonly resources?: ElasticBeanstalkEnvironmentResourcesDescription;

  /**
   * @schema ElasticBeanstalkEnvironmentDescription#Tier
   */
  readonly tier?: ElasticBeanstalkEnvironmentTier;

  /**
   * @schema ElasticBeanstalkEnvironmentDescription#EnvironmentLinks
   */
  readonly environmentLinks?: ElasticBeanstalkEnvironmentLink[];

  /**
   * @schema ElasticBeanstalkEnvironmentDescription#EnvironmentArn
   */
  readonly environmentArn?: string;

  /**
   * @schema ElasticBeanstalkEnvironmentDescription#OperationsRole
   */
  readonly operationsRole?: string;

}

/**
 * @schema ElasticBeanstalkCreatePlatformVersionRequest
 */
export interface ElasticBeanstalkCreatePlatformVersionRequest {
  /**
   * @schema ElasticBeanstalkCreatePlatformVersionRequest#PlatformName
   */
  readonly platformName: string;

  /**
   * @schema ElasticBeanstalkCreatePlatformVersionRequest#PlatformVersion
   */
  readonly platformVersion: string;

  /**
   * @schema ElasticBeanstalkCreatePlatformVersionRequest#PlatformDefinitionBundle
   */
  readonly platformDefinitionBundle: ElasticBeanstalkS3Location;

  /**
   * @schema ElasticBeanstalkCreatePlatformVersionRequest#EnvironmentName
   */
  readonly environmentName?: string;

  /**
   * @schema ElasticBeanstalkCreatePlatformVersionRequest#OptionSettings
   */
  readonly optionSettings?: ElasticBeanstalkConfigurationOptionSetting[];

  /**
   * @schema ElasticBeanstalkCreatePlatformVersionRequest#Tags
   */
  readonly tags?: ElasticBeanstalkTag[];

}

/**
 * @schema ElasticBeanstalkCreatePlatformVersionResult
 */
export interface ElasticBeanstalkCreatePlatformVersionResult {
  /**
   * @schema ElasticBeanstalkCreatePlatformVersionResult#PlatformSummary
   */
  readonly platformSummary?: ElasticBeanstalkPlatformSummary;

  /**
   * @schema ElasticBeanstalkCreatePlatformVersionResult#Builder
   */
  readonly builder?: ElasticBeanstalkBuilder;

}

/**
 * @schema ElasticBeanstalkCreateStorageLocationResultMessage
 */
export interface ElasticBeanstalkCreateStorageLocationResultMessage {
  /**
   * @schema ElasticBeanstalkCreateStorageLocationResultMessage#S3Bucket
   */
  readonly s3Bucket?: string;

}

/**
 * @schema ElasticBeanstalkDeleteApplicationMessage
 */
export interface ElasticBeanstalkDeleteApplicationMessage {
  /**
   * @schema ElasticBeanstalkDeleteApplicationMessage#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema ElasticBeanstalkDeleteApplicationMessage#TerminateEnvByForce
   */
  readonly terminateEnvByForce?: boolean;

}

/**
 * @schema ElasticBeanstalkDeleteApplicationVersionMessage
 */
export interface ElasticBeanstalkDeleteApplicationVersionMessage {
  /**
   * @schema ElasticBeanstalkDeleteApplicationVersionMessage#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema ElasticBeanstalkDeleteApplicationVersionMessage#VersionLabel
   */
  readonly versionLabel: string;

  /**
   * @schema ElasticBeanstalkDeleteApplicationVersionMessage#DeleteSourceBundle
   */
  readonly deleteSourceBundle?: boolean;

}

/**
 * @schema ElasticBeanstalkDeleteConfigurationTemplateMessage
 */
export interface ElasticBeanstalkDeleteConfigurationTemplateMessage {
  /**
   * @schema ElasticBeanstalkDeleteConfigurationTemplateMessage#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema ElasticBeanstalkDeleteConfigurationTemplateMessage#TemplateName
   */
  readonly templateName: string;

}

/**
 * @schema ElasticBeanstalkDeleteEnvironmentConfigurationMessage
 */
export interface ElasticBeanstalkDeleteEnvironmentConfigurationMessage {
  /**
   * @schema ElasticBeanstalkDeleteEnvironmentConfigurationMessage#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema ElasticBeanstalkDeleteEnvironmentConfigurationMessage#EnvironmentName
   */
  readonly environmentName: string;

}

/**
 * @schema ElasticBeanstalkDeletePlatformVersionRequest
 */
export interface ElasticBeanstalkDeletePlatformVersionRequest {
  /**
   * @schema ElasticBeanstalkDeletePlatformVersionRequest#PlatformArn
   */
  readonly platformArn?: string;

}

/**
 * @schema ElasticBeanstalkDeletePlatformVersionResult
 */
export interface ElasticBeanstalkDeletePlatformVersionResult {
  /**
   * @schema ElasticBeanstalkDeletePlatformVersionResult#PlatformSummary
   */
  readonly platformSummary?: ElasticBeanstalkPlatformSummary;

}

/**
 * @schema ElasticBeanstalkDescribeAccountAttributesResult
 */
export interface ElasticBeanstalkDescribeAccountAttributesResult {
  /**
   * @schema ElasticBeanstalkDescribeAccountAttributesResult#ResourceQuotas
   */
  readonly resourceQuotas?: ElasticBeanstalkResourceQuotas;

}

/**
 * @schema ElasticBeanstalkDescribeApplicationVersionsMessage
 */
export interface ElasticBeanstalkDescribeApplicationVersionsMessage {
  /**
   * @schema ElasticBeanstalkDescribeApplicationVersionsMessage#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema ElasticBeanstalkDescribeApplicationVersionsMessage#VersionLabels
   */
  readonly versionLabels?: string[];

  /**
   * @schema ElasticBeanstalkDescribeApplicationVersionsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema ElasticBeanstalkDescribeApplicationVersionsMessage#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ElasticBeanstalkApplicationVersionDescriptionsMessage
 */
export interface ElasticBeanstalkApplicationVersionDescriptionsMessage {
  /**
   * @schema ElasticBeanstalkApplicationVersionDescriptionsMessage#ApplicationVersions
   */
  readonly applicationVersions?: ElasticBeanstalkApplicationVersionDescription[];

  /**
   * @schema ElasticBeanstalkApplicationVersionDescriptionsMessage#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ElasticBeanstalkDescribeApplicationsMessage
 */
export interface ElasticBeanstalkDescribeApplicationsMessage {
  /**
   * @schema ElasticBeanstalkDescribeApplicationsMessage#ApplicationNames
   */
  readonly applicationNames?: string[];

}

/**
 * @schema ElasticBeanstalkApplicationDescriptionsMessage
 */
export interface ElasticBeanstalkApplicationDescriptionsMessage {
  /**
   * @schema ElasticBeanstalkApplicationDescriptionsMessage#Applications
   */
  readonly applications?: ElasticBeanstalkApplicationDescription[];

}

/**
 * @schema ElasticBeanstalkDescribeConfigurationOptionsMessage
 */
export interface ElasticBeanstalkDescribeConfigurationOptionsMessage {
  /**
   * @schema ElasticBeanstalkDescribeConfigurationOptionsMessage#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema ElasticBeanstalkDescribeConfigurationOptionsMessage#TemplateName
   */
  readonly templateName?: string;

  /**
   * @schema ElasticBeanstalkDescribeConfigurationOptionsMessage#EnvironmentName
   */
  readonly environmentName?: string;

  /**
   * @schema ElasticBeanstalkDescribeConfigurationOptionsMessage#SolutionStackName
   */
  readonly solutionStackName?: string;

  /**
   * @schema ElasticBeanstalkDescribeConfigurationOptionsMessage#PlatformArn
   */
  readonly platformArn?: string;

  /**
   * @schema ElasticBeanstalkDescribeConfigurationOptionsMessage#Options
   */
  readonly options?: ElasticBeanstalkOptionSpecification[];

}

/**
 * @schema ElasticBeanstalkConfigurationOptionsDescription
 */
export interface ElasticBeanstalkConfigurationOptionsDescription {
  /**
   * @schema ElasticBeanstalkConfigurationOptionsDescription#SolutionStackName
   */
  readonly solutionStackName?: string;

  /**
   * @schema ElasticBeanstalkConfigurationOptionsDescription#PlatformArn
   */
  readonly platformArn?: string;

  /**
   * @schema ElasticBeanstalkConfigurationOptionsDescription#Options
   */
  readonly options?: ElasticBeanstalkConfigurationOptionDescription[];

}

/**
 * @schema ElasticBeanstalkDescribeConfigurationSettingsMessage
 */
export interface ElasticBeanstalkDescribeConfigurationSettingsMessage {
  /**
   * @schema ElasticBeanstalkDescribeConfigurationSettingsMessage#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema ElasticBeanstalkDescribeConfigurationSettingsMessage#TemplateName
   */
  readonly templateName?: string;

  /**
   * @schema ElasticBeanstalkDescribeConfigurationSettingsMessage#EnvironmentName
   */
  readonly environmentName?: string;

}

/**
 * @schema ElasticBeanstalkConfigurationSettingsDescriptions
 */
export interface ElasticBeanstalkConfigurationSettingsDescriptions {
  /**
   * @schema ElasticBeanstalkConfigurationSettingsDescriptions#ConfigurationSettings
   */
  readonly configurationSettings?: ElasticBeanstalkConfigurationSettingsDescription[];

}

/**
 * @schema ElasticBeanstalkDescribeEnvironmentHealthRequest
 */
export interface ElasticBeanstalkDescribeEnvironmentHealthRequest {
  /**
   * @schema ElasticBeanstalkDescribeEnvironmentHealthRequest#EnvironmentName
   */
  readonly environmentName?: string;

  /**
   * @schema ElasticBeanstalkDescribeEnvironmentHealthRequest#EnvironmentId
   */
  readonly environmentId?: string;

  /**
   * @schema ElasticBeanstalkDescribeEnvironmentHealthRequest#AttributeNames
   */
  readonly attributeNames?: string[];

}

/**
 * @schema ElasticBeanstalkDescribeEnvironmentHealthResult
 */
export interface ElasticBeanstalkDescribeEnvironmentHealthResult {
  /**
   * @schema ElasticBeanstalkDescribeEnvironmentHealthResult#EnvironmentName
   */
  readonly environmentName?: string;

  /**
   * @schema ElasticBeanstalkDescribeEnvironmentHealthResult#HealthStatus
   */
  readonly healthStatus?: string;

  /**
   * @schema ElasticBeanstalkDescribeEnvironmentHealthResult#Status
   */
  readonly status?: string;

  /**
   * @schema ElasticBeanstalkDescribeEnvironmentHealthResult#Color
   */
  readonly color?: string;

  /**
   * @schema ElasticBeanstalkDescribeEnvironmentHealthResult#Causes
   */
  readonly causes?: string[];

  /**
   * @schema ElasticBeanstalkDescribeEnvironmentHealthResult#ApplicationMetrics
   */
  readonly applicationMetrics?: ElasticBeanstalkApplicationMetrics;

  /**
   * @schema ElasticBeanstalkDescribeEnvironmentHealthResult#InstancesHealth
   */
  readonly instancesHealth?: ElasticBeanstalkInstanceHealthSummary;

  /**
   * @schema ElasticBeanstalkDescribeEnvironmentHealthResult#RefreshedAt
   */
  readonly refreshedAt?: string;

}

/**
 * @schema ElasticBeanstalkDescribeEnvironmentManagedActionHistoryRequest
 */
export interface ElasticBeanstalkDescribeEnvironmentManagedActionHistoryRequest {
  /**
   * @schema ElasticBeanstalkDescribeEnvironmentManagedActionHistoryRequest#EnvironmentId
   */
  readonly environmentId?: string;

  /**
   * @schema ElasticBeanstalkDescribeEnvironmentManagedActionHistoryRequest#EnvironmentName
   */
  readonly environmentName?: string;

  /**
   * @schema ElasticBeanstalkDescribeEnvironmentManagedActionHistoryRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ElasticBeanstalkDescribeEnvironmentManagedActionHistoryRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema ElasticBeanstalkDescribeEnvironmentManagedActionHistoryResult
 */
export interface ElasticBeanstalkDescribeEnvironmentManagedActionHistoryResult {
  /**
   * @schema ElasticBeanstalkDescribeEnvironmentManagedActionHistoryResult#ManagedActionHistoryItems
   */
  readonly managedActionHistoryItems?: ElasticBeanstalkManagedActionHistoryItem[];

  /**
   * @schema ElasticBeanstalkDescribeEnvironmentManagedActionHistoryResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ElasticBeanstalkDescribeEnvironmentManagedActionsRequest
 */
export interface ElasticBeanstalkDescribeEnvironmentManagedActionsRequest {
  /**
   * @schema ElasticBeanstalkDescribeEnvironmentManagedActionsRequest#EnvironmentName
   */
  readonly environmentName?: string;

  /**
   * @schema ElasticBeanstalkDescribeEnvironmentManagedActionsRequest#EnvironmentId
   */
  readonly environmentId?: string;

  /**
   * @schema ElasticBeanstalkDescribeEnvironmentManagedActionsRequest#Status
   */
  readonly status?: string;

}

/**
 * @schema ElasticBeanstalkDescribeEnvironmentManagedActionsResult
 */
export interface ElasticBeanstalkDescribeEnvironmentManagedActionsResult {
  /**
   * @schema ElasticBeanstalkDescribeEnvironmentManagedActionsResult#ManagedActions
   */
  readonly managedActions?: ElasticBeanstalkManagedAction[];

}

/**
 * @schema ElasticBeanstalkDescribeEnvironmentResourcesMessage
 */
export interface ElasticBeanstalkDescribeEnvironmentResourcesMessage {
  /**
   * @schema ElasticBeanstalkDescribeEnvironmentResourcesMessage#EnvironmentId
   */
  readonly environmentId?: string;

  /**
   * @schema ElasticBeanstalkDescribeEnvironmentResourcesMessage#EnvironmentName
   */
  readonly environmentName?: string;

}

/**
 * @schema ElasticBeanstalkEnvironmentResourceDescriptionsMessage
 */
export interface ElasticBeanstalkEnvironmentResourceDescriptionsMessage {
  /**
   * @schema ElasticBeanstalkEnvironmentResourceDescriptionsMessage#EnvironmentResources
   */
  readonly environmentResources?: ElasticBeanstalkEnvironmentResourceDescription;

}

/**
 * @schema ElasticBeanstalkDescribeEnvironmentsMessage
 */
export interface ElasticBeanstalkDescribeEnvironmentsMessage {
  /**
   * @schema ElasticBeanstalkDescribeEnvironmentsMessage#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema ElasticBeanstalkDescribeEnvironmentsMessage#VersionLabel
   */
  readonly versionLabel?: string;

  /**
   * @schema ElasticBeanstalkDescribeEnvironmentsMessage#EnvironmentIds
   */
  readonly environmentIds?: string[];

  /**
   * @schema ElasticBeanstalkDescribeEnvironmentsMessage#EnvironmentNames
   */
  readonly environmentNames?: string[];

  /**
   * @schema ElasticBeanstalkDescribeEnvironmentsMessage#IncludeDeleted
   */
  readonly includeDeleted?: boolean;

  /**
   * @schema ElasticBeanstalkDescribeEnvironmentsMessage#IncludedDeletedBackTo
   */
  readonly includedDeletedBackTo?: string;

  /**
   * @schema ElasticBeanstalkDescribeEnvironmentsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema ElasticBeanstalkDescribeEnvironmentsMessage#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ElasticBeanstalkDescribeEventsMessage
 */
export interface ElasticBeanstalkDescribeEventsMessage {
  /**
   * @schema ElasticBeanstalkDescribeEventsMessage#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema ElasticBeanstalkDescribeEventsMessage#VersionLabel
   */
  readonly versionLabel?: string;

  /**
   * @schema ElasticBeanstalkDescribeEventsMessage#TemplateName
   */
  readonly templateName?: string;

  /**
   * @schema ElasticBeanstalkDescribeEventsMessage#EnvironmentId
   */
  readonly environmentId?: string;

  /**
   * @schema ElasticBeanstalkDescribeEventsMessage#EnvironmentName
   */
  readonly environmentName?: string;

  /**
   * @schema ElasticBeanstalkDescribeEventsMessage#PlatformArn
   */
  readonly platformArn?: string;

  /**
   * @schema ElasticBeanstalkDescribeEventsMessage#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema ElasticBeanstalkDescribeEventsMessage#Severity
   */
  readonly severity?: string;

  /**
   * @schema ElasticBeanstalkDescribeEventsMessage#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema ElasticBeanstalkDescribeEventsMessage#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema ElasticBeanstalkDescribeEventsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema ElasticBeanstalkDescribeEventsMessage#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ElasticBeanstalkEventDescriptionsMessage
 */
export interface ElasticBeanstalkEventDescriptionsMessage {
  /**
   * @schema ElasticBeanstalkEventDescriptionsMessage#Events
   */
  readonly events?: ElasticBeanstalkEventDescription[];

  /**
   * @schema ElasticBeanstalkEventDescriptionsMessage#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ElasticBeanstalkDescribeInstancesHealthRequest
 */
export interface ElasticBeanstalkDescribeInstancesHealthRequest {
  /**
   * @schema ElasticBeanstalkDescribeInstancesHealthRequest#EnvironmentName
   */
  readonly environmentName?: string;

  /**
   * @schema ElasticBeanstalkDescribeInstancesHealthRequest#EnvironmentId
   */
  readonly environmentId?: string;

  /**
   * @schema ElasticBeanstalkDescribeInstancesHealthRequest#AttributeNames
   */
  readonly attributeNames?: string[];

  /**
   * @schema ElasticBeanstalkDescribeInstancesHealthRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ElasticBeanstalkDescribeInstancesHealthResult
 */
export interface ElasticBeanstalkDescribeInstancesHealthResult {
  /**
   * @schema ElasticBeanstalkDescribeInstancesHealthResult#InstanceHealthList
   */
  readonly instanceHealthList?: ElasticBeanstalkSingleInstanceHealth[];

  /**
   * @schema ElasticBeanstalkDescribeInstancesHealthResult#RefreshedAt
   */
  readonly refreshedAt?: string;

  /**
   * @schema ElasticBeanstalkDescribeInstancesHealthResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ElasticBeanstalkDescribePlatformVersionRequest
 */
export interface ElasticBeanstalkDescribePlatformVersionRequest {
  /**
   * @schema ElasticBeanstalkDescribePlatformVersionRequest#PlatformArn
   */
  readonly platformArn?: string;

}

/**
 * @schema ElasticBeanstalkDescribePlatformVersionResult
 */
export interface ElasticBeanstalkDescribePlatformVersionResult {
  /**
   * @schema ElasticBeanstalkDescribePlatformVersionResult#PlatformDescription
   */
  readonly platformDescription?: ElasticBeanstalkPlatformDescription;

}

/**
 * @schema ElasticBeanstalkDisassociateEnvironmentOperationsRoleMessage
 */
export interface ElasticBeanstalkDisassociateEnvironmentOperationsRoleMessage {
  /**
   * @schema ElasticBeanstalkDisassociateEnvironmentOperationsRoleMessage#EnvironmentName
   */
  readonly environmentName: string;

}

/**
 * @schema ElasticBeanstalkListAvailableSolutionStacksResultMessage
 */
export interface ElasticBeanstalkListAvailableSolutionStacksResultMessage {
  /**
   * @schema ElasticBeanstalkListAvailableSolutionStacksResultMessage#SolutionStacks
   */
  readonly solutionStacks?: string[];

  /**
   * @schema ElasticBeanstalkListAvailableSolutionStacksResultMessage#SolutionStackDetails
   */
  readonly solutionStackDetails?: ElasticBeanstalkSolutionStackDescription[];

}

/**
 * @schema ElasticBeanstalkListPlatformBranchesRequest
 */
export interface ElasticBeanstalkListPlatformBranchesRequest {
  /**
   * @schema ElasticBeanstalkListPlatformBranchesRequest#Filters
   */
  readonly filters?: ElasticBeanstalkSearchFilter[];

  /**
   * @schema ElasticBeanstalkListPlatformBranchesRequest#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema ElasticBeanstalkListPlatformBranchesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ElasticBeanstalkListPlatformBranchesResult
 */
export interface ElasticBeanstalkListPlatformBranchesResult {
  /**
   * @schema ElasticBeanstalkListPlatformBranchesResult#PlatformBranchSummaryList
   */
  readonly platformBranchSummaryList?: ElasticBeanstalkPlatformBranchSummary[];

  /**
   * @schema ElasticBeanstalkListPlatformBranchesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ElasticBeanstalkListPlatformVersionsRequest
 */
export interface ElasticBeanstalkListPlatformVersionsRequest {
  /**
   * @schema ElasticBeanstalkListPlatformVersionsRequest#Filters
   */
  readonly filters?: ElasticBeanstalkPlatformFilter[];

  /**
   * @schema ElasticBeanstalkListPlatformVersionsRequest#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema ElasticBeanstalkListPlatformVersionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ElasticBeanstalkListPlatformVersionsResult
 */
export interface ElasticBeanstalkListPlatformVersionsResult {
  /**
   * @schema ElasticBeanstalkListPlatformVersionsResult#PlatformSummaryList
   */
  readonly platformSummaryList?: ElasticBeanstalkPlatformSummary[];

  /**
   * @schema ElasticBeanstalkListPlatformVersionsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ElasticBeanstalkListTagsForResourceMessage
 */
export interface ElasticBeanstalkListTagsForResourceMessage {
  /**
   * @schema ElasticBeanstalkListTagsForResourceMessage#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema ElasticBeanstalkResourceTagsDescriptionMessage
 */
export interface ElasticBeanstalkResourceTagsDescriptionMessage {
  /**
   * @schema ElasticBeanstalkResourceTagsDescriptionMessage#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema ElasticBeanstalkResourceTagsDescriptionMessage#ResourceTags
   */
  readonly resourceTags?: ElasticBeanstalkTag[];

}

/**
 * @schema ElasticBeanstalkRebuildEnvironmentMessage
 */
export interface ElasticBeanstalkRebuildEnvironmentMessage {
  /**
   * @schema ElasticBeanstalkRebuildEnvironmentMessage#EnvironmentId
   */
  readonly environmentId?: string;

  /**
   * @schema ElasticBeanstalkRebuildEnvironmentMessage#EnvironmentName
   */
  readonly environmentName?: string;

}

/**
 * @schema ElasticBeanstalkRequestEnvironmentInfoMessage
 */
export interface ElasticBeanstalkRequestEnvironmentInfoMessage {
  /**
   * @schema ElasticBeanstalkRequestEnvironmentInfoMessage#EnvironmentId
   */
  readonly environmentId?: string;

  /**
   * @schema ElasticBeanstalkRequestEnvironmentInfoMessage#EnvironmentName
   */
  readonly environmentName?: string;

  /**
   * @schema ElasticBeanstalkRequestEnvironmentInfoMessage#InfoType
   */
  readonly infoType: string;

}

/**
 * @schema ElasticBeanstalkRestartAppServerMessage
 */
export interface ElasticBeanstalkRestartAppServerMessage {
  /**
   * @schema ElasticBeanstalkRestartAppServerMessage#EnvironmentId
   */
  readonly environmentId?: string;

  /**
   * @schema ElasticBeanstalkRestartAppServerMessage#EnvironmentName
   */
  readonly environmentName?: string;

}

/**
 * @schema ElasticBeanstalkRetrieveEnvironmentInfoMessage
 */
export interface ElasticBeanstalkRetrieveEnvironmentInfoMessage {
  /**
   * @schema ElasticBeanstalkRetrieveEnvironmentInfoMessage#EnvironmentId
   */
  readonly environmentId?: string;

  /**
   * @schema ElasticBeanstalkRetrieveEnvironmentInfoMessage#EnvironmentName
   */
  readonly environmentName?: string;

  /**
   * @schema ElasticBeanstalkRetrieveEnvironmentInfoMessage#InfoType
   */
  readonly infoType: string;

}

/**
 * @schema ElasticBeanstalkRetrieveEnvironmentInfoResultMessage
 */
export interface ElasticBeanstalkRetrieveEnvironmentInfoResultMessage {
  /**
   * @schema ElasticBeanstalkRetrieveEnvironmentInfoResultMessage#EnvironmentInfo
   */
  readonly environmentInfo?: ElasticBeanstalkEnvironmentInfoDescription[];

}

/**
 * @schema ElasticBeanstalkSwapEnvironmentCnamEsMessage
 */
export interface ElasticBeanstalkSwapEnvironmentCnamEsMessage {
  /**
   * @schema ElasticBeanstalkSwapEnvironmentCnamEsMessage#SourceEnvironmentId
   */
  readonly sourceEnvironmentId?: string;

  /**
   * @schema ElasticBeanstalkSwapEnvironmentCnamEsMessage#SourceEnvironmentName
   */
  readonly sourceEnvironmentName?: string;

  /**
   * @schema ElasticBeanstalkSwapEnvironmentCnamEsMessage#DestinationEnvironmentId
   */
  readonly destinationEnvironmentId?: string;

  /**
   * @schema ElasticBeanstalkSwapEnvironmentCnamEsMessage#DestinationEnvironmentName
   */
  readonly destinationEnvironmentName?: string;

}

/**
 * @schema ElasticBeanstalkTerminateEnvironmentMessage
 */
export interface ElasticBeanstalkTerminateEnvironmentMessage {
  /**
   * @schema ElasticBeanstalkTerminateEnvironmentMessage#EnvironmentId
   */
  readonly environmentId?: string;

  /**
   * @schema ElasticBeanstalkTerminateEnvironmentMessage#EnvironmentName
   */
  readonly environmentName?: string;

  /**
   * @schema ElasticBeanstalkTerminateEnvironmentMessage#TerminateResources
   */
  readonly terminateResources?: boolean;

  /**
   * @schema ElasticBeanstalkTerminateEnvironmentMessage#ForceTerminate
   */
  readonly forceTerminate?: boolean;

}

/**
 * @schema ElasticBeanstalkUpdateApplicationMessage
 */
export interface ElasticBeanstalkUpdateApplicationMessage {
  /**
   * @schema ElasticBeanstalkUpdateApplicationMessage#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema ElasticBeanstalkUpdateApplicationMessage#Description
   */
  readonly description?: string;

}

/**
 * @schema ElasticBeanstalkUpdateApplicationResourceLifecycleMessage
 */
export interface ElasticBeanstalkUpdateApplicationResourceLifecycleMessage {
  /**
   * @schema ElasticBeanstalkUpdateApplicationResourceLifecycleMessage#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema ElasticBeanstalkUpdateApplicationResourceLifecycleMessage#ResourceLifecycleConfig
   */
  readonly resourceLifecycleConfig: ElasticBeanstalkApplicationResourceLifecycleConfig;

}

/**
 * @schema ElasticBeanstalkApplicationResourceLifecycleDescriptionMessage
 */
export interface ElasticBeanstalkApplicationResourceLifecycleDescriptionMessage {
  /**
   * @schema ElasticBeanstalkApplicationResourceLifecycleDescriptionMessage#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema ElasticBeanstalkApplicationResourceLifecycleDescriptionMessage#ResourceLifecycleConfig
   */
  readonly resourceLifecycleConfig?: ElasticBeanstalkApplicationResourceLifecycleConfig;

}

/**
 * @schema ElasticBeanstalkUpdateApplicationVersionMessage
 */
export interface ElasticBeanstalkUpdateApplicationVersionMessage {
  /**
   * @schema ElasticBeanstalkUpdateApplicationVersionMessage#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema ElasticBeanstalkUpdateApplicationVersionMessage#VersionLabel
   */
  readonly versionLabel: string;

  /**
   * @schema ElasticBeanstalkUpdateApplicationVersionMessage#Description
   */
  readonly description?: string;

}

/**
 * @schema ElasticBeanstalkUpdateConfigurationTemplateMessage
 */
export interface ElasticBeanstalkUpdateConfigurationTemplateMessage {
  /**
   * @schema ElasticBeanstalkUpdateConfigurationTemplateMessage#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema ElasticBeanstalkUpdateConfigurationTemplateMessage#TemplateName
   */
  readonly templateName: string;

  /**
   * @schema ElasticBeanstalkUpdateConfigurationTemplateMessage#Description
   */
  readonly description?: string;

  /**
   * @schema ElasticBeanstalkUpdateConfigurationTemplateMessage#OptionSettings
   */
  readonly optionSettings?: ElasticBeanstalkConfigurationOptionSetting[];

  /**
   * @schema ElasticBeanstalkUpdateConfigurationTemplateMessage#OptionsToRemove
   */
  readonly optionsToRemove?: ElasticBeanstalkOptionSpecification[];

}

/**
 * @schema ElasticBeanstalkUpdateEnvironmentMessage
 */
export interface ElasticBeanstalkUpdateEnvironmentMessage {
  /**
   * @schema ElasticBeanstalkUpdateEnvironmentMessage#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema ElasticBeanstalkUpdateEnvironmentMessage#EnvironmentId
   */
  readonly environmentId?: string;

  /**
   * @schema ElasticBeanstalkUpdateEnvironmentMessage#EnvironmentName
   */
  readonly environmentName?: string;

  /**
   * @schema ElasticBeanstalkUpdateEnvironmentMessage#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema ElasticBeanstalkUpdateEnvironmentMessage#Description
   */
  readonly description?: string;

  /**
   * @schema ElasticBeanstalkUpdateEnvironmentMessage#Tier
   */
  readonly tier?: ElasticBeanstalkEnvironmentTier;

  /**
   * @schema ElasticBeanstalkUpdateEnvironmentMessage#VersionLabel
   */
  readonly versionLabel?: string;

  /**
   * @schema ElasticBeanstalkUpdateEnvironmentMessage#TemplateName
   */
  readonly templateName?: string;

  /**
   * @schema ElasticBeanstalkUpdateEnvironmentMessage#SolutionStackName
   */
  readonly solutionStackName?: string;

  /**
   * @schema ElasticBeanstalkUpdateEnvironmentMessage#PlatformArn
   */
  readonly platformArn?: string;

  /**
   * @schema ElasticBeanstalkUpdateEnvironmentMessage#OptionSettings
   */
  readonly optionSettings?: ElasticBeanstalkConfigurationOptionSetting[];

  /**
   * @schema ElasticBeanstalkUpdateEnvironmentMessage#OptionsToRemove
   */
  readonly optionsToRemove?: ElasticBeanstalkOptionSpecification[];

}

/**
 * @schema ElasticBeanstalkUpdateTagsForResourceMessage
 */
export interface ElasticBeanstalkUpdateTagsForResourceMessage {
  /**
   * @schema ElasticBeanstalkUpdateTagsForResourceMessage#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema ElasticBeanstalkUpdateTagsForResourceMessage#TagsToAdd
   */
  readonly tagsToAdd?: ElasticBeanstalkTag[];

  /**
   * @schema ElasticBeanstalkUpdateTagsForResourceMessage#TagsToRemove
   */
  readonly tagsToRemove?: string[];

}

/**
 * @schema ElasticBeanstalkValidateConfigurationSettingsMessage
 */
export interface ElasticBeanstalkValidateConfigurationSettingsMessage {
  /**
   * @schema ElasticBeanstalkValidateConfigurationSettingsMessage#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema ElasticBeanstalkValidateConfigurationSettingsMessage#TemplateName
   */
  readonly templateName?: string;

  /**
   * @schema ElasticBeanstalkValidateConfigurationSettingsMessage#EnvironmentName
   */
  readonly environmentName?: string;

  /**
   * @schema ElasticBeanstalkValidateConfigurationSettingsMessage#OptionSettings
   */
  readonly optionSettings: ElasticBeanstalkConfigurationOptionSetting[];

}

/**
 * @schema ElasticBeanstalkConfigurationSettingsValidationMessages
 */
export interface ElasticBeanstalkConfigurationSettingsValidationMessages {
  /**
   * @schema ElasticBeanstalkConfigurationSettingsValidationMessages#Messages
   */
  readonly messages?: ElasticBeanstalkValidationMessage[];

}

/**
 * @schema ElasticBeanstalkApplicationResourceLifecycleConfig
 */
export interface ElasticBeanstalkApplicationResourceLifecycleConfig {
  /**
   * @schema ElasticBeanstalkApplicationResourceLifecycleConfig#ServiceRole
   */
  readonly serviceRole?: string;

  /**
   * @schema ElasticBeanstalkApplicationResourceLifecycleConfig#VersionLifecycleConfig
   */
  readonly versionLifecycleConfig?: ElasticBeanstalkApplicationVersionLifecycleConfig;

}

/**
 * @schema ElasticBeanstalkTag
 */
export interface ElasticBeanstalkTag {
  /**
   * @schema ElasticBeanstalkTag#Key
   */
  readonly key?: string;

  /**
   * @schema ElasticBeanstalkTag#Value
   */
  readonly value?: string;

}

/**
 * @schema ElasticBeanstalkApplicationDescription
 */
export interface ElasticBeanstalkApplicationDescription {
  /**
   * @schema ElasticBeanstalkApplicationDescription#ApplicationArn
   */
  readonly applicationArn?: string;

  /**
   * @schema ElasticBeanstalkApplicationDescription#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema ElasticBeanstalkApplicationDescription#Description
   */
  readonly description?: string;

  /**
   * @schema ElasticBeanstalkApplicationDescription#DateCreated
   */
  readonly dateCreated?: string;

  /**
   * @schema ElasticBeanstalkApplicationDescription#DateUpdated
   */
  readonly dateUpdated?: string;

  /**
   * @schema ElasticBeanstalkApplicationDescription#Versions
   */
  readonly versions?: string[];

  /**
   * @schema ElasticBeanstalkApplicationDescription#ConfigurationTemplates
   */
  readonly configurationTemplates?: string[];

  /**
   * @schema ElasticBeanstalkApplicationDescription#ResourceLifecycleConfig
   */
  readonly resourceLifecycleConfig?: ElasticBeanstalkApplicationResourceLifecycleConfig;

}

/**
 * @schema ElasticBeanstalkSourceBuildInformation
 */
export interface ElasticBeanstalkSourceBuildInformation {
  /**
   * @schema ElasticBeanstalkSourceBuildInformation#SourceType
   */
  readonly sourceType: string;

  /**
   * @schema ElasticBeanstalkSourceBuildInformation#SourceRepository
   */
  readonly sourceRepository: string;

  /**
   * @schema ElasticBeanstalkSourceBuildInformation#SourceLocation
   */
  readonly sourceLocation: string;

}

/**
 * @schema ElasticBeanstalkS3Location
 */
export interface ElasticBeanstalkS3Location {
  /**
   * @schema ElasticBeanstalkS3Location#S3Bucket
   */
  readonly s3Bucket?: string;

  /**
   * @schema ElasticBeanstalkS3Location#S3Key
   */
  readonly s3Key?: string;

}

/**
 * @schema ElasticBeanstalkBuildConfiguration
 */
export interface ElasticBeanstalkBuildConfiguration {
  /**
   * @schema ElasticBeanstalkBuildConfiguration#ArtifactName
   */
  readonly artifactName?: string;

  /**
   * @schema ElasticBeanstalkBuildConfiguration#CodeBuildServiceRole
   */
  readonly codeBuildServiceRole: string;

  /**
   * @schema ElasticBeanstalkBuildConfiguration#ComputeType
   */
  readonly computeType?: string;

  /**
   * @schema ElasticBeanstalkBuildConfiguration#Image
   */
  readonly image: string;

  /**
   * @schema ElasticBeanstalkBuildConfiguration#TimeoutInMinutes
   */
  readonly timeoutInMinutes?: number;

}

/**
 * @schema ElasticBeanstalkApplicationVersionDescription
 */
export interface ElasticBeanstalkApplicationVersionDescription {
  /**
   * @schema ElasticBeanstalkApplicationVersionDescription#ApplicationVersionArn
   */
  readonly applicationVersionArn?: string;

  /**
   * @schema ElasticBeanstalkApplicationVersionDescription#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema ElasticBeanstalkApplicationVersionDescription#Description
   */
  readonly description?: string;

  /**
   * @schema ElasticBeanstalkApplicationVersionDescription#VersionLabel
   */
  readonly versionLabel?: string;

  /**
   * @schema ElasticBeanstalkApplicationVersionDescription#SourceBuildInformation
   */
  readonly sourceBuildInformation?: ElasticBeanstalkSourceBuildInformation;

  /**
   * @schema ElasticBeanstalkApplicationVersionDescription#BuildArn
   */
  readonly buildArn?: string;

  /**
   * @schema ElasticBeanstalkApplicationVersionDescription#SourceBundle
   */
  readonly sourceBundle?: ElasticBeanstalkS3Location;

  /**
   * @schema ElasticBeanstalkApplicationVersionDescription#DateCreated
   */
  readonly dateCreated?: string;

  /**
   * @schema ElasticBeanstalkApplicationVersionDescription#DateUpdated
   */
  readonly dateUpdated?: string;

  /**
   * @schema ElasticBeanstalkApplicationVersionDescription#Status
   */
  readonly status?: string;

}

/**
 * @schema ElasticBeanstalkSourceConfiguration
 */
export interface ElasticBeanstalkSourceConfiguration {
  /**
   * @schema ElasticBeanstalkSourceConfiguration#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema ElasticBeanstalkSourceConfiguration#TemplateName
   */
  readonly templateName?: string;

}

/**
 * @schema ElasticBeanstalkConfigurationOptionSetting
 */
export interface ElasticBeanstalkConfigurationOptionSetting {
  /**
   * @schema ElasticBeanstalkConfigurationOptionSetting#ResourceName
   */
  readonly resourceName?: string;

  /**
   * @schema ElasticBeanstalkConfigurationOptionSetting#Namespace
   */
  readonly namespace?: string;

  /**
   * @schema ElasticBeanstalkConfigurationOptionSetting#OptionName
   */
  readonly optionName?: string;

  /**
   * @schema ElasticBeanstalkConfigurationOptionSetting#Value
   */
  readonly value?: string;

}

/**
 * @schema ElasticBeanstalkEnvironmentTier
 */
export interface ElasticBeanstalkEnvironmentTier {
  /**
   * @schema ElasticBeanstalkEnvironmentTier#Name
   */
  readonly name?: string;

  /**
   * @schema ElasticBeanstalkEnvironmentTier#Type
   */
  readonly type?: string;

  /**
   * @schema ElasticBeanstalkEnvironmentTier#Version
   */
  readonly version?: string;

}

/**
 * @schema ElasticBeanstalkOptionSpecification
 */
export interface ElasticBeanstalkOptionSpecification {
  /**
   * @schema ElasticBeanstalkOptionSpecification#ResourceName
   */
  readonly resourceName?: string;

  /**
   * @schema ElasticBeanstalkOptionSpecification#Namespace
   */
  readonly namespace?: string;

  /**
   * @schema ElasticBeanstalkOptionSpecification#OptionName
   */
  readonly optionName?: string;

}

/**
 * @schema ElasticBeanstalkEnvironmentResourcesDescription
 */
export interface ElasticBeanstalkEnvironmentResourcesDescription {
  /**
   * @schema ElasticBeanstalkEnvironmentResourcesDescription#LoadBalancer
   */
  readonly loadBalancer?: ElasticBeanstalkLoadBalancerDescription;

}

/**
 * @schema ElasticBeanstalkEnvironmentLink
 */
export interface ElasticBeanstalkEnvironmentLink {
  /**
   * @schema ElasticBeanstalkEnvironmentLink#LinkName
   */
  readonly linkName?: string;

  /**
   * @schema ElasticBeanstalkEnvironmentLink#EnvironmentName
   */
  readonly environmentName?: string;

}

/**
 * @schema ElasticBeanstalkPlatformSummary
 */
export interface ElasticBeanstalkPlatformSummary {
  /**
   * @schema ElasticBeanstalkPlatformSummary#PlatformArn
   */
  readonly platformArn?: string;

  /**
   * @schema ElasticBeanstalkPlatformSummary#PlatformOwner
   */
  readonly platformOwner?: string;

  /**
   * @schema ElasticBeanstalkPlatformSummary#PlatformStatus
   */
  readonly platformStatus?: string;

  /**
   * @schema ElasticBeanstalkPlatformSummary#PlatformCategory
   */
  readonly platformCategory?: string;

  /**
   * @schema ElasticBeanstalkPlatformSummary#OperatingSystemName
   */
  readonly operatingSystemName?: string;

  /**
   * @schema ElasticBeanstalkPlatformSummary#OperatingSystemVersion
   */
  readonly operatingSystemVersion?: string;

  /**
   * @schema ElasticBeanstalkPlatformSummary#SupportedTierList
   */
  readonly supportedTierList?: string[];

  /**
   * @schema ElasticBeanstalkPlatformSummary#SupportedAddonList
   */
  readonly supportedAddonList?: string[];

  /**
   * @schema ElasticBeanstalkPlatformSummary#PlatformLifecycleState
   */
  readonly platformLifecycleState?: string;

  /**
   * @schema ElasticBeanstalkPlatformSummary#PlatformVersion
   */
  readonly platformVersion?: string;

  /**
   * @schema ElasticBeanstalkPlatformSummary#PlatformBranchName
   */
  readonly platformBranchName?: string;

  /**
   * @schema ElasticBeanstalkPlatformSummary#PlatformBranchLifecycleState
   */
  readonly platformBranchLifecycleState?: string;

}

/**
 * @schema ElasticBeanstalkBuilder
 */
export interface ElasticBeanstalkBuilder {
  /**
   * @schema ElasticBeanstalkBuilder#ARN
   */
  readonly arn?: string;

}

/**
 * @schema ElasticBeanstalkResourceQuotas
 */
export interface ElasticBeanstalkResourceQuotas {
  /**
   * @schema ElasticBeanstalkResourceQuotas#ApplicationQuota
   */
  readonly applicationQuota?: ElasticBeanstalkResourceQuota;

  /**
   * @schema ElasticBeanstalkResourceQuotas#ApplicationVersionQuota
   */
  readonly applicationVersionQuota?: ElasticBeanstalkResourceQuota;

  /**
   * @schema ElasticBeanstalkResourceQuotas#EnvironmentQuota
   */
  readonly environmentQuota?: ElasticBeanstalkResourceQuota;

  /**
   * @schema ElasticBeanstalkResourceQuotas#ConfigurationTemplateQuota
   */
  readonly configurationTemplateQuota?: ElasticBeanstalkResourceQuota;

  /**
   * @schema ElasticBeanstalkResourceQuotas#CustomPlatformQuota
   */
  readonly customPlatformQuota?: ElasticBeanstalkResourceQuota;

}

/**
 * @schema ElasticBeanstalkConfigurationOptionDescription
 */
export interface ElasticBeanstalkConfigurationOptionDescription {
  /**
   * @schema ElasticBeanstalkConfigurationOptionDescription#Namespace
   */
  readonly namespace?: string;

  /**
   * @schema ElasticBeanstalkConfigurationOptionDescription#Name
   */
  readonly name?: string;

  /**
   * @schema ElasticBeanstalkConfigurationOptionDescription#DefaultValue
   */
  readonly defaultValue?: string;

  /**
   * @schema ElasticBeanstalkConfigurationOptionDescription#ChangeSeverity
   */
  readonly changeSeverity?: string;

  /**
   * @schema ElasticBeanstalkConfigurationOptionDescription#UserDefined
   */
  readonly userDefined?: boolean;

  /**
   * @schema ElasticBeanstalkConfigurationOptionDescription#ValueType
   */
  readonly valueType?: string;

  /**
   * @schema ElasticBeanstalkConfigurationOptionDescription#ValueOptions
   */
  readonly valueOptions?: string[];

  /**
   * @schema ElasticBeanstalkConfigurationOptionDescription#MinValue
   */
  readonly minValue?: number;

  /**
   * @schema ElasticBeanstalkConfigurationOptionDescription#MaxValue
   */
  readonly maxValue?: number;

  /**
   * @schema ElasticBeanstalkConfigurationOptionDescription#MaxLength
   */
  readonly maxLength?: number;

  /**
   * @schema ElasticBeanstalkConfigurationOptionDescription#Regex
   */
  readonly regex?: ElasticBeanstalkOptionRestrictionRegex;

}

/**
 * @schema ElasticBeanstalkApplicationMetrics
 */
export interface ElasticBeanstalkApplicationMetrics {
  /**
   * @schema ElasticBeanstalkApplicationMetrics#Duration
   */
  readonly duration?: number;

  /**
   * @schema ElasticBeanstalkApplicationMetrics#RequestCount
   */
  readonly requestCount?: number;

  /**
   * @schema ElasticBeanstalkApplicationMetrics#StatusCodes
   */
  readonly statusCodes?: ElasticBeanstalkStatusCodes;

  /**
   * @schema ElasticBeanstalkApplicationMetrics#Latency
   */
  readonly latency?: ElasticBeanstalkLatency;

}

/**
 * @schema ElasticBeanstalkInstanceHealthSummary
 */
export interface ElasticBeanstalkInstanceHealthSummary {
  /**
   * @schema ElasticBeanstalkInstanceHealthSummary#NoData
   */
  readonly noData?: number;

  /**
   * @schema ElasticBeanstalkInstanceHealthSummary#Unknown
   */
  readonly unknown?: number;

  /**
   * @schema ElasticBeanstalkInstanceHealthSummary#Pending
   */
  readonly pending?: number;

  /**
   * @schema ElasticBeanstalkInstanceHealthSummary#Ok
   */
  readonly ok?: number;

  /**
   * @schema ElasticBeanstalkInstanceHealthSummary#Info
   */
  readonly info?: number;

  /**
   * @schema ElasticBeanstalkInstanceHealthSummary#Warning
   */
  readonly warning?: number;

  /**
   * @schema ElasticBeanstalkInstanceHealthSummary#Degraded
   */
  readonly degraded?: number;

  /**
   * @schema ElasticBeanstalkInstanceHealthSummary#Severe
   */
  readonly severe?: number;

}

/**
 * @schema ElasticBeanstalkManagedActionHistoryItem
 */
export interface ElasticBeanstalkManagedActionHistoryItem {
  /**
   * @schema ElasticBeanstalkManagedActionHistoryItem#ActionId
   */
  readonly actionId?: string;

  /**
   * @schema ElasticBeanstalkManagedActionHistoryItem#ActionType
   */
  readonly actionType?: string;

  /**
   * @schema ElasticBeanstalkManagedActionHistoryItem#ActionDescription
   */
  readonly actionDescription?: string;

  /**
   * @schema ElasticBeanstalkManagedActionHistoryItem#FailureType
   */
  readonly failureType?: string;

  /**
   * @schema ElasticBeanstalkManagedActionHistoryItem#Status
   */
  readonly status?: string;

  /**
   * @schema ElasticBeanstalkManagedActionHistoryItem#FailureDescription
   */
  readonly failureDescription?: string;

  /**
   * @schema ElasticBeanstalkManagedActionHistoryItem#ExecutedTime
   */
  readonly executedTime?: string;

  /**
   * @schema ElasticBeanstalkManagedActionHistoryItem#FinishedTime
   */
  readonly finishedTime?: string;

}

/**
 * @schema ElasticBeanstalkManagedAction
 */
export interface ElasticBeanstalkManagedAction {
  /**
   * @schema ElasticBeanstalkManagedAction#ActionId
   */
  readonly actionId?: string;

  /**
   * @schema ElasticBeanstalkManagedAction#ActionDescription
   */
  readonly actionDescription?: string;

  /**
   * @schema ElasticBeanstalkManagedAction#ActionType
   */
  readonly actionType?: string;

  /**
   * @schema ElasticBeanstalkManagedAction#Status
   */
  readonly status?: string;

  /**
   * @schema ElasticBeanstalkManagedAction#WindowStartTime
   */
  readonly windowStartTime?: string;

}

/**
 * @schema ElasticBeanstalkEnvironmentResourceDescription
 */
export interface ElasticBeanstalkEnvironmentResourceDescription {
  /**
   * @schema ElasticBeanstalkEnvironmentResourceDescription#EnvironmentName
   */
  readonly environmentName?: string;

  /**
   * @schema ElasticBeanstalkEnvironmentResourceDescription#AutoScalingGroups
   */
  readonly autoScalingGroups?: ElasticBeanstalkAutoScalingGroup[];

  /**
   * @schema ElasticBeanstalkEnvironmentResourceDescription#Instances
   */
  readonly instances?: ElasticBeanstalkInstance[];

  /**
   * @schema ElasticBeanstalkEnvironmentResourceDescription#LaunchConfigurations
   */
  readonly launchConfigurations?: ElasticBeanstalkLaunchConfiguration[];

  /**
   * @schema ElasticBeanstalkEnvironmentResourceDescription#LaunchTemplates
   */
  readonly launchTemplates?: ElasticBeanstalkLaunchTemplate[];

  /**
   * @schema ElasticBeanstalkEnvironmentResourceDescription#LoadBalancers
   */
  readonly loadBalancers?: ElasticBeanstalkLoadBalancer[];

  /**
   * @schema ElasticBeanstalkEnvironmentResourceDescription#Triggers
   */
  readonly triggers?: ElasticBeanstalkTrigger[];

  /**
   * @schema ElasticBeanstalkEnvironmentResourceDescription#Queues
   */
  readonly queues?: ElasticBeanstalkQueue[];

}

/**
 * @schema ElasticBeanstalkEventDescription
 */
export interface ElasticBeanstalkEventDescription {
  /**
   * @schema ElasticBeanstalkEventDescription#EventDate
   */
  readonly eventDate?: string;

  /**
   * @schema ElasticBeanstalkEventDescription#Message
   */
  readonly message?: string;

  /**
   * @schema ElasticBeanstalkEventDescription#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema ElasticBeanstalkEventDescription#VersionLabel
   */
  readonly versionLabel?: string;

  /**
   * @schema ElasticBeanstalkEventDescription#TemplateName
   */
  readonly templateName?: string;

  /**
   * @schema ElasticBeanstalkEventDescription#EnvironmentName
   */
  readonly environmentName?: string;

  /**
   * @schema ElasticBeanstalkEventDescription#PlatformArn
   */
  readonly platformArn?: string;

  /**
   * @schema ElasticBeanstalkEventDescription#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema ElasticBeanstalkEventDescription#Severity
   */
  readonly severity?: string;

}

/**
 * @schema ElasticBeanstalkSingleInstanceHealth
 */
export interface ElasticBeanstalkSingleInstanceHealth {
  /**
   * @schema ElasticBeanstalkSingleInstanceHealth#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ElasticBeanstalkSingleInstanceHealth#HealthStatus
   */
  readonly healthStatus?: string;

  /**
   * @schema ElasticBeanstalkSingleInstanceHealth#Color
   */
  readonly color?: string;

  /**
   * @schema ElasticBeanstalkSingleInstanceHealth#Causes
   */
  readonly causes?: string[];

  /**
   * @schema ElasticBeanstalkSingleInstanceHealth#LaunchedAt
   */
  readonly launchedAt?: string;

  /**
   * @schema ElasticBeanstalkSingleInstanceHealth#ApplicationMetrics
   */
  readonly applicationMetrics?: ElasticBeanstalkApplicationMetrics;

  /**
   * @schema ElasticBeanstalkSingleInstanceHealth#System
   */
  readonly system?: ElasticBeanstalkSystemStatus;

  /**
   * @schema ElasticBeanstalkSingleInstanceHealth#Deployment
   */
  readonly deployment?: ElasticBeanstalkDeployment;

  /**
   * @schema ElasticBeanstalkSingleInstanceHealth#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema ElasticBeanstalkSingleInstanceHealth#InstanceType
   */
  readonly instanceType?: string;

}

/**
 * @schema ElasticBeanstalkPlatformDescription
 */
export interface ElasticBeanstalkPlatformDescription {
  /**
   * @schema ElasticBeanstalkPlatformDescription#PlatformArn
   */
  readonly platformArn?: string;

  /**
   * @schema ElasticBeanstalkPlatformDescription#PlatformOwner
   */
  readonly platformOwner?: string;

  /**
   * @schema ElasticBeanstalkPlatformDescription#PlatformName
   */
  readonly platformName?: string;

  /**
   * @schema ElasticBeanstalkPlatformDescription#PlatformVersion
   */
  readonly platformVersion?: string;

  /**
   * @schema ElasticBeanstalkPlatformDescription#SolutionStackName
   */
  readonly solutionStackName?: string;

  /**
   * @schema ElasticBeanstalkPlatformDescription#PlatformStatus
   */
  readonly platformStatus?: string;

  /**
   * @schema ElasticBeanstalkPlatformDescription#DateCreated
   */
  readonly dateCreated?: string;

  /**
   * @schema ElasticBeanstalkPlatformDescription#DateUpdated
   */
  readonly dateUpdated?: string;

  /**
   * @schema ElasticBeanstalkPlatformDescription#PlatformCategory
   */
  readonly platformCategory?: string;

  /**
   * @schema ElasticBeanstalkPlatformDescription#Description
   */
  readonly description?: string;

  /**
   * @schema ElasticBeanstalkPlatformDescription#Maintainer
   */
  readonly maintainer?: string;

  /**
   * @schema ElasticBeanstalkPlatformDescription#OperatingSystemName
   */
  readonly operatingSystemName?: string;

  /**
   * @schema ElasticBeanstalkPlatformDescription#OperatingSystemVersion
   */
  readonly operatingSystemVersion?: string;

  /**
   * @schema ElasticBeanstalkPlatformDescription#ProgrammingLanguages
   */
  readonly programmingLanguages?: ElasticBeanstalkPlatformProgrammingLanguage[];

  /**
   * @schema ElasticBeanstalkPlatformDescription#Frameworks
   */
  readonly frameworks?: ElasticBeanstalkPlatformFramework[];

  /**
   * @schema ElasticBeanstalkPlatformDescription#CustomAmiList
   */
  readonly customAmiList?: ElasticBeanstalkCustomAmi[];

  /**
   * @schema ElasticBeanstalkPlatformDescription#SupportedTierList
   */
  readonly supportedTierList?: string[];

  /**
   * @schema ElasticBeanstalkPlatformDescription#SupportedAddonList
   */
  readonly supportedAddonList?: string[];

  /**
   * @schema ElasticBeanstalkPlatformDescription#PlatformLifecycleState
   */
  readonly platformLifecycleState?: string;

  /**
   * @schema ElasticBeanstalkPlatformDescription#PlatformBranchName
   */
  readonly platformBranchName?: string;

  /**
   * @schema ElasticBeanstalkPlatformDescription#PlatformBranchLifecycleState
   */
  readonly platformBranchLifecycleState?: string;

}

/**
 * @schema ElasticBeanstalkSolutionStackDescription
 */
export interface ElasticBeanstalkSolutionStackDescription {
  /**
   * @schema ElasticBeanstalkSolutionStackDescription#SolutionStackName
   */
  readonly solutionStackName?: string;

  /**
   * @schema ElasticBeanstalkSolutionStackDescription#PermittedFileTypes
   */
  readonly permittedFileTypes?: string[];

}

/**
 * @schema ElasticBeanstalkSearchFilter
 */
export interface ElasticBeanstalkSearchFilter {
  /**
   * @schema ElasticBeanstalkSearchFilter#Attribute
   */
  readonly attribute?: string;

  /**
   * @schema ElasticBeanstalkSearchFilter#Operator
   */
  readonly operator?: string;

  /**
   * @schema ElasticBeanstalkSearchFilter#Values
   */
  readonly values?: string[];

}

/**
 * @schema ElasticBeanstalkPlatformBranchSummary
 */
export interface ElasticBeanstalkPlatformBranchSummary {
  /**
   * @schema ElasticBeanstalkPlatformBranchSummary#PlatformName
   */
  readonly platformName?: string;

  /**
   * @schema ElasticBeanstalkPlatformBranchSummary#BranchName
   */
  readonly branchName?: string;

  /**
   * @schema ElasticBeanstalkPlatformBranchSummary#LifecycleState
   */
  readonly lifecycleState?: string;

  /**
   * @schema ElasticBeanstalkPlatformBranchSummary#BranchOrder
   */
  readonly branchOrder?: number;

  /**
   * @schema ElasticBeanstalkPlatformBranchSummary#SupportedTierList
   */
  readonly supportedTierList?: string[];

}

/**
 * @schema ElasticBeanstalkPlatformFilter
 */
export interface ElasticBeanstalkPlatformFilter {
  /**
   * @schema ElasticBeanstalkPlatformFilter#Type
   */
  readonly type?: string;

  /**
   * @schema ElasticBeanstalkPlatformFilter#Operator
   */
  readonly operator?: string;

  /**
   * @schema ElasticBeanstalkPlatformFilter#Values
   */
  readonly values?: string[];

}

/**
 * @schema ElasticBeanstalkEnvironmentInfoDescription
 */
export interface ElasticBeanstalkEnvironmentInfoDescription {
  /**
   * @schema ElasticBeanstalkEnvironmentInfoDescription#InfoType
   */
  readonly infoType?: string;

  /**
   * @schema ElasticBeanstalkEnvironmentInfoDescription#Ec2InstanceId
   */
  readonly ec2InstanceId?: string;

  /**
   * @schema ElasticBeanstalkEnvironmentInfoDescription#SampleTimestamp
   */
  readonly sampleTimestamp?: string;

  /**
   * @schema ElasticBeanstalkEnvironmentInfoDescription#Message
   */
  readonly message?: string;

}

/**
 * @schema ElasticBeanstalkValidationMessage
 */
export interface ElasticBeanstalkValidationMessage {
  /**
   * @schema ElasticBeanstalkValidationMessage#Message
   */
  readonly message?: string;

  /**
   * @schema ElasticBeanstalkValidationMessage#Severity
   */
  readonly severity?: string;

  /**
   * @schema ElasticBeanstalkValidationMessage#Namespace
   */
  readonly namespace?: string;

  /**
   * @schema ElasticBeanstalkValidationMessage#OptionName
   */
  readonly optionName?: string;

}

/**
 * @schema ElasticBeanstalkApplicationVersionLifecycleConfig
 */
export interface ElasticBeanstalkApplicationVersionLifecycleConfig {
  /**
   * @schema ElasticBeanstalkApplicationVersionLifecycleConfig#MaxCountRule
   */
  readonly maxCountRule?: ElasticBeanstalkMaxCountRule;

  /**
   * @schema ElasticBeanstalkApplicationVersionLifecycleConfig#MaxAgeRule
   */
  readonly maxAgeRule?: ElasticBeanstalkMaxAgeRule;

}

/**
 * @schema ElasticBeanstalkLoadBalancerDescription
 */
export interface ElasticBeanstalkLoadBalancerDescription {
  /**
   * @schema ElasticBeanstalkLoadBalancerDescription#LoadBalancerName
   */
  readonly loadBalancerName?: string;

  /**
   * @schema ElasticBeanstalkLoadBalancerDescription#Domain
   */
  readonly domain?: string;

  /**
   * @schema ElasticBeanstalkLoadBalancerDescription#Listeners
   */
  readonly listeners?: ElasticBeanstalkListener[];

}

/**
 * @schema ElasticBeanstalkResourceQuota
 */
export interface ElasticBeanstalkResourceQuota {
  /**
   * @schema ElasticBeanstalkResourceQuota#Maximum
   */
  readonly maximum?: number;

}

/**
 * @schema ElasticBeanstalkOptionRestrictionRegex
 */
export interface ElasticBeanstalkOptionRestrictionRegex {
  /**
   * @schema ElasticBeanstalkOptionRestrictionRegex#Pattern
   */
  readonly pattern?: string;

  /**
   * @schema ElasticBeanstalkOptionRestrictionRegex#Label
   */
  readonly label?: string;

}

/**
 * @schema ElasticBeanstalkStatusCodes
 */
export interface ElasticBeanstalkStatusCodes {
  /**
   * @schema ElasticBeanstalkStatusCodes#Status2xx
   */
  readonly status2Xx?: number;

  /**
   * @schema ElasticBeanstalkStatusCodes#Status3xx
   */
  readonly status3Xx?: number;

  /**
   * @schema ElasticBeanstalkStatusCodes#Status4xx
   */
  readonly status4Xx?: number;

  /**
   * @schema ElasticBeanstalkStatusCodes#Status5xx
   */
  readonly status5Xx?: number;

}

/**
 * @schema ElasticBeanstalkLatency
 */
export interface ElasticBeanstalkLatency {
  /**
   * @schema ElasticBeanstalkLatency#P999
   */
  readonly p999?: number;

  /**
   * @schema ElasticBeanstalkLatency#P99
   */
  readonly p99?: number;

  /**
   * @schema ElasticBeanstalkLatency#P95
   */
  readonly p95?: number;

  /**
   * @schema ElasticBeanstalkLatency#P90
   */
  readonly p90?: number;

  /**
   * @schema ElasticBeanstalkLatency#P85
   */
  readonly p85?: number;

  /**
   * @schema ElasticBeanstalkLatency#P75
   */
  readonly p75?: number;

  /**
   * @schema ElasticBeanstalkLatency#P50
   */
  readonly p50?: number;

  /**
   * @schema ElasticBeanstalkLatency#P10
   */
  readonly p10?: number;

}

/**
 * @schema ElasticBeanstalkAutoScalingGroup
 */
export interface ElasticBeanstalkAutoScalingGroup {
  /**
   * @schema ElasticBeanstalkAutoScalingGroup#Name
   */
  readonly name?: string;

}

/**
 * @schema ElasticBeanstalkInstance
 */
export interface ElasticBeanstalkInstance {
  /**
   * @schema ElasticBeanstalkInstance#Id
   */
  readonly id?: string;

}

/**
 * @schema ElasticBeanstalkLaunchConfiguration
 */
export interface ElasticBeanstalkLaunchConfiguration {
  /**
   * @schema ElasticBeanstalkLaunchConfiguration#Name
   */
  readonly name?: string;

}

/**
 * @schema ElasticBeanstalkLaunchTemplate
 */
export interface ElasticBeanstalkLaunchTemplate {
  /**
   * @schema ElasticBeanstalkLaunchTemplate#Id
   */
  readonly id?: string;

}

/**
 * @schema ElasticBeanstalkLoadBalancer
 */
export interface ElasticBeanstalkLoadBalancer {
  /**
   * @schema ElasticBeanstalkLoadBalancer#Name
   */
  readonly name?: string;

}

/**
 * @schema ElasticBeanstalkTrigger
 */
export interface ElasticBeanstalkTrigger {
  /**
   * @schema ElasticBeanstalkTrigger#Name
   */
  readonly name?: string;

}

/**
 * @schema ElasticBeanstalkQueue
 */
export interface ElasticBeanstalkQueue {
  /**
   * @schema ElasticBeanstalkQueue#Name
   */
  readonly name?: string;

  /**
   * @schema ElasticBeanstalkQueue#URL
   */
  readonly url?: string;

}

/**
 * @schema ElasticBeanstalkSystemStatus
 */
export interface ElasticBeanstalkSystemStatus {
  /**
   * @schema ElasticBeanstalkSystemStatus#CPUUtilization
   */
  readonly cpuUtilization?: ElasticBeanstalkCpuUtilization;

  /**
   * @schema ElasticBeanstalkSystemStatus#LoadAverage
   */
  readonly loadAverage?: number[];

}

/**
 * @schema ElasticBeanstalkDeployment
 */
export interface ElasticBeanstalkDeployment {
  /**
   * @schema ElasticBeanstalkDeployment#VersionLabel
   */
  readonly versionLabel?: string;

  /**
   * @schema ElasticBeanstalkDeployment#DeploymentId
   */
  readonly deploymentId?: number;

  /**
   * @schema ElasticBeanstalkDeployment#Status
   */
  readonly status?: string;

  /**
   * @schema ElasticBeanstalkDeployment#DeploymentTime
   */
  readonly deploymentTime?: string;

}

/**
 * @schema ElasticBeanstalkPlatformProgrammingLanguage
 */
export interface ElasticBeanstalkPlatformProgrammingLanguage {
  /**
   * @schema ElasticBeanstalkPlatformProgrammingLanguage#Name
   */
  readonly name?: string;

  /**
   * @schema ElasticBeanstalkPlatformProgrammingLanguage#Version
   */
  readonly version?: string;

}

/**
 * @schema ElasticBeanstalkPlatformFramework
 */
export interface ElasticBeanstalkPlatformFramework {
  /**
   * @schema ElasticBeanstalkPlatformFramework#Name
   */
  readonly name?: string;

  /**
   * @schema ElasticBeanstalkPlatformFramework#Version
   */
  readonly version?: string;

}

/**
 * @schema ElasticBeanstalkCustomAmi
 */
export interface ElasticBeanstalkCustomAmi {
  /**
   * @schema ElasticBeanstalkCustomAmi#VirtualizationType
   */
  readonly virtualizationType?: string;

  /**
   * @schema ElasticBeanstalkCustomAmi#ImageId
   */
  readonly imageId?: string;

}

/**
 * @schema ElasticBeanstalkMaxCountRule
 */
export interface ElasticBeanstalkMaxCountRule {
  /**
   * @schema ElasticBeanstalkMaxCountRule#Enabled
   */
  readonly enabled: boolean;

  /**
   * @schema ElasticBeanstalkMaxCountRule#MaxCount
   */
  readonly maxCount?: number;

  /**
   * @schema ElasticBeanstalkMaxCountRule#DeleteSourceFromS3
   */
  readonly deleteSourceFromS3?: boolean;

}

/**
 * @schema ElasticBeanstalkMaxAgeRule
 */
export interface ElasticBeanstalkMaxAgeRule {
  /**
   * @schema ElasticBeanstalkMaxAgeRule#Enabled
   */
  readonly enabled: boolean;

  /**
   * @schema ElasticBeanstalkMaxAgeRule#MaxAgeInDays
   */
  readonly maxAgeInDays?: number;

  /**
   * @schema ElasticBeanstalkMaxAgeRule#DeleteSourceFromS3
   */
  readonly deleteSourceFromS3?: boolean;

}

/**
 * @schema ElasticBeanstalkListener
 */
export interface ElasticBeanstalkListener {
  /**
   * @schema ElasticBeanstalkListener#Protocol
   */
  readonly protocol?: string;

  /**
   * @schema ElasticBeanstalkListener#Port
   */
  readonly port?: number;

}

/**
 * @schema ElasticBeanstalkCpuUtilization
 */
export interface ElasticBeanstalkCpuUtilization {
  /**
   * @schema ElasticBeanstalkCpuUtilization#User
   */
  readonly user?: number;

  /**
   * @schema ElasticBeanstalkCpuUtilization#Nice
   */
  readonly nice?: number;

  /**
   * @schema ElasticBeanstalkCpuUtilization#System
   */
  readonly system?: number;

  /**
   * @schema ElasticBeanstalkCpuUtilization#Idle
   */
  readonly idle?: number;

  /**
   * @schema ElasticBeanstalkCpuUtilization#IOWait
   */
  readonly ioWait?: number;

  /**
   * @schema ElasticBeanstalkCpuUtilization#IRQ
   */
  readonly irq?: number;

  /**
   * @schema ElasticBeanstalkCpuUtilization#SoftIRQ
   */
  readonly softIrq?: number;

  /**
   * @schema ElasticBeanstalkCpuUtilization#Privileged
   */
  readonly privileged?: number;

}
