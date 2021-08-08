# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### AutoScalingPlansClient <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansClient"></a>

#### Initializer <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansClient.Initializer"></a>

```typescript
import { autoscalingplans } from 'aws-cdk-sdk'

new autoscalingplans.AutoScalingPlansClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `createScalingPlan` <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansClient.createScalingPlan"></a>

```typescript
public createScalingPlan(input: AutoScalingPlansCreateScalingPlanRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.autoscalingplans.AutoScalingPlansCreateScalingPlanRequest`](#aws-cdk-sdk.autoscalingplans.AutoScalingPlansCreateScalingPlanRequest)

---

##### `deleteScalingPlan` <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansClient.deleteScalingPlan"></a>

```typescript
public deleteScalingPlan(input: AutoScalingPlansDeleteScalingPlanRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.autoscalingplans.AutoScalingPlansDeleteScalingPlanRequest`](#aws-cdk-sdk.autoscalingplans.AutoScalingPlansDeleteScalingPlanRequest)

---

##### `describeScalingPlanResources` <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansClient.describeScalingPlanResources"></a>

```typescript
public describeScalingPlanResources(input: AutoScalingPlansDescribeScalingPlanResourcesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.autoscalingplans.AutoScalingPlansDescribeScalingPlanResourcesRequest`](#aws-cdk-sdk.autoscalingplans.AutoScalingPlansDescribeScalingPlanResourcesRequest)

---

##### `describeScalingPlans` <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansClient.describeScalingPlans"></a>

```typescript
public describeScalingPlans(input: AutoScalingPlansDescribeScalingPlansRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.autoscalingplans.AutoScalingPlansDescribeScalingPlansRequest`](#aws-cdk-sdk.autoscalingplans.AutoScalingPlansDescribeScalingPlansRequest)

---

##### `fetchScalingPlanResourceForecastData` <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansClient.fetchScalingPlanResourceForecastData"></a>

```typescript
public fetchScalingPlanResourceForecastData(input: AutoScalingPlansGetScalingPlanResourceForecastDataRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.autoscalingplans.AutoScalingPlansGetScalingPlanResourceForecastDataRequest`](#aws-cdk-sdk.autoscalingplans.AutoScalingPlansGetScalingPlanResourceForecastDataRequest)

---

##### `updateScalingPlan` <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansClient.updateScalingPlan"></a>

```typescript
public updateScalingPlan(input: AutoScalingPlansUpdateScalingPlanRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.autoscalingplans.AutoScalingPlansUpdateScalingPlanRequest`](#aws-cdk-sdk.autoscalingplans.AutoScalingPlansUpdateScalingPlanRequest)

---




## Structs <a name="Structs"></a>

### AutoScalingPlansApplicationSource <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansApplicationSource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscalingplans } from 'aws-cdk-sdk'

const autoScalingPlansApplicationSource: autoscalingplans.AutoScalingPlansApplicationSource = { ... }
```

##### `cloudFormationStackArn`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansApplicationSource.property.cloudFormationStackArn"></a>

- *Type:* `string`

---

##### `tagFilters`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansApplicationSource.property.tagFilters"></a>

- *Type:* [`aws-cdk-sdk.autoscalingplans.AutoScalingPlansTagFilter`](#aws-cdk-sdk.autoscalingplans.AutoScalingPlansTagFilter)[]

---

### AutoScalingPlansCreateScalingPlanRequest <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansCreateScalingPlanRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscalingplans } from 'aws-cdk-sdk'

const autoScalingPlansCreateScalingPlanRequest: autoscalingplans.AutoScalingPlansCreateScalingPlanRequest = { ... }
```

##### `applicationSource`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansCreateScalingPlanRequest.property.applicationSource"></a>

- *Type:* [`aws-cdk-sdk.autoscalingplans.AutoScalingPlansApplicationSource`](#aws-cdk-sdk.autoscalingplans.AutoScalingPlansApplicationSource)

---

##### `scalingInstructions`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansCreateScalingPlanRequest.property.scalingInstructions"></a>

- *Type:* [`aws-cdk-sdk.autoscalingplans.AutoScalingPlansScalingInstruction`](#aws-cdk-sdk.autoscalingplans.AutoScalingPlansScalingInstruction)[]

---

##### `scalingPlanName`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansCreateScalingPlanRequest.property.scalingPlanName"></a>

- *Type:* `string`

---

### AutoScalingPlansCreateScalingPlanResponse <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansCreateScalingPlanResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscalingplans } from 'aws-cdk-sdk'

const autoScalingPlansCreateScalingPlanResponse: autoscalingplans.AutoScalingPlansCreateScalingPlanResponse = { ... }
```

##### `scalingPlanVersion`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansCreateScalingPlanResponse.property.scalingPlanVersion"></a>

- *Type:* `number`

---

### AutoScalingPlansCustomizedLoadMetricSpecification <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansCustomizedLoadMetricSpecification"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscalingplans } from 'aws-cdk-sdk'

const autoScalingPlansCustomizedLoadMetricSpecification: autoscalingplans.AutoScalingPlansCustomizedLoadMetricSpecification = { ... }
```

##### `metricName`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansCustomizedLoadMetricSpecification.property.metricName"></a>

- *Type:* `string`

---

##### `namespace`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansCustomizedLoadMetricSpecification.property.namespace"></a>

- *Type:* `string`

---

##### `statistic`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansCustomizedLoadMetricSpecification.property.statistic"></a>

- *Type:* `string`

---

##### `dimensions`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansCustomizedLoadMetricSpecification.property.dimensions"></a>

- *Type:* [`aws-cdk-sdk.autoscalingplans.AutoScalingPlansMetricDimension`](#aws-cdk-sdk.autoscalingplans.AutoScalingPlansMetricDimension)[]

---

##### `unit`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansCustomizedLoadMetricSpecification.property.unit"></a>

- *Type:* `string`

---

### AutoScalingPlansCustomizedScalingMetricSpecification <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansCustomizedScalingMetricSpecification"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscalingplans } from 'aws-cdk-sdk'

const autoScalingPlansCustomizedScalingMetricSpecification: autoscalingplans.AutoScalingPlansCustomizedScalingMetricSpecification = { ... }
```

##### `metricName`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansCustomizedScalingMetricSpecification.property.metricName"></a>

- *Type:* `string`

---

##### `namespace`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansCustomizedScalingMetricSpecification.property.namespace"></a>

- *Type:* `string`

---

##### `statistic`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansCustomizedScalingMetricSpecification.property.statistic"></a>

- *Type:* `string`

---

##### `dimensions`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansCustomizedScalingMetricSpecification.property.dimensions"></a>

- *Type:* [`aws-cdk-sdk.autoscalingplans.AutoScalingPlansMetricDimension`](#aws-cdk-sdk.autoscalingplans.AutoScalingPlansMetricDimension)[]

---

##### `unit`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansCustomizedScalingMetricSpecification.property.unit"></a>

- *Type:* `string`

---

### AutoScalingPlansDatapoint <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansDatapoint"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscalingplans } from 'aws-cdk-sdk'

const autoScalingPlansDatapoint: autoscalingplans.AutoScalingPlansDatapoint = { ... }
```

##### `timestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansDatapoint.property.timestamp"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansDatapoint.property.value"></a>

- *Type:* `number`

---

### AutoScalingPlansDeleteScalingPlanRequest <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansDeleteScalingPlanRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscalingplans } from 'aws-cdk-sdk'

const autoScalingPlansDeleteScalingPlanRequest: autoscalingplans.AutoScalingPlansDeleteScalingPlanRequest = { ... }
```

##### `scalingPlanName`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansDeleteScalingPlanRequest.property.scalingPlanName"></a>

- *Type:* `string`

---

##### `scalingPlanVersion`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansDeleteScalingPlanRequest.property.scalingPlanVersion"></a>

- *Type:* `number`

---

### AutoScalingPlansDeleteScalingPlanResponse <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansDeleteScalingPlanResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscalingplans } from 'aws-cdk-sdk'

const autoScalingPlansDeleteScalingPlanResponse: autoscalingplans.AutoScalingPlansDeleteScalingPlanResponse = { ... }
```

### AutoScalingPlansDescribeScalingPlanResourcesRequest <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansDescribeScalingPlanResourcesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscalingplans } from 'aws-cdk-sdk'

const autoScalingPlansDescribeScalingPlanResourcesRequest: autoscalingplans.AutoScalingPlansDescribeScalingPlanResourcesRequest = { ... }
```

##### `scalingPlanName`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansDescribeScalingPlanResourcesRequest.property.scalingPlanName"></a>

- *Type:* `string`

---

##### `scalingPlanVersion`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansDescribeScalingPlanResourcesRequest.property.scalingPlanVersion"></a>

- *Type:* `number`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansDescribeScalingPlanResourcesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansDescribeScalingPlanResourcesRequest.property.nextToken"></a>

- *Type:* `string`

---

### AutoScalingPlansDescribeScalingPlanResourcesResponse <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansDescribeScalingPlanResourcesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscalingplans } from 'aws-cdk-sdk'

const autoScalingPlansDescribeScalingPlanResourcesResponse: autoscalingplans.AutoScalingPlansDescribeScalingPlanResourcesResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansDescribeScalingPlanResourcesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `scalingPlanResources`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansDescribeScalingPlanResourcesResponse.property.scalingPlanResources"></a>

- *Type:* [`aws-cdk-sdk.autoscalingplans.AutoScalingPlansScalingPlanResource`](#aws-cdk-sdk.autoscalingplans.AutoScalingPlansScalingPlanResource)[]

---

### AutoScalingPlansDescribeScalingPlansRequest <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansDescribeScalingPlansRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscalingplans } from 'aws-cdk-sdk'

const autoScalingPlansDescribeScalingPlansRequest: autoscalingplans.AutoScalingPlansDescribeScalingPlansRequest = { ... }
```

##### `applicationSources`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansDescribeScalingPlansRequest.property.applicationSources"></a>

- *Type:* [`aws-cdk-sdk.autoscalingplans.AutoScalingPlansApplicationSource`](#aws-cdk-sdk.autoscalingplans.AutoScalingPlansApplicationSource)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansDescribeScalingPlansRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansDescribeScalingPlansRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `scalingPlanNames`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansDescribeScalingPlansRequest.property.scalingPlanNames"></a>

- *Type:* `string`[]

---

##### `scalingPlanVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansDescribeScalingPlansRequest.property.scalingPlanVersion"></a>

- *Type:* `number`

---

### AutoScalingPlansDescribeScalingPlansResponse <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansDescribeScalingPlansResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscalingplans } from 'aws-cdk-sdk'

const autoScalingPlansDescribeScalingPlansResponse: autoscalingplans.AutoScalingPlansDescribeScalingPlansResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansDescribeScalingPlansResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `scalingPlans`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansDescribeScalingPlansResponse.property.scalingPlans"></a>

- *Type:* [`aws-cdk-sdk.autoscalingplans.AutoScalingPlansScalingPlan`](#aws-cdk-sdk.autoscalingplans.AutoScalingPlansScalingPlan)[]

---

### AutoScalingPlansGetScalingPlanResourceForecastDataRequest <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansGetScalingPlanResourceForecastDataRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscalingplans } from 'aws-cdk-sdk'

const autoScalingPlansGetScalingPlanResourceForecastDataRequest: autoscalingplans.AutoScalingPlansGetScalingPlanResourceForecastDataRequest = { ... }
```

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansGetScalingPlanResourceForecastDataRequest.property.endTime"></a>

- *Type:* `string`

---

##### `forecastDataType`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansGetScalingPlanResourceForecastDataRequest.property.forecastDataType"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansGetScalingPlanResourceForecastDataRequest.property.resourceId"></a>

- *Type:* `string`

---

##### `scalableDimension`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansGetScalingPlanResourceForecastDataRequest.property.scalableDimension"></a>

- *Type:* `string`

---

##### `scalingPlanName`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansGetScalingPlanResourceForecastDataRequest.property.scalingPlanName"></a>

- *Type:* `string`

---

##### `scalingPlanVersion`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansGetScalingPlanResourceForecastDataRequest.property.scalingPlanVersion"></a>

- *Type:* `number`

---

##### `serviceNamespace`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansGetScalingPlanResourceForecastDataRequest.property.serviceNamespace"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansGetScalingPlanResourceForecastDataRequest.property.startTime"></a>

- *Type:* `string`

---

### AutoScalingPlansGetScalingPlanResourceForecastDataResponse <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansGetScalingPlanResourceForecastDataResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscalingplans } from 'aws-cdk-sdk'

const autoScalingPlansGetScalingPlanResourceForecastDataResponse: autoscalingplans.AutoScalingPlansGetScalingPlanResourceForecastDataResponse = { ... }
```

##### `datapoints`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansGetScalingPlanResourceForecastDataResponse.property.datapoints"></a>

- *Type:* [`aws-cdk-sdk.autoscalingplans.AutoScalingPlansDatapoint`](#aws-cdk-sdk.autoscalingplans.AutoScalingPlansDatapoint)[]

---

### AutoScalingPlansMetricDimension <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansMetricDimension"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscalingplans } from 'aws-cdk-sdk'

const autoScalingPlansMetricDimension: autoscalingplans.AutoScalingPlansMetricDimension = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansMetricDimension.property.name"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansMetricDimension.property.value"></a>

- *Type:* `string`

---

### AutoScalingPlansPredefinedLoadMetricSpecification <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansPredefinedLoadMetricSpecification"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscalingplans } from 'aws-cdk-sdk'

const autoScalingPlansPredefinedLoadMetricSpecification: autoscalingplans.AutoScalingPlansPredefinedLoadMetricSpecification = { ... }
```

##### `predefinedLoadMetricType`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansPredefinedLoadMetricSpecification.property.predefinedLoadMetricType"></a>

- *Type:* `string`

---

##### `resourceLabel`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansPredefinedLoadMetricSpecification.property.resourceLabel"></a>

- *Type:* `string`

---

### AutoScalingPlansPredefinedScalingMetricSpecification <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansPredefinedScalingMetricSpecification"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscalingplans } from 'aws-cdk-sdk'

const autoScalingPlansPredefinedScalingMetricSpecification: autoscalingplans.AutoScalingPlansPredefinedScalingMetricSpecification = { ... }
```

##### `predefinedScalingMetricType`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansPredefinedScalingMetricSpecification.property.predefinedScalingMetricType"></a>

- *Type:* `string`

---

##### `resourceLabel`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansPredefinedScalingMetricSpecification.property.resourceLabel"></a>

- *Type:* `string`

---

### AutoScalingPlansScalingInstruction <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansScalingInstruction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscalingplans } from 'aws-cdk-sdk'

const autoScalingPlansScalingInstruction: autoscalingplans.AutoScalingPlansScalingInstruction = { ... }
```

##### `maxCapacity`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansScalingInstruction.property.maxCapacity"></a>

- *Type:* `number`

---

##### `minCapacity`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansScalingInstruction.property.minCapacity"></a>

- *Type:* `number`

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansScalingInstruction.property.resourceId"></a>

- *Type:* `string`

---

##### `scalableDimension`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansScalingInstruction.property.scalableDimension"></a>

- *Type:* `string`

---

##### `serviceNamespace`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansScalingInstruction.property.serviceNamespace"></a>

- *Type:* `string`

---

##### `targetTrackingConfigurations`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansScalingInstruction.property.targetTrackingConfigurations"></a>

- *Type:* [`aws-cdk-sdk.autoscalingplans.AutoScalingPlansTargetTrackingConfiguration`](#aws-cdk-sdk.autoscalingplans.AutoScalingPlansTargetTrackingConfiguration)[]

---

##### `customizedLoadMetricSpecification`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansScalingInstruction.property.customizedLoadMetricSpecification"></a>

- *Type:* [`aws-cdk-sdk.autoscalingplans.AutoScalingPlansCustomizedLoadMetricSpecification`](#aws-cdk-sdk.autoscalingplans.AutoScalingPlansCustomizedLoadMetricSpecification)

---

##### `disableDynamicScaling`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansScalingInstruction.property.disableDynamicScaling"></a>

- *Type:* `boolean`

---

##### `predefinedLoadMetricSpecification`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansScalingInstruction.property.predefinedLoadMetricSpecification"></a>

- *Type:* [`aws-cdk-sdk.autoscalingplans.AutoScalingPlansPredefinedLoadMetricSpecification`](#aws-cdk-sdk.autoscalingplans.AutoScalingPlansPredefinedLoadMetricSpecification)

---

##### `predictiveScalingMaxCapacityBehavior`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansScalingInstruction.property.predictiveScalingMaxCapacityBehavior"></a>

- *Type:* `string`

---

##### `predictiveScalingMaxCapacityBuffer`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansScalingInstruction.property.predictiveScalingMaxCapacityBuffer"></a>

- *Type:* `number`

---

##### `predictiveScalingMode`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansScalingInstruction.property.predictiveScalingMode"></a>

- *Type:* `string`

---

##### `scalingPolicyUpdateBehavior`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansScalingInstruction.property.scalingPolicyUpdateBehavior"></a>

- *Type:* `string`

---

##### `scheduledActionBufferTime`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansScalingInstruction.property.scheduledActionBufferTime"></a>

- *Type:* `number`

---

### AutoScalingPlansScalingPlan <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansScalingPlan"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscalingplans } from 'aws-cdk-sdk'

const autoScalingPlansScalingPlan: autoscalingplans.AutoScalingPlansScalingPlan = { ... }
```

##### `applicationSource`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansScalingPlan.property.applicationSource"></a>

- *Type:* [`aws-cdk-sdk.autoscalingplans.AutoScalingPlansApplicationSource`](#aws-cdk-sdk.autoscalingplans.AutoScalingPlansApplicationSource)

---

##### `scalingInstructions`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansScalingPlan.property.scalingInstructions"></a>

- *Type:* [`aws-cdk-sdk.autoscalingplans.AutoScalingPlansScalingInstruction`](#aws-cdk-sdk.autoscalingplans.AutoScalingPlansScalingInstruction)[]

---

##### `scalingPlanName`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansScalingPlan.property.scalingPlanName"></a>

- *Type:* `string`

---

##### `scalingPlanVersion`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansScalingPlan.property.scalingPlanVersion"></a>

- *Type:* `number`

---

##### `statusCode`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansScalingPlan.property.statusCode"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansScalingPlan.property.creationTime"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansScalingPlan.property.statusMessage"></a>

- *Type:* `string`

---

##### `statusStartTime`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansScalingPlan.property.statusStartTime"></a>

- *Type:* `string`

---

### AutoScalingPlansScalingPlanResource <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansScalingPlanResource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscalingplans } from 'aws-cdk-sdk'

const autoScalingPlansScalingPlanResource: autoscalingplans.AutoScalingPlansScalingPlanResource = { ... }
```

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansScalingPlanResource.property.resourceId"></a>

- *Type:* `string`

---

##### `scalableDimension`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansScalingPlanResource.property.scalableDimension"></a>

- *Type:* `string`

---

##### `scalingPlanName`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansScalingPlanResource.property.scalingPlanName"></a>

- *Type:* `string`

---

##### `scalingPlanVersion`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansScalingPlanResource.property.scalingPlanVersion"></a>

- *Type:* `number`

---

##### `scalingStatusCode`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansScalingPlanResource.property.scalingStatusCode"></a>

- *Type:* `string`

---

##### `serviceNamespace`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansScalingPlanResource.property.serviceNamespace"></a>

- *Type:* `string`

---

##### `scalingPolicies`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansScalingPlanResource.property.scalingPolicies"></a>

- *Type:* [`aws-cdk-sdk.autoscalingplans.AutoScalingPlansScalingPolicy`](#aws-cdk-sdk.autoscalingplans.AutoScalingPlansScalingPolicy)[]

---

##### `scalingStatusMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansScalingPlanResource.property.scalingStatusMessage"></a>

- *Type:* `string`

---

### AutoScalingPlansScalingPolicy <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansScalingPolicy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscalingplans } from 'aws-cdk-sdk'

const autoScalingPlansScalingPolicy: autoscalingplans.AutoScalingPlansScalingPolicy = { ... }
```

##### `policyName`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansScalingPolicy.property.policyName"></a>

- *Type:* `string`

---

##### `policyType`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansScalingPolicy.property.policyType"></a>

- *Type:* `string`

---

##### `targetTrackingConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansScalingPolicy.property.targetTrackingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.autoscalingplans.AutoScalingPlansTargetTrackingConfiguration`](#aws-cdk-sdk.autoscalingplans.AutoScalingPlansTargetTrackingConfiguration)

---

### AutoScalingPlansTagFilter <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansTagFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscalingplans } from 'aws-cdk-sdk'

const autoScalingPlansTagFilter: autoscalingplans.AutoScalingPlansTagFilter = { ... }
```

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansTagFilter.property.key"></a>

- *Type:* `string`

---

##### `values`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansTagFilter.property.values"></a>

- *Type:* `string`[]

---

### AutoScalingPlansTargetTrackingConfiguration <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansTargetTrackingConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscalingplans } from 'aws-cdk-sdk'

const autoScalingPlansTargetTrackingConfiguration: autoscalingplans.AutoScalingPlansTargetTrackingConfiguration = { ... }
```

##### `targetValue`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansTargetTrackingConfiguration.property.targetValue"></a>

- *Type:* `number`

---

##### `customizedScalingMetricSpecification`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansTargetTrackingConfiguration.property.customizedScalingMetricSpecification"></a>

- *Type:* [`aws-cdk-sdk.autoscalingplans.AutoScalingPlansCustomizedScalingMetricSpecification`](#aws-cdk-sdk.autoscalingplans.AutoScalingPlansCustomizedScalingMetricSpecification)

---

##### `disableScaleIn`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansTargetTrackingConfiguration.property.disableScaleIn"></a>

- *Type:* `boolean`

---

##### `estimatedInstanceWarmup`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansTargetTrackingConfiguration.property.estimatedInstanceWarmup"></a>

- *Type:* `number`

---

##### `predefinedScalingMetricSpecification`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansTargetTrackingConfiguration.property.predefinedScalingMetricSpecification"></a>

- *Type:* [`aws-cdk-sdk.autoscalingplans.AutoScalingPlansPredefinedScalingMetricSpecification`](#aws-cdk-sdk.autoscalingplans.AutoScalingPlansPredefinedScalingMetricSpecification)

---

##### `scaleInCooldown`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansTargetTrackingConfiguration.property.scaleInCooldown"></a>

- *Type:* `number`

---

##### `scaleOutCooldown`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansTargetTrackingConfiguration.property.scaleOutCooldown"></a>

- *Type:* `number`

---

### AutoScalingPlansUpdateScalingPlanRequest <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansUpdateScalingPlanRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscalingplans } from 'aws-cdk-sdk'

const autoScalingPlansUpdateScalingPlanRequest: autoscalingplans.AutoScalingPlansUpdateScalingPlanRequest = { ... }
```

##### `scalingPlanName`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansUpdateScalingPlanRequest.property.scalingPlanName"></a>

- *Type:* `string`

---

##### `scalingPlanVersion`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansUpdateScalingPlanRequest.property.scalingPlanVersion"></a>

- *Type:* `number`

---

##### `applicationSource`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansUpdateScalingPlanRequest.property.applicationSource"></a>

- *Type:* [`aws-cdk-sdk.autoscalingplans.AutoScalingPlansApplicationSource`](#aws-cdk-sdk.autoscalingplans.AutoScalingPlansApplicationSource)

---

##### `scalingInstructions`<sup>Optional</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansUpdateScalingPlanRequest.property.scalingInstructions"></a>

- *Type:* [`aws-cdk-sdk.autoscalingplans.AutoScalingPlansScalingInstruction`](#aws-cdk-sdk.autoscalingplans.AutoScalingPlansScalingInstruction)[]

---

### AutoScalingPlansUpdateScalingPlanResponse <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansUpdateScalingPlanResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { autoscalingplans } from 'aws-cdk-sdk'

const autoScalingPlansUpdateScalingPlanResponse: autoscalingplans.AutoScalingPlansUpdateScalingPlanResponse = { ... }
```

## Classes <a name="Classes"></a>

### AutoScalingPlansResponsesCreateScalingPlan <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansResponsesCreateScalingPlan"></a>

#### Initializer <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansResponsesCreateScalingPlan.Initializer"></a>

```typescript
import { autoscalingplans } from 'aws-cdk-sdk'

new autoscalingplans.AutoScalingPlansResponsesCreateScalingPlan(__scope: Construct, __resources: string[], __input: AutoScalingPlansCreateScalingPlanRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansResponsesCreateScalingPlan.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansResponsesCreateScalingPlan.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansResponsesCreateScalingPlan.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.autoscalingplans.AutoScalingPlansCreateScalingPlanRequest`](#aws-cdk-sdk.autoscalingplans.AutoScalingPlansCreateScalingPlanRequest)

---



#### Properties <a name="Properties"></a>

##### `scalingPlanVersion`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansResponsesCreateScalingPlan.property.scalingPlanVersion"></a>

- *Type:* `number`

---


### AutoScalingPlansResponsesDescribeScalingPlanResources <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansResponsesDescribeScalingPlanResources"></a>

#### Initializer <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansResponsesDescribeScalingPlanResources.Initializer"></a>

```typescript
import { autoscalingplans } from 'aws-cdk-sdk'

new autoscalingplans.AutoScalingPlansResponsesDescribeScalingPlanResources(__scope: Construct, __resources: string[], __input: AutoScalingPlansDescribeScalingPlanResourcesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansResponsesDescribeScalingPlanResources.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansResponsesDescribeScalingPlanResources.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansResponsesDescribeScalingPlanResources.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.autoscalingplans.AutoScalingPlansDescribeScalingPlanResourcesRequest`](#aws-cdk-sdk.autoscalingplans.AutoScalingPlansDescribeScalingPlanResourcesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansResponsesDescribeScalingPlanResources.property.nextToken"></a>

- *Type:* `string`

---

##### `scalingPlanResources`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansResponsesDescribeScalingPlanResources.property.scalingPlanResources"></a>

- *Type:* [`aws-cdk-sdk.autoscalingplans.AutoScalingPlansScalingPlanResource`](#aws-cdk-sdk.autoscalingplans.AutoScalingPlansScalingPlanResource)[]

---


### AutoScalingPlansResponsesDescribeScalingPlans <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansResponsesDescribeScalingPlans"></a>

#### Initializer <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansResponsesDescribeScalingPlans.Initializer"></a>

```typescript
import { autoscalingplans } from 'aws-cdk-sdk'

new autoscalingplans.AutoScalingPlansResponsesDescribeScalingPlans(__scope: Construct, __resources: string[], __input: AutoScalingPlansDescribeScalingPlansRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansResponsesDescribeScalingPlans.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansResponsesDescribeScalingPlans.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansResponsesDescribeScalingPlans.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.autoscalingplans.AutoScalingPlansDescribeScalingPlansRequest`](#aws-cdk-sdk.autoscalingplans.AutoScalingPlansDescribeScalingPlansRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansResponsesDescribeScalingPlans.property.nextToken"></a>

- *Type:* `string`

---

##### `scalingPlans`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansResponsesDescribeScalingPlans.property.scalingPlans"></a>

- *Type:* [`aws-cdk-sdk.autoscalingplans.AutoScalingPlansScalingPlan`](#aws-cdk-sdk.autoscalingplans.AutoScalingPlansScalingPlan)[]

---


### AutoScalingPlansResponsesFetchScalingPlanResourceForecastData <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansResponsesFetchScalingPlanResourceForecastData"></a>

#### Initializer <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansResponsesFetchScalingPlanResourceForecastData.Initializer"></a>

```typescript
import { autoscalingplans } from 'aws-cdk-sdk'

new autoscalingplans.AutoScalingPlansResponsesFetchScalingPlanResourceForecastData(__scope: Construct, __resources: string[], __input: AutoScalingPlansGetScalingPlanResourceForecastDataRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansResponsesFetchScalingPlanResourceForecastData.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansResponsesFetchScalingPlanResourceForecastData.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansResponsesFetchScalingPlanResourceForecastData.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.autoscalingplans.AutoScalingPlansGetScalingPlanResourceForecastDataRequest`](#aws-cdk-sdk.autoscalingplans.AutoScalingPlansGetScalingPlanResourceForecastDataRequest)

---



#### Properties <a name="Properties"></a>

##### `datapoints`<sup>Required</sup> <a name="aws-cdk-sdk.autoscalingplans.AutoScalingPlansResponsesFetchScalingPlanResourceForecastData.property.datapoints"></a>

- *Type:* [`aws-cdk-sdk.autoscalingplans.AutoScalingPlansDatapoint`](#aws-cdk-sdk.autoscalingplans.AutoScalingPlansDatapoint)[]

---



