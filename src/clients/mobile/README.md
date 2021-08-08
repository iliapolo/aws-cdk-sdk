# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### MobileClient <a name="aws-cdk-sdk.mobile.MobileClient"></a>

#### Initializer <a name="aws-cdk-sdk.mobile.MobileClient.Initializer"></a>

```typescript
import { mobile } from 'aws-cdk-sdk'

new mobile.MobileClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `createProject` <a name="aws-cdk-sdk.mobile.MobileClient.createProject"></a>

```typescript
public createProject(input: MobileCreateProjectRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mobile.MobileCreateProjectRequest`](#aws-cdk-sdk.mobile.MobileCreateProjectRequest)

---

##### `deleteProject` <a name="aws-cdk-sdk.mobile.MobileClient.deleteProject"></a>

```typescript
public deleteProject(input: MobileDeleteProjectRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mobile.MobileDeleteProjectRequest`](#aws-cdk-sdk.mobile.MobileDeleteProjectRequest)

---

##### `describeBundle` <a name="aws-cdk-sdk.mobile.MobileClient.describeBundle"></a>

```typescript
public describeBundle(input: MobileDescribeBundleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mobile.MobileDescribeBundleRequest`](#aws-cdk-sdk.mobile.MobileDescribeBundleRequest)

---

##### `describeProject` <a name="aws-cdk-sdk.mobile.MobileClient.describeProject"></a>

```typescript
public describeProject(input: MobileDescribeProjectRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mobile.MobileDescribeProjectRequest`](#aws-cdk-sdk.mobile.MobileDescribeProjectRequest)

---

##### `exportBundle` <a name="aws-cdk-sdk.mobile.MobileClient.exportBundle"></a>

```typescript
public exportBundle(input: MobileExportBundleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mobile.MobileExportBundleRequest`](#aws-cdk-sdk.mobile.MobileExportBundleRequest)

---

##### `exportProject` <a name="aws-cdk-sdk.mobile.MobileClient.exportProject"></a>

```typescript
public exportProject(input: MobileExportProjectRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mobile.MobileExportProjectRequest`](#aws-cdk-sdk.mobile.MobileExportProjectRequest)

---

##### `listBundles` <a name="aws-cdk-sdk.mobile.MobileClient.listBundles"></a>

```typescript
public listBundles(input: MobileListBundlesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mobile.MobileListBundlesRequest`](#aws-cdk-sdk.mobile.MobileListBundlesRequest)

---

##### `listProjects` <a name="aws-cdk-sdk.mobile.MobileClient.listProjects"></a>

```typescript
public listProjects(input: MobileListProjectsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mobile.MobileListProjectsRequest`](#aws-cdk-sdk.mobile.MobileListProjectsRequest)

---

##### `updateProject` <a name="aws-cdk-sdk.mobile.MobileClient.updateProject"></a>

```typescript
public updateProject(input: MobileUpdateProjectRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mobile.MobileUpdateProjectRequest`](#aws-cdk-sdk.mobile.MobileUpdateProjectRequest)

---




## Structs <a name="Structs"></a>

### MobileBundleDetails <a name="aws-cdk-sdk.mobile.MobileBundleDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mobile } from 'aws-cdk-sdk'

const mobileBundleDetails: mobile.MobileBundleDetails = { ... }
```

##### `availablePlatforms`<sup>Optional</sup> <a name="aws-cdk-sdk.mobile.MobileBundleDetails.property.availablePlatforms"></a>

- *Type:* `string`[]

---

##### `bundleId`<sup>Optional</sup> <a name="aws-cdk-sdk.mobile.MobileBundleDetails.property.bundleId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.mobile.MobileBundleDetails.property.description"></a>

- *Type:* `string`

---

##### `iconUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.mobile.MobileBundleDetails.property.iconUrl"></a>

- *Type:* `string`

---

##### `title`<sup>Optional</sup> <a name="aws-cdk-sdk.mobile.MobileBundleDetails.property.title"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.mobile.MobileBundleDetails.property.version"></a>

- *Type:* `string`

---

### MobileCreateProjectRequest <a name="aws-cdk-sdk.mobile.MobileCreateProjectRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mobile } from 'aws-cdk-sdk'

const mobileCreateProjectRequest: mobile.MobileCreateProjectRequest = { ... }
```

##### `contents`<sup>Optional</sup> <a name="aws-cdk-sdk.mobile.MobileCreateProjectRequest.property.contents"></a>

- *Type:* `any`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.mobile.MobileCreateProjectRequest.property.name"></a>

- *Type:* `string`

---

##### `region`<sup>Optional</sup> <a name="aws-cdk-sdk.mobile.MobileCreateProjectRequest.property.region"></a>

- *Type:* `string`

---

##### `snapshotId`<sup>Optional</sup> <a name="aws-cdk-sdk.mobile.MobileCreateProjectRequest.property.snapshotId"></a>

- *Type:* `string`

---

### MobileCreateProjectResult <a name="aws-cdk-sdk.mobile.MobileCreateProjectResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mobile } from 'aws-cdk-sdk'

const mobileCreateProjectResult: mobile.MobileCreateProjectResult = { ... }
```

##### `details`<sup>Optional</sup> <a name="aws-cdk-sdk.mobile.MobileCreateProjectResult.property.details"></a>

- *Type:* [`aws-cdk-sdk.mobile.MobileProjectDetails`](#aws-cdk-sdk.mobile.MobileProjectDetails)

---

### MobileDeleteProjectRequest <a name="aws-cdk-sdk.mobile.MobileDeleteProjectRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mobile } from 'aws-cdk-sdk'

const mobileDeleteProjectRequest: mobile.MobileDeleteProjectRequest = { ... }
```

##### `projectId`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileDeleteProjectRequest.property.projectId"></a>

- *Type:* `string`

---

### MobileDeleteProjectResult <a name="aws-cdk-sdk.mobile.MobileDeleteProjectResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mobile } from 'aws-cdk-sdk'

const mobileDeleteProjectResult: mobile.MobileDeleteProjectResult = { ... }
```

##### `deletedResources`<sup>Optional</sup> <a name="aws-cdk-sdk.mobile.MobileDeleteProjectResult.property.deletedResources"></a>

- *Type:* [`aws-cdk-sdk.mobile.MobileResource`](#aws-cdk-sdk.mobile.MobileResource)[]

---

##### `orphanedResources`<sup>Optional</sup> <a name="aws-cdk-sdk.mobile.MobileDeleteProjectResult.property.orphanedResources"></a>

- *Type:* [`aws-cdk-sdk.mobile.MobileResource`](#aws-cdk-sdk.mobile.MobileResource)[]

---

### MobileDescribeBundleRequest <a name="aws-cdk-sdk.mobile.MobileDescribeBundleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mobile } from 'aws-cdk-sdk'

const mobileDescribeBundleRequest: mobile.MobileDescribeBundleRequest = { ... }
```

##### `bundleId`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileDescribeBundleRequest.property.bundleId"></a>

- *Type:* `string`

---

### MobileDescribeBundleResult <a name="aws-cdk-sdk.mobile.MobileDescribeBundleResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mobile } from 'aws-cdk-sdk'

const mobileDescribeBundleResult: mobile.MobileDescribeBundleResult = { ... }
```

##### `details`<sup>Optional</sup> <a name="aws-cdk-sdk.mobile.MobileDescribeBundleResult.property.details"></a>

- *Type:* [`aws-cdk-sdk.mobile.MobileBundleDetails`](#aws-cdk-sdk.mobile.MobileBundleDetails)

---

### MobileDescribeProjectRequest <a name="aws-cdk-sdk.mobile.MobileDescribeProjectRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mobile } from 'aws-cdk-sdk'

const mobileDescribeProjectRequest: mobile.MobileDescribeProjectRequest = { ... }
```

##### `projectId`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileDescribeProjectRequest.property.projectId"></a>

- *Type:* `string`

---

##### `syncFromResources`<sup>Optional</sup> <a name="aws-cdk-sdk.mobile.MobileDescribeProjectRequest.property.syncFromResources"></a>

- *Type:* `boolean`

---

### MobileDescribeProjectResult <a name="aws-cdk-sdk.mobile.MobileDescribeProjectResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mobile } from 'aws-cdk-sdk'

const mobileDescribeProjectResult: mobile.MobileDescribeProjectResult = { ... }
```

##### `details`<sup>Optional</sup> <a name="aws-cdk-sdk.mobile.MobileDescribeProjectResult.property.details"></a>

- *Type:* [`aws-cdk-sdk.mobile.MobileProjectDetails`](#aws-cdk-sdk.mobile.MobileProjectDetails)

---

### MobileExportBundleRequest <a name="aws-cdk-sdk.mobile.MobileExportBundleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mobile } from 'aws-cdk-sdk'

const mobileExportBundleRequest: mobile.MobileExportBundleRequest = { ... }
```

##### `bundleId`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileExportBundleRequest.property.bundleId"></a>

- *Type:* `string`

---

##### `platform`<sup>Optional</sup> <a name="aws-cdk-sdk.mobile.MobileExportBundleRequest.property.platform"></a>

- *Type:* `string`

---

##### `projectId`<sup>Optional</sup> <a name="aws-cdk-sdk.mobile.MobileExportBundleRequest.property.projectId"></a>

- *Type:* `string`

---

### MobileExportBundleResult <a name="aws-cdk-sdk.mobile.MobileExportBundleResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mobile } from 'aws-cdk-sdk'

const mobileExportBundleResult: mobile.MobileExportBundleResult = { ... }
```

##### `downloadUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.mobile.MobileExportBundleResult.property.downloadUrl"></a>

- *Type:* `string`

---

### MobileExportProjectRequest <a name="aws-cdk-sdk.mobile.MobileExportProjectRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mobile } from 'aws-cdk-sdk'

const mobileExportProjectRequest: mobile.MobileExportProjectRequest = { ... }
```

##### `projectId`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileExportProjectRequest.property.projectId"></a>

- *Type:* `string`

---

### MobileExportProjectResult <a name="aws-cdk-sdk.mobile.MobileExportProjectResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mobile } from 'aws-cdk-sdk'

const mobileExportProjectResult: mobile.MobileExportProjectResult = { ... }
```

##### `downloadUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.mobile.MobileExportProjectResult.property.downloadUrl"></a>

- *Type:* `string`

---

##### `shareUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.mobile.MobileExportProjectResult.property.shareUrl"></a>

- *Type:* `string`

---

##### `snapshotId`<sup>Optional</sup> <a name="aws-cdk-sdk.mobile.MobileExportProjectResult.property.snapshotId"></a>

- *Type:* `string`

---

### MobileListBundlesRequest <a name="aws-cdk-sdk.mobile.MobileListBundlesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mobile } from 'aws-cdk-sdk'

const mobileListBundlesRequest: mobile.MobileListBundlesRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.mobile.MobileListBundlesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.mobile.MobileListBundlesRequest.property.nextToken"></a>

- *Type:* `string`

---

### MobileListBundlesResult <a name="aws-cdk-sdk.mobile.MobileListBundlesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mobile } from 'aws-cdk-sdk'

const mobileListBundlesResult: mobile.MobileListBundlesResult = { ... }
```

##### `bundleList`<sup>Optional</sup> <a name="aws-cdk-sdk.mobile.MobileListBundlesResult.property.bundleList"></a>

- *Type:* [`aws-cdk-sdk.mobile.MobileBundleDetails`](#aws-cdk-sdk.mobile.MobileBundleDetails)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.mobile.MobileListBundlesResult.property.nextToken"></a>

- *Type:* `string`

---

### MobileListProjectsRequest <a name="aws-cdk-sdk.mobile.MobileListProjectsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mobile } from 'aws-cdk-sdk'

const mobileListProjectsRequest: mobile.MobileListProjectsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.mobile.MobileListProjectsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.mobile.MobileListProjectsRequest.property.nextToken"></a>

- *Type:* `string`

---

### MobileListProjectsResult <a name="aws-cdk-sdk.mobile.MobileListProjectsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mobile } from 'aws-cdk-sdk'

const mobileListProjectsResult: mobile.MobileListProjectsResult = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.mobile.MobileListProjectsResult.property.nextToken"></a>

- *Type:* `string`

---

##### `projects`<sup>Optional</sup> <a name="aws-cdk-sdk.mobile.MobileListProjectsResult.property.projects"></a>

- *Type:* [`aws-cdk-sdk.mobile.MobileProjectSummary`](#aws-cdk-sdk.mobile.MobileProjectSummary)[]

---

### MobileProjectDetails <a name="aws-cdk-sdk.mobile.MobileProjectDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mobile } from 'aws-cdk-sdk'

const mobileProjectDetails: mobile.MobileProjectDetails = { ... }
```

##### `consoleUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.mobile.MobileProjectDetails.property.consoleUrl"></a>

- *Type:* `string`

---

##### `createdDate`<sup>Optional</sup> <a name="aws-cdk-sdk.mobile.MobileProjectDetails.property.createdDate"></a>

- *Type:* `string`

---

##### `lastUpdatedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.mobile.MobileProjectDetails.property.lastUpdatedDate"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.mobile.MobileProjectDetails.property.name"></a>

- *Type:* `string`

---

##### `projectId`<sup>Optional</sup> <a name="aws-cdk-sdk.mobile.MobileProjectDetails.property.projectId"></a>

- *Type:* `string`

---

##### `region`<sup>Optional</sup> <a name="aws-cdk-sdk.mobile.MobileProjectDetails.property.region"></a>

- *Type:* `string`

---

##### `resources`<sup>Optional</sup> <a name="aws-cdk-sdk.mobile.MobileProjectDetails.property.resources"></a>

- *Type:* [`aws-cdk-sdk.mobile.MobileResource`](#aws-cdk-sdk.mobile.MobileResource)[]

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.mobile.MobileProjectDetails.property.state"></a>

- *Type:* `string`

---

### MobileProjectSummary <a name="aws-cdk-sdk.mobile.MobileProjectSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mobile } from 'aws-cdk-sdk'

const mobileProjectSummary: mobile.MobileProjectSummary = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.mobile.MobileProjectSummary.property.name"></a>

- *Type:* `string`

---

##### `projectId`<sup>Optional</sup> <a name="aws-cdk-sdk.mobile.MobileProjectSummary.property.projectId"></a>

- *Type:* `string`

---

### MobileResource <a name="aws-cdk-sdk.mobile.MobileResource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mobile } from 'aws-cdk-sdk'

const mobileResource: mobile.MobileResource = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.mobile.MobileResource.property.arn"></a>

- *Type:* `string`

---

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.mobile.MobileResource.property.attributes"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `feature`<sup>Optional</sup> <a name="aws-cdk-sdk.mobile.MobileResource.property.feature"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.mobile.MobileResource.property.name"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.mobile.MobileResource.property.type"></a>

- *Type:* `string`

---

### MobileUpdateProjectRequest <a name="aws-cdk-sdk.mobile.MobileUpdateProjectRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mobile } from 'aws-cdk-sdk'

const mobileUpdateProjectRequest: mobile.MobileUpdateProjectRequest = { ... }
```

##### `projectId`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileUpdateProjectRequest.property.projectId"></a>

- *Type:* `string`

---

##### `contents`<sup>Optional</sup> <a name="aws-cdk-sdk.mobile.MobileUpdateProjectRequest.property.contents"></a>

- *Type:* `any`

---

### MobileUpdateProjectResult <a name="aws-cdk-sdk.mobile.MobileUpdateProjectResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mobile } from 'aws-cdk-sdk'

const mobileUpdateProjectResult: mobile.MobileUpdateProjectResult = { ... }
```

##### `details`<sup>Optional</sup> <a name="aws-cdk-sdk.mobile.MobileUpdateProjectResult.property.details"></a>

- *Type:* [`aws-cdk-sdk.mobile.MobileProjectDetails`](#aws-cdk-sdk.mobile.MobileProjectDetails)

---

## Classes <a name="Classes"></a>

### MobileResponsesCreateProject <a name="aws-cdk-sdk.mobile.MobileResponsesCreateProject"></a>

#### Initializer <a name="aws-cdk-sdk.mobile.MobileResponsesCreateProject.Initializer"></a>

```typescript
import { mobile } from 'aws-cdk-sdk'

new mobile.MobileResponsesCreateProject(__scope: Construct, __resources: string[], __input: MobileCreateProjectRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesCreateProject.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesCreateProject.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesCreateProject.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mobile.MobileCreateProjectRequest`](#aws-cdk-sdk.mobile.MobileCreateProjectRequest)

---



#### Properties <a name="Properties"></a>

##### `details`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesCreateProject.property.details"></a>

- *Type:* [`aws-cdk-sdk.mobile.MobileResponsesCreateProjectDetails`](#aws-cdk-sdk.mobile.MobileResponsesCreateProjectDetails)

---


### MobileResponsesCreateProjectDetails <a name="aws-cdk-sdk.mobile.MobileResponsesCreateProjectDetails"></a>

#### Initializer <a name="aws-cdk-sdk.mobile.MobileResponsesCreateProjectDetails.Initializer"></a>

```typescript
import { mobile } from 'aws-cdk-sdk'

new mobile.MobileResponsesCreateProjectDetails(__scope: Construct, __resources: string[], __input: MobileCreateProjectRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesCreateProjectDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesCreateProjectDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesCreateProjectDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mobile.MobileCreateProjectRequest`](#aws-cdk-sdk.mobile.MobileCreateProjectRequest)

---



#### Properties <a name="Properties"></a>

##### `consoleUrl`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesCreateProjectDetails.property.consoleUrl"></a>

- *Type:* `string`

---

##### `createdDate`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesCreateProjectDetails.property.createdDate"></a>

- *Type:* `string`

---

##### `lastUpdatedDate`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesCreateProjectDetails.property.lastUpdatedDate"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesCreateProjectDetails.property.name"></a>

- *Type:* `string`

---

##### `projectId`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesCreateProjectDetails.property.projectId"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesCreateProjectDetails.property.region"></a>

- *Type:* `string`

---

##### `resources`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesCreateProjectDetails.property.resources"></a>

- *Type:* [`aws-cdk-sdk.mobile.MobileResource`](#aws-cdk-sdk.mobile.MobileResource)[]

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesCreateProjectDetails.property.state"></a>

- *Type:* `string`

---


### MobileResponsesDeleteProject <a name="aws-cdk-sdk.mobile.MobileResponsesDeleteProject"></a>

#### Initializer <a name="aws-cdk-sdk.mobile.MobileResponsesDeleteProject.Initializer"></a>

```typescript
import { mobile } from 'aws-cdk-sdk'

new mobile.MobileResponsesDeleteProject(__scope: Construct, __resources: string[], __input: MobileDeleteProjectRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesDeleteProject.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesDeleteProject.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesDeleteProject.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mobile.MobileDeleteProjectRequest`](#aws-cdk-sdk.mobile.MobileDeleteProjectRequest)

---



#### Properties <a name="Properties"></a>

##### `deletedResources`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesDeleteProject.property.deletedResources"></a>

- *Type:* [`aws-cdk-sdk.mobile.MobileResource`](#aws-cdk-sdk.mobile.MobileResource)[]

---

##### `orphanedResources`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesDeleteProject.property.orphanedResources"></a>

- *Type:* [`aws-cdk-sdk.mobile.MobileResource`](#aws-cdk-sdk.mobile.MobileResource)[]

---


### MobileResponsesDescribeBundle <a name="aws-cdk-sdk.mobile.MobileResponsesDescribeBundle"></a>

#### Initializer <a name="aws-cdk-sdk.mobile.MobileResponsesDescribeBundle.Initializer"></a>

```typescript
import { mobile } from 'aws-cdk-sdk'

new mobile.MobileResponsesDescribeBundle(__scope: Construct, __resources: string[], __input: MobileDescribeBundleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesDescribeBundle.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesDescribeBundle.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesDescribeBundle.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mobile.MobileDescribeBundleRequest`](#aws-cdk-sdk.mobile.MobileDescribeBundleRequest)

---



#### Properties <a name="Properties"></a>

##### `details`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesDescribeBundle.property.details"></a>

- *Type:* [`aws-cdk-sdk.mobile.MobileResponsesDescribeBundleDetails`](#aws-cdk-sdk.mobile.MobileResponsesDescribeBundleDetails)

---


### MobileResponsesDescribeBundleDetails <a name="aws-cdk-sdk.mobile.MobileResponsesDescribeBundleDetails"></a>

#### Initializer <a name="aws-cdk-sdk.mobile.MobileResponsesDescribeBundleDetails.Initializer"></a>

```typescript
import { mobile } from 'aws-cdk-sdk'

new mobile.MobileResponsesDescribeBundleDetails(__scope: Construct, __resources: string[], __input: MobileDescribeBundleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesDescribeBundleDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesDescribeBundleDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesDescribeBundleDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mobile.MobileDescribeBundleRequest`](#aws-cdk-sdk.mobile.MobileDescribeBundleRequest)

---



#### Properties <a name="Properties"></a>

##### `availablePlatforms`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesDescribeBundleDetails.property.availablePlatforms"></a>

- *Type:* `string`[]

---

##### `bundleId`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesDescribeBundleDetails.property.bundleId"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesDescribeBundleDetails.property.description"></a>

- *Type:* `string`

---

##### `iconUrl`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesDescribeBundleDetails.property.iconUrl"></a>

- *Type:* `string`

---

##### `title`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesDescribeBundleDetails.property.title"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesDescribeBundleDetails.property.version"></a>

- *Type:* `string`

---


### MobileResponsesDescribeProject <a name="aws-cdk-sdk.mobile.MobileResponsesDescribeProject"></a>

#### Initializer <a name="aws-cdk-sdk.mobile.MobileResponsesDescribeProject.Initializer"></a>

```typescript
import { mobile } from 'aws-cdk-sdk'

new mobile.MobileResponsesDescribeProject(__scope: Construct, __resources: string[], __input: MobileDescribeProjectRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesDescribeProject.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesDescribeProject.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesDescribeProject.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mobile.MobileDescribeProjectRequest`](#aws-cdk-sdk.mobile.MobileDescribeProjectRequest)

---



#### Properties <a name="Properties"></a>

##### `details`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesDescribeProject.property.details"></a>

- *Type:* [`aws-cdk-sdk.mobile.MobileResponsesDescribeProjectDetails`](#aws-cdk-sdk.mobile.MobileResponsesDescribeProjectDetails)

---


### MobileResponsesDescribeProjectDetails <a name="aws-cdk-sdk.mobile.MobileResponsesDescribeProjectDetails"></a>

#### Initializer <a name="aws-cdk-sdk.mobile.MobileResponsesDescribeProjectDetails.Initializer"></a>

```typescript
import { mobile } from 'aws-cdk-sdk'

new mobile.MobileResponsesDescribeProjectDetails(__scope: Construct, __resources: string[], __input: MobileDescribeProjectRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesDescribeProjectDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesDescribeProjectDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesDescribeProjectDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mobile.MobileDescribeProjectRequest`](#aws-cdk-sdk.mobile.MobileDescribeProjectRequest)

---



#### Properties <a name="Properties"></a>

##### `consoleUrl`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesDescribeProjectDetails.property.consoleUrl"></a>

- *Type:* `string`

---

##### `createdDate`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesDescribeProjectDetails.property.createdDate"></a>

- *Type:* `string`

---

##### `lastUpdatedDate`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesDescribeProjectDetails.property.lastUpdatedDate"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesDescribeProjectDetails.property.name"></a>

- *Type:* `string`

---

##### `projectId`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesDescribeProjectDetails.property.projectId"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesDescribeProjectDetails.property.region"></a>

- *Type:* `string`

---

##### `resources`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesDescribeProjectDetails.property.resources"></a>

- *Type:* [`aws-cdk-sdk.mobile.MobileResource`](#aws-cdk-sdk.mobile.MobileResource)[]

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesDescribeProjectDetails.property.state"></a>

- *Type:* `string`

---


### MobileResponsesExportBundle <a name="aws-cdk-sdk.mobile.MobileResponsesExportBundle"></a>

#### Initializer <a name="aws-cdk-sdk.mobile.MobileResponsesExportBundle.Initializer"></a>

```typescript
import { mobile } from 'aws-cdk-sdk'

new mobile.MobileResponsesExportBundle(__scope: Construct, __resources: string[], __input: MobileExportBundleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesExportBundle.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesExportBundle.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesExportBundle.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mobile.MobileExportBundleRequest`](#aws-cdk-sdk.mobile.MobileExportBundleRequest)

---



#### Properties <a name="Properties"></a>

##### `downloadUrl`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesExportBundle.property.downloadUrl"></a>

- *Type:* `string`

---


### MobileResponsesExportProject <a name="aws-cdk-sdk.mobile.MobileResponsesExportProject"></a>

#### Initializer <a name="aws-cdk-sdk.mobile.MobileResponsesExportProject.Initializer"></a>

```typescript
import { mobile } from 'aws-cdk-sdk'

new mobile.MobileResponsesExportProject(__scope: Construct, __resources: string[], __input: MobileExportProjectRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesExportProject.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesExportProject.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesExportProject.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mobile.MobileExportProjectRequest`](#aws-cdk-sdk.mobile.MobileExportProjectRequest)

---



#### Properties <a name="Properties"></a>

##### `downloadUrl`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesExportProject.property.downloadUrl"></a>

- *Type:* `string`

---

##### `shareUrl`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesExportProject.property.shareUrl"></a>

- *Type:* `string`

---

##### `snapshotId`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesExportProject.property.snapshotId"></a>

- *Type:* `string`

---


### MobileResponsesListBundles <a name="aws-cdk-sdk.mobile.MobileResponsesListBundles"></a>

#### Initializer <a name="aws-cdk-sdk.mobile.MobileResponsesListBundles.Initializer"></a>

```typescript
import { mobile } from 'aws-cdk-sdk'

new mobile.MobileResponsesListBundles(__scope: Construct, __resources: string[], __input: MobileListBundlesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesListBundles.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesListBundles.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesListBundles.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mobile.MobileListBundlesRequest`](#aws-cdk-sdk.mobile.MobileListBundlesRequest)

---



#### Properties <a name="Properties"></a>

##### `bundleList`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesListBundles.property.bundleList"></a>

- *Type:* [`aws-cdk-sdk.mobile.MobileBundleDetails`](#aws-cdk-sdk.mobile.MobileBundleDetails)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesListBundles.property.nextToken"></a>

- *Type:* `string`

---


### MobileResponsesListProjects <a name="aws-cdk-sdk.mobile.MobileResponsesListProjects"></a>

#### Initializer <a name="aws-cdk-sdk.mobile.MobileResponsesListProjects.Initializer"></a>

```typescript
import { mobile } from 'aws-cdk-sdk'

new mobile.MobileResponsesListProjects(__scope: Construct, __resources: string[], __input: MobileListProjectsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesListProjects.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesListProjects.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesListProjects.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mobile.MobileListProjectsRequest`](#aws-cdk-sdk.mobile.MobileListProjectsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesListProjects.property.nextToken"></a>

- *Type:* `string`

---

##### `projects`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesListProjects.property.projects"></a>

- *Type:* [`aws-cdk-sdk.mobile.MobileProjectSummary`](#aws-cdk-sdk.mobile.MobileProjectSummary)[]

---


### MobileResponsesUpdateProject <a name="aws-cdk-sdk.mobile.MobileResponsesUpdateProject"></a>

#### Initializer <a name="aws-cdk-sdk.mobile.MobileResponsesUpdateProject.Initializer"></a>

```typescript
import { mobile } from 'aws-cdk-sdk'

new mobile.MobileResponsesUpdateProject(__scope: Construct, __resources: string[], __input: MobileUpdateProjectRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesUpdateProject.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesUpdateProject.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesUpdateProject.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mobile.MobileUpdateProjectRequest`](#aws-cdk-sdk.mobile.MobileUpdateProjectRequest)

---



#### Properties <a name="Properties"></a>

##### `details`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesUpdateProject.property.details"></a>

- *Type:* [`aws-cdk-sdk.mobile.MobileResponsesUpdateProjectDetails`](#aws-cdk-sdk.mobile.MobileResponsesUpdateProjectDetails)

---


### MobileResponsesUpdateProjectDetails <a name="aws-cdk-sdk.mobile.MobileResponsesUpdateProjectDetails"></a>

#### Initializer <a name="aws-cdk-sdk.mobile.MobileResponsesUpdateProjectDetails.Initializer"></a>

```typescript
import { mobile } from 'aws-cdk-sdk'

new mobile.MobileResponsesUpdateProjectDetails(__scope: Construct, __resources: string[], __input: MobileUpdateProjectRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesUpdateProjectDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesUpdateProjectDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesUpdateProjectDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mobile.MobileUpdateProjectRequest`](#aws-cdk-sdk.mobile.MobileUpdateProjectRequest)

---



#### Properties <a name="Properties"></a>

##### `consoleUrl`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesUpdateProjectDetails.property.consoleUrl"></a>

- *Type:* `string`

---

##### `createdDate`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesUpdateProjectDetails.property.createdDate"></a>

- *Type:* `string`

---

##### `lastUpdatedDate`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesUpdateProjectDetails.property.lastUpdatedDate"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesUpdateProjectDetails.property.name"></a>

- *Type:* `string`

---

##### `projectId`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesUpdateProjectDetails.property.projectId"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesUpdateProjectDetails.property.region"></a>

- *Type:* `string`

---

##### `resources`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesUpdateProjectDetails.property.resources"></a>

- *Type:* [`aws-cdk-sdk.mobile.MobileResource`](#aws-cdk-sdk.mobile.MobileResource)[]

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.mobile.MobileResponsesUpdateProjectDetails.property.state"></a>

- *Type:* `string`

---



