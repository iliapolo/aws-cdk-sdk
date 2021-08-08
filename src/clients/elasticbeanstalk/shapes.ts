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
 * Converts an object of type 'ElasticBeanstalkAbortEnvironmentUpdateMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkAbortEnvironmentUpdateMessage(obj: ElasticBeanstalkAbortEnvironmentUpdateMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EnvironmentId': obj.environmentId,
    'EnvironmentName': obj.environmentName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly actionId?: string;

}

/**
 * Converts an object of type 'ElasticBeanstalkApplyEnvironmentManagedActionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkApplyEnvironmentManagedActionRequest(obj: ElasticBeanstalkApplyEnvironmentManagedActionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EnvironmentName': obj.environmentName,
    'EnvironmentId': obj.environmentId,
    'ActionId': obj.actionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkApplyEnvironmentManagedActionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkApplyEnvironmentManagedActionResult(obj: ElasticBeanstalkApplyEnvironmentManagedActionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ActionId': obj.actionId,
    'ActionDescription': obj.actionDescription,
    'ActionType': obj.actionType,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticBeanstalkAssociateEnvironmentOperationsRoleMessage
 */
export interface ElasticBeanstalkAssociateEnvironmentOperationsRoleMessage {
  /**
   * @schema ElasticBeanstalkAssociateEnvironmentOperationsRoleMessage#EnvironmentName
   */
  readonly environmentName?: string;

  /**
   * @schema ElasticBeanstalkAssociateEnvironmentOperationsRoleMessage#OperationsRole
   */
  readonly operationsRole?: string;

}

/**
 * Converts an object of type 'ElasticBeanstalkAssociateEnvironmentOperationsRoleMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkAssociateEnvironmentOperationsRoleMessage(obj: ElasticBeanstalkAssociateEnvironmentOperationsRoleMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EnvironmentName': obj.environmentName,
    'OperationsRole': obj.operationsRole,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticBeanstalkCheckDnsAvailabilityMessage
 */
export interface ElasticBeanstalkCheckDnsAvailabilityMessage {
  /**
   * @schema ElasticBeanstalkCheckDnsAvailabilityMessage#CNAMEPrefix
   */
  readonly cnamePrefix?: string;

}

/**
 * Converts an object of type 'ElasticBeanstalkCheckDnsAvailabilityMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkCheckDnsAvailabilityMessage(obj: ElasticBeanstalkCheckDnsAvailabilityMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CNAMEPrefix': obj.cnamePrefix,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkCheckDnsAvailabilityResultMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkCheckDnsAvailabilityResultMessage(obj: ElasticBeanstalkCheckDnsAvailabilityResultMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Available': obj.available,
    'FullyQualifiedCNAME': obj.fullyQualifiedCname,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkComposeEnvironmentsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkComposeEnvironmentsMessage(obj: ElasticBeanstalkComposeEnvironmentsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationName': obj.applicationName,
    'GroupName': obj.groupName,
    'VersionLabels': obj.versionLabels?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkEnvironmentDescriptionsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkEnvironmentDescriptionsMessage(obj: ElasticBeanstalkEnvironmentDescriptionsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Environments': obj.environments?.map(y => toJson_ElasticBeanstalkEnvironmentDescription(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticBeanstalkCreateApplicationMessage
 */
