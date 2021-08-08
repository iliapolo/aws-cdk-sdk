/**
 * @schema CodeDeployAddTagsToOnPremisesInstancesInput
 */
export interface CodeDeployAddTagsToOnPremisesInstancesInput {
  /**
   * @schema CodeDeployAddTagsToOnPremisesInstancesInput#tags
   */
  readonly tags: CodeDeployTag[];

  /**
   * @schema CodeDeployAddTagsToOnPremisesInstancesInput#instanceNames
   */
  readonly instanceNames: string[];

}

/**
 * Converts an object of type 'CodeDeployAddTagsToOnPremisesInstancesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployAddTagsToOnPremisesInstancesInput(obj: CodeDeployAddTagsToOnPremisesInstancesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tags': obj.tags?.map(y => toJson_CodeDeployTag(y)),
    'instanceNames': obj.instanceNames?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployBatchGetApplicationRevisionsInput
 */
export interface CodeDeployBatchGetApplicationRevisionsInput {
  /**
   * @schema CodeDeployBatchGetApplicationRevisionsInput#applicationName
   */
  readonly applicationName: string;

  /**
   * @schema CodeDeployBatchGetApplicationRevisionsInput#revisions
   */
  readonly revisions: CodeDeployRevisionLocation[];

}

/**
 * Converts an object of type 'CodeDeployBatchGetApplicationRevisionsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployBatchGetApplicationRevisionsInput(obj: CodeDeployBatchGetApplicationRevisionsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'applicationName': obj.applicationName,
    'revisions': obj.revisions?.map(y => toJson_CodeDeployRevisionLocation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployBatchGetApplicationRevisionsOutput
 */
export interface CodeDeployBatchGetApplicationRevisionsOutput {
  /**
   * @schema CodeDeployBatchGetApplicationRevisionsOutput#applicationName
   */
  readonly applicationName?: string;

  /**
   * @schema CodeDeployBatchGetApplicationRevisionsOutput#errorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema CodeDeployBatchGetApplicationRevisionsOutput#revisions
   */
  readonly revisions?: CodeDeployRevisionInfo[];

}

/**
 * Converts an object of type 'CodeDeployBatchGetApplicationRevisionsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployBatchGetApplicationRevisionsOutput(obj: CodeDeployBatchGetApplicationRevisionsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'applicationName': obj.applicationName,
    'errorMessage': obj.errorMessage,
    'revisions': obj.revisions?.map(y => toJson_CodeDeployRevisionInfo(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployBatchGetApplicationsInput
 */
export interface CodeDeployBatchGetApplicationsInput {
  /**
   * @schema CodeDeployBatchGetApplicationsInput#applicationNames
   */
  readonly applicationNames: string[];

}

/**
 * Converts an object of type 'CodeDeployBatchGetApplicationsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployBatchGetApplicationsInput(obj: CodeDeployBatchGetApplicationsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'applicationNames': obj.applicationNames?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployBatchGetApplicationsOutput
 */
export interface CodeDeployBatchGetApplicationsOutput {
  /**
   * @schema CodeDeployBatchGetApplicationsOutput#applicationsInfo
   */
  readonly applicationsInfo?: CodeDeployApplicationInfo[];

}

/**
 * Converts an object of type 'CodeDeployBatchGetApplicationsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployBatchGetApplicationsOutput(obj: CodeDeployBatchGetApplicationsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'applicationsInfo': obj.applicationsInfo?.map(y => toJson_CodeDeployApplicationInfo(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployBatchGetDeploymentGroupsInput
 */
export interface CodeDeployBatchGetDeploymentGroupsInput {
  /**
   * @schema CodeDeployBatchGetDeploymentGroupsInput#applicationName
   */
  readonly applicationName: string;

  /**
   * @schema CodeDeployBatchGetDeploymentGroupsInput#deploymentGroupNames
   */
  readonly deploymentGroupNames: string[];

}

/**
 * Converts an object of type 'CodeDeployBatchGetDeploymentGroupsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployBatchGetDeploymentGroupsInput(obj: CodeDeployBatchGetDeploymentGroupsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'applicationName': obj.applicationName,
    'deploymentGroupNames': obj.deploymentGroupNames?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployBatchGetDeploymentGroupsOutput
 */
export interface CodeDeployBatchGetDeploymentGroupsOutput {
  /**
   * @schema CodeDeployBatchGetDeploymentGroupsOutput#deploymentGroupsInfo
   */
  readonly deploymentGroupsInfo?: CodeDeployDeploymentGroupInfo[];

  /**
   * @schema CodeDeployBatchGetDeploymentGroupsOutput#errorMessage
   */
  readonly errorMessage?: string;

}

/**
 * Converts an object of type 'CodeDeployBatchGetDeploymentGroupsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployBatchGetDeploymentGroupsOutput(obj: CodeDeployBatchGetDeploymentGroupsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deploymentGroupsInfo': obj.deploymentGroupsInfo?.map(y => toJson_CodeDeployDeploymentGroupInfo(y)),
    'errorMessage': obj.errorMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployBatchGetDeploymentInstancesInput
 */
export interface CodeDeployBatchGetDeploymentInstancesInput {
  /**
   * @schema CodeDeployBatchGetDeploymentInstancesInput#deploymentId
   */
  readonly deploymentId: string;

  /**
   * @schema CodeDeployBatchGetDeploymentInstancesInput#instanceIds
   */
  readonly instanceIds: string[];

}

/**
 * Converts an object of type 'CodeDeployBatchGetDeploymentInstancesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployBatchGetDeploymentInstancesInput(obj: CodeDeployBatchGetDeploymentInstancesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deploymentId': obj.deploymentId,
    'instanceIds': obj.instanceIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployBatchGetDeploymentInstancesOutput
 */
export interface CodeDeployBatchGetDeploymentInstancesOutput {
  /**
   * @schema CodeDeployBatchGetDeploymentInstancesOutput#instancesSummary
   */
  readonly instancesSummary?: CodeDeployInstanceSummary[];

  /**
   * @schema CodeDeployBatchGetDeploymentInstancesOutput#errorMessage
   */
  readonly errorMessage?: string;

}

/**
 * Converts an object of type 'CodeDeployBatchGetDeploymentInstancesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployBatchGetDeploymentInstancesOutput(obj: CodeDeployBatchGetDeploymentInstancesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'instancesSummary': obj.instancesSummary?.map(y => toJson_CodeDeployInstanceSummary(y)),
    'errorMessage': obj.errorMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployBatchGetDeploymentTargetsInput
 */
export interface CodeDeployBatchGetDeploymentTargetsInput {
  /**
   * @schema CodeDeployBatchGetDeploymentTargetsInput#deploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema CodeDeployBatchGetDeploymentTargetsInput#targetIds
   */
  readonly targetIds?: string[];

}

/**
 * Converts an object of type 'CodeDeployBatchGetDeploymentTargetsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployBatchGetDeploymentTargetsInput(obj: CodeDeployBatchGetDeploymentTargetsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deploymentId': obj.deploymentId,
    'targetIds': obj.targetIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployBatchGetDeploymentTargetsOutput
 */
export interface CodeDeployBatchGetDeploymentTargetsOutput {
  /**
   * @schema CodeDeployBatchGetDeploymentTargetsOutput#deploymentTargets
   */
  readonly deploymentTargets?: CodeDeployDeploymentTarget[];

}

/**
 * Converts an object of type 'CodeDeployBatchGetDeploymentTargetsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployBatchGetDeploymentTargetsOutput(obj: CodeDeployBatchGetDeploymentTargetsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deploymentTargets': obj.deploymentTargets?.map(y => toJson_CodeDeployDeploymentTarget(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployBatchGetDeploymentsInput
 */
export interface CodeDeployBatchGetDeploymentsInput {
  /**
   * @schema CodeDeployBatchGetDeploymentsInput#deploymentIds
   */
  readonly deploymentIds: string[];

}

/**
 * Converts an object of type 'CodeDeployBatchGetDeploymentsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployBatchGetDeploymentsInput(obj: CodeDeployBatchGetDeploymentsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deploymentIds': obj.deploymentIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployBatchGetDeploymentsOutput
 */
export interface CodeDeployBatchGetDeploymentsOutput {
  /**
   * @schema CodeDeployBatchGetDeploymentsOutput#deploymentsInfo
   */
  readonly deploymentsInfo?: CodeDeployDeploymentInfo[];

}

/**
 * Converts an object of type 'CodeDeployBatchGetDeploymentsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployBatchGetDeploymentsOutput(obj: CodeDeployBatchGetDeploymentsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deploymentsInfo': obj.deploymentsInfo?.map(y => toJson_CodeDeployDeploymentInfo(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployBatchGetOnPremisesInstancesInput
 */
export interface CodeDeployBatchGetOnPremisesInstancesInput {
  /**
   * @schema CodeDeployBatchGetOnPremisesInstancesInput#instanceNames
   */
  readonly instanceNames: string[];

}

/**
 * Converts an object of type 'CodeDeployBatchGetOnPremisesInstancesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployBatchGetOnPremisesInstancesInput(obj: CodeDeployBatchGetOnPremisesInstancesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'instanceNames': obj.instanceNames?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployBatchGetOnPremisesInstancesOutput
 */
export interface CodeDeployBatchGetOnPremisesInstancesOutput {
  /**
   * @schema CodeDeployBatchGetOnPremisesInstancesOutput#instanceInfos
   */
  readonly instanceInfos?: CodeDeployInstanceInfo[];

}

/**
 * Converts an object of type 'CodeDeployBatchGetOnPremisesInstancesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployBatchGetOnPremisesInstancesOutput(obj: CodeDeployBatchGetOnPremisesInstancesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'instanceInfos': obj.instanceInfos?.map(y => toJson_CodeDeployInstanceInfo(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployContinueDeploymentInput
 */
export interface CodeDeployContinueDeploymentInput {
  /**
   * @schema CodeDeployContinueDeploymentInput#deploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema CodeDeployContinueDeploymentInput#deploymentWaitType
   */
  readonly deploymentWaitType?: string;

}

/**
 * Converts an object of type 'CodeDeployContinueDeploymentInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployContinueDeploymentInput(obj: CodeDeployContinueDeploymentInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deploymentId': obj.deploymentId,
    'deploymentWaitType': obj.deploymentWaitType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployCreateApplicationInput
 */
export interface CodeDeployCreateApplicationInput {
  /**
   * @schema CodeDeployCreateApplicationInput#applicationName
   */
  readonly applicationName: string;

  /**
   * @schema CodeDeployCreateApplicationInput#computePlatform
   */
  readonly computePlatform?: string;

  /**
   * @schema CodeDeployCreateApplicationInput#tags
   */
  readonly tags?: CodeDeployTag[];

}

/**
 * Converts an object of type 'CodeDeployCreateApplicationInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployCreateApplicationInput(obj: CodeDeployCreateApplicationInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'applicationName': obj.applicationName,
    'computePlatform': obj.computePlatform,
    'tags': obj.tags?.map(y => toJson_CodeDeployTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployCreateApplicationOutput
 */
export interface CodeDeployCreateApplicationOutput {
  /**
   * @schema CodeDeployCreateApplicationOutput#applicationId
   */
  readonly applicationId?: string;

}

/**
 * Converts an object of type 'CodeDeployCreateApplicationOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployCreateApplicationOutput(obj: CodeDeployCreateApplicationOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'applicationId': obj.applicationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployCreateDeploymentInput
 */
export interface CodeDeployCreateDeploymentInput {
  /**
   * @schema CodeDeployCreateDeploymentInput#applicationName
   */
  readonly applicationName: string;

  /**
   * @schema CodeDeployCreateDeploymentInput#deploymentGroupName
   */
  readonly deploymentGroupName?: string;

  /**
   * @schema CodeDeployCreateDeploymentInput#revision
   */
  readonly revision?: CodeDeployRevisionLocation;

  /**
   * @schema CodeDeployCreateDeploymentInput#deploymentConfigName
   */
  readonly deploymentConfigName?: string;

  /**
   * @schema CodeDeployCreateDeploymentInput#description
   */
  readonly description?: string;

  /**
   * @schema CodeDeployCreateDeploymentInput#ignoreApplicationStopFailures
   */
  readonly ignoreApplicationStopFailures?: boolean;

  /**
   * @schema CodeDeployCreateDeploymentInput#targetInstances
   */
  readonly targetInstances?: CodeDeployTargetInstances;

  /**
   * @schema CodeDeployCreateDeploymentInput#autoRollbackConfiguration
   */
  readonly autoRollbackConfiguration?: CodeDeployAutoRollbackConfiguration;

  /**
   * @schema CodeDeployCreateDeploymentInput#updateOutdatedInstancesOnly
   */
  readonly updateOutdatedInstancesOnly?: boolean;

  /**
   * @schema CodeDeployCreateDeploymentInput#fileExistsBehavior
   */
  readonly fileExistsBehavior?: string;

}

/**
 * Converts an object of type 'CodeDeployCreateDeploymentInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployCreateDeploymentInput(obj: CodeDeployCreateDeploymentInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'applicationName': obj.applicationName,
    'deploymentGroupName': obj.deploymentGroupName,
    'revision': toJson_CodeDeployRevisionLocation(obj.revision),
    'deploymentConfigName': obj.deploymentConfigName,
    'description': obj.description,
    'ignoreApplicationStopFailures': obj.ignoreApplicationStopFailures,
    'targetInstances': toJson_CodeDeployTargetInstances(obj.targetInstances),
    'autoRollbackConfiguration': toJson_CodeDeployAutoRollbackConfiguration(obj.autoRollbackConfiguration),
    'updateOutdatedInstancesOnly': obj.updateOutdatedInstancesOnly,
    'fileExistsBehavior': obj.fileExistsBehavior,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployCreateDeploymentOutput
 */
export interface CodeDeployCreateDeploymentOutput {
  /**
   * @schema CodeDeployCreateDeploymentOutput#deploymentId
   */
  readonly deploymentId?: string;

}

/**
 * Converts an object of type 'CodeDeployCreateDeploymentOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployCreateDeploymentOutput(obj: CodeDeployCreateDeploymentOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deploymentId': obj.deploymentId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployCreateDeploymentConfigInput
 */
