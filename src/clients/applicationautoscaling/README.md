# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### ApplicationAutoScalingClient <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingClient"></a>

#### Initializer <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingClient.Initializer"></a>

```typescript
import { applicationautoscaling } from 'aws-cdk-sdk'

new applicationautoscaling.ApplicationAutoScalingClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `deleteScalingPolicy` <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingClient.deleteScalingPolicy"></a>

```typescript
public deleteScalingPolicy(input: ApplicationAutoScalingDeleteScalingPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDeleteScalingPolicyRequest`](#aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDeleteScalingPolicyRequest)

---

##### `deleteScheduledAction` <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingClient.deleteScheduledAction"></a>

```typescript
public deleteScheduledAction(input: ApplicationAutoScalingDeleteScheduledActionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDeleteScheduledActionRequest`](#aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDeleteScheduledActionRequest)

---

##### `deregisterScalableTarget` <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingClient.deregisterScalableTarget"></a>

```typescript
public deregisterScalableTarget(input: ApplicationAutoScalingDeregisterScalableTargetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDeregisterScalableTargetRequest`](#aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDeregisterScalableTargetRequest)

---

##### `describeScalableTargets` <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingClient.describeScalableTargets"></a>

```typescript
public describeScalableTargets(input: ApplicationAutoScalingDescribeScalableTargetsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDescribeScalableTargetsRequest`](#aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDescribeScalableTargetsRequest)

---

##### `describeScalingActivities` <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingClient.describeScalingActivities"></a>

```typescript
public describeScalingActivities(input: ApplicationAutoScalingDescribeScalingActivitiesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDescribeScalingActivitiesRequest`](#aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDescribeScalingActivitiesRequest)

---

##### `describeScalingPolicies` <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingClient.describeScalingPolicies"></a>

```typescript
public describeScalingPolicies(input: ApplicationAutoScalingDescribeScalingPoliciesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDescribeScalingPoliciesRequest`](#aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDescribeScalingPoliciesRequest)

---

##### `describeScheduledActions` <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingClient.describeScheduledActions"></a>

```typescript
public describeScheduledActions(input: ApplicationAutoScalingDescribeScheduledActionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDescribeScheduledActionsRequest`](#aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDescribeScheduledActionsRequest)

---

##### `putScalingPolicy` <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingClient.putScalingPolicy"></a>

```typescript
public putScalingPolicy(input: ApplicationAutoScalingPutScalingPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingPutScalingPolicyRequest`](#aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingPutScalingPolicyRequest)

---

##### `putScheduledAction` <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingClient.putScheduledAction"></a>

```typescript
public putScheduledAction(input: ApplicationAutoScalingPutScheduledActionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingPutScheduledActionRequest`](#aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingPutScheduledActionRequest)

---

##### `registerScalableTarget` <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingClient.registerScalableTarget"></a>

```typescript
public registerScalableTarget(input: ApplicationAutoScalingRegisterScalableTargetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingRegisterScalableTargetRequest`](#aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingRegisterScalableTargetRequest)

---




## Structs <a name="Structs"></a>

### ApplicationAutoScalingAlarm <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingAlarm"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationautoscaling } from 'aws-cdk-sdk'

const applicationAutoScalingAlarm: applicationautoscaling.ApplicationAutoScalingAlarm = { ... }
```

##### `alarmArn`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingAlarm.property.alarmArn"></a>

- *Type:* `string`

---

##### `alarmName`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingAlarm.property.alarmName"></a>

- *Type:* `string`

---

### ApplicationAutoScalingCustomizedMetricSpecification <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingCustomizedMetricSpecification"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationautoscaling } from 'aws-cdk-sdk'

const applicationAutoScalingCustomizedMetricSpecification: applicationautoscaling.ApplicationAutoScalingCustomizedMetricSpecification = { ... }
```

##### `metricName`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingCustomizedMetricSpecification.property.metricName"></a>

- *Type:* `string`

---

##### `namespace`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingCustomizedMetricSpecification.property.namespace"></a>

- *Type:* `string`

---

##### `statistic`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingCustomizedMetricSpecification.property.statistic"></a>

- *Type:* `string`

---

##### `dimensions`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingCustomizedMetricSpecification.property.dimensions"></a>

- *Type:* [`aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingMetricDimension`](#aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingMetricDimension)[]

---

##### `unit`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingCustomizedMetricSpecification.property.unit"></a>

- *Type:* `string`

---

### ApplicationAutoScalingDeleteScalingPolicyRequest <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDeleteScalingPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationautoscaling } from 'aws-cdk-sdk'

const applicationAutoScalingDeleteScalingPolicyRequest: applicationautoscaling.ApplicationAutoScalingDeleteScalingPolicyRequest = { ... }
```

##### `policyName`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDeleteScalingPolicyRequest.property.policyName"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDeleteScalingPolicyRequest.property.resourceId"></a>

- *Type:* `string`

---

##### `scalableDimension`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDeleteScalingPolicyRequest.property.scalableDimension"></a>

- *Type:* `string`

---

##### `serviceNamespace`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDeleteScalingPolicyRequest.property.serviceNamespace"></a>

- *Type:* `string`

---

### ApplicationAutoScalingDeleteScalingPolicyResponse <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDeleteScalingPolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationautoscaling } from 'aws-cdk-sdk'

const applicationAutoScalingDeleteScalingPolicyResponse: applicationautoscaling.ApplicationAutoScalingDeleteScalingPolicyResponse = { ... }
```

### ApplicationAutoScalingDeleteScheduledActionRequest <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDeleteScheduledActionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationautoscaling } from 'aws-cdk-sdk'

const applicationAutoScalingDeleteScheduledActionRequest: applicationautoscaling.ApplicationAutoScalingDeleteScheduledActionRequest = { ... }
```

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDeleteScheduledActionRequest.property.resourceId"></a>

- *Type:* `string`

---

##### `scalableDimension`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDeleteScheduledActionRequest.property.scalableDimension"></a>

- *Type:* `string`

---

##### `scheduledActionName`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDeleteScheduledActionRequest.property.scheduledActionName"></a>

- *Type:* `string`

---

##### `serviceNamespace`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDeleteScheduledActionRequest.property.serviceNamespace"></a>

- *Type:* `string`

---

### ApplicationAutoScalingDeleteScheduledActionResponse <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDeleteScheduledActionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationautoscaling } from 'aws-cdk-sdk'

const applicationAutoScalingDeleteScheduledActionResponse: applicationautoscaling.ApplicationAutoScalingDeleteScheduledActionResponse = { ... }
```

### ApplicationAutoScalingDeregisterScalableTargetRequest <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDeregisterScalableTargetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationautoscaling } from 'aws-cdk-sdk'

const applicationAutoScalingDeregisterScalableTargetRequest: applicationautoscaling.ApplicationAutoScalingDeregisterScalableTargetRequest = { ... }
```

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDeregisterScalableTargetRequest.property.resourceId"></a>

- *Type:* `string`

---

##### `scalableDimension`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDeregisterScalableTargetRequest.property.scalableDimension"></a>

- *Type:* `string`

---

##### `serviceNamespace`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDeregisterScalableTargetRequest.property.serviceNamespace"></a>

- *Type:* `string`

---

### ApplicationAutoScalingDeregisterScalableTargetResponse <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDeregisterScalableTargetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationautoscaling } from 'aws-cdk-sdk'

const applicationAutoScalingDeregisterScalableTargetResponse: applicationautoscaling.ApplicationAutoScalingDeregisterScalableTargetResponse = { ... }
```

### ApplicationAutoScalingDescribeScalableTargetsRequest <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDescribeScalableTargetsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationautoscaling } from 'aws-cdk-sdk'

const applicationAutoScalingDescribeScalableTargetsRequest: applicationautoscaling.ApplicationAutoScalingDescribeScalableTargetsRequest = { ... }
```

##### `serviceNamespace`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDescribeScalableTargetsRequest.property.serviceNamespace"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDescribeScalableTargetsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDescribeScalableTargetsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `resourceIds`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDescribeScalableTargetsRequest.property.resourceIds"></a>

- *Type:* `string`[]

---

##### `scalableDimension`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDescribeScalableTargetsRequest.property.scalableDimension"></a>

- *Type:* `string`

---

### ApplicationAutoScalingDescribeScalableTargetsResponse <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDescribeScalableTargetsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationautoscaling } from 'aws-cdk-sdk'

const applicationAutoScalingDescribeScalableTargetsResponse: applicationautoscaling.ApplicationAutoScalingDescribeScalableTargetsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDescribeScalableTargetsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `scalableTargets`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDescribeScalableTargetsResponse.property.scalableTargets"></a>

- *Type:* [`aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingScalableTarget`](#aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingScalableTarget)[]

---

### ApplicationAutoScalingDescribeScalingActivitiesRequest <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDescribeScalingActivitiesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationautoscaling } from 'aws-cdk-sdk'

const applicationAutoScalingDescribeScalingActivitiesRequest: applicationautoscaling.ApplicationAutoScalingDescribeScalingActivitiesRequest = { ... }
```

##### `serviceNamespace`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDescribeScalingActivitiesRequest.property.serviceNamespace"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDescribeScalingActivitiesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDescribeScalingActivitiesRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDescribeScalingActivitiesRequest.property.resourceId"></a>

- *Type:* `string`

---

##### `scalableDimension`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDescribeScalingActivitiesRequest.property.scalableDimension"></a>

- *Type:* `string`

---

### ApplicationAutoScalingDescribeScalingActivitiesResponse <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDescribeScalingActivitiesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationautoscaling } from 'aws-cdk-sdk'

const applicationAutoScalingDescribeScalingActivitiesResponse: applicationautoscaling.ApplicationAutoScalingDescribeScalingActivitiesResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDescribeScalingActivitiesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `scalingActivities`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDescribeScalingActivitiesResponse.property.scalingActivities"></a>

- *Type:* [`aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingScalingActivity`](#aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingScalingActivity)[]

---

### ApplicationAutoScalingDescribeScalingPoliciesRequest <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDescribeScalingPoliciesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationautoscaling } from 'aws-cdk-sdk'

const applicationAutoScalingDescribeScalingPoliciesRequest: applicationautoscaling.ApplicationAutoScalingDescribeScalingPoliciesRequest = { ... }
```

##### `serviceNamespace`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDescribeScalingPoliciesRequest.property.serviceNamespace"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDescribeScalingPoliciesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDescribeScalingPoliciesRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `policyNames`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDescribeScalingPoliciesRequest.property.policyNames"></a>

- *Type:* `string`[]

---

##### `resourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDescribeScalingPoliciesRequest.property.resourceId"></a>

- *Type:* `string`

---

##### `scalableDimension`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDescribeScalingPoliciesRequest.property.scalableDimension"></a>

- *Type:* `string`

---

### ApplicationAutoScalingDescribeScalingPoliciesResponse <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDescribeScalingPoliciesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationautoscaling } from 'aws-cdk-sdk'

const applicationAutoScalingDescribeScalingPoliciesResponse: applicationautoscaling.ApplicationAutoScalingDescribeScalingPoliciesResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDescribeScalingPoliciesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `scalingPolicies`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDescribeScalingPoliciesResponse.property.scalingPolicies"></a>

- *Type:* [`aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingScalingPolicy`](#aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingScalingPolicy)[]

---

### ApplicationAutoScalingDescribeScheduledActionsRequest <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDescribeScheduledActionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationautoscaling } from 'aws-cdk-sdk'

const applicationAutoScalingDescribeScheduledActionsRequest: applicationautoscaling.ApplicationAutoScalingDescribeScheduledActionsRequest = { ... }
```

##### `serviceNamespace`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDescribeScheduledActionsRequest.property.serviceNamespace"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDescribeScheduledActionsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDescribeScheduledActionsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDescribeScheduledActionsRequest.property.resourceId"></a>

- *Type:* `string`

---

##### `scalableDimension`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDescribeScheduledActionsRequest.property.scalableDimension"></a>

- *Type:* `string`

---

##### `scheduledActionNames`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDescribeScheduledActionsRequest.property.scheduledActionNames"></a>

- *Type:* `string`[]

---

### ApplicationAutoScalingDescribeScheduledActionsResponse <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDescribeScheduledActionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationautoscaling } from 'aws-cdk-sdk'

const applicationAutoScalingDescribeScheduledActionsResponse: applicationautoscaling.ApplicationAutoScalingDescribeScheduledActionsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDescribeScheduledActionsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `scheduledActions`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDescribeScheduledActionsResponse.property.scheduledActions"></a>

- *Type:* [`aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingScheduledAction`](#aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingScheduledAction)[]

---

### ApplicationAutoScalingMetricDimension <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingMetricDimension"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationautoscaling } from 'aws-cdk-sdk'

const applicationAutoScalingMetricDimension: applicationautoscaling.ApplicationAutoScalingMetricDimension = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingMetricDimension.property.name"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingMetricDimension.property.value"></a>

- *Type:* `string`

---

### ApplicationAutoScalingPredefinedMetricSpecification <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingPredefinedMetricSpecification"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationautoscaling } from 'aws-cdk-sdk'

const applicationAutoScalingPredefinedMetricSpecification: applicationautoscaling.ApplicationAutoScalingPredefinedMetricSpecification = { ... }
```

##### `predefinedMetricType`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingPredefinedMetricSpecification.property.predefinedMetricType"></a>

- *Type:* `string`

---

##### `resourceLabel`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingPredefinedMetricSpecification.property.resourceLabel"></a>

- *Type:* `string`

---

### ApplicationAutoScalingPutScalingPolicyRequest <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingPutScalingPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationautoscaling } from 'aws-cdk-sdk'

const applicationAutoScalingPutScalingPolicyRequest: applicationautoscaling.ApplicationAutoScalingPutScalingPolicyRequest = { ... }
```

##### `policyName`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingPutScalingPolicyRequest.property.policyName"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingPutScalingPolicyRequest.property.resourceId"></a>

- *Type:* `string`

---

##### `scalableDimension`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingPutScalingPolicyRequest.property.scalableDimension"></a>

- *Type:* `string`

---

##### `serviceNamespace`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingPutScalingPolicyRequest.property.serviceNamespace"></a>

- *Type:* `string`

---

##### `policyType`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingPutScalingPolicyRequest.property.policyType"></a>

- *Type:* `string`

---

##### `stepScalingPolicyConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingPutScalingPolicyRequest.property.stepScalingPolicyConfiguration"></a>

- *Type:* [`aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingStepScalingPolicyConfiguration`](#aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingStepScalingPolicyConfiguration)

---

##### `targetTrackingScalingPolicyConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingPutScalingPolicyRequest.property.targetTrackingScalingPolicyConfiguration"></a>

- *Type:* [`aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingTargetTrackingScalingPolicyConfiguration`](#aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingTargetTrackingScalingPolicyConfiguration)

---

### ApplicationAutoScalingPutScalingPolicyResponse <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingPutScalingPolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationautoscaling } from 'aws-cdk-sdk'

const applicationAutoScalingPutScalingPolicyResponse: applicationautoscaling.ApplicationAutoScalingPutScalingPolicyResponse = { ... }
```

##### `policyArn`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingPutScalingPolicyResponse.property.policyArn"></a>

- *Type:* `string`

---

##### `alarms`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingPutScalingPolicyResponse.property.alarms"></a>

- *Type:* [`aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingAlarm`](#aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingAlarm)[]

---

### ApplicationAutoScalingPutScheduledActionRequest <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingPutScheduledActionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationautoscaling } from 'aws-cdk-sdk'

const applicationAutoScalingPutScheduledActionRequest: applicationautoscaling.ApplicationAutoScalingPutScheduledActionRequest = { ... }
```

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingPutScheduledActionRequest.property.resourceId"></a>

- *Type:* `string`

---

##### `scalableDimension`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingPutScheduledActionRequest.property.scalableDimension"></a>

- *Type:* `string`

---

##### `scheduledActionName`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingPutScheduledActionRequest.property.scheduledActionName"></a>

- *Type:* `string`

---

##### `serviceNamespace`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingPutScheduledActionRequest.property.serviceNamespace"></a>

- *Type:* `string`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingPutScheduledActionRequest.property.endTime"></a>

- *Type:* `string`

---

##### `scalableTargetAction`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingPutScheduledActionRequest.property.scalableTargetAction"></a>

- *Type:* [`aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingScalableTargetAction`](#aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingScalableTargetAction)

---

##### `schedule`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingPutScheduledActionRequest.property.schedule"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingPutScheduledActionRequest.property.startTime"></a>

- *Type:* `string`

---

### ApplicationAutoScalingPutScheduledActionResponse <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingPutScheduledActionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationautoscaling } from 'aws-cdk-sdk'

const applicationAutoScalingPutScheduledActionResponse: applicationautoscaling.ApplicationAutoScalingPutScheduledActionResponse = { ... }
```

### ApplicationAutoScalingRegisterScalableTargetRequest <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingRegisterScalableTargetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationautoscaling } from 'aws-cdk-sdk'

const applicationAutoScalingRegisterScalableTargetRequest: applicationautoscaling.ApplicationAutoScalingRegisterScalableTargetRequest = { ... }
```

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingRegisterScalableTargetRequest.property.resourceId"></a>

- *Type:* `string`

---

##### `scalableDimension`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingRegisterScalableTargetRequest.property.scalableDimension"></a>

- *Type:* `string`

---

##### `serviceNamespace`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingRegisterScalableTargetRequest.property.serviceNamespace"></a>

- *Type:* `string`

---

##### `maxCapacity`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingRegisterScalableTargetRequest.property.maxCapacity"></a>

- *Type:* `number`

---

##### `minCapacity`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingRegisterScalableTargetRequest.property.minCapacity"></a>

- *Type:* `number`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingRegisterScalableTargetRequest.property.roleArn"></a>

- *Type:* `string`

---

##### `suspendedState`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingRegisterScalableTargetRequest.property.suspendedState"></a>

- *Type:* [`aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingSuspendedState`](#aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingSuspendedState)

---

### ApplicationAutoScalingRegisterScalableTargetResponse <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingRegisterScalableTargetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationautoscaling } from 'aws-cdk-sdk'

const applicationAutoScalingRegisterScalableTargetResponse: applicationautoscaling.ApplicationAutoScalingRegisterScalableTargetResponse = { ... }
```

### ApplicationAutoScalingScalableTarget <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingScalableTarget"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationautoscaling } from 'aws-cdk-sdk'

const applicationAutoScalingScalableTarget: applicationautoscaling.ApplicationAutoScalingScalableTarget = { ... }
```

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingScalableTarget.property.creationTime"></a>

- *Type:* `string`

---

##### `maxCapacity`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingScalableTarget.property.maxCapacity"></a>

- *Type:* `number`

---

##### `minCapacity`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingScalableTarget.property.minCapacity"></a>

- *Type:* `number`

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingScalableTarget.property.resourceId"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingScalableTarget.property.roleArn"></a>

- *Type:* `string`

---

##### `scalableDimension`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingScalableTarget.property.scalableDimension"></a>

- *Type:* `string`

---

##### `serviceNamespace`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingScalableTarget.property.serviceNamespace"></a>

- *Type:* `string`

---

##### `suspendedState`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingScalableTarget.property.suspendedState"></a>

- *Type:* [`aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingSuspendedState`](#aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingSuspendedState)

---

### ApplicationAutoScalingScalableTargetAction <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingScalableTargetAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationautoscaling } from 'aws-cdk-sdk'

const applicationAutoScalingScalableTargetAction: applicationautoscaling.ApplicationAutoScalingScalableTargetAction = { ... }
```

##### `maxCapacity`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingScalableTargetAction.property.maxCapacity"></a>

- *Type:* `number`

---

##### `minCapacity`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingScalableTargetAction.property.minCapacity"></a>

- *Type:* `number`

---

### ApplicationAutoScalingScalingActivity <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingScalingActivity"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationautoscaling } from 'aws-cdk-sdk'

const applicationAutoScalingScalingActivity: applicationautoscaling.ApplicationAutoScalingScalingActivity = { ... }
```

##### `activityId`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingScalingActivity.property.activityId"></a>

- *Type:* `string`

---

##### `cause`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingScalingActivity.property.cause"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingScalingActivity.property.description"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingScalingActivity.property.resourceId"></a>

- *Type:* `string`

---

##### `scalableDimension`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingScalingActivity.property.scalableDimension"></a>

- *Type:* `string`

---

##### `serviceNamespace`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingScalingActivity.property.serviceNamespace"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingScalingActivity.property.startTime"></a>

- *Type:* `string`

---

##### `statusCode`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingScalingActivity.property.statusCode"></a>

- *Type:* `string`

---

##### `details`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingScalingActivity.property.details"></a>

- *Type:* `string`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingScalingActivity.property.endTime"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingScalingActivity.property.statusMessage"></a>

- *Type:* `string`

---

### ApplicationAutoScalingScalingPolicy <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingScalingPolicy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationautoscaling } from 'aws-cdk-sdk'

const applicationAutoScalingScalingPolicy: applicationautoscaling.ApplicationAutoScalingScalingPolicy = { ... }
```

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingScalingPolicy.property.creationTime"></a>

- *Type:* `string`

---

##### `policyArn`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingScalingPolicy.property.policyArn"></a>

- *Type:* `string`

---

##### `policyName`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingScalingPolicy.property.policyName"></a>

- *Type:* `string`

---

##### `policyType`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingScalingPolicy.property.policyType"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingScalingPolicy.property.resourceId"></a>

- *Type:* `string`

---

##### `scalableDimension`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingScalingPolicy.property.scalableDimension"></a>

- *Type:* `string`

---

##### `serviceNamespace`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingScalingPolicy.property.serviceNamespace"></a>

- *Type:* `string`

---

##### `alarms`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingScalingPolicy.property.alarms"></a>

- *Type:* [`aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingAlarm`](#aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingAlarm)[]

---

##### `stepScalingPolicyConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingScalingPolicy.property.stepScalingPolicyConfiguration"></a>

- *Type:* [`aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingStepScalingPolicyConfiguration`](#aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingStepScalingPolicyConfiguration)

---

##### `targetTrackingScalingPolicyConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingScalingPolicy.property.targetTrackingScalingPolicyConfiguration"></a>

- *Type:* [`aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingTargetTrackingScalingPolicyConfiguration`](#aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingTargetTrackingScalingPolicyConfiguration)

---

### ApplicationAutoScalingScheduledAction <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingScheduledAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationautoscaling } from 'aws-cdk-sdk'

const applicationAutoScalingScheduledAction: applicationautoscaling.ApplicationAutoScalingScheduledAction = { ... }
```

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingScheduledAction.property.creationTime"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingScheduledAction.property.resourceId"></a>

- *Type:* `string`

---

##### `schedule`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingScheduledAction.property.schedule"></a>

- *Type:* `string`

---

##### `scheduledActionArn`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingScheduledAction.property.scheduledActionArn"></a>

- *Type:* `string`

---

##### `scheduledActionName`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingScheduledAction.property.scheduledActionName"></a>

- *Type:* `string`

---

##### `serviceNamespace`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingScheduledAction.property.serviceNamespace"></a>

- *Type:* `string`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingScheduledAction.property.endTime"></a>

- *Type:* `string`

---

##### `scalableDimension`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingScheduledAction.property.scalableDimension"></a>

- *Type:* `string`

---

##### `scalableTargetAction`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingScheduledAction.property.scalableTargetAction"></a>

- *Type:* [`aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingScalableTargetAction`](#aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingScalableTargetAction)

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingScheduledAction.property.startTime"></a>

- *Type:* `string`

---

### ApplicationAutoScalingStepAdjustment <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingStepAdjustment"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationautoscaling } from 'aws-cdk-sdk'

const applicationAutoScalingStepAdjustment: applicationautoscaling.ApplicationAutoScalingStepAdjustment = { ... }
```

##### `scalingAdjustment`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingStepAdjustment.property.scalingAdjustment"></a>

- *Type:* `number`

---

##### `metricIntervalLowerBound`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingStepAdjustment.property.metricIntervalLowerBound"></a>

- *Type:* `number`

---

##### `metricIntervalUpperBound`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingStepAdjustment.property.metricIntervalUpperBound"></a>

- *Type:* `number`

---

### ApplicationAutoScalingStepScalingPolicyConfiguration <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingStepScalingPolicyConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationautoscaling } from 'aws-cdk-sdk'

const applicationAutoScalingStepScalingPolicyConfiguration: applicationautoscaling.ApplicationAutoScalingStepScalingPolicyConfiguration = { ... }
```

##### `adjustmentType`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingStepScalingPolicyConfiguration.property.adjustmentType"></a>

- *Type:* `string`

---

##### `cooldown`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingStepScalingPolicyConfiguration.property.cooldown"></a>

- *Type:* `number`

---

##### `metricAggregationType`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingStepScalingPolicyConfiguration.property.metricAggregationType"></a>

- *Type:* `string`

---

##### `minAdjustmentMagnitude`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingStepScalingPolicyConfiguration.property.minAdjustmentMagnitude"></a>

- *Type:* `number`

---

##### `stepAdjustments`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingStepScalingPolicyConfiguration.property.stepAdjustments"></a>

- *Type:* [`aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingStepAdjustment`](#aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingStepAdjustment)[]

---

### ApplicationAutoScalingSuspendedState <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingSuspendedState"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationautoscaling } from 'aws-cdk-sdk'

const applicationAutoScalingSuspendedState: applicationautoscaling.ApplicationAutoScalingSuspendedState = { ... }
```

##### `dynamicScalingInSuspended`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingSuspendedState.property.dynamicScalingInSuspended"></a>

- *Type:* `boolean`

---

##### `dynamicScalingOutSuspended`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingSuspendedState.property.dynamicScalingOutSuspended"></a>

- *Type:* `boolean`

---

##### `scheduledScalingSuspended`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingSuspendedState.property.scheduledScalingSuspended"></a>

- *Type:* `boolean`

---

### ApplicationAutoScalingTargetTrackingScalingPolicyConfiguration <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingTargetTrackingScalingPolicyConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationautoscaling } from 'aws-cdk-sdk'

const applicationAutoScalingTargetTrackingScalingPolicyConfiguration: applicationautoscaling.ApplicationAutoScalingTargetTrackingScalingPolicyConfiguration = { ... }
```

##### `targetValue`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingTargetTrackingScalingPolicyConfiguration.property.targetValue"></a>

- *Type:* `number`

---

##### `customizedMetricSpecification`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingTargetTrackingScalingPolicyConfiguration.property.customizedMetricSpecification"></a>

- *Type:* [`aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingCustomizedMetricSpecification`](#aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingCustomizedMetricSpecification)

---

##### `disableScaleIn`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingTargetTrackingScalingPolicyConfiguration.property.disableScaleIn"></a>

- *Type:* `boolean`

---

##### `predefinedMetricSpecification`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingTargetTrackingScalingPolicyConfiguration.property.predefinedMetricSpecification"></a>

- *Type:* [`aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingPredefinedMetricSpecification`](#aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingPredefinedMetricSpecification)

---

##### `scaleInCooldown`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingTargetTrackingScalingPolicyConfiguration.property.scaleInCooldown"></a>

- *Type:* `number`

---

##### `scaleOutCooldown`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingTargetTrackingScalingPolicyConfiguration.property.scaleOutCooldown"></a>

- *Type:* `number`

---

## Classes <a name="Classes"></a>

### ApplicationAutoScalingResponsesDescribeScalableTargets <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingResponsesDescribeScalableTargets"></a>

#### Initializer <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingResponsesDescribeScalableTargets.Initializer"></a>

```typescript
import { applicationautoscaling } from 'aws-cdk-sdk'

new applicationautoscaling.ApplicationAutoScalingResponsesDescribeScalableTargets(__scope: Construct, __resources: string[], __input: ApplicationAutoScalingDescribeScalableTargetsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingResponsesDescribeScalableTargets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingResponsesDescribeScalableTargets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingResponsesDescribeScalableTargets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDescribeScalableTargetsRequest`](#aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDescribeScalableTargetsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingResponsesDescribeScalableTargets.property.nextToken"></a>

- *Type:* `string`

---

##### `scalableTargets`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingResponsesDescribeScalableTargets.property.scalableTargets"></a>

- *Type:* [`aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingScalableTarget`](#aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingScalableTarget)[]

---


### ApplicationAutoScalingResponsesDescribeScalingActivities <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingResponsesDescribeScalingActivities"></a>

#### Initializer <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingResponsesDescribeScalingActivities.Initializer"></a>

```typescript
import { applicationautoscaling } from 'aws-cdk-sdk'

new applicationautoscaling.ApplicationAutoScalingResponsesDescribeScalingActivities(__scope: Construct, __resources: string[], __input: ApplicationAutoScalingDescribeScalingActivitiesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingResponsesDescribeScalingActivities.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingResponsesDescribeScalingActivities.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingResponsesDescribeScalingActivities.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDescribeScalingActivitiesRequest`](#aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDescribeScalingActivitiesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingResponsesDescribeScalingActivities.property.nextToken"></a>

- *Type:* `string`

---

##### `scalingActivities`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingResponsesDescribeScalingActivities.property.scalingActivities"></a>

- *Type:* [`aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingScalingActivity`](#aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingScalingActivity)[]

---


### ApplicationAutoScalingResponsesDescribeScalingPolicies <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingResponsesDescribeScalingPolicies"></a>

#### Initializer <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingResponsesDescribeScalingPolicies.Initializer"></a>

```typescript
import { applicationautoscaling } from 'aws-cdk-sdk'

new applicationautoscaling.ApplicationAutoScalingResponsesDescribeScalingPolicies(__scope: Construct, __resources: string[], __input: ApplicationAutoScalingDescribeScalingPoliciesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingResponsesDescribeScalingPolicies.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingResponsesDescribeScalingPolicies.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingResponsesDescribeScalingPolicies.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDescribeScalingPoliciesRequest`](#aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDescribeScalingPoliciesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingResponsesDescribeScalingPolicies.property.nextToken"></a>

- *Type:* `string`

---

##### `scalingPolicies`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingResponsesDescribeScalingPolicies.property.scalingPolicies"></a>

- *Type:* [`aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingScalingPolicy`](#aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingScalingPolicy)[]

---


### ApplicationAutoScalingResponsesDescribeScheduledActions <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingResponsesDescribeScheduledActions"></a>

#### Initializer <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingResponsesDescribeScheduledActions.Initializer"></a>

```typescript
import { applicationautoscaling } from 'aws-cdk-sdk'

new applicationautoscaling.ApplicationAutoScalingResponsesDescribeScheduledActions(__scope: Construct, __resources: string[], __input: ApplicationAutoScalingDescribeScheduledActionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingResponsesDescribeScheduledActions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingResponsesDescribeScheduledActions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingResponsesDescribeScheduledActions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDescribeScheduledActionsRequest`](#aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingDescribeScheduledActionsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingResponsesDescribeScheduledActions.property.nextToken"></a>

- *Type:* `string`

---

##### `scheduledActions`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingResponsesDescribeScheduledActions.property.scheduledActions"></a>

- *Type:* [`aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingScheduledAction`](#aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingScheduledAction)[]

---


### ApplicationAutoScalingResponsesPutScalingPolicy <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingResponsesPutScalingPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingResponsesPutScalingPolicy.Initializer"></a>

```typescript
import { applicationautoscaling } from 'aws-cdk-sdk'

new applicationautoscaling.ApplicationAutoScalingResponsesPutScalingPolicy(__scope: Construct, __resources: string[], __input: ApplicationAutoScalingPutScalingPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingResponsesPutScalingPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingResponsesPutScalingPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingResponsesPutScalingPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingPutScalingPolicyRequest`](#aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingPutScalingPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `alarms`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingResponsesPutScalingPolicy.property.alarms"></a>

- *Type:* [`aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingAlarm`](#aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingAlarm)[]

---

##### `policyArn`<sup>Required</sup> <a name="aws-cdk-sdk.applicationautoscaling.ApplicationAutoScalingResponsesPutScalingPolicy.property.policyArn"></a>

- *Type:* `string`

---



