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
 * @schema CodeDeployBatchGetApplicationsInput
 */
export interface CodeDeployBatchGetApplicationsInput {
  /**
   * @schema CodeDeployBatchGetApplicationsInput#applicationNames
   */
  readonly applicationNames: string[];

}

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
 * @schema CodeDeployBatchGetDeploymentTargetsOutput
 */
export interface CodeDeployBatchGetDeploymentTargetsOutput {
  /**
   * @schema CodeDeployBatchGetDeploymentTargetsOutput#deploymentTargets
   */
  readonly deploymentTargets?: CodeDeployDeploymentTarget[];

}

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
 * @schema CodeDeployBatchGetDeploymentsOutput
 */
export interface CodeDeployBatchGetDeploymentsOutput {
  /**
   * @schema CodeDeployBatchGetDeploymentsOutput#deploymentsInfo
   */
  readonly deploymentsInfo?: CodeDeployDeploymentInfo[];

}

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
 * @schema CodeDeployBatchGetOnPremisesInstancesOutput
 */
export interface CodeDeployBatchGetOnPremisesInstancesOutput {
  /**
   * @schema CodeDeployBatchGetOnPremisesInstancesOutput#instanceInfos
   */
  readonly instanceInfos?: CodeDeployInstanceInfo[];

}

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
 * @schema CodeDeployCreateApplicationOutput
 */
export interface CodeDeployCreateApplicationOutput {
  /**
   * @schema CodeDeployCreateApplicationOutput#applicationId
   */
  readonly applicationId?: string;

}

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
 * @schema CodeDeployCreateDeploymentOutput
 */
export interface CodeDeployCreateDeploymentOutput {
  /**
   * @schema CodeDeployCreateDeploymentOutput#deploymentId
   */
  readonly deploymentId?: string;

}

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
 * @schema CodeDeployCreateDeploymentConfigOutput
 */
export interface CodeDeployCreateDeploymentConfigOutput {
  /**
   * @schema CodeDeployCreateDeploymentConfigOutput#deploymentConfigId
   */
  readonly deploymentConfigId?: string;

}

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
 * @schema CodeDeployCreateDeploymentGroupOutput
 */
export interface CodeDeployCreateDeploymentGroupOutput {
  /**
   * @schema CodeDeployCreateDeploymentGroupOutput#deploymentGroupId
   */
  readonly deploymentGroupId?: string;

}

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
 * @schema CodeDeployDeleteDeploymentConfigInput
 */
export interface CodeDeployDeleteDeploymentConfigInput {
  /**
   * @schema CodeDeployDeleteDeploymentConfigInput#deploymentConfigName
   */
  readonly deploymentConfigName: string;

}

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
 * @schema CodeDeployDeleteDeploymentGroupOutput
 */
export interface CodeDeployDeleteDeploymentGroupOutput {
  /**
   * @schema CodeDeployDeleteDeploymentGroupOutput#hooksNotCleanedUp
   */
  readonly hooksNotCleanedUp?: CodeDeployAutoScalingGroup[];

}

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
 * @schema CodeDeployDeleteGitHubAccountTokenOutput
 */
export interface CodeDeployDeleteGitHubAccountTokenOutput {
  /**
   * @schema CodeDeployDeleteGitHubAccountTokenOutput#tokenName
   */
  readonly tokenName?: string;

}

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
 * @schema CodeDeployDeleteResourcesByExternalIdOutput
 */
export interface CodeDeployDeleteResourcesByExternalIdOutput {
}

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
 * @schema CodeDeployGetApplicationInput
 */
export interface CodeDeployGetApplicationInput {
  /**
   * @schema CodeDeployGetApplicationInput#applicationName
   */
  readonly applicationName: string;

}

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
 * @schema CodeDeployGetDeploymentInput
 */
export interface CodeDeployGetDeploymentInput {
  /**
   * @schema CodeDeployGetDeploymentInput#deploymentId
   */
  readonly deploymentId: string;

}

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
 * @schema CodeDeployGetDeploymentConfigInput
 */
export interface CodeDeployGetDeploymentConfigInput {
  /**
   * @schema CodeDeployGetDeploymentConfigInput#deploymentConfigName
   */
  readonly deploymentConfigName: string;

}

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
 * @schema CodeDeployGetDeploymentGroupOutput
 */
export interface CodeDeployGetDeploymentGroupOutput {
  /**
   * @schema CodeDeployGetDeploymentGroupOutput#deploymentGroupInfo
   */
  readonly deploymentGroupInfo?: CodeDeployDeploymentGroupInfo;

}

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
 * @schema CodeDeployGetDeploymentInstanceOutput
 */
export interface CodeDeployGetDeploymentInstanceOutput {
  /**
   * @schema CodeDeployGetDeploymentInstanceOutput#instanceSummary
   */
  readonly instanceSummary?: CodeDeployInstanceSummary;

}

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
 * @schema CodeDeployGetDeploymentTargetOutput
 */
