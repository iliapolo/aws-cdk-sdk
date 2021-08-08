# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### HoneycodeClient <a name="aws-cdk-sdk.honeycode.HoneycodeClient"></a>

#### Initializer <a name="aws-cdk-sdk.honeycode.HoneycodeClient.Initializer"></a>

```typescript
import { honeycode } from 'aws-cdk-sdk'

new honeycode.HoneycodeClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.honeycode.HoneycodeClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.honeycode.HoneycodeClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.honeycode.HoneycodeClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `fetchScreenData` <a name="aws-cdk-sdk.honeycode.HoneycodeClient.fetchScreenData"></a>

```typescript
public fetchScreenData(input: HoneycodeGetScreenDataRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.honeycode.HoneycodeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.honeycode.HoneycodeGetScreenDataRequest`](#aws-cdk-sdk.honeycode.HoneycodeGetScreenDataRequest)

---

##### `invokeScreenAutomation` <a name="aws-cdk-sdk.honeycode.HoneycodeClient.invokeScreenAutomation"></a>

```typescript
public invokeScreenAutomation(input: HoneycodeInvokeScreenAutomationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.honeycode.HoneycodeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.honeycode.HoneycodeInvokeScreenAutomationRequest`](#aws-cdk-sdk.honeycode.HoneycodeInvokeScreenAutomationRequest)

---




## Structs <a name="Structs"></a>

### HoneycodeColumnMetadata <a name="aws-cdk-sdk.honeycode.HoneycodeColumnMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { honeycode } from 'aws-cdk-sdk'

const honeycodeColumnMetadata: honeycode.HoneycodeColumnMetadata = { ... }
```

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.honeycode.HoneycodeColumnMetadata.property.format"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.honeycode.HoneycodeColumnMetadata.property.name"></a>

- *Type:* `string`

---

### HoneycodeDataItem <a name="aws-cdk-sdk.honeycode.HoneycodeDataItem"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { honeycode } from 'aws-cdk-sdk'

const honeycodeDataItem: honeycode.HoneycodeDataItem = { ... }
```

##### `formattedValue`<sup>Optional</sup> <a name="aws-cdk-sdk.honeycode.HoneycodeDataItem.property.formattedValue"></a>

- *Type:* `string`

---

##### `overrideFormat`<sup>Optional</sup> <a name="aws-cdk-sdk.honeycode.HoneycodeDataItem.property.overrideFormat"></a>

- *Type:* `string`

---

##### `rawValue`<sup>Optional</sup> <a name="aws-cdk-sdk.honeycode.HoneycodeDataItem.property.rawValue"></a>

- *Type:* `string`

---

### HoneycodeGetScreenDataRequest <a name="aws-cdk-sdk.honeycode.HoneycodeGetScreenDataRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { honeycode } from 'aws-cdk-sdk'

const honeycodeGetScreenDataRequest: honeycode.HoneycodeGetScreenDataRequest = { ... }
```

##### `appId`<sup>Required</sup> <a name="aws-cdk-sdk.honeycode.HoneycodeGetScreenDataRequest.property.appId"></a>

- *Type:* `string`

---

##### `screenId`<sup>Required</sup> <a name="aws-cdk-sdk.honeycode.HoneycodeGetScreenDataRequest.property.screenId"></a>

- *Type:* `string`

---

##### `workbookId`<sup>Required</sup> <a name="aws-cdk-sdk.honeycode.HoneycodeGetScreenDataRequest.property.workbookId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.honeycode.HoneycodeGetScreenDataRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.honeycode.HoneycodeGetScreenDataRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `variables`<sup>Optional</sup> <a name="aws-cdk-sdk.honeycode.HoneycodeGetScreenDataRequest.property.variables"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.honeycode.HoneycodeVariableValue`](#aws-cdk-sdk.honeycode.HoneycodeVariableValue)}

---

### HoneycodeGetScreenDataResult <a name="aws-cdk-sdk.honeycode.HoneycodeGetScreenDataResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { honeycode } from 'aws-cdk-sdk'

const honeycodeGetScreenDataResult: honeycode.HoneycodeGetScreenDataResult = { ... }
```

##### `results`<sup>Required</sup> <a name="aws-cdk-sdk.honeycode.HoneycodeGetScreenDataResult.property.results"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.honeycode.HoneycodeResultSet`](#aws-cdk-sdk.honeycode.HoneycodeResultSet)}

---

##### `workbookCursor`<sup>Required</sup> <a name="aws-cdk-sdk.honeycode.HoneycodeGetScreenDataResult.property.workbookCursor"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.honeycode.HoneycodeGetScreenDataResult.property.nextToken"></a>

- *Type:* `string`

---

### HoneycodeInvokeScreenAutomationRequest <a name="aws-cdk-sdk.honeycode.HoneycodeInvokeScreenAutomationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { honeycode } from 'aws-cdk-sdk'

const honeycodeInvokeScreenAutomationRequest: honeycode.HoneycodeInvokeScreenAutomationRequest = { ... }
```

##### `appId`<sup>Required</sup> <a name="aws-cdk-sdk.honeycode.HoneycodeInvokeScreenAutomationRequest.property.appId"></a>

- *Type:* `string`

---

##### `screenAutomationId`<sup>Required</sup> <a name="aws-cdk-sdk.honeycode.HoneycodeInvokeScreenAutomationRequest.property.screenAutomationId"></a>

- *Type:* `string`

---

##### `screenId`<sup>Required</sup> <a name="aws-cdk-sdk.honeycode.HoneycodeInvokeScreenAutomationRequest.property.screenId"></a>

- *Type:* `string`

---

##### `workbookId`<sup>Required</sup> <a name="aws-cdk-sdk.honeycode.HoneycodeInvokeScreenAutomationRequest.property.workbookId"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.honeycode.HoneycodeInvokeScreenAutomationRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `rowId`<sup>Optional</sup> <a name="aws-cdk-sdk.honeycode.HoneycodeInvokeScreenAutomationRequest.property.rowId"></a>

- *Type:* `string`

---

##### `variables`<sup>Optional</sup> <a name="aws-cdk-sdk.honeycode.HoneycodeInvokeScreenAutomationRequest.property.variables"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.honeycode.HoneycodeVariableValue`](#aws-cdk-sdk.honeycode.HoneycodeVariableValue)}

---

### HoneycodeInvokeScreenAutomationResult <a name="aws-cdk-sdk.honeycode.HoneycodeInvokeScreenAutomationResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { honeycode } from 'aws-cdk-sdk'

const honeycodeInvokeScreenAutomationResult: honeycode.HoneycodeInvokeScreenAutomationResult = { ... }
```

##### `workbookCursor`<sup>Required</sup> <a name="aws-cdk-sdk.honeycode.HoneycodeInvokeScreenAutomationResult.property.workbookCursor"></a>

- *Type:* `number`

---

### HoneycodeResultRow <a name="aws-cdk-sdk.honeycode.HoneycodeResultRow"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { honeycode } from 'aws-cdk-sdk'

const honeycodeResultRow: honeycode.HoneycodeResultRow = { ... }
```

##### `dataItems`<sup>Required</sup> <a name="aws-cdk-sdk.honeycode.HoneycodeResultRow.property.dataItems"></a>

- *Type:* [`aws-cdk-sdk.honeycode.HoneycodeDataItem`](#aws-cdk-sdk.honeycode.HoneycodeDataItem)[]

---

##### `rowId`<sup>Optional</sup> <a name="aws-cdk-sdk.honeycode.HoneycodeResultRow.property.rowId"></a>

- *Type:* `string`

---

### HoneycodeResultSet <a name="aws-cdk-sdk.honeycode.HoneycodeResultSet"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { honeycode } from 'aws-cdk-sdk'

const honeycodeResultSet: honeycode.HoneycodeResultSet = { ... }
```

##### `headers`<sup>Required</sup> <a name="aws-cdk-sdk.honeycode.HoneycodeResultSet.property.headers"></a>

- *Type:* [`aws-cdk-sdk.honeycode.HoneycodeColumnMetadata`](#aws-cdk-sdk.honeycode.HoneycodeColumnMetadata)[]

---

##### `rows`<sup>Required</sup> <a name="aws-cdk-sdk.honeycode.HoneycodeResultSet.property.rows"></a>

- *Type:* [`aws-cdk-sdk.honeycode.HoneycodeResultRow`](#aws-cdk-sdk.honeycode.HoneycodeResultRow)[]

---

### HoneycodeVariableValue <a name="aws-cdk-sdk.honeycode.HoneycodeVariableValue"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { honeycode } from 'aws-cdk-sdk'

const honeycodeVariableValue: honeycode.HoneycodeVariableValue = { ... }
```

##### `rawValue`<sup>Required</sup> <a name="aws-cdk-sdk.honeycode.HoneycodeVariableValue.property.rawValue"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### HoneycodeResponsesFetchScreenData <a name="aws-cdk-sdk.honeycode.HoneycodeResponsesFetchScreenData"></a>

#### Initializer <a name="aws-cdk-sdk.honeycode.HoneycodeResponsesFetchScreenData.Initializer"></a>

```typescript
import { honeycode } from 'aws-cdk-sdk'

new honeycode.HoneycodeResponsesFetchScreenData(__scope: Construct, __resources: string[], __input: HoneycodeGetScreenDataRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.honeycode.HoneycodeResponsesFetchScreenData.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.honeycode.HoneycodeResponsesFetchScreenData.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.honeycode.HoneycodeResponsesFetchScreenData.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.honeycode.HoneycodeGetScreenDataRequest`](#aws-cdk-sdk.honeycode.HoneycodeGetScreenDataRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.honeycode.HoneycodeResponsesFetchScreenData.property.nextToken"></a>

- *Type:* `string`

---

##### `results`<sup>Required</sup> <a name="aws-cdk-sdk.honeycode.HoneycodeResponsesFetchScreenData.property.results"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.honeycode.HoneycodeResultSet`](#aws-cdk-sdk.honeycode.HoneycodeResultSet)}

---

##### `workbookCursor`<sup>Required</sup> <a name="aws-cdk-sdk.honeycode.HoneycodeResponsesFetchScreenData.property.workbookCursor"></a>

- *Type:* `number`

---


### HoneycodeResponsesInvokeScreenAutomation <a name="aws-cdk-sdk.honeycode.HoneycodeResponsesInvokeScreenAutomation"></a>

#### Initializer <a name="aws-cdk-sdk.honeycode.HoneycodeResponsesInvokeScreenAutomation.Initializer"></a>

```typescript
import { honeycode } from 'aws-cdk-sdk'

new honeycode.HoneycodeResponsesInvokeScreenAutomation(__scope: Construct, __resources: string[], __input: HoneycodeInvokeScreenAutomationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.honeycode.HoneycodeResponsesInvokeScreenAutomation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.honeycode.HoneycodeResponsesInvokeScreenAutomation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.honeycode.HoneycodeResponsesInvokeScreenAutomation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.honeycode.HoneycodeInvokeScreenAutomationRequest`](#aws-cdk-sdk.honeycode.HoneycodeInvokeScreenAutomationRequest)

---



#### Properties <a name="Properties"></a>

##### `workbookCursor`<sup>Required</sup> <a name="aws-cdk-sdk.honeycode.HoneycodeResponsesInvokeScreenAutomation.property.workbookCursor"></a>

- *Type:* `number`

---



