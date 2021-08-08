# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### MediaPackageVodClient <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodClient"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodClient.Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

new mediapackagevod.MediaPackageVodClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `createAsset` <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodClient.createAsset"></a>

```typescript
public createAsset(input: MediaPackageVodCreateAssetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodCreateAssetRequest`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodCreateAssetRequest)

---

##### `createPackagingConfiguration` <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodClient.createPackagingConfiguration"></a>

```typescript
public createPackagingConfiguration(input: MediaPackageVodCreatePackagingConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodCreatePackagingConfigurationRequest`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodCreatePackagingConfigurationRequest)

---

##### `createPackagingGroup` <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodClient.createPackagingGroup"></a>

```typescript
public createPackagingGroup(input: MediaPackageVodCreatePackagingGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodCreatePackagingGroupRequest`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodCreatePackagingGroupRequest)

---

##### `deleteAsset` <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodClient.deleteAsset"></a>

```typescript
public deleteAsset(input: MediaPackageVodDeleteAssetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodDeleteAssetRequest`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodDeleteAssetRequest)

---

##### `deletePackagingConfiguration` <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodClient.deletePackagingConfiguration"></a>

```typescript
public deletePackagingConfiguration(input: MediaPackageVodDeletePackagingConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodDeletePackagingConfigurationRequest`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodDeletePackagingConfigurationRequest)

---

##### `deletePackagingGroup` <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodClient.deletePackagingGroup"></a>

```typescript
public deletePackagingGroup(input: MediaPackageVodDeletePackagingGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodDeletePackagingGroupRequest`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodDeletePackagingGroupRequest)

---

##### `describeAsset` <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodClient.describeAsset"></a>

```typescript
public describeAsset(input: MediaPackageVodDescribeAssetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribeAssetRequest`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribeAssetRequest)

---

##### `describePackagingConfiguration` <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodClient.describePackagingConfiguration"></a>

```typescript
public describePackagingConfiguration(input: MediaPackageVodDescribePackagingConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribePackagingConfigurationRequest`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribePackagingConfigurationRequest)

---

##### `describePackagingGroup` <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodClient.describePackagingGroup"></a>

```typescript
public describePackagingGroup(input: MediaPackageVodDescribePackagingGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribePackagingGroupRequest`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribePackagingGroupRequest)

---

##### `listAssets` <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodClient.listAssets"></a>

```typescript
public listAssets(input: MediaPackageVodListAssetsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodListAssetsRequest`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodListAssetsRequest)

---

##### `listPackagingConfigurations` <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodClient.listPackagingConfigurations"></a>

```typescript
public listPackagingConfigurations(input: MediaPackageVodListPackagingConfigurationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodListPackagingConfigurationsRequest`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodListPackagingConfigurationsRequest)

---

##### `listPackagingGroups` <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodClient.listPackagingGroups"></a>

```typescript
public listPackagingGroups(input: MediaPackageVodListPackagingGroupsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodListPackagingGroupsRequest`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodListPackagingGroupsRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: MediaPackageVodListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodListTagsForResourceRequest`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodListTagsForResourceRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodClient.tagResource"></a>

```typescript
public tagResource(input: MediaPackageVodTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodTagResourceRequest`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodClient.untagResource"></a>

```typescript
public untagResource(input: MediaPackageVodUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodUntagResourceRequest`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodUntagResourceRequest)

---

##### `updatePackagingGroup` <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodClient.updatePackagingGroup"></a>

```typescript
public updatePackagingGroup(input: MediaPackageVodUpdatePackagingGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodUpdatePackagingGroupRequest`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodUpdatePackagingGroupRequest)

---




## Structs <a name="Structs"></a>

### MediaPackageVodAssetShallow <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodAssetShallow"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

const mediaPackageVodAssetShallow: mediapackagevod.MediaPackageVodAssetShallow = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodAssetShallow.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodAssetShallow.property.createdAt"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodAssetShallow.property.id"></a>

- *Type:* `string`

---

##### `packagingGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodAssetShallow.property.packagingGroupId"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodAssetShallow.property.resourceId"></a>

- *Type:* `string`

---

##### `sourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodAssetShallow.property.sourceArn"></a>

- *Type:* `string`

---

##### `sourceRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodAssetShallow.property.sourceRoleArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodAssetShallow.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### MediaPackageVodAuthorization <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodAuthorization"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

const mediaPackageVodAuthorization: mediapackagevod.MediaPackageVodAuthorization = { ... }
```

##### `cdnIdentifierSecret`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodAuthorization.property.cdnIdentifierSecret"></a>

- *Type:* `string`

---

##### `secretsRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodAuthorization.property.secretsRoleArn"></a>

- *Type:* `string`

---

### MediaPackageVodCmafEncryption <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodCmafEncryption"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

const mediaPackageVodCmafEncryption: mediapackagevod.MediaPackageVodCmafEncryption = { ... }
```

##### `spekeKeyProvider`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodCmafEncryption.property.spekeKeyProvider"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodSpekeKeyProvider`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodSpekeKeyProvider)

---

### MediaPackageVodCmafPackage <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodCmafPackage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

const mediaPackageVodCmafPackage: mediapackagevod.MediaPackageVodCmafPackage = { ... }
```

##### `hlsManifests`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodCmafPackage.property.hlsManifests"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodHlsManifest`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodHlsManifest)[]

---

##### `encryption`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodCmafPackage.property.encryption"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodCmafEncryption`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodCmafEncryption)

---

##### `segmentDurationSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodCmafPackage.property.segmentDurationSeconds"></a>

- *Type:* `number`

---

### MediaPackageVodCreateAssetRequest <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodCreateAssetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

const mediaPackageVodCreateAssetRequest: mediapackagevod.MediaPackageVodCreateAssetRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodCreateAssetRequest.property.id"></a>

- *Type:* `string`

---

##### `packagingGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodCreateAssetRequest.property.packagingGroupId"></a>

- *Type:* `string`

---

##### `sourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodCreateAssetRequest.property.sourceArn"></a>

- *Type:* `string`

---

##### `sourceRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodCreateAssetRequest.property.sourceRoleArn"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodCreateAssetRequest.property.resourceId"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodCreateAssetRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### MediaPackageVodCreateAssetResponse <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodCreateAssetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

const mediaPackageVodCreateAssetResponse: mediapackagevod.MediaPackageVodCreateAssetResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodCreateAssetResponse.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodCreateAssetResponse.property.createdAt"></a>

- *Type:* `string`

---

##### `egressEndpoints`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodCreateAssetResponse.property.egressEndpoints"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodEgressEndpoint`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodEgressEndpoint)[]

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodCreateAssetResponse.property.id"></a>

- *Type:* `string`

---

##### `packagingGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodCreateAssetResponse.property.packagingGroupId"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodCreateAssetResponse.property.resourceId"></a>

- *Type:* `string`

---

##### `sourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodCreateAssetResponse.property.sourceArn"></a>

- *Type:* `string`

---

##### `sourceRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodCreateAssetResponse.property.sourceRoleArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodCreateAssetResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### MediaPackageVodCreatePackagingConfigurationRequest <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodCreatePackagingConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

const mediaPackageVodCreatePackagingConfigurationRequest: mediapackagevod.MediaPackageVodCreatePackagingConfigurationRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodCreatePackagingConfigurationRequest.property.id"></a>

- *Type:* `string`

---

##### `packagingGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodCreatePackagingConfigurationRequest.property.packagingGroupId"></a>

- *Type:* `string`

---

##### `cmafPackage`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodCreatePackagingConfigurationRequest.property.cmafPackage"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodCmafPackage`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodCmafPackage)

---

##### `dashPackage`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodCreatePackagingConfigurationRequest.property.dashPackage"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodDashPackage`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodDashPackage)

---

##### `hlsPackage`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodCreatePackagingConfigurationRequest.property.hlsPackage"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodHlsPackage`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodHlsPackage)

---

##### `mssPackage`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodCreatePackagingConfigurationRequest.property.mssPackage"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodMssPackage`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodMssPackage)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodCreatePackagingConfigurationRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### MediaPackageVodCreatePackagingConfigurationResponse <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodCreatePackagingConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

const mediaPackageVodCreatePackagingConfigurationResponse: mediapackagevod.MediaPackageVodCreatePackagingConfigurationResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodCreatePackagingConfigurationResponse.property.arn"></a>

- *Type:* `string`

---

##### `cmafPackage`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodCreatePackagingConfigurationResponse.property.cmafPackage"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodCmafPackage`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodCmafPackage)

---

##### `dashPackage`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodCreatePackagingConfigurationResponse.property.dashPackage"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodDashPackage`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodDashPackage)

---

##### `hlsPackage`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodCreatePackagingConfigurationResponse.property.hlsPackage"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodHlsPackage`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodHlsPackage)

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodCreatePackagingConfigurationResponse.property.id"></a>

- *Type:* `string`

---

##### `mssPackage`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodCreatePackagingConfigurationResponse.property.mssPackage"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodMssPackage`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodMssPackage)

---

##### `packagingGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodCreatePackagingConfigurationResponse.property.packagingGroupId"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodCreatePackagingConfigurationResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### MediaPackageVodCreatePackagingGroupRequest <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodCreatePackagingGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

const mediaPackageVodCreatePackagingGroupRequest: mediapackagevod.MediaPackageVodCreatePackagingGroupRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodCreatePackagingGroupRequest.property.id"></a>

- *Type:* `string`

---

##### `authorization`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodCreatePackagingGroupRequest.property.authorization"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodAuthorization`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodAuthorization)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodCreatePackagingGroupRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### MediaPackageVodCreatePackagingGroupResponse <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodCreatePackagingGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

const mediaPackageVodCreatePackagingGroupResponse: mediapackagevod.MediaPackageVodCreatePackagingGroupResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodCreatePackagingGroupResponse.property.arn"></a>

- *Type:* `string`

---

##### `authorization`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodCreatePackagingGroupResponse.property.authorization"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodAuthorization`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodAuthorization)

---

##### `domainName`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodCreatePackagingGroupResponse.property.domainName"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodCreatePackagingGroupResponse.property.id"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodCreatePackagingGroupResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### MediaPackageVodDashEncryption <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodDashEncryption"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

const mediaPackageVodDashEncryption: mediapackagevod.MediaPackageVodDashEncryption = { ... }
```

##### `spekeKeyProvider`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodDashEncryption.property.spekeKeyProvider"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodSpekeKeyProvider`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodSpekeKeyProvider)

