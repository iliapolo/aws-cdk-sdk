# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### PiClient <a name="aws-cdk-sdk.pi.PiClient"></a>

#### Initializer <a name="aws-cdk-sdk.pi.PiClient.Initializer"></a>

```typescript
import { pi } from 'aws-cdk-sdk'

new pi.PiClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.pi.PiClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.pi.PiClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.pi.PiClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `describeDimensionKeys` <a name="aws-cdk-sdk.pi.PiClient.describeDimensionKeys"></a>

```typescript
public describeDimensionKeys(input: PiDescribeDimensionKeysRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.pi.PiClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.pi.PiDescribeDimensionKeysRequest`](#aws-cdk-sdk.pi.PiDescribeDimensionKeysRequest)

---

##### `fetchResourceMetrics` <a name="aws-cdk-sdk.pi.PiClient.fetchResourceMetrics"></a>

```typescript
public fetchResourceMetrics(input: PiGetResourceMetricsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.pi.PiClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.pi.PiGetResourceMetricsRequest`](#aws-cdk-sdk.pi.PiGetResourceMetricsRequest)

---




## Structs <a name="Structs"></a>

### PiDataPoint <a name="aws-cdk-sdk.pi.PiDataPoint"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pi } from 'aws-cdk-sdk'

const piDataPoint: pi.PiDataPoint = { ... }
```

##### `timestamp`<sup>Required</sup> <a name="aws-cdk-sdk.pi.PiDataPoint.property.timestamp"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.pi.PiDataPoint.property.value"></a>

- *Type:* `number`

---

### PiDescribeDimensionKeysRequest <a name="aws-cdk-sdk.pi.PiDescribeDimensionKeysRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pi } from 'aws-cdk-sdk'

const piDescribeDimensionKeysRequest: pi.PiDescribeDimensionKeysRequest = { ... }
```

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.pi.PiDescribeDimensionKeysRequest.property.endTime"></a>

- *Type:* `string`

---

##### `groupBy`<sup>Required</sup> <a name="aws-cdk-sdk.pi.PiDescribeDimensionKeysRequest.property.groupBy"></a>

- *Type:* [`aws-cdk-sdk.pi.PiDimensionGroup`](#aws-cdk-sdk.pi.PiDimensionGroup)

---

##### `identifier`<sup>Required</sup> <a name="aws-cdk-sdk.pi.PiDescribeDimensionKeysRequest.property.identifier"></a>

- *Type:* `string`

---

##### `metric`<sup>Required</sup> <a name="aws-cdk-sdk.pi.PiDescribeDimensionKeysRequest.property.metric"></a>

- *Type:* `string`

---

##### `serviceType`<sup>Required</sup> <a name="aws-cdk-sdk.pi.PiDescribeDimensionKeysRequest.property.serviceType"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.pi.PiDescribeDimensionKeysRequest.property.startTime"></a>

- *Type:* `string`

---

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.pi.PiDescribeDimensionKeysRequest.property.filter"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.pi.PiDescribeDimensionKeysRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.pi.PiDescribeDimensionKeysRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `partitionBy`<sup>Optional</sup> <a name="aws-cdk-sdk.pi.PiDescribeDimensionKeysRequest.property.partitionBy"></a>

- *Type:* [`aws-cdk-sdk.pi.PiDimensionGroup`](#aws-cdk-sdk.pi.PiDimensionGroup)

---

##### `periodInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.pi.PiDescribeDimensionKeysRequest.property.periodInSeconds"></a>

- *Type:* `number`

---

### PiDescribeDimensionKeysResponse <a name="aws-cdk-sdk.pi.PiDescribeDimensionKeysResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pi } from 'aws-cdk-sdk'

const piDescribeDimensionKeysResponse: pi.PiDescribeDimensionKeysResponse = { ... }
```

##### `alignedEndTime`<sup>Optional</sup> <a name="aws-cdk-sdk.pi.PiDescribeDimensionKeysResponse.property.alignedEndTime"></a>

- *Type:* `string`

---

##### `alignedStartTime`<sup>Optional</sup> <a name="aws-cdk-sdk.pi.PiDescribeDimensionKeysResponse.property.alignedStartTime"></a>

- *Type:* `string`

---

##### `keys`<sup>Optional</sup> <a name="aws-cdk-sdk.pi.PiDescribeDimensionKeysResponse.property.keys"></a>

- *Type:* [`aws-cdk-sdk.pi.PiDimensionKeyDescription`](#aws-cdk-sdk.pi.PiDimensionKeyDescription)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.pi.PiDescribeDimensionKeysResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `partitionKeys`<sup>Optional</sup> <a name="aws-cdk-sdk.pi.PiDescribeDimensionKeysResponse.property.partitionKeys"></a>

- *Type:* [`aws-cdk-sdk.pi.PiResponsePartitionKey`](#aws-cdk-sdk.pi.PiResponsePartitionKey)[]

---

### PiDimensionGroup <a name="aws-cdk-sdk.pi.PiDimensionGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pi } from 'aws-cdk-sdk'

const piDimensionGroup: pi.PiDimensionGroup = { ... }
```

##### `group`<sup>Required</sup> <a name="aws-cdk-sdk.pi.PiDimensionGroup.property.group"></a>

- *Type:* `string`

---

##### `dimensions`<sup>Optional</sup> <a name="aws-cdk-sdk.pi.PiDimensionGroup.property.dimensions"></a>

- *Type:* `string`[]

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.pi.PiDimensionGroup.property.limit"></a>

- *Type:* `number`

---

### PiDimensionKeyDescription <a name="aws-cdk-sdk.pi.PiDimensionKeyDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pi } from 'aws-cdk-sdk'

const piDimensionKeyDescription: pi.PiDimensionKeyDescription = { ... }
```

##### `dimensions`<sup>Optional</sup> <a name="aws-cdk-sdk.pi.PiDimensionKeyDescription.property.dimensions"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `partitions`<sup>Optional</sup> <a name="aws-cdk-sdk.pi.PiDimensionKeyDescription.property.partitions"></a>

- *Type:* `number`[]

---

##### `total`<sup>Optional</sup> <a name="aws-cdk-sdk.pi.PiDimensionKeyDescription.property.total"></a>

- *Type:* `number`

---

### PiGetResourceMetricsRequest <a name="aws-cdk-sdk.pi.PiGetResourceMetricsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pi } from 'aws-cdk-sdk'

const piGetResourceMetricsRequest: pi.PiGetResourceMetricsRequest = { ... }
```

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.pi.PiGetResourceMetricsRequest.property.endTime"></a>

- *Type:* `string`

---

##### `identifier`<sup>Required</sup> <a name="aws-cdk-sdk.pi.PiGetResourceMetricsRequest.property.identifier"></a>

- *Type:* `string`

---

##### `metricQueries`<sup>Required</sup> <a name="aws-cdk-sdk.pi.PiGetResourceMetricsRequest.property.metricQueries"></a>

- *Type:* [`aws-cdk-sdk.pi.PiMetricQuery`](#aws-cdk-sdk.pi.PiMetricQuery)[]

---

##### `serviceType`<sup>Required</sup> <a name="aws-cdk-sdk.pi.PiGetResourceMetricsRequest.property.serviceType"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.pi.PiGetResourceMetricsRequest.property.startTime"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.pi.PiGetResourceMetricsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.pi.PiGetResourceMetricsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `periodInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.pi.PiGetResourceMetricsRequest.property.periodInSeconds"></a>

- *Type:* `number`

---

### PiGetResourceMetricsResponse <a name="aws-cdk-sdk.pi.PiGetResourceMetricsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pi } from 'aws-cdk-sdk'

const piGetResourceMetricsResponse: pi.PiGetResourceMetricsResponse = { ... }
```

##### `alignedEndTime`<sup>Optional</sup> <a name="aws-cdk-sdk.pi.PiGetResourceMetricsResponse.property.alignedEndTime"></a>

- *Type:* `string`

---

##### `alignedStartTime`<sup>Optional</sup> <a name="aws-cdk-sdk.pi.PiGetResourceMetricsResponse.property.alignedStartTime"></a>

- *Type:* `string`

---

##### `identifier`<sup>Optional</sup> <a name="aws-cdk-sdk.pi.PiGetResourceMetricsResponse.property.identifier"></a>

- *Type:* `string`

---

##### `metricList`<sup>Optional</sup> <a name="aws-cdk-sdk.pi.PiGetResourceMetricsResponse.property.metricList"></a>

- *Type:* [`aws-cdk-sdk.pi.PiMetricKeyDataPoints`](#aws-cdk-sdk.pi.PiMetricKeyDataPoints)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.pi.PiGetResourceMetricsResponse.property.nextToken"></a>

- *Type:* `string`

---

### PiMetricKeyDataPoints <a name="aws-cdk-sdk.pi.PiMetricKeyDataPoints"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pi } from 'aws-cdk-sdk'

const piMetricKeyDataPoints: pi.PiMetricKeyDataPoints = { ... }
```

##### `dataPoints`<sup>Optional</sup> <a name="aws-cdk-sdk.pi.PiMetricKeyDataPoints.property.dataPoints"></a>

- *Type:* [`aws-cdk-sdk.pi.PiDataPoint`](#aws-cdk-sdk.pi.PiDataPoint)[]

---

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.pi.PiMetricKeyDataPoints.property.key"></a>

- *Type:* [`aws-cdk-sdk.pi.PiResponseResourceMetricKey`](#aws-cdk-sdk.pi.PiResponseResourceMetricKey)

---

### PiMetricQuery <a name="aws-cdk-sdk.pi.PiMetricQuery"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pi } from 'aws-cdk-sdk'

const piMetricQuery: pi.PiMetricQuery = { ... }
```

##### `metric`<sup>Required</sup> <a name="aws-cdk-sdk.pi.PiMetricQuery.property.metric"></a>

- *Type:* `string`

---

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.pi.PiMetricQuery.property.filter"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `groupBy`<sup>Optional</sup> <a name="aws-cdk-sdk.pi.PiMetricQuery.property.groupBy"></a>

- *Type:* [`aws-cdk-sdk.pi.PiDimensionGroup`](#aws-cdk-sdk.pi.PiDimensionGroup)

---

### PiResponsePartitionKey <a name="aws-cdk-sdk.pi.PiResponsePartitionKey"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pi } from 'aws-cdk-sdk'

const piResponsePartitionKey: pi.PiResponsePartitionKey = { ... }
```

##### `dimensions`<sup>Required</sup> <a name="aws-cdk-sdk.pi.PiResponsePartitionKey.property.dimensions"></a>

- *Type:* {[ key: string ]: `string`}

---

### PiResponseResourceMetricKey <a name="aws-cdk-sdk.pi.PiResponseResourceMetricKey"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pi } from 'aws-cdk-sdk'

const piResponseResourceMetricKey: pi.PiResponseResourceMetricKey = { ... }
```

##### `metric`<sup>Required</sup> <a name="aws-cdk-sdk.pi.PiResponseResourceMetricKey.property.metric"></a>

- *Type:* `string`

---

##### `dimensions`<sup>Optional</sup> <a name="aws-cdk-sdk.pi.PiResponseResourceMetricKey.property.dimensions"></a>

- *Type:* {[ key: string ]: `string`}

---

## Classes <a name="Classes"></a>

### PIResponsesDescribeDimensionKeys <a name="aws-cdk-sdk.pi.PIResponsesDescribeDimensionKeys"></a>

#### Initializer <a name="aws-cdk-sdk.pi.PIResponsesDescribeDimensionKeys.Initializer"></a>

```typescript
import { pi } from 'aws-cdk-sdk'

new pi.PIResponsesDescribeDimensionKeys(__scope: Construct, __resources: string[], __input: PiDescribeDimensionKeysRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.pi.PIResponsesDescribeDimensionKeys.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.pi.PIResponsesDescribeDimensionKeys.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.pi.PIResponsesDescribeDimensionKeys.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.pi.PiDescribeDimensionKeysRequest`](#aws-cdk-sdk.pi.PiDescribeDimensionKeysRequest)

---



#### Properties <a name="Properties"></a>

##### `alignedEndTime`<sup>Required</sup> <a name="aws-cdk-sdk.pi.PIResponsesDescribeDimensionKeys.property.alignedEndTime"></a>

- *Type:* `string`

---

##### `alignedStartTime`<sup>Required</sup> <a name="aws-cdk-sdk.pi.PIResponsesDescribeDimensionKeys.property.alignedStartTime"></a>

- *Type:* `string`

---

##### `keys`<sup>Required</sup> <a name="aws-cdk-sdk.pi.PIResponsesDescribeDimensionKeys.property.keys"></a>

- *Type:* [`aws-cdk-sdk.pi.PiDimensionKeyDescription`](#aws-cdk-sdk.pi.PiDimensionKeyDescription)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.pi.PIResponsesDescribeDimensionKeys.property.nextToken"></a>

- *Type:* `string`

---

##### `partitionKeys`<sup>Required</sup> <a name="aws-cdk-sdk.pi.PIResponsesDescribeDimensionKeys.property.partitionKeys"></a>

- *Type:* [`aws-cdk-sdk.pi.PiResponsePartitionKey`](#aws-cdk-sdk.pi.PiResponsePartitionKey)[]

---


### PIResponsesFetchResourceMetrics <a name="aws-cdk-sdk.pi.PIResponsesFetchResourceMetrics"></a>

#### Initializer <a name="aws-cdk-sdk.pi.PIResponsesFetchResourceMetrics.Initializer"></a>

```typescript
import { pi } from 'aws-cdk-sdk'

new pi.PIResponsesFetchResourceMetrics(__scope: Construct, __resources: string[], __input: PiGetResourceMetricsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.pi.PIResponsesFetchResourceMetrics.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.pi.PIResponsesFetchResourceMetrics.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.pi.PIResponsesFetchResourceMetrics.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.pi.PiGetResourceMetricsRequest`](#aws-cdk-sdk.pi.PiGetResourceMetricsRequest)

---



#### Properties <a name="Properties"></a>

##### `alignedEndTime`<sup>Required</sup> <a name="aws-cdk-sdk.pi.PIResponsesFetchResourceMetrics.property.alignedEndTime"></a>

- *Type:* `string`

---

##### `alignedStartTime`<sup>Required</sup> <a name="aws-cdk-sdk.pi.PIResponsesFetchResourceMetrics.property.alignedStartTime"></a>

- *Type:* `string`

---

##### `identifier`<sup>Required</sup> <a name="aws-cdk-sdk.pi.PIResponsesFetchResourceMetrics.property.identifier"></a>

- *Type:* `string`

---

##### `metricList`<sup>Required</sup> <a name="aws-cdk-sdk.pi.PIResponsesFetchResourceMetrics.property.metricList"></a>

- *Type:* [`aws-cdk-sdk.pi.PiMetricKeyDataPoints`](#aws-cdk-sdk.pi.PiMetricKeyDataPoints)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.pi.PIResponsesFetchResourceMetrics.property.nextToken"></a>

- *Type:* `string`

---