export interface CodeDeployCreateDeploymentConfigInput {
  /**
   * @schema CodeDeployCreateDeploymentConfigInput#deploymentConfigName
   */
  readonly deploymentConfigName: string;

  /**
   * @schema CodeDeployCreateDeploymentConfigInput#minimumHealthyHosts
   */
  readonly minimumHealthyHosts?: CodeDeployMinimumHealthyHosts;

  /**
   * @schema CodeDeployCreateDeploymentConfigInput#trafficRoutingConfig
   */
  readonly trafficRoutingConfig?: CodeDeployTrafficRoutingConfig;

  /**
   * @schema CodeDeployCreateDeploymentConfigInput#computePlatform
   */
  readonly computePlatform?: string;

}

/**
 * Converts an object of type 'CodeDeployCreateDeploymentConfigInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployCreateDeploymentConfigInput(obj: CodeDeployCreateDeploymentConfigInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deploymentConfigName': obj.deploymentConfigName,
    'minimumHealthyHosts': toJson_CodeDeployMinimumHealthyHosts(obj.minimumHealthyHosts),
    'trafficRoutingConfig': toJson_CodeDeployTrafficRoutingConfig(obj.trafficRoutingConfig),
    'computePlatform': obj.computePlatform,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployCreateDeploymentConfigOutput
 */
export interface CodeDeployCreateDeploymentConfigOutput {
  /**
   * @schema CodeDeployCreateDeploymentConfigOutput#deploymentConfigId
   */
  readonly deploymentConfigId?: string;

}

/**
 * Converts an object of type 'CodeDeployCreateDeploymentConfigOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployCreateDeploymentConfigOutput(obj: CodeDeployCreateDeploymentConfigOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deploymentConfigId': obj.deploymentConfigId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployCreateDeploymentGroupInput
 */
export interface CodeDeployCreateDeploymentGroupInput {
  /**
   * @schema CodeDeployCreateDeploymentGroupInput#applicationName
   */
  readonly applicationName: string;

  /**
   * @schema CodeDeployCreateDeploymentGroupInput#deploymentGroupName
   */
  readonly deploymentGroupName: string;

  /**
   * @schema CodeDeployCreateDeploymentGroupInput#deploymentConfigName
   */
  readonly deploymentConfigName?: string;

  /**
   * @schema CodeDeployCreateDeploymentGroupInput#ec2TagFilters
   */
  readonly ec2TagFilters?: CodeDeployEc2TagFilter[];

  /**
   * @schema CodeDeployCreateDeploymentGroupInput#onPremisesInstanceTagFilters
   */
  readonly onPremisesInstanceTagFilters?: CodeDeployTagFilter[];

  /**
   * @schema CodeDeployCreateDeploymentGroupInput#autoScalingGroups
   */
  readonly autoScalingGroups?: string[];

  /**
   * @schema CodeDeployCreateDeploymentGroupInput#serviceRoleArn
   */
  readonly serviceRoleArn: string;

  /**
   * @schema CodeDeployCreateDeploymentGroupInput#triggerConfigurations
   */
  readonly triggerConfigurations?: CodeDeployTriggerConfig[];

  /**
   * @schema CodeDeployCreateDeploymentGroupInput#alarmConfiguration
   */
  readonly alarmConfiguration?: CodeDeployAlarmConfiguration;

  /**
   * @schema CodeDeployCreateDeploymentGroupInput#autoRollbackConfiguration
   */
  readonly autoRollbackConfiguration?: CodeDeployAutoRollbackConfiguration;

  /**
   * @schema CodeDeployCreateDeploymentGroupInput#outdatedInstancesStrategy
   */
  readonly outdatedInstancesStrategy?: string;

  /**
   * @schema CodeDeployCreateDeploymentGroupInput#deploymentStyle
   */
  readonly deploymentStyle?: CodeDeployDeploymentStyle;

  /**
   * @schema CodeDeployCreateDeploymentGroupInput#blueGreenDeploymentConfiguration
   */
  readonly blueGreenDeploymentConfiguration?: CodeDeployBlueGreenDeploymentConfiguration;

  /**
   * @schema CodeDeployCreateDeploymentGroupInput#loadBalancerInfo
   */
  readonly loadBalancerInfo?: CodeDeployLoadBalancerInfo;

  /**
   * @schema CodeDeployCreateDeploymentGroupInput#ec2TagSet
   */
  readonly ec2TagSet?: CodeDeployEc2TagSet;

  /**
   * @schema CodeDeployCreateDeploymentGroupInput#ecsServices
   */
  readonly ecsServices?: CodeDeployEcsService[];

  /**
   * @schema CodeDeployCreateDeploymentGroupInput#onPremisesTagSet
   */
  readonly onPremisesTagSet?: CodeDeployOnPremisesTagSet;

  /**
   * @schema CodeDeployCreateDeploymentGroupInput#tags
   */
  readonly tags?: CodeDeployTag[];

}

/**
 * Converts an object of type 'CodeDeployCreateDeploymentGroupInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployCreateDeploymentGroupInput(obj: CodeDeployCreateDeploymentGroupInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'applicationName': obj.applicationName,
    'deploymentGroupName': obj.deploymentGroupName,
    'deploymentConfigName': obj.deploymentConfigName,
    'ec2TagFilters': obj.ec2TagFilters?.map(y => toJson_CodeDeployEc2TagFilter(y)),
    'onPremisesInstanceTagFilters': obj.onPremisesInstanceTagFilters?.map(y => toJson_CodeDeployTagFilter(y)),
    'autoScalingGroups': obj.autoScalingGroups?.map(y => y),
    'serviceRoleArn': obj.serviceRoleArn,
    'triggerConfigurations': obj.triggerConfigurations?.map(y => toJson_CodeDeployTriggerConfig(y)),
    'alarmConfiguration': toJson_CodeDeployAlarmConfiguration(obj.alarmConfiguration),
    'autoRollbackConfiguration': toJson_CodeDeployAutoRollbackConfiguration(obj.autoRollbackConfiguration),
    'outdatedInstancesStrategy': obj.outdatedInstancesStrategy,
    'deploymentStyle': toJson_CodeDeployDeploymentStyle(obj.deploymentStyle),
    'blueGreenDeploymentConfiguration': toJson_CodeDeployBlueGreenDeploymentConfiguration(obj.blueGreenDeploymentConfiguration),
    'loadBalancerInfo': toJson_CodeDeployLoadBalancerInfo(obj.loadBalancerInfo),
    'ec2TagSet': toJson_CodeDeployEc2TagSet(obj.ec2TagSet),
    'ecsServices': obj.ecsServices?.map(y => toJson_CodeDeployEcsService(y)),
    'onPremisesTagSet': toJson_CodeDeployOnPremisesTagSet(obj.onPremisesTagSet),
    'tags': obj.tags?.map(y => toJson_CodeDeployTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployCreateDeploymentGroupOutput
 */
export interface CodeDeployCreateDeploymentGroupOutput {
  /**
   * @schema CodeDeployCreateDeploymentGroupOutput#deploymentGroupId
   */
  readonly deploymentGroupId?: string;

}

/**
 * Converts an object of type 'CodeDeployCreateDeploymentGroupOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployCreateDeploymentGroupOutput(obj: CodeDeployCreateDeploymentGroupOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deploymentGroupId': obj.deploymentGroupId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployDeleteApplicationInput
 */
export interface CodeDeployDeleteApplicationInput {
  /**
   * @schema CodeDeployDeleteApplicationInput#applicationName
   */
  readonly applicationName: string;

}

/**
 * Converts an object of type 'CodeDeployDeleteApplicationInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployDeleteApplicationInput(obj: CodeDeployDeleteApplicationInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'applicationName': obj.applicationName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployDeleteDeploymentConfigInput
 */
export interface CodeDeployDeleteDeploymentConfigInput {
  /**
   * @schema CodeDeployDeleteDeploymentConfigInput#deploymentConfigName
   */
  readonly deploymentConfigName: string;

}

/**
 * Converts an object of type 'CodeDeployDeleteDeploymentConfigInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployDeleteDeploymentConfigInput(obj: CodeDeployDeleteDeploymentConfigInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deploymentConfigName': obj.deploymentConfigName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployDeleteDeploymentGroupInput
 */
export interface CodeDeployDeleteDeploymentGroupInput {
  /**
   * @schema CodeDeployDeleteDeploymentGroupInput#applicationName
   */
  readonly applicationName: string;

  /**
   * @schema CodeDeployDeleteDeploymentGroupInput#deploymentGroupName
   */
  readonly deploymentGroupName: string;

}

/**
 * Converts an object of type 'CodeDeployDeleteDeploymentGroupInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployDeleteDeploymentGroupInput(obj: CodeDeployDeleteDeploymentGroupInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'applicationName': obj.applicationName,
    'deploymentGroupName': obj.deploymentGroupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployDeleteDeploymentGroupOutput
 */
export interface CodeDeployDeleteDeploymentGroupOutput {
  /**
   * @schema CodeDeployDeleteDeploymentGroupOutput#hooksNotCleanedUp
   */
  readonly hooksNotCleanedUp?: CodeDeployAutoScalingGroup[];

}

/**
 * Converts an object of type 'CodeDeployDeleteDeploymentGroupOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployDeleteDeploymentGroupOutput(obj: CodeDeployDeleteDeploymentGroupOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'hooksNotCleanedUp': obj.hooksNotCleanedUp?.map(y => toJson_CodeDeployAutoScalingGroup(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployDeleteGitHubAccountTokenInput
 */
export interface CodeDeployDeleteGitHubAccountTokenInput {
  /**
   * @schema CodeDeployDeleteGitHubAccountTokenInput#tokenName
   */
  readonly tokenName?: string;

}

/**
 * Converts an object of type 'CodeDeployDeleteGitHubAccountTokenInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployDeleteGitHubAccountTokenInput(obj: CodeDeployDeleteGitHubAccountTokenInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tokenName': obj.tokenName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployDeleteGitHubAccountTokenOutput
 */
export interface CodeDeployDeleteGitHubAccountTokenOutput {
  /**
   * @schema CodeDeployDeleteGitHubAccountTokenOutput#tokenName
   */
  readonly tokenName?: string;

}

/**
 * Converts an object of type 'CodeDeployDeleteGitHubAccountTokenOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployDeleteGitHubAccountTokenOutput(obj: CodeDeployDeleteGitHubAccountTokenOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tokenName': obj.tokenName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployDeleteResourcesByExternalIdInput
 */
export interface CodeDeployDeleteResourcesByExternalIdInput {
  /**
   * @schema CodeDeployDeleteResourcesByExternalIdInput#externalId
   */
  readonly externalId?: string;

}

/**
 * Converts an object of type 'CodeDeployDeleteResourcesByExternalIdInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployDeleteResourcesByExternalIdInput(obj: CodeDeployDeleteResourcesByExternalIdInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'externalId': obj.externalId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployDeleteResourcesByExternalIdOutput
 */
export interface CodeDeployDeleteResourcesByExternalIdOutput {
}

/**
 * Converts an object of type 'CodeDeployDeleteResourcesByExternalIdOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployDeleteResourcesByExternalIdOutput(obj: CodeDeployDeleteResourcesByExternalIdOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployDeregisterOnPremisesInstanceInput
 */
export interface CodeDeployDeregisterOnPremisesInstanceInput {
  /**
   * @schema CodeDeployDeregisterOnPremisesInstanceInput#instanceName
   */
  readonly instanceName: string;

}

/**
 * Converts an object of type 'CodeDeployDeregisterOnPremisesInstanceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployDeregisterOnPremisesInstanceInput(obj: CodeDeployDeregisterOnPremisesInstanceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'instanceName': obj.instanceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployGetApplicationInput
 */
export interface CodeDeployGetApplicationInput {
  /**
   * @schema CodeDeployGetApplicationInput#applicationName
   */
  readonly applicationName: string;

}

/**
 * Converts an object of type 'CodeDeployGetApplicationInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployGetApplicationInput(obj: CodeDeployGetApplicationInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'applicationName': obj.applicationName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployGetApplicationOutput
 */
export interface CodeDeployGetApplicationOutput {
  /**
   * @schema CodeDeployGetApplicationOutput#application
   */
  readonly application?: CodeDeployApplicationInfo;

}

/**
 * Converts an object of type 'CodeDeployGetApplicationOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployGetApplicationOutput(obj: CodeDeployGetApplicationOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'application': toJson_CodeDeployApplicationInfo(obj.application),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployGetApplicationRevisionInput
 */
export interface CodeDeployGetApplicationRevisionInput {
  /**
   * @schema CodeDeployGetApplicationRevisionInput#applicationName
   */
  readonly applicationName: string;

  /**
   * @schema CodeDeployGetApplicationRevisionInput#revision
   */
  readonly revision: CodeDeployRevisionLocation;

}

/**
 * Converts an object of type 'CodeDeployGetApplicationRevisionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployGetApplicationRevisionInput(obj: CodeDeployGetApplicationRevisionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'applicationName': obj.applicationName,
    'revision': toJson_CodeDeployRevisionLocation(obj.revision),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployGetApplicationRevisionOutput
 */
export interface CodeDeployGetApplicationRevisionOutput {
  /**
   * @schema CodeDeployGetApplicationRevisionOutput#applicationName
   */
  readonly applicationName?: string;

  /**
   * @schema CodeDeployGetApplicationRevisionOutput#revision
   */
  readonly revision?: CodeDeployRevisionLocation;

  /**
   * @schema CodeDeployGetApplicationRevisionOutput#revisionInfo
   */
  readonly revisionInfo?: CodeDeployGenericRevisionInfo;

}

/**
 * Converts an object of type 'CodeDeployGetApplicationRevisionOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployGetApplicationRevisionOutput(obj: CodeDeployGetApplicationRevisionOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'applicationName': obj.applicationName,
    'revision': toJson_CodeDeployRevisionLocation(obj.revision),
    'revisionInfo': toJson_CodeDeployGenericRevisionInfo(obj.revisionInfo),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployGetDeploymentInput
 */
