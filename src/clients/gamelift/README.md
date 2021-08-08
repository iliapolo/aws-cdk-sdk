# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### GameLiftClient <a name="aws-cdk-sdk.gamelift.GameLiftClient"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftClient.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `acceptMatch` <a name="aws-cdk-sdk.gamelift.GameLiftClient.acceptMatch"></a>

```typescript
public acceptMatch(input: GameLiftAcceptMatchInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftAcceptMatchInput`](#aws-cdk-sdk.gamelift.GameLiftAcceptMatchInput)

---

##### `claimGameServer` <a name="aws-cdk-sdk.gamelift.GameLiftClient.claimGameServer"></a>

```typescript
public claimGameServer(input: GameLiftClaimGameServerInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftClaimGameServerInput`](#aws-cdk-sdk.gamelift.GameLiftClaimGameServerInput)

---

##### `createAlias` <a name="aws-cdk-sdk.gamelift.GameLiftClient.createAlias"></a>

```typescript
public createAlias(input: GameLiftCreateAliasInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftCreateAliasInput`](#aws-cdk-sdk.gamelift.GameLiftCreateAliasInput)

---

##### `createBuild` <a name="aws-cdk-sdk.gamelift.GameLiftClient.createBuild"></a>

```typescript
public createBuild(input: GameLiftCreateBuildInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftCreateBuildInput`](#aws-cdk-sdk.gamelift.GameLiftCreateBuildInput)

---

##### `createFleet` <a name="aws-cdk-sdk.gamelift.GameLiftClient.createFleet"></a>

```typescript
public createFleet(input: GameLiftCreateFleetInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftCreateFleetInput`](#aws-cdk-sdk.gamelift.GameLiftCreateFleetInput)

---

##### `createGameServerGroup` <a name="aws-cdk-sdk.gamelift.GameLiftClient.createGameServerGroup"></a>

```typescript
public createGameServerGroup(input: GameLiftCreateGameServerGroupInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftCreateGameServerGroupInput`](#aws-cdk-sdk.gamelift.GameLiftCreateGameServerGroupInput)

---

##### `createGameSession` <a name="aws-cdk-sdk.gamelift.GameLiftClient.createGameSession"></a>

```typescript
public createGameSession(input: GameLiftCreateGameSessionInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftCreateGameSessionInput`](#aws-cdk-sdk.gamelift.GameLiftCreateGameSessionInput)

---

##### `createGameSessionQueue` <a name="aws-cdk-sdk.gamelift.GameLiftClient.createGameSessionQueue"></a>

```typescript
public createGameSessionQueue(input: GameLiftCreateGameSessionQueueInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftCreateGameSessionQueueInput`](#aws-cdk-sdk.gamelift.GameLiftCreateGameSessionQueueInput)

---

##### `createMatchmakingConfiguration` <a name="aws-cdk-sdk.gamelift.GameLiftClient.createMatchmakingConfiguration"></a>

```typescript
public createMatchmakingConfiguration(input: GameLiftCreateMatchmakingConfigurationInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftCreateMatchmakingConfigurationInput`](#aws-cdk-sdk.gamelift.GameLiftCreateMatchmakingConfigurationInput)

---

##### `createMatchmakingRuleSet` <a name="aws-cdk-sdk.gamelift.GameLiftClient.createMatchmakingRuleSet"></a>

```typescript
public createMatchmakingRuleSet(input: GameLiftCreateMatchmakingRuleSetInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftCreateMatchmakingRuleSetInput`](#aws-cdk-sdk.gamelift.GameLiftCreateMatchmakingRuleSetInput)

---

##### `createPlayerSession` <a name="aws-cdk-sdk.gamelift.GameLiftClient.createPlayerSession"></a>

```typescript
public createPlayerSession(input: GameLiftCreatePlayerSessionInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftCreatePlayerSessionInput`](#aws-cdk-sdk.gamelift.GameLiftCreatePlayerSessionInput)

---

##### `createPlayerSessions` <a name="aws-cdk-sdk.gamelift.GameLiftClient.createPlayerSessions"></a>

```typescript
public createPlayerSessions(input: GameLiftCreatePlayerSessionsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftCreatePlayerSessionsInput`](#aws-cdk-sdk.gamelift.GameLiftCreatePlayerSessionsInput)

---

##### `createScript` <a name="aws-cdk-sdk.gamelift.GameLiftClient.createScript"></a>

```typescript
public createScript(input: GameLiftCreateScriptInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftCreateScriptInput`](#aws-cdk-sdk.gamelift.GameLiftCreateScriptInput)

---

##### `createVpcPeeringAuthorization` <a name="aws-cdk-sdk.gamelift.GameLiftClient.createVpcPeeringAuthorization"></a>

```typescript
public createVpcPeeringAuthorization(input: GameLiftCreateVpcPeeringAuthorizationInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftCreateVpcPeeringAuthorizationInput`](#aws-cdk-sdk.gamelift.GameLiftCreateVpcPeeringAuthorizationInput)

---

##### `createVpcPeeringConnection` <a name="aws-cdk-sdk.gamelift.GameLiftClient.createVpcPeeringConnection"></a>

```typescript
public createVpcPeeringConnection(input: GameLiftCreateVpcPeeringConnectionInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftCreateVpcPeeringConnectionInput`](#aws-cdk-sdk.gamelift.GameLiftCreateVpcPeeringConnectionInput)

---

##### `deleteAlias` <a name="aws-cdk-sdk.gamelift.GameLiftClient.deleteAlias"></a>

```typescript
public deleteAlias(input: GameLiftDeleteAliasInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDeleteAliasInput`](#aws-cdk-sdk.gamelift.GameLiftDeleteAliasInput)

---

##### `deleteBuild` <a name="aws-cdk-sdk.gamelift.GameLiftClient.deleteBuild"></a>

```typescript
public deleteBuild(input: GameLiftDeleteBuildInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDeleteBuildInput`](#aws-cdk-sdk.gamelift.GameLiftDeleteBuildInput)

---

##### `deleteFleet` <a name="aws-cdk-sdk.gamelift.GameLiftClient.deleteFleet"></a>

```typescript
public deleteFleet(input: GameLiftDeleteFleetInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDeleteFleetInput`](#aws-cdk-sdk.gamelift.GameLiftDeleteFleetInput)

---

##### `deleteGameServerGroup` <a name="aws-cdk-sdk.gamelift.GameLiftClient.deleteGameServerGroup"></a>

```typescript
public deleteGameServerGroup(input: GameLiftDeleteGameServerGroupInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDeleteGameServerGroupInput`](#aws-cdk-sdk.gamelift.GameLiftDeleteGameServerGroupInput)

---

##### `deleteGameSessionQueue` <a name="aws-cdk-sdk.gamelift.GameLiftClient.deleteGameSessionQueue"></a>

```typescript
public deleteGameSessionQueue(input: GameLiftDeleteGameSessionQueueInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDeleteGameSessionQueueInput`](#aws-cdk-sdk.gamelift.GameLiftDeleteGameSessionQueueInput)

---

##### `deleteMatchmakingConfiguration` <a name="aws-cdk-sdk.gamelift.GameLiftClient.deleteMatchmakingConfiguration"></a>

```typescript
public deleteMatchmakingConfiguration(input: GameLiftDeleteMatchmakingConfigurationInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDeleteMatchmakingConfigurationInput`](#aws-cdk-sdk.gamelift.GameLiftDeleteMatchmakingConfigurationInput)

---

##### `deleteMatchmakingRuleSet` <a name="aws-cdk-sdk.gamelift.GameLiftClient.deleteMatchmakingRuleSet"></a>

```typescript
public deleteMatchmakingRuleSet(input: GameLiftDeleteMatchmakingRuleSetInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDeleteMatchmakingRuleSetInput`](#aws-cdk-sdk.gamelift.GameLiftDeleteMatchmakingRuleSetInput)

---

##### `deleteScalingPolicy` <a name="aws-cdk-sdk.gamelift.GameLiftClient.deleteScalingPolicy"></a>

```typescript
public deleteScalingPolicy(input: GameLiftDeleteScalingPolicyInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDeleteScalingPolicyInput`](#aws-cdk-sdk.gamelift.GameLiftDeleteScalingPolicyInput)

---

##### `deleteScript` <a name="aws-cdk-sdk.gamelift.GameLiftClient.deleteScript"></a>

```typescript
public deleteScript(input: GameLiftDeleteScriptInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDeleteScriptInput`](#aws-cdk-sdk.gamelift.GameLiftDeleteScriptInput)

---

##### `deleteVpcPeeringAuthorization` <a name="aws-cdk-sdk.gamelift.GameLiftClient.deleteVpcPeeringAuthorization"></a>

```typescript
public deleteVpcPeeringAuthorization(input: GameLiftDeleteVpcPeeringAuthorizationInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDeleteVpcPeeringAuthorizationInput`](#aws-cdk-sdk.gamelift.GameLiftDeleteVpcPeeringAuthorizationInput)

---

##### `deleteVpcPeeringConnection` <a name="aws-cdk-sdk.gamelift.GameLiftClient.deleteVpcPeeringConnection"></a>

```typescript
public deleteVpcPeeringConnection(input: GameLiftDeleteVpcPeeringConnectionInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDeleteVpcPeeringConnectionInput`](#aws-cdk-sdk.gamelift.GameLiftDeleteVpcPeeringConnectionInput)

---

##### `deregisterGameServer` <a name="aws-cdk-sdk.gamelift.GameLiftClient.deregisterGameServer"></a>

```typescript
public deregisterGameServer(input: GameLiftDeregisterGameServerInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDeregisterGameServerInput`](#aws-cdk-sdk.gamelift.GameLiftDeregisterGameServerInput)

---

##### `describeAlias` <a name="aws-cdk-sdk.gamelift.GameLiftClient.describeAlias"></a>

```typescript
public describeAlias(input: GameLiftDescribeAliasInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDescribeAliasInput`](#aws-cdk-sdk.gamelift.GameLiftDescribeAliasInput)

---

##### `describeBuild` <a name="aws-cdk-sdk.gamelift.GameLiftClient.describeBuild"></a>

```typescript
public describeBuild(input: GameLiftDescribeBuildInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDescribeBuildInput`](#aws-cdk-sdk.gamelift.GameLiftDescribeBuildInput)

---

##### `describeEc2InstanceLimits` <a name="aws-cdk-sdk.gamelift.GameLiftClient.describeEc2InstanceLimits"></a>

```typescript
public describeEc2InstanceLimits(input: GameLiftDescribeEc2InstanceLimitsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDescribeEc2InstanceLimitsInput`](#aws-cdk-sdk.gamelift.GameLiftDescribeEc2InstanceLimitsInput)

---

##### `describeFleetAttributes` <a name="aws-cdk-sdk.gamelift.GameLiftClient.describeFleetAttributes"></a>

```typescript
public describeFleetAttributes(input: GameLiftDescribeFleetAttributesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDescribeFleetAttributesInput`](#aws-cdk-sdk.gamelift.GameLiftDescribeFleetAttributesInput)

---

##### `describeFleetCapacity` <a name="aws-cdk-sdk.gamelift.GameLiftClient.describeFleetCapacity"></a>

```typescript
public describeFleetCapacity(input: GameLiftDescribeFleetCapacityInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDescribeFleetCapacityInput`](#aws-cdk-sdk.gamelift.GameLiftDescribeFleetCapacityInput)

---

##### `describeFleetEvents` <a name="aws-cdk-sdk.gamelift.GameLiftClient.describeFleetEvents"></a>

```typescript
public describeFleetEvents(input: GameLiftDescribeFleetEventsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDescribeFleetEventsInput`](#aws-cdk-sdk.gamelift.GameLiftDescribeFleetEventsInput)

---

##### `describeFleetPortSettings` <a name="aws-cdk-sdk.gamelift.GameLiftClient.describeFleetPortSettings"></a>

```typescript
public describeFleetPortSettings(input: GameLiftDescribeFleetPortSettingsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDescribeFleetPortSettingsInput`](#aws-cdk-sdk.gamelift.GameLiftDescribeFleetPortSettingsInput)

---

##### `describeFleetUtilization` <a name="aws-cdk-sdk.gamelift.GameLiftClient.describeFleetUtilization"></a>

```typescript
public describeFleetUtilization(input: GameLiftDescribeFleetUtilizationInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDescribeFleetUtilizationInput`](#aws-cdk-sdk.gamelift.GameLiftDescribeFleetUtilizationInput)

---

##### `describeGameServer` <a name="aws-cdk-sdk.gamelift.GameLiftClient.describeGameServer"></a>

```typescript
public describeGameServer(input: GameLiftDescribeGameServerInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDescribeGameServerInput`](#aws-cdk-sdk.gamelift.GameLiftDescribeGameServerInput)

---

##### `describeGameServerGroup` <a name="aws-cdk-sdk.gamelift.GameLiftClient.describeGameServerGroup"></a>

```typescript
public describeGameServerGroup(input: GameLiftDescribeGameServerGroupInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDescribeGameServerGroupInput`](#aws-cdk-sdk.gamelift.GameLiftDescribeGameServerGroupInput)

---

##### `describeGameServerInstances` <a name="aws-cdk-sdk.gamelift.GameLiftClient.describeGameServerInstances"></a>

```typescript
public describeGameServerInstances(input: GameLiftDescribeGameServerInstancesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDescribeGameServerInstancesInput`](#aws-cdk-sdk.gamelift.GameLiftDescribeGameServerInstancesInput)

---

##### `describeGameSessionDetails` <a name="aws-cdk-sdk.gamelift.GameLiftClient.describeGameSessionDetails"></a>

```typescript
public describeGameSessionDetails(input: GameLiftDescribeGameSessionDetailsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDescribeGameSessionDetailsInput`](#aws-cdk-sdk.gamelift.GameLiftDescribeGameSessionDetailsInput)

---

##### `describeGameSessionPlacement` <a name="aws-cdk-sdk.gamelift.GameLiftClient.describeGameSessionPlacement"></a>

```typescript
public describeGameSessionPlacement(input: GameLiftDescribeGameSessionPlacementInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDescribeGameSessionPlacementInput`](#aws-cdk-sdk.gamelift.GameLiftDescribeGameSessionPlacementInput)

---

##### `describeGameSessionQueues` <a name="aws-cdk-sdk.gamelift.GameLiftClient.describeGameSessionQueues"></a>

```typescript
public describeGameSessionQueues(input: GameLiftDescribeGameSessionQueuesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDescribeGameSessionQueuesInput`](#aws-cdk-sdk.gamelift.GameLiftDescribeGameSessionQueuesInput)

---

##### `describeGameSessions` <a name="aws-cdk-sdk.gamelift.GameLiftClient.describeGameSessions"></a>

```typescript
public describeGameSessions(input: GameLiftDescribeGameSessionsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDescribeGameSessionsInput`](#aws-cdk-sdk.gamelift.GameLiftDescribeGameSessionsInput)

---

##### `describeInstances` <a name="aws-cdk-sdk.gamelift.GameLiftClient.describeInstances"></a>

```typescript
public describeInstances(input: GameLiftDescribeInstancesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDescribeInstancesInput`](#aws-cdk-sdk.gamelift.GameLiftDescribeInstancesInput)

---

##### `describeMatchmaking` <a name="aws-cdk-sdk.gamelift.GameLiftClient.describeMatchmaking"></a>

```typescript
public describeMatchmaking(input: GameLiftDescribeMatchmakingInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDescribeMatchmakingInput`](#aws-cdk-sdk.gamelift.GameLiftDescribeMatchmakingInput)

---

##### `describeMatchmakingConfigurations` <a name="aws-cdk-sdk.gamelift.GameLiftClient.describeMatchmakingConfigurations"></a>

```typescript
public describeMatchmakingConfigurations(input: GameLiftDescribeMatchmakingConfigurationsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDescribeMatchmakingConfigurationsInput`](#aws-cdk-sdk.gamelift.GameLiftDescribeMatchmakingConfigurationsInput)

---

##### `describeMatchmakingRuleSets` <a name="aws-cdk-sdk.gamelift.GameLiftClient.describeMatchmakingRuleSets"></a>

```typescript
public describeMatchmakingRuleSets(input: GameLiftDescribeMatchmakingRuleSetsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDescribeMatchmakingRuleSetsInput`](#aws-cdk-sdk.gamelift.GameLiftDescribeMatchmakingRuleSetsInput)

---

##### `describePlayerSessions` <a name="aws-cdk-sdk.gamelift.GameLiftClient.describePlayerSessions"></a>

```typescript
public describePlayerSessions(input: GameLiftDescribePlayerSessionsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDescribePlayerSessionsInput`](#aws-cdk-sdk.gamelift.GameLiftDescribePlayerSessionsInput)

---

##### `describeRuntimeConfiguration` <a name="aws-cdk-sdk.gamelift.GameLiftClient.describeRuntimeConfiguration"></a>

```typescript
public describeRuntimeConfiguration(input: GameLiftDescribeRuntimeConfigurationInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDescribeRuntimeConfigurationInput`](#aws-cdk-sdk.gamelift.GameLiftDescribeRuntimeConfigurationInput)

---

##### `describeScalingPolicies` <a name="aws-cdk-sdk.gamelift.GameLiftClient.describeScalingPolicies"></a>

```typescript
public describeScalingPolicies(input: GameLiftDescribeScalingPoliciesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDescribeScalingPoliciesInput`](#aws-cdk-sdk.gamelift.GameLiftDescribeScalingPoliciesInput)

---

##### `describeScript` <a name="aws-cdk-sdk.gamelift.GameLiftClient.describeScript"></a>

```typescript
public describeScript(input: GameLiftDescribeScriptInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDescribeScriptInput`](#aws-cdk-sdk.gamelift.GameLiftDescribeScriptInput)

---

##### `describeVpcPeeringAuthorizations` <a name="aws-cdk-sdk.gamelift.GameLiftClient.describeVpcPeeringAuthorizations"></a>

```typescript
public describeVpcPeeringAuthorizations()
```

##### `describeVpcPeeringConnections` <a name="aws-cdk-sdk.gamelift.GameLiftClient.describeVpcPeeringConnections"></a>

```typescript
public describeVpcPeeringConnections(input: GameLiftDescribeVpcPeeringConnectionsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDescribeVpcPeeringConnectionsInput`](#aws-cdk-sdk.gamelift.GameLiftDescribeVpcPeeringConnectionsInput)

---

##### `fetchGameSessionLogUrl` <a name="aws-cdk-sdk.gamelift.GameLiftClient.fetchGameSessionLogUrl"></a>

```typescript
public fetchGameSessionLogUrl(input: GameLiftGetGameSessionLogUrlInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftGetGameSessionLogUrlInput`](#aws-cdk-sdk.gamelift.GameLiftGetGameSessionLogUrlInput)

---

##### `fetchInstanceAccess` <a name="aws-cdk-sdk.gamelift.GameLiftClient.fetchInstanceAccess"></a>

```typescript
public fetchInstanceAccess(input: GameLiftGetInstanceAccessInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftGetInstanceAccessInput`](#aws-cdk-sdk.gamelift.GameLiftGetInstanceAccessInput)

---

##### `listAliases` <a name="aws-cdk-sdk.gamelift.GameLiftClient.listAliases"></a>

```typescript
public listAliases(input: GameLiftListAliasesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftListAliasesInput`](#aws-cdk-sdk.gamelift.GameLiftListAliasesInput)

---

##### `listBuilds` <a name="aws-cdk-sdk.gamelift.GameLiftClient.listBuilds"></a>

```typescript
public listBuilds(input: GameLiftListBuildsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftListBuildsInput`](#aws-cdk-sdk.gamelift.GameLiftListBuildsInput)

---

##### `listFleets` <a name="aws-cdk-sdk.gamelift.GameLiftClient.listFleets"></a>

```typescript
public listFleets(input: GameLiftListFleetsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftListFleetsInput`](#aws-cdk-sdk.gamelift.GameLiftListFleetsInput)

---

##### `listGameServerGroups` <a name="aws-cdk-sdk.gamelift.GameLiftClient.listGameServerGroups"></a>

```typescript
public listGameServerGroups(input: GameLiftListGameServerGroupsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftListGameServerGroupsInput`](#aws-cdk-sdk.gamelift.GameLiftListGameServerGroupsInput)

---

##### `listGameServers` <a name="aws-cdk-sdk.gamelift.GameLiftClient.listGameServers"></a>

```typescript
public listGameServers(input: GameLiftListGameServersInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftListGameServersInput`](#aws-cdk-sdk.gamelift.GameLiftListGameServersInput)

---

##### `listScripts` <a name="aws-cdk-sdk.gamelift.GameLiftClient.listScripts"></a>

```typescript
public listScripts(input: GameLiftListScriptsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftListScriptsInput`](#aws-cdk-sdk.gamelift.GameLiftListScriptsInput)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.gamelift.GameLiftClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: GameLiftListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftListTagsForResourceRequest`](#aws-cdk-sdk.gamelift.GameLiftListTagsForResourceRequest)

---

##### `putScalingPolicy` <a name="aws-cdk-sdk.gamelift.GameLiftClient.putScalingPolicy"></a>

```typescript
public putScalingPolicy(input: GameLiftPutScalingPolicyInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftPutScalingPolicyInput`](#aws-cdk-sdk.gamelift.GameLiftPutScalingPolicyInput)

---

##### `registerGameServer` <a name="aws-cdk-sdk.gamelift.GameLiftClient.registerGameServer"></a>

```typescript
public registerGameServer(input: GameLiftRegisterGameServerInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftRegisterGameServerInput`](#aws-cdk-sdk.gamelift.GameLiftRegisterGameServerInput)

---

##### `requestUploadCredentials` <a name="aws-cdk-sdk.gamelift.GameLiftClient.requestUploadCredentials"></a>

```typescript
public requestUploadCredentials(input: GameLiftRequestUploadCredentialsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftRequestUploadCredentialsInput`](#aws-cdk-sdk.gamelift.GameLiftRequestUploadCredentialsInput)

---

##### `resolveAlias` <a name="aws-cdk-sdk.gamelift.GameLiftClient.resolveAlias"></a>

```typescript
public resolveAlias(input: GameLiftResolveAliasInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftResolveAliasInput`](#aws-cdk-sdk.gamelift.GameLiftResolveAliasInput)

---

##### `resumeGameServerGroup` <a name="aws-cdk-sdk.gamelift.GameLiftClient.resumeGameServerGroup"></a>

```typescript
public resumeGameServerGroup(input: GameLiftResumeGameServerGroupInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftResumeGameServerGroupInput`](#aws-cdk-sdk.gamelift.GameLiftResumeGameServerGroupInput)

---

##### `searchGameSessions` <a name="aws-cdk-sdk.gamelift.GameLiftClient.searchGameSessions"></a>

```typescript
public searchGameSessions(input: GameLiftSearchGameSessionsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftSearchGameSessionsInput`](#aws-cdk-sdk.gamelift.GameLiftSearchGameSessionsInput)

---

##### `startFleetActions` <a name="aws-cdk-sdk.gamelift.GameLiftClient.startFleetActions"></a>

```typescript
public startFleetActions(input: GameLiftStartFleetActionsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftStartFleetActionsInput`](#aws-cdk-sdk.gamelift.GameLiftStartFleetActionsInput)

---

##### `startGameSessionPlacement` <a name="aws-cdk-sdk.gamelift.GameLiftClient.startGameSessionPlacement"></a>

```typescript
public startGameSessionPlacement(input: GameLiftStartGameSessionPlacementInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftStartGameSessionPlacementInput`](#aws-cdk-sdk.gamelift.GameLiftStartGameSessionPlacementInput)

---

##### `startMatchBackfill` <a name="aws-cdk-sdk.gamelift.GameLiftClient.startMatchBackfill"></a>

```typescript
public startMatchBackfill(input: GameLiftStartMatchBackfillInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftStartMatchBackfillInput`](#aws-cdk-sdk.gamelift.GameLiftStartMatchBackfillInput)

---

##### `startMatchmaking` <a name="aws-cdk-sdk.gamelift.GameLiftClient.startMatchmaking"></a>

```typescript
public startMatchmaking(input: GameLiftStartMatchmakingInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftStartMatchmakingInput`](#aws-cdk-sdk.gamelift.GameLiftStartMatchmakingInput)

---

##### `stopFleetActions` <a name="aws-cdk-sdk.gamelift.GameLiftClient.stopFleetActions"></a>

```typescript
public stopFleetActions(input: GameLiftStopFleetActionsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftStopFleetActionsInput`](#aws-cdk-sdk.gamelift.GameLiftStopFleetActionsInput)

---

##### `stopGameSessionPlacement` <a name="aws-cdk-sdk.gamelift.GameLiftClient.stopGameSessionPlacement"></a>

```typescript
public stopGameSessionPlacement(input: GameLiftStopGameSessionPlacementInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftStopGameSessionPlacementInput`](#aws-cdk-sdk.gamelift.GameLiftStopGameSessionPlacementInput)

---

##### `stopMatchmaking` <a name="aws-cdk-sdk.gamelift.GameLiftClient.stopMatchmaking"></a>

```typescript
public stopMatchmaking(input: GameLiftStopMatchmakingInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftStopMatchmakingInput`](#aws-cdk-sdk.gamelift.GameLiftStopMatchmakingInput)

---

##### `suspendGameServerGroup` <a name="aws-cdk-sdk.gamelift.GameLiftClient.suspendGameServerGroup"></a>

```typescript
public suspendGameServerGroup(input: GameLiftSuspendGameServerGroupInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftSuspendGameServerGroupInput`](#aws-cdk-sdk.gamelift.GameLiftSuspendGameServerGroupInput)

---

##### `tagResource` <a name="aws-cdk-sdk.gamelift.GameLiftClient.tagResource"></a>

```typescript
public tagResource(input: GameLiftTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftTagResourceRequest`](#aws-cdk-sdk.gamelift.GameLiftTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.gamelift.GameLiftClient.untagResource"></a>

```typescript
public untagResource(input: GameLiftUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftUntagResourceRequest`](#aws-cdk-sdk.gamelift.GameLiftUntagResourceRequest)

---

##### `updateAlias` <a name="aws-cdk-sdk.gamelift.GameLiftClient.updateAlias"></a>

```typescript
public updateAlias(input: GameLiftUpdateAliasInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftUpdateAliasInput`](#aws-cdk-sdk.gamelift.GameLiftUpdateAliasInput)

---

##### `updateBuild` <a name="aws-cdk-sdk.gamelift.GameLiftClient.updateBuild"></a>

```typescript
public updateBuild(input: GameLiftUpdateBuildInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftUpdateBuildInput`](#aws-cdk-sdk.gamelift.GameLiftUpdateBuildInput)

---

##### `updateFleetAttributes` <a name="aws-cdk-sdk.gamelift.GameLiftClient.updateFleetAttributes"></a>

```typescript
public updateFleetAttributes(input: GameLiftUpdateFleetAttributesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftUpdateFleetAttributesInput`](#aws-cdk-sdk.gamelift.GameLiftUpdateFleetAttributesInput)

---

##### `updateFleetCapacity` <a name="aws-cdk-sdk.gamelift.GameLiftClient.updateFleetCapacity"></a>

```typescript
public updateFleetCapacity(input: GameLiftUpdateFleetCapacityInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftUpdateFleetCapacityInput`](#aws-cdk-sdk.gamelift.GameLiftUpdateFleetCapacityInput)

---

##### `updateFleetPortSettings` <a name="aws-cdk-sdk.gamelift.GameLiftClient.updateFleetPortSettings"></a>

```typescript
public updateFleetPortSettings(input: GameLiftUpdateFleetPortSettingsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftUpdateFleetPortSettingsInput`](#aws-cdk-sdk.gamelift.GameLiftUpdateFleetPortSettingsInput)

---

##### `updateGameServer` <a name="aws-cdk-sdk.gamelift.GameLiftClient.updateGameServer"></a>

```typescript
public updateGameServer(input: GameLiftUpdateGameServerInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftUpdateGameServerInput`](#aws-cdk-sdk.gamelift.GameLiftUpdateGameServerInput)

---

##### `updateGameServerGroup` <a name="aws-cdk-sdk.gamelift.GameLiftClient.updateGameServerGroup"></a>

```typescript
public updateGameServerGroup(input: GameLiftUpdateGameServerGroupInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftUpdateGameServerGroupInput`](#aws-cdk-sdk.gamelift.GameLiftUpdateGameServerGroupInput)

---

##### `updateGameSession` <a name="aws-cdk-sdk.gamelift.GameLiftClient.updateGameSession"></a>

```typescript
public updateGameSession(input: GameLiftUpdateGameSessionInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftUpdateGameSessionInput`](#aws-cdk-sdk.gamelift.GameLiftUpdateGameSessionInput)

---

##### `updateGameSessionQueue` <a name="aws-cdk-sdk.gamelift.GameLiftClient.updateGameSessionQueue"></a>

```typescript
public updateGameSessionQueue(input: GameLiftUpdateGameSessionQueueInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftUpdateGameSessionQueueInput`](#aws-cdk-sdk.gamelift.GameLiftUpdateGameSessionQueueInput)

---

##### `updateMatchmakingConfiguration` <a name="aws-cdk-sdk.gamelift.GameLiftClient.updateMatchmakingConfiguration"></a>

```typescript
public updateMatchmakingConfiguration(input: GameLiftUpdateMatchmakingConfigurationInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftUpdateMatchmakingConfigurationInput`](#aws-cdk-sdk.gamelift.GameLiftUpdateMatchmakingConfigurationInput)

---

##### `updateRuntimeConfiguration` <a name="aws-cdk-sdk.gamelift.GameLiftClient.updateRuntimeConfiguration"></a>

```typescript
public updateRuntimeConfiguration(input: GameLiftUpdateRuntimeConfigurationInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftUpdateRuntimeConfigurationInput`](#aws-cdk-sdk.gamelift.GameLiftUpdateRuntimeConfigurationInput)

---

##### `updateScript` <a name="aws-cdk-sdk.gamelift.GameLiftClient.updateScript"></a>

```typescript
public updateScript(input: GameLiftUpdateScriptInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftUpdateScriptInput`](#aws-cdk-sdk.gamelift.GameLiftUpdateScriptInput)

---

##### `validateMatchmakingRuleSet` <a name="aws-cdk-sdk.gamelift.GameLiftClient.validateMatchmakingRuleSet"></a>

```typescript
public validateMatchmakingRuleSet(input: GameLiftValidateMatchmakingRuleSetInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftValidateMatchmakingRuleSetInput`](#aws-cdk-sdk.gamelift.GameLiftValidateMatchmakingRuleSetInput)

---




## Structs <a name="Structs"></a>

### GameLiftAcceptMatchInput <a name="aws-cdk-sdk.gamelift.GameLiftAcceptMatchInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftAcceptMatchInput: gamelift.GameLiftAcceptMatchInput = { ... }
```

##### `acceptanceType`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftAcceptMatchInput.property.acceptanceType"></a>

- *Type:* `string`

---

##### `playerIds`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftAcceptMatchInput.property.playerIds"></a>

- *Type:* `string`[]

---

##### `ticketId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftAcceptMatchInput.property.ticketId"></a>

- *Type:* `string`

---

### GameLiftAcceptMatchOutput <a name="aws-cdk-sdk.gamelift.GameLiftAcceptMatchOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftAcceptMatchOutput: gamelift.GameLiftAcceptMatchOutput = { ... }
```

### GameLiftAlias <a name="aws-cdk-sdk.gamelift.GameLiftAlias"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftAlias: gamelift.GameLiftAlias = { ... }
```

##### `aliasArn`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftAlias.property.aliasArn"></a>

- *Type:* `string`

---

##### `aliasId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftAlias.property.aliasId"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftAlias.property.creationTime"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftAlias.property.description"></a>

- *Type:* `string`

---

##### `lastUpdatedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftAlias.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftAlias.property.name"></a>

- *Type:* `string`

---

##### `routingStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftAlias.property.routingStrategy"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftRoutingStrategy`](#aws-cdk-sdk.gamelift.GameLiftRoutingStrategy)

---

### GameLiftAttributeValue <a name="aws-cdk-sdk.gamelift.GameLiftAttributeValue"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftAttributeValue: gamelift.GameLiftAttributeValue = { ... }
```

##### `n`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftAttributeValue.property.n"></a>

- *Type:* `number`

---

##### `s`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftAttributeValue.property.s"></a>

- *Type:* `string`

---

##### `sdm`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftAttributeValue.property.sdm"></a>

- *Type:* {[ key: string ]: `number`}

---

##### `sl`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftAttributeValue.property.sl"></a>

- *Type:* `string`[]

---

### GameLiftAwsCredentials <a name="aws-cdk-sdk.gamelift.GameLiftAwsCredentials"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftAwsCredentials: gamelift.GameLiftAwsCredentials = { ... }
```

##### `accessKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftAwsCredentials.property.accessKeyId"></a>

- *Type:* `string`

---

##### `secretAccessKey`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftAwsCredentials.property.secretAccessKey"></a>

- *Type:* `string`

---

##### `sessionToken`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftAwsCredentials.property.sessionToken"></a>

- *Type:* `string`

---

### GameLiftBuild <a name="aws-cdk-sdk.gamelift.GameLiftBuild"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftBuild: gamelift.GameLiftBuild = { ... }
```

##### `buildArn`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftBuild.property.buildArn"></a>

- *Type:* `string`

---

##### `buildId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftBuild.property.buildId"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftBuild.property.creationTime"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftBuild.property.name"></a>

- *Type:* `string`

---

##### `operatingSystem`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftBuild.property.operatingSystem"></a>

- *Type:* `string`

---

##### `sizeOnDisk`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftBuild.property.sizeOnDisk"></a>

- *Type:* `number`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftBuild.property.status"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftBuild.property.version"></a>

- *Type:* `string`

---

### GameLiftCertificateConfiguration <a name="aws-cdk-sdk.gamelift.GameLiftCertificateConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftCertificateConfiguration: gamelift.GameLiftCertificateConfiguration = { ... }
```

##### `certificateType`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCertificateConfiguration.property.certificateType"></a>

- *Type:* `string`

---

### GameLiftClaimGameServerInput <a name="aws-cdk-sdk.gamelift.GameLiftClaimGameServerInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftClaimGameServerInput: gamelift.GameLiftClaimGameServerInput = { ... }
```

##### `gameServerGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClaimGameServerInput.property.gameServerGroupName"></a>

- *Type:* `string`

---

##### `gameServerData`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClaimGameServerInput.property.gameServerData"></a>

- *Type:* `string`

---

##### `gameServerId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClaimGameServerInput.property.gameServerId"></a>

- *Type:* `string`

---

### GameLiftClaimGameServerOutput <a name="aws-cdk-sdk.gamelift.GameLiftClaimGameServerOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftClaimGameServerOutput: gamelift.GameLiftClaimGameServerOutput = { ... }
```

##### `gameServer`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftClaimGameServerOutput.property.gameServer"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftGameServer`](#aws-cdk-sdk.gamelift.GameLiftGameServer)

---

### GameLiftCreateAliasInput <a name="aws-cdk-sdk.gamelift.GameLiftCreateAliasInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftCreateAliasInput: gamelift.GameLiftCreateAliasInput = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateAliasInput.property.name"></a>

- *Type:* `string`

---

##### `routingStrategy`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateAliasInput.property.routingStrategy"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftRoutingStrategy`](#aws-cdk-sdk.gamelift.GameLiftRoutingStrategy)

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateAliasInput.property.description"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateAliasInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftTag`](#aws-cdk-sdk.gamelift.GameLiftTag)[]

---

### GameLiftCreateAliasOutput <a name="aws-cdk-sdk.gamelift.GameLiftCreateAliasOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftCreateAliasOutput: gamelift.GameLiftCreateAliasOutput = { ... }
```

##### `alias`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateAliasOutput.property.alias"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftAlias`](#aws-cdk-sdk.gamelift.GameLiftAlias)

---

### GameLiftCreateBuildInput <a name="aws-cdk-sdk.gamelift.GameLiftCreateBuildInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftCreateBuildInput: gamelift.GameLiftCreateBuildInput = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateBuildInput.property.name"></a>

- *Type:* `string`

---

##### `operatingSystem`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateBuildInput.property.operatingSystem"></a>

- *Type:* `string`

---

##### `storageLocation`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateBuildInput.property.storageLocation"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftS3Location`](#aws-cdk-sdk.gamelift.GameLiftS3Location)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateBuildInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftTag`](#aws-cdk-sdk.gamelift.GameLiftTag)[]

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateBuildInput.property.version"></a>

- *Type:* `string`

---

### GameLiftCreateBuildOutput <a name="aws-cdk-sdk.gamelift.GameLiftCreateBuildOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftCreateBuildOutput: gamelift.GameLiftCreateBuildOutput = { ... }
```

##### `build2`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateBuildOutput.property.build2"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftBuild`](#aws-cdk-sdk.gamelift.GameLiftBuild)

---

##### `storageLocation`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateBuildOutput.property.storageLocation"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftS3Location`](#aws-cdk-sdk.gamelift.GameLiftS3Location)

---

##### `uploadCredentials`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateBuildOutput.property.uploadCredentials"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftAwsCredentials`](#aws-cdk-sdk.gamelift.GameLiftAwsCredentials)

---

### GameLiftCreateFleetInput <a name="aws-cdk-sdk.gamelift.GameLiftCreateFleetInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftCreateFleetInput: gamelift.GameLiftCreateFleetInput = { ... }
```

##### `ec2InstanceType`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateFleetInput.property.ec2InstanceType"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateFleetInput.property.name"></a>

- *Type:* `string`

---

##### `buildId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateFleetInput.property.buildId"></a>

- *Type:* `string`

---

##### `certificateConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateFleetInput.property.certificateConfiguration"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftCertificateConfiguration`](#aws-cdk-sdk.gamelift.GameLiftCertificateConfiguration)

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateFleetInput.property.description"></a>

- *Type:* `string`

---

##### `ec2InboundPermissions`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateFleetInput.property.ec2InboundPermissions"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftIpPermission`](#aws-cdk-sdk.gamelift.GameLiftIpPermission)[]

---

##### `fleetType`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateFleetInput.property.fleetType"></a>

- *Type:* `string`

---

##### `instanceRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateFleetInput.property.instanceRoleArn"></a>

- *Type:* `string`

---

##### `logPaths`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateFleetInput.property.logPaths"></a>

- *Type:* `string`[]

---

##### `metricGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateFleetInput.property.metricGroups"></a>

- *Type:* `string`[]

---

##### `newGameSessionProtectionPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateFleetInput.property.newGameSessionProtectionPolicy"></a>

- *Type:* `string`

---

##### `peerVpcAwsAccountId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateFleetInput.property.peerVpcAwsAccountId"></a>

- *Type:* `string`

---

##### `peerVpcId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateFleetInput.property.peerVpcId"></a>

- *Type:* `string`

---

##### `resourceCreationLimitPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateFleetInput.property.resourceCreationLimitPolicy"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftResourceCreationLimitPolicy`](#aws-cdk-sdk.gamelift.GameLiftResourceCreationLimitPolicy)

---

##### `runtimeConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateFleetInput.property.runtimeConfiguration"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftRuntimeConfiguration`](#aws-cdk-sdk.gamelift.GameLiftRuntimeConfiguration)

---

##### `scriptId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateFleetInput.property.scriptId"></a>

- *Type:* `string`

---

##### `serverLaunchParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateFleetInput.property.serverLaunchParameters"></a>

- *Type:* `string`

---

##### `serverLaunchPath`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateFleetInput.property.serverLaunchPath"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateFleetInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftTag`](#aws-cdk-sdk.gamelift.GameLiftTag)[]

---

### GameLiftCreateFleetOutput <a name="aws-cdk-sdk.gamelift.GameLiftCreateFleetOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftCreateFleetOutput: gamelift.GameLiftCreateFleetOutput = { ... }
```

##### `fleetAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateFleetOutput.property.fleetAttributes"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftFleetAttributes`](#aws-cdk-sdk.gamelift.GameLiftFleetAttributes)

---

### GameLiftCreateGameServerGroupInput <a name="aws-cdk-sdk.gamelift.GameLiftCreateGameServerGroupInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftCreateGameServerGroupInput: gamelift.GameLiftCreateGameServerGroupInput = { ... }
```

##### `gameServerGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateGameServerGroupInput.property.gameServerGroupName"></a>

- *Type:* `string`

---

##### `instanceDefinitions`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateGameServerGroupInput.property.instanceDefinitions"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftInstanceDefinition`](#aws-cdk-sdk.gamelift.GameLiftInstanceDefinition)[]

---

##### `launchTemplate`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateGameServerGroupInput.property.launchTemplate"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftLaunchTemplateSpecification`](#aws-cdk-sdk.gamelift.GameLiftLaunchTemplateSpecification)

---

##### `maxSize`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateGameServerGroupInput.property.maxSize"></a>

- *Type:* `number`

---

##### `minSize`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateGameServerGroupInput.property.minSize"></a>

- *Type:* `number`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateGameServerGroupInput.property.roleArn"></a>

- *Type:* `string`

---

##### `autoScalingPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateGameServerGroupInput.property.autoScalingPolicy"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftGameServerGroupAutoScalingPolicy`](#aws-cdk-sdk.gamelift.GameLiftGameServerGroupAutoScalingPolicy)

---

##### `balancingStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateGameServerGroupInput.property.balancingStrategy"></a>

- *Type:* `string`

---

##### `gameServerProtectionPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateGameServerGroupInput.property.gameServerProtectionPolicy"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateGameServerGroupInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftTag`](#aws-cdk-sdk.gamelift.GameLiftTag)[]

---

##### `vpcSubnets`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateGameServerGroupInput.property.vpcSubnets"></a>

- *Type:* `string`[]

---

### GameLiftCreateGameServerGroupOutput <a name="aws-cdk-sdk.gamelift.GameLiftCreateGameServerGroupOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftCreateGameServerGroupOutput: gamelift.GameLiftCreateGameServerGroupOutput = { ... }
```

##### `gameServerGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateGameServerGroupOutput.property.gameServerGroup"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftGameServerGroup`](#aws-cdk-sdk.gamelift.GameLiftGameServerGroup)

---

### GameLiftCreateGameSessionInput <a name="aws-cdk-sdk.gamelift.GameLiftCreateGameSessionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftCreateGameSessionInput: gamelift.GameLiftCreateGameSessionInput = { ... }
```

##### `maximumPlayerSessionCount`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateGameSessionInput.property.maximumPlayerSessionCount"></a>

- *Type:* `number`

---

##### `aliasId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateGameSessionInput.property.aliasId"></a>

- *Type:* `string`

---

##### `creatorId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateGameSessionInput.property.creatorId"></a>

- *Type:* `string`

---

##### `fleetId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateGameSessionInput.property.fleetId"></a>

- *Type:* `string`

---

##### `gameProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateGameSessionInput.property.gameProperties"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftGameProperty`](#aws-cdk-sdk.gamelift.GameLiftGameProperty)[]

---

##### `gameSessionData`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateGameSessionInput.property.gameSessionData"></a>

- *Type:* `string`

---

##### `gameSessionId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateGameSessionInput.property.gameSessionId"></a>

- *Type:* `string`

---

##### `idempotencyToken`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateGameSessionInput.property.idempotencyToken"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateGameSessionInput.property.name"></a>

- *Type:* `string`

---

### GameLiftCreateGameSessionOutput <a name="aws-cdk-sdk.gamelift.GameLiftCreateGameSessionOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftCreateGameSessionOutput: gamelift.GameLiftCreateGameSessionOutput = { ... }
```

##### `gameSession`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateGameSessionOutput.property.gameSession"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftGameSession`](#aws-cdk-sdk.gamelift.GameLiftGameSession)

---

### GameLiftCreateGameSessionQueueInput <a name="aws-cdk-sdk.gamelift.GameLiftCreateGameSessionQueueInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftCreateGameSessionQueueInput: gamelift.GameLiftCreateGameSessionQueueInput = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateGameSessionQueueInput.property.name"></a>

- *Type:* `string`

---

##### `destinations`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateGameSessionQueueInput.property.destinations"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftGameSessionQueueDestination`](#aws-cdk-sdk.gamelift.GameLiftGameSessionQueueDestination)[]

---

##### `playerLatencyPolicies`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateGameSessionQueueInput.property.playerLatencyPolicies"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftPlayerLatencyPolicy`](#aws-cdk-sdk.gamelift.GameLiftPlayerLatencyPolicy)[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateGameSessionQueueInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftTag`](#aws-cdk-sdk.gamelift.GameLiftTag)[]

---

##### `timeoutInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateGameSessionQueueInput.property.timeoutInSeconds"></a>

- *Type:* `number`

---

### GameLiftCreateGameSessionQueueOutput <a name="aws-cdk-sdk.gamelift.GameLiftCreateGameSessionQueueOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftCreateGameSessionQueueOutput: gamelift.GameLiftCreateGameSessionQueueOutput = { ... }
```

##### `gameSessionQueue`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateGameSessionQueueOutput.property.gameSessionQueue"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftGameSessionQueue`](#aws-cdk-sdk.gamelift.GameLiftGameSessionQueue)

---

### GameLiftCreateMatchmakingConfigurationInput <a name="aws-cdk-sdk.gamelift.GameLiftCreateMatchmakingConfigurationInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftCreateMatchmakingConfigurationInput: gamelift.GameLiftCreateMatchmakingConfigurationInput = { ... }
```

##### `acceptanceRequired`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateMatchmakingConfigurationInput.property.acceptanceRequired"></a>

- *Type:* `boolean`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateMatchmakingConfigurationInput.property.name"></a>

- *Type:* `string`

---

##### `requestTimeoutSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateMatchmakingConfigurationInput.property.requestTimeoutSeconds"></a>

- *Type:* `number`

---

##### `ruleSetName`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateMatchmakingConfigurationInput.property.ruleSetName"></a>

- *Type:* `string`

---

##### `acceptanceTimeoutSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateMatchmakingConfigurationInput.property.acceptanceTimeoutSeconds"></a>

- *Type:* `number`

---

##### `additionalPlayerCount`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateMatchmakingConfigurationInput.property.additionalPlayerCount"></a>

- *Type:* `number`

---

##### `backfillMode`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateMatchmakingConfigurationInput.property.backfillMode"></a>

- *Type:* `string`

---

##### `customEventData`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateMatchmakingConfigurationInput.property.customEventData"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateMatchmakingConfigurationInput.property.description"></a>

- *Type:* `string`

---

##### `flexMatchMode`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateMatchmakingConfigurationInput.property.flexMatchMode"></a>

- *Type:* `string`

---

##### `gameProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateMatchmakingConfigurationInput.property.gameProperties"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftGameProperty`](#aws-cdk-sdk.gamelift.GameLiftGameProperty)[]

---

##### `gameSessionData`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateMatchmakingConfigurationInput.property.gameSessionData"></a>

- *Type:* `string`

---

##### `gameSessionQueueArns`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateMatchmakingConfigurationInput.property.gameSessionQueueArns"></a>

- *Type:* `string`[]

---

##### `notificationTarget`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateMatchmakingConfigurationInput.property.notificationTarget"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateMatchmakingConfigurationInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftTag`](#aws-cdk-sdk.gamelift.GameLiftTag)[]

---

### GameLiftCreateMatchmakingConfigurationOutput <a name="aws-cdk-sdk.gamelift.GameLiftCreateMatchmakingConfigurationOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftCreateMatchmakingConfigurationOutput: gamelift.GameLiftCreateMatchmakingConfigurationOutput = { ... }
```

##### `configuration`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateMatchmakingConfigurationOutput.property.configuration"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftMatchmakingConfiguration`](#aws-cdk-sdk.gamelift.GameLiftMatchmakingConfiguration)

---

### GameLiftCreateMatchmakingRuleSetInput <a name="aws-cdk-sdk.gamelift.GameLiftCreateMatchmakingRuleSetInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftCreateMatchmakingRuleSetInput: gamelift.GameLiftCreateMatchmakingRuleSetInput = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateMatchmakingRuleSetInput.property.name"></a>

- *Type:* `string`

---

##### `ruleSetBody`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateMatchmakingRuleSetInput.property.ruleSetBody"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateMatchmakingRuleSetInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftTag`](#aws-cdk-sdk.gamelift.GameLiftTag)[]

---

### GameLiftCreateMatchmakingRuleSetOutput <a name="aws-cdk-sdk.gamelift.GameLiftCreateMatchmakingRuleSetOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftCreateMatchmakingRuleSetOutput: gamelift.GameLiftCreateMatchmakingRuleSetOutput = { ... }
```

##### `ruleSet`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateMatchmakingRuleSetOutput.property.ruleSet"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftMatchmakingRuleSet`](#aws-cdk-sdk.gamelift.GameLiftMatchmakingRuleSet)

---

### GameLiftCreatePlayerSessionInput <a name="aws-cdk-sdk.gamelift.GameLiftCreatePlayerSessionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftCreatePlayerSessionInput: gamelift.GameLiftCreatePlayerSessionInput = { ... }
```

##### `gameSessionId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreatePlayerSessionInput.property.gameSessionId"></a>

- *Type:* `string`

---

##### `playerId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreatePlayerSessionInput.property.playerId"></a>

- *Type:* `string`

---

##### `playerData`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreatePlayerSessionInput.property.playerData"></a>

- *Type:* `string`

---

### GameLiftCreatePlayerSessionOutput <a name="aws-cdk-sdk.gamelift.GameLiftCreatePlayerSessionOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftCreatePlayerSessionOutput: gamelift.GameLiftCreatePlayerSessionOutput = { ... }
```

##### `playerSession`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreatePlayerSessionOutput.property.playerSession"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftPlayerSession`](#aws-cdk-sdk.gamelift.GameLiftPlayerSession)

---

### GameLiftCreatePlayerSessionsInput <a name="aws-cdk-sdk.gamelift.GameLiftCreatePlayerSessionsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftCreatePlayerSessionsInput: gamelift.GameLiftCreatePlayerSessionsInput = { ... }
```

##### `gameSessionId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreatePlayerSessionsInput.property.gameSessionId"></a>

- *Type:* `string`

---

##### `playerIds`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreatePlayerSessionsInput.property.playerIds"></a>

- *Type:* `string`[]

---

##### `playerDataMap`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreatePlayerSessionsInput.property.playerDataMap"></a>

- *Type:* {[ key: string ]: `string`}

---

### GameLiftCreatePlayerSessionsOutput <a name="aws-cdk-sdk.gamelift.GameLiftCreatePlayerSessionsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftCreatePlayerSessionsOutput: gamelift.GameLiftCreatePlayerSessionsOutput = { ... }
```

##### `playerSessions`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreatePlayerSessionsOutput.property.playerSessions"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftPlayerSession`](#aws-cdk-sdk.gamelift.GameLiftPlayerSession)[]

---

### GameLiftCreateScriptInput <a name="aws-cdk-sdk.gamelift.GameLiftCreateScriptInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftCreateScriptInput: gamelift.GameLiftCreateScriptInput = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateScriptInput.property.name"></a>

- *Type:* `string`

---

##### `storageLocation`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateScriptInput.property.storageLocation"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftS3Location`](#aws-cdk-sdk.gamelift.GameLiftS3Location)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateScriptInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftTag`](#aws-cdk-sdk.gamelift.GameLiftTag)[]

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateScriptInput.property.version"></a>

- *Type:* `string`

---

##### `zipFile`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateScriptInput.property.zipFile"></a>

- *Type:* `any`

---

### GameLiftCreateScriptOutput <a name="aws-cdk-sdk.gamelift.GameLiftCreateScriptOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftCreateScriptOutput: gamelift.GameLiftCreateScriptOutput = { ... }
```

##### `script`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateScriptOutput.property.script"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftScript`](#aws-cdk-sdk.gamelift.GameLiftScript)

---

### GameLiftCreateVpcPeeringAuthorizationInput <a name="aws-cdk-sdk.gamelift.GameLiftCreateVpcPeeringAuthorizationInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftCreateVpcPeeringAuthorizationInput: gamelift.GameLiftCreateVpcPeeringAuthorizationInput = { ... }
```

##### `gameLiftAwsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateVpcPeeringAuthorizationInput.property.gameLiftAwsAccountId"></a>

- *Type:* `string`

---

##### `peerVpcId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateVpcPeeringAuthorizationInput.property.peerVpcId"></a>

- *Type:* `string`

---

### GameLiftCreateVpcPeeringAuthorizationOutput <a name="aws-cdk-sdk.gamelift.GameLiftCreateVpcPeeringAuthorizationOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftCreateVpcPeeringAuthorizationOutput: gamelift.GameLiftCreateVpcPeeringAuthorizationOutput = { ... }
```

##### `vpcPeeringAuthorization`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateVpcPeeringAuthorizationOutput.property.vpcPeeringAuthorization"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftVpcPeeringAuthorization`](#aws-cdk-sdk.gamelift.GameLiftVpcPeeringAuthorization)

---

### GameLiftCreateVpcPeeringConnectionInput <a name="aws-cdk-sdk.gamelift.GameLiftCreateVpcPeeringConnectionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftCreateVpcPeeringConnectionInput: gamelift.GameLiftCreateVpcPeeringConnectionInput = { ... }
```

##### `fleetId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateVpcPeeringConnectionInput.property.fleetId"></a>

- *Type:* `string`

---

##### `peerVpcAwsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateVpcPeeringConnectionInput.property.peerVpcAwsAccountId"></a>

- *Type:* `string`

---

##### `peerVpcId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftCreateVpcPeeringConnectionInput.property.peerVpcId"></a>

- *Type:* `string`

---

### GameLiftCreateVpcPeeringConnectionOutput <a name="aws-cdk-sdk.gamelift.GameLiftCreateVpcPeeringConnectionOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftCreateVpcPeeringConnectionOutput: gamelift.GameLiftCreateVpcPeeringConnectionOutput = { ... }
```

### GameLiftDeleteAliasInput <a name="aws-cdk-sdk.gamelift.GameLiftDeleteAliasInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDeleteAliasInput: gamelift.GameLiftDeleteAliasInput = { ... }
```

##### `aliasId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDeleteAliasInput.property.aliasId"></a>

- *Type:* `string`

---

### GameLiftDeleteBuildInput <a name="aws-cdk-sdk.gamelift.GameLiftDeleteBuildInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDeleteBuildInput: gamelift.GameLiftDeleteBuildInput = { ... }
```

##### `buildId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDeleteBuildInput.property.buildId"></a>

- *Type:* `string`

---

### GameLiftDeleteFleetInput <a name="aws-cdk-sdk.gamelift.GameLiftDeleteFleetInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDeleteFleetInput: gamelift.GameLiftDeleteFleetInput = { ... }
```

##### `fleetId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDeleteFleetInput.property.fleetId"></a>

- *Type:* `string`

---

### GameLiftDeleteGameServerGroupInput <a name="aws-cdk-sdk.gamelift.GameLiftDeleteGameServerGroupInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDeleteGameServerGroupInput: gamelift.GameLiftDeleteGameServerGroupInput = { ... }
```

##### `gameServerGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDeleteGameServerGroupInput.property.gameServerGroupName"></a>

- *Type:* `string`

---

##### `deleteOption`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDeleteGameServerGroupInput.property.deleteOption"></a>

- *Type:* `string`

---

### GameLiftDeleteGameServerGroupOutput <a name="aws-cdk-sdk.gamelift.GameLiftDeleteGameServerGroupOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDeleteGameServerGroupOutput: gamelift.GameLiftDeleteGameServerGroupOutput = { ... }
```

##### `gameServerGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDeleteGameServerGroupOutput.property.gameServerGroup"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftGameServerGroup`](#aws-cdk-sdk.gamelift.GameLiftGameServerGroup)

---

### GameLiftDeleteGameSessionQueueInput <a name="aws-cdk-sdk.gamelift.GameLiftDeleteGameSessionQueueInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDeleteGameSessionQueueInput: gamelift.GameLiftDeleteGameSessionQueueInput = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDeleteGameSessionQueueInput.property.name"></a>

- *Type:* `string`

---

### GameLiftDeleteGameSessionQueueOutput <a name="aws-cdk-sdk.gamelift.GameLiftDeleteGameSessionQueueOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDeleteGameSessionQueueOutput: gamelift.GameLiftDeleteGameSessionQueueOutput = { ... }
```

### GameLiftDeleteMatchmakingConfigurationInput <a name="aws-cdk-sdk.gamelift.GameLiftDeleteMatchmakingConfigurationInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDeleteMatchmakingConfigurationInput: gamelift.GameLiftDeleteMatchmakingConfigurationInput = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDeleteMatchmakingConfigurationInput.property.name"></a>

- *Type:* `string`

---

### GameLiftDeleteMatchmakingConfigurationOutput <a name="aws-cdk-sdk.gamelift.GameLiftDeleteMatchmakingConfigurationOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDeleteMatchmakingConfigurationOutput: gamelift.GameLiftDeleteMatchmakingConfigurationOutput = { ... }
```

### GameLiftDeleteMatchmakingRuleSetInput <a name="aws-cdk-sdk.gamelift.GameLiftDeleteMatchmakingRuleSetInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDeleteMatchmakingRuleSetInput: gamelift.GameLiftDeleteMatchmakingRuleSetInput = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDeleteMatchmakingRuleSetInput.property.name"></a>

- *Type:* `string`

---

### GameLiftDeleteMatchmakingRuleSetOutput <a name="aws-cdk-sdk.gamelift.GameLiftDeleteMatchmakingRuleSetOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDeleteMatchmakingRuleSetOutput: gamelift.GameLiftDeleteMatchmakingRuleSetOutput = { ... }
```

### GameLiftDeleteScalingPolicyInput <a name="aws-cdk-sdk.gamelift.GameLiftDeleteScalingPolicyInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDeleteScalingPolicyInput: gamelift.GameLiftDeleteScalingPolicyInput = { ... }
```

##### `fleetId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDeleteScalingPolicyInput.property.fleetId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDeleteScalingPolicyInput.property.name"></a>

- *Type:* `string`

---

### GameLiftDeleteScriptInput <a name="aws-cdk-sdk.gamelift.GameLiftDeleteScriptInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDeleteScriptInput: gamelift.GameLiftDeleteScriptInput = { ... }
```

##### `scriptId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDeleteScriptInput.property.scriptId"></a>

- *Type:* `string`

---

### GameLiftDeleteVpcPeeringAuthorizationInput <a name="aws-cdk-sdk.gamelift.GameLiftDeleteVpcPeeringAuthorizationInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDeleteVpcPeeringAuthorizationInput: gamelift.GameLiftDeleteVpcPeeringAuthorizationInput = { ... }
```

##### `gameLiftAwsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDeleteVpcPeeringAuthorizationInput.property.gameLiftAwsAccountId"></a>

- *Type:* `string`

---

##### `peerVpcId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDeleteVpcPeeringAuthorizationInput.property.peerVpcId"></a>

- *Type:* `string`

---

### GameLiftDeleteVpcPeeringAuthorizationOutput <a name="aws-cdk-sdk.gamelift.GameLiftDeleteVpcPeeringAuthorizationOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDeleteVpcPeeringAuthorizationOutput: gamelift.GameLiftDeleteVpcPeeringAuthorizationOutput = { ... }
```

### GameLiftDeleteVpcPeeringConnectionInput <a name="aws-cdk-sdk.gamelift.GameLiftDeleteVpcPeeringConnectionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDeleteVpcPeeringConnectionInput: gamelift.GameLiftDeleteVpcPeeringConnectionInput = { ... }
```

##### `fleetId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDeleteVpcPeeringConnectionInput.property.fleetId"></a>

- *Type:* `string`

---

##### `vpcPeeringConnectionId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDeleteVpcPeeringConnectionInput.property.vpcPeeringConnectionId"></a>

- *Type:* `string`

---

### GameLiftDeleteVpcPeeringConnectionOutput <a name="aws-cdk-sdk.gamelift.GameLiftDeleteVpcPeeringConnectionOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDeleteVpcPeeringConnectionOutput: gamelift.GameLiftDeleteVpcPeeringConnectionOutput = { ... }
```

### GameLiftDeregisterGameServerInput <a name="aws-cdk-sdk.gamelift.GameLiftDeregisterGameServerInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDeregisterGameServerInput: gamelift.GameLiftDeregisterGameServerInput = { ... }
```

##### `gameServerGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDeregisterGameServerInput.property.gameServerGroupName"></a>

- *Type:* `string`

---

##### `gameServerId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDeregisterGameServerInput.property.gameServerId"></a>

- *Type:* `string`

---

### GameLiftDescribeAliasInput <a name="aws-cdk-sdk.gamelift.GameLiftDescribeAliasInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDescribeAliasInput: gamelift.GameLiftDescribeAliasInput = { ... }
```

##### `aliasId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeAliasInput.property.aliasId"></a>

- *Type:* `string`

---

### GameLiftDescribeAliasOutput <a name="aws-cdk-sdk.gamelift.GameLiftDescribeAliasOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDescribeAliasOutput: gamelift.GameLiftDescribeAliasOutput = { ... }
```

##### `alias`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeAliasOutput.property.alias"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftAlias`](#aws-cdk-sdk.gamelift.GameLiftAlias)

---

### GameLiftDescribeBuildInput <a name="aws-cdk-sdk.gamelift.GameLiftDescribeBuildInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDescribeBuildInput: gamelift.GameLiftDescribeBuildInput = { ... }
```

##### `buildId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeBuildInput.property.buildId"></a>

- *Type:* `string`

---

### GameLiftDescribeBuildOutput <a name="aws-cdk-sdk.gamelift.GameLiftDescribeBuildOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDescribeBuildOutput: gamelift.GameLiftDescribeBuildOutput = { ... }
```

##### `build2`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeBuildOutput.property.build2"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftBuild`](#aws-cdk-sdk.gamelift.GameLiftBuild)

---

### GameLiftDescribeEc2InstanceLimitsInput <a name="aws-cdk-sdk.gamelift.GameLiftDescribeEc2InstanceLimitsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDescribeEc2InstanceLimitsInput: gamelift.GameLiftDescribeEc2InstanceLimitsInput = { ... }
```

##### `ec2InstanceType`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeEc2InstanceLimitsInput.property.ec2InstanceType"></a>

- *Type:* `string`

---

### GameLiftDescribeEc2InstanceLimitsOutput <a name="aws-cdk-sdk.gamelift.GameLiftDescribeEc2InstanceLimitsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDescribeEc2InstanceLimitsOutput: gamelift.GameLiftDescribeEc2InstanceLimitsOutput = { ... }
```

##### `ec2InstanceLimits`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeEc2InstanceLimitsOutput.property.ec2InstanceLimits"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftEc2InstanceLimit`](#aws-cdk-sdk.gamelift.GameLiftEc2InstanceLimit)[]

---

### GameLiftDescribeFleetAttributesInput <a name="aws-cdk-sdk.gamelift.GameLiftDescribeFleetAttributesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDescribeFleetAttributesInput: gamelift.GameLiftDescribeFleetAttributesInput = { ... }
```

##### `fleetIds`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeFleetAttributesInput.property.fleetIds"></a>

- *Type:* `string`[]

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeFleetAttributesInput.property.limit"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeFleetAttributesInput.property.nextToken"></a>

- *Type:* `string`

---

### GameLiftDescribeFleetAttributesOutput <a name="aws-cdk-sdk.gamelift.GameLiftDescribeFleetAttributesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDescribeFleetAttributesOutput: gamelift.GameLiftDescribeFleetAttributesOutput = { ... }
```

##### `fleetAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeFleetAttributesOutput.property.fleetAttributes"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftFleetAttributes`](#aws-cdk-sdk.gamelift.GameLiftFleetAttributes)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeFleetAttributesOutput.property.nextToken"></a>

- *Type:* `string`

---

### GameLiftDescribeFleetCapacityInput <a name="aws-cdk-sdk.gamelift.GameLiftDescribeFleetCapacityInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDescribeFleetCapacityInput: gamelift.GameLiftDescribeFleetCapacityInput = { ... }
```

##### `fleetIds`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeFleetCapacityInput.property.fleetIds"></a>

- *Type:* `string`[]

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeFleetCapacityInput.property.limit"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeFleetCapacityInput.property.nextToken"></a>

- *Type:* `string`

---

### GameLiftDescribeFleetCapacityOutput <a name="aws-cdk-sdk.gamelift.GameLiftDescribeFleetCapacityOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDescribeFleetCapacityOutput: gamelift.GameLiftDescribeFleetCapacityOutput = { ... }
```

##### `fleetCapacity`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeFleetCapacityOutput.property.fleetCapacity"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftFleetCapacity`](#aws-cdk-sdk.gamelift.GameLiftFleetCapacity)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeFleetCapacityOutput.property.nextToken"></a>

- *Type:* `string`

---

### GameLiftDescribeFleetEventsInput <a name="aws-cdk-sdk.gamelift.GameLiftDescribeFleetEventsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDescribeFleetEventsInput: gamelift.GameLiftDescribeFleetEventsInput = { ... }
```

##### `fleetId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeFleetEventsInput.property.fleetId"></a>

- *Type:* `string`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeFleetEventsInput.property.endTime"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeFleetEventsInput.property.limit"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeFleetEventsInput.property.nextToken"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeFleetEventsInput.property.startTime"></a>

- *Type:* `string`

---

### GameLiftDescribeFleetEventsOutput <a name="aws-cdk-sdk.gamelift.GameLiftDescribeFleetEventsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDescribeFleetEventsOutput: gamelift.GameLiftDescribeFleetEventsOutput = { ... }
```

##### `events`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeFleetEventsOutput.property.events"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftEvent`](#aws-cdk-sdk.gamelift.GameLiftEvent)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeFleetEventsOutput.property.nextToken"></a>

- *Type:* `string`

---

### GameLiftDescribeFleetPortSettingsInput <a name="aws-cdk-sdk.gamelift.GameLiftDescribeFleetPortSettingsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDescribeFleetPortSettingsInput: gamelift.GameLiftDescribeFleetPortSettingsInput = { ... }
```

##### `fleetId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeFleetPortSettingsInput.property.fleetId"></a>

- *Type:* `string`

---

### GameLiftDescribeFleetPortSettingsOutput <a name="aws-cdk-sdk.gamelift.GameLiftDescribeFleetPortSettingsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDescribeFleetPortSettingsOutput: gamelift.GameLiftDescribeFleetPortSettingsOutput = { ... }
```

##### `inboundPermissions`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeFleetPortSettingsOutput.property.inboundPermissions"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftIpPermission`](#aws-cdk-sdk.gamelift.GameLiftIpPermission)[]

---

### GameLiftDescribeFleetUtilizationInput <a name="aws-cdk-sdk.gamelift.GameLiftDescribeFleetUtilizationInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDescribeFleetUtilizationInput: gamelift.GameLiftDescribeFleetUtilizationInput = { ... }
```

##### `fleetIds`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeFleetUtilizationInput.property.fleetIds"></a>

- *Type:* `string`[]

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeFleetUtilizationInput.property.limit"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeFleetUtilizationInput.property.nextToken"></a>

- *Type:* `string`

---

### GameLiftDescribeFleetUtilizationOutput <a name="aws-cdk-sdk.gamelift.GameLiftDescribeFleetUtilizationOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDescribeFleetUtilizationOutput: gamelift.GameLiftDescribeFleetUtilizationOutput = { ... }
```

##### `fleetUtilization`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeFleetUtilizationOutput.property.fleetUtilization"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftFleetUtilization`](#aws-cdk-sdk.gamelift.GameLiftFleetUtilization)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeFleetUtilizationOutput.property.nextToken"></a>

- *Type:* `string`

---

### GameLiftDescribeGameServerGroupInput <a name="aws-cdk-sdk.gamelift.GameLiftDescribeGameServerGroupInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDescribeGameServerGroupInput: gamelift.GameLiftDescribeGameServerGroupInput = { ... }
```

##### `gameServerGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeGameServerGroupInput.property.gameServerGroupName"></a>

- *Type:* `string`

---

### GameLiftDescribeGameServerGroupOutput <a name="aws-cdk-sdk.gamelift.GameLiftDescribeGameServerGroupOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDescribeGameServerGroupOutput: gamelift.GameLiftDescribeGameServerGroupOutput = { ... }
```

##### `gameServerGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeGameServerGroupOutput.property.gameServerGroup"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftGameServerGroup`](#aws-cdk-sdk.gamelift.GameLiftGameServerGroup)

---

### GameLiftDescribeGameServerInput <a name="aws-cdk-sdk.gamelift.GameLiftDescribeGameServerInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDescribeGameServerInput: gamelift.GameLiftDescribeGameServerInput = { ... }
```

##### `gameServerGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeGameServerInput.property.gameServerGroupName"></a>

- *Type:* `string`

---

##### `gameServerId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeGameServerInput.property.gameServerId"></a>

- *Type:* `string`

---

### GameLiftDescribeGameServerInstancesInput <a name="aws-cdk-sdk.gamelift.GameLiftDescribeGameServerInstancesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDescribeGameServerInstancesInput: gamelift.GameLiftDescribeGameServerInstancesInput = { ... }
```

##### `gameServerGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeGameServerInstancesInput.property.gameServerGroupName"></a>

- *Type:* `string`

---

##### `instanceIds`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeGameServerInstancesInput.property.instanceIds"></a>

- *Type:* `string`[]

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeGameServerInstancesInput.property.limit"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeGameServerInstancesInput.property.nextToken"></a>

- *Type:* `string`

---

### GameLiftDescribeGameServerInstancesOutput <a name="aws-cdk-sdk.gamelift.GameLiftDescribeGameServerInstancesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDescribeGameServerInstancesOutput: gamelift.GameLiftDescribeGameServerInstancesOutput = { ... }
```

##### `gameServerInstances`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeGameServerInstancesOutput.property.gameServerInstances"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftGameServerInstance`](#aws-cdk-sdk.gamelift.GameLiftGameServerInstance)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeGameServerInstancesOutput.property.nextToken"></a>

- *Type:* `string`

---

### GameLiftDescribeGameServerOutput <a name="aws-cdk-sdk.gamelift.GameLiftDescribeGameServerOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDescribeGameServerOutput: gamelift.GameLiftDescribeGameServerOutput = { ... }
```

##### `gameServer`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeGameServerOutput.property.gameServer"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftGameServer`](#aws-cdk-sdk.gamelift.GameLiftGameServer)

---

### GameLiftDescribeGameSessionDetailsInput <a name="aws-cdk-sdk.gamelift.GameLiftDescribeGameSessionDetailsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDescribeGameSessionDetailsInput: gamelift.GameLiftDescribeGameSessionDetailsInput = { ... }
```

##### `aliasId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeGameSessionDetailsInput.property.aliasId"></a>

- *Type:* `string`

---

##### `fleetId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeGameSessionDetailsInput.property.fleetId"></a>

- *Type:* `string`

---

##### `gameSessionId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeGameSessionDetailsInput.property.gameSessionId"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeGameSessionDetailsInput.property.limit"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeGameSessionDetailsInput.property.nextToken"></a>

- *Type:* `string`

---

##### `statusFilter`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeGameSessionDetailsInput.property.statusFilter"></a>

- *Type:* `string`

---

### GameLiftDescribeGameSessionDetailsOutput <a name="aws-cdk-sdk.gamelift.GameLiftDescribeGameSessionDetailsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDescribeGameSessionDetailsOutput: gamelift.GameLiftDescribeGameSessionDetailsOutput = { ... }
```

##### `gameSessionDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeGameSessionDetailsOutput.property.gameSessionDetails"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftGameSessionDetail`](#aws-cdk-sdk.gamelift.GameLiftGameSessionDetail)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeGameSessionDetailsOutput.property.nextToken"></a>

- *Type:* `string`

---

### GameLiftDescribeGameSessionPlacementInput <a name="aws-cdk-sdk.gamelift.GameLiftDescribeGameSessionPlacementInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDescribeGameSessionPlacementInput: gamelift.GameLiftDescribeGameSessionPlacementInput = { ... }
```

##### `placementId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeGameSessionPlacementInput.property.placementId"></a>

- *Type:* `string`

---

### GameLiftDescribeGameSessionPlacementOutput <a name="aws-cdk-sdk.gamelift.GameLiftDescribeGameSessionPlacementOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDescribeGameSessionPlacementOutput: gamelift.GameLiftDescribeGameSessionPlacementOutput = { ... }
```

##### `gameSessionPlacement`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeGameSessionPlacementOutput.property.gameSessionPlacement"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftGameSessionPlacement`](#aws-cdk-sdk.gamelift.GameLiftGameSessionPlacement)

---

### GameLiftDescribeGameSessionQueuesInput <a name="aws-cdk-sdk.gamelift.GameLiftDescribeGameSessionQueuesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDescribeGameSessionQueuesInput: gamelift.GameLiftDescribeGameSessionQueuesInput = { ... }
```

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeGameSessionQueuesInput.property.limit"></a>

- *Type:* `number`

---

##### `names`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeGameSessionQueuesInput.property.names"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeGameSessionQueuesInput.property.nextToken"></a>

- *Type:* `string`

---

### GameLiftDescribeGameSessionQueuesOutput <a name="aws-cdk-sdk.gamelift.GameLiftDescribeGameSessionQueuesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDescribeGameSessionQueuesOutput: gamelift.GameLiftDescribeGameSessionQueuesOutput = { ... }
```

##### `gameSessionQueues`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeGameSessionQueuesOutput.property.gameSessionQueues"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftGameSessionQueue`](#aws-cdk-sdk.gamelift.GameLiftGameSessionQueue)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeGameSessionQueuesOutput.property.nextToken"></a>

- *Type:* `string`

---

### GameLiftDescribeGameSessionsInput <a name="aws-cdk-sdk.gamelift.GameLiftDescribeGameSessionsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDescribeGameSessionsInput: gamelift.GameLiftDescribeGameSessionsInput = { ... }
```

##### `aliasId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeGameSessionsInput.property.aliasId"></a>

- *Type:* `string`

---

##### `fleetId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeGameSessionsInput.property.fleetId"></a>

- *Type:* `string`

---

##### `gameSessionId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeGameSessionsInput.property.gameSessionId"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeGameSessionsInput.property.limit"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeGameSessionsInput.property.nextToken"></a>

- *Type:* `string`

---

##### `statusFilter`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeGameSessionsInput.property.statusFilter"></a>

- *Type:* `string`

---

### GameLiftDescribeGameSessionsOutput <a name="aws-cdk-sdk.gamelift.GameLiftDescribeGameSessionsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDescribeGameSessionsOutput: gamelift.GameLiftDescribeGameSessionsOutput = { ... }
```

##### `gameSessions`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeGameSessionsOutput.property.gameSessions"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftGameSession`](#aws-cdk-sdk.gamelift.GameLiftGameSession)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeGameSessionsOutput.property.nextToken"></a>

- *Type:* `string`

---

### GameLiftDescribeInstancesInput <a name="aws-cdk-sdk.gamelift.GameLiftDescribeInstancesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDescribeInstancesInput: gamelift.GameLiftDescribeInstancesInput = { ... }
```

##### `fleetId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeInstancesInput.property.fleetId"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeInstancesInput.property.instanceId"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeInstancesInput.property.limit"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeInstancesInput.property.nextToken"></a>

- *Type:* `string`

---

### GameLiftDescribeInstancesOutput <a name="aws-cdk-sdk.gamelift.GameLiftDescribeInstancesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDescribeInstancesOutput: gamelift.GameLiftDescribeInstancesOutput = { ... }
```

##### `instances`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeInstancesOutput.property.instances"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftInstance`](#aws-cdk-sdk.gamelift.GameLiftInstance)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeInstancesOutput.property.nextToken"></a>

- *Type:* `string`

---

### GameLiftDescribeMatchmakingConfigurationsInput <a name="aws-cdk-sdk.gamelift.GameLiftDescribeMatchmakingConfigurationsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDescribeMatchmakingConfigurationsInput: gamelift.GameLiftDescribeMatchmakingConfigurationsInput = { ... }
```

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeMatchmakingConfigurationsInput.property.limit"></a>

- *Type:* `number`

---

##### `names`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeMatchmakingConfigurationsInput.property.names"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeMatchmakingConfigurationsInput.property.nextToken"></a>

- *Type:* `string`

---

##### `ruleSetName`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeMatchmakingConfigurationsInput.property.ruleSetName"></a>

- *Type:* `string`

---

### GameLiftDescribeMatchmakingConfigurationsOutput <a name="aws-cdk-sdk.gamelift.GameLiftDescribeMatchmakingConfigurationsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDescribeMatchmakingConfigurationsOutput: gamelift.GameLiftDescribeMatchmakingConfigurationsOutput = { ... }
```

##### `configurations`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeMatchmakingConfigurationsOutput.property.configurations"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftMatchmakingConfiguration`](#aws-cdk-sdk.gamelift.GameLiftMatchmakingConfiguration)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeMatchmakingConfigurationsOutput.property.nextToken"></a>

- *Type:* `string`

---

### GameLiftDescribeMatchmakingInput <a name="aws-cdk-sdk.gamelift.GameLiftDescribeMatchmakingInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDescribeMatchmakingInput: gamelift.GameLiftDescribeMatchmakingInput = { ... }
```

##### `ticketIds`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeMatchmakingInput.property.ticketIds"></a>

- *Type:* `string`[]

---

### GameLiftDescribeMatchmakingOutput <a name="aws-cdk-sdk.gamelift.GameLiftDescribeMatchmakingOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDescribeMatchmakingOutput: gamelift.GameLiftDescribeMatchmakingOutput = { ... }
```

##### `ticketList`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeMatchmakingOutput.property.ticketList"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftMatchmakingTicket`](#aws-cdk-sdk.gamelift.GameLiftMatchmakingTicket)[]

---

### GameLiftDescribeMatchmakingRuleSetsInput <a name="aws-cdk-sdk.gamelift.GameLiftDescribeMatchmakingRuleSetsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDescribeMatchmakingRuleSetsInput: gamelift.GameLiftDescribeMatchmakingRuleSetsInput = { ... }
```

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeMatchmakingRuleSetsInput.property.limit"></a>

- *Type:* `number`

---

##### `names`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeMatchmakingRuleSetsInput.property.names"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeMatchmakingRuleSetsInput.property.nextToken"></a>

- *Type:* `string`

---

### GameLiftDescribeMatchmakingRuleSetsOutput <a name="aws-cdk-sdk.gamelift.GameLiftDescribeMatchmakingRuleSetsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDescribeMatchmakingRuleSetsOutput: gamelift.GameLiftDescribeMatchmakingRuleSetsOutput = { ... }
```

##### `ruleSets`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeMatchmakingRuleSetsOutput.property.ruleSets"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftMatchmakingRuleSet`](#aws-cdk-sdk.gamelift.GameLiftMatchmakingRuleSet)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeMatchmakingRuleSetsOutput.property.nextToken"></a>

- *Type:* `string`

---

### GameLiftDescribePlayerSessionsInput <a name="aws-cdk-sdk.gamelift.GameLiftDescribePlayerSessionsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDescribePlayerSessionsInput: gamelift.GameLiftDescribePlayerSessionsInput = { ... }
```

##### `gameSessionId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribePlayerSessionsInput.property.gameSessionId"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribePlayerSessionsInput.property.limit"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribePlayerSessionsInput.property.nextToken"></a>

- *Type:* `string`

---

##### `playerId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribePlayerSessionsInput.property.playerId"></a>

- *Type:* `string`

---

##### `playerSessionId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribePlayerSessionsInput.property.playerSessionId"></a>

- *Type:* `string`

---

##### `playerSessionStatusFilter`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribePlayerSessionsInput.property.playerSessionStatusFilter"></a>

- *Type:* `string`

---

### GameLiftDescribePlayerSessionsOutput <a name="aws-cdk-sdk.gamelift.GameLiftDescribePlayerSessionsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDescribePlayerSessionsOutput: gamelift.GameLiftDescribePlayerSessionsOutput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribePlayerSessionsOutput.property.nextToken"></a>

- *Type:* `string`

---

##### `playerSessions`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribePlayerSessionsOutput.property.playerSessions"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftPlayerSession`](#aws-cdk-sdk.gamelift.GameLiftPlayerSession)[]

---

### GameLiftDescribeRuntimeConfigurationInput <a name="aws-cdk-sdk.gamelift.GameLiftDescribeRuntimeConfigurationInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDescribeRuntimeConfigurationInput: gamelift.GameLiftDescribeRuntimeConfigurationInput = { ... }
```

##### `fleetId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeRuntimeConfigurationInput.property.fleetId"></a>

- *Type:* `string`

---

### GameLiftDescribeRuntimeConfigurationOutput <a name="aws-cdk-sdk.gamelift.GameLiftDescribeRuntimeConfigurationOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDescribeRuntimeConfigurationOutput: gamelift.GameLiftDescribeRuntimeConfigurationOutput = { ... }
```

##### `runtimeConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeRuntimeConfigurationOutput.property.runtimeConfiguration"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftRuntimeConfiguration`](#aws-cdk-sdk.gamelift.GameLiftRuntimeConfiguration)

---

### GameLiftDescribeScalingPoliciesInput <a name="aws-cdk-sdk.gamelift.GameLiftDescribeScalingPoliciesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDescribeScalingPoliciesInput: gamelift.GameLiftDescribeScalingPoliciesInput = { ... }
```

##### `fleetId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeScalingPoliciesInput.property.fleetId"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeScalingPoliciesInput.property.limit"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeScalingPoliciesInput.property.nextToken"></a>

- *Type:* `string`

---

##### `statusFilter`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeScalingPoliciesInput.property.statusFilter"></a>

- *Type:* `string`

---

### GameLiftDescribeScalingPoliciesOutput <a name="aws-cdk-sdk.gamelift.GameLiftDescribeScalingPoliciesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDescribeScalingPoliciesOutput: gamelift.GameLiftDescribeScalingPoliciesOutput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeScalingPoliciesOutput.property.nextToken"></a>

- *Type:* `string`

---

##### `scalingPolicies`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeScalingPoliciesOutput.property.scalingPolicies"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftScalingPolicy`](#aws-cdk-sdk.gamelift.GameLiftScalingPolicy)[]

---

### GameLiftDescribeScriptInput <a name="aws-cdk-sdk.gamelift.GameLiftDescribeScriptInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDescribeScriptInput: gamelift.GameLiftDescribeScriptInput = { ... }
```

##### `scriptId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeScriptInput.property.scriptId"></a>

- *Type:* `string`

---

### GameLiftDescribeScriptOutput <a name="aws-cdk-sdk.gamelift.GameLiftDescribeScriptOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDescribeScriptOutput: gamelift.GameLiftDescribeScriptOutput = { ... }
```

##### `script`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeScriptOutput.property.script"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftScript`](#aws-cdk-sdk.gamelift.GameLiftScript)

---

### GameLiftDescribeVpcPeeringAuthorizationsInput <a name="aws-cdk-sdk.gamelift.GameLiftDescribeVpcPeeringAuthorizationsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDescribeVpcPeeringAuthorizationsInput: gamelift.GameLiftDescribeVpcPeeringAuthorizationsInput = { ... }
```

### GameLiftDescribeVpcPeeringAuthorizationsOutput <a name="aws-cdk-sdk.gamelift.GameLiftDescribeVpcPeeringAuthorizationsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDescribeVpcPeeringAuthorizationsOutput: gamelift.GameLiftDescribeVpcPeeringAuthorizationsOutput = { ... }
```

##### `vpcPeeringAuthorizations`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeVpcPeeringAuthorizationsOutput.property.vpcPeeringAuthorizations"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftVpcPeeringAuthorization`](#aws-cdk-sdk.gamelift.GameLiftVpcPeeringAuthorization)[]

---

### GameLiftDescribeVpcPeeringConnectionsInput <a name="aws-cdk-sdk.gamelift.GameLiftDescribeVpcPeeringConnectionsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDescribeVpcPeeringConnectionsInput: gamelift.GameLiftDescribeVpcPeeringConnectionsInput = { ... }
```

##### `fleetId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeVpcPeeringConnectionsInput.property.fleetId"></a>

- *Type:* `string`

---

### GameLiftDescribeVpcPeeringConnectionsOutput <a name="aws-cdk-sdk.gamelift.GameLiftDescribeVpcPeeringConnectionsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDescribeVpcPeeringConnectionsOutput: gamelift.GameLiftDescribeVpcPeeringConnectionsOutput = { ... }
```

##### `vpcPeeringConnections`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDescribeVpcPeeringConnectionsOutput.property.vpcPeeringConnections"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftVpcPeeringConnection`](#aws-cdk-sdk.gamelift.GameLiftVpcPeeringConnection)[]

---

### GameLiftDesiredPlayerSession <a name="aws-cdk-sdk.gamelift.GameLiftDesiredPlayerSession"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftDesiredPlayerSession: gamelift.GameLiftDesiredPlayerSession = { ... }
```

##### `playerData`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDesiredPlayerSession.property.playerData"></a>

- *Type:* `string`

---

##### `playerId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftDesiredPlayerSession.property.playerId"></a>

- *Type:* `string`

---

### GameLiftEc2InstanceCounts <a name="aws-cdk-sdk.gamelift.GameLiftEc2InstanceCounts"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftEc2InstanceCounts: gamelift.GameLiftEc2InstanceCounts = { ... }
```

##### `active`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftEc2InstanceCounts.property.active"></a>

- *Type:* `number`

---

##### `desired`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftEc2InstanceCounts.property.desired"></a>

- *Type:* `number`

---

##### `idle`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftEc2InstanceCounts.property.idle"></a>

- *Type:* `number`

---

##### `maximum`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftEc2InstanceCounts.property.maximum"></a>

- *Type:* `number`

---

##### `minimum`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftEc2InstanceCounts.property.minimum"></a>

- *Type:* `number`

---

##### `pending`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftEc2InstanceCounts.property.pending"></a>

- *Type:* `number`

---

##### `terminating`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftEc2InstanceCounts.property.terminating"></a>

- *Type:* `number`

---

### GameLiftEc2InstanceLimit <a name="aws-cdk-sdk.gamelift.GameLiftEc2InstanceLimit"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftEc2InstanceLimit: gamelift.GameLiftEc2InstanceLimit = { ... }
```

##### `currentInstances`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftEc2InstanceLimit.property.currentInstances"></a>

- *Type:* `number`

---

##### `ec2InstanceType`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftEc2InstanceLimit.property.ec2InstanceType"></a>

- *Type:* `string`

---

##### `instanceLimit`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftEc2InstanceLimit.property.instanceLimit"></a>

- *Type:* `number`

---

### GameLiftEvent <a name="aws-cdk-sdk.gamelift.GameLiftEvent"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftEvent: gamelift.GameLiftEvent = { ... }
```

##### `eventCode`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftEvent.property.eventCode"></a>

- *Type:* `string`

---

##### `eventId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftEvent.property.eventId"></a>

- *Type:* `string`

---

##### `eventTime`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftEvent.property.eventTime"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftEvent.property.message"></a>

- *Type:* `string`

---

##### `preSignedLogUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftEvent.property.preSignedLogUrl"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftEvent.property.resourceId"></a>

- *Type:* `string`

---

### GameLiftFleetAttributes <a name="aws-cdk-sdk.gamelift.GameLiftFleetAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftFleetAttributes: gamelift.GameLiftFleetAttributes = { ... }
```

##### `buildArn`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftFleetAttributes.property.buildArn"></a>

- *Type:* `string`

---

##### `buildId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftFleetAttributes.property.buildId"></a>

- *Type:* `string`

---

##### `certificateConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftFleetAttributes.property.certificateConfiguration"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftCertificateConfiguration`](#aws-cdk-sdk.gamelift.GameLiftCertificateConfiguration)

---

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftFleetAttributes.property.creationTime"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftFleetAttributes.property.description"></a>

- *Type:* `string`

---

##### `fleetArn`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftFleetAttributes.property.fleetArn"></a>

- *Type:* `string`

---

##### `fleetId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftFleetAttributes.property.fleetId"></a>

- *Type:* `string`

---

##### `fleetType`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftFleetAttributes.property.fleetType"></a>

- *Type:* `string`

---

##### `instanceRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftFleetAttributes.property.instanceRoleArn"></a>

- *Type:* `string`

---

##### `instanceType`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftFleetAttributes.property.instanceType"></a>

- *Type:* `string`

---

##### `logPaths`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftFleetAttributes.property.logPaths"></a>

- *Type:* `string`[]

---

##### `metricGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftFleetAttributes.property.metricGroups"></a>

- *Type:* `string`[]

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftFleetAttributes.property.name"></a>

- *Type:* `string`

---

##### `newGameSessionProtectionPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftFleetAttributes.property.newGameSessionProtectionPolicy"></a>

- *Type:* `string`

---

##### `operatingSystem`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftFleetAttributes.property.operatingSystem"></a>

- *Type:* `string`

---

##### `resourceCreationLimitPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftFleetAttributes.property.resourceCreationLimitPolicy"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftResourceCreationLimitPolicy`](#aws-cdk-sdk.gamelift.GameLiftResourceCreationLimitPolicy)

---

##### `scriptArn`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftFleetAttributes.property.scriptArn"></a>

- *Type:* `string`

---

##### `scriptId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftFleetAttributes.property.scriptId"></a>

- *Type:* `string`

---

##### `serverLaunchParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftFleetAttributes.property.serverLaunchParameters"></a>

- *Type:* `string`

---

##### `serverLaunchPath`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftFleetAttributes.property.serverLaunchPath"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftFleetAttributes.property.status"></a>

- *Type:* `string`

---

##### `stoppedActions`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftFleetAttributes.property.stoppedActions"></a>

- *Type:* `string`[]

---

##### `terminationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftFleetAttributes.property.terminationTime"></a>

- *Type:* `string`

---

### GameLiftFleetCapacity <a name="aws-cdk-sdk.gamelift.GameLiftFleetCapacity"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftFleetCapacity: gamelift.GameLiftFleetCapacity = { ... }
```

##### `fleetId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftFleetCapacity.property.fleetId"></a>

- *Type:* `string`

---

##### `instanceCounts`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftFleetCapacity.property.instanceCounts"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftEc2InstanceCounts`](#aws-cdk-sdk.gamelift.GameLiftEc2InstanceCounts)

---

##### `instanceType`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftFleetCapacity.property.instanceType"></a>

- *Type:* `string`

---

### GameLiftFleetUtilization <a name="aws-cdk-sdk.gamelift.GameLiftFleetUtilization"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftFleetUtilization: gamelift.GameLiftFleetUtilization = { ... }
```

##### `activeGameSessionCount`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftFleetUtilization.property.activeGameSessionCount"></a>

- *Type:* `number`

---

##### `activeServerProcessCount`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftFleetUtilization.property.activeServerProcessCount"></a>

- *Type:* `number`

---

##### `currentPlayerSessionCount`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftFleetUtilization.property.currentPlayerSessionCount"></a>

- *Type:* `number`

---

##### `fleetId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftFleetUtilization.property.fleetId"></a>

- *Type:* `string`

---

##### `maximumPlayerSessionCount`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftFleetUtilization.property.maximumPlayerSessionCount"></a>

- *Type:* `number`

---

### GameLiftGameProperty <a name="aws-cdk-sdk.gamelift.GameLiftGameProperty"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftGameProperty: gamelift.GameLiftGameProperty = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameProperty.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameProperty.property.value"></a>

- *Type:* `string`

---

### GameLiftGameServer <a name="aws-cdk-sdk.gamelift.GameLiftGameServer"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftGameServer: gamelift.GameLiftGameServer = { ... }
```

##### `claimStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameServer.property.claimStatus"></a>

- *Type:* `string`

---

##### `connectionInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameServer.property.connectionInfo"></a>

- *Type:* `string`

---

##### `gameServerData`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameServer.property.gameServerData"></a>

- *Type:* `string`

---

##### `gameServerGroupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameServer.property.gameServerGroupArn"></a>

- *Type:* `string`

---

##### `gameServerGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameServer.property.gameServerGroupName"></a>

- *Type:* `string`

---

##### `gameServerId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameServer.property.gameServerId"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameServer.property.instanceId"></a>

- *Type:* `string`

---

##### `lastClaimTime`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameServer.property.lastClaimTime"></a>

- *Type:* `string`

---

##### `lastHealthCheckTime`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameServer.property.lastHealthCheckTime"></a>

- *Type:* `string`

---

##### `registrationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameServer.property.registrationTime"></a>

- *Type:* `string`

---

##### `utilizationStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameServer.property.utilizationStatus"></a>

- *Type:* `string`

---

### GameLiftGameServerGroup <a name="aws-cdk-sdk.gamelift.GameLiftGameServerGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftGameServerGroup: gamelift.GameLiftGameServerGroup = { ... }
```

##### `autoScalingGroupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameServerGroup.property.autoScalingGroupArn"></a>

- *Type:* `string`

---

##### `balancingStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameServerGroup.property.balancingStrategy"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameServerGroup.property.creationTime"></a>

- *Type:* `string`

---

##### `gameServerGroupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameServerGroup.property.gameServerGroupArn"></a>

- *Type:* `string`

---

##### `gameServerGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameServerGroup.property.gameServerGroupName"></a>

- *Type:* `string`

---

##### `gameServerProtectionPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameServerGroup.property.gameServerProtectionPolicy"></a>

- *Type:* `string`

---

##### `instanceDefinitions`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameServerGroup.property.instanceDefinitions"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftInstanceDefinition`](#aws-cdk-sdk.gamelift.GameLiftInstanceDefinition)[]

---

##### `lastUpdatedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameServerGroup.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameServerGroup.property.roleArn"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameServerGroup.property.status"></a>

- *Type:* `string`

---

##### `statusReason`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameServerGroup.property.statusReason"></a>

- *Type:* `string`

---

##### `suspendedActions`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameServerGroup.property.suspendedActions"></a>

- *Type:* `string`[]

---

### GameLiftGameServerGroupAutoScalingPolicy <a name="aws-cdk-sdk.gamelift.GameLiftGameServerGroupAutoScalingPolicy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftGameServerGroupAutoScalingPolicy: gamelift.GameLiftGameServerGroupAutoScalingPolicy = { ... }
```

##### `targetTrackingConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameServerGroupAutoScalingPolicy.property.targetTrackingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftTargetTrackingConfiguration`](#aws-cdk-sdk.gamelift.GameLiftTargetTrackingConfiguration)

---

##### `estimatedInstanceWarmup`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameServerGroupAutoScalingPolicy.property.estimatedInstanceWarmup"></a>

- *Type:* `number`

---

### GameLiftGameServerInstance <a name="aws-cdk-sdk.gamelift.GameLiftGameServerInstance"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftGameServerInstance: gamelift.GameLiftGameServerInstance = { ... }
```

##### `gameServerGroupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameServerInstance.property.gameServerGroupArn"></a>

- *Type:* `string`

---

##### `gameServerGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameServerInstance.property.gameServerGroupName"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameServerInstance.property.instanceId"></a>

- *Type:* `string`

---

##### `instanceStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameServerInstance.property.instanceStatus"></a>

- *Type:* `string`

---

### GameLiftGameSession <a name="aws-cdk-sdk.gamelift.GameLiftGameSession"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftGameSession: gamelift.GameLiftGameSession = { ... }
```

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameSession.property.creationTime"></a>

- *Type:* `string`

---

##### `creatorId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameSession.property.creatorId"></a>

- *Type:* `string`

---

##### `currentPlayerSessionCount`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameSession.property.currentPlayerSessionCount"></a>

- *Type:* `number`

---

##### `dnsName`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameSession.property.dnsName"></a>

- *Type:* `string`

---

##### `fleetArn`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameSession.property.fleetArn"></a>

- *Type:* `string`

---

##### `fleetId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameSession.property.fleetId"></a>

- *Type:* `string`

---

##### `gameProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameSession.property.gameProperties"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftGameProperty`](#aws-cdk-sdk.gamelift.GameLiftGameProperty)[]

---

##### `gameSessionData`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameSession.property.gameSessionData"></a>

- *Type:* `string`

---

##### `gameSessionId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameSession.property.gameSessionId"></a>

- *Type:* `string`

---

##### `ipAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameSession.property.ipAddress"></a>

- *Type:* `string`

---

##### `matchmakerData`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameSession.property.matchmakerData"></a>

- *Type:* `string`

---

##### `maximumPlayerSessionCount`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameSession.property.maximumPlayerSessionCount"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameSession.property.name"></a>

- *Type:* `string`

---

##### `playerSessionCreationPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameSession.property.playerSessionCreationPolicy"></a>

- *Type:* `string`

---

##### `port`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameSession.property.port"></a>

- *Type:* `number`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameSession.property.status"></a>

- *Type:* `string`

---

##### `statusReason`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameSession.property.statusReason"></a>

- *Type:* `string`

---

##### `terminationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameSession.property.terminationTime"></a>

- *Type:* `string`

---

### GameLiftGameSessionConnectionInfo <a name="aws-cdk-sdk.gamelift.GameLiftGameSessionConnectionInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftGameSessionConnectionInfo: gamelift.GameLiftGameSessionConnectionInfo = { ... }
```

##### `dnsName`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameSessionConnectionInfo.property.dnsName"></a>

- *Type:* `string`

---

##### `gameSessionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameSessionConnectionInfo.property.gameSessionArn"></a>

- *Type:* `string`

---

##### `ipAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameSessionConnectionInfo.property.ipAddress"></a>

- *Type:* `string`

---

##### `matchedPlayerSessions`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameSessionConnectionInfo.property.matchedPlayerSessions"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftMatchedPlayerSession`](#aws-cdk-sdk.gamelift.GameLiftMatchedPlayerSession)[]

---

##### `port`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameSessionConnectionInfo.property.port"></a>

- *Type:* `number`

---

### GameLiftGameSessionDetail <a name="aws-cdk-sdk.gamelift.GameLiftGameSessionDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftGameSessionDetail: gamelift.GameLiftGameSessionDetail = { ... }
```

##### `gameSession`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameSessionDetail.property.gameSession"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftGameSession`](#aws-cdk-sdk.gamelift.GameLiftGameSession)

---

##### `protectionPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameSessionDetail.property.protectionPolicy"></a>

- *Type:* `string`

---

### GameLiftGameSessionPlacement <a name="aws-cdk-sdk.gamelift.GameLiftGameSessionPlacement"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftGameSessionPlacement: gamelift.GameLiftGameSessionPlacement = { ... }
```

##### `dnsName`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameSessionPlacement.property.dnsName"></a>

- *Type:* `string`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameSessionPlacement.property.endTime"></a>

- *Type:* `string`

---

##### `gameProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameSessionPlacement.property.gameProperties"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftGameProperty`](#aws-cdk-sdk.gamelift.GameLiftGameProperty)[]

---

##### `gameSessionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameSessionPlacement.property.gameSessionArn"></a>

- *Type:* `string`

---

##### `gameSessionData`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameSessionPlacement.property.gameSessionData"></a>

- *Type:* `string`

---

##### `gameSessionId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameSessionPlacement.property.gameSessionId"></a>

- *Type:* `string`

---

##### `gameSessionName`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameSessionPlacement.property.gameSessionName"></a>

- *Type:* `string`

---

##### `gameSessionQueueName`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameSessionPlacement.property.gameSessionQueueName"></a>

- *Type:* `string`

---

##### `gameSessionRegion`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameSessionPlacement.property.gameSessionRegion"></a>

- *Type:* `string`

---

##### `ipAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameSessionPlacement.property.ipAddress"></a>

- *Type:* `string`

---

##### `matchmakerData`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameSessionPlacement.property.matchmakerData"></a>

- *Type:* `string`

---

##### `maximumPlayerSessionCount`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameSessionPlacement.property.maximumPlayerSessionCount"></a>

- *Type:* `number`

---

##### `placedPlayerSessions`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameSessionPlacement.property.placedPlayerSessions"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftPlacedPlayerSession`](#aws-cdk-sdk.gamelift.GameLiftPlacedPlayerSession)[]

---

##### `placementId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameSessionPlacement.property.placementId"></a>

- *Type:* `string`

---

##### `playerLatencies`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameSessionPlacement.property.playerLatencies"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftPlayerLatency`](#aws-cdk-sdk.gamelift.GameLiftPlayerLatency)[]

---

##### `port`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameSessionPlacement.property.port"></a>

- *Type:* `number`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameSessionPlacement.property.startTime"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameSessionPlacement.property.status"></a>

- *Type:* `string`

---

### GameLiftGameSessionQueue <a name="aws-cdk-sdk.gamelift.GameLiftGameSessionQueue"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftGameSessionQueue: gamelift.GameLiftGameSessionQueue = { ... }
```

##### `destinations`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameSessionQueue.property.destinations"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftGameSessionQueueDestination`](#aws-cdk-sdk.gamelift.GameLiftGameSessionQueueDestination)[]

---

##### `gameSessionQueueArn`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameSessionQueue.property.gameSessionQueueArn"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameSessionQueue.property.name"></a>

- *Type:* `string`

---

##### `playerLatencyPolicies`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameSessionQueue.property.playerLatencyPolicies"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftPlayerLatencyPolicy`](#aws-cdk-sdk.gamelift.GameLiftPlayerLatencyPolicy)[]

---

##### `timeoutInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameSessionQueue.property.timeoutInSeconds"></a>

- *Type:* `number`

---

### GameLiftGameSessionQueueDestination <a name="aws-cdk-sdk.gamelift.GameLiftGameSessionQueueDestination"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftGameSessionQueueDestination: gamelift.GameLiftGameSessionQueueDestination = { ... }
```

##### `destinationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGameSessionQueueDestination.property.destinationArn"></a>

- *Type:* `string`

---

### GameLiftGetGameSessionLogUrlInput <a name="aws-cdk-sdk.gamelift.GameLiftGetGameSessionLogUrlInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftGetGameSessionLogUrlInput: gamelift.GameLiftGetGameSessionLogUrlInput = { ... }
```

##### `gameSessionId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGetGameSessionLogUrlInput.property.gameSessionId"></a>

- *Type:* `string`

---

### GameLiftGetGameSessionLogUrlOutput <a name="aws-cdk-sdk.gamelift.GameLiftGetGameSessionLogUrlOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftGetGameSessionLogUrlOutput: gamelift.GameLiftGetGameSessionLogUrlOutput = { ... }
```

##### `preSignedUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGetGameSessionLogUrlOutput.property.preSignedUrl"></a>

- *Type:* `string`

---

### GameLiftGetInstanceAccessInput <a name="aws-cdk-sdk.gamelift.GameLiftGetInstanceAccessInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftGetInstanceAccessInput: gamelift.GameLiftGetInstanceAccessInput = { ... }
```

##### `fleetId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGetInstanceAccessInput.property.fleetId"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGetInstanceAccessInput.property.instanceId"></a>

- *Type:* `string`

---

### GameLiftGetInstanceAccessOutput <a name="aws-cdk-sdk.gamelift.GameLiftGetInstanceAccessOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftGetInstanceAccessOutput: gamelift.GameLiftGetInstanceAccessOutput = { ... }
```

##### `instanceAccess`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftGetInstanceAccessOutput.property.instanceAccess"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftInstanceAccess`](#aws-cdk-sdk.gamelift.GameLiftInstanceAccess)

---

### GameLiftInstance <a name="aws-cdk-sdk.gamelift.GameLiftInstance"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftInstance: gamelift.GameLiftInstance = { ... }
```

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftInstance.property.creationTime"></a>

- *Type:* `string`

---

##### `dnsName`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftInstance.property.dnsName"></a>

- *Type:* `string`

---

##### `fleetId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftInstance.property.fleetId"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftInstance.property.instanceId"></a>

- *Type:* `string`

---

##### `ipAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftInstance.property.ipAddress"></a>

- *Type:* `string`

---

##### `operatingSystem`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftInstance.property.operatingSystem"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftInstance.property.status"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftInstance.property.type"></a>

- *Type:* `string`

---

### GameLiftInstanceAccess <a name="aws-cdk-sdk.gamelift.GameLiftInstanceAccess"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftInstanceAccess: gamelift.GameLiftInstanceAccess = { ... }
```

##### `credentials`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftInstanceAccess.property.credentials"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftInstanceCredentials`](#aws-cdk-sdk.gamelift.GameLiftInstanceCredentials)

---

##### `fleetId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftInstanceAccess.property.fleetId"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftInstanceAccess.property.instanceId"></a>

- *Type:* `string`

---

##### `ipAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftInstanceAccess.property.ipAddress"></a>

- *Type:* `string`

---

##### `operatingSystem`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftInstanceAccess.property.operatingSystem"></a>

- *Type:* `string`

---

### GameLiftInstanceCredentials <a name="aws-cdk-sdk.gamelift.GameLiftInstanceCredentials"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftInstanceCredentials: gamelift.GameLiftInstanceCredentials = { ... }
```

##### `secret`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftInstanceCredentials.property.secret"></a>

- *Type:* `string`

---

##### `userName`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftInstanceCredentials.property.userName"></a>

- *Type:* `string`

---

### GameLiftInstanceDefinition <a name="aws-cdk-sdk.gamelift.GameLiftInstanceDefinition"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftInstanceDefinition: gamelift.GameLiftInstanceDefinition = { ... }
```

##### `instanceType`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftInstanceDefinition.property.instanceType"></a>

- *Type:* `string`

---

##### `weightedCapacity`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftInstanceDefinition.property.weightedCapacity"></a>

- *Type:* `string`

---

### GameLiftIpPermission <a name="aws-cdk-sdk.gamelift.GameLiftIpPermission"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftIpPermission: gamelift.GameLiftIpPermission = { ... }
```

##### `fromPort`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftIpPermission.property.fromPort"></a>

- *Type:* `number`

---

##### `ipRange`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftIpPermission.property.ipRange"></a>

- *Type:* `string`

---

##### `protocol`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftIpPermission.property.protocol"></a>

- *Type:* `string`

---

##### `toPort`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftIpPermission.property.toPort"></a>

- *Type:* `number`

---

### GameLiftLaunchTemplateSpecification <a name="aws-cdk-sdk.gamelift.GameLiftLaunchTemplateSpecification"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftLaunchTemplateSpecification: gamelift.GameLiftLaunchTemplateSpecification = { ... }
```

##### `launchTemplateId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftLaunchTemplateSpecification.property.launchTemplateId"></a>

- *Type:* `string`

---

##### `launchTemplateName`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftLaunchTemplateSpecification.property.launchTemplateName"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftLaunchTemplateSpecification.property.version"></a>

- *Type:* `string`

---

### GameLiftListAliasesInput <a name="aws-cdk-sdk.gamelift.GameLiftListAliasesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftListAliasesInput: gamelift.GameLiftListAliasesInput = { ... }
```

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftListAliasesInput.property.limit"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftListAliasesInput.property.name"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftListAliasesInput.property.nextToken"></a>

- *Type:* `string`

---

##### `routingStrategyType`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftListAliasesInput.property.routingStrategyType"></a>

- *Type:* `string`

---

### GameLiftListAliasesOutput <a name="aws-cdk-sdk.gamelift.GameLiftListAliasesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftListAliasesOutput: gamelift.GameLiftListAliasesOutput = { ... }
```

##### `aliases`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftListAliasesOutput.property.aliases"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftAlias`](#aws-cdk-sdk.gamelift.GameLiftAlias)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftListAliasesOutput.property.nextToken"></a>

- *Type:* `string`

---

### GameLiftListBuildsInput <a name="aws-cdk-sdk.gamelift.GameLiftListBuildsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftListBuildsInput: gamelift.GameLiftListBuildsInput = { ... }
```

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftListBuildsInput.property.limit"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftListBuildsInput.property.nextToken"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftListBuildsInput.property.status"></a>

- *Type:* `string`

---

### GameLiftListBuildsOutput <a name="aws-cdk-sdk.gamelift.GameLiftListBuildsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftListBuildsOutput: gamelift.GameLiftListBuildsOutput = { ... }
```

##### `builds`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftListBuildsOutput.property.builds"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftBuild`](#aws-cdk-sdk.gamelift.GameLiftBuild)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftListBuildsOutput.property.nextToken"></a>

- *Type:* `string`

---

### GameLiftListFleetsInput <a name="aws-cdk-sdk.gamelift.GameLiftListFleetsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftListFleetsInput: gamelift.GameLiftListFleetsInput = { ... }
```

##### `buildId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftListFleetsInput.property.buildId"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftListFleetsInput.property.limit"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftListFleetsInput.property.nextToken"></a>

- *Type:* `string`

---

##### `scriptId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftListFleetsInput.property.scriptId"></a>

- *Type:* `string`

---

### GameLiftListFleetsOutput <a name="aws-cdk-sdk.gamelift.GameLiftListFleetsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftListFleetsOutput: gamelift.GameLiftListFleetsOutput = { ... }
```

##### `fleetIds`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftListFleetsOutput.property.fleetIds"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftListFleetsOutput.property.nextToken"></a>

- *Type:* `string`

---

### GameLiftListGameServerGroupsInput <a name="aws-cdk-sdk.gamelift.GameLiftListGameServerGroupsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftListGameServerGroupsInput: gamelift.GameLiftListGameServerGroupsInput = { ... }
```

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftListGameServerGroupsInput.property.limit"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftListGameServerGroupsInput.property.nextToken"></a>

- *Type:* `string`

---

### GameLiftListGameServerGroupsOutput <a name="aws-cdk-sdk.gamelift.GameLiftListGameServerGroupsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftListGameServerGroupsOutput: gamelift.GameLiftListGameServerGroupsOutput = { ... }
```

##### `gameServerGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftListGameServerGroupsOutput.property.gameServerGroups"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftGameServerGroup`](#aws-cdk-sdk.gamelift.GameLiftGameServerGroup)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftListGameServerGroupsOutput.property.nextToken"></a>

- *Type:* `string`

---

### GameLiftListGameServersInput <a name="aws-cdk-sdk.gamelift.GameLiftListGameServersInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftListGameServersInput: gamelift.GameLiftListGameServersInput = { ... }
```

##### `gameServerGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftListGameServersInput.property.gameServerGroupName"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftListGameServersInput.property.limit"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftListGameServersInput.property.nextToken"></a>

- *Type:* `string`

---

##### `sortOrder`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftListGameServersInput.property.sortOrder"></a>

- *Type:* `string`

---

### GameLiftListGameServersOutput <a name="aws-cdk-sdk.gamelift.GameLiftListGameServersOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftListGameServersOutput: gamelift.GameLiftListGameServersOutput = { ... }
```

##### `gameServers`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftListGameServersOutput.property.gameServers"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftGameServer`](#aws-cdk-sdk.gamelift.GameLiftGameServer)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftListGameServersOutput.property.nextToken"></a>

- *Type:* `string`

---

### GameLiftListScriptsInput <a name="aws-cdk-sdk.gamelift.GameLiftListScriptsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftListScriptsInput: gamelift.GameLiftListScriptsInput = { ... }
```

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftListScriptsInput.property.limit"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftListScriptsInput.property.nextToken"></a>

- *Type:* `string`

---

### GameLiftListScriptsOutput <a name="aws-cdk-sdk.gamelift.GameLiftListScriptsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftListScriptsOutput: gamelift.GameLiftListScriptsOutput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftListScriptsOutput.property.nextToken"></a>

- *Type:* `string`

---

##### `scripts`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftListScriptsOutput.property.scripts"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftScript`](#aws-cdk-sdk.gamelift.GameLiftScript)[]

---

### GameLiftListTagsForResourceRequest <a name="aws-cdk-sdk.gamelift.GameLiftListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftListTagsForResourceRequest: gamelift.GameLiftListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### GameLiftListTagsForResourceResponse <a name="aws-cdk-sdk.gamelift.GameLiftListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftListTagsForResourceResponse: gamelift.GameLiftListTagsForResourceResponse = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftListTagsForResourceResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftTag`](#aws-cdk-sdk.gamelift.GameLiftTag)[]

---

### GameLiftMatchedPlayerSession <a name="aws-cdk-sdk.gamelift.GameLiftMatchedPlayerSession"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftMatchedPlayerSession: gamelift.GameLiftMatchedPlayerSession = { ... }
```

##### `playerId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftMatchedPlayerSession.property.playerId"></a>

- *Type:* `string`

---

##### `playerSessionId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftMatchedPlayerSession.property.playerSessionId"></a>

- *Type:* `string`

---

### GameLiftMatchmakingConfiguration <a name="aws-cdk-sdk.gamelift.GameLiftMatchmakingConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftMatchmakingConfiguration: gamelift.GameLiftMatchmakingConfiguration = { ... }
```

##### `acceptanceRequired`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftMatchmakingConfiguration.property.acceptanceRequired"></a>

- *Type:* `boolean`

---

##### `acceptanceTimeoutSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftMatchmakingConfiguration.property.acceptanceTimeoutSeconds"></a>

- *Type:* `number`

---

##### `additionalPlayerCount`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftMatchmakingConfiguration.property.additionalPlayerCount"></a>

- *Type:* `number`

---

##### `backfillMode`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftMatchmakingConfiguration.property.backfillMode"></a>

- *Type:* `string`

---

##### `configurationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftMatchmakingConfiguration.property.configurationArn"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftMatchmakingConfiguration.property.creationTime"></a>

- *Type:* `string`

---

##### `customEventData`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftMatchmakingConfiguration.property.customEventData"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftMatchmakingConfiguration.property.description"></a>

- *Type:* `string`

---

##### `flexMatchMode`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftMatchmakingConfiguration.property.flexMatchMode"></a>

- *Type:* `string`

---

##### `gameProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftMatchmakingConfiguration.property.gameProperties"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftGameProperty`](#aws-cdk-sdk.gamelift.GameLiftGameProperty)[]

---

##### `gameSessionData`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftMatchmakingConfiguration.property.gameSessionData"></a>

- *Type:* `string`

---

##### `gameSessionQueueArns`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftMatchmakingConfiguration.property.gameSessionQueueArns"></a>

- *Type:* `string`[]

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftMatchmakingConfiguration.property.name"></a>

- *Type:* `string`

---

##### `notificationTarget`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftMatchmakingConfiguration.property.notificationTarget"></a>

- *Type:* `string`

---

##### `requestTimeoutSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftMatchmakingConfiguration.property.requestTimeoutSeconds"></a>

- *Type:* `number`

---

##### `ruleSetArn`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftMatchmakingConfiguration.property.ruleSetArn"></a>

- *Type:* `string`

---

##### `ruleSetName`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftMatchmakingConfiguration.property.ruleSetName"></a>

- *Type:* `string`

---

### GameLiftMatchmakingRuleSet <a name="aws-cdk-sdk.gamelift.GameLiftMatchmakingRuleSet"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftMatchmakingRuleSet: gamelift.GameLiftMatchmakingRuleSet = { ... }
```

##### `ruleSetBody`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftMatchmakingRuleSet.property.ruleSetBody"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftMatchmakingRuleSet.property.creationTime"></a>

- *Type:* `string`

---

##### `ruleSetArn`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftMatchmakingRuleSet.property.ruleSetArn"></a>

- *Type:* `string`

---

##### `ruleSetName`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftMatchmakingRuleSet.property.ruleSetName"></a>

- *Type:* `string`

---

### GameLiftMatchmakingTicket <a name="aws-cdk-sdk.gamelift.GameLiftMatchmakingTicket"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftMatchmakingTicket: gamelift.GameLiftMatchmakingTicket = { ... }
```

##### `configurationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftMatchmakingTicket.property.configurationArn"></a>

- *Type:* `string`

---

##### `configurationName`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftMatchmakingTicket.property.configurationName"></a>

- *Type:* `string`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftMatchmakingTicket.property.endTime"></a>

- *Type:* `string`

---

##### `estimatedWaitTime`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftMatchmakingTicket.property.estimatedWaitTime"></a>

- *Type:* `number`

---

##### `gameSessionConnectionInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftMatchmakingTicket.property.gameSessionConnectionInfo"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftGameSessionConnectionInfo`](#aws-cdk-sdk.gamelift.GameLiftGameSessionConnectionInfo)

---

##### `players`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftMatchmakingTicket.property.players"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftPlayer`](#aws-cdk-sdk.gamelift.GameLiftPlayer)[]

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftMatchmakingTicket.property.startTime"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftMatchmakingTicket.property.status"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftMatchmakingTicket.property.statusMessage"></a>

- *Type:* `string`

---

##### `statusReason`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftMatchmakingTicket.property.statusReason"></a>

- *Type:* `string`

---

##### `ticketId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftMatchmakingTicket.property.ticketId"></a>

- *Type:* `string`

---

### GameLiftPlacedPlayerSession <a name="aws-cdk-sdk.gamelift.GameLiftPlacedPlayerSession"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftPlacedPlayerSession: gamelift.GameLiftPlacedPlayerSession = { ... }
```

##### `playerId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftPlacedPlayerSession.property.playerId"></a>

- *Type:* `string`

---

##### `playerSessionId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftPlacedPlayerSession.property.playerSessionId"></a>

- *Type:* `string`

---

### GameLiftPlayer <a name="aws-cdk-sdk.gamelift.GameLiftPlayer"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftPlayer: gamelift.GameLiftPlayer = { ... }
```

##### `latencyInMs`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftPlayer.property.latencyInMs"></a>

- *Type:* {[ key: string ]: `number`}

---

##### `playerAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftPlayer.property.playerAttributes"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.gamelift.GameLiftAttributeValue`](#aws-cdk-sdk.gamelift.GameLiftAttributeValue)}

---

##### `playerId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftPlayer.property.playerId"></a>

- *Type:* `string`

---

##### `team`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftPlayer.property.team"></a>

- *Type:* `string`

---

### GameLiftPlayerLatency <a name="aws-cdk-sdk.gamelift.GameLiftPlayerLatency"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftPlayerLatency: gamelift.GameLiftPlayerLatency = { ... }
```

##### `latencyInMilliseconds`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftPlayerLatency.property.latencyInMilliseconds"></a>

- *Type:* `number`

---

##### `playerId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftPlayerLatency.property.playerId"></a>

- *Type:* `string`

---

##### `regionIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftPlayerLatency.property.regionIdentifier"></a>

- *Type:* `string`

---

### GameLiftPlayerLatencyPolicy <a name="aws-cdk-sdk.gamelift.GameLiftPlayerLatencyPolicy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftPlayerLatencyPolicy: gamelift.GameLiftPlayerLatencyPolicy = { ... }
```

##### `maximumIndividualPlayerLatencyMilliseconds`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftPlayerLatencyPolicy.property.maximumIndividualPlayerLatencyMilliseconds"></a>

- *Type:* `number`

---

##### `policyDurationSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftPlayerLatencyPolicy.property.policyDurationSeconds"></a>

- *Type:* `number`

---

### GameLiftPlayerSession <a name="aws-cdk-sdk.gamelift.GameLiftPlayerSession"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftPlayerSession: gamelift.GameLiftPlayerSession = { ... }
```

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftPlayerSession.property.creationTime"></a>

- *Type:* `string`

---

##### `dnsName`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftPlayerSession.property.dnsName"></a>

- *Type:* `string`

---

##### `fleetArn`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftPlayerSession.property.fleetArn"></a>

- *Type:* `string`

---

##### `fleetId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftPlayerSession.property.fleetId"></a>

- *Type:* `string`

---

##### `gameSessionId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftPlayerSession.property.gameSessionId"></a>

- *Type:* `string`

---

##### `ipAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftPlayerSession.property.ipAddress"></a>

- *Type:* `string`

---

##### `playerData`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftPlayerSession.property.playerData"></a>

- *Type:* `string`

---

##### `playerId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftPlayerSession.property.playerId"></a>

- *Type:* `string`

---

##### `playerSessionId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftPlayerSession.property.playerSessionId"></a>

- *Type:* `string`

---

##### `port`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftPlayerSession.property.port"></a>

- *Type:* `number`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftPlayerSession.property.status"></a>

- *Type:* `string`

---

##### `terminationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftPlayerSession.property.terminationTime"></a>

- *Type:* `string`

---

### GameLiftPutScalingPolicyInput <a name="aws-cdk-sdk.gamelift.GameLiftPutScalingPolicyInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftPutScalingPolicyInput: gamelift.GameLiftPutScalingPolicyInput = { ... }
```

##### `fleetId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftPutScalingPolicyInput.property.fleetId"></a>

- *Type:* `string`

---

##### `metricName`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftPutScalingPolicyInput.property.metricName"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftPutScalingPolicyInput.property.name"></a>

- *Type:* `string`

---

##### `comparisonOperator`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftPutScalingPolicyInput.property.comparisonOperator"></a>

- *Type:* `string`

---

##### `evaluationPeriods`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftPutScalingPolicyInput.property.evaluationPeriods"></a>

- *Type:* `number`

---

##### `policyType`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftPutScalingPolicyInput.property.policyType"></a>

- *Type:* `string`

---

##### `scalingAdjustment`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftPutScalingPolicyInput.property.scalingAdjustment"></a>

- *Type:* `number`

---

##### `scalingAdjustmentType`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftPutScalingPolicyInput.property.scalingAdjustmentType"></a>

- *Type:* `string`

---

##### `targetConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftPutScalingPolicyInput.property.targetConfiguration"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftTargetConfiguration`](#aws-cdk-sdk.gamelift.GameLiftTargetConfiguration)

---

##### `threshold`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftPutScalingPolicyInput.property.threshold"></a>

- *Type:* `number`

---

### GameLiftPutScalingPolicyOutput <a name="aws-cdk-sdk.gamelift.GameLiftPutScalingPolicyOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftPutScalingPolicyOutput: gamelift.GameLiftPutScalingPolicyOutput = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftPutScalingPolicyOutput.property.name"></a>

- *Type:* `string`

---

### GameLiftRegisterGameServerInput <a name="aws-cdk-sdk.gamelift.GameLiftRegisterGameServerInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftRegisterGameServerInput: gamelift.GameLiftRegisterGameServerInput = { ... }
```

##### `gameServerGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftRegisterGameServerInput.property.gameServerGroupName"></a>

- *Type:* `string`

---

##### `gameServerId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftRegisterGameServerInput.property.gameServerId"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftRegisterGameServerInput.property.instanceId"></a>

- *Type:* `string`

---

##### `connectionInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftRegisterGameServerInput.property.connectionInfo"></a>

- *Type:* `string`

---

##### `gameServerData`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftRegisterGameServerInput.property.gameServerData"></a>

- *Type:* `string`

---

### GameLiftRegisterGameServerOutput <a name="aws-cdk-sdk.gamelift.GameLiftRegisterGameServerOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftRegisterGameServerOutput: gamelift.GameLiftRegisterGameServerOutput = { ... }
```

##### `gameServer`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftRegisterGameServerOutput.property.gameServer"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftGameServer`](#aws-cdk-sdk.gamelift.GameLiftGameServer)

---

### GameLiftRequestUploadCredentialsInput <a name="aws-cdk-sdk.gamelift.GameLiftRequestUploadCredentialsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftRequestUploadCredentialsInput: gamelift.GameLiftRequestUploadCredentialsInput = { ... }
```

##### `buildId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftRequestUploadCredentialsInput.property.buildId"></a>

- *Type:* `string`

---

### GameLiftRequestUploadCredentialsOutput <a name="aws-cdk-sdk.gamelift.GameLiftRequestUploadCredentialsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftRequestUploadCredentialsOutput: gamelift.GameLiftRequestUploadCredentialsOutput = { ... }
```

##### `storageLocation`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftRequestUploadCredentialsOutput.property.storageLocation"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftS3Location`](#aws-cdk-sdk.gamelift.GameLiftS3Location)

---

##### `uploadCredentials`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftRequestUploadCredentialsOutput.property.uploadCredentials"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftAwsCredentials`](#aws-cdk-sdk.gamelift.GameLiftAwsCredentials)

---

### GameLiftResolveAliasInput <a name="aws-cdk-sdk.gamelift.GameLiftResolveAliasInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftResolveAliasInput: gamelift.GameLiftResolveAliasInput = { ... }
```

##### `aliasId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResolveAliasInput.property.aliasId"></a>

- *Type:* `string`

---

### GameLiftResolveAliasOutput <a name="aws-cdk-sdk.gamelift.GameLiftResolveAliasOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftResolveAliasOutput: gamelift.GameLiftResolveAliasOutput = { ... }
```

##### `fleetArn`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResolveAliasOutput.property.fleetArn"></a>

- *Type:* `string`

---

##### `fleetId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResolveAliasOutput.property.fleetId"></a>

- *Type:* `string`

---

### GameLiftResourceCreationLimitPolicy <a name="aws-cdk-sdk.gamelift.GameLiftResourceCreationLimitPolicy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftResourceCreationLimitPolicy: gamelift.GameLiftResourceCreationLimitPolicy = { ... }
```

##### `newGameSessionsPerCreator`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResourceCreationLimitPolicy.property.newGameSessionsPerCreator"></a>

- *Type:* `number`

---

##### `policyPeriodInMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResourceCreationLimitPolicy.property.policyPeriodInMinutes"></a>

- *Type:* `number`

---

### GameLiftResumeGameServerGroupInput <a name="aws-cdk-sdk.gamelift.GameLiftResumeGameServerGroupInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftResumeGameServerGroupInput: gamelift.GameLiftResumeGameServerGroupInput = { ... }
```

##### `gameServerGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResumeGameServerGroupInput.property.gameServerGroupName"></a>

- *Type:* `string`

---

##### `resumeActions`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResumeGameServerGroupInput.property.resumeActions"></a>

- *Type:* `string`[]

---

### GameLiftResumeGameServerGroupOutput <a name="aws-cdk-sdk.gamelift.GameLiftResumeGameServerGroupOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftResumeGameServerGroupOutput: gamelift.GameLiftResumeGameServerGroupOutput = { ... }
```

##### `gameServerGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResumeGameServerGroupOutput.property.gameServerGroup"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftGameServerGroup`](#aws-cdk-sdk.gamelift.GameLiftGameServerGroup)

---

### GameLiftRoutingStrategy <a name="aws-cdk-sdk.gamelift.GameLiftRoutingStrategy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftRoutingStrategy: gamelift.GameLiftRoutingStrategy = { ... }
```

##### `fleetId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftRoutingStrategy.property.fleetId"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftRoutingStrategy.property.message"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftRoutingStrategy.property.type"></a>

- *Type:* `string`

---

### GameLiftRuntimeConfiguration <a name="aws-cdk-sdk.gamelift.GameLiftRuntimeConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftRuntimeConfiguration: gamelift.GameLiftRuntimeConfiguration = { ... }
```

##### `gameSessionActivationTimeoutSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftRuntimeConfiguration.property.gameSessionActivationTimeoutSeconds"></a>

- *Type:* `number`

---

##### `maxConcurrentGameSessionActivations`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftRuntimeConfiguration.property.maxConcurrentGameSessionActivations"></a>

- *Type:* `number`

---

##### `serverProcesses`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftRuntimeConfiguration.property.serverProcesses"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftServerProcess`](#aws-cdk-sdk.gamelift.GameLiftServerProcess)[]

---

### GameLiftS3Location <a name="aws-cdk-sdk.gamelift.GameLiftS3Location"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftS3Location: gamelift.GameLiftS3Location = { ... }
```

##### `bucket`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftS3Location.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftS3Location.property.key"></a>

- *Type:* `string`

---

##### `objectVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftS3Location.property.objectVersion"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftS3Location.property.roleArn"></a>

- *Type:* `string`

---

### GameLiftScalingPolicy <a name="aws-cdk-sdk.gamelift.GameLiftScalingPolicy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftScalingPolicy: gamelift.GameLiftScalingPolicy = { ... }
```

##### `comparisonOperator`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftScalingPolicy.property.comparisonOperator"></a>

- *Type:* `string`

---

##### `evaluationPeriods`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftScalingPolicy.property.evaluationPeriods"></a>

- *Type:* `number`

---

##### `fleetId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftScalingPolicy.property.fleetId"></a>

- *Type:* `string`

---

##### `metricName`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftScalingPolicy.property.metricName"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftScalingPolicy.property.name"></a>

- *Type:* `string`

---

##### `policyType`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftScalingPolicy.property.policyType"></a>

- *Type:* `string`

---

##### `scalingAdjustment`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftScalingPolicy.property.scalingAdjustment"></a>

- *Type:* `number`

---

##### `scalingAdjustmentType`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftScalingPolicy.property.scalingAdjustmentType"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftScalingPolicy.property.status"></a>

- *Type:* `string`

---

##### `targetConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftScalingPolicy.property.targetConfiguration"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftTargetConfiguration`](#aws-cdk-sdk.gamelift.GameLiftTargetConfiguration)

---

##### `threshold`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftScalingPolicy.property.threshold"></a>

- *Type:* `number`

---

### GameLiftScript <a name="aws-cdk-sdk.gamelift.GameLiftScript"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftScript: gamelift.GameLiftScript = { ... }
```

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftScript.property.creationTime"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftScript.property.name"></a>

- *Type:* `string`

---

##### `scriptArn`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftScript.property.scriptArn"></a>

- *Type:* `string`

---

##### `scriptId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftScript.property.scriptId"></a>

- *Type:* `string`

---

##### `sizeOnDisk`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftScript.property.sizeOnDisk"></a>

- *Type:* `number`

---

##### `storageLocation`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftScript.property.storageLocation"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftS3Location`](#aws-cdk-sdk.gamelift.GameLiftS3Location)

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftScript.property.version"></a>

- *Type:* `string`

---

### GameLiftSearchGameSessionsInput <a name="aws-cdk-sdk.gamelift.GameLiftSearchGameSessionsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftSearchGameSessionsInput: gamelift.GameLiftSearchGameSessionsInput = { ... }
```

##### `aliasId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftSearchGameSessionsInput.property.aliasId"></a>

- *Type:* `string`

---

##### `filterExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftSearchGameSessionsInput.property.filterExpression"></a>

- *Type:* `string`

---

##### `fleetId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftSearchGameSessionsInput.property.fleetId"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftSearchGameSessionsInput.property.limit"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftSearchGameSessionsInput.property.nextToken"></a>

- *Type:* `string`

---

##### `sortExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftSearchGameSessionsInput.property.sortExpression"></a>

- *Type:* `string`

---

### GameLiftSearchGameSessionsOutput <a name="aws-cdk-sdk.gamelift.GameLiftSearchGameSessionsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftSearchGameSessionsOutput: gamelift.GameLiftSearchGameSessionsOutput = { ... }
```

##### `gameSessions`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftSearchGameSessionsOutput.property.gameSessions"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftGameSession`](#aws-cdk-sdk.gamelift.GameLiftGameSession)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftSearchGameSessionsOutput.property.nextToken"></a>

- *Type:* `string`

---

### GameLiftServerProcess <a name="aws-cdk-sdk.gamelift.GameLiftServerProcess"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftServerProcess: gamelift.GameLiftServerProcess = { ... }
```

##### `concurrentExecutions`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftServerProcess.property.concurrentExecutions"></a>

- *Type:* `number`

---

##### `launchPath`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftServerProcess.property.launchPath"></a>

- *Type:* `string`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftServerProcess.property.parameters"></a>

- *Type:* `string`

---

### GameLiftStartFleetActionsInput <a name="aws-cdk-sdk.gamelift.GameLiftStartFleetActionsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftStartFleetActionsInput: gamelift.GameLiftStartFleetActionsInput = { ... }
```

##### `actions`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftStartFleetActionsInput.property.actions"></a>

- *Type:* `string`[]

---

##### `fleetId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftStartFleetActionsInput.property.fleetId"></a>

- *Type:* `string`

---

### GameLiftStartFleetActionsOutput <a name="aws-cdk-sdk.gamelift.GameLiftStartFleetActionsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftStartFleetActionsOutput: gamelift.GameLiftStartFleetActionsOutput = { ... }
```

### GameLiftStartGameSessionPlacementInput <a name="aws-cdk-sdk.gamelift.GameLiftStartGameSessionPlacementInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftStartGameSessionPlacementInput: gamelift.GameLiftStartGameSessionPlacementInput = { ... }
```

##### `gameSessionQueueName`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftStartGameSessionPlacementInput.property.gameSessionQueueName"></a>

- *Type:* `string`

---

##### `maximumPlayerSessionCount`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftStartGameSessionPlacementInput.property.maximumPlayerSessionCount"></a>

- *Type:* `number`

---

##### `placementId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftStartGameSessionPlacementInput.property.placementId"></a>

- *Type:* `string`

---

##### `desiredPlayerSessions`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftStartGameSessionPlacementInput.property.desiredPlayerSessions"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDesiredPlayerSession`](#aws-cdk-sdk.gamelift.GameLiftDesiredPlayerSession)[]

---

##### `gameProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftStartGameSessionPlacementInput.property.gameProperties"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftGameProperty`](#aws-cdk-sdk.gamelift.GameLiftGameProperty)[]

---

##### `gameSessionData`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftStartGameSessionPlacementInput.property.gameSessionData"></a>

- *Type:* `string`

---

##### `gameSessionName`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftStartGameSessionPlacementInput.property.gameSessionName"></a>

- *Type:* `string`

---

##### `playerLatencies`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftStartGameSessionPlacementInput.property.playerLatencies"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftPlayerLatency`](#aws-cdk-sdk.gamelift.GameLiftPlayerLatency)[]

---

### GameLiftStartGameSessionPlacementOutput <a name="aws-cdk-sdk.gamelift.GameLiftStartGameSessionPlacementOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftStartGameSessionPlacementOutput: gamelift.GameLiftStartGameSessionPlacementOutput = { ... }
```

##### `gameSessionPlacement`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftStartGameSessionPlacementOutput.property.gameSessionPlacement"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftGameSessionPlacement`](#aws-cdk-sdk.gamelift.GameLiftGameSessionPlacement)

---

### GameLiftStartMatchBackfillInput <a name="aws-cdk-sdk.gamelift.GameLiftStartMatchBackfillInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftStartMatchBackfillInput: gamelift.GameLiftStartMatchBackfillInput = { ... }
```

##### `configurationName`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftStartMatchBackfillInput.property.configurationName"></a>

- *Type:* `string`

---

##### `players`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftStartMatchBackfillInput.property.players"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftPlayer`](#aws-cdk-sdk.gamelift.GameLiftPlayer)[]

---

##### `gameSessionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftStartMatchBackfillInput.property.gameSessionArn"></a>

- *Type:* `string`

---

##### `ticketId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftStartMatchBackfillInput.property.ticketId"></a>

- *Type:* `string`

---

### GameLiftStartMatchBackfillOutput <a name="aws-cdk-sdk.gamelift.GameLiftStartMatchBackfillOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftStartMatchBackfillOutput: gamelift.GameLiftStartMatchBackfillOutput = { ... }
```

##### `matchmakingTicket`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftStartMatchBackfillOutput.property.matchmakingTicket"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftMatchmakingTicket`](#aws-cdk-sdk.gamelift.GameLiftMatchmakingTicket)

---

### GameLiftStartMatchmakingInput <a name="aws-cdk-sdk.gamelift.GameLiftStartMatchmakingInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftStartMatchmakingInput: gamelift.GameLiftStartMatchmakingInput = { ... }
```

##### `configurationName`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftStartMatchmakingInput.property.configurationName"></a>

- *Type:* `string`

---

##### `players`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftStartMatchmakingInput.property.players"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftPlayer`](#aws-cdk-sdk.gamelift.GameLiftPlayer)[]

---

##### `ticketId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftStartMatchmakingInput.property.ticketId"></a>

- *Type:* `string`

---

### GameLiftStartMatchmakingOutput <a name="aws-cdk-sdk.gamelift.GameLiftStartMatchmakingOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftStartMatchmakingOutput: gamelift.GameLiftStartMatchmakingOutput = { ... }
```

##### `matchmakingTicket`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftStartMatchmakingOutput.property.matchmakingTicket"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftMatchmakingTicket`](#aws-cdk-sdk.gamelift.GameLiftMatchmakingTicket)

---

### GameLiftStopFleetActionsInput <a name="aws-cdk-sdk.gamelift.GameLiftStopFleetActionsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftStopFleetActionsInput: gamelift.GameLiftStopFleetActionsInput = { ... }
```

##### `actions`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftStopFleetActionsInput.property.actions"></a>

- *Type:* `string`[]

---

##### `fleetId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftStopFleetActionsInput.property.fleetId"></a>

- *Type:* `string`

---

### GameLiftStopFleetActionsOutput <a name="aws-cdk-sdk.gamelift.GameLiftStopFleetActionsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftStopFleetActionsOutput: gamelift.GameLiftStopFleetActionsOutput = { ... }
```

### GameLiftStopGameSessionPlacementInput <a name="aws-cdk-sdk.gamelift.GameLiftStopGameSessionPlacementInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftStopGameSessionPlacementInput: gamelift.GameLiftStopGameSessionPlacementInput = { ... }
```

##### `placementId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftStopGameSessionPlacementInput.property.placementId"></a>

- *Type:* `string`

---

### GameLiftStopGameSessionPlacementOutput <a name="aws-cdk-sdk.gamelift.GameLiftStopGameSessionPlacementOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftStopGameSessionPlacementOutput: gamelift.GameLiftStopGameSessionPlacementOutput = { ... }
```

##### `gameSessionPlacement`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftStopGameSessionPlacementOutput.property.gameSessionPlacement"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftGameSessionPlacement`](#aws-cdk-sdk.gamelift.GameLiftGameSessionPlacement)

---

### GameLiftStopMatchmakingInput <a name="aws-cdk-sdk.gamelift.GameLiftStopMatchmakingInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftStopMatchmakingInput: gamelift.GameLiftStopMatchmakingInput = { ... }
```

##### `ticketId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftStopMatchmakingInput.property.ticketId"></a>

- *Type:* `string`

---

### GameLiftStopMatchmakingOutput <a name="aws-cdk-sdk.gamelift.GameLiftStopMatchmakingOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftStopMatchmakingOutput: gamelift.GameLiftStopMatchmakingOutput = { ... }
```

### GameLiftSuspendGameServerGroupInput <a name="aws-cdk-sdk.gamelift.GameLiftSuspendGameServerGroupInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftSuspendGameServerGroupInput: gamelift.GameLiftSuspendGameServerGroupInput = { ... }
```

##### `gameServerGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftSuspendGameServerGroupInput.property.gameServerGroupName"></a>

- *Type:* `string`

---

##### `suspendActions`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftSuspendGameServerGroupInput.property.suspendActions"></a>

- *Type:* `string`[]

---

### GameLiftSuspendGameServerGroupOutput <a name="aws-cdk-sdk.gamelift.GameLiftSuspendGameServerGroupOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftSuspendGameServerGroupOutput: gamelift.GameLiftSuspendGameServerGroupOutput = { ... }
```

##### `gameServerGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftSuspendGameServerGroupOutput.property.gameServerGroup"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftGameServerGroup`](#aws-cdk-sdk.gamelift.GameLiftGameServerGroup)

---

### GameLiftTag <a name="aws-cdk-sdk.gamelift.GameLiftTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftTag: gamelift.GameLiftTag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftTag.property.value"></a>

- *Type:* `string`

---

### GameLiftTagResourceRequest <a name="aws-cdk-sdk.gamelift.GameLiftTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftTagResourceRequest: gamelift.GameLiftTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftTagResourceRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftTag`](#aws-cdk-sdk.gamelift.GameLiftTag)[]

---

### GameLiftTagResourceResponse <a name="aws-cdk-sdk.gamelift.GameLiftTagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftTagResourceResponse: gamelift.GameLiftTagResourceResponse = { ... }
```

### GameLiftTargetConfiguration <a name="aws-cdk-sdk.gamelift.GameLiftTargetConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftTargetConfiguration: gamelift.GameLiftTargetConfiguration = { ... }
```

##### `targetValue`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftTargetConfiguration.property.targetValue"></a>

- *Type:* `number`

---

### GameLiftTargetTrackingConfiguration <a name="aws-cdk-sdk.gamelift.GameLiftTargetTrackingConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftTargetTrackingConfiguration: gamelift.GameLiftTargetTrackingConfiguration = { ... }
```

##### `targetValue`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftTargetTrackingConfiguration.property.targetValue"></a>

- *Type:* `number`

---

### GameLiftUntagResourceRequest <a name="aws-cdk-sdk.gamelift.GameLiftUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftUntagResourceRequest: gamelift.GameLiftUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### GameLiftUntagResourceResponse <a name="aws-cdk-sdk.gamelift.GameLiftUntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftUntagResourceResponse: gamelift.GameLiftUntagResourceResponse = { ... }
```

### GameLiftUpdateAliasInput <a name="aws-cdk-sdk.gamelift.GameLiftUpdateAliasInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftUpdateAliasInput: gamelift.GameLiftUpdateAliasInput = { ... }
```

##### `aliasId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateAliasInput.property.aliasId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateAliasInput.property.description"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateAliasInput.property.name"></a>

- *Type:* `string`

---

##### `routingStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateAliasInput.property.routingStrategy"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftRoutingStrategy`](#aws-cdk-sdk.gamelift.GameLiftRoutingStrategy)

---

### GameLiftUpdateAliasOutput <a name="aws-cdk-sdk.gamelift.GameLiftUpdateAliasOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftUpdateAliasOutput: gamelift.GameLiftUpdateAliasOutput = { ... }
```

##### `alias`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateAliasOutput.property.alias"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftAlias`](#aws-cdk-sdk.gamelift.GameLiftAlias)

---

### GameLiftUpdateBuildInput <a name="aws-cdk-sdk.gamelift.GameLiftUpdateBuildInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftUpdateBuildInput: gamelift.GameLiftUpdateBuildInput = { ... }
```

##### `buildId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateBuildInput.property.buildId"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateBuildInput.property.name"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateBuildInput.property.version"></a>

- *Type:* `string`

---

### GameLiftUpdateBuildOutput <a name="aws-cdk-sdk.gamelift.GameLiftUpdateBuildOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftUpdateBuildOutput: gamelift.GameLiftUpdateBuildOutput = { ... }
```

##### `build2`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateBuildOutput.property.build2"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftBuild`](#aws-cdk-sdk.gamelift.GameLiftBuild)

---

### GameLiftUpdateFleetAttributesInput <a name="aws-cdk-sdk.gamelift.GameLiftUpdateFleetAttributesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftUpdateFleetAttributesInput: gamelift.GameLiftUpdateFleetAttributesInput = { ... }
```

##### `fleetId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateFleetAttributesInput.property.fleetId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateFleetAttributesInput.property.description"></a>

- *Type:* `string`

---

##### `metricGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateFleetAttributesInput.property.metricGroups"></a>

- *Type:* `string`[]

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateFleetAttributesInput.property.name"></a>

- *Type:* `string`

---

##### `newGameSessionProtectionPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateFleetAttributesInput.property.newGameSessionProtectionPolicy"></a>

- *Type:* `string`

---

##### `resourceCreationLimitPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateFleetAttributesInput.property.resourceCreationLimitPolicy"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftResourceCreationLimitPolicy`](#aws-cdk-sdk.gamelift.GameLiftResourceCreationLimitPolicy)

---

### GameLiftUpdateFleetAttributesOutput <a name="aws-cdk-sdk.gamelift.GameLiftUpdateFleetAttributesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftUpdateFleetAttributesOutput: gamelift.GameLiftUpdateFleetAttributesOutput = { ... }
```

##### `fleetId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateFleetAttributesOutput.property.fleetId"></a>

- *Type:* `string`

---

### GameLiftUpdateFleetCapacityInput <a name="aws-cdk-sdk.gamelift.GameLiftUpdateFleetCapacityInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftUpdateFleetCapacityInput: gamelift.GameLiftUpdateFleetCapacityInput = { ... }
```

##### `fleetId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateFleetCapacityInput.property.fleetId"></a>

- *Type:* `string`

---

##### `desiredInstances`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateFleetCapacityInput.property.desiredInstances"></a>

- *Type:* `number`

---

##### `maxSize`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateFleetCapacityInput.property.maxSize"></a>

- *Type:* `number`

---

##### `minSize`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateFleetCapacityInput.property.minSize"></a>

- *Type:* `number`

---

### GameLiftUpdateFleetCapacityOutput <a name="aws-cdk-sdk.gamelift.GameLiftUpdateFleetCapacityOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftUpdateFleetCapacityOutput: gamelift.GameLiftUpdateFleetCapacityOutput = { ... }
```

##### `fleetId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateFleetCapacityOutput.property.fleetId"></a>

- *Type:* `string`

---

### GameLiftUpdateFleetPortSettingsInput <a name="aws-cdk-sdk.gamelift.GameLiftUpdateFleetPortSettingsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftUpdateFleetPortSettingsInput: gamelift.GameLiftUpdateFleetPortSettingsInput = { ... }
```

##### `fleetId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateFleetPortSettingsInput.property.fleetId"></a>

- *Type:* `string`

---

##### `inboundPermissionAuthorizations`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateFleetPortSettingsInput.property.inboundPermissionAuthorizations"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftIpPermission`](#aws-cdk-sdk.gamelift.GameLiftIpPermission)[]

---

##### `inboundPermissionRevocations`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateFleetPortSettingsInput.property.inboundPermissionRevocations"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftIpPermission`](#aws-cdk-sdk.gamelift.GameLiftIpPermission)[]

---

### GameLiftUpdateFleetPortSettingsOutput <a name="aws-cdk-sdk.gamelift.GameLiftUpdateFleetPortSettingsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftUpdateFleetPortSettingsOutput: gamelift.GameLiftUpdateFleetPortSettingsOutput = { ... }
```

##### `fleetId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateFleetPortSettingsOutput.property.fleetId"></a>

- *Type:* `string`

---

### GameLiftUpdateGameServerGroupInput <a name="aws-cdk-sdk.gamelift.GameLiftUpdateGameServerGroupInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftUpdateGameServerGroupInput: gamelift.GameLiftUpdateGameServerGroupInput = { ... }
```

##### `gameServerGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateGameServerGroupInput.property.gameServerGroupName"></a>

- *Type:* `string`

---

##### `balancingStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateGameServerGroupInput.property.balancingStrategy"></a>

- *Type:* `string`

---

##### `gameServerProtectionPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateGameServerGroupInput.property.gameServerProtectionPolicy"></a>

- *Type:* `string`

---

##### `instanceDefinitions`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateGameServerGroupInput.property.instanceDefinitions"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftInstanceDefinition`](#aws-cdk-sdk.gamelift.GameLiftInstanceDefinition)[]

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateGameServerGroupInput.property.roleArn"></a>

- *Type:* `string`

---

### GameLiftUpdateGameServerGroupOutput <a name="aws-cdk-sdk.gamelift.GameLiftUpdateGameServerGroupOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftUpdateGameServerGroupOutput: gamelift.GameLiftUpdateGameServerGroupOutput = { ... }
```

##### `gameServerGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateGameServerGroupOutput.property.gameServerGroup"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftGameServerGroup`](#aws-cdk-sdk.gamelift.GameLiftGameServerGroup)

---

### GameLiftUpdateGameServerInput <a name="aws-cdk-sdk.gamelift.GameLiftUpdateGameServerInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftUpdateGameServerInput: gamelift.GameLiftUpdateGameServerInput = { ... }
```

##### `gameServerGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateGameServerInput.property.gameServerGroupName"></a>

- *Type:* `string`

---

##### `gameServerId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateGameServerInput.property.gameServerId"></a>

- *Type:* `string`

---

##### `gameServerData`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateGameServerInput.property.gameServerData"></a>

- *Type:* `string`

---

##### `healthCheck`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateGameServerInput.property.healthCheck"></a>

- *Type:* `string`

---

##### `utilizationStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateGameServerInput.property.utilizationStatus"></a>

- *Type:* `string`

---

### GameLiftUpdateGameServerOutput <a name="aws-cdk-sdk.gamelift.GameLiftUpdateGameServerOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftUpdateGameServerOutput: gamelift.GameLiftUpdateGameServerOutput = { ... }
```

##### `gameServer`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateGameServerOutput.property.gameServer"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftGameServer`](#aws-cdk-sdk.gamelift.GameLiftGameServer)

---

### GameLiftUpdateGameSessionInput <a name="aws-cdk-sdk.gamelift.GameLiftUpdateGameSessionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftUpdateGameSessionInput: gamelift.GameLiftUpdateGameSessionInput = { ... }
```

##### `gameSessionId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateGameSessionInput.property.gameSessionId"></a>

- *Type:* `string`

---

##### `maximumPlayerSessionCount`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateGameSessionInput.property.maximumPlayerSessionCount"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateGameSessionInput.property.name"></a>

- *Type:* `string`

---

##### `playerSessionCreationPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateGameSessionInput.property.playerSessionCreationPolicy"></a>

- *Type:* `string`

---

##### `protectionPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateGameSessionInput.property.protectionPolicy"></a>

- *Type:* `string`

---

### GameLiftUpdateGameSessionOutput <a name="aws-cdk-sdk.gamelift.GameLiftUpdateGameSessionOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftUpdateGameSessionOutput: gamelift.GameLiftUpdateGameSessionOutput = { ... }
```

##### `gameSession`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateGameSessionOutput.property.gameSession"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftGameSession`](#aws-cdk-sdk.gamelift.GameLiftGameSession)

---

### GameLiftUpdateGameSessionQueueInput <a name="aws-cdk-sdk.gamelift.GameLiftUpdateGameSessionQueueInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftUpdateGameSessionQueueInput: gamelift.GameLiftUpdateGameSessionQueueInput = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateGameSessionQueueInput.property.name"></a>

- *Type:* `string`

---

##### `destinations`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateGameSessionQueueInput.property.destinations"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftGameSessionQueueDestination`](#aws-cdk-sdk.gamelift.GameLiftGameSessionQueueDestination)[]

---

##### `playerLatencyPolicies`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateGameSessionQueueInput.property.playerLatencyPolicies"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftPlayerLatencyPolicy`](#aws-cdk-sdk.gamelift.GameLiftPlayerLatencyPolicy)[]

---

##### `timeoutInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateGameSessionQueueInput.property.timeoutInSeconds"></a>

- *Type:* `number`

---

### GameLiftUpdateGameSessionQueueOutput <a name="aws-cdk-sdk.gamelift.GameLiftUpdateGameSessionQueueOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftUpdateGameSessionQueueOutput: gamelift.GameLiftUpdateGameSessionQueueOutput = { ... }
```

##### `gameSessionQueue`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateGameSessionQueueOutput.property.gameSessionQueue"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftGameSessionQueue`](#aws-cdk-sdk.gamelift.GameLiftGameSessionQueue)

---

### GameLiftUpdateMatchmakingConfigurationInput <a name="aws-cdk-sdk.gamelift.GameLiftUpdateMatchmakingConfigurationInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftUpdateMatchmakingConfigurationInput: gamelift.GameLiftUpdateMatchmakingConfigurationInput = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateMatchmakingConfigurationInput.property.name"></a>

- *Type:* `string`

---

##### `acceptanceRequired`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateMatchmakingConfigurationInput.property.acceptanceRequired"></a>

- *Type:* `boolean`

---

##### `acceptanceTimeoutSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateMatchmakingConfigurationInput.property.acceptanceTimeoutSeconds"></a>

- *Type:* `number`

---

##### `additionalPlayerCount`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateMatchmakingConfigurationInput.property.additionalPlayerCount"></a>

- *Type:* `number`

---

##### `backfillMode`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateMatchmakingConfigurationInput.property.backfillMode"></a>

- *Type:* `string`

---

##### `customEventData`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateMatchmakingConfigurationInput.property.customEventData"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateMatchmakingConfigurationInput.property.description"></a>

- *Type:* `string`

---

##### `flexMatchMode`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateMatchmakingConfigurationInput.property.flexMatchMode"></a>

- *Type:* `string`

---

##### `gameProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateMatchmakingConfigurationInput.property.gameProperties"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftGameProperty`](#aws-cdk-sdk.gamelift.GameLiftGameProperty)[]

---

##### `gameSessionData`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateMatchmakingConfigurationInput.property.gameSessionData"></a>

- *Type:* `string`

---

##### `gameSessionQueueArns`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateMatchmakingConfigurationInput.property.gameSessionQueueArns"></a>

- *Type:* `string`[]

---

##### `notificationTarget`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateMatchmakingConfigurationInput.property.notificationTarget"></a>

- *Type:* `string`

---

##### `requestTimeoutSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateMatchmakingConfigurationInput.property.requestTimeoutSeconds"></a>

- *Type:* `number`

---

##### `ruleSetName`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateMatchmakingConfigurationInput.property.ruleSetName"></a>

- *Type:* `string`

---

### GameLiftUpdateMatchmakingConfigurationOutput <a name="aws-cdk-sdk.gamelift.GameLiftUpdateMatchmakingConfigurationOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftUpdateMatchmakingConfigurationOutput: gamelift.GameLiftUpdateMatchmakingConfigurationOutput = { ... }
```

##### `configuration`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateMatchmakingConfigurationOutput.property.configuration"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftMatchmakingConfiguration`](#aws-cdk-sdk.gamelift.GameLiftMatchmakingConfiguration)

---

### GameLiftUpdateRuntimeConfigurationInput <a name="aws-cdk-sdk.gamelift.GameLiftUpdateRuntimeConfigurationInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftUpdateRuntimeConfigurationInput: gamelift.GameLiftUpdateRuntimeConfigurationInput = { ... }
```

##### `fleetId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateRuntimeConfigurationInput.property.fleetId"></a>

- *Type:* `string`

---

##### `runtimeConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateRuntimeConfigurationInput.property.runtimeConfiguration"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftRuntimeConfiguration`](#aws-cdk-sdk.gamelift.GameLiftRuntimeConfiguration)

---

### GameLiftUpdateRuntimeConfigurationOutput <a name="aws-cdk-sdk.gamelift.GameLiftUpdateRuntimeConfigurationOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftUpdateRuntimeConfigurationOutput: gamelift.GameLiftUpdateRuntimeConfigurationOutput = { ... }
```

##### `runtimeConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateRuntimeConfigurationOutput.property.runtimeConfiguration"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftRuntimeConfiguration`](#aws-cdk-sdk.gamelift.GameLiftRuntimeConfiguration)

---

### GameLiftUpdateScriptInput <a name="aws-cdk-sdk.gamelift.GameLiftUpdateScriptInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftUpdateScriptInput: gamelift.GameLiftUpdateScriptInput = { ... }
```

##### `scriptId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateScriptInput.property.scriptId"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateScriptInput.property.name"></a>

- *Type:* `string`

---

##### `storageLocation`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateScriptInput.property.storageLocation"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftS3Location`](#aws-cdk-sdk.gamelift.GameLiftS3Location)

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateScriptInput.property.version"></a>

- *Type:* `string`

---

##### `zipFile`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateScriptInput.property.zipFile"></a>

- *Type:* `any`

---

### GameLiftUpdateScriptOutput <a name="aws-cdk-sdk.gamelift.GameLiftUpdateScriptOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftUpdateScriptOutput: gamelift.GameLiftUpdateScriptOutput = { ... }
```

##### `script`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftUpdateScriptOutput.property.script"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftScript`](#aws-cdk-sdk.gamelift.GameLiftScript)

---

### GameLiftValidateMatchmakingRuleSetInput <a name="aws-cdk-sdk.gamelift.GameLiftValidateMatchmakingRuleSetInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftValidateMatchmakingRuleSetInput: gamelift.GameLiftValidateMatchmakingRuleSetInput = { ... }
```

##### `ruleSetBody`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftValidateMatchmakingRuleSetInput.property.ruleSetBody"></a>

- *Type:* `string`

---

### GameLiftValidateMatchmakingRuleSetOutput <a name="aws-cdk-sdk.gamelift.GameLiftValidateMatchmakingRuleSetOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftValidateMatchmakingRuleSetOutput: gamelift.GameLiftValidateMatchmakingRuleSetOutput = { ... }
```

##### `valid`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftValidateMatchmakingRuleSetOutput.property.valid"></a>

- *Type:* `boolean`

---

### GameLiftVpcPeeringAuthorization <a name="aws-cdk-sdk.gamelift.GameLiftVpcPeeringAuthorization"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftVpcPeeringAuthorization: gamelift.GameLiftVpcPeeringAuthorization = { ... }
```

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftVpcPeeringAuthorization.property.creationTime"></a>

- *Type:* `string`

---

##### `expirationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftVpcPeeringAuthorization.property.expirationTime"></a>

- *Type:* `string`

---

##### `gameLiftAwsAccountId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftVpcPeeringAuthorization.property.gameLiftAwsAccountId"></a>

- *Type:* `string`

---

##### `peerVpcAwsAccountId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftVpcPeeringAuthorization.property.peerVpcAwsAccountId"></a>

- *Type:* `string`

---

##### `peerVpcId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftVpcPeeringAuthorization.property.peerVpcId"></a>

- *Type:* `string`

---

### GameLiftVpcPeeringConnection <a name="aws-cdk-sdk.gamelift.GameLiftVpcPeeringConnection"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftVpcPeeringConnection: gamelift.GameLiftVpcPeeringConnection = { ... }
```

##### `fleetArn`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftVpcPeeringConnection.property.fleetArn"></a>

- *Type:* `string`

---

##### `fleetId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftVpcPeeringConnection.property.fleetId"></a>

- *Type:* `string`

---

##### `gameLiftVpcId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftVpcPeeringConnection.property.gameLiftVpcId"></a>

- *Type:* `string`

---

##### `ipV4CidrBlock`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftVpcPeeringConnection.property.ipV4CidrBlock"></a>

- *Type:* `string`

---

##### `peerVpcId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftVpcPeeringConnection.property.peerVpcId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftVpcPeeringConnection.property.status"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftVpcPeeringConnectionStatus`](#aws-cdk-sdk.gamelift.GameLiftVpcPeeringConnectionStatus)

---

##### `vpcPeeringConnectionId`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftVpcPeeringConnection.property.vpcPeeringConnectionId"></a>

- *Type:* `string`

---

### GameLiftVpcPeeringConnectionStatus <a name="aws-cdk-sdk.gamelift.GameLiftVpcPeeringConnectionStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

const gameLiftVpcPeeringConnectionStatus: gamelift.GameLiftVpcPeeringConnectionStatus = { ... }
```

##### `code`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftVpcPeeringConnectionStatus.property.code"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.gamelift.GameLiftVpcPeeringConnectionStatus.property.message"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### GameLiftResponsesClaimGameServer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesClaimGameServer"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesClaimGameServer.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesClaimGameServer(__scope: Construct, __resources: string[], __input: GameLiftClaimGameServerInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesClaimGameServer.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesClaimGameServer.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesClaimGameServer.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftClaimGameServerInput`](#aws-cdk-sdk.gamelift.GameLiftClaimGameServerInput)

---



#### Properties <a name="Properties"></a>

##### `gameServer`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesClaimGameServer.property.gameServer"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftResponsesClaimGameServerGameServer`](#aws-cdk-sdk.gamelift.GameLiftResponsesClaimGameServerGameServer)

---


### GameLiftResponsesClaimGameServerGameServer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesClaimGameServerGameServer"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesClaimGameServerGameServer.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesClaimGameServerGameServer(__scope: Construct, __resources: string[], __input: GameLiftClaimGameServerInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesClaimGameServerGameServer.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesClaimGameServerGameServer.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesClaimGameServerGameServer.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftClaimGameServerInput`](#aws-cdk-sdk.gamelift.GameLiftClaimGameServerInput)

---



#### Properties <a name="Properties"></a>

##### `claimStatus`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesClaimGameServerGameServer.property.claimStatus"></a>

- *Type:* `string`

---

##### `connectionInfo`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesClaimGameServerGameServer.property.connectionInfo"></a>

- *Type:* `string`

---

##### `gameServerData`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesClaimGameServerGameServer.property.gameServerData"></a>

- *Type:* `string`

---

##### `gameServerGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesClaimGameServerGameServer.property.gameServerGroupArn"></a>

- *Type:* `string`

---

##### `gameServerGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesClaimGameServerGameServer.property.gameServerGroupName"></a>

- *Type:* `string`

---

##### `gameServerId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesClaimGameServerGameServer.property.gameServerId"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesClaimGameServerGameServer.property.instanceId"></a>

- *Type:* `string`

---

##### `lastClaimTime`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesClaimGameServerGameServer.property.lastClaimTime"></a>

- *Type:* `string`

---

##### `lastHealthCheckTime`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesClaimGameServerGameServer.property.lastHealthCheckTime"></a>

- *Type:* `string`

---

##### `registrationTime`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesClaimGameServerGameServer.property.registrationTime"></a>

- *Type:* `string`

---

##### `utilizationStatus`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesClaimGameServerGameServer.property.utilizationStatus"></a>

- *Type:* `string`

---


### GameLiftResponsesCreateAlias <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateAlias"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateAlias.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesCreateAlias(__scope: Construct, __resources: string[], __input: GameLiftCreateAliasInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateAlias.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateAlias.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateAlias.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftCreateAliasInput`](#aws-cdk-sdk.gamelift.GameLiftCreateAliasInput)

---



#### Properties <a name="Properties"></a>

##### `alias`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateAlias.property.alias"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftResponsesCreateAliasAlias`](#aws-cdk-sdk.gamelift.GameLiftResponsesCreateAliasAlias)

---


### GameLiftResponsesCreateAliasAlias <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateAliasAlias"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateAliasAlias.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesCreateAliasAlias(__scope: Construct, __resources: string[], __input: GameLiftCreateAliasInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateAliasAlias.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateAliasAlias.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateAliasAlias.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftCreateAliasInput`](#aws-cdk-sdk.gamelift.GameLiftCreateAliasInput)

---



#### Properties <a name="Properties"></a>

##### `aliasArn`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateAliasAlias.property.aliasArn"></a>

- *Type:* `string`

---

##### `aliasId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateAliasAlias.property.aliasId"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateAliasAlias.property.creationTime"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateAliasAlias.property.description"></a>

- *Type:* `string`

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateAliasAlias.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateAliasAlias.property.name"></a>

- *Type:* `string`

---

##### `routingStrategy`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateAliasAlias.property.routingStrategy"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftResponsesCreateAliasAliasRoutingStrategy`](#aws-cdk-sdk.gamelift.GameLiftResponsesCreateAliasAliasRoutingStrategy)

---


### GameLiftResponsesCreateAliasAliasRoutingStrategy <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateAliasAliasRoutingStrategy"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateAliasAliasRoutingStrategy.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesCreateAliasAliasRoutingStrategy(__scope: Construct, __resources: string[], __input: GameLiftCreateAliasInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateAliasAliasRoutingStrategy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateAliasAliasRoutingStrategy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateAliasAliasRoutingStrategy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftCreateAliasInput`](#aws-cdk-sdk.gamelift.GameLiftCreateAliasInput)

---



#### Properties <a name="Properties"></a>

##### `fleetId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateAliasAliasRoutingStrategy.property.fleetId"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateAliasAliasRoutingStrategy.property.message"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateAliasAliasRoutingStrategy.property.type"></a>

- *Type:* `string`

---


### GameLiftResponsesCreateBuild <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateBuild"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateBuild.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesCreateBuild(__scope: Construct, __resources: string[], __input: GameLiftCreateBuildInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateBuild.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateBuild.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateBuild.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftCreateBuildInput`](#aws-cdk-sdk.gamelift.GameLiftCreateBuildInput)

---



#### Properties <a name="Properties"></a>

##### `build2`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateBuild.property.build2"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftResponsesCreateBuildBuild2`](#aws-cdk-sdk.gamelift.GameLiftResponsesCreateBuildBuild2)

---

##### `storageLocation`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateBuild.property.storageLocation"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftResponsesCreateBuildStorageLocation`](#aws-cdk-sdk.gamelift.GameLiftResponsesCreateBuildStorageLocation)

---

##### `uploadCredentials`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateBuild.property.uploadCredentials"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftResponsesCreateBuildUploadCredentials`](#aws-cdk-sdk.gamelift.GameLiftResponsesCreateBuildUploadCredentials)

---


### GameLiftResponsesCreateBuildBuild2 <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateBuildBuild2"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateBuildBuild2.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesCreateBuildBuild2(__scope: Construct, __resources: string[], __input: GameLiftCreateBuildInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateBuildBuild2.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateBuildBuild2.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateBuildBuild2.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftCreateBuildInput`](#aws-cdk-sdk.gamelift.GameLiftCreateBuildInput)

---



#### Properties <a name="Properties"></a>

##### `buildArn`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateBuildBuild2.property.buildArn"></a>

- *Type:* `string`

---

##### `buildId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateBuildBuild2.property.buildId"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateBuildBuild2.property.creationTime"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateBuildBuild2.property.name"></a>

- *Type:* `string`

---

##### `operatingSystem`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateBuildBuild2.property.operatingSystem"></a>

- *Type:* `string`

---

##### `sizeOnDisk`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateBuildBuild2.property.sizeOnDisk"></a>

- *Type:* `number`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateBuildBuild2.property.status"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateBuildBuild2.property.version"></a>

- *Type:* `string`

---


### GameLiftResponsesCreateBuildStorageLocation <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateBuildStorageLocation"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateBuildStorageLocation.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesCreateBuildStorageLocation(__scope: Construct, __resources: string[], __input: GameLiftCreateBuildInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateBuildStorageLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateBuildStorageLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateBuildStorageLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftCreateBuildInput`](#aws-cdk-sdk.gamelift.GameLiftCreateBuildInput)

---



#### Properties <a name="Properties"></a>

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateBuildStorageLocation.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateBuildStorageLocation.property.key"></a>

- *Type:* `string`

---

##### `objectVersion`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateBuildStorageLocation.property.objectVersion"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateBuildStorageLocation.property.roleArn"></a>

- *Type:* `string`

---


### GameLiftResponsesCreateBuildUploadCredentials <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateBuildUploadCredentials"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateBuildUploadCredentials.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesCreateBuildUploadCredentials(__scope: Construct, __resources: string[], __input: GameLiftCreateBuildInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateBuildUploadCredentials.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateBuildUploadCredentials.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateBuildUploadCredentials.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftCreateBuildInput`](#aws-cdk-sdk.gamelift.GameLiftCreateBuildInput)

---



#### Properties <a name="Properties"></a>

##### `accessKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateBuildUploadCredentials.property.accessKeyId"></a>

- *Type:* `string`

---

##### `secretAccessKey`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateBuildUploadCredentials.property.secretAccessKey"></a>

- *Type:* `string`

---

##### `sessionToken`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateBuildUploadCredentials.property.sessionToken"></a>

- *Type:* `string`

---


### GameLiftResponsesCreateFleet <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateFleet"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateFleet.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesCreateFleet(__scope: Construct, __resources: string[], __input: GameLiftCreateFleetInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateFleet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateFleet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateFleet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftCreateFleetInput`](#aws-cdk-sdk.gamelift.GameLiftCreateFleetInput)

---



#### Properties <a name="Properties"></a>

##### `fleetAttributes`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateFleet.property.fleetAttributes"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftResponsesCreateFleetFleetAttributes`](#aws-cdk-sdk.gamelift.GameLiftResponsesCreateFleetFleetAttributes)

---


### GameLiftResponsesCreateFleetFleetAttributes <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateFleetFleetAttributes"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateFleetFleetAttributes.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesCreateFleetFleetAttributes(__scope: Construct, __resources: string[], __input: GameLiftCreateFleetInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateFleetFleetAttributes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateFleetFleetAttributes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateFleetFleetAttributes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftCreateFleetInput`](#aws-cdk-sdk.gamelift.GameLiftCreateFleetInput)

---



#### Properties <a name="Properties"></a>

##### `buildArn`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateFleetFleetAttributes.property.buildArn"></a>

- *Type:* `string`

---

##### `buildId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateFleetFleetAttributes.property.buildId"></a>

- *Type:* `string`

---

##### `certificateConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateFleetFleetAttributes.property.certificateConfiguration"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftResponsesCreateFleetFleetAttributesCertificateConfiguration`](#aws-cdk-sdk.gamelift.GameLiftResponsesCreateFleetFleetAttributesCertificateConfiguration)

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateFleetFleetAttributes.property.creationTime"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateFleetFleetAttributes.property.description"></a>

- *Type:* `string`

---

##### `fleetArn`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateFleetFleetAttributes.property.fleetArn"></a>

- *Type:* `string`

---

##### `fleetId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateFleetFleetAttributes.property.fleetId"></a>

- *Type:* `string`

---

##### `fleetType`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateFleetFleetAttributes.property.fleetType"></a>

- *Type:* `string`

---

##### `instanceRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateFleetFleetAttributes.property.instanceRoleArn"></a>

- *Type:* `string`

---

##### `instanceType`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateFleetFleetAttributes.property.instanceType"></a>

- *Type:* `string`

---

##### `logPaths`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateFleetFleetAttributes.property.logPaths"></a>

- *Type:* `string`[]

---

##### `metricGroups`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateFleetFleetAttributes.property.metricGroups"></a>

- *Type:* `string`[]

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateFleetFleetAttributes.property.name"></a>

- *Type:* `string`

---

##### `newGameSessionProtectionPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateFleetFleetAttributes.property.newGameSessionProtectionPolicy"></a>

- *Type:* `string`

---

##### `operatingSystem`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateFleetFleetAttributes.property.operatingSystem"></a>

- *Type:* `string`

---

##### `resourceCreationLimitPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateFleetFleetAttributes.property.resourceCreationLimitPolicy"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftResponsesCreateFleetFleetAttributesResourceCreationLimitPolicy`](#aws-cdk-sdk.gamelift.GameLiftResponsesCreateFleetFleetAttributesResourceCreationLimitPolicy)

---

##### `scriptArn`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateFleetFleetAttributes.property.scriptArn"></a>

- *Type:* `string`

---

##### `scriptId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateFleetFleetAttributes.property.scriptId"></a>

- *Type:* `string`

---

##### `serverLaunchParameters`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateFleetFleetAttributes.property.serverLaunchParameters"></a>

- *Type:* `string`

---

##### `serverLaunchPath`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateFleetFleetAttributes.property.serverLaunchPath"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateFleetFleetAttributes.property.status"></a>

- *Type:* `string`

---

##### `stoppedActions`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateFleetFleetAttributes.property.stoppedActions"></a>

- *Type:* `string`[]

---

##### `terminationTime`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateFleetFleetAttributes.property.terminationTime"></a>

- *Type:* `string`

---


### GameLiftResponsesCreateFleetFleetAttributesCertificateConfiguration <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateFleetFleetAttributesCertificateConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateFleetFleetAttributesCertificateConfiguration.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesCreateFleetFleetAttributesCertificateConfiguration(__scope: Construct, __resources: string[], __input: GameLiftCreateFleetInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateFleetFleetAttributesCertificateConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateFleetFleetAttributesCertificateConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateFleetFleetAttributesCertificateConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftCreateFleetInput`](#aws-cdk-sdk.gamelift.GameLiftCreateFleetInput)

---



#### Properties <a name="Properties"></a>

##### `certificateType`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateFleetFleetAttributesCertificateConfiguration.property.certificateType"></a>

- *Type:* `string`

---


### GameLiftResponsesCreateFleetFleetAttributesResourceCreationLimitPolicy <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateFleetFleetAttributesResourceCreationLimitPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateFleetFleetAttributesResourceCreationLimitPolicy.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesCreateFleetFleetAttributesResourceCreationLimitPolicy(__scope: Construct, __resources: string[], __input: GameLiftCreateFleetInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateFleetFleetAttributesResourceCreationLimitPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateFleetFleetAttributesResourceCreationLimitPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateFleetFleetAttributesResourceCreationLimitPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftCreateFleetInput`](#aws-cdk-sdk.gamelift.GameLiftCreateFleetInput)

---



#### Properties <a name="Properties"></a>

##### `newGameSessionsPerCreator`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateFleetFleetAttributesResourceCreationLimitPolicy.property.newGameSessionsPerCreator"></a>

- *Type:* `number`

---

##### `policyPeriodInMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateFleetFleetAttributesResourceCreationLimitPolicy.property.policyPeriodInMinutes"></a>

- *Type:* `number`

---


### GameLiftResponsesCreateGameServerGroup <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameServerGroup"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameServerGroup.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesCreateGameServerGroup(__scope: Construct, __resources: string[], __input: GameLiftCreateGameServerGroupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameServerGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameServerGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameServerGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftCreateGameServerGroupInput`](#aws-cdk-sdk.gamelift.GameLiftCreateGameServerGroupInput)

---



#### Properties <a name="Properties"></a>

##### `gameServerGroup`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameServerGroup.property.gameServerGroup"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameServerGroupGameServerGroup`](#aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameServerGroupGameServerGroup)

---


### GameLiftResponsesCreateGameServerGroupGameServerGroup <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameServerGroupGameServerGroup"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameServerGroupGameServerGroup.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesCreateGameServerGroupGameServerGroup(__scope: Construct, __resources: string[], __input: GameLiftCreateGameServerGroupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameServerGroupGameServerGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameServerGroupGameServerGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameServerGroupGameServerGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftCreateGameServerGroupInput`](#aws-cdk-sdk.gamelift.GameLiftCreateGameServerGroupInput)

---



#### Properties <a name="Properties"></a>

##### `autoScalingGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameServerGroupGameServerGroup.property.autoScalingGroupArn"></a>

- *Type:* `string`

---

##### `balancingStrategy`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameServerGroupGameServerGroup.property.balancingStrategy"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameServerGroupGameServerGroup.property.creationTime"></a>

- *Type:* `string`

---

##### `gameServerGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameServerGroupGameServerGroup.property.gameServerGroupArn"></a>

- *Type:* `string`

---

##### `gameServerGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameServerGroupGameServerGroup.property.gameServerGroupName"></a>

- *Type:* `string`

---

##### `gameServerProtectionPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameServerGroupGameServerGroup.property.gameServerProtectionPolicy"></a>

- *Type:* `string`

---

##### `instanceDefinitions`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameServerGroupGameServerGroup.property.instanceDefinitions"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftInstanceDefinition`](#aws-cdk-sdk.gamelift.GameLiftInstanceDefinition)[]

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameServerGroupGameServerGroup.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameServerGroupGameServerGroup.property.roleArn"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameServerGroupGameServerGroup.property.status"></a>

- *Type:* `string`

---

##### `statusReason`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameServerGroupGameServerGroup.property.statusReason"></a>

- *Type:* `string`

---

##### `suspendedActions`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameServerGroupGameServerGroup.property.suspendedActions"></a>

- *Type:* `string`[]

---


### GameLiftResponsesCreateGameSession <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameSession"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameSession.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesCreateGameSession(__scope: Construct, __resources: string[], __input: GameLiftCreateGameSessionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameSession.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameSession.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameSession.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftCreateGameSessionInput`](#aws-cdk-sdk.gamelift.GameLiftCreateGameSessionInput)

---



#### Properties <a name="Properties"></a>

##### `gameSession`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameSession.property.gameSession"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameSessionGameSession`](#aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameSessionGameSession)

---


### GameLiftResponsesCreateGameSessionGameSession <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameSessionGameSession"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameSessionGameSession.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesCreateGameSessionGameSession(__scope: Construct, __resources: string[], __input: GameLiftCreateGameSessionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameSessionGameSession.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameSessionGameSession.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameSessionGameSession.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftCreateGameSessionInput`](#aws-cdk-sdk.gamelift.GameLiftCreateGameSessionInput)

---



#### Properties <a name="Properties"></a>

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameSessionGameSession.property.creationTime"></a>

- *Type:* `string`

---

##### `creatorId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameSessionGameSession.property.creatorId"></a>

- *Type:* `string`

---

##### `currentPlayerSessionCount`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameSessionGameSession.property.currentPlayerSessionCount"></a>

- *Type:* `number`

---

##### `dnsName`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameSessionGameSession.property.dnsName"></a>

- *Type:* `string`

---

##### `fleetArn`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameSessionGameSession.property.fleetArn"></a>

- *Type:* `string`

---

##### `fleetId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameSessionGameSession.property.fleetId"></a>

- *Type:* `string`

---

##### `gameProperties`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameSessionGameSession.property.gameProperties"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftGameProperty`](#aws-cdk-sdk.gamelift.GameLiftGameProperty)[]

---

##### `gameSessionData`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameSessionGameSession.property.gameSessionData"></a>

- *Type:* `string`

---

##### `gameSessionId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameSessionGameSession.property.gameSessionId"></a>

- *Type:* `string`

---

##### `ipAddress`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameSessionGameSession.property.ipAddress"></a>

- *Type:* `string`

---

##### `matchmakerData`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameSessionGameSession.property.matchmakerData"></a>

- *Type:* `string`

---

##### `maximumPlayerSessionCount`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameSessionGameSession.property.maximumPlayerSessionCount"></a>

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameSessionGameSession.property.name"></a>

- *Type:* `string`

---

##### `playerSessionCreationPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameSessionGameSession.property.playerSessionCreationPolicy"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameSessionGameSession.property.port"></a>

- *Type:* `number`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameSessionGameSession.property.status"></a>

- *Type:* `string`

---

##### `statusReason`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameSessionGameSession.property.statusReason"></a>

- *Type:* `string`

---

##### `terminationTime`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameSessionGameSession.property.terminationTime"></a>

- *Type:* `string`

---


### GameLiftResponsesCreateGameSessionQueue <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameSessionQueue"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameSessionQueue.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesCreateGameSessionQueue(__scope: Construct, __resources: string[], __input: GameLiftCreateGameSessionQueueInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameSessionQueue.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameSessionQueue.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameSessionQueue.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftCreateGameSessionQueueInput`](#aws-cdk-sdk.gamelift.GameLiftCreateGameSessionQueueInput)

---



#### Properties <a name="Properties"></a>

##### `gameSessionQueue`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameSessionQueue.property.gameSessionQueue"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameSessionQueueGameSessionQueue`](#aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameSessionQueueGameSessionQueue)

---


### GameLiftResponsesCreateGameSessionQueueGameSessionQueue <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameSessionQueueGameSessionQueue"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameSessionQueueGameSessionQueue.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesCreateGameSessionQueueGameSessionQueue(__scope: Construct, __resources: string[], __input: GameLiftCreateGameSessionQueueInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameSessionQueueGameSessionQueue.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameSessionQueueGameSessionQueue.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameSessionQueueGameSessionQueue.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftCreateGameSessionQueueInput`](#aws-cdk-sdk.gamelift.GameLiftCreateGameSessionQueueInput)

---



#### Properties <a name="Properties"></a>

##### `destinations`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameSessionQueueGameSessionQueue.property.destinations"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftGameSessionQueueDestination`](#aws-cdk-sdk.gamelift.GameLiftGameSessionQueueDestination)[]

---

##### `gameSessionQueueArn`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameSessionQueueGameSessionQueue.property.gameSessionQueueArn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameSessionQueueGameSessionQueue.property.name"></a>

- *Type:* `string`

---

##### `playerLatencyPolicies`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameSessionQueueGameSessionQueue.property.playerLatencyPolicies"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftPlayerLatencyPolicy`](#aws-cdk-sdk.gamelift.GameLiftPlayerLatencyPolicy)[]

---

##### `timeoutInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateGameSessionQueueGameSessionQueue.property.timeoutInSeconds"></a>

- *Type:* `number`

---


### GameLiftResponsesCreateMatchmakingConfiguration <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateMatchmakingConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateMatchmakingConfiguration.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesCreateMatchmakingConfiguration(__scope: Construct, __resources: string[], __input: GameLiftCreateMatchmakingConfigurationInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateMatchmakingConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateMatchmakingConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateMatchmakingConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftCreateMatchmakingConfigurationInput`](#aws-cdk-sdk.gamelift.GameLiftCreateMatchmakingConfigurationInput)

---



#### Properties <a name="Properties"></a>

##### `configuration`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateMatchmakingConfiguration.property.configuration"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftResponsesCreateMatchmakingConfigurationConfiguration`](#aws-cdk-sdk.gamelift.GameLiftResponsesCreateMatchmakingConfigurationConfiguration)

---


### GameLiftResponsesCreateMatchmakingConfigurationConfiguration <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateMatchmakingConfigurationConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateMatchmakingConfigurationConfiguration.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesCreateMatchmakingConfigurationConfiguration(__scope: Construct, __resources: string[], __input: GameLiftCreateMatchmakingConfigurationInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateMatchmakingConfigurationConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateMatchmakingConfigurationConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateMatchmakingConfigurationConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftCreateMatchmakingConfigurationInput`](#aws-cdk-sdk.gamelift.GameLiftCreateMatchmakingConfigurationInput)

---



#### Properties <a name="Properties"></a>

##### `acceptanceRequired`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateMatchmakingConfigurationConfiguration.property.acceptanceRequired"></a>

- *Type:* `boolean`

---

##### `acceptanceTimeoutSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateMatchmakingConfigurationConfiguration.property.acceptanceTimeoutSeconds"></a>

- *Type:* `number`

---

##### `additionalPlayerCount`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateMatchmakingConfigurationConfiguration.property.additionalPlayerCount"></a>

- *Type:* `number`

---

##### `backfillMode`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateMatchmakingConfigurationConfiguration.property.backfillMode"></a>

- *Type:* `string`

---

##### `configurationArn`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateMatchmakingConfigurationConfiguration.property.configurationArn"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateMatchmakingConfigurationConfiguration.property.creationTime"></a>

- *Type:* `string`

---

##### `customEventData`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateMatchmakingConfigurationConfiguration.property.customEventData"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateMatchmakingConfigurationConfiguration.property.description"></a>

- *Type:* `string`

---

##### `flexMatchMode`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateMatchmakingConfigurationConfiguration.property.flexMatchMode"></a>

- *Type:* `string`

---

##### `gameProperties`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateMatchmakingConfigurationConfiguration.property.gameProperties"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftGameProperty`](#aws-cdk-sdk.gamelift.GameLiftGameProperty)[]

---

##### `gameSessionData`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateMatchmakingConfigurationConfiguration.property.gameSessionData"></a>

- *Type:* `string`

---

##### `gameSessionQueueArns`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateMatchmakingConfigurationConfiguration.property.gameSessionQueueArns"></a>

- *Type:* `string`[]

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateMatchmakingConfigurationConfiguration.property.name"></a>

- *Type:* `string`

---

##### `notificationTarget`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateMatchmakingConfigurationConfiguration.property.notificationTarget"></a>

- *Type:* `string`

---

##### `requestTimeoutSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateMatchmakingConfigurationConfiguration.property.requestTimeoutSeconds"></a>

- *Type:* `number`

---

##### `ruleSetArn`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateMatchmakingConfigurationConfiguration.property.ruleSetArn"></a>

- *Type:* `string`

---

##### `ruleSetName`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateMatchmakingConfigurationConfiguration.property.ruleSetName"></a>

- *Type:* `string`

---


### GameLiftResponsesCreateMatchmakingRuleSet <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateMatchmakingRuleSet"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateMatchmakingRuleSet.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesCreateMatchmakingRuleSet(__scope: Construct, __resources: string[], __input: GameLiftCreateMatchmakingRuleSetInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateMatchmakingRuleSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateMatchmakingRuleSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateMatchmakingRuleSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftCreateMatchmakingRuleSetInput`](#aws-cdk-sdk.gamelift.GameLiftCreateMatchmakingRuleSetInput)

---



#### Properties <a name="Properties"></a>

##### `ruleSet`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateMatchmakingRuleSet.property.ruleSet"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftResponsesCreateMatchmakingRuleSetRuleSet`](#aws-cdk-sdk.gamelift.GameLiftResponsesCreateMatchmakingRuleSetRuleSet)

---


### GameLiftResponsesCreateMatchmakingRuleSetRuleSet <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateMatchmakingRuleSetRuleSet"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateMatchmakingRuleSetRuleSet.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesCreateMatchmakingRuleSetRuleSet(__scope: Construct, __resources: string[], __input: GameLiftCreateMatchmakingRuleSetInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateMatchmakingRuleSetRuleSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateMatchmakingRuleSetRuleSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateMatchmakingRuleSetRuleSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftCreateMatchmakingRuleSetInput`](#aws-cdk-sdk.gamelift.GameLiftCreateMatchmakingRuleSetInput)

---



#### Properties <a name="Properties"></a>

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateMatchmakingRuleSetRuleSet.property.creationTime"></a>

- *Type:* `string`

---

##### `ruleSetArn`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateMatchmakingRuleSetRuleSet.property.ruleSetArn"></a>

- *Type:* `string`

---

##### `ruleSetBody`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateMatchmakingRuleSetRuleSet.property.ruleSetBody"></a>

- *Type:* `string`

---

##### `ruleSetName`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateMatchmakingRuleSetRuleSet.property.ruleSetName"></a>

- *Type:* `string`

---


### GameLiftResponsesCreatePlayerSession <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreatePlayerSession"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreatePlayerSession.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesCreatePlayerSession(__scope: Construct, __resources: string[], __input: GameLiftCreatePlayerSessionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreatePlayerSession.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreatePlayerSession.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreatePlayerSession.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftCreatePlayerSessionInput`](#aws-cdk-sdk.gamelift.GameLiftCreatePlayerSessionInput)

---



#### Properties <a name="Properties"></a>

##### `playerSession`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreatePlayerSession.property.playerSession"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftResponsesCreatePlayerSessionPlayerSession`](#aws-cdk-sdk.gamelift.GameLiftResponsesCreatePlayerSessionPlayerSession)

---


### GameLiftResponsesCreatePlayerSessionPlayerSession <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreatePlayerSessionPlayerSession"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreatePlayerSessionPlayerSession.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesCreatePlayerSessionPlayerSession(__scope: Construct, __resources: string[], __input: GameLiftCreatePlayerSessionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreatePlayerSessionPlayerSession.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreatePlayerSessionPlayerSession.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreatePlayerSessionPlayerSession.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftCreatePlayerSessionInput`](#aws-cdk-sdk.gamelift.GameLiftCreatePlayerSessionInput)

---



#### Properties <a name="Properties"></a>

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreatePlayerSessionPlayerSession.property.creationTime"></a>

- *Type:* `string`

---

##### `dnsName`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreatePlayerSessionPlayerSession.property.dnsName"></a>

- *Type:* `string`

---

##### `fleetArn`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreatePlayerSessionPlayerSession.property.fleetArn"></a>

- *Type:* `string`

---

##### `fleetId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreatePlayerSessionPlayerSession.property.fleetId"></a>

- *Type:* `string`

---

##### `gameSessionId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreatePlayerSessionPlayerSession.property.gameSessionId"></a>

- *Type:* `string`

---

##### `ipAddress`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreatePlayerSessionPlayerSession.property.ipAddress"></a>

- *Type:* `string`

---

##### `playerData`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreatePlayerSessionPlayerSession.property.playerData"></a>

- *Type:* `string`

---

##### `playerId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreatePlayerSessionPlayerSession.property.playerId"></a>

- *Type:* `string`

---

##### `playerSessionId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreatePlayerSessionPlayerSession.property.playerSessionId"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreatePlayerSessionPlayerSession.property.port"></a>

- *Type:* `number`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreatePlayerSessionPlayerSession.property.status"></a>

- *Type:* `string`

---

##### `terminationTime`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreatePlayerSessionPlayerSession.property.terminationTime"></a>

- *Type:* `string`

---


### GameLiftResponsesCreatePlayerSessions <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreatePlayerSessions"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreatePlayerSessions.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesCreatePlayerSessions(__scope: Construct, __resources: string[], __input: GameLiftCreatePlayerSessionsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreatePlayerSessions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreatePlayerSessions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreatePlayerSessions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftCreatePlayerSessionsInput`](#aws-cdk-sdk.gamelift.GameLiftCreatePlayerSessionsInput)

---



#### Properties <a name="Properties"></a>

##### `playerSessions`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreatePlayerSessions.property.playerSessions"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftPlayerSession`](#aws-cdk-sdk.gamelift.GameLiftPlayerSession)[]

---


### GameLiftResponsesCreateScript <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateScript"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateScript.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesCreateScript(__scope: Construct, __resources: string[], __input: GameLiftCreateScriptInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateScript.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateScript.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateScript.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftCreateScriptInput`](#aws-cdk-sdk.gamelift.GameLiftCreateScriptInput)

---



#### Properties <a name="Properties"></a>

##### `script`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateScript.property.script"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftResponsesCreateScriptScript`](#aws-cdk-sdk.gamelift.GameLiftResponsesCreateScriptScript)

---


### GameLiftResponsesCreateScriptScript <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateScriptScript"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateScriptScript.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesCreateScriptScript(__scope: Construct, __resources: string[], __input: GameLiftCreateScriptInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateScriptScript.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateScriptScript.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateScriptScript.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftCreateScriptInput`](#aws-cdk-sdk.gamelift.GameLiftCreateScriptInput)

---



#### Properties <a name="Properties"></a>

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateScriptScript.property.creationTime"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateScriptScript.property.name"></a>

- *Type:* `string`

---

##### `scriptArn`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateScriptScript.property.scriptArn"></a>

- *Type:* `string`

---

##### `scriptId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateScriptScript.property.scriptId"></a>

- *Type:* `string`

---

##### `sizeOnDisk`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateScriptScript.property.sizeOnDisk"></a>

- *Type:* `number`

---

##### `storageLocation`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateScriptScript.property.storageLocation"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftResponsesCreateScriptScriptStorageLocation`](#aws-cdk-sdk.gamelift.GameLiftResponsesCreateScriptScriptStorageLocation)

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateScriptScript.property.version"></a>

- *Type:* `string`

---


### GameLiftResponsesCreateScriptScriptStorageLocation <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateScriptScriptStorageLocation"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateScriptScriptStorageLocation.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesCreateScriptScriptStorageLocation(__scope: Construct, __resources: string[], __input: GameLiftCreateScriptInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateScriptScriptStorageLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateScriptScriptStorageLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateScriptScriptStorageLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftCreateScriptInput`](#aws-cdk-sdk.gamelift.GameLiftCreateScriptInput)

---



#### Properties <a name="Properties"></a>

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateScriptScriptStorageLocation.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateScriptScriptStorageLocation.property.key"></a>

- *Type:* `string`

---

##### `objectVersion`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateScriptScriptStorageLocation.property.objectVersion"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateScriptScriptStorageLocation.property.roleArn"></a>

- *Type:* `string`

---


### GameLiftResponsesCreateVpcPeeringAuthorization <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateVpcPeeringAuthorization"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateVpcPeeringAuthorization.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesCreateVpcPeeringAuthorization(__scope: Construct, __resources: string[], __input: GameLiftCreateVpcPeeringAuthorizationInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateVpcPeeringAuthorization.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateVpcPeeringAuthorization.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateVpcPeeringAuthorization.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftCreateVpcPeeringAuthorizationInput`](#aws-cdk-sdk.gamelift.GameLiftCreateVpcPeeringAuthorizationInput)

---



#### Properties <a name="Properties"></a>

##### `vpcPeeringAuthorization`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateVpcPeeringAuthorization.property.vpcPeeringAuthorization"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftResponsesCreateVpcPeeringAuthorizationVpcPeeringAuthorization`](#aws-cdk-sdk.gamelift.GameLiftResponsesCreateVpcPeeringAuthorizationVpcPeeringAuthorization)

---


### GameLiftResponsesCreateVpcPeeringAuthorizationVpcPeeringAuthorization <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateVpcPeeringAuthorizationVpcPeeringAuthorization"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateVpcPeeringAuthorizationVpcPeeringAuthorization.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesCreateVpcPeeringAuthorizationVpcPeeringAuthorization(__scope: Construct, __resources: string[], __input: GameLiftCreateVpcPeeringAuthorizationInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateVpcPeeringAuthorizationVpcPeeringAuthorization.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateVpcPeeringAuthorizationVpcPeeringAuthorization.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateVpcPeeringAuthorizationVpcPeeringAuthorization.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftCreateVpcPeeringAuthorizationInput`](#aws-cdk-sdk.gamelift.GameLiftCreateVpcPeeringAuthorizationInput)

---



#### Properties <a name="Properties"></a>

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateVpcPeeringAuthorizationVpcPeeringAuthorization.property.creationTime"></a>

- *Type:* `string`

---

##### `expirationTime`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateVpcPeeringAuthorizationVpcPeeringAuthorization.property.expirationTime"></a>

- *Type:* `string`

---

##### `gameLiftAwsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateVpcPeeringAuthorizationVpcPeeringAuthorization.property.gameLiftAwsAccountId"></a>

- *Type:* `string`

---

##### `peerVpcAwsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateVpcPeeringAuthorizationVpcPeeringAuthorization.property.peerVpcAwsAccountId"></a>

- *Type:* `string`

---

##### `peerVpcId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesCreateVpcPeeringAuthorizationVpcPeeringAuthorization.property.peerVpcId"></a>

- *Type:* `string`

---


### GameLiftResponsesDeleteGameServerGroup <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDeleteGameServerGroup"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDeleteGameServerGroup.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesDeleteGameServerGroup(__scope: Construct, __resources: string[], __input: GameLiftDeleteGameServerGroupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDeleteGameServerGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDeleteGameServerGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDeleteGameServerGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDeleteGameServerGroupInput`](#aws-cdk-sdk.gamelift.GameLiftDeleteGameServerGroupInput)

---



#### Properties <a name="Properties"></a>

##### `gameServerGroup`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDeleteGameServerGroup.property.gameServerGroup"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftResponsesDeleteGameServerGroupGameServerGroup`](#aws-cdk-sdk.gamelift.GameLiftResponsesDeleteGameServerGroupGameServerGroup)

---


### GameLiftResponsesDeleteGameServerGroupGameServerGroup <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDeleteGameServerGroupGameServerGroup"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDeleteGameServerGroupGameServerGroup.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesDeleteGameServerGroupGameServerGroup(__scope: Construct, __resources: string[], __input: GameLiftDeleteGameServerGroupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDeleteGameServerGroupGameServerGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDeleteGameServerGroupGameServerGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDeleteGameServerGroupGameServerGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDeleteGameServerGroupInput`](#aws-cdk-sdk.gamelift.GameLiftDeleteGameServerGroupInput)

---



#### Properties <a name="Properties"></a>

##### `autoScalingGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDeleteGameServerGroupGameServerGroup.property.autoScalingGroupArn"></a>

- *Type:* `string`

---

##### `balancingStrategy`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDeleteGameServerGroupGameServerGroup.property.balancingStrategy"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDeleteGameServerGroupGameServerGroup.property.creationTime"></a>

- *Type:* `string`

---

##### `gameServerGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDeleteGameServerGroupGameServerGroup.property.gameServerGroupArn"></a>

- *Type:* `string`

---

##### `gameServerGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDeleteGameServerGroupGameServerGroup.property.gameServerGroupName"></a>

- *Type:* `string`

---

##### `gameServerProtectionPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDeleteGameServerGroupGameServerGroup.property.gameServerProtectionPolicy"></a>

- *Type:* `string`

---

##### `instanceDefinitions`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDeleteGameServerGroupGameServerGroup.property.instanceDefinitions"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftInstanceDefinition`](#aws-cdk-sdk.gamelift.GameLiftInstanceDefinition)[]

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDeleteGameServerGroupGameServerGroup.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDeleteGameServerGroupGameServerGroup.property.roleArn"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDeleteGameServerGroupGameServerGroup.property.status"></a>

- *Type:* `string`

---

##### `statusReason`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDeleteGameServerGroupGameServerGroup.property.statusReason"></a>

- *Type:* `string`

---

##### `suspendedActions`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDeleteGameServerGroupGameServerGroup.property.suspendedActions"></a>

- *Type:* `string`[]

---


### GameLiftResponsesDescribeAlias <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeAlias"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeAlias.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesDescribeAlias(__scope: Construct, __resources: string[], __input: GameLiftDescribeAliasInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeAlias.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeAlias.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeAlias.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDescribeAliasInput`](#aws-cdk-sdk.gamelift.GameLiftDescribeAliasInput)

---



#### Properties <a name="Properties"></a>

##### `alias`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeAlias.property.alias"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftResponsesDescribeAliasAlias`](#aws-cdk-sdk.gamelift.GameLiftResponsesDescribeAliasAlias)

---


### GameLiftResponsesDescribeAliasAlias <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeAliasAlias"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeAliasAlias.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesDescribeAliasAlias(__scope: Construct, __resources: string[], __input: GameLiftDescribeAliasInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeAliasAlias.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeAliasAlias.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeAliasAlias.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDescribeAliasInput`](#aws-cdk-sdk.gamelift.GameLiftDescribeAliasInput)

---



#### Properties <a name="Properties"></a>

##### `aliasArn`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeAliasAlias.property.aliasArn"></a>

- *Type:* `string`

---

##### `aliasId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeAliasAlias.property.aliasId"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeAliasAlias.property.creationTime"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeAliasAlias.property.description"></a>

- *Type:* `string`

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeAliasAlias.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeAliasAlias.property.name"></a>

- *Type:* `string`

---

##### `routingStrategy`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeAliasAlias.property.routingStrategy"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftResponsesDescribeAliasAliasRoutingStrategy`](#aws-cdk-sdk.gamelift.GameLiftResponsesDescribeAliasAliasRoutingStrategy)

---


### GameLiftResponsesDescribeAliasAliasRoutingStrategy <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeAliasAliasRoutingStrategy"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeAliasAliasRoutingStrategy.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesDescribeAliasAliasRoutingStrategy(__scope: Construct, __resources: string[], __input: GameLiftDescribeAliasInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeAliasAliasRoutingStrategy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeAliasAliasRoutingStrategy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeAliasAliasRoutingStrategy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDescribeAliasInput`](#aws-cdk-sdk.gamelift.GameLiftDescribeAliasInput)

---



#### Properties <a name="Properties"></a>

##### `fleetId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeAliasAliasRoutingStrategy.property.fleetId"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeAliasAliasRoutingStrategy.property.message"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeAliasAliasRoutingStrategy.property.type"></a>

- *Type:* `string`

---


### GameLiftResponsesDescribeBuild <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeBuild"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeBuild.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesDescribeBuild(__scope: Construct, __resources: string[], __input: GameLiftDescribeBuildInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeBuild.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeBuild.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeBuild.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDescribeBuildInput`](#aws-cdk-sdk.gamelift.GameLiftDescribeBuildInput)

---



#### Properties <a name="Properties"></a>

##### `build2`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeBuild.property.build2"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftResponsesDescribeBuildBuild2`](#aws-cdk-sdk.gamelift.GameLiftResponsesDescribeBuildBuild2)

---


### GameLiftResponsesDescribeBuildBuild2 <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeBuildBuild2"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeBuildBuild2.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesDescribeBuildBuild2(__scope: Construct, __resources: string[], __input: GameLiftDescribeBuildInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeBuildBuild2.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeBuildBuild2.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeBuildBuild2.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDescribeBuildInput`](#aws-cdk-sdk.gamelift.GameLiftDescribeBuildInput)

---



#### Properties <a name="Properties"></a>

##### `buildArn`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeBuildBuild2.property.buildArn"></a>

- *Type:* `string`

---

##### `buildId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeBuildBuild2.property.buildId"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeBuildBuild2.property.creationTime"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeBuildBuild2.property.name"></a>

- *Type:* `string`

---

##### `operatingSystem`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeBuildBuild2.property.operatingSystem"></a>

- *Type:* `string`

---

##### `sizeOnDisk`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeBuildBuild2.property.sizeOnDisk"></a>

- *Type:* `number`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeBuildBuild2.property.status"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeBuildBuild2.property.version"></a>

- *Type:* `string`

---


### GameLiftResponsesDescribeEc2InstanceLimits <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeEc2InstanceLimits"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeEc2InstanceLimits.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesDescribeEc2InstanceLimits(__scope: Construct, __resources: string[], __input: GameLiftDescribeEc2InstanceLimitsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeEc2InstanceLimits.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeEc2InstanceLimits.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeEc2InstanceLimits.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDescribeEc2InstanceLimitsInput`](#aws-cdk-sdk.gamelift.GameLiftDescribeEc2InstanceLimitsInput)

---



#### Properties <a name="Properties"></a>

##### `ec2InstanceLimits`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeEc2InstanceLimits.property.ec2InstanceLimits"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftEc2InstanceLimit`](#aws-cdk-sdk.gamelift.GameLiftEc2InstanceLimit)[]

---


### GameLiftResponsesDescribeFleetAttributes <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeFleetAttributes"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeFleetAttributes.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesDescribeFleetAttributes(__scope: Construct, __resources: string[], __input: GameLiftDescribeFleetAttributesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeFleetAttributes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeFleetAttributes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeFleetAttributes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDescribeFleetAttributesInput`](#aws-cdk-sdk.gamelift.GameLiftDescribeFleetAttributesInput)

---



#### Properties <a name="Properties"></a>

##### `fleetAttributes`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeFleetAttributes.property.fleetAttributes"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftFleetAttributes`](#aws-cdk-sdk.gamelift.GameLiftFleetAttributes)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeFleetAttributes.property.nextToken"></a>

- *Type:* `string`

---


### GameLiftResponsesDescribeFleetCapacity <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeFleetCapacity"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeFleetCapacity.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesDescribeFleetCapacity(__scope: Construct, __resources: string[], __input: GameLiftDescribeFleetCapacityInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeFleetCapacity.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeFleetCapacity.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeFleetCapacity.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDescribeFleetCapacityInput`](#aws-cdk-sdk.gamelift.GameLiftDescribeFleetCapacityInput)

---



#### Properties <a name="Properties"></a>

##### `fleetCapacity`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeFleetCapacity.property.fleetCapacity"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftFleetCapacity`](#aws-cdk-sdk.gamelift.GameLiftFleetCapacity)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeFleetCapacity.property.nextToken"></a>

- *Type:* `string`

---


### GameLiftResponsesDescribeFleetEvents <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeFleetEvents"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeFleetEvents.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesDescribeFleetEvents(__scope: Construct, __resources: string[], __input: GameLiftDescribeFleetEventsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeFleetEvents.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeFleetEvents.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeFleetEvents.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDescribeFleetEventsInput`](#aws-cdk-sdk.gamelift.GameLiftDescribeFleetEventsInput)

---



#### Properties <a name="Properties"></a>

##### `events`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeFleetEvents.property.events"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftEvent`](#aws-cdk-sdk.gamelift.GameLiftEvent)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeFleetEvents.property.nextToken"></a>

- *Type:* `string`

---


### GameLiftResponsesDescribeFleetPortSettings <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeFleetPortSettings"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeFleetPortSettings.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesDescribeFleetPortSettings(__scope: Construct, __resources: string[], __input: GameLiftDescribeFleetPortSettingsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeFleetPortSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeFleetPortSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeFleetPortSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDescribeFleetPortSettingsInput`](#aws-cdk-sdk.gamelift.GameLiftDescribeFleetPortSettingsInput)

---



#### Properties <a name="Properties"></a>

##### `inboundPermissions`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeFleetPortSettings.property.inboundPermissions"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftIpPermission`](#aws-cdk-sdk.gamelift.GameLiftIpPermission)[]

---


### GameLiftResponsesDescribeFleetUtilization <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeFleetUtilization"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeFleetUtilization.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesDescribeFleetUtilization(__scope: Construct, __resources: string[], __input: GameLiftDescribeFleetUtilizationInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeFleetUtilization.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeFleetUtilization.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeFleetUtilization.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDescribeFleetUtilizationInput`](#aws-cdk-sdk.gamelift.GameLiftDescribeFleetUtilizationInput)

---



#### Properties <a name="Properties"></a>

##### `fleetUtilization`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeFleetUtilization.property.fleetUtilization"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftFleetUtilization`](#aws-cdk-sdk.gamelift.GameLiftFleetUtilization)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeFleetUtilization.property.nextToken"></a>

- *Type:* `string`

---


### GameLiftResponsesDescribeGameServer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameServer"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameServer.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesDescribeGameServer(__scope: Construct, __resources: string[], __input: GameLiftDescribeGameServerInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameServer.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameServer.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameServer.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDescribeGameServerInput`](#aws-cdk-sdk.gamelift.GameLiftDescribeGameServerInput)

---



#### Properties <a name="Properties"></a>

##### `gameServer`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameServer.property.gameServer"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameServerGameServer`](#aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameServerGameServer)

---


### GameLiftResponsesDescribeGameServerGameServer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameServerGameServer"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameServerGameServer.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesDescribeGameServerGameServer(__scope: Construct, __resources: string[], __input: GameLiftDescribeGameServerInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameServerGameServer.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameServerGameServer.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameServerGameServer.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDescribeGameServerInput`](#aws-cdk-sdk.gamelift.GameLiftDescribeGameServerInput)

---



#### Properties <a name="Properties"></a>

##### `claimStatus`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameServerGameServer.property.claimStatus"></a>

- *Type:* `string`

---

##### `connectionInfo`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameServerGameServer.property.connectionInfo"></a>

- *Type:* `string`

---

##### `gameServerData`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameServerGameServer.property.gameServerData"></a>

- *Type:* `string`

---

##### `gameServerGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameServerGameServer.property.gameServerGroupArn"></a>

- *Type:* `string`

---

##### `gameServerGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameServerGameServer.property.gameServerGroupName"></a>

- *Type:* `string`

---

##### `gameServerId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameServerGameServer.property.gameServerId"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameServerGameServer.property.instanceId"></a>

- *Type:* `string`

---

##### `lastClaimTime`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameServerGameServer.property.lastClaimTime"></a>

- *Type:* `string`

---

##### `lastHealthCheckTime`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameServerGameServer.property.lastHealthCheckTime"></a>

- *Type:* `string`

---

##### `registrationTime`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameServerGameServer.property.registrationTime"></a>

- *Type:* `string`

---

##### `utilizationStatus`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameServerGameServer.property.utilizationStatus"></a>

- *Type:* `string`

---


### GameLiftResponsesDescribeGameServerGroup <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameServerGroup"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameServerGroup.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesDescribeGameServerGroup(__scope: Construct, __resources: string[], __input: GameLiftDescribeGameServerGroupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameServerGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameServerGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameServerGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDescribeGameServerGroupInput`](#aws-cdk-sdk.gamelift.GameLiftDescribeGameServerGroupInput)

---



#### Properties <a name="Properties"></a>

##### `gameServerGroup`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameServerGroup.property.gameServerGroup"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameServerGroupGameServerGroup`](#aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameServerGroupGameServerGroup)

---


### GameLiftResponsesDescribeGameServerGroupGameServerGroup <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameServerGroupGameServerGroup"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameServerGroupGameServerGroup.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesDescribeGameServerGroupGameServerGroup(__scope: Construct, __resources: string[], __input: GameLiftDescribeGameServerGroupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameServerGroupGameServerGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameServerGroupGameServerGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameServerGroupGameServerGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDescribeGameServerGroupInput`](#aws-cdk-sdk.gamelift.GameLiftDescribeGameServerGroupInput)

---



#### Properties <a name="Properties"></a>

##### `autoScalingGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameServerGroupGameServerGroup.property.autoScalingGroupArn"></a>

- *Type:* `string`

---

##### `balancingStrategy`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameServerGroupGameServerGroup.property.balancingStrategy"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameServerGroupGameServerGroup.property.creationTime"></a>

- *Type:* `string`

---

##### `gameServerGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameServerGroupGameServerGroup.property.gameServerGroupArn"></a>

- *Type:* `string`

---

##### `gameServerGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameServerGroupGameServerGroup.property.gameServerGroupName"></a>

- *Type:* `string`

---

##### `gameServerProtectionPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameServerGroupGameServerGroup.property.gameServerProtectionPolicy"></a>

- *Type:* `string`

---

##### `instanceDefinitions`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameServerGroupGameServerGroup.property.instanceDefinitions"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftInstanceDefinition`](#aws-cdk-sdk.gamelift.GameLiftInstanceDefinition)[]

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameServerGroupGameServerGroup.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameServerGroupGameServerGroup.property.roleArn"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameServerGroupGameServerGroup.property.status"></a>

- *Type:* `string`

---

##### `statusReason`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameServerGroupGameServerGroup.property.statusReason"></a>

- *Type:* `string`

---

##### `suspendedActions`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameServerGroupGameServerGroup.property.suspendedActions"></a>

- *Type:* `string`[]

---


### GameLiftResponsesDescribeGameServerInstances <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameServerInstances"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameServerInstances.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesDescribeGameServerInstances(__scope: Construct, __resources: string[], __input: GameLiftDescribeGameServerInstancesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameServerInstances.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameServerInstances.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameServerInstances.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDescribeGameServerInstancesInput`](#aws-cdk-sdk.gamelift.GameLiftDescribeGameServerInstancesInput)

---



#### Properties <a name="Properties"></a>

##### `gameServerInstances`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameServerInstances.property.gameServerInstances"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftGameServerInstance`](#aws-cdk-sdk.gamelift.GameLiftGameServerInstance)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameServerInstances.property.nextToken"></a>

- *Type:* `string`

---


### GameLiftResponsesDescribeGameSessionDetails <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameSessionDetails"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameSessionDetails.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesDescribeGameSessionDetails(__scope: Construct, __resources: string[], __input: GameLiftDescribeGameSessionDetailsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameSessionDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameSessionDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameSessionDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDescribeGameSessionDetailsInput`](#aws-cdk-sdk.gamelift.GameLiftDescribeGameSessionDetailsInput)

---



#### Properties <a name="Properties"></a>

##### `gameSessionDetails`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameSessionDetails.property.gameSessionDetails"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftGameSessionDetail`](#aws-cdk-sdk.gamelift.GameLiftGameSessionDetail)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameSessionDetails.property.nextToken"></a>

- *Type:* `string`

---


### GameLiftResponsesDescribeGameSessionPlacement <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameSessionPlacement"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameSessionPlacement.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesDescribeGameSessionPlacement(__scope: Construct, __resources: string[], __input: GameLiftDescribeGameSessionPlacementInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameSessionPlacement.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameSessionPlacement.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameSessionPlacement.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDescribeGameSessionPlacementInput`](#aws-cdk-sdk.gamelift.GameLiftDescribeGameSessionPlacementInput)

---



#### Properties <a name="Properties"></a>

##### `gameSessionPlacement`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameSessionPlacement.property.gameSessionPlacement"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameSessionPlacementGameSessionPlacement`](#aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameSessionPlacementGameSessionPlacement)

---


### GameLiftResponsesDescribeGameSessionPlacementGameSessionPlacement <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameSessionPlacementGameSessionPlacement"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameSessionPlacementGameSessionPlacement.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesDescribeGameSessionPlacementGameSessionPlacement(__scope: Construct, __resources: string[], __input: GameLiftDescribeGameSessionPlacementInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameSessionPlacementGameSessionPlacement.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameSessionPlacementGameSessionPlacement.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameSessionPlacementGameSessionPlacement.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDescribeGameSessionPlacementInput`](#aws-cdk-sdk.gamelift.GameLiftDescribeGameSessionPlacementInput)

---



#### Properties <a name="Properties"></a>

##### `dnsName`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameSessionPlacementGameSessionPlacement.property.dnsName"></a>

- *Type:* `string`

---

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameSessionPlacementGameSessionPlacement.property.endTime"></a>

- *Type:* `string`

---

##### `gameProperties`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameSessionPlacementGameSessionPlacement.property.gameProperties"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftGameProperty`](#aws-cdk-sdk.gamelift.GameLiftGameProperty)[]

---

##### `gameSessionArn`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameSessionPlacementGameSessionPlacement.property.gameSessionArn"></a>

- *Type:* `string`

---

##### `gameSessionData`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameSessionPlacementGameSessionPlacement.property.gameSessionData"></a>

- *Type:* `string`

---

##### `gameSessionId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameSessionPlacementGameSessionPlacement.property.gameSessionId"></a>

- *Type:* `string`

---

##### `gameSessionName`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameSessionPlacementGameSessionPlacement.property.gameSessionName"></a>

- *Type:* `string`

---

##### `gameSessionQueueName`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameSessionPlacementGameSessionPlacement.property.gameSessionQueueName"></a>

- *Type:* `string`

---

##### `gameSessionRegion`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameSessionPlacementGameSessionPlacement.property.gameSessionRegion"></a>

- *Type:* `string`

---

##### `ipAddress`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameSessionPlacementGameSessionPlacement.property.ipAddress"></a>

- *Type:* `string`

---

##### `matchmakerData`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameSessionPlacementGameSessionPlacement.property.matchmakerData"></a>

- *Type:* `string`

---

##### `maximumPlayerSessionCount`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameSessionPlacementGameSessionPlacement.property.maximumPlayerSessionCount"></a>

- *Type:* `number`

---

##### `placedPlayerSessions`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameSessionPlacementGameSessionPlacement.property.placedPlayerSessions"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftPlacedPlayerSession`](#aws-cdk-sdk.gamelift.GameLiftPlacedPlayerSession)[]

---

##### `placementId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameSessionPlacementGameSessionPlacement.property.placementId"></a>

- *Type:* `string`

---

##### `playerLatencies`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameSessionPlacementGameSessionPlacement.property.playerLatencies"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftPlayerLatency`](#aws-cdk-sdk.gamelift.GameLiftPlayerLatency)[]

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameSessionPlacementGameSessionPlacement.property.port"></a>

- *Type:* `number`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameSessionPlacementGameSessionPlacement.property.startTime"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameSessionPlacementGameSessionPlacement.property.status"></a>

- *Type:* `string`

---


### GameLiftResponsesDescribeGameSessionQueues <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameSessionQueues"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameSessionQueues.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesDescribeGameSessionQueues(__scope: Construct, __resources: string[], __input: GameLiftDescribeGameSessionQueuesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameSessionQueues.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameSessionQueues.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameSessionQueues.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDescribeGameSessionQueuesInput`](#aws-cdk-sdk.gamelift.GameLiftDescribeGameSessionQueuesInput)

---



#### Properties <a name="Properties"></a>

##### `gameSessionQueues`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameSessionQueues.property.gameSessionQueues"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftGameSessionQueue`](#aws-cdk-sdk.gamelift.GameLiftGameSessionQueue)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameSessionQueues.property.nextToken"></a>

- *Type:* `string`

---


### GameLiftResponsesDescribeGameSessions <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameSessions"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameSessions.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesDescribeGameSessions(__scope: Construct, __resources: string[], __input: GameLiftDescribeGameSessionsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameSessions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameSessions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameSessions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDescribeGameSessionsInput`](#aws-cdk-sdk.gamelift.GameLiftDescribeGameSessionsInput)

---



#### Properties <a name="Properties"></a>

##### `gameSessions`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameSessions.property.gameSessions"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftGameSession`](#aws-cdk-sdk.gamelift.GameLiftGameSession)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeGameSessions.property.nextToken"></a>

- *Type:* `string`

---


### GameLiftResponsesDescribeInstances <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeInstances"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeInstances.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesDescribeInstances(__scope: Construct, __resources: string[], __input: GameLiftDescribeInstancesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeInstances.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeInstances.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeInstances.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDescribeInstancesInput`](#aws-cdk-sdk.gamelift.GameLiftDescribeInstancesInput)

---



#### Properties <a name="Properties"></a>

##### `instances`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeInstances.property.instances"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftInstance`](#aws-cdk-sdk.gamelift.GameLiftInstance)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeInstances.property.nextToken"></a>

- *Type:* `string`

---


### GameLiftResponsesDescribeMatchmaking <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeMatchmaking"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeMatchmaking.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesDescribeMatchmaking(__scope: Construct, __resources: string[], __input: GameLiftDescribeMatchmakingInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeMatchmaking.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeMatchmaking.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeMatchmaking.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDescribeMatchmakingInput`](#aws-cdk-sdk.gamelift.GameLiftDescribeMatchmakingInput)

---



#### Properties <a name="Properties"></a>

##### `ticketList`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeMatchmaking.property.ticketList"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftMatchmakingTicket`](#aws-cdk-sdk.gamelift.GameLiftMatchmakingTicket)[]

---


### GameLiftResponsesDescribeMatchmakingConfigurations <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeMatchmakingConfigurations"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeMatchmakingConfigurations.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesDescribeMatchmakingConfigurations(__scope: Construct, __resources: string[], __input: GameLiftDescribeMatchmakingConfigurationsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeMatchmakingConfigurations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeMatchmakingConfigurations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeMatchmakingConfigurations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDescribeMatchmakingConfigurationsInput`](#aws-cdk-sdk.gamelift.GameLiftDescribeMatchmakingConfigurationsInput)

---



#### Properties <a name="Properties"></a>

##### `configurations`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeMatchmakingConfigurations.property.configurations"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftMatchmakingConfiguration`](#aws-cdk-sdk.gamelift.GameLiftMatchmakingConfiguration)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeMatchmakingConfigurations.property.nextToken"></a>

- *Type:* `string`

---


### GameLiftResponsesDescribeMatchmakingRuleSets <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeMatchmakingRuleSets"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeMatchmakingRuleSets.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesDescribeMatchmakingRuleSets(__scope: Construct, __resources: string[], __input: GameLiftDescribeMatchmakingRuleSetsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeMatchmakingRuleSets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeMatchmakingRuleSets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeMatchmakingRuleSets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDescribeMatchmakingRuleSetsInput`](#aws-cdk-sdk.gamelift.GameLiftDescribeMatchmakingRuleSetsInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeMatchmakingRuleSets.property.nextToken"></a>

- *Type:* `string`

---

##### `ruleSets`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeMatchmakingRuleSets.property.ruleSets"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftMatchmakingRuleSet`](#aws-cdk-sdk.gamelift.GameLiftMatchmakingRuleSet)[]

---


### GameLiftResponsesDescribePlayerSessions <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribePlayerSessions"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribePlayerSessions.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesDescribePlayerSessions(__scope: Construct, __resources: string[], __input: GameLiftDescribePlayerSessionsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribePlayerSessions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribePlayerSessions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribePlayerSessions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDescribePlayerSessionsInput`](#aws-cdk-sdk.gamelift.GameLiftDescribePlayerSessionsInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribePlayerSessions.property.nextToken"></a>

- *Type:* `string`

---

##### `playerSessions`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribePlayerSessions.property.playerSessions"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftPlayerSession`](#aws-cdk-sdk.gamelift.GameLiftPlayerSession)[]

---


### GameLiftResponsesDescribeRuntimeConfiguration <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeRuntimeConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeRuntimeConfiguration.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesDescribeRuntimeConfiguration(__scope: Construct, __resources: string[], __input: GameLiftDescribeRuntimeConfigurationInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeRuntimeConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeRuntimeConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeRuntimeConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDescribeRuntimeConfigurationInput`](#aws-cdk-sdk.gamelift.GameLiftDescribeRuntimeConfigurationInput)

---



#### Properties <a name="Properties"></a>

##### `runtimeConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeRuntimeConfiguration.property.runtimeConfiguration"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftResponsesDescribeRuntimeConfigurationRuntimeConfiguration`](#aws-cdk-sdk.gamelift.GameLiftResponsesDescribeRuntimeConfigurationRuntimeConfiguration)

---


### GameLiftResponsesDescribeRuntimeConfigurationRuntimeConfiguration <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeRuntimeConfigurationRuntimeConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeRuntimeConfigurationRuntimeConfiguration.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesDescribeRuntimeConfigurationRuntimeConfiguration(__scope: Construct, __resources: string[], __input: GameLiftDescribeRuntimeConfigurationInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeRuntimeConfigurationRuntimeConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeRuntimeConfigurationRuntimeConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeRuntimeConfigurationRuntimeConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDescribeRuntimeConfigurationInput`](#aws-cdk-sdk.gamelift.GameLiftDescribeRuntimeConfigurationInput)

---



#### Properties <a name="Properties"></a>

##### `gameSessionActivationTimeoutSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeRuntimeConfigurationRuntimeConfiguration.property.gameSessionActivationTimeoutSeconds"></a>

- *Type:* `number`

---

##### `maxConcurrentGameSessionActivations`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeRuntimeConfigurationRuntimeConfiguration.property.maxConcurrentGameSessionActivations"></a>

- *Type:* `number`

---

##### `serverProcesses`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeRuntimeConfigurationRuntimeConfiguration.property.serverProcesses"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftServerProcess`](#aws-cdk-sdk.gamelift.GameLiftServerProcess)[]

---


### GameLiftResponsesDescribeScalingPolicies <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeScalingPolicies"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeScalingPolicies.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesDescribeScalingPolicies(__scope: Construct, __resources: string[], __input: GameLiftDescribeScalingPoliciesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeScalingPolicies.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeScalingPolicies.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeScalingPolicies.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDescribeScalingPoliciesInput`](#aws-cdk-sdk.gamelift.GameLiftDescribeScalingPoliciesInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeScalingPolicies.property.nextToken"></a>

- *Type:* `string`

---

##### `scalingPolicies`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeScalingPolicies.property.scalingPolicies"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftScalingPolicy`](#aws-cdk-sdk.gamelift.GameLiftScalingPolicy)[]

---


### GameLiftResponsesDescribeScript <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeScript"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeScript.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesDescribeScript(__scope: Construct, __resources: string[], __input: GameLiftDescribeScriptInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeScript.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeScript.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeScript.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDescribeScriptInput`](#aws-cdk-sdk.gamelift.GameLiftDescribeScriptInput)

---



#### Properties <a name="Properties"></a>

##### `script`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeScript.property.script"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftResponsesDescribeScriptScript`](#aws-cdk-sdk.gamelift.GameLiftResponsesDescribeScriptScript)

---


### GameLiftResponsesDescribeScriptScript <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeScriptScript"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeScriptScript.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesDescribeScriptScript(__scope: Construct, __resources: string[], __input: GameLiftDescribeScriptInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeScriptScript.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeScriptScript.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeScriptScript.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDescribeScriptInput`](#aws-cdk-sdk.gamelift.GameLiftDescribeScriptInput)

---



#### Properties <a name="Properties"></a>

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeScriptScript.property.creationTime"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeScriptScript.property.name"></a>

- *Type:* `string`

---

##### `scriptArn`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeScriptScript.property.scriptArn"></a>

- *Type:* `string`

---

##### `scriptId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeScriptScript.property.scriptId"></a>

- *Type:* `string`

---

##### `sizeOnDisk`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeScriptScript.property.sizeOnDisk"></a>

- *Type:* `number`

---

##### `storageLocation`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeScriptScript.property.storageLocation"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftResponsesDescribeScriptScriptStorageLocation`](#aws-cdk-sdk.gamelift.GameLiftResponsesDescribeScriptScriptStorageLocation)

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeScriptScript.property.version"></a>

- *Type:* `string`

---


### GameLiftResponsesDescribeScriptScriptStorageLocation <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeScriptScriptStorageLocation"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeScriptScriptStorageLocation.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesDescribeScriptScriptStorageLocation(__scope: Construct, __resources: string[], __input: GameLiftDescribeScriptInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeScriptScriptStorageLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeScriptScriptStorageLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeScriptScriptStorageLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDescribeScriptInput`](#aws-cdk-sdk.gamelift.GameLiftDescribeScriptInput)

---



#### Properties <a name="Properties"></a>

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeScriptScriptStorageLocation.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeScriptScriptStorageLocation.property.key"></a>

- *Type:* `string`

---

##### `objectVersion`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeScriptScriptStorageLocation.property.objectVersion"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeScriptScriptStorageLocation.property.roleArn"></a>

- *Type:* `string`

---


### GameLiftResponsesDescribeVpcPeeringAuthorizations <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeVpcPeeringAuthorizations"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeVpcPeeringAuthorizations.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesDescribeVpcPeeringAuthorizations(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeVpcPeeringAuthorizations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeVpcPeeringAuthorizations.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `vpcPeeringAuthorizations`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeVpcPeeringAuthorizations.property.vpcPeeringAuthorizations"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftVpcPeeringAuthorization`](#aws-cdk-sdk.gamelift.GameLiftVpcPeeringAuthorization)[]

---


### GameLiftResponsesDescribeVpcPeeringConnections <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeVpcPeeringConnections"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeVpcPeeringConnections.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesDescribeVpcPeeringConnections(__scope: Construct, __resources: string[], __input: GameLiftDescribeVpcPeeringConnectionsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeVpcPeeringConnections.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeVpcPeeringConnections.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeVpcPeeringConnections.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftDescribeVpcPeeringConnectionsInput`](#aws-cdk-sdk.gamelift.GameLiftDescribeVpcPeeringConnectionsInput)

---



#### Properties <a name="Properties"></a>

##### `vpcPeeringConnections`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesDescribeVpcPeeringConnections.property.vpcPeeringConnections"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftVpcPeeringConnection`](#aws-cdk-sdk.gamelift.GameLiftVpcPeeringConnection)[]

---


### GameLiftResponsesFetchGameSessionLogUrl <a name="aws-cdk-sdk.gamelift.GameLiftResponsesFetchGameSessionLogUrl"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesFetchGameSessionLogUrl.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesFetchGameSessionLogUrl(__scope: Construct, __resources: string[], __input: GameLiftGetGameSessionLogUrlInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesFetchGameSessionLogUrl.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesFetchGameSessionLogUrl.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesFetchGameSessionLogUrl.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftGetGameSessionLogUrlInput`](#aws-cdk-sdk.gamelift.GameLiftGetGameSessionLogUrlInput)

---



#### Properties <a name="Properties"></a>

##### `preSignedUrl`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesFetchGameSessionLogUrl.property.preSignedUrl"></a>

- *Type:* `string`

---


### GameLiftResponsesFetchInstanceAccess <a name="aws-cdk-sdk.gamelift.GameLiftResponsesFetchInstanceAccess"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesFetchInstanceAccess.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesFetchInstanceAccess(__scope: Construct, __resources: string[], __input: GameLiftGetInstanceAccessInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesFetchInstanceAccess.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesFetchInstanceAccess.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesFetchInstanceAccess.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftGetInstanceAccessInput`](#aws-cdk-sdk.gamelift.GameLiftGetInstanceAccessInput)

---



#### Properties <a name="Properties"></a>

##### `instanceAccess`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesFetchInstanceAccess.property.instanceAccess"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftResponsesFetchInstanceAccessInstanceAccess`](#aws-cdk-sdk.gamelift.GameLiftResponsesFetchInstanceAccessInstanceAccess)

---


### GameLiftResponsesFetchInstanceAccessInstanceAccess <a name="aws-cdk-sdk.gamelift.GameLiftResponsesFetchInstanceAccessInstanceAccess"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesFetchInstanceAccessInstanceAccess.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesFetchInstanceAccessInstanceAccess(__scope: Construct, __resources: string[], __input: GameLiftGetInstanceAccessInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesFetchInstanceAccessInstanceAccess.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesFetchInstanceAccessInstanceAccess.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesFetchInstanceAccessInstanceAccess.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftGetInstanceAccessInput`](#aws-cdk-sdk.gamelift.GameLiftGetInstanceAccessInput)

---



#### Properties <a name="Properties"></a>

##### `credentials`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesFetchInstanceAccessInstanceAccess.property.credentials"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftResponsesFetchInstanceAccessInstanceAccessCredentials`](#aws-cdk-sdk.gamelift.GameLiftResponsesFetchInstanceAccessInstanceAccessCredentials)

---

##### `fleetId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesFetchInstanceAccessInstanceAccess.property.fleetId"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesFetchInstanceAccessInstanceAccess.property.instanceId"></a>

- *Type:* `string`

---

##### `ipAddress`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesFetchInstanceAccessInstanceAccess.property.ipAddress"></a>

- *Type:* `string`

---

##### `operatingSystem`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesFetchInstanceAccessInstanceAccess.property.operatingSystem"></a>

- *Type:* `string`

---


### GameLiftResponsesFetchInstanceAccessInstanceAccessCredentials <a name="aws-cdk-sdk.gamelift.GameLiftResponsesFetchInstanceAccessInstanceAccessCredentials"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesFetchInstanceAccessInstanceAccessCredentials.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesFetchInstanceAccessInstanceAccessCredentials(__scope: Construct, __resources: string[], __input: GameLiftGetInstanceAccessInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesFetchInstanceAccessInstanceAccessCredentials.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesFetchInstanceAccessInstanceAccessCredentials.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesFetchInstanceAccessInstanceAccessCredentials.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftGetInstanceAccessInput`](#aws-cdk-sdk.gamelift.GameLiftGetInstanceAccessInput)

---



#### Properties <a name="Properties"></a>

##### `secret`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesFetchInstanceAccessInstanceAccessCredentials.property.secret"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesFetchInstanceAccessInstanceAccessCredentials.property.userName"></a>

- *Type:* `string`

---


### GameLiftResponsesListAliases <a name="aws-cdk-sdk.gamelift.GameLiftResponsesListAliases"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesListAliases.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesListAliases(__scope: Construct, __resources: string[], __input: GameLiftListAliasesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesListAliases.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesListAliases.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesListAliases.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftListAliasesInput`](#aws-cdk-sdk.gamelift.GameLiftListAliasesInput)

---



#### Properties <a name="Properties"></a>

##### `aliases`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesListAliases.property.aliases"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftAlias`](#aws-cdk-sdk.gamelift.GameLiftAlias)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesListAliases.property.nextToken"></a>

- *Type:* `string`

---


### GameLiftResponsesListBuilds <a name="aws-cdk-sdk.gamelift.GameLiftResponsesListBuilds"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesListBuilds.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesListBuilds(__scope: Construct, __resources: string[], __input: GameLiftListBuildsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesListBuilds.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesListBuilds.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesListBuilds.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftListBuildsInput`](#aws-cdk-sdk.gamelift.GameLiftListBuildsInput)

---



#### Properties <a name="Properties"></a>

##### `builds`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesListBuilds.property.builds"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftBuild`](#aws-cdk-sdk.gamelift.GameLiftBuild)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesListBuilds.property.nextToken"></a>

- *Type:* `string`

---


### GameLiftResponsesListFleets <a name="aws-cdk-sdk.gamelift.GameLiftResponsesListFleets"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesListFleets.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesListFleets(__scope: Construct, __resources: string[], __input: GameLiftListFleetsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesListFleets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesListFleets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesListFleets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftListFleetsInput`](#aws-cdk-sdk.gamelift.GameLiftListFleetsInput)

---



#### Properties <a name="Properties"></a>

##### `fleetIds`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesListFleets.property.fleetIds"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesListFleets.property.nextToken"></a>

- *Type:* `string`

---


### GameLiftResponsesListGameServerGroups <a name="aws-cdk-sdk.gamelift.GameLiftResponsesListGameServerGroups"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesListGameServerGroups.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesListGameServerGroups(__scope: Construct, __resources: string[], __input: GameLiftListGameServerGroupsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesListGameServerGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesListGameServerGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesListGameServerGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftListGameServerGroupsInput`](#aws-cdk-sdk.gamelift.GameLiftListGameServerGroupsInput)

---



#### Properties <a name="Properties"></a>

##### `gameServerGroups`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesListGameServerGroups.property.gameServerGroups"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftGameServerGroup`](#aws-cdk-sdk.gamelift.GameLiftGameServerGroup)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesListGameServerGroups.property.nextToken"></a>

- *Type:* `string`

---


### GameLiftResponsesListGameServers <a name="aws-cdk-sdk.gamelift.GameLiftResponsesListGameServers"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesListGameServers.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesListGameServers(__scope: Construct, __resources: string[], __input: GameLiftListGameServersInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesListGameServers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesListGameServers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesListGameServers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftListGameServersInput`](#aws-cdk-sdk.gamelift.GameLiftListGameServersInput)

---



#### Properties <a name="Properties"></a>

##### `gameServers`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesListGameServers.property.gameServers"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftGameServer`](#aws-cdk-sdk.gamelift.GameLiftGameServer)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesListGameServers.property.nextToken"></a>

- *Type:* `string`

---


### GameLiftResponsesListScripts <a name="aws-cdk-sdk.gamelift.GameLiftResponsesListScripts"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesListScripts.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesListScripts(__scope: Construct, __resources: string[], __input: GameLiftListScriptsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesListScripts.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesListScripts.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesListScripts.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftListScriptsInput`](#aws-cdk-sdk.gamelift.GameLiftListScriptsInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesListScripts.property.nextToken"></a>

- *Type:* `string`

---

##### `scripts`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesListScripts.property.scripts"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftScript`](#aws-cdk-sdk.gamelift.GameLiftScript)[]

---


### GameLiftResponsesListTagsForResource <a name="aws-cdk-sdk.gamelift.GameLiftResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesListTagsForResource.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: GameLiftListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftListTagsForResourceRequest`](#aws-cdk-sdk.gamelift.GameLiftListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesListTagsForResource.property.tags"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftTag`](#aws-cdk-sdk.gamelift.GameLiftTag)[]

---


### GameLiftResponsesPutScalingPolicy <a name="aws-cdk-sdk.gamelift.GameLiftResponsesPutScalingPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesPutScalingPolicy.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesPutScalingPolicy(__scope: Construct, __resources: string[], __input: GameLiftPutScalingPolicyInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesPutScalingPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesPutScalingPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesPutScalingPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftPutScalingPolicyInput`](#aws-cdk-sdk.gamelift.GameLiftPutScalingPolicyInput)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesPutScalingPolicy.property.name"></a>

- *Type:* `string`

---


### GameLiftResponsesRegisterGameServer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesRegisterGameServer"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesRegisterGameServer.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesRegisterGameServer(__scope: Construct, __resources: string[], __input: GameLiftRegisterGameServerInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesRegisterGameServer.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesRegisterGameServer.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesRegisterGameServer.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftRegisterGameServerInput`](#aws-cdk-sdk.gamelift.GameLiftRegisterGameServerInput)

---



#### Properties <a name="Properties"></a>

##### `gameServer`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesRegisterGameServer.property.gameServer"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftResponsesRegisterGameServerGameServer`](#aws-cdk-sdk.gamelift.GameLiftResponsesRegisterGameServerGameServer)

---


### GameLiftResponsesRegisterGameServerGameServer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesRegisterGameServerGameServer"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesRegisterGameServerGameServer.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesRegisterGameServerGameServer(__scope: Construct, __resources: string[], __input: GameLiftRegisterGameServerInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesRegisterGameServerGameServer.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesRegisterGameServerGameServer.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesRegisterGameServerGameServer.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftRegisterGameServerInput`](#aws-cdk-sdk.gamelift.GameLiftRegisterGameServerInput)

---



#### Properties <a name="Properties"></a>

##### `claimStatus`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesRegisterGameServerGameServer.property.claimStatus"></a>

- *Type:* `string`

---

##### `connectionInfo`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesRegisterGameServerGameServer.property.connectionInfo"></a>

- *Type:* `string`

---

##### `gameServerData`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesRegisterGameServerGameServer.property.gameServerData"></a>

- *Type:* `string`

---

##### `gameServerGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesRegisterGameServerGameServer.property.gameServerGroupArn"></a>

- *Type:* `string`

---

##### `gameServerGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesRegisterGameServerGameServer.property.gameServerGroupName"></a>

- *Type:* `string`

---

##### `gameServerId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesRegisterGameServerGameServer.property.gameServerId"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesRegisterGameServerGameServer.property.instanceId"></a>

- *Type:* `string`

---

##### `lastClaimTime`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesRegisterGameServerGameServer.property.lastClaimTime"></a>

- *Type:* `string`

---

##### `lastHealthCheckTime`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesRegisterGameServerGameServer.property.lastHealthCheckTime"></a>

- *Type:* `string`

---

##### `registrationTime`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesRegisterGameServerGameServer.property.registrationTime"></a>

- *Type:* `string`

---

##### `utilizationStatus`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesRegisterGameServerGameServer.property.utilizationStatus"></a>

- *Type:* `string`

---


### GameLiftResponsesRequestUploadCredentials <a name="aws-cdk-sdk.gamelift.GameLiftResponsesRequestUploadCredentials"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesRequestUploadCredentials.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesRequestUploadCredentials(__scope: Construct, __resources: string[], __input: GameLiftRequestUploadCredentialsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesRequestUploadCredentials.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesRequestUploadCredentials.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesRequestUploadCredentials.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftRequestUploadCredentialsInput`](#aws-cdk-sdk.gamelift.GameLiftRequestUploadCredentialsInput)

---



#### Properties <a name="Properties"></a>

##### `storageLocation`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesRequestUploadCredentials.property.storageLocation"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftResponsesRequestUploadCredentialsStorageLocation`](#aws-cdk-sdk.gamelift.GameLiftResponsesRequestUploadCredentialsStorageLocation)

---

##### `uploadCredentials`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesRequestUploadCredentials.property.uploadCredentials"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftResponsesRequestUploadCredentialsUploadCredentials`](#aws-cdk-sdk.gamelift.GameLiftResponsesRequestUploadCredentialsUploadCredentials)

---


### GameLiftResponsesRequestUploadCredentialsStorageLocation <a name="aws-cdk-sdk.gamelift.GameLiftResponsesRequestUploadCredentialsStorageLocation"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesRequestUploadCredentialsStorageLocation.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesRequestUploadCredentialsStorageLocation(__scope: Construct, __resources: string[], __input: GameLiftRequestUploadCredentialsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesRequestUploadCredentialsStorageLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesRequestUploadCredentialsStorageLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesRequestUploadCredentialsStorageLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftRequestUploadCredentialsInput`](#aws-cdk-sdk.gamelift.GameLiftRequestUploadCredentialsInput)

---



#### Properties <a name="Properties"></a>

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesRequestUploadCredentialsStorageLocation.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesRequestUploadCredentialsStorageLocation.property.key"></a>

- *Type:* `string`

---

##### `objectVersion`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesRequestUploadCredentialsStorageLocation.property.objectVersion"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesRequestUploadCredentialsStorageLocation.property.roleArn"></a>

- *Type:* `string`

---


### GameLiftResponsesRequestUploadCredentialsUploadCredentials <a name="aws-cdk-sdk.gamelift.GameLiftResponsesRequestUploadCredentialsUploadCredentials"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesRequestUploadCredentialsUploadCredentials.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesRequestUploadCredentialsUploadCredentials(__scope: Construct, __resources: string[], __input: GameLiftRequestUploadCredentialsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesRequestUploadCredentialsUploadCredentials.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesRequestUploadCredentialsUploadCredentials.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesRequestUploadCredentialsUploadCredentials.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftRequestUploadCredentialsInput`](#aws-cdk-sdk.gamelift.GameLiftRequestUploadCredentialsInput)

---



#### Properties <a name="Properties"></a>

##### `accessKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesRequestUploadCredentialsUploadCredentials.property.accessKeyId"></a>

- *Type:* `string`

---

##### `secretAccessKey`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesRequestUploadCredentialsUploadCredentials.property.secretAccessKey"></a>

- *Type:* `string`

---

##### `sessionToken`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesRequestUploadCredentialsUploadCredentials.property.sessionToken"></a>

- *Type:* `string`

---


### GameLiftResponsesResolveAlias <a name="aws-cdk-sdk.gamelift.GameLiftResponsesResolveAlias"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesResolveAlias.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesResolveAlias(__scope: Construct, __resources: string[], __input: GameLiftResolveAliasInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesResolveAlias.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesResolveAlias.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesResolveAlias.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftResolveAliasInput`](#aws-cdk-sdk.gamelift.GameLiftResolveAliasInput)

---



#### Properties <a name="Properties"></a>

##### `fleetArn`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesResolveAlias.property.fleetArn"></a>

- *Type:* `string`

---

##### `fleetId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesResolveAlias.property.fleetId"></a>

- *Type:* `string`

---


### GameLiftResponsesResumeGameServerGroup <a name="aws-cdk-sdk.gamelift.GameLiftResponsesResumeGameServerGroup"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesResumeGameServerGroup.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesResumeGameServerGroup(__scope: Construct, __resources: string[], __input: GameLiftResumeGameServerGroupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesResumeGameServerGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesResumeGameServerGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesResumeGameServerGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftResumeGameServerGroupInput`](#aws-cdk-sdk.gamelift.GameLiftResumeGameServerGroupInput)

---



#### Properties <a name="Properties"></a>

##### `gameServerGroup`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesResumeGameServerGroup.property.gameServerGroup"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftResponsesResumeGameServerGroupGameServerGroup`](#aws-cdk-sdk.gamelift.GameLiftResponsesResumeGameServerGroupGameServerGroup)

---


### GameLiftResponsesResumeGameServerGroupGameServerGroup <a name="aws-cdk-sdk.gamelift.GameLiftResponsesResumeGameServerGroupGameServerGroup"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesResumeGameServerGroupGameServerGroup.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesResumeGameServerGroupGameServerGroup(__scope: Construct, __resources: string[], __input: GameLiftResumeGameServerGroupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesResumeGameServerGroupGameServerGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesResumeGameServerGroupGameServerGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesResumeGameServerGroupGameServerGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftResumeGameServerGroupInput`](#aws-cdk-sdk.gamelift.GameLiftResumeGameServerGroupInput)

---



#### Properties <a name="Properties"></a>

##### `autoScalingGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesResumeGameServerGroupGameServerGroup.property.autoScalingGroupArn"></a>

- *Type:* `string`

---

##### `balancingStrategy`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesResumeGameServerGroupGameServerGroup.property.balancingStrategy"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesResumeGameServerGroupGameServerGroup.property.creationTime"></a>

- *Type:* `string`

---

##### `gameServerGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesResumeGameServerGroupGameServerGroup.property.gameServerGroupArn"></a>

- *Type:* `string`

---

##### `gameServerGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesResumeGameServerGroupGameServerGroup.property.gameServerGroupName"></a>

- *Type:* `string`

---

##### `gameServerProtectionPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesResumeGameServerGroupGameServerGroup.property.gameServerProtectionPolicy"></a>

- *Type:* `string`

---

##### `instanceDefinitions`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesResumeGameServerGroupGameServerGroup.property.instanceDefinitions"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftInstanceDefinition`](#aws-cdk-sdk.gamelift.GameLiftInstanceDefinition)[]

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesResumeGameServerGroupGameServerGroup.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesResumeGameServerGroupGameServerGroup.property.roleArn"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesResumeGameServerGroupGameServerGroup.property.status"></a>

- *Type:* `string`

---

##### `statusReason`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesResumeGameServerGroupGameServerGroup.property.statusReason"></a>

- *Type:* `string`

---

##### `suspendedActions`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesResumeGameServerGroupGameServerGroup.property.suspendedActions"></a>

- *Type:* `string`[]

---


### GameLiftResponsesSearchGameSessions <a name="aws-cdk-sdk.gamelift.GameLiftResponsesSearchGameSessions"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesSearchGameSessions.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesSearchGameSessions(__scope: Construct, __resources: string[], __input: GameLiftSearchGameSessionsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesSearchGameSessions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesSearchGameSessions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesSearchGameSessions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftSearchGameSessionsInput`](#aws-cdk-sdk.gamelift.GameLiftSearchGameSessionsInput)

---



#### Properties <a name="Properties"></a>

##### `gameSessions`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesSearchGameSessions.property.gameSessions"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftGameSession`](#aws-cdk-sdk.gamelift.GameLiftGameSession)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesSearchGameSessions.property.nextToken"></a>

- *Type:* `string`

---


### GameLiftResponsesStartGameSessionPlacement <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartGameSessionPlacement"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartGameSessionPlacement.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesStartGameSessionPlacement(__scope: Construct, __resources: string[], __input: GameLiftStartGameSessionPlacementInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartGameSessionPlacement.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartGameSessionPlacement.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartGameSessionPlacement.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftStartGameSessionPlacementInput`](#aws-cdk-sdk.gamelift.GameLiftStartGameSessionPlacementInput)

---



#### Properties <a name="Properties"></a>

##### `gameSessionPlacement`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartGameSessionPlacement.property.gameSessionPlacement"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftResponsesStartGameSessionPlacementGameSessionPlacement`](#aws-cdk-sdk.gamelift.GameLiftResponsesStartGameSessionPlacementGameSessionPlacement)

---


### GameLiftResponsesStartGameSessionPlacementGameSessionPlacement <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartGameSessionPlacementGameSessionPlacement"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartGameSessionPlacementGameSessionPlacement.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesStartGameSessionPlacementGameSessionPlacement(__scope: Construct, __resources: string[], __input: GameLiftStartGameSessionPlacementInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartGameSessionPlacementGameSessionPlacement.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartGameSessionPlacementGameSessionPlacement.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartGameSessionPlacementGameSessionPlacement.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftStartGameSessionPlacementInput`](#aws-cdk-sdk.gamelift.GameLiftStartGameSessionPlacementInput)

---



#### Properties <a name="Properties"></a>

##### `dnsName`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartGameSessionPlacementGameSessionPlacement.property.dnsName"></a>

- *Type:* `string`

---

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartGameSessionPlacementGameSessionPlacement.property.endTime"></a>

- *Type:* `string`

---

##### `gameProperties`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartGameSessionPlacementGameSessionPlacement.property.gameProperties"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftGameProperty`](#aws-cdk-sdk.gamelift.GameLiftGameProperty)[]

---

##### `gameSessionArn`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartGameSessionPlacementGameSessionPlacement.property.gameSessionArn"></a>

- *Type:* `string`

---

##### `gameSessionData`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartGameSessionPlacementGameSessionPlacement.property.gameSessionData"></a>

- *Type:* `string`

---

##### `gameSessionId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartGameSessionPlacementGameSessionPlacement.property.gameSessionId"></a>

- *Type:* `string`

---

##### `gameSessionName`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartGameSessionPlacementGameSessionPlacement.property.gameSessionName"></a>

- *Type:* `string`

---

##### `gameSessionQueueName`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartGameSessionPlacementGameSessionPlacement.property.gameSessionQueueName"></a>

- *Type:* `string`

---

##### `gameSessionRegion`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartGameSessionPlacementGameSessionPlacement.property.gameSessionRegion"></a>

- *Type:* `string`

---

##### `ipAddress`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartGameSessionPlacementGameSessionPlacement.property.ipAddress"></a>

- *Type:* `string`

---

##### `matchmakerData`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartGameSessionPlacementGameSessionPlacement.property.matchmakerData"></a>

- *Type:* `string`

---

##### `maximumPlayerSessionCount`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartGameSessionPlacementGameSessionPlacement.property.maximumPlayerSessionCount"></a>

- *Type:* `number`

---

##### `placedPlayerSessions`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartGameSessionPlacementGameSessionPlacement.property.placedPlayerSessions"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftPlacedPlayerSession`](#aws-cdk-sdk.gamelift.GameLiftPlacedPlayerSession)[]

---

##### `placementId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartGameSessionPlacementGameSessionPlacement.property.placementId"></a>

- *Type:* `string`

---

##### `playerLatencies`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartGameSessionPlacementGameSessionPlacement.property.playerLatencies"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftPlayerLatency`](#aws-cdk-sdk.gamelift.GameLiftPlayerLatency)[]

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartGameSessionPlacementGameSessionPlacement.property.port"></a>

- *Type:* `number`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartGameSessionPlacementGameSessionPlacement.property.startTime"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartGameSessionPlacementGameSessionPlacement.property.status"></a>

- *Type:* `string`

---


### GameLiftResponsesStartMatchBackfill <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchBackfill"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchBackfill.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesStartMatchBackfill(__scope: Construct, __resources: string[], __input: GameLiftStartMatchBackfillInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchBackfill.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchBackfill.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchBackfill.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftStartMatchBackfillInput`](#aws-cdk-sdk.gamelift.GameLiftStartMatchBackfillInput)

---



#### Properties <a name="Properties"></a>

##### `matchmakingTicket`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchBackfill.property.matchmakingTicket"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchBackfillMatchmakingTicket`](#aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchBackfillMatchmakingTicket)

---


### GameLiftResponsesStartMatchBackfillMatchmakingTicket <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchBackfillMatchmakingTicket"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchBackfillMatchmakingTicket.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesStartMatchBackfillMatchmakingTicket(__scope: Construct, __resources: string[], __input: GameLiftStartMatchBackfillInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchBackfillMatchmakingTicket.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchBackfillMatchmakingTicket.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchBackfillMatchmakingTicket.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftStartMatchBackfillInput`](#aws-cdk-sdk.gamelift.GameLiftStartMatchBackfillInput)

---



#### Properties <a name="Properties"></a>

##### `configurationArn`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchBackfillMatchmakingTicket.property.configurationArn"></a>

- *Type:* `string`

---

##### `configurationName`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchBackfillMatchmakingTicket.property.configurationName"></a>

- *Type:* `string`

---

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchBackfillMatchmakingTicket.property.endTime"></a>

- *Type:* `string`

---

##### `estimatedWaitTime`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchBackfillMatchmakingTicket.property.estimatedWaitTime"></a>

- *Type:* `number`

---

##### `gameSessionConnectionInfo`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchBackfillMatchmakingTicket.property.gameSessionConnectionInfo"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchBackfillMatchmakingTicketGameSessionConnectionInfo`](#aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchBackfillMatchmakingTicketGameSessionConnectionInfo)

---

##### `players`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchBackfillMatchmakingTicket.property.players"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftPlayer`](#aws-cdk-sdk.gamelift.GameLiftPlayer)[]

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchBackfillMatchmakingTicket.property.startTime"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchBackfillMatchmakingTicket.property.status"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchBackfillMatchmakingTicket.property.statusMessage"></a>

- *Type:* `string`

---

##### `statusReason`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchBackfillMatchmakingTicket.property.statusReason"></a>

- *Type:* `string`

---

##### `ticketId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchBackfillMatchmakingTicket.property.ticketId"></a>

- *Type:* `string`

---


### GameLiftResponsesStartMatchBackfillMatchmakingTicketGameSessionConnectionInfo <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchBackfillMatchmakingTicketGameSessionConnectionInfo"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchBackfillMatchmakingTicketGameSessionConnectionInfo.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesStartMatchBackfillMatchmakingTicketGameSessionConnectionInfo(__scope: Construct, __resources: string[], __input: GameLiftStartMatchBackfillInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchBackfillMatchmakingTicketGameSessionConnectionInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchBackfillMatchmakingTicketGameSessionConnectionInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchBackfillMatchmakingTicketGameSessionConnectionInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftStartMatchBackfillInput`](#aws-cdk-sdk.gamelift.GameLiftStartMatchBackfillInput)

---



#### Properties <a name="Properties"></a>

##### `dnsName`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchBackfillMatchmakingTicketGameSessionConnectionInfo.property.dnsName"></a>

- *Type:* `string`

---

##### `gameSessionArn`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchBackfillMatchmakingTicketGameSessionConnectionInfo.property.gameSessionArn"></a>

- *Type:* `string`

---

##### `ipAddress`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchBackfillMatchmakingTicketGameSessionConnectionInfo.property.ipAddress"></a>

- *Type:* `string`

---

##### `matchedPlayerSessions`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchBackfillMatchmakingTicketGameSessionConnectionInfo.property.matchedPlayerSessions"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftMatchedPlayerSession`](#aws-cdk-sdk.gamelift.GameLiftMatchedPlayerSession)[]

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchBackfillMatchmakingTicketGameSessionConnectionInfo.property.port"></a>

- *Type:* `number`

---


### GameLiftResponsesStartMatchmaking <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchmaking"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchmaking.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesStartMatchmaking(__scope: Construct, __resources: string[], __input: GameLiftStartMatchmakingInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchmaking.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchmaking.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchmaking.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftStartMatchmakingInput`](#aws-cdk-sdk.gamelift.GameLiftStartMatchmakingInput)

---



#### Properties <a name="Properties"></a>

##### `matchmakingTicket`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchmaking.property.matchmakingTicket"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchmakingMatchmakingTicket`](#aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchmakingMatchmakingTicket)

---


### GameLiftResponsesStartMatchmakingMatchmakingTicket <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchmakingMatchmakingTicket"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchmakingMatchmakingTicket.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesStartMatchmakingMatchmakingTicket(__scope: Construct, __resources: string[], __input: GameLiftStartMatchmakingInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchmakingMatchmakingTicket.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchmakingMatchmakingTicket.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchmakingMatchmakingTicket.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftStartMatchmakingInput`](#aws-cdk-sdk.gamelift.GameLiftStartMatchmakingInput)

---



#### Properties <a name="Properties"></a>

##### `configurationArn`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchmakingMatchmakingTicket.property.configurationArn"></a>

- *Type:* `string`

---

##### `configurationName`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchmakingMatchmakingTicket.property.configurationName"></a>

- *Type:* `string`

---

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchmakingMatchmakingTicket.property.endTime"></a>

- *Type:* `string`

---

##### `estimatedWaitTime`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchmakingMatchmakingTicket.property.estimatedWaitTime"></a>

- *Type:* `number`

---

##### `gameSessionConnectionInfo`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchmakingMatchmakingTicket.property.gameSessionConnectionInfo"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchmakingMatchmakingTicketGameSessionConnectionInfo`](#aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchmakingMatchmakingTicketGameSessionConnectionInfo)

---

##### `players`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchmakingMatchmakingTicket.property.players"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftPlayer`](#aws-cdk-sdk.gamelift.GameLiftPlayer)[]

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchmakingMatchmakingTicket.property.startTime"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchmakingMatchmakingTicket.property.status"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchmakingMatchmakingTicket.property.statusMessage"></a>

- *Type:* `string`

---

##### `statusReason`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchmakingMatchmakingTicket.property.statusReason"></a>

- *Type:* `string`

---

##### `ticketId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchmakingMatchmakingTicket.property.ticketId"></a>

- *Type:* `string`

---


### GameLiftResponsesStartMatchmakingMatchmakingTicketGameSessionConnectionInfo <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchmakingMatchmakingTicketGameSessionConnectionInfo"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchmakingMatchmakingTicketGameSessionConnectionInfo.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesStartMatchmakingMatchmakingTicketGameSessionConnectionInfo(__scope: Construct, __resources: string[], __input: GameLiftStartMatchmakingInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchmakingMatchmakingTicketGameSessionConnectionInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchmakingMatchmakingTicketGameSessionConnectionInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchmakingMatchmakingTicketGameSessionConnectionInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftStartMatchmakingInput`](#aws-cdk-sdk.gamelift.GameLiftStartMatchmakingInput)

---



#### Properties <a name="Properties"></a>

##### `dnsName`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchmakingMatchmakingTicketGameSessionConnectionInfo.property.dnsName"></a>

- *Type:* `string`

---

##### `gameSessionArn`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchmakingMatchmakingTicketGameSessionConnectionInfo.property.gameSessionArn"></a>

- *Type:* `string`

---

##### `ipAddress`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchmakingMatchmakingTicketGameSessionConnectionInfo.property.ipAddress"></a>

- *Type:* `string`

---

##### `matchedPlayerSessions`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchmakingMatchmakingTicketGameSessionConnectionInfo.property.matchedPlayerSessions"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftMatchedPlayerSession`](#aws-cdk-sdk.gamelift.GameLiftMatchedPlayerSession)[]

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStartMatchmakingMatchmakingTicketGameSessionConnectionInfo.property.port"></a>

- *Type:* `number`

---


### GameLiftResponsesStopGameSessionPlacement <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStopGameSessionPlacement"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStopGameSessionPlacement.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesStopGameSessionPlacement(__scope: Construct, __resources: string[], __input: GameLiftStopGameSessionPlacementInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStopGameSessionPlacement.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStopGameSessionPlacement.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStopGameSessionPlacement.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftStopGameSessionPlacementInput`](#aws-cdk-sdk.gamelift.GameLiftStopGameSessionPlacementInput)

---



#### Properties <a name="Properties"></a>

##### `gameSessionPlacement`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStopGameSessionPlacement.property.gameSessionPlacement"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftResponsesStopGameSessionPlacementGameSessionPlacement`](#aws-cdk-sdk.gamelift.GameLiftResponsesStopGameSessionPlacementGameSessionPlacement)

---


### GameLiftResponsesStopGameSessionPlacementGameSessionPlacement <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStopGameSessionPlacementGameSessionPlacement"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStopGameSessionPlacementGameSessionPlacement.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesStopGameSessionPlacementGameSessionPlacement(__scope: Construct, __resources: string[], __input: GameLiftStopGameSessionPlacementInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStopGameSessionPlacementGameSessionPlacement.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStopGameSessionPlacementGameSessionPlacement.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStopGameSessionPlacementGameSessionPlacement.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftStopGameSessionPlacementInput`](#aws-cdk-sdk.gamelift.GameLiftStopGameSessionPlacementInput)

---



#### Properties <a name="Properties"></a>

##### `dnsName`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStopGameSessionPlacementGameSessionPlacement.property.dnsName"></a>

- *Type:* `string`

---

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStopGameSessionPlacementGameSessionPlacement.property.endTime"></a>

- *Type:* `string`

---

##### `gameProperties`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStopGameSessionPlacementGameSessionPlacement.property.gameProperties"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftGameProperty`](#aws-cdk-sdk.gamelift.GameLiftGameProperty)[]

---

##### `gameSessionArn`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStopGameSessionPlacementGameSessionPlacement.property.gameSessionArn"></a>

- *Type:* `string`

---

##### `gameSessionData`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStopGameSessionPlacementGameSessionPlacement.property.gameSessionData"></a>

- *Type:* `string`

---

##### `gameSessionId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStopGameSessionPlacementGameSessionPlacement.property.gameSessionId"></a>

- *Type:* `string`

---

##### `gameSessionName`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStopGameSessionPlacementGameSessionPlacement.property.gameSessionName"></a>

- *Type:* `string`

---

##### `gameSessionQueueName`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStopGameSessionPlacementGameSessionPlacement.property.gameSessionQueueName"></a>

- *Type:* `string`

---

##### `gameSessionRegion`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStopGameSessionPlacementGameSessionPlacement.property.gameSessionRegion"></a>

- *Type:* `string`

---

##### `ipAddress`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStopGameSessionPlacementGameSessionPlacement.property.ipAddress"></a>

- *Type:* `string`

---

##### `matchmakerData`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStopGameSessionPlacementGameSessionPlacement.property.matchmakerData"></a>

- *Type:* `string`

---

##### `maximumPlayerSessionCount`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStopGameSessionPlacementGameSessionPlacement.property.maximumPlayerSessionCount"></a>

- *Type:* `number`

---

##### `placedPlayerSessions`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStopGameSessionPlacementGameSessionPlacement.property.placedPlayerSessions"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftPlacedPlayerSession`](#aws-cdk-sdk.gamelift.GameLiftPlacedPlayerSession)[]

---

##### `placementId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStopGameSessionPlacementGameSessionPlacement.property.placementId"></a>

- *Type:* `string`

---

##### `playerLatencies`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStopGameSessionPlacementGameSessionPlacement.property.playerLatencies"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftPlayerLatency`](#aws-cdk-sdk.gamelift.GameLiftPlayerLatency)[]

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStopGameSessionPlacementGameSessionPlacement.property.port"></a>

- *Type:* `number`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStopGameSessionPlacementGameSessionPlacement.property.startTime"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesStopGameSessionPlacementGameSessionPlacement.property.status"></a>

- *Type:* `string`

---


### GameLiftResponsesSuspendGameServerGroup <a name="aws-cdk-sdk.gamelift.GameLiftResponsesSuspendGameServerGroup"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesSuspendGameServerGroup.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesSuspendGameServerGroup(__scope: Construct, __resources: string[], __input: GameLiftSuspendGameServerGroupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesSuspendGameServerGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesSuspendGameServerGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesSuspendGameServerGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftSuspendGameServerGroupInput`](#aws-cdk-sdk.gamelift.GameLiftSuspendGameServerGroupInput)

---



#### Properties <a name="Properties"></a>

##### `gameServerGroup`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesSuspendGameServerGroup.property.gameServerGroup"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftResponsesSuspendGameServerGroupGameServerGroup`](#aws-cdk-sdk.gamelift.GameLiftResponsesSuspendGameServerGroupGameServerGroup)

---


### GameLiftResponsesSuspendGameServerGroupGameServerGroup <a name="aws-cdk-sdk.gamelift.GameLiftResponsesSuspendGameServerGroupGameServerGroup"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesSuspendGameServerGroupGameServerGroup.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesSuspendGameServerGroupGameServerGroup(__scope: Construct, __resources: string[], __input: GameLiftSuspendGameServerGroupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesSuspendGameServerGroupGameServerGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesSuspendGameServerGroupGameServerGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesSuspendGameServerGroupGameServerGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftSuspendGameServerGroupInput`](#aws-cdk-sdk.gamelift.GameLiftSuspendGameServerGroupInput)

---



#### Properties <a name="Properties"></a>

##### `autoScalingGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesSuspendGameServerGroupGameServerGroup.property.autoScalingGroupArn"></a>

- *Type:* `string`

---

##### `balancingStrategy`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesSuspendGameServerGroupGameServerGroup.property.balancingStrategy"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesSuspendGameServerGroupGameServerGroup.property.creationTime"></a>

- *Type:* `string`

---

##### `gameServerGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesSuspendGameServerGroupGameServerGroup.property.gameServerGroupArn"></a>

- *Type:* `string`

---

##### `gameServerGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesSuspendGameServerGroupGameServerGroup.property.gameServerGroupName"></a>

- *Type:* `string`

---

##### `gameServerProtectionPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesSuspendGameServerGroupGameServerGroup.property.gameServerProtectionPolicy"></a>

- *Type:* `string`

---

##### `instanceDefinitions`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesSuspendGameServerGroupGameServerGroup.property.instanceDefinitions"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftInstanceDefinition`](#aws-cdk-sdk.gamelift.GameLiftInstanceDefinition)[]

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesSuspendGameServerGroupGameServerGroup.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesSuspendGameServerGroupGameServerGroup.property.roleArn"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesSuspendGameServerGroupGameServerGroup.property.status"></a>

- *Type:* `string`

---

##### `statusReason`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesSuspendGameServerGroupGameServerGroup.property.statusReason"></a>

- *Type:* `string`

---

##### `suspendedActions`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesSuspendGameServerGroupGameServerGroup.property.suspendedActions"></a>

- *Type:* `string`[]

---


### GameLiftResponsesUpdateAlias <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateAlias"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateAlias.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesUpdateAlias(__scope: Construct, __resources: string[], __input: GameLiftUpdateAliasInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateAlias.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateAlias.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateAlias.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftUpdateAliasInput`](#aws-cdk-sdk.gamelift.GameLiftUpdateAliasInput)

---



#### Properties <a name="Properties"></a>

##### `alias`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateAlias.property.alias"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftResponsesUpdateAliasAlias`](#aws-cdk-sdk.gamelift.GameLiftResponsesUpdateAliasAlias)

---


### GameLiftResponsesUpdateAliasAlias <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateAliasAlias"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateAliasAlias.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesUpdateAliasAlias(__scope: Construct, __resources: string[], __input: GameLiftUpdateAliasInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateAliasAlias.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateAliasAlias.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateAliasAlias.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftUpdateAliasInput`](#aws-cdk-sdk.gamelift.GameLiftUpdateAliasInput)

---



#### Properties <a name="Properties"></a>

##### `aliasArn`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateAliasAlias.property.aliasArn"></a>

- *Type:* `string`

---

##### `aliasId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateAliasAlias.property.aliasId"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateAliasAlias.property.creationTime"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateAliasAlias.property.description"></a>

- *Type:* `string`

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateAliasAlias.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateAliasAlias.property.name"></a>

- *Type:* `string`

---

##### `routingStrategy`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateAliasAlias.property.routingStrategy"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftResponsesUpdateAliasAliasRoutingStrategy`](#aws-cdk-sdk.gamelift.GameLiftResponsesUpdateAliasAliasRoutingStrategy)

---


### GameLiftResponsesUpdateAliasAliasRoutingStrategy <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateAliasAliasRoutingStrategy"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateAliasAliasRoutingStrategy.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesUpdateAliasAliasRoutingStrategy(__scope: Construct, __resources: string[], __input: GameLiftUpdateAliasInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateAliasAliasRoutingStrategy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateAliasAliasRoutingStrategy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateAliasAliasRoutingStrategy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftUpdateAliasInput`](#aws-cdk-sdk.gamelift.GameLiftUpdateAliasInput)

---



#### Properties <a name="Properties"></a>

##### `fleetId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateAliasAliasRoutingStrategy.property.fleetId"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateAliasAliasRoutingStrategy.property.message"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateAliasAliasRoutingStrategy.property.type"></a>

- *Type:* `string`

---


### GameLiftResponsesUpdateBuild <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateBuild"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateBuild.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesUpdateBuild(__scope: Construct, __resources: string[], __input: GameLiftUpdateBuildInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateBuild.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateBuild.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateBuild.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftUpdateBuildInput`](#aws-cdk-sdk.gamelift.GameLiftUpdateBuildInput)

---



#### Properties <a name="Properties"></a>

##### `build2`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateBuild.property.build2"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftResponsesUpdateBuildBuild2`](#aws-cdk-sdk.gamelift.GameLiftResponsesUpdateBuildBuild2)

---


### GameLiftResponsesUpdateBuildBuild2 <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateBuildBuild2"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateBuildBuild2.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesUpdateBuildBuild2(__scope: Construct, __resources: string[], __input: GameLiftUpdateBuildInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateBuildBuild2.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateBuildBuild2.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateBuildBuild2.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftUpdateBuildInput`](#aws-cdk-sdk.gamelift.GameLiftUpdateBuildInput)

---



#### Properties <a name="Properties"></a>

##### `buildArn`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateBuildBuild2.property.buildArn"></a>

- *Type:* `string`

---

##### `buildId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateBuildBuild2.property.buildId"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateBuildBuild2.property.creationTime"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateBuildBuild2.property.name"></a>

- *Type:* `string`

---

##### `operatingSystem`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateBuildBuild2.property.operatingSystem"></a>

- *Type:* `string`

---

##### `sizeOnDisk`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateBuildBuild2.property.sizeOnDisk"></a>

- *Type:* `number`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateBuildBuild2.property.status"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateBuildBuild2.property.version"></a>

- *Type:* `string`

---


### GameLiftResponsesUpdateFleetAttributes <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateFleetAttributes"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateFleetAttributes.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesUpdateFleetAttributes(__scope: Construct, __resources: string[], __input: GameLiftUpdateFleetAttributesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateFleetAttributes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateFleetAttributes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateFleetAttributes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftUpdateFleetAttributesInput`](#aws-cdk-sdk.gamelift.GameLiftUpdateFleetAttributesInput)

---



#### Properties <a name="Properties"></a>

##### `fleetId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateFleetAttributes.property.fleetId"></a>

- *Type:* `string`

---


### GameLiftResponsesUpdateFleetCapacity <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateFleetCapacity"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateFleetCapacity.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesUpdateFleetCapacity(__scope: Construct, __resources: string[], __input: GameLiftUpdateFleetCapacityInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateFleetCapacity.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateFleetCapacity.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateFleetCapacity.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftUpdateFleetCapacityInput`](#aws-cdk-sdk.gamelift.GameLiftUpdateFleetCapacityInput)

---



#### Properties <a name="Properties"></a>

##### `fleetId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateFleetCapacity.property.fleetId"></a>

- *Type:* `string`

---


### GameLiftResponsesUpdateFleetPortSettings <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateFleetPortSettings"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateFleetPortSettings.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesUpdateFleetPortSettings(__scope: Construct, __resources: string[], __input: GameLiftUpdateFleetPortSettingsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateFleetPortSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateFleetPortSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateFleetPortSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftUpdateFleetPortSettingsInput`](#aws-cdk-sdk.gamelift.GameLiftUpdateFleetPortSettingsInput)

---



#### Properties <a name="Properties"></a>

##### `fleetId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateFleetPortSettings.property.fleetId"></a>

- *Type:* `string`

---


### GameLiftResponsesUpdateGameServer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameServer"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameServer.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesUpdateGameServer(__scope: Construct, __resources: string[], __input: GameLiftUpdateGameServerInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameServer.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameServer.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameServer.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftUpdateGameServerInput`](#aws-cdk-sdk.gamelift.GameLiftUpdateGameServerInput)

---



#### Properties <a name="Properties"></a>

##### `gameServer`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameServer.property.gameServer"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameServerGameServer`](#aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameServerGameServer)

---


### GameLiftResponsesUpdateGameServerGameServer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameServerGameServer"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameServerGameServer.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesUpdateGameServerGameServer(__scope: Construct, __resources: string[], __input: GameLiftUpdateGameServerInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameServerGameServer.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameServerGameServer.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameServerGameServer.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftUpdateGameServerInput`](#aws-cdk-sdk.gamelift.GameLiftUpdateGameServerInput)

---



#### Properties <a name="Properties"></a>

##### `claimStatus`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameServerGameServer.property.claimStatus"></a>

- *Type:* `string`

---

##### `connectionInfo`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameServerGameServer.property.connectionInfo"></a>

- *Type:* `string`

---

##### `gameServerData`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameServerGameServer.property.gameServerData"></a>

- *Type:* `string`

---

##### `gameServerGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameServerGameServer.property.gameServerGroupArn"></a>

- *Type:* `string`

---

##### `gameServerGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameServerGameServer.property.gameServerGroupName"></a>

- *Type:* `string`

---

##### `gameServerId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameServerGameServer.property.gameServerId"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameServerGameServer.property.instanceId"></a>

- *Type:* `string`

---

##### `lastClaimTime`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameServerGameServer.property.lastClaimTime"></a>

- *Type:* `string`

---

##### `lastHealthCheckTime`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameServerGameServer.property.lastHealthCheckTime"></a>

- *Type:* `string`

---

##### `registrationTime`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameServerGameServer.property.registrationTime"></a>

- *Type:* `string`

---

##### `utilizationStatus`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameServerGameServer.property.utilizationStatus"></a>

- *Type:* `string`

---


### GameLiftResponsesUpdateGameServerGroup <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameServerGroup"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameServerGroup.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesUpdateGameServerGroup(__scope: Construct, __resources: string[], __input: GameLiftUpdateGameServerGroupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameServerGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameServerGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameServerGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftUpdateGameServerGroupInput`](#aws-cdk-sdk.gamelift.GameLiftUpdateGameServerGroupInput)

---



#### Properties <a name="Properties"></a>

##### `gameServerGroup`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameServerGroup.property.gameServerGroup"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameServerGroupGameServerGroup`](#aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameServerGroupGameServerGroup)

---


### GameLiftResponsesUpdateGameServerGroupGameServerGroup <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameServerGroupGameServerGroup"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameServerGroupGameServerGroup.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesUpdateGameServerGroupGameServerGroup(__scope: Construct, __resources: string[], __input: GameLiftUpdateGameServerGroupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameServerGroupGameServerGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameServerGroupGameServerGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameServerGroupGameServerGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftUpdateGameServerGroupInput`](#aws-cdk-sdk.gamelift.GameLiftUpdateGameServerGroupInput)

---



#### Properties <a name="Properties"></a>

##### `autoScalingGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameServerGroupGameServerGroup.property.autoScalingGroupArn"></a>

- *Type:* `string`

---

##### `balancingStrategy`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameServerGroupGameServerGroup.property.balancingStrategy"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameServerGroupGameServerGroup.property.creationTime"></a>

- *Type:* `string`

---

##### `gameServerGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameServerGroupGameServerGroup.property.gameServerGroupArn"></a>

- *Type:* `string`

---

##### `gameServerGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameServerGroupGameServerGroup.property.gameServerGroupName"></a>

- *Type:* `string`

---

##### `gameServerProtectionPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameServerGroupGameServerGroup.property.gameServerProtectionPolicy"></a>

- *Type:* `string`

---

##### `instanceDefinitions`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameServerGroupGameServerGroup.property.instanceDefinitions"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftInstanceDefinition`](#aws-cdk-sdk.gamelift.GameLiftInstanceDefinition)[]

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameServerGroupGameServerGroup.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameServerGroupGameServerGroup.property.roleArn"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameServerGroupGameServerGroup.property.status"></a>

- *Type:* `string`

---

##### `statusReason`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameServerGroupGameServerGroup.property.statusReason"></a>

- *Type:* `string`

---

##### `suspendedActions`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameServerGroupGameServerGroup.property.suspendedActions"></a>

- *Type:* `string`[]

---


### GameLiftResponsesUpdateGameSession <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameSession"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameSession.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesUpdateGameSession(__scope: Construct, __resources: string[], __input: GameLiftUpdateGameSessionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameSession.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameSession.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameSession.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftUpdateGameSessionInput`](#aws-cdk-sdk.gamelift.GameLiftUpdateGameSessionInput)

---



#### Properties <a name="Properties"></a>

##### `gameSession`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameSession.property.gameSession"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameSessionGameSession`](#aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameSessionGameSession)

---


### GameLiftResponsesUpdateGameSessionGameSession <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameSessionGameSession"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameSessionGameSession.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesUpdateGameSessionGameSession(__scope: Construct, __resources: string[], __input: GameLiftUpdateGameSessionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameSessionGameSession.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameSessionGameSession.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameSessionGameSession.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftUpdateGameSessionInput`](#aws-cdk-sdk.gamelift.GameLiftUpdateGameSessionInput)

---



#### Properties <a name="Properties"></a>

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameSessionGameSession.property.creationTime"></a>

- *Type:* `string`

---

##### `creatorId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameSessionGameSession.property.creatorId"></a>

- *Type:* `string`

---

##### `currentPlayerSessionCount`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameSessionGameSession.property.currentPlayerSessionCount"></a>

- *Type:* `number`

---

##### `dnsName`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameSessionGameSession.property.dnsName"></a>

- *Type:* `string`

---

##### `fleetArn`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameSessionGameSession.property.fleetArn"></a>

- *Type:* `string`

---

##### `fleetId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameSessionGameSession.property.fleetId"></a>

- *Type:* `string`

---

##### `gameProperties`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameSessionGameSession.property.gameProperties"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftGameProperty`](#aws-cdk-sdk.gamelift.GameLiftGameProperty)[]

---

##### `gameSessionData`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameSessionGameSession.property.gameSessionData"></a>

- *Type:* `string`

---

##### `gameSessionId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameSessionGameSession.property.gameSessionId"></a>

- *Type:* `string`

---

##### `ipAddress`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameSessionGameSession.property.ipAddress"></a>

- *Type:* `string`

---

##### `matchmakerData`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameSessionGameSession.property.matchmakerData"></a>

- *Type:* `string`

---

##### `maximumPlayerSessionCount`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameSessionGameSession.property.maximumPlayerSessionCount"></a>

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameSessionGameSession.property.name"></a>

- *Type:* `string`

---

##### `playerSessionCreationPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameSessionGameSession.property.playerSessionCreationPolicy"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameSessionGameSession.property.port"></a>

- *Type:* `number`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameSessionGameSession.property.status"></a>

- *Type:* `string`

---

##### `statusReason`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameSessionGameSession.property.statusReason"></a>

- *Type:* `string`

---

##### `terminationTime`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameSessionGameSession.property.terminationTime"></a>

- *Type:* `string`

---


### GameLiftResponsesUpdateGameSessionQueue <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameSessionQueue"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameSessionQueue.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesUpdateGameSessionQueue(__scope: Construct, __resources: string[], __input: GameLiftUpdateGameSessionQueueInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameSessionQueue.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameSessionQueue.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameSessionQueue.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftUpdateGameSessionQueueInput`](#aws-cdk-sdk.gamelift.GameLiftUpdateGameSessionQueueInput)

---



#### Properties <a name="Properties"></a>

##### `gameSessionQueue`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameSessionQueue.property.gameSessionQueue"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameSessionQueueGameSessionQueue`](#aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameSessionQueueGameSessionQueue)

---


### GameLiftResponsesUpdateGameSessionQueueGameSessionQueue <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameSessionQueueGameSessionQueue"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameSessionQueueGameSessionQueue.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesUpdateGameSessionQueueGameSessionQueue(__scope: Construct, __resources: string[], __input: GameLiftUpdateGameSessionQueueInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameSessionQueueGameSessionQueue.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameSessionQueueGameSessionQueue.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameSessionQueueGameSessionQueue.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftUpdateGameSessionQueueInput`](#aws-cdk-sdk.gamelift.GameLiftUpdateGameSessionQueueInput)

---



#### Properties <a name="Properties"></a>

##### `destinations`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameSessionQueueGameSessionQueue.property.destinations"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftGameSessionQueueDestination`](#aws-cdk-sdk.gamelift.GameLiftGameSessionQueueDestination)[]

---

##### `gameSessionQueueArn`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameSessionQueueGameSessionQueue.property.gameSessionQueueArn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameSessionQueueGameSessionQueue.property.name"></a>

- *Type:* `string`

---

##### `playerLatencyPolicies`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameSessionQueueGameSessionQueue.property.playerLatencyPolicies"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftPlayerLatencyPolicy`](#aws-cdk-sdk.gamelift.GameLiftPlayerLatencyPolicy)[]

---

##### `timeoutInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateGameSessionQueueGameSessionQueue.property.timeoutInSeconds"></a>

- *Type:* `number`

---


### GameLiftResponsesUpdateMatchmakingConfiguration <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateMatchmakingConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateMatchmakingConfiguration.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesUpdateMatchmakingConfiguration(__scope: Construct, __resources: string[], __input: GameLiftUpdateMatchmakingConfigurationInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateMatchmakingConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateMatchmakingConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateMatchmakingConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftUpdateMatchmakingConfigurationInput`](#aws-cdk-sdk.gamelift.GameLiftUpdateMatchmakingConfigurationInput)

---



#### Properties <a name="Properties"></a>

##### `configuration`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateMatchmakingConfiguration.property.configuration"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftResponsesUpdateMatchmakingConfigurationConfiguration`](#aws-cdk-sdk.gamelift.GameLiftResponsesUpdateMatchmakingConfigurationConfiguration)

---


### GameLiftResponsesUpdateMatchmakingConfigurationConfiguration <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateMatchmakingConfigurationConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateMatchmakingConfigurationConfiguration.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesUpdateMatchmakingConfigurationConfiguration(__scope: Construct, __resources: string[], __input: GameLiftUpdateMatchmakingConfigurationInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateMatchmakingConfigurationConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateMatchmakingConfigurationConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateMatchmakingConfigurationConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftUpdateMatchmakingConfigurationInput`](#aws-cdk-sdk.gamelift.GameLiftUpdateMatchmakingConfigurationInput)

---



#### Properties <a name="Properties"></a>

##### `acceptanceRequired`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateMatchmakingConfigurationConfiguration.property.acceptanceRequired"></a>

- *Type:* `boolean`

---

##### `acceptanceTimeoutSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateMatchmakingConfigurationConfiguration.property.acceptanceTimeoutSeconds"></a>

- *Type:* `number`

---

##### `additionalPlayerCount`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateMatchmakingConfigurationConfiguration.property.additionalPlayerCount"></a>

- *Type:* `number`

---

##### `backfillMode`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateMatchmakingConfigurationConfiguration.property.backfillMode"></a>

- *Type:* `string`

---

##### `configurationArn`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateMatchmakingConfigurationConfiguration.property.configurationArn"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateMatchmakingConfigurationConfiguration.property.creationTime"></a>

- *Type:* `string`

---

##### `customEventData`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateMatchmakingConfigurationConfiguration.property.customEventData"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateMatchmakingConfigurationConfiguration.property.description"></a>

- *Type:* `string`

---

##### `flexMatchMode`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateMatchmakingConfigurationConfiguration.property.flexMatchMode"></a>

- *Type:* `string`

---

##### `gameProperties`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateMatchmakingConfigurationConfiguration.property.gameProperties"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftGameProperty`](#aws-cdk-sdk.gamelift.GameLiftGameProperty)[]

---

##### `gameSessionData`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateMatchmakingConfigurationConfiguration.property.gameSessionData"></a>

- *Type:* `string`

---

##### `gameSessionQueueArns`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateMatchmakingConfigurationConfiguration.property.gameSessionQueueArns"></a>

- *Type:* `string`[]

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateMatchmakingConfigurationConfiguration.property.name"></a>

- *Type:* `string`

---

##### `notificationTarget`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateMatchmakingConfigurationConfiguration.property.notificationTarget"></a>

- *Type:* `string`

---

##### `requestTimeoutSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateMatchmakingConfigurationConfiguration.property.requestTimeoutSeconds"></a>

- *Type:* `number`

---

##### `ruleSetArn`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateMatchmakingConfigurationConfiguration.property.ruleSetArn"></a>

- *Type:* `string`

---

##### `ruleSetName`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateMatchmakingConfigurationConfiguration.property.ruleSetName"></a>

- *Type:* `string`

---


### GameLiftResponsesUpdateRuntimeConfiguration <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateRuntimeConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateRuntimeConfiguration.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesUpdateRuntimeConfiguration(__scope: Construct, __resources: string[], __input: GameLiftUpdateRuntimeConfigurationInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateRuntimeConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateRuntimeConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateRuntimeConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftUpdateRuntimeConfigurationInput`](#aws-cdk-sdk.gamelift.GameLiftUpdateRuntimeConfigurationInput)

---



#### Properties <a name="Properties"></a>

##### `runtimeConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateRuntimeConfiguration.property.runtimeConfiguration"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftResponsesUpdateRuntimeConfigurationRuntimeConfiguration`](#aws-cdk-sdk.gamelift.GameLiftResponsesUpdateRuntimeConfigurationRuntimeConfiguration)

---


### GameLiftResponsesUpdateRuntimeConfigurationRuntimeConfiguration <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateRuntimeConfigurationRuntimeConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateRuntimeConfigurationRuntimeConfiguration.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesUpdateRuntimeConfigurationRuntimeConfiguration(__scope: Construct, __resources: string[], __input: GameLiftUpdateRuntimeConfigurationInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateRuntimeConfigurationRuntimeConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateRuntimeConfigurationRuntimeConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateRuntimeConfigurationRuntimeConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftUpdateRuntimeConfigurationInput`](#aws-cdk-sdk.gamelift.GameLiftUpdateRuntimeConfigurationInput)

---



#### Properties <a name="Properties"></a>

##### `gameSessionActivationTimeoutSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateRuntimeConfigurationRuntimeConfiguration.property.gameSessionActivationTimeoutSeconds"></a>

- *Type:* `number`

---

##### `maxConcurrentGameSessionActivations`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateRuntimeConfigurationRuntimeConfiguration.property.maxConcurrentGameSessionActivations"></a>

- *Type:* `number`

---

##### `serverProcesses`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateRuntimeConfigurationRuntimeConfiguration.property.serverProcesses"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftServerProcess`](#aws-cdk-sdk.gamelift.GameLiftServerProcess)[]

---


### GameLiftResponsesUpdateScript <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateScript"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateScript.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesUpdateScript(__scope: Construct, __resources: string[], __input: GameLiftUpdateScriptInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateScript.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateScript.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateScript.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftUpdateScriptInput`](#aws-cdk-sdk.gamelift.GameLiftUpdateScriptInput)

---



#### Properties <a name="Properties"></a>

##### `script`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateScript.property.script"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftResponsesUpdateScriptScript`](#aws-cdk-sdk.gamelift.GameLiftResponsesUpdateScriptScript)

---


### GameLiftResponsesUpdateScriptScript <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateScriptScript"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateScriptScript.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesUpdateScriptScript(__scope: Construct, __resources: string[], __input: GameLiftUpdateScriptInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateScriptScript.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateScriptScript.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateScriptScript.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftUpdateScriptInput`](#aws-cdk-sdk.gamelift.GameLiftUpdateScriptInput)

---



#### Properties <a name="Properties"></a>

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateScriptScript.property.creationTime"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateScriptScript.property.name"></a>

- *Type:* `string`

---

##### `scriptArn`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateScriptScript.property.scriptArn"></a>

- *Type:* `string`

---

##### `scriptId`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateScriptScript.property.scriptId"></a>

- *Type:* `string`

---

##### `sizeOnDisk`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateScriptScript.property.sizeOnDisk"></a>

- *Type:* `number`

---

##### `storageLocation`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateScriptScript.property.storageLocation"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftResponsesUpdateScriptScriptStorageLocation`](#aws-cdk-sdk.gamelift.GameLiftResponsesUpdateScriptScriptStorageLocation)

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateScriptScript.property.version"></a>

- *Type:* `string`

---


### GameLiftResponsesUpdateScriptScriptStorageLocation <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateScriptScriptStorageLocation"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateScriptScriptStorageLocation.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesUpdateScriptScriptStorageLocation(__scope: Construct, __resources: string[], __input: GameLiftUpdateScriptInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateScriptScriptStorageLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateScriptScriptStorageLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateScriptScriptStorageLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftUpdateScriptInput`](#aws-cdk-sdk.gamelift.GameLiftUpdateScriptInput)

---



#### Properties <a name="Properties"></a>

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateScriptScriptStorageLocation.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateScriptScriptStorageLocation.property.key"></a>

- *Type:* `string`

---

##### `objectVersion`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateScriptScriptStorageLocation.property.objectVersion"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesUpdateScriptScriptStorageLocation.property.roleArn"></a>

- *Type:* `string`

---


### GameLiftResponsesValidateMatchmakingRuleSet <a name="aws-cdk-sdk.gamelift.GameLiftResponsesValidateMatchmakingRuleSet"></a>

#### Initializer <a name="aws-cdk-sdk.gamelift.GameLiftResponsesValidateMatchmakingRuleSet.Initializer"></a>

```typescript
import { gamelift } from 'aws-cdk-sdk'

new gamelift.GameLiftResponsesValidateMatchmakingRuleSet(__scope: Construct, __resources: string[], __input: GameLiftValidateMatchmakingRuleSetInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesValidateMatchmakingRuleSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesValidateMatchmakingRuleSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesValidateMatchmakingRuleSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.gamelift.GameLiftValidateMatchmakingRuleSetInput`](#aws-cdk-sdk.gamelift.GameLiftValidateMatchmakingRuleSetInput)

---



#### Properties <a name="Properties"></a>

##### `valid`<sup>Required</sup> <a name="aws-cdk-sdk.gamelift.GameLiftResponsesValidateMatchmakingRuleSet.property.valid"></a>

- *Type:* `boolean`

---



