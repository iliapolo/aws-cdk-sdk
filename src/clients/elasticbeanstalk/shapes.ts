/**
 * @schema AbortEnvironmentUpdateMessage
 */
export interface AbortEnvironmentUpdateMessage {
  /**
   * @schema AbortEnvironmentUpdateMessage#EnvironmentId
   */
  readonly environmentId?: string;

  /**
   * @schema AbortEnvironmentUpdateMessage#EnvironmentName
   */
  readonly environmentName?: string;

}

/**
 * @schema ApplyEnvironmentManagedActionRequest
 */
export interface ApplyEnvironmentManagedActionRequest {
  /**
   * @schema ApplyEnvironmentManagedActionRequest#EnvironmentName
   */
  readonly environmentName?: string;

  /**
   * @schema ApplyEnvironmentManagedActionRequest#EnvironmentId
   */
  readonly environmentId?: string;

  /**
   * @schema ApplyEnvironmentManagedActionRequest#ActionId
   */
  readonly actionId: string;

}

/**
 * @schema ApplyEnvironmentManagedActionResult
 */
export interface ApplyEnvironmentManagedActionResult {
  /**
   * @schema ApplyEnvironmentManagedActionResult#ActionId
   */
  readonly actionId?: string;

  /**
   * @schema ApplyEnvironmentManagedActionResult#ActionDescription
   */
  readonly actionDescription?: string;

  /**
   * @schema ApplyEnvironmentManagedActionResult#ActionType
   */
  readonly actionType?: string;

  /**
   * @schema ApplyEnvironmentManagedActionResult#Status
   */
  readonly status?: string;

}

/**
 * @schema AssociateEnvironmentOperationsRoleMessage
 */
export interface AssociateEnvironmentOperationsRoleMessage {
  /**
   * @schema AssociateEnvironmentOperationsRoleMessage#EnvironmentName
   */
  readonly environmentName: string;

  /**
   * @schema AssociateEnvironmentOperationsRoleMessage#OperationsRole
   */
  readonly operationsRole: string;

}

/**
 * @schema CheckDnsAvailabilityMessage
 */
export interface CheckDnsAvailabilityMessage {
  /**
   * @schema CheckDnsAvailabilityMessage#CNAMEPrefix
   */
  readonly cnamePrefix: string;

}

/**
 * @schema CheckDnsAvailabilityResultMessage
 */
export interface CheckDnsAvailabilityResultMessage {
  /**
   * @schema CheckDnsAvailabilityResultMessage#Available
   */
  readonly available?: boolean;

  /**
   * @schema CheckDnsAvailabilityResultMessage#FullyQualifiedCNAME
   */
  readonly fullyQualifiedCname?: string;

}

/**
 * @schema ComposeEnvironmentsMessage
 */
export interface ComposeEnvironmentsMessage {
  /**
   * @schema ComposeEnvironmentsMessage#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema ComposeEnvironmentsMessage#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema ComposeEnvironmentsMessage#VersionLabels
   */
  readonly versionLabels?: string[];

}

/**
 * @schema EnvironmentDescriptionsMessage
 */
export interface EnvironmentDescriptionsMessage {
  /**
   * @schema EnvironmentDescriptionsMessage#Environments
   */
  readonly environments?: EnvironmentDescription[];

  /**
   * @schema EnvironmentDescriptionsMessage#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CreateApplicationMessage
 */
export interface CreateApplicationMessage {
  /**
   * @schema CreateApplicationMessage#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema CreateApplicationMessage#Description
   */
  readonly description?: string;

  /**
   * @schema CreateApplicationMessage#ResourceLifecycleConfig
   */
  readonly resourceLifecycleConfig?: ApplicationResourceLifecycleConfig;

  /**
   * @schema CreateApplicationMessage#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema ApplicationDescriptionMessage
 */
export interface ApplicationDescriptionMessage {
  /**
   * @schema ApplicationDescriptionMessage#Application
   */
  readonly application?: ApplicationDescription;

}

/**
 * @schema CreateApplicationVersionMessage
 */
export interface CreateApplicationVersionMessage {
  /**
   * @schema CreateApplicationVersionMessage#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema CreateApplicationVersionMessage#VersionLabel
   */
  readonly versionLabel: string;

  /**
   * @schema CreateApplicationVersionMessage#Description
   */
  readonly description?: string;

  /**
   * @schema CreateApplicationVersionMessage#SourceBuildInformation
   */
  readonly sourceBuildInformation?: SourceBuildInformation;

  /**
   * @schema CreateApplicationVersionMessage#SourceBundle
   */
  readonly sourceBundle?: S3Location;

  /**
   * @schema CreateApplicationVersionMessage#BuildConfiguration
   */
  readonly buildConfiguration?: BuildConfiguration;

  /**
   * @schema CreateApplicationVersionMessage#AutoCreateApplication
   */
  readonly autoCreateApplication?: boolean;

  /**
   * @schema CreateApplicationVersionMessage#Process
   */
  readonly process?: boolean;

  /**
   * @schema CreateApplicationVersionMessage#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema ApplicationVersionDescriptionMessage
 */
export interface ApplicationVersionDescriptionMessage {
  /**
   * @schema ApplicationVersionDescriptionMessage#ApplicationVersion
   */
  readonly applicationVersion?: ApplicationVersionDescription;

}

/**
 * @schema CreateConfigurationTemplateMessage
 */
export interface CreateConfigurationTemplateMessage {
  /**
   * @schema CreateConfigurationTemplateMessage#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema CreateConfigurationTemplateMessage#TemplateName
   */
  readonly templateName: string;

  /**
   * @schema CreateConfigurationTemplateMessage#SolutionStackName
   */
  readonly solutionStackName?: string;

  /**
   * @schema CreateConfigurationTemplateMessage#PlatformArn
   */
  readonly platformArn?: string;

  /**
   * @schema CreateConfigurationTemplateMessage#SourceConfiguration
   */
  readonly sourceConfiguration?: SourceConfiguration;

  /**
   * @schema CreateConfigurationTemplateMessage#EnvironmentId
   */
  readonly environmentId?: string;

  /**
   * @schema CreateConfigurationTemplateMessage#Description
   */
  readonly description?: string;

  /**
   * @schema CreateConfigurationTemplateMessage#OptionSettings
   */
  readonly optionSettings?: ConfigurationOptionSetting[];

  /**
   * @schema CreateConfigurationTemplateMessage#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema ConfigurationSettingsDescription
 */
export interface ConfigurationSettingsDescription {
  /**
   * @schema ConfigurationSettingsDescription#SolutionStackName
   */
  readonly solutionStackName?: string;

  /**
   * @schema ConfigurationSettingsDescription#PlatformArn
   */
  readonly platformArn?: string;

  /**
   * @schema ConfigurationSettingsDescription#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema ConfigurationSettingsDescription#TemplateName
   */
  readonly templateName?: string;

  /**
   * @schema ConfigurationSettingsDescription#Description
   */
  readonly description?: string;

  /**
   * @schema ConfigurationSettingsDescription#EnvironmentName
   */
  readonly environmentName?: string;

  /**
   * @schema ConfigurationSettingsDescription#DeploymentStatus
   */
  readonly deploymentStatus?: string;

  /**
   * @schema ConfigurationSettingsDescription#DateCreated
   */
  readonly dateCreated?: string;

  /**
   * @schema ConfigurationSettingsDescription#DateUpdated
   */
  readonly dateUpdated?: string;

  /**
   * @schema ConfigurationSettingsDescription#OptionSettings
   */
  readonly optionSettings?: ConfigurationOptionSetting[];

}

/**
 * @schema CreateEnvironmentMessage
 */
export interface CreateEnvironmentMessage {
  /**
   * @schema CreateEnvironmentMessage#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema CreateEnvironmentMessage#EnvironmentName
   */
  readonly environmentName?: string;