export interface CodeDeployGetDeploymentInput {
  /**
   * @schema CodeDeployGetDeploymentInput#deploymentId
   */
  readonly deploymentId: string;

}

/**
 * Converts an object of type 'CodeDeployGetDeploymentInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployGetDeploymentInput(obj: CodeDeployGetDeploymentInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deploymentId': obj.deploymentId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployGetDeploymentOutput
 */
export interface CodeDeployGetDeploymentOutput {
  /**
   * @schema CodeDeployGetDeploymentOutput#deploymentInfo
   */
  readonly deploymentInfo?: CodeDeployDeploymentInfo;

}

/**
 * Converts an object of type 'CodeDeployGetDeploymentOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployGetDeploymentOutput(obj: CodeDeployGetDeploymentOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deploymentInfo': toJson_CodeDeployDeploymentInfo(obj.deploymentInfo),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployGetDeploymentConfigInput
 */
export interface CodeDeployGetDeploymentConfigInput {
  /**
   * @schema CodeDeployGetDeploymentConfigInput#deploymentConfigName
   */
  readonly deploymentConfigName: string;

}

/**
 * Converts an object of type 'CodeDeployGetDeploymentConfigInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployGetDeploymentConfigInput(obj: CodeDeployGetDeploymentConfigInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deploymentConfigName': obj.deploymentConfigName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployGetDeploymentConfigOutput
 */
export interface CodeDeployGetDeploymentConfigOutput {
  /**
   * @schema CodeDeployGetDeploymentConfigOutput#deploymentConfigInfo
   */
  readonly deploymentConfigInfo?: CodeDeployDeploymentConfigInfo;

}

/**
 * Converts an object of type 'CodeDeployGetDeploymentConfigOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployGetDeploymentConfigOutput(obj: CodeDeployGetDeploymentConfigOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deploymentConfigInfo': toJson_CodeDeployDeploymentConfigInfo(obj.deploymentConfigInfo),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployGetDeploymentGroupInput
 */
export interface CodeDeployGetDeploymentGroupInput {
  /**
   * @schema CodeDeployGetDeploymentGroupInput#applicationName
   */
  readonly applicationName: string;

  /**
   * @schema CodeDeployGetDeploymentGroupInput#deploymentGroupName
   */
  readonly deploymentGroupName: string;

}

/**
 * Converts an object of type 'CodeDeployGetDeploymentGroupInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployGetDeploymentGroupInput(obj: CodeDeployGetDeploymentGroupInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'applicationName': obj.applicationName,
    'deploymentGroupName': obj.deploymentGroupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployGetDeploymentGroupOutput
 */
export interface CodeDeployGetDeploymentGroupOutput {
  /**
   * @schema CodeDeployGetDeploymentGroupOutput#deploymentGroupInfo
   */
  readonly deploymentGroupInfo?: CodeDeployDeploymentGroupInfo;

}

/**
 * Converts an object of type 'CodeDeployGetDeploymentGroupOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployGetDeploymentGroupOutput(obj: CodeDeployGetDeploymentGroupOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deploymentGroupInfo': toJson_CodeDeployDeploymentGroupInfo(obj.deploymentGroupInfo),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployGetDeploymentInstanceInput
 */
export interface CodeDeployGetDeploymentInstanceInput {
  /**
   * @schema CodeDeployGetDeploymentInstanceInput#deploymentId
   */
  readonly deploymentId: string;

  /**
   * @schema CodeDeployGetDeploymentInstanceInput#instanceId
   */
  readonly instanceId: string;

}

/**
 * Converts an object of type 'CodeDeployGetDeploymentInstanceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployGetDeploymentInstanceInput(obj: CodeDeployGetDeploymentInstanceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deploymentId': obj.deploymentId,
    'instanceId': obj.instanceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployGetDeploymentInstanceOutput
 */
export interface CodeDeployGetDeploymentInstanceOutput {
  /**
   * @schema CodeDeployGetDeploymentInstanceOutput#instanceSummary
   */
  readonly instanceSummary?: CodeDeployInstanceSummary;

}

/**
 * Converts an object of type 'CodeDeployGetDeploymentInstanceOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployGetDeploymentInstanceOutput(obj: CodeDeployGetDeploymentInstanceOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'instanceSummary': toJson_CodeDeployInstanceSummary(obj.instanceSummary),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployGetDeploymentTargetInput
 */
export interface CodeDeployGetDeploymentTargetInput {
  /**
   * @schema CodeDeployGetDeploymentTargetInput#deploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema CodeDeployGetDeploymentTargetInput#targetId
   */
  readonly targetId?: string;

}

/**
 * Converts an object of type 'CodeDeployGetDeploymentTargetInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployGetDeploymentTargetInput(obj: CodeDeployGetDeploymentTargetInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deploymentId': obj.deploymentId,
    'targetId': obj.targetId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployGetDeploymentTargetOutput
 */
export interface CodeDeployGetDeploymentTargetOutput {
  /**
   * @schema CodeDeployGetDeploymentTargetOutput#deploymentTarget
   */
  readonly deploymentTarget?: CodeDeployDeploymentTarget;

}

/**
 * Converts an object of type 'CodeDeployGetDeploymentTargetOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployGetDeploymentTargetOutput(obj: CodeDeployGetDeploymentTargetOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deploymentTarget': toJson_CodeDeployDeploymentTarget(obj.deploymentTarget),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployGetOnPremisesInstanceInput
 */
export interface CodeDeployGetOnPremisesInstanceInput {
  /**
   * @schema CodeDeployGetOnPremisesInstanceInput#instanceName
   */
  readonly instanceName: string;

}

/**
 * Converts an object of type 'CodeDeployGetOnPremisesInstanceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployGetOnPremisesInstanceInput(obj: CodeDeployGetOnPremisesInstanceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'instanceName': obj.instanceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployGetOnPremisesInstanceOutput
 */
export interface CodeDeployGetOnPremisesInstanceOutput {
  /**
   * @schema CodeDeployGetOnPremisesInstanceOutput#instanceInfo
   */
  readonly instanceInfo?: CodeDeployInstanceInfo;

}

/**
 * Converts an object of type 'CodeDeployGetOnPremisesInstanceOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployGetOnPremisesInstanceOutput(obj: CodeDeployGetOnPremisesInstanceOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'instanceInfo': toJson_CodeDeployInstanceInfo(obj.instanceInfo),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployListApplicationRevisionsInput
 */
export interface CodeDeployListApplicationRevisionsInput {
  /**
   * @schema CodeDeployListApplicationRevisionsInput#applicationName
   */
  readonly applicationName: string;

  /**
   * @schema CodeDeployListApplicationRevisionsInput#sortBy
   */
  readonly sortBy?: string;

  /**
   * @schema CodeDeployListApplicationRevisionsInput#sortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema CodeDeployListApplicationRevisionsInput#s3Bucket
   */
  readonly s3Bucket?: string;

  /**
   * @schema CodeDeployListApplicationRevisionsInput#s3KeyPrefix
   */
  readonly s3KeyPrefix?: string;

  /**
   * @schema CodeDeployListApplicationRevisionsInput#deployed
   */
  readonly deployed?: string;

  /**
   * @schema CodeDeployListApplicationRevisionsInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeDeployListApplicationRevisionsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployListApplicationRevisionsInput(obj: CodeDeployListApplicationRevisionsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'applicationName': obj.applicationName,
    'sortBy': obj.sortBy,
    'sortOrder': obj.sortOrder,
    's3Bucket': obj.s3Bucket,
    's3KeyPrefix': obj.s3KeyPrefix,
    'deployed': obj.deployed,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployListApplicationRevisionsOutput
 */
export interface CodeDeployListApplicationRevisionsOutput {
  /**
   * @schema CodeDeployListApplicationRevisionsOutput#revisions
   */
  readonly revisions?: CodeDeployRevisionLocation[];

  /**
   * @schema CodeDeployListApplicationRevisionsOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeDeployListApplicationRevisionsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployListApplicationRevisionsOutput(obj: CodeDeployListApplicationRevisionsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'revisions': obj.revisions?.map(y => toJson_CodeDeployRevisionLocation(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployListApplicationsInput
 */
export interface CodeDeployListApplicationsInput {
  /**
   * @schema CodeDeployListApplicationsInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeDeployListApplicationsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployListApplicationsInput(obj: CodeDeployListApplicationsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployListApplicationsOutput
 */
export interface CodeDeployListApplicationsOutput {
  /**
   * @schema CodeDeployListApplicationsOutput#applications
   */
  readonly applications?: string[];

  /**
   * @schema CodeDeployListApplicationsOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeDeployListApplicationsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployListApplicationsOutput(obj: CodeDeployListApplicationsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'applications': obj.applications?.map(y => y),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployListDeploymentConfigsInput
 */
export interface CodeDeployListDeploymentConfigsInput {
  /**
   * @schema CodeDeployListDeploymentConfigsInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeDeployListDeploymentConfigsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployListDeploymentConfigsInput(obj: CodeDeployListDeploymentConfigsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployListDeploymentConfigsOutput
 */
export interface CodeDeployListDeploymentConfigsOutput {
  /**
   * @schema CodeDeployListDeploymentConfigsOutput#deploymentConfigsList
   */
  readonly deploymentConfigsList?: string[];

  /**
   * @schema CodeDeployListDeploymentConfigsOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeDeployListDeploymentConfigsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployListDeploymentConfigsOutput(obj: CodeDeployListDeploymentConfigsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deploymentConfigsList': obj.deploymentConfigsList?.map(y => y),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployListDeploymentGroupsInput
 */
export interface CodeDeployListDeploymentGroupsInput {
  /**
   * @schema CodeDeployListDeploymentGroupsInput#applicationName
   */
  readonly applicationName: string;

  /**
   * @schema CodeDeployListDeploymentGroupsInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeDeployListDeploymentGroupsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployListDeploymentGroupsInput(obj: CodeDeployListDeploymentGroupsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'applicationName': obj.applicationName,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployListDeploymentGroupsOutput
 */
export interface CodeDeployListDeploymentGroupsOutput {
  /**
   * @schema CodeDeployListDeploymentGroupsOutput#applicationName
   */
  readonly applicationName?: string;

  /**
   * @schema CodeDeployListDeploymentGroupsOutput#deploymentGroups
   */
  readonly deploymentGroups?: string[];

  /**
   * @schema CodeDeployListDeploymentGroupsOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeDeployListDeploymentGroupsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployListDeploymentGroupsOutput(obj: CodeDeployListDeploymentGroupsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'applicationName': obj.applicationName,
    'deploymentGroups': obj.deploymentGroups?.map(y => y),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployListDeploymentInstancesInput
 */
export interface CodeDeployListDeploymentInstancesInput {
  /**
   * @schema CodeDeployListDeploymentInstancesInput#deploymentId
   */
  readonly deploymentId: string;

  /**
   * @schema CodeDeployListDeploymentInstancesInput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodeDeployListDeploymentInstancesInput#instanceStatusFilter
   */
  readonly instanceStatusFilter?: string[];

  /**
   * @schema CodeDeployListDeploymentInstancesInput#instanceTypeFilter
   */
  readonly instanceTypeFilter?: string[];

}

/**
 * Converts an object of type 'CodeDeployListDeploymentInstancesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployListDeploymentInstancesInput(obj: CodeDeployListDeploymentInstancesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deploymentId': obj.deploymentId,
    'nextToken': obj.nextToken,
    'instanceStatusFilter': obj.instanceStatusFilter?.map(y => y),
    'instanceTypeFilter': obj.instanceTypeFilter?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployListDeploymentInstancesOutput
 */
export interface CodeDeployListDeploymentInstancesOutput {
  /**
   * @schema CodeDeployListDeploymentInstancesOutput#instancesList
   */
  readonly instancesList?: string[];

  /**
   * @schema CodeDeployListDeploymentInstancesOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeDeployListDeploymentInstancesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployListDeploymentInstancesOutput(obj: CodeDeployListDeploymentInstancesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'instancesList': obj.instancesList?.map(y => y),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployListDeploymentTargetsInput
 */
export interface CodeDeployListDeploymentTargetsInput {
  /**
   * @schema CodeDeployListDeploymentTargetsInput#deploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema CodeDeployListDeploymentTargetsInput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodeDeployListDeploymentTargetsInput#targetFilters
   */
  readonly targetFilters?: { [key: string]: string[] };

}

/**
 * Converts an object of type 'CodeDeployListDeploymentTargetsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployListDeploymentTargetsInput(obj: CodeDeployListDeploymentTargetsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deploymentId': obj.deploymentId,
    'nextToken': obj.nextToken,
    'targetFilters': ((obj.targetFilters) === undefined) ? undefined : (Object.entries(obj.targetFilters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => y) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployListDeploymentTargetsOutput
 */
export interface CodeDeployListDeploymentTargetsOutput {
  /**
   * @schema CodeDeployListDeploymentTargetsOutput#targetIds
   */
  readonly targetIds?: string[];

  /**
   * @schema CodeDeployListDeploymentTargetsOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeDeployListDeploymentTargetsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployListDeploymentTargetsOutput(obj: CodeDeployListDeploymentTargetsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'targetIds': obj.targetIds?.map(y => y),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployListDeploymentsInput
 */
export interface CodeDeployListDeploymentsInput {
  /**
   * @schema CodeDeployListDeploymentsInput#applicationName
   */
  readonly applicationName?: string;

  /**
   * @schema CodeDeployListDeploymentsInput#deploymentGroupName
   */
  readonly deploymentGroupName?: string;

  /**
   * @schema CodeDeployListDeploymentsInput#externalId
   */
  readonly externalId?: string;

  /**
   * @schema CodeDeployListDeploymentsInput#includeOnlyStatuses
   */
  readonly includeOnlyStatuses?: string[];

  /**
   * @schema CodeDeployListDeploymentsInput#createTimeRange
   */
  readonly createTimeRange?: CodeDeployTimeRange;

