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

  public claimGameServer(input: shapes.GameLiftClaimGameServerInput): GameLiftResponsesClaimGameServer {
    return new GameLiftResponsesClaimGameServer(this, this.__resources, input);
  }

  public createAlias(input: shapes.GameLiftCreateAliasInput): GameLiftResponsesCreateAlias {
    return new GameLiftResponsesCreateAlias(this, this.__resources, input);
  }

  public createBuild(input: shapes.GameLiftCreateBuildInput): GameLiftResponsesCreateBuild {
    return new GameLiftResponsesCreateBuild(this, this.__resources, input);
  }

  public createFleet(input: shapes.GameLiftCreateFleetInput): GameLiftResponsesCreateFleet {
    return new GameLiftResponsesCreateFleet(this, this.__resources, input);
  }

  public createGameServerGroup(input: shapes.GameLiftCreateGameServerGroupInput): GameLiftResponsesCreateGameServerGroup {
    return new GameLiftResponsesCreateGameServerGroup(this, this.__resources, input);
  }

  public createGameSession(input: shapes.GameLiftCreateGameSessionInput): GameLiftResponsesCreateGameSession {
    return new GameLiftResponsesCreateGameSession(this, this.__resources, input);
  }

  public createGameSessionQueue(input: shapes.GameLiftCreateGameSessionQueueInput): GameLiftResponsesCreateGameSessionQueue {
    return new GameLiftResponsesCreateGameSessionQueue(this, this.__resources, input);
  }

  public createMatchmakingConfiguration(input: shapes.GameLiftCreateMatchmakingConfigurationInput): GameLiftResponsesCreateMatchmakingConfiguration {
    return new GameLiftResponsesCreateMatchmakingConfiguration(this, this.__resources, input);
  }

  public createMatchmakingRuleSet(input: shapes.GameLiftCreateMatchmakingRuleSetInput): GameLiftResponsesCreateMatchmakingRuleSet {
    return new GameLiftResponsesCreateMatchmakingRuleSet(this, this.__resources, input);
  }

  public createPlayerSession(input: shapes.GameLiftCreatePlayerSessionInput): GameLiftResponsesCreatePlayerSession {
    return new GameLiftResponsesCreatePlayerSession(this, this.__resources, input);
  }

  public createPlayerSessions(input: shapes.GameLiftCreatePlayerSessionsInput): GameLiftResponsesCreatePlayerSessions {
    return new GameLiftResponsesCreatePlayerSessions(this, this.__resources, input);
  }

  public createScript(input: shapes.GameLiftCreateScriptInput): GameLiftResponsesCreateScript {
    return new GameLiftResponsesCreateScript(this, this.__resources, input);
  }

  public createVpcPeeringAuthorization(input: shapes.GameLiftCreateVpcPeeringAuthorizationInput): GameLiftResponsesCreateVpcPeeringAuthorization {
    return new GameLiftResponsesCreateVpcPeeringAuthorization(this, this.__resources, input);
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

  public deleteGameServerGroup(input: shapes.GameLiftDeleteGameServerGroupInput): GameLiftResponsesDeleteGameServerGroup {
    return new GameLiftResponsesDeleteGameServerGroup(this, this.__resources, input);
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

  public describeAlias(input: shapes.GameLiftDescribeAliasInput): GameLiftResponsesDescribeAlias {
    return new GameLiftResponsesDescribeAlias(this, this.__resources, input);
  }

  public describeBuild(input: shapes.GameLiftDescribeBuildInput): GameLiftResponsesDescribeBuild {
    return new GameLiftResponsesDescribeBuild(this, this.__resources, input);
  }

  public describeEc2InstanceLimits(input: shapes.GameLiftDescribeEc2InstanceLimitsInput): GameLiftResponsesDescribeEc2InstanceLimits {
    return new GameLiftResponsesDescribeEc2InstanceLimits(this, this.__resources, input);
  }

  public describeFleetAttributes(input: shapes.GameLiftDescribeFleetAttributesInput): GameLiftResponsesDescribeFleetAttributes {
    return new GameLiftResponsesDescribeFleetAttributes(this, this.__resources, input);
  }

  public describeFleetCapacity(input: shapes.GameLiftDescribeFleetCapacityInput): GameLiftResponsesDescribeFleetCapacity {
    return new GameLiftResponsesDescribeFleetCapacity(this, this.__resources, input);
  }

  public describeFleetEvents(input: shapes.GameLiftDescribeFleetEventsInput): GameLiftResponsesDescribeFleetEvents {
    return new GameLiftResponsesDescribeFleetEvents(this, this.__resources, input);
  }

  public describeFleetPortSettings(input: shapes.GameLiftDescribeFleetPortSettingsInput): GameLiftResponsesDescribeFleetPortSettings {
    return new GameLiftResponsesDescribeFleetPortSettings(this, this.__resources, input);
  }

  public describeFleetUtilization(input: shapes.GameLiftDescribeFleetUtilizationInput): GameLiftResponsesDescribeFleetUtilization {
    return new GameLiftResponsesDescribeFleetUtilization(this, this.__resources, input);
  }

  public describeGameServer(input: shapes.GameLiftDescribeGameServerInput): GameLiftResponsesDescribeGameServer {
    return new GameLiftResponsesDescribeGameServer(this, this.__resources, input);
  }

  public describeGameServerGroup(input: shapes.GameLiftDescribeGameServerGroupInput): GameLiftResponsesDescribeGameServerGroup {
    return new GameLiftResponsesDescribeGameServerGroup(this, this.__resources, input);
  }

  public describeGameServerInstances(input: shapes.GameLiftDescribeGameServerInstancesInput): GameLiftResponsesDescribeGameServerInstances {
    return new GameLiftResponsesDescribeGameServerInstances(this, this.__resources, input);
  }

  public describeGameSessionDetails(input: shapes.GameLiftDescribeGameSessionDetailsInput): GameLiftResponsesDescribeGameSessionDetails {
    return new GameLiftResponsesDescribeGameSessionDetails(this, this.__resources, input);
  }

  public describeGameSessionPlacement(input: shapes.GameLiftDescribeGameSessionPlacementInput): GameLiftResponsesDescribeGameSessionPlacement {
    return new GameLiftResponsesDescribeGameSessionPlacement(this, this.__resources, input);
  }

  public describeGameSessionQueues(input: shapes.GameLiftDescribeGameSessionQueuesInput): GameLiftResponsesDescribeGameSessionQueues {
    return new GameLiftResponsesDescribeGameSessionQueues(this, this.__resources, input);
  }

  public describeGameSessions(input: shapes.GameLiftDescribeGameSessionsInput): GameLiftResponsesDescribeGameSessions {
    return new GameLiftResponsesDescribeGameSessions(this, this.__resources, input);
  }

  public describeInstances(input: shapes.GameLiftDescribeInstancesInput): GameLiftResponsesDescribeInstances {
    return new GameLiftResponsesDescribeInstances(this, this.__resources, input);
  }

  public describeMatchmaking(input: shapes.GameLiftDescribeMatchmakingInput): GameLiftResponsesDescribeMatchmaking {
    return new GameLiftResponsesDescribeMatchmaking(this, this.__resources, input);
  }

  public describeMatchmakingConfigurations(input: shapes.GameLiftDescribeMatchmakingConfigurationsInput): GameLiftResponsesDescribeMatchmakingConfigurations {
    return new GameLiftResponsesDescribeMatchmakingConfigurations(this, this.__resources, input);
  }

  public describeMatchmakingRuleSets(input: shapes.GameLiftDescribeMatchmakingRuleSetsInput): GameLiftResponsesDescribeMatchmakingRuleSets {
    return new GameLiftResponsesDescribeMatchmakingRuleSets(this, this.__resources, input);
  }

  public describePlayerSessions(input: shapes.GameLiftDescribePlayerSessionsInput): GameLiftResponsesDescribePlayerSessions {
    return new GameLiftResponsesDescribePlayerSessions(this, this.__resources, input);
  }

  public describeRuntimeConfiguration(input: shapes.GameLiftDescribeRuntimeConfigurationInput): GameLiftResponsesDescribeRuntimeConfiguration {
    return new GameLiftResponsesDescribeRuntimeConfiguration(this, this.__resources, input);
  }

  public describeScalingPolicies(input: shapes.GameLiftDescribeScalingPoliciesInput): GameLiftResponsesDescribeScalingPolicies {
    return new GameLiftResponsesDescribeScalingPolicies(this, this.__resources, input);
  }

  public describeScript(input: shapes.GameLiftDescribeScriptInput): GameLiftResponsesDescribeScript {
    return new GameLiftResponsesDescribeScript(this, this.__resources, input);
  }

  public describeVpcPeeringAuthorizations(): GameLiftResponsesDescribeVpcPeeringAuthorizations {
    return new GameLiftResponsesDescribeVpcPeeringAuthorizations(this, this.__resources);
  }

  public describeVpcPeeringConnections(input: shapes.GameLiftDescribeVpcPeeringConnectionsInput): GameLiftResponsesDescribeVpcPeeringConnections {
    return new GameLiftResponsesDescribeVpcPeeringConnections(this, this.__resources, input);
  }

  public fetchGameSessionLogUrl(input: shapes.GameLiftGetGameSessionLogUrlInput): GameLiftResponsesFetchGameSessionLogUrl {
    return new GameLiftResponsesFetchGameSessionLogUrl(this, this.__resources, input);
  }

  public fetchInstanceAccess(input: shapes.GameLiftGetInstanceAccessInput): GameLiftResponsesFetchInstanceAccess {
    return new GameLiftResponsesFetchInstanceAccess(this, this.__resources, input);
  }

  public listAliases(input: shapes.GameLiftListAliasesInput): GameLiftResponsesListAliases {
    return new GameLiftResponsesListAliases(this, this.__resources, input);
  }

  public listBuilds(input: shapes.GameLiftListBuildsInput): GameLiftResponsesListBuilds {
    return new GameLiftResponsesListBuilds(this, this.__resources, input);
  }

  public listFleets(input: shapes.GameLiftListFleetsInput): GameLiftResponsesListFleets {
    return new GameLiftResponsesListFleets(this, this.__resources, input);
  }

  public listGameServerGroups(input: shapes.GameLiftListGameServerGroupsInput): GameLiftResponsesListGameServerGroups {
    return new GameLiftResponsesListGameServerGroups(this, this.__resources, input);
  }

  public listGameServers(input: shapes.GameLiftListGameServersInput): GameLiftResponsesListGameServers {
    return new GameLiftResponsesListGameServers(this, this.__resources, input);
  }

  public listScripts(input: shapes.GameLiftListScriptsInput): GameLiftResponsesListScripts {
    return new GameLiftResponsesListScripts(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.GameLiftListTagsForResourceRequest): GameLiftResponsesListTagsForResource {
    return new GameLiftResponsesListTagsForResource(this, this.__resources, input);
  }

  public putScalingPolicy(input: shapes.GameLiftPutScalingPolicyInput): GameLiftResponsesPutScalingPolicy {
    return new GameLiftResponsesPutScalingPolicy(this, this.__resources, input);
  }

  public registerGameServer(input: shapes.GameLiftRegisterGameServerInput): GameLiftResponsesRegisterGameServer {
    return new GameLiftResponsesRegisterGameServer(this, this.__resources, input);
  }

  public requestUploadCredentials(input: shapes.GameLiftRequestUploadCredentialsInput): GameLiftResponsesRequestUploadCredentials {
    return new GameLiftResponsesRequestUploadCredentials(this, this.__resources, input);
  }

  public resolveAlias(input: shapes.GameLiftResolveAliasInput): GameLiftResponsesResolveAlias {
    return new GameLiftResponsesResolveAlias(this, this.__resources, input);
  }

  public resumeGameServerGroup(input: shapes.GameLiftResumeGameServerGroupInput): GameLiftResponsesResumeGameServerGroup {
    return new GameLiftResponsesResumeGameServerGroup(this, this.__resources, input);
  }

  public searchGameSessions(input: shapes.GameLiftSearchGameSessionsInput): GameLiftResponsesSearchGameSessions {
    return new GameLiftResponsesSearchGameSessions(this, this.__resources, input);
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

  public startGameSessionPlacement(input: shapes.GameLiftStartGameSessionPlacementInput): GameLiftResponsesStartGameSessionPlacement {
    return new GameLiftResponsesStartGameSessionPlacement(this, this.__resources, input);
  }

  public startMatchBackfill(input: shapes.GameLiftStartMatchBackfillInput): GameLiftResponsesStartMatchBackfill {
    return new GameLiftResponsesStartMatchBackfill(this, this.__resources, input);
  }

  public startMatchmaking(input: shapes.GameLiftStartMatchmakingInput): GameLiftResponsesStartMatchmaking {
    return new GameLiftResponsesStartMatchmaking(this, this.__resources, input);
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

  public stopGameSessionPlacement(input: shapes.GameLiftStopGameSessionPlacementInput): GameLiftResponsesStopGameSessionPlacement {
    return new GameLiftResponsesStopGameSessionPlacement(this, this.__resources, input);
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

  public suspendGameServerGroup(input: shapes.GameLiftSuspendGameServerGroupInput): GameLiftResponsesSuspendGameServerGroup {
    return new GameLiftResponsesSuspendGameServerGroup(this, this.__resources, input);
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

  public updateAlias(input: shapes.GameLiftUpdateAliasInput): GameLiftResponsesUpdateAlias {
    return new GameLiftResponsesUpdateAlias(this, this.__resources, input);
  }

  public updateBuild(input: shapes.GameLiftUpdateBuildInput): GameLiftResponsesUpdateBuild {
    return new GameLiftResponsesUpdateBuild(this, this.__resources, input);
  }

  public updateFleetAttributes(input: shapes.GameLiftUpdateFleetAttributesInput): GameLiftResponsesUpdateFleetAttributes {
    return new GameLiftResponsesUpdateFleetAttributes(this, this.__resources, input);
  }

  public updateFleetCapacity(input: shapes.GameLiftUpdateFleetCapacityInput): GameLiftResponsesUpdateFleetCapacity {
    return new GameLiftResponsesUpdateFleetCapacity(this, this.__resources, input);
  }

  public updateFleetPortSettings(input: shapes.GameLiftUpdateFleetPortSettingsInput): GameLiftResponsesUpdateFleetPortSettings {
    return new GameLiftResponsesUpdateFleetPortSettings(this, this.__resources, input);
  }

  public updateGameServer(input: shapes.GameLiftUpdateGameServerInput): GameLiftResponsesUpdateGameServer {
    return new GameLiftResponsesUpdateGameServer(this, this.__resources, input);
  }

  public updateGameServerGroup(input: shapes.GameLiftUpdateGameServerGroupInput): GameLiftResponsesUpdateGameServerGroup {
    return new GameLiftResponsesUpdateGameServerGroup(this, this.__resources, input);
  }

  public updateGameSession(input: shapes.GameLiftUpdateGameSessionInput): GameLiftResponsesUpdateGameSession {
    return new GameLiftResponsesUpdateGameSession(this, this.__resources, input);
  }

  public updateGameSessionQueue(input: shapes.GameLiftUpdateGameSessionQueueInput): GameLiftResponsesUpdateGameSessionQueue {
    return new GameLiftResponsesUpdateGameSessionQueue(this, this.__resources, input);
  }

  public updateMatchmakingConfiguration(input: shapes.GameLiftUpdateMatchmakingConfigurationInput): GameLiftResponsesUpdateMatchmakingConfiguration {
    return new GameLiftResponsesUpdateMatchmakingConfiguration(this, this.__resources, input);
  }

  public updateRuntimeConfiguration(input: shapes.GameLiftUpdateRuntimeConfigurationInput): GameLiftResponsesUpdateRuntimeConfiguration {
    return new GameLiftResponsesUpdateRuntimeConfiguration(this, this.__resources, input);
  }

  public updateScript(input: shapes.GameLiftUpdateScriptInput): GameLiftResponsesUpdateScript {
    return new GameLiftResponsesUpdateScript(this, this.__resources, input);
  }

  public validateMatchmakingRuleSet(input: shapes.GameLiftValidateMatchmakingRuleSetInput): GameLiftResponsesValidateMatchmakingRuleSet {
    return new GameLiftResponsesValidateMatchmakingRuleSet(this, this.__resources, input);
  }

}

export class GameLiftResponsesClaimGameServer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftClaimGameServerInput) {
  }

  public get gameServer(): GameLiftResponsesClaimGameServerGameServer {
    return new GameLiftResponsesClaimGameServerGameServer(this.__scope, this.__resources, this.__input);
  }

}

export class GameLiftResponsesClaimGameServerGameServer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftClaimGameServerInput) {
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
          GameServerGroupName: this.__input.gameServerGroupName,
          GameServerId: this.__input.gameServerId,
          GameServerData: this.__input.gameServerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ClaimGameServer.GameServer.GameServerGroupName', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          GameServerId: this.__input.gameServerId,
          GameServerData: this.__input.gameServerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ClaimGameServer.GameServer.GameServerGroupArn', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          GameServerId: this.__input.gameServerId,
          GameServerData: this.__input.gameServerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ClaimGameServer.GameServer.GameServerId', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          GameServerId: this.__input.gameServerId,
          GameServerData: this.__input.gameServerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ClaimGameServer.GameServer.InstanceId', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          GameServerId: this.__input.gameServerId,
          GameServerData: this.__input.gameServerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ClaimGameServer.GameServer.ConnectionInfo', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          GameServerId: this.__input.gameServerId,
          GameServerData: this.__input.gameServerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ClaimGameServer.GameServer.GameServerData', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          GameServerId: this.__input.gameServerId,
          GameServerData: this.__input.gameServerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ClaimGameServer.GameServer.ClaimStatus', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          GameServerId: this.__input.gameServerId,
          GameServerData: this.__input.gameServerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ClaimGameServer.GameServer.UtilizationStatus', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          GameServerId: this.__input.gameServerId,
          GameServerData: this.__input.gameServerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ClaimGameServer.GameServer.RegistrationTime', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          GameServerId: this.__input.gameServerId,
          GameServerData: this.__input.gameServerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ClaimGameServer.GameServer.LastClaimTime', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          GameServerId: this.__input.gameServerId,
          GameServerData: this.__input.gameServerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ClaimGameServer.GameServer.LastHealthCheckTime', props);
    return resource.getResponseField('GameServer.LastHealthCheckTime') as unknown as string;
  }

}

export class GameLiftResponsesCreateAlias {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftCreateAliasInput) {
  }

  public get alias(): GameLiftResponsesCreateAliasAlias {
    return new GameLiftResponsesCreateAliasAlias(this.__scope, this.__resources, this.__input);
  }

}

export class GameLiftResponsesCreateAliasAlias {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftCreateAliasInput) {
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
          Name: this.__input.name,
          Description: this.__input.description,
          RoutingStrategy: {
            Type: this.__input.routingStrategy.type,
            FleetId: this.__input.routingStrategy.fleetId,
            Message: this.__input.routingStrategy.message,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAlias.Alias.AliasId', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          RoutingStrategy: {
            Type: this.__input.routingStrategy.type,
            FleetId: this.__input.routingStrategy.fleetId,
            Message: this.__input.routingStrategy.message,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAlias.Alias.Name', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          RoutingStrategy: {
            Type: this.__input.routingStrategy.type,
            FleetId: this.__input.routingStrategy.fleetId,
            Message: this.__input.routingStrategy.message,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAlias.Alias.AliasArn', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          RoutingStrategy: {
            Type: this.__input.routingStrategy.type,
            FleetId: this.__input.routingStrategy.fleetId,
            Message: this.__input.routingStrategy.message,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAlias.Alias.Description', props);
    return resource.getResponseField('Alias.Description') as unknown as string;
  }

  public get routingStrategy(): GameLiftResponsesCreateAliasAliasRoutingStrategy {
    return new GameLiftResponsesCreateAliasAliasRoutingStrategy(this.__scope, this.__resources, this.__input);
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
          Name: this.__input.name,
          Description: this.__input.description,
          RoutingStrategy: {
            Type: this.__input.routingStrategy.type,
            FleetId: this.__input.routingStrategy.fleetId,
            Message: this.__input.routingStrategy.message,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAlias.Alias.CreationTime', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          RoutingStrategy: {
            Type: this.__input.routingStrategy.type,
            FleetId: this.__input.routingStrategy.fleetId,
            Message: this.__input.routingStrategy.message,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAlias.Alias.LastUpdatedTime', props);
    return resource.getResponseField('Alias.LastUpdatedTime') as unknown as string;
  }

}

export class GameLiftResponsesCreateAliasAliasRoutingStrategy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftCreateAliasInput) {
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
          Name: this.__input.name,
          Description: this.__input.description,
          RoutingStrategy: {
            Type: this.__input.routingStrategy.type,
            FleetId: this.__input.routingStrategy.fleetId,
            Message: this.__input.routingStrategy.message,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAlias.Alias.RoutingStrategy.Type', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          RoutingStrategy: {
            Type: this.__input.routingStrategy.type,
            FleetId: this.__input.routingStrategy.fleetId,
            Message: this.__input.routingStrategy.message,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAlias.Alias.RoutingStrategy.FleetId', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          RoutingStrategy: {
            Type: this.__input.routingStrategy.type,
            FleetId: this.__input.routingStrategy.fleetId,
            Message: this.__input.routingStrategy.message,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAlias.Alias.RoutingStrategy.Message', props);
    return resource.getResponseField('Alias.RoutingStrategy.Message') as unknown as string;
  }

}

export class GameLiftResponsesCreateBuild {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftCreateBuildInput) {
  }

  public get build(): GameLiftResponsesCreateBuildBuild {
    return new GameLiftResponsesCreateBuildBuild(this.__scope, this.__resources, this.__input);
  }

  public get uploadCredentials(): GameLiftResponsesCreateBuildUploadCredentials {
    return new GameLiftResponsesCreateBuildUploadCredentials(this.__scope, this.__resources, this.__input);
  }

  public get storageLocation(): GameLiftResponsesCreateBuildStorageLocation {
    return new GameLiftResponsesCreateBuildStorageLocation(this.__scope, this.__resources, this.__input);
  }

}

export class GameLiftResponsesCreateBuildBuild {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftCreateBuildInput) {
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
          Name: this.__input.name,
          Version: this.__input.version,
          StorageLocation: {
            Bucket: this.__input.storageLocation?.bucket,
            Key: this.__input.storageLocation?.key,
            RoleArn: this.__input.storageLocation?.roleArn,
            ObjectVersion: this.__input.storageLocation?.objectVersion,
          },
          OperatingSystem: this.__input.operatingSystem,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBuild.Build.BuildId', props);
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
          Name: this.__input.name,
          Version: this.__input.version,
          StorageLocation: {
            Bucket: this.__input.storageLocation?.bucket,
            Key: this.__input.storageLocation?.key,
            RoleArn: this.__input.storageLocation?.roleArn,
            ObjectVersion: this.__input.storageLocation?.objectVersion,
          },
          OperatingSystem: this.__input.operatingSystem,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBuild.Build.BuildArn', props);
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
          Name: this.__input.name,
          Version: this.__input.version,
          StorageLocation: {
            Bucket: this.__input.storageLocation?.bucket,
            Key: this.__input.storageLocation?.key,
            RoleArn: this.__input.storageLocation?.roleArn,
            ObjectVersion: this.__input.storageLocation?.objectVersion,
          },
          OperatingSystem: this.__input.operatingSystem,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBuild.Build.Name', props);
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
          Name: this.__input.name,
          Version: this.__input.version,
          StorageLocation: {
            Bucket: this.__input.storageLocation?.bucket,
            Key: this.__input.storageLocation?.key,
            RoleArn: this.__input.storageLocation?.roleArn,
            ObjectVersion: this.__input.storageLocation?.objectVersion,
          },
          OperatingSystem: this.__input.operatingSystem,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBuild.Build.Version', props);
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
          Name: this.__input.name,
          Version: this.__input.version,
          StorageLocation: {
            Bucket: this.__input.storageLocation?.bucket,
            Key: this.__input.storageLocation?.key,
            RoleArn: this.__input.storageLocation?.roleArn,
            ObjectVersion: this.__input.storageLocation?.objectVersion,
          },
          OperatingSystem: this.__input.operatingSystem,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBuild.Build.Status', props);
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
          Name: this.__input.name,
          Version: this.__input.version,
          StorageLocation: {
            Bucket: this.__input.storageLocation?.bucket,
            Key: this.__input.storageLocation?.key,
            RoleArn: this.__input.storageLocation?.roleArn,
            ObjectVersion: this.__input.storageLocation?.objectVersion,
          },
          OperatingSystem: this.__input.operatingSystem,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBuild.Build.SizeOnDisk', props);
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
          Name: this.__input.name,
          Version: this.__input.version,
          StorageLocation: {
            Bucket: this.__input.storageLocation?.bucket,
            Key: this.__input.storageLocation?.key,
            RoleArn: this.__input.storageLocation?.roleArn,
            ObjectVersion: this.__input.storageLocation?.objectVersion,
          },
          OperatingSystem: this.__input.operatingSystem,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBuild.Build.OperatingSystem', props);
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
          Name: this.__input.name,
          Version: this.__input.version,
          StorageLocation: {
            Bucket: this.__input.storageLocation?.bucket,
            Key: this.__input.storageLocation?.key,
            RoleArn: this.__input.storageLocation?.roleArn,
            ObjectVersion: this.__input.storageLocation?.objectVersion,
          },
          OperatingSystem: this.__input.operatingSystem,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBuild.Build.CreationTime', props);
    return resource.getResponseField('Build.CreationTime') as unknown as string;
  }

}

export class GameLiftResponsesCreateBuildUploadCredentials {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftCreateBuildInput) {
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
          Name: this.__input.name,
          Version: this.__input.version,
          StorageLocation: {
            Bucket: this.__input.storageLocation?.bucket,
            Key: this.__input.storageLocation?.key,
            RoleArn: this.__input.storageLocation?.roleArn,
            ObjectVersion: this.__input.storageLocation?.objectVersion,
          },
          OperatingSystem: this.__input.operatingSystem,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBuild.UploadCredentials.AccessKeyId', props);
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
          Name: this.__input.name,
          Version: this.__input.version,
          StorageLocation: {
            Bucket: this.__input.storageLocation?.bucket,
            Key: this.__input.storageLocation?.key,
            RoleArn: this.__input.storageLocation?.roleArn,
            ObjectVersion: this.__input.storageLocation?.objectVersion,
          },
          OperatingSystem: this.__input.operatingSystem,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBuild.UploadCredentials.SecretAccessKey', props);
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
          Name: this.__input.name,
          Version: this.__input.version,
          StorageLocation: {
            Bucket: this.__input.storageLocation?.bucket,
            Key: this.__input.storageLocation?.key,
            RoleArn: this.__input.storageLocation?.roleArn,
            ObjectVersion: this.__input.storageLocation?.objectVersion,
          },
          OperatingSystem: this.__input.operatingSystem,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBuild.UploadCredentials.SessionToken', props);
    return resource.getResponseField('UploadCredentials.SessionToken') as unknown as string;
  }

}

export class GameLiftResponsesCreateBuildStorageLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftCreateBuildInput) {
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
          Name: this.__input.name,
          Version: this.__input.version,
          StorageLocation: {
            Bucket: this.__input.storageLocation?.bucket,
            Key: this.__input.storageLocation?.key,
            RoleArn: this.__input.storageLocation?.roleArn,
            ObjectVersion: this.__input.storageLocation?.objectVersion,
          },
          OperatingSystem: this.__input.operatingSystem,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBuild.StorageLocation.Bucket', props);
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
          Name: this.__input.name,
          Version: this.__input.version,
          StorageLocation: {
            Bucket: this.__input.storageLocation?.bucket,
            Key: this.__input.storageLocation?.key,
            RoleArn: this.__input.storageLocation?.roleArn,
            ObjectVersion: this.__input.storageLocation?.objectVersion,
          },
          OperatingSystem: this.__input.operatingSystem,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBuild.StorageLocation.Key', props);
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
          Name: this.__input.name,
          Version: this.__input.version,
          StorageLocation: {
            Bucket: this.__input.storageLocation?.bucket,
            Key: this.__input.storageLocation?.key,
            RoleArn: this.__input.storageLocation?.roleArn,
            ObjectVersion: this.__input.storageLocation?.objectVersion,
          },
          OperatingSystem: this.__input.operatingSystem,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBuild.StorageLocation.RoleArn', props);
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
          Name: this.__input.name,
          Version: this.__input.version,
          StorageLocation: {
            Bucket: this.__input.storageLocation?.bucket,
            Key: this.__input.storageLocation?.key,
            RoleArn: this.__input.storageLocation?.roleArn,
            ObjectVersion: this.__input.storageLocation?.objectVersion,
          },
          OperatingSystem: this.__input.operatingSystem,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBuild.StorageLocation.ObjectVersion', props);
    return resource.getResponseField('StorageLocation.ObjectVersion') as unknown as string;
  }

}

export class GameLiftResponsesCreateFleet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftCreateFleetInput) {
  }

  public get fleetAttributes(): GameLiftResponsesCreateFleetFleetAttributes {
    return new GameLiftResponsesCreateFleetFleetAttributes(this.__scope, this.__resources, this.__input);
  }

}