---

### MediaPackageVodDashManifest <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodDashManifest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

const mediaPackageVodDashManifest: mediapackagevod.MediaPackageVodDashManifest = { ... }
```

##### `manifestLayout`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodDashManifest.property.manifestLayout"></a>

- *Type:* `string`

---

##### `manifestName`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodDashManifest.property.manifestName"></a>

- *Type:* `string`

---

##### `minBufferTimeSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodDashManifest.property.minBufferTimeSeconds"></a>

- *Type:* `number`

---

##### `profile`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodDashManifest.property.profile"></a>

- *Type:* `string`

---

##### `streamSelection`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodDashManifest.property.streamSelection"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodStreamSelection`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodStreamSelection)

---

### MediaPackageVodDashPackage <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodDashPackage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

const mediaPackageVodDashPackage: mediapackagevod.MediaPackageVodDashPackage = { ... }
```

##### `dashManifests`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodDashPackage.property.dashManifests"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodDashManifest`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodDashManifest)[]

---

##### `encryption`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodDashPackage.property.encryption"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodDashEncryption`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodDashEncryption)

---

##### `periodTriggers`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodDashPackage.property.periodTriggers"></a>

- *Type:* `string`[]

---

##### `segmentDurationSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodDashPackage.property.segmentDurationSeconds"></a>

- *Type:* `number`

---

##### `segmentTemplateFormat`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodDashPackage.property.segmentTemplateFormat"></a>

- *Type:* `string`

---

### MediaPackageVodDeleteAssetRequest <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodDeleteAssetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

const mediaPackageVodDeleteAssetRequest: mediapackagevod.MediaPackageVodDeleteAssetRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodDeleteAssetRequest.property.id"></a>

- *Type:* `string`

---

### MediaPackageVodDeleteAssetResponse <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodDeleteAssetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

const mediaPackageVodDeleteAssetResponse: mediapackagevod.MediaPackageVodDeleteAssetResponse = { ... }
```

### MediaPackageVodDeletePackagingConfigurationRequest <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodDeletePackagingConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

const mediaPackageVodDeletePackagingConfigurationRequest: mediapackagevod.MediaPackageVodDeletePackagingConfigurationRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodDeletePackagingConfigurationRequest.property.id"></a>

- *Type:* `string`

---

### MediaPackageVodDeletePackagingConfigurationResponse <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodDeletePackagingConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

const mediaPackageVodDeletePackagingConfigurationResponse: mediapackagevod.MediaPackageVodDeletePackagingConfigurationResponse = { ... }
```

### MediaPackageVodDeletePackagingGroupRequest <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodDeletePackagingGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

const mediaPackageVodDeletePackagingGroupRequest: mediapackagevod.MediaPackageVodDeletePackagingGroupRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodDeletePackagingGroupRequest.property.id"></a>

- *Type:* `string`

---

### MediaPackageVodDeletePackagingGroupResponse <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodDeletePackagingGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

const mediaPackageVodDeletePackagingGroupResponse: mediapackagevod.MediaPackageVodDeletePackagingGroupResponse = { ... }
```

### MediaPackageVodDescribeAssetRequest <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribeAssetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

const mediaPackageVodDescribeAssetRequest: mediapackagevod.MediaPackageVodDescribeAssetRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribeAssetRequest.property.id"></a>

- *Type:* `string`

---

### MediaPackageVodDescribeAssetResponse <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribeAssetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

const mediaPackageVodDescribeAssetResponse: mediapackagevod.MediaPackageVodDescribeAssetResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribeAssetResponse.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribeAssetResponse.property.createdAt"></a>

- *Type:* `string`

---

##### `egressEndpoints`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribeAssetResponse.property.egressEndpoints"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodEgressEndpoint`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodEgressEndpoint)[]

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribeAssetResponse.property.id"></a>

