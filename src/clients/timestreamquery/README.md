# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### TimestreamQueryClient <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryClient"></a>

#### Initializer <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryClient.Initializer"></a>

```typescript
import { timestreamquery } from 'aws-cdk-sdk'

new timestreamquery.TimestreamQueryClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `cancelQuery` <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryClient.cancelQuery"></a>

```typescript
public cancelQuery(input: TimestreamQueryCancelQueryRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.timestreamquery.TimestreamQueryCancelQueryRequest`](#aws-cdk-sdk.timestreamquery.TimestreamQueryCancelQueryRequest)

---

##### `describeEndpoints` <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryClient.describeEndpoints"></a>

```typescript
public describeEndpoints()
```

##### `query` <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryClient.query"></a>

```typescript
public query(input: TimestreamQueryQueryRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.timestreamquery.TimestreamQueryQueryRequest`](#aws-cdk-sdk.timestreamquery.TimestreamQueryQueryRequest)

---




## Structs <a name="Structs"></a>

### TimestreamQueryCancelQueryRequest <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryCancelQueryRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { timestreamquery } from 'aws-cdk-sdk'

const timestreamQueryCancelQueryRequest: timestreamquery.TimestreamQueryCancelQueryRequest = { ... }
```

##### `queryId`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryCancelQueryRequest.property.queryId"></a>

- *Type:* `string`

---

### TimestreamQueryCancelQueryResponse <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryCancelQueryResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { timestreamquery } from 'aws-cdk-sdk'

const timestreamQueryCancelQueryResponse: timestreamquery.TimestreamQueryCancelQueryResponse = { ... }
```

##### `cancellationMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryCancelQueryResponse.property.cancellationMessage"></a>

- *Type:* `string`

---

### TimestreamQueryColumnInfo <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryColumnInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { timestreamquery } from 'aws-cdk-sdk'

const timestreamQueryColumnInfo: timestreamquery.TimestreamQueryColumnInfo = { ... }
```

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryColumnInfo.property.type"></a>

- *Type:* [`aws-cdk-sdk.timestreamquery.TimestreamQueryType`](#aws-cdk-sdk.timestreamquery.TimestreamQueryType)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryColumnInfo.property.name"></a>

- *Type:* `string`

---

### TimestreamQueryDatum <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryDatum"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { timestreamquery } from 'aws-cdk-sdk'

const timestreamQueryDatum: timestreamquery.TimestreamQueryDatum = { ... }
```

##### `arrayValue`<sup>Optional</sup> <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryDatum.property.arrayValue"></a>

- *Type:* [`aws-cdk-sdk.timestreamquery.TimestreamQueryDatum`](#aws-cdk-sdk.timestreamquery.TimestreamQueryDatum)[]

---

##### `nullValue`<sup>Optional</sup> <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryDatum.property.nullValue"></a>

- *Type:* `boolean`

---

##### `rowValue`<sup>Optional</sup> <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryDatum.property.rowValue"></a>

- *Type:* [`aws-cdk-sdk.timestreamquery.TimestreamQueryRow`](#aws-cdk-sdk.timestreamquery.TimestreamQueryRow)

---

##### `scalarValue`<sup>Optional</sup> <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryDatum.property.scalarValue"></a>

- *Type:* `string`

---

##### `timeSeriesValue`<sup>Optional</sup> <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryDatum.property.timeSeriesValue"></a>

- *Type:* [`aws-cdk-sdk.timestreamquery.TimestreamQueryTimeSeriesDataPoint`](#aws-cdk-sdk.timestreamquery.TimestreamQueryTimeSeriesDataPoint)[]

---

### TimestreamQueryDescribeEndpointsRequest <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryDescribeEndpointsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { timestreamquery } from 'aws-cdk-sdk'

const timestreamQueryDescribeEndpointsRequest: timestreamquery.TimestreamQueryDescribeEndpointsRequest = { ... }
```

### TimestreamQueryDescribeEndpointsResponse <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryDescribeEndpointsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { timestreamquery } from 'aws-cdk-sdk'

const timestreamQueryDescribeEndpointsResponse: timestreamquery.TimestreamQueryDescribeEndpointsResponse = { ... }
```

##### `endpoints`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryDescribeEndpointsResponse.property.endpoints"></a>

- *Type:* [`aws-cdk-sdk.timestreamquery.TimestreamQueryEndpoint`](#aws-cdk-sdk.timestreamquery.TimestreamQueryEndpoint)[]

---

### TimestreamQueryEndpoint <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryEndpoint"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { timestreamquery } from 'aws-cdk-sdk'

const timestreamQueryEndpoint: timestreamquery.TimestreamQueryEndpoint = { ... }
```

##### `address`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryEndpoint.property.address"></a>

- *Type:* `string`

---

##### `cachePeriodInMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryEndpoint.property.cachePeriodInMinutes"></a>

- *Type:* `number`

---

### TimestreamQueryQueryRequest <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryQueryRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { timestreamquery } from 'aws-cdk-sdk'

const timestreamQueryQueryRequest: timestreamquery.TimestreamQueryQueryRequest = { ... }
```

##### `queryString`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryQueryRequest.property.queryString"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryQueryRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `maxRows`<sup>Optional</sup> <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryQueryRequest.property.maxRows"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryQueryRequest.property.nextToken"></a>

- *Type:* `string`

---

### TimestreamQueryQueryResponse <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryQueryResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { timestreamquery } from 'aws-cdk-sdk'

const timestreamQueryQueryResponse: timestreamquery.TimestreamQueryQueryResponse = { ... }
```

##### `columnInfo`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryQueryResponse.property.columnInfo"></a>

- *Type:* [`aws-cdk-sdk.timestreamquery.TimestreamQueryColumnInfo`](#aws-cdk-sdk.timestreamquery.TimestreamQueryColumnInfo)[]

---

##### `queryId`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryQueryResponse.property.queryId"></a>

- *Type:* `string`

---

##### `rows`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryQueryResponse.property.rows"></a>

- *Type:* [`aws-cdk-sdk.timestreamquery.TimestreamQueryRow`](#aws-cdk-sdk.timestreamquery.TimestreamQueryRow)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryQueryResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `queryStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryQueryResponse.property.queryStatus"></a>

- *Type:* [`aws-cdk-sdk.timestreamquery.TimestreamQueryQueryStatus`](#aws-cdk-sdk.timestreamquery.TimestreamQueryQueryStatus)

---

### TimestreamQueryQueryStatus <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryQueryStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { timestreamquery } from 'aws-cdk-sdk'

const timestreamQueryQueryStatus: timestreamquery.TimestreamQueryQueryStatus = { ... }
```

##### `cumulativeBytesMetered`<sup>Optional</sup> <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryQueryStatus.property.cumulativeBytesMetered"></a>

- *Type:* `number`

---

##### `cumulativeBytesScanned`<sup>Optional</sup> <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryQueryStatus.property.cumulativeBytesScanned"></a>

- *Type:* `number`

---

##### `progressPercentage`<sup>Optional</sup> <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryQueryStatus.property.progressPercentage"></a>

- *Type:* `number`

---

### TimestreamQueryRow <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryRow"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { timestreamquery } from 'aws-cdk-sdk'

const timestreamQueryRow: timestreamquery.TimestreamQueryRow = { ... }
```

##### `data`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryRow.property.data"></a>

- *Type:* [`aws-cdk-sdk.timestreamquery.TimestreamQueryDatum`](#aws-cdk-sdk.timestreamquery.TimestreamQueryDatum)[]

---

### TimestreamQueryTimeSeriesDataPoint <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryTimeSeriesDataPoint"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { timestreamquery } from 'aws-cdk-sdk'

const timestreamQueryTimeSeriesDataPoint: timestreamquery.TimestreamQueryTimeSeriesDataPoint = { ... }
```

##### `time`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryTimeSeriesDataPoint.property.time"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryTimeSeriesDataPoint.property.value"></a>

- *Type:* [`aws-cdk-sdk.timestreamquery.TimestreamQueryDatum`](#aws-cdk-sdk.timestreamquery.TimestreamQueryDatum)

---

### TimestreamQueryType <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { timestreamquery } from 'aws-cdk-sdk'

const timestreamQueryType: timestreamquery.TimestreamQueryType = { ... }
```

##### `arrayColumnInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryType.property.arrayColumnInfo"></a>

- *Type:* [`aws-cdk-sdk.timestreamquery.TimestreamQueryColumnInfo`](#aws-cdk-sdk.timestreamquery.TimestreamQueryColumnInfo)

---

##### `rowColumnInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryType.property.rowColumnInfo"></a>

- *Type:* [`aws-cdk-sdk.timestreamquery.TimestreamQueryColumnInfo`](#aws-cdk-sdk.timestreamquery.TimestreamQueryColumnInfo)[]

---

##### `scalarType`<sup>Optional</sup> <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryType.property.scalarType"></a>

- *Type:* `string`

---

##### `timeSeriesMeasureValueColumnInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryType.property.timeSeriesMeasureValueColumnInfo"></a>

- *Type:* [`aws-cdk-sdk.timestreamquery.TimestreamQueryColumnInfo`](#aws-cdk-sdk.timestreamquery.TimestreamQueryColumnInfo)

---

## Classes <a name="Classes"></a>

### TimestreamQueryResponsesCancelQuery <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryResponsesCancelQuery"></a>

#### Initializer <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryResponsesCancelQuery.Initializer"></a>

```typescript
import { timestreamquery } from 'aws-cdk-sdk'

new timestreamquery.TimestreamQueryResponsesCancelQuery(__scope: Construct, __resources: string[], __input: TimestreamQueryCancelQueryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryResponsesCancelQuery.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryResponsesCancelQuery.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryResponsesCancelQuery.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.timestreamquery.TimestreamQueryCancelQueryRequest`](#aws-cdk-sdk.timestreamquery.TimestreamQueryCancelQueryRequest)

---



#### Properties <a name="Properties"></a>

##### `cancellationMessage`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryResponsesCancelQuery.property.cancellationMessage"></a>

- *Type:* `string`

---


### TimestreamQueryResponsesDescribeEndpoints <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryResponsesDescribeEndpoints"></a>

#### Initializer <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryResponsesDescribeEndpoints.Initializer"></a>

```typescript
import { timestreamquery } from 'aws-cdk-sdk'

new timestreamquery.TimestreamQueryResponsesDescribeEndpoints(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryResponsesDescribeEndpoints.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryResponsesDescribeEndpoints.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `endpoints`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryResponsesDescribeEndpoints.property.endpoints"></a>

- *Type:* [`aws-cdk-sdk.timestreamquery.TimestreamQueryEndpoint`](#aws-cdk-sdk.timestreamquery.TimestreamQueryEndpoint)[]

---


### TimestreamQueryResponsesQuery <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryResponsesQuery"></a>

#### Initializer <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryResponsesQuery.Initializer"></a>

```typescript
import { timestreamquery } from 'aws-cdk-sdk'

new timestreamquery.TimestreamQueryResponsesQuery(__scope: Construct, __resources: string[], __input: TimestreamQueryQueryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryResponsesQuery.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryResponsesQuery.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryResponsesQuery.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.timestreamquery.TimestreamQueryQueryRequest`](#aws-cdk-sdk.timestreamquery.TimestreamQueryQueryRequest)

---



#### Properties <a name="Properties"></a>

##### `columnInfo`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryResponsesQuery.property.columnInfo"></a>

- *Type:* [`aws-cdk-sdk.timestreamquery.TimestreamQueryColumnInfo`](#aws-cdk-sdk.timestreamquery.TimestreamQueryColumnInfo)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryResponsesQuery.property.nextToken"></a>

- *Type:* `string`

---

##### `queryId`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryResponsesQuery.property.queryId"></a>

- *Type:* `string`

---

##### `queryStatus`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryResponsesQuery.property.queryStatus"></a>

- *Type:* [`aws-cdk-sdk.timestreamquery.TimestreamQueryResponsesQueryQueryStatus`](#aws-cdk-sdk.timestreamquery.TimestreamQueryResponsesQueryQueryStatus)

---

##### `rows`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryResponsesQuery.property.rows"></a>

- *Type:* [`aws-cdk-sdk.timestreamquery.TimestreamQueryRow`](#aws-cdk-sdk.timestreamquery.TimestreamQueryRow)[]

---


### TimestreamQueryResponsesQueryQueryStatus <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryResponsesQueryQueryStatus"></a>

#### Initializer <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryResponsesQueryQueryStatus.Initializer"></a>

```typescript
import { timestreamquery } from 'aws-cdk-sdk'

new timestreamquery.TimestreamQueryResponsesQueryQueryStatus(__scope: Construct, __resources: string[], __input: TimestreamQueryQueryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryResponsesQueryQueryStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryResponsesQueryQueryStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryResponsesQueryQueryStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.timestreamquery.TimestreamQueryQueryRequest`](#aws-cdk-sdk.timestreamquery.TimestreamQueryQueryRequest)

---



#### Properties <a name="Properties"></a>

##### `cumulativeBytesMetered`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryResponsesQueryQueryStatus.property.cumulativeBytesMetered"></a>

- *Type:* `number`

---

##### `cumulativeBytesScanned`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryResponsesQueryQueryStatus.property.cumulativeBytesScanned"></a>

- *Type:* `number`

---

##### `progressPercentage`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamquery.TimestreamQueryResponsesQueryQueryStatus.property.progressPercentage"></a>

- *Type:* `number`

---



