/**
 * @schema AppConfigCreateApplicationRequest
 */
export interface AppConfigCreateApplicationRequest {
  /**
   * @schema AppConfigCreateApplicationRequest#Name
   */
  readonly name?: string;

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
 * Converts an object of type 'AppConfigCreateApplicationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppConfigCreateApplicationRequest(obj: AppConfigCreateApplicationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Description': obj.description,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AppConfigApplication' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppConfigApplication(obj: AppConfigApplication | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Name': obj.name,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppConfigCreateConfigurationProfileRequest
 */
export interface AppConfigCreateConfigurationProfileRequest {
  /**
   * @schema AppConfigCreateConfigurationProfileRequest#ApplicationId
   */
  readonly applicationId?: string;

  /**
   * @schema AppConfigCreateConfigurationProfileRequest#Name
   */
  readonly name?: string;

  /**
   * @schema AppConfigCreateConfigurationProfileRequest#Description
   */
  readonly description?: string;

  /**
   * @schema AppConfigCreateConfigurationProfileRequest#LocationUri
   */
  readonly locationUri?: string;

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
 * Converts an object of type 'AppConfigCreateConfigurationProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppConfigCreateConfigurationProfileRequest(obj: AppConfigCreateConfigurationProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationId': obj.applicationId,
    'Name': obj.name,
    'Description': obj.description,
    'LocationUri': obj.locationUri,
    'RetrievalRoleArn': obj.retrievalRoleArn,
    'Validators': obj.validators?.map(y => toJson_AppConfigValidator(y)),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AppConfigConfigurationProfile' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppConfigConfigurationProfile(obj: AppConfigConfigurationProfile | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationId': obj.applicationId,
    'Id': obj.id,
    'Name': obj.name,
    'Description': obj.description,
    'LocationUri': obj.locationUri,
    'RetrievalRoleArn': obj.retrievalRoleArn,
    'Validators': obj.validators?.map(y => toJson_AppConfigValidator(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppConfigCreateDeploymentStrategyRequest
 */
export interface AppConfigCreateDeploymentStrategyRequest {
  /**
   * @schema AppConfigCreateDeploymentStrategyRequest#Name
   */
  readonly name?: string;

  /**
   * @schema AppConfigCreateDeploymentStrategyRequest#Description
   */
  readonly description?: string;

  /**
   * @schema AppConfigCreateDeploymentStrategyRequest#DeploymentDurationInMinutes
   */
  readonly deploymentDurationInMinutes?: number;

  /**
   * @schema AppConfigCreateDeploymentStrategyRequest#FinalBakeTimeInMinutes
   */
  readonly finalBakeTimeInMinutes?: number;

  /**
   * @schema AppConfigCreateDeploymentStrategyRequest#GrowthFactor
   */
  readonly growthFactor?: number;

  /**
   * @schema AppConfigCreateDeploymentStrategyRequest#GrowthType
   */
  readonly growthType?: string;

  /**
   * @schema AppConfigCreateDeploymentStrategyRequest#ReplicateTo
   */
  readonly replicateTo?: string;

  /**
   * @schema AppConfigCreateDeploymentStrategyRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'AppConfigCreateDeploymentStrategyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppConfigCreateDeploymentStrategyRequest(obj: AppConfigCreateDeploymentStrategyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Description': obj.description,
    'DeploymentDurationInMinutes': obj.deploymentDurationInMinutes,
    'FinalBakeTimeInMinutes': obj.finalBakeTimeInMinutes,
    'GrowthFactor': obj.growthFactor,
    'GrowthType': obj.growthType,
    'ReplicateTo': obj.replicateTo,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AppConfigDeploymentStrategy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppConfigDeploymentStrategy(obj: AppConfigDeploymentStrategy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Name': obj.name,
    'Description': obj.description,
    'DeploymentDurationInMinutes': obj.deploymentDurationInMinutes,
    'GrowthType': obj.growthType,
    'GrowthFactor': obj.growthFactor,
    'FinalBakeTimeInMinutes': obj.finalBakeTimeInMinutes,
    'ReplicateTo': obj.replicateTo,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppConfigCreateEnvironmentRequest
 */
export interface AppConfigCreateEnvironmentRequest {
  /**
   * @schema AppConfigCreateEnvironmentRequest#ApplicationId
   */
  readonly applicationId?: string;

  /**
   * @schema AppConfigCreateEnvironmentRequest#Name
   */
  readonly name?: string;

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
 * Converts an object of type 'AppConfigCreateEnvironmentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppConfigCreateEnvironmentRequest(obj: AppConfigCreateEnvironmentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationId': obj.applicationId,
    'Name': obj.name,
    'Description': obj.description,
    'Monitors': obj.monitors?.map(y => toJson_AppConfigMonitor(y)),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AppConfigEnvironment' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppConfigEnvironment(obj: AppConfigEnvironment | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationId': obj.applicationId,
    'Id': obj.id,
    'Name': obj.name,
    'Description': obj.description,
    'State': obj.state,
    'Monitors': obj.monitors?.map(y => toJson_AppConfigMonitor(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppConfigCreateHostedConfigurationVersionRequest
 */
export interface AppConfigCreateHostedConfigurationVersionRequest {
  /**
   * @schema AppConfigCreateHostedConfigurationVersionRequest#ApplicationId
   */
  readonly applicationId?: string;

  /**
   * @schema AppConfigCreateHostedConfigurationVersionRequest#ConfigurationProfileId
   */
  readonly configurationProfileId?: string;

  /**
   * @schema AppConfigCreateHostedConfigurationVersionRequest#Description
   */
  readonly description?: string;

  /**
   * @schema AppConfigCreateHostedConfigurationVersionRequest#Content
   */
  readonly content?: any;

  /**
   * @schema AppConfigCreateHostedConfigurationVersionRequest#ContentType
   */
  readonly contentType?: string;

  /**
   * @schema AppConfigCreateHostedConfigurationVersionRequest#LatestVersionNumber
   */
  readonly latestVersionNumber?: number;

}

/**
 * Converts an object of type 'AppConfigCreateHostedConfigurationVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppConfigCreateHostedConfigurationVersionRequest(obj: AppConfigCreateHostedConfigurationVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationId': obj.applicationId,
    'ConfigurationProfileId': obj.configurationProfileId,
    'Description': obj.description,
    'Content': obj.content,
    'ContentType': obj.contentType,
    'LatestVersionNumber': obj.latestVersionNumber,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AppConfigHostedConfigurationVersion' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppConfigHostedConfigurationVersion(obj: AppConfigHostedConfigurationVersion | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationId': obj.applicationId,
    'ConfigurationProfileId': obj.configurationProfileId,
    'VersionNumber': obj.versionNumber,
    'Description': obj.description,
    'Content': obj.content,
    'ContentType': obj.contentType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppConfigDeleteApplicationRequest
 */
export interface AppConfigDeleteApplicationRequest {
  /**
   * @schema AppConfigDeleteApplicationRequest#ApplicationId
   */
  readonly applicationId?: string;

}

/**
 * Converts an object of type 'AppConfigDeleteApplicationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppConfigDeleteApplicationRequest(obj: AppConfigDeleteApplicationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationId': obj.applicationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppConfigDeleteConfigurationProfileRequest
 */
export interface AppConfigDeleteConfigurationProfileRequest {
  /**
   * @schema AppConfigDeleteConfigurationProfileRequest#ApplicationId
   */
  readonly applicationId?: string;

  /**
   * @schema AppConfigDeleteConfigurationProfileRequest#ConfigurationProfileId
   */
  readonly configurationProfileId?: string;

}

/**
 * Converts an object of type 'AppConfigDeleteConfigurationProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppConfigDeleteConfigurationProfileRequest(obj: AppConfigDeleteConfigurationProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationId': obj.applicationId,
    'ConfigurationProfileId': obj.configurationProfileId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppConfigDeleteDeploymentStrategyRequest
 */
export interface AppConfigDeleteDeploymentStrategyRequest {
  /**
   * @schema AppConfigDeleteDeploymentStrategyRequest#DeploymentStrategyId
   */
  readonly deploymentStrategyId?: string;

}

/**
 * Converts an object of type 'AppConfigDeleteDeploymentStrategyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppConfigDeleteDeploymentStrategyRequest(obj: AppConfigDeleteDeploymentStrategyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeploymentStrategyId': obj.deploymentStrategyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppConfigDeleteEnvironmentRequest
 */
export interface AppConfigDeleteEnvironmentRequest {
  /**
   * @schema AppConfigDeleteEnvironmentRequest#ApplicationId
   */
  readonly applicationId?: string;

  /**
   * @schema AppConfigDeleteEnvironmentRequest#EnvironmentId
   */
  readonly environmentId?: string;

}

/**
 * Converts an object of type 'AppConfigDeleteEnvironmentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppConfigDeleteEnvironmentRequest(obj: AppConfigDeleteEnvironmentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationId': obj.applicationId,
    'EnvironmentId': obj.environmentId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppConfigDeleteHostedConfigurationVersionRequest
 */
export interface AppConfigDeleteHostedConfigurationVersionRequest {
  /**
   * @schema AppConfigDeleteHostedConfigurationVersionRequest#ApplicationId
   */
  readonly applicationId?: string;

  /**
   * @schema AppConfigDeleteHostedConfigurationVersionRequest#ConfigurationProfileId
   */
  readonly configurationProfileId?: string;

  /**
   * @schema AppConfigDeleteHostedConfigurationVersionRequest#VersionNumber
   */
  readonly versionNumber?: number;

}

/**
 * Converts an object of type 'AppConfigDeleteHostedConfigurationVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppConfigDeleteHostedConfigurationVersionRequest(obj: AppConfigDeleteHostedConfigurationVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationId': obj.applicationId,
    'ConfigurationProfileId': obj.configurationProfileId,
    'VersionNumber': obj.versionNumber,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppConfigGetApplicationRequest
 */
export interface AppConfigGetApplicationRequest {
  /**
   * @schema AppConfigGetApplicationRequest#ApplicationId
   */
  readonly applicationId?: string;

}

/**
 * Converts an object of type 'AppConfigGetApplicationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppConfigGetApplicationRequest(obj: AppConfigGetApplicationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationId': obj.applicationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppConfigGetConfigurationRequest
 */
export interface AppConfigGetConfigurationRequest {
  /**
   * @schema AppConfigGetConfigurationRequest#Application
   */
  readonly application?: string;

  /**
   * @schema AppConfigGetConfigurationRequest#Environment
   */
  readonly environment?: string;

  /**
   * @schema AppConfigGetConfigurationRequest#Configuration
   */
  readonly configuration?: string;

  /**
   * @schema AppConfigGetConfigurationRequest#ClientId
   */
  readonly clientId?: string;

  /**
   * @schema AppConfigGetConfigurationRequest#ClientConfigurationVersion
   */
  readonly clientConfigurationVersion?: string;

}

/**
 * Converts an object of type 'AppConfigGetConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppConfigGetConfigurationRequest(obj: AppConfigGetConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Application': obj.application,
    'Environment': obj.environment,
    'Configuration': obj.configuration,
    'ClientId': obj.clientId,
    'ClientConfigurationVersion': obj.clientConfigurationVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AppConfigConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppConfigConfiguration(obj: AppConfigConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Content': obj.content,
    'ConfigurationVersion': obj.configurationVersion,
    'ContentType': obj.contentType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppConfigGetConfigurationProfileRequest
 */
export interface AppConfigGetConfigurationProfileRequest {
  /**
   * @schema AppConfigGetConfigurationProfileRequest#ApplicationId
   */
  readonly applicationId?: string;

  /**
   * @schema AppConfigGetConfigurationProfileRequest#ConfigurationProfileId
   */
  readonly configurationProfileId?: string;

}

/**
 * Converts an object of type 'AppConfigGetConfigurationProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppConfigGetConfigurationProfileRequest(obj: AppConfigGetConfigurationProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationId': obj.applicationId,
    'ConfigurationProfileId': obj.configurationProfileId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppConfigGetDeploymentRequest
 */
export interface AppConfigGetDeploymentRequest {
  /**
   * @schema AppConfigGetDeploymentRequest#ApplicationId
   */
  readonly applicationId?: string;

  /**
   * @schema AppConfigGetDeploymentRequest#EnvironmentId
   */
  readonly environmentId?: string;

  /**
   * @schema AppConfigGetDeploymentRequest#DeploymentNumber
   */
  readonly deploymentNumber?: number;

}

/**
 * Converts an object of type 'AppConfigGetDeploymentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppConfigGetDeploymentRequest(obj: AppConfigGetDeploymentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationId': obj.applicationId,
    'EnvironmentId': obj.environmentId,
    'DeploymentNumber': obj.deploymentNumber,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AppConfigDeployment' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppConfigDeployment(obj: AppConfigDeployment | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationId': obj.applicationId,
    'EnvironmentId': obj.environmentId,
    'DeploymentStrategyId': obj.deploymentStrategyId,
    'ConfigurationProfileId': obj.configurationProfileId,
    'DeploymentNumber': obj.deploymentNumber,
    'ConfigurationName': obj.configurationName,
    'ConfigurationLocationUri': obj.configurationLocationUri,
    'ConfigurationVersion': obj.configurationVersion,
    'Description': obj.description,
    'DeploymentDurationInMinutes': obj.deploymentDurationInMinutes,
    'GrowthType': obj.growthType,
    'GrowthFactor': obj.growthFactor,
    'FinalBakeTimeInMinutes': obj.finalBakeTimeInMinutes,
    'State': obj.state,
    'EventLog': obj.eventLog?.map(y => toJson_AppConfigDeploymentEvent(y)),
    'PercentageComplete': obj.percentageComplete,
    'StartedAt': obj.startedAt,
    'CompletedAt': obj.completedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppConfigGetDeploymentStrategyRequest
 */
export interface AppConfigGetDeploymentStrategyRequest {
  /**
   * @schema AppConfigGetDeploymentStrategyRequest#DeploymentStrategyId
   */
  readonly deploymentStrategyId?: string;

}

/**
 * Converts an object of type 'AppConfigGetDeploymentStrategyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppConfigGetDeploymentStrategyRequest(obj: AppConfigGetDeploymentStrategyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeploymentStrategyId': obj.deploymentStrategyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppConfigGetEnvironmentRequest
 */
export interface AppConfigGetEnvironmentRequest {
  /**
   * @schema AppConfigGetEnvironmentRequest#ApplicationId
   */
  readonly applicationId?: string;

  /**
   * @schema AppConfigGetEnvironmentRequest#EnvironmentId
   */
  readonly environmentId?: string;

}

/**
 * Converts an object of type 'AppConfigGetEnvironmentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppConfigGetEnvironmentRequest(obj: AppConfigGetEnvironmentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationId': obj.applicationId,
    'EnvironmentId': obj.environmentId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppConfigGetHostedConfigurationVersionRequest
 */
export interface AppConfigGetHostedConfigurationVersionRequest {
  /**
   * @schema AppConfigGetHostedConfigurationVersionRequest#ApplicationId
   */
  readonly applicationId?: string;

  /**
   * @schema AppConfigGetHostedConfigurationVersionRequest#ConfigurationProfileId
   */
  readonly configurationProfileId?: string;

  /**
   * @schema AppConfigGetHostedConfigurationVersionRequest#VersionNumber
   */
  readonly versionNumber?: number;

}

/**
 * Converts an object of type 'AppConfigGetHostedConfigurationVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppConfigGetHostedConfigurationVersionRequest(obj: AppConfigGetHostedConfigurationVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationId': obj.applicationId,
    'ConfigurationProfileId': obj.configurationProfileId,
    'VersionNumber': obj.versionNumber,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AppConfigListApplicationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppConfigListApplicationsRequest(obj: AppConfigListApplicationsRequest | undefined): Record<string, any> | undefined {
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
 * Converts an object of type 'AppConfigApplications' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppConfigApplications(obj: AppConfigApplications | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Items': obj.items?.map(y => toJson_AppConfigApplication(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppConfigListConfigurationProfilesRequest
 */
export interface AppConfigListConfigurationProfilesRequest {
  /**
   * @schema AppConfigListConfigurationProfilesRequest#ApplicationId
   */
  readonly applicationId?: string;

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
 * Converts an object of type 'AppConfigListConfigurationProfilesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppConfigListConfigurationProfilesRequest(obj: AppConfigListConfigurationProfilesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationId': obj.applicationId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AppConfigConfigurationProfiles' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppConfigConfigurationProfiles(obj: AppConfigConfigurationProfiles | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Items': obj.items?.map(y => toJson_AppConfigConfigurationProfileSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AppConfigListDeploymentStrategiesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppConfigListDeploymentStrategiesRequest(obj: AppConfigListDeploymentStrategiesRequest | undefined): Record<string, any> | undefined {
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
 * Converts an object of type 'AppConfigDeploymentStrategies' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppConfigDeploymentStrategies(obj: AppConfigDeploymentStrategies | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Items': obj.items?.map(y => toJson_AppConfigDeploymentStrategy(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppConfigListDeploymentsRequest
 */
export interface AppConfigListDeploymentsRequest {
  /**
   * @schema AppConfigListDeploymentsRequest#ApplicationId
   */
  readonly applicationId?: string;

  /**
   * @schema AppConfigListDeploymentsRequest#EnvironmentId
   */
  readonly environmentId?: string;

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
 * Converts an object of type 'AppConfigListDeploymentsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppConfigListDeploymentsRequest(obj: AppConfigListDeploymentsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationId': obj.applicationId,
    'EnvironmentId': obj.environmentId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AppConfigDeployments' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppConfigDeployments(obj: AppConfigDeployments | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Items': obj.items?.map(y => toJson_AppConfigDeploymentSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppConfigListEnvironmentsRequest
 */
export interface AppConfigListEnvironmentsRequest {
  /**
   * @schema AppConfigListEnvironmentsRequest#ApplicationId
   */
  readonly applicationId?: string;

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
 * Converts an object of type 'AppConfigListEnvironmentsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppConfigListEnvironmentsRequest(obj: AppConfigListEnvironmentsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationId': obj.applicationId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AppConfigEnvironments' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppConfigEnvironments(obj: AppConfigEnvironments | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Items': obj.items?.map(y => toJson_AppConfigEnvironment(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppConfigListHostedConfigurationVersionsRequest
 */
export interface AppConfigListHostedConfigurationVersionsRequest {
  /**
   * @schema AppConfigListHostedConfigurationVersionsRequest#ApplicationId
   */
  readonly applicationId?: string;

  /**
   * @schema AppConfigListHostedConfigurationVersionsRequest#ConfigurationProfileId
   */
  readonly configurationProfileId?: string;

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
 * Converts an object of type 'AppConfigListHostedConfigurationVersionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppConfigListHostedConfigurationVersionsRequest(obj: AppConfigListHostedConfigurationVersionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationId': obj.applicationId,
    'ConfigurationProfileId': obj.configurationProfileId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AppConfigHostedConfigurationVersions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppConfigHostedConfigurationVersions(obj: AppConfigHostedConfigurationVersions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Items': obj.items?.map(y => toJson_AppConfigHostedConfigurationVersionSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppConfigListTagsForResourceRequest
 */
export interface AppConfigListTagsForResourceRequest {
  /**
   * @schema AppConfigListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'AppConfigListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppConfigListTagsForResourceRequest(obj: AppConfigListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AppConfigResourceTags' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppConfigResourceTags(obj: AppConfigResourceTags | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppConfigStartDeploymentRequest
 */
export interface AppConfigStartDeploymentRequest {
  /**
   * @schema AppConfigStartDeploymentRequest#ApplicationId
   */
  readonly applicationId?: string;

  /**
   * @schema AppConfigStartDeploymentRequest#EnvironmentId
   */
  readonly environmentId?: string;

  /**
   * @schema AppConfigStartDeploymentRequest#DeploymentStrategyId
   */
  readonly deploymentStrategyId?: string;

  /**
   * @schema AppConfigStartDeploymentRequest#ConfigurationProfileId
   */
  readonly configurationProfileId?: string;

  /**
   * @schema AppConfigStartDeploymentRequest#ConfigurationVersion
   */
  readonly configurationVersion?: string;

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
 * Converts an object of type 'AppConfigStartDeploymentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppConfigStartDeploymentRequest(obj: AppConfigStartDeploymentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationId': obj.applicationId,
    'EnvironmentId': obj.environmentId,
    'DeploymentStrategyId': obj.deploymentStrategyId,
    'ConfigurationProfileId': obj.configurationProfileId,
    'ConfigurationVersion': obj.configurationVersion,
    'Description': obj.description,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppConfigStopDeploymentRequest
 */
export interface AppConfigStopDeploymentRequest {
  /**
   * @schema AppConfigStopDeploymentRequest#ApplicationId
   */
  readonly applicationId?: string;

  /**
   * @schema AppConfigStopDeploymentRequest#EnvironmentId
   */
  readonly environmentId?: string;

  /**
   * @schema AppConfigStopDeploymentRequest#DeploymentNumber
   */
  readonly deploymentNumber?: number;

}

/**
 * Converts an object of type 'AppConfigStopDeploymentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppConfigStopDeploymentRequest(obj: AppConfigStopDeploymentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationId': obj.applicationId,
    'EnvironmentId': obj.environmentId,
    'DeploymentNumber': obj.deploymentNumber,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppConfigTagResourceRequest
 */
export interface AppConfigTagResourceRequest {
  /**
   * @schema AppConfigTagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema AppConfigTagResourceRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'AppConfigTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppConfigTagResourceRequest(obj: AppConfigTagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema AppConfigUntagResourceRequest
 */
export interface AppConfigUntagResourceRequest {
  /**
   * @schema AppConfigUntagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema AppConfigUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'AppConfigUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppConfigUntagResourceRequest(obj: AppConfigUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppConfigUpdateApplicationRequest
 */
export interface AppConfigUpdateApplicationRequest {
  /**
   * @schema AppConfigUpdateApplicationRequest#ApplicationId
   */
  readonly applicationId?: string;

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
 * Converts an object of type 'AppConfigUpdateApplicationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppConfigUpdateApplicationRequest(obj: AppConfigUpdateApplicationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationId': obj.applicationId,
    'Name': obj.name,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppConfigUpdateConfigurationProfileRequest
 */
export interface AppConfigUpdateConfigurationProfileRequest {
  /**
   * @schema AppConfigUpdateConfigurationProfileRequest#ApplicationId
   */
  readonly applicationId?: string;

  /**
   * @schema AppConfigUpdateConfigurationProfileRequest#ConfigurationProfileId
   */
  readonly configurationProfileId?: string;

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
 * Converts an object of type 'AppConfigUpdateConfigurationProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppConfigUpdateConfigurationProfileRequest(obj: AppConfigUpdateConfigurationProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationId': obj.applicationId,
    'ConfigurationProfileId': obj.configurationProfileId,
    'Name': obj.name,
    'Description': obj.description,
    'RetrievalRoleArn': obj.retrievalRoleArn,
    'Validators': obj.validators?.map(y => toJson_AppConfigValidator(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppConfigUpdateDeploymentStrategyRequest
 */
export interface AppConfigUpdateDeploymentStrategyRequest {
  /**
   * @schema AppConfigUpdateDeploymentStrategyRequest#DeploymentStrategyId
   */
  readonly deploymentStrategyId?: string;

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
 * Converts an object of type 'AppConfigUpdateDeploymentStrategyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppConfigUpdateDeploymentStrategyRequest(obj: AppConfigUpdateDeploymentStrategyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeploymentStrategyId': obj.deploymentStrategyId,
    'Description': obj.description,
    'DeploymentDurationInMinutes': obj.deploymentDurationInMinutes,
    'FinalBakeTimeInMinutes': obj.finalBakeTimeInMinutes,
    'GrowthFactor': obj.growthFactor,
    'GrowthType': obj.growthType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppConfigUpdateEnvironmentRequest
 */
export interface AppConfigUpdateEnvironmentRequest {
  /**
   * @schema AppConfigUpdateEnvironmentRequest#ApplicationId
   */
  readonly applicationId?: string;

  /**
   * @schema AppConfigUpdateEnvironmentRequest#EnvironmentId
   */
  readonly environmentId?: string;

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
 * Converts an object of type 'AppConfigUpdateEnvironmentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppConfigUpdateEnvironmentRequest(obj: AppConfigUpdateEnvironmentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationId': obj.applicationId,
    'EnvironmentId': obj.environmentId,
    'Name': obj.name,
    'Description': obj.description,
    'Monitors': obj.monitors?.map(y => toJson_AppConfigMonitor(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppConfigValidateConfigurationRequest
 */
export interface AppConfigValidateConfigurationRequest {
  /**
   * @schema AppConfigValidateConfigurationRequest#ApplicationId
   */
  readonly applicationId?: string;

  /**
   * @schema AppConfigValidateConfigurationRequest#ConfigurationProfileId
   */
  readonly configurationProfileId?: string;

  /**
   * @schema AppConfigValidateConfigurationRequest#ConfigurationVersion
   */
  readonly configurationVersion?: string;

}

/**
 * Converts an object of type 'AppConfigValidateConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppConfigValidateConfigurationRequest(obj: AppConfigValidateConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationId': obj.applicationId,
    'ConfigurationProfileId': obj.configurationProfileId,
    'ConfigurationVersion': obj.configurationVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppConfigValidator
 */
export interface AppConfigValidator {
  /**
   * @schema AppConfigValidator#Type
   */
  readonly type?: string;

  /**
   * @schema AppConfigValidator#Content
   */
  readonly content?: string;

}

/**
 * Converts an object of type 'AppConfigValidator' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppConfigValidator(obj: AppConfigValidator | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Content': obj.content,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AppConfigMonitor' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppConfigMonitor(obj: AppConfigMonitor | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AlarmArn': obj.alarmArn,
    'AlarmRoleArn': obj.alarmRoleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AppConfigDeploymentEvent' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppConfigDeploymentEvent(obj: AppConfigDeploymentEvent | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EventType': obj.eventType,
    'TriggeredBy': obj.triggeredBy,
    'Description': obj.description,
    'OccurredAt': obj.occurredAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AppConfigConfigurationProfileSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppConfigConfigurationProfileSummary(obj: AppConfigConfigurationProfileSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationId': obj.applicationId,
    'Id': obj.id,
    'Name': obj.name,
    'LocationUri': obj.locationUri,
    'ValidatorTypes': obj.validatorTypes?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AppConfigDeploymentSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppConfigDeploymentSummary(obj: AppConfigDeploymentSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeploymentNumber': obj.deploymentNumber,
    'ConfigurationName': obj.configurationName,
    'ConfigurationVersion': obj.configurationVersion,
    'DeploymentDurationInMinutes': obj.deploymentDurationInMinutes,
    'GrowthType': obj.growthType,
    'GrowthFactor': obj.growthFactor,
    'FinalBakeTimeInMinutes': obj.finalBakeTimeInMinutes,
    'State': obj.state,
    'PercentageComplete': obj.percentageComplete,
    'StartedAt': obj.startedAt,
    'CompletedAt': obj.completedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

/**
 * Converts an object of type 'AppConfigHostedConfigurationVersionSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppConfigHostedConfigurationVersionSummary(obj: AppConfigHostedConfigurationVersionSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationId': obj.applicationId,
    'ConfigurationProfileId': obj.configurationProfileId,
    'VersionNumber': obj.versionNumber,
    'Description': obj.description,
    'ContentType': obj.contentType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