  /**
   * @schema CreateEnvironmentMessage#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema CreateEnvironmentMessage#Description
   */
  readonly description?: string;

  /**
   * @schema CreateEnvironmentMessage#CNAMEPrefix
   */
  readonly cnamePrefix?: string;

  /**
   * @schema CreateEnvironmentMessage#Tier
   */
  readonly tier?: EnvironmentTier;

  /**
   * @schema CreateEnvironmentMessage#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateEnvironmentMessage#VersionLabel
   */
  readonly versionLabel?: string;

  /**
   * @schema CreateEnvironmentMessage#TemplateName
   */
  readonly templateName?: string;

  /**
   * @schema CreateEnvironmentMessage#SolutionStackName
   */
  readonly solutionStackName?: string;

  /**
   * @schema CreateEnvironmentMessage#PlatformArn
   */
  readonly platformArn?: string;

  /**
   * @schema CreateEnvironmentMessage#OptionSettings
   */
  readonly optionSettings?: ConfigurationOptionSetting[];

  /**
   * @schema CreateEnvironmentMessage#OptionsToRemove
   */
  readonly optionsToRemove?: OptionSpecification[];

  /**
   * @schema CreateEnvironmentMessage#OperationsRole
   */
  readonly operationsRole?: string;

}

/**
 * @schema EnvironmentDescription
 */
export interface EnvironmentDescription {
  /**
   * @schema EnvironmentDescription#EnvironmentName
   */
  readonly environmentName?: string;

  /**
   * @schema EnvironmentDescription#EnvironmentId
   */
  readonly environmentId?: string;

  /**
   * @schema EnvironmentDescription#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema EnvironmentDescription#VersionLabel
   */
  readonly versionLabel?: string;

  /**
   * @schema EnvironmentDescription#SolutionStackName
   */
  readonly solutionStackName?: string;

  /**
   * @schema EnvironmentDescription#PlatformArn
   */
  readonly platformArn?: string;

  /**
   * @schema EnvironmentDescription#TemplateName
   */
  readonly templateName?: string;

  /**
   * @schema EnvironmentDescription#Description
   */
  readonly description?: string;

  /**
   * @schema EnvironmentDescription#EndpointURL
   */
  readonly endpointUrl?: string;

  /**
   * @schema EnvironmentDescription#CNAME
   */
  readonly cname?: string;

  /**
   * @schema EnvironmentDescription#DateCreated
   */
  readonly dateCreated?: string;

  /**
   * @schema EnvironmentDescription#DateUpdated
   */
  readonly dateUpdated?: string;

  /**
   * @schema EnvironmentDescription#Status
   */
  readonly status?: string;

  /**
   * @schema EnvironmentDescription#AbortableOperationInProgress
   */
  readonly abortableOperationInProgress?: boolean;

  /**
   * @schema EnvironmentDescription#Health
   */
  readonly health?: string;

  /**
   * @schema EnvironmentDescription#HealthStatus
   */
  readonly healthStatus?: string;

  /**
   * @schema EnvironmentDescription#Resources
   */
  readonly resources?: EnvironmentResourcesDescription;

  /**
   * @schema EnvironmentDescription#Tier
   */
  readonly tier?: EnvironmentTier;

  /**
   * @schema EnvironmentDescription#EnvironmentLinks
   */
  readonly environmentLinks?: EnvironmentLink[];

  /**
   * @schema EnvironmentDescription#EnvironmentArn
   */
  readonly environmentArn?: string;

  /**
   * @schema EnvironmentDescription#OperationsRole
   */
  readonly operationsRole?: string;

}

/**
 * @schema CreatePlatformVersionRequest
 */
export interface CreatePlatformVersionRequest {
  /**
   * @schema CreatePlatformVersionRequest#PlatformName
   */
  readonly platformName: string;

  /**
   * @schema CreatePlatformVersionRequest#PlatformVersion
   */
  readonly platformVersion: string;

  /**
   * @schema CreatePlatformVersionRequest#PlatformDefinitionBundle
   */
  readonly platformDefinitionBundle: S3Location;

  /**
   * @schema CreatePlatformVersionRequest#EnvironmentName
   */
  readonly environmentName?: string;

  /**
   * @schema CreatePlatformVersionRequest#OptionSettings
   */
  readonly optionSettings?: ConfigurationOptionSetting[];

  /**
   * @schema CreatePlatformVersionRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreatePlatformVersionResult
 */
export interface CreatePlatformVersionResult {
  /**
   * @schema CreatePlatformVersionResult#PlatformSummary
   */
  readonly platformSummary?: PlatformSummary;

  /**
   * @schema CreatePlatformVersionResult#Builder
   */
  readonly builder?: Builder;

}

/**
 * @schema CreateStorageLocationResultMessage
 */
export interface CreateStorageLocationResultMessage {
  /**
   * @schema CreateStorageLocationResultMessage#S3Bucket
   */
  readonly s3Bucket?: string;

}

/**
 * @schema DeleteApplicationMessage
 */
export interface DeleteApplicationMessage {
  /**
   * @schema DeleteApplicationMessage#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema DeleteApplicationMessage#TerminateEnvByForce
   */
  readonly terminateEnvByForce?: boolean;

}

/**
 * @schema DeleteApplicationVersionMessage
 */
export interface DeleteApplicationVersionMessage {
  /**
   * @schema DeleteApplicationVersionMessage#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema DeleteApplicationVersionMessage#VersionLabel
   */
  readonly versionLabel: string;

  /**
   * @schema DeleteApplicationVersionMessage#DeleteSourceBundle
   */
  readonly deleteSourceBundle?: boolean;

}

/**
 * @schema DeleteConfigurationTemplateMessage
 */
export interface DeleteConfigurationTemplateMessage {
  /**
   * @schema DeleteConfigurationTemplateMessage#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema DeleteConfigurationTemplateMessage#TemplateName
   */
  readonly templateName: string;

}

/**
 * @schema DeleteEnvironmentConfigurationMessage
 */
export interface DeleteEnvironmentConfigurationMessage {
  /**
   * @schema DeleteEnvironmentConfigurationMessage#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema DeleteEnvironmentConfigurationMessage#EnvironmentName
   */
  readonly environmentName: string;

}

/**
 * @schema DeletePlatformVersionRequest
 */
export interface DeletePlatformVersionRequest {
  /**
   * @schema DeletePlatformVersionRequest#PlatformArn
   */
  readonly platformArn?: string;

}

/**
 * @schema DeletePlatformVersionResult
 */
export interface DeletePlatformVersionResult {
  /**
   * @schema DeletePlatformVersionResult#PlatformSummary
   */
  readonly platformSummary?: PlatformSummary;

}

/**
 * @schema DescribeAccountAttributesResult
 */
export interface DescribeAccountAttributesResult {
  /**
   * @schema DescribeAccountAttributesResult#ResourceQuotas
   */
  readonly resourceQuotas?: ResourceQuotas;

}

/**
 * @schema DescribeApplicationVersionsMessage
 */
export interface DescribeApplicationVersionsMessage {
  /**
   * @schema DescribeApplicationVersionsMessage#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema DescribeApplicationVersionsMessage#VersionLabels
   */
  readonly versionLabels?: string[];

  /**
   * @schema DescribeApplicationVersionsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeApplicationVersionsMessage#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ApplicationVersionDescriptionsMessage
 */
export interface ApplicationVersionDescriptionsMessage {
  /**
   * @schema ApplicationVersionDescriptionsMessage#ApplicationVersions
   */
  readonly applicationVersions?: ApplicationVersionDescription[];