  /**
   * @schema CodeDeployListDeploymentsInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeDeployListDeploymentsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployListDeploymentsInput(obj: CodeDeployListDeploymentsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'applicationName': obj.applicationName,
    'deploymentGroupName': obj.deploymentGroupName,
    'externalId': obj.externalId,
    'includeOnlyStatuses': obj.includeOnlyStatuses?.map(y => y),
    'createTimeRange': toJson_CodeDeployTimeRange(obj.createTimeRange),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployListDeploymentsOutput
 */
export interface CodeDeployListDeploymentsOutput {
  /**
   * @schema CodeDeployListDeploymentsOutput#deployments
   */
  readonly deployments?: string[];

  /**
   * @schema CodeDeployListDeploymentsOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeDeployListDeploymentsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployListDeploymentsOutput(obj: CodeDeployListDeploymentsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deployments': obj.deployments?.map(y => y),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployListGitHubAccountTokenNamesInput
 */
export interface CodeDeployListGitHubAccountTokenNamesInput {
  /**
   * @schema CodeDeployListGitHubAccountTokenNamesInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeDeployListGitHubAccountTokenNamesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployListGitHubAccountTokenNamesInput(obj: CodeDeployListGitHubAccountTokenNamesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployListGitHubAccountTokenNamesOutput
 */
export interface CodeDeployListGitHubAccountTokenNamesOutput {
  /**
   * @schema CodeDeployListGitHubAccountTokenNamesOutput#tokenNameList
   */
  readonly tokenNameList?: string[];

  /**
   * @schema CodeDeployListGitHubAccountTokenNamesOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeDeployListGitHubAccountTokenNamesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployListGitHubAccountTokenNamesOutput(obj: CodeDeployListGitHubAccountTokenNamesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tokenNameList': obj.tokenNameList?.map(y => y),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployListOnPremisesInstancesInput
 */
export interface CodeDeployListOnPremisesInstancesInput {
  /**
   * @schema CodeDeployListOnPremisesInstancesInput#registrationStatus
   */
  readonly registrationStatus?: string;

  /**
   * @schema CodeDeployListOnPremisesInstancesInput#tagFilters
   */
  readonly tagFilters?: CodeDeployTagFilter[];

  /**
   * @schema CodeDeployListOnPremisesInstancesInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeDeployListOnPremisesInstancesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployListOnPremisesInstancesInput(obj: CodeDeployListOnPremisesInstancesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'registrationStatus': obj.registrationStatus,
    'tagFilters': obj.tagFilters?.map(y => toJson_CodeDeployTagFilter(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployListOnPremisesInstancesOutput
 */
export interface CodeDeployListOnPremisesInstancesOutput {
  /**
   * @schema CodeDeployListOnPremisesInstancesOutput#instanceNames
   */
  readonly instanceNames?: string[];

  /**
   * @schema CodeDeployListOnPremisesInstancesOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeDeployListOnPremisesInstancesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployListOnPremisesInstancesOutput(obj: CodeDeployListOnPremisesInstancesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'instanceNames': obj.instanceNames?.map(y => y),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployListTagsForResourceInput
 */
export interface CodeDeployListTagsForResourceInput {
  /**
   * @schema CodeDeployListTagsForResourceInput#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema CodeDeployListTagsForResourceInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeDeployListTagsForResourceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployListTagsForResourceInput(obj: CodeDeployListTagsForResourceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployListTagsForResourceOutput
 */
export interface CodeDeployListTagsForResourceOutput {
  /**
   * @schema CodeDeployListTagsForResourceOutput#Tags
   */
  readonly tags?: CodeDeployTag[];

  /**
   * @schema CodeDeployListTagsForResourceOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeDeployListTagsForResourceOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployListTagsForResourceOutput(obj: CodeDeployListTagsForResourceOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': obj.tags?.map(y => toJson_CodeDeployTag(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployPutLifecycleEventHookExecutionStatusInput
 */
export interface CodeDeployPutLifecycleEventHookExecutionStatusInput {
  /**
   * @schema CodeDeployPutLifecycleEventHookExecutionStatusInput#deploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema CodeDeployPutLifecycleEventHookExecutionStatusInput#lifecycleEventHookExecutionId
   */
  readonly lifecycleEventHookExecutionId?: string;

  /**
   * @schema CodeDeployPutLifecycleEventHookExecutionStatusInput#status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'CodeDeployPutLifecycleEventHookExecutionStatusInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployPutLifecycleEventHookExecutionStatusInput(obj: CodeDeployPutLifecycleEventHookExecutionStatusInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deploymentId': obj.deploymentId,
    'lifecycleEventHookExecutionId': obj.lifecycleEventHookExecutionId,
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployPutLifecycleEventHookExecutionStatusOutput
 */
export interface CodeDeployPutLifecycleEventHookExecutionStatusOutput {
  /**
   * @schema CodeDeployPutLifecycleEventHookExecutionStatusOutput#lifecycleEventHookExecutionId
   */
  readonly lifecycleEventHookExecutionId?: string;

}

/**
 * Converts an object of type 'CodeDeployPutLifecycleEventHookExecutionStatusOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployPutLifecycleEventHookExecutionStatusOutput(obj: CodeDeployPutLifecycleEventHookExecutionStatusOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'lifecycleEventHookExecutionId': obj.lifecycleEventHookExecutionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployRegisterApplicationRevisionInput
 */
export interface CodeDeployRegisterApplicationRevisionInput {
  /**
   * @schema CodeDeployRegisterApplicationRevisionInput#applicationName
   */
  readonly applicationName: string;

  /**
   * @schema CodeDeployRegisterApplicationRevisionInput#description
   */
  readonly description?: string;

  /**
   * @schema CodeDeployRegisterApplicationRevisionInput#revision
   */
  readonly revision: CodeDeployRevisionLocation;

}

/**
 * Converts an object of type 'CodeDeployRegisterApplicationRevisionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployRegisterApplicationRevisionInput(obj: CodeDeployRegisterApplicationRevisionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'applicationName': obj.applicationName,
    'description': obj.description,
    'revision': toJson_CodeDeployRevisionLocation(obj.revision),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployRegisterOnPremisesInstanceInput
 */
export interface CodeDeployRegisterOnPremisesInstanceInput {
  /**
   * @schema CodeDeployRegisterOnPremisesInstanceInput#instanceName
   */
  readonly instanceName: string;

  /**
   * @schema CodeDeployRegisterOnPremisesInstanceInput#iamSessionArn
   */
  readonly iamSessionArn?: string;

  /**
   * @schema CodeDeployRegisterOnPremisesInstanceInput#iamUserArn
   */
  readonly iamUserArn?: string;

}

/**
 * Converts an object of type 'CodeDeployRegisterOnPremisesInstanceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployRegisterOnPremisesInstanceInput(obj: CodeDeployRegisterOnPremisesInstanceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'instanceName': obj.instanceName,
    'iamSessionArn': obj.iamSessionArn,
    'iamUserArn': obj.iamUserArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployRemoveTagsFromOnPremisesInstancesInput
 */
export interface CodeDeployRemoveTagsFromOnPremisesInstancesInput {
  /**
   * @schema CodeDeployRemoveTagsFromOnPremisesInstancesInput#tags
   */
  readonly tags: CodeDeployTag[];

  /**
   * @schema CodeDeployRemoveTagsFromOnPremisesInstancesInput#instanceNames
   */
  readonly instanceNames: string[];

}

/**
 * Converts an object of type 'CodeDeployRemoveTagsFromOnPremisesInstancesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployRemoveTagsFromOnPremisesInstancesInput(obj: CodeDeployRemoveTagsFromOnPremisesInstancesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tags': obj.tags?.map(y => toJson_CodeDeployTag(y)),
    'instanceNames': obj.instanceNames?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeploySkipWaitTimeForInstanceTerminationInput
 */
export interface CodeDeploySkipWaitTimeForInstanceTerminationInput {
  /**
   * @schema CodeDeploySkipWaitTimeForInstanceTerminationInput#deploymentId
   */
  readonly deploymentId?: string;

}

/**
 * Converts an object of type 'CodeDeploySkipWaitTimeForInstanceTerminationInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeploySkipWaitTimeForInstanceTerminationInput(obj: CodeDeploySkipWaitTimeForInstanceTerminationInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deploymentId': obj.deploymentId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployStopDeploymentInput
 */
export interface CodeDeployStopDeploymentInput {
  /**
   * @schema CodeDeployStopDeploymentInput#deploymentId
   */
  readonly deploymentId: string;

  /**
   * @schema CodeDeployStopDeploymentInput#autoRollbackEnabled
   */
  readonly autoRollbackEnabled?: boolean;

}

/**
 * Converts an object of type 'CodeDeployStopDeploymentInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployStopDeploymentInput(obj: CodeDeployStopDeploymentInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deploymentId': obj.deploymentId,
    'autoRollbackEnabled': obj.autoRollbackEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployStopDeploymentOutput
 */
export interface CodeDeployStopDeploymentOutput {
  /**
   * @schema CodeDeployStopDeploymentOutput#status
   */
  readonly status?: string;

  /**
   * @schema CodeDeployStopDeploymentOutput#statusMessage
   */
  readonly statusMessage?: string;

}

/**
 * Converts an object of type 'CodeDeployStopDeploymentOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployStopDeploymentOutput(obj: CodeDeployStopDeploymentOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'status': obj.status,
    'statusMessage': obj.statusMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployTagResourceInput
 */
export interface CodeDeployTagResourceInput {
  /**
   * @schema CodeDeployTagResourceInput#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema CodeDeployTagResourceInput#Tags
   */
  readonly tags?: CodeDeployTag[];

}

/**
 * Converts an object of type 'CodeDeployTagResourceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployTagResourceInput(obj: CodeDeployTagResourceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'Tags': obj.tags?.map(y => toJson_CodeDeployTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployTagResourceOutput
 */
export interface CodeDeployTagResourceOutput {
}

/**
 * Converts an object of type 'CodeDeployTagResourceOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployTagResourceOutput(obj: CodeDeployTagResourceOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployUntagResourceInput
 */
export interface CodeDeployUntagResourceInput {
  /**
   * @schema CodeDeployUntagResourceInput#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema CodeDeployUntagResourceInput#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'CodeDeployUntagResourceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployUntagResourceInput(obj: CodeDeployUntagResourceInput | undefined): Record<string, any> | undefined {
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
 * @schema CodeDeployUntagResourceOutput
 */
export interface CodeDeployUntagResourceOutput {
}

/**
 * Converts an object of type 'CodeDeployUntagResourceOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployUntagResourceOutput(obj: CodeDeployUntagResourceOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployUpdateApplicationInput
 */
export interface CodeDeployUpdateApplicationInput {
  /**
   * @schema CodeDeployUpdateApplicationInput#applicationName
   */
  readonly applicationName?: string;

  /**
   * @schema CodeDeployUpdateApplicationInput#newApplicationName
   */
  readonly newApplicationName?: string;

}

/**
 * Converts an object of type 'CodeDeployUpdateApplicationInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployUpdateApplicationInput(obj: CodeDeployUpdateApplicationInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'applicationName': obj.applicationName,
    'newApplicationName': obj.newApplicationName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployUpdateDeploymentGroupInput
 */
export interface CodeDeployUpdateDeploymentGroupInput {
  /**
   * @schema CodeDeployUpdateDeploymentGroupInput#applicationName
   */
  readonly applicationName: string;

  /**
   * @schema CodeDeployUpdateDeploymentGroupInput#currentDeploymentGroupName
   */
  readonly currentDeploymentGroupName: string;

  /**
   * @schema CodeDeployUpdateDeploymentGroupInput#newDeploymentGroupName
   */
  readonly newDeploymentGroupName?: string;

  /**
   * @schema CodeDeployUpdateDeploymentGroupInput#deploymentConfigName
   */
  readonly deploymentConfigName?: string;

  /**
   * @schema CodeDeployUpdateDeploymentGroupInput#ec2TagFilters
   */
  readonly ec2TagFilters?: CodeDeployEc2TagFilter[];

  /**
   * @schema CodeDeployUpdateDeploymentGroupInput#onPremisesInstanceTagFilters
   */
  readonly onPremisesInstanceTagFilters?: CodeDeployTagFilter[];

  /**
   * @schema CodeDeployUpdateDeploymentGroupInput#autoScalingGroups
   */
  readonly autoScalingGroups?: string[];

  /**
   * @schema CodeDeployUpdateDeploymentGroupInput#serviceRoleArn
   */
  readonly serviceRoleArn?: string;

  /**
   * @schema CodeDeployUpdateDeploymentGroupInput#triggerConfigurations
   */
  readonly triggerConfigurations?: CodeDeployTriggerConfig[];

  /**
   * @schema CodeDeployUpdateDeploymentGroupInput#alarmConfiguration
   */
  readonly alarmConfiguration?: CodeDeployAlarmConfiguration;

  /**
   * @schema CodeDeployUpdateDeploymentGroupInput#autoRollbackConfiguration
   */
  readonly autoRollbackConfiguration?: CodeDeployAutoRollbackConfiguration;

  /**
   * @schema CodeDeployUpdateDeploymentGroupInput#outdatedInstancesStrategy
   */
  readonly outdatedInstancesStrategy?: string;

  /**
   * @schema CodeDeployUpdateDeploymentGroupInput#deploymentStyle
   */
  readonly deploymentStyle?: CodeDeployDeploymentStyle;

  /**
   * @schema CodeDeployUpdateDeploymentGroupInput#blueGreenDeploymentConfiguration
   */
  readonly blueGreenDeploymentConfiguration?: CodeDeployBlueGreenDeploymentConfiguration;

  /**
   * @schema CodeDeployUpdateDeploymentGroupInput#loadBalancerInfo
   */
  readonly loadBalancerInfo?: CodeDeployLoadBalancerInfo;

  /**
   * @schema CodeDeployUpdateDeploymentGroupInput#ec2TagSet
   */
  readonly ec2TagSet?: CodeDeployEc2TagSet;

  /**
   * @schema CodeDeployUpdateDeploymentGroupInput#ecsServices
   */
  readonly ecsServices?: CodeDeployEcsService[];

