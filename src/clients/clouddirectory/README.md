# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### CloudDirectoryClient <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient"></a>

#### Initializer <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

new clouddirectory.CloudDirectoryClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `addFacetToObject` <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.addFacetToObject"></a>

```typescript
public addFacetToObject(input: CloudDirectoryAddFacetToObjectRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryAddFacetToObjectRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryAddFacetToObjectRequest)

---

##### `applySchema` <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.applySchema"></a>

```typescript
public applySchema(input: CloudDirectoryApplySchemaRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryApplySchemaRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryApplySchemaRequest)

---

##### `attachObject` <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.attachObject"></a>

```typescript
public attachObject(input: CloudDirectoryAttachObjectRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryAttachObjectRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryAttachObjectRequest)

---

##### `attachPolicy` <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.attachPolicy"></a>

```typescript
public attachPolicy(input: CloudDirectoryAttachPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryAttachPolicyRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryAttachPolicyRequest)

---

##### `attachToIndex` <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.attachToIndex"></a>

```typescript
public attachToIndex(input: CloudDirectoryAttachToIndexRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryAttachToIndexRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryAttachToIndexRequest)

---

##### `attachTypedLink` <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.attachTypedLink"></a>

```typescript
public attachTypedLink(input: CloudDirectoryAttachTypedLinkRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryAttachTypedLinkRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryAttachTypedLinkRequest)

---

##### `batchRead` <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.batchRead"></a>

```typescript
public batchRead(input: CloudDirectoryBatchReadRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchReadRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchReadRequest)

---

##### `batchWrite` <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.batchWrite"></a>

```typescript
public batchWrite(input: CloudDirectoryBatchWriteRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchWriteRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchWriteRequest)

---

##### `createDirectory` <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.createDirectory"></a>

```typescript
public createDirectory(input: CloudDirectoryCreateDirectoryRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryCreateDirectoryRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryCreateDirectoryRequest)

---

##### `createFacet` <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.createFacet"></a>

```typescript
public createFacet(input: CloudDirectoryCreateFacetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryCreateFacetRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryCreateFacetRequest)

---

##### `createIndex` <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.createIndex"></a>

```typescript
public createIndex(input: CloudDirectoryCreateIndexRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryCreateIndexRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryCreateIndexRequest)

---

##### `createObject` <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.createObject"></a>

```typescript
public createObject(input: CloudDirectoryCreateObjectRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryCreateObjectRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryCreateObjectRequest)

---

##### `createSchema` <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.createSchema"></a>

```typescript
public createSchema(input: CloudDirectoryCreateSchemaRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryCreateSchemaRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryCreateSchemaRequest)

---

##### `createTypedLinkFacet` <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.createTypedLinkFacet"></a>

```typescript
public createTypedLinkFacet(input: CloudDirectoryCreateTypedLinkFacetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryCreateTypedLinkFacetRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryCreateTypedLinkFacetRequest)

---

##### `deleteDirectory` <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.deleteDirectory"></a>

```typescript
public deleteDirectory(input: CloudDirectoryDeleteDirectoryRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryDeleteDirectoryRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryDeleteDirectoryRequest)

---

##### `deleteFacet` <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.deleteFacet"></a>

```typescript
public deleteFacet(input: CloudDirectoryDeleteFacetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryDeleteFacetRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryDeleteFacetRequest)

---

##### `deleteObject` <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.deleteObject"></a>

```typescript
public deleteObject(input: CloudDirectoryDeleteObjectRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryDeleteObjectRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryDeleteObjectRequest)

---

##### `deleteSchema` <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.deleteSchema"></a>

```typescript
public deleteSchema(input: CloudDirectoryDeleteSchemaRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryDeleteSchemaRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryDeleteSchemaRequest)

---

##### `deleteTypedLinkFacet` <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.deleteTypedLinkFacet"></a>

```typescript
public deleteTypedLinkFacet(input: CloudDirectoryDeleteTypedLinkFacetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryDeleteTypedLinkFacetRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryDeleteTypedLinkFacetRequest)

---

##### `detachFromIndex` <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.detachFromIndex"></a>

```typescript
public detachFromIndex(input: CloudDirectoryDetachFromIndexRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryDetachFromIndexRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryDetachFromIndexRequest)

---

##### `detachObject` <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.detachObject"></a>

```typescript
public detachObject(input: CloudDirectoryDetachObjectRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryDetachObjectRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryDetachObjectRequest)

---

##### `detachPolicy` <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.detachPolicy"></a>

```typescript
public detachPolicy(input: CloudDirectoryDetachPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryDetachPolicyRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryDetachPolicyRequest)

---

##### `detachTypedLink` <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.detachTypedLink"></a>

```typescript
public detachTypedLink(input: CloudDirectoryDetachTypedLinkRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryDetachTypedLinkRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryDetachTypedLinkRequest)

---

##### `disableDirectory` <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.disableDirectory"></a>

```typescript
public disableDirectory(input: CloudDirectoryDisableDirectoryRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryDisableDirectoryRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryDisableDirectoryRequest)

---

##### `enableDirectory` <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.enableDirectory"></a>

```typescript
public enableDirectory(input: CloudDirectoryEnableDirectoryRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryEnableDirectoryRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryEnableDirectoryRequest)

---

##### `fetchAppliedSchemaVersion` <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.fetchAppliedSchemaVersion"></a>

```typescript
public fetchAppliedSchemaVersion(input: CloudDirectoryGetAppliedSchemaVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryGetAppliedSchemaVersionRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryGetAppliedSchemaVersionRequest)

---

##### `fetchDirectory` <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.fetchDirectory"></a>

```typescript
public fetchDirectory(input: CloudDirectoryGetDirectoryRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryGetDirectoryRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryGetDirectoryRequest)

---

##### `fetchFacet` <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.fetchFacet"></a>

```typescript
public fetchFacet(input: CloudDirectoryGetFacetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryGetFacetRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryGetFacetRequest)

---

##### `fetchLinkAttributes` <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.fetchLinkAttributes"></a>

```typescript
public fetchLinkAttributes(input: CloudDirectoryGetLinkAttributesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryGetLinkAttributesRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryGetLinkAttributesRequest)

---

##### `fetchObjectAttributes` <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.fetchObjectAttributes"></a>

```typescript
public fetchObjectAttributes(input: CloudDirectoryGetObjectAttributesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryGetObjectAttributesRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryGetObjectAttributesRequest)

---

##### `fetchObjectInformation` <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.fetchObjectInformation"></a>

```typescript
public fetchObjectInformation(input: CloudDirectoryGetObjectInformationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryGetObjectInformationRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryGetObjectInformationRequest)

---

##### `fetchSchemaAsJson` <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.fetchSchemaAsJson"></a>

```typescript
public fetchSchemaAsJson(input: CloudDirectoryGetSchemaAsJsonRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryGetSchemaAsJsonRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryGetSchemaAsJsonRequest)

---

##### `fetchTypedLinkFacetInformation` <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.fetchTypedLinkFacetInformation"></a>

```typescript
public fetchTypedLinkFacetInformation(input: CloudDirectoryGetTypedLinkFacetInformationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryGetTypedLinkFacetInformationRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryGetTypedLinkFacetInformationRequest)

---

##### `listAppliedSchemaArns` <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.listAppliedSchemaArns"></a>

```typescript
public listAppliedSchemaArns(input: CloudDirectoryListAppliedSchemaArnsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryListAppliedSchemaArnsRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryListAppliedSchemaArnsRequest)

---

##### `listAttachedIndices` <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.listAttachedIndices"></a>

```typescript
public listAttachedIndices(input: CloudDirectoryListAttachedIndicesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryListAttachedIndicesRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryListAttachedIndicesRequest)

---

##### `listDevelopmentSchemaArns` <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.listDevelopmentSchemaArns"></a>

```typescript
public listDevelopmentSchemaArns(input: CloudDirectoryListDevelopmentSchemaArnsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryListDevelopmentSchemaArnsRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryListDevelopmentSchemaArnsRequest)

---

##### `listDirectories` <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.listDirectories"></a>

```typescript
public listDirectories(input: CloudDirectoryListDirectoriesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryListDirectoriesRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryListDirectoriesRequest)

---

##### `listFacetAttributes` <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.listFacetAttributes"></a>

```typescript
public listFacetAttributes(input: CloudDirectoryListFacetAttributesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryListFacetAttributesRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryListFacetAttributesRequest)

---

##### `listFacetNames` <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.listFacetNames"></a>

```typescript
public listFacetNames(input: CloudDirectoryListFacetNamesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryListFacetNamesRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryListFacetNamesRequest)

---

##### `listIncomingTypedLinks` <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.listIncomingTypedLinks"></a>

```typescript
public listIncomingTypedLinks(input: CloudDirectoryListIncomingTypedLinksRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryListIncomingTypedLinksRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryListIncomingTypedLinksRequest)

---

##### `listIndex` <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.listIndex"></a>

```typescript
public listIndex(input: CloudDirectoryListIndexRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryListIndexRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryListIndexRequest)

---

##### `listManagedSchemaArns` <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.listManagedSchemaArns"></a>

```typescript
public listManagedSchemaArns(input: CloudDirectoryListManagedSchemaArnsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryListManagedSchemaArnsRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryListManagedSchemaArnsRequest)

---

##### `listObjectAttributes` <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.listObjectAttributes"></a>

```typescript
public listObjectAttributes(input: CloudDirectoryListObjectAttributesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectAttributesRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectAttributesRequest)

---

##### `listObjectChildren` <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.listObjectChildren"></a>

```typescript
public listObjectChildren(input: CloudDirectoryListObjectChildrenRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectChildrenRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectChildrenRequest)

---

##### `listObjectParentPaths` <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.listObjectParentPaths"></a>

```typescript
public listObjectParentPaths(input: CloudDirectoryListObjectParentPathsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectParentPathsRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectParentPathsRequest)

---

##### `listObjectParents` <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.listObjectParents"></a>

```typescript
public listObjectParents(input: CloudDirectoryListObjectParentsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectParentsRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectParentsRequest)

---

##### `listObjectPolicies` <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.listObjectPolicies"></a>

```typescript
public listObjectPolicies(input: CloudDirectoryListObjectPoliciesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectPoliciesRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectPoliciesRequest)

---

##### `listOutgoingTypedLinks` <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.listOutgoingTypedLinks"></a>

```typescript
public listOutgoingTypedLinks(input: CloudDirectoryListOutgoingTypedLinksRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryListOutgoingTypedLinksRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryListOutgoingTypedLinksRequest)

---

##### `listPolicyAttachments` <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.listPolicyAttachments"></a>

```typescript
public listPolicyAttachments(input: CloudDirectoryListPolicyAttachmentsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryListPolicyAttachmentsRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryListPolicyAttachmentsRequest)

---

##### `listPublishedSchemaArns` <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.listPublishedSchemaArns"></a>

```typescript
public listPublishedSchemaArns(input: CloudDirectoryListPublishedSchemaArnsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryListPublishedSchemaArnsRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryListPublishedSchemaArnsRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: CloudDirectoryListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryListTagsForResourceRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryListTagsForResourceRequest)

---

##### `listTypedLinkFacetAttributes` <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.listTypedLinkFacetAttributes"></a>

```typescript
public listTypedLinkFacetAttributes(input: CloudDirectoryListTypedLinkFacetAttributesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryListTypedLinkFacetAttributesRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryListTypedLinkFacetAttributesRequest)

---

##### `listTypedLinkFacetNames` <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.listTypedLinkFacetNames"></a>

```typescript
public listTypedLinkFacetNames(input: CloudDirectoryListTypedLinkFacetNamesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryListTypedLinkFacetNamesRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryListTypedLinkFacetNamesRequest)

---

##### `lookupPolicy` <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.lookupPolicy"></a>

```typescript
public lookupPolicy(input: CloudDirectoryLookupPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryLookupPolicyRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryLookupPolicyRequest)

---

##### `publishSchema` <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.publishSchema"></a>

```typescript
public publishSchema(input: CloudDirectoryPublishSchemaRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryPublishSchemaRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryPublishSchemaRequest)

---

##### `putSchemaFromJson` <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.putSchemaFromJson"></a>

