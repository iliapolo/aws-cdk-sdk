/**
 * @schema GameLiftAcceptMatchInput
 */
export interface GameLiftAcceptMatchInput {
  /**
   * @schema GameLiftAcceptMatchInput#TicketId
   */
  readonly ticketId: string;

  /**
   * @schema GameLiftAcceptMatchInput#PlayerIds
   */
  readonly playerIds: string[];

  /**
   * @schema GameLiftAcceptMatchInput#AcceptanceType
   */
  readonly acceptanceType: string;

}

/**
 * @schema GameLiftAcceptMatchOutput
 */
export interface GameLiftAcceptMatchOutput {
}

/**
 * @schema GameLiftClaimGameServerInput
 */
export interface GameLiftClaimGameServerInput {
  /**
   * @schema GameLiftClaimGameServerInput#GameServerGroupName
   */
  readonly gameServerGroupName: string;

  /**
   * @schema GameLiftClaimGameServerInput#GameServerId
   */
  readonly gameServerId?: string;

  /**
   * @schema GameLiftClaimGameServerInput#GameServerData
   */
  readonly gameServerData?: string;

}

/**
 * @schema GameLiftClaimGameServerOutput
 */
export interface GameLiftClaimGameServerOutput {
  /**
   * @schema GameLiftClaimGameServerOutput#GameServer
   */
  readonly gameServer?: GameLiftGameServer;

}

/**
 * @schema GameLiftCreateAliasInput
 */
export interface GameLiftCreateAliasInput {
  /**
   * @schema GameLiftCreateAliasInput#Name
   */
  readonly name: string;

  /**
   * @schema GameLiftCreateAliasInput#Description
   */
  readonly description?: string;

  /**
   * @schema GameLiftCreateAliasInput#RoutingStrategy
   */
  readonly routingStrategy: GameLiftRoutingStrategy;

  /**
   * @schema GameLiftCreateAliasInput#Tags
   */
  readonly tags?: GameLiftTag[];

}

/**
 * @schema GameLiftCreateAliasOutput
 */
export interface GameLiftCreateAliasOutput {
  /**
   * @schema GameLiftCreateAliasOutput#Alias
   */
  readonly alias?: GameLiftAlias;

}

/**
 * @schema GameLiftCreateBuildInput
 */
export interface GameLiftCreateBuildInput {
  /**
   * @schema GameLiftCreateBuildInput#Name
   */
  readonly name?: string;

  /**
   * @schema GameLiftCreateBuildInput#Version
   */
  readonly version?: string;

  /**
   * @schema GameLiftCreateBuildInput#StorageLocation
   */
  readonly storageLocation?: GameLiftS3Location;

  /**
   * @schema GameLiftCreateBuildInput#OperatingSystem
   */
  readonly operatingSystem?: string;

  /**
   * @schema GameLiftCreateBuildInput#Tags
   */
  readonly tags?: GameLiftTag[];

}

/**
 * @schema GameLiftCreateBuildOutput
 */
export interface GameLiftCreateBuildOutput {
  /**
   * @schema GameLiftCreateBuildOutput#Build
   */
  readonly build?: GameLiftBuild;

  /**
   * @schema GameLiftCreateBuildOutput#UploadCredentials
   */
  readonly uploadCredentials?: GameLiftAwsCredentials;

  /**
   * @schema GameLiftCreateBuildOutput#StorageLocation
   */
  readonly storageLocation?: GameLiftS3Location;

}

/**
 * @schema GameLiftCreateFleetInput
 */
export interface GameLiftCreateFleetInput {
  /**
   * @schema GameLiftCreateFleetInput#Name
   */
  readonly name: string;

  /**
   * @schema GameLiftCreateFleetInput#Description
   */
  readonly description?: string;

  /**
   * @schema GameLiftCreateFleetInput#BuildId
   */
  readonly buildId?: string;

  /**
   * @schema GameLiftCreateFleetInput#ScriptId
   */
  readonly scriptId?: string;

  /**
   * @schema GameLiftCreateFleetInput#ServerLaunchPath
   */
  readonly serverLaunchPath?: string;

  /**
   * @schema GameLiftCreateFleetInput#ServerLaunchParameters
   */
  readonly serverLaunchParameters?: string;

  /**
   * @schema GameLiftCreateFleetInput#LogPaths
   */
  readonly logPaths?: string[];

  /**
   * @schema GameLiftCreateFleetInput#EC2InstanceType
   */
  readonly ec2InstanceType: string;

  /**
   * @schema GameLiftCreateFleetInput#EC2InboundPermissions
   */
  readonly ec2InboundPermissions?: GameLiftIpPermission[];

  /**
   * @schema GameLiftCreateFleetInput#NewGameSessionProtectionPolicy
   */
  readonly newGameSessionProtectionPolicy?: string;

  /**
   * @schema GameLiftCreateFleetInput#RuntimeConfiguration
   */
  readonly runtimeConfiguration?: GameLiftRuntimeConfiguration;

  /**
   * @schema GameLiftCreateFleetInput#ResourceCreationLimitPolicy
   */
  readonly resourceCreationLimitPolicy?: GameLiftResourceCreationLimitPolicy;

  /**
   * @schema GameLiftCreateFleetInput#MetricGroups
   */
  readonly metricGroups?: string[];

  /**
   * @schema GameLiftCreateFleetInput#PeerVpcAwsAccountId
   */
  readonly peerVpcAwsAccountId?: string;

  /**
   * @schema GameLiftCreateFleetInput#PeerVpcId
   */
  readonly peerVpcId?: string;

  /**
   * @schema GameLiftCreateFleetInput#FleetType
   */
  readonly fleetType?: string;

  /**
   * @schema GameLiftCreateFleetInput#InstanceRoleArn
   */
  readonly instanceRoleArn?: string;

  /**
   * @schema GameLiftCreateFleetInput#CertificateConfiguration
   */
  readonly certificateConfiguration?: GameLiftCertificateConfiguration;

  /**
   * @schema GameLiftCreateFleetInput#Tags
   */
  readonly tags?: GameLiftTag[];

}

/**
 * @schema GameLiftCreateFleetOutput
 */
export interface GameLiftCreateFleetOutput {
  /**
   * @schema GameLiftCreateFleetOutput#FleetAttributes
   */
  readonly fleetAttributes?: GameLiftFleetAttributes;

}

/**
 * @schema GameLiftCreateGameServerGroupInput
 */
export interface GameLiftCreateGameServerGroupInput {
  /**
   * @schema GameLiftCreateGameServerGroupInput#GameServerGroupName
   */
  readonly gameServerGroupName: string;

  /**
   * @schema GameLiftCreateGameServerGroupInput#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema GameLiftCreateGameServerGroupInput#MinSize
   */
  readonly minSize: number;

  /**
   * @schema GameLiftCreateGameServerGroupInput#MaxSize
   */
  readonly maxSize: number;

  /**
   * @schema GameLiftCreateGameServerGroupInput#LaunchTemplate
   */
  readonly launchTemplate: GameLiftLaunchTemplateSpecification;

  /**
   * @schema GameLiftCreateGameServerGroupInput#InstanceDefinitions
   */
  readonly instanceDefinitions: GameLiftInstanceDefinition[];

  /**
   * @schema GameLiftCreateGameServerGroupInput#AutoScalingPolicy
   */
  readonly autoScalingPolicy?: GameLiftGameServerGroupAutoScalingPolicy;

  /**
   * @schema GameLiftCreateGameServerGroupInput#BalancingStrategy
   */
  readonly balancingStrategy?: string;

  /**
   * @schema GameLiftCreateGameServerGroupInput#GameServerProtectionPolicy
   */
  readonly gameServerProtectionPolicy?: string;

  /**
   * @schema GameLiftCreateGameServerGroupInput#VpcSubnets
   */
  readonly vpcSubnets?: string[];

  /**
   * @schema GameLiftCreateGameServerGroupInput#Tags
   */
  readonly tags?: GameLiftTag[];

}

/**
 * @schema GameLiftCreateGameServerGroupOutput
 */
export interface GameLiftCreateGameServerGroupOutput {
  /**
   * @schema GameLiftCreateGameServerGroupOutput#GameServerGroup
   */
  readonly gameServerGroup?: GameLiftGameServerGroup;

}

/**
 * @schema GameLiftCreateGameSessionInput
 */
export interface GameLiftCreateGameSessionInput {
  /**
   * @schema GameLiftCreateGameSessionInput#FleetId
   */
  readonly fleetId?: string;

  /**
   * @schema GameLiftCreateGameSessionInput#AliasId
   */
  readonly aliasId?: string;

  /**
   * @schema GameLiftCreateGameSessionInput#MaximumPlayerSessionCount
   */
  readonly maximumPlayerSessionCount: number;

  /**
   * @schema GameLiftCreateGameSessionInput#Name
   */
  readonly name?: string;

  /**
   * @schema GameLiftCreateGameSessionInput#GameProperties
   */
  readonly gameProperties?: GameLiftGameProperty[];

  /**
   * @schema GameLiftCreateGameSessionInput#CreatorId
   */
  readonly creatorId?: string;

  /**
   * @schema GameLiftCreateGameSessionInput#GameSessionId
   */
  readonly gameSessionId?: string;

  /**
   * @schema GameLiftCreateGameSessionInput#IdempotencyToken
   */
  readonly idempotencyToken?: string;

  /**
   * @schema GameLiftCreateGameSessionInput#GameSessionData
   */
  readonly gameSessionData?: string;

}

/**
 * @schema GameLiftCreateGameSessionOutput
 */
export interface GameLiftCreateGameSessionOutput {
  /**
   * @schema GameLiftCreateGameSessionOutput#GameSession
   */
  readonly gameSession?: GameLiftGameSession;

}

/**
 * @schema GameLiftCreateGameSessionQueueInput
 */
export interface GameLiftCreateGameSessionQueueInput {
  /**
   * @schema GameLiftCreateGameSessionQueueInput#Name
   */
  readonly name: string;

  /**
   * @schema GameLiftCreateGameSessionQueueInput#TimeoutInSeconds
   */
  readonly timeoutInSeconds?: number;

  /**
   * @schema GameLiftCreateGameSessionQueueInput#PlayerLatencyPolicies
   */
  readonly playerLatencyPolicies?: GameLiftPlayerLatencyPolicy[];

  /**
   * @schema GameLiftCreateGameSessionQueueInput#Destinations
   */
  readonly destinations?: GameLiftGameSessionQueueDestination[];

  /**
   * @schema GameLiftCreateGameSessionQueueInput#Tags
   */
  readonly tags?: GameLiftTag[];

}

/**
 * @schema GameLiftCreateGameSessionQueueOutput
 */
export interface GameLiftCreateGameSessionQueueOutput {
  /**
   * @schema GameLiftCreateGameSessionQueueOutput#GameSessionQueue
   */
  readonly gameSessionQueue?: GameLiftGameSessionQueue;

}

/**
 * @schema GameLiftCreateMatchmakingConfigurationInput
 */
export interface GameLiftCreateMatchmakingConfigurationInput {
  /**
   * @schema GameLiftCreateMatchmakingConfigurationInput#Name
   */
  readonly name: string;

  /**
   * @schema GameLiftCreateMatchmakingConfigurationInput#Description
   */
  readonly description?: string;

  /**
   * @schema GameLiftCreateMatchmakingConfigurationInput#GameSessionQueueArns
   */
  readonly gameSessionQueueArns?: string[];

  /**
   * @schema GameLiftCreateMatchmakingConfigurationInput#RequestTimeoutSeconds
   */
  readonly requestTimeoutSeconds: number;

  /**
   * @schema GameLiftCreateMatchmakingConfigurationInput#AcceptanceTimeoutSeconds
   */
  readonly acceptanceTimeoutSeconds?: number;

  /**
   * @schema GameLiftCreateMatchmakingConfigurationInput#AcceptanceRequired
   */
  readonly acceptanceRequired: boolean;

  /**
   * @schema GameLiftCreateMatchmakingConfigurationInput#RuleSetName
   */
  readonly ruleSetName: string;

  /**
   * @schema GameLiftCreateMatchmakingConfigurationInput#NotificationTarget
   */
  readonly notificationTarget?: string;

  /**
   * @schema GameLiftCreateMatchmakingConfigurationInput#AdditionalPlayerCount
   */
  readonly additionalPlayerCount?: number;

  /**
   * @schema GameLiftCreateMatchmakingConfigurationInput#CustomEventData
   */
  readonly customEventData?: string;

  /**
   * @schema GameLiftCreateMatchmakingConfigurationInput#GameProperties
   */
  readonly gameProperties?: GameLiftGameProperty[];

  /**
   * @schema GameLiftCreateMatchmakingConfigurationInput#GameSessionData
   */
  readonly gameSessionData?: string;

  /**
   * @schema GameLiftCreateMatchmakingConfigurationInput#BackfillMode
   */
  readonly backfillMode?: string;

  /**
   * @schema GameLiftCreateMatchmakingConfigurationInput#FlexMatchMode
   */
  readonly flexMatchMode?: string;

  /**
   * @schema GameLiftCreateMatchmakingConfigurationInput#Tags
   */
  readonly tags?: GameLiftTag[];

}

/**
 * @schema GameLiftCreateMatchmakingConfigurationOutput
 */
export interface GameLiftCreateMatchmakingConfigurationOutput {
  /**
   * @schema GameLiftCreateMatchmakingConfigurationOutput#Configuration
   */
  readonly configuration?: GameLiftMatchmakingConfiguration;

}

/**
 * @schema GameLiftCreateMatchmakingRuleSetInput
 */
export interface GameLiftCreateMatchmakingRuleSetInput {
  /**
   * @schema GameLiftCreateMatchmakingRuleSetInput#Name
   */
  readonly name: string;