  /**
   * @schema CodeDeployUpdateDeploymentGroupInput#onPremisesTagSet
   */
  readonly onPremisesTagSet?: CodeDeployOnPremisesTagSet;

}

/**
 * Converts an object of type 'CodeDeployUpdateDeploymentGroupInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployUpdateDeploymentGroupInput(obj: CodeDeployUpdateDeploymentGroupInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'applicationName': obj.applicationName,
    'currentDeploymentGroupName': obj.currentDeploymentGroupName,
    'newDeploymentGroupName': obj.newDeploymentGroupName,
    'deploymentConfigName': obj.deploymentConfigName,
    'ec2TagFilters': obj.ec2TagFilters?.map(y => toJson_CodeDeployEc2TagFilter(y)),
    'onPremisesInstanceTagFilters': obj.onPremisesInstanceTagFilters?.map(y => toJson_CodeDeployTagFilter(y)),
    'autoScalingGroups': obj.autoScalingGroups?.map(y => y),
    'serviceRoleArn': obj.serviceRoleArn,
    'triggerConfigurations': obj.triggerConfigurations?.map(y => toJson_CodeDeployTriggerConfig(y)),
    'alarmConfiguration': toJson_CodeDeployAlarmConfiguration(obj.alarmConfiguration),
    'autoRollbackConfiguration': toJson_CodeDeployAutoRollbackConfiguration(obj.autoRollbackConfiguration),
    'outdatedInstancesStrategy': obj.outdatedInstancesStrategy,
    'deploymentStyle': toJson_CodeDeployDeploymentStyle(obj.deploymentStyle),
    'blueGreenDeploymentConfiguration': toJson_CodeDeployBlueGreenDeploymentConfiguration(obj.blueGreenDeploymentConfiguration),
    'loadBalancerInfo': toJson_CodeDeployLoadBalancerInfo(obj.loadBalancerInfo),
    'ec2TagSet': toJson_CodeDeployEc2TagSet(obj.ec2TagSet),
    'ecsServices': obj.ecsServices?.map(y => toJson_CodeDeployEcsService(y)),
    'onPremisesTagSet': toJson_CodeDeployOnPremisesTagSet(obj.onPremisesTagSet),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployUpdateDeploymentGroupOutput
 */
export interface CodeDeployUpdateDeploymentGroupOutput {
  /**
   * @schema CodeDeployUpdateDeploymentGroupOutput#hooksNotCleanedUp
   */
  readonly hooksNotCleanedUp?: CodeDeployAutoScalingGroup[];

}

/**
 * Converts an object of type 'CodeDeployUpdateDeploymentGroupOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployUpdateDeploymentGroupOutput(obj: CodeDeployUpdateDeploymentGroupOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'hooksNotCleanedUp': obj.hooksNotCleanedUp?.map(y => toJson_CodeDeployAutoScalingGroup(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployTag
 */
export interface CodeDeployTag {
  /**
   * @schema CodeDeployTag#Key
   */
  readonly key?: string;

  /**
   * @schema CodeDeployTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'CodeDeployTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployTag(obj: CodeDeployTag | undefined): Record<string, any> | undefined {
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
 * @schema CodeDeployRevisionLocation
 */
export interface CodeDeployRevisionLocation {
  /**
   * @schema CodeDeployRevisionLocation#revisionType
   */
  readonly revisionType?: string;

  /**
   * @schema CodeDeployRevisionLocation#s3Location
   */
  readonly s3Location?: CodeDeployS3Location;

  /**
   * @schema CodeDeployRevisionLocation#gitHubLocation
   */
  readonly gitHubLocation?: CodeDeployGitHubLocation;

  /**
   * @schema CodeDeployRevisionLocation#string
   */
  readonly string?: CodeDeployRawString;

  /**
   * @schema CodeDeployRevisionLocation#appSpecContent
   */
  readonly appSpecContent?: CodeDeployAppSpecContent;

}

/**
 * Converts an object of type 'CodeDeployRevisionLocation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployRevisionLocation(obj: CodeDeployRevisionLocation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'revisionType': obj.revisionType,
    's3Location': toJson_CodeDeployS3Location(obj.s3Location),
    'gitHubLocation': toJson_CodeDeployGitHubLocation(obj.gitHubLocation),
    'string': toJson_CodeDeployRawString(obj.string),
    'appSpecContent': toJson_CodeDeployAppSpecContent(obj.appSpecContent),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployRevisionInfo
 */
export interface CodeDeployRevisionInfo {
  /**
   * @schema CodeDeployRevisionInfo#revisionLocation
   */
  readonly revisionLocation?: CodeDeployRevisionLocation;

  /**
   * @schema CodeDeployRevisionInfo#genericRevisionInfo
   */
  readonly genericRevisionInfo?: CodeDeployGenericRevisionInfo;

}

/**
 * Converts an object of type 'CodeDeployRevisionInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployRevisionInfo(obj: CodeDeployRevisionInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'revisionLocation': toJson_CodeDeployRevisionLocation(obj.revisionLocation),
    'genericRevisionInfo': toJson_CodeDeployGenericRevisionInfo(obj.genericRevisionInfo),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployApplicationInfo
 */
export interface CodeDeployApplicationInfo {
  /**
   * @schema CodeDeployApplicationInfo#applicationId
   */
  readonly applicationId?: string;

  /**
   * @schema CodeDeployApplicationInfo#applicationName
   */
  readonly applicationName?: string;

  /**
   * @schema CodeDeployApplicationInfo#createTime
   */
  readonly createTime?: string;

  /**
   * @schema CodeDeployApplicationInfo#linkedToGitHub
   */
  readonly linkedToGitHub?: boolean;

  /**
   * @schema CodeDeployApplicationInfo#gitHubAccountName
   */
  readonly gitHubAccountName?: string;

  /**
   * @schema CodeDeployApplicationInfo#computePlatform
   */
  readonly computePlatform?: string;

}

/**
 * Converts an object of type 'CodeDeployApplicationInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployApplicationInfo(obj: CodeDeployApplicationInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'applicationId': obj.applicationId,
    'applicationName': obj.applicationName,
    'createTime': obj.createTime,
    'linkedToGitHub': obj.linkedToGitHub,
    'gitHubAccountName': obj.gitHubAccountName,
    'computePlatform': obj.computePlatform,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployDeploymentGroupInfo
 */
export interface CodeDeployDeploymentGroupInfo {
  /**
   * @schema CodeDeployDeploymentGroupInfo#applicationName
   */
  readonly applicationName?: string;

  /**
   * @schema CodeDeployDeploymentGroupInfo#deploymentGroupId
   */
  readonly deploymentGroupId?: string;

  /**
   * @schema CodeDeployDeploymentGroupInfo#deploymentGroupName
   */
  readonly deploymentGroupName?: string;

  /**
   * @schema CodeDeployDeploymentGroupInfo#deploymentConfigName
   */
  readonly deploymentConfigName?: string;

  /**
   * @schema CodeDeployDeploymentGroupInfo#ec2TagFilters
   */
  readonly ec2TagFilters?: CodeDeployEc2TagFilter[];

  /**
   * @schema CodeDeployDeploymentGroupInfo#onPremisesInstanceTagFilters
   */
  readonly onPremisesInstanceTagFilters?: CodeDeployTagFilter[];

  /**
   * @schema CodeDeployDeploymentGroupInfo#autoScalingGroups
   */
  readonly autoScalingGroups?: CodeDeployAutoScalingGroup[];

  /**
   * @schema CodeDeployDeploymentGroupInfo#serviceRoleArn
   */
  readonly serviceRoleArn?: string;

  /**
   * @schema CodeDeployDeploymentGroupInfo#targetRevision
   */
  readonly targetRevision?: CodeDeployRevisionLocation;

  /**
   * @schema CodeDeployDeploymentGroupInfo#triggerConfigurations
   */
  readonly triggerConfigurations?: CodeDeployTriggerConfig[];

  /**
   * @schema CodeDeployDeploymentGroupInfo#alarmConfiguration
   */
  readonly alarmConfiguration?: CodeDeployAlarmConfiguration;

  /**
   * @schema CodeDeployDeploymentGroupInfo#autoRollbackConfiguration
   */
  readonly autoRollbackConfiguration?: CodeDeployAutoRollbackConfiguration;

  /**
   * @schema CodeDeployDeploymentGroupInfo#deploymentStyle
   */
  readonly deploymentStyle?: CodeDeployDeploymentStyle;

  /**
   * @schema CodeDeployDeploymentGroupInfo#outdatedInstancesStrategy
   */
  readonly outdatedInstancesStrategy?: string;

  /**
   * @schema CodeDeployDeploymentGroupInfo#blueGreenDeploymentConfiguration
   */
  readonly blueGreenDeploymentConfiguration?: CodeDeployBlueGreenDeploymentConfiguration;

  /**
   * @schema CodeDeployDeploymentGroupInfo#loadBalancerInfo
   */
  readonly loadBalancerInfo?: CodeDeployLoadBalancerInfo;

  /**
   * @schema CodeDeployDeploymentGroupInfo#lastSuccessfulDeployment
   */
  readonly lastSuccessfulDeployment?: CodeDeployLastDeploymentInfo;

  /**
   * @schema CodeDeployDeploymentGroupInfo#lastAttemptedDeployment
   */
  readonly lastAttemptedDeployment?: CodeDeployLastDeploymentInfo;

  /**
   * @schema CodeDeployDeploymentGroupInfo#ec2TagSet
   */
  readonly ec2TagSet?: CodeDeployEc2TagSet;

  /**
   * @schema CodeDeployDeploymentGroupInfo#onPremisesTagSet
   */
  readonly onPremisesTagSet?: CodeDeployOnPremisesTagSet;

  /**
   * @schema CodeDeployDeploymentGroupInfo#computePlatform
   */
  readonly computePlatform?: string;

  /**
   * @schema CodeDeployDeploymentGroupInfo#ecsServices
   */
  readonly ecsServices?: CodeDeployEcsService[];

}

/**
 * Converts an object of type 'CodeDeployDeploymentGroupInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployDeploymentGroupInfo(obj: CodeDeployDeploymentGroupInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'applicationName': obj.applicationName,
    'deploymentGroupId': obj.deploymentGroupId,
    'deploymentGroupName': obj.deploymentGroupName,
    'deploymentConfigName': obj.deploymentConfigName,
    'ec2TagFilters': obj.ec2TagFilters?.map(y => toJson_CodeDeployEc2TagFilter(y)),
    'onPremisesInstanceTagFilters': obj.onPremisesInstanceTagFilters?.map(y => toJson_CodeDeployTagFilter(y)),
    'autoScalingGroups': obj.autoScalingGroups?.map(y => toJson_CodeDeployAutoScalingGroup(y)),
    'serviceRoleArn': obj.serviceRoleArn,
    'targetRevision': toJson_CodeDeployRevisionLocation(obj.targetRevision),
    'triggerConfigurations': obj.triggerConfigurations?.map(y => toJson_CodeDeployTriggerConfig(y)),
    'alarmConfiguration': toJson_CodeDeployAlarmConfiguration(obj.alarmConfiguration),
    'autoRollbackConfiguration': toJson_CodeDeployAutoRollbackConfiguration(obj.autoRollbackConfiguration),
    'deploymentStyle': toJson_CodeDeployDeploymentStyle(obj.deploymentStyle),
    'outdatedInstancesStrategy': obj.outdatedInstancesStrategy,
    'blueGreenDeploymentConfiguration': toJson_CodeDeployBlueGreenDeploymentConfiguration(obj.blueGreenDeploymentConfiguration),
    'loadBalancerInfo': toJson_CodeDeployLoadBalancerInfo(obj.loadBalancerInfo),
    'lastSuccessfulDeployment': toJson_CodeDeployLastDeploymentInfo(obj.lastSuccessfulDeployment),
    'lastAttemptedDeployment': toJson_CodeDeployLastDeploymentInfo(obj.lastAttemptedDeployment),
    'ec2TagSet': toJson_CodeDeployEc2TagSet(obj.ec2TagSet),
    'onPremisesTagSet': toJson_CodeDeployOnPremisesTagSet(obj.onPremisesTagSet),
    'computePlatform': obj.computePlatform,
    'ecsServices': obj.ecsServices?.map(y => toJson_CodeDeployEcsService(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployInstanceSummary
 */
export interface CodeDeployInstanceSummary {
  /**
   * @schema CodeDeployInstanceSummary#deploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema CodeDeployInstanceSummary#instanceId
   */
  readonly instanceId?: string;

  /**
   * @schema CodeDeployInstanceSummary#status
   */
  readonly status?: string;

  /**
   * @schema CodeDeployInstanceSummary#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema CodeDeployInstanceSummary#lifecycleEvents
   */
  readonly lifecycleEvents?: CodeDeployLifecycleEvent[];

  /**
   * @schema CodeDeployInstanceSummary#instanceType
   */
  readonly instanceType?: string;

}

/**
 * Converts an object of type 'CodeDeployInstanceSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployInstanceSummary(obj: CodeDeployInstanceSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deploymentId': obj.deploymentId,
    'instanceId': obj.instanceId,
    'status': obj.status,
    'lastUpdatedAt': obj.lastUpdatedAt,
    'lifecycleEvents': obj.lifecycleEvents?.map(y => toJson_CodeDeployLifecycleEvent(y)),
    'instanceType': obj.instanceType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployDeploymentTarget
 */
export interface CodeDeployDeploymentTarget {
  /**
   * @schema CodeDeployDeploymentTarget#deploymentTargetType
   */
  readonly deploymentTargetType?: string;

  /**
   * @schema CodeDeployDeploymentTarget#instanceTarget
   */
  readonly instanceTarget?: CodeDeployInstanceTarget;

  /**
   * @schema CodeDeployDeploymentTarget#lambdaTarget
   */
  readonly lambdaTarget?: CodeDeployLambdaTarget;

  /**
   * @schema CodeDeployDeploymentTarget#ecsTarget
   */
  readonly ecsTarget?: CodeDeployEcsTarget;