```typescript
public putSchemaFromJson(input: CloudDirectoryPutSchemaFromJsonRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryPutSchemaFromJsonRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryPutSchemaFromJsonRequest)

---

##### `removeFacetFromObject` <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.removeFacetFromObject"></a>

```typescript
public removeFacetFromObject(input: CloudDirectoryRemoveFacetFromObjectRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryRemoveFacetFromObjectRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryRemoveFacetFromObjectRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.tagResource"></a>

```typescript
public tagResource(input: CloudDirectoryTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryTagResourceRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.untagResource"></a>

```typescript
public untagResource(input: CloudDirectoryUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryUntagResourceRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryUntagResourceRequest)

---

##### `updateFacet` <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.updateFacet"></a>

```typescript
public updateFacet(input: CloudDirectoryUpdateFacetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryUpdateFacetRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryUpdateFacetRequest)

---

##### `updateLinkAttributes` <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.updateLinkAttributes"></a>

```typescript
public updateLinkAttributes(input: CloudDirectoryUpdateLinkAttributesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryUpdateLinkAttributesRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryUpdateLinkAttributesRequest)

---

##### `updateObjectAttributes` <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.updateObjectAttributes"></a>

```typescript
public updateObjectAttributes(input: CloudDirectoryUpdateObjectAttributesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryUpdateObjectAttributesRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryUpdateObjectAttributesRequest)

---

##### `updateSchema` <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.updateSchema"></a>

```typescript
public updateSchema(input: CloudDirectoryUpdateSchemaRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryUpdateSchemaRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryUpdateSchemaRequest)

---

##### `updateTypedLinkFacet` <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.updateTypedLinkFacet"></a>

```typescript
public updateTypedLinkFacet(input: CloudDirectoryUpdateTypedLinkFacetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryUpdateTypedLinkFacetRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryUpdateTypedLinkFacetRequest)

---

##### `upgradeAppliedSchema` <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.upgradeAppliedSchema"></a>

```typescript
public upgradeAppliedSchema(input: CloudDirectoryUpgradeAppliedSchemaRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryUpgradeAppliedSchemaRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryUpgradeAppliedSchemaRequest)

---

##### `upgradePublishedSchema` <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.upgradePublishedSchema"></a>

```typescript
public upgradePublishedSchema(input: CloudDirectoryUpgradePublishedSchemaRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryUpgradePublishedSchemaRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryUpgradePublishedSchemaRequest)

---




## Structs <a name="Structs"></a>

### CloudDirectoryAddFacetToObjectRequest <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryAddFacetToObjectRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryAddFacetToObjectRequest: clouddirectory.CloudDirectoryAddFacetToObjectRequest = { ... }
```

##### `directoryArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryAddFacetToObjectRequest.property.directoryArn"></a>

- *Type:* `string`

---

##### `objectReference`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryAddFacetToObjectRequest.property.objectReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference)

---

##### `schemaFacet`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryAddFacetToObjectRequest.property.schemaFacet"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectorySchemaFacet`](#aws-cdk-sdk.clouddirectory.CloudDirectorySchemaFacet)

---

##### `objectAttributeList`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryAddFacetToObjectRequest.property.objectAttributeList"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryAttributeKeyAndValue`](#aws-cdk-sdk.clouddirectory.CloudDirectoryAttributeKeyAndValue)[]

---

### CloudDirectoryAddFacetToObjectResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryAddFacetToObjectResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryAddFacetToObjectResponse: clouddirectory.CloudDirectoryAddFacetToObjectResponse = { ... }
```

### CloudDirectoryApplySchemaRequest <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryApplySchemaRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryApplySchemaRequest: clouddirectory.CloudDirectoryApplySchemaRequest = { ... }
```

##### `directoryArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryApplySchemaRequest.property.directoryArn"></a>

- *Type:* `string`

---

##### `publishedSchemaArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryApplySchemaRequest.property.publishedSchemaArn"></a>

- *Type:* `string`

---

### CloudDirectoryApplySchemaResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryApplySchemaResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryApplySchemaResponse: clouddirectory.CloudDirectoryApplySchemaResponse = { ... }
```

##### `appliedSchemaArn`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryApplySchemaResponse.property.appliedSchemaArn"></a>

- *Type:* `string`

---

##### `directoryArn`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryApplySchemaResponse.property.directoryArn"></a>

- *Type:* `string`

---

### CloudDirectoryAttachObjectRequest <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryAttachObjectRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryAttachObjectRequest: clouddirectory.CloudDirectoryAttachObjectRequest = { ... }
```

##### `childReference`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryAttachObjectRequest.property.childReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference)

---

##### `directoryArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryAttachObjectRequest.property.directoryArn"></a>

- *Type:* `string`

---

##### `linkName`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryAttachObjectRequest.property.linkName"></a>

- *Type:* `string`

---

##### `parentReference`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryAttachObjectRequest.property.parentReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference)

---

### CloudDirectoryAttachObjectResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryAttachObjectResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryAttachObjectResponse: clouddirectory.CloudDirectoryAttachObjectResponse = { ... }
```

##### `attachedObjectIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryAttachObjectResponse.property.attachedObjectIdentifier"></a>

- *Type:* `string`

---

### CloudDirectoryAttachPolicyRequest <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryAttachPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryAttachPolicyRequest: clouddirectory.CloudDirectoryAttachPolicyRequest = { ... }
```

##### `directoryArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryAttachPolicyRequest.property.directoryArn"></a>

- *Type:* `string`

---

##### `objectReference`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryAttachPolicyRequest.property.objectReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference)

---

##### `policyReference`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryAttachPolicyRequest.property.policyReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference)

---

### CloudDirectoryAttachPolicyResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryAttachPolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryAttachPolicyResponse: clouddirectory.CloudDirectoryAttachPolicyResponse = { ... }
```

### CloudDirectoryAttachToIndexRequest <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryAttachToIndexRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryAttachToIndexRequest: clouddirectory.CloudDirectoryAttachToIndexRequest = { ... }
```

##### `directoryArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryAttachToIndexRequest.property.directoryArn"></a>

- *Type:* `string`

---

##### `indexReference`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryAttachToIndexRequest.property.indexReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference)

---

##### `targetReference`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryAttachToIndexRequest.property.targetReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference)

---

### CloudDirectoryAttachToIndexResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryAttachToIndexResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryAttachToIndexResponse: clouddirectory.CloudDirectoryAttachToIndexResponse = { ... }
```

##### `attachedObjectIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryAttachToIndexResponse.property.attachedObjectIdentifier"></a>

- *Type:* `string`

---

### CloudDirectoryAttachTypedLinkRequest <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryAttachTypedLinkRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryAttachTypedLinkRequest: clouddirectory.CloudDirectoryAttachTypedLinkRequest = { ... }
```

##### `attributes`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryAttachTypedLinkRequest.property.attributes"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryAttributeNameAndValue`](#aws-cdk-sdk.clouddirectory.CloudDirectoryAttributeNameAndValue)[]

---

##### `directoryArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryAttachTypedLinkRequest.property.directoryArn"></a>

- *Type:* `string`

---

##### `sourceObjectReference`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryAttachTypedLinkRequest.property.sourceObjectReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference)

---

##### `targetObjectReference`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryAttachTypedLinkRequest.property.targetObjectReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference)

---

##### `typedLinkFacet`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryAttachTypedLinkRequest.property.typedLinkFacet"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkSchemaAndFacetName`](#aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkSchemaAndFacetName)

---

### CloudDirectoryAttachTypedLinkResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryAttachTypedLinkResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryAttachTypedLinkResponse: clouddirectory.CloudDirectoryAttachTypedLinkResponse = { ... }
```

##### `typedLinkSpecifier`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryAttachTypedLinkResponse.property.typedLinkSpecifier"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkSpecifier`](#aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkSpecifier)

---

### CloudDirectoryAttributeKey <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryAttributeKey"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryAttributeKey: clouddirectory.CloudDirectoryAttributeKey = { ... }
```

##### `facetName`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryAttributeKey.property.facetName"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryAttributeKey.property.name"></a>

- *Type:* `string`

---

##### `schemaArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryAttributeKey.property.schemaArn"></a>

- *Type:* `string`

---

### CloudDirectoryAttributeKeyAndValue <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryAttributeKeyAndValue"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryAttributeKeyAndValue: clouddirectory.CloudDirectoryAttributeKeyAndValue = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryAttributeKeyAndValue.property.key"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryAttributeKey`](#aws-cdk-sdk.clouddirectory.CloudDirectoryAttributeKey)

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryAttributeKeyAndValue.property.value"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryTypedAttributeValue`](#aws-cdk-sdk.clouddirectory.CloudDirectoryTypedAttributeValue)

---

### CloudDirectoryAttributeNameAndValue <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryAttributeNameAndValue"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryAttributeNameAndValue: clouddirectory.CloudDirectoryAttributeNameAndValue = { ... }
```

##### `attributeName`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryAttributeNameAndValue.property.attributeName"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryAttributeNameAndValue.property.value"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryTypedAttributeValue`](#aws-cdk-sdk.clouddirectory.CloudDirectoryTypedAttributeValue)

---

### CloudDirectoryBatchAddFacetToObject <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchAddFacetToObject"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchAddFacetToObject: clouddirectory.CloudDirectoryBatchAddFacetToObject = { ... }
```

##### `objectAttributeList`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchAddFacetToObject.property.objectAttributeList"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryAttributeKeyAndValue`](#aws-cdk-sdk.clouddirectory.CloudDirectoryAttributeKeyAndValue)[]

---

##### `objectReference`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchAddFacetToObject.property.objectReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference)

---

##### `schemaFacet`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchAddFacetToObject.property.schemaFacet"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectorySchemaFacet`](#aws-cdk-sdk.clouddirectory.CloudDirectorySchemaFacet)

---

### CloudDirectoryBatchAddFacetToObjectResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchAddFacetToObjectResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchAddFacetToObjectResponse: clouddirectory.CloudDirectoryBatchAddFacetToObjectResponse = { ... }
```

### CloudDirectoryBatchAttachObject <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchAttachObject"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchAttachObject: clouddirectory.CloudDirectoryBatchAttachObject = { ... }
```

##### `childReference`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchAttachObject.property.childReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference)

---

##### `linkName`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchAttachObject.property.linkName"></a>

- *Type:* `string`

---

##### `parentReference`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchAttachObject.property.parentReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference)

---

### CloudDirectoryBatchAttachObjectResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchAttachObjectResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchAttachObjectResponse: clouddirectory.CloudDirectoryBatchAttachObjectResponse = { ... }
```

##### `attachedObjectIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchAttachObjectResponse.property.attachedObjectIdentifier"></a>

- *Type:* `string`

---

### CloudDirectoryBatchAttachPolicy <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchAttachPolicy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchAttachPolicy: clouddirectory.CloudDirectoryBatchAttachPolicy = { ... }
```

##### `objectReference`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchAttachPolicy.property.objectReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference)

---

##### `policyReference`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchAttachPolicy.property.policyReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference)

---

### CloudDirectoryBatchAttachPolicyResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchAttachPolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchAttachPolicyResponse: clouddirectory.CloudDirectoryBatchAttachPolicyResponse = { ... }
```

### CloudDirectoryBatchAttachToIndex <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchAttachToIndex"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchAttachToIndex: clouddirectory.CloudDirectoryBatchAttachToIndex = { ... }
```

##### `indexReference`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchAttachToIndex.property.indexReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference)

---

##### `targetReference`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchAttachToIndex.property.targetReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference)

---

### CloudDirectoryBatchAttachToIndexResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchAttachToIndexResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchAttachToIndexResponse: clouddirectory.CloudDirectoryBatchAttachToIndexResponse = { ... }
```

##### `attachedObjectIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchAttachToIndexResponse.property.attachedObjectIdentifier"></a>

- *Type:* `string`

---

### CloudDirectoryBatchAttachTypedLink <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchAttachTypedLink"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchAttachTypedLink: clouddirectory.CloudDirectoryBatchAttachTypedLink = { ... }
```

##### `attributes`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchAttachTypedLink.property.attributes"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryAttributeNameAndValue`](#aws-cdk-sdk.clouddirectory.CloudDirectoryAttributeNameAndValue)[]

---

##### `sourceObjectReference`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchAttachTypedLink.property.sourceObjectReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference)

---

##### `targetObjectReference`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchAttachTypedLink.property.targetObjectReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference)

---

##### `typedLinkFacet`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchAttachTypedLink.property.typedLinkFacet"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkSchemaAndFacetName`](#aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkSchemaAndFacetName)

---

### CloudDirectoryBatchAttachTypedLinkResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchAttachTypedLinkResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchAttachTypedLinkResponse: clouddirectory.CloudDirectoryBatchAttachTypedLinkResponse = { ... }
```

##### `typedLinkSpecifier`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchAttachTypedLinkResponse.property.typedLinkSpecifier"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkSpecifier`](#aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkSpecifier)

---

### CloudDirectoryBatchCreateIndex <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchCreateIndex"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchCreateIndex: clouddirectory.CloudDirectoryBatchCreateIndex = { ... }
```

##### `isUnique`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchCreateIndex.property.isUnique"></a>

- *Type:* `boolean`

---

##### `orderedIndexedAttributeList`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchCreateIndex.property.orderedIndexedAttributeList"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryAttributeKey`](#aws-cdk-sdk.clouddirectory.CloudDirectoryAttributeKey)[]

---

##### `batchReferenceName`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchCreateIndex.property.batchReferenceName"></a>

- *Type:* `string`

---

##### `linkName`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchCreateIndex.property.linkName"></a>

- *Type:* `string`

---

##### `parentReference`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchCreateIndex.property.parentReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference)

---

### CloudDirectoryBatchCreateIndexResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchCreateIndexResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchCreateIndexResponse: clouddirectory.CloudDirectoryBatchCreateIndexResponse = { ... }
```

##### `objectIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchCreateIndexResponse.property.objectIdentifier"></a>

- *Type:* `string`

---

### CloudDirectoryBatchCreateObject <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchCreateObject"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchCreateObject: clouddirectory.CloudDirectoryBatchCreateObject = { ... }
```

##### `objectAttributeList`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchCreateObject.property.objectAttributeList"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryAttributeKeyAndValue`](#aws-cdk-sdk.clouddirectory.CloudDirectoryAttributeKeyAndValue)[]

---

##### `schemaFacet`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchCreateObject.property.schemaFacet"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectorySchemaFacet`](#aws-cdk-sdk.clouddirectory.CloudDirectorySchemaFacet)[]

---

##### `batchReferenceName`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchCreateObject.property.batchReferenceName"></a>

- *Type:* `string`

---

##### `linkName`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchCreateObject.property.linkName"></a>

- *Type:* `string`

---

##### `parentReference`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchCreateObject.property.parentReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference)

---

### CloudDirectoryBatchCreateObjectResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchCreateObjectResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchCreateObjectResponse: clouddirectory.CloudDirectoryBatchCreateObjectResponse = { ... }
```

##### `objectIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchCreateObjectResponse.property.objectIdentifier"></a>

- *Type:* `string`

---

### CloudDirectoryBatchDeleteObject <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchDeleteObject"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchDeleteObject: clouddirectory.CloudDirectoryBatchDeleteObject = { ... }
```

##### `objectReference`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchDeleteObject.property.objectReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference)

---

### CloudDirectoryBatchDeleteObjectResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchDeleteObjectResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchDeleteObjectResponse: clouddirectory.CloudDirectoryBatchDeleteObjectResponse = { ... }
```

### CloudDirectoryBatchDetachFromIndex <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchDetachFromIndex"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchDetachFromIndex: clouddirectory.CloudDirectoryBatchDetachFromIndex = { ... }
```

##### `indexReference`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchDetachFromIndex.property.indexReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference)

---

##### `targetReference`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchDetachFromIndex.property.targetReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference)

---

### CloudDirectoryBatchDetachFromIndexResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchDetachFromIndexResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchDetachFromIndexResponse: clouddirectory.CloudDirectoryBatchDetachFromIndexResponse = { ... }
```

##### `detachedObjectIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchDetachFromIndexResponse.property.detachedObjectIdentifier"></a>

- *Type:* `string`

---

### CloudDirectoryBatchDetachObject <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchDetachObject"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchDetachObject: clouddirectory.CloudDirectoryBatchDetachObject = { ... }
```

##### `linkName`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchDetachObject.property.linkName"></a>

- *Type:* `string`

---

##### `parentReference`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchDetachObject.property.parentReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference)

---

##### `batchReferenceName`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchDetachObject.property.batchReferenceName"></a>

- *Type:* `string`

---

### CloudDirectoryBatchDetachObjectResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchDetachObjectResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchDetachObjectResponse: clouddirectory.CloudDirectoryBatchDetachObjectResponse = { ... }
```

##### `detachedObjectIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchDetachObjectResponse.property.detachedObjectIdentifier"></a>

- *Type:* `string`

---

### CloudDirectoryBatchDetachPolicy <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchDetachPolicy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchDetachPolicy: clouddirectory.CloudDirectoryBatchDetachPolicy = { ... }
```

##### `objectReference`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchDetachPolicy.property.objectReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference)

---

##### `policyReference`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchDetachPolicy.property.policyReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference)

---

### CloudDirectoryBatchDetachPolicyResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchDetachPolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchDetachPolicyResponse: clouddirectory.CloudDirectoryBatchDetachPolicyResponse = { ... }
```

### CloudDirectoryBatchDetachTypedLink <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchDetachTypedLink"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchDetachTypedLink: clouddirectory.CloudDirectoryBatchDetachTypedLink = { ... }
```

##### `typedLinkSpecifier`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchDetachTypedLink.property.typedLinkSpecifier"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkSpecifier`](#aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkSpecifier)

---

### CloudDirectoryBatchDetachTypedLinkResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchDetachTypedLinkResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchDetachTypedLinkResponse: clouddirectory.CloudDirectoryBatchDetachTypedLinkResponse = { ... }
```

### CloudDirectoryBatchGetLinkAttributes <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchGetLinkAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchGetLinkAttributes: clouddirectory.CloudDirectoryBatchGetLinkAttributes = { ... }
```

##### `attributeNames`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchGetLinkAttributes.property.attributeNames"></a>

- *Type:* `string`[]

---

##### `typedLinkSpecifier`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchGetLinkAttributes.property.typedLinkSpecifier"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkSpecifier`](#aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkSpecifier)

---

### CloudDirectoryBatchGetLinkAttributesResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchGetLinkAttributesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchGetLinkAttributesResponse: clouddirectory.CloudDirectoryBatchGetLinkAttributesResponse = { ... }
```

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchGetLinkAttributesResponse.property.attributes"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryAttributeKeyAndValue`](#aws-cdk-sdk.clouddirectory.CloudDirectoryAttributeKeyAndValue)[]

---

### CloudDirectoryBatchGetObjectAttributes <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchGetObjectAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchGetObjectAttributes: clouddirectory.CloudDirectoryBatchGetObjectAttributes = { ... }
```

##### `attributeNames`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchGetObjectAttributes.property.attributeNames"></a>

- *Type:* `string`[]

---

##### `objectReference`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchGetObjectAttributes.property.objectReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference)

---

##### `schemaFacet`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchGetObjectAttributes.property.schemaFacet"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectorySchemaFacet`](#aws-cdk-sdk.clouddirectory.CloudDirectorySchemaFacet)

---

### CloudDirectoryBatchGetObjectAttributesResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchGetObjectAttributesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchGetObjectAttributesResponse: clouddirectory.CloudDirectoryBatchGetObjectAttributesResponse = { ... }
```

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchGetObjectAttributesResponse.property.attributes"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryAttributeKeyAndValue`](#aws-cdk-sdk.clouddirectory.CloudDirectoryAttributeKeyAndValue)[]

---

### CloudDirectoryBatchGetObjectInformation <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchGetObjectInformation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchGetObjectInformation: clouddirectory.CloudDirectoryBatchGetObjectInformation = { ... }
```

##### `objectReference`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchGetObjectInformation.property.objectReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference)

---

### CloudDirectoryBatchGetObjectInformationResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchGetObjectInformationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchGetObjectInformationResponse: clouddirectory.CloudDirectoryBatchGetObjectInformationResponse = { ... }
```

##### `objectIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchGetObjectInformationResponse.property.objectIdentifier"></a>

- *Type:* `string`

---

##### `schemaFacets`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchGetObjectInformationResponse.property.schemaFacets"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectorySchemaFacet`](#aws-cdk-sdk.clouddirectory.CloudDirectorySchemaFacet)[]

---

### CloudDirectoryBatchListAttachedIndices <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListAttachedIndices"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchListAttachedIndices: clouddirectory.CloudDirectoryBatchListAttachedIndices = { ... }
```

##### `targetReference`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListAttachedIndices.property.targetReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference)

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListAttachedIndices.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListAttachedIndices.property.nextToken"></a>

- *Type:* `string`

---

### CloudDirectoryBatchListAttachedIndicesResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListAttachedIndicesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchListAttachedIndicesResponse: clouddirectory.CloudDirectoryBatchListAttachedIndicesResponse = { ... }
```

##### `indexAttachments`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListAttachedIndicesResponse.property.indexAttachments"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryIndexAttachment`](#aws-cdk-sdk.clouddirectory.CloudDirectoryIndexAttachment)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListAttachedIndicesResponse.property.nextToken"></a>

- *Type:* `string`

---

### CloudDirectoryBatchListIncomingTypedLinks <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListIncomingTypedLinks"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchListIncomingTypedLinks: clouddirectory.CloudDirectoryBatchListIncomingTypedLinks = { ... }
```

##### `objectReference`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListIncomingTypedLinks.property.objectReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference)

---

##### `filterAttributeRanges`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListIncomingTypedLinks.property.filterAttributeRanges"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkAttributeRange`](#aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkAttributeRange)[]

---

##### `filterTypedLink`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListIncomingTypedLinks.property.filterTypedLink"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkSchemaAndFacetName`](#aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkSchemaAndFacetName)

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListIncomingTypedLinks.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListIncomingTypedLinks.property.nextToken"></a>

- *Type:* `string`

---

### CloudDirectoryBatchListIncomingTypedLinksResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListIncomingTypedLinksResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchListIncomingTypedLinksResponse: clouddirectory.CloudDirectoryBatchListIncomingTypedLinksResponse = { ... }
```

##### `linkSpecifiers`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListIncomingTypedLinksResponse.property.linkSpecifiers"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkSpecifier`](#aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkSpecifier)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListIncomingTypedLinksResponse.property.nextToken"></a>

- *Type:* `string`

---

### CloudDirectoryBatchListIndex <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListIndex"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchListIndex: clouddirectory.CloudDirectoryBatchListIndex = { ... }
```

##### `indexReference`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListIndex.property.indexReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference)

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListIndex.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListIndex.property.nextToken"></a>

- *Type:* `string`

---

##### `rangesOnIndexedValues`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListIndex.property.rangesOnIndexedValues"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectAttributeRange`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectAttributeRange)[]

---

### CloudDirectoryBatchListIndexResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListIndexResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchListIndexResponse: clouddirectory.CloudDirectoryBatchListIndexResponse = { ... }
```

##### `indexAttachments`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListIndexResponse.property.indexAttachments"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryIndexAttachment`](#aws-cdk-sdk.clouddirectory.CloudDirectoryIndexAttachment)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListIndexResponse.property.nextToken"></a>

- *Type:* `string`

---

### CloudDirectoryBatchListObjectAttributes <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListObjectAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchListObjectAttributes: clouddirectory.CloudDirectoryBatchListObjectAttributes = { ... }
```

##### `objectReference`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListObjectAttributes.property.objectReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference)

---

##### `facetFilter`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListObjectAttributes.property.facetFilter"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectorySchemaFacet`](#aws-cdk-sdk.clouddirectory.CloudDirectorySchemaFacet)

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListObjectAttributes.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListObjectAttributes.property.nextToken"></a>

- *Type:* `string`

---

### CloudDirectoryBatchListObjectAttributesResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListObjectAttributesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchListObjectAttributesResponse: clouddirectory.CloudDirectoryBatchListObjectAttributesResponse = { ... }
```

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListObjectAttributesResponse.property.attributes"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryAttributeKeyAndValue`](#aws-cdk-sdk.clouddirectory.CloudDirectoryAttributeKeyAndValue)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListObjectAttributesResponse.property.nextToken"></a>

- *Type:* `string`

---

### CloudDirectoryBatchListObjectChildren <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListObjectChildren"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchListObjectChildren: clouddirectory.CloudDirectoryBatchListObjectChildren = { ... }
```

##### `objectReference`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListObjectChildren.property.objectReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference)

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListObjectChildren.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListObjectChildren.property.nextToken"></a>

- *Type:* `string`

---

### CloudDirectoryBatchListObjectChildrenResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListObjectChildrenResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchListObjectChildrenResponse: clouddirectory.CloudDirectoryBatchListObjectChildrenResponse = { ... }
```

##### `children`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListObjectChildrenResponse.property.children"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListObjectChildrenResponse.property.nextToken"></a>

- *Type:* `string`

---

### CloudDirectoryBatchListObjectParentPaths <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListObjectParentPaths"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchListObjectParentPaths: clouddirectory.CloudDirectoryBatchListObjectParentPaths = { ... }
```

##### `objectReference`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListObjectParentPaths.property.objectReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference)

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListObjectParentPaths.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListObjectParentPaths.property.nextToken"></a>

- *Type:* `string`

---

### CloudDirectoryBatchListObjectParentPathsResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListObjectParentPathsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchListObjectParentPathsResponse: clouddirectory.CloudDirectoryBatchListObjectParentPathsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListObjectParentPathsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `pathToObjectIdentifiersList`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListObjectParentPathsResponse.property.pathToObjectIdentifiersList"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryPathToObjectIdentifiers`](#aws-cdk-sdk.clouddirectory.CloudDirectoryPathToObjectIdentifiers)[]

---

### CloudDirectoryBatchListObjectParents <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListObjectParents"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchListObjectParents: clouddirectory.CloudDirectoryBatchListObjectParents = { ... }
```

##### `objectReference`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListObjectParents.property.objectReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference)

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListObjectParents.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListObjectParents.property.nextToken"></a>

- *Type:* `string`

---

### CloudDirectoryBatchListObjectParentsResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListObjectParentsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchListObjectParentsResponse: clouddirectory.CloudDirectoryBatchListObjectParentsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListObjectParentsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `parentLinks`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListObjectParentsResponse.property.parentLinks"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectIdentifierAndLinkNameTuple`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectIdentifierAndLinkNameTuple)[]

---

### CloudDirectoryBatchListObjectPolicies <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListObjectPolicies"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchListObjectPolicies: clouddirectory.CloudDirectoryBatchListObjectPolicies = { ... }
```

##### `objectReference`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListObjectPolicies.property.objectReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference)

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListObjectPolicies.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListObjectPolicies.property.nextToken"></a>

- *Type:* `string`

---

### CloudDirectoryBatchListObjectPoliciesResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListObjectPoliciesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchListObjectPoliciesResponse: clouddirectory.CloudDirectoryBatchListObjectPoliciesResponse = { ... }
```

##### `attachedPolicyIds`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListObjectPoliciesResponse.property.attachedPolicyIds"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListObjectPoliciesResponse.property.nextToken"></a>

