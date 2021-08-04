/**
 * @schema AppConfigCreateApplicationRequest
 */
export interface AppConfigCreateApplicationRequest {
  /**
   * @schema AppConfigCreateApplicationRequest#Name
   */
  readonly name: string;

  /**
   * @schema AppConfigCreateApplicationRequest#Description
   */
  readonly description?: string;

  /**
   * @schema AppConfigCreateApplicationRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema AppConfigApplication
 */
export interface AppConfigApplication {
  /**
   * @schema AppConfigApplication#Id
   */
  readonly id?: string;

  /**
   * @schema AppConfigApplication#Name
   */
  readonly name?: string;

  /**
   * @schema AppConfigApplication#Description
   */
  readonly description?: string;

}

/**
 * @schema AppConfigCreateConfigurationProfileRequest
 */
export interface AppConfigCreateConfigurationProfileRequest {
  /**
   * @schema AppConfigCreateConfigurationProfileRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema AppConfigCreateConfigurationProfileRequest#Name
   */
  readonly name: string;

  /**
   * @schema AppConfigCreateConfigurationProfileRequest#Description
   */
  readonly description?: string;

  /**
   * @schema AppConfigCreateConfigurationProfileRequest#LocationUri
   */
  readonly locationUri: string;

  /**
   * @schema AppConfigCreateConfigurationProfileRequest#RetrievalRoleArn
   */
  readonly retrievalRoleArn?: string;

  /**
   * @schema AppConfigCreateConfigurationProfileRequest#Validators
   */
  readonly validators?: AppConfigValidator[];

  /**
   * @schema AppConfigCreateConfigurationProfileRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema AppConfigConfigurationProfile
 */
export interface AppConfigConfigurationProfile {
  /**
   * @schema AppConfigConfigurationProfile#ApplicationId
   */
  readonly applicationId?: string;

  /**
   * @schema AppConfigConfigurationProfile#Id
   */
  readonly id?: string;

  /**
   * @schema AppConfigConfigurationProfile#Name
   */
  readonly name?: string;

  /**
   * @schema AppConfigConfigurationProfile#Description
   */
  readonly description?: string;

  /**
   * @schema AppConfigConfigurationProfile#LocationUri
   */
  readonly locationUri?: string;

  /**
   * @schema AppConfigConfigurationProfile#RetrievalRoleArn
   */
  readonly retrievalRoleArn?: string;

  /**
   * @schema AppConfigConfigurationProfile#Validators
   */
  readonly validators?: AppConfigValidator[];

}

/**
 * @schema AppConfigCreateDeploymentStrategyRequest
 */
export interface AppConfigCreateDeploymentStrategyRequest {
  /**
   * @schema AppConfigCreateDeploymentStrategyRequest#Name
   */
  readonly name: string;

  /**
   * @schema AppConfigCreateDeploymentStrategyRequest#Description
   */
  readonly description?: string;

  /**
   * @schema AppConfigCreateDeploymentStrategyRequest#DeploymentDurationInMinutes
   */
  readonly deploymentDurationInMinutes: number;

  /**
   * @schema AppConfigCreateDeploymentStrategyRequest#FinalBakeTimeInMinutes
   */
  readonly finalBakeTimeInMinutes?: number;

  /**
   * @schema AppConfigCreateDeploymentStrategyRequest#GrowthFactor
   */
  readonly growthFactor: number;

  /**
   * @schema AppConfigCreateDeploymentStrategyRequest#GrowthType
   */
  readonly growthType?: string;

  /**
   * @schema AppConfigCreateDeploymentStrategyRequest#ReplicateTo
   */
  readonly replicateTo: string;

  /**
   * @schema AppConfigCreateDeploymentStrategyRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema AppConfigDeploymentStrategy
 */
export interface AppConfigDeploymentStrategy {
  /**
   * @schema AppConfigDeploymentStrategy#Id
   */
  readonly id?: string;

