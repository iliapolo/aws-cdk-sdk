/**
 * @schema AddTagsToOnPremisesInstancesInput
 */
export interface AddTagsToOnPremisesInstancesInput {
  /**
   * @schema AddTagsToOnPremisesInstancesInput#tags
   */
  readonly tags: Tag[];

  /**
   * @schema AddTagsToOnPremisesInstancesInput#instanceNames
   */
  readonly instanceNames: string[];

}

/**
 * @schema BatchGetApplicationRevisionsInput
 */
export interface BatchGetApplicationRevisionsInput {
  /**
   * @schema BatchGetApplicationRevisionsInput#applicationName
   */
  readonly applicationName: string;

  /**
   * @schema BatchGetApplicationRevisionsInput#revisions
   */
  readonly revisions: RevisionLocation[];

}

/**
 * @schema BatchGetApplicationRevisionsOutput
 */
export interface BatchGetApplicationRevisionsOutput {
  /**
   * @schema BatchGetApplicationRevisionsOutput#applicationName
   */
  readonly applicationName?: string;

  /**
   * @schema BatchGetApplicationRevisionsOutput#errorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema BatchGetApplicationRevisionsOutput#revisions
   */
  readonly revisions?: RevisionInfo[];

}

/**
 * @schema BatchGetApplicationsInput
 */
export interface BatchGetApplicationsInput {
  /**
   * @schema BatchGetApplicationsInput#applicationNames
   */
  readonly applicationNames: string[];

}

/**
 * @schema BatchGetApplicationsOutput
 */
export interface BatchGetApplicationsOutput {
  /**
   * @schema BatchGetApplicationsOutput#applicationsInfo
   */
  readonly applicationsInfo?: ApplicationInfo[];

}

/**
 * @schema BatchGetDeploymentGroupsInput
 */
export interface BatchGetDeploymentGroupsInput {
  /**
   * @schema BatchGetDeploymentGroupsInput#applicationName
   */
  readonly applicationName: string;

  /**
   * @schema BatchGetDeploymentGroupsInput#deploymentGroupNames
   */
  readonly deploymentGroupNames: string[];

}

/**
 * @schema BatchGetDeploymentGroupsOutput
 */
export interface BatchGetDeploymentGroupsOutput {
  /**
   * @schema BatchGetDeploymentGroupsOutput#deploymentGroupsInfo
   */
  readonly deploymentGroupsInfo?: DeploymentGroupInfo[];

  /**
   * @schema BatchGetDeploymentGroupsOutput#errorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema BatchGetDeploymentInstancesInput
 */
export interface BatchGetDeploymentInstancesInput {
  /**
   * @schema BatchGetDeploymentInstancesInput#deploymentId
   */
  readonly deploymentId: string;

  /**
   * @schema BatchGetDeploymentInstancesInput#instanceIds
   */
  readonly instanceIds: string[];

}

/**
 * @schema BatchGetDeploymentInstancesOutput
 */
export interface BatchGetDeploymentInstancesOutput {
  /**
   * @schema BatchGetDeploymentInstancesOutput#instancesSummary
   */
  readonly instancesSummary?: InstanceSummary[];

  /**
   * @schema BatchGetDeploymentInstancesOutput#errorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema BatchGetDeploymentTargetsInput
 */
export interface BatchGetDeploymentTargetsInput {
  /**
   * @schema BatchGetDeploymentTargetsInput#deploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema BatchGetDeploymentTargetsInput#targetIds
   */
  readonly targetIds?: string[];

}

/**
 * @schema BatchGetDeploymentTargetsOutput
 */
export interface BatchGetDeploymentTargetsOutput {
  /**
   * @schema BatchGetDeploymentTargetsOutput#deploymentTargets
   */
  readonly deploymentTargets?: DeploymentTarget[];

}

/**
 * @schema BatchGetDeploymentsInput
 */
export interface BatchGetDeploymentsInput {
  /**
   * @schema BatchGetDeploymentsInput#deploymentIds
   */
  readonly deploymentIds: string[];

}

/**
 * @schema BatchGetDeploymentsOutput
 */
export interface BatchGetDeploymentsOutput {
  /**
   * @schema BatchGetDeploymentsOutput#deploymentsInfo
   */
  readonly deploymentsInfo?: DeploymentInfo[];

}

/**
 * @schema BatchGetOnPremisesInstancesInput
 */
export interface BatchGetOnPremisesInstancesInput {
  /**
   * @schema BatchGetOnPremisesInstancesInput#instanceNames
   */
  readonly instanceNames: string[];

}

/**
 * @schema BatchGetOnPremisesInstancesOutput
 */
export interface BatchGetOnPremisesInstancesOutput {
  /**
   * @schema BatchGetOnPremisesInstancesOutput#instanceInfos
   */
  readonly instanceInfos?: InstanceInfo[];

}

/**
 * @schema ContinueDeploymentInput
 */
export interface ContinueDeploymentInput {
  /**
   * @schema ContinueDeploymentInput#deploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema ContinueDeploymentInput#deploymentWaitType
   */
  readonly deploymentWaitType?: string;

}

/**
 * @schema CreateApplicationInput
 */
export interface CreateApplicationInput {
  /**
   * @schema CreateApplicationInput#applicationName
   */
  readonly applicationName: string;

  /**
   * @schema CreateApplicationInput#computePlatform
   */
  readonly computePlatform?: string;

  /**
   * @schema CreateApplicationInput#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateApplicationOutput
 */
export interface CreateApplicationOutput {
  /**
   * @schema CreateApplicationOutput#applicationId
   */
  readonly applicationId?: string;

}

/**
 * @schema CreateDeploymentInput
 */
export interface CreateDeploymentInput {
  /**
   * @schema CreateDeploymentInput#applicationName
   */
  readonly applicationName: string;

  /**
   * @schema CreateDeploymentInput#deploymentGroupName
   */
  readonly deploymentGroupName?: string;

  /**
   * @schema CreateDeploymentInput#revision
   */
  readonly revision?: RevisionLocation;

  /**
   * @schema CreateDeploymentInput#deploymentConfigName
   */
  readonly deploymentConfigName?: string;

  /**
   * @schema CreateDeploymentInput#description
   */
  readonly description?: string;

  /**
   * @schema CreateDeploymentInput#ignoreApplicationStopFailures
   */
  readonly ignoreApplicationStopFailures?: boolean;

  /**
   * @schema CreateDeploymentInput#targetInstances
   */
  readonly targetInstances?: TargetInstances;

  /**
   * @schema CreateDeploymentInput#autoRollbackConfiguration
   */
  readonly autoRollbackConfiguration?: AutoRollbackConfiguration;

  /**
   * @schema CreateDeploymentInput#updateOutdatedInstancesOnly
   */
  readonly updateOutdatedInstancesOnly?: boolean;

  /**
   * @schema CreateDeploymentInput#fileExistsBehavior
   */
  readonly fileExistsBehavior?: string;

}

/**
 * @schema CreateDeploymentOutput
 */
export interface CreateDeploymentOutput {
  /**
   * @schema CreateDeploymentOutput#deploymentId
   */
  readonly deploymentId?: string;

}

/**
 * @schema CreateDeploymentConfigInput
 */
export interface CreateDeploymentConfigInput {
  /**
   * @schema CreateDeploymentConfigInput#deploymentConfigName
   */
  readonly deploymentConfigName: string;