- *Type:* `string`

---

### CloudDirectoryBatchListOutgoingTypedLinks <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListOutgoingTypedLinks"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchListOutgoingTypedLinks: clouddirectory.CloudDirectoryBatchListOutgoingTypedLinks = { ... }
```

##### `objectReference`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListOutgoingTypedLinks.property.objectReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference)

---

##### `filterAttributeRanges`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListOutgoingTypedLinks.property.filterAttributeRanges"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkAttributeRange`](#aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkAttributeRange)[]

---

##### `filterTypedLink`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListOutgoingTypedLinks.property.filterTypedLink"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkSchemaAndFacetName`](#aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkSchemaAndFacetName)

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListOutgoingTypedLinks.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListOutgoingTypedLinks.property.nextToken"></a>

- *Type:* `string`

---

### CloudDirectoryBatchListOutgoingTypedLinksResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListOutgoingTypedLinksResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchListOutgoingTypedLinksResponse: clouddirectory.CloudDirectoryBatchListOutgoingTypedLinksResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListOutgoingTypedLinksResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `typedLinkSpecifiers`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListOutgoingTypedLinksResponse.property.typedLinkSpecifiers"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkSpecifier`](#aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkSpecifier)[]

---

### CloudDirectoryBatchListPolicyAttachments <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListPolicyAttachments"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchListPolicyAttachments: clouddirectory.CloudDirectoryBatchListPolicyAttachments = { ... }
```

##### `policyReference`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListPolicyAttachments.property.policyReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference)

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListPolicyAttachments.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListPolicyAttachments.property.nextToken"></a>

- *Type:* `string`

---

### CloudDirectoryBatchListPolicyAttachmentsResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListPolicyAttachmentsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchListPolicyAttachmentsResponse: clouddirectory.CloudDirectoryBatchListPolicyAttachmentsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListPolicyAttachmentsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `objectIdentifiers`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListPolicyAttachmentsResponse.property.objectIdentifiers"></a>

- *Type:* `string`[]

---

### CloudDirectoryBatchLookupPolicy <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchLookupPolicy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchLookupPolicy: clouddirectory.CloudDirectoryBatchLookupPolicy = { ... }
```

##### `objectReference`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchLookupPolicy.property.objectReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference)

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchLookupPolicy.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchLookupPolicy.property.nextToken"></a>

- *Type:* `string`

---

### CloudDirectoryBatchLookupPolicyResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchLookupPolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchLookupPolicyResponse: clouddirectory.CloudDirectoryBatchLookupPolicyResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchLookupPolicyResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `policyToPathList`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchLookupPolicyResponse.property.policyToPathList"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryPolicyToPath`](#aws-cdk-sdk.clouddirectory.CloudDirectoryPolicyToPath)[]

---

### CloudDirectoryBatchReadException <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchReadException"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchReadException: clouddirectory.CloudDirectoryBatchReadException = { ... }
```

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchReadException.property.message"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchReadException.property.type"></a>

- *Type:* `string`

---

### CloudDirectoryBatchReadOperation <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchReadOperation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchReadOperation: clouddirectory.CloudDirectoryBatchReadOperation = { ... }
```

##### `fetchLinkAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchReadOperation.property.fetchLinkAttributes"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchGetLinkAttributes`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchGetLinkAttributes)

---

##### `fetchObjectAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchReadOperation.property.fetchObjectAttributes"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchGetObjectAttributes`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchGetObjectAttributes)

---

##### `fetchObjectInformation`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchReadOperation.property.fetchObjectInformation"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchGetObjectInformation`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchGetObjectInformation)

---

##### `listAttachedIndices`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchReadOperation.property.listAttachedIndices"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListAttachedIndices`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListAttachedIndices)

---

##### `listIncomingTypedLinks`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchReadOperation.property.listIncomingTypedLinks"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListIncomingTypedLinks`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListIncomingTypedLinks)

---

##### `listIndex`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchReadOperation.property.listIndex"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListIndex`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListIndex)

---

##### `listObjectAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchReadOperation.property.listObjectAttributes"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListObjectAttributes`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListObjectAttributes)

---

##### `listObjectChildren`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchReadOperation.property.listObjectChildren"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListObjectChildren`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListObjectChildren)

---

##### `listObjectParentPaths`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchReadOperation.property.listObjectParentPaths"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListObjectParentPaths`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListObjectParentPaths)

---

##### `listObjectParents`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchReadOperation.property.listObjectParents"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListObjectParents`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListObjectParents)

---

##### `listObjectPolicies`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchReadOperation.property.listObjectPolicies"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListObjectPolicies`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListObjectPolicies)

---

##### `listOutgoingTypedLinks`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchReadOperation.property.listOutgoingTypedLinks"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListOutgoingTypedLinks`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListOutgoingTypedLinks)

---

##### `listPolicyAttachments`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchReadOperation.property.listPolicyAttachments"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListPolicyAttachments`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListPolicyAttachments)

---

##### `lookupPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchReadOperation.property.lookupPolicy"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchLookupPolicy`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchLookupPolicy)

---

### CloudDirectoryBatchReadOperationResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchReadOperationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchReadOperationResponse: clouddirectory.CloudDirectoryBatchReadOperationResponse = { ... }
```

##### `exceptionResponse`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchReadOperationResponse.property.exceptionResponse"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchReadException`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchReadException)

---

##### `successfulResponse`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchReadOperationResponse.property.successfulResponse"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchReadSuccessfulResponse`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchReadSuccessfulResponse)

---

### CloudDirectoryBatchReadRequest <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchReadRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchReadRequest: clouddirectory.CloudDirectoryBatchReadRequest = { ... }
```

##### `directoryArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchReadRequest.property.directoryArn"></a>

- *Type:* `string`

---

##### `operations`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchReadRequest.property.operations"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchReadOperation`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchReadOperation)[]

---

##### `consistencyLevel`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchReadRequest.property.consistencyLevel"></a>

- *Type:* `string`

---

### CloudDirectoryBatchReadResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchReadResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchReadResponse: clouddirectory.CloudDirectoryBatchReadResponse = { ... }
```

##### `responses`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchReadResponse.property.responses"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchReadOperationResponse`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchReadOperationResponse)[]

---

### CloudDirectoryBatchReadSuccessfulResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchReadSuccessfulResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchReadSuccessfulResponse: clouddirectory.CloudDirectoryBatchReadSuccessfulResponse = { ... }
```

##### `fetchLinkAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchReadSuccessfulResponse.property.fetchLinkAttributes"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchGetLinkAttributesResponse`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchGetLinkAttributesResponse)

---

##### `fetchObjectAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchReadSuccessfulResponse.property.fetchObjectAttributes"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchGetObjectAttributesResponse`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchGetObjectAttributesResponse)

---

##### `fetchObjectInformation`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchReadSuccessfulResponse.property.fetchObjectInformation"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchGetObjectInformationResponse`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchGetObjectInformationResponse)

---

##### `listAttachedIndices`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchReadSuccessfulResponse.property.listAttachedIndices"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListAttachedIndicesResponse`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListAttachedIndicesResponse)

---

##### `listIncomingTypedLinks`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchReadSuccessfulResponse.property.listIncomingTypedLinks"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListIncomingTypedLinksResponse`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListIncomingTypedLinksResponse)

---

##### `listIndex`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchReadSuccessfulResponse.property.listIndex"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListIndexResponse`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListIndexResponse)

---

##### `listObjectAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchReadSuccessfulResponse.property.listObjectAttributes"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListObjectAttributesResponse`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListObjectAttributesResponse)

---

##### `listObjectChildren`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchReadSuccessfulResponse.property.listObjectChildren"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListObjectChildrenResponse`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListObjectChildrenResponse)

---

##### `listObjectParentPaths`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchReadSuccessfulResponse.property.listObjectParentPaths"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListObjectParentPathsResponse`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListObjectParentPathsResponse)

---

##### `listObjectParents`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchReadSuccessfulResponse.property.listObjectParents"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListObjectParentsResponse`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListObjectParentsResponse)

---

##### `listObjectPolicies`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchReadSuccessfulResponse.property.listObjectPolicies"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListObjectPoliciesResponse`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListObjectPoliciesResponse)

---

##### `listOutgoingTypedLinks`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchReadSuccessfulResponse.property.listOutgoingTypedLinks"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListOutgoingTypedLinksResponse`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListOutgoingTypedLinksResponse)

---

##### `listPolicyAttachments`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchReadSuccessfulResponse.property.listPolicyAttachments"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListPolicyAttachmentsResponse`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchListPolicyAttachmentsResponse)

---

##### `lookupPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchReadSuccessfulResponse.property.lookupPolicy"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchLookupPolicyResponse`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchLookupPolicyResponse)

---

### CloudDirectoryBatchRemoveFacetFromObject <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchRemoveFacetFromObject"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchRemoveFacetFromObject: clouddirectory.CloudDirectoryBatchRemoveFacetFromObject = { ... }
```

##### `objectReference`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchRemoveFacetFromObject.property.objectReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference)

---

##### `schemaFacet`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchRemoveFacetFromObject.property.schemaFacet"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectorySchemaFacet`](#aws-cdk-sdk.clouddirectory.CloudDirectorySchemaFacet)

---

### CloudDirectoryBatchRemoveFacetFromObjectResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchRemoveFacetFromObjectResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchRemoveFacetFromObjectResponse: clouddirectory.CloudDirectoryBatchRemoveFacetFromObjectResponse = { ... }
```

### CloudDirectoryBatchUpdateLinkAttributes <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchUpdateLinkAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchUpdateLinkAttributes: clouddirectory.CloudDirectoryBatchUpdateLinkAttributes = { ... }
```

##### `attributeUpdates`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchUpdateLinkAttributes.property.attributeUpdates"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryLinkAttributeUpdate`](#aws-cdk-sdk.clouddirectory.CloudDirectoryLinkAttributeUpdate)[]

---

##### `typedLinkSpecifier`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchUpdateLinkAttributes.property.typedLinkSpecifier"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkSpecifier`](#aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkSpecifier)

---

### CloudDirectoryBatchUpdateLinkAttributesResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchUpdateLinkAttributesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchUpdateLinkAttributesResponse: clouddirectory.CloudDirectoryBatchUpdateLinkAttributesResponse = { ... }
```

### CloudDirectoryBatchUpdateObjectAttributes <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchUpdateObjectAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchUpdateObjectAttributes: clouddirectory.CloudDirectoryBatchUpdateObjectAttributes = { ... }
```

##### `attributeUpdates`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchUpdateObjectAttributes.property.attributeUpdates"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectAttributeUpdate`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectAttributeUpdate)[]

---

##### `objectReference`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchUpdateObjectAttributes.property.objectReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference)

---

### CloudDirectoryBatchUpdateObjectAttributesResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchUpdateObjectAttributesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchUpdateObjectAttributesResponse: clouddirectory.CloudDirectoryBatchUpdateObjectAttributesResponse = { ... }
```

##### `objectIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchUpdateObjectAttributesResponse.property.objectIdentifier"></a>

- *Type:* `string`

---

### CloudDirectoryBatchWriteOperation <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchWriteOperation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchWriteOperation: clouddirectory.CloudDirectoryBatchWriteOperation = { ... }
```

##### `addFacetToObject`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchWriteOperation.property.addFacetToObject"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchAddFacetToObject`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchAddFacetToObject)

---

##### `attachObject`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchWriteOperation.property.attachObject"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchAttachObject`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchAttachObject)

---

##### `attachPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchWriteOperation.property.attachPolicy"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchAttachPolicy`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchAttachPolicy)

---

##### `attachToIndex`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchWriteOperation.property.attachToIndex"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchAttachToIndex`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchAttachToIndex)

---

##### `attachTypedLink`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchWriteOperation.property.attachTypedLink"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchAttachTypedLink`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchAttachTypedLink)

---

##### `createIndex`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchWriteOperation.property.createIndex"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchCreateIndex`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchCreateIndex)

---

##### `createObject`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchWriteOperation.property.createObject"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchCreateObject`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchCreateObject)

---

##### `deleteObject`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchWriteOperation.property.deleteObject"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchDeleteObject`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchDeleteObject)

---

##### `detachFromIndex`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchWriteOperation.property.detachFromIndex"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchDetachFromIndex`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchDetachFromIndex)

---

##### `detachObject`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchWriteOperation.property.detachObject"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchDetachObject`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchDetachObject)

---

##### `detachPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchWriteOperation.property.detachPolicy"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchDetachPolicy`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchDetachPolicy)

---

##### `detachTypedLink`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchWriteOperation.property.detachTypedLink"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchDetachTypedLink`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchDetachTypedLink)

---

##### `removeFacetFromObject`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchWriteOperation.property.removeFacetFromObject"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchRemoveFacetFromObject`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchRemoveFacetFromObject)

---

##### `updateLinkAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchWriteOperation.property.updateLinkAttributes"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchUpdateLinkAttributes`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchUpdateLinkAttributes)

---

##### `updateObjectAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchWriteOperation.property.updateObjectAttributes"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchUpdateObjectAttributes`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchUpdateObjectAttributes)

---

### CloudDirectoryBatchWriteOperationResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchWriteOperationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchWriteOperationResponse: clouddirectory.CloudDirectoryBatchWriteOperationResponse = { ... }
```

##### `addFacetToObject`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchWriteOperationResponse.property.addFacetToObject"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchAddFacetToObjectResponse`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchAddFacetToObjectResponse)

---

##### `attachObject`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchWriteOperationResponse.property.attachObject"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchAttachObjectResponse`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchAttachObjectResponse)

---

##### `attachPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchWriteOperationResponse.property.attachPolicy"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchAttachPolicyResponse`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchAttachPolicyResponse)

---

##### `attachToIndex`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchWriteOperationResponse.property.attachToIndex"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchAttachToIndexResponse`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchAttachToIndexResponse)

---

##### `attachTypedLink`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchWriteOperationResponse.property.attachTypedLink"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchAttachTypedLinkResponse`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchAttachTypedLinkResponse)

---

##### `createIndex`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchWriteOperationResponse.property.createIndex"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchCreateIndexResponse`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchCreateIndexResponse)

---

##### `createObject`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchWriteOperationResponse.property.createObject"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchCreateObjectResponse`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchCreateObjectResponse)

---

##### `deleteObject`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchWriteOperationResponse.property.deleteObject"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchDeleteObjectResponse`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchDeleteObjectResponse)

---

##### `detachFromIndex`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchWriteOperationResponse.property.detachFromIndex"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchDetachFromIndexResponse`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchDetachFromIndexResponse)

---

##### `detachObject`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchWriteOperationResponse.property.detachObject"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchDetachObjectResponse`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchDetachObjectResponse)

---

##### `detachPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchWriteOperationResponse.property.detachPolicy"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchDetachPolicyResponse`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchDetachPolicyResponse)

---

##### `detachTypedLink`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchWriteOperationResponse.property.detachTypedLink"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchDetachTypedLinkResponse`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchDetachTypedLinkResponse)

---

##### `removeFacetFromObject`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchWriteOperationResponse.property.removeFacetFromObject"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchRemoveFacetFromObjectResponse`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchRemoveFacetFromObjectResponse)

---

##### `updateLinkAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchWriteOperationResponse.property.updateLinkAttributes"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchUpdateLinkAttributesResponse`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchUpdateLinkAttributesResponse)

---

##### `updateObjectAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchWriteOperationResponse.property.updateObjectAttributes"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchUpdateObjectAttributesResponse`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchUpdateObjectAttributesResponse)

---

### CloudDirectoryBatchWriteRequest <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchWriteRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchWriteRequest: clouddirectory.CloudDirectoryBatchWriteRequest = { ... }
```

##### `directoryArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchWriteRequest.property.directoryArn"></a>

- *Type:* `string`

---

##### `operations`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchWriteRequest.property.operations"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchWriteOperation`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchWriteOperation)[]

---

### CloudDirectoryBatchWriteResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchWriteResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryBatchWriteResponse: clouddirectory.CloudDirectoryBatchWriteResponse = { ... }
```

##### `responses`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryBatchWriteResponse.property.responses"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchWriteOperationResponse`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchWriteOperationResponse)[]

---

### CloudDirectoryCreateDirectoryRequest <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryCreateDirectoryRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryCreateDirectoryRequest: clouddirectory.CloudDirectoryCreateDirectoryRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryCreateDirectoryRequest.property.name"></a>

- *Type:* `string`

---

##### `schemaArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryCreateDirectoryRequest.property.schemaArn"></a>

- *Type:* `string`

---

### CloudDirectoryCreateDirectoryResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryCreateDirectoryResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryCreateDirectoryResponse: clouddirectory.CloudDirectoryCreateDirectoryResponse = { ... }
```

##### `appliedSchemaArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryCreateDirectoryResponse.property.appliedSchemaArn"></a>

- *Type:* `string`

---

##### `directoryArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryCreateDirectoryResponse.property.directoryArn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryCreateDirectoryResponse.property.name"></a>

- *Type:* `string`

---

##### `objectIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryCreateDirectoryResponse.property.objectIdentifier"></a>

- *Type:* `string`

---

### CloudDirectoryCreateFacetRequest <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryCreateFacetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryCreateFacetRequest: clouddirectory.CloudDirectoryCreateFacetRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryCreateFacetRequest.property.name"></a>

- *Type:* `string`

---

##### `schemaArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryCreateFacetRequest.property.schemaArn"></a>

- *Type:* `string`

---

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryCreateFacetRequest.property.attributes"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryFacetAttribute`](#aws-cdk-sdk.clouddirectory.CloudDirectoryFacetAttribute)[]

---

##### `facetStyle`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryCreateFacetRequest.property.facetStyle"></a>

- *Type:* `string`

---

##### `objectType`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryCreateFacetRequest.property.objectType"></a>

- *Type:* `string`

---

### CloudDirectoryCreateFacetResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryCreateFacetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryCreateFacetResponse: clouddirectory.CloudDirectoryCreateFacetResponse = { ... }
```

### CloudDirectoryCreateIndexRequest <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryCreateIndexRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryCreateIndexRequest: clouddirectory.CloudDirectoryCreateIndexRequest = { ... }
```

##### `directoryArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryCreateIndexRequest.property.directoryArn"></a>

- *Type:* `string`

---

##### `isUnique`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryCreateIndexRequest.property.isUnique"></a>

- *Type:* `boolean`

---

##### `orderedIndexedAttributeList`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryCreateIndexRequest.property.orderedIndexedAttributeList"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryAttributeKey`](#aws-cdk-sdk.clouddirectory.CloudDirectoryAttributeKey)[]

---

##### `linkName`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryCreateIndexRequest.property.linkName"></a>

- *Type:* `string`

---

##### `parentReference`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryCreateIndexRequest.property.parentReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference)

---

### CloudDirectoryCreateIndexResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryCreateIndexResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryCreateIndexResponse: clouddirectory.CloudDirectoryCreateIndexResponse = { ... }
```

##### `objectIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryCreateIndexResponse.property.objectIdentifier"></a>

- *Type:* `string`

---

### CloudDirectoryCreateObjectRequest <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryCreateObjectRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryCreateObjectRequest: clouddirectory.CloudDirectoryCreateObjectRequest = { ... }
```

##### `directoryArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryCreateObjectRequest.property.directoryArn"></a>

- *Type:* `string`

---

##### `schemaFacets`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryCreateObjectRequest.property.schemaFacets"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectorySchemaFacet`](#aws-cdk-sdk.clouddirectory.CloudDirectorySchemaFacet)[]

---

##### `linkName`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryCreateObjectRequest.property.linkName"></a>

- *Type:* `string`

---

##### `objectAttributeList`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryCreateObjectRequest.property.objectAttributeList"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryAttributeKeyAndValue`](#aws-cdk-sdk.clouddirectory.CloudDirectoryAttributeKeyAndValue)[]