  /**
   * @schema GameLiftCreateMatchmakingRuleSetInput#RuleSetBody
   */
  readonly ruleSetBody: string;

  /**
   * @schema GameLiftCreateMatchmakingRuleSetInput#Tags
   */
  readonly tags?: GameLiftTag[];

}

/**
 * @schema GameLiftCreateMatchmakingRuleSetOutput
 */
export interface GameLiftCreateMatchmakingRuleSetOutput {
  /**
   * @schema GameLiftCreateMatchmakingRuleSetOutput#RuleSet
   */
  readonly ruleSet: GameLiftMatchmakingRuleSet;

}

/**
 * @schema GameLiftCreatePlayerSessionInput
 */
export interface GameLiftCreatePlayerSessionInput {
  /**
   * @schema GameLiftCreatePlayerSessionInput#GameSessionId
   */
  readonly gameSessionId: string;

  /**
   * @schema GameLiftCreatePlayerSessionInput#PlayerId
   */
  readonly playerId: string;

  /**
   * @schema GameLiftCreatePlayerSessionInput#PlayerData
   */
  readonly playerData?: string;

}

/**
 * @schema GameLiftCreatePlayerSessionOutput
 */
export interface GameLiftCreatePlayerSessionOutput {
  /**
   * @schema GameLiftCreatePlayerSessionOutput#PlayerSession
   */
  readonly playerSession?: GameLiftPlayerSession;

}

/**
 * @schema GameLiftCreatePlayerSessionsInput
 */
export interface GameLiftCreatePlayerSessionsInput {
  /**
   * @schema GameLiftCreatePlayerSessionsInput#GameSessionId
   */
  readonly gameSessionId: string;

  /**
   * @schema GameLiftCreatePlayerSessionsInput#PlayerIds
   */
  readonly playerIds: string[];

  /**
   * @schema GameLiftCreatePlayerSessionsInput#PlayerDataMap
   */
  readonly playerDataMap?: { [key: string]: string };

}

/**
 * @schema GameLiftCreatePlayerSessionsOutput
 */
export interface GameLiftCreatePlayerSessionsOutput {
  /**
   * @schema GameLiftCreatePlayerSessionsOutput#PlayerSessions
   */
  readonly playerSessions?: GameLiftPlayerSession[];

}

/**
 * @schema GameLiftCreateScriptInput
 */
export interface GameLiftCreateScriptInput {
  /**
   * @schema GameLiftCreateScriptInput#Name
   */
  readonly name?: string;

  /**
   * @schema GameLiftCreateScriptInput#Version
   */
  readonly version?: string;

  /**
   * @schema GameLiftCreateScriptInput#StorageLocation
   */
  readonly storageLocation?: GameLiftS3Location;

  /**
   * @schema GameLiftCreateScriptInput#ZipFile
   */
  readonly zipFile?: any;

  /**
   * @schema GameLiftCreateScriptInput#Tags
   */
  readonly tags?: GameLiftTag[];

}

/**
 * @schema GameLiftCreateScriptOutput
 */
export interface GameLiftCreateScriptOutput {
  /**
   * @schema GameLiftCreateScriptOutput#Script
   */
  readonly script?: GameLiftScript;

}

/**
 * @schema GameLiftCreateVpcPeeringAuthorizationInput
 */
export interface GameLiftCreateVpcPeeringAuthorizationInput {
  /**
   * @schema GameLiftCreateVpcPeeringAuthorizationInput#GameLiftAwsAccountId
   */
  readonly gameLiftAwsAccountId: string;

  /**
   * @schema GameLiftCreateVpcPeeringAuthorizationInput#PeerVpcId
   */
  readonly peerVpcId: string;

}

/**
 * @schema GameLiftCreateVpcPeeringAuthorizationOutput
 */
export interface GameLiftCreateVpcPeeringAuthorizationOutput {
  /**
   * @schema GameLiftCreateVpcPeeringAuthorizationOutput#VpcPeeringAuthorization
   */
  readonly vpcPeeringAuthorization?: GameLiftVpcPeeringAuthorization;

}

/**
 * @schema GameLiftCreateVpcPeeringConnectionInput
 */
export interface GameLiftCreateVpcPeeringConnectionInput {
  /**
   * @schema GameLiftCreateVpcPeeringConnectionInput#FleetId
   */
  readonly fleetId: string;

  /**
   * @schema GameLiftCreateVpcPeeringConnectionInput#PeerVpcAwsAccountId
   */
  readonly peerVpcAwsAccountId: string;

  /**
   * @schema GameLiftCreateVpcPeeringConnectionInput#PeerVpcId
   */
  readonly peerVpcId: string;

}

/**
 * @schema GameLiftCreateVpcPeeringConnectionOutput
 */
export interface GameLiftCreateVpcPeeringConnectionOutput {
}

/**
 * @schema GameLiftDeleteAliasInput
 */
export interface GameLiftDeleteAliasInput {
  /**
   * @schema GameLiftDeleteAliasInput#AliasId
   */
  readonly aliasId: string;

}

/**
 * @schema GameLiftDeleteBuildInput
 */
export interface GameLiftDeleteBuildInput {
  /**
   * @schema GameLiftDeleteBuildInput#BuildId
   */
  readonly buildId: string;

}

/**
 * @schema GameLiftDeleteFleetInput
 */
export interface GameLiftDeleteFleetInput {
  /**
   * @schema GameLiftDeleteFleetInput#FleetId
   */
  readonly fleetId: string;

}

/**
 * @schema GameLiftDeleteGameServerGroupInput
 */
export interface GameLiftDeleteGameServerGroupInput {
  /**
   * @schema GameLiftDeleteGameServerGroupInput#GameServerGroupName
   */
  readonly gameServerGroupName: string;

  /**
   * @schema GameLiftDeleteGameServerGroupInput#DeleteOption
   */
  readonly deleteOption?: string;

}

/**
 * @schema GameLiftDeleteGameServerGroupOutput
 */
export interface GameLiftDeleteGameServerGroupOutput {
  /**
   * @schema GameLiftDeleteGameServerGroupOutput#GameServerGroup
   */
  readonly gameServerGroup?: GameLiftGameServerGroup;

}

/**
 * @schema GameLiftDeleteGameSessionQueueInput
 */
export interface GameLiftDeleteGameSessionQueueInput {
  /**
   * @schema GameLiftDeleteGameSessionQueueInput#Name
   */
  readonly name: string;

}

/**
 * @schema GameLiftDeleteGameSessionQueueOutput
 */
export interface GameLiftDeleteGameSessionQueueOutput {
}

/**
 * @schema GameLiftDeleteMatchmakingConfigurationInput
 */
export interface GameLiftDeleteMatchmakingConfigurationInput {
  /**
   * @schema GameLiftDeleteMatchmakingConfigurationInput#Name
   */
  readonly name: string;

}

/**
 * @schema GameLiftDeleteMatchmakingConfigurationOutput
 */
export interface GameLiftDeleteMatchmakingConfigurationOutput {
}

/**
 * @schema GameLiftDeleteMatchmakingRuleSetInput
 */
export interface GameLiftDeleteMatchmakingRuleSetInput {
  /**
   * @schema GameLiftDeleteMatchmakingRuleSetInput#Name
   */
  readonly name: string;

}

/**
 * @schema GameLiftDeleteMatchmakingRuleSetOutput
 */
export interface GameLiftDeleteMatchmakingRuleSetOutput {
}

/**
 * @schema GameLiftDeleteScalingPolicyInput
 */
export interface GameLiftDeleteScalingPolicyInput {
  /**
   * @schema GameLiftDeleteScalingPolicyInput#Name
   */
  readonly name: string;

  /**
   * @schema GameLiftDeleteScalingPolicyInput#FleetId
   */
  readonly fleetId: string;

}

/**
 * @schema GameLiftDeleteScriptInput
 */
export interface GameLiftDeleteScriptInput {
  /**
   * @schema GameLiftDeleteScriptInput#ScriptId
   */
  readonly scriptId: string;

}

/**
 * @schema GameLiftDeleteVpcPeeringAuthorizationInput
 */
export interface GameLiftDeleteVpcPeeringAuthorizationInput {
  /**
   * @schema GameLiftDeleteVpcPeeringAuthorizationInput#GameLiftAwsAccountId
   */
  readonly gameLiftAwsAccountId: string;

  /**
   * @schema GameLiftDeleteVpcPeeringAuthorizationInput#PeerVpcId
   */
  readonly peerVpcId: string;

}

/**
 * @schema GameLiftDeleteVpcPeeringAuthorizationOutput
 */
export interface GameLiftDeleteVpcPeeringAuthorizationOutput {
}

/**
 * @schema GameLiftDeleteVpcPeeringConnectionInput
 */
export interface GameLiftDeleteVpcPeeringConnectionInput {
  /**
   * @schema GameLiftDeleteVpcPeeringConnectionInput#FleetId
   */
  readonly fleetId: string;

  /**
   * @schema GameLiftDeleteVpcPeeringConnectionInput#VpcPeeringConnectionId
   */
  readonly vpcPeeringConnectionId: string;

}

/**
 * @schema GameLiftDeleteVpcPeeringConnectionOutput
 */
export interface GameLiftDeleteVpcPeeringConnectionOutput {
}

/**
 * @schema GameLiftDeregisterGameServerInput
 */
export interface GameLiftDeregisterGameServerInput {
  /**
   * @schema GameLiftDeregisterGameServerInput#GameServerGroupName
   */
  readonly gameServerGroupName: string;

  /**
   * @schema GameLiftDeregisterGameServerInput#GameServerId
   */
  readonly gameServerId: string;

}

/**
 * @schema GameLiftDescribeAliasInput
 */
export interface GameLiftDescribeAliasInput {
  /**
   * @schema GameLiftDescribeAliasInput#AliasId
   */
  readonly aliasId: string;

}

/**
 * @schema GameLiftDescribeAliasOutput
 */
export interface GameLiftDescribeAliasOutput {
  /**
   * @schema GameLiftDescribeAliasOutput#Alias
   */
  readonly alias?: GameLiftAlias;

}

/**
 * @schema GameLiftDescribeBuildInput
 */
export interface GameLiftDescribeBuildInput {
  /**
   * @schema GameLiftDescribeBuildInput#BuildId
   */
  readonly buildId: string;

}

/**
 * @schema GameLiftDescribeBuildOutput
 */
export interface GameLiftDescribeBuildOutput {
  /**
   * @schema GameLiftDescribeBuildOutput#Build
   */
  readonly build?: GameLiftBuild;

}

/**
 * @schema GameLiftDescribeEc2InstanceLimitsInput
 */
export interface GameLiftDescribeEc2InstanceLimitsInput {
  /**
   * @schema GameLiftDescribeEc2InstanceLimitsInput#EC2InstanceType
   */
  readonly ec2InstanceType?: string;

}

/**
 * @schema GameLiftDescribeEc2InstanceLimitsOutput
 */
export interface GameLiftDescribeEc2InstanceLimitsOutput {
  /**
   * @schema GameLiftDescribeEc2InstanceLimitsOutput#EC2InstanceLimits
   */
  readonly ec2InstanceLimits?: GameLiftEc2InstanceLimit[];

}

/**
 * @schema GameLiftDescribeFleetAttributesInput
 */
export interface GameLiftDescribeFleetAttributesInput {
  /**
   * @schema GameLiftDescribeFleetAttributesInput#FleetIds
   */
  readonly fleetIds?: string[];

  /**
   * @schema GameLiftDescribeFleetAttributesInput#Limit
   */
  readonly limit?: number;

  /**
   * @schema GameLiftDescribeFleetAttributesInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GameLiftDescribeFleetAttributesOutput
 */
export interface GameLiftDescribeFleetAttributesOutput {
  /**
   * @schema GameLiftDescribeFleetAttributesOutput#FleetAttributes
   */
  readonly fleetAttributes?: GameLiftFleetAttributes[];

  /**
   * @schema GameLiftDescribeFleetAttributesOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GameLiftDescribeFleetCapacityInput
 */
export interface GameLiftDescribeFleetCapacityInput {
  /**
   * @schema GameLiftDescribeFleetCapacityInput#FleetIds
   */
  readonly fleetIds?: string[];

  /**
   * @schema GameLiftDescribeFleetCapacityInput#Limit
   */
  readonly limit?: number;

  /**
   * @schema GameLiftDescribeFleetCapacityInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GameLiftDescribeFleetCapacityOutput
 */
export interface GameLiftDescribeFleetCapacityOutput {
  /**
   * @schema GameLiftDescribeFleetCapacityOutput#FleetCapacity
   */
  readonly fleetCapacity?: GameLiftFleetCapacity[];

  /**
   * @schema GameLiftDescribeFleetCapacityOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GameLiftDescribeFleetEventsInput
 */
export interface GameLiftDescribeFleetEventsInput {
  /**
   * @schema GameLiftDescribeFleetEventsInput#FleetId
   */
  readonly fleetId: string;

  /**
   * @schema GameLiftDescribeFleetEventsInput#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema GameLiftDescribeFleetEventsInput#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema GameLiftDescribeFleetEventsInput#Limit
   */
  readonly limit?: number;

  /**
   * @schema GameLiftDescribeFleetEventsInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GameLiftDescribeFleetEventsOutput
 */
export interface GameLiftDescribeFleetEventsOutput {
  /**
   * @schema GameLiftDescribeFleetEventsOutput#Events
   */
  readonly events?: GameLiftEvent[];

