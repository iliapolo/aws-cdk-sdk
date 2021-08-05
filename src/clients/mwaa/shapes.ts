/**
 * @schema MwaaCreateCliTokenRequest
 */
export interface MwaaCreateCliTokenRequest {
  /**
   * @schema MwaaCreateCliTokenRequest#Name
   */
  readonly name: string;

}

/**
 * @schema MwaaCreateCliTokenResponse
 */
export interface MwaaCreateCliTokenResponse {
  /**
   * @schema MwaaCreateCliTokenResponse#CliToken
   */
  readonly cliToken?: string;

  /**
   * @schema MwaaCreateCliTokenResponse#WebServerHostname
   */
  readonly webServerHostname?: string;

}

/**
 * @schema MwaaCreateEnvironmentInput
 */
export interface MwaaCreateEnvironmentInput {
  /**
   * @schema MwaaCreateEnvironmentInput#AirflowConfigurationOptions
   */
  readonly airflowConfigurationOptions?: { [key: string]: string };

  /**
   * @schema MwaaCreateEnvironmentInput#AirflowVersion
   */
  readonly airflowVersion?: string;

  /**
   * @schema MwaaCreateEnvironmentInput#DagS3Path
   */
  readonly dagS3Path: string;

  /**
   * @schema MwaaCreateEnvironmentInput#EnvironmentClass
   */
  readonly environmentClass?: string;

  /**
   * @schema MwaaCreateEnvironmentInput#ExecutionRoleArn
   */
  readonly executionRoleArn: string;

  /**
   * @schema MwaaCreateEnvironmentInput#KmsKey
   */
  readonly kmsKey?: string;

  /**
   * @schema MwaaCreateEnvironmentInput#LoggingConfiguration
   */
  readonly loggingConfiguration?: MwaaLoggingConfigurationInput;

  /**
   * @schema MwaaCreateEnvironmentInput#MaxWorkers
   */
  readonly maxWorkers?: number;

  /**
   * @schema MwaaCreateEnvironmentInput#Name
   */
  readonly name: string;

  /**
   * @schema MwaaCreateEnvironmentInput#NetworkConfiguration
   */
  readonly networkConfiguration: MwaaNetworkConfiguration;

  /**
   * @schema MwaaCreateEnvironmentInput#PluginsS3ObjectVersion
   */
  readonly pluginsS3ObjectVersion?: string;

  /**
   * @schema MwaaCreateEnvironmentInput#PluginsS3Path
   */
  readonly pluginsS3Path?: string;

  /**
   * @schema MwaaCreateEnvironmentInput#RequirementsS3ObjectVersion
   */
  readonly requirementsS3ObjectVersion?: string;

  /**
   * @schema MwaaCreateEnvironmentInput#RequirementsS3Path
   */
  readonly requirementsS3Path?: string;

  /**
   * @schema MwaaCreateEnvironmentInput#SourceBucketArn
   */
  readonly sourceBucketArn: string;

  /**
   * @schema MwaaCreateEnvironmentInput#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema MwaaCreateEnvironmentInput#WebserverAccessMode
   */
  readonly webserverAccessMode?: string;

  /**
   * @schema MwaaCreateEnvironmentInput#WeeklyMaintenanceWindowStart
   */
  readonly weeklyMaintenanceWindowStart?: string;

}

/**
 * @schema MwaaCreateEnvironmentOutput
 */
export interface MwaaCreateEnvironmentOutput {
  /**
   * @schema MwaaCreateEnvironmentOutput#Arn
   */
  readonly arn?: string;

}

/**
 * @schema MwaaCreateWebLoginTokenRequest
 */
export interface MwaaCreateWebLoginTokenRequest {
  /**
   * @schema MwaaCreateWebLoginTokenRequest#Name
   */
  readonly name: string;

}

/**
 * @schema MwaaCreateWebLoginTokenResponse
 */
export interface MwaaCreateWebLoginTokenResponse {
  /**
   * @schema MwaaCreateWebLoginTokenResponse#WebServerHostname
   */
  readonly webServerHostname?: string;

  /**
   * @schema MwaaCreateWebLoginTokenResponse#WebToken
   */
  readonly webToken?: string;

}

/**
 * @schema MwaaDeleteEnvironmentInput
 */
export interface MwaaDeleteEnvironmentInput {
  /**
   * @schema MwaaDeleteEnvironmentInput#Name
   */
  readonly name: string;

}

