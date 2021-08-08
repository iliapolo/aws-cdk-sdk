# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### IoT1ClickProjectsClient <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsClient"></a>

#### Initializer <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsClient.Initializer"></a>

```typescript
import { iot1clickprojects } from 'aws-cdk-sdk'

new iot1clickprojects.IoT1ClickProjectsClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `associateDeviceWithPlacement` <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsClient.associateDeviceWithPlacement"></a>

```typescript
public associateDeviceWithPlacement(input: IoT1ClickProjectsAssociateDeviceWithPlacementRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsAssociateDeviceWithPlacementRequest`](#aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsAssociateDeviceWithPlacementRequest)

---

##### `createPlacement` <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsClient.createPlacement"></a>

```typescript
public createPlacement(input: IoT1ClickProjectsCreatePlacementRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsCreatePlacementRequest`](#aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsCreatePlacementRequest)

---

##### `createProject` <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsClient.createProject"></a>

```typescript
public createProject(input: IoT1ClickProjectsCreateProjectRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsCreateProjectRequest`](#aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsCreateProjectRequest)

---

##### `deletePlacement` <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsClient.deletePlacement"></a>

```typescript
public deletePlacement(input: IoT1ClickProjectsDeletePlacementRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsDeletePlacementRequest`](#aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsDeletePlacementRequest)

---

##### `deleteProject` <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsClient.deleteProject"></a>

```typescript
public deleteProject(input: IoT1ClickProjectsDeleteProjectRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsDeleteProjectRequest`](#aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsDeleteProjectRequest)

---

##### `describePlacement` <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsClient.describePlacement"></a>

```typescript
public describePlacement(input: IoT1ClickProjectsDescribePlacementRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsDescribePlacementRequest`](#aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsDescribePlacementRequest)

---

##### `describeProject` <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsClient.describeProject"></a>

```typescript
public describeProject(input: IoT1ClickProjectsDescribeProjectRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsDescribeProjectRequest`](#aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsDescribeProjectRequest)

---

##### `disassociateDeviceFromPlacement` <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsClient.disassociateDeviceFromPlacement"></a>

```typescript
public disassociateDeviceFromPlacement(input: IoT1ClickProjectsDisassociateDeviceFromPlacementRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsDisassociateDeviceFromPlacementRequest`](#aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsDisassociateDeviceFromPlacementRequest)

---

##### `fetchDevicesInPlacement` <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsClient.fetchDevicesInPlacement"></a>

```typescript
public fetchDevicesInPlacement(input: IoT1ClickProjectsGetDevicesInPlacementRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsGetDevicesInPlacementRequest`](#aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsGetDevicesInPlacementRequest)

---

##### `listPlacements` <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsClient.listPlacements"></a>

```typescript
public listPlacements(input: IoT1ClickProjectsListPlacementsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsListPlacementsRequest`](#aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsListPlacementsRequest)

---

##### `listProjects` <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsClient.listProjects"></a>

```typescript
public listProjects(input: IoT1ClickProjectsListProjectsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsListProjectsRequest`](#aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsListProjectsRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: IoT1ClickProjectsListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsListTagsForResourceRequest`](#aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsListTagsForResourceRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsClient.tagResource"></a>

```typescript
public tagResource(input: IoT1ClickProjectsTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsTagResourceRequest`](#aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsClient.untagResource"></a>

```typescript
public untagResource(input: IoT1ClickProjectsUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsUntagResourceRequest`](#aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsUntagResourceRequest)

---

##### `updatePlacement` <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsClient.updatePlacement"></a>

```typescript
public updatePlacement(input: IoT1ClickProjectsUpdatePlacementRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsUpdatePlacementRequest`](#aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsUpdatePlacementRequest)

---

##### `updateProject` <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsClient.updateProject"></a>

```typescript
public updateProject(input: IoT1ClickProjectsUpdateProjectRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsUpdateProjectRequest`](#aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsUpdateProjectRequest)

---




## Structs <a name="Structs"></a>

### IoT1ClickProjectsAssociateDeviceWithPlacementRequest <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsAssociateDeviceWithPlacementRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot1clickprojects } from 'aws-cdk-sdk'

const ioT1ClickProjectsAssociateDeviceWithPlacementRequest: iot1clickprojects.IoT1ClickProjectsAssociateDeviceWithPlacementRequest = { ... }
```

##### `deviceId`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsAssociateDeviceWithPlacementRequest.property.deviceId"></a>

- *Type:* `string`

---

##### `deviceTemplateName`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsAssociateDeviceWithPlacementRequest.property.deviceTemplateName"></a>

- *Type:* `string`

---

##### `placementName`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsAssociateDeviceWithPlacementRequest.property.placementName"></a>

- *Type:* `string`

---

##### `projectName`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsAssociateDeviceWithPlacementRequest.property.projectName"></a>

- *Type:* `string`

---

### IoT1ClickProjectsAssociateDeviceWithPlacementResponse <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsAssociateDeviceWithPlacementResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot1clickprojects } from 'aws-cdk-sdk'

const ioT1ClickProjectsAssociateDeviceWithPlacementResponse: iot1clickprojects.IoT1ClickProjectsAssociateDeviceWithPlacementResponse = { ... }
```

### IoT1ClickProjectsCreatePlacementRequest <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsCreatePlacementRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot1clickprojects } from 'aws-cdk-sdk'

const ioT1ClickProjectsCreatePlacementRequest: iot1clickprojects.IoT1ClickProjectsCreatePlacementRequest = { ... }
```

##### `placementName`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsCreatePlacementRequest.property.placementName"></a>

- *Type:* `string`

---

##### `projectName`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsCreatePlacementRequest.property.projectName"></a>

- *Type:* `string`

---

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsCreatePlacementRequest.property.attributes"></a>

- *Type:* {[ key: string ]: `string`}

---

### IoT1ClickProjectsCreatePlacementResponse <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsCreatePlacementResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot1clickprojects } from 'aws-cdk-sdk'

const ioT1ClickProjectsCreatePlacementResponse: iot1clickprojects.IoT1ClickProjectsCreatePlacementResponse = { ... }
```

### IoT1ClickProjectsCreateProjectRequest <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsCreateProjectRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot1clickprojects } from 'aws-cdk-sdk'

const ioT1ClickProjectsCreateProjectRequest: iot1clickprojects.IoT1ClickProjectsCreateProjectRequest = { ... }
```

##### `projectName`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsCreateProjectRequest.property.projectName"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsCreateProjectRequest.property.description"></a>

- *Type:* `string`

---

##### `placementTemplate`<sup>Optional</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsCreateProjectRequest.property.placementTemplate"></a>

- *Type:* [`aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsPlacementTemplate`](#aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsPlacementTemplate)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsCreateProjectRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### IoT1ClickProjectsCreateProjectResponse <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsCreateProjectResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot1clickprojects } from 'aws-cdk-sdk'

const ioT1ClickProjectsCreateProjectResponse: iot1clickprojects.IoT1ClickProjectsCreateProjectResponse = { ... }
```

### IoT1ClickProjectsDeletePlacementRequest <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsDeletePlacementRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot1clickprojects } from 'aws-cdk-sdk'

const ioT1ClickProjectsDeletePlacementRequest: iot1clickprojects.IoT1ClickProjectsDeletePlacementRequest = { ... }
```

##### `placementName`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsDeletePlacementRequest.property.placementName"></a>

- *Type:* `string`

---

##### `projectName`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsDeletePlacementRequest.property.projectName"></a>

- *Type:* `string`

---

### IoT1ClickProjectsDeletePlacementResponse <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsDeletePlacementResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot1clickprojects } from 'aws-cdk-sdk'

const ioT1ClickProjectsDeletePlacementResponse: iot1clickprojects.IoT1ClickProjectsDeletePlacementResponse = { ... }
```

### IoT1ClickProjectsDeleteProjectRequest <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsDeleteProjectRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot1clickprojects } from 'aws-cdk-sdk'

const ioT1ClickProjectsDeleteProjectRequest: iot1clickprojects.IoT1ClickProjectsDeleteProjectRequest = { ... }
```

##### `projectName`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsDeleteProjectRequest.property.projectName"></a>

- *Type:* `string`

---

### IoT1ClickProjectsDeleteProjectResponse <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsDeleteProjectResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot1clickprojects } from 'aws-cdk-sdk'

const ioT1ClickProjectsDeleteProjectResponse: iot1clickprojects.IoT1ClickProjectsDeleteProjectResponse = { ... }
```

### IoT1ClickProjectsDescribePlacementRequest <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsDescribePlacementRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot1clickprojects } from 'aws-cdk-sdk'

const ioT1ClickProjectsDescribePlacementRequest: iot1clickprojects.IoT1ClickProjectsDescribePlacementRequest = { ... }
```

##### `placementName`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsDescribePlacementRequest.property.placementName"></a>

- *Type:* `string`

---

##### `projectName`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsDescribePlacementRequest.property.projectName"></a>

- *Type:* `string`

---

### IoT1ClickProjectsDescribePlacementResponse <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsDescribePlacementResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot1clickprojects } from 'aws-cdk-sdk'

const ioT1ClickProjectsDescribePlacementResponse: iot1clickprojects.IoT1ClickProjectsDescribePlacementResponse = { ... }
```

##### `placement`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsDescribePlacementResponse.property.placement"></a>

- *Type:* [`aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsPlacementDescription`](#aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsPlacementDescription)

---

### IoT1ClickProjectsDescribeProjectRequest <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsDescribeProjectRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot1clickprojects } from 'aws-cdk-sdk'

const ioT1ClickProjectsDescribeProjectRequest: iot1clickprojects.IoT1ClickProjectsDescribeProjectRequest = { ... }
```

##### `projectName`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsDescribeProjectRequest.property.projectName"></a>

- *Type:* `string`

---

### IoT1ClickProjectsDescribeProjectResponse <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsDescribeProjectResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot1clickprojects } from 'aws-cdk-sdk'

const ioT1ClickProjectsDescribeProjectResponse: iot1clickprojects.IoT1ClickProjectsDescribeProjectResponse = { ... }
```

##### `project`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsDescribeProjectResponse.property.project"></a>

- *Type:* [`aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsProjectDescription`](#aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsProjectDescription)

---

### IoT1ClickProjectsDeviceTemplate <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsDeviceTemplate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot1clickprojects } from 'aws-cdk-sdk'

const ioT1ClickProjectsDeviceTemplate: iot1clickprojects.IoT1ClickProjectsDeviceTemplate = { ... }
```

##### `callbackOverrides`<sup>Optional</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsDeviceTemplate.property.callbackOverrides"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `deviceType`<sup>Optional</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsDeviceTemplate.property.deviceType"></a>

- *Type:* `string`

---

### IoT1ClickProjectsDisassociateDeviceFromPlacementRequest <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsDisassociateDeviceFromPlacementRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot1clickprojects } from 'aws-cdk-sdk'

const ioT1ClickProjectsDisassociateDeviceFromPlacementRequest: iot1clickprojects.IoT1ClickProjectsDisassociateDeviceFromPlacementRequest = { ... }
```

##### `deviceTemplateName`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsDisassociateDeviceFromPlacementRequest.property.deviceTemplateName"></a>

- *Type:* `string`

---

##### `placementName`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsDisassociateDeviceFromPlacementRequest.property.placementName"></a>

- *Type:* `string`

---

##### `projectName`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsDisassociateDeviceFromPlacementRequest.property.projectName"></a>

- *Type:* `string`

---

### IoT1ClickProjectsDisassociateDeviceFromPlacementResponse <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsDisassociateDeviceFromPlacementResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot1clickprojects } from 'aws-cdk-sdk'

const ioT1ClickProjectsDisassociateDeviceFromPlacementResponse: iot1clickprojects.IoT1ClickProjectsDisassociateDeviceFromPlacementResponse = { ... }
```

### IoT1ClickProjectsGetDevicesInPlacementRequest <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsGetDevicesInPlacementRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot1clickprojects } from 'aws-cdk-sdk'

const ioT1ClickProjectsGetDevicesInPlacementRequest: iot1clickprojects.IoT1ClickProjectsGetDevicesInPlacementRequest = { ... }
```

##### `placementName`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsGetDevicesInPlacementRequest.property.placementName"></a>

- *Type:* `string`

---

##### `projectName`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsGetDevicesInPlacementRequest.property.projectName"></a>

- *Type:* `string`

---

### IoT1ClickProjectsGetDevicesInPlacementResponse <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsGetDevicesInPlacementResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot1clickprojects } from 'aws-cdk-sdk'

const ioT1ClickProjectsGetDevicesInPlacementResponse: iot1clickprojects.IoT1ClickProjectsGetDevicesInPlacementResponse = { ... }
```

##### `devices`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsGetDevicesInPlacementResponse.property.devices"></a>

- *Type:* {[ key: string ]: `string`}

---

### IoT1ClickProjectsListPlacementsRequest <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsListPlacementsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot1clickprojects } from 'aws-cdk-sdk'

const ioT1ClickProjectsListPlacementsRequest: iot1clickprojects.IoT1ClickProjectsListPlacementsRequest = { ... }
```

##### `projectName`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsListPlacementsRequest.property.projectName"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsListPlacementsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsListPlacementsRequest.property.nextToken"></a>

- *Type:* `string`

---

### IoT1ClickProjectsListPlacementsResponse <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsListPlacementsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot1clickprojects } from 'aws-cdk-sdk'

const ioT1ClickProjectsListPlacementsResponse: iot1clickprojects.IoT1ClickProjectsListPlacementsResponse = { ... }
```

##### `placements`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsListPlacementsResponse.property.placements"></a>

- *Type:* [`aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsPlacementSummary`](#aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsPlacementSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsListPlacementsResponse.property.nextToken"></a>

- *Type:* `string`

---

### IoT1ClickProjectsListProjectsRequest <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsListProjectsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot1clickprojects } from 'aws-cdk-sdk'

const ioT1ClickProjectsListProjectsRequest: iot1clickprojects.IoT1ClickProjectsListProjectsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsListProjectsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsListProjectsRequest.property.nextToken"></a>

- *Type:* `string`

---

### IoT1ClickProjectsListProjectsResponse <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsListProjectsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot1clickprojects } from 'aws-cdk-sdk'

const ioT1ClickProjectsListProjectsResponse: iot1clickprojects.IoT1ClickProjectsListProjectsResponse = { ... }
```

##### `projects`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsListProjectsResponse.property.projects"></a>

- *Type:* [`aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsProjectSummary`](#aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsProjectSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsListProjectsResponse.property.nextToken"></a>

- *Type:* `string`

---

### IoT1ClickProjectsListTagsForResourceRequest <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot1clickprojects } from 'aws-cdk-sdk'

const ioT1ClickProjectsListTagsForResourceRequest: iot1clickprojects.IoT1ClickProjectsListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### IoT1ClickProjectsListTagsForResourceResponse <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot1clickprojects } from 'aws-cdk-sdk'

const ioT1ClickProjectsListTagsForResourceResponse: iot1clickprojects.IoT1ClickProjectsListTagsForResourceResponse = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsListTagsForResourceResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### IoT1ClickProjectsPlacementDescription <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsPlacementDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot1clickprojects } from 'aws-cdk-sdk'

const ioT1ClickProjectsPlacementDescription: iot1clickprojects.IoT1ClickProjectsPlacementDescription = { ... }
```

##### `attributes`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsPlacementDescription.property.attributes"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `createdDate`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsPlacementDescription.property.createdDate"></a>

- *Type:* `string`

---

##### `placementName`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsPlacementDescription.property.placementName"></a>

- *Type:* `string`

---

##### `projectName`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsPlacementDescription.property.projectName"></a>

- *Type:* `string`

---

##### `updatedDate`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsPlacementDescription.property.updatedDate"></a>

- *Type:* `string`

---

### IoT1ClickProjectsPlacementSummary <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsPlacementSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot1clickprojects } from 'aws-cdk-sdk'

const ioT1ClickProjectsPlacementSummary: iot1clickprojects.IoT1ClickProjectsPlacementSummary = { ... }
```

##### `createdDate`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsPlacementSummary.property.createdDate"></a>

- *Type:* `string`

---

##### `placementName`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsPlacementSummary.property.placementName"></a>

- *Type:* `string`

---

##### `projectName`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsPlacementSummary.property.projectName"></a>

- *Type:* `string`

---

##### `updatedDate`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsPlacementSummary.property.updatedDate"></a>

- *Type:* `string`

---

### IoT1ClickProjectsPlacementTemplate <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsPlacementTemplate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot1clickprojects } from 'aws-cdk-sdk'

const ioT1ClickProjectsPlacementTemplate: iot1clickprojects.IoT1ClickProjectsPlacementTemplate = { ... }
```

##### `defaultAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsPlacementTemplate.property.defaultAttributes"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `deviceTemplates`<sup>Optional</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsPlacementTemplate.property.deviceTemplates"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsDeviceTemplate`](#aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsDeviceTemplate)}

---

### IoT1ClickProjectsProjectDescription <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsProjectDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot1clickprojects } from 'aws-cdk-sdk'

const ioT1ClickProjectsProjectDescription: iot1clickprojects.IoT1ClickProjectsProjectDescription = { ... }
```

##### `createdDate`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsProjectDescription.property.createdDate"></a>

- *Type:* `string`

---

##### `projectName`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsProjectDescription.property.projectName"></a>

- *Type:* `string`

---

##### `updatedDate`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsProjectDescription.property.updatedDate"></a>

- *Type:* `string`

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsProjectDescription.property.arn"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsProjectDescription.property.description"></a>

- *Type:* `string`

---

##### `placementTemplate`<sup>Optional</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsProjectDescription.property.placementTemplate"></a>

- *Type:* [`aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsPlacementTemplate`](#aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsPlacementTemplate)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsProjectDescription.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### IoT1ClickProjectsProjectSummary <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsProjectSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot1clickprojects } from 'aws-cdk-sdk'

const ioT1ClickProjectsProjectSummary: iot1clickprojects.IoT1ClickProjectsProjectSummary = { ... }
```

##### `createdDate`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsProjectSummary.property.createdDate"></a>

- *Type:* `string`

---

##### `projectName`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsProjectSummary.property.projectName"></a>

- *Type:* `string`

---

##### `updatedDate`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsProjectSummary.property.updatedDate"></a>

- *Type:* `string`

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsProjectSummary.property.arn"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsProjectSummary.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### IoT1ClickProjectsTagResourceRequest <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot1clickprojects } from 'aws-cdk-sdk'

const ioT1ClickProjectsTagResourceRequest: iot1clickprojects.IoT1ClickProjectsTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsTagResourceRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### IoT1ClickProjectsTagResourceResponse <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsTagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot1clickprojects } from 'aws-cdk-sdk'

const ioT1ClickProjectsTagResourceResponse: iot1clickprojects.IoT1ClickProjectsTagResourceResponse = { ... }
```

### IoT1ClickProjectsUntagResourceRequest <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot1clickprojects } from 'aws-cdk-sdk'

const ioT1ClickProjectsUntagResourceRequest: iot1clickprojects.IoT1ClickProjectsUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### IoT1ClickProjectsUntagResourceResponse <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsUntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot1clickprojects } from 'aws-cdk-sdk'

const ioT1ClickProjectsUntagResourceResponse: iot1clickprojects.IoT1ClickProjectsUntagResourceResponse = { ... }
```

### IoT1ClickProjectsUpdatePlacementRequest <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsUpdatePlacementRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot1clickprojects } from 'aws-cdk-sdk'

const ioT1ClickProjectsUpdatePlacementRequest: iot1clickprojects.IoT1ClickProjectsUpdatePlacementRequest = { ... }
```

##### `placementName`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsUpdatePlacementRequest.property.placementName"></a>

- *Type:* `string`

---

##### `projectName`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsUpdatePlacementRequest.property.projectName"></a>

- *Type:* `string`

---

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsUpdatePlacementRequest.property.attributes"></a>

- *Type:* {[ key: string ]: `string`}

---

### IoT1ClickProjectsUpdatePlacementResponse <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsUpdatePlacementResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot1clickprojects } from 'aws-cdk-sdk'

const ioT1ClickProjectsUpdatePlacementResponse: iot1clickprojects.IoT1ClickProjectsUpdatePlacementResponse = { ... }
```

### IoT1ClickProjectsUpdateProjectRequest <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsUpdateProjectRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot1clickprojects } from 'aws-cdk-sdk'

const ioT1ClickProjectsUpdateProjectRequest: iot1clickprojects.IoT1ClickProjectsUpdateProjectRequest = { ... }
```

##### `projectName`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsUpdateProjectRequest.property.projectName"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsUpdateProjectRequest.property.description"></a>

- *Type:* `string`

---

##### `placementTemplate`<sup>Optional</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsUpdateProjectRequest.property.placementTemplate"></a>

- *Type:* [`aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsPlacementTemplate`](#aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsPlacementTemplate)

---

### IoT1ClickProjectsUpdateProjectResponse <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsUpdateProjectResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iot1clickprojects } from 'aws-cdk-sdk'

const ioT1ClickProjectsUpdateProjectResponse: iot1clickprojects.IoT1ClickProjectsUpdateProjectResponse = { ... }
```

## Classes <a name="Classes"></a>

### IoT1ClickProjectsResponsesDescribePlacement <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesDescribePlacement"></a>

#### Initializer <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesDescribePlacement.Initializer"></a>

```typescript
import { iot1clickprojects } from 'aws-cdk-sdk'

new iot1clickprojects.IoT1ClickProjectsResponsesDescribePlacement(__scope: Construct, __resources: string[], __input: IoT1ClickProjectsDescribePlacementRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesDescribePlacement.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesDescribePlacement.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesDescribePlacement.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsDescribePlacementRequest`](#aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsDescribePlacementRequest)

---



#### Properties <a name="Properties"></a>

##### `placement`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesDescribePlacement.property.placement"></a>

- *Type:* [`aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesDescribePlacementPlacement`](#aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesDescribePlacementPlacement)

---


### IoT1ClickProjectsResponsesDescribePlacementPlacement <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesDescribePlacementPlacement"></a>

#### Initializer <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesDescribePlacementPlacement.Initializer"></a>

```typescript
import { iot1clickprojects } from 'aws-cdk-sdk'

new iot1clickprojects.IoT1ClickProjectsResponsesDescribePlacementPlacement(__scope: Construct, __resources: string[], __input: IoT1ClickProjectsDescribePlacementRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesDescribePlacementPlacement.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesDescribePlacementPlacement.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesDescribePlacementPlacement.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsDescribePlacementRequest`](#aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsDescribePlacementRequest)

---



#### Properties <a name="Properties"></a>

##### `attributes`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesDescribePlacementPlacement.property.attributes"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `createdDate`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesDescribePlacementPlacement.property.createdDate"></a>

- *Type:* `string`

---

##### `placementName`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesDescribePlacementPlacement.property.placementName"></a>

- *Type:* `string`

---

##### `projectName`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesDescribePlacementPlacement.property.projectName"></a>

- *Type:* `string`

---

##### `updatedDate`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesDescribePlacementPlacement.property.updatedDate"></a>

- *Type:* `string`

---


### IoT1ClickProjectsResponsesDescribeProject <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesDescribeProject"></a>

#### Initializer <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesDescribeProject.Initializer"></a>

```typescript
import { iot1clickprojects } from 'aws-cdk-sdk'

new iot1clickprojects.IoT1ClickProjectsResponsesDescribeProject(__scope: Construct, __resources: string[], __input: IoT1ClickProjectsDescribeProjectRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesDescribeProject.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesDescribeProject.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesDescribeProject.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsDescribeProjectRequest`](#aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsDescribeProjectRequest)

---



#### Properties <a name="Properties"></a>

##### `project`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesDescribeProject.property.project"></a>

- *Type:* [`aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesDescribeProjectProject`](#aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesDescribeProjectProject)

---


### IoT1ClickProjectsResponsesDescribeProjectProject <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesDescribeProjectProject"></a>

#### Initializer <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesDescribeProjectProject.Initializer"></a>

```typescript
import { iot1clickprojects } from 'aws-cdk-sdk'

new iot1clickprojects.IoT1ClickProjectsResponsesDescribeProjectProject(__scope: Construct, __resources: string[], __input: IoT1ClickProjectsDescribeProjectRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesDescribeProjectProject.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesDescribeProjectProject.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesDescribeProjectProject.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsDescribeProjectRequest`](#aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsDescribeProjectRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesDescribeProjectProject.property.arn"></a>

- *Type:* `string`

---

##### `createdDate`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesDescribeProjectProject.property.createdDate"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesDescribeProjectProject.property.description"></a>

- *Type:* `string`

---

##### `placementTemplate`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesDescribeProjectProject.property.placementTemplate"></a>

- *Type:* [`aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesDescribeProjectProjectPlacementTemplate`](#aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesDescribeProjectProjectPlacementTemplate)

---

##### `projectName`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesDescribeProjectProject.property.projectName"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesDescribeProjectProject.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `updatedDate`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesDescribeProjectProject.property.updatedDate"></a>

- *Type:* `string`

---


### IoT1ClickProjectsResponsesDescribeProjectProjectPlacementTemplate <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesDescribeProjectProjectPlacementTemplate"></a>

#### Initializer <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesDescribeProjectProjectPlacementTemplate.Initializer"></a>

```typescript
import { iot1clickprojects } from 'aws-cdk-sdk'

new iot1clickprojects.IoT1ClickProjectsResponsesDescribeProjectProjectPlacementTemplate(__scope: Construct, __resources: string[], __input: IoT1ClickProjectsDescribeProjectRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesDescribeProjectProjectPlacementTemplate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesDescribeProjectProjectPlacementTemplate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesDescribeProjectProjectPlacementTemplate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsDescribeProjectRequest`](#aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsDescribeProjectRequest)

---



#### Properties <a name="Properties"></a>

##### `defaultAttributes`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesDescribeProjectProjectPlacementTemplate.property.defaultAttributes"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `deviceTemplates`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesDescribeProjectProjectPlacementTemplate.property.deviceTemplates"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsDeviceTemplate`](#aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsDeviceTemplate)}

---


### IoT1ClickProjectsResponsesFetchDevicesInPlacement <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesFetchDevicesInPlacement"></a>

#### Initializer <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesFetchDevicesInPlacement.Initializer"></a>

```typescript
import { iot1clickprojects } from 'aws-cdk-sdk'

new iot1clickprojects.IoT1ClickProjectsResponsesFetchDevicesInPlacement(__scope: Construct, __resources: string[], __input: IoT1ClickProjectsGetDevicesInPlacementRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesFetchDevicesInPlacement.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesFetchDevicesInPlacement.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesFetchDevicesInPlacement.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsGetDevicesInPlacementRequest`](#aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsGetDevicesInPlacementRequest)

---



#### Properties <a name="Properties"></a>

##### `devices`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesFetchDevicesInPlacement.property.devices"></a>

- *Type:* {[ key: string ]: `string`}

---


### IoT1ClickProjectsResponsesListPlacements <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesListPlacements"></a>

#### Initializer <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesListPlacements.Initializer"></a>

```typescript
import { iot1clickprojects } from 'aws-cdk-sdk'

new iot1clickprojects.IoT1ClickProjectsResponsesListPlacements(__scope: Construct, __resources: string[], __input: IoT1ClickProjectsListPlacementsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesListPlacements.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesListPlacements.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesListPlacements.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsListPlacementsRequest`](#aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsListPlacementsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesListPlacements.property.nextToken"></a>

- *Type:* `string`

---

##### `placements`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesListPlacements.property.placements"></a>

- *Type:* [`aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsPlacementSummary`](#aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsPlacementSummary)[]

---


### IoT1ClickProjectsResponsesListProjects <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesListProjects"></a>

#### Initializer <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesListProjects.Initializer"></a>

```typescript
import { iot1clickprojects } from 'aws-cdk-sdk'

new iot1clickprojects.IoT1ClickProjectsResponsesListProjects(__scope: Construct, __resources: string[], __input: IoT1ClickProjectsListProjectsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesListProjects.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesListProjects.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesListProjects.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsListProjectsRequest`](#aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsListProjectsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesListProjects.property.nextToken"></a>

- *Type:* `string`

---

##### `projects`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesListProjects.property.projects"></a>

- *Type:* [`aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsProjectSummary`](#aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsProjectSummary)[]

---


### IoT1ClickProjectsResponsesListTagsForResource <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesListTagsForResource.Initializer"></a>

```typescript
import { iot1clickprojects } from 'aws-cdk-sdk'

new iot1clickprojects.IoT1ClickProjectsResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: IoT1ClickProjectsListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsListTagsForResourceRequest`](#aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.iot1clickprojects.IoT1ClickProjectsResponsesListTagsForResource.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---



