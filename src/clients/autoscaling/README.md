# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### AutoScalingClient <a name="aws-cdk-sdk.autoscaling.AutoScalingClient"></a>

#### Initializer <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

new autoscaling.AutoScalingClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `attachInstances` <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.attachInstances"></a>

```typescript
public attachInstances(input: AutoScalingAttachInstancesQuery)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingAttachInstancesQuery`](#aws-cdk-sdk.autoscaling.AutoScalingAttachInstancesQuery)

---

##### `attachLoadBalancers` <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.attachLoadBalancers"></a>

```typescript
public attachLoadBalancers(input: AutoScalingAttachLoadBalancersType)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingAttachLoadBalancersType`](#aws-cdk-sdk.autoscaling.AutoScalingAttachLoadBalancersType)

---

##### `attachLoadBalancerTargetGroups` <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.attachLoadBalancerTargetGroups"></a>

```typescript
public attachLoadBalancerTargetGroups(input: AutoScalingAttachLoadBalancerTargetGroupsType)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingAttachLoadBalancerTargetGroupsType`](#aws-cdk-sdk.autoscaling.AutoScalingAttachLoadBalancerTargetGroupsType)

---

##### `batchDeleteScheduledAction` <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.batchDeleteScheduledAction"></a>

```typescript
public batchDeleteScheduledAction(input: AutoScalingBatchDeleteScheduledActionType)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingBatchDeleteScheduledActionType`](#aws-cdk-sdk.autoscaling.AutoScalingBatchDeleteScheduledActionType)

---

##### `batchPutScheduledUpdateGroupAction` <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.batchPutScheduledUpdateGroupAction"></a>

```typescript
public batchPutScheduledUpdateGroupAction(input: AutoScalingBatchPutScheduledUpdateGroupActionType)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingBatchPutScheduledUpdateGroupActionType`](#aws-cdk-sdk.autoscaling.AutoScalingBatchPutScheduledUpdateGroupActionType)

---

##### `cancelInstanceRefresh` <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.cancelInstanceRefresh"></a>

```typescript
public cancelInstanceRefresh(input: AutoScalingCancelInstanceRefreshType)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingCancelInstanceRefreshType`](#aws-cdk-sdk.autoscaling.AutoScalingCancelInstanceRefreshType)

---

##### `completeLifecycleAction` <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.completeLifecycleAction"></a>

```typescript
public completeLifecycleAction(input: AutoScalingCompleteLifecycleActionType)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingCompleteLifecycleActionType`](#aws-cdk-sdk.autoscaling.AutoScalingCompleteLifecycleActionType)

---

##### `createAutoScalingGroup` <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.createAutoScalingGroup"></a>

```typescript
public createAutoScalingGroup(input: AutoScalingCreateAutoScalingGroupType)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingCreateAutoScalingGroupType`](#aws-cdk-sdk.autoscaling.AutoScalingCreateAutoScalingGroupType)

---

##### `createLaunchConfiguration` <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.createLaunchConfiguration"></a>

```typescript
public createLaunchConfiguration(input: AutoScalingCreateLaunchConfigurationType)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingCreateLaunchConfigurationType`](#aws-cdk-sdk.autoscaling.AutoScalingCreateLaunchConfigurationType)

---

##### `createOrUpdateTags` <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.createOrUpdateTags"></a>

```typescript
public createOrUpdateTags(input: AutoScalingCreateOrUpdateTagsType)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingCreateOrUpdateTagsType`](#aws-cdk-sdk.autoscaling.AutoScalingCreateOrUpdateTagsType)

---

##### `deleteAutoScalingGroup` <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.deleteAutoScalingGroup"></a>

```typescript
public deleteAutoScalingGroup(input: AutoScalingDeleteAutoScalingGroupType)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingDeleteAutoScalingGroupType`](#aws-cdk-sdk.autoscaling.AutoScalingDeleteAutoScalingGroupType)

---

##### `deleteLaunchConfiguration` <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.deleteLaunchConfiguration"></a>

```typescript
public deleteLaunchConfiguration(input: AutoScalingLaunchConfigurationNameType)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingLaunchConfigurationNameType`](#aws-cdk-sdk.autoscaling.AutoScalingLaunchConfigurationNameType)

---

##### `deleteLifecycleHook` <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.deleteLifecycleHook"></a>

```typescript
public deleteLifecycleHook(input: AutoScalingDeleteLifecycleHookType)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingDeleteLifecycleHookType`](#aws-cdk-sdk.autoscaling.AutoScalingDeleteLifecycleHookType)

---

##### `deleteNotificationConfiguration` <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.deleteNotificationConfiguration"></a>

```typescript
public deleteNotificationConfiguration(input: AutoScalingDeleteNotificationConfigurationType)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingDeleteNotificationConfigurationType`](#aws-cdk-sdk.autoscaling.AutoScalingDeleteNotificationConfigurationType)

---

##### `deletePolicy` <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.deletePolicy"></a>

```typescript
public deletePolicy(input: AutoScalingDeletePolicyType)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingDeletePolicyType`](#aws-cdk-sdk.autoscaling.AutoScalingDeletePolicyType)

---

##### `deleteScheduledAction` <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.deleteScheduledAction"></a>

```typescript
public deleteScheduledAction(input: AutoScalingDeleteScheduledActionType)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingDeleteScheduledActionType`](#aws-cdk-sdk.autoscaling.AutoScalingDeleteScheduledActionType)

---

##### `deleteTags` <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.deleteTags"></a>

```typescript
public deleteTags(input: AutoScalingDeleteTagsType)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingDeleteTagsType`](#aws-cdk-sdk.autoscaling.AutoScalingDeleteTagsType)

---

##### `describeAccountLimits` <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.describeAccountLimits"></a>

```typescript
public describeAccountLimits()
```

##### `describeAdjustmentTypes` <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.describeAdjustmentTypes"></a>

```typescript
public describeAdjustmentTypes()
```

##### `describeAutoScalingGroups` <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.describeAutoScalingGroups"></a>

```typescript
public describeAutoScalingGroups(input: AutoScalingAutoScalingGroupNamesType)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingAutoScalingGroupNamesType`](#aws-cdk-sdk.autoscaling.AutoScalingAutoScalingGroupNamesType)

---

##### `describeAutoScalingInstances` <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.describeAutoScalingInstances"></a>

```typescript
public describeAutoScalingInstances(input: AutoScalingDescribeAutoScalingInstancesType)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingDescribeAutoScalingInstancesType`](#aws-cdk-sdk.autoscaling.AutoScalingDescribeAutoScalingInstancesType)

---

##### `describeAutoScalingNotificationTypes` <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.describeAutoScalingNotificationTypes"></a>

```typescript
public describeAutoScalingNotificationTypes()
```

##### `describeInstanceRefreshes` <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.describeInstanceRefreshes"></a>

```typescript
public describeInstanceRefreshes(input: AutoScalingDescribeInstanceRefreshesType)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingDescribeInstanceRefreshesType`](#aws-cdk-sdk.autoscaling.AutoScalingDescribeInstanceRefreshesType)

---

##### `describeLaunchConfigurations` <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.describeLaunchConfigurations"></a>

```typescript
public describeLaunchConfigurations(input: AutoScalingLaunchConfigurationNamesType)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingLaunchConfigurationNamesType`](#aws-cdk-sdk.autoscaling.AutoScalingLaunchConfigurationNamesType)

---

##### `describeLifecycleHooks` <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.describeLifecycleHooks"></a>

```typescript
public describeLifecycleHooks(input: AutoScalingDescribeLifecycleHooksType)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingDescribeLifecycleHooksType`](#aws-cdk-sdk.autoscaling.AutoScalingDescribeLifecycleHooksType)

---

##### `describeLifecycleHookTypes` <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.describeLifecycleHookTypes"></a>

```typescript
public describeLifecycleHookTypes()
```

##### `describeLoadBalancers` <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.describeLoadBalancers"></a>

```typescript
public describeLoadBalancers(input: AutoScalingDescribeLoadBalancersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingDescribeLoadBalancersRequest`](#aws-cdk-sdk.autoscaling.AutoScalingDescribeLoadBalancersRequest)

---

##### `describeLoadBalancerTargetGroups` <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.describeLoadBalancerTargetGroups"></a>

```typescript
public describeLoadBalancerTargetGroups(input: AutoScalingDescribeLoadBalancerTargetGroupsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingDescribeLoadBalancerTargetGroupsRequest`](#aws-cdk-sdk.autoscaling.AutoScalingDescribeLoadBalancerTargetGroupsRequest)

---

##### `describeMetricCollectionTypes` <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.describeMetricCollectionTypes"></a>

```typescript
public describeMetricCollectionTypes()
```

##### `describeNotificationConfigurations` <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.describeNotificationConfigurations"></a>

```typescript
public describeNotificationConfigurations(input: AutoScalingDescribeNotificationConfigurationsType)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingDescribeNotificationConfigurationsType`](#aws-cdk-sdk.autoscaling.AutoScalingDescribeNotificationConfigurationsType)

---

##### `describePolicies` <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.describePolicies"></a>

```typescript
public describePolicies(input: AutoScalingDescribePoliciesType)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingDescribePoliciesType`](#aws-cdk-sdk.autoscaling.AutoScalingDescribePoliciesType)

---

##### `describeScalingActivities` <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.describeScalingActivities"></a>

```typescript
public describeScalingActivities(input: AutoScalingDescribeScalingActivitiesType)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingDescribeScalingActivitiesType`](#aws-cdk-sdk.autoscaling.AutoScalingDescribeScalingActivitiesType)

---

##### `describeScalingProcessTypes` <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.describeScalingProcessTypes"></a>

```typescript
public describeScalingProcessTypes()
```

##### `describeScheduledActions` <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.describeScheduledActions"></a>

```typescript
public describeScheduledActions(input: AutoScalingDescribeScheduledActionsType)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingDescribeScheduledActionsType`](#aws-cdk-sdk.autoscaling.AutoScalingDescribeScheduledActionsType)

---

##### `describeTags` <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.describeTags"></a>

```typescript
public describeTags(input: AutoScalingDescribeTagsType)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingDescribeTagsType`](#aws-cdk-sdk.autoscaling.AutoScalingDescribeTagsType)

---

##### `describeTerminationPolicyTypes` <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.describeTerminationPolicyTypes"></a>

```typescript
public describeTerminationPolicyTypes()
```

##### `detachInstances` <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.detachInstances"></a>

```typescript
public detachInstances(input: AutoScalingDetachInstancesQuery)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingDetachInstancesQuery`](#aws-cdk-sdk.autoscaling.AutoScalingDetachInstancesQuery)

---

##### `detachLoadBalancers` <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.detachLoadBalancers"></a>

```typescript
public detachLoadBalancers(input: AutoScalingDetachLoadBalancersType)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingDetachLoadBalancersType`](#aws-cdk-sdk.autoscaling.AutoScalingDetachLoadBalancersType)

---

##### `detachLoadBalancerTargetGroups` <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.detachLoadBalancerTargetGroups"></a>

```typescript
public detachLoadBalancerTargetGroups(input: AutoScalingDetachLoadBalancerTargetGroupsType)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingDetachLoadBalancerTargetGroupsType`](#aws-cdk-sdk.autoscaling.AutoScalingDetachLoadBalancerTargetGroupsType)

---

##### `disableMetricsCollection` <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.disableMetricsCollection"></a>

```typescript
public disableMetricsCollection(input: AutoScalingDisableMetricsCollectionQuery)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingDisableMetricsCollectionQuery`](#aws-cdk-sdk.autoscaling.AutoScalingDisableMetricsCollectionQuery)

---

##### `enableMetricsCollection` <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.enableMetricsCollection"></a>

```typescript
public enableMetricsCollection(input: AutoScalingEnableMetricsCollectionQuery)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingEnableMetricsCollectionQuery`](#aws-cdk-sdk.autoscaling.AutoScalingEnableMetricsCollectionQuery)

---

##### `enterStandby` <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.enterStandby"></a>

```typescript
public enterStandby(input: AutoScalingEnterStandbyQuery)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingEnterStandbyQuery`](#aws-cdk-sdk.autoscaling.AutoScalingEnterStandbyQuery)

---

##### `executePolicy` <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.executePolicy"></a>

```typescript
public executePolicy(input: AutoScalingExecutePolicyType)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingExecutePolicyType`](#aws-cdk-sdk.autoscaling.AutoScalingExecutePolicyType)

---

##### `exitStandby` <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.exitStandby"></a>

```typescript
public exitStandby(input: AutoScalingExitStandbyQuery)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingExitStandbyQuery`](#aws-cdk-sdk.autoscaling.AutoScalingExitStandbyQuery)

---

##### `putDesiredCapacity` <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.putDesiredCapacity"></a>

```typescript
public putDesiredCapacity(input: AutoScalingSetDesiredCapacityType)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingSetDesiredCapacityType`](#aws-cdk-sdk.autoscaling.AutoScalingSetDesiredCapacityType)

---

##### `putInstanceHealth` <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.putInstanceHealth"></a>

```typescript
public putInstanceHealth(input: AutoScalingSetInstanceHealthQuery)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingSetInstanceHealthQuery`](#aws-cdk-sdk.autoscaling.AutoScalingSetInstanceHealthQuery)

---

##### `putInstanceProtection` <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.putInstanceProtection"></a>

```typescript
public putInstanceProtection(input: AutoScalingSetInstanceProtectionQuery)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingSetInstanceProtectionQuery`](#aws-cdk-sdk.autoscaling.AutoScalingSetInstanceProtectionQuery)

---

##### `putLifecycleHook` <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.putLifecycleHook"></a>

```typescript
public putLifecycleHook(input: AutoScalingPutLifecycleHookType)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingPutLifecycleHookType`](#aws-cdk-sdk.autoscaling.AutoScalingPutLifecycleHookType)

---

##### `putNotificationConfiguration` <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.putNotificationConfiguration"></a>

```typescript
public putNotificationConfiguration(input: AutoScalingPutNotificationConfigurationType)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingPutNotificationConfigurationType`](#aws-cdk-sdk.autoscaling.AutoScalingPutNotificationConfigurationType)

---

##### `putScalingPolicy` <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.putScalingPolicy"></a>

```typescript
public putScalingPolicy(input: AutoScalingPutScalingPolicyType)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingPutScalingPolicyType`](#aws-cdk-sdk.autoscaling.AutoScalingPutScalingPolicyType)

---

##### `putScheduledUpdateGroupAction` <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.putScheduledUpdateGroupAction"></a>

```typescript
public putScheduledUpdateGroupAction(input: AutoScalingPutScheduledUpdateGroupActionType)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingPutScheduledUpdateGroupActionType`](#aws-cdk-sdk.autoscaling.AutoScalingPutScheduledUpdateGroupActionType)

---

##### `recordLifecycleActionHeartbeat` <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.recordLifecycleActionHeartbeat"></a>

```typescript
public recordLifecycleActionHeartbeat(input: AutoScalingRecordLifecycleActionHeartbeatType)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingRecordLifecycleActionHeartbeatType`](#aws-cdk-sdk.autoscaling.AutoScalingRecordLifecycleActionHeartbeatType)

---

##### `resumeProcesses` <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.resumeProcesses"></a>

```typescript
public resumeProcesses(input: AutoScalingScalingProcessQuery)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingScalingProcessQuery`](#aws-cdk-sdk.autoscaling.AutoScalingScalingProcessQuery)

---

##### `startInstanceRefresh` <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.startInstanceRefresh"></a>

```typescript
public startInstanceRefresh(input: AutoScalingStartInstanceRefreshType)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingStartInstanceRefreshType`](#aws-cdk-sdk.autoscaling.AutoScalingStartInstanceRefreshType)

---

##### `suspendProcesses` <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.suspendProcesses"></a>

```typescript
public suspendProcesses(input: AutoScalingScalingProcessQuery)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingScalingProcessQuery`](#aws-cdk-sdk.autoscaling.AutoScalingScalingProcessQuery)

---

##### `terminateInstanceInAutoScalingGroup` <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.terminateInstanceInAutoScalingGroup"></a>

```typescript
public terminateInstanceInAutoScalingGroup(input: AutoScalingTerminateInstanceInAutoScalingGroupType)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingTerminateInstanceInAutoScalingGroupType`](#aws-cdk-sdk.autoscaling.AutoScalingTerminateInstanceInAutoScalingGroupType)

---

##### `updateAutoScalingGroup` <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.updateAutoScalingGroup"></a>

```typescript
public updateAutoScalingGroup(input: AutoScalingUpdateAutoScalingGroupType)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingUpdateAutoScalingGroupType`](#aws-cdk-sdk.autoscaling.AutoScalingUpdateAutoScalingGroupType)

---




## Structs <a name="Structs"></a>

### AutoScalingActivitiesType <a name="aws-cdk-sdk.autoscaling.AutoScalingActivitiesType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingActivitiesType: autoscaling.AutoScalingActivitiesType = { ... }
```

##### `activities`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingActivitiesType.property.activities"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingActivity`](#aws-cdk-sdk.autoscaling.AutoScalingActivity)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingActivitiesType.property.nextToken"></a>

- *Type:* `string`

---

### AutoScalingActivity <a name="aws-cdk-sdk.autoscaling.AutoScalingActivity"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingActivity: autoscaling.AutoScalingActivity = { ... }
```

##### `activityId`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingActivity.property.activityId"></a>

- *Type:* `string`

---

##### `autoScalingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingActivity.property.autoScalingGroupName"></a>

- *Type:* `string`

---

##### `cause`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingActivity.property.cause"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingActivity.property.startTime"></a>

- *Type:* `string`

---

##### `statusCode`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingActivity.property.statusCode"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingActivity.property.description"></a>

- *Type:* `string`

---

##### `details`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingActivity.property.details"></a>

- *Type:* `string`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingActivity.property.endTime"></a>

- *Type:* `string`

---

##### `progress`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingActivity.property.progress"></a>

- *Type:* `number`

---

##### `statusMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingActivity.property.statusMessage"></a>

- *Type:* `string`

---

### AutoScalingActivityType <a name="aws-cdk-sdk.autoscaling.AutoScalingActivityType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingActivityType: autoscaling.AutoScalingActivityType = { ... }
```

##### `activity`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingActivityType.property.activity"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingActivity`](#aws-cdk-sdk.autoscaling.AutoScalingActivity)

---

### AutoScalingAdjustmentType <a name="aws-cdk-sdk.autoscaling.AutoScalingAdjustmentType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingAdjustmentType: autoscaling.AutoScalingAdjustmentType = { ... }
```

##### `adjustmentType`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingAdjustmentType.property.adjustmentType"></a>

- *Type:* `string`

---

### AutoScalingAlarm <a name="aws-cdk-sdk.autoscaling.AutoScalingAlarm"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingAlarm: autoscaling.AutoScalingAlarm = { ... }
```

##### `alarmArn`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingAlarm.property.alarmArn"></a>

- *Type:* `string`

---

##### `alarmName`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingAlarm.property.alarmName"></a>

- *Type:* `string`

---

### AutoScalingAttachInstancesQuery <a name="aws-cdk-sdk.autoscaling.AutoScalingAttachInstancesQuery"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingAttachInstancesQuery: autoscaling.AutoScalingAttachInstancesQuery = { ... }
```

##### `autoScalingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingAttachInstancesQuery.property.autoScalingGroupName"></a>

- *Type:* `string`

---

##### `instanceIds`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingAttachInstancesQuery.property.instanceIds"></a>

- *Type:* `string`[]

---

### AutoScalingAttachLoadBalancersResultType <a name="aws-cdk-sdk.autoscaling.AutoScalingAttachLoadBalancersResultType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingAttachLoadBalancersResultType: autoscaling.AutoScalingAttachLoadBalancersResultType = { ... }
```

### AutoScalingAttachLoadBalancersType <a name="aws-cdk-sdk.autoscaling.AutoScalingAttachLoadBalancersType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingAttachLoadBalancersType: autoscaling.AutoScalingAttachLoadBalancersType = { ... }
```

##### `autoScalingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingAttachLoadBalancersType.property.autoScalingGroupName"></a>

- *Type:* `string`

---

##### `loadBalancerNames`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingAttachLoadBalancersType.property.loadBalancerNames"></a>

- *Type:* `string`[]

---

### AutoScalingAttachLoadBalancerTargetGroupsResultType <a name="aws-cdk-sdk.autoscaling.AutoScalingAttachLoadBalancerTargetGroupsResultType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingAttachLoadBalancerTargetGroupsResultType: autoscaling.AutoScalingAttachLoadBalancerTargetGroupsResultType = { ... }
```

### AutoScalingAttachLoadBalancerTargetGroupsType <a name="aws-cdk-sdk.autoscaling.AutoScalingAttachLoadBalancerTargetGroupsType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingAttachLoadBalancerTargetGroupsType: autoscaling.AutoScalingAttachLoadBalancerTargetGroupsType = { ... }
```

##### `autoScalingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingAttachLoadBalancerTargetGroupsType.property.autoScalingGroupName"></a>

- *Type:* `string`

---

##### `targetGroupArNs`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingAttachLoadBalancerTargetGroupsType.property.targetGroupArNs"></a>

- *Type:* `string`[]

---

### AutoScalingAutoScalingGroup <a name="aws-cdk-sdk.autoscaling.AutoScalingAutoScalingGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingAutoScalingGroup: autoscaling.AutoScalingAutoScalingGroup = { ... }
```

##### `autoScalingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingAutoScalingGroup.property.autoScalingGroupName"></a>

- *Type:* `string`

---

##### `availabilityZones`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingAutoScalingGroup.property.availabilityZones"></a>

- *Type:* `string`[]

---

##### `createdTime`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingAutoScalingGroup.property.createdTime"></a>

- *Type:* `string`

---

##### `defaultCooldown`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingAutoScalingGroup.property.defaultCooldown"></a>

- *Type:* `number`

---

##### `desiredCapacity`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingAutoScalingGroup.property.desiredCapacity"></a>

- *Type:* `number`

---

##### `healthCheckType`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingAutoScalingGroup.property.healthCheckType"></a>

- *Type:* `string`

---

##### `maxSize`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingAutoScalingGroup.property.maxSize"></a>

- *Type:* `number`

---

##### `minSize`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingAutoScalingGroup.property.minSize"></a>

- *Type:* `number`

---

##### `autoScalingGroupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingAutoScalingGroup.property.autoScalingGroupArn"></a>

- *Type:* `string`

---

##### `capacityRebalance`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingAutoScalingGroup.property.capacityRebalance"></a>

- *Type:* `boolean`

---

##### `enabledMetrics`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingAutoScalingGroup.property.enabledMetrics"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingEnabledMetric`](#aws-cdk-sdk.autoscaling.AutoScalingEnabledMetric)[]

---

##### `healthCheckGracePeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingAutoScalingGroup.property.healthCheckGracePeriod"></a>

- *Type:* `number`

---

##### `instances`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingAutoScalingGroup.property.instances"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingInstance`](#aws-cdk-sdk.autoscaling.AutoScalingInstance)[]

---

##### `launchConfigurationName`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingAutoScalingGroup.property.launchConfigurationName"></a>

- *Type:* `string`

---

##### `launchTemplate`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingAutoScalingGroup.property.launchTemplate"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingLaunchTemplateSpecification`](#aws-cdk-sdk.autoscaling.AutoScalingLaunchTemplateSpecification)

---

##### `loadBalancerNames`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingAutoScalingGroup.property.loadBalancerNames"></a>

- *Type:* `string`[]

---

##### `maxInstanceLifetime`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingAutoScalingGroup.property.maxInstanceLifetime"></a>

- *Type:* `number`

---

##### `mixedInstancesPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingAutoScalingGroup.property.mixedInstancesPolicy"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingMixedInstancesPolicy`](#aws-cdk-sdk.autoscaling.AutoScalingMixedInstancesPolicy)

---

##### `newInstancesProtectedFromScaleIn`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingAutoScalingGroup.property.newInstancesProtectedFromScaleIn"></a>

- *Type:* `boolean`

---

##### `placementGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingAutoScalingGroup.property.placementGroup"></a>

- *Type:* `string`

---

##### `serviceLinkedRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingAutoScalingGroup.property.serviceLinkedRoleArn"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingAutoScalingGroup.property.status"></a>

- *Type:* `string`

---

##### `suspendedProcesses`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingAutoScalingGroup.property.suspendedProcesses"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingSuspendedProcess`](#aws-cdk-sdk.autoscaling.AutoScalingSuspendedProcess)[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingAutoScalingGroup.property.tags"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingTagDescription`](#aws-cdk-sdk.autoscaling.AutoScalingTagDescription)[]

---

##### `targetGroupArNs`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingAutoScalingGroup.property.targetGroupArNs"></a>

- *Type:* `string`[]

---

##### `terminationPolicies`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingAutoScalingGroup.property.terminationPolicies"></a>

- *Type:* `string`[]

---

##### `vpcZoneIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingAutoScalingGroup.property.vpcZoneIdentifier"></a>

- *Type:* `string`

---

### AutoScalingAutoScalingGroupNamesType <a name="aws-cdk-sdk.autoscaling.AutoScalingAutoScalingGroupNamesType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingAutoScalingGroupNamesType: autoscaling.AutoScalingAutoScalingGroupNamesType = { ... }
```

##### `autoScalingGroupNames`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingAutoScalingGroupNamesType.property.autoScalingGroupNames"></a>

- *Type:* `string`[]

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingAutoScalingGroupNamesType.property.maxRecords"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingAutoScalingGroupNamesType.property.nextToken"></a>

- *Type:* `string`

---

### AutoScalingAutoScalingGroupsType <a name="aws-cdk-sdk.autoscaling.AutoScalingAutoScalingGroupsType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingAutoScalingGroupsType: autoscaling.AutoScalingAutoScalingGroupsType = { ... }
```

##### `autoScalingGroups`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingAutoScalingGroupsType.property.autoScalingGroups"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingAutoScalingGroup`](#aws-cdk-sdk.autoscaling.AutoScalingAutoScalingGroup)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingAutoScalingGroupsType.property.nextToken"></a>

- *Type:* `string`

---

### AutoScalingAutoScalingInstanceDetails <a name="aws-cdk-sdk.autoscaling.AutoScalingAutoScalingInstanceDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingAutoScalingInstanceDetails: autoscaling.AutoScalingAutoScalingInstanceDetails = { ... }
```

##### `autoScalingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingAutoScalingInstanceDetails.property.autoScalingGroupName"></a>

- *Type:* `string`

---

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingAutoScalingInstanceDetails.property.availabilityZone"></a>

- *Type:* `string`

---

##### `healthStatus`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingAutoScalingInstanceDetails.property.healthStatus"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingAutoScalingInstanceDetails.property.instanceId"></a>

- *Type:* `string`

---

##### `lifecycleState`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingAutoScalingInstanceDetails.property.lifecycleState"></a>

- *Type:* `string`

---

##### `protectedFromScaleIn`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingAutoScalingInstanceDetails.property.protectedFromScaleIn"></a>

- *Type:* `boolean`

---

##### `instanceType`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingAutoScalingInstanceDetails.property.instanceType"></a>

- *Type:* `string`

---

##### `launchConfigurationName`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingAutoScalingInstanceDetails.property.launchConfigurationName"></a>

- *Type:* `string`

---

##### `launchTemplate`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingAutoScalingInstanceDetails.property.launchTemplate"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingLaunchTemplateSpecification`](#aws-cdk-sdk.autoscaling.AutoScalingLaunchTemplateSpecification)

---

##### `weightedCapacity`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingAutoScalingInstanceDetails.property.weightedCapacity"></a>

- *Type:* `string`

---

### AutoScalingAutoScalingInstancesType <a name="aws-cdk-sdk.autoscaling.AutoScalingAutoScalingInstancesType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingAutoScalingInstancesType: autoscaling.AutoScalingAutoScalingInstancesType = { ... }
```

##### `autoScalingInstances`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingAutoScalingInstancesType.property.autoScalingInstances"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingAutoScalingInstanceDetails`](#aws-cdk-sdk.autoscaling.AutoScalingAutoScalingInstanceDetails)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingAutoScalingInstancesType.property.nextToken"></a>

- *Type:* `string`

---

### AutoScalingBatchDeleteScheduledActionAnswer <a name="aws-cdk-sdk.autoscaling.AutoScalingBatchDeleteScheduledActionAnswer"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingBatchDeleteScheduledActionAnswer: autoscaling.AutoScalingBatchDeleteScheduledActionAnswer = { ... }
```

##### `failedScheduledActions`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingBatchDeleteScheduledActionAnswer.property.failedScheduledActions"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingFailedScheduledUpdateGroupActionRequest`](#aws-cdk-sdk.autoscaling.AutoScalingFailedScheduledUpdateGroupActionRequest)[]

---

### AutoScalingBatchDeleteScheduledActionType <a name="aws-cdk-sdk.autoscaling.AutoScalingBatchDeleteScheduledActionType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingBatchDeleteScheduledActionType: autoscaling.AutoScalingBatchDeleteScheduledActionType = { ... }
```

##### `autoScalingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingBatchDeleteScheduledActionType.property.autoScalingGroupName"></a>

- *Type:* `string`

---

##### `scheduledActionNames`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingBatchDeleteScheduledActionType.property.scheduledActionNames"></a>

- *Type:* `string`[]

---

### AutoScalingBatchPutScheduledUpdateGroupActionAnswer <a name="aws-cdk-sdk.autoscaling.AutoScalingBatchPutScheduledUpdateGroupActionAnswer"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingBatchPutScheduledUpdateGroupActionAnswer: autoscaling.AutoScalingBatchPutScheduledUpdateGroupActionAnswer = { ... }
```

##### `failedScheduledUpdateGroupActions`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingBatchPutScheduledUpdateGroupActionAnswer.property.failedScheduledUpdateGroupActions"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingFailedScheduledUpdateGroupActionRequest`](#aws-cdk-sdk.autoscaling.AutoScalingFailedScheduledUpdateGroupActionRequest)[]

---

### AutoScalingBatchPutScheduledUpdateGroupActionType <a name="aws-cdk-sdk.autoscaling.AutoScalingBatchPutScheduledUpdateGroupActionType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingBatchPutScheduledUpdateGroupActionType: autoscaling.AutoScalingBatchPutScheduledUpdateGroupActionType = { ... }
```

##### `autoScalingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingBatchPutScheduledUpdateGroupActionType.property.autoScalingGroupName"></a>

- *Type:* `string`

---

##### `scheduledUpdateGroupActions`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingBatchPutScheduledUpdateGroupActionType.property.scheduledUpdateGroupActions"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingScheduledUpdateGroupActionRequest`](#aws-cdk-sdk.autoscaling.AutoScalingScheduledUpdateGroupActionRequest)[]

---

### AutoScalingBlockDeviceMapping <a name="aws-cdk-sdk.autoscaling.AutoScalingBlockDeviceMapping"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingBlockDeviceMapping: autoscaling.AutoScalingBlockDeviceMapping = { ... }
```

##### `deviceName`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingBlockDeviceMapping.property.deviceName"></a>

- *Type:* `string`

---

##### `ebs`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingBlockDeviceMapping.property.ebs"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingEbs`](#aws-cdk-sdk.autoscaling.AutoScalingEbs)

---

##### `noDevice`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingBlockDeviceMapping.property.noDevice"></a>

- *Type:* `boolean`

---

##### `virtualName`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingBlockDeviceMapping.property.virtualName"></a>

- *Type:* `string`

---

### AutoScalingCancelInstanceRefreshAnswer <a name="aws-cdk-sdk.autoscaling.AutoScalingCancelInstanceRefreshAnswer"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingCancelInstanceRefreshAnswer: autoscaling.AutoScalingCancelInstanceRefreshAnswer = { ... }
```

##### `instanceRefreshId`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingCancelInstanceRefreshAnswer.property.instanceRefreshId"></a>

- *Type:* `string`

---

### AutoScalingCancelInstanceRefreshType <a name="aws-cdk-sdk.autoscaling.AutoScalingCancelInstanceRefreshType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingCancelInstanceRefreshType: autoscaling.AutoScalingCancelInstanceRefreshType = { ... }
```

##### `autoScalingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingCancelInstanceRefreshType.property.autoScalingGroupName"></a>

- *Type:* `string`

---

### AutoScalingCompleteLifecycleActionAnswer <a name="aws-cdk-sdk.autoscaling.AutoScalingCompleteLifecycleActionAnswer"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingCompleteLifecycleActionAnswer: autoscaling.AutoScalingCompleteLifecycleActionAnswer = { ... }
```

### AutoScalingCompleteLifecycleActionType <a name="aws-cdk-sdk.autoscaling.AutoScalingCompleteLifecycleActionType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingCompleteLifecycleActionType: autoscaling.AutoScalingCompleteLifecycleActionType = { ... }
```

##### `autoScalingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingCompleteLifecycleActionType.property.autoScalingGroupName"></a>

- *Type:* `string`

---

##### `lifecycleActionResult`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingCompleteLifecycleActionType.property.lifecycleActionResult"></a>

- *Type:* `string`

---

##### `lifecycleHookName`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingCompleteLifecycleActionType.property.lifecycleHookName"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingCompleteLifecycleActionType.property.instanceId"></a>

- *Type:* `string`

---

##### `lifecycleActionToken`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingCompleteLifecycleActionType.property.lifecycleActionToken"></a>

- *Type:* `string`

---

### AutoScalingCreateAutoScalingGroupType <a name="aws-cdk-sdk.autoscaling.AutoScalingCreateAutoScalingGroupType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingCreateAutoScalingGroupType: autoscaling.AutoScalingCreateAutoScalingGroupType = { ... }
```

##### `autoScalingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingCreateAutoScalingGroupType.property.autoScalingGroupName"></a>

- *Type:* `string`

---

##### `maxSize`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingCreateAutoScalingGroupType.property.maxSize"></a>

- *Type:* `number`

---

##### `minSize`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingCreateAutoScalingGroupType.property.minSize"></a>

- *Type:* `number`

---

##### `availabilityZones`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingCreateAutoScalingGroupType.property.availabilityZones"></a>

- *Type:* `string`[]

---

##### `capacityRebalance`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingCreateAutoScalingGroupType.property.capacityRebalance"></a>

- *Type:* `boolean`

---

##### `defaultCooldown`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingCreateAutoScalingGroupType.property.defaultCooldown"></a>

- *Type:* `number`

---

##### `desiredCapacity`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingCreateAutoScalingGroupType.property.desiredCapacity"></a>

- *Type:* `number`

---

##### `healthCheckGracePeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingCreateAutoScalingGroupType.property.healthCheckGracePeriod"></a>

- *Type:* `number`

---

##### `healthCheckType`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingCreateAutoScalingGroupType.property.healthCheckType"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingCreateAutoScalingGroupType.property.instanceId"></a>

- *Type:* `string`

---

##### `launchConfigurationName`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingCreateAutoScalingGroupType.property.launchConfigurationName"></a>

- *Type:* `string`

---

##### `launchTemplate`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingCreateAutoScalingGroupType.property.launchTemplate"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingLaunchTemplateSpecification`](#aws-cdk-sdk.autoscaling.AutoScalingLaunchTemplateSpecification)

---

##### `lifecycleHookSpecificationList`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingCreateAutoScalingGroupType.property.lifecycleHookSpecificationList"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingLifecycleHookSpecification`](#aws-cdk-sdk.autoscaling.AutoScalingLifecycleHookSpecification)[]

---

##### `loadBalancerNames`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingCreateAutoScalingGroupType.property.loadBalancerNames"></a>

- *Type:* `string`[]

---

##### `maxInstanceLifetime`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingCreateAutoScalingGroupType.property.maxInstanceLifetime"></a>

- *Type:* `number`

---

##### `mixedInstancesPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingCreateAutoScalingGroupType.property.mixedInstancesPolicy"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingMixedInstancesPolicy`](#aws-cdk-sdk.autoscaling.AutoScalingMixedInstancesPolicy)

---

##### `newInstancesProtectedFromScaleIn`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingCreateAutoScalingGroupType.property.newInstancesProtectedFromScaleIn"></a>

- *Type:* `boolean`

---

##### `placementGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingCreateAutoScalingGroupType.property.placementGroup"></a>

- *Type:* `string`

---

##### `serviceLinkedRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingCreateAutoScalingGroupType.property.serviceLinkedRoleArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingCreateAutoScalingGroupType.property.tags"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingTag`](#aws-cdk-sdk.autoscaling.AutoScalingTag)[]

---

##### `targetGroupArNs`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingCreateAutoScalingGroupType.property.targetGroupArNs"></a>

- *Type:* `string`[]

---

##### `terminationPolicies`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingCreateAutoScalingGroupType.property.terminationPolicies"></a>

- *Type:* `string`[]

---

##### `vpcZoneIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingCreateAutoScalingGroupType.property.vpcZoneIdentifier"></a>

- *Type:* `string`

---

### AutoScalingCreateLaunchConfigurationType <a name="aws-cdk-sdk.autoscaling.AutoScalingCreateLaunchConfigurationType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingCreateLaunchConfigurationType: autoscaling.AutoScalingCreateLaunchConfigurationType = { ... }
```

##### `launchConfigurationName`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingCreateLaunchConfigurationType.property.launchConfigurationName"></a>

- *Type:* `string`

---

##### `associatePublicIpAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingCreateLaunchConfigurationType.property.associatePublicIpAddress"></a>

- *Type:* `boolean`

---

##### `blockDeviceMappings`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingCreateLaunchConfigurationType.property.blockDeviceMappings"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingBlockDeviceMapping`](#aws-cdk-sdk.autoscaling.AutoScalingBlockDeviceMapping)[]

---

##### `classicLinkVpcId`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingCreateLaunchConfigurationType.property.classicLinkVpcId"></a>

- *Type:* `string`

---

##### `classicLinkVpcSecurityGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingCreateLaunchConfigurationType.property.classicLinkVpcSecurityGroups"></a>

- *Type:* `string`[]

---

##### `ebsOptimized`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingCreateLaunchConfigurationType.property.ebsOptimized"></a>

- *Type:* `boolean`

---

##### `iamInstanceProfile`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingCreateLaunchConfigurationType.property.iamInstanceProfile"></a>

- *Type:* `string`

---

##### `imageId`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingCreateLaunchConfigurationType.property.imageId"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingCreateLaunchConfigurationType.property.instanceId"></a>

- *Type:* `string`

---

##### `instanceMonitoring`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingCreateLaunchConfigurationType.property.instanceMonitoring"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingInstanceMonitoring`](#aws-cdk-sdk.autoscaling.AutoScalingInstanceMonitoring)

---

##### `instanceType`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingCreateLaunchConfigurationType.property.instanceType"></a>

- *Type:* `string`

---

##### `kernelId`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingCreateLaunchConfigurationType.property.kernelId"></a>

- *Type:* `string`

---

##### `keyName`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingCreateLaunchConfigurationType.property.keyName"></a>

- *Type:* `string`

---

##### `metadataOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingCreateLaunchConfigurationType.property.metadataOptions"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingInstanceMetadataOptions`](#aws-cdk-sdk.autoscaling.AutoScalingInstanceMetadataOptions)

---

##### `placementTenancy`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingCreateLaunchConfigurationType.property.placementTenancy"></a>

- *Type:* `string`

---

##### `ramdiskId`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingCreateLaunchConfigurationType.property.ramdiskId"></a>

- *Type:* `string`

---

##### `securityGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingCreateLaunchConfigurationType.property.securityGroups"></a>

- *Type:* `string`[]

---

##### `spotPrice`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingCreateLaunchConfigurationType.property.spotPrice"></a>

- *Type:* `string`

---

##### `userData`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingCreateLaunchConfigurationType.property.userData"></a>

- *Type:* `string`

---

### AutoScalingCreateOrUpdateTagsType <a name="aws-cdk-sdk.autoscaling.AutoScalingCreateOrUpdateTagsType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingCreateOrUpdateTagsType: autoscaling.AutoScalingCreateOrUpdateTagsType = { ... }
```

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingCreateOrUpdateTagsType.property.tags"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingTag`](#aws-cdk-sdk.autoscaling.AutoScalingTag)[]

---

### AutoScalingCustomizedMetricSpecification <a name="aws-cdk-sdk.autoscaling.AutoScalingCustomizedMetricSpecification"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingCustomizedMetricSpecification: autoscaling.AutoScalingCustomizedMetricSpecification = { ... }
```

##### `metricName`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingCustomizedMetricSpecification.property.metricName"></a>

- *Type:* `string`

---

##### `namespace`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingCustomizedMetricSpecification.property.namespace"></a>

- *Type:* `string`

---

##### `statistic`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingCustomizedMetricSpecification.property.statistic"></a>

- *Type:* `string`

---

##### `dimensions`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingCustomizedMetricSpecification.property.dimensions"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingMetricDimension`](#aws-cdk-sdk.autoscaling.AutoScalingMetricDimension)[]

---

##### `unit`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingCustomizedMetricSpecification.property.unit"></a>

- *Type:* `string`

---

### AutoScalingDeleteAutoScalingGroupType <a name="aws-cdk-sdk.autoscaling.AutoScalingDeleteAutoScalingGroupType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingDeleteAutoScalingGroupType: autoscaling.AutoScalingDeleteAutoScalingGroupType = { ... }
```

##### `autoScalingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDeleteAutoScalingGroupType.property.autoScalingGroupName"></a>

- *Type:* `string`

---

##### `forceDelete`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDeleteAutoScalingGroupType.property.forceDelete"></a>

- *Type:* `boolean`

---

### AutoScalingDeleteLifecycleHookAnswer <a name="aws-cdk-sdk.autoscaling.AutoScalingDeleteLifecycleHookAnswer"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingDeleteLifecycleHookAnswer: autoscaling.AutoScalingDeleteLifecycleHookAnswer = { ... }
```

### AutoScalingDeleteLifecycleHookType <a name="aws-cdk-sdk.autoscaling.AutoScalingDeleteLifecycleHookType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingDeleteLifecycleHookType: autoscaling.AutoScalingDeleteLifecycleHookType = { ... }
```

##### `autoScalingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDeleteLifecycleHookType.property.autoScalingGroupName"></a>

- *Type:* `string`

---

##### `lifecycleHookName`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDeleteLifecycleHookType.property.lifecycleHookName"></a>

- *Type:* `string`

---

### AutoScalingDeleteNotificationConfigurationType <a name="aws-cdk-sdk.autoscaling.AutoScalingDeleteNotificationConfigurationType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingDeleteNotificationConfigurationType: autoscaling.AutoScalingDeleteNotificationConfigurationType = { ... }
```

##### `autoScalingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDeleteNotificationConfigurationType.property.autoScalingGroupName"></a>

- *Type:* `string`

---

##### `topicArn`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDeleteNotificationConfigurationType.property.topicArn"></a>

- *Type:* `string`

---

### AutoScalingDeletePolicyType <a name="aws-cdk-sdk.autoscaling.AutoScalingDeletePolicyType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingDeletePolicyType: autoscaling.AutoScalingDeletePolicyType = { ... }
```

##### `policyName`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDeletePolicyType.property.policyName"></a>

- *Type:* `string`

---

##### `autoScalingGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDeletePolicyType.property.autoScalingGroupName"></a>

- *Type:* `string`

---

### AutoScalingDeleteScheduledActionType <a name="aws-cdk-sdk.autoscaling.AutoScalingDeleteScheduledActionType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingDeleteScheduledActionType: autoscaling.AutoScalingDeleteScheduledActionType = { ... }
```

##### `autoScalingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDeleteScheduledActionType.property.autoScalingGroupName"></a>

- *Type:* `string`

---

##### `scheduledActionName`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDeleteScheduledActionType.property.scheduledActionName"></a>

- *Type:* `string`

---

### AutoScalingDeleteTagsType <a name="aws-cdk-sdk.autoscaling.AutoScalingDeleteTagsType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingDeleteTagsType: autoscaling.AutoScalingDeleteTagsType = { ... }
```

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDeleteTagsType.property.tags"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingTag`](#aws-cdk-sdk.autoscaling.AutoScalingTag)[]

---

### AutoScalingDescribeAccountLimitsAnswer <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeAccountLimitsAnswer"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingDescribeAccountLimitsAnswer: autoscaling.AutoScalingDescribeAccountLimitsAnswer = { ... }
```

##### `maxNumberOfAutoScalingGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeAccountLimitsAnswer.property.maxNumberOfAutoScalingGroups"></a>

- *Type:* `number`

---

##### `maxNumberOfLaunchConfigurations`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeAccountLimitsAnswer.property.maxNumberOfLaunchConfigurations"></a>

- *Type:* `number`

---

##### `numberOfAutoScalingGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeAccountLimitsAnswer.property.numberOfAutoScalingGroups"></a>

- *Type:* `number`

---

##### `numberOfLaunchConfigurations`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeAccountLimitsAnswer.property.numberOfLaunchConfigurations"></a>

- *Type:* `number`

---

### AutoScalingDescribeAdjustmentTypesAnswer <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeAdjustmentTypesAnswer"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingDescribeAdjustmentTypesAnswer: autoscaling.AutoScalingDescribeAdjustmentTypesAnswer = { ... }
```

##### `adjustmentTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeAdjustmentTypesAnswer.property.adjustmentTypes"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingAdjustmentType`](#aws-cdk-sdk.autoscaling.AutoScalingAdjustmentType)[]

---

### AutoScalingDescribeAutoScalingInstancesType <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeAutoScalingInstancesType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingDescribeAutoScalingInstancesType: autoscaling.AutoScalingDescribeAutoScalingInstancesType = { ... }
```

##### `instanceIds`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeAutoScalingInstancesType.property.instanceIds"></a>

- *Type:* `string`[]

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeAutoScalingInstancesType.property.maxRecords"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeAutoScalingInstancesType.property.nextToken"></a>

- *Type:* `string`

---

### AutoScalingDescribeAutoScalingNotificationTypesAnswer <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeAutoScalingNotificationTypesAnswer"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingDescribeAutoScalingNotificationTypesAnswer: autoscaling.AutoScalingDescribeAutoScalingNotificationTypesAnswer = { ... }
```

##### `autoScalingNotificationTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeAutoScalingNotificationTypesAnswer.property.autoScalingNotificationTypes"></a>

- *Type:* `string`[]

---

### AutoScalingDescribeInstanceRefreshesAnswer <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeInstanceRefreshesAnswer"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingDescribeInstanceRefreshesAnswer: autoscaling.AutoScalingDescribeInstanceRefreshesAnswer = { ... }
```

##### `instanceRefreshes`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeInstanceRefreshesAnswer.property.instanceRefreshes"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingInstanceRefresh`](#aws-cdk-sdk.autoscaling.AutoScalingInstanceRefresh)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeInstanceRefreshesAnswer.property.nextToken"></a>

- *Type:* `string`

---

### AutoScalingDescribeInstanceRefreshesType <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeInstanceRefreshesType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingDescribeInstanceRefreshesType: autoscaling.AutoScalingDescribeInstanceRefreshesType = { ... }
```

##### `autoScalingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeInstanceRefreshesType.property.autoScalingGroupName"></a>

- *Type:* `string`

---

##### `instanceRefreshIds`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeInstanceRefreshesType.property.instanceRefreshIds"></a>

- *Type:* `string`[]

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeInstanceRefreshesType.property.maxRecords"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeInstanceRefreshesType.property.nextToken"></a>

- *Type:* `string`

---

### AutoScalingDescribeLifecycleHooksAnswer <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeLifecycleHooksAnswer"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingDescribeLifecycleHooksAnswer: autoscaling.AutoScalingDescribeLifecycleHooksAnswer = { ... }
```

##### `lifecycleHooks`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeLifecycleHooksAnswer.property.lifecycleHooks"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingLifecycleHook`](#aws-cdk-sdk.autoscaling.AutoScalingLifecycleHook)[]

---

### AutoScalingDescribeLifecycleHooksType <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeLifecycleHooksType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingDescribeLifecycleHooksType: autoscaling.AutoScalingDescribeLifecycleHooksType = { ... }
```

##### `autoScalingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeLifecycleHooksType.property.autoScalingGroupName"></a>

- *Type:* `string`

---

##### `lifecycleHookNames`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeLifecycleHooksType.property.lifecycleHookNames"></a>

- *Type:* `string`[]

---

### AutoScalingDescribeLifecycleHookTypesAnswer <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeLifecycleHookTypesAnswer"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingDescribeLifecycleHookTypesAnswer: autoscaling.AutoScalingDescribeLifecycleHookTypesAnswer = { ... }
```

##### `lifecycleHookTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeLifecycleHookTypesAnswer.property.lifecycleHookTypes"></a>

- *Type:* `string`[]

---

### AutoScalingDescribeLoadBalancersRequest <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeLoadBalancersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingDescribeLoadBalancersRequest: autoscaling.AutoScalingDescribeLoadBalancersRequest = { ... }
```

##### `autoScalingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeLoadBalancersRequest.property.autoScalingGroupName"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeLoadBalancersRequest.property.maxRecords"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeLoadBalancersRequest.property.nextToken"></a>

- *Type:* `string`

---

### AutoScalingDescribeLoadBalancersResponse <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeLoadBalancersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingDescribeLoadBalancersResponse: autoscaling.AutoScalingDescribeLoadBalancersResponse = { ... }
```

##### `loadBalancers`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeLoadBalancersResponse.property.loadBalancers"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingLoadBalancerState`](#aws-cdk-sdk.autoscaling.AutoScalingLoadBalancerState)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeLoadBalancersResponse.property.nextToken"></a>

- *Type:* `string`

---

### AutoScalingDescribeLoadBalancerTargetGroupsRequest <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeLoadBalancerTargetGroupsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingDescribeLoadBalancerTargetGroupsRequest: autoscaling.AutoScalingDescribeLoadBalancerTargetGroupsRequest = { ... }
```

##### `autoScalingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeLoadBalancerTargetGroupsRequest.property.autoScalingGroupName"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeLoadBalancerTargetGroupsRequest.property.maxRecords"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeLoadBalancerTargetGroupsRequest.property.nextToken"></a>

- *Type:* `string`

---

### AutoScalingDescribeLoadBalancerTargetGroupsResponse <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeLoadBalancerTargetGroupsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingDescribeLoadBalancerTargetGroupsResponse: autoscaling.AutoScalingDescribeLoadBalancerTargetGroupsResponse = { ... }
```

##### `loadBalancerTargetGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeLoadBalancerTargetGroupsResponse.property.loadBalancerTargetGroups"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingLoadBalancerTargetGroupState`](#aws-cdk-sdk.autoscaling.AutoScalingLoadBalancerTargetGroupState)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeLoadBalancerTargetGroupsResponse.property.nextToken"></a>

- *Type:* `string`

---

### AutoScalingDescribeMetricCollectionTypesAnswer <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeMetricCollectionTypesAnswer"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingDescribeMetricCollectionTypesAnswer: autoscaling.AutoScalingDescribeMetricCollectionTypesAnswer = { ... }
```

##### `granularities`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeMetricCollectionTypesAnswer.property.granularities"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingMetricGranularityType`](#aws-cdk-sdk.autoscaling.AutoScalingMetricGranularityType)[]

---

##### `metrics`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeMetricCollectionTypesAnswer.property.metrics"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingMetricCollectionType`](#aws-cdk-sdk.autoscaling.AutoScalingMetricCollectionType)[]

---

### AutoScalingDescribeNotificationConfigurationsAnswer <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeNotificationConfigurationsAnswer"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingDescribeNotificationConfigurationsAnswer: autoscaling.AutoScalingDescribeNotificationConfigurationsAnswer = { ... }
```

##### `notificationConfigurations`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeNotificationConfigurationsAnswer.property.notificationConfigurations"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingNotificationConfiguration`](#aws-cdk-sdk.autoscaling.AutoScalingNotificationConfiguration)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeNotificationConfigurationsAnswer.property.nextToken"></a>

- *Type:* `string`

---

### AutoScalingDescribeNotificationConfigurationsType <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeNotificationConfigurationsType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingDescribeNotificationConfigurationsType: autoscaling.AutoScalingDescribeNotificationConfigurationsType = { ... }
```

##### `autoScalingGroupNames`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeNotificationConfigurationsType.property.autoScalingGroupNames"></a>

- *Type:* `string`[]

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeNotificationConfigurationsType.property.maxRecords"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeNotificationConfigurationsType.property.nextToken"></a>

- *Type:* `string`

---

### AutoScalingDescribePoliciesType <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribePoliciesType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingDescribePoliciesType: autoscaling.AutoScalingDescribePoliciesType = { ... }
```

##### `autoScalingGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribePoliciesType.property.autoScalingGroupName"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribePoliciesType.property.maxRecords"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribePoliciesType.property.nextToken"></a>

- *Type:* `string`

---

##### `policyNames`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribePoliciesType.property.policyNames"></a>

- *Type:* `string`[]

---

##### `policyTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribePoliciesType.property.policyTypes"></a>

- *Type:* `string`[]

---

### AutoScalingDescribeScalingActivitiesType <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeScalingActivitiesType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingDescribeScalingActivitiesType: autoscaling.AutoScalingDescribeScalingActivitiesType = { ... }
```

##### `activityIds`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeScalingActivitiesType.property.activityIds"></a>

- *Type:* `string`[]

---

##### `autoScalingGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeScalingActivitiesType.property.autoScalingGroupName"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeScalingActivitiesType.property.maxRecords"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeScalingActivitiesType.property.nextToken"></a>

- *Type:* `string`

---

### AutoScalingDescribeScheduledActionsType <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeScheduledActionsType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingDescribeScheduledActionsType: autoscaling.AutoScalingDescribeScheduledActionsType = { ... }
```

##### `autoScalingGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeScheduledActionsType.property.autoScalingGroupName"></a>

- *Type:* `string`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeScheduledActionsType.property.endTime"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeScheduledActionsType.property.maxRecords"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeScheduledActionsType.property.nextToken"></a>

- *Type:* `string`

---

##### `scheduledActionNames`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeScheduledActionsType.property.scheduledActionNames"></a>

- *Type:* `string`[]

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeScheduledActionsType.property.startTime"></a>

- *Type:* `string`

---

### AutoScalingDescribeTagsType <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeTagsType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingDescribeTagsType: autoscaling.AutoScalingDescribeTagsType = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeTagsType.property.filters"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingFilter`](#aws-cdk-sdk.autoscaling.AutoScalingFilter)[]

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeTagsType.property.maxRecords"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeTagsType.property.nextToken"></a>

- *Type:* `string`

---

### AutoScalingDescribeTerminationPolicyTypesAnswer <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeTerminationPolicyTypesAnswer"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingDescribeTerminationPolicyTypesAnswer: autoscaling.AutoScalingDescribeTerminationPolicyTypesAnswer = { ... }
```

##### `terminationPolicyTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDescribeTerminationPolicyTypesAnswer.property.terminationPolicyTypes"></a>

- *Type:* `string`[]

---

### AutoScalingDetachInstancesAnswer <a name="aws-cdk-sdk.autoscaling.AutoScalingDetachInstancesAnswer"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingDetachInstancesAnswer: autoscaling.AutoScalingDetachInstancesAnswer = { ... }
```

##### `activities`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDetachInstancesAnswer.property.activities"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingActivity`](#aws-cdk-sdk.autoscaling.AutoScalingActivity)[]

---

### AutoScalingDetachInstancesQuery <a name="aws-cdk-sdk.autoscaling.AutoScalingDetachInstancesQuery"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingDetachInstancesQuery: autoscaling.AutoScalingDetachInstancesQuery = { ... }
```

##### `autoScalingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDetachInstancesQuery.property.autoScalingGroupName"></a>

- *Type:* `string`

---

##### `shouldDecrementDesiredCapacity`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDetachInstancesQuery.property.shouldDecrementDesiredCapacity"></a>

- *Type:* `boolean`

---

##### `instanceIds`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDetachInstancesQuery.property.instanceIds"></a>

- *Type:* `string`[]

---

### AutoScalingDetachLoadBalancersResultType <a name="aws-cdk-sdk.autoscaling.AutoScalingDetachLoadBalancersResultType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingDetachLoadBalancersResultType: autoscaling.AutoScalingDetachLoadBalancersResultType = { ... }
```

### AutoScalingDetachLoadBalancersType <a name="aws-cdk-sdk.autoscaling.AutoScalingDetachLoadBalancersType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingDetachLoadBalancersType: autoscaling.AutoScalingDetachLoadBalancersType = { ... }
```

##### `autoScalingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDetachLoadBalancersType.property.autoScalingGroupName"></a>

- *Type:* `string`

---

##### `loadBalancerNames`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDetachLoadBalancersType.property.loadBalancerNames"></a>

- *Type:* `string`[]

---

### AutoScalingDetachLoadBalancerTargetGroupsResultType <a name="aws-cdk-sdk.autoscaling.AutoScalingDetachLoadBalancerTargetGroupsResultType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingDetachLoadBalancerTargetGroupsResultType: autoscaling.AutoScalingDetachLoadBalancerTargetGroupsResultType = { ... }
```

### AutoScalingDetachLoadBalancerTargetGroupsType <a name="aws-cdk-sdk.autoscaling.AutoScalingDetachLoadBalancerTargetGroupsType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingDetachLoadBalancerTargetGroupsType: autoscaling.AutoScalingDetachLoadBalancerTargetGroupsType = { ... }
```

##### `autoScalingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDetachLoadBalancerTargetGroupsType.property.autoScalingGroupName"></a>

- *Type:* `string`

---

##### `targetGroupArNs`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDetachLoadBalancerTargetGroupsType.property.targetGroupArNs"></a>

- *Type:* `string`[]

---

### AutoScalingDisableMetricsCollectionQuery <a name="aws-cdk-sdk.autoscaling.AutoScalingDisableMetricsCollectionQuery"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingDisableMetricsCollectionQuery: autoscaling.AutoScalingDisableMetricsCollectionQuery = { ... }
```

##### `autoScalingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDisableMetricsCollectionQuery.property.autoScalingGroupName"></a>

- *Type:* `string`

---

##### `metrics`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingDisableMetricsCollectionQuery.property.metrics"></a>

- *Type:* `string`[]

---

### AutoScalingEbs <a name="aws-cdk-sdk.autoscaling.AutoScalingEbs"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingEbs: autoscaling.AutoScalingEbs = { ... }
```

##### `deleteOnTermination`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingEbs.property.deleteOnTermination"></a>

- *Type:* `boolean`

---

##### `encrypted`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingEbs.property.encrypted"></a>

- *Type:* `boolean`

---

##### `iops`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingEbs.property.iops"></a>

- *Type:* `number`

---

##### `snapshotId`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingEbs.property.snapshotId"></a>

- *Type:* `string`

---

##### `volumeSize`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingEbs.property.volumeSize"></a>

- *Type:* `number`

---

##### `volumeType`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingEbs.property.volumeType"></a>

- *Type:* `string`

---

### AutoScalingEnabledMetric <a name="aws-cdk-sdk.autoscaling.AutoScalingEnabledMetric"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingEnabledMetric: autoscaling.AutoScalingEnabledMetric = { ... }
```

##### `granularity`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingEnabledMetric.property.granularity"></a>

- *Type:* `string`

---

##### `metric`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingEnabledMetric.property.metric"></a>

- *Type:* `string`

---

### AutoScalingEnableMetricsCollectionQuery <a name="aws-cdk-sdk.autoscaling.AutoScalingEnableMetricsCollectionQuery"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingEnableMetricsCollectionQuery: autoscaling.AutoScalingEnableMetricsCollectionQuery = { ... }
```

##### `autoScalingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingEnableMetricsCollectionQuery.property.autoScalingGroupName"></a>

- *Type:* `string`

---

##### `granularity`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingEnableMetricsCollectionQuery.property.granularity"></a>

- *Type:* `string`

---

##### `metrics`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingEnableMetricsCollectionQuery.property.metrics"></a>

- *Type:* `string`[]

---

### AutoScalingEnterStandbyAnswer <a name="aws-cdk-sdk.autoscaling.AutoScalingEnterStandbyAnswer"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingEnterStandbyAnswer: autoscaling.AutoScalingEnterStandbyAnswer = { ... }
```

##### `activities`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingEnterStandbyAnswer.property.activities"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingActivity`](#aws-cdk-sdk.autoscaling.AutoScalingActivity)[]

---

### AutoScalingEnterStandbyQuery <a name="aws-cdk-sdk.autoscaling.AutoScalingEnterStandbyQuery"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingEnterStandbyQuery: autoscaling.AutoScalingEnterStandbyQuery = { ... }
```

##### `autoScalingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingEnterStandbyQuery.property.autoScalingGroupName"></a>

- *Type:* `string`

---

##### `shouldDecrementDesiredCapacity`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingEnterStandbyQuery.property.shouldDecrementDesiredCapacity"></a>

- *Type:* `boolean`

---

##### `instanceIds`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingEnterStandbyQuery.property.instanceIds"></a>

- *Type:* `string`[]

---

### AutoScalingExecutePolicyType <a name="aws-cdk-sdk.autoscaling.AutoScalingExecutePolicyType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingExecutePolicyType: autoscaling.AutoScalingExecutePolicyType = { ... }
```

##### `policyName`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingExecutePolicyType.property.policyName"></a>

- *Type:* `string`

---

##### `autoScalingGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingExecutePolicyType.property.autoScalingGroupName"></a>

- *Type:* `string`

---

##### `breachThreshold`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingExecutePolicyType.property.breachThreshold"></a>

- *Type:* `number`

---

##### `honorCooldown`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingExecutePolicyType.property.honorCooldown"></a>

- *Type:* `boolean`

---

##### `metricValue`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingExecutePolicyType.property.metricValue"></a>

- *Type:* `number`

---

### AutoScalingExitStandbyAnswer <a name="aws-cdk-sdk.autoscaling.AutoScalingExitStandbyAnswer"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingExitStandbyAnswer: autoscaling.AutoScalingExitStandbyAnswer = { ... }
```

##### `activities`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingExitStandbyAnswer.property.activities"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingActivity`](#aws-cdk-sdk.autoscaling.AutoScalingActivity)[]

---

### AutoScalingExitStandbyQuery <a name="aws-cdk-sdk.autoscaling.AutoScalingExitStandbyQuery"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingExitStandbyQuery: autoscaling.AutoScalingExitStandbyQuery = { ... }
```

##### `autoScalingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingExitStandbyQuery.property.autoScalingGroupName"></a>

- *Type:* `string`

---

##### `instanceIds`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingExitStandbyQuery.property.instanceIds"></a>

- *Type:* `string`[]

---

### AutoScalingFailedScheduledUpdateGroupActionRequest <a name="aws-cdk-sdk.autoscaling.AutoScalingFailedScheduledUpdateGroupActionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingFailedScheduledUpdateGroupActionRequest: autoscaling.AutoScalingFailedScheduledUpdateGroupActionRequest = { ... }
```

##### `scheduledActionName`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingFailedScheduledUpdateGroupActionRequest.property.scheduledActionName"></a>

- *Type:* `string`

---

##### `errorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingFailedScheduledUpdateGroupActionRequest.property.errorCode"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingFailedScheduledUpdateGroupActionRequest.property.errorMessage"></a>

- *Type:* `string`

---

### AutoScalingFilter <a name="aws-cdk-sdk.autoscaling.AutoScalingFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingFilter: autoscaling.AutoScalingFilter = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingFilter.property.name"></a>

- *Type:* `string`

---

##### `values`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingFilter.property.values"></a>

- *Type:* `string`[]

---

### AutoScalingInstance <a name="aws-cdk-sdk.autoscaling.AutoScalingInstance"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingInstance: autoscaling.AutoScalingInstance = { ... }
```

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingInstance.property.availabilityZone"></a>

- *Type:* `string`

---

##### `healthStatus`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingInstance.property.healthStatus"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingInstance.property.instanceId"></a>

- *Type:* `string`

---

##### `lifecycleState`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingInstance.property.lifecycleState"></a>

- *Type:* `string`

---

##### `protectedFromScaleIn`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingInstance.property.protectedFromScaleIn"></a>

- *Type:* `boolean`

---

##### `instanceType`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingInstance.property.instanceType"></a>

- *Type:* `string`

---

##### `launchConfigurationName`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingInstance.property.launchConfigurationName"></a>

- *Type:* `string`

---

##### `launchTemplate`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingInstance.property.launchTemplate"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingLaunchTemplateSpecification`](#aws-cdk-sdk.autoscaling.AutoScalingLaunchTemplateSpecification)

---

##### `weightedCapacity`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingInstance.property.weightedCapacity"></a>

- *Type:* `string`

---

### AutoScalingInstanceMetadataOptions <a name="aws-cdk-sdk.autoscaling.AutoScalingInstanceMetadataOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingInstanceMetadataOptions: autoscaling.AutoScalingInstanceMetadataOptions = { ... }
```

##### `httpEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingInstanceMetadataOptions.property.httpEndpoint"></a>

- *Type:* `string`

---

##### `httpPutResponseHopLimit`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingInstanceMetadataOptions.property.httpPutResponseHopLimit"></a>

- *Type:* `number`

---

##### `httpTokens`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingInstanceMetadataOptions.property.httpTokens"></a>

- *Type:* `string`

---

### AutoScalingInstanceMonitoring <a name="aws-cdk-sdk.autoscaling.AutoScalingInstanceMonitoring"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingInstanceMonitoring: autoscaling.AutoScalingInstanceMonitoring = { ... }
```

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingInstanceMonitoring.property.enabled"></a>

- *Type:* `boolean`

---

### AutoScalingInstanceRefresh <a name="aws-cdk-sdk.autoscaling.AutoScalingInstanceRefresh"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingInstanceRefresh: autoscaling.AutoScalingInstanceRefresh = { ... }
```

##### `autoScalingGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingInstanceRefresh.property.autoScalingGroupName"></a>

- *Type:* `string`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingInstanceRefresh.property.endTime"></a>

- *Type:* `string`

---

##### `instanceRefreshId`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingInstanceRefresh.property.instanceRefreshId"></a>

- *Type:* `string`

---

##### `instancesToUpdate`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingInstanceRefresh.property.instancesToUpdate"></a>

- *Type:* `number`

---

##### `percentageComplete`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingInstanceRefresh.property.percentageComplete"></a>

- *Type:* `number`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingInstanceRefresh.property.startTime"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingInstanceRefresh.property.status"></a>

- *Type:* `string`

---

##### `statusReason`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingInstanceRefresh.property.statusReason"></a>

- *Type:* `string`

---

### AutoScalingInstancesDistribution <a name="aws-cdk-sdk.autoscaling.AutoScalingInstancesDistribution"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingInstancesDistribution: autoscaling.AutoScalingInstancesDistribution = { ... }
```

##### `onDemandAllocationStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingInstancesDistribution.property.onDemandAllocationStrategy"></a>

- *Type:* `string`

---

##### `onDemandBaseCapacity`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingInstancesDistribution.property.onDemandBaseCapacity"></a>

- *Type:* `number`

---

##### `onDemandPercentageAboveBaseCapacity`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingInstancesDistribution.property.onDemandPercentageAboveBaseCapacity"></a>

- *Type:* `number`

---

##### `spotAllocationStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingInstancesDistribution.property.spotAllocationStrategy"></a>

- *Type:* `string`

---

##### `spotInstancePools`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingInstancesDistribution.property.spotInstancePools"></a>

- *Type:* `number`

---

##### `spotMaxPrice`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingInstancesDistribution.property.spotMaxPrice"></a>

- *Type:* `string`

---

### AutoScalingLaunchConfiguration <a name="aws-cdk-sdk.autoscaling.AutoScalingLaunchConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingLaunchConfiguration: autoscaling.AutoScalingLaunchConfiguration = { ... }
```

##### `createdTime`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingLaunchConfiguration.property.createdTime"></a>

- *Type:* `string`

---

##### `imageId`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingLaunchConfiguration.property.imageId"></a>

- *Type:* `string`

---

##### `instanceType`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingLaunchConfiguration.property.instanceType"></a>

- *Type:* `string`

---

##### `launchConfigurationName`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingLaunchConfiguration.property.launchConfigurationName"></a>

- *Type:* `string`

---

##### `associatePublicIpAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingLaunchConfiguration.property.associatePublicIpAddress"></a>

- *Type:* `boolean`

---

##### `blockDeviceMappings`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingLaunchConfiguration.property.blockDeviceMappings"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingBlockDeviceMapping`](#aws-cdk-sdk.autoscaling.AutoScalingBlockDeviceMapping)[]

---

##### `classicLinkVpcId`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingLaunchConfiguration.property.classicLinkVpcId"></a>

- *Type:* `string`

---

##### `classicLinkVpcSecurityGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingLaunchConfiguration.property.classicLinkVpcSecurityGroups"></a>

- *Type:* `string`[]

---

##### `ebsOptimized`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingLaunchConfiguration.property.ebsOptimized"></a>

- *Type:* `boolean`

---

##### `iamInstanceProfile`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingLaunchConfiguration.property.iamInstanceProfile"></a>

- *Type:* `string`

---

##### `instanceMonitoring`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingLaunchConfiguration.property.instanceMonitoring"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingInstanceMonitoring`](#aws-cdk-sdk.autoscaling.AutoScalingInstanceMonitoring)

---

##### `kernelId`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingLaunchConfiguration.property.kernelId"></a>

- *Type:* `string`

---

##### `keyName`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingLaunchConfiguration.property.keyName"></a>

- *Type:* `string`

---

##### `launchConfigurationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingLaunchConfiguration.property.launchConfigurationArn"></a>

- *Type:* `string`

---

##### `metadataOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingLaunchConfiguration.property.metadataOptions"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingInstanceMetadataOptions`](#aws-cdk-sdk.autoscaling.AutoScalingInstanceMetadataOptions)

---

##### `placementTenancy`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingLaunchConfiguration.property.placementTenancy"></a>

- *Type:* `string`

---

##### `ramdiskId`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingLaunchConfiguration.property.ramdiskId"></a>

- *Type:* `string`

---

##### `securityGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingLaunchConfiguration.property.securityGroups"></a>

- *Type:* `string`[]

---

##### `spotPrice`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingLaunchConfiguration.property.spotPrice"></a>

- *Type:* `string`

---

##### `userData`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingLaunchConfiguration.property.userData"></a>

- *Type:* `string`

---

### AutoScalingLaunchConfigurationNamesType <a name="aws-cdk-sdk.autoscaling.AutoScalingLaunchConfigurationNamesType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingLaunchConfigurationNamesType: autoscaling.AutoScalingLaunchConfigurationNamesType = { ... }
```

##### `launchConfigurationNames`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingLaunchConfigurationNamesType.property.launchConfigurationNames"></a>

- *Type:* `string`[]

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingLaunchConfigurationNamesType.property.maxRecords"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingLaunchConfigurationNamesType.property.nextToken"></a>

- *Type:* `string`

---

### AutoScalingLaunchConfigurationNameType <a name="aws-cdk-sdk.autoscaling.AutoScalingLaunchConfigurationNameType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingLaunchConfigurationNameType: autoscaling.AutoScalingLaunchConfigurationNameType = { ... }
```

##### `launchConfigurationName`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingLaunchConfigurationNameType.property.launchConfigurationName"></a>

- *Type:* `string`

---

### AutoScalingLaunchConfigurationsType <a name="aws-cdk-sdk.autoscaling.AutoScalingLaunchConfigurationsType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingLaunchConfigurationsType: autoscaling.AutoScalingLaunchConfigurationsType = { ... }
```

##### `launchConfigurations`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingLaunchConfigurationsType.property.launchConfigurations"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingLaunchConfiguration`](#aws-cdk-sdk.autoscaling.AutoScalingLaunchConfiguration)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingLaunchConfigurationsType.property.nextToken"></a>

- *Type:* `string`

---

### AutoScalingLaunchTemplate <a name="aws-cdk-sdk.autoscaling.AutoScalingLaunchTemplate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingLaunchTemplate: autoscaling.AutoScalingLaunchTemplate = { ... }
```

##### `launchTemplateSpecification`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingLaunchTemplate.property.launchTemplateSpecification"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingLaunchTemplateSpecification`](#aws-cdk-sdk.autoscaling.AutoScalingLaunchTemplateSpecification)

---

##### `overrides`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingLaunchTemplate.property.overrides"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingLaunchTemplateOverrides`](#aws-cdk-sdk.autoscaling.AutoScalingLaunchTemplateOverrides)[]

---

### AutoScalingLaunchTemplateOverrides <a name="aws-cdk-sdk.autoscaling.AutoScalingLaunchTemplateOverrides"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingLaunchTemplateOverrides: autoscaling.AutoScalingLaunchTemplateOverrides = { ... }
```

##### `instanceType`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingLaunchTemplateOverrides.property.instanceType"></a>

- *Type:* `string`

---

##### `launchTemplateSpecification`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingLaunchTemplateOverrides.property.launchTemplateSpecification"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingLaunchTemplateSpecification`](#aws-cdk-sdk.autoscaling.AutoScalingLaunchTemplateSpecification)

---

##### `weightedCapacity`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingLaunchTemplateOverrides.property.weightedCapacity"></a>

- *Type:* `string`

---

### AutoScalingLaunchTemplateSpecification <a name="aws-cdk-sdk.autoscaling.AutoScalingLaunchTemplateSpecification"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingLaunchTemplateSpecification: autoscaling.AutoScalingLaunchTemplateSpecification = { ... }
```

##### `launchTemplateId`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingLaunchTemplateSpecification.property.launchTemplateId"></a>

- *Type:* `string`

---

##### `launchTemplateName`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingLaunchTemplateSpecification.property.launchTemplateName"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingLaunchTemplateSpecification.property.version"></a>

- *Type:* `string`

---

### AutoScalingLifecycleHook <a name="aws-cdk-sdk.autoscaling.AutoScalingLifecycleHook"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingLifecycleHook: autoscaling.AutoScalingLifecycleHook = { ... }
```

##### `autoScalingGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingLifecycleHook.property.autoScalingGroupName"></a>

- *Type:* `string`

---

##### `defaultResult`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingLifecycleHook.property.defaultResult"></a>

- *Type:* `string`

---

##### `globalTimeout`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingLifecycleHook.property.globalTimeout"></a>

- *Type:* `number`

---

##### `heartbeatTimeout`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingLifecycleHook.property.heartbeatTimeout"></a>

- *Type:* `number`

---

##### `lifecycleHookName`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingLifecycleHook.property.lifecycleHookName"></a>

- *Type:* `string`

---

##### `lifecycleTransition`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingLifecycleHook.property.lifecycleTransition"></a>

- *Type:* `string`

---

##### `notificationMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingLifecycleHook.property.notificationMetadata"></a>

- *Type:* `string`

---

##### `notificationTargetArn`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingLifecycleHook.property.notificationTargetArn"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingLifecycleHook.property.roleArn"></a>

- *Type:* `string`

---

### AutoScalingLifecycleHookSpecification <a name="aws-cdk-sdk.autoscaling.AutoScalingLifecycleHookSpecification"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingLifecycleHookSpecification: autoscaling.AutoScalingLifecycleHookSpecification = { ... }
```

##### `lifecycleHookName`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingLifecycleHookSpecification.property.lifecycleHookName"></a>

- *Type:* `string`

---

##### `lifecycleTransition`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingLifecycleHookSpecification.property.lifecycleTransition"></a>

- *Type:* `string`

---

##### `defaultResult`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingLifecycleHookSpecification.property.defaultResult"></a>

- *Type:* `string`

---

##### `heartbeatTimeout`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingLifecycleHookSpecification.property.heartbeatTimeout"></a>

- *Type:* `number`

---

##### `notificationMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingLifecycleHookSpecification.property.notificationMetadata"></a>

- *Type:* `string`

---

##### `notificationTargetArn`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingLifecycleHookSpecification.property.notificationTargetArn"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingLifecycleHookSpecification.property.roleArn"></a>

- *Type:* `string`

---

### AutoScalingLoadBalancerState <a name="aws-cdk-sdk.autoscaling.AutoScalingLoadBalancerState"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingLoadBalancerState: autoscaling.AutoScalingLoadBalancerState = { ... }
```

##### `loadBalancerName`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingLoadBalancerState.property.loadBalancerName"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingLoadBalancerState.property.state"></a>

- *Type:* `string`

---

### AutoScalingLoadBalancerTargetGroupState <a name="aws-cdk-sdk.autoscaling.AutoScalingLoadBalancerTargetGroupState"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingLoadBalancerTargetGroupState: autoscaling.AutoScalingLoadBalancerTargetGroupState = { ... }
```

##### `loadBalancerTargetGroupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingLoadBalancerTargetGroupState.property.loadBalancerTargetGroupArn"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingLoadBalancerTargetGroupState.property.state"></a>

- *Type:* `string`

---

### AutoScalingMetricCollectionType <a name="aws-cdk-sdk.autoscaling.AutoScalingMetricCollectionType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingMetricCollectionType: autoscaling.AutoScalingMetricCollectionType = { ... }
```

##### `metric`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingMetricCollectionType.property.metric"></a>

- *Type:* `string`

---

### AutoScalingMetricDimension <a name="aws-cdk-sdk.autoscaling.AutoScalingMetricDimension"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingMetricDimension: autoscaling.AutoScalingMetricDimension = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingMetricDimension.property.name"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingMetricDimension.property.value"></a>

- *Type:* `string`

---

### AutoScalingMetricGranularityType <a name="aws-cdk-sdk.autoscaling.AutoScalingMetricGranularityType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingMetricGranularityType: autoscaling.AutoScalingMetricGranularityType = { ... }
```

##### `granularity`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingMetricGranularityType.property.granularity"></a>

- *Type:* `string`

---

### AutoScalingMixedInstancesPolicy <a name="aws-cdk-sdk.autoscaling.AutoScalingMixedInstancesPolicy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingMixedInstancesPolicy: autoscaling.AutoScalingMixedInstancesPolicy = { ... }
```

##### `instancesDistribution`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingMixedInstancesPolicy.property.instancesDistribution"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingInstancesDistribution`](#aws-cdk-sdk.autoscaling.AutoScalingInstancesDistribution)

---

##### `launchTemplate`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingMixedInstancesPolicy.property.launchTemplate"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingLaunchTemplate`](#aws-cdk-sdk.autoscaling.AutoScalingLaunchTemplate)

---

### AutoScalingNotificationConfiguration <a name="aws-cdk-sdk.autoscaling.AutoScalingNotificationConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingNotificationConfiguration: autoscaling.AutoScalingNotificationConfiguration = { ... }
```

##### `autoScalingGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingNotificationConfiguration.property.autoScalingGroupName"></a>

- *Type:* `string`

---

##### `notificationType`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingNotificationConfiguration.property.notificationType"></a>

- *Type:* `string`

---

##### `topicArn`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingNotificationConfiguration.property.topicArn"></a>

- *Type:* `string`

---

### AutoScalingPoliciesType <a name="aws-cdk-sdk.autoscaling.AutoScalingPoliciesType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingPoliciesType: autoscaling.AutoScalingPoliciesType = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingPoliciesType.property.nextToken"></a>

- *Type:* `string`

---

##### `scalingPolicies`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingPoliciesType.property.scalingPolicies"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingScalingPolicy`](#aws-cdk-sdk.autoscaling.AutoScalingScalingPolicy)[]

---

### AutoScalingPolicyArnType <a name="aws-cdk-sdk.autoscaling.AutoScalingPolicyArnType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingPolicyArnType: autoscaling.AutoScalingPolicyArnType = { ... }
```

##### `alarms`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingPolicyArnType.property.alarms"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingAlarm`](#aws-cdk-sdk.autoscaling.AutoScalingAlarm)[]

---

##### `policyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingPolicyArnType.property.policyArn"></a>

- *Type:* `string`

---

### AutoScalingPredefinedMetricSpecification <a name="aws-cdk-sdk.autoscaling.AutoScalingPredefinedMetricSpecification"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingPredefinedMetricSpecification: autoscaling.AutoScalingPredefinedMetricSpecification = { ... }
```

##### `predefinedMetricType`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingPredefinedMetricSpecification.property.predefinedMetricType"></a>

- *Type:* `string`

---

##### `resourceLabel`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingPredefinedMetricSpecification.property.resourceLabel"></a>

- *Type:* `string`

---

### AutoScalingProcessesType <a name="aws-cdk-sdk.autoscaling.AutoScalingProcessesType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingProcessesType: autoscaling.AutoScalingProcessesType = { ... }
```

##### `processes`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingProcessesType.property.processes"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingProcessType`](#aws-cdk-sdk.autoscaling.AutoScalingProcessType)[]

---

### AutoScalingProcessType <a name="aws-cdk-sdk.autoscaling.AutoScalingProcessType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingProcessType: autoscaling.AutoScalingProcessType = { ... }
```

##### `processName`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingProcessType.property.processName"></a>

- *Type:* `string`

---

### AutoScalingPutLifecycleHookAnswer <a name="aws-cdk-sdk.autoscaling.AutoScalingPutLifecycleHookAnswer"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingPutLifecycleHookAnswer: autoscaling.AutoScalingPutLifecycleHookAnswer = { ... }
```

### AutoScalingPutLifecycleHookType <a name="aws-cdk-sdk.autoscaling.AutoScalingPutLifecycleHookType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingPutLifecycleHookType: autoscaling.AutoScalingPutLifecycleHookType = { ... }
```

##### `autoScalingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingPutLifecycleHookType.property.autoScalingGroupName"></a>

- *Type:* `string`

---

##### `lifecycleHookName`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingPutLifecycleHookType.property.lifecycleHookName"></a>

- *Type:* `string`

---

##### `defaultResult`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingPutLifecycleHookType.property.defaultResult"></a>

- *Type:* `string`

---

##### `heartbeatTimeout`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingPutLifecycleHookType.property.heartbeatTimeout"></a>

- *Type:* `number`

---

##### `lifecycleTransition`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingPutLifecycleHookType.property.lifecycleTransition"></a>

- *Type:* `string`

---

##### `notificationMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingPutLifecycleHookType.property.notificationMetadata"></a>

- *Type:* `string`

---

##### `notificationTargetArn`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingPutLifecycleHookType.property.notificationTargetArn"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingPutLifecycleHookType.property.roleArn"></a>

- *Type:* `string`

---

### AutoScalingPutNotificationConfigurationType <a name="aws-cdk-sdk.autoscaling.AutoScalingPutNotificationConfigurationType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingPutNotificationConfigurationType: autoscaling.AutoScalingPutNotificationConfigurationType = { ... }
```

##### `autoScalingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingPutNotificationConfigurationType.property.autoScalingGroupName"></a>

- *Type:* `string`

---

##### `notificationTypes`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingPutNotificationConfigurationType.property.notificationTypes"></a>

- *Type:* `string`[]

---

##### `topicArn`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingPutNotificationConfigurationType.property.topicArn"></a>

- *Type:* `string`

---

### AutoScalingPutScalingPolicyType <a name="aws-cdk-sdk.autoscaling.AutoScalingPutScalingPolicyType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingPutScalingPolicyType: autoscaling.AutoScalingPutScalingPolicyType = { ... }
```

##### `autoScalingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingPutScalingPolicyType.property.autoScalingGroupName"></a>

- *Type:* `string`

---

##### `policyName`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingPutScalingPolicyType.property.policyName"></a>

- *Type:* `string`

---

##### `adjustmentType`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingPutScalingPolicyType.property.adjustmentType"></a>

- *Type:* `string`

---

##### `cooldown`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingPutScalingPolicyType.property.cooldown"></a>

- *Type:* `number`

---

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingPutScalingPolicyType.property.enabled"></a>

- *Type:* `boolean`

---

##### `estimatedInstanceWarmup`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingPutScalingPolicyType.property.estimatedInstanceWarmup"></a>

- *Type:* `number`

---

##### `metricAggregationType`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingPutScalingPolicyType.property.metricAggregationType"></a>

- *Type:* `string`

---

##### `minAdjustmentMagnitude`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingPutScalingPolicyType.property.minAdjustmentMagnitude"></a>

- *Type:* `number`

---

##### `minAdjustmentStep`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingPutScalingPolicyType.property.minAdjustmentStep"></a>

- *Type:* `number`

---

##### `policyType`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingPutScalingPolicyType.property.policyType"></a>

- *Type:* `string`

---

##### `scalingAdjustment`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingPutScalingPolicyType.property.scalingAdjustment"></a>

- *Type:* `number`

---

##### `stepAdjustments`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingPutScalingPolicyType.property.stepAdjustments"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingStepAdjustment`](#aws-cdk-sdk.autoscaling.AutoScalingStepAdjustment)[]

---

##### `targetTrackingConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingPutScalingPolicyType.property.targetTrackingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingTargetTrackingConfiguration`](#aws-cdk-sdk.autoscaling.AutoScalingTargetTrackingConfiguration)

---

### AutoScalingPutScheduledUpdateGroupActionType <a name="aws-cdk-sdk.autoscaling.AutoScalingPutScheduledUpdateGroupActionType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingPutScheduledUpdateGroupActionType: autoscaling.AutoScalingPutScheduledUpdateGroupActionType = { ... }
```

##### `autoScalingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingPutScheduledUpdateGroupActionType.property.autoScalingGroupName"></a>

- *Type:* `string`

---

##### `scheduledActionName`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingPutScheduledUpdateGroupActionType.property.scheduledActionName"></a>

- *Type:* `string`

---

##### `desiredCapacity`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingPutScheduledUpdateGroupActionType.property.desiredCapacity"></a>

- *Type:* `number`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingPutScheduledUpdateGroupActionType.property.endTime"></a>

- *Type:* `string`

---

##### `maxSize`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingPutScheduledUpdateGroupActionType.property.maxSize"></a>

- *Type:* `number`

---

##### `minSize`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingPutScheduledUpdateGroupActionType.property.minSize"></a>

- *Type:* `number`

---

##### `recurrence`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingPutScheduledUpdateGroupActionType.property.recurrence"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingPutScheduledUpdateGroupActionType.property.startTime"></a>

- *Type:* `string`

---

##### `time`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingPutScheduledUpdateGroupActionType.property.time"></a>

- *Type:* `string`

---

### AutoScalingRecordLifecycleActionHeartbeatAnswer <a name="aws-cdk-sdk.autoscaling.AutoScalingRecordLifecycleActionHeartbeatAnswer"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingRecordLifecycleActionHeartbeatAnswer: autoscaling.AutoScalingRecordLifecycleActionHeartbeatAnswer = { ... }
```

### AutoScalingRecordLifecycleActionHeartbeatType <a name="aws-cdk-sdk.autoscaling.AutoScalingRecordLifecycleActionHeartbeatType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingRecordLifecycleActionHeartbeatType: autoscaling.AutoScalingRecordLifecycleActionHeartbeatType = { ... }
```

##### `autoScalingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingRecordLifecycleActionHeartbeatType.property.autoScalingGroupName"></a>

- *Type:* `string`

---

##### `lifecycleHookName`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingRecordLifecycleActionHeartbeatType.property.lifecycleHookName"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingRecordLifecycleActionHeartbeatType.property.instanceId"></a>

- *Type:* `string`

---

##### `lifecycleActionToken`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingRecordLifecycleActionHeartbeatType.property.lifecycleActionToken"></a>

- *Type:* `string`

---

### AutoScalingRefreshPreferences <a name="aws-cdk-sdk.autoscaling.AutoScalingRefreshPreferences"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingRefreshPreferences: autoscaling.AutoScalingRefreshPreferences = { ... }
```

##### `instanceWarmup`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingRefreshPreferences.property.instanceWarmup"></a>

- *Type:* `number`

---

##### `minHealthyPercentage`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingRefreshPreferences.property.minHealthyPercentage"></a>

- *Type:* `number`

---

### AutoScalingScalingPolicy <a name="aws-cdk-sdk.autoscaling.AutoScalingScalingPolicy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingScalingPolicy: autoscaling.AutoScalingScalingPolicy = { ... }
```

##### `adjustmentType`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingScalingPolicy.property.adjustmentType"></a>

- *Type:* `string`

---

##### `alarms`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingScalingPolicy.property.alarms"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingAlarm`](#aws-cdk-sdk.autoscaling.AutoScalingAlarm)[]

---

##### `autoScalingGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingScalingPolicy.property.autoScalingGroupName"></a>

- *Type:* `string`

---

##### `cooldown`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingScalingPolicy.property.cooldown"></a>

- *Type:* `number`

---

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingScalingPolicy.property.enabled"></a>

- *Type:* `boolean`

---

##### `estimatedInstanceWarmup`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingScalingPolicy.property.estimatedInstanceWarmup"></a>

- *Type:* `number`

---

##### `metricAggregationType`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingScalingPolicy.property.metricAggregationType"></a>

- *Type:* `string`

---

##### `minAdjustmentMagnitude`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingScalingPolicy.property.minAdjustmentMagnitude"></a>

- *Type:* `number`

---

##### `minAdjustmentStep`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingScalingPolicy.property.minAdjustmentStep"></a>

- *Type:* `number`

---

##### `policyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingScalingPolicy.property.policyArn"></a>

- *Type:* `string`

---

##### `policyName`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingScalingPolicy.property.policyName"></a>

- *Type:* `string`

---

##### `policyType`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingScalingPolicy.property.policyType"></a>

- *Type:* `string`

---

##### `scalingAdjustment`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingScalingPolicy.property.scalingAdjustment"></a>

- *Type:* `number`

---

##### `stepAdjustments`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingScalingPolicy.property.stepAdjustments"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingStepAdjustment`](#aws-cdk-sdk.autoscaling.AutoScalingStepAdjustment)[]

---

##### `targetTrackingConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingScalingPolicy.property.targetTrackingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingTargetTrackingConfiguration`](#aws-cdk-sdk.autoscaling.AutoScalingTargetTrackingConfiguration)

---

### AutoScalingScalingProcessQuery <a name="aws-cdk-sdk.autoscaling.AutoScalingScalingProcessQuery"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingScalingProcessQuery: autoscaling.AutoScalingScalingProcessQuery = { ... }
```

##### `autoScalingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingScalingProcessQuery.property.autoScalingGroupName"></a>

- *Type:* `string`

---

##### `scalingProcesses`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingScalingProcessQuery.property.scalingProcesses"></a>

- *Type:* `string`[]

---

### AutoScalingScheduledActionsType <a name="aws-cdk-sdk.autoscaling.AutoScalingScheduledActionsType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingScheduledActionsType: autoscaling.AutoScalingScheduledActionsType = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingScheduledActionsType.property.nextToken"></a>

- *Type:* `string`

---

##### `scheduledUpdateGroupActions`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingScheduledActionsType.property.scheduledUpdateGroupActions"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingScheduledUpdateGroupAction`](#aws-cdk-sdk.autoscaling.AutoScalingScheduledUpdateGroupAction)[]

---

### AutoScalingScheduledUpdateGroupAction <a name="aws-cdk-sdk.autoscaling.AutoScalingScheduledUpdateGroupAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingScheduledUpdateGroupAction: autoscaling.AutoScalingScheduledUpdateGroupAction = { ... }
```

##### `autoScalingGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingScheduledUpdateGroupAction.property.autoScalingGroupName"></a>

- *Type:* `string`

---

##### `desiredCapacity`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingScheduledUpdateGroupAction.property.desiredCapacity"></a>

- *Type:* `number`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingScheduledUpdateGroupAction.property.endTime"></a>

- *Type:* `string`

---

##### `maxSize`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingScheduledUpdateGroupAction.property.maxSize"></a>

- *Type:* `number`

---

##### `minSize`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingScheduledUpdateGroupAction.property.minSize"></a>

- *Type:* `number`

---

##### `recurrence`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingScheduledUpdateGroupAction.property.recurrence"></a>

- *Type:* `string`

---

##### `scheduledActionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingScheduledUpdateGroupAction.property.scheduledActionArn"></a>

- *Type:* `string`

---

##### `scheduledActionName`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingScheduledUpdateGroupAction.property.scheduledActionName"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingScheduledUpdateGroupAction.property.startTime"></a>

- *Type:* `string`

---

##### `time`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingScheduledUpdateGroupAction.property.time"></a>

- *Type:* `string`

---

### AutoScalingScheduledUpdateGroupActionRequest <a name="aws-cdk-sdk.autoscaling.AutoScalingScheduledUpdateGroupActionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingScheduledUpdateGroupActionRequest: autoscaling.AutoScalingScheduledUpdateGroupActionRequest = { ... }
```

##### `scheduledActionName`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingScheduledUpdateGroupActionRequest.property.scheduledActionName"></a>

- *Type:* `string`

---

##### `desiredCapacity`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingScheduledUpdateGroupActionRequest.property.desiredCapacity"></a>

- *Type:* `number`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingScheduledUpdateGroupActionRequest.property.endTime"></a>

- *Type:* `string`

---

##### `maxSize`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingScheduledUpdateGroupActionRequest.property.maxSize"></a>

- *Type:* `number`

---

##### `minSize`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingScheduledUpdateGroupActionRequest.property.minSize"></a>

- *Type:* `number`

---

##### `recurrence`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingScheduledUpdateGroupActionRequest.property.recurrence"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingScheduledUpdateGroupActionRequest.property.startTime"></a>

- *Type:* `string`

---

### AutoScalingSetDesiredCapacityType <a name="aws-cdk-sdk.autoscaling.AutoScalingSetDesiredCapacityType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingSetDesiredCapacityType: autoscaling.AutoScalingSetDesiredCapacityType = { ... }
```

##### `autoScalingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingSetDesiredCapacityType.property.autoScalingGroupName"></a>

- *Type:* `string`

---

##### `desiredCapacity`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingSetDesiredCapacityType.property.desiredCapacity"></a>

- *Type:* `number`

---

##### `honorCooldown`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingSetDesiredCapacityType.property.honorCooldown"></a>

- *Type:* `boolean`

---

### AutoScalingSetInstanceHealthQuery <a name="aws-cdk-sdk.autoscaling.AutoScalingSetInstanceHealthQuery"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingSetInstanceHealthQuery: autoscaling.AutoScalingSetInstanceHealthQuery = { ... }
```

##### `healthStatus`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingSetInstanceHealthQuery.property.healthStatus"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingSetInstanceHealthQuery.property.instanceId"></a>

- *Type:* `string`

---

##### `shouldRespectGracePeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingSetInstanceHealthQuery.property.shouldRespectGracePeriod"></a>

- *Type:* `boolean`

---

### AutoScalingSetInstanceProtectionAnswer <a name="aws-cdk-sdk.autoscaling.AutoScalingSetInstanceProtectionAnswer"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingSetInstanceProtectionAnswer: autoscaling.AutoScalingSetInstanceProtectionAnswer = { ... }
```

### AutoScalingSetInstanceProtectionQuery <a name="aws-cdk-sdk.autoscaling.AutoScalingSetInstanceProtectionQuery"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingSetInstanceProtectionQuery: autoscaling.AutoScalingSetInstanceProtectionQuery = { ... }
```

##### `autoScalingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingSetInstanceProtectionQuery.property.autoScalingGroupName"></a>

- *Type:* `string`

---

##### `instanceIds`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingSetInstanceProtectionQuery.property.instanceIds"></a>

- *Type:* `string`[]

---

##### `protectedFromScaleIn`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingSetInstanceProtectionQuery.property.protectedFromScaleIn"></a>

- *Type:* `boolean`

---

### AutoScalingStartInstanceRefreshAnswer <a name="aws-cdk-sdk.autoscaling.AutoScalingStartInstanceRefreshAnswer"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingStartInstanceRefreshAnswer: autoscaling.AutoScalingStartInstanceRefreshAnswer = { ... }
```

##### `instanceRefreshId`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingStartInstanceRefreshAnswer.property.instanceRefreshId"></a>

- *Type:* `string`

---

### AutoScalingStartInstanceRefreshType <a name="aws-cdk-sdk.autoscaling.AutoScalingStartInstanceRefreshType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingStartInstanceRefreshType: autoscaling.AutoScalingStartInstanceRefreshType = { ... }
```

##### `autoScalingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingStartInstanceRefreshType.property.autoScalingGroupName"></a>

- *Type:* `string`

---

##### `preferences`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingStartInstanceRefreshType.property.preferences"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingRefreshPreferences`](#aws-cdk-sdk.autoscaling.AutoScalingRefreshPreferences)

---

##### `strategy`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingStartInstanceRefreshType.property.strategy"></a>

- *Type:* `string`

---

### AutoScalingStepAdjustment <a name="aws-cdk-sdk.autoscaling.AutoScalingStepAdjustment"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingStepAdjustment: autoscaling.AutoScalingStepAdjustment = { ... }
```

##### `scalingAdjustment`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingStepAdjustment.property.scalingAdjustment"></a>

- *Type:* `number`

---

##### `metricIntervalLowerBound`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingStepAdjustment.property.metricIntervalLowerBound"></a>

- *Type:* `number`

---

##### `metricIntervalUpperBound`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingStepAdjustment.property.metricIntervalUpperBound"></a>

- *Type:* `number`

---

### AutoScalingSuspendedProcess <a name="aws-cdk-sdk.autoscaling.AutoScalingSuspendedProcess"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingSuspendedProcess: autoscaling.AutoScalingSuspendedProcess = { ... }
```

##### `processName`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingSuspendedProcess.property.processName"></a>

- *Type:* `string`

---

##### `suspensionReason`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingSuspendedProcess.property.suspensionReason"></a>

- *Type:* `string`

---

### AutoScalingTag <a name="aws-cdk-sdk.autoscaling.AutoScalingTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingTag: autoscaling.AutoScalingTag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingTag.property.key"></a>

- *Type:* `string`

---

##### `propagateAtLaunch`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingTag.property.propagateAtLaunch"></a>

- *Type:* `boolean`

---

##### `resourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingTag.property.resourceId"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingTag.property.resourceType"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingTag.property.value"></a>

- *Type:* `string`

---

### AutoScalingTagDescription <a name="aws-cdk-sdk.autoscaling.AutoScalingTagDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingTagDescription: autoscaling.AutoScalingTagDescription = { ... }
```

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingTagDescription.property.key"></a>

- *Type:* `string`

---

##### `propagateAtLaunch`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingTagDescription.property.propagateAtLaunch"></a>

- *Type:* `boolean`

---

##### `resourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingTagDescription.property.resourceId"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingTagDescription.property.resourceType"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingTagDescription.property.value"></a>

- *Type:* `string`

---

### AutoScalingTagsType <a name="aws-cdk-sdk.autoscaling.AutoScalingTagsType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingTagsType: autoscaling.AutoScalingTagsType = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingTagsType.property.nextToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingTagsType.property.tags"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingTagDescription`](#aws-cdk-sdk.autoscaling.AutoScalingTagDescription)[]

---

### AutoScalingTargetTrackingConfiguration <a name="aws-cdk-sdk.autoscaling.AutoScalingTargetTrackingConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingTargetTrackingConfiguration: autoscaling.AutoScalingTargetTrackingConfiguration = { ... }
```

##### `targetValue`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingTargetTrackingConfiguration.property.targetValue"></a>

- *Type:* `number`

---

##### `customizedMetricSpecification`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingTargetTrackingConfiguration.property.customizedMetricSpecification"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingCustomizedMetricSpecification`](#aws-cdk-sdk.autoscaling.AutoScalingCustomizedMetricSpecification)

---

##### `disableScaleIn`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingTargetTrackingConfiguration.property.disableScaleIn"></a>

- *Type:* `boolean`

---

##### `predefinedMetricSpecification`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingTargetTrackingConfiguration.property.predefinedMetricSpecification"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingPredefinedMetricSpecification`](#aws-cdk-sdk.autoscaling.AutoScalingPredefinedMetricSpecification)

---

### AutoScalingTerminateInstanceInAutoScalingGroupType <a name="aws-cdk-sdk.autoscaling.AutoScalingTerminateInstanceInAutoScalingGroupType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingTerminateInstanceInAutoScalingGroupType: autoscaling.AutoScalingTerminateInstanceInAutoScalingGroupType = { ... }
```

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingTerminateInstanceInAutoScalingGroupType.property.instanceId"></a>

- *Type:* `string`

---

##### `shouldDecrementDesiredCapacity`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingTerminateInstanceInAutoScalingGroupType.property.shouldDecrementDesiredCapacity"></a>

- *Type:* `boolean`

---

### AutoScalingUpdateAutoScalingGroupType <a name="aws-cdk-sdk.autoscaling.AutoScalingUpdateAutoScalingGroupType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

const autoScalingUpdateAutoScalingGroupType: autoscaling.AutoScalingUpdateAutoScalingGroupType = { ... }
```

##### `autoScalingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingUpdateAutoScalingGroupType.property.autoScalingGroupName"></a>

- *Type:* `string`

---

##### `availabilityZones`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingUpdateAutoScalingGroupType.property.availabilityZones"></a>

- *Type:* `string`[]

---

##### `capacityRebalance`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingUpdateAutoScalingGroupType.property.capacityRebalance"></a>

- *Type:* `boolean`

---

##### `defaultCooldown`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingUpdateAutoScalingGroupType.property.defaultCooldown"></a>

- *Type:* `number`

---

##### `desiredCapacity`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingUpdateAutoScalingGroupType.property.desiredCapacity"></a>

- *Type:* `number`

---

##### `healthCheckGracePeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingUpdateAutoScalingGroupType.property.healthCheckGracePeriod"></a>

- *Type:* `number`

---

##### `healthCheckType`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingUpdateAutoScalingGroupType.property.healthCheckType"></a>

- *Type:* `string`

---

##### `launchConfigurationName`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingUpdateAutoScalingGroupType.property.launchConfigurationName"></a>

- *Type:* `string`

---

##### `launchTemplate`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingUpdateAutoScalingGroupType.property.launchTemplate"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingLaunchTemplateSpecification`](#aws-cdk-sdk.autoscaling.AutoScalingLaunchTemplateSpecification)

---

##### `maxInstanceLifetime`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingUpdateAutoScalingGroupType.property.maxInstanceLifetime"></a>

- *Type:* `number`

---

##### `maxSize`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingUpdateAutoScalingGroupType.property.maxSize"></a>

- *Type:* `number`

---

##### `minSize`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingUpdateAutoScalingGroupType.property.minSize"></a>

- *Type:* `number`

---

##### `mixedInstancesPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingUpdateAutoScalingGroupType.property.mixedInstancesPolicy"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingMixedInstancesPolicy`](#aws-cdk-sdk.autoscaling.AutoScalingMixedInstancesPolicy)

---

##### `newInstancesProtectedFromScaleIn`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingUpdateAutoScalingGroupType.property.newInstancesProtectedFromScaleIn"></a>

- *Type:* `boolean`

---

##### `placementGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingUpdateAutoScalingGroupType.property.placementGroup"></a>

- *Type:* `string`

---

##### `serviceLinkedRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingUpdateAutoScalingGroupType.property.serviceLinkedRoleArn"></a>

- *Type:* `string`

---

##### `terminationPolicies`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingUpdateAutoScalingGroupType.property.terminationPolicies"></a>

- *Type:* `string`[]

---

##### `vpcZoneIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingUpdateAutoScalingGroupType.property.vpcZoneIdentifier"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### AutoScalingResponsesBatchDeleteScheduledAction <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesBatchDeleteScheduledAction"></a>

#### Initializer <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesBatchDeleteScheduledAction.Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

new autoscaling.AutoScalingResponsesBatchDeleteScheduledAction(__scope: Construct, __resources: string[], __input: AutoScalingBatchDeleteScheduledActionType)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesBatchDeleteScheduledAction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesBatchDeleteScheduledAction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesBatchDeleteScheduledAction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingBatchDeleteScheduledActionType`](#aws-cdk-sdk.autoscaling.AutoScalingBatchDeleteScheduledActionType)

---



#### Properties <a name="Properties"></a>

##### `failedScheduledActions`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesBatchDeleteScheduledAction.property.failedScheduledActions"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingFailedScheduledUpdateGroupActionRequest`](#aws-cdk-sdk.autoscaling.AutoScalingFailedScheduledUpdateGroupActionRequest)[]

---


### AutoScalingResponsesBatchPutScheduledUpdateGroupAction <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesBatchPutScheduledUpdateGroupAction"></a>

#### Initializer <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesBatchPutScheduledUpdateGroupAction.Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

new autoscaling.AutoScalingResponsesBatchPutScheduledUpdateGroupAction(__scope: Construct, __resources: string[], __input: AutoScalingBatchPutScheduledUpdateGroupActionType)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesBatchPutScheduledUpdateGroupAction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesBatchPutScheduledUpdateGroupAction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesBatchPutScheduledUpdateGroupAction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingBatchPutScheduledUpdateGroupActionType`](#aws-cdk-sdk.autoscaling.AutoScalingBatchPutScheduledUpdateGroupActionType)

---



#### Properties <a name="Properties"></a>

##### `failedScheduledUpdateGroupActions`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesBatchPutScheduledUpdateGroupAction.property.failedScheduledUpdateGroupActions"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingFailedScheduledUpdateGroupActionRequest`](#aws-cdk-sdk.autoscaling.AutoScalingFailedScheduledUpdateGroupActionRequest)[]

---


### AutoScalingResponsesCancelInstanceRefresh <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesCancelInstanceRefresh"></a>

#### Initializer <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesCancelInstanceRefresh.Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

new autoscaling.AutoScalingResponsesCancelInstanceRefresh(__scope: Construct, __resources: string[], __input: AutoScalingCancelInstanceRefreshType)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesCancelInstanceRefresh.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesCancelInstanceRefresh.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesCancelInstanceRefresh.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingCancelInstanceRefreshType`](#aws-cdk-sdk.autoscaling.AutoScalingCancelInstanceRefreshType)

---



#### Properties <a name="Properties"></a>

##### `instanceRefreshId`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesCancelInstanceRefresh.property.instanceRefreshId"></a>

- *Type:* `string`

---


### AutoScalingResponsesDescribeAccountLimits <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeAccountLimits"></a>

#### Initializer <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeAccountLimits.Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

new autoscaling.AutoScalingResponsesDescribeAccountLimits(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeAccountLimits.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeAccountLimits.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `maxNumberOfAutoScalingGroups`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeAccountLimits.property.maxNumberOfAutoScalingGroups"></a>

- *Type:* `number`

---

##### `maxNumberOfLaunchConfigurations`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeAccountLimits.property.maxNumberOfLaunchConfigurations"></a>

- *Type:* `number`

---

##### `numberOfAutoScalingGroups`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeAccountLimits.property.numberOfAutoScalingGroups"></a>

- *Type:* `number`

---

##### `numberOfLaunchConfigurations`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeAccountLimits.property.numberOfLaunchConfigurations"></a>

- *Type:* `number`

---


### AutoScalingResponsesDescribeAdjustmentTypes <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeAdjustmentTypes"></a>

#### Initializer <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeAdjustmentTypes.Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

new autoscaling.AutoScalingResponsesDescribeAdjustmentTypes(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeAdjustmentTypes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeAdjustmentTypes.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `adjustmentTypes`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeAdjustmentTypes.property.adjustmentTypes"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingAdjustmentType`](#aws-cdk-sdk.autoscaling.AutoScalingAdjustmentType)[]

---


### AutoScalingResponsesDescribeAutoScalingGroups <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeAutoScalingGroups"></a>

#### Initializer <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeAutoScalingGroups.Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

new autoscaling.AutoScalingResponsesDescribeAutoScalingGroups(__scope: Construct, __resources: string[], __input: AutoScalingAutoScalingGroupNamesType)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeAutoScalingGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeAutoScalingGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeAutoScalingGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingAutoScalingGroupNamesType`](#aws-cdk-sdk.autoscaling.AutoScalingAutoScalingGroupNamesType)

---



#### Properties <a name="Properties"></a>

##### `autoScalingGroups`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeAutoScalingGroups.property.autoScalingGroups"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingAutoScalingGroup`](#aws-cdk-sdk.autoscaling.AutoScalingAutoScalingGroup)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeAutoScalingGroups.property.nextToken"></a>

- *Type:* `string`

---


### AutoScalingResponsesDescribeAutoScalingInstances <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeAutoScalingInstances"></a>

#### Initializer <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeAutoScalingInstances.Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

new autoscaling.AutoScalingResponsesDescribeAutoScalingInstances(__scope: Construct, __resources: string[], __input: AutoScalingDescribeAutoScalingInstancesType)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeAutoScalingInstances.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeAutoScalingInstances.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeAutoScalingInstances.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingDescribeAutoScalingInstancesType`](#aws-cdk-sdk.autoscaling.AutoScalingDescribeAutoScalingInstancesType)

---



#### Properties <a name="Properties"></a>

##### `autoScalingInstances`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeAutoScalingInstances.property.autoScalingInstances"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingAutoScalingInstanceDetails`](#aws-cdk-sdk.autoscaling.AutoScalingAutoScalingInstanceDetails)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeAutoScalingInstances.property.nextToken"></a>

- *Type:* `string`

---


### AutoScalingResponsesDescribeAutoScalingNotificationTypes <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeAutoScalingNotificationTypes"></a>

#### Initializer <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeAutoScalingNotificationTypes.Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

new autoscaling.AutoScalingResponsesDescribeAutoScalingNotificationTypes(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeAutoScalingNotificationTypes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeAutoScalingNotificationTypes.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `autoScalingNotificationTypes`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeAutoScalingNotificationTypes.property.autoScalingNotificationTypes"></a>

- *Type:* `string`[]

---


### AutoScalingResponsesDescribeInstanceRefreshes <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeInstanceRefreshes"></a>

#### Initializer <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeInstanceRefreshes.Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

new autoscaling.AutoScalingResponsesDescribeInstanceRefreshes(__scope: Construct, __resources: string[], __input: AutoScalingDescribeInstanceRefreshesType)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeInstanceRefreshes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeInstanceRefreshes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeInstanceRefreshes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingDescribeInstanceRefreshesType`](#aws-cdk-sdk.autoscaling.AutoScalingDescribeInstanceRefreshesType)

---



#### Properties <a name="Properties"></a>

##### `instanceRefreshes`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeInstanceRefreshes.property.instanceRefreshes"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingInstanceRefresh`](#aws-cdk-sdk.autoscaling.AutoScalingInstanceRefresh)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeInstanceRefreshes.property.nextToken"></a>

- *Type:* `string`

---


### AutoScalingResponsesDescribeLaunchConfigurations <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeLaunchConfigurations"></a>

#### Initializer <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeLaunchConfigurations.Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

new autoscaling.AutoScalingResponsesDescribeLaunchConfigurations(__scope: Construct, __resources: string[], __input: AutoScalingLaunchConfigurationNamesType)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeLaunchConfigurations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeLaunchConfigurations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeLaunchConfigurations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingLaunchConfigurationNamesType`](#aws-cdk-sdk.autoscaling.AutoScalingLaunchConfigurationNamesType)

---



#### Properties <a name="Properties"></a>

##### `launchConfigurations`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeLaunchConfigurations.property.launchConfigurations"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingLaunchConfiguration`](#aws-cdk-sdk.autoscaling.AutoScalingLaunchConfiguration)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeLaunchConfigurations.property.nextToken"></a>

- *Type:* `string`

---


### AutoScalingResponsesDescribeLifecycleHooks <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeLifecycleHooks"></a>

#### Initializer <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeLifecycleHooks.Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

new autoscaling.AutoScalingResponsesDescribeLifecycleHooks(__scope: Construct, __resources: string[], __input: AutoScalingDescribeLifecycleHooksType)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeLifecycleHooks.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeLifecycleHooks.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeLifecycleHooks.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingDescribeLifecycleHooksType`](#aws-cdk-sdk.autoscaling.AutoScalingDescribeLifecycleHooksType)

---



#### Properties <a name="Properties"></a>

##### `lifecycleHooks`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeLifecycleHooks.property.lifecycleHooks"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingLifecycleHook`](#aws-cdk-sdk.autoscaling.AutoScalingLifecycleHook)[]

---


### AutoScalingResponsesDescribeLifecycleHookTypes <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeLifecycleHookTypes"></a>

#### Initializer <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeLifecycleHookTypes.Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

new autoscaling.AutoScalingResponsesDescribeLifecycleHookTypes(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeLifecycleHookTypes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeLifecycleHookTypes.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `lifecycleHookTypes`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeLifecycleHookTypes.property.lifecycleHookTypes"></a>

- *Type:* `string`[]

---


### AutoScalingResponsesDescribeLoadBalancers <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeLoadBalancers"></a>

#### Initializer <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeLoadBalancers.Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

new autoscaling.AutoScalingResponsesDescribeLoadBalancers(__scope: Construct, __resources: string[], __input: AutoScalingDescribeLoadBalancersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeLoadBalancers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeLoadBalancers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeLoadBalancers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingDescribeLoadBalancersRequest`](#aws-cdk-sdk.autoscaling.AutoScalingDescribeLoadBalancersRequest)

---



#### Properties <a name="Properties"></a>

##### `loadBalancers`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeLoadBalancers.property.loadBalancers"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingLoadBalancerState`](#aws-cdk-sdk.autoscaling.AutoScalingLoadBalancerState)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeLoadBalancers.property.nextToken"></a>

- *Type:* `string`

---


### AutoScalingResponsesDescribeLoadBalancerTargetGroups <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeLoadBalancerTargetGroups"></a>

#### Initializer <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeLoadBalancerTargetGroups.Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

new autoscaling.AutoScalingResponsesDescribeLoadBalancerTargetGroups(__scope: Construct, __resources: string[], __input: AutoScalingDescribeLoadBalancerTargetGroupsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeLoadBalancerTargetGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeLoadBalancerTargetGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeLoadBalancerTargetGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingDescribeLoadBalancerTargetGroupsRequest`](#aws-cdk-sdk.autoscaling.AutoScalingDescribeLoadBalancerTargetGroupsRequest)

---



#### Properties <a name="Properties"></a>

##### `loadBalancerTargetGroups`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeLoadBalancerTargetGroups.property.loadBalancerTargetGroups"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingLoadBalancerTargetGroupState`](#aws-cdk-sdk.autoscaling.AutoScalingLoadBalancerTargetGroupState)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeLoadBalancerTargetGroups.property.nextToken"></a>

- *Type:* `string`

---


### AutoScalingResponsesDescribeMetricCollectionTypes <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeMetricCollectionTypes"></a>

#### Initializer <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeMetricCollectionTypes.Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

new autoscaling.AutoScalingResponsesDescribeMetricCollectionTypes(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeMetricCollectionTypes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeMetricCollectionTypes.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `granularities`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeMetricCollectionTypes.property.granularities"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingMetricGranularityType`](#aws-cdk-sdk.autoscaling.AutoScalingMetricGranularityType)[]

---

##### `metrics`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeMetricCollectionTypes.property.metrics"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingMetricCollectionType`](#aws-cdk-sdk.autoscaling.AutoScalingMetricCollectionType)[]

---


### AutoScalingResponsesDescribeNotificationConfigurations <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeNotificationConfigurations"></a>

#### Initializer <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeNotificationConfigurations.Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

new autoscaling.AutoScalingResponsesDescribeNotificationConfigurations(__scope: Construct, __resources: string[], __input: AutoScalingDescribeNotificationConfigurationsType)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeNotificationConfigurations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeNotificationConfigurations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeNotificationConfigurations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingDescribeNotificationConfigurationsType`](#aws-cdk-sdk.autoscaling.AutoScalingDescribeNotificationConfigurationsType)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeNotificationConfigurations.property.nextToken"></a>

- *Type:* `string`

---

##### `notificationConfigurations`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeNotificationConfigurations.property.notificationConfigurations"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingNotificationConfiguration`](#aws-cdk-sdk.autoscaling.AutoScalingNotificationConfiguration)[]

---


### AutoScalingResponsesDescribePolicies <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribePolicies"></a>

#### Initializer <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribePolicies.Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

new autoscaling.AutoScalingResponsesDescribePolicies(__scope: Construct, __resources: string[], __input: AutoScalingDescribePoliciesType)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribePolicies.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribePolicies.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribePolicies.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingDescribePoliciesType`](#aws-cdk-sdk.autoscaling.AutoScalingDescribePoliciesType)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribePolicies.property.nextToken"></a>

- *Type:* `string`

---

##### `scalingPolicies`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribePolicies.property.scalingPolicies"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingScalingPolicy`](#aws-cdk-sdk.autoscaling.AutoScalingScalingPolicy)[]

---


### AutoScalingResponsesDescribeScalingActivities <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeScalingActivities"></a>

#### Initializer <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeScalingActivities.Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

new autoscaling.AutoScalingResponsesDescribeScalingActivities(__scope: Construct, __resources: string[], __input: AutoScalingDescribeScalingActivitiesType)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeScalingActivities.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeScalingActivities.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeScalingActivities.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingDescribeScalingActivitiesType`](#aws-cdk-sdk.autoscaling.AutoScalingDescribeScalingActivitiesType)

---



#### Properties <a name="Properties"></a>

##### `activities`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeScalingActivities.property.activities"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingActivity`](#aws-cdk-sdk.autoscaling.AutoScalingActivity)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeScalingActivities.property.nextToken"></a>

- *Type:* `string`

---


### AutoScalingResponsesDescribeScalingProcessTypes <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeScalingProcessTypes"></a>

#### Initializer <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeScalingProcessTypes.Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

new autoscaling.AutoScalingResponsesDescribeScalingProcessTypes(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeScalingProcessTypes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeScalingProcessTypes.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `processes`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeScalingProcessTypes.property.processes"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingProcessType`](#aws-cdk-sdk.autoscaling.AutoScalingProcessType)[]

---


### AutoScalingResponsesDescribeScheduledActions <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeScheduledActions"></a>

#### Initializer <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeScheduledActions.Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

new autoscaling.AutoScalingResponsesDescribeScheduledActions(__scope: Construct, __resources: string[], __input: AutoScalingDescribeScheduledActionsType)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeScheduledActions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeScheduledActions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeScheduledActions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingDescribeScheduledActionsType`](#aws-cdk-sdk.autoscaling.AutoScalingDescribeScheduledActionsType)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeScheduledActions.property.nextToken"></a>

- *Type:* `string`

---

##### `scheduledUpdateGroupActions`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeScheduledActions.property.scheduledUpdateGroupActions"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingScheduledUpdateGroupAction`](#aws-cdk-sdk.autoscaling.AutoScalingScheduledUpdateGroupAction)[]

---


### AutoScalingResponsesDescribeTags <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeTags"></a>

#### Initializer <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeTags.Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

new autoscaling.AutoScalingResponsesDescribeTags(__scope: Construct, __resources: string[], __input: AutoScalingDescribeTagsType)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeTags.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeTags.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeTags.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingDescribeTagsType`](#aws-cdk-sdk.autoscaling.AutoScalingDescribeTagsType)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeTags.property.nextToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeTags.property.tags"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingTagDescription`](#aws-cdk-sdk.autoscaling.AutoScalingTagDescription)[]

---


### AutoScalingResponsesDescribeTerminationPolicyTypes <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeTerminationPolicyTypes"></a>

#### Initializer <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeTerminationPolicyTypes.Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

new autoscaling.AutoScalingResponsesDescribeTerminationPolicyTypes(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeTerminationPolicyTypes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeTerminationPolicyTypes.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `terminationPolicyTypes`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDescribeTerminationPolicyTypes.property.terminationPolicyTypes"></a>

- *Type:* `string`[]

---


### AutoScalingResponsesDetachInstances <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDetachInstances"></a>

#### Initializer <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDetachInstances.Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

new autoscaling.AutoScalingResponsesDetachInstances(__scope: Construct, __resources: string[], __input: AutoScalingDetachInstancesQuery)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDetachInstances.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDetachInstances.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDetachInstances.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingDetachInstancesQuery`](#aws-cdk-sdk.autoscaling.AutoScalingDetachInstancesQuery)

---



#### Properties <a name="Properties"></a>

##### `activities`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesDetachInstances.property.activities"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingActivity`](#aws-cdk-sdk.autoscaling.AutoScalingActivity)[]

---


### AutoScalingResponsesEnterStandby <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesEnterStandby"></a>

#### Initializer <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesEnterStandby.Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

new autoscaling.AutoScalingResponsesEnterStandby(__scope: Construct, __resources: string[], __input: AutoScalingEnterStandbyQuery)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesEnterStandby.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesEnterStandby.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesEnterStandby.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingEnterStandbyQuery`](#aws-cdk-sdk.autoscaling.AutoScalingEnterStandbyQuery)

---



#### Properties <a name="Properties"></a>

##### `activities`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesEnterStandby.property.activities"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingActivity`](#aws-cdk-sdk.autoscaling.AutoScalingActivity)[]

---


### AutoScalingResponsesExitStandby <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesExitStandby"></a>

#### Initializer <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesExitStandby.Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

new autoscaling.AutoScalingResponsesExitStandby(__scope: Construct, __resources: string[], __input: AutoScalingExitStandbyQuery)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesExitStandby.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesExitStandby.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesExitStandby.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingExitStandbyQuery`](#aws-cdk-sdk.autoscaling.AutoScalingExitStandbyQuery)

---



#### Properties <a name="Properties"></a>

##### `activities`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesExitStandby.property.activities"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingActivity`](#aws-cdk-sdk.autoscaling.AutoScalingActivity)[]

---


### AutoScalingResponsesPutScalingPolicy <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesPutScalingPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesPutScalingPolicy.Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

new autoscaling.AutoScalingResponsesPutScalingPolicy(__scope: Construct, __resources: string[], __input: AutoScalingPutScalingPolicyType)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesPutScalingPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesPutScalingPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesPutScalingPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingPutScalingPolicyType`](#aws-cdk-sdk.autoscaling.AutoScalingPutScalingPolicyType)

---



#### Properties <a name="Properties"></a>

##### `alarms`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesPutScalingPolicy.property.alarms"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingAlarm`](#aws-cdk-sdk.autoscaling.AutoScalingAlarm)[]

---

##### `policyArn`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesPutScalingPolicy.property.policyArn"></a>

- *Type:* `string`

---


### AutoScalingResponsesStartInstanceRefresh <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesStartInstanceRefresh"></a>

#### Initializer <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesStartInstanceRefresh.Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

new autoscaling.AutoScalingResponsesStartInstanceRefresh(__scope: Construct, __resources: string[], __input: AutoScalingStartInstanceRefreshType)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesStartInstanceRefresh.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesStartInstanceRefresh.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesStartInstanceRefresh.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingStartInstanceRefreshType`](#aws-cdk-sdk.autoscaling.AutoScalingStartInstanceRefreshType)

---



#### Properties <a name="Properties"></a>

##### `instanceRefreshId`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesStartInstanceRefresh.property.instanceRefreshId"></a>

- *Type:* `string`

---


### AutoScalingResponsesTerminateInstanceInAutoScalingGroup <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesTerminateInstanceInAutoScalingGroup"></a>

#### Initializer <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesTerminateInstanceInAutoScalingGroup.Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

new autoscaling.AutoScalingResponsesTerminateInstanceInAutoScalingGroup(__scope: Construct, __resources: string[], __input: AutoScalingTerminateInstanceInAutoScalingGroupType)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesTerminateInstanceInAutoScalingGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesTerminateInstanceInAutoScalingGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesTerminateInstanceInAutoScalingGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingTerminateInstanceInAutoScalingGroupType`](#aws-cdk-sdk.autoscaling.AutoScalingTerminateInstanceInAutoScalingGroupType)

---



#### Properties <a name="Properties"></a>

##### `activity`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesTerminateInstanceInAutoScalingGroup.property.activity"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingResponsesTerminateInstanceInAutoScalingGroupActivity`](#aws-cdk-sdk.autoscaling.AutoScalingResponsesTerminateInstanceInAutoScalingGroupActivity)

---


### AutoScalingResponsesTerminateInstanceInAutoScalingGroupActivity <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesTerminateInstanceInAutoScalingGroupActivity"></a>

#### Initializer <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesTerminateInstanceInAutoScalingGroupActivity.Initializer"></a>

```typescript
import { autoscaling } from 'aws-cdk-sdk'

new autoscaling.AutoScalingResponsesTerminateInstanceInAutoScalingGroupActivity(__scope: Construct, __resources: string[], __input: AutoScalingTerminateInstanceInAutoScalingGroupType)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesTerminateInstanceInAutoScalingGroupActivity.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesTerminateInstanceInAutoScalingGroupActivity.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesTerminateInstanceInAutoScalingGroupActivity.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.autoscaling.AutoScalingTerminateInstanceInAutoScalingGroupType`](#aws-cdk-sdk.autoscaling.AutoScalingTerminateInstanceInAutoScalingGroupType)

---



#### Properties <a name="Properties"></a>

##### `activityId`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesTerminateInstanceInAutoScalingGroupActivity.property.activityId"></a>

- *Type:* `string`

---

##### `autoScalingGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesTerminateInstanceInAutoScalingGroupActivity.property.autoScalingGroupName"></a>

- *Type:* `string`

---

##### `cause`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesTerminateInstanceInAutoScalingGroupActivity.property.cause"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesTerminateInstanceInAutoScalingGroupActivity.property.description"></a>

- *Type:* `string`

---

##### `details`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesTerminateInstanceInAutoScalingGroupActivity.property.details"></a>

- *Type:* `string`

---

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesTerminateInstanceInAutoScalingGroupActivity.property.endTime"></a>

- *Type:* `string`

---

##### `progress`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesTerminateInstanceInAutoScalingGroupActivity.property.progress"></a>

- *Type:* `number`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesTerminateInstanceInAutoScalingGroupActivity.property.startTime"></a>

- *Type:* `string`

---

##### `statusCode`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesTerminateInstanceInAutoScalingGroupActivity.property.statusCode"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Required</sup> <a name="aws-cdk-sdk.autoscaling.AutoScalingResponsesTerminateInstanceInAutoScalingGroupActivity.property.statusMessage"></a>

- *Type:* `string`

---