  /**
   * @schema ApplicationVersionDescriptionsMessage#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeApplicationsMessage
 */
export interface DescribeApplicationsMessage {
  /**
   * @schema DescribeApplicationsMessage#ApplicationNames
   */
  readonly applicationNames?: string[];

}

/**
 * @schema ApplicationDescriptionsMessage
 */
export interface ApplicationDescriptionsMessage {
  /**
   * @schema ApplicationDescriptionsMessage#Applications
   */
  readonly applications?: ApplicationDescription[];

}

/**
 * @schema DescribeConfigurationOptionsMessage
 */
export interface DescribeConfigurationOptionsMessage {
  /**
   * @schema DescribeConfigurationOptionsMessage#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema DescribeConfigurationOptionsMessage#TemplateName
   */
  readonly templateName?: string;

  /**
   * @schema DescribeConfigurationOptionsMessage#EnvironmentName
   */
  readonly environmentName?: string;

  /**
   * @schema DescribeConfigurationOptionsMessage#SolutionStackName
   */
  readonly solutionStackName?: string;

  /**
   * @schema DescribeConfigurationOptionsMessage#PlatformArn
   */
  readonly platformArn?: string;

  /**
   * @schema DescribeConfigurationOptionsMessage#Options
   */
  readonly options?: OptionSpecification[];

}

/**
 * @schema ConfigurationOptionsDescription
 */
export interface ConfigurationOptionsDescription {
  /**
   * @schema ConfigurationOptionsDescription#SolutionStackName
   */
  readonly solutionStackName?: string;

  /**
   * @schema ConfigurationOptionsDescription#PlatformArn
   */
  readonly platformArn?: string;

  /**
   * @schema ConfigurationOptionsDescription#Options
   */
  readonly options?: ConfigurationOptionDescription[];

}

/**
 * @schema DescribeConfigurationSettingsMessage
 */
export interface DescribeConfigurationSettingsMessage {
  /**
   * @schema DescribeConfigurationSettingsMessage#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema DescribeConfigurationSettingsMessage#TemplateName
   */
  readonly templateName?: string;

  /**
   * @schema DescribeConfigurationSettingsMessage#EnvironmentName
   */
  readonly environmentName?: string;

}

/**
 * @schema ConfigurationSettingsDescriptions
 */
export interface ConfigurationSettingsDescriptions {
  /**
   * @schema ConfigurationSettingsDescriptions#ConfigurationSettings
   */
  readonly configurationSettings?: ConfigurationSettingsDescription[];

}

/**
 * @schema DescribeEnvironmentHealthRequest
 */
export interface DescribeEnvironmentHealthRequest {
  /**
   * @schema DescribeEnvironmentHealthRequest#EnvironmentName
   */
  readonly environmentName?: string;

  /**
   * @schema DescribeEnvironmentHealthRequest#EnvironmentId
   */
  readonly environmentId?: string;

  /**
   * @schema DescribeEnvironmentHealthRequest#AttributeNames
   */
  readonly attributeNames?: string[];

}

/**
 * @schema DescribeEnvironmentHealthResult
 */
export interface DescribeEnvironmentHealthResult {
  /**
   * @schema DescribeEnvironmentHealthResult#EnvironmentName
   */
  readonly environmentName?: string;

  /**
   * @schema DescribeEnvironmentHealthResult#HealthStatus
   */
  readonly healthStatus?: string;

  /**
   * @schema DescribeEnvironmentHealthResult#Status
   */
  readonly status?: string;

  /**
   * @schema DescribeEnvironmentHealthResult#Color
   */
  readonly color?: string;

  /**
   * @schema DescribeEnvironmentHealthResult#Causes
   */
  readonly causes?: string[];

  /**
   * @schema DescribeEnvironmentHealthResult#ApplicationMetrics
   */
  readonly applicationMetrics?: ApplicationMetrics;

  /**
   * @schema DescribeEnvironmentHealthResult#InstancesHealth
   */
  readonly instancesHealth?: InstanceHealthSummary;

  /**
   * @schema DescribeEnvironmentHealthResult#RefreshedAt
   */
  readonly refreshedAt?: string;

}

/**
 * @schema DescribeEnvironmentManagedActionHistoryRequest
 */
export interface DescribeEnvironmentManagedActionHistoryRequest {
  /**
   * @schema DescribeEnvironmentManagedActionHistoryRequest#EnvironmentId
   */
  readonly environmentId?: string;

  /**
   * @schema DescribeEnvironmentManagedActionHistoryRequest#EnvironmentName
   */
  readonly environmentName?: string;

  /**
   * @schema DescribeEnvironmentManagedActionHistoryRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeEnvironmentManagedActionHistoryRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema DescribeEnvironmentManagedActionHistoryResult
 */
export interface DescribeEnvironmentManagedActionHistoryResult {
  /**
   * @schema DescribeEnvironmentManagedActionHistoryResult#ManagedActionHistoryItems
   */
  readonly managedActionHistoryItems?: ManagedActionHistoryItem[];

  /**
   * @schema DescribeEnvironmentManagedActionHistoryResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeEnvironmentManagedActionsRequest
 */
export interface DescribeEnvironmentManagedActionsRequest {
  /**
   * @schema DescribeEnvironmentManagedActionsRequest#EnvironmentName
   */
  readonly environmentName?: string;

  /**
   * @schema DescribeEnvironmentManagedActionsRequest#EnvironmentId
   */
  readonly environmentId?: string;

  /**
   * @schema DescribeEnvironmentManagedActionsRequest#Status
   */
  readonly status?: string;

}

/**
 * @schema DescribeEnvironmentManagedActionsResult
 */
export interface DescribeEnvironmentManagedActionsResult {
  /**
   * @schema DescribeEnvironmentManagedActionsResult#ManagedActions
   */
  readonly managedActions?: ManagedAction[];

}

/**
 * @schema DescribeEnvironmentResourcesMessage
 */
export interface DescribeEnvironmentResourcesMessage {
  /**
   * @schema DescribeEnvironmentResourcesMessage#EnvironmentId
   */
  readonly environmentId?: string;

  /**
   * @schema DescribeEnvironmentResourcesMessage#EnvironmentName
   */
  readonly environmentName?: string;

}

/**
 * @schema EnvironmentResourceDescriptionsMessage
 */
export interface EnvironmentResourceDescriptionsMessage {
  /**
   * @schema EnvironmentResourceDescriptionsMessage#EnvironmentResources
   */
  readonly environmentResources?: EnvironmentResourceDescription;

}

/**
 * @schema DescribeEnvironmentsMessage
 */
export interface DescribeEnvironmentsMessage {
  /**
   * @schema DescribeEnvironmentsMessage#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema DescribeEnvironmentsMessage#VersionLabel
   */
  readonly versionLabel?: string;

  /**
   * @schema DescribeEnvironmentsMessage#EnvironmentIds
   */
  readonly environmentIds?: string[];

  /**
   * @schema DescribeEnvironmentsMessage#EnvironmentNames
   */
  readonly environmentNames?: string[];

  /**
   * @schema DescribeEnvironmentsMessage#IncludeDeleted
   */
  readonly includeDeleted?: boolean;

  /**
   * @schema DescribeEnvironmentsMessage#IncludedDeletedBackTo
   */
  readonly includedDeletedBackTo?: string;

  /**
   * @schema DescribeEnvironmentsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeEnvironmentsMessage#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeEventsMessage
 */
export interface DescribeEventsMessage {
  /**
   * @schema DescribeEventsMessage#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema DescribeEventsMessage#VersionLabel
   */
  readonly versionLabel?: string;

  /**
   * @schema DescribeEventsMessage#TemplateName
   */
  readonly templateName?: string;

  /**
   * @schema DescribeEventsMessage#EnvironmentId
   */
  readonly environmentId?: string;

  /**
   * @schema DescribeEventsMessage#EnvironmentName
   */
  readonly environmentName?: string;

  /**
   * @schema DescribeEventsMessage#PlatformArn
   */
  readonly platformArn?: string;

  /**
   * @schema DescribeEventsMessage#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema DescribeEventsMessage#Severity
   */
  readonly severity?: string;