---

##### `parentReference`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryCreateObjectRequest.property.parentReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference)

---

### CloudDirectoryCreateObjectResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryCreateObjectResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryCreateObjectResponse: clouddirectory.CloudDirectoryCreateObjectResponse = { ... }
```

##### `objectIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryCreateObjectResponse.property.objectIdentifier"></a>

- *Type:* `string`

---

### CloudDirectoryCreateSchemaRequest <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryCreateSchemaRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryCreateSchemaRequest: clouddirectory.CloudDirectoryCreateSchemaRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryCreateSchemaRequest.property.name"></a>

- *Type:* `string`

---

### CloudDirectoryCreateSchemaResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryCreateSchemaResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryCreateSchemaResponse: clouddirectory.CloudDirectoryCreateSchemaResponse = { ... }
```

##### `schemaArn`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryCreateSchemaResponse.property.schemaArn"></a>

- *Type:* `string`

---

### CloudDirectoryCreateTypedLinkFacetRequest <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryCreateTypedLinkFacetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryCreateTypedLinkFacetRequest: clouddirectory.CloudDirectoryCreateTypedLinkFacetRequest = { ... }
```

##### `facet`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryCreateTypedLinkFacetRequest.property.facet"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkFacet`](#aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkFacet)

---

##### `schemaArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryCreateTypedLinkFacetRequest.property.schemaArn"></a>

- *Type:* `string`

---

### CloudDirectoryCreateTypedLinkFacetResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryCreateTypedLinkFacetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryCreateTypedLinkFacetResponse: clouddirectory.CloudDirectoryCreateTypedLinkFacetResponse = { ... }
```

### CloudDirectoryDeleteDirectoryRequest <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryDeleteDirectoryRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryDeleteDirectoryRequest: clouddirectory.CloudDirectoryDeleteDirectoryRequest = { ... }
```

##### `directoryArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryDeleteDirectoryRequest.property.directoryArn"></a>

- *Type:* `string`

---

### CloudDirectoryDeleteDirectoryResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryDeleteDirectoryResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryDeleteDirectoryResponse: clouddirectory.CloudDirectoryDeleteDirectoryResponse = { ... }
```

##### `directoryArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryDeleteDirectoryResponse.property.directoryArn"></a>

- *Type:* `string`

---

### CloudDirectoryDeleteFacetRequest <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryDeleteFacetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryDeleteFacetRequest: clouddirectory.CloudDirectoryDeleteFacetRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryDeleteFacetRequest.property.name"></a>

- *Type:* `string`

---

##### `schemaArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryDeleteFacetRequest.property.schemaArn"></a>

- *Type:* `string`

---

### CloudDirectoryDeleteFacetResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryDeleteFacetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryDeleteFacetResponse: clouddirectory.CloudDirectoryDeleteFacetResponse = { ... }
```

### CloudDirectoryDeleteObjectRequest <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryDeleteObjectRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryDeleteObjectRequest: clouddirectory.CloudDirectoryDeleteObjectRequest = { ... }
```

##### `directoryArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryDeleteObjectRequest.property.directoryArn"></a>

- *Type:* `string`

---

##### `objectReference`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryDeleteObjectRequest.property.objectReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference)

---

### CloudDirectoryDeleteObjectResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryDeleteObjectResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryDeleteObjectResponse: clouddirectory.CloudDirectoryDeleteObjectResponse = { ... }
```

### CloudDirectoryDeleteSchemaRequest <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryDeleteSchemaRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryDeleteSchemaRequest: clouddirectory.CloudDirectoryDeleteSchemaRequest = { ... }
```

##### `schemaArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryDeleteSchemaRequest.property.schemaArn"></a>

- *Type:* `string`

---

### CloudDirectoryDeleteSchemaResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryDeleteSchemaResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryDeleteSchemaResponse: clouddirectory.CloudDirectoryDeleteSchemaResponse = { ... }
```

##### `schemaArn`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryDeleteSchemaResponse.property.schemaArn"></a>

- *Type:* `string`

---

### CloudDirectoryDeleteTypedLinkFacetRequest <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryDeleteTypedLinkFacetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryDeleteTypedLinkFacetRequest: clouddirectory.CloudDirectoryDeleteTypedLinkFacetRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryDeleteTypedLinkFacetRequest.property.name"></a>

- *Type:* `string`

---

##### `schemaArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryDeleteTypedLinkFacetRequest.property.schemaArn"></a>

- *Type:* `string`

---

### CloudDirectoryDeleteTypedLinkFacetResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryDeleteTypedLinkFacetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryDeleteTypedLinkFacetResponse: clouddirectory.CloudDirectoryDeleteTypedLinkFacetResponse = { ... }
```

### CloudDirectoryDetachFromIndexRequest <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryDetachFromIndexRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryDetachFromIndexRequest: clouddirectory.CloudDirectoryDetachFromIndexRequest = { ... }
```

##### `directoryArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryDetachFromIndexRequest.property.directoryArn"></a>

- *Type:* `string`

---

##### `indexReference`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryDetachFromIndexRequest.property.indexReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference)

---

##### `targetReference`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryDetachFromIndexRequest.property.targetReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference)

---

### CloudDirectoryDetachFromIndexResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryDetachFromIndexResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryDetachFromIndexResponse: clouddirectory.CloudDirectoryDetachFromIndexResponse = { ... }
```

##### `detachedObjectIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryDetachFromIndexResponse.property.detachedObjectIdentifier"></a>

- *Type:* `string`

---

### CloudDirectoryDetachObjectRequest <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryDetachObjectRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryDetachObjectRequest: clouddirectory.CloudDirectoryDetachObjectRequest = { ... }
```

##### `directoryArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryDetachObjectRequest.property.directoryArn"></a>

- *Type:* `string`

---

##### `linkName`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryDetachObjectRequest.property.linkName"></a>

- *Type:* `string`

---

##### `parentReference`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryDetachObjectRequest.property.parentReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference)

---

### CloudDirectoryDetachObjectResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryDetachObjectResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryDetachObjectResponse: clouddirectory.CloudDirectoryDetachObjectResponse = { ... }
```

##### `detachedObjectIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryDetachObjectResponse.property.detachedObjectIdentifier"></a>

- *Type:* `string`

---

### CloudDirectoryDetachPolicyRequest <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryDetachPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryDetachPolicyRequest: clouddirectory.CloudDirectoryDetachPolicyRequest = { ... }
```

##### `directoryArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryDetachPolicyRequest.property.directoryArn"></a>

- *Type:* `string`

---

##### `objectReference`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryDetachPolicyRequest.property.objectReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference)

---

##### `policyReference`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryDetachPolicyRequest.property.policyReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference)

---

### CloudDirectoryDetachPolicyResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryDetachPolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryDetachPolicyResponse: clouddirectory.CloudDirectoryDetachPolicyResponse = { ... }
```

### CloudDirectoryDetachTypedLinkRequest <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryDetachTypedLinkRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryDetachTypedLinkRequest: clouddirectory.CloudDirectoryDetachTypedLinkRequest = { ... }
```

##### `directoryArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryDetachTypedLinkRequest.property.directoryArn"></a>

- *Type:* `string`

---

##### `typedLinkSpecifier`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryDetachTypedLinkRequest.property.typedLinkSpecifier"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkSpecifier`](#aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkSpecifier)

---

### CloudDirectoryDirectory <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryDirectory"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryDirectory: clouddirectory.CloudDirectoryDirectory = { ... }
```

##### `creationDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryDirectory.property.creationDateTime"></a>

- *Type:* `string`

---

##### `directoryArn`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryDirectory.property.directoryArn"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryDirectory.property.name"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryDirectory.property.state"></a>

- *Type:* `string`

---

### CloudDirectoryDisableDirectoryRequest <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryDisableDirectoryRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryDisableDirectoryRequest: clouddirectory.CloudDirectoryDisableDirectoryRequest = { ... }
```

##### `directoryArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryDisableDirectoryRequest.property.directoryArn"></a>

- *Type:* `string`

---

### CloudDirectoryDisableDirectoryResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryDisableDirectoryResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryDisableDirectoryResponse: clouddirectory.CloudDirectoryDisableDirectoryResponse = { ... }
```

##### `directoryArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryDisableDirectoryResponse.property.directoryArn"></a>

- *Type:* `string`

---

### CloudDirectoryEnableDirectoryRequest <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryEnableDirectoryRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryEnableDirectoryRequest: clouddirectory.CloudDirectoryEnableDirectoryRequest = { ... }
```

##### `directoryArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryEnableDirectoryRequest.property.directoryArn"></a>

- *Type:* `string`

---

### CloudDirectoryEnableDirectoryResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryEnableDirectoryResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryEnableDirectoryResponse: clouddirectory.CloudDirectoryEnableDirectoryResponse = { ... }
```

##### `directoryArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryEnableDirectoryResponse.property.directoryArn"></a>

- *Type:* `string`

---