export interface ElasticBeanstalkCreateApplicationMessage {
  /**
   * @schema ElasticBeanstalkCreateApplicationMessage#ApplicationName
   */
  readonly applicationName?: string;

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
 * Converts an object of type 'ElasticBeanstalkCreateApplicationMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkCreateApplicationMessage(obj: ElasticBeanstalkCreateApplicationMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationName': obj.applicationName,
    'Description': obj.description,
    'ResourceLifecycleConfig': toJson_ElasticBeanstalkApplicationResourceLifecycleConfig(obj.resourceLifecycleConfig),
    'Tags': obj.tags?.map(y => toJson_ElasticBeanstalkTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkApplicationDescriptionMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkApplicationDescriptionMessage(obj: ElasticBeanstalkApplicationDescriptionMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Application': toJson_ElasticBeanstalkApplicationDescription(obj.application),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticBeanstalkCreateApplicationVersionMessage
 */
export interface ElasticBeanstalkCreateApplicationVersionMessage {
  /**
   * @schema ElasticBeanstalkCreateApplicationVersionMessage#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema ElasticBeanstalkCreateApplicationVersionMessage#VersionLabel
   */
  readonly versionLabel?: string;

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
 * Converts an object of type 'ElasticBeanstalkCreateApplicationVersionMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkCreateApplicationVersionMessage(obj: ElasticBeanstalkCreateApplicationVersionMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationName': obj.applicationName,
    'VersionLabel': obj.versionLabel,
    'Description': obj.description,
    'SourceBuildInformation': toJson_ElasticBeanstalkSourceBuildInformation(obj.sourceBuildInformation),
    'SourceBundle': toJson_ElasticBeanstalkS3Location(obj.sourceBundle),
    'BuildConfiguration': toJson_ElasticBeanstalkBuildConfiguration(obj.buildConfiguration),
    'AutoCreateApplication': obj.autoCreateApplication,
    'Process': obj.process,
    'Tags': obj.tags?.map(y => toJson_ElasticBeanstalkTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkApplicationVersionDescriptionMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkApplicationVersionDescriptionMessage(obj: ElasticBeanstalkApplicationVersionDescriptionMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationVersion': toJson_ElasticBeanstalkApplicationVersionDescription(obj.applicationVersion),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticBeanstalkCreateConfigurationTemplateMessage
 */
export interface ElasticBeanstalkCreateConfigurationTemplateMessage {
  /**
   * @schema ElasticBeanstalkCreateConfigurationTemplateMessage#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema ElasticBeanstalkCreateConfigurationTemplateMessage#TemplateName
   */
  readonly templateName?: string;

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
 * Converts an object of type 'ElasticBeanstalkCreateConfigurationTemplateMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkCreateConfigurationTemplateMessage(obj: ElasticBeanstalkCreateConfigurationTemplateMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationName': obj.applicationName,
    'TemplateName': obj.templateName,
    'SolutionStackName': obj.solutionStackName,
    'PlatformArn': obj.platformArn,
    'SourceConfiguration': toJson_ElasticBeanstalkSourceConfiguration(obj.sourceConfiguration),
    'EnvironmentId': obj.environmentId,
    'Description': obj.description,
    'OptionSettings': obj.optionSettings?.map(y => toJson_ElasticBeanstalkConfigurationOptionSetting(y)),
    'Tags': obj.tags?.map(y => toJson_ElasticBeanstalkTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkConfigurationSettingsDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkConfigurationSettingsDescription(obj: ElasticBeanstalkConfigurationSettingsDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SolutionStackName': obj.solutionStackName,
    'PlatformArn': obj.platformArn,
    'ApplicationName': obj.applicationName,
    'TemplateName': obj.templateName,
    'Description': obj.description,
    'EnvironmentName': obj.environmentName,
    'DeploymentStatus': obj.deploymentStatus,
    'DateCreated': obj.dateCreated,
    'DateUpdated': obj.dateUpdated,
    'OptionSettings': obj.optionSettings?.map(y => toJson_ElasticBeanstalkConfigurationOptionSetting(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticBeanstalkCreateEnvironmentMessage
 */
export interface ElasticBeanstalkCreateEnvironmentMessage {
  /**
   * @schema ElasticBeanstalkCreateEnvironmentMessage#ApplicationName
   */
  readonly applicationName?: string;

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
 * Converts an object of type 'ElasticBeanstalkCreateEnvironmentMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkCreateEnvironmentMessage(obj: ElasticBeanstalkCreateEnvironmentMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationName': obj.applicationName,
    'EnvironmentName': obj.environmentName,
    'GroupName': obj.groupName,
    'Description': obj.description,
    'CNAMEPrefix': obj.cnamePrefix,
    'Tier': toJson_ElasticBeanstalkEnvironmentTier(obj.tier),
    'Tags': obj.tags?.map(y => toJson_ElasticBeanstalkTag(y)),
    'VersionLabel': obj.versionLabel,
    'TemplateName': obj.templateName,
    'SolutionStackName': obj.solutionStackName,
    'PlatformArn': obj.platformArn,
    'OptionSettings': obj.optionSettings?.map(y => toJson_ElasticBeanstalkConfigurationOptionSetting(y)),
    'OptionsToRemove': obj.optionsToRemove?.map(y => toJson_ElasticBeanstalkOptionSpecification(y)),
    'OperationsRole': obj.operationsRole,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkEnvironmentDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkEnvironmentDescription(obj: ElasticBeanstalkEnvironmentDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EnvironmentName': obj.environmentName,
    'EnvironmentId': obj.environmentId,
    'ApplicationName': obj.applicationName,
    'VersionLabel': obj.versionLabel,
    'SolutionStackName': obj.solutionStackName,
    'PlatformArn': obj.platformArn,
    'TemplateName': obj.templateName,
    'Description': obj.description,
    'EndpointURL': obj.endpointUrl,
    'CNAME': obj.cname,
    'DateCreated': obj.dateCreated,
    'DateUpdated': obj.dateUpdated,
    'Status': obj.status,
    'AbortableOperationInProgress': obj.abortableOperationInProgress,
    'Health': obj.health,
    'HealthStatus': obj.healthStatus,
    'Resources': toJson_ElasticBeanstalkEnvironmentResourcesDescription(obj.resources),
    'Tier': toJson_ElasticBeanstalkEnvironmentTier(obj.tier),
    'EnvironmentLinks': obj.environmentLinks?.map(y => toJson_ElasticBeanstalkEnvironmentLink(y)),
    'EnvironmentArn': obj.environmentArn,
    'OperationsRole': obj.operationsRole,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticBeanstalkCreatePlatformVersionRequest
 */
export interface ElasticBeanstalkCreatePlatformVersionRequest {
  /**
   * @schema ElasticBeanstalkCreatePlatformVersionRequest#PlatformName
   */
  readonly platformName?: string;

  /**
   * @schema ElasticBeanstalkCreatePlatformVersionRequest#PlatformVersion
   */
  readonly platformVersion?: string;

  /**
   * @schema ElasticBeanstalkCreatePlatformVersionRequest#PlatformDefinitionBundle
   */
  readonly platformDefinitionBundle?: ElasticBeanstalkS3Location;

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
 * Converts an object of type 'ElasticBeanstalkCreatePlatformVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkCreatePlatformVersionRequest(obj: ElasticBeanstalkCreatePlatformVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PlatformName': obj.platformName,
    'PlatformVersion': obj.platformVersion,
    'PlatformDefinitionBundle': toJson_ElasticBeanstalkS3Location(obj.platformDefinitionBundle),
    'EnvironmentName': obj.environmentName,
    'OptionSettings': obj.optionSettings?.map(y => toJson_ElasticBeanstalkConfigurationOptionSetting(y)),
    'Tags': obj.tags?.map(y => toJson_ElasticBeanstalkTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkCreatePlatformVersionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkCreatePlatformVersionResult(obj: ElasticBeanstalkCreatePlatformVersionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PlatformSummary': toJson_ElasticBeanstalkPlatformSummary(obj.platformSummary),
    'Builder': toJson_ElasticBeanstalkBuilder(obj.builder),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkCreateStorageLocationResultMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkCreateStorageLocationResultMessage(obj: ElasticBeanstalkCreateStorageLocationResultMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3Bucket': obj.s3Bucket,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticBeanstalkDeleteApplicationMessage
 */
export interface ElasticBeanstalkDeleteApplicationMessage {
  /**
   * @schema ElasticBeanstalkDeleteApplicationMessage#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema ElasticBeanstalkDeleteApplicationMessage#TerminateEnvByForce
   */
  readonly terminateEnvByForce?: boolean;

}

/**
 * Converts an object of type 'ElasticBeanstalkDeleteApplicationMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkDeleteApplicationMessage(obj: ElasticBeanstalkDeleteApplicationMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationName': obj.applicationName,
    'TerminateEnvByForce': obj.terminateEnvByForce,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticBeanstalkDeleteApplicationVersionMessage
 */
export interface ElasticBeanstalkDeleteApplicationVersionMessage {
  /**
   * @schema ElasticBeanstalkDeleteApplicationVersionMessage#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema ElasticBeanstalkDeleteApplicationVersionMessage#VersionLabel
   */
  readonly versionLabel?: string;

  /**
   * @schema ElasticBeanstalkDeleteApplicationVersionMessage#DeleteSourceBundle
   */
  readonly deleteSourceBundle?: boolean;

}

/**
 * Converts an object of type 'ElasticBeanstalkDeleteApplicationVersionMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkDeleteApplicationVersionMessage(obj: ElasticBeanstalkDeleteApplicationVersionMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationName': obj.applicationName,
    'VersionLabel': obj.versionLabel,
    'DeleteSourceBundle': obj.deleteSourceBundle,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticBeanstalkDeleteConfigurationTemplateMessage
 */
export interface ElasticBeanstalkDeleteConfigurationTemplateMessage {
  /**
   * @schema ElasticBeanstalkDeleteConfigurationTemplateMessage#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema ElasticBeanstalkDeleteConfigurationTemplateMessage#TemplateName
   */
  readonly templateName?: string;

}

/**
 * Converts an object of type 'ElasticBeanstalkDeleteConfigurationTemplateMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkDeleteConfigurationTemplateMessage(obj: ElasticBeanstalkDeleteConfigurationTemplateMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationName': obj.applicationName,
    'TemplateName': obj.templateName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticBeanstalkDeleteEnvironmentConfigurationMessage
 */
export interface ElasticBeanstalkDeleteEnvironmentConfigurationMessage {
  /**
   * @schema ElasticBeanstalkDeleteEnvironmentConfigurationMessage#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema ElasticBeanstalkDeleteEnvironmentConfigurationMessage#EnvironmentName
   */
  readonly environmentName?: string;

}

/**
 * Converts an object of type 'ElasticBeanstalkDeleteEnvironmentConfigurationMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkDeleteEnvironmentConfigurationMessage(obj: ElasticBeanstalkDeleteEnvironmentConfigurationMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationName': obj.applicationName,
    'EnvironmentName': obj.environmentName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkDeletePlatformVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkDeletePlatformVersionRequest(obj: ElasticBeanstalkDeletePlatformVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PlatformArn': obj.platformArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkDeletePlatformVersionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkDeletePlatformVersionResult(obj: ElasticBeanstalkDeletePlatformVersionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PlatformSummary': toJson_ElasticBeanstalkPlatformSummary(obj.platformSummary),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkDescribeAccountAttributesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkDescribeAccountAttributesResult(obj: ElasticBeanstalkDescribeAccountAttributesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceQuotas': toJson_ElasticBeanstalkResourceQuotas(obj.resourceQuotas),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkDescribeApplicationVersionsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkDescribeApplicationVersionsMessage(obj: ElasticBeanstalkDescribeApplicationVersionsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationName': obj.applicationName,
    'VersionLabels': obj.versionLabels?.map(y => y),
    'MaxRecords': obj.maxRecords,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkApplicationVersionDescriptionsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkApplicationVersionDescriptionsMessage(obj: ElasticBeanstalkApplicationVersionDescriptionsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationVersions': obj.applicationVersions?.map(y => toJson_ElasticBeanstalkApplicationVersionDescription(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkDescribeApplicationsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkDescribeApplicationsMessage(obj: ElasticBeanstalkDescribeApplicationsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationNames': obj.applicationNames?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkApplicationDescriptionsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkApplicationDescriptionsMessage(obj: ElasticBeanstalkApplicationDescriptionsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Applications': obj.applications?.map(y => toJson_ElasticBeanstalkApplicationDescription(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkDescribeConfigurationOptionsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkDescribeConfigurationOptionsMessage(obj: ElasticBeanstalkDescribeConfigurationOptionsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationName': obj.applicationName,
    'TemplateName': obj.templateName,
    'EnvironmentName': obj.environmentName,
    'SolutionStackName': obj.solutionStackName,
    'PlatformArn': obj.platformArn,
    'Options': obj.options?.map(y => toJson_ElasticBeanstalkOptionSpecification(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkConfigurationOptionsDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkConfigurationOptionsDescription(obj: ElasticBeanstalkConfigurationOptionsDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SolutionStackName': obj.solutionStackName,
    'PlatformArn': obj.platformArn,
    'Options': obj.options?.map(y => toJson_ElasticBeanstalkConfigurationOptionDescription(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticBeanstalkDescribeConfigurationSettingsMessage
 */
export interface ElasticBeanstalkDescribeConfigurationSettingsMessage {
  /**
   * @schema ElasticBeanstalkDescribeConfigurationSettingsMessage#ApplicationName
   */
  readonly applicationName?: string;

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
 * Converts an object of type 'ElasticBeanstalkDescribeConfigurationSettingsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkDescribeConfigurationSettingsMessage(obj: ElasticBeanstalkDescribeConfigurationSettingsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationName': obj.applicationName,
    'TemplateName': obj.templateName,
    'EnvironmentName': obj.environmentName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkConfigurationSettingsDescriptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkConfigurationSettingsDescriptions(obj: ElasticBeanstalkConfigurationSettingsDescriptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConfigurationSettings': obj.configurationSettings?.map(y => toJson_ElasticBeanstalkConfigurationSettingsDescription(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkDescribeEnvironmentHealthRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkDescribeEnvironmentHealthRequest(obj: ElasticBeanstalkDescribeEnvironmentHealthRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EnvironmentName': obj.environmentName,
    'EnvironmentId': obj.environmentId,
    'AttributeNames': obj.attributeNames?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkDescribeEnvironmentHealthResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkDescribeEnvironmentHealthResult(obj: ElasticBeanstalkDescribeEnvironmentHealthResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EnvironmentName': obj.environmentName,
    'HealthStatus': obj.healthStatus,
    'Status': obj.status,
    'Color': obj.color,
    'Causes': obj.causes?.map(y => y),
    'ApplicationMetrics': toJson_ElasticBeanstalkApplicationMetrics(obj.applicationMetrics),
    'InstancesHealth': toJson_ElasticBeanstalkInstanceHealthSummary(obj.instancesHealth),
    'RefreshedAt': obj.refreshedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkDescribeEnvironmentManagedActionHistoryRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkDescribeEnvironmentManagedActionHistoryRequest(obj: ElasticBeanstalkDescribeEnvironmentManagedActionHistoryRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EnvironmentId': obj.environmentId,
    'EnvironmentName': obj.environmentName,
    'NextToken': obj.nextToken,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkDescribeEnvironmentManagedActionHistoryResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkDescribeEnvironmentManagedActionHistoryResult(obj: ElasticBeanstalkDescribeEnvironmentManagedActionHistoryResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ManagedActionHistoryItems': obj.managedActionHistoryItems?.map(y => toJson_ElasticBeanstalkManagedActionHistoryItem(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkDescribeEnvironmentManagedActionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkDescribeEnvironmentManagedActionsRequest(obj: ElasticBeanstalkDescribeEnvironmentManagedActionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EnvironmentName': obj.environmentName,
    'EnvironmentId': obj.environmentId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkDescribeEnvironmentManagedActionsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkDescribeEnvironmentManagedActionsResult(obj: ElasticBeanstalkDescribeEnvironmentManagedActionsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ManagedActions': obj.managedActions?.map(y => toJson_ElasticBeanstalkManagedAction(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkDescribeEnvironmentResourcesMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkDescribeEnvironmentResourcesMessage(obj: ElasticBeanstalkDescribeEnvironmentResourcesMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EnvironmentId': obj.environmentId,
    'EnvironmentName': obj.environmentName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkEnvironmentResourceDescriptionsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkEnvironmentResourceDescriptionsMessage(obj: ElasticBeanstalkEnvironmentResourceDescriptionsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EnvironmentResources': toJson_ElasticBeanstalkEnvironmentResourceDescription(obj.environmentResources),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkDescribeEnvironmentsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkDescribeEnvironmentsMessage(obj: ElasticBeanstalkDescribeEnvironmentsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationName': obj.applicationName,
    'VersionLabel': obj.versionLabel,
    'EnvironmentIds': obj.environmentIds?.map(y => y),
    'EnvironmentNames': obj.environmentNames?.map(y => y),
    'IncludeDeleted': obj.includeDeleted,
    'IncludedDeletedBackTo': obj.includedDeletedBackTo,
    'MaxRecords': obj.maxRecords,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkDescribeEventsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkDescribeEventsMessage(obj: ElasticBeanstalkDescribeEventsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationName': obj.applicationName,
    'VersionLabel': obj.versionLabel,
    'TemplateName': obj.templateName,
    'EnvironmentId': obj.environmentId,
    'EnvironmentName': obj.environmentName,
    'PlatformArn': obj.platformArn,
    'RequestId': obj.requestId,
    'Severity': obj.severity,
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
    'MaxRecords': obj.maxRecords,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkEventDescriptionsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkEventDescriptionsMessage(obj: ElasticBeanstalkEventDescriptionsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Events': obj.events?.map(y => toJson_ElasticBeanstalkEventDescription(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkDescribeInstancesHealthRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkDescribeInstancesHealthRequest(obj: ElasticBeanstalkDescribeInstancesHealthRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EnvironmentName': obj.environmentName,
    'EnvironmentId': obj.environmentId,
    'AttributeNames': obj.attributeNames?.map(y => y),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkDescribeInstancesHealthResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkDescribeInstancesHealthResult(obj: ElasticBeanstalkDescribeInstancesHealthResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceHealthList': obj.instanceHealthList?.map(y => toJson_ElasticBeanstalkSingleInstanceHealth(y)),
    'RefreshedAt': obj.refreshedAt,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkDescribePlatformVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkDescribePlatformVersionRequest(obj: ElasticBeanstalkDescribePlatformVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PlatformArn': obj.platformArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkDescribePlatformVersionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkDescribePlatformVersionResult(obj: ElasticBeanstalkDescribePlatformVersionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PlatformDescription': toJson_ElasticBeanstalkPlatformDescription(obj.platformDescription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticBeanstalkDisassociateEnvironmentOperationsRoleMessage
 */
export interface ElasticBeanstalkDisassociateEnvironmentOperationsRoleMessage {
  /**
   * @schema ElasticBeanstalkDisassociateEnvironmentOperationsRoleMessage#EnvironmentName
   */
  readonly environmentName?: string;

}

/**
 * Converts an object of type 'ElasticBeanstalkDisassociateEnvironmentOperationsRoleMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkDisassociateEnvironmentOperationsRoleMessage(obj: ElasticBeanstalkDisassociateEnvironmentOperationsRoleMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EnvironmentName': obj.environmentName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkListAvailableSolutionStacksResultMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkListAvailableSolutionStacksResultMessage(obj: ElasticBeanstalkListAvailableSolutionStacksResultMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SolutionStacks': obj.solutionStacks?.map(y => y),
    'SolutionStackDetails': obj.solutionStackDetails?.map(y => toJson_ElasticBeanstalkSolutionStackDescription(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkListPlatformBranchesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkListPlatformBranchesRequest(obj: ElasticBeanstalkListPlatformBranchesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Filters': obj.filters?.map(y => toJson_ElasticBeanstalkSearchFilter(y)),
    'MaxRecords': obj.maxRecords,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkListPlatformBranchesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkListPlatformBranchesResult(obj: ElasticBeanstalkListPlatformBranchesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PlatformBranchSummaryList': obj.platformBranchSummaryList?.map(y => toJson_ElasticBeanstalkPlatformBranchSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkListPlatformVersionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkListPlatformVersionsRequest(obj: ElasticBeanstalkListPlatformVersionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Filters': obj.filters?.map(y => toJson_ElasticBeanstalkPlatformFilter(y)),
    'MaxRecords': obj.maxRecords,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkListPlatformVersionsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkListPlatformVersionsResult(obj: ElasticBeanstalkListPlatformVersionsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PlatformSummaryList': obj.platformSummaryList?.map(y => toJson_ElasticBeanstalkPlatformSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticBeanstalkListTagsForResourceMessage
 */
export interface ElasticBeanstalkListTagsForResourceMessage {
  /**
   * @schema ElasticBeanstalkListTagsForResourceMessage#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'ElasticBeanstalkListTagsForResourceMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkListTagsForResourceMessage(obj: ElasticBeanstalkListTagsForResourceMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkResourceTagsDescriptionMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkResourceTagsDescriptionMessage(obj: ElasticBeanstalkResourceTagsDescriptionMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'ResourceTags': obj.resourceTags?.map(y => toJson_ElasticBeanstalkTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkRebuildEnvironmentMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkRebuildEnvironmentMessage(obj: ElasticBeanstalkRebuildEnvironmentMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EnvironmentId': obj.environmentId,
    'EnvironmentName': obj.environmentName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly infoType?: string;

}

/**
 * Converts an object of type 'ElasticBeanstalkRequestEnvironmentInfoMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkRequestEnvironmentInfoMessage(obj: ElasticBeanstalkRequestEnvironmentInfoMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EnvironmentId': obj.environmentId,
    'EnvironmentName': obj.environmentName,
    'InfoType': obj.infoType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkRestartAppServerMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkRestartAppServerMessage(obj: ElasticBeanstalkRestartAppServerMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EnvironmentId': obj.environmentId,
    'EnvironmentName': obj.environmentName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly infoType?: string;

}

/**
 * Converts an object of type 'ElasticBeanstalkRetrieveEnvironmentInfoMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkRetrieveEnvironmentInfoMessage(obj: ElasticBeanstalkRetrieveEnvironmentInfoMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EnvironmentId': obj.environmentId,
    'EnvironmentName': obj.environmentName,
    'InfoType': obj.infoType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkRetrieveEnvironmentInfoResultMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkRetrieveEnvironmentInfoResultMessage(obj: ElasticBeanstalkRetrieveEnvironmentInfoResultMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EnvironmentInfo': obj.environmentInfo?.map(y => toJson_ElasticBeanstalkEnvironmentInfoDescription(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkSwapEnvironmentCnamEsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkSwapEnvironmentCnamEsMessage(obj: ElasticBeanstalkSwapEnvironmentCnamEsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceEnvironmentId': obj.sourceEnvironmentId,
    'SourceEnvironmentName': obj.sourceEnvironmentName,
    'DestinationEnvironmentId': obj.destinationEnvironmentId,
    'DestinationEnvironmentName': obj.destinationEnvironmentName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkTerminateEnvironmentMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkTerminateEnvironmentMessage(obj: ElasticBeanstalkTerminateEnvironmentMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EnvironmentId': obj.environmentId,
    'EnvironmentName': obj.environmentName,
    'TerminateResources': obj.terminateResources,
    'ForceTerminate': obj.forceTerminate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticBeanstalkUpdateApplicationMessage
 */
export interface ElasticBeanstalkUpdateApplicationMessage {
  /**
   * @schema ElasticBeanstalkUpdateApplicationMessage#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema ElasticBeanstalkUpdateApplicationMessage#Description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'ElasticBeanstalkUpdateApplicationMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkUpdateApplicationMessage(obj: ElasticBeanstalkUpdateApplicationMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationName': obj.applicationName,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticBeanstalkUpdateApplicationResourceLifecycleMessage
 */
export interface ElasticBeanstalkUpdateApplicationResourceLifecycleMessage {
  /**
   * @schema ElasticBeanstalkUpdateApplicationResourceLifecycleMessage#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema ElasticBeanstalkUpdateApplicationResourceLifecycleMessage#ResourceLifecycleConfig
   */
  readonly resourceLifecycleConfig?: ElasticBeanstalkApplicationResourceLifecycleConfig;

}

/**
 * Converts an object of type 'ElasticBeanstalkUpdateApplicationResourceLifecycleMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkUpdateApplicationResourceLifecycleMessage(obj: ElasticBeanstalkUpdateApplicationResourceLifecycleMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationName': obj.applicationName,
    'ResourceLifecycleConfig': toJson_ElasticBeanstalkApplicationResourceLifecycleConfig(obj.resourceLifecycleConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkApplicationResourceLifecycleDescriptionMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkApplicationResourceLifecycleDescriptionMessage(obj: ElasticBeanstalkApplicationResourceLifecycleDescriptionMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationName': obj.applicationName,
    'ResourceLifecycleConfig': toJson_ElasticBeanstalkApplicationResourceLifecycleConfig(obj.resourceLifecycleConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticBeanstalkUpdateApplicationVersionMessage
 */
export interface ElasticBeanstalkUpdateApplicationVersionMessage {
  /**
   * @schema ElasticBeanstalkUpdateApplicationVersionMessage#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema ElasticBeanstalkUpdateApplicationVersionMessage#VersionLabel
   */
  readonly versionLabel?: string;

  /**
   * @schema ElasticBeanstalkUpdateApplicationVersionMessage#Description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'ElasticBeanstalkUpdateApplicationVersionMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkUpdateApplicationVersionMessage(obj: ElasticBeanstalkUpdateApplicationVersionMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationName': obj.applicationName,
    'VersionLabel': obj.versionLabel,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticBeanstalkUpdateConfigurationTemplateMessage
 */
export interface ElasticBeanstalkUpdateConfigurationTemplateMessage {
  /**
   * @schema ElasticBeanstalkUpdateConfigurationTemplateMessage#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema ElasticBeanstalkUpdateConfigurationTemplateMessage#TemplateName
   */
  readonly templateName?: string;

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
 * Converts an object of type 'ElasticBeanstalkUpdateConfigurationTemplateMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkUpdateConfigurationTemplateMessage(obj: ElasticBeanstalkUpdateConfigurationTemplateMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationName': obj.applicationName,
    'TemplateName': obj.templateName,
    'Description': obj.description,
    'OptionSettings': obj.optionSettings?.map(y => toJson_ElasticBeanstalkConfigurationOptionSetting(y)),
    'OptionsToRemove': obj.optionsToRemove?.map(y => toJson_ElasticBeanstalkOptionSpecification(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkUpdateEnvironmentMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkUpdateEnvironmentMessage(obj: ElasticBeanstalkUpdateEnvironmentMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationName': obj.applicationName,
    'EnvironmentId': obj.environmentId,
    'EnvironmentName': obj.environmentName,
    'GroupName': obj.groupName,
    'Description': obj.description,
    'Tier': toJson_ElasticBeanstalkEnvironmentTier(obj.tier),
    'VersionLabel': obj.versionLabel,
    'TemplateName': obj.templateName,
    'SolutionStackName': obj.solutionStackName,
    'PlatformArn': obj.platformArn,
    'OptionSettings': obj.optionSettings?.map(y => toJson_ElasticBeanstalkConfigurationOptionSetting(y)),
    'OptionsToRemove': obj.optionsToRemove?.map(y => toJson_ElasticBeanstalkOptionSpecification(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticBeanstalkUpdateTagsForResourceMessage
 */
export interface ElasticBeanstalkUpdateTagsForResourceMessage {
  /**
   * @schema ElasticBeanstalkUpdateTagsForResourceMessage#ResourceArn
   */
  readonly resourceArn?: string;

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
 * Converts an object of type 'ElasticBeanstalkUpdateTagsForResourceMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkUpdateTagsForResourceMessage(obj: ElasticBeanstalkUpdateTagsForResourceMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'TagsToAdd': obj.tagsToAdd?.map(y => toJson_ElasticBeanstalkTag(y)),
    'TagsToRemove': obj.tagsToRemove?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticBeanstalkValidateConfigurationSettingsMessage
 */
export interface ElasticBeanstalkValidateConfigurationSettingsMessage {
  /**
   * @schema ElasticBeanstalkValidateConfigurationSettingsMessage#ApplicationName
   */
  readonly applicationName?: string;

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
  readonly optionSettings?: ElasticBeanstalkConfigurationOptionSetting[];

}

/**
 * Converts an object of type 'ElasticBeanstalkValidateConfigurationSettingsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkValidateConfigurationSettingsMessage(obj: ElasticBeanstalkValidateConfigurationSettingsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationName': obj.applicationName,
    'TemplateName': obj.templateName,
    'EnvironmentName': obj.environmentName,
    'OptionSettings': obj.optionSettings?.map(y => toJson_ElasticBeanstalkConfigurationOptionSetting(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkConfigurationSettingsValidationMessages' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkConfigurationSettingsValidationMessages(obj: ElasticBeanstalkConfigurationSettingsValidationMessages | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Messages': obj.messages?.map(y => toJson_ElasticBeanstalkValidationMessage(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkApplicationResourceLifecycleConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkApplicationResourceLifecycleConfig(obj: ElasticBeanstalkApplicationResourceLifecycleConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceRole': obj.serviceRole,
    'VersionLifecycleConfig': toJson_ElasticBeanstalkApplicationVersionLifecycleConfig(obj.versionLifecycleConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkTag(obj: ElasticBeanstalkTag | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkApplicationDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkApplicationDescription(obj: ElasticBeanstalkApplicationDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationArn': obj.applicationArn,
    'ApplicationName': obj.applicationName,
    'Description': obj.description,
    'DateCreated': obj.dateCreated,
    'DateUpdated': obj.dateUpdated,
    'Versions': obj.versions?.map(y => y),
    'ConfigurationTemplates': obj.configurationTemplates?.map(y => y),
    'ResourceLifecycleConfig': toJson_ElasticBeanstalkApplicationResourceLifecycleConfig(obj.resourceLifecycleConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticBeanstalkSourceBuildInformation
 */
export interface ElasticBeanstalkSourceBuildInformation {
  /**
   * @schema ElasticBeanstalkSourceBuildInformation#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema ElasticBeanstalkSourceBuildInformation#SourceRepository
   */
  readonly sourceRepository?: string;

  /**
   * @schema ElasticBeanstalkSourceBuildInformation#SourceLocation
   */
  readonly sourceLocation?: string;

}

/**
 * Converts an object of type 'ElasticBeanstalkSourceBuildInformation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkSourceBuildInformation(obj: ElasticBeanstalkSourceBuildInformation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceType': obj.sourceType,
    'SourceRepository': obj.sourceRepository,
    'SourceLocation': obj.sourceLocation,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkS3Location' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkS3Location(obj: ElasticBeanstalkS3Location | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3Bucket': obj.s3Bucket,
    'S3Key': obj.s3Key,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly codeBuildServiceRole?: string;

  /**
   * @schema ElasticBeanstalkBuildConfiguration#ComputeType
   */
  readonly computeType?: string;

  /**
   * @schema ElasticBeanstalkBuildConfiguration#Image
   */
  readonly image?: string;

  /**
   * @schema ElasticBeanstalkBuildConfiguration#TimeoutInMinutes
   */
  readonly timeoutInMinutes?: number;

}

/**
 * Converts an object of type 'ElasticBeanstalkBuildConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkBuildConfiguration(obj: ElasticBeanstalkBuildConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ArtifactName': obj.artifactName,
    'CodeBuildServiceRole': obj.codeBuildServiceRole,
    'ComputeType': obj.computeType,
    'Image': obj.image,
    'TimeoutInMinutes': obj.timeoutInMinutes,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkApplicationVersionDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkApplicationVersionDescription(obj: ElasticBeanstalkApplicationVersionDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationVersionArn': obj.applicationVersionArn,
    'ApplicationName': obj.applicationName,
    'Description': obj.description,
    'VersionLabel': obj.versionLabel,
    'SourceBuildInformation': toJson_ElasticBeanstalkSourceBuildInformation(obj.sourceBuildInformation),
    'BuildArn': obj.buildArn,
    'SourceBundle': toJson_ElasticBeanstalkS3Location(obj.sourceBundle),
    'DateCreated': obj.dateCreated,
    'DateUpdated': obj.dateUpdated,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkSourceConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkSourceConfiguration(obj: ElasticBeanstalkSourceConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationName': obj.applicationName,
    'TemplateName': obj.templateName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkConfigurationOptionSetting' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkConfigurationOptionSetting(obj: ElasticBeanstalkConfigurationOptionSetting | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceName': obj.resourceName,
    'Namespace': obj.namespace,
    'OptionName': obj.optionName,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkEnvironmentTier' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkEnvironmentTier(obj: ElasticBeanstalkEnvironmentTier | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Type': obj.type,
    'Version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkOptionSpecification' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkOptionSpecification(obj: ElasticBeanstalkOptionSpecification | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceName': obj.resourceName,
    'Namespace': obj.namespace,
    'OptionName': obj.optionName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkEnvironmentResourcesDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkEnvironmentResourcesDescription(obj: ElasticBeanstalkEnvironmentResourcesDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LoadBalancer': toJson_ElasticBeanstalkLoadBalancerDescription(obj.loadBalancer),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkEnvironmentLink' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkEnvironmentLink(obj: ElasticBeanstalkEnvironmentLink | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LinkName': obj.linkName,
    'EnvironmentName': obj.environmentName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkPlatformSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkPlatformSummary(obj: ElasticBeanstalkPlatformSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PlatformArn': obj.platformArn,
    'PlatformOwner': obj.platformOwner,
    'PlatformStatus': obj.platformStatus,
    'PlatformCategory': obj.platformCategory,
    'OperatingSystemName': obj.operatingSystemName,
    'OperatingSystemVersion': obj.operatingSystemVersion,
    'SupportedTierList': obj.supportedTierList?.map(y => y),
    'SupportedAddonList': obj.supportedAddonList?.map(y => y),
    'PlatformLifecycleState': obj.platformLifecycleState,
    'PlatformVersion': obj.platformVersion,
    'PlatformBranchName': obj.platformBranchName,
    'PlatformBranchLifecycleState': obj.platformBranchLifecycleState,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkBuilder' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkBuilder(obj: ElasticBeanstalkBuilder | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ARN': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkResourceQuotas' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkResourceQuotas(obj: ElasticBeanstalkResourceQuotas | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationQuota': toJson_ElasticBeanstalkResourceQuota(obj.applicationQuota),
    'ApplicationVersionQuota': toJson_ElasticBeanstalkResourceQuota(obj.applicationVersionQuota),
    'EnvironmentQuota': toJson_ElasticBeanstalkResourceQuota(obj.environmentQuota),
    'ConfigurationTemplateQuota': toJson_ElasticBeanstalkResourceQuota(obj.configurationTemplateQuota),
    'CustomPlatformQuota': toJson_ElasticBeanstalkResourceQuota(obj.customPlatformQuota),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkConfigurationOptionDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkConfigurationOptionDescription(obj: ElasticBeanstalkConfigurationOptionDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Namespace': obj.namespace,
    'Name': obj.name,
    'DefaultValue': obj.defaultValue,
    'ChangeSeverity': obj.changeSeverity,
    'UserDefined': obj.userDefined,
    'ValueType': obj.valueType,
    'ValueOptions': obj.valueOptions?.map(y => y),
    'MinValue': obj.minValue,
    'MaxValue': obj.maxValue,
    'MaxLength': obj.maxLength,
    'Regex': toJson_ElasticBeanstalkOptionRestrictionRegex(obj.regex),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkApplicationMetrics' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkApplicationMetrics(obj: ElasticBeanstalkApplicationMetrics | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Duration': obj.duration,
    'RequestCount': obj.requestCount,
    'StatusCodes': toJson_ElasticBeanstalkStatusCodes(obj.statusCodes),
    'Latency': toJson_ElasticBeanstalkLatency(obj.latency),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkInstanceHealthSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkInstanceHealthSummary(obj: ElasticBeanstalkInstanceHealthSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NoData': obj.noData,
    'Unknown': obj.unknown,
    'Pending': obj.pending,
    'Ok': obj.ok,
    'Info': obj.info,
    'Warning': obj.warning,
    'Degraded': obj.degraded,
    'Severe': obj.severe,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkManagedActionHistoryItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkManagedActionHistoryItem(obj: ElasticBeanstalkManagedActionHistoryItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ActionId': obj.actionId,
    'ActionType': obj.actionType,
    'ActionDescription': obj.actionDescription,
    'FailureType': obj.failureType,
    'Status': obj.status,
    'FailureDescription': obj.failureDescription,
    'ExecutedTime': obj.executedTime,
    'FinishedTime': obj.finishedTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkManagedAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkManagedAction(obj: ElasticBeanstalkManagedAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ActionId': obj.actionId,
    'ActionDescription': obj.actionDescription,
    'ActionType': obj.actionType,
    'Status': obj.status,
    'WindowStartTime': obj.windowStartTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkEnvironmentResourceDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkEnvironmentResourceDescription(obj: ElasticBeanstalkEnvironmentResourceDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EnvironmentName': obj.environmentName,
    'AutoScalingGroups': obj.autoScalingGroups?.map(y => toJson_ElasticBeanstalkAutoScalingGroup(y)),
    'Instances': obj.instances?.map(y => toJson_ElasticBeanstalkInstance(y)),
    'LaunchConfigurations': obj.launchConfigurations?.map(y => toJson_ElasticBeanstalkLaunchConfiguration(y)),
    'LaunchTemplates': obj.launchTemplates?.map(y => toJson_ElasticBeanstalkLaunchTemplate(y)),
    'LoadBalancers': obj.loadBalancers?.map(y => toJson_ElasticBeanstalkLoadBalancer(y)),
    'Triggers': obj.triggers?.map(y => toJson_ElasticBeanstalkTrigger(y)),
    'Queues': obj.queues?.map(y => toJson_ElasticBeanstalkQueue(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkEventDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkEventDescription(obj: ElasticBeanstalkEventDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EventDate': obj.eventDate,
    'Message': obj.message,
    'ApplicationName': obj.applicationName,
    'VersionLabel': obj.versionLabel,
    'TemplateName': obj.templateName,
    'EnvironmentName': obj.environmentName,
    'PlatformArn': obj.platformArn,
    'RequestId': obj.requestId,
    'Severity': obj.severity,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkSingleInstanceHealth' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkSingleInstanceHealth(obj: ElasticBeanstalkSingleInstanceHealth | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'HealthStatus': obj.healthStatus,
    'Color': obj.color,
    'Causes': obj.causes?.map(y => y),
    'LaunchedAt': obj.launchedAt,
    'ApplicationMetrics': toJson_ElasticBeanstalkApplicationMetrics(obj.applicationMetrics),
    'System': toJson_ElasticBeanstalkSystemStatus(obj.system),
    'Deployment': toJson_ElasticBeanstalkDeployment(obj.deployment),
    'AvailabilityZone': obj.availabilityZone,
    'InstanceType': obj.instanceType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkPlatformDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkPlatformDescription(obj: ElasticBeanstalkPlatformDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PlatformArn': obj.platformArn,
    'PlatformOwner': obj.platformOwner,
    'PlatformName': obj.platformName,
    'PlatformVersion': obj.platformVersion,
    'SolutionStackName': obj.solutionStackName,
    'PlatformStatus': obj.platformStatus,
    'DateCreated': obj.dateCreated,
    'DateUpdated': obj.dateUpdated,
    'PlatformCategory': obj.platformCategory,
    'Description': obj.description,
    'Maintainer': obj.maintainer,
    'OperatingSystemName': obj.operatingSystemName,
    'OperatingSystemVersion': obj.operatingSystemVersion,
    'ProgrammingLanguages': obj.programmingLanguages?.map(y => toJson_ElasticBeanstalkPlatformProgrammingLanguage(y)),
    'Frameworks': obj.frameworks?.map(y => toJson_ElasticBeanstalkPlatformFramework(y)),
    'CustomAmiList': obj.customAmiList?.map(y => toJson_ElasticBeanstalkCustomAmi(y)),
    'SupportedTierList': obj.supportedTierList?.map(y => y),
    'SupportedAddonList': obj.supportedAddonList?.map(y => y),
    'PlatformLifecycleState': obj.platformLifecycleState,
    'PlatformBranchName': obj.platformBranchName,
    'PlatformBranchLifecycleState': obj.platformBranchLifecycleState,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkSolutionStackDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkSolutionStackDescription(obj: ElasticBeanstalkSolutionStackDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SolutionStackName': obj.solutionStackName,
    'PermittedFileTypes': obj.permittedFileTypes?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkSearchFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkSearchFilter(obj: ElasticBeanstalkSearchFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Attribute': obj.attribute,
    'Operator': obj.operator,
    'Values': obj.values?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkPlatformBranchSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkPlatformBranchSummary(obj: ElasticBeanstalkPlatformBranchSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PlatformName': obj.platformName,
    'BranchName': obj.branchName,
    'LifecycleState': obj.lifecycleState,
    'BranchOrder': obj.branchOrder,
    'SupportedTierList': obj.supportedTierList?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkPlatformFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkPlatformFilter(obj: ElasticBeanstalkPlatformFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Operator': obj.operator,
    'Values': obj.values?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkEnvironmentInfoDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkEnvironmentInfoDescription(obj: ElasticBeanstalkEnvironmentInfoDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InfoType': obj.infoType,
    'Ec2InstanceId': obj.ec2InstanceId,
    'SampleTimestamp': obj.sampleTimestamp,
    'Message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkValidationMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkValidationMessage(obj: ElasticBeanstalkValidationMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Message': obj.message,
    'Severity': obj.severity,
    'Namespace': obj.namespace,
    'OptionName': obj.optionName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkApplicationVersionLifecycleConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkApplicationVersionLifecycleConfig(obj: ElasticBeanstalkApplicationVersionLifecycleConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxCountRule': toJson_ElasticBeanstalkMaxCountRule(obj.maxCountRule),
    'MaxAgeRule': toJson_ElasticBeanstalkMaxAgeRule(obj.maxAgeRule),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkLoadBalancerDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkLoadBalancerDescription(obj: ElasticBeanstalkLoadBalancerDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LoadBalancerName': obj.loadBalancerName,
    'Domain': obj.domain,
    'Listeners': obj.listeners?.map(y => toJson_ElasticBeanstalkListener(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkResourceQuota' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkResourceQuota(obj: ElasticBeanstalkResourceQuota | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Maximum': obj.maximum,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkOptionRestrictionRegex' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkOptionRestrictionRegex(obj: ElasticBeanstalkOptionRestrictionRegex | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Pattern': obj.pattern,
    'Label': obj.label,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkStatusCodes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkStatusCodes(obj: ElasticBeanstalkStatusCodes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status2xx': obj.status2Xx,
    'Status3xx': obj.status3Xx,
    'Status4xx': obj.status4Xx,
    'Status5xx': obj.status5Xx,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkLatency' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkLatency(obj: ElasticBeanstalkLatency | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'P999': obj.p999,
    'P99': obj.p99,
    'P95': obj.p95,
    'P90': obj.p90,
    'P85': obj.p85,
    'P75': obj.p75,
    'P50': obj.p50,
    'P10': obj.p10,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkAutoScalingGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkAutoScalingGroup(obj: ElasticBeanstalkAutoScalingGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkInstance' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkInstance(obj: ElasticBeanstalkInstance | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkLaunchConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkLaunchConfiguration(obj: ElasticBeanstalkLaunchConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkLaunchTemplate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkLaunchTemplate(obj: ElasticBeanstalkLaunchTemplate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkLoadBalancer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkLoadBalancer(obj: ElasticBeanstalkLoadBalancer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkTrigger' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkTrigger(obj: ElasticBeanstalkTrigger | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkQueue' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkQueue(obj: ElasticBeanstalkQueue | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'URL': obj.url,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkSystemStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkSystemStatus(obj: ElasticBeanstalkSystemStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CPUUtilization': toJson_ElasticBeanstalkCpuUtilization(obj.cpuUtilization),
    'LoadAverage': obj.loadAverage?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkDeployment' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkDeployment(obj: ElasticBeanstalkDeployment | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VersionLabel': obj.versionLabel,
    'DeploymentId': obj.deploymentId,
    'Status': obj.status,
    'DeploymentTime': obj.deploymentTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkPlatformProgrammingLanguage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkPlatformProgrammingLanguage(obj: ElasticBeanstalkPlatformProgrammingLanguage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkPlatformFramework' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkPlatformFramework(obj: ElasticBeanstalkPlatformFramework | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkCustomAmi' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkCustomAmi(obj: ElasticBeanstalkCustomAmi | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VirtualizationType': obj.virtualizationType,
    'ImageId': obj.imageId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticBeanstalkMaxCountRule
 */
export interface ElasticBeanstalkMaxCountRule {
  /**
   * @schema ElasticBeanstalkMaxCountRule#Enabled
   */
  readonly enabled?: boolean;

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
 * Converts an object of type 'ElasticBeanstalkMaxCountRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkMaxCountRule(obj: ElasticBeanstalkMaxCountRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Enabled': obj.enabled,
    'MaxCount': obj.maxCount,
    'DeleteSourceFromS3': obj.deleteSourceFromS3,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticBeanstalkMaxAgeRule
 */
export interface ElasticBeanstalkMaxAgeRule {
  /**
   * @schema ElasticBeanstalkMaxAgeRule#Enabled
   */
  readonly enabled?: boolean;

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
 * Converts an object of type 'ElasticBeanstalkMaxAgeRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkMaxAgeRule(obj: ElasticBeanstalkMaxAgeRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Enabled': obj.enabled,
    'MaxAgeInDays': obj.maxAgeInDays,
    'DeleteSourceFromS3': obj.deleteSourceFromS3,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElasticBeanstalkListener' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkListener(obj: ElasticBeanstalkListener | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Protocol': obj.protocol,
    'Port': obj.port,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

/**
 * Converts an object of type 'ElasticBeanstalkCpuUtilization' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticBeanstalkCpuUtilization(obj: ElasticBeanstalkCpuUtilization | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'User': obj.user,
    'Nice': obj.nice,
    'System': obj.system,
    'Idle': obj.idle,
    'IOWait': obj.ioWait,
    'IRQ': obj.irq,
    'SoftIRQ': obj.softIrq,
    'Privileged': obj.privileged,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
