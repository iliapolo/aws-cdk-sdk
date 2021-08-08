/**
 * @schema MwaaCreateCliTokenRequest
 */
export interface MwaaCreateCliTokenRequest {
  /**
   * @schema MwaaCreateCliTokenRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'MwaaCreateCliTokenRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MwaaCreateCliTokenRequest(obj: MwaaCreateCliTokenRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MwaaCreateCliTokenResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MwaaCreateCliTokenResponse(obj: MwaaCreateCliTokenResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CliToken': obj.cliToken,
    'WebServerHostname': obj.webServerHostname,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly dagS3Path?: string;

  /**
   * @schema MwaaCreateEnvironmentInput#EnvironmentClass
   */
  readonly environmentClass?: string;

  /**
   * @schema MwaaCreateEnvironmentInput#ExecutionRoleArn
   */
  readonly executionRoleArn?: string;

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
   * @schema MwaaCreateEnvironmentInput#MinWorkers
   */
  readonly minWorkers?: number;

  /**
   * @schema MwaaCreateEnvironmentInput#Name
   */
  readonly name?: string;

  /**
   * @schema MwaaCreateEnvironmentInput#NetworkConfiguration
   */
  readonly networkConfiguration?: MwaaNetworkConfiguration;

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
   * @schema MwaaCreateEnvironmentInput#Schedulers
   */
  readonly schedulers?: number;