### CloudDirectoryFacet <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryFacet"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryFacet: clouddirectory.CloudDirectoryFacet = { ... }
```

##### `facetStyle`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryFacet.property.facetStyle"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryFacet.property.name"></a>

- *Type:* `string`

---

##### `objectType`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryFacet.property.objectType"></a>

- *Type:* `string`

---

### CloudDirectoryFacetAttribute <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryFacetAttribute"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryFacetAttribute: clouddirectory.CloudDirectoryFacetAttribute = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryFacetAttribute.property.name"></a>

- *Type:* `string`

---

##### `attributeDefinition`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryFacetAttribute.property.attributeDefinition"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryFacetAttributeDefinition`](#aws-cdk-sdk.clouddirectory.CloudDirectoryFacetAttributeDefinition)

---

##### `attributeReference`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryFacetAttribute.property.attributeReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryFacetAttributeReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryFacetAttributeReference)

---

##### `requiredBehavior`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryFacetAttribute.property.requiredBehavior"></a>

- *Type:* `string`

---

### CloudDirectoryFacetAttributeDefinition <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryFacetAttributeDefinition"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryFacetAttributeDefinition: clouddirectory.CloudDirectoryFacetAttributeDefinition = { ... }
```

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryFacetAttributeDefinition.property.type"></a>

- *Type:* `string`

---

##### `defaultValue`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryFacetAttributeDefinition.property.defaultValue"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryTypedAttributeValue`](#aws-cdk-sdk.clouddirectory.CloudDirectoryTypedAttributeValue)

---

##### `isImmutable`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryFacetAttributeDefinition.property.isImmutable"></a>

- *Type:* `boolean`

---

##### `rules`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryFacetAttributeDefinition.property.rules"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.clouddirectory.CloudDirectoryRule`](#aws-cdk-sdk.clouddirectory.CloudDirectoryRule)}

---

### CloudDirectoryFacetAttributeReference <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryFacetAttributeReference"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryFacetAttributeReference: clouddirectory.CloudDirectoryFacetAttributeReference = { ... }
```

##### `targetAttributeName`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryFacetAttributeReference.property.targetAttributeName"></a>

- *Type:* `string`

---

##### `targetFacetName`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryFacetAttributeReference.property.targetFacetName"></a>

- *Type:* `string`

---

### CloudDirectoryFacetAttributeUpdate <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryFacetAttributeUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryFacetAttributeUpdate: clouddirectory.CloudDirectoryFacetAttributeUpdate = { ... }
```

##### `action`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryFacetAttributeUpdate.property.action"></a>

- *Type:* `string`

---

##### `attribute`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryFacetAttributeUpdate.property.attribute"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryFacetAttribute`](#aws-cdk-sdk.clouddirectory.CloudDirectoryFacetAttribute)

---

### CloudDirectoryGetAppliedSchemaVersionRequest <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryGetAppliedSchemaVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryGetAppliedSchemaVersionRequest: clouddirectory.CloudDirectoryGetAppliedSchemaVersionRequest = { ... }
```

##### `schemaArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryGetAppliedSchemaVersionRequest.property.schemaArn"></a>

- *Type:* `string`

---

### CloudDirectoryGetAppliedSchemaVersionResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryGetAppliedSchemaVersionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryGetAppliedSchemaVersionResponse: clouddirectory.CloudDirectoryGetAppliedSchemaVersionResponse = { ... }
```

##### `appliedSchemaArn`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryGetAppliedSchemaVersionResponse.property.appliedSchemaArn"></a>

- *Type:* `string`

---

### CloudDirectoryGetDirectoryRequest <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryGetDirectoryRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryGetDirectoryRequest: clouddirectory.CloudDirectoryGetDirectoryRequest = { ... }
```

##### `directoryArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryGetDirectoryRequest.property.directoryArn"></a>

- *Type:* `string`

---

### CloudDirectoryGetDirectoryResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryGetDirectoryResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryGetDirectoryResponse: clouddirectory.CloudDirectoryGetDirectoryResponse = { ... }
```

##### `directory`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryGetDirectoryResponse.property.directory"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryDirectory`](#aws-cdk-sdk.clouddirectory.CloudDirectoryDirectory)

---

### CloudDirectoryGetFacetRequest <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryGetFacetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryGetFacetRequest: clouddirectory.CloudDirectoryGetFacetRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryGetFacetRequest.property.name"></a>

- *Type:* `string`

---

##### `schemaArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryGetFacetRequest.property.schemaArn"></a>

- *Type:* `string`

---

### CloudDirectoryGetFacetResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryGetFacetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryGetFacetResponse: clouddirectory.CloudDirectoryGetFacetResponse = { ... }
```

##### `facet`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryGetFacetResponse.property.facet"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryFacet`](#aws-cdk-sdk.clouddirectory.CloudDirectoryFacet)

---

### CloudDirectoryGetLinkAttributesRequest <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryGetLinkAttributesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryGetLinkAttributesRequest: clouddirectory.CloudDirectoryGetLinkAttributesRequest = { ... }
```

##### `attributeNames`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryGetLinkAttributesRequest.property.attributeNames"></a>

- *Type:* `string`[]

---

##### `directoryArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryGetLinkAttributesRequest.property.directoryArn"></a>

- *Type:* `string`

---

##### `typedLinkSpecifier`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryGetLinkAttributesRequest.property.typedLinkSpecifier"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkSpecifier`](#aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkSpecifier)

---

##### `consistencyLevel`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryGetLinkAttributesRequest.property.consistencyLevel"></a>

- *Type:* `string`

---

### CloudDirectoryGetLinkAttributesResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryGetLinkAttributesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryGetLinkAttributesResponse: clouddirectory.CloudDirectoryGetLinkAttributesResponse = { ... }
```

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryGetLinkAttributesResponse.property.attributes"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryAttributeKeyAndValue`](#aws-cdk-sdk.clouddirectory.CloudDirectoryAttributeKeyAndValue)[]

---

### CloudDirectoryGetObjectAttributesRequest <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryGetObjectAttributesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryGetObjectAttributesRequest: clouddirectory.CloudDirectoryGetObjectAttributesRequest = { ... }
```

##### `attributeNames`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryGetObjectAttributesRequest.property.attributeNames"></a>

- *Type:* `string`[]

---

##### `directoryArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryGetObjectAttributesRequest.property.directoryArn"></a>

- *Type:* `string`

---

##### `objectReference`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryGetObjectAttributesRequest.property.objectReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference)

---

##### `schemaFacet`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryGetObjectAttributesRequest.property.schemaFacet"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectorySchemaFacet`](#aws-cdk-sdk.clouddirectory.CloudDirectorySchemaFacet)

---

##### `consistencyLevel`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryGetObjectAttributesRequest.property.consistencyLevel"></a>

- *Type:* `string`

---

### CloudDirectoryGetObjectAttributesResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryGetObjectAttributesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryGetObjectAttributesResponse: clouddirectory.CloudDirectoryGetObjectAttributesResponse = { ... }
```

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryGetObjectAttributesResponse.property.attributes"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryAttributeKeyAndValue`](#aws-cdk-sdk.clouddirectory.CloudDirectoryAttributeKeyAndValue)[]

---

### CloudDirectoryGetObjectInformationRequest <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryGetObjectInformationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryGetObjectInformationRequest: clouddirectory.CloudDirectoryGetObjectInformationRequest = { ... }
```

##### `directoryArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryGetObjectInformationRequest.property.directoryArn"></a>

- *Type:* `string`

---

##### `objectReference`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryGetObjectInformationRequest.property.objectReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference)

---

##### `consistencyLevel`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryGetObjectInformationRequest.property.consistencyLevel"></a>

- *Type:* `string`

---

### CloudDirectoryGetObjectInformationResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryGetObjectInformationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryGetObjectInformationResponse: clouddirectory.CloudDirectoryGetObjectInformationResponse = { ... }
```

##### `objectIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryGetObjectInformationResponse.property.objectIdentifier"></a>

- *Type:* `string`

---

##### `schemaFacets`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryGetObjectInformationResponse.property.schemaFacets"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectorySchemaFacet`](#aws-cdk-sdk.clouddirectory.CloudDirectorySchemaFacet)[]

---

### CloudDirectoryGetSchemaAsJsonRequest <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryGetSchemaAsJsonRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryGetSchemaAsJsonRequest: clouddirectory.CloudDirectoryGetSchemaAsJsonRequest = { ... }
```

##### `schemaArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryGetSchemaAsJsonRequest.property.schemaArn"></a>

- *Type:* `string`

---

### CloudDirectoryGetSchemaAsJsonResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryGetSchemaAsJsonResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryGetSchemaAsJsonResponse: clouddirectory.CloudDirectoryGetSchemaAsJsonResponse = { ... }
```

##### `document`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryGetSchemaAsJsonResponse.property.document"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryGetSchemaAsJsonResponse.property.name"></a>

- *Type:* `string`

---

### CloudDirectoryGetTypedLinkFacetInformationRequest <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryGetTypedLinkFacetInformationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryGetTypedLinkFacetInformationRequest: clouddirectory.CloudDirectoryGetTypedLinkFacetInformationRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryGetTypedLinkFacetInformationRequest.property.name"></a>

- *Type:* `string`

---

##### `schemaArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryGetTypedLinkFacetInformationRequest.property.schemaArn"></a>

- *Type:* `string`

---

### CloudDirectoryGetTypedLinkFacetInformationResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryGetTypedLinkFacetInformationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryGetTypedLinkFacetInformationResponse: clouddirectory.CloudDirectoryGetTypedLinkFacetInformationResponse = { ... }
```

##### `identityAttributeOrder`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryGetTypedLinkFacetInformationResponse.property.identityAttributeOrder"></a>

- *Type:* `string`[]

---

### CloudDirectoryIndexAttachment <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryIndexAttachment"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryIndexAttachment: clouddirectory.CloudDirectoryIndexAttachment = { ... }
```

##### `indexedAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryIndexAttachment.property.indexedAttributes"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryAttributeKeyAndValue`](#aws-cdk-sdk.clouddirectory.CloudDirectoryAttributeKeyAndValue)[]

---

##### `objectIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryIndexAttachment.property.objectIdentifier"></a>

- *Type:* `string`

---

### CloudDirectoryLinkAttributeAction <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryLinkAttributeAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryLinkAttributeAction: clouddirectory.CloudDirectoryLinkAttributeAction = { ... }
```

##### `attributeActionType`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryLinkAttributeAction.property.attributeActionType"></a>

- *Type:* `string`

---

##### `attributeUpdateValue`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryLinkAttributeAction.property.attributeUpdateValue"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryTypedAttributeValue`](#aws-cdk-sdk.clouddirectory.CloudDirectoryTypedAttributeValue)

---

### CloudDirectoryLinkAttributeUpdate <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryLinkAttributeUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryLinkAttributeUpdate: clouddirectory.CloudDirectoryLinkAttributeUpdate = { ... }
```

##### `attributeAction`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryLinkAttributeUpdate.property.attributeAction"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryLinkAttributeAction`](#aws-cdk-sdk.clouddirectory.CloudDirectoryLinkAttributeAction)

---

##### `attributeKey`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryLinkAttributeUpdate.property.attributeKey"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryAttributeKey`](#aws-cdk-sdk.clouddirectory.CloudDirectoryAttributeKey)

---

### CloudDirectoryListAppliedSchemaArnsRequest <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListAppliedSchemaArnsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryListAppliedSchemaArnsRequest: clouddirectory.CloudDirectoryListAppliedSchemaArnsRequest = { ... }
```

##### `directoryArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListAppliedSchemaArnsRequest.property.directoryArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListAppliedSchemaArnsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListAppliedSchemaArnsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `schemaArn`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListAppliedSchemaArnsRequest.property.schemaArn"></a>

- *Type:* `string`

---

### CloudDirectoryListAppliedSchemaArnsResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListAppliedSchemaArnsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryListAppliedSchemaArnsResponse: clouddirectory.CloudDirectoryListAppliedSchemaArnsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListAppliedSchemaArnsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `schemaArns`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListAppliedSchemaArnsResponse.property.schemaArns"></a>

- *Type:* `string`[]

---

### CloudDirectoryListAttachedIndicesRequest <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListAttachedIndicesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryListAttachedIndicesRequest: clouddirectory.CloudDirectoryListAttachedIndicesRequest = { ... }
```

##### `directoryArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListAttachedIndicesRequest.property.directoryArn"></a>

- *Type:* `string`

---

##### `targetReference`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListAttachedIndicesRequest.property.targetReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference)

---

##### `consistencyLevel`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListAttachedIndicesRequest.property.consistencyLevel"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListAttachedIndicesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListAttachedIndicesRequest.property.nextToken"></a>

- *Type:* `string`

---

### CloudDirectoryListAttachedIndicesResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListAttachedIndicesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryListAttachedIndicesResponse: clouddirectory.CloudDirectoryListAttachedIndicesResponse = { ... }
```

##### `indexAttachments`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListAttachedIndicesResponse.property.indexAttachments"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryIndexAttachment`](#aws-cdk-sdk.clouddirectory.CloudDirectoryIndexAttachment)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListAttachedIndicesResponse.property.nextToken"></a>

- *Type:* `string`

---

### CloudDirectoryListDevelopmentSchemaArnsRequest <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListDevelopmentSchemaArnsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryListDevelopmentSchemaArnsRequest: clouddirectory.CloudDirectoryListDevelopmentSchemaArnsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListDevelopmentSchemaArnsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListDevelopmentSchemaArnsRequest.property.nextToken"></a>

- *Type:* `string`

---

### CloudDirectoryListDevelopmentSchemaArnsResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListDevelopmentSchemaArnsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryListDevelopmentSchemaArnsResponse: clouddirectory.CloudDirectoryListDevelopmentSchemaArnsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListDevelopmentSchemaArnsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `schemaArns`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListDevelopmentSchemaArnsResponse.property.schemaArns"></a>

- *Type:* `string`[]

---

### CloudDirectoryListDirectoriesRequest <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListDirectoriesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryListDirectoriesRequest: clouddirectory.CloudDirectoryListDirectoriesRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListDirectoriesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListDirectoriesRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListDirectoriesRequest.property.state"></a>

- *Type:* `string`

---

### CloudDirectoryListDirectoriesResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListDirectoriesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryListDirectoriesResponse: clouddirectory.CloudDirectoryListDirectoriesResponse = { ... }
```

##### `directories`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListDirectoriesResponse.property.directories"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryDirectory`](#aws-cdk-sdk.clouddirectory.CloudDirectoryDirectory)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListDirectoriesResponse.property.nextToken"></a>

- *Type:* `string`

---

### CloudDirectoryListFacetAttributesRequest <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListFacetAttributesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryListFacetAttributesRequest: clouddirectory.CloudDirectoryListFacetAttributesRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListFacetAttributesRequest.property.name"></a>

- *Type:* `string`

---

##### `schemaArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListFacetAttributesRequest.property.schemaArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListFacetAttributesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListFacetAttributesRequest.property.nextToken"></a>

- *Type:* `string`

---

### CloudDirectoryListFacetAttributesResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListFacetAttributesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryListFacetAttributesResponse: clouddirectory.CloudDirectoryListFacetAttributesResponse = { ... }
```

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListFacetAttributesResponse.property.attributes"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryFacetAttribute`](#aws-cdk-sdk.clouddirectory.CloudDirectoryFacetAttribute)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListFacetAttributesResponse.property.nextToken"></a>

- *Type:* `string`

---

### CloudDirectoryListFacetNamesRequest <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListFacetNamesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryListFacetNamesRequest: clouddirectory.CloudDirectoryListFacetNamesRequest = { ... }
```

##### `schemaArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListFacetNamesRequest.property.schemaArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListFacetNamesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListFacetNamesRequest.property.nextToken"></a>

- *Type:* `string`

---

### CloudDirectoryListFacetNamesResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListFacetNamesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryListFacetNamesResponse: clouddirectory.CloudDirectoryListFacetNamesResponse = { ... }
```

##### `facetNames`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListFacetNamesResponse.property.facetNames"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListFacetNamesResponse.property.nextToken"></a>

- *Type:* `string`

---

### CloudDirectoryListIncomingTypedLinksRequest <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListIncomingTypedLinksRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryListIncomingTypedLinksRequest: clouddirectory.CloudDirectoryListIncomingTypedLinksRequest = { ... }
```

##### `directoryArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListIncomingTypedLinksRequest.property.directoryArn"></a>

- *Type:* `string`

---

##### `objectReference`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListIncomingTypedLinksRequest.property.objectReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference)

---

##### `consistencyLevel`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListIncomingTypedLinksRequest.property.consistencyLevel"></a>

- *Type:* `string`

---

##### `filterAttributeRanges`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListIncomingTypedLinksRequest.property.filterAttributeRanges"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkAttributeRange`](#aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkAttributeRange)[]

---

##### `filterTypedLink`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListIncomingTypedLinksRequest.property.filterTypedLink"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkSchemaAndFacetName`](#aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkSchemaAndFacetName)

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListIncomingTypedLinksRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListIncomingTypedLinksRequest.property.nextToken"></a>

- *Type:* `string`

---

### CloudDirectoryListIncomingTypedLinksResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListIncomingTypedLinksResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryListIncomingTypedLinksResponse: clouddirectory.CloudDirectoryListIncomingTypedLinksResponse = { ... }
```

##### `linkSpecifiers`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListIncomingTypedLinksResponse.property.linkSpecifiers"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkSpecifier`](#aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkSpecifier)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListIncomingTypedLinksResponse.property.nextToken"></a>

- *Type:* `string`

---

### CloudDirectoryListIndexRequest <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListIndexRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryListIndexRequest: clouddirectory.CloudDirectoryListIndexRequest = { ... }
```

##### `directoryArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListIndexRequest.property.directoryArn"></a>

- *Type:* `string`

---

##### `indexReference`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListIndexRequest.property.indexReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference)

---

##### `consistencyLevel`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListIndexRequest.property.consistencyLevel"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListIndexRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListIndexRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `rangesOnIndexedValues`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListIndexRequest.property.rangesOnIndexedValues"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectAttributeRange`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectAttributeRange)[]

---

### CloudDirectoryListIndexResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListIndexResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryListIndexResponse: clouddirectory.CloudDirectoryListIndexResponse = { ... }
```

##### `indexAttachments`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListIndexResponse.property.indexAttachments"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryIndexAttachment`](#aws-cdk-sdk.clouddirectory.CloudDirectoryIndexAttachment)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListIndexResponse.property.nextToken"></a>

- *Type:* `string`

---

### CloudDirectoryListManagedSchemaArnsRequest <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListManagedSchemaArnsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryListManagedSchemaArnsRequest: clouddirectory.CloudDirectoryListManagedSchemaArnsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListManagedSchemaArnsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListManagedSchemaArnsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `schemaArn`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListManagedSchemaArnsRequest.property.schemaArn"></a>

- *Type:* `string`

---

### CloudDirectoryListManagedSchemaArnsResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListManagedSchemaArnsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryListManagedSchemaArnsResponse: clouddirectory.CloudDirectoryListManagedSchemaArnsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListManagedSchemaArnsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `schemaArns`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListManagedSchemaArnsResponse.property.schemaArns"></a>

- *Type:* `string`[]

---

### CloudDirectoryListObjectAttributesRequest <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectAttributesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryListObjectAttributesRequest: clouddirectory.CloudDirectoryListObjectAttributesRequest = { ... }
```

##### `directoryArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectAttributesRequest.property.directoryArn"></a>

- *Type:* `string`

---

##### `objectReference`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectAttributesRequest.property.objectReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference)

---

##### `consistencyLevel`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectAttributesRequest.property.consistencyLevel"></a>

- *Type:* `string`

---

##### `facetFilter`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectAttributesRequest.property.facetFilter"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectorySchemaFacet`](#aws-cdk-sdk.clouddirectory.CloudDirectorySchemaFacet)

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectAttributesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectAttributesRequest.property.nextToken"></a>

- *Type:* `string`

---

### CloudDirectoryListObjectAttributesResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectAttributesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryListObjectAttributesResponse: clouddirectory.CloudDirectoryListObjectAttributesResponse = { ... }
```

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectAttributesResponse.property.attributes"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryAttributeKeyAndValue`](#aws-cdk-sdk.clouddirectory.CloudDirectoryAttributeKeyAndValue)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectAttributesResponse.property.nextToken"></a>

- *Type:* `string`

---

### CloudDirectoryListObjectChildrenRequest <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectChildrenRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryListObjectChildrenRequest: clouddirectory.CloudDirectoryListObjectChildrenRequest = { ... }
```

##### `directoryArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectChildrenRequest.property.directoryArn"></a>

- *Type:* `string`

---

##### `objectReference`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectChildrenRequest.property.objectReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference)

---

##### `consistencyLevel`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectChildrenRequest.property.consistencyLevel"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectChildrenRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectChildrenRequest.property.nextToken"></a>

- *Type:* `string`

---

### CloudDirectoryListObjectChildrenResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectChildrenResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryListObjectChildrenResponse: clouddirectory.CloudDirectoryListObjectChildrenResponse = { ... }
```

##### `children`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectChildrenResponse.property.children"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectChildrenResponse.property.nextToken"></a>

- *Type:* `string`

---

### CloudDirectoryListObjectParentPathsRequest <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectParentPathsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryListObjectParentPathsRequest: clouddirectory.CloudDirectoryListObjectParentPathsRequest = { ... }
```

##### `directoryArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectParentPathsRequest.property.directoryArn"></a>

- *Type:* `string`

---

##### `objectReference`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectParentPathsRequest.property.objectReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference)

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectParentPathsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectParentPathsRequest.property.nextToken"></a>

- *Type:* `string`

---

### CloudDirectoryListObjectParentPathsResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectParentPathsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryListObjectParentPathsResponse: clouddirectory.CloudDirectoryListObjectParentPathsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectParentPathsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `pathToObjectIdentifiersList`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectParentPathsResponse.property.pathToObjectIdentifiersList"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryPathToObjectIdentifiers`](#aws-cdk-sdk.clouddirectory.CloudDirectoryPathToObjectIdentifiers)[]

---

### CloudDirectoryListObjectParentsRequest <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectParentsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryListObjectParentsRequest: clouddirectory.CloudDirectoryListObjectParentsRequest = { ... }
```

##### `directoryArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectParentsRequest.property.directoryArn"></a>

- *Type:* `string`

---

##### `objectReference`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectParentsRequest.property.objectReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference)

---

##### `consistencyLevel`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectParentsRequest.property.consistencyLevel"></a>

- *Type:* `string`

---

##### `includeAllLinksToEachParent`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectParentsRequest.property.includeAllLinksToEachParent"></a>

- *Type:* `boolean`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectParentsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectParentsRequest.property.nextToken"></a>

- *Type:* `string`

---

### CloudDirectoryListObjectParentsResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectParentsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryListObjectParentsResponse: clouddirectory.CloudDirectoryListObjectParentsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectParentsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `parentLinks`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectParentsResponse.property.parentLinks"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectIdentifierAndLinkNameTuple`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectIdentifierAndLinkNameTuple)[]

---

##### `parents`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectParentsResponse.property.parents"></a>

- *Type:* {[ key: string ]: `string`}

---

### CloudDirectoryListObjectPoliciesRequest <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectPoliciesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryListObjectPoliciesRequest: clouddirectory.CloudDirectoryListObjectPoliciesRequest = { ... }
```

##### `directoryArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectPoliciesRequest.property.directoryArn"></a>

- *Type:* `string`

---

##### `objectReference`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectPoliciesRequest.property.objectReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference)

---

##### `consistencyLevel`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectPoliciesRequest.property.consistencyLevel"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectPoliciesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectPoliciesRequest.property.nextToken"></a>

- *Type:* `string`

---

### CloudDirectoryListObjectPoliciesResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectPoliciesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryListObjectPoliciesResponse: clouddirectory.CloudDirectoryListObjectPoliciesResponse = { ... }
```

##### `attachedPolicyIds`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectPoliciesResponse.property.attachedPolicyIds"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectPoliciesResponse.property.nextToken"></a>

- *Type:* `string`

---

### CloudDirectoryListOutgoingTypedLinksRequest <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListOutgoingTypedLinksRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryListOutgoingTypedLinksRequest: clouddirectory.CloudDirectoryListOutgoingTypedLinksRequest = { ... }
```

##### `directoryArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListOutgoingTypedLinksRequest.property.directoryArn"></a>

- *Type:* `string`

---

##### `objectReference`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListOutgoingTypedLinksRequest.property.objectReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference)

---

##### `consistencyLevel`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListOutgoingTypedLinksRequest.property.consistencyLevel"></a>

- *Type:* `string`

---

##### `filterAttributeRanges`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListOutgoingTypedLinksRequest.property.filterAttributeRanges"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkAttributeRange`](#aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkAttributeRange)[]

---

##### `filterTypedLink`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListOutgoingTypedLinksRequest.property.filterTypedLink"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkSchemaAndFacetName`](#aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkSchemaAndFacetName)

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListOutgoingTypedLinksRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListOutgoingTypedLinksRequest.property.nextToken"></a>

- *Type:* `string`

---

### CloudDirectoryListOutgoingTypedLinksResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListOutgoingTypedLinksResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryListOutgoingTypedLinksResponse: clouddirectory.CloudDirectoryListOutgoingTypedLinksResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListOutgoingTypedLinksResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `typedLinkSpecifiers`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListOutgoingTypedLinksResponse.property.typedLinkSpecifiers"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkSpecifier`](#aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkSpecifier)[]

---

### CloudDirectoryListPolicyAttachmentsRequest <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListPolicyAttachmentsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryListPolicyAttachmentsRequest: clouddirectory.CloudDirectoryListPolicyAttachmentsRequest = { ... }
```

##### `directoryArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListPolicyAttachmentsRequest.property.directoryArn"></a>

- *Type:* `string`

---

##### `policyReference`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListPolicyAttachmentsRequest.property.policyReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference)

---

##### `consistencyLevel`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListPolicyAttachmentsRequest.property.consistencyLevel"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListPolicyAttachmentsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListPolicyAttachmentsRequest.property.nextToken"></a>

- *Type:* `string`

---

### CloudDirectoryListPolicyAttachmentsResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListPolicyAttachmentsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryListPolicyAttachmentsResponse: clouddirectory.CloudDirectoryListPolicyAttachmentsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListPolicyAttachmentsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `objectIdentifiers`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListPolicyAttachmentsResponse.property.objectIdentifiers"></a>

- *Type:* `string`[]

---

### CloudDirectoryListPublishedSchemaArnsRequest <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListPublishedSchemaArnsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryListPublishedSchemaArnsRequest: clouddirectory.CloudDirectoryListPublishedSchemaArnsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListPublishedSchemaArnsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListPublishedSchemaArnsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `schemaArn`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListPublishedSchemaArnsRequest.property.schemaArn"></a>

- *Type:* `string`

---

### CloudDirectoryListPublishedSchemaArnsResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListPublishedSchemaArnsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryListPublishedSchemaArnsResponse: clouddirectory.CloudDirectoryListPublishedSchemaArnsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListPublishedSchemaArnsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `schemaArns`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListPublishedSchemaArnsResponse.property.schemaArns"></a>

- *Type:* `string`[]

---

### CloudDirectoryListTagsForResourceRequest <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryListTagsForResourceRequest: clouddirectory.CloudDirectoryListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListTagsForResourceRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListTagsForResourceRequest.property.nextToken"></a>

- *Type:* `string`

---

### CloudDirectoryListTagsForResourceResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryListTagsForResourceResponse: clouddirectory.CloudDirectoryListTagsForResourceResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListTagsForResourceResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListTagsForResourceResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryTag`](#aws-cdk-sdk.clouddirectory.CloudDirectoryTag)[]

---

### CloudDirectoryListTypedLinkFacetAttributesRequest <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListTypedLinkFacetAttributesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryListTypedLinkFacetAttributesRequest: clouddirectory.CloudDirectoryListTypedLinkFacetAttributesRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListTypedLinkFacetAttributesRequest.property.name"></a>

- *Type:* `string`

---

##### `schemaArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListTypedLinkFacetAttributesRequest.property.schemaArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListTypedLinkFacetAttributesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListTypedLinkFacetAttributesRequest.property.nextToken"></a>

- *Type:* `string`

---

### CloudDirectoryListTypedLinkFacetAttributesResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListTypedLinkFacetAttributesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryListTypedLinkFacetAttributesResponse: clouddirectory.CloudDirectoryListTypedLinkFacetAttributesResponse = { ... }
```

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListTypedLinkFacetAttributesResponse.property.attributes"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkAttributeDefinition`](#aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkAttributeDefinition)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListTypedLinkFacetAttributesResponse.property.nextToken"></a>

- *Type:* `string`

---

### CloudDirectoryListTypedLinkFacetNamesRequest <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListTypedLinkFacetNamesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryListTypedLinkFacetNamesRequest: clouddirectory.CloudDirectoryListTypedLinkFacetNamesRequest = { ... }
```

##### `schemaArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListTypedLinkFacetNamesRequest.property.schemaArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListTypedLinkFacetNamesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListTypedLinkFacetNamesRequest.property.nextToken"></a>

- *Type:* `string`

---

### CloudDirectoryListTypedLinkFacetNamesResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListTypedLinkFacetNamesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryListTypedLinkFacetNamesResponse: clouddirectory.CloudDirectoryListTypedLinkFacetNamesResponse = { ... }
```

##### `facetNames`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListTypedLinkFacetNamesResponse.property.facetNames"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryListTypedLinkFacetNamesResponse.property.nextToken"></a>

- *Type:* `string`

---

### CloudDirectoryLookupPolicyRequest <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryLookupPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryLookupPolicyRequest: clouddirectory.CloudDirectoryLookupPolicyRequest = { ... }
```

##### `directoryArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryLookupPolicyRequest.property.directoryArn"></a>

- *Type:* `string`

---

##### `objectReference`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryLookupPolicyRequest.property.objectReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference)

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryLookupPolicyRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryLookupPolicyRequest.property.nextToken"></a>

- *Type:* `string`

---

### CloudDirectoryLookupPolicyResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryLookupPolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryLookupPolicyResponse: clouddirectory.CloudDirectoryLookupPolicyResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryLookupPolicyResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `policyToPathList`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryLookupPolicyResponse.property.policyToPathList"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryPolicyToPath`](#aws-cdk-sdk.clouddirectory.CloudDirectoryPolicyToPath)[]

---

### CloudDirectoryObjectAttributeAction <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryObjectAttributeAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryObjectAttributeAction: clouddirectory.CloudDirectoryObjectAttributeAction = { ... }
```

##### `objectAttributeActionType`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryObjectAttributeAction.property.objectAttributeActionType"></a>

- *Type:* `string`

---

##### `objectAttributeUpdateValue`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryObjectAttributeAction.property.objectAttributeUpdateValue"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryTypedAttributeValue`](#aws-cdk-sdk.clouddirectory.CloudDirectoryTypedAttributeValue)

---

### CloudDirectoryObjectAttributeRange <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryObjectAttributeRange"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryObjectAttributeRange: clouddirectory.CloudDirectoryObjectAttributeRange = { ... }
```

##### `attributeKey`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryObjectAttributeRange.property.attributeKey"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryAttributeKey`](#aws-cdk-sdk.clouddirectory.CloudDirectoryAttributeKey)

---

##### `range`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryObjectAttributeRange.property.range"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryTypedAttributeValueRange`](#aws-cdk-sdk.clouddirectory.CloudDirectoryTypedAttributeValueRange)

---

### CloudDirectoryObjectAttributeUpdate <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryObjectAttributeUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryObjectAttributeUpdate: clouddirectory.CloudDirectoryObjectAttributeUpdate = { ... }
```

##### `objectAttributeAction`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryObjectAttributeUpdate.property.objectAttributeAction"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectAttributeAction`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectAttributeAction)