- *Type:* `string`

---

##### `packagingGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribeAssetResponse.property.packagingGroupId"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribeAssetResponse.property.resourceId"></a>

- *Type:* `string`

---

##### `sourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribeAssetResponse.property.sourceArn"></a>

- *Type:* `string`

---

##### `sourceRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribeAssetResponse.property.sourceRoleArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribeAssetResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### MediaPackageVodDescribePackagingConfigurationRequest <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribePackagingConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

const mediaPackageVodDescribePackagingConfigurationRequest: mediapackagevod.MediaPackageVodDescribePackagingConfigurationRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribePackagingConfigurationRequest.property.id"></a>

- *Type:* `string`

---

### MediaPackageVodDescribePackagingConfigurationResponse <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribePackagingConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

const mediaPackageVodDescribePackagingConfigurationResponse: mediapackagevod.MediaPackageVodDescribePackagingConfigurationResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribePackagingConfigurationResponse.property.arn"></a>

- *Type:* `string`

---

##### `cmafPackage`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribePackagingConfigurationResponse.property.cmafPackage"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodCmafPackage`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodCmafPackage)

---

##### `dashPackage`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribePackagingConfigurationResponse.property.dashPackage"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodDashPackage`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodDashPackage)

---

##### `hlsPackage`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribePackagingConfigurationResponse.property.hlsPackage"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodHlsPackage`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodHlsPackage)

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribePackagingConfigurationResponse.property.id"></a>

- *Type:* `string`

---

##### `mssPackage`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribePackagingConfigurationResponse.property.mssPackage"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodMssPackage`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodMssPackage)

---

##### `packagingGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribePackagingConfigurationResponse.property.packagingGroupId"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribePackagingConfigurationResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### MediaPackageVodDescribePackagingGroupRequest <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribePackagingGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

const mediaPackageVodDescribePackagingGroupRequest: mediapackagevod.MediaPackageVodDescribePackagingGroupRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribePackagingGroupRequest.property.id"></a>

- *Type:* `string`

---

### MediaPackageVodDescribePackagingGroupResponse <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribePackagingGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

const mediaPackageVodDescribePackagingGroupResponse: mediapackagevod.MediaPackageVodDescribePackagingGroupResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribePackagingGroupResponse.property.arn"></a>

- *Type:* `string`

---

##### `authorization`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribePackagingGroupResponse.property.authorization"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodAuthorization`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodAuthorization)

---

##### `domainName`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribePackagingGroupResponse.property.domainName"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribePackagingGroupResponse.property.id"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribePackagingGroupResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### MediaPackageVodEgressEndpoint <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodEgressEndpoint"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

const mediaPackageVodEgressEndpoint: mediapackagevod.MediaPackageVodEgressEndpoint = { ... }
```

##### `packagingConfigurationId`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodEgressEndpoint.property.packagingConfigurationId"></a>

- *Type:* `string`

---

##### `url`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodEgressEndpoint.property.url"></a>

- *Type:* `string`

---

### MediaPackageVodHlsEncryption <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodHlsEncryption"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

const mediaPackageVodHlsEncryption: mediapackagevod.MediaPackageVodHlsEncryption = { ... }
```

##### `spekeKeyProvider`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodHlsEncryption.property.spekeKeyProvider"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodSpekeKeyProvider`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodSpekeKeyProvider)

---

##### `constantInitializationVector`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodHlsEncryption.property.constantInitializationVector"></a>

- *Type:* `string`

---

##### `encryptionMethod`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodHlsEncryption.property.encryptionMethod"></a>

- *Type:* `string`

---

### MediaPackageVodHlsManifest <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodHlsManifest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

const mediaPackageVodHlsManifest: mediapackagevod.MediaPackageVodHlsManifest = { ... }
```

##### `adMarkers`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodHlsManifest.property.adMarkers"></a>

- *Type:* `string`

---

##### `includeIframeOnlyStream`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodHlsManifest.property.includeIframeOnlyStream"></a>

- *Type:* `boolean`

---

##### `manifestName`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodHlsManifest.property.manifestName"></a>

- *Type:* `string`

---

##### `programDateTimeIntervalSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodHlsManifest.property.programDateTimeIntervalSeconds"></a>

- *Type:* `number`

---

##### `repeatExtXKey`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodHlsManifest.property.repeatExtXKey"></a>

- *Type:* `boolean`

---

##### `streamSelection`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodHlsManifest.property.streamSelection"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodStreamSelection`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodStreamSelection)

---

### MediaPackageVodHlsPackage <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodHlsPackage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

const mediaPackageVodHlsPackage: mediapackagevod.MediaPackageVodHlsPackage = { ... }
```

##### `hlsManifests`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodHlsPackage.property.hlsManifests"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodHlsManifest`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodHlsManifest)[]

---

##### `encryption`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodHlsPackage.property.encryption"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodHlsEncryption`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodHlsEncryption)

---

##### `segmentDurationSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodHlsPackage.property.segmentDurationSeconds"></a>

- *Type:* `number`

---

##### `useAudioRenditionGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodHlsPackage.property.useAudioRenditionGroup"></a>

- *Type:* `boolean`

---

### MediaPackageVodListAssetsRequest <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodListAssetsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

const mediaPackageVodListAssetsRequest: mediapackagevod.MediaPackageVodListAssetsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodListAssetsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodListAssetsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `packagingGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodListAssetsRequest.property.packagingGroupId"></a>

- *Type:* `string`

---

### MediaPackageVodListAssetsResponse <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodListAssetsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

const mediaPackageVodListAssetsResponse: mediapackagevod.MediaPackageVodListAssetsResponse = { ... }
```

##### `assets`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodListAssetsResponse.property.assets"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodAssetShallow`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodAssetShallow)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodListAssetsResponse.property.nextToken"></a>

- *Type:* `string`

---

### MediaPackageVodListPackagingConfigurationsRequest <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodListPackagingConfigurationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

const mediaPackageVodListPackagingConfigurationsRequest: mediapackagevod.MediaPackageVodListPackagingConfigurationsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodListPackagingConfigurationsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodListPackagingConfigurationsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `packagingGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodListPackagingConfigurationsRequest.property.packagingGroupId"></a>

- *Type:* `string`

---

### MediaPackageVodListPackagingConfigurationsResponse <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodListPackagingConfigurationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

const mediaPackageVodListPackagingConfigurationsResponse: mediapackagevod.MediaPackageVodListPackagingConfigurationsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodListPackagingConfigurationsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `packagingConfigurations`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodListPackagingConfigurationsResponse.property.packagingConfigurations"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodPackagingConfiguration`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodPackagingConfiguration)[]

