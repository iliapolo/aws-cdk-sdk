/**
 * @schema CreateCliTokenRequest
 */
export interface CreateCliTokenRequest {
  /**
   * @schema CreateCliTokenRequest#Name
   */
  readonly name: string;

}

/**
 * @schema CreateCliTokenResponse
 */
export interface CreateCliTokenResponse {
  /**
   * @schema CreateCliTokenResponse#CliToken
   */
  readonly cliToken?: string;

  /**
   * @schema CreateCliTokenResponse#WebServerHostname
   */
  readonly webServerHostname?: string;

}

/**
 * @schema CreateEnvironmentInput
 */
export interface CreateEnvironmentInput {
  /**
   * @schema CreateEnvironmentInput#AirflowConfigurationOptions
   */
  readonly airflowConfigurationOptions?: { [key: string]: string };

  /**
   * @schema CreateEnvironmentInput#AirflowVersion
   */
  readonly airflowVersion?: string;

  /**
   * @schema CreateEnvironmentInput#DagS3Path
   */
  readonly dagS3Path: string;

  /**
   * @schema CreateEnvironmentInput#EnvironmentClass
   */
  readonly environmentClass?: string;

  /**
   * @schema CreateEnvironmentInput#ExecutionRoleArn
   */
  readonly executionRoleArn: string;

  /**
   * @schema CreateEnvironmentInput#KmsKey
   */
  readonly kmsKey?: string;

  /**
   * @schema CreateEnvironmentInput#LoggingConfiguration
   */
  readonly loggingConfiguration?: LoggingConfigurationInput;

  /**
   * @schema CreateEnvironmentInput#MaxWorkers
   */
  readonly maxWorkers?: number;

  /**
   * @schema CreateEnvironmentInput#Name
   */
  readonly name: string;

  /**
   * @schema CreateEnvironmentInput#NetworkConfiguration
   */
  readonly networkConfiguration: NetworkConfiguration;

  /**
   * @schema CreateEnvironmentInput#PluginsS3ObjectVersion
   */
  readonly pluginsS3ObjectVersion?: string;

  /**
   * @schema CreateEnvironmentInput#PluginsS3Path
   */
  readonly pluginsS3Path?: string;

  /**
   * @schema CreateEnvironmentInput#RequirementsS3ObjectVersion
   */
  readonly requirementsS3ObjectVersion?: string;

  /**
   * @schema CreateEnvironmentInput#RequirementsS3Path
   */
  readonly requirementsS3Path?: string;

  /**
   * @schema CreateEnvironmentInput#SourceBucketArn
   */
  readonly sourceBucketArn: string;

  /**
   * @schema CreateEnvironmentInput#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema CreateEnvironmentInput#WebserverAccessMode
   */
  readonly webserverAccessMode?: string;

  /**
   * @schema CreateEnvironmentInput#WeeklyMaintenanceWindowStart
   */
  readonly weeklyMaintenanceWindowStart?: string;

}

/**
 * @schema CreateEnvironmentOutput
 */
export interface CreateEnvironmentOutput {
  /**
   * @schema CreateEnvironmentOutput#Arn
   */
  readonly arn?: string;

}

/**
 * @schema CreateWebLoginTokenRequest
 */
export interface CreateWebLoginTokenRequest {
  /**
   * @schema CreateWebLoginTokenRequest#Name
   */
  readonly name: string;

}

/**
 * @schema CreateWebLoginTokenResponse
 */
export interface CreateWebLoginTokenResponse {
  /**
   * @schema CreateWebLoginTokenResponse#WebServerHostname
   */
  readonly webServerHostname?: string;

  /**
   * @schema CreateWebLoginTokenResponse#WebToken
   */
  readonly webToken?: string;

}

/**
 * @schema DeleteEnvironmentInput
 */
export interface DeleteEnvironmentInput {
  /**
   * @schema DeleteEnvironmentInput#Name
   */
  readonly name: string;

}

