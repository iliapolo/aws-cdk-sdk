# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### CodeArtifactClient <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient"></a>

#### Initializer <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

new codeartifact.CodeArtifactClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `associateExternalConnection` <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.associateExternalConnection"></a>

```typescript
public associateExternalConnection(input: CodeArtifactAssociateExternalConnectionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactAssociateExternalConnectionRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactAssociateExternalConnectionRequest)

---

##### `copyPackageVersions` <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.copyPackageVersions"></a>

```typescript
public copyPackageVersions(input: CodeArtifactCopyPackageVersionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactCopyPackageVersionsRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactCopyPackageVersionsRequest)

---

##### `createDomain` <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.createDomain"></a>

```typescript
public createDomain(input: CodeArtifactCreateDomainRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactCreateDomainRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactCreateDomainRequest)

---

##### `createRepository` <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.createRepository"></a>

```typescript
public createRepository(input: CodeArtifactCreateRepositoryRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactCreateRepositoryRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactCreateRepositoryRequest)

---

##### `deleteDomain` <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.deleteDomain"></a>

```typescript
public deleteDomain(input: CodeArtifactDeleteDomainRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactDeleteDomainRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactDeleteDomainRequest)

---

##### `deleteDomainPermissionsPolicy` <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.deleteDomainPermissionsPolicy"></a>

```typescript
public deleteDomainPermissionsPolicy(input: CodeArtifactDeleteDomainPermissionsPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactDeleteDomainPermissionsPolicyRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactDeleteDomainPermissionsPolicyRequest)

---

##### `deletePackageVersions` <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.deletePackageVersions"></a>

```typescript
public deletePackageVersions(input: CodeArtifactDeletePackageVersionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactDeletePackageVersionsRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactDeletePackageVersionsRequest)

---

##### `deleteRepository` <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.deleteRepository"></a>

```typescript
public deleteRepository(input: CodeArtifactDeleteRepositoryRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactDeleteRepositoryRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactDeleteRepositoryRequest)

---

##### `deleteRepositoryPermissionsPolicy` <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.deleteRepositoryPermissionsPolicy"></a>

```typescript
public deleteRepositoryPermissionsPolicy(input: CodeArtifactDeleteRepositoryPermissionsPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactDeleteRepositoryPermissionsPolicyRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactDeleteRepositoryPermissionsPolicyRequest)

---

##### `describeDomain` <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.describeDomain"></a>

```typescript
public describeDomain(input: CodeArtifactDescribeDomainRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactDescribeDomainRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactDescribeDomainRequest)

---

##### `describePackageVersion` <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.describePackageVersion"></a>

```typescript
public describePackageVersion(input: CodeArtifactDescribePackageVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactDescribePackageVersionRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactDescribePackageVersionRequest)

---

##### `describeRepository` <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.describeRepository"></a>

```typescript
public describeRepository(input: CodeArtifactDescribeRepositoryRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactDescribeRepositoryRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactDescribeRepositoryRequest)

---

##### `disassociateExternalConnection` <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.disassociateExternalConnection"></a>

```typescript
public disassociateExternalConnection(input: CodeArtifactDisassociateExternalConnectionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactDisassociateExternalConnectionRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactDisassociateExternalConnectionRequest)

---

##### `disposePackageVersions` <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.disposePackageVersions"></a>

```typescript
public disposePackageVersions(input: CodeArtifactDisposePackageVersionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactDisposePackageVersionsRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactDisposePackageVersionsRequest)

---

##### `fetchAuthorizationToken` <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.fetchAuthorizationToken"></a>

```typescript
public fetchAuthorizationToken(input: CodeArtifactGetAuthorizationTokenRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactGetAuthorizationTokenRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactGetAuthorizationTokenRequest)

---

##### `fetchDomainPermissionsPolicy` <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.fetchDomainPermissionsPolicy"></a>

```typescript
public fetchDomainPermissionsPolicy(input: CodeArtifactGetDomainPermissionsPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactGetDomainPermissionsPolicyRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactGetDomainPermissionsPolicyRequest)

---

##### `fetchPackageVersionAsset` <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.fetchPackageVersionAsset"></a>

```typescript
public fetchPackageVersionAsset(input: CodeArtifactGetPackageVersionAssetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactGetPackageVersionAssetRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactGetPackageVersionAssetRequest)

---

##### `fetchPackageVersionReadme` <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.fetchPackageVersionReadme"></a>

```typescript
public fetchPackageVersionReadme(input: CodeArtifactGetPackageVersionReadmeRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactGetPackageVersionReadmeRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactGetPackageVersionReadmeRequest)

---

##### `fetchRepositoryEndpoint` <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.fetchRepositoryEndpoint"></a>

```typescript
public fetchRepositoryEndpoint(input: CodeArtifactGetRepositoryEndpointRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactGetRepositoryEndpointRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactGetRepositoryEndpointRequest)

---

##### `fetchRepositoryPermissionsPolicy` <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.fetchRepositoryPermissionsPolicy"></a>

```typescript
public fetchRepositoryPermissionsPolicy(input: CodeArtifactGetRepositoryPermissionsPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactGetRepositoryPermissionsPolicyRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactGetRepositoryPermissionsPolicyRequest)

---

##### `listDomains` <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.listDomains"></a>

```typescript
public listDomains(input: CodeArtifactListDomainsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactListDomainsRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactListDomainsRequest)

---

##### `listPackages` <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.listPackages"></a>

```typescript
public listPackages(input: CodeArtifactListPackagesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactListPackagesRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactListPackagesRequest)

---

##### `listPackageVersionAssets` <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.listPackageVersionAssets"></a>

```typescript
public listPackageVersionAssets(input: CodeArtifactListPackageVersionAssetsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactListPackageVersionAssetsRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactListPackageVersionAssetsRequest)

---

##### `listPackageVersionDependencies` <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.listPackageVersionDependencies"></a>

```typescript
public listPackageVersionDependencies(input: CodeArtifactListPackageVersionDependenciesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactListPackageVersionDependenciesRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactListPackageVersionDependenciesRequest)

---

##### `listPackageVersions` <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.listPackageVersions"></a>

```typescript
public listPackageVersions(input: CodeArtifactListPackageVersionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactListPackageVersionsRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactListPackageVersionsRequest)

---

##### `listRepositories` <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.listRepositories"></a>

```typescript
public listRepositories(input: CodeArtifactListRepositoriesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactListRepositoriesRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactListRepositoriesRequest)

---

##### `listRepositoriesInDomain` <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.listRepositoriesInDomain"></a>

```typescript
public listRepositoriesInDomain(input: CodeArtifactListRepositoriesInDomainRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactListRepositoriesInDomainRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactListRepositoriesInDomainRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: CodeArtifactListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactListTagsForResourceRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactListTagsForResourceRequest)

---

##### `putDomainPermissionsPolicy` <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.putDomainPermissionsPolicy"></a>

```typescript
public putDomainPermissionsPolicy(input: CodeArtifactPutDomainPermissionsPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactPutDomainPermissionsPolicyRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactPutDomainPermissionsPolicyRequest)

---

##### `putRepositoryPermissionsPolicy` <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.putRepositoryPermissionsPolicy"></a>