---

### MediaPackageVodListPackagingGroupsRequest <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodListPackagingGroupsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

const mediaPackageVodListPackagingGroupsRequest: mediapackagevod.MediaPackageVodListPackagingGroupsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodListPackagingGroupsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodListPackagingGroupsRequest.property.nextToken"></a>

- *Type:* `string`

---

### MediaPackageVodListPackagingGroupsResponse <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodListPackagingGroupsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

const mediaPackageVodListPackagingGroupsResponse: mediapackagevod.MediaPackageVodListPackagingGroupsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodListPackagingGroupsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `packagingGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodListPackagingGroupsResponse.property.packagingGroups"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodPackagingGroup`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodPackagingGroup)[]

---

### MediaPackageVodListTagsForResourceRequest <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

const mediaPackageVodListTagsForResourceRequest: mediapackagevod.MediaPackageVodListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### MediaPackageVodListTagsForResourceResponse <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

const mediaPackageVodListTagsForResourceResponse: mediapackagevod.MediaPackageVodListTagsForResourceResponse = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodListTagsForResourceResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### MediaPackageVodMssEncryption <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodMssEncryption"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

const mediaPackageVodMssEncryption: mediapackagevod.MediaPackageVodMssEncryption = { ... }
```

##### `spekeKeyProvider`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodMssEncryption.property.spekeKeyProvider"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodSpekeKeyProvider`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodSpekeKeyProvider)

---

### MediaPackageVodMssManifest <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodMssManifest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

const mediaPackageVodMssManifest: mediapackagevod.MediaPackageVodMssManifest = { ... }
```

##### `manifestName`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodMssManifest.property.manifestName"></a>

- *Type:* `string`

---

##### `streamSelection`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodMssManifest.property.streamSelection"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodStreamSelection`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodStreamSelection)

---

### MediaPackageVodMssPackage <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodMssPackage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

const mediaPackageVodMssPackage: mediapackagevod.MediaPackageVodMssPackage = { ... }
```

##### `mssManifests`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodMssPackage.property.mssManifests"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodMssManifest`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodMssManifest)[]

---

##### `encryption`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodMssPackage.property.encryption"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodMssEncryption`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodMssEncryption)

---

##### `segmentDurationSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodMssPackage.property.segmentDurationSeconds"></a>

- *Type:* `number`

---

### MediaPackageVodPackagingConfiguration <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodPackagingConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

const mediaPackageVodPackagingConfiguration: mediapackagevod.MediaPackageVodPackagingConfiguration = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodPackagingConfiguration.property.arn"></a>

- *Type:* `string`

---

##### `cmafPackage`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodPackagingConfiguration.property.cmafPackage"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodCmafPackage`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodCmafPackage)

---

##### `dashPackage`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodPackagingConfiguration.property.dashPackage"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodDashPackage`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodDashPackage)

---

##### `hlsPackage`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodPackagingConfiguration.property.hlsPackage"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodHlsPackage`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodHlsPackage)

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodPackagingConfiguration.property.id"></a>

- *Type:* `string`

---

##### `mssPackage`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodPackagingConfiguration.property.mssPackage"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodMssPackage`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodMssPackage)

---

##### `packagingGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodPackagingConfiguration.property.packagingGroupId"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodPackagingConfiguration.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### MediaPackageVodPackagingGroup <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodPackagingGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

const mediaPackageVodPackagingGroup: mediapackagevod.MediaPackageVodPackagingGroup = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodPackagingGroup.property.arn"></a>

- *Type:* `string`

---

##### `authorization`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodPackagingGroup.property.authorization"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodAuthorization`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodAuthorization)

---

##### `domainName`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodPackagingGroup.property.domainName"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodPackagingGroup.property.id"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodPackagingGroup.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### MediaPackageVodSpekeKeyProvider <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodSpekeKeyProvider"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

const mediaPackageVodSpekeKeyProvider: mediapackagevod.MediaPackageVodSpekeKeyProvider = { ... }
```

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodSpekeKeyProvider.property.roleArn"></a>

- *Type:* `string`

---

##### `systemIds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodSpekeKeyProvider.property.systemIds"></a>

- *Type:* `string`[]

---

##### `url`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodSpekeKeyProvider.property.url"></a>

- *Type:* `string`

---

### MediaPackageVodStreamSelection <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodStreamSelection"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

const mediaPackageVodStreamSelection: mediapackagevod.MediaPackageVodStreamSelection = { ... }
```

##### `maxVideoBitsPerSecond`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodStreamSelection.property.maxVideoBitsPerSecond"></a>

- *Type:* `number`

---

##### `minVideoBitsPerSecond`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodStreamSelection.property.minVideoBitsPerSecond"></a>

- *Type:* `number`

---

##### `streamOrder`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodStreamSelection.property.streamOrder"></a>

- *Type:* `string`

---

### MediaPackageVodTagResourceRequest <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

const mediaPackageVodTagResourceRequest: mediapackagevod.MediaPackageVodTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodTagResourceRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### MediaPackageVodUntagResourceRequest <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

const mediaPackageVodUntagResourceRequest: mediapackagevod.MediaPackageVodUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### MediaPackageVodUpdatePackagingGroupRequest <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodUpdatePackagingGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

const mediaPackageVodUpdatePackagingGroupRequest: mediapackagevod.MediaPackageVodUpdatePackagingGroupRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodUpdatePackagingGroupRequest.property.id"></a>

- *Type:* `string`

---

##### `authorization`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodUpdatePackagingGroupRequest.property.authorization"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodAuthorization`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodAuthorization)

---

### MediaPackageVodUpdatePackagingGroupResponse <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodUpdatePackagingGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

const mediaPackageVodUpdatePackagingGroupResponse: mediapackagevod.MediaPackageVodUpdatePackagingGroupResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodUpdatePackagingGroupResponse.property.arn"></a>

- *Type:* `string`

---

##### `authorization`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodUpdatePackagingGroupResponse.property.authorization"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodAuthorization`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodAuthorization)

---

##### `domainName`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodUpdatePackagingGroupResponse.property.domainName"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodUpdatePackagingGroupResponse.property.id"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodUpdatePackagingGroupResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

## Classes <a name="Classes"></a>

### MediaPackageVodResponsesCreateAsset <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreateAsset"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreateAsset.Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

new mediapackagevod.MediaPackageVodResponsesCreateAsset(__scope: Construct, __resources: string[], __input: MediaPackageVodCreateAssetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreateAsset.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreateAsset.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreateAsset.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodCreateAssetRequest`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodCreateAssetRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreateAsset.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreateAsset.property.createdAt"></a>

- *Type:* `string`

---

##### `egressEndpoints`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreateAsset.property.egressEndpoints"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodEgressEndpoint`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodEgressEndpoint)[]

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreateAsset.property.id"></a>

- *Type:* `string`

---

##### `packagingGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreateAsset.property.packagingGroupId"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreateAsset.property.resourceId"></a>

