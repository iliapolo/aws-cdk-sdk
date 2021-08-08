# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### IoTThingsGraphClient <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient"></a>

#### Initializer <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

new iotthingsgraph.IoTThingsGraphClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `associateEntityToThing` <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.associateEntityToThing"></a>

```typescript
public associateEntityToThing(input: IoTThingsGraphAssociateEntityToThingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphAssociateEntityToThingRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphAssociateEntityToThingRequest)

---

##### `createFlowTemplate` <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.createFlowTemplate"></a>

```typescript
public createFlowTemplate(input: IoTThingsGraphCreateFlowTemplateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphCreateFlowTemplateRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphCreateFlowTemplateRequest)

---

##### `createSystemInstance` <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.createSystemInstance"></a>

```typescript
public createSystemInstance(input: IoTThingsGraphCreateSystemInstanceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphCreateSystemInstanceRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphCreateSystemInstanceRequest)

---

##### `createSystemTemplate` <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.createSystemTemplate"></a>

```typescript
public createSystemTemplate(input: IoTThingsGraphCreateSystemTemplateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphCreateSystemTemplateRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphCreateSystemTemplateRequest)

---

##### `deleteFlowTemplate` <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.deleteFlowTemplate"></a>

```typescript
public deleteFlowTemplate(input: IoTThingsGraphDeleteFlowTemplateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDeleteFlowTemplateRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDeleteFlowTemplateRequest)

---

##### `deleteNamespace` <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.deleteNamespace"></a>

```typescript
public deleteNamespace()
```

##### `deleteSystemInstance` <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.deleteSystemInstance"></a>

```typescript
public deleteSystemInstance(input: IoTThingsGraphDeleteSystemInstanceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDeleteSystemInstanceRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDeleteSystemInstanceRequest)

---

##### `deleteSystemTemplate` <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.deleteSystemTemplate"></a>

```typescript
public deleteSystemTemplate(input: IoTThingsGraphDeleteSystemTemplateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDeleteSystemTemplateRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDeleteSystemTemplateRequest)

---

##### `deploySystemInstance` <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.deploySystemInstance"></a>

```typescript
public deploySystemInstance(input: IoTThingsGraphDeploySystemInstanceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDeploySystemInstanceRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDeploySystemInstanceRequest)

---

##### `deprecateFlowTemplate` <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.deprecateFlowTemplate"></a>

```typescript
public deprecateFlowTemplate(input: IoTThingsGraphDeprecateFlowTemplateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDeprecateFlowTemplateRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDeprecateFlowTemplateRequest)

---

##### `deprecateSystemTemplate` <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.deprecateSystemTemplate"></a>

```typescript
public deprecateSystemTemplate(input: IoTThingsGraphDeprecateSystemTemplateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDeprecateSystemTemplateRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDeprecateSystemTemplateRequest)

---

##### `describeNamespace` <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.describeNamespace"></a>

```typescript
public describeNamespace(input: IoTThingsGraphDescribeNamespaceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDescribeNamespaceRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDescribeNamespaceRequest)

---

##### `dissociateEntityFromThing` <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.dissociateEntityFromThing"></a>

```typescript
public dissociateEntityFromThing(input: IoTThingsGraphDissociateEntityFromThingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDissociateEntityFromThingRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDissociateEntityFromThingRequest)

---

##### `fetchEntities` <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.fetchEntities"></a>

```typescript
public fetchEntities(input: IoTThingsGraphGetEntitiesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetEntitiesRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetEntitiesRequest)

---

##### `fetchFlowTemplate` <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.fetchFlowTemplate"></a>

```typescript
public fetchFlowTemplate(input: IoTThingsGraphGetFlowTemplateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetFlowTemplateRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetFlowTemplateRequest)

---

##### `fetchFlowTemplateRevisions` <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.fetchFlowTemplateRevisions"></a>

```typescript
public fetchFlowTemplateRevisions(input: IoTThingsGraphGetFlowTemplateRevisionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetFlowTemplateRevisionsRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetFlowTemplateRevisionsRequest)

---

##### `fetchNamespaceDeletionStatus` <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.fetchNamespaceDeletionStatus"></a>

```typescript
public fetchNamespaceDeletionStatus()
```

##### `fetchSystemInstance` <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.fetchSystemInstance"></a>

```typescript
public fetchSystemInstance(input: IoTThingsGraphGetSystemInstanceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetSystemInstanceRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetSystemInstanceRequest)

---

##### `fetchSystemTemplate` <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.fetchSystemTemplate"></a>

```typescript
public fetchSystemTemplate(input: IoTThingsGraphGetSystemTemplateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetSystemTemplateRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetSystemTemplateRequest)

---

##### `fetchSystemTemplateRevisions` <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.fetchSystemTemplateRevisions"></a>

```typescript
public fetchSystemTemplateRevisions(input: IoTThingsGraphGetSystemTemplateRevisionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetSystemTemplateRevisionsRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetSystemTemplateRevisionsRequest)

---

##### `fetchUploadStatus` <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.fetchUploadStatus"></a>

```typescript
public fetchUploadStatus(input: IoTThingsGraphGetUploadStatusRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetUploadStatusRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetUploadStatusRequest)

---

##### `listFlowExecutionMessages` <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.listFlowExecutionMessages"></a>

```typescript
public listFlowExecutionMessages(input: IoTThingsGraphListFlowExecutionMessagesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphListFlowExecutionMessagesRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphListFlowExecutionMessagesRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: IoTThingsGraphListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphListTagsForResourceRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphListTagsForResourceRequest)

---

##### `searchEntities` <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.searchEntities"></a>

```typescript
public searchEntities(input: IoTThingsGraphSearchEntitiesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchEntitiesRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchEntitiesRequest)

---

##### `searchFlowExecutions` <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.searchFlowExecutions"></a>

```typescript
public searchFlowExecutions(input: IoTThingsGraphSearchFlowExecutionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchFlowExecutionsRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchFlowExecutionsRequest)

---

##### `searchFlowTemplates` <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.searchFlowTemplates"></a>

```typescript
public searchFlowTemplates(input: IoTThingsGraphSearchFlowTemplatesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchFlowTemplatesRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchFlowTemplatesRequest)

---

##### `searchSystemInstances` <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.searchSystemInstances"></a>

```typescript
public searchSystemInstances(input: IoTThingsGraphSearchSystemInstancesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchSystemInstancesRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchSystemInstancesRequest)

---

##### `searchSystemTemplates` <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.searchSystemTemplates"></a>

```typescript
public searchSystemTemplates(input: IoTThingsGraphSearchSystemTemplatesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchSystemTemplatesRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchSystemTemplatesRequest)

---

##### `searchThings` <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.searchThings"></a>

```typescript
public searchThings(input: IoTThingsGraphSearchThingsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchThingsRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchThingsRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.tagResource"></a>

```typescript
public tagResource(input: IoTThingsGraphTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphTagResourceRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphTagResourceRequest)

---

##### `undeploySystemInstance` <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.undeploySystemInstance"></a>

```typescript
public undeploySystemInstance(input: IoTThingsGraphUndeploySystemInstanceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphUndeploySystemInstanceRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphUndeploySystemInstanceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.untagResource"></a>

```typescript
public untagResource(input: IoTThingsGraphUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphUntagResourceRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphUntagResourceRequest)

---

##### `updateFlowTemplate` <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.updateFlowTemplate"></a>

```typescript
public updateFlowTemplate(input: IoTThingsGraphUpdateFlowTemplateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphUpdateFlowTemplateRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphUpdateFlowTemplateRequest)

---

##### `updateSystemTemplate` <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.updateSystemTemplate"></a>

```typescript
public updateSystemTemplate(input: IoTThingsGraphUpdateSystemTemplateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphUpdateSystemTemplateRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphUpdateSystemTemplateRequest)

---

##### `uploadEntityDefinitions` <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.uploadEntityDefinitions"></a>

```typescript
public uploadEntityDefinitions(input: IoTThingsGraphUploadEntityDefinitionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphUploadEntityDefinitionsRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphUploadEntityDefinitionsRequest)

---




## Structs <a name="Structs"></a>

### IoTThingsGraphAssociateEntityToThingRequest <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphAssociateEntityToThingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphAssociateEntityToThingRequest: iotthingsgraph.IoTThingsGraphAssociateEntityToThingRequest = { ... }
```

##### `entityId`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphAssociateEntityToThingRequest.property.entityId"></a>

- *Type:* `string`

---

##### `thingName`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphAssociateEntityToThingRequest.property.thingName"></a>

- *Type:* `string`

---

##### `namespaceVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphAssociateEntityToThingRequest.property.namespaceVersion"></a>

- *Type:* `number`

---

### IoTThingsGraphAssociateEntityToThingResponse <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphAssociateEntityToThingResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphAssociateEntityToThingResponse: iotthingsgraph.IoTThingsGraphAssociateEntityToThingResponse = { ... }
```

### IoTThingsGraphCreateFlowTemplateRequest <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphCreateFlowTemplateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphCreateFlowTemplateRequest: iotthingsgraph.IoTThingsGraphCreateFlowTemplateRequest = { ... }
```

##### `definition`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphCreateFlowTemplateRequest.property.definition"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDefinitionDocument`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDefinitionDocument)

---

##### `compatibleNamespaceVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphCreateFlowTemplateRequest.property.compatibleNamespaceVersion"></a>

- *Type:* `number`

---

### IoTThingsGraphCreateFlowTemplateResponse <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphCreateFlowTemplateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphCreateFlowTemplateResponse: iotthingsgraph.IoTThingsGraphCreateFlowTemplateResponse = { ... }
```

##### `summary`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphCreateFlowTemplateResponse.property.summary"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphFlowTemplateSummary`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphFlowTemplateSummary)

---

### IoTThingsGraphCreateSystemInstanceRequest <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphCreateSystemInstanceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphCreateSystemInstanceRequest: iotthingsgraph.IoTThingsGraphCreateSystemInstanceRequest = { ... }
```

##### `definition`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphCreateSystemInstanceRequest.property.definition"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDefinitionDocument`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDefinitionDocument)

