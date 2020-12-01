/**
 * @schema AcceptMatchInput
 */
export interface AcceptMatchInput {
  /**
   * @schema AcceptMatchInput#TicketId
   */
  readonly ticketId: string;

  /**
   * @schema AcceptMatchInput#PlayerIds
   */
  readonly playerIds: string[];

  /**
   * @schema AcceptMatchInput#AcceptanceType
   */
  readonly acceptanceType: string;

}

/**
 * @schema AcceptMatchOutput
 */
export interface AcceptMatchOutput {
}

/**
 * @schema ClaimGameServerInput
 */
export interface ClaimGameServerInput {
  /**
   * @schema ClaimGameServerInput#GameServerGroupName
   */
  readonly gameServerGroupName: string;

  /**
   * @schema ClaimGameServerInput#GameServerId
   */
  readonly gameServerId?: string;

  /**
   * @schema ClaimGameServerInput#GameServerData
   */
  readonly gameServerData?: string;

}

/**
 * @schema ClaimGameServerOutput
 */
export interface ClaimGameServerOutput {
  /**
   * @schema ClaimGameServerOutput#GameServer
   */
  readonly gameServer?: GameServer;

}

/**
 * @schema CreateAliasInput
 */
export interface CreateAliasInput {
  /**
   * @schema CreateAliasInput#Name
   */
  readonly name: string;

  /**
   * @schema CreateAliasInput#Description
   */
  readonly description?: string;

  /**
   * @schema CreateAliasInput#RoutingStrategy
   */
  readonly routingStrategy: RoutingStrategy;

  /**
   * @schema CreateAliasInput#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateAliasOutput
 */
export interface CreateAliasOutput {
  /**
   * @schema CreateAliasOutput#Alias
   */
  readonly alias?: Alias;

}

/**
 * @schema CreateBuildInput
 */
export interface CreateBuildInput {
  /**
   * @schema CreateBuildInput#Name
   */
  readonly name?: string;

  /**
   * @schema CreateBuildInput#Version
   */
  readonly version?: string;

  /**
   * @schema CreateBuildInput#StorageLocation
   */
  readonly storageLocation?: S3Location;

  /**
   * @schema CreateBuildInput#OperatingSystem
   */
  readonly operatingSystem?: string;

  /**
   * @schema CreateBuildInput#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateBuildOutput
 */
export interface CreateBuildOutput {
  /**
   * @schema CreateBuildOutput#Build
   */
  readonly build?: Build;

  /**
   * @schema CreateBuildOutput#UploadCredentials
   */
  readonly uploadCredentials?: AwsCredentials;

  /**
   * @schema CreateBuildOutput#StorageLocation
   */
  readonly storageLocation?: S3Location;

}

/**
 * @schema CreateFleetInput
 */
export interface CreateFleetInput {
  /**
   * @schema CreateFleetInput#Name
   */
  readonly name: string;

  /**
   * @schema CreateFleetInput#Description
   */
  readonly description?: string;

  /**
   * @schema CreateFleetInput#BuildId
   */
  readonly buildId?: string;

  /**
   * @schema CreateFleetInput#ScriptId
   */
  readonly scriptId?: string;

  /**
   * @schema CreateFleetInput#ServerLaunchPath
   */
  readonly serverLaunchPath?: string;

  /**
   * @schema CreateFleetInput#ServerLaunchParameters
   */
  readonly serverLaunchParameters?: string;

  /**
   * @schema CreateFleetInput#LogPaths
   */
  readonly logPaths?: string[];

  /**
   * @schema CreateFleetInput#EC2InstanceType
   */
  readonly ec2InstanceType: string;

  /**
   * @schema CreateFleetInput#EC2InboundPermissions
   */
  readonly ec2InboundPermissions?: IpPermission[];

  /**
   * @schema CreateFleetInput#NewGameSessionProtectionPolicy
   */
  readonly newGameSessionProtectionPolicy?: string;

  /**
   * @schema CreateFleetInput#RuntimeConfiguration
   */
  readonly runtimeConfiguration?: RuntimeConfiguration;

  /**
   * @schema CreateFleetInput#ResourceCreationLimitPolicy
   */
  readonly resourceCreationLimitPolicy?: ResourceCreationLimitPolicy;

  /**
   * @schema CreateFleetInput#MetricGroups
   */
  readonly metricGroups?: string[];

  /**
   * @schema CreateFleetInput#PeerVpcAwsAccountId
   */
  readonly peerVpcAwsAccountId?: string;

  /**
   * @schema CreateFleetInput#PeerVpcId
   */
  readonly peerVpcId?: string;

  /**
   * @schema CreateFleetInput#FleetType
   */
  readonly fleetType?: string;

  /**
   * @schema CreateFleetInput#InstanceRoleArn
   */
  readonly instanceRoleArn?: string;

  /**
   * @schema CreateFleetInput#CertificateConfiguration
   */
  readonly certificateConfiguration?: CertificateConfiguration;

  /**
   * @schema CreateFleetInput#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateFleetOutput
 */
export interface CreateFleetOutput {
  /**
   * @schema CreateFleetOutput#FleetAttributes
   */
  readonly fleetAttributes?: FleetAttributes;

}

/**
 * @schema CreateGameServerGroupInput
 */
export interface CreateGameServerGroupInput {
  /**
   * @schema CreateGameServerGroupInput#GameServerGroupName
   */
  readonly gameServerGroupName: string;

  /**
   * @schema CreateGameServerGroupInput#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema CreateGameServerGroupInput#MinSize
   */
  readonly minSize: number;

  /**
   * @schema CreateGameServerGroupInput#MaxSize
   */
  readonly maxSize: number;

  /**
   * @schema CreateGameServerGroupInput#LaunchTemplate
   */
  readonly launchTemplate: LaunchTemplateSpecification;

  /**
   * @schema CreateGameServerGroupInput#InstanceDefinitions
   */
  readonly instanceDefinitions: InstanceDefinition[];

  /**
   * @schema CreateGameServerGroupInput#AutoScalingPolicy
   */
  readonly autoScalingPolicy?: GameServerGroupAutoScalingPolicy;

  /**
   * @schema CreateGameServerGroupInput#BalancingStrategy
   */
  readonly balancingStrategy?: string;

  /**
   * @schema CreateGameServerGroupInput#GameServerProtectionPolicy
   */
  readonly gameServerProtectionPolicy?: string;

  /**
   * @schema CreateGameServerGroupInput#VpcSubnets
   */
  readonly vpcSubnets?: string[];

  /**
   * @schema CreateGameServerGroupInput#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateGameServerGroupOutput
 */
export interface CreateGameServerGroupOutput {
  /**
   * @schema CreateGameServerGroupOutput#GameServerGroup
   */
  readonly gameServerGroup?: GameServerGroup;

}

/**
 * @schema CreateGameSessionInput
 */
export interface CreateGameSessionInput {
  /**
   * @schema CreateGameSessionInput#FleetId
   */
  readonly fleetId?: string;

  /**
   * @schema CreateGameSessionInput#AliasId
   */
  readonly aliasId?: string;

  /**
   * @schema CreateGameSessionInput#MaximumPlayerSessionCount
   */
  readonly maximumPlayerSessionCount: number;

  /**
   * @schema CreateGameSessionInput#Name
   */
  readonly name?: string;

  /**
   * @schema CreateGameSessionInput#GameProperties
   */
  readonly gameProperties?: GameProperty[];

  /**
   * @schema CreateGameSessionInput#CreatorId
   */
  readonly creatorId?: string;

  /**
   * @schema CreateGameSessionInput#GameSessionId
   */
  readonly gameSessionId?: string;

  /**
   * @schema CreateGameSessionInput#IdempotencyToken
   */
  readonly idempotencyToken?: string;

  /**
   * @schema CreateGameSessionInput#GameSessionData
   */
  readonly gameSessionData?: string;

}

/**
 * @schema CreateGameSessionOutput
 */
export interface CreateGameSessionOutput {
  /**
   * @schema CreateGameSessionOutput#GameSession
   */
  readonly gameSession?: GameSession;

}

/**
 * @schema CreateGameSessionQueueInput
 */
export interface CreateGameSessionQueueInput {
  /**
   * @schema CreateGameSessionQueueInput#Name
   */
  readonly name: string;

  /**
   * @schema CreateGameSessionQueueInput#TimeoutInSeconds
   */
  readonly timeoutInSeconds?: number;

  /**
   * @schema CreateGameSessionQueueInput#PlayerLatencyPolicies
   */
  readonly playerLatencyPolicies?: PlayerLatencyPolicy[];

  /**
   * @schema CreateGameSessionQueueInput#Destinations
   */
  readonly destinations?: GameSessionQueueDestination[];

  /**
   * @schema CreateGameSessionQueueInput#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateGameSessionQueueOutput
 */
export interface CreateGameSessionQueueOutput {
  /**
   * @schema CreateGameSessionQueueOutput#GameSessionQueue
   */
  readonly gameSessionQueue?: GameSessionQueue;

}

/**
 * @schema CreateMatchmakingConfigurationInput
 */
export interface CreateMatchmakingConfigurationInput {
  /**
   * @schema CreateMatchmakingConfigurationInput#Name
   */
  readonly name: string;

  /**
   * @schema CreateMatchmakingConfigurationInput#Description
   */
  readonly description?: string;

  /**
   * @schema CreateMatchmakingConfigurationInput#GameSessionQueueArns
   */
  readonly gameSessionQueueArns?: string[];

  /**
   * @schema CreateMatchmakingConfigurationInput#RequestTimeoutSeconds
   */
  readonly requestTimeoutSeconds: number;

  /**
   * @schema CreateMatchmakingConfigurationInput#AcceptanceTimeoutSeconds
   */
  readonly acceptanceTimeoutSeconds?: number;

  /**
   * @schema CreateMatchmakingConfigurationInput#AcceptanceRequired
   */
  readonly acceptanceRequired: boolean;

  /**
   * @schema CreateMatchmakingConfigurationInput#RuleSetName
   */
  readonly ruleSetName: string;

  /**
   * @schema CreateMatchmakingConfigurationInput#NotificationTarget
   */
  readonly notificationTarget?: string;

  /**
   * @schema CreateMatchmakingConfigurationInput#AdditionalPlayerCount
   */
  readonly additionalPlayerCount?: number;

  /**
   * @schema CreateMatchmakingConfigurationInput#CustomEventData
   */
  readonly customEventData?: string;

  /**
   * @schema CreateMatchmakingConfigurationInput#GameProperties
   */
  readonly gameProperties?: GameProperty[];

  /**
   * @schema CreateMatchmakingConfigurationInput#GameSessionData
   */
  readonly gameSessionData?: string;

  /**
   * @schema CreateMatchmakingConfigurationInput#BackfillMode
   */
  readonly backfillMode?: string;

  /**
   * @schema CreateMatchmakingConfigurationInput#FlexMatchMode
   */
  readonly flexMatchMode?: string;

  /**
   * @schema CreateMatchmakingConfigurationInput#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateMatchmakingConfigurationOutput
 */
export interface CreateMatchmakingConfigurationOutput {
  /**
   * @schema CreateMatchmakingConfigurationOutput#Configuration
   */
  readonly configuration?: MatchmakingConfiguration;

}

/**
 * @schema CreateMatchmakingRuleSetInput
 */
export interface CreateMatchmakingRuleSetInput {
  /**
   * @schema CreateMatchmakingRuleSetInput#Name
   */
  readonly name: string;

  /**
   * @schema CreateMatchmakingRuleSetInput#RuleSetBody
   */
  readonly ruleSetBody: string;