  /**
   * @schema CodeDeployDeploymentTarget#cloudFormationTarget
   */
  readonly cloudFormationTarget?: CodeDeployCloudFormationTarget;

}

/**
 * Converts an object of type 'CodeDeployDeploymentTarget' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployDeploymentTarget(obj: CodeDeployDeploymentTarget | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deploymentTargetType': obj.deploymentTargetType,
    'instanceTarget': toJson_CodeDeployInstanceTarget(obj.instanceTarget),
    'lambdaTarget': toJson_CodeDeployLambdaTarget(obj.lambdaTarget),
    'ecsTarget': toJson_CodeDeployEcsTarget(obj.ecsTarget),
    'cloudFormationTarget': toJson_CodeDeployCloudFormationTarget(obj.cloudFormationTarget),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployDeploymentInfo
 */
export interface CodeDeployDeploymentInfo {
  /**
   * @schema CodeDeployDeploymentInfo#applicationName
   */
  readonly applicationName?: string;

  /**
   * @schema CodeDeployDeploymentInfo#deploymentGroupName
   */
  readonly deploymentGroupName?: string;

  /**
   * @schema CodeDeployDeploymentInfo#deploymentConfigName
   */
  readonly deploymentConfigName?: string;

  /**
   * @schema CodeDeployDeploymentInfo#deploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema CodeDeployDeploymentInfo#previousRevision
   */
  readonly previousRevision?: CodeDeployRevisionLocation;

  /**
   * @schema CodeDeployDeploymentInfo#revision
   */
  readonly revision?: CodeDeployRevisionLocation;

  /**
   * @schema CodeDeployDeploymentInfo#status
   */
  readonly status?: string;

  /**
   * @schema CodeDeployDeploymentInfo#errorInformation
   */
  readonly errorInformation?: CodeDeployErrorInformation;

  /**
   * @schema CodeDeployDeploymentInfo#createTime
   */
  readonly createTime?: string;

  /**
   * @schema CodeDeployDeploymentInfo#startTime
   */
  readonly startTime?: string;

  /**
   * @schema CodeDeployDeploymentInfo#completeTime
   */
  readonly completeTime?: string;

  /**
   * @schema CodeDeployDeploymentInfo#deploymentOverview
   */
  readonly deploymentOverview?: CodeDeployDeploymentOverview;

  /**
   * @schema CodeDeployDeploymentInfo#description
   */
  readonly description?: string;

  /**
   * @schema CodeDeployDeploymentInfo#creator
   */
  readonly creator?: string;

  /**
   * @schema CodeDeployDeploymentInfo#ignoreApplicationStopFailures
   */
  readonly ignoreApplicationStopFailures?: boolean;

  /**
   * @schema CodeDeployDeploymentInfo#autoRollbackConfiguration
   */
  readonly autoRollbackConfiguration?: CodeDeployAutoRollbackConfiguration;

  /**
   * @schema CodeDeployDeploymentInfo#updateOutdatedInstancesOnly
   */
  readonly updateOutdatedInstancesOnly?: boolean;

  /**
   * @schema CodeDeployDeploymentInfo#rollbackInfo
   */
  readonly rollbackInfo?: CodeDeployRollbackInfo;

  /**
   * @schema CodeDeployDeploymentInfo#deploymentStyle
   */
  readonly deploymentStyle?: CodeDeployDeploymentStyle;

  /**
   * @schema CodeDeployDeploymentInfo#targetInstances
   */
  readonly targetInstances?: CodeDeployTargetInstances;

  /**
   * @schema CodeDeployDeploymentInfo#instanceTerminationWaitTimeStarted
   */
  readonly instanceTerminationWaitTimeStarted?: boolean;

  /**
   * @schema CodeDeployDeploymentInfo#blueGreenDeploymentConfiguration
   */
  readonly blueGreenDeploymentConfiguration?: CodeDeployBlueGreenDeploymentConfiguration;

  /**
   * @schema CodeDeployDeploymentInfo#loadBalancerInfo
   */
  readonly loadBalancerInfo?: CodeDeployLoadBalancerInfo;

  /**
   * @schema CodeDeployDeploymentInfo#additionalDeploymentStatusInfo
   */
  readonly additionalDeploymentStatusInfo?: string;

  /**
   * @schema CodeDeployDeploymentInfo#fileExistsBehavior
   */
  readonly fileExistsBehavior?: string;

  /**
   * @schema CodeDeployDeploymentInfo#deploymentStatusMessages
   */
  readonly deploymentStatusMessages?: string[];

  /**
   * @schema CodeDeployDeploymentInfo#computePlatform
   */
  readonly computePlatform?: string;

  /**
   * @schema CodeDeployDeploymentInfo#externalId
   */
  readonly externalId?: string;

  /**
   * @schema CodeDeployDeploymentInfo#relatedDeployments
   */
  readonly relatedDeployments?: CodeDeployRelatedDeployments;

}

/**
 * Converts an object of type 'CodeDeployDeploymentInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployDeploymentInfo(obj: CodeDeployDeploymentInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'applicationName': obj.applicationName,
    'deploymentGroupName': obj.deploymentGroupName,
    'deploymentConfigName': obj.deploymentConfigName,
    'deploymentId': obj.deploymentId,
    'previousRevision': toJson_CodeDeployRevisionLocation(obj.previousRevision),
    'revision': toJson_CodeDeployRevisionLocation(obj.revision),
    'status': obj.status,
    'errorInformation': toJson_CodeDeployErrorInformation(obj.errorInformation),
    'createTime': obj.createTime,
    'startTime': obj.startTime,
    'completeTime': obj.completeTime,
    'deploymentOverview': toJson_CodeDeployDeploymentOverview(obj.deploymentOverview),
    'description': obj.description,
    'creator': obj.creator,
    'ignoreApplicationStopFailures': obj.ignoreApplicationStopFailures,
    'autoRollbackConfiguration': toJson_CodeDeployAutoRollbackConfiguration(obj.autoRollbackConfiguration),
    'updateOutdatedInstancesOnly': obj.updateOutdatedInstancesOnly,
    'rollbackInfo': toJson_CodeDeployRollbackInfo(obj.rollbackInfo),
    'deploymentStyle': toJson_CodeDeployDeploymentStyle(obj.deploymentStyle),
    'targetInstances': toJson_CodeDeployTargetInstances(obj.targetInstances),
    'instanceTerminationWaitTimeStarted': obj.instanceTerminationWaitTimeStarted,
    'blueGreenDeploymentConfiguration': toJson_CodeDeployBlueGreenDeploymentConfiguration(obj.blueGreenDeploymentConfiguration),
    'loadBalancerInfo': toJson_CodeDeployLoadBalancerInfo(obj.loadBalancerInfo),
    'additionalDeploymentStatusInfo': obj.additionalDeploymentStatusInfo,
    'fileExistsBehavior': obj.fileExistsBehavior,
    'deploymentStatusMessages': obj.deploymentStatusMessages?.map(y => y),
    'computePlatform': obj.computePlatform,
    'externalId': obj.externalId,
    'relatedDeployments': toJson_CodeDeployRelatedDeployments(obj.relatedDeployments),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployInstanceInfo
 */
export interface CodeDeployInstanceInfo {
  /**
   * @schema CodeDeployInstanceInfo#instanceName
   */
  readonly instanceName?: string;

  /**
   * @schema CodeDeployInstanceInfo#iamSessionArn
   */
  readonly iamSessionArn?: string;

  /**
   * @schema CodeDeployInstanceInfo#iamUserArn
   */
  readonly iamUserArn?: string;

  /**
   * @schema CodeDeployInstanceInfo#instanceArn
   */
  readonly instanceArn?: string;

  /**
   * @schema CodeDeployInstanceInfo#registerTime
   */
  readonly registerTime?: string;

  /**
   * @schema CodeDeployInstanceInfo#deregisterTime
   */
  readonly deregisterTime?: string;

  /**
   * @schema CodeDeployInstanceInfo#tags
   */
  readonly tags?: CodeDeployTag[];

}

/**
 * Converts an object of type 'CodeDeployInstanceInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployInstanceInfo(obj: CodeDeployInstanceInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'instanceName': obj.instanceName,
    'iamSessionArn': obj.iamSessionArn,
    'iamUserArn': obj.iamUserArn,
    'instanceArn': obj.instanceArn,
    'registerTime': obj.registerTime,
    'deregisterTime': obj.deregisterTime,
    'tags': obj.tags?.map(y => toJson_CodeDeployTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployTargetInstances
 */
export interface CodeDeployTargetInstances {
  /**
   * @schema CodeDeployTargetInstances#tagFilters
   */
  readonly tagFilters?: CodeDeployEc2TagFilter[];

  /**
   * @schema CodeDeployTargetInstances#autoScalingGroups
   */
  readonly autoScalingGroups?: string[];

  /**
   * @schema CodeDeployTargetInstances#ec2TagSet
   */
  readonly ec2TagSet?: CodeDeployEc2TagSet;

}

/**
 * Converts an object of type 'CodeDeployTargetInstances' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployTargetInstances(obj: CodeDeployTargetInstances | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tagFilters': obj.tagFilters?.map(y => toJson_CodeDeployEc2TagFilter(y)),
    'autoScalingGroups': obj.autoScalingGroups?.map(y => y),
    'ec2TagSet': toJson_CodeDeployEc2TagSet(obj.ec2TagSet),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployAutoRollbackConfiguration
 */
export interface CodeDeployAutoRollbackConfiguration {
  /**
   * @schema CodeDeployAutoRollbackConfiguration#enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema CodeDeployAutoRollbackConfiguration#events
   */
  readonly events?: string[];

}

/**
 * Converts an object of type 'CodeDeployAutoRollbackConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployAutoRollbackConfiguration(obj: CodeDeployAutoRollbackConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'enabled': obj.enabled,
    'events': obj.events?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployMinimumHealthyHosts
 */
export interface CodeDeployMinimumHealthyHosts {
  /**
   * @schema CodeDeployMinimumHealthyHosts#type
   */
  readonly type?: string;

  /**
   * @schema CodeDeployMinimumHealthyHosts#value
   */
  readonly value?: number;

}

/**
 * Converts an object of type 'CodeDeployMinimumHealthyHosts' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployMinimumHealthyHosts(obj: CodeDeployMinimumHealthyHosts | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'type': obj.type,
    'value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployTrafficRoutingConfig
 */
export interface CodeDeployTrafficRoutingConfig {
  /**
   * @schema CodeDeployTrafficRoutingConfig#type
   */
  readonly type?: string;

  /**
   * @schema CodeDeployTrafficRoutingConfig#timeBasedCanary
   */
  readonly timeBasedCanary?: CodeDeployTimeBasedCanary;

  /**
   * @schema CodeDeployTrafficRoutingConfig#timeBasedLinear
   */
  readonly timeBasedLinear?: CodeDeployTimeBasedLinear;

}

/**
 * Converts an object of type 'CodeDeployTrafficRoutingConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployTrafficRoutingConfig(obj: CodeDeployTrafficRoutingConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'type': obj.type,
    'timeBasedCanary': toJson_CodeDeployTimeBasedCanary(obj.timeBasedCanary),
    'timeBasedLinear': toJson_CodeDeployTimeBasedLinear(obj.timeBasedLinear),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployEc2TagFilter
 */
export interface CodeDeployEc2TagFilter {
  /**
   * @schema CodeDeployEc2TagFilter#Key
   */
  readonly key?: string;

  /**
   * @schema CodeDeployEc2TagFilter#Value
   */
  readonly value?: string;

  /**
   * @schema CodeDeployEc2TagFilter#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'CodeDeployEc2TagFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployEc2TagFilter(obj: CodeDeployEc2TagFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Value': obj.value,
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployTagFilter
 */
export interface CodeDeployTagFilter {
  /**
   * @schema CodeDeployTagFilter#Key
   */
  readonly key?: string;

  /**
   * @schema CodeDeployTagFilter#Value
   */
  readonly value?: string;

  /**
   * @schema CodeDeployTagFilter#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'CodeDeployTagFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployTagFilter(obj: CodeDeployTagFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Value': obj.value,
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployTriggerConfig
 */
export interface CodeDeployTriggerConfig {
  /**
   * @schema CodeDeployTriggerConfig#triggerName
   */
  readonly triggerName?: string;

  /**
   * @schema CodeDeployTriggerConfig#triggerTargetArn
   */
  readonly triggerTargetArn?: string;

  /**
   * @schema CodeDeployTriggerConfig#triggerEvents
   */
  readonly triggerEvents?: string[];

}

/**
 * Converts an object of type 'CodeDeployTriggerConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployTriggerConfig(obj: CodeDeployTriggerConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'triggerName': obj.triggerName,
    'triggerTargetArn': obj.triggerTargetArn,
    'triggerEvents': obj.triggerEvents?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployAlarmConfiguration
 */
export interface CodeDeployAlarmConfiguration {
  /**
   * @schema CodeDeployAlarmConfiguration#enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema CodeDeployAlarmConfiguration#ignorePollAlarmFailure
   */
  readonly ignorePollAlarmFailure?: boolean;

  /**
   * @schema CodeDeployAlarmConfiguration#alarms
   */
  readonly alarms?: CodeDeployAlarm[];

}

/**
 * Converts an object of type 'CodeDeployAlarmConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployAlarmConfiguration(obj: CodeDeployAlarmConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'enabled': obj.enabled,
    'ignorePollAlarmFailure': obj.ignorePollAlarmFailure,
    'alarms': obj.alarms?.map(y => toJson_CodeDeployAlarm(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployDeploymentStyle
 */
export interface CodeDeployDeploymentStyle {
  /**
   * @schema CodeDeployDeploymentStyle#deploymentType
   */
  readonly deploymentType?: string;

  /**
   * @schema CodeDeployDeploymentStyle#deploymentOption
   */
  readonly deploymentOption?: string;

}

/**
 * Converts an object of type 'CodeDeployDeploymentStyle' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployDeploymentStyle(obj: CodeDeployDeploymentStyle | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deploymentType': obj.deploymentType,
    'deploymentOption': obj.deploymentOption,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployBlueGreenDeploymentConfiguration
 */
export interface CodeDeployBlueGreenDeploymentConfiguration {
  /**
   * @schema CodeDeployBlueGreenDeploymentConfiguration#terminateBlueInstancesOnDeploymentSuccess
   */
  readonly terminateBlueInstancesOnDeploymentSuccess?: CodeDeployBlueInstanceTerminationOption;

