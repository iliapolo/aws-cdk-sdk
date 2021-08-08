# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### MigrationHubConfigClient <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigClient"></a>

#### Initializer <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigClient.Initializer"></a>

```typescript
import { migrationhubconfig } from 'aws-cdk-sdk'

new migrationhubconfig.MigrationHubConfigClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `createHomeRegionControl` <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigClient.createHomeRegionControl"></a>

```typescript
public createHomeRegionControl(input: MigrationHubConfigCreateHomeRegionControlRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.migrationhubconfig.MigrationHubConfigCreateHomeRegionControlRequest`](#aws-cdk-sdk.migrationhubconfig.MigrationHubConfigCreateHomeRegionControlRequest)

---

##### `describeHomeRegionControls` <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigClient.describeHomeRegionControls"></a>

```typescript
public describeHomeRegionControls(input: MigrationHubConfigDescribeHomeRegionControlsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.migrationhubconfig.MigrationHubConfigDescribeHomeRegionControlsRequest`](#aws-cdk-sdk.migrationhubconfig.MigrationHubConfigDescribeHomeRegionControlsRequest)

---

##### `fetchHomeRegion` <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigClient.fetchHomeRegion"></a>

```typescript
public fetchHomeRegion()
```




## Structs <a name="Structs"></a>

### MigrationHubConfigCreateHomeRegionControlRequest <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigCreateHomeRegionControlRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { migrationhubconfig } from 'aws-cdk-sdk'

const migrationHubConfigCreateHomeRegionControlRequest: migrationhubconfig.MigrationHubConfigCreateHomeRegionControlRequest = { ... }
```

##### `homeRegion`<sup>Required</sup> <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigCreateHomeRegionControlRequest.property.homeRegion"></a>

- *Type:* `string`

---

##### `target`<sup>Required</sup> <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigCreateHomeRegionControlRequest.property.target"></a>

- *Type:* [`aws-cdk-sdk.migrationhubconfig.MigrationHubConfigTarget`](#aws-cdk-sdk.migrationhubconfig.MigrationHubConfigTarget)

---

##### `dryRun`<sup>Optional</sup> <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigCreateHomeRegionControlRequest.property.dryRun"></a>

- *Type:* `boolean`

---

### MigrationHubConfigCreateHomeRegionControlResult <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigCreateHomeRegionControlResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { migrationhubconfig } from 'aws-cdk-sdk'

const migrationHubConfigCreateHomeRegionControlResult: migrationhubconfig.MigrationHubConfigCreateHomeRegionControlResult = { ... }
```

##### `homeRegionControl`<sup>Optional</sup> <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigCreateHomeRegionControlResult.property.homeRegionControl"></a>

- *Type:* [`aws-cdk-sdk.migrationhubconfig.MigrationHubConfigHomeRegionControl`](#aws-cdk-sdk.migrationhubconfig.MigrationHubConfigHomeRegionControl)

---

### MigrationHubConfigDescribeHomeRegionControlsRequest <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigDescribeHomeRegionControlsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { migrationhubconfig } from 'aws-cdk-sdk'

const migrationHubConfigDescribeHomeRegionControlsRequest: migrationhubconfig.MigrationHubConfigDescribeHomeRegionControlsRequest = { ... }
```

##### `controlId`<sup>Optional</sup> <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigDescribeHomeRegionControlsRequest.property.controlId"></a>

- *Type:* `string`

---

##### `homeRegion`<sup>Optional</sup> <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigDescribeHomeRegionControlsRequest.property.homeRegion"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigDescribeHomeRegionControlsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigDescribeHomeRegionControlsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `target`<sup>Optional</sup> <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigDescribeHomeRegionControlsRequest.property.target"></a>

- *Type:* [`aws-cdk-sdk.migrationhubconfig.MigrationHubConfigTarget`](#aws-cdk-sdk.migrationhubconfig.MigrationHubConfigTarget)

---

### MigrationHubConfigDescribeHomeRegionControlsResult <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigDescribeHomeRegionControlsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { migrationhubconfig } from 'aws-cdk-sdk'

const migrationHubConfigDescribeHomeRegionControlsResult: migrationhubconfig.MigrationHubConfigDescribeHomeRegionControlsResult = { ... }
```

##### `homeRegionControls`<sup>Optional</sup> <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigDescribeHomeRegionControlsResult.property.homeRegionControls"></a>

- *Type:* [`aws-cdk-sdk.migrationhubconfig.MigrationHubConfigHomeRegionControl`](#aws-cdk-sdk.migrationhubconfig.MigrationHubConfigHomeRegionControl)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigDescribeHomeRegionControlsResult.property.nextToken"></a>

- *Type:* `string`

---

### MigrationHubConfigGetHomeRegionRequest <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigGetHomeRegionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { migrationhubconfig } from 'aws-cdk-sdk'

const migrationHubConfigGetHomeRegionRequest: migrationhubconfig.MigrationHubConfigGetHomeRegionRequest = { ... }
```

### MigrationHubConfigGetHomeRegionResult <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigGetHomeRegionResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { migrationhubconfig } from 'aws-cdk-sdk'

const migrationHubConfigGetHomeRegionResult: migrationhubconfig.MigrationHubConfigGetHomeRegionResult = { ... }
```

##### `homeRegion`<sup>Optional</sup> <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigGetHomeRegionResult.property.homeRegion"></a>

- *Type:* `string`

---

### MigrationHubConfigHomeRegionControl <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigHomeRegionControl"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { migrationhubconfig } from 'aws-cdk-sdk'

const migrationHubConfigHomeRegionControl: migrationhubconfig.MigrationHubConfigHomeRegionControl = { ... }
```

##### `controlId`<sup>Optional</sup> <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigHomeRegionControl.property.controlId"></a>

- *Type:* `string`

---

##### `homeRegion`<sup>Optional</sup> <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigHomeRegionControl.property.homeRegion"></a>

- *Type:* `string`

---

##### `requestedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigHomeRegionControl.property.requestedTime"></a>

- *Type:* `string`

---

##### `target`<sup>Optional</sup> <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigHomeRegionControl.property.target"></a>

- *Type:* [`aws-cdk-sdk.migrationhubconfig.MigrationHubConfigTarget`](#aws-cdk-sdk.migrationhubconfig.MigrationHubConfigTarget)

---

### MigrationHubConfigTarget <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigTarget"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { migrationhubconfig } from 'aws-cdk-sdk'

const migrationHubConfigTarget: migrationhubconfig.MigrationHubConfigTarget = { ... }
```

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigTarget.property.type"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigTarget.property.id"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### MigrationHubConfigResponsesCreateHomeRegionControl <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigResponsesCreateHomeRegionControl"></a>

#### Initializer <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigResponsesCreateHomeRegionControl.Initializer"></a>

```typescript
import { migrationhubconfig } from 'aws-cdk-sdk'

new migrationhubconfig.MigrationHubConfigResponsesCreateHomeRegionControl(__scope: Construct, __resources: string[], __input: MigrationHubConfigCreateHomeRegionControlRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigResponsesCreateHomeRegionControl.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigResponsesCreateHomeRegionControl.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigResponsesCreateHomeRegionControl.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.migrationhubconfig.MigrationHubConfigCreateHomeRegionControlRequest`](#aws-cdk-sdk.migrationhubconfig.MigrationHubConfigCreateHomeRegionControlRequest)

---



#### Properties <a name="Properties"></a>

##### `homeRegionControl`<sup>Required</sup> <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigResponsesCreateHomeRegionControl.property.homeRegionControl"></a>

- *Type:* [`aws-cdk-sdk.migrationhubconfig.MigrationHubConfigResponsesCreateHomeRegionControlHomeRegionControl`](#aws-cdk-sdk.migrationhubconfig.MigrationHubConfigResponsesCreateHomeRegionControlHomeRegionControl)

---


### MigrationHubConfigResponsesCreateHomeRegionControlHomeRegionControl <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigResponsesCreateHomeRegionControlHomeRegionControl"></a>

#### Initializer <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigResponsesCreateHomeRegionControlHomeRegionControl.Initializer"></a>

```typescript
import { migrationhubconfig } from 'aws-cdk-sdk'

new migrationhubconfig.MigrationHubConfigResponsesCreateHomeRegionControlHomeRegionControl(__scope: Construct, __resources: string[], __input: MigrationHubConfigCreateHomeRegionControlRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigResponsesCreateHomeRegionControlHomeRegionControl.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigResponsesCreateHomeRegionControlHomeRegionControl.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigResponsesCreateHomeRegionControlHomeRegionControl.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.migrationhubconfig.MigrationHubConfigCreateHomeRegionControlRequest`](#aws-cdk-sdk.migrationhubconfig.MigrationHubConfigCreateHomeRegionControlRequest)

---



#### Properties <a name="Properties"></a>

##### `controlId`<sup>Required</sup> <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigResponsesCreateHomeRegionControlHomeRegionControl.property.controlId"></a>

- *Type:* `string`

---

##### `homeRegion`<sup>Required</sup> <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigResponsesCreateHomeRegionControlHomeRegionControl.property.homeRegion"></a>

- *Type:* `string`

---

##### `requestedTime`<sup>Required</sup> <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigResponsesCreateHomeRegionControlHomeRegionControl.property.requestedTime"></a>

- *Type:* `string`

---

##### `target`<sup>Required</sup> <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigResponsesCreateHomeRegionControlHomeRegionControl.property.target"></a>

- *Type:* [`aws-cdk-sdk.migrationhubconfig.MigrationHubConfigResponsesCreateHomeRegionControlHomeRegionControlTarget`](#aws-cdk-sdk.migrationhubconfig.MigrationHubConfigResponsesCreateHomeRegionControlHomeRegionControlTarget)

---


### MigrationHubConfigResponsesCreateHomeRegionControlHomeRegionControlTarget <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigResponsesCreateHomeRegionControlHomeRegionControlTarget"></a>

#### Initializer <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigResponsesCreateHomeRegionControlHomeRegionControlTarget.Initializer"></a>

```typescript
import { migrationhubconfig } from 'aws-cdk-sdk'

new migrationhubconfig.MigrationHubConfigResponsesCreateHomeRegionControlHomeRegionControlTarget(__scope: Construct, __resources: string[], __input: MigrationHubConfigCreateHomeRegionControlRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigResponsesCreateHomeRegionControlHomeRegionControlTarget.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigResponsesCreateHomeRegionControlHomeRegionControlTarget.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigResponsesCreateHomeRegionControlHomeRegionControlTarget.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.migrationhubconfig.MigrationHubConfigCreateHomeRegionControlRequest`](#aws-cdk-sdk.migrationhubconfig.MigrationHubConfigCreateHomeRegionControlRequest)

---



#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigResponsesCreateHomeRegionControlHomeRegionControlTarget.property.id"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigResponsesCreateHomeRegionControlHomeRegionControlTarget.property.type"></a>

- *Type:* `string`

---


### MigrationHubConfigResponsesDescribeHomeRegionControls <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigResponsesDescribeHomeRegionControls"></a>

#### Initializer <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigResponsesDescribeHomeRegionControls.Initializer"></a>

```typescript
import { migrationhubconfig } from 'aws-cdk-sdk'

new migrationhubconfig.MigrationHubConfigResponsesDescribeHomeRegionControls(__scope: Construct, __resources: string[], __input: MigrationHubConfigDescribeHomeRegionControlsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigResponsesDescribeHomeRegionControls.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigResponsesDescribeHomeRegionControls.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigResponsesDescribeHomeRegionControls.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.migrationhubconfig.MigrationHubConfigDescribeHomeRegionControlsRequest`](#aws-cdk-sdk.migrationhubconfig.MigrationHubConfigDescribeHomeRegionControlsRequest)

---



#### Properties <a name="Properties"></a>

##### `homeRegionControls`<sup>Required</sup> <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigResponsesDescribeHomeRegionControls.property.homeRegionControls"></a>

- *Type:* [`aws-cdk-sdk.migrationhubconfig.MigrationHubConfigHomeRegionControl`](#aws-cdk-sdk.migrationhubconfig.MigrationHubConfigHomeRegionControl)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigResponsesDescribeHomeRegionControls.property.nextToken"></a>

- *Type:* `string`

---


### MigrationHubConfigResponsesFetchHomeRegion <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigResponsesFetchHomeRegion"></a>

#### Initializer <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigResponsesFetchHomeRegion.Initializer"></a>

```typescript
import { migrationhubconfig } from 'aws-cdk-sdk'

new migrationhubconfig.MigrationHubConfigResponsesFetchHomeRegion(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigResponsesFetchHomeRegion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigResponsesFetchHomeRegion.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `homeRegion`<sup>Required</sup> <a name="aws-cdk-sdk.migrationhubconfig.MigrationHubConfigResponsesFetchHomeRegion.property.homeRegion"></a>

- *Type:* `string`

---