  /**
   * @schema DescribeEventsMessage#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema DescribeEventsMessage#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema DescribeEventsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeEventsMessage#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema EventDescriptionsMessage
 */
export interface EventDescriptionsMessage {
  /**
   * @schema EventDescriptionsMessage#Events
   */
  readonly events?: EventDescription[];

  /**
   * @schema EventDescriptionsMessage#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeInstancesHealthRequest
 */
export interface DescribeInstancesHealthRequest {
  /**
   * @schema DescribeInstancesHealthRequest#EnvironmentName
   */
  readonly environmentName?: string;

  /**
   * @schema DescribeInstancesHealthRequest#EnvironmentId
   */
  readonly environmentId?: string;

  /**
   * @schema DescribeInstancesHealthRequest#AttributeNames
   */
  readonly attributeNames?: string[];

  /**
   * @schema DescribeInstancesHealthRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeInstancesHealthResult
 */
export interface DescribeInstancesHealthResult {
  /**
   * @schema DescribeInstancesHealthResult#InstanceHealthList
   */
  readonly instanceHealthList?: SingleInstanceHealth[];

  /**
   * @schema DescribeInstancesHealthResult#RefreshedAt
   */
  readonly refreshedAt?: string;

  /**
   * @schema DescribeInstancesHealthResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribePlatformVersionRequest
 */
export interface DescribePlatformVersionRequest {
  /**
   * @schema DescribePlatformVersionRequest#PlatformArn
   */
  readonly platformArn?: string;

}

/**
 * @schema DescribePlatformVersionResult
 */
export interface DescribePlatformVersionResult {
  /**
   * @schema DescribePlatformVersionResult#PlatformDescription
   */
  readonly platformDescription?: PlatformDescription;

}

/**
 * @schema DisassociateEnvironmentOperationsRoleMessage
 */
export interface DisassociateEnvironmentOperationsRoleMessage {
  /**
   * @schema DisassociateEnvironmentOperationsRoleMessage#EnvironmentName
   */
  readonly environmentName: string;

}

/**
 * @schema ListAvailableSolutionStacksResultMessage
 */
export interface ListAvailableSolutionStacksResultMessage {
  /**
   * @schema ListAvailableSolutionStacksResultMessage#SolutionStacks
   */
  readonly solutionStacks?: string[];

  /**
   * @schema ListAvailableSolutionStacksResultMessage#SolutionStackDetails
   */
  readonly solutionStackDetails?: SolutionStackDescription[];

}

/**
 * @schema ListPlatformBranchesRequest
 */
export interface ListPlatformBranchesRequest {
  /**
   * @schema ListPlatformBranchesRequest#Filters
   */
  readonly filters?: SearchFilter[];

  /**
   * @schema ListPlatformBranchesRequest#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema ListPlatformBranchesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListPlatformBranchesResult
 */
export interface ListPlatformBranchesResult {
  /**
   * @schema ListPlatformBranchesResult#PlatformBranchSummaryList
   */
  readonly platformBranchSummaryList?: PlatformBranchSummary[];

  /**
   * @schema ListPlatformBranchesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListPlatformVersionsRequest
 */
export interface ListPlatformVersionsRequest {
  /**
   * @schema ListPlatformVersionsRequest#Filters
   */
  readonly filters?: PlatformFilter[];

  /**
   * @schema ListPlatformVersionsRequest#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema ListPlatformVersionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListPlatformVersionsResult
 */
export interface ListPlatformVersionsResult {
  /**
   * @schema ListPlatformVersionsResult#PlatformSummaryList
   */
  readonly platformSummaryList?: PlatformSummary[];

  /**
   * @schema ListPlatformVersionsResult#NextToken
   */
  readonly nextToken?: string;

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
 * @schema ResourceTagsDescriptionMessage
 */
export interface ResourceTagsDescriptionMessage {
  /**
   * @schema ResourceTagsDescriptionMessage#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema ResourceTagsDescriptionMessage#ResourceTags
   */
  readonly resourceTags?: Tag[];

}

/**
 * @schema RebuildEnvironmentMessage
 */
export interface RebuildEnvironmentMessage {
  /**
   * @schema RebuildEnvironmentMessage#EnvironmentId
   */
  readonly environmentId?: string;

  /**
   * @schema RebuildEnvironmentMessage#EnvironmentName
   */
  readonly environmentName?: string;

}

/**
 * @schema RequestEnvironmentInfoMessage
 */
export interface RequestEnvironmentInfoMessage {
  /**
   * @schema RequestEnvironmentInfoMessage#EnvironmentId
   */
  readonly environmentId?: string;

  /**
   * @schema RequestEnvironmentInfoMessage#EnvironmentName
   */
  readonly environmentName?: string;

  /**
   * @schema RequestEnvironmentInfoMessage#InfoType
   */
  readonly infoType: string;

}

/**
 * @schema RestartAppServerMessage
 */
export interface RestartAppServerMessage {
  /**
   * @schema RestartAppServerMessage#EnvironmentId
   */
  readonly environmentId?: string;

  /**
   * @schema RestartAppServerMessage#EnvironmentName
   */
  readonly environmentName?: string;

}

/**
 * @schema RetrieveEnvironmentInfoMessage
 */
export interface RetrieveEnvironmentInfoMessage {
  /**
   * @schema RetrieveEnvironmentInfoMessage#EnvironmentId
   */
  readonly environmentId?: string;

  /**
   * @schema RetrieveEnvironmentInfoMessage#EnvironmentName
   */
  readonly environmentName?: string;

  /**
   * @schema RetrieveEnvironmentInfoMessage#InfoType
   */
  readonly infoType: string;

}

/**
 * @schema RetrieveEnvironmentInfoResultMessage
 */
export interface RetrieveEnvironmentInfoResultMessage {
  /**
   * @schema RetrieveEnvironmentInfoResultMessage#EnvironmentInfo
   */
  readonly environmentInfo?: EnvironmentInfoDescription[];

}

/**
 * @schema SwapEnvironmentCnamEsMessage
 */
export interface SwapEnvironmentCnamEsMessage {
  /**
   * @schema SwapEnvironmentCnamEsMessage#SourceEnvironmentId
   */
  readonly sourceEnvironmentId?: string;

  /**
   * @schema SwapEnvironmentCnamEsMessage#SourceEnvironmentName
   */
  readonly sourceEnvironmentName?: string;

  /**
   * @schema SwapEnvironmentCnamEsMessage#DestinationEnvironmentId
   */
  readonly destinationEnvironmentId?: string;

  /**
   * @schema SwapEnvironmentCnamEsMessage#DestinationEnvironmentName
   */
  readonly destinationEnvironmentName?: string;

}

/**
 * @schema TerminateEnvironmentMessage
 */
export interface TerminateEnvironmentMessage {
  /**
   * @schema TerminateEnvironmentMessage#EnvironmentId
   */
  readonly environmentId?: string;

  /**
   * @schema TerminateEnvironmentMessage#EnvironmentName
   */
  readonly environmentName?: string;

  /**
   * @schema TerminateEnvironmentMessage#TerminateResources
   */
  readonly terminateResources?: boolean;