  /**
   * @schema GameLiftDescribeFleetEventsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GameLiftDescribeFleetPortSettingsInput
 */
export interface GameLiftDescribeFleetPortSettingsInput {
  /**
   * @schema GameLiftDescribeFleetPortSettingsInput#FleetId
   */
  readonly fleetId: string;

}

/**
 * @schema GameLiftDescribeFleetPortSettingsOutput
 */
export interface GameLiftDescribeFleetPortSettingsOutput {
  /**
   * @schema GameLiftDescribeFleetPortSettingsOutput#InboundPermissions
   */
  readonly inboundPermissions?: GameLiftIpPermission[];

}

/**
 * @schema GameLiftDescribeFleetUtilizationInput
 */
export interface GameLiftDescribeFleetUtilizationInput {
  /**
   * @schema GameLiftDescribeFleetUtilizationInput#FleetIds
   */
  readonly fleetIds?: string[];

  /**
   * @schema GameLiftDescribeFleetUtilizationInput#Limit
   */
  readonly limit?: number;

  /**
   * @schema GameLiftDescribeFleetUtilizationInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GameLiftDescribeFleetUtilizationOutput
 */
export interface GameLiftDescribeFleetUtilizationOutput {
  /**
   * @schema GameLiftDescribeFleetUtilizationOutput#FleetUtilization
   */
  readonly fleetUtilization?: GameLiftFleetUtilization[];

  /**
   * @schema GameLiftDescribeFleetUtilizationOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GameLiftDescribeGameServerInput
 */
export interface GameLiftDescribeGameServerInput {
  /**
   * @schema GameLiftDescribeGameServerInput#GameServerGroupName
   */
  readonly gameServerGroupName: string;

  /**
   * @schema GameLiftDescribeGameServerInput#GameServerId
   */
  readonly gameServerId: string;

}

/**
 * @schema GameLiftDescribeGameServerOutput
 */
export interface GameLiftDescribeGameServerOutput {
  /**
   * @schema GameLiftDescribeGameServerOutput#GameServer
   */
  readonly gameServer?: GameLiftGameServer;

}

/**
 * @schema GameLiftDescribeGameServerGroupInput
 */
export interface GameLiftDescribeGameServerGroupInput {
  /**
   * @schema GameLiftDescribeGameServerGroupInput#GameServerGroupName
   */
  readonly gameServerGroupName: string;

}

/**
 * @schema GameLiftDescribeGameServerGroupOutput
 */
export interface GameLiftDescribeGameServerGroupOutput {
  /**
   * @schema GameLiftDescribeGameServerGroupOutput#GameServerGroup
   */
  readonly gameServerGroup?: GameLiftGameServerGroup;

}

/**
 * @schema GameLiftDescribeGameServerInstancesInput
 */
export interface GameLiftDescribeGameServerInstancesInput {
  /**
   * @schema GameLiftDescribeGameServerInstancesInput#GameServerGroupName
   */
  readonly gameServerGroupName: string;

  /**
   * @schema GameLiftDescribeGameServerInstancesInput#InstanceIds
   */
  readonly instanceIds?: string[];

  /**
   * @schema GameLiftDescribeGameServerInstancesInput#Limit
   */
  readonly limit?: number;

  /**
   * @schema GameLiftDescribeGameServerInstancesInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GameLiftDescribeGameServerInstancesOutput
 */
export interface GameLiftDescribeGameServerInstancesOutput {
  /**
   * @schema GameLiftDescribeGameServerInstancesOutput#GameServerInstances
   */
  readonly gameServerInstances?: GameLiftGameServerInstance[];

  /**
   * @schema GameLiftDescribeGameServerInstancesOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GameLiftDescribeGameSessionDetailsInput
 */
export interface GameLiftDescribeGameSessionDetailsInput {
  /**
   * @schema GameLiftDescribeGameSessionDetailsInput#FleetId
   */
  readonly fleetId?: string;

  /**
   * @schema GameLiftDescribeGameSessionDetailsInput#GameSessionId
   */
  readonly gameSessionId?: string;

  /**
   * @schema GameLiftDescribeGameSessionDetailsInput#AliasId
   */
  readonly aliasId?: string;

  /**
   * @schema GameLiftDescribeGameSessionDetailsInput#StatusFilter
   */
  readonly statusFilter?: string;

  /**
   * @schema GameLiftDescribeGameSessionDetailsInput#Limit
   */
  readonly limit?: number;

  /**
   * @schema GameLiftDescribeGameSessionDetailsInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GameLiftDescribeGameSessionDetailsOutput
 */
export interface GameLiftDescribeGameSessionDetailsOutput {
  /**
   * @schema GameLiftDescribeGameSessionDetailsOutput#GameSessionDetails
   */
  readonly gameSessionDetails?: GameLiftGameSessionDetail[];

  /**
   * @schema GameLiftDescribeGameSessionDetailsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GameLiftDescribeGameSessionPlacementInput
 */
export interface GameLiftDescribeGameSessionPlacementInput {
  /**
   * @schema GameLiftDescribeGameSessionPlacementInput#PlacementId
   */
  readonly placementId: string;

}

/**
 * @schema GameLiftDescribeGameSessionPlacementOutput
 */
export interface GameLiftDescribeGameSessionPlacementOutput {
  /**
   * @schema GameLiftDescribeGameSessionPlacementOutput#GameSessionPlacement
   */
  readonly gameSessionPlacement?: GameLiftGameSessionPlacement;

}

/**
 * @schema GameLiftDescribeGameSessionQueuesInput
 */
export interface GameLiftDescribeGameSessionQueuesInput {
  /**
   * @schema GameLiftDescribeGameSessionQueuesInput#Names
   */
  readonly names?: string[];

  /**
   * @schema GameLiftDescribeGameSessionQueuesInput#Limit
   */
  readonly limit?: number;

  /**
   * @schema GameLiftDescribeGameSessionQueuesInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GameLiftDescribeGameSessionQueuesOutput
 */
export interface GameLiftDescribeGameSessionQueuesOutput {
  /**
   * @schema GameLiftDescribeGameSessionQueuesOutput#GameSessionQueues
   */
  readonly gameSessionQueues?: GameLiftGameSessionQueue[];

  /**
   * @schema GameLiftDescribeGameSessionQueuesOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GameLiftDescribeGameSessionsInput
 */
export interface GameLiftDescribeGameSessionsInput {
  /**
   * @schema GameLiftDescribeGameSessionsInput#FleetId
   */
  readonly fleetId?: string;

  /**
   * @schema GameLiftDescribeGameSessionsInput#GameSessionId
   */
  readonly gameSessionId?: string;

  /**
   * @schema GameLiftDescribeGameSessionsInput#AliasId
   */
  readonly aliasId?: string;

  /**
   * @schema GameLiftDescribeGameSessionsInput#StatusFilter
   */
  readonly statusFilter?: string;

  /**
   * @schema GameLiftDescribeGameSessionsInput#Limit
   */
  readonly limit?: number;

  /**
   * @schema GameLiftDescribeGameSessionsInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GameLiftDescribeGameSessionsOutput
 */
export interface GameLiftDescribeGameSessionsOutput {
  /**
   * @schema GameLiftDescribeGameSessionsOutput#GameSessions
   */
  readonly gameSessions?: GameLiftGameSession[];

  /**
   * @schema GameLiftDescribeGameSessionsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GameLiftDescribeInstancesInput
 */
export interface GameLiftDescribeInstancesInput {
  /**
   * @schema GameLiftDescribeInstancesInput#FleetId
   */
  readonly fleetId: string;

  /**
   * @schema GameLiftDescribeInstancesInput#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema GameLiftDescribeInstancesInput#Limit
   */
  readonly limit?: number;

  /**
   * @schema GameLiftDescribeInstancesInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GameLiftDescribeInstancesOutput
 */
export interface GameLiftDescribeInstancesOutput {
  /**
   * @schema GameLiftDescribeInstancesOutput#Instances
   */
  readonly instances?: GameLiftInstance[];

  /**
   * @schema GameLiftDescribeInstancesOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GameLiftDescribeMatchmakingInput
 */
export interface GameLiftDescribeMatchmakingInput {
  /**
   * @schema GameLiftDescribeMatchmakingInput#TicketIds
   */
  readonly ticketIds: string[];

}

/**
 * @schema GameLiftDescribeMatchmakingOutput
 */
export interface GameLiftDescribeMatchmakingOutput {
  /**
   * @schema GameLiftDescribeMatchmakingOutput#TicketList
   */
  readonly ticketList?: GameLiftMatchmakingTicket[];

}

/**
 * @schema GameLiftDescribeMatchmakingConfigurationsInput
 */
export interface GameLiftDescribeMatchmakingConfigurationsInput {
  /**
   * @schema GameLiftDescribeMatchmakingConfigurationsInput#Names
   */
  readonly names?: string[];

  /**
   * @schema GameLiftDescribeMatchmakingConfigurationsInput#RuleSetName
   */
  readonly ruleSetName?: string;

  /**
   * @schema GameLiftDescribeMatchmakingConfigurationsInput#Limit
   */
  readonly limit?: number;

  /**
   * @schema GameLiftDescribeMatchmakingConfigurationsInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GameLiftDescribeMatchmakingConfigurationsOutput
 */
export interface GameLiftDescribeMatchmakingConfigurationsOutput {
  /**
   * @schema GameLiftDescribeMatchmakingConfigurationsOutput#Configurations
   */
  readonly configurations?: GameLiftMatchmakingConfiguration[];

  /**
   * @schema GameLiftDescribeMatchmakingConfigurationsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GameLiftDescribeMatchmakingRuleSetsInput
 */
export interface GameLiftDescribeMatchmakingRuleSetsInput {
  /**
   * @schema GameLiftDescribeMatchmakingRuleSetsInput#Names
   */
  readonly names?: string[];

  /**
   * @schema GameLiftDescribeMatchmakingRuleSetsInput#Limit
   */
  readonly limit?: number;

  /**
   * @schema GameLiftDescribeMatchmakingRuleSetsInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GameLiftDescribeMatchmakingRuleSetsOutput
 */
export interface GameLiftDescribeMatchmakingRuleSetsOutput {
  /**
   * @schema GameLiftDescribeMatchmakingRuleSetsOutput#RuleSets
   */
  readonly ruleSets: GameLiftMatchmakingRuleSet[];

  /**
   * @schema GameLiftDescribeMatchmakingRuleSetsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GameLiftDescribePlayerSessionsInput
 */
export interface GameLiftDescribePlayerSessionsInput {
  /**
   * @schema GameLiftDescribePlayerSessionsInput#GameSessionId
   */
  readonly gameSessionId?: string;

  /**
   * @schema GameLiftDescribePlayerSessionsInput#PlayerId
   */
  readonly playerId?: string;

  /**
   * @schema GameLiftDescribePlayerSessionsInput#PlayerSessionId
   */
  readonly playerSessionId?: string;

  /**
   * @schema GameLiftDescribePlayerSessionsInput#PlayerSessionStatusFilter
   */
  readonly playerSessionStatusFilter?: string;

  /**
   * @schema GameLiftDescribePlayerSessionsInput#Limit
   */
  readonly limit?: number;

  /**
   * @schema GameLiftDescribePlayerSessionsInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GameLiftDescribePlayerSessionsOutput
 */
export interface GameLiftDescribePlayerSessionsOutput {
  /**
   * @schema GameLiftDescribePlayerSessionsOutput#PlayerSessions
   */
  readonly playerSessions?: GameLiftPlayerSession[];

  /**
   * @schema GameLiftDescribePlayerSessionsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GameLiftDescribeRuntimeConfigurationInput
 */
export interface GameLiftDescribeRuntimeConfigurationInput {
  /**
   * @schema GameLiftDescribeRuntimeConfigurationInput#FleetId
   */
  readonly fleetId: string;

}

/**
 * @schema GameLiftDescribeRuntimeConfigurationOutput
 */
export interface GameLiftDescribeRuntimeConfigurationOutput {
  /**
   * @schema GameLiftDescribeRuntimeConfigurationOutput#RuntimeConfiguration
   */
  readonly runtimeConfiguration?: GameLiftRuntimeConfiguration;

}

/**
 * @schema GameLiftDescribeScalingPoliciesInput
 */
export interface GameLiftDescribeScalingPoliciesInput {
  /**
   * @schema GameLiftDescribeScalingPoliciesInput#FleetId
   */
  readonly fleetId: string;

  /**
   * @schema GameLiftDescribeScalingPoliciesInput#StatusFilter
   */
  readonly statusFilter?: string;

  /**
   * @schema GameLiftDescribeScalingPoliciesInput#Limit
   */
  readonly limit?: number;

  /**
   * @schema GameLiftDescribeScalingPoliciesInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GameLiftDescribeScalingPoliciesOutput
 */
export interface GameLiftDescribeScalingPoliciesOutput {
  /**
   * @schema GameLiftDescribeScalingPoliciesOutput#ScalingPolicies
   */
  readonly scalingPolicies?: GameLiftScalingPolicy[];