  /**
   * @schema CreateMatchmakingRuleSetInput#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateMatchmakingRuleSetOutput
 */
export interface CreateMatchmakingRuleSetOutput {
  /**
   * @schema CreateMatchmakingRuleSetOutput#RuleSet
   */
  readonly ruleSet: MatchmakingRuleSet;

}

/**
 * @schema CreatePlayerSessionInput
 */
export interface CreatePlayerSessionInput {
  /**
   * @schema CreatePlayerSessionInput#GameSessionId
   */
  readonly gameSessionId: string;

  /**
   * @schema CreatePlayerSessionInput#PlayerId
   */
  readonly playerId: string;

  /**
   * @schema CreatePlayerSessionInput#PlayerData
   */
  readonly playerData?: string;

}

/**
 * @schema CreatePlayerSessionOutput
 */
export interface CreatePlayerSessionOutput {
  /**
   * @schema CreatePlayerSessionOutput#PlayerSession
   */
  readonly playerSession?: PlayerSession;

}

/**
 * @schema CreatePlayerSessionsInput
 */
export interface CreatePlayerSessionsInput {
  /**
   * @schema CreatePlayerSessionsInput#GameSessionId
   */
  readonly gameSessionId: string;

  /**
   * @schema CreatePlayerSessionsInput#PlayerIds
   */
  readonly playerIds: string[];

  /**
   * @schema CreatePlayerSessionsInput#PlayerDataMap
   */
  readonly playerDataMap?: { [key: string]: string };

}

/**
 * @schema CreatePlayerSessionsOutput
 */
export interface CreatePlayerSessionsOutput {
  /**
   * @schema CreatePlayerSessionsOutput#PlayerSessions
   */
  readonly playerSessions?: PlayerSession[];

}

/**
 * @schema CreateScriptInput
 */
export interface CreateScriptInput {
  /**
   * @schema CreateScriptInput#Name
   */
  readonly name?: string;

  /**
   * @schema CreateScriptInput#Version
   */
  readonly version?: string;

  /**
   * @schema CreateScriptInput#StorageLocation
   */
  readonly storageLocation?: S3Location;

  /**
   * @schema CreateScriptInput#ZipFile
   */
  readonly zipFile?: any;

  /**
   * @schema CreateScriptInput#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateScriptOutput
 */
export interface CreateScriptOutput {
  /**
   * @schema CreateScriptOutput#Script
   */
  readonly script?: Script;

}

/**
 * @schema CreateVpcPeeringAuthorizationInput
 */
export interface CreateVpcPeeringAuthorizationInput {
  /**
   * @schema CreateVpcPeeringAuthorizationInput#GameLiftAwsAccountId
   */
  readonly gameLiftAwsAccountId: string;

  /**
   * @schema CreateVpcPeeringAuthorizationInput#PeerVpcId
   */
  readonly peerVpcId: string;

}

/**
 * @schema CreateVpcPeeringAuthorizationOutput
 */
export interface CreateVpcPeeringAuthorizationOutput {
  /**
   * @schema CreateVpcPeeringAuthorizationOutput#VpcPeeringAuthorization
   */
  readonly vpcPeeringAuthorization?: VpcPeeringAuthorization;

}

/**
 * @schema CreateVpcPeeringConnectionInput
 */
export interface CreateVpcPeeringConnectionInput {
  /**
   * @schema CreateVpcPeeringConnectionInput#FleetId
   */
  readonly fleetId: string;

  /**
   * @schema CreateVpcPeeringConnectionInput#PeerVpcAwsAccountId
   */
  readonly peerVpcAwsAccountId: string;

  /**
   * @schema CreateVpcPeeringConnectionInput#PeerVpcId
   */
  readonly peerVpcId: string;

}

/**
 * @schema CreateVpcPeeringConnectionOutput
 */
export interface CreateVpcPeeringConnectionOutput {
}

/**
 * @schema DeleteAliasInput
 */
export interface DeleteAliasInput {
  /**
   * @schema DeleteAliasInput#AliasId
   */
  readonly aliasId: string;

}

/**
 * @schema DeleteBuildInput
 */
export interface DeleteBuildInput {
  /**
   * @schema DeleteBuildInput#BuildId
   */
  readonly buildId: string;

}

/**
 * @schema DeleteFleetInput
 */
export interface DeleteFleetInput {
  /**
   * @schema DeleteFleetInput#FleetId
   */
  readonly fleetId: string;

}

/**
 * @schema DeleteGameServerGroupInput
 */
export interface DeleteGameServerGroupInput {
  /**
   * @schema DeleteGameServerGroupInput#GameServerGroupName
   */
  readonly gameServerGroupName: string;

  /**
   * @schema DeleteGameServerGroupInput#DeleteOption
   */
  readonly deleteOption?: string;

}

/**
 * @schema DeleteGameServerGroupOutput
 */
export interface DeleteGameServerGroupOutput {
  /**
   * @schema DeleteGameServerGroupOutput#GameServerGroup
   */
  readonly gameServerGroup?: GameServerGroup;

}

/**
 * @schema DeleteGameSessionQueueInput
 */
export interface DeleteGameSessionQueueInput {
  /**
   * @schema DeleteGameSessionQueueInput#Name
   */
  readonly name: string;

}

/**
 * @schema DeleteGameSessionQueueOutput
 */
export interface DeleteGameSessionQueueOutput {
}

/**
 * @schema DeleteMatchmakingConfigurationInput
 */
export interface DeleteMatchmakingConfigurationInput {
  /**
   * @schema DeleteMatchmakingConfigurationInput#Name
   */
  readonly name: string;

}

/**
 * @schema DeleteMatchmakingConfigurationOutput
 */
export interface DeleteMatchmakingConfigurationOutput {
}

/**
 * @schema DeleteMatchmakingRuleSetInput
 */
export interface DeleteMatchmakingRuleSetInput {
  /**
   * @schema DeleteMatchmakingRuleSetInput#Name
   */
  readonly name: string;

}

/**
 * @schema DeleteMatchmakingRuleSetOutput
 */
export interface DeleteMatchmakingRuleSetOutput {
}

/**
 * @schema DeleteScalingPolicyInput
 */
export interface DeleteScalingPolicyInput {
  /**
   * @schema DeleteScalingPolicyInput#Name
   */
  readonly name: string;

  /**
   * @schema DeleteScalingPolicyInput#FleetId
   */
  readonly fleetId: string;

}

/**
 * @schema DeleteScriptInput
 */
export interface DeleteScriptInput {
  /**
   * @schema DeleteScriptInput#ScriptId
   */
  readonly scriptId: string;

}

/**
 * @schema DeleteVpcPeeringAuthorizationInput
 */
export interface DeleteVpcPeeringAuthorizationInput {
  /**
   * @schema DeleteVpcPeeringAuthorizationInput#GameLiftAwsAccountId
   */
  readonly gameLiftAwsAccountId: string;

  /**
   * @schema DeleteVpcPeeringAuthorizationInput#PeerVpcId
   */
  readonly peerVpcId: string;

}

/**
 * @schema DeleteVpcPeeringAuthorizationOutput
 */
export interface DeleteVpcPeeringAuthorizationOutput {
}

/**
 * @schema DeleteVpcPeeringConnectionInput
 */
export interface DeleteVpcPeeringConnectionInput {
  /**
   * @schema DeleteVpcPeeringConnectionInput#FleetId
   */
  readonly fleetId: string;

  /**
   * @schema DeleteVpcPeeringConnectionInput#VpcPeeringConnectionId
   */
  readonly vpcPeeringConnectionId: string;

}

/**
 * @schema DeleteVpcPeeringConnectionOutput
 */
export interface DeleteVpcPeeringConnectionOutput {
}

/**
 * @schema DeregisterGameServerInput
 */
export interface DeregisterGameServerInput {
  /**
   * @schema DeregisterGameServerInput#GameServerGroupName
   */
  readonly gameServerGroupName: string;

  /**
   * @schema DeregisterGameServerInput#GameServerId
   */
  readonly gameServerId: string;

}

/**
 * @schema DescribeAliasInput
 */
export interface DescribeAliasInput {
  /**
   * @schema DescribeAliasInput#AliasId
   */
  readonly aliasId: string;

}

/**
 * @schema DescribeAliasOutput
 */
export interface DescribeAliasOutput {
  /**
   * @schema DescribeAliasOutput#Alias
   */
  readonly alias?: Alias;

}

/**
 * @schema DescribeBuildInput
 */
export interface DescribeBuildInput {
  /**
   * @schema DescribeBuildInput#BuildId
   */
  readonly buildId: string;

}

/**
 * @schema DescribeBuildOutput
 */
export interface DescribeBuildOutput {
  /**
   * @schema DescribeBuildOutput#Build
   */
  readonly build?: Build;

}

/**
 * @schema DescribeEc2InstanceLimitsInput
 */
export interface DescribeEc2InstanceLimitsInput {
  /**
   * @schema DescribeEc2InstanceLimitsInput#EC2InstanceType
   */
  readonly ec2InstanceType?: string;

}

/**
 * @schema DescribeEc2InstanceLimitsOutput
 */
export interface DescribeEc2InstanceLimitsOutput {
  /**
   * @schema DescribeEc2InstanceLimitsOutput#EC2InstanceLimits
   */
  readonly ec2InstanceLimits?: Ec2InstanceLimit[];

}

/**
 * @schema DescribeFleetAttributesInput
 */
export interface DescribeFleetAttributesInput {
  /**
   * @schema DescribeFleetAttributesInput#FleetIds
   */
  readonly fleetIds?: string[];

  /**
   * @schema DescribeFleetAttributesInput#Limit
   */
  readonly limit?: number;

  /**
   * @schema DescribeFleetAttributesInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeFleetAttributesOutput
 */
export interface DescribeFleetAttributesOutput {
  /**
   * @schema DescribeFleetAttributesOutput#FleetAttributes
   */
  readonly fleetAttributes?: FleetAttributes[];

  /**
   * @schema DescribeFleetAttributesOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeFleetCapacityInput
 */
export interface DescribeFleetCapacityInput {
  /**
   * @schema DescribeFleetCapacityInput#FleetIds
   */
  readonly fleetIds?: string[];

  /**
   * @schema DescribeFleetCapacityInput#Limit
   */
  readonly limit?: number;

  /**
   * @schema DescribeFleetCapacityInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeFleetCapacityOutput
 */
export interface DescribeFleetCapacityOutput {
  /**
   * @schema DescribeFleetCapacityOutput#FleetCapacity
   */
  readonly fleetCapacity?: FleetCapacity[];

  /**
   * @schema DescribeFleetCapacityOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeFleetEventsInput
 */
export interface DescribeFleetEventsInput {
  /**
   * @schema DescribeFleetEventsInput#FleetId
   */
  readonly fleetId: string;

  /**
   * @schema DescribeFleetEventsInput#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema DescribeFleetEventsInput#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema DescribeFleetEventsInput#Limit
   */
  readonly limit?: number;

  /**
   * @schema DescribeFleetEventsInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeFleetEventsOutput
 */
export interface DescribeFleetEventsOutput {
  /**
   * @schema DescribeFleetEventsOutput#Events
   */
  readonly events?: Event[];

  /**
   * @schema DescribeFleetEventsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeFleetPortSettingsInput
 */
export interface DescribeFleetPortSettingsInput {
  /**
   * @schema DescribeFleetPortSettingsInput#FleetId
   */
  readonly fleetId: string;

}

/**
 * @schema DescribeFleetPortSettingsOutput
 */
export interface DescribeFleetPortSettingsOutput {
  /**
   * @schema DescribeFleetPortSettingsOutput#InboundPermissions
   */
  readonly inboundPermissions?: IpPermission[];

}

/**
 * @schema DescribeFleetUtilizationInput
 */
export interface DescribeFleetUtilizationInput {
  /**
   * @schema DescribeFleetUtilizationInput#FleetIds
   */
  readonly fleetIds?: string[];