---

##### `target`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphCreateSystemInstanceRequest.property.target"></a>

- *Type:* `string`

---

##### `flowActionsRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphCreateSystemInstanceRequest.property.flowActionsRoleArn"></a>

- *Type:* `string`

---

##### `greengrassGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphCreateSystemInstanceRequest.property.greengrassGroupName"></a>

- *Type:* `string`

---

##### `metricsConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphCreateSystemInstanceRequest.property.metricsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphMetricsConfiguration`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphMetricsConfiguration)

---

##### `s3BucketName`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphCreateSystemInstanceRequest.property.s3BucketName"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphCreateSystemInstanceRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphTag`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphTag)[]

---

### IoTThingsGraphCreateSystemInstanceResponse <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphCreateSystemInstanceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphCreateSystemInstanceResponse: iotthingsgraph.IoTThingsGraphCreateSystemInstanceResponse = { ... }
```

##### `summary`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphCreateSystemInstanceResponse.property.summary"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemInstanceSummary`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemInstanceSummary)

---

### IoTThingsGraphCreateSystemTemplateRequest <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphCreateSystemTemplateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphCreateSystemTemplateRequest: iotthingsgraph.IoTThingsGraphCreateSystemTemplateRequest = { ... }
```

##### `definition`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphCreateSystemTemplateRequest.property.definition"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDefinitionDocument`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDefinitionDocument)

---

##### `compatibleNamespaceVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphCreateSystemTemplateRequest.property.compatibleNamespaceVersion"></a>

- *Type:* `number`

---

### IoTThingsGraphCreateSystemTemplateResponse <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphCreateSystemTemplateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphCreateSystemTemplateResponse: iotthingsgraph.IoTThingsGraphCreateSystemTemplateResponse = { ... }
```

##### `summary`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphCreateSystemTemplateResponse.property.summary"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemTemplateSummary`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemTemplateSummary)

---

### IoTThingsGraphDefinitionDocument <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDefinitionDocument"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphDefinitionDocument: iotthingsgraph.IoTThingsGraphDefinitionDocument = { ... }
```

##### `language`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDefinitionDocument.property.language"></a>

- *Type:* `string`

---

##### `text`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDefinitionDocument.property.text"></a>

- *Type:* `string`

---

### IoTThingsGraphDeleteFlowTemplateRequest <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDeleteFlowTemplateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphDeleteFlowTemplateRequest: iotthingsgraph.IoTThingsGraphDeleteFlowTemplateRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDeleteFlowTemplateRequest.property.id"></a>

- *Type:* `string`

---

### IoTThingsGraphDeleteFlowTemplateResponse <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDeleteFlowTemplateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphDeleteFlowTemplateResponse: iotthingsgraph.IoTThingsGraphDeleteFlowTemplateResponse = { ... }
```

### IoTThingsGraphDeleteNamespaceRequest <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDeleteNamespaceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphDeleteNamespaceRequest: iotthingsgraph.IoTThingsGraphDeleteNamespaceRequest = { ... }
```

### IoTThingsGraphDeleteNamespaceResponse <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDeleteNamespaceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphDeleteNamespaceResponse: iotthingsgraph.IoTThingsGraphDeleteNamespaceResponse = { ... }
```

##### `namespaceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDeleteNamespaceResponse.property.namespaceArn"></a>

- *Type:* `string`

---

##### `namespaceName`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDeleteNamespaceResponse.property.namespaceName"></a>

- *Type:* `string`

---

### IoTThingsGraphDeleteSystemInstanceRequest <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDeleteSystemInstanceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphDeleteSystemInstanceRequest: iotthingsgraph.IoTThingsGraphDeleteSystemInstanceRequest = { ... }
```

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDeleteSystemInstanceRequest.property.id"></a>

- *Type:* `string`

---

### IoTThingsGraphDeleteSystemInstanceResponse <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDeleteSystemInstanceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphDeleteSystemInstanceResponse: iotthingsgraph.IoTThingsGraphDeleteSystemInstanceResponse = { ... }
```

### IoTThingsGraphDeleteSystemTemplateRequest <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDeleteSystemTemplateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphDeleteSystemTemplateRequest: iotthingsgraph.IoTThingsGraphDeleteSystemTemplateRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDeleteSystemTemplateRequest.property.id"></a>

- *Type:* `string`

---

### IoTThingsGraphDeleteSystemTemplateResponse <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDeleteSystemTemplateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphDeleteSystemTemplateResponse: iotthingsgraph.IoTThingsGraphDeleteSystemTemplateResponse = { ... }
```

### IoTThingsGraphDependencyRevision <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDependencyRevision"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphDependencyRevision: iotthingsgraph.IoTThingsGraphDependencyRevision = { ... }
```

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDependencyRevision.property.id"></a>

- *Type:* `string`

---

##### `revisionNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDependencyRevision.property.revisionNumber"></a>

- *Type:* `number`

---

### IoTThingsGraphDeploySystemInstanceRequest <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDeploySystemInstanceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphDeploySystemInstanceRequest: iotthingsgraph.IoTThingsGraphDeploySystemInstanceRequest = { ... }
```

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDeploySystemInstanceRequest.property.id"></a>

- *Type:* `string`

---

### IoTThingsGraphDeploySystemInstanceResponse <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDeploySystemInstanceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphDeploySystemInstanceResponse: iotthingsgraph.IoTThingsGraphDeploySystemInstanceResponse = { ... }
```

##### `summary`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDeploySystemInstanceResponse.property.summary"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemInstanceSummary`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemInstanceSummary)

---

##### `greengrassDeploymentId`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDeploySystemInstanceResponse.property.greengrassDeploymentId"></a>

- *Type:* `string`

---

### IoTThingsGraphDeprecateFlowTemplateRequest <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDeprecateFlowTemplateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphDeprecateFlowTemplateRequest: iotthingsgraph.IoTThingsGraphDeprecateFlowTemplateRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDeprecateFlowTemplateRequest.property.id"></a>

- *Type:* `string`

---

### IoTThingsGraphDeprecateFlowTemplateResponse <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDeprecateFlowTemplateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphDeprecateFlowTemplateResponse: iotthingsgraph.IoTThingsGraphDeprecateFlowTemplateResponse = { ... }
```

### IoTThingsGraphDeprecateSystemTemplateRequest <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDeprecateSystemTemplateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphDeprecateSystemTemplateRequest: iotthingsgraph.IoTThingsGraphDeprecateSystemTemplateRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDeprecateSystemTemplateRequest.property.id"></a>

- *Type:* `string`

---

### IoTThingsGraphDeprecateSystemTemplateResponse <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDeprecateSystemTemplateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphDeprecateSystemTemplateResponse: iotthingsgraph.IoTThingsGraphDeprecateSystemTemplateResponse = { ... }
```

### IoTThingsGraphDescribeNamespaceRequest <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDescribeNamespaceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphDescribeNamespaceRequest: iotthingsgraph.IoTThingsGraphDescribeNamespaceRequest = { ... }
```

##### `namespaceName`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDescribeNamespaceRequest.property.namespaceName"></a>

- *Type:* `string`

---

### IoTThingsGraphDescribeNamespaceResponse <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDescribeNamespaceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphDescribeNamespaceResponse: iotthingsgraph.IoTThingsGraphDescribeNamespaceResponse = { ... }
```

##### `namespaceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDescribeNamespaceResponse.property.namespaceArn"></a>

- *Type:* `string`

---

##### `namespaceName`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDescribeNamespaceResponse.property.namespaceName"></a>

- *Type:* `string`

---

##### `namespaceVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDescribeNamespaceResponse.property.namespaceVersion"></a>

- *Type:* `number`

---

##### `trackingNamespaceName`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDescribeNamespaceResponse.property.trackingNamespaceName"></a>

- *Type:* `string`

---

##### `trackingNamespaceVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDescribeNamespaceResponse.property.trackingNamespaceVersion"></a>

- *Type:* `number`

---

### IoTThingsGraphDissociateEntityFromThingRequest <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDissociateEntityFromThingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphDissociateEntityFromThingRequest: iotthingsgraph.IoTThingsGraphDissociateEntityFromThingRequest = { ... }
```

##### `entityType`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDissociateEntityFromThingRequest.property.entityType"></a>

- *Type:* `string`

---

##### `thingName`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDissociateEntityFromThingRequest.property.thingName"></a>

- *Type:* `string`

---

### IoTThingsGraphDissociateEntityFromThingResponse <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDissociateEntityFromThingResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphDissociateEntityFromThingResponse: iotthingsgraph.IoTThingsGraphDissociateEntityFromThingResponse = { ... }
```

### IoTThingsGraphEntityDescription <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphEntityDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphEntityDescription: iotthingsgraph.IoTThingsGraphEntityDescription = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphEntityDescription.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphEntityDescription.property.createdAt"></a>

- *Type:* `string`

---

##### `definition`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphEntityDescription.property.definition"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDefinitionDocument`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDefinitionDocument)

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphEntityDescription.property.id"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphEntityDescription.property.type"></a>

- *Type:* `string`

---

### IoTThingsGraphEntityFilter <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphEntityFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphEntityFilter: iotthingsgraph.IoTThingsGraphEntityFilter = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphEntityFilter.property.name"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphEntityFilter.property.value"></a>

- *Type:* `string`[]

---

### IoTThingsGraphFlowExecutionMessage <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphFlowExecutionMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphFlowExecutionMessage: iotthingsgraph.IoTThingsGraphFlowExecutionMessage = { ... }
```

##### `eventType`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphFlowExecutionMessage.property.eventType"></a>

- *Type:* `string`

---

##### `messageId`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphFlowExecutionMessage.property.messageId"></a>

- *Type:* `string`

---

##### `payload`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphFlowExecutionMessage.property.payload"></a>

- *Type:* `string`

---

##### `timestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphFlowExecutionMessage.property.timestamp"></a>