  /**
   * @schema GameLiftDescribeScalingPoliciesOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GameLiftDescribeScriptInput
 */
export interface GameLiftDescribeScriptInput {
  /**
   * @schema GameLiftDescribeScriptInput#ScriptId
   */
  readonly scriptId: string;

}

/**
 * @schema GameLiftDescribeScriptOutput
 */
export interface GameLiftDescribeScriptOutput {
  /**
   * @schema GameLiftDescribeScriptOutput#Script
   */
  readonly script?: GameLiftScript;

}

/**
 * @schema GameLiftDescribeVpcPeeringAuthorizationsInput
 */
export interface GameLiftDescribeVpcPeeringAuthorizationsInput {
}

/**
 * @schema GameLiftDescribeVpcPeeringAuthorizationsOutput
 */
export interface GameLiftDescribeVpcPeeringAuthorizationsOutput {
  /**
   * @schema GameLiftDescribeVpcPeeringAuthorizationsOutput#VpcPeeringAuthorizations
   */
  readonly vpcPeeringAuthorizations?: GameLiftVpcPeeringAuthorization[];

}

/**
 * @schema GameLiftDescribeVpcPeeringConnectionsInput
 */
export interface GameLiftDescribeVpcPeeringConnectionsInput {
  /**
   * @schema GameLiftDescribeVpcPeeringConnectionsInput#FleetId
   */
  readonly fleetId?: string;

}

/**
 * @schema GameLiftDescribeVpcPeeringConnectionsOutput
 */
export interface GameLiftDescribeVpcPeeringConnectionsOutput {
  /**
   * @schema GameLiftDescribeVpcPeeringConnectionsOutput#VpcPeeringConnections
   */
  readonly vpcPeeringConnections?: GameLiftVpcPeeringConnection[];

}

/**
 * @schema GameLiftGetGameSessionLogUrlInput
 */
export interface GameLiftGetGameSessionLogUrlInput {
  /**
   * @schema GameLiftGetGameSessionLogUrlInput#GameSessionId
   */
  readonly gameSessionId: string;

}

/**
 * @schema GameLiftGetGameSessionLogUrlOutput
 */
export interface GameLiftGetGameSessionLogUrlOutput {
  /**
   * @schema GameLiftGetGameSessionLogUrlOutput#PreSignedUrl
   */
  readonly preSignedUrl?: string;

}

/**
 * @schema GameLiftGetInstanceAccessInput
 */
export interface GameLiftGetInstanceAccessInput {
  /**
   * @schema GameLiftGetInstanceAccessInput#FleetId
   */
  readonly fleetId: string;

  /**
   * @schema GameLiftGetInstanceAccessInput#InstanceId
   */
  readonly instanceId: string;

}

/**
 * @schema GameLiftGetInstanceAccessOutput
 */
export interface GameLiftGetInstanceAccessOutput {
  /**
   * @schema GameLiftGetInstanceAccessOutput#InstanceAccess
   */
  readonly instanceAccess?: GameLiftInstanceAccess;

}

/**
 * @schema GameLiftListAliasesInput
 */
export interface GameLiftListAliasesInput {
  /**
   * @schema GameLiftListAliasesInput#RoutingStrategyType
   */
  readonly routingStrategyType?: string;

  /**
   * @schema GameLiftListAliasesInput#Name
   */
  readonly name?: string;

  /**
   * @schema GameLiftListAliasesInput#Limit
   */
  readonly limit?: number;

  /**
   * @schema GameLiftListAliasesInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GameLiftListAliasesOutput
 */
export interface GameLiftListAliasesOutput {
  /**
   * @schema GameLiftListAliasesOutput#Aliases
   */
  readonly aliases?: GameLiftAlias[];

  /**
   * @schema GameLiftListAliasesOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GameLiftListBuildsInput
 */
export interface GameLiftListBuildsInput {
  /**
   * @schema GameLiftListBuildsInput#Status
   */
  readonly status?: string;

  /**
   * @schema GameLiftListBuildsInput#Limit
   */
  readonly limit?: number;

  /**
   * @schema GameLiftListBuildsInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GameLiftListBuildsOutput
 */
export interface GameLiftListBuildsOutput {
  /**
   * @schema GameLiftListBuildsOutput#Builds
   */
  readonly builds?: GameLiftBuild[];

  /**
   * @schema GameLiftListBuildsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GameLiftListFleetsInput
 */
export interface GameLiftListFleetsInput {
  /**
   * @schema GameLiftListFleetsInput#BuildId
   */
  readonly buildId?: string;

  /**
   * @schema GameLiftListFleetsInput#ScriptId
   */
  readonly scriptId?: string;

  /**
   * @schema GameLiftListFleetsInput#Limit
   */
  readonly limit?: number;

  /**
   * @schema GameLiftListFleetsInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GameLiftListFleetsOutput
 */
export interface GameLiftListFleetsOutput {
  /**
   * @schema GameLiftListFleetsOutput#FleetIds
   */
  readonly fleetIds?: string[];

  /**
   * @schema GameLiftListFleetsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GameLiftListGameServerGroupsInput
 */
export interface GameLiftListGameServerGroupsInput {
  /**
   * @schema GameLiftListGameServerGroupsInput#Limit
   */
  readonly limit?: number;

  /**
   * @schema GameLiftListGameServerGroupsInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GameLiftListGameServerGroupsOutput
 */
export interface GameLiftListGameServerGroupsOutput {
  /**
   * @schema GameLiftListGameServerGroupsOutput#GameServerGroups
   */
  readonly gameServerGroups?: GameLiftGameServerGroup[];

  /**
   * @schema GameLiftListGameServerGroupsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GameLiftListGameServersInput
 */
export interface GameLiftListGameServersInput {
  /**
   * @schema GameLiftListGameServersInput#GameServerGroupName
   */
  readonly gameServerGroupName: string;

  /**
   * @schema GameLiftListGameServersInput#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema GameLiftListGameServersInput#Limit
   */
  readonly limit?: number;

  /**
   * @schema GameLiftListGameServersInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GameLiftListGameServersOutput
 */
export interface GameLiftListGameServersOutput {
  /**
   * @schema GameLiftListGameServersOutput#GameServers
   */
  readonly gameServers?: GameLiftGameServer[];

  /**
   * @schema GameLiftListGameServersOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GameLiftListScriptsInput
 */
export interface GameLiftListScriptsInput {
  /**
   * @schema GameLiftListScriptsInput#Limit
   */
  readonly limit?: number;

  /**
   * @schema GameLiftListScriptsInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GameLiftListScriptsOutput
 */
export interface GameLiftListScriptsOutput {
  /**
   * @schema GameLiftListScriptsOutput#Scripts
   */
  readonly scripts?: GameLiftScript[];

  /**
   * @schema GameLiftListScriptsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GameLiftListTagsForResourceRequest
 */
export interface GameLiftListTagsForResourceRequest {
  /**
   * @schema GameLiftListTagsForResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

}

/**
 * @schema GameLiftListTagsForResourceResponse
 */
export interface GameLiftListTagsForResourceResponse {
  /**
   * @schema GameLiftListTagsForResourceResponse#Tags
   */
  readonly tags?: GameLiftTag[];

}

/**
 * @schema GameLiftPutScalingPolicyInput
 */
export interface GameLiftPutScalingPolicyInput {
  /**
   * @schema GameLiftPutScalingPolicyInput#Name
   */
  readonly name: string;

  /**
   * @schema GameLiftPutScalingPolicyInput#FleetId
   */
  readonly fleetId: string;

  /**
   * @schema GameLiftPutScalingPolicyInput#ScalingAdjustment
   */
  readonly scalingAdjustment?: number;

  /**
   * @schema GameLiftPutScalingPolicyInput#ScalingAdjustmentType
   */
  readonly scalingAdjustmentType?: string;

  /**
   * @schema GameLiftPutScalingPolicyInput#Threshold
   */
  readonly threshold?: number;

  /**
   * @schema GameLiftPutScalingPolicyInput#ComparisonOperator
   */
  readonly comparisonOperator?: string;

  /**
   * @schema GameLiftPutScalingPolicyInput#EvaluationPeriods
   */
  readonly evaluationPeriods?: number;

  /**
   * @schema GameLiftPutScalingPolicyInput#MetricName
   */
  readonly metricName: string;

  /**
   * @schema GameLiftPutScalingPolicyInput#PolicyType
   */
  readonly policyType?: string;

  /**
   * @schema GameLiftPutScalingPolicyInput#TargetConfiguration
   */
  readonly targetConfiguration?: GameLiftTargetConfiguration;

}

/**
 * @schema GameLiftPutScalingPolicyOutput
 */
export interface GameLiftPutScalingPolicyOutput {
  /**
   * @schema GameLiftPutScalingPolicyOutput#Name
   */
  readonly name?: string;

}

/**
 * @schema GameLiftRegisterGameServerInput
 */
export interface GameLiftRegisterGameServerInput {
  /**
   * @schema GameLiftRegisterGameServerInput#GameServerGroupName
   */
  readonly gameServerGroupName: string;

  /**
   * @schema GameLiftRegisterGameServerInput#GameServerId
   */
  readonly gameServerId: string;

  /**
   * @schema GameLiftRegisterGameServerInput#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema GameLiftRegisterGameServerInput#ConnectionInfo
   */
  readonly connectionInfo?: string;

  /**
   * @schema GameLiftRegisterGameServerInput#GameServerData
   */
  readonly gameServerData?: string;

}

/**
 * @schema GameLiftRegisterGameServerOutput
 */
export interface GameLiftRegisterGameServerOutput {
  /**
   * @schema GameLiftRegisterGameServerOutput#GameServer
   */
  readonly gameServer?: GameLiftGameServer;

}

/**
 * @schema GameLiftRequestUploadCredentialsInput
 */
export interface GameLiftRequestUploadCredentialsInput {
  /**
   * @schema GameLiftRequestUploadCredentialsInput#BuildId
   */
  readonly buildId: string;

}

/**
 * @schema GameLiftRequestUploadCredentialsOutput
 */
export interface GameLiftRequestUploadCredentialsOutput {
  /**
   * @schema GameLiftRequestUploadCredentialsOutput#UploadCredentials
   */
  readonly uploadCredentials?: GameLiftAwsCredentials;

  /**
   * @schema GameLiftRequestUploadCredentialsOutput#StorageLocation
   */
  readonly storageLocation?: GameLiftS3Location;

}

/**
 * @schema GameLiftResolveAliasInput
 */
export interface GameLiftResolveAliasInput {
  /**
   * @schema GameLiftResolveAliasInput#AliasId
   */
  readonly aliasId: string;

}

/**
 * @schema GameLiftResolveAliasOutput
 */
export interface GameLiftResolveAliasOutput {
  /**
   * @schema GameLiftResolveAliasOutput#FleetId
   */
  readonly fleetId?: string;

  /**
   * @schema GameLiftResolveAliasOutput#FleetArn
   */
  readonly fleetArn?: string;

}

/**
 * @schema GameLiftResumeGameServerGroupInput
 */
export interface GameLiftResumeGameServerGroupInput {
  /**
   * @schema GameLiftResumeGameServerGroupInput#GameServerGroupName
   */
  readonly gameServerGroupName: string;

  /**
   * @schema GameLiftResumeGameServerGroupInput#ResumeActions
   */
  readonly resumeActions: string[];

}

/**
 * @schema GameLiftResumeGameServerGroupOutput
 */
export interface GameLiftResumeGameServerGroupOutput {
  /**
   * @schema GameLiftResumeGameServerGroupOutput#GameServerGroup
   */
  readonly gameServerGroup?: GameLiftGameServerGroup;

}

/**
 * @schema GameLiftSearchGameSessionsInput
 */
export interface GameLiftSearchGameSessionsInput {
  /**
   * @schema GameLiftSearchGameSessionsInput#FleetId
   */
  readonly fleetId?: string;

  /**
   * @schema GameLiftSearchGameSessionsInput#AliasId
   */
  readonly aliasId?: string;

  /**
   * @schema GameLiftSearchGameSessionsInput#FilterExpression
   */
  readonly filterExpression?: string;

  /**
   * @schema GameLiftSearchGameSessionsInput#SortExpression
   */
  readonly sortExpression?: string;

  /**
   * @schema GameLiftSearchGameSessionsInput#Limit
   */
  readonly limit?: number;

  /**
   * @schema GameLiftSearchGameSessionsInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GameLiftSearchGameSessionsOutput
 */
export interface GameLiftSearchGameSessionsOutput {
  /**
   * @schema GameLiftSearchGameSessionsOutput#GameSessions
   */
  readonly gameSessions?: GameLiftGameSession[];

  /**
   * @schema GameLiftSearchGameSessionsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GameLiftStartFleetActionsInput
 */
export interface GameLiftStartFleetActionsInput {
  /**
   * @schema GameLiftStartFleetActionsInput#FleetId
   */
  readonly fleetId: string;

  /**
   * @schema GameLiftStartFleetActionsInput#Actions
   */
  readonly actions: string[];

}

/**
 * @schema GameLiftStartFleetActionsOutput
 */
export interface GameLiftStartFleetActionsOutput {
}

/**
 * @schema GameLiftStartGameSessionPlacementInput
 */
export interface GameLiftStartGameSessionPlacementInput {
  /**
   * @schema GameLiftStartGameSessionPlacementInput#PlacementId
   */
  readonly placementId: string;

  /**
   * @schema GameLiftStartGameSessionPlacementInput#GameSessionQueueName
   */
  readonly gameSessionQueueName: string;

  /**
   * @schema GameLiftStartGameSessionPlacementInput#GameProperties
   */
  readonly gameProperties?: GameLiftGameProperty[];

  /**
   * @schema GameLiftStartGameSessionPlacementInput#MaximumPlayerSessionCount
   */
  readonly maximumPlayerSessionCount: number;

  /**
   * @schema GameLiftStartGameSessionPlacementInput#GameSessionName
   */
  readonly gameSessionName?: string;

  /**
   * @schema GameLiftStartGameSessionPlacementInput#PlayerLatencies
   */
  readonly playerLatencies?: GameLiftPlayerLatency[];

  /**
   * @schema GameLiftStartGameSessionPlacementInput#DesiredPlayerSessions
   */
  readonly desiredPlayerSessions?: GameLiftDesiredPlayerSession[];

  /**
   * @schema GameLiftStartGameSessionPlacementInput#GameSessionData
   */
  readonly gameSessionData?: string;

}

/**
 * @schema GameLiftStartGameSessionPlacementOutput
 */
export interface GameLiftStartGameSessionPlacementOutput {
  /**
   * @schema GameLiftStartGameSessionPlacementOutput#GameSessionPlacement
   */
  readonly gameSessionPlacement?: GameLiftGameSessionPlacement;

}

/**
 * @schema GameLiftStartMatchBackfillInput
 */
export interface GameLiftStartMatchBackfillInput {
  /**
   * @schema GameLiftStartMatchBackfillInput#TicketId
   */
  readonly ticketId?: string;