  /**
   * @schema DescribeFleetUtilizationInput#Limit
   */
  readonly limit?: number;

  /**
   * @schema DescribeFleetUtilizationInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeFleetUtilizationOutput
 */
export interface DescribeFleetUtilizationOutput {
  /**
   * @schema DescribeFleetUtilizationOutput#FleetUtilization
   */
  readonly fleetUtilization?: FleetUtilization[];

  /**
   * @schema DescribeFleetUtilizationOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeGameServerInput
 */
export interface DescribeGameServerInput {
  /**
   * @schema DescribeGameServerInput#GameServerGroupName
   */
  readonly gameServerGroupName: string;

  /**
   * @schema DescribeGameServerInput#GameServerId
   */
  readonly gameServerId: string;

}

/**
 * @schema DescribeGameServerOutput
 */
export interface DescribeGameServerOutput {
  /**
   * @schema DescribeGameServerOutput#GameServer
   */
  readonly gameServer?: GameServer;

}

/**
 * @schema DescribeGameServerGroupInput
 */
export interface DescribeGameServerGroupInput {
  /**
   * @schema DescribeGameServerGroupInput#GameServerGroupName
   */
  readonly gameServerGroupName: string;

}

/**
 * @schema DescribeGameServerGroupOutput
 */
export interface DescribeGameServerGroupOutput {
  /**
   * @schema DescribeGameServerGroupOutput#GameServerGroup
   */
  readonly gameServerGroup?: GameServerGroup;

}

/**
 * @schema DescribeGameServerInstancesInput
 */
export interface DescribeGameServerInstancesInput {
  /**
   * @schema DescribeGameServerInstancesInput#GameServerGroupName
   */
  readonly gameServerGroupName: string;

  /**
   * @schema DescribeGameServerInstancesInput#InstanceIds
   */
  readonly instanceIds?: string[];

  /**
   * @schema DescribeGameServerInstancesInput#Limit
   */
  readonly limit?: number;

  /**
   * @schema DescribeGameServerInstancesInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeGameServerInstancesOutput
 */
export interface DescribeGameServerInstancesOutput {
  /**
   * @schema DescribeGameServerInstancesOutput#GameServerInstances
   */
  readonly gameServerInstances?: GameServerInstance[];

  /**
   * @schema DescribeGameServerInstancesOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeGameSessionDetailsInput
 */
export interface DescribeGameSessionDetailsInput {
  /**
   * @schema DescribeGameSessionDetailsInput#FleetId
   */
  readonly fleetId?: string;

  /**
   * @schema DescribeGameSessionDetailsInput#GameSessionId
   */
  readonly gameSessionId?: string;

  /**
   * @schema DescribeGameSessionDetailsInput#AliasId
   */
  readonly aliasId?: string;

  /**
   * @schema DescribeGameSessionDetailsInput#StatusFilter
   */
  readonly statusFilter?: string;

  /**
   * @schema DescribeGameSessionDetailsInput#Limit
   */
  readonly limit?: number;

  /**
   * @schema DescribeGameSessionDetailsInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeGameSessionDetailsOutput
 */
export interface DescribeGameSessionDetailsOutput {
  /**
   * @schema DescribeGameSessionDetailsOutput#GameSessionDetails
   */
  readonly gameSessionDetails?: GameSessionDetail[];

  /**
   * @schema DescribeGameSessionDetailsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeGameSessionPlacementInput
 */
export interface DescribeGameSessionPlacementInput {
  /**
   * @schema DescribeGameSessionPlacementInput#PlacementId
   */
  readonly placementId: string;

}

/**
 * @schema DescribeGameSessionPlacementOutput
 */
export interface DescribeGameSessionPlacementOutput {
  /**
   * @schema DescribeGameSessionPlacementOutput#GameSessionPlacement
   */
  readonly gameSessionPlacement?: GameSessionPlacement;

}

/**
 * @schema DescribeGameSessionQueuesInput
 */
export interface DescribeGameSessionQueuesInput {
  /**
   * @schema DescribeGameSessionQueuesInput#Names
   */
  readonly names?: string[];

  /**
   * @schema DescribeGameSessionQueuesInput#Limit
   */
  readonly limit?: number;

  /**
   * @schema DescribeGameSessionQueuesInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeGameSessionQueuesOutput
 */
export interface DescribeGameSessionQueuesOutput {
  /**
   * @schema DescribeGameSessionQueuesOutput#GameSessionQueues
   */
  readonly gameSessionQueues?: GameSessionQueue[];

  /**
   * @schema DescribeGameSessionQueuesOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeGameSessionsInput
 */
export interface DescribeGameSessionsInput {
  /**
   * @schema DescribeGameSessionsInput#FleetId
   */
  readonly fleetId?: string;

  /**
   * @schema DescribeGameSessionsInput#GameSessionId
   */
  readonly gameSessionId?: string;

  /**
   * @schema DescribeGameSessionsInput#AliasId
   */
  readonly aliasId?: string;

  /**
   * @schema DescribeGameSessionsInput#StatusFilter
   */
  readonly statusFilter?: string;

  /**
   * @schema DescribeGameSessionsInput#Limit
   */
  readonly limit?: number;

  /**
   * @schema DescribeGameSessionsInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeGameSessionsOutput
 */
export interface DescribeGameSessionsOutput {
  /**
   * @schema DescribeGameSessionsOutput#GameSessions
   */
  readonly gameSessions?: GameSession[];

  /**
   * @schema DescribeGameSessionsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeInstancesInput
 */
export interface DescribeInstancesInput {
  /**
   * @schema DescribeInstancesInput#FleetId
   */
  readonly fleetId: string;

  /**
   * @schema DescribeInstancesInput#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema DescribeInstancesInput#Limit
   */
  readonly limit?: number;

  /**
   * @schema DescribeInstancesInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeInstancesOutput
 */
export interface DescribeInstancesOutput {
  /**
   * @schema DescribeInstancesOutput#Instances
   */
  readonly instances?: Instance[];

  /**
   * @schema DescribeInstancesOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeMatchmakingInput
 */
export interface DescribeMatchmakingInput {
  /**
   * @schema DescribeMatchmakingInput#TicketIds
   */
  readonly ticketIds: string[];

}

/**
 * @schema DescribeMatchmakingOutput
 */
export interface DescribeMatchmakingOutput {
  /**
   * @schema DescribeMatchmakingOutput#TicketList
   */
  readonly ticketList?: MatchmakingTicket[];

}

/**
 * @schema DescribeMatchmakingConfigurationsInput
 */
export interface DescribeMatchmakingConfigurationsInput {
  /**
   * @schema DescribeMatchmakingConfigurationsInput#Names
   */
  readonly names?: string[];

  /**
   * @schema DescribeMatchmakingConfigurationsInput#RuleSetName
   */
  readonly ruleSetName?: string;

  /**
   * @schema DescribeMatchmakingConfigurationsInput#Limit
   */
  readonly limit?: number;

  /**
   * @schema DescribeMatchmakingConfigurationsInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeMatchmakingConfigurationsOutput
 */
export interface DescribeMatchmakingConfigurationsOutput {
  /**
   * @schema DescribeMatchmakingConfigurationsOutput#Configurations
   */
  readonly configurations?: MatchmakingConfiguration[];

  /**
   * @schema DescribeMatchmakingConfigurationsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeMatchmakingRuleSetsInput
 */
export interface DescribeMatchmakingRuleSetsInput {
  /**
   * @schema DescribeMatchmakingRuleSetsInput#Names
   */
  readonly names?: string[];

  /**
   * @schema DescribeMatchmakingRuleSetsInput#Limit
   */
  readonly limit?: number;

  /**
   * @schema DescribeMatchmakingRuleSetsInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeMatchmakingRuleSetsOutput
 */
export interface DescribeMatchmakingRuleSetsOutput {
  /**
   * @schema DescribeMatchmakingRuleSetsOutput#RuleSets
   */
  readonly ruleSets: MatchmakingRuleSet[];

  /**
   * @schema DescribeMatchmakingRuleSetsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribePlayerSessionsInput
 */
export interface DescribePlayerSessionsInput {
  /**
   * @schema DescribePlayerSessionsInput#GameSessionId
   */
  readonly gameSessionId?: string;

  /**
   * @schema DescribePlayerSessionsInput#PlayerId
   */
  readonly playerId?: string;

  /**
   * @schema DescribePlayerSessionsInput#PlayerSessionId
   */
  readonly playerSessionId?: string;

  /**
   * @schema DescribePlayerSessionsInput#PlayerSessionStatusFilter
   */
  readonly playerSessionStatusFilter?: string;

  /**
   * @schema DescribePlayerSessionsInput#Limit
   */
  readonly limit?: number;

  /**
   * @schema DescribePlayerSessionsInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribePlayerSessionsOutput
 */
export interface DescribePlayerSessionsOutput {
  /**
   * @schema DescribePlayerSessionsOutput#PlayerSessions
   */
  readonly playerSessions?: PlayerSession[];

  /**
   * @schema DescribePlayerSessionsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeRuntimeConfigurationInput
 */
export interface DescribeRuntimeConfigurationInput {
  /**
   * @schema DescribeRuntimeConfigurationInput#FleetId
   */
  readonly fleetId: string;

}

/**
 * @schema DescribeRuntimeConfigurationOutput
 */
export interface DescribeRuntimeConfigurationOutput {
  /**
   * @schema DescribeRuntimeConfigurationOutput#RuntimeConfiguration
   */
  readonly runtimeConfiguration?: RuntimeConfiguration;

}

/**
 * @schema DescribeScalingPoliciesInput
 */
export interface DescribeScalingPoliciesInput {
  /**
   * @schema DescribeScalingPoliciesInput#FleetId
   */
  readonly fleetId: string;

  /**
   * @schema DescribeScalingPoliciesInput#StatusFilter
   */
  readonly statusFilter?: string;

  /**
   * @schema DescribeScalingPoliciesInput#Limit
   */
  readonly limit?: number;

  /**
   * @schema DescribeScalingPoliciesInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeScalingPoliciesOutput
 */
export interface DescribeScalingPoliciesOutput {
  /**
   * @schema DescribeScalingPoliciesOutput#ScalingPolicies
   */
  readonly scalingPolicies?: ScalingPolicy[];

  /**
   * @schema DescribeScalingPoliciesOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeScriptInput
 */
export interface DescribeScriptInput {
  /**
   * @schema DescribeScriptInput#ScriptId
   */
  readonly scriptId: string;

}

/**
 * @schema DescribeScriptOutput
 */
export interface DescribeScriptOutput {
  /**
   * @schema DescribeScriptOutput#Script
   */
  readonly script?: Script;

}

/**
 * @schema DescribeVpcPeeringAuthorizationsInput
 */
export interface DescribeVpcPeeringAuthorizationsInput {
}

/**
 * @schema DescribeVpcPeeringAuthorizationsOutput
 */
export interface DescribeVpcPeeringAuthorizationsOutput {
  /**
   * @schema DescribeVpcPeeringAuthorizationsOutput#VpcPeeringAuthorizations
   */
  readonly vpcPeeringAuthorizations?: VpcPeeringAuthorization[];

}

/**
 * @schema DescribeVpcPeeringConnectionsInput
 */
export interface DescribeVpcPeeringConnectionsInput {
  /**
   * @schema DescribeVpcPeeringConnectionsInput#FleetId
   */
  readonly fleetId?: string;

}

/**
 * @schema DescribeVpcPeeringConnectionsOutput
 */
export interface DescribeVpcPeeringConnectionsOutput {
  /**
   * @schema DescribeVpcPeeringConnectionsOutput#VpcPeeringConnections
   */
  readonly vpcPeeringConnections?: VpcPeeringConnection[];

}

/**
 * @schema GetGameSessionLogUrlInput
 */
export interface GetGameSessionLogUrlInput {
  /**
   * @schema GetGameSessionLogUrlInput#GameSessionId
   */
  readonly gameSessionId: string;

}

/**
 * @schema GetGameSessionLogUrlOutput
 */
export interface GetGameSessionLogUrlOutput {
  /**
   * @schema GetGameSessionLogUrlOutput#PreSignedUrl
   */
  readonly preSignedUrl?: string;

}

/**
 * @schema GetInstanceAccessInput
 */
export interface GetInstanceAccessInput {
  /**
   * @schema GetInstanceAccessInput#FleetId
   */
  readonly fleetId: string;