- *Type:* `string`

---

### IoTThingsGraphFlowExecutionSummary <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphFlowExecutionSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphFlowExecutionSummary: iotthingsgraph.IoTThingsGraphFlowExecutionSummary = { ... }
```

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphFlowExecutionSummary.property.createdAt"></a>

- *Type:* `string`

---

##### `flowExecutionId`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphFlowExecutionSummary.property.flowExecutionId"></a>

- *Type:* `string`

---

##### `flowTemplateId`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphFlowExecutionSummary.property.flowTemplateId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphFlowExecutionSummary.property.status"></a>

- *Type:* `string`

---

##### `systemInstanceId`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphFlowExecutionSummary.property.systemInstanceId"></a>

- *Type:* `string`

---

##### `updatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphFlowExecutionSummary.property.updatedAt"></a>

- *Type:* `string`

---

### IoTThingsGraphFlowTemplateDescription <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphFlowTemplateDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphFlowTemplateDescription: iotthingsgraph.IoTThingsGraphFlowTemplateDescription = { ... }
```

##### `definition`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphFlowTemplateDescription.property.definition"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDefinitionDocument`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDefinitionDocument)

---

##### `summary`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphFlowTemplateDescription.property.summary"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphFlowTemplateSummary`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphFlowTemplateSummary)

---

##### `validatedNamespaceVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphFlowTemplateDescription.property.validatedNamespaceVersion"></a>

- *Type:* `number`

---

### IoTThingsGraphFlowTemplateFilter <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphFlowTemplateFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphFlowTemplateFilter: iotthingsgraph.IoTThingsGraphFlowTemplateFilter = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphFlowTemplateFilter.property.name"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphFlowTemplateFilter.property.value"></a>

- *Type:* `string`[]

---

### IoTThingsGraphFlowTemplateSummary <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphFlowTemplateSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphFlowTemplateSummary: iotthingsgraph.IoTThingsGraphFlowTemplateSummary = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphFlowTemplateSummary.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphFlowTemplateSummary.property.createdAt"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphFlowTemplateSummary.property.id"></a>

- *Type:* `string`

---

##### `revisionNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphFlowTemplateSummary.property.revisionNumber"></a>

- *Type:* `number`

---

### IoTThingsGraphGetEntitiesRequest <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetEntitiesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphGetEntitiesRequest: iotthingsgraph.IoTThingsGraphGetEntitiesRequest = { ... }
```

##### `ids`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetEntitiesRequest.property.ids"></a>

- *Type:* `string`[]

---

##### `namespaceVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetEntitiesRequest.property.namespaceVersion"></a>

- *Type:* `number`

---

### IoTThingsGraphGetEntitiesResponse <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetEntitiesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphGetEntitiesResponse: iotthingsgraph.IoTThingsGraphGetEntitiesResponse = { ... }
```

##### `descriptions`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetEntitiesResponse.property.descriptions"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphEntityDescription`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphEntityDescription)[]

---

### IoTThingsGraphGetFlowTemplateRequest <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetFlowTemplateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphGetFlowTemplateRequest: iotthingsgraph.IoTThingsGraphGetFlowTemplateRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetFlowTemplateRequest.property.id"></a>

- *Type:* `string`

---

##### `revisionNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetFlowTemplateRequest.property.revisionNumber"></a>

- *Type:* `number`

---

### IoTThingsGraphGetFlowTemplateResponse <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetFlowTemplateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphGetFlowTemplateResponse: iotthingsgraph.IoTThingsGraphGetFlowTemplateResponse = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetFlowTemplateResponse.property.description"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphFlowTemplateDescription`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphFlowTemplateDescription)

---

### IoTThingsGraphGetFlowTemplateRevisionsRequest <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetFlowTemplateRevisionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphGetFlowTemplateRevisionsRequest: iotthingsgraph.IoTThingsGraphGetFlowTemplateRevisionsRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetFlowTemplateRevisionsRequest.property.id"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetFlowTemplateRevisionsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetFlowTemplateRevisionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### IoTThingsGraphGetFlowTemplateRevisionsResponse <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetFlowTemplateRevisionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphGetFlowTemplateRevisionsResponse: iotthingsgraph.IoTThingsGraphGetFlowTemplateRevisionsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetFlowTemplateRevisionsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `summaries`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetFlowTemplateRevisionsResponse.property.summaries"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphFlowTemplateSummary`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphFlowTemplateSummary)[]

---

### IoTThingsGraphGetNamespaceDeletionStatusRequest <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetNamespaceDeletionStatusRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphGetNamespaceDeletionStatusRequest: iotthingsgraph.IoTThingsGraphGetNamespaceDeletionStatusRequest = { ... }
```

### IoTThingsGraphGetNamespaceDeletionStatusResponse <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetNamespaceDeletionStatusResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphGetNamespaceDeletionStatusResponse: iotthingsgraph.IoTThingsGraphGetNamespaceDeletionStatusResponse = { ... }
```

##### `errorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetNamespaceDeletionStatusResponse.property.errorCode"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetNamespaceDeletionStatusResponse.property.errorMessage"></a>

- *Type:* `string`

---

##### `namespaceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetNamespaceDeletionStatusResponse.property.namespaceArn"></a>

- *Type:* `string`

---

##### `namespaceName`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetNamespaceDeletionStatusResponse.property.namespaceName"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetNamespaceDeletionStatusResponse.property.status"></a>

- *Type:* `string`

---

### IoTThingsGraphGetSystemInstanceRequest <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetSystemInstanceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphGetSystemInstanceRequest: iotthingsgraph.IoTThingsGraphGetSystemInstanceRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetSystemInstanceRequest.property.id"></a>

- *Type:* `string`

---

### IoTThingsGraphGetSystemInstanceResponse <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetSystemInstanceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphGetSystemInstanceResponse: iotthingsgraph.IoTThingsGraphGetSystemInstanceResponse = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetSystemInstanceResponse.property.description"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemInstanceDescription`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemInstanceDescription)

---

### IoTThingsGraphGetSystemTemplateRequest <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetSystemTemplateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphGetSystemTemplateRequest: iotthingsgraph.IoTThingsGraphGetSystemTemplateRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetSystemTemplateRequest.property.id"></a>

- *Type:* `string`

---

##### `revisionNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetSystemTemplateRequest.property.revisionNumber"></a>

- *Type:* `number`

---

### IoTThingsGraphGetSystemTemplateResponse <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetSystemTemplateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphGetSystemTemplateResponse: iotthingsgraph.IoTThingsGraphGetSystemTemplateResponse = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetSystemTemplateResponse.property.description"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemTemplateDescription`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemTemplateDescription)

---

### IoTThingsGraphGetSystemTemplateRevisionsRequest <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetSystemTemplateRevisionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphGetSystemTemplateRevisionsRequest: iotthingsgraph.IoTThingsGraphGetSystemTemplateRevisionsRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetSystemTemplateRevisionsRequest.property.id"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetSystemTemplateRevisionsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetSystemTemplateRevisionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### IoTThingsGraphGetSystemTemplateRevisionsResponse <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetSystemTemplateRevisionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphGetSystemTemplateRevisionsResponse: iotthingsgraph.IoTThingsGraphGetSystemTemplateRevisionsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetSystemTemplateRevisionsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `summaries`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetSystemTemplateRevisionsResponse.property.summaries"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemTemplateSummary`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemTemplateSummary)[]

---

### IoTThingsGraphGetUploadStatusRequest <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetUploadStatusRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphGetUploadStatusRequest: iotthingsgraph.IoTThingsGraphGetUploadStatusRequest = { ... }
```

##### `uploadId`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetUploadStatusRequest.property.uploadId"></a>

- *Type:* `string`

---

### IoTThingsGraphGetUploadStatusResponse <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetUploadStatusResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphGetUploadStatusResponse: iotthingsgraph.IoTThingsGraphGetUploadStatusResponse = { ... }
```

##### `createdDate`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetUploadStatusResponse.property.createdDate"></a>

- *Type:* `string`

---

##### `uploadId`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetUploadStatusResponse.property.uploadId"></a>

- *Type:* `string`

---

##### `uploadStatus`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetUploadStatusResponse.property.uploadStatus"></a>

- *Type:* `string`

---

##### `failureReason`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetUploadStatusResponse.property.failureReason"></a>

- *Type:* `string`[]

---

##### `namespaceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetUploadStatusResponse.property.namespaceArn"></a>

- *Type:* `string`

---

##### `namespaceName`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetUploadStatusResponse.property.namespaceName"></a>

- *Type:* `string`

---

##### `namespaceVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetUploadStatusResponse.property.namespaceVersion"></a>

- *Type:* `number`

---

### IoTThingsGraphListFlowExecutionMessagesRequest <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphListFlowExecutionMessagesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphListFlowExecutionMessagesRequest: iotthingsgraph.IoTThingsGraphListFlowExecutionMessagesRequest = { ... }
```

##### `flowExecutionId`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphListFlowExecutionMessagesRequest.property.flowExecutionId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphListFlowExecutionMessagesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphListFlowExecutionMessagesRequest.property.nextToken"></a>

- *Type:* `string`

---

### IoTThingsGraphListFlowExecutionMessagesResponse <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphListFlowExecutionMessagesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphListFlowExecutionMessagesResponse: iotthingsgraph.IoTThingsGraphListFlowExecutionMessagesResponse = { ... }
```

##### `messages`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphListFlowExecutionMessagesResponse.property.messages"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphFlowExecutionMessage`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphFlowExecutionMessage)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphListFlowExecutionMessagesResponse.property.nextToken"></a>

- *Type:* `string`

---

### IoTThingsGraphListTagsForResourceRequest <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphListTagsForResourceRequest: iotthingsgraph.IoTThingsGraphListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphListTagsForResourceRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphListTagsForResourceRequest.property.nextToken"></a>