  /**
   * @schema GameLiftStartMatchBackfillInput#ConfigurationName
   */
  readonly configurationName: string;

  /**
   * @schema GameLiftStartMatchBackfillInput#GameSessionArn
   */
  readonly gameSessionArn?: string;

  /**
   * @schema GameLiftStartMatchBackfillInput#Players
   */
  readonly players: GameLiftPlayer[];

}

/**
 * @schema GameLiftStartMatchBackfillOutput
 */
export interface GameLiftStartMatchBackfillOutput {
  /**
   * @schema GameLiftStartMatchBackfillOutput#MatchmakingTicket
   */
  readonly matchmakingTicket?: GameLiftMatchmakingTicket;

}

/**
 * @schema GameLiftStartMatchmakingInput
 */
export interface GameLiftStartMatchmakingInput {
  /**
   * @schema GameLiftStartMatchmakingInput#TicketId
   */
  readonly ticketId?: string;

  /**
   * @schema GameLiftStartMatchmakingInput#ConfigurationName
   */
  readonly configurationName: string;

  /**
   * @schema GameLiftStartMatchmakingInput#Players
   */
  readonly players: GameLiftPlayer[];

}

/**
 * @schema GameLiftStartMatchmakingOutput
 */
export interface GameLiftStartMatchmakingOutput {
  /**
   * @schema GameLiftStartMatchmakingOutput#MatchmakingTicket
   */
  readonly matchmakingTicket?: GameLiftMatchmakingTicket;

}

/**
 * @schema GameLiftStopFleetActionsInput
 */
export interface GameLiftStopFleetActionsInput {
  /**
   * @schema GameLiftStopFleetActionsInput#FleetId
   */
  readonly fleetId: string;

  /**
   * @schema GameLiftStopFleetActionsInput#Actions
   */
  readonly actions: string[];

}

/**
 * @schema GameLiftStopFleetActionsOutput
 */
export interface GameLiftStopFleetActionsOutput {
}

/**
 * @schema GameLiftStopGameSessionPlacementInput
 */
export interface GameLiftStopGameSessionPlacementInput {
  /**
   * @schema GameLiftStopGameSessionPlacementInput#PlacementId
   */
  readonly placementId: string;

}

/**
 * @schema GameLiftStopGameSessionPlacementOutput
 */
export interface GameLiftStopGameSessionPlacementOutput {
  /**
   * @schema GameLiftStopGameSessionPlacementOutput#GameSessionPlacement
   */
  readonly gameSessionPlacement?: GameLiftGameSessionPlacement;

}

/**
 * @schema GameLiftStopMatchmakingInput
 */
export interface GameLiftStopMatchmakingInput {
  /**
   * @schema GameLiftStopMatchmakingInput#TicketId
   */
  readonly ticketId: string;

}

/**
 * @schema GameLiftStopMatchmakingOutput
 */
export interface GameLiftStopMatchmakingOutput {
}

/**
 * @schema GameLiftSuspendGameServerGroupInput
 */
export interface GameLiftSuspendGameServerGroupInput {
  /**
   * @schema GameLiftSuspendGameServerGroupInput#GameServerGroupName
   */
  readonly gameServerGroupName: string;

  /**
   * @schema GameLiftSuspendGameServerGroupInput#SuspendActions
   */
  readonly suspendActions: string[];

}

/**
 * @schema GameLiftSuspendGameServerGroupOutput
 */
export interface GameLiftSuspendGameServerGroupOutput {
  /**
   * @schema GameLiftSuspendGameServerGroupOutput#GameServerGroup
   */
  readonly gameServerGroup?: GameLiftGameServerGroup;

}

/**
 * @schema GameLiftTagResourceRequest
 */
export interface GameLiftTagResourceRequest {
  /**
   * @schema GameLiftTagResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema GameLiftTagResourceRequest#Tags
   */
  readonly tags: GameLiftTag[];

}

/**
 * @schema GameLiftTagResourceResponse
 */
export interface GameLiftTagResourceResponse {
}

/**
 * @schema GameLiftUntagResourceRequest
 */
export interface GameLiftUntagResourceRequest {
  /**
   * @schema GameLiftUntagResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema GameLiftUntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema GameLiftUntagResourceResponse
 */
export interface GameLiftUntagResourceResponse {
}

/**
 * @schema GameLiftUpdateAliasInput
 */
export interface GameLiftUpdateAliasInput {
  /**
   * @schema GameLiftUpdateAliasInput#AliasId
   */
  readonly aliasId: string;

  /**
   * @schema GameLiftUpdateAliasInput#Name
   */
  readonly name?: string;

  /**
   * @schema GameLiftUpdateAliasInput#Description
   */
  readonly description?: string;

  /**
   * @schema GameLiftUpdateAliasInput#RoutingStrategy
   */
  readonly routingStrategy?: GameLiftRoutingStrategy;

}

/**
 * @schema GameLiftUpdateAliasOutput
 */
export interface GameLiftUpdateAliasOutput {
  /**
   * @schema GameLiftUpdateAliasOutput#Alias
   */
  readonly alias?: GameLiftAlias;

}

/**
 * @schema GameLiftUpdateBuildInput
 */
export interface GameLiftUpdateBuildInput {
  /**
   * @schema GameLiftUpdateBuildInput#BuildId
   */
  readonly buildId: string;

  /**
   * @schema GameLiftUpdateBuildInput#Name
   */
  readonly name?: string;

  /**
   * @schema GameLiftUpdateBuildInput#Version
   */
  readonly version?: string;

}

/**
 * @schema GameLiftUpdateBuildOutput
 */
export interface GameLiftUpdateBuildOutput {
  /**
   * @schema GameLiftUpdateBuildOutput#Build
   */
  readonly build?: GameLiftBuild;

}

/**
 * @schema GameLiftUpdateFleetAttributesInput
 */
export interface GameLiftUpdateFleetAttributesInput {
  /**
   * @schema GameLiftUpdateFleetAttributesInput#FleetId
   */
  readonly fleetId: string;

  /**
   * @schema GameLiftUpdateFleetAttributesInput#Name
   */
  readonly name?: string;

  /**
   * @schema GameLiftUpdateFleetAttributesInput#Description
   */
  readonly description?: string;

  /**
   * @schema GameLiftUpdateFleetAttributesInput#NewGameSessionProtectionPolicy
   */
  readonly newGameSessionProtectionPolicy?: string;

  /**
   * @schema GameLiftUpdateFleetAttributesInput#ResourceCreationLimitPolicy
   */
  readonly resourceCreationLimitPolicy?: GameLiftResourceCreationLimitPolicy;

  /**
   * @schema GameLiftUpdateFleetAttributesInput#MetricGroups
   */
  readonly metricGroups?: string[];

}

/**
 * @schema GameLiftUpdateFleetAttributesOutput
 */
export interface GameLiftUpdateFleetAttributesOutput {
  /**
   * @schema GameLiftUpdateFleetAttributesOutput#FleetId
   */
  readonly fleetId?: string;

}

/**
 * @schema GameLiftUpdateFleetCapacityInput
 */
export interface GameLiftUpdateFleetCapacityInput {
  /**
   * @schema GameLiftUpdateFleetCapacityInput#FleetId
   */
  readonly fleetId: string;

  /**
   * @schema GameLiftUpdateFleetCapacityInput#DesiredInstances
   */
  readonly desiredInstances?: number;

  /**
   * @schema GameLiftUpdateFleetCapacityInput#MinSize
   */
  readonly minSize?: number;

  /**
   * @schema GameLiftUpdateFleetCapacityInput#MaxSize
   */
  readonly maxSize?: number;

}

/**
 * @schema GameLiftUpdateFleetCapacityOutput
 */
export interface GameLiftUpdateFleetCapacityOutput {
  /**
   * @schema GameLiftUpdateFleetCapacityOutput#FleetId
   */
  readonly fleetId?: string;

}

/**
 * @schema GameLiftUpdateFleetPortSettingsInput
 */
export interface GameLiftUpdateFleetPortSettingsInput {
  /**
   * @schema GameLiftUpdateFleetPortSettingsInput#FleetId
   */
  readonly fleetId: string;

  /**
   * @schema GameLiftUpdateFleetPortSettingsInput#InboundPermissionAuthorizations
   */
  readonly inboundPermissionAuthorizations?: GameLiftIpPermission[];

  /**
   * @schema GameLiftUpdateFleetPortSettingsInput#InboundPermissionRevocations
   */
  readonly inboundPermissionRevocations?: GameLiftIpPermission[];

}

/**
 * @schema GameLiftUpdateFleetPortSettingsOutput
 */
export interface GameLiftUpdateFleetPortSettingsOutput {
  /**
   * @schema GameLiftUpdateFleetPortSettingsOutput#FleetId
   */
  readonly fleetId?: string;

}

/**
 * @schema GameLiftUpdateGameServerInput
 */
export interface GameLiftUpdateGameServerInput {
  /**
   * @schema GameLiftUpdateGameServerInput#GameServerGroupName
   */
  readonly gameServerGroupName: string;

  /**
   * @schema GameLiftUpdateGameServerInput#GameServerId
   */
  readonly gameServerId: string;

  /**
   * @schema GameLiftUpdateGameServerInput#GameServerData
   */
  readonly gameServerData?: string;

  /**
   * @schema GameLiftUpdateGameServerInput#UtilizationStatus
   */
  readonly utilizationStatus?: string;

  /**
   * @schema GameLiftUpdateGameServerInput#HealthCheck
   */
  readonly healthCheck?: string;

}

/**
 * @schema GameLiftUpdateGameServerOutput
 */
export interface GameLiftUpdateGameServerOutput {
  /**
   * @schema GameLiftUpdateGameServerOutput#GameServer
   */
  readonly gameServer?: GameLiftGameServer;

}

/**
 * @schema GameLiftUpdateGameServerGroupInput
 */
export interface GameLiftUpdateGameServerGroupInput {
  /**
   * @schema GameLiftUpdateGameServerGroupInput#GameServerGroupName
   */
  readonly gameServerGroupName: string;

  /**
   * @schema GameLiftUpdateGameServerGroupInput#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema GameLiftUpdateGameServerGroupInput#InstanceDefinitions
   */
  readonly instanceDefinitions?: GameLiftInstanceDefinition[];

  /**
   * @schema GameLiftUpdateGameServerGroupInput#GameServerProtectionPolicy
   */
  readonly gameServerProtectionPolicy?: string;

  /**
   * @schema GameLiftUpdateGameServerGroupInput#BalancingStrategy
   */
  readonly balancingStrategy?: string;

}

/**
 * @schema GameLiftUpdateGameServerGroupOutput
 */
export interface GameLiftUpdateGameServerGroupOutput {
  /**
   * @schema GameLiftUpdateGameServerGroupOutput#GameServerGroup
   */
  readonly gameServerGroup?: GameLiftGameServerGroup;

}

/**
 * @schema GameLiftUpdateGameSessionInput
 */
export interface GameLiftUpdateGameSessionInput {
  /**
   * @schema GameLiftUpdateGameSessionInput#GameSessionId
   */
  readonly gameSessionId: string;

  /**
   * @schema GameLiftUpdateGameSessionInput#MaximumPlayerSessionCount
   */
  readonly maximumPlayerSessionCount?: number;

  /**
   * @schema GameLiftUpdateGameSessionInput#Name
   */
  readonly name?: string;

  /**
   * @schema GameLiftUpdateGameSessionInput#PlayerSessionCreationPolicy
   */
  readonly playerSessionCreationPolicy?: string;

  /**
   * @schema GameLiftUpdateGameSessionInput#ProtectionPolicy
   */
  readonly protectionPolicy?: string;

}

/**
 * @schema GameLiftUpdateGameSessionOutput
 */
export interface GameLiftUpdateGameSessionOutput {
  /**
   * @schema GameLiftUpdateGameSessionOutput#GameSession
   */
  readonly gameSession?: GameLiftGameSession;

}

/**
 * @schema GameLiftUpdateGameSessionQueueInput
 */
export interface GameLiftUpdateGameSessionQueueInput {
  /**
   * @schema GameLiftUpdateGameSessionQueueInput#Name
   */
  readonly name: string;

  /**
   * @schema GameLiftUpdateGameSessionQueueInput#TimeoutInSeconds
   */
  readonly timeoutInSeconds?: number;

  /**
   * @schema GameLiftUpdateGameSessionQueueInput#PlayerLatencyPolicies
   */
  readonly playerLatencyPolicies?: GameLiftPlayerLatencyPolicy[];

  /**
   * @schema GameLiftUpdateGameSessionQueueInput#Destinations
   */
  readonly destinations?: GameLiftGameSessionQueueDestination[];

}

/**
 * @schema GameLiftUpdateGameSessionQueueOutput
 */
export interface GameLiftUpdateGameSessionQueueOutput {
  /**
   * @schema GameLiftUpdateGameSessionQueueOutput#GameSessionQueue
   */
  readonly gameSessionQueue?: GameLiftGameSessionQueue;

}

/**
 * @schema GameLiftUpdateMatchmakingConfigurationInput
 */
export interface GameLiftUpdateMatchmakingConfigurationInput {
  /**
   * @schema GameLiftUpdateMatchmakingConfigurationInput#Name
   */
  readonly name: string;

  /**
   * @schema GameLiftUpdateMatchmakingConfigurationInput#Description
   */
  readonly description?: string;

  /**
   * @schema GameLiftUpdateMatchmakingConfigurationInput#GameSessionQueueArns
   */
  readonly gameSessionQueueArns?: string[];

  /**
   * @schema GameLiftUpdateMatchmakingConfigurationInput#RequestTimeoutSeconds
   */
  readonly requestTimeoutSeconds?: number;