  /**
   * @schema CreateDeploymentConfigInput#minimumHealthyHosts
   */
  readonly minimumHealthyHosts?: MinimumHealthyHosts;

  /**
   * @schema CreateDeploymentConfigInput#trafficRoutingConfig
   */
  readonly trafficRoutingConfig?: TrafficRoutingConfig;

  /**
   * @schema CreateDeploymentConfigInput#computePlatform
   */
  readonly computePlatform?: string;

}

/**
 * @schema CreateDeploymentConfigOutput
 */
export interface CreateDeploymentConfigOutput {
  /**
   * @schema CreateDeploymentConfigOutput#deploymentConfigId
   */
  readonly deploymentConfigId?: string;

}

/**
 * @schema CreateDeploymentGroupInput
 */
export interface CreateDeploymentGroupInput {
  /**
   * @schema CreateDeploymentGroupInput#applicationName
   */
  readonly applicationName: string;

  /**
   * @schema CreateDeploymentGroupInput#deploymentGroupName
   */
  readonly deploymentGroupName: string;

  /**
   * @schema CreateDeploymentGroupInput#deploymentConfigName
   */
  readonly deploymentConfigName?: string;

  /**
   * @schema CreateDeploymentGroupInput#ec2TagFilters
   */
  readonly ec2TagFilters?: Ec2TagFilter[];

  /**
   * @schema CreateDeploymentGroupInput#onPremisesInstanceTagFilters
   */
  readonly onPremisesInstanceTagFilters?: TagFilter[];

  /**
   * @schema CreateDeploymentGroupInput#autoScalingGroups
   */
  readonly autoScalingGroups?: string[];

  /**
   * @schema CreateDeploymentGroupInput#serviceRoleArn
   */
  readonly serviceRoleArn: string;

  /**
   * @schema CreateDeploymentGroupInput#triggerConfigurations
   */
  readonly triggerConfigurations?: TriggerConfig[];

  /**
   * @schema CreateDeploymentGroupInput#alarmConfiguration
   */
  readonly alarmConfiguration?: AlarmConfiguration;

  /**
   * @schema CreateDeploymentGroupInput#autoRollbackConfiguration
   */
  readonly autoRollbackConfiguration?: AutoRollbackConfiguration;

  /**
   * @schema CreateDeploymentGroupInput#deploymentStyle
   */
  readonly deploymentStyle?: DeploymentStyle;

  /**
   * @schema CreateDeploymentGroupInput#blueGreenDeploymentConfiguration
   */
  readonly blueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration;

  /**
   * @schema CreateDeploymentGroupInput#loadBalancerInfo
   */
  readonly loadBalancerInfo?: LoadBalancerInfo;

  /**
   * @schema CreateDeploymentGroupInput#ec2TagSet
   */
  readonly ec2TagSet?: Ec2TagSet;

  /**
   * @schema CreateDeploymentGroupInput#ecsServices
   */
  readonly ecsServices?: EcsService[];

  /**
   * @schema CreateDeploymentGroupInput#onPremisesTagSet
   */
  readonly onPremisesTagSet?: OnPremisesTagSet;

  /**
   * @schema CreateDeploymentGroupInput#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateDeploymentGroupOutput
 */
export interface CreateDeploymentGroupOutput {
  /**
   * @schema CreateDeploymentGroupOutput#deploymentGroupId
   */
  readonly deploymentGroupId?: string;

}

/**
 * @schema DeleteApplicationInput
 */
export interface DeleteApplicationInput {
  /**
   * @schema DeleteApplicationInput#applicationName
   */
  readonly applicationName: string;

}

/**
 * @schema DeleteDeploymentConfigInput
 */
export interface DeleteDeploymentConfigInput {
  /**
   * @schema DeleteDeploymentConfigInput#deploymentConfigName
   */
  readonly deploymentConfigName: string;

}

/**
 * @schema DeleteDeploymentGroupInput
 */
export interface DeleteDeploymentGroupInput {
  /**
   * @schema DeleteDeploymentGroupInput#applicationName
   */
  readonly applicationName: string;

  /**
   * @schema DeleteDeploymentGroupInput#deploymentGroupName
   */
  readonly deploymentGroupName: string;

}

/**
 * @schema DeleteDeploymentGroupOutput
 */
export interface DeleteDeploymentGroupOutput {
  /**
   * @schema DeleteDeploymentGroupOutput#hooksNotCleanedUp
   */
  readonly hooksNotCleanedUp?: AutoScalingGroup[];

}

/**
 * @schema DeleteGitHubAccountTokenInput
 */
export interface DeleteGitHubAccountTokenInput {
  /**
   * @schema DeleteGitHubAccountTokenInput#tokenName
   */
  readonly tokenName?: string;

}

/**
 * @schema DeleteGitHubAccountTokenOutput
 */
export interface DeleteGitHubAccountTokenOutput {
  /**
   * @schema DeleteGitHubAccountTokenOutput#tokenName
   */
  readonly tokenName?: string;

}

/**
 * @schema DeleteResourcesByExternalIdInput
 */
export interface DeleteResourcesByExternalIdInput {
  /**
   * @schema DeleteResourcesByExternalIdInput#externalId
   */
  readonly externalId?: string;

}

/**
 * @schema DeleteResourcesByExternalIdOutput
 */
export interface DeleteResourcesByExternalIdOutput {
}

/**
 * @schema DeregisterOnPremisesInstanceInput
 */
export interface DeregisterOnPremisesInstanceInput {
  /**
   * @schema DeregisterOnPremisesInstanceInput#instanceName
   */
  readonly instanceName: string;

}

/**
 * @schema GetApplicationInput
 */
export interface GetApplicationInput {
  /**
   * @schema GetApplicationInput#applicationName
   */
  readonly applicationName: string;

}

/**
 * @schema GetApplicationOutput
 */
export interface GetApplicationOutput {
  /**
   * @schema GetApplicationOutput#application
   */
  readonly application?: ApplicationInfo;

}

/**
 * @schema GetApplicationRevisionInput
 */
export interface GetApplicationRevisionInput {
  /**
   * @schema GetApplicationRevisionInput#applicationName
   */
  readonly applicationName: string;

  /**
   * @schema GetApplicationRevisionInput#revision
   */
  readonly revision: RevisionLocation;

}

/**
 * @schema GetApplicationRevisionOutput
 */
export interface GetApplicationRevisionOutput {
  /**
   * @schema GetApplicationRevisionOutput#applicationName
   */
  readonly applicationName?: string;

  /**
   * @schema GetApplicationRevisionOutput#revision
   */
  readonly revision?: RevisionLocation;