  /**
   * @schema TerminateEnvironmentMessage#ForceTerminate
   */
  readonly forceTerminate?: boolean;

}

/**
 * @schema UpdateApplicationMessage
 */
export interface UpdateApplicationMessage {
  /**
   * @schema UpdateApplicationMessage#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema UpdateApplicationMessage#Description
   */
  readonly description?: string;

}

/**
 * @schema UpdateApplicationResourceLifecycleMessage
 */
export interface UpdateApplicationResourceLifecycleMessage {
  /**
   * @schema UpdateApplicationResourceLifecycleMessage#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema UpdateApplicationResourceLifecycleMessage#ResourceLifecycleConfig
   */
  readonly resourceLifecycleConfig: ApplicationResourceLifecycleConfig;

}

/**
 * @schema ApplicationResourceLifecycleDescriptionMessage
 */
export interface ApplicationResourceLifecycleDescriptionMessage {
  /**
   * @schema ApplicationResourceLifecycleDescriptionMessage#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema ApplicationResourceLifecycleDescriptionMessage#ResourceLifecycleConfig
   */
  readonly resourceLifecycleConfig?: ApplicationResourceLifecycleConfig;

}

/**
 * @schema UpdateApplicationVersionMessage
 */
export interface UpdateApplicationVersionMessage {
  /**
   * @schema UpdateApplicationVersionMessage#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema UpdateApplicationVersionMessage#VersionLabel
   */
  readonly versionLabel: string;

  /**
   * @schema UpdateApplicationVersionMessage#Description
   */
  readonly description?: string;

}

/**
 * @schema UpdateConfigurationTemplateMessage
 */
export interface UpdateConfigurationTemplateMessage {
  /**
   * @schema UpdateConfigurationTemplateMessage#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema UpdateConfigurationTemplateMessage#TemplateName
   */
  readonly templateName: string;

  /**
   * @schema UpdateConfigurationTemplateMessage#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateConfigurationTemplateMessage#OptionSettings
   */
  readonly optionSettings?: ConfigurationOptionSetting[];

  /**
   * @schema UpdateConfigurationTemplateMessage#OptionsToRemove
   */
  readonly optionsToRemove?: OptionSpecification[];

}

/**
 * @schema UpdateEnvironmentMessage
 */
export interface UpdateEnvironmentMessage {
  /**
   * @schema UpdateEnvironmentMessage#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema UpdateEnvironmentMessage#EnvironmentId
   */
  readonly environmentId?: string;

  /**
   * @schema UpdateEnvironmentMessage#EnvironmentName
   */
  readonly environmentName?: string;

  /**
   * @schema UpdateEnvironmentMessage#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema UpdateEnvironmentMessage#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateEnvironmentMessage#Tier
   */
  readonly tier?: EnvironmentTier;

  /**
   * @schema UpdateEnvironmentMessage#VersionLabel
   */
  readonly versionLabel?: string;

  /**
   * @schema UpdateEnvironmentMessage#TemplateName
   */
  readonly templateName?: string;

  /**
   * @schema UpdateEnvironmentMessage#SolutionStackName
   */
  readonly solutionStackName?: string;

  /**
   * @schema UpdateEnvironmentMessage#PlatformArn
   */
  readonly platformArn?: string;

  /**
   * @schema UpdateEnvironmentMessage#OptionSettings
   */
  readonly optionSettings?: ConfigurationOptionSetting[];

  /**
   * @schema UpdateEnvironmentMessage#OptionsToRemove
   */
  readonly optionsToRemove?: OptionSpecification[];

}

/**
 * @schema UpdateTagsForResourceMessage
 */
export interface UpdateTagsForResourceMessage {
  /**
   * @schema UpdateTagsForResourceMessage#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema UpdateTagsForResourceMessage#TagsToAdd
   */
  readonly tagsToAdd?: Tag[];

  /**
   * @schema UpdateTagsForResourceMessage#TagsToRemove
   */
  readonly tagsToRemove?: string[];

}

/**
 * @schema ValidateConfigurationSettingsMessage
 */
export interface ValidateConfigurationSettingsMessage {
  /**
   * @schema ValidateConfigurationSettingsMessage#ApplicationName
   */
  readonly applicationName: string;

  /**
   * @schema ValidateConfigurationSettingsMessage#TemplateName
   */
  readonly templateName?: string;

  /**
   * @schema ValidateConfigurationSettingsMessage#EnvironmentName
   */
  readonly environmentName?: string;

  /**
   * @schema ValidateConfigurationSettingsMessage#OptionSettings
   */
  readonly optionSettings: ConfigurationOptionSetting[];

}

/**
 * @schema ConfigurationSettingsValidationMessages
 */
export interface ConfigurationSettingsValidationMessages {
  /**
   * @schema ConfigurationSettingsValidationMessages#Messages
   */
  readonly messages?: ValidationMessage[];

}

/**
 * @schema ApplicationResourceLifecycleConfig
 */
export interface ApplicationResourceLifecycleConfig {
  /**
   * @schema ApplicationResourceLifecycleConfig#ServiceRole
   */
  readonly serviceRole?: string;

  /**
   * @schema ApplicationResourceLifecycleConfig#VersionLifecycleConfig
   */
  readonly versionLifecycleConfig?: ApplicationVersionLifecycleConfig;

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
 * @schema ApplicationDescription
 */
export interface ApplicationDescription {
  /**
   * @schema ApplicationDescription#ApplicationArn
   */
  readonly applicationArn?: string;

  /**
   * @schema ApplicationDescription#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema ApplicationDescription#Description
   */
  readonly description?: string;

  /**
   * @schema ApplicationDescription#DateCreated
   */
  readonly dateCreated?: string;

  /**
   * @schema ApplicationDescription#DateUpdated
   */
  readonly dateUpdated?: string;

  /**
   * @schema ApplicationDescription#Versions
   */
  readonly versions?: string[];

  /**
   * @schema ApplicationDescription#ConfigurationTemplates
   */
  readonly configurationTemplates?: string[];

  /**
   * @schema ApplicationDescription#ResourceLifecycleConfig
   */
  readonly resourceLifecycleConfig?: ApplicationResourceLifecycleConfig;

}

/**
 * @schema SourceBuildInformation
 */
export interface SourceBuildInformation {
  /**
   * @schema SourceBuildInformation#SourceType
   */
  readonly sourceType: string;

  /**
   * @schema SourceBuildInformation#SourceRepository
   */
  readonly sourceRepository: string;

  /**
   * @schema SourceBuildInformation#SourceLocation
   */
  readonly sourceLocation: string;

}

/**
 * @schema S3Location
 */
export interface S3Location {
  /**
   * @schema S3Location#S3Bucket
   */
  readonly s3Bucket?: string;

  /**
   * @schema S3Location#S3Key
   */
  readonly s3Key?: string;

}

/**
 * @schema BuildConfiguration
 */
export interface BuildConfiguration {
  /**
   * @schema BuildConfiguration#ArtifactName
   */
  readonly artifactName?: string;

  /**
   * @schema BuildConfiguration#CodeBuildServiceRole
   */
  readonly codeBuildServiceRole: string;

  /**
   * @schema BuildConfiguration#ComputeType
   */
  readonly computeType?: string;

  /**
   * @schema BuildConfiguration#Image
   */
  readonly image: string;

  /**
   * @schema BuildConfiguration#TimeoutInMinutes
   */
  readonly timeoutInMinutes?: number;

}

/**
 * @schema ApplicationVersionDescription
 */
export interface ApplicationVersionDescription {
  /**
   * @schema ApplicationVersionDescription#ApplicationVersionArn
   */
  readonly applicationVersionArn?: string;

  /**
   * @schema ApplicationVersionDescription#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema ApplicationVersionDescription#Description
   */
  readonly description?: string;

  /**
   * @schema ApplicationVersionDescription#VersionLabel
   */
  readonly versionLabel?: string;

  /**
   * @schema ApplicationVersionDescription#SourceBuildInformation
   */
  readonly sourceBuildInformation?: SourceBuildInformation;

  /**
   * @schema ApplicationVersionDescription#BuildArn
   */
  readonly buildArn?: string;

  /**
   * @schema ApplicationVersionDescription#SourceBundle
   */
  readonly sourceBundle?: S3Location;

  /**
   * @schema ApplicationVersionDescription#DateCreated
   */
  readonly dateCreated?: string;

  /**
   * @schema ApplicationVersionDescription#DateUpdated
   */
  readonly dateUpdated?: string;