/**
 * @schema MwaaDeleteEnvironmentOutput
 */
export interface MwaaDeleteEnvironmentOutput {
}

/**
 * @schema MwaaGetEnvironmentInput
 */
export interface MwaaGetEnvironmentInput {
  /**
   * @schema MwaaGetEnvironmentInput#Name
   */
  readonly name: string;

}

/**
 * @schema MwaaGetEnvironmentOutput
 */
export interface MwaaGetEnvironmentOutput {
  /**
   * @schema MwaaGetEnvironmentOutput#Environment
   */
  readonly environment?: MwaaEnvironment;

}

/**
 * @schema MwaaListEnvironmentsInput
 */
export interface MwaaListEnvironmentsInput {
  /**
   * @schema MwaaListEnvironmentsInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MwaaListEnvironmentsInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MwaaListEnvironmentsOutput
 */
export interface MwaaListEnvironmentsOutput {
  /**
   * @schema MwaaListEnvironmentsOutput#Environments
   */
  readonly environments: string[];

  /**
   * @schema MwaaListEnvironmentsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MwaaListTagsForResourceInput
 */
export interface MwaaListTagsForResourceInput {
  /**
   * @schema MwaaListTagsForResourceInput#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema MwaaListTagsForResourceOutput
 */
export interface MwaaListTagsForResourceOutput {
  /**
   * @schema MwaaListTagsForResourceOutput#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema MwaaPublishMetricsInput
 */
export interface MwaaPublishMetricsInput {
  /**
   * @schema MwaaPublishMetricsInput#EnvironmentName
   */
  readonly environmentName: string;

  /**
   * @schema MwaaPublishMetricsInput#MetricData
   */
  readonly metricData: MwaaMetricDatum[];

}

/**
 * @schema MwaaPublishMetricsOutput
 */
export interface MwaaPublishMetricsOutput {
}

/**
 * @schema MwaaTagResourceInput
 */
export interface MwaaTagResourceInput {
  /**
   * @schema MwaaTagResourceInput#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema MwaaTagResourceInput#Tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema MwaaTagResourceOutput
 */
export interface MwaaTagResourceOutput {
}

/**
 * @schema MwaaUntagResourceInput
 */
export interface MwaaUntagResourceInput {
  /**
   * @schema MwaaUntagResourceInput#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema MwaaUntagResourceInput#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema MwaaUntagResourceOutput
 */
export interface MwaaUntagResourceOutput {
}

/**
 * @schema MwaaUpdateEnvironmentInput
 */
export interface MwaaUpdateEnvironmentInput {
  /**
   * @schema MwaaUpdateEnvironmentInput#AirflowConfigurationOptions
   */
  readonly airflowConfigurationOptions?: { [key: string]: string };

  /**
   * @schema MwaaUpdateEnvironmentInput#AirflowVersion
   */
  readonly airflowVersion?: string;

  /**
   * @schema MwaaUpdateEnvironmentInput#DagS3Path
   */
  readonly dagS3Path?: string;

  /**
   * @schema MwaaUpdateEnvironmentInput#EnvironmentClass
   */
  readonly environmentClass?: string;

  /**
   * @schema MwaaUpdateEnvironmentInput#ExecutionRoleArn
   */
  readonly executionRoleArn?: string;

  /**
   * @schema MwaaUpdateEnvironmentInput#LoggingConfiguration
   */
  readonly loggingConfiguration?: MwaaLoggingConfigurationInput;

  /**
   * @schema MwaaUpdateEnvironmentInput#MaxWorkers
   */
  readonly maxWorkers?: number;

  /**
   * @schema MwaaUpdateEnvironmentInput#Name
   */
  readonly name: string;

  /**
   * @schema MwaaUpdateEnvironmentInput#NetworkConfiguration
   */
  readonly networkConfiguration?: MwaaUpdateNetworkConfigurationInput;

  /**
   * @schema MwaaUpdateEnvironmentInput#PluginsS3ObjectVersion
   */
  readonly pluginsS3ObjectVersion?: string;

  /**
   * @schema MwaaUpdateEnvironmentInput#PluginsS3Path
   */
  readonly pluginsS3Path?: string;

  /**
   * @schema MwaaUpdateEnvironmentInput#RequirementsS3ObjectVersion
   */
  readonly requirementsS3ObjectVersion?: string;

  /**
   * @schema MwaaUpdateEnvironmentInput#RequirementsS3Path
   */
  readonly requirementsS3Path?: string;