- *Type:* `string`

---

### IoTThingsGraphListTagsForResourceResponse <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphListTagsForResourceResponse: iotthingsgraph.IoTThingsGraphListTagsForResourceResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphListTagsForResourceResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphListTagsForResourceResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphTag`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphTag)[]

---

### IoTThingsGraphMetricsConfiguration <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphMetricsConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphMetricsConfiguration: iotthingsgraph.IoTThingsGraphMetricsConfiguration = { ... }
```

##### `cloudMetricEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphMetricsConfiguration.property.cloudMetricEnabled"></a>

- *Type:* `boolean`

---

##### `metricRuleRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphMetricsConfiguration.property.metricRuleRoleArn"></a>

- *Type:* `string`

---

### IoTThingsGraphSearchEntitiesRequest <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchEntitiesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphSearchEntitiesRequest: iotthingsgraph.IoTThingsGraphSearchEntitiesRequest = { ... }
```

##### `entityTypes`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchEntitiesRequest.property.entityTypes"></a>

- *Type:* `string`[]

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchEntitiesRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphEntityFilter`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphEntityFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchEntitiesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `namespaceVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchEntitiesRequest.property.namespaceVersion"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchEntitiesRequest.property.nextToken"></a>

- *Type:* `string`

---

### IoTThingsGraphSearchEntitiesResponse <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchEntitiesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphSearchEntitiesResponse: iotthingsgraph.IoTThingsGraphSearchEntitiesResponse = { ... }
```

##### `descriptions`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchEntitiesResponse.property.descriptions"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphEntityDescription`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphEntityDescription)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchEntitiesResponse.property.nextToken"></a>

- *Type:* `string`

---

### IoTThingsGraphSearchFlowExecutionsRequest <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchFlowExecutionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphSearchFlowExecutionsRequest: iotthingsgraph.IoTThingsGraphSearchFlowExecutionsRequest = { ... }
```

##### `systemInstanceId`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchFlowExecutionsRequest.property.systemInstanceId"></a>

- *Type:* `string`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchFlowExecutionsRequest.property.endTime"></a>

- *Type:* `string`

---

##### `flowExecutionId`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchFlowExecutionsRequest.property.flowExecutionId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchFlowExecutionsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchFlowExecutionsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchFlowExecutionsRequest.property.startTime"></a>

- *Type:* `string`

---

### IoTThingsGraphSearchFlowExecutionsResponse <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchFlowExecutionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphSearchFlowExecutionsResponse: iotthingsgraph.IoTThingsGraphSearchFlowExecutionsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchFlowExecutionsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `summaries`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchFlowExecutionsResponse.property.summaries"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphFlowExecutionSummary`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphFlowExecutionSummary)[]

---

### IoTThingsGraphSearchFlowTemplatesRequest <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchFlowTemplatesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphSearchFlowTemplatesRequest: iotthingsgraph.IoTThingsGraphSearchFlowTemplatesRequest = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchFlowTemplatesRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphFlowTemplateFilter`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphFlowTemplateFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchFlowTemplatesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchFlowTemplatesRequest.property.nextToken"></a>

- *Type:* `string`

---

### IoTThingsGraphSearchFlowTemplatesResponse <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchFlowTemplatesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphSearchFlowTemplatesResponse: iotthingsgraph.IoTThingsGraphSearchFlowTemplatesResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchFlowTemplatesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `summaries`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchFlowTemplatesResponse.property.summaries"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphFlowTemplateSummary`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphFlowTemplateSummary)[]

---

### IoTThingsGraphSearchSystemInstancesRequest <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchSystemInstancesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphSearchSystemInstancesRequest: iotthingsgraph.IoTThingsGraphSearchSystemInstancesRequest = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchSystemInstancesRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemInstanceFilter`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemInstanceFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchSystemInstancesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchSystemInstancesRequest.property.nextToken"></a>

- *Type:* `string`

---

### IoTThingsGraphSearchSystemInstancesResponse <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchSystemInstancesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphSearchSystemInstancesResponse: iotthingsgraph.IoTThingsGraphSearchSystemInstancesResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchSystemInstancesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `summaries`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchSystemInstancesResponse.property.summaries"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemInstanceSummary`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemInstanceSummary)[]

---

### IoTThingsGraphSearchSystemTemplatesRequest <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchSystemTemplatesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphSearchSystemTemplatesRequest: iotthingsgraph.IoTThingsGraphSearchSystemTemplatesRequest = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchSystemTemplatesRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemTemplateFilter`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemTemplateFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchSystemTemplatesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchSystemTemplatesRequest.property.nextToken"></a>

- *Type:* `string`

---

### IoTThingsGraphSearchSystemTemplatesResponse <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchSystemTemplatesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphSearchSystemTemplatesResponse: iotthingsgraph.IoTThingsGraphSearchSystemTemplatesResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchSystemTemplatesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `summaries`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchSystemTemplatesResponse.property.summaries"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemTemplateSummary`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemTemplateSummary)[]

---

### IoTThingsGraphSearchThingsRequest <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchThingsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphSearchThingsRequest: iotthingsgraph.IoTThingsGraphSearchThingsRequest = { ... }
```

##### `entityId`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchThingsRequest.property.entityId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchThingsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `namespaceVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchThingsRequest.property.namespaceVersion"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchThingsRequest.property.nextToken"></a>

- *Type:* `string`

---

### IoTThingsGraphSearchThingsResponse <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchThingsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphSearchThingsResponse: iotthingsgraph.IoTThingsGraphSearchThingsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchThingsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `things`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchThingsResponse.property.things"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphThing`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphThing)[]

---

### IoTThingsGraphSystemInstanceDescription <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemInstanceDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphSystemInstanceDescription: iotthingsgraph.IoTThingsGraphSystemInstanceDescription = { ... }
```

##### `definition`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemInstanceDescription.property.definition"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDefinitionDocument`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDefinitionDocument)

---

##### `flowActionsRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemInstanceDescription.property.flowActionsRoleArn"></a>

- *Type:* `string`

---

##### `metricsConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemInstanceDescription.property.metricsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphMetricsConfiguration`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphMetricsConfiguration)

---

##### `s3BucketName`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemInstanceDescription.property.s3BucketName"></a>

- *Type:* `string`

---

##### `summary`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemInstanceDescription.property.summary"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemInstanceSummary`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemInstanceSummary)

---

##### `validatedDependencyRevisions`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemInstanceDescription.property.validatedDependencyRevisions"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDependencyRevision`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDependencyRevision)[]

---

##### `validatedNamespaceVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemInstanceDescription.property.validatedNamespaceVersion"></a>

- *Type:* `number`

---

### IoTThingsGraphSystemInstanceFilter <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemInstanceFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphSystemInstanceFilter: iotthingsgraph.IoTThingsGraphSystemInstanceFilter = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemInstanceFilter.property.name"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemInstanceFilter.property.value"></a>

- *Type:* `string`[]

---

### IoTThingsGraphSystemInstanceSummary <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemInstanceSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphSystemInstanceSummary: iotthingsgraph.IoTThingsGraphSystemInstanceSummary = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemInstanceSummary.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemInstanceSummary.property.createdAt"></a>

- *Type:* `string`

---

##### `greengrassGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemInstanceSummary.property.greengrassGroupId"></a>

- *Type:* `string`

---

##### `greengrassGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemInstanceSummary.property.greengrassGroupName"></a>

- *Type:* `string`

---

##### `greengrassGroupVersionId`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemInstanceSummary.property.greengrassGroupVersionId"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemInstanceSummary.property.id"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemInstanceSummary.property.status"></a>

- *Type:* `string`

---

##### `target`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemInstanceSummary.property.target"></a>

- *Type:* `string`

---

##### `updatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemInstanceSummary.property.updatedAt"></a>

- *Type:* `string`

---

### IoTThingsGraphSystemTemplateDescription <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemTemplateDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphSystemTemplateDescription: iotthingsgraph.IoTThingsGraphSystemTemplateDescription = { ... }
```

##### `definition`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemTemplateDescription.property.definition"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDefinitionDocument`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDefinitionDocument)

---

##### `summary`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemTemplateDescription.property.summary"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemTemplateSummary`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemTemplateSummary)

---

##### `validatedNamespaceVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemTemplateDescription.property.validatedNamespaceVersion"></a>

- *Type:* `number`

---

### IoTThingsGraphSystemTemplateFilter <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemTemplateFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphSystemTemplateFilter: iotthingsgraph.IoTThingsGraphSystemTemplateFilter = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemTemplateFilter.property.name"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemTemplateFilter.property.value"></a>

- *Type:* `string`[]

---

### IoTThingsGraphSystemTemplateSummary <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemTemplateSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphSystemTemplateSummary: iotthingsgraph.IoTThingsGraphSystemTemplateSummary = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemTemplateSummary.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemTemplateSummary.property.createdAt"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemTemplateSummary.property.id"></a>

- *Type:* `string`

---

##### `revisionNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemTemplateSummary.property.revisionNumber"></a>

- *Type:* `number`

---

### IoTThingsGraphTag <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphTag: iotthingsgraph.IoTThingsGraphTag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphTag.property.value"></a>

- *Type:* `string`

---

### IoTThingsGraphTagResourceRequest <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphTagResourceRequest: iotthingsgraph.IoTThingsGraphTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphTagResourceRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphTag`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphTag)[]

---

### IoTThingsGraphTagResourceResponse <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphTagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphTagResourceResponse: iotthingsgraph.IoTThingsGraphTagResourceResponse = { ... }
```

### IoTThingsGraphThing <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphThing"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphThing: iotthingsgraph.IoTThingsGraphThing = { ... }
```

##### `thingArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphThing.property.thingArn"></a>

- *Type:* `string`

---

##### `thingName`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphThing.property.thingName"></a>

- *Type:* `string`

---

