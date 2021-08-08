# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### CurClient <a name="aws-cdk-sdk.cur.CurClient"></a>

#### Initializer <a name="aws-cdk-sdk.cur.CurClient.Initializer"></a>

```typescript
import { cur } from 'aws-cdk-sdk'

new cur.CurClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.cur.CurClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.cur.CurClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cur.CurClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `deleteReportDefinition` <a name="aws-cdk-sdk.cur.CurClient.deleteReportDefinition"></a>

```typescript
public deleteReportDefinition(input: CurDeleteReportDefinitionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cur.CurClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cur.CurDeleteReportDefinitionRequest`](#aws-cdk-sdk.cur.CurDeleteReportDefinitionRequest)

---

##### `describeReportDefinitions` <a name="aws-cdk-sdk.cur.CurClient.describeReportDefinitions"></a>

```typescript
public describeReportDefinitions(input: CurDescribeReportDefinitionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cur.CurClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cur.CurDescribeReportDefinitionsRequest`](#aws-cdk-sdk.cur.CurDescribeReportDefinitionsRequest)

---

##### `modifyReportDefinition` <a name="aws-cdk-sdk.cur.CurClient.modifyReportDefinition"></a>

```typescript
public modifyReportDefinition(input: CurModifyReportDefinitionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cur.CurClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cur.CurModifyReportDefinitionRequest`](#aws-cdk-sdk.cur.CurModifyReportDefinitionRequest)

---

##### `putReportDefinition` <a name="aws-cdk-sdk.cur.CurClient.putReportDefinition"></a>

```typescript
public putReportDefinition(input: CurPutReportDefinitionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cur.CurClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cur.CurPutReportDefinitionRequest`](#aws-cdk-sdk.cur.CurPutReportDefinitionRequest)

---




## Structs <a name="Structs"></a>

### CurDeleteReportDefinitionRequest <a name="aws-cdk-sdk.cur.CurDeleteReportDefinitionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cur } from 'aws-cdk-sdk'

const curDeleteReportDefinitionRequest: cur.CurDeleteReportDefinitionRequest = { ... }
```

##### `reportName`<sup>Optional</sup> <a name="aws-cdk-sdk.cur.CurDeleteReportDefinitionRequest.property.reportName"></a>

- *Type:* `string`

---

### CurDeleteReportDefinitionResponse <a name="aws-cdk-sdk.cur.CurDeleteReportDefinitionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cur } from 'aws-cdk-sdk'

const curDeleteReportDefinitionResponse: cur.CurDeleteReportDefinitionResponse = { ... }
```

##### `responseMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.cur.CurDeleteReportDefinitionResponse.property.responseMessage"></a>

- *Type:* `string`

---

### CurDescribeReportDefinitionsRequest <a name="aws-cdk-sdk.cur.CurDescribeReportDefinitionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cur } from 'aws-cdk-sdk'

const curDescribeReportDefinitionsRequest: cur.CurDescribeReportDefinitionsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.cur.CurDescribeReportDefinitionsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cur.CurDescribeReportDefinitionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### CurDescribeReportDefinitionsResponse <a name="aws-cdk-sdk.cur.CurDescribeReportDefinitionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cur } from 'aws-cdk-sdk'

const curDescribeReportDefinitionsResponse: cur.CurDescribeReportDefinitionsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cur.CurDescribeReportDefinitionsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `reportDefinitions`<sup>Optional</sup> <a name="aws-cdk-sdk.cur.CurDescribeReportDefinitionsResponse.property.reportDefinitions"></a>

- *Type:* [`aws-cdk-sdk.cur.CurReportDefinition`](#aws-cdk-sdk.cur.CurReportDefinition)[]

---

### CurModifyReportDefinitionRequest <a name="aws-cdk-sdk.cur.CurModifyReportDefinitionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cur } from 'aws-cdk-sdk'

const curModifyReportDefinitionRequest: cur.CurModifyReportDefinitionRequest = { ... }
```

##### `reportDefinition`<sup>Required</sup> <a name="aws-cdk-sdk.cur.CurModifyReportDefinitionRequest.property.reportDefinition"></a>

- *Type:* [`aws-cdk-sdk.cur.CurReportDefinition`](#aws-cdk-sdk.cur.CurReportDefinition)

---

##### `reportName`<sup>Required</sup> <a name="aws-cdk-sdk.cur.CurModifyReportDefinitionRequest.property.reportName"></a>

- *Type:* `string`

---

### CurModifyReportDefinitionResponse <a name="aws-cdk-sdk.cur.CurModifyReportDefinitionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cur } from 'aws-cdk-sdk'

const curModifyReportDefinitionResponse: cur.CurModifyReportDefinitionResponse = { ... }
```

### CurPutReportDefinitionRequest <a name="aws-cdk-sdk.cur.CurPutReportDefinitionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cur } from 'aws-cdk-sdk'

const curPutReportDefinitionRequest: cur.CurPutReportDefinitionRequest = { ... }
```

##### `reportDefinition`<sup>Required</sup> <a name="aws-cdk-sdk.cur.CurPutReportDefinitionRequest.property.reportDefinition"></a>

- *Type:* [`aws-cdk-sdk.cur.CurReportDefinition`](#aws-cdk-sdk.cur.CurReportDefinition)

---

### CurPutReportDefinitionResponse <a name="aws-cdk-sdk.cur.CurPutReportDefinitionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cur } from 'aws-cdk-sdk'

const curPutReportDefinitionResponse: cur.CurPutReportDefinitionResponse = { ... }
```

### CurReportDefinition <a name="aws-cdk-sdk.cur.CurReportDefinition"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cur } from 'aws-cdk-sdk'

const curReportDefinition: cur.CurReportDefinition = { ... }
```

##### `additionalSchemaElements`<sup>Required</sup> <a name="aws-cdk-sdk.cur.CurReportDefinition.property.additionalSchemaElements"></a>

- *Type:* `string`[]

---

##### `compression`<sup>Required</sup> <a name="aws-cdk-sdk.cur.CurReportDefinition.property.compression"></a>

- *Type:* `string`

---

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.cur.CurReportDefinition.property.format"></a>

- *Type:* `string`

---

##### `reportName`<sup>Required</sup> <a name="aws-cdk-sdk.cur.CurReportDefinition.property.reportName"></a>

- *Type:* `string`

---

##### `s3Bucket`<sup>Required</sup> <a name="aws-cdk-sdk.cur.CurReportDefinition.property.s3Bucket"></a>

- *Type:* `string`

---

##### `s3Prefix`<sup>Required</sup> <a name="aws-cdk-sdk.cur.CurReportDefinition.property.s3Prefix"></a>

- *Type:* `string`

---

##### `s3Region`<sup>Required</sup> <a name="aws-cdk-sdk.cur.CurReportDefinition.property.s3Region"></a>

- *Type:* `string`

---

##### `timeUnit`<sup>Required</sup> <a name="aws-cdk-sdk.cur.CurReportDefinition.property.timeUnit"></a>

- *Type:* `string`

---

##### `additionalArtifacts`<sup>Optional</sup> <a name="aws-cdk-sdk.cur.CurReportDefinition.property.additionalArtifacts"></a>

- *Type:* `string`[]

---

##### `refreshClosedReports`<sup>Optional</sup> <a name="aws-cdk-sdk.cur.CurReportDefinition.property.refreshClosedReports"></a>

- *Type:* `boolean`

---

##### `reportVersioning`<sup>Optional</sup> <a name="aws-cdk-sdk.cur.CurReportDefinition.property.reportVersioning"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### CURResponsesDeleteReportDefinition <a name="aws-cdk-sdk.cur.CURResponsesDeleteReportDefinition"></a>

#### Initializer <a name="aws-cdk-sdk.cur.CURResponsesDeleteReportDefinition.Initializer"></a>

```typescript
import { cur } from 'aws-cdk-sdk'

new cur.CURResponsesDeleteReportDefinition(__scope: Construct, __resources: string[], __input: CurDeleteReportDefinitionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cur.CURResponsesDeleteReportDefinition.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cur.CURResponsesDeleteReportDefinition.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cur.CURResponsesDeleteReportDefinition.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cur.CurDeleteReportDefinitionRequest`](#aws-cdk-sdk.cur.CurDeleteReportDefinitionRequest)

---



#### Properties <a name="Properties"></a>

##### `responseMessage`<sup>Required</sup> <a name="aws-cdk-sdk.cur.CURResponsesDeleteReportDefinition.property.responseMessage"></a>

- *Type:* `string`

---


### CURResponsesDescribeReportDefinitions <a name="aws-cdk-sdk.cur.CURResponsesDescribeReportDefinitions"></a>

#### Initializer <a name="aws-cdk-sdk.cur.CURResponsesDescribeReportDefinitions.Initializer"></a>

```typescript
import { cur } from 'aws-cdk-sdk'

new cur.CURResponsesDescribeReportDefinitions(__scope: Construct, __resources: string[], __input: CurDescribeReportDefinitionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cur.CURResponsesDescribeReportDefinitions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cur.CURResponsesDescribeReportDefinitions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cur.CURResponsesDescribeReportDefinitions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cur.CurDescribeReportDefinitionsRequest`](#aws-cdk-sdk.cur.CurDescribeReportDefinitionsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.cur.CURResponsesDescribeReportDefinitions.property.nextToken"></a>

- *Type:* `string`

---

##### `reportDefinitions`<sup>Required</sup> <a name="aws-cdk-sdk.cur.CURResponsesDescribeReportDefinitions.property.reportDefinitions"></a>

- *Type:* [`aws-cdk-sdk.cur.CurReportDefinition`](#aws-cdk-sdk.cur.CurReportDefinition)[]

---