/**
 * @schema DeleteEnvironmentOutput
 */
export interface DeleteEnvironmentOutput {
}

/**
 * @schema GetEnvironmentInput
 */
export interface GetEnvironmentInput {
  /**
   * @schema GetEnvironmentInput#Name
   */
  readonly name: string;

}

/**
 * @schema GetEnvironmentOutput
 */
export interface GetEnvironmentOutput {
  /**
   * @schema GetEnvironmentOutput#Environment
   */
  readonly environment?: Environment;

}

/**
 * @schema ListEnvironmentsInput
 */
export interface ListEnvironmentsInput {
  /**
   * @schema ListEnvironmentsInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListEnvironmentsInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListEnvironmentsOutput
 */
export interface ListEnvironmentsOutput {
  /**
   * @schema ListEnvironmentsOutput#Environments
   */
  readonly environments: string[];

  /**
   * @schema ListEnvironmentsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsForResourceInput
 */
export interface ListTagsForResourceInput {
  /**
   * @schema ListTagsForResourceInput#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema ListTagsForResourceOutput
 */
export interface ListTagsForResourceOutput {
  /**
   * @schema ListTagsForResourceOutput#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema PublishMetricsInput
 */
export interface PublishMetricsInput {
  /**
   * @schema PublishMetricsInput#EnvironmentName
   */
  readonly environmentName: string;

  /**
   * @schema PublishMetricsInput#MetricData
   */
  readonly metricData: MetricDatum[];

}

/**
 * @schema PublishMetricsOutput
 */
export interface PublishMetricsOutput {
}

/**
 * @schema TagResourceInput
 */
export interface TagResourceInput {
  /**
   * @schema TagResourceInput#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema TagResourceInput#Tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema TagResourceOutput
 */
export interface TagResourceOutput {
}

/**
 * @schema UntagResourceInput
 */
export interface UntagResourceInput {
  /**
   * @schema UntagResourceInput#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema UntagResourceInput#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UntagResourceOutput
 */
export interface UntagResourceOutput {
}

/**
 * @schema UpdateEnvironmentInput
 */
export interface UpdateEnvironmentInput {
  /**
   * @schema UpdateEnvironmentInput#AirflowConfigurationOptions
   */
  readonly airflowConfigurationOptions?: { [key: string]: string };

  /**
   * @schema UpdateEnvironmentInput#AirflowVersion
   */
  readonly airflowVersion?: string;

  /**
   * @schema UpdateEnvironmentInput#DagS3Path
   */
  readonly dagS3Path?: string;

  /**
   * @schema UpdateEnvironmentInput#EnvironmentClass
   */
  readonly environmentClass?: string;

  /**
   * @schema UpdateEnvironmentInput#ExecutionRoleArn
   */
  readonly executionRoleArn?: string;

  /**
   * @schema UpdateEnvironmentInput#LoggingConfiguration
   */
  readonly loggingConfiguration?: LoggingConfigurationInput;

  /**
   * @schema UpdateEnvironmentInput#MaxWorkers
   */
  readonly maxWorkers?: number;

  /**
   * @schema UpdateEnvironmentInput#Name
   */
  readonly name: string;

  /**
   * @schema UpdateEnvironmentInput#NetworkConfiguration
   */
  readonly networkConfiguration?: UpdateNetworkConfigurationInput;

  /**
   * @schema UpdateEnvironmentInput#PluginsS3ObjectVersion
   */
  readonly pluginsS3ObjectVersion?: string;

  /**
   * @schema UpdateEnvironmentInput#PluginsS3Path
   */
  readonly pluginsS3Path?: string;

  /**
   * @schema UpdateEnvironmentInput#RequirementsS3ObjectVersion
   */
  readonly requirementsS3ObjectVersion?: string;

  /**
   * @schema UpdateEnvironmentInput#RequirementsS3Path
   */
  readonly requirementsS3Path?: string;