  /**
   * @schema AppConfigDeploymentStrategy#Name
   */
  readonly name?: string;

  /**
   * @schema AppConfigDeploymentStrategy#Description
   */
  readonly description?: string;

  /**
   * @schema AppConfigDeploymentStrategy#DeploymentDurationInMinutes
   */
  readonly deploymentDurationInMinutes?: number;

  /**
   * @schema AppConfigDeploymentStrategy#GrowthType
   */
  readonly growthType?: string;

  /**
   * @schema AppConfigDeploymentStrategy#GrowthFactor
   */
  readonly growthFactor?: number;

  /**
   * @schema AppConfigDeploymentStrategy#FinalBakeTimeInMinutes
   */
  readonly finalBakeTimeInMinutes?: number;

  /**
   * @schema AppConfigDeploymentStrategy#ReplicateTo
   */
  readonly replicateTo?: string;

}

/**
 * @schema AppConfigCreateEnvironmentRequest
 */
export interface AppConfigCreateEnvironmentRequest {
  /**
   * @schema AppConfigCreateEnvironmentRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema AppConfigCreateEnvironmentRequest#Name
   */
  readonly name: string;

  /**
   * @schema AppConfigCreateEnvironmentRequest#Description
   */
  readonly description?: string;

  /**
   * @schema AppConfigCreateEnvironmentRequest#Monitors
   */
  readonly monitors?: AppConfigMonitor[];

  /**
   * @schema AppConfigCreateEnvironmentRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema AppConfigEnvironment
 */
export interface AppConfigEnvironment {
  /**
   * @schema AppConfigEnvironment#ApplicationId
   */
  readonly applicationId?: string;

  /**
   * @schema AppConfigEnvironment#Id
   */
  readonly id?: string;

  /**
   * @schema AppConfigEnvironment#Name
   */
  readonly name?: string;

  /**
   * @schema AppConfigEnvironment#Description
   */
  readonly description?: string;

  /**
   * @schema AppConfigEnvironment#State
   */
  readonly state?: string;

  /**
   * @schema AppConfigEnvironment#Monitors
   */
  readonly monitors?: AppConfigMonitor[];

}

/**
 * @schema AppConfigCreateHostedConfigurationVersionRequest
 */
export interface AppConfigCreateHostedConfigurationVersionRequest {
  /**
   * @schema AppConfigCreateHostedConfigurationVersionRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema AppConfigCreateHostedConfigurationVersionRequest#ConfigurationProfileId
   */
  readonly configurationProfileId: string;

  /**
   * @schema AppConfigCreateHostedConfigurationVersionRequest#Description
   */
  readonly description?: string;

  /**
   * @schema AppConfigCreateHostedConfigurationVersionRequest#Content
   */
  readonly content: any;

  /**
   * @schema AppConfigCreateHostedConfigurationVersionRequest#ContentType
   */
  readonly contentType: string;

  /**
   * @schema AppConfigCreateHostedConfigurationVersionRequest#LatestVersionNumber
   */
  readonly latestVersionNumber?: number;

}

/**
 * @schema AppConfigHostedConfigurationVersion
 */
export interface AppConfigHostedConfigurationVersion {
  /**
   * @schema AppConfigHostedConfigurationVersion#ApplicationId
   */
  readonly applicationId?: string;

  /**
   * @schema AppConfigHostedConfigurationVersion#ConfigurationProfileId
   */
  readonly configurationProfileId?: string;

  /**
   * @schema AppConfigHostedConfigurationVersion#VersionNumber
   */
  readonly versionNumber?: number;

  /**
   * @schema AppConfigHostedConfigurationVersion#Description
   */
  readonly description?: string;

  /**
   * @schema AppConfigHostedConfigurationVersion#Content
   */
  readonly content?: any;