---

##### `objectAttributeKey`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryObjectAttributeUpdate.property.objectAttributeKey"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryAttributeKey`](#aws-cdk-sdk.clouddirectory.CloudDirectoryAttributeKey)

---

### CloudDirectoryObjectIdentifierAndLinkNameTuple <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryObjectIdentifierAndLinkNameTuple"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryObjectIdentifierAndLinkNameTuple: clouddirectory.CloudDirectoryObjectIdentifierAndLinkNameTuple = { ... }
```

##### `linkName`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryObjectIdentifierAndLinkNameTuple.property.linkName"></a>

- *Type:* `string`

---

##### `objectIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryObjectIdentifierAndLinkNameTuple.property.objectIdentifier"></a>

- *Type:* `string`

---

### CloudDirectoryObjectReference <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryObjectReference: clouddirectory.CloudDirectoryObjectReference = { ... }
```

##### `selector`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference.property.selector"></a>

- *Type:* `string`

---

### CloudDirectoryPathToObjectIdentifiers <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryPathToObjectIdentifiers"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryPathToObjectIdentifiers: clouddirectory.CloudDirectoryPathToObjectIdentifiers = { ... }
```

##### `objectIdentifiers`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryPathToObjectIdentifiers.property.objectIdentifiers"></a>

- *Type:* `string`[]

---

##### `path`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryPathToObjectIdentifiers.property.path"></a>

- *Type:* `string`

---

### CloudDirectoryPolicyAttachment <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryPolicyAttachment"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryPolicyAttachment: clouddirectory.CloudDirectoryPolicyAttachment = { ... }
```

##### `objectIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryPolicyAttachment.property.objectIdentifier"></a>

- *Type:* `string`

---

##### `policyId`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryPolicyAttachment.property.policyId"></a>

- *Type:* `string`

---

##### `policyType`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryPolicyAttachment.property.policyType"></a>

- *Type:* `string`

---