  /**
   * @schema GameLiftUpdateMatchmakingConfigurationInput#AcceptanceTimeoutSeconds
   */
  readonly acceptanceTimeoutSeconds?: number;

  /**
   * @schema GameLiftUpdateMatchmakingConfigurationInput#AcceptanceRequired
   */
  readonly acceptanceRequired?: boolean;

  /**
   * @schema GameLiftUpdateMatchmakingConfigurationInput#RuleSetName
   */
  readonly ruleSetName?: string;

  /**
   * @schema GameLiftUpdateMatchmakingConfigurationInput#NotificationTarget
   */
  readonly notificationTarget?: string;

  /**
   * @schema GameLiftUpdateMatchmakingConfigurationInput#AdditionalPlayerCount
   */
  readonly additionalPlayerCount?: number;

  /**
   * @schema GameLiftUpdateMatchmakingConfigurationInput#CustomEventData
   */
  readonly customEventData?: string;

  /**
   * @schema GameLiftUpdateMatchmakingConfigurationInput#GameProperties
   */
  readonly gameProperties?: GameLiftGameProperty[];

  /**
   * @schema GameLiftUpdateMatchmakingConfigurationInput#GameSessionData
   */
  readonly gameSessionData?: string;

  /**
   * @schema GameLiftUpdateMatchmakingConfigurationInput#BackfillMode
   */
  readonly backfillMode?: string;

  /**
   * @schema GameLiftUpdateMatchmakingConfigurationInput#FlexMatchMode
   */
  readonly flexMatchMode?: string;

}

/**
 * @schema GameLiftUpdateMatchmakingConfigurationOutput
 */
export interface GameLiftUpdateMatchmakingConfigurationOutput {
  /**
   * @schema GameLiftUpdateMatchmakingConfigurationOutput#Configuration
   */
  readonly configuration?: GameLiftMatchmakingConfiguration;

}

/**
 * @schema GameLiftUpdateRuntimeConfigurationInput
 */
export interface GameLiftUpdateRuntimeConfigurationInput {
  /**
   * @schema GameLiftUpdateRuntimeConfigurationInput#FleetId
   */
  readonly fleetId: string;

  /**
   * @schema GameLiftUpdateRuntimeConfigurationInput#RuntimeConfiguration
   */
  readonly runtimeConfiguration: GameLiftRuntimeConfiguration;

}

/**
 * @schema GameLiftUpdateRuntimeConfigurationOutput
 */
export interface GameLiftUpdateRuntimeConfigurationOutput {
  /**
   * @schema GameLiftUpdateRuntimeConfigurationOutput#RuntimeConfiguration
   */
  readonly runtimeConfiguration?: GameLiftRuntimeConfiguration;

}

/**
 * @schema GameLiftUpdateScriptInput
 */
export interface GameLiftUpdateScriptInput {
  /**
   * @schema GameLiftUpdateScriptInput#ScriptId
   */
  readonly scriptId: string;

  /**
   * @schema GameLiftUpdateScriptInput#Name
   */
  readonly name?: string;

  /**
   * @schema GameLiftUpdateScriptInput#Version
   */
  readonly version?: string;

  /**
   * @schema GameLiftUpdateScriptInput#StorageLocation
   */
  readonly storageLocation?: GameLiftS3Location;

  /**
   * @schema GameLiftUpdateScriptInput#ZipFile
   */
  readonly zipFile?: any;

}

/**
 * @schema GameLiftUpdateScriptOutput
 */
export interface GameLiftUpdateScriptOutput {
  /**
   * @schema GameLiftUpdateScriptOutput#Script
   */
  readonly script?: GameLiftScript;

}

/**
 * @schema GameLiftValidateMatchmakingRuleSetInput
 */
export interface GameLiftValidateMatchmakingRuleSetInput {
  /**
   * @schema GameLiftValidateMatchmakingRuleSetInput#RuleSetBody
   */
  readonly ruleSetBody: string;

}

/**
 * @schema GameLiftValidateMatchmakingRuleSetOutput
 */
export interface GameLiftValidateMatchmakingRuleSetOutput {
  /**
   * @schema GameLiftValidateMatchmakingRuleSetOutput#Valid
   */
  readonly valid?: boolean;

}

/**
 * @schema GameLiftGameServer
 */
export interface GameLiftGameServer {
  /**
   * @schema GameLiftGameServer#GameServerGroupName
   */
  readonly gameServerGroupName?: string;

  /**
   * @schema GameLiftGameServer#GameServerGroupArn
   */
  readonly gameServerGroupArn?: string;

  /**
   * @schema GameLiftGameServer#GameServerId
   */
  readonly gameServerId?: string;

  /**
   * @schema GameLiftGameServer#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema GameLiftGameServer#ConnectionInfo
   */
  readonly connectionInfo?: string;

  /**
   * @schema GameLiftGameServer#GameServerData
   */
  readonly gameServerData?: string;

  /**
   * @schema GameLiftGameServer#ClaimStatus
   */
  readonly claimStatus?: string;

  /**
   * @schema GameLiftGameServer#UtilizationStatus
   */
  readonly utilizationStatus?: string;

  /**
   * @schema GameLiftGameServer#RegistrationTime
   */
  readonly registrationTime?: string;

  /**
   * @schema GameLiftGameServer#LastClaimTime
   */
  readonly lastClaimTime?: string;

  /**
   * @schema GameLiftGameServer#LastHealthCheckTime
   */
  readonly lastHealthCheckTime?: string;

}

/**
 * @schema GameLiftRoutingStrategy
 */
export interface GameLiftRoutingStrategy {
  /**
   * @schema GameLiftRoutingStrategy#Type
   */
  readonly type?: string;

  /**
   * @schema GameLiftRoutingStrategy#FleetId
   */
  readonly fleetId?: string;

  /**
   * @schema GameLiftRoutingStrategy#Message
   */
  readonly message?: string;

}

/**
 * @schema GameLiftTag
 */
export interface GameLiftTag {
  /**
   * @schema GameLiftTag#Key
   */
  readonly key: string;

  /**
   * @schema GameLiftTag#Value
   */
  readonly value: string;

}

/**
 * @schema GameLiftAlias
 */
export interface GameLiftAlias {
  /**
   * @schema GameLiftAlias#AliasId
   */
  readonly aliasId?: string;

  /**
   * @schema GameLiftAlias#Name
   */
  readonly name?: string;

  /**
   * @schema GameLiftAlias#AliasArn
   */
  readonly aliasArn?: string;

  /**
   * @schema GameLiftAlias#Description
   */
  readonly description?: string;

  /**
   * @schema GameLiftAlias#RoutingStrategy
   */
  readonly routingStrategy?: GameLiftRoutingStrategy;

  /**
   * @schema GameLiftAlias#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema GameLiftAlias#LastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

}

/**
 * @schema GameLiftS3Location
 */
export interface GameLiftS3Location {
  /**
   * @schema GameLiftS3Location#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema GameLiftS3Location#Key
   */
  readonly key?: string;

  /**
   * @schema GameLiftS3Location#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema GameLiftS3Location#ObjectVersion
   */
  readonly objectVersion?: string;

}

/**
 * @schema GameLiftBuild
 */
export interface GameLiftBuild {
  /**
   * @schema GameLiftBuild#BuildId
   */
  readonly buildId?: string;

  /**
   * @schema GameLiftBuild#BuildArn
   */
  readonly buildArn?: string;

  /**
   * @schema GameLiftBuild#Name
   */
  readonly name?: string;

  /**
   * @schema GameLiftBuild#Version
   */
  readonly version?: string;

  /**
   * @schema GameLiftBuild#Status
   */
  readonly status?: string;

  /**
   * @schema GameLiftBuild#SizeOnDisk
   */
  readonly sizeOnDisk?: number;

  /**
   * @schema GameLiftBuild#OperatingSystem
   */
  readonly operatingSystem?: string;

  /**
   * @schema GameLiftBuild#CreationTime
   */
  readonly creationTime?: string;

}

/**
 * @schema GameLiftAwsCredentials
 */
export interface GameLiftAwsCredentials {
  /**
   * @schema GameLiftAwsCredentials#AccessKeyId
   */
  readonly accessKeyId?: string;

  /**
   * @schema GameLiftAwsCredentials#SecretAccessKey
   */
  readonly secretAccessKey?: string;

  /**
   * @schema GameLiftAwsCredentials#SessionToken
   */
  readonly sessionToken?: string;

}

/**
 * @schema GameLiftIpPermission
 */
export interface GameLiftIpPermission {
  /**
   * @schema GameLiftIpPermission#FromPort
   */
  readonly fromPort: number;

  /**
   * @schema GameLiftIpPermission#ToPort
   */
  readonly toPort: number;

  /**
   * @schema GameLiftIpPermission#IpRange
   */
  readonly ipRange: string;

  /**
   * @schema GameLiftIpPermission#Protocol
   */
  readonly protocol: string;

}

/**
 * @schema GameLiftRuntimeConfiguration
 */
export interface GameLiftRuntimeConfiguration {
  /**
   * @schema GameLiftRuntimeConfiguration#ServerProcesses
   */
  readonly serverProcesses?: GameLiftServerProcess[];

  /**
   * @schema GameLiftRuntimeConfiguration#MaxConcurrentGameSessionActivations
   */
  readonly maxConcurrentGameSessionActivations?: number;

  /**
   * @schema GameLiftRuntimeConfiguration#GameSessionActivationTimeoutSeconds
   */
  readonly gameSessionActivationTimeoutSeconds?: number;

}

/**
 * @schema GameLiftResourceCreationLimitPolicy
 */
export interface GameLiftResourceCreationLimitPolicy {
  /**
   * @schema GameLiftResourceCreationLimitPolicy#NewGameSessionsPerCreator
   */
  readonly newGameSessionsPerCreator?: number;

  /**
   * @schema GameLiftResourceCreationLimitPolicy#PolicyPeriodInMinutes
   */
  readonly policyPeriodInMinutes?: number;

}

/**
 * @schema GameLiftCertificateConfiguration
 */
export interface GameLiftCertificateConfiguration {
  /**
   * @schema GameLiftCertificateConfiguration#CertificateType
   */
  readonly certificateType: string;

}

/**
 * @schema GameLiftFleetAttributes
 */
export interface GameLiftFleetAttributes {
  /**
   * @schema GameLiftFleetAttributes#FleetId
   */
  readonly fleetId?: string;

  /**
   * @schema GameLiftFleetAttributes#FleetArn
   */
  readonly fleetArn?: string;

  /**
   * @schema GameLiftFleetAttributes#FleetType
   */
  readonly fleetType?: string;

  /**
   * @schema GameLiftFleetAttributes#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema GameLiftFleetAttributes#Description
   */
  readonly description?: string;

  /**
   * @schema GameLiftFleetAttributes#Name
   */
  readonly name?: string;

  /**
   * @schema GameLiftFleetAttributes#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema GameLiftFleetAttributes#TerminationTime
   */
  readonly terminationTime?: string;

  /**
   * @schema GameLiftFleetAttributes#Status
   */
  readonly status?: string;

  /**
   * @schema GameLiftFleetAttributes#BuildId
   */
  readonly buildId?: string;

  /**
   * @schema GameLiftFleetAttributes#BuildArn
   */
  readonly buildArn?: string;

  /**
   * @schema GameLiftFleetAttributes#ScriptId
   */
  readonly scriptId?: string;

  /**
   * @schema GameLiftFleetAttributes#ScriptArn
   */
  readonly scriptArn?: string;

  /**
   * @schema GameLiftFleetAttributes#ServerLaunchPath
   */
  readonly serverLaunchPath?: string;

  /**
   * @schema GameLiftFleetAttributes#ServerLaunchParameters
   */
  readonly serverLaunchParameters?: string;

  /**
   * @schema GameLiftFleetAttributes#LogPaths
   */
  readonly logPaths?: string[];

  /**
   * @schema GameLiftFleetAttributes#NewGameSessionProtectionPolicy
   */
  readonly newGameSessionProtectionPolicy?: string;

  /**
   * @schema GameLiftFleetAttributes#OperatingSystem
   */
  readonly operatingSystem?: string;

  /**
   * @schema GameLiftFleetAttributes#ResourceCreationLimitPolicy
   */
  readonly resourceCreationLimitPolicy?: GameLiftResourceCreationLimitPolicy;

  /**
   * @schema GameLiftFleetAttributes#MetricGroups
   */
  readonly metricGroups?: string[];

  /**
   * @schema GameLiftFleetAttributes#StoppedActions
   */
  readonly stoppedActions?: string[];

  /**
   * @schema GameLiftFleetAttributes#InstanceRoleArn
   */
  readonly instanceRoleArn?: string;

  /**
   * @schema GameLiftFleetAttributes#CertificateConfiguration
   */
  readonly certificateConfiguration?: GameLiftCertificateConfiguration;

}

/**
 * @schema GameLiftLaunchTemplateSpecification
 */
export interface GameLiftLaunchTemplateSpecification {
  /**
   * @schema GameLiftLaunchTemplateSpecification#LaunchTemplateId
   */
  readonly launchTemplateId?: string;

  /**
   * @schema GameLiftLaunchTemplateSpecification#LaunchTemplateName
   */
  readonly launchTemplateName?: string;

  /**
   * @schema GameLiftLaunchTemplateSpecification#Version
   */
  readonly version?: string;

}

/**
 * @schema GameLiftInstanceDefinition
 */
export interface GameLiftInstanceDefinition {
  /**
   * @schema GameLiftInstanceDefinition#InstanceType
   */
  readonly instanceType: string;

  /**
   * @schema GameLiftInstanceDefinition#WeightedCapacity
   */
  readonly weightedCapacity?: string;

}

/**
 * @schema GameLiftGameServerGroupAutoScalingPolicy
 */
export interface GameLiftGameServerGroupAutoScalingPolicy {
  /**
   * @schema GameLiftGameServerGroupAutoScalingPolicy#EstimatedInstanceWarmup
   */
  readonly estimatedInstanceWarmup?: number;