  /**
   * @schema GetApplicationRevisionOutput#revisionInfo
   */
  readonly revisionInfo?: GenericRevisionInfo;

}

/**
 * @schema GetDeploymentInput
 */
export interface GetDeploymentInput {
  /**
   * @schema GetDeploymentInput#deploymentId
   */
  readonly deploymentId: string;

}

/**
 * @schema GetDeploymentOutput
 */
export interface GetDeploymentOutput {
  /**
   * @schema GetDeploymentOutput#deploymentInfo
   */
  readonly deploymentInfo?: DeploymentInfo;

}

/**
 * @schema GetDeploymentConfigInput
 */
export interface GetDeploymentConfigInput {
  /**
   * @schema GetDeploymentConfigInput#deploymentConfigName
   */
  readonly deploymentConfigName: string;

}

/**
 * @schema GetDeploymentConfigOutput
 */
export interface GetDeploymentConfigOutput {
  /**
   * @schema GetDeploymentConfigOutput#deploymentConfigInfo
   */
  readonly deploymentConfigInfo?: DeploymentConfigInfo;

}

/**
 * @schema GetDeploymentGroupInput
 */
export interface GetDeploymentGroupInput {
  /**
   * @schema GetDeploymentGroupInput#applicationName
   */
  readonly applicationName: string;

  /**
   * @schema GetDeploymentGroupInput#deploymentGroupName
   */
  readonly deploymentGroupName: string;

}

/**
 * @schema GetDeploymentGroupOutput
 */
export interface GetDeploymentGroupOutput {
  /**
   * @schema GetDeploymentGroupOutput#deploymentGroupInfo
   */
  readonly deploymentGroupInfo?: DeploymentGroupInfo;

}

/**
 * @schema GetDeploymentInstanceInput
 */
export interface GetDeploymentInstanceInput {
  /**
   * @schema GetDeploymentInstanceInput#deploymentId
   */
  readonly deploymentId: string;

  /**
   * @schema GetDeploymentInstanceInput#instanceId
   */
  readonly instanceId: string;

}

/**
 * @schema GetDeploymentInstanceOutput
 */
export interface GetDeploymentInstanceOutput {
  /**
   * @schema GetDeploymentInstanceOutput#instanceSummary
   */
  readonly instanceSummary?: InstanceSummary;

}

/**
 * @schema GetDeploymentTargetInput
 */
export interface GetDeploymentTargetInput {
  /**
   * @schema GetDeploymentTargetInput#deploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema GetDeploymentTargetInput#targetId
   */
  readonly targetId?: string;

}

/**
 * @schema GetDeploymentTargetOutput
 */
export interface GetDeploymentTargetOutput {
  /**
   * @schema GetDeploymentTargetOutput#deploymentTarget
   */
  readonly deploymentTarget?: DeploymentTarget;

}

/**
 * @schema GetOnPremisesInstanceInput
 */
export interface GetOnPremisesInstanceInput {
  /**
   * @schema GetOnPremisesInstanceInput#instanceName
   */
  readonly instanceName: string;

}

/**
 * @schema GetOnPremisesInstanceOutput
 */
export interface GetOnPremisesInstanceOutput {
  /**
   * @schema GetOnPremisesInstanceOutput#instanceInfo
   */
  readonly instanceInfo?: InstanceInfo;

}

/**
 * @schema ListApplicationRevisionsInput
 */
export interface ListApplicationRevisionsInput {
  /**
   * @schema ListApplicationRevisionsInput#applicationName
   */
  readonly applicationName: string;

  /**
   * @schema ListApplicationRevisionsInput#sortBy
   */
  readonly sortBy?: string;

  /**
   * @schema ListApplicationRevisionsInput#sortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema ListApplicationRevisionsInput#s3Bucket
   */
  readonly s3Bucket?: string;

  /**
   * @schema ListApplicationRevisionsInput#s3KeyPrefix
   */
  readonly s3KeyPrefix?: string;

  /**
   * @schema ListApplicationRevisionsInput#deployed
   */
  readonly deployed?: string;

  /**
   * @schema ListApplicationRevisionsInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListApplicationRevisionsOutput
 */
export interface ListApplicationRevisionsOutput {
  /**
   * @schema ListApplicationRevisionsOutput#revisions
   */
  readonly revisions?: RevisionLocation[];

  /**
   * @schema ListApplicationRevisionsOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListApplicationsInput
 */
export interface ListApplicationsInput {
  /**
   * @schema ListApplicationsInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListApplicationsOutput
 */
export interface ListApplicationsOutput {
  /**
   * @schema ListApplicationsOutput#applications
   */
  readonly applications?: string[];

  /**
   * @schema ListApplicationsOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListDeploymentConfigsInput
 */
export interface ListDeploymentConfigsInput {
  /**
   * @schema ListDeploymentConfigsInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListDeploymentConfigsOutput
 */
export interface ListDeploymentConfigsOutput {
  /**
   * @schema ListDeploymentConfigsOutput#deploymentConfigsList
   */
  readonly deploymentConfigsList?: string[];

  /**
   * @schema ListDeploymentConfigsOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListDeploymentGroupsInput
 */
export interface ListDeploymentGroupsInput {
  /**
   * @schema ListDeploymentGroupsInput#applicationName
   */
  readonly applicationName: string;

  /**
   * @schema ListDeploymentGroupsInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListDeploymentGroupsOutput
 */
export interface ListDeploymentGroupsOutput {
  /**
   * @schema ListDeploymentGroupsOutput#applicationName
   */
  readonly applicationName?: string;

  /**
   * @schema ListDeploymentGroupsOutput#deploymentGroups
   */
  readonly deploymentGroups?: string[];

  /**
   * @schema ListDeploymentGroupsOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListDeploymentInstancesInput
 */
export interface ListDeploymentInstancesInput {
  /**
   * @schema ListDeploymentInstancesInput#deploymentId
   */
  readonly deploymentId: string;

  /**
   * @schema ListDeploymentInstancesInput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListDeploymentInstancesInput#instanceStatusFilter
   */
  readonly instanceStatusFilter?: string[];

  /**
   * @schema ListDeploymentInstancesInput#instanceTypeFilter
   */
  readonly instanceTypeFilter?: string[];

}

/**
 * @schema ListDeploymentInstancesOutput
 */
export interface ListDeploymentInstancesOutput {
  /**
   * @schema ListDeploymentInstancesOutput#instancesList
   */
  readonly instancesList?: string[];

  /**
   * @schema ListDeploymentInstancesOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListDeploymentTargetsInput
 */
export interface ListDeploymentTargetsInput {
  /**
   * @schema ListDeploymentTargetsInput#deploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema ListDeploymentTargetsInput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListDeploymentTargetsInput#targetFilters
   */
  readonly targetFilters?: { [key: string]: string[] };

}

/**
 * @schema ListDeploymentTargetsOutput
 */
export interface ListDeploymentTargetsOutput {
  /**
   * @schema ListDeploymentTargetsOutput#targetIds
   */
  readonly targetIds?: string[];

  /**
   * @schema ListDeploymentTargetsOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListDeploymentsInput
 */
export interface ListDeploymentsInput {
  /**
   * @schema ListDeploymentsInput#applicationName
   */
  readonly applicationName?: string;

  /**
   * @schema ListDeploymentsInput#deploymentGroupName
   */
  readonly deploymentGroupName?: string;

  /**
   * @schema ListDeploymentsInput#externalId
   */
  readonly externalId?: string;

  /**
   * @schema ListDeploymentsInput#includeOnlyStatuses
   */
  readonly includeOnlyStatuses?: string[];