export class GameLiftResponsesCreateFleetFleetAttributes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftCreateFleetInput) {
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
          Name: this.__input.name,
          Description: this.__input.description,
          BuildId: this.__input.buildId,
          ScriptId: this.__input.scriptId,
          ServerLaunchPath: this.__input.serverLaunchPath,
          ServerLaunchParameters: this.__input.serverLaunchParameters,
          LogPaths: this.__input.logPaths,
          EC2InstanceType: this.__input.ec2InstanceType,
          EC2InboundPermissions: this.__input.ec2InboundPermissions,
          NewGameSessionProtectionPolicy: this.__input.newGameSessionProtectionPolicy,
          RuntimeConfiguration: {
            ServerProcesses: this.__input.runtimeConfiguration?.serverProcesses,
            MaxConcurrentGameSessionActivations: this.__input.runtimeConfiguration?.maxConcurrentGameSessionActivations,
            GameSessionActivationTimeoutSeconds: this.__input.runtimeConfiguration?.gameSessionActivationTimeoutSeconds,
          },
          ResourceCreationLimitPolicy: {
            NewGameSessionsPerCreator: this.__input.resourceCreationLimitPolicy?.newGameSessionsPerCreator,
            PolicyPeriodInMinutes: this.__input.resourceCreationLimitPolicy?.policyPeriodInMinutes,
          },
          MetricGroups: this.__input.metricGroups,
          PeerVpcAwsAccountId: this.__input.peerVpcAwsAccountId,
          PeerVpcId: this.__input.peerVpcId,
          FleetType: this.__input.fleetType,
          InstanceRoleArn: this.__input.instanceRoleArn,
          CertificateConfiguration: {
            CertificateType: this.__input.certificateConfiguration?.certificateType,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFleet.FleetAttributes.FleetId', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          BuildId: this.__input.buildId,
          ScriptId: this.__input.scriptId,
          ServerLaunchPath: this.__input.serverLaunchPath,
          ServerLaunchParameters: this.__input.serverLaunchParameters,
          LogPaths: this.__input.logPaths,
          EC2InstanceType: this.__input.ec2InstanceType,
          EC2InboundPermissions: this.__input.ec2InboundPermissions,
          NewGameSessionProtectionPolicy: this.__input.newGameSessionProtectionPolicy,
          RuntimeConfiguration: {
            ServerProcesses: this.__input.runtimeConfiguration?.serverProcesses,
            MaxConcurrentGameSessionActivations: this.__input.runtimeConfiguration?.maxConcurrentGameSessionActivations,
            GameSessionActivationTimeoutSeconds: this.__input.runtimeConfiguration?.gameSessionActivationTimeoutSeconds,
          },
          ResourceCreationLimitPolicy: {
            NewGameSessionsPerCreator: this.__input.resourceCreationLimitPolicy?.newGameSessionsPerCreator,
            PolicyPeriodInMinutes: this.__input.resourceCreationLimitPolicy?.policyPeriodInMinutes,
          },
          MetricGroups: this.__input.metricGroups,
          PeerVpcAwsAccountId: this.__input.peerVpcAwsAccountId,
          PeerVpcId: this.__input.peerVpcId,
          FleetType: this.__input.fleetType,
          InstanceRoleArn: this.__input.instanceRoleArn,
          CertificateConfiguration: {
            CertificateType: this.__input.certificateConfiguration?.certificateType,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFleet.FleetAttributes.FleetArn', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          BuildId: this.__input.buildId,
          ScriptId: this.__input.scriptId,
          ServerLaunchPath: this.__input.serverLaunchPath,
          ServerLaunchParameters: this.__input.serverLaunchParameters,
          LogPaths: this.__input.logPaths,
          EC2InstanceType: this.__input.ec2InstanceType,
          EC2InboundPermissions: this.__input.ec2InboundPermissions,
          NewGameSessionProtectionPolicy: this.__input.newGameSessionProtectionPolicy,
          RuntimeConfiguration: {
            ServerProcesses: this.__input.runtimeConfiguration?.serverProcesses,
            MaxConcurrentGameSessionActivations: this.__input.runtimeConfiguration?.maxConcurrentGameSessionActivations,
            GameSessionActivationTimeoutSeconds: this.__input.runtimeConfiguration?.gameSessionActivationTimeoutSeconds,
          },
          ResourceCreationLimitPolicy: {
            NewGameSessionsPerCreator: this.__input.resourceCreationLimitPolicy?.newGameSessionsPerCreator,
            PolicyPeriodInMinutes: this.__input.resourceCreationLimitPolicy?.policyPeriodInMinutes,
          },
          MetricGroups: this.__input.metricGroups,
          PeerVpcAwsAccountId: this.__input.peerVpcAwsAccountId,
          PeerVpcId: this.__input.peerVpcId,
          FleetType: this.__input.fleetType,
          InstanceRoleArn: this.__input.instanceRoleArn,
          CertificateConfiguration: {
            CertificateType: this.__input.certificateConfiguration?.certificateType,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFleet.FleetAttributes.FleetType', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          BuildId: this.__input.buildId,
          ScriptId: this.__input.scriptId,
          ServerLaunchPath: this.__input.serverLaunchPath,
          ServerLaunchParameters: this.__input.serverLaunchParameters,
          LogPaths: this.__input.logPaths,
          EC2InstanceType: this.__input.ec2InstanceType,
          EC2InboundPermissions: this.__input.ec2InboundPermissions,
          NewGameSessionProtectionPolicy: this.__input.newGameSessionProtectionPolicy,
          RuntimeConfiguration: {
            ServerProcesses: this.__input.runtimeConfiguration?.serverProcesses,
            MaxConcurrentGameSessionActivations: this.__input.runtimeConfiguration?.maxConcurrentGameSessionActivations,
            GameSessionActivationTimeoutSeconds: this.__input.runtimeConfiguration?.gameSessionActivationTimeoutSeconds,
          },
          ResourceCreationLimitPolicy: {
            NewGameSessionsPerCreator: this.__input.resourceCreationLimitPolicy?.newGameSessionsPerCreator,
            PolicyPeriodInMinutes: this.__input.resourceCreationLimitPolicy?.policyPeriodInMinutes,
          },
          MetricGroups: this.__input.metricGroups,
          PeerVpcAwsAccountId: this.__input.peerVpcAwsAccountId,
          PeerVpcId: this.__input.peerVpcId,
          FleetType: this.__input.fleetType,
          InstanceRoleArn: this.__input.instanceRoleArn,
          CertificateConfiguration: {
            CertificateType: this.__input.certificateConfiguration?.certificateType,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFleet.FleetAttributes.InstanceType', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          BuildId: this.__input.buildId,
          ScriptId: this.__input.scriptId,
          ServerLaunchPath: this.__input.serverLaunchPath,
          ServerLaunchParameters: this.__input.serverLaunchParameters,
          LogPaths: this.__input.logPaths,
          EC2InstanceType: this.__input.ec2InstanceType,
          EC2InboundPermissions: this.__input.ec2InboundPermissions,
          NewGameSessionProtectionPolicy: this.__input.newGameSessionProtectionPolicy,
          RuntimeConfiguration: {
            ServerProcesses: this.__input.runtimeConfiguration?.serverProcesses,
            MaxConcurrentGameSessionActivations: this.__input.runtimeConfiguration?.maxConcurrentGameSessionActivations,
            GameSessionActivationTimeoutSeconds: this.__input.runtimeConfiguration?.gameSessionActivationTimeoutSeconds,
          },
          ResourceCreationLimitPolicy: {
            NewGameSessionsPerCreator: this.__input.resourceCreationLimitPolicy?.newGameSessionsPerCreator,
            PolicyPeriodInMinutes: this.__input.resourceCreationLimitPolicy?.policyPeriodInMinutes,
          },
          MetricGroups: this.__input.metricGroups,
          PeerVpcAwsAccountId: this.__input.peerVpcAwsAccountId,
          PeerVpcId: this.__input.peerVpcId,
          FleetType: this.__input.fleetType,
          InstanceRoleArn: this.__input.instanceRoleArn,
          CertificateConfiguration: {
            CertificateType: this.__input.certificateConfiguration?.certificateType,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFleet.FleetAttributes.Description', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          BuildId: this.__input.buildId,
          ScriptId: this.__input.scriptId,
          ServerLaunchPath: this.__input.serverLaunchPath,
          ServerLaunchParameters: this.__input.serverLaunchParameters,
          LogPaths: this.__input.logPaths,
          EC2InstanceType: this.__input.ec2InstanceType,
          EC2InboundPermissions: this.__input.ec2InboundPermissions,
          NewGameSessionProtectionPolicy: this.__input.newGameSessionProtectionPolicy,
          RuntimeConfiguration: {
            ServerProcesses: this.__input.runtimeConfiguration?.serverProcesses,
            MaxConcurrentGameSessionActivations: this.__input.runtimeConfiguration?.maxConcurrentGameSessionActivations,
            GameSessionActivationTimeoutSeconds: this.__input.runtimeConfiguration?.gameSessionActivationTimeoutSeconds,
          },
          ResourceCreationLimitPolicy: {
            NewGameSessionsPerCreator: this.__input.resourceCreationLimitPolicy?.newGameSessionsPerCreator,
            PolicyPeriodInMinutes: this.__input.resourceCreationLimitPolicy?.policyPeriodInMinutes,
          },
          MetricGroups: this.__input.metricGroups,
          PeerVpcAwsAccountId: this.__input.peerVpcAwsAccountId,
          PeerVpcId: this.__input.peerVpcId,
          FleetType: this.__input.fleetType,
          InstanceRoleArn: this.__input.instanceRoleArn,
          CertificateConfiguration: {
            CertificateType: this.__input.certificateConfiguration?.certificateType,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFleet.FleetAttributes.Name', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          BuildId: this.__input.buildId,
          ScriptId: this.__input.scriptId,
          ServerLaunchPath: this.__input.serverLaunchPath,
          ServerLaunchParameters: this.__input.serverLaunchParameters,
          LogPaths: this.__input.logPaths,
          EC2InstanceType: this.__input.ec2InstanceType,
          EC2InboundPermissions: this.__input.ec2InboundPermissions,
          NewGameSessionProtectionPolicy: this.__input.newGameSessionProtectionPolicy,
          RuntimeConfiguration: {
            ServerProcesses: this.__input.runtimeConfiguration?.serverProcesses,
            MaxConcurrentGameSessionActivations: this.__input.runtimeConfiguration?.maxConcurrentGameSessionActivations,
            GameSessionActivationTimeoutSeconds: this.__input.runtimeConfiguration?.gameSessionActivationTimeoutSeconds,
          },
          ResourceCreationLimitPolicy: {
            NewGameSessionsPerCreator: this.__input.resourceCreationLimitPolicy?.newGameSessionsPerCreator,
            PolicyPeriodInMinutes: this.__input.resourceCreationLimitPolicy?.policyPeriodInMinutes,
          },
          MetricGroups: this.__input.metricGroups,
          PeerVpcAwsAccountId: this.__input.peerVpcAwsAccountId,
          PeerVpcId: this.__input.peerVpcId,
          FleetType: this.__input.fleetType,
          InstanceRoleArn: this.__input.instanceRoleArn,
          CertificateConfiguration: {
            CertificateType: this.__input.certificateConfiguration?.certificateType,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFleet.FleetAttributes.CreationTime', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          BuildId: this.__input.buildId,
          ScriptId: this.__input.scriptId,
          ServerLaunchPath: this.__input.serverLaunchPath,
          ServerLaunchParameters: this.__input.serverLaunchParameters,
          LogPaths: this.__input.logPaths,
          EC2InstanceType: this.__input.ec2InstanceType,
          EC2InboundPermissions: this.__input.ec2InboundPermissions,
          NewGameSessionProtectionPolicy: this.__input.newGameSessionProtectionPolicy,
          RuntimeConfiguration: {
            ServerProcesses: this.__input.runtimeConfiguration?.serverProcesses,
            MaxConcurrentGameSessionActivations: this.__input.runtimeConfiguration?.maxConcurrentGameSessionActivations,
            GameSessionActivationTimeoutSeconds: this.__input.runtimeConfiguration?.gameSessionActivationTimeoutSeconds,
          },
          ResourceCreationLimitPolicy: {
            NewGameSessionsPerCreator: this.__input.resourceCreationLimitPolicy?.newGameSessionsPerCreator,
            PolicyPeriodInMinutes: this.__input.resourceCreationLimitPolicy?.policyPeriodInMinutes,
          },
          MetricGroups: this.__input.metricGroups,
          PeerVpcAwsAccountId: this.__input.peerVpcAwsAccountId,
          PeerVpcId: this.__input.peerVpcId,
          FleetType: this.__input.fleetType,
          InstanceRoleArn: this.__input.instanceRoleArn,
          CertificateConfiguration: {
            CertificateType: this.__input.certificateConfiguration?.certificateType,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFleet.FleetAttributes.TerminationTime', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          BuildId: this.__input.buildId,
          ScriptId: this.__input.scriptId,
          ServerLaunchPath: this.__input.serverLaunchPath,
          ServerLaunchParameters: this.__input.serverLaunchParameters,
          LogPaths: this.__input.logPaths,
          EC2InstanceType: this.__input.ec2InstanceType,
          EC2InboundPermissions: this.__input.ec2InboundPermissions,
          NewGameSessionProtectionPolicy: this.__input.newGameSessionProtectionPolicy,
          RuntimeConfiguration: {
            ServerProcesses: this.__input.runtimeConfiguration?.serverProcesses,
            MaxConcurrentGameSessionActivations: this.__input.runtimeConfiguration?.maxConcurrentGameSessionActivations,
            GameSessionActivationTimeoutSeconds: this.__input.runtimeConfiguration?.gameSessionActivationTimeoutSeconds,
          },
          ResourceCreationLimitPolicy: {
            NewGameSessionsPerCreator: this.__input.resourceCreationLimitPolicy?.newGameSessionsPerCreator,
            PolicyPeriodInMinutes: this.__input.resourceCreationLimitPolicy?.policyPeriodInMinutes,
          },
          MetricGroups: this.__input.metricGroups,
          PeerVpcAwsAccountId: this.__input.peerVpcAwsAccountId,
          PeerVpcId: this.__input.peerVpcId,
          FleetType: this.__input.fleetType,
          InstanceRoleArn: this.__input.instanceRoleArn,
          CertificateConfiguration: {
            CertificateType: this.__input.certificateConfiguration?.certificateType,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFleet.FleetAttributes.Status', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          BuildId: this.__input.buildId,
          ScriptId: this.__input.scriptId,
          ServerLaunchPath: this.__input.serverLaunchPath,
          ServerLaunchParameters: this.__input.serverLaunchParameters,
          LogPaths: this.__input.logPaths,
          EC2InstanceType: this.__input.ec2InstanceType,
          EC2InboundPermissions: this.__input.ec2InboundPermissions,
          NewGameSessionProtectionPolicy: this.__input.newGameSessionProtectionPolicy,
          RuntimeConfiguration: {
            ServerProcesses: this.__input.runtimeConfiguration?.serverProcesses,
            MaxConcurrentGameSessionActivations: this.__input.runtimeConfiguration?.maxConcurrentGameSessionActivations,
            GameSessionActivationTimeoutSeconds: this.__input.runtimeConfiguration?.gameSessionActivationTimeoutSeconds,
          },
          ResourceCreationLimitPolicy: {
            NewGameSessionsPerCreator: this.__input.resourceCreationLimitPolicy?.newGameSessionsPerCreator,
            PolicyPeriodInMinutes: this.__input.resourceCreationLimitPolicy?.policyPeriodInMinutes,
          },
          MetricGroups: this.__input.metricGroups,
          PeerVpcAwsAccountId: this.__input.peerVpcAwsAccountId,
          PeerVpcId: this.__input.peerVpcId,
          FleetType: this.__input.fleetType,
          InstanceRoleArn: this.__input.instanceRoleArn,
          CertificateConfiguration: {
            CertificateType: this.__input.certificateConfiguration?.certificateType,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFleet.FleetAttributes.BuildId', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          BuildId: this.__input.buildId,
          ScriptId: this.__input.scriptId,
          ServerLaunchPath: this.__input.serverLaunchPath,
          ServerLaunchParameters: this.__input.serverLaunchParameters,
          LogPaths: this.__input.logPaths,
          EC2InstanceType: this.__input.ec2InstanceType,
          EC2InboundPermissions: this.__input.ec2InboundPermissions,
          NewGameSessionProtectionPolicy: this.__input.newGameSessionProtectionPolicy,
          RuntimeConfiguration: {
            ServerProcesses: this.__input.runtimeConfiguration?.serverProcesses,
            MaxConcurrentGameSessionActivations: this.__input.runtimeConfiguration?.maxConcurrentGameSessionActivations,
            GameSessionActivationTimeoutSeconds: this.__input.runtimeConfiguration?.gameSessionActivationTimeoutSeconds,
          },
          ResourceCreationLimitPolicy: {
            NewGameSessionsPerCreator: this.__input.resourceCreationLimitPolicy?.newGameSessionsPerCreator,
            PolicyPeriodInMinutes: this.__input.resourceCreationLimitPolicy?.policyPeriodInMinutes,
          },
          MetricGroups: this.__input.metricGroups,
          PeerVpcAwsAccountId: this.__input.peerVpcAwsAccountId,
          PeerVpcId: this.__input.peerVpcId,
          FleetType: this.__input.fleetType,
          InstanceRoleArn: this.__input.instanceRoleArn,
          CertificateConfiguration: {
            CertificateType: this.__input.certificateConfiguration?.certificateType,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFleet.FleetAttributes.BuildArn', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          BuildId: this.__input.buildId,
          ScriptId: this.__input.scriptId,
          ServerLaunchPath: this.__input.serverLaunchPath,
          ServerLaunchParameters: this.__input.serverLaunchParameters,
          LogPaths: this.__input.logPaths,
          EC2InstanceType: this.__input.ec2InstanceType,
          EC2InboundPermissions: this.__input.ec2InboundPermissions,
          NewGameSessionProtectionPolicy: this.__input.newGameSessionProtectionPolicy,
          RuntimeConfiguration: {
            ServerProcesses: this.__input.runtimeConfiguration?.serverProcesses,
            MaxConcurrentGameSessionActivations: this.__input.runtimeConfiguration?.maxConcurrentGameSessionActivations,
            GameSessionActivationTimeoutSeconds: this.__input.runtimeConfiguration?.gameSessionActivationTimeoutSeconds,
          },
          ResourceCreationLimitPolicy: {
            NewGameSessionsPerCreator: this.__input.resourceCreationLimitPolicy?.newGameSessionsPerCreator,
            PolicyPeriodInMinutes: this.__input.resourceCreationLimitPolicy?.policyPeriodInMinutes,
          },
          MetricGroups: this.__input.metricGroups,
          PeerVpcAwsAccountId: this.__input.peerVpcAwsAccountId,
          PeerVpcId: this.__input.peerVpcId,
          FleetType: this.__input.fleetType,
          InstanceRoleArn: this.__input.instanceRoleArn,
          CertificateConfiguration: {
            CertificateType: this.__input.certificateConfiguration?.certificateType,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFleet.FleetAttributes.ScriptId', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          BuildId: this.__input.buildId,
          ScriptId: this.__input.scriptId,
          ServerLaunchPath: this.__input.serverLaunchPath,
          ServerLaunchParameters: this.__input.serverLaunchParameters,
          LogPaths: this.__input.logPaths,
          EC2InstanceType: this.__input.ec2InstanceType,
          EC2InboundPermissions: this.__input.ec2InboundPermissions,
          NewGameSessionProtectionPolicy: this.__input.newGameSessionProtectionPolicy,
          RuntimeConfiguration: {
            ServerProcesses: this.__input.runtimeConfiguration?.serverProcesses,
            MaxConcurrentGameSessionActivations: this.__input.runtimeConfiguration?.maxConcurrentGameSessionActivations,
            GameSessionActivationTimeoutSeconds: this.__input.runtimeConfiguration?.gameSessionActivationTimeoutSeconds,
          },
          ResourceCreationLimitPolicy: {
            NewGameSessionsPerCreator: this.__input.resourceCreationLimitPolicy?.newGameSessionsPerCreator,
            PolicyPeriodInMinutes: this.__input.resourceCreationLimitPolicy?.policyPeriodInMinutes,
          },
          MetricGroups: this.__input.metricGroups,
          PeerVpcAwsAccountId: this.__input.peerVpcAwsAccountId,
          PeerVpcId: this.__input.peerVpcId,
          FleetType: this.__input.fleetType,
          InstanceRoleArn: this.__input.instanceRoleArn,
          CertificateConfiguration: {
            CertificateType: this.__input.certificateConfiguration?.certificateType,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFleet.FleetAttributes.ScriptArn', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          BuildId: this.__input.buildId,
          ScriptId: this.__input.scriptId,
          ServerLaunchPath: this.__input.serverLaunchPath,
          ServerLaunchParameters: this.__input.serverLaunchParameters,
          LogPaths: this.__input.logPaths,
          EC2InstanceType: this.__input.ec2InstanceType,
          EC2InboundPermissions: this.__input.ec2InboundPermissions,
          NewGameSessionProtectionPolicy: this.__input.newGameSessionProtectionPolicy,
          RuntimeConfiguration: {
            ServerProcesses: this.__input.runtimeConfiguration?.serverProcesses,
            MaxConcurrentGameSessionActivations: this.__input.runtimeConfiguration?.maxConcurrentGameSessionActivations,
            GameSessionActivationTimeoutSeconds: this.__input.runtimeConfiguration?.gameSessionActivationTimeoutSeconds,
          },
          ResourceCreationLimitPolicy: {
            NewGameSessionsPerCreator: this.__input.resourceCreationLimitPolicy?.newGameSessionsPerCreator,
            PolicyPeriodInMinutes: this.__input.resourceCreationLimitPolicy?.policyPeriodInMinutes,
          },
          MetricGroups: this.__input.metricGroups,
          PeerVpcAwsAccountId: this.__input.peerVpcAwsAccountId,
          PeerVpcId: this.__input.peerVpcId,
          FleetType: this.__input.fleetType,
          InstanceRoleArn: this.__input.instanceRoleArn,
          CertificateConfiguration: {
            CertificateType: this.__input.certificateConfiguration?.certificateType,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFleet.FleetAttributes.ServerLaunchPath', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          BuildId: this.__input.buildId,
          ScriptId: this.__input.scriptId,
          ServerLaunchPath: this.__input.serverLaunchPath,
          ServerLaunchParameters: this.__input.serverLaunchParameters,
          LogPaths: this.__input.logPaths,
          EC2InstanceType: this.__input.ec2InstanceType,
          EC2InboundPermissions: this.__input.ec2InboundPermissions,
          NewGameSessionProtectionPolicy: this.__input.newGameSessionProtectionPolicy,
          RuntimeConfiguration: {
            ServerProcesses: this.__input.runtimeConfiguration?.serverProcesses,
            MaxConcurrentGameSessionActivations: this.__input.runtimeConfiguration?.maxConcurrentGameSessionActivations,
            GameSessionActivationTimeoutSeconds: this.__input.runtimeConfiguration?.gameSessionActivationTimeoutSeconds,
          },
          ResourceCreationLimitPolicy: {
            NewGameSessionsPerCreator: this.__input.resourceCreationLimitPolicy?.newGameSessionsPerCreator,
            PolicyPeriodInMinutes: this.__input.resourceCreationLimitPolicy?.policyPeriodInMinutes,
          },
          MetricGroups: this.__input.metricGroups,
          PeerVpcAwsAccountId: this.__input.peerVpcAwsAccountId,
          PeerVpcId: this.__input.peerVpcId,
          FleetType: this.__input.fleetType,
          InstanceRoleArn: this.__input.instanceRoleArn,
          CertificateConfiguration: {
            CertificateType: this.__input.certificateConfiguration?.certificateType,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFleet.FleetAttributes.ServerLaunchParameters', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          BuildId: this.__input.buildId,
          ScriptId: this.__input.scriptId,
          ServerLaunchPath: this.__input.serverLaunchPath,
          ServerLaunchParameters: this.__input.serverLaunchParameters,
          LogPaths: this.__input.logPaths,
          EC2InstanceType: this.__input.ec2InstanceType,
          EC2InboundPermissions: this.__input.ec2InboundPermissions,
          NewGameSessionProtectionPolicy: this.__input.newGameSessionProtectionPolicy,
          RuntimeConfiguration: {
            ServerProcesses: this.__input.runtimeConfiguration?.serverProcesses,
            MaxConcurrentGameSessionActivations: this.__input.runtimeConfiguration?.maxConcurrentGameSessionActivations,
            GameSessionActivationTimeoutSeconds: this.__input.runtimeConfiguration?.gameSessionActivationTimeoutSeconds,
          },
          ResourceCreationLimitPolicy: {
            NewGameSessionsPerCreator: this.__input.resourceCreationLimitPolicy?.newGameSessionsPerCreator,
            PolicyPeriodInMinutes: this.__input.resourceCreationLimitPolicy?.policyPeriodInMinutes,
          },
          MetricGroups: this.__input.metricGroups,
          PeerVpcAwsAccountId: this.__input.peerVpcAwsAccountId,
          PeerVpcId: this.__input.peerVpcId,
          FleetType: this.__input.fleetType,
          InstanceRoleArn: this.__input.instanceRoleArn,
          CertificateConfiguration: {
            CertificateType: this.__input.certificateConfiguration?.certificateType,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFleet.FleetAttributes.LogPaths', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          BuildId: this.__input.buildId,
          ScriptId: this.__input.scriptId,
          ServerLaunchPath: this.__input.serverLaunchPath,
          ServerLaunchParameters: this.__input.serverLaunchParameters,
          LogPaths: this.__input.logPaths,
          EC2InstanceType: this.__input.ec2InstanceType,
          EC2InboundPermissions: this.__input.ec2InboundPermissions,
          NewGameSessionProtectionPolicy: this.__input.newGameSessionProtectionPolicy,
          RuntimeConfiguration: {
            ServerProcesses: this.__input.runtimeConfiguration?.serverProcesses,
            MaxConcurrentGameSessionActivations: this.__input.runtimeConfiguration?.maxConcurrentGameSessionActivations,
            GameSessionActivationTimeoutSeconds: this.__input.runtimeConfiguration?.gameSessionActivationTimeoutSeconds,
          },
          ResourceCreationLimitPolicy: {
            NewGameSessionsPerCreator: this.__input.resourceCreationLimitPolicy?.newGameSessionsPerCreator,
            PolicyPeriodInMinutes: this.__input.resourceCreationLimitPolicy?.policyPeriodInMinutes,
          },
          MetricGroups: this.__input.metricGroups,
          PeerVpcAwsAccountId: this.__input.peerVpcAwsAccountId,
          PeerVpcId: this.__input.peerVpcId,
          FleetType: this.__input.fleetType,
          InstanceRoleArn: this.__input.instanceRoleArn,
          CertificateConfiguration: {
            CertificateType: this.__input.certificateConfiguration?.certificateType,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFleet.FleetAttributes.NewGameSessionProtectionPolicy', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          BuildId: this.__input.buildId,
          ScriptId: this.__input.scriptId,
          ServerLaunchPath: this.__input.serverLaunchPath,
          ServerLaunchParameters: this.__input.serverLaunchParameters,
          LogPaths: this.__input.logPaths,
          EC2InstanceType: this.__input.ec2InstanceType,
          EC2InboundPermissions: this.__input.ec2InboundPermissions,
          NewGameSessionProtectionPolicy: this.__input.newGameSessionProtectionPolicy,
          RuntimeConfiguration: {
            ServerProcesses: this.__input.runtimeConfiguration?.serverProcesses,
            MaxConcurrentGameSessionActivations: this.__input.runtimeConfiguration?.maxConcurrentGameSessionActivations,
            GameSessionActivationTimeoutSeconds: this.__input.runtimeConfiguration?.gameSessionActivationTimeoutSeconds,
          },
          ResourceCreationLimitPolicy: {
            NewGameSessionsPerCreator: this.__input.resourceCreationLimitPolicy?.newGameSessionsPerCreator,
            PolicyPeriodInMinutes: this.__input.resourceCreationLimitPolicy?.policyPeriodInMinutes,
          },
          MetricGroups: this.__input.metricGroups,
          PeerVpcAwsAccountId: this.__input.peerVpcAwsAccountId,
          PeerVpcId: this.__input.peerVpcId,
          FleetType: this.__input.fleetType,
          InstanceRoleArn: this.__input.instanceRoleArn,
          CertificateConfiguration: {
            CertificateType: this.__input.certificateConfiguration?.certificateType,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFleet.FleetAttributes.OperatingSystem', props);
    return resource.getResponseField('FleetAttributes.OperatingSystem') as unknown as string;
  }

  public get resourceCreationLimitPolicy(): GameLiftResponsesCreateFleetFleetAttributesResourceCreationLimitPolicy {
    return new GameLiftResponsesCreateFleetFleetAttributesResourceCreationLimitPolicy(this.__scope, this.__resources, this.__input);
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
          Name: this.__input.name,
          Description: this.__input.description,
          BuildId: this.__input.buildId,
          ScriptId: this.__input.scriptId,
          ServerLaunchPath: this.__input.serverLaunchPath,
          ServerLaunchParameters: this.__input.serverLaunchParameters,
          LogPaths: this.__input.logPaths,
          EC2InstanceType: this.__input.ec2InstanceType,
          EC2InboundPermissions: this.__input.ec2InboundPermissions,
          NewGameSessionProtectionPolicy: this.__input.newGameSessionProtectionPolicy,
          RuntimeConfiguration: {
            ServerProcesses: this.__input.runtimeConfiguration?.serverProcesses,
            MaxConcurrentGameSessionActivations: this.__input.runtimeConfiguration?.maxConcurrentGameSessionActivations,
            GameSessionActivationTimeoutSeconds: this.__input.runtimeConfiguration?.gameSessionActivationTimeoutSeconds,
          },
          ResourceCreationLimitPolicy: {
            NewGameSessionsPerCreator: this.__input.resourceCreationLimitPolicy?.newGameSessionsPerCreator,
            PolicyPeriodInMinutes: this.__input.resourceCreationLimitPolicy?.policyPeriodInMinutes,
          },
          MetricGroups: this.__input.metricGroups,
          PeerVpcAwsAccountId: this.__input.peerVpcAwsAccountId,
          PeerVpcId: this.__input.peerVpcId,
          FleetType: this.__input.fleetType,
          InstanceRoleArn: this.__input.instanceRoleArn,
          CertificateConfiguration: {
            CertificateType: this.__input.certificateConfiguration?.certificateType,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFleet.FleetAttributes.MetricGroups', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          BuildId: this.__input.buildId,
          ScriptId: this.__input.scriptId,
          ServerLaunchPath: this.__input.serverLaunchPath,
          ServerLaunchParameters: this.__input.serverLaunchParameters,
          LogPaths: this.__input.logPaths,
          EC2InstanceType: this.__input.ec2InstanceType,
          EC2InboundPermissions: this.__input.ec2InboundPermissions,
          NewGameSessionProtectionPolicy: this.__input.newGameSessionProtectionPolicy,
          RuntimeConfiguration: {
            ServerProcesses: this.__input.runtimeConfiguration?.serverProcesses,
            MaxConcurrentGameSessionActivations: this.__input.runtimeConfiguration?.maxConcurrentGameSessionActivations,
            GameSessionActivationTimeoutSeconds: this.__input.runtimeConfiguration?.gameSessionActivationTimeoutSeconds,
          },
          ResourceCreationLimitPolicy: {
            NewGameSessionsPerCreator: this.__input.resourceCreationLimitPolicy?.newGameSessionsPerCreator,
            PolicyPeriodInMinutes: this.__input.resourceCreationLimitPolicy?.policyPeriodInMinutes,
          },
          MetricGroups: this.__input.metricGroups,
          PeerVpcAwsAccountId: this.__input.peerVpcAwsAccountId,
          PeerVpcId: this.__input.peerVpcId,
          FleetType: this.__input.fleetType,
          InstanceRoleArn: this.__input.instanceRoleArn,
          CertificateConfiguration: {
            CertificateType: this.__input.certificateConfiguration?.certificateType,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFleet.FleetAttributes.StoppedActions', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          BuildId: this.__input.buildId,
          ScriptId: this.__input.scriptId,
          ServerLaunchPath: this.__input.serverLaunchPath,
          ServerLaunchParameters: this.__input.serverLaunchParameters,
          LogPaths: this.__input.logPaths,
          EC2InstanceType: this.__input.ec2InstanceType,
          EC2InboundPermissions: this.__input.ec2InboundPermissions,
          NewGameSessionProtectionPolicy: this.__input.newGameSessionProtectionPolicy,
          RuntimeConfiguration: {
            ServerProcesses: this.__input.runtimeConfiguration?.serverProcesses,
            MaxConcurrentGameSessionActivations: this.__input.runtimeConfiguration?.maxConcurrentGameSessionActivations,
            GameSessionActivationTimeoutSeconds: this.__input.runtimeConfiguration?.gameSessionActivationTimeoutSeconds,
          },
          ResourceCreationLimitPolicy: {
            NewGameSessionsPerCreator: this.__input.resourceCreationLimitPolicy?.newGameSessionsPerCreator,
            PolicyPeriodInMinutes: this.__input.resourceCreationLimitPolicy?.policyPeriodInMinutes,
          },
          MetricGroups: this.__input.metricGroups,
          PeerVpcAwsAccountId: this.__input.peerVpcAwsAccountId,
          PeerVpcId: this.__input.peerVpcId,
          FleetType: this.__input.fleetType,
          InstanceRoleArn: this.__input.instanceRoleArn,
          CertificateConfiguration: {
            CertificateType: this.__input.certificateConfiguration?.certificateType,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFleet.FleetAttributes.InstanceRoleArn', props);
    return resource.getResponseField('FleetAttributes.InstanceRoleArn') as unknown as string;
  }

  public get certificateConfiguration(): GameLiftResponsesCreateFleetFleetAttributesCertificateConfiguration {
    return new GameLiftResponsesCreateFleetFleetAttributesCertificateConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class GameLiftResponsesCreateFleetFleetAttributesResourceCreationLimitPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftCreateFleetInput) {
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
          Name: this.__input.name,
          Description: this.__input.description,
          BuildId: this.__input.buildId,
          ScriptId: this.__input.scriptId,
          ServerLaunchPath: this.__input.serverLaunchPath,
          ServerLaunchParameters: this.__input.serverLaunchParameters,
          LogPaths: this.__input.logPaths,
          EC2InstanceType: this.__input.ec2InstanceType,
          EC2InboundPermissions: this.__input.ec2InboundPermissions,
          NewGameSessionProtectionPolicy: this.__input.newGameSessionProtectionPolicy,
          RuntimeConfiguration: {
            ServerProcesses: this.__input.runtimeConfiguration?.serverProcesses,
            MaxConcurrentGameSessionActivations: this.__input.runtimeConfiguration?.maxConcurrentGameSessionActivations,
            GameSessionActivationTimeoutSeconds: this.__input.runtimeConfiguration?.gameSessionActivationTimeoutSeconds,
          },
          ResourceCreationLimitPolicy: {
            NewGameSessionsPerCreator: this.__input.resourceCreationLimitPolicy?.newGameSessionsPerCreator,
            PolicyPeriodInMinutes: this.__input.resourceCreationLimitPolicy?.policyPeriodInMinutes,
          },
          MetricGroups: this.__input.metricGroups,
          PeerVpcAwsAccountId: this.__input.peerVpcAwsAccountId,
          PeerVpcId: this.__input.peerVpcId,
          FleetType: this.__input.fleetType,
          InstanceRoleArn: this.__input.instanceRoleArn,
          CertificateConfiguration: {
            CertificateType: this.__input.certificateConfiguration?.certificateType,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFleet.FleetAttributes.ResourceCreationLimitPolicy.NewGameSessionsPerCreator', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          BuildId: this.__input.buildId,
          ScriptId: this.__input.scriptId,
          ServerLaunchPath: this.__input.serverLaunchPath,
          ServerLaunchParameters: this.__input.serverLaunchParameters,
          LogPaths: this.__input.logPaths,
          EC2InstanceType: this.__input.ec2InstanceType,
          EC2InboundPermissions: this.__input.ec2InboundPermissions,
          NewGameSessionProtectionPolicy: this.__input.newGameSessionProtectionPolicy,
          RuntimeConfiguration: {
            ServerProcesses: this.__input.runtimeConfiguration?.serverProcesses,
            MaxConcurrentGameSessionActivations: this.__input.runtimeConfiguration?.maxConcurrentGameSessionActivations,
            GameSessionActivationTimeoutSeconds: this.__input.runtimeConfiguration?.gameSessionActivationTimeoutSeconds,
          },
          ResourceCreationLimitPolicy: {
            NewGameSessionsPerCreator: this.__input.resourceCreationLimitPolicy?.newGameSessionsPerCreator,
            PolicyPeriodInMinutes: this.__input.resourceCreationLimitPolicy?.policyPeriodInMinutes,
          },
          MetricGroups: this.__input.metricGroups,
          PeerVpcAwsAccountId: this.__input.peerVpcAwsAccountId,
          PeerVpcId: this.__input.peerVpcId,
          FleetType: this.__input.fleetType,
          InstanceRoleArn: this.__input.instanceRoleArn,
          CertificateConfiguration: {
            CertificateType: this.__input.certificateConfiguration?.certificateType,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFleet.FleetAttributes.ResourceCreationLimitPolicy.PolicyPeriodInMinutes', props);
    return resource.getResponseField('FleetAttributes.ResourceCreationLimitPolicy.PolicyPeriodInMinutes') as unknown as number;
  }

}

export class GameLiftResponsesCreateFleetFleetAttributesCertificateConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftCreateFleetInput) {
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
          Name: this.__input.name,
          Description: this.__input.description,
          BuildId: this.__input.buildId,
          ScriptId: this.__input.scriptId,
          ServerLaunchPath: this.__input.serverLaunchPath,
          ServerLaunchParameters: this.__input.serverLaunchParameters,
          LogPaths: this.__input.logPaths,
          EC2InstanceType: this.__input.ec2InstanceType,
          EC2InboundPermissions: this.__input.ec2InboundPermissions,
          NewGameSessionProtectionPolicy: this.__input.newGameSessionProtectionPolicy,
          RuntimeConfiguration: {
            ServerProcesses: this.__input.runtimeConfiguration?.serverProcesses,
            MaxConcurrentGameSessionActivations: this.__input.runtimeConfiguration?.maxConcurrentGameSessionActivations,
            GameSessionActivationTimeoutSeconds: this.__input.runtimeConfiguration?.gameSessionActivationTimeoutSeconds,
          },
          ResourceCreationLimitPolicy: {
            NewGameSessionsPerCreator: this.__input.resourceCreationLimitPolicy?.newGameSessionsPerCreator,
            PolicyPeriodInMinutes: this.__input.resourceCreationLimitPolicy?.policyPeriodInMinutes,
          },
          MetricGroups: this.__input.metricGroups,
          PeerVpcAwsAccountId: this.__input.peerVpcAwsAccountId,
          PeerVpcId: this.__input.peerVpcId,
          FleetType: this.__input.fleetType,
          InstanceRoleArn: this.__input.instanceRoleArn,
          CertificateConfiguration: {
            CertificateType: this.__input.certificateConfiguration?.certificateType,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFleet.FleetAttributes.CertificateConfiguration.CertificateType', props);
    return resource.getResponseField('FleetAttributes.CertificateConfiguration.CertificateType') as unknown as string;
  }

}

export class GameLiftResponsesCreateGameServerGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftCreateGameServerGroupInput) {
  }

  public get gameServerGroup(): GameLiftResponsesCreateGameServerGroupGameServerGroup {
    return new GameLiftResponsesCreateGameServerGroupGameServerGroup(this.__scope, this.__resources, this.__input);
  }

}

export class GameLiftResponsesCreateGameServerGroupGameServerGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftCreateGameServerGroupInput) {
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
          GameServerGroupName: this.__input.gameServerGroupName,
          RoleArn: this.__input.roleArn,
          MinSize: this.__input.minSize,
          MaxSize: this.__input.maxSize,
          LaunchTemplate: {
            LaunchTemplateId: this.__input.launchTemplate.launchTemplateId,
            LaunchTemplateName: this.__input.launchTemplate.launchTemplateName,
            Version: this.__input.launchTemplate.version,
          },
          InstanceDefinitions: this.__input.instanceDefinitions,
          AutoScalingPolicy: {
            EstimatedInstanceWarmup: this.__input.autoScalingPolicy?.estimatedInstanceWarmup,
            TargetTrackingConfiguration: {
              TargetValue: this.__input.autoScalingPolicy?.targetTrackingConfiguration.targetValue,
            },
          },
          BalancingStrategy: this.__input.balancingStrategy,
          GameServerProtectionPolicy: this.__input.gameServerProtectionPolicy,
          VpcSubnets: this.__input.vpcSubnets,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGameServerGroup.GameServerGroup.GameServerGroupName', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          RoleArn: this.__input.roleArn,
          MinSize: this.__input.minSize,
          MaxSize: this.__input.maxSize,
          LaunchTemplate: {
            LaunchTemplateId: this.__input.launchTemplate.launchTemplateId,
            LaunchTemplateName: this.__input.launchTemplate.launchTemplateName,
            Version: this.__input.launchTemplate.version,
          },
          InstanceDefinitions: this.__input.instanceDefinitions,
          AutoScalingPolicy: {
            EstimatedInstanceWarmup: this.__input.autoScalingPolicy?.estimatedInstanceWarmup,
            TargetTrackingConfiguration: {
              TargetValue: this.__input.autoScalingPolicy?.targetTrackingConfiguration.targetValue,
            },
          },
          BalancingStrategy: this.__input.balancingStrategy,
          GameServerProtectionPolicy: this.__input.gameServerProtectionPolicy,
          VpcSubnets: this.__input.vpcSubnets,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGameServerGroup.GameServerGroup.GameServerGroupArn', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          RoleArn: this.__input.roleArn,
          MinSize: this.__input.minSize,
          MaxSize: this.__input.maxSize,
          LaunchTemplate: {
            LaunchTemplateId: this.__input.launchTemplate.launchTemplateId,
            LaunchTemplateName: this.__input.launchTemplate.launchTemplateName,
            Version: this.__input.launchTemplate.version,
          },
          InstanceDefinitions: this.__input.instanceDefinitions,
          AutoScalingPolicy: {
            EstimatedInstanceWarmup: this.__input.autoScalingPolicy?.estimatedInstanceWarmup,
            TargetTrackingConfiguration: {
              TargetValue: this.__input.autoScalingPolicy?.targetTrackingConfiguration.targetValue,
            },
          },
          BalancingStrategy: this.__input.balancingStrategy,
          GameServerProtectionPolicy: this.__input.gameServerProtectionPolicy,
          VpcSubnets: this.__input.vpcSubnets,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGameServerGroup.GameServerGroup.RoleArn', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          RoleArn: this.__input.roleArn,
          MinSize: this.__input.minSize,
          MaxSize: this.__input.maxSize,
          LaunchTemplate: {
            LaunchTemplateId: this.__input.launchTemplate.launchTemplateId,
            LaunchTemplateName: this.__input.launchTemplate.launchTemplateName,
            Version: this.__input.launchTemplate.version,
          },
          InstanceDefinitions: this.__input.instanceDefinitions,
          AutoScalingPolicy: {
            EstimatedInstanceWarmup: this.__input.autoScalingPolicy?.estimatedInstanceWarmup,
            TargetTrackingConfiguration: {
              TargetValue: this.__input.autoScalingPolicy?.targetTrackingConfiguration.targetValue,
            },
          },
          BalancingStrategy: this.__input.balancingStrategy,
          GameServerProtectionPolicy: this.__input.gameServerProtectionPolicy,
          VpcSubnets: this.__input.vpcSubnets,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGameServerGroup.GameServerGroup.InstanceDefinitions', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          RoleArn: this.__input.roleArn,
          MinSize: this.__input.minSize,
          MaxSize: this.__input.maxSize,
          LaunchTemplate: {
            LaunchTemplateId: this.__input.launchTemplate.launchTemplateId,
            LaunchTemplateName: this.__input.launchTemplate.launchTemplateName,
            Version: this.__input.launchTemplate.version,
          },
          InstanceDefinitions: this.__input.instanceDefinitions,
          AutoScalingPolicy: {
            EstimatedInstanceWarmup: this.__input.autoScalingPolicy?.estimatedInstanceWarmup,
            TargetTrackingConfiguration: {
              TargetValue: this.__input.autoScalingPolicy?.targetTrackingConfiguration.targetValue,
            },
          },
          BalancingStrategy: this.__input.balancingStrategy,
          GameServerProtectionPolicy: this.__input.gameServerProtectionPolicy,
          VpcSubnets: this.__input.vpcSubnets,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGameServerGroup.GameServerGroup.BalancingStrategy', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          RoleArn: this.__input.roleArn,
          MinSize: this.__input.minSize,
          MaxSize: this.__input.maxSize,
          LaunchTemplate: {
            LaunchTemplateId: this.__input.launchTemplate.launchTemplateId,
            LaunchTemplateName: this.__input.launchTemplate.launchTemplateName,
            Version: this.__input.launchTemplate.version,
          },
          InstanceDefinitions: this.__input.instanceDefinitions,
          AutoScalingPolicy: {
            EstimatedInstanceWarmup: this.__input.autoScalingPolicy?.estimatedInstanceWarmup,
            TargetTrackingConfiguration: {
              TargetValue: this.__input.autoScalingPolicy?.targetTrackingConfiguration.targetValue,
            },
          },
          BalancingStrategy: this.__input.balancingStrategy,
          GameServerProtectionPolicy: this.__input.gameServerProtectionPolicy,
          VpcSubnets: this.__input.vpcSubnets,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGameServerGroup.GameServerGroup.GameServerProtectionPolicy', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          RoleArn: this.__input.roleArn,
          MinSize: this.__input.minSize,
          MaxSize: this.__input.maxSize,
          LaunchTemplate: {
            LaunchTemplateId: this.__input.launchTemplate.launchTemplateId,
            LaunchTemplateName: this.__input.launchTemplate.launchTemplateName,
            Version: this.__input.launchTemplate.version,
          },
          InstanceDefinitions: this.__input.instanceDefinitions,
          AutoScalingPolicy: {
            EstimatedInstanceWarmup: this.__input.autoScalingPolicy?.estimatedInstanceWarmup,
            TargetTrackingConfiguration: {
              TargetValue: this.__input.autoScalingPolicy?.targetTrackingConfiguration.targetValue,
            },
          },
          BalancingStrategy: this.__input.balancingStrategy,
          GameServerProtectionPolicy: this.__input.gameServerProtectionPolicy,
          VpcSubnets: this.__input.vpcSubnets,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGameServerGroup.GameServerGroup.AutoScalingGroupArn', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          RoleArn: this.__input.roleArn,
          MinSize: this.__input.minSize,
          MaxSize: this.__input.maxSize,
          LaunchTemplate: {
            LaunchTemplateId: this.__input.launchTemplate.launchTemplateId,
            LaunchTemplateName: this.__input.launchTemplate.launchTemplateName,
            Version: this.__input.launchTemplate.version,
          },
          InstanceDefinitions: this.__input.instanceDefinitions,
          AutoScalingPolicy: {
            EstimatedInstanceWarmup: this.__input.autoScalingPolicy?.estimatedInstanceWarmup,
            TargetTrackingConfiguration: {
              TargetValue: this.__input.autoScalingPolicy?.targetTrackingConfiguration.targetValue,
            },
          },
          BalancingStrategy: this.__input.balancingStrategy,
          GameServerProtectionPolicy: this.__input.gameServerProtectionPolicy,
          VpcSubnets: this.__input.vpcSubnets,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGameServerGroup.GameServerGroup.Status', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          RoleArn: this.__input.roleArn,
          MinSize: this.__input.minSize,
          MaxSize: this.__input.maxSize,
          LaunchTemplate: {
            LaunchTemplateId: this.__input.launchTemplate.launchTemplateId,
            LaunchTemplateName: this.__input.launchTemplate.launchTemplateName,
            Version: this.__input.launchTemplate.version,
          },
          InstanceDefinitions: this.__input.instanceDefinitions,
          AutoScalingPolicy: {
            EstimatedInstanceWarmup: this.__input.autoScalingPolicy?.estimatedInstanceWarmup,
            TargetTrackingConfiguration: {
              TargetValue: this.__input.autoScalingPolicy?.targetTrackingConfiguration.targetValue,
            },
          },
          BalancingStrategy: this.__input.balancingStrategy,
          GameServerProtectionPolicy: this.__input.gameServerProtectionPolicy,
          VpcSubnets: this.__input.vpcSubnets,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGameServerGroup.GameServerGroup.StatusReason', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          RoleArn: this.__input.roleArn,
          MinSize: this.__input.minSize,
          MaxSize: this.__input.maxSize,
          LaunchTemplate: {
            LaunchTemplateId: this.__input.launchTemplate.launchTemplateId,
            LaunchTemplateName: this.__input.launchTemplate.launchTemplateName,
            Version: this.__input.launchTemplate.version,
          },
          InstanceDefinitions: this.__input.instanceDefinitions,
          AutoScalingPolicy: {
            EstimatedInstanceWarmup: this.__input.autoScalingPolicy?.estimatedInstanceWarmup,
            TargetTrackingConfiguration: {
              TargetValue: this.__input.autoScalingPolicy?.targetTrackingConfiguration.targetValue,
            },
          },
          BalancingStrategy: this.__input.balancingStrategy,
          GameServerProtectionPolicy: this.__input.gameServerProtectionPolicy,
          VpcSubnets: this.__input.vpcSubnets,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGameServerGroup.GameServerGroup.SuspendedActions', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          RoleArn: this.__input.roleArn,
          MinSize: this.__input.minSize,
          MaxSize: this.__input.maxSize,
          LaunchTemplate: {
            LaunchTemplateId: this.__input.launchTemplate.launchTemplateId,
            LaunchTemplateName: this.__input.launchTemplate.launchTemplateName,
            Version: this.__input.launchTemplate.version,
          },
          InstanceDefinitions: this.__input.instanceDefinitions,
          AutoScalingPolicy: {
            EstimatedInstanceWarmup: this.__input.autoScalingPolicy?.estimatedInstanceWarmup,
            TargetTrackingConfiguration: {
              TargetValue: this.__input.autoScalingPolicy?.targetTrackingConfiguration.targetValue,
            },
          },
          BalancingStrategy: this.__input.balancingStrategy,
          GameServerProtectionPolicy: this.__input.gameServerProtectionPolicy,
          VpcSubnets: this.__input.vpcSubnets,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGameServerGroup.GameServerGroup.CreationTime', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          RoleArn: this.__input.roleArn,
          MinSize: this.__input.minSize,
          MaxSize: this.__input.maxSize,
          LaunchTemplate: {
            LaunchTemplateId: this.__input.launchTemplate.launchTemplateId,
            LaunchTemplateName: this.__input.launchTemplate.launchTemplateName,
            Version: this.__input.launchTemplate.version,
          },
          InstanceDefinitions: this.__input.instanceDefinitions,
          AutoScalingPolicy: {
            EstimatedInstanceWarmup: this.__input.autoScalingPolicy?.estimatedInstanceWarmup,
            TargetTrackingConfiguration: {
              TargetValue: this.__input.autoScalingPolicy?.targetTrackingConfiguration.targetValue,
            },
          },
          BalancingStrategy: this.__input.balancingStrategy,
          GameServerProtectionPolicy: this.__input.gameServerProtectionPolicy,
          VpcSubnets: this.__input.vpcSubnets,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGameServerGroup.GameServerGroup.LastUpdatedTime', props);
    return resource.getResponseField('GameServerGroup.LastUpdatedTime') as unknown as string;
  }

}

export class GameLiftResponsesCreateGameSession {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftCreateGameSessionInput) {
  }

  public get gameSession(): GameLiftResponsesCreateGameSessionGameSession {
    return new GameLiftResponsesCreateGameSessionGameSession(this.__scope, this.__resources, this.__input);
  }

}

export class GameLiftResponsesCreateGameSessionGameSession {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftCreateGameSessionInput) {
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
          FleetId: this.__input.fleetId,
          AliasId: this.__input.aliasId,
          MaximumPlayerSessionCount: this.__input.maximumPlayerSessionCount,
          Name: this.__input.name,
          GameProperties: this.__input.gameProperties,
          CreatorId: this.__input.creatorId,
          GameSessionId: this.__input.gameSessionId,
          IdempotencyToken: this.__input.idempotencyToken,
          GameSessionData: this.__input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGameSession.GameSession.GameSessionId', props);
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
          FleetId: this.__input.fleetId,
          AliasId: this.__input.aliasId,
          MaximumPlayerSessionCount: this.__input.maximumPlayerSessionCount,
          Name: this.__input.name,
          GameProperties: this.__input.gameProperties,
          CreatorId: this.__input.creatorId,
          GameSessionId: this.__input.gameSessionId,
          IdempotencyToken: this.__input.idempotencyToken,
          GameSessionData: this.__input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGameSession.GameSession.Name', props);
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
          FleetId: this.__input.fleetId,
          AliasId: this.__input.aliasId,
          MaximumPlayerSessionCount: this.__input.maximumPlayerSessionCount,
          Name: this.__input.name,
          GameProperties: this.__input.gameProperties,
          CreatorId: this.__input.creatorId,
          GameSessionId: this.__input.gameSessionId,
          IdempotencyToken: this.__input.idempotencyToken,
          GameSessionData: this.__input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGameSession.GameSession.FleetId', props);
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
          FleetId: this.__input.fleetId,
          AliasId: this.__input.aliasId,
          MaximumPlayerSessionCount: this.__input.maximumPlayerSessionCount,
          Name: this.__input.name,
          GameProperties: this.__input.gameProperties,
          CreatorId: this.__input.creatorId,
          GameSessionId: this.__input.gameSessionId,
          IdempotencyToken: this.__input.idempotencyToken,
          GameSessionData: this.__input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGameSession.GameSession.FleetArn', props);
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
          FleetId: this.__input.fleetId,
          AliasId: this.__input.aliasId,
          MaximumPlayerSessionCount: this.__input.maximumPlayerSessionCount,
          Name: this.__input.name,
          GameProperties: this.__input.gameProperties,
          CreatorId: this.__input.creatorId,
          GameSessionId: this.__input.gameSessionId,
          IdempotencyToken: this.__input.idempotencyToken,
          GameSessionData: this.__input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGameSession.GameSession.CreationTime', props);
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
          FleetId: this.__input.fleetId,
          AliasId: this.__input.aliasId,
          MaximumPlayerSessionCount: this.__input.maximumPlayerSessionCount,
          Name: this.__input.name,
          GameProperties: this.__input.gameProperties,
          CreatorId: this.__input.creatorId,
          GameSessionId: this.__input.gameSessionId,
          IdempotencyToken: this.__input.idempotencyToken,
          GameSessionData: this.__input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGameSession.GameSession.TerminationTime', props);
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
          FleetId: this.__input.fleetId,
          AliasId: this.__input.aliasId,
          MaximumPlayerSessionCount: this.__input.maximumPlayerSessionCount,
          Name: this.__input.name,
          GameProperties: this.__input.gameProperties,
          CreatorId: this.__input.creatorId,
          GameSessionId: this.__input.gameSessionId,
          IdempotencyToken: this.__input.idempotencyToken,
          GameSessionData: this.__input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGameSession.GameSession.CurrentPlayerSessionCount', props);
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
          FleetId: this.__input.fleetId,
          AliasId: this.__input.aliasId,
          MaximumPlayerSessionCount: this.__input.maximumPlayerSessionCount,
          Name: this.__input.name,
          GameProperties: this.__input.gameProperties,
          CreatorId: this.__input.creatorId,
          GameSessionId: this.__input.gameSessionId,
          IdempotencyToken: this.__input.idempotencyToken,
          GameSessionData: this.__input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGameSession.GameSession.MaximumPlayerSessionCount', props);
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
          FleetId: this.__input.fleetId,
          AliasId: this.__input.aliasId,
          MaximumPlayerSessionCount: this.__input.maximumPlayerSessionCount,
          Name: this.__input.name,
          GameProperties: this.__input.gameProperties,
          CreatorId: this.__input.creatorId,
          GameSessionId: this.__input.gameSessionId,
          IdempotencyToken: this.__input.idempotencyToken,
          GameSessionData: this.__input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGameSession.GameSession.Status', props);
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
          FleetId: this.__input.fleetId,
          AliasId: this.__input.aliasId,
          MaximumPlayerSessionCount: this.__input.maximumPlayerSessionCount,
          Name: this.__input.name,
          GameProperties: this.__input.gameProperties,
          CreatorId: this.__input.creatorId,
          GameSessionId: this.__input.gameSessionId,
          IdempotencyToken: this.__input.idempotencyToken,
          GameSessionData: this.__input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGameSession.GameSession.StatusReason', props);
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
          FleetId: this.__input.fleetId,
          AliasId: this.__input.aliasId,
          MaximumPlayerSessionCount: this.__input.maximumPlayerSessionCount,
          Name: this.__input.name,
          GameProperties: this.__input.gameProperties,
          CreatorId: this.__input.creatorId,
          GameSessionId: this.__input.gameSessionId,
          IdempotencyToken: this.__input.idempotencyToken,
          GameSessionData: this.__input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGameSession.GameSession.GameProperties', props);
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
          FleetId: this.__input.fleetId,
          AliasId: this.__input.aliasId,
          MaximumPlayerSessionCount: this.__input.maximumPlayerSessionCount,
          Name: this.__input.name,
          GameProperties: this.__input.gameProperties,
          CreatorId: this.__input.creatorId,
          GameSessionId: this.__input.gameSessionId,
          IdempotencyToken: this.__input.idempotencyToken,
          GameSessionData: this.__input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGameSession.GameSession.IpAddress', props);
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
          FleetId: this.__input.fleetId,
          AliasId: this.__input.aliasId,
          MaximumPlayerSessionCount: this.__input.maximumPlayerSessionCount,
          Name: this.__input.name,
          GameProperties: this.__input.gameProperties,
          CreatorId: this.__input.creatorId,
          GameSessionId: this.__input.gameSessionId,
          IdempotencyToken: this.__input.idempotencyToken,
          GameSessionData: this.__input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGameSession.GameSession.DnsName', props);
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
          FleetId: this.__input.fleetId,
          AliasId: this.__input.aliasId,
          MaximumPlayerSessionCount: this.__input.maximumPlayerSessionCount,
          Name: this.__input.name,
          GameProperties: this.__input.gameProperties,
          CreatorId: this.__input.creatorId,
          GameSessionId: this.__input.gameSessionId,
          IdempotencyToken: this.__input.idempotencyToken,
          GameSessionData: this.__input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGameSession.GameSession.Port', props);
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
          FleetId: this.__input.fleetId,
          AliasId: this.__input.aliasId,
          MaximumPlayerSessionCount: this.__input.maximumPlayerSessionCount,
          Name: this.__input.name,
          GameProperties: this.__input.gameProperties,
          CreatorId: this.__input.creatorId,
          GameSessionId: this.__input.gameSessionId,
          IdempotencyToken: this.__input.idempotencyToken,
          GameSessionData: this.__input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGameSession.GameSession.PlayerSessionCreationPolicy', props);
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
          FleetId: this.__input.fleetId,
          AliasId: this.__input.aliasId,
          MaximumPlayerSessionCount: this.__input.maximumPlayerSessionCount,
          Name: this.__input.name,
          GameProperties: this.__input.gameProperties,
          CreatorId: this.__input.creatorId,
          GameSessionId: this.__input.gameSessionId,
          IdempotencyToken: this.__input.idempotencyToken,
          GameSessionData: this.__input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGameSession.GameSession.CreatorId', props);
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
          FleetId: this.__input.fleetId,
          AliasId: this.__input.aliasId,
          MaximumPlayerSessionCount: this.__input.maximumPlayerSessionCount,
          Name: this.__input.name,
          GameProperties: this.__input.gameProperties,
          CreatorId: this.__input.creatorId,
          GameSessionId: this.__input.gameSessionId,
          IdempotencyToken: this.__input.idempotencyToken,
          GameSessionData: this.__input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGameSession.GameSession.GameSessionData', props);
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
          FleetId: this.__input.fleetId,
          AliasId: this.__input.aliasId,
          MaximumPlayerSessionCount: this.__input.maximumPlayerSessionCount,
          Name: this.__input.name,
          GameProperties: this.__input.gameProperties,
          CreatorId: this.__input.creatorId,
          GameSessionId: this.__input.gameSessionId,
          IdempotencyToken: this.__input.idempotencyToken,
          GameSessionData: this.__input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGameSession.GameSession.MatchmakerData', props);
    return resource.getResponseField('GameSession.MatchmakerData') as unknown as string;
  }

}

export class GameLiftResponsesCreateGameSessionQueue {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftCreateGameSessionQueueInput) {
  }

  public get gameSessionQueue(): GameLiftResponsesCreateGameSessionQueueGameSessionQueue {
    return new GameLiftResponsesCreateGameSessionQueueGameSessionQueue(this.__scope, this.__resources, this.__input);
  }

}

export class GameLiftResponsesCreateGameSessionQueueGameSessionQueue {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftCreateGameSessionQueueInput) {
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
          Name: this.__input.name,
          TimeoutInSeconds: this.__input.timeoutInSeconds,
          PlayerLatencyPolicies: this.__input.playerLatencyPolicies,
          Destinations: this.__input.destinations,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGameSessionQueue.GameSessionQueue.Name', props);
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
          Name: this.__input.name,
          TimeoutInSeconds: this.__input.timeoutInSeconds,
          PlayerLatencyPolicies: this.__input.playerLatencyPolicies,
          Destinations: this.__input.destinations,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGameSessionQueue.GameSessionQueue.GameSessionQueueArn', props);
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
          Name: this.__input.name,
          TimeoutInSeconds: this.__input.timeoutInSeconds,
          PlayerLatencyPolicies: this.__input.playerLatencyPolicies,
          Destinations: this.__input.destinations,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGameSessionQueue.GameSessionQueue.TimeoutInSeconds', props);
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
          Name: this.__input.name,
          TimeoutInSeconds: this.__input.timeoutInSeconds,
          PlayerLatencyPolicies: this.__input.playerLatencyPolicies,
          Destinations: this.__input.destinations,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGameSessionQueue.GameSessionQueue.PlayerLatencyPolicies', props);
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
          Name: this.__input.name,
          TimeoutInSeconds: this.__input.timeoutInSeconds,
          PlayerLatencyPolicies: this.__input.playerLatencyPolicies,
          Destinations: this.__input.destinations,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGameSessionQueue.GameSessionQueue.Destinations', props);
    return resource.getResponseField('GameSessionQueue.Destinations') as unknown as shapes.GameLiftGameSessionQueueDestination[];
  }

}

export class GameLiftResponsesCreateMatchmakingConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftCreateMatchmakingConfigurationInput) {
  }

  public get configuration(): GameLiftResponsesCreateMatchmakingConfigurationConfiguration {
    return new GameLiftResponsesCreateMatchmakingConfigurationConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class GameLiftResponsesCreateMatchmakingConfigurationConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftCreateMatchmakingConfigurationInput) {
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
          Name: this.__input.name,
          Description: this.__input.description,
          GameSessionQueueArns: this.__input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.__input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.__input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.__input.acceptanceRequired,
          RuleSetName: this.__input.ruleSetName,
          NotificationTarget: this.__input.notificationTarget,
          AdditionalPlayerCount: this.__input.additionalPlayerCount,
          CustomEventData: this.__input.customEventData,
          GameProperties: this.__input.gameProperties,
          GameSessionData: this.__input.gameSessionData,
          BackfillMode: this.__input.backfillMode,
          FlexMatchMode: this.__input.flexMatchMode,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMatchmakingConfiguration.Configuration.Name', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          GameSessionQueueArns: this.__input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.__input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.__input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.__input.acceptanceRequired,
          RuleSetName: this.__input.ruleSetName,
          NotificationTarget: this.__input.notificationTarget,
          AdditionalPlayerCount: this.__input.additionalPlayerCount,
          CustomEventData: this.__input.customEventData,
          GameProperties: this.__input.gameProperties,
          GameSessionData: this.__input.gameSessionData,
          BackfillMode: this.__input.backfillMode,
          FlexMatchMode: this.__input.flexMatchMode,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMatchmakingConfiguration.Configuration.ConfigurationArn', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          GameSessionQueueArns: this.__input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.__input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.__input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.__input.acceptanceRequired,
          RuleSetName: this.__input.ruleSetName,
          NotificationTarget: this.__input.notificationTarget,
          AdditionalPlayerCount: this.__input.additionalPlayerCount,
          CustomEventData: this.__input.customEventData,
          GameProperties: this.__input.gameProperties,
          GameSessionData: this.__input.gameSessionData,
          BackfillMode: this.__input.backfillMode,
          FlexMatchMode: this.__input.flexMatchMode,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMatchmakingConfiguration.Configuration.Description', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          GameSessionQueueArns: this.__input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.__input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.__input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.__input.acceptanceRequired,
          RuleSetName: this.__input.ruleSetName,
          NotificationTarget: this.__input.notificationTarget,
          AdditionalPlayerCount: this.__input.additionalPlayerCount,
          CustomEventData: this.__input.customEventData,
          GameProperties: this.__input.gameProperties,
          GameSessionData: this.__input.gameSessionData,
          BackfillMode: this.__input.backfillMode,
          FlexMatchMode: this.__input.flexMatchMode,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMatchmakingConfiguration.Configuration.GameSessionQueueArns', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          GameSessionQueueArns: this.__input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.__input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.__input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.__input.acceptanceRequired,
          RuleSetName: this.__input.ruleSetName,
          NotificationTarget: this.__input.notificationTarget,
          AdditionalPlayerCount: this.__input.additionalPlayerCount,
          CustomEventData: this.__input.customEventData,
          GameProperties: this.__input.gameProperties,
          GameSessionData: this.__input.gameSessionData,
          BackfillMode: this.__input.backfillMode,
          FlexMatchMode: this.__input.flexMatchMode,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMatchmakingConfiguration.Configuration.RequestTimeoutSeconds', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          GameSessionQueueArns: this.__input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.__input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.__input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.__input.acceptanceRequired,
          RuleSetName: this.__input.ruleSetName,
          NotificationTarget: this.__input.notificationTarget,
          AdditionalPlayerCount: this.__input.additionalPlayerCount,
          CustomEventData: this.__input.customEventData,
          GameProperties: this.__input.gameProperties,
          GameSessionData: this.__input.gameSessionData,
          BackfillMode: this.__input.backfillMode,
          FlexMatchMode: this.__input.flexMatchMode,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMatchmakingConfiguration.Configuration.AcceptanceTimeoutSeconds', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          GameSessionQueueArns: this.__input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.__input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.__input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.__input.acceptanceRequired,
          RuleSetName: this.__input.ruleSetName,
          NotificationTarget: this.__input.notificationTarget,
          AdditionalPlayerCount: this.__input.additionalPlayerCount,
          CustomEventData: this.__input.customEventData,
          GameProperties: this.__input.gameProperties,
          GameSessionData: this.__input.gameSessionData,
          BackfillMode: this.__input.backfillMode,
          FlexMatchMode: this.__input.flexMatchMode,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMatchmakingConfiguration.Configuration.AcceptanceRequired', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          GameSessionQueueArns: this.__input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.__input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.__input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.__input.acceptanceRequired,
          RuleSetName: this.__input.ruleSetName,
          NotificationTarget: this.__input.notificationTarget,
          AdditionalPlayerCount: this.__input.additionalPlayerCount,
          CustomEventData: this.__input.customEventData,
          GameProperties: this.__input.gameProperties,
          GameSessionData: this.__input.gameSessionData,
          BackfillMode: this.__input.backfillMode,
          FlexMatchMode: this.__input.flexMatchMode,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMatchmakingConfiguration.Configuration.RuleSetName', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          GameSessionQueueArns: this.__input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.__input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.__input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.__input.acceptanceRequired,
          RuleSetName: this.__input.ruleSetName,
          NotificationTarget: this.__input.notificationTarget,
          AdditionalPlayerCount: this.__input.additionalPlayerCount,
          CustomEventData: this.__input.customEventData,
          GameProperties: this.__input.gameProperties,
          GameSessionData: this.__input.gameSessionData,
          BackfillMode: this.__input.backfillMode,
          FlexMatchMode: this.__input.flexMatchMode,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMatchmakingConfiguration.Configuration.RuleSetArn', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          GameSessionQueueArns: this.__input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.__input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.__input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.__input.acceptanceRequired,
          RuleSetName: this.__input.ruleSetName,
          NotificationTarget: this.__input.notificationTarget,
          AdditionalPlayerCount: this.__input.additionalPlayerCount,
          CustomEventData: this.__input.customEventData,
          GameProperties: this.__input.gameProperties,
          GameSessionData: this.__input.gameSessionData,
          BackfillMode: this.__input.backfillMode,
          FlexMatchMode: this.__input.flexMatchMode,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMatchmakingConfiguration.Configuration.NotificationTarget', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          GameSessionQueueArns: this.__input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.__input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.__input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.__input.acceptanceRequired,
          RuleSetName: this.__input.ruleSetName,
          NotificationTarget: this.__input.notificationTarget,
          AdditionalPlayerCount: this.__input.additionalPlayerCount,
          CustomEventData: this.__input.customEventData,
          GameProperties: this.__input.gameProperties,
          GameSessionData: this.__input.gameSessionData,
          BackfillMode: this.__input.backfillMode,
          FlexMatchMode: this.__input.flexMatchMode,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMatchmakingConfiguration.Configuration.AdditionalPlayerCount', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          GameSessionQueueArns: this.__input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.__input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.__input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.__input.acceptanceRequired,
          RuleSetName: this.__input.ruleSetName,
          NotificationTarget: this.__input.notificationTarget,
          AdditionalPlayerCount: this.__input.additionalPlayerCount,
          CustomEventData: this.__input.customEventData,
          GameProperties: this.__input.gameProperties,
          GameSessionData: this.__input.gameSessionData,
          BackfillMode: this.__input.backfillMode,
          FlexMatchMode: this.__input.flexMatchMode,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMatchmakingConfiguration.Configuration.CustomEventData', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          GameSessionQueueArns: this.__input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.__input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.__input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.__input.acceptanceRequired,
          RuleSetName: this.__input.ruleSetName,
          NotificationTarget: this.__input.notificationTarget,
          AdditionalPlayerCount: this.__input.additionalPlayerCount,
          CustomEventData: this.__input.customEventData,
          GameProperties: this.__input.gameProperties,
          GameSessionData: this.__input.gameSessionData,
          BackfillMode: this.__input.backfillMode,
          FlexMatchMode: this.__input.flexMatchMode,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMatchmakingConfiguration.Configuration.CreationTime', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          GameSessionQueueArns: this.__input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.__input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.__input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.__input.acceptanceRequired,
          RuleSetName: this.__input.ruleSetName,
          NotificationTarget: this.__input.notificationTarget,
          AdditionalPlayerCount: this.__input.additionalPlayerCount,
          CustomEventData: this.__input.customEventData,
          GameProperties: this.__input.gameProperties,
          GameSessionData: this.__input.gameSessionData,
          BackfillMode: this.__input.backfillMode,
          FlexMatchMode: this.__input.flexMatchMode,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMatchmakingConfiguration.Configuration.GameProperties', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          GameSessionQueueArns: this.__input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.__input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.__input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.__input.acceptanceRequired,
          RuleSetName: this.__input.ruleSetName,
          NotificationTarget: this.__input.notificationTarget,
          AdditionalPlayerCount: this.__input.additionalPlayerCount,
          CustomEventData: this.__input.customEventData,
          GameProperties: this.__input.gameProperties,
          GameSessionData: this.__input.gameSessionData,
          BackfillMode: this.__input.backfillMode,
          FlexMatchMode: this.__input.flexMatchMode,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMatchmakingConfiguration.Configuration.GameSessionData', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          GameSessionQueueArns: this.__input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.__input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.__input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.__input.acceptanceRequired,
          RuleSetName: this.__input.ruleSetName,
          NotificationTarget: this.__input.notificationTarget,
          AdditionalPlayerCount: this.__input.additionalPlayerCount,
          CustomEventData: this.__input.customEventData,
          GameProperties: this.__input.gameProperties,
          GameSessionData: this.__input.gameSessionData,
          BackfillMode: this.__input.backfillMode,
          FlexMatchMode: this.__input.flexMatchMode,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMatchmakingConfiguration.Configuration.BackfillMode', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          GameSessionQueueArns: this.__input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.__input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.__input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.__input.acceptanceRequired,
          RuleSetName: this.__input.ruleSetName,
          NotificationTarget: this.__input.notificationTarget,
          AdditionalPlayerCount: this.__input.additionalPlayerCount,
          CustomEventData: this.__input.customEventData,
          GameProperties: this.__input.gameProperties,
          GameSessionData: this.__input.gameSessionData,
          BackfillMode: this.__input.backfillMode,
          FlexMatchMode: this.__input.flexMatchMode,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMatchmakingConfiguration.Configuration.FlexMatchMode', props);
    return resource.getResponseField('Configuration.FlexMatchMode') as unknown as string;
  }

}

export class GameLiftResponsesCreateMatchmakingRuleSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftCreateMatchmakingRuleSetInput) {
  }

  public get ruleSet(): GameLiftResponsesCreateMatchmakingRuleSetRuleSet {
    return new GameLiftResponsesCreateMatchmakingRuleSetRuleSet(this.__scope, this.__resources, this.__input);
  }

}

export class GameLiftResponsesCreateMatchmakingRuleSetRuleSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftCreateMatchmakingRuleSetInput) {
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
          Name: this.__input.name,
          RuleSetBody: this.__input.ruleSetBody,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMatchmakingRuleSet.RuleSet.RuleSetName', props);
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
          Name: this.__input.name,
          RuleSetBody: this.__input.ruleSetBody,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMatchmakingRuleSet.RuleSet.RuleSetArn', props);
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
          Name: this.__input.name,
          RuleSetBody: this.__input.ruleSetBody,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMatchmakingRuleSet.RuleSet.RuleSetBody', props);
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
          Name: this.__input.name,
          RuleSetBody: this.__input.ruleSetBody,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMatchmakingRuleSet.RuleSet.CreationTime', props);
    return resource.getResponseField('RuleSet.CreationTime') as unknown as string;
  }

}

export class GameLiftResponsesCreatePlayerSession {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftCreatePlayerSessionInput) {
  }

  public get playerSession(): GameLiftResponsesCreatePlayerSessionPlayerSession {
    return new GameLiftResponsesCreatePlayerSessionPlayerSession(this.__scope, this.__resources, this.__input);
  }

}

export class GameLiftResponsesCreatePlayerSessionPlayerSession {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftCreatePlayerSessionInput) {
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
          GameSessionId: this.__input.gameSessionId,
          PlayerId: this.__input.playerId,
          PlayerData: this.__input.playerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePlayerSession.PlayerSession.PlayerSessionId', props);
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
          GameSessionId: this.__input.gameSessionId,
          PlayerId: this.__input.playerId,
          PlayerData: this.__input.playerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePlayerSession.PlayerSession.PlayerId', props);
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
          GameSessionId: this.__input.gameSessionId,
          PlayerId: this.__input.playerId,
          PlayerData: this.__input.playerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePlayerSession.PlayerSession.GameSessionId', props);
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
          GameSessionId: this.__input.gameSessionId,
          PlayerId: this.__input.playerId,
          PlayerData: this.__input.playerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePlayerSession.PlayerSession.FleetId', props);
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
          GameSessionId: this.__input.gameSessionId,
          PlayerId: this.__input.playerId,
          PlayerData: this.__input.playerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePlayerSession.PlayerSession.FleetArn', props);
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
          GameSessionId: this.__input.gameSessionId,
          PlayerId: this.__input.playerId,
          PlayerData: this.__input.playerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePlayerSession.PlayerSession.CreationTime', props);
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
          GameSessionId: this.__input.gameSessionId,
          PlayerId: this.__input.playerId,
          PlayerData: this.__input.playerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePlayerSession.PlayerSession.TerminationTime', props);
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
          GameSessionId: this.__input.gameSessionId,
          PlayerId: this.__input.playerId,
          PlayerData: this.__input.playerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePlayerSession.PlayerSession.Status', props);
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
          GameSessionId: this.__input.gameSessionId,
          PlayerId: this.__input.playerId,
          PlayerData: this.__input.playerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePlayerSession.PlayerSession.IpAddress', props);
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
          GameSessionId: this.__input.gameSessionId,
          PlayerId: this.__input.playerId,
          PlayerData: this.__input.playerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePlayerSession.PlayerSession.DnsName', props);
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
          GameSessionId: this.__input.gameSessionId,
          PlayerId: this.__input.playerId,
          PlayerData: this.__input.playerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePlayerSession.PlayerSession.Port', props);
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
          GameSessionId: this.__input.gameSessionId,
          PlayerId: this.__input.playerId,
          PlayerData: this.__input.playerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePlayerSession.PlayerSession.PlayerData', props);
    return resource.getResponseField('PlayerSession.PlayerData') as unknown as string;
  }

}

export class GameLiftResponsesCreatePlayerSessions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftCreatePlayerSessionsInput) {
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
          GameSessionId: this.__input.gameSessionId,
          PlayerIds: this.__input.playerIds,
          PlayerDataMap: this.__input.playerDataMap,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePlayerSessions.PlayerSessions', props);
    return resource.getResponseField('PlayerSessions') as unknown as shapes.GameLiftPlayerSession[];
  }

}

export class GameLiftResponsesCreateScript {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftCreateScriptInput) {
  }

  public get script(): GameLiftResponsesCreateScriptScript {
    return new GameLiftResponsesCreateScriptScript(this.__scope, this.__resources, this.__input);
  }

}

export class GameLiftResponsesCreateScriptScript {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftCreateScriptInput) {
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
          Name: this.__input.name,
          Version: this.__input.version,
          StorageLocation: {
            Bucket: this.__input.storageLocation?.bucket,
            Key: this.__input.storageLocation?.key,
            RoleArn: this.__input.storageLocation?.roleArn,
            ObjectVersion: this.__input.storageLocation?.objectVersion,
          },
          ZipFile: {
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateScript.Script.ScriptId', props);
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
          Name: this.__input.name,
          Version: this.__input.version,
          StorageLocation: {
            Bucket: this.__input.storageLocation?.bucket,
            Key: this.__input.storageLocation?.key,
            RoleArn: this.__input.storageLocation?.roleArn,
            ObjectVersion: this.__input.storageLocation?.objectVersion,
          },
          ZipFile: {
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateScript.Script.ScriptArn', props);
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
          Name: this.__input.name,
          Version: this.__input.version,
          StorageLocation: {
            Bucket: this.__input.storageLocation?.bucket,
            Key: this.__input.storageLocation?.key,
            RoleArn: this.__input.storageLocation?.roleArn,
            ObjectVersion: this.__input.storageLocation?.objectVersion,
          },
          ZipFile: {
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateScript.Script.Name', props);
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
          Name: this.__input.name,
          Version: this.__input.version,
          StorageLocation: {
            Bucket: this.__input.storageLocation?.bucket,
            Key: this.__input.storageLocation?.key,
            RoleArn: this.__input.storageLocation?.roleArn,
            ObjectVersion: this.__input.storageLocation?.objectVersion,
          },
          ZipFile: {
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateScript.Script.Version', props);
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
          Name: this.__input.name,
          Version: this.__input.version,
          StorageLocation: {
            Bucket: this.__input.storageLocation?.bucket,
            Key: this.__input.storageLocation?.key,
            RoleArn: this.__input.storageLocation?.roleArn,
            ObjectVersion: this.__input.storageLocation?.objectVersion,
          },
          ZipFile: {
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateScript.Script.SizeOnDisk', props);
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
          Name: this.__input.name,
          Version: this.__input.version,
          StorageLocation: {
            Bucket: this.__input.storageLocation?.bucket,
            Key: this.__input.storageLocation?.key,
            RoleArn: this.__input.storageLocation?.roleArn,
            ObjectVersion: this.__input.storageLocation?.objectVersion,
          },
          ZipFile: {
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateScript.Script.CreationTime', props);
    return resource.getResponseField('Script.CreationTime') as unknown as string;
  }

  public get storageLocation(): GameLiftResponsesCreateScriptScriptStorageLocation {
    return new GameLiftResponsesCreateScriptScriptStorageLocation(this.__scope, this.__resources, this.__input);
  }

}

export class GameLiftResponsesCreateScriptScriptStorageLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftCreateScriptInput) {
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
          Name: this.__input.name,
          Version: this.__input.version,
          StorageLocation: {
            Bucket: this.__input.storageLocation?.bucket,
            Key: this.__input.storageLocation?.key,
            RoleArn: this.__input.storageLocation?.roleArn,
            ObjectVersion: this.__input.storageLocation?.objectVersion,
          },
          ZipFile: {
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateScript.Script.StorageLocation.Bucket', props);
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
          Name: this.__input.name,
          Version: this.__input.version,
          StorageLocation: {
            Bucket: this.__input.storageLocation?.bucket,
            Key: this.__input.storageLocation?.key,
            RoleArn: this.__input.storageLocation?.roleArn,
            ObjectVersion: this.__input.storageLocation?.objectVersion,
          },
          ZipFile: {
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateScript.Script.StorageLocation.Key', props);
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
          Name: this.__input.name,
          Version: this.__input.version,
          StorageLocation: {
            Bucket: this.__input.storageLocation?.bucket,
            Key: this.__input.storageLocation?.key,
            RoleArn: this.__input.storageLocation?.roleArn,
            ObjectVersion: this.__input.storageLocation?.objectVersion,
          },
          ZipFile: {
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateScript.Script.StorageLocation.RoleArn', props);
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
          Name: this.__input.name,
          Version: this.__input.version,
          StorageLocation: {
            Bucket: this.__input.storageLocation?.bucket,
            Key: this.__input.storageLocation?.key,
            RoleArn: this.__input.storageLocation?.roleArn,
            ObjectVersion: this.__input.storageLocation?.objectVersion,
          },
          ZipFile: {
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateScript.Script.StorageLocation.ObjectVersion', props);
    return resource.getResponseField('Script.StorageLocation.ObjectVersion') as unknown as string;
  }

}

export class GameLiftResponsesCreateVpcPeeringAuthorization {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftCreateVpcPeeringAuthorizationInput) {
  }

  public get vpcPeeringAuthorization(): GameLiftResponsesCreateVpcPeeringAuthorizationVpcPeeringAuthorization {
    return new GameLiftResponsesCreateVpcPeeringAuthorizationVpcPeeringAuthorization(this.__scope, this.__resources, this.__input);
  }

}

export class GameLiftResponsesCreateVpcPeeringAuthorizationVpcPeeringAuthorization {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftCreateVpcPeeringAuthorizationInput) {
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
          GameLiftAwsAccountId: this.__input.gameLiftAwsAccountId,
          PeerVpcId: this.__input.peerVpcId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateVpcPeeringAuthorization.VpcPeeringAuthorization.GameLiftAwsAccountId', props);
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
          GameLiftAwsAccountId: this.__input.gameLiftAwsAccountId,
          PeerVpcId: this.__input.peerVpcId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateVpcPeeringAuthorization.VpcPeeringAuthorization.PeerVpcAwsAccountId', props);
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
          GameLiftAwsAccountId: this.__input.gameLiftAwsAccountId,
          PeerVpcId: this.__input.peerVpcId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateVpcPeeringAuthorization.VpcPeeringAuthorization.PeerVpcId', props);
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
          GameLiftAwsAccountId: this.__input.gameLiftAwsAccountId,
          PeerVpcId: this.__input.peerVpcId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateVpcPeeringAuthorization.VpcPeeringAuthorization.CreationTime', props);
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
          GameLiftAwsAccountId: this.__input.gameLiftAwsAccountId,
          PeerVpcId: this.__input.peerVpcId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateVpcPeeringAuthorization.VpcPeeringAuthorization.ExpirationTime', props);
    return resource.getResponseField('VpcPeeringAuthorization.ExpirationTime') as unknown as string;
  }

}

export class GameLiftResponsesDeleteGameServerGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftDeleteGameServerGroupInput) {
  }

  public get gameServerGroup(): GameLiftResponsesDeleteGameServerGroupGameServerGroup {
    return new GameLiftResponsesDeleteGameServerGroupGameServerGroup(this.__scope, this.__resources, this.__input);
  }

}

export class GameLiftResponsesDeleteGameServerGroupGameServerGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftDeleteGameServerGroupInput) {
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
          GameServerGroupName: this.__input.gameServerGroupName,
          DeleteOption: this.__input.deleteOption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteGameServerGroup.GameServerGroup.GameServerGroupName', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          DeleteOption: this.__input.deleteOption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteGameServerGroup.GameServerGroup.GameServerGroupArn', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          DeleteOption: this.__input.deleteOption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteGameServerGroup.GameServerGroup.RoleArn', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          DeleteOption: this.__input.deleteOption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteGameServerGroup.GameServerGroup.InstanceDefinitions', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          DeleteOption: this.__input.deleteOption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteGameServerGroup.GameServerGroup.BalancingStrategy', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          DeleteOption: this.__input.deleteOption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteGameServerGroup.GameServerGroup.GameServerProtectionPolicy', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          DeleteOption: this.__input.deleteOption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteGameServerGroup.GameServerGroup.AutoScalingGroupArn', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          DeleteOption: this.__input.deleteOption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteGameServerGroup.GameServerGroup.Status', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          DeleteOption: this.__input.deleteOption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteGameServerGroup.GameServerGroup.StatusReason', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          DeleteOption: this.__input.deleteOption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteGameServerGroup.GameServerGroup.SuspendedActions', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          DeleteOption: this.__input.deleteOption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteGameServerGroup.GameServerGroup.CreationTime', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          DeleteOption: this.__input.deleteOption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteGameServerGroup.GameServerGroup.LastUpdatedTime', props);
    return resource.getResponseField('GameServerGroup.LastUpdatedTime') as unknown as string;
  }

}

export class GameLiftResponsesDescribeAlias {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftDescribeAliasInput) {
  }

  public get alias(): GameLiftResponsesDescribeAliasAlias {
    return new GameLiftResponsesDescribeAliasAlias(this.__scope, this.__resources, this.__input);
  }

}

export class GameLiftResponsesDescribeAliasAlias {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftDescribeAliasInput) {
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
          AliasId: this.__input.aliasId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlias.Alias.AliasId', props);
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
          AliasId: this.__input.aliasId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlias.Alias.Name', props);
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
          AliasId: this.__input.aliasId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlias.Alias.AliasArn', props);
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
          AliasId: this.__input.aliasId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlias.Alias.Description', props);
    return resource.getResponseField('Alias.Description') as unknown as string;
  }