### IoTThingsGraphUndeploySystemInstanceRequest <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphUndeploySystemInstanceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphUndeploySystemInstanceRequest: iotthingsgraph.IoTThingsGraphUndeploySystemInstanceRequest = { ... }
```

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphUndeploySystemInstanceRequest.property.id"></a>

- *Type:* `string`

---

### IoTThingsGraphUndeploySystemInstanceResponse <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphUndeploySystemInstanceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphUndeploySystemInstanceResponse: iotthingsgraph.IoTThingsGraphUndeploySystemInstanceResponse = { ... }
```

##### `summary`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphUndeploySystemInstanceResponse.property.summary"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemInstanceSummary`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemInstanceSummary)

---

### IoTThingsGraphUntagResourceRequest <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphUntagResourceRequest: iotthingsgraph.IoTThingsGraphUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### IoTThingsGraphUntagResourceResponse <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphUntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphUntagResourceResponse: iotthingsgraph.IoTThingsGraphUntagResourceResponse = { ... }
```

### IoTThingsGraphUpdateFlowTemplateRequest <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphUpdateFlowTemplateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphUpdateFlowTemplateRequest: iotthingsgraph.IoTThingsGraphUpdateFlowTemplateRequest = { ... }
```

##### `definition`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphUpdateFlowTemplateRequest.property.definition"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDefinitionDocument`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDefinitionDocument)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphUpdateFlowTemplateRequest.property.id"></a>

- *Type:* `string`

---

##### `compatibleNamespaceVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphUpdateFlowTemplateRequest.property.compatibleNamespaceVersion"></a>

- *Type:* `number`

---

### IoTThingsGraphUpdateFlowTemplateResponse <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphUpdateFlowTemplateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphUpdateFlowTemplateResponse: iotthingsgraph.IoTThingsGraphUpdateFlowTemplateResponse = { ... }
```

##### `summary`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphUpdateFlowTemplateResponse.property.summary"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphFlowTemplateSummary`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphFlowTemplateSummary)

---

### IoTThingsGraphUpdateSystemTemplateRequest <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphUpdateSystemTemplateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphUpdateSystemTemplateRequest: iotthingsgraph.IoTThingsGraphUpdateSystemTemplateRequest = { ... }
```

##### `definition`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphUpdateSystemTemplateRequest.property.definition"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDefinitionDocument`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDefinitionDocument)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphUpdateSystemTemplateRequest.property.id"></a>

- *Type:* `string`

---

##### `compatibleNamespaceVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphUpdateSystemTemplateRequest.property.compatibleNamespaceVersion"></a>

- *Type:* `number`

---

### IoTThingsGraphUpdateSystemTemplateResponse <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphUpdateSystemTemplateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphUpdateSystemTemplateResponse: iotthingsgraph.IoTThingsGraphUpdateSystemTemplateResponse = { ... }
```

##### `summary`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphUpdateSystemTemplateResponse.property.summary"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemTemplateSummary`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemTemplateSummary)

---

### IoTThingsGraphUploadEntityDefinitionsRequest <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphUploadEntityDefinitionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphUploadEntityDefinitionsRequest: iotthingsgraph.IoTThingsGraphUploadEntityDefinitionsRequest = { ... }
```

##### `deprecateExistingEntities`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphUploadEntityDefinitionsRequest.property.deprecateExistingEntities"></a>

- *Type:* `boolean`

---

##### `document`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphUploadEntityDefinitionsRequest.property.document"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDefinitionDocument`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDefinitionDocument)

---

##### `syncWithPublicNamespace`<sup>Optional</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphUploadEntityDefinitionsRequest.property.syncWithPublicNamespace"></a>

- *Type:* `boolean`

---

### IoTThingsGraphUploadEntityDefinitionsResponse <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphUploadEntityDefinitionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

const ioTThingsGraphUploadEntityDefinitionsResponse: iotthingsgraph.IoTThingsGraphUploadEntityDefinitionsResponse = { ... }
```

##### `uploadId`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphUploadEntityDefinitionsResponse.property.uploadId"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### IoTThingsGraphResponsesCreateFlowTemplate <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesCreateFlowTemplate"></a>

#### Initializer <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesCreateFlowTemplate.Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

new iotthingsgraph.IoTThingsGraphResponsesCreateFlowTemplate(__scope: Construct, __resources: string[], __input: IoTThingsGraphCreateFlowTemplateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesCreateFlowTemplate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesCreateFlowTemplate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesCreateFlowTemplate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphCreateFlowTemplateRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphCreateFlowTemplateRequest)

---



#### Properties <a name="Properties"></a>

##### `summary`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesCreateFlowTemplate.property.summary"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesCreateFlowTemplateSummary`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesCreateFlowTemplateSummary)

---


### IoTThingsGraphResponsesCreateFlowTemplateSummary <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesCreateFlowTemplateSummary"></a>

#### Initializer <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesCreateFlowTemplateSummary.Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