```typescript
public putRepositoryPermissionsPolicy(input: CodeArtifactPutRepositoryPermissionsPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactPutRepositoryPermissionsPolicyRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactPutRepositoryPermissionsPolicyRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.tagResource"></a>

```typescript
public tagResource(input: CodeArtifactTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactTagResourceRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.untagResource"></a>

```typescript
public untagResource(input: CodeArtifactUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactUntagResourceRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactUntagResourceRequest)

---

##### `updatePackageVersionsStatus` <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.updatePackageVersionsStatus"></a>

```typescript
public updatePackageVersionsStatus(input: CodeArtifactUpdatePackageVersionsStatusRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactUpdatePackageVersionsStatusRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactUpdatePackageVersionsStatusRequest)

---

##### `updateRepository` <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.updateRepository"></a>

```typescript
public updateRepository(input: CodeArtifactUpdateRepositoryRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactUpdateRepositoryRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactUpdateRepositoryRequest)

---




## Structs <a name="Structs"></a>

### CodeArtifactAssetSummary <a name="aws-cdk-sdk.codeartifact.CodeArtifactAssetSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactAssetSummary: codeartifact.CodeArtifactAssetSummary = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactAssetSummary.property.name"></a>

- *Type:* `string`

---

##### `hashes`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactAssetSummary.property.hashes"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `size`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactAssetSummary.property.size"></a>

- *Type:* `number`

---

### CodeArtifactAssociateExternalConnectionRequest <a name="aws-cdk-sdk.codeartifact.CodeArtifactAssociateExternalConnectionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactAssociateExternalConnectionRequest: codeartifact.CodeArtifactAssociateExternalConnectionRequest = { ... }
```

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactAssociateExternalConnectionRequest.property.domain"></a>

- *Type:* `string`

---

##### `externalConnection`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactAssociateExternalConnectionRequest.property.externalConnection"></a>

- *Type:* `string`

---

##### `repository`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactAssociateExternalConnectionRequest.property.repository"></a>

- *Type:* `string`

---

##### `domainOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactAssociateExternalConnectionRequest.property.domainOwner"></a>

- *Type:* `string`

---

### CodeArtifactAssociateExternalConnectionResult <a name="aws-cdk-sdk.codeartifact.CodeArtifactAssociateExternalConnectionResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactAssociateExternalConnectionResult: codeartifact.CodeArtifactAssociateExternalConnectionResult = { ... }
```

##### `repository`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactAssociateExternalConnectionResult.property.repository"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactRepositoryDescription`](#aws-cdk-sdk.codeartifact.CodeArtifactRepositoryDescription)

---

### CodeArtifactCopyPackageVersionsRequest <a name="aws-cdk-sdk.codeartifact.CodeArtifactCopyPackageVersionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactCopyPackageVersionsRequest: codeartifact.CodeArtifactCopyPackageVersionsRequest = { ... }
```

##### `destinationRepository`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactCopyPackageVersionsRequest.property.destinationRepository"></a>

- *Type:* `string`

---

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactCopyPackageVersionsRequest.property.domain"></a>

- *Type:* `string`

---

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactCopyPackageVersionsRequest.property.format"></a>

- *Type:* `string`

---

##### `package`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactCopyPackageVersionsRequest.property.package"></a>

- *Type:* `string`

---

##### `sourceRepository`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactCopyPackageVersionsRequest.property.sourceRepository"></a>

- *Type:* `string`

---

##### `allowOverwrite`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactCopyPackageVersionsRequest.property.allowOverwrite"></a>

- *Type:* `boolean`

---

##### `domainOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactCopyPackageVersionsRequest.property.domainOwner"></a>

- *Type:* `string`

---

##### `includeFromUpstream`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactCopyPackageVersionsRequest.property.includeFromUpstream"></a>

- *Type:* `boolean`

---

##### `namespace`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactCopyPackageVersionsRequest.property.namespace"></a>

- *Type:* `string`

---

##### `versionRevisions`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactCopyPackageVersionsRequest.property.versionRevisions"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `versions`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactCopyPackageVersionsRequest.property.versions"></a>

- *Type:* `string`[]

---

### CodeArtifactCopyPackageVersionsResult <a name="aws-cdk-sdk.codeartifact.CodeArtifactCopyPackageVersionsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactCopyPackageVersionsResult: codeartifact.CodeArtifactCopyPackageVersionsResult = { ... }
```

##### `failedVersions`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactCopyPackageVersionsResult.property.failedVersions"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.codeartifact.CodeArtifactPackageVersionError`](#aws-cdk-sdk.codeartifact.CodeArtifactPackageVersionError)}

---

##### `successfulVersions`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactCopyPackageVersionsResult.property.successfulVersions"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.codeartifact.CodeArtifactSuccessfulPackageVersionInfo`](#aws-cdk-sdk.codeartifact.CodeArtifactSuccessfulPackageVersionInfo)}

---

### CodeArtifactCreateDomainRequest <a name="aws-cdk-sdk.codeartifact.CodeArtifactCreateDomainRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactCreateDomainRequest: codeartifact.CodeArtifactCreateDomainRequest = { ... }
```

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactCreateDomainRequest.property.domain"></a>

- *Type:* `string`

---

##### `encryptionKey`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactCreateDomainRequest.property.encryptionKey"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactCreateDomainRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactTag`](#aws-cdk-sdk.codeartifact.CodeArtifactTag)[]

---

### CodeArtifactCreateDomainResult <a name="aws-cdk-sdk.codeartifact.CodeArtifactCreateDomainResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactCreateDomainResult: codeartifact.CodeArtifactCreateDomainResult = { ... }
```

##### `domain`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactCreateDomainResult.property.domain"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactDomainDescription`](#aws-cdk-sdk.codeartifact.CodeArtifactDomainDescription)

---

### CodeArtifactCreateRepositoryRequest <a name="aws-cdk-sdk.codeartifact.CodeArtifactCreateRepositoryRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactCreateRepositoryRequest: codeartifact.CodeArtifactCreateRepositoryRequest = { ... }
```

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactCreateRepositoryRequest.property.domain"></a>

- *Type:* `string`

---

##### `repository`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactCreateRepositoryRequest.property.repository"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactCreateRepositoryRequest.property.description"></a>

- *Type:* `string`

---

##### `domainOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactCreateRepositoryRequest.property.domainOwner"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactCreateRepositoryRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactTag`](#aws-cdk-sdk.codeartifact.CodeArtifactTag)[]

---

##### `upstreams`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactCreateRepositoryRequest.property.upstreams"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactUpstreamRepository`](#aws-cdk-sdk.codeartifact.CodeArtifactUpstreamRepository)[]

---

### CodeArtifactCreateRepositoryResult <a name="aws-cdk-sdk.codeartifact.CodeArtifactCreateRepositoryResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactCreateRepositoryResult: codeartifact.CodeArtifactCreateRepositoryResult = { ... }
```

##### `repository`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactCreateRepositoryResult.property.repository"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactRepositoryDescription`](#aws-cdk-sdk.codeartifact.CodeArtifactRepositoryDescription)

---

### CodeArtifactDeleteDomainPermissionsPolicyRequest <a name="aws-cdk-sdk.codeartifact.CodeArtifactDeleteDomainPermissionsPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactDeleteDomainPermissionsPolicyRequest: codeartifact.CodeArtifactDeleteDomainPermissionsPolicyRequest = { ... }
```

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDeleteDomainPermissionsPolicyRequest.property.domain"></a>

- *Type:* `string`

---

##### `domainOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDeleteDomainPermissionsPolicyRequest.property.domainOwner"></a>

- *Type:* `string`

---

##### `policyRevision`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDeleteDomainPermissionsPolicyRequest.property.policyRevision"></a>

- *Type:* `string`

---

### CodeArtifactDeleteDomainPermissionsPolicyResult <a name="aws-cdk-sdk.codeartifact.CodeArtifactDeleteDomainPermissionsPolicyResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactDeleteDomainPermissionsPolicyResult: codeartifact.CodeArtifactDeleteDomainPermissionsPolicyResult = { ... }
```

##### `policy`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDeleteDomainPermissionsPolicyResult.property.policy"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactResourcePolicy`](#aws-cdk-sdk.codeartifact.CodeArtifactResourcePolicy)

---

### CodeArtifactDeleteDomainRequest <a name="aws-cdk-sdk.codeartifact.CodeArtifactDeleteDomainRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactDeleteDomainRequest: codeartifact.CodeArtifactDeleteDomainRequest = { ... }
```

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDeleteDomainRequest.property.domain"></a>

- *Type:* `string`

---

##### `domainOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDeleteDomainRequest.property.domainOwner"></a>

- *Type:* `string`

---

### CodeArtifactDeleteDomainResult <a name="aws-cdk-sdk.codeartifact.CodeArtifactDeleteDomainResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactDeleteDomainResult: codeartifact.CodeArtifactDeleteDomainResult = { ... }
```

##### `domain`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDeleteDomainResult.property.domain"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactDomainDescription`](#aws-cdk-sdk.codeartifact.CodeArtifactDomainDescription)

---

### CodeArtifactDeletePackageVersionsRequest <a name="aws-cdk-sdk.codeartifact.CodeArtifactDeletePackageVersionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactDeletePackageVersionsRequest: codeartifact.CodeArtifactDeletePackageVersionsRequest = { ... }
```

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDeletePackageVersionsRequest.property.domain"></a>

- *Type:* `string`

---

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDeletePackageVersionsRequest.property.format"></a>

- *Type:* `string`

---

##### `package`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDeletePackageVersionsRequest.property.package"></a>

- *Type:* `string`

---

##### `repository`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDeletePackageVersionsRequest.property.repository"></a>

- *Type:* `string`

---

##### `versions`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDeletePackageVersionsRequest.property.versions"></a>

- *Type:* `string`[]

---

##### `domainOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDeletePackageVersionsRequest.property.domainOwner"></a>

- *Type:* `string`

---

##### `expectedStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDeletePackageVersionsRequest.property.expectedStatus"></a>

- *Type:* `string`

---

##### `namespace`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDeletePackageVersionsRequest.property.namespace"></a>

- *Type:* `string`

---

### CodeArtifactDeletePackageVersionsResult <a name="aws-cdk-sdk.codeartifact.CodeArtifactDeletePackageVersionsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactDeletePackageVersionsResult: codeartifact.CodeArtifactDeletePackageVersionsResult = { ... }
```

##### `failedVersions`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDeletePackageVersionsResult.property.failedVersions"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.codeartifact.CodeArtifactPackageVersionError`](#aws-cdk-sdk.codeartifact.CodeArtifactPackageVersionError)}

---

##### `successfulVersions`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDeletePackageVersionsResult.property.successfulVersions"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.codeartifact.CodeArtifactSuccessfulPackageVersionInfo`](#aws-cdk-sdk.codeartifact.CodeArtifactSuccessfulPackageVersionInfo)}

---

### CodeArtifactDeleteRepositoryPermissionsPolicyRequest <a name="aws-cdk-sdk.codeartifact.CodeArtifactDeleteRepositoryPermissionsPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactDeleteRepositoryPermissionsPolicyRequest: codeartifact.CodeArtifactDeleteRepositoryPermissionsPolicyRequest = { ... }
```

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDeleteRepositoryPermissionsPolicyRequest.property.domain"></a>

- *Type:* `string`

---

##### `repository`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDeleteRepositoryPermissionsPolicyRequest.property.repository"></a>

- *Type:* `string`

---

##### `domainOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDeleteRepositoryPermissionsPolicyRequest.property.domainOwner"></a>

- *Type:* `string`

---

##### `policyRevision`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDeleteRepositoryPermissionsPolicyRequest.property.policyRevision"></a>

- *Type:* `string`

---

### CodeArtifactDeleteRepositoryPermissionsPolicyResult <a name="aws-cdk-sdk.codeartifact.CodeArtifactDeleteRepositoryPermissionsPolicyResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactDeleteRepositoryPermissionsPolicyResult: codeartifact.CodeArtifactDeleteRepositoryPermissionsPolicyResult = { ... }
```

##### `policy`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDeleteRepositoryPermissionsPolicyResult.property.policy"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactResourcePolicy`](#aws-cdk-sdk.codeartifact.CodeArtifactResourcePolicy)

---

### CodeArtifactDeleteRepositoryRequest <a name="aws-cdk-sdk.codeartifact.CodeArtifactDeleteRepositoryRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactDeleteRepositoryRequest: codeartifact.CodeArtifactDeleteRepositoryRequest = { ... }
```

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDeleteRepositoryRequest.property.domain"></a>

- *Type:* `string`

---

##### `repository`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDeleteRepositoryRequest.property.repository"></a>

- *Type:* `string`

---

##### `domainOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDeleteRepositoryRequest.property.domainOwner"></a>

- *Type:* `string`

---

### CodeArtifactDeleteRepositoryResult <a name="aws-cdk-sdk.codeartifact.CodeArtifactDeleteRepositoryResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactDeleteRepositoryResult: codeartifact.CodeArtifactDeleteRepositoryResult = { ... }
```

##### `repository`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDeleteRepositoryResult.property.repository"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactRepositoryDescription`](#aws-cdk-sdk.codeartifact.CodeArtifactRepositoryDescription)

---

### CodeArtifactDescribeDomainRequest <a name="aws-cdk-sdk.codeartifact.CodeArtifactDescribeDomainRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactDescribeDomainRequest: codeartifact.CodeArtifactDescribeDomainRequest = { ... }
```

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDescribeDomainRequest.property.domain"></a>

- *Type:* `string`

---

##### `domainOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDescribeDomainRequest.property.domainOwner"></a>

- *Type:* `string`

---

### CodeArtifactDescribeDomainResult <a name="aws-cdk-sdk.codeartifact.CodeArtifactDescribeDomainResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactDescribeDomainResult: codeartifact.CodeArtifactDescribeDomainResult = { ... }
```

##### `domain`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDescribeDomainResult.property.domain"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactDomainDescription`](#aws-cdk-sdk.codeartifact.CodeArtifactDomainDescription)

---

### CodeArtifactDescribePackageVersionRequest <a name="aws-cdk-sdk.codeartifact.CodeArtifactDescribePackageVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactDescribePackageVersionRequest: codeartifact.CodeArtifactDescribePackageVersionRequest = { ... }
```

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDescribePackageVersionRequest.property.domain"></a>

- *Type:* `string`

---

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDescribePackageVersionRequest.property.format"></a>

- *Type:* `string`

---

##### `package`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDescribePackageVersionRequest.property.package"></a>

- *Type:* `string`

---

##### `packageVersion`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDescribePackageVersionRequest.property.packageVersion"></a>

- *Type:* `string`

---

##### `repository`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDescribePackageVersionRequest.property.repository"></a>

- *Type:* `string`

---

##### `domainOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDescribePackageVersionRequest.property.domainOwner"></a>

- *Type:* `string`

---

##### `namespace`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDescribePackageVersionRequest.property.namespace"></a>

- *Type:* `string`

---

### CodeArtifactDescribePackageVersionResult <a name="aws-cdk-sdk.codeartifact.CodeArtifactDescribePackageVersionResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactDescribePackageVersionResult: codeartifact.CodeArtifactDescribePackageVersionResult = { ... }
```

##### `packageVersion`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDescribePackageVersionResult.property.packageVersion"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactPackageVersionDescription`](#aws-cdk-sdk.codeartifact.CodeArtifactPackageVersionDescription)

---

### CodeArtifactDescribeRepositoryRequest <a name="aws-cdk-sdk.codeartifact.CodeArtifactDescribeRepositoryRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactDescribeRepositoryRequest: codeartifact.CodeArtifactDescribeRepositoryRequest = { ... }
```

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDescribeRepositoryRequest.property.domain"></a>

- *Type:* `string`

---

##### `repository`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDescribeRepositoryRequest.property.repository"></a>

- *Type:* `string`

---

##### `domainOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDescribeRepositoryRequest.property.domainOwner"></a>

- *Type:* `string`

---

### CodeArtifactDescribeRepositoryResult <a name="aws-cdk-sdk.codeartifact.CodeArtifactDescribeRepositoryResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactDescribeRepositoryResult: codeartifact.CodeArtifactDescribeRepositoryResult = { ... }
```

##### `repository`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDescribeRepositoryResult.property.repository"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactRepositoryDescription`](#aws-cdk-sdk.codeartifact.CodeArtifactRepositoryDescription)

---

### CodeArtifactDisassociateExternalConnectionRequest <a name="aws-cdk-sdk.codeartifact.CodeArtifactDisassociateExternalConnectionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactDisassociateExternalConnectionRequest: codeartifact.CodeArtifactDisassociateExternalConnectionRequest = { ... }
```

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDisassociateExternalConnectionRequest.property.domain"></a>

- *Type:* `string`

---

##### `externalConnection`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDisassociateExternalConnectionRequest.property.externalConnection"></a>

- *Type:* `string`

---

##### `repository`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDisassociateExternalConnectionRequest.property.repository"></a>

- *Type:* `string`

---

##### `domainOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDisassociateExternalConnectionRequest.property.domainOwner"></a>

- *Type:* `string`

---

### CodeArtifactDisassociateExternalConnectionResult <a name="aws-cdk-sdk.codeartifact.CodeArtifactDisassociateExternalConnectionResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactDisassociateExternalConnectionResult: codeartifact.CodeArtifactDisassociateExternalConnectionResult = { ... }
```

##### `repository`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDisassociateExternalConnectionResult.property.repository"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactRepositoryDescription`](#aws-cdk-sdk.codeartifact.CodeArtifactRepositoryDescription)

---

### CodeArtifactDisposePackageVersionsRequest <a name="aws-cdk-sdk.codeartifact.CodeArtifactDisposePackageVersionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactDisposePackageVersionsRequest: codeartifact.CodeArtifactDisposePackageVersionsRequest = { ... }
```

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDisposePackageVersionsRequest.property.domain"></a>

- *Type:* `string`

---

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDisposePackageVersionsRequest.property.format"></a>

- *Type:* `string`

---

##### `package`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDisposePackageVersionsRequest.property.package"></a>

- *Type:* `string`

---

##### `repository`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDisposePackageVersionsRequest.property.repository"></a>

- *Type:* `string`

---

##### `versions`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDisposePackageVersionsRequest.property.versions"></a>

- *Type:* `string`[]

---

##### `domainOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDisposePackageVersionsRequest.property.domainOwner"></a>

- *Type:* `string`

---

##### `expectedStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDisposePackageVersionsRequest.property.expectedStatus"></a>

- *Type:* `string`

---

##### `namespace`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDisposePackageVersionsRequest.property.namespace"></a>

- *Type:* `string`

---

##### `versionRevisions`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDisposePackageVersionsRequest.property.versionRevisions"></a>

- *Type:* {[ key: string ]: `string`}

---

### CodeArtifactDisposePackageVersionsResult <a name="aws-cdk-sdk.codeartifact.CodeArtifactDisposePackageVersionsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactDisposePackageVersionsResult: codeartifact.CodeArtifactDisposePackageVersionsResult = { ... }
```

##### `failedVersions`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDisposePackageVersionsResult.property.failedVersions"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.codeartifact.CodeArtifactPackageVersionError`](#aws-cdk-sdk.codeartifact.CodeArtifactPackageVersionError)}

---

##### `successfulVersions`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDisposePackageVersionsResult.property.successfulVersions"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.codeartifact.CodeArtifactSuccessfulPackageVersionInfo`](#aws-cdk-sdk.codeartifact.CodeArtifactSuccessfulPackageVersionInfo)}

---

### CodeArtifactDomainDescription <a name="aws-cdk-sdk.codeartifact.CodeArtifactDomainDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactDomainDescription: codeartifact.CodeArtifactDomainDescription = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDomainDescription.property.arn"></a>

- *Type:* `string`

---

##### `assetSizeBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDomainDescription.property.assetSizeBytes"></a>

- *Type:* `number`

---

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDomainDescription.property.createdTime"></a>

- *Type:* `string`

---

##### `encryptionKey`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDomainDescription.property.encryptionKey"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDomainDescription.property.name"></a>

- *Type:* `string`

---

##### `owner`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDomainDescription.property.owner"></a>

- *Type:* `string`

---

##### `repositoryCount`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDomainDescription.property.repositoryCount"></a>

- *Type:* `number`

---

##### `s3BucketArn`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDomainDescription.property.s3BucketArn"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDomainDescription.property.status"></a>

- *Type:* `string`

---

### CodeArtifactDomainSummary <a name="aws-cdk-sdk.codeartifact.CodeArtifactDomainSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactDomainSummary: codeartifact.CodeArtifactDomainSummary = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDomainSummary.property.arn"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDomainSummary.property.createdTime"></a>

- *Type:* `string`

---

##### `encryptionKey`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDomainSummary.property.encryptionKey"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDomainSummary.property.name"></a>

- *Type:* `string`

---

##### `owner`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDomainSummary.property.owner"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactDomainSummary.property.status"></a>

- *Type:* `string`

---

### CodeArtifactGetAuthorizationTokenRequest <a name="aws-cdk-sdk.codeartifact.CodeArtifactGetAuthorizationTokenRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactGetAuthorizationTokenRequest: codeartifact.CodeArtifactGetAuthorizationTokenRequest = { ... }
```

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactGetAuthorizationTokenRequest.property.domain"></a>

- *Type:* `string`

---

##### `domainOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactGetAuthorizationTokenRequest.property.domainOwner"></a>

- *Type:* `string`

---

##### `durationSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactGetAuthorizationTokenRequest.property.durationSeconds"></a>

- *Type:* `number`

---

### CodeArtifactGetAuthorizationTokenResult <a name="aws-cdk-sdk.codeartifact.CodeArtifactGetAuthorizationTokenResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactGetAuthorizationTokenResult: codeartifact.CodeArtifactGetAuthorizationTokenResult = { ... }
```

##### `authorizationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactGetAuthorizationTokenResult.property.authorizationToken"></a>

- *Type:* `string`

---

##### `expiration`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactGetAuthorizationTokenResult.property.expiration"></a>

- *Type:* `string`

---

### CodeArtifactGetDomainPermissionsPolicyRequest <a name="aws-cdk-sdk.codeartifact.CodeArtifactGetDomainPermissionsPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactGetDomainPermissionsPolicyRequest: codeartifact.CodeArtifactGetDomainPermissionsPolicyRequest = { ... }
```

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactGetDomainPermissionsPolicyRequest.property.domain"></a>

- *Type:* `string`

---

##### `domainOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactGetDomainPermissionsPolicyRequest.property.domainOwner"></a>

- *Type:* `string`

---

### CodeArtifactGetDomainPermissionsPolicyResult <a name="aws-cdk-sdk.codeartifact.CodeArtifactGetDomainPermissionsPolicyResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactGetDomainPermissionsPolicyResult: codeartifact.CodeArtifactGetDomainPermissionsPolicyResult = { ... }
```

##### `policy`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactGetDomainPermissionsPolicyResult.property.policy"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactResourcePolicy`](#aws-cdk-sdk.codeartifact.CodeArtifactResourcePolicy)

---

### CodeArtifactGetPackageVersionAssetRequest <a name="aws-cdk-sdk.codeartifact.CodeArtifactGetPackageVersionAssetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactGetPackageVersionAssetRequest: codeartifact.CodeArtifactGetPackageVersionAssetRequest = { ... }
```

##### `asset`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactGetPackageVersionAssetRequest.property.asset"></a>

- *Type:* `string`

---

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactGetPackageVersionAssetRequest.property.domain"></a>

- *Type:* `string`

---

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactGetPackageVersionAssetRequest.property.format"></a>

- *Type:* `string`

---

##### `package`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactGetPackageVersionAssetRequest.property.package"></a>

- *Type:* `string`

---

##### `packageVersion`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactGetPackageVersionAssetRequest.property.packageVersion"></a>

- *Type:* `string`

---

##### `repository`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactGetPackageVersionAssetRequest.property.repository"></a>

- *Type:* `string`

---

##### `domainOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactGetPackageVersionAssetRequest.property.domainOwner"></a>

- *Type:* `string`

---

##### `namespace`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactGetPackageVersionAssetRequest.property.namespace"></a>

- *Type:* `string`

---

##### `packageVersionRevision`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactGetPackageVersionAssetRequest.property.packageVersionRevision"></a>

- *Type:* `string`

---

### CodeArtifactGetPackageVersionAssetResult <a name="aws-cdk-sdk.codeartifact.CodeArtifactGetPackageVersionAssetResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactGetPackageVersionAssetResult: codeartifact.CodeArtifactGetPackageVersionAssetResult = { ... }
```

##### `asset`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactGetPackageVersionAssetResult.property.asset"></a>

- *Type:* `any`

---

##### `assetName`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactGetPackageVersionAssetResult.property.assetName"></a>

- *Type:* `string`

---

##### `packageVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactGetPackageVersionAssetResult.property.packageVersion"></a>

- *Type:* `string`

---

##### `packageVersionRevision`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactGetPackageVersionAssetResult.property.packageVersionRevision"></a>

- *Type:* `string`

---

### CodeArtifactGetPackageVersionReadmeRequest <a name="aws-cdk-sdk.codeartifact.CodeArtifactGetPackageVersionReadmeRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactGetPackageVersionReadmeRequest: codeartifact.CodeArtifactGetPackageVersionReadmeRequest = { ... }
```

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactGetPackageVersionReadmeRequest.property.domain"></a>

- *Type:* `string`

---

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactGetPackageVersionReadmeRequest.property.format"></a>

- *Type:* `string`

---

##### `package`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactGetPackageVersionReadmeRequest.property.package"></a>

- *Type:* `string`

---

##### `packageVersion`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactGetPackageVersionReadmeRequest.property.packageVersion"></a>

- *Type:* `string`

---

##### `repository`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactGetPackageVersionReadmeRequest.property.repository"></a>

- *Type:* `string`

---

##### `domainOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactGetPackageVersionReadmeRequest.property.domainOwner"></a>

- *Type:* `string`

---

##### `namespace`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactGetPackageVersionReadmeRequest.property.namespace"></a>

- *Type:* `string`

---

### CodeArtifactGetPackageVersionReadmeResult <a name="aws-cdk-sdk.codeartifact.CodeArtifactGetPackageVersionReadmeResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactGetPackageVersionReadmeResult: codeartifact.CodeArtifactGetPackageVersionReadmeResult = { ... }
```

##### `format`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactGetPackageVersionReadmeResult.property.format"></a>

- *Type:* `string`

---

##### `namespace`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactGetPackageVersionReadmeResult.property.namespace"></a>

- *Type:* `string`

---

##### `package`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactGetPackageVersionReadmeResult.property.package"></a>

- *Type:* `string`

---

##### `readme`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactGetPackageVersionReadmeResult.property.readme"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactGetPackageVersionReadmeResult.property.version"></a>

- *Type:* `string`

---

##### `versionRevision`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactGetPackageVersionReadmeResult.property.versionRevision"></a>

- *Type:* `string`

---

### CodeArtifactGetRepositoryEndpointRequest <a name="aws-cdk-sdk.codeartifact.CodeArtifactGetRepositoryEndpointRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactGetRepositoryEndpointRequest: codeartifact.CodeArtifactGetRepositoryEndpointRequest = { ... }
```

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactGetRepositoryEndpointRequest.property.domain"></a>

- *Type:* `string`

---

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactGetRepositoryEndpointRequest.property.format"></a>

- *Type:* `string`

---

##### `repository`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactGetRepositoryEndpointRequest.property.repository"></a>

- *Type:* `string`

---

##### `domainOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactGetRepositoryEndpointRequest.property.domainOwner"></a>

- *Type:* `string`

---

### CodeArtifactGetRepositoryEndpointResult <a name="aws-cdk-sdk.codeartifact.CodeArtifactGetRepositoryEndpointResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactGetRepositoryEndpointResult: codeartifact.CodeArtifactGetRepositoryEndpointResult = { ... }
```

##### `repositoryEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactGetRepositoryEndpointResult.property.repositoryEndpoint"></a>

- *Type:* `string`

---

### CodeArtifactGetRepositoryPermissionsPolicyRequest <a name="aws-cdk-sdk.codeartifact.CodeArtifactGetRepositoryPermissionsPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactGetRepositoryPermissionsPolicyRequest: codeartifact.CodeArtifactGetRepositoryPermissionsPolicyRequest = { ... }
```

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactGetRepositoryPermissionsPolicyRequest.property.domain"></a>

- *Type:* `string`

---

##### `repository`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactGetRepositoryPermissionsPolicyRequest.property.repository"></a>

- *Type:* `string`

---

##### `domainOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactGetRepositoryPermissionsPolicyRequest.property.domainOwner"></a>

- *Type:* `string`

---

### CodeArtifactGetRepositoryPermissionsPolicyResult <a name="aws-cdk-sdk.codeartifact.CodeArtifactGetRepositoryPermissionsPolicyResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactGetRepositoryPermissionsPolicyResult: codeartifact.CodeArtifactGetRepositoryPermissionsPolicyResult = { ... }
```

##### `policy`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactGetRepositoryPermissionsPolicyResult.property.policy"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactResourcePolicy`](#aws-cdk-sdk.codeartifact.CodeArtifactResourcePolicy)

---

### CodeArtifactLicenseInfo <a name="aws-cdk-sdk.codeartifact.CodeArtifactLicenseInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactLicenseInfo: codeartifact.CodeArtifactLicenseInfo = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactLicenseInfo.property.name"></a>

- *Type:* `string`

---

##### `url`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactLicenseInfo.property.url"></a>

- *Type:* `string`

---

### CodeArtifactListDomainsRequest <a name="aws-cdk-sdk.codeartifact.CodeArtifactListDomainsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactListDomainsRequest: codeartifact.CodeArtifactListDomainsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListDomainsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListDomainsRequest.property.nextToken"></a>

- *Type:* `string`

---

### CodeArtifactListDomainsResult <a name="aws-cdk-sdk.codeartifact.CodeArtifactListDomainsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactListDomainsResult: codeartifact.CodeArtifactListDomainsResult = { ... }
```

##### `domains`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListDomainsResult.property.domains"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactDomainSummary`](#aws-cdk-sdk.codeartifact.CodeArtifactDomainSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListDomainsResult.property.nextToken"></a>

- *Type:* `string`

---

### CodeArtifactListPackagesRequest <a name="aws-cdk-sdk.codeartifact.CodeArtifactListPackagesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactListPackagesRequest: codeartifact.CodeArtifactListPackagesRequest = { ... }
```

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListPackagesRequest.property.domain"></a>

- *Type:* `string`

---

##### `repository`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListPackagesRequest.property.repository"></a>

- *Type:* `string`

---

##### `domainOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListPackagesRequest.property.domainOwner"></a>

- *Type:* `string`

---

##### `format`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListPackagesRequest.property.format"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListPackagesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `namespace`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListPackagesRequest.property.namespace"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListPackagesRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `packagePrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListPackagesRequest.property.packagePrefix"></a>

- *Type:* `string`

---

### CodeArtifactListPackagesResult <a name="aws-cdk-sdk.codeartifact.CodeArtifactListPackagesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactListPackagesResult: codeartifact.CodeArtifactListPackagesResult = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListPackagesResult.property.nextToken"></a>

- *Type:* `string`

---

##### `packages`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListPackagesResult.property.packages"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactPackageSummary`](#aws-cdk-sdk.codeartifact.CodeArtifactPackageSummary)[]

---

### CodeArtifactListPackageVersionAssetsRequest <a name="aws-cdk-sdk.codeartifact.CodeArtifactListPackageVersionAssetsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactListPackageVersionAssetsRequest: codeartifact.CodeArtifactListPackageVersionAssetsRequest = { ... }
```

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListPackageVersionAssetsRequest.property.domain"></a>

- *Type:* `string`

---

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListPackageVersionAssetsRequest.property.format"></a>

- *Type:* `string`

---

##### `package`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListPackageVersionAssetsRequest.property.package"></a>

- *Type:* `string`

---

##### `packageVersion`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListPackageVersionAssetsRequest.property.packageVersion"></a>

- *Type:* `string`

---

##### `repository`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListPackageVersionAssetsRequest.property.repository"></a>

- *Type:* `string`

---

##### `domainOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListPackageVersionAssetsRequest.property.domainOwner"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListPackageVersionAssetsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `namespace`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListPackageVersionAssetsRequest.property.namespace"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListPackageVersionAssetsRequest.property.nextToken"></a>

- *Type:* `string`

---

### CodeArtifactListPackageVersionAssetsResult <a name="aws-cdk-sdk.codeartifact.CodeArtifactListPackageVersionAssetsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactListPackageVersionAssetsResult: codeartifact.CodeArtifactListPackageVersionAssetsResult = { ... }
```

##### `assets`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListPackageVersionAssetsResult.property.assets"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactAssetSummary`](#aws-cdk-sdk.codeartifact.CodeArtifactAssetSummary)[]

---

##### `format`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListPackageVersionAssetsResult.property.format"></a>

- *Type:* `string`

---

##### `namespace`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListPackageVersionAssetsResult.property.namespace"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListPackageVersionAssetsResult.property.nextToken"></a>

- *Type:* `string`

---

##### `package`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListPackageVersionAssetsResult.property.package"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListPackageVersionAssetsResult.property.version"></a>

- *Type:* `string`

---

##### `versionRevision`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListPackageVersionAssetsResult.property.versionRevision"></a>

- *Type:* `string`

---

### CodeArtifactListPackageVersionDependenciesRequest <a name="aws-cdk-sdk.codeartifact.CodeArtifactListPackageVersionDependenciesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactListPackageVersionDependenciesRequest: codeartifact.CodeArtifactListPackageVersionDependenciesRequest = { ... }
```

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListPackageVersionDependenciesRequest.property.domain"></a>

- *Type:* `string`

---

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListPackageVersionDependenciesRequest.property.format"></a>

- *Type:* `string`

---

##### `package`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListPackageVersionDependenciesRequest.property.package"></a>

- *Type:* `string`

---

##### `packageVersion`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListPackageVersionDependenciesRequest.property.packageVersion"></a>

- *Type:* `string`

---

##### `repository`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListPackageVersionDependenciesRequest.property.repository"></a>

- *Type:* `string`

---

##### `domainOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListPackageVersionDependenciesRequest.property.domainOwner"></a>

- *Type:* `string`

---

##### `namespace`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListPackageVersionDependenciesRequest.property.namespace"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListPackageVersionDependenciesRequest.property.nextToken"></a>

- *Type:* `string`

---

### CodeArtifactListPackageVersionDependenciesResult <a name="aws-cdk-sdk.codeartifact.CodeArtifactListPackageVersionDependenciesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactListPackageVersionDependenciesResult: codeartifact.CodeArtifactListPackageVersionDependenciesResult = { ... }
```

##### `dependencies`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListPackageVersionDependenciesResult.property.dependencies"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactPackageDependency`](#aws-cdk-sdk.codeartifact.CodeArtifactPackageDependency)[]

---

##### `format`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListPackageVersionDependenciesResult.property.format"></a>

- *Type:* `string`

---

##### `namespace`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListPackageVersionDependenciesResult.property.namespace"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListPackageVersionDependenciesResult.property.nextToken"></a>

- *Type:* `string`

---

##### `package`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListPackageVersionDependenciesResult.property.package"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListPackageVersionDependenciesResult.property.version"></a>

- *Type:* `string`

---

##### `versionRevision`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListPackageVersionDependenciesResult.property.versionRevision"></a>

- *Type:* `string`

---

### CodeArtifactListPackageVersionsRequest <a name="aws-cdk-sdk.codeartifact.CodeArtifactListPackageVersionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactListPackageVersionsRequest: codeartifact.CodeArtifactListPackageVersionsRequest = { ... }
```

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListPackageVersionsRequest.property.domain"></a>

- *Type:* `string`

---

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListPackageVersionsRequest.property.format"></a>

- *Type:* `string`

---

##### `package`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListPackageVersionsRequest.property.package"></a>

- *Type:* `string`

---

##### `repository`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListPackageVersionsRequest.property.repository"></a>

- *Type:* `string`

---

##### `domainOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListPackageVersionsRequest.property.domainOwner"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListPackageVersionsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `namespace`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListPackageVersionsRequest.property.namespace"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListPackageVersionsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `sortBy`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListPackageVersionsRequest.property.sortBy"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListPackageVersionsRequest.property.status"></a>

- *Type:* `string`

---

### CodeArtifactListPackageVersionsResult <a name="aws-cdk-sdk.codeartifact.CodeArtifactListPackageVersionsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactListPackageVersionsResult: codeartifact.CodeArtifactListPackageVersionsResult = { ... }
```

##### `defaultDisplayVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListPackageVersionsResult.property.defaultDisplayVersion"></a>

- *Type:* `string`

---

##### `format`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListPackageVersionsResult.property.format"></a>

- *Type:* `string`

---

##### `namespace`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListPackageVersionsResult.property.namespace"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListPackageVersionsResult.property.nextToken"></a>

- *Type:* `string`

---

##### `package`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListPackageVersionsResult.property.package"></a>

- *Type:* `string`

---

##### `versions`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListPackageVersionsResult.property.versions"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactPackageVersionSummary`](#aws-cdk-sdk.codeartifact.CodeArtifactPackageVersionSummary)[]

---

### CodeArtifactListRepositoriesInDomainRequest <a name="aws-cdk-sdk.codeartifact.CodeArtifactListRepositoriesInDomainRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactListRepositoriesInDomainRequest: codeartifact.CodeArtifactListRepositoriesInDomainRequest = { ... }
```

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListRepositoriesInDomainRequest.property.domain"></a>

- *Type:* `string`

---

##### `administratorAccount`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListRepositoriesInDomainRequest.property.administratorAccount"></a>

- *Type:* `string`

---

##### `domainOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListRepositoriesInDomainRequest.property.domainOwner"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListRepositoriesInDomainRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListRepositoriesInDomainRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `repositoryPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListRepositoriesInDomainRequest.property.repositoryPrefix"></a>

- *Type:* `string`

---

### CodeArtifactListRepositoriesInDomainResult <a name="aws-cdk-sdk.codeartifact.CodeArtifactListRepositoriesInDomainResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactListRepositoriesInDomainResult: codeartifact.CodeArtifactListRepositoriesInDomainResult = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListRepositoriesInDomainResult.property.nextToken"></a>

- *Type:* `string`

---

##### `repositories`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListRepositoriesInDomainResult.property.repositories"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactRepositorySummary`](#aws-cdk-sdk.codeartifact.CodeArtifactRepositorySummary)[]

---

### CodeArtifactListRepositoriesRequest <a name="aws-cdk-sdk.codeartifact.CodeArtifactListRepositoriesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactListRepositoriesRequest: codeartifact.CodeArtifactListRepositoriesRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListRepositoriesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListRepositoriesRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `repositoryPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListRepositoriesRequest.property.repositoryPrefix"></a>

- *Type:* `string`

---

### CodeArtifactListRepositoriesResult <a name="aws-cdk-sdk.codeartifact.CodeArtifactListRepositoriesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactListRepositoriesResult: codeartifact.CodeArtifactListRepositoriesResult = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListRepositoriesResult.property.nextToken"></a>

- *Type:* `string`

---

##### `repositories`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListRepositoriesResult.property.repositories"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactRepositorySummary`](#aws-cdk-sdk.codeartifact.CodeArtifactRepositorySummary)[]

---

### CodeArtifactListTagsForResourceRequest <a name="aws-cdk-sdk.codeartifact.CodeArtifactListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactListTagsForResourceRequest: codeartifact.CodeArtifactListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### CodeArtifactListTagsForResourceResult <a name="aws-cdk-sdk.codeartifact.CodeArtifactListTagsForResourceResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactListTagsForResourceResult: codeartifact.CodeArtifactListTagsForResourceResult = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactListTagsForResourceResult.property.tags"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactTag`](#aws-cdk-sdk.codeartifact.CodeArtifactTag)[]

---

### CodeArtifactPackageDependency <a name="aws-cdk-sdk.codeartifact.CodeArtifactPackageDependency"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactPackageDependency: codeartifact.CodeArtifactPackageDependency = { ... }
```

##### `dependencyType`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactPackageDependency.property.dependencyType"></a>

- *Type:* `string`

---

##### `namespace`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactPackageDependency.property.namespace"></a>

- *Type:* `string`

---

##### `package`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactPackageDependency.property.package"></a>

- *Type:* `string`

---

##### `versionRequirement`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactPackageDependency.property.versionRequirement"></a>

- *Type:* `string`

---

### CodeArtifactPackageSummary <a name="aws-cdk-sdk.codeartifact.CodeArtifactPackageSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactPackageSummary: codeartifact.CodeArtifactPackageSummary = { ... }
```

##### `format`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactPackageSummary.property.format"></a>

- *Type:* `string`

---

##### `namespace`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactPackageSummary.property.namespace"></a>

- *Type:* `string`

---

##### `package`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactPackageSummary.property.package"></a>

- *Type:* `string`

---

### CodeArtifactPackageVersionDescription <a name="aws-cdk-sdk.codeartifact.CodeArtifactPackageVersionDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactPackageVersionDescription: codeartifact.CodeArtifactPackageVersionDescription = { ... }
```

##### `displayName`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactPackageVersionDescription.property.displayName"></a>

- *Type:* `string`

---

##### `format`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactPackageVersionDescription.property.format"></a>

- *Type:* `string`

---

##### `homePage`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactPackageVersionDescription.property.homePage"></a>

- *Type:* `string`

---

##### `licenses`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactPackageVersionDescription.property.licenses"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactLicenseInfo`](#aws-cdk-sdk.codeartifact.CodeArtifactLicenseInfo)[]

---

##### `namespace`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactPackageVersionDescription.property.namespace"></a>

- *Type:* `string`

---

##### `packageName`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactPackageVersionDescription.property.packageName"></a>

- *Type:* `string`

---

##### `publishedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactPackageVersionDescription.property.publishedTime"></a>

- *Type:* `string`

---

##### `revision`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactPackageVersionDescription.property.revision"></a>

- *Type:* `string`

---

##### `sourceCodeRepository`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactPackageVersionDescription.property.sourceCodeRepository"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactPackageVersionDescription.property.status"></a>

- *Type:* `string`

---

##### `summary`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactPackageVersionDescription.property.summary"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactPackageVersionDescription.property.version"></a>

- *Type:* `string`

---

### CodeArtifactPackageVersionError <a name="aws-cdk-sdk.codeartifact.CodeArtifactPackageVersionError"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactPackageVersionError: codeartifact.CodeArtifactPackageVersionError = { ... }
```

##### `errorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactPackageVersionError.property.errorCode"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactPackageVersionError.property.errorMessage"></a>

- *Type:* `string`

---

### CodeArtifactPackageVersionSummary <a name="aws-cdk-sdk.codeartifact.CodeArtifactPackageVersionSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactPackageVersionSummary: codeartifact.CodeArtifactPackageVersionSummary = { ... }
```

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactPackageVersionSummary.property.status"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactPackageVersionSummary.property.version"></a>

- *Type:* `string`

---

##### `revision`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactPackageVersionSummary.property.revision"></a>

- *Type:* `string`

---

### CodeArtifactPutDomainPermissionsPolicyRequest <a name="aws-cdk-sdk.codeartifact.CodeArtifactPutDomainPermissionsPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactPutDomainPermissionsPolicyRequest: codeartifact.CodeArtifactPutDomainPermissionsPolicyRequest = { ... }
```

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactPutDomainPermissionsPolicyRequest.property.domain"></a>

- *Type:* `string`

---

##### `policyDocument`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactPutDomainPermissionsPolicyRequest.property.policyDocument"></a>

- *Type:* `string`

---

##### `domainOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactPutDomainPermissionsPolicyRequest.property.domainOwner"></a>

- *Type:* `string`

---

##### `policyRevision`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactPutDomainPermissionsPolicyRequest.property.policyRevision"></a>

- *Type:* `string`

---

### CodeArtifactPutDomainPermissionsPolicyResult <a name="aws-cdk-sdk.codeartifact.CodeArtifactPutDomainPermissionsPolicyResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactPutDomainPermissionsPolicyResult: codeartifact.CodeArtifactPutDomainPermissionsPolicyResult = { ... }
```

##### `policy`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactPutDomainPermissionsPolicyResult.property.policy"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactResourcePolicy`](#aws-cdk-sdk.codeartifact.CodeArtifactResourcePolicy)

---

### CodeArtifactPutRepositoryPermissionsPolicyRequest <a name="aws-cdk-sdk.codeartifact.CodeArtifactPutRepositoryPermissionsPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactPutRepositoryPermissionsPolicyRequest: codeartifact.CodeArtifactPutRepositoryPermissionsPolicyRequest = { ... }
```

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactPutRepositoryPermissionsPolicyRequest.property.domain"></a>

- *Type:* `string`

---

##### `policyDocument`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactPutRepositoryPermissionsPolicyRequest.property.policyDocument"></a>

- *Type:* `string`

---

##### `repository`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactPutRepositoryPermissionsPolicyRequest.property.repository"></a>

- *Type:* `string`

---

##### `domainOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactPutRepositoryPermissionsPolicyRequest.property.domainOwner"></a>

- *Type:* `string`

---

##### `policyRevision`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactPutRepositoryPermissionsPolicyRequest.property.policyRevision"></a>

- *Type:* `string`

---

### CodeArtifactPutRepositoryPermissionsPolicyResult <a name="aws-cdk-sdk.codeartifact.CodeArtifactPutRepositoryPermissionsPolicyResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactPutRepositoryPermissionsPolicyResult: codeartifact.CodeArtifactPutRepositoryPermissionsPolicyResult = { ... }
```

##### `policy`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactPutRepositoryPermissionsPolicyResult.property.policy"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactResourcePolicy`](#aws-cdk-sdk.codeartifact.CodeArtifactResourcePolicy)

---

### CodeArtifactRepositoryDescription <a name="aws-cdk-sdk.codeartifact.CodeArtifactRepositoryDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactRepositoryDescription: codeartifact.CodeArtifactRepositoryDescription = { ... }
```

##### `administratorAccount`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactRepositoryDescription.property.administratorAccount"></a>

- *Type:* `string`

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactRepositoryDescription.property.arn"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactRepositoryDescription.property.description"></a>

- *Type:* `string`

---

##### `domainName`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactRepositoryDescription.property.domainName"></a>

- *Type:* `string`

---

##### `domainOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactRepositoryDescription.property.domainOwner"></a>

- *Type:* `string`

---

##### `externalConnections`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactRepositoryDescription.property.externalConnections"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactRepositoryExternalConnectionInfo`](#aws-cdk-sdk.codeartifact.CodeArtifactRepositoryExternalConnectionInfo)[]

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactRepositoryDescription.property.name"></a>

- *Type:* `string`

---

##### `upstreams`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactRepositoryDescription.property.upstreams"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactUpstreamRepositoryInfo`](#aws-cdk-sdk.codeartifact.CodeArtifactUpstreamRepositoryInfo)[]

---

### CodeArtifactRepositoryExternalConnectionInfo <a name="aws-cdk-sdk.codeartifact.CodeArtifactRepositoryExternalConnectionInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactRepositoryExternalConnectionInfo: codeartifact.CodeArtifactRepositoryExternalConnectionInfo = { ... }
```

##### `externalConnectionName`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactRepositoryExternalConnectionInfo.property.externalConnectionName"></a>

- *Type:* `string`

---

##### `packageFormat`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactRepositoryExternalConnectionInfo.property.packageFormat"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactRepositoryExternalConnectionInfo.property.status"></a>

- *Type:* `string`

---

### CodeArtifactRepositorySummary <a name="aws-cdk-sdk.codeartifact.CodeArtifactRepositorySummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactRepositorySummary: codeartifact.CodeArtifactRepositorySummary = { ... }
```

##### `administratorAccount`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactRepositorySummary.property.administratorAccount"></a>

- *Type:* `string`

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactRepositorySummary.property.arn"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactRepositorySummary.property.description"></a>

- *Type:* `string`

---

##### `domainName`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactRepositorySummary.property.domainName"></a>

- *Type:* `string`

---

##### `domainOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactRepositorySummary.property.domainOwner"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactRepositorySummary.property.name"></a>

- *Type:* `string`

---

### CodeArtifactResourcePolicy <a name="aws-cdk-sdk.codeartifact.CodeArtifactResourcePolicy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactResourcePolicy: codeartifact.CodeArtifactResourcePolicy = { ... }
```

##### `document`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResourcePolicy.property.document"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResourcePolicy.property.resourceArn"></a>

- *Type:* `string`

---

##### `revision`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResourcePolicy.property.revision"></a>

- *Type:* `string`

---

### CodeArtifactSuccessfulPackageVersionInfo <a name="aws-cdk-sdk.codeartifact.CodeArtifactSuccessfulPackageVersionInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactSuccessfulPackageVersionInfo: codeartifact.CodeArtifactSuccessfulPackageVersionInfo = { ... }
```

##### `revision`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactSuccessfulPackageVersionInfo.property.revision"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactSuccessfulPackageVersionInfo.property.status"></a>

- *Type:* `string`

---

### CodeArtifactTag <a name="aws-cdk-sdk.codeartifact.CodeArtifactTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactTag: codeartifact.CodeArtifactTag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactTag.property.value"></a>

- *Type:* `string`

---

### CodeArtifactTagResourceRequest <a name="aws-cdk-sdk.codeartifact.CodeArtifactTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactTagResourceRequest: codeartifact.CodeArtifactTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactTagResourceRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactTag`](#aws-cdk-sdk.codeartifact.CodeArtifactTag)[]

---

### CodeArtifactTagResourceResult <a name="aws-cdk-sdk.codeartifact.CodeArtifactTagResourceResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactTagResourceResult: codeartifact.CodeArtifactTagResourceResult = { ... }
```

### CodeArtifactUntagResourceRequest <a name="aws-cdk-sdk.codeartifact.CodeArtifactUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactUntagResourceRequest: codeartifact.CodeArtifactUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### CodeArtifactUntagResourceResult <a name="aws-cdk-sdk.codeartifact.CodeArtifactUntagResourceResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactUntagResourceResult: codeartifact.CodeArtifactUntagResourceResult = { ... }
```

### CodeArtifactUpdatePackageVersionsStatusRequest <a name="aws-cdk-sdk.codeartifact.CodeArtifactUpdatePackageVersionsStatusRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactUpdatePackageVersionsStatusRequest: codeartifact.CodeArtifactUpdatePackageVersionsStatusRequest = { ... }
```

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactUpdatePackageVersionsStatusRequest.property.domain"></a>

- *Type:* `string`

---

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactUpdatePackageVersionsStatusRequest.property.format"></a>

- *Type:* `string`

---

##### `package`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactUpdatePackageVersionsStatusRequest.property.package"></a>

- *Type:* `string`

---

##### `repository`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactUpdatePackageVersionsStatusRequest.property.repository"></a>

- *Type:* `string`

---

##### `targetStatus`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactUpdatePackageVersionsStatusRequest.property.targetStatus"></a>

- *Type:* `string`

---

##### `versions`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactUpdatePackageVersionsStatusRequest.property.versions"></a>

- *Type:* `string`[]

---

##### `domainOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactUpdatePackageVersionsStatusRequest.property.domainOwner"></a>

- *Type:* `string`

---

##### `expectedStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactUpdatePackageVersionsStatusRequest.property.expectedStatus"></a>

- *Type:* `string`

---

##### `namespace`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactUpdatePackageVersionsStatusRequest.property.namespace"></a>

- *Type:* `string`

---

##### `versionRevisions`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactUpdatePackageVersionsStatusRequest.property.versionRevisions"></a>

- *Type:* {[ key: string ]: `string`}

---

### CodeArtifactUpdatePackageVersionsStatusResult <a name="aws-cdk-sdk.codeartifact.CodeArtifactUpdatePackageVersionsStatusResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactUpdatePackageVersionsStatusResult: codeartifact.CodeArtifactUpdatePackageVersionsStatusResult = { ... }
```

##### `failedVersions`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactUpdatePackageVersionsStatusResult.property.failedVersions"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.codeartifact.CodeArtifactPackageVersionError`](#aws-cdk-sdk.codeartifact.CodeArtifactPackageVersionError)}

---

##### `successfulVersions`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactUpdatePackageVersionsStatusResult.property.successfulVersions"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.codeartifact.CodeArtifactSuccessfulPackageVersionInfo`](#aws-cdk-sdk.codeartifact.CodeArtifactSuccessfulPackageVersionInfo)}

---

### CodeArtifactUpdateRepositoryRequest <a name="aws-cdk-sdk.codeartifact.CodeArtifactUpdateRepositoryRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactUpdateRepositoryRequest: codeartifact.CodeArtifactUpdateRepositoryRequest = { ... }
```

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactUpdateRepositoryRequest.property.domain"></a>

- *Type:* `string`

---

##### `repository`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactUpdateRepositoryRequest.property.repository"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactUpdateRepositoryRequest.property.description"></a>

- *Type:* `string`

---

##### `domainOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactUpdateRepositoryRequest.property.domainOwner"></a>

- *Type:* `string`

---

##### `upstreams`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactUpdateRepositoryRequest.property.upstreams"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactUpstreamRepository`](#aws-cdk-sdk.codeartifact.CodeArtifactUpstreamRepository)[]

---

### CodeArtifactUpdateRepositoryResult <a name="aws-cdk-sdk.codeartifact.CodeArtifactUpdateRepositoryResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactUpdateRepositoryResult: codeartifact.CodeArtifactUpdateRepositoryResult = { ... }
```

##### `repository`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactUpdateRepositoryResult.property.repository"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactRepositoryDescription`](#aws-cdk-sdk.codeartifact.CodeArtifactRepositoryDescription)

---

### CodeArtifactUpstreamRepository <a name="aws-cdk-sdk.codeartifact.CodeArtifactUpstreamRepository"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactUpstreamRepository: codeartifact.CodeArtifactUpstreamRepository = { ... }
```

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactUpstreamRepository.property.repositoryName"></a>

- *Type:* `string`

---

### CodeArtifactUpstreamRepositoryInfo <a name="aws-cdk-sdk.codeartifact.CodeArtifactUpstreamRepositoryInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

const codeArtifactUpstreamRepositoryInfo: codeartifact.CodeArtifactUpstreamRepositoryInfo = { ... }
```

##### `repositoryName`<sup>Optional</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactUpstreamRepositoryInfo.property.repositoryName"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### CodeArtifactResponsesAssociateExternalConnection <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesAssociateExternalConnection"></a>

#### Initializer <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesAssociateExternalConnection.Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

new codeartifact.CodeArtifactResponsesAssociateExternalConnection(__scope: Construct, __resources: string[], __input: CodeArtifactAssociateExternalConnectionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesAssociateExternalConnection.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesAssociateExternalConnection.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesAssociateExternalConnection.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactAssociateExternalConnectionRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactAssociateExternalConnectionRequest)

---



#### Properties <a name="Properties"></a>

##### `repository`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesAssociateExternalConnection.property.repository"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactResponsesAssociateExternalConnectionRepository`](#aws-cdk-sdk.codeartifact.CodeArtifactResponsesAssociateExternalConnectionRepository)

---


### CodeArtifactResponsesAssociateExternalConnectionRepository <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesAssociateExternalConnectionRepository"></a>

#### Initializer <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesAssociateExternalConnectionRepository.Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

new codeartifact.CodeArtifactResponsesAssociateExternalConnectionRepository(__scope: Construct, __resources: string[], __input: CodeArtifactAssociateExternalConnectionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesAssociateExternalConnectionRepository.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesAssociateExternalConnectionRepository.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesAssociateExternalConnectionRepository.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactAssociateExternalConnectionRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactAssociateExternalConnectionRequest)

---



#### Properties <a name="Properties"></a>

##### `administratorAccount`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesAssociateExternalConnectionRepository.property.administratorAccount"></a>

- *Type:* `string`

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesAssociateExternalConnectionRepository.property.arn"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesAssociateExternalConnectionRepository.property.description"></a>

- *Type:* `string`

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesAssociateExternalConnectionRepository.property.domainName"></a>

- *Type:* `string`

---

##### `domainOwner`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesAssociateExternalConnectionRepository.property.domainOwner"></a>

- *Type:* `string`

---

##### `externalConnections`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesAssociateExternalConnectionRepository.property.externalConnections"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactRepositoryExternalConnectionInfo`](#aws-cdk-sdk.codeartifact.CodeArtifactRepositoryExternalConnectionInfo)[]

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesAssociateExternalConnectionRepository.property.name"></a>

- *Type:* `string`

---

##### `upstreams`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesAssociateExternalConnectionRepository.property.upstreams"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactUpstreamRepositoryInfo`](#aws-cdk-sdk.codeartifact.CodeArtifactUpstreamRepositoryInfo)[]

---


### CodeArtifactResponsesCopyPackageVersions <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesCopyPackageVersions"></a>

#### Initializer <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesCopyPackageVersions.Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

new codeartifact.CodeArtifactResponsesCopyPackageVersions(__scope: Construct, __resources: string[], __input: CodeArtifactCopyPackageVersionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesCopyPackageVersions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesCopyPackageVersions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesCopyPackageVersions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactCopyPackageVersionsRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactCopyPackageVersionsRequest)

---



#### Properties <a name="Properties"></a>

##### `failedVersions`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesCopyPackageVersions.property.failedVersions"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.codeartifact.CodeArtifactPackageVersionError`](#aws-cdk-sdk.codeartifact.CodeArtifactPackageVersionError)}

---

##### `successfulVersions`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesCopyPackageVersions.property.successfulVersions"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.codeartifact.CodeArtifactSuccessfulPackageVersionInfo`](#aws-cdk-sdk.codeartifact.CodeArtifactSuccessfulPackageVersionInfo)}

---


### CodeArtifactResponsesCreateDomain <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesCreateDomain"></a>

#### Initializer <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesCreateDomain.Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

new codeartifact.CodeArtifactResponsesCreateDomain(__scope: Construct, __resources: string[], __input: CodeArtifactCreateDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesCreateDomain.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesCreateDomain.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesCreateDomain.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactCreateDomainRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactCreateDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesCreateDomain.property.domain"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactResponsesCreateDomainDomain`](#aws-cdk-sdk.codeartifact.CodeArtifactResponsesCreateDomainDomain)

---


### CodeArtifactResponsesCreateDomainDomain <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesCreateDomainDomain"></a>

#### Initializer <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesCreateDomainDomain.Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

new codeartifact.CodeArtifactResponsesCreateDomainDomain(__scope: Construct, __resources: string[], __input: CodeArtifactCreateDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesCreateDomainDomain.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesCreateDomainDomain.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesCreateDomainDomain.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactCreateDomainRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactCreateDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesCreateDomainDomain.property.arn"></a>

- *Type:* `string`

---

##### `assetSizeBytes`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesCreateDomainDomain.property.assetSizeBytes"></a>

- *Type:* `number`

---

##### `createdTime`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesCreateDomainDomain.property.createdTime"></a>

- *Type:* `string`

---

##### `encryptionKey`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesCreateDomainDomain.property.encryptionKey"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesCreateDomainDomain.property.name"></a>

- *Type:* `string`

---

##### `owner`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesCreateDomainDomain.property.owner"></a>

- *Type:* `string`

---

##### `repositoryCount`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesCreateDomainDomain.property.repositoryCount"></a>

- *Type:* `number`

---

##### `s3BucketArn`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesCreateDomainDomain.property.s3BucketArn"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesCreateDomainDomain.property.status"></a>

- *Type:* `string`

---


### CodeArtifactResponsesCreateRepository <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesCreateRepository"></a>

#### Initializer <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesCreateRepository.Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

new codeartifact.CodeArtifactResponsesCreateRepository(__scope: Construct, __resources: string[], __input: CodeArtifactCreateRepositoryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesCreateRepository.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesCreateRepository.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesCreateRepository.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactCreateRepositoryRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactCreateRepositoryRequest)

---



#### Properties <a name="Properties"></a>

##### `repository`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesCreateRepository.property.repository"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactResponsesCreateRepositoryRepository`](#aws-cdk-sdk.codeartifact.CodeArtifactResponsesCreateRepositoryRepository)

---


### CodeArtifactResponsesCreateRepositoryRepository <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesCreateRepositoryRepository"></a>

#### Initializer <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesCreateRepositoryRepository.Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

new codeartifact.CodeArtifactResponsesCreateRepositoryRepository(__scope: Construct, __resources: string[], __input: CodeArtifactCreateRepositoryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesCreateRepositoryRepository.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesCreateRepositoryRepository.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesCreateRepositoryRepository.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactCreateRepositoryRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactCreateRepositoryRequest)

---



#### Properties <a name="Properties"></a>

##### `administratorAccount`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesCreateRepositoryRepository.property.administratorAccount"></a>

- *Type:* `string`

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesCreateRepositoryRepository.property.arn"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesCreateRepositoryRepository.property.description"></a>

- *Type:* `string`

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesCreateRepositoryRepository.property.domainName"></a>

- *Type:* `string`

---

##### `domainOwner`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesCreateRepositoryRepository.property.domainOwner"></a>

- *Type:* `string`

---

##### `externalConnections`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesCreateRepositoryRepository.property.externalConnections"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactRepositoryExternalConnectionInfo`](#aws-cdk-sdk.codeartifact.CodeArtifactRepositoryExternalConnectionInfo)[]

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesCreateRepositoryRepository.property.name"></a>

- *Type:* `string`

---

##### `upstreams`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesCreateRepositoryRepository.property.upstreams"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactUpstreamRepositoryInfo`](#aws-cdk-sdk.codeartifact.CodeArtifactUpstreamRepositoryInfo)[]

---


### CodeArtifactResponsesDeleteDomain <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteDomain"></a>

#### Initializer <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteDomain.Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

new codeartifact.CodeArtifactResponsesDeleteDomain(__scope: Construct, __resources: string[], __input: CodeArtifactDeleteDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteDomain.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteDomain.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteDomain.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactDeleteDomainRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactDeleteDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteDomain.property.domain"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteDomainDomain`](#aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteDomainDomain)

---


### CodeArtifactResponsesDeleteDomainDomain <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteDomainDomain"></a>

#### Initializer <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteDomainDomain.Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

new codeartifact.CodeArtifactResponsesDeleteDomainDomain(__scope: Construct, __resources: string[], __input: CodeArtifactDeleteDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteDomainDomain.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteDomainDomain.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteDomainDomain.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactDeleteDomainRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactDeleteDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteDomainDomain.property.arn"></a>

- *Type:* `string`

---

##### `assetSizeBytes`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteDomainDomain.property.assetSizeBytes"></a>

- *Type:* `number`

---

##### `createdTime`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteDomainDomain.property.createdTime"></a>

- *Type:* `string`

---

##### `encryptionKey`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteDomainDomain.property.encryptionKey"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteDomainDomain.property.name"></a>

- *Type:* `string`

---

##### `owner`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteDomainDomain.property.owner"></a>

- *Type:* `string`

---

##### `repositoryCount`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteDomainDomain.property.repositoryCount"></a>

- *Type:* `number`

---

##### `s3BucketArn`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteDomainDomain.property.s3BucketArn"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteDomainDomain.property.status"></a>

- *Type:* `string`

---


### CodeArtifactResponsesDeleteDomainPermissionsPolicy <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteDomainPermissionsPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteDomainPermissionsPolicy.Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

new codeartifact.CodeArtifactResponsesDeleteDomainPermissionsPolicy(__scope: Construct, __resources: string[], __input: CodeArtifactDeleteDomainPermissionsPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteDomainPermissionsPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteDomainPermissionsPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteDomainPermissionsPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactDeleteDomainPermissionsPolicyRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactDeleteDomainPermissionsPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteDomainPermissionsPolicy.property.policy"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteDomainPermissionsPolicyPolicy`](#aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteDomainPermissionsPolicyPolicy)

---


### CodeArtifactResponsesDeleteDomainPermissionsPolicyPolicy <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteDomainPermissionsPolicyPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteDomainPermissionsPolicyPolicy.Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

new codeartifact.CodeArtifactResponsesDeleteDomainPermissionsPolicyPolicy(__scope: Construct, __resources: string[], __input: CodeArtifactDeleteDomainPermissionsPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteDomainPermissionsPolicyPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteDomainPermissionsPolicyPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteDomainPermissionsPolicyPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactDeleteDomainPermissionsPolicyRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactDeleteDomainPermissionsPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `document`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteDomainPermissionsPolicyPolicy.property.document"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteDomainPermissionsPolicyPolicy.property.resourceArn"></a>

- *Type:* `string`

---

##### `revision`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteDomainPermissionsPolicyPolicy.property.revision"></a>

- *Type:* `string`

---


### CodeArtifactResponsesDeletePackageVersions <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeletePackageVersions"></a>

#### Initializer <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeletePackageVersions.Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

new codeartifact.CodeArtifactResponsesDeletePackageVersions(__scope: Construct, __resources: string[], __input: CodeArtifactDeletePackageVersionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeletePackageVersions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeletePackageVersions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeletePackageVersions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactDeletePackageVersionsRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactDeletePackageVersionsRequest)

---



#### Properties <a name="Properties"></a>

##### `failedVersions`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeletePackageVersions.property.failedVersions"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.codeartifact.CodeArtifactPackageVersionError`](#aws-cdk-sdk.codeartifact.CodeArtifactPackageVersionError)}

---

##### `successfulVersions`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeletePackageVersions.property.successfulVersions"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.codeartifact.CodeArtifactSuccessfulPackageVersionInfo`](#aws-cdk-sdk.codeartifact.CodeArtifactSuccessfulPackageVersionInfo)}

---


### CodeArtifactResponsesDeleteRepository <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteRepository"></a>

#### Initializer <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteRepository.Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

new codeartifact.CodeArtifactResponsesDeleteRepository(__scope: Construct, __resources: string[], __input: CodeArtifactDeleteRepositoryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteRepository.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteRepository.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteRepository.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactDeleteRepositoryRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactDeleteRepositoryRequest)

---



#### Properties <a name="Properties"></a>

##### `repository`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteRepository.property.repository"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteRepositoryRepository`](#aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteRepositoryRepository)

---


### CodeArtifactResponsesDeleteRepositoryPermissionsPolicy <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteRepositoryPermissionsPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteRepositoryPermissionsPolicy.Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

new codeartifact.CodeArtifactResponsesDeleteRepositoryPermissionsPolicy(__scope: Construct, __resources: string[], __input: CodeArtifactDeleteRepositoryPermissionsPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteRepositoryPermissionsPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteRepositoryPermissionsPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteRepositoryPermissionsPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactDeleteRepositoryPermissionsPolicyRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactDeleteRepositoryPermissionsPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteRepositoryPermissionsPolicy.property.policy"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteRepositoryPermissionsPolicyPolicy`](#aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteRepositoryPermissionsPolicyPolicy)

---


### CodeArtifactResponsesDeleteRepositoryPermissionsPolicyPolicy <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteRepositoryPermissionsPolicyPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteRepositoryPermissionsPolicyPolicy.Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

new codeartifact.CodeArtifactResponsesDeleteRepositoryPermissionsPolicyPolicy(__scope: Construct, __resources: string[], __input: CodeArtifactDeleteRepositoryPermissionsPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteRepositoryPermissionsPolicyPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteRepositoryPermissionsPolicyPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteRepositoryPermissionsPolicyPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactDeleteRepositoryPermissionsPolicyRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactDeleteRepositoryPermissionsPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `document`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteRepositoryPermissionsPolicyPolicy.property.document"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteRepositoryPermissionsPolicyPolicy.property.resourceArn"></a>

- *Type:* `string`

---

##### `revision`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteRepositoryPermissionsPolicyPolicy.property.revision"></a>

- *Type:* `string`

---


### CodeArtifactResponsesDeleteRepositoryRepository <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteRepositoryRepository"></a>

#### Initializer <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteRepositoryRepository.Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

new codeartifact.CodeArtifactResponsesDeleteRepositoryRepository(__scope: Construct, __resources: string[], __input: CodeArtifactDeleteRepositoryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteRepositoryRepository.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteRepositoryRepository.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteRepositoryRepository.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactDeleteRepositoryRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactDeleteRepositoryRequest)

---



#### Properties <a name="Properties"></a>

##### `administratorAccount`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteRepositoryRepository.property.administratorAccount"></a>

- *Type:* `string`

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteRepositoryRepository.property.arn"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteRepositoryRepository.property.description"></a>

- *Type:* `string`

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteRepositoryRepository.property.domainName"></a>

- *Type:* `string`

---

##### `domainOwner`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteRepositoryRepository.property.domainOwner"></a>

- *Type:* `string`

---

##### `externalConnections`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteRepositoryRepository.property.externalConnections"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactRepositoryExternalConnectionInfo`](#aws-cdk-sdk.codeartifact.CodeArtifactRepositoryExternalConnectionInfo)[]

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteRepositoryRepository.property.name"></a>

- *Type:* `string`

---

##### `upstreams`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDeleteRepositoryRepository.property.upstreams"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactUpstreamRepositoryInfo`](#aws-cdk-sdk.codeartifact.CodeArtifactUpstreamRepositoryInfo)[]

---


### CodeArtifactResponsesDescribeDomain <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribeDomain"></a>

#### Initializer <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribeDomain.Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

new codeartifact.CodeArtifactResponsesDescribeDomain(__scope: Construct, __resources: string[], __input: CodeArtifactDescribeDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribeDomain.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribeDomain.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribeDomain.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactDescribeDomainRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactDescribeDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribeDomain.property.domain"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribeDomainDomain`](#aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribeDomainDomain)

---


### CodeArtifactResponsesDescribeDomainDomain <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribeDomainDomain"></a>

#### Initializer <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribeDomainDomain.Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

new codeartifact.CodeArtifactResponsesDescribeDomainDomain(__scope: Construct, __resources: string[], __input: CodeArtifactDescribeDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribeDomainDomain.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribeDomainDomain.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribeDomainDomain.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactDescribeDomainRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactDescribeDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribeDomainDomain.property.arn"></a>

- *Type:* `string`

---

##### `assetSizeBytes`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribeDomainDomain.property.assetSizeBytes"></a>

- *Type:* `number`

---

##### `createdTime`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribeDomainDomain.property.createdTime"></a>

- *Type:* `string`

---

##### `encryptionKey`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribeDomainDomain.property.encryptionKey"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribeDomainDomain.property.name"></a>

- *Type:* `string`

---

##### `owner`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribeDomainDomain.property.owner"></a>

- *Type:* `string`

---

##### `repositoryCount`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribeDomainDomain.property.repositoryCount"></a>

- *Type:* `number`

---

##### `s3BucketArn`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribeDomainDomain.property.s3BucketArn"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribeDomainDomain.property.status"></a>

- *Type:* `string`

---


### CodeArtifactResponsesDescribePackageVersion <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribePackageVersion"></a>

#### Initializer <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribePackageVersion.Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

new codeartifact.CodeArtifactResponsesDescribePackageVersion(__scope: Construct, __resources: string[], __input: CodeArtifactDescribePackageVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribePackageVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribePackageVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribePackageVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactDescribePackageVersionRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactDescribePackageVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `packageVersion`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribePackageVersion.property.packageVersion"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribePackageVersionPackageVersion`](#aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribePackageVersionPackageVersion)

---


### CodeArtifactResponsesDescribePackageVersionPackageVersion <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribePackageVersionPackageVersion"></a>

#### Initializer <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribePackageVersionPackageVersion.Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

new codeartifact.CodeArtifactResponsesDescribePackageVersionPackageVersion(__scope: Construct, __resources: string[], __input: CodeArtifactDescribePackageVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribePackageVersionPackageVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribePackageVersionPackageVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribePackageVersionPackageVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactDescribePackageVersionRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactDescribePackageVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `displayName`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribePackageVersionPackageVersion.property.displayName"></a>

- *Type:* `string`

---

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribePackageVersionPackageVersion.property.format"></a>

- *Type:* `string`

---

##### `homePage`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribePackageVersionPackageVersion.property.homePage"></a>

- *Type:* `string`

---

##### `licenses`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribePackageVersionPackageVersion.property.licenses"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactLicenseInfo`](#aws-cdk-sdk.codeartifact.CodeArtifactLicenseInfo)[]

---

##### `namespace`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribePackageVersionPackageVersion.property.namespace"></a>

- *Type:* `string`

---

##### `packageName`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribePackageVersionPackageVersion.property.packageName"></a>

- *Type:* `string`

---

##### `publishedTime`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribePackageVersionPackageVersion.property.publishedTime"></a>

- *Type:* `string`

---

##### `revision`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribePackageVersionPackageVersion.property.revision"></a>

- *Type:* `string`

---

##### `sourceCodeRepository`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribePackageVersionPackageVersion.property.sourceCodeRepository"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribePackageVersionPackageVersion.property.status"></a>

- *Type:* `string`

---

##### `summary`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribePackageVersionPackageVersion.property.summary"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribePackageVersionPackageVersion.property.version"></a>

- *Type:* `string`

---


### CodeArtifactResponsesDescribeRepository <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribeRepository"></a>

#### Initializer <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribeRepository.Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

new codeartifact.CodeArtifactResponsesDescribeRepository(__scope: Construct, __resources: string[], __input: CodeArtifactDescribeRepositoryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribeRepository.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribeRepository.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribeRepository.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactDescribeRepositoryRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactDescribeRepositoryRequest)

---



#### Properties <a name="Properties"></a>

##### `repository`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribeRepository.property.repository"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribeRepositoryRepository`](#aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribeRepositoryRepository)

---


### CodeArtifactResponsesDescribeRepositoryRepository <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribeRepositoryRepository"></a>

#### Initializer <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribeRepositoryRepository.Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

new codeartifact.CodeArtifactResponsesDescribeRepositoryRepository(__scope: Construct, __resources: string[], __input: CodeArtifactDescribeRepositoryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribeRepositoryRepository.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribeRepositoryRepository.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribeRepositoryRepository.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactDescribeRepositoryRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactDescribeRepositoryRequest)

---



#### Properties <a name="Properties"></a>

##### `administratorAccount`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribeRepositoryRepository.property.administratorAccount"></a>

- *Type:* `string`

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribeRepositoryRepository.property.arn"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribeRepositoryRepository.property.description"></a>

- *Type:* `string`

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribeRepositoryRepository.property.domainName"></a>

- *Type:* `string`

---

##### `domainOwner`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribeRepositoryRepository.property.domainOwner"></a>

- *Type:* `string`

---

##### `externalConnections`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribeRepositoryRepository.property.externalConnections"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactRepositoryExternalConnectionInfo`](#aws-cdk-sdk.codeartifact.CodeArtifactRepositoryExternalConnectionInfo)[]

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribeRepositoryRepository.property.name"></a>

- *Type:* `string`

---

##### `upstreams`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDescribeRepositoryRepository.property.upstreams"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactUpstreamRepositoryInfo`](#aws-cdk-sdk.codeartifact.CodeArtifactUpstreamRepositoryInfo)[]

---


### CodeArtifactResponsesDisassociateExternalConnection <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDisassociateExternalConnection"></a>

#### Initializer <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDisassociateExternalConnection.Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

new codeartifact.CodeArtifactResponsesDisassociateExternalConnection(__scope: Construct, __resources: string[], __input: CodeArtifactDisassociateExternalConnectionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDisassociateExternalConnection.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDisassociateExternalConnection.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDisassociateExternalConnection.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactDisassociateExternalConnectionRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactDisassociateExternalConnectionRequest)

---



#### Properties <a name="Properties"></a>

##### `repository`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDisassociateExternalConnection.property.repository"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactResponsesDisassociateExternalConnectionRepository`](#aws-cdk-sdk.codeartifact.CodeArtifactResponsesDisassociateExternalConnectionRepository)

---


### CodeArtifactResponsesDisassociateExternalConnectionRepository <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDisassociateExternalConnectionRepository"></a>

#### Initializer <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDisassociateExternalConnectionRepository.Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

new codeartifact.CodeArtifactResponsesDisassociateExternalConnectionRepository(__scope: Construct, __resources: string[], __input: CodeArtifactDisassociateExternalConnectionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDisassociateExternalConnectionRepository.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDisassociateExternalConnectionRepository.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDisassociateExternalConnectionRepository.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactDisassociateExternalConnectionRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactDisassociateExternalConnectionRequest)

---



#### Properties <a name="Properties"></a>

##### `administratorAccount`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDisassociateExternalConnectionRepository.property.administratorAccount"></a>

- *Type:* `string`

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDisassociateExternalConnectionRepository.property.arn"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDisassociateExternalConnectionRepository.property.description"></a>

- *Type:* `string`

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDisassociateExternalConnectionRepository.property.domainName"></a>

- *Type:* `string`

---

##### `domainOwner`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDisassociateExternalConnectionRepository.property.domainOwner"></a>

- *Type:* `string`

---

##### `externalConnections`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDisassociateExternalConnectionRepository.property.externalConnections"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactRepositoryExternalConnectionInfo`](#aws-cdk-sdk.codeartifact.CodeArtifactRepositoryExternalConnectionInfo)[]

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDisassociateExternalConnectionRepository.property.name"></a>

- *Type:* `string`

---

##### `upstreams`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDisassociateExternalConnectionRepository.property.upstreams"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactUpstreamRepositoryInfo`](#aws-cdk-sdk.codeartifact.CodeArtifactUpstreamRepositoryInfo)[]

---


### CodeArtifactResponsesDisposePackageVersions <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDisposePackageVersions"></a>

#### Initializer <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDisposePackageVersions.Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

new codeartifact.CodeArtifactResponsesDisposePackageVersions(__scope: Construct, __resources: string[], __input: CodeArtifactDisposePackageVersionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDisposePackageVersions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDisposePackageVersions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDisposePackageVersions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactDisposePackageVersionsRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactDisposePackageVersionsRequest)

---



#### Properties <a name="Properties"></a>

##### `failedVersions`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDisposePackageVersions.property.failedVersions"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.codeartifact.CodeArtifactPackageVersionError`](#aws-cdk-sdk.codeartifact.CodeArtifactPackageVersionError)}

---

##### `successfulVersions`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesDisposePackageVersions.property.successfulVersions"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.codeartifact.CodeArtifactSuccessfulPackageVersionInfo`](#aws-cdk-sdk.codeartifact.CodeArtifactSuccessfulPackageVersionInfo)}

---


### CodeArtifactResponsesFetchAuthorizationToken <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesFetchAuthorizationToken"></a>

#### Initializer <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesFetchAuthorizationToken.Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

new codeartifact.CodeArtifactResponsesFetchAuthorizationToken(__scope: Construct, __resources: string[], __input: CodeArtifactGetAuthorizationTokenRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesFetchAuthorizationToken.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesFetchAuthorizationToken.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesFetchAuthorizationToken.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactGetAuthorizationTokenRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactGetAuthorizationTokenRequest)

---



#### Properties <a name="Properties"></a>

##### `authorizationToken`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesFetchAuthorizationToken.property.authorizationToken"></a>

- *Type:* `string`

---

##### `expiration`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesFetchAuthorizationToken.property.expiration"></a>

- *Type:* `string`

---


### CodeArtifactResponsesFetchDomainPermissionsPolicy <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesFetchDomainPermissionsPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesFetchDomainPermissionsPolicy.Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

new codeartifact.CodeArtifactResponsesFetchDomainPermissionsPolicy(__scope: Construct, __resources: string[], __input: CodeArtifactGetDomainPermissionsPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesFetchDomainPermissionsPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesFetchDomainPermissionsPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesFetchDomainPermissionsPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactGetDomainPermissionsPolicyRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactGetDomainPermissionsPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesFetchDomainPermissionsPolicy.property.policy"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactResponsesFetchDomainPermissionsPolicyPolicy`](#aws-cdk-sdk.codeartifact.CodeArtifactResponsesFetchDomainPermissionsPolicyPolicy)

---


### CodeArtifactResponsesFetchDomainPermissionsPolicyPolicy <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesFetchDomainPermissionsPolicyPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesFetchDomainPermissionsPolicyPolicy.Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

new codeartifact.CodeArtifactResponsesFetchDomainPermissionsPolicyPolicy(__scope: Construct, __resources: string[], __input: CodeArtifactGetDomainPermissionsPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesFetchDomainPermissionsPolicyPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesFetchDomainPermissionsPolicyPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesFetchDomainPermissionsPolicyPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactGetDomainPermissionsPolicyRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactGetDomainPermissionsPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `document`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesFetchDomainPermissionsPolicyPolicy.property.document"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesFetchDomainPermissionsPolicyPolicy.property.resourceArn"></a>

- *Type:* `string`

---

##### `revision`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesFetchDomainPermissionsPolicyPolicy.property.revision"></a>

- *Type:* `string`

---


### CodeArtifactResponsesFetchPackageVersionAsset <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesFetchPackageVersionAsset"></a>

#### Initializer <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesFetchPackageVersionAsset.Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

new codeartifact.CodeArtifactResponsesFetchPackageVersionAsset(__scope: Construct, __resources: string[], __input: CodeArtifactGetPackageVersionAssetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesFetchPackageVersionAsset.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesFetchPackageVersionAsset.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesFetchPackageVersionAsset.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactGetPackageVersionAssetRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactGetPackageVersionAssetRequest)

---



#### Properties <a name="Properties"></a>

##### `asset`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesFetchPackageVersionAsset.property.asset"></a>

- *Type:* `any`

---

##### `assetName`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesFetchPackageVersionAsset.property.assetName"></a>

- *Type:* `string`

---

##### `packageVersion`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesFetchPackageVersionAsset.property.packageVersion"></a>

- *Type:* `string`

---

##### `packageVersionRevision`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesFetchPackageVersionAsset.property.packageVersionRevision"></a>

- *Type:* `string`

---


### CodeArtifactResponsesFetchPackageVersionReadme <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesFetchPackageVersionReadme"></a>

#### Initializer <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesFetchPackageVersionReadme.Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

new codeartifact.CodeArtifactResponsesFetchPackageVersionReadme(__scope: Construct, __resources: string[], __input: CodeArtifactGetPackageVersionReadmeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesFetchPackageVersionReadme.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesFetchPackageVersionReadme.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesFetchPackageVersionReadme.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactGetPackageVersionReadmeRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactGetPackageVersionReadmeRequest)

---



#### Properties <a name="Properties"></a>

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesFetchPackageVersionReadme.property.format"></a>

- *Type:* `string`

---

##### `namespace`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesFetchPackageVersionReadme.property.namespace"></a>

- *Type:* `string`

---

##### `package`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesFetchPackageVersionReadme.property.package"></a>

- *Type:* `string`

---

##### `readme`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesFetchPackageVersionReadme.property.readme"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesFetchPackageVersionReadme.property.version"></a>

- *Type:* `string`

---

##### `versionRevision`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesFetchPackageVersionReadme.property.versionRevision"></a>

- *Type:* `string`

---


### CodeArtifactResponsesFetchRepositoryEndpoint <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesFetchRepositoryEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesFetchRepositoryEndpoint.Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

new codeartifact.CodeArtifactResponsesFetchRepositoryEndpoint(__scope: Construct, __resources: string[], __input: CodeArtifactGetRepositoryEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesFetchRepositoryEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesFetchRepositoryEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesFetchRepositoryEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactGetRepositoryEndpointRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactGetRepositoryEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `repositoryEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesFetchRepositoryEndpoint.property.repositoryEndpoint"></a>

- *Type:* `string`

---


### CodeArtifactResponsesFetchRepositoryPermissionsPolicy <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesFetchRepositoryPermissionsPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesFetchRepositoryPermissionsPolicy.Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

new codeartifact.CodeArtifactResponsesFetchRepositoryPermissionsPolicy(__scope: Construct, __resources: string[], __input: CodeArtifactGetRepositoryPermissionsPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesFetchRepositoryPermissionsPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesFetchRepositoryPermissionsPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesFetchRepositoryPermissionsPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactGetRepositoryPermissionsPolicyRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactGetRepositoryPermissionsPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesFetchRepositoryPermissionsPolicy.property.policy"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactResponsesFetchRepositoryPermissionsPolicyPolicy`](#aws-cdk-sdk.codeartifact.CodeArtifactResponsesFetchRepositoryPermissionsPolicyPolicy)

---


### CodeArtifactResponsesFetchRepositoryPermissionsPolicyPolicy <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesFetchRepositoryPermissionsPolicyPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesFetchRepositoryPermissionsPolicyPolicy.Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

new codeartifact.CodeArtifactResponsesFetchRepositoryPermissionsPolicyPolicy(__scope: Construct, __resources: string[], __input: CodeArtifactGetRepositoryPermissionsPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesFetchRepositoryPermissionsPolicyPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesFetchRepositoryPermissionsPolicyPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesFetchRepositoryPermissionsPolicyPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactGetRepositoryPermissionsPolicyRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactGetRepositoryPermissionsPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `document`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesFetchRepositoryPermissionsPolicyPolicy.property.document"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesFetchRepositoryPermissionsPolicyPolicy.property.resourceArn"></a>

- *Type:* `string`

---

##### `revision`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesFetchRepositoryPermissionsPolicyPolicy.property.revision"></a>

- *Type:* `string`

---


### CodeArtifactResponsesListDomains <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListDomains"></a>

#### Initializer <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListDomains.Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

new codeartifact.CodeArtifactResponsesListDomains(__scope: Construct, __resources: string[], __input: CodeArtifactListDomainsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListDomains.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListDomains.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListDomains.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactListDomainsRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactListDomainsRequest)

---



#### Properties <a name="Properties"></a>

##### `domains`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListDomains.property.domains"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactDomainSummary`](#aws-cdk-sdk.codeartifact.CodeArtifactDomainSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListDomains.property.nextToken"></a>

- *Type:* `string`

---


### CodeArtifactResponsesListPackages <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListPackages"></a>

#### Initializer <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListPackages.Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

new codeartifact.CodeArtifactResponsesListPackages(__scope: Construct, __resources: string[], __input: CodeArtifactListPackagesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListPackages.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListPackages.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListPackages.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactListPackagesRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactListPackagesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListPackages.property.nextToken"></a>

- *Type:* `string`

---

##### `packages`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListPackages.property.packages"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactPackageSummary`](#aws-cdk-sdk.codeartifact.CodeArtifactPackageSummary)[]

---


### CodeArtifactResponsesListPackageVersionAssets <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListPackageVersionAssets"></a>

#### Initializer <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListPackageVersionAssets.Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

new codeartifact.CodeArtifactResponsesListPackageVersionAssets(__scope: Construct, __resources: string[], __input: CodeArtifactListPackageVersionAssetsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListPackageVersionAssets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListPackageVersionAssets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListPackageVersionAssets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactListPackageVersionAssetsRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactListPackageVersionAssetsRequest)

---



#### Properties <a name="Properties"></a>

##### `assets`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListPackageVersionAssets.property.assets"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactAssetSummary`](#aws-cdk-sdk.codeartifact.CodeArtifactAssetSummary)[]

---

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListPackageVersionAssets.property.format"></a>

- *Type:* `string`

---

##### `namespace`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListPackageVersionAssets.property.namespace"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListPackageVersionAssets.property.nextToken"></a>

- *Type:* `string`

---

##### `package`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListPackageVersionAssets.property.package"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListPackageVersionAssets.property.version"></a>

- *Type:* `string`

---

##### `versionRevision`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListPackageVersionAssets.property.versionRevision"></a>

- *Type:* `string`

---


### CodeArtifactResponsesListPackageVersionDependencies <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListPackageVersionDependencies"></a>

#### Initializer <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListPackageVersionDependencies.Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

new codeartifact.CodeArtifactResponsesListPackageVersionDependencies(__scope: Construct, __resources: string[], __input: CodeArtifactListPackageVersionDependenciesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListPackageVersionDependencies.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListPackageVersionDependencies.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListPackageVersionDependencies.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactListPackageVersionDependenciesRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactListPackageVersionDependenciesRequest)

---



#### Properties <a name="Properties"></a>

##### `dependencies`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListPackageVersionDependencies.property.dependencies"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactPackageDependency`](#aws-cdk-sdk.codeartifact.CodeArtifactPackageDependency)[]

---

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListPackageVersionDependencies.property.format"></a>

- *Type:* `string`

---

##### `namespace`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListPackageVersionDependencies.property.namespace"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListPackageVersionDependencies.property.nextToken"></a>

- *Type:* `string`

---

##### `package`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListPackageVersionDependencies.property.package"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListPackageVersionDependencies.property.version"></a>

- *Type:* `string`

---

##### `versionRevision`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListPackageVersionDependencies.property.versionRevision"></a>

- *Type:* `string`

---


### CodeArtifactResponsesListPackageVersions <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListPackageVersions"></a>

#### Initializer <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListPackageVersions.Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

new codeartifact.CodeArtifactResponsesListPackageVersions(__scope: Construct, __resources: string[], __input: CodeArtifactListPackageVersionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListPackageVersions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListPackageVersions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListPackageVersions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactListPackageVersionsRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactListPackageVersionsRequest)

---



#### Properties <a name="Properties"></a>

##### `defaultDisplayVersion`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListPackageVersions.property.defaultDisplayVersion"></a>

- *Type:* `string`

---

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListPackageVersions.property.format"></a>

- *Type:* `string`

---

##### `namespace`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListPackageVersions.property.namespace"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListPackageVersions.property.nextToken"></a>

- *Type:* `string`

---

##### `package`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListPackageVersions.property.package"></a>

- *Type:* `string`

---

##### `versions`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListPackageVersions.property.versions"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactPackageVersionSummary`](#aws-cdk-sdk.codeartifact.CodeArtifactPackageVersionSummary)[]

---


### CodeArtifactResponsesListRepositories <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListRepositories"></a>

#### Initializer <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListRepositories.Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

new codeartifact.CodeArtifactResponsesListRepositories(__scope: Construct, __resources: string[], __input: CodeArtifactListRepositoriesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListRepositories.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListRepositories.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListRepositories.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactListRepositoriesRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactListRepositoriesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListRepositories.property.nextToken"></a>

- *Type:* `string`

---

##### `repositories`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListRepositories.property.repositories"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactRepositorySummary`](#aws-cdk-sdk.codeartifact.CodeArtifactRepositorySummary)[]

---


### CodeArtifactResponsesListRepositoriesInDomain <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListRepositoriesInDomain"></a>

#### Initializer <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListRepositoriesInDomain.Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

new codeartifact.CodeArtifactResponsesListRepositoriesInDomain(__scope: Construct, __resources: string[], __input: CodeArtifactListRepositoriesInDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListRepositoriesInDomain.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListRepositoriesInDomain.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListRepositoriesInDomain.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactListRepositoriesInDomainRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactListRepositoriesInDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListRepositoriesInDomain.property.nextToken"></a>

- *Type:* `string`

---

##### `repositories`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListRepositoriesInDomain.property.repositories"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactRepositorySummary`](#aws-cdk-sdk.codeartifact.CodeArtifactRepositorySummary)[]

---


### CodeArtifactResponsesListTagsForResource <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListTagsForResource.Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

new codeartifact.CodeArtifactResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: CodeArtifactListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactListTagsForResourceRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesListTagsForResource.property.tags"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactTag`](#aws-cdk-sdk.codeartifact.CodeArtifactTag)[]

---


### CodeArtifactResponsesPutDomainPermissionsPolicy <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesPutDomainPermissionsPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesPutDomainPermissionsPolicy.Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

new codeartifact.CodeArtifactResponsesPutDomainPermissionsPolicy(__scope: Construct, __resources: string[], __input: CodeArtifactPutDomainPermissionsPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesPutDomainPermissionsPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesPutDomainPermissionsPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesPutDomainPermissionsPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactPutDomainPermissionsPolicyRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactPutDomainPermissionsPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesPutDomainPermissionsPolicy.property.policy"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactResponsesPutDomainPermissionsPolicyPolicy`](#aws-cdk-sdk.codeartifact.CodeArtifactResponsesPutDomainPermissionsPolicyPolicy)

---


### CodeArtifactResponsesPutDomainPermissionsPolicyPolicy <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesPutDomainPermissionsPolicyPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesPutDomainPermissionsPolicyPolicy.Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

new codeartifact.CodeArtifactResponsesPutDomainPermissionsPolicyPolicy(__scope: Construct, __resources: string[], __input: CodeArtifactPutDomainPermissionsPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesPutDomainPermissionsPolicyPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesPutDomainPermissionsPolicyPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesPutDomainPermissionsPolicyPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactPutDomainPermissionsPolicyRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactPutDomainPermissionsPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `document`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesPutDomainPermissionsPolicyPolicy.property.document"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesPutDomainPermissionsPolicyPolicy.property.resourceArn"></a>

- *Type:* `string`

---

##### `revision`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesPutDomainPermissionsPolicyPolicy.property.revision"></a>

- *Type:* `string`

---


### CodeArtifactResponsesPutRepositoryPermissionsPolicy <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesPutRepositoryPermissionsPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesPutRepositoryPermissionsPolicy.Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

new codeartifact.CodeArtifactResponsesPutRepositoryPermissionsPolicy(__scope: Construct, __resources: string[], __input: CodeArtifactPutRepositoryPermissionsPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesPutRepositoryPermissionsPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesPutRepositoryPermissionsPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesPutRepositoryPermissionsPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactPutRepositoryPermissionsPolicyRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactPutRepositoryPermissionsPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesPutRepositoryPermissionsPolicy.property.policy"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactResponsesPutRepositoryPermissionsPolicyPolicy`](#aws-cdk-sdk.codeartifact.CodeArtifactResponsesPutRepositoryPermissionsPolicyPolicy)

---


### CodeArtifactResponsesPutRepositoryPermissionsPolicyPolicy <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesPutRepositoryPermissionsPolicyPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesPutRepositoryPermissionsPolicyPolicy.Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

new codeartifact.CodeArtifactResponsesPutRepositoryPermissionsPolicyPolicy(__scope: Construct, __resources: string[], __input: CodeArtifactPutRepositoryPermissionsPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesPutRepositoryPermissionsPolicyPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesPutRepositoryPermissionsPolicyPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesPutRepositoryPermissionsPolicyPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactPutRepositoryPermissionsPolicyRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactPutRepositoryPermissionsPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `document`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesPutRepositoryPermissionsPolicyPolicy.property.document"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesPutRepositoryPermissionsPolicyPolicy.property.resourceArn"></a>

- *Type:* `string`

---

##### `revision`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesPutRepositoryPermissionsPolicyPolicy.property.revision"></a>

- *Type:* `string`

---


### CodeArtifactResponsesUpdatePackageVersionsStatus <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesUpdatePackageVersionsStatus"></a>

#### Initializer <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesUpdatePackageVersionsStatus.Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

new codeartifact.CodeArtifactResponsesUpdatePackageVersionsStatus(__scope: Construct, __resources: string[], __input: CodeArtifactUpdatePackageVersionsStatusRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesUpdatePackageVersionsStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesUpdatePackageVersionsStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesUpdatePackageVersionsStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactUpdatePackageVersionsStatusRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactUpdatePackageVersionsStatusRequest)

---



#### Properties <a name="Properties"></a>

##### `failedVersions`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesUpdatePackageVersionsStatus.property.failedVersions"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.codeartifact.CodeArtifactPackageVersionError`](#aws-cdk-sdk.codeartifact.CodeArtifactPackageVersionError)}

---

##### `successfulVersions`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesUpdatePackageVersionsStatus.property.successfulVersions"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.codeartifact.CodeArtifactSuccessfulPackageVersionInfo`](#aws-cdk-sdk.codeartifact.CodeArtifactSuccessfulPackageVersionInfo)}

---


### CodeArtifactResponsesUpdateRepository <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesUpdateRepository"></a>

#### Initializer <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesUpdateRepository.Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

new codeartifact.CodeArtifactResponsesUpdateRepository(__scope: Construct, __resources: string[], __input: CodeArtifactUpdateRepositoryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesUpdateRepository.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesUpdateRepository.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesUpdateRepository.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactUpdateRepositoryRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactUpdateRepositoryRequest)

---



#### Properties <a name="Properties"></a>

##### `repository`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesUpdateRepository.property.repository"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactResponsesUpdateRepositoryRepository`](#aws-cdk-sdk.codeartifact.CodeArtifactResponsesUpdateRepositoryRepository)

---


### CodeArtifactResponsesUpdateRepositoryRepository <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesUpdateRepositoryRepository"></a>

#### Initializer <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesUpdateRepositoryRepository.Initializer"></a>

```typescript
import { codeartifact } from 'aws-cdk-sdk'

new codeartifact.CodeArtifactResponsesUpdateRepositoryRepository(__scope: Construct, __resources: string[], __input: CodeArtifactUpdateRepositoryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesUpdateRepositoryRepository.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesUpdateRepositoryRepository.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesUpdateRepositoryRepository.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactUpdateRepositoryRequest`](#aws-cdk-sdk.codeartifact.CodeArtifactUpdateRepositoryRequest)

---



#### Properties <a name="Properties"></a>

##### `administratorAccount`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesUpdateRepositoryRepository.property.administratorAccount"></a>

- *Type:* `string`

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesUpdateRepositoryRepository.property.arn"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesUpdateRepositoryRepository.property.description"></a>

- *Type:* `string`

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesUpdateRepositoryRepository.property.domainName"></a>

- *Type:* `string`

---

##### `domainOwner`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesUpdateRepositoryRepository.property.domainOwner"></a>

- *Type:* `string`

---

##### `externalConnections`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesUpdateRepositoryRepository.property.externalConnections"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactRepositoryExternalConnectionInfo`](#aws-cdk-sdk.codeartifact.CodeArtifactRepositoryExternalConnectionInfo)[]

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesUpdateRepositoryRepository.property.name"></a>

- *Type:* `string`

---

##### `upstreams`<sup>Required</sup> <a name="aws-cdk-sdk.codeartifact.CodeArtifactResponsesUpdateRepositoryRepository.property.upstreams"></a>

- *Type:* [`aws-cdk-sdk.codeartifact.CodeArtifactUpstreamRepositoryInfo`](#aws-cdk-sdk.codeartifact.CodeArtifactUpstreamRepositoryInfo)[]

---



