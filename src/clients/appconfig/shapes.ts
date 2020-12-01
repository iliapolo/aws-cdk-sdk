/**
 * @schema CreateApplicationRequest
 */
export interface CreateApplicationRequest {
  /**
   * @schema CreateApplicationRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateApplicationRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateApplicationRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema Application
 */
export interface Application {
  /**
   * @schema Application#Id
   */
  readonly id?: string;

  /**
   * @schema Application#Name
   */
  readonly name?: string;

  /**
   * @schema Application#Description
   */
  readonly description?: string;

}

/**
 * @schema CreateConfigurationProfileRequest
 */
export interface CreateConfigurationProfileRequest {
  /**
   * @schema CreateConfigurationProfileRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema CreateConfigurationProfileRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateConfigurationProfileRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateConfigurationProfileRequest#LocationUri
   */
  readonly locationUri: string;

  /**
   * @schema CreateConfigurationProfileRequest#RetrievalRoleArn
   */
  readonly retrievalRoleArn?: string;

  /**
   * @schema CreateConfigurationProfileRequest#Validators
   */
  readonly validators?: Validator[];

  /**
   * @schema CreateConfigurationProfileRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema ConfigurationProfile
 */
export interface ConfigurationProfile {
  /**
   * @schema ConfigurationProfile#ApplicationId
   */
  readonly applicationId?: string;

  /**
   * @schema ConfigurationProfile#Id
   */
  readonly id?: string;

  /**
   * @schema ConfigurationProfile#Name
   */
  readonly name?: string;

  /**
   * @schema ConfigurationProfile#Description
   */
  readonly description?: string;

  /**
   * @schema ConfigurationProfile#LocationUri
   */
  readonly locationUri?: string;

  /**
   * @schema ConfigurationProfile#RetrievalRoleArn
   */
  readonly retrievalRoleArn?: string;

  /**
   * @schema ConfigurationProfile#Validators
   */
  readonly validators?: Validator[];

}

/**
 * @schema CreateDeploymentStrategyRequest
 */
export interface CreateDeploymentStrategyRequest {
  /**
   * @schema CreateDeploymentStrategyRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateDeploymentStrategyRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateDeploymentStrategyRequest#DeploymentDurationInMinutes
   */
  readonly deploymentDurationInMinutes: number;

  /**
   * @schema CreateDeploymentStrategyRequest#FinalBakeTimeInMinutes
   */
  readonly finalBakeTimeInMinutes?: number;

  /**
   * @schema CreateDeploymentStrategyRequest#GrowthFactor
   */
  readonly growthFactor: number;

  /**
   * @schema CreateDeploymentStrategyRequest#GrowthType
   */
  readonly growthType?: string;

  /**
   * @schema CreateDeploymentStrategyRequest#ReplicateTo
   */
  readonly replicateTo: string;

  /**
   * @schema CreateDeploymentStrategyRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema DeploymentStrategy
 */
export interface DeploymentStrategy {
  /**
   * @schema DeploymentStrategy#Id
   */
  readonly id?: string;

  /**
   * @schema DeploymentStrategy#Name
   */
  readonly name?: string;

  /**
   * @schema DeploymentStrategy#Description
   */
  readonly description?: string;

  /**
   * @schema DeploymentStrategy#DeploymentDurationInMinutes
   */
  readonly deploymentDurationInMinutes?: number;

  /**
   * @schema DeploymentStrategy#GrowthType
   */
  readonly growthType?: string;

  /**
   * @schema DeploymentStrategy#GrowthFactor
   */
  readonly growthFactor?: number;

  /**
   * @schema DeploymentStrategy#FinalBakeTimeInMinutes
   */
  readonly finalBakeTimeInMinutes?: number;

  /**
   * @schema DeploymentStrategy#ReplicateTo
   */
  readonly replicateTo?: string;

}

/**
 * @schema CreateEnvironmentRequest
 */
export interface CreateEnvironmentRequest {
  /**
   * @schema CreateEnvironmentRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema CreateEnvironmentRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateEnvironmentRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateEnvironmentRequest#Monitors
   */
  readonly monitors?: Monitor[];

  /**
   * @schema CreateEnvironmentRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema Environment
 */
export interface Environment {
  /**
   * @schema Environment#ApplicationId
   */
  readonly applicationId?: string;

  /**
   * @schema Environment#Id
   */
  readonly id?: string;

  /**
   * @schema Environment#Name
   */
  readonly name?: string;

