# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### SchemasClient <a name="aws-cdk-sdk.schemas.SchemasClient"></a>

#### Initializer <a name="aws-cdk-sdk.schemas.SchemasClient.Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

new schemas.SchemasClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `createDiscoverer` <a name="aws-cdk-sdk.schemas.SchemasClient.createDiscoverer"></a>

```typescript
public createDiscoverer(input: SchemasCreateDiscovererRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.schemas.SchemasCreateDiscovererRequest`](#aws-cdk-sdk.schemas.SchemasCreateDiscovererRequest)

---

##### `createRegistry` <a name="aws-cdk-sdk.schemas.SchemasClient.createRegistry"></a>

```typescript
public createRegistry(input: SchemasCreateRegistryRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.schemas.SchemasCreateRegistryRequest`](#aws-cdk-sdk.schemas.SchemasCreateRegistryRequest)

---

##### `createSchema` <a name="aws-cdk-sdk.schemas.SchemasClient.createSchema"></a>

```typescript
public createSchema(input: SchemasCreateSchemaRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.schemas.SchemasCreateSchemaRequest`](#aws-cdk-sdk.schemas.SchemasCreateSchemaRequest)

---

##### `deleteDiscoverer` <a name="aws-cdk-sdk.schemas.SchemasClient.deleteDiscoverer"></a>

```typescript
public deleteDiscoverer(input: SchemasDeleteDiscovererRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.schemas.SchemasDeleteDiscovererRequest`](#aws-cdk-sdk.schemas.SchemasDeleteDiscovererRequest)

---

##### `deleteRegistry` <a name="aws-cdk-sdk.schemas.SchemasClient.deleteRegistry"></a>

```typescript
public deleteRegistry(input: SchemasDeleteRegistryRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.schemas.SchemasDeleteRegistryRequest`](#aws-cdk-sdk.schemas.SchemasDeleteRegistryRequest)

---

##### `deleteResourcePolicy` <a name="aws-cdk-sdk.schemas.SchemasClient.deleteResourcePolicy"></a>

```typescript
public deleteResourcePolicy(input: SchemasDeleteResourcePolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.schemas.SchemasDeleteResourcePolicyRequest`](#aws-cdk-sdk.schemas.SchemasDeleteResourcePolicyRequest)

---

##### `deleteSchema` <a name="aws-cdk-sdk.schemas.SchemasClient.deleteSchema"></a>

```typescript
public deleteSchema(input: SchemasDeleteSchemaRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.schemas.SchemasDeleteSchemaRequest`](#aws-cdk-sdk.schemas.SchemasDeleteSchemaRequest)

---

##### `deleteSchemaVersion` <a name="aws-cdk-sdk.schemas.SchemasClient.deleteSchemaVersion"></a>

```typescript
public deleteSchemaVersion(input: SchemasDeleteSchemaVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.schemas.SchemasDeleteSchemaVersionRequest`](#aws-cdk-sdk.schemas.SchemasDeleteSchemaVersionRequest)

---

##### `describeCodeBinding` <a name="aws-cdk-sdk.schemas.SchemasClient.describeCodeBinding"></a>

```typescript
public describeCodeBinding(input: SchemasDescribeCodeBindingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.schemas.SchemasDescribeCodeBindingRequest`](#aws-cdk-sdk.schemas.SchemasDescribeCodeBindingRequest)

---

##### `describeDiscoverer` <a name="aws-cdk-sdk.schemas.SchemasClient.describeDiscoverer"></a>

```typescript
public describeDiscoverer(input: SchemasDescribeDiscovererRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.schemas.SchemasDescribeDiscovererRequest`](#aws-cdk-sdk.schemas.SchemasDescribeDiscovererRequest)

---

##### `describeRegistry` <a name="aws-cdk-sdk.schemas.SchemasClient.describeRegistry"></a>

```typescript
public describeRegistry(input: SchemasDescribeRegistryRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.schemas.SchemasDescribeRegistryRequest`](#aws-cdk-sdk.schemas.SchemasDescribeRegistryRequest)

---

##### `describeSchema` <a name="aws-cdk-sdk.schemas.SchemasClient.describeSchema"></a>

```typescript
public describeSchema(input: SchemasDescribeSchemaRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.schemas.SchemasDescribeSchemaRequest`](#aws-cdk-sdk.schemas.SchemasDescribeSchemaRequest)

---

##### `exportSchema` <a name="aws-cdk-sdk.schemas.SchemasClient.exportSchema"></a>

```typescript
public exportSchema(input: SchemasExportSchemaRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.schemas.SchemasExportSchemaRequest`](#aws-cdk-sdk.schemas.SchemasExportSchemaRequest)

---

##### `fetchCodeBindingSource` <a name="aws-cdk-sdk.schemas.SchemasClient.fetchCodeBindingSource"></a>

```typescript
public fetchCodeBindingSource(input: SchemasGetCodeBindingSourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.schemas.SchemasGetCodeBindingSourceRequest`](#aws-cdk-sdk.schemas.SchemasGetCodeBindingSourceRequest)

---

##### `fetchDiscoveredSchema` <a name="aws-cdk-sdk.schemas.SchemasClient.fetchDiscoveredSchema"></a>

```typescript
public fetchDiscoveredSchema(input: SchemasGetDiscoveredSchemaRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.schemas.SchemasGetDiscoveredSchemaRequest`](#aws-cdk-sdk.schemas.SchemasGetDiscoveredSchemaRequest)

---

##### `fetchResourcePolicy` <a name="aws-cdk-sdk.schemas.SchemasClient.fetchResourcePolicy"></a>

```typescript
public fetchResourcePolicy(input: SchemasGetResourcePolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.schemas.SchemasGetResourcePolicyRequest`](#aws-cdk-sdk.schemas.SchemasGetResourcePolicyRequest)

---

##### `listDiscoverers` <a name="aws-cdk-sdk.schemas.SchemasClient.listDiscoverers"></a>

```typescript
public listDiscoverers(input: SchemasListDiscoverersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.schemas.SchemasListDiscoverersRequest`](#aws-cdk-sdk.schemas.SchemasListDiscoverersRequest)

---

##### `listRegistries` <a name="aws-cdk-sdk.schemas.SchemasClient.listRegistries"></a>

```typescript
public listRegistries(input: SchemasListRegistriesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.schemas.SchemasListRegistriesRequest`](#aws-cdk-sdk.schemas.SchemasListRegistriesRequest)

---

##### `listSchemas` <a name="aws-cdk-sdk.schemas.SchemasClient.listSchemas"></a>

```typescript
public listSchemas(input: SchemasListSchemasRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.schemas.SchemasListSchemasRequest`](#aws-cdk-sdk.schemas.SchemasListSchemasRequest)

---

##### `listSchemaVersions` <a name="aws-cdk-sdk.schemas.SchemasClient.listSchemaVersions"></a>

```typescript
public listSchemaVersions(input: SchemasListSchemaVersionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.schemas.SchemasListSchemaVersionsRequest`](#aws-cdk-sdk.schemas.SchemasListSchemaVersionsRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.schemas.SchemasClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: SchemasListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.schemas.SchemasListTagsForResourceRequest`](#aws-cdk-sdk.schemas.SchemasListTagsForResourceRequest)

---

##### `putCodeBinding` <a name="aws-cdk-sdk.schemas.SchemasClient.putCodeBinding"></a>

```typescript
public putCodeBinding(input: SchemasPutCodeBindingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.schemas.SchemasPutCodeBindingRequest`](#aws-cdk-sdk.schemas.SchemasPutCodeBindingRequest)

---

##### `putResourcePolicy` <a name="aws-cdk-sdk.schemas.SchemasClient.putResourcePolicy"></a>

```typescript
public putResourcePolicy(input: SchemasPutResourcePolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.schemas.SchemasPutResourcePolicyRequest`](#aws-cdk-sdk.schemas.SchemasPutResourcePolicyRequest)

---

##### `searchSchemas` <a name="aws-cdk-sdk.schemas.SchemasClient.searchSchemas"></a>

```typescript
public searchSchemas(input: SchemasSearchSchemasRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.schemas.SchemasSearchSchemasRequest`](#aws-cdk-sdk.schemas.SchemasSearchSchemasRequest)

---

##### `startDiscoverer` <a name="aws-cdk-sdk.schemas.SchemasClient.startDiscoverer"></a>

```typescript
public startDiscoverer(input: SchemasStartDiscovererRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.schemas.SchemasStartDiscovererRequest`](#aws-cdk-sdk.schemas.SchemasStartDiscovererRequest)

---

##### `stopDiscoverer` <a name="aws-cdk-sdk.schemas.SchemasClient.stopDiscoverer"></a>

```typescript
public stopDiscoverer(input: SchemasStopDiscovererRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.schemas.SchemasStopDiscovererRequest`](#aws-cdk-sdk.schemas.SchemasStopDiscovererRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.schemas.SchemasClient.tagResource"></a>

```typescript
public tagResource(input: SchemasTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.schemas.SchemasTagResourceRequest`](#aws-cdk-sdk.schemas.SchemasTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.schemas.SchemasClient.untagResource"></a>

```typescript
public untagResource(input: SchemasUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.schemas.SchemasUntagResourceRequest`](#aws-cdk-sdk.schemas.SchemasUntagResourceRequest)

---

##### `updateDiscoverer` <a name="aws-cdk-sdk.schemas.SchemasClient.updateDiscoverer"></a>

```typescript
public updateDiscoverer(input: SchemasUpdateDiscovererRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.schemas.SchemasUpdateDiscovererRequest`](#aws-cdk-sdk.schemas.SchemasUpdateDiscovererRequest)

---

##### `updateRegistry` <a name="aws-cdk-sdk.schemas.SchemasClient.updateRegistry"></a>

```typescript
public updateRegistry(input: SchemasUpdateRegistryRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.schemas.SchemasUpdateRegistryRequest`](#aws-cdk-sdk.schemas.SchemasUpdateRegistryRequest)

---

##### `updateSchema` <a name="aws-cdk-sdk.schemas.SchemasClient.updateSchema"></a>

```typescript
public updateSchema(input: SchemasUpdateSchemaRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.schemas.SchemasUpdateSchemaRequest`](#aws-cdk-sdk.schemas.SchemasUpdateSchemaRequest)

---




## Structs <a name="Structs"></a>

### SchemasCreateDiscovererRequest <a name="aws-cdk-sdk.schemas.SchemasCreateDiscovererRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

const schemasCreateDiscovererRequest: schemas.SchemasCreateDiscovererRequest = { ... }
```

##### `sourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasCreateDiscovererRequest.property.sourceArn"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasCreateDiscovererRequest.property.description"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasCreateDiscovererRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### SchemasCreateDiscovererResponse <a name="aws-cdk-sdk.schemas.SchemasCreateDiscovererResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

const schemasCreateDiscovererResponse: schemas.SchemasCreateDiscovererResponse = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasCreateDiscovererResponse.property.description"></a>

- *Type:* `string`

---

##### `discovererArn`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasCreateDiscovererResponse.property.discovererArn"></a>

- *Type:* `string`

---

##### `discovererId`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasCreateDiscovererResponse.property.discovererId"></a>

- *Type:* `string`

---

##### `sourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasCreateDiscovererResponse.property.sourceArn"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasCreateDiscovererResponse.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasCreateDiscovererResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### SchemasCreateRegistryRequest <a name="aws-cdk-sdk.schemas.SchemasCreateRegistryRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

const schemasCreateRegistryRequest: schemas.SchemasCreateRegistryRequest = { ... }
```

##### `registryName`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasCreateRegistryRequest.property.registryName"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasCreateRegistryRequest.property.description"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasCreateRegistryRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### SchemasCreateRegistryResponse <a name="aws-cdk-sdk.schemas.SchemasCreateRegistryResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

const schemasCreateRegistryResponse: schemas.SchemasCreateRegistryResponse = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasCreateRegistryResponse.property.description"></a>

- *Type:* `string`

---

##### `registryArn`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasCreateRegistryResponse.property.registryArn"></a>

- *Type:* `string`

---

##### `registryName`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasCreateRegistryResponse.property.registryName"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasCreateRegistryResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### SchemasCreateSchemaRequest <a name="aws-cdk-sdk.schemas.SchemasCreateSchemaRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

const schemasCreateSchemaRequest: schemas.SchemasCreateSchemaRequest = { ... }
```

##### `content`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasCreateSchemaRequest.property.content"></a>

- *Type:* `string`

---

##### `registryName`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasCreateSchemaRequest.property.registryName"></a>

- *Type:* `string`

---

##### `schemaName`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasCreateSchemaRequest.property.schemaName"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasCreateSchemaRequest.property.type"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasCreateSchemaRequest.property.description"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasCreateSchemaRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### SchemasCreateSchemaResponse <a name="aws-cdk-sdk.schemas.SchemasCreateSchemaResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

const schemasCreateSchemaResponse: schemas.SchemasCreateSchemaResponse = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasCreateSchemaResponse.property.description"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasCreateSchemaResponse.property.lastModified"></a>

- *Type:* `string`

---

##### `schemaArn`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasCreateSchemaResponse.property.schemaArn"></a>

- *Type:* `string`

---

##### `schemaName`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasCreateSchemaResponse.property.schemaName"></a>

- *Type:* `string`

---

##### `schemaVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasCreateSchemaResponse.property.schemaVersion"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasCreateSchemaResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasCreateSchemaResponse.property.type"></a>

- *Type:* `string`

---

##### `versionCreatedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasCreateSchemaResponse.property.versionCreatedDate"></a>

- *Type:* `string`

---

### SchemasDeleteDiscovererRequest <a name="aws-cdk-sdk.schemas.SchemasDeleteDiscovererRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

const schemasDeleteDiscovererRequest: schemas.SchemasDeleteDiscovererRequest = { ... }
```

##### `discovererId`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasDeleteDiscovererRequest.property.discovererId"></a>

- *Type:* `string`

---

### SchemasDeleteRegistryRequest <a name="aws-cdk-sdk.schemas.SchemasDeleteRegistryRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

const schemasDeleteRegistryRequest: schemas.SchemasDeleteRegistryRequest = { ... }
```

##### `registryName`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasDeleteRegistryRequest.property.registryName"></a>

- *Type:* `string`

---

### SchemasDeleteResourcePolicyRequest <a name="aws-cdk-sdk.schemas.SchemasDeleteResourcePolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

const schemasDeleteResourcePolicyRequest: schemas.SchemasDeleteResourcePolicyRequest = { ... }
```

##### `registryName`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasDeleteResourcePolicyRequest.property.registryName"></a>

- *Type:* `string`

---

### SchemasDeleteSchemaRequest <a name="aws-cdk-sdk.schemas.SchemasDeleteSchemaRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

const schemasDeleteSchemaRequest: schemas.SchemasDeleteSchemaRequest = { ... }
```

##### `registryName`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasDeleteSchemaRequest.property.registryName"></a>

- *Type:* `string`

---

##### `schemaName`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasDeleteSchemaRequest.property.schemaName"></a>

- *Type:* `string`

---

### SchemasDeleteSchemaVersionRequest <a name="aws-cdk-sdk.schemas.SchemasDeleteSchemaVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

const schemasDeleteSchemaVersionRequest: schemas.SchemasDeleteSchemaVersionRequest = { ... }
```

##### `registryName`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasDeleteSchemaVersionRequest.property.registryName"></a>

- *Type:* `string`

---

##### `schemaName`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasDeleteSchemaVersionRequest.property.schemaName"></a>

- *Type:* `string`

---

##### `schemaVersion`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasDeleteSchemaVersionRequest.property.schemaVersion"></a>

- *Type:* `string`

---

### SchemasDescribeCodeBindingRequest <a name="aws-cdk-sdk.schemas.SchemasDescribeCodeBindingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

const schemasDescribeCodeBindingRequest: schemas.SchemasDescribeCodeBindingRequest = { ... }
```

##### `language`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasDescribeCodeBindingRequest.property.language"></a>

- *Type:* `string`

---

##### `registryName`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasDescribeCodeBindingRequest.property.registryName"></a>

- *Type:* `string`

---

##### `schemaName`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasDescribeCodeBindingRequest.property.schemaName"></a>

- *Type:* `string`

---

##### `schemaVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasDescribeCodeBindingRequest.property.schemaVersion"></a>

- *Type:* `string`

---

### SchemasDescribeCodeBindingResponse <a name="aws-cdk-sdk.schemas.SchemasDescribeCodeBindingResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

const schemasDescribeCodeBindingResponse: schemas.SchemasDescribeCodeBindingResponse = { ... }
```

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasDescribeCodeBindingResponse.property.creationDate"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasDescribeCodeBindingResponse.property.lastModified"></a>

- *Type:* `string`

---

##### `schemaVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasDescribeCodeBindingResponse.property.schemaVersion"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasDescribeCodeBindingResponse.property.status"></a>

- *Type:* `string`

---

### SchemasDescribeDiscovererRequest <a name="aws-cdk-sdk.schemas.SchemasDescribeDiscovererRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

const schemasDescribeDiscovererRequest: schemas.SchemasDescribeDiscovererRequest = { ... }
```

##### `discovererId`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasDescribeDiscovererRequest.property.discovererId"></a>

- *Type:* `string`

---

### SchemasDescribeDiscovererResponse <a name="aws-cdk-sdk.schemas.SchemasDescribeDiscovererResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

const schemasDescribeDiscovererResponse: schemas.SchemasDescribeDiscovererResponse = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasDescribeDiscovererResponse.property.description"></a>

- *Type:* `string`

---

##### `discovererArn`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasDescribeDiscovererResponse.property.discovererArn"></a>

- *Type:* `string`

---

##### `discovererId`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasDescribeDiscovererResponse.property.discovererId"></a>

- *Type:* `string`

---

##### `sourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasDescribeDiscovererResponse.property.sourceArn"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasDescribeDiscovererResponse.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasDescribeDiscovererResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### SchemasDescribeRegistryRequest <a name="aws-cdk-sdk.schemas.SchemasDescribeRegistryRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

const schemasDescribeRegistryRequest: schemas.SchemasDescribeRegistryRequest = { ... }
```

##### `registryName`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasDescribeRegistryRequest.property.registryName"></a>

- *Type:* `string`

---

### SchemasDescribeRegistryResponse <a name="aws-cdk-sdk.schemas.SchemasDescribeRegistryResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

const schemasDescribeRegistryResponse: schemas.SchemasDescribeRegistryResponse = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasDescribeRegistryResponse.property.description"></a>

- *Type:* `string`

---

##### `registryArn`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasDescribeRegistryResponse.property.registryArn"></a>

- *Type:* `string`

---

##### `registryName`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasDescribeRegistryResponse.property.registryName"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasDescribeRegistryResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### SchemasDescribeSchemaRequest <a name="aws-cdk-sdk.schemas.SchemasDescribeSchemaRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

const schemasDescribeSchemaRequest: schemas.SchemasDescribeSchemaRequest = { ... }
```

##### `registryName`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasDescribeSchemaRequest.property.registryName"></a>

- *Type:* `string`

---

##### `schemaName`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasDescribeSchemaRequest.property.schemaName"></a>

- *Type:* `string`

---

##### `schemaVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasDescribeSchemaRequest.property.schemaVersion"></a>

- *Type:* `string`

---

### SchemasDescribeSchemaResponse <a name="aws-cdk-sdk.schemas.SchemasDescribeSchemaResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

const schemasDescribeSchemaResponse: schemas.SchemasDescribeSchemaResponse = { ... }
```

##### `content`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasDescribeSchemaResponse.property.content"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasDescribeSchemaResponse.property.description"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasDescribeSchemaResponse.property.lastModified"></a>

- *Type:* `string`

---

##### `schemaArn`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasDescribeSchemaResponse.property.schemaArn"></a>

- *Type:* `string`

---

##### `schemaName`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasDescribeSchemaResponse.property.schemaName"></a>

- *Type:* `string`

---

##### `schemaVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasDescribeSchemaResponse.property.schemaVersion"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasDescribeSchemaResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasDescribeSchemaResponse.property.type"></a>

- *Type:* `string`

---

##### `versionCreatedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasDescribeSchemaResponse.property.versionCreatedDate"></a>

- *Type:* `string`

---

### SchemasDiscovererSummary <a name="aws-cdk-sdk.schemas.SchemasDiscovererSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

const schemasDiscovererSummary: schemas.SchemasDiscovererSummary = { ... }
```

##### `discovererArn`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasDiscovererSummary.property.discovererArn"></a>

- *Type:* `string`

---

##### `discovererId`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasDiscovererSummary.property.discovererId"></a>

- *Type:* `string`

---

##### `sourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasDiscovererSummary.property.sourceArn"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasDiscovererSummary.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasDiscovererSummary.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### SchemasExportSchemaRequest <a name="aws-cdk-sdk.schemas.SchemasExportSchemaRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

const schemasExportSchemaRequest: schemas.SchemasExportSchemaRequest = { ... }
```

##### `registryName`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasExportSchemaRequest.property.registryName"></a>

- *Type:* `string`

---

##### `schemaName`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasExportSchemaRequest.property.schemaName"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasExportSchemaRequest.property.type"></a>

- *Type:* `string`

---

##### `schemaVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasExportSchemaRequest.property.schemaVersion"></a>

- *Type:* `string`

---

### SchemasExportSchemaResponse <a name="aws-cdk-sdk.schemas.SchemasExportSchemaResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

const schemasExportSchemaResponse: schemas.SchemasExportSchemaResponse = { ... }
```

##### `content`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasExportSchemaResponse.property.content"></a>

- *Type:* `string`

---

##### `schemaArn`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasExportSchemaResponse.property.schemaArn"></a>

- *Type:* `string`

---

##### `schemaName`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasExportSchemaResponse.property.schemaName"></a>

- *Type:* `string`

---

##### `schemaVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasExportSchemaResponse.property.schemaVersion"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasExportSchemaResponse.property.type"></a>

- *Type:* `string`

---

### SchemasGetCodeBindingSourceRequest <a name="aws-cdk-sdk.schemas.SchemasGetCodeBindingSourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

const schemasGetCodeBindingSourceRequest: schemas.SchemasGetCodeBindingSourceRequest = { ... }
```

##### `language`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasGetCodeBindingSourceRequest.property.language"></a>

- *Type:* `string`

---

##### `registryName`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasGetCodeBindingSourceRequest.property.registryName"></a>

- *Type:* `string`

---

##### `schemaName`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasGetCodeBindingSourceRequest.property.schemaName"></a>

- *Type:* `string`

---

##### `schemaVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasGetCodeBindingSourceRequest.property.schemaVersion"></a>

- *Type:* `string`

---

### SchemasGetCodeBindingSourceResponse <a name="aws-cdk-sdk.schemas.SchemasGetCodeBindingSourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

const schemasGetCodeBindingSourceResponse: schemas.SchemasGetCodeBindingSourceResponse = { ... }
```

##### `body`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasGetCodeBindingSourceResponse.property.body"></a>

- *Type:* `any`

---

### SchemasGetDiscoveredSchemaRequest <a name="aws-cdk-sdk.schemas.SchemasGetDiscoveredSchemaRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

const schemasGetDiscoveredSchemaRequest: schemas.SchemasGetDiscoveredSchemaRequest = { ... }
```

##### `events`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasGetDiscoveredSchemaRequest.property.events"></a>

- *Type:* `string`[]

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasGetDiscoveredSchemaRequest.property.type"></a>

- *Type:* `string`

---

### SchemasGetDiscoveredSchemaResponse <a name="aws-cdk-sdk.schemas.SchemasGetDiscoveredSchemaResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

const schemasGetDiscoveredSchemaResponse: schemas.SchemasGetDiscoveredSchemaResponse = { ... }
```

##### `content`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasGetDiscoveredSchemaResponse.property.content"></a>

- *Type:* `string`

---

### SchemasGetResourcePolicyRequest <a name="aws-cdk-sdk.schemas.SchemasGetResourcePolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

const schemasGetResourcePolicyRequest: schemas.SchemasGetResourcePolicyRequest = { ... }
```

##### `registryName`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasGetResourcePolicyRequest.property.registryName"></a>

- *Type:* `string`

---

### SchemasGetResourcePolicyResponse <a name="aws-cdk-sdk.schemas.SchemasGetResourcePolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

const schemasGetResourcePolicyResponse: schemas.SchemasGetResourcePolicyResponse = { ... }
```

##### `policy`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasGetResourcePolicyResponse.property.policy"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasGetResourcePolicyResponse.property.revisionId"></a>

- *Type:* `string`

---

### SchemasListDiscoverersRequest <a name="aws-cdk-sdk.schemas.SchemasListDiscoverersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

const schemasListDiscoverersRequest: schemas.SchemasListDiscoverersRequest = { ... }
```

##### `discovererIdPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasListDiscoverersRequest.property.discovererIdPrefix"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasListDiscoverersRequest.property.limit"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasListDiscoverersRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `sourceArnPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasListDiscoverersRequest.property.sourceArnPrefix"></a>

- *Type:* `string`

---

### SchemasListDiscoverersResponse <a name="aws-cdk-sdk.schemas.SchemasListDiscoverersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

const schemasListDiscoverersResponse: schemas.SchemasListDiscoverersResponse = { ... }
```

##### `discoverers`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasListDiscoverersResponse.property.discoverers"></a>

- *Type:* [`aws-cdk-sdk.schemas.SchemasDiscovererSummary`](#aws-cdk-sdk.schemas.SchemasDiscovererSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasListDiscoverersResponse.property.nextToken"></a>

- *Type:* `string`

---

### SchemasListRegistriesRequest <a name="aws-cdk-sdk.schemas.SchemasListRegistriesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

const schemasListRegistriesRequest: schemas.SchemasListRegistriesRequest = { ... }
```

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasListRegistriesRequest.property.limit"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasListRegistriesRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `registryNamePrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasListRegistriesRequest.property.registryNamePrefix"></a>

- *Type:* `string`

---

##### `scope`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasListRegistriesRequest.property.scope"></a>

- *Type:* `string`

---

### SchemasListRegistriesResponse <a name="aws-cdk-sdk.schemas.SchemasListRegistriesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

const schemasListRegistriesResponse: schemas.SchemasListRegistriesResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasListRegistriesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `registries`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasListRegistriesResponse.property.registries"></a>

- *Type:* [`aws-cdk-sdk.schemas.SchemasRegistrySummary`](#aws-cdk-sdk.schemas.SchemasRegistrySummary)[]

---

### SchemasListSchemasRequest <a name="aws-cdk-sdk.schemas.SchemasListSchemasRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

const schemasListSchemasRequest: schemas.SchemasListSchemasRequest = { ... }
```

##### `registryName`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasListSchemasRequest.property.registryName"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasListSchemasRequest.property.limit"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasListSchemasRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `schemaNamePrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasListSchemasRequest.property.schemaNamePrefix"></a>

- *Type:* `string`

---

### SchemasListSchemasResponse <a name="aws-cdk-sdk.schemas.SchemasListSchemasResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

const schemasListSchemasResponse: schemas.SchemasListSchemasResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasListSchemasResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `schemas`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasListSchemasResponse.property.schemas"></a>

- *Type:* [`aws-cdk-sdk.schemas.SchemasSchemaSummary`](#aws-cdk-sdk.schemas.SchemasSchemaSummary)[]

---

### SchemasListSchemaVersionsRequest <a name="aws-cdk-sdk.schemas.SchemasListSchemaVersionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

const schemasListSchemaVersionsRequest: schemas.SchemasListSchemaVersionsRequest = { ... }
```

##### `registryName`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasListSchemaVersionsRequest.property.registryName"></a>

- *Type:* `string`

---

##### `schemaName`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasListSchemaVersionsRequest.property.schemaName"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasListSchemaVersionsRequest.property.limit"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasListSchemaVersionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### SchemasListSchemaVersionsResponse <a name="aws-cdk-sdk.schemas.SchemasListSchemaVersionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

const schemasListSchemaVersionsResponse: schemas.SchemasListSchemaVersionsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasListSchemaVersionsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `schemaVersions`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasListSchemaVersionsResponse.property.schemaVersions"></a>

- *Type:* [`aws-cdk-sdk.schemas.SchemasSchemaVersionSummary`](#aws-cdk-sdk.schemas.SchemasSchemaVersionSummary)[]

---

### SchemasListTagsForResourceRequest <a name="aws-cdk-sdk.schemas.SchemasListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

const schemasListTagsForResourceRequest: schemas.SchemasListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### SchemasListTagsForResourceResponse <a name="aws-cdk-sdk.schemas.SchemasListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

const schemasListTagsForResourceResponse: schemas.SchemasListTagsForResourceResponse = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasListTagsForResourceResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### SchemasPutCodeBindingRequest <a name="aws-cdk-sdk.schemas.SchemasPutCodeBindingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

const schemasPutCodeBindingRequest: schemas.SchemasPutCodeBindingRequest = { ... }
```

##### `language`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasPutCodeBindingRequest.property.language"></a>

- *Type:* `string`

---

##### `registryName`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasPutCodeBindingRequest.property.registryName"></a>

- *Type:* `string`

---

##### `schemaName`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasPutCodeBindingRequest.property.schemaName"></a>

- *Type:* `string`

---

##### `schemaVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasPutCodeBindingRequest.property.schemaVersion"></a>

- *Type:* `string`

---

### SchemasPutCodeBindingResponse <a name="aws-cdk-sdk.schemas.SchemasPutCodeBindingResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

const schemasPutCodeBindingResponse: schemas.SchemasPutCodeBindingResponse = { ... }
```

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasPutCodeBindingResponse.property.creationDate"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasPutCodeBindingResponse.property.lastModified"></a>

- *Type:* `string`

---

##### `schemaVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasPutCodeBindingResponse.property.schemaVersion"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasPutCodeBindingResponse.property.status"></a>

- *Type:* `string`

---

### SchemasPutResourcePolicyRequest <a name="aws-cdk-sdk.schemas.SchemasPutResourcePolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

const schemasPutResourcePolicyRequest: schemas.SchemasPutResourcePolicyRequest = { ... }
```

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasPutResourcePolicyRequest.property.policy"></a>

- *Type:* `string`

---

##### `registryName`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasPutResourcePolicyRequest.property.registryName"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasPutResourcePolicyRequest.property.revisionId"></a>

- *Type:* `string`

---

### SchemasPutResourcePolicyResponse <a name="aws-cdk-sdk.schemas.SchemasPutResourcePolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

const schemasPutResourcePolicyResponse: schemas.SchemasPutResourcePolicyResponse = { ... }
```

##### `policy`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasPutResourcePolicyResponse.property.policy"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasPutResourcePolicyResponse.property.revisionId"></a>

- *Type:* `string`

---

### SchemasRegistrySummary <a name="aws-cdk-sdk.schemas.SchemasRegistrySummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

const schemasRegistrySummary: schemas.SchemasRegistrySummary = { ... }
```

##### `registryArn`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasRegistrySummary.property.registryArn"></a>

- *Type:* `string`

---

##### `registryName`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasRegistrySummary.property.registryName"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasRegistrySummary.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### SchemasSchemaSummary <a name="aws-cdk-sdk.schemas.SchemasSchemaSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

const schemasSchemaSummary: schemas.SchemasSchemaSummary = { ... }
```

##### `lastModified`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasSchemaSummary.property.lastModified"></a>

- *Type:* `string`

---

##### `schemaArn`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasSchemaSummary.property.schemaArn"></a>

- *Type:* `string`

---

##### `schemaName`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasSchemaSummary.property.schemaName"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasSchemaSummary.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `versionCount`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasSchemaSummary.property.versionCount"></a>

- *Type:* `number`

---

### SchemasSchemaVersionSummary <a name="aws-cdk-sdk.schemas.SchemasSchemaVersionSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

const schemasSchemaVersionSummary: schemas.SchemasSchemaVersionSummary = { ... }
```

##### `schemaArn`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasSchemaVersionSummary.property.schemaArn"></a>

- *Type:* `string`

---

##### `schemaName`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasSchemaVersionSummary.property.schemaName"></a>

- *Type:* `string`

---

##### `schemaVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasSchemaVersionSummary.property.schemaVersion"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasSchemaVersionSummary.property.type"></a>

- *Type:* `string`

---

### SchemasSearchSchemasRequest <a name="aws-cdk-sdk.schemas.SchemasSearchSchemasRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

const schemasSearchSchemasRequest: schemas.SchemasSearchSchemasRequest = { ... }
```

##### `keywords`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasSearchSchemasRequest.property.keywords"></a>

- *Type:* `string`

---

##### `registryName`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasSearchSchemasRequest.property.registryName"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasSearchSchemasRequest.property.limit"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasSearchSchemasRequest.property.nextToken"></a>

- *Type:* `string`

---

### SchemasSearchSchemasResponse <a name="aws-cdk-sdk.schemas.SchemasSearchSchemasResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

const schemasSearchSchemasResponse: schemas.SchemasSearchSchemasResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasSearchSchemasResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `schemas`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasSearchSchemasResponse.property.schemas"></a>

- *Type:* [`aws-cdk-sdk.schemas.SchemasSearchSchemaSummary`](#aws-cdk-sdk.schemas.SchemasSearchSchemaSummary)[]

---

### SchemasSearchSchemaSummary <a name="aws-cdk-sdk.schemas.SchemasSearchSchemaSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

const schemasSearchSchemaSummary: schemas.SchemasSearchSchemaSummary = { ... }
```

##### `registryName`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasSearchSchemaSummary.property.registryName"></a>

- *Type:* `string`

---

##### `schemaArn`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasSearchSchemaSummary.property.schemaArn"></a>

- *Type:* `string`

---

##### `schemaName`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasSearchSchemaSummary.property.schemaName"></a>

- *Type:* `string`

---

##### `schemaVersions`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasSearchSchemaSummary.property.schemaVersions"></a>

- *Type:* [`aws-cdk-sdk.schemas.SchemasSearchSchemaVersionSummary`](#aws-cdk-sdk.schemas.SchemasSearchSchemaVersionSummary)[]

---

### SchemasSearchSchemaVersionSummary <a name="aws-cdk-sdk.schemas.SchemasSearchSchemaVersionSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

const schemasSearchSchemaVersionSummary: schemas.SchemasSearchSchemaVersionSummary = { ... }
```

##### `createdDate`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasSearchSchemaVersionSummary.property.createdDate"></a>

- *Type:* `string`

---

##### `schemaVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasSearchSchemaVersionSummary.property.schemaVersion"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasSearchSchemaVersionSummary.property.type"></a>

- *Type:* `string`

---

### SchemasStartDiscovererRequest <a name="aws-cdk-sdk.schemas.SchemasStartDiscovererRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

const schemasStartDiscovererRequest: schemas.SchemasStartDiscovererRequest = { ... }
```

##### `discovererId`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasStartDiscovererRequest.property.discovererId"></a>

- *Type:* `string`

---

### SchemasStartDiscovererResponse <a name="aws-cdk-sdk.schemas.SchemasStartDiscovererResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

const schemasStartDiscovererResponse: schemas.SchemasStartDiscovererResponse = { ... }
```

##### `discovererId`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasStartDiscovererResponse.property.discovererId"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasStartDiscovererResponse.property.state"></a>

- *Type:* `string`

---

### SchemasStopDiscovererRequest <a name="aws-cdk-sdk.schemas.SchemasStopDiscovererRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

const schemasStopDiscovererRequest: schemas.SchemasStopDiscovererRequest = { ... }
```

##### `discovererId`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasStopDiscovererRequest.property.discovererId"></a>

- *Type:* `string`

---

### SchemasStopDiscovererResponse <a name="aws-cdk-sdk.schemas.SchemasStopDiscovererResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

const schemasStopDiscovererResponse: schemas.SchemasStopDiscovererResponse = { ... }
```

##### `discovererId`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasStopDiscovererResponse.property.discovererId"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasStopDiscovererResponse.property.state"></a>

- *Type:* `string`

---

### SchemasTagResourceRequest <a name="aws-cdk-sdk.schemas.SchemasTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

const schemasTagResourceRequest: schemas.SchemasTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasTagResourceRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### SchemasUntagResourceRequest <a name="aws-cdk-sdk.schemas.SchemasUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

const schemasUntagResourceRequest: schemas.SchemasUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### SchemasUpdateDiscovererRequest <a name="aws-cdk-sdk.schemas.SchemasUpdateDiscovererRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

const schemasUpdateDiscovererRequest: schemas.SchemasUpdateDiscovererRequest = { ... }
```

##### `discovererId`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasUpdateDiscovererRequest.property.discovererId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasUpdateDiscovererRequest.property.description"></a>

- *Type:* `string`

---

### SchemasUpdateDiscovererResponse <a name="aws-cdk-sdk.schemas.SchemasUpdateDiscovererResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

const schemasUpdateDiscovererResponse: schemas.SchemasUpdateDiscovererResponse = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasUpdateDiscovererResponse.property.description"></a>

- *Type:* `string`

---

##### `discovererArn`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasUpdateDiscovererResponse.property.discovererArn"></a>

- *Type:* `string`

---

##### `discovererId`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasUpdateDiscovererResponse.property.discovererId"></a>

- *Type:* `string`

---

##### `sourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasUpdateDiscovererResponse.property.sourceArn"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasUpdateDiscovererResponse.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasUpdateDiscovererResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### SchemasUpdateRegistryRequest <a name="aws-cdk-sdk.schemas.SchemasUpdateRegistryRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

const schemasUpdateRegistryRequest: schemas.SchemasUpdateRegistryRequest = { ... }
```

##### `registryName`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasUpdateRegistryRequest.property.registryName"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasUpdateRegistryRequest.property.description"></a>

- *Type:* `string`

---

### SchemasUpdateRegistryResponse <a name="aws-cdk-sdk.schemas.SchemasUpdateRegistryResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

const schemasUpdateRegistryResponse: schemas.SchemasUpdateRegistryResponse = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasUpdateRegistryResponse.property.description"></a>

- *Type:* `string`

---

##### `registryArn`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasUpdateRegistryResponse.property.registryArn"></a>

- *Type:* `string`

---

##### `registryName`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasUpdateRegistryResponse.property.registryName"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasUpdateRegistryResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### SchemasUpdateSchemaRequest <a name="aws-cdk-sdk.schemas.SchemasUpdateSchemaRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

const schemasUpdateSchemaRequest: schemas.SchemasUpdateSchemaRequest = { ... }
```

##### `registryName`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasUpdateSchemaRequest.property.registryName"></a>

- *Type:* `string`

---

##### `schemaName`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasUpdateSchemaRequest.property.schemaName"></a>

- *Type:* `string`

---

##### `clientTokenId`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasUpdateSchemaRequest.property.clientTokenId"></a>

- *Type:* `string`

---

##### `content`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasUpdateSchemaRequest.property.content"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasUpdateSchemaRequest.property.description"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasUpdateSchemaRequest.property.type"></a>

- *Type:* `string`

---

### SchemasUpdateSchemaResponse <a name="aws-cdk-sdk.schemas.SchemasUpdateSchemaResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

const schemasUpdateSchemaResponse: schemas.SchemasUpdateSchemaResponse = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasUpdateSchemaResponse.property.description"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasUpdateSchemaResponse.property.lastModified"></a>

- *Type:* `string`

---

##### `schemaArn`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasUpdateSchemaResponse.property.schemaArn"></a>

- *Type:* `string`

---

##### `schemaName`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasUpdateSchemaResponse.property.schemaName"></a>

- *Type:* `string`

---

##### `schemaVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasUpdateSchemaResponse.property.schemaVersion"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasUpdateSchemaResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasUpdateSchemaResponse.property.type"></a>

- *Type:* `string`

---

##### `versionCreatedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.schemas.SchemasUpdateSchemaResponse.property.versionCreatedDate"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### SchemasResponsesCreateDiscoverer <a name="aws-cdk-sdk.schemas.SchemasResponsesCreateDiscoverer"></a>

#### Initializer <a name="aws-cdk-sdk.schemas.SchemasResponsesCreateDiscoverer.Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

new schemas.SchemasResponsesCreateDiscoverer(__scope: Construct, __resources: string[], __input: SchemasCreateDiscovererRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesCreateDiscoverer.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesCreateDiscoverer.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesCreateDiscoverer.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.schemas.SchemasCreateDiscovererRequest`](#aws-cdk-sdk.schemas.SchemasCreateDiscovererRequest)

---



#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesCreateDiscoverer.property.description"></a>

- *Type:* `string`

---

##### `discovererArn`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesCreateDiscoverer.property.discovererArn"></a>

- *Type:* `string`

---

##### `discovererId`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesCreateDiscoverer.property.discovererId"></a>

- *Type:* `string`

---

##### `sourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesCreateDiscoverer.property.sourceArn"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesCreateDiscoverer.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesCreateDiscoverer.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### SchemasResponsesCreateRegistry <a name="aws-cdk-sdk.schemas.SchemasResponsesCreateRegistry"></a>

#### Initializer <a name="aws-cdk-sdk.schemas.SchemasResponsesCreateRegistry.Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

new schemas.SchemasResponsesCreateRegistry(__scope: Construct, __resources: string[], __input: SchemasCreateRegistryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesCreateRegistry.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesCreateRegistry.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesCreateRegistry.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.schemas.SchemasCreateRegistryRequest`](#aws-cdk-sdk.schemas.SchemasCreateRegistryRequest)

---



#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesCreateRegistry.property.description"></a>

- *Type:* `string`

---

##### `registryArn`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesCreateRegistry.property.registryArn"></a>

- *Type:* `string`

---

##### `registryName`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesCreateRegistry.property.registryName"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesCreateRegistry.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### SchemasResponsesCreateSchema <a name="aws-cdk-sdk.schemas.SchemasResponsesCreateSchema"></a>

#### Initializer <a name="aws-cdk-sdk.schemas.SchemasResponsesCreateSchema.Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

new schemas.SchemasResponsesCreateSchema(__scope: Construct, __resources: string[], __input: SchemasCreateSchemaRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesCreateSchema.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesCreateSchema.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesCreateSchema.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.schemas.SchemasCreateSchemaRequest`](#aws-cdk-sdk.schemas.SchemasCreateSchemaRequest)

---



#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesCreateSchema.property.description"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesCreateSchema.property.lastModified"></a>

- *Type:* `string`

---

##### `schemaArn`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesCreateSchema.property.schemaArn"></a>

- *Type:* `string`

---

##### `schemaName`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesCreateSchema.property.schemaName"></a>

- *Type:* `string`

---

##### `schemaVersion`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesCreateSchema.property.schemaVersion"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesCreateSchema.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesCreateSchema.property.type"></a>

- *Type:* `string`

---

##### `versionCreatedDate`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesCreateSchema.property.versionCreatedDate"></a>

- *Type:* `string`

---


### SchemasResponsesDescribeCodeBinding <a name="aws-cdk-sdk.schemas.SchemasResponsesDescribeCodeBinding"></a>

#### Initializer <a name="aws-cdk-sdk.schemas.SchemasResponsesDescribeCodeBinding.Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

new schemas.SchemasResponsesDescribeCodeBinding(__scope: Construct, __resources: string[], __input: SchemasDescribeCodeBindingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesDescribeCodeBinding.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesDescribeCodeBinding.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesDescribeCodeBinding.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.schemas.SchemasDescribeCodeBindingRequest`](#aws-cdk-sdk.schemas.SchemasDescribeCodeBindingRequest)

---



#### Properties <a name="Properties"></a>

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesDescribeCodeBinding.property.creationDate"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesDescribeCodeBinding.property.lastModified"></a>

- *Type:* `string`

---

##### `schemaVersion`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesDescribeCodeBinding.property.schemaVersion"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesDescribeCodeBinding.property.status"></a>

- *Type:* `string`

---


### SchemasResponsesDescribeDiscoverer <a name="aws-cdk-sdk.schemas.SchemasResponsesDescribeDiscoverer"></a>

#### Initializer <a name="aws-cdk-sdk.schemas.SchemasResponsesDescribeDiscoverer.Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

new schemas.SchemasResponsesDescribeDiscoverer(__scope: Construct, __resources: string[], __input: SchemasDescribeDiscovererRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesDescribeDiscoverer.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesDescribeDiscoverer.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesDescribeDiscoverer.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.schemas.SchemasDescribeDiscovererRequest`](#aws-cdk-sdk.schemas.SchemasDescribeDiscovererRequest)

---



#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesDescribeDiscoverer.property.description"></a>

- *Type:* `string`

---

##### `discovererArn`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesDescribeDiscoverer.property.discovererArn"></a>

- *Type:* `string`

---

##### `discovererId`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesDescribeDiscoverer.property.discovererId"></a>

- *Type:* `string`

---

##### `sourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesDescribeDiscoverer.property.sourceArn"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesDescribeDiscoverer.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesDescribeDiscoverer.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### SchemasResponsesDescribeRegistry <a name="aws-cdk-sdk.schemas.SchemasResponsesDescribeRegistry"></a>

#### Initializer <a name="aws-cdk-sdk.schemas.SchemasResponsesDescribeRegistry.Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

new schemas.SchemasResponsesDescribeRegistry(__scope: Construct, __resources: string[], __input: SchemasDescribeRegistryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesDescribeRegistry.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesDescribeRegistry.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesDescribeRegistry.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.schemas.SchemasDescribeRegistryRequest`](#aws-cdk-sdk.schemas.SchemasDescribeRegistryRequest)

---



#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesDescribeRegistry.property.description"></a>

- *Type:* `string`

---

##### `registryArn`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesDescribeRegistry.property.registryArn"></a>

- *Type:* `string`

---

##### `registryName`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesDescribeRegistry.property.registryName"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesDescribeRegistry.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### SchemasResponsesDescribeSchema <a name="aws-cdk-sdk.schemas.SchemasResponsesDescribeSchema"></a>

#### Initializer <a name="aws-cdk-sdk.schemas.SchemasResponsesDescribeSchema.Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

new schemas.SchemasResponsesDescribeSchema(__scope: Construct, __resources: string[], __input: SchemasDescribeSchemaRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesDescribeSchema.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesDescribeSchema.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesDescribeSchema.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.schemas.SchemasDescribeSchemaRequest`](#aws-cdk-sdk.schemas.SchemasDescribeSchemaRequest)

---



#### Properties <a name="Properties"></a>

##### `content`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesDescribeSchema.property.content"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesDescribeSchema.property.description"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesDescribeSchema.property.lastModified"></a>

- *Type:* `string`

---

##### `schemaArn`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesDescribeSchema.property.schemaArn"></a>

- *Type:* `string`

---

##### `schemaName`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesDescribeSchema.property.schemaName"></a>

- *Type:* `string`

---

##### `schemaVersion`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesDescribeSchema.property.schemaVersion"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesDescribeSchema.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesDescribeSchema.property.type"></a>

- *Type:* `string`

---

##### `versionCreatedDate`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesDescribeSchema.property.versionCreatedDate"></a>

- *Type:* `string`

---


### SchemasResponsesExportSchema <a name="aws-cdk-sdk.schemas.SchemasResponsesExportSchema"></a>

#### Initializer <a name="aws-cdk-sdk.schemas.SchemasResponsesExportSchema.Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

new schemas.SchemasResponsesExportSchema(__scope: Construct, __resources: string[], __input: SchemasExportSchemaRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesExportSchema.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesExportSchema.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesExportSchema.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.schemas.SchemasExportSchemaRequest`](#aws-cdk-sdk.schemas.SchemasExportSchemaRequest)

---



#### Properties <a name="Properties"></a>

##### `content`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesExportSchema.property.content"></a>

- *Type:* `string`

---

##### `schemaArn`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesExportSchema.property.schemaArn"></a>

- *Type:* `string`

---

##### `schemaName`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesExportSchema.property.schemaName"></a>

- *Type:* `string`

---

##### `schemaVersion`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesExportSchema.property.schemaVersion"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesExportSchema.property.type"></a>

- *Type:* `string`

---


### SchemasResponsesFetchCodeBindingSource <a name="aws-cdk-sdk.schemas.SchemasResponsesFetchCodeBindingSource"></a>

#### Initializer <a name="aws-cdk-sdk.schemas.SchemasResponsesFetchCodeBindingSource.Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

new schemas.SchemasResponsesFetchCodeBindingSource(__scope: Construct, __resources: string[], __input: SchemasGetCodeBindingSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesFetchCodeBindingSource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesFetchCodeBindingSource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesFetchCodeBindingSource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.schemas.SchemasGetCodeBindingSourceRequest`](#aws-cdk-sdk.schemas.SchemasGetCodeBindingSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `body`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesFetchCodeBindingSource.property.body"></a>

- *Type:* `any`

---


### SchemasResponsesFetchDiscoveredSchema <a name="aws-cdk-sdk.schemas.SchemasResponsesFetchDiscoveredSchema"></a>

#### Initializer <a name="aws-cdk-sdk.schemas.SchemasResponsesFetchDiscoveredSchema.Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

new schemas.SchemasResponsesFetchDiscoveredSchema(__scope: Construct, __resources: string[], __input: SchemasGetDiscoveredSchemaRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesFetchDiscoveredSchema.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesFetchDiscoveredSchema.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesFetchDiscoveredSchema.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.schemas.SchemasGetDiscoveredSchemaRequest`](#aws-cdk-sdk.schemas.SchemasGetDiscoveredSchemaRequest)

---



#### Properties <a name="Properties"></a>

##### `content`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesFetchDiscoveredSchema.property.content"></a>

- *Type:* `string`

---


### SchemasResponsesFetchResourcePolicy <a name="aws-cdk-sdk.schemas.SchemasResponsesFetchResourcePolicy"></a>

#### Initializer <a name="aws-cdk-sdk.schemas.SchemasResponsesFetchResourcePolicy.Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

new schemas.SchemasResponsesFetchResourcePolicy(__scope: Construct, __resources: string[], __input: SchemasGetResourcePolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesFetchResourcePolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesFetchResourcePolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesFetchResourcePolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.schemas.SchemasGetResourcePolicyRequest`](#aws-cdk-sdk.schemas.SchemasGetResourcePolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesFetchResourcePolicy.property.policy"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesFetchResourcePolicy.property.revisionId"></a>

- *Type:* `string`

---


### SchemasResponsesListDiscoverers <a name="aws-cdk-sdk.schemas.SchemasResponsesListDiscoverers"></a>

#### Initializer <a name="aws-cdk-sdk.schemas.SchemasResponsesListDiscoverers.Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

new schemas.SchemasResponsesListDiscoverers(__scope: Construct, __resources: string[], __input: SchemasListDiscoverersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesListDiscoverers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesListDiscoverers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesListDiscoverers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.schemas.SchemasListDiscoverersRequest`](#aws-cdk-sdk.schemas.SchemasListDiscoverersRequest)

---



#### Properties <a name="Properties"></a>

##### `discoverers`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesListDiscoverers.property.discoverers"></a>

- *Type:* [`aws-cdk-sdk.schemas.SchemasDiscovererSummary`](#aws-cdk-sdk.schemas.SchemasDiscovererSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesListDiscoverers.property.nextToken"></a>

- *Type:* `string`

---


### SchemasResponsesListRegistries <a name="aws-cdk-sdk.schemas.SchemasResponsesListRegistries"></a>

#### Initializer <a name="aws-cdk-sdk.schemas.SchemasResponsesListRegistries.Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

new schemas.SchemasResponsesListRegistries(__scope: Construct, __resources: string[], __input: SchemasListRegistriesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesListRegistries.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesListRegistries.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesListRegistries.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.schemas.SchemasListRegistriesRequest`](#aws-cdk-sdk.schemas.SchemasListRegistriesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesListRegistries.property.nextToken"></a>

- *Type:* `string`

---

##### `registries`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesListRegistries.property.registries"></a>

- *Type:* [`aws-cdk-sdk.schemas.SchemasRegistrySummary`](#aws-cdk-sdk.schemas.SchemasRegistrySummary)[]

---


### SchemasResponsesListSchemas <a name="aws-cdk-sdk.schemas.SchemasResponsesListSchemas"></a>

#### Initializer <a name="aws-cdk-sdk.schemas.SchemasResponsesListSchemas.Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

new schemas.SchemasResponsesListSchemas(__scope: Construct, __resources: string[], __input: SchemasListSchemasRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesListSchemas.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesListSchemas.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesListSchemas.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.schemas.SchemasListSchemasRequest`](#aws-cdk-sdk.schemas.SchemasListSchemasRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesListSchemas.property.nextToken"></a>

- *Type:* `string`

---

##### `schemas`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesListSchemas.property.schemas"></a>

- *Type:* [`aws-cdk-sdk.schemas.SchemasSchemaSummary`](#aws-cdk-sdk.schemas.SchemasSchemaSummary)[]

---


### SchemasResponsesListSchemaVersions <a name="aws-cdk-sdk.schemas.SchemasResponsesListSchemaVersions"></a>

#### Initializer <a name="aws-cdk-sdk.schemas.SchemasResponsesListSchemaVersions.Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

new schemas.SchemasResponsesListSchemaVersions(__scope: Construct, __resources: string[], __input: SchemasListSchemaVersionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesListSchemaVersions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesListSchemaVersions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesListSchemaVersions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.schemas.SchemasListSchemaVersionsRequest`](#aws-cdk-sdk.schemas.SchemasListSchemaVersionsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesListSchemaVersions.property.nextToken"></a>

- *Type:* `string`

---

##### `schemaVersions`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesListSchemaVersions.property.schemaVersions"></a>

- *Type:* [`aws-cdk-sdk.schemas.SchemasSchemaVersionSummary`](#aws-cdk-sdk.schemas.SchemasSchemaVersionSummary)[]

---


### SchemasResponsesListTagsForResource <a name="aws-cdk-sdk.schemas.SchemasResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.schemas.SchemasResponsesListTagsForResource.Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

new schemas.SchemasResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: SchemasListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.schemas.SchemasListTagsForResourceRequest`](#aws-cdk-sdk.schemas.SchemasListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesListTagsForResource.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### SchemasResponsesPutCodeBinding <a name="aws-cdk-sdk.schemas.SchemasResponsesPutCodeBinding"></a>

#### Initializer <a name="aws-cdk-sdk.schemas.SchemasResponsesPutCodeBinding.Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

new schemas.SchemasResponsesPutCodeBinding(__scope: Construct, __resources: string[], __input: SchemasPutCodeBindingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesPutCodeBinding.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesPutCodeBinding.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesPutCodeBinding.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.schemas.SchemasPutCodeBindingRequest`](#aws-cdk-sdk.schemas.SchemasPutCodeBindingRequest)

---



#### Properties <a name="Properties"></a>

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesPutCodeBinding.property.creationDate"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesPutCodeBinding.property.lastModified"></a>

- *Type:* `string`

---

##### `schemaVersion`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesPutCodeBinding.property.schemaVersion"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesPutCodeBinding.property.status"></a>

- *Type:* `string`

---


### SchemasResponsesPutResourcePolicy <a name="aws-cdk-sdk.schemas.SchemasResponsesPutResourcePolicy"></a>

#### Initializer <a name="aws-cdk-sdk.schemas.SchemasResponsesPutResourcePolicy.Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

new schemas.SchemasResponsesPutResourcePolicy(__scope: Construct, __resources: string[], __input: SchemasPutResourcePolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesPutResourcePolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesPutResourcePolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesPutResourcePolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.schemas.SchemasPutResourcePolicyRequest`](#aws-cdk-sdk.schemas.SchemasPutResourcePolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesPutResourcePolicy.property.policy"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesPutResourcePolicy.property.revisionId"></a>

- *Type:* `string`

---


### SchemasResponsesSearchSchemas <a name="aws-cdk-sdk.schemas.SchemasResponsesSearchSchemas"></a>

#### Initializer <a name="aws-cdk-sdk.schemas.SchemasResponsesSearchSchemas.Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

new schemas.SchemasResponsesSearchSchemas(__scope: Construct, __resources: string[], __input: SchemasSearchSchemasRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesSearchSchemas.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesSearchSchemas.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesSearchSchemas.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.schemas.SchemasSearchSchemasRequest`](#aws-cdk-sdk.schemas.SchemasSearchSchemasRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesSearchSchemas.property.nextToken"></a>

- *Type:* `string`

---

##### `schemas`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesSearchSchemas.property.schemas"></a>

- *Type:* [`aws-cdk-sdk.schemas.SchemasSearchSchemaSummary`](#aws-cdk-sdk.schemas.SchemasSearchSchemaSummary)[]

---


### SchemasResponsesStartDiscoverer <a name="aws-cdk-sdk.schemas.SchemasResponsesStartDiscoverer"></a>

#### Initializer <a name="aws-cdk-sdk.schemas.SchemasResponsesStartDiscoverer.Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

new schemas.SchemasResponsesStartDiscoverer(__scope: Construct, __resources: string[], __input: SchemasStartDiscovererRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesStartDiscoverer.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesStartDiscoverer.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesStartDiscoverer.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.schemas.SchemasStartDiscovererRequest`](#aws-cdk-sdk.schemas.SchemasStartDiscovererRequest)

---



#### Properties <a name="Properties"></a>

##### `discovererId`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesStartDiscoverer.property.discovererId"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesStartDiscoverer.property.state"></a>

- *Type:* `string`

---


### SchemasResponsesStopDiscoverer <a name="aws-cdk-sdk.schemas.SchemasResponsesStopDiscoverer"></a>

#### Initializer <a name="aws-cdk-sdk.schemas.SchemasResponsesStopDiscoverer.Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

new schemas.SchemasResponsesStopDiscoverer(__scope: Construct, __resources: string[], __input: SchemasStopDiscovererRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesStopDiscoverer.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesStopDiscoverer.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesStopDiscoverer.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.schemas.SchemasStopDiscovererRequest`](#aws-cdk-sdk.schemas.SchemasStopDiscovererRequest)

---



#### Properties <a name="Properties"></a>

##### `discovererId`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesStopDiscoverer.property.discovererId"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesStopDiscoverer.property.state"></a>

- *Type:* `string`

---


### SchemasResponsesUpdateDiscoverer <a name="aws-cdk-sdk.schemas.SchemasResponsesUpdateDiscoverer"></a>

#### Initializer <a name="aws-cdk-sdk.schemas.SchemasResponsesUpdateDiscoverer.Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

new schemas.SchemasResponsesUpdateDiscoverer(__scope: Construct, __resources: string[], __input: SchemasUpdateDiscovererRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesUpdateDiscoverer.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesUpdateDiscoverer.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesUpdateDiscoverer.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.schemas.SchemasUpdateDiscovererRequest`](#aws-cdk-sdk.schemas.SchemasUpdateDiscovererRequest)

---



#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesUpdateDiscoverer.property.description"></a>

- *Type:* `string`

---

##### `discovererArn`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesUpdateDiscoverer.property.discovererArn"></a>

- *Type:* `string`

---

##### `discovererId`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesUpdateDiscoverer.property.discovererId"></a>

- *Type:* `string`

---

##### `sourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesUpdateDiscoverer.property.sourceArn"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesUpdateDiscoverer.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesUpdateDiscoverer.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### SchemasResponsesUpdateRegistry <a name="aws-cdk-sdk.schemas.SchemasResponsesUpdateRegistry"></a>

#### Initializer <a name="aws-cdk-sdk.schemas.SchemasResponsesUpdateRegistry.Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

new schemas.SchemasResponsesUpdateRegistry(__scope: Construct, __resources: string[], __input: SchemasUpdateRegistryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesUpdateRegistry.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesUpdateRegistry.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesUpdateRegistry.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.schemas.SchemasUpdateRegistryRequest`](#aws-cdk-sdk.schemas.SchemasUpdateRegistryRequest)

---



#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesUpdateRegistry.property.description"></a>

- *Type:* `string`

---

##### `registryArn`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesUpdateRegistry.property.registryArn"></a>

- *Type:* `string`

---

##### `registryName`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesUpdateRegistry.property.registryName"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesUpdateRegistry.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### SchemasResponsesUpdateSchema <a name="aws-cdk-sdk.schemas.SchemasResponsesUpdateSchema"></a>

#### Initializer <a name="aws-cdk-sdk.schemas.SchemasResponsesUpdateSchema.Initializer"></a>

```typescript
import { schemas } from 'aws-cdk-sdk'

new schemas.SchemasResponsesUpdateSchema(__scope: Construct, __resources: string[], __input: SchemasUpdateSchemaRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesUpdateSchema.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesUpdateSchema.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesUpdateSchema.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.schemas.SchemasUpdateSchemaRequest`](#aws-cdk-sdk.schemas.SchemasUpdateSchemaRequest)

---



#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesUpdateSchema.property.description"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesUpdateSchema.property.lastModified"></a>

- *Type:* `string`

---

##### `schemaArn`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesUpdateSchema.property.schemaArn"></a>

- *Type:* `string`

---

##### `schemaName`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesUpdateSchema.property.schemaName"></a>

- *Type:* `string`

---

##### `schemaVersion`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesUpdateSchema.property.schemaVersion"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesUpdateSchema.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesUpdateSchema.property.type"></a>

- *Type:* `string`

---

##### `versionCreatedDate`<sup>Required</sup> <a name="aws-cdk-sdk.schemas.SchemasResponsesUpdateSchema.property.versionCreatedDate"></a>

- *Type:* `string`

---