  /**
   * @schema CodeDeployBlueGreenDeploymentConfiguration#deploymentReadyOption
   */
  readonly deploymentReadyOption?: CodeDeployDeploymentReadyOption;

  /**
   * @schema CodeDeployBlueGreenDeploymentConfiguration#greenFleetProvisioningOption
   */
  readonly greenFleetProvisioningOption?: CodeDeployGreenFleetProvisioningOption;

}

/**
 * Converts an object of type 'CodeDeployBlueGreenDeploymentConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployBlueGreenDeploymentConfiguration(obj: CodeDeployBlueGreenDeploymentConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'terminateBlueInstancesOnDeploymentSuccess': toJson_CodeDeployBlueInstanceTerminationOption(obj.terminateBlueInstancesOnDeploymentSuccess),
    'deploymentReadyOption': toJson_CodeDeployDeploymentReadyOption(obj.deploymentReadyOption),
    'greenFleetProvisioningOption': toJson_CodeDeployGreenFleetProvisioningOption(obj.greenFleetProvisioningOption),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployLoadBalancerInfo
 */
export interface CodeDeployLoadBalancerInfo {
  /**
   * @schema CodeDeployLoadBalancerInfo#elbInfoList
   */
  readonly elbInfoList?: CodeDeployElbInfo[];

  /**
   * @schema CodeDeployLoadBalancerInfo#targetGroupInfoList
   */
  readonly targetGroupInfoList?: CodeDeployTargetGroupInfo[];

  /**
   * @schema CodeDeployLoadBalancerInfo#targetGroupPairInfoList
   */
  readonly targetGroupPairInfoList?: CodeDeployTargetGroupPairInfo[];

}

/**
 * Converts an object of type 'CodeDeployLoadBalancerInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployLoadBalancerInfo(obj: CodeDeployLoadBalancerInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'elbInfoList': obj.elbInfoList?.map(y => toJson_CodeDeployElbInfo(y)),
    'targetGroupInfoList': obj.targetGroupInfoList?.map(y => toJson_CodeDeployTargetGroupInfo(y)),
    'targetGroupPairInfoList': obj.targetGroupPairInfoList?.map(y => toJson_CodeDeployTargetGroupPairInfo(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployEc2TagSet
 */
export interface CodeDeployEc2TagSet {
  /**
   * @schema CodeDeployEc2TagSet#ec2TagSetList
   */
  readonly ec2TagSetList?: CodeDeployEc2TagFilter[][];

}

/**
 * Converts an object of type 'CodeDeployEc2TagSet' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployEc2TagSet(obj: CodeDeployEc2TagSet | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ec2TagSetList': obj.ec2TagSetList?.map(y => y?.map(y => toJson_CodeDeployEc2TagFilter(y))),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployEcsService
 */
export interface CodeDeployEcsService {
  /**
   * @schema CodeDeployEcsService#serviceName
   */
  readonly serviceName?: string;

  /**
   * @schema CodeDeployEcsService#clusterName
   */
  readonly clusterName?: string;

}

/**
 * Converts an object of type 'CodeDeployEcsService' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployEcsService(obj: CodeDeployEcsService | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'serviceName': obj.serviceName,
    'clusterName': obj.clusterName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployOnPremisesTagSet
 */
export interface CodeDeployOnPremisesTagSet {
  /**
   * @schema CodeDeployOnPremisesTagSet#onPremisesTagSetList
   */
  readonly onPremisesTagSetList?: CodeDeployTagFilter[][];

}

/**
 * Converts an object of type 'CodeDeployOnPremisesTagSet' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployOnPremisesTagSet(obj: CodeDeployOnPremisesTagSet | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'onPremisesTagSetList': obj.onPremisesTagSetList?.map(y => y?.map(y => toJson_CodeDeployTagFilter(y))),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployAutoScalingGroup
 */
export interface CodeDeployAutoScalingGroup {
  /**
   * @schema CodeDeployAutoScalingGroup#name
   */
  readonly name?: string;

  /**
   * @schema CodeDeployAutoScalingGroup#hook
   */
  readonly hook?: string;

}

/**
 * Converts an object of type 'CodeDeployAutoScalingGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployAutoScalingGroup(obj: CodeDeployAutoScalingGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'hook': obj.hook,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployGenericRevisionInfo
 */
export interface CodeDeployGenericRevisionInfo {
  /**
   * @schema CodeDeployGenericRevisionInfo#description
   */
  readonly description?: string;

  /**
   * @schema CodeDeployGenericRevisionInfo#deploymentGroups
   */
  readonly deploymentGroups?: string[];

  /**
   * @schema CodeDeployGenericRevisionInfo#firstUsedTime
   */
  readonly firstUsedTime?: string;

  /**
   * @schema CodeDeployGenericRevisionInfo#lastUsedTime
   */
  readonly lastUsedTime?: string;

  /**
   * @schema CodeDeployGenericRevisionInfo#registerTime
   */
  readonly registerTime?: string;

}

/**
 * Converts an object of type 'CodeDeployGenericRevisionInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployGenericRevisionInfo(obj: CodeDeployGenericRevisionInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'description': obj.description,
    'deploymentGroups': obj.deploymentGroups?.map(y => y),
    'firstUsedTime': obj.firstUsedTime,
    'lastUsedTime': obj.lastUsedTime,
    'registerTime': obj.registerTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployDeploymentConfigInfo
 */
export interface CodeDeployDeploymentConfigInfo {
  /**
   * @schema CodeDeployDeploymentConfigInfo#deploymentConfigId
   */
  readonly deploymentConfigId?: string;

  /**
   * @schema CodeDeployDeploymentConfigInfo#deploymentConfigName
   */
  readonly deploymentConfigName?: string;

  /**
   * @schema CodeDeployDeploymentConfigInfo#minimumHealthyHosts
   */
  readonly minimumHealthyHosts?: CodeDeployMinimumHealthyHosts;

  /**
   * @schema CodeDeployDeploymentConfigInfo#createTime
   */
  readonly createTime?: string;

  /**
   * @schema CodeDeployDeploymentConfigInfo#computePlatform
   */
  readonly computePlatform?: string;

  /**
   * @schema CodeDeployDeploymentConfigInfo#trafficRoutingConfig
   */
  readonly trafficRoutingConfig?: CodeDeployTrafficRoutingConfig;

}

/**
 * Converts an object of type 'CodeDeployDeploymentConfigInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployDeploymentConfigInfo(obj: CodeDeployDeploymentConfigInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deploymentConfigId': obj.deploymentConfigId,
    'deploymentConfigName': obj.deploymentConfigName,
    'minimumHealthyHosts': toJson_CodeDeployMinimumHealthyHosts(obj.minimumHealthyHosts),
    'createTime': obj.createTime,
    'computePlatform': obj.computePlatform,
    'trafficRoutingConfig': toJson_CodeDeployTrafficRoutingConfig(obj.trafficRoutingConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployTimeRange
 */
export interface CodeDeployTimeRange {
  /**
   * @schema CodeDeployTimeRange#start
   */
  readonly start?: string;

  /**
   * @schema CodeDeployTimeRange#end
   */
  readonly end?: string;

}

/**
 * Converts an object of type 'CodeDeployTimeRange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployTimeRange(obj: CodeDeployTimeRange | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'start': obj.start,
    'end': obj.end,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployS3Location
 */
export interface CodeDeployS3Location {
  /**
   * @schema CodeDeployS3Location#bucket
   */
  readonly bucket?: string;

  /**
   * @schema CodeDeployS3Location#key
   */
  readonly key?: string;

  /**
   * @schema CodeDeployS3Location#bundleType
   */
  readonly bundleType?: string;

  /**
   * @schema CodeDeployS3Location#version
   */
  readonly version?: string;

  /**
   * @schema CodeDeployS3Location#eTag
   */
  readonly eTag?: string;

}

/**
 * Converts an object of type 'CodeDeployS3Location' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployS3Location(obj: CodeDeployS3Location | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bucket': obj.bucket,
    'key': obj.key,
    'bundleType': obj.bundleType,
    'version': obj.version,
    'eTag': obj.eTag,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployGitHubLocation
 */
export interface CodeDeployGitHubLocation {
  /**
   * @schema CodeDeployGitHubLocation#repository
   */
  readonly repository?: string;

  /**
   * @schema CodeDeployGitHubLocation#commitId
   */
  readonly commitId?: string;

}

/**
 * Converts an object of type 'CodeDeployGitHubLocation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployGitHubLocation(obj: CodeDeployGitHubLocation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repository': obj.repository,
    'commitId': obj.commitId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployRawString
 */
export interface CodeDeployRawString {
  /**
   * @schema CodeDeployRawString#content
   */
  readonly content?: string;

  /**
   * @schema CodeDeployRawString#sha256
   */
  readonly sha256?: string;

}

/**
 * Converts an object of type 'CodeDeployRawString' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployRawString(obj: CodeDeployRawString | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'content': obj.content,
    'sha256': obj.sha256,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployAppSpecContent
 */
export interface CodeDeployAppSpecContent {
  /**
   * @schema CodeDeployAppSpecContent#content
   */
  readonly content?: string;

  /**
   * @schema CodeDeployAppSpecContent#sha256
   */
  readonly sha256?: string;

}

/**
 * Converts an object of type 'CodeDeployAppSpecContent' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployAppSpecContent(obj: CodeDeployAppSpecContent | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'content': obj.content,
    'sha256': obj.sha256,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployLastDeploymentInfo
 */
export interface CodeDeployLastDeploymentInfo {
  /**
   * @schema CodeDeployLastDeploymentInfo#deploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema CodeDeployLastDeploymentInfo#status
   */
  readonly status?: string;

  /**
   * @schema CodeDeployLastDeploymentInfo#endTime
   */
  readonly endTime?: string;

  /**
   * @schema CodeDeployLastDeploymentInfo#createTime
   */
  readonly createTime?: string;

}

/**
 * Converts an object of type 'CodeDeployLastDeploymentInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployLastDeploymentInfo(obj: CodeDeployLastDeploymentInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deploymentId': obj.deploymentId,
    'status': obj.status,
    'endTime': obj.endTime,
    'createTime': obj.createTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployLifecycleEvent
 */
export interface CodeDeployLifecycleEvent {
  /**
   * @schema CodeDeployLifecycleEvent#lifecycleEventName
   */
  readonly lifecycleEventName?: string;

  /**
   * @schema CodeDeployLifecycleEvent#diagnostics
   */
  readonly diagnostics?: CodeDeployDiagnostics;

  /**
   * @schema CodeDeployLifecycleEvent#startTime
   */
  readonly startTime?: string;

  /**
   * @schema CodeDeployLifecycleEvent#endTime
   */
  readonly endTime?: string;

  /**
   * @schema CodeDeployLifecycleEvent#status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'CodeDeployLifecycleEvent' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployLifecycleEvent(obj: CodeDeployLifecycleEvent | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'lifecycleEventName': obj.lifecycleEventName,
    'diagnostics': toJson_CodeDeployDiagnostics(obj.diagnostics),
    'startTime': obj.startTime,
    'endTime': obj.endTime,
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployInstanceTarget
 */
export interface CodeDeployInstanceTarget {
  /**
   * @schema CodeDeployInstanceTarget#deploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema CodeDeployInstanceTarget#targetId
   */
  readonly targetId?: string;

  /**
   * @schema CodeDeployInstanceTarget#targetArn
   */
  readonly targetArn?: string;

  /**
   * @schema CodeDeployInstanceTarget#status
   */
  readonly status?: string;

  /**
   * @schema CodeDeployInstanceTarget#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema CodeDeployInstanceTarget#lifecycleEvents
   */
  readonly lifecycleEvents?: CodeDeployLifecycleEvent[];

  /**
   * @schema CodeDeployInstanceTarget#instanceLabel
   */
  readonly instanceLabel?: string;

}

/**
 * Converts an object of type 'CodeDeployInstanceTarget' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployInstanceTarget(obj: CodeDeployInstanceTarget | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deploymentId': obj.deploymentId,
    'targetId': obj.targetId,
    'targetArn': obj.targetArn,
    'status': obj.status,
    'lastUpdatedAt': obj.lastUpdatedAt,
    'lifecycleEvents': obj.lifecycleEvents?.map(y => toJson_CodeDeployLifecycleEvent(y)),
    'instanceLabel': obj.instanceLabel,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployLambdaTarget
 */
export interface CodeDeployLambdaTarget {
  /**
   * @schema CodeDeployLambdaTarget#deploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema CodeDeployLambdaTarget#targetId
   */
  readonly targetId?: string;

  /**
   * @schema CodeDeployLambdaTarget#targetArn
   */
  readonly targetArn?: string;

  /**
   * @schema CodeDeployLambdaTarget#status
   */
  readonly status?: string;

  /**
   * @schema CodeDeployLambdaTarget#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema CodeDeployLambdaTarget#lifecycleEvents
   */
  readonly lifecycleEvents?: CodeDeployLifecycleEvent[];

  /**
   * @schema CodeDeployLambdaTarget#lambdaFunctionInfo
   */
  readonly lambdaFunctionInfo?: CodeDeployLambdaFunctionInfo;

}

/**
 * Converts an object of type 'CodeDeployLambdaTarget' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployLambdaTarget(obj: CodeDeployLambdaTarget | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deploymentId': obj.deploymentId,
    'targetId': obj.targetId,
    'targetArn': obj.targetArn,
    'status': obj.status,
    'lastUpdatedAt': obj.lastUpdatedAt,
    'lifecycleEvents': obj.lifecycleEvents?.map(y => toJson_CodeDeployLifecycleEvent(y)),
    'lambdaFunctionInfo': toJson_CodeDeployLambdaFunctionInfo(obj.lambdaFunctionInfo),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployEcsTarget
 */
export interface CodeDeployEcsTarget {
  /**
   * @schema CodeDeployEcsTarget#deploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema CodeDeployEcsTarget#targetId
   */
  readonly targetId?: string;