  /**
   * @schema AppConfigHostedConfigurationVersion#ContentType
   */
  readonly contentType?: string;

}

/**
 * @schema AppConfigDeleteApplicationRequest
 */
export interface AppConfigDeleteApplicationRequest {
  /**
   * @schema AppConfigDeleteApplicationRequest#ApplicationId
   */
  readonly applicationId: string;

}

/**
 * @schema AppConfigDeleteConfigurationProfileRequest
 */
export interface AppConfigDeleteConfigurationProfileRequest {
  /**
   * @schema AppConfigDeleteConfigurationProfileRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema AppConfigDeleteConfigurationProfileRequest#ConfigurationProfileId
   */
  readonly configurationProfileId: string;

}

/**
 * @schema AppConfigDeleteDeploymentStrategyRequest
 */
export interface AppConfigDeleteDeploymentStrategyRequest {
  /**
   * @schema AppConfigDeleteDeploymentStrategyRequest#DeploymentStrategyId
   */
  readonly deploymentStrategyId: string;

}

/**
 * @schema AppConfigDeleteEnvironmentRequest
 */
export interface AppConfigDeleteEnvironmentRequest {
  /**
   * @schema AppConfigDeleteEnvironmentRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema AppConfigDeleteEnvironmentRequest#EnvironmentId
   */
  readonly environmentId: string;

}

/**
 * @schema AppConfigDeleteHostedConfigurationVersionRequest
 */
export interface AppConfigDeleteHostedConfigurationVersionRequest {
  /**
   * @schema AppConfigDeleteHostedConfigurationVersionRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema AppConfigDeleteHostedConfigurationVersionRequest#ConfigurationProfileId
   */
  readonly configurationProfileId: string;

  /**
   * @schema AppConfigDeleteHostedConfigurationVersionRequest#VersionNumber
   */
  readonly versionNumber: number;

}

/**
 * @schema AppConfigGetApplicationRequest
 */
export interface AppConfigGetApplicationRequest {
  /**
   * @schema AppConfigGetApplicationRequest#ApplicationId
   */
  readonly applicationId: string;

}

/**
 * @schema AppConfigGetConfigurationRequest
 */
export interface AppConfigGetConfigurationRequest {
  /**
   * @schema AppConfigGetConfigurationRequest#Application
   */
  readonly application: string;

  /**
   * @schema AppConfigGetConfigurationRequest#Environment
   */
  readonly environment: string;

  /**
   * @schema AppConfigGetConfigurationRequest#Configuration
   */
  readonly configuration: string;

  /**
   * @schema AppConfigGetConfigurationRequest#ClientId
   */
  readonly clientId: string;

  /**
   * @schema AppConfigGetConfigurationRequest#ClientConfigurationVersion
   */
  readonly clientConfigurationVersion?: string;

}

/**
 * @schema AppConfigConfiguration
 */
export interface AppConfigConfiguration {
  /**
   * @schema AppConfigConfiguration#Content
   */
  readonly content?: any;

  /**
   * @schema AppConfigConfiguration#ConfigurationVersion
   */
  readonly configurationVersion?: string;

  /**
   * @schema AppConfigConfiguration#ContentType
   */
  readonly contentType?: string;

}

/**
 * @schema AppConfigGetConfigurationProfileRequest
 */
export interface AppConfigGetConfigurationProfileRequest {
  /**
   * @schema AppConfigGetConfigurationProfileRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema AppConfigGetConfigurationProfileRequest#ConfigurationProfileId
   */
  readonly configurationProfileId: string;

}

/**
 * @schema AppConfigGetDeploymentRequest
 */
export interface AppConfigGetDeploymentRequest {
  /**
   * @schema AppConfigGetDeploymentRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema AppConfigGetDeploymentRequest#EnvironmentId
   */
  readonly environmentId: string;

  /**
   * @schema AppConfigGetDeploymentRequest#DeploymentNumber
   */
  readonly deploymentNumber: number;

}

/**
 * @schema AppConfigDeployment
 */
export interface AppConfigDeployment {
  /**
   * @schema AppConfigDeployment#ApplicationId
   */
  readonly applicationId?: string;