  /**
   * @schema GetInstanceAccessInput#InstanceId
   */
  readonly instanceId: string;

}

/**
 * @schema GetInstanceAccessOutput
 */
export interface GetInstanceAccessOutput {
  /**
   * @schema GetInstanceAccessOutput#InstanceAccess
   */
  readonly instanceAccess?: InstanceAccess;

}

/**
 * @schema ListAliasesInput
 */
export interface ListAliasesInput {
  /**
   * @schema ListAliasesInput#RoutingStrategyType
   */
  readonly routingStrategyType?: string;

  /**
   * @schema ListAliasesInput#Name
   */
  readonly name?: string;

  /**
   * @schema ListAliasesInput#Limit
   */
  readonly limit?: number;

  /**
   * @schema ListAliasesInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListAliasesOutput
 */
export interface ListAliasesOutput {
  /**
   * @schema ListAliasesOutput#Aliases
   */
  readonly aliases?: Alias[];

  /**
   * @schema ListAliasesOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListBuildsInput
 */
export interface ListBuildsInput {
  /**
   * @schema ListBuildsInput#Status
   */
  readonly status?: string;

  /**
   * @schema ListBuildsInput#Limit
   */
  readonly limit?: number;

  /**
   * @schema ListBuildsInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListBuildsOutput
 */
export interface ListBuildsOutput {
  /**
   * @schema ListBuildsOutput#Builds
   */
  readonly builds?: Build[];

  /**
   * @schema ListBuildsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListFleetsInput
 */
export interface ListFleetsInput {
  /**
   * @schema ListFleetsInput#BuildId
   */
  readonly buildId?: string;

  /**
   * @schema ListFleetsInput#ScriptId
   */
  readonly scriptId?: string;

  /**
   * @schema ListFleetsInput#Limit
   */
  readonly limit?: number;

  /**
   * @schema ListFleetsInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListFleetsOutput
 */
export interface ListFleetsOutput {
  /**
   * @schema ListFleetsOutput#FleetIds
   */
  readonly fleetIds?: string[];

  /**
   * @schema ListFleetsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListGameServerGroupsInput
 */
export interface ListGameServerGroupsInput {
  /**
   * @schema ListGameServerGroupsInput#Limit
   */
  readonly limit?: number;

  /**
   * @schema ListGameServerGroupsInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListGameServerGroupsOutput
 */
export interface ListGameServerGroupsOutput {
  /**
   * @schema ListGameServerGroupsOutput#GameServerGroups
   */
  readonly gameServerGroups?: GameServerGroup[];

  /**
   * @schema ListGameServerGroupsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListGameServersInput
 */
export interface ListGameServersInput {
  /**
   * @schema ListGameServersInput#GameServerGroupName
   */
  readonly gameServerGroupName: string;

  /**
   * @schema ListGameServersInput#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema ListGameServersInput#Limit
   */
  readonly limit?: number;

  /**
   * @schema ListGameServersInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListGameServersOutput
 */
export interface ListGameServersOutput {
  /**
   * @schema ListGameServersOutput#GameServers
   */
  readonly gameServers?: GameServer[];

  /**
   * @schema ListGameServersOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListScriptsInput
 */
export interface ListScriptsInput {
  /**
   * @schema ListScriptsInput#Limit
   */
  readonly limit?: number;

  /**
   * @schema ListScriptsInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListScriptsOutput
 */
export interface ListScriptsOutput {
  /**
   * @schema ListScriptsOutput#Scripts
   */
  readonly scripts?: Script[];

  /**
   * @schema ListScriptsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * @schema ListTagsForResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

}

/**
 * @schema ListTagsForResourceResponse
 */
export interface ListTagsForResourceResponse {
  /**
   * @schema ListTagsForResourceResponse#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema PutScalingPolicyInput
 */
export interface PutScalingPolicyInput {
  /**
   * @schema PutScalingPolicyInput#Name
   */
  readonly name: string;

  /**
   * @schema PutScalingPolicyInput#FleetId
   */
  readonly fleetId: string;

  /**
   * @schema PutScalingPolicyInput#ScalingAdjustment
   */
  readonly scalingAdjustment?: number;

  /**
   * @schema PutScalingPolicyInput#ScalingAdjustmentType
   */
  readonly scalingAdjustmentType?: string;

  /**
   * @schema PutScalingPolicyInput#Threshold
   */
  readonly threshold?: number;

  /**
   * @schema PutScalingPolicyInput#ComparisonOperator
   */
  readonly comparisonOperator?: string;

  /**
   * @schema PutScalingPolicyInput#EvaluationPeriods
   */
  readonly evaluationPeriods?: number;

  /**
   * @schema PutScalingPolicyInput#MetricName
   */
  readonly metricName: string;

  /**
   * @schema PutScalingPolicyInput#PolicyType
   */
  readonly policyType?: string;

  /**
   * @schema PutScalingPolicyInput#TargetConfiguration
   */
  readonly targetConfiguration?: TargetConfiguration;

}

/**
 * @schema PutScalingPolicyOutput
 */
export interface PutScalingPolicyOutput {
  /**
   * @schema PutScalingPolicyOutput#Name
   */
  readonly name?: string;

}

/**
 * @schema RegisterGameServerInput
 */
export interface RegisterGameServerInput {
  /**
   * @schema RegisterGameServerInput#GameServerGroupName
   */
  readonly gameServerGroupName: string;

  /**
   * @schema RegisterGameServerInput#GameServerId
   */
  readonly gameServerId: string;

  /**
   * @schema RegisterGameServerInput#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema RegisterGameServerInput#ConnectionInfo
   */
  readonly connectionInfo?: string;

  /**
   * @schema RegisterGameServerInput#GameServerData
   */
  readonly gameServerData?: string;

}

/**
 * @schema RegisterGameServerOutput
 */
export interface RegisterGameServerOutput {
  /**
   * @schema RegisterGameServerOutput#GameServer
   */
  readonly gameServer?: GameServer;

}

/**
 * @schema RequestUploadCredentialsInput
 */
export interface RequestUploadCredentialsInput {
  /**
   * @schema RequestUploadCredentialsInput#BuildId
   */
  readonly buildId: string;

}

/**
 * @schema RequestUploadCredentialsOutput
 */
export interface RequestUploadCredentialsOutput {
  /**
   * @schema RequestUploadCredentialsOutput#UploadCredentials
   */
  readonly uploadCredentials?: AwsCredentials;

  /**
   * @schema RequestUploadCredentialsOutput#StorageLocation
   */
  readonly storageLocation?: S3Location;

}

/**
 * @schema ResolveAliasInput
 */
export interface ResolveAliasInput {
  /**
   * @schema ResolveAliasInput#AliasId
   */
  readonly aliasId: string;

}

/**
 * @schema ResolveAliasOutput
 */
export interface ResolveAliasOutput {
  /**
   * @schema ResolveAliasOutput#FleetId
   */
  readonly fleetId?: string;

  /**
   * @schema ResolveAliasOutput#FleetArn
   */
  readonly fleetArn?: string;

}

/**
 * @schema ResumeGameServerGroupInput
 */
export interface ResumeGameServerGroupInput {
  /**
   * @schema ResumeGameServerGroupInput#GameServerGroupName
   */
  readonly gameServerGroupName: string;

  /**
   * @schema ResumeGameServerGroupInput#ResumeActions
   */
  readonly resumeActions: string[];

}

/**
 * @schema ResumeGameServerGroupOutput
 */
export interface ResumeGameServerGroupOutput {
  /**
   * @schema ResumeGameServerGroupOutput#GameServerGroup
   */
  readonly gameServerGroup?: GameServerGroup;

}

/**
 * @schema SearchGameSessionsInput
 */
export interface SearchGameSessionsInput {
  /**
   * @schema SearchGameSessionsInput#FleetId
   */
  readonly fleetId?: string;

  /**
   * @schema SearchGameSessionsInput#AliasId
   */
  readonly aliasId?: string;

  /**
   * @schema SearchGameSessionsInput#FilterExpression
   */
  readonly filterExpression?: string;

  /**
   * @schema SearchGameSessionsInput#SortExpression
   */
  readonly sortExpression?: string;

  /**
   * @schema SearchGameSessionsInput#Limit
   */
  readonly limit?: number;

  /**
   * @schema SearchGameSessionsInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SearchGameSessionsOutput
 */
export interface SearchGameSessionsOutput {
  /**
   * @schema SearchGameSessionsOutput#GameSessions
   */
  readonly gameSessions?: GameSession[];

  /**
   * @schema SearchGameSessionsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema StartFleetActionsInput
 */
export interface StartFleetActionsInput {
  /**
   * @schema StartFleetActionsInput#FleetId
   */
  readonly fleetId: string;

  /**
   * @schema StartFleetActionsInput#Actions
   */
  readonly actions: string[];

}

/**
 * @schema StartFleetActionsOutput
 */
export interface StartFleetActionsOutput {
}

/**
 * @schema StartGameSessionPlacementInput
 */
export interface StartGameSessionPlacementInput {
  /**
   * @schema StartGameSessionPlacementInput#PlacementId
   */
  readonly placementId: string;

  /**
   * @schema StartGameSessionPlacementInput#GameSessionQueueName
   */
  readonly gameSessionQueueName: string;

  /**
   * @schema StartGameSessionPlacementInput#GameProperties
   */
  readonly gameProperties?: GameProperty[];

  /**
   * @schema StartGameSessionPlacementInput#MaximumPlayerSessionCount
   */
  readonly maximumPlayerSessionCount: number;

  /**
   * @schema StartGameSessionPlacementInput#GameSessionName
   */
  readonly gameSessionName?: string;

  /**
   * @schema StartGameSessionPlacementInput#PlayerLatencies
   */
  readonly playerLatencies?: PlayerLatency[];

  /**
   * @schema StartGameSessionPlacementInput#DesiredPlayerSessions
   */
  readonly desiredPlayerSessions?: DesiredPlayerSession[];

  /**
   * @schema StartGameSessionPlacementInput#GameSessionData
   */
  readonly gameSessionData?: string;

}

/**
 * @schema StartGameSessionPlacementOutput
 */
export interface StartGameSessionPlacementOutput {
  /**
   * @schema StartGameSessionPlacementOutput#GameSessionPlacement
   */
  readonly gameSessionPlacement?: GameSessionPlacement;

}

/**
 * @schema StartMatchBackfillInput
 */
export interface StartMatchBackfillInput {
  /**
   * @schema StartMatchBackfillInput#TicketId
   */
  readonly ticketId?: string;

  /**
   * @schema StartMatchBackfillInput#ConfigurationName
   */
  readonly configurationName: string;

  /**
   * @schema StartMatchBackfillInput#GameSessionArn
   */
  readonly gameSessionArn?: string;