  /**
   * @schema UpdateEnvironmentInput#SourceBucketArn
   */
  readonly sourceBucketArn?: string;

  /**
   * @schema UpdateEnvironmentInput#WebserverAccessMode
   */
  readonly webserverAccessMode?: string;

  /**
   * @schema UpdateEnvironmentInput#WeeklyMaintenanceWindowStart
   */
  readonly weeklyMaintenanceWindowStart?: string;

}

/**
 * @schema UpdateEnvironmentOutput
 */
export interface UpdateEnvironmentOutput {
  /**
   * @schema UpdateEnvironmentOutput#Arn
   */
  readonly arn?: string;

}

/**
 * @schema LoggingConfigurationInput
 */
export interface LoggingConfigurationInput {
  /**
   * @schema LoggingConfigurationInput#DagProcessingLogs
   */
  readonly dagProcessingLogs?: ModuleLoggingConfigurationInput;

  /**
   * @schema LoggingConfigurationInput#SchedulerLogs
   */
  readonly schedulerLogs?: ModuleLoggingConfigurationInput;

  /**
   * @schema LoggingConfigurationInput#TaskLogs
   */
  readonly taskLogs?: ModuleLoggingConfigurationInput;

  /**
   * @schema LoggingConfigurationInput#WebserverLogs
   */
  readonly webserverLogs?: ModuleLoggingConfigurationInput;

  /**
   * @schema LoggingConfigurationInput#WorkerLogs
   */
  readonly workerLogs?: ModuleLoggingConfigurationInput;

}

/**
 * @schema NetworkConfiguration
 */
export interface NetworkConfiguration {
  /**
   * @schema NetworkConfiguration#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema NetworkConfiguration#SubnetIds
   */
  readonly subnetIds?: string[];

}

/**
 * @schema Environment
 */
export interface Environment {
  /**
   * @schema Environment#AirflowConfigurationOptions
   */
  readonly airflowConfigurationOptions?: { [key: string]: string };

  /**
   * @schema Environment#AirflowVersion
   */
  readonly airflowVersion?: string;

  /**
   * @schema Environment#Arn
   */
  readonly arn?: string;

  /**
   * @schema Environment#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema Environment#DagS3Path
   */
  readonly dagS3Path?: string;

  /**
   * @schema Environment#EnvironmentClass
   */
  readonly environmentClass?: string;

  /**
   * @schema Environment#ExecutionRoleArn
   */
  readonly executionRoleArn?: string;

  /**
   * @schema Environment#KmsKey
   */
  readonly kmsKey?: string;

  /**
   * @schema Environment#LastUpdate
   */
  readonly lastUpdate?: LastUpdate;

  /**
   * @schema Environment#LoggingConfiguration
   */
  readonly loggingConfiguration?: LoggingConfiguration;

  /**
   * @schema Environment#MaxWorkers
   */
  readonly maxWorkers?: number;

  /**
   * @schema Environment#Name
   */
  readonly name?: string;

  /**
   * @schema Environment#NetworkConfiguration
   */
  readonly networkConfiguration?: NetworkConfiguration;

  /**
   * @schema Environment#PluginsS3ObjectVersion
   */
  readonly pluginsS3ObjectVersion?: string;

  /**
   * @schema Environment#PluginsS3Path
   */
  readonly pluginsS3Path?: string;

  /**
   * @schema Environment#RequirementsS3ObjectVersion
   */
  readonly requirementsS3ObjectVersion?: string;

  /**
   * @schema Environment#RequirementsS3Path
   */
  readonly requirementsS3Path?: string;

  /**
   * @schema Environment#ServiceRoleArn
   */
  readonly serviceRoleArn?: string;

  /**
   * @schema Environment#SourceBucketArn
   */
  readonly sourceBucketArn?: string;

  /**
   * @schema Environment#Status
   */
  readonly status?: string;