  /**
   * @schema MwaaUpdateEnvironmentInput#SourceBucketArn
   */
  readonly sourceBucketArn?: string;

  /**
   * @schema MwaaUpdateEnvironmentInput#WebserverAccessMode
   */
  readonly webserverAccessMode?: string;

  /**
   * @schema MwaaUpdateEnvironmentInput#WeeklyMaintenanceWindowStart
   */
  readonly weeklyMaintenanceWindowStart?: string;

}

/**
 * @schema MwaaUpdateEnvironmentOutput
 */
export interface MwaaUpdateEnvironmentOutput {
  /**
   * @schema MwaaUpdateEnvironmentOutput#Arn
   */
  readonly arn?: string;

}

/**
 * @schema MwaaLoggingConfigurationInput
 */
export interface MwaaLoggingConfigurationInput {
  /**
   * @schema MwaaLoggingConfigurationInput#DagProcessingLogs
   */
  readonly dagProcessingLogs?: MwaaModuleLoggingConfigurationInput;

  /**
   * @schema MwaaLoggingConfigurationInput#SchedulerLogs
   */
  readonly schedulerLogs?: MwaaModuleLoggingConfigurationInput;

  /**
   * @schema MwaaLoggingConfigurationInput#TaskLogs
   */
  readonly taskLogs?: MwaaModuleLoggingConfigurationInput;

  /**
   * @schema MwaaLoggingConfigurationInput#WebserverLogs
   */
  readonly webserverLogs?: MwaaModuleLoggingConfigurationInput;

  /**
   * @schema MwaaLoggingConfigurationInput#WorkerLogs
   */
  readonly workerLogs?: MwaaModuleLoggingConfigurationInput;

}

/**
 * @schema MwaaNetworkConfiguration
 */
export interface MwaaNetworkConfiguration {
  /**
   * @schema MwaaNetworkConfiguration#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema MwaaNetworkConfiguration#SubnetIds
   */
  readonly subnetIds?: string[];

}

/**
 * @schema MwaaEnvironment
 */
export interface MwaaEnvironment {
  /**
   * @schema MwaaEnvironment#AirflowConfigurationOptions
   */
  readonly airflowConfigurationOptions?: { [key: string]: string };

  /**
   * @schema MwaaEnvironment#AirflowVersion
   */
  readonly airflowVersion?: string;

  /**
   * @schema MwaaEnvironment#Arn
   */
  readonly arn?: string;

  /**
   * @schema MwaaEnvironment#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema MwaaEnvironment#DagS3Path
   */
  readonly dagS3Path?: string;

  /**
   * @schema MwaaEnvironment#EnvironmentClass
   */
  readonly environmentClass?: string;

  /**
   * @schema MwaaEnvironment#ExecutionRoleArn
   */
  readonly executionRoleArn?: string;

  /**
   * @schema MwaaEnvironment#KmsKey
   */
  readonly kmsKey?: string;

  /**
   * @schema MwaaEnvironment#LastUpdate
   */
  readonly lastUpdate?: MwaaLastUpdate;

  /**
   * @schema MwaaEnvironment#LoggingConfiguration
   */
  readonly loggingConfiguration?: MwaaLoggingConfiguration;

  /**
   * @schema MwaaEnvironment#MaxWorkers
   */
  readonly maxWorkers?: number;

  /**
   * @schema MwaaEnvironment#Name
   */
  readonly name?: string;

  /**
   * @schema MwaaEnvironment#NetworkConfiguration
   */
  readonly networkConfiguration?: MwaaNetworkConfiguration;

  /**
   * @schema MwaaEnvironment#PluginsS3ObjectVersion
   */
  readonly pluginsS3ObjectVersion?: string;

  /**
   * @schema MwaaEnvironment#PluginsS3Path
   */
  readonly pluginsS3Path?: string;

  /**
   * @schema MwaaEnvironment#RequirementsS3ObjectVersion
   */
  readonly requirementsS3ObjectVersion?: string;

  /**
   * @schema MwaaEnvironment#RequirementsS3Path
   */
  readonly requirementsS3Path?: string;

  /**
   * @schema MwaaEnvironment#ServiceRoleArn
   */
  readonly serviceRoleArn?: string;

  /**
   * @schema MwaaEnvironment#SourceBucketArn
   */
  readonly sourceBucketArn?: string;

  /**
   * @schema MwaaEnvironment#Status
   */
  readonly status?: string;