  /**
   * @schema Environment#Description
   */
  readonly description?: string;

  /**
   * @schema Environment#State
   */
  readonly state?: string;

  /**
   * @schema Environment#Monitors
   */
  readonly monitors?: Monitor[];

}

/**
 * @schema CreateHostedConfigurationVersionRequest
 */
export interface CreateHostedConfigurationVersionRequest {
  /**
   * @schema CreateHostedConfigurationVersionRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema CreateHostedConfigurationVersionRequest#ConfigurationProfileId
   */
  readonly configurationProfileId: string;

  /**
   * @schema CreateHostedConfigurationVersionRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateHostedConfigurationVersionRequest#Content
   */
  readonly content: any;

  /**
   * @schema CreateHostedConfigurationVersionRequest#ContentType
   */
  readonly contentType: string;

  /**
   * @schema CreateHostedConfigurationVersionRequest#LatestVersionNumber
   */
  readonly latestVersionNumber?: number;

}

/**
 * @schema HostedConfigurationVersion
 */
export interface HostedConfigurationVersion {
  /**
   * @schema HostedConfigurationVersion#ApplicationId
   */
  readonly applicationId?: string;

  /**
   * @schema HostedConfigurationVersion#ConfigurationProfileId
   */
  readonly configurationProfileId?: string;

  /**
   * @schema HostedConfigurationVersion#VersionNumber
   */
  readonly versionNumber?: number;

  /**
   * @schema HostedConfigurationVersion#Description
   */
  readonly description?: string;

  /**
   * @schema HostedConfigurationVersion#Content
   */
  readonly content?: any;

  /**
   * @schema HostedConfigurationVersion#ContentType
   */
  readonly contentType?: string;

}

/**
 * @schema DeleteApplicationRequest
 */
export interface DeleteApplicationRequest {
  /**
   * @schema DeleteApplicationRequest#ApplicationId
   */
  readonly applicationId: string;

}

/**
 * @schema DeleteConfigurationProfileRequest
 */
export interface DeleteConfigurationProfileRequest {
  /**
   * @schema DeleteConfigurationProfileRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema DeleteConfigurationProfileRequest#ConfigurationProfileId
   */
  readonly configurationProfileId: string;

}

/**
 * @schema DeleteDeploymentStrategyRequest
 */
export interface DeleteDeploymentStrategyRequest {
  /**
   * @schema DeleteDeploymentStrategyRequest#DeploymentStrategyId
   */
  readonly deploymentStrategyId: string;

}

/**
 * @schema DeleteEnvironmentRequest
 */
export interface DeleteEnvironmentRequest {
  /**
   * @schema DeleteEnvironmentRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema DeleteEnvironmentRequest#EnvironmentId
   */
  readonly environmentId: string;

}

/**
 * @schema DeleteHostedConfigurationVersionRequest
 */
export interface DeleteHostedConfigurationVersionRequest {
  /**
   * @schema DeleteHostedConfigurationVersionRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema DeleteHostedConfigurationVersionRequest#ConfigurationProfileId
   */
  readonly configurationProfileId: string;

  /**
   * @schema DeleteHostedConfigurationVersionRequest#VersionNumber
   */
  readonly versionNumber: number;

}

/**
 * @schema GetApplicationRequest
 */
export interface GetApplicationRequest {
  /**
   * @schema GetApplicationRequest#ApplicationId
   */
  readonly applicationId: string;

}

/**
 * @schema GetConfigurationRequest
 */
export interface GetConfigurationRequest {
  /**
   * @schema GetConfigurationRequest#Application
   */
  readonly application: string;

  /**
   * @schema GetConfigurationRequest#Environment
   */
  readonly environment: string;

  /**
   * @schema GetConfigurationRequest#Configuration
   */
  readonly configuration: string;

  /**
   * @schema GetConfigurationRequest#ClientId
   */
  readonly clientId: string;

  /**
   * @schema GetConfigurationRequest#ClientConfigurationVersion
   */
  readonly clientConfigurationVersion?: string;

}

/**
 * @schema Configuration
 */
export interface Configuration {
  /**
   * @schema Configuration#Content
   */
  readonly content?: any;

  /**
   * @schema Configuration#ConfigurationVersion
   */
  readonly configurationVersion?: string;

