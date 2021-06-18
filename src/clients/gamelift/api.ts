import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class GameLiftClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public acceptMatch(input: shapes.GameLiftAcceptMatchInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'acceptMatch',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.AcceptMatch'),
        parameters: {
          TicketId: input.ticketId,
          PlayerIds: input.playerIds,
          AcceptanceType: input.acceptanceType,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AcceptMatch', props);
  }

  public claimGameServer(input: shapes.GameLiftClaimGameServerInput): GameLiftClaimGameServer {
    return new GameLiftClaimGameServer(this, 'ClaimGameServer', this.__resources, input);
  }

  public createAlias(input: shapes.GameLiftCreateAliasInput): GameLiftCreateAlias {
    return new GameLiftCreateAlias(this, 'CreateAlias', this.__resources, input);
  }

  public createBuild(input: shapes.GameLiftCreateBuildInput): GameLiftCreateBuild {
    return new GameLiftCreateBuild(this, 'CreateBuild', this.__resources, input);
  }

  public createFleet(input: shapes.GameLiftCreateFleetInput): GameLiftCreateFleet {
    return new GameLiftCreateFleet(this, 'CreateFleet', this.__resources, input);
  }

  public createGameServerGroup(input: shapes.GameLiftCreateGameServerGroupInput): GameLiftCreateGameServerGroup {
    return new GameLiftCreateGameServerGroup(this, 'CreateGameServerGroup', this.__resources, input);
  }

  public createGameSession(input: shapes.GameLiftCreateGameSessionInput): GameLiftCreateGameSession {
    return new GameLiftCreateGameSession(this, 'CreateGameSession', this.__resources, input);
  }

  public createGameSessionQueue(input: shapes.GameLiftCreateGameSessionQueueInput): GameLiftCreateGameSessionQueue {
    return new GameLiftCreateGameSessionQueue(this, 'CreateGameSessionQueue', this.__resources, input);
  }

  public createMatchmakingConfiguration(input: shapes.GameLiftCreateMatchmakingConfigurationInput): GameLiftCreateMatchmakingConfiguration {
    return new GameLiftCreateMatchmakingConfiguration(this, 'CreateMatchmakingConfiguration', this.__resources, input);
  }

  public createMatchmakingRuleSet(input: shapes.GameLiftCreateMatchmakingRuleSetInput): GameLiftCreateMatchmakingRuleSet {
    return new GameLiftCreateMatchmakingRuleSet(this, 'CreateMatchmakingRuleSet', this.__resources, input);
  }

  public createPlayerSession(input: shapes.GameLiftCreatePlayerSessionInput): GameLiftCreatePlayerSession {
    return new GameLiftCreatePlayerSession(this, 'CreatePlayerSession', this.__resources, input);
  }

  public createPlayerSessions(input: shapes.GameLiftCreatePlayerSessionsInput): GameLiftCreatePlayerSessions {
    return new GameLiftCreatePlayerSessions(this, 'CreatePlayerSessions', this.__resources, input);
  }

  public createScript(input: shapes.GameLiftCreateScriptInput): GameLiftCreateScript {
    return new GameLiftCreateScript(this, 'CreateScript', this.__resources, input);
  }

  public createVpcPeeringAuthorization(input: shapes.GameLiftCreateVpcPeeringAuthorizationInput): GameLiftCreateVpcPeeringAuthorization {
    return new GameLiftCreateVpcPeeringAuthorization(this, 'CreateVpcPeeringAuthorization', this.__resources, input);
  }

  public createVpcPeeringConnection(input: shapes.GameLiftCreateVpcPeeringConnectionInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVpcPeeringConnection',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateVpcPeeringConnection'),
        parameters: {
          FleetId: input.fleetId,
          PeerVpcAwsAccountId: input.peerVpcAwsAccountId,
          PeerVpcId: input.peerVpcId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreateVpcPeeringConnection', props);
  }

  public deleteAlias(input: shapes.GameLiftDeleteAliasInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAlias',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DeleteAlias'),
        parameters: {
          AliasId: input.aliasId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteAlias', props);
  }

  public deleteBuild(input: shapes.GameLiftDeleteBuildInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBuild',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DeleteBuild'),
        parameters: {
          BuildId: input.buildId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteBuild', props);
  }

  public deleteFleet(input: shapes.GameLiftDeleteFleetInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFleet',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DeleteFleet'),
        parameters: {
          FleetId: input.fleetId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteFleet', props);
  }

  public deleteGameServerGroup(input: shapes.GameLiftDeleteGameServerGroupInput): GameLiftDeleteGameServerGroup {
    return new GameLiftDeleteGameServerGroup(this, 'DeleteGameServerGroup', this.__resources, input);
  }

  public deleteGameSessionQueue(input: shapes.GameLiftDeleteGameSessionQueueInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteGameSessionQueue',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DeleteGameSessionQueue'),
        parameters: {
          Name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteGameSessionQueue', props);
  }

  public deleteMatchmakingConfiguration(input: shapes.GameLiftDeleteMatchmakingConfigurationInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteMatchmakingConfiguration',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DeleteMatchmakingConfiguration'),
        parameters: {
          Name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteMatchmakingConfiguration', props);
  }

  public deleteMatchmakingRuleSet(input: shapes.GameLiftDeleteMatchmakingRuleSetInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteMatchmakingRuleSet',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DeleteMatchmakingRuleSet'),
        parameters: {
          Name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteMatchmakingRuleSet', props);
  }

  public deleteScalingPolicy(input: shapes.GameLiftDeleteScalingPolicyInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteScalingPolicy',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DeleteScalingPolicy'),
        parameters: {
          Name: input.name,
          FleetId: input.fleetId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteScalingPolicy', props);
  }

  public deleteScript(input: shapes.GameLiftDeleteScriptInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteScript',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DeleteScript'),
        parameters: {
          ScriptId: input.scriptId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteScript', props);
  }

  public deleteVpcPeeringAuthorization(input: shapes.GameLiftDeleteVpcPeeringAuthorizationInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteVpcPeeringAuthorization',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DeleteVpcPeeringAuthorization'),
        parameters: {
          GameLiftAwsAccountId: input.gameLiftAwsAccountId,
          PeerVpcId: input.peerVpcId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteVpcPeeringAuthorization', props);
  }

  public deleteVpcPeeringConnection(input: shapes.GameLiftDeleteVpcPeeringConnectionInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteVpcPeeringConnection',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DeleteVpcPeeringConnection'),
        parameters: {
          FleetId: input.fleetId,
          VpcPeeringConnectionId: input.vpcPeeringConnectionId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteVpcPeeringConnection', props);
  }

  public deregisterGameServer(input: shapes.GameLiftDeregisterGameServerInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterGameServer',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DeregisterGameServer'),
        parameters: {
          GameServerGroupName: input.gameServerGroupName,
          GameServerId: input.gameServerId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeregisterGameServer', props);
  }

  public describeAlias(input: shapes.GameLiftDescribeAliasInput): GameLiftDescribeAlias {
    return new GameLiftDescribeAlias(this, 'DescribeAlias', this.__resources, input);
  }

  public describeBuild(input: shapes.GameLiftDescribeBuildInput): GameLiftDescribeBuild {
    return new GameLiftDescribeBuild(this, 'DescribeBuild', this.__resources, input);
  }

  public describeEc2InstanceLimits(input: shapes.GameLiftDescribeEc2InstanceLimitsInput): GameLiftDescribeEc2InstanceLimits {
    return new GameLiftDescribeEc2InstanceLimits(this, 'DescribeEc2InstanceLimits', this.__resources, input);
  }

  public describeFleetAttributes(input: shapes.GameLiftDescribeFleetAttributesInput): GameLiftDescribeFleetAttributes {
    return new GameLiftDescribeFleetAttributes(this, 'DescribeFleetAttributes', this.__resources, input);
  }

  public describeFleetCapacity(input: shapes.GameLiftDescribeFleetCapacityInput): GameLiftDescribeFleetCapacity {
    return new GameLiftDescribeFleetCapacity(this, 'DescribeFleetCapacity', this.__resources, input);
  }

  public describeFleetEvents(input: shapes.GameLiftDescribeFleetEventsInput): GameLiftDescribeFleetEvents {
    return new GameLiftDescribeFleetEvents(this, 'DescribeFleetEvents', this.__resources, input);
  }

  public describeFleetPortSettings(input: shapes.GameLiftDescribeFleetPortSettingsInput): GameLiftDescribeFleetPortSettings {
    return new GameLiftDescribeFleetPortSettings(this, 'DescribeFleetPortSettings', this.__resources, input);
  }

  public describeFleetUtilization(input: shapes.GameLiftDescribeFleetUtilizationInput): GameLiftDescribeFleetUtilization {
    return new GameLiftDescribeFleetUtilization(this, 'DescribeFleetUtilization', this.__resources, input);
  }

  public describeGameServer(input: shapes.GameLiftDescribeGameServerInput): GameLiftDescribeGameServer {
    return new GameLiftDescribeGameServer(this, 'DescribeGameServer', this.__resources, input);
  }

  public describeGameServerGroup(input: shapes.GameLiftDescribeGameServerGroupInput): GameLiftDescribeGameServerGroup {
    return new GameLiftDescribeGameServerGroup(this, 'DescribeGameServerGroup', this.__resources, input);
  }

  public describeGameServerInstances(input: shapes.GameLiftDescribeGameServerInstancesInput): GameLiftDescribeGameServerInstances {
    return new GameLiftDescribeGameServerInstances(this, 'DescribeGameServerInstances', this.__resources, input);
  }

  public describeGameSessionDetails(input: shapes.GameLiftDescribeGameSessionDetailsInput): GameLiftDescribeGameSessionDetails {
    return new GameLiftDescribeGameSessionDetails(this, 'DescribeGameSessionDetails', this.__resources, input);
  }

  public describeGameSessionPlacement(input: shapes.GameLiftDescribeGameSessionPlacementInput): GameLiftDescribeGameSessionPlacement {
    return new GameLiftDescribeGameSessionPlacement(this, 'DescribeGameSessionPlacement', this.__resources, input);
  }

  public describeGameSessionQueues(input: shapes.GameLiftDescribeGameSessionQueuesInput): GameLiftDescribeGameSessionQueues {
    return new GameLiftDescribeGameSessionQueues(this, 'DescribeGameSessionQueues', this.__resources, input);
  }

  public describeGameSessions(input: shapes.GameLiftDescribeGameSessionsInput): GameLiftDescribeGameSessions {
    return new GameLiftDescribeGameSessions(this, 'DescribeGameSessions', this.__resources, input);
  }

  public describeInstances(input: shapes.GameLiftDescribeInstancesInput): GameLiftDescribeInstances {
    return new GameLiftDescribeInstances(this, 'DescribeInstances', this.__resources, input);
  }

  public describeMatchmaking(input: shapes.GameLiftDescribeMatchmakingInput): GameLiftDescribeMatchmaking {
    return new GameLiftDescribeMatchmaking(this, 'DescribeMatchmaking', this.__resources, input);
  }

  public describeMatchmakingConfigurations(input: shapes.GameLiftDescribeMatchmakingConfigurationsInput): GameLiftDescribeMatchmakingConfigurations {
    return new GameLiftDescribeMatchmakingConfigurations(this, 'DescribeMatchmakingConfigurations', this.__resources, input);
  }

  public describeMatchmakingRuleSets(input: shapes.GameLiftDescribeMatchmakingRuleSetsInput): GameLiftDescribeMatchmakingRuleSets {
    return new GameLiftDescribeMatchmakingRuleSets(this, 'DescribeMatchmakingRuleSets', this.__resources, input);
  }

  public describePlayerSessions(input: shapes.GameLiftDescribePlayerSessionsInput): GameLiftDescribePlayerSessions {
    return new GameLiftDescribePlayerSessions(this, 'DescribePlayerSessions', this.__resources, input);
  }

  public describeRuntimeConfiguration(input: shapes.GameLiftDescribeRuntimeConfigurationInput): GameLiftDescribeRuntimeConfiguration {
    return new GameLiftDescribeRuntimeConfiguration(this, 'DescribeRuntimeConfiguration', this.__resources, input);
  }

  public describeScalingPolicies(input: shapes.GameLiftDescribeScalingPoliciesInput): GameLiftDescribeScalingPolicies {
    return new GameLiftDescribeScalingPolicies(this, 'DescribeScalingPolicies', this.__resources, input);
  }

  public describeScript(input: shapes.GameLiftDescribeScriptInput): GameLiftDescribeScript {
    return new GameLiftDescribeScript(this, 'DescribeScript', this.__resources, input);
  }

  public describeVpcPeeringAuthorizations(): GameLiftDescribeVpcPeeringAuthorizations {
    return new GameLiftDescribeVpcPeeringAuthorizations(this, 'DescribeVpcPeeringAuthorizations', this.__resources);
  }

  public describeVpcPeeringConnections(input: shapes.GameLiftDescribeVpcPeeringConnectionsInput): GameLiftDescribeVpcPeeringConnections {
    return new GameLiftDescribeVpcPeeringConnections(this, 'DescribeVpcPeeringConnections', this.__resources, input);
  }

  public fetchGameSessionLogUrl(input: shapes.GameLiftGetGameSessionLogUrlInput): GameLiftFetchGameSessionLogUrl {
    return new GameLiftFetchGameSessionLogUrl(this, 'FetchGameSessionLogUrl', this.__resources, input);
  }

  public fetchInstanceAccess(input: shapes.GameLiftGetInstanceAccessInput): GameLiftFetchInstanceAccess {
    return new GameLiftFetchInstanceAccess(this, 'FetchInstanceAccess', this.__resources, input);
  }

  public listAliases(input: shapes.GameLiftListAliasesInput): GameLiftListAliases {
    return new GameLiftListAliases(this, 'ListAliases', this.__resources, input);
  }

  public listBuilds(input: shapes.GameLiftListBuildsInput): GameLiftListBuilds {
    return new GameLiftListBuilds(this, 'ListBuilds', this.__resources, input);
  }

  public listFleets(input: shapes.GameLiftListFleetsInput): GameLiftListFleets {
    return new GameLiftListFleets(this, 'ListFleets', this.__resources, input);
  }

  public listGameServerGroups(input: shapes.GameLiftListGameServerGroupsInput): GameLiftListGameServerGroups {
    return new GameLiftListGameServerGroups(this, 'ListGameServerGroups', this.__resources, input);
  }

  public listGameServers(input: shapes.GameLiftListGameServersInput): GameLiftListGameServers {
    return new GameLiftListGameServers(this, 'ListGameServers', this.__resources, input);
  }

  public listScripts(input: shapes.GameLiftListScriptsInput): GameLiftListScripts {
    return new GameLiftListScripts(this, 'ListScripts', this.__resources, input);
  }

  public listTagsForResource(input: shapes.GameLiftListTagsForResourceRequest): GameLiftListTagsForResource {
    return new GameLiftListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public putScalingPolicy(input: shapes.GameLiftPutScalingPolicyInput): GameLiftPutScalingPolicy {
    return new GameLiftPutScalingPolicy(this, 'PutScalingPolicy', this.__resources, input);
  }

  public registerGameServer(input: shapes.GameLiftRegisterGameServerInput): GameLiftRegisterGameServer {
    return new GameLiftRegisterGameServer(this, 'RegisterGameServer', this.__resources, input);
  }

  public requestUploadCredentials(input: shapes.GameLiftRequestUploadCredentialsInput): GameLiftRequestUploadCredentials {
    return new GameLiftRequestUploadCredentials(this, 'RequestUploadCredentials', this.__resources, input);
  }

  public resolveAlias(input: shapes.GameLiftResolveAliasInput): GameLiftResolveAlias {
    return new GameLiftResolveAlias(this, 'ResolveAlias', this.__resources, input);
  }

  public resumeGameServerGroup(input: shapes.GameLiftResumeGameServerGroupInput): GameLiftResumeGameServerGroup {
    return new GameLiftResumeGameServerGroup(this, 'ResumeGameServerGroup', this.__resources, input);
  }

  public searchGameSessions(input: shapes.GameLiftSearchGameSessionsInput): GameLiftSearchGameSessions {
    return new GameLiftSearchGameSessions(this, 'SearchGameSessions', this.__resources, input);
  }

  public startFleetActions(input: shapes.GameLiftStartFleetActionsInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startFleetActions',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StartFleetActions'),
        parameters: {
          FleetId: input.fleetId,
          Actions: input.actions,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StartFleetActions', props);
  }

  public startGameSessionPlacement(input: shapes.GameLiftStartGameSessionPlacementInput): GameLiftStartGameSessionPlacement {
    return new GameLiftStartGameSessionPlacement(this, 'StartGameSessionPlacement', this.__resources, input);
  }

  public startMatchBackfill(input: shapes.GameLiftStartMatchBackfillInput): GameLiftStartMatchBackfill {
    return new GameLiftStartMatchBackfill(this, 'StartMatchBackfill', this.__resources, input);
  }

  public startMatchmaking(input: shapes.GameLiftStartMatchmakingInput): GameLiftStartMatchmaking {
    return new GameLiftStartMatchmaking(this, 'StartMatchmaking', this.__resources, input);
  }

  public stopFleetActions(input: shapes.GameLiftStopFleetActionsInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopFleetActions',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StopFleetActions'),
        parameters: {
          FleetId: input.fleetId,
          Actions: input.actions,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StopFleetActions', props);
  }

  public stopGameSessionPlacement(input: shapes.GameLiftStopGameSessionPlacementInput): GameLiftStopGameSessionPlacement {
    return new GameLiftStopGameSessionPlacement(this, 'StopGameSessionPlacement', this.__resources, input);
  }

  public stopMatchmaking(input: shapes.GameLiftStopMatchmakingInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopMatchmaking',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StopMatchmaking'),
        parameters: {
          TicketId: input.ticketId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StopMatchmaking', props);
  }

  public suspendGameServerGroup(input: shapes.GameLiftSuspendGameServerGroupInput): GameLiftSuspendGameServerGroup {
    return new GameLiftSuspendGameServerGroup(this, 'SuspendGameServerGroup', this.__resources, input);
  }

  public tagResource(input: shapes.GameLiftTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.TagResource'),
        parameters: {
          ResourceARN: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.GameLiftUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UntagResource'),
        parameters: {
          ResourceARN: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateAlias(input: shapes.GameLiftUpdateAliasInput): GameLiftUpdateAlias {
    return new GameLiftUpdateAlias(this, 'UpdateAlias', this.__resources, input);
  }

  public updateBuild(input: shapes.GameLiftUpdateBuildInput): GameLiftUpdateBuild {
    return new GameLiftUpdateBuild(this, 'UpdateBuild', this.__resources, input);
  }

  public updateFleetAttributes(input: shapes.GameLiftUpdateFleetAttributesInput): GameLiftUpdateFleetAttributes {
    return new GameLiftUpdateFleetAttributes(this, 'UpdateFleetAttributes', this.__resources, input);
  }

  public updateFleetCapacity(input: shapes.GameLiftUpdateFleetCapacityInput): GameLiftUpdateFleetCapacity {
    return new GameLiftUpdateFleetCapacity(this, 'UpdateFleetCapacity', this.__resources, input);
  }

  public updateFleetPortSettings(input: shapes.GameLiftUpdateFleetPortSettingsInput): GameLiftUpdateFleetPortSettings {
    return new GameLiftUpdateFleetPortSettings(this, 'UpdateFleetPortSettings', this.__resources, input);
  }

  public updateGameServer(input: shapes.GameLiftUpdateGameServerInput): GameLiftUpdateGameServer {
    return new GameLiftUpdateGameServer(this, 'UpdateGameServer', this.__resources, input);
  }

  public updateGameServerGroup(input: shapes.GameLiftUpdateGameServerGroupInput): GameLiftUpdateGameServerGroup {
    return new GameLiftUpdateGameServerGroup(this, 'UpdateGameServerGroup', this.__resources, input);
  }

  public updateGameSession(input: shapes.GameLiftUpdateGameSessionInput): GameLiftUpdateGameSession {
    return new GameLiftUpdateGameSession(this, 'UpdateGameSession', this.__resources, input);
  }

  public updateGameSessionQueue(input: shapes.GameLiftUpdateGameSessionQueueInput): GameLiftUpdateGameSessionQueue {
    return new GameLiftUpdateGameSessionQueue(this, 'UpdateGameSessionQueue', this.__resources, input);
  }

  public updateMatchmakingConfiguration(input: shapes.GameLiftUpdateMatchmakingConfigurationInput): GameLiftUpdateMatchmakingConfiguration {
    return new GameLiftUpdateMatchmakingConfiguration(this, 'UpdateMatchmakingConfiguration', this.__resources, input);
  }

  public updateRuntimeConfiguration(input: shapes.GameLiftUpdateRuntimeConfigurationInput): GameLiftUpdateRuntimeConfiguration {
    return new GameLiftUpdateRuntimeConfiguration(this, 'UpdateRuntimeConfiguration', this.__resources, input);
  }

  public updateScript(input: shapes.GameLiftUpdateScriptInput): GameLiftUpdateScript {
    return new GameLiftUpdateScript(this, 'UpdateScript', this.__resources, input);
  }

  public validateMatchmakingRuleSet(input: shapes.GameLiftValidateMatchmakingRuleSetInput): GameLiftValidateMatchmakingRuleSet {
    return new GameLiftValidateMatchmakingRuleSet(this, 'ValidateMatchmakingRuleSet', this.__resources, input);
  }

}

export class GameLiftClaimGameServer extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftClaimGameServerInput) {
    super(scope, id);
  }

  public get gameServer(): GameLiftClaimGameServerGameServer {
    return new GameLiftClaimGameServerGameServer(this, 'GameServer', this.__resources, this.input);
  }

}

export class GameLiftClaimGameServerGameServer extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftClaimGameServerInput) {
    super(scope, id);
  }

  public get gameServerGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'claimGameServer',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.ClaimGameServer.GameServer.GameServerGroupName'),
        outputPath: 'GameServer.GameServerGroupName',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          GameServerId: this.input.gameServerId,
          GameServerData: this.input.gameServerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ClaimGameServer.GameServer.GameServerGroupName', props);
    return resource.getResponseField('GameServer.GameServerGroupName') as unknown as string;
  }

  public get gameServerGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'claimGameServer',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.ClaimGameServer.GameServer.GameServerGroupArn'),
        outputPath: 'GameServer.GameServerGroupArn',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          GameServerId: this.input.gameServerId,
          GameServerData: this.input.gameServerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ClaimGameServer.GameServer.GameServerGroupArn', props);
    return resource.getResponseField('GameServer.GameServerGroupArn') as unknown as string;
  }

  public get gameServerId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'claimGameServer',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.ClaimGameServer.GameServer.GameServerId'),
        outputPath: 'GameServer.GameServerId',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          GameServerId: this.input.gameServerId,
          GameServerData: this.input.gameServerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ClaimGameServer.GameServer.GameServerId', props);
    return resource.getResponseField('GameServer.GameServerId') as unknown as string;
  }

  public get instanceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'claimGameServer',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.ClaimGameServer.GameServer.InstanceId'),
        outputPath: 'GameServer.InstanceId',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          GameServerId: this.input.gameServerId,
          GameServerData: this.input.gameServerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ClaimGameServer.GameServer.InstanceId', props);
    return resource.getResponseField('GameServer.InstanceId') as unknown as string;
  }

  public get connectionInfo(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'claimGameServer',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.ClaimGameServer.GameServer.ConnectionInfo'),
        outputPath: 'GameServer.ConnectionInfo',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          GameServerId: this.input.gameServerId,
          GameServerData: this.input.gameServerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ClaimGameServer.GameServer.ConnectionInfo', props);
    return resource.getResponseField('GameServer.ConnectionInfo') as unknown as string;
  }

  public get gameServerData(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'claimGameServer',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.ClaimGameServer.GameServer.GameServerData'),
        outputPath: 'GameServer.GameServerData',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          GameServerId: this.input.gameServerId,
          GameServerData: this.input.gameServerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ClaimGameServer.GameServer.GameServerData', props);
    return resource.getResponseField('GameServer.GameServerData') as unknown as string;
  }

  public get claimStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'claimGameServer',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.ClaimGameServer.GameServer.ClaimStatus'),
        outputPath: 'GameServer.ClaimStatus',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          GameServerId: this.input.gameServerId,
          GameServerData: this.input.gameServerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ClaimGameServer.GameServer.ClaimStatus', props);
    return resource.getResponseField('GameServer.ClaimStatus') as unknown as string;
  }

  public get utilizationStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'claimGameServer',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.ClaimGameServer.GameServer.UtilizationStatus'),
        outputPath: 'GameServer.UtilizationStatus',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          GameServerId: this.input.gameServerId,
          GameServerData: this.input.gameServerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ClaimGameServer.GameServer.UtilizationStatus', props);
    return resource.getResponseField('GameServer.UtilizationStatus') as unknown as string;
  }

  public get registrationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'claimGameServer',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.ClaimGameServer.GameServer.RegistrationTime'),
        outputPath: 'GameServer.RegistrationTime',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          GameServerId: this.input.gameServerId,
          GameServerData: this.input.gameServerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ClaimGameServer.GameServer.RegistrationTime', props);
    return resource.getResponseField('GameServer.RegistrationTime') as unknown as string;
  }

  public get lastClaimTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'claimGameServer',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.ClaimGameServer.GameServer.LastClaimTime'),
        outputPath: 'GameServer.LastClaimTime',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          GameServerId: this.input.gameServerId,
          GameServerData: this.input.gameServerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ClaimGameServer.GameServer.LastClaimTime', props);
    return resource.getResponseField('GameServer.LastClaimTime') as unknown as string;
  }

  public get lastHealthCheckTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'claimGameServer',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.ClaimGameServer.GameServer.LastHealthCheckTime'),
        outputPath: 'GameServer.LastHealthCheckTime',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          GameServerId: this.input.gameServerId,
          GameServerData: this.input.gameServerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ClaimGameServer.GameServer.LastHealthCheckTime', props);
    return resource.getResponseField('GameServer.LastHealthCheckTime') as unknown as string;
  }

}

export class GameLiftCreateAlias extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftCreateAliasInput) {
    super(scope, id);
  }

  public get alias(): GameLiftCreateAliasAlias {
    return new GameLiftCreateAliasAlias(this, 'Alias', this.__resources, this.input);
  }

}

export class GameLiftCreateAliasAlias extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftCreateAliasInput) {
    super(scope, id);
  }

  public get aliasId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAlias',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateAlias.Alias.AliasId'),
        outputPath: 'Alias.AliasId',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          RoutingStrategy: {
            Type: this.input.routingStrategy.type,
            FleetId: this.input.routingStrategy.fleetId,
            Message: this.input.routingStrategy.message,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAlias.Alias.AliasId', props);
    return resource.getResponseField('Alias.AliasId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAlias',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateAlias.Alias.Name'),
        outputPath: 'Alias.Name',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          RoutingStrategy: {
            Type: this.input.routingStrategy.type,
            FleetId: this.input.routingStrategy.fleetId,
            Message: this.input.routingStrategy.message,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAlias.Alias.Name', props);
    return resource.getResponseField('Alias.Name') as unknown as string;
  }

  public get aliasArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAlias',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateAlias.Alias.AliasArn'),
        outputPath: 'Alias.AliasArn',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          RoutingStrategy: {
            Type: this.input.routingStrategy.type,
            FleetId: this.input.routingStrategy.fleetId,
            Message: this.input.routingStrategy.message,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAlias.Alias.AliasArn', props);
    return resource.getResponseField('Alias.AliasArn') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAlias',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateAlias.Alias.Description'),
        outputPath: 'Alias.Description',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          RoutingStrategy: {
            Type: this.input.routingStrategy.type,
            FleetId: this.input.routingStrategy.fleetId,
            Message: this.input.routingStrategy.message,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAlias.Alias.Description', props);
    return resource.getResponseField('Alias.Description') as unknown as string;
  }

  public get routingStrategy(): GameLiftCreateAliasAliasRoutingStrategy {
    return new GameLiftCreateAliasAliasRoutingStrategy(this, 'RoutingStrategy', this.__resources, this.input);
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAlias',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateAlias.Alias.CreationTime'),
        outputPath: 'Alias.CreationTime',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          RoutingStrategy: {
            Type: this.input.routingStrategy.type,
            FleetId: this.input.routingStrategy.fleetId,
            Message: this.input.routingStrategy.message,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAlias.Alias.CreationTime', props);
    return resource.getResponseField('Alias.CreationTime') as unknown as string;
  }

  public get lastUpdatedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAlias',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateAlias.Alias.LastUpdatedTime'),
        outputPath: 'Alias.LastUpdatedTime',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          RoutingStrategy: {
            Type: this.input.routingStrategy.type,
            FleetId: this.input.routingStrategy.fleetId,
            Message: this.input.routingStrategy.message,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAlias.Alias.LastUpdatedTime', props);
    return resource.getResponseField('Alias.LastUpdatedTime') as unknown as string;
  }

}

export class GameLiftCreateAliasAliasRoutingStrategy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftCreateAliasInput) {
    super(scope, id);
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAlias',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateAlias.Alias.RoutingStrategy.Type'),
        outputPath: 'Alias.RoutingStrategy.Type',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          RoutingStrategy: {
            Type: this.input.routingStrategy.type,
            FleetId: this.input.routingStrategy.fleetId,
            Message: this.input.routingStrategy.message,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAlias.Alias.RoutingStrategy.Type', props);
    return resource.getResponseField('Alias.RoutingStrategy.Type') as unknown as string;
  }

  public get fleetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAlias',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateAlias.Alias.RoutingStrategy.FleetId'),
        outputPath: 'Alias.RoutingStrategy.FleetId',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          RoutingStrategy: {
            Type: this.input.routingStrategy.type,
            FleetId: this.input.routingStrategy.fleetId,
            Message: this.input.routingStrategy.message,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAlias.Alias.RoutingStrategy.FleetId', props);
    return resource.getResponseField('Alias.RoutingStrategy.FleetId') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAlias',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateAlias.Alias.RoutingStrategy.Message'),
        outputPath: 'Alias.RoutingStrategy.Message',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          RoutingStrategy: {
            Type: this.input.routingStrategy.type,
            FleetId: this.input.routingStrategy.fleetId,
            Message: this.input.routingStrategy.message,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAlias.Alias.RoutingStrategy.Message', props);
    return resource.getResponseField('Alias.RoutingStrategy.Message') as unknown as string;
  }

}

export class GameLiftCreateBuild extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftCreateBuildInput) {
    super(scope, id);
  }

  public get build(): GameLiftCreateBuildBuild {
    return new GameLiftCreateBuildBuild(this, 'Build', this.__resources, this.input);
  }

  public get uploadCredentials(): GameLiftCreateBuildUploadCredentials {
    return new GameLiftCreateBuildUploadCredentials(this, 'UploadCredentials', this.__resources, this.input);
  }

  public get storageLocation(): GameLiftCreateBuildStorageLocation {
    return new GameLiftCreateBuildStorageLocation(this, 'StorageLocation', this.__resources, this.input);
  }

}

export class GameLiftCreateBuildBuild extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftCreateBuildInput) {
    super(scope, id);
  }

  public get buildId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBuild',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateBuild.Build.BuildId'),
        outputPath: 'Build.BuildId',
        parameters: {
          Name: this.input.name,
          Version: this.input.version,
          StorageLocation: {
            Bucket: this.input.storageLocation?.bucket,
            Key: this.input.storageLocation?.key,
            RoleArn: this.input.storageLocation?.roleArn,
            ObjectVersion: this.input.storageLocation?.objectVersion,
          },
          OperatingSystem: this.input.operatingSystem,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBuild.Build.BuildId', props);
    return resource.getResponseField('Build.BuildId') as unknown as string;
  }

  public get buildArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBuild',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateBuild.Build.BuildArn'),
        outputPath: 'Build.BuildArn',
        parameters: {
          Name: this.input.name,
          Version: this.input.version,
          StorageLocation: {
            Bucket: this.input.storageLocation?.bucket,
            Key: this.input.storageLocation?.key,
            RoleArn: this.input.storageLocation?.roleArn,
            ObjectVersion: this.input.storageLocation?.objectVersion,
          },
          OperatingSystem: this.input.operatingSystem,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBuild.Build.BuildArn', props);
    return resource.getResponseField('Build.BuildArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBuild',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateBuild.Build.Name'),
        outputPath: 'Build.Name',
        parameters: {
          Name: this.input.name,
          Version: this.input.version,
          StorageLocation: {
            Bucket: this.input.storageLocation?.bucket,
            Key: this.input.storageLocation?.key,
            RoleArn: this.input.storageLocation?.roleArn,
            ObjectVersion: this.input.storageLocation?.objectVersion,
          },
          OperatingSystem: this.input.operatingSystem,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBuild.Build.Name', props);
    return resource.getResponseField('Build.Name') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBuild',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateBuild.Build.Version'),
        outputPath: 'Build.Version',
        parameters: {
          Name: this.input.name,
          Version: this.input.version,
          StorageLocation: {
            Bucket: this.input.storageLocation?.bucket,
            Key: this.input.storageLocation?.key,
            RoleArn: this.input.storageLocation?.roleArn,
            ObjectVersion: this.input.storageLocation?.objectVersion,
          },
          OperatingSystem: this.input.operatingSystem,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBuild.Build.Version', props);
    return resource.getResponseField('Build.Version') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBuild',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateBuild.Build.Status'),
        outputPath: 'Build.Status',
        parameters: {
          Name: this.input.name,
          Version: this.input.version,
          StorageLocation: {
            Bucket: this.input.storageLocation?.bucket,
            Key: this.input.storageLocation?.key,
            RoleArn: this.input.storageLocation?.roleArn,
            ObjectVersion: this.input.storageLocation?.objectVersion,
          },
          OperatingSystem: this.input.operatingSystem,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBuild.Build.Status', props);
    return resource.getResponseField('Build.Status') as unknown as string;
  }

  public get sizeOnDisk(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBuild',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateBuild.Build.SizeOnDisk'),
        outputPath: 'Build.SizeOnDisk',
        parameters: {
          Name: this.input.name,
          Version: this.input.version,
          StorageLocation: {
            Bucket: this.input.storageLocation?.bucket,
            Key: this.input.storageLocation?.key,
            RoleArn: this.input.storageLocation?.roleArn,
            ObjectVersion: this.input.storageLocation?.objectVersion,
          },
          OperatingSystem: this.input.operatingSystem,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBuild.Build.SizeOnDisk', props);
    return resource.getResponseField('Build.SizeOnDisk') as unknown as number;
  }

  public get operatingSystem(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBuild',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateBuild.Build.OperatingSystem'),
        outputPath: 'Build.OperatingSystem',
        parameters: {
          Name: this.input.name,
          Version: this.input.version,
          StorageLocation: {
            Bucket: this.input.storageLocation?.bucket,
            Key: this.input.storageLocation?.key,
            RoleArn: this.input.storageLocation?.roleArn,
            ObjectVersion: this.input.storageLocation?.objectVersion,
          },
          OperatingSystem: this.input.operatingSystem,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBuild.Build.OperatingSystem', props);
    return resource.getResponseField('Build.OperatingSystem') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBuild',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateBuild.Build.CreationTime'),
        outputPath: 'Build.CreationTime',
        parameters: {
          Name: this.input.name,
          Version: this.input.version,
          StorageLocation: {
            Bucket: this.input.storageLocation?.bucket,
            Key: this.input.storageLocation?.key,
            RoleArn: this.input.storageLocation?.roleArn,
            ObjectVersion: this.input.storageLocation?.objectVersion,
          },
          OperatingSystem: this.input.operatingSystem,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBuild.Build.CreationTime', props);
    return resource.getResponseField('Build.CreationTime') as unknown as string;
  }

}

export class GameLiftCreateBuildUploadCredentials extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftCreateBuildInput) {
    super(scope, id);
  }

  public get accessKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBuild',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateBuild.UploadCredentials.AccessKeyId'),
        outputPath: 'UploadCredentials.AccessKeyId',
        parameters: {
          Name: this.input.name,
          Version: this.input.version,
          StorageLocation: {
            Bucket: this.input.storageLocation?.bucket,
            Key: this.input.storageLocation?.key,
            RoleArn: this.input.storageLocation?.roleArn,
            ObjectVersion: this.input.storageLocation?.objectVersion,
          },
          OperatingSystem: this.input.operatingSystem,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBuild.UploadCredentials.AccessKeyId', props);
    return resource.getResponseField('UploadCredentials.AccessKeyId') as unknown as string;
  }

  public get secretAccessKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBuild',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateBuild.UploadCredentials.SecretAccessKey'),
        outputPath: 'UploadCredentials.SecretAccessKey',
        parameters: {
          Name: this.input.name,
          Version: this.input.version,
          StorageLocation: {
            Bucket: this.input.storageLocation?.bucket,
            Key: this.input.storageLocation?.key,
            RoleArn: this.input.storageLocation?.roleArn,
            ObjectVersion: this.input.storageLocation?.objectVersion,
          },
          OperatingSystem: this.input.operatingSystem,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBuild.UploadCredentials.SecretAccessKey', props);
    return resource.getResponseField('UploadCredentials.SecretAccessKey') as unknown as string;
  }

  public get sessionToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBuild',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateBuild.UploadCredentials.SessionToken'),
        outputPath: 'UploadCredentials.SessionToken',
        parameters: {
          Name: this.input.name,
          Version: this.input.version,
          StorageLocation: {
            Bucket: this.input.storageLocation?.bucket,
            Key: this.input.storageLocation?.key,
            RoleArn: this.input.storageLocation?.roleArn,
            ObjectVersion: this.input.storageLocation?.objectVersion,
          },
          OperatingSystem: this.input.operatingSystem,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBuild.UploadCredentials.SessionToken', props);
    return resource.getResponseField('UploadCredentials.SessionToken') as unknown as string;
  }

}

export class GameLiftCreateBuildStorageLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftCreateBuildInput) {
    super(scope, id);
  }

  public get bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBuild',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateBuild.StorageLocation.Bucket'),
        outputPath: 'StorageLocation.Bucket',
        parameters: {
          Name: this.input.name,
          Version: this.input.version,
          StorageLocation: {
            Bucket: this.input.storageLocation?.bucket,
            Key: this.input.storageLocation?.key,
            RoleArn: this.input.storageLocation?.roleArn,
            ObjectVersion: this.input.storageLocation?.objectVersion,
          },
          OperatingSystem: this.input.operatingSystem,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBuild.StorageLocation.Bucket', props);
    return resource.getResponseField('StorageLocation.Bucket') as unknown as string;
  }

  public get key(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBuild',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateBuild.StorageLocation.Key'),
        outputPath: 'StorageLocation.Key',
        parameters: {
          Name: this.input.name,
          Version: this.input.version,
          StorageLocation: {
            Bucket: this.input.storageLocation?.bucket,
            Key: this.input.storageLocation?.key,
            RoleArn: this.input.storageLocation?.roleArn,
            ObjectVersion: this.input.storageLocation?.objectVersion,
          },
          OperatingSystem: this.input.operatingSystem,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBuild.StorageLocation.Key', props);
    return resource.getResponseField('StorageLocation.Key') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBuild',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateBuild.StorageLocation.RoleArn'),
        outputPath: 'StorageLocation.RoleArn',
        parameters: {
          Name: this.input.name,
          Version: this.input.version,
          StorageLocation: {
            Bucket: this.input.storageLocation?.bucket,
            Key: this.input.storageLocation?.key,
            RoleArn: this.input.storageLocation?.roleArn,
            ObjectVersion: this.input.storageLocation?.objectVersion,
          },
          OperatingSystem: this.input.operatingSystem,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBuild.StorageLocation.RoleArn', props);
    return resource.getResponseField('StorageLocation.RoleArn') as unknown as string;
  }

  public get objectVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBuild',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateBuild.StorageLocation.ObjectVersion'),
        outputPath: 'StorageLocation.ObjectVersion',
        parameters: {
          Name: this.input.name,
          Version: this.input.version,
          StorageLocation: {
            Bucket: this.input.storageLocation?.bucket,
            Key: this.input.storageLocation?.key,
            RoleArn: this.input.storageLocation?.roleArn,
            ObjectVersion: this.input.storageLocation?.objectVersion,
          },
          OperatingSystem: this.input.operatingSystem,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBuild.StorageLocation.ObjectVersion', props);
    return resource.getResponseField('StorageLocation.ObjectVersion') as unknown as string;
  }

}

export class GameLiftCreateFleet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftCreateFleetInput) {
    super(scope, id);
  }

  public get fleetAttributes(): GameLiftCreateFleetFleetAttributes {
    return new GameLiftCreateFleetFleetAttributes(this, 'FleetAttributes', this.__resources, this.input);
  }

}

export class GameLiftCreateFleetFleetAttributes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftCreateFleetInput) {
    super(scope, id);
  }

  public get fleetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFleet',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateFleet.FleetAttributes.FleetId'),
        outputPath: 'FleetAttributes.FleetId',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          BuildId: this.input.buildId,
          ScriptId: this.input.scriptId,
          ServerLaunchPath: this.input.serverLaunchPath,
          ServerLaunchParameters: this.input.serverLaunchParameters,
          LogPaths: this.input.logPaths,
          EC2InstanceType: this.input.ec2InstanceType,
          EC2InboundPermissions: this.input.ec2InboundPermissions,
          NewGameSessionProtectionPolicy: this.input.newGameSessionProtectionPolicy,
          RuntimeConfiguration: {
            ServerProcesses: this.input.runtimeConfiguration?.serverProcesses,
            MaxConcurrentGameSessionActivations: this.input.runtimeConfiguration?.maxConcurrentGameSessionActivations,
            GameSessionActivationTimeoutSeconds: this.input.runtimeConfiguration?.gameSessionActivationTimeoutSeconds,
          },
          ResourceCreationLimitPolicy: {
            NewGameSessionsPerCreator: this.input.resourceCreationLimitPolicy?.newGameSessionsPerCreator,
            PolicyPeriodInMinutes: this.input.resourceCreationLimitPolicy?.policyPeriodInMinutes,
          },
          MetricGroups: this.input.metricGroups,
          PeerVpcAwsAccountId: this.input.peerVpcAwsAccountId,
          PeerVpcId: this.input.peerVpcId,
          FleetType: this.input.fleetType,
          InstanceRoleArn: this.input.instanceRoleArn,
          CertificateConfiguration: {
            CertificateType: this.input.certificateConfiguration?.certificateType,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFleet.FleetAttributes.FleetId', props);
    return resource.getResponseField('FleetAttributes.FleetId') as unknown as string;
  }

  public get fleetArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFleet',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateFleet.FleetAttributes.FleetArn'),
        outputPath: 'FleetAttributes.FleetArn',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          BuildId: this.input.buildId,
          ScriptId: this.input.scriptId,
          ServerLaunchPath: this.input.serverLaunchPath,
          ServerLaunchParameters: this.input.serverLaunchParameters,
          LogPaths: this.input.logPaths,
          EC2InstanceType: this.input.ec2InstanceType,
          EC2InboundPermissions: this.input.ec2InboundPermissions,
          NewGameSessionProtectionPolicy: this.input.newGameSessionProtectionPolicy,
          RuntimeConfiguration: {
            ServerProcesses: this.input.runtimeConfiguration?.serverProcesses,
            MaxConcurrentGameSessionActivations: this.input.runtimeConfiguration?.maxConcurrentGameSessionActivations,
            GameSessionActivationTimeoutSeconds: this.input.runtimeConfiguration?.gameSessionActivationTimeoutSeconds,
          },
          ResourceCreationLimitPolicy: {
            NewGameSessionsPerCreator: this.input.resourceCreationLimitPolicy?.newGameSessionsPerCreator,
            PolicyPeriodInMinutes: this.input.resourceCreationLimitPolicy?.policyPeriodInMinutes,
          },
          MetricGroups: this.input.metricGroups,
          PeerVpcAwsAccountId: this.input.peerVpcAwsAccountId,
          PeerVpcId: this.input.peerVpcId,
          FleetType: this.input.fleetType,
          InstanceRoleArn: this.input.instanceRoleArn,
          CertificateConfiguration: {
            CertificateType: this.input.certificateConfiguration?.certificateType,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFleet.FleetAttributes.FleetArn', props);
    return resource.getResponseField('FleetAttributes.FleetArn') as unknown as string;
  }

  public get fleetType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFleet',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateFleet.FleetAttributes.FleetType'),
        outputPath: 'FleetAttributes.FleetType',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          BuildId: this.input.buildId,
          ScriptId: this.input.scriptId,
          ServerLaunchPath: this.input.serverLaunchPath,
          ServerLaunchParameters: this.input.serverLaunchParameters,
          LogPaths: this.input.logPaths,
          EC2InstanceType: this.input.ec2InstanceType,
          EC2InboundPermissions: this.input.ec2InboundPermissions,
          NewGameSessionProtectionPolicy: this.input.newGameSessionProtectionPolicy,
          RuntimeConfiguration: {
            ServerProcesses: this.input.runtimeConfiguration?.serverProcesses,
            MaxConcurrentGameSessionActivations: this.input.runtimeConfiguration?.maxConcurrentGameSessionActivations,
            GameSessionActivationTimeoutSeconds: this.input.runtimeConfiguration?.gameSessionActivationTimeoutSeconds,
          },
          ResourceCreationLimitPolicy: {
            NewGameSessionsPerCreator: this.input.resourceCreationLimitPolicy?.newGameSessionsPerCreator,
            PolicyPeriodInMinutes: this.input.resourceCreationLimitPolicy?.policyPeriodInMinutes,
          },
          MetricGroups: this.input.metricGroups,
          PeerVpcAwsAccountId: this.input.peerVpcAwsAccountId,
          PeerVpcId: this.input.peerVpcId,
          FleetType: this.input.fleetType,
          InstanceRoleArn: this.input.instanceRoleArn,
          CertificateConfiguration: {
            CertificateType: this.input.certificateConfiguration?.certificateType,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFleet.FleetAttributes.FleetType', props);
    return resource.getResponseField('FleetAttributes.FleetType') as unknown as string;
  }

  public get instanceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFleet',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateFleet.FleetAttributes.InstanceType'),
        outputPath: 'FleetAttributes.InstanceType',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          BuildId: this.input.buildId,
          ScriptId: this.input.scriptId,
          ServerLaunchPath: this.input.serverLaunchPath,
          ServerLaunchParameters: this.input.serverLaunchParameters,
          LogPaths: this.input.logPaths,
          EC2InstanceType: this.input.ec2InstanceType,
          EC2InboundPermissions: this.input.ec2InboundPermissions,
          NewGameSessionProtectionPolicy: this.input.newGameSessionProtectionPolicy,
          RuntimeConfiguration: {
            ServerProcesses: this.input.runtimeConfiguration?.serverProcesses,
            MaxConcurrentGameSessionActivations: this.input.runtimeConfiguration?.maxConcurrentGameSessionActivations,
            GameSessionActivationTimeoutSeconds: this.input.runtimeConfiguration?.gameSessionActivationTimeoutSeconds,
          },
          ResourceCreationLimitPolicy: {
            NewGameSessionsPerCreator: this.input.resourceCreationLimitPolicy?.newGameSessionsPerCreator,
            PolicyPeriodInMinutes: this.input.resourceCreationLimitPolicy?.policyPeriodInMinutes,
          },
          MetricGroups: this.input.metricGroups,
          PeerVpcAwsAccountId: this.input.peerVpcAwsAccountId,
          PeerVpcId: this.input.peerVpcId,
          FleetType: this.input.fleetType,
          InstanceRoleArn: this.input.instanceRoleArn,
          CertificateConfiguration: {
            CertificateType: this.input.certificateConfiguration?.certificateType,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFleet.FleetAttributes.InstanceType', props);
    return resource.getResponseField('FleetAttributes.InstanceType') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFleet',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateFleet.FleetAttributes.Description'),
        outputPath: 'FleetAttributes.Description',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          BuildId: this.input.buildId,
          ScriptId: this.input.scriptId,
          ServerLaunchPath: this.input.serverLaunchPath,
          ServerLaunchParameters: this.input.serverLaunchParameters,
          LogPaths: this.input.logPaths,
          EC2InstanceType: this.input.ec2InstanceType,
          EC2InboundPermissions: this.input.ec2InboundPermissions,
          NewGameSessionProtectionPolicy: this.input.newGameSessionProtectionPolicy,
          RuntimeConfiguration: {
            ServerProcesses: this.input.runtimeConfiguration?.serverProcesses,
            MaxConcurrentGameSessionActivations: this.input.runtimeConfiguration?.maxConcurrentGameSessionActivations,
            GameSessionActivationTimeoutSeconds: this.input.runtimeConfiguration?.gameSessionActivationTimeoutSeconds,
          },
          ResourceCreationLimitPolicy: {
            NewGameSessionsPerCreator: this.input.resourceCreationLimitPolicy?.newGameSessionsPerCreator,
            PolicyPeriodInMinutes: this.input.resourceCreationLimitPolicy?.policyPeriodInMinutes,
          },
          MetricGroups: this.input.metricGroups,
          PeerVpcAwsAccountId: this.input.peerVpcAwsAccountId,
          PeerVpcId: this.input.peerVpcId,
          FleetType: this.input.fleetType,
          InstanceRoleArn: this.input.instanceRoleArn,
          CertificateConfiguration: {
            CertificateType: this.input.certificateConfiguration?.certificateType,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFleet.FleetAttributes.Description', props);
    return resource.getResponseField('FleetAttributes.Description') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFleet',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateFleet.FleetAttributes.Name'),
        outputPath: 'FleetAttributes.Name',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          BuildId: this.input.buildId,
          ScriptId: this.input.scriptId,
          ServerLaunchPath: this.input.serverLaunchPath,
          ServerLaunchParameters: this.input.serverLaunchParameters,
          LogPaths: this.input.logPaths,
          EC2InstanceType: this.input.ec2InstanceType,
          EC2InboundPermissions: this.input.ec2InboundPermissions,
          NewGameSessionProtectionPolicy: this.input.newGameSessionProtectionPolicy,
          RuntimeConfiguration: {
            ServerProcesses: this.input.runtimeConfiguration?.serverProcesses,
            MaxConcurrentGameSessionActivations: this.input.runtimeConfiguration?.maxConcurrentGameSessionActivations,
            GameSessionActivationTimeoutSeconds: this.input.runtimeConfiguration?.gameSessionActivationTimeoutSeconds,
          },
          ResourceCreationLimitPolicy: {
            NewGameSessionsPerCreator: this.input.resourceCreationLimitPolicy?.newGameSessionsPerCreator,
            PolicyPeriodInMinutes: this.input.resourceCreationLimitPolicy?.policyPeriodInMinutes,
          },
          MetricGroups: this.input.metricGroups,
          PeerVpcAwsAccountId: this.input.peerVpcAwsAccountId,
          PeerVpcId: this.input.peerVpcId,
          FleetType: this.input.fleetType,
          InstanceRoleArn: this.input.instanceRoleArn,
          CertificateConfiguration: {
            CertificateType: this.input.certificateConfiguration?.certificateType,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFleet.FleetAttributes.Name', props);
    return resource.getResponseField('FleetAttributes.Name') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFleet',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateFleet.FleetAttributes.CreationTime'),
        outputPath: 'FleetAttributes.CreationTime',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          BuildId: this.input.buildId,
          ScriptId: this.input.scriptId,
          ServerLaunchPath: this.input.serverLaunchPath,
          ServerLaunchParameters: this.input.serverLaunchParameters,
          LogPaths: this.input.logPaths,
          EC2InstanceType: this.input.ec2InstanceType,
          EC2InboundPermissions: this.input.ec2InboundPermissions,
          NewGameSessionProtectionPolicy: this.input.newGameSessionProtectionPolicy,
          RuntimeConfiguration: {
            ServerProcesses: this.input.runtimeConfiguration?.serverProcesses,
            MaxConcurrentGameSessionActivations: this.input.runtimeConfiguration?.maxConcurrentGameSessionActivations,
            GameSessionActivationTimeoutSeconds: this.input.runtimeConfiguration?.gameSessionActivationTimeoutSeconds,
          },
          ResourceCreationLimitPolicy: {
            NewGameSessionsPerCreator: this.input.resourceCreationLimitPolicy?.newGameSessionsPerCreator,
            PolicyPeriodInMinutes: this.input.resourceCreationLimitPolicy?.policyPeriodInMinutes,
          },
          MetricGroups: this.input.metricGroups,
          PeerVpcAwsAccountId: this.input.peerVpcAwsAccountId,
          PeerVpcId: this.input.peerVpcId,
          FleetType: this.input.fleetType,
          InstanceRoleArn: this.input.instanceRoleArn,
          CertificateConfiguration: {
            CertificateType: this.input.certificateConfiguration?.certificateType,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFleet.FleetAttributes.CreationTime', props);
    return resource.getResponseField('FleetAttributes.CreationTime') as unknown as string;
  }

  public get terminationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFleet',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateFleet.FleetAttributes.TerminationTime'),
        outputPath: 'FleetAttributes.TerminationTime',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          BuildId: this.input.buildId,
          ScriptId: this.input.scriptId,
          ServerLaunchPath: this.input.serverLaunchPath,
          ServerLaunchParameters: this.input.serverLaunchParameters,
          LogPaths: this.input.logPaths,
          EC2InstanceType: this.input.ec2InstanceType,
          EC2InboundPermissions: this.input.ec2InboundPermissions,
          NewGameSessionProtectionPolicy: this.input.newGameSessionProtectionPolicy,
          RuntimeConfiguration: {
            ServerProcesses: this.input.runtimeConfiguration?.serverProcesses,
            MaxConcurrentGameSessionActivations: this.input.runtimeConfiguration?.maxConcurrentGameSessionActivations,
            GameSessionActivationTimeoutSeconds: this.input.runtimeConfiguration?.gameSessionActivationTimeoutSeconds,
          },
          ResourceCreationLimitPolicy: {
            NewGameSessionsPerCreator: this.input.resourceCreationLimitPolicy?.newGameSessionsPerCreator,
            PolicyPeriodInMinutes: this.input.resourceCreationLimitPolicy?.policyPeriodInMinutes,
          },
          MetricGroups: this.input.metricGroups,
          PeerVpcAwsAccountId: this.input.peerVpcAwsAccountId,
          PeerVpcId: this.input.peerVpcId,
          FleetType: this.input.fleetType,
          InstanceRoleArn: this.input.instanceRoleArn,
          CertificateConfiguration: {
            CertificateType: this.input.certificateConfiguration?.certificateType,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFleet.FleetAttributes.TerminationTime', props);
    return resource.getResponseField('FleetAttributes.TerminationTime') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFleet',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateFleet.FleetAttributes.Status'),
        outputPath: 'FleetAttributes.Status',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          BuildId: this.input.buildId,
          ScriptId: this.input.scriptId,
          ServerLaunchPath: this.input.serverLaunchPath,
          ServerLaunchParameters: this.input.serverLaunchParameters,
          LogPaths: this.input.logPaths,
          EC2InstanceType: this.input.ec2InstanceType,
          EC2InboundPermissions: this.input.ec2InboundPermissions,
          NewGameSessionProtectionPolicy: this.input.newGameSessionProtectionPolicy,
          RuntimeConfiguration: {
            ServerProcesses: this.input.runtimeConfiguration?.serverProcesses,
            MaxConcurrentGameSessionActivations: this.input.runtimeConfiguration?.maxConcurrentGameSessionActivations,
            GameSessionActivationTimeoutSeconds: this.input.runtimeConfiguration?.gameSessionActivationTimeoutSeconds,
          },
          ResourceCreationLimitPolicy: {
            NewGameSessionsPerCreator: this.input.resourceCreationLimitPolicy?.newGameSessionsPerCreator,
            PolicyPeriodInMinutes: this.input.resourceCreationLimitPolicy?.policyPeriodInMinutes,
          },
          MetricGroups: this.input.metricGroups,
          PeerVpcAwsAccountId: this.input.peerVpcAwsAccountId,
          PeerVpcId: this.input.peerVpcId,
          FleetType: this.input.fleetType,
          InstanceRoleArn: this.input.instanceRoleArn,
          CertificateConfiguration: {
            CertificateType: this.input.certificateConfiguration?.certificateType,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFleet.FleetAttributes.Status', props);
    return resource.getResponseField('FleetAttributes.Status') as unknown as string;
  }

  public get buildId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFleet',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateFleet.FleetAttributes.BuildId'),
        outputPath: 'FleetAttributes.BuildId',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          BuildId: this.input.buildId,
          ScriptId: this.input.scriptId,
          ServerLaunchPath: this.input.serverLaunchPath,
          ServerLaunchParameters: this.input.serverLaunchParameters,
          LogPaths: this.input.logPaths,
          EC2InstanceType: this.input.ec2InstanceType,
          EC2InboundPermissions: this.input.ec2InboundPermissions,
          NewGameSessionProtectionPolicy: this.input.newGameSessionProtectionPolicy,
          RuntimeConfiguration: {
            ServerProcesses: this.input.runtimeConfiguration?.serverProcesses,
            MaxConcurrentGameSessionActivations: this.input.runtimeConfiguration?.maxConcurrentGameSessionActivations,
            GameSessionActivationTimeoutSeconds: this.input.runtimeConfiguration?.gameSessionActivationTimeoutSeconds,
          },
          ResourceCreationLimitPolicy: {
            NewGameSessionsPerCreator: this.input.resourceCreationLimitPolicy?.newGameSessionsPerCreator,
            PolicyPeriodInMinutes: this.input.resourceCreationLimitPolicy?.policyPeriodInMinutes,
          },
          MetricGroups: this.input.metricGroups,
          PeerVpcAwsAccountId: this.input.peerVpcAwsAccountId,
          PeerVpcId: this.input.peerVpcId,
          FleetType: this.input.fleetType,
          InstanceRoleArn: this.input.instanceRoleArn,
          CertificateConfiguration: {
            CertificateType: this.input.certificateConfiguration?.certificateType,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFleet.FleetAttributes.BuildId', props);
    return resource.getResponseField('FleetAttributes.BuildId') as unknown as string;
  }

  public get buildArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFleet',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateFleet.FleetAttributes.BuildArn'),
        outputPath: 'FleetAttributes.BuildArn',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          BuildId: this.input.buildId,
          ScriptId: this.input.scriptId,
          ServerLaunchPath: this.input.serverLaunchPath,
          ServerLaunchParameters: this.input.serverLaunchParameters,
          LogPaths: this.input.logPaths,
          EC2InstanceType: this.input.ec2InstanceType,
          EC2InboundPermissions: this.input.ec2InboundPermissions,
          NewGameSessionProtectionPolicy: this.input.newGameSessionProtectionPolicy,
          RuntimeConfiguration: {
            ServerProcesses: this.input.runtimeConfiguration?.serverProcesses,
            MaxConcurrentGameSessionActivations: this.input.runtimeConfiguration?.maxConcurrentGameSessionActivations,
            GameSessionActivationTimeoutSeconds: this.input.runtimeConfiguration?.gameSessionActivationTimeoutSeconds,
          },
          ResourceCreationLimitPolicy: {
            NewGameSessionsPerCreator: this.input.resourceCreationLimitPolicy?.newGameSessionsPerCreator,
            PolicyPeriodInMinutes: this.input.resourceCreationLimitPolicy?.policyPeriodInMinutes,
          },
          MetricGroups: this.input.metricGroups,
          PeerVpcAwsAccountId: this.input.peerVpcAwsAccountId,
          PeerVpcId: this.input.peerVpcId,
          FleetType: this.input.fleetType,
          InstanceRoleArn: this.input.instanceRoleArn,
          CertificateConfiguration: {
            CertificateType: this.input.certificateConfiguration?.certificateType,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFleet.FleetAttributes.BuildArn', props);
    return resource.getResponseField('FleetAttributes.BuildArn') as unknown as string;
  }

  public get scriptId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFleet',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateFleet.FleetAttributes.ScriptId'),
        outputPath: 'FleetAttributes.ScriptId',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          BuildId: this.input.buildId,
          ScriptId: this.input.scriptId,
          ServerLaunchPath: this.input.serverLaunchPath,
          ServerLaunchParameters: this.input.serverLaunchParameters,
          LogPaths: this.input.logPaths,
          EC2InstanceType: this.input.ec2InstanceType,
          EC2InboundPermissions: this.input.ec2InboundPermissions,
          NewGameSessionProtectionPolicy: this.input.newGameSessionProtectionPolicy,
          RuntimeConfiguration: {
            ServerProcesses: this.input.runtimeConfiguration?.serverProcesses,
            MaxConcurrentGameSessionActivations: this.input.runtimeConfiguration?.maxConcurrentGameSessionActivations,
            GameSessionActivationTimeoutSeconds: this.input.runtimeConfiguration?.gameSessionActivationTimeoutSeconds,
          },
          ResourceCreationLimitPolicy: {
            NewGameSessionsPerCreator: this.input.resourceCreationLimitPolicy?.newGameSessionsPerCreator,
            PolicyPeriodInMinutes: this.input.resourceCreationLimitPolicy?.policyPeriodInMinutes,
          },
          MetricGroups: this.input.metricGroups,
          PeerVpcAwsAccountId: this.input.peerVpcAwsAccountId,
          PeerVpcId: this.input.peerVpcId,
          FleetType: this.input.fleetType,
          InstanceRoleArn: this.input.instanceRoleArn,
          CertificateConfiguration: {
            CertificateType: this.input.certificateConfiguration?.certificateType,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFleet.FleetAttributes.ScriptId', props);
    return resource.getResponseField('FleetAttributes.ScriptId') as unknown as string;
  }

  public get scriptArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFleet',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateFleet.FleetAttributes.ScriptArn'),
        outputPath: 'FleetAttributes.ScriptArn',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          BuildId: this.input.buildId,
          ScriptId: this.input.scriptId,
          ServerLaunchPath: this.input.serverLaunchPath,
          ServerLaunchParameters: this.input.serverLaunchParameters,
          LogPaths: this.input.logPaths,
          EC2InstanceType: this.input.ec2InstanceType,
          EC2InboundPermissions: this.input.ec2InboundPermissions,
          NewGameSessionProtectionPolicy: this.input.newGameSessionProtectionPolicy,
          RuntimeConfiguration: {
            ServerProcesses: this.input.runtimeConfiguration?.serverProcesses,
            MaxConcurrentGameSessionActivations: this.input.runtimeConfiguration?.maxConcurrentGameSessionActivations,
            GameSessionActivationTimeoutSeconds: this.input.runtimeConfiguration?.gameSessionActivationTimeoutSeconds,
          },
          ResourceCreationLimitPolicy: {
            NewGameSessionsPerCreator: this.input.resourceCreationLimitPolicy?.newGameSessionsPerCreator,
            PolicyPeriodInMinutes: this.input.resourceCreationLimitPolicy?.policyPeriodInMinutes,
          },
          MetricGroups: this.input.metricGroups,
          PeerVpcAwsAccountId: this.input.peerVpcAwsAccountId,
          PeerVpcId: this.input.peerVpcId,
          FleetType: this.input.fleetType,
          InstanceRoleArn: this.input.instanceRoleArn,
          CertificateConfiguration: {
            CertificateType: this.input.certificateConfiguration?.certificateType,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFleet.FleetAttributes.ScriptArn', props);
    return resource.getResponseField('FleetAttributes.ScriptArn') as unknown as string;
  }

  public get serverLaunchPath(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFleet',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateFleet.FleetAttributes.ServerLaunchPath'),
        outputPath: 'FleetAttributes.ServerLaunchPath',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          BuildId: this.input.buildId,
          ScriptId: this.input.scriptId,
          ServerLaunchPath: this.input.serverLaunchPath,
          ServerLaunchParameters: this.input.serverLaunchParameters,
          LogPaths: this.input.logPaths,
          EC2InstanceType: this.input.ec2InstanceType,
          EC2InboundPermissions: this.input.ec2InboundPermissions,
          NewGameSessionProtectionPolicy: this.input.newGameSessionProtectionPolicy,
          RuntimeConfiguration: {
            ServerProcesses: this.input.runtimeConfiguration?.serverProcesses,
            MaxConcurrentGameSessionActivations: this.input.runtimeConfiguration?.maxConcurrentGameSessionActivations,
            GameSessionActivationTimeoutSeconds: this.input.runtimeConfiguration?.gameSessionActivationTimeoutSeconds,
          },
          ResourceCreationLimitPolicy: {
            NewGameSessionsPerCreator: this.input.resourceCreationLimitPolicy?.newGameSessionsPerCreator,
            PolicyPeriodInMinutes: this.input.resourceCreationLimitPolicy?.policyPeriodInMinutes,
          },
          MetricGroups: this.input.metricGroups,
          PeerVpcAwsAccountId: this.input.peerVpcAwsAccountId,
          PeerVpcId: this.input.peerVpcId,
          FleetType: this.input.fleetType,
          InstanceRoleArn: this.input.instanceRoleArn,
          CertificateConfiguration: {
            CertificateType: this.input.certificateConfiguration?.certificateType,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFleet.FleetAttributes.ServerLaunchPath', props);
    return resource.getResponseField('FleetAttributes.ServerLaunchPath') as unknown as string;
  }

  public get serverLaunchParameters(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFleet',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateFleet.FleetAttributes.ServerLaunchParameters'),
        outputPath: 'FleetAttributes.ServerLaunchParameters',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          BuildId: this.input.buildId,
          ScriptId: this.input.scriptId,
          ServerLaunchPath: this.input.serverLaunchPath,
          ServerLaunchParameters: this.input.serverLaunchParameters,
          LogPaths: this.input.logPaths,
          EC2InstanceType: this.input.ec2InstanceType,
          EC2InboundPermissions: this.input.ec2InboundPermissions,
          NewGameSessionProtectionPolicy: this.input.newGameSessionProtectionPolicy,
          RuntimeConfiguration: {
            ServerProcesses: this.input.runtimeConfiguration?.serverProcesses,
            MaxConcurrentGameSessionActivations: this.input.runtimeConfiguration?.maxConcurrentGameSessionActivations,
            GameSessionActivationTimeoutSeconds: this.input.runtimeConfiguration?.gameSessionActivationTimeoutSeconds,
          },
          ResourceCreationLimitPolicy: {
            NewGameSessionsPerCreator: this.input.resourceCreationLimitPolicy?.newGameSessionsPerCreator,
            PolicyPeriodInMinutes: this.input.resourceCreationLimitPolicy?.policyPeriodInMinutes,
          },
          MetricGroups: this.input.metricGroups,
          PeerVpcAwsAccountId: this.input.peerVpcAwsAccountId,
          PeerVpcId: this.input.peerVpcId,
          FleetType: this.input.fleetType,
          InstanceRoleArn: this.input.instanceRoleArn,
          CertificateConfiguration: {
            CertificateType: this.input.certificateConfiguration?.certificateType,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFleet.FleetAttributes.ServerLaunchParameters', props);
    return resource.getResponseField('FleetAttributes.ServerLaunchParameters') as unknown as string;
  }

  public get logPaths(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFleet',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateFleet.FleetAttributes.LogPaths'),
        outputPath: 'FleetAttributes.LogPaths',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          BuildId: this.input.buildId,
          ScriptId: this.input.scriptId,
          ServerLaunchPath: this.input.serverLaunchPath,
          ServerLaunchParameters: this.input.serverLaunchParameters,
          LogPaths: this.input.logPaths,
          EC2InstanceType: this.input.ec2InstanceType,
          EC2InboundPermissions: this.input.ec2InboundPermissions,
          NewGameSessionProtectionPolicy: this.input.newGameSessionProtectionPolicy,
          RuntimeConfiguration: {
            ServerProcesses: this.input.runtimeConfiguration?.serverProcesses,
            MaxConcurrentGameSessionActivations: this.input.runtimeConfiguration?.maxConcurrentGameSessionActivations,
            GameSessionActivationTimeoutSeconds: this.input.runtimeConfiguration?.gameSessionActivationTimeoutSeconds,
          },
          ResourceCreationLimitPolicy: {
            NewGameSessionsPerCreator: this.input.resourceCreationLimitPolicy?.newGameSessionsPerCreator,
            PolicyPeriodInMinutes: this.input.resourceCreationLimitPolicy?.policyPeriodInMinutes,
          },
          MetricGroups: this.input.metricGroups,
          PeerVpcAwsAccountId: this.input.peerVpcAwsAccountId,
          PeerVpcId: this.input.peerVpcId,
          FleetType: this.input.fleetType,
          InstanceRoleArn: this.input.instanceRoleArn,
          CertificateConfiguration: {
            CertificateType: this.input.certificateConfiguration?.certificateType,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFleet.FleetAttributes.LogPaths', props);
    return resource.getResponseField('FleetAttributes.LogPaths') as unknown as string[];
  }

  public get newGameSessionProtectionPolicy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFleet',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateFleet.FleetAttributes.NewGameSessionProtectionPolicy'),
        outputPath: 'FleetAttributes.NewGameSessionProtectionPolicy',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          BuildId: this.input.buildId,
          ScriptId: this.input.scriptId,
          ServerLaunchPath: this.input.serverLaunchPath,
          ServerLaunchParameters: this.input.serverLaunchParameters,
          LogPaths: this.input.logPaths,
          EC2InstanceType: this.input.ec2InstanceType,
          EC2InboundPermissions: this.input.ec2InboundPermissions,
          NewGameSessionProtectionPolicy: this.input.newGameSessionProtectionPolicy,
          RuntimeConfiguration: {
            ServerProcesses: this.input.runtimeConfiguration?.serverProcesses,
            MaxConcurrentGameSessionActivations: this.input.runtimeConfiguration?.maxConcurrentGameSessionActivations,
            GameSessionActivationTimeoutSeconds: this.input.runtimeConfiguration?.gameSessionActivationTimeoutSeconds,
          },
          ResourceCreationLimitPolicy: {
            NewGameSessionsPerCreator: this.input.resourceCreationLimitPolicy?.newGameSessionsPerCreator,
            PolicyPeriodInMinutes: this.input.resourceCreationLimitPolicy?.policyPeriodInMinutes,
          },
          MetricGroups: this.input.metricGroups,
          PeerVpcAwsAccountId: this.input.peerVpcAwsAccountId,
          PeerVpcId: this.input.peerVpcId,
          FleetType: this.input.fleetType,
          InstanceRoleArn: this.input.instanceRoleArn,
          CertificateConfiguration: {
            CertificateType: this.input.certificateConfiguration?.certificateType,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFleet.FleetAttributes.NewGameSessionProtectionPolicy', props);
    return resource.getResponseField('FleetAttributes.NewGameSessionProtectionPolicy') as unknown as string;
  }

  public get operatingSystem(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFleet',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateFleet.FleetAttributes.OperatingSystem'),
        outputPath: 'FleetAttributes.OperatingSystem',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          BuildId: this.input.buildId,
          ScriptId: this.input.scriptId,
          ServerLaunchPath: this.input.serverLaunchPath,
          ServerLaunchParameters: this.input.serverLaunchParameters,
          LogPaths: this.input.logPaths,
          EC2InstanceType: this.input.ec2InstanceType,
          EC2InboundPermissions: this.input.ec2InboundPermissions,
          NewGameSessionProtectionPolicy: this.input.newGameSessionProtectionPolicy,
          RuntimeConfiguration: {
            ServerProcesses: this.input.runtimeConfiguration?.serverProcesses,
            MaxConcurrentGameSessionActivations: this.input.runtimeConfiguration?.maxConcurrentGameSessionActivations,
            GameSessionActivationTimeoutSeconds: this.input.runtimeConfiguration?.gameSessionActivationTimeoutSeconds,
          },
          ResourceCreationLimitPolicy: {
            NewGameSessionsPerCreator: this.input.resourceCreationLimitPolicy?.newGameSessionsPerCreator,
            PolicyPeriodInMinutes: this.input.resourceCreationLimitPolicy?.policyPeriodInMinutes,
          },
          MetricGroups: this.input.metricGroups,
          PeerVpcAwsAccountId: this.input.peerVpcAwsAccountId,
          PeerVpcId: this.input.peerVpcId,
          FleetType: this.input.fleetType,
          InstanceRoleArn: this.input.instanceRoleArn,
          CertificateConfiguration: {
            CertificateType: this.input.certificateConfiguration?.certificateType,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFleet.FleetAttributes.OperatingSystem', props);
    return resource.getResponseField('FleetAttributes.OperatingSystem') as unknown as string;
  }

  public get resourceCreationLimitPolicy(): GameLiftCreateFleetFleetAttributesResourceCreationLimitPolicy {
    return new GameLiftCreateFleetFleetAttributesResourceCreationLimitPolicy(this, 'ResourceCreationLimitPolicy', this.__resources, this.input);
  }

  public get metricGroups(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFleet',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateFleet.FleetAttributes.MetricGroups'),
        outputPath: 'FleetAttributes.MetricGroups',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          BuildId: this.input.buildId,
          ScriptId: this.input.scriptId,
          ServerLaunchPath: this.input.serverLaunchPath,
          ServerLaunchParameters: this.input.serverLaunchParameters,
          LogPaths: this.input.logPaths,
          EC2InstanceType: this.input.ec2InstanceType,
          EC2InboundPermissions: this.input.ec2InboundPermissions,
          NewGameSessionProtectionPolicy: this.input.newGameSessionProtectionPolicy,
          RuntimeConfiguration: {
            ServerProcesses: this.input.runtimeConfiguration?.serverProcesses,
            MaxConcurrentGameSessionActivations: this.input.runtimeConfiguration?.maxConcurrentGameSessionActivations,
            GameSessionActivationTimeoutSeconds: this.input.runtimeConfiguration?.gameSessionActivationTimeoutSeconds,
          },
          ResourceCreationLimitPolicy: {
            NewGameSessionsPerCreator: this.input.resourceCreationLimitPolicy?.newGameSessionsPerCreator,
            PolicyPeriodInMinutes: this.input.resourceCreationLimitPolicy?.policyPeriodInMinutes,
          },
          MetricGroups: this.input.metricGroups,
          PeerVpcAwsAccountId: this.input.peerVpcAwsAccountId,
          PeerVpcId: this.input.peerVpcId,
          FleetType: this.input.fleetType,
          InstanceRoleArn: this.input.instanceRoleArn,
          CertificateConfiguration: {
            CertificateType: this.input.certificateConfiguration?.certificateType,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFleet.FleetAttributes.MetricGroups', props);
    return resource.getResponseField('FleetAttributes.MetricGroups') as unknown as string[];
  }

  public get stoppedActions(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFleet',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateFleet.FleetAttributes.StoppedActions'),
        outputPath: 'FleetAttributes.StoppedActions',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          BuildId: this.input.buildId,
          ScriptId: this.input.scriptId,
          ServerLaunchPath: this.input.serverLaunchPath,
          ServerLaunchParameters: this.input.serverLaunchParameters,
          LogPaths: this.input.logPaths,
          EC2InstanceType: this.input.ec2InstanceType,
          EC2InboundPermissions: this.input.ec2InboundPermissions,
          NewGameSessionProtectionPolicy: this.input.newGameSessionProtectionPolicy,
          RuntimeConfiguration: {
            ServerProcesses: this.input.runtimeConfiguration?.serverProcesses,
            MaxConcurrentGameSessionActivations: this.input.runtimeConfiguration?.maxConcurrentGameSessionActivations,
            GameSessionActivationTimeoutSeconds: this.input.runtimeConfiguration?.gameSessionActivationTimeoutSeconds,
          },
          ResourceCreationLimitPolicy: {
            NewGameSessionsPerCreator: this.input.resourceCreationLimitPolicy?.newGameSessionsPerCreator,
            PolicyPeriodInMinutes: this.input.resourceCreationLimitPolicy?.policyPeriodInMinutes,
          },
          MetricGroups: this.input.metricGroups,
          PeerVpcAwsAccountId: this.input.peerVpcAwsAccountId,
          PeerVpcId: this.input.peerVpcId,
          FleetType: this.input.fleetType,
          InstanceRoleArn: this.input.instanceRoleArn,
          CertificateConfiguration: {
            CertificateType: this.input.certificateConfiguration?.certificateType,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFleet.FleetAttributes.StoppedActions', props);
    return resource.getResponseField('FleetAttributes.StoppedActions') as unknown as string[];
  }

  public get instanceRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFleet',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateFleet.FleetAttributes.InstanceRoleArn'),
        outputPath: 'FleetAttributes.InstanceRoleArn',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          BuildId: this.input.buildId,
          ScriptId: this.input.scriptId,
          ServerLaunchPath: this.input.serverLaunchPath,
          ServerLaunchParameters: this.input.serverLaunchParameters,
          LogPaths: this.input.logPaths,
          EC2InstanceType: this.input.ec2InstanceType,
          EC2InboundPermissions: this.input.ec2InboundPermissions,
          NewGameSessionProtectionPolicy: this.input.newGameSessionProtectionPolicy,
          RuntimeConfiguration: {
            ServerProcesses: this.input.runtimeConfiguration?.serverProcesses,
            MaxConcurrentGameSessionActivations: this.input.runtimeConfiguration?.maxConcurrentGameSessionActivations,
            GameSessionActivationTimeoutSeconds: this.input.runtimeConfiguration?.gameSessionActivationTimeoutSeconds,
          },
          ResourceCreationLimitPolicy: {
            NewGameSessionsPerCreator: this.input.resourceCreationLimitPolicy?.newGameSessionsPerCreator,
            PolicyPeriodInMinutes: this.input.resourceCreationLimitPolicy?.policyPeriodInMinutes,
          },
          MetricGroups: this.input.metricGroups,
          PeerVpcAwsAccountId: this.input.peerVpcAwsAccountId,
          PeerVpcId: this.input.peerVpcId,
          FleetType: this.input.fleetType,
          InstanceRoleArn: this.input.instanceRoleArn,
          CertificateConfiguration: {
            CertificateType: this.input.certificateConfiguration?.certificateType,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFleet.FleetAttributes.InstanceRoleArn', props);
    return resource.getResponseField('FleetAttributes.InstanceRoleArn') as unknown as string;
  }

  public get certificateConfiguration(): GameLiftCreateFleetFleetAttributesCertificateConfiguration {
    return new GameLiftCreateFleetFleetAttributesCertificateConfiguration(this, 'CertificateConfiguration', this.__resources, this.input);
  }

}

export class GameLiftCreateFleetFleetAttributesResourceCreationLimitPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftCreateFleetInput) {
    super(scope, id);
  }

  public get newGameSessionsPerCreator(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFleet',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateFleet.FleetAttributes.ResourceCreationLimitPolicy.NewGameSessionsPerCreator'),
        outputPath: 'FleetAttributes.ResourceCreationLimitPolicy.NewGameSessionsPerCreator',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          BuildId: this.input.buildId,
          ScriptId: this.input.scriptId,
          ServerLaunchPath: this.input.serverLaunchPath,
          ServerLaunchParameters: this.input.serverLaunchParameters,
          LogPaths: this.input.logPaths,
          EC2InstanceType: this.input.ec2InstanceType,
          EC2InboundPermissions: this.input.ec2InboundPermissions,
          NewGameSessionProtectionPolicy: this.input.newGameSessionProtectionPolicy,
          RuntimeConfiguration: {
            ServerProcesses: this.input.runtimeConfiguration?.serverProcesses,
            MaxConcurrentGameSessionActivations: this.input.runtimeConfiguration?.maxConcurrentGameSessionActivations,
            GameSessionActivationTimeoutSeconds: this.input.runtimeConfiguration?.gameSessionActivationTimeoutSeconds,
          },
          ResourceCreationLimitPolicy: {
            NewGameSessionsPerCreator: this.input.resourceCreationLimitPolicy?.newGameSessionsPerCreator,
            PolicyPeriodInMinutes: this.input.resourceCreationLimitPolicy?.policyPeriodInMinutes,
          },
          MetricGroups: this.input.metricGroups,
          PeerVpcAwsAccountId: this.input.peerVpcAwsAccountId,
          PeerVpcId: this.input.peerVpcId,
          FleetType: this.input.fleetType,
          InstanceRoleArn: this.input.instanceRoleArn,
          CertificateConfiguration: {
            CertificateType: this.input.certificateConfiguration?.certificateType,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFleet.FleetAttributes.ResourceCreationLimitPolicy.NewGameSessionsPerCreator', props);
    return resource.getResponseField('FleetAttributes.ResourceCreationLimitPolicy.NewGameSessionsPerCreator') as unknown as number;
  }

  public get policyPeriodInMinutes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFleet',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateFleet.FleetAttributes.ResourceCreationLimitPolicy.PolicyPeriodInMinutes'),
        outputPath: 'FleetAttributes.ResourceCreationLimitPolicy.PolicyPeriodInMinutes',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          BuildId: this.input.buildId,
          ScriptId: this.input.scriptId,
          ServerLaunchPath: this.input.serverLaunchPath,
          ServerLaunchParameters: this.input.serverLaunchParameters,
          LogPaths: this.input.logPaths,
          EC2InstanceType: this.input.ec2InstanceType,
          EC2InboundPermissions: this.input.ec2InboundPermissions,
          NewGameSessionProtectionPolicy: this.input.newGameSessionProtectionPolicy,
          RuntimeConfiguration: {
            ServerProcesses: this.input.runtimeConfiguration?.serverProcesses,
            MaxConcurrentGameSessionActivations: this.input.runtimeConfiguration?.maxConcurrentGameSessionActivations,
            GameSessionActivationTimeoutSeconds: this.input.runtimeConfiguration?.gameSessionActivationTimeoutSeconds,
          },
          ResourceCreationLimitPolicy: {
            NewGameSessionsPerCreator: this.input.resourceCreationLimitPolicy?.newGameSessionsPerCreator,
            PolicyPeriodInMinutes: this.input.resourceCreationLimitPolicy?.policyPeriodInMinutes,
          },
          MetricGroups: this.input.metricGroups,
          PeerVpcAwsAccountId: this.input.peerVpcAwsAccountId,
          PeerVpcId: this.input.peerVpcId,
          FleetType: this.input.fleetType,
          InstanceRoleArn: this.input.instanceRoleArn,
          CertificateConfiguration: {
            CertificateType: this.input.certificateConfiguration?.certificateType,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFleet.FleetAttributes.ResourceCreationLimitPolicy.PolicyPeriodInMinutes', props);
    return resource.getResponseField('FleetAttributes.ResourceCreationLimitPolicy.PolicyPeriodInMinutes') as unknown as number;
  }

}

export class GameLiftCreateFleetFleetAttributesCertificateConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftCreateFleetInput) {
    super(scope, id);
  }

  public get certificateType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFleet',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateFleet.FleetAttributes.CertificateConfiguration.CertificateType'),
        outputPath: 'FleetAttributes.CertificateConfiguration.CertificateType',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          BuildId: this.input.buildId,
          ScriptId: this.input.scriptId,
          ServerLaunchPath: this.input.serverLaunchPath,
          ServerLaunchParameters: this.input.serverLaunchParameters,
          LogPaths: this.input.logPaths,
          EC2InstanceType: this.input.ec2InstanceType,
          EC2InboundPermissions: this.input.ec2InboundPermissions,
          NewGameSessionProtectionPolicy: this.input.newGameSessionProtectionPolicy,
          RuntimeConfiguration: {
            ServerProcesses: this.input.runtimeConfiguration?.serverProcesses,
            MaxConcurrentGameSessionActivations: this.input.runtimeConfiguration?.maxConcurrentGameSessionActivations,
            GameSessionActivationTimeoutSeconds: this.input.runtimeConfiguration?.gameSessionActivationTimeoutSeconds,
          },
          ResourceCreationLimitPolicy: {
            NewGameSessionsPerCreator: this.input.resourceCreationLimitPolicy?.newGameSessionsPerCreator,
            PolicyPeriodInMinutes: this.input.resourceCreationLimitPolicy?.policyPeriodInMinutes,
          },
          MetricGroups: this.input.metricGroups,
          PeerVpcAwsAccountId: this.input.peerVpcAwsAccountId,
          PeerVpcId: this.input.peerVpcId,
          FleetType: this.input.fleetType,
          InstanceRoleArn: this.input.instanceRoleArn,
          CertificateConfiguration: {
            CertificateType: this.input.certificateConfiguration?.certificateType,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFleet.FleetAttributes.CertificateConfiguration.CertificateType', props);
    return resource.getResponseField('FleetAttributes.CertificateConfiguration.CertificateType') as unknown as string;
  }

}

export class GameLiftCreateGameServerGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftCreateGameServerGroupInput) {
    super(scope, id);
  }

  public get gameServerGroup(): GameLiftCreateGameServerGroupGameServerGroup {
    return new GameLiftCreateGameServerGroupGameServerGroup(this, 'GameServerGroup', this.__resources, this.input);
  }

}

export class GameLiftCreateGameServerGroupGameServerGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftCreateGameServerGroupInput) {
    super(scope, id);
  }

  public get gameServerGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateGameServerGroup.GameServerGroup.GameServerGroupName'),
        outputPath: 'GameServerGroup.GameServerGroupName',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          RoleArn: this.input.roleArn,
          MinSize: this.input.minSize,
          MaxSize: this.input.maxSize,
          LaunchTemplate: {
            LaunchTemplateId: this.input.launchTemplate.launchTemplateId,
            LaunchTemplateName: this.input.launchTemplate.launchTemplateName,
            Version: this.input.launchTemplate.version,
          },
          InstanceDefinitions: this.input.instanceDefinitions,
          AutoScalingPolicy: {
            EstimatedInstanceWarmup: this.input.autoScalingPolicy?.estimatedInstanceWarmup,
            TargetTrackingConfiguration: {
              TargetValue: this.input.autoScalingPolicy?.targetTrackingConfiguration.targetValue,
            },
          },
          BalancingStrategy: this.input.balancingStrategy,
          GameServerProtectionPolicy: this.input.gameServerProtectionPolicy,
          VpcSubnets: this.input.vpcSubnets,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGameServerGroup.GameServerGroup.GameServerGroupName', props);
    return resource.getResponseField('GameServerGroup.GameServerGroupName') as unknown as string;
  }

  public get gameServerGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateGameServerGroup.GameServerGroup.GameServerGroupArn'),
        outputPath: 'GameServerGroup.GameServerGroupArn',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          RoleArn: this.input.roleArn,
          MinSize: this.input.minSize,
          MaxSize: this.input.maxSize,
          LaunchTemplate: {
            LaunchTemplateId: this.input.launchTemplate.launchTemplateId,
            LaunchTemplateName: this.input.launchTemplate.launchTemplateName,
            Version: this.input.launchTemplate.version,
          },
          InstanceDefinitions: this.input.instanceDefinitions,
          AutoScalingPolicy: {
            EstimatedInstanceWarmup: this.input.autoScalingPolicy?.estimatedInstanceWarmup,
            TargetTrackingConfiguration: {
              TargetValue: this.input.autoScalingPolicy?.targetTrackingConfiguration.targetValue,
            },
          },
          BalancingStrategy: this.input.balancingStrategy,
          GameServerProtectionPolicy: this.input.gameServerProtectionPolicy,
          VpcSubnets: this.input.vpcSubnets,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGameServerGroup.GameServerGroup.GameServerGroupArn', props);
    return resource.getResponseField('GameServerGroup.GameServerGroupArn') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateGameServerGroup.GameServerGroup.RoleArn'),
        outputPath: 'GameServerGroup.RoleArn',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          RoleArn: this.input.roleArn,
          MinSize: this.input.minSize,
          MaxSize: this.input.maxSize,
          LaunchTemplate: {
            LaunchTemplateId: this.input.launchTemplate.launchTemplateId,
            LaunchTemplateName: this.input.launchTemplate.launchTemplateName,
            Version: this.input.launchTemplate.version,
          },
          InstanceDefinitions: this.input.instanceDefinitions,
          AutoScalingPolicy: {
            EstimatedInstanceWarmup: this.input.autoScalingPolicy?.estimatedInstanceWarmup,
            TargetTrackingConfiguration: {
              TargetValue: this.input.autoScalingPolicy?.targetTrackingConfiguration.targetValue,
            },
          },
          BalancingStrategy: this.input.balancingStrategy,
          GameServerProtectionPolicy: this.input.gameServerProtectionPolicy,
          VpcSubnets: this.input.vpcSubnets,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGameServerGroup.GameServerGroup.RoleArn', props);
    return resource.getResponseField('GameServerGroup.RoleArn') as unknown as string;
  }

  public get instanceDefinitions(): shapes.GameLiftInstanceDefinition[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateGameServerGroup.GameServerGroup.InstanceDefinitions'),
        outputPath: 'GameServerGroup.InstanceDefinitions',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          RoleArn: this.input.roleArn,
          MinSize: this.input.minSize,
          MaxSize: this.input.maxSize,
          LaunchTemplate: {
            LaunchTemplateId: this.input.launchTemplate.launchTemplateId,
            LaunchTemplateName: this.input.launchTemplate.launchTemplateName,
            Version: this.input.launchTemplate.version,
          },
          InstanceDefinitions: this.input.instanceDefinitions,
          AutoScalingPolicy: {
            EstimatedInstanceWarmup: this.input.autoScalingPolicy?.estimatedInstanceWarmup,
            TargetTrackingConfiguration: {
              TargetValue: this.input.autoScalingPolicy?.targetTrackingConfiguration.targetValue,
            },
          },
          BalancingStrategy: this.input.balancingStrategy,
          GameServerProtectionPolicy: this.input.gameServerProtectionPolicy,
          VpcSubnets: this.input.vpcSubnets,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGameServerGroup.GameServerGroup.InstanceDefinitions', props);
    return resource.getResponseField('GameServerGroup.InstanceDefinitions') as unknown as shapes.GameLiftInstanceDefinition[];
  }

  public get balancingStrategy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateGameServerGroup.GameServerGroup.BalancingStrategy'),
        outputPath: 'GameServerGroup.BalancingStrategy',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          RoleArn: this.input.roleArn,
          MinSize: this.input.minSize,
          MaxSize: this.input.maxSize,
          LaunchTemplate: {
            LaunchTemplateId: this.input.launchTemplate.launchTemplateId,
            LaunchTemplateName: this.input.launchTemplate.launchTemplateName,
            Version: this.input.launchTemplate.version,
          },
          InstanceDefinitions: this.input.instanceDefinitions,
          AutoScalingPolicy: {
            EstimatedInstanceWarmup: this.input.autoScalingPolicy?.estimatedInstanceWarmup,
            TargetTrackingConfiguration: {
              TargetValue: this.input.autoScalingPolicy?.targetTrackingConfiguration.targetValue,
            },
          },
          BalancingStrategy: this.input.balancingStrategy,
          GameServerProtectionPolicy: this.input.gameServerProtectionPolicy,
          VpcSubnets: this.input.vpcSubnets,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGameServerGroup.GameServerGroup.BalancingStrategy', props);
    return resource.getResponseField('GameServerGroup.BalancingStrategy') as unknown as string;
  }

  public get gameServerProtectionPolicy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateGameServerGroup.GameServerGroup.GameServerProtectionPolicy'),
        outputPath: 'GameServerGroup.GameServerProtectionPolicy',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          RoleArn: this.input.roleArn,
          MinSize: this.input.minSize,
          MaxSize: this.input.maxSize,
          LaunchTemplate: {
            LaunchTemplateId: this.input.launchTemplate.launchTemplateId,
            LaunchTemplateName: this.input.launchTemplate.launchTemplateName,
            Version: this.input.launchTemplate.version,
          },
          InstanceDefinitions: this.input.instanceDefinitions,
          AutoScalingPolicy: {
            EstimatedInstanceWarmup: this.input.autoScalingPolicy?.estimatedInstanceWarmup,
            TargetTrackingConfiguration: {
              TargetValue: this.input.autoScalingPolicy?.targetTrackingConfiguration.targetValue,
            },
          },
          BalancingStrategy: this.input.balancingStrategy,
          GameServerProtectionPolicy: this.input.gameServerProtectionPolicy,
          VpcSubnets: this.input.vpcSubnets,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGameServerGroup.GameServerGroup.GameServerProtectionPolicy', props);
    return resource.getResponseField('GameServerGroup.GameServerProtectionPolicy') as unknown as string;
  }

  public get autoScalingGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateGameServerGroup.GameServerGroup.AutoScalingGroupArn'),
        outputPath: 'GameServerGroup.AutoScalingGroupArn',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          RoleArn: this.input.roleArn,
          MinSize: this.input.minSize,
          MaxSize: this.input.maxSize,
          LaunchTemplate: {
            LaunchTemplateId: this.input.launchTemplate.launchTemplateId,
            LaunchTemplateName: this.input.launchTemplate.launchTemplateName,
            Version: this.input.launchTemplate.version,
          },
          InstanceDefinitions: this.input.instanceDefinitions,
          AutoScalingPolicy: {
            EstimatedInstanceWarmup: this.input.autoScalingPolicy?.estimatedInstanceWarmup,
            TargetTrackingConfiguration: {
              TargetValue: this.input.autoScalingPolicy?.targetTrackingConfiguration.targetValue,
            },
          },
          BalancingStrategy: this.input.balancingStrategy,
          GameServerProtectionPolicy: this.input.gameServerProtectionPolicy,
          VpcSubnets: this.input.vpcSubnets,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGameServerGroup.GameServerGroup.AutoScalingGroupArn', props);
    return resource.getResponseField('GameServerGroup.AutoScalingGroupArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateGameServerGroup.GameServerGroup.Status'),
        outputPath: 'GameServerGroup.Status',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          RoleArn: this.input.roleArn,
          MinSize: this.input.minSize,
          MaxSize: this.input.maxSize,
          LaunchTemplate: {
            LaunchTemplateId: this.input.launchTemplate.launchTemplateId,
            LaunchTemplateName: this.input.launchTemplate.launchTemplateName,
            Version: this.input.launchTemplate.version,
          },
          InstanceDefinitions: this.input.instanceDefinitions,
          AutoScalingPolicy: {
            EstimatedInstanceWarmup: this.input.autoScalingPolicy?.estimatedInstanceWarmup,
            TargetTrackingConfiguration: {
              TargetValue: this.input.autoScalingPolicy?.targetTrackingConfiguration.targetValue,
            },
          },
          BalancingStrategy: this.input.balancingStrategy,
          GameServerProtectionPolicy: this.input.gameServerProtectionPolicy,
          VpcSubnets: this.input.vpcSubnets,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGameServerGroup.GameServerGroup.Status', props);
    return resource.getResponseField('GameServerGroup.Status') as unknown as string;
  }

  public get statusReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateGameServerGroup.GameServerGroup.StatusReason'),
        outputPath: 'GameServerGroup.StatusReason',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          RoleArn: this.input.roleArn,
          MinSize: this.input.minSize,
          MaxSize: this.input.maxSize,
          LaunchTemplate: {
            LaunchTemplateId: this.input.launchTemplate.launchTemplateId,
            LaunchTemplateName: this.input.launchTemplate.launchTemplateName,
            Version: this.input.launchTemplate.version,
          },
          InstanceDefinitions: this.input.instanceDefinitions,
          AutoScalingPolicy: {
            EstimatedInstanceWarmup: this.input.autoScalingPolicy?.estimatedInstanceWarmup,
            TargetTrackingConfiguration: {
              TargetValue: this.input.autoScalingPolicy?.targetTrackingConfiguration.targetValue,
            },
          },
          BalancingStrategy: this.input.balancingStrategy,
          GameServerProtectionPolicy: this.input.gameServerProtectionPolicy,
          VpcSubnets: this.input.vpcSubnets,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGameServerGroup.GameServerGroup.StatusReason', props);
    return resource.getResponseField('GameServerGroup.StatusReason') as unknown as string;
  }

  public get suspendedActions(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateGameServerGroup.GameServerGroup.SuspendedActions'),
        outputPath: 'GameServerGroup.SuspendedActions',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          RoleArn: this.input.roleArn,
          MinSize: this.input.minSize,
          MaxSize: this.input.maxSize,
          LaunchTemplate: {
            LaunchTemplateId: this.input.launchTemplate.launchTemplateId,
            LaunchTemplateName: this.input.launchTemplate.launchTemplateName,
            Version: this.input.launchTemplate.version,
          },
          InstanceDefinitions: this.input.instanceDefinitions,
          AutoScalingPolicy: {
            EstimatedInstanceWarmup: this.input.autoScalingPolicy?.estimatedInstanceWarmup,
            TargetTrackingConfiguration: {
              TargetValue: this.input.autoScalingPolicy?.targetTrackingConfiguration.targetValue,
            },
          },
          BalancingStrategy: this.input.balancingStrategy,
          GameServerProtectionPolicy: this.input.gameServerProtectionPolicy,
          VpcSubnets: this.input.vpcSubnets,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGameServerGroup.GameServerGroup.SuspendedActions', props);
    return resource.getResponseField('GameServerGroup.SuspendedActions') as unknown as string[];
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateGameServerGroup.GameServerGroup.CreationTime'),
        outputPath: 'GameServerGroup.CreationTime',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          RoleArn: this.input.roleArn,
          MinSize: this.input.minSize,
          MaxSize: this.input.maxSize,
          LaunchTemplate: {
            LaunchTemplateId: this.input.launchTemplate.launchTemplateId,
            LaunchTemplateName: this.input.launchTemplate.launchTemplateName,
            Version: this.input.launchTemplate.version,
          },
          InstanceDefinitions: this.input.instanceDefinitions,
          AutoScalingPolicy: {
            EstimatedInstanceWarmup: this.input.autoScalingPolicy?.estimatedInstanceWarmup,
            TargetTrackingConfiguration: {
              TargetValue: this.input.autoScalingPolicy?.targetTrackingConfiguration.targetValue,
            },
          },
          BalancingStrategy: this.input.balancingStrategy,
          GameServerProtectionPolicy: this.input.gameServerProtectionPolicy,
          VpcSubnets: this.input.vpcSubnets,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGameServerGroup.GameServerGroup.CreationTime', props);
    return resource.getResponseField('GameServerGroup.CreationTime') as unknown as string;
  }

  public get lastUpdatedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateGameServerGroup.GameServerGroup.LastUpdatedTime'),
        outputPath: 'GameServerGroup.LastUpdatedTime',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          RoleArn: this.input.roleArn,
          MinSize: this.input.minSize,
          MaxSize: this.input.maxSize,
          LaunchTemplate: {
            LaunchTemplateId: this.input.launchTemplate.launchTemplateId,
            LaunchTemplateName: this.input.launchTemplate.launchTemplateName,
            Version: this.input.launchTemplate.version,
          },
          InstanceDefinitions: this.input.instanceDefinitions,
          AutoScalingPolicy: {
            EstimatedInstanceWarmup: this.input.autoScalingPolicy?.estimatedInstanceWarmup,
            TargetTrackingConfiguration: {
              TargetValue: this.input.autoScalingPolicy?.targetTrackingConfiguration.targetValue,
            },
          },
          BalancingStrategy: this.input.balancingStrategy,
          GameServerProtectionPolicy: this.input.gameServerProtectionPolicy,
          VpcSubnets: this.input.vpcSubnets,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGameServerGroup.GameServerGroup.LastUpdatedTime', props);
    return resource.getResponseField('GameServerGroup.LastUpdatedTime') as unknown as string;
  }

}

export class GameLiftCreateGameSession extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftCreateGameSessionInput) {
    super(scope, id);
  }

  public get gameSession(): GameLiftCreateGameSessionGameSession {
    return new GameLiftCreateGameSessionGameSession(this, 'GameSession', this.__resources, this.input);
  }

}

export class GameLiftCreateGameSessionGameSession extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftCreateGameSessionInput) {
    super(scope, id);
  }

  public get gameSessionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGameSession',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateGameSession.GameSession.GameSessionId'),
        outputPath: 'GameSession.GameSessionId',
        parameters: {
          FleetId: this.input.fleetId,
          AliasId: this.input.aliasId,
          MaximumPlayerSessionCount: this.input.maximumPlayerSessionCount,
          Name: this.input.name,
          GameProperties: this.input.gameProperties,
          CreatorId: this.input.creatorId,
          GameSessionId: this.input.gameSessionId,
          IdempotencyToken: this.input.idempotencyToken,
          GameSessionData: this.input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGameSession.GameSession.GameSessionId', props);
    return resource.getResponseField('GameSession.GameSessionId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGameSession',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateGameSession.GameSession.Name'),
        outputPath: 'GameSession.Name',
        parameters: {
          FleetId: this.input.fleetId,
          AliasId: this.input.aliasId,
          MaximumPlayerSessionCount: this.input.maximumPlayerSessionCount,
          Name: this.input.name,
          GameProperties: this.input.gameProperties,
          CreatorId: this.input.creatorId,
          GameSessionId: this.input.gameSessionId,
          IdempotencyToken: this.input.idempotencyToken,
          GameSessionData: this.input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGameSession.GameSession.Name', props);
    return resource.getResponseField('GameSession.Name') as unknown as string;
  }

  public get fleetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGameSession',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateGameSession.GameSession.FleetId'),
        outputPath: 'GameSession.FleetId',
        parameters: {
          FleetId: this.input.fleetId,
          AliasId: this.input.aliasId,
          MaximumPlayerSessionCount: this.input.maximumPlayerSessionCount,
          Name: this.input.name,
          GameProperties: this.input.gameProperties,
          CreatorId: this.input.creatorId,
          GameSessionId: this.input.gameSessionId,
          IdempotencyToken: this.input.idempotencyToken,
          GameSessionData: this.input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGameSession.GameSession.FleetId', props);
    return resource.getResponseField('GameSession.FleetId') as unknown as string;
  }

  public get fleetArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGameSession',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateGameSession.GameSession.FleetArn'),
        outputPath: 'GameSession.FleetArn',
        parameters: {
          FleetId: this.input.fleetId,
          AliasId: this.input.aliasId,
          MaximumPlayerSessionCount: this.input.maximumPlayerSessionCount,
          Name: this.input.name,
          GameProperties: this.input.gameProperties,
          CreatorId: this.input.creatorId,
          GameSessionId: this.input.gameSessionId,
          IdempotencyToken: this.input.idempotencyToken,
          GameSessionData: this.input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGameSession.GameSession.FleetArn', props);
    return resource.getResponseField('GameSession.FleetArn') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGameSession',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateGameSession.GameSession.CreationTime'),
        outputPath: 'GameSession.CreationTime',
        parameters: {
          FleetId: this.input.fleetId,
          AliasId: this.input.aliasId,
          MaximumPlayerSessionCount: this.input.maximumPlayerSessionCount,
          Name: this.input.name,
          GameProperties: this.input.gameProperties,
          CreatorId: this.input.creatorId,
          GameSessionId: this.input.gameSessionId,
          IdempotencyToken: this.input.idempotencyToken,
          GameSessionData: this.input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGameSession.GameSession.CreationTime', props);
    return resource.getResponseField('GameSession.CreationTime') as unknown as string;
  }

  public get terminationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGameSession',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateGameSession.GameSession.TerminationTime'),
        outputPath: 'GameSession.TerminationTime',
        parameters: {
          FleetId: this.input.fleetId,
          AliasId: this.input.aliasId,
          MaximumPlayerSessionCount: this.input.maximumPlayerSessionCount,
          Name: this.input.name,
          GameProperties: this.input.gameProperties,
          CreatorId: this.input.creatorId,
          GameSessionId: this.input.gameSessionId,
          IdempotencyToken: this.input.idempotencyToken,
          GameSessionData: this.input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGameSession.GameSession.TerminationTime', props);
    return resource.getResponseField('GameSession.TerminationTime') as unknown as string;
  }

  public get currentPlayerSessionCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGameSession',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateGameSession.GameSession.CurrentPlayerSessionCount'),
        outputPath: 'GameSession.CurrentPlayerSessionCount',
        parameters: {
          FleetId: this.input.fleetId,
          AliasId: this.input.aliasId,
          MaximumPlayerSessionCount: this.input.maximumPlayerSessionCount,
          Name: this.input.name,
          GameProperties: this.input.gameProperties,
          CreatorId: this.input.creatorId,
          GameSessionId: this.input.gameSessionId,
          IdempotencyToken: this.input.idempotencyToken,
          GameSessionData: this.input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGameSession.GameSession.CurrentPlayerSessionCount', props);
    return resource.getResponseField('GameSession.CurrentPlayerSessionCount') as unknown as number;
  }

  public get maximumPlayerSessionCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGameSession',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateGameSession.GameSession.MaximumPlayerSessionCount'),
        outputPath: 'GameSession.MaximumPlayerSessionCount',
        parameters: {
          FleetId: this.input.fleetId,
          AliasId: this.input.aliasId,
          MaximumPlayerSessionCount: this.input.maximumPlayerSessionCount,
          Name: this.input.name,
          GameProperties: this.input.gameProperties,
          CreatorId: this.input.creatorId,
          GameSessionId: this.input.gameSessionId,
          IdempotencyToken: this.input.idempotencyToken,
          GameSessionData: this.input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGameSession.GameSession.MaximumPlayerSessionCount', props);
    return resource.getResponseField('GameSession.MaximumPlayerSessionCount') as unknown as number;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGameSession',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateGameSession.GameSession.Status'),
        outputPath: 'GameSession.Status',
        parameters: {
          FleetId: this.input.fleetId,
          AliasId: this.input.aliasId,
          MaximumPlayerSessionCount: this.input.maximumPlayerSessionCount,
          Name: this.input.name,
          GameProperties: this.input.gameProperties,
          CreatorId: this.input.creatorId,
          GameSessionId: this.input.gameSessionId,
          IdempotencyToken: this.input.idempotencyToken,
          GameSessionData: this.input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGameSession.GameSession.Status', props);
    return resource.getResponseField('GameSession.Status') as unknown as string;
  }

  public get statusReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGameSession',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateGameSession.GameSession.StatusReason'),
        outputPath: 'GameSession.StatusReason',
        parameters: {
          FleetId: this.input.fleetId,
          AliasId: this.input.aliasId,
          MaximumPlayerSessionCount: this.input.maximumPlayerSessionCount,
          Name: this.input.name,
          GameProperties: this.input.gameProperties,
          CreatorId: this.input.creatorId,
          GameSessionId: this.input.gameSessionId,
          IdempotencyToken: this.input.idempotencyToken,
          GameSessionData: this.input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGameSession.GameSession.StatusReason', props);
    return resource.getResponseField('GameSession.StatusReason') as unknown as string;
  }

  public get gameProperties(): shapes.GameLiftGameProperty[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGameSession',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateGameSession.GameSession.GameProperties'),
        outputPath: 'GameSession.GameProperties',
        parameters: {
          FleetId: this.input.fleetId,
          AliasId: this.input.aliasId,
          MaximumPlayerSessionCount: this.input.maximumPlayerSessionCount,
          Name: this.input.name,
          GameProperties: this.input.gameProperties,
          CreatorId: this.input.creatorId,
          GameSessionId: this.input.gameSessionId,
          IdempotencyToken: this.input.idempotencyToken,
          GameSessionData: this.input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGameSession.GameSession.GameProperties', props);
    return resource.getResponseField('GameSession.GameProperties') as unknown as shapes.GameLiftGameProperty[];
  }

  public get ipAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGameSession',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateGameSession.GameSession.IpAddress'),
        outputPath: 'GameSession.IpAddress',
        parameters: {
          FleetId: this.input.fleetId,
          AliasId: this.input.aliasId,
          MaximumPlayerSessionCount: this.input.maximumPlayerSessionCount,
          Name: this.input.name,
          GameProperties: this.input.gameProperties,
          CreatorId: this.input.creatorId,
          GameSessionId: this.input.gameSessionId,
          IdempotencyToken: this.input.idempotencyToken,
          GameSessionData: this.input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGameSession.GameSession.IpAddress', props);
    return resource.getResponseField('GameSession.IpAddress') as unknown as string;
  }

  public get dnsName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGameSession',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateGameSession.GameSession.DnsName'),
        outputPath: 'GameSession.DnsName',
        parameters: {
          FleetId: this.input.fleetId,
          AliasId: this.input.aliasId,
          MaximumPlayerSessionCount: this.input.maximumPlayerSessionCount,
          Name: this.input.name,
          GameProperties: this.input.gameProperties,
          CreatorId: this.input.creatorId,
          GameSessionId: this.input.gameSessionId,
          IdempotencyToken: this.input.idempotencyToken,
          GameSessionData: this.input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGameSession.GameSession.DnsName', props);
    return resource.getResponseField('GameSession.DnsName') as unknown as string;
  }

  public get port(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGameSession',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateGameSession.GameSession.Port'),
        outputPath: 'GameSession.Port',
        parameters: {
          FleetId: this.input.fleetId,
          AliasId: this.input.aliasId,
          MaximumPlayerSessionCount: this.input.maximumPlayerSessionCount,
          Name: this.input.name,
          GameProperties: this.input.gameProperties,
          CreatorId: this.input.creatorId,
          GameSessionId: this.input.gameSessionId,
          IdempotencyToken: this.input.idempotencyToken,
          GameSessionData: this.input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGameSession.GameSession.Port', props);
    return resource.getResponseField('GameSession.Port') as unknown as number;
  }

  public get playerSessionCreationPolicy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGameSession',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateGameSession.GameSession.PlayerSessionCreationPolicy'),
        outputPath: 'GameSession.PlayerSessionCreationPolicy',
        parameters: {
          FleetId: this.input.fleetId,
          AliasId: this.input.aliasId,
          MaximumPlayerSessionCount: this.input.maximumPlayerSessionCount,
          Name: this.input.name,
          GameProperties: this.input.gameProperties,
          CreatorId: this.input.creatorId,
          GameSessionId: this.input.gameSessionId,
          IdempotencyToken: this.input.idempotencyToken,
          GameSessionData: this.input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGameSession.GameSession.PlayerSessionCreationPolicy', props);
    return resource.getResponseField('GameSession.PlayerSessionCreationPolicy') as unknown as string;
  }

  public get creatorId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGameSession',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateGameSession.GameSession.CreatorId'),
        outputPath: 'GameSession.CreatorId',
        parameters: {
          FleetId: this.input.fleetId,
          AliasId: this.input.aliasId,
          MaximumPlayerSessionCount: this.input.maximumPlayerSessionCount,
          Name: this.input.name,
          GameProperties: this.input.gameProperties,
          CreatorId: this.input.creatorId,
          GameSessionId: this.input.gameSessionId,
          IdempotencyToken: this.input.idempotencyToken,
          GameSessionData: this.input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGameSession.GameSession.CreatorId', props);
    return resource.getResponseField('GameSession.CreatorId') as unknown as string;
  }

  public get gameSessionData(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGameSession',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateGameSession.GameSession.GameSessionData'),
        outputPath: 'GameSession.GameSessionData',
        parameters: {
          FleetId: this.input.fleetId,
          AliasId: this.input.aliasId,
          MaximumPlayerSessionCount: this.input.maximumPlayerSessionCount,
          Name: this.input.name,
          GameProperties: this.input.gameProperties,
          CreatorId: this.input.creatorId,
          GameSessionId: this.input.gameSessionId,
          IdempotencyToken: this.input.idempotencyToken,
          GameSessionData: this.input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGameSession.GameSession.GameSessionData', props);
    return resource.getResponseField('GameSession.GameSessionData') as unknown as string;
  }

  public get matchmakerData(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGameSession',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateGameSession.GameSession.MatchmakerData'),
        outputPath: 'GameSession.MatchmakerData',
        parameters: {
          FleetId: this.input.fleetId,
          AliasId: this.input.aliasId,
          MaximumPlayerSessionCount: this.input.maximumPlayerSessionCount,
          Name: this.input.name,
          GameProperties: this.input.gameProperties,
          CreatorId: this.input.creatorId,
          GameSessionId: this.input.gameSessionId,
          IdempotencyToken: this.input.idempotencyToken,
          GameSessionData: this.input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGameSession.GameSession.MatchmakerData', props);
    return resource.getResponseField('GameSession.MatchmakerData') as unknown as string;
  }

}

export class GameLiftCreateGameSessionQueue extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftCreateGameSessionQueueInput) {
    super(scope, id);
  }

  public get gameSessionQueue(): GameLiftCreateGameSessionQueueGameSessionQueue {
    return new GameLiftCreateGameSessionQueueGameSessionQueue(this, 'GameSessionQueue', this.__resources, this.input);
  }

}

export class GameLiftCreateGameSessionQueueGameSessionQueue extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftCreateGameSessionQueueInput) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGameSessionQueue',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateGameSessionQueue.GameSessionQueue.Name'),
        outputPath: 'GameSessionQueue.Name',
        parameters: {
          Name: this.input.name,
          TimeoutInSeconds: this.input.timeoutInSeconds,
          PlayerLatencyPolicies: this.input.playerLatencyPolicies,
          Destinations: this.input.destinations,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGameSessionQueue.GameSessionQueue.Name', props);
    return resource.getResponseField('GameSessionQueue.Name') as unknown as string;
  }

  public get gameSessionQueueArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGameSessionQueue',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateGameSessionQueue.GameSessionQueue.GameSessionQueueArn'),
        outputPath: 'GameSessionQueue.GameSessionQueueArn',
        parameters: {
          Name: this.input.name,
          TimeoutInSeconds: this.input.timeoutInSeconds,
          PlayerLatencyPolicies: this.input.playerLatencyPolicies,
          Destinations: this.input.destinations,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGameSessionQueue.GameSessionQueue.GameSessionQueueArn', props);
    return resource.getResponseField('GameSessionQueue.GameSessionQueueArn') as unknown as string;
  }

  public get timeoutInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGameSessionQueue',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateGameSessionQueue.GameSessionQueue.TimeoutInSeconds'),
        outputPath: 'GameSessionQueue.TimeoutInSeconds',
        parameters: {
          Name: this.input.name,
          TimeoutInSeconds: this.input.timeoutInSeconds,
          PlayerLatencyPolicies: this.input.playerLatencyPolicies,
          Destinations: this.input.destinations,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGameSessionQueue.GameSessionQueue.TimeoutInSeconds', props);
    return resource.getResponseField('GameSessionQueue.TimeoutInSeconds') as unknown as number;
  }

  public get playerLatencyPolicies(): shapes.GameLiftPlayerLatencyPolicy[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGameSessionQueue',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateGameSessionQueue.GameSessionQueue.PlayerLatencyPolicies'),
        outputPath: 'GameSessionQueue.PlayerLatencyPolicies',
        parameters: {
          Name: this.input.name,
          TimeoutInSeconds: this.input.timeoutInSeconds,
          PlayerLatencyPolicies: this.input.playerLatencyPolicies,
          Destinations: this.input.destinations,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGameSessionQueue.GameSessionQueue.PlayerLatencyPolicies', props);
    return resource.getResponseField('GameSessionQueue.PlayerLatencyPolicies') as unknown as shapes.GameLiftPlayerLatencyPolicy[];
  }

  public get destinations(): shapes.GameLiftGameSessionQueueDestination[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGameSessionQueue',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateGameSessionQueue.GameSessionQueue.Destinations'),
        outputPath: 'GameSessionQueue.Destinations',
        parameters: {
          Name: this.input.name,
          TimeoutInSeconds: this.input.timeoutInSeconds,
          PlayerLatencyPolicies: this.input.playerLatencyPolicies,
          Destinations: this.input.destinations,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGameSessionQueue.GameSessionQueue.Destinations', props);
    return resource.getResponseField('GameSessionQueue.Destinations') as unknown as shapes.GameLiftGameSessionQueueDestination[];
  }

}

export class GameLiftCreateMatchmakingConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftCreateMatchmakingConfigurationInput) {
    super(scope, id);
  }

  public get configuration(): GameLiftCreateMatchmakingConfigurationConfiguration {
    return new GameLiftCreateMatchmakingConfigurationConfiguration(this, 'Configuration', this.__resources, this.input);
  }

}

export class GameLiftCreateMatchmakingConfigurationConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftCreateMatchmakingConfigurationInput) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMatchmakingConfiguration',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateMatchmakingConfiguration.Configuration.Name'),
        outputPath: 'Configuration.Name',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          GameSessionQueueArns: this.input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.input.acceptanceRequired,
          RuleSetName: this.input.ruleSetName,
          NotificationTarget: this.input.notificationTarget,
          AdditionalPlayerCount: this.input.additionalPlayerCount,
          CustomEventData: this.input.customEventData,
          GameProperties: this.input.gameProperties,
          GameSessionData: this.input.gameSessionData,
          BackfillMode: this.input.backfillMode,
          FlexMatchMode: this.input.flexMatchMode,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMatchmakingConfiguration.Configuration.Name', props);
    return resource.getResponseField('Configuration.Name') as unknown as string;
  }

  public get configurationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMatchmakingConfiguration',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateMatchmakingConfiguration.Configuration.ConfigurationArn'),
        outputPath: 'Configuration.ConfigurationArn',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          GameSessionQueueArns: this.input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.input.acceptanceRequired,
          RuleSetName: this.input.ruleSetName,
          NotificationTarget: this.input.notificationTarget,
          AdditionalPlayerCount: this.input.additionalPlayerCount,
          CustomEventData: this.input.customEventData,
          GameProperties: this.input.gameProperties,
          GameSessionData: this.input.gameSessionData,
          BackfillMode: this.input.backfillMode,
          FlexMatchMode: this.input.flexMatchMode,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMatchmakingConfiguration.Configuration.ConfigurationArn', props);
    return resource.getResponseField('Configuration.ConfigurationArn') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMatchmakingConfiguration',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateMatchmakingConfiguration.Configuration.Description'),
        outputPath: 'Configuration.Description',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          GameSessionQueueArns: this.input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.input.acceptanceRequired,
          RuleSetName: this.input.ruleSetName,
          NotificationTarget: this.input.notificationTarget,
          AdditionalPlayerCount: this.input.additionalPlayerCount,
          CustomEventData: this.input.customEventData,
          GameProperties: this.input.gameProperties,
          GameSessionData: this.input.gameSessionData,
          BackfillMode: this.input.backfillMode,
          FlexMatchMode: this.input.flexMatchMode,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMatchmakingConfiguration.Configuration.Description', props);
    return resource.getResponseField('Configuration.Description') as unknown as string;
  }

  public get gameSessionQueueArns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMatchmakingConfiguration',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateMatchmakingConfiguration.Configuration.GameSessionQueueArns'),
        outputPath: 'Configuration.GameSessionQueueArns',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          GameSessionQueueArns: this.input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.input.acceptanceRequired,
          RuleSetName: this.input.ruleSetName,
          NotificationTarget: this.input.notificationTarget,
          AdditionalPlayerCount: this.input.additionalPlayerCount,
          CustomEventData: this.input.customEventData,
          GameProperties: this.input.gameProperties,
          GameSessionData: this.input.gameSessionData,
          BackfillMode: this.input.backfillMode,
          FlexMatchMode: this.input.flexMatchMode,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMatchmakingConfiguration.Configuration.GameSessionQueueArns', props);
    return resource.getResponseField('Configuration.GameSessionQueueArns') as unknown as string[];
  }

  public get requestTimeoutSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMatchmakingConfiguration',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateMatchmakingConfiguration.Configuration.RequestTimeoutSeconds'),
        outputPath: 'Configuration.RequestTimeoutSeconds',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          GameSessionQueueArns: this.input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.input.acceptanceRequired,
          RuleSetName: this.input.ruleSetName,
          NotificationTarget: this.input.notificationTarget,
          AdditionalPlayerCount: this.input.additionalPlayerCount,
          CustomEventData: this.input.customEventData,
          GameProperties: this.input.gameProperties,
          GameSessionData: this.input.gameSessionData,
          BackfillMode: this.input.backfillMode,
          FlexMatchMode: this.input.flexMatchMode,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMatchmakingConfiguration.Configuration.RequestTimeoutSeconds', props);
    return resource.getResponseField('Configuration.RequestTimeoutSeconds') as unknown as number;
  }

  public get acceptanceTimeoutSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMatchmakingConfiguration',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateMatchmakingConfiguration.Configuration.AcceptanceTimeoutSeconds'),
        outputPath: 'Configuration.AcceptanceTimeoutSeconds',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          GameSessionQueueArns: this.input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.input.acceptanceRequired,
          RuleSetName: this.input.ruleSetName,
          NotificationTarget: this.input.notificationTarget,
          AdditionalPlayerCount: this.input.additionalPlayerCount,
          CustomEventData: this.input.customEventData,
          GameProperties: this.input.gameProperties,
          GameSessionData: this.input.gameSessionData,
          BackfillMode: this.input.backfillMode,
          FlexMatchMode: this.input.flexMatchMode,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMatchmakingConfiguration.Configuration.AcceptanceTimeoutSeconds', props);
    return resource.getResponseField('Configuration.AcceptanceTimeoutSeconds') as unknown as number;
  }

  public get acceptanceRequired(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMatchmakingConfiguration',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateMatchmakingConfiguration.Configuration.AcceptanceRequired'),
        outputPath: 'Configuration.AcceptanceRequired',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          GameSessionQueueArns: this.input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.input.acceptanceRequired,
          RuleSetName: this.input.ruleSetName,
          NotificationTarget: this.input.notificationTarget,
          AdditionalPlayerCount: this.input.additionalPlayerCount,
          CustomEventData: this.input.customEventData,
          GameProperties: this.input.gameProperties,
          GameSessionData: this.input.gameSessionData,
          BackfillMode: this.input.backfillMode,
          FlexMatchMode: this.input.flexMatchMode,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMatchmakingConfiguration.Configuration.AcceptanceRequired', props);
    return resource.getResponseField('Configuration.AcceptanceRequired') as unknown as boolean;
  }

  public get ruleSetName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMatchmakingConfiguration',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateMatchmakingConfiguration.Configuration.RuleSetName'),
        outputPath: 'Configuration.RuleSetName',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          GameSessionQueueArns: this.input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.input.acceptanceRequired,
          RuleSetName: this.input.ruleSetName,
          NotificationTarget: this.input.notificationTarget,
          AdditionalPlayerCount: this.input.additionalPlayerCount,
          CustomEventData: this.input.customEventData,
          GameProperties: this.input.gameProperties,
          GameSessionData: this.input.gameSessionData,
          BackfillMode: this.input.backfillMode,
          FlexMatchMode: this.input.flexMatchMode,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMatchmakingConfiguration.Configuration.RuleSetName', props);
    return resource.getResponseField('Configuration.RuleSetName') as unknown as string;
  }

  public get ruleSetArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMatchmakingConfiguration',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateMatchmakingConfiguration.Configuration.RuleSetArn'),
        outputPath: 'Configuration.RuleSetArn',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          GameSessionQueueArns: this.input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.input.acceptanceRequired,
          RuleSetName: this.input.ruleSetName,
          NotificationTarget: this.input.notificationTarget,
          AdditionalPlayerCount: this.input.additionalPlayerCount,
          CustomEventData: this.input.customEventData,
          GameProperties: this.input.gameProperties,
          GameSessionData: this.input.gameSessionData,
          BackfillMode: this.input.backfillMode,
          FlexMatchMode: this.input.flexMatchMode,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMatchmakingConfiguration.Configuration.RuleSetArn', props);
    return resource.getResponseField('Configuration.RuleSetArn') as unknown as string;
  }

  public get notificationTarget(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMatchmakingConfiguration',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateMatchmakingConfiguration.Configuration.NotificationTarget'),
        outputPath: 'Configuration.NotificationTarget',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          GameSessionQueueArns: this.input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.input.acceptanceRequired,
          RuleSetName: this.input.ruleSetName,
          NotificationTarget: this.input.notificationTarget,
          AdditionalPlayerCount: this.input.additionalPlayerCount,
          CustomEventData: this.input.customEventData,
          GameProperties: this.input.gameProperties,
          GameSessionData: this.input.gameSessionData,
          BackfillMode: this.input.backfillMode,
          FlexMatchMode: this.input.flexMatchMode,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMatchmakingConfiguration.Configuration.NotificationTarget', props);
    return resource.getResponseField('Configuration.NotificationTarget') as unknown as string;
  }

  public get additionalPlayerCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMatchmakingConfiguration',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateMatchmakingConfiguration.Configuration.AdditionalPlayerCount'),
        outputPath: 'Configuration.AdditionalPlayerCount',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          GameSessionQueueArns: this.input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.input.acceptanceRequired,
          RuleSetName: this.input.ruleSetName,
          NotificationTarget: this.input.notificationTarget,
          AdditionalPlayerCount: this.input.additionalPlayerCount,
          CustomEventData: this.input.customEventData,
          GameProperties: this.input.gameProperties,
          GameSessionData: this.input.gameSessionData,
          BackfillMode: this.input.backfillMode,
          FlexMatchMode: this.input.flexMatchMode,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMatchmakingConfiguration.Configuration.AdditionalPlayerCount', props);
    return resource.getResponseField('Configuration.AdditionalPlayerCount') as unknown as number;
  }

  public get customEventData(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMatchmakingConfiguration',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateMatchmakingConfiguration.Configuration.CustomEventData'),
        outputPath: 'Configuration.CustomEventData',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          GameSessionQueueArns: this.input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.input.acceptanceRequired,
          RuleSetName: this.input.ruleSetName,
          NotificationTarget: this.input.notificationTarget,
          AdditionalPlayerCount: this.input.additionalPlayerCount,
          CustomEventData: this.input.customEventData,
          GameProperties: this.input.gameProperties,
          GameSessionData: this.input.gameSessionData,
          BackfillMode: this.input.backfillMode,
          FlexMatchMode: this.input.flexMatchMode,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMatchmakingConfiguration.Configuration.CustomEventData', props);
    return resource.getResponseField('Configuration.CustomEventData') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMatchmakingConfiguration',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateMatchmakingConfiguration.Configuration.CreationTime'),
        outputPath: 'Configuration.CreationTime',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          GameSessionQueueArns: this.input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.input.acceptanceRequired,
          RuleSetName: this.input.ruleSetName,
          NotificationTarget: this.input.notificationTarget,
          AdditionalPlayerCount: this.input.additionalPlayerCount,
          CustomEventData: this.input.customEventData,
          GameProperties: this.input.gameProperties,
          GameSessionData: this.input.gameSessionData,
          BackfillMode: this.input.backfillMode,
          FlexMatchMode: this.input.flexMatchMode,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMatchmakingConfiguration.Configuration.CreationTime', props);
    return resource.getResponseField('Configuration.CreationTime') as unknown as string;
  }

  public get gameProperties(): shapes.GameLiftGameProperty[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMatchmakingConfiguration',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateMatchmakingConfiguration.Configuration.GameProperties'),
        outputPath: 'Configuration.GameProperties',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          GameSessionQueueArns: this.input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.input.acceptanceRequired,
          RuleSetName: this.input.ruleSetName,
          NotificationTarget: this.input.notificationTarget,
          AdditionalPlayerCount: this.input.additionalPlayerCount,
          CustomEventData: this.input.customEventData,
          GameProperties: this.input.gameProperties,
          GameSessionData: this.input.gameSessionData,
          BackfillMode: this.input.backfillMode,
          FlexMatchMode: this.input.flexMatchMode,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMatchmakingConfiguration.Configuration.GameProperties', props);
    return resource.getResponseField('Configuration.GameProperties') as unknown as shapes.GameLiftGameProperty[];
  }

  public get gameSessionData(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMatchmakingConfiguration',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateMatchmakingConfiguration.Configuration.GameSessionData'),
        outputPath: 'Configuration.GameSessionData',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          GameSessionQueueArns: this.input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.input.acceptanceRequired,
          RuleSetName: this.input.ruleSetName,
          NotificationTarget: this.input.notificationTarget,
          AdditionalPlayerCount: this.input.additionalPlayerCount,
          CustomEventData: this.input.customEventData,
          GameProperties: this.input.gameProperties,
          GameSessionData: this.input.gameSessionData,
          BackfillMode: this.input.backfillMode,
          FlexMatchMode: this.input.flexMatchMode,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMatchmakingConfiguration.Configuration.GameSessionData', props);
    return resource.getResponseField('Configuration.GameSessionData') as unknown as string;
  }

  public get backfillMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMatchmakingConfiguration',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateMatchmakingConfiguration.Configuration.BackfillMode'),
        outputPath: 'Configuration.BackfillMode',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          GameSessionQueueArns: this.input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.input.acceptanceRequired,
          RuleSetName: this.input.ruleSetName,
          NotificationTarget: this.input.notificationTarget,
          AdditionalPlayerCount: this.input.additionalPlayerCount,
          CustomEventData: this.input.customEventData,
          GameProperties: this.input.gameProperties,
          GameSessionData: this.input.gameSessionData,
          BackfillMode: this.input.backfillMode,
          FlexMatchMode: this.input.flexMatchMode,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMatchmakingConfiguration.Configuration.BackfillMode', props);
    return resource.getResponseField('Configuration.BackfillMode') as unknown as string;
  }

  public get flexMatchMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMatchmakingConfiguration',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateMatchmakingConfiguration.Configuration.FlexMatchMode'),
        outputPath: 'Configuration.FlexMatchMode',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          GameSessionQueueArns: this.input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.input.acceptanceRequired,
          RuleSetName: this.input.ruleSetName,
          NotificationTarget: this.input.notificationTarget,
          AdditionalPlayerCount: this.input.additionalPlayerCount,
          CustomEventData: this.input.customEventData,
          GameProperties: this.input.gameProperties,
          GameSessionData: this.input.gameSessionData,
          BackfillMode: this.input.backfillMode,
          FlexMatchMode: this.input.flexMatchMode,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMatchmakingConfiguration.Configuration.FlexMatchMode', props);
    return resource.getResponseField('Configuration.FlexMatchMode') as unknown as string;
  }

}

export class GameLiftCreateMatchmakingRuleSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftCreateMatchmakingRuleSetInput) {
    super(scope, id);
  }

  public get ruleSet(): GameLiftCreateMatchmakingRuleSetRuleSet {
    return new GameLiftCreateMatchmakingRuleSetRuleSet(this, 'RuleSet', this.__resources, this.input);
  }

}

export class GameLiftCreateMatchmakingRuleSetRuleSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftCreateMatchmakingRuleSetInput) {
    super(scope, id);
  }

  public get ruleSetName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMatchmakingRuleSet',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateMatchmakingRuleSet.RuleSet.RuleSetName'),
        outputPath: 'RuleSet.RuleSetName',
        parameters: {
          Name: this.input.name,
          RuleSetBody: this.input.ruleSetBody,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMatchmakingRuleSet.RuleSet.RuleSetName', props);
    return resource.getResponseField('RuleSet.RuleSetName') as unknown as string;
  }

  public get ruleSetArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMatchmakingRuleSet',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateMatchmakingRuleSet.RuleSet.RuleSetArn'),
        outputPath: 'RuleSet.RuleSetArn',
        parameters: {
          Name: this.input.name,
          RuleSetBody: this.input.ruleSetBody,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMatchmakingRuleSet.RuleSet.RuleSetArn', props);
    return resource.getResponseField('RuleSet.RuleSetArn') as unknown as string;
  }

  public get ruleSetBody(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMatchmakingRuleSet',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateMatchmakingRuleSet.RuleSet.RuleSetBody'),
        outputPath: 'RuleSet.RuleSetBody',
        parameters: {
          Name: this.input.name,
          RuleSetBody: this.input.ruleSetBody,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMatchmakingRuleSet.RuleSet.RuleSetBody', props);
    return resource.getResponseField('RuleSet.RuleSetBody') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMatchmakingRuleSet',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateMatchmakingRuleSet.RuleSet.CreationTime'),
        outputPath: 'RuleSet.CreationTime',
        parameters: {
          Name: this.input.name,
          RuleSetBody: this.input.ruleSetBody,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMatchmakingRuleSet.RuleSet.CreationTime', props);
    return resource.getResponseField('RuleSet.CreationTime') as unknown as string;
  }

}

export class GameLiftCreatePlayerSession extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftCreatePlayerSessionInput) {
    super(scope, id);
  }

  public get playerSession(): GameLiftCreatePlayerSessionPlayerSession {
    return new GameLiftCreatePlayerSessionPlayerSession(this, 'PlayerSession', this.__resources, this.input);
  }

}

export class GameLiftCreatePlayerSessionPlayerSession extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftCreatePlayerSessionInput) {
    super(scope, id);
  }

  public get playerSessionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPlayerSession',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreatePlayerSession.PlayerSession.PlayerSessionId'),
        outputPath: 'PlayerSession.PlayerSessionId',
        parameters: {
          GameSessionId: this.input.gameSessionId,
          PlayerId: this.input.playerId,
          PlayerData: this.input.playerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePlayerSession.PlayerSession.PlayerSessionId', props);
    return resource.getResponseField('PlayerSession.PlayerSessionId') as unknown as string;
  }

  public get playerId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPlayerSession',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreatePlayerSession.PlayerSession.PlayerId'),
        outputPath: 'PlayerSession.PlayerId',
        parameters: {
          GameSessionId: this.input.gameSessionId,
          PlayerId: this.input.playerId,
          PlayerData: this.input.playerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePlayerSession.PlayerSession.PlayerId', props);
    return resource.getResponseField('PlayerSession.PlayerId') as unknown as string;
  }

  public get gameSessionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPlayerSession',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreatePlayerSession.PlayerSession.GameSessionId'),
        outputPath: 'PlayerSession.GameSessionId',
        parameters: {
          GameSessionId: this.input.gameSessionId,
          PlayerId: this.input.playerId,
          PlayerData: this.input.playerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePlayerSession.PlayerSession.GameSessionId', props);
    return resource.getResponseField('PlayerSession.GameSessionId') as unknown as string;
  }

  public get fleetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPlayerSession',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreatePlayerSession.PlayerSession.FleetId'),
        outputPath: 'PlayerSession.FleetId',
        parameters: {
          GameSessionId: this.input.gameSessionId,
          PlayerId: this.input.playerId,
          PlayerData: this.input.playerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePlayerSession.PlayerSession.FleetId', props);
    return resource.getResponseField('PlayerSession.FleetId') as unknown as string;
  }

  public get fleetArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPlayerSession',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreatePlayerSession.PlayerSession.FleetArn'),
        outputPath: 'PlayerSession.FleetArn',
        parameters: {
          GameSessionId: this.input.gameSessionId,
          PlayerId: this.input.playerId,
          PlayerData: this.input.playerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePlayerSession.PlayerSession.FleetArn', props);
    return resource.getResponseField('PlayerSession.FleetArn') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPlayerSession',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreatePlayerSession.PlayerSession.CreationTime'),
        outputPath: 'PlayerSession.CreationTime',
        parameters: {
          GameSessionId: this.input.gameSessionId,
          PlayerId: this.input.playerId,
          PlayerData: this.input.playerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePlayerSession.PlayerSession.CreationTime', props);
    return resource.getResponseField('PlayerSession.CreationTime') as unknown as string;
  }

  public get terminationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPlayerSession',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreatePlayerSession.PlayerSession.TerminationTime'),
        outputPath: 'PlayerSession.TerminationTime',
        parameters: {
          GameSessionId: this.input.gameSessionId,
          PlayerId: this.input.playerId,
          PlayerData: this.input.playerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePlayerSession.PlayerSession.TerminationTime', props);
    return resource.getResponseField('PlayerSession.TerminationTime') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPlayerSession',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreatePlayerSession.PlayerSession.Status'),
        outputPath: 'PlayerSession.Status',
        parameters: {
          GameSessionId: this.input.gameSessionId,
          PlayerId: this.input.playerId,
          PlayerData: this.input.playerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePlayerSession.PlayerSession.Status', props);
    return resource.getResponseField('PlayerSession.Status') as unknown as string;
  }

  public get ipAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPlayerSession',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreatePlayerSession.PlayerSession.IpAddress'),
        outputPath: 'PlayerSession.IpAddress',
        parameters: {
          GameSessionId: this.input.gameSessionId,
          PlayerId: this.input.playerId,
          PlayerData: this.input.playerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePlayerSession.PlayerSession.IpAddress', props);
    return resource.getResponseField('PlayerSession.IpAddress') as unknown as string;
  }

  public get dnsName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPlayerSession',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreatePlayerSession.PlayerSession.DnsName'),
        outputPath: 'PlayerSession.DnsName',
        parameters: {
          GameSessionId: this.input.gameSessionId,
          PlayerId: this.input.playerId,
          PlayerData: this.input.playerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePlayerSession.PlayerSession.DnsName', props);
    return resource.getResponseField('PlayerSession.DnsName') as unknown as string;
  }

  public get port(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPlayerSession',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreatePlayerSession.PlayerSession.Port'),
        outputPath: 'PlayerSession.Port',
        parameters: {
          GameSessionId: this.input.gameSessionId,
          PlayerId: this.input.playerId,
          PlayerData: this.input.playerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePlayerSession.PlayerSession.Port', props);
    return resource.getResponseField('PlayerSession.Port') as unknown as number;
  }

  public get playerData(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPlayerSession',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreatePlayerSession.PlayerSession.PlayerData'),
        outputPath: 'PlayerSession.PlayerData',
        parameters: {
          GameSessionId: this.input.gameSessionId,
          PlayerId: this.input.playerId,
          PlayerData: this.input.playerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePlayerSession.PlayerSession.PlayerData', props);
    return resource.getResponseField('PlayerSession.PlayerData') as unknown as string;
  }

}

export class GameLiftCreatePlayerSessions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftCreatePlayerSessionsInput) {
    super(scope, id);
  }

  public get playerSessions(): shapes.GameLiftPlayerSession[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPlayerSessions',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreatePlayerSessions.PlayerSessions'),
        outputPath: 'PlayerSessions',
        parameters: {
          GameSessionId: this.input.gameSessionId,
          PlayerIds: this.input.playerIds,
          PlayerDataMap: this.input.playerDataMap,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePlayerSessions.PlayerSessions', props);
    return resource.getResponseField('PlayerSessions') as unknown as shapes.GameLiftPlayerSession[];
  }

}

export class GameLiftCreateScript extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftCreateScriptInput) {
    super(scope, id);
  }

  public get script(): GameLiftCreateScriptScript {
    return new GameLiftCreateScriptScript(this, 'Script', this.__resources, this.input);
  }

}

export class GameLiftCreateScriptScript extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftCreateScriptInput) {
    super(scope, id);
  }

  public get scriptId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createScript',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateScript.Script.ScriptId'),
        outputPath: 'Script.ScriptId',
        parameters: {
          Name: this.input.name,
          Version: this.input.version,
          StorageLocation: {
            Bucket: this.input.storageLocation?.bucket,
            Key: this.input.storageLocation?.key,
            RoleArn: this.input.storageLocation?.roleArn,
            ObjectVersion: this.input.storageLocation?.objectVersion,
          },
          ZipFile: {
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateScript.Script.ScriptId', props);
    return resource.getResponseField('Script.ScriptId') as unknown as string;
  }

  public get scriptArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createScript',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateScript.Script.ScriptArn'),
        outputPath: 'Script.ScriptArn',
        parameters: {
          Name: this.input.name,
          Version: this.input.version,
          StorageLocation: {
            Bucket: this.input.storageLocation?.bucket,
            Key: this.input.storageLocation?.key,
            RoleArn: this.input.storageLocation?.roleArn,
            ObjectVersion: this.input.storageLocation?.objectVersion,
          },
          ZipFile: {
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateScript.Script.ScriptArn', props);
    return resource.getResponseField('Script.ScriptArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createScript',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateScript.Script.Name'),
        outputPath: 'Script.Name',
        parameters: {
          Name: this.input.name,
          Version: this.input.version,
          StorageLocation: {
            Bucket: this.input.storageLocation?.bucket,
            Key: this.input.storageLocation?.key,
            RoleArn: this.input.storageLocation?.roleArn,
            ObjectVersion: this.input.storageLocation?.objectVersion,
          },
          ZipFile: {
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateScript.Script.Name', props);
    return resource.getResponseField('Script.Name') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createScript',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateScript.Script.Version'),
        outputPath: 'Script.Version',
        parameters: {
          Name: this.input.name,
          Version: this.input.version,
          StorageLocation: {
            Bucket: this.input.storageLocation?.bucket,
            Key: this.input.storageLocation?.key,
            RoleArn: this.input.storageLocation?.roleArn,
            ObjectVersion: this.input.storageLocation?.objectVersion,
          },
          ZipFile: {
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateScript.Script.Version', props);
    return resource.getResponseField('Script.Version') as unknown as string;
  }

  public get sizeOnDisk(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createScript',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateScript.Script.SizeOnDisk'),
        outputPath: 'Script.SizeOnDisk',
        parameters: {
          Name: this.input.name,
          Version: this.input.version,
          StorageLocation: {
            Bucket: this.input.storageLocation?.bucket,
            Key: this.input.storageLocation?.key,
            RoleArn: this.input.storageLocation?.roleArn,
            ObjectVersion: this.input.storageLocation?.objectVersion,
          },
          ZipFile: {
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateScript.Script.SizeOnDisk', props);
    return resource.getResponseField('Script.SizeOnDisk') as unknown as number;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createScript',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateScript.Script.CreationTime'),
        outputPath: 'Script.CreationTime',
        parameters: {
          Name: this.input.name,
          Version: this.input.version,
          StorageLocation: {
            Bucket: this.input.storageLocation?.bucket,
            Key: this.input.storageLocation?.key,
            RoleArn: this.input.storageLocation?.roleArn,
            ObjectVersion: this.input.storageLocation?.objectVersion,
          },
          ZipFile: {
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateScript.Script.CreationTime', props);
    return resource.getResponseField('Script.CreationTime') as unknown as string;
  }

  public get storageLocation(): GameLiftCreateScriptScriptStorageLocation {
    return new GameLiftCreateScriptScriptStorageLocation(this, 'StorageLocation', this.__resources, this.input);
  }

}

export class GameLiftCreateScriptScriptStorageLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftCreateScriptInput) {
    super(scope, id);
  }

  public get bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createScript',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateScript.Script.StorageLocation.Bucket'),
        outputPath: 'Script.StorageLocation.Bucket',
        parameters: {
          Name: this.input.name,
          Version: this.input.version,
          StorageLocation: {
            Bucket: this.input.storageLocation?.bucket,
            Key: this.input.storageLocation?.key,
            RoleArn: this.input.storageLocation?.roleArn,
            ObjectVersion: this.input.storageLocation?.objectVersion,
          },
          ZipFile: {
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateScript.Script.StorageLocation.Bucket', props);
    return resource.getResponseField('Script.StorageLocation.Bucket') as unknown as string;
  }

  public get key(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createScript',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateScript.Script.StorageLocation.Key'),
        outputPath: 'Script.StorageLocation.Key',
        parameters: {
          Name: this.input.name,
          Version: this.input.version,
          StorageLocation: {
            Bucket: this.input.storageLocation?.bucket,
            Key: this.input.storageLocation?.key,
            RoleArn: this.input.storageLocation?.roleArn,
            ObjectVersion: this.input.storageLocation?.objectVersion,
          },
          ZipFile: {
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateScript.Script.StorageLocation.Key', props);
    return resource.getResponseField('Script.StorageLocation.Key') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createScript',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateScript.Script.StorageLocation.RoleArn'),
        outputPath: 'Script.StorageLocation.RoleArn',
        parameters: {
          Name: this.input.name,
          Version: this.input.version,
          StorageLocation: {
            Bucket: this.input.storageLocation?.bucket,
            Key: this.input.storageLocation?.key,
            RoleArn: this.input.storageLocation?.roleArn,
            ObjectVersion: this.input.storageLocation?.objectVersion,
          },
          ZipFile: {
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateScript.Script.StorageLocation.RoleArn', props);
    return resource.getResponseField('Script.StorageLocation.RoleArn') as unknown as string;
  }

  public get objectVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createScript',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateScript.Script.StorageLocation.ObjectVersion'),
        outputPath: 'Script.StorageLocation.ObjectVersion',
        parameters: {
          Name: this.input.name,
          Version: this.input.version,
          StorageLocation: {
            Bucket: this.input.storageLocation?.bucket,
            Key: this.input.storageLocation?.key,
            RoleArn: this.input.storageLocation?.roleArn,
            ObjectVersion: this.input.storageLocation?.objectVersion,
          },
          ZipFile: {
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateScript.Script.StorageLocation.ObjectVersion', props);
    return resource.getResponseField('Script.StorageLocation.ObjectVersion') as unknown as string;
  }

}

export class GameLiftCreateVpcPeeringAuthorization extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftCreateVpcPeeringAuthorizationInput) {
    super(scope, id);
  }

  public get vpcPeeringAuthorization(): GameLiftCreateVpcPeeringAuthorizationVpcPeeringAuthorization {
    return new GameLiftCreateVpcPeeringAuthorizationVpcPeeringAuthorization(this, 'VpcPeeringAuthorization', this.__resources, this.input);
  }

}

export class GameLiftCreateVpcPeeringAuthorizationVpcPeeringAuthorization extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftCreateVpcPeeringAuthorizationInput) {
    super(scope, id);
  }

  public get gameLiftAwsAccountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVpcPeeringAuthorization',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateVpcPeeringAuthorization.VpcPeeringAuthorization.GameLiftAwsAccountId'),
        outputPath: 'VpcPeeringAuthorization.GameLiftAwsAccountId',
        parameters: {
          GameLiftAwsAccountId: this.input.gameLiftAwsAccountId,
          PeerVpcId: this.input.peerVpcId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateVpcPeeringAuthorization.VpcPeeringAuthorization.GameLiftAwsAccountId', props);
    return resource.getResponseField('VpcPeeringAuthorization.GameLiftAwsAccountId') as unknown as string;
  }

  public get peerVpcAwsAccountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVpcPeeringAuthorization',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateVpcPeeringAuthorization.VpcPeeringAuthorization.PeerVpcAwsAccountId'),
        outputPath: 'VpcPeeringAuthorization.PeerVpcAwsAccountId',
        parameters: {
          GameLiftAwsAccountId: this.input.gameLiftAwsAccountId,
          PeerVpcId: this.input.peerVpcId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateVpcPeeringAuthorization.VpcPeeringAuthorization.PeerVpcAwsAccountId', props);
    return resource.getResponseField('VpcPeeringAuthorization.PeerVpcAwsAccountId') as unknown as string;
  }

  public get peerVpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVpcPeeringAuthorization',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateVpcPeeringAuthorization.VpcPeeringAuthorization.PeerVpcId'),
        outputPath: 'VpcPeeringAuthorization.PeerVpcId',
        parameters: {
          GameLiftAwsAccountId: this.input.gameLiftAwsAccountId,
          PeerVpcId: this.input.peerVpcId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateVpcPeeringAuthorization.VpcPeeringAuthorization.PeerVpcId', props);
    return resource.getResponseField('VpcPeeringAuthorization.PeerVpcId') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVpcPeeringAuthorization',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateVpcPeeringAuthorization.VpcPeeringAuthorization.CreationTime'),
        outputPath: 'VpcPeeringAuthorization.CreationTime',
        parameters: {
          GameLiftAwsAccountId: this.input.gameLiftAwsAccountId,
          PeerVpcId: this.input.peerVpcId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateVpcPeeringAuthorization.VpcPeeringAuthorization.CreationTime', props);
    return resource.getResponseField('VpcPeeringAuthorization.CreationTime') as unknown as string;
  }

  public get expirationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVpcPeeringAuthorization',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.CreateVpcPeeringAuthorization.VpcPeeringAuthorization.ExpirationTime'),
        outputPath: 'VpcPeeringAuthorization.ExpirationTime',
        parameters: {
          GameLiftAwsAccountId: this.input.gameLiftAwsAccountId,
          PeerVpcId: this.input.peerVpcId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateVpcPeeringAuthorization.VpcPeeringAuthorization.ExpirationTime', props);
    return resource.getResponseField('VpcPeeringAuthorization.ExpirationTime') as unknown as string;
  }

}

export class GameLiftDeleteGameServerGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftDeleteGameServerGroupInput) {
    super(scope, id);
  }

  public get gameServerGroup(): GameLiftDeleteGameServerGroupGameServerGroup {
    return new GameLiftDeleteGameServerGroupGameServerGroup(this, 'GameServerGroup', this.__resources, this.input);
  }

}

export class GameLiftDeleteGameServerGroupGameServerGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftDeleteGameServerGroupInput) {
    super(scope, id);
  }

  public get gameServerGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DeleteGameServerGroup.GameServerGroup.GameServerGroupName'),
        outputPath: 'GameServerGroup.GameServerGroupName',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          DeleteOption: this.input.deleteOption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteGameServerGroup.GameServerGroup.GameServerGroupName', props);
    return resource.getResponseField('GameServerGroup.GameServerGroupName') as unknown as string;
  }

  public get gameServerGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DeleteGameServerGroup.GameServerGroup.GameServerGroupArn'),
        outputPath: 'GameServerGroup.GameServerGroupArn',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          DeleteOption: this.input.deleteOption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteGameServerGroup.GameServerGroup.GameServerGroupArn', props);
    return resource.getResponseField('GameServerGroup.GameServerGroupArn') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DeleteGameServerGroup.GameServerGroup.RoleArn'),
        outputPath: 'GameServerGroup.RoleArn',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          DeleteOption: this.input.deleteOption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteGameServerGroup.GameServerGroup.RoleArn', props);
    return resource.getResponseField('GameServerGroup.RoleArn') as unknown as string;
  }

  public get instanceDefinitions(): shapes.GameLiftInstanceDefinition[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DeleteGameServerGroup.GameServerGroup.InstanceDefinitions'),
        outputPath: 'GameServerGroup.InstanceDefinitions',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          DeleteOption: this.input.deleteOption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteGameServerGroup.GameServerGroup.InstanceDefinitions', props);
    return resource.getResponseField('GameServerGroup.InstanceDefinitions') as unknown as shapes.GameLiftInstanceDefinition[];
  }

  public get balancingStrategy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DeleteGameServerGroup.GameServerGroup.BalancingStrategy'),
        outputPath: 'GameServerGroup.BalancingStrategy',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          DeleteOption: this.input.deleteOption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteGameServerGroup.GameServerGroup.BalancingStrategy', props);
    return resource.getResponseField('GameServerGroup.BalancingStrategy') as unknown as string;
  }

  public get gameServerProtectionPolicy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DeleteGameServerGroup.GameServerGroup.GameServerProtectionPolicy'),
        outputPath: 'GameServerGroup.GameServerProtectionPolicy',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          DeleteOption: this.input.deleteOption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteGameServerGroup.GameServerGroup.GameServerProtectionPolicy', props);
    return resource.getResponseField('GameServerGroup.GameServerProtectionPolicy') as unknown as string;
  }

  public get autoScalingGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DeleteGameServerGroup.GameServerGroup.AutoScalingGroupArn'),
        outputPath: 'GameServerGroup.AutoScalingGroupArn',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          DeleteOption: this.input.deleteOption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteGameServerGroup.GameServerGroup.AutoScalingGroupArn', props);
    return resource.getResponseField('GameServerGroup.AutoScalingGroupArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DeleteGameServerGroup.GameServerGroup.Status'),
        outputPath: 'GameServerGroup.Status',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          DeleteOption: this.input.deleteOption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteGameServerGroup.GameServerGroup.Status', props);
    return resource.getResponseField('GameServerGroup.Status') as unknown as string;
  }

  public get statusReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DeleteGameServerGroup.GameServerGroup.StatusReason'),
        outputPath: 'GameServerGroup.StatusReason',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          DeleteOption: this.input.deleteOption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteGameServerGroup.GameServerGroup.StatusReason', props);
    return resource.getResponseField('GameServerGroup.StatusReason') as unknown as string;
  }

  public get suspendedActions(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DeleteGameServerGroup.GameServerGroup.SuspendedActions'),
        outputPath: 'GameServerGroup.SuspendedActions',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          DeleteOption: this.input.deleteOption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteGameServerGroup.GameServerGroup.SuspendedActions', props);
    return resource.getResponseField('GameServerGroup.SuspendedActions') as unknown as string[];
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DeleteGameServerGroup.GameServerGroup.CreationTime'),
        outputPath: 'GameServerGroup.CreationTime',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          DeleteOption: this.input.deleteOption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteGameServerGroup.GameServerGroup.CreationTime', props);
    return resource.getResponseField('GameServerGroup.CreationTime') as unknown as string;
  }

  public get lastUpdatedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DeleteGameServerGroup.GameServerGroup.LastUpdatedTime'),
        outputPath: 'GameServerGroup.LastUpdatedTime',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          DeleteOption: this.input.deleteOption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteGameServerGroup.GameServerGroup.LastUpdatedTime', props);
    return resource.getResponseField('GameServerGroup.LastUpdatedTime') as unknown as string;
  }

}

export class GameLiftDescribeAlias extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftDescribeAliasInput) {
    super(scope, id);
  }

  public get alias(): GameLiftDescribeAliasAlias {
    return new GameLiftDescribeAliasAlias(this, 'Alias', this.__resources, this.input);
  }

}

export class GameLiftDescribeAliasAlias extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftDescribeAliasInput) {
    super(scope, id);
  }

  public get aliasId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlias',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeAlias.Alias.AliasId'),
        outputPath: 'Alias.AliasId',
        parameters: {
          AliasId: this.input.aliasId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAlias.Alias.AliasId', props);
    return resource.getResponseField('Alias.AliasId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlias',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeAlias.Alias.Name'),
        outputPath: 'Alias.Name',
        parameters: {
          AliasId: this.input.aliasId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAlias.Alias.Name', props);
    return resource.getResponseField('Alias.Name') as unknown as string;
  }

  public get aliasArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlias',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeAlias.Alias.AliasArn'),
        outputPath: 'Alias.AliasArn',
        parameters: {
          AliasId: this.input.aliasId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAlias.Alias.AliasArn', props);
    return resource.getResponseField('Alias.AliasArn') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlias',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeAlias.Alias.Description'),
        outputPath: 'Alias.Description',
        parameters: {
          AliasId: this.input.aliasId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAlias.Alias.Description', props);
    return resource.getResponseField('Alias.Description') as unknown as string;
  }

  public get routingStrategy(): GameLiftDescribeAliasAliasRoutingStrategy {
    return new GameLiftDescribeAliasAliasRoutingStrategy(this, 'RoutingStrategy', this.__resources, this.input);
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlias',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeAlias.Alias.CreationTime'),
        outputPath: 'Alias.CreationTime',
        parameters: {
          AliasId: this.input.aliasId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAlias.Alias.CreationTime', props);
    return resource.getResponseField('Alias.CreationTime') as unknown as string;
  }

  public get lastUpdatedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlias',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeAlias.Alias.LastUpdatedTime'),
        outputPath: 'Alias.LastUpdatedTime',
        parameters: {
          AliasId: this.input.aliasId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAlias.Alias.LastUpdatedTime', props);
    return resource.getResponseField('Alias.LastUpdatedTime') as unknown as string;
  }

}

export class GameLiftDescribeAliasAliasRoutingStrategy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftDescribeAliasInput) {
    super(scope, id);
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlias',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeAlias.Alias.RoutingStrategy.Type'),
        outputPath: 'Alias.RoutingStrategy.Type',
        parameters: {
          AliasId: this.input.aliasId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAlias.Alias.RoutingStrategy.Type', props);
    return resource.getResponseField('Alias.RoutingStrategy.Type') as unknown as string;
  }

  public get fleetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlias',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeAlias.Alias.RoutingStrategy.FleetId'),
        outputPath: 'Alias.RoutingStrategy.FleetId',
        parameters: {
          AliasId: this.input.aliasId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAlias.Alias.RoutingStrategy.FleetId', props);
    return resource.getResponseField('Alias.RoutingStrategy.FleetId') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlias',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeAlias.Alias.RoutingStrategy.Message'),
        outputPath: 'Alias.RoutingStrategy.Message',
        parameters: {
          AliasId: this.input.aliasId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAlias.Alias.RoutingStrategy.Message', props);
    return resource.getResponseField('Alias.RoutingStrategy.Message') as unknown as string;
  }

}

export class GameLiftDescribeBuild extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftDescribeBuildInput) {
    super(scope, id);
  }

  public get build(): GameLiftDescribeBuildBuild {
    return new GameLiftDescribeBuildBuild(this, 'Build', this.__resources, this.input);
  }

}

export class GameLiftDescribeBuildBuild extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftDescribeBuildInput) {
    super(scope, id);
  }

  public get buildId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBuild',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeBuild.Build.BuildId'),
        outputPath: 'Build.BuildId',
        parameters: {
          BuildId: this.input.buildId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBuild.Build.BuildId', props);
    return resource.getResponseField('Build.BuildId') as unknown as string;
  }

  public get buildArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBuild',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeBuild.Build.BuildArn'),
        outputPath: 'Build.BuildArn',
        parameters: {
          BuildId: this.input.buildId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBuild.Build.BuildArn', props);
    return resource.getResponseField('Build.BuildArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBuild',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeBuild.Build.Name'),
        outputPath: 'Build.Name',
        parameters: {
          BuildId: this.input.buildId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBuild.Build.Name', props);
    return resource.getResponseField('Build.Name') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBuild',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeBuild.Build.Version'),
        outputPath: 'Build.Version',
        parameters: {
          BuildId: this.input.buildId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBuild.Build.Version', props);
    return resource.getResponseField('Build.Version') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBuild',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeBuild.Build.Status'),
        outputPath: 'Build.Status',
        parameters: {
          BuildId: this.input.buildId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBuild.Build.Status', props);
    return resource.getResponseField('Build.Status') as unknown as string;
  }

  public get sizeOnDisk(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBuild',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeBuild.Build.SizeOnDisk'),
        outputPath: 'Build.SizeOnDisk',
        parameters: {
          BuildId: this.input.buildId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBuild.Build.SizeOnDisk', props);
    return resource.getResponseField('Build.SizeOnDisk') as unknown as number;
  }

  public get operatingSystem(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBuild',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeBuild.Build.OperatingSystem'),
        outputPath: 'Build.OperatingSystem',
        parameters: {
          BuildId: this.input.buildId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBuild.Build.OperatingSystem', props);
    return resource.getResponseField('Build.OperatingSystem') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBuild',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeBuild.Build.CreationTime'),
        outputPath: 'Build.CreationTime',
        parameters: {
          BuildId: this.input.buildId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBuild.Build.CreationTime', props);
    return resource.getResponseField('Build.CreationTime') as unknown as string;
  }

}

export class GameLiftDescribeEc2InstanceLimits extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftDescribeEc2InstanceLimitsInput) {
    super(scope, id);
  }

  public get ec2InstanceLimits(): shapes.GameLiftEc2InstanceLimit[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEc2InstanceLimits',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeEC2InstanceLimits.EC2InstanceLimits'),
        outputPath: 'EC2InstanceLimits',
        parameters: {
          EC2InstanceType: this.input.ec2InstanceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEC2InstanceLimits.EC2InstanceLimits', props);
    return resource.getResponseField('EC2InstanceLimits') as unknown as shapes.GameLiftEc2InstanceLimit[];
  }

}

export class GameLiftDescribeFleetAttributes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftDescribeFleetAttributesInput) {
    super(scope, id);
  }

  public get fleetAttributes(): shapes.GameLiftFleetAttributes[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFleetAttributes',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeFleetAttributes.FleetAttributes'),
        outputPath: 'FleetAttributes',
        parameters: {
          FleetIds: this.input.fleetIds,
          Limit: this.input.limit,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFleetAttributes.FleetAttributes', props);
    return resource.getResponseField('FleetAttributes') as unknown as shapes.GameLiftFleetAttributes[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFleetAttributes',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeFleetAttributes.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          FleetIds: this.input.fleetIds,
          Limit: this.input.limit,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFleetAttributes.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GameLiftDescribeFleetCapacity extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftDescribeFleetCapacityInput) {
    super(scope, id);
  }

  public get fleetCapacity(): shapes.GameLiftFleetCapacity[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFleetCapacity',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeFleetCapacity.FleetCapacity'),
        outputPath: 'FleetCapacity',
        parameters: {
          FleetIds: this.input.fleetIds,
          Limit: this.input.limit,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFleetCapacity.FleetCapacity', props);
    return resource.getResponseField('FleetCapacity') as unknown as shapes.GameLiftFleetCapacity[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFleetCapacity',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeFleetCapacity.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          FleetIds: this.input.fleetIds,
          Limit: this.input.limit,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFleetCapacity.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GameLiftDescribeFleetEvents extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftDescribeFleetEventsInput) {
    super(scope, id);
  }

  public get events(): shapes.GameLiftEvent[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFleetEvents',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeFleetEvents.Events'),
        outputPath: 'Events',
        parameters: {
          FleetId: this.input.fleetId,
          StartTime: this.input.startTime,
          EndTime: this.input.endTime,
          Limit: this.input.limit,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFleetEvents.Events', props);
    return resource.getResponseField('Events') as unknown as shapes.GameLiftEvent[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFleetEvents',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeFleetEvents.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          FleetId: this.input.fleetId,
          StartTime: this.input.startTime,
          EndTime: this.input.endTime,
          Limit: this.input.limit,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFleetEvents.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GameLiftDescribeFleetPortSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftDescribeFleetPortSettingsInput) {
    super(scope, id);
  }

  public get inboundPermissions(): shapes.GameLiftIpPermission[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFleetPortSettings',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeFleetPortSettings.InboundPermissions'),
        outputPath: 'InboundPermissions',
        parameters: {
          FleetId: this.input.fleetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFleetPortSettings.InboundPermissions', props);
    return resource.getResponseField('InboundPermissions') as unknown as shapes.GameLiftIpPermission[];
  }

}

export class GameLiftDescribeFleetUtilization extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftDescribeFleetUtilizationInput) {
    super(scope, id);
  }

  public get fleetUtilization(): shapes.GameLiftFleetUtilization[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFleetUtilization',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeFleetUtilization.FleetUtilization'),
        outputPath: 'FleetUtilization',
        parameters: {
          FleetIds: this.input.fleetIds,
          Limit: this.input.limit,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFleetUtilization.FleetUtilization', props);
    return resource.getResponseField('FleetUtilization') as unknown as shapes.GameLiftFleetUtilization[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFleetUtilization',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeFleetUtilization.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          FleetIds: this.input.fleetIds,
          Limit: this.input.limit,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFleetUtilization.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GameLiftDescribeGameServer extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftDescribeGameServerInput) {
    super(scope, id);
  }

  public get gameServer(): GameLiftDescribeGameServerGameServer {
    return new GameLiftDescribeGameServerGameServer(this, 'GameServer', this.__resources, this.input);
  }

}

export class GameLiftDescribeGameServerGameServer extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftDescribeGameServerInput) {
    super(scope, id);
  }

  public get gameServerGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGameServer',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeGameServer.GameServer.GameServerGroupName'),
        outputPath: 'GameServer.GameServerGroupName',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          GameServerId: this.input.gameServerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGameServer.GameServer.GameServerGroupName', props);
    return resource.getResponseField('GameServer.GameServerGroupName') as unknown as string;
  }

  public get gameServerGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGameServer',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeGameServer.GameServer.GameServerGroupArn'),
        outputPath: 'GameServer.GameServerGroupArn',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          GameServerId: this.input.gameServerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGameServer.GameServer.GameServerGroupArn', props);
    return resource.getResponseField('GameServer.GameServerGroupArn') as unknown as string;
  }

  public get gameServerId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGameServer',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeGameServer.GameServer.GameServerId'),
        outputPath: 'GameServer.GameServerId',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          GameServerId: this.input.gameServerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGameServer.GameServer.GameServerId', props);
    return resource.getResponseField('GameServer.GameServerId') as unknown as string;
  }

  public get instanceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGameServer',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeGameServer.GameServer.InstanceId'),
        outputPath: 'GameServer.InstanceId',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          GameServerId: this.input.gameServerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGameServer.GameServer.InstanceId', props);
    return resource.getResponseField('GameServer.InstanceId') as unknown as string;
  }

  public get connectionInfo(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGameServer',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeGameServer.GameServer.ConnectionInfo'),
        outputPath: 'GameServer.ConnectionInfo',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          GameServerId: this.input.gameServerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGameServer.GameServer.ConnectionInfo', props);
    return resource.getResponseField('GameServer.ConnectionInfo') as unknown as string;
  }

  public get gameServerData(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGameServer',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeGameServer.GameServer.GameServerData'),
        outputPath: 'GameServer.GameServerData',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          GameServerId: this.input.gameServerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGameServer.GameServer.GameServerData', props);
    return resource.getResponseField('GameServer.GameServerData') as unknown as string;
  }

  public get claimStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGameServer',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeGameServer.GameServer.ClaimStatus'),
        outputPath: 'GameServer.ClaimStatus',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          GameServerId: this.input.gameServerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGameServer.GameServer.ClaimStatus', props);
    return resource.getResponseField('GameServer.ClaimStatus') as unknown as string;
  }

  public get utilizationStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGameServer',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeGameServer.GameServer.UtilizationStatus'),
        outputPath: 'GameServer.UtilizationStatus',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          GameServerId: this.input.gameServerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGameServer.GameServer.UtilizationStatus', props);
    return resource.getResponseField('GameServer.UtilizationStatus') as unknown as string;
  }

  public get registrationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGameServer',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeGameServer.GameServer.RegistrationTime'),
        outputPath: 'GameServer.RegistrationTime',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          GameServerId: this.input.gameServerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGameServer.GameServer.RegistrationTime', props);
    return resource.getResponseField('GameServer.RegistrationTime') as unknown as string;
  }

  public get lastClaimTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGameServer',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeGameServer.GameServer.LastClaimTime'),
        outputPath: 'GameServer.LastClaimTime',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          GameServerId: this.input.gameServerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGameServer.GameServer.LastClaimTime', props);
    return resource.getResponseField('GameServer.LastClaimTime') as unknown as string;
  }

  public get lastHealthCheckTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGameServer',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeGameServer.GameServer.LastHealthCheckTime'),
        outputPath: 'GameServer.LastHealthCheckTime',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          GameServerId: this.input.gameServerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGameServer.GameServer.LastHealthCheckTime', props);
    return resource.getResponseField('GameServer.LastHealthCheckTime') as unknown as string;
  }

}

export class GameLiftDescribeGameServerGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftDescribeGameServerGroupInput) {
    super(scope, id);
  }

  public get gameServerGroup(): GameLiftDescribeGameServerGroupGameServerGroup {
    return new GameLiftDescribeGameServerGroupGameServerGroup(this, 'GameServerGroup', this.__resources, this.input);
  }

}

export class GameLiftDescribeGameServerGroupGameServerGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftDescribeGameServerGroupInput) {
    super(scope, id);
  }

  public get gameServerGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeGameServerGroup.GameServerGroup.GameServerGroupName'),
        outputPath: 'GameServerGroup.GameServerGroupName',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGameServerGroup.GameServerGroup.GameServerGroupName', props);
    return resource.getResponseField('GameServerGroup.GameServerGroupName') as unknown as string;
  }

  public get gameServerGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeGameServerGroup.GameServerGroup.GameServerGroupArn'),
        outputPath: 'GameServerGroup.GameServerGroupArn',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGameServerGroup.GameServerGroup.GameServerGroupArn', props);
    return resource.getResponseField('GameServerGroup.GameServerGroupArn') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeGameServerGroup.GameServerGroup.RoleArn'),
        outputPath: 'GameServerGroup.RoleArn',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGameServerGroup.GameServerGroup.RoleArn', props);
    return resource.getResponseField('GameServerGroup.RoleArn') as unknown as string;
  }

  public get instanceDefinitions(): shapes.GameLiftInstanceDefinition[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeGameServerGroup.GameServerGroup.InstanceDefinitions'),
        outputPath: 'GameServerGroup.InstanceDefinitions',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGameServerGroup.GameServerGroup.InstanceDefinitions', props);
    return resource.getResponseField('GameServerGroup.InstanceDefinitions') as unknown as shapes.GameLiftInstanceDefinition[];
  }

  public get balancingStrategy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeGameServerGroup.GameServerGroup.BalancingStrategy'),
        outputPath: 'GameServerGroup.BalancingStrategy',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGameServerGroup.GameServerGroup.BalancingStrategy', props);
    return resource.getResponseField('GameServerGroup.BalancingStrategy') as unknown as string;
  }

  public get gameServerProtectionPolicy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeGameServerGroup.GameServerGroup.GameServerProtectionPolicy'),
        outputPath: 'GameServerGroup.GameServerProtectionPolicy',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGameServerGroup.GameServerGroup.GameServerProtectionPolicy', props);
    return resource.getResponseField('GameServerGroup.GameServerProtectionPolicy') as unknown as string;
  }

  public get autoScalingGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeGameServerGroup.GameServerGroup.AutoScalingGroupArn'),
        outputPath: 'GameServerGroup.AutoScalingGroupArn',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGameServerGroup.GameServerGroup.AutoScalingGroupArn', props);
    return resource.getResponseField('GameServerGroup.AutoScalingGroupArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeGameServerGroup.GameServerGroup.Status'),
        outputPath: 'GameServerGroup.Status',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGameServerGroup.GameServerGroup.Status', props);
    return resource.getResponseField('GameServerGroup.Status') as unknown as string;
  }

  public get statusReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeGameServerGroup.GameServerGroup.StatusReason'),
        outputPath: 'GameServerGroup.StatusReason',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGameServerGroup.GameServerGroup.StatusReason', props);
    return resource.getResponseField('GameServerGroup.StatusReason') as unknown as string;
  }

  public get suspendedActions(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeGameServerGroup.GameServerGroup.SuspendedActions'),
        outputPath: 'GameServerGroup.SuspendedActions',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGameServerGroup.GameServerGroup.SuspendedActions', props);
    return resource.getResponseField('GameServerGroup.SuspendedActions') as unknown as string[];
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeGameServerGroup.GameServerGroup.CreationTime'),
        outputPath: 'GameServerGroup.CreationTime',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGameServerGroup.GameServerGroup.CreationTime', props);
    return resource.getResponseField('GameServerGroup.CreationTime') as unknown as string;
  }

  public get lastUpdatedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeGameServerGroup.GameServerGroup.LastUpdatedTime'),
        outputPath: 'GameServerGroup.LastUpdatedTime',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGameServerGroup.GameServerGroup.LastUpdatedTime', props);
    return resource.getResponseField('GameServerGroup.LastUpdatedTime') as unknown as string;
  }

}

export class GameLiftDescribeGameServerInstances extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftDescribeGameServerInstancesInput) {
    super(scope, id);
  }

  public get gameServerInstances(): shapes.GameLiftGameServerInstance[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGameServerInstances',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeGameServerInstances.GameServerInstances'),
        outputPath: 'GameServerInstances',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          InstanceIds: this.input.instanceIds,
          Limit: this.input.limit,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGameServerInstances.GameServerInstances', props);
    return resource.getResponseField('GameServerInstances') as unknown as shapes.GameLiftGameServerInstance[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGameServerInstances',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeGameServerInstances.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          InstanceIds: this.input.instanceIds,
          Limit: this.input.limit,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGameServerInstances.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GameLiftDescribeGameSessionDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftDescribeGameSessionDetailsInput) {
    super(scope, id);
  }

  public get gameSessionDetails(): shapes.GameLiftGameSessionDetail[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGameSessionDetails',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeGameSessionDetails.GameSessionDetails'),
        outputPath: 'GameSessionDetails',
        parameters: {
          FleetId: this.input.fleetId,
          GameSessionId: this.input.gameSessionId,
          AliasId: this.input.aliasId,
          StatusFilter: this.input.statusFilter,
          Limit: this.input.limit,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGameSessionDetails.GameSessionDetails', props);
    return resource.getResponseField('GameSessionDetails') as unknown as shapes.GameLiftGameSessionDetail[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGameSessionDetails',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeGameSessionDetails.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          FleetId: this.input.fleetId,
          GameSessionId: this.input.gameSessionId,
          AliasId: this.input.aliasId,
          StatusFilter: this.input.statusFilter,
          Limit: this.input.limit,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGameSessionDetails.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GameLiftDescribeGameSessionPlacement extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftDescribeGameSessionPlacementInput) {
    super(scope, id);
  }

  public get gameSessionPlacement(): GameLiftDescribeGameSessionPlacementGameSessionPlacement {
    return new GameLiftDescribeGameSessionPlacementGameSessionPlacement(this, 'GameSessionPlacement', this.__resources, this.input);
  }

}

export class GameLiftDescribeGameSessionPlacementGameSessionPlacement extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftDescribeGameSessionPlacementInput) {
    super(scope, id);
  }

  public get placementId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGameSessionPlacement',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeGameSessionPlacement.GameSessionPlacement.PlacementId'),
        outputPath: 'GameSessionPlacement.PlacementId',
        parameters: {
          PlacementId: this.input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGameSessionPlacement.GameSessionPlacement.PlacementId', props);
    return resource.getResponseField('GameSessionPlacement.PlacementId') as unknown as string;
  }

  public get gameSessionQueueName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGameSessionPlacement',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeGameSessionPlacement.GameSessionPlacement.GameSessionQueueName'),
        outputPath: 'GameSessionPlacement.GameSessionQueueName',
        parameters: {
          PlacementId: this.input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGameSessionPlacement.GameSessionPlacement.GameSessionQueueName', props);
    return resource.getResponseField('GameSessionPlacement.GameSessionQueueName') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGameSessionPlacement',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeGameSessionPlacement.GameSessionPlacement.Status'),
        outputPath: 'GameSessionPlacement.Status',
        parameters: {
          PlacementId: this.input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGameSessionPlacement.GameSessionPlacement.Status', props);
    return resource.getResponseField('GameSessionPlacement.Status') as unknown as string;
  }

  public get gameProperties(): shapes.GameLiftGameProperty[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGameSessionPlacement',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeGameSessionPlacement.GameSessionPlacement.GameProperties'),
        outputPath: 'GameSessionPlacement.GameProperties',
        parameters: {
          PlacementId: this.input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGameSessionPlacement.GameSessionPlacement.GameProperties', props);
    return resource.getResponseField('GameSessionPlacement.GameProperties') as unknown as shapes.GameLiftGameProperty[];
  }

  public get maximumPlayerSessionCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGameSessionPlacement',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeGameSessionPlacement.GameSessionPlacement.MaximumPlayerSessionCount'),
        outputPath: 'GameSessionPlacement.MaximumPlayerSessionCount',
        parameters: {
          PlacementId: this.input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGameSessionPlacement.GameSessionPlacement.MaximumPlayerSessionCount', props);
    return resource.getResponseField('GameSessionPlacement.MaximumPlayerSessionCount') as unknown as number;
  }

  public get gameSessionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGameSessionPlacement',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeGameSessionPlacement.GameSessionPlacement.GameSessionName'),
        outputPath: 'GameSessionPlacement.GameSessionName',
        parameters: {
          PlacementId: this.input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGameSessionPlacement.GameSessionPlacement.GameSessionName', props);
    return resource.getResponseField('GameSessionPlacement.GameSessionName') as unknown as string;
  }

  public get gameSessionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGameSessionPlacement',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeGameSessionPlacement.GameSessionPlacement.GameSessionId'),
        outputPath: 'GameSessionPlacement.GameSessionId',
        parameters: {
          PlacementId: this.input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGameSessionPlacement.GameSessionPlacement.GameSessionId', props);
    return resource.getResponseField('GameSessionPlacement.GameSessionId') as unknown as string;
  }

  public get gameSessionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGameSessionPlacement',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeGameSessionPlacement.GameSessionPlacement.GameSessionArn'),
        outputPath: 'GameSessionPlacement.GameSessionArn',
        parameters: {
          PlacementId: this.input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGameSessionPlacement.GameSessionPlacement.GameSessionArn', props);
    return resource.getResponseField('GameSessionPlacement.GameSessionArn') as unknown as string;
  }

  public get gameSessionRegion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGameSessionPlacement',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeGameSessionPlacement.GameSessionPlacement.GameSessionRegion'),
        outputPath: 'GameSessionPlacement.GameSessionRegion',
        parameters: {
          PlacementId: this.input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGameSessionPlacement.GameSessionPlacement.GameSessionRegion', props);
    return resource.getResponseField('GameSessionPlacement.GameSessionRegion') as unknown as string;
  }

  public get playerLatencies(): shapes.GameLiftPlayerLatency[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGameSessionPlacement',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeGameSessionPlacement.GameSessionPlacement.PlayerLatencies'),
        outputPath: 'GameSessionPlacement.PlayerLatencies',
        parameters: {
          PlacementId: this.input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGameSessionPlacement.GameSessionPlacement.PlayerLatencies', props);
    return resource.getResponseField('GameSessionPlacement.PlayerLatencies') as unknown as shapes.GameLiftPlayerLatency[];
  }

  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGameSessionPlacement',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeGameSessionPlacement.GameSessionPlacement.StartTime'),
        outputPath: 'GameSessionPlacement.StartTime',
        parameters: {
          PlacementId: this.input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGameSessionPlacement.GameSessionPlacement.StartTime', props);
    return resource.getResponseField('GameSessionPlacement.StartTime') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGameSessionPlacement',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeGameSessionPlacement.GameSessionPlacement.EndTime'),
        outputPath: 'GameSessionPlacement.EndTime',
        parameters: {
          PlacementId: this.input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGameSessionPlacement.GameSessionPlacement.EndTime', props);
    return resource.getResponseField('GameSessionPlacement.EndTime') as unknown as string;
  }

  public get ipAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGameSessionPlacement',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeGameSessionPlacement.GameSessionPlacement.IpAddress'),
        outputPath: 'GameSessionPlacement.IpAddress',
        parameters: {
          PlacementId: this.input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGameSessionPlacement.GameSessionPlacement.IpAddress', props);
    return resource.getResponseField('GameSessionPlacement.IpAddress') as unknown as string;
  }

  public get dnsName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGameSessionPlacement',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeGameSessionPlacement.GameSessionPlacement.DnsName'),
        outputPath: 'GameSessionPlacement.DnsName',
        parameters: {
          PlacementId: this.input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGameSessionPlacement.GameSessionPlacement.DnsName', props);
    return resource.getResponseField('GameSessionPlacement.DnsName') as unknown as string;
  }

  public get port(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGameSessionPlacement',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeGameSessionPlacement.GameSessionPlacement.Port'),
        outputPath: 'GameSessionPlacement.Port',
        parameters: {
          PlacementId: this.input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGameSessionPlacement.GameSessionPlacement.Port', props);
    return resource.getResponseField('GameSessionPlacement.Port') as unknown as number;
  }

  public get placedPlayerSessions(): shapes.GameLiftPlacedPlayerSession[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGameSessionPlacement',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeGameSessionPlacement.GameSessionPlacement.PlacedPlayerSessions'),
        outputPath: 'GameSessionPlacement.PlacedPlayerSessions',
        parameters: {
          PlacementId: this.input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGameSessionPlacement.GameSessionPlacement.PlacedPlayerSessions', props);
    return resource.getResponseField('GameSessionPlacement.PlacedPlayerSessions') as unknown as shapes.GameLiftPlacedPlayerSession[];
  }

  public get gameSessionData(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGameSessionPlacement',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeGameSessionPlacement.GameSessionPlacement.GameSessionData'),
        outputPath: 'GameSessionPlacement.GameSessionData',
        parameters: {
          PlacementId: this.input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGameSessionPlacement.GameSessionPlacement.GameSessionData', props);
    return resource.getResponseField('GameSessionPlacement.GameSessionData') as unknown as string;
  }

  public get matchmakerData(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGameSessionPlacement',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeGameSessionPlacement.GameSessionPlacement.MatchmakerData'),
        outputPath: 'GameSessionPlacement.MatchmakerData',
        parameters: {
          PlacementId: this.input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGameSessionPlacement.GameSessionPlacement.MatchmakerData', props);
    return resource.getResponseField('GameSessionPlacement.MatchmakerData') as unknown as string;
  }

}

export class GameLiftDescribeGameSessionQueues extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftDescribeGameSessionQueuesInput) {
    super(scope, id);
  }

  public get gameSessionQueues(): shapes.GameLiftGameSessionQueue[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGameSessionQueues',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeGameSessionQueues.GameSessionQueues'),
        outputPath: 'GameSessionQueues',
        parameters: {
          Names: this.input.names,
          Limit: this.input.limit,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGameSessionQueues.GameSessionQueues', props);
    return resource.getResponseField('GameSessionQueues') as unknown as shapes.GameLiftGameSessionQueue[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGameSessionQueues',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeGameSessionQueues.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Names: this.input.names,
          Limit: this.input.limit,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGameSessionQueues.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GameLiftDescribeGameSessions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftDescribeGameSessionsInput) {
    super(scope, id);
  }

  public get gameSessions(): shapes.GameLiftGameSession[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGameSessions',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeGameSessions.GameSessions'),
        outputPath: 'GameSessions',
        parameters: {
          FleetId: this.input.fleetId,
          GameSessionId: this.input.gameSessionId,
          AliasId: this.input.aliasId,
          StatusFilter: this.input.statusFilter,
          Limit: this.input.limit,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGameSessions.GameSessions', props);
    return resource.getResponseField('GameSessions') as unknown as shapes.GameLiftGameSession[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGameSessions',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeGameSessions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          FleetId: this.input.fleetId,
          GameSessionId: this.input.gameSessionId,
          AliasId: this.input.aliasId,
          StatusFilter: this.input.statusFilter,
          Limit: this.input.limit,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGameSessions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GameLiftDescribeInstances extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftDescribeInstancesInput) {
    super(scope, id);
  }

  public get instances(): shapes.GameLiftInstance[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInstances',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeInstances.Instances'),
        outputPath: 'Instances',
        parameters: {
          FleetId: this.input.fleetId,
          InstanceId: this.input.instanceId,
          Limit: this.input.limit,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeInstances.Instances', props);
    return resource.getResponseField('Instances') as unknown as shapes.GameLiftInstance[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInstances',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeInstances.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          FleetId: this.input.fleetId,
          InstanceId: this.input.instanceId,
          Limit: this.input.limit,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeInstances.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GameLiftDescribeMatchmaking extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftDescribeMatchmakingInput) {
    super(scope, id);
  }

  public get ticketList(): shapes.GameLiftMatchmakingTicket[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMatchmaking',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeMatchmaking.TicketList'),
        outputPath: 'TicketList',
        parameters: {
          TicketIds: this.input.ticketIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMatchmaking.TicketList', props);
    return resource.getResponseField('TicketList') as unknown as shapes.GameLiftMatchmakingTicket[];
  }

}

export class GameLiftDescribeMatchmakingConfigurations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftDescribeMatchmakingConfigurationsInput) {
    super(scope, id);
  }

  public get configurations(): shapes.GameLiftMatchmakingConfiguration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMatchmakingConfigurations',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeMatchmakingConfigurations.Configurations'),
        outputPath: 'Configurations',
        parameters: {
          Names: this.input.names,
          RuleSetName: this.input.ruleSetName,
          Limit: this.input.limit,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMatchmakingConfigurations.Configurations', props);
    return resource.getResponseField('Configurations') as unknown as shapes.GameLiftMatchmakingConfiguration[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMatchmakingConfigurations',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeMatchmakingConfigurations.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Names: this.input.names,
          RuleSetName: this.input.ruleSetName,
          Limit: this.input.limit,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMatchmakingConfigurations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GameLiftDescribeMatchmakingRuleSets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftDescribeMatchmakingRuleSetsInput) {
    super(scope, id);
  }

  public get ruleSets(): shapes.GameLiftMatchmakingRuleSet[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMatchmakingRuleSets',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeMatchmakingRuleSets.RuleSets'),
        outputPath: 'RuleSets',
        parameters: {
          Names: this.input.names,
          Limit: this.input.limit,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMatchmakingRuleSets.RuleSets', props);
    return resource.getResponseField('RuleSets') as unknown as shapes.GameLiftMatchmakingRuleSet[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMatchmakingRuleSets',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeMatchmakingRuleSets.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Names: this.input.names,
          Limit: this.input.limit,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMatchmakingRuleSets.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GameLiftDescribePlayerSessions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftDescribePlayerSessionsInput) {
    super(scope, id);
  }

  public get playerSessions(): shapes.GameLiftPlayerSession[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePlayerSessions',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribePlayerSessions.PlayerSessions'),
        outputPath: 'PlayerSessions',
        parameters: {
          GameSessionId: this.input.gameSessionId,
          PlayerId: this.input.playerId,
          PlayerSessionId: this.input.playerSessionId,
          PlayerSessionStatusFilter: this.input.playerSessionStatusFilter,
          Limit: this.input.limit,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePlayerSessions.PlayerSessions', props);
    return resource.getResponseField('PlayerSessions') as unknown as shapes.GameLiftPlayerSession[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePlayerSessions',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribePlayerSessions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          GameSessionId: this.input.gameSessionId,
          PlayerId: this.input.playerId,
          PlayerSessionId: this.input.playerSessionId,
          PlayerSessionStatusFilter: this.input.playerSessionStatusFilter,
          Limit: this.input.limit,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePlayerSessions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GameLiftDescribeRuntimeConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftDescribeRuntimeConfigurationInput) {
    super(scope, id);
  }

  public get runtimeConfiguration(): GameLiftDescribeRuntimeConfigurationRuntimeConfiguration {
    return new GameLiftDescribeRuntimeConfigurationRuntimeConfiguration(this, 'RuntimeConfiguration', this.__resources, this.input);
  }

}

export class GameLiftDescribeRuntimeConfigurationRuntimeConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftDescribeRuntimeConfigurationInput) {
    super(scope, id);
  }

  public get serverProcesses(): shapes.GameLiftServerProcess[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRuntimeConfiguration',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeRuntimeConfiguration.RuntimeConfiguration.ServerProcesses'),
        outputPath: 'RuntimeConfiguration.ServerProcesses',
        parameters: {
          FleetId: this.input.fleetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRuntimeConfiguration.RuntimeConfiguration.ServerProcesses', props);
    return resource.getResponseField('RuntimeConfiguration.ServerProcesses') as unknown as shapes.GameLiftServerProcess[];
  }

  public get maxConcurrentGameSessionActivations(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRuntimeConfiguration',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeRuntimeConfiguration.RuntimeConfiguration.MaxConcurrentGameSessionActivations'),
        outputPath: 'RuntimeConfiguration.MaxConcurrentGameSessionActivations',
        parameters: {
          FleetId: this.input.fleetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRuntimeConfiguration.RuntimeConfiguration.MaxConcurrentGameSessionActivations', props);
    return resource.getResponseField('RuntimeConfiguration.MaxConcurrentGameSessionActivations') as unknown as number;
  }

  public get gameSessionActivationTimeoutSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRuntimeConfiguration',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeRuntimeConfiguration.RuntimeConfiguration.GameSessionActivationTimeoutSeconds'),
        outputPath: 'RuntimeConfiguration.GameSessionActivationTimeoutSeconds',
        parameters: {
          FleetId: this.input.fleetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRuntimeConfiguration.RuntimeConfiguration.GameSessionActivationTimeoutSeconds', props);
    return resource.getResponseField('RuntimeConfiguration.GameSessionActivationTimeoutSeconds') as unknown as number;
  }

}

export class GameLiftDescribeScalingPolicies extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftDescribeScalingPoliciesInput) {
    super(scope, id);
  }

  public get scalingPolicies(): shapes.GameLiftScalingPolicy[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeScalingPolicies',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeScalingPolicies.ScalingPolicies'),
        outputPath: 'ScalingPolicies',
        parameters: {
          FleetId: this.input.fleetId,
          StatusFilter: this.input.statusFilter,
          Limit: this.input.limit,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeScalingPolicies.ScalingPolicies', props);
    return resource.getResponseField('ScalingPolicies') as unknown as shapes.GameLiftScalingPolicy[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeScalingPolicies',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeScalingPolicies.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          FleetId: this.input.fleetId,
          StatusFilter: this.input.statusFilter,
          Limit: this.input.limit,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeScalingPolicies.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GameLiftDescribeScript extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftDescribeScriptInput) {
    super(scope, id);
  }

  public get script(): GameLiftDescribeScriptScript {
    return new GameLiftDescribeScriptScript(this, 'Script', this.__resources, this.input);
  }

}

export class GameLiftDescribeScriptScript extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftDescribeScriptInput) {
    super(scope, id);
  }

  public get scriptId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeScript',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeScript.Script.ScriptId'),
        outputPath: 'Script.ScriptId',
        parameters: {
          ScriptId: this.input.scriptId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeScript.Script.ScriptId', props);
    return resource.getResponseField('Script.ScriptId') as unknown as string;
  }

  public get scriptArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeScript',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeScript.Script.ScriptArn'),
        outputPath: 'Script.ScriptArn',
        parameters: {
          ScriptId: this.input.scriptId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeScript.Script.ScriptArn', props);
    return resource.getResponseField('Script.ScriptArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeScript',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeScript.Script.Name'),
        outputPath: 'Script.Name',
        parameters: {
          ScriptId: this.input.scriptId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeScript.Script.Name', props);
    return resource.getResponseField('Script.Name') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeScript',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeScript.Script.Version'),
        outputPath: 'Script.Version',
        parameters: {
          ScriptId: this.input.scriptId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeScript.Script.Version', props);
    return resource.getResponseField('Script.Version') as unknown as string;
  }

  public get sizeOnDisk(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeScript',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeScript.Script.SizeOnDisk'),
        outputPath: 'Script.SizeOnDisk',
        parameters: {
          ScriptId: this.input.scriptId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeScript.Script.SizeOnDisk', props);
    return resource.getResponseField('Script.SizeOnDisk') as unknown as number;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeScript',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeScript.Script.CreationTime'),
        outputPath: 'Script.CreationTime',
        parameters: {
          ScriptId: this.input.scriptId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeScript.Script.CreationTime', props);
    return resource.getResponseField('Script.CreationTime') as unknown as string;
  }

  public get storageLocation(): GameLiftDescribeScriptScriptStorageLocation {
    return new GameLiftDescribeScriptScriptStorageLocation(this, 'StorageLocation', this.__resources, this.input);
  }

}

export class GameLiftDescribeScriptScriptStorageLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftDescribeScriptInput) {
    super(scope, id);
  }

  public get bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeScript',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeScript.Script.StorageLocation.Bucket'),
        outputPath: 'Script.StorageLocation.Bucket',
        parameters: {
          ScriptId: this.input.scriptId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeScript.Script.StorageLocation.Bucket', props);
    return resource.getResponseField('Script.StorageLocation.Bucket') as unknown as string;
  }

  public get key(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeScript',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeScript.Script.StorageLocation.Key'),
        outputPath: 'Script.StorageLocation.Key',
        parameters: {
          ScriptId: this.input.scriptId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeScript.Script.StorageLocation.Key', props);
    return resource.getResponseField('Script.StorageLocation.Key') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeScript',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeScript.Script.StorageLocation.RoleArn'),
        outputPath: 'Script.StorageLocation.RoleArn',
        parameters: {
          ScriptId: this.input.scriptId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeScript.Script.StorageLocation.RoleArn', props);
    return resource.getResponseField('Script.StorageLocation.RoleArn') as unknown as string;
  }

  public get objectVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeScript',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeScript.Script.StorageLocation.ObjectVersion'),
        outputPath: 'Script.StorageLocation.ObjectVersion',
        parameters: {
          ScriptId: this.input.scriptId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeScript.Script.StorageLocation.ObjectVersion', props);
    return resource.getResponseField('Script.StorageLocation.ObjectVersion') as unknown as string;
  }

}

export class GameLiftDescribeVpcPeeringAuthorizations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get vpcPeeringAuthorizations(): shapes.GameLiftVpcPeeringAuthorization[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeVpcPeeringAuthorizations',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeVpcPeeringAuthorizations.VpcPeeringAuthorizations'),
        outputPath: 'VpcPeeringAuthorizations',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeVpcPeeringAuthorizations.VpcPeeringAuthorizations', props);
    return resource.getResponseField('VpcPeeringAuthorizations') as unknown as shapes.GameLiftVpcPeeringAuthorization[];
  }

}

export class GameLiftDescribeVpcPeeringConnections extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftDescribeVpcPeeringConnectionsInput) {
    super(scope, id);
  }

  public get vpcPeeringConnections(): shapes.GameLiftVpcPeeringConnection[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeVpcPeeringConnections',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.DescribeVpcPeeringConnections.VpcPeeringConnections'),
        outputPath: 'VpcPeeringConnections',
        parameters: {
          FleetId: this.input.fleetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeVpcPeeringConnections.VpcPeeringConnections', props);
    return resource.getResponseField('VpcPeeringConnections') as unknown as shapes.GameLiftVpcPeeringConnection[];
  }

}

export class GameLiftFetchGameSessionLogUrl extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftGetGameSessionLogUrlInput) {
    super(scope, id);
  }

  public get preSignedUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGameSessionLogUrl',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.GetGameSessionLogUrl.PreSignedUrl'),
        outputPath: 'PreSignedUrl',
        parameters: {
          GameSessionId: this.input.gameSessionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGameSessionLogUrl.PreSignedUrl', props);
    return resource.getResponseField('PreSignedUrl') as unknown as string;
  }

}

export class GameLiftFetchInstanceAccess extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftGetInstanceAccessInput) {
    super(scope, id);
  }

  public get instanceAccess(): GameLiftFetchInstanceAccessInstanceAccess {
    return new GameLiftFetchInstanceAccessInstanceAccess(this, 'InstanceAccess', this.__resources, this.input);
  }

}

export class GameLiftFetchInstanceAccessInstanceAccess extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftGetInstanceAccessInput) {
    super(scope, id);
  }

  public get fleetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstanceAccess',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.GetInstanceAccess.InstanceAccess.FleetId'),
        outputPath: 'InstanceAccess.FleetId',
        parameters: {
          FleetId: this.input.fleetId,
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstanceAccess.InstanceAccess.FleetId', props);
    return resource.getResponseField('InstanceAccess.FleetId') as unknown as string;
  }

  public get instanceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstanceAccess',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.GetInstanceAccess.InstanceAccess.InstanceId'),
        outputPath: 'InstanceAccess.InstanceId',
        parameters: {
          FleetId: this.input.fleetId,
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstanceAccess.InstanceAccess.InstanceId', props);
    return resource.getResponseField('InstanceAccess.InstanceId') as unknown as string;
  }

  public get ipAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstanceAccess',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.GetInstanceAccess.InstanceAccess.IpAddress'),
        outputPath: 'InstanceAccess.IpAddress',
        parameters: {
          FleetId: this.input.fleetId,
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstanceAccess.InstanceAccess.IpAddress', props);
    return resource.getResponseField('InstanceAccess.IpAddress') as unknown as string;
  }

  public get operatingSystem(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstanceAccess',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.GetInstanceAccess.InstanceAccess.OperatingSystem'),
        outputPath: 'InstanceAccess.OperatingSystem',
        parameters: {
          FleetId: this.input.fleetId,
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstanceAccess.InstanceAccess.OperatingSystem', props);
    return resource.getResponseField('InstanceAccess.OperatingSystem') as unknown as string;
  }

  public get credentials(): GameLiftFetchInstanceAccessInstanceAccessCredentials {
    return new GameLiftFetchInstanceAccessInstanceAccessCredentials(this, 'Credentials', this.__resources, this.input);
  }

}

export class GameLiftFetchInstanceAccessInstanceAccessCredentials extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftGetInstanceAccessInput) {
    super(scope, id);
  }

  public get userName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstanceAccess',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.GetInstanceAccess.InstanceAccess.Credentials.UserName'),
        outputPath: 'InstanceAccess.Credentials.UserName',
        parameters: {
          FleetId: this.input.fleetId,
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstanceAccess.InstanceAccess.Credentials.UserName', props);
    return resource.getResponseField('InstanceAccess.Credentials.UserName') as unknown as string;
  }

  public get secret(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstanceAccess',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.GetInstanceAccess.InstanceAccess.Credentials.Secret'),
        outputPath: 'InstanceAccess.Credentials.Secret',
        parameters: {
          FleetId: this.input.fleetId,
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstanceAccess.InstanceAccess.Credentials.Secret', props);
    return resource.getResponseField('InstanceAccess.Credentials.Secret') as unknown as string;
  }

}

export class GameLiftListAliases extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftListAliasesInput) {
    super(scope, id);
  }

  public get aliases(): shapes.GameLiftAlias[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAliases',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.ListAliases.Aliases'),
        outputPath: 'Aliases',
        parameters: {
          RoutingStrategyType: this.input.routingStrategyType,
          Name: this.input.name,
          Limit: this.input.limit,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAliases.Aliases', props);
    return resource.getResponseField('Aliases') as unknown as shapes.GameLiftAlias[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAliases',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.ListAliases.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          RoutingStrategyType: this.input.routingStrategyType,
          Name: this.input.name,
          Limit: this.input.limit,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAliases.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GameLiftListBuilds extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftListBuildsInput) {
    super(scope, id);
  }

  public get builds(): shapes.GameLiftBuild[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listBuilds',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.ListBuilds.Builds'),
        outputPath: 'Builds',
        parameters: {
          Status: this.input.status,
          Limit: this.input.limit,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListBuilds.Builds', props);
    return resource.getResponseField('Builds') as unknown as shapes.GameLiftBuild[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listBuilds',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.ListBuilds.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Status: this.input.status,
          Limit: this.input.limit,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListBuilds.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GameLiftListFleets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftListFleetsInput) {
    super(scope, id);
  }

  public get fleetIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFleets',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.ListFleets.FleetIds'),
        outputPath: 'FleetIds',
        parameters: {
          BuildId: this.input.buildId,
          ScriptId: this.input.scriptId,
          Limit: this.input.limit,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListFleets.FleetIds', props);
    return resource.getResponseField('FleetIds') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFleets',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.ListFleets.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          BuildId: this.input.buildId,
          ScriptId: this.input.scriptId,
          Limit: this.input.limit,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListFleets.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GameLiftListGameServerGroups extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftListGameServerGroupsInput) {
    super(scope, id);
  }

  public get gameServerGroups(): shapes.GameLiftGameServerGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGameServerGroups',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.ListGameServerGroups.GameServerGroups'),
        outputPath: 'GameServerGroups',
        parameters: {
          Limit: this.input.limit,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListGameServerGroups.GameServerGroups', props);
    return resource.getResponseField('GameServerGroups') as unknown as shapes.GameLiftGameServerGroup[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGameServerGroups',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.ListGameServerGroups.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Limit: this.input.limit,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListGameServerGroups.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GameLiftListGameServers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftListGameServersInput) {
    super(scope, id);
  }

  public get gameServers(): shapes.GameLiftGameServer[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGameServers',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.ListGameServers.GameServers'),
        outputPath: 'GameServers',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          SortOrder: this.input.sortOrder,
          Limit: this.input.limit,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListGameServers.GameServers', props);
    return resource.getResponseField('GameServers') as unknown as shapes.GameLiftGameServer[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGameServers',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.ListGameServers.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          SortOrder: this.input.sortOrder,
          Limit: this.input.limit,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListGameServers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GameLiftListScripts extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftListScriptsInput) {
    super(scope, id);
  }

  public get scripts(): shapes.GameLiftScript[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listScripts',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.ListScripts.Scripts'),
        outputPath: 'Scripts',
        parameters: {
          Limit: this.input.limit,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListScripts.Scripts', props);
    return resource.getResponseField('Scripts') as unknown as shapes.GameLiftScript[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listScripts',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.ListScripts.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Limit: this.input.limit,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListScripts.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GameLiftListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftListTagsForResourceRequest) {
    super(scope, id);
  }

  public get tags(): shapes.GameLiftTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.ListTagsForResource.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceARN: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.GameLiftTag[];
  }

}

export class GameLiftPutScalingPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftPutScalingPolicyInput) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putScalingPolicy',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.PutScalingPolicy.Name'),
        outputPath: 'Name',
        parameters: {
          Name: this.input.name,
          FleetId: this.input.fleetId,
          ScalingAdjustment: this.input.scalingAdjustment,
          ScalingAdjustmentType: this.input.scalingAdjustmentType,
          Threshold: this.input.threshold,
          ComparisonOperator: this.input.comparisonOperator,
          EvaluationPeriods: this.input.evaluationPeriods,
          MetricName: this.input.metricName,
          PolicyType: this.input.policyType,
          TargetConfiguration: {
            TargetValue: this.input.targetConfiguration?.targetValue,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutScalingPolicy.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class GameLiftRegisterGameServer extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftRegisterGameServerInput) {
    super(scope, id);
  }

  public get gameServer(): GameLiftRegisterGameServerGameServer {
    return new GameLiftRegisterGameServerGameServer(this, 'GameServer', this.__resources, this.input);
  }

}

export class GameLiftRegisterGameServerGameServer extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftRegisterGameServerInput) {
    super(scope, id);
  }

  public get gameServerGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerGameServer',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.RegisterGameServer.GameServer.GameServerGroupName'),
        outputPath: 'GameServer.GameServerGroupName',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          GameServerId: this.input.gameServerId,
          InstanceId: this.input.instanceId,
          ConnectionInfo: this.input.connectionInfo,
          GameServerData: this.input.gameServerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterGameServer.GameServer.GameServerGroupName', props);
    return resource.getResponseField('GameServer.GameServerGroupName') as unknown as string;
  }

  public get gameServerGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerGameServer',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.RegisterGameServer.GameServer.GameServerGroupArn'),
        outputPath: 'GameServer.GameServerGroupArn',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          GameServerId: this.input.gameServerId,
          InstanceId: this.input.instanceId,
          ConnectionInfo: this.input.connectionInfo,
          GameServerData: this.input.gameServerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterGameServer.GameServer.GameServerGroupArn', props);
    return resource.getResponseField('GameServer.GameServerGroupArn') as unknown as string;
  }

  public get gameServerId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerGameServer',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.RegisterGameServer.GameServer.GameServerId'),
        outputPath: 'GameServer.GameServerId',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          GameServerId: this.input.gameServerId,
          InstanceId: this.input.instanceId,
          ConnectionInfo: this.input.connectionInfo,
          GameServerData: this.input.gameServerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterGameServer.GameServer.GameServerId', props);
    return resource.getResponseField('GameServer.GameServerId') as unknown as string;
  }

  public get instanceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerGameServer',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.RegisterGameServer.GameServer.InstanceId'),
        outputPath: 'GameServer.InstanceId',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          GameServerId: this.input.gameServerId,
          InstanceId: this.input.instanceId,
          ConnectionInfo: this.input.connectionInfo,
          GameServerData: this.input.gameServerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterGameServer.GameServer.InstanceId', props);
    return resource.getResponseField('GameServer.InstanceId') as unknown as string;
  }

  public get connectionInfo(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerGameServer',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.RegisterGameServer.GameServer.ConnectionInfo'),
        outputPath: 'GameServer.ConnectionInfo',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          GameServerId: this.input.gameServerId,
          InstanceId: this.input.instanceId,
          ConnectionInfo: this.input.connectionInfo,
          GameServerData: this.input.gameServerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterGameServer.GameServer.ConnectionInfo', props);
    return resource.getResponseField('GameServer.ConnectionInfo') as unknown as string;
  }

  public get gameServerData(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerGameServer',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.RegisterGameServer.GameServer.GameServerData'),
        outputPath: 'GameServer.GameServerData',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          GameServerId: this.input.gameServerId,
          InstanceId: this.input.instanceId,
          ConnectionInfo: this.input.connectionInfo,
          GameServerData: this.input.gameServerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterGameServer.GameServer.GameServerData', props);
    return resource.getResponseField('GameServer.GameServerData') as unknown as string;
  }

  public get claimStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerGameServer',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.RegisterGameServer.GameServer.ClaimStatus'),
        outputPath: 'GameServer.ClaimStatus',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          GameServerId: this.input.gameServerId,
          InstanceId: this.input.instanceId,
          ConnectionInfo: this.input.connectionInfo,
          GameServerData: this.input.gameServerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterGameServer.GameServer.ClaimStatus', props);
    return resource.getResponseField('GameServer.ClaimStatus') as unknown as string;
  }

  public get utilizationStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerGameServer',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.RegisterGameServer.GameServer.UtilizationStatus'),
        outputPath: 'GameServer.UtilizationStatus',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          GameServerId: this.input.gameServerId,
          InstanceId: this.input.instanceId,
          ConnectionInfo: this.input.connectionInfo,
          GameServerData: this.input.gameServerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterGameServer.GameServer.UtilizationStatus', props);
    return resource.getResponseField('GameServer.UtilizationStatus') as unknown as string;
  }

  public get registrationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerGameServer',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.RegisterGameServer.GameServer.RegistrationTime'),
        outputPath: 'GameServer.RegistrationTime',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          GameServerId: this.input.gameServerId,
          InstanceId: this.input.instanceId,
          ConnectionInfo: this.input.connectionInfo,
          GameServerData: this.input.gameServerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterGameServer.GameServer.RegistrationTime', props);
    return resource.getResponseField('GameServer.RegistrationTime') as unknown as string;
  }

  public get lastClaimTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerGameServer',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.RegisterGameServer.GameServer.LastClaimTime'),
        outputPath: 'GameServer.LastClaimTime',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          GameServerId: this.input.gameServerId,
          InstanceId: this.input.instanceId,
          ConnectionInfo: this.input.connectionInfo,
          GameServerData: this.input.gameServerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterGameServer.GameServer.LastClaimTime', props);
    return resource.getResponseField('GameServer.LastClaimTime') as unknown as string;
  }

  public get lastHealthCheckTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerGameServer',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.RegisterGameServer.GameServer.LastHealthCheckTime'),
        outputPath: 'GameServer.LastHealthCheckTime',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          GameServerId: this.input.gameServerId,
          InstanceId: this.input.instanceId,
          ConnectionInfo: this.input.connectionInfo,
          GameServerData: this.input.gameServerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterGameServer.GameServer.LastHealthCheckTime', props);
    return resource.getResponseField('GameServer.LastHealthCheckTime') as unknown as string;
  }

}

export class GameLiftRequestUploadCredentials extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftRequestUploadCredentialsInput) {
    super(scope, id);
  }

  public get uploadCredentials(): GameLiftRequestUploadCredentialsUploadCredentials {
    return new GameLiftRequestUploadCredentialsUploadCredentials(this, 'UploadCredentials', this.__resources, this.input);
  }

  public get storageLocation(): GameLiftRequestUploadCredentialsStorageLocation {
    return new GameLiftRequestUploadCredentialsStorageLocation(this, 'StorageLocation', this.__resources, this.input);
  }

}

export class GameLiftRequestUploadCredentialsUploadCredentials extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftRequestUploadCredentialsInput) {
    super(scope, id);
  }

  public get accessKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'requestUploadCredentials',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.RequestUploadCredentials.UploadCredentials.AccessKeyId'),
        outputPath: 'UploadCredentials.AccessKeyId',
        parameters: {
          BuildId: this.input.buildId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RequestUploadCredentials.UploadCredentials.AccessKeyId', props);
    return resource.getResponseField('UploadCredentials.AccessKeyId') as unknown as string;
  }

  public get secretAccessKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'requestUploadCredentials',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.RequestUploadCredentials.UploadCredentials.SecretAccessKey'),
        outputPath: 'UploadCredentials.SecretAccessKey',
        parameters: {
          BuildId: this.input.buildId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RequestUploadCredentials.UploadCredentials.SecretAccessKey', props);
    return resource.getResponseField('UploadCredentials.SecretAccessKey') as unknown as string;
  }

  public get sessionToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'requestUploadCredentials',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.RequestUploadCredentials.UploadCredentials.SessionToken'),
        outputPath: 'UploadCredentials.SessionToken',
        parameters: {
          BuildId: this.input.buildId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RequestUploadCredentials.UploadCredentials.SessionToken', props);
    return resource.getResponseField('UploadCredentials.SessionToken') as unknown as string;
  }

}

export class GameLiftRequestUploadCredentialsStorageLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftRequestUploadCredentialsInput) {
    super(scope, id);
  }

  public get bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'requestUploadCredentials',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.RequestUploadCredentials.StorageLocation.Bucket'),
        outputPath: 'StorageLocation.Bucket',
        parameters: {
          BuildId: this.input.buildId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RequestUploadCredentials.StorageLocation.Bucket', props);
    return resource.getResponseField('StorageLocation.Bucket') as unknown as string;
  }

  public get key(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'requestUploadCredentials',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.RequestUploadCredentials.StorageLocation.Key'),
        outputPath: 'StorageLocation.Key',
        parameters: {
          BuildId: this.input.buildId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RequestUploadCredentials.StorageLocation.Key', props);
    return resource.getResponseField('StorageLocation.Key') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'requestUploadCredentials',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.RequestUploadCredentials.StorageLocation.RoleArn'),
        outputPath: 'StorageLocation.RoleArn',
        parameters: {
          BuildId: this.input.buildId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RequestUploadCredentials.StorageLocation.RoleArn', props);
    return resource.getResponseField('StorageLocation.RoleArn') as unknown as string;
  }

  public get objectVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'requestUploadCredentials',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.RequestUploadCredentials.StorageLocation.ObjectVersion'),
        outputPath: 'StorageLocation.ObjectVersion',
        parameters: {
          BuildId: this.input.buildId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RequestUploadCredentials.StorageLocation.ObjectVersion', props);
    return resource.getResponseField('StorageLocation.ObjectVersion') as unknown as string;
  }

}

export class GameLiftResolveAlias extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftResolveAliasInput) {
    super(scope, id);
  }

  public get fleetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resolveAlias',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.ResolveAlias.FleetId'),
        outputPath: 'FleetId',
        parameters: {
          AliasId: this.input.aliasId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResolveAlias.FleetId', props);
    return resource.getResponseField('FleetId') as unknown as string;
  }

  public get fleetArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resolveAlias',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.ResolveAlias.FleetArn'),
        outputPath: 'FleetArn',
        parameters: {
          AliasId: this.input.aliasId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResolveAlias.FleetArn', props);
    return resource.getResponseField('FleetArn') as unknown as string;
  }

}

export class GameLiftResumeGameServerGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftResumeGameServerGroupInput) {
    super(scope, id);
  }

  public get gameServerGroup(): GameLiftResumeGameServerGroupGameServerGroup {
    return new GameLiftResumeGameServerGroupGameServerGroup(this, 'GameServerGroup', this.__resources, this.input);
  }

}

export class GameLiftResumeGameServerGroupGameServerGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftResumeGameServerGroupInput) {
    super(scope, id);
  }

  public get gameServerGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resumeGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.ResumeGameServerGroup.GameServerGroup.GameServerGroupName'),
        outputPath: 'GameServerGroup.GameServerGroupName',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          ResumeActions: this.input.resumeActions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResumeGameServerGroup.GameServerGroup.GameServerGroupName', props);
    return resource.getResponseField('GameServerGroup.GameServerGroupName') as unknown as string;
  }

  public get gameServerGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resumeGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.ResumeGameServerGroup.GameServerGroup.GameServerGroupArn'),
        outputPath: 'GameServerGroup.GameServerGroupArn',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          ResumeActions: this.input.resumeActions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResumeGameServerGroup.GameServerGroup.GameServerGroupArn', props);
    return resource.getResponseField('GameServerGroup.GameServerGroupArn') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resumeGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.ResumeGameServerGroup.GameServerGroup.RoleArn'),
        outputPath: 'GameServerGroup.RoleArn',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          ResumeActions: this.input.resumeActions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResumeGameServerGroup.GameServerGroup.RoleArn', props);
    return resource.getResponseField('GameServerGroup.RoleArn') as unknown as string;
  }

  public get instanceDefinitions(): shapes.GameLiftInstanceDefinition[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resumeGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.ResumeGameServerGroup.GameServerGroup.InstanceDefinitions'),
        outputPath: 'GameServerGroup.InstanceDefinitions',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          ResumeActions: this.input.resumeActions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResumeGameServerGroup.GameServerGroup.InstanceDefinitions', props);
    return resource.getResponseField('GameServerGroup.InstanceDefinitions') as unknown as shapes.GameLiftInstanceDefinition[];
  }

  public get balancingStrategy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resumeGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.ResumeGameServerGroup.GameServerGroup.BalancingStrategy'),
        outputPath: 'GameServerGroup.BalancingStrategy',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          ResumeActions: this.input.resumeActions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResumeGameServerGroup.GameServerGroup.BalancingStrategy', props);
    return resource.getResponseField('GameServerGroup.BalancingStrategy') as unknown as string;
  }

  public get gameServerProtectionPolicy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resumeGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.ResumeGameServerGroup.GameServerGroup.GameServerProtectionPolicy'),
        outputPath: 'GameServerGroup.GameServerProtectionPolicy',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          ResumeActions: this.input.resumeActions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResumeGameServerGroup.GameServerGroup.GameServerProtectionPolicy', props);
    return resource.getResponseField('GameServerGroup.GameServerProtectionPolicy') as unknown as string;
  }

  public get autoScalingGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resumeGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.ResumeGameServerGroup.GameServerGroup.AutoScalingGroupArn'),
        outputPath: 'GameServerGroup.AutoScalingGroupArn',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          ResumeActions: this.input.resumeActions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResumeGameServerGroup.GameServerGroup.AutoScalingGroupArn', props);
    return resource.getResponseField('GameServerGroup.AutoScalingGroupArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resumeGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.ResumeGameServerGroup.GameServerGroup.Status'),
        outputPath: 'GameServerGroup.Status',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          ResumeActions: this.input.resumeActions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResumeGameServerGroup.GameServerGroup.Status', props);
    return resource.getResponseField('GameServerGroup.Status') as unknown as string;
  }

  public get statusReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resumeGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.ResumeGameServerGroup.GameServerGroup.StatusReason'),
        outputPath: 'GameServerGroup.StatusReason',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          ResumeActions: this.input.resumeActions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResumeGameServerGroup.GameServerGroup.StatusReason', props);
    return resource.getResponseField('GameServerGroup.StatusReason') as unknown as string;
  }

  public get suspendedActions(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resumeGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.ResumeGameServerGroup.GameServerGroup.SuspendedActions'),
        outputPath: 'GameServerGroup.SuspendedActions',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          ResumeActions: this.input.resumeActions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResumeGameServerGroup.GameServerGroup.SuspendedActions', props);
    return resource.getResponseField('GameServerGroup.SuspendedActions') as unknown as string[];
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resumeGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.ResumeGameServerGroup.GameServerGroup.CreationTime'),
        outputPath: 'GameServerGroup.CreationTime',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          ResumeActions: this.input.resumeActions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResumeGameServerGroup.GameServerGroup.CreationTime', props);
    return resource.getResponseField('GameServerGroup.CreationTime') as unknown as string;
  }

  public get lastUpdatedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resumeGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.ResumeGameServerGroup.GameServerGroup.LastUpdatedTime'),
        outputPath: 'GameServerGroup.LastUpdatedTime',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          ResumeActions: this.input.resumeActions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResumeGameServerGroup.GameServerGroup.LastUpdatedTime', props);
    return resource.getResponseField('GameServerGroup.LastUpdatedTime') as unknown as string;
  }

}

export class GameLiftSearchGameSessions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftSearchGameSessionsInput) {
    super(scope, id);
  }

  public get gameSessions(): shapes.GameLiftGameSession[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchGameSessions',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.SearchGameSessions.GameSessions'),
        outputPath: 'GameSessions',
        parameters: {
          FleetId: this.input.fleetId,
          AliasId: this.input.aliasId,
          FilterExpression: this.input.filterExpression,
          SortExpression: this.input.sortExpression,
          Limit: this.input.limit,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SearchGameSessions.GameSessions', props);
    return resource.getResponseField('GameSessions') as unknown as shapes.GameLiftGameSession[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchGameSessions',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.SearchGameSessions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          FleetId: this.input.fleetId,
          AliasId: this.input.aliasId,
          FilterExpression: this.input.filterExpression,
          SortExpression: this.input.sortExpression,
          Limit: this.input.limit,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SearchGameSessions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GameLiftStartGameSessionPlacement extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftStartGameSessionPlacementInput) {
    super(scope, id);
  }

  public get gameSessionPlacement(): GameLiftStartGameSessionPlacementGameSessionPlacement {
    return new GameLiftStartGameSessionPlacementGameSessionPlacement(this, 'GameSessionPlacement', this.__resources, this.input);
  }

}

export class GameLiftStartGameSessionPlacementGameSessionPlacement extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftStartGameSessionPlacementInput) {
    super(scope, id);
  }

  public get placementId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startGameSessionPlacement',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StartGameSessionPlacement.GameSessionPlacement.PlacementId'),
        outputPath: 'GameSessionPlacement.PlacementId',
        parameters: {
          PlacementId: this.input.placementId,
          GameSessionQueueName: this.input.gameSessionQueueName,
          GameProperties: this.input.gameProperties,
          MaximumPlayerSessionCount: this.input.maximumPlayerSessionCount,
          GameSessionName: this.input.gameSessionName,
          PlayerLatencies: this.input.playerLatencies,
          DesiredPlayerSessions: this.input.desiredPlayerSessions,
          GameSessionData: this.input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartGameSessionPlacement.GameSessionPlacement.PlacementId', props);
    return resource.getResponseField('GameSessionPlacement.PlacementId') as unknown as string;
  }

  public get gameSessionQueueName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startGameSessionPlacement',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StartGameSessionPlacement.GameSessionPlacement.GameSessionQueueName'),
        outputPath: 'GameSessionPlacement.GameSessionQueueName',
        parameters: {
          PlacementId: this.input.placementId,
          GameSessionQueueName: this.input.gameSessionQueueName,
          GameProperties: this.input.gameProperties,
          MaximumPlayerSessionCount: this.input.maximumPlayerSessionCount,
          GameSessionName: this.input.gameSessionName,
          PlayerLatencies: this.input.playerLatencies,
          DesiredPlayerSessions: this.input.desiredPlayerSessions,
          GameSessionData: this.input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartGameSessionPlacement.GameSessionPlacement.GameSessionQueueName', props);
    return resource.getResponseField('GameSessionPlacement.GameSessionQueueName') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startGameSessionPlacement',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StartGameSessionPlacement.GameSessionPlacement.Status'),
        outputPath: 'GameSessionPlacement.Status',
        parameters: {
          PlacementId: this.input.placementId,
          GameSessionQueueName: this.input.gameSessionQueueName,
          GameProperties: this.input.gameProperties,
          MaximumPlayerSessionCount: this.input.maximumPlayerSessionCount,
          GameSessionName: this.input.gameSessionName,
          PlayerLatencies: this.input.playerLatencies,
          DesiredPlayerSessions: this.input.desiredPlayerSessions,
          GameSessionData: this.input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartGameSessionPlacement.GameSessionPlacement.Status', props);
    return resource.getResponseField('GameSessionPlacement.Status') as unknown as string;
  }

  public get gameProperties(): shapes.GameLiftGameProperty[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startGameSessionPlacement',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StartGameSessionPlacement.GameSessionPlacement.GameProperties'),
        outputPath: 'GameSessionPlacement.GameProperties',
        parameters: {
          PlacementId: this.input.placementId,
          GameSessionQueueName: this.input.gameSessionQueueName,
          GameProperties: this.input.gameProperties,
          MaximumPlayerSessionCount: this.input.maximumPlayerSessionCount,
          GameSessionName: this.input.gameSessionName,
          PlayerLatencies: this.input.playerLatencies,
          DesiredPlayerSessions: this.input.desiredPlayerSessions,
          GameSessionData: this.input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartGameSessionPlacement.GameSessionPlacement.GameProperties', props);
    return resource.getResponseField('GameSessionPlacement.GameProperties') as unknown as shapes.GameLiftGameProperty[];
  }

  public get maximumPlayerSessionCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startGameSessionPlacement',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StartGameSessionPlacement.GameSessionPlacement.MaximumPlayerSessionCount'),
        outputPath: 'GameSessionPlacement.MaximumPlayerSessionCount',
        parameters: {
          PlacementId: this.input.placementId,
          GameSessionQueueName: this.input.gameSessionQueueName,
          GameProperties: this.input.gameProperties,
          MaximumPlayerSessionCount: this.input.maximumPlayerSessionCount,
          GameSessionName: this.input.gameSessionName,
          PlayerLatencies: this.input.playerLatencies,
          DesiredPlayerSessions: this.input.desiredPlayerSessions,
          GameSessionData: this.input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartGameSessionPlacement.GameSessionPlacement.MaximumPlayerSessionCount', props);
    return resource.getResponseField('GameSessionPlacement.MaximumPlayerSessionCount') as unknown as number;
  }

  public get gameSessionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startGameSessionPlacement',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StartGameSessionPlacement.GameSessionPlacement.GameSessionName'),
        outputPath: 'GameSessionPlacement.GameSessionName',
        parameters: {
          PlacementId: this.input.placementId,
          GameSessionQueueName: this.input.gameSessionQueueName,
          GameProperties: this.input.gameProperties,
          MaximumPlayerSessionCount: this.input.maximumPlayerSessionCount,
          GameSessionName: this.input.gameSessionName,
          PlayerLatencies: this.input.playerLatencies,
          DesiredPlayerSessions: this.input.desiredPlayerSessions,
          GameSessionData: this.input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartGameSessionPlacement.GameSessionPlacement.GameSessionName', props);
    return resource.getResponseField('GameSessionPlacement.GameSessionName') as unknown as string;
  }

  public get gameSessionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startGameSessionPlacement',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StartGameSessionPlacement.GameSessionPlacement.GameSessionId'),
        outputPath: 'GameSessionPlacement.GameSessionId',
        parameters: {
          PlacementId: this.input.placementId,
          GameSessionQueueName: this.input.gameSessionQueueName,
          GameProperties: this.input.gameProperties,
          MaximumPlayerSessionCount: this.input.maximumPlayerSessionCount,
          GameSessionName: this.input.gameSessionName,
          PlayerLatencies: this.input.playerLatencies,
          DesiredPlayerSessions: this.input.desiredPlayerSessions,
          GameSessionData: this.input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartGameSessionPlacement.GameSessionPlacement.GameSessionId', props);
    return resource.getResponseField('GameSessionPlacement.GameSessionId') as unknown as string;
  }

  public get gameSessionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startGameSessionPlacement',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StartGameSessionPlacement.GameSessionPlacement.GameSessionArn'),
        outputPath: 'GameSessionPlacement.GameSessionArn',
        parameters: {
          PlacementId: this.input.placementId,
          GameSessionQueueName: this.input.gameSessionQueueName,
          GameProperties: this.input.gameProperties,
          MaximumPlayerSessionCount: this.input.maximumPlayerSessionCount,
          GameSessionName: this.input.gameSessionName,
          PlayerLatencies: this.input.playerLatencies,
          DesiredPlayerSessions: this.input.desiredPlayerSessions,
          GameSessionData: this.input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartGameSessionPlacement.GameSessionPlacement.GameSessionArn', props);
    return resource.getResponseField('GameSessionPlacement.GameSessionArn') as unknown as string;
  }

  public get gameSessionRegion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startGameSessionPlacement',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StartGameSessionPlacement.GameSessionPlacement.GameSessionRegion'),
        outputPath: 'GameSessionPlacement.GameSessionRegion',
        parameters: {
          PlacementId: this.input.placementId,
          GameSessionQueueName: this.input.gameSessionQueueName,
          GameProperties: this.input.gameProperties,
          MaximumPlayerSessionCount: this.input.maximumPlayerSessionCount,
          GameSessionName: this.input.gameSessionName,
          PlayerLatencies: this.input.playerLatencies,
          DesiredPlayerSessions: this.input.desiredPlayerSessions,
          GameSessionData: this.input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartGameSessionPlacement.GameSessionPlacement.GameSessionRegion', props);
    return resource.getResponseField('GameSessionPlacement.GameSessionRegion') as unknown as string;
  }

  public get playerLatencies(): shapes.GameLiftPlayerLatency[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startGameSessionPlacement',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StartGameSessionPlacement.GameSessionPlacement.PlayerLatencies'),
        outputPath: 'GameSessionPlacement.PlayerLatencies',
        parameters: {
          PlacementId: this.input.placementId,
          GameSessionQueueName: this.input.gameSessionQueueName,
          GameProperties: this.input.gameProperties,
          MaximumPlayerSessionCount: this.input.maximumPlayerSessionCount,
          GameSessionName: this.input.gameSessionName,
          PlayerLatencies: this.input.playerLatencies,
          DesiredPlayerSessions: this.input.desiredPlayerSessions,
          GameSessionData: this.input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartGameSessionPlacement.GameSessionPlacement.PlayerLatencies', props);
    return resource.getResponseField('GameSessionPlacement.PlayerLatencies') as unknown as shapes.GameLiftPlayerLatency[];
  }

  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startGameSessionPlacement',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StartGameSessionPlacement.GameSessionPlacement.StartTime'),
        outputPath: 'GameSessionPlacement.StartTime',
        parameters: {
          PlacementId: this.input.placementId,
          GameSessionQueueName: this.input.gameSessionQueueName,
          GameProperties: this.input.gameProperties,
          MaximumPlayerSessionCount: this.input.maximumPlayerSessionCount,
          GameSessionName: this.input.gameSessionName,
          PlayerLatencies: this.input.playerLatencies,
          DesiredPlayerSessions: this.input.desiredPlayerSessions,
          GameSessionData: this.input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartGameSessionPlacement.GameSessionPlacement.StartTime', props);
    return resource.getResponseField('GameSessionPlacement.StartTime') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startGameSessionPlacement',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StartGameSessionPlacement.GameSessionPlacement.EndTime'),
        outputPath: 'GameSessionPlacement.EndTime',
        parameters: {
          PlacementId: this.input.placementId,
          GameSessionQueueName: this.input.gameSessionQueueName,
          GameProperties: this.input.gameProperties,
          MaximumPlayerSessionCount: this.input.maximumPlayerSessionCount,
          GameSessionName: this.input.gameSessionName,
          PlayerLatencies: this.input.playerLatencies,
          DesiredPlayerSessions: this.input.desiredPlayerSessions,
          GameSessionData: this.input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartGameSessionPlacement.GameSessionPlacement.EndTime', props);
    return resource.getResponseField('GameSessionPlacement.EndTime') as unknown as string;
  }

  public get ipAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startGameSessionPlacement',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StartGameSessionPlacement.GameSessionPlacement.IpAddress'),
        outputPath: 'GameSessionPlacement.IpAddress',
        parameters: {
          PlacementId: this.input.placementId,
          GameSessionQueueName: this.input.gameSessionQueueName,
          GameProperties: this.input.gameProperties,
          MaximumPlayerSessionCount: this.input.maximumPlayerSessionCount,
          GameSessionName: this.input.gameSessionName,
          PlayerLatencies: this.input.playerLatencies,
          DesiredPlayerSessions: this.input.desiredPlayerSessions,
          GameSessionData: this.input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartGameSessionPlacement.GameSessionPlacement.IpAddress', props);
    return resource.getResponseField('GameSessionPlacement.IpAddress') as unknown as string;
  }

  public get dnsName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startGameSessionPlacement',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StartGameSessionPlacement.GameSessionPlacement.DnsName'),
        outputPath: 'GameSessionPlacement.DnsName',
        parameters: {
          PlacementId: this.input.placementId,
          GameSessionQueueName: this.input.gameSessionQueueName,
          GameProperties: this.input.gameProperties,
          MaximumPlayerSessionCount: this.input.maximumPlayerSessionCount,
          GameSessionName: this.input.gameSessionName,
          PlayerLatencies: this.input.playerLatencies,
          DesiredPlayerSessions: this.input.desiredPlayerSessions,
          GameSessionData: this.input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartGameSessionPlacement.GameSessionPlacement.DnsName', props);
    return resource.getResponseField('GameSessionPlacement.DnsName') as unknown as string;
  }

  public get port(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startGameSessionPlacement',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StartGameSessionPlacement.GameSessionPlacement.Port'),
        outputPath: 'GameSessionPlacement.Port',
        parameters: {
          PlacementId: this.input.placementId,
          GameSessionQueueName: this.input.gameSessionQueueName,
          GameProperties: this.input.gameProperties,
          MaximumPlayerSessionCount: this.input.maximumPlayerSessionCount,
          GameSessionName: this.input.gameSessionName,
          PlayerLatencies: this.input.playerLatencies,
          DesiredPlayerSessions: this.input.desiredPlayerSessions,
          GameSessionData: this.input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartGameSessionPlacement.GameSessionPlacement.Port', props);
    return resource.getResponseField('GameSessionPlacement.Port') as unknown as number;
  }

  public get placedPlayerSessions(): shapes.GameLiftPlacedPlayerSession[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startGameSessionPlacement',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StartGameSessionPlacement.GameSessionPlacement.PlacedPlayerSessions'),
        outputPath: 'GameSessionPlacement.PlacedPlayerSessions',
        parameters: {
          PlacementId: this.input.placementId,
          GameSessionQueueName: this.input.gameSessionQueueName,
          GameProperties: this.input.gameProperties,
          MaximumPlayerSessionCount: this.input.maximumPlayerSessionCount,
          GameSessionName: this.input.gameSessionName,
          PlayerLatencies: this.input.playerLatencies,
          DesiredPlayerSessions: this.input.desiredPlayerSessions,
          GameSessionData: this.input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartGameSessionPlacement.GameSessionPlacement.PlacedPlayerSessions', props);
    return resource.getResponseField('GameSessionPlacement.PlacedPlayerSessions') as unknown as shapes.GameLiftPlacedPlayerSession[];
  }

  public get gameSessionData(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startGameSessionPlacement',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StartGameSessionPlacement.GameSessionPlacement.GameSessionData'),
        outputPath: 'GameSessionPlacement.GameSessionData',
        parameters: {
          PlacementId: this.input.placementId,
          GameSessionQueueName: this.input.gameSessionQueueName,
          GameProperties: this.input.gameProperties,
          MaximumPlayerSessionCount: this.input.maximumPlayerSessionCount,
          GameSessionName: this.input.gameSessionName,
          PlayerLatencies: this.input.playerLatencies,
          DesiredPlayerSessions: this.input.desiredPlayerSessions,
          GameSessionData: this.input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartGameSessionPlacement.GameSessionPlacement.GameSessionData', props);
    return resource.getResponseField('GameSessionPlacement.GameSessionData') as unknown as string;
  }

  public get matchmakerData(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startGameSessionPlacement',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StartGameSessionPlacement.GameSessionPlacement.MatchmakerData'),
        outputPath: 'GameSessionPlacement.MatchmakerData',
        parameters: {
          PlacementId: this.input.placementId,
          GameSessionQueueName: this.input.gameSessionQueueName,
          GameProperties: this.input.gameProperties,
          MaximumPlayerSessionCount: this.input.maximumPlayerSessionCount,
          GameSessionName: this.input.gameSessionName,
          PlayerLatencies: this.input.playerLatencies,
          DesiredPlayerSessions: this.input.desiredPlayerSessions,
          GameSessionData: this.input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartGameSessionPlacement.GameSessionPlacement.MatchmakerData', props);
    return resource.getResponseField('GameSessionPlacement.MatchmakerData') as unknown as string;
  }

}

export class GameLiftStartMatchBackfill extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftStartMatchBackfillInput) {
    super(scope, id);
  }

  public get matchmakingTicket(): GameLiftStartMatchBackfillMatchmakingTicket {
    return new GameLiftStartMatchBackfillMatchmakingTicket(this, 'MatchmakingTicket', this.__resources, this.input);
  }

}

export class GameLiftStartMatchBackfillMatchmakingTicket extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftStartMatchBackfillInput) {
    super(scope, id);
  }

  public get ticketId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMatchBackfill',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StartMatchBackfill.MatchmakingTicket.TicketId'),
        outputPath: 'MatchmakingTicket.TicketId',
        parameters: {
          TicketId: this.input.ticketId,
          ConfigurationName: this.input.configurationName,
          GameSessionArn: this.input.gameSessionArn,
          Players: this.input.players,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMatchBackfill.MatchmakingTicket.TicketId', props);
    return resource.getResponseField('MatchmakingTicket.TicketId') as unknown as string;
  }

  public get configurationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMatchBackfill',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StartMatchBackfill.MatchmakingTicket.ConfigurationName'),
        outputPath: 'MatchmakingTicket.ConfigurationName',
        parameters: {
          TicketId: this.input.ticketId,
          ConfigurationName: this.input.configurationName,
          GameSessionArn: this.input.gameSessionArn,
          Players: this.input.players,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMatchBackfill.MatchmakingTicket.ConfigurationName', props);
    return resource.getResponseField('MatchmakingTicket.ConfigurationName') as unknown as string;
  }

  public get configurationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMatchBackfill',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StartMatchBackfill.MatchmakingTicket.ConfigurationArn'),
        outputPath: 'MatchmakingTicket.ConfigurationArn',
        parameters: {
          TicketId: this.input.ticketId,
          ConfigurationName: this.input.configurationName,
          GameSessionArn: this.input.gameSessionArn,
          Players: this.input.players,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMatchBackfill.MatchmakingTicket.ConfigurationArn', props);
    return resource.getResponseField('MatchmakingTicket.ConfigurationArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMatchBackfill',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StartMatchBackfill.MatchmakingTicket.Status'),
        outputPath: 'MatchmakingTicket.Status',
        parameters: {
          TicketId: this.input.ticketId,
          ConfigurationName: this.input.configurationName,
          GameSessionArn: this.input.gameSessionArn,
          Players: this.input.players,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMatchBackfill.MatchmakingTicket.Status', props);
    return resource.getResponseField('MatchmakingTicket.Status') as unknown as string;
  }

  public get statusReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMatchBackfill',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StartMatchBackfill.MatchmakingTicket.StatusReason'),
        outputPath: 'MatchmakingTicket.StatusReason',
        parameters: {
          TicketId: this.input.ticketId,
          ConfigurationName: this.input.configurationName,
          GameSessionArn: this.input.gameSessionArn,
          Players: this.input.players,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMatchBackfill.MatchmakingTicket.StatusReason', props);
    return resource.getResponseField('MatchmakingTicket.StatusReason') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMatchBackfill',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StartMatchBackfill.MatchmakingTicket.StatusMessage'),
        outputPath: 'MatchmakingTicket.StatusMessage',
        parameters: {
          TicketId: this.input.ticketId,
          ConfigurationName: this.input.configurationName,
          GameSessionArn: this.input.gameSessionArn,
          Players: this.input.players,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMatchBackfill.MatchmakingTicket.StatusMessage', props);
    return resource.getResponseField('MatchmakingTicket.StatusMessage') as unknown as string;
  }

  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMatchBackfill',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StartMatchBackfill.MatchmakingTicket.StartTime'),
        outputPath: 'MatchmakingTicket.StartTime',
        parameters: {
          TicketId: this.input.ticketId,
          ConfigurationName: this.input.configurationName,
          GameSessionArn: this.input.gameSessionArn,
          Players: this.input.players,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMatchBackfill.MatchmakingTicket.StartTime', props);
    return resource.getResponseField('MatchmakingTicket.StartTime') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMatchBackfill',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StartMatchBackfill.MatchmakingTicket.EndTime'),
        outputPath: 'MatchmakingTicket.EndTime',
        parameters: {
          TicketId: this.input.ticketId,
          ConfigurationName: this.input.configurationName,
          GameSessionArn: this.input.gameSessionArn,
          Players: this.input.players,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMatchBackfill.MatchmakingTicket.EndTime', props);
    return resource.getResponseField('MatchmakingTicket.EndTime') as unknown as string;
  }

  public get players(): shapes.GameLiftPlayer[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMatchBackfill',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StartMatchBackfill.MatchmakingTicket.Players'),
        outputPath: 'MatchmakingTicket.Players',
        parameters: {
          TicketId: this.input.ticketId,
          ConfigurationName: this.input.configurationName,
          GameSessionArn: this.input.gameSessionArn,
          Players: this.input.players,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMatchBackfill.MatchmakingTicket.Players', props);
    return resource.getResponseField('MatchmakingTicket.Players') as unknown as shapes.GameLiftPlayer[];
  }

  public get gameSessionConnectionInfo(): GameLiftStartMatchBackfillMatchmakingTicketGameSessionConnectionInfo {
    return new GameLiftStartMatchBackfillMatchmakingTicketGameSessionConnectionInfo(this, 'GameSessionConnectionInfo', this.__resources, this.input);
  }

  public get estimatedWaitTime(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMatchBackfill',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StartMatchBackfill.MatchmakingTicket.EstimatedWaitTime'),
        outputPath: 'MatchmakingTicket.EstimatedWaitTime',
        parameters: {
          TicketId: this.input.ticketId,
          ConfigurationName: this.input.configurationName,
          GameSessionArn: this.input.gameSessionArn,
          Players: this.input.players,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMatchBackfill.MatchmakingTicket.EstimatedWaitTime', props);
    return resource.getResponseField('MatchmakingTicket.EstimatedWaitTime') as unknown as number;
  }

}

export class GameLiftStartMatchBackfillMatchmakingTicketGameSessionConnectionInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftStartMatchBackfillInput) {
    super(scope, id);
  }

  public get gameSessionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMatchBackfill',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StartMatchBackfill.MatchmakingTicket.GameSessionConnectionInfo.GameSessionArn'),
        outputPath: 'MatchmakingTicket.GameSessionConnectionInfo.GameSessionArn',
        parameters: {
          TicketId: this.input.ticketId,
          ConfigurationName: this.input.configurationName,
          GameSessionArn: this.input.gameSessionArn,
          Players: this.input.players,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMatchBackfill.MatchmakingTicket.GameSessionConnectionInfo.GameSessionArn', props);
    return resource.getResponseField('MatchmakingTicket.GameSessionConnectionInfo.GameSessionArn') as unknown as string;
  }

  public get ipAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMatchBackfill',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StartMatchBackfill.MatchmakingTicket.GameSessionConnectionInfo.IpAddress'),
        outputPath: 'MatchmakingTicket.GameSessionConnectionInfo.IpAddress',
        parameters: {
          TicketId: this.input.ticketId,
          ConfigurationName: this.input.configurationName,
          GameSessionArn: this.input.gameSessionArn,
          Players: this.input.players,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMatchBackfill.MatchmakingTicket.GameSessionConnectionInfo.IpAddress', props);
    return resource.getResponseField('MatchmakingTicket.GameSessionConnectionInfo.IpAddress') as unknown as string;
  }

  public get dnsName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMatchBackfill',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StartMatchBackfill.MatchmakingTicket.GameSessionConnectionInfo.DnsName'),
        outputPath: 'MatchmakingTicket.GameSessionConnectionInfo.DnsName',
        parameters: {
          TicketId: this.input.ticketId,
          ConfigurationName: this.input.configurationName,
          GameSessionArn: this.input.gameSessionArn,
          Players: this.input.players,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMatchBackfill.MatchmakingTicket.GameSessionConnectionInfo.DnsName', props);
    return resource.getResponseField('MatchmakingTicket.GameSessionConnectionInfo.DnsName') as unknown as string;
  }

  public get port(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMatchBackfill',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StartMatchBackfill.MatchmakingTicket.GameSessionConnectionInfo.Port'),
        outputPath: 'MatchmakingTicket.GameSessionConnectionInfo.Port',
        parameters: {
          TicketId: this.input.ticketId,
          ConfigurationName: this.input.configurationName,
          GameSessionArn: this.input.gameSessionArn,
          Players: this.input.players,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMatchBackfill.MatchmakingTicket.GameSessionConnectionInfo.Port', props);
    return resource.getResponseField('MatchmakingTicket.GameSessionConnectionInfo.Port') as unknown as number;
  }

  public get matchedPlayerSessions(): shapes.GameLiftMatchedPlayerSession[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMatchBackfill',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StartMatchBackfill.MatchmakingTicket.GameSessionConnectionInfo.MatchedPlayerSessions'),
        outputPath: 'MatchmakingTicket.GameSessionConnectionInfo.MatchedPlayerSessions',
        parameters: {
          TicketId: this.input.ticketId,
          ConfigurationName: this.input.configurationName,
          GameSessionArn: this.input.gameSessionArn,
          Players: this.input.players,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMatchBackfill.MatchmakingTicket.GameSessionConnectionInfo.MatchedPlayerSessions', props);
    return resource.getResponseField('MatchmakingTicket.GameSessionConnectionInfo.MatchedPlayerSessions') as unknown as shapes.GameLiftMatchedPlayerSession[];
  }

}

export class GameLiftStartMatchmaking extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftStartMatchmakingInput) {
    super(scope, id);
  }

  public get matchmakingTicket(): GameLiftStartMatchmakingMatchmakingTicket {
    return new GameLiftStartMatchmakingMatchmakingTicket(this, 'MatchmakingTicket', this.__resources, this.input);
  }

}

export class GameLiftStartMatchmakingMatchmakingTicket extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftStartMatchmakingInput) {
    super(scope, id);
  }

  public get ticketId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMatchmaking',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StartMatchmaking.MatchmakingTicket.TicketId'),
        outputPath: 'MatchmakingTicket.TicketId',
        parameters: {
          TicketId: this.input.ticketId,
          ConfigurationName: this.input.configurationName,
          Players: this.input.players,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMatchmaking.MatchmakingTicket.TicketId', props);
    return resource.getResponseField('MatchmakingTicket.TicketId') as unknown as string;
  }

  public get configurationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMatchmaking',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StartMatchmaking.MatchmakingTicket.ConfigurationName'),
        outputPath: 'MatchmakingTicket.ConfigurationName',
        parameters: {
          TicketId: this.input.ticketId,
          ConfigurationName: this.input.configurationName,
          Players: this.input.players,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMatchmaking.MatchmakingTicket.ConfigurationName', props);
    return resource.getResponseField('MatchmakingTicket.ConfigurationName') as unknown as string;
  }

  public get configurationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMatchmaking',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StartMatchmaking.MatchmakingTicket.ConfigurationArn'),
        outputPath: 'MatchmakingTicket.ConfigurationArn',
        parameters: {
          TicketId: this.input.ticketId,
          ConfigurationName: this.input.configurationName,
          Players: this.input.players,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMatchmaking.MatchmakingTicket.ConfigurationArn', props);
    return resource.getResponseField('MatchmakingTicket.ConfigurationArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMatchmaking',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StartMatchmaking.MatchmakingTicket.Status'),
        outputPath: 'MatchmakingTicket.Status',
        parameters: {
          TicketId: this.input.ticketId,
          ConfigurationName: this.input.configurationName,
          Players: this.input.players,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMatchmaking.MatchmakingTicket.Status', props);
    return resource.getResponseField('MatchmakingTicket.Status') as unknown as string;
  }

  public get statusReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMatchmaking',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StartMatchmaking.MatchmakingTicket.StatusReason'),
        outputPath: 'MatchmakingTicket.StatusReason',
        parameters: {
          TicketId: this.input.ticketId,
          ConfigurationName: this.input.configurationName,
          Players: this.input.players,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMatchmaking.MatchmakingTicket.StatusReason', props);
    return resource.getResponseField('MatchmakingTicket.StatusReason') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMatchmaking',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StartMatchmaking.MatchmakingTicket.StatusMessage'),
        outputPath: 'MatchmakingTicket.StatusMessage',
        parameters: {
          TicketId: this.input.ticketId,
          ConfigurationName: this.input.configurationName,
          Players: this.input.players,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMatchmaking.MatchmakingTicket.StatusMessage', props);
    return resource.getResponseField('MatchmakingTicket.StatusMessage') as unknown as string;
  }

  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMatchmaking',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StartMatchmaking.MatchmakingTicket.StartTime'),
        outputPath: 'MatchmakingTicket.StartTime',
        parameters: {
          TicketId: this.input.ticketId,
          ConfigurationName: this.input.configurationName,
          Players: this.input.players,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMatchmaking.MatchmakingTicket.StartTime', props);
    return resource.getResponseField('MatchmakingTicket.StartTime') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMatchmaking',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StartMatchmaking.MatchmakingTicket.EndTime'),
        outputPath: 'MatchmakingTicket.EndTime',
        parameters: {
          TicketId: this.input.ticketId,
          ConfigurationName: this.input.configurationName,
          Players: this.input.players,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMatchmaking.MatchmakingTicket.EndTime', props);
    return resource.getResponseField('MatchmakingTicket.EndTime') as unknown as string;
  }

  public get players(): shapes.GameLiftPlayer[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMatchmaking',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StartMatchmaking.MatchmakingTicket.Players'),
        outputPath: 'MatchmakingTicket.Players',
        parameters: {
          TicketId: this.input.ticketId,
          ConfigurationName: this.input.configurationName,
          Players: this.input.players,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMatchmaking.MatchmakingTicket.Players', props);
    return resource.getResponseField('MatchmakingTicket.Players') as unknown as shapes.GameLiftPlayer[];
  }

  public get gameSessionConnectionInfo(): GameLiftStartMatchmakingMatchmakingTicketGameSessionConnectionInfo {
    return new GameLiftStartMatchmakingMatchmakingTicketGameSessionConnectionInfo(this, 'GameSessionConnectionInfo', this.__resources, this.input);
  }

  public get estimatedWaitTime(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMatchmaking',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StartMatchmaking.MatchmakingTicket.EstimatedWaitTime'),
        outputPath: 'MatchmakingTicket.EstimatedWaitTime',
        parameters: {
          TicketId: this.input.ticketId,
          ConfigurationName: this.input.configurationName,
          Players: this.input.players,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMatchmaking.MatchmakingTicket.EstimatedWaitTime', props);
    return resource.getResponseField('MatchmakingTicket.EstimatedWaitTime') as unknown as number;
  }

}

export class GameLiftStartMatchmakingMatchmakingTicketGameSessionConnectionInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftStartMatchmakingInput) {
    super(scope, id);
  }

  public get gameSessionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMatchmaking',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StartMatchmaking.MatchmakingTicket.GameSessionConnectionInfo.GameSessionArn'),
        outputPath: 'MatchmakingTicket.GameSessionConnectionInfo.GameSessionArn',
        parameters: {
          TicketId: this.input.ticketId,
          ConfigurationName: this.input.configurationName,
          Players: this.input.players,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMatchmaking.MatchmakingTicket.GameSessionConnectionInfo.GameSessionArn', props);
    return resource.getResponseField('MatchmakingTicket.GameSessionConnectionInfo.GameSessionArn') as unknown as string;
  }

  public get ipAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMatchmaking',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StartMatchmaking.MatchmakingTicket.GameSessionConnectionInfo.IpAddress'),
        outputPath: 'MatchmakingTicket.GameSessionConnectionInfo.IpAddress',
        parameters: {
          TicketId: this.input.ticketId,
          ConfigurationName: this.input.configurationName,
          Players: this.input.players,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMatchmaking.MatchmakingTicket.GameSessionConnectionInfo.IpAddress', props);
    return resource.getResponseField('MatchmakingTicket.GameSessionConnectionInfo.IpAddress') as unknown as string;
  }

  public get dnsName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMatchmaking',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StartMatchmaking.MatchmakingTicket.GameSessionConnectionInfo.DnsName'),
        outputPath: 'MatchmakingTicket.GameSessionConnectionInfo.DnsName',
        parameters: {
          TicketId: this.input.ticketId,
          ConfigurationName: this.input.configurationName,
          Players: this.input.players,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMatchmaking.MatchmakingTicket.GameSessionConnectionInfo.DnsName', props);
    return resource.getResponseField('MatchmakingTicket.GameSessionConnectionInfo.DnsName') as unknown as string;
  }

  public get port(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMatchmaking',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StartMatchmaking.MatchmakingTicket.GameSessionConnectionInfo.Port'),
        outputPath: 'MatchmakingTicket.GameSessionConnectionInfo.Port',
        parameters: {
          TicketId: this.input.ticketId,
          ConfigurationName: this.input.configurationName,
          Players: this.input.players,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMatchmaking.MatchmakingTicket.GameSessionConnectionInfo.Port', props);
    return resource.getResponseField('MatchmakingTicket.GameSessionConnectionInfo.Port') as unknown as number;
  }

  public get matchedPlayerSessions(): shapes.GameLiftMatchedPlayerSession[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMatchmaking',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StartMatchmaking.MatchmakingTicket.GameSessionConnectionInfo.MatchedPlayerSessions'),
        outputPath: 'MatchmakingTicket.GameSessionConnectionInfo.MatchedPlayerSessions',
        parameters: {
          TicketId: this.input.ticketId,
          ConfigurationName: this.input.configurationName,
          Players: this.input.players,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMatchmaking.MatchmakingTicket.GameSessionConnectionInfo.MatchedPlayerSessions', props);
    return resource.getResponseField('MatchmakingTicket.GameSessionConnectionInfo.MatchedPlayerSessions') as unknown as shapes.GameLiftMatchedPlayerSession[];
  }

}

export class GameLiftStopGameSessionPlacement extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftStopGameSessionPlacementInput) {
    super(scope, id);
  }

  public get gameSessionPlacement(): GameLiftStopGameSessionPlacementGameSessionPlacement {
    return new GameLiftStopGameSessionPlacementGameSessionPlacement(this, 'GameSessionPlacement', this.__resources, this.input);
  }

}

export class GameLiftStopGameSessionPlacementGameSessionPlacement extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftStopGameSessionPlacementInput) {
    super(scope, id);
  }

  public get placementId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopGameSessionPlacement',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StopGameSessionPlacement.GameSessionPlacement.PlacementId'),
        outputPath: 'GameSessionPlacement.PlacementId',
        parameters: {
          PlacementId: this.input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopGameSessionPlacement.GameSessionPlacement.PlacementId', props);
    return resource.getResponseField('GameSessionPlacement.PlacementId') as unknown as string;
  }

  public get gameSessionQueueName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopGameSessionPlacement',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StopGameSessionPlacement.GameSessionPlacement.GameSessionQueueName'),
        outputPath: 'GameSessionPlacement.GameSessionQueueName',
        parameters: {
          PlacementId: this.input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopGameSessionPlacement.GameSessionPlacement.GameSessionQueueName', props);
    return resource.getResponseField('GameSessionPlacement.GameSessionQueueName') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopGameSessionPlacement',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StopGameSessionPlacement.GameSessionPlacement.Status'),
        outputPath: 'GameSessionPlacement.Status',
        parameters: {
          PlacementId: this.input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopGameSessionPlacement.GameSessionPlacement.Status', props);
    return resource.getResponseField('GameSessionPlacement.Status') as unknown as string;
  }

  public get gameProperties(): shapes.GameLiftGameProperty[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopGameSessionPlacement',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StopGameSessionPlacement.GameSessionPlacement.GameProperties'),
        outputPath: 'GameSessionPlacement.GameProperties',
        parameters: {
          PlacementId: this.input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopGameSessionPlacement.GameSessionPlacement.GameProperties', props);
    return resource.getResponseField('GameSessionPlacement.GameProperties') as unknown as shapes.GameLiftGameProperty[];
  }

  public get maximumPlayerSessionCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopGameSessionPlacement',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StopGameSessionPlacement.GameSessionPlacement.MaximumPlayerSessionCount'),
        outputPath: 'GameSessionPlacement.MaximumPlayerSessionCount',
        parameters: {
          PlacementId: this.input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopGameSessionPlacement.GameSessionPlacement.MaximumPlayerSessionCount', props);
    return resource.getResponseField('GameSessionPlacement.MaximumPlayerSessionCount') as unknown as number;
  }

  public get gameSessionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopGameSessionPlacement',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StopGameSessionPlacement.GameSessionPlacement.GameSessionName'),
        outputPath: 'GameSessionPlacement.GameSessionName',
        parameters: {
          PlacementId: this.input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopGameSessionPlacement.GameSessionPlacement.GameSessionName', props);
    return resource.getResponseField('GameSessionPlacement.GameSessionName') as unknown as string;
  }

  public get gameSessionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopGameSessionPlacement',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StopGameSessionPlacement.GameSessionPlacement.GameSessionId'),
        outputPath: 'GameSessionPlacement.GameSessionId',
        parameters: {
          PlacementId: this.input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopGameSessionPlacement.GameSessionPlacement.GameSessionId', props);
    return resource.getResponseField('GameSessionPlacement.GameSessionId') as unknown as string;
  }

  public get gameSessionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopGameSessionPlacement',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StopGameSessionPlacement.GameSessionPlacement.GameSessionArn'),
        outputPath: 'GameSessionPlacement.GameSessionArn',
        parameters: {
          PlacementId: this.input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopGameSessionPlacement.GameSessionPlacement.GameSessionArn', props);
    return resource.getResponseField('GameSessionPlacement.GameSessionArn') as unknown as string;
  }

  public get gameSessionRegion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopGameSessionPlacement',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StopGameSessionPlacement.GameSessionPlacement.GameSessionRegion'),
        outputPath: 'GameSessionPlacement.GameSessionRegion',
        parameters: {
          PlacementId: this.input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopGameSessionPlacement.GameSessionPlacement.GameSessionRegion', props);
    return resource.getResponseField('GameSessionPlacement.GameSessionRegion') as unknown as string;
  }

  public get playerLatencies(): shapes.GameLiftPlayerLatency[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopGameSessionPlacement',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StopGameSessionPlacement.GameSessionPlacement.PlayerLatencies'),
        outputPath: 'GameSessionPlacement.PlayerLatencies',
        parameters: {
          PlacementId: this.input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopGameSessionPlacement.GameSessionPlacement.PlayerLatencies', props);
    return resource.getResponseField('GameSessionPlacement.PlayerLatencies') as unknown as shapes.GameLiftPlayerLatency[];
  }

  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopGameSessionPlacement',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StopGameSessionPlacement.GameSessionPlacement.StartTime'),
        outputPath: 'GameSessionPlacement.StartTime',
        parameters: {
          PlacementId: this.input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopGameSessionPlacement.GameSessionPlacement.StartTime', props);
    return resource.getResponseField('GameSessionPlacement.StartTime') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopGameSessionPlacement',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StopGameSessionPlacement.GameSessionPlacement.EndTime'),
        outputPath: 'GameSessionPlacement.EndTime',
        parameters: {
          PlacementId: this.input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopGameSessionPlacement.GameSessionPlacement.EndTime', props);
    return resource.getResponseField('GameSessionPlacement.EndTime') as unknown as string;
  }

  public get ipAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopGameSessionPlacement',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StopGameSessionPlacement.GameSessionPlacement.IpAddress'),
        outputPath: 'GameSessionPlacement.IpAddress',
        parameters: {
          PlacementId: this.input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopGameSessionPlacement.GameSessionPlacement.IpAddress', props);
    return resource.getResponseField('GameSessionPlacement.IpAddress') as unknown as string;
  }

  public get dnsName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopGameSessionPlacement',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StopGameSessionPlacement.GameSessionPlacement.DnsName'),
        outputPath: 'GameSessionPlacement.DnsName',
        parameters: {
          PlacementId: this.input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopGameSessionPlacement.GameSessionPlacement.DnsName', props);
    return resource.getResponseField('GameSessionPlacement.DnsName') as unknown as string;
  }

  public get port(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopGameSessionPlacement',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StopGameSessionPlacement.GameSessionPlacement.Port'),
        outputPath: 'GameSessionPlacement.Port',
        parameters: {
          PlacementId: this.input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopGameSessionPlacement.GameSessionPlacement.Port', props);
    return resource.getResponseField('GameSessionPlacement.Port') as unknown as number;
  }

  public get placedPlayerSessions(): shapes.GameLiftPlacedPlayerSession[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopGameSessionPlacement',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StopGameSessionPlacement.GameSessionPlacement.PlacedPlayerSessions'),
        outputPath: 'GameSessionPlacement.PlacedPlayerSessions',
        parameters: {
          PlacementId: this.input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopGameSessionPlacement.GameSessionPlacement.PlacedPlayerSessions', props);
    return resource.getResponseField('GameSessionPlacement.PlacedPlayerSessions') as unknown as shapes.GameLiftPlacedPlayerSession[];
  }

  public get gameSessionData(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopGameSessionPlacement',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StopGameSessionPlacement.GameSessionPlacement.GameSessionData'),
        outputPath: 'GameSessionPlacement.GameSessionData',
        parameters: {
          PlacementId: this.input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopGameSessionPlacement.GameSessionPlacement.GameSessionData', props);
    return resource.getResponseField('GameSessionPlacement.GameSessionData') as unknown as string;
  }

  public get matchmakerData(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopGameSessionPlacement',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.StopGameSessionPlacement.GameSessionPlacement.MatchmakerData'),
        outputPath: 'GameSessionPlacement.MatchmakerData',
        parameters: {
          PlacementId: this.input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopGameSessionPlacement.GameSessionPlacement.MatchmakerData', props);
    return resource.getResponseField('GameSessionPlacement.MatchmakerData') as unknown as string;
  }

}

export class GameLiftSuspendGameServerGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftSuspendGameServerGroupInput) {
    super(scope, id);
  }

  public get gameServerGroup(): GameLiftSuspendGameServerGroupGameServerGroup {
    return new GameLiftSuspendGameServerGroupGameServerGroup(this, 'GameServerGroup', this.__resources, this.input);
  }

}

export class GameLiftSuspendGameServerGroupGameServerGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftSuspendGameServerGroupInput) {
    super(scope, id);
  }

  public get gameServerGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'suspendGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.SuspendGameServerGroup.GameServerGroup.GameServerGroupName'),
        outputPath: 'GameServerGroup.GameServerGroupName',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          SuspendActions: this.input.suspendActions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SuspendGameServerGroup.GameServerGroup.GameServerGroupName', props);
    return resource.getResponseField('GameServerGroup.GameServerGroupName') as unknown as string;
  }

  public get gameServerGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'suspendGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.SuspendGameServerGroup.GameServerGroup.GameServerGroupArn'),
        outputPath: 'GameServerGroup.GameServerGroupArn',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          SuspendActions: this.input.suspendActions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SuspendGameServerGroup.GameServerGroup.GameServerGroupArn', props);
    return resource.getResponseField('GameServerGroup.GameServerGroupArn') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'suspendGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.SuspendGameServerGroup.GameServerGroup.RoleArn'),
        outputPath: 'GameServerGroup.RoleArn',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          SuspendActions: this.input.suspendActions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SuspendGameServerGroup.GameServerGroup.RoleArn', props);
    return resource.getResponseField('GameServerGroup.RoleArn') as unknown as string;
  }

  public get instanceDefinitions(): shapes.GameLiftInstanceDefinition[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'suspendGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.SuspendGameServerGroup.GameServerGroup.InstanceDefinitions'),
        outputPath: 'GameServerGroup.InstanceDefinitions',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          SuspendActions: this.input.suspendActions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SuspendGameServerGroup.GameServerGroup.InstanceDefinitions', props);
    return resource.getResponseField('GameServerGroup.InstanceDefinitions') as unknown as shapes.GameLiftInstanceDefinition[];
  }

  public get balancingStrategy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'suspendGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.SuspendGameServerGroup.GameServerGroup.BalancingStrategy'),
        outputPath: 'GameServerGroup.BalancingStrategy',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          SuspendActions: this.input.suspendActions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SuspendGameServerGroup.GameServerGroup.BalancingStrategy', props);
    return resource.getResponseField('GameServerGroup.BalancingStrategy') as unknown as string;
  }

  public get gameServerProtectionPolicy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'suspendGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.SuspendGameServerGroup.GameServerGroup.GameServerProtectionPolicy'),
        outputPath: 'GameServerGroup.GameServerProtectionPolicy',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          SuspendActions: this.input.suspendActions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SuspendGameServerGroup.GameServerGroup.GameServerProtectionPolicy', props);
    return resource.getResponseField('GameServerGroup.GameServerProtectionPolicy') as unknown as string;
  }

  public get autoScalingGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'suspendGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.SuspendGameServerGroup.GameServerGroup.AutoScalingGroupArn'),
        outputPath: 'GameServerGroup.AutoScalingGroupArn',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          SuspendActions: this.input.suspendActions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SuspendGameServerGroup.GameServerGroup.AutoScalingGroupArn', props);
    return resource.getResponseField('GameServerGroup.AutoScalingGroupArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'suspendGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.SuspendGameServerGroup.GameServerGroup.Status'),
        outputPath: 'GameServerGroup.Status',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          SuspendActions: this.input.suspendActions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SuspendGameServerGroup.GameServerGroup.Status', props);
    return resource.getResponseField('GameServerGroup.Status') as unknown as string;
  }

  public get statusReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'suspendGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.SuspendGameServerGroup.GameServerGroup.StatusReason'),
        outputPath: 'GameServerGroup.StatusReason',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          SuspendActions: this.input.suspendActions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SuspendGameServerGroup.GameServerGroup.StatusReason', props);
    return resource.getResponseField('GameServerGroup.StatusReason') as unknown as string;
  }

  public get suspendedActions(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'suspendGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.SuspendGameServerGroup.GameServerGroup.SuspendedActions'),
        outputPath: 'GameServerGroup.SuspendedActions',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          SuspendActions: this.input.suspendActions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SuspendGameServerGroup.GameServerGroup.SuspendedActions', props);
    return resource.getResponseField('GameServerGroup.SuspendedActions') as unknown as string[];
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'suspendGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.SuspendGameServerGroup.GameServerGroup.CreationTime'),
        outputPath: 'GameServerGroup.CreationTime',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          SuspendActions: this.input.suspendActions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SuspendGameServerGroup.GameServerGroup.CreationTime', props);
    return resource.getResponseField('GameServerGroup.CreationTime') as unknown as string;
  }

  public get lastUpdatedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'suspendGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.SuspendGameServerGroup.GameServerGroup.LastUpdatedTime'),
        outputPath: 'GameServerGroup.LastUpdatedTime',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          SuspendActions: this.input.suspendActions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SuspendGameServerGroup.GameServerGroup.LastUpdatedTime', props);
    return resource.getResponseField('GameServerGroup.LastUpdatedTime') as unknown as string;
  }

}

export class GameLiftUpdateAlias extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftUpdateAliasInput) {
    super(scope, id);
  }

  public get alias(): GameLiftUpdateAliasAlias {
    return new GameLiftUpdateAliasAlias(this, 'Alias', this.__resources, this.input);
  }

}

export class GameLiftUpdateAliasAlias extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftUpdateAliasInput) {
    super(scope, id);
  }

  public get aliasId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAlias',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateAlias.Alias.AliasId'),
        outputPath: 'Alias.AliasId',
        parameters: {
          AliasId: this.input.aliasId,
          Name: this.input.name,
          Description: this.input.description,
          RoutingStrategy: {
            Type: this.input.routingStrategy?.type,
            FleetId: this.input.routingStrategy?.fleetId,
            Message: this.input.routingStrategy?.message,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAlias.Alias.AliasId', props);
    return resource.getResponseField('Alias.AliasId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAlias',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateAlias.Alias.Name'),
        outputPath: 'Alias.Name',
        parameters: {
          AliasId: this.input.aliasId,
          Name: this.input.name,
          Description: this.input.description,
          RoutingStrategy: {
            Type: this.input.routingStrategy?.type,
            FleetId: this.input.routingStrategy?.fleetId,
            Message: this.input.routingStrategy?.message,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAlias.Alias.Name', props);
    return resource.getResponseField('Alias.Name') as unknown as string;
  }

  public get aliasArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAlias',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateAlias.Alias.AliasArn'),
        outputPath: 'Alias.AliasArn',
        parameters: {
          AliasId: this.input.aliasId,
          Name: this.input.name,
          Description: this.input.description,
          RoutingStrategy: {
            Type: this.input.routingStrategy?.type,
            FleetId: this.input.routingStrategy?.fleetId,
            Message: this.input.routingStrategy?.message,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAlias.Alias.AliasArn', props);
    return resource.getResponseField('Alias.AliasArn') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAlias',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateAlias.Alias.Description'),
        outputPath: 'Alias.Description',
        parameters: {
          AliasId: this.input.aliasId,
          Name: this.input.name,
          Description: this.input.description,
          RoutingStrategy: {
            Type: this.input.routingStrategy?.type,
            FleetId: this.input.routingStrategy?.fleetId,
            Message: this.input.routingStrategy?.message,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAlias.Alias.Description', props);
    return resource.getResponseField('Alias.Description') as unknown as string;
  }

  public get routingStrategy(): GameLiftUpdateAliasAliasRoutingStrategy {
    return new GameLiftUpdateAliasAliasRoutingStrategy(this, 'RoutingStrategy', this.__resources, this.input);
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAlias',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateAlias.Alias.CreationTime'),
        outputPath: 'Alias.CreationTime',
        parameters: {
          AliasId: this.input.aliasId,
          Name: this.input.name,
          Description: this.input.description,
          RoutingStrategy: {
            Type: this.input.routingStrategy?.type,
            FleetId: this.input.routingStrategy?.fleetId,
            Message: this.input.routingStrategy?.message,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAlias.Alias.CreationTime', props);
    return resource.getResponseField('Alias.CreationTime') as unknown as string;
  }

  public get lastUpdatedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAlias',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateAlias.Alias.LastUpdatedTime'),
        outputPath: 'Alias.LastUpdatedTime',
        parameters: {
          AliasId: this.input.aliasId,
          Name: this.input.name,
          Description: this.input.description,
          RoutingStrategy: {
            Type: this.input.routingStrategy?.type,
            FleetId: this.input.routingStrategy?.fleetId,
            Message: this.input.routingStrategy?.message,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAlias.Alias.LastUpdatedTime', props);
    return resource.getResponseField('Alias.LastUpdatedTime') as unknown as string;
  }

}

export class GameLiftUpdateAliasAliasRoutingStrategy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftUpdateAliasInput) {
    super(scope, id);
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAlias',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateAlias.Alias.RoutingStrategy.Type'),
        outputPath: 'Alias.RoutingStrategy.Type',
        parameters: {
          AliasId: this.input.aliasId,
          Name: this.input.name,
          Description: this.input.description,
          RoutingStrategy: {
            Type: this.input.routingStrategy?.type,
            FleetId: this.input.routingStrategy?.fleetId,
            Message: this.input.routingStrategy?.message,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAlias.Alias.RoutingStrategy.Type', props);
    return resource.getResponseField('Alias.RoutingStrategy.Type') as unknown as string;
  }

  public get fleetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAlias',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateAlias.Alias.RoutingStrategy.FleetId'),
        outputPath: 'Alias.RoutingStrategy.FleetId',
        parameters: {
          AliasId: this.input.aliasId,
          Name: this.input.name,
          Description: this.input.description,
          RoutingStrategy: {
            Type: this.input.routingStrategy?.type,
            FleetId: this.input.routingStrategy?.fleetId,
            Message: this.input.routingStrategy?.message,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAlias.Alias.RoutingStrategy.FleetId', props);
    return resource.getResponseField('Alias.RoutingStrategy.FleetId') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAlias',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateAlias.Alias.RoutingStrategy.Message'),
        outputPath: 'Alias.RoutingStrategy.Message',
        parameters: {
          AliasId: this.input.aliasId,
          Name: this.input.name,
          Description: this.input.description,
          RoutingStrategy: {
            Type: this.input.routingStrategy?.type,
            FleetId: this.input.routingStrategy?.fleetId,
            Message: this.input.routingStrategy?.message,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAlias.Alias.RoutingStrategy.Message', props);
    return resource.getResponseField('Alias.RoutingStrategy.Message') as unknown as string;
  }

}

export class GameLiftUpdateBuild extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftUpdateBuildInput) {
    super(scope, id);
  }

  public get build(): GameLiftUpdateBuildBuild {
    return new GameLiftUpdateBuildBuild(this, 'Build', this.__resources, this.input);
  }

}

export class GameLiftUpdateBuildBuild extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftUpdateBuildInput) {
    super(scope, id);
  }

  public get buildId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBuild',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateBuild.Build.BuildId'),
        outputPath: 'Build.BuildId',
        parameters: {
          BuildId: this.input.buildId,
          Name: this.input.name,
          Version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBuild.Build.BuildId', props);
    return resource.getResponseField('Build.BuildId') as unknown as string;
  }

  public get buildArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBuild',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateBuild.Build.BuildArn'),
        outputPath: 'Build.BuildArn',
        parameters: {
          BuildId: this.input.buildId,
          Name: this.input.name,
          Version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBuild.Build.BuildArn', props);
    return resource.getResponseField('Build.BuildArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBuild',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateBuild.Build.Name'),
        outputPath: 'Build.Name',
        parameters: {
          BuildId: this.input.buildId,
          Name: this.input.name,
          Version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBuild.Build.Name', props);
    return resource.getResponseField('Build.Name') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBuild',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateBuild.Build.Version'),
        outputPath: 'Build.Version',
        parameters: {
          BuildId: this.input.buildId,
          Name: this.input.name,
          Version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBuild.Build.Version', props);
    return resource.getResponseField('Build.Version') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBuild',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateBuild.Build.Status'),
        outputPath: 'Build.Status',
        parameters: {
          BuildId: this.input.buildId,
          Name: this.input.name,
          Version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBuild.Build.Status', props);
    return resource.getResponseField('Build.Status') as unknown as string;
  }

  public get sizeOnDisk(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBuild',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateBuild.Build.SizeOnDisk'),
        outputPath: 'Build.SizeOnDisk',
        parameters: {
          BuildId: this.input.buildId,
          Name: this.input.name,
          Version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBuild.Build.SizeOnDisk', props);
    return resource.getResponseField('Build.SizeOnDisk') as unknown as number;
  }

  public get operatingSystem(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBuild',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateBuild.Build.OperatingSystem'),
        outputPath: 'Build.OperatingSystem',
        parameters: {
          BuildId: this.input.buildId,
          Name: this.input.name,
          Version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBuild.Build.OperatingSystem', props);
    return resource.getResponseField('Build.OperatingSystem') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBuild',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateBuild.Build.CreationTime'),
        outputPath: 'Build.CreationTime',
        parameters: {
          BuildId: this.input.buildId,
          Name: this.input.name,
          Version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBuild.Build.CreationTime', props);
    return resource.getResponseField('Build.CreationTime') as unknown as string;
  }

}

export class GameLiftUpdateFleetAttributes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftUpdateFleetAttributesInput) {
    super(scope, id);
  }

  public get fleetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFleetAttributes',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateFleetAttributes.FleetId'),
        outputPath: 'FleetId',
        parameters: {
          FleetId: this.input.fleetId,
          Name: this.input.name,
          Description: this.input.description,
          NewGameSessionProtectionPolicy: this.input.newGameSessionProtectionPolicy,
          ResourceCreationLimitPolicy: {
            NewGameSessionsPerCreator: this.input.resourceCreationLimitPolicy?.newGameSessionsPerCreator,
            PolicyPeriodInMinutes: this.input.resourceCreationLimitPolicy?.policyPeriodInMinutes,
          },
          MetricGroups: this.input.metricGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFleetAttributes.FleetId', props);
    return resource.getResponseField('FleetId') as unknown as string;
  }

}

export class GameLiftUpdateFleetCapacity extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftUpdateFleetCapacityInput) {
    super(scope, id);
  }

  public get fleetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFleetCapacity',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateFleetCapacity.FleetId'),
        outputPath: 'FleetId',
        parameters: {
          FleetId: this.input.fleetId,
          DesiredInstances: this.input.desiredInstances,
          MinSize: this.input.minSize,
          MaxSize: this.input.maxSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFleetCapacity.FleetId', props);
    return resource.getResponseField('FleetId') as unknown as string;
  }

}

export class GameLiftUpdateFleetPortSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftUpdateFleetPortSettingsInput) {
    super(scope, id);
  }

  public get fleetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFleetPortSettings',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateFleetPortSettings.FleetId'),
        outputPath: 'FleetId',
        parameters: {
          FleetId: this.input.fleetId,
          InboundPermissionAuthorizations: this.input.inboundPermissionAuthorizations,
          InboundPermissionRevocations: this.input.inboundPermissionRevocations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFleetPortSettings.FleetId', props);
    return resource.getResponseField('FleetId') as unknown as string;
  }

}

export class GameLiftUpdateGameServer extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftUpdateGameServerInput) {
    super(scope, id);
  }

  public get gameServer(): GameLiftUpdateGameServerGameServer {
    return new GameLiftUpdateGameServerGameServer(this, 'GameServer', this.__resources, this.input);
  }

}

export class GameLiftUpdateGameServerGameServer extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftUpdateGameServerInput) {
    super(scope, id);
  }

  public get gameServerGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGameServer',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateGameServer.GameServer.GameServerGroupName'),
        outputPath: 'GameServer.GameServerGroupName',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          GameServerId: this.input.gameServerId,
          GameServerData: this.input.gameServerData,
          UtilizationStatus: this.input.utilizationStatus,
          HealthCheck: this.input.healthCheck,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGameServer.GameServer.GameServerGroupName', props);
    return resource.getResponseField('GameServer.GameServerGroupName') as unknown as string;
  }

  public get gameServerGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGameServer',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateGameServer.GameServer.GameServerGroupArn'),
        outputPath: 'GameServer.GameServerGroupArn',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          GameServerId: this.input.gameServerId,
          GameServerData: this.input.gameServerData,
          UtilizationStatus: this.input.utilizationStatus,
          HealthCheck: this.input.healthCheck,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGameServer.GameServer.GameServerGroupArn', props);
    return resource.getResponseField('GameServer.GameServerGroupArn') as unknown as string;
  }

  public get gameServerId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGameServer',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateGameServer.GameServer.GameServerId'),
        outputPath: 'GameServer.GameServerId',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          GameServerId: this.input.gameServerId,
          GameServerData: this.input.gameServerData,
          UtilizationStatus: this.input.utilizationStatus,
          HealthCheck: this.input.healthCheck,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGameServer.GameServer.GameServerId', props);
    return resource.getResponseField('GameServer.GameServerId') as unknown as string;
  }

  public get instanceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGameServer',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateGameServer.GameServer.InstanceId'),
        outputPath: 'GameServer.InstanceId',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          GameServerId: this.input.gameServerId,
          GameServerData: this.input.gameServerData,
          UtilizationStatus: this.input.utilizationStatus,
          HealthCheck: this.input.healthCheck,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGameServer.GameServer.InstanceId', props);
    return resource.getResponseField('GameServer.InstanceId') as unknown as string;
  }

  public get connectionInfo(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGameServer',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateGameServer.GameServer.ConnectionInfo'),
        outputPath: 'GameServer.ConnectionInfo',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          GameServerId: this.input.gameServerId,
          GameServerData: this.input.gameServerData,
          UtilizationStatus: this.input.utilizationStatus,
          HealthCheck: this.input.healthCheck,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGameServer.GameServer.ConnectionInfo', props);
    return resource.getResponseField('GameServer.ConnectionInfo') as unknown as string;
  }

  public get gameServerData(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGameServer',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateGameServer.GameServer.GameServerData'),
        outputPath: 'GameServer.GameServerData',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          GameServerId: this.input.gameServerId,
          GameServerData: this.input.gameServerData,
          UtilizationStatus: this.input.utilizationStatus,
          HealthCheck: this.input.healthCheck,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGameServer.GameServer.GameServerData', props);
    return resource.getResponseField('GameServer.GameServerData') as unknown as string;
  }

  public get claimStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGameServer',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateGameServer.GameServer.ClaimStatus'),
        outputPath: 'GameServer.ClaimStatus',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          GameServerId: this.input.gameServerId,
          GameServerData: this.input.gameServerData,
          UtilizationStatus: this.input.utilizationStatus,
          HealthCheck: this.input.healthCheck,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGameServer.GameServer.ClaimStatus', props);
    return resource.getResponseField('GameServer.ClaimStatus') as unknown as string;
  }

  public get utilizationStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGameServer',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateGameServer.GameServer.UtilizationStatus'),
        outputPath: 'GameServer.UtilizationStatus',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          GameServerId: this.input.gameServerId,
          GameServerData: this.input.gameServerData,
          UtilizationStatus: this.input.utilizationStatus,
          HealthCheck: this.input.healthCheck,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGameServer.GameServer.UtilizationStatus', props);
    return resource.getResponseField('GameServer.UtilizationStatus') as unknown as string;
  }

  public get registrationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGameServer',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateGameServer.GameServer.RegistrationTime'),
        outputPath: 'GameServer.RegistrationTime',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          GameServerId: this.input.gameServerId,
          GameServerData: this.input.gameServerData,
          UtilizationStatus: this.input.utilizationStatus,
          HealthCheck: this.input.healthCheck,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGameServer.GameServer.RegistrationTime', props);
    return resource.getResponseField('GameServer.RegistrationTime') as unknown as string;
  }

  public get lastClaimTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGameServer',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateGameServer.GameServer.LastClaimTime'),
        outputPath: 'GameServer.LastClaimTime',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          GameServerId: this.input.gameServerId,
          GameServerData: this.input.gameServerData,
          UtilizationStatus: this.input.utilizationStatus,
          HealthCheck: this.input.healthCheck,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGameServer.GameServer.LastClaimTime', props);
    return resource.getResponseField('GameServer.LastClaimTime') as unknown as string;
  }

  public get lastHealthCheckTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGameServer',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateGameServer.GameServer.LastHealthCheckTime'),
        outputPath: 'GameServer.LastHealthCheckTime',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          GameServerId: this.input.gameServerId,
          GameServerData: this.input.gameServerData,
          UtilizationStatus: this.input.utilizationStatus,
          HealthCheck: this.input.healthCheck,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGameServer.GameServer.LastHealthCheckTime', props);
    return resource.getResponseField('GameServer.LastHealthCheckTime') as unknown as string;
  }

}

export class GameLiftUpdateGameServerGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftUpdateGameServerGroupInput) {
    super(scope, id);
  }

  public get gameServerGroup(): GameLiftUpdateGameServerGroupGameServerGroup {
    return new GameLiftUpdateGameServerGroupGameServerGroup(this, 'GameServerGroup', this.__resources, this.input);
  }

}

export class GameLiftUpdateGameServerGroupGameServerGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftUpdateGameServerGroupInput) {
    super(scope, id);
  }

  public get gameServerGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateGameServerGroup.GameServerGroup.GameServerGroupName'),
        outputPath: 'GameServerGroup.GameServerGroupName',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          RoleArn: this.input.roleArn,
          InstanceDefinitions: this.input.instanceDefinitions,
          GameServerProtectionPolicy: this.input.gameServerProtectionPolicy,
          BalancingStrategy: this.input.balancingStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGameServerGroup.GameServerGroup.GameServerGroupName', props);
    return resource.getResponseField('GameServerGroup.GameServerGroupName') as unknown as string;
  }

  public get gameServerGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateGameServerGroup.GameServerGroup.GameServerGroupArn'),
        outputPath: 'GameServerGroup.GameServerGroupArn',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          RoleArn: this.input.roleArn,
          InstanceDefinitions: this.input.instanceDefinitions,
          GameServerProtectionPolicy: this.input.gameServerProtectionPolicy,
          BalancingStrategy: this.input.balancingStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGameServerGroup.GameServerGroup.GameServerGroupArn', props);
    return resource.getResponseField('GameServerGroup.GameServerGroupArn') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateGameServerGroup.GameServerGroup.RoleArn'),
        outputPath: 'GameServerGroup.RoleArn',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          RoleArn: this.input.roleArn,
          InstanceDefinitions: this.input.instanceDefinitions,
          GameServerProtectionPolicy: this.input.gameServerProtectionPolicy,
          BalancingStrategy: this.input.balancingStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGameServerGroup.GameServerGroup.RoleArn', props);
    return resource.getResponseField('GameServerGroup.RoleArn') as unknown as string;
  }

  public get instanceDefinitions(): shapes.GameLiftInstanceDefinition[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateGameServerGroup.GameServerGroup.InstanceDefinitions'),
        outputPath: 'GameServerGroup.InstanceDefinitions',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          RoleArn: this.input.roleArn,
          InstanceDefinitions: this.input.instanceDefinitions,
          GameServerProtectionPolicy: this.input.gameServerProtectionPolicy,
          BalancingStrategy: this.input.balancingStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGameServerGroup.GameServerGroup.InstanceDefinitions', props);
    return resource.getResponseField('GameServerGroup.InstanceDefinitions') as unknown as shapes.GameLiftInstanceDefinition[];
  }

  public get balancingStrategy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateGameServerGroup.GameServerGroup.BalancingStrategy'),
        outputPath: 'GameServerGroup.BalancingStrategy',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          RoleArn: this.input.roleArn,
          InstanceDefinitions: this.input.instanceDefinitions,
          GameServerProtectionPolicy: this.input.gameServerProtectionPolicy,
          BalancingStrategy: this.input.balancingStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGameServerGroup.GameServerGroup.BalancingStrategy', props);
    return resource.getResponseField('GameServerGroup.BalancingStrategy') as unknown as string;
  }

  public get gameServerProtectionPolicy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateGameServerGroup.GameServerGroup.GameServerProtectionPolicy'),
        outputPath: 'GameServerGroup.GameServerProtectionPolicy',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          RoleArn: this.input.roleArn,
          InstanceDefinitions: this.input.instanceDefinitions,
          GameServerProtectionPolicy: this.input.gameServerProtectionPolicy,
          BalancingStrategy: this.input.balancingStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGameServerGroup.GameServerGroup.GameServerProtectionPolicy', props);
    return resource.getResponseField('GameServerGroup.GameServerProtectionPolicy') as unknown as string;
  }

  public get autoScalingGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateGameServerGroup.GameServerGroup.AutoScalingGroupArn'),
        outputPath: 'GameServerGroup.AutoScalingGroupArn',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          RoleArn: this.input.roleArn,
          InstanceDefinitions: this.input.instanceDefinitions,
          GameServerProtectionPolicy: this.input.gameServerProtectionPolicy,
          BalancingStrategy: this.input.balancingStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGameServerGroup.GameServerGroup.AutoScalingGroupArn', props);
    return resource.getResponseField('GameServerGroup.AutoScalingGroupArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateGameServerGroup.GameServerGroup.Status'),
        outputPath: 'GameServerGroup.Status',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          RoleArn: this.input.roleArn,
          InstanceDefinitions: this.input.instanceDefinitions,
          GameServerProtectionPolicy: this.input.gameServerProtectionPolicy,
          BalancingStrategy: this.input.balancingStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGameServerGroup.GameServerGroup.Status', props);
    return resource.getResponseField('GameServerGroup.Status') as unknown as string;
  }

  public get statusReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateGameServerGroup.GameServerGroup.StatusReason'),
        outputPath: 'GameServerGroup.StatusReason',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          RoleArn: this.input.roleArn,
          InstanceDefinitions: this.input.instanceDefinitions,
          GameServerProtectionPolicy: this.input.gameServerProtectionPolicy,
          BalancingStrategy: this.input.balancingStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGameServerGroup.GameServerGroup.StatusReason', props);
    return resource.getResponseField('GameServerGroup.StatusReason') as unknown as string;
  }

  public get suspendedActions(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateGameServerGroup.GameServerGroup.SuspendedActions'),
        outputPath: 'GameServerGroup.SuspendedActions',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          RoleArn: this.input.roleArn,
          InstanceDefinitions: this.input.instanceDefinitions,
          GameServerProtectionPolicy: this.input.gameServerProtectionPolicy,
          BalancingStrategy: this.input.balancingStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGameServerGroup.GameServerGroup.SuspendedActions', props);
    return resource.getResponseField('GameServerGroup.SuspendedActions') as unknown as string[];
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateGameServerGroup.GameServerGroup.CreationTime'),
        outputPath: 'GameServerGroup.CreationTime',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          RoleArn: this.input.roleArn,
          InstanceDefinitions: this.input.instanceDefinitions,
          GameServerProtectionPolicy: this.input.gameServerProtectionPolicy,
          BalancingStrategy: this.input.balancingStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGameServerGroup.GameServerGroup.CreationTime', props);
    return resource.getResponseField('GameServerGroup.CreationTime') as unknown as string;
  }

  public get lastUpdatedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGameServerGroup',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateGameServerGroup.GameServerGroup.LastUpdatedTime'),
        outputPath: 'GameServerGroup.LastUpdatedTime',
        parameters: {
          GameServerGroupName: this.input.gameServerGroupName,
          RoleArn: this.input.roleArn,
          InstanceDefinitions: this.input.instanceDefinitions,
          GameServerProtectionPolicy: this.input.gameServerProtectionPolicy,
          BalancingStrategy: this.input.balancingStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGameServerGroup.GameServerGroup.LastUpdatedTime', props);
    return resource.getResponseField('GameServerGroup.LastUpdatedTime') as unknown as string;
  }

}

export class GameLiftUpdateGameSession extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftUpdateGameSessionInput) {
    super(scope, id);
  }

  public get gameSession(): GameLiftUpdateGameSessionGameSession {
    return new GameLiftUpdateGameSessionGameSession(this, 'GameSession', this.__resources, this.input);
  }

}

export class GameLiftUpdateGameSessionGameSession extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftUpdateGameSessionInput) {
    super(scope, id);
  }

  public get gameSessionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGameSession',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateGameSession.GameSession.GameSessionId'),
        outputPath: 'GameSession.GameSessionId',
        parameters: {
          GameSessionId: this.input.gameSessionId,
          MaximumPlayerSessionCount: this.input.maximumPlayerSessionCount,
          Name: this.input.name,
          PlayerSessionCreationPolicy: this.input.playerSessionCreationPolicy,
          ProtectionPolicy: this.input.protectionPolicy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGameSession.GameSession.GameSessionId', props);
    return resource.getResponseField('GameSession.GameSessionId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGameSession',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateGameSession.GameSession.Name'),
        outputPath: 'GameSession.Name',
        parameters: {
          GameSessionId: this.input.gameSessionId,
          MaximumPlayerSessionCount: this.input.maximumPlayerSessionCount,
          Name: this.input.name,
          PlayerSessionCreationPolicy: this.input.playerSessionCreationPolicy,
          ProtectionPolicy: this.input.protectionPolicy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGameSession.GameSession.Name', props);
    return resource.getResponseField('GameSession.Name') as unknown as string;
  }

  public get fleetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGameSession',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateGameSession.GameSession.FleetId'),
        outputPath: 'GameSession.FleetId',
        parameters: {
          GameSessionId: this.input.gameSessionId,
          MaximumPlayerSessionCount: this.input.maximumPlayerSessionCount,
          Name: this.input.name,
          PlayerSessionCreationPolicy: this.input.playerSessionCreationPolicy,
          ProtectionPolicy: this.input.protectionPolicy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGameSession.GameSession.FleetId', props);
    return resource.getResponseField('GameSession.FleetId') as unknown as string;
  }

  public get fleetArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGameSession',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateGameSession.GameSession.FleetArn'),
        outputPath: 'GameSession.FleetArn',
        parameters: {
          GameSessionId: this.input.gameSessionId,
          MaximumPlayerSessionCount: this.input.maximumPlayerSessionCount,
          Name: this.input.name,
          PlayerSessionCreationPolicy: this.input.playerSessionCreationPolicy,
          ProtectionPolicy: this.input.protectionPolicy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGameSession.GameSession.FleetArn', props);
    return resource.getResponseField('GameSession.FleetArn') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGameSession',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateGameSession.GameSession.CreationTime'),
        outputPath: 'GameSession.CreationTime',
        parameters: {
          GameSessionId: this.input.gameSessionId,
          MaximumPlayerSessionCount: this.input.maximumPlayerSessionCount,
          Name: this.input.name,
          PlayerSessionCreationPolicy: this.input.playerSessionCreationPolicy,
          ProtectionPolicy: this.input.protectionPolicy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGameSession.GameSession.CreationTime', props);
    return resource.getResponseField('GameSession.CreationTime') as unknown as string;
  }

  public get terminationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGameSession',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateGameSession.GameSession.TerminationTime'),
        outputPath: 'GameSession.TerminationTime',
        parameters: {
          GameSessionId: this.input.gameSessionId,
          MaximumPlayerSessionCount: this.input.maximumPlayerSessionCount,
          Name: this.input.name,
          PlayerSessionCreationPolicy: this.input.playerSessionCreationPolicy,
          ProtectionPolicy: this.input.protectionPolicy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGameSession.GameSession.TerminationTime', props);
    return resource.getResponseField('GameSession.TerminationTime') as unknown as string;
  }

  public get currentPlayerSessionCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGameSession',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateGameSession.GameSession.CurrentPlayerSessionCount'),
        outputPath: 'GameSession.CurrentPlayerSessionCount',
        parameters: {
          GameSessionId: this.input.gameSessionId,
          MaximumPlayerSessionCount: this.input.maximumPlayerSessionCount,
          Name: this.input.name,
          PlayerSessionCreationPolicy: this.input.playerSessionCreationPolicy,
          ProtectionPolicy: this.input.protectionPolicy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGameSession.GameSession.CurrentPlayerSessionCount', props);
    return resource.getResponseField('GameSession.CurrentPlayerSessionCount') as unknown as number;
  }

  public get maximumPlayerSessionCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGameSession',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateGameSession.GameSession.MaximumPlayerSessionCount'),
        outputPath: 'GameSession.MaximumPlayerSessionCount',
        parameters: {
          GameSessionId: this.input.gameSessionId,
          MaximumPlayerSessionCount: this.input.maximumPlayerSessionCount,
          Name: this.input.name,
          PlayerSessionCreationPolicy: this.input.playerSessionCreationPolicy,
          ProtectionPolicy: this.input.protectionPolicy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGameSession.GameSession.MaximumPlayerSessionCount', props);
    return resource.getResponseField('GameSession.MaximumPlayerSessionCount') as unknown as number;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGameSession',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateGameSession.GameSession.Status'),
        outputPath: 'GameSession.Status',
        parameters: {
          GameSessionId: this.input.gameSessionId,
          MaximumPlayerSessionCount: this.input.maximumPlayerSessionCount,
          Name: this.input.name,
          PlayerSessionCreationPolicy: this.input.playerSessionCreationPolicy,
          ProtectionPolicy: this.input.protectionPolicy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGameSession.GameSession.Status', props);
    return resource.getResponseField('GameSession.Status') as unknown as string;
  }

  public get statusReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGameSession',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateGameSession.GameSession.StatusReason'),
        outputPath: 'GameSession.StatusReason',
        parameters: {
          GameSessionId: this.input.gameSessionId,
          MaximumPlayerSessionCount: this.input.maximumPlayerSessionCount,
          Name: this.input.name,
          PlayerSessionCreationPolicy: this.input.playerSessionCreationPolicy,
          ProtectionPolicy: this.input.protectionPolicy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGameSession.GameSession.StatusReason', props);
    return resource.getResponseField('GameSession.StatusReason') as unknown as string;
  }

  public get gameProperties(): shapes.GameLiftGameProperty[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGameSession',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateGameSession.GameSession.GameProperties'),
        outputPath: 'GameSession.GameProperties',
        parameters: {
          GameSessionId: this.input.gameSessionId,
          MaximumPlayerSessionCount: this.input.maximumPlayerSessionCount,
          Name: this.input.name,
          PlayerSessionCreationPolicy: this.input.playerSessionCreationPolicy,
          ProtectionPolicy: this.input.protectionPolicy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGameSession.GameSession.GameProperties', props);
    return resource.getResponseField('GameSession.GameProperties') as unknown as shapes.GameLiftGameProperty[];
  }

  public get ipAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGameSession',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateGameSession.GameSession.IpAddress'),
        outputPath: 'GameSession.IpAddress',
        parameters: {
          GameSessionId: this.input.gameSessionId,
          MaximumPlayerSessionCount: this.input.maximumPlayerSessionCount,
          Name: this.input.name,
          PlayerSessionCreationPolicy: this.input.playerSessionCreationPolicy,
          ProtectionPolicy: this.input.protectionPolicy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGameSession.GameSession.IpAddress', props);
    return resource.getResponseField('GameSession.IpAddress') as unknown as string;
  }

  public get dnsName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGameSession',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateGameSession.GameSession.DnsName'),
        outputPath: 'GameSession.DnsName',
        parameters: {
          GameSessionId: this.input.gameSessionId,
          MaximumPlayerSessionCount: this.input.maximumPlayerSessionCount,
          Name: this.input.name,
          PlayerSessionCreationPolicy: this.input.playerSessionCreationPolicy,
          ProtectionPolicy: this.input.protectionPolicy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGameSession.GameSession.DnsName', props);
    return resource.getResponseField('GameSession.DnsName') as unknown as string;
  }

  public get port(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGameSession',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateGameSession.GameSession.Port'),
        outputPath: 'GameSession.Port',
        parameters: {
          GameSessionId: this.input.gameSessionId,
          MaximumPlayerSessionCount: this.input.maximumPlayerSessionCount,
          Name: this.input.name,
          PlayerSessionCreationPolicy: this.input.playerSessionCreationPolicy,
          ProtectionPolicy: this.input.protectionPolicy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGameSession.GameSession.Port', props);
    return resource.getResponseField('GameSession.Port') as unknown as number;
  }

  public get playerSessionCreationPolicy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGameSession',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateGameSession.GameSession.PlayerSessionCreationPolicy'),
        outputPath: 'GameSession.PlayerSessionCreationPolicy',
        parameters: {
          GameSessionId: this.input.gameSessionId,
          MaximumPlayerSessionCount: this.input.maximumPlayerSessionCount,
          Name: this.input.name,
          PlayerSessionCreationPolicy: this.input.playerSessionCreationPolicy,
          ProtectionPolicy: this.input.protectionPolicy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGameSession.GameSession.PlayerSessionCreationPolicy', props);
    return resource.getResponseField('GameSession.PlayerSessionCreationPolicy') as unknown as string;
  }

  public get creatorId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGameSession',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateGameSession.GameSession.CreatorId'),
        outputPath: 'GameSession.CreatorId',
        parameters: {
          GameSessionId: this.input.gameSessionId,
          MaximumPlayerSessionCount: this.input.maximumPlayerSessionCount,
          Name: this.input.name,
          PlayerSessionCreationPolicy: this.input.playerSessionCreationPolicy,
          ProtectionPolicy: this.input.protectionPolicy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGameSession.GameSession.CreatorId', props);
    return resource.getResponseField('GameSession.CreatorId') as unknown as string;
  }

  public get gameSessionData(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGameSession',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateGameSession.GameSession.GameSessionData'),
        outputPath: 'GameSession.GameSessionData',
        parameters: {
          GameSessionId: this.input.gameSessionId,
          MaximumPlayerSessionCount: this.input.maximumPlayerSessionCount,
          Name: this.input.name,
          PlayerSessionCreationPolicy: this.input.playerSessionCreationPolicy,
          ProtectionPolicy: this.input.protectionPolicy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGameSession.GameSession.GameSessionData', props);
    return resource.getResponseField('GameSession.GameSessionData') as unknown as string;
  }

  public get matchmakerData(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGameSession',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateGameSession.GameSession.MatchmakerData'),
        outputPath: 'GameSession.MatchmakerData',
        parameters: {
          GameSessionId: this.input.gameSessionId,
          MaximumPlayerSessionCount: this.input.maximumPlayerSessionCount,
          Name: this.input.name,
          PlayerSessionCreationPolicy: this.input.playerSessionCreationPolicy,
          ProtectionPolicy: this.input.protectionPolicy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGameSession.GameSession.MatchmakerData', props);
    return resource.getResponseField('GameSession.MatchmakerData') as unknown as string;
  }

}

export class GameLiftUpdateGameSessionQueue extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftUpdateGameSessionQueueInput) {
    super(scope, id);
  }

  public get gameSessionQueue(): GameLiftUpdateGameSessionQueueGameSessionQueue {
    return new GameLiftUpdateGameSessionQueueGameSessionQueue(this, 'GameSessionQueue', this.__resources, this.input);
  }

}

export class GameLiftUpdateGameSessionQueueGameSessionQueue extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftUpdateGameSessionQueueInput) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGameSessionQueue',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateGameSessionQueue.GameSessionQueue.Name'),
        outputPath: 'GameSessionQueue.Name',
        parameters: {
          Name: this.input.name,
          TimeoutInSeconds: this.input.timeoutInSeconds,
          PlayerLatencyPolicies: this.input.playerLatencyPolicies,
          Destinations: this.input.destinations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGameSessionQueue.GameSessionQueue.Name', props);
    return resource.getResponseField('GameSessionQueue.Name') as unknown as string;
  }

  public get gameSessionQueueArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGameSessionQueue',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateGameSessionQueue.GameSessionQueue.GameSessionQueueArn'),
        outputPath: 'GameSessionQueue.GameSessionQueueArn',
        parameters: {
          Name: this.input.name,
          TimeoutInSeconds: this.input.timeoutInSeconds,
          PlayerLatencyPolicies: this.input.playerLatencyPolicies,
          Destinations: this.input.destinations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGameSessionQueue.GameSessionQueue.GameSessionQueueArn', props);
    return resource.getResponseField('GameSessionQueue.GameSessionQueueArn') as unknown as string;
  }

  public get timeoutInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGameSessionQueue',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateGameSessionQueue.GameSessionQueue.TimeoutInSeconds'),
        outputPath: 'GameSessionQueue.TimeoutInSeconds',
        parameters: {
          Name: this.input.name,
          TimeoutInSeconds: this.input.timeoutInSeconds,
          PlayerLatencyPolicies: this.input.playerLatencyPolicies,
          Destinations: this.input.destinations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGameSessionQueue.GameSessionQueue.TimeoutInSeconds', props);
    return resource.getResponseField('GameSessionQueue.TimeoutInSeconds') as unknown as number;
  }

  public get playerLatencyPolicies(): shapes.GameLiftPlayerLatencyPolicy[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGameSessionQueue',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateGameSessionQueue.GameSessionQueue.PlayerLatencyPolicies'),
        outputPath: 'GameSessionQueue.PlayerLatencyPolicies',
        parameters: {
          Name: this.input.name,
          TimeoutInSeconds: this.input.timeoutInSeconds,
          PlayerLatencyPolicies: this.input.playerLatencyPolicies,
          Destinations: this.input.destinations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGameSessionQueue.GameSessionQueue.PlayerLatencyPolicies', props);
    return resource.getResponseField('GameSessionQueue.PlayerLatencyPolicies') as unknown as shapes.GameLiftPlayerLatencyPolicy[];
  }

  public get destinations(): shapes.GameLiftGameSessionQueueDestination[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGameSessionQueue',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateGameSessionQueue.GameSessionQueue.Destinations'),
        outputPath: 'GameSessionQueue.Destinations',
        parameters: {
          Name: this.input.name,
          TimeoutInSeconds: this.input.timeoutInSeconds,
          PlayerLatencyPolicies: this.input.playerLatencyPolicies,
          Destinations: this.input.destinations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGameSessionQueue.GameSessionQueue.Destinations', props);
    return resource.getResponseField('GameSessionQueue.Destinations') as unknown as shapes.GameLiftGameSessionQueueDestination[];
  }

}

export class GameLiftUpdateMatchmakingConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftUpdateMatchmakingConfigurationInput) {
    super(scope, id);
  }

  public get configuration(): GameLiftUpdateMatchmakingConfigurationConfiguration {
    return new GameLiftUpdateMatchmakingConfigurationConfiguration(this, 'Configuration', this.__resources, this.input);
  }

}

export class GameLiftUpdateMatchmakingConfigurationConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftUpdateMatchmakingConfigurationInput) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMatchmakingConfiguration',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateMatchmakingConfiguration.Configuration.Name'),
        outputPath: 'Configuration.Name',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          GameSessionQueueArns: this.input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.input.acceptanceRequired,
          RuleSetName: this.input.ruleSetName,
          NotificationTarget: this.input.notificationTarget,
          AdditionalPlayerCount: this.input.additionalPlayerCount,
          CustomEventData: this.input.customEventData,
          GameProperties: this.input.gameProperties,
          GameSessionData: this.input.gameSessionData,
          BackfillMode: this.input.backfillMode,
          FlexMatchMode: this.input.flexMatchMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMatchmakingConfiguration.Configuration.Name', props);
    return resource.getResponseField('Configuration.Name') as unknown as string;
  }

  public get configurationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMatchmakingConfiguration',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateMatchmakingConfiguration.Configuration.ConfigurationArn'),
        outputPath: 'Configuration.ConfigurationArn',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          GameSessionQueueArns: this.input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.input.acceptanceRequired,
          RuleSetName: this.input.ruleSetName,
          NotificationTarget: this.input.notificationTarget,
          AdditionalPlayerCount: this.input.additionalPlayerCount,
          CustomEventData: this.input.customEventData,
          GameProperties: this.input.gameProperties,
          GameSessionData: this.input.gameSessionData,
          BackfillMode: this.input.backfillMode,
          FlexMatchMode: this.input.flexMatchMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMatchmakingConfiguration.Configuration.ConfigurationArn', props);
    return resource.getResponseField('Configuration.ConfigurationArn') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMatchmakingConfiguration',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateMatchmakingConfiguration.Configuration.Description'),
        outputPath: 'Configuration.Description',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          GameSessionQueueArns: this.input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.input.acceptanceRequired,
          RuleSetName: this.input.ruleSetName,
          NotificationTarget: this.input.notificationTarget,
          AdditionalPlayerCount: this.input.additionalPlayerCount,
          CustomEventData: this.input.customEventData,
          GameProperties: this.input.gameProperties,
          GameSessionData: this.input.gameSessionData,
          BackfillMode: this.input.backfillMode,
          FlexMatchMode: this.input.flexMatchMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMatchmakingConfiguration.Configuration.Description', props);
    return resource.getResponseField('Configuration.Description') as unknown as string;
  }

  public get gameSessionQueueArns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMatchmakingConfiguration',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateMatchmakingConfiguration.Configuration.GameSessionQueueArns'),
        outputPath: 'Configuration.GameSessionQueueArns',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          GameSessionQueueArns: this.input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.input.acceptanceRequired,
          RuleSetName: this.input.ruleSetName,
          NotificationTarget: this.input.notificationTarget,
          AdditionalPlayerCount: this.input.additionalPlayerCount,
          CustomEventData: this.input.customEventData,
          GameProperties: this.input.gameProperties,
          GameSessionData: this.input.gameSessionData,
          BackfillMode: this.input.backfillMode,
          FlexMatchMode: this.input.flexMatchMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMatchmakingConfiguration.Configuration.GameSessionQueueArns', props);
    return resource.getResponseField('Configuration.GameSessionQueueArns') as unknown as string[];
  }

  public get requestTimeoutSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMatchmakingConfiguration',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateMatchmakingConfiguration.Configuration.RequestTimeoutSeconds'),
        outputPath: 'Configuration.RequestTimeoutSeconds',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          GameSessionQueueArns: this.input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.input.acceptanceRequired,
          RuleSetName: this.input.ruleSetName,
          NotificationTarget: this.input.notificationTarget,
          AdditionalPlayerCount: this.input.additionalPlayerCount,
          CustomEventData: this.input.customEventData,
          GameProperties: this.input.gameProperties,
          GameSessionData: this.input.gameSessionData,
          BackfillMode: this.input.backfillMode,
          FlexMatchMode: this.input.flexMatchMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMatchmakingConfiguration.Configuration.RequestTimeoutSeconds', props);
    return resource.getResponseField('Configuration.RequestTimeoutSeconds') as unknown as number;
  }

  public get acceptanceTimeoutSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMatchmakingConfiguration',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateMatchmakingConfiguration.Configuration.AcceptanceTimeoutSeconds'),
        outputPath: 'Configuration.AcceptanceTimeoutSeconds',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          GameSessionQueueArns: this.input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.input.acceptanceRequired,
          RuleSetName: this.input.ruleSetName,
          NotificationTarget: this.input.notificationTarget,
          AdditionalPlayerCount: this.input.additionalPlayerCount,
          CustomEventData: this.input.customEventData,
          GameProperties: this.input.gameProperties,
          GameSessionData: this.input.gameSessionData,
          BackfillMode: this.input.backfillMode,
          FlexMatchMode: this.input.flexMatchMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMatchmakingConfiguration.Configuration.AcceptanceTimeoutSeconds', props);
    return resource.getResponseField('Configuration.AcceptanceTimeoutSeconds') as unknown as number;
  }

  public get acceptanceRequired(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMatchmakingConfiguration',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateMatchmakingConfiguration.Configuration.AcceptanceRequired'),
        outputPath: 'Configuration.AcceptanceRequired',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          GameSessionQueueArns: this.input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.input.acceptanceRequired,
          RuleSetName: this.input.ruleSetName,
          NotificationTarget: this.input.notificationTarget,
          AdditionalPlayerCount: this.input.additionalPlayerCount,
          CustomEventData: this.input.customEventData,
          GameProperties: this.input.gameProperties,
          GameSessionData: this.input.gameSessionData,
          BackfillMode: this.input.backfillMode,
          FlexMatchMode: this.input.flexMatchMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMatchmakingConfiguration.Configuration.AcceptanceRequired', props);
    return resource.getResponseField('Configuration.AcceptanceRequired') as unknown as boolean;
  }

  public get ruleSetName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMatchmakingConfiguration',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateMatchmakingConfiguration.Configuration.RuleSetName'),
        outputPath: 'Configuration.RuleSetName',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          GameSessionQueueArns: this.input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.input.acceptanceRequired,
          RuleSetName: this.input.ruleSetName,
          NotificationTarget: this.input.notificationTarget,
          AdditionalPlayerCount: this.input.additionalPlayerCount,
          CustomEventData: this.input.customEventData,
          GameProperties: this.input.gameProperties,
          GameSessionData: this.input.gameSessionData,
          BackfillMode: this.input.backfillMode,
          FlexMatchMode: this.input.flexMatchMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMatchmakingConfiguration.Configuration.RuleSetName', props);
    return resource.getResponseField('Configuration.RuleSetName') as unknown as string;
  }

  public get ruleSetArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMatchmakingConfiguration',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateMatchmakingConfiguration.Configuration.RuleSetArn'),
        outputPath: 'Configuration.RuleSetArn',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          GameSessionQueueArns: this.input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.input.acceptanceRequired,
          RuleSetName: this.input.ruleSetName,
          NotificationTarget: this.input.notificationTarget,
          AdditionalPlayerCount: this.input.additionalPlayerCount,
          CustomEventData: this.input.customEventData,
          GameProperties: this.input.gameProperties,
          GameSessionData: this.input.gameSessionData,
          BackfillMode: this.input.backfillMode,
          FlexMatchMode: this.input.flexMatchMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMatchmakingConfiguration.Configuration.RuleSetArn', props);
    return resource.getResponseField('Configuration.RuleSetArn') as unknown as string;
  }

  public get notificationTarget(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMatchmakingConfiguration',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateMatchmakingConfiguration.Configuration.NotificationTarget'),
        outputPath: 'Configuration.NotificationTarget',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          GameSessionQueueArns: this.input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.input.acceptanceRequired,
          RuleSetName: this.input.ruleSetName,
          NotificationTarget: this.input.notificationTarget,
          AdditionalPlayerCount: this.input.additionalPlayerCount,
          CustomEventData: this.input.customEventData,
          GameProperties: this.input.gameProperties,
          GameSessionData: this.input.gameSessionData,
          BackfillMode: this.input.backfillMode,
          FlexMatchMode: this.input.flexMatchMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMatchmakingConfiguration.Configuration.NotificationTarget', props);
    return resource.getResponseField('Configuration.NotificationTarget') as unknown as string;
  }

  public get additionalPlayerCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMatchmakingConfiguration',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateMatchmakingConfiguration.Configuration.AdditionalPlayerCount'),
        outputPath: 'Configuration.AdditionalPlayerCount',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          GameSessionQueueArns: this.input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.input.acceptanceRequired,
          RuleSetName: this.input.ruleSetName,
          NotificationTarget: this.input.notificationTarget,
          AdditionalPlayerCount: this.input.additionalPlayerCount,
          CustomEventData: this.input.customEventData,
          GameProperties: this.input.gameProperties,
          GameSessionData: this.input.gameSessionData,
          BackfillMode: this.input.backfillMode,
          FlexMatchMode: this.input.flexMatchMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMatchmakingConfiguration.Configuration.AdditionalPlayerCount', props);
    return resource.getResponseField('Configuration.AdditionalPlayerCount') as unknown as number;
  }

  public get customEventData(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMatchmakingConfiguration',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateMatchmakingConfiguration.Configuration.CustomEventData'),
        outputPath: 'Configuration.CustomEventData',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          GameSessionQueueArns: this.input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.input.acceptanceRequired,
          RuleSetName: this.input.ruleSetName,
          NotificationTarget: this.input.notificationTarget,
          AdditionalPlayerCount: this.input.additionalPlayerCount,
          CustomEventData: this.input.customEventData,
          GameProperties: this.input.gameProperties,
          GameSessionData: this.input.gameSessionData,
          BackfillMode: this.input.backfillMode,
          FlexMatchMode: this.input.flexMatchMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMatchmakingConfiguration.Configuration.CustomEventData', props);
    return resource.getResponseField('Configuration.CustomEventData') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMatchmakingConfiguration',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateMatchmakingConfiguration.Configuration.CreationTime'),
        outputPath: 'Configuration.CreationTime',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          GameSessionQueueArns: this.input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.input.acceptanceRequired,
          RuleSetName: this.input.ruleSetName,
          NotificationTarget: this.input.notificationTarget,
          AdditionalPlayerCount: this.input.additionalPlayerCount,
          CustomEventData: this.input.customEventData,
          GameProperties: this.input.gameProperties,
          GameSessionData: this.input.gameSessionData,
          BackfillMode: this.input.backfillMode,
          FlexMatchMode: this.input.flexMatchMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMatchmakingConfiguration.Configuration.CreationTime', props);
    return resource.getResponseField('Configuration.CreationTime') as unknown as string;
  }

  public get gameProperties(): shapes.GameLiftGameProperty[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMatchmakingConfiguration',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateMatchmakingConfiguration.Configuration.GameProperties'),
        outputPath: 'Configuration.GameProperties',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          GameSessionQueueArns: this.input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.input.acceptanceRequired,
          RuleSetName: this.input.ruleSetName,
          NotificationTarget: this.input.notificationTarget,
          AdditionalPlayerCount: this.input.additionalPlayerCount,
          CustomEventData: this.input.customEventData,
          GameProperties: this.input.gameProperties,
          GameSessionData: this.input.gameSessionData,
          BackfillMode: this.input.backfillMode,
          FlexMatchMode: this.input.flexMatchMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMatchmakingConfiguration.Configuration.GameProperties', props);
    return resource.getResponseField('Configuration.GameProperties') as unknown as shapes.GameLiftGameProperty[];
  }

  public get gameSessionData(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMatchmakingConfiguration',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateMatchmakingConfiguration.Configuration.GameSessionData'),
        outputPath: 'Configuration.GameSessionData',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          GameSessionQueueArns: this.input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.input.acceptanceRequired,
          RuleSetName: this.input.ruleSetName,
          NotificationTarget: this.input.notificationTarget,
          AdditionalPlayerCount: this.input.additionalPlayerCount,
          CustomEventData: this.input.customEventData,
          GameProperties: this.input.gameProperties,
          GameSessionData: this.input.gameSessionData,
          BackfillMode: this.input.backfillMode,
          FlexMatchMode: this.input.flexMatchMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMatchmakingConfiguration.Configuration.GameSessionData', props);
    return resource.getResponseField('Configuration.GameSessionData') as unknown as string;
  }

  public get backfillMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMatchmakingConfiguration',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateMatchmakingConfiguration.Configuration.BackfillMode'),
        outputPath: 'Configuration.BackfillMode',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          GameSessionQueueArns: this.input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.input.acceptanceRequired,
          RuleSetName: this.input.ruleSetName,
          NotificationTarget: this.input.notificationTarget,
          AdditionalPlayerCount: this.input.additionalPlayerCount,
          CustomEventData: this.input.customEventData,
          GameProperties: this.input.gameProperties,
          GameSessionData: this.input.gameSessionData,
          BackfillMode: this.input.backfillMode,
          FlexMatchMode: this.input.flexMatchMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMatchmakingConfiguration.Configuration.BackfillMode', props);
    return resource.getResponseField('Configuration.BackfillMode') as unknown as string;
  }

  public get flexMatchMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMatchmakingConfiguration',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateMatchmakingConfiguration.Configuration.FlexMatchMode'),
        outputPath: 'Configuration.FlexMatchMode',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          GameSessionQueueArns: this.input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.input.acceptanceRequired,
          RuleSetName: this.input.ruleSetName,
          NotificationTarget: this.input.notificationTarget,
          AdditionalPlayerCount: this.input.additionalPlayerCount,
          CustomEventData: this.input.customEventData,
          GameProperties: this.input.gameProperties,
          GameSessionData: this.input.gameSessionData,
          BackfillMode: this.input.backfillMode,
          FlexMatchMode: this.input.flexMatchMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMatchmakingConfiguration.Configuration.FlexMatchMode', props);
    return resource.getResponseField('Configuration.FlexMatchMode') as unknown as string;
  }

}

export class GameLiftUpdateRuntimeConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftUpdateRuntimeConfigurationInput) {
    super(scope, id);
  }

  public get runtimeConfiguration(): GameLiftUpdateRuntimeConfigurationRuntimeConfiguration {
    return new GameLiftUpdateRuntimeConfigurationRuntimeConfiguration(this, 'RuntimeConfiguration', this.__resources, this.input);
  }

}

export class GameLiftUpdateRuntimeConfigurationRuntimeConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftUpdateRuntimeConfigurationInput) {
    super(scope, id);
  }

  public get serverProcesses(): shapes.GameLiftServerProcess[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRuntimeConfiguration',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateRuntimeConfiguration.RuntimeConfiguration.ServerProcesses'),
        outputPath: 'RuntimeConfiguration.ServerProcesses',
        parameters: {
          FleetId: this.input.fleetId,
          RuntimeConfiguration: {
            ServerProcesses: this.input.runtimeConfiguration.serverProcesses,
            MaxConcurrentGameSessionActivations: this.input.runtimeConfiguration.maxConcurrentGameSessionActivations,
            GameSessionActivationTimeoutSeconds: this.input.runtimeConfiguration.gameSessionActivationTimeoutSeconds,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRuntimeConfiguration.RuntimeConfiguration.ServerProcesses', props);
    return resource.getResponseField('RuntimeConfiguration.ServerProcesses') as unknown as shapes.GameLiftServerProcess[];
  }

  public get maxConcurrentGameSessionActivations(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRuntimeConfiguration',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateRuntimeConfiguration.RuntimeConfiguration.MaxConcurrentGameSessionActivations'),
        outputPath: 'RuntimeConfiguration.MaxConcurrentGameSessionActivations',
        parameters: {
          FleetId: this.input.fleetId,
          RuntimeConfiguration: {
            ServerProcesses: this.input.runtimeConfiguration.serverProcesses,
            MaxConcurrentGameSessionActivations: this.input.runtimeConfiguration.maxConcurrentGameSessionActivations,
            GameSessionActivationTimeoutSeconds: this.input.runtimeConfiguration.gameSessionActivationTimeoutSeconds,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRuntimeConfiguration.RuntimeConfiguration.MaxConcurrentGameSessionActivations', props);
    return resource.getResponseField('RuntimeConfiguration.MaxConcurrentGameSessionActivations') as unknown as number;
  }

  public get gameSessionActivationTimeoutSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRuntimeConfiguration',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateRuntimeConfiguration.RuntimeConfiguration.GameSessionActivationTimeoutSeconds'),
        outputPath: 'RuntimeConfiguration.GameSessionActivationTimeoutSeconds',
        parameters: {
          FleetId: this.input.fleetId,
          RuntimeConfiguration: {
            ServerProcesses: this.input.runtimeConfiguration.serverProcesses,
            MaxConcurrentGameSessionActivations: this.input.runtimeConfiguration.maxConcurrentGameSessionActivations,
            GameSessionActivationTimeoutSeconds: this.input.runtimeConfiguration.gameSessionActivationTimeoutSeconds,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRuntimeConfiguration.RuntimeConfiguration.GameSessionActivationTimeoutSeconds', props);
    return resource.getResponseField('RuntimeConfiguration.GameSessionActivationTimeoutSeconds') as unknown as number;
  }

}

export class GameLiftUpdateScript extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftUpdateScriptInput) {
    super(scope, id);
  }

  public get script(): GameLiftUpdateScriptScript {
    return new GameLiftUpdateScriptScript(this, 'Script', this.__resources, this.input);
  }

}

export class GameLiftUpdateScriptScript extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftUpdateScriptInput) {
    super(scope, id);
  }

  public get scriptId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateScript',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateScript.Script.ScriptId'),
        outputPath: 'Script.ScriptId',
        parameters: {
          ScriptId: this.input.scriptId,
          Name: this.input.name,
          Version: this.input.version,
          StorageLocation: {
            Bucket: this.input.storageLocation?.bucket,
            Key: this.input.storageLocation?.key,
            RoleArn: this.input.storageLocation?.roleArn,
            ObjectVersion: this.input.storageLocation?.objectVersion,
          },
          ZipFile: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateScript.Script.ScriptId', props);
    return resource.getResponseField('Script.ScriptId') as unknown as string;
  }

  public get scriptArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateScript',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateScript.Script.ScriptArn'),
        outputPath: 'Script.ScriptArn',
        parameters: {
          ScriptId: this.input.scriptId,
          Name: this.input.name,
          Version: this.input.version,
          StorageLocation: {
            Bucket: this.input.storageLocation?.bucket,
            Key: this.input.storageLocation?.key,
            RoleArn: this.input.storageLocation?.roleArn,
            ObjectVersion: this.input.storageLocation?.objectVersion,
          },
          ZipFile: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateScript.Script.ScriptArn', props);
    return resource.getResponseField('Script.ScriptArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateScript',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateScript.Script.Name'),
        outputPath: 'Script.Name',
        parameters: {
          ScriptId: this.input.scriptId,
          Name: this.input.name,
          Version: this.input.version,
          StorageLocation: {
            Bucket: this.input.storageLocation?.bucket,
            Key: this.input.storageLocation?.key,
            RoleArn: this.input.storageLocation?.roleArn,
            ObjectVersion: this.input.storageLocation?.objectVersion,
          },
          ZipFile: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateScript.Script.Name', props);
    return resource.getResponseField('Script.Name') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateScript',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateScript.Script.Version'),
        outputPath: 'Script.Version',
        parameters: {
          ScriptId: this.input.scriptId,
          Name: this.input.name,
          Version: this.input.version,
          StorageLocation: {
            Bucket: this.input.storageLocation?.bucket,
            Key: this.input.storageLocation?.key,
            RoleArn: this.input.storageLocation?.roleArn,
            ObjectVersion: this.input.storageLocation?.objectVersion,
          },
          ZipFile: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateScript.Script.Version', props);
    return resource.getResponseField('Script.Version') as unknown as string;
  }

  public get sizeOnDisk(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateScript',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateScript.Script.SizeOnDisk'),
        outputPath: 'Script.SizeOnDisk',
        parameters: {
          ScriptId: this.input.scriptId,
          Name: this.input.name,
          Version: this.input.version,
          StorageLocation: {
            Bucket: this.input.storageLocation?.bucket,
            Key: this.input.storageLocation?.key,
            RoleArn: this.input.storageLocation?.roleArn,
            ObjectVersion: this.input.storageLocation?.objectVersion,
          },
          ZipFile: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateScript.Script.SizeOnDisk', props);
    return resource.getResponseField('Script.SizeOnDisk') as unknown as number;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateScript',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateScript.Script.CreationTime'),
        outputPath: 'Script.CreationTime',
        parameters: {
          ScriptId: this.input.scriptId,
          Name: this.input.name,
          Version: this.input.version,
          StorageLocation: {
            Bucket: this.input.storageLocation?.bucket,
            Key: this.input.storageLocation?.key,
            RoleArn: this.input.storageLocation?.roleArn,
            ObjectVersion: this.input.storageLocation?.objectVersion,
          },
          ZipFile: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateScript.Script.CreationTime', props);
    return resource.getResponseField('Script.CreationTime') as unknown as string;
  }

  public get storageLocation(): GameLiftUpdateScriptScriptStorageLocation {
    return new GameLiftUpdateScriptScriptStorageLocation(this, 'StorageLocation', this.__resources, this.input);
  }

}

export class GameLiftUpdateScriptScriptStorageLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftUpdateScriptInput) {
    super(scope, id);
  }

  public get bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateScript',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateScript.Script.StorageLocation.Bucket'),
        outputPath: 'Script.StorageLocation.Bucket',
        parameters: {
          ScriptId: this.input.scriptId,
          Name: this.input.name,
          Version: this.input.version,
          StorageLocation: {
            Bucket: this.input.storageLocation?.bucket,
            Key: this.input.storageLocation?.key,
            RoleArn: this.input.storageLocation?.roleArn,
            ObjectVersion: this.input.storageLocation?.objectVersion,
          },
          ZipFile: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateScript.Script.StorageLocation.Bucket', props);
    return resource.getResponseField('Script.StorageLocation.Bucket') as unknown as string;
  }

  public get key(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateScript',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateScript.Script.StorageLocation.Key'),
        outputPath: 'Script.StorageLocation.Key',
        parameters: {
          ScriptId: this.input.scriptId,
          Name: this.input.name,
          Version: this.input.version,
          StorageLocation: {
            Bucket: this.input.storageLocation?.bucket,
            Key: this.input.storageLocation?.key,
            RoleArn: this.input.storageLocation?.roleArn,
            ObjectVersion: this.input.storageLocation?.objectVersion,
          },
          ZipFile: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateScript.Script.StorageLocation.Key', props);
    return resource.getResponseField('Script.StorageLocation.Key') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateScript',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateScript.Script.StorageLocation.RoleArn'),
        outputPath: 'Script.StorageLocation.RoleArn',
        parameters: {
          ScriptId: this.input.scriptId,
          Name: this.input.name,
          Version: this.input.version,
          StorageLocation: {
            Bucket: this.input.storageLocation?.bucket,
            Key: this.input.storageLocation?.key,
            RoleArn: this.input.storageLocation?.roleArn,
            ObjectVersion: this.input.storageLocation?.objectVersion,
          },
          ZipFile: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateScript.Script.StorageLocation.RoleArn', props);
    return resource.getResponseField('Script.StorageLocation.RoleArn') as unknown as string;
  }

  public get objectVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateScript',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.UpdateScript.Script.StorageLocation.ObjectVersion'),
        outputPath: 'Script.StorageLocation.ObjectVersion',
        parameters: {
          ScriptId: this.input.scriptId,
          Name: this.input.name,
          Version: this.input.version,
          StorageLocation: {
            Bucket: this.input.storageLocation?.bucket,
            Key: this.input.storageLocation?.key,
            RoleArn: this.input.storageLocation?.roleArn,
            ObjectVersion: this.input.storageLocation?.objectVersion,
          },
          ZipFile: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateScript.Script.StorageLocation.ObjectVersion', props);
    return resource.getResponseField('Script.StorageLocation.ObjectVersion') as unknown as string;
  }

}

export class GameLiftValidateMatchmakingRuleSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GameLiftValidateMatchmakingRuleSetInput) {
    super(scope, id);
  }

  public get valid(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'validateMatchmakingRuleSet',
        service: 'GameLift',
        physicalResourceId: cr.PhysicalResourceId.of('GameLift.ValidateMatchmakingRuleSet.Valid'),
        outputPath: 'Valid',
        parameters: {
          RuleSetBody: this.input.ruleSetBody,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ValidateMatchmakingRuleSet.Valid', props);
    return resource.getResponseField('Valid') as unknown as boolean;
  }

}