  /**
   * @schema ApplicationVersionDescription#Status
   */
  readonly status?: string;

}

/**
 * @schema SourceConfiguration
 */
export interface SourceConfiguration {
  /**
   * @schema SourceConfiguration#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema SourceConfiguration#TemplateName
   */
  readonly templateName?: string;

}

/**
 * @schema ConfigurationOptionSetting
 */
export interface ConfigurationOptionSetting {
  /**
   * @schema ConfigurationOptionSetting#ResourceName
   */
  readonly resourceName?: string;

  /**
   * @schema ConfigurationOptionSetting#Namespace
   */
  readonly namespace?: string;

  /**
   * @schema ConfigurationOptionSetting#OptionName
   */
  readonly optionName?: string;

  /**
   * @schema ConfigurationOptionSetting#Value
   */
  readonly value?: string;

}

/**
 * @schema EnvironmentTier
 */
export interface EnvironmentTier {
  /**
   * @schema EnvironmentTier#Name
   */
  readonly name?: string;

  /**
   * @schema EnvironmentTier#Type
   */
  readonly type?: string;

  /**
   * @schema EnvironmentTier#Version
   */
  readonly version?: string;

}

/**
 * @schema OptionSpecification
 */
export interface OptionSpecification {
  /**
   * @schema OptionSpecification#ResourceName
   */
  readonly resourceName?: string;

  /**
   * @schema OptionSpecification#Namespace
   */
  readonly namespace?: string;

  /**
   * @schema OptionSpecification#OptionName
   */
  readonly optionName?: string;

}

/**
 * @schema EnvironmentResourcesDescription
 */
export interface EnvironmentResourcesDescription {
  /**
   * @schema EnvironmentResourcesDescription#LoadBalancer
   */
  readonly loadBalancer?: LoadBalancerDescription;

}

/**
 * @schema EnvironmentLink
 */
export interface EnvironmentLink {
  /**
   * @schema EnvironmentLink#LinkName
   */
  readonly linkName?: string;

  /**
   * @schema EnvironmentLink#EnvironmentName
   */
  readonly environmentName?: string;

}

/**
 * @schema PlatformSummary
 */
export interface PlatformSummary {
  /**
   * @schema PlatformSummary#PlatformArn
   */
  readonly platformArn?: string;

  /**
   * @schema PlatformSummary#PlatformOwner
   */
  readonly platformOwner?: string;

  /**
   * @schema PlatformSummary#PlatformStatus
   */
  readonly platformStatus?: string;

  /**
   * @schema PlatformSummary#PlatformCategory
   */
  readonly platformCategory?: string;

  /**
   * @schema PlatformSummary#OperatingSystemName
   */
  readonly operatingSystemName?: string;

  /**
   * @schema PlatformSummary#OperatingSystemVersion
   */
  readonly operatingSystemVersion?: string;

  /**
   * @schema PlatformSummary#SupportedTierList
   */
  readonly supportedTierList?: string[];

  /**
   * @schema PlatformSummary#SupportedAddonList
   */
  readonly supportedAddonList?: string[];

  /**
   * @schema PlatformSummary#PlatformLifecycleState
   */
  readonly platformLifecycleState?: string;

  /**
   * @schema PlatformSummary#PlatformVersion
   */
  readonly platformVersion?: string;

  /**
   * @schema PlatformSummary#PlatformBranchName
   */
  readonly platformBranchName?: string;

  /**
   * @schema PlatformSummary#PlatformBranchLifecycleState
   */
  readonly platformBranchLifecycleState?: string;

}

/**
 * @schema Builder
 */
export interface Builder {
  /**
   * @schema Builder#ARN
   */
  readonly arn?: string;

}

/**
 * @schema ResourceQuotas
 */
export interface ResourceQuotas {
  /**
   * @schema ResourceQuotas#ApplicationQuota
   */
  readonly applicationQuota?: ResourceQuota;

  /**
   * @schema ResourceQuotas#ApplicationVersionQuota
   */
  readonly applicationVersionQuota?: ResourceQuota;

  /**
   * @schema ResourceQuotas#EnvironmentQuota
   */
  readonly environmentQuota?: ResourceQuota;

  /**
   * @schema ResourceQuotas#ConfigurationTemplateQuota
   */
  readonly configurationTemplateQuota?: ResourceQuota;

  /**
   * @schema ResourceQuotas#CustomPlatformQuota
   */
  readonly customPlatformQuota?: ResourceQuota;

}

/**
 * @schema ConfigurationOptionDescription
 */
export interface ConfigurationOptionDescription {
  /**
   * @schema ConfigurationOptionDescription#Namespace
   */
  readonly namespace?: string;

  /**
   * @schema ConfigurationOptionDescription#Name
   */
  readonly name?: string;

  /**
   * @schema ConfigurationOptionDescription#DefaultValue
   */
  readonly defaultValue?: string;

  /**
   * @schema ConfigurationOptionDescription#ChangeSeverity
   */
  readonly changeSeverity?: string;

  /**
   * @schema ConfigurationOptionDescription#UserDefined
   */
  readonly userDefined?: boolean;

  /**
   * @schema ConfigurationOptionDescription#ValueType
   */
  readonly valueType?: string;

  /**
   * @schema ConfigurationOptionDescription#ValueOptions
   */
  readonly valueOptions?: string[];

  /**
   * @schema ConfigurationOptionDescription#MinValue
   */
  readonly minValue?: number;

  /**
   * @schema ConfigurationOptionDescription#MaxValue
   */
  readonly maxValue?: number;

  /**
   * @schema ConfigurationOptionDescription#MaxLength
   */
  readonly maxLength?: number;

  /**
   * @schema ConfigurationOptionDescription#Regex
   */
  readonly regex?: OptionRestrictionRegex;

}

/**
 * @schema ApplicationMetrics
 */
export interface ApplicationMetrics {
  /**
   * @schema ApplicationMetrics#Duration
   */
  readonly duration?: number;

  /**
   * @schema ApplicationMetrics#RequestCount
   */
  readonly requestCount?: number;

  /**
   * @schema ApplicationMetrics#StatusCodes
   */
  readonly statusCodes?: StatusCodes;

  /**
   * @schema ApplicationMetrics#Latency
   */
  readonly latency?: Latency;

}

/**
 * @schema InstanceHealthSummary
 */
export interface InstanceHealthSummary {
  /**
   * @schema InstanceHealthSummary#NoData
   */
  readonly noData?: number;

  /**
   * @schema InstanceHealthSummary#Unknown
   */
  readonly unknown?: number;

  /**
   * @schema InstanceHealthSummary#Pending
   */
  readonly pending?: number;

  /**
   * @schema InstanceHealthSummary#Ok
   */
  readonly ok?: number;

  /**
   * @schema InstanceHealthSummary#Info
   */
  readonly info?: number;

  /**
   * @schema InstanceHealthSummary#Warning
   */
  readonly warning?: number;

  /**
   * @schema InstanceHealthSummary#Degraded
   */
  readonly degraded?: number;

  /**
   * @schema InstanceHealthSummary#Severe
   */
  readonly severe?: number;

}

/**
 * @schema ManagedActionHistoryItem
 */
export interface ManagedActionHistoryItem {
  /**
   * @schema ManagedActionHistoryItem#ActionId
   */
  readonly actionId?: string;

  /**
   * @schema ManagedActionHistoryItem#ActionType
   */
  readonly actionType?: string;

  /**
   * @schema ManagedActionHistoryItem#ActionDescription
   */
  readonly actionDescription?: string;

  /**
   * @schema ManagedActionHistoryItem#FailureType
   */
  readonly failureType?: string;

  /**
   * @schema ManagedActionHistoryItem#Status
   */
  readonly status?: string;

  /**
   * @schema ManagedActionHistoryItem#FailureDescription
   */
  readonly failureDescription?: string;