  /**
   * @schema CodeDeployEcsTarget#targetArn
   */
  readonly targetArn?: string;

  /**
   * @schema CodeDeployEcsTarget#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema CodeDeployEcsTarget#lifecycleEvents
   */
  readonly lifecycleEvents?: CodeDeployLifecycleEvent[];

  /**
   * @schema CodeDeployEcsTarget#status
   */
  readonly status?: string;

  /**
   * @schema CodeDeployEcsTarget#taskSetsInfo
   */
  readonly taskSetsInfo?: CodeDeployEcsTaskSet[];

}

/**
 * Converts an object of type 'CodeDeployEcsTarget' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployEcsTarget(obj: CodeDeployEcsTarget | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deploymentId': obj.deploymentId,
    'targetId': obj.targetId,
    'targetArn': obj.targetArn,
    'lastUpdatedAt': obj.lastUpdatedAt,
    'lifecycleEvents': obj.lifecycleEvents?.map(y => toJson_CodeDeployLifecycleEvent(y)),
    'status': obj.status,
    'taskSetsInfo': obj.taskSetsInfo?.map(y => toJson_CodeDeployEcsTaskSet(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployCloudFormationTarget
 */
export interface CodeDeployCloudFormationTarget {
  /**
   * @schema CodeDeployCloudFormationTarget#deploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema CodeDeployCloudFormationTarget#targetId
   */
  readonly targetId?: string;

  /**
   * @schema CodeDeployCloudFormationTarget#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema CodeDeployCloudFormationTarget#lifecycleEvents
   */
  readonly lifecycleEvents?: CodeDeployLifecycleEvent[];

  /**
   * @schema CodeDeployCloudFormationTarget#status
   */
  readonly status?: string;

  /**
   * @schema CodeDeployCloudFormationTarget#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema CodeDeployCloudFormationTarget#targetVersionWeight
   */
  readonly targetVersionWeight?: number;

}

/**
 * Converts an object of type 'CodeDeployCloudFormationTarget' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployCloudFormationTarget(obj: CodeDeployCloudFormationTarget | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deploymentId': obj.deploymentId,
    'targetId': obj.targetId,
    'lastUpdatedAt': obj.lastUpdatedAt,
    'lifecycleEvents': obj.lifecycleEvents?.map(y => toJson_CodeDeployLifecycleEvent(y)),
    'status': obj.status,
    'resourceType': obj.resourceType,
    'targetVersionWeight': obj.targetVersionWeight,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployErrorInformation
 */
export interface CodeDeployErrorInformation {
  /**
   * @schema CodeDeployErrorInformation#code
   */
  readonly code?: string;

  /**
   * @schema CodeDeployErrorInformation#message
   */
  readonly message?: string;

}

/**
 * Converts an object of type 'CodeDeployErrorInformation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployErrorInformation(obj: CodeDeployErrorInformation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'code': obj.code,
    'message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployDeploymentOverview
 */
export interface CodeDeployDeploymentOverview {
  /**
   * @schema CodeDeployDeploymentOverview#Pending
   */
  readonly pending?: number;

  /**
   * @schema CodeDeployDeploymentOverview#InProgress
   */
  readonly inProgress?: number;

  /**
   * @schema CodeDeployDeploymentOverview#Succeeded
   */
  readonly succeeded?: number;

  /**
   * @schema CodeDeployDeploymentOverview#Failed
   */
  readonly failed?: number;

  /**
   * @schema CodeDeployDeploymentOverview#Skipped
   */
  readonly skipped?: number;

  /**
   * @schema CodeDeployDeploymentOverview#Ready
   */
  readonly ready?: number;

}

/**
 * Converts an object of type 'CodeDeployDeploymentOverview' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployDeploymentOverview(obj: CodeDeployDeploymentOverview | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Pending': obj.pending,
    'InProgress': obj.inProgress,
    'Succeeded': obj.succeeded,
    'Failed': obj.failed,
    'Skipped': obj.skipped,
    'Ready': obj.ready,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployRollbackInfo
 */
export interface CodeDeployRollbackInfo {
  /**
   * @schema CodeDeployRollbackInfo#rollbackDeploymentId
   */
  readonly rollbackDeploymentId?: string;

  /**
   * @schema CodeDeployRollbackInfo#rollbackTriggeringDeploymentId
   */
  readonly rollbackTriggeringDeploymentId?: string;

  /**
   * @schema CodeDeployRollbackInfo#rollbackMessage
   */
  readonly rollbackMessage?: string;

}

/**
 * Converts an object of type 'CodeDeployRollbackInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployRollbackInfo(obj: CodeDeployRollbackInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'rollbackDeploymentId': obj.rollbackDeploymentId,
    'rollbackTriggeringDeploymentId': obj.rollbackTriggeringDeploymentId,
    'rollbackMessage': obj.rollbackMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployRelatedDeployments
 */
export interface CodeDeployRelatedDeployments {
  /**
   * @schema CodeDeployRelatedDeployments#autoUpdateOutdatedInstancesRootDeploymentId
   */
  readonly autoUpdateOutdatedInstancesRootDeploymentId?: string;

  /**
   * @schema CodeDeployRelatedDeployments#autoUpdateOutdatedInstancesDeploymentIds
   */
  readonly autoUpdateOutdatedInstancesDeploymentIds?: string[];

}

/**
 * Converts an object of type 'CodeDeployRelatedDeployments' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployRelatedDeployments(obj: CodeDeployRelatedDeployments | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'autoUpdateOutdatedInstancesRootDeploymentId': obj.autoUpdateOutdatedInstancesRootDeploymentId,
    'autoUpdateOutdatedInstancesDeploymentIds': obj.autoUpdateOutdatedInstancesDeploymentIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployTimeBasedCanary
 */
export interface CodeDeployTimeBasedCanary {
  /**
   * @schema CodeDeployTimeBasedCanary#canaryPercentage
   */
  readonly canaryPercentage?: number;

  /**
   * @schema CodeDeployTimeBasedCanary#canaryInterval
   */
  readonly canaryInterval?: number;

}

/**
 * Converts an object of type 'CodeDeployTimeBasedCanary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployTimeBasedCanary(obj: CodeDeployTimeBasedCanary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'canaryPercentage': obj.canaryPercentage,
    'canaryInterval': obj.canaryInterval,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployTimeBasedLinear
 */
export interface CodeDeployTimeBasedLinear {
  /**
   * @schema CodeDeployTimeBasedLinear#linearPercentage
   */
  readonly linearPercentage?: number;

  /**
   * @schema CodeDeployTimeBasedLinear#linearInterval
   */
  readonly linearInterval?: number;

}

/**
 * Converts an object of type 'CodeDeployTimeBasedLinear' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployTimeBasedLinear(obj: CodeDeployTimeBasedLinear | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'linearPercentage': obj.linearPercentage,
    'linearInterval': obj.linearInterval,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployAlarm
 */
export interface CodeDeployAlarm {
  /**
   * @schema CodeDeployAlarm#name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'CodeDeployAlarm' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployAlarm(obj: CodeDeployAlarm | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployBlueInstanceTerminationOption
 */
export interface CodeDeployBlueInstanceTerminationOption {
  /**
   * @schema CodeDeployBlueInstanceTerminationOption#action
   */
  readonly action?: string;

  /**
   * @schema CodeDeployBlueInstanceTerminationOption#terminationWaitTimeInMinutes
   */
  readonly terminationWaitTimeInMinutes?: number;

}

/**
 * Converts an object of type 'CodeDeployBlueInstanceTerminationOption' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployBlueInstanceTerminationOption(obj: CodeDeployBlueInstanceTerminationOption | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'action': obj.action,
    'terminationWaitTimeInMinutes': obj.terminationWaitTimeInMinutes,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployDeploymentReadyOption
 */
export interface CodeDeployDeploymentReadyOption {
  /**
   * @schema CodeDeployDeploymentReadyOption#actionOnTimeout
   */
  readonly actionOnTimeout?: string;

  /**
   * @schema CodeDeployDeploymentReadyOption#waitTimeInMinutes
   */
  readonly waitTimeInMinutes?: number;

}

/**
 * Converts an object of type 'CodeDeployDeploymentReadyOption' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployDeploymentReadyOption(obj: CodeDeployDeploymentReadyOption | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'actionOnTimeout': obj.actionOnTimeout,
    'waitTimeInMinutes': obj.waitTimeInMinutes,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployGreenFleetProvisioningOption
 */
export interface CodeDeployGreenFleetProvisioningOption {
  /**
   * @schema CodeDeployGreenFleetProvisioningOption#action
   */
  readonly action?: string;

}

/**
 * Converts an object of type 'CodeDeployGreenFleetProvisioningOption' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployGreenFleetProvisioningOption(obj: CodeDeployGreenFleetProvisioningOption | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'action': obj.action,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployElbInfo
 */
export interface CodeDeployElbInfo {
  /**
   * @schema CodeDeployElbInfo#name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'CodeDeployElbInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployElbInfo(obj: CodeDeployElbInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployTargetGroupInfo
 */
export interface CodeDeployTargetGroupInfo {
  /**
   * @schema CodeDeployTargetGroupInfo#name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'CodeDeployTargetGroupInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployTargetGroupInfo(obj: CodeDeployTargetGroupInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployTargetGroupPairInfo
 */
export interface CodeDeployTargetGroupPairInfo {
  /**
   * @schema CodeDeployTargetGroupPairInfo#targetGroups
   */
  readonly targetGroups?: CodeDeployTargetGroupInfo[];

  /**
   * @schema CodeDeployTargetGroupPairInfo#prodTrafficRoute
   */
  readonly prodTrafficRoute?: CodeDeployTrafficRoute;

  /**
   * @schema CodeDeployTargetGroupPairInfo#testTrafficRoute
   */
  readonly testTrafficRoute?: CodeDeployTrafficRoute;

}

/**
 * Converts an object of type 'CodeDeployTargetGroupPairInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployTargetGroupPairInfo(obj: CodeDeployTargetGroupPairInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'targetGroups': obj.targetGroups?.map(y => toJson_CodeDeployTargetGroupInfo(y)),
    'prodTrafficRoute': toJson_CodeDeployTrafficRoute(obj.prodTrafficRoute),
    'testTrafficRoute': toJson_CodeDeployTrafficRoute(obj.testTrafficRoute),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployDiagnostics
 */
export interface CodeDeployDiagnostics {
  /**
   * @schema CodeDeployDiagnostics#errorCode
   */
  readonly errorCode?: string;

  /**
   * @schema CodeDeployDiagnostics#scriptName
   */
  readonly scriptName?: string;

  /**
   * @schema CodeDeployDiagnostics#message
   */
  readonly message?: string;

  /**
   * @schema CodeDeployDiagnostics#logTail
   */
  readonly logTail?: string;

}

/**
 * Converts an object of type 'CodeDeployDiagnostics' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployDiagnostics(obj: CodeDeployDiagnostics | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'errorCode': obj.errorCode,
    'scriptName': obj.scriptName,
    'message': obj.message,
    'logTail': obj.logTail,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployLambdaFunctionInfo
 */
export interface CodeDeployLambdaFunctionInfo {
  /**
   * @schema CodeDeployLambdaFunctionInfo#functionName
   */
  readonly functionName?: string;

  /**
   * @schema CodeDeployLambdaFunctionInfo#functionAlias
   */
  readonly functionAlias?: string;

  /**
   * @schema CodeDeployLambdaFunctionInfo#currentVersion
   */
  readonly currentVersion?: string;

  /**
   * @schema CodeDeployLambdaFunctionInfo#targetVersion
   */
  readonly targetVersion?: string;

  /**
   * @schema CodeDeployLambdaFunctionInfo#targetVersionWeight
   */
  readonly targetVersionWeight?: number;

}

/**
 * Converts an object of type 'CodeDeployLambdaFunctionInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployLambdaFunctionInfo(obj: CodeDeployLambdaFunctionInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'functionName': obj.functionName,
    'functionAlias': obj.functionAlias,
    'currentVersion': obj.currentVersion,
    'targetVersion': obj.targetVersion,
    'targetVersionWeight': obj.targetVersionWeight,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployEcsTaskSet
 */
export interface CodeDeployEcsTaskSet {
  /**
   * @schema CodeDeployEcsTaskSet#identifer
   */
  readonly identifer?: string;

  /**
   * @schema CodeDeployEcsTaskSet#desiredCount
   */
  readonly desiredCount?: number;

  /**
   * @schema CodeDeployEcsTaskSet#pendingCount
   */
  readonly pendingCount?: number;

  /**
   * @schema CodeDeployEcsTaskSet#runningCount
   */
  readonly runningCount?: number;

  /**
   * @schema CodeDeployEcsTaskSet#status
   */
  readonly status?: string;

  /**
   * @schema CodeDeployEcsTaskSet#trafficWeight
   */
  readonly trafficWeight?: number;

  /**
   * @schema CodeDeployEcsTaskSet#targetGroup
   */
  readonly targetGroup?: CodeDeployTargetGroupInfo;

  /**
   * @schema CodeDeployEcsTaskSet#taskSetLabel
   */
  readonly taskSetLabel?: string;

}

/**
 * Converts an object of type 'CodeDeployEcsTaskSet' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployEcsTaskSet(obj: CodeDeployEcsTaskSet | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'identifer': obj.identifer,
    'desiredCount': obj.desiredCount,
    'pendingCount': obj.pendingCount,
    'runningCount': obj.runningCount,
    'status': obj.status,
    'trafficWeight': obj.trafficWeight,
    'targetGroup': toJson_CodeDeployTargetGroupInfo(obj.targetGroup),
    'taskSetLabel': obj.taskSetLabel,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeDeployTrafficRoute
 */
export interface CodeDeployTrafficRoute {
  /**
   * @schema CodeDeployTrafficRoute#listenerArns
   */
  readonly listenerArns?: string[];

}

/**
 * Converts an object of type 'CodeDeployTrafficRoute' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeDeployTrafficRoute(obj: CodeDeployTrafficRoute | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'listenerArns': obj.listenerArns?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