  /**
   * @schema AppConfigDeployment#EnvironmentId
   */
  readonly environmentId?: string;

  /**
   * @schema AppConfigDeployment#DeploymentStrategyId
   */
  readonly deploymentStrategyId?: string;

  /**
   * @schema AppConfigDeployment#ConfigurationProfileId
   */
  readonly configurationProfileId?: string;

  /**
   * @schema AppConfigDeployment#DeploymentNumber
   */
  readonly deploymentNumber?: number;

  /**
   * @schema AppConfigDeployment#ConfigurationName
   */
  readonly configurationName?: string;

  /**
   * @schema AppConfigDeployment#ConfigurationLocationUri
   */
  readonly configurationLocationUri?: string;

  /**
   * @schema AppConfigDeployment#ConfigurationVersion
   */
  readonly configurationVersion?: string;

  /**
   * @schema AppConfigDeployment#Description
   */
  readonly description?: string;

  /**
   * @schema AppConfigDeployment#DeploymentDurationInMinutes
   */
  readonly deploymentDurationInMinutes?: number;

  /**
   * @schema AppConfigDeployment#GrowthType
   */
  readonly growthType?: string;

  /**
   * @schema AppConfigDeployment#GrowthFactor
   */
  readonly growthFactor?: number;

  /**
   * @schema AppConfigDeployment#FinalBakeTimeInMinutes
   */
  readonly finalBakeTimeInMinutes?: number;

  /**
   * @schema AppConfigDeployment#State
   */
  readonly state?: string;

  /**
   * @schema AppConfigDeployment#EventLog
   */
  readonly eventLog?: AppConfigDeploymentEvent[];

  /**
   * @schema AppConfigDeployment#PercentageComplete
   */
  readonly percentageComplete?: number;

  /**
   * @schema AppConfigDeployment#StartedAt
   */
  readonly startedAt?: string;

  /**
   * @schema AppConfigDeployment#CompletedAt
   */
  readonly completedAt?: string;

}

/**
 * @schema AppConfigGetDeploymentStrategyRequest
 */
export interface AppConfigGetDeploymentStrategyRequest {
  /**
   * @schema AppConfigGetDeploymentStrategyRequest#DeploymentStrategyId
   */
  readonly deploymentStrategyId: string;

}

/**
 * @schema AppConfigGetEnvironmentRequest
 */
export interface AppConfigGetEnvironmentRequest {
  /**
   * @schema AppConfigGetEnvironmentRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema AppConfigGetEnvironmentRequest#EnvironmentId
   */
  readonly environmentId: string;

}

/**
 * @schema AppConfigGetHostedConfigurationVersionRequest
 */
export interface AppConfigGetHostedConfigurationVersionRequest {
  /**
   * @schema AppConfigGetHostedConfigurationVersionRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema AppConfigGetHostedConfigurationVersionRequest#ConfigurationProfileId
   */
  readonly configurationProfileId: string;

  /**
   * @schema AppConfigGetHostedConfigurationVersionRequest#VersionNumber
   */
  readonly versionNumber: number;

}

/**
 * @schema AppConfigListApplicationsRequest
 */
export interface AppConfigListApplicationsRequest {
  /**
   * @schema AppConfigListApplicationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema AppConfigListApplicationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AppConfigApplications
 */
export interface AppConfigApplications {
  /**
   * @schema AppConfigApplications#Items
   */
  readonly items?: AppConfigApplication[];

  /**
   * @schema AppConfigApplications#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AppConfigListConfigurationProfilesRequest
 */
export interface AppConfigListConfigurationProfilesRequest {
  /**
   * @schema AppConfigListConfigurationProfilesRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema AppConfigListConfigurationProfilesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema AppConfigListConfigurationProfilesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AppConfigConfigurationProfiles
 */
export interface AppConfigConfigurationProfiles {
  /**
   * @schema AppConfigConfigurationProfiles#Items
   */
  readonly items?: AppConfigConfigurationProfileSummary[];