  /**
   * @schema StartMatchBackfillInput#Players
   */
  readonly players: Player[];

}

/**
 * @schema StartMatchBackfillOutput
 */
export interface StartMatchBackfillOutput {
  /**
   * @schema StartMatchBackfillOutput#MatchmakingTicket
   */
  readonly matchmakingTicket?: MatchmakingTicket;

}

/**
 * @schema StartMatchmakingInput
 */
export interface StartMatchmakingInput {
  /**
   * @schema StartMatchmakingInput#TicketId
   */
  readonly ticketId?: string;

  /**
   * @schema StartMatchmakingInput#ConfigurationName
   */
  readonly configurationName: string;

  /**
   * @schema StartMatchmakingInput#Players
   */
  readonly players: Player[];

}

/**
 * @schema StartMatchmakingOutput
 */
export interface StartMatchmakingOutput {
  /**
   * @schema StartMatchmakingOutput#MatchmakingTicket
   */
  readonly matchmakingTicket?: MatchmakingTicket;

}

/**
 * @schema StopFleetActionsInput
 */
export interface StopFleetActionsInput {
  /**
   * @schema StopFleetActionsInput#FleetId
   */
  readonly fleetId: string;

  /**
   * @schema StopFleetActionsInput#Actions
   */
  readonly actions: string[];

}

/**
 * @schema StopFleetActionsOutput
 */
export interface StopFleetActionsOutput {
}

/**
 * @schema StopGameSessionPlacementInput
 */
export interface StopGameSessionPlacementInput {
  /**
   * @schema StopGameSessionPlacementInput#PlacementId
   */
  readonly placementId: string;

}

/**
 * @schema StopGameSessionPlacementOutput
 */
export interface StopGameSessionPlacementOutput {
  /**
   * @schema StopGameSessionPlacementOutput#GameSessionPlacement
   */
  readonly gameSessionPlacement?: GameSessionPlacement;

}

/**
 * @schema StopMatchmakingInput
 */
export interface StopMatchmakingInput {
  /**
   * @schema StopMatchmakingInput#TicketId
   */
  readonly ticketId: string;

}

/**
 * @schema StopMatchmakingOutput
 */
export interface StopMatchmakingOutput {
}

/**
 * @schema SuspendGameServerGroupInput
 */
export interface SuspendGameServerGroupInput {
  /**
   * @schema SuspendGameServerGroupInput#GameServerGroupName
   */
  readonly gameServerGroupName: string;

  /**
   * @schema SuspendGameServerGroupInput#SuspendActions
   */
  readonly suspendActions: string[];

}

/**
 * @schema SuspendGameServerGroupOutput
 */
export interface SuspendGameServerGroupOutput {
  /**
   * @schema SuspendGameServerGroupOutput#GameServerGroup
   */
  readonly gameServerGroup?: GameServerGroup;

}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema TagResourceRequest#Tags
   */
  readonly tags: Tag[];

}

/**
 * @schema TagResourceResponse
 */
export interface TagResourceResponse {
}

/**
 * @schema UntagResourceRequest
 */
export interface UntagResourceRequest {
  /**
   * @schema UntagResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema UntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UntagResourceResponse
 */
export interface UntagResourceResponse {
}

/**
 * @schema UpdateAliasInput
 */
export interface UpdateAliasInput {
  /**
   * @schema UpdateAliasInput#AliasId
   */
  readonly aliasId: string;

  /**
   * @schema UpdateAliasInput#Name
   */
  readonly name?: string;

  /**
   * @schema UpdateAliasInput#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateAliasInput#RoutingStrategy
   */
  readonly routingStrategy?: RoutingStrategy;

}

/**
 * @schema UpdateAliasOutput
 */
export interface UpdateAliasOutput {
  /**
   * @schema UpdateAliasOutput#Alias
   */
  readonly alias?: Alias;

}

/**
 * @schema UpdateBuildInput
 */
export interface UpdateBuildInput {
  /**
   * @schema UpdateBuildInput#BuildId
   */
  readonly buildId: string;

  /**
   * @schema UpdateBuildInput#Name
   */
  readonly name?: string;

  /**
   * @schema UpdateBuildInput#Version
   */
  readonly version?: string;

}

/**
 * @schema UpdateBuildOutput
 */
export interface UpdateBuildOutput {
  /**
   * @schema UpdateBuildOutput#Build
   */
  readonly build?: Build;

}

/**
 * @schema UpdateFleetAttributesInput
 */
export interface UpdateFleetAttributesInput {
  /**
   * @schema UpdateFleetAttributesInput#FleetId
   */
  readonly fleetId: string;

  /**
   * @schema UpdateFleetAttributesInput#Name
   */
  readonly name?: string;

  /**
   * @schema UpdateFleetAttributesInput#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateFleetAttributesInput#NewGameSessionProtectionPolicy
   */
  readonly newGameSessionProtectionPolicy?: string;

  /**
   * @schema UpdateFleetAttributesInput#ResourceCreationLimitPolicy
   */
  readonly resourceCreationLimitPolicy?: ResourceCreationLimitPolicy;

  /**
   * @schema UpdateFleetAttributesInput#MetricGroups
   */
  readonly metricGroups?: string[];

}

/**
 * @schema UpdateFleetAttributesOutput
 */
export interface UpdateFleetAttributesOutput {
  /**
   * @schema UpdateFleetAttributesOutput#FleetId
   */
  readonly fleetId?: string;

}

/**
 * @schema UpdateFleetCapacityInput
 */
export interface UpdateFleetCapacityInput {
  /**
   * @schema UpdateFleetCapacityInput#FleetId
   */
  readonly fleetId: string;

  /**
   * @schema UpdateFleetCapacityInput#DesiredInstances
   */
  readonly desiredInstances?: number;

  /**
   * @schema UpdateFleetCapacityInput#MinSize
   */
  readonly minSize?: number;

  /**
   * @schema UpdateFleetCapacityInput#MaxSize
   */
  readonly maxSize?: number;

}

/**
 * @schema UpdateFleetCapacityOutput
 */
export interface UpdateFleetCapacityOutput {
  /**
   * @schema UpdateFleetCapacityOutput#FleetId
   */
  readonly fleetId?: string;

}

/**
 * @schema UpdateFleetPortSettingsInput
 */
export interface UpdateFleetPortSettingsInput {
  /**
   * @schema UpdateFleetPortSettingsInput#FleetId
   */
  readonly fleetId: string;

  /**
   * @schema UpdateFleetPortSettingsInput#InboundPermissionAuthorizations
   */
  readonly inboundPermissionAuthorizations?: IpPermission[];

  /**
   * @schema UpdateFleetPortSettingsInput#InboundPermissionRevocations
   */
  readonly inboundPermissionRevocations?: IpPermission[];

}

/**
 * @schema UpdateFleetPortSettingsOutput
 */
export interface UpdateFleetPortSettingsOutput {
  /**
   * @schema UpdateFleetPortSettingsOutput#FleetId
   */
  readonly fleetId?: string;

}

/**
 * @schema UpdateGameServerInput
 */
export interface UpdateGameServerInput {
  /**
   * @schema UpdateGameServerInput#GameServerGroupName
   */
  readonly gameServerGroupName: string;

  /**
   * @schema UpdateGameServerInput#GameServerId
   */
  readonly gameServerId: string;

  /**
   * @schema UpdateGameServerInput#GameServerData
   */
  readonly gameServerData?: string;

  /**
   * @schema UpdateGameServerInput#UtilizationStatus
   */
  readonly utilizationStatus?: string;

  /**
   * @schema UpdateGameServerInput#HealthCheck
   */
  readonly healthCheck?: string;

}

/**
 * @schema UpdateGameServerOutput
 */
export interface UpdateGameServerOutput {
  /**
   * @schema UpdateGameServerOutput#GameServer
   */
  readonly gameServer?: GameServer;

}

/**
 * @schema UpdateGameServerGroupInput
 */
export interface UpdateGameServerGroupInput {
  /**
   * @schema UpdateGameServerGroupInput#GameServerGroupName
   */
  readonly gameServerGroupName: string;

  /**
   * @schema UpdateGameServerGroupInput#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema UpdateGameServerGroupInput#InstanceDefinitions
   */
  readonly instanceDefinitions?: InstanceDefinition[];

  /**
   * @schema UpdateGameServerGroupInput#GameServerProtectionPolicy
   */
  readonly gameServerProtectionPolicy?: string;

  /**
   * @schema UpdateGameServerGroupInput#BalancingStrategy
   */
  readonly balancingStrategy?: string;

}

/**
 * @schema UpdateGameServerGroupOutput
 */
export interface UpdateGameServerGroupOutput {
  /**
   * @schema UpdateGameServerGroupOutput#GameServerGroup
   */
  readonly gameServerGroup?: GameServerGroup;

}

/**
 * @schema UpdateGameSessionInput
 */
export interface UpdateGameSessionInput {
  /**
   * @schema UpdateGameSessionInput#GameSessionId
   */
  readonly gameSessionId: string;

  /**
   * @schema UpdateGameSessionInput#MaximumPlayerSessionCount
   */
  readonly maximumPlayerSessionCount?: number;

  /**
   * @schema UpdateGameSessionInput#Name
   */
  readonly name?: string;

  /**
   * @schema UpdateGameSessionInput#PlayerSessionCreationPolicy
   */
  readonly playerSessionCreationPolicy?: string;

  /**
   * @schema UpdateGameSessionInput#ProtectionPolicy
   */
  readonly protectionPolicy?: string;

}

/**
 * @schema UpdateGameSessionOutput
 */
export interface UpdateGameSessionOutput {
  /**
   * @schema UpdateGameSessionOutput#GameSession
   */
  readonly gameSession?: GameSession;

}

/**
 * @schema UpdateGameSessionQueueInput
 */
export interface UpdateGameSessionQueueInput {
  /**
   * @schema UpdateGameSessionQueueInput#Name
   */
  readonly name: string;

  /**
   * @schema UpdateGameSessionQueueInput#TimeoutInSeconds
   */
  readonly timeoutInSeconds?: number;

  /**
   * @schema UpdateGameSessionQueueInput#PlayerLatencyPolicies
   */
  readonly playerLatencyPolicies?: PlayerLatencyPolicy[];

  /**
   * @schema UpdateGameSessionQueueInput#Destinations
   */
  readonly destinations?: GameSessionQueueDestination[];

}

/**
 * @schema UpdateGameSessionQueueOutput
 */
export interface UpdateGameSessionQueueOutput {
  /**
   * @schema UpdateGameSessionQueueOutput#GameSessionQueue
   */
  readonly gameSessionQueue?: GameSessionQueue;

}

/**
 * @schema UpdateMatchmakingConfigurationInput
 */
export interface UpdateMatchmakingConfigurationInput {
  /**
   * @schema UpdateMatchmakingConfigurationInput#Name
   */
  readonly name: string;

  /**
   * @schema UpdateMatchmakingConfigurationInput#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateMatchmakingConfigurationInput#GameSessionQueueArns
   */
  readonly gameSessionQueueArns?: string[];

  /**
   * @schema UpdateMatchmakingConfigurationInput#RequestTimeoutSeconds
   */
  readonly requestTimeoutSeconds?: number;

  /**
   * @schema UpdateMatchmakingConfigurationInput#AcceptanceTimeoutSeconds
   */
  readonly acceptanceTimeoutSeconds?: number;

  /**
   * @schema UpdateMatchmakingConfigurationInput#AcceptanceRequired
   */
  readonly acceptanceRequired?: boolean;

  /**
   * @schema UpdateMatchmakingConfigurationInput#RuleSetName
   */
  readonly ruleSetName?: string;

  /**
   * @schema UpdateMatchmakingConfigurationInput#NotificationTarget
   */
  readonly notificationTarget?: string;

  /**
   * @schema UpdateMatchmakingConfigurationInput#AdditionalPlayerCount
   */
  readonly additionalPlayerCount?: number;