### CloudDirectoryPolicyToPath <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryPolicyToPath"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryPolicyToPath: clouddirectory.CloudDirectoryPolicyToPath = { ... }
```

##### `path`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryPolicyToPath.property.path"></a>

- *Type:* `string`

---

##### `policies`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryPolicyToPath.property.policies"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryPolicyAttachment`](#aws-cdk-sdk.clouddirectory.CloudDirectoryPolicyAttachment)[]

---

### CloudDirectoryPublishSchemaRequest <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryPublishSchemaRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryPublishSchemaRequest: clouddirectory.CloudDirectoryPublishSchemaRequest = { ... }
```

##### `developmentSchemaArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryPublishSchemaRequest.property.developmentSchemaArn"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryPublishSchemaRequest.property.version"></a>

- *Type:* `string`

---

##### `minorVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryPublishSchemaRequest.property.minorVersion"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryPublishSchemaRequest.property.name"></a>

- *Type:* `string`

---

### CloudDirectoryPublishSchemaResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryPublishSchemaResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryPublishSchemaResponse: clouddirectory.CloudDirectoryPublishSchemaResponse = { ... }
```

##### `publishedSchemaArn`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryPublishSchemaResponse.property.publishedSchemaArn"></a>

- *Type:* `string`

---

### CloudDirectoryPutSchemaFromJsonRequest <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryPutSchemaFromJsonRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryPutSchemaFromJsonRequest: clouddirectory.CloudDirectoryPutSchemaFromJsonRequest = { ... }
```

##### `document`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryPutSchemaFromJsonRequest.property.document"></a>

- *Type:* `string`

---

##### `schemaArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryPutSchemaFromJsonRequest.property.schemaArn"></a>

- *Type:* `string`

---

### CloudDirectoryPutSchemaFromJsonResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryPutSchemaFromJsonResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryPutSchemaFromJsonResponse: clouddirectory.CloudDirectoryPutSchemaFromJsonResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryPutSchemaFromJsonResponse.property.arn"></a>

- *Type:* `string`

---

### CloudDirectoryRemoveFacetFromObjectRequest <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryRemoveFacetFromObjectRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryRemoveFacetFromObjectRequest: clouddirectory.CloudDirectoryRemoveFacetFromObjectRequest = { ... }
```

##### `directoryArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryRemoveFacetFromObjectRequest.property.directoryArn"></a>

- *Type:* `string`

---

##### `objectReference`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryRemoveFacetFromObjectRequest.property.objectReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference)

---

##### `schemaFacet`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryRemoveFacetFromObjectRequest.property.schemaFacet"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectorySchemaFacet`](#aws-cdk-sdk.clouddirectory.CloudDirectorySchemaFacet)

---

### CloudDirectoryRemoveFacetFromObjectResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryRemoveFacetFromObjectResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryRemoveFacetFromObjectResponse: clouddirectory.CloudDirectoryRemoveFacetFromObjectResponse = { ... }
```

### CloudDirectoryRule <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryRule: clouddirectory.CloudDirectoryRule = { ... }
```

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryRule.property.parameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryRule.property.type"></a>

- *Type:* `string`

---

### CloudDirectorySchemaFacet <a name="aws-cdk-sdk.clouddirectory.CloudDirectorySchemaFacet"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectorySchemaFacet: clouddirectory.CloudDirectorySchemaFacet = { ... }
```

##### `facetName`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectorySchemaFacet.property.facetName"></a>

- *Type:* `string`

---

##### `schemaArn`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectorySchemaFacet.property.schemaArn"></a>

- *Type:* `string`

---

### CloudDirectoryTag <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryTag: clouddirectory.CloudDirectoryTag = { ... }
```

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryTag.property.value"></a>

- *Type:* `string`

---

### CloudDirectoryTagResourceRequest <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryTagResourceRequest: clouddirectory.CloudDirectoryTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryTagResourceRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryTag`](#aws-cdk-sdk.clouddirectory.CloudDirectoryTag)[]

---

### CloudDirectoryTagResourceResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryTagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryTagResourceResponse: clouddirectory.CloudDirectoryTagResourceResponse = { ... }
```

### CloudDirectoryTypedAttributeValue <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryTypedAttributeValue"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryTypedAttributeValue: clouddirectory.CloudDirectoryTypedAttributeValue = { ... }
```

##### `binaryValue`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryTypedAttributeValue.property.binaryValue"></a>

- *Type:* `any`

---

##### `booleanValue`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryTypedAttributeValue.property.booleanValue"></a>

- *Type:* `boolean`

---

##### `datetimeValue`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryTypedAttributeValue.property.datetimeValue"></a>

- *Type:* `string`

---

##### `numberValue`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryTypedAttributeValue.property.numberValue"></a>

- *Type:* `string`

---

##### `stringValue`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryTypedAttributeValue.property.stringValue"></a>

- *Type:* `string`

---

### CloudDirectoryTypedAttributeValueRange <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryTypedAttributeValueRange"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryTypedAttributeValueRange: clouddirectory.CloudDirectoryTypedAttributeValueRange = { ... }
```

##### `endMode`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryTypedAttributeValueRange.property.endMode"></a>

- *Type:* `string`

---

##### `startMode`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryTypedAttributeValueRange.property.startMode"></a>

- *Type:* `string`

---

##### `endValue`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryTypedAttributeValueRange.property.endValue"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryTypedAttributeValue`](#aws-cdk-sdk.clouddirectory.CloudDirectoryTypedAttributeValue)

---

##### `startValue`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryTypedAttributeValueRange.property.startValue"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryTypedAttributeValue`](#aws-cdk-sdk.clouddirectory.CloudDirectoryTypedAttributeValue)

---

### CloudDirectoryTypedLinkAttributeDefinition <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkAttributeDefinition"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryTypedLinkAttributeDefinition: clouddirectory.CloudDirectoryTypedLinkAttributeDefinition = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkAttributeDefinition.property.name"></a>

- *Type:* `string`

---

##### `requiredBehavior`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkAttributeDefinition.property.requiredBehavior"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkAttributeDefinition.property.type"></a>

- *Type:* `string`

---

##### `defaultValue`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkAttributeDefinition.property.defaultValue"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryTypedAttributeValue`](#aws-cdk-sdk.clouddirectory.CloudDirectoryTypedAttributeValue)

---

##### `isImmutable`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkAttributeDefinition.property.isImmutable"></a>

- *Type:* `boolean`

---

##### `rules`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkAttributeDefinition.property.rules"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.clouddirectory.CloudDirectoryRule`](#aws-cdk-sdk.clouddirectory.CloudDirectoryRule)}

---

### CloudDirectoryTypedLinkAttributeRange <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkAttributeRange"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryTypedLinkAttributeRange: clouddirectory.CloudDirectoryTypedLinkAttributeRange = { ... }
```

##### `range`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkAttributeRange.property.range"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryTypedAttributeValueRange`](#aws-cdk-sdk.clouddirectory.CloudDirectoryTypedAttributeValueRange)

---

##### `attributeName`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkAttributeRange.property.attributeName"></a>

- *Type:* `string`

---

### CloudDirectoryTypedLinkFacet <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkFacet"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryTypedLinkFacet: clouddirectory.CloudDirectoryTypedLinkFacet = { ... }
```

##### `attributes`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkFacet.property.attributes"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkAttributeDefinition`](#aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkAttributeDefinition)[]

---

##### `identityAttributeOrder`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkFacet.property.identityAttributeOrder"></a>

- *Type:* `string`[]

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkFacet.property.name"></a>

- *Type:* `string`

---

### CloudDirectoryTypedLinkFacetAttributeUpdate <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkFacetAttributeUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryTypedLinkFacetAttributeUpdate: clouddirectory.CloudDirectoryTypedLinkFacetAttributeUpdate = { ... }
```

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkFacetAttributeUpdate.property.action"></a>

- *Type:* `string`

---

##### `attribute`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkFacetAttributeUpdate.property.attribute"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkAttributeDefinition`](#aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkAttributeDefinition)

---

### CloudDirectoryTypedLinkSchemaAndFacetName <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkSchemaAndFacetName"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryTypedLinkSchemaAndFacetName: clouddirectory.CloudDirectoryTypedLinkSchemaAndFacetName = { ... }
```

##### `schemaArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkSchemaAndFacetName.property.schemaArn"></a>

- *Type:* `string`

---

##### `typedLinkName`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkSchemaAndFacetName.property.typedLinkName"></a>

- *Type:* `string`

---

### CloudDirectoryTypedLinkSpecifier <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkSpecifier"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryTypedLinkSpecifier: clouddirectory.CloudDirectoryTypedLinkSpecifier = { ... }
```

##### `identityAttributeValues`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkSpecifier.property.identityAttributeValues"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryAttributeNameAndValue`](#aws-cdk-sdk.clouddirectory.CloudDirectoryAttributeNameAndValue)[]

---

##### `sourceObjectReference`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkSpecifier.property.sourceObjectReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference)

---

##### `targetObjectReference`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkSpecifier.property.targetObjectReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference)

---

##### `typedLinkFacet`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkSpecifier.property.typedLinkFacet"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkSchemaAndFacetName`](#aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkSchemaAndFacetName)

---

### CloudDirectoryUntagResourceRequest <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryUntagResourceRequest: clouddirectory.CloudDirectoryUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### CloudDirectoryUntagResourceResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryUntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryUntagResourceResponse: clouddirectory.CloudDirectoryUntagResourceResponse = { ... }
```

### CloudDirectoryUpdateFacetRequest <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryUpdateFacetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryUpdateFacetRequest: clouddirectory.CloudDirectoryUpdateFacetRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryUpdateFacetRequest.property.name"></a>

- *Type:* `string`

---

##### `schemaArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryUpdateFacetRequest.property.schemaArn"></a>

- *Type:* `string`

---

##### `attributeUpdates`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryUpdateFacetRequest.property.attributeUpdates"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryFacetAttributeUpdate`](#aws-cdk-sdk.clouddirectory.CloudDirectoryFacetAttributeUpdate)[]

---

##### `objectType`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryUpdateFacetRequest.property.objectType"></a>

- *Type:* `string`

---

### CloudDirectoryUpdateFacetResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryUpdateFacetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryUpdateFacetResponse: clouddirectory.CloudDirectoryUpdateFacetResponse = { ... }
```

### CloudDirectoryUpdateLinkAttributesRequest <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryUpdateLinkAttributesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryUpdateLinkAttributesRequest: clouddirectory.CloudDirectoryUpdateLinkAttributesRequest = { ... }
```

##### `attributeUpdates`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryUpdateLinkAttributesRequest.property.attributeUpdates"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryLinkAttributeUpdate`](#aws-cdk-sdk.clouddirectory.CloudDirectoryLinkAttributeUpdate)[]

---

##### `directoryArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryUpdateLinkAttributesRequest.property.directoryArn"></a>

- *Type:* `string`

---

##### `typedLinkSpecifier`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryUpdateLinkAttributesRequest.property.typedLinkSpecifier"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkSpecifier`](#aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkSpecifier)

---

### CloudDirectoryUpdateLinkAttributesResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryUpdateLinkAttributesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryUpdateLinkAttributesResponse: clouddirectory.CloudDirectoryUpdateLinkAttributesResponse = { ... }
```

### CloudDirectoryUpdateObjectAttributesRequest <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryUpdateObjectAttributesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryUpdateObjectAttributesRequest: clouddirectory.CloudDirectoryUpdateObjectAttributesRequest = { ... }
```

##### `attributeUpdates`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryUpdateObjectAttributesRequest.property.attributeUpdates"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectAttributeUpdate`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectAttributeUpdate)[]

---

##### `directoryArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryUpdateObjectAttributesRequest.property.directoryArn"></a>

- *Type:* `string`

---

##### `objectReference`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryUpdateObjectAttributesRequest.property.objectReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectReference)

---

### CloudDirectoryUpdateObjectAttributesResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryUpdateObjectAttributesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryUpdateObjectAttributesResponse: clouddirectory.CloudDirectoryUpdateObjectAttributesResponse = { ... }
```

##### `objectIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryUpdateObjectAttributesResponse.property.objectIdentifier"></a>

- *Type:* `string`

---

### CloudDirectoryUpdateSchemaRequest <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryUpdateSchemaRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryUpdateSchemaRequest: clouddirectory.CloudDirectoryUpdateSchemaRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryUpdateSchemaRequest.property.name"></a>

- *Type:* `string`

---

##### `schemaArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryUpdateSchemaRequest.property.schemaArn"></a>

- *Type:* `string`

---

### CloudDirectoryUpdateSchemaResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryUpdateSchemaResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryUpdateSchemaResponse: clouddirectory.CloudDirectoryUpdateSchemaResponse = { ... }
```

##### `schemaArn`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryUpdateSchemaResponse.property.schemaArn"></a>

- *Type:* `string`

---

### CloudDirectoryUpdateTypedLinkFacetRequest <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryUpdateTypedLinkFacetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryUpdateTypedLinkFacetRequest: clouddirectory.CloudDirectoryUpdateTypedLinkFacetRequest = { ... }
```

##### `attributeUpdates`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryUpdateTypedLinkFacetRequest.property.attributeUpdates"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkFacetAttributeUpdate`](#aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkFacetAttributeUpdate)[]

---

##### `identityAttributeOrder`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryUpdateTypedLinkFacetRequest.property.identityAttributeOrder"></a>

- *Type:* `string`[]

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryUpdateTypedLinkFacetRequest.property.name"></a>

- *Type:* `string`

---

##### `schemaArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryUpdateTypedLinkFacetRequest.property.schemaArn"></a>

- *Type:* `string`

---

### CloudDirectoryUpdateTypedLinkFacetResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryUpdateTypedLinkFacetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryUpdateTypedLinkFacetResponse: clouddirectory.CloudDirectoryUpdateTypedLinkFacetResponse = { ... }
```

### CloudDirectoryUpgradeAppliedSchemaRequest <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryUpgradeAppliedSchemaRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryUpgradeAppliedSchemaRequest: clouddirectory.CloudDirectoryUpgradeAppliedSchemaRequest = { ... }
```

##### `directoryArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryUpgradeAppliedSchemaRequest.property.directoryArn"></a>

- *Type:* `string`

---

##### `publishedSchemaArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryUpgradeAppliedSchemaRequest.property.publishedSchemaArn"></a>

- *Type:* `string`

---

##### `dryRun`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryUpgradeAppliedSchemaRequest.property.dryRun"></a>

- *Type:* `boolean`

---

### CloudDirectoryUpgradeAppliedSchemaResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryUpgradeAppliedSchemaResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryUpgradeAppliedSchemaResponse: clouddirectory.CloudDirectoryUpgradeAppliedSchemaResponse = { ... }
```

##### `directoryArn`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryUpgradeAppliedSchemaResponse.property.directoryArn"></a>

- *Type:* `string`

---

##### `upgradedSchemaArn`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryUpgradeAppliedSchemaResponse.property.upgradedSchemaArn"></a>

- *Type:* `string`

---

### CloudDirectoryUpgradePublishedSchemaRequest <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryUpgradePublishedSchemaRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryUpgradePublishedSchemaRequest: clouddirectory.CloudDirectoryUpgradePublishedSchemaRequest = { ... }
```

##### `developmentSchemaArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryUpgradePublishedSchemaRequest.property.developmentSchemaArn"></a>

- *Type:* `string`

---

##### `minorVersion`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryUpgradePublishedSchemaRequest.property.minorVersion"></a>

- *Type:* `string`

---

##### `publishedSchemaArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryUpgradePublishedSchemaRequest.property.publishedSchemaArn"></a>

- *Type:* `string`

---

##### `dryRun`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryUpgradePublishedSchemaRequest.property.dryRun"></a>

- *Type:* `boolean`

---

### CloudDirectoryUpgradePublishedSchemaResponse <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryUpgradePublishedSchemaResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

const cloudDirectoryUpgradePublishedSchemaResponse: clouddirectory.CloudDirectoryUpgradePublishedSchemaResponse = { ... }
```

##### `upgradedSchemaArn`<sup>Optional</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryUpgradePublishedSchemaResponse.property.upgradedSchemaArn"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### CloudDirectoryResponsesApplySchema <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesApplySchema"></a>

#### Initializer <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesApplySchema.Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

new clouddirectory.CloudDirectoryResponsesApplySchema(__scope: Construct, __resources: string[], __input: CloudDirectoryApplySchemaRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesApplySchema.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesApplySchema.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesApplySchema.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryApplySchemaRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryApplySchemaRequest)

---



#### Properties <a name="Properties"></a>

##### `appliedSchemaArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesApplySchema.property.appliedSchemaArn"></a>

- *Type:* `string`

---

##### `directoryArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesApplySchema.property.directoryArn"></a>

- *Type:* `string`

---


### CloudDirectoryResponsesAttachObject <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesAttachObject"></a>

#### Initializer <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesAttachObject.Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

new clouddirectory.CloudDirectoryResponsesAttachObject(__scope: Construct, __resources: string[], __input: CloudDirectoryAttachObjectRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesAttachObject.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesAttachObject.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesAttachObject.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryAttachObjectRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryAttachObjectRequest)

---



#### Properties <a name="Properties"></a>

##### `attachedObjectIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesAttachObject.property.attachedObjectIdentifier"></a>

- *Type:* `string`

---


### CloudDirectoryResponsesAttachToIndex <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesAttachToIndex"></a>

#### Initializer <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesAttachToIndex.Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

new clouddirectory.CloudDirectoryResponsesAttachToIndex(__scope: Construct, __resources: string[], __input: CloudDirectoryAttachToIndexRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesAttachToIndex.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesAttachToIndex.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesAttachToIndex.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryAttachToIndexRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryAttachToIndexRequest)

---



#### Properties <a name="Properties"></a>

##### `attachedObjectIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesAttachToIndex.property.attachedObjectIdentifier"></a>

- *Type:* `string`

---


### CloudDirectoryResponsesAttachTypedLink <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesAttachTypedLink"></a>

#### Initializer <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesAttachTypedLink.Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

new clouddirectory.CloudDirectoryResponsesAttachTypedLink(__scope: Construct, __resources: string[], __input: CloudDirectoryAttachTypedLinkRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesAttachTypedLink.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesAttachTypedLink.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesAttachTypedLink.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryAttachTypedLinkRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryAttachTypedLinkRequest)

---



#### Properties <a name="Properties"></a>

##### `typedLinkSpecifier`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesAttachTypedLink.property.typedLinkSpecifier"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesAttachTypedLinkTypedLinkSpecifier`](#aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesAttachTypedLinkTypedLinkSpecifier)

---


### CloudDirectoryResponsesAttachTypedLinkTypedLinkSpecifier <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesAttachTypedLinkTypedLinkSpecifier"></a>

#### Initializer <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesAttachTypedLinkTypedLinkSpecifier.Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

new clouddirectory.CloudDirectoryResponsesAttachTypedLinkTypedLinkSpecifier(__scope: Construct, __resources: string[], __input: CloudDirectoryAttachTypedLinkRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesAttachTypedLinkTypedLinkSpecifier.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesAttachTypedLinkTypedLinkSpecifier.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesAttachTypedLinkTypedLinkSpecifier.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryAttachTypedLinkRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryAttachTypedLinkRequest)

---



#### Properties <a name="Properties"></a>

##### `identityAttributeValues`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesAttachTypedLinkTypedLinkSpecifier.property.identityAttributeValues"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryAttributeNameAndValue`](#aws-cdk-sdk.clouddirectory.CloudDirectoryAttributeNameAndValue)[]

---

##### `sourceObjectReference`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesAttachTypedLinkTypedLinkSpecifier.property.sourceObjectReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesAttachTypedLinkTypedLinkSpecifierSourceObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesAttachTypedLinkTypedLinkSpecifierSourceObjectReference)

---

##### `targetObjectReference`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesAttachTypedLinkTypedLinkSpecifier.property.targetObjectReference"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesAttachTypedLinkTypedLinkSpecifierTargetObjectReference`](#aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesAttachTypedLinkTypedLinkSpecifierTargetObjectReference)

---

##### `typedLinkFacet`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesAttachTypedLinkTypedLinkSpecifier.property.typedLinkFacet"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesAttachTypedLinkTypedLinkSpecifierTypedLinkFacet`](#aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesAttachTypedLinkTypedLinkSpecifierTypedLinkFacet)

---


### CloudDirectoryResponsesAttachTypedLinkTypedLinkSpecifierSourceObjectReference <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesAttachTypedLinkTypedLinkSpecifierSourceObjectReference"></a>

#### Initializer <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesAttachTypedLinkTypedLinkSpecifierSourceObjectReference.Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

new clouddirectory.CloudDirectoryResponsesAttachTypedLinkTypedLinkSpecifierSourceObjectReference(__scope: Construct, __resources: string[], __input: CloudDirectoryAttachTypedLinkRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesAttachTypedLinkTypedLinkSpecifierSourceObjectReference.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesAttachTypedLinkTypedLinkSpecifierSourceObjectReference.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesAttachTypedLinkTypedLinkSpecifierSourceObjectReference.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryAttachTypedLinkRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryAttachTypedLinkRequest)

---



#### Properties <a name="Properties"></a>

##### `selector`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesAttachTypedLinkTypedLinkSpecifierSourceObjectReference.property.selector"></a>

- *Type:* `string`

---


### CloudDirectoryResponsesAttachTypedLinkTypedLinkSpecifierTargetObjectReference <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesAttachTypedLinkTypedLinkSpecifierTargetObjectReference"></a>

#### Initializer <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesAttachTypedLinkTypedLinkSpecifierTargetObjectReference.Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

new clouddirectory.CloudDirectoryResponsesAttachTypedLinkTypedLinkSpecifierTargetObjectReference(__scope: Construct, __resources: string[], __input: CloudDirectoryAttachTypedLinkRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesAttachTypedLinkTypedLinkSpecifierTargetObjectReference.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesAttachTypedLinkTypedLinkSpecifierTargetObjectReference.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesAttachTypedLinkTypedLinkSpecifierTargetObjectReference.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryAttachTypedLinkRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryAttachTypedLinkRequest)

---



#### Properties <a name="Properties"></a>

##### `selector`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesAttachTypedLinkTypedLinkSpecifierTargetObjectReference.property.selector"></a>

- *Type:* `string`

---


### CloudDirectoryResponsesAttachTypedLinkTypedLinkSpecifierTypedLinkFacet <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesAttachTypedLinkTypedLinkSpecifierTypedLinkFacet"></a>

#### Initializer <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesAttachTypedLinkTypedLinkSpecifierTypedLinkFacet.Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

new clouddirectory.CloudDirectoryResponsesAttachTypedLinkTypedLinkSpecifierTypedLinkFacet(__scope: Construct, __resources: string[], __input: CloudDirectoryAttachTypedLinkRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesAttachTypedLinkTypedLinkSpecifierTypedLinkFacet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesAttachTypedLinkTypedLinkSpecifierTypedLinkFacet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesAttachTypedLinkTypedLinkSpecifierTypedLinkFacet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryAttachTypedLinkRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryAttachTypedLinkRequest)

---



#### Properties <a name="Properties"></a>

##### `schemaArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesAttachTypedLinkTypedLinkSpecifierTypedLinkFacet.property.schemaArn"></a>

- *Type:* `string`

---

##### `typedLinkName`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesAttachTypedLinkTypedLinkSpecifierTypedLinkFacet.property.typedLinkName"></a>

- *Type:* `string`

---


### CloudDirectoryResponsesBatchRead <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesBatchRead"></a>

#### Initializer <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesBatchRead.Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

new clouddirectory.CloudDirectoryResponsesBatchRead(__scope: Construct, __resources: string[], __input: CloudDirectoryBatchReadRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesBatchRead.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesBatchRead.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesBatchRead.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchReadRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchReadRequest)

---



#### Properties <a name="Properties"></a>

##### `responses`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesBatchRead.property.responses"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchReadOperationResponse`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchReadOperationResponse)[]

---


### CloudDirectoryResponsesBatchWrite <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesBatchWrite"></a>

#### Initializer <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesBatchWrite.Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

new clouddirectory.CloudDirectoryResponsesBatchWrite(__scope: Construct, __resources: string[], __input: CloudDirectoryBatchWriteRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesBatchWrite.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesBatchWrite.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesBatchWrite.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchWriteRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchWriteRequest)

---



#### Properties <a name="Properties"></a>

##### `responses`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesBatchWrite.property.responses"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryBatchWriteOperationResponse`](#aws-cdk-sdk.clouddirectory.CloudDirectoryBatchWriteOperationResponse)[]

---


### CloudDirectoryResponsesCreateDirectory <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesCreateDirectory"></a>

#### Initializer <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesCreateDirectory.Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

new clouddirectory.CloudDirectoryResponsesCreateDirectory(__scope: Construct, __resources: string[], __input: CloudDirectoryCreateDirectoryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesCreateDirectory.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesCreateDirectory.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesCreateDirectory.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryCreateDirectoryRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryCreateDirectoryRequest)

---



#### Properties <a name="Properties"></a>

##### `appliedSchemaArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesCreateDirectory.property.appliedSchemaArn"></a>

- *Type:* `string`

---

##### `directoryArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesCreateDirectory.property.directoryArn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesCreateDirectory.property.name"></a>

- *Type:* `string`

---

##### `objectIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesCreateDirectory.property.objectIdentifier"></a>

- *Type:* `string`

---


### CloudDirectoryResponsesCreateIndex <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesCreateIndex"></a>

#### Initializer <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesCreateIndex.Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

new clouddirectory.CloudDirectoryResponsesCreateIndex(__scope: Construct, __resources: string[], __input: CloudDirectoryCreateIndexRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesCreateIndex.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesCreateIndex.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesCreateIndex.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryCreateIndexRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryCreateIndexRequest)

---



#### Properties <a name="Properties"></a>

##### `objectIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesCreateIndex.property.objectIdentifier"></a>

- *Type:* `string`

---


### CloudDirectoryResponsesCreateObject <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesCreateObject"></a>

#### Initializer <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesCreateObject.Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

new clouddirectory.CloudDirectoryResponsesCreateObject(__scope: Construct, __resources: string[], __input: CloudDirectoryCreateObjectRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesCreateObject.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesCreateObject.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesCreateObject.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryCreateObjectRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryCreateObjectRequest)

---



#### Properties <a name="Properties"></a>

##### `objectIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesCreateObject.property.objectIdentifier"></a>

- *Type:* `string`

---


### CloudDirectoryResponsesCreateSchema <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesCreateSchema"></a>

#### Initializer <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesCreateSchema.Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

new clouddirectory.CloudDirectoryResponsesCreateSchema(__scope: Construct, __resources: string[], __input: CloudDirectoryCreateSchemaRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesCreateSchema.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesCreateSchema.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesCreateSchema.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryCreateSchemaRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryCreateSchemaRequest)

---



#### Properties <a name="Properties"></a>

##### `schemaArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesCreateSchema.property.schemaArn"></a>

- *Type:* `string`

---


### CloudDirectoryResponsesDeleteDirectory <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesDeleteDirectory"></a>

#### Initializer <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesDeleteDirectory.Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

new clouddirectory.CloudDirectoryResponsesDeleteDirectory(__scope: Construct, __resources: string[], __input: CloudDirectoryDeleteDirectoryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesDeleteDirectory.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesDeleteDirectory.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesDeleteDirectory.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryDeleteDirectoryRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryDeleteDirectoryRequest)

---



#### Properties <a name="Properties"></a>

##### `directoryArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesDeleteDirectory.property.directoryArn"></a>

- *Type:* `string`

---


### CloudDirectoryResponsesDeleteSchema <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesDeleteSchema"></a>

#### Initializer <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesDeleteSchema.Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

new clouddirectory.CloudDirectoryResponsesDeleteSchema(__scope: Construct, __resources: string[], __input: CloudDirectoryDeleteSchemaRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesDeleteSchema.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesDeleteSchema.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesDeleteSchema.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryDeleteSchemaRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryDeleteSchemaRequest)

---



#### Properties <a name="Properties"></a>

##### `schemaArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesDeleteSchema.property.schemaArn"></a>

- *Type:* `string`

---


### CloudDirectoryResponsesDetachFromIndex <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesDetachFromIndex"></a>

#### Initializer <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesDetachFromIndex.Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

new clouddirectory.CloudDirectoryResponsesDetachFromIndex(__scope: Construct, __resources: string[], __input: CloudDirectoryDetachFromIndexRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesDetachFromIndex.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesDetachFromIndex.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesDetachFromIndex.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryDetachFromIndexRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryDetachFromIndexRequest)

---



#### Properties <a name="Properties"></a>

##### `detachedObjectIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesDetachFromIndex.property.detachedObjectIdentifier"></a>

- *Type:* `string`

---


### CloudDirectoryResponsesDetachObject <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesDetachObject"></a>

#### Initializer <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesDetachObject.Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

new clouddirectory.CloudDirectoryResponsesDetachObject(__scope: Construct, __resources: string[], __input: CloudDirectoryDetachObjectRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesDetachObject.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesDetachObject.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesDetachObject.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryDetachObjectRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryDetachObjectRequest)

---



#### Properties <a name="Properties"></a>

##### `detachedObjectIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesDetachObject.property.detachedObjectIdentifier"></a>

- *Type:* `string`

---


### CloudDirectoryResponsesDisableDirectory <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesDisableDirectory"></a>

#### Initializer <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesDisableDirectory.Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

new clouddirectory.CloudDirectoryResponsesDisableDirectory(__scope: Construct, __resources: string[], __input: CloudDirectoryDisableDirectoryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesDisableDirectory.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesDisableDirectory.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesDisableDirectory.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryDisableDirectoryRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryDisableDirectoryRequest)

---



#### Properties <a name="Properties"></a>

##### `directoryArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesDisableDirectory.property.directoryArn"></a>

- *Type:* `string`

---


### CloudDirectoryResponsesEnableDirectory <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesEnableDirectory"></a>

#### Initializer <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesEnableDirectory.Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

new clouddirectory.CloudDirectoryResponsesEnableDirectory(__scope: Construct, __resources: string[], __input: CloudDirectoryEnableDirectoryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesEnableDirectory.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesEnableDirectory.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesEnableDirectory.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryEnableDirectoryRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryEnableDirectoryRequest)

---



#### Properties <a name="Properties"></a>

##### `directoryArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesEnableDirectory.property.directoryArn"></a>

- *Type:* `string`

---


### CloudDirectoryResponsesFetchAppliedSchemaVersion <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchAppliedSchemaVersion"></a>

#### Initializer <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchAppliedSchemaVersion.Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

new clouddirectory.CloudDirectoryResponsesFetchAppliedSchemaVersion(__scope: Construct, __resources: string[], __input: CloudDirectoryGetAppliedSchemaVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchAppliedSchemaVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchAppliedSchemaVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchAppliedSchemaVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryGetAppliedSchemaVersionRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryGetAppliedSchemaVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `appliedSchemaArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchAppliedSchemaVersion.property.appliedSchemaArn"></a>

- *Type:* `string`

---


### CloudDirectoryResponsesFetchDirectory <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchDirectory"></a>

#### Initializer <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchDirectory.Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

new clouddirectory.CloudDirectoryResponsesFetchDirectory(__scope: Construct, __resources: string[], __input: CloudDirectoryGetDirectoryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchDirectory.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchDirectory.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchDirectory.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryGetDirectoryRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryGetDirectoryRequest)

---



#### Properties <a name="Properties"></a>

##### `directory`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchDirectory.property.directory"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchDirectoryDirectory`](#aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchDirectoryDirectory)

---


### CloudDirectoryResponsesFetchDirectoryDirectory <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchDirectoryDirectory"></a>

#### Initializer <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchDirectoryDirectory.Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

new clouddirectory.CloudDirectoryResponsesFetchDirectoryDirectory(__scope: Construct, __resources: string[], __input: CloudDirectoryGetDirectoryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchDirectoryDirectory.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchDirectoryDirectory.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchDirectoryDirectory.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryGetDirectoryRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryGetDirectoryRequest)

---



#### Properties <a name="Properties"></a>

##### `creationDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchDirectoryDirectory.property.creationDateTime"></a>

- *Type:* `string`

---

##### `directoryArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchDirectoryDirectory.property.directoryArn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchDirectoryDirectory.property.name"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchDirectoryDirectory.property.state"></a>

- *Type:* `string`

---


### CloudDirectoryResponsesFetchFacet <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchFacet"></a>

#### Initializer <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchFacet.Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

new clouddirectory.CloudDirectoryResponsesFetchFacet(__scope: Construct, __resources: string[], __input: CloudDirectoryGetFacetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchFacet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchFacet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchFacet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryGetFacetRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryGetFacetRequest)

---



#### Properties <a name="Properties"></a>

##### `facet`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchFacet.property.facet"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchFacetFacet`](#aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchFacetFacet)

---


### CloudDirectoryResponsesFetchFacetFacet <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchFacetFacet"></a>

#### Initializer <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchFacetFacet.Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

new clouddirectory.CloudDirectoryResponsesFetchFacetFacet(__scope: Construct, __resources: string[], __input: CloudDirectoryGetFacetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchFacetFacet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchFacetFacet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchFacetFacet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryGetFacetRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryGetFacetRequest)

---



#### Properties <a name="Properties"></a>

##### `facetStyle`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchFacetFacet.property.facetStyle"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchFacetFacet.property.name"></a>

- *Type:* `string`

---

##### `objectType`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchFacetFacet.property.objectType"></a>

- *Type:* `string`

---


### CloudDirectoryResponsesFetchLinkAttributes <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchLinkAttributes"></a>

#### Initializer <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchLinkAttributes.Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

new clouddirectory.CloudDirectoryResponsesFetchLinkAttributes(__scope: Construct, __resources: string[], __input: CloudDirectoryGetLinkAttributesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchLinkAttributes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchLinkAttributes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchLinkAttributes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryGetLinkAttributesRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryGetLinkAttributesRequest)

---



#### Properties <a name="Properties"></a>

##### `attributes`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchLinkAttributes.property.attributes"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryAttributeKeyAndValue`](#aws-cdk-sdk.clouddirectory.CloudDirectoryAttributeKeyAndValue)[]

---


### CloudDirectoryResponsesFetchObjectAttributes <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchObjectAttributes"></a>

#### Initializer <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchObjectAttributes.Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

new clouddirectory.CloudDirectoryResponsesFetchObjectAttributes(__scope: Construct, __resources: string[], __input: CloudDirectoryGetObjectAttributesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchObjectAttributes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchObjectAttributes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchObjectAttributes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryGetObjectAttributesRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryGetObjectAttributesRequest)

---



#### Properties <a name="Properties"></a>

##### `attributes`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchObjectAttributes.property.attributes"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryAttributeKeyAndValue`](#aws-cdk-sdk.clouddirectory.CloudDirectoryAttributeKeyAndValue)[]

---


### CloudDirectoryResponsesFetchObjectInformation <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchObjectInformation"></a>

#### Initializer <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchObjectInformation.Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

new clouddirectory.CloudDirectoryResponsesFetchObjectInformation(__scope: Construct, __resources: string[], __input: CloudDirectoryGetObjectInformationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchObjectInformation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchObjectInformation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchObjectInformation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryGetObjectInformationRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryGetObjectInformationRequest)

---



#### Properties <a name="Properties"></a>

##### `objectIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchObjectInformation.property.objectIdentifier"></a>

- *Type:* `string`

---

##### `schemaFacets`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchObjectInformation.property.schemaFacets"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectorySchemaFacet`](#aws-cdk-sdk.clouddirectory.CloudDirectorySchemaFacet)[]

---


### CloudDirectoryResponsesFetchSchemaAsJson <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchSchemaAsJson"></a>

#### Initializer <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchSchemaAsJson.Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

new clouddirectory.CloudDirectoryResponsesFetchSchemaAsJson(__scope: Construct, __resources: string[], __input: CloudDirectoryGetSchemaAsJsonRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchSchemaAsJson.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchSchemaAsJson.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchSchemaAsJson.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryGetSchemaAsJsonRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryGetSchemaAsJsonRequest)

---



#### Properties <a name="Properties"></a>

##### `document`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchSchemaAsJson.property.document"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchSchemaAsJson.property.name"></a>

- *Type:* `string`

---


### CloudDirectoryResponsesFetchTypedLinkFacetInformation <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchTypedLinkFacetInformation"></a>

#### Initializer <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchTypedLinkFacetInformation.Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

new clouddirectory.CloudDirectoryResponsesFetchTypedLinkFacetInformation(__scope: Construct, __resources: string[], __input: CloudDirectoryGetTypedLinkFacetInformationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchTypedLinkFacetInformation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchTypedLinkFacetInformation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchTypedLinkFacetInformation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryGetTypedLinkFacetInformationRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryGetTypedLinkFacetInformationRequest)

---



#### Properties <a name="Properties"></a>

##### `identityAttributeOrder`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesFetchTypedLinkFacetInformation.property.identityAttributeOrder"></a>

- *Type:* `string`[]

---


### CloudDirectoryResponsesListAppliedSchemaArns <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListAppliedSchemaArns"></a>

#### Initializer <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListAppliedSchemaArns.Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

new clouddirectory.CloudDirectoryResponsesListAppliedSchemaArns(__scope: Construct, __resources: string[], __input: CloudDirectoryListAppliedSchemaArnsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListAppliedSchemaArns.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListAppliedSchemaArns.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListAppliedSchemaArns.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryListAppliedSchemaArnsRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryListAppliedSchemaArnsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListAppliedSchemaArns.property.nextToken"></a>

- *Type:* `string`

---

##### `schemaArns`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListAppliedSchemaArns.property.schemaArns"></a>

- *Type:* `string`[]

---


### CloudDirectoryResponsesListAttachedIndices <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListAttachedIndices"></a>

#### Initializer <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListAttachedIndices.Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

new clouddirectory.CloudDirectoryResponsesListAttachedIndices(__scope: Construct, __resources: string[], __input: CloudDirectoryListAttachedIndicesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListAttachedIndices.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListAttachedIndices.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListAttachedIndices.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryListAttachedIndicesRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryListAttachedIndicesRequest)

---



#### Properties <a name="Properties"></a>

##### `indexAttachments`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListAttachedIndices.property.indexAttachments"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryIndexAttachment`](#aws-cdk-sdk.clouddirectory.CloudDirectoryIndexAttachment)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListAttachedIndices.property.nextToken"></a>

- *Type:* `string`

---


### CloudDirectoryResponsesListDevelopmentSchemaArns <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListDevelopmentSchemaArns"></a>

#### Initializer <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListDevelopmentSchemaArns.Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

new clouddirectory.CloudDirectoryResponsesListDevelopmentSchemaArns(__scope: Construct, __resources: string[], __input: CloudDirectoryListDevelopmentSchemaArnsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListDevelopmentSchemaArns.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListDevelopmentSchemaArns.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListDevelopmentSchemaArns.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryListDevelopmentSchemaArnsRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryListDevelopmentSchemaArnsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListDevelopmentSchemaArns.property.nextToken"></a>

- *Type:* `string`

---

##### `schemaArns`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListDevelopmentSchemaArns.property.schemaArns"></a>

- *Type:* `string`[]

---


### CloudDirectoryResponsesListDirectories <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListDirectories"></a>

#### Initializer <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListDirectories.Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

new clouddirectory.CloudDirectoryResponsesListDirectories(__scope: Construct, __resources: string[], __input: CloudDirectoryListDirectoriesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListDirectories.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListDirectories.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListDirectories.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryListDirectoriesRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryListDirectoriesRequest)

---



#### Properties <a name="Properties"></a>

##### `directories`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListDirectories.property.directories"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryDirectory`](#aws-cdk-sdk.clouddirectory.CloudDirectoryDirectory)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListDirectories.property.nextToken"></a>

- *Type:* `string`

---


### CloudDirectoryResponsesListFacetAttributes <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListFacetAttributes"></a>

#### Initializer <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListFacetAttributes.Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

new clouddirectory.CloudDirectoryResponsesListFacetAttributes(__scope: Construct, __resources: string[], __input: CloudDirectoryListFacetAttributesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListFacetAttributes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListFacetAttributes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListFacetAttributes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryListFacetAttributesRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryListFacetAttributesRequest)

---



#### Properties <a name="Properties"></a>

##### `attributes`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListFacetAttributes.property.attributes"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryFacetAttribute`](#aws-cdk-sdk.clouddirectory.CloudDirectoryFacetAttribute)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListFacetAttributes.property.nextToken"></a>

- *Type:* `string`

---


### CloudDirectoryResponsesListFacetNames <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListFacetNames"></a>

#### Initializer <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListFacetNames.Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

new clouddirectory.CloudDirectoryResponsesListFacetNames(__scope: Construct, __resources: string[], __input: CloudDirectoryListFacetNamesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListFacetNames.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListFacetNames.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListFacetNames.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryListFacetNamesRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryListFacetNamesRequest)

---



#### Properties <a name="Properties"></a>

##### `facetNames`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListFacetNames.property.facetNames"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListFacetNames.property.nextToken"></a>

- *Type:* `string`

---


### CloudDirectoryResponsesListIncomingTypedLinks <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListIncomingTypedLinks"></a>

#### Initializer <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListIncomingTypedLinks.Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

new clouddirectory.CloudDirectoryResponsesListIncomingTypedLinks(__scope: Construct, __resources: string[], __input: CloudDirectoryListIncomingTypedLinksRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListIncomingTypedLinks.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListIncomingTypedLinks.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListIncomingTypedLinks.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryListIncomingTypedLinksRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryListIncomingTypedLinksRequest)

---



#### Properties <a name="Properties"></a>

##### `linkSpecifiers`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListIncomingTypedLinks.property.linkSpecifiers"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkSpecifier`](#aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkSpecifier)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListIncomingTypedLinks.property.nextToken"></a>

- *Type:* `string`

---


### CloudDirectoryResponsesListIndex <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListIndex"></a>

#### Initializer <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListIndex.Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

new clouddirectory.CloudDirectoryResponsesListIndex(__scope: Construct, __resources: string[], __input: CloudDirectoryListIndexRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListIndex.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListIndex.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListIndex.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryListIndexRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryListIndexRequest)

---



#### Properties <a name="Properties"></a>

##### `indexAttachments`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListIndex.property.indexAttachments"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryIndexAttachment`](#aws-cdk-sdk.clouddirectory.CloudDirectoryIndexAttachment)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListIndex.property.nextToken"></a>

- *Type:* `string`

---


### CloudDirectoryResponsesListManagedSchemaArns <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListManagedSchemaArns"></a>

#### Initializer <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListManagedSchemaArns.Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

new clouddirectory.CloudDirectoryResponsesListManagedSchemaArns(__scope: Construct, __resources: string[], __input: CloudDirectoryListManagedSchemaArnsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListManagedSchemaArns.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListManagedSchemaArns.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListManagedSchemaArns.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryListManagedSchemaArnsRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryListManagedSchemaArnsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListManagedSchemaArns.property.nextToken"></a>

- *Type:* `string`

---

##### `schemaArns`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListManagedSchemaArns.property.schemaArns"></a>

- *Type:* `string`[]

---


### CloudDirectoryResponsesListObjectAttributes <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListObjectAttributes"></a>

#### Initializer <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListObjectAttributes.Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

new clouddirectory.CloudDirectoryResponsesListObjectAttributes(__scope: Construct, __resources: string[], __input: CloudDirectoryListObjectAttributesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListObjectAttributes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListObjectAttributes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListObjectAttributes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectAttributesRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectAttributesRequest)

---



#### Properties <a name="Properties"></a>

##### `attributes`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListObjectAttributes.property.attributes"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryAttributeKeyAndValue`](#aws-cdk-sdk.clouddirectory.CloudDirectoryAttributeKeyAndValue)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListObjectAttributes.property.nextToken"></a>

- *Type:* `string`

---


### CloudDirectoryResponsesListObjectChildren <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListObjectChildren"></a>

#### Initializer <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListObjectChildren.Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

new clouddirectory.CloudDirectoryResponsesListObjectChildren(__scope: Construct, __resources: string[], __input: CloudDirectoryListObjectChildrenRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListObjectChildren.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListObjectChildren.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListObjectChildren.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectChildrenRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectChildrenRequest)

---



#### Properties <a name="Properties"></a>

##### `children`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListObjectChildren.property.children"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListObjectChildren.property.nextToken"></a>

- *Type:* `string`

---


### CloudDirectoryResponsesListObjectParentPaths <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListObjectParentPaths"></a>

#### Initializer <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListObjectParentPaths.Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

new clouddirectory.CloudDirectoryResponsesListObjectParentPaths(__scope: Construct, __resources: string[], __input: CloudDirectoryListObjectParentPathsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListObjectParentPaths.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListObjectParentPaths.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListObjectParentPaths.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectParentPathsRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectParentPathsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListObjectParentPaths.property.nextToken"></a>

- *Type:* `string`

---

##### `pathToObjectIdentifiersList`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListObjectParentPaths.property.pathToObjectIdentifiersList"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryPathToObjectIdentifiers`](#aws-cdk-sdk.clouddirectory.CloudDirectoryPathToObjectIdentifiers)[]

---


### CloudDirectoryResponsesListObjectParents <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListObjectParents"></a>

#### Initializer <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListObjectParents.Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

new clouddirectory.CloudDirectoryResponsesListObjectParents(__scope: Construct, __resources: string[], __input: CloudDirectoryListObjectParentsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListObjectParents.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListObjectParents.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListObjectParents.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectParentsRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectParentsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListObjectParents.property.nextToken"></a>

- *Type:* `string`

---

##### `parentLinks`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListObjectParents.property.parentLinks"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryObjectIdentifierAndLinkNameTuple`](#aws-cdk-sdk.clouddirectory.CloudDirectoryObjectIdentifierAndLinkNameTuple)[]

---

##### `parents`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListObjectParents.property.parents"></a>

- *Type:* {[ key: string ]: `string`}

---


### CloudDirectoryResponsesListObjectPolicies <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListObjectPolicies"></a>

#### Initializer <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListObjectPolicies.Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

new clouddirectory.CloudDirectoryResponsesListObjectPolicies(__scope: Construct, __resources: string[], __input: CloudDirectoryListObjectPoliciesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListObjectPolicies.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListObjectPolicies.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListObjectPolicies.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectPoliciesRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryListObjectPoliciesRequest)

---



#### Properties <a name="Properties"></a>

##### `attachedPolicyIds`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListObjectPolicies.property.attachedPolicyIds"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListObjectPolicies.property.nextToken"></a>

- *Type:* `string`

---


### CloudDirectoryResponsesListOutgoingTypedLinks <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListOutgoingTypedLinks"></a>

#### Initializer <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListOutgoingTypedLinks.Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

new clouddirectory.CloudDirectoryResponsesListOutgoingTypedLinks(__scope: Construct, __resources: string[], __input: CloudDirectoryListOutgoingTypedLinksRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListOutgoingTypedLinks.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListOutgoingTypedLinks.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListOutgoingTypedLinks.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryListOutgoingTypedLinksRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryListOutgoingTypedLinksRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListOutgoingTypedLinks.property.nextToken"></a>

- *Type:* `string`

---

##### `typedLinkSpecifiers`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListOutgoingTypedLinks.property.typedLinkSpecifiers"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkSpecifier`](#aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkSpecifier)[]

---


### CloudDirectoryResponsesListPolicyAttachments <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListPolicyAttachments"></a>

#### Initializer <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListPolicyAttachments.Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

new clouddirectory.CloudDirectoryResponsesListPolicyAttachments(__scope: Construct, __resources: string[], __input: CloudDirectoryListPolicyAttachmentsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListPolicyAttachments.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListPolicyAttachments.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListPolicyAttachments.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryListPolicyAttachmentsRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryListPolicyAttachmentsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListPolicyAttachments.property.nextToken"></a>

- *Type:* `string`

---

##### `objectIdentifiers`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListPolicyAttachments.property.objectIdentifiers"></a>

- *Type:* `string`[]

---


### CloudDirectoryResponsesListPublishedSchemaArns <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListPublishedSchemaArns"></a>

#### Initializer <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListPublishedSchemaArns.Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

new clouddirectory.CloudDirectoryResponsesListPublishedSchemaArns(__scope: Construct, __resources: string[], __input: CloudDirectoryListPublishedSchemaArnsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListPublishedSchemaArns.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListPublishedSchemaArns.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListPublishedSchemaArns.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryListPublishedSchemaArnsRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryListPublishedSchemaArnsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListPublishedSchemaArns.property.nextToken"></a>

- *Type:* `string`

---

##### `schemaArns`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListPublishedSchemaArns.property.schemaArns"></a>

- *Type:* `string`[]

---


### CloudDirectoryResponsesListTagsForResource <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListTagsForResource.Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

new clouddirectory.CloudDirectoryResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: CloudDirectoryListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryListTagsForResourceRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListTagsForResource.property.nextToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListTagsForResource.property.tags"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryTag`](#aws-cdk-sdk.clouddirectory.CloudDirectoryTag)[]

---


### CloudDirectoryResponsesListTypedLinkFacetAttributes <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListTypedLinkFacetAttributes"></a>

#### Initializer <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListTypedLinkFacetAttributes.Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

new clouddirectory.CloudDirectoryResponsesListTypedLinkFacetAttributes(__scope: Construct, __resources: string[], __input: CloudDirectoryListTypedLinkFacetAttributesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListTypedLinkFacetAttributes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListTypedLinkFacetAttributes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListTypedLinkFacetAttributes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryListTypedLinkFacetAttributesRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryListTypedLinkFacetAttributesRequest)

---



#### Properties <a name="Properties"></a>

##### `attributes`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListTypedLinkFacetAttributes.property.attributes"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkAttributeDefinition`](#aws-cdk-sdk.clouddirectory.CloudDirectoryTypedLinkAttributeDefinition)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListTypedLinkFacetAttributes.property.nextToken"></a>

- *Type:* `string`

---


### CloudDirectoryResponsesListTypedLinkFacetNames <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListTypedLinkFacetNames"></a>

#### Initializer <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListTypedLinkFacetNames.Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

new clouddirectory.CloudDirectoryResponsesListTypedLinkFacetNames(__scope: Construct, __resources: string[], __input: CloudDirectoryListTypedLinkFacetNamesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListTypedLinkFacetNames.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListTypedLinkFacetNames.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListTypedLinkFacetNames.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryListTypedLinkFacetNamesRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryListTypedLinkFacetNamesRequest)

---



#### Properties <a name="Properties"></a>

##### `facetNames`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListTypedLinkFacetNames.property.facetNames"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesListTypedLinkFacetNames.property.nextToken"></a>

- *Type:* `string`

---


### CloudDirectoryResponsesLookupPolicy <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesLookupPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesLookupPolicy.Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

new clouddirectory.CloudDirectoryResponsesLookupPolicy(__scope: Construct, __resources: string[], __input: CloudDirectoryLookupPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesLookupPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesLookupPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesLookupPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryLookupPolicyRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryLookupPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesLookupPolicy.property.nextToken"></a>

- *Type:* `string`

---

##### `policyToPathList`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesLookupPolicy.property.policyToPathList"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryPolicyToPath`](#aws-cdk-sdk.clouddirectory.CloudDirectoryPolicyToPath)[]

---


### CloudDirectoryResponsesPublishSchema <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesPublishSchema"></a>

#### Initializer <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesPublishSchema.Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

new clouddirectory.CloudDirectoryResponsesPublishSchema(__scope: Construct, __resources: string[], __input: CloudDirectoryPublishSchemaRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesPublishSchema.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesPublishSchema.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesPublishSchema.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryPublishSchemaRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryPublishSchemaRequest)

---



#### Properties <a name="Properties"></a>

##### `publishedSchemaArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesPublishSchema.property.publishedSchemaArn"></a>

- *Type:* `string`

---


### CloudDirectoryResponsesPutSchemaFromJson <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesPutSchemaFromJson"></a>

#### Initializer <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesPutSchemaFromJson.Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

new clouddirectory.CloudDirectoryResponsesPutSchemaFromJson(__scope: Construct, __resources: string[], __input: CloudDirectoryPutSchemaFromJsonRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesPutSchemaFromJson.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesPutSchemaFromJson.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesPutSchemaFromJson.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryPutSchemaFromJsonRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryPutSchemaFromJsonRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesPutSchemaFromJson.property.arn"></a>

- *Type:* `string`

---


### CloudDirectoryResponsesUpdateObjectAttributes <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesUpdateObjectAttributes"></a>

#### Initializer <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesUpdateObjectAttributes.Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

new clouddirectory.CloudDirectoryResponsesUpdateObjectAttributes(__scope: Construct, __resources: string[], __input: CloudDirectoryUpdateObjectAttributesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesUpdateObjectAttributes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesUpdateObjectAttributes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesUpdateObjectAttributes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryUpdateObjectAttributesRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryUpdateObjectAttributesRequest)

---



#### Properties <a name="Properties"></a>

##### `objectIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesUpdateObjectAttributes.property.objectIdentifier"></a>

- *Type:* `string`

---


### CloudDirectoryResponsesUpdateSchema <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesUpdateSchema"></a>

#### Initializer <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesUpdateSchema.Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

new clouddirectory.CloudDirectoryResponsesUpdateSchema(__scope: Construct, __resources: string[], __input: CloudDirectoryUpdateSchemaRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesUpdateSchema.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesUpdateSchema.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesUpdateSchema.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryUpdateSchemaRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryUpdateSchemaRequest)

---



#### Properties <a name="Properties"></a>

##### `schemaArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesUpdateSchema.property.schemaArn"></a>

- *Type:* `string`

---


### CloudDirectoryResponsesUpgradeAppliedSchema <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesUpgradeAppliedSchema"></a>

#### Initializer <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesUpgradeAppliedSchema.Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

new clouddirectory.CloudDirectoryResponsesUpgradeAppliedSchema(__scope: Construct, __resources: string[], __input: CloudDirectoryUpgradeAppliedSchemaRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesUpgradeAppliedSchema.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesUpgradeAppliedSchema.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesUpgradeAppliedSchema.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryUpgradeAppliedSchemaRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryUpgradeAppliedSchemaRequest)

---



#### Properties <a name="Properties"></a>

##### `directoryArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesUpgradeAppliedSchema.property.directoryArn"></a>

- *Type:* `string`

---

##### `upgradedSchemaArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesUpgradeAppliedSchema.property.upgradedSchemaArn"></a>

- *Type:* `string`

---


### CloudDirectoryResponsesUpgradePublishedSchema <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesUpgradePublishedSchema"></a>

#### Initializer <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesUpgradePublishedSchema.Initializer"></a>

```typescript
import { clouddirectory } from 'aws-cdk-sdk'

new clouddirectory.CloudDirectoryResponsesUpgradePublishedSchema(__scope: Construct, __resources: string[], __input: CloudDirectoryUpgradePublishedSchemaRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesUpgradePublishedSchema.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesUpgradePublishedSchema.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesUpgradePublishedSchema.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.clouddirectory.CloudDirectoryUpgradePublishedSchemaRequest`](#aws-cdk-sdk.clouddirectory.CloudDirectoryUpgradePublishedSchemaRequest)

---



#### Properties <a name="Properties"></a>

##### `upgradedSchemaArn`<sup>Required</sup> <a name="aws-cdk-sdk.clouddirectory.CloudDirectoryResponsesUpgradePublishedSchema.property.upgradedSchemaArn"></a>

- *Type:* `string`

---