  /**
   * @schema AppConfigConfigurationProfiles#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AppConfigListDeploymentStrategiesRequest
 */
export interface AppConfigListDeploymentStrategiesRequest {
  /**
   * @schema AppConfigListDeploymentStrategiesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema AppConfigListDeploymentStrategiesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AppConfigDeploymentStrategies
 */
export interface AppConfigDeploymentStrategies {
  /**
   * @schema AppConfigDeploymentStrategies#Items
   */
  readonly items?: AppConfigDeploymentStrategy[];

  /**
   * @schema AppConfigDeploymentStrategies#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AppConfigListDeploymentsRequest
 */
export interface AppConfigListDeploymentsRequest {
  /**
   * @schema AppConfigListDeploymentsRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema AppConfigListDeploymentsRequest#EnvironmentId
   */
  readonly environmentId: string;

  /**
   * @schema AppConfigListDeploymentsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema AppConfigListDeploymentsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AppConfigDeployments
 */
export interface AppConfigDeployments {
  /**
   * @schema AppConfigDeployments#Items
   */
  readonly items?: AppConfigDeploymentSummary[];

  /**
   * @schema AppConfigDeployments#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AppConfigListEnvironmentsRequest
 */
export interface AppConfigListEnvironmentsRequest {
  /**
   * @schema AppConfigListEnvironmentsRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema AppConfigListEnvironmentsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema AppConfigListEnvironmentsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AppConfigEnvironments
 */
export interface AppConfigEnvironments {
  /**
   * @schema AppConfigEnvironments#Items
   */
  readonly items?: AppConfigEnvironment[];

  /**
   * @schema AppConfigEnvironments#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AppConfigListHostedConfigurationVersionsRequest
 */
export interface AppConfigListHostedConfigurationVersionsRequest {
  /**
   * @schema AppConfigListHostedConfigurationVersionsRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema AppConfigListHostedConfigurationVersionsRequest#ConfigurationProfileId
   */
  readonly configurationProfileId: string;

  /**
   * @schema AppConfigListHostedConfigurationVersionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema AppConfigListHostedConfigurationVersionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AppConfigHostedConfigurationVersions
 */
export interface AppConfigHostedConfigurationVersions {
  /**
   * @schema AppConfigHostedConfigurationVersions#Items
   */
  readonly items?: AppConfigHostedConfigurationVersionSummary[];

  /**
   * @schema AppConfigHostedConfigurationVersions#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AppConfigListTagsForResourceRequest
 */
export interface AppConfigListTagsForResourceRequest {
  /**
   * @schema AppConfigListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema AppConfigResourceTags
 */
export interface AppConfigResourceTags {
  /**
   * @schema AppConfigResourceTags#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema AppConfigStartDeploymentRequest
 */
export interface AppConfigStartDeploymentRequest {
  /**
   * @schema AppConfigStartDeploymentRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema AppConfigStartDeploymentRequest#EnvironmentId
   */
  readonly environmentId: string;

  /**
   * @schema AppConfigStartDeploymentRequest#DeploymentStrategyId
   */
  readonly deploymentStrategyId: string;

  /**
   * @schema AppConfigStartDeploymentRequest#ConfigurationProfileId
   */
  readonly configurationProfileId: string;

  /**
   * @schema AppConfigStartDeploymentRequest#ConfigurationVersion
   */
  readonly configurationVersion: string;

  /**
   * @schema AppConfigStartDeploymentRequest#Description
   */
  readonly description?: string;

  /**
   * @schema AppConfigStartDeploymentRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema AppConfigStopDeploymentRequest
 */
export interface AppConfigStopDeploymentRequest {
  /**
   * @schema AppConfigStopDeploymentRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema AppConfigStopDeploymentRequest#EnvironmentId
   */
  readonly environmentId: string;