  /**
   * @schema MwaaCreateEnvironmentInput#SourceBucketArn
   */
  readonly sourceBucketArn?: string;

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
 * Converts an object of type 'MwaaCreateEnvironmentInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MwaaCreateEnvironmentInput(obj: MwaaCreateEnvironmentInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AirflowConfigurationOptions': ((obj.airflowConfigurationOptions) === undefined) ? undefined : (Object.entries(obj.airflowConfigurationOptions).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'AirflowVersion': obj.airflowVersion,
    'DagS3Path': obj.dagS3Path,
    'EnvironmentClass': obj.environmentClass,
    'ExecutionRoleArn': obj.executionRoleArn,
    'KmsKey': obj.kmsKey,
    'LoggingConfiguration': toJson_MwaaLoggingConfigurationInput(obj.loggingConfiguration),
    'MaxWorkers': obj.maxWorkers,
    'MinWorkers': obj.minWorkers,
    'Name': obj.name,
    'NetworkConfiguration': toJson_MwaaNetworkConfiguration(obj.networkConfiguration),
    'PluginsS3ObjectVersion': obj.pluginsS3ObjectVersion,
    'PluginsS3Path': obj.pluginsS3Path,
    'RequirementsS3ObjectVersion': obj.requirementsS3ObjectVersion,
    'RequirementsS3Path': obj.requirementsS3Path,
    'Schedulers': obj.schedulers,
    'SourceBucketArn': obj.sourceBucketArn,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'WebserverAccessMode': obj.webserverAccessMode,
    'WeeklyMaintenanceWindowStart': obj.weeklyMaintenanceWindowStart,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MwaaCreateEnvironmentOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MwaaCreateEnvironmentOutput(obj: MwaaCreateEnvironmentOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MwaaCreateWebLoginTokenRequest
 */
export interface MwaaCreateWebLoginTokenRequest {
  /**
   * @schema MwaaCreateWebLoginTokenRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'MwaaCreateWebLoginTokenRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MwaaCreateWebLoginTokenRequest(obj: MwaaCreateWebLoginTokenRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MwaaCreateWebLoginTokenResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MwaaCreateWebLoginTokenResponse(obj: MwaaCreateWebLoginTokenResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WebServerHostname': obj.webServerHostname,
    'WebToken': obj.webToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MwaaDeleteEnvironmentInput
 */
export interface MwaaDeleteEnvironmentInput {
  /**
   * @schema MwaaDeleteEnvironmentInput#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'MwaaDeleteEnvironmentInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MwaaDeleteEnvironmentInput(obj: MwaaDeleteEnvironmentInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MwaaDeleteEnvironmentOutput
 */
export interface MwaaDeleteEnvironmentOutput {
}

/**
 * Converts an object of type 'MwaaDeleteEnvironmentOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MwaaDeleteEnvironmentOutput(obj: MwaaDeleteEnvironmentOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MwaaGetEnvironmentInput
 */
export interface MwaaGetEnvironmentInput {
  /**
   * @schema MwaaGetEnvironmentInput#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'MwaaGetEnvironmentInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MwaaGetEnvironmentInput(obj: MwaaGetEnvironmentInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MwaaGetEnvironmentOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MwaaGetEnvironmentOutput(obj: MwaaGetEnvironmentOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Environment': toJson_MwaaEnvironment(obj.environment),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MwaaListEnvironmentsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MwaaListEnvironmentsInput(obj: MwaaListEnvironmentsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MwaaListEnvironmentsOutput
 */
export interface MwaaListEnvironmentsOutput {
  /**
   * @schema MwaaListEnvironmentsOutput#Environments
   */
  readonly environments?: string[];

  /**
   * @schema MwaaListEnvironmentsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MwaaListEnvironmentsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MwaaListEnvironmentsOutput(obj: MwaaListEnvironmentsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Environments': obj.environments?.map(y => y),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MwaaListTagsForResourceInput
 */
export interface MwaaListTagsForResourceInput {
  /**
   * @schema MwaaListTagsForResourceInput#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'MwaaListTagsForResourceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MwaaListTagsForResourceInput(obj: MwaaListTagsForResourceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MwaaListTagsForResourceOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MwaaListTagsForResourceOutput(obj: MwaaListTagsForResourceOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MwaaPublishMetricsInput
 */
export interface MwaaPublishMetricsInput {
  /**
   * @schema MwaaPublishMetricsInput#EnvironmentName
   */
  readonly environmentName?: string;

  /**
   * @schema MwaaPublishMetricsInput#MetricData
   */
  readonly metricData?: MwaaMetricDatum[];

}

/**
 * Converts an object of type 'MwaaPublishMetricsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MwaaPublishMetricsInput(obj: MwaaPublishMetricsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EnvironmentName': obj.environmentName,
    'MetricData': obj.metricData?.map(y => toJson_MwaaMetricDatum(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MwaaPublishMetricsOutput
 */
export interface MwaaPublishMetricsOutput {
}

/**
 * Converts an object of type 'MwaaPublishMetricsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MwaaPublishMetricsOutput(obj: MwaaPublishMetricsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MwaaTagResourceInput
 */
export interface MwaaTagResourceInput {
  /**
   * @schema MwaaTagResourceInput#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema MwaaTagResourceInput#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'MwaaTagResourceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MwaaTagResourceInput(obj: MwaaTagResourceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MwaaTagResourceOutput
 */
export interface MwaaTagResourceOutput {
}

/**
 * Converts an object of type 'MwaaTagResourceOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MwaaTagResourceOutput(obj: MwaaTagResourceOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MwaaUntagResourceInput
 */
export interface MwaaUntagResourceInput {
  /**
   * @schema MwaaUntagResourceInput#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema MwaaUntagResourceInput#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * Converts an object of type 'MwaaUntagResourceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MwaaUntagResourceInput(obj: MwaaUntagResourceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'tagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MwaaUntagResourceOutput
 */
export interface MwaaUntagResourceOutput {
}

/**
 * Converts an object of type 'MwaaUntagResourceOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MwaaUntagResourceOutput(obj: MwaaUntagResourceOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
   * @schema MwaaUpdateEnvironmentInput#MinWorkers
   */
  readonly minWorkers?: number;

  /**
   * @schema MwaaUpdateEnvironmentInput#Name
   */
  readonly name?: string;

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
   * @schema MwaaUpdateEnvironmentInput#Schedulers
   */
  readonly schedulers?: number;

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
 * Converts an object of type 'MwaaUpdateEnvironmentInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MwaaUpdateEnvironmentInput(obj: MwaaUpdateEnvironmentInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AirflowConfigurationOptions': ((obj.airflowConfigurationOptions) === undefined) ? undefined : (Object.entries(obj.airflowConfigurationOptions).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'AirflowVersion': obj.airflowVersion,
    'DagS3Path': obj.dagS3Path,
    'EnvironmentClass': obj.environmentClass,
    'ExecutionRoleArn': obj.executionRoleArn,
    'LoggingConfiguration': toJson_MwaaLoggingConfigurationInput(obj.loggingConfiguration),
    'MaxWorkers': obj.maxWorkers,
    'MinWorkers': obj.minWorkers,
    'Name': obj.name,
    'NetworkConfiguration': toJson_MwaaUpdateNetworkConfigurationInput(obj.networkConfiguration),
    'PluginsS3ObjectVersion': obj.pluginsS3ObjectVersion,
    'PluginsS3Path': obj.pluginsS3Path,
    'RequirementsS3ObjectVersion': obj.requirementsS3ObjectVersion,
    'RequirementsS3Path': obj.requirementsS3Path,
    'Schedulers': obj.schedulers,
    'SourceBucketArn': obj.sourceBucketArn,
    'WebserverAccessMode': obj.webserverAccessMode,
    'WeeklyMaintenanceWindowStart': obj.weeklyMaintenanceWindowStart,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MwaaUpdateEnvironmentOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MwaaUpdateEnvironmentOutput(obj: MwaaUpdateEnvironmentOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MwaaLoggingConfigurationInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MwaaLoggingConfigurationInput(obj: MwaaLoggingConfigurationInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DagProcessingLogs': toJson_MwaaModuleLoggingConfigurationInput(obj.dagProcessingLogs),
    'SchedulerLogs': toJson_MwaaModuleLoggingConfigurationInput(obj.schedulerLogs),
    'TaskLogs': toJson_MwaaModuleLoggingConfigurationInput(obj.taskLogs),
    'WebserverLogs': toJson_MwaaModuleLoggingConfigurationInput(obj.webserverLogs),
    'WorkerLogs': toJson_MwaaModuleLoggingConfigurationInput(obj.workerLogs),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MwaaNetworkConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MwaaNetworkConfiguration(obj: MwaaNetworkConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SecurityGroupIds': obj.securityGroupIds?.map(y => y),
    'SubnetIds': obj.subnetIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
   * @schema MwaaEnvironment#MinWorkers
   */
  readonly minWorkers?: number;

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
   * @schema MwaaEnvironment#Schedulers
   */
  readonly schedulers?: number;

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
 * Converts an object of type 'MwaaEnvironment' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MwaaEnvironment(obj: MwaaEnvironment | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AirflowConfigurationOptions': ((obj.airflowConfigurationOptions) === undefined) ? undefined : (Object.entries(obj.airflowConfigurationOptions).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'AirflowVersion': obj.airflowVersion,
    'Arn': obj.arn,
    'CreatedAt': obj.createdAt,
    'DagS3Path': obj.dagS3Path,
    'EnvironmentClass': obj.environmentClass,
    'ExecutionRoleArn': obj.executionRoleArn,
    'KmsKey': obj.kmsKey,
    'LastUpdate': toJson_MwaaLastUpdate(obj.lastUpdate),
    'LoggingConfiguration': toJson_MwaaLoggingConfiguration(obj.loggingConfiguration),
    'MaxWorkers': obj.maxWorkers,
    'MinWorkers': obj.minWorkers,
    'Name': obj.name,
    'NetworkConfiguration': toJson_MwaaNetworkConfiguration(obj.networkConfiguration),
    'PluginsS3ObjectVersion': obj.pluginsS3ObjectVersion,
    'PluginsS3Path': obj.pluginsS3Path,
    'RequirementsS3ObjectVersion': obj.requirementsS3ObjectVersion,
    'RequirementsS3Path': obj.requirementsS3Path,
    'Schedulers': obj.schedulers,
    'ServiceRoleArn': obj.serviceRoleArn,
    'SourceBucketArn': obj.sourceBucketArn,
    'Status': obj.status,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'WebserverAccessMode': obj.webserverAccessMode,
    'WebserverUrl': obj.webserverUrl,
    'WeeklyMaintenanceWindowStart': obj.weeklyMaintenanceWindowStart,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly metricName?: string;

  /**
   * @schema MwaaMetricDatum#StatisticValues
   */
  readonly statisticValues?: MwaaStatisticSet;

  /**
   * @schema MwaaMetricDatum#Timestamp
   */
  readonly timestamp?: string;

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
 * Converts an object of type 'MwaaMetricDatum' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MwaaMetricDatum(obj: MwaaMetricDatum | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Dimensions': obj.dimensions?.map(y => toJson_MwaaDimension(y)),
    'MetricName': obj.metricName,
    'StatisticValues': toJson_MwaaStatisticSet(obj.statisticValues),
    'Timestamp': obj.timestamp,
    'Unit': obj.unit,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MwaaUpdateNetworkConfigurationInput
 */
export interface MwaaUpdateNetworkConfigurationInput {
  /**
   * @schema MwaaUpdateNetworkConfigurationInput#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

}

/**
 * Converts an object of type 'MwaaUpdateNetworkConfigurationInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MwaaUpdateNetworkConfigurationInput(obj: MwaaUpdateNetworkConfigurationInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SecurityGroupIds': obj.securityGroupIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MwaaModuleLoggingConfigurationInput
 */
export interface MwaaModuleLoggingConfigurationInput {
  /**
   * @schema MwaaModuleLoggingConfigurationInput#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema MwaaModuleLoggingConfigurationInput#LogLevel
   */
  readonly logLevel?: string;

}

/**
 * Converts an object of type 'MwaaModuleLoggingConfigurationInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MwaaModuleLoggingConfigurationInput(obj: MwaaModuleLoggingConfigurationInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Enabled': obj.enabled,
    'LogLevel': obj.logLevel,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MwaaLastUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MwaaLastUpdate(obj: MwaaLastUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CreatedAt': obj.createdAt,
    'Error': toJson_MwaaUpdateError(obj.error),
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MwaaLoggingConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MwaaLoggingConfiguration(obj: MwaaLoggingConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DagProcessingLogs': toJson_MwaaModuleLoggingConfiguration(obj.dagProcessingLogs),
    'SchedulerLogs': toJson_MwaaModuleLoggingConfiguration(obj.schedulerLogs),
    'TaskLogs': toJson_MwaaModuleLoggingConfiguration(obj.taskLogs),
    'WebserverLogs': toJson_MwaaModuleLoggingConfiguration(obj.webserverLogs),
    'WorkerLogs': toJson_MwaaModuleLoggingConfiguration(obj.workerLogs),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MwaaDimension
 */
export interface MwaaDimension {
  /**
   * @schema MwaaDimension#Name
   */
  readonly name?: string;

  /**
   * @schema MwaaDimension#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'MwaaDimension' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MwaaDimension(obj: MwaaDimension | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MwaaStatisticSet' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MwaaStatisticSet(obj: MwaaStatisticSet | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Maximum': obj.maximum,
    'Minimum': obj.minimum,
    'SampleCount': obj.sampleCount,
    'Sum': obj.sum,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MwaaUpdateError' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MwaaUpdateError(obj: MwaaUpdateError | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ErrorCode': obj.errorCode,
    'ErrorMessage': obj.errorMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

/**
 * Converts an object of type 'MwaaModuleLoggingConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MwaaModuleLoggingConfiguration(obj: MwaaModuleLoggingConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CloudWatchLogGroupArn': obj.cloudWatchLogGroupArn,
    'Enabled': obj.enabled,
    'LogLevel': obj.logLevel,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