  /**
   * @schema ListDeploymentsInput#createTimeRange
   */
  readonly createTimeRange?: TimeRange;

  /**
   * @schema ListDeploymentsInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListDeploymentsOutput
 */
export interface ListDeploymentsOutput {
  /**
   * @schema ListDeploymentsOutput#deployments
   */
  readonly deployments?: string[];

  /**
   * @schema ListDeploymentsOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListGitHubAccountTokenNamesInput
 */
export interface ListGitHubAccountTokenNamesInput {
  /**
   * @schema ListGitHubAccountTokenNamesInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListGitHubAccountTokenNamesOutput
 */
export interface ListGitHubAccountTokenNamesOutput {
  /**
   * @schema ListGitHubAccountTokenNamesOutput#tokenNameList
   */
  readonly tokenNameList?: string[];

  /**
   * @schema ListGitHubAccountTokenNamesOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListOnPremisesInstancesInput
 */
export interface ListOnPremisesInstancesInput {
  /**
   * @schema ListOnPremisesInstancesInput#registrationStatus
   */
  readonly registrationStatus?: string;

  /**
   * @schema ListOnPremisesInstancesInput#tagFilters
   */
  readonly tagFilters?: TagFilter[];

  /**
   * @schema ListOnPremisesInstancesInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListOnPremisesInstancesOutput
 */
export interface ListOnPremisesInstancesOutput {
  /**
   * @schema ListOnPremisesInstancesOutput#instanceNames
   */
  readonly instanceNames?: string[];

  /**
   * @schema ListOnPremisesInstancesOutput#nextToken
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

  /**
   * @schema ListTagsForResourceInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsForResourceOutput
 */
export interface ListTagsForResourceOutput {
  /**
   * @schema ListTagsForResourceOutput#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema ListTagsForResourceOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema PutLifecycleEventHookExecutionStatusInput
 */
export interface PutLifecycleEventHookExecutionStatusInput {
  /**
   * @schema PutLifecycleEventHookExecutionStatusInput#deploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema PutLifecycleEventHookExecutionStatusInput#lifecycleEventHookExecutionId
   */
  readonly lifecycleEventHookExecutionId?: string;

  /**
   * @schema PutLifecycleEventHookExecutionStatusInput#status
   */
  readonly status?: string;

}

/**
 * @schema PutLifecycleEventHookExecutionStatusOutput
 */
export interface PutLifecycleEventHookExecutionStatusOutput {
  /**
   * @schema PutLifecycleEventHookExecutionStatusOutput#lifecycleEventHookExecutionId
   */
  readonly lifecycleEventHookExecutionId?: string;

}

/**
 * @schema RegisterApplicationRevisionInput
 */
export interface RegisterApplicationRevisionInput {
  /**
   * @schema RegisterApplicationRevisionInput#applicationName
   */
  readonly applicationName: string;

  /**
   * @schema RegisterApplicationRevisionInput#description
   */
  readonly description?: string;

  /**
   * @schema RegisterApplicationRevisionInput#revision
   */
  readonly revision: RevisionLocation;

}

/**
 * @schema RegisterOnPremisesInstanceInput
 */
export interface RegisterOnPremisesInstanceInput {
  /**
   * @schema RegisterOnPremisesInstanceInput#instanceName
   */
  readonly instanceName: string;

  /**
   * @schema RegisterOnPremisesInstanceInput#iamSessionArn
   */
  readonly iamSessionArn?: string;

  /**
   * @schema RegisterOnPremisesInstanceInput#iamUserArn
   */
  readonly iamUserArn?: string;

}

/**
 * @schema RemoveTagsFromOnPremisesInstancesInput
 */
export interface RemoveTagsFromOnPremisesInstancesInput {
  /**
   * @schema RemoveTagsFromOnPremisesInstancesInput#tags
   */
  readonly tags: Tag[];

  /**
   * @schema RemoveTagsFromOnPremisesInstancesInput#instanceNames
   */
  readonly instanceNames: string[];

}

/**
 * @schema SkipWaitTimeForInstanceTerminationInput
 */
export interface SkipWaitTimeForInstanceTerminationInput {
  /**
   * @schema SkipWaitTimeForInstanceTerminationInput#deploymentId
   */
  readonly deploymentId?: string;

}

/**
 * @schema StopDeploymentInput
 */
export interface StopDeploymentInput {
  /**
   * @schema StopDeploymentInput#deploymentId
   */
  readonly deploymentId: string;

  /**
   * @schema StopDeploymentInput#autoRollbackEnabled
   */
  readonly autoRollbackEnabled?: boolean;

}

/**
 * @schema StopDeploymentOutput
 */
export interface StopDeploymentOutput {
  /**
   * @schema StopDeploymentOutput#status
   */
  readonly status?: string;

  /**
   * @schema StopDeploymentOutput#statusMessage
   */
  readonly statusMessage?: string;

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
  readonly tags: Tag[];

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
   * @schema UntagResourceInput#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UntagResourceOutput
 */
export interface UntagResourceOutput {
}

/**
 * @schema UpdateApplicationInput
 */
export interface UpdateApplicationInput {
  /**
   * @schema UpdateApplicationInput#applicationName
   */
  readonly applicationName?: string;

  /**
   * @schema UpdateApplicationInput#newApplicationName
   */
  readonly newApplicationName?: string;

}

/**
 * @schema UpdateDeploymentGroupInput
 */
export interface UpdateDeploymentGroupInput {
  /**
   * @schema UpdateDeploymentGroupInput#applicationName
   */
  readonly applicationName: string;

  /**
   * @schema UpdateDeploymentGroupInput#currentDeploymentGroupName
   */
  readonly currentDeploymentGroupName: string;

  /**
   * @schema UpdateDeploymentGroupInput#newDeploymentGroupName
   */
  readonly newDeploymentGroupName?: string;

  /**
   * @schema UpdateDeploymentGroupInput#deploymentConfigName
   */
  readonly deploymentConfigName?: string;

  /**
   * @schema UpdateDeploymentGroupInput#ec2TagFilters
   */
  readonly ec2TagFilters?: Ec2TagFilter[];

  /**
   * @schema UpdateDeploymentGroupInput#onPremisesInstanceTagFilters
   */
  readonly onPremisesInstanceTagFilters?: TagFilter[];

  /**
   * @schema UpdateDeploymentGroupInput#autoScalingGroups
   */
  readonly autoScalingGroups?: string[];

  /**
   * @schema UpdateDeploymentGroupInput#serviceRoleArn
   */
  readonly serviceRoleArn?: string;

  /**
   * @schema UpdateDeploymentGroupInput#triggerConfigurations
   */
  readonly triggerConfigurations?: TriggerConfig[];

  /**
   * @schema UpdateDeploymentGroupInput#alarmConfiguration
   */
  readonly alarmConfiguration?: AlarmConfiguration;

  /**
   * @schema UpdateDeploymentGroupInput#autoRollbackConfiguration
   */
  readonly autoRollbackConfiguration?: AutoRollbackConfiguration;

  /**
   * @schema UpdateDeploymentGroupInput#deploymentStyle
   */
  readonly deploymentStyle?: DeploymentStyle;

