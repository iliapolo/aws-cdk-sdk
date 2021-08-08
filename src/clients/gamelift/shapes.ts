/**
 * @schema GameLiftAcceptMatchInput
 */
export interface GameLiftAcceptMatchInput {
  /**
   * @schema GameLiftAcceptMatchInput#TicketId
   */
  readonly ticketId?: string;

  /**
   * @schema GameLiftAcceptMatchInput#PlayerIds
   */
  readonly playerIds?: string[];

  /**
   * @schema GameLiftAcceptMatchInput#AcceptanceType
   */
  readonly acceptanceType?: string;

}

/**
 * Converts an object of type 'GameLiftAcceptMatchInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftAcceptMatchInput(obj: GameLiftAcceptMatchInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TicketId': obj.ticketId,
    'PlayerIds': obj.playerIds?.map(y => y),
    'AcceptanceType': obj.acceptanceType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftAcceptMatchOutput
 */
export interface GameLiftAcceptMatchOutput {
}

/**
 * Converts an object of type 'GameLiftAcceptMatchOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftAcceptMatchOutput(obj: GameLiftAcceptMatchOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftClaimGameServerInput
 */
export interface GameLiftClaimGameServerInput {
  /**
   * @schema GameLiftClaimGameServerInput#GameServerGroupName
   */
  readonly gameServerGroupName?: string;

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
 * Converts an object of type 'GameLiftClaimGameServerInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftClaimGameServerInput(obj: GameLiftClaimGameServerInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GameServerGroupName': obj.gameServerGroupName,
    'GameServerId': obj.gameServerId,
    'GameServerData': obj.gameServerData,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftClaimGameServerOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftClaimGameServerOutput(obj: GameLiftClaimGameServerOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GameServer': toJson_GameLiftGameServer(obj.gameServer),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftCreateAliasInput
 */
export interface GameLiftCreateAliasInput {
  /**
   * @schema GameLiftCreateAliasInput#Name
   */
  readonly name?: string;

  /**
   * @schema GameLiftCreateAliasInput#Description
   */
  readonly description?: string;

  /**
   * @schema GameLiftCreateAliasInput#RoutingStrategy
   */
  readonly routingStrategy?: GameLiftRoutingStrategy;

  /**
   * @schema GameLiftCreateAliasInput#Tags
   */
  readonly tags?: GameLiftTag[];

}

/**
 * Converts an object of type 'GameLiftCreateAliasInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftCreateAliasInput(obj: GameLiftCreateAliasInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Description': obj.description,
    'RoutingStrategy': toJson_GameLiftRoutingStrategy(obj.routingStrategy),
    'Tags': obj.tags?.map(y => toJson_GameLiftTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftCreateAliasOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftCreateAliasOutput(obj: GameLiftCreateAliasOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Alias': toJson_GameLiftAlias(obj.alias),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftCreateBuildInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftCreateBuildInput(obj: GameLiftCreateBuildInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Version': obj.version,
    'StorageLocation': toJson_GameLiftS3Location(obj.storageLocation),
    'OperatingSystem': obj.operatingSystem,
    'Tags': obj.tags?.map(y => toJson_GameLiftTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftCreateBuildOutput
 */
export interface GameLiftCreateBuildOutput {
  /**
   * @schema GameLiftCreateBuildOutput#Build2
   */
  readonly build2?: GameLiftBuild;

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
 * Converts an object of type 'GameLiftCreateBuildOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftCreateBuildOutput(obj: GameLiftCreateBuildOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Build2': toJson_GameLiftBuild(obj.build2),
    'UploadCredentials': toJson_GameLiftAwsCredentials(obj.uploadCredentials),
    'StorageLocation': toJson_GameLiftS3Location(obj.storageLocation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftCreateFleetInput
 */
export interface GameLiftCreateFleetInput {
  /**
   * @schema GameLiftCreateFleetInput#Name
   */
  readonly name?: string;

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
  readonly ec2InstanceType?: string;

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
   * @schema GameLiftCreateFleetInput#Locations
   */
  readonly locations?: GameLiftLocationConfiguration[];

  /**
   * @schema GameLiftCreateFleetInput#Tags
   */
  readonly tags?: GameLiftTag[];

}

/**
 * Converts an object of type 'GameLiftCreateFleetInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftCreateFleetInput(obj: GameLiftCreateFleetInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Description': obj.description,
    'BuildId': obj.buildId,
    'ScriptId': obj.scriptId,
    'ServerLaunchPath': obj.serverLaunchPath,
    'ServerLaunchParameters': obj.serverLaunchParameters,
    'LogPaths': obj.logPaths?.map(y => y),
    'EC2InstanceType': obj.ec2InstanceType,
    'EC2InboundPermissions': obj.ec2InboundPermissions?.map(y => toJson_GameLiftIpPermission(y)),
    'NewGameSessionProtectionPolicy': obj.newGameSessionProtectionPolicy,
    'RuntimeConfiguration': toJson_GameLiftRuntimeConfiguration(obj.runtimeConfiguration),
    'ResourceCreationLimitPolicy': toJson_GameLiftResourceCreationLimitPolicy(obj.resourceCreationLimitPolicy),
    'MetricGroups': obj.metricGroups?.map(y => y),
    'PeerVpcAwsAccountId': obj.peerVpcAwsAccountId,
    'PeerVpcId': obj.peerVpcId,
    'FleetType': obj.fleetType,
    'InstanceRoleArn': obj.instanceRoleArn,
    'CertificateConfiguration': toJson_GameLiftCertificateConfiguration(obj.certificateConfiguration),
    'Locations': obj.locations?.map(y => toJson_GameLiftLocationConfiguration(y)),
    'Tags': obj.tags?.map(y => toJson_GameLiftTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftCreateFleetOutput
 */
export interface GameLiftCreateFleetOutput {
  /**
   * @schema GameLiftCreateFleetOutput#FleetAttributes
   */
  readonly fleetAttributes?: GameLiftFleetAttributes;

  /**
   * @schema GameLiftCreateFleetOutput#LocationStates
   */
  readonly locationStates?: GameLiftLocationState[];

}

/**
 * Converts an object of type 'GameLiftCreateFleetOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftCreateFleetOutput(obj: GameLiftCreateFleetOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetAttributes': toJson_GameLiftFleetAttributes(obj.fleetAttributes),
    'LocationStates': obj.locationStates?.map(y => toJson_GameLiftLocationState(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftCreateFleetLocationsInput
 */
export interface GameLiftCreateFleetLocationsInput {
  /**
   * @schema GameLiftCreateFleetLocationsInput#FleetId
   */
  readonly fleetId?: string;

  /**
   * @schema GameLiftCreateFleetLocationsInput#Locations
   */
  readonly locations?: GameLiftLocationConfiguration[];

}

/**
 * Converts an object of type 'GameLiftCreateFleetLocationsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftCreateFleetLocationsInput(obj: GameLiftCreateFleetLocationsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetId': obj.fleetId,
    'Locations': obj.locations?.map(y => toJson_GameLiftLocationConfiguration(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftCreateFleetLocationsOutput
 */
export interface GameLiftCreateFleetLocationsOutput {
  /**
   * @schema GameLiftCreateFleetLocationsOutput#FleetId
   */
  readonly fleetId?: string;

  /**
   * @schema GameLiftCreateFleetLocationsOutput#FleetArn
   */
  readonly fleetArn?: string;

  /**
   * @schema GameLiftCreateFleetLocationsOutput#LocationStates
   */
  readonly locationStates?: GameLiftLocationState[];

}

/**
 * Converts an object of type 'GameLiftCreateFleetLocationsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftCreateFleetLocationsOutput(obj: GameLiftCreateFleetLocationsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetId': obj.fleetId,
    'FleetArn': obj.fleetArn,
    'LocationStates': obj.locationStates?.map(y => toJson_GameLiftLocationState(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftCreateGameServerGroupInput
 */
export interface GameLiftCreateGameServerGroupInput {
  /**
   * @schema GameLiftCreateGameServerGroupInput#GameServerGroupName
   */
  readonly gameServerGroupName?: string;

  /**
   * @schema GameLiftCreateGameServerGroupInput#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema GameLiftCreateGameServerGroupInput#MinSize
   */
  readonly minSize?: number;

  /**
   * @schema GameLiftCreateGameServerGroupInput#MaxSize
   */
  readonly maxSize?: number;

  /**
   * @schema GameLiftCreateGameServerGroupInput#LaunchTemplate
   */
  readonly launchTemplate?: GameLiftLaunchTemplateSpecification;

  /**
   * @schema GameLiftCreateGameServerGroupInput#InstanceDefinitions
   */
  readonly instanceDefinitions?: GameLiftInstanceDefinition[];

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
 * Converts an object of type 'GameLiftCreateGameServerGroupInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftCreateGameServerGroupInput(obj: GameLiftCreateGameServerGroupInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GameServerGroupName': obj.gameServerGroupName,
    'RoleArn': obj.roleArn,
    'MinSize': obj.minSize,
    'MaxSize': obj.maxSize,
    'LaunchTemplate': toJson_GameLiftLaunchTemplateSpecification(obj.launchTemplate),
    'InstanceDefinitions': obj.instanceDefinitions?.map(y => toJson_GameLiftInstanceDefinition(y)),
    'AutoScalingPolicy': toJson_GameLiftGameServerGroupAutoScalingPolicy(obj.autoScalingPolicy),
    'BalancingStrategy': obj.balancingStrategy,
    'GameServerProtectionPolicy': obj.gameServerProtectionPolicy,
    'VpcSubnets': obj.vpcSubnets?.map(y => y),
    'Tags': obj.tags?.map(y => toJson_GameLiftTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftCreateGameServerGroupOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftCreateGameServerGroupOutput(obj: GameLiftCreateGameServerGroupOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GameServerGroup': toJson_GameLiftGameServerGroup(obj.gameServerGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly maximumPlayerSessionCount?: number;

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

  /**
   * @schema GameLiftCreateGameSessionInput#Location
   */
  readonly location?: string;

}

/**
 * Converts an object of type 'GameLiftCreateGameSessionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftCreateGameSessionInput(obj: GameLiftCreateGameSessionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetId': obj.fleetId,
    'AliasId': obj.aliasId,
    'MaximumPlayerSessionCount': obj.maximumPlayerSessionCount,
    'Name': obj.name,
    'GameProperties': obj.gameProperties?.map(y => toJson_GameLiftGameProperty(y)),
    'CreatorId': obj.creatorId,
    'GameSessionId': obj.gameSessionId,
    'IdempotencyToken': obj.idempotencyToken,
    'GameSessionData': obj.gameSessionData,
    'Location': obj.location,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftCreateGameSessionOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftCreateGameSessionOutput(obj: GameLiftCreateGameSessionOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GameSession': toJson_GameLiftGameSession(obj.gameSession),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftCreateGameSessionQueueInput
 */
export interface GameLiftCreateGameSessionQueueInput {
  /**
   * @schema GameLiftCreateGameSessionQueueInput#Name
   */
  readonly name?: string;

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
   * @schema GameLiftCreateGameSessionQueueInput#FilterConfiguration
   */
  readonly filterConfiguration?: GameLiftFilterConfiguration;

  /**
   * @schema GameLiftCreateGameSessionQueueInput#PriorityConfiguration
   */
  readonly priorityConfiguration?: GameLiftPriorityConfiguration;

  /**
   * @schema GameLiftCreateGameSessionQueueInput#CustomEventData
   */
  readonly customEventData?: string;

  /**
   * @schema GameLiftCreateGameSessionQueueInput#NotificationTarget
   */
  readonly notificationTarget?: string;

  /**
   * @schema GameLiftCreateGameSessionQueueInput#Tags
   */
  readonly tags?: GameLiftTag[];

}

/**
 * Converts an object of type 'GameLiftCreateGameSessionQueueInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftCreateGameSessionQueueInput(obj: GameLiftCreateGameSessionQueueInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'TimeoutInSeconds': obj.timeoutInSeconds,
    'PlayerLatencyPolicies': obj.playerLatencyPolicies?.map(y => toJson_GameLiftPlayerLatencyPolicy(y)),
    'Destinations': obj.destinations?.map(y => toJson_GameLiftGameSessionQueueDestination(y)),
    'FilterConfiguration': toJson_GameLiftFilterConfiguration(obj.filterConfiguration),
    'PriorityConfiguration': toJson_GameLiftPriorityConfiguration(obj.priorityConfiguration),
    'CustomEventData': obj.customEventData,
    'NotificationTarget': obj.notificationTarget,
    'Tags': obj.tags?.map(y => toJson_GameLiftTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftCreateGameSessionQueueOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftCreateGameSessionQueueOutput(obj: GameLiftCreateGameSessionQueueOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GameSessionQueue': toJson_GameLiftGameSessionQueue(obj.gameSessionQueue),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftCreateMatchmakingConfigurationInput
 */
export interface GameLiftCreateMatchmakingConfigurationInput {
  /**
   * @schema GameLiftCreateMatchmakingConfigurationInput#Name
   */
  readonly name?: string;

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
  readonly requestTimeoutSeconds?: number;

  /**
   * @schema GameLiftCreateMatchmakingConfigurationInput#AcceptanceTimeoutSeconds
   */
  readonly acceptanceTimeoutSeconds?: number;

  /**
   * @schema GameLiftCreateMatchmakingConfigurationInput#AcceptanceRequired
   */
  readonly acceptanceRequired?: boolean;

  /**
   * @schema GameLiftCreateMatchmakingConfigurationInput#RuleSetName
   */
  readonly ruleSetName?: string;

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
 * Converts an object of type 'GameLiftCreateMatchmakingConfigurationInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftCreateMatchmakingConfigurationInput(obj: GameLiftCreateMatchmakingConfigurationInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Description': obj.description,
    'GameSessionQueueArns': obj.gameSessionQueueArns?.map(y => y),
    'RequestTimeoutSeconds': obj.requestTimeoutSeconds,
    'AcceptanceTimeoutSeconds': obj.acceptanceTimeoutSeconds,
    'AcceptanceRequired': obj.acceptanceRequired,
    'RuleSetName': obj.ruleSetName,
    'NotificationTarget': obj.notificationTarget,
    'AdditionalPlayerCount': obj.additionalPlayerCount,
    'CustomEventData': obj.customEventData,
    'GameProperties': obj.gameProperties?.map(y => toJson_GameLiftGameProperty(y)),
    'GameSessionData': obj.gameSessionData,
    'BackfillMode': obj.backfillMode,
    'FlexMatchMode': obj.flexMatchMode,
    'Tags': obj.tags?.map(y => toJson_GameLiftTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftCreateMatchmakingConfigurationOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftCreateMatchmakingConfigurationOutput(obj: GameLiftCreateMatchmakingConfigurationOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Configuration': toJson_GameLiftMatchmakingConfiguration(obj.configuration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftCreateMatchmakingRuleSetInput
 */
export interface GameLiftCreateMatchmakingRuleSetInput {
  /**
   * @schema GameLiftCreateMatchmakingRuleSetInput#Name
   */
  readonly name?: string;

  /**
   * @schema GameLiftCreateMatchmakingRuleSetInput#RuleSetBody
   */
  readonly ruleSetBody?: string;

  /**
   * @schema GameLiftCreateMatchmakingRuleSetInput#Tags
   */
  readonly tags?: GameLiftTag[];

}

/**
 * Converts an object of type 'GameLiftCreateMatchmakingRuleSetInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftCreateMatchmakingRuleSetInput(obj: GameLiftCreateMatchmakingRuleSetInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'RuleSetBody': obj.ruleSetBody,
    'Tags': obj.tags?.map(y => toJson_GameLiftTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftCreateMatchmakingRuleSetOutput
 */
export interface GameLiftCreateMatchmakingRuleSetOutput {
  /**
   * @schema GameLiftCreateMatchmakingRuleSetOutput#RuleSet
   */
  readonly ruleSet?: GameLiftMatchmakingRuleSet;

}

/**
 * Converts an object of type 'GameLiftCreateMatchmakingRuleSetOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftCreateMatchmakingRuleSetOutput(obj: GameLiftCreateMatchmakingRuleSetOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RuleSet': toJson_GameLiftMatchmakingRuleSet(obj.ruleSet),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftCreatePlayerSessionInput
 */
export interface GameLiftCreatePlayerSessionInput {
  /**
   * @schema GameLiftCreatePlayerSessionInput#GameSessionId
   */
  readonly gameSessionId?: string;

  /**
   * @schema GameLiftCreatePlayerSessionInput#PlayerId
   */
  readonly playerId?: string;

  /**
   * @schema GameLiftCreatePlayerSessionInput#PlayerData
   */
  readonly playerData?: string;

}

/**
 * Converts an object of type 'GameLiftCreatePlayerSessionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftCreatePlayerSessionInput(obj: GameLiftCreatePlayerSessionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GameSessionId': obj.gameSessionId,
    'PlayerId': obj.playerId,
    'PlayerData': obj.playerData,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftCreatePlayerSessionOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftCreatePlayerSessionOutput(obj: GameLiftCreatePlayerSessionOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PlayerSession': toJson_GameLiftPlayerSession(obj.playerSession),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftCreatePlayerSessionsInput
 */
export interface GameLiftCreatePlayerSessionsInput {
  /**
   * @schema GameLiftCreatePlayerSessionsInput#GameSessionId
   */
  readonly gameSessionId?: string;

  /**
   * @schema GameLiftCreatePlayerSessionsInput#PlayerIds
   */
  readonly playerIds?: string[];

  /**
   * @schema GameLiftCreatePlayerSessionsInput#PlayerDataMap
   */
  readonly playerDataMap?: { [key: string]: string };

}

/**
 * Converts an object of type 'GameLiftCreatePlayerSessionsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftCreatePlayerSessionsInput(obj: GameLiftCreatePlayerSessionsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GameSessionId': obj.gameSessionId,
    'PlayerIds': obj.playerIds?.map(y => y),
    'PlayerDataMap': ((obj.playerDataMap) === undefined) ? undefined : (Object.entries(obj.playerDataMap).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftCreatePlayerSessionsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftCreatePlayerSessionsOutput(obj: GameLiftCreatePlayerSessionsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PlayerSessions': obj.playerSessions?.map(y => toJson_GameLiftPlayerSession(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftCreateScriptInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftCreateScriptInput(obj: GameLiftCreateScriptInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Version': obj.version,
    'StorageLocation': toJson_GameLiftS3Location(obj.storageLocation),
    'ZipFile': obj.zipFile,
    'Tags': obj.tags?.map(y => toJson_GameLiftTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftCreateScriptOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftCreateScriptOutput(obj: GameLiftCreateScriptOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Script': toJson_GameLiftScript(obj.script),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftCreateVpcPeeringAuthorizationInput
 */
export interface GameLiftCreateVpcPeeringAuthorizationInput {
  /**
   * @schema GameLiftCreateVpcPeeringAuthorizationInput#GameLiftAwsAccountId
   */
  readonly gameLiftAwsAccountId?: string;

  /**
   * @schema GameLiftCreateVpcPeeringAuthorizationInput#PeerVpcId
   */
  readonly peerVpcId?: string;

}

/**
 * Converts an object of type 'GameLiftCreateVpcPeeringAuthorizationInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftCreateVpcPeeringAuthorizationInput(obj: GameLiftCreateVpcPeeringAuthorizationInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GameLiftAwsAccountId': obj.gameLiftAwsAccountId,
    'PeerVpcId': obj.peerVpcId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftCreateVpcPeeringAuthorizationOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftCreateVpcPeeringAuthorizationOutput(obj: GameLiftCreateVpcPeeringAuthorizationOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VpcPeeringAuthorization': toJson_GameLiftVpcPeeringAuthorization(obj.vpcPeeringAuthorization),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftCreateVpcPeeringConnectionInput
 */
export interface GameLiftCreateVpcPeeringConnectionInput {
  /**
   * @schema GameLiftCreateVpcPeeringConnectionInput#FleetId
   */
  readonly fleetId?: string;

  /**
   * @schema GameLiftCreateVpcPeeringConnectionInput#PeerVpcAwsAccountId
   */
  readonly peerVpcAwsAccountId?: string;

  /**
   * @schema GameLiftCreateVpcPeeringConnectionInput#PeerVpcId
   */
  readonly peerVpcId?: string;

}

/**
 * Converts an object of type 'GameLiftCreateVpcPeeringConnectionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftCreateVpcPeeringConnectionInput(obj: GameLiftCreateVpcPeeringConnectionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetId': obj.fleetId,
    'PeerVpcAwsAccountId': obj.peerVpcAwsAccountId,
    'PeerVpcId': obj.peerVpcId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftCreateVpcPeeringConnectionOutput
 */
export interface GameLiftCreateVpcPeeringConnectionOutput {
}

/**
 * Converts an object of type 'GameLiftCreateVpcPeeringConnectionOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftCreateVpcPeeringConnectionOutput(obj: GameLiftCreateVpcPeeringConnectionOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftDeleteAliasInput
 */
export interface GameLiftDeleteAliasInput {
  /**
   * @schema GameLiftDeleteAliasInput#AliasId
   */
  readonly aliasId?: string;

}

/**
 * Converts an object of type 'GameLiftDeleteAliasInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDeleteAliasInput(obj: GameLiftDeleteAliasInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AliasId': obj.aliasId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftDeleteBuildInput
 */
export interface GameLiftDeleteBuildInput {
  /**
   * @schema GameLiftDeleteBuildInput#BuildId
   */
  readonly buildId?: string;

}

/**
 * Converts an object of type 'GameLiftDeleteBuildInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDeleteBuildInput(obj: GameLiftDeleteBuildInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BuildId': obj.buildId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftDeleteFleetInput
 */
export interface GameLiftDeleteFleetInput {
  /**
   * @schema GameLiftDeleteFleetInput#FleetId
   */
  readonly fleetId?: string;

}

/**
 * Converts an object of type 'GameLiftDeleteFleetInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDeleteFleetInput(obj: GameLiftDeleteFleetInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetId': obj.fleetId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftDeleteFleetLocationsInput
 */
export interface GameLiftDeleteFleetLocationsInput {
  /**
   * @schema GameLiftDeleteFleetLocationsInput#FleetId
   */
  readonly fleetId?: string;

  /**
   * @schema GameLiftDeleteFleetLocationsInput#Locations
   */
  readonly locations?: string[];

}

/**
 * Converts an object of type 'GameLiftDeleteFleetLocationsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDeleteFleetLocationsInput(obj: GameLiftDeleteFleetLocationsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetId': obj.fleetId,
    'Locations': obj.locations?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftDeleteFleetLocationsOutput
 */
export interface GameLiftDeleteFleetLocationsOutput {
  /**
   * @schema GameLiftDeleteFleetLocationsOutput#FleetId
   */
  readonly fleetId?: string;

  /**
   * @schema GameLiftDeleteFleetLocationsOutput#FleetArn
   */
  readonly fleetArn?: string;

  /**
   * @schema GameLiftDeleteFleetLocationsOutput#LocationStates
   */
  readonly locationStates?: GameLiftLocationState[];

}

/**
 * Converts an object of type 'GameLiftDeleteFleetLocationsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDeleteFleetLocationsOutput(obj: GameLiftDeleteFleetLocationsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetId': obj.fleetId,
    'FleetArn': obj.fleetArn,
    'LocationStates': obj.locationStates?.map(y => toJson_GameLiftLocationState(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftDeleteGameServerGroupInput
 */
export interface GameLiftDeleteGameServerGroupInput {
  /**
   * @schema GameLiftDeleteGameServerGroupInput#GameServerGroupName
   */
  readonly gameServerGroupName?: string;

  /**
   * @schema GameLiftDeleteGameServerGroupInput#DeleteOption
   */
  readonly deleteOption?: string;

}

/**
 * Converts an object of type 'GameLiftDeleteGameServerGroupInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDeleteGameServerGroupInput(obj: GameLiftDeleteGameServerGroupInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GameServerGroupName': obj.gameServerGroupName,
    'DeleteOption': obj.deleteOption,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftDeleteGameServerGroupOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDeleteGameServerGroupOutput(obj: GameLiftDeleteGameServerGroupOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GameServerGroup': toJson_GameLiftGameServerGroup(obj.gameServerGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftDeleteGameSessionQueueInput
 */
export interface GameLiftDeleteGameSessionQueueInput {
  /**
   * @schema GameLiftDeleteGameSessionQueueInput#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'GameLiftDeleteGameSessionQueueInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDeleteGameSessionQueueInput(obj: GameLiftDeleteGameSessionQueueInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftDeleteGameSessionQueueOutput
 */
export interface GameLiftDeleteGameSessionQueueOutput {
}

/**
 * Converts an object of type 'GameLiftDeleteGameSessionQueueOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDeleteGameSessionQueueOutput(obj: GameLiftDeleteGameSessionQueueOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftDeleteMatchmakingConfigurationInput
 */
export interface GameLiftDeleteMatchmakingConfigurationInput {
  /**
   * @schema GameLiftDeleteMatchmakingConfigurationInput#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'GameLiftDeleteMatchmakingConfigurationInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDeleteMatchmakingConfigurationInput(obj: GameLiftDeleteMatchmakingConfigurationInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftDeleteMatchmakingConfigurationOutput
 */
export interface GameLiftDeleteMatchmakingConfigurationOutput {
}

/**
 * Converts an object of type 'GameLiftDeleteMatchmakingConfigurationOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDeleteMatchmakingConfigurationOutput(obj: GameLiftDeleteMatchmakingConfigurationOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftDeleteMatchmakingRuleSetInput
 */
export interface GameLiftDeleteMatchmakingRuleSetInput {
  /**
   * @schema GameLiftDeleteMatchmakingRuleSetInput#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'GameLiftDeleteMatchmakingRuleSetInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDeleteMatchmakingRuleSetInput(obj: GameLiftDeleteMatchmakingRuleSetInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftDeleteMatchmakingRuleSetOutput
 */
export interface GameLiftDeleteMatchmakingRuleSetOutput {
}

/**
 * Converts an object of type 'GameLiftDeleteMatchmakingRuleSetOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDeleteMatchmakingRuleSetOutput(obj: GameLiftDeleteMatchmakingRuleSetOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftDeleteScalingPolicyInput
 */
export interface GameLiftDeleteScalingPolicyInput {
  /**
   * @schema GameLiftDeleteScalingPolicyInput#Name
   */
  readonly name?: string;

  /**
   * @schema GameLiftDeleteScalingPolicyInput#FleetId
   */
  readonly fleetId?: string;

}

/**
 * Converts an object of type 'GameLiftDeleteScalingPolicyInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDeleteScalingPolicyInput(obj: GameLiftDeleteScalingPolicyInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'FleetId': obj.fleetId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftDeleteScriptInput
 */
export interface GameLiftDeleteScriptInput {
  /**
   * @schema GameLiftDeleteScriptInput#ScriptId
   */
  readonly scriptId?: string;

}

/**
 * Converts an object of type 'GameLiftDeleteScriptInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDeleteScriptInput(obj: GameLiftDeleteScriptInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ScriptId': obj.scriptId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftDeleteVpcPeeringAuthorizationInput
 */
export interface GameLiftDeleteVpcPeeringAuthorizationInput {
  /**
   * @schema GameLiftDeleteVpcPeeringAuthorizationInput#GameLiftAwsAccountId
   */
  readonly gameLiftAwsAccountId?: string;

  /**
   * @schema GameLiftDeleteVpcPeeringAuthorizationInput#PeerVpcId
   */
  readonly peerVpcId?: string;

}

/**
 * Converts an object of type 'GameLiftDeleteVpcPeeringAuthorizationInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDeleteVpcPeeringAuthorizationInput(obj: GameLiftDeleteVpcPeeringAuthorizationInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GameLiftAwsAccountId': obj.gameLiftAwsAccountId,
    'PeerVpcId': obj.peerVpcId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftDeleteVpcPeeringAuthorizationOutput
 */
export interface GameLiftDeleteVpcPeeringAuthorizationOutput {
}

/**
 * Converts an object of type 'GameLiftDeleteVpcPeeringAuthorizationOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDeleteVpcPeeringAuthorizationOutput(obj: GameLiftDeleteVpcPeeringAuthorizationOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftDeleteVpcPeeringConnectionInput
 */
export interface GameLiftDeleteVpcPeeringConnectionInput {
  /**
   * @schema GameLiftDeleteVpcPeeringConnectionInput#FleetId
   */
  readonly fleetId?: string;

  /**
   * @schema GameLiftDeleteVpcPeeringConnectionInput#VpcPeeringConnectionId
   */
  readonly vpcPeeringConnectionId?: string;

}

/**
 * Converts an object of type 'GameLiftDeleteVpcPeeringConnectionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDeleteVpcPeeringConnectionInput(obj: GameLiftDeleteVpcPeeringConnectionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetId': obj.fleetId,
    'VpcPeeringConnectionId': obj.vpcPeeringConnectionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftDeleteVpcPeeringConnectionOutput
 */
export interface GameLiftDeleteVpcPeeringConnectionOutput {
}

/**
 * Converts an object of type 'GameLiftDeleteVpcPeeringConnectionOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDeleteVpcPeeringConnectionOutput(obj: GameLiftDeleteVpcPeeringConnectionOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftDeregisterGameServerInput
 */
export interface GameLiftDeregisterGameServerInput {
  /**
   * @schema GameLiftDeregisterGameServerInput#GameServerGroupName
   */
  readonly gameServerGroupName?: string;

  /**
   * @schema GameLiftDeregisterGameServerInput#GameServerId
   */
  readonly gameServerId?: string;

}

/**
 * Converts an object of type 'GameLiftDeregisterGameServerInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDeregisterGameServerInput(obj: GameLiftDeregisterGameServerInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GameServerGroupName': obj.gameServerGroupName,
    'GameServerId': obj.gameServerId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftDescribeAliasInput
 */
export interface GameLiftDescribeAliasInput {
  /**
   * @schema GameLiftDescribeAliasInput#AliasId
   */
  readonly aliasId?: string;

}

/**
 * Converts an object of type 'GameLiftDescribeAliasInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDescribeAliasInput(obj: GameLiftDescribeAliasInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AliasId': obj.aliasId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftDescribeAliasOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDescribeAliasOutput(obj: GameLiftDescribeAliasOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Alias': toJson_GameLiftAlias(obj.alias),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftDescribeBuildInput
 */
export interface GameLiftDescribeBuildInput {
  /**
   * @schema GameLiftDescribeBuildInput#BuildId
   */
  readonly buildId?: string;

}

/**
 * Converts an object of type 'GameLiftDescribeBuildInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDescribeBuildInput(obj: GameLiftDescribeBuildInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BuildId': obj.buildId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftDescribeBuildOutput
 */
export interface GameLiftDescribeBuildOutput {
  /**
   * @schema GameLiftDescribeBuildOutput#Build2
   */
  readonly build2?: GameLiftBuild;

}

/**
 * Converts an object of type 'GameLiftDescribeBuildOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDescribeBuildOutput(obj: GameLiftDescribeBuildOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Build2': toJson_GameLiftBuild(obj.build2),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftDescribeEc2InstanceLimitsInput
 */
export interface GameLiftDescribeEc2InstanceLimitsInput {
  /**
   * @schema GameLiftDescribeEc2InstanceLimitsInput#EC2InstanceType
   */
  readonly ec2InstanceType?: string;

  /**
   * @schema GameLiftDescribeEc2InstanceLimitsInput#Location
   */
  readonly location?: string;

}

/**
 * Converts an object of type 'GameLiftDescribeEc2InstanceLimitsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDescribeEc2InstanceLimitsInput(obj: GameLiftDescribeEc2InstanceLimitsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EC2InstanceType': obj.ec2InstanceType,
    'Location': obj.location,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftDescribeEc2InstanceLimitsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDescribeEc2InstanceLimitsOutput(obj: GameLiftDescribeEc2InstanceLimitsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EC2InstanceLimits': obj.ec2InstanceLimits?.map(y => toJson_GameLiftEc2InstanceLimit(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftDescribeFleetAttributesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDescribeFleetAttributesInput(obj: GameLiftDescribeFleetAttributesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetIds': obj.fleetIds?.map(y => y),
    'Limit': obj.limit,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftDescribeFleetAttributesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDescribeFleetAttributesOutput(obj: GameLiftDescribeFleetAttributesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetAttributes': obj.fleetAttributes?.map(y => toJson_GameLiftFleetAttributes(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftDescribeFleetCapacityInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDescribeFleetCapacityInput(obj: GameLiftDescribeFleetCapacityInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetIds': obj.fleetIds?.map(y => y),
    'Limit': obj.limit,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftDescribeFleetCapacityOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDescribeFleetCapacityOutput(obj: GameLiftDescribeFleetCapacityOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetCapacity': obj.fleetCapacity?.map(y => toJson_GameLiftFleetCapacity(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftDescribeFleetEventsInput
 */
export interface GameLiftDescribeFleetEventsInput {
  /**
   * @schema GameLiftDescribeFleetEventsInput#FleetId
   */
  readonly fleetId?: string;

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
 * Converts an object of type 'GameLiftDescribeFleetEventsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDescribeFleetEventsInput(obj: GameLiftDescribeFleetEventsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetId': obj.fleetId,
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
    'Limit': obj.limit,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftDescribeFleetEventsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDescribeFleetEventsOutput(obj: GameLiftDescribeFleetEventsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Events': obj.events?.map(y => toJson_GameLiftEvent(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftDescribeFleetLocationAttributesInput
 */
export interface GameLiftDescribeFleetLocationAttributesInput {
  /**
   * @schema GameLiftDescribeFleetLocationAttributesInput#FleetId
   */
  readonly fleetId?: string;

  /**
   * @schema GameLiftDescribeFleetLocationAttributesInput#Locations
   */
  readonly locations?: string[];

  /**
   * @schema GameLiftDescribeFleetLocationAttributesInput#Limit
   */
  readonly limit?: number;

  /**
   * @schema GameLiftDescribeFleetLocationAttributesInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GameLiftDescribeFleetLocationAttributesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDescribeFleetLocationAttributesInput(obj: GameLiftDescribeFleetLocationAttributesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetId': obj.fleetId,
    'Locations': obj.locations?.map(y => y),
    'Limit': obj.limit,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftDescribeFleetLocationAttributesOutput
 */
export interface GameLiftDescribeFleetLocationAttributesOutput {
  /**
   * @schema GameLiftDescribeFleetLocationAttributesOutput#FleetId
   */
  readonly fleetId?: string;

  /**
   * @schema GameLiftDescribeFleetLocationAttributesOutput#FleetArn
   */
  readonly fleetArn?: string;

  /**
   * @schema GameLiftDescribeFleetLocationAttributesOutput#LocationAttributes
   */
  readonly locationAttributes?: GameLiftLocationAttributes[];

  /**
   * @schema GameLiftDescribeFleetLocationAttributesOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GameLiftDescribeFleetLocationAttributesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDescribeFleetLocationAttributesOutput(obj: GameLiftDescribeFleetLocationAttributesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetId': obj.fleetId,
    'FleetArn': obj.fleetArn,
    'LocationAttributes': obj.locationAttributes?.map(y => toJson_GameLiftLocationAttributes(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftDescribeFleetLocationCapacityInput
 */
export interface GameLiftDescribeFleetLocationCapacityInput {
  /**
   * @schema GameLiftDescribeFleetLocationCapacityInput#FleetId
   */
  readonly fleetId?: string;

  /**
   * @schema GameLiftDescribeFleetLocationCapacityInput#Location
   */
  readonly location?: string;

}

/**
 * Converts an object of type 'GameLiftDescribeFleetLocationCapacityInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDescribeFleetLocationCapacityInput(obj: GameLiftDescribeFleetLocationCapacityInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetId': obj.fleetId,
    'Location': obj.location,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftDescribeFleetLocationCapacityOutput
 */
export interface GameLiftDescribeFleetLocationCapacityOutput {
  /**
   * @schema GameLiftDescribeFleetLocationCapacityOutput#FleetCapacity
   */
  readonly fleetCapacity?: GameLiftFleetCapacity;

}

/**
 * Converts an object of type 'GameLiftDescribeFleetLocationCapacityOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDescribeFleetLocationCapacityOutput(obj: GameLiftDescribeFleetLocationCapacityOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetCapacity': toJson_GameLiftFleetCapacity(obj.fleetCapacity),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftDescribeFleetLocationUtilizationInput
 */
export interface GameLiftDescribeFleetLocationUtilizationInput {
  /**
   * @schema GameLiftDescribeFleetLocationUtilizationInput#FleetId
   */
  readonly fleetId?: string;

  /**
   * @schema GameLiftDescribeFleetLocationUtilizationInput#Location
   */
  readonly location?: string;

}

/**
 * Converts an object of type 'GameLiftDescribeFleetLocationUtilizationInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDescribeFleetLocationUtilizationInput(obj: GameLiftDescribeFleetLocationUtilizationInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetId': obj.fleetId,
    'Location': obj.location,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftDescribeFleetLocationUtilizationOutput
 */
export interface GameLiftDescribeFleetLocationUtilizationOutput {
  /**
   * @schema GameLiftDescribeFleetLocationUtilizationOutput#FleetUtilization
   */
  readonly fleetUtilization?: GameLiftFleetUtilization;

}

/**
 * Converts an object of type 'GameLiftDescribeFleetLocationUtilizationOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDescribeFleetLocationUtilizationOutput(obj: GameLiftDescribeFleetLocationUtilizationOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetUtilization': toJson_GameLiftFleetUtilization(obj.fleetUtilization),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftDescribeFleetPortSettingsInput
 */
export interface GameLiftDescribeFleetPortSettingsInput {
  /**
   * @schema GameLiftDescribeFleetPortSettingsInput#FleetId
   */
  readonly fleetId?: string;

  /**
   * @schema GameLiftDescribeFleetPortSettingsInput#Location
   */
  readonly location?: string;

}

/**
 * Converts an object of type 'GameLiftDescribeFleetPortSettingsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDescribeFleetPortSettingsInput(obj: GameLiftDescribeFleetPortSettingsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetId': obj.fleetId,
    'Location': obj.location,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftDescribeFleetPortSettingsOutput
 */
export interface GameLiftDescribeFleetPortSettingsOutput {
  /**
   * @schema GameLiftDescribeFleetPortSettingsOutput#FleetId
   */
  readonly fleetId?: string;

  /**
   * @schema GameLiftDescribeFleetPortSettingsOutput#FleetArn
   */
  readonly fleetArn?: string;

  /**
   * @schema GameLiftDescribeFleetPortSettingsOutput#InboundPermissions
   */
  readonly inboundPermissions?: GameLiftIpPermission[];

  /**
   * @schema GameLiftDescribeFleetPortSettingsOutput#UpdateStatus
   */
  readonly updateStatus?: string;

  /**
   * @schema GameLiftDescribeFleetPortSettingsOutput#Location
   */
  readonly location?: string;

}

/**
 * Converts an object of type 'GameLiftDescribeFleetPortSettingsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDescribeFleetPortSettingsOutput(obj: GameLiftDescribeFleetPortSettingsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetId': obj.fleetId,
    'FleetArn': obj.fleetArn,
    'InboundPermissions': obj.inboundPermissions?.map(y => toJson_GameLiftIpPermission(y)),
    'UpdateStatus': obj.updateStatus,
    'Location': obj.location,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftDescribeFleetUtilizationInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDescribeFleetUtilizationInput(obj: GameLiftDescribeFleetUtilizationInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetIds': obj.fleetIds?.map(y => y),
    'Limit': obj.limit,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftDescribeFleetUtilizationOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDescribeFleetUtilizationOutput(obj: GameLiftDescribeFleetUtilizationOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetUtilization': obj.fleetUtilization?.map(y => toJson_GameLiftFleetUtilization(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftDescribeGameServerInput
 */
export interface GameLiftDescribeGameServerInput {
  /**
   * @schema GameLiftDescribeGameServerInput#GameServerGroupName
   */
  readonly gameServerGroupName?: string;

  /**
   * @schema GameLiftDescribeGameServerInput#GameServerId
   */
  readonly gameServerId?: string;

}

/**
 * Converts an object of type 'GameLiftDescribeGameServerInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDescribeGameServerInput(obj: GameLiftDescribeGameServerInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GameServerGroupName': obj.gameServerGroupName,
    'GameServerId': obj.gameServerId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftDescribeGameServerOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDescribeGameServerOutput(obj: GameLiftDescribeGameServerOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GameServer': toJson_GameLiftGameServer(obj.gameServer),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftDescribeGameServerGroupInput
 */
export interface GameLiftDescribeGameServerGroupInput {
  /**
   * @schema GameLiftDescribeGameServerGroupInput#GameServerGroupName
   */
  readonly gameServerGroupName?: string;

}

/**
 * Converts an object of type 'GameLiftDescribeGameServerGroupInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDescribeGameServerGroupInput(obj: GameLiftDescribeGameServerGroupInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GameServerGroupName': obj.gameServerGroupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftDescribeGameServerGroupOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDescribeGameServerGroupOutput(obj: GameLiftDescribeGameServerGroupOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GameServerGroup': toJson_GameLiftGameServerGroup(obj.gameServerGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftDescribeGameServerInstancesInput
 */
export interface GameLiftDescribeGameServerInstancesInput {
  /**
   * @schema GameLiftDescribeGameServerInstancesInput#GameServerGroupName
   */
  readonly gameServerGroupName?: string;

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
 * Converts an object of type 'GameLiftDescribeGameServerInstancesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDescribeGameServerInstancesInput(obj: GameLiftDescribeGameServerInstancesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GameServerGroupName': obj.gameServerGroupName,
    'InstanceIds': obj.instanceIds?.map(y => y),
    'Limit': obj.limit,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftDescribeGameServerInstancesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDescribeGameServerInstancesOutput(obj: GameLiftDescribeGameServerInstancesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GameServerInstances': obj.gameServerInstances?.map(y => toJson_GameLiftGameServerInstance(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
   * @schema GameLiftDescribeGameSessionDetailsInput#Location
   */
  readonly location?: string;

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
 * Converts an object of type 'GameLiftDescribeGameSessionDetailsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDescribeGameSessionDetailsInput(obj: GameLiftDescribeGameSessionDetailsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetId': obj.fleetId,
    'GameSessionId': obj.gameSessionId,
    'AliasId': obj.aliasId,
    'Location': obj.location,
    'StatusFilter': obj.statusFilter,
    'Limit': obj.limit,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftDescribeGameSessionDetailsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDescribeGameSessionDetailsOutput(obj: GameLiftDescribeGameSessionDetailsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GameSessionDetails': obj.gameSessionDetails?.map(y => toJson_GameLiftGameSessionDetail(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftDescribeGameSessionPlacementInput
 */
export interface GameLiftDescribeGameSessionPlacementInput {
  /**
   * @schema GameLiftDescribeGameSessionPlacementInput#PlacementId
   */
  readonly placementId?: string;

}

/**
 * Converts an object of type 'GameLiftDescribeGameSessionPlacementInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDescribeGameSessionPlacementInput(obj: GameLiftDescribeGameSessionPlacementInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PlacementId': obj.placementId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftDescribeGameSessionPlacementOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDescribeGameSessionPlacementOutput(obj: GameLiftDescribeGameSessionPlacementOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GameSessionPlacement': toJson_GameLiftGameSessionPlacement(obj.gameSessionPlacement),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftDescribeGameSessionQueuesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDescribeGameSessionQueuesInput(obj: GameLiftDescribeGameSessionQueuesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Names': obj.names?.map(y => y),
    'Limit': obj.limit,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftDescribeGameSessionQueuesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDescribeGameSessionQueuesOutput(obj: GameLiftDescribeGameSessionQueuesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GameSessionQueues': obj.gameSessionQueues?.map(y => toJson_GameLiftGameSessionQueue(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
   * @schema GameLiftDescribeGameSessionsInput#Location
   */
  readonly location?: string;

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
 * Converts an object of type 'GameLiftDescribeGameSessionsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDescribeGameSessionsInput(obj: GameLiftDescribeGameSessionsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetId': obj.fleetId,
    'GameSessionId': obj.gameSessionId,
    'AliasId': obj.aliasId,
    'Location': obj.location,
    'StatusFilter': obj.statusFilter,
    'Limit': obj.limit,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftDescribeGameSessionsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDescribeGameSessionsOutput(obj: GameLiftDescribeGameSessionsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GameSessions': obj.gameSessions?.map(y => toJson_GameLiftGameSession(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftDescribeInstancesInput
 */
export interface GameLiftDescribeInstancesInput {
  /**
   * @schema GameLiftDescribeInstancesInput#FleetId
   */
  readonly fleetId?: string;

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

  /**
   * @schema GameLiftDescribeInstancesInput#Location
   */
  readonly location?: string;

}

/**
 * Converts an object of type 'GameLiftDescribeInstancesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDescribeInstancesInput(obj: GameLiftDescribeInstancesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetId': obj.fleetId,
    'InstanceId': obj.instanceId,
    'Limit': obj.limit,
    'NextToken': obj.nextToken,
    'Location': obj.location,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftDescribeInstancesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDescribeInstancesOutput(obj: GameLiftDescribeInstancesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Instances': obj.instances?.map(y => toJson_GameLiftInstance(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftDescribeMatchmakingInput
 */
export interface GameLiftDescribeMatchmakingInput {
  /**
   * @schema GameLiftDescribeMatchmakingInput#TicketIds
   */
  readonly ticketIds?: string[];

}

/**
 * Converts an object of type 'GameLiftDescribeMatchmakingInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDescribeMatchmakingInput(obj: GameLiftDescribeMatchmakingInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TicketIds': obj.ticketIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftDescribeMatchmakingOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDescribeMatchmakingOutput(obj: GameLiftDescribeMatchmakingOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TicketList': obj.ticketList?.map(y => toJson_GameLiftMatchmakingTicket(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftDescribeMatchmakingConfigurationsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDescribeMatchmakingConfigurationsInput(obj: GameLiftDescribeMatchmakingConfigurationsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Names': obj.names?.map(y => y),
    'RuleSetName': obj.ruleSetName,
    'Limit': obj.limit,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftDescribeMatchmakingConfigurationsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDescribeMatchmakingConfigurationsOutput(obj: GameLiftDescribeMatchmakingConfigurationsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Configurations': obj.configurations?.map(y => toJson_GameLiftMatchmakingConfiguration(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftDescribeMatchmakingRuleSetsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDescribeMatchmakingRuleSetsInput(obj: GameLiftDescribeMatchmakingRuleSetsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Names': obj.names?.map(y => y),
    'Limit': obj.limit,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftDescribeMatchmakingRuleSetsOutput
 */
export interface GameLiftDescribeMatchmakingRuleSetsOutput {
  /**
   * @schema GameLiftDescribeMatchmakingRuleSetsOutput#RuleSets
   */
  readonly ruleSets?: GameLiftMatchmakingRuleSet[];

  /**
   * @schema GameLiftDescribeMatchmakingRuleSetsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GameLiftDescribeMatchmakingRuleSetsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDescribeMatchmakingRuleSetsOutput(obj: GameLiftDescribeMatchmakingRuleSetsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RuleSets': obj.ruleSets?.map(y => toJson_GameLiftMatchmakingRuleSet(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftDescribePlayerSessionsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDescribePlayerSessionsInput(obj: GameLiftDescribePlayerSessionsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GameSessionId': obj.gameSessionId,
    'PlayerId': obj.playerId,
    'PlayerSessionId': obj.playerSessionId,
    'PlayerSessionStatusFilter': obj.playerSessionStatusFilter,
    'Limit': obj.limit,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftDescribePlayerSessionsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDescribePlayerSessionsOutput(obj: GameLiftDescribePlayerSessionsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PlayerSessions': obj.playerSessions?.map(y => toJson_GameLiftPlayerSession(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftDescribeRuntimeConfigurationInput
 */
export interface GameLiftDescribeRuntimeConfigurationInput {
  /**
   * @schema GameLiftDescribeRuntimeConfigurationInput#FleetId
   */
  readonly fleetId?: string;

}

/**
 * Converts an object of type 'GameLiftDescribeRuntimeConfigurationInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDescribeRuntimeConfigurationInput(obj: GameLiftDescribeRuntimeConfigurationInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetId': obj.fleetId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftDescribeRuntimeConfigurationOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDescribeRuntimeConfigurationOutput(obj: GameLiftDescribeRuntimeConfigurationOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RuntimeConfiguration': toJson_GameLiftRuntimeConfiguration(obj.runtimeConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftDescribeScalingPoliciesInput
 */
export interface GameLiftDescribeScalingPoliciesInput {
  /**
   * @schema GameLiftDescribeScalingPoliciesInput#FleetId
   */
  readonly fleetId?: string;

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

  /**
   * @schema GameLiftDescribeScalingPoliciesInput#Location
   */
  readonly location?: string;

}

/**
 * Converts an object of type 'GameLiftDescribeScalingPoliciesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDescribeScalingPoliciesInput(obj: GameLiftDescribeScalingPoliciesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetId': obj.fleetId,
    'StatusFilter': obj.statusFilter,
    'Limit': obj.limit,
    'NextToken': obj.nextToken,
    'Location': obj.location,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftDescribeScalingPoliciesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDescribeScalingPoliciesOutput(obj: GameLiftDescribeScalingPoliciesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ScalingPolicies': obj.scalingPolicies?.map(y => toJson_GameLiftScalingPolicy(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftDescribeScriptInput
 */
export interface GameLiftDescribeScriptInput {
  /**
   * @schema GameLiftDescribeScriptInput#ScriptId
   */
  readonly scriptId?: string;

}

/**
 * Converts an object of type 'GameLiftDescribeScriptInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDescribeScriptInput(obj: GameLiftDescribeScriptInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ScriptId': obj.scriptId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftDescribeScriptOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDescribeScriptOutput(obj: GameLiftDescribeScriptOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Script': toJson_GameLiftScript(obj.script),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftDescribeVpcPeeringAuthorizationsInput
 */
export interface GameLiftDescribeVpcPeeringAuthorizationsInput {
}

/**
 * Converts an object of type 'GameLiftDescribeVpcPeeringAuthorizationsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDescribeVpcPeeringAuthorizationsInput(obj: GameLiftDescribeVpcPeeringAuthorizationsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftDescribeVpcPeeringAuthorizationsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDescribeVpcPeeringAuthorizationsOutput(obj: GameLiftDescribeVpcPeeringAuthorizationsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VpcPeeringAuthorizations': obj.vpcPeeringAuthorizations?.map(y => toJson_GameLiftVpcPeeringAuthorization(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftDescribeVpcPeeringConnectionsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDescribeVpcPeeringConnectionsInput(obj: GameLiftDescribeVpcPeeringConnectionsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetId': obj.fleetId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftDescribeVpcPeeringConnectionsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDescribeVpcPeeringConnectionsOutput(obj: GameLiftDescribeVpcPeeringConnectionsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VpcPeeringConnections': obj.vpcPeeringConnections?.map(y => toJson_GameLiftVpcPeeringConnection(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftGetGameSessionLogUrlInput
 */
export interface GameLiftGetGameSessionLogUrlInput {
  /**
   * @schema GameLiftGetGameSessionLogUrlInput#GameSessionId
   */
  readonly gameSessionId?: string;

}

/**
 * Converts an object of type 'GameLiftGetGameSessionLogUrlInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftGetGameSessionLogUrlInput(obj: GameLiftGetGameSessionLogUrlInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GameSessionId': obj.gameSessionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftGetGameSessionLogUrlOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftGetGameSessionLogUrlOutput(obj: GameLiftGetGameSessionLogUrlOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PreSignedUrl': obj.preSignedUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftGetInstanceAccessInput
 */
export interface GameLiftGetInstanceAccessInput {
  /**
   * @schema GameLiftGetInstanceAccessInput#FleetId
   */
  readonly fleetId?: string;

  /**
   * @schema GameLiftGetInstanceAccessInput#InstanceId
   */
  readonly instanceId?: string;

}

/**
 * Converts an object of type 'GameLiftGetInstanceAccessInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftGetInstanceAccessInput(obj: GameLiftGetInstanceAccessInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetId': obj.fleetId,
    'InstanceId': obj.instanceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftGetInstanceAccessOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftGetInstanceAccessOutput(obj: GameLiftGetInstanceAccessOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceAccess': toJson_GameLiftInstanceAccess(obj.instanceAccess),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftListAliasesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftListAliasesInput(obj: GameLiftListAliasesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoutingStrategyType': obj.routingStrategyType,
    'Name': obj.name,
    'Limit': obj.limit,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftListAliasesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftListAliasesOutput(obj: GameLiftListAliasesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Aliases': obj.aliases?.map(y => toJson_GameLiftAlias(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftListBuildsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftListBuildsInput(obj: GameLiftListBuildsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
    'Limit': obj.limit,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftListBuildsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftListBuildsOutput(obj: GameLiftListBuildsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Builds': obj.builds?.map(y => toJson_GameLiftBuild(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftListFleetsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftListFleetsInput(obj: GameLiftListFleetsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BuildId': obj.buildId,
    'ScriptId': obj.scriptId,
    'Limit': obj.limit,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftListFleetsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftListFleetsOutput(obj: GameLiftListFleetsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetIds': obj.fleetIds?.map(y => y),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftListGameServerGroupsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftListGameServerGroupsInput(obj: GameLiftListGameServerGroupsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Limit': obj.limit,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftListGameServerGroupsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftListGameServerGroupsOutput(obj: GameLiftListGameServerGroupsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GameServerGroups': obj.gameServerGroups?.map(y => toJson_GameLiftGameServerGroup(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftListGameServersInput
 */
export interface GameLiftListGameServersInput {
  /**
   * @schema GameLiftListGameServersInput#GameServerGroupName
   */
  readonly gameServerGroupName?: string;

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
 * Converts an object of type 'GameLiftListGameServersInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftListGameServersInput(obj: GameLiftListGameServersInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GameServerGroupName': obj.gameServerGroupName,
    'SortOrder': obj.sortOrder,
    'Limit': obj.limit,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftListGameServersOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftListGameServersOutput(obj: GameLiftListGameServersOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GameServers': obj.gameServers?.map(y => toJson_GameLiftGameServer(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftListScriptsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftListScriptsInput(obj: GameLiftListScriptsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Limit': obj.limit,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftListScriptsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftListScriptsOutput(obj: GameLiftListScriptsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Scripts': obj.scripts?.map(y => toJson_GameLiftScript(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftListTagsForResourceRequest
 */
export interface GameLiftListTagsForResourceRequest {
  /**
   * @schema GameLiftListTagsForResourceRequest#ResourceARN
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'GameLiftListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftListTagsForResourceRequest(obj: GameLiftListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftListTagsForResourceResponse(obj: GameLiftListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': obj.tags?.map(y => toJson_GameLiftTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftPutScalingPolicyInput
 */
export interface GameLiftPutScalingPolicyInput {
  /**
   * @schema GameLiftPutScalingPolicyInput#Name
   */
  readonly name?: string;

  /**
   * @schema GameLiftPutScalingPolicyInput#FleetId
   */
  readonly fleetId?: string;

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
  readonly metricName?: string;

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
 * Converts an object of type 'GameLiftPutScalingPolicyInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftPutScalingPolicyInput(obj: GameLiftPutScalingPolicyInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'FleetId': obj.fleetId,
    'ScalingAdjustment': obj.scalingAdjustment,
    'ScalingAdjustmentType': obj.scalingAdjustmentType,
    'Threshold': obj.threshold,
    'ComparisonOperator': obj.comparisonOperator,
    'EvaluationPeriods': obj.evaluationPeriods,
    'MetricName': obj.metricName,
    'PolicyType': obj.policyType,
    'TargetConfiguration': toJson_GameLiftTargetConfiguration(obj.targetConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftPutScalingPolicyOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftPutScalingPolicyOutput(obj: GameLiftPutScalingPolicyOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftRegisterGameServerInput
 */
export interface GameLiftRegisterGameServerInput {
  /**
   * @schema GameLiftRegisterGameServerInput#GameServerGroupName
   */
  readonly gameServerGroupName?: string;

  /**
   * @schema GameLiftRegisterGameServerInput#GameServerId
   */
  readonly gameServerId?: string;

  /**
   * @schema GameLiftRegisterGameServerInput#InstanceId
   */
  readonly instanceId?: string;

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
 * Converts an object of type 'GameLiftRegisterGameServerInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftRegisterGameServerInput(obj: GameLiftRegisterGameServerInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GameServerGroupName': obj.gameServerGroupName,
    'GameServerId': obj.gameServerId,
    'InstanceId': obj.instanceId,
    'ConnectionInfo': obj.connectionInfo,
    'GameServerData': obj.gameServerData,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftRegisterGameServerOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftRegisterGameServerOutput(obj: GameLiftRegisterGameServerOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GameServer': toJson_GameLiftGameServer(obj.gameServer),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftRequestUploadCredentialsInput
 */
export interface GameLiftRequestUploadCredentialsInput {
  /**
   * @schema GameLiftRequestUploadCredentialsInput#BuildId
   */
  readonly buildId?: string;

}

/**
 * Converts an object of type 'GameLiftRequestUploadCredentialsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftRequestUploadCredentialsInput(obj: GameLiftRequestUploadCredentialsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BuildId': obj.buildId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftRequestUploadCredentialsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftRequestUploadCredentialsOutput(obj: GameLiftRequestUploadCredentialsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UploadCredentials': toJson_GameLiftAwsCredentials(obj.uploadCredentials),
    'StorageLocation': toJson_GameLiftS3Location(obj.storageLocation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftResolveAliasInput
 */
export interface GameLiftResolveAliasInput {
  /**
   * @schema GameLiftResolveAliasInput#AliasId
   */
  readonly aliasId?: string;

}

/**
 * Converts an object of type 'GameLiftResolveAliasInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftResolveAliasInput(obj: GameLiftResolveAliasInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AliasId': obj.aliasId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftResolveAliasOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftResolveAliasOutput(obj: GameLiftResolveAliasOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetId': obj.fleetId,
    'FleetArn': obj.fleetArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftResumeGameServerGroupInput
 */
export interface GameLiftResumeGameServerGroupInput {
  /**
   * @schema GameLiftResumeGameServerGroupInput#GameServerGroupName
   */
  readonly gameServerGroupName?: string;

  /**
   * @schema GameLiftResumeGameServerGroupInput#ResumeActions
   */
  readonly resumeActions?: string[];

}

/**
 * Converts an object of type 'GameLiftResumeGameServerGroupInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftResumeGameServerGroupInput(obj: GameLiftResumeGameServerGroupInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GameServerGroupName': obj.gameServerGroupName,
    'ResumeActions': obj.resumeActions?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftResumeGameServerGroupOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftResumeGameServerGroupOutput(obj: GameLiftResumeGameServerGroupOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GameServerGroup': toJson_GameLiftGameServerGroup(obj.gameServerGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
   * @schema GameLiftSearchGameSessionsInput#Location
   */
  readonly location?: string;

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
 * Converts an object of type 'GameLiftSearchGameSessionsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftSearchGameSessionsInput(obj: GameLiftSearchGameSessionsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetId': obj.fleetId,
    'AliasId': obj.aliasId,
    'Location': obj.location,
    'FilterExpression': obj.filterExpression,
    'SortExpression': obj.sortExpression,
    'Limit': obj.limit,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftSearchGameSessionsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftSearchGameSessionsOutput(obj: GameLiftSearchGameSessionsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GameSessions': obj.gameSessions?.map(y => toJson_GameLiftGameSession(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftStartFleetActionsInput
 */
export interface GameLiftStartFleetActionsInput {
  /**
   * @schema GameLiftStartFleetActionsInput#FleetId
   */
  readonly fleetId?: string;

  /**
   * @schema GameLiftStartFleetActionsInput#Actions
   */
  readonly actions?: string[];

  /**
   * @schema GameLiftStartFleetActionsInput#Location
   */
  readonly location?: string;

}

/**
 * Converts an object of type 'GameLiftStartFleetActionsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftStartFleetActionsInput(obj: GameLiftStartFleetActionsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetId': obj.fleetId,
    'Actions': obj.actions?.map(y => y),
    'Location': obj.location,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftStartFleetActionsOutput
 */
export interface GameLiftStartFleetActionsOutput {
  /**
   * @schema GameLiftStartFleetActionsOutput#FleetId
   */
  readonly fleetId?: string;

  /**
   * @schema GameLiftStartFleetActionsOutput#FleetArn
   */
  readonly fleetArn?: string;

}

/**
 * Converts an object of type 'GameLiftStartFleetActionsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftStartFleetActionsOutput(obj: GameLiftStartFleetActionsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetId': obj.fleetId,
    'FleetArn': obj.fleetArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftStartGameSessionPlacementInput
 */
export interface GameLiftStartGameSessionPlacementInput {
  /**
   * @schema GameLiftStartGameSessionPlacementInput#PlacementId
   */
  readonly placementId?: string;

  /**
   * @schema GameLiftStartGameSessionPlacementInput#GameSessionQueueName
   */
  readonly gameSessionQueueName?: string;

  /**
   * @schema GameLiftStartGameSessionPlacementInput#GameProperties
   */
  readonly gameProperties?: GameLiftGameProperty[];

  /**
   * @schema GameLiftStartGameSessionPlacementInput#MaximumPlayerSessionCount
   */
  readonly maximumPlayerSessionCount?: number;

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
 * Converts an object of type 'GameLiftStartGameSessionPlacementInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftStartGameSessionPlacementInput(obj: GameLiftStartGameSessionPlacementInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PlacementId': obj.placementId,
    'GameSessionQueueName': obj.gameSessionQueueName,
    'GameProperties': obj.gameProperties?.map(y => toJson_GameLiftGameProperty(y)),
    'MaximumPlayerSessionCount': obj.maximumPlayerSessionCount,
    'GameSessionName': obj.gameSessionName,
    'PlayerLatencies': obj.playerLatencies?.map(y => toJson_GameLiftPlayerLatency(y)),
    'DesiredPlayerSessions': obj.desiredPlayerSessions?.map(y => toJson_GameLiftDesiredPlayerSession(y)),
    'GameSessionData': obj.gameSessionData,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftStartGameSessionPlacementOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftStartGameSessionPlacementOutput(obj: GameLiftStartGameSessionPlacementOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GameSessionPlacement': toJson_GameLiftGameSessionPlacement(obj.gameSessionPlacement),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly configurationName?: string;

  /**
   * @schema GameLiftStartMatchBackfillInput#GameSessionArn
   */
  readonly gameSessionArn?: string;

  /**
   * @schema GameLiftStartMatchBackfillInput#Players
   */
  readonly players?: GameLiftPlayer[];

}

/**
 * Converts an object of type 'GameLiftStartMatchBackfillInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftStartMatchBackfillInput(obj: GameLiftStartMatchBackfillInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TicketId': obj.ticketId,
    'ConfigurationName': obj.configurationName,
    'GameSessionArn': obj.gameSessionArn,
    'Players': obj.players?.map(y => toJson_GameLiftPlayer(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftStartMatchBackfillOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftStartMatchBackfillOutput(obj: GameLiftStartMatchBackfillOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MatchmakingTicket': toJson_GameLiftMatchmakingTicket(obj.matchmakingTicket),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly configurationName?: string;

  /**
   * @schema GameLiftStartMatchmakingInput#Players
   */
  readonly players?: GameLiftPlayer[];

}

/**
 * Converts an object of type 'GameLiftStartMatchmakingInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftStartMatchmakingInput(obj: GameLiftStartMatchmakingInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TicketId': obj.ticketId,
    'ConfigurationName': obj.configurationName,
    'Players': obj.players?.map(y => toJson_GameLiftPlayer(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftStartMatchmakingOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftStartMatchmakingOutput(obj: GameLiftStartMatchmakingOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MatchmakingTicket': toJson_GameLiftMatchmakingTicket(obj.matchmakingTicket),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftStopFleetActionsInput
 */
export interface GameLiftStopFleetActionsInput {
  /**
   * @schema GameLiftStopFleetActionsInput#FleetId
   */
  readonly fleetId?: string;

  /**
   * @schema GameLiftStopFleetActionsInput#Actions
   */
  readonly actions?: string[];

  /**
   * @schema GameLiftStopFleetActionsInput#Location
   */
  readonly location?: string;

}

/**
 * Converts an object of type 'GameLiftStopFleetActionsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftStopFleetActionsInput(obj: GameLiftStopFleetActionsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetId': obj.fleetId,
    'Actions': obj.actions?.map(y => y),
    'Location': obj.location,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftStopFleetActionsOutput
 */
export interface GameLiftStopFleetActionsOutput {
  /**
   * @schema GameLiftStopFleetActionsOutput#FleetId
   */
  readonly fleetId?: string;

  /**
   * @schema GameLiftStopFleetActionsOutput#FleetArn
   */
  readonly fleetArn?: string;

}

/**
 * Converts an object of type 'GameLiftStopFleetActionsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftStopFleetActionsOutput(obj: GameLiftStopFleetActionsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetId': obj.fleetId,
    'FleetArn': obj.fleetArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftStopGameSessionPlacementInput
 */
export interface GameLiftStopGameSessionPlacementInput {
  /**
   * @schema GameLiftStopGameSessionPlacementInput#PlacementId
   */
  readonly placementId?: string;

}

/**
 * Converts an object of type 'GameLiftStopGameSessionPlacementInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftStopGameSessionPlacementInput(obj: GameLiftStopGameSessionPlacementInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PlacementId': obj.placementId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftStopGameSessionPlacementOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftStopGameSessionPlacementOutput(obj: GameLiftStopGameSessionPlacementOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GameSessionPlacement': toJson_GameLiftGameSessionPlacement(obj.gameSessionPlacement),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftStopMatchmakingInput
 */
export interface GameLiftStopMatchmakingInput {
  /**
   * @schema GameLiftStopMatchmakingInput#TicketId
   */
  readonly ticketId?: string;

}

/**
 * Converts an object of type 'GameLiftStopMatchmakingInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftStopMatchmakingInput(obj: GameLiftStopMatchmakingInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TicketId': obj.ticketId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftStopMatchmakingOutput
 */
export interface GameLiftStopMatchmakingOutput {
}

/**
 * Converts an object of type 'GameLiftStopMatchmakingOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftStopMatchmakingOutput(obj: GameLiftStopMatchmakingOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftSuspendGameServerGroupInput
 */
export interface GameLiftSuspendGameServerGroupInput {
  /**
   * @schema GameLiftSuspendGameServerGroupInput#GameServerGroupName
   */
  readonly gameServerGroupName?: string;

  /**
   * @schema GameLiftSuspendGameServerGroupInput#SuspendActions
   */
  readonly suspendActions?: string[];

}

/**
 * Converts an object of type 'GameLiftSuspendGameServerGroupInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftSuspendGameServerGroupInput(obj: GameLiftSuspendGameServerGroupInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GameServerGroupName': obj.gameServerGroupName,
    'SuspendActions': obj.suspendActions?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftSuspendGameServerGroupOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftSuspendGameServerGroupOutput(obj: GameLiftSuspendGameServerGroupOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GameServerGroup': toJson_GameLiftGameServerGroup(obj.gameServerGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftTagResourceRequest
 */
export interface GameLiftTagResourceRequest {
  /**
   * @schema GameLiftTagResourceRequest#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema GameLiftTagResourceRequest#Tags
   */
  readonly tags?: GameLiftTag[];

}

/**
 * Converts an object of type 'GameLiftTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftTagResourceRequest(obj: GameLiftTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
    'Tags': obj.tags?.map(y => toJson_GameLiftTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftTagResourceResponse
 */
export interface GameLiftTagResourceResponse {
}

/**
 * Converts an object of type 'GameLiftTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftTagResourceResponse(obj: GameLiftTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftUntagResourceRequest
 */
export interface GameLiftUntagResourceRequest {
  /**
   * @schema GameLiftUntagResourceRequest#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema GameLiftUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'GameLiftUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftUntagResourceRequest(obj: GameLiftUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftUntagResourceResponse
 */
export interface GameLiftUntagResourceResponse {
}

/**
 * Converts an object of type 'GameLiftUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftUntagResourceResponse(obj: GameLiftUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftUpdateAliasInput
 */
export interface GameLiftUpdateAliasInput {
  /**
   * @schema GameLiftUpdateAliasInput#AliasId
   */
  readonly aliasId?: string;

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
 * Converts an object of type 'GameLiftUpdateAliasInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftUpdateAliasInput(obj: GameLiftUpdateAliasInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AliasId': obj.aliasId,
    'Name': obj.name,
    'Description': obj.description,
    'RoutingStrategy': toJson_GameLiftRoutingStrategy(obj.routingStrategy),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftUpdateAliasOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftUpdateAliasOutput(obj: GameLiftUpdateAliasOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Alias': toJson_GameLiftAlias(obj.alias),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftUpdateBuildInput
 */
export interface GameLiftUpdateBuildInput {
  /**
   * @schema GameLiftUpdateBuildInput#BuildId
   */
  readonly buildId?: string;

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
 * Converts an object of type 'GameLiftUpdateBuildInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftUpdateBuildInput(obj: GameLiftUpdateBuildInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BuildId': obj.buildId,
    'Name': obj.name,
    'Version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftUpdateBuildOutput
 */
export interface GameLiftUpdateBuildOutput {
  /**
   * @schema GameLiftUpdateBuildOutput#Build2
   */
  readonly build2?: GameLiftBuild;

}

/**
 * Converts an object of type 'GameLiftUpdateBuildOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftUpdateBuildOutput(obj: GameLiftUpdateBuildOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Build2': toJson_GameLiftBuild(obj.build2),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftUpdateFleetAttributesInput
 */
export interface GameLiftUpdateFleetAttributesInput {
  /**
   * @schema GameLiftUpdateFleetAttributesInput#FleetId
   */
  readonly fleetId?: string;

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
 * Converts an object of type 'GameLiftUpdateFleetAttributesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftUpdateFleetAttributesInput(obj: GameLiftUpdateFleetAttributesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetId': obj.fleetId,
    'Name': obj.name,
    'Description': obj.description,
    'NewGameSessionProtectionPolicy': obj.newGameSessionProtectionPolicy,
    'ResourceCreationLimitPolicy': toJson_GameLiftResourceCreationLimitPolicy(obj.resourceCreationLimitPolicy),
    'MetricGroups': obj.metricGroups?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftUpdateFleetAttributesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftUpdateFleetAttributesOutput(obj: GameLiftUpdateFleetAttributesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetId': obj.fleetId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftUpdateFleetCapacityInput
 */
export interface GameLiftUpdateFleetCapacityInput {
  /**
   * @schema GameLiftUpdateFleetCapacityInput#FleetId
   */
  readonly fleetId?: string;

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

  /**
   * @schema GameLiftUpdateFleetCapacityInput#Location
   */
  readonly location?: string;

}

/**
 * Converts an object of type 'GameLiftUpdateFleetCapacityInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftUpdateFleetCapacityInput(obj: GameLiftUpdateFleetCapacityInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetId': obj.fleetId,
    'DesiredInstances': obj.desiredInstances,
    'MinSize': obj.minSize,
    'MaxSize': obj.maxSize,
    'Location': obj.location,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftUpdateFleetCapacityOutput
 */
export interface GameLiftUpdateFleetCapacityOutput {
  /**
   * @schema GameLiftUpdateFleetCapacityOutput#FleetId
   */
  readonly fleetId?: string;

  /**
   * @schema GameLiftUpdateFleetCapacityOutput#FleetArn
   */
  readonly fleetArn?: string;

  /**
   * @schema GameLiftUpdateFleetCapacityOutput#Location
   */
  readonly location?: string;

}

/**
 * Converts an object of type 'GameLiftUpdateFleetCapacityOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftUpdateFleetCapacityOutput(obj: GameLiftUpdateFleetCapacityOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetId': obj.fleetId,
    'FleetArn': obj.fleetArn,
    'Location': obj.location,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftUpdateFleetPortSettingsInput
 */
export interface GameLiftUpdateFleetPortSettingsInput {
  /**
   * @schema GameLiftUpdateFleetPortSettingsInput#FleetId
   */
  readonly fleetId?: string;

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
 * Converts an object of type 'GameLiftUpdateFleetPortSettingsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftUpdateFleetPortSettingsInput(obj: GameLiftUpdateFleetPortSettingsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetId': obj.fleetId,
    'InboundPermissionAuthorizations': obj.inboundPermissionAuthorizations?.map(y => toJson_GameLiftIpPermission(y)),
    'InboundPermissionRevocations': obj.inboundPermissionRevocations?.map(y => toJson_GameLiftIpPermission(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftUpdateFleetPortSettingsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftUpdateFleetPortSettingsOutput(obj: GameLiftUpdateFleetPortSettingsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetId': obj.fleetId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftUpdateGameServerInput
 */
export interface GameLiftUpdateGameServerInput {
  /**
   * @schema GameLiftUpdateGameServerInput#GameServerGroupName
   */
  readonly gameServerGroupName?: string;

  /**
   * @schema GameLiftUpdateGameServerInput#GameServerId
   */
  readonly gameServerId?: string;

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
 * Converts an object of type 'GameLiftUpdateGameServerInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftUpdateGameServerInput(obj: GameLiftUpdateGameServerInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GameServerGroupName': obj.gameServerGroupName,
    'GameServerId': obj.gameServerId,
    'GameServerData': obj.gameServerData,
    'UtilizationStatus': obj.utilizationStatus,
    'HealthCheck': obj.healthCheck,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftUpdateGameServerOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftUpdateGameServerOutput(obj: GameLiftUpdateGameServerOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GameServer': toJson_GameLiftGameServer(obj.gameServer),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftUpdateGameServerGroupInput
 */
export interface GameLiftUpdateGameServerGroupInput {
  /**
   * @schema GameLiftUpdateGameServerGroupInput#GameServerGroupName
   */
  readonly gameServerGroupName?: string;

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
 * Converts an object of type 'GameLiftUpdateGameServerGroupInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftUpdateGameServerGroupInput(obj: GameLiftUpdateGameServerGroupInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GameServerGroupName': obj.gameServerGroupName,
    'RoleArn': obj.roleArn,
    'InstanceDefinitions': obj.instanceDefinitions?.map(y => toJson_GameLiftInstanceDefinition(y)),
    'GameServerProtectionPolicy': obj.gameServerProtectionPolicy,
    'BalancingStrategy': obj.balancingStrategy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftUpdateGameServerGroupOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftUpdateGameServerGroupOutput(obj: GameLiftUpdateGameServerGroupOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GameServerGroup': toJson_GameLiftGameServerGroup(obj.gameServerGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftUpdateGameSessionInput
 */
export interface GameLiftUpdateGameSessionInput {
  /**
   * @schema GameLiftUpdateGameSessionInput#GameSessionId
   */
  readonly gameSessionId?: string;

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
 * Converts an object of type 'GameLiftUpdateGameSessionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftUpdateGameSessionInput(obj: GameLiftUpdateGameSessionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GameSessionId': obj.gameSessionId,
    'MaximumPlayerSessionCount': obj.maximumPlayerSessionCount,
    'Name': obj.name,
    'PlayerSessionCreationPolicy': obj.playerSessionCreationPolicy,
    'ProtectionPolicy': obj.protectionPolicy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftUpdateGameSessionOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftUpdateGameSessionOutput(obj: GameLiftUpdateGameSessionOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GameSession': toJson_GameLiftGameSession(obj.gameSession),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftUpdateGameSessionQueueInput
 */
export interface GameLiftUpdateGameSessionQueueInput {
  /**
   * @schema GameLiftUpdateGameSessionQueueInput#Name
   */
  readonly name?: string;

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

  /**
   * @schema GameLiftUpdateGameSessionQueueInput#FilterConfiguration
   */
  readonly filterConfiguration?: GameLiftFilterConfiguration;

  /**
   * @schema GameLiftUpdateGameSessionQueueInput#PriorityConfiguration
   */
  readonly priorityConfiguration?: GameLiftPriorityConfiguration;

  /**
   * @schema GameLiftUpdateGameSessionQueueInput#CustomEventData
   */
  readonly customEventData?: string;

  /**
   * @schema GameLiftUpdateGameSessionQueueInput#NotificationTarget
   */
  readonly notificationTarget?: string;

}

/**
 * Converts an object of type 'GameLiftUpdateGameSessionQueueInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftUpdateGameSessionQueueInput(obj: GameLiftUpdateGameSessionQueueInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'TimeoutInSeconds': obj.timeoutInSeconds,
    'PlayerLatencyPolicies': obj.playerLatencyPolicies?.map(y => toJson_GameLiftPlayerLatencyPolicy(y)),
    'Destinations': obj.destinations?.map(y => toJson_GameLiftGameSessionQueueDestination(y)),
    'FilterConfiguration': toJson_GameLiftFilterConfiguration(obj.filterConfiguration),
    'PriorityConfiguration': toJson_GameLiftPriorityConfiguration(obj.priorityConfiguration),
    'CustomEventData': obj.customEventData,
    'NotificationTarget': obj.notificationTarget,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftUpdateGameSessionQueueOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftUpdateGameSessionQueueOutput(obj: GameLiftUpdateGameSessionQueueOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GameSessionQueue': toJson_GameLiftGameSessionQueue(obj.gameSessionQueue),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftUpdateMatchmakingConfigurationInput
 */
export interface GameLiftUpdateMatchmakingConfigurationInput {
  /**
   * @schema GameLiftUpdateMatchmakingConfigurationInput#Name
   */
  readonly name?: string;

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
 * Converts an object of type 'GameLiftUpdateMatchmakingConfigurationInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftUpdateMatchmakingConfigurationInput(obj: GameLiftUpdateMatchmakingConfigurationInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Description': obj.description,
    'GameSessionQueueArns': obj.gameSessionQueueArns?.map(y => y),
    'RequestTimeoutSeconds': obj.requestTimeoutSeconds,
    'AcceptanceTimeoutSeconds': obj.acceptanceTimeoutSeconds,
    'AcceptanceRequired': obj.acceptanceRequired,
    'RuleSetName': obj.ruleSetName,
    'NotificationTarget': obj.notificationTarget,
    'AdditionalPlayerCount': obj.additionalPlayerCount,
    'CustomEventData': obj.customEventData,
    'GameProperties': obj.gameProperties?.map(y => toJson_GameLiftGameProperty(y)),
    'GameSessionData': obj.gameSessionData,
    'BackfillMode': obj.backfillMode,
    'FlexMatchMode': obj.flexMatchMode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftUpdateMatchmakingConfigurationOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftUpdateMatchmakingConfigurationOutput(obj: GameLiftUpdateMatchmakingConfigurationOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Configuration': toJson_GameLiftMatchmakingConfiguration(obj.configuration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftUpdateRuntimeConfigurationInput
 */
export interface GameLiftUpdateRuntimeConfigurationInput {
  /**
   * @schema GameLiftUpdateRuntimeConfigurationInput#FleetId
   */
  readonly fleetId?: string;

  /**
   * @schema GameLiftUpdateRuntimeConfigurationInput#RuntimeConfiguration
   */
  readonly runtimeConfiguration?: GameLiftRuntimeConfiguration;

}

/**
 * Converts an object of type 'GameLiftUpdateRuntimeConfigurationInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftUpdateRuntimeConfigurationInput(obj: GameLiftUpdateRuntimeConfigurationInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetId': obj.fleetId,
    'RuntimeConfiguration': toJson_GameLiftRuntimeConfiguration(obj.runtimeConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftUpdateRuntimeConfigurationOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftUpdateRuntimeConfigurationOutput(obj: GameLiftUpdateRuntimeConfigurationOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RuntimeConfiguration': toJson_GameLiftRuntimeConfiguration(obj.runtimeConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftUpdateScriptInput
 */
export interface GameLiftUpdateScriptInput {
  /**
   * @schema GameLiftUpdateScriptInput#ScriptId
   */
  readonly scriptId?: string;

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
 * Converts an object of type 'GameLiftUpdateScriptInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftUpdateScriptInput(obj: GameLiftUpdateScriptInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ScriptId': obj.scriptId,
    'Name': obj.name,
    'Version': obj.version,
    'StorageLocation': toJson_GameLiftS3Location(obj.storageLocation),
    'ZipFile': obj.zipFile,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftUpdateScriptOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftUpdateScriptOutput(obj: GameLiftUpdateScriptOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Script': toJson_GameLiftScript(obj.script),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftValidateMatchmakingRuleSetInput
 */
export interface GameLiftValidateMatchmakingRuleSetInput {
  /**
   * @schema GameLiftValidateMatchmakingRuleSetInput#RuleSetBody
   */
  readonly ruleSetBody?: string;

}

/**
 * Converts an object of type 'GameLiftValidateMatchmakingRuleSetInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftValidateMatchmakingRuleSetInput(obj: GameLiftValidateMatchmakingRuleSetInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RuleSetBody': obj.ruleSetBody,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftValidateMatchmakingRuleSetOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftValidateMatchmakingRuleSetOutput(obj: GameLiftValidateMatchmakingRuleSetOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Valid': obj.valid,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftGameServer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftGameServer(obj: GameLiftGameServer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GameServerGroupName': obj.gameServerGroupName,
    'GameServerGroupArn': obj.gameServerGroupArn,
    'GameServerId': obj.gameServerId,
    'InstanceId': obj.instanceId,
    'ConnectionInfo': obj.connectionInfo,
    'GameServerData': obj.gameServerData,
    'ClaimStatus': obj.claimStatus,
    'UtilizationStatus': obj.utilizationStatus,
    'RegistrationTime': obj.registrationTime,
    'LastClaimTime': obj.lastClaimTime,
    'LastHealthCheckTime': obj.lastHealthCheckTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftRoutingStrategy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftRoutingStrategy(obj: GameLiftRoutingStrategy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'FleetId': obj.fleetId,
    'Message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftTag
 */
export interface GameLiftTag {
  /**
   * @schema GameLiftTag#Key
   */
  readonly key?: string;

  /**
   * @schema GameLiftTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'GameLiftTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftTag(obj: GameLiftTag | undefined): Record<string, any> | undefined {
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
 * Converts an object of type 'GameLiftAlias' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftAlias(obj: GameLiftAlias | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AliasId': obj.aliasId,
    'Name': obj.name,
    'AliasArn': obj.aliasArn,
    'Description': obj.description,
    'RoutingStrategy': toJson_GameLiftRoutingStrategy(obj.routingStrategy),
    'CreationTime': obj.creationTime,
    'LastUpdatedTime': obj.lastUpdatedTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftS3Location' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftS3Location(obj: GameLiftS3Location | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'Key': obj.key,
    'RoleArn': obj.roleArn,
    'ObjectVersion': obj.objectVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftBuild' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftBuild(obj: GameLiftBuild | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BuildId': obj.buildId,
    'BuildArn': obj.buildArn,
    'Name': obj.name,
    'Version': obj.version,
    'Status': obj.status,
    'SizeOnDisk': obj.sizeOnDisk,
    'OperatingSystem': obj.operatingSystem,
    'CreationTime': obj.creationTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftAwsCredentials' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftAwsCredentials(obj: GameLiftAwsCredentials | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccessKeyId': obj.accessKeyId,
    'SecretAccessKey': obj.secretAccessKey,
    'SessionToken': obj.sessionToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftIpPermission
 */
export interface GameLiftIpPermission {
  /**
   * @schema GameLiftIpPermission#FromPort
   */
  readonly fromPort?: number;

  /**
   * @schema GameLiftIpPermission#ToPort
   */
  readonly toPort?: number;

  /**
   * @schema GameLiftIpPermission#IpRange
   */
  readonly ipRange?: string;

  /**
   * @schema GameLiftIpPermission#Protocol
   */
  readonly protocol?: string;

}

/**
 * Converts an object of type 'GameLiftIpPermission' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftIpPermission(obj: GameLiftIpPermission | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FromPort': obj.fromPort,
    'ToPort': obj.toPort,
    'IpRange': obj.ipRange,
    'Protocol': obj.protocol,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftRuntimeConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftRuntimeConfiguration(obj: GameLiftRuntimeConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServerProcesses': obj.serverProcesses?.map(y => toJson_GameLiftServerProcess(y)),
    'MaxConcurrentGameSessionActivations': obj.maxConcurrentGameSessionActivations,
    'GameSessionActivationTimeoutSeconds': obj.gameSessionActivationTimeoutSeconds,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftResourceCreationLimitPolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftResourceCreationLimitPolicy(obj: GameLiftResourceCreationLimitPolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NewGameSessionsPerCreator': obj.newGameSessionsPerCreator,
    'PolicyPeriodInMinutes': obj.policyPeriodInMinutes,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftCertificateConfiguration
 */
export interface GameLiftCertificateConfiguration {
  /**
   * @schema GameLiftCertificateConfiguration#CertificateType
   */
  readonly certificateType?: string;

}

/**
 * Converts an object of type 'GameLiftCertificateConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftCertificateConfiguration(obj: GameLiftCertificateConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CertificateType': obj.certificateType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftLocationConfiguration
 */
export interface GameLiftLocationConfiguration {
  /**
   * @schema GameLiftLocationConfiguration#Location
   */
  readonly location?: string;

}

/**
 * Converts an object of type 'GameLiftLocationConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftLocationConfiguration(obj: GameLiftLocationConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Location': obj.location,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftFleetAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftFleetAttributes(obj: GameLiftFleetAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetId': obj.fleetId,
    'FleetArn': obj.fleetArn,
    'FleetType': obj.fleetType,
    'InstanceType': obj.instanceType,
    'Description': obj.description,
    'Name': obj.name,
    'CreationTime': obj.creationTime,
    'TerminationTime': obj.terminationTime,
    'Status': obj.status,
    'BuildId': obj.buildId,
    'BuildArn': obj.buildArn,
    'ScriptId': obj.scriptId,
    'ScriptArn': obj.scriptArn,
    'ServerLaunchPath': obj.serverLaunchPath,
    'ServerLaunchParameters': obj.serverLaunchParameters,
    'LogPaths': obj.logPaths?.map(y => y),
    'NewGameSessionProtectionPolicy': obj.newGameSessionProtectionPolicy,
    'OperatingSystem': obj.operatingSystem,
    'ResourceCreationLimitPolicy': toJson_GameLiftResourceCreationLimitPolicy(obj.resourceCreationLimitPolicy),
    'MetricGroups': obj.metricGroups?.map(y => y),
    'StoppedActions': obj.stoppedActions?.map(y => y),
    'InstanceRoleArn': obj.instanceRoleArn,
    'CertificateConfiguration': toJson_GameLiftCertificateConfiguration(obj.certificateConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftLocationState
 */
export interface GameLiftLocationState {
  /**
   * @schema GameLiftLocationState#Location
   */
  readonly location?: string;

  /**
   * @schema GameLiftLocationState#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'GameLiftLocationState' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftLocationState(obj: GameLiftLocationState | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Location': obj.location,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftLaunchTemplateSpecification' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftLaunchTemplateSpecification(obj: GameLiftLaunchTemplateSpecification | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LaunchTemplateId': obj.launchTemplateId,
    'LaunchTemplateName': obj.launchTemplateName,
    'Version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftInstanceDefinition
 */
export interface GameLiftInstanceDefinition {
  /**
   * @schema GameLiftInstanceDefinition#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema GameLiftInstanceDefinition#WeightedCapacity
   */
  readonly weightedCapacity?: string;

}

/**
 * Converts an object of type 'GameLiftInstanceDefinition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftInstanceDefinition(obj: GameLiftInstanceDefinition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceType': obj.instanceType,
    'WeightedCapacity': obj.weightedCapacity,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly targetTrackingConfiguration?: GameLiftTargetTrackingConfiguration;

}

/**
 * Converts an object of type 'GameLiftGameServerGroupAutoScalingPolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftGameServerGroupAutoScalingPolicy(obj: GameLiftGameServerGroupAutoScalingPolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EstimatedInstanceWarmup': obj.estimatedInstanceWarmup,
    'TargetTrackingConfiguration': toJson_GameLiftTargetTrackingConfiguration(obj.targetTrackingConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftGameServerGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftGameServerGroup(obj: GameLiftGameServerGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GameServerGroupName': obj.gameServerGroupName,
    'GameServerGroupArn': obj.gameServerGroupArn,
    'RoleArn': obj.roleArn,
    'InstanceDefinitions': obj.instanceDefinitions?.map(y => toJson_GameLiftInstanceDefinition(y)),
    'BalancingStrategy': obj.balancingStrategy,
    'GameServerProtectionPolicy': obj.gameServerProtectionPolicy,
    'AutoScalingGroupArn': obj.autoScalingGroupArn,
    'Status': obj.status,
    'StatusReason': obj.statusReason,
    'SuspendedActions': obj.suspendedActions?.map(y => y),
    'CreationTime': obj.creationTime,
    'LastUpdatedTime': obj.lastUpdatedTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftGameProperty
 */
export interface GameLiftGameProperty {
  /**
   * @schema GameLiftGameProperty#Key
   */
  readonly key?: string;

  /**
   * @schema GameLiftGameProperty#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'GameLiftGameProperty' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftGameProperty(obj: GameLiftGameProperty | undefined): Record<string, any> | undefined {
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

  /**
   * @schema GameLiftGameSession#Location
   */
  readonly location?: string;

}

/**
 * Converts an object of type 'GameLiftGameSession' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftGameSession(obj: GameLiftGameSession | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GameSessionId': obj.gameSessionId,
    'Name': obj.name,
    'FleetId': obj.fleetId,
    'FleetArn': obj.fleetArn,
    'CreationTime': obj.creationTime,
    'TerminationTime': obj.terminationTime,
    'CurrentPlayerSessionCount': obj.currentPlayerSessionCount,
    'MaximumPlayerSessionCount': obj.maximumPlayerSessionCount,
    'Status': obj.status,
    'StatusReason': obj.statusReason,
    'GameProperties': obj.gameProperties?.map(y => toJson_GameLiftGameProperty(y)),
    'IpAddress': obj.ipAddress,
    'DnsName': obj.dnsName,
    'Port': obj.port,
    'PlayerSessionCreationPolicy': obj.playerSessionCreationPolicy,
    'CreatorId': obj.creatorId,
    'GameSessionData': obj.gameSessionData,
    'MatchmakerData': obj.matchmakerData,
    'Location': obj.location,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftPlayerLatencyPolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftPlayerLatencyPolicy(obj: GameLiftPlayerLatencyPolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaximumIndividualPlayerLatencyMilliseconds': obj.maximumIndividualPlayerLatencyMilliseconds,
    'PolicyDurationSeconds': obj.policyDurationSeconds,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftGameSessionQueueDestination' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftGameSessionQueueDestination(obj: GameLiftGameSessionQueueDestination | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DestinationArn': obj.destinationArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftFilterConfiguration
 */
export interface GameLiftFilterConfiguration {
  /**
   * @schema GameLiftFilterConfiguration#AllowedLocations
   */
  readonly allowedLocations?: string[];

}

/**
 * Converts an object of type 'GameLiftFilterConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftFilterConfiguration(obj: GameLiftFilterConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AllowedLocations': obj.allowedLocations?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftPriorityConfiguration
 */
export interface GameLiftPriorityConfiguration {
  /**
   * @schema GameLiftPriorityConfiguration#PriorityOrder
   */
  readonly priorityOrder?: string[];

  /**
   * @schema GameLiftPriorityConfiguration#LocationOrder
   */
  readonly locationOrder?: string[];

}

/**
 * Converts an object of type 'GameLiftPriorityConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftPriorityConfiguration(obj: GameLiftPriorityConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PriorityOrder': obj.priorityOrder?.map(y => y),
    'LocationOrder': obj.locationOrder?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema GameLiftGameSessionQueue#FilterConfiguration
   */
  readonly filterConfiguration?: GameLiftFilterConfiguration;

  /**
   * @schema GameLiftGameSessionQueue#PriorityConfiguration
   */
  readonly priorityConfiguration?: GameLiftPriorityConfiguration;

  /**
   * @schema GameLiftGameSessionQueue#CustomEventData
   */
  readonly customEventData?: string;

  /**
   * @schema GameLiftGameSessionQueue#NotificationTarget
   */
  readonly notificationTarget?: string;

}

/**
 * Converts an object of type 'GameLiftGameSessionQueue' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftGameSessionQueue(obj: GameLiftGameSessionQueue | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'GameSessionQueueArn': obj.gameSessionQueueArn,
    'TimeoutInSeconds': obj.timeoutInSeconds,
    'PlayerLatencyPolicies': obj.playerLatencyPolicies?.map(y => toJson_GameLiftPlayerLatencyPolicy(y)),
    'Destinations': obj.destinations?.map(y => toJson_GameLiftGameSessionQueueDestination(y)),
    'FilterConfiguration': toJson_GameLiftFilterConfiguration(obj.filterConfiguration),
    'PriorityConfiguration': toJson_GameLiftPriorityConfiguration(obj.priorityConfiguration),
    'CustomEventData': obj.customEventData,
    'NotificationTarget': obj.notificationTarget,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftMatchmakingConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftMatchmakingConfiguration(obj: GameLiftMatchmakingConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'ConfigurationArn': obj.configurationArn,
    'Description': obj.description,
    'GameSessionQueueArns': obj.gameSessionQueueArns?.map(y => y),
    'RequestTimeoutSeconds': obj.requestTimeoutSeconds,
    'AcceptanceTimeoutSeconds': obj.acceptanceTimeoutSeconds,
    'AcceptanceRequired': obj.acceptanceRequired,
    'RuleSetName': obj.ruleSetName,
    'RuleSetArn': obj.ruleSetArn,
    'NotificationTarget': obj.notificationTarget,
    'AdditionalPlayerCount': obj.additionalPlayerCount,
    'CustomEventData': obj.customEventData,
    'CreationTime': obj.creationTime,
    'GameProperties': obj.gameProperties?.map(y => toJson_GameLiftGameProperty(y)),
    'GameSessionData': obj.gameSessionData,
    'BackfillMode': obj.backfillMode,
    'FlexMatchMode': obj.flexMatchMode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly ruleSetBody?: string;

  /**
   * @schema GameLiftMatchmakingRuleSet#CreationTime
   */
  readonly creationTime?: string;

}

/**
 * Converts an object of type 'GameLiftMatchmakingRuleSet' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftMatchmakingRuleSet(obj: GameLiftMatchmakingRuleSet | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RuleSetName': obj.ruleSetName,
    'RuleSetArn': obj.ruleSetArn,
    'RuleSetBody': obj.ruleSetBody,
    'CreationTime': obj.creationTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftPlayerSession' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftPlayerSession(obj: GameLiftPlayerSession | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PlayerSessionId': obj.playerSessionId,
    'PlayerId': obj.playerId,
    'GameSessionId': obj.gameSessionId,
    'FleetId': obj.fleetId,
    'FleetArn': obj.fleetArn,
    'CreationTime': obj.creationTime,
    'TerminationTime': obj.terminationTime,
    'Status': obj.status,
    'IpAddress': obj.ipAddress,
    'DnsName': obj.dnsName,
    'Port': obj.port,
    'PlayerData': obj.playerData,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftScript' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftScript(obj: GameLiftScript | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ScriptId': obj.scriptId,
    'ScriptArn': obj.scriptArn,
    'Name': obj.name,
    'Version': obj.version,
    'SizeOnDisk': obj.sizeOnDisk,
    'CreationTime': obj.creationTime,
    'StorageLocation': toJson_GameLiftS3Location(obj.storageLocation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftVpcPeeringAuthorization' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftVpcPeeringAuthorization(obj: GameLiftVpcPeeringAuthorization | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GameLiftAwsAccountId': obj.gameLiftAwsAccountId,
    'PeerVpcAwsAccountId': obj.peerVpcAwsAccountId,
    'PeerVpcId': obj.peerVpcId,
    'CreationTime': obj.creationTime,
    'ExpirationTime': obj.expirationTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema GameLiftEc2InstanceLimit#Location
   */
  readonly location?: string;

}

/**
 * Converts an object of type 'GameLiftEc2InstanceLimit' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftEc2InstanceLimit(obj: GameLiftEc2InstanceLimit | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EC2InstanceType': obj.ec2InstanceType,
    'CurrentInstances': obj.currentInstances,
    'InstanceLimit': obj.instanceLimit,
    'Location': obj.location,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftFleetCapacity
 */
export interface GameLiftFleetCapacity {
  /**
   * @schema GameLiftFleetCapacity#FleetId
   */
  readonly fleetId?: string;

  /**
   * @schema GameLiftFleetCapacity#FleetArn
   */
  readonly fleetArn?: string;

  /**
   * @schema GameLiftFleetCapacity#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema GameLiftFleetCapacity#InstanceCounts
   */
  readonly instanceCounts?: GameLiftEc2InstanceCounts;

  /**
   * @schema GameLiftFleetCapacity#Location
   */
  readonly location?: string;

}

/**
 * Converts an object of type 'GameLiftFleetCapacity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftFleetCapacity(obj: GameLiftFleetCapacity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetId': obj.fleetId,
    'FleetArn': obj.fleetArn,
    'InstanceType': obj.instanceType,
    'InstanceCounts': toJson_GameLiftEc2InstanceCounts(obj.instanceCounts),
    'Location': obj.location,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftEvent' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftEvent(obj: GameLiftEvent | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EventId': obj.eventId,
    'ResourceId': obj.resourceId,
    'EventCode': obj.eventCode,
    'Message': obj.message,
    'EventTime': obj.eventTime,
    'PreSignedLogUrl': obj.preSignedLogUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftLocationAttributes
 */
export interface GameLiftLocationAttributes {
  /**
   * @schema GameLiftLocationAttributes#LocationState
   */
  readonly locationState?: GameLiftLocationState;

  /**
   * @schema GameLiftLocationAttributes#StoppedActions
   */
  readonly stoppedActions?: string[];

  /**
   * @schema GameLiftLocationAttributes#UpdateStatus
   */
  readonly updateStatus?: string;

}

/**
 * Converts an object of type 'GameLiftLocationAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftLocationAttributes(obj: GameLiftLocationAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LocationState': toJson_GameLiftLocationState(obj.locationState),
    'StoppedActions': obj.stoppedActions?.map(y => y),
    'UpdateStatus': obj.updateStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftFleetUtilization
 */
export interface GameLiftFleetUtilization {
  /**
   * @schema GameLiftFleetUtilization#FleetId
   */
  readonly fleetId?: string;

  /**
   * @schema GameLiftFleetUtilization#FleetArn
   */
  readonly fleetArn?: string;

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

  /**
   * @schema GameLiftFleetUtilization#Location
   */
  readonly location?: string;

}

/**
 * Converts an object of type 'GameLiftFleetUtilization' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftFleetUtilization(obj: GameLiftFleetUtilization | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetId': obj.fleetId,
    'FleetArn': obj.fleetArn,
    'ActiveServerProcessCount': obj.activeServerProcessCount,
    'ActiveGameSessionCount': obj.activeGameSessionCount,
    'CurrentPlayerSessionCount': obj.currentPlayerSessionCount,
    'MaximumPlayerSessionCount': obj.maximumPlayerSessionCount,
    'Location': obj.location,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftGameServerInstance' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftGameServerInstance(obj: GameLiftGameServerInstance | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GameServerGroupName': obj.gameServerGroupName,
    'GameServerGroupArn': obj.gameServerGroupArn,
    'InstanceId': obj.instanceId,
    'InstanceStatus': obj.instanceStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftGameSessionDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftGameSessionDetail(obj: GameLiftGameSessionDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GameSession': toJson_GameLiftGameSession(obj.gameSession),
    'ProtectionPolicy': obj.protectionPolicy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftGameSessionPlacement' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftGameSessionPlacement(obj: GameLiftGameSessionPlacement | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PlacementId': obj.placementId,
    'GameSessionQueueName': obj.gameSessionQueueName,
    'Status': obj.status,
    'GameProperties': obj.gameProperties?.map(y => toJson_GameLiftGameProperty(y)),
    'MaximumPlayerSessionCount': obj.maximumPlayerSessionCount,
    'GameSessionName': obj.gameSessionName,
    'GameSessionId': obj.gameSessionId,
    'GameSessionArn': obj.gameSessionArn,
    'GameSessionRegion': obj.gameSessionRegion,
    'PlayerLatencies': obj.playerLatencies?.map(y => toJson_GameLiftPlayerLatency(y)),
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
    'IpAddress': obj.ipAddress,
    'DnsName': obj.dnsName,
    'Port': obj.port,
    'PlacedPlayerSessions': obj.placedPlayerSessions?.map(y => toJson_GameLiftPlacedPlayerSession(y)),
    'GameSessionData': obj.gameSessionData,
    'MatchmakerData': obj.matchmakerData,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftInstance
 */
export interface GameLiftInstance {
  /**
   * @schema GameLiftInstance#FleetId
   */
  readonly fleetId?: string;

  /**
   * @schema GameLiftInstance#FleetArn
   */
  readonly fleetArn?: string;

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

  /**
   * @schema GameLiftInstance#Location
   */
  readonly location?: string;

}

/**
 * Converts an object of type 'GameLiftInstance' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftInstance(obj: GameLiftInstance | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetId': obj.fleetId,
    'FleetArn': obj.fleetArn,
    'InstanceId': obj.instanceId,
    'IpAddress': obj.ipAddress,
    'DnsName': obj.dnsName,
    'OperatingSystem': obj.operatingSystem,
    'Type': obj.type,
    'Status': obj.status,
    'CreationTime': obj.creationTime,
    'Location': obj.location,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftMatchmakingTicket' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftMatchmakingTicket(obj: GameLiftMatchmakingTicket | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TicketId': obj.ticketId,
    'ConfigurationName': obj.configurationName,
    'ConfigurationArn': obj.configurationArn,
    'Status': obj.status,
    'StatusReason': obj.statusReason,
    'StatusMessage': obj.statusMessage,
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
    'Players': obj.players?.map(y => toJson_GameLiftPlayer(y)),
    'GameSessionConnectionInfo': toJson_GameLiftGameSessionConnectionInfo(obj.gameSessionConnectionInfo),
    'EstimatedWaitTime': obj.estimatedWaitTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftScalingPolicy
 */
export interface GameLiftScalingPolicy {
  /**
   * @schema GameLiftScalingPolicy#FleetId
   */
  readonly fleetId?: string;

  /**
   * @schema GameLiftScalingPolicy#FleetArn
   */
  readonly fleetArn?: string;

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

  /**
   * @schema GameLiftScalingPolicy#UpdateStatus
   */
  readonly updateStatus?: string;

  /**
   * @schema GameLiftScalingPolicy#Location
   */
  readonly location?: string;

}

/**
 * Converts an object of type 'GameLiftScalingPolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftScalingPolicy(obj: GameLiftScalingPolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetId': obj.fleetId,
    'FleetArn': obj.fleetArn,
    'Name': obj.name,
    'Status': obj.status,
    'ScalingAdjustment': obj.scalingAdjustment,
    'ScalingAdjustmentType': obj.scalingAdjustmentType,
    'ComparisonOperator': obj.comparisonOperator,
    'Threshold': obj.threshold,
    'EvaluationPeriods': obj.evaluationPeriods,
    'MetricName': obj.metricName,
    'PolicyType': obj.policyType,
    'TargetConfiguration': toJson_GameLiftTargetConfiguration(obj.targetConfiguration),
    'UpdateStatus': obj.updateStatus,
    'Location': obj.location,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftVpcPeeringConnection' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftVpcPeeringConnection(obj: GameLiftVpcPeeringConnection | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetId': obj.fleetId,
    'FleetArn': obj.fleetArn,
    'IpV4CidrBlock': obj.ipV4CidrBlock,
    'VpcPeeringConnectionId': obj.vpcPeeringConnectionId,
    'Status': toJson_GameLiftVpcPeeringConnectionStatus(obj.status),
    'PeerVpcId': obj.peerVpcId,
    'GameLiftVpcId': obj.gameLiftVpcId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftInstanceAccess' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftInstanceAccess(obj: GameLiftInstanceAccess | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetId': obj.fleetId,
    'InstanceId': obj.instanceId,
    'IpAddress': obj.ipAddress,
    'OperatingSystem': obj.operatingSystem,
    'Credentials': toJson_GameLiftInstanceCredentials(obj.credentials),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftTargetConfiguration
 */
export interface GameLiftTargetConfiguration {
  /**
   * @schema GameLiftTargetConfiguration#TargetValue
   */
  readonly targetValue?: number;

}

/**
 * Converts an object of type 'GameLiftTargetConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftTargetConfiguration(obj: GameLiftTargetConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TargetValue': obj.targetValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftPlayerLatency' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftPlayerLatency(obj: GameLiftPlayerLatency | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PlayerId': obj.playerId,
    'RegionIdentifier': obj.regionIdentifier,
    'LatencyInMilliseconds': obj.latencyInMilliseconds,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftDesiredPlayerSession' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftDesiredPlayerSession(obj: GameLiftDesiredPlayerSession | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PlayerId': obj.playerId,
    'PlayerData': obj.playerData,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftPlayer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftPlayer(obj: GameLiftPlayer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PlayerId': obj.playerId,
    'PlayerAttributes': ((obj.playerAttributes) === undefined) ? undefined : (Object.entries(obj.playerAttributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_GameLiftAttributeValue(i[1]) }), {})),
    'Team': obj.team,
    'LatencyInMs': ((obj.latencyInMs) === undefined) ? undefined : (Object.entries(obj.latencyInMs).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftServerProcess
 */
export interface GameLiftServerProcess {
  /**
   * @schema GameLiftServerProcess#LaunchPath
   */
  readonly launchPath?: string;

  /**
   * @schema GameLiftServerProcess#Parameters
   */
  readonly parameters?: string;

  /**
   * @schema GameLiftServerProcess#ConcurrentExecutions
   */
  readonly concurrentExecutions?: number;

}

/**
 * Converts an object of type 'GameLiftServerProcess' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftServerProcess(obj: GameLiftServerProcess | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LaunchPath': obj.launchPath,
    'Parameters': obj.parameters,
    'ConcurrentExecutions': obj.concurrentExecutions,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GameLiftTargetTrackingConfiguration
 */
export interface GameLiftTargetTrackingConfiguration {
  /**
   * @schema GameLiftTargetTrackingConfiguration#TargetValue
   */
  readonly targetValue?: number;

}

/**
 * Converts an object of type 'GameLiftTargetTrackingConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftTargetTrackingConfiguration(obj: GameLiftTargetTrackingConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TargetValue': obj.targetValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftEc2InstanceCounts' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftEc2InstanceCounts(obj: GameLiftEc2InstanceCounts | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DESIRED': obj.desired,
    'MINIMUM': obj.minimum,
    'MAXIMUM': obj.maximum,
    'PENDING': obj.pending,
    'ACTIVE': obj.active,
    'IDLE': obj.idle,
    'TERMINATING': obj.terminating,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftPlacedPlayerSession' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftPlacedPlayerSession(obj: GameLiftPlacedPlayerSession | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PlayerId': obj.playerId,
    'PlayerSessionId': obj.playerSessionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftGameSessionConnectionInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftGameSessionConnectionInfo(obj: GameLiftGameSessionConnectionInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GameSessionArn': obj.gameSessionArn,
    'IpAddress': obj.ipAddress,
    'DnsName': obj.dnsName,
    'Port': obj.port,
    'MatchedPlayerSessions': obj.matchedPlayerSessions?.map(y => toJson_GameLiftMatchedPlayerSession(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftVpcPeeringConnectionStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftVpcPeeringConnectionStatus(obj: GameLiftVpcPeeringConnectionStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Code': obj.code,
    'Message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftInstanceCredentials' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftInstanceCredentials(obj: GameLiftInstanceCredentials | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
    'Secret': obj.secret,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'GameLiftAttributeValue' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftAttributeValue(obj: GameLiftAttributeValue | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S': obj.s,
    'N': obj.n,
    'SL': obj.sl?.map(y => y),
    'SDM': ((obj.sdm) === undefined) ? undefined : (Object.entries(obj.sdm).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

/**
 * Converts an object of type 'GameLiftMatchedPlayerSession' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GameLiftMatchedPlayerSession(obj: GameLiftMatchedPlayerSession | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PlayerId': obj.playerId,
    'PlayerSessionId': obj.playerSessionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