  /**
   * @schema ManagedActionHistoryItem#ExecutedTime
   */
  readonly executedTime?: string;

  /**
   * @schema ManagedActionHistoryItem#FinishedTime
   */
  readonly finishedTime?: string;

}

/**
 * @schema ManagedAction
 */
export interface ManagedAction {
  /**
   * @schema ManagedAction#ActionId
   */
  readonly actionId?: string;

  /**
   * @schema ManagedAction#ActionDescription
   */
  readonly actionDescription?: string;

  /**
   * @schema ManagedAction#ActionType
   */
  readonly actionType?: string;

  /**
   * @schema ManagedAction#Status
   */
  readonly status?: string;

  /**
   * @schema ManagedAction#WindowStartTime
   */
  readonly windowStartTime?: string;

}

/**
 * @schema EnvironmentResourceDescription
 */
export interface EnvironmentResourceDescription {
  /**
   * @schema EnvironmentResourceDescription#EnvironmentName
   */
  readonly environmentName?: string;

  /**
   * @schema EnvironmentResourceDescription#AutoScalingGroups
   */
  readonly autoScalingGroups?: AutoScalingGroup[];

  /**
   * @schema EnvironmentResourceDescription#Instances
   */
  readonly instances?: Instance[];

  /**
   * @schema EnvironmentResourceDescription#LaunchConfigurations
   */
  readonly launchConfigurations?: LaunchConfiguration[];

  /**
   * @schema EnvironmentResourceDescription#LaunchTemplates
   */
  readonly launchTemplates?: LaunchTemplate[];

  /**
   * @schema EnvironmentResourceDescription#LoadBalancers
   */
  readonly loadBalancers?: LoadBalancer[];

  /**
   * @schema EnvironmentResourceDescription#Triggers
   */
  readonly triggers?: Trigger[];

  /**
   * @schema EnvironmentResourceDescription#Queues
   */
  readonly queues?: Queue[];

}

/**
 * @schema EventDescription
 */
export interface EventDescription {
  /**
   * @schema EventDescription#EventDate
   */
  readonly eventDate?: string;

  /**
   * @schema EventDescription#Message
   */
  readonly message?: string;

  /**
   * @schema EventDescription#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema EventDescription#VersionLabel
   */
  readonly versionLabel?: string;

  /**
   * @schema EventDescription#TemplateName
   */
  readonly templateName?: string;

  /**
   * @schema EventDescription#EnvironmentName
   */
  readonly environmentName?: string;

  /**
   * @schema EventDescription#PlatformArn
   */
  readonly platformArn?: string;

  /**
   * @schema EventDescription#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema EventDescription#Severity
   */
  readonly severity?: string;

}

/**
 * @schema SingleInstanceHealth
 */
export interface SingleInstanceHealth {
  /**
   * @schema SingleInstanceHealth#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema SingleInstanceHealth#HealthStatus
   */
  readonly healthStatus?: string;

  /**
   * @schema SingleInstanceHealth#Color
   */
  readonly color?: string;

  /**
   * @schema SingleInstanceHealth#Causes
   */
  readonly causes?: string[];

  /**
   * @schema SingleInstanceHealth#LaunchedAt
   */
  readonly launchedAt?: string;

  /**
   * @schema SingleInstanceHealth#ApplicationMetrics
   */
  readonly applicationMetrics?: ApplicationMetrics;

  /**
   * @schema SingleInstanceHealth#System
   */
  readonly system?: SystemStatus;

  /**
   * @schema SingleInstanceHealth#Deployment
   */
  readonly deployment?: Deployment;

  /**
   * @schema SingleInstanceHealth#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema SingleInstanceHealth#InstanceType
   */
  readonly instanceType?: string;

}

/**
 * @schema PlatformDescription
 */
export interface PlatformDescription {
  /**
   * @schema PlatformDescription#PlatformArn
   */
  readonly platformArn?: string;

  /**
   * @schema PlatformDescription#PlatformOwner
   */
  readonly platformOwner?: string;

  /**
   * @schema PlatformDescription#PlatformName
   */
  readonly platformName?: string;

  /**
   * @schema PlatformDescription#PlatformVersion
   */
  readonly platformVersion?: string;

  /**
   * @schema PlatformDescription#SolutionStackName
   */
  readonly solutionStackName?: string;

  /**
   * @schema PlatformDescription#PlatformStatus
   */
  readonly platformStatus?: string;

  /**
   * @schema PlatformDescription#DateCreated
   */
  readonly dateCreated?: string;

  /**
   * @schema PlatformDescription#DateUpdated
   */
  readonly dateUpdated?: string;

  /**
   * @schema PlatformDescription#PlatformCategory
   */
  readonly platformCategory?: string;

  /**
   * @schema PlatformDescription#Description
   */
  readonly description?: string;

  /**
   * @schema PlatformDescription#Maintainer
   */
  readonly maintainer?: string;

  /**
   * @schema PlatformDescription#OperatingSystemName
   */
  readonly operatingSystemName?: string;

  /**
   * @schema PlatformDescription#OperatingSystemVersion
   */
  readonly operatingSystemVersion?: string;

  /**
   * @schema PlatformDescription#ProgrammingLanguages
   */
  readonly programmingLanguages?: PlatformProgrammingLanguage[];

  /**
   * @schema PlatformDescription#Frameworks
   */
  readonly frameworks?: PlatformFramework[];

  /**
   * @schema PlatformDescription#CustomAmiList
   */
  readonly customAmiList?: CustomAmi[];

  /**
   * @schema PlatformDescription#SupportedTierList
   */
  readonly supportedTierList?: string[];

  /**
   * @schema PlatformDescription#SupportedAddonList
   */
  readonly supportedAddonList?: string[];

  /**
   * @schema PlatformDescription#PlatformLifecycleState
   */
  readonly platformLifecycleState?: string;

  /**
   * @schema PlatformDescription#PlatformBranchName
   */
  readonly platformBranchName?: string;

  /**
   * @schema PlatformDescription#PlatformBranchLifecycleState
   */
  readonly platformBranchLifecycleState?: string;

}

/**
 * @schema SolutionStackDescription
 */
export interface SolutionStackDescription {
  /**
   * @schema SolutionStackDescription#SolutionStackName
   */
  readonly solutionStackName?: string;

  /**
   * @schema SolutionStackDescription#PermittedFileTypes
   */
  readonly permittedFileTypes?: string[];

}

/**
 * @schema SearchFilter
 */
export interface SearchFilter {
  /**
   * @schema SearchFilter#Attribute
   */
  readonly attribute?: string;

  /**
   * @schema SearchFilter#Operator
   */
  readonly operator?: string;

  /**
   * @schema SearchFilter#Values
   */
  readonly values?: string[];

}

/**
 * @schema PlatformBranchSummary
 */
export interface PlatformBranchSummary {
  /**
   * @schema PlatformBranchSummary#PlatformName
   */
  readonly platformName?: string;

  /**
   * @schema PlatformBranchSummary#BranchName
   */
  readonly branchName?: string;

  /**
   * @schema PlatformBranchSummary#LifecycleState
   */
  readonly lifecycleState?: string;

  /**
   * @schema PlatformBranchSummary#BranchOrder
   */
  readonly branchOrder?: number;

  /**
   * @schema PlatformBranchSummary#SupportedTierList
   */
  readonly supportedTierList?: string[];

}

/**
 * @schema PlatformFilter
 */
export interface PlatformFilter {
  /**
   * @schema PlatformFilter#Type
   */
  readonly type?: string;

  /**
   * @schema PlatformFilter#Operator
   */
  readonly operator?: string;

  /**
   * @schema PlatformFilter#Values
   */
  readonly values?: string[];

}

/**
 * @schema EnvironmentInfoDescription
 */
export interface EnvironmentInfoDescription {
  /**
   * @schema EnvironmentInfoDescription#InfoType
   */
  readonly infoType?: string;