new iotthingsgraph.IoTThingsGraphResponsesCreateFlowTemplateSummary(__scope: Construct, __resources: string[], __input: IoTThingsGraphCreateFlowTemplateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesCreateFlowTemplateSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesCreateFlowTemplateSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesCreateFlowTemplateSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphCreateFlowTemplateRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphCreateFlowTemplateRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesCreateFlowTemplateSummary.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesCreateFlowTemplateSummary.property.createdAt"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesCreateFlowTemplateSummary.property.id"></a>

- *Type:* `string`

---

##### `revisionNumber`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesCreateFlowTemplateSummary.property.revisionNumber"></a>

- *Type:* `number`

---


### IoTThingsGraphResponsesCreateSystemInstance <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesCreateSystemInstance"></a>

#### Initializer <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesCreateSystemInstance.Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

new iotthingsgraph.IoTThingsGraphResponsesCreateSystemInstance(__scope: Construct, __resources: string[], __input: IoTThingsGraphCreateSystemInstanceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesCreateSystemInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesCreateSystemInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesCreateSystemInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphCreateSystemInstanceRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphCreateSystemInstanceRequest)

---



#### Properties <a name="Properties"></a>

##### `summary`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesCreateSystemInstance.property.summary"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesCreateSystemInstanceSummary`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesCreateSystemInstanceSummary)

---


### IoTThingsGraphResponsesCreateSystemInstanceSummary <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesCreateSystemInstanceSummary"></a>

#### Initializer <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesCreateSystemInstanceSummary.Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

new iotthingsgraph.IoTThingsGraphResponsesCreateSystemInstanceSummary(__scope: Construct, __resources: string[], __input: IoTThingsGraphCreateSystemInstanceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesCreateSystemInstanceSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesCreateSystemInstanceSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesCreateSystemInstanceSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphCreateSystemInstanceRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphCreateSystemInstanceRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesCreateSystemInstanceSummary.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesCreateSystemInstanceSummary.property.createdAt"></a>

- *Type:* `string`

---

##### `greengrassGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesCreateSystemInstanceSummary.property.greengrassGroupId"></a>

- *Type:* `string`

---

##### `greengrassGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesCreateSystemInstanceSummary.property.greengrassGroupName"></a>

- *Type:* `string`

---

##### `greengrassGroupVersionId`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesCreateSystemInstanceSummary.property.greengrassGroupVersionId"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesCreateSystemInstanceSummary.property.id"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesCreateSystemInstanceSummary.property.status"></a>

- *Type:* `string`

---

##### `target`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesCreateSystemInstanceSummary.property.target"></a>

- *Type:* `string`

---

##### `updatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesCreateSystemInstanceSummary.property.updatedAt"></a>

- *Type:* `string`

---


### IoTThingsGraphResponsesCreateSystemTemplate <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesCreateSystemTemplate"></a>

#### Initializer <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesCreateSystemTemplate.Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

new iotthingsgraph.IoTThingsGraphResponsesCreateSystemTemplate(__scope: Construct, __resources: string[], __input: IoTThingsGraphCreateSystemTemplateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesCreateSystemTemplate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesCreateSystemTemplate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesCreateSystemTemplate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphCreateSystemTemplateRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphCreateSystemTemplateRequest)

---



#### Properties <a name="Properties"></a>

##### `summary`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesCreateSystemTemplate.property.summary"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesCreateSystemTemplateSummary`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesCreateSystemTemplateSummary)

---


### IoTThingsGraphResponsesCreateSystemTemplateSummary <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesCreateSystemTemplateSummary"></a>

#### Initializer <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesCreateSystemTemplateSummary.Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

new iotthingsgraph.IoTThingsGraphResponsesCreateSystemTemplateSummary(__scope: Construct, __resources: string[], __input: IoTThingsGraphCreateSystemTemplateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesCreateSystemTemplateSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesCreateSystemTemplateSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesCreateSystemTemplateSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphCreateSystemTemplateRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphCreateSystemTemplateRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesCreateSystemTemplateSummary.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesCreateSystemTemplateSummary.property.createdAt"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesCreateSystemTemplateSummary.property.id"></a>

- *Type:* `string`

---

##### `revisionNumber`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesCreateSystemTemplateSummary.property.revisionNumber"></a>

- *Type:* `number`

---


### IoTThingsGraphResponsesDeleteNamespace <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesDeleteNamespace"></a>

#### Initializer <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesDeleteNamespace.Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

new iotthingsgraph.IoTThingsGraphResponsesDeleteNamespace(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesDeleteNamespace.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesDeleteNamespace.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `namespaceArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesDeleteNamespace.property.namespaceArn"></a>

- *Type:* `string`

---

##### `namespaceName`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesDeleteNamespace.property.namespaceName"></a>

- *Type:* `string`

---


### IoTThingsGraphResponsesDeploySystemInstance <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesDeploySystemInstance"></a>

#### Initializer <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesDeploySystemInstance.Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

new iotthingsgraph.IoTThingsGraphResponsesDeploySystemInstance(__scope: Construct, __resources: string[], __input: IoTThingsGraphDeploySystemInstanceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesDeploySystemInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesDeploySystemInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesDeploySystemInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDeploySystemInstanceRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDeploySystemInstanceRequest)

---



#### Properties <a name="Properties"></a>

##### `greengrassDeploymentId`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesDeploySystemInstance.property.greengrassDeploymentId"></a>

- *Type:* `string`

---

##### `summary`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesDeploySystemInstance.property.summary"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesDeploySystemInstanceSummary`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesDeploySystemInstanceSummary)

---


### IoTThingsGraphResponsesDeploySystemInstanceSummary <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesDeploySystemInstanceSummary"></a>

#### Initializer <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesDeploySystemInstanceSummary.Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

new iotthingsgraph.IoTThingsGraphResponsesDeploySystemInstanceSummary(__scope: Construct, __resources: string[], __input: IoTThingsGraphDeploySystemInstanceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesDeploySystemInstanceSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesDeploySystemInstanceSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesDeploySystemInstanceSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDeploySystemInstanceRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDeploySystemInstanceRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesDeploySystemInstanceSummary.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesDeploySystemInstanceSummary.property.createdAt"></a>

- *Type:* `string`

---

##### `greengrassGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesDeploySystemInstanceSummary.property.greengrassGroupId"></a>

- *Type:* `string`

---

##### `greengrassGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesDeploySystemInstanceSummary.property.greengrassGroupName"></a>

- *Type:* `string`

---

##### `greengrassGroupVersionId`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesDeploySystemInstanceSummary.property.greengrassGroupVersionId"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesDeploySystemInstanceSummary.property.id"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesDeploySystemInstanceSummary.property.status"></a>

- *Type:* `string`

---

##### `target`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesDeploySystemInstanceSummary.property.target"></a>

- *Type:* `string`

---

##### `updatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesDeploySystemInstanceSummary.property.updatedAt"></a>

- *Type:* `string`

---


### IoTThingsGraphResponsesDescribeNamespace <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesDescribeNamespace"></a>

#### Initializer <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesDescribeNamespace.Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

new iotthingsgraph.IoTThingsGraphResponsesDescribeNamespace(__scope: Construct, __resources: string[], __input: IoTThingsGraphDescribeNamespaceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesDescribeNamespace.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesDescribeNamespace.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesDescribeNamespace.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDescribeNamespaceRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDescribeNamespaceRequest)

---



#### Properties <a name="Properties"></a>

##### `namespaceArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesDescribeNamespace.property.namespaceArn"></a>

- *Type:* `string`

---

##### `namespaceName`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesDescribeNamespace.property.namespaceName"></a>

- *Type:* `string`

---

##### `namespaceVersion`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesDescribeNamespace.property.namespaceVersion"></a>

- *Type:* `number`

---

##### `trackingNamespaceName`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesDescribeNamespace.property.trackingNamespaceName"></a>

- *Type:* `string`

---

##### `trackingNamespaceVersion`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesDescribeNamespace.property.trackingNamespaceVersion"></a>

- *Type:* `number`

---


### IoTThingsGraphResponsesFetchEntities <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchEntities"></a>

#### Initializer <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchEntities.Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

new iotthingsgraph.IoTThingsGraphResponsesFetchEntities(__scope: Construct, __resources: string[], __input: IoTThingsGraphGetEntitiesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchEntities.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchEntities.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchEntities.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetEntitiesRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetEntitiesRequest)

---



#### Properties <a name="Properties"></a>

##### `descriptions`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchEntities.property.descriptions"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphEntityDescription`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphEntityDescription)[]

---


### IoTThingsGraphResponsesFetchFlowTemplate <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchFlowTemplate"></a>

#### Initializer <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchFlowTemplate.Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

new iotthingsgraph.IoTThingsGraphResponsesFetchFlowTemplate(__scope: Construct, __resources: string[], __input: IoTThingsGraphGetFlowTemplateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchFlowTemplate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchFlowTemplate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchFlowTemplate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetFlowTemplateRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetFlowTemplateRequest)

---



#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchFlowTemplate.property.description"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchFlowTemplateDescription`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchFlowTemplateDescription)

---


### IoTThingsGraphResponsesFetchFlowTemplateDescription <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchFlowTemplateDescription"></a>

#### Initializer <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchFlowTemplateDescription.Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

new iotthingsgraph.IoTThingsGraphResponsesFetchFlowTemplateDescription(__scope: Construct, __resources: string[], __input: IoTThingsGraphGetFlowTemplateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchFlowTemplateDescription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchFlowTemplateDescription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchFlowTemplateDescription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetFlowTemplateRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetFlowTemplateRequest)

---



#### Properties <a name="Properties"></a>

##### `definition`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchFlowTemplateDescription.property.definition"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchFlowTemplateDescriptionDefinition`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchFlowTemplateDescriptionDefinition)

---

##### `summary`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchFlowTemplateDescription.property.summary"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchFlowTemplateDescriptionSummary`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchFlowTemplateDescriptionSummary)

---

##### `validatedNamespaceVersion`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchFlowTemplateDescription.property.validatedNamespaceVersion"></a>

- *Type:* `number`

---


### IoTThingsGraphResponsesFetchFlowTemplateDescriptionDefinition <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchFlowTemplateDescriptionDefinition"></a>

#### Initializer <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchFlowTemplateDescriptionDefinition.Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

new iotthingsgraph.IoTThingsGraphResponsesFetchFlowTemplateDescriptionDefinition(__scope: Construct, __resources: string[], __input: IoTThingsGraphGetFlowTemplateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchFlowTemplateDescriptionDefinition.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchFlowTemplateDescriptionDefinition.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchFlowTemplateDescriptionDefinition.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetFlowTemplateRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetFlowTemplateRequest)

---



#### Properties <a name="Properties"></a>

##### `language`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchFlowTemplateDescriptionDefinition.property.language"></a>

- *Type:* `string`

---

##### `text`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchFlowTemplateDescriptionDefinition.property.text"></a>

- *Type:* `string`

---


### IoTThingsGraphResponsesFetchFlowTemplateDescriptionSummary <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchFlowTemplateDescriptionSummary"></a>

#### Initializer <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchFlowTemplateDescriptionSummary.Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

new iotthingsgraph.IoTThingsGraphResponsesFetchFlowTemplateDescriptionSummary(__scope: Construct, __resources: string[], __input: IoTThingsGraphGetFlowTemplateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchFlowTemplateDescriptionSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchFlowTemplateDescriptionSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchFlowTemplateDescriptionSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetFlowTemplateRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetFlowTemplateRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchFlowTemplateDescriptionSummary.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchFlowTemplateDescriptionSummary.property.createdAt"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchFlowTemplateDescriptionSummary.property.id"></a>

- *Type:* `string`

---

##### `revisionNumber`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchFlowTemplateDescriptionSummary.property.revisionNumber"></a>

- *Type:* `number`

---


### IoTThingsGraphResponsesFetchFlowTemplateRevisions <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchFlowTemplateRevisions"></a>

#### Initializer <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchFlowTemplateRevisions.Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

new iotthingsgraph.IoTThingsGraphResponsesFetchFlowTemplateRevisions(__scope: Construct, __resources: string[], __input: IoTThingsGraphGetFlowTemplateRevisionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchFlowTemplateRevisions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchFlowTemplateRevisions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchFlowTemplateRevisions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetFlowTemplateRevisionsRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetFlowTemplateRevisionsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchFlowTemplateRevisions.property.nextToken"></a>

- *Type:* `string`

---

##### `summaries`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchFlowTemplateRevisions.property.summaries"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphFlowTemplateSummary`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphFlowTemplateSummary)[]

---


### IoTThingsGraphResponsesFetchNamespaceDeletionStatus <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchNamespaceDeletionStatus"></a>

#### Initializer <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchNamespaceDeletionStatus.Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

new iotthingsgraph.IoTThingsGraphResponsesFetchNamespaceDeletionStatus(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchNamespaceDeletionStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchNamespaceDeletionStatus.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `errorCode`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchNamespaceDeletionStatus.property.errorCode"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchNamespaceDeletionStatus.property.errorMessage"></a>

- *Type:* `string`

---

##### `namespaceArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchNamespaceDeletionStatus.property.namespaceArn"></a>

- *Type:* `string`

---

##### `namespaceName`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchNamespaceDeletionStatus.property.namespaceName"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchNamespaceDeletionStatus.property.status"></a>

- *Type:* `string`

---


### IoTThingsGraphResponsesFetchSystemInstance <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemInstance"></a>

#### Initializer <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemInstance.Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

new iotthingsgraph.IoTThingsGraphResponsesFetchSystemInstance(__scope: Construct, __resources: string[], __input: IoTThingsGraphGetSystemInstanceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetSystemInstanceRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetSystemInstanceRequest)

---



#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemInstance.property.description"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemInstanceDescription`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemInstanceDescription)

---


### IoTThingsGraphResponsesFetchSystemInstanceDescription <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemInstanceDescription"></a>

#### Initializer <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemInstanceDescription.Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

new iotthingsgraph.IoTThingsGraphResponsesFetchSystemInstanceDescription(__scope: Construct, __resources: string[], __input: IoTThingsGraphGetSystemInstanceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemInstanceDescription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemInstanceDescription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemInstanceDescription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetSystemInstanceRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetSystemInstanceRequest)

---



#### Properties <a name="Properties"></a>

##### `definition`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemInstanceDescription.property.definition"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemInstanceDescriptionDefinition`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemInstanceDescriptionDefinition)

---

##### `flowActionsRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemInstanceDescription.property.flowActionsRoleArn"></a>

- *Type:* `string`

---

##### `metricsConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemInstanceDescription.property.metricsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemInstanceDescriptionMetricsConfiguration`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemInstanceDescriptionMetricsConfiguration)

---

##### `s3BucketName`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemInstanceDescription.property.s3BucketName"></a>

- *Type:* `string`

---

##### `summary`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemInstanceDescription.property.summary"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemInstanceDescriptionSummary`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemInstanceDescriptionSummary)

---

##### `validatedDependencyRevisions`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemInstanceDescription.property.validatedDependencyRevisions"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDependencyRevision`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphDependencyRevision)[]

---

##### `validatedNamespaceVersion`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemInstanceDescription.property.validatedNamespaceVersion"></a>

- *Type:* `number`

---


### IoTThingsGraphResponsesFetchSystemInstanceDescriptionDefinition <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemInstanceDescriptionDefinition"></a>

#### Initializer <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemInstanceDescriptionDefinition.Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

new iotthingsgraph.IoTThingsGraphResponsesFetchSystemInstanceDescriptionDefinition(__scope: Construct, __resources: string[], __input: IoTThingsGraphGetSystemInstanceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemInstanceDescriptionDefinition.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemInstanceDescriptionDefinition.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemInstanceDescriptionDefinition.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetSystemInstanceRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetSystemInstanceRequest)

---



#### Properties <a name="Properties"></a>

##### `language`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemInstanceDescriptionDefinition.property.language"></a>

- *Type:* `string`

---

##### `text`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemInstanceDescriptionDefinition.property.text"></a>

- *Type:* `string`

---


### IoTThingsGraphResponsesFetchSystemInstanceDescriptionMetricsConfiguration <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemInstanceDescriptionMetricsConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemInstanceDescriptionMetricsConfiguration.Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

new iotthingsgraph.IoTThingsGraphResponsesFetchSystemInstanceDescriptionMetricsConfiguration(__scope: Construct, __resources: string[], __input: IoTThingsGraphGetSystemInstanceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemInstanceDescriptionMetricsConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemInstanceDescriptionMetricsConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemInstanceDescriptionMetricsConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetSystemInstanceRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetSystemInstanceRequest)

---



#### Properties <a name="Properties"></a>

##### `cloudMetricEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemInstanceDescriptionMetricsConfiguration.property.cloudMetricEnabled"></a>

- *Type:* `boolean`

---

##### `metricRuleRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemInstanceDescriptionMetricsConfiguration.property.metricRuleRoleArn"></a>

- *Type:* `string`

---


### IoTThingsGraphResponsesFetchSystemInstanceDescriptionSummary <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemInstanceDescriptionSummary"></a>

#### Initializer <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemInstanceDescriptionSummary.Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

new iotthingsgraph.IoTThingsGraphResponsesFetchSystemInstanceDescriptionSummary(__scope: Construct, __resources: string[], __input: IoTThingsGraphGetSystemInstanceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemInstanceDescriptionSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemInstanceDescriptionSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemInstanceDescriptionSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetSystemInstanceRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetSystemInstanceRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemInstanceDescriptionSummary.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemInstanceDescriptionSummary.property.createdAt"></a>

- *Type:* `string`

---

##### `greengrassGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemInstanceDescriptionSummary.property.greengrassGroupId"></a>

- *Type:* `string`

---

##### `greengrassGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemInstanceDescriptionSummary.property.greengrassGroupName"></a>

- *Type:* `string`

---

##### `greengrassGroupVersionId`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemInstanceDescriptionSummary.property.greengrassGroupVersionId"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemInstanceDescriptionSummary.property.id"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemInstanceDescriptionSummary.property.status"></a>

- *Type:* `string`

---

##### `target`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemInstanceDescriptionSummary.property.target"></a>

- *Type:* `string`

---

##### `updatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemInstanceDescriptionSummary.property.updatedAt"></a>

- *Type:* `string`

---


### IoTThingsGraphResponsesFetchSystemTemplate <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemTemplate"></a>

#### Initializer <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemTemplate.Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

new iotthingsgraph.IoTThingsGraphResponsesFetchSystemTemplate(__scope: Construct, __resources: string[], __input: IoTThingsGraphGetSystemTemplateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemTemplate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemTemplate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemTemplate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetSystemTemplateRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetSystemTemplateRequest)

---



#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemTemplate.property.description"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemTemplateDescription`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemTemplateDescription)

---


### IoTThingsGraphResponsesFetchSystemTemplateDescription <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemTemplateDescription"></a>

#### Initializer <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemTemplateDescription.Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

new iotthingsgraph.IoTThingsGraphResponsesFetchSystemTemplateDescription(__scope: Construct, __resources: string[], __input: IoTThingsGraphGetSystemTemplateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemTemplateDescription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemTemplateDescription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemTemplateDescription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetSystemTemplateRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetSystemTemplateRequest)

---



#### Properties <a name="Properties"></a>

##### `definition`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemTemplateDescription.property.definition"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemTemplateDescriptionDefinition`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemTemplateDescriptionDefinition)

---

##### `summary`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemTemplateDescription.property.summary"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemTemplateDescriptionSummary`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemTemplateDescriptionSummary)

---

##### `validatedNamespaceVersion`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemTemplateDescription.property.validatedNamespaceVersion"></a>

- *Type:* `number`

---


### IoTThingsGraphResponsesFetchSystemTemplateDescriptionDefinition <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemTemplateDescriptionDefinition"></a>

#### Initializer <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemTemplateDescriptionDefinition.Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

new iotthingsgraph.IoTThingsGraphResponsesFetchSystemTemplateDescriptionDefinition(__scope: Construct, __resources: string[], __input: IoTThingsGraphGetSystemTemplateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemTemplateDescriptionDefinition.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemTemplateDescriptionDefinition.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemTemplateDescriptionDefinition.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetSystemTemplateRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetSystemTemplateRequest)

---



#### Properties <a name="Properties"></a>

##### `language`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemTemplateDescriptionDefinition.property.language"></a>

- *Type:* `string`

---

##### `text`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemTemplateDescriptionDefinition.property.text"></a>

- *Type:* `string`

---


### IoTThingsGraphResponsesFetchSystemTemplateDescriptionSummary <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemTemplateDescriptionSummary"></a>

#### Initializer <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemTemplateDescriptionSummary.Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

new iotthingsgraph.IoTThingsGraphResponsesFetchSystemTemplateDescriptionSummary(__scope: Construct, __resources: string[], __input: IoTThingsGraphGetSystemTemplateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemTemplateDescriptionSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemTemplateDescriptionSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemTemplateDescriptionSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetSystemTemplateRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetSystemTemplateRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemTemplateDescriptionSummary.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemTemplateDescriptionSummary.property.createdAt"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemTemplateDescriptionSummary.property.id"></a>

- *Type:* `string`

---

##### `revisionNumber`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemTemplateDescriptionSummary.property.revisionNumber"></a>

- *Type:* `number`

---


### IoTThingsGraphResponsesFetchSystemTemplateRevisions <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemTemplateRevisions"></a>

#### Initializer <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemTemplateRevisions.Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

new iotthingsgraph.IoTThingsGraphResponsesFetchSystemTemplateRevisions(__scope: Construct, __resources: string[], __input: IoTThingsGraphGetSystemTemplateRevisionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemTemplateRevisions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemTemplateRevisions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemTemplateRevisions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetSystemTemplateRevisionsRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetSystemTemplateRevisionsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemTemplateRevisions.property.nextToken"></a>

- *Type:* `string`

---

##### `summaries`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchSystemTemplateRevisions.property.summaries"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemTemplateSummary`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemTemplateSummary)[]

---


### IoTThingsGraphResponsesFetchUploadStatus <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchUploadStatus"></a>

#### Initializer <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchUploadStatus.Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

new iotthingsgraph.IoTThingsGraphResponsesFetchUploadStatus(__scope: Construct, __resources: string[], __input: IoTThingsGraphGetUploadStatusRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchUploadStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchUploadStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchUploadStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetUploadStatusRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphGetUploadStatusRequest)

---



#### Properties <a name="Properties"></a>

##### `createdDate`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchUploadStatus.property.createdDate"></a>

- *Type:* `string`

---

##### `failureReason`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchUploadStatus.property.failureReason"></a>

- *Type:* `string`[]

---

##### `namespaceArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchUploadStatus.property.namespaceArn"></a>

- *Type:* `string`

---

##### `namespaceName`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchUploadStatus.property.namespaceName"></a>

- *Type:* `string`

---

##### `namespaceVersion`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchUploadStatus.property.namespaceVersion"></a>

- *Type:* `number`

---

##### `uploadId`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchUploadStatus.property.uploadId"></a>

- *Type:* `string`

---

##### `uploadStatus`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesFetchUploadStatus.property.uploadStatus"></a>

- *Type:* `string`

---


### IoTThingsGraphResponsesListFlowExecutionMessages <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesListFlowExecutionMessages"></a>

#### Initializer <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesListFlowExecutionMessages.Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

new iotthingsgraph.IoTThingsGraphResponsesListFlowExecutionMessages(__scope: Construct, __resources: string[], __input: IoTThingsGraphListFlowExecutionMessagesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesListFlowExecutionMessages.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesListFlowExecutionMessages.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesListFlowExecutionMessages.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphListFlowExecutionMessagesRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphListFlowExecutionMessagesRequest)

---



#### Properties <a name="Properties"></a>

##### `messages`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesListFlowExecutionMessages.property.messages"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphFlowExecutionMessage`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphFlowExecutionMessage)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesListFlowExecutionMessages.property.nextToken"></a>

- *Type:* `string`

---


### IoTThingsGraphResponsesListTagsForResource <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesListTagsForResource.Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

new iotthingsgraph.IoTThingsGraphResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: IoTThingsGraphListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphListTagsForResourceRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesListTagsForResource.property.nextToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesListTagsForResource.property.tags"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphTag`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphTag)[]

---


### IoTThingsGraphResponsesSearchEntities <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesSearchEntities"></a>

#### Initializer <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesSearchEntities.Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

new iotthingsgraph.IoTThingsGraphResponsesSearchEntities(__scope: Construct, __resources: string[], __input: IoTThingsGraphSearchEntitiesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesSearchEntities.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesSearchEntities.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesSearchEntities.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchEntitiesRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchEntitiesRequest)

---



#### Properties <a name="Properties"></a>

##### `descriptions`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesSearchEntities.property.descriptions"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphEntityDescription`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphEntityDescription)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesSearchEntities.property.nextToken"></a>

- *Type:* `string`

---


### IoTThingsGraphResponsesSearchFlowExecutions <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesSearchFlowExecutions"></a>

#### Initializer <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesSearchFlowExecutions.Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

new iotthingsgraph.IoTThingsGraphResponsesSearchFlowExecutions(__scope: Construct, __resources: string[], __input: IoTThingsGraphSearchFlowExecutionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesSearchFlowExecutions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesSearchFlowExecutions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesSearchFlowExecutions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchFlowExecutionsRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchFlowExecutionsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesSearchFlowExecutions.property.nextToken"></a>

- *Type:* `string`

---

##### `summaries`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesSearchFlowExecutions.property.summaries"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphFlowExecutionSummary`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphFlowExecutionSummary)[]

---


### IoTThingsGraphResponsesSearchFlowTemplates <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesSearchFlowTemplates"></a>

#### Initializer <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesSearchFlowTemplates.Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

new iotthingsgraph.IoTThingsGraphResponsesSearchFlowTemplates(__scope: Construct, __resources: string[], __input: IoTThingsGraphSearchFlowTemplatesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesSearchFlowTemplates.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesSearchFlowTemplates.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesSearchFlowTemplates.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchFlowTemplatesRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchFlowTemplatesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesSearchFlowTemplates.property.nextToken"></a>

- *Type:* `string`

---

##### `summaries`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesSearchFlowTemplates.property.summaries"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphFlowTemplateSummary`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphFlowTemplateSummary)[]

---


### IoTThingsGraphResponsesSearchSystemInstances <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesSearchSystemInstances"></a>

#### Initializer <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesSearchSystemInstances.Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

new iotthingsgraph.IoTThingsGraphResponsesSearchSystemInstances(__scope: Construct, __resources: string[], __input: IoTThingsGraphSearchSystemInstancesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesSearchSystemInstances.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesSearchSystemInstances.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesSearchSystemInstances.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchSystemInstancesRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchSystemInstancesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesSearchSystemInstances.property.nextToken"></a>

- *Type:* `string`

---

##### `summaries`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesSearchSystemInstances.property.summaries"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemInstanceSummary`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemInstanceSummary)[]

---


### IoTThingsGraphResponsesSearchSystemTemplates <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesSearchSystemTemplates"></a>

#### Initializer <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesSearchSystemTemplates.Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

new iotthingsgraph.IoTThingsGraphResponsesSearchSystemTemplates(__scope: Construct, __resources: string[], __input: IoTThingsGraphSearchSystemTemplatesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesSearchSystemTemplates.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesSearchSystemTemplates.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesSearchSystemTemplates.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchSystemTemplatesRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchSystemTemplatesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesSearchSystemTemplates.property.nextToken"></a>

- *Type:* `string`

---

##### `summaries`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesSearchSystemTemplates.property.summaries"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemTemplateSummary`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSystemTemplateSummary)[]

---


### IoTThingsGraphResponsesSearchThings <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesSearchThings"></a>

#### Initializer <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesSearchThings.Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

new iotthingsgraph.IoTThingsGraphResponsesSearchThings(__scope: Construct, __resources: string[], __input: IoTThingsGraphSearchThingsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesSearchThings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesSearchThings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesSearchThings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchThingsRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphSearchThingsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesSearchThings.property.nextToken"></a>

- *Type:* `string`

---

##### `things`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesSearchThings.property.things"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphThing`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphThing)[]

---


### IoTThingsGraphResponsesUndeploySystemInstance <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesUndeploySystemInstance"></a>

#### Initializer <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesUndeploySystemInstance.Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

new iotthingsgraph.IoTThingsGraphResponsesUndeploySystemInstance(__scope: Construct, __resources: string[], __input: IoTThingsGraphUndeploySystemInstanceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesUndeploySystemInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesUndeploySystemInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesUndeploySystemInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphUndeploySystemInstanceRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphUndeploySystemInstanceRequest)

---



#### Properties <a name="Properties"></a>

##### `summary`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesUndeploySystemInstance.property.summary"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesUndeploySystemInstanceSummary`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesUndeploySystemInstanceSummary)

---


### IoTThingsGraphResponsesUndeploySystemInstanceSummary <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesUndeploySystemInstanceSummary"></a>

#### Initializer <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesUndeploySystemInstanceSummary.Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

new iotthingsgraph.IoTThingsGraphResponsesUndeploySystemInstanceSummary(__scope: Construct, __resources: string[], __input: IoTThingsGraphUndeploySystemInstanceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesUndeploySystemInstanceSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesUndeploySystemInstanceSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesUndeploySystemInstanceSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphUndeploySystemInstanceRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphUndeploySystemInstanceRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesUndeploySystemInstanceSummary.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesUndeploySystemInstanceSummary.property.createdAt"></a>

- *Type:* `string`

---

##### `greengrassGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesUndeploySystemInstanceSummary.property.greengrassGroupId"></a>

- *Type:* `string`

---

##### `greengrassGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesUndeploySystemInstanceSummary.property.greengrassGroupName"></a>

- *Type:* `string`

---

##### `greengrassGroupVersionId`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesUndeploySystemInstanceSummary.property.greengrassGroupVersionId"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesUndeploySystemInstanceSummary.property.id"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesUndeploySystemInstanceSummary.property.status"></a>

- *Type:* `string`

---

##### `target`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesUndeploySystemInstanceSummary.property.target"></a>

- *Type:* `string`

---

##### `updatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesUndeploySystemInstanceSummary.property.updatedAt"></a>

- *Type:* `string`

---


### IoTThingsGraphResponsesUpdateFlowTemplate <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesUpdateFlowTemplate"></a>

#### Initializer <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesUpdateFlowTemplate.Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

new iotthingsgraph.IoTThingsGraphResponsesUpdateFlowTemplate(__scope: Construct, __resources: string[], __input: IoTThingsGraphUpdateFlowTemplateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesUpdateFlowTemplate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesUpdateFlowTemplate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesUpdateFlowTemplate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphUpdateFlowTemplateRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphUpdateFlowTemplateRequest)

---



#### Properties <a name="Properties"></a>

##### `summary`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesUpdateFlowTemplate.property.summary"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesUpdateFlowTemplateSummary`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesUpdateFlowTemplateSummary)

---


### IoTThingsGraphResponsesUpdateFlowTemplateSummary <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesUpdateFlowTemplateSummary"></a>

#### Initializer <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesUpdateFlowTemplateSummary.Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

new iotthingsgraph.IoTThingsGraphResponsesUpdateFlowTemplateSummary(__scope: Construct, __resources: string[], __input: IoTThingsGraphUpdateFlowTemplateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesUpdateFlowTemplateSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesUpdateFlowTemplateSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesUpdateFlowTemplateSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphUpdateFlowTemplateRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphUpdateFlowTemplateRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesUpdateFlowTemplateSummary.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesUpdateFlowTemplateSummary.property.createdAt"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesUpdateFlowTemplateSummary.property.id"></a>

- *Type:* `string`

---

##### `revisionNumber`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesUpdateFlowTemplateSummary.property.revisionNumber"></a>

- *Type:* `number`

---


### IoTThingsGraphResponsesUpdateSystemTemplate <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesUpdateSystemTemplate"></a>

#### Initializer <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesUpdateSystemTemplate.Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

new iotthingsgraph.IoTThingsGraphResponsesUpdateSystemTemplate(__scope: Construct, __resources: string[], __input: IoTThingsGraphUpdateSystemTemplateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesUpdateSystemTemplate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesUpdateSystemTemplate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesUpdateSystemTemplate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphUpdateSystemTemplateRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphUpdateSystemTemplateRequest)

---



#### Properties <a name="Properties"></a>

##### `summary`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesUpdateSystemTemplate.property.summary"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesUpdateSystemTemplateSummary`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesUpdateSystemTemplateSummary)

---


### IoTThingsGraphResponsesUpdateSystemTemplateSummary <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesUpdateSystemTemplateSummary"></a>

#### Initializer <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesUpdateSystemTemplateSummary.Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

new iotthingsgraph.IoTThingsGraphResponsesUpdateSystemTemplateSummary(__scope: Construct, __resources: string[], __input: IoTThingsGraphUpdateSystemTemplateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesUpdateSystemTemplateSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesUpdateSystemTemplateSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesUpdateSystemTemplateSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphUpdateSystemTemplateRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphUpdateSystemTemplateRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesUpdateSystemTemplateSummary.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesUpdateSystemTemplateSummary.property.createdAt"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesUpdateSystemTemplateSummary.property.id"></a>

- *Type:* `string`

---

##### `revisionNumber`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesUpdateSystemTemplateSummary.property.revisionNumber"></a>

- *Type:* `number`

---


### IoTThingsGraphResponsesUploadEntityDefinitions <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesUploadEntityDefinitions"></a>

#### Initializer <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesUploadEntityDefinitions.Initializer"></a>

```typescript
import { iotthingsgraph } from 'aws-cdk-sdk'

new iotthingsgraph.IoTThingsGraphResponsesUploadEntityDefinitions(__scope: Construct, __resources: string[], __input: IoTThingsGraphUploadEntityDefinitionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesUploadEntityDefinitions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesUploadEntityDefinitions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesUploadEntityDefinitions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotthingsgraph.IoTThingsGraphUploadEntityDefinitionsRequest`](#aws-cdk-sdk.iotthingsgraph.IoTThingsGraphUploadEntityDefinitionsRequest)

---



#### Properties <a name="Properties"></a>

##### `uploadId`<sup>Required</sup> <a name="aws-cdk-sdk.iotthingsgraph.IoTThingsGraphResponsesUploadEntityDefinitions.property.uploadId"></a>

- *Type:* `string`

---