  /**
   * @schema AppConfigStopDeploymentRequest#DeploymentNumber
   */
  readonly deploymentNumber: number;

}

/**
 * @schema AppConfigTagResourceRequest
 */
export interface AppConfigTagResourceRequest {
  /**
   * @schema AppConfigTagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema AppConfigTagResourceRequest#Tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema AppConfigUntagResourceRequest
 */
export interface AppConfigUntagResourceRequest {
  /**
   * @schema AppConfigUntagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema AppConfigUntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema AppConfigUpdateApplicationRequest
 */
export interface AppConfigUpdateApplicationRequest {
  /**
   * @schema AppConfigUpdateApplicationRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema AppConfigUpdateApplicationRequest#Name
   */
  readonly name?: string;

  /**
   * @schema AppConfigUpdateApplicationRequest#Description
   */
  readonly description?: string;

}

/**
 * @schema AppConfigUpdateConfigurationProfileRequest
 */
export interface AppConfigUpdateConfigurationProfileRequest {
  /**
   * @schema AppConfigUpdateConfigurationProfileRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema AppConfigUpdateConfigurationProfileRequest#ConfigurationProfileId
   */
  readonly configurationProfileId: string;

  /**
   * @schema AppConfigUpdateConfigurationProfileRequest#Name
   */
  readonly name?: string;

  /**
   * @schema AppConfigUpdateConfigurationProfileRequest#Description
   */
  readonly description?: string;

  /**
   * @schema AppConfigUpdateConfigurationProfileRequest#RetrievalRoleArn
   */
  readonly retrievalRoleArn?: string;

  /**
   * @schema AppConfigUpdateConfigurationProfileRequest#Validators
   */
  readonly validators?: AppConfigValidator[];

}

/**
 * @schema AppConfigUpdateDeploymentStrategyRequest
 */
export interface AppConfigUpdateDeploymentStrategyRequest {
  /**
   * @schema AppConfigUpdateDeploymentStrategyRequest#DeploymentStrategyId
   */
  readonly deploymentStrategyId: string;

  /**
   * @schema AppConfigUpdateDeploymentStrategyRequest#Description
   */
  readonly description?: string;

  /**
   * @schema AppConfigUpdateDeploymentStrategyRequest#DeploymentDurationInMinutes
   */
  readonly deploymentDurationInMinutes?: number;

  /**
   * @schema AppConfigUpdateDeploymentStrategyRequest#FinalBakeTimeInMinutes
   */
  readonly finalBakeTimeInMinutes?: number;

  /**
   * @schema AppConfigUpdateDeploymentStrategyRequest#GrowthFactor
   */
  readonly growthFactor?: number;

  /**
   * @schema AppConfigUpdateDeploymentStrategyRequest#GrowthType
   */
  readonly growthType?: string;

}

/**
 * @schema AppConfigUpdateEnvironmentRequest
 */
export interface AppConfigUpdateEnvironmentRequest {
  /**
   * @schema AppConfigUpdateEnvironmentRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema AppConfigUpdateEnvironmentRequest#EnvironmentId
   */
  readonly environmentId: string;

  /**
   * @schema AppConfigUpdateEnvironmentRequest#Name
   */
  readonly name?: string;

  /**
   * @schema AppConfigUpdateEnvironmentRequest#Description
   */
  readonly description?: string;

  /**
   * @schema AppConfigUpdateEnvironmentRequest#Monitors
   */
  readonly monitors?: AppConfigMonitor[];

}

/**
 * @schema AppConfigValidateConfigurationRequest
 */
export interface AppConfigValidateConfigurationRequest {
  /**
   * @schema AppConfigValidateConfigurationRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema AppConfigValidateConfigurationRequest#ConfigurationProfileId
   */
  readonly configurationProfileId: string;

  /**
   * @schema AppConfigValidateConfigurationRequest#ConfigurationVersion
   */
  readonly configurationVersion: string;

}

/**
 * @schema AppConfigValidator
 */
export interface AppConfigValidator {
  /**
   * @schema AppConfigValidator#Type
   */
  readonly type: string;