  public get routingStrategy(): GameLiftResponsesDescribeAliasAliasRoutingStrategy {
    return new GameLiftResponsesDescribeAliasAliasRoutingStrategy(this.__scope, this.__resources, this.__input);
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
          AliasId: this.__input.aliasId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlias.Alias.CreationTime', props);
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
          AliasId: this.__input.aliasId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlias.Alias.LastUpdatedTime', props);
    return resource.getResponseField('Alias.LastUpdatedTime') as unknown as string;
  }

}

export class GameLiftResponsesDescribeAliasAliasRoutingStrategy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftDescribeAliasInput) {
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
          AliasId: this.__input.aliasId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlias.Alias.RoutingStrategy.Type', props);
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
          AliasId: this.__input.aliasId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlias.Alias.RoutingStrategy.FleetId', props);
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
          AliasId: this.__input.aliasId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlias.Alias.RoutingStrategy.Message', props);
    return resource.getResponseField('Alias.RoutingStrategy.Message') as unknown as string;
  }

}

export class GameLiftResponsesDescribeBuild {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftDescribeBuildInput) {
  }

  public get build(): GameLiftResponsesDescribeBuildBuild {
    return new GameLiftResponsesDescribeBuildBuild(this.__scope, this.__resources, this.__input);
  }

}