  /**
   * @schema GameLiftGameServerGroupAutoScalingPolicy#TargetTrackingConfiguration
   */
  readonly targetTrackingConfiguration: GameLiftTargetTrackingConfiguration;

}

/**
 * @schema GameLiftGameServerGroup
 */
export interface GameLiftGameServerGroup {
  /**
   * @schema GameLiftGameServerGroup#GameServerGroupName
   */
  readonly gameServerGroupName?: string;

  /**
   * @schema GameLiftGameServerGroup#GameServerGroupArn
   */
  readonly gameServerGroupArn?: string;

  /**
   * @schema GameLiftGameServerGroup#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema GameLiftGameServerGroup#InstanceDefinitions
   */
  readonly instanceDefinitions?: GameLiftInstanceDefinition[];

  /**
   * @schema GameLiftGameServerGroup#BalancingStrategy
   */
  readonly balancingStrategy?: string;

  /**
   * @schema GameLiftGameServerGroup#GameServerProtectionPolicy
   */
  readonly gameServerProtectionPolicy?: string;

  /**
   * @schema GameLiftGameServerGroup#AutoScalingGroupArn
   */
  readonly autoScalingGroupArn?: string;

  /**
   * @schema GameLiftGameServerGroup#Status
   */
  readonly status?: string;

  /**
   * @schema GameLiftGameServerGroup#StatusReason
   */
  readonly statusReason?: string;

  /**
   * @schema GameLiftGameServerGroup#SuspendedActions
   */
  readonly suspendedActions?: string[];

  /**
   * @schema GameLiftGameServerGroup#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema GameLiftGameServerGroup#LastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

}

/**
 * @schema GameLiftGameProperty
 */
export interface GameLiftGameProperty {
  /**
   * @schema GameLiftGameProperty#Key
   */
  readonly key: string;

  /**
   * @schema GameLiftGameProperty#Value
   */
  readonly value: string;

}

/**
 * @schema GameLiftGameSession
 */
export interface GameLiftGameSession {
  /**
   * @schema GameLiftGameSession#GameSessionId
   */
  readonly gameSessionId?: string;

  /**
   * @schema GameLiftGameSession#Name
   */
  readonly name?: string;

  /**
   * @schema GameLiftGameSession#FleetId
   */
  readonly fleetId?: string;

  /**
   * @schema GameLiftGameSession#FleetArn
   */
  readonly fleetArn?: string;

  /**
   * @schema GameLiftGameSession#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema GameLiftGameSession#TerminationTime
   */
  readonly terminationTime?: string;

  /**
   * @schema GameLiftGameSession#CurrentPlayerSessionCount
   */
  readonly currentPlayerSessionCount?: number;

  /**
   * @schema GameLiftGameSession#MaximumPlayerSessionCount
   */
  readonly maximumPlayerSessionCount?: number;

  /**
   * @schema GameLiftGameSession#Status
   */
  readonly status?: string;

  /**
   * @schema GameLiftGameSession#StatusReason
   */
  readonly statusReason?: string;

  /**
   * @schema GameLiftGameSession#GameProperties
   */
  readonly gameProperties?: GameLiftGameProperty[];

  /**
   * @schema GameLiftGameSession#IpAddress
   */
  readonly ipAddress?: string;

  /**
   * @schema GameLiftGameSession#DnsName
   */
  readonly dnsName?: string;

  /**
   * @schema GameLiftGameSession#Port
   */
  readonly port?: number;

  /**
   * @schema GameLiftGameSession#PlayerSessionCreationPolicy
   */
  readonly playerSessionCreationPolicy?: string;

  /**
   * @schema GameLiftGameSession#CreatorId
   */
  readonly creatorId?: string;

  /**
   * @schema GameLiftGameSession#GameSessionData
   */
  readonly gameSessionData?: string;

  /**
   * @schema GameLiftGameSession#MatchmakerData
   */
  readonly matchmakerData?: string;

}

/**
 * @schema GameLiftPlayerLatencyPolicy
 */
export interface GameLiftPlayerLatencyPolicy {
  /**
   * @schema GameLiftPlayerLatencyPolicy#MaximumIndividualPlayerLatencyMilliseconds
   */
  readonly maximumIndividualPlayerLatencyMilliseconds?: number;

  /**
   * @schema GameLiftPlayerLatencyPolicy#PolicyDurationSeconds
   */
  readonly policyDurationSeconds?: number;

}

/**
 * @schema GameLiftGameSessionQueueDestination
 */
export interface GameLiftGameSessionQueueDestination {
  /**
   * @schema GameLiftGameSessionQueueDestination#DestinationArn
   */
  readonly destinationArn?: string;

}

/**
 * @schema GameLiftGameSessionQueue
 */
export interface GameLiftGameSessionQueue {
  /**
   * @schema GameLiftGameSessionQueue#Name
   */
  readonly name?: string;

  /**
   * @schema GameLiftGameSessionQueue#GameSessionQueueArn
   */
  readonly gameSessionQueueArn?: string;

  /**
   * @schema GameLiftGameSessionQueue#TimeoutInSeconds
   */
  readonly timeoutInSeconds?: number;

  /**
   * @schema GameLiftGameSessionQueue#PlayerLatencyPolicies
   */
  readonly playerLatencyPolicies?: GameLiftPlayerLatencyPolicy[];

  /**
   * @schema GameLiftGameSessionQueue#Destinations
   */
  readonly destinations?: GameLiftGameSessionQueueDestination[];

}

/**
 * @schema GameLiftMatchmakingConfiguration
 */
export interface GameLiftMatchmakingConfiguration {
  /**
   * @schema GameLiftMatchmakingConfiguration#Name
   */
  readonly name?: string;

  /**
   * @schema GameLiftMatchmakingConfiguration#ConfigurationArn
   */
  readonly configurationArn?: string;

  /**
   * @schema GameLiftMatchmakingConfiguration#Description
   */
  readonly description?: string;

  /**
   * @schema GameLiftMatchmakingConfiguration#GameSessionQueueArns
   */
  readonly gameSessionQueueArns?: string[];

  /**
   * @schema GameLiftMatchmakingConfiguration#RequestTimeoutSeconds
   */
  readonly requestTimeoutSeconds?: number;

  /**
   * @schema GameLiftMatchmakingConfiguration#AcceptanceTimeoutSeconds
   */
  readonly acceptanceTimeoutSeconds?: number;

  /**
   * @schema GameLiftMatchmakingConfiguration#AcceptanceRequired
   */
  readonly acceptanceRequired?: boolean;

  /**
   * @schema GameLiftMatchmakingConfiguration#RuleSetName
   */
  readonly ruleSetName?: string;

  /**
   * @schema GameLiftMatchmakingConfiguration#RuleSetArn
   */
  readonly ruleSetArn?: string;

  /**
   * @schema GameLiftMatchmakingConfiguration#NotificationTarget
   */
  readonly notificationTarget?: string;

  /**
   * @schema GameLiftMatchmakingConfiguration#AdditionalPlayerCount
   */
  readonly additionalPlayerCount?: number;

  /**
   * @schema GameLiftMatchmakingConfiguration#CustomEventData
   */
  readonly customEventData?: string;

  /**
   * @schema GameLiftMatchmakingConfiguration#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema GameLiftMatchmakingConfiguration#GameProperties
   */
  readonly gameProperties?: GameLiftGameProperty[];

  /**
   * @schema GameLiftMatchmakingConfiguration#GameSessionData
   */
  readonly gameSessionData?: string;

  /**
   * @schema GameLiftMatchmakingConfiguration#BackfillMode
   */
  readonly backfillMode?: string;

  /**
   * @schema GameLiftMatchmakingConfiguration#FlexMatchMode
   */
  readonly flexMatchMode?: string;

}

/**
 * @schema GameLiftMatchmakingRuleSet
 */
export interface GameLiftMatchmakingRuleSet {
  /**
   * @schema GameLiftMatchmakingRuleSet#RuleSetName
   */
  readonly ruleSetName?: string;

  /**
   * @schema GameLiftMatchmakingRuleSet#RuleSetArn
   */
  readonly ruleSetArn?: string;

  /**
   * @schema GameLiftMatchmakingRuleSet#RuleSetBody
   */
  readonly ruleSetBody: string;

  /**
   * @schema GameLiftMatchmakingRuleSet#CreationTime
   */
  readonly creationTime?: string;

}

/**
 * @schema GameLiftPlayerSession
 */
export interface GameLiftPlayerSession {
  /**
   * @schema GameLiftPlayerSession#PlayerSessionId
   */
  readonly playerSessionId?: string;

  /**
   * @schema GameLiftPlayerSession#PlayerId
   */
  readonly playerId?: string;

  /**
   * @schema GameLiftPlayerSession#GameSessionId
   */
  readonly gameSessionId?: string;

  /**
   * @schema GameLiftPlayerSession#FleetId
   */
  readonly fleetId?: string;

  /**
   * @schema GameLiftPlayerSession#FleetArn
   */
  readonly fleetArn?: string;

  /**
   * @schema GameLiftPlayerSession#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema GameLiftPlayerSession#TerminationTime
   */
  readonly terminationTime?: string;

  /**
   * @schema GameLiftPlayerSession#Status
   */
  readonly status?: string;

  /**
   * @schema GameLiftPlayerSession#IpAddress
   */
  readonly ipAddress?: string;

  /**
   * @schema GameLiftPlayerSession#DnsName
   */
  readonly dnsName?: string;

  /**
   * @schema GameLiftPlayerSession#Port
   */
  readonly port?: number;

  /**
   * @schema GameLiftPlayerSession#PlayerData
   */
  readonly playerData?: string;

}

/**
 * @schema GameLiftScript
 */
export interface GameLiftScript {
  /**
   * @schema GameLiftScript#ScriptId
   */
  readonly scriptId?: string;

  /**
   * @schema GameLiftScript#ScriptArn
   */
  readonly scriptArn?: string;

  /**
   * @schema GameLiftScript#Name
   */
  readonly name?: string;

  /**
   * @schema GameLiftScript#Version
   */
  readonly version?: string;

  /**
   * @schema GameLiftScript#SizeOnDisk
   */
  readonly sizeOnDisk?: number;

  /**
   * @schema GameLiftScript#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema GameLiftScript#StorageLocation
   */
  readonly storageLocation?: GameLiftS3Location;

}

/**
 * @schema GameLiftVpcPeeringAuthorization
 */
export interface GameLiftVpcPeeringAuthorization {
  /**
   * @schema GameLiftVpcPeeringAuthorization#GameLiftAwsAccountId
   */
  readonly gameLiftAwsAccountId?: string;

  /**
   * @schema GameLiftVpcPeeringAuthorization#PeerVpcAwsAccountId
   */
  readonly peerVpcAwsAccountId?: string;

  /**
   * @schema GameLiftVpcPeeringAuthorization#PeerVpcId
   */
  readonly peerVpcId?: string;

  /**
   * @schema GameLiftVpcPeeringAuthorization#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema GameLiftVpcPeeringAuthorization#ExpirationTime
   */
  readonly expirationTime?: string;

}

/**
 * @schema GameLiftEc2InstanceLimit
 */
export interface GameLiftEc2InstanceLimit {
  /**
   * @schema GameLiftEc2InstanceLimit#EC2InstanceType
   */
  readonly ec2InstanceType?: string;

  /**
   * @schema GameLiftEc2InstanceLimit#CurrentInstances
   */
  readonly currentInstances?: number;

  /**
   * @schema GameLiftEc2InstanceLimit#InstanceLimit
   */
  readonly instanceLimit?: number;

}

/**
 * @schema GameLiftFleetCapacity
 */
export interface GameLiftFleetCapacity {
  /**
   * @schema GameLiftFleetCapacity#FleetId
   */
  readonly fleetId?: string;

  /**
   * @schema GameLiftFleetCapacity#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema GameLiftFleetCapacity#InstanceCounts
   */
  readonly instanceCounts?: GameLiftEc2InstanceCounts;

}

/**
 * @schema GameLiftEvent
 */
export interface GameLiftEvent {
  /**
   * @schema GameLiftEvent#EventId
   */
  readonly eventId?: string;

  /**
   * @schema GameLiftEvent#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema GameLiftEvent#EventCode
   */
  readonly eventCode?: string;

  /**
   * @schema GameLiftEvent#Message
   */
  readonly message?: string;

  /**
   * @schema GameLiftEvent#EventTime
   */
  readonly eventTime?: string;

  /**
   * @schema GameLiftEvent#PreSignedLogUrl
   */
  readonly preSignedLogUrl?: string;

}

/**
 * @schema GameLiftFleetUtilization
 */
export interface GameLiftFleetUtilization {
  /**
   * @schema GameLiftFleetUtilization#FleetId
   */
  readonly fleetId?: string;

  /**
   * @schema GameLiftFleetUtilization#ActiveServerProcessCount
   */
  readonly activeServerProcessCount?: number;

  /**
   * @schema GameLiftFleetUtilization#ActiveGameSessionCount
   */
  readonly activeGameSessionCount?: number;

  /**
   * @schema GameLiftFleetUtilization#CurrentPlayerSessionCount
   */
  readonly currentPlayerSessionCount?: number;

  /**
   * @schema GameLiftFleetUtilization#MaximumPlayerSessionCount
   */
  readonly maximumPlayerSessionCount?: number;

}

/**
 * @schema GameLiftGameServerInstance
 */
export interface GameLiftGameServerInstance {
  /**
   * @schema GameLiftGameServerInstance#GameServerGroupName
   */
  readonly gameServerGroupName?: string;