  /**
   * @schema EnvironmentInfoDescription#Ec2InstanceId
   */
  readonly ec2InstanceId?: string;

  /**
   * @schema EnvironmentInfoDescription#SampleTimestamp
   */
  readonly sampleTimestamp?: string;

  /**
   * @schema EnvironmentInfoDescription#Message
   */
  readonly message?: string;

}

/**
 * @schema ValidationMessage
 */
export interface ValidationMessage {
  /**
   * @schema ValidationMessage#Message
   */
  readonly message?: string;

  /**
   * @schema ValidationMessage#Severity
   */
  readonly severity?: string;

  /**
   * @schema ValidationMessage#Namespace
   */
  readonly namespace?: string;

  /**
   * @schema ValidationMessage#OptionName
   */
  readonly optionName?: string;

}

/**
 * @schema ApplicationVersionLifecycleConfig
 */
export interface ApplicationVersionLifecycleConfig {
  /**
   * @schema ApplicationVersionLifecycleConfig#MaxCountRule
   */
  readonly maxCountRule?: MaxCountRule;

  /**
   * @schema ApplicationVersionLifecycleConfig#MaxAgeRule
   */
  readonly maxAgeRule?: MaxAgeRule;

}

/**
 * @schema LoadBalancerDescription
 */
export interface LoadBalancerDescription {
  /**
   * @schema LoadBalancerDescription#LoadBalancerName
   */
  readonly loadBalancerName?: string;

  /**
   * @schema LoadBalancerDescription#Domain
   */
  readonly domain?: string;

  /**
   * @schema LoadBalancerDescription#Listeners
   */
  readonly listeners?: Listener[];

}

/**
 * @schema ResourceQuota
 */
export interface ResourceQuota {
  /**
   * @schema ResourceQuota#Maximum
   */
  readonly maximum?: number;

}

/**
 * @schema OptionRestrictionRegex
 */
export interface OptionRestrictionRegex {
  /**
   * @schema OptionRestrictionRegex#Pattern
   */
  readonly pattern?: string;

  /**
   * @schema OptionRestrictionRegex#Label
   */
  readonly label?: string;

}

/**
 * @schema StatusCodes
 */
export interface StatusCodes {
  /**
   * @schema StatusCodes#Status2xx
   */
  readonly status2Xx?: number;

  /**
   * @schema StatusCodes#Status3xx
   */
  readonly status3Xx?: number;

  /**
   * @schema StatusCodes#Status4xx
   */
  readonly status4Xx?: number;

  /**
   * @schema StatusCodes#Status5xx
   */
  readonly status5Xx?: number;

}

/**
 * @schema Latency
 */
export interface Latency {
  /**
   * @schema Latency#P999
   */
  readonly p999?: number;

  /**
   * @schema Latency#P99
   */
  readonly p99?: number;

  /**
   * @schema Latency#P95
   */
  readonly p95?: number;

  /**
   * @schema Latency#P90
   */
  readonly p90?: number;

  /**
   * @schema Latency#P85
   */
  readonly p85?: number;

  /**
   * @schema Latency#P75
   */
  readonly p75?: number;

  /**
   * @schema Latency#P50
   */
  readonly p50?: number;

  /**
   * @schema Latency#P10
   */
  readonly p10?: number;

}

/**
 * @schema AutoScalingGroup
 */
export interface AutoScalingGroup {
  /**
   * @schema AutoScalingGroup#Name
   */
  readonly name?: string;

}

/**
 * @schema Instance
 */
export interface Instance {
  /**
   * @schema Instance#Id
   */
  readonly id?: string;

}

/**
 * @schema LaunchConfiguration
 */
export interface LaunchConfiguration {
  /**
   * @schema LaunchConfiguration#Name
   */
  readonly name?: string;

}

/**
 * @schema LaunchTemplate
 */
export interface LaunchTemplate {
  /**
   * @schema LaunchTemplate#Id
   */
  readonly id?: string;

}

/**
 * @schema LoadBalancer
 */
export interface LoadBalancer {
  /**
   * @schema LoadBalancer#Name
   */
  readonly name?: string;

}

/**
 * @schema Trigger
 */
export interface Trigger {
  /**
   * @schema Trigger#Name
   */
  readonly name?: string;

}

/**
 * @schema Queue
 */
export interface Queue {
  /**
   * @schema Queue#Name
   */
  readonly name?: string;

  /**
   * @schema Queue#URL
   */
  readonly url?: string;

}

/**
 * @schema SystemStatus
 */
export interface SystemStatus {
  /**
   * @schema SystemStatus#CPUUtilization
   */
  readonly cpuUtilization?: CpuUtilization;

  /**
   * @schema SystemStatus#LoadAverage
   */
  readonly loadAverage?: number[];

}

/**
 * @schema Deployment
 */
export interface Deployment {
  /**
   * @schema Deployment#VersionLabel
   */
  readonly versionLabel?: string;

  /**
   * @schema Deployment#DeploymentId
   */
  readonly deploymentId?: number;

  /**
   * @schema Deployment#Status
   */
  readonly status?: string;

  /**
   * @schema Deployment#DeploymentTime
   */
  readonly deploymentTime?: string;

}

/**
 * @schema PlatformProgrammingLanguage
 */
export interface PlatformProgrammingLanguage {
  /**
   * @schema PlatformProgrammingLanguage#Name
   */
  readonly name?: string;

  /**
   * @schema PlatformProgrammingLanguage#Version
   */
  readonly version?: string;

}

/**
 * @schema PlatformFramework
 */
export interface PlatformFramework {
  /**
   * @schema PlatformFramework#Name
   */
  readonly name?: string;

  /**
   * @schema PlatformFramework#Version
   */
  readonly version?: string;

}

/**
 * @schema CustomAmi
 */
export interface CustomAmi {
  /**
   * @schema CustomAmi#VirtualizationType
   */
  readonly virtualizationType?: string;

  /**
   * @schema CustomAmi#ImageId
   */
  readonly imageId?: string;

}

/**
 * @schema MaxCountRule
 */
export interface MaxCountRule {
  /**
   * @schema MaxCountRule#Enabled
   */
  readonly enabled: boolean;

  /**
   * @schema MaxCountRule#MaxCount
   */
  readonly maxCount?: number;

  /**
   * @schema MaxCountRule#DeleteSourceFromS3
   */
  readonly deleteSourceFromS3?: boolean;

}

/**
 * @schema MaxAgeRule
 */
export interface MaxAgeRule {
  /**
   * @schema MaxAgeRule#Enabled
   */
  readonly enabled: boolean;

  /**
   * @schema MaxAgeRule#MaxAgeInDays
   */
  readonly maxAgeInDays?: number;

  /**
   * @schema MaxAgeRule#DeleteSourceFromS3
   */
  readonly deleteSourceFromS3?: boolean;

}

/**
 * @schema Listener
 */
export interface Listener {
  /**
   * @schema Listener#Protocol
   */
  readonly protocol?: string;

  /**
   * @schema Listener#Port
   */
  readonly port?: number;

}

/**
 * @schema CpuUtilization
 */
export interface CpuUtilization {
  /**
   * @schema CpuUtilization#User
   */
  readonly user?: number;

  /**
   * @schema CpuUtilization#Nice
   */
  readonly nice?: number;

  /**
   * @schema CpuUtilization#System
   */
  readonly system?: number;

  /**
   * @schema CpuUtilization#Idle
   */
  readonly idle?: number;

  /**
   * @schema CpuUtilization#IOWait
   */
  readonly ioWait?: number;

  /**
   * @schema CpuUtilization#IRQ
   */
  readonly irq?: number;

  /**
   * @schema CpuUtilization#SoftIRQ
   */
  readonly softIrq?: number;

  /**
   * @schema CpuUtilization#Privileged
   */
  readonly privileged?: number;

}