  /**
   * @schema Configuration#ContentType
   */
  readonly contentType?: string;

}

/**
 * @schema GetConfigurationProfileRequest
 */
export interface GetConfigurationProfileRequest {
  /**
   * @schema GetConfigurationProfileRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema GetConfigurationProfileRequest#ConfigurationProfileId
   */
  readonly configurationProfileId: string;

}

/**
 * @schema GetDeploymentRequest
 */
export interface GetDeploymentRequest {
  /**
   * @schema GetDeploymentRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema GetDeploymentRequest#EnvironmentId
   */
  readonly environmentId: string;

  /**
   * @schema GetDeploymentRequest#DeploymentNumber
   */
  readonly deploymentNumber: number;

}

/**
 * @schema Deployment
 */
export interface Deployment {
  /**
   * @schema Deployment#ApplicationId
   */
  readonly applicationId?: string;

  /**
   * @schema Deployment#EnvironmentId
   */
  readonly environmentId?: string;

  /**
   * @schema Deployment#DeploymentStrategyId
   */
  readonly deploymentStrategyId?: string;

  /**
   * @schema Deployment#ConfigurationProfileId
   */
  readonly configurationProfileId?: string;

  /**
   * @schema Deployment#DeploymentNumber
   */
  readonly deploymentNumber?: number;

  /**
   * @schema Deployment#ConfigurationName
   */
  readonly configurationName?: string;

  /**
   * @schema Deployment#ConfigurationLocationUri
   */
  readonly configurationLocationUri?: string;

  /**
   * @schema Deployment#ConfigurationVersion
   */
  readonly configurationVersion?: string;

  /**
   * @schema Deployment#Description
   */
  readonly description?: string;

  /**
   * @schema Deployment#DeploymentDurationInMinutes
   */
  readonly deploymentDurationInMinutes?: number;

  /**
   * @schema Deployment#GrowthType
   */
  readonly growthType?: string;

  /**
   * @schema Deployment#GrowthFactor
   */
  readonly growthFactor?: number;

  /**
   * @schema Deployment#FinalBakeTimeInMinutes
   */
  readonly finalBakeTimeInMinutes?: number;

  /**
   * @schema Deployment#State
   */
  readonly state?: string;

  /**
   * @schema Deployment#EventLog
   */
  readonly eventLog?: DeploymentEvent[];

  /**
   * @schema Deployment#PercentageComplete
   */
  readonly percentageComplete?: number;

  /**
   * @schema Deployment#StartedAt
   */
  readonly startedAt?: string;

  /**
   * @schema Deployment#CompletedAt
   */
  readonly completedAt?: string;

}

/**
 * @schema GetDeploymentStrategyRequest
 */
export interface GetDeploymentStrategyRequest {
  /**
   * @schema GetDeploymentStrategyRequest#DeploymentStrategyId
   */
  readonly deploymentStrategyId: string;

}

/**
 * @schema GetEnvironmentRequest
 */
export interface GetEnvironmentRequest {
  /**
   * @schema GetEnvironmentRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema GetEnvironmentRequest#EnvironmentId
   */
  readonly environmentId: string;

}

/**
 * @schema GetHostedConfigurationVersionRequest
 */
export interface GetHostedConfigurationVersionRequest {
  /**
   * @schema GetHostedConfigurationVersionRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema GetHostedConfigurationVersionRequest#ConfigurationProfileId
   */
  readonly configurationProfileId: string;

  /**
   * @schema GetHostedConfigurationVersionRequest#VersionNumber
   */
  readonly versionNumber: number;

}

/**
 * @schema ListApplicationsRequest
 */
export interface ListApplicationsRequest {
  /**
   * @schema ListApplicationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListApplicationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Applications
 */
export interface Applications {
  /**
   * @schema Applications#Items
   */
  readonly items?: Application[];

  /**
   * @schema Applications#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListConfigurationProfilesRequest
 */
export interface ListConfigurationProfilesRequest {
  /**
   * @schema ListConfigurationProfilesRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema ListConfigurationProfilesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListConfigurationProfilesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ConfigurationProfiles
 */
export interface ConfigurationProfiles {
  /**
   * @schema ConfigurationProfiles#Items
   */
  readonly items?: ConfigurationProfileSummary[];

  /**
   * @schema ConfigurationProfiles#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListDeploymentStrategiesRequest
 */
export interface ListDeploymentStrategiesRequest {
  /**
   * @schema ListDeploymentStrategiesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListDeploymentStrategiesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DeploymentStrategies
 */
export interface DeploymentStrategies {
  /**
   * @schema DeploymentStrategies#Items
   */
  readonly items?: DeploymentStrategy[];