- *Type:* `string`

---

##### `sourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreateAsset.property.sourceArn"></a>

- *Type:* `string`

---

##### `sourceRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreateAsset.property.sourceRoleArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreateAsset.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### MediaPackageVodResponsesCreatePackagingConfiguration <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfiguration.Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

new mediapackagevod.MediaPackageVodResponsesCreatePackagingConfiguration(__scope: Construct, __resources: string[], __input: MediaPackageVodCreatePackagingConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodCreatePackagingConfigurationRequest`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodCreatePackagingConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfiguration.property.arn"></a>

- *Type:* `string`

---

##### `cmafPackage`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfiguration.property.cmafPackage"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationCmafPackage`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationCmafPackage)

---

##### `dashPackage`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfiguration.property.dashPackage"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationDashPackage`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationDashPackage)

---

##### `hlsPackage`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfiguration.property.hlsPackage"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationHlsPackage`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationHlsPackage)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfiguration.property.id"></a>

- *Type:* `string`

---

##### `mssPackage`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfiguration.property.mssPackage"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationMssPackage`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationMssPackage)

---

##### `packagingGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfiguration.property.packagingGroupId"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfiguration.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### MediaPackageVodResponsesCreatePackagingConfigurationCmafPackage <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationCmafPackage"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationCmafPackage.Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

new mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationCmafPackage(__scope: Construct, __resources: string[], __input: MediaPackageVodCreatePackagingConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationCmafPackage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationCmafPackage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationCmafPackage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodCreatePackagingConfigurationRequest`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodCreatePackagingConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `encryption`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationCmafPackage.property.encryption"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationCmafPackageEncryption`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationCmafPackageEncryption)

---

##### `hlsManifests`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationCmafPackage.property.hlsManifests"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodHlsManifest`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodHlsManifest)[]

---

##### `segmentDurationSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationCmafPackage.property.segmentDurationSeconds"></a>

- *Type:* `number`

---


### MediaPackageVodResponsesCreatePackagingConfigurationCmafPackageEncryption <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationCmafPackageEncryption"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationCmafPackageEncryption.Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

new mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationCmafPackageEncryption(__scope: Construct, __resources: string[], __input: MediaPackageVodCreatePackagingConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationCmafPackageEncryption.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationCmafPackageEncryption.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationCmafPackageEncryption.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodCreatePackagingConfigurationRequest`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodCreatePackagingConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `spekeKeyProvider`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationCmafPackageEncryption.property.spekeKeyProvider"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider)

---


### MediaPackageVodResponsesCreatePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider.Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

new mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider(__scope: Construct, __resources: string[], __input: MediaPackageVodCreatePackagingConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodCreatePackagingConfigurationRequest`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodCreatePackagingConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider.property.roleArn"></a>

- *Type:* `string`

---

##### `systemIds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider.property.systemIds"></a>

- *Type:* `string`[]

---

##### `url`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider.property.url"></a>

- *Type:* `string`

---


### MediaPackageVodResponsesCreatePackagingConfigurationDashPackage <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationDashPackage"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationDashPackage.Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

new mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationDashPackage(__scope: Construct, __resources: string[], __input: MediaPackageVodCreatePackagingConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationDashPackage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationDashPackage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationDashPackage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodCreatePackagingConfigurationRequest`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodCreatePackagingConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `dashManifests`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationDashPackage.property.dashManifests"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodDashManifest`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodDashManifest)[]

---

##### `encryption`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationDashPackage.property.encryption"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationDashPackageEncryption`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationDashPackageEncryption)

---

##### `periodTriggers`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationDashPackage.property.periodTriggers"></a>

- *Type:* `string`[]

---

##### `segmentDurationSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationDashPackage.property.segmentDurationSeconds"></a>

- *Type:* `number`

---

##### `segmentTemplateFormat`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationDashPackage.property.segmentTemplateFormat"></a>

- *Type:* `string`

---


### MediaPackageVodResponsesCreatePackagingConfigurationDashPackageEncryption <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationDashPackageEncryption"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationDashPackageEncryption.Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

new mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationDashPackageEncryption(__scope: Construct, __resources: string[], __input: MediaPackageVodCreatePackagingConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationDashPackageEncryption.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationDashPackageEncryption.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationDashPackageEncryption.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodCreatePackagingConfigurationRequest`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodCreatePackagingConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `spekeKeyProvider`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationDashPackageEncryption.property.spekeKeyProvider"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationDashPackageEncryptionSpekeKeyProvider`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationDashPackageEncryptionSpekeKeyProvider)

---


### MediaPackageVodResponsesCreatePackagingConfigurationDashPackageEncryptionSpekeKeyProvider <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationDashPackageEncryptionSpekeKeyProvider"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationDashPackageEncryptionSpekeKeyProvider.Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

new mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationDashPackageEncryptionSpekeKeyProvider(__scope: Construct, __resources: string[], __input: MediaPackageVodCreatePackagingConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationDashPackageEncryptionSpekeKeyProvider.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationDashPackageEncryptionSpekeKeyProvider.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationDashPackageEncryptionSpekeKeyProvider.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodCreatePackagingConfigurationRequest`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodCreatePackagingConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationDashPackageEncryptionSpekeKeyProvider.property.roleArn"></a>

- *Type:* `string`

---

##### `systemIds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationDashPackageEncryptionSpekeKeyProvider.property.systemIds"></a>

- *Type:* `string`[]

---

##### `url`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationDashPackageEncryptionSpekeKeyProvider.property.url"></a>

- *Type:* `string`

---


### MediaPackageVodResponsesCreatePackagingConfigurationHlsPackage <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationHlsPackage"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationHlsPackage.Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

new mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationHlsPackage(__scope: Construct, __resources: string[], __input: MediaPackageVodCreatePackagingConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationHlsPackage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationHlsPackage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationHlsPackage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodCreatePackagingConfigurationRequest`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodCreatePackagingConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `encryption`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationHlsPackage.property.encryption"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationHlsPackageEncryption`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationHlsPackageEncryption)

---

##### `hlsManifests`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationHlsPackage.property.hlsManifests"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodHlsManifest`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodHlsManifest)[]

---

##### `segmentDurationSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationHlsPackage.property.segmentDurationSeconds"></a>

- *Type:* `number`

---

##### `useAudioRenditionGroup`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationHlsPackage.property.useAudioRenditionGroup"></a>

- *Type:* `boolean`

---


### MediaPackageVodResponsesCreatePackagingConfigurationHlsPackageEncryption <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationHlsPackageEncryption"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationHlsPackageEncryption.Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

new mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationHlsPackageEncryption(__scope: Construct, __resources: string[], __input: MediaPackageVodCreatePackagingConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationHlsPackageEncryption.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationHlsPackageEncryption.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationHlsPackageEncryption.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodCreatePackagingConfigurationRequest`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodCreatePackagingConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `constantInitializationVector`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationHlsPackageEncryption.property.constantInitializationVector"></a>

- *Type:* `string`

---

##### `encryptionMethod`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationHlsPackageEncryption.property.encryptionMethod"></a>

- *Type:* `string`

---

##### `spekeKeyProvider`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationHlsPackageEncryption.property.spekeKeyProvider"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider)

---


### MediaPackageVodResponsesCreatePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider.Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

new mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider(__scope: Construct, __resources: string[], __input: MediaPackageVodCreatePackagingConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodCreatePackagingConfigurationRequest`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodCreatePackagingConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider.property.roleArn"></a>

- *Type:* `string`

---

##### `systemIds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider.property.systemIds"></a>

- *Type:* `string`[]

---

##### `url`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider.property.url"></a>

- *Type:* `string`

---


### MediaPackageVodResponsesCreatePackagingConfigurationMssPackage <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationMssPackage"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationMssPackage.Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

new mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationMssPackage(__scope: Construct, __resources: string[], __input: MediaPackageVodCreatePackagingConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationMssPackage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationMssPackage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationMssPackage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodCreatePackagingConfigurationRequest`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodCreatePackagingConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `encryption`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationMssPackage.property.encryption"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationMssPackageEncryption`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationMssPackageEncryption)

---

##### `mssManifests`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationMssPackage.property.mssManifests"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodMssManifest`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodMssManifest)[]

---

##### `segmentDurationSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationMssPackage.property.segmentDurationSeconds"></a>

- *Type:* `number`

---


### MediaPackageVodResponsesCreatePackagingConfigurationMssPackageEncryption <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationMssPackageEncryption"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationMssPackageEncryption.Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

new mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationMssPackageEncryption(__scope: Construct, __resources: string[], __input: MediaPackageVodCreatePackagingConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationMssPackageEncryption.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationMssPackageEncryption.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationMssPackageEncryption.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodCreatePackagingConfigurationRequest`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodCreatePackagingConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `spekeKeyProvider`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationMssPackageEncryption.property.spekeKeyProvider"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationMssPackageEncryptionSpekeKeyProvider`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationMssPackageEncryptionSpekeKeyProvider)

---


### MediaPackageVodResponsesCreatePackagingConfigurationMssPackageEncryptionSpekeKeyProvider <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationMssPackageEncryptionSpekeKeyProvider"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationMssPackageEncryptionSpekeKeyProvider.Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

new mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationMssPackageEncryptionSpekeKeyProvider(__scope: Construct, __resources: string[], __input: MediaPackageVodCreatePackagingConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationMssPackageEncryptionSpekeKeyProvider.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationMssPackageEncryptionSpekeKeyProvider.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationMssPackageEncryptionSpekeKeyProvider.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodCreatePackagingConfigurationRequest`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodCreatePackagingConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationMssPackageEncryptionSpekeKeyProvider.property.roleArn"></a>

- *Type:* `string`

---

##### `systemIds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationMssPackageEncryptionSpekeKeyProvider.property.systemIds"></a>

- *Type:* `string`[]

---

##### `url`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingConfigurationMssPackageEncryptionSpekeKeyProvider.property.url"></a>

- *Type:* `string`

---


### MediaPackageVodResponsesCreatePackagingGroup <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingGroup"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingGroup.Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

new mediapackagevod.MediaPackageVodResponsesCreatePackagingGroup(__scope: Construct, __resources: string[], __input: MediaPackageVodCreatePackagingGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodCreatePackagingGroupRequest`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodCreatePackagingGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingGroup.property.arn"></a>

- *Type:* `string`

---

##### `authorization`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingGroup.property.authorization"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingGroupAuthorization`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingGroupAuthorization)

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingGroup.property.domainName"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingGroup.property.id"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingGroup.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### MediaPackageVodResponsesCreatePackagingGroupAuthorization <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingGroupAuthorization"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingGroupAuthorization.Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

new mediapackagevod.MediaPackageVodResponsesCreatePackagingGroupAuthorization(__scope: Construct, __resources: string[], __input: MediaPackageVodCreatePackagingGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingGroupAuthorization.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingGroupAuthorization.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingGroupAuthorization.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodCreatePackagingGroupRequest`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodCreatePackagingGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `cdnIdentifierSecret`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingGroupAuthorization.property.cdnIdentifierSecret"></a>

- *Type:* `string`

---

##### `secretsRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesCreatePackagingGroupAuthorization.property.secretsRoleArn"></a>

- *Type:* `string`

---


### MediaPackageVodResponsesDescribeAsset <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribeAsset"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribeAsset.Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

new mediapackagevod.MediaPackageVodResponsesDescribeAsset(__scope: Construct, __resources: string[], __input: MediaPackageVodDescribeAssetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribeAsset.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribeAsset.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribeAsset.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribeAssetRequest`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribeAssetRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribeAsset.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribeAsset.property.createdAt"></a>

- *Type:* `string`

---

##### `egressEndpoints`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribeAsset.property.egressEndpoints"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodEgressEndpoint`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodEgressEndpoint)[]

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribeAsset.property.id"></a>

- *Type:* `string`

---

##### `packagingGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribeAsset.property.packagingGroupId"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribeAsset.property.resourceId"></a>

- *Type:* `string`

---

##### `sourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribeAsset.property.sourceArn"></a>

- *Type:* `string`

---

##### `sourceRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribeAsset.property.sourceRoleArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribeAsset.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### MediaPackageVodResponsesDescribePackagingConfiguration <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfiguration.Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

new mediapackagevod.MediaPackageVodResponsesDescribePackagingConfiguration(__scope: Construct, __resources: string[], __input: MediaPackageVodDescribePackagingConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribePackagingConfigurationRequest`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribePackagingConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfiguration.property.arn"></a>

- *Type:* `string`

---

##### `cmafPackage`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfiguration.property.cmafPackage"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationCmafPackage`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationCmafPackage)

---

##### `dashPackage`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfiguration.property.dashPackage"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationDashPackage`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationDashPackage)

---

##### `hlsPackage`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfiguration.property.hlsPackage"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationHlsPackage`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationHlsPackage)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfiguration.property.id"></a>

- *Type:* `string`

---

##### `mssPackage`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfiguration.property.mssPackage"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationMssPackage`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationMssPackage)

---

##### `packagingGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfiguration.property.packagingGroupId"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfiguration.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### MediaPackageVodResponsesDescribePackagingConfigurationCmafPackage <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationCmafPackage"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationCmafPackage.Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

new mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationCmafPackage(__scope: Construct, __resources: string[], __input: MediaPackageVodDescribePackagingConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationCmafPackage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationCmafPackage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationCmafPackage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribePackagingConfigurationRequest`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribePackagingConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `encryption`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationCmafPackage.property.encryption"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationCmafPackageEncryption`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationCmafPackageEncryption)

---

##### `hlsManifests`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationCmafPackage.property.hlsManifests"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodHlsManifest`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodHlsManifest)[]

---

##### `segmentDurationSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationCmafPackage.property.segmentDurationSeconds"></a>

- *Type:* `number`

---


### MediaPackageVodResponsesDescribePackagingConfigurationCmafPackageEncryption <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationCmafPackageEncryption"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationCmafPackageEncryption.Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

new mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationCmafPackageEncryption(__scope: Construct, __resources: string[], __input: MediaPackageVodDescribePackagingConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationCmafPackageEncryption.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationCmafPackageEncryption.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationCmafPackageEncryption.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribePackagingConfigurationRequest`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribePackagingConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `spekeKeyProvider`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationCmafPackageEncryption.property.spekeKeyProvider"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider)

---


### MediaPackageVodResponsesDescribePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider.Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

new mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider(__scope: Construct, __resources: string[], __input: MediaPackageVodDescribePackagingConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribePackagingConfigurationRequest`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribePackagingConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider.property.roleArn"></a>

- *Type:* `string`

---

##### `systemIds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider.property.systemIds"></a>

- *Type:* `string`[]

---

##### `url`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider.property.url"></a>

- *Type:* `string`

---


### MediaPackageVodResponsesDescribePackagingConfigurationDashPackage <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationDashPackage"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationDashPackage.Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

new mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationDashPackage(__scope: Construct, __resources: string[], __input: MediaPackageVodDescribePackagingConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationDashPackage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationDashPackage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationDashPackage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribePackagingConfigurationRequest`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribePackagingConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `dashManifests`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationDashPackage.property.dashManifests"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodDashManifest`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodDashManifest)[]

---

##### `encryption`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationDashPackage.property.encryption"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationDashPackageEncryption`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationDashPackageEncryption)

---

##### `periodTriggers`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationDashPackage.property.periodTriggers"></a>

- *Type:* `string`[]

---

##### `segmentDurationSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationDashPackage.property.segmentDurationSeconds"></a>

- *Type:* `number`

---

##### `segmentTemplateFormat`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationDashPackage.property.segmentTemplateFormat"></a>

- *Type:* `string`

---


### MediaPackageVodResponsesDescribePackagingConfigurationDashPackageEncryption <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationDashPackageEncryption"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationDashPackageEncryption.Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

new mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationDashPackageEncryption(__scope: Construct, __resources: string[], __input: MediaPackageVodDescribePackagingConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationDashPackageEncryption.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationDashPackageEncryption.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationDashPackageEncryption.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribePackagingConfigurationRequest`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribePackagingConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `spekeKeyProvider`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationDashPackageEncryption.property.spekeKeyProvider"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationDashPackageEncryptionSpekeKeyProvider`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationDashPackageEncryptionSpekeKeyProvider)

---


### MediaPackageVodResponsesDescribePackagingConfigurationDashPackageEncryptionSpekeKeyProvider <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationDashPackageEncryptionSpekeKeyProvider"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationDashPackageEncryptionSpekeKeyProvider.Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

new mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationDashPackageEncryptionSpekeKeyProvider(__scope: Construct, __resources: string[], __input: MediaPackageVodDescribePackagingConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationDashPackageEncryptionSpekeKeyProvider.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationDashPackageEncryptionSpekeKeyProvider.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationDashPackageEncryptionSpekeKeyProvider.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribePackagingConfigurationRequest`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribePackagingConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationDashPackageEncryptionSpekeKeyProvider.property.roleArn"></a>

- *Type:* `string`

---

##### `systemIds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationDashPackageEncryptionSpekeKeyProvider.property.systemIds"></a>

- *Type:* `string`[]

---

##### `url`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationDashPackageEncryptionSpekeKeyProvider.property.url"></a>

- *Type:* `string`

---


### MediaPackageVodResponsesDescribePackagingConfigurationHlsPackage <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationHlsPackage"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationHlsPackage.Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

new mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationHlsPackage(__scope: Construct, __resources: string[], __input: MediaPackageVodDescribePackagingConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationHlsPackage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationHlsPackage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationHlsPackage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribePackagingConfigurationRequest`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribePackagingConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `encryption`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationHlsPackage.property.encryption"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationHlsPackageEncryption`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationHlsPackageEncryption)

---

##### `hlsManifests`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationHlsPackage.property.hlsManifests"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodHlsManifest`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodHlsManifest)[]

---

##### `segmentDurationSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationHlsPackage.property.segmentDurationSeconds"></a>

- *Type:* `number`

---

##### `useAudioRenditionGroup`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationHlsPackage.property.useAudioRenditionGroup"></a>

- *Type:* `boolean`

---


### MediaPackageVodResponsesDescribePackagingConfigurationHlsPackageEncryption <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationHlsPackageEncryption"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationHlsPackageEncryption.Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

new mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationHlsPackageEncryption(__scope: Construct, __resources: string[], __input: MediaPackageVodDescribePackagingConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationHlsPackageEncryption.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationHlsPackageEncryption.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationHlsPackageEncryption.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribePackagingConfigurationRequest`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribePackagingConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `constantInitializationVector`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationHlsPackageEncryption.property.constantInitializationVector"></a>

- *Type:* `string`

---

##### `encryptionMethod`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationHlsPackageEncryption.property.encryptionMethod"></a>

- *Type:* `string`

---

##### `spekeKeyProvider`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationHlsPackageEncryption.property.spekeKeyProvider"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider)

---


### MediaPackageVodResponsesDescribePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider.Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

new mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider(__scope: Construct, __resources: string[], __input: MediaPackageVodDescribePackagingConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribePackagingConfigurationRequest`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribePackagingConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider.property.roleArn"></a>

- *Type:* `string`

---

##### `systemIds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider.property.systemIds"></a>

- *Type:* `string`[]

---

##### `url`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider.property.url"></a>

- *Type:* `string`

---


### MediaPackageVodResponsesDescribePackagingConfigurationMssPackage <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationMssPackage"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationMssPackage.Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

new mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationMssPackage(__scope: Construct, __resources: string[], __input: MediaPackageVodDescribePackagingConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationMssPackage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationMssPackage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationMssPackage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribePackagingConfigurationRequest`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribePackagingConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `encryption`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationMssPackage.property.encryption"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationMssPackageEncryption`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationMssPackageEncryption)

---

##### `mssManifests`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationMssPackage.property.mssManifests"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodMssManifest`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodMssManifest)[]

---

##### `segmentDurationSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationMssPackage.property.segmentDurationSeconds"></a>

- *Type:* `number`

---


### MediaPackageVodResponsesDescribePackagingConfigurationMssPackageEncryption <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationMssPackageEncryption"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationMssPackageEncryption.Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

new mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationMssPackageEncryption(__scope: Construct, __resources: string[], __input: MediaPackageVodDescribePackagingConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationMssPackageEncryption.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationMssPackageEncryption.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationMssPackageEncryption.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribePackagingConfigurationRequest`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribePackagingConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `spekeKeyProvider`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationMssPackageEncryption.property.spekeKeyProvider"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationMssPackageEncryptionSpekeKeyProvider`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationMssPackageEncryptionSpekeKeyProvider)

---


### MediaPackageVodResponsesDescribePackagingConfigurationMssPackageEncryptionSpekeKeyProvider <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationMssPackageEncryptionSpekeKeyProvider"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationMssPackageEncryptionSpekeKeyProvider.Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

new mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationMssPackageEncryptionSpekeKeyProvider(__scope: Construct, __resources: string[], __input: MediaPackageVodDescribePackagingConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationMssPackageEncryptionSpekeKeyProvider.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationMssPackageEncryptionSpekeKeyProvider.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationMssPackageEncryptionSpekeKeyProvider.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribePackagingConfigurationRequest`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribePackagingConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationMssPackageEncryptionSpekeKeyProvider.property.roleArn"></a>

- *Type:* `string`

---

##### `systemIds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationMssPackageEncryptionSpekeKeyProvider.property.systemIds"></a>

- *Type:* `string`[]

---

##### `url`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingConfigurationMssPackageEncryptionSpekeKeyProvider.property.url"></a>

- *Type:* `string`

---


### MediaPackageVodResponsesDescribePackagingGroup <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingGroup"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingGroup.Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

new mediapackagevod.MediaPackageVodResponsesDescribePackagingGroup(__scope: Construct, __resources: string[], __input: MediaPackageVodDescribePackagingGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribePackagingGroupRequest`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribePackagingGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingGroup.property.arn"></a>

- *Type:* `string`

---

##### `authorization`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingGroup.property.authorization"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingGroupAuthorization`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingGroupAuthorization)

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingGroup.property.domainName"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingGroup.property.id"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingGroup.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### MediaPackageVodResponsesDescribePackagingGroupAuthorization <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingGroupAuthorization"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingGroupAuthorization.Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

new mediapackagevod.MediaPackageVodResponsesDescribePackagingGroupAuthorization(__scope: Construct, __resources: string[], __input: MediaPackageVodDescribePackagingGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingGroupAuthorization.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingGroupAuthorization.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingGroupAuthorization.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribePackagingGroupRequest`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodDescribePackagingGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `cdnIdentifierSecret`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingGroupAuthorization.property.cdnIdentifierSecret"></a>

- *Type:* `string`

---

##### `secretsRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesDescribePackagingGroupAuthorization.property.secretsRoleArn"></a>

- *Type:* `string`

---


### MediaPackageVodResponsesListAssets <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesListAssets"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesListAssets.Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

new mediapackagevod.MediaPackageVodResponsesListAssets(__scope: Construct, __resources: string[], __input: MediaPackageVodListAssetsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesListAssets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesListAssets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesListAssets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodListAssetsRequest`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodListAssetsRequest)

---



#### Properties <a name="Properties"></a>

##### `assets`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesListAssets.property.assets"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodAssetShallow`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodAssetShallow)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesListAssets.property.nextToken"></a>

- *Type:* `string`

---


### MediaPackageVodResponsesListPackagingConfigurations <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesListPackagingConfigurations"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesListPackagingConfigurations.Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

new mediapackagevod.MediaPackageVodResponsesListPackagingConfigurations(__scope: Construct, __resources: string[], __input: MediaPackageVodListPackagingConfigurationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesListPackagingConfigurations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesListPackagingConfigurations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesListPackagingConfigurations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodListPackagingConfigurationsRequest`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodListPackagingConfigurationsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesListPackagingConfigurations.property.nextToken"></a>

- *Type:* `string`

---

##### `packagingConfigurations`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesListPackagingConfigurations.property.packagingConfigurations"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodPackagingConfiguration`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodPackagingConfiguration)[]

---


### MediaPackageVodResponsesListPackagingGroups <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesListPackagingGroups"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesListPackagingGroups.Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

new mediapackagevod.MediaPackageVodResponsesListPackagingGroups(__scope: Construct, __resources: string[], __input: MediaPackageVodListPackagingGroupsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesListPackagingGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesListPackagingGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesListPackagingGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodListPackagingGroupsRequest`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodListPackagingGroupsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesListPackagingGroups.property.nextToken"></a>

- *Type:* `string`

---

##### `packagingGroups`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesListPackagingGroups.property.packagingGroups"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodPackagingGroup`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodPackagingGroup)[]

---


### MediaPackageVodResponsesListTagsForResource <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesListTagsForResource.Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

new mediapackagevod.MediaPackageVodResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: MediaPackageVodListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodListTagsForResourceRequest`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesListTagsForResource.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### MediaPackageVodResponsesUpdatePackagingGroup <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesUpdatePackagingGroup"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesUpdatePackagingGroup.Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

new mediapackagevod.MediaPackageVodResponsesUpdatePackagingGroup(__scope: Construct, __resources: string[], __input: MediaPackageVodUpdatePackagingGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesUpdatePackagingGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesUpdatePackagingGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesUpdatePackagingGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodUpdatePackagingGroupRequest`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodUpdatePackagingGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesUpdatePackagingGroup.property.arn"></a>

- *Type:* `string`

---

##### `authorization`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesUpdatePackagingGroup.property.authorization"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesUpdatePackagingGroupAuthorization`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesUpdatePackagingGroupAuthorization)

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesUpdatePackagingGroup.property.domainName"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesUpdatePackagingGroup.property.id"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesUpdatePackagingGroup.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### MediaPackageVodResponsesUpdatePackagingGroupAuthorization <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesUpdatePackagingGroupAuthorization"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesUpdatePackagingGroupAuthorization.Initializer"></a>

```typescript
import { mediapackagevod } from 'aws-cdk-sdk'

new mediapackagevod.MediaPackageVodResponsesUpdatePackagingGroupAuthorization(__scope: Construct, __resources: string[], __input: MediaPackageVodUpdatePackagingGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesUpdatePackagingGroupAuthorization.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesUpdatePackagingGroupAuthorization.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesUpdatePackagingGroupAuthorization.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackagevod.MediaPackageVodUpdatePackagingGroupRequest`](#aws-cdk-sdk.mediapackagevod.MediaPackageVodUpdatePackagingGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `cdnIdentifierSecret`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesUpdatePackagingGroupAuthorization.property.cdnIdentifierSecret"></a>

- *Type:* `string`

---

##### `secretsRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackagevod.MediaPackageVodResponsesUpdatePackagingGroupAuthorization.property.secretsRoleArn"></a>

- *Type:* `string`

---