export class GameLiftResponsesDescribeBuildBuild {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftDescribeBuildInput) {
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
          BuildId: this.__input.buildId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBuild.Build.BuildId', props);
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
          BuildId: this.__input.buildId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBuild.Build.BuildArn', props);
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
          BuildId: this.__input.buildId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBuild.Build.Name', props);
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
          BuildId: this.__input.buildId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBuild.Build.Version', props);
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
          BuildId: this.__input.buildId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBuild.Build.Status', props);
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
          BuildId: this.__input.buildId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBuild.Build.SizeOnDisk', props);
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
          BuildId: this.__input.buildId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBuild.Build.OperatingSystem', props);
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
          BuildId: this.__input.buildId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBuild.Build.CreationTime', props);
    return resource.getResponseField('Build.CreationTime') as unknown as string;
  }

}

export class GameLiftResponsesDescribeEc2InstanceLimits {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftDescribeEc2InstanceLimitsInput) {
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
          EC2InstanceType: this.__input.ec2InstanceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEC2InstanceLimits.EC2InstanceLimits', props);
    return resource.getResponseField('EC2InstanceLimits') as unknown as shapes.GameLiftEc2InstanceLimit[];
  }

}

export class GameLiftResponsesDescribeFleetAttributes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftDescribeFleetAttributesInput) {
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
          FleetIds: this.__input.fleetIds,
          Limit: this.__input.limit,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFleetAttributes.FleetAttributes', props);
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
          FleetIds: this.__input.fleetIds,
          Limit: this.__input.limit,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFleetAttributes.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GameLiftResponsesDescribeFleetCapacity {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftDescribeFleetCapacityInput) {
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
          FleetIds: this.__input.fleetIds,
          Limit: this.__input.limit,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFleetCapacity.FleetCapacity', props);
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
          FleetIds: this.__input.fleetIds,
          Limit: this.__input.limit,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFleetCapacity.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GameLiftResponsesDescribeFleetEvents {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftDescribeFleetEventsInput) {
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
          FleetId: this.__input.fleetId,
          StartTime: this.__input.startTime,
          EndTime: this.__input.endTime,
          Limit: this.__input.limit,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFleetEvents.Events', props);
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
          FleetId: this.__input.fleetId,
          StartTime: this.__input.startTime,
          EndTime: this.__input.endTime,
          Limit: this.__input.limit,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFleetEvents.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GameLiftResponsesDescribeFleetPortSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftDescribeFleetPortSettingsInput) {
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
          FleetId: this.__input.fleetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFleetPortSettings.InboundPermissions', props);
    return resource.getResponseField('InboundPermissions') as unknown as shapes.GameLiftIpPermission[];
  }

}

export class GameLiftResponsesDescribeFleetUtilization {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftDescribeFleetUtilizationInput) {
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
          FleetIds: this.__input.fleetIds,
          Limit: this.__input.limit,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFleetUtilization.FleetUtilization', props);
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
          FleetIds: this.__input.fleetIds,
          Limit: this.__input.limit,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFleetUtilization.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GameLiftResponsesDescribeGameServer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftDescribeGameServerInput) {
  }

  public get gameServer(): GameLiftResponsesDescribeGameServerGameServer {
    return new GameLiftResponsesDescribeGameServerGameServer(this.__scope, this.__resources, this.__input);
  }

}

export class GameLiftResponsesDescribeGameServerGameServer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftDescribeGameServerInput) {
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
          GameServerGroupName: this.__input.gameServerGroupName,
          GameServerId: this.__input.gameServerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGameServer.GameServer.GameServerGroupName', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          GameServerId: this.__input.gameServerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGameServer.GameServer.GameServerGroupArn', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          GameServerId: this.__input.gameServerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGameServer.GameServer.GameServerId', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          GameServerId: this.__input.gameServerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGameServer.GameServer.InstanceId', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          GameServerId: this.__input.gameServerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGameServer.GameServer.ConnectionInfo', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          GameServerId: this.__input.gameServerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGameServer.GameServer.GameServerData', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          GameServerId: this.__input.gameServerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGameServer.GameServer.ClaimStatus', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          GameServerId: this.__input.gameServerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGameServer.GameServer.UtilizationStatus', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          GameServerId: this.__input.gameServerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGameServer.GameServer.RegistrationTime', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          GameServerId: this.__input.gameServerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGameServer.GameServer.LastClaimTime', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          GameServerId: this.__input.gameServerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGameServer.GameServer.LastHealthCheckTime', props);
    return resource.getResponseField('GameServer.LastHealthCheckTime') as unknown as string;
  }

}

export class GameLiftResponsesDescribeGameServerGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftDescribeGameServerGroupInput) {
  }

  public get gameServerGroup(): GameLiftResponsesDescribeGameServerGroupGameServerGroup {
    return new GameLiftResponsesDescribeGameServerGroupGameServerGroup(this.__scope, this.__resources, this.__input);
  }

}

export class GameLiftResponsesDescribeGameServerGroupGameServerGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftDescribeGameServerGroupInput) {
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
          GameServerGroupName: this.__input.gameServerGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGameServerGroup.GameServerGroup.GameServerGroupName', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGameServerGroup.GameServerGroup.GameServerGroupArn', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGameServerGroup.GameServerGroup.RoleArn', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGameServerGroup.GameServerGroup.InstanceDefinitions', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGameServerGroup.GameServerGroup.BalancingStrategy', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGameServerGroup.GameServerGroup.GameServerProtectionPolicy', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGameServerGroup.GameServerGroup.AutoScalingGroupArn', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGameServerGroup.GameServerGroup.Status', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGameServerGroup.GameServerGroup.StatusReason', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGameServerGroup.GameServerGroup.SuspendedActions', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGameServerGroup.GameServerGroup.CreationTime', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGameServerGroup.GameServerGroup.LastUpdatedTime', props);
    return resource.getResponseField('GameServerGroup.LastUpdatedTime') as unknown as string;
  }

}

export class GameLiftResponsesDescribeGameServerInstances {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftDescribeGameServerInstancesInput) {
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
          GameServerGroupName: this.__input.gameServerGroupName,
          InstanceIds: this.__input.instanceIds,
          Limit: this.__input.limit,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGameServerInstances.GameServerInstances', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          InstanceIds: this.__input.instanceIds,
          Limit: this.__input.limit,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGameServerInstances.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GameLiftResponsesDescribeGameSessionDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftDescribeGameSessionDetailsInput) {
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
          FleetId: this.__input.fleetId,
          GameSessionId: this.__input.gameSessionId,
          AliasId: this.__input.aliasId,
          StatusFilter: this.__input.statusFilter,
          Limit: this.__input.limit,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGameSessionDetails.GameSessionDetails', props);
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
          FleetId: this.__input.fleetId,
          GameSessionId: this.__input.gameSessionId,
          AliasId: this.__input.aliasId,
          StatusFilter: this.__input.statusFilter,
          Limit: this.__input.limit,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGameSessionDetails.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GameLiftResponsesDescribeGameSessionPlacement {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftDescribeGameSessionPlacementInput) {
  }

  public get gameSessionPlacement(): GameLiftResponsesDescribeGameSessionPlacementGameSessionPlacement {
    return new GameLiftResponsesDescribeGameSessionPlacementGameSessionPlacement(this.__scope, this.__resources, this.__input);
  }

}

export class GameLiftResponsesDescribeGameSessionPlacementGameSessionPlacement {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftDescribeGameSessionPlacementInput) {
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
          PlacementId: this.__input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGameSessionPlacement.GameSessionPlacement.PlacementId', props);
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
          PlacementId: this.__input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGameSessionPlacement.GameSessionPlacement.GameSessionQueueName', props);
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
          PlacementId: this.__input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGameSessionPlacement.GameSessionPlacement.Status', props);
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
          PlacementId: this.__input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGameSessionPlacement.GameSessionPlacement.GameProperties', props);
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
          PlacementId: this.__input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGameSessionPlacement.GameSessionPlacement.MaximumPlayerSessionCount', props);
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
          PlacementId: this.__input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGameSessionPlacement.GameSessionPlacement.GameSessionName', props);
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
          PlacementId: this.__input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGameSessionPlacement.GameSessionPlacement.GameSessionId', props);
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
          PlacementId: this.__input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGameSessionPlacement.GameSessionPlacement.GameSessionArn', props);
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
          PlacementId: this.__input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGameSessionPlacement.GameSessionPlacement.GameSessionRegion', props);
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
          PlacementId: this.__input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGameSessionPlacement.GameSessionPlacement.PlayerLatencies', props);
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
          PlacementId: this.__input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGameSessionPlacement.GameSessionPlacement.StartTime', props);
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
          PlacementId: this.__input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGameSessionPlacement.GameSessionPlacement.EndTime', props);
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
          PlacementId: this.__input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGameSessionPlacement.GameSessionPlacement.IpAddress', props);
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
          PlacementId: this.__input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGameSessionPlacement.GameSessionPlacement.DnsName', props);
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
          PlacementId: this.__input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGameSessionPlacement.GameSessionPlacement.Port', props);
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
          PlacementId: this.__input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGameSessionPlacement.GameSessionPlacement.PlacedPlayerSessions', props);
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
          PlacementId: this.__input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGameSessionPlacement.GameSessionPlacement.GameSessionData', props);
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
          PlacementId: this.__input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGameSessionPlacement.GameSessionPlacement.MatchmakerData', props);
    return resource.getResponseField('GameSessionPlacement.MatchmakerData') as unknown as string;
  }

}

export class GameLiftResponsesDescribeGameSessionQueues {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftDescribeGameSessionQueuesInput) {
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
          Names: this.__input.names,
          Limit: this.__input.limit,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGameSessionQueues.GameSessionQueues', props);
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
          Names: this.__input.names,
          Limit: this.__input.limit,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGameSessionQueues.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GameLiftResponsesDescribeGameSessions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftDescribeGameSessionsInput) {
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
          FleetId: this.__input.fleetId,
          GameSessionId: this.__input.gameSessionId,
          AliasId: this.__input.aliasId,
          StatusFilter: this.__input.statusFilter,
          Limit: this.__input.limit,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGameSessions.GameSessions', props);
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
          FleetId: this.__input.fleetId,
          GameSessionId: this.__input.gameSessionId,
          AliasId: this.__input.aliasId,
          StatusFilter: this.__input.statusFilter,
          Limit: this.__input.limit,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGameSessions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GameLiftResponsesDescribeInstances {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftDescribeInstancesInput) {
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
          FleetId: this.__input.fleetId,
          InstanceId: this.__input.instanceId,
          Limit: this.__input.limit,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInstances.Instances', props);
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
          FleetId: this.__input.fleetId,
          InstanceId: this.__input.instanceId,
          Limit: this.__input.limit,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInstances.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GameLiftResponsesDescribeMatchmaking {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftDescribeMatchmakingInput) {
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
          TicketIds: this.__input.ticketIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMatchmaking.TicketList', props);
    return resource.getResponseField('TicketList') as unknown as shapes.GameLiftMatchmakingTicket[];
  }

}

export class GameLiftResponsesDescribeMatchmakingConfigurations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftDescribeMatchmakingConfigurationsInput) {
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
          Names: this.__input.names,
          RuleSetName: this.__input.ruleSetName,
          Limit: this.__input.limit,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMatchmakingConfigurations.Configurations', props);
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
          Names: this.__input.names,
          RuleSetName: this.__input.ruleSetName,
          Limit: this.__input.limit,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMatchmakingConfigurations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GameLiftResponsesDescribeMatchmakingRuleSets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftDescribeMatchmakingRuleSetsInput) {
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
          Names: this.__input.names,
          Limit: this.__input.limit,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMatchmakingRuleSets.RuleSets', props);
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
          Names: this.__input.names,
          Limit: this.__input.limit,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMatchmakingRuleSets.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GameLiftResponsesDescribePlayerSessions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftDescribePlayerSessionsInput) {
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
          GameSessionId: this.__input.gameSessionId,
          PlayerId: this.__input.playerId,
          PlayerSessionId: this.__input.playerSessionId,
          PlayerSessionStatusFilter: this.__input.playerSessionStatusFilter,
          Limit: this.__input.limit,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePlayerSessions.PlayerSessions', props);
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
          GameSessionId: this.__input.gameSessionId,
          PlayerId: this.__input.playerId,
          PlayerSessionId: this.__input.playerSessionId,
          PlayerSessionStatusFilter: this.__input.playerSessionStatusFilter,
          Limit: this.__input.limit,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePlayerSessions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GameLiftResponsesDescribeRuntimeConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftDescribeRuntimeConfigurationInput) {
  }

  public get runtimeConfiguration(): GameLiftResponsesDescribeRuntimeConfigurationRuntimeConfiguration {
    return new GameLiftResponsesDescribeRuntimeConfigurationRuntimeConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class GameLiftResponsesDescribeRuntimeConfigurationRuntimeConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftDescribeRuntimeConfigurationInput) {
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
          FleetId: this.__input.fleetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRuntimeConfiguration.RuntimeConfiguration.ServerProcesses', props);
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
          FleetId: this.__input.fleetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRuntimeConfiguration.RuntimeConfiguration.MaxConcurrentGameSessionActivations', props);
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
          FleetId: this.__input.fleetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRuntimeConfiguration.RuntimeConfiguration.GameSessionActivationTimeoutSeconds', props);
    return resource.getResponseField('RuntimeConfiguration.GameSessionActivationTimeoutSeconds') as unknown as number;
  }

}

export class GameLiftResponsesDescribeScalingPolicies {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftDescribeScalingPoliciesInput) {
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
          FleetId: this.__input.fleetId,
          StatusFilter: this.__input.statusFilter,
          Limit: this.__input.limit,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeScalingPolicies.ScalingPolicies', props);
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
          FleetId: this.__input.fleetId,
          StatusFilter: this.__input.statusFilter,
          Limit: this.__input.limit,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeScalingPolicies.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GameLiftResponsesDescribeScript {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftDescribeScriptInput) {
  }

  public get script(): GameLiftResponsesDescribeScriptScript {
    return new GameLiftResponsesDescribeScriptScript(this.__scope, this.__resources, this.__input);
  }

}

export class GameLiftResponsesDescribeScriptScript {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftDescribeScriptInput) {
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
          ScriptId: this.__input.scriptId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeScript.Script.ScriptId', props);
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
          ScriptId: this.__input.scriptId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeScript.Script.ScriptArn', props);
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
          ScriptId: this.__input.scriptId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeScript.Script.Name', props);
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
          ScriptId: this.__input.scriptId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeScript.Script.Version', props);
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
          ScriptId: this.__input.scriptId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeScript.Script.SizeOnDisk', props);
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
          ScriptId: this.__input.scriptId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeScript.Script.CreationTime', props);
    return resource.getResponseField('Script.CreationTime') as unknown as string;
  }

  public get storageLocation(): GameLiftResponsesDescribeScriptScriptStorageLocation {
    return new GameLiftResponsesDescribeScriptScriptStorageLocation(this.__scope, this.__resources, this.__input);
  }

}