  /**
   * @schema UpdateMatchmakingConfigurationInput#CustomEventData
   */
  readonly customEventData?: string;

  /**
   * @schema UpdateMatchmakingConfigurationInput#GameProperties
   */
  readonly gameProperties?: GameProperty[];

  /**
   * @schema UpdateMatchmakingConfigurationInput#GameSessionData
   */
  readonly gameSessionData?: string;

  /**
   * @schema UpdateMatchmakingConfigurationInput#BackfillMode
   */
  readonly backfillMode?: string;

  /**
   * @schema UpdateMatchmakingConfigurationInput#FlexMatchMode
   */
  readonly flexMatchMode?: string;

}

/**
 * @schema UpdateMatchmakingConfigurationOutput
 */
export interface UpdateMatchmakingConfigurationOutput {
  /**
   * @schema UpdateMatchmakingConfigurationOutput#Configuration
   */
  readonly configuration?: MatchmakingConfiguration;

}

/**
 * @schema UpdateRuntimeConfigurationInput
 */
export interface UpdateRuntimeConfigurationInput {
  /**
   * @schema UpdateRuntimeConfigurationInput#FleetId
   */
  readonly fleetId: string;

  /**
   * @schema UpdateRuntimeConfigurationInput#RuntimeConfiguration
   */
  readonly runtimeConfiguration: RuntimeConfiguration;

}

/**
 * @schema UpdateRuntimeConfigurationOutput
 */
export interface UpdateRuntimeConfigurationOutput {
  /**
   * @schema UpdateRuntimeConfigurationOutput#RuntimeConfiguration
   */
  readonly runtimeConfiguration?: RuntimeConfiguration;

}

/**
 * @schema UpdateScriptInput
 */
export interface UpdateScriptInput {
  /**
   * @schema UpdateScriptInput#ScriptId
   */
  readonly scriptId: string;

  /**
   * @schema UpdateScriptInput#Name
   */
  readonly name?: string;

  /**
   * @schema UpdateScriptInput#Version
   */
  readonly version?: string;

  /**
   * @schema UpdateScriptInput#StorageLocation
   */
  readonly storageLocation?: S3Location;

  /**
   * @schema UpdateScriptInput#ZipFile
   */
  readonly zipFile?: any;

}

/**
 * @schema UpdateScriptOutput
 */
export interface UpdateScriptOutput {
  /**
   * @schema UpdateScriptOutput#Script
   */
  readonly script?: Script;

}

/**
 * @schema ValidateMatchmakingRuleSetInput
 */
export interface ValidateMatchmakingRuleSetInput {
  /**
   * @schema ValidateMatchmakingRuleSetInput#RuleSetBody
   */
  readonly ruleSetBody: string;

}

/**
 * @schema ValidateMatchmakingRuleSetOutput
 */
export interface ValidateMatchmakingRuleSetOutput {
  /**
   * @schema ValidateMatchmakingRuleSetOutput#Valid
   */
  readonly valid?: boolean;

}

/**
 * @schema GameServer
 */
export interface GameServer {
  /**
   * @schema GameServer#GameServerGroupName
   */
  readonly gameServerGroupName?: string;

  /**
   * @schema GameServer#GameServerGroupArn
   */
  readonly gameServerGroupArn?: string;

  /**
   * @schema GameServer#GameServerId
   */
  readonly gameServerId?: string;

  /**
   * @schema GameServer#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema GameServer#ConnectionInfo
   */
  readonly connectionInfo?: string;

  /**
   * @schema GameServer#GameServerData
   */
  readonly gameServerData?: string;

  /**
   * @schema GameServer#ClaimStatus
   */
  readonly claimStatus?: string;

  /**
   * @schema GameServer#UtilizationStatus
   */
  readonly utilizationStatus?: string;

  /**
   * @schema GameServer#RegistrationTime
   */
  readonly registrationTime?: string;

  /**
   * @schema GameServer#LastClaimTime
   */
  readonly lastClaimTime?: string;

  /**
   * @schema GameServer#LastHealthCheckTime
   */
  readonly lastHealthCheckTime?: string;

}

/**
 * @schema RoutingStrategy
 */
export interface RoutingStrategy {
  /**
   * @schema RoutingStrategy#Type
   */
  readonly type?: string;

  /**
   * @schema RoutingStrategy#FleetId
   */
  readonly fleetId?: string;

  /**
   * @schema RoutingStrategy#Message
   */
  readonly message?: string;

}

/**
 * @schema Tag
 */
export interface Tag {
  /**
   * @schema Tag#Key
   */
  readonly key: string;

  /**
   * @schema Tag#Value
   */
  readonly value: string;

}

/**
 * @schema Alias
 */
export interface Alias {
  /**
   * @schema Alias#AliasId
   */
  readonly aliasId?: string;

  /**
   * @schema Alias#Name
   */
  readonly name?: string;

  /**
   * @schema Alias#AliasArn
   */
  readonly aliasArn?: string;

  /**
   * @schema Alias#Description
   */
  readonly description?: string;

  /**
   * @schema Alias#RoutingStrategy
   */
  readonly routingStrategy?: RoutingStrategy;

  /**
   * @schema Alias#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema Alias#LastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

}

/**
 * @schema S3Location
 */
export interface S3Location {
  /**
   * @schema S3Location#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3Location#Key
   */
  readonly key?: string;

  /**
   * @schema S3Location#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema S3Location#ObjectVersion
   */
  readonly objectVersion?: string;

}

/**
 * @schema Build
 */
export interface Build {
  /**
   * @schema Build#BuildId
   */
  readonly buildId?: string;

  /**
   * @schema Build#BuildArn
   */
  readonly buildArn?: string;

  /**
   * @schema Build#Name
   */
  readonly name?: string;

  /**
   * @schema Build#Version
   */
  readonly version?: string;

  /**
   * @schema Build#Status
   */
  readonly status?: string;

  /**
   * @schema Build#SizeOnDisk
   */
  readonly sizeOnDisk?: number;

  /**
   * @schema Build#OperatingSystem
   */
  readonly operatingSystem?: string;

  /**
   * @schema Build#CreationTime
   */
  readonly creationTime?: string;

}

/**
 * @schema AwsCredentials
 */
export interface AwsCredentials {
  /**
   * @schema AwsCredentials#AccessKeyId
   */
  readonly accessKeyId?: string;

  /**
   * @schema AwsCredentials#SecretAccessKey
   */
  readonly secretAccessKey?: string;

  /**
   * @schema AwsCredentials#SessionToken
   */
  readonly sessionToken?: string;

}

/**
 * @schema IpPermission
 */
export interface IpPermission {
  /**
   * @schema IpPermission#FromPort
   */
  readonly fromPort: number;

  /**
   * @schema IpPermission#ToPort
   */
  readonly toPort: number;

  /**
   * @schema IpPermission#IpRange
   */
  readonly ipRange: string;

  /**
   * @schema IpPermission#Protocol
   */
  readonly protocol: string;

}

/**
 * @schema RuntimeConfiguration
 */
export interface RuntimeConfiguration {
  /**
   * @schema RuntimeConfiguration#ServerProcesses
   */
  readonly serverProcesses?: ServerProcess[];

  /**
   * @schema RuntimeConfiguration#MaxConcurrentGameSessionActivations
   */
  readonly maxConcurrentGameSessionActivations?: number;

  /**
   * @schema RuntimeConfiguration#GameSessionActivationTimeoutSeconds
   */
  readonly gameSessionActivationTimeoutSeconds?: number;

}

/**
 * @schema ResourceCreationLimitPolicy
 */
export interface ResourceCreationLimitPolicy {
  /**
   * @schema ResourceCreationLimitPolicy#NewGameSessionsPerCreator
   */
  readonly newGameSessionsPerCreator?: number;

  /**
   * @schema ResourceCreationLimitPolicy#PolicyPeriodInMinutes
   */
  readonly policyPeriodInMinutes?: number;

}

/**
 * @schema CertificateConfiguration
 */
export interface CertificateConfiguration {
  /**
   * @schema CertificateConfiguration#CertificateType
   */
  readonly certificateType: string;

}

/**
 * @schema FleetAttributes
 */
export interface FleetAttributes {
  /**
   * @schema FleetAttributes#FleetId
   */
  readonly fleetId?: string;

  /**
   * @schema FleetAttributes#FleetArn
   */
  readonly fleetArn?: string;

  /**
   * @schema FleetAttributes#FleetType
   */
  readonly fleetType?: string;

  /**
   * @schema FleetAttributes#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema FleetAttributes#Description
   */
  readonly description?: string;

  /**
   * @schema FleetAttributes#Name
   */
  readonly name?: string;

  /**
   * @schema FleetAttributes#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema FleetAttributes#TerminationTime
   */
  readonly terminationTime?: string;

  /**
   * @schema FleetAttributes#Status
   */
  readonly status?: string;

  /**
   * @schema FleetAttributes#BuildId
   */
  readonly buildId?: string;

  /**
   * @schema FleetAttributes#BuildArn
   */
  readonly buildArn?: string;

  /**
   * @schema FleetAttributes#ScriptId
   */
  readonly scriptId?: string;

  /**
   * @schema FleetAttributes#ScriptArn
   */
  readonly scriptArn?: string;

  /**
   * @schema FleetAttributes#ServerLaunchPath
   */
  readonly serverLaunchPath?: string;

  /**
   * @schema FleetAttributes#ServerLaunchParameters
   */
  readonly serverLaunchParameters?: string;

  /**
   * @schema FleetAttributes#LogPaths
   */
  readonly logPaths?: string[];

  /**
   * @schema FleetAttributes#NewGameSessionProtectionPolicy
   */
  readonly newGameSessionProtectionPolicy?: string;

  /**
   * @schema FleetAttributes#OperatingSystem
   */
  readonly operatingSystem?: string;

  /**
   * @schema FleetAttributes#ResourceCreationLimitPolicy
   */
  readonly resourceCreationLimitPolicy?: ResourceCreationLimitPolicy;

  /**
   * @schema FleetAttributes#MetricGroups
   */
  readonly metricGroups?: string[];

  /**
   * @schema FleetAttributes#StoppedActions
   */
  readonly stoppedActions?: string[];

  /**
   * @schema FleetAttributes#InstanceRoleArn
   */
  readonly instanceRoleArn?: string;

  /**
   * @schema FleetAttributes#CertificateConfiguration
   */
  readonly certificateConfiguration?: CertificateConfiguration;

}

/**
 * @schema LaunchTemplateSpecification
 */
export interface LaunchTemplateSpecification {
  /**
   * @schema LaunchTemplateSpecification#LaunchTemplateId
   */
  readonly launchTemplateId?: string;

  /**
   * @schema LaunchTemplateSpecification#LaunchTemplateName
   */
  readonly launchTemplateName?: string;

  /**
   * @schema LaunchTemplateSpecification#Version
   */
  readonly version?: string;

}

/**
 * @schema InstanceDefinition
 */
export interface InstanceDefinition {
  /**
   * @schema InstanceDefinition#InstanceType
   */
  readonly instanceType: string;

  /**
   * @schema InstanceDefinition#WeightedCapacity
   */
  readonly weightedCapacity?: string;

}

/**
 * @schema GameServerGroupAutoScalingPolicy
 */
export interface GameServerGroupAutoScalingPolicy {
  /**
   * @schema GameServerGroupAutoScalingPolicy#EstimatedInstanceWarmup
   */
  readonly estimatedInstanceWarmup?: number;

  /**
   * @schema GameServerGroupAutoScalingPolicy#TargetTrackingConfiguration
   */
  readonly targetTrackingConfiguration: TargetTrackingConfiguration;

}

/**
 * @schema GameServerGroup
 */
export interface GameServerGroup {
  /**
   * @schema GameServerGroup#GameServerGroupName
   */
  readonly gameServerGroupName?: string;