  /**
   * @schema DeploymentStrategies#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListDeploymentsRequest
 */
export interface ListDeploymentsRequest {
  /**
   * @schema ListDeploymentsRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema ListDeploymentsRequest#EnvironmentId
   */
  readonly environmentId: string;

  /**
   * @schema ListDeploymentsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListDeploymentsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Deployments
 */
export interface Deployments {
  /**
   * @schema Deployments#Items
   */
  readonly items?: DeploymentSummary[];

  /**
   * @schema Deployments#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListEnvironmentsRequest
 */
export interface ListEnvironmentsRequest {
  /**
   * @schema ListEnvironmentsRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema ListEnvironmentsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListEnvironmentsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Environments
 */
export interface Environments {
  /**
   * @schema Environments#Items
   */
  readonly items?: Environment[];

  /**
   * @schema Environments#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListHostedConfigurationVersionsRequest
 */
export interface ListHostedConfigurationVersionsRequest {
  /**
   * @schema ListHostedConfigurationVersionsRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema ListHostedConfigurationVersionsRequest#ConfigurationProfileId
   */
  readonly configurationProfileId: string;

  /**
   * @schema ListHostedConfigurationVersionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListHostedConfigurationVersionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema HostedConfigurationVersions
 */
export interface HostedConfigurationVersions {
  /**
   * @schema HostedConfigurationVersions#Items
   */
  readonly items?: HostedConfigurationVersionSummary[];

  /**
   * @schema HostedConfigurationVersions#NextToken
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
 * @schema ResourceTags
 */
export interface ResourceTags {
  /**
   * @schema ResourceTags#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema StartDeploymentRequest
 */
export interface StartDeploymentRequest {
  /**
   * @schema StartDeploymentRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema StartDeploymentRequest#EnvironmentId
   */
  readonly environmentId: string;

  /**
   * @schema StartDeploymentRequest#DeploymentStrategyId
   */
  readonly deploymentStrategyId: string;

  /**
   * @schema StartDeploymentRequest#ConfigurationProfileId
   */
  readonly configurationProfileId: string;

  /**
   * @schema StartDeploymentRequest#ConfigurationVersion
   */
  readonly configurationVersion: string;

  /**
   * @schema StartDeploymentRequest#Description
   */
  readonly description?: string;

  /**
   * @schema StartDeploymentRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema StopDeploymentRequest
 */
export interface StopDeploymentRequest {
  /**
   * @schema StopDeploymentRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema StopDeploymentRequest#EnvironmentId
   */
  readonly environmentId: string;

  /**
   * @schema StopDeploymentRequest#DeploymentNumber
   */
  readonly deploymentNumber: number;

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
 * @schema UpdateApplicationRequest
 */
export interface UpdateApplicationRequest {
  /**
   * @schema UpdateApplicationRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema UpdateApplicationRequest#Name
   */
  readonly name?: string;

  /**
   * @schema UpdateApplicationRequest#Description
   */
  readonly description?: string;

}

/**
 * @schema UpdateConfigurationProfileRequest
 */
export interface UpdateConfigurationProfileRequest {
  /**
   * @schema UpdateConfigurationProfileRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema UpdateConfigurationProfileRequest#ConfigurationProfileId
   */
  readonly configurationProfileId: string;

  /**
   * @schema UpdateConfigurationProfileRequest#Name
   */
  readonly name?: string;

  /**
   * @schema UpdateConfigurationProfileRequest#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateConfigurationProfileRequest#RetrievalRoleArn
   */
  readonly retrievalRoleArn?: string;

  /**
   * @schema UpdateConfigurationProfileRequest#Validators
   */
  readonly validators?: Validator[];

}

/**
 * @schema UpdateDeploymentStrategyRequest
 */
export interface UpdateDeploymentStrategyRequest {
  /**
   * @schema UpdateDeploymentStrategyRequest#DeploymentStrategyId
   */
  readonly deploymentStrategyId: string;

  /**
   * @schema UpdateDeploymentStrategyRequest#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateDeploymentStrategyRequest#DeploymentDurationInMinutes
   */
  readonly deploymentDurationInMinutes?: number;

  /**
   * @schema UpdateDeploymentStrategyRequest#FinalBakeTimeInMinutes
   */
  readonly finalBakeTimeInMinutes?: number;

  /**
   * @schema UpdateDeploymentStrategyRequest#GrowthFactor
   */
  readonly growthFactor?: number;