export class GameLiftResponsesDescribeScriptScriptStorageLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftDescribeScriptInput) {
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
          ScriptId: this.__input.scriptId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeScript.Script.StorageLocation.Bucket', props);
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
          ScriptId: this.__input.scriptId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeScript.Script.StorageLocation.Key', props);
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
          ScriptId: this.__input.scriptId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeScript.Script.StorageLocation.RoleArn', props);
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
          ScriptId: this.__input.scriptId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeScript.Script.StorageLocation.ObjectVersion', props);
    return resource.getResponseField('Script.StorageLocation.ObjectVersion') as unknown as string;
  }

}

export class GameLiftResponsesDescribeVpcPeeringAuthorizations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeVpcPeeringAuthorizations.VpcPeeringAuthorizations', props);
    return resource.getResponseField('VpcPeeringAuthorizations') as unknown as shapes.GameLiftVpcPeeringAuthorization[];
  }

}

export class GameLiftResponsesDescribeVpcPeeringConnections {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftDescribeVpcPeeringConnectionsInput) {
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
          FleetId: this.__input.fleetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeVpcPeeringConnections.VpcPeeringConnections', props);
    return resource.getResponseField('VpcPeeringConnections') as unknown as shapes.GameLiftVpcPeeringConnection[];
  }

}

export class GameLiftResponsesFetchGameSessionLogUrl {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftGetGameSessionLogUrlInput) {
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
          GameSessionId: this.__input.gameSessionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGameSessionLogUrl.PreSignedUrl', props);
    return resource.getResponseField('PreSignedUrl') as unknown as string;
  }

}

export class GameLiftResponsesFetchInstanceAccess {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftGetInstanceAccessInput) {
  }

  public get instanceAccess(): GameLiftResponsesFetchInstanceAccessInstanceAccess {
    return new GameLiftResponsesFetchInstanceAccessInstanceAccess(this.__scope, this.__resources, this.__input);
  }

}

export class GameLiftResponsesFetchInstanceAccessInstanceAccess {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftGetInstanceAccessInput) {
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
          FleetId: this.__input.fleetId,
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstanceAccess.InstanceAccess.FleetId', props);
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
          FleetId: this.__input.fleetId,
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstanceAccess.InstanceAccess.InstanceId', props);
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
          FleetId: this.__input.fleetId,
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstanceAccess.InstanceAccess.IpAddress', props);
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
          FleetId: this.__input.fleetId,
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstanceAccess.InstanceAccess.OperatingSystem', props);
    return resource.getResponseField('InstanceAccess.OperatingSystem') as unknown as string;
  }

  public get credentials(): GameLiftResponsesFetchInstanceAccessInstanceAccessCredentials {
    return new GameLiftResponsesFetchInstanceAccessInstanceAccessCredentials(this.__scope, this.__resources, this.__input);
  }

}

export class GameLiftResponsesFetchInstanceAccessInstanceAccessCredentials {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftGetInstanceAccessInput) {
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
          FleetId: this.__input.fleetId,
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstanceAccess.InstanceAccess.Credentials.UserName', props);
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
          FleetId: this.__input.fleetId,
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstanceAccess.InstanceAccess.Credentials.Secret', props);
    return resource.getResponseField('InstanceAccess.Credentials.Secret') as unknown as string;
  }

}

export class GameLiftResponsesListAliases {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftListAliasesInput) {
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
          RoutingStrategyType: this.__input.routingStrategyType,
          Name: this.__input.name,
          Limit: this.__input.limit,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAliases.Aliases', props);
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
          RoutingStrategyType: this.__input.routingStrategyType,
          Name: this.__input.name,
          Limit: this.__input.limit,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAliases.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GameLiftResponsesListBuilds {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftListBuildsInput) {
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
          Status: this.__input.status,
          Limit: this.__input.limit,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListBuilds.Builds', props);
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
          Status: this.__input.status,
          Limit: this.__input.limit,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListBuilds.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GameLiftResponsesListFleets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftListFleetsInput) {
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
          BuildId: this.__input.buildId,
          ScriptId: this.__input.scriptId,
          Limit: this.__input.limit,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFleets.FleetIds', props);
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
          BuildId: this.__input.buildId,
          ScriptId: this.__input.scriptId,
          Limit: this.__input.limit,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFleets.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GameLiftResponsesListGameServerGroups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftListGameServerGroupsInput) {
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
          Limit: this.__input.limit,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGameServerGroups.GameServerGroups', props);
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
          Limit: this.__input.limit,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGameServerGroups.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GameLiftResponsesListGameServers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftListGameServersInput) {
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
          GameServerGroupName: this.__input.gameServerGroupName,
          SortOrder: this.__input.sortOrder,
          Limit: this.__input.limit,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGameServers.GameServers', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          SortOrder: this.__input.sortOrder,
          Limit: this.__input.limit,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGameServers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GameLiftResponsesListScripts {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftListScriptsInput) {
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
          Limit: this.__input.limit,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListScripts.Scripts', props);
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
          Limit: this.__input.limit,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListScripts.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GameLiftResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftListTagsForResourceRequest) {
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
          ResourceARN: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.GameLiftTag[];
  }

}

export class GameLiftResponsesPutScalingPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftPutScalingPolicyInput) {
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
          Name: this.__input.name,
          FleetId: this.__input.fleetId,
          ScalingAdjustment: this.__input.scalingAdjustment,
          ScalingAdjustmentType: this.__input.scalingAdjustmentType,
          Threshold: this.__input.threshold,
          ComparisonOperator: this.__input.comparisonOperator,
          EvaluationPeriods: this.__input.evaluationPeriods,
          MetricName: this.__input.metricName,
          PolicyType: this.__input.policyType,
          TargetConfiguration: {
            TargetValue: this.__input.targetConfiguration?.targetValue,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutScalingPolicy.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class GameLiftResponsesRegisterGameServer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftRegisterGameServerInput) {
  }

  public get gameServer(): GameLiftResponsesRegisterGameServerGameServer {
    return new GameLiftResponsesRegisterGameServerGameServer(this.__scope, this.__resources, this.__input);
  }

}

export class GameLiftResponsesRegisterGameServerGameServer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftRegisterGameServerInput) {
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
          GameServerGroupName: this.__input.gameServerGroupName,
          GameServerId: this.__input.gameServerId,
          InstanceId: this.__input.instanceId,
          ConnectionInfo: this.__input.connectionInfo,
          GameServerData: this.__input.gameServerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterGameServer.GameServer.GameServerGroupName', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          GameServerId: this.__input.gameServerId,
          InstanceId: this.__input.instanceId,
          ConnectionInfo: this.__input.connectionInfo,
          GameServerData: this.__input.gameServerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterGameServer.GameServer.GameServerGroupArn', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          GameServerId: this.__input.gameServerId,
          InstanceId: this.__input.instanceId,
          ConnectionInfo: this.__input.connectionInfo,
          GameServerData: this.__input.gameServerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterGameServer.GameServer.GameServerId', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          GameServerId: this.__input.gameServerId,
          InstanceId: this.__input.instanceId,
          ConnectionInfo: this.__input.connectionInfo,
          GameServerData: this.__input.gameServerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterGameServer.GameServer.InstanceId', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          GameServerId: this.__input.gameServerId,
          InstanceId: this.__input.instanceId,
          ConnectionInfo: this.__input.connectionInfo,
          GameServerData: this.__input.gameServerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterGameServer.GameServer.ConnectionInfo', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          GameServerId: this.__input.gameServerId,
          InstanceId: this.__input.instanceId,
          ConnectionInfo: this.__input.connectionInfo,
          GameServerData: this.__input.gameServerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterGameServer.GameServer.GameServerData', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          GameServerId: this.__input.gameServerId,
          InstanceId: this.__input.instanceId,
          ConnectionInfo: this.__input.connectionInfo,
          GameServerData: this.__input.gameServerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterGameServer.GameServer.ClaimStatus', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          GameServerId: this.__input.gameServerId,
          InstanceId: this.__input.instanceId,
          ConnectionInfo: this.__input.connectionInfo,
          GameServerData: this.__input.gameServerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterGameServer.GameServer.UtilizationStatus', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          GameServerId: this.__input.gameServerId,
          InstanceId: this.__input.instanceId,
          ConnectionInfo: this.__input.connectionInfo,
          GameServerData: this.__input.gameServerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterGameServer.GameServer.RegistrationTime', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          GameServerId: this.__input.gameServerId,
          InstanceId: this.__input.instanceId,
          ConnectionInfo: this.__input.connectionInfo,
          GameServerData: this.__input.gameServerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterGameServer.GameServer.LastClaimTime', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          GameServerId: this.__input.gameServerId,
          InstanceId: this.__input.instanceId,
          ConnectionInfo: this.__input.connectionInfo,
          GameServerData: this.__input.gameServerData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterGameServer.GameServer.LastHealthCheckTime', props);
    return resource.getResponseField('GameServer.LastHealthCheckTime') as unknown as string;
  }

}

export class GameLiftResponsesRequestUploadCredentials {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftRequestUploadCredentialsInput) {
  }

  public get uploadCredentials(): GameLiftResponsesRequestUploadCredentialsUploadCredentials {
    return new GameLiftResponsesRequestUploadCredentialsUploadCredentials(this.__scope, this.__resources, this.__input);
  }

  public get storageLocation(): GameLiftResponsesRequestUploadCredentialsStorageLocation {
    return new GameLiftResponsesRequestUploadCredentialsStorageLocation(this.__scope, this.__resources, this.__input);
  }

}

export class GameLiftResponsesRequestUploadCredentialsUploadCredentials {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftRequestUploadCredentialsInput) {
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
          BuildId: this.__input.buildId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RequestUploadCredentials.UploadCredentials.AccessKeyId', props);
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
          BuildId: this.__input.buildId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RequestUploadCredentials.UploadCredentials.SecretAccessKey', props);
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
          BuildId: this.__input.buildId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RequestUploadCredentials.UploadCredentials.SessionToken', props);
    return resource.getResponseField('UploadCredentials.SessionToken') as unknown as string;
  }

}

export class GameLiftResponsesRequestUploadCredentialsStorageLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftRequestUploadCredentialsInput) {
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
          BuildId: this.__input.buildId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RequestUploadCredentials.StorageLocation.Bucket', props);
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
          BuildId: this.__input.buildId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RequestUploadCredentials.StorageLocation.Key', props);
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
          BuildId: this.__input.buildId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RequestUploadCredentials.StorageLocation.RoleArn', props);
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
          BuildId: this.__input.buildId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RequestUploadCredentials.StorageLocation.ObjectVersion', props);
    return resource.getResponseField('StorageLocation.ObjectVersion') as unknown as string;
  }

}

export class GameLiftResponsesResolveAlias {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftResolveAliasInput) {
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
          AliasId: this.__input.aliasId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResolveAlias.FleetId', props);
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
          AliasId: this.__input.aliasId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResolveAlias.FleetArn', props);
    return resource.getResponseField('FleetArn') as unknown as string;
  }

}

export class GameLiftResponsesResumeGameServerGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftResumeGameServerGroupInput) {
  }

  public get gameServerGroup(): GameLiftResponsesResumeGameServerGroupGameServerGroup {
    return new GameLiftResponsesResumeGameServerGroupGameServerGroup(this.__scope, this.__resources, this.__input);
  }

}

export class GameLiftResponsesResumeGameServerGroupGameServerGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftResumeGameServerGroupInput) {
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
          GameServerGroupName: this.__input.gameServerGroupName,
          ResumeActions: this.__input.resumeActions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResumeGameServerGroup.GameServerGroup.GameServerGroupName', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          ResumeActions: this.__input.resumeActions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResumeGameServerGroup.GameServerGroup.GameServerGroupArn', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          ResumeActions: this.__input.resumeActions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResumeGameServerGroup.GameServerGroup.RoleArn', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          ResumeActions: this.__input.resumeActions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResumeGameServerGroup.GameServerGroup.InstanceDefinitions', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          ResumeActions: this.__input.resumeActions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResumeGameServerGroup.GameServerGroup.BalancingStrategy', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          ResumeActions: this.__input.resumeActions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResumeGameServerGroup.GameServerGroup.GameServerProtectionPolicy', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          ResumeActions: this.__input.resumeActions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResumeGameServerGroup.GameServerGroup.AutoScalingGroupArn', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          ResumeActions: this.__input.resumeActions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResumeGameServerGroup.GameServerGroup.Status', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          ResumeActions: this.__input.resumeActions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResumeGameServerGroup.GameServerGroup.StatusReason', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          ResumeActions: this.__input.resumeActions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResumeGameServerGroup.GameServerGroup.SuspendedActions', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          ResumeActions: this.__input.resumeActions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResumeGameServerGroup.GameServerGroup.CreationTime', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          ResumeActions: this.__input.resumeActions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResumeGameServerGroup.GameServerGroup.LastUpdatedTime', props);
    return resource.getResponseField('GameServerGroup.LastUpdatedTime') as unknown as string;
  }

}

export class GameLiftResponsesSearchGameSessions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftSearchGameSessionsInput) {
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
          FleetId: this.__input.fleetId,
          AliasId: this.__input.aliasId,
          FilterExpression: this.__input.filterExpression,
          SortExpression: this.__input.sortExpression,
          Limit: this.__input.limit,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchGameSessions.GameSessions', props);
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
          FleetId: this.__input.fleetId,
          AliasId: this.__input.aliasId,
          FilterExpression: this.__input.filterExpression,
          SortExpression: this.__input.sortExpression,
          Limit: this.__input.limit,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchGameSessions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GameLiftResponsesStartGameSessionPlacement {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftStartGameSessionPlacementInput) {
  }

  public get gameSessionPlacement(): GameLiftResponsesStartGameSessionPlacementGameSessionPlacement {
    return new GameLiftResponsesStartGameSessionPlacementGameSessionPlacement(this.__scope, this.__resources, this.__input);
  }

}

export class GameLiftResponsesStartGameSessionPlacementGameSessionPlacement {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftStartGameSessionPlacementInput) {
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
          PlacementId: this.__input.placementId,
          GameSessionQueueName: this.__input.gameSessionQueueName,
          GameProperties: this.__input.gameProperties,
          MaximumPlayerSessionCount: this.__input.maximumPlayerSessionCount,
          GameSessionName: this.__input.gameSessionName,
          PlayerLatencies: this.__input.playerLatencies,
          DesiredPlayerSessions: this.__input.desiredPlayerSessions,
          GameSessionData: this.__input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartGameSessionPlacement.GameSessionPlacement.PlacementId', props);
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
          PlacementId: this.__input.placementId,
          GameSessionQueueName: this.__input.gameSessionQueueName,
          GameProperties: this.__input.gameProperties,
          MaximumPlayerSessionCount: this.__input.maximumPlayerSessionCount,
          GameSessionName: this.__input.gameSessionName,
          PlayerLatencies: this.__input.playerLatencies,
          DesiredPlayerSessions: this.__input.desiredPlayerSessions,
          GameSessionData: this.__input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartGameSessionPlacement.GameSessionPlacement.GameSessionQueueName', props);
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
          PlacementId: this.__input.placementId,
          GameSessionQueueName: this.__input.gameSessionQueueName,
          GameProperties: this.__input.gameProperties,
          MaximumPlayerSessionCount: this.__input.maximumPlayerSessionCount,
          GameSessionName: this.__input.gameSessionName,
          PlayerLatencies: this.__input.playerLatencies,
          DesiredPlayerSessions: this.__input.desiredPlayerSessions,
          GameSessionData: this.__input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartGameSessionPlacement.GameSessionPlacement.Status', props);
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
          PlacementId: this.__input.placementId,
          GameSessionQueueName: this.__input.gameSessionQueueName,
          GameProperties: this.__input.gameProperties,
          MaximumPlayerSessionCount: this.__input.maximumPlayerSessionCount,
          GameSessionName: this.__input.gameSessionName,
          PlayerLatencies: this.__input.playerLatencies,
          DesiredPlayerSessions: this.__input.desiredPlayerSessions,
          GameSessionData: this.__input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartGameSessionPlacement.GameSessionPlacement.GameProperties', props);
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
          PlacementId: this.__input.placementId,
          GameSessionQueueName: this.__input.gameSessionQueueName,
          GameProperties: this.__input.gameProperties,
          MaximumPlayerSessionCount: this.__input.maximumPlayerSessionCount,
          GameSessionName: this.__input.gameSessionName,
          PlayerLatencies: this.__input.playerLatencies,
          DesiredPlayerSessions: this.__input.desiredPlayerSessions,
          GameSessionData: this.__input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartGameSessionPlacement.GameSessionPlacement.MaximumPlayerSessionCount', props);
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
          PlacementId: this.__input.placementId,
          GameSessionQueueName: this.__input.gameSessionQueueName,
          GameProperties: this.__input.gameProperties,
          MaximumPlayerSessionCount: this.__input.maximumPlayerSessionCount,
          GameSessionName: this.__input.gameSessionName,
          PlayerLatencies: this.__input.playerLatencies,
          DesiredPlayerSessions: this.__input.desiredPlayerSessions,
          GameSessionData: this.__input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartGameSessionPlacement.GameSessionPlacement.GameSessionName', props);
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
          PlacementId: this.__input.placementId,
          GameSessionQueueName: this.__input.gameSessionQueueName,
          GameProperties: this.__input.gameProperties,
          MaximumPlayerSessionCount: this.__input.maximumPlayerSessionCount,
          GameSessionName: this.__input.gameSessionName,
          PlayerLatencies: this.__input.playerLatencies,
          DesiredPlayerSessions: this.__input.desiredPlayerSessions,
          GameSessionData: this.__input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartGameSessionPlacement.GameSessionPlacement.GameSessionId', props);
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
          PlacementId: this.__input.placementId,
          GameSessionQueueName: this.__input.gameSessionQueueName,
          GameProperties: this.__input.gameProperties,
          MaximumPlayerSessionCount: this.__input.maximumPlayerSessionCount,
          GameSessionName: this.__input.gameSessionName,
          PlayerLatencies: this.__input.playerLatencies,
          DesiredPlayerSessions: this.__input.desiredPlayerSessions,
          GameSessionData: this.__input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartGameSessionPlacement.GameSessionPlacement.GameSessionArn', props);
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
          PlacementId: this.__input.placementId,
          GameSessionQueueName: this.__input.gameSessionQueueName,
          GameProperties: this.__input.gameProperties,
          MaximumPlayerSessionCount: this.__input.maximumPlayerSessionCount,
          GameSessionName: this.__input.gameSessionName,
          PlayerLatencies: this.__input.playerLatencies,
          DesiredPlayerSessions: this.__input.desiredPlayerSessions,
          GameSessionData: this.__input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartGameSessionPlacement.GameSessionPlacement.GameSessionRegion', props);
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
          PlacementId: this.__input.placementId,
          GameSessionQueueName: this.__input.gameSessionQueueName,
          GameProperties: this.__input.gameProperties,
          MaximumPlayerSessionCount: this.__input.maximumPlayerSessionCount,
          GameSessionName: this.__input.gameSessionName,
          PlayerLatencies: this.__input.playerLatencies,
          DesiredPlayerSessions: this.__input.desiredPlayerSessions,
          GameSessionData: this.__input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartGameSessionPlacement.GameSessionPlacement.PlayerLatencies', props);
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
          PlacementId: this.__input.placementId,
          GameSessionQueueName: this.__input.gameSessionQueueName,
          GameProperties: this.__input.gameProperties,
          MaximumPlayerSessionCount: this.__input.maximumPlayerSessionCount,
          GameSessionName: this.__input.gameSessionName,
          PlayerLatencies: this.__input.playerLatencies,
          DesiredPlayerSessions: this.__input.desiredPlayerSessions,
          GameSessionData: this.__input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartGameSessionPlacement.GameSessionPlacement.StartTime', props);
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
          PlacementId: this.__input.placementId,
          GameSessionQueueName: this.__input.gameSessionQueueName,
          GameProperties: this.__input.gameProperties,
          MaximumPlayerSessionCount: this.__input.maximumPlayerSessionCount,
          GameSessionName: this.__input.gameSessionName,
          PlayerLatencies: this.__input.playerLatencies,
          DesiredPlayerSessions: this.__input.desiredPlayerSessions,
          GameSessionData: this.__input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartGameSessionPlacement.GameSessionPlacement.EndTime', props);
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
          PlacementId: this.__input.placementId,
          GameSessionQueueName: this.__input.gameSessionQueueName,
          GameProperties: this.__input.gameProperties,
          MaximumPlayerSessionCount: this.__input.maximumPlayerSessionCount,
          GameSessionName: this.__input.gameSessionName,
          PlayerLatencies: this.__input.playerLatencies,
          DesiredPlayerSessions: this.__input.desiredPlayerSessions,
          GameSessionData: this.__input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartGameSessionPlacement.GameSessionPlacement.IpAddress', props);
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
          PlacementId: this.__input.placementId,
          GameSessionQueueName: this.__input.gameSessionQueueName,
          GameProperties: this.__input.gameProperties,
          MaximumPlayerSessionCount: this.__input.maximumPlayerSessionCount,
          GameSessionName: this.__input.gameSessionName,
          PlayerLatencies: this.__input.playerLatencies,
          DesiredPlayerSessions: this.__input.desiredPlayerSessions,
          GameSessionData: this.__input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartGameSessionPlacement.GameSessionPlacement.DnsName', props);
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
          PlacementId: this.__input.placementId,
          GameSessionQueueName: this.__input.gameSessionQueueName,
          GameProperties: this.__input.gameProperties,
          MaximumPlayerSessionCount: this.__input.maximumPlayerSessionCount,
          GameSessionName: this.__input.gameSessionName,
          PlayerLatencies: this.__input.playerLatencies,
          DesiredPlayerSessions: this.__input.desiredPlayerSessions,
          GameSessionData: this.__input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartGameSessionPlacement.GameSessionPlacement.Port', props);
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
          PlacementId: this.__input.placementId,
          GameSessionQueueName: this.__input.gameSessionQueueName,
          GameProperties: this.__input.gameProperties,
          MaximumPlayerSessionCount: this.__input.maximumPlayerSessionCount,
          GameSessionName: this.__input.gameSessionName,
          PlayerLatencies: this.__input.playerLatencies,
          DesiredPlayerSessions: this.__input.desiredPlayerSessions,
          GameSessionData: this.__input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartGameSessionPlacement.GameSessionPlacement.PlacedPlayerSessions', props);
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
          PlacementId: this.__input.placementId,
          GameSessionQueueName: this.__input.gameSessionQueueName,
          GameProperties: this.__input.gameProperties,
          MaximumPlayerSessionCount: this.__input.maximumPlayerSessionCount,
          GameSessionName: this.__input.gameSessionName,
          PlayerLatencies: this.__input.playerLatencies,
          DesiredPlayerSessions: this.__input.desiredPlayerSessions,
          GameSessionData: this.__input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartGameSessionPlacement.GameSessionPlacement.GameSessionData', props);
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
          PlacementId: this.__input.placementId,
          GameSessionQueueName: this.__input.gameSessionQueueName,
          GameProperties: this.__input.gameProperties,
          MaximumPlayerSessionCount: this.__input.maximumPlayerSessionCount,
          GameSessionName: this.__input.gameSessionName,
          PlayerLatencies: this.__input.playerLatencies,
          DesiredPlayerSessions: this.__input.desiredPlayerSessions,
          GameSessionData: this.__input.gameSessionData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartGameSessionPlacement.GameSessionPlacement.MatchmakerData', props);
    return resource.getResponseField('GameSessionPlacement.MatchmakerData') as unknown as string;
  }

}

export class GameLiftResponsesStartMatchBackfill {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftStartMatchBackfillInput) {
  }

  public get matchmakingTicket(): GameLiftResponsesStartMatchBackfillMatchmakingTicket {
    return new GameLiftResponsesStartMatchBackfillMatchmakingTicket(this.__scope, this.__resources, this.__input);
  }

}

export class GameLiftResponsesStartMatchBackfillMatchmakingTicket {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftStartMatchBackfillInput) {
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
          TicketId: this.__input.ticketId,
          ConfigurationName: this.__input.configurationName,
          GameSessionArn: this.__input.gameSessionArn,
          Players: this.__input.players,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMatchBackfill.MatchmakingTicket.TicketId', props);
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
          TicketId: this.__input.ticketId,
          ConfigurationName: this.__input.configurationName,
          GameSessionArn: this.__input.gameSessionArn,
          Players: this.__input.players,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMatchBackfill.MatchmakingTicket.ConfigurationName', props);
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
          TicketId: this.__input.ticketId,
          ConfigurationName: this.__input.configurationName,
          GameSessionArn: this.__input.gameSessionArn,
          Players: this.__input.players,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMatchBackfill.MatchmakingTicket.ConfigurationArn', props);
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
          TicketId: this.__input.ticketId,
          ConfigurationName: this.__input.configurationName,
          GameSessionArn: this.__input.gameSessionArn,
          Players: this.__input.players,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMatchBackfill.MatchmakingTicket.Status', props);
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
          TicketId: this.__input.ticketId,
          ConfigurationName: this.__input.configurationName,
          GameSessionArn: this.__input.gameSessionArn,
          Players: this.__input.players,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMatchBackfill.MatchmakingTicket.StatusReason', props);
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
          TicketId: this.__input.ticketId,
          ConfigurationName: this.__input.configurationName,
          GameSessionArn: this.__input.gameSessionArn,
          Players: this.__input.players,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMatchBackfill.MatchmakingTicket.StatusMessage', props);
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
          TicketId: this.__input.ticketId,
          ConfigurationName: this.__input.configurationName,
          GameSessionArn: this.__input.gameSessionArn,
          Players: this.__input.players,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMatchBackfill.MatchmakingTicket.StartTime', props);
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
          TicketId: this.__input.ticketId,
          ConfigurationName: this.__input.configurationName,
          GameSessionArn: this.__input.gameSessionArn,
          Players: this.__input.players,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMatchBackfill.MatchmakingTicket.EndTime', props);
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
          TicketId: this.__input.ticketId,
          ConfigurationName: this.__input.configurationName,
          GameSessionArn: this.__input.gameSessionArn,
          Players: this.__input.players,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMatchBackfill.MatchmakingTicket.Players', props);
    return resource.getResponseField('MatchmakingTicket.Players') as unknown as shapes.GameLiftPlayer[];
  }

  public get gameSessionConnectionInfo(): GameLiftResponsesStartMatchBackfillMatchmakingTicketGameSessionConnectionInfo {
    return new GameLiftResponsesStartMatchBackfillMatchmakingTicketGameSessionConnectionInfo(this.__scope, this.__resources, this.__input);
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
          TicketId: this.__input.ticketId,
          ConfigurationName: this.__input.configurationName,
          GameSessionArn: this.__input.gameSessionArn,
          Players: this.__input.players,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMatchBackfill.MatchmakingTicket.EstimatedWaitTime', props);
    return resource.getResponseField('MatchmakingTicket.EstimatedWaitTime') as unknown as number;
  }

}