export interface CodeDeployGetDeploymentTargetOutput {
  /**
   * @schema CodeDeployGetDeploymentTargetOutput#deploymentTarget
   */
  readonly deploymentTarget?: CodeDeployDeploymentTarget;

}

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
 * @schema CodeDeployGetOnPremisesInstanceOutput
 */
export interface CodeDeployGetOnPremisesInstanceOutput {
  /**
   * @schema CodeDeployGetOnPremisesInstanceOutput#instanceInfo
   */
  readonly instanceInfo?: CodeDeployInstanceInfo;

}

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
 * @schema CodeDeployListApplicationsInput
 */
export interface CodeDeployListApplicationsInput {
  /**
   * @schema CodeDeployListApplicationsInput#nextToken
   */
  readonly nextToken?: string;

}

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
 * @schema CodeDeployListDeploymentConfigsInput
 */
export interface CodeDeployListDeploymentConfigsInput {
  /**
   * @schema CodeDeployListDeploymentConfigsInput#nextToken
   */
  readonly nextToken?: string;

}

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
 * @schema CodeDeployListGitHubAccountTokenNamesInput
 */
export interface CodeDeployListGitHubAccountTokenNamesInput {
  /**
   * @schema CodeDeployListGitHubAccountTokenNamesInput#nextToken
   */
  readonly nextToken?: string;

}

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
 * @schema CodeDeployListTagsForResourceInput
 */
export interface CodeDeployListTagsForResourceInput {
  /**
   * @schema CodeDeployListTagsForResourceInput#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema CodeDeployListTagsForResourceInput#NextToken
   */
  readonly nextToken?: string;

}

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
 * @schema CodeDeployPutLifecycleEventHookExecutionStatusOutput
 */
export interface CodeDeployPutLifecycleEventHookExecutionStatusOutput {
  /**
   * @schema CodeDeployPutLifecycleEventHookExecutionStatusOutput#lifecycleEventHookExecutionId
   */
  readonly lifecycleEventHookExecutionId?: string;

}

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
 * @schema CodeDeploySkipWaitTimeForInstanceTerminationInput
 */
export interface CodeDeploySkipWaitTimeForInstanceTerminationInput {
  /**
   * @schema CodeDeploySkipWaitTimeForInstanceTerminationInput#deploymentId
   */
  readonly deploymentId?: string;

}

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
 * @schema CodeDeployTagResourceInput
 */
export interface CodeDeployTagResourceInput {
  /**
   * @schema CodeDeployTagResourceInput#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema CodeDeployTagResourceInput#Tags
   */
  readonly tags: CodeDeployTag[];

}

/**
 * @schema CodeDeployTagResourceOutput
 */
export interface CodeDeployTagResourceOutput {
}

/**
 * @schema CodeDeployUntagResourceInput
 */
export interface CodeDeployUntagResourceInput {
  /**
   * @schema CodeDeployUntagResourceInput#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema CodeDeployUntagResourceInput#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema CodeDeployUntagResourceOutput
 */
export interface CodeDeployUntagResourceOutput {
}

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
 * @schema CodeDeployUpdateDeploymentGroupOutput
 */
export interface CodeDeployUpdateDeploymentGroupOutput {
  /**
   * @schema CodeDeployUpdateDeploymentGroupOutput#hooksNotCleanedUp
   */
  readonly hooksNotCleanedUp?: CodeDeployAutoScalingGroup[];

}

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

}

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
 * @schema CodeDeployMinimumHealthyHosts
 */
export interface CodeDeployMinimumHealthyHosts {
  /**
   * @schema CodeDeployMinimumHealthyHosts#value
   */
  readonly value?: number;

  /**
   * @schema CodeDeployMinimumHealthyHosts#type
   */
  readonly type?: string;

}

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
 * @schema CodeDeployEc2TagSet
 */
export interface CodeDeployEc2TagSet {
  /**
   * @schema CodeDeployEc2TagSet#ec2TagSetList
   */
  readonly ec2TagSetList?: CodeDeployEc2TagFilter[][];

}

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
 * @schema CodeDeployOnPremisesTagSet
 */
export interface CodeDeployOnPremisesTagSet {
  /**
   * @schema CodeDeployOnPremisesTagSet#onPremisesTagSetList
   */
  readonly onPremisesTagSetList?: CodeDeployTagFilter[][];

}

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
 * @schema CodeDeployAlarm
 */
export interface CodeDeployAlarm {
  /**
   * @schema CodeDeployAlarm#name
   */
  readonly name?: string;

}

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
 * @schema CodeDeployGreenFleetProvisioningOption
 */
export interface CodeDeployGreenFleetProvisioningOption {
  /**
   * @schema CodeDeployGreenFleetProvisioningOption#action
   */
  readonly action?: string;

}

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
 * @schema CodeDeployTargetGroupInfo
 */
export interface CodeDeployTargetGroupInfo {
  /**
   * @schema CodeDeployTargetGroupInfo#name
   */
  readonly name?: string;

}

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
 * @schema CodeDeployTrafficRoute
 */
export interface CodeDeployTrafficRoute {
  /**
   * @schema CodeDeployTrafficRoute#listenerArns
   */
  readonly listenerArns?: string[];

}