  /**
   * @schema MwaaEnvironment#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema MwaaEnvironment#WebserverAccessMode
   */
  readonly webserverAccessMode?: string;

  /**
   * @schema MwaaEnvironment#WebserverUrl
   */
  readonly webserverUrl?: string;

  /**
   * @schema MwaaEnvironment#WeeklyMaintenanceWindowStart
   */
  readonly weeklyMaintenanceWindowStart?: string;

}

/**
 * @schema MwaaMetricDatum
 */
export interface MwaaMetricDatum {
  /**
   * @schema MwaaMetricDatum#Dimensions
   */
  readonly dimensions?: MwaaDimension[];

  /**
   * @schema MwaaMetricDatum#MetricName
   */
  readonly metricName: string;

  /**
   * @schema MwaaMetricDatum#StatisticValues
   */
  readonly statisticValues?: MwaaStatisticSet;

  /**
   * @schema MwaaMetricDatum#Timestamp
   */
  readonly timestamp: string;

  /**
   * @schema MwaaMetricDatum#Unit
   */
  readonly unit?: string;

  /**
   * @schema MwaaMetricDatum#Value
   */
  readonly value?: number;

}

/**
 * @schema MwaaUpdateNetworkConfigurationInput
 */
export interface MwaaUpdateNetworkConfigurationInput {
  /**
   * @schema MwaaUpdateNetworkConfigurationInput#SecurityGroupIds
   */
  readonly securityGroupIds: string[];

}

/**
 * @schema MwaaModuleLoggingConfigurationInput
 */
export interface MwaaModuleLoggingConfigurationInput {
  /**
   * @schema MwaaModuleLoggingConfigurationInput#Enabled
   */
  readonly enabled: boolean;

  /**
   * @schema MwaaModuleLoggingConfigurationInput#LogLevel
   */
  readonly logLevel: string;

}

/**
 * @schema MwaaLastUpdate
 */
export interface MwaaLastUpdate {
  /**
   * @schema MwaaLastUpdate#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema MwaaLastUpdate#Error
   */
  readonly error?: MwaaUpdateError;

  /**
   * @schema MwaaLastUpdate#Status
   */
  readonly status?: string;

}

/**
 * @schema MwaaLoggingConfiguration
 */
export interface MwaaLoggingConfiguration {
  /**
   * @schema MwaaLoggingConfiguration#DagProcessingLogs
   */
  readonly dagProcessingLogs?: MwaaModuleLoggingConfiguration;

  /**
   * @schema MwaaLoggingConfiguration#SchedulerLogs
   */
  readonly schedulerLogs?: MwaaModuleLoggingConfiguration;

  /**
   * @schema MwaaLoggingConfiguration#TaskLogs
   */
  readonly taskLogs?: MwaaModuleLoggingConfiguration;

  /**
   * @schema MwaaLoggingConfiguration#WebserverLogs
   */
  readonly webserverLogs?: MwaaModuleLoggingConfiguration;

  /**
   * @schema MwaaLoggingConfiguration#WorkerLogs
   */
  readonly workerLogs?: MwaaModuleLoggingConfiguration;

}

/**
 * @schema MwaaDimension
 */
export interface MwaaDimension {
  /**
   * @schema MwaaDimension#Name
   */
  readonly name: string;

  /**
   * @schema MwaaDimension#Value
   */
  readonly value: string;

}

/**
 * @schema MwaaStatisticSet
 */
export interface MwaaStatisticSet {
  /**
   * @schema MwaaStatisticSet#Maximum
   */
  readonly maximum?: number;

  /**
   * @schema MwaaStatisticSet#Minimum
   */
  readonly minimum?: number;

  /**
   * @schema MwaaStatisticSet#SampleCount
   */
  readonly sampleCount?: number;

  /**
   * @schema MwaaStatisticSet#Sum
   */
  readonly sum?: number;

}

/**
 * @schema MwaaUpdateError
 */
export interface MwaaUpdateError {
  /**
   * @schema MwaaUpdateError#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema MwaaUpdateError#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema MwaaModuleLoggingConfiguration
 */
export interface MwaaModuleLoggingConfiguration {
  /**
   * @schema MwaaModuleLoggingConfiguration#CloudWatchLogGroupArn
   */
  readonly cloudWatchLogGroupArn?: string;

  /**
   * @schema MwaaModuleLoggingConfiguration#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema MwaaModuleLoggingConfiguration#LogLevel
   */
  readonly logLevel?: string;

}