  /**
   * @schema Environment#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema Environment#WebserverAccessMode
   */
  readonly webserverAccessMode?: string;

  /**
   * @schema Environment#WebserverUrl
   */
  readonly webserverUrl?: string;

  /**
   * @schema Environment#WeeklyMaintenanceWindowStart
   */
  readonly weeklyMaintenanceWindowStart?: string;

}

/**
 * @schema MetricDatum
 */
export interface MetricDatum {
  /**
   * @schema MetricDatum#Dimensions
   */
  readonly dimensions?: Dimension[];

  /**
   * @schema MetricDatum#MetricName
   */
  readonly metricName: string;

  /**
   * @schema MetricDatum#StatisticValues
   */
  readonly statisticValues?: StatisticSet;

  /**
   * @schema MetricDatum#Timestamp
   */
  readonly timestamp: string;

  /**
   * @schema MetricDatum#Unit
   */
  readonly unit?: string;

  /**
   * @schema MetricDatum#Value
   */
  readonly value?: number;

}

/**
 * @schema UpdateNetworkConfigurationInput
 */
export interface UpdateNetworkConfigurationInput {
  /**
   * @schema UpdateNetworkConfigurationInput#SecurityGroupIds
   */
  readonly securityGroupIds: string[];

}

/**
 * @schema ModuleLoggingConfigurationInput
 */
export interface ModuleLoggingConfigurationInput {
  /**
   * @schema ModuleLoggingConfigurationInput#Enabled
   */
  readonly enabled: boolean;

  /**
   * @schema ModuleLoggingConfigurationInput#LogLevel
   */
  readonly logLevel: string;

}

/**
 * @schema LastUpdate
 */
export interface LastUpdate {
  /**
   * @schema LastUpdate#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema LastUpdate#Error
   */
  readonly error?: UpdateError;

  /**
   * @schema LastUpdate#Status
   */
  readonly status?: string;

}

/**
 * @schema LoggingConfiguration
 */
export interface LoggingConfiguration {
  /**
   * @schema LoggingConfiguration#DagProcessingLogs
   */
  readonly dagProcessingLogs?: ModuleLoggingConfiguration;

  /**
   * @schema LoggingConfiguration#SchedulerLogs
   */
  readonly schedulerLogs?: ModuleLoggingConfiguration;

  /**
   * @schema LoggingConfiguration#TaskLogs
   */
  readonly taskLogs?: ModuleLoggingConfiguration;

  /**
   * @schema LoggingConfiguration#WebserverLogs
   */
  readonly webserverLogs?: ModuleLoggingConfiguration;

  /**
   * @schema LoggingConfiguration#WorkerLogs
   */
  readonly workerLogs?: ModuleLoggingConfiguration;

}

/**
 * @schema Dimension
 */
export interface Dimension {
  /**
   * @schema Dimension#Name
   */
  readonly name: string;

  /**
   * @schema Dimension#Value
   */
  readonly value: string;

}

/**
 * @schema StatisticSet
 */
export interface StatisticSet {
  /**
   * @schema StatisticSet#Maximum
   */
  readonly maximum?: number;

  /**
   * @schema StatisticSet#Minimum
   */
  readonly minimum?: number;

  /**
   * @schema StatisticSet#SampleCount
   */
  readonly sampleCount?: number;

  /**
   * @schema StatisticSet#Sum
   */
  readonly sum?: number;

}

/**
 * @schema UpdateError
 */
export interface UpdateError {
  /**
   * @schema UpdateError#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema UpdateError#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema ModuleLoggingConfiguration
 */
export interface ModuleLoggingConfiguration {
  /**
   * @schema ModuleLoggingConfiguration#CloudWatchLogGroupArn
   */
  readonly cloudWatchLogGroupArn?: string;

  /**
   * @schema ModuleLoggingConfiguration#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema ModuleLoggingConfiguration#LogLevel
   */
  readonly logLevel?: string;

}