  /**
   * @schema GameLiftGameServerInstance#GameServerGroupArn
   */
  readonly gameServerGroupArn?: string;

  /**
   * @schema GameLiftGameServerInstance#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema GameLiftGameServerInstance#InstanceStatus
   */
  readonly instanceStatus?: string;

}

/**
 * @schema GameLiftGameSessionDetail
 */
export interface GameLiftGameSessionDetail {
  /**
   * @schema GameLiftGameSessionDetail#GameSession
   */
  readonly gameSession?: GameLiftGameSession;

  /**
   * @schema GameLiftGameSessionDetail#ProtectionPolicy
   */
  readonly protectionPolicy?: string;

}

/**
 * @schema GameLiftGameSessionPlacement
 */
export interface GameLiftGameSessionPlacement {
  /**
   * @schema GameLiftGameSessionPlacement#PlacementId
   */
  readonly placementId?: string;

  /**
   * @schema GameLiftGameSessionPlacement#GameSessionQueueName
   */
  readonly gameSessionQueueName?: string;

  /**
   * @schema GameLiftGameSessionPlacement#Status
   */
  readonly status?: string;

  /**
   * @schema GameLiftGameSessionPlacement#GameProperties
   */
  readonly gameProperties?: GameLiftGameProperty[];

  /**
   * @schema GameLiftGameSessionPlacement#MaximumPlayerSessionCount
   */
  readonly maximumPlayerSessionCount?: number;

  /**
   * @schema GameLiftGameSessionPlacement#GameSessionName
   */
  readonly gameSessionName?: string;

  /**
   * @schema GameLiftGameSessionPlacement#GameSessionId
   */
  readonly gameSessionId?: string;

  /**
   * @schema GameLiftGameSessionPlacement#GameSessionArn
   */
  readonly gameSessionArn?: string;

  /**
   * @schema GameLiftGameSessionPlacement#GameSessionRegion
   */
  readonly gameSessionRegion?: string;

  /**
   * @schema GameLiftGameSessionPlacement#PlayerLatencies
   */
  readonly playerLatencies?: GameLiftPlayerLatency[];

  /**
   * @schema GameLiftGameSessionPlacement#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema GameLiftGameSessionPlacement#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema GameLiftGameSessionPlacement#IpAddress
   */
  readonly ipAddress?: string;

  /**
   * @schema GameLiftGameSessionPlacement#DnsName
   */
  readonly dnsName?: string;

  /**
   * @schema GameLiftGameSessionPlacement#Port
   */
  readonly port?: number;

  /**
   * @schema GameLiftGameSessionPlacement#PlacedPlayerSessions
   */
  readonly placedPlayerSessions?: GameLiftPlacedPlayerSession[];

  /**
   * @schema GameLiftGameSessionPlacement#GameSessionData
   */
  readonly gameSessionData?: string;

  /**
   * @schema GameLiftGameSessionPlacement#MatchmakerData
   */
  readonly matchmakerData?: string;

}

/**
 * @schema GameLiftInstance
 */
export interface GameLiftInstance {
  /**
   * @schema GameLiftInstance#FleetId
   */
  readonly fleetId?: string;

  /**
   * @schema GameLiftInstance#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema GameLiftInstance#IpAddress
   */
  readonly ipAddress?: string;

  /**
   * @schema GameLiftInstance#DnsName
   */
  readonly dnsName?: string;

  /**
   * @schema GameLiftInstance#OperatingSystem
   */
  readonly operatingSystem?: string;

  /**
   * @schema GameLiftInstance#Type
   */
  readonly type?: string;

  /**
   * @schema GameLiftInstance#Status
   */
  readonly status?: string;

  /**
   * @schema GameLiftInstance#CreationTime
   */
  readonly creationTime?: string;

}

/**
 * @schema GameLiftMatchmakingTicket
 */
export interface GameLiftMatchmakingTicket {
  /**
   * @schema GameLiftMatchmakingTicket#TicketId
   */
  readonly ticketId?: string;

  /**
   * @schema GameLiftMatchmakingTicket#ConfigurationName
   */
  readonly configurationName?: string;

  /**
   * @schema GameLiftMatchmakingTicket#ConfigurationArn
   */
  readonly configurationArn?: string;

  /**
   * @schema GameLiftMatchmakingTicket#Status
   */
  readonly status?: string;

  /**
   * @schema GameLiftMatchmakingTicket#StatusReason
   */
  readonly statusReason?: string;

  /**
   * @schema GameLiftMatchmakingTicket#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema GameLiftMatchmakingTicket#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema GameLiftMatchmakingTicket#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema GameLiftMatchmakingTicket#Players
   */
  readonly players?: GameLiftPlayer[];

  /**
   * @schema GameLiftMatchmakingTicket#GameSessionConnectionInfo
   */
  readonly gameSessionConnectionInfo?: GameLiftGameSessionConnectionInfo;

  /**
   * @schema GameLiftMatchmakingTicket#EstimatedWaitTime
   */
  readonly estimatedWaitTime?: number;

}

/**
 * @schema GameLiftScalingPolicy
 */
export interface GameLiftScalingPolicy {
  /**
   * @schema GameLiftScalingPolicy#FleetId
   */
  readonly fleetId?: string;

  /**
   * @schema GameLiftScalingPolicy#Name
   */
  readonly name?: string;

  /**
   * @schema GameLiftScalingPolicy#Status
   */
  readonly status?: string;

  /**
   * @schema GameLiftScalingPolicy#ScalingAdjustment
   */
  readonly scalingAdjustment?: number;

  /**
   * @schema GameLiftScalingPolicy#ScalingAdjustmentType
   */
  readonly scalingAdjustmentType?: string;

  /**
   * @schema GameLiftScalingPolicy#ComparisonOperator
   */
  readonly comparisonOperator?: string;

  /**
   * @schema GameLiftScalingPolicy#Threshold
   */
  readonly threshold?: number;

  /**
   * @schema GameLiftScalingPolicy#EvaluationPeriods
   */
  readonly evaluationPeriods?: number;

  /**
   * @schema GameLiftScalingPolicy#MetricName
   */
  readonly metricName?: string;

  /**
   * @schema GameLiftScalingPolicy#PolicyType
   */
  readonly policyType?: string;

  /**
   * @schema GameLiftScalingPolicy#TargetConfiguration
   */
  readonly targetConfiguration?: GameLiftTargetConfiguration;

}

/**
 * @schema GameLiftVpcPeeringConnection
 */
export interface GameLiftVpcPeeringConnection {
  /**
   * @schema GameLiftVpcPeeringConnection#FleetId
   */
  readonly fleetId?: string;

  /**
   * @schema GameLiftVpcPeeringConnection#FleetArn
   */
  readonly fleetArn?: string;

  /**
   * @schema GameLiftVpcPeeringConnection#IpV4CidrBlock
   */
  readonly ipV4CidrBlock?: string;

  /**
   * @schema GameLiftVpcPeeringConnection#VpcPeeringConnectionId
   */
  readonly vpcPeeringConnectionId?: string;

  /**
   * @schema GameLiftVpcPeeringConnection#Status
   */
  readonly status?: GameLiftVpcPeeringConnectionStatus;

  /**
   * @schema GameLiftVpcPeeringConnection#PeerVpcId
   */
  readonly peerVpcId?: string;

  /**
   * @schema GameLiftVpcPeeringConnection#GameLiftVpcId
   */
  readonly gameLiftVpcId?: string;

}

/**
 * @schema GameLiftInstanceAccess
 */
export interface GameLiftInstanceAccess {
  /**
   * @schema GameLiftInstanceAccess#FleetId
   */
  readonly fleetId?: string;

  /**
   * @schema GameLiftInstanceAccess#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema GameLiftInstanceAccess#IpAddress
   */
  readonly ipAddress?: string;

  /**
   * @schema GameLiftInstanceAccess#OperatingSystem
   */
  readonly operatingSystem?: string;

  /**
   * @schema GameLiftInstanceAccess#Credentials
   */
  readonly credentials?: GameLiftInstanceCredentials;

}

/**
 * @schema GameLiftTargetConfiguration
 */
export interface GameLiftTargetConfiguration {
  /**
   * @schema GameLiftTargetConfiguration#TargetValue
   */
  readonly targetValue: number;

}

/**
 * @schema GameLiftPlayerLatency
 */
export interface GameLiftPlayerLatency {
  /**
   * @schema GameLiftPlayerLatency#PlayerId
   */
  readonly playerId?: string;

  /**
   * @schema GameLiftPlayerLatency#RegionIdentifier
   */
  readonly regionIdentifier?: string;

  /**
   * @schema GameLiftPlayerLatency#LatencyInMilliseconds
   */
  readonly latencyInMilliseconds?: number;

}

/**
 * @schema GameLiftDesiredPlayerSession
 */
export interface GameLiftDesiredPlayerSession {
  /**
   * @schema GameLiftDesiredPlayerSession#PlayerId
   */
  readonly playerId?: string;

  /**
   * @schema GameLiftDesiredPlayerSession#PlayerData
   */
  readonly playerData?: string;

}

/**
 * @schema GameLiftPlayer
 */
export interface GameLiftPlayer {
  /**
   * @schema GameLiftPlayer#PlayerId
   */
  readonly playerId?: string;

  /**
   * @schema GameLiftPlayer#PlayerAttributes
   */
  readonly playerAttributes?: { [key: string]: GameLiftAttributeValue };

  /**
   * @schema GameLiftPlayer#Team
   */
  readonly team?: string;

  /**
   * @schema GameLiftPlayer#LatencyInMs
   */
  readonly latencyInMs?: { [key: string]: number };

}

/**
 * @schema GameLiftServerProcess
 */
export interface GameLiftServerProcess {
  /**
   * @schema GameLiftServerProcess#LaunchPath
   */
  readonly launchPath: string;

  /**
   * @schema GameLiftServerProcess#Parameters
   */
  readonly parameters?: string;

  /**
   * @schema GameLiftServerProcess#ConcurrentExecutions
   */
  readonly concurrentExecutions: number;

}

/**
 * @schema GameLiftTargetTrackingConfiguration
 */
export interface GameLiftTargetTrackingConfiguration {
  /**
   * @schema GameLiftTargetTrackingConfiguration#TargetValue
   */
  readonly targetValue: number;

}

/**
 * @schema GameLiftEc2InstanceCounts
 */
export interface GameLiftEc2InstanceCounts {
  /**
   * @schema GameLiftEc2InstanceCounts#DESIRED
   */
  readonly desired?: number;

  /**
   * @schema GameLiftEc2InstanceCounts#MINIMUM
   */
  readonly minimum?: number;

  /**
   * @schema GameLiftEc2InstanceCounts#MAXIMUM
   */
  readonly maximum?: number;

  /**
   * @schema GameLiftEc2InstanceCounts#PENDING
   */
  readonly pending?: number;

  /**
   * @schema GameLiftEc2InstanceCounts#ACTIVE
   */
  readonly active?: number;

  /**
   * @schema GameLiftEc2InstanceCounts#IDLE
   */
  readonly idle?: number;

  /**
   * @schema GameLiftEc2InstanceCounts#TERMINATING
   */
  readonly terminating?: number;

}

/**
 * @schema GameLiftPlacedPlayerSession
 */
export interface GameLiftPlacedPlayerSession {
  /**
   * @schema GameLiftPlacedPlayerSession#PlayerId
   */
  readonly playerId?: string;

  /**
   * @schema GameLiftPlacedPlayerSession#PlayerSessionId
   */
  readonly playerSessionId?: string;

}

/**
 * @schema GameLiftGameSessionConnectionInfo
 */
export interface GameLiftGameSessionConnectionInfo {
  /**
   * @schema GameLiftGameSessionConnectionInfo#GameSessionArn
   */
  readonly gameSessionArn?: string;

  /**
   * @schema GameLiftGameSessionConnectionInfo#IpAddress
   */
  readonly ipAddress?: string;

  /**
   * @schema GameLiftGameSessionConnectionInfo#DnsName
   */
  readonly dnsName?: string;

  /**
   * @schema GameLiftGameSessionConnectionInfo#Port
   */
  readonly port?: number;

  /**
   * @schema GameLiftGameSessionConnectionInfo#MatchedPlayerSessions
   */
  readonly matchedPlayerSessions?: GameLiftMatchedPlayerSession[];

}

/**
 * @schema GameLiftVpcPeeringConnectionStatus
 */
export interface GameLiftVpcPeeringConnectionStatus {
  /**
   * @schema GameLiftVpcPeeringConnectionStatus#Code
   */
  readonly code?: string;

  /**
   * @schema GameLiftVpcPeeringConnectionStatus#Message
   */
  readonly message?: string;

}

/**
 * @schema GameLiftInstanceCredentials
 */
export interface GameLiftInstanceCredentials {
  /**
   * @schema GameLiftInstanceCredentials#UserName
   */
  readonly userName?: string;

  /**
   * @schema GameLiftInstanceCredentials#Secret
   */
  readonly secret?: string;

}

/**
 * @schema GameLiftAttributeValue
 */
export interface GameLiftAttributeValue {
  /**
   * @schema GameLiftAttributeValue#S
   */
  readonly s?: string;

  /**
   * @schema GameLiftAttributeValue#N
   */
  readonly n?: number;

  /**
   * @schema GameLiftAttributeValue#SL
   */
  readonly sl?: string[];

  /**
   * @schema GameLiftAttributeValue#SDM
   */
  readonly sdm?: { [key: string]: number };

}

/**
 * @schema GameLiftMatchedPlayerSession
 */
export interface GameLiftMatchedPlayerSession {
  /**
   * @schema GameLiftMatchedPlayerSession#PlayerId
   */
  readonly playerId?: string;

  /**
   * @schema GameLiftMatchedPlayerSession#PlayerSessionId
   */
  readonly playerSessionId?: string;

}