  /**
   * @schema GameServerGroup#GameServerGroupArn
   */
  readonly gameServerGroupArn?: string;

  /**
   * @schema GameServerGroup#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema GameServerGroup#InstanceDefinitions
   */
  readonly instanceDefinitions?: InstanceDefinition[];

  /**
   * @schema GameServerGroup#BalancingStrategy
   */
  readonly balancingStrategy?: string;

  /**
   * @schema GameServerGroup#GameServerProtectionPolicy
   */
  readonly gameServerProtectionPolicy?: string;

  /**
   * @schema GameServerGroup#AutoScalingGroupArn
   */
  readonly autoScalingGroupArn?: string;

  /**
   * @schema GameServerGroup#Status
   */
  readonly status?: string;

  /**
   * @schema GameServerGroup#StatusReason
   */
  readonly statusReason?: string;

  /**
   * @schema GameServerGroup#SuspendedActions
   */
  readonly suspendedActions?: string[];

  /**
   * @schema GameServerGroup#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema GameServerGroup#LastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

}

/**
 * @schema GameProperty
 */
export interface GameProperty {
  /**
   * @schema GameProperty#Key
   */
  readonly key: string;

  /**
   * @schema GameProperty#Value
   */
  readonly value: string;

}

/**
 * @schema GameSession
 */
export interface GameSession {
  /**
   * @schema GameSession#GameSessionId
   */
  readonly gameSessionId?: string;

  /**
   * @schema GameSession#Name
   */
  readonly name?: string;

  /**
   * @schema GameSession#FleetId
   */
  readonly fleetId?: string;

  /**
   * @schema GameSession#FleetArn
   */
  readonly fleetArn?: string;

  /**
   * @schema GameSession#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema GameSession#TerminationTime
   */
  readonly terminationTime?: string;

  /**
   * @schema GameSession#CurrentPlayerSessionCount
   */
  readonly currentPlayerSessionCount?: number;

  /**
   * @schema GameSession#MaximumPlayerSessionCount
   */
  readonly maximumPlayerSessionCount?: number;

  /**
   * @schema GameSession#Status
   */
  readonly status?: string;

  /**
   * @schema GameSession#StatusReason
   */
  readonly statusReason?: string;

  /**
   * @schema GameSession#GameProperties
   */
  readonly gameProperties?: GameProperty[];

  /**
   * @schema GameSession#IpAddress
   */
  readonly ipAddress?: string;

  /**
   * @schema GameSession#DnsName
   */
  readonly dnsName?: string;

  /**
   * @schema GameSession#Port
   */
  readonly port?: number;

  /**
   * @schema GameSession#PlayerSessionCreationPolicy
   */
  readonly playerSessionCreationPolicy?: string;

  /**
   * @schema GameSession#CreatorId
   */
  readonly creatorId?: string;

  /**
   * @schema GameSession#GameSessionData
   */
  readonly gameSessionData?: string;

  /**
   * @schema GameSession#MatchmakerData
   */
  readonly matchmakerData?: string;

}

/**
 * @schema PlayerLatencyPolicy
 */
export interface PlayerLatencyPolicy {
  /**
   * @schema PlayerLatencyPolicy#MaximumIndividualPlayerLatencyMilliseconds
   */
  readonly maximumIndividualPlayerLatencyMilliseconds?: number;

  /**
   * @schema PlayerLatencyPolicy#PolicyDurationSeconds
   */
  readonly policyDurationSeconds?: number;

}

/**
 * @schema GameSessionQueueDestination
 */
export interface GameSessionQueueDestination {
  /**
   * @schema GameSessionQueueDestination#DestinationArn
   */
  readonly destinationArn?: string;

}

/**
 * @schema GameSessionQueue
 */
export interface GameSessionQueue {
  /**
   * @schema GameSessionQueue#Name
   */
  readonly name?: string;

  /**
   * @schema GameSessionQueue#GameSessionQueueArn
   */
  readonly gameSessionQueueArn?: string;

  /**
   * @schema GameSessionQueue#TimeoutInSeconds
   */
  readonly timeoutInSeconds?: number;

  /**
   * @schema GameSessionQueue#PlayerLatencyPolicies
   */
  readonly playerLatencyPolicies?: PlayerLatencyPolicy[];

  /**
   * @schema GameSessionQueue#Destinations
   */
  readonly destinations?: GameSessionQueueDestination[];

}

/**
 * @schema MatchmakingConfiguration
 */
export interface MatchmakingConfiguration {
  /**
   * @schema MatchmakingConfiguration#Name
   */
  readonly name?: string;

  /**
   * @schema MatchmakingConfiguration#ConfigurationArn
   */
  readonly configurationArn?: string;

  /**
   * @schema MatchmakingConfiguration#Description
   */
  readonly description?: string;

  /**
   * @schema MatchmakingConfiguration#GameSessionQueueArns
   */
  readonly gameSessionQueueArns?: string[];

  /**
   * @schema MatchmakingConfiguration#RequestTimeoutSeconds
   */
  readonly requestTimeoutSeconds?: number;

  /**
   * @schema MatchmakingConfiguration#AcceptanceTimeoutSeconds
   */
  readonly acceptanceTimeoutSeconds?: number;

  /**
   * @schema MatchmakingConfiguration#AcceptanceRequired
   */
  readonly acceptanceRequired?: boolean;

  /**
   * @schema MatchmakingConfiguration#RuleSetName
   */
  readonly ruleSetName?: string;

  /**
   * @schema MatchmakingConfiguration#RuleSetArn
   */
  readonly ruleSetArn?: string;

  /**
   * @schema MatchmakingConfiguration#NotificationTarget
   */
  readonly notificationTarget?: string;

  /**
   * @schema MatchmakingConfiguration#AdditionalPlayerCount
   */
  readonly additionalPlayerCount?: number;

  /**
   * @schema MatchmakingConfiguration#CustomEventData
   */
  readonly customEventData?: string;

  /**
   * @schema MatchmakingConfiguration#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema MatchmakingConfiguration#GameProperties
   */
  readonly gameProperties?: GameProperty[];

  /**
   * @schema MatchmakingConfiguration#GameSessionData
   */
  readonly gameSessionData?: string;

  /**
   * @schema MatchmakingConfiguration#BackfillMode
   */
  readonly backfillMode?: string;

  /**
   * @schema MatchmakingConfiguration#FlexMatchMode
   */
  readonly flexMatchMode?: string;

}

/**
 * @schema MatchmakingRuleSet
 */
export interface MatchmakingRuleSet {
  /**
   * @schema MatchmakingRuleSet#RuleSetName
   */
  readonly ruleSetName?: string;

  /**
   * @schema MatchmakingRuleSet#RuleSetArn
   */
  readonly ruleSetArn?: string;

  /**
   * @schema MatchmakingRuleSet#RuleSetBody
   */
  readonly ruleSetBody: string;

  /**
   * @schema MatchmakingRuleSet#CreationTime
   */
  readonly creationTime?: string;

}

/**
 * @schema PlayerSession
 */
export interface PlayerSession {
  /**
   * @schema PlayerSession#PlayerSessionId
   */
  readonly playerSessionId?: string;

  /**
   * @schema PlayerSession#PlayerId
   */
  readonly playerId?: string;

  /**
   * @schema PlayerSession#GameSessionId
   */
  readonly gameSessionId?: string;

  /**
   * @schema PlayerSession#FleetId
   */
  readonly fleetId?: string;

  /**
   * @schema PlayerSession#FleetArn
   */
  readonly fleetArn?: string;

  /**
   * @schema PlayerSession#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema PlayerSession#TerminationTime
   */
  readonly terminationTime?: string;

  /**
   * @schema PlayerSession#Status
   */
  readonly status?: string;

  /**
   * @schema PlayerSession#IpAddress
   */
  readonly ipAddress?: string;

  /**
   * @schema PlayerSession#DnsName
   */
  readonly dnsName?: string;

  /**
   * @schema PlayerSession#Port
   */
  readonly port?: number;

  /**
   * @schema PlayerSession#PlayerData
   */
  readonly playerData?: string;

}

/**
 * @schema Script
 */
export interface Script {
  /**
   * @schema Script#ScriptId
   */
  readonly scriptId?: string;

  /**
   * @schema Script#ScriptArn
   */
  readonly scriptArn?: string;

  /**
   * @schema Script#Name
   */
  readonly name?: string;

  /**
   * @schema Script#Version
   */
  readonly version?: string;

  /**
   * @schema Script#SizeOnDisk
   */
  readonly sizeOnDisk?: number;

  /**
   * @schema Script#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema Script#StorageLocation
   */
  readonly storageLocation?: S3Location;

}

/**
 * @schema VpcPeeringAuthorization
 */
export interface VpcPeeringAuthorization {
  /**
   * @schema VpcPeeringAuthorization#GameLiftAwsAccountId
   */
  readonly gameLiftAwsAccountId?: string;

  /**
   * @schema VpcPeeringAuthorization#PeerVpcAwsAccountId
   */
  readonly peerVpcAwsAccountId?: string;

  /**
   * @schema VpcPeeringAuthorization#PeerVpcId
   */
  readonly peerVpcId?: string;

  /**
   * @schema VpcPeeringAuthorization#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema VpcPeeringAuthorization#ExpirationTime
   */
  readonly expirationTime?: string;

}

/**
 * @schema Ec2InstanceLimit
 */
export interface Ec2InstanceLimit {
  /**
   * @schema Ec2InstanceLimit#EC2InstanceType
   */
  readonly ec2InstanceType?: string;

  /**
   * @schema Ec2InstanceLimit#CurrentInstances
   */
  readonly currentInstances?: number;

  /**
   * @schema Ec2InstanceLimit#InstanceLimit
   */
  readonly instanceLimit?: number;

}

/**
 * @schema FleetCapacity
 */
export interface FleetCapacity {
  /**
   * @schema FleetCapacity#FleetId
   */
  readonly fleetId?: string;

  /**
   * @schema FleetCapacity#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema FleetCapacity#InstanceCounts
   */
  readonly instanceCounts?: Ec2InstanceCounts;

}

/**
 * @schema Event
 */
export interface Event {
  /**
   * @schema Event#EventId
   */
  readonly eventId?: string;

  /**
   * @schema Event#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema Event#EventCode
   */
  readonly eventCode?: string;

  /**
   * @schema Event#Message
   */
  readonly message?: string;

  /**
   * @schema Event#EventTime
   */
  readonly eventTime?: string;

  /**
   * @schema Event#PreSignedLogUrl
   */
  readonly preSignedLogUrl?: string;

}

/**
 * @schema FleetUtilization
 */
export interface FleetUtilization {
  /**
   * @schema FleetUtilization#FleetId
   */
  readonly fleetId?: string;

  /**
   * @schema FleetUtilization#ActiveServerProcessCount
   */
  readonly activeServerProcessCount?: number;

  /**
   * @schema FleetUtilization#ActiveGameSessionCount
   */
  readonly activeGameSessionCount?: number;

  /**
   * @schema FleetUtilization#CurrentPlayerSessionCount
   */
  readonly currentPlayerSessionCount?: number;

  /**
   * @schema FleetUtilization#MaximumPlayerSessionCount
   */
  readonly maximumPlayerSessionCount?: number;

}

/**
 * @schema GameServerInstance
 */
export interface GameServerInstance {
  /**
   * @schema GameServerInstance#GameServerGroupName
   */
  readonly gameServerGroupName?: string;

  /**
   * @schema GameServerInstance#GameServerGroupArn
   */
  readonly gameServerGroupArn?: string;