  /**
   * @schema UpdateDeploymentStrategyRequest#GrowthType
   */
  readonly growthType?: string;

}

/**
 * @schema UpdateEnvironmentRequest
 */
export interface UpdateEnvironmentRequest {
  /**
   * @schema UpdateEnvironmentRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema UpdateEnvironmentRequest#EnvironmentId
   */
  readonly environmentId: string;

  /**
   * @schema UpdateEnvironmentRequest#Name
   */
  readonly name?: string;

  /**
   * @schema UpdateEnvironmentRequest#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateEnvironmentRequest#Monitors
   */
  readonly monitors?: Monitor[];

}

/**
 * @schema ValidateConfigurationRequest
 */
export interface ValidateConfigurationRequest {
  /**
   * @schema ValidateConfigurationRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema ValidateConfigurationRequest#ConfigurationProfileId
   */
  readonly configurationProfileId: string;

  /**
   * @schema ValidateConfigurationRequest#ConfigurationVersion
   */
  readonly configurationVersion: string;

}

/**
 * @schema Validator
 */
export interface Validator {
  /**
   * @schema Validator#Type
   */
  readonly type: string;

  /**
   * @schema Validator#Content
   */
  readonly content: string;

}

/**
 * @schema Monitor
 */
export interface Monitor {
  /**
   * @schema Monitor#AlarmArn
   */
  readonly alarmArn?: string;

  /**
   * @schema Monitor#AlarmRoleArn
   */
  readonly alarmRoleArn?: string;

}

/**
 * @schema DeploymentEvent
 */
export interface DeploymentEvent {
  /**
   * @schema DeploymentEvent#EventType
   */
  readonly eventType?: string;

  /**
   * @schema DeploymentEvent#TriggeredBy
   */
  readonly triggeredBy?: string;

  /**
   * @schema DeploymentEvent#Description
   */
  readonly description?: string;

  /**
   * @schema DeploymentEvent#OccurredAt
   */
  readonly occurredAt?: string;

}

/**
 * @schema ConfigurationProfileSummary
 */
export interface ConfigurationProfileSummary {
  /**
   * @schema ConfigurationProfileSummary#ApplicationId
   */
  readonly applicationId?: string;

  /**
   * @schema ConfigurationProfileSummary#Id
   */
  readonly id?: string;

  /**
   * @schema ConfigurationProfileSummary#Name
   */
  readonly name?: string;

  /**
   * @schema ConfigurationProfileSummary#LocationUri
   */
  readonly locationUri?: string;

  /**
   * @schema ConfigurationProfileSummary#ValidatorTypes
   */
  readonly validatorTypes?: string[];

}

/**
 * @schema DeploymentSummary
 */
export interface DeploymentSummary {
  /**
   * @schema DeploymentSummary#DeploymentNumber
   */
  readonly deploymentNumber?: number;

  /**
   * @schema DeploymentSummary#ConfigurationName
   */
  readonly configurationName?: string;

  /**
   * @schema DeploymentSummary#ConfigurationVersion
   */
  readonly configurationVersion?: string;

  /**
   * @schema DeploymentSummary#DeploymentDurationInMinutes
   */
  readonly deploymentDurationInMinutes?: number;

  /**
   * @schema DeploymentSummary#GrowthType
   */
  readonly growthType?: string;

  /**
   * @schema DeploymentSummary#GrowthFactor
   */
  readonly growthFactor?: number;

  /**
   * @schema DeploymentSummary#FinalBakeTimeInMinutes
   */
  readonly finalBakeTimeInMinutes?: number;

  /**
   * @schema DeploymentSummary#State
   */
  readonly state?: string;

  /**
   * @schema DeploymentSummary#PercentageComplete
   */
  readonly percentageComplete?: number;

  /**
   * @schema DeploymentSummary#StartedAt
   */
  readonly startedAt?: string;

  /**
   * @schema DeploymentSummary#CompletedAt
   */
  readonly completedAt?: string;

}

/**
 * @schema HostedConfigurationVersionSummary
 */
export interface HostedConfigurationVersionSummary {
  /**
   * @schema HostedConfigurationVersionSummary#ApplicationId
   */
  readonly applicationId?: string;

  /**
   * @schema HostedConfigurationVersionSummary#ConfigurationProfileId
   */
  readonly configurationProfileId?: string;

  /**
   * @schema HostedConfigurationVersionSummary#VersionNumber
   */
  readonly versionNumber?: number;

  /**
   * @schema HostedConfigurationVersionSummary#Description
   */
  readonly description?: string;

  /**
   * @schema HostedConfigurationVersionSummary#ContentType
   */
  readonly contentType?: string;

}
