# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### AppStreamClient <a name="aws-cdk-sdk.appstream.AppStreamClient"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamClient.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `associateFleet` <a name="aws-cdk-sdk.appstream.AppStreamClient.associateFleet"></a>

```typescript
public associateFleet(input: AppStreamAssociateFleetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamAssociateFleetRequest`](#aws-cdk-sdk.appstream.AppStreamAssociateFleetRequest)

---

##### `batchAssociateUserStack` <a name="aws-cdk-sdk.appstream.AppStreamClient.batchAssociateUserStack"></a>

```typescript
public batchAssociateUserStack(input: AppStreamBatchAssociateUserStackRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamBatchAssociateUserStackRequest`](#aws-cdk-sdk.appstream.AppStreamBatchAssociateUserStackRequest)

---

##### `batchDisassociateUserStack` <a name="aws-cdk-sdk.appstream.AppStreamClient.batchDisassociateUserStack"></a>

```typescript
public batchDisassociateUserStack(input: AppStreamBatchDisassociateUserStackRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamBatchDisassociateUserStackRequest`](#aws-cdk-sdk.appstream.AppStreamBatchDisassociateUserStackRequest)

---

##### `copyImage` <a name="aws-cdk-sdk.appstream.AppStreamClient.copyImage"></a>

```typescript
public copyImage(input: AppStreamCopyImageRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamCopyImageRequest`](#aws-cdk-sdk.appstream.AppStreamCopyImageRequest)

---

##### `createDirectoryConfig` <a name="aws-cdk-sdk.appstream.AppStreamClient.createDirectoryConfig"></a>

```typescript
public createDirectoryConfig(input: AppStreamCreateDirectoryConfigRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamCreateDirectoryConfigRequest`](#aws-cdk-sdk.appstream.AppStreamCreateDirectoryConfigRequest)

---

##### `createFleet` <a name="aws-cdk-sdk.appstream.AppStreamClient.createFleet"></a>

```typescript
public createFleet(input: AppStreamCreateFleetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamCreateFleetRequest`](#aws-cdk-sdk.appstream.AppStreamCreateFleetRequest)

---

##### `createImageBuilder` <a name="aws-cdk-sdk.appstream.AppStreamClient.createImageBuilder"></a>

```typescript
public createImageBuilder(input: AppStreamCreateImageBuilderRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamCreateImageBuilderRequest`](#aws-cdk-sdk.appstream.AppStreamCreateImageBuilderRequest)

---

##### `createImageBuilderStreamingUrl` <a name="aws-cdk-sdk.appstream.AppStreamClient.createImageBuilderStreamingUrl"></a>

```typescript
public createImageBuilderStreamingUrl(input: AppStreamCreateImageBuilderStreamingUrlRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamCreateImageBuilderStreamingUrlRequest`](#aws-cdk-sdk.appstream.AppStreamCreateImageBuilderStreamingUrlRequest)

---

##### `createStack` <a name="aws-cdk-sdk.appstream.AppStreamClient.createStack"></a>

```typescript
public createStack(input: AppStreamCreateStackRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamCreateStackRequest`](#aws-cdk-sdk.appstream.AppStreamCreateStackRequest)

---

##### `createStreamingUrl` <a name="aws-cdk-sdk.appstream.AppStreamClient.createStreamingUrl"></a>

```typescript
public createStreamingUrl(input: AppStreamCreateStreamingUrlRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamCreateStreamingUrlRequest`](#aws-cdk-sdk.appstream.AppStreamCreateStreamingUrlRequest)

---

##### `createUsageReportSubscription` <a name="aws-cdk-sdk.appstream.AppStreamClient.createUsageReportSubscription"></a>

```typescript
public createUsageReportSubscription()
```

##### `createUser` <a name="aws-cdk-sdk.appstream.AppStreamClient.createUser"></a>

```typescript
public createUser(input: AppStreamCreateUserRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamCreateUserRequest`](#aws-cdk-sdk.appstream.AppStreamCreateUserRequest)

---

##### `deleteDirectoryConfig` <a name="aws-cdk-sdk.appstream.AppStreamClient.deleteDirectoryConfig"></a>

```typescript
public deleteDirectoryConfig(input: AppStreamDeleteDirectoryConfigRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamDeleteDirectoryConfigRequest`](#aws-cdk-sdk.appstream.AppStreamDeleteDirectoryConfigRequest)

---

##### `deleteFleet` <a name="aws-cdk-sdk.appstream.AppStreamClient.deleteFleet"></a>

```typescript
public deleteFleet(input: AppStreamDeleteFleetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamDeleteFleetRequest`](#aws-cdk-sdk.appstream.AppStreamDeleteFleetRequest)

---

##### `deleteImage` <a name="aws-cdk-sdk.appstream.AppStreamClient.deleteImage"></a>

```typescript
public deleteImage(input: AppStreamDeleteImageRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamDeleteImageRequest`](#aws-cdk-sdk.appstream.AppStreamDeleteImageRequest)

---

##### `deleteImageBuilder` <a name="aws-cdk-sdk.appstream.AppStreamClient.deleteImageBuilder"></a>

```typescript
public deleteImageBuilder(input: AppStreamDeleteImageBuilderRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamDeleteImageBuilderRequest`](#aws-cdk-sdk.appstream.AppStreamDeleteImageBuilderRequest)

---

##### `deleteImagePermissions` <a name="aws-cdk-sdk.appstream.AppStreamClient.deleteImagePermissions"></a>

```typescript
public deleteImagePermissions(input: AppStreamDeleteImagePermissionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamDeleteImagePermissionsRequest`](#aws-cdk-sdk.appstream.AppStreamDeleteImagePermissionsRequest)

---

##### `deleteStack` <a name="aws-cdk-sdk.appstream.AppStreamClient.deleteStack"></a>

```typescript
public deleteStack(input: AppStreamDeleteStackRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamDeleteStackRequest`](#aws-cdk-sdk.appstream.AppStreamDeleteStackRequest)

---

##### `deleteUsageReportSubscription` <a name="aws-cdk-sdk.appstream.AppStreamClient.deleteUsageReportSubscription"></a>

```typescript
public deleteUsageReportSubscription()
```

##### `deleteUser` <a name="aws-cdk-sdk.appstream.AppStreamClient.deleteUser"></a>

```typescript
public deleteUser(input: AppStreamDeleteUserRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamDeleteUserRequest`](#aws-cdk-sdk.appstream.AppStreamDeleteUserRequest)

---

##### `describeDirectoryConfigs` <a name="aws-cdk-sdk.appstream.AppStreamClient.describeDirectoryConfigs"></a>

```typescript
public describeDirectoryConfigs(input: AppStreamDescribeDirectoryConfigsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamDescribeDirectoryConfigsRequest`](#aws-cdk-sdk.appstream.AppStreamDescribeDirectoryConfigsRequest)

---

##### `describeFleets` <a name="aws-cdk-sdk.appstream.AppStreamClient.describeFleets"></a>

```typescript
public describeFleets(input: AppStreamDescribeFleetsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamDescribeFleetsRequest`](#aws-cdk-sdk.appstream.AppStreamDescribeFleetsRequest)

---

##### `describeImageBuilders` <a name="aws-cdk-sdk.appstream.AppStreamClient.describeImageBuilders"></a>

```typescript
public describeImageBuilders(input: AppStreamDescribeImageBuildersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamDescribeImageBuildersRequest`](#aws-cdk-sdk.appstream.AppStreamDescribeImageBuildersRequest)

---

##### `describeImagePermissions` <a name="aws-cdk-sdk.appstream.AppStreamClient.describeImagePermissions"></a>

```typescript
public describeImagePermissions(input: AppStreamDescribeImagePermissionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamDescribeImagePermissionsRequest`](#aws-cdk-sdk.appstream.AppStreamDescribeImagePermissionsRequest)

---

##### `describeImages` <a name="aws-cdk-sdk.appstream.AppStreamClient.describeImages"></a>

```typescript
public describeImages(input: AppStreamDescribeImagesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamDescribeImagesRequest`](#aws-cdk-sdk.appstream.AppStreamDescribeImagesRequest)

---

##### `describeSessions` <a name="aws-cdk-sdk.appstream.AppStreamClient.describeSessions"></a>

```typescript
public describeSessions(input: AppStreamDescribeSessionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamDescribeSessionsRequest`](#aws-cdk-sdk.appstream.AppStreamDescribeSessionsRequest)

---

##### `describeStacks` <a name="aws-cdk-sdk.appstream.AppStreamClient.describeStacks"></a>

```typescript
public describeStacks(input: AppStreamDescribeStacksRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamDescribeStacksRequest`](#aws-cdk-sdk.appstream.AppStreamDescribeStacksRequest)

---

##### `describeUsageReportSubscriptions` <a name="aws-cdk-sdk.appstream.AppStreamClient.describeUsageReportSubscriptions"></a>

```typescript
public describeUsageReportSubscriptions(input: AppStreamDescribeUsageReportSubscriptionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamDescribeUsageReportSubscriptionsRequest`](#aws-cdk-sdk.appstream.AppStreamDescribeUsageReportSubscriptionsRequest)

---

##### `describeUsers` <a name="aws-cdk-sdk.appstream.AppStreamClient.describeUsers"></a>

```typescript
public describeUsers(input: AppStreamDescribeUsersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamDescribeUsersRequest`](#aws-cdk-sdk.appstream.AppStreamDescribeUsersRequest)

---

##### `describeUserStackAssociations` <a name="aws-cdk-sdk.appstream.AppStreamClient.describeUserStackAssociations"></a>

```typescript
public describeUserStackAssociations(input: AppStreamDescribeUserStackAssociationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamDescribeUserStackAssociationsRequest`](#aws-cdk-sdk.appstream.AppStreamDescribeUserStackAssociationsRequest)

---

##### `disableUser` <a name="aws-cdk-sdk.appstream.AppStreamClient.disableUser"></a>

```typescript
public disableUser(input: AppStreamDisableUserRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamDisableUserRequest`](#aws-cdk-sdk.appstream.AppStreamDisableUserRequest)

---

##### `disassociateFleet` <a name="aws-cdk-sdk.appstream.AppStreamClient.disassociateFleet"></a>

```typescript
public disassociateFleet(input: AppStreamDisassociateFleetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamDisassociateFleetRequest`](#aws-cdk-sdk.appstream.AppStreamDisassociateFleetRequest)

---

##### `enableUser` <a name="aws-cdk-sdk.appstream.AppStreamClient.enableUser"></a>

```typescript
public enableUser(input: AppStreamEnableUserRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamEnableUserRequest`](#aws-cdk-sdk.appstream.AppStreamEnableUserRequest)

---

##### `expireSession` <a name="aws-cdk-sdk.appstream.AppStreamClient.expireSession"></a>

```typescript
public expireSession(input: AppStreamExpireSessionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamExpireSessionRequest`](#aws-cdk-sdk.appstream.AppStreamExpireSessionRequest)

---

##### `listAssociatedFleets` <a name="aws-cdk-sdk.appstream.AppStreamClient.listAssociatedFleets"></a>

```typescript
public listAssociatedFleets(input: AppStreamListAssociatedFleetsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamListAssociatedFleetsRequest`](#aws-cdk-sdk.appstream.AppStreamListAssociatedFleetsRequest)

---

##### `listAssociatedStacks` <a name="aws-cdk-sdk.appstream.AppStreamClient.listAssociatedStacks"></a>

```typescript
public listAssociatedStacks(input: AppStreamListAssociatedStacksRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamListAssociatedStacksRequest`](#aws-cdk-sdk.appstream.AppStreamListAssociatedStacksRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.appstream.AppStreamClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: AppStreamListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamListTagsForResourceRequest`](#aws-cdk-sdk.appstream.AppStreamListTagsForResourceRequest)

---

##### `startFleet` <a name="aws-cdk-sdk.appstream.AppStreamClient.startFleet"></a>

```typescript
public startFleet(input: AppStreamStartFleetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamStartFleetRequest`](#aws-cdk-sdk.appstream.AppStreamStartFleetRequest)

---

##### `startImageBuilder` <a name="aws-cdk-sdk.appstream.AppStreamClient.startImageBuilder"></a>

```typescript
public startImageBuilder(input: AppStreamStartImageBuilderRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamStartImageBuilderRequest`](#aws-cdk-sdk.appstream.AppStreamStartImageBuilderRequest)

---

##### `stopFleet` <a name="aws-cdk-sdk.appstream.AppStreamClient.stopFleet"></a>

```typescript
public stopFleet(input: AppStreamStopFleetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamStopFleetRequest`](#aws-cdk-sdk.appstream.AppStreamStopFleetRequest)

---

##### `stopImageBuilder` <a name="aws-cdk-sdk.appstream.AppStreamClient.stopImageBuilder"></a>

```typescript
public stopImageBuilder(input: AppStreamStopImageBuilderRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamStopImageBuilderRequest`](#aws-cdk-sdk.appstream.AppStreamStopImageBuilderRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.appstream.AppStreamClient.tagResource"></a>

```typescript
public tagResource(input: AppStreamTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamTagResourceRequest`](#aws-cdk-sdk.appstream.AppStreamTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.appstream.AppStreamClient.untagResource"></a>

```typescript
public untagResource(input: AppStreamUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamUntagResourceRequest`](#aws-cdk-sdk.appstream.AppStreamUntagResourceRequest)

---

##### `updateDirectoryConfig` <a name="aws-cdk-sdk.appstream.AppStreamClient.updateDirectoryConfig"></a>

```typescript
public updateDirectoryConfig(input: AppStreamUpdateDirectoryConfigRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamUpdateDirectoryConfigRequest`](#aws-cdk-sdk.appstream.AppStreamUpdateDirectoryConfigRequest)

---

##### `updateFleet` <a name="aws-cdk-sdk.appstream.AppStreamClient.updateFleet"></a>

```typescript
public updateFleet(input: AppStreamUpdateFleetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamUpdateFleetRequest`](#aws-cdk-sdk.appstream.AppStreamUpdateFleetRequest)

---

##### `updateImagePermissions` <a name="aws-cdk-sdk.appstream.AppStreamClient.updateImagePermissions"></a>

```typescript
public updateImagePermissions(input: AppStreamUpdateImagePermissionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamUpdateImagePermissionsRequest`](#aws-cdk-sdk.appstream.AppStreamUpdateImagePermissionsRequest)

---

##### `updateStack` <a name="aws-cdk-sdk.appstream.AppStreamClient.updateStack"></a>

```typescript
public updateStack(input: AppStreamUpdateStackRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamUpdateStackRequest`](#aws-cdk-sdk.appstream.AppStreamUpdateStackRequest)

---




## Structs <a name="Structs"></a>

### AppStreamAccessEndpoint <a name="aws-cdk-sdk.appstream.AppStreamAccessEndpoint"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamAccessEndpoint: appstream.AppStreamAccessEndpoint = { ... }
```

##### `endpointType`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamAccessEndpoint.property.endpointType"></a>

- *Type:* `string`

---

##### `vpceId`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamAccessEndpoint.property.vpceId"></a>

- *Type:* `string`

---

### AppStreamApplication <a name="aws-cdk-sdk.appstream.AppStreamApplication"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamApplication: appstream.AppStreamApplication = { ... }
```

##### `displayName`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamApplication.property.displayName"></a>

- *Type:* `string`

---

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamApplication.property.enabled"></a>

- *Type:* `boolean`

---

##### `iconUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamApplication.property.iconUrl"></a>

- *Type:* `string`

---

##### `launchParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamApplication.property.launchParameters"></a>

- *Type:* `string`

---

##### `launchPath`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamApplication.property.launchPath"></a>

- *Type:* `string`

---

##### `metadata`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamApplication.property.metadata"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamApplication.property.name"></a>

- *Type:* `string`

---

### AppStreamApplicationSettings <a name="aws-cdk-sdk.appstream.AppStreamApplicationSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamApplicationSettings: appstream.AppStreamApplicationSettings = { ... }
```

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamApplicationSettings.property.enabled"></a>

- *Type:* `boolean`

---

##### `settingsGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamApplicationSettings.property.settingsGroup"></a>

- *Type:* `string`

---

### AppStreamApplicationSettingsResponse <a name="aws-cdk-sdk.appstream.AppStreamApplicationSettingsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamApplicationSettingsResponse: appstream.AppStreamApplicationSettingsResponse = { ... }
```

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamApplicationSettingsResponse.property.enabled"></a>

- *Type:* `boolean`

---

##### `s3BucketName`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamApplicationSettingsResponse.property.s3BucketName"></a>

- *Type:* `string`

---

##### `settingsGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamApplicationSettingsResponse.property.settingsGroup"></a>

- *Type:* `string`

---

### AppStreamAssociateFleetRequest <a name="aws-cdk-sdk.appstream.AppStreamAssociateFleetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamAssociateFleetRequest: appstream.AppStreamAssociateFleetRequest = { ... }
```

##### `fleetName`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamAssociateFleetRequest.property.fleetName"></a>

- *Type:* `string`

---

##### `stackName`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamAssociateFleetRequest.property.stackName"></a>

- *Type:* `string`

---

### AppStreamAssociateFleetResult <a name="aws-cdk-sdk.appstream.AppStreamAssociateFleetResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamAssociateFleetResult: appstream.AppStreamAssociateFleetResult = { ... }
```

### AppStreamBatchAssociateUserStackRequest <a name="aws-cdk-sdk.appstream.AppStreamBatchAssociateUserStackRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamBatchAssociateUserStackRequest: appstream.AppStreamBatchAssociateUserStackRequest = { ... }
```

##### `userStackAssociations`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamBatchAssociateUserStackRequest.property.userStackAssociations"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamUserStackAssociation`](#aws-cdk-sdk.appstream.AppStreamUserStackAssociation)[]

---

### AppStreamBatchAssociateUserStackResult <a name="aws-cdk-sdk.appstream.AppStreamBatchAssociateUserStackResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamBatchAssociateUserStackResult: appstream.AppStreamBatchAssociateUserStackResult = { ... }
```

##### `errors`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamBatchAssociateUserStackResult.property.errors"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamUserStackAssociationError`](#aws-cdk-sdk.appstream.AppStreamUserStackAssociationError)[]

---

### AppStreamBatchDisassociateUserStackRequest <a name="aws-cdk-sdk.appstream.AppStreamBatchDisassociateUserStackRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamBatchDisassociateUserStackRequest: appstream.AppStreamBatchDisassociateUserStackRequest = { ... }
```

##### `userStackAssociations`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamBatchDisassociateUserStackRequest.property.userStackAssociations"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamUserStackAssociation`](#aws-cdk-sdk.appstream.AppStreamUserStackAssociation)[]

---

### AppStreamBatchDisassociateUserStackResult <a name="aws-cdk-sdk.appstream.AppStreamBatchDisassociateUserStackResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamBatchDisassociateUserStackResult: appstream.AppStreamBatchDisassociateUserStackResult = { ... }
```

##### `errors`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamBatchDisassociateUserStackResult.property.errors"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamUserStackAssociationError`](#aws-cdk-sdk.appstream.AppStreamUserStackAssociationError)[]

---

### AppStreamComputeCapacity <a name="aws-cdk-sdk.appstream.AppStreamComputeCapacity"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamComputeCapacity: appstream.AppStreamComputeCapacity = { ... }
```

##### `desiredInstances`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamComputeCapacity.property.desiredInstances"></a>

- *Type:* `number`

---

### AppStreamComputeCapacityStatus <a name="aws-cdk-sdk.appstream.AppStreamComputeCapacityStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamComputeCapacityStatus: appstream.AppStreamComputeCapacityStatus = { ... }
```

##### `desired`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamComputeCapacityStatus.property.desired"></a>

- *Type:* `number`

---

##### `available`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamComputeCapacityStatus.property.available"></a>

- *Type:* `number`

---

##### `inUse`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamComputeCapacityStatus.property.inUse"></a>

- *Type:* `number`

---

##### `running`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamComputeCapacityStatus.property.running"></a>

- *Type:* `number`

---

### AppStreamCopyImageRequest <a name="aws-cdk-sdk.appstream.AppStreamCopyImageRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamCopyImageRequest: appstream.AppStreamCopyImageRequest = { ... }
```

##### `destinationImageName`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamCopyImageRequest.property.destinationImageName"></a>

- *Type:* `string`

---

##### `destinationRegion`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamCopyImageRequest.property.destinationRegion"></a>

- *Type:* `string`

---

##### `sourceImageName`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamCopyImageRequest.property.sourceImageName"></a>

- *Type:* `string`

---

##### `destinationImageDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamCopyImageRequest.property.destinationImageDescription"></a>

- *Type:* `string`

---

### AppStreamCopyImageResponse <a name="aws-cdk-sdk.appstream.AppStreamCopyImageResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamCopyImageResponse: appstream.AppStreamCopyImageResponse = { ... }
```

##### `destinationImageName`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamCopyImageResponse.property.destinationImageName"></a>

- *Type:* `string`

---

### AppStreamCreateDirectoryConfigRequest <a name="aws-cdk-sdk.appstream.AppStreamCreateDirectoryConfigRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamCreateDirectoryConfigRequest: appstream.AppStreamCreateDirectoryConfigRequest = { ... }
```

##### `directoryName`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateDirectoryConfigRequest.property.directoryName"></a>

- *Type:* `string`

---

##### `organizationalUnitDistinguishedNames`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateDirectoryConfigRequest.property.organizationalUnitDistinguishedNames"></a>

- *Type:* `string`[]

---

##### `serviceAccountCredentials`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateDirectoryConfigRequest.property.serviceAccountCredentials"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamServiceAccountCredentials`](#aws-cdk-sdk.appstream.AppStreamServiceAccountCredentials)

---

### AppStreamCreateDirectoryConfigResult <a name="aws-cdk-sdk.appstream.AppStreamCreateDirectoryConfigResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamCreateDirectoryConfigResult: appstream.AppStreamCreateDirectoryConfigResult = { ... }
```

##### `directoryConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateDirectoryConfigResult.property.directoryConfig"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamDirectoryConfig`](#aws-cdk-sdk.appstream.AppStreamDirectoryConfig)

---

### AppStreamCreateFleetRequest <a name="aws-cdk-sdk.appstream.AppStreamCreateFleetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamCreateFleetRequest: appstream.AppStreamCreateFleetRequest = { ... }
```

##### `computeCapacity`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateFleetRequest.property.computeCapacity"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamComputeCapacity`](#aws-cdk-sdk.appstream.AppStreamComputeCapacity)

---

##### `instanceType`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateFleetRequest.property.instanceType"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateFleetRequest.property.name"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateFleetRequest.property.description"></a>

- *Type:* `string`

---

##### `disconnectTimeoutInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateFleetRequest.property.disconnectTimeoutInSeconds"></a>

- *Type:* `number`

---

##### `displayName`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateFleetRequest.property.displayName"></a>

- *Type:* `string`

---

##### `domainJoinInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateFleetRequest.property.domainJoinInfo"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamDomainJoinInfo`](#aws-cdk-sdk.appstream.AppStreamDomainJoinInfo)

---

##### `enableDefaultInternetAccess`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateFleetRequest.property.enableDefaultInternetAccess"></a>

- *Type:* `boolean`

---

##### `fleetType`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateFleetRequest.property.fleetType"></a>

- *Type:* `string`

---

##### `iamRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateFleetRequest.property.iamRoleArn"></a>

- *Type:* `string`

---

##### `idleDisconnectTimeoutInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateFleetRequest.property.idleDisconnectTimeoutInSeconds"></a>

- *Type:* `number`

---

##### `imageArn`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateFleetRequest.property.imageArn"></a>

- *Type:* `string`

---

##### `imageName`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateFleetRequest.property.imageName"></a>

- *Type:* `string`

---

##### `maxUserDurationInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateFleetRequest.property.maxUserDurationInSeconds"></a>

- *Type:* `number`

---

##### `streamView`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateFleetRequest.property.streamView"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateFleetRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `vpcConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateFleetRequest.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamVpcConfig`](#aws-cdk-sdk.appstream.AppStreamVpcConfig)

---

### AppStreamCreateFleetResult <a name="aws-cdk-sdk.appstream.AppStreamCreateFleetResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamCreateFleetResult: appstream.AppStreamCreateFleetResult = { ... }
```

##### `fleet`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateFleetResult.property.fleet"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamFleet`](#aws-cdk-sdk.appstream.AppStreamFleet)

---

### AppStreamCreateImageBuilderRequest <a name="aws-cdk-sdk.appstream.AppStreamCreateImageBuilderRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamCreateImageBuilderRequest: appstream.AppStreamCreateImageBuilderRequest = { ... }
```

##### `instanceType`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateImageBuilderRequest.property.instanceType"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateImageBuilderRequest.property.name"></a>

- *Type:* `string`

---

##### `accessEndpoints`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateImageBuilderRequest.property.accessEndpoints"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamAccessEndpoint`](#aws-cdk-sdk.appstream.AppStreamAccessEndpoint)[]

---

##### `appstreamAgentVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateImageBuilderRequest.property.appstreamAgentVersion"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateImageBuilderRequest.property.description"></a>

- *Type:* `string`

---

##### `displayName`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateImageBuilderRequest.property.displayName"></a>

- *Type:* `string`

---

##### `domainJoinInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateImageBuilderRequest.property.domainJoinInfo"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamDomainJoinInfo`](#aws-cdk-sdk.appstream.AppStreamDomainJoinInfo)

---

##### `enableDefaultInternetAccess`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateImageBuilderRequest.property.enableDefaultInternetAccess"></a>

- *Type:* `boolean`

---

##### `iamRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateImageBuilderRequest.property.iamRoleArn"></a>

- *Type:* `string`

---

##### `imageArn`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateImageBuilderRequest.property.imageArn"></a>

- *Type:* `string`

---

##### `imageName`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateImageBuilderRequest.property.imageName"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateImageBuilderRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `vpcConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateImageBuilderRequest.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamVpcConfig`](#aws-cdk-sdk.appstream.AppStreamVpcConfig)

---

### AppStreamCreateImageBuilderResult <a name="aws-cdk-sdk.appstream.AppStreamCreateImageBuilderResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamCreateImageBuilderResult: appstream.AppStreamCreateImageBuilderResult = { ... }
```

##### `imageBuilder`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateImageBuilderResult.property.imageBuilder"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamImageBuilder`](#aws-cdk-sdk.appstream.AppStreamImageBuilder)

---

### AppStreamCreateImageBuilderStreamingUrlRequest <a name="aws-cdk-sdk.appstream.AppStreamCreateImageBuilderStreamingUrlRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamCreateImageBuilderStreamingUrlRequest: appstream.AppStreamCreateImageBuilderStreamingUrlRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateImageBuilderStreamingUrlRequest.property.name"></a>

- *Type:* `string`

---

##### `validity`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateImageBuilderStreamingUrlRequest.property.validity"></a>

- *Type:* `number`

---

### AppStreamCreateImageBuilderStreamingUrlResult <a name="aws-cdk-sdk.appstream.AppStreamCreateImageBuilderStreamingUrlResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamCreateImageBuilderStreamingUrlResult: appstream.AppStreamCreateImageBuilderStreamingUrlResult = { ... }
```

##### `expires`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateImageBuilderStreamingUrlResult.property.expires"></a>

- *Type:* `string`

---

##### `streamingUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateImageBuilderStreamingUrlResult.property.streamingUrl"></a>

- *Type:* `string`

---

### AppStreamCreateStackRequest <a name="aws-cdk-sdk.appstream.AppStreamCreateStackRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamCreateStackRequest: appstream.AppStreamCreateStackRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateStackRequest.property.name"></a>

- *Type:* `string`

---

##### `accessEndpoints`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateStackRequest.property.accessEndpoints"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamAccessEndpoint`](#aws-cdk-sdk.appstream.AppStreamAccessEndpoint)[]

---

##### `applicationSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateStackRequest.property.applicationSettings"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamApplicationSettings`](#aws-cdk-sdk.appstream.AppStreamApplicationSettings)

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateStackRequest.property.description"></a>

- *Type:* `string`

---

##### `displayName`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateStackRequest.property.displayName"></a>

- *Type:* `string`

---

##### `embedHostDomains`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateStackRequest.property.embedHostDomains"></a>

- *Type:* `string`[]

---

##### `feedbackUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateStackRequest.property.feedbackUrl"></a>

- *Type:* `string`

---

##### `redirectUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateStackRequest.property.redirectUrl"></a>

- *Type:* `string`

---

##### `storageConnectors`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateStackRequest.property.storageConnectors"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamStorageConnector`](#aws-cdk-sdk.appstream.AppStreamStorageConnector)[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateStackRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `userSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateStackRequest.property.userSettings"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamUserSetting`](#aws-cdk-sdk.appstream.AppStreamUserSetting)[]

---

### AppStreamCreateStackResult <a name="aws-cdk-sdk.appstream.AppStreamCreateStackResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamCreateStackResult: appstream.AppStreamCreateStackResult = { ... }
```

##### `stack`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateStackResult.property.stack"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamStack`](#aws-cdk-sdk.appstream.AppStreamStack)

---

### AppStreamCreateStreamingUrlRequest <a name="aws-cdk-sdk.appstream.AppStreamCreateStreamingUrlRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamCreateStreamingUrlRequest: appstream.AppStreamCreateStreamingUrlRequest = { ... }
```

##### `fleetName`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateStreamingUrlRequest.property.fleetName"></a>

- *Type:* `string`

---

##### `stackName`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateStreamingUrlRequest.property.stackName"></a>

- *Type:* `string`

---

##### `userId`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateStreamingUrlRequest.property.userId"></a>

- *Type:* `string`

---

##### `applicationId`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateStreamingUrlRequest.property.applicationId"></a>

- *Type:* `string`

---

##### `sessionContext`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateStreamingUrlRequest.property.sessionContext"></a>

- *Type:* `string`

---

##### `validity`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateStreamingUrlRequest.property.validity"></a>

- *Type:* `number`

---

### AppStreamCreateStreamingUrlResult <a name="aws-cdk-sdk.appstream.AppStreamCreateStreamingUrlResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamCreateStreamingUrlResult: appstream.AppStreamCreateStreamingUrlResult = { ... }
```

##### `expires`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateStreamingUrlResult.property.expires"></a>

- *Type:* `string`

---

##### `streamingUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateStreamingUrlResult.property.streamingUrl"></a>

- *Type:* `string`

---

### AppStreamCreateUsageReportSubscriptionRequest <a name="aws-cdk-sdk.appstream.AppStreamCreateUsageReportSubscriptionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamCreateUsageReportSubscriptionRequest: appstream.AppStreamCreateUsageReportSubscriptionRequest = { ... }
```

### AppStreamCreateUsageReportSubscriptionResult <a name="aws-cdk-sdk.appstream.AppStreamCreateUsageReportSubscriptionResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamCreateUsageReportSubscriptionResult: appstream.AppStreamCreateUsageReportSubscriptionResult = { ... }
```

##### `s3BucketName`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateUsageReportSubscriptionResult.property.s3BucketName"></a>

- *Type:* `string`

---

##### `schedule`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateUsageReportSubscriptionResult.property.schedule"></a>

- *Type:* `string`

---

### AppStreamCreateUserRequest <a name="aws-cdk-sdk.appstream.AppStreamCreateUserRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamCreateUserRequest: appstream.AppStreamCreateUserRequest = { ... }
```

##### `authenticationType`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateUserRequest.property.authenticationType"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateUserRequest.property.userName"></a>

- *Type:* `string`

---

##### `firstName`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateUserRequest.property.firstName"></a>

- *Type:* `string`

---

##### `lastName`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateUserRequest.property.lastName"></a>

- *Type:* `string`

---

##### `messageAction`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamCreateUserRequest.property.messageAction"></a>

- *Type:* `string`

---

### AppStreamCreateUserResult <a name="aws-cdk-sdk.appstream.AppStreamCreateUserResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamCreateUserResult: appstream.AppStreamCreateUserResult = { ... }
```

### AppStreamDeleteDirectoryConfigRequest <a name="aws-cdk-sdk.appstream.AppStreamDeleteDirectoryConfigRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamDeleteDirectoryConfigRequest: appstream.AppStreamDeleteDirectoryConfigRequest = { ... }
```

##### `directoryName`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamDeleteDirectoryConfigRequest.property.directoryName"></a>

- *Type:* `string`

---

### AppStreamDeleteDirectoryConfigResult <a name="aws-cdk-sdk.appstream.AppStreamDeleteDirectoryConfigResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamDeleteDirectoryConfigResult: appstream.AppStreamDeleteDirectoryConfigResult = { ... }
```

### AppStreamDeleteFleetRequest <a name="aws-cdk-sdk.appstream.AppStreamDeleteFleetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamDeleteFleetRequest: appstream.AppStreamDeleteFleetRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamDeleteFleetRequest.property.name"></a>

- *Type:* `string`

---

### AppStreamDeleteFleetResult <a name="aws-cdk-sdk.appstream.AppStreamDeleteFleetResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamDeleteFleetResult: appstream.AppStreamDeleteFleetResult = { ... }
```

### AppStreamDeleteImageBuilderRequest <a name="aws-cdk-sdk.appstream.AppStreamDeleteImageBuilderRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamDeleteImageBuilderRequest: appstream.AppStreamDeleteImageBuilderRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamDeleteImageBuilderRequest.property.name"></a>

- *Type:* `string`

---

### AppStreamDeleteImageBuilderResult <a name="aws-cdk-sdk.appstream.AppStreamDeleteImageBuilderResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamDeleteImageBuilderResult: appstream.AppStreamDeleteImageBuilderResult = { ... }
```

##### `imageBuilder`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamDeleteImageBuilderResult.property.imageBuilder"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamImageBuilder`](#aws-cdk-sdk.appstream.AppStreamImageBuilder)

---

### AppStreamDeleteImagePermissionsRequest <a name="aws-cdk-sdk.appstream.AppStreamDeleteImagePermissionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamDeleteImagePermissionsRequest: appstream.AppStreamDeleteImagePermissionsRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamDeleteImagePermissionsRequest.property.name"></a>

- *Type:* `string`

---

##### `sharedAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamDeleteImagePermissionsRequest.property.sharedAccountId"></a>

- *Type:* `string`

---

### AppStreamDeleteImagePermissionsResult <a name="aws-cdk-sdk.appstream.AppStreamDeleteImagePermissionsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamDeleteImagePermissionsResult: appstream.AppStreamDeleteImagePermissionsResult = { ... }
```

### AppStreamDeleteImageRequest <a name="aws-cdk-sdk.appstream.AppStreamDeleteImageRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamDeleteImageRequest: appstream.AppStreamDeleteImageRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamDeleteImageRequest.property.name"></a>

- *Type:* `string`

---

### AppStreamDeleteImageResult <a name="aws-cdk-sdk.appstream.AppStreamDeleteImageResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamDeleteImageResult: appstream.AppStreamDeleteImageResult = { ... }
```

##### `image`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamDeleteImageResult.property.image"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamImage`](#aws-cdk-sdk.appstream.AppStreamImage)

---

### AppStreamDeleteStackRequest <a name="aws-cdk-sdk.appstream.AppStreamDeleteStackRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamDeleteStackRequest: appstream.AppStreamDeleteStackRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamDeleteStackRequest.property.name"></a>

- *Type:* `string`

---

### AppStreamDeleteStackResult <a name="aws-cdk-sdk.appstream.AppStreamDeleteStackResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamDeleteStackResult: appstream.AppStreamDeleteStackResult = { ... }
```

### AppStreamDeleteUsageReportSubscriptionRequest <a name="aws-cdk-sdk.appstream.AppStreamDeleteUsageReportSubscriptionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamDeleteUsageReportSubscriptionRequest: appstream.AppStreamDeleteUsageReportSubscriptionRequest = { ... }
```

### AppStreamDeleteUsageReportSubscriptionResult <a name="aws-cdk-sdk.appstream.AppStreamDeleteUsageReportSubscriptionResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamDeleteUsageReportSubscriptionResult: appstream.AppStreamDeleteUsageReportSubscriptionResult = { ... }
```

### AppStreamDeleteUserRequest <a name="aws-cdk-sdk.appstream.AppStreamDeleteUserRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamDeleteUserRequest: appstream.AppStreamDeleteUserRequest = { ... }
```

##### `authenticationType`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamDeleteUserRequest.property.authenticationType"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamDeleteUserRequest.property.userName"></a>

- *Type:* `string`

---

### AppStreamDeleteUserResult <a name="aws-cdk-sdk.appstream.AppStreamDeleteUserResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamDeleteUserResult: appstream.AppStreamDeleteUserResult = { ... }
```

### AppStreamDescribeDirectoryConfigsRequest <a name="aws-cdk-sdk.appstream.AppStreamDescribeDirectoryConfigsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamDescribeDirectoryConfigsRequest: appstream.AppStreamDescribeDirectoryConfigsRequest = { ... }
```

##### `directoryNames`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamDescribeDirectoryConfigsRequest.property.directoryNames"></a>

- *Type:* `string`[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamDescribeDirectoryConfigsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamDescribeDirectoryConfigsRequest.property.nextToken"></a>

- *Type:* `string`

---

### AppStreamDescribeDirectoryConfigsResult <a name="aws-cdk-sdk.appstream.AppStreamDescribeDirectoryConfigsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamDescribeDirectoryConfigsResult: appstream.AppStreamDescribeDirectoryConfigsResult = { ... }
```

##### `directoryConfigs`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamDescribeDirectoryConfigsResult.property.directoryConfigs"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamDirectoryConfig`](#aws-cdk-sdk.appstream.AppStreamDirectoryConfig)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamDescribeDirectoryConfigsResult.property.nextToken"></a>

- *Type:* `string`

---

### AppStreamDescribeFleetsRequest <a name="aws-cdk-sdk.appstream.AppStreamDescribeFleetsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamDescribeFleetsRequest: appstream.AppStreamDescribeFleetsRequest = { ... }
```

##### `names`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamDescribeFleetsRequest.property.names"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamDescribeFleetsRequest.property.nextToken"></a>

- *Type:* `string`

---

### AppStreamDescribeFleetsResult <a name="aws-cdk-sdk.appstream.AppStreamDescribeFleetsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamDescribeFleetsResult: appstream.AppStreamDescribeFleetsResult = { ... }
```

##### `fleets`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamDescribeFleetsResult.property.fleets"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamFleet`](#aws-cdk-sdk.appstream.AppStreamFleet)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamDescribeFleetsResult.property.nextToken"></a>

- *Type:* `string`

---

### AppStreamDescribeImageBuildersRequest <a name="aws-cdk-sdk.appstream.AppStreamDescribeImageBuildersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamDescribeImageBuildersRequest: appstream.AppStreamDescribeImageBuildersRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamDescribeImageBuildersRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `names`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamDescribeImageBuildersRequest.property.names"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamDescribeImageBuildersRequest.property.nextToken"></a>

- *Type:* `string`

---

### AppStreamDescribeImageBuildersResult <a name="aws-cdk-sdk.appstream.AppStreamDescribeImageBuildersResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamDescribeImageBuildersResult: appstream.AppStreamDescribeImageBuildersResult = { ... }
```

##### `imageBuilders`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamDescribeImageBuildersResult.property.imageBuilders"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamImageBuilder`](#aws-cdk-sdk.appstream.AppStreamImageBuilder)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamDescribeImageBuildersResult.property.nextToken"></a>

- *Type:* `string`

---

### AppStreamDescribeImagePermissionsRequest <a name="aws-cdk-sdk.appstream.AppStreamDescribeImagePermissionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamDescribeImagePermissionsRequest: appstream.AppStreamDescribeImagePermissionsRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamDescribeImagePermissionsRequest.property.name"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamDescribeImagePermissionsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamDescribeImagePermissionsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `sharedAwsAccountIds`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamDescribeImagePermissionsRequest.property.sharedAwsAccountIds"></a>

- *Type:* `string`[]

---

### AppStreamDescribeImagePermissionsResult <a name="aws-cdk-sdk.appstream.AppStreamDescribeImagePermissionsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamDescribeImagePermissionsResult: appstream.AppStreamDescribeImagePermissionsResult = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamDescribeImagePermissionsResult.property.name"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamDescribeImagePermissionsResult.property.nextToken"></a>

- *Type:* `string`

---

##### `sharedImagePermissionsList`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamDescribeImagePermissionsResult.property.sharedImagePermissionsList"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamSharedImagePermissions`](#aws-cdk-sdk.appstream.AppStreamSharedImagePermissions)[]

---

### AppStreamDescribeImagesRequest <a name="aws-cdk-sdk.appstream.AppStreamDescribeImagesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamDescribeImagesRequest: appstream.AppStreamDescribeImagesRequest = { ... }
```

##### `arns`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamDescribeImagesRequest.property.arns"></a>

- *Type:* `string`[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamDescribeImagesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `names`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamDescribeImagesRequest.property.names"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamDescribeImagesRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamDescribeImagesRequest.property.type"></a>

- *Type:* `string`

---

### AppStreamDescribeImagesResult <a name="aws-cdk-sdk.appstream.AppStreamDescribeImagesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamDescribeImagesResult: appstream.AppStreamDescribeImagesResult = { ... }
```

##### `images`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamDescribeImagesResult.property.images"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamImage`](#aws-cdk-sdk.appstream.AppStreamImage)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamDescribeImagesResult.property.nextToken"></a>

- *Type:* `string`

---

### AppStreamDescribeSessionsRequest <a name="aws-cdk-sdk.appstream.AppStreamDescribeSessionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamDescribeSessionsRequest: appstream.AppStreamDescribeSessionsRequest = { ... }
```

##### `fleetName`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamDescribeSessionsRequest.property.fleetName"></a>

- *Type:* `string`

---

##### `stackName`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamDescribeSessionsRequest.property.stackName"></a>

- *Type:* `string`

---

##### `authenticationType`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamDescribeSessionsRequest.property.authenticationType"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamDescribeSessionsRequest.property.limit"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamDescribeSessionsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `userId`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamDescribeSessionsRequest.property.userId"></a>

- *Type:* `string`

---

### AppStreamDescribeSessionsResult <a name="aws-cdk-sdk.appstream.AppStreamDescribeSessionsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamDescribeSessionsResult: appstream.AppStreamDescribeSessionsResult = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamDescribeSessionsResult.property.nextToken"></a>

- *Type:* `string`

---

##### `sessions`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamDescribeSessionsResult.property.sessions"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamSession`](#aws-cdk-sdk.appstream.AppStreamSession)[]

---

### AppStreamDescribeStacksRequest <a name="aws-cdk-sdk.appstream.AppStreamDescribeStacksRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamDescribeStacksRequest: appstream.AppStreamDescribeStacksRequest = { ... }
```

##### `names`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamDescribeStacksRequest.property.names"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamDescribeStacksRequest.property.nextToken"></a>

- *Type:* `string`

---

### AppStreamDescribeStacksResult <a name="aws-cdk-sdk.appstream.AppStreamDescribeStacksResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamDescribeStacksResult: appstream.AppStreamDescribeStacksResult = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamDescribeStacksResult.property.nextToken"></a>

- *Type:* `string`

---

##### `stacks`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamDescribeStacksResult.property.stacks"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamStack`](#aws-cdk-sdk.appstream.AppStreamStack)[]

---

### AppStreamDescribeUsageReportSubscriptionsRequest <a name="aws-cdk-sdk.appstream.AppStreamDescribeUsageReportSubscriptionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamDescribeUsageReportSubscriptionsRequest: appstream.AppStreamDescribeUsageReportSubscriptionsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamDescribeUsageReportSubscriptionsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamDescribeUsageReportSubscriptionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### AppStreamDescribeUsageReportSubscriptionsResult <a name="aws-cdk-sdk.appstream.AppStreamDescribeUsageReportSubscriptionsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamDescribeUsageReportSubscriptionsResult: appstream.AppStreamDescribeUsageReportSubscriptionsResult = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamDescribeUsageReportSubscriptionsResult.property.nextToken"></a>

- *Type:* `string`

---

##### `usageReportSubscriptions`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamDescribeUsageReportSubscriptionsResult.property.usageReportSubscriptions"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamUsageReportSubscription`](#aws-cdk-sdk.appstream.AppStreamUsageReportSubscription)[]

---

### AppStreamDescribeUsersRequest <a name="aws-cdk-sdk.appstream.AppStreamDescribeUsersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamDescribeUsersRequest: appstream.AppStreamDescribeUsersRequest = { ... }
```

##### `authenticationType`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamDescribeUsersRequest.property.authenticationType"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamDescribeUsersRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamDescribeUsersRequest.property.nextToken"></a>

- *Type:* `string`

---

### AppStreamDescribeUsersResult <a name="aws-cdk-sdk.appstream.AppStreamDescribeUsersResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamDescribeUsersResult: appstream.AppStreamDescribeUsersResult = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamDescribeUsersResult.property.nextToken"></a>

- *Type:* `string`

---

##### `users`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamDescribeUsersResult.property.users"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamUser`](#aws-cdk-sdk.appstream.AppStreamUser)[]

---

### AppStreamDescribeUserStackAssociationsRequest <a name="aws-cdk-sdk.appstream.AppStreamDescribeUserStackAssociationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamDescribeUserStackAssociationsRequest: appstream.AppStreamDescribeUserStackAssociationsRequest = { ... }
```

##### `authenticationType`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamDescribeUserStackAssociationsRequest.property.authenticationType"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamDescribeUserStackAssociationsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamDescribeUserStackAssociationsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `stackName`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamDescribeUserStackAssociationsRequest.property.stackName"></a>

- *Type:* `string`

---

##### `userName`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamDescribeUserStackAssociationsRequest.property.userName"></a>

- *Type:* `string`

---

### AppStreamDescribeUserStackAssociationsResult <a name="aws-cdk-sdk.appstream.AppStreamDescribeUserStackAssociationsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamDescribeUserStackAssociationsResult: appstream.AppStreamDescribeUserStackAssociationsResult = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamDescribeUserStackAssociationsResult.property.nextToken"></a>

- *Type:* `string`

---

##### `userStackAssociations`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamDescribeUserStackAssociationsResult.property.userStackAssociations"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamUserStackAssociation`](#aws-cdk-sdk.appstream.AppStreamUserStackAssociation)[]

---

### AppStreamDirectoryConfig <a name="aws-cdk-sdk.appstream.AppStreamDirectoryConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamDirectoryConfig: appstream.AppStreamDirectoryConfig = { ... }
```

##### `directoryName`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamDirectoryConfig.property.directoryName"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamDirectoryConfig.property.createdTime"></a>

- *Type:* `string`

---

##### `organizationalUnitDistinguishedNames`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamDirectoryConfig.property.organizationalUnitDistinguishedNames"></a>

- *Type:* `string`[]

---

##### `serviceAccountCredentials`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamDirectoryConfig.property.serviceAccountCredentials"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamServiceAccountCredentials`](#aws-cdk-sdk.appstream.AppStreamServiceAccountCredentials)

---

### AppStreamDisableUserRequest <a name="aws-cdk-sdk.appstream.AppStreamDisableUserRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamDisableUserRequest: appstream.AppStreamDisableUserRequest = { ... }
```

##### `authenticationType`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamDisableUserRequest.property.authenticationType"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamDisableUserRequest.property.userName"></a>

- *Type:* `string`

---

### AppStreamDisableUserResult <a name="aws-cdk-sdk.appstream.AppStreamDisableUserResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamDisableUserResult: appstream.AppStreamDisableUserResult = { ... }
```

### AppStreamDisassociateFleetRequest <a name="aws-cdk-sdk.appstream.AppStreamDisassociateFleetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamDisassociateFleetRequest: appstream.AppStreamDisassociateFleetRequest = { ... }
```

##### `fleetName`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamDisassociateFleetRequest.property.fleetName"></a>

- *Type:* `string`

---

##### `stackName`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamDisassociateFleetRequest.property.stackName"></a>

- *Type:* `string`

---

### AppStreamDisassociateFleetResult <a name="aws-cdk-sdk.appstream.AppStreamDisassociateFleetResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamDisassociateFleetResult: appstream.AppStreamDisassociateFleetResult = { ... }
```

### AppStreamDomainJoinInfo <a name="aws-cdk-sdk.appstream.AppStreamDomainJoinInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamDomainJoinInfo: appstream.AppStreamDomainJoinInfo = { ... }
```

##### `directoryName`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamDomainJoinInfo.property.directoryName"></a>

- *Type:* `string`

---

##### `organizationalUnitDistinguishedName`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamDomainJoinInfo.property.organizationalUnitDistinguishedName"></a>

- *Type:* `string`

---

### AppStreamEnableUserRequest <a name="aws-cdk-sdk.appstream.AppStreamEnableUserRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamEnableUserRequest: appstream.AppStreamEnableUserRequest = { ... }
```

##### `authenticationType`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamEnableUserRequest.property.authenticationType"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamEnableUserRequest.property.userName"></a>

- *Type:* `string`

---

### AppStreamEnableUserResult <a name="aws-cdk-sdk.appstream.AppStreamEnableUserResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamEnableUserResult: appstream.AppStreamEnableUserResult = { ... }
```

### AppStreamExpireSessionRequest <a name="aws-cdk-sdk.appstream.AppStreamExpireSessionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamExpireSessionRequest: appstream.AppStreamExpireSessionRequest = { ... }
```

##### `sessionId`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamExpireSessionRequest.property.sessionId"></a>

- *Type:* `string`

---

### AppStreamExpireSessionResult <a name="aws-cdk-sdk.appstream.AppStreamExpireSessionResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamExpireSessionResult: appstream.AppStreamExpireSessionResult = { ... }
```

### AppStreamFleet <a name="aws-cdk-sdk.appstream.AppStreamFleet"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamFleet: appstream.AppStreamFleet = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamFleet.property.arn"></a>

- *Type:* `string`

---

##### `computeCapacityStatus`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamFleet.property.computeCapacityStatus"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamComputeCapacityStatus`](#aws-cdk-sdk.appstream.AppStreamComputeCapacityStatus)

---

##### `instanceType`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamFleet.property.instanceType"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamFleet.property.name"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamFleet.property.state"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamFleet.property.createdTime"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamFleet.property.description"></a>

- *Type:* `string`

---

##### `disconnectTimeoutInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamFleet.property.disconnectTimeoutInSeconds"></a>

- *Type:* `number`

---

##### `displayName`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamFleet.property.displayName"></a>

- *Type:* `string`

---

##### `domainJoinInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamFleet.property.domainJoinInfo"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamDomainJoinInfo`](#aws-cdk-sdk.appstream.AppStreamDomainJoinInfo)

---

##### `enableDefaultInternetAccess`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamFleet.property.enableDefaultInternetAccess"></a>

- *Type:* `boolean`

---

##### `fleetErrors`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamFleet.property.fleetErrors"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamFleetError`](#aws-cdk-sdk.appstream.AppStreamFleetError)[]

---

##### `fleetType`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamFleet.property.fleetType"></a>

- *Type:* `string`

---

##### `iamRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamFleet.property.iamRoleArn"></a>

- *Type:* `string`

---

##### `idleDisconnectTimeoutInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamFleet.property.idleDisconnectTimeoutInSeconds"></a>

- *Type:* `number`

---

##### `imageArn`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamFleet.property.imageArn"></a>

- *Type:* `string`

---

##### `imageName`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamFleet.property.imageName"></a>

- *Type:* `string`

---

##### `maxUserDurationInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamFleet.property.maxUserDurationInSeconds"></a>

- *Type:* `number`

---

##### `streamView`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamFleet.property.streamView"></a>

- *Type:* `string`

---

##### `vpcConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamFleet.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamVpcConfig`](#aws-cdk-sdk.appstream.AppStreamVpcConfig)

---

### AppStreamFleetError <a name="aws-cdk-sdk.appstream.AppStreamFleetError"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamFleetError: appstream.AppStreamFleetError = { ... }
```

##### `errorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamFleetError.property.errorCode"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamFleetError.property.errorMessage"></a>

- *Type:* `string`

---

### AppStreamImage <a name="aws-cdk-sdk.appstream.AppStreamImage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamImage: appstream.AppStreamImage = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamImage.property.name"></a>

- *Type:* `string`

---

##### `applications`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamImage.property.applications"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamApplication`](#aws-cdk-sdk.appstream.AppStreamApplication)[]

---

##### `appstreamAgentVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamImage.property.appstreamAgentVersion"></a>

- *Type:* `string`

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamImage.property.arn"></a>

- *Type:* `string`

---

##### `baseImageArn`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamImage.property.baseImageArn"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamImage.property.createdTime"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamImage.property.description"></a>

- *Type:* `string`

---

##### `displayName`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamImage.property.displayName"></a>

- *Type:* `string`

---

##### `imageBuilderName`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamImage.property.imageBuilderName"></a>

- *Type:* `string`

---

##### `imageBuilderSupported`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamImage.property.imageBuilderSupported"></a>

- *Type:* `boolean`

---

##### `imagePermissions`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamImage.property.imagePermissions"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamImagePermissions`](#aws-cdk-sdk.appstream.AppStreamImagePermissions)

---

##### `platform`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamImage.property.platform"></a>

- *Type:* `string`

---

##### `publicBaseImageReleasedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamImage.property.publicBaseImageReleasedDate"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamImage.property.state"></a>

- *Type:* `string`

---

##### `stateChangeReason`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamImage.property.stateChangeReason"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamImageStateChangeReason`](#aws-cdk-sdk.appstream.AppStreamImageStateChangeReason)

---

##### `visibility`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamImage.property.visibility"></a>

- *Type:* `string`

---

### AppStreamImageBuilder <a name="aws-cdk-sdk.appstream.AppStreamImageBuilder"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamImageBuilder: appstream.AppStreamImageBuilder = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamImageBuilder.property.name"></a>

- *Type:* `string`

---

##### `accessEndpoints`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamImageBuilder.property.accessEndpoints"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamAccessEndpoint`](#aws-cdk-sdk.appstream.AppStreamAccessEndpoint)[]

---

##### `appstreamAgentVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamImageBuilder.property.appstreamAgentVersion"></a>

- *Type:* `string`

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamImageBuilder.property.arn"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamImageBuilder.property.createdTime"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamImageBuilder.property.description"></a>

- *Type:* `string`

---

##### `displayName`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamImageBuilder.property.displayName"></a>

- *Type:* `string`

---

##### `domainJoinInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamImageBuilder.property.domainJoinInfo"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamDomainJoinInfo`](#aws-cdk-sdk.appstream.AppStreamDomainJoinInfo)

---

##### `enableDefaultInternetAccess`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamImageBuilder.property.enableDefaultInternetAccess"></a>

- *Type:* `boolean`

---

##### `iamRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamImageBuilder.property.iamRoleArn"></a>

- *Type:* `string`

---

##### `imageArn`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamImageBuilder.property.imageArn"></a>

- *Type:* `string`

---

##### `imageBuilderErrors`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamImageBuilder.property.imageBuilderErrors"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamResourceError`](#aws-cdk-sdk.appstream.AppStreamResourceError)[]

---

##### `instanceType`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamImageBuilder.property.instanceType"></a>

- *Type:* `string`

---

##### `networkAccessConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamImageBuilder.property.networkAccessConfiguration"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamNetworkAccessConfiguration`](#aws-cdk-sdk.appstream.AppStreamNetworkAccessConfiguration)

---

##### `platform`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamImageBuilder.property.platform"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamImageBuilder.property.state"></a>

- *Type:* `string`

---

##### `stateChangeReason`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamImageBuilder.property.stateChangeReason"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamImageBuilderStateChangeReason`](#aws-cdk-sdk.appstream.AppStreamImageBuilderStateChangeReason)

---

##### `vpcConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamImageBuilder.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamVpcConfig`](#aws-cdk-sdk.appstream.AppStreamVpcConfig)

---

### AppStreamImageBuilderStateChangeReason <a name="aws-cdk-sdk.appstream.AppStreamImageBuilderStateChangeReason"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamImageBuilderStateChangeReason: appstream.AppStreamImageBuilderStateChangeReason = { ... }
```

##### `code`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamImageBuilderStateChangeReason.property.code"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamImageBuilderStateChangeReason.property.message"></a>

- *Type:* `string`

---

### AppStreamImagePermissions <a name="aws-cdk-sdk.appstream.AppStreamImagePermissions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamImagePermissions: appstream.AppStreamImagePermissions = { ... }
```

##### `allowFleet`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamImagePermissions.property.allowFleet"></a>

- *Type:* `boolean`

---

##### `allowImageBuilder`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamImagePermissions.property.allowImageBuilder"></a>

- *Type:* `boolean`

---

### AppStreamImageStateChangeReason <a name="aws-cdk-sdk.appstream.AppStreamImageStateChangeReason"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamImageStateChangeReason: appstream.AppStreamImageStateChangeReason = { ... }
```

##### `code`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamImageStateChangeReason.property.code"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamImageStateChangeReason.property.message"></a>

- *Type:* `string`

---

### AppStreamLastReportGenerationExecutionError <a name="aws-cdk-sdk.appstream.AppStreamLastReportGenerationExecutionError"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamLastReportGenerationExecutionError: appstream.AppStreamLastReportGenerationExecutionError = { ... }
```

##### `errorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamLastReportGenerationExecutionError.property.errorCode"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamLastReportGenerationExecutionError.property.errorMessage"></a>

- *Type:* `string`

---

### AppStreamListAssociatedFleetsRequest <a name="aws-cdk-sdk.appstream.AppStreamListAssociatedFleetsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamListAssociatedFleetsRequest: appstream.AppStreamListAssociatedFleetsRequest = { ... }
```

##### `stackName`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamListAssociatedFleetsRequest.property.stackName"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamListAssociatedFleetsRequest.property.nextToken"></a>

- *Type:* `string`

---

### AppStreamListAssociatedFleetsResult <a name="aws-cdk-sdk.appstream.AppStreamListAssociatedFleetsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamListAssociatedFleetsResult: appstream.AppStreamListAssociatedFleetsResult = { ... }
```

##### `names`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamListAssociatedFleetsResult.property.names"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamListAssociatedFleetsResult.property.nextToken"></a>

- *Type:* `string`

---

### AppStreamListAssociatedStacksRequest <a name="aws-cdk-sdk.appstream.AppStreamListAssociatedStacksRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamListAssociatedStacksRequest: appstream.AppStreamListAssociatedStacksRequest = { ... }
```

##### `fleetName`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamListAssociatedStacksRequest.property.fleetName"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamListAssociatedStacksRequest.property.nextToken"></a>

- *Type:* `string`

---

### AppStreamListAssociatedStacksResult <a name="aws-cdk-sdk.appstream.AppStreamListAssociatedStacksResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamListAssociatedStacksResult: appstream.AppStreamListAssociatedStacksResult = { ... }
```

##### `names`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamListAssociatedStacksResult.property.names"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamListAssociatedStacksResult.property.nextToken"></a>

- *Type:* `string`

---

### AppStreamListTagsForResourceRequest <a name="aws-cdk-sdk.appstream.AppStreamListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamListTagsForResourceRequest: appstream.AppStreamListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### AppStreamListTagsForResourceResponse <a name="aws-cdk-sdk.appstream.AppStreamListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamListTagsForResourceResponse: appstream.AppStreamListTagsForResourceResponse = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamListTagsForResourceResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### AppStreamNetworkAccessConfiguration <a name="aws-cdk-sdk.appstream.AppStreamNetworkAccessConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamNetworkAccessConfiguration: appstream.AppStreamNetworkAccessConfiguration = { ... }
```

##### `eniId`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamNetworkAccessConfiguration.property.eniId"></a>

- *Type:* `string`

---

##### `eniPrivateIpAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamNetworkAccessConfiguration.property.eniPrivateIpAddress"></a>

- *Type:* `string`

---

### AppStreamResourceError <a name="aws-cdk-sdk.appstream.AppStreamResourceError"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamResourceError: appstream.AppStreamResourceError = { ... }
```

##### `errorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamResourceError.property.errorCode"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamResourceError.property.errorMessage"></a>

- *Type:* `string`

---

##### `errorTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamResourceError.property.errorTimestamp"></a>

- *Type:* `string`

---

### AppStreamServiceAccountCredentials <a name="aws-cdk-sdk.appstream.AppStreamServiceAccountCredentials"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamServiceAccountCredentials: appstream.AppStreamServiceAccountCredentials = { ... }
```

##### `accountName`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamServiceAccountCredentials.property.accountName"></a>

- *Type:* `string`

---

##### `accountPassword`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamServiceAccountCredentials.property.accountPassword"></a>

- *Type:* `string`

---

### AppStreamSession <a name="aws-cdk-sdk.appstream.AppStreamSession"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamSession: appstream.AppStreamSession = { ... }
```

##### `fleetName`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamSession.property.fleetName"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamSession.property.id"></a>

- *Type:* `string`

---

##### `stackName`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamSession.property.stackName"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamSession.property.state"></a>

- *Type:* `string`

---

##### `userId`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamSession.property.userId"></a>

- *Type:* `string`

---

##### `authenticationType`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamSession.property.authenticationType"></a>

- *Type:* `string`

---

##### `connectionState`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamSession.property.connectionState"></a>

- *Type:* `string`

---

##### `maxExpirationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamSession.property.maxExpirationTime"></a>

- *Type:* `string`

---

##### `networkAccessConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamSession.property.networkAccessConfiguration"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamNetworkAccessConfiguration`](#aws-cdk-sdk.appstream.AppStreamNetworkAccessConfiguration)

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamSession.property.startTime"></a>

- *Type:* `string`

---

### AppStreamSharedImagePermissions <a name="aws-cdk-sdk.appstream.AppStreamSharedImagePermissions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamSharedImagePermissions: appstream.AppStreamSharedImagePermissions = { ... }
```

##### `imagePermissions`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamSharedImagePermissions.property.imagePermissions"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamImagePermissions`](#aws-cdk-sdk.appstream.AppStreamImagePermissions)

---

##### `sharedAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamSharedImagePermissions.property.sharedAccountId"></a>

- *Type:* `string`

---

### AppStreamStack <a name="aws-cdk-sdk.appstream.AppStreamStack"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamStack: appstream.AppStreamStack = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamStack.property.name"></a>

- *Type:* `string`

---

##### `accessEndpoints`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamStack.property.accessEndpoints"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamAccessEndpoint`](#aws-cdk-sdk.appstream.AppStreamAccessEndpoint)[]

---

##### `applicationSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamStack.property.applicationSettings"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamApplicationSettingsResponse`](#aws-cdk-sdk.appstream.AppStreamApplicationSettingsResponse)

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamStack.property.arn"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamStack.property.createdTime"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamStack.property.description"></a>

- *Type:* `string`

---

##### `displayName`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamStack.property.displayName"></a>

- *Type:* `string`

---

##### `embedHostDomains`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamStack.property.embedHostDomains"></a>

- *Type:* `string`[]

---

##### `feedbackUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamStack.property.feedbackUrl"></a>

- *Type:* `string`

---

##### `redirectUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamStack.property.redirectUrl"></a>

- *Type:* `string`

---

##### `stackErrors`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamStack.property.stackErrors"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamStackError`](#aws-cdk-sdk.appstream.AppStreamStackError)[]

---

##### `storageConnectors`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamStack.property.storageConnectors"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamStorageConnector`](#aws-cdk-sdk.appstream.AppStreamStorageConnector)[]

---

##### `userSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamStack.property.userSettings"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamUserSetting`](#aws-cdk-sdk.appstream.AppStreamUserSetting)[]

---

### AppStreamStackError <a name="aws-cdk-sdk.appstream.AppStreamStackError"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamStackError: appstream.AppStreamStackError = { ... }
```

##### `errorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamStackError.property.errorCode"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamStackError.property.errorMessage"></a>

- *Type:* `string`

---

### AppStreamStartFleetRequest <a name="aws-cdk-sdk.appstream.AppStreamStartFleetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamStartFleetRequest: appstream.AppStreamStartFleetRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamStartFleetRequest.property.name"></a>

- *Type:* `string`

---

### AppStreamStartFleetResult <a name="aws-cdk-sdk.appstream.AppStreamStartFleetResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamStartFleetResult: appstream.AppStreamStartFleetResult = { ... }
```

### AppStreamStartImageBuilderRequest <a name="aws-cdk-sdk.appstream.AppStreamStartImageBuilderRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamStartImageBuilderRequest: appstream.AppStreamStartImageBuilderRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamStartImageBuilderRequest.property.name"></a>

- *Type:* `string`

---

##### `appstreamAgentVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamStartImageBuilderRequest.property.appstreamAgentVersion"></a>

- *Type:* `string`

---

### AppStreamStartImageBuilderResult <a name="aws-cdk-sdk.appstream.AppStreamStartImageBuilderResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamStartImageBuilderResult: appstream.AppStreamStartImageBuilderResult = { ... }
```

##### `imageBuilder`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamStartImageBuilderResult.property.imageBuilder"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamImageBuilder`](#aws-cdk-sdk.appstream.AppStreamImageBuilder)

---

### AppStreamStopFleetRequest <a name="aws-cdk-sdk.appstream.AppStreamStopFleetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamStopFleetRequest: appstream.AppStreamStopFleetRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamStopFleetRequest.property.name"></a>

- *Type:* `string`

---

### AppStreamStopFleetResult <a name="aws-cdk-sdk.appstream.AppStreamStopFleetResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamStopFleetResult: appstream.AppStreamStopFleetResult = { ... }
```

### AppStreamStopImageBuilderRequest <a name="aws-cdk-sdk.appstream.AppStreamStopImageBuilderRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamStopImageBuilderRequest: appstream.AppStreamStopImageBuilderRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamStopImageBuilderRequest.property.name"></a>

- *Type:* `string`

---

### AppStreamStopImageBuilderResult <a name="aws-cdk-sdk.appstream.AppStreamStopImageBuilderResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamStopImageBuilderResult: appstream.AppStreamStopImageBuilderResult = { ... }
```

##### `imageBuilder`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamStopImageBuilderResult.property.imageBuilder"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamImageBuilder`](#aws-cdk-sdk.appstream.AppStreamImageBuilder)

---

### AppStreamStorageConnector <a name="aws-cdk-sdk.appstream.AppStreamStorageConnector"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamStorageConnector: appstream.AppStreamStorageConnector = { ... }
```

##### `connectorType`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamStorageConnector.property.connectorType"></a>

- *Type:* `string`

---

##### `domains`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamStorageConnector.property.domains"></a>

- *Type:* `string`[]

---

##### `resourceIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamStorageConnector.property.resourceIdentifier"></a>

- *Type:* `string`

---

### AppStreamTagResourceRequest <a name="aws-cdk-sdk.appstream.AppStreamTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamTagResourceRequest: appstream.AppStreamTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamTagResourceRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### AppStreamTagResourceResponse <a name="aws-cdk-sdk.appstream.AppStreamTagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamTagResourceResponse: appstream.AppStreamTagResourceResponse = { ... }
```

### AppStreamUntagResourceRequest <a name="aws-cdk-sdk.appstream.AppStreamUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamUntagResourceRequest: appstream.AppStreamUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### AppStreamUntagResourceResponse <a name="aws-cdk-sdk.appstream.AppStreamUntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamUntagResourceResponse: appstream.AppStreamUntagResourceResponse = { ... }
```

### AppStreamUpdateDirectoryConfigRequest <a name="aws-cdk-sdk.appstream.AppStreamUpdateDirectoryConfigRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamUpdateDirectoryConfigRequest: appstream.AppStreamUpdateDirectoryConfigRequest = { ... }
```

##### `directoryName`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamUpdateDirectoryConfigRequest.property.directoryName"></a>

- *Type:* `string`

---

##### `organizationalUnitDistinguishedNames`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamUpdateDirectoryConfigRequest.property.organizationalUnitDistinguishedNames"></a>

- *Type:* `string`[]

---

##### `serviceAccountCredentials`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamUpdateDirectoryConfigRequest.property.serviceAccountCredentials"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamServiceAccountCredentials`](#aws-cdk-sdk.appstream.AppStreamServiceAccountCredentials)

---

### AppStreamUpdateDirectoryConfigResult <a name="aws-cdk-sdk.appstream.AppStreamUpdateDirectoryConfigResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamUpdateDirectoryConfigResult: appstream.AppStreamUpdateDirectoryConfigResult = { ... }
```

##### `directoryConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamUpdateDirectoryConfigResult.property.directoryConfig"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamDirectoryConfig`](#aws-cdk-sdk.appstream.AppStreamDirectoryConfig)

---

### AppStreamUpdateFleetRequest <a name="aws-cdk-sdk.appstream.AppStreamUpdateFleetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamUpdateFleetRequest: appstream.AppStreamUpdateFleetRequest = { ... }
```

##### `attributesToDelete`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamUpdateFleetRequest.property.attributesToDelete"></a>

- *Type:* `string`[]

---

##### `computeCapacity`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamUpdateFleetRequest.property.computeCapacity"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamComputeCapacity`](#aws-cdk-sdk.appstream.AppStreamComputeCapacity)

---

##### `deleteVpcConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamUpdateFleetRequest.property.deleteVpcConfig"></a>

- *Type:* `boolean`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamUpdateFleetRequest.property.description"></a>

- *Type:* `string`

---

##### `disconnectTimeoutInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamUpdateFleetRequest.property.disconnectTimeoutInSeconds"></a>

- *Type:* `number`

---

##### `displayName`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamUpdateFleetRequest.property.displayName"></a>

- *Type:* `string`

---

##### `domainJoinInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamUpdateFleetRequest.property.domainJoinInfo"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamDomainJoinInfo`](#aws-cdk-sdk.appstream.AppStreamDomainJoinInfo)

---

##### `enableDefaultInternetAccess`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamUpdateFleetRequest.property.enableDefaultInternetAccess"></a>

- *Type:* `boolean`

---

##### `iamRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamUpdateFleetRequest.property.iamRoleArn"></a>

- *Type:* `string`

---

##### `idleDisconnectTimeoutInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamUpdateFleetRequest.property.idleDisconnectTimeoutInSeconds"></a>

- *Type:* `number`

---

##### `imageArn`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamUpdateFleetRequest.property.imageArn"></a>

- *Type:* `string`

---

##### `imageName`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamUpdateFleetRequest.property.imageName"></a>

- *Type:* `string`

---

##### `instanceType`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamUpdateFleetRequest.property.instanceType"></a>

- *Type:* `string`

---

##### `maxUserDurationInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamUpdateFleetRequest.property.maxUserDurationInSeconds"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamUpdateFleetRequest.property.name"></a>

- *Type:* `string`

---

##### `streamView`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamUpdateFleetRequest.property.streamView"></a>

- *Type:* `string`

---

##### `vpcConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamUpdateFleetRequest.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamVpcConfig`](#aws-cdk-sdk.appstream.AppStreamVpcConfig)

---

### AppStreamUpdateFleetResult <a name="aws-cdk-sdk.appstream.AppStreamUpdateFleetResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamUpdateFleetResult: appstream.AppStreamUpdateFleetResult = { ... }
```

##### `fleet`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamUpdateFleetResult.property.fleet"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamFleet`](#aws-cdk-sdk.appstream.AppStreamFleet)

---

### AppStreamUpdateImagePermissionsRequest <a name="aws-cdk-sdk.appstream.AppStreamUpdateImagePermissionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamUpdateImagePermissionsRequest: appstream.AppStreamUpdateImagePermissionsRequest = { ... }
```

##### `imagePermissions`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamUpdateImagePermissionsRequest.property.imagePermissions"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamImagePermissions`](#aws-cdk-sdk.appstream.AppStreamImagePermissions)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamUpdateImagePermissionsRequest.property.name"></a>

- *Type:* `string`

---

##### `sharedAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamUpdateImagePermissionsRequest.property.sharedAccountId"></a>

- *Type:* `string`

---

### AppStreamUpdateImagePermissionsResult <a name="aws-cdk-sdk.appstream.AppStreamUpdateImagePermissionsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamUpdateImagePermissionsResult: appstream.AppStreamUpdateImagePermissionsResult = { ... }
```

### AppStreamUpdateStackRequest <a name="aws-cdk-sdk.appstream.AppStreamUpdateStackRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamUpdateStackRequest: appstream.AppStreamUpdateStackRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamUpdateStackRequest.property.name"></a>

- *Type:* `string`

---

##### `accessEndpoints`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamUpdateStackRequest.property.accessEndpoints"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamAccessEndpoint`](#aws-cdk-sdk.appstream.AppStreamAccessEndpoint)[]

---

##### `applicationSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamUpdateStackRequest.property.applicationSettings"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamApplicationSettings`](#aws-cdk-sdk.appstream.AppStreamApplicationSettings)

---

##### `attributesToDelete`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamUpdateStackRequest.property.attributesToDelete"></a>

- *Type:* `string`[]

---

##### `deleteStorageConnectors`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamUpdateStackRequest.property.deleteStorageConnectors"></a>

- *Type:* `boolean`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamUpdateStackRequest.property.description"></a>

- *Type:* `string`

---

##### `displayName`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamUpdateStackRequest.property.displayName"></a>

- *Type:* `string`

---

##### `embedHostDomains`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamUpdateStackRequest.property.embedHostDomains"></a>

- *Type:* `string`[]

---

##### `feedbackUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamUpdateStackRequest.property.feedbackUrl"></a>

- *Type:* `string`

---

##### `redirectUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamUpdateStackRequest.property.redirectUrl"></a>

- *Type:* `string`

---

##### `storageConnectors`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamUpdateStackRequest.property.storageConnectors"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamStorageConnector`](#aws-cdk-sdk.appstream.AppStreamStorageConnector)[]

---

##### `userSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamUpdateStackRequest.property.userSettings"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamUserSetting`](#aws-cdk-sdk.appstream.AppStreamUserSetting)[]

---

### AppStreamUpdateStackResult <a name="aws-cdk-sdk.appstream.AppStreamUpdateStackResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamUpdateStackResult: appstream.AppStreamUpdateStackResult = { ... }
```

##### `stack`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamUpdateStackResult.property.stack"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamStack`](#aws-cdk-sdk.appstream.AppStreamStack)

---

### AppStreamUsageReportSubscription <a name="aws-cdk-sdk.appstream.AppStreamUsageReportSubscription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamUsageReportSubscription: appstream.AppStreamUsageReportSubscription = { ... }
```

##### `lastGeneratedReportDate`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamUsageReportSubscription.property.lastGeneratedReportDate"></a>

- *Type:* `string`

---

##### `s3BucketName`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamUsageReportSubscription.property.s3BucketName"></a>

- *Type:* `string`

---

##### `schedule`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamUsageReportSubscription.property.schedule"></a>

- *Type:* `string`

---

##### `subscriptionErrors`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamUsageReportSubscription.property.subscriptionErrors"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamLastReportGenerationExecutionError`](#aws-cdk-sdk.appstream.AppStreamLastReportGenerationExecutionError)[]

---

### AppStreamUser <a name="aws-cdk-sdk.appstream.AppStreamUser"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamUser: appstream.AppStreamUser = { ... }
```

##### `authenticationType`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamUser.property.authenticationType"></a>

- *Type:* `string`

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamUser.property.arn"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamUser.property.createdTime"></a>

- *Type:* `string`

---

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamUser.property.enabled"></a>

- *Type:* `boolean`

---

##### `firstName`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamUser.property.firstName"></a>

- *Type:* `string`

---

##### `lastName`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamUser.property.lastName"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamUser.property.status"></a>

- *Type:* `string`

---

##### `userName`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamUser.property.userName"></a>

- *Type:* `string`

---

### AppStreamUserSetting <a name="aws-cdk-sdk.appstream.AppStreamUserSetting"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamUserSetting: appstream.AppStreamUserSetting = { ... }
```

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamUserSetting.property.action"></a>

- *Type:* `string`

---

##### `permission`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamUserSetting.property.permission"></a>

- *Type:* `string`

---

### AppStreamUserStackAssociation <a name="aws-cdk-sdk.appstream.AppStreamUserStackAssociation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamUserStackAssociation: appstream.AppStreamUserStackAssociation = { ... }
```

##### `authenticationType`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamUserStackAssociation.property.authenticationType"></a>

- *Type:* `string`

---

##### `stackName`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamUserStackAssociation.property.stackName"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamUserStackAssociation.property.userName"></a>

- *Type:* `string`

---

##### `sendEmailNotification`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamUserStackAssociation.property.sendEmailNotification"></a>

- *Type:* `boolean`

---

### AppStreamUserStackAssociationError <a name="aws-cdk-sdk.appstream.AppStreamUserStackAssociationError"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamUserStackAssociationError: appstream.AppStreamUserStackAssociationError = { ... }
```

##### `errorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamUserStackAssociationError.property.errorCode"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamUserStackAssociationError.property.errorMessage"></a>

- *Type:* `string`

---

##### `userStackAssociation`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamUserStackAssociationError.property.userStackAssociation"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamUserStackAssociation`](#aws-cdk-sdk.appstream.AppStreamUserStackAssociation)

---

### AppStreamVpcConfig <a name="aws-cdk-sdk.appstream.AppStreamVpcConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

const appStreamVpcConfig: appstream.AppStreamVpcConfig = { ... }
```

##### `securityGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamVpcConfig.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnetIds`<sup>Optional</sup> <a name="aws-cdk-sdk.appstream.AppStreamVpcConfig.property.subnetIds"></a>

- *Type:* `string`[]

---

## Classes <a name="Classes"></a>

### AppStreamResponsesBatchAssociateUserStack <a name="aws-cdk-sdk.appstream.AppStreamResponsesBatchAssociateUserStack"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesBatchAssociateUserStack.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesBatchAssociateUserStack(__scope: Construct, __resources: string[], __input: AppStreamBatchAssociateUserStackRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesBatchAssociateUserStack.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesBatchAssociateUserStack.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesBatchAssociateUserStack.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamBatchAssociateUserStackRequest`](#aws-cdk-sdk.appstream.AppStreamBatchAssociateUserStackRequest)

---



#### Properties <a name="Properties"></a>

##### `errors`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesBatchAssociateUserStack.property.errors"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamUserStackAssociationError`](#aws-cdk-sdk.appstream.AppStreamUserStackAssociationError)[]

---


### AppStreamResponsesBatchDisassociateUserStack <a name="aws-cdk-sdk.appstream.AppStreamResponsesBatchDisassociateUserStack"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesBatchDisassociateUserStack.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesBatchDisassociateUserStack(__scope: Construct, __resources: string[], __input: AppStreamBatchDisassociateUserStackRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesBatchDisassociateUserStack.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesBatchDisassociateUserStack.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesBatchDisassociateUserStack.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamBatchDisassociateUserStackRequest`](#aws-cdk-sdk.appstream.AppStreamBatchDisassociateUserStackRequest)

---



#### Properties <a name="Properties"></a>

##### `errors`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesBatchDisassociateUserStack.property.errors"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamUserStackAssociationError`](#aws-cdk-sdk.appstream.AppStreamUserStackAssociationError)[]

---


### AppStreamResponsesCopyImage <a name="aws-cdk-sdk.appstream.AppStreamResponsesCopyImage"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesCopyImage.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesCopyImage(__scope: Construct, __resources: string[], __input: AppStreamCopyImageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCopyImage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCopyImage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCopyImage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamCopyImageRequest`](#aws-cdk-sdk.appstream.AppStreamCopyImageRequest)

---



#### Properties <a name="Properties"></a>

##### `destinationImageName`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCopyImage.property.destinationImageName"></a>

- *Type:* `string`

---


### AppStreamResponsesCreateDirectoryConfig <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateDirectoryConfig"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateDirectoryConfig.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesCreateDirectoryConfig(__scope: Construct, __resources: string[], __input: AppStreamCreateDirectoryConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateDirectoryConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateDirectoryConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateDirectoryConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamCreateDirectoryConfigRequest`](#aws-cdk-sdk.appstream.AppStreamCreateDirectoryConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `directoryConfig`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateDirectoryConfig.property.directoryConfig"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamResponsesCreateDirectoryConfigDirectoryConfig`](#aws-cdk-sdk.appstream.AppStreamResponsesCreateDirectoryConfigDirectoryConfig)

---


### AppStreamResponsesCreateDirectoryConfigDirectoryConfig <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateDirectoryConfigDirectoryConfig"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateDirectoryConfigDirectoryConfig.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesCreateDirectoryConfigDirectoryConfig(__scope: Construct, __resources: string[], __input: AppStreamCreateDirectoryConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateDirectoryConfigDirectoryConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateDirectoryConfigDirectoryConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateDirectoryConfigDirectoryConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamCreateDirectoryConfigRequest`](#aws-cdk-sdk.appstream.AppStreamCreateDirectoryConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `createdTime`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateDirectoryConfigDirectoryConfig.property.createdTime"></a>

- *Type:* `string`

---

##### `directoryName`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateDirectoryConfigDirectoryConfig.property.directoryName"></a>

- *Type:* `string`

---

##### `organizationalUnitDistinguishedNames`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateDirectoryConfigDirectoryConfig.property.organizationalUnitDistinguishedNames"></a>

- *Type:* `string`[]

---

##### `serviceAccountCredentials`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateDirectoryConfigDirectoryConfig.property.serviceAccountCredentials"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamResponsesCreateDirectoryConfigDirectoryConfigServiceAccountCredentials`](#aws-cdk-sdk.appstream.AppStreamResponsesCreateDirectoryConfigDirectoryConfigServiceAccountCredentials)

---


### AppStreamResponsesCreateDirectoryConfigDirectoryConfigServiceAccountCredentials <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateDirectoryConfigDirectoryConfigServiceAccountCredentials"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateDirectoryConfigDirectoryConfigServiceAccountCredentials.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesCreateDirectoryConfigDirectoryConfigServiceAccountCredentials(__scope: Construct, __resources: string[], __input: AppStreamCreateDirectoryConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateDirectoryConfigDirectoryConfigServiceAccountCredentials.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateDirectoryConfigDirectoryConfigServiceAccountCredentials.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateDirectoryConfigDirectoryConfigServiceAccountCredentials.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamCreateDirectoryConfigRequest`](#aws-cdk-sdk.appstream.AppStreamCreateDirectoryConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `accountName`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateDirectoryConfigDirectoryConfigServiceAccountCredentials.property.accountName"></a>

- *Type:* `string`

---

##### `accountPassword`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateDirectoryConfigDirectoryConfigServiceAccountCredentials.property.accountPassword"></a>

- *Type:* `string`

---


### AppStreamResponsesCreateFleet <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateFleet"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateFleet.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesCreateFleet(__scope: Construct, __resources: string[], __input: AppStreamCreateFleetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateFleet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateFleet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateFleet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamCreateFleetRequest`](#aws-cdk-sdk.appstream.AppStreamCreateFleetRequest)

---



#### Properties <a name="Properties"></a>

##### `fleet`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateFleet.property.fleet"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamResponsesCreateFleetFleet`](#aws-cdk-sdk.appstream.AppStreamResponsesCreateFleetFleet)

---


### AppStreamResponsesCreateFleetFleet <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateFleetFleet"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateFleetFleet.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesCreateFleetFleet(__scope: Construct, __resources: string[], __input: AppStreamCreateFleetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateFleetFleet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateFleetFleet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateFleetFleet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamCreateFleetRequest`](#aws-cdk-sdk.appstream.AppStreamCreateFleetRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateFleetFleet.property.arn"></a>

- *Type:* `string`

---

##### `computeCapacityStatus`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateFleetFleet.property.computeCapacityStatus"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamResponsesCreateFleetFleetComputeCapacityStatus`](#aws-cdk-sdk.appstream.AppStreamResponsesCreateFleetFleetComputeCapacityStatus)

---

##### `createdTime`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateFleetFleet.property.createdTime"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateFleetFleet.property.description"></a>

- *Type:* `string`

---

##### `disconnectTimeoutInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateFleetFleet.property.disconnectTimeoutInSeconds"></a>

- *Type:* `number`

---

##### `displayName`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateFleetFleet.property.displayName"></a>

- *Type:* `string`

---

##### `domainJoinInfo`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateFleetFleet.property.domainJoinInfo"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamResponsesCreateFleetFleetDomainJoinInfo`](#aws-cdk-sdk.appstream.AppStreamResponsesCreateFleetFleetDomainJoinInfo)

---

##### `enableDefaultInternetAccess`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateFleetFleet.property.enableDefaultInternetAccess"></a>

- *Type:* `boolean`

---

##### `fleetErrors`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateFleetFleet.property.fleetErrors"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamFleetError`](#aws-cdk-sdk.appstream.AppStreamFleetError)[]

---

##### `fleetType`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateFleetFleet.property.fleetType"></a>

- *Type:* `string`

---

##### `iamRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateFleetFleet.property.iamRoleArn"></a>

- *Type:* `string`

---

##### `idleDisconnectTimeoutInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateFleetFleet.property.idleDisconnectTimeoutInSeconds"></a>

- *Type:* `number`

---

##### `imageArn`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateFleetFleet.property.imageArn"></a>

- *Type:* `string`

---

##### `imageName`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateFleetFleet.property.imageName"></a>

- *Type:* `string`

---

##### `instanceType`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateFleetFleet.property.instanceType"></a>

- *Type:* `string`

---

##### `maxUserDurationInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateFleetFleet.property.maxUserDurationInSeconds"></a>

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateFleetFleet.property.name"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateFleetFleet.property.state"></a>

- *Type:* `string`

---

##### `streamView`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateFleetFleet.property.streamView"></a>

- *Type:* `string`

---

##### `vpcConfig`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateFleetFleet.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamResponsesCreateFleetFleetVpcConfig`](#aws-cdk-sdk.appstream.AppStreamResponsesCreateFleetFleetVpcConfig)

---


### AppStreamResponsesCreateFleetFleetComputeCapacityStatus <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateFleetFleetComputeCapacityStatus"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateFleetFleetComputeCapacityStatus.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesCreateFleetFleetComputeCapacityStatus(__scope: Construct, __resources: string[], __input: AppStreamCreateFleetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateFleetFleetComputeCapacityStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateFleetFleetComputeCapacityStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateFleetFleetComputeCapacityStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamCreateFleetRequest`](#aws-cdk-sdk.appstream.AppStreamCreateFleetRequest)

---



#### Properties <a name="Properties"></a>

##### `available`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateFleetFleetComputeCapacityStatus.property.available"></a>

- *Type:* `number`

---

##### `desired`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateFleetFleetComputeCapacityStatus.property.desired"></a>

- *Type:* `number`

---

##### `inUse`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateFleetFleetComputeCapacityStatus.property.inUse"></a>

- *Type:* `number`

---

##### `running`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateFleetFleetComputeCapacityStatus.property.running"></a>

- *Type:* `number`

---


### AppStreamResponsesCreateFleetFleetDomainJoinInfo <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateFleetFleetDomainJoinInfo"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateFleetFleetDomainJoinInfo.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesCreateFleetFleetDomainJoinInfo(__scope: Construct, __resources: string[], __input: AppStreamCreateFleetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateFleetFleetDomainJoinInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateFleetFleetDomainJoinInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateFleetFleetDomainJoinInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamCreateFleetRequest`](#aws-cdk-sdk.appstream.AppStreamCreateFleetRequest)

---



#### Properties <a name="Properties"></a>

##### `directoryName`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateFleetFleetDomainJoinInfo.property.directoryName"></a>

- *Type:* `string`

---

##### `organizationalUnitDistinguishedName`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateFleetFleetDomainJoinInfo.property.organizationalUnitDistinguishedName"></a>

- *Type:* `string`

---


### AppStreamResponsesCreateFleetFleetVpcConfig <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateFleetFleetVpcConfig"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateFleetFleetVpcConfig.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesCreateFleetFleetVpcConfig(__scope: Construct, __resources: string[], __input: AppStreamCreateFleetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateFleetFleetVpcConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateFleetFleetVpcConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateFleetFleetVpcConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamCreateFleetRequest`](#aws-cdk-sdk.appstream.AppStreamCreateFleetRequest)

---



#### Properties <a name="Properties"></a>

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateFleetFleetVpcConfig.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnetIds`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateFleetFleetVpcConfig.property.subnetIds"></a>

- *Type:* `string`[]

---


### AppStreamResponsesCreateImageBuilder <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilder"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilder.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesCreateImageBuilder(__scope: Construct, __resources: string[], __input: AppStreamCreateImageBuilderRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilder.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilder.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilder.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamCreateImageBuilderRequest`](#aws-cdk-sdk.appstream.AppStreamCreateImageBuilderRequest)

---



#### Properties <a name="Properties"></a>

##### `imageBuilder`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilder.property.imageBuilder"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderImageBuilder`](#aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderImageBuilder)

---


### AppStreamResponsesCreateImageBuilderImageBuilder <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderImageBuilder"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderImageBuilder.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesCreateImageBuilderImageBuilder(__scope: Construct, __resources: string[], __input: AppStreamCreateImageBuilderRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderImageBuilder.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderImageBuilder.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderImageBuilder.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamCreateImageBuilderRequest`](#aws-cdk-sdk.appstream.AppStreamCreateImageBuilderRequest)

---



#### Properties <a name="Properties"></a>

##### `accessEndpoints`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderImageBuilder.property.accessEndpoints"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamAccessEndpoint`](#aws-cdk-sdk.appstream.AppStreamAccessEndpoint)[]

---

##### `appstreamAgentVersion`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderImageBuilder.property.appstreamAgentVersion"></a>

- *Type:* `string`

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderImageBuilder.property.arn"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderImageBuilder.property.createdTime"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderImageBuilder.property.description"></a>

- *Type:* `string`

---

##### `displayName`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderImageBuilder.property.displayName"></a>

- *Type:* `string`

---

##### `domainJoinInfo`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderImageBuilder.property.domainJoinInfo"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderImageBuilderDomainJoinInfo`](#aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderImageBuilderDomainJoinInfo)

---

##### `enableDefaultInternetAccess`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderImageBuilder.property.enableDefaultInternetAccess"></a>

- *Type:* `boolean`

---

##### `iamRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderImageBuilder.property.iamRoleArn"></a>

- *Type:* `string`

---

##### `imageArn`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderImageBuilder.property.imageArn"></a>

- *Type:* `string`

---

##### `imageBuilderErrors`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderImageBuilder.property.imageBuilderErrors"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamResourceError`](#aws-cdk-sdk.appstream.AppStreamResourceError)[]

---

##### `instanceType`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderImageBuilder.property.instanceType"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderImageBuilder.property.name"></a>

- *Type:* `string`

---

##### `networkAccessConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderImageBuilder.property.networkAccessConfiguration"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderImageBuilderNetworkAccessConfiguration`](#aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderImageBuilderNetworkAccessConfiguration)

---

##### `platform`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderImageBuilder.property.platform"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderImageBuilder.property.state"></a>

- *Type:* `string`

---

##### `stateChangeReason`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderImageBuilder.property.stateChangeReason"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderImageBuilderStateChangeReason`](#aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderImageBuilderStateChangeReason)

---

##### `vpcConfig`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderImageBuilder.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderImageBuilderVpcConfig`](#aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderImageBuilderVpcConfig)

---


### AppStreamResponsesCreateImageBuilderImageBuilderDomainJoinInfo <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderImageBuilderDomainJoinInfo"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderImageBuilderDomainJoinInfo.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesCreateImageBuilderImageBuilderDomainJoinInfo(__scope: Construct, __resources: string[], __input: AppStreamCreateImageBuilderRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderImageBuilderDomainJoinInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderImageBuilderDomainJoinInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderImageBuilderDomainJoinInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamCreateImageBuilderRequest`](#aws-cdk-sdk.appstream.AppStreamCreateImageBuilderRequest)

---



#### Properties <a name="Properties"></a>

##### `directoryName`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderImageBuilderDomainJoinInfo.property.directoryName"></a>

- *Type:* `string`

---

##### `organizationalUnitDistinguishedName`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderImageBuilderDomainJoinInfo.property.organizationalUnitDistinguishedName"></a>

- *Type:* `string`

---


### AppStreamResponsesCreateImageBuilderImageBuilderNetworkAccessConfiguration <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderImageBuilderNetworkAccessConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderImageBuilderNetworkAccessConfiguration.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesCreateImageBuilderImageBuilderNetworkAccessConfiguration(__scope: Construct, __resources: string[], __input: AppStreamCreateImageBuilderRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderImageBuilderNetworkAccessConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderImageBuilderNetworkAccessConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderImageBuilderNetworkAccessConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamCreateImageBuilderRequest`](#aws-cdk-sdk.appstream.AppStreamCreateImageBuilderRequest)

---



#### Properties <a name="Properties"></a>

##### `eniId`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderImageBuilderNetworkAccessConfiguration.property.eniId"></a>

- *Type:* `string`

---

##### `eniPrivateIpAddress`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderImageBuilderNetworkAccessConfiguration.property.eniPrivateIpAddress"></a>

- *Type:* `string`

---


### AppStreamResponsesCreateImageBuilderImageBuilderStateChangeReason <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderImageBuilderStateChangeReason"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderImageBuilderStateChangeReason.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesCreateImageBuilderImageBuilderStateChangeReason(__scope: Construct, __resources: string[], __input: AppStreamCreateImageBuilderRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderImageBuilderStateChangeReason.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderImageBuilderStateChangeReason.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderImageBuilderStateChangeReason.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamCreateImageBuilderRequest`](#aws-cdk-sdk.appstream.AppStreamCreateImageBuilderRequest)

---



#### Properties <a name="Properties"></a>

##### `code`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderImageBuilderStateChangeReason.property.code"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderImageBuilderStateChangeReason.property.message"></a>

- *Type:* `string`

---


### AppStreamResponsesCreateImageBuilderImageBuilderVpcConfig <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderImageBuilderVpcConfig"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderImageBuilderVpcConfig.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesCreateImageBuilderImageBuilderVpcConfig(__scope: Construct, __resources: string[], __input: AppStreamCreateImageBuilderRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderImageBuilderVpcConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderImageBuilderVpcConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderImageBuilderVpcConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamCreateImageBuilderRequest`](#aws-cdk-sdk.appstream.AppStreamCreateImageBuilderRequest)

---



#### Properties <a name="Properties"></a>

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderImageBuilderVpcConfig.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnetIds`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderImageBuilderVpcConfig.property.subnetIds"></a>

- *Type:* `string`[]

---


### AppStreamResponsesCreateImageBuilderStreamingUrl <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderStreamingUrl"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderStreamingUrl.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesCreateImageBuilderStreamingUrl(__scope: Construct, __resources: string[], __input: AppStreamCreateImageBuilderStreamingUrlRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderStreamingUrl.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderStreamingUrl.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderStreamingUrl.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamCreateImageBuilderStreamingUrlRequest`](#aws-cdk-sdk.appstream.AppStreamCreateImageBuilderStreamingUrlRequest)

---



#### Properties <a name="Properties"></a>

##### `expires`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderStreamingUrl.property.expires"></a>

- *Type:* `string`

---

##### `streamingUrl`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateImageBuilderStreamingUrl.property.streamingUrl"></a>

- *Type:* `string`

---


### AppStreamResponsesCreateStack <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateStack"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateStack.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesCreateStack(__scope: Construct, __resources: string[], __input: AppStreamCreateStackRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateStack.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateStack.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateStack.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamCreateStackRequest`](#aws-cdk-sdk.appstream.AppStreamCreateStackRequest)

---



#### Properties <a name="Properties"></a>

##### `stack`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateStack.property.stack"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamResponsesCreateStackStack`](#aws-cdk-sdk.appstream.AppStreamResponsesCreateStackStack)

---


### AppStreamResponsesCreateStackStack <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateStackStack"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateStackStack.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesCreateStackStack(__scope: Construct, __resources: string[], __input: AppStreamCreateStackRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateStackStack.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateStackStack.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateStackStack.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamCreateStackRequest`](#aws-cdk-sdk.appstream.AppStreamCreateStackRequest)

---



#### Properties <a name="Properties"></a>

##### `accessEndpoints`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateStackStack.property.accessEndpoints"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamAccessEndpoint`](#aws-cdk-sdk.appstream.AppStreamAccessEndpoint)[]

---

##### `applicationSettings`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateStackStack.property.applicationSettings"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamResponsesCreateStackStackApplicationSettings`](#aws-cdk-sdk.appstream.AppStreamResponsesCreateStackStackApplicationSettings)

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateStackStack.property.arn"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateStackStack.property.createdTime"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateStackStack.property.description"></a>

- *Type:* `string`

---

##### `displayName`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateStackStack.property.displayName"></a>

- *Type:* `string`

---

##### `embedHostDomains`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateStackStack.property.embedHostDomains"></a>

- *Type:* `string`[]

---

##### `feedbackUrl`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateStackStack.property.feedbackUrl"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateStackStack.property.name"></a>

- *Type:* `string`

---

##### `redirectUrl`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateStackStack.property.redirectUrl"></a>

- *Type:* `string`

---

##### `stackErrors`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateStackStack.property.stackErrors"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamStackError`](#aws-cdk-sdk.appstream.AppStreamStackError)[]

---

##### `storageConnectors`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateStackStack.property.storageConnectors"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamStorageConnector`](#aws-cdk-sdk.appstream.AppStreamStorageConnector)[]

---

##### `userSettings`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateStackStack.property.userSettings"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamUserSetting`](#aws-cdk-sdk.appstream.AppStreamUserSetting)[]

---


### AppStreamResponsesCreateStackStackApplicationSettings <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateStackStackApplicationSettings"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateStackStackApplicationSettings.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesCreateStackStackApplicationSettings(__scope: Construct, __resources: string[], __input: AppStreamCreateStackRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateStackStackApplicationSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateStackStackApplicationSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateStackStackApplicationSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamCreateStackRequest`](#aws-cdk-sdk.appstream.AppStreamCreateStackRequest)

---



#### Properties <a name="Properties"></a>

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateStackStackApplicationSettings.property.enabled"></a>

- *Type:* `boolean`

---

##### `s3BucketName`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateStackStackApplicationSettings.property.s3BucketName"></a>

- *Type:* `string`

---

##### `settingsGroup`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateStackStackApplicationSettings.property.settingsGroup"></a>

- *Type:* `string`

---


### AppStreamResponsesCreateStreamingUrl <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateStreamingUrl"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateStreamingUrl.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesCreateStreamingUrl(__scope: Construct, __resources: string[], __input: AppStreamCreateStreamingUrlRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateStreamingUrl.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateStreamingUrl.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateStreamingUrl.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamCreateStreamingUrlRequest`](#aws-cdk-sdk.appstream.AppStreamCreateStreamingUrlRequest)

---



#### Properties <a name="Properties"></a>

##### `expires`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateStreamingUrl.property.expires"></a>

- *Type:* `string`

---

##### `streamingUrl`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateStreamingUrl.property.streamingUrl"></a>

- *Type:* `string`

---


### AppStreamResponsesCreateUsageReportSubscription <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateUsageReportSubscription"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateUsageReportSubscription.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesCreateUsageReportSubscription(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateUsageReportSubscription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateUsageReportSubscription.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `s3BucketName`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateUsageReportSubscription.property.s3BucketName"></a>

- *Type:* `string`

---

##### `schedule`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesCreateUsageReportSubscription.property.schedule"></a>

- *Type:* `string`

---


### AppStreamResponsesDeleteImage <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImage"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImage.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesDeleteImage(__scope: Construct, __resources: string[], __input: AppStreamDeleteImageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamDeleteImageRequest`](#aws-cdk-sdk.appstream.AppStreamDeleteImageRequest)

---



#### Properties <a name="Properties"></a>

##### `image`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImage.property.image"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageImage`](#aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageImage)

---


### AppStreamResponsesDeleteImageBuilder <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilder"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilder.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesDeleteImageBuilder(__scope: Construct, __resources: string[], __input: AppStreamDeleteImageBuilderRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilder.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilder.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilder.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamDeleteImageBuilderRequest`](#aws-cdk-sdk.appstream.AppStreamDeleteImageBuilderRequest)

---



#### Properties <a name="Properties"></a>

##### `imageBuilder`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilder.property.imageBuilder"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilderImageBuilder`](#aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilderImageBuilder)

---


### AppStreamResponsesDeleteImageBuilderImageBuilder <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilderImageBuilder"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilderImageBuilder.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesDeleteImageBuilderImageBuilder(__scope: Construct, __resources: string[], __input: AppStreamDeleteImageBuilderRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilderImageBuilder.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilderImageBuilder.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilderImageBuilder.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamDeleteImageBuilderRequest`](#aws-cdk-sdk.appstream.AppStreamDeleteImageBuilderRequest)

---



#### Properties <a name="Properties"></a>

##### `accessEndpoints`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilderImageBuilder.property.accessEndpoints"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamAccessEndpoint`](#aws-cdk-sdk.appstream.AppStreamAccessEndpoint)[]

---

##### `appstreamAgentVersion`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilderImageBuilder.property.appstreamAgentVersion"></a>

- *Type:* `string`

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilderImageBuilder.property.arn"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilderImageBuilder.property.createdTime"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilderImageBuilder.property.description"></a>

- *Type:* `string`

---

##### `displayName`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilderImageBuilder.property.displayName"></a>

- *Type:* `string`

---

##### `domainJoinInfo`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilderImageBuilder.property.domainJoinInfo"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilderImageBuilderDomainJoinInfo`](#aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilderImageBuilderDomainJoinInfo)

---

##### `enableDefaultInternetAccess`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilderImageBuilder.property.enableDefaultInternetAccess"></a>

- *Type:* `boolean`

---

##### `iamRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilderImageBuilder.property.iamRoleArn"></a>

- *Type:* `string`

---

##### `imageArn`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilderImageBuilder.property.imageArn"></a>

- *Type:* `string`

---

##### `imageBuilderErrors`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilderImageBuilder.property.imageBuilderErrors"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamResourceError`](#aws-cdk-sdk.appstream.AppStreamResourceError)[]

---

##### `instanceType`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilderImageBuilder.property.instanceType"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilderImageBuilder.property.name"></a>

- *Type:* `string`

---

##### `networkAccessConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilderImageBuilder.property.networkAccessConfiguration"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilderImageBuilderNetworkAccessConfiguration`](#aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilderImageBuilderNetworkAccessConfiguration)

---

##### `platform`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilderImageBuilder.property.platform"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilderImageBuilder.property.state"></a>

- *Type:* `string`

---

##### `stateChangeReason`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilderImageBuilder.property.stateChangeReason"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilderImageBuilderStateChangeReason`](#aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilderImageBuilderStateChangeReason)

---

##### `vpcConfig`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilderImageBuilder.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilderImageBuilderVpcConfig`](#aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilderImageBuilderVpcConfig)

---


### AppStreamResponsesDeleteImageBuilderImageBuilderDomainJoinInfo <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilderImageBuilderDomainJoinInfo"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilderImageBuilderDomainJoinInfo.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesDeleteImageBuilderImageBuilderDomainJoinInfo(__scope: Construct, __resources: string[], __input: AppStreamDeleteImageBuilderRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilderImageBuilderDomainJoinInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilderImageBuilderDomainJoinInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilderImageBuilderDomainJoinInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamDeleteImageBuilderRequest`](#aws-cdk-sdk.appstream.AppStreamDeleteImageBuilderRequest)

---



#### Properties <a name="Properties"></a>

##### `directoryName`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilderImageBuilderDomainJoinInfo.property.directoryName"></a>

- *Type:* `string`

---

##### `organizationalUnitDistinguishedName`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilderImageBuilderDomainJoinInfo.property.organizationalUnitDistinguishedName"></a>

- *Type:* `string`

---


### AppStreamResponsesDeleteImageBuilderImageBuilderNetworkAccessConfiguration <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilderImageBuilderNetworkAccessConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilderImageBuilderNetworkAccessConfiguration.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesDeleteImageBuilderImageBuilderNetworkAccessConfiguration(__scope: Construct, __resources: string[], __input: AppStreamDeleteImageBuilderRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilderImageBuilderNetworkAccessConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilderImageBuilderNetworkAccessConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilderImageBuilderNetworkAccessConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamDeleteImageBuilderRequest`](#aws-cdk-sdk.appstream.AppStreamDeleteImageBuilderRequest)

---



#### Properties <a name="Properties"></a>

##### `eniId`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilderImageBuilderNetworkAccessConfiguration.property.eniId"></a>

- *Type:* `string`

---

##### `eniPrivateIpAddress`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilderImageBuilderNetworkAccessConfiguration.property.eniPrivateIpAddress"></a>

- *Type:* `string`

---


### AppStreamResponsesDeleteImageBuilderImageBuilderStateChangeReason <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilderImageBuilderStateChangeReason"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilderImageBuilderStateChangeReason.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesDeleteImageBuilderImageBuilderStateChangeReason(__scope: Construct, __resources: string[], __input: AppStreamDeleteImageBuilderRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilderImageBuilderStateChangeReason.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilderImageBuilderStateChangeReason.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilderImageBuilderStateChangeReason.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamDeleteImageBuilderRequest`](#aws-cdk-sdk.appstream.AppStreamDeleteImageBuilderRequest)

---



#### Properties <a name="Properties"></a>

##### `code`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilderImageBuilderStateChangeReason.property.code"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilderImageBuilderStateChangeReason.property.message"></a>

- *Type:* `string`

---


### AppStreamResponsesDeleteImageBuilderImageBuilderVpcConfig <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilderImageBuilderVpcConfig"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilderImageBuilderVpcConfig.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesDeleteImageBuilderImageBuilderVpcConfig(__scope: Construct, __resources: string[], __input: AppStreamDeleteImageBuilderRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilderImageBuilderVpcConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilderImageBuilderVpcConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilderImageBuilderVpcConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamDeleteImageBuilderRequest`](#aws-cdk-sdk.appstream.AppStreamDeleteImageBuilderRequest)

---



#### Properties <a name="Properties"></a>

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilderImageBuilderVpcConfig.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnetIds`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageBuilderImageBuilderVpcConfig.property.subnetIds"></a>

- *Type:* `string`[]

---


### AppStreamResponsesDeleteImageImage <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageImage"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageImage.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesDeleteImageImage(__scope: Construct, __resources: string[], __input: AppStreamDeleteImageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageImage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageImage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageImage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamDeleteImageRequest`](#aws-cdk-sdk.appstream.AppStreamDeleteImageRequest)

---



#### Properties <a name="Properties"></a>

##### `applications`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageImage.property.applications"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamApplication`](#aws-cdk-sdk.appstream.AppStreamApplication)[]

---

##### `appstreamAgentVersion`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageImage.property.appstreamAgentVersion"></a>

- *Type:* `string`

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageImage.property.arn"></a>

- *Type:* `string`

---

##### `baseImageArn`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageImage.property.baseImageArn"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageImage.property.createdTime"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageImage.property.description"></a>

- *Type:* `string`

---

##### `displayName`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageImage.property.displayName"></a>

- *Type:* `string`

---

##### `imageBuilderName`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageImage.property.imageBuilderName"></a>

- *Type:* `string`

---

##### `imageBuilderSupported`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageImage.property.imageBuilderSupported"></a>

- *Type:* `boolean`

---

##### `imagePermissions`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageImage.property.imagePermissions"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageImageImagePermissions`](#aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageImageImagePermissions)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageImage.property.name"></a>

- *Type:* `string`

---

##### `platform`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageImage.property.platform"></a>

- *Type:* `string`

---

##### `publicBaseImageReleasedDate`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageImage.property.publicBaseImageReleasedDate"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageImage.property.state"></a>

- *Type:* `string`

---

##### `stateChangeReason`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageImage.property.stateChangeReason"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageImageStateChangeReason`](#aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageImageStateChangeReason)

---

##### `visibility`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageImage.property.visibility"></a>

- *Type:* `string`

---


### AppStreamResponsesDeleteImageImageImagePermissions <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageImageImagePermissions"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageImageImagePermissions.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesDeleteImageImageImagePermissions(__scope: Construct, __resources: string[], __input: AppStreamDeleteImageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageImageImagePermissions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageImageImagePermissions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageImageImagePermissions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamDeleteImageRequest`](#aws-cdk-sdk.appstream.AppStreamDeleteImageRequest)

---



#### Properties <a name="Properties"></a>

##### `allowFleet`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageImageImagePermissions.property.allowFleet"></a>

- *Type:* `boolean`

---

##### `allowImageBuilder`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageImageImagePermissions.property.allowImageBuilder"></a>

- *Type:* `boolean`

---


### AppStreamResponsesDeleteImageImageStateChangeReason <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageImageStateChangeReason"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageImageStateChangeReason.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesDeleteImageImageStateChangeReason(__scope: Construct, __resources: string[], __input: AppStreamDeleteImageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageImageStateChangeReason.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageImageStateChangeReason.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageImageStateChangeReason.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamDeleteImageRequest`](#aws-cdk-sdk.appstream.AppStreamDeleteImageRequest)

---



#### Properties <a name="Properties"></a>

##### `code`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageImageStateChangeReason.property.code"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDeleteImageImageStateChangeReason.property.message"></a>

- *Type:* `string`

---


### AppStreamResponsesDescribeDirectoryConfigs <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeDirectoryConfigs"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeDirectoryConfigs.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesDescribeDirectoryConfigs(__scope: Construct, __resources: string[], __input: AppStreamDescribeDirectoryConfigsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeDirectoryConfigs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeDirectoryConfigs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeDirectoryConfigs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamDescribeDirectoryConfigsRequest`](#aws-cdk-sdk.appstream.AppStreamDescribeDirectoryConfigsRequest)

---



#### Properties <a name="Properties"></a>

##### `directoryConfigs`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeDirectoryConfigs.property.directoryConfigs"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamDirectoryConfig`](#aws-cdk-sdk.appstream.AppStreamDirectoryConfig)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeDirectoryConfigs.property.nextToken"></a>

- *Type:* `string`

---


### AppStreamResponsesDescribeFleets <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeFleets"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeFleets.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesDescribeFleets(__scope: Construct, __resources: string[], __input: AppStreamDescribeFleetsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeFleets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeFleets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeFleets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamDescribeFleetsRequest`](#aws-cdk-sdk.appstream.AppStreamDescribeFleetsRequest)

---



#### Properties <a name="Properties"></a>

##### `fleets`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeFleets.property.fleets"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamFleet`](#aws-cdk-sdk.appstream.AppStreamFleet)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeFleets.property.nextToken"></a>

- *Type:* `string`

---


### AppStreamResponsesDescribeImageBuilders <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeImageBuilders"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeImageBuilders.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesDescribeImageBuilders(__scope: Construct, __resources: string[], __input: AppStreamDescribeImageBuildersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeImageBuilders.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeImageBuilders.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeImageBuilders.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamDescribeImageBuildersRequest`](#aws-cdk-sdk.appstream.AppStreamDescribeImageBuildersRequest)

---



#### Properties <a name="Properties"></a>

##### `imageBuilders`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeImageBuilders.property.imageBuilders"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamImageBuilder`](#aws-cdk-sdk.appstream.AppStreamImageBuilder)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeImageBuilders.property.nextToken"></a>

- *Type:* `string`

---


### AppStreamResponsesDescribeImagePermissions <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeImagePermissions"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeImagePermissions.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesDescribeImagePermissions(__scope: Construct, __resources: string[], __input: AppStreamDescribeImagePermissionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeImagePermissions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeImagePermissions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeImagePermissions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamDescribeImagePermissionsRequest`](#aws-cdk-sdk.appstream.AppStreamDescribeImagePermissionsRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeImagePermissions.property.name"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeImagePermissions.property.nextToken"></a>

- *Type:* `string`

---

##### `sharedImagePermissionsList`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeImagePermissions.property.sharedImagePermissionsList"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamSharedImagePermissions`](#aws-cdk-sdk.appstream.AppStreamSharedImagePermissions)[]

---


### AppStreamResponsesDescribeImages <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeImages"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeImages.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesDescribeImages(__scope: Construct, __resources: string[], __input: AppStreamDescribeImagesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeImages.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeImages.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeImages.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamDescribeImagesRequest`](#aws-cdk-sdk.appstream.AppStreamDescribeImagesRequest)

---



#### Properties <a name="Properties"></a>

##### `images`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeImages.property.images"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamImage`](#aws-cdk-sdk.appstream.AppStreamImage)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeImages.property.nextToken"></a>

- *Type:* `string`

---


### AppStreamResponsesDescribeSessions <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeSessions"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeSessions.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesDescribeSessions(__scope: Construct, __resources: string[], __input: AppStreamDescribeSessionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeSessions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeSessions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeSessions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamDescribeSessionsRequest`](#aws-cdk-sdk.appstream.AppStreamDescribeSessionsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeSessions.property.nextToken"></a>

- *Type:* `string`

---

##### `sessions`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeSessions.property.sessions"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamSession`](#aws-cdk-sdk.appstream.AppStreamSession)[]

---


### AppStreamResponsesDescribeStacks <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeStacks"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeStacks.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesDescribeStacks(__scope: Construct, __resources: string[], __input: AppStreamDescribeStacksRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeStacks.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeStacks.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeStacks.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamDescribeStacksRequest`](#aws-cdk-sdk.appstream.AppStreamDescribeStacksRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeStacks.property.nextToken"></a>

- *Type:* `string`

---

##### `stacks`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeStacks.property.stacks"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamStack`](#aws-cdk-sdk.appstream.AppStreamStack)[]

---


### AppStreamResponsesDescribeUsageReportSubscriptions <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeUsageReportSubscriptions"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeUsageReportSubscriptions.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesDescribeUsageReportSubscriptions(__scope: Construct, __resources: string[], __input: AppStreamDescribeUsageReportSubscriptionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeUsageReportSubscriptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeUsageReportSubscriptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeUsageReportSubscriptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamDescribeUsageReportSubscriptionsRequest`](#aws-cdk-sdk.appstream.AppStreamDescribeUsageReportSubscriptionsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeUsageReportSubscriptions.property.nextToken"></a>

- *Type:* `string`

---

##### `usageReportSubscriptions`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeUsageReportSubscriptions.property.usageReportSubscriptions"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamUsageReportSubscription`](#aws-cdk-sdk.appstream.AppStreamUsageReportSubscription)[]

---


### AppStreamResponsesDescribeUsers <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeUsers"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeUsers.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesDescribeUsers(__scope: Construct, __resources: string[], __input: AppStreamDescribeUsersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeUsers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeUsers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeUsers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamDescribeUsersRequest`](#aws-cdk-sdk.appstream.AppStreamDescribeUsersRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeUsers.property.nextToken"></a>

- *Type:* `string`

---

##### `users`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeUsers.property.users"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamUser`](#aws-cdk-sdk.appstream.AppStreamUser)[]

---


### AppStreamResponsesDescribeUserStackAssociations <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeUserStackAssociations"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeUserStackAssociations.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesDescribeUserStackAssociations(__scope: Construct, __resources: string[], __input: AppStreamDescribeUserStackAssociationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeUserStackAssociations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeUserStackAssociations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeUserStackAssociations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamDescribeUserStackAssociationsRequest`](#aws-cdk-sdk.appstream.AppStreamDescribeUserStackAssociationsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeUserStackAssociations.property.nextToken"></a>

- *Type:* `string`

---

##### `userStackAssociations`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesDescribeUserStackAssociations.property.userStackAssociations"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamUserStackAssociation`](#aws-cdk-sdk.appstream.AppStreamUserStackAssociation)[]

---


### AppStreamResponsesListAssociatedFleets <a name="aws-cdk-sdk.appstream.AppStreamResponsesListAssociatedFleets"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesListAssociatedFleets.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesListAssociatedFleets(__scope: Construct, __resources: string[], __input: AppStreamListAssociatedFleetsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesListAssociatedFleets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesListAssociatedFleets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesListAssociatedFleets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamListAssociatedFleetsRequest`](#aws-cdk-sdk.appstream.AppStreamListAssociatedFleetsRequest)

---



#### Properties <a name="Properties"></a>

##### `names`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesListAssociatedFleets.property.names"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesListAssociatedFleets.property.nextToken"></a>

- *Type:* `string`

---


### AppStreamResponsesListAssociatedStacks <a name="aws-cdk-sdk.appstream.AppStreamResponsesListAssociatedStacks"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesListAssociatedStacks.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesListAssociatedStacks(__scope: Construct, __resources: string[], __input: AppStreamListAssociatedStacksRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesListAssociatedStacks.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesListAssociatedStacks.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesListAssociatedStacks.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamListAssociatedStacksRequest`](#aws-cdk-sdk.appstream.AppStreamListAssociatedStacksRequest)

---



#### Properties <a name="Properties"></a>

##### `names`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesListAssociatedStacks.property.names"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesListAssociatedStacks.property.nextToken"></a>

- *Type:* `string`

---


### AppStreamResponsesListTagsForResource <a name="aws-cdk-sdk.appstream.AppStreamResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesListTagsForResource.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: AppStreamListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamListTagsForResourceRequest`](#aws-cdk-sdk.appstream.AppStreamListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesListTagsForResource.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### AppStreamResponsesStartImageBuilder <a name="aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilder"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilder.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesStartImageBuilder(__scope: Construct, __resources: string[], __input: AppStreamStartImageBuilderRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilder.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilder.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilder.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamStartImageBuilderRequest`](#aws-cdk-sdk.appstream.AppStreamStartImageBuilderRequest)

---



#### Properties <a name="Properties"></a>

##### `imageBuilder`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilder.property.imageBuilder"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilderImageBuilder`](#aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilderImageBuilder)

---


### AppStreamResponsesStartImageBuilderImageBuilder <a name="aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilderImageBuilder"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilderImageBuilder.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesStartImageBuilderImageBuilder(__scope: Construct, __resources: string[], __input: AppStreamStartImageBuilderRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilderImageBuilder.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilderImageBuilder.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilderImageBuilder.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamStartImageBuilderRequest`](#aws-cdk-sdk.appstream.AppStreamStartImageBuilderRequest)

---



#### Properties <a name="Properties"></a>

##### `accessEndpoints`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilderImageBuilder.property.accessEndpoints"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamAccessEndpoint`](#aws-cdk-sdk.appstream.AppStreamAccessEndpoint)[]

---

##### `appstreamAgentVersion`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilderImageBuilder.property.appstreamAgentVersion"></a>

- *Type:* `string`

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilderImageBuilder.property.arn"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilderImageBuilder.property.createdTime"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilderImageBuilder.property.description"></a>

- *Type:* `string`

---

##### `displayName`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilderImageBuilder.property.displayName"></a>

- *Type:* `string`

---

##### `domainJoinInfo`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilderImageBuilder.property.domainJoinInfo"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilderImageBuilderDomainJoinInfo`](#aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilderImageBuilderDomainJoinInfo)

---

##### `enableDefaultInternetAccess`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilderImageBuilder.property.enableDefaultInternetAccess"></a>

- *Type:* `boolean`

---

##### `iamRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilderImageBuilder.property.iamRoleArn"></a>

- *Type:* `string`

---

##### `imageArn`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilderImageBuilder.property.imageArn"></a>

- *Type:* `string`

---

##### `imageBuilderErrors`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilderImageBuilder.property.imageBuilderErrors"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamResourceError`](#aws-cdk-sdk.appstream.AppStreamResourceError)[]

---

##### `instanceType`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilderImageBuilder.property.instanceType"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilderImageBuilder.property.name"></a>

- *Type:* `string`

---

##### `networkAccessConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilderImageBuilder.property.networkAccessConfiguration"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilderImageBuilderNetworkAccessConfiguration`](#aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilderImageBuilderNetworkAccessConfiguration)

---

##### `platform`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilderImageBuilder.property.platform"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilderImageBuilder.property.state"></a>

- *Type:* `string`

---

##### `stateChangeReason`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilderImageBuilder.property.stateChangeReason"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilderImageBuilderStateChangeReason`](#aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilderImageBuilderStateChangeReason)

---

##### `vpcConfig`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilderImageBuilder.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilderImageBuilderVpcConfig`](#aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilderImageBuilderVpcConfig)

---


### AppStreamResponsesStartImageBuilderImageBuilderDomainJoinInfo <a name="aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilderImageBuilderDomainJoinInfo"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilderImageBuilderDomainJoinInfo.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesStartImageBuilderImageBuilderDomainJoinInfo(__scope: Construct, __resources: string[], __input: AppStreamStartImageBuilderRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilderImageBuilderDomainJoinInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilderImageBuilderDomainJoinInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilderImageBuilderDomainJoinInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamStartImageBuilderRequest`](#aws-cdk-sdk.appstream.AppStreamStartImageBuilderRequest)

---



#### Properties <a name="Properties"></a>

##### `directoryName`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilderImageBuilderDomainJoinInfo.property.directoryName"></a>

- *Type:* `string`

---

##### `organizationalUnitDistinguishedName`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilderImageBuilderDomainJoinInfo.property.organizationalUnitDistinguishedName"></a>

- *Type:* `string`

---


### AppStreamResponsesStartImageBuilderImageBuilderNetworkAccessConfiguration <a name="aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilderImageBuilderNetworkAccessConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilderImageBuilderNetworkAccessConfiguration.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesStartImageBuilderImageBuilderNetworkAccessConfiguration(__scope: Construct, __resources: string[], __input: AppStreamStartImageBuilderRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilderImageBuilderNetworkAccessConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilderImageBuilderNetworkAccessConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilderImageBuilderNetworkAccessConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamStartImageBuilderRequest`](#aws-cdk-sdk.appstream.AppStreamStartImageBuilderRequest)

---



#### Properties <a name="Properties"></a>

##### `eniId`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilderImageBuilderNetworkAccessConfiguration.property.eniId"></a>

- *Type:* `string`

---

##### `eniPrivateIpAddress`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilderImageBuilderNetworkAccessConfiguration.property.eniPrivateIpAddress"></a>

- *Type:* `string`

---


### AppStreamResponsesStartImageBuilderImageBuilderStateChangeReason <a name="aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilderImageBuilderStateChangeReason"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilderImageBuilderStateChangeReason.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesStartImageBuilderImageBuilderStateChangeReason(__scope: Construct, __resources: string[], __input: AppStreamStartImageBuilderRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilderImageBuilderStateChangeReason.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilderImageBuilderStateChangeReason.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilderImageBuilderStateChangeReason.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamStartImageBuilderRequest`](#aws-cdk-sdk.appstream.AppStreamStartImageBuilderRequest)

---



#### Properties <a name="Properties"></a>

##### `code`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilderImageBuilderStateChangeReason.property.code"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilderImageBuilderStateChangeReason.property.message"></a>

- *Type:* `string`

---


### AppStreamResponsesStartImageBuilderImageBuilderVpcConfig <a name="aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilderImageBuilderVpcConfig"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilderImageBuilderVpcConfig.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesStartImageBuilderImageBuilderVpcConfig(__scope: Construct, __resources: string[], __input: AppStreamStartImageBuilderRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilderImageBuilderVpcConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilderImageBuilderVpcConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilderImageBuilderVpcConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamStartImageBuilderRequest`](#aws-cdk-sdk.appstream.AppStreamStartImageBuilderRequest)

---



#### Properties <a name="Properties"></a>

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilderImageBuilderVpcConfig.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnetIds`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStartImageBuilderImageBuilderVpcConfig.property.subnetIds"></a>

- *Type:* `string`[]

---


### AppStreamResponsesStopImageBuilder <a name="aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilder"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilder.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesStopImageBuilder(__scope: Construct, __resources: string[], __input: AppStreamStopImageBuilderRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilder.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilder.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilder.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamStopImageBuilderRequest`](#aws-cdk-sdk.appstream.AppStreamStopImageBuilderRequest)

---



#### Properties <a name="Properties"></a>

##### `imageBuilder`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilder.property.imageBuilder"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilderImageBuilder`](#aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilderImageBuilder)

---


### AppStreamResponsesStopImageBuilderImageBuilder <a name="aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilderImageBuilder"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilderImageBuilder.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesStopImageBuilderImageBuilder(__scope: Construct, __resources: string[], __input: AppStreamStopImageBuilderRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilderImageBuilder.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilderImageBuilder.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilderImageBuilder.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamStopImageBuilderRequest`](#aws-cdk-sdk.appstream.AppStreamStopImageBuilderRequest)

---



#### Properties <a name="Properties"></a>

##### `accessEndpoints`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilderImageBuilder.property.accessEndpoints"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamAccessEndpoint`](#aws-cdk-sdk.appstream.AppStreamAccessEndpoint)[]

---

##### `appstreamAgentVersion`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilderImageBuilder.property.appstreamAgentVersion"></a>

- *Type:* `string`

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilderImageBuilder.property.arn"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilderImageBuilder.property.createdTime"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilderImageBuilder.property.description"></a>

- *Type:* `string`

---

##### `displayName`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilderImageBuilder.property.displayName"></a>

- *Type:* `string`

---

##### `domainJoinInfo`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilderImageBuilder.property.domainJoinInfo"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilderImageBuilderDomainJoinInfo`](#aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilderImageBuilderDomainJoinInfo)

---

##### `enableDefaultInternetAccess`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilderImageBuilder.property.enableDefaultInternetAccess"></a>

- *Type:* `boolean`

---

##### `iamRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilderImageBuilder.property.iamRoleArn"></a>

- *Type:* `string`

---

##### `imageArn`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilderImageBuilder.property.imageArn"></a>

- *Type:* `string`

---

##### `imageBuilderErrors`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilderImageBuilder.property.imageBuilderErrors"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamResourceError`](#aws-cdk-sdk.appstream.AppStreamResourceError)[]

---

##### `instanceType`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilderImageBuilder.property.instanceType"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilderImageBuilder.property.name"></a>

- *Type:* `string`

---

##### `networkAccessConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilderImageBuilder.property.networkAccessConfiguration"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilderImageBuilderNetworkAccessConfiguration`](#aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilderImageBuilderNetworkAccessConfiguration)

---

##### `platform`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilderImageBuilder.property.platform"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilderImageBuilder.property.state"></a>

- *Type:* `string`

---

##### `stateChangeReason`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilderImageBuilder.property.stateChangeReason"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilderImageBuilderStateChangeReason`](#aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilderImageBuilderStateChangeReason)

---

##### `vpcConfig`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilderImageBuilder.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilderImageBuilderVpcConfig`](#aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilderImageBuilderVpcConfig)

---


### AppStreamResponsesStopImageBuilderImageBuilderDomainJoinInfo <a name="aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilderImageBuilderDomainJoinInfo"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilderImageBuilderDomainJoinInfo.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesStopImageBuilderImageBuilderDomainJoinInfo(__scope: Construct, __resources: string[], __input: AppStreamStopImageBuilderRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilderImageBuilderDomainJoinInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilderImageBuilderDomainJoinInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilderImageBuilderDomainJoinInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamStopImageBuilderRequest`](#aws-cdk-sdk.appstream.AppStreamStopImageBuilderRequest)

---



#### Properties <a name="Properties"></a>

##### `directoryName`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilderImageBuilderDomainJoinInfo.property.directoryName"></a>

- *Type:* `string`

---

##### `organizationalUnitDistinguishedName`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilderImageBuilderDomainJoinInfo.property.organizationalUnitDistinguishedName"></a>

- *Type:* `string`

---


### AppStreamResponsesStopImageBuilderImageBuilderNetworkAccessConfiguration <a name="aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilderImageBuilderNetworkAccessConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilderImageBuilderNetworkAccessConfiguration.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesStopImageBuilderImageBuilderNetworkAccessConfiguration(__scope: Construct, __resources: string[], __input: AppStreamStopImageBuilderRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilderImageBuilderNetworkAccessConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilderImageBuilderNetworkAccessConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilderImageBuilderNetworkAccessConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamStopImageBuilderRequest`](#aws-cdk-sdk.appstream.AppStreamStopImageBuilderRequest)

---



#### Properties <a name="Properties"></a>

##### `eniId`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilderImageBuilderNetworkAccessConfiguration.property.eniId"></a>

- *Type:* `string`

---

##### `eniPrivateIpAddress`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilderImageBuilderNetworkAccessConfiguration.property.eniPrivateIpAddress"></a>

- *Type:* `string`

---


### AppStreamResponsesStopImageBuilderImageBuilderStateChangeReason <a name="aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilderImageBuilderStateChangeReason"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilderImageBuilderStateChangeReason.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesStopImageBuilderImageBuilderStateChangeReason(__scope: Construct, __resources: string[], __input: AppStreamStopImageBuilderRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilderImageBuilderStateChangeReason.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilderImageBuilderStateChangeReason.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilderImageBuilderStateChangeReason.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamStopImageBuilderRequest`](#aws-cdk-sdk.appstream.AppStreamStopImageBuilderRequest)

---



#### Properties <a name="Properties"></a>

##### `code`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilderImageBuilderStateChangeReason.property.code"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilderImageBuilderStateChangeReason.property.message"></a>

- *Type:* `string`

---


### AppStreamResponsesStopImageBuilderImageBuilderVpcConfig <a name="aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilderImageBuilderVpcConfig"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilderImageBuilderVpcConfig.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesStopImageBuilderImageBuilderVpcConfig(__scope: Construct, __resources: string[], __input: AppStreamStopImageBuilderRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilderImageBuilderVpcConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilderImageBuilderVpcConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilderImageBuilderVpcConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamStopImageBuilderRequest`](#aws-cdk-sdk.appstream.AppStreamStopImageBuilderRequest)

---



#### Properties <a name="Properties"></a>

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilderImageBuilderVpcConfig.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnetIds`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesStopImageBuilderImageBuilderVpcConfig.property.subnetIds"></a>

- *Type:* `string`[]

---


### AppStreamResponsesUpdateDirectoryConfig <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateDirectoryConfig"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateDirectoryConfig.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesUpdateDirectoryConfig(__scope: Construct, __resources: string[], __input: AppStreamUpdateDirectoryConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateDirectoryConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateDirectoryConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateDirectoryConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamUpdateDirectoryConfigRequest`](#aws-cdk-sdk.appstream.AppStreamUpdateDirectoryConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `directoryConfig`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateDirectoryConfig.property.directoryConfig"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamResponsesUpdateDirectoryConfigDirectoryConfig`](#aws-cdk-sdk.appstream.AppStreamResponsesUpdateDirectoryConfigDirectoryConfig)

---


### AppStreamResponsesUpdateDirectoryConfigDirectoryConfig <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateDirectoryConfigDirectoryConfig"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateDirectoryConfigDirectoryConfig.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesUpdateDirectoryConfigDirectoryConfig(__scope: Construct, __resources: string[], __input: AppStreamUpdateDirectoryConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateDirectoryConfigDirectoryConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateDirectoryConfigDirectoryConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateDirectoryConfigDirectoryConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamUpdateDirectoryConfigRequest`](#aws-cdk-sdk.appstream.AppStreamUpdateDirectoryConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `createdTime`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateDirectoryConfigDirectoryConfig.property.createdTime"></a>

- *Type:* `string`

---

##### `directoryName`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateDirectoryConfigDirectoryConfig.property.directoryName"></a>

- *Type:* `string`

---

##### `organizationalUnitDistinguishedNames`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateDirectoryConfigDirectoryConfig.property.organizationalUnitDistinguishedNames"></a>

- *Type:* `string`[]

---

##### `serviceAccountCredentials`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateDirectoryConfigDirectoryConfig.property.serviceAccountCredentials"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamResponsesUpdateDirectoryConfigDirectoryConfigServiceAccountCredentials`](#aws-cdk-sdk.appstream.AppStreamResponsesUpdateDirectoryConfigDirectoryConfigServiceAccountCredentials)

---


### AppStreamResponsesUpdateDirectoryConfigDirectoryConfigServiceAccountCredentials <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateDirectoryConfigDirectoryConfigServiceAccountCredentials"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateDirectoryConfigDirectoryConfigServiceAccountCredentials.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesUpdateDirectoryConfigDirectoryConfigServiceAccountCredentials(__scope: Construct, __resources: string[], __input: AppStreamUpdateDirectoryConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateDirectoryConfigDirectoryConfigServiceAccountCredentials.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateDirectoryConfigDirectoryConfigServiceAccountCredentials.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateDirectoryConfigDirectoryConfigServiceAccountCredentials.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamUpdateDirectoryConfigRequest`](#aws-cdk-sdk.appstream.AppStreamUpdateDirectoryConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `accountName`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateDirectoryConfigDirectoryConfigServiceAccountCredentials.property.accountName"></a>

- *Type:* `string`

---

##### `accountPassword`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateDirectoryConfigDirectoryConfigServiceAccountCredentials.property.accountPassword"></a>

- *Type:* `string`

---


### AppStreamResponsesUpdateFleet <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateFleet"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateFleet.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesUpdateFleet(__scope: Construct, __resources: string[], __input: AppStreamUpdateFleetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateFleet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateFleet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateFleet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamUpdateFleetRequest`](#aws-cdk-sdk.appstream.AppStreamUpdateFleetRequest)

---



#### Properties <a name="Properties"></a>

##### `fleet`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateFleet.property.fleet"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamResponsesUpdateFleetFleet`](#aws-cdk-sdk.appstream.AppStreamResponsesUpdateFleetFleet)

---


### AppStreamResponsesUpdateFleetFleet <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateFleetFleet"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateFleetFleet.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesUpdateFleetFleet(__scope: Construct, __resources: string[], __input: AppStreamUpdateFleetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateFleetFleet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateFleetFleet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateFleetFleet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamUpdateFleetRequest`](#aws-cdk-sdk.appstream.AppStreamUpdateFleetRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateFleetFleet.property.arn"></a>

- *Type:* `string`

---

##### `computeCapacityStatus`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateFleetFleet.property.computeCapacityStatus"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamResponsesUpdateFleetFleetComputeCapacityStatus`](#aws-cdk-sdk.appstream.AppStreamResponsesUpdateFleetFleetComputeCapacityStatus)

---

##### `createdTime`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateFleetFleet.property.createdTime"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateFleetFleet.property.description"></a>

- *Type:* `string`

---

##### `disconnectTimeoutInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateFleetFleet.property.disconnectTimeoutInSeconds"></a>

- *Type:* `number`

---

##### `displayName`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateFleetFleet.property.displayName"></a>

- *Type:* `string`

---

##### `domainJoinInfo`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateFleetFleet.property.domainJoinInfo"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamResponsesUpdateFleetFleetDomainJoinInfo`](#aws-cdk-sdk.appstream.AppStreamResponsesUpdateFleetFleetDomainJoinInfo)

---

##### `enableDefaultInternetAccess`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateFleetFleet.property.enableDefaultInternetAccess"></a>

- *Type:* `boolean`

---

##### `fleetErrors`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateFleetFleet.property.fleetErrors"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamFleetError`](#aws-cdk-sdk.appstream.AppStreamFleetError)[]

---

##### `fleetType`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateFleetFleet.property.fleetType"></a>

- *Type:* `string`

---

##### `iamRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateFleetFleet.property.iamRoleArn"></a>

- *Type:* `string`

---

##### `idleDisconnectTimeoutInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateFleetFleet.property.idleDisconnectTimeoutInSeconds"></a>

- *Type:* `number`

---

##### `imageArn`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateFleetFleet.property.imageArn"></a>

- *Type:* `string`

---

##### `imageName`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateFleetFleet.property.imageName"></a>

- *Type:* `string`

---

##### `instanceType`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateFleetFleet.property.instanceType"></a>

- *Type:* `string`

---

##### `maxUserDurationInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateFleetFleet.property.maxUserDurationInSeconds"></a>

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateFleetFleet.property.name"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateFleetFleet.property.state"></a>

- *Type:* `string`

---

##### `streamView`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateFleetFleet.property.streamView"></a>

- *Type:* `string`

---

##### `vpcConfig`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateFleetFleet.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamResponsesUpdateFleetFleetVpcConfig`](#aws-cdk-sdk.appstream.AppStreamResponsesUpdateFleetFleetVpcConfig)

---


### AppStreamResponsesUpdateFleetFleetComputeCapacityStatus <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateFleetFleetComputeCapacityStatus"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateFleetFleetComputeCapacityStatus.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesUpdateFleetFleetComputeCapacityStatus(__scope: Construct, __resources: string[], __input: AppStreamUpdateFleetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateFleetFleetComputeCapacityStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateFleetFleetComputeCapacityStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateFleetFleetComputeCapacityStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamUpdateFleetRequest`](#aws-cdk-sdk.appstream.AppStreamUpdateFleetRequest)

---



#### Properties <a name="Properties"></a>

##### `available`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateFleetFleetComputeCapacityStatus.property.available"></a>

- *Type:* `number`

---

##### `desired`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateFleetFleetComputeCapacityStatus.property.desired"></a>

- *Type:* `number`

---

##### `inUse`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateFleetFleetComputeCapacityStatus.property.inUse"></a>

- *Type:* `number`

---

##### `running`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateFleetFleetComputeCapacityStatus.property.running"></a>

- *Type:* `number`

---


### AppStreamResponsesUpdateFleetFleetDomainJoinInfo <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateFleetFleetDomainJoinInfo"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateFleetFleetDomainJoinInfo.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesUpdateFleetFleetDomainJoinInfo(__scope: Construct, __resources: string[], __input: AppStreamUpdateFleetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateFleetFleetDomainJoinInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateFleetFleetDomainJoinInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateFleetFleetDomainJoinInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamUpdateFleetRequest`](#aws-cdk-sdk.appstream.AppStreamUpdateFleetRequest)

---



#### Properties <a name="Properties"></a>

##### `directoryName`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateFleetFleetDomainJoinInfo.property.directoryName"></a>

- *Type:* `string`

---

##### `organizationalUnitDistinguishedName`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateFleetFleetDomainJoinInfo.property.organizationalUnitDistinguishedName"></a>

- *Type:* `string`

---


### AppStreamResponsesUpdateFleetFleetVpcConfig <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateFleetFleetVpcConfig"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateFleetFleetVpcConfig.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesUpdateFleetFleetVpcConfig(__scope: Construct, __resources: string[], __input: AppStreamUpdateFleetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateFleetFleetVpcConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateFleetFleetVpcConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateFleetFleetVpcConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamUpdateFleetRequest`](#aws-cdk-sdk.appstream.AppStreamUpdateFleetRequest)

---



#### Properties <a name="Properties"></a>

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateFleetFleetVpcConfig.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnetIds`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateFleetFleetVpcConfig.property.subnetIds"></a>

- *Type:* `string`[]

---


### AppStreamResponsesUpdateStack <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateStack"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateStack.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesUpdateStack(__scope: Construct, __resources: string[], __input: AppStreamUpdateStackRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateStack.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateStack.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateStack.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamUpdateStackRequest`](#aws-cdk-sdk.appstream.AppStreamUpdateStackRequest)

---



#### Properties <a name="Properties"></a>

##### `stack`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateStack.property.stack"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamResponsesUpdateStackStack`](#aws-cdk-sdk.appstream.AppStreamResponsesUpdateStackStack)

---


### AppStreamResponsesUpdateStackStack <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateStackStack"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateStackStack.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesUpdateStackStack(__scope: Construct, __resources: string[], __input: AppStreamUpdateStackRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateStackStack.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateStackStack.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateStackStack.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamUpdateStackRequest`](#aws-cdk-sdk.appstream.AppStreamUpdateStackRequest)

---



#### Properties <a name="Properties"></a>

##### `accessEndpoints`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateStackStack.property.accessEndpoints"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamAccessEndpoint`](#aws-cdk-sdk.appstream.AppStreamAccessEndpoint)[]

---

##### `applicationSettings`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateStackStack.property.applicationSettings"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamResponsesUpdateStackStackApplicationSettings`](#aws-cdk-sdk.appstream.AppStreamResponsesUpdateStackStackApplicationSettings)

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateStackStack.property.arn"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateStackStack.property.createdTime"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateStackStack.property.description"></a>

- *Type:* `string`

---

##### `displayName`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateStackStack.property.displayName"></a>

- *Type:* `string`

---

##### `embedHostDomains`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateStackStack.property.embedHostDomains"></a>

- *Type:* `string`[]

---

##### `feedbackUrl`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateStackStack.property.feedbackUrl"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateStackStack.property.name"></a>

- *Type:* `string`

---

##### `redirectUrl`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateStackStack.property.redirectUrl"></a>

- *Type:* `string`

---

##### `stackErrors`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateStackStack.property.stackErrors"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamStackError`](#aws-cdk-sdk.appstream.AppStreamStackError)[]

---

##### `storageConnectors`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateStackStack.property.storageConnectors"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamStorageConnector`](#aws-cdk-sdk.appstream.AppStreamStorageConnector)[]

---

##### `userSettings`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateStackStack.property.userSettings"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamUserSetting`](#aws-cdk-sdk.appstream.AppStreamUserSetting)[]

---


### AppStreamResponsesUpdateStackStackApplicationSettings <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateStackStackApplicationSettings"></a>

#### Initializer <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateStackStackApplicationSettings.Initializer"></a>

```typescript
import { appstream } from 'aws-cdk-sdk'

new appstream.AppStreamResponsesUpdateStackStackApplicationSettings(__scope: Construct, __resources: string[], __input: AppStreamUpdateStackRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateStackStackApplicationSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateStackStackApplicationSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateStackStackApplicationSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appstream.AppStreamUpdateStackRequest`](#aws-cdk-sdk.appstream.AppStreamUpdateStackRequest)

---



#### Properties <a name="Properties"></a>

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateStackStackApplicationSettings.property.enabled"></a>

- *Type:* `boolean`

---

##### `s3BucketName`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateStackStackApplicationSettings.property.s3BucketName"></a>

- *Type:* `string`

---

##### `settingsGroup`<sup>Required</sup> <a name="aws-cdk-sdk.appstream.AppStreamResponsesUpdateStackStackApplicationSettings.property.settingsGroup"></a>

- *Type:* `string`

---