  /**
   * @schema UpdateDeploymentGroupInput#blueGreenDeploymentConfiguration
   */
  readonly blueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration;

  /**
   * @schema UpdateDeploymentGroupInput#loadBalancerInfo
   */
  readonly loadBalancerInfo?: LoadBalancerInfo;

  /**
   * @schema UpdateDeploymentGroupInput#ec2TagSet
   */
  readonly ec2TagSet?: Ec2TagSet;

  /**
   * @schema UpdateDeploymentGroupInput#ecsServices
   */
  readonly ecsServices?: EcsService[];

  /**
   * @schema UpdateDeploymentGroupInput#onPremisesTagSet
   */
  readonly onPremisesTagSet?: OnPremisesTagSet;

}

/**
 * @schema UpdateDeploymentGroupOutput
 */
export interface UpdateDeploymentGroupOutput {
  /**
   * @schema UpdateDeploymentGroupOutput#hooksNotCleanedUp
   */
  readonly hooksNotCleanedUp?: AutoScalingGroup[];

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
 * @schema RevisionLocation
 */
export interface RevisionLocation {
  /**
   * @schema RevisionLocation#revisionType
   */
  readonly revisionType?: string;

  /**
   * @schema RevisionLocation#s3Location
   */
  readonly s3Location?: S3Location;

  /**
   * @schema RevisionLocation#gitHubLocation
   */
  readonly gitHubLocation?: GitHubLocation;

  /**
   * @schema RevisionLocation#string
   */
  readonly string?: RawString;

  /**
   * @schema RevisionLocation#appSpecContent
   */
  readonly appSpecContent?: AppSpecContent;

}

/**
 * @schema RevisionInfo
 */
export interface RevisionInfo {
  /**
   * @schema RevisionInfo#revisionLocation
   */
  readonly revisionLocation?: RevisionLocation;

  /**
   * @schema RevisionInfo#genericRevisionInfo
   */
  readonly genericRevisionInfo?: GenericRevisionInfo;

}

/**
 * @schema ApplicationInfo
 */
export interface ApplicationInfo {
  /**
   * @schema ApplicationInfo#applicationId
   */
  readonly applicationId?: string;

  /**
   * @schema ApplicationInfo#applicationName
   */
  readonly applicationName?: string;

  /**
   * @schema ApplicationInfo#createTime
   */
  readonly createTime?: string;

  /**
   * @schema ApplicationInfo#linkedToGitHub
   */
  readonly linkedToGitHub?: boolean;

  /**
   * @schema ApplicationInfo#gitHubAccountName
   */
  readonly gitHubAccountName?: string;

  /**
   * @schema ApplicationInfo#computePlatform
   */
  readonly computePlatform?: string;

}

/**
 * @schema DeploymentGroupInfo
 */
export interface DeploymentGroupInfo {
  /**
   * @schema DeploymentGroupInfo#applicationName
   */
  readonly applicationName?: string;

  /**
   * @schema DeploymentGroupInfo#deploymentGroupId
   */
  readonly deploymentGroupId?: string;

  /**
   * @schema DeploymentGroupInfo#deploymentGroupName
   */
  readonly deploymentGroupName?: string;

  /**
   * @schema DeploymentGroupInfo#deploymentConfigName
   */
  readonly deploymentConfigName?: string;

  /**
   * @schema DeploymentGroupInfo#ec2TagFilters
   */
  readonly ec2TagFilters?: Ec2TagFilter[];

  /**
   * @schema DeploymentGroupInfo#onPremisesInstanceTagFilters
   */
  readonly onPremisesInstanceTagFilters?: TagFilter[];

  /**
   * @schema DeploymentGroupInfo#autoScalingGroups
   */
  readonly autoScalingGroups?: AutoScalingGroup[];

  /**
   * @schema DeploymentGroupInfo#serviceRoleArn
   */
  readonly serviceRoleArn?: string;

  /**
   * @schema DeploymentGroupInfo#targetRevision
   */
  readonly targetRevision?: RevisionLocation;

  /**
   * @schema DeploymentGroupInfo#triggerConfigurations
   */
  readonly triggerConfigurations?: TriggerConfig[];

  /**
   * @schema DeploymentGroupInfo#alarmConfiguration
   */
  readonly alarmConfiguration?: AlarmConfiguration;

  /**
   * @schema DeploymentGroupInfo#autoRollbackConfiguration
   */
  readonly autoRollbackConfiguration?: AutoRollbackConfiguration;

  /**
   * @schema DeploymentGroupInfo#deploymentStyle
   */
  readonly deploymentStyle?: DeploymentStyle;

  /**
   * @schema DeploymentGroupInfo#blueGreenDeploymentConfiguration
   */
  readonly blueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration;

  /**
   * @schema DeploymentGroupInfo#loadBalancerInfo
   */
  readonly loadBalancerInfo?: LoadBalancerInfo;

  /**
   * @schema DeploymentGroupInfo#lastSuccessfulDeployment
   */
  readonly lastSuccessfulDeployment?: LastDeploymentInfo;

  /**
   * @schema DeploymentGroupInfo#lastAttemptedDeployment
   */
  readonly lastAttemptedDeployment?: LastDeploymentInfo;

  /**
   * @schema DeploymentGroupInfo#ec2TagSet
   */
  readonly ec2TagSet?: Ec2TagSet;

  /**
   * @schema DeploymentGroupInfo#onPremisesTagSet
   */
  readonly onPremisesTagSet?: OnPremisesTagSet;

  /**
   * @schema DeploymentGroupInfo#computePlatform
   */
  readonly computePlatform?: string;

  /**
   * @schema DeploymentGroupInfo#ecsServices
   */
  readonly ecsServices?: EcsService[];

}

/**
 * @schema InstanceSummary
 */
export interface InstanceSummary {
  /**
   * @schema InstanceSummary#deploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema InstanceSummary#instanceId
   */
  readonly instanceId?: string;

  /**
   * @schema InstanceSummary#status
   */
  readonly status?: string;

  /**
   * @schema InstanceSummary#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema InstanceSummary#lifecycleEvents
   */
  readonly lifecycleEvents?: LifecycleEvent[];

  /**
   * @schema InstanceSummary#instanceType
   */
  readonly instanceType?: string;

}

/**
 * @schema DeploymentTarget
 */
export interface DeploymentTarget {
  /**
   * @schema DeploymentTarget#deploymentTargetType
   */
  readonly deploymentTargetType?: string;

  /**
   * @schema DeploymentTarget#instanceTarget
   */
  readonly instanceTarget?: InstanceTarget;

  /**
   * @schema DeploymentTarget#lambdaTarget
   */
  readonly lambdaTarget?: LambdaTarget;

  /**
   * @schema DeploymentTarget#ecsTarget
   */
  readonly ecsTarget?: EcsTarget;

  /**
   * @schema DeploymentTarget#cloudFormationTarget
   */
  readonly cloudFormationTarget?: CloudFormationTarget;

}

/**
 * @schema DeploymentInfo
 */
export interface DeploymentInfo {
  /**
   * @schema DeploymentInfo#applicationName
   */
  readonly applicationName?: string;

  /**
   * @schema DeploymentInfo#deploymentGroupName
   */
  readonly deploymentGroupName?: string;