  /**
   * @schema GameServerInstance#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema GameServerInstance#InstanceStatus
   */
  readonly instanceStatus?: string;

}

/**
 * @schema GameSessionDetail
 */
export interface GameSessionDetail {
  /**
   * @schema GameSessionDetail#GameSession
   */
  readonly gameSession?: GameSession;

  /**
   * @schema GameSessionDetail#ProtectionPolicy
   */
  readonly protectionPolicy?: string;

}

/**
 * @schema GameSessionPlacement
 */
export interface GameSessionPlacement {
  /**
   * @schema GameSessionPlacement#PlacementId
   */
  readonly placementId?: string;

  /**
   * @schema GameSessionPlacement#GameSessionQueueName
   */
  readonly gameSessionQueueName?: string;

  /**
   * @schema GameSessionPlacement#Status
   */
  readonly status?: string;

  /**
   * @schema GameSessionPlacement#GameProperties
   */
  readonly gameProperties?: GameProperty[];

  /**
   * @schema GameSessionPlacement#MaximumPlayerSessionCount
   */
  readonly maximumPlayerSessionCount?: number;

  /**
   * @schema GameSessionPlacement#GameSessionName
   */
  readonly gameSessionName?: string;

  /**
   * @schema GameSessionPlacement#GameSessionId
   */
  readonly gameSessionId?: string;

  /**
   * @schema GameSessionPlacement#GameSessionArn
   */
  readonly gameSessionArn?: string;

  /**
   * @schema GameSessionPlacement#GameSessionRegion
   */
  readonly gameSessionRegion?: string;

  /**
   * @schema GameSessionPlacement#PlayerLatencies
   */
  readonly playerLatencies?: PlayerLatency[];

  /**
   * @schema GameSessionPlacement#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema GameSessionPlacement#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema GameSessionPlacement#IpAddress
   */
  readonly ipAddress?: string;

  /**
   * @schema GameSessionPlacement#DnsName
   */
  readonly dnsName?: string;

  /**
   * @schema GameSessionPlacement#Port
   */
  readonly port?: number;

  /**
   * @schema GameSessionPlacement#PlacedPlayerSessions
   */
  readonly placedPlayerSessions?: PlacedPlayerSession[];

  /**
   * @schema GameSessionPlacement#GameSessionData
   */
  readonly gameSessionData?: string;

  /**
   * @schema GameSessionPlacement#MatchmakerData
   */
  readonly matchmakerData?: string;

}

/**
 * @schema Instance
 */
export interface Instance {
  /**
   * @schema Instance#FleetId
   */
  readonly fleetId?: string;

  /**
   * @schema Instance#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema Instance#IpAddress
   */
  readonly ipAddress?: string;

  /**
   * @schema Instance#DnsName
   */
  readonly dnsName?: string;

  /**
   * @schema Instance#OperatingSystem
   */
  readonly operatingSystem?: string;

  /**
   * @schema Instance#Type
   */
  readonly type?: string;

  /**
   * @schema Instance#Status
   */
  readonly status?: string;

  /**
   * @schema Instance#CreationTime
   */
  readonly creationTime?: string;

}

/**
 * @schema MatchmakingTicket
 */
export interface MatchmakingTicket {
  /**
   * @schema MatchmakingTicket#TicketId
   */
  readonly ticketId?: string;

  /**
   * @schema MatchmakingTicket#ConfigurationName
   */
  readonly configurationName?: string;

  /**
   * @schema MatchmakingTicket#ConfigurationArn
   */
  readonly configurationArn?: string;

  /**
   * @schema MatchmakingTicket#Status
   */
  readonly status?: string;

  /**
   * @schema MatchmakingTicket#StatusReason
   */
  readonly statusReason?: string;

  /**
   * @schema MatchmakingTicket#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema MatchmakingTicket#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema MatchmakingTicket#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema MatchmakingTicket#Players
   */
  readonly players?: Player[];

  /**
   * @schema MatchmakingTicket#GameSessionConnectionInfo
   */
  readonly gameSessionConnectionInfo?: GameSessionConnectionInfo;

  /**
   * @schema MatchmakingTicket#EstimatedWaitTime
   */
  readonly estimatedWaitTime?: number;

}

/**
 * @schema ScalingPolicy
 */
export interface ScalingPolicy {
  /**
   * @schema ScalingPolicy#FleetId
   */
  readonly fleetId?: string;

  /**
   * @schema ScalingPolicy#Name
   */
  readonly name?: string;

  /**
   * @schema ScalingPolicy#Status
   */
  readonly status?: string;

  /**
   * @schema ScalingPolicy#ScalingAdjustment
   */
  readonly scalingAdjustment?: number;

  /**
   * @schema ScalingPolicy#ScalingAdjustmentType
   */
  readonly scalingAdjustmentType?: string;

  /**
   * @schema ScalingPolicy#ComparisonOperator
   */
  readonly comparisonOperator?: string;

  /**
   * @schema ScalingPolicy#Threshold
   */
  readonly threshold?: number;

  /**
   * @schema ScalingPolicy#EvaluationPeriods
   */
  readonly evaluationPeriods?: number;

  /**
   * @schema ScalingPolicy#MetricName
   */
  readonly metricName?: string;

  /**
   * @schema ScalingPolicy#PolicyType
   */
  readonly policyType?: string;

  /**
   * @schema ScalingPolicy#TargetConfiguration
   */
  readonly targetConfiguration?: TargetConfiguration;

}

/**
 * @schema VpcPeeringConnection
 */
export interface VpcPeeringConnection {
  /**
   * @schema VpcPeeringConnection#FleetId
   */
  readonly fleetId?: string;

  /**
   * @schema VpcPeeringConnection#FleetArn
   */
  readonly fleetArn?: string;

  /**
   * @schema VpcPeeringConnection#IpV4CidrBlock
   */
  readonly ipV4CidrBlock?: string;

  /**
   * @schema VpcPeeringConnection#VpcPeeringConnectionId
   */
  readonly vpcPeeringConnectionId?: string;

  /**
   * @schema VpcPeeringConnection#Status
   */
  readonly status?: VpcPeeringConnectionStatus;

  /**
   * @schema VpcPeeringConnection#PeerVpcId
   */
  readonly peerVpcId?: string;

  /**
   * @schema VpcPeeringConnection#GameLiftVpcId
   */
  readonly gameLiftVpcId?: string;

}

/**
 * @schema InstanceAccess
 */
export interface InstanceAccess {
  /**
   * @schema InstanceAccess#FleetId
   */
  readonly fleetId?: string;

  /**
   * @schema InstanceAccess#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema InstanceAccess#IpAddress
   */
  readonly ipAddress?: string;

  /**
   * @schema InstanceAccess#OperatingSystem
   */
  readonly operatingSystem?: string;

  /**
   * @schema InstanceAccess#Credentials
   */
  readonly credentials?: InstanceCredentials;

}

/**
 * @schema TargetConfiguration
 */
export interface TargetConfiguration {
  /**
   * @schema TargetConfiguration#TargetValue
   */
  readonly targetValue: number;

}

/**
 * @schema PlayerLatency
 */
export interface PlayerLatency {
  /**
   * @schema PlayerLatency#PlayerId
   */
  readonly playerId?: string;

  /**
   * @schema PlayerLatency#RegionIdentifier
   */
  readonly regionIdentifier?: string;

  /**
   * @schema PlayerLatency#LatencyInMilliseconds
   */
  readonly latencyInMilliseconds?: number;

}

/**
 * @schema DesiredPlayerSession
 */
export interface DesiredPlayerSession {
  /**
   * @schema DesiredPlayerSession#PlayerId
   */
  readonly playerId?: string;

  /**
   * @schema DesiredPlayerSession#PlayerData
   */
  readonly playerData?: string;

}

/**
 * @schema Player
 */
export interface Player {
  /**
   * @schema Player#PlayerId
   */
  readonly playerId?: string;

  /**
   * @schema Player#PlayerAttributes
   */
  readonly playerAttributes?: { [key: string]: AttributeValue };

  /**
   * @schema Player#Team
   */
  readonly team?: string;

  /**
   * @schema Player#LatencyInMs
   */
  readonly latencyInMs?: { [key: string]: number };

}

/**
 * @schema ServerProcess
 */
export interface ServerProcess {
  /**
   * @schema ServerProcess#LaunchPath
   */
  readonly launchPath: string;

  /**
   * @schema ServerProcess#Parameters
   */
  readonly parameters?: string;

  /**
   * @schema ServerProcess#ConcurrentExecutions
   */
  readonly concurrentExecutions: number;

}

/**
 * @schema TargetTrackingConfiguration
 */
export interface TargetTrackingConfiguration {
  /**
   * @schema TargetTrackingConfiguration#TargetValue
   */
  readonly targetValue: number;

}

/**
 * @schema Ec2InstanceCounts
 */
export interface Ec2InstanceCounts {
  /**
   * @schema Ec2InstanceCounts#DESIRED
   */
  readonly desired?: number;

  /**
   * @schema Ec2InstanceCounts#MINIMUM
   */
  readonly minimum?: number;

  /**
   * @schema Ec2InstanceCounts#MAXIMUM
   */
  readonly maximum?: number;

  /**
   * @schema Ec2InstanceCounts#PENDING
   */
  readonly pending?: number;

  /**
   * @schema Ec2InstanceCounts#ACTIVE
   */
  readonly active?: number;

  /**
   * @schema Ec2InstanceCounts#IDLE
   */
  readonly idle?: number;

  /**
   * @schema Ec2InstanceCounts#TERMINATING
   */
  readonly terminating?: number;

}

/**
 * @schema PlacedPlayerSession
 */
export interface PlacedPlayerSession {
  /**
   * @schema PlacedPlayerSession#PlayerId
   */
  readonly playerId?: string;

  /**
   * @schema PlacedPlayerSession#PlayerSessionId
   */
  readonly playerSessionId?: string;

}

/**
 * @schema GameSessionConnectionInfo
 */
export interface GameSessionConnectionInfo {
  /**
   * @schema GameSessionConnectionInfo#GameSessionArn
   */
  readonly gameSessionArn?: string;

  /**
   * @schema GameSessionConnectionInfo#IpAddress
   */
  readonly ipAddress?: string;

  /**
   * @schema GameSessionConnectionInfo#DnsName
   */
  readonly dnsName?: string;

  /**
   * @schema GameSessionConnectionInfo#Port
   */
  readonly port?: number;

  /**
   * @schema GameSessionConnectionInfo#MatchedPlayerSessions
   */
  readonly matchedPlayerSessions?: MatchedPlayerSession[];

}

/**
 * @schema VpcPeeringConnectionStatus
 */
export interface VpcPeeringConnectionStatus {
  /**
   * @schema VpcPeeringConnectionStatus#Code
   */
  readonly code?: string;

  /**
   * @schema VpcPeeringConnectionStatus#Message
   */
  readonly message?: string;

}

/**
 * @schema InstanceCredentials
 */
export interface InstanceCredentials {
  /**
   * @schema InstanceCredentials#UserName
   */
  readonly userName?: string;

  /**
   * @schema InstanceCredentials#Secret
   */
  readonly secret?: string;

}

/**
 * @schema AttributeValue
 */
export interface AttributeValue {
  /**
   * @schema AttributeValue#S
   */
  readonly s?: string;

  /**
   * @schema AttributeValue#N
   */
  readonly n?: number;

  /**
   * @schema AttributeValue#SL
   */
  readonly sl?: string[];

  /**
   * @schema AttributeValue#SDM
   */
  readonly sdm?: { [key: string]: number };

}

/**
 * @schema MatchedPlayerSession
 */
export interface MatchedPlayerSession {
  /**
   * @schema MatchedPlayerSession#PlayerId
   */
  readonly playerId?: string;

  /**
   * @schema MatchedPlayerSession#PlayerSessionId
   */
  readonly playerSessionId?: string;

}