export class GameLiftResponsesStartMatchBackfillMatchmakingTicketGameSessionConnectionInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftStartMatchBackfillInput) {
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
          TicketId: this.__input.ticketId,
          ConfigurationName: this.__input.configurationName,
          GameSessionArn: this.__input.gameSessionArn,
          Players: this.__input.players,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMatchBackfill.MatchmakingTicket.GameSessionConnectionInfo.GameSessionArn', props);
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
          TicketId: this.__input.ticketId,
          ConfigurationName: this.__input.configurationName,
          GameSessionArn: this.__input.gameSessionArn,
          Players: this.__input.players,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMatchBackfill.MatchmakingTicket.GameSessionConnectionInfo.IpAddress', props);
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
          TicketId: this.__input.ticketId,
          ConfigurationName: this.__input.configurationName,
          GameSessionArn: this.__input.gameSessionArn,
          Players: this.__input.players,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMatchBackfill.MatchmakingTicket.GameSessionConnectionInfo.DnsName', props);
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
          TicketId: this.__input.ticketId,
          ConfigurationName: this.__input.configurationName,
          GameSessionArn: this.__input.gameSessionArn,
          Players: this.__input.players,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMatchBackfill.MatchmakingTicket.GameSessionConnectionInfo.Port', props);
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
          TicketId: this.__input.ticketId,
          ConfigurationName: this.__input.configurationName,
          GameSessionArn: this.__input.gameSessionArn,
          Players: this.__input.players,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMatchBackfill.MatchmakingTicket.GameSessionConnectionInfo.MatchedPlayerSessions', props);
    return resource.getResponseField('MatchmakingTicket.GameSessionConnectionInfo.MatchedPlayerSessions') as unknown as shapes.GameLiftMatchedPlayerSession[];
  }

}

export class GameLiftResponsesStartMatchmaking {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftStartMatchmakingInput) {
  }

  public get matchmakingTicket(): GameLiftResponsesStartMatchmakingMatchmakingTicket {
    return new GameLiftResponsesStartMatchmakingMatchmakingTicket(this.__scope, this.__resources, this.__input);
  }

}

export class GameLiftResponsesStartMatchmakingMatchmakingTicket {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftStartMatchmakingInput) {
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
          TicketId: this.__input.ticketId,
          ConfigurationName: this.__input.configurationName,
          Players: this.__input.players,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMatchmaking.MatchmakingTicket.TicketId', props);
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
          TicketId: this.__input.ticketId,
          ConfigurationName: this.__input.configurationName,
          Players: this.__input.players,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMatchmaking.MatchmakingTicket.ConfigurationName', props);
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
          TicketId: this.__input.ticketId,
          ConfigurationName: this.__input.configurationName,
          Players: this.__input.players,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMatchmaking.MatchmakingTicket.ConfigurationArn', props);
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
          TicketId: this.__input.ticketId,
          ConfigurationName: this.__input.configurationName,
          Players: this.__input.players,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMatchmaking.MatchmakingTicket.Status', props);
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
          TicketId: this.__input.ticketId,
          ConfigurationName: this.__input.configurationName,
          Players: this.__input.players,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMatchmaking.MatchmakingTicket.StatusReason', props);
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
          TicketId: this.__input.ticketId,
          ConfigurationName: this.__input.configurationName,
          Players: this.__input.players,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMatchmaking.MatchmakingTicket.StatusMessage', props);
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
          TicketId: this.__input.ticketId,
          ConfigurationName: this.__input.configurationName,
          Players: this.__input.players,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMatchmaking.MatchmakingTicket.StartTime', props);
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
          TicketId: this.__input.ticketId,
          ConfigurationName: this.__input.configurationName,
          Players: this.__input.players,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMatchmaking.MatchmakingTicket.EndTime', props);
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
          TicketId: this.__input.ticketId,
          ConfigurationName: this.__input.configurationName,
          Players: this.__input.players,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMatchmaking.MatchmakingTicket.Players', props);
    return resource.getResponseField('MatchmakingTicket.Players') as unknown as shapes.GameLiftPlayer[];
  }

  public get gameSessionConnectionInfo(): GameLiftResponsesStartMatchmakingMatchmakingTicketGameSessionConnectionInfo {
    return new GameLiftResponsesStartMatchmakingMatchmakingTicketGameSessionConnectionInfo(this.__scope, this.__resources, this.__input);
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
          TicketId: this.__input.ticketId,
          ConfigurationName: this.__input.configurationName,
          Players: this.__input.players,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMatchmaking.MatchmakingTicket.EstimatedWaitTime', props);
    return resource.getResponseField('MatchmakingTicket.EstimatedWaitTime') as unknown as number;
  }

}

export class GameLiftResponsesStartMatchmakingMatchmakingTicketGameSessionConnectionInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftStartMatchmakingInput) {
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
          TicketId: this.__input.ticketId,
          ConfigurationName: this.__input.configurationName,
          Players: this.__input.players,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMatchmaking.MatchmakingTicket.GameSessionConnectionInfo.GameSessionArn', props);
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
          TicketId: this.__input.ticketId,
          ConfigurationName: this.__input.configurationName,
          Players: this.__input.players,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMatchmaking.MatchmakingTicket.GameSessionConnectionInfo.IpAddress', props);
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
          TicketId: this.__input.ticketId,
          ConfigurationName: this.__input.configurationName,
          Players: this.__input.players,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMatchmaking.MatchmakingTicket.GameSessionConnectionInfo.DnsName', props);
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
          TicketId: this.__input.ticketId,
          ConfigurationName: this.__input.configurationName,
          Players: this.__input.players,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMatchmaking.MatchmakingTicket.GameSessionConnectionInfo.Port', props);
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
          TicketId: this.__input.ticketId,
          ConfigurationName: this.__input.configurationName,
          Players: this.__input.players,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMatchmaking.MatchmakingTicket.GameSessionConnectionInfo.MatchedPlayerSessions', props);
    return resource.getResponseField('MatchmakingTicket.GameSessionConnectionInfo.MatchedPlayerSessions') as unknown as shapes.GameLiftMatchedPlayerSession[];
  }

}

export class GameLiftResponsesStopGameSessionPlacement {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftStopGameSessionPlacementInput) {
  }

  public get gameSessionPlacement(): GameLiftResponsesStopGameSessionPlacementGameSessionPlacement {
    return new GameLiftResponsesStopGameSessionPlacementGameSessionPlacement(this.__scope, this.__resources, this.__input);
  }

}

export class GameLiftResponsesStopGameSessionPlacementGameSessionPlacement {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftStopGameSessionPlacementInput) {
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
          PlacementId: this.__input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopGameSessionPlacement.GameSessionPlacement.PlacementId', props);
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
          PlacementId: this.__input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopGameSessionPlacement.GameSessionPlacement.GameSessionQueueName', props);
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
          PlacementId: this.__input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopGameSessionPlacement.GameSessionPlacement.Status', props);
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
          PlacementId: this.__input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopGameSessionPlacement.GameSessionPlacement.GameProperties', props);
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
          PlacementId: this.__input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopGameSessionPlacement.GameSessionPlacement.MaximumPlayerSessionCount', props);
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
          PlacementId: this.__input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopGameSessionPlacement.GameSessionPlacement.GameSessionName', props);
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
          PlacementId: this.__input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopGameSessionPlacement.GameSessionPlacement.GameSessionId', props);
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
          PlacementId: this.__input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopGameSessionPlacement.GameSessionPlacement.GameSessionArn', props);
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
          PlacementId: this.__input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopGameSessionPlacement.GameSessionPlacement.GameSessionRegion', props);
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
          PlacementId: this.__input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopGameSessionPlacement.GameSessionPlacement.PlayerLatencies', props);
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
          PlacementId: this.__input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopGameSessionPlacement.GameSessionPlacement.StartTime', props);
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
          PlacementId: this.__input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopGameSessionPlacement.GameSessionPlacement.EndTime', props);
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
          PlacementId: this.__input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopGameSessionPlacement.GameSessionPlacement.IpAddress', props);
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
          PlacementId: this.__input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopGameSessionPlacement.GameSessionPlacement.DnsName', props);
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
          PlacementId: this.__input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopGameSessionPlacement.GameSessionPlacement.Port', props);
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
          PlacementId: this.__input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopGameSessionPlacement.GameSessionPlacement.PlacedPlayerSessions', props);
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
          PlacementId: this.__input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopGameSessionPlacement.GameSessionPlacement.GameSessionData', props);
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
          PlacementId: this.__input.placementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopGameSessionPlacement.GameSessionPlacement.MatchmakerData', props);
    return resource.getResponseField('GameSessionPlacement.MatchmakerData') as unknown as string;
  }

}

export class GameLiftResponsesSuspendGameServerGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftSuspendGameServerGroupInput) {
  }

  public get gameServerGroup(): GameLiftResponsesSuspendGameServerGroupGameServerGroup {
    return new GameLiftResponsesSuspendGameServerGroupGameServerGroup(this.__scope, this.__resources, this.__input);
  }

}

export class GameLiftResponsesSuspendGameServerGroupGameServerGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftSuspendGameServerGroupInput) {
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
          GameServerGroupName: this.__input.gameServerGroupName,
          SuspendActions: this.__input.suspendActions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SuspendGameServerGroup.GameServerGroup.GameServerGroupName', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          SuspendActions: this.__input.suspendActions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SuspendGameServerGroup.GameServerGroup.GameServerGroupArn', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          SuspendActions: this.__input.suspendActions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SuspendGameServerGroup.GameServerGroup.RoleArn', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          SuspendActions: this.__input.suspendActions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SuspendGameServerGroup.GameServerGroup.InstanceDefinitions', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          SuspendActions: this.__input.suspendActions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SuspendGameServerGroup.GameServerGroup.BalancingStrategy', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          SuspendActions: this.__input.suspendActions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SuspendGameServerGroup.GameServerGroup.GameServerProtectionPolicy', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          SuspendActions: this.__input.suspendActions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SuspendGameServerGroup.GameServerGroup.AutoScalingGroupArn', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          SuspendActions: this.__input.suspendActions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SuspendGameServerGroup.GameServerGroup.Status', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          SuspendActions: this.__input.suspendActions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SuspendGameServerGroup.GameServerGroup.StatusReason', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          SuspendActions: this.__input.suspendActions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SuspendGameServerGroup.GameServerGroup.SuspendedActions', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          SuspendActions: this.__input.suspendActions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SuspendGameServerGroup.GameServerGroup.CreationTime', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          SuspendActions: this.__input.suspendActions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SuspendGameServerGroup.GameServerGroup.LastUpdatedTime', props);
    return resource.getResponseField('GameServerGroup.LastUpdatedTime') as unknown as string;
  }

}

export class GameLiftResponsesUpdateAlias {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftUpdateAliasInput) {
  }

  public get alias(): GameLiftResponsesUpdateAliasAlias {
    return new GameLiftResponsesUpdateAliasAlias(this.__scope, this.__resources, this.__input);
  }

}

export class GameLiftResponsesUpdateAliasAlias {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftUpdateAliasInput) {
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
          AliasId: this.__input.aliasId,
          Name: this.__input.name,
          Description: this.__input.description,
          RoutingStrategy: {
            Type: this.__input.routingStrategy?.type,
            FleetId: this.__input.routingStrategy?.fleetId,
            Message: this.__input.routingStrategy?.message,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAlias.Alias.AliasId', props);
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
          AliasId: this.__input.aliasId,
          Name: this.__input.name,
          Description: this.__input.description,
          RoutingStrategy: {
            Type: this.__input.routingStrategy?.type,
            FleetId: this.__input.routingStrategy?.fleetId,
            Message: this.__input.routingStrategy?.message,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAlias.Alias.Name', props);
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
          AliasId: this.__input.aliasId,
          Name: this.__input.name,
          Description: this.__input.description,
          RoutingStrategy: {
            Type: this.__input.routingStrategy?.type,
            FleetId: this.__input.routingStrategy?.fleetId,
            Message: this.__input.routingStrategy?.message,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAlias.Alias.AliasArn', props);
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
          AliasId: this.__input.aliasId,
          Name: this.__input.name,
          Description: this.__input.description,
          RoutingStrategy: {
            Type: this.__input.routingStrategy?.type,
            FleetId: this.__input.routingStrategy?.fleetId,
            Message: this.__input.routingStrategy?.message,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAlias.Alias.Description', props);
    return resource.getResponseField('Alias.Description') as unknown as string;
  }

  public get routingStrategy(): GameLiftResponsesUpdateAliasAliasRoutingStrategy {
    return new GameLiftResponsesUpdateAliasAliasRoutingStrategy(this.__scope, this.__resources, this.__input);
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
          AliasId: this.__input.aliasId,
          Name: this.__input.name,
          Description: this.__input.description,
          RoutingStrategy: {
            Type: this.__input.routingStrategy?.type,
            FleetId: this.__input.routingStrategy?.fleetId,
            Message: this.__input.routingStrategy?.message,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAlias.Alias.CreationTime', props);
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
          AliasId: this.__input.aliasId,
          Name: this.__input.name,
          Description: this.__input.description,
          RoutingStrategy: {
            Type: this.__input.routingStrategy?.type,
            FleetId: this.__input.routingStrategy?.fleetId,
            Message: this.__input.routingStrategy?.message,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAlias.Alias.LastUpdatedTime', props);
    return resource.getResponseField('Alias.LastUpdatedTime') as unknown as string;
  }

}

export class GameLiftResponsesUpdateAliasAliasRoutingStrategy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftUpdateAliasInput) {
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
          AliasId: this.__input.aliasId,
          Name: this.__input.name,
          Description: this.__input.description,
          RoutingStrategy: {
            Type: this.__input.routingStrategy?.type,
            FleetId: this.__input.routingStrategy?.fleetId,
            Message: this.__input.routingStrategy?.message,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAlias.Alias.RoutingStrategy.Type', props);
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
          AliasId: this.__input.aliasId,
          Name: this.__input.name,
          Description: this.__input.description,
          RoutingStrategy: {
            Type: this.__input.routingStrategy?.type,
            FleetId: this.__input.routingStrategy?.fleetId,
            Message: this.__input.routingStrategy?.message,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAlias.Alias.RoutingStrategy.FleetId', props);
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
          AliasId: this.__input.aliasId,
          Name: this.__input.name,
          Description: this.__input.description,
          RoutingStrategy: {
            Type: this.__input.routingStrategy?.type,
            FleetId: this.__input.routingStrategy?.fleetId,
            Message: this.__input.routingStrategy?.message,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAlias.Alias.RoutingStrategy.Message', props);
    return resource.getResponseField('Alias.RoutingStrategy.Message') as unknown as string;
  }

}

export class GameLiftResponsesUpdateBuild {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftUpdateBuildInput) {
  }

  public get build(): GameLiftResponsesUpdateBuildBuild {
    return new GameLiftResponsesUpdateBuildBuild(this.__scope, this.__resources, this.__input);
  }

}

export class GameLiftResponsesUpdateBuildBuild {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftUpdateBuildInput) {
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
          BuildId: this.__input.buildId,
          Name: this.__input.name,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBuild.Build.BuildId', props);
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
          BuildId: this.__input.buildId,
          Name: this.__input.name,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBuild.Build.BuildArn', props);
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
          BuildId: this.__input.buildId,
          Name: this.__input.name,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBuild.Build.Name', props);
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
          BuildId: this.__input.buildId,
          Name: this.__input.name,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBuild.Build.Version', props);
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
          BuildId: this.__input.buildId,
          Name: this.__input.name,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBuild.Build.Status', props);
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
          BuildId: this.__input.buildId,
          Name: this.__input.name,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBuild.Build.SizeOnDisk', props);
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
          BuildId: this.__input.buildId,
          Name: this.__input.name,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBuild.Build.OperatingSystem', props);
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
          BuildId: this.__input.buildId,
          Name: this.__input.name,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBuild.Build.CreationTime', props);
    return resource.getResponseField('Build.CreationTime') as unknown as string;
  }

}

export class GameLiftResponsesUpdateFleetAttributes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftUpdateFleetAttributesInput) {
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
          FleetId: this.__input.fleetId,
          Name: this.__input.name,
          Description: this.__input.description,
          NewGameSessionProtectionPolicy: this.__input.newGameSessionProtectionPolicy,
          ResourceCreationLimitPolicy: {
            NewGameSessionsPerCreator: this.__input.resourceCreationLimitPolicy?.newGameSessionsPerCreator,
            PolicyPeriodInMinutes: this.__input.resourceCreationLimitPolicy?.policyPeriodInMinutes,
          },
          MetricGroups: this.__input.metricGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFleetAttributes.FleetId', props);
    return resource.getResponseField('FleetId') as unknown as string;
  }

}

export class GameLiftResponsesUpdateFleetCapacity {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftUpdateFleetCapacityInput) {
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
          FleetId: this.__input.fleetId,
          DesiredInstances: this.__input.desiredInstances,
          MinSize: this.__input.minSize,
          MaxSize: this.__input.maxSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFleetCapacity.FleetId', props);
    return resource.getResponseField('FleetId') as unknown as string;
  }

}

export class GameLiftResponsesUpdateFleetPortSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftUpdateFleetPortSettingsInput) {
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
          FleetId: this.__input.fleetId,
          InboundPermissionAuthorizations: this.__input.inboundPermissionAuthorizations,
          InboundPermissionRevocations: this.__input.inboundPermissionRevocations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFleetPortSettings.FleetId', props);
    return resource.getResponseField('FleetId') as unknown as string;
  }

}

export class GameLiftResponsesUpdateGameServer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftUpdateGameServerInput) {
  }

  public get gameServer(): GameLiftResponsesUpdateGameServerGameServer {
    return new GameLiftResponsesUpdateGameServerGameServer(this.__scope, this.__resources, this.__input);
  }

}

export class GameLiftResponsesUpdateGameServerGameServer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftUpdateGameServerInput) {
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
          GameServerGroupName: this.__input.gameServerGroupName,
          GameServerId: this.__input.gameServerId,
          GameServerData: this.__input.gameServerData,
          UtilizationStatus: this.__input.utilizationStatus,
          HealthCheck: this.__input.healthCheck,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGameServer.GameServer.GameServerGroupName', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          GameServerId: this.__input.gameServerId,
          GameServerData: this.__input.gameServerData,
          UtilizationStatus: this.__input.utilizationStatus,
          HealthCheck: this.__input.healthCheck,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGameServer.GameServer.GameServerGroupArn', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          GameServerId: this.__input.gameServerId,
          GameServerData: this.__input.gameServerData,
          UtilizationStatus: this.__input.utilizationStatus,
          HealthCheck: this.__input.healthCheck,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGameServer.GameServer.GameServerId', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          GameServerId: this.__input.gameServerId,
          GameServerData: this.__input.gameServerData,
          UtilizationStatus: this.__input.utilizationStatus,
          HealthCheck: this.__input.healthCheck,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGameServer.GameServer.InstanceId', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          GameServerId: this.__input.gameServerId,
          GameServerData: this.__input.gameServerData,
          UtilizationStatus: this.__input.utilizationStatus,
          HealthCheck: this.__input.healthCheck,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGameServer.GameServer.ConnectionInfo', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          GameServerId: this.__input.gameServerId,
          GameServerData: this.__input.gameServerData,
          UtilizationStatus: this.__input.utilizationStatus,
          HealthCheck: this.__input.healthCheck,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGameServer.GameServer.GameServerData', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          GameServerId: this.__input.gameServerId,
          GameServerData: this.__input.gameServerData,
          UtilizationStatus: this.__input.utilizationStatus,
          HealthCheck: this.__input.healthCheck,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGameServer.GameServer.ClaimStatus', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          GameServerId: this.__input.gameServerId,
          GameServerData: this.__input.gameServerData,
          UtilizationStatus: this.__input.utilizationStatus,
          HealthCheck: this.__input.healthCheck,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGameServer.GameServer.UtilizationStatus', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          GameServerId: this.__input.gameServerId,
          GameServerData: this.__input.gameServerData,
          UtilizationStatus: this.__input.utilizationStatus,
          HealthCheck: this.__input.healthCheck,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGameServer.GameServer.RegistrationTime', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          GameServerId: this.__input.gameServerId,
          GameServerData: this.__input.gameServerData,
          UtilizationStatus: this.__input.utilizationStatus,
          HealthCheck: this.__input.healthCheck,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGameServer.GameServer.LastClaimTime', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          GameServerId: this.__input.gameServerId,
          GameServerData: this.__input.gameServerData,
          UtilizationStatus: this.__input.utilizationStatus,
          HealthCheck: this.__input.healthCheck,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGameServer.GameServer.LastHealthCheckTime', props);
    return resource.getResponseField('GameServer.LastHealthCheckTime') as unknown as string;
  }

}

export class GameLiftResponsesUpdateGameServerGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftUpdateGameServerGroupInput) {
  }

  public get gameServerGroup(): GameLiftResponsesUpdateGameServerGroupGameServerGroup {
    return new GameLiftResponsesUpdateGameServerGroupGameServerGroup(this.__scope, this.__resources, this.__input);
  }

}

export class GameLiftResponsesUpdateGameServerGroupGameServerGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftUpdateGameServerGroupInput) {
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
          GameServerGroupName: this.__input.gameServerGroupName,
          RoleArn: this.__input.roleArn,
          InstanceDefinitions: this.__input.instanceDefinitions,
          GameServerProtectionPolicy: this.__input.gameServerProtectionPolicy,
          BalancingStrategy: this.__input.balancingStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGameServerGroup.GameServerGroup.GameServerGroupName', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          RoleArn: this.__input.roleArn,
          InstanceDefinitions: this.__input.instanceDefinitions,
          GameServerProtectionPolicy: this.__input.gameServerProtectionPolicy,
          BalancingStrategy: this.__input.balancingStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGameServerGroup.GameServerGroup.GameServerGroupArn', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          RoleArn: this.__input.roleArn,
          InstanceDefinitions: this.__input.instanceDefinitions,
          GameServerProtectionPolicy: this.__input.gameServerProtectionPolicy,
          BalancingStrategy: this.__input.balancingStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGameServerGroup.GameServerGroup.RoleArn', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          RoleArn: this.__input.roleArn,
          InstanceDefinitions: this.__input.instanceDefinitions,
          GameServerProtectionPolicy: this.__input.gameServerProtectionPolicy,
          BalancingStrategy: this.__input.balancingStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGameServerGroup.GameServerGroup.InstanceDefinitions', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          RoleArn: this.__input.roleArn,
          InstanceDefinitions: this.__input.instanceDefinitions,
          GameServerProtectionPolicy: this.__input.gameServerProtectionPolicy,
          BalancingStrategy: this.__input.balancingStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGameServerGroup.GameServerGroup.BalancingStrategy', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          RoleArn: this.__input.roleArn,
          InstanceDefinitions: this.__input.instanceDefinitions,
          GameServerProtectionPolicy: this.__input.gameServerProtectionPolicy,
          BalancingStrategy: this.__input.balancingStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGameServerGroup.GameServerGroup.GameServerProtectionPolicy', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          RoleArn: this.__input.roleArn,
          InstanceDefinitions: this.__input.instanceDefinitions,
          GameServerProtectionPolicy: this.__input.gameServerProtectionPolicy,
          BalancingStrategy: this.__input.balancingStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGameServerGroup.GameServerGroup.AutoScalingGroupArn', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          RoleArn: this.__input.roleArn,
          InstanceDefinitions: this.__input.instanceDefinitions,
          GameServerProtectionPolicy: this.__input.gameServerProtectionPolicy,
          BalancingStrategy: this.__input.balancingStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGameServerGroup.GameServerGroup.Status', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          RoleArn: this.__input.roleArn,
          InstanceDefinitions: this.__input.instanceDefinitions,
          GameServerProtectionPolicy: this.__input.gameServerProtectionPolicy,
          BalancingStrategy: this.__input.balancingStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGameServerGroup.GameServerGroup.StatusReason', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          RoleArn: this.__input.roleArn,
          InstanceDefinitions: this.__input.instanceDefinitions,
          GameServerProtectionPolicy: this.__input.gameServerProtectionPolicy,
          BalancingStrategy: this.__input.balancingStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGameServerGroup.GameServerGroup.SuspendedActions', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          RoleArn: this.__input.roleArn,
          InstanceDefinitions: this.__input.instanceDefinitions,
          GameServerProtectionPolicy: this.__input.gameServerProtectionPolicy,
          BalancingStrategy: this.__input.balancingStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGameServerGroup.GameServerGroup.CreationTime', props);
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
          GameServerGroupName: this.__input.gameServerGroupName,
          RoleArn: this.__input.roleArn,
          InstanceDefinitions: this.__input.instanceDefinitions,
          GameServerProtectionPolicy: this.__input.gameServerProtectionPolicy,
          BalancingStrategy: this.__input.balancingStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGameServerGroup.GameServerGroup.LastUpdatedTime', props);
    return resource.getResponseField('GameServerGroup.LastUpdatedTime') as unknown as string;
  }

}

export class GameLiftResponsesUpdateGameSession {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftUpdateGameSessionInput) {
  }

  public get gameSession(): GameLiftResponsesUpdateGameSessionGameSession {
    return new GameLiftResponsesUpdateGameSessionGameSession(this.__scope, this.__resources, this.__input);
  }

}