  /**
   * @schema DeploymentInfo#deploymentConfigName
   */
  readonly deploymentConfigName?: string;

  /**
   * @schema DeploymentInfo#deploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema DeploymentInfo#previousRevision
   */
  readonly previousRevision?: RevisionLocation;

  /**
   * @schema DeploymentInfo#revision
   */
  readonly revision?: RevisionLocation;

  /**
   * @schema DeploymentInfo#status
   */
  readonly status?: string;

  /**
   * @schema DeploymentInfo#errorInformation
   */
  readonly errorInformation?: ErrorInformation;

  /**
   * @schema DeploymentInfo#createTime
   */
  readonly createTime?: string;

  /**
   * @schema DeploymentInfo#startTime
   */
  readonly startTime?: string;

  /**
   * @schema DeploymentInfo#completeTime
   */
  readonly completeTime?: string;

  /**
   * @schema DeploymentInfo#deploymentOverview
   */
  readonly deploymentOverview?: DeploymentOverview;

  /**
   * @schema DeploymentInfo#description
   */
  readonly description?: string;

  /**
   * @schema DeploymentInfo#creator
   */
  readonly creator?: string;

  /**
   * @schema DeploymentInfo#ignoreApplicationStopFailures
   */
  readonly ignoreApplicationStopFailures?: boolean;

  /**
   * @schema DeploymentInfo#autoRollbackConfiguration
   */
  readonly autoRollbackConfiguration?: AutoRollbackConfiguration;

  /**
   * @schema DeploymentInfo#updateOutdatedInstancesOnly
   */
  readonly updateOutdatedInstancesOnly?: boolean;

  /**
   * @schema DeploymentInfo#rollbackInfo
   */
  readonly rollbackInfo?: RollbackInfo;

  /**
   * @schema DeploymentInfo#deploymentStyle
   */
  readonly deploymentStyle?: DeploymentStyle;

  /**
   * @schema DeploymentInfo#targetInstances
   */
  readonly targetInstances?: TargetInstances;

  /**
   * @schema DeploymentInfo#instanceTerminationWaitTimeStarted
   */
  readonly instanceTerminationWaitTimeStarted?: boolean;

  /**
   * @schema DeploymentInfo#blueGreenDeploymentConfiguration
   */
  readonly blueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration;

  /**
   * @schema DeploymentInfo#loadBalancerInfo
   */
  readonly loadBalancerInfo?: LoadBalancerInfo;

  /**
   * @schema DeploymentInfo#additionalDeploymentStatusInfo
   */
  readonly additionalDeploymentStatusInfo?: string;

  /**
   * @schema DeploymentInfo#fileExistsBehavior
   */
  readonly fileExistsBehavior?: string;

  /**
   * @schema DeploymentInfo#deploymentStatusMessages
   */
  readonly deploymentStatusMessages?: string[];

  /**
   * @schema DeploymentInfo#computePlatform
   */
  readonly computePlatform?: string;

  /**
   * @schema DeploymentInfo#externalId
   */
  readonly externalId?: string;

}

/**
 * @schema InstanceInfo
 */
export interface InstanceInfo {
  /**
   * @schema InstanceInfo#instanceName
   */
  readonly instanceName?: string;

  /**
   * @schema InstanceInfo#iamSessionArn
   */
  readonly iamSessionArn?: string;

  /**
   * @schema InstanceInfo#iamUserArn
   */
  readonly iamUserArn?: string;

  /**
   * @schema InstanceInfo#instanceArn
   */
  readonly instanceArn?: string;

  /**
   * @schema InstanceInfo#registerTime
   */
  readonly registerTime?: string;

  /**
   * @schema InstanceInfo#deregisterTime
   */
  readonly deregisterTime?: string;

  /**
   * @schema InstanceInfo#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema TargetInstances
 */
export interface TargetInstances {
  /**
   * @schema TargetInstances#tagFilters
   */
  readonly tagFilters?: Ec2TagFilter[];

  /**
   * @schema TargetInstances#autoScalingGroups
   */
  readonly autoScalingGroups?: string[];

  /**
   * @schema TargetInstances#ec2TagSet
   */
  readonly ec2TagSet?: Ec2TagSet;

}

/**
 * @schema AutoRollbackConfiguration
 */
export interface AutoRollbackConfiguration {
  /**
   * @schema AutoRollbackConfiguration#enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema AutoRollbackConfiguration#events
   */
  readonly events?: string[];

}

/**
 * @schema MinimumHealthyHosts
 */
export interface MinimumHealthyHosts {
  /**
   * @schema MinimumHealthyHosts#value
   */
  readonly value?: number;

  /**
   * @schema MinimumHealthyHosts#type
   */
  readonly type?: string;

}

/**
 * @schema TrafficRoutingConfig
 */
export interface TrafficRoutingConfig {
  /**
   * @schema TrafficRoutingConfig#type
   */
  readonly type?: string;

  /**
   * @schema TrafficRoutingConfig#timeBasedCanary
   */
  readonly timeBasedCanary?: TimeBasedCanary;

  /**
   * @schema TrafficRoutingConfig#timeBasedLinear
   */
  readonly timeBasedLinear?: TimeBasedLinear;

}

/**
 * @schema Ec2TagFilter
 */
export interface Ec2TagFilter {
  /**
   * @schema Ec2TagFilter#Key
   */
  readonly key?: string;

  /**
   * @schema Ec2TagFilter#Value
   */
  readonly value?: string;

  /**
   * @schema Ec2TagFilter#Type
   */
  readonly type?: string;

}

/**
 * @schema TagFilter
 */
export interface TagFilter {
  /**
   * @schema TagFilter#Key
   */
  readonly key?: string;

  /**
   * @schema TagFilter#Value
   */
  readonly value?: string;

  /**
   * @schema TagFilter#Type
   */
  readonly type?: string;

}

/**
 * @schema TriggerConfig
 */
export interface TriggerConfig {
  /**
   * @schema TriggerConfig#triggerName
   */
  readonly triggerName?: string;

  /**
   * @schema TriggerConfig#triggerTargetArn
   */
  readonly triggerTargetArn?: string;

  /**
   * @schema TriggerConfig#triggerEvents
   */
  readonly triggerEvents?: string[];

}

/**
 * @schema AlarmConfiguration
 */
export interface AlarmConfiguration {
  /**
   * @schema AlarmConfiguration#enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema AlarmConfiguration#ignorePollAlarmFailure
   */
  readonly ignorePollAlarmFailure?: boolean;

  /**
   * @schema AlarmConfiguration#alarms
   */
  readonly alarms?: Alarm[];

}

/**
 * @schema DeploymentStyle
 */
export interface DeploymentStyle {
  /**
   * @schema DeploymentStyle#deploymentType
   */
  readonly deploymentType?: string;

  /**
   * @schema DeploymentStyle#deploymentOption
   */
  readonly deploymentOption?: string;

}

/**
 * @schema BlueGreenDeploymentConfiguration
 */
export interface BlueGreenDeploymentConfiguration {
  /**
   * @schema BlueGreenDeploymentConfiguration#terminateBlueInstancesOnDeploymentSuccess
   */
  readonly terminateBlueInstancesOnDeploymentSuccess?: BlueInstanceTerminationOption;