  /**
   * @schema AppConfigValidator#Content
   */
  readonly content: string;

}

/**
 * @schema AppConfigMonitor
 */
export interface AppConfigMonitor {
  /**
   * @schema AppConfigMonitor#AlarmArn
   */
  readonly alarmArn?: string;

  /**
   * @schema AppConfigMonitor#AlarmRoleArn
   */
  readonly alarmRoleArn?: string;

}

/**
 * @schema AppConfigDeploymentEvent
 */
export interface AppConfigDeploymentEvent {
  /**
   * @schema AppConfigDeploymentEvent#EventType
   */
  readonly eventType?: string;

  /**
   * @schema AppConfigDeploymentEvent#TriggeredBy
   */
  readonly triggeredBy?: string;

  /**
   * @schema AppConfigDeploymentEvent#Description
   */
  readonly description?: string;

  /**
   * @schema AppConfigDeploymentEvent#OccurredAt
   */
  readonly occurredAt?: string;

}

/**
 * @schema AppConfigConfigurationProfileSummary
 */
export interface AppConfigConfigurationProfileSummary {
  /**
   * @schema AppConfigConfigurationProfileSummary#ApplicationId
   */
  readonly applicationId?: string;

  /**
   * @schema AppConfigConfigurationProfileSummary#Id
   */
  readonly id?: string;

  /**
   * @schema AppConfigConfigurationProfileSummary#Name
   */
  readonly name?: string;

  /**
   * @schema AppConfigConfigurationProfileSummary#LocationUri
   */
  readonly locationUri?: string;

  /**
   * @schema AppConfigConfigurationProfileSummary#ValidatorTypes
   */
  readonly validatorTypes?: string[];

}

/**
 * @schema AppConfigDeploymentSummary
 */
export interface AppConfigDeploymentSummary {
  /**
   * @schema AppConfigDeploymentSummary#DeploymentNumber
   */
  readonly deploymentNumber?: number;

  /**
   * @schema AppConfigDeploymentSummary#ConfigurationName
   */
  readonly configurationName?: string;

  /**
   * @schema AppConfigDeploymentSummary#ConfigurationVersion
   */
  readonly configurationVersion?: string;

  /**
   * @schema AppConfigDeploymentSummary#DeploymentDurationInMinutes
   */
  readonly deploymentDurationInMinutes?: number;

  /**
   * @schema AppConfigDeploymentSummary#GrowthType
   */
  readonly growthType?: string;

  /**
   * @schema AppConfigDeploymentSummary#GrowthFactor
   */
  readonly growthFactor?: number;

  /**
   * @schema AppConfigDeploymentSummary#FinalBakeTimeInMinutes
   */
  readonly finalBakeTimeInMinutes?: number;

  /**
   * @schema AppConfigDeploymentSummary#State
   */
  readonly state?: string;

  /**
   * @schema AppConfigDeploymentSummary#PercentageComplete
   */
  readonly percentageComplete?: number;

  /**
   * @schema AppConfigDeploymentSummary#StartedAt
   */
  readonly startedAt?: string;

  /**
   * @schema AppConfigDeploymentSummary#CompletedAt
   */
  readonly completedAt?: string;

}

/**
 * @schema AppConfigHostedConfigurationVersionSummary
 */
export interface AppConfigHostedConfigurationVersionSummary {
  /**
   * @schema AppConfigHostedConfigurationVersionSummary#ApplicationId
   */
  readonly applicationId?: string;

  /**
   * @schema AppConfigHostedConfigurationVersionSummary#ConfigurationProfileId
   */
  readonly configurationProfileId?: string;

  /**
   * @schema AppConfigHostedConfigurationVersionSummary#VersionNumber
   */
  readonly versionNumber?: number;

  /**
   * @schema AppConfigHostedConfigurationVersionSummary#Description
   */
  readonly description?: string;

  /**
   * @schema AppConfigHostedConfigurationVersionSummary#ContentType
   */
  readonly contentType?: string;

}