export class GameLiftResponsesUpdateGameSessionGameSession {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftUpdateGameSessionInput) {
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
          GameSessionId: this.__input.gameSessionId,
          MaximumPlayerSessionCount: this.__input.maximumPlayerSessionCount,
          Name: this.__input.name,
          PlayerSessionCreationPolicy: this.__input.playerSessionCreationPolicy,
          ProtectionPolicy: this.__input.protectionPolicy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGameSession.GameSession.GameSessionId', props);
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
          GameSessionId: this.__input.gameSessionId,
          MaximumPlayerSessionCount: this.__input.maximumPlayerSessionCount,
          Name: this.__input.name,
          PlayerSessionCreationPolicy: this.__input.playerSessionCreationPolicy,
          ProtectionPolicy: this.__input.protectionPolicy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGameSession.GameSession.Name', props);
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
          GameSessionId: this.__input.gameSessionId,
          MaximumPlayerSessionCount: this.__input.maximumPlayerSessionCount,
          Name: this.__input.name,
          PlayerSessionCreationPolicy: this.__input.playerSessionCreationPolicy,
          ProtectionPolicy: this.__input.protectionPolicy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGameSession.GameSession.FleetId', props);
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
          GameSessionId: this.__input.gameSessionId,
          MaximumPlayerSessionCount: this.__input.maximumPlayerSessionCount,
          Name: this.__input.name,
          PlayerSessionCreationPolicy: this.__input.playerSessionCreationPolicy,
          ProtectionPolicy: this.__input.protectionPolicy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGameSession.GameSession.FleetArn', props);
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
          GameSessionId: this.__input.gameSessionId,
          MaximumPlayerSessionCount: this.__input.maximumPlayerSessionCount,
          Name: this.__input.name,
          PlayerSessionCreationPolicy: this.__input.playerSessionCreationPolicy,
          ProtectionPolicy: this.__input.protectionPolicy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGameSession.GameSession.CreationTime', props);
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
          GameSessionId: this.__input.gameSessionId,
          MaximumPlayerSessionCount: this.__input.maximumPlayerSessionCount,
          Name: this.__input.name,
          PlayerSessionCreationPolicy: this.__input.playerSessionCreationPolicy,
          ProtectionPolicy: this.__input.protectionPolicy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGameSession.GameSession.TerminationTime', props);
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
          GameSessionId: this.__input.gameSessionId,
          MaximumPlayerSessionCount: this.__input.maximumPlayerSessionCount,
          Name: this.__input.name,
          PlayerSessionCreationPolicy: this.__input.playerSessionCreationPolicy,
          ProtectionPolicy: this.__input.protectionPolicy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGameSession.GameSession.CurrentPlayerSessionCount', props);
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
          GameSessionId: this.__input.gameSessionId,
          MaximumPlayerSessionCount: this.__input.maximumPlayerSessionCount,
          Name: this.__input.name,
          PlayerSessionCreationPolicy: this.__input.playerSessionCreationPolicy,
          ProtectionPolicy: this.__input.protectionPolicy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGameSession.GameSession.MaximumPlayerSessionCount', props);
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
          GameSessionId: this.__input.gameSessionId,
          MaximumPlayerSessionCount: this.__input.maximumPlayerSessionCount,
          Name: this.__input.name,
          PlayerSessionCreationPolicy: this.__input.playerSessionCreationPolicy,
          ProtectionPolicy: this.__input.protectionPolicy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGameSession.GameSession.Status', props);
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
          GameSessionId: this.__input.gameSessionId,
          MaximumPlayerSessionCount: this.__input.maximumPlayerSessionCount,
          Name: this.__input.name,
          PlayerSessionCreationPolicy: this.__input.playerSessionCreationPolicy,
          ProtectionPolicy: this.__input.protectionPolicy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGameSession.GameSession.StatusReason', props);
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
          GameSessionId: this.__input.gameSessionId,
          MaximumPlayerSessionCount: this.__input.maximumPlayerSessionCount,
          Name: this.__input.name,
          PlayerSessionCreationPolicy: this.__input.playerSessionCreationPolicy,
          ProtectionPolicy: this.__input.protectionPolicy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGameSession.GameSession.GameProperties', props);
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
          GameSessionId: this.__input.gameSessionId,
          MaximumPlayerSessionCount: this.__input.maximumPlayerSessionCount,
          Name: this.__input.name,
          PlayerSessionCreationPolicy: this.__input.playerSessionCreationPolicy,
          ProtectionPolicy: this.__input.protectionPolicy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGameSession.GameSession.IpAddress', props);
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
          GameSessionId: this.__input.gameSessionId,
          MaximumPlayerSessionCount: this.__input.maximumPlayerSessionCount,
          Name: this.__input.name,
          PlayerSessionCreationPolicy: this.__input.playerSessionCreationPolicy,
          ProtectionPolicy: this.__input.protectionPolicy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGameSession.GameSession.DnsName', props);
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
          GameSessionId: this.__input.gameSessionId,
          MaximumPlayerSessionCount: this.__input.maximumPlayerSessionCount,
          Name: this.__input.name,
          PlayerSessionCreationPolicy: this.__input.playerSessionCreationPolicy,
          ProtectionPolicy: this.__input.protectionPolicy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGameSession.GameSession.Port', props);
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
          GameSessionId: this.__input.gameSessionId,
          MaximumPlayerSessionCount: this.__input.maximumPlayerSessionCount,
          Name: this.__input.name,
          PlayerSessionCreationPolicy: this.__input.playerSessionCreationPolicy,
          ProtectionPolicy: this.__input.protectionPolicy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGameSession.GameSession.PlayerSessionCreationPolicy', props);
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
          GameSessionId: this.__input.gameSessionId,
          MaximumPlayerSessionCount: this.__input.maximumPlayerSessionCount,
          Name: this.__input.name,
          PlayerSessionCreationPolicy: this.__input.playerSessionCreationPolicy,
          ProtectionPolicy: this.__input.protectionPolicy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGameSession.GameSession.CreatorId', props);
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
          GameSessionId: this.__input.gameSessionId,
          MaximumPlayerSessionCount: this.__input.maximumPlayerSessionCount,
          Name: this.__input.name,
          PlayerSessionCreationPolicy: this.__input.playerSessionCreationPolicy,
          ProtectionPolicy: this.__input.protectionPolicy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGameSession.GameSession.GameSessionData', props);
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
          GameSessionId: this.__input.gameSessionId,
          MaximumPlayerSessionCount: this.__input.maximumPlayerSessionCount,
          Name: this.__input.name,
          PlayerSessionCreationPolicy: this.__input.playerSessionCreationPolicy,
          ProtectionPolicy: this.__input.protectionPolicy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGameSession.GameSession.MatchmakerData', props);
    return resource.getResponseField('GameSession.MatchmakerData') as unknown as string;
  }

}

export class GameLiftResponsesUpdateGameSessionQueue {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftUpdateGameSessionQueueInput) {
  }

  public get gameSessionQueue(): GameLiftResponsesUpdateGameSessionQueueGameSessionQueue {
    return new GameLiftResponsesUpdateGameSessionQueueGameSessionQueue(this.__scope, this.__resources, this.__input);
  }

}

export class GameLiftResponsesUpdateGameSessionQueueGameSessionQueue {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftUpdateGameSessionQueueInput) {
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
          Name: this.__input.name,
          TimeoutInSeconds: this.__input.timeoutInSeconds,
          PlayerLatencyPolicies: this.__input.playerLatencyPolicies,
          Destinations: this.__input.destinations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGameSessionQueue.GameSessionQueue.Name', props);
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
          Name: this.__input.name,
          TimeoutInSeconds: this.__input.timeoutInSeconds,
          PlayerLatencyPolicies: this.__input.playerLatencyPolicies,
          Destinations: this.__input.destinations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGameSessionQueue.GameSessionQueue.GameSessionQueueArn', props);
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
          Name: this.__input.name,
          TimeoutInSeconds: this.__input.timeoutInSeconds,
          PlayerLatencyPolicies: this.__input.playerLatencyPolicies,
          Destinations: this.__input.destinations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGameSessionQueue.GameSessionQueue.TimeoutInSeconds', props);
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
          Name: this.__input.name,
          TimeoutInSeconds: this.__input.timeoutInSeconds,
          PlayerLatencyPolicies: this.__input.playerLatencyPolicies,
          Destinations: this.__input.destinations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGameSessionQueue.GameSessionQueue.PlayerLatencyPolicies', props);
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
          Name: this.__input.name,
          TimeoutInSeconds: this.__input.timeoutInSeconds,
          PlayerLatencyPolicies: this.__input.playerLatencyPolicies,
          Destinations: this.__input.destinations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGameSessionQueue.GameSessionQueue.Destinations', props);
    return resource.getResponseField('GameSessionQueue.Destinations') as unknown as shapes.GameLiftGameSessionQueueDestination[];
  }

}

export class GameLiftResponsesUpdateMatchmakingConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftUpdateMatchmakingConfigurationInput) {
  }

  public get configuration(): GameLiftResponsesUpdateMatchmakingConfigurationConfiguration {
    return new GameLiftResponsesUpdateMatchmakingConfigurationConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class GameLiftResponsesUpdateMatchmakingConfigurationConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftUpdateMatchmakingConfigurationInput) {
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
          Name: this.__input.name,
          Description: this.__input.description,
          GameSessionQueueArns: this.__input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.__input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.__input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.__input.acceptanceRequired,
          RuleSetName: this.__input.ruleSetName,
          NotificationTarget: this.__input.notificationTarget,
          AdditionalPlayerCount: this.__input.additionalPlayerCount,
          CustomEventData: this.__input.customEventData,
          GameProperties: this.__input.gameProperties,
          GameSessionData: this.__input.gameSessionData,
          BackfillMode: this.__input.backfillMode,
          FlexMatchMode: this.__input.flexMatchMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMatchmakingConfiguration.Configuration.Name', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          GameSessionQueueArns: this.__input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.__input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.__input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.__input.acceptanceRequired,
          RuleSetName: this.__input.ruleSetName,
          NotificationTarget: this.__input.notificationTarget,
          AdditionalPlayerCount: this.__input.additionalPlayerCount,
          CustomEventData: this.__input.customEventData,
          GameProperties: this.__input.gameProperties,
          GameSessionData: this.__input.gameSessionData,
          BackfillMode: this.__input.backfillMode,
          FlexMatchMode: this.__input.flexMatchMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMatchmakingConfiguration.Configuration.ConfigurationArn', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          GameSessionQueueArns: this.__input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.__input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.__input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.__input.acceptanceRequired,
          RuleSetName: this.__input.ruleSetName,
          NotificationTarget: this.__input.notificationTarget,
          AdditionalPlayerCount: this.__input.additionalPlayerCount,
          CustomEventData: this.__input.customEventData,
          GameProperties: this.__input.gameProperties,
          GameSessionData: this.__input.gameSessionData,
          BackfillMode: this.__input.backfillMode,
          FlexMatchMode: this.__input.flexMatchMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMatchmakingConfiguration.Configuration.Description', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          GameSessionQueueArns: this.__input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.__input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.__input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.__input.acceptanceRequired,
          RuleSetName: this.__input.ruleSetName,
          NotificationTarget: this.__input.notificationTarget,
          AdditionalPlayerCount: this.__input.additionalPlayerCount,
          CustomEventData: this.__input.customEventData,
          GameProperties: this.__input.gameProperties,
          GameSessionData: this.__input.gameSessionData,
          BackfillMode: this.__input.backfillMode,
          FlexMatchMode: this.__input.flexMatchMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMatchmakingConfiguration.Configuration.GameSessionQueueArns', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          GameSessionQueueArns: this.__input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.__input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.__input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.__input.acceptanceRequired,
          RuleSetName: this.__input.ruleSetName,
          NotificationTarget: this.__input.notificationTarget,
          AdditionalPlayerCount: this.__input.additionalPlayerCount,
          CustomEventData: this.__input.customEventData,
          GameProperties: this.__input.gameProperties,
          GameSessionData: this.__input.gameSessionData,
          BackfillMode: this.__input.backfillMode,
          FlexMatchMode: this.__input.flexMatchMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMatchmakingConfiguration.Configuration.RequestTimeoutSeconds', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          GameSessionQueueArns: this.__input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.__input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.__input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.__input.acceptanceRequired,
          RuleSetName: this.__input.ruleSetName,
          NotificationTarget: this.__input.notificationTarget,
          AdditionalPlayerCount: this.__input.additionalPlayerCount,
          CustomEventData: this.__input.customEventData,
          GameProperties: this.__input.gameProperties,
          GameSessionData: this.__input.gameSessionData,
          BackfillMode: this.__input.backfillMode,
          FlexMatchMode: this.__input.flexMatchMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMatchmakingConfiguration.Configuration.AcceptanceTimeoutSeconds', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          GameSessionQueueArns: this.__input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.__input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.__input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.__input.acceptanceRequired,
          RuleSetName: this.__input.ruleSetName,
          NotificationTarget: this.__input.notificationTarget,
          AdditionalPlayerCount: this.__input.additionalPlayerCount,
          CustomEventData: this.__input.customEventData,
          GameProperties: this.__input.gameProperties,
          GameSessionData: this.__input.gameSessionData,
          BackfillMode: this.__input.backfillMode,
          FlexMatchMode: this.__input.flexMatchMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMatchmakingConfiguration.Configuration.AcceptanceRequired', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          GameSessionQueueArns: this.__input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.__input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.__input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.__input.acceptanceRequired,
          RuleSetName: this.__input.ruleSetName,
          NotificationTarget: this.__input.notificationTarget,
          AdditionalPlayerCount: this.__input.additionalPlayerCount,
          CustomEventData: this.__input.customEventData,
          GameProperties: this.__input.gameProperties,
          GameSessionData: this.__input.gameSessionData,
          BackfillMode: this.__input.backfillMode,
          FlexMatchMode: this.__input.flexMatchMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMatchmakingConfiguration.Configuration.RuleSetName', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          GameSessionQueueArns: this.__input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.__input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.__input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.__input.acceptanceRequired,
          RuleSetName: this.__input.ruleSetName,
          NotificationTarget: this.__input.notificationTarget,
          AdditionalPlayerCount: this.__input.additionalPlayerCount,
          CustomEventData: this.__input.customEventData,
          GameProperties: this.__input.gameProperties,
          GameSessionData: this.__input.gameSessionData,
          BackfillMode: this.__input.backfillMode,
          FlexMatchMode: this.__input.flexMatchMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMatchmakingConfiguration.Configuration.RuleSetArn', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          GameSessionQueueArns: this.__input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.__input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.__input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.__input.acceptanceRequired,
          RuleSetName: this.__input.ruleSetName,
          NotificationTarget: this.__input.notificationTarget,
          AdditionalPlayerCount: this.__input.additionalPlayerCount,
          CustomEventData: this.__input.customEventData,
          GameProperties: this.__input.gameProperties,
          GameSessionData: this.__input.gameSessionData,
          BackfillMode: this.__input.backfillMode,
          FlexMatchMode: this.__input.flexMatchMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMatchmakingConfiguration.Configuration.NotificationTarget', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          GameSessionQueueArns: this.__input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.__input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.__input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.__input.acceptanceRequired,
          RuleSetName: this.__input.ruleSetName,
          NotificationTarget: this.__input.notificationTarget,
          AdditionalPlayerCount: this.__input.additionalPlayerCount,
          CustomEventData: this.__input.customEventData,
          GameProperties: this.__input.gameProperties,
          GameSessionData: this.__input.gameSessionData,
          BackfillMode: this.__input.backfillMode,
          FlexMatchMode: this.__input.flexMatchMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMatchmakingConfiguration.Configuration.AdditionalPlayerCount', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          GameSessionQueueArns: this.__input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.__input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.__input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.__input.acceptanceRequired,
          RuleSetName: this.__input.ruleSetName,
          NotificationTarget: this.__input.notificationTarget,
          AdditionalPlayerCount: this.__input.additionalPlayerCount,
          CustomEventData: this.__input.customEventData,
          GameProperties: this.__input.gameProperties,
          GameSessionData: this.__input.gameSessionData,
          BackfillMode: this.__input.backfillMode,
          FlexMatchMode: this.__input.flexMatchMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMatchmakingConfiguration.Configuration.CustomEventData', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          GameSessionQueueArns: this.__input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.__input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.__input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.__input.acceptanceRequired,
          RuleSetName: this.__input.ruleSetName,
          NotificationTarget: this.__input.notificationTarget,
          AdditionalPlayerCount: this.__input.additionalPlayerCount,
          CustomEventData: this.__input.customEventData,
          GameProperties: this.__input.gameProperties,
          GameSessionData: this.__input.gameSessionData,
          BackfillMode: this.__input.backfillMode,
          FlexMatchMode: this.__input.flexMatchMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMatchmakingConfiguration.Configuration.CreationTime', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          GameSessionQueueArns: this.__input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.__input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.__input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.__input.acceptanceRequired,
          RuleSetName: this.__input.ruleSetName,
          NotificationTarget: this.__input.notificationTarget,
          AdditionalPlayerCount: this.__input.additionalPlayerCount,
          CustomEventData: this.__input.customEventData,
          GameProperties: this.__input.gameProperties,
          GameSessionData: this.__input.gameSessionData,
          BackfillMode: this.__input.backfillMode,
          FlexMatchMode: this.__input.flexMatchMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMatchmakingConfiguration.Configuration.GameProperties', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          GameSessionQueueArns: this.__input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.__input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.__input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.__input.acceptanceRequired,
          RuleSetName: this.__input.ruleSetName,
          NotificationTarget: this.__input.notificationTarget,
          AdditionalPlayerCount: this.__input.additionalPlayerCount,
          CustomEventData: this.__input.customEventData,
          GameProperties: this.__input.gameProperties,
          GameSessionData: this.__input.gameSessionData,
          BackfillMode: this.__input.backfillMode,
          FlexMatchMode: this.__input.flexMatchMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMatchmakingConfiguration.Configuration.GameSessionData', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          GameSessionQueueArns: this.__input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.__input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.__input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.__input.acceptanceRequired,
          RuleSetName: this.__input.ruleSetName,
          NotificationTarget: this.__input.notificationTarget,
          AdditionalPlayerCount: this.__input.additionalPlayerCount,
          CustomEventData: this.__input.customEventData,
          GameProperties: this.__input.gameProperties,
          GameSessionData: this.__input.gameSessionData,
          BackfillMode: this.__input.backfillMode,
          FlexMatchMode: this.__input.flexMatchMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMatchmakingConfiguration.Configuration.BackfillMode', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          GameSessionQueueArns: this.__input.gameSessionQueueArns,
          RequestTimeoutSeconds: this.__input.requestTimeoutSeconds,
          AcceptanceTimeoutSeconds: this.__input.acceptanceTimeoutSeconds,
          AcceptanceRequired: this.__input.acceptanceRequired,
          RuleSetName: this.__input.ruleSetName,
          NotificationTarget: this.__input.notificationTarget,
          AdditionalPlayerCount: this.__input.additionalPlayerCount,
          CustomEventData: this.__input.customEventData,
          GameProperties: this.__input.gameProperties,
          GameSessionData: this.__input.gameSessionData,
          BackfillMode: this.__input.backfillMode,
          FlexMatchMode: this.__input.flexMatchMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMatchmakingConfiguration.Configuration.FlexMatchMode', props);
    return resource.getResponseField('Configuration.FlexMatchMode') as unknown as string;
  }

}

export class GameLiftResponsesUpdateRuntimeConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftUpdateRuntimeConfigurationInput) {
  }

  public get runtimeConfiguration(): GameLiftResponsesUpdateRuntimeConfigurationRuntimeConfiguration {
    return new GameLiftResponsesUpdateRuntimeConfigurationRuntimeConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class GameLiftResponsesUpdateRuntimeConfigurationRuntimeConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftUpdateRuntimeConfigurationInput) {
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
          FleetId: this.__input.fleetId,
          RuntimeConfiguration: {
            ServerProcesses: this.__input.runtimeConfiguration.serverProcesses,
            MaxConcurrentGameSessionActivations: this.__input.runtimeConfiguration.maxConcurrentGameSessionActivations,
            GameSessionActivationTimeoutSeconds: this.__input.runtimeConfiguration.gameSessionActivationTimeoutSeconds,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRuntimeConfiguration.RuntimeConfiguration.ServerProcesses', props);
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
          FleetId: this.__input.fleetId,
          RuntimeConfiguration: {
            ServerProcesses: this.__input.runtimeConfiguration.serverProcesses,
            MaxConcurrentGameSessionActivations: this.__input.runtimeConfiguration.maxConcurrentGameSessionActivations,
            GameSessionActivationTimeoutSeconds: this.__input.runtimeConfiguration.gameSessionActivationTimeoutSeconds,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRuntimeConfiguration.RuntimeConfiguration.MaxConcurrentGameSessionActivations', props);
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
          FleetId: this.__input.fleetId,
          RuntimeConfiguration: {
            ServerProcesses: this.__input.runtimeConfiguration.serverProcesses,
            MaxConcurrentGameSessionActivations: this.__input.runtimeConfiguration.maxConcurrentGameSessionActivations,
            GameSessionActivationTimeoutSeconds: this.__input.runtimeConfiguration.gameSessionActivationTimeoutSeconds,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRuntimeConfiguration.RuntimeConfiguration.GameSessionActivationTimeoutSeconds', props);
    return resource.getResponseField('RuntimeConfiguration.GameSessionActivationTimeoutSeconds') as unknown as number;
  }

}

export class GameLiftResponsesUpdateScript {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftUpdateScriptInput) {
  }

  public get script(): GameLiftResponsesUpdateScriptScript {
    return new GameLiftResponsesUpdateScriptScript(this.__scope, this.__resources, this.__input);
  }

}

export class GameLiftResponsesUpdateScriptScript {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftUpdateScriptInput) {
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
          ScriptId: this.__input.scriptId,
          Name: this.__input.name,
          Version: this.__input.version,
          StorageLocation: {
            Bucket: this.__input.storageLocation?.bucket,
            Key: this.__input.storageLocation?.key,
            RoleArn: this.__input.storageLocation?.roleArn,
            ObjectVersion: this.__input.storageLocation?.objectVersion,
          },
          ZipFile: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateScript.Script.ScriptId', props);
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
          ScriptId: this.__input.scriptId,
          Name: this.__input.name,
          Version: this.__input.version,
          StorageLocation: {
            Bucket: this.__input.storageLocation?.bucket,
            Key: this.__input.storageLocation?.key,
            RoleArn: this.__input.storageLocation?.roleArn,
            ObjectVersion: this.__input.storageLocation?.objectVersion,
          },
          ZipFile: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateScript.Script.ScriptArn', props);
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
          ScriptId: this.__input.scriptId,
          Name: this.__input.name,
          Version: this.__input.version,
          StorageLocation: {
            Bucket: this.__input.storageLocation?.bucket,
            Key: this.__input.storageLocation?.key,
            RoleArn: this.__input.storageLocation?.roleArn,
            ObjectVersion: this.__input.storageLocation?.objectVersion,
          },
          ZipFile: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateScript.Script.Name', props);
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
          ScriptId: this.__input.scriptId,
          Name: this.__input.name,
          Version: this.__input.version,
          StorageLocation: {
            Bucket: this.__input.storageLocation?.bucket,
            Key: this.__input.storageLocation?.key,
            RoleArn: this.__input.storageLocation?.roleArn,
            ObjectVersion: this.__input.storageLocation?.objectVersion,
          },
          ZipFile: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateScript.Script.Version', props);
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
          ScriptId: this.__input.scriptId,
          Name: this.__input.name,
          Version: this.__input.version,
          StorageLocation: {
            Bucket: this.__input.storageLocation?.bucket,
            Key: this.__input.storageLocation?.key,
            RoleArn: this.__input.storageLocation?.roleArn,
            ObjectVersion: this.__input.storageLocation?.objectVersion,
          },
          ZipFile: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateScript.Script.SizeOnDisk', props);
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
          ScriptId: this.__input.scriptId,
          Name: this.__input.name,
          Version: this.__input.version,
          StorageLocation: {
            Bucket: this.__input.storageLocation?.bucket,
            Key: this.__input.storageLocation?.key,
            RoleArn: this.__input.storageLocation?.roleArn,
            ObjectVersion: this.__input.storageLocation?.objectVersion,
          },
          ZipFile: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateScript.Script.CreationTime', props);
    return resource.getResponseField('Script.CreationTime') as unknown as string;
  }

  public get storageLocation(): GameLiftResponsesUpdateScriptScriptStorageLocation {
    return new GameLiftResponsesUpdateScriptScriptStorageLocation(this.__scope, this.__resources, this.__input);
  }

}

export class GameLiftResponsesUpdateScriptScriptStorageLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftUpdateScriptInput) {
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
          ScriptId: this.__input.scriptId,
          Name: this.__input.name,
          Version: this.__input.version,
          StorageLocation: {
            Bucket: this.__input.storageLocation?.bucket,
            Key: this.__input.storageLocation?.key,
            RoleArn: this.__input.storageLocation?.roleArn,
            ObjectVersion: this.__input.storageLocation?.objectVersion,
          },
          ZipFile: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateScript.Script.StorageLocation.Bucket', props);
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
          ScriptId: this.__input.scriptId,
          Name: this.__input.name,
          Version: this.__input.version,
          StorageLocation: {
            Bucket: this.__input.storageLocation?.bucket,
            Key: this.__input.storageLocation?.key,
            RoleArn: this.__input.storageLocation?.roleArn,
            ObjectVersion: this.__input.storageLocation?.objectVersion,
          },
          ZipFile: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateScript.Script.StorageLocation.Key', props);
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
          ScriptId: this.__input.scriptId,
          Name: this.__input.name,
          Version: this.__input.version,
          StorageLocation: {
            Bucket: this.__input.storageLocation?.bucket,
            Key: this.__input.storageLocation?.key,
            RoleArn: this.__input.storageLocation?.roleArn,
            ObjectVersion: this.__input.storageLocation?.objectVersion,
          },
          ZipFile: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateScript.Script.StorageLocation.RoleArn', props);
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
          ScriptId: this.__input.scriptId,
          Name: this.__input.name,
          Version: this.__input.version,
          StorageLocation: {
            Bucket: this.__input.storageLocation?.bucket,
            Key: this.__input.storageLocation?.key,
            RoleArn: this.__input.storageLocation?.roleArn,
            ObjectVersion: this.__input.storageLocation?.objectVersion,
          },
          ZipFile: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateScript.Script.StorageLocation.ObjectVersion', props);
    return resource.getResponseField('Script.StorageLocation.ObjectVersion') as unknown as string;
  }

}

export class GameLiftResponsesValidateMatchmakingRuleSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GameLiftValidateMatchmakingRuleSetInput) {
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
          RuleSetBody: this.__input.ruleSetBody,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ValidateMatchmakingRuleSet.Valid', props);
    return resource.getResponseField('Valid') as unknown as boolean;
  }

}