  /**
   * @schema BlueGreenDeploymentConfiguration#deploymentReadyOption
   */
  readonly deploymentReadyOption?: DeploymentReadyOption;

  /**
   * @schema BlueGreenDeploymentConfiguration#greenFleetProvisioningOption
   */
  readonly greenFleetProvisioningOption?: GreenFleetProvisioningOption;

}

/**
 * @schema LoadBalancerInfo
 */
export interface LoadBalancerInfo {
  /**
   * @schema LoadBalancerInfo#elbInfoList
   */
  readonly elbInfoList?: ElbInfo[];

  /**
   * @schema LoadBalancerInfo#targetGroupInfoList
   */
  readonly targetGroupInfoList?: TargetGroupInfo[];

  /**
   * @schema LoadBalancerInfo#targetGroupPairInfoList
   */
  readonly targetGroupPairInfoList?: TargetGroupPairInfo[];

}

/**
 * @schema Ec2TagSet
 */
export interface Ec2TagSet {
  /**
   * @schema Ec2TagSet#ec2TagSetList
   */
  readonly ec2TagSetList?: Ec2TagFilter[][];

}

/**
 * @schema EcsService
 */
export interface EcsService {
  /**
   * @schema EcsService#serviceName
   */
  readonly serviceName?: string;

  /**
   * @schema EcsService#clusterName
   */
  readonly clusterName?: string;

}

/**
 * @schema OnPremisesTagSet
 */
export interface OnPremisesTagSet {
  /**
   * @schema OnPremisesTagSet#onPremisesTagSetList
   */
  readonly onPremisesTagSetList?: TagFilter[][];

}

/**
 * @schema AutoScalingGroup
 */
export interface AutoScalingGroup {
  /**
   * @schema AutoScalingGroup#name
   */
  readonly name?: string;

  /**
   * @schema AutoScalingGroup#hook
   */
  readonly hook?: string;

}

/**
 * @schema GenericRevisionInfo
 */
export interface GenericRevisionInfo {
  /**
   * @schema GenericRevisionInfo#description
   */
  readonly description?: string;

  /**
   * @schema GenericRevisionInfo#deploymentGroups
   */
  readonly deploymentGroups?: string[];

  /**
   * @schema GenericRevisionInfo#firstUsedTime
   */
  readonly firstUsedTime?: string;

  /**
   * @schema GenericRevisionInfo#lastUsedTime
   */
  readonly lastUsedTime?: string;

  /**
   * @schema GenericRevisionInfo#registerTime
   */
  readonly registerTime?: string;

}

/**
 * @schema DeploymentConfigInfo
 */
export interface DeploymentConfigInfo {
  /**
   * @schema DeploymentConfigInfo#deploymentConfigId
   */
  readonly deploymentConfigId?: string;

  /**
   * @schema DeploymentConfigInfo#deploymentConfigName
   */
  readonly deploymentConfigName?: string;

  /**
   * @schema DeploymentConfigInfo#minimumHealthyHosts
   */
  readonly minimumHealthyHosts?: MinimumHealthyHosts;

  /**
   * @schema DeploymentConfigInfo#createTime
   */
  readonly createTime?: string;

  /**
   * @schema DeploymentConfigInfo#computePlatform
   */
  readonly computePlatform?: string;

  /**
   * @schema DeploymentConfigInfo#trafficRoutingConfig
   */
  readonly trafficRoutingConfig?: TrafficRoutingConfig;

}

/**
 * @schema TimeRange
 */
export interface TimeRange {
  /**
   * @schema TimeRange#start
   */
  readonly start?: string;

  /**
   * @schema TimeRange#end
   */
  readonly end?: string;

}

/**
 * @schema S3Location
 */
export interface S3Location {
  /**
   * @schema S3Location#bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3Location#key
   */
  readonly key?: string;

  /**
   * @schema S3Location#bundleType
   */
  readonly bundleType?: string;

  /**
   * @schema S3Location#version
   */
  readonly version?: string;

  /**
   * @schema S3Location#eTag
   */
  readonly eTag?: string;

}

/**
 * @schema GitHubLocation
 */
export interface GitHubLocation {
  /**
   * @schema GitHubLocation#repository
   */
  readonly repository?: string;

  /**
   * @schema GitHubLocation#commitId
   */
  readonly commitId?: string;

}

/**
 * @schema RawString
 */
export interface RawString {
  /**
   * @schema RawString#content
   */
  readonly content?: string;

  /**
   * @schema RawString#sha256
   */
  readonly sha256?: string;

}

/**
 * @schema AppSpecContent
 */
export interface AppSpecContent {
  /**
   * @schema AppSpecContent#content
   */
  readonly content?: string;

  /**
   * @schema AppSpecContent#sha256
   */
  readonly sha256?: string;

}

/**
 * @schema LastDeploymentInfo
 */
export interface LastDeploymentInfo {
  /**
   * @schema LastDeploymentInfo#deploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema LastDeploymentInfo#status
   */
  readonly status?: string;

  /**
   * @schema LastDeploymentInfo#endTime
   */
  readonly endTime?: string;

  /**
   * @schema LastDeploymentInfo#createTime
   */
  readonly createTime?: string;

}

/**
 * @schema LifecycleEvent
 */
export interface LifecycleEvent {
  /**
   * @schema LifecycleEvent#lifecycleEventName
   */
  readonly lifecycleEventName?: string;

  /**
   * @schema LifecycleEvent#diagnostics
   */
  readonly diagnostics?: Diagnostics;

  /**
   * @schema LifecycleEvent#startTime
   */
  readonly startTime?: string;

  /**
   * @schema LifecycleEvent#endTime
   */
  readonly endTime?: string;

  /**
   * @schema LifecycleEvent#status
   */
  readonly status?: string;

}

/**
 * @schema InstanceTarget
 */
export interface InstanceTarget {
  /**
   * @schema InstanceTarget#deploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema InstanceTarget#targetId
   */
  readonly targetId?: string;

  /**
   * @schema InstanceTarget#targetArn
   */
  readonly targetArn?: string;

  /**
   * @schema InstanceTarget#status
   */
  readonly status?: string;

  /**
   * @schema InstanceTarget#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema InstanceTarget#lifecycleEvents
   */
  readonly lifecycleEvents?: LifecycleEvent[];

  /**
   * @schema InstanceTarget#instanceLabel
   */
  readonly instanceLabel?: string;

}

/**
 * @schema LambdaTarget
 */
export interface LambdaTarget {
  /**
   * @schema LambdaTarget#deploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema LambdaTarget#targetId
   */
  readonly targetId?: string;

  /**
   * @schema LambdaTarget#targetArn
   */
  readonly targetArn?: string;

  /**
   * @schema LambdaTarget#status
   */
  readonly status?: string;

  /**
   * @schema LambdaTarget#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema LambdaTarget#lifecycleEvents
   */
  readonly lifecycleEvents?: LifecycleEvent[];

  /**
   * @schema LambdaTarget#lambdaFunctionInfo
   */
  readonly lambdaFunctionInfo?: LambdaFunctionInfo;

}

/**
 * @schema EcsTarget
 */
export interface EcsTarget {
  /**
   * @schema EcsTarget#deploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema EcsTarget#targetId
   */
  readonly targetId?: string;

  /**
   * @schema EcsTarget#targetArn
   */
  readonly targetArn?: string;

  /**
   * @schema EcsTarget#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema EcsTarget#lifecycleEvents
   */
  readonly lifecycleEvents?: LifecycleEvent[];

  /**
   * @schema EcsTarget#status
   */
  readonly status?: string;

  /**
   * @schema EcsTarget#taskSetsInfo
   */
  readonly taskSetsInfo?: EcsTaskSet[];

}

/**
 * @schema CloudFormationTarget
 */
export interface CloudFormationTarget {
  /**
   * @schema CloudFormationTarget#deploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema CloudFormationTarget#targetId
   */
  readonly targetId?: string;

  /**
   * @schema CloudFormationTarget#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema CloudFormationTarget#lifecycleEvents
   */
  readonly lifecycleEvents?: LifecycleEvent[];

  /**
   * @schema CloudFormationTarget#status
   */
  readonly status?: string;

  /**
   * @schema CloudFormationTarget#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema CloudFormationTarget#targetVersionWeight
   */
  readonly targetVersionWeight?: number;

}

/**
 * @schema ErrorInformation
 */
export interface ErrorInformation {
  /**
   * @schema ErrorInformation#code
   */
  readonly code?: string;

  /**
   * @schema ErrorInformation#message
   */
  readonly message?: string;

}

/**
 * @schema DeploymentOverview
 */
export interface DeploymentOverview {
  /**
   * @schema DeploymentOverview#Pending
   */
  readonly pending?: number;

  /**
   * @schema DeploymentOverview#InProgress
   */
  readonly inProgress?: number;

  /**
   * @schema DeploymentOverview#Succeeded
   */
  readonly succeeded?: number;

  /**
   * @schema DeploymentOverview#Failed
   */
  readonly failed?: number;

  /**
   * @schema DeploymentOverview#Skipped
   */
  readonly skipped?: number;

  /**
   * @schema DeploymentOverview#Ready
   */
  readonly ready?: number;

}

/**
 * @schema RollbackInfo
 */
export interface RollbackInfo {
  /**
   * @schema RollbackInfo#rollbackDeploymentId
   */
  readonly rollbackDeploymentId?: string;

  /**
   * @schema RollbackInfo#rollbackTriggeringDeploymentId
   */
  readonly rollbackTriggeringDeploymentId?: string;

  /**
   * @schema RollbackInfo#rollbackMessage
   */
  readonly rollbackMessage?: string;

}

/**
 * @schema TimeBasedCanary
 */
export interface TimeBasedCanary {
  /**
   * @schema TimeBasedCanary#canaryPercentage
   */
  readonly canaryPercentage?: number;

  /**
   * @schema TimeBasedCanary#canaryInterval
   */
  readonly canaryInterval?: number;

}

/**
 * @schema TimeBasedLinear
 */
export interface TimeBasedLinear {
  /**
   * @schema TimeBasedLinear#linearPercentage
   */
  readonly linearPercentage?: number;

  /**
   * @schema TimeBasedLinear#linearInterval
   */
  readonly linearInterval?: number;

}

/**
 * @schema Alarm
 */
export interface Alarm {
  /**
   * @schema Alarm#name
   */
  readonly name?: string;

}

/**
 * @schema BlueInstanceTerminationOption
 */
export interface BlueInstanceTerminationOption {
  /**
   * @schema BlueInstanceTerminationOption#action
   */
  readonly action?: string;

  /**
   * @schema BlueInstanceTerminationOption#terminationWaitTimeInMinutes
   */
  readonly terminationWaitTimeInMinutes?: number;

}

/**
 * @schema DeploymentReadyOption
 */
export interface DeploymentReadyOption {
  /**
   * @schema DeploymentReadyOption#actionOnTimeout
   */
  readonly actionOnTimeout?: string;

  /**
   * @schema DeploymentReadyOption#waitTimeInMinutes
   */
  readonly waitTimeInMinutes?: number;

}

/**
 * @schema GreenFleetProvisioningOption
 */
export interface GreenFleetProvisioningOption {
  /**
   * @schema GreenFleetProvisioningOption#action
   */
  readonly action?: string;

}

/**
 * @schema ElbInfo
 */
export interface ElbInfo {
  /**
   * @schema ElbInfo#name
   */
  readonly name?: string;

}

/**
 * @schema TargetGroupInfo
 */
export interface TargetGroupInfo {
  /**
   * @schema TargetGroupInfo#name
   */
  readonly name?: string;

}

/**
 * @schema TargetGroupPairInfo
 */
export interface TargetGroupPairInfo {
  /**
   * @schema TargetGroupPairInfo#targetGroups
   */
  readonly targetGroups?: TargetGroupInfo[];

  /**
   * @schema TargetGroupPairInfo#prodTrafficRoute
   */
  readonly prodTrafficRoute?: TrafficRoute;

  /**
   * @schema TargetGroupPairInfo#testTrafficRoute
   */
  readonly testTrafficRoute?: TrafficRoute;

}

/**
 * @schema Diagnostics
 */
export interface Diagnostics {
  /**
   * @schema Diagnostics#errorCode
   */
  readonly errorCode?: string;

  /**
   * @schema Diagnostics#scriptName
   */
  readonly scriptName?: string;

  /**
   * @schema Diagnostics#message
   */
  readonly message?: string;

  /**
   * @schema Diagnostics#logTail
   */
  readonly logTail?: string;

}

/**
 * @schema LambdaFunctionInfo
 */
export interface LambdaFunctionInfo {
  /**
   * @schema LambdaFunctionInfo#functionName
   */
  readonly functionName?: string;

  /**
   * @schema LambdaFunctionInfo#functionAlias
   */
  readonly functionAlias?: string;

  /**
   * @schema LambdaFunctionInfo#currentVersion
   */
  readonly currentVersion?: string;

  /**
   * @schema LambdaFunctionInfo#targetVersion
   */
  readonly targetVersion?: string;

  /**
   * @schema LambdaFunctionInfo#targetVersionWeight
   */
  readonly targetVersionWeight?: number;

}

/**
 * @schema EcsTaskSet
 */
export interface EcsTaskSet {
  /**
   * @schema EcsTaskSet#identifer
   */
  readonly identifer?: string;

  /**
   * @schema EcsTaskSet#desiredCount
   */
  readonly desiredCount?: number;

  /**
   * @schema EcsTaskSet#pendingCount
   */
  readonly pendingCount?: number;

  /**
   * @schema EcsTaskSet#runningCount
   */
  readonly runningCount?: number;

  /**
   * @schema EcsTaskSet#status
   */
  readonly status?: string;

  /**
   * @schema EcsTaskSet#trafficWeight
   */
  readonly trafficWeight?: number;

  /**
   * @schema EcsTaskSet#targetGroup
   */
  readonly targetGroup?: TargetGroupInfo;

  /**
   * @schema EcsTaskSet#taskSetLabel
   */
  readonly taskSetLabel?: string;

}

/**
 * @schema TrafficRoute
 */
export interface TrafficRoute {
  /**
   * @schema TrafficRoute#listenerArns
   */
  readonly listenerArns?: string[];

}
