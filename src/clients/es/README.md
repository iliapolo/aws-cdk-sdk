# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### EsClient <a name="aws-cdk-sdk.es.EsClient"></a>

#### Initializer <a name="aws-cdk-sdk.es.EsClient.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.EsClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `acceptInboundCrossClusterSearchConnection` <a name="aws-cdk-sdk.es.EsClient.acceptInboundCrossClusterSearchConnection"></a>

```typescript
public acceptInboundCrossClusterSearchConnection(input: EsAcceptInboundCrossClusterSearchConnectionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.es.EsAcceptInboundCrossClusterSearchConnectionRequest`](#aws-cdk-sdk.es.EsAcceptInboundCrossClusterSearchConnectionRequest)

---

##### `addTags` <a name="aws-cdk-sdk.es.EsClient.addTags"></a>

```typescript
public addTags(input: EsAddTagsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.es.EsAddTagsRequest`](#aws-cdk-sdk.es.EsAddTagsRequest)

---

##### `associatePackage` <a name="aws-cdk-sdk.es.EsClient.associatePackage"></a>

```typescript
public associatePackage(input: EsAssociatePackageRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.es.EsAssociatePackageRequest`](#aws-cdk-sdk.es.EsAssociatePackageRequest)

---

##### `cancelElasticsearchServiceSoftwareUpdate` <a name="aws-cdk-sdk.es.EsClient.cancelElasticsearchServiceSoftwareUpdate"></a>

```typescript
public cancelElasticsearchServiceSoftwareUpdate(input: EsCancelElasticsearchServiceSoftwareUpdateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.es.EsCancelElasticsearchServiceSoftwareUpdateRequest`](#aws-cdk-sdk.es.EsCancelElasticsearchServiceSoftwareUpdateRequest)

---

##### `createElasticsearchDomain` <a name="aws-cdk-sdk.es.EsClient.createElasticsearchDomain"></a>

```typescript
public createElasticsearchDomain(input: EsCreateElasticsearchDomainRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.es.EsCreateElasticsearchDomainRequest`](#aws-cdk-sdk.es.EsCreateElasticsearchDomainRequest)

---

##### `createOutboundCrossClusterSearchConnection` <a name="aws-cdk-sdk.es.EsClient.createOutboundCrossClusterSearchConnection"></a>

```typescript
public createOutboundCrossClusterSearchConnection(input: EsCreateOutboundCrossClusterSearchConnectionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.es.EsCreateOutboundCrossClusterSearchConnectionRequest`](#aws-cdk-sdk.es.EsCreateOutboundCrossClusterSearchConnectionRequest)

---

##### `createPackage` <a name="aws-cdk-sdk.es.EsClient.createPackage"></a>

```typescript
public createPackage(input: EsCreatePackageRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.es.EsCreatePackageRequest`](#aws-cdk-sdk.es.EsCreatePackageRequest)

---

##### `deleteElasticsearchDomain` <a name="aws-cdk-sdk.es.EsClient.deleteElasticsearchDomain"></a>

```typescript
public deleteElasticsearchDomain(input: EsDeleteElasticsearchDomainRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDeleteElasticsearchDomainRequest`](#aws-cdk-sdk.es.EsDeleteElasticsearchDomainRequest)

---

##### `deleteElasticsearchServiceRole` <a name="aws-cdk-sdk.es.EsClient.deleteElasticsearchServiceRole"></a>

```typescript
public deleteElasticsearchServiceRole()
```

##### `deleteInboundCrossClusterSearchConnection` <a name="aws-cdk-sdk.es.EsClient.deleteInboundCrossClusterSearchConnection"></a>

```typescript
public deleteInboundCrossClusterSearchConnection(input: EsDeleteInboundCrossClusterSearchConnectionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDeleteInboundCrossClusterSearchConnectionRequest`](#aws-cdk-sdk.es.EsDeleteInboundCrossClusterSearchConnectionRequest)

---

##### `deleteOutboundCrossClusterSearchConnection` <a name="aws-cdk-sdk.es.EsClient.deleteOutboundCrossClusterSearchConnection"></a>

```typescript
public deleteOutboundCrossClusterSearchConnection(input: EsDeleteOutboundCrossClusterSearchConnectionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDeleteOutboundCrossClusterSearchConnectionRequest`](#aws-cdk-sdk.es.EsDeleteOutboundCrossClusterSearchConnectionRequest)

---

##### `deletePackage` <a name="aws-cdk-sdk.es.EsClient.deletePackage"></a>

```typescript
public deletePackage(input: EsDeletePackageRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDeletePackageRequest`](#aws-cdk-sdk.es.EsDeletePackageRequest)

---

##### `describeElasticsearchDomain` <a name="aws-cdk-sdk.es.EsClient.describeElasticsearchDomain"></a>

```typescript
public describeElasticsearchDomain(input: EsDescribeElasticsearchDomainRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeElasticsearchDomainRequest`](#aws-cdk-sdk.es.EsDescribeElasticsearchDomainRequest)

---

##### `describeElasticsearchDomainConfig` <a name="aws-cdk-sdk.es.EsClient.describeElasticsearchDomainConfig"></a>

```typescript
public describeElasticsearchDomainConfig(input: EsDescribeElasticsearchDomainConfigRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest)

---

##### `describeElasticsearchDomains` <a name="aws-cdk-sdk.es.EsClient.describeElasticsearchDomains"></a>

```typescript
public describeElasticsearchDomains(input: EsDescribeElasticsearchDomainsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeElasticsearchDomainsRequest`](#aws-cdk-sdk.es.EsDescribeElasticsearchDomainsRequest)

---

##### `describeElasticsearchInstanceTypeLimits` <a name="aws-cdk-sdk.es.EsClient.describeElasticsearchInstanceTypeLimits"></a>

```typescript
public describeElasticsearchInstanceTypeLimits(input: EsDescribeElasticsearchInstanceTypeLimitsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeElasticsearchInstanceTypeLimitsRequest`](#aws-cdk-sdk.es.EsDescribeElasticsearchInstanceTypeLimitsRequest)

---

##### `describeInboundCrossClusterSearchConnections` <a name="aws-cdk-sdk.es.EsClient.describeInboundCrossClusterSearchConnections"></a>

```typescript
public describeInboundCrossClusterSearchConnections(input: EsDescribeInboundCrossClusterSearchConnectionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeInboundCrossClusterSearchConnectionsRequest`](#aws-cdk-sdk.es.EsDescribeInboundCrossClusterSearchConnectionsRequest)

---

##### `describeOutboundCrossClusterSearchConnections` <a name="aws-cdk-sdk.es.EsClient.describeOutboundCrossClusterSearchConnections"></a>

```typescript
public describeOutboundCrossClusterSearchConnections(input: EsDescribeOutboundCrossClusterSearchConnectionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeOutboundCrossClusterSearchConnectionsRequest`](#aws-cdk-sdk.es.EsDescribeOutboundCrossClusterSearchConnectionsRequest)

---

##### `describePackages` <a name="aws-cdk-sdk.es.EsClient.describePackages"></a>

```typescript
public describePackages(input: EsDescribePackagesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribePackagesRequest`](#aws-cdk-sdk.es.EsDescribePackagesRequest)

---

##### `describeReservedElasticsearchInstanceOfferings` <a name="aws-cdk-sdk.es.EsClient.describeReservedElasticsearchInstanceOfferings"></a>

```typescript
public describeReservedElasticsearchInstanceOfferings(input: EsDescribeReservedElasticsearchInstanceOfferingsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeReservedElasticsearchInstanceOfferingsRequest`](#aws-cdk-sdk.es.EsDescribeReservedElasticsearchInstanceOfferingsRequest)

---

##### `describeReservedElasticsearchInstances` <a name="aws-cdk-sdk.es.EsClient.describeReservedElasticsearchInstances"></a>

```typescript
public describeReservedElasticsearchInstances(input: EsDescribeReservedElasticsearchInstancesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeReservedElasticsearchInstancesRequest`](#aws-cdk-sdk.es.EsDescribeReservedElasticsearchInstancesRequest)

---

##### `dissociatePackage` <a name="aws-cdk-sdk.es.EsClient.dissociatePackage"></a>

```typescript
public dissociatePackage(input: EsDissociatePackageRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDissociatePackageRequest`](#aws-cdk-sdk.es.EsDissociatePackageRequest)

---

##### `fetchCompatibleElasticsearchVersions` <a name="aws-cdk-sdk.es.EsClient.fetchCompatibleElasticsearchVersions"></a>

```typescript
public fetchCompatibleElasticsearchVersions(input: EsGetCompatibleElasticsearchVersionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.es.EsGetCompatibleElasticsearchVersionsRequest`](#aws-cdk-sdk.es.EsGetCompatibleElasticsearchVersionsRequest)

---

##### `fetchPackageVersionHistory` <a name="aws-cdk-sdk.es.EsClient.fetchPackageVersionHistory"></a>

```typescript
public fetchPackageVersionHistory(input: EsGetPackageVersionHistoryRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.es.EsGetPackageVersionHistoryRequest`](#aws-cdk-sdk.es.EsGetPackageVersionHistoryRequest)

---

##### `fetchUpgradeHistory` <a name="aws-cdk-sdk.es.EsClient.fetchUpgradeHistory"></a>

```typescript
public fetchUpgradeHistory(input: EsGetUpgradeHistoryRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.es.EsGetUpgradeHistoryRequest`](#aws-cdk-sdk.es.EsGetUpgradeHistoryRequest)

---

##### `fetchUpgradeStatus` <a name="aws-cdk-sdk.es.EsClient.fetchUpgradeStatus"></a>

```typescript
public fetchUpgradeStatus(input: EsGetUpgradeStatusRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.es.EsGetUpgradeStatusRequest`](#aws-cdk-sdk.es.EsGetUpgradeStatusRequest)

---

##### `listDomainNames` <a name="aws-cdk-sdk.es.EsClient.listDomainNames"></a>

```typescript
public listDomainNames()
```

##### `listDomainsForPackage` <a name="aws-cdk-sdk.es.EsClient.listDomainsForPackage"></a>

```typescript
public listDomainsForPackage(input: EsListDomainsForPackageRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.es.EsListDomainsForPackageRequest`](#aws-cdk-sdk.es.EsListDomainsForPackageRequest)

---

##### `listElasticsearchInstanceTypes` <a name="aws-cdk-sdk.es.EsClient.listElasticsearchInstanceTypes"></a>

```typescript
public listElasticsearchInstanceTypes(input: EsListElasticsearchInstanceTypesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.es.EsListElasticsearchInstanceTypesRequest`](#aws-cdk-sdk.es.EsListElasticsearchInstanceTypesRequest)

---

##### `listElasticsearchVersions` <a name="aws-cdk-sdk.es.EsClient.listElasticsearchVersions"></a>

```typescript
public listElasticsearchVersions(input: EsListElasticsearchVersionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.es.EsListElasticsearchVersionsRequest`](#aws-cdk-sdk.es.EsListElasticsearchVersionsRequest)

---

##### `listPackagesForDomain` <a name="aws-cdk-sdk.es.EsClient.listPackagesForDomain"></a>

```typescript
public listPackagesForDomain(input: EsListPackagesForDomainRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.es.EsListPackagesForDomainRequest`](#aws-cdk-sdk.es.EsListPackagesForDomainRequest)

---

##### `listTags` <a name="aws-cdk-sdk.es.EsClient.listTags"></a>

```typescript
public listTags(input: EsListTagsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.es.EsListTagsRequest`](#aws-cdk-sdk.es.EsListTagsRequest)

---

##### `purchaseReservedElasticsearchInstanceOffering` <a name="aws-cdk-sdk.es.EsClient.purchaseReservedElasticsearchInstanceOffering"></a>

```typescript
public purchaseReservedElasticsearchInstanceOffering(input: EsPurchaseReservedElasticsearchInstanceOfferingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.es.EsPurchaseReservedElasticsearchInstanceOfferingRequest`](#aws-cdk-sdk.es.EsPurchaseReservedElasticsearchInstanceOfferingRequest)

---

##### `rejectInboundCrossClusterSearchConnection` <a name="aws-cdk-sdk.es.EsClient.rejectInboundCrossClusterSearchConnection"></a>

```typescript
public rejectInboundCrossClusterSearchConnection(input: EsRejectInboundCrossClusterSearchConnectionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.es.EsRejectInboundCrossClusterSearchConnectionRequest`](#aws-cdk-sdk.es.EsRejectInboundCrossClusterSearchConnectionRequest)

---

##### `removeTags` <a name="aws-cdk-sdk.es.EsClient.removeTags"></a>

```typescript
public removeTags(input: EsRemoveTagsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.es.EsRemoveTagsRequest`](#aws-cdk-sdk.es.EsRemoveTagsRequest)

---

##### `startElasticsearchServiceSoftwareUpdate` <a name="aws-cdk-sdk.es.EsClient.startElasticsearchServiceSoftwareUpdate"></a>

```typescript
public startElasticsearchServiceSoftwareUpdate(input: EsStartElasticsearchServiceSoftwareUpdateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.es.EsStartElasticsearchServiceSoftwareUpdateRequest`](#aws-cdk-sdk.es.EsStartElasticsearchServiceSoftwareUpdateRequest)

---

##### `updateElasticsearchDomainConfig` <a name="aws-cdk-sdk.es.EsClient.updateElasticsearchDomainConfig"></a>

```typescript
public updateElasticsearchDomainConfig(input: EsUpdateElasticsearchDomainConfigRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest)

---

##### `updatePackage` <a name="aws-cdk-sdk.es.EsClient.updatePackage"></a>

```typescript
public updatePackage(input: EsUpdatePackageRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.es.EsUpdatePackageRequest`](#aws-cdk-sdk.es.EsUpdatePackageRequest)

---

##### `upgradeElasticsearchDomain` <a name="aws-cdk-sdk.es.EsClient.upgradeElasticsearchDomain"></a>

```typescript
public upgradeElasticsearchDomain(input: EsUpgradeElasticsearchDomainRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.es.EsUpgradeElasticsearchDomainRequest`](#aws-cdk-sdk.es.EsUpgradeElasticsearchDomainRequest)

---




## Structs <a name="Structs"></a>

### EsAcceptInboundCrossClusterSearchConnectionRequest <a name="aws-cdk-sdk.es.EsAcceptInboundCrossClusterSearchConnectionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esAcceptInboundCrossClusterSearchConnectionRequest: es.EsAcceptInboundCrossClusterSearchConnectionRequest = { ... }
```

##### `crossClusterSearchConnectionId`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsAcceptInboundCrossClusterSearchConnectionRequest.property.crossClusterSearchConnectionId"></a>

- *Type:* `string`

---

### EsAcceptInboundCrossClusterSearchConnectionResponse <a name="aws-cdk-sdk.es.EsAcceptInboundCrossClusterSearchConnectionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esAcceptInboundCrossClusterSearchConnectionResponse: es.EsAcceptInboundCrossClusterSearchConnectionResponse = { ... }
```

##### `crossClusterSearchConnection`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsAcceptInboundCrossClusterSearchConnectionResponse.property.crossClusterSearchConnection"></a>

- *Type:* [`aws-cdk-sdk.es.EsInboundCrossClusterSearchConnection`](#aws-cdk-sdk.es.EsInboundCrossClusterSearchConnection)

---

### EsAccessPoliciesStatus <a name="aws-cdk-sdk.es.EsAccessPoliciesStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esAccessPoliciesStatus: es.EsAccessPoliciesStatus = { ... }
```

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsAccessPoliciesStatus.property.options"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsAccessPoliciesStatus.property.status"></a>

- *Type:* [`aws-cdk-sdk.es.EsOptionStatus`](#aws-cdk-sdk.es.EsOptionStatus)

---

### EsAdditionalLimit <a name="aws-cdk-sdk.es.EsAdditionalLimit"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esAdditionalLimit: es.EsAdditionalLimit = { ... }
```

##### `limitName`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsAdditionalLimit.property.limitName"></a>

- *Type:* `string`

---

##### `limitValues`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsAdditionalLimit.property.limitValues"></a>

- *Type:* `string`[]

---

### EsAddTagsRequest <a name="aws-cdk-sdk.es.EsAddTagsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esAddTagsRequest: es.EsAddTagsRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsAddTagsRequest.property.arn"></a>

- *Type:* `string`

---

##### `tagList`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsAddTagsRequest.property.tagList"></a>

- *Type:* [`aws-cdk-sdk.es.EsTag`](#aws-cdk-sdk.es.EsTag)[]

---

### EsAdvancedOptionsStatus <a name="aws-cdk-sdk.es.EsAdvancedOptionsStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esAdvancedOptionsStatus: es.EsAdvancedOptionsStatus = { ... }
```

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsAdvancedOptionsStatus.property.options"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsAdvancedOptionsStatus.property.status"></a>

- *Type:* [`aws-cdk-sdk.es.EsOptionStatus`](#aws-cdk-sdk.es.EsOptionStatus)

---

### EsAdvancedSecurityOptions <a name="aws-cdk-sdk.es.EsAdvancedSecurityOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esAdvancedSecurityOptions: es.EsAdvancedSecurityOptions = { ... }
```

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsAdvancedSecurityOptions.property.enabled"></a>

- *Type:* `boolean`

---

##### `internalUserDatabaseEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsAdvancedSecurityOptions.property.internalUserDatabaseEnabled"></a>

- *Type:* `boolean`

---

##### `samlOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsAdvancedSecurityOptions.property.samlOptions"></a>

- *Type:* [`aws-cdk-sdk.es.EssamlOptionsOutput`](#aws-cdk-sdk.es.EssamlOptionsOutput)

---

### EsAdvancedSecurityOptionsInput <a name="aws-cdk-sdk.es.EsAdvancedSecurityOptionsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esAdvancedSecurityOptionsInput: es.EsAdvancedSecurityOptionsInput = { ... }
```

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsAdvancedSecurityOptionsInput.property.enabled"></a>

- *Type:* `boolean`

---

##### `internalUserDatabaseEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsAdvancedSecurityOptionsInput.property.internalUserDatabaseEnabled"></a>

- *Type:* `boolean`

---

##### `masterUserOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsAdvancedSecurityOptionsInput.property.masterUserOptions"></a>

- *Type:* [`aws-cdk-sdk.es.EsMasterUserOptions`](#aws-cdk-sdk.es.EsMasterUserOptions)

---

##### `samlOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsAdvancedSecurityOptionsInput.property.samlOptions"></a>

- *Type:* [`aws-cdk-sdk.es.EssamlOptionsInput`](#aws-cdk-sdk.es.EssamlOptionsInput)

---

### EsAdvancedSecurityOptionsStatus <a name="aws-cdk-sdk.es.EsAdvancedSecurityOptionsStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esAdvancedSecurityOptionsStatus: es.EsAdvancedSecurityOptionsStatus = { ... }
```

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsAdvancedSecurityOptionsStatus.property.options"></a>

- *Type:* [`aws-cdk-sdk.es.EsAdvancedSecurityOptions`](#aws-cdk-sdk.es.EsAdvancedSecurityOptions)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsAdvancedSecurityOptionsStatus.property.status"></a>

- *Type:* [`aws-cdk-sdk.es.EsOptionStatus`](#aws-cdk-sdk.es.EsOptionStatus)

---

### EsAssociatePackageRequest <a name="aws-cdk-sdk.es.EsAssociatePackageRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esAssociatePackageRequest: es.EsAssociatePackageRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsAssociatePackageRequest.property.domainName"></a>

- *Type:* `string`

---

##### `packageId`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsAssociatePackageRequest.property.packageId"></a>

- *Type:* `string`

---

### EsAssociatePackageResponse <a name="aws-cdk-sdk.es.EsAssociatePackageResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esAssociatePackageResponse: es.EsAssociatePackageResponse = { ... }
```

##### `domainPackageDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsAssociatePackageResponse.property.domainPackageDetails"></a>

- *Type:* [`aws-cdk-sdk.es.EsDomainPackageDetails`](#aws-cdk-sdk.es.EsDomainPackageDetails)

---

### EsCancelElasticsearchServiceSoftwareUpdateRequest <a name="aws-cdk-sdk.es.EsCancelElasticsearchServiceSoftwareUpdateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esCancelElasticsearchServiceSoftwareUpdateRequest: es.EsCancelElasticsearchServiceSoftwareUpdateRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsCancelElasticsearchServiceSoftwareUpdateRequest.property.domainName"></a>

- *Type:* `string`

---

### EsCancelElasticsearchServiceSoftwareUpdateResponse <a name="aws-cdk-sdk.es.EsCancelElasticsearchServiceSoftwareUpdateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esCancelElasticsearchServiceSoftwareUpdateResponse: es.EsCancelElasticsearchServiceSoftwareUpdateResponse = { ... }
```

##### `serviceSoftwareOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsCancelElasticsearchServiceSoftwareUpdateResponse.property.serviceSoftwareOptions"></a>

- *Type:* [`aws-cdk-sdk.es.EsServiceSoftwareOptions`](#aws-cdk-sdk.es.EsServiceSoftwareOptions)

---

### EsCognitoOptions <a name="aws-cdk-sdk.es.EsCognitoOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esCognitoOptions: es.EsCognitoOptions = { ... }
```

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsCognitoOptions.property.enabled"></a>

- *Type:* `boolean`

---

##### `identityPoolId`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsCognitoOptions.property.identityPoolId"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsCognitoOptions.property.roleArn"></a>

- *Type:* `string`

---

##### `userPoolId`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsCognitoOptions.property.userPoolId"></a>

- *Type:* `string`

---

### EsCognitoOptionsStatus <a name="aws-cdk-sdk.es.EsCognitoOptionsStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esCognitoOptionsStatus: es.EsCognitoOptionsStatus = { ... }
```

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsCognitoOptionsStatus.property.options"></a>

- *Type:* [`aws-cdk-sdk.es.EsCognitoOptions`](#aws-cdk-sdk.es.EsCognitoOptions)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsCognitoOptionsStatus.property.status"></a>

- *Type:* [`aws-cdk-sdk.es.EsOptionStatus`](#aws-cdk-sdk.es.EsOptionStatus)

---

### EsCompatibleVersionsMap <a name="aws-cdk-sdk.es.EsCompatibleVersionsMap"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esCompatibleVersionsMap: es.EsCompatibleVersionsMap = { ... }
```

##### `sourceVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsCompatibleVersionsMap.property.sourceVersion"></a>

- *Type:* `string`

---

##### `targetVersions`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsCompatibleVersionsMap.property.targetVersions"></a>

- *Type:* `string`[]

---

### EsCreateElasticsearchDomainRequest <a name="aws-cdk-sdk.es.EsCreateElasticsearchDomainRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esCreateElasticsearchDomainRequest: es.EsCreateElasticsearchDomainRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsCreateElasticsearchDomainRequest.property.domainName"></a>

- *Type:* `string`

---

##### `accessPolicies`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsCreateElasticsearchDomainRequest.property.accessPolicies"></a>

- *Type:* `string`

---

##### `advancedOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsCreateElasticsearchDomainRequest.property.advancedOptions"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `advancedSecurityOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsCreateElasticsearchDomainRequest.property.advancedSecurityOptions"></a>

- *Type:* [`aws-cdk-sdk.es.EsAdvancedSecurityOptionsInput`](#aws-cdk-sdk.es.EsAdvancedSecurityOptionsInput)

---

##### `cognitoOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsCreateElasticsearchDomainRequest.property.cognitoOptions"></a>

- *Type:* [`aws-cdk-sdk.es.EsCognitoOptions`](#aws-cdk-sdk.es.EsCognitoOptions)

---

##### `domainEndpointOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsCreateElasticsearchDomainRequest.property.domainEndpointOptions"></a>

- *Type:* [`aws-cdk-sdk.es.EsDomainEndpointOptions`](#aws-cdk-sdk.es.EsDomainEndpointOptions)

---

##### `ebsOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsCreateElasticsearchDomainRequest.property.ebsOptions"></a>

- *Type:* [`aws-cdk-sdk.es.EsebsOptions`](#aws-cdk-sdk.es.EsebsOptions)

---

##### `elasticsearchClusterConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsCreateElasticsearchDomainRequest.property.elasticsearchClusterConfig"></a>

- *Type:* [`aws-cdk-sdk.es.EsElasticsearchClusterConfig`](#aws-cdk-sdk.es.EsElasticsearchClusterConfig)

---

##### `elasticsearchVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsCreateElasticsearchDomainRequest.property.elasticsearchVersion"></a>

- *Type:* `string`

---

##### `encryptionAtRestOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsCreateElasticsearchDomainRequest.property.encryptionAtRestOptions"></a>

- *Type:* [`aws-cdk-sdk.es.EsEncryptionAtRestOptions`](#aws-cdk-sdk.es.EsEncryptionAtRestOptions)

---

##### `logPublishingOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsCreateElasticsearchDomainRequest.property.logPublishingOptions"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.es.EsLogPublishingOption`](#aws-cdk-sdk.es.EsLogPublishingOption)}

---

##### `nodeToNodeEncryptionOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsCreateElasticsearchDomainRequest.property.nodeToNodeEncryptionOptions"></a>

- *Type:* [`aws-cdk-sdk.es.EsNodeToNodeEncryptionOptions`](#aws-cdk-sdk.es.EsNodeToNodeEncryptionOptions)

---

##### `snapshotOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsCreateElasticsearchDomainRequest.property.snapshotOptions"></a>

- *Type:* [`aws-cdk-sdk.es.EsSnapshotOptions`](#aws-cdk-sdk.es.EsSnapshotOptions)

---

##### `vpcOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsCreateElasticsearchDomainRequest.property.vpcOptions"></a>

- *Type:* [`aws-cdk-sdk.es.EsvpcOptions`](#aws-cdk-sdk.es.EsvpcOptions)

---

### EsCreateElasticsearchDomainResponse <a name="aws-cdk-sdk.es.EsCreateElasticsearchDomainResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esCreateElasticsearchDomainResponse: es.EsCreateElasticsearchDomainResponse = { ... }
```

##### `domainStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsCreateElasticsearchDomainResponse.property.domainStatus"></a>

- *Type:* [`aws-cdk-sdk.es.EsElasticsearchDomainStatus`](#aws-cdk-sdk.es.EsElasticsearchDomainStatus)

---

### EsCreateOutboundCrossClusterSearchConnectionRequest <a name="aws-cdk-sdk.es.EsCreateOutboundCrossClusterSearchConnectionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esCreateOutboundCrossClusterSearchConnectionRequest: es.EsCreateOutboundCrossClusterSearchConnectionRequest = { ... }
```

##### `connectionAlias`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsCreateOutboundCrossClusterSearchConnectionRequest.property.connectionAlias"></a>

- *Type:* `string`

---

##### `destinationDomainInfo`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsCreateOutboundCrossClusterSearchConnectionRequest.property.destinationDomainInfo"></a>

- *Type:* [`aws-cdk-sdk.es.EsDomainInformation`](#aws-cdk-sdk.es.EsDomainInformation)

---

##### `sourceDomainInfo`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsCreateOutboundCrossClusterSearchConnectionRequest.property.sourceDomainInfo"></a>

- *Type:* [`aws-cdk-sdk.es.EsDomainInformation`](#aws-cdk-sdk.es.EsDomainInformation)

---

### EsCreateOutboundCrossClusterSearchConnectionResponse <a name="aws-cdk-sdk.es.EsCreateOutboundCrossClusterSearchConnectionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esCreateOutboundCrossClusterSearchConnectionResponse: es.EsCreateOutboundCrossClusterSearchConnectionResponse = { ... }
```

##### `connectionAlias`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsCreateOutboundCrossClusterSearchConnectionResponse.property.connectionAlias"></a>

- *Type:* `string`

---

##### `connectionStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsCreateOutboundCrossClusterSearchConnectionResponse.property.connectionStatus"></a>

- *Type:* [`aws-cdk-sdk.es.EsOutboundCrossClusterSearchConnectionStatus`](#aws-cdk-sdk.es.EsOutboundCrossClusterSearchConnectionStatus)

---

##### `crossClusterSearchConnectionId`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsCreateOutboundCrossClusterSearchConnectionResponse.property.crossClusterSearchConnectionId"></a>

- *Type:* `string`

---

##### `destinationDomainInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsCreateOutboundCrossClusterSearchConnectionResponse.property.destinationDomainInfo"></a>

- *Type:* [`aws-cdk-sdk.es.EsDomainInformation`](#aws-cdk-sdk.es.EsDomainInformation)

---

##### `sourceDomainInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsCreateOutboundCrossClusterSearchConnectionResponse.property.sourceDomainInfo"></a>

- *Type:* [`aws-cdk-sdk.es.EsDomainInformation`](#aws-cdk-sdk.es.EsDomainInformation)

---

### EsCreatePackageRequest <a name="aws-cdk-sdk.es.EsCreatePackageRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esCreatePackageRequest: es.EsCreatePackageRequest = { ... }
```

##### `packageName`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsCreatePackageRequest.property.packageName"></a>

- *Type:* `string`

---

##### `packageSource`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsCreatePackageRequest.property.packageSource"></a>

- *Type:* [`aws-cdk-sdk.es.EsPackageSource`](#aws-cdk-sdk.es.EsPackageSource)

---

##### `packageType`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsCreatePackageRequest.property.packageType"></a>

- *Type:* `string`

---

##### `packageDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsCreatePackageRequest.property.packageDescription"></a>

- *Type:* `string`

---

### EsCreatePackageResponse <a name="aws-cdk-sdk.es.EsCreatePackageResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esCreatePackageResponse: es.EsCreatePackageResponse = { ... }
```

##### `packageDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsCreatePackageResponse.property.packageDetails"></a>

- *Type:* [`aws-cdk-sdk.es.EsPackageDetails`](#aws-cdk-sdk.es.EsPackageDetails)

---

### EsDeleteElasticsearchDomainRequest <a name="aws-cdk-sdk.es.EsDeleteElasticsearchDomainRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esDeleteElasticsearchDomainRequest: es.EsDeleteElasticsearchDomainRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsDeleteElasticsearchDomainRequest.property.domainName"></a>

- *Type:* `string`

---

### EsDeleteElasticsearchDomainResponse <a name="aws-cdk-sdk.es.EsDeleteElasticsearchDomainResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esDeleteElasticsearchDomainResponse: es.EsDeleteElasticsearchDomainResponse = { ... }
```

##### `domainStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsDeleteElasticsearchDomainResponse.property.domainStatus"></a>

- *Type:* [`aws-cdk-sdk.es.EsElasticsearchDomainStatus`](#aws-cdk-sdk.es.EsElasticsearchDomainStatus)

---

### EsDeleteInboundCrossClusterSearchConnectionRequest <a name="aws-cdk-sdk.es.EsDeleteInboundCrossClusterSearchConnectionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esDeleteInboundCrossClusterSearchConnectionRequest: es.EsDeleteInboundCrossClusterSearchConnectionRequest = { ... }
```

##### `crossClusterSearchConnectionId`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsDeleteInboundCrossClusterSearchConnectionRequest.property.crossClusterSearchConnectionId"></a>

- *Type:* `string`

---

### EsDeleteInboundCrossClusterSearchConnectionResponse <a name="aws-cdk-sdk.es.EsDeleteInboundCrossClusterSearchConnectionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esDeleteInboundCrossClusterSearchConnectionResponse: es.EsDeleteInboundCrossClusterSearchConnectionResponse = { ... }
```

##### `crossClusterSearchConnection`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsDeleteInboundCrossClusterSearchConnectionResponse.property.crossClusterSearchConnection"></a>

- *Type:* [`aws-cdk-sdk.es.EsInboundCrossClusterSearchConnection`](#aws-cdk-sdk.es.EsInboundCrossClusterSearchConnection)

---

### EsDeleteOutboundCrossClusterSearchConnectionRequest <a name="aws-cdk-sdk.es.EsDeleteOutboundCrossClusterSearchConnectionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esDeleteOutboundCrossClusterSearchConnectionRequest: es.EsDeleteOutboundCrossClusterSearchConnectionRequest = { ... }
```

##### `crossClusterSearchConnectionId`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsDeleteOutboundCrossClusterSearchConnectionRequest.property.crossClusterSearchConnectionId"></a>

- *Type:* `string`

---

### EsDeleteOutboundCrossClusterSearchConnectionResponse <a name="aws-cdk-sdk.es.EsDeleteOutboundCrossClusterSearchConnectionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esDeleteOutboundCrossClusterSearchConnectionResponse: es.EsDeleteOutboundCrossClusterSearchConnectionResponse = { ... }
```

##### `crossClusterSearchConnection`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsDeleteOutboundCrossClusterSearchConnectionResponse.property.crossClusterSearchConnection"></a>

- *Type:* [`aws-cdk-sdk.es.EsOutboundCrossClusterSearchConnection`](#aws-cdk-sdk.es.EsOutboundCrossClusterSearchConnection)

---

### EsDeletePackageRequest <a name="aws-cdk-sdk.es.EsDeletePackageRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esDeletePackageRequest: es.EsDeletePackageRequest = { ... }
```

##### `packageId`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsDeletePackageRequest.property.packageId"></a>

- *Type:* `string`

---

### EsDeletePackageResponse <a name="aws-cdk-sdk.es.EsDeletePackageResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esDeletePackageResponse: es.EsDeletePackageResponse = { ... }
```

##### `packageDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsDeletePackageResponse.property.packageDetails"></a>

- *Type:* [`aws-cdk-sdk.es.EsPackageDetails`](#aws-cdk-sdk.es.EsPackageDetails)

---

### EsDescribeElasticsearchDomainConfigRequest <a name="aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esDescribeElasticsearchDomainConfigRequest: es.EsDescribeElasticsearchDomainConfigRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest.property.domainName"></a>

- *Type:* `string`

---

### EsDescribeElasticsearchDomainConfigResponse <a name="aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esDescribeElasticsearchDomainConfigResponse: es.EsDescribeElasticsearchDomainConfigResponse = { ... }
```

##### `domainConfig`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigResponse.property.domainConfig"></a>

- *Type:* [`aws-cdk-sdk.es.EsElasticsearchDomainConfig`](#aws-cdk-sdk.es.EsElasticsearchDomainConfig)

---

### EsDescribeElasticsearchDomainRequest <a name="aws-cdk-sdk.es.EsDescribeElasticsearchDomainRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esDescribeElasticsearchDomainRequest: es.EsDescribeElasticsearchDomainRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsDescribeElasticsearchDomainRequest.property.domainName"></a>

- *Type:* `string`

---

### EsDescribeElasticsearchDomainResponse <a name="aws-cdk-sdk.es.EsDescribeElasticsearchDomainResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esDescribeElasticsearchDomainResponse: es.EsDescribeElasticsearchDomainResponse = { ... }
```

##### `domainStatus`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsDescribeElasticsearchDomainResponse.property.domainStatus"></a>

- *Type:* [`aws-cdk-sdk.es.EsElasticsearchDomainStatus`](#aws-cdk-sdk.es.EsElasticsearchDomainStatus)

---

### EsDescribeElasticsearchDomainsRequest <a name="aws-cdk-sdk.es.EsDescribeElasticsearchDomainsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esDescribeElasticsearchDomainsRequest: es.EsDescribeElasticsearchDomainsRequest = { ... }
```

##### `domainNames`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsDescribeElasticsearchDomainsRequest.property.domainNames"></a>

- *Type:* `string`[]

---

### EsDescribeElasticsearchDomainsResponse <a name="aws-cdk-sdk.es.EsDescribeElasticsearchDomainsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esDescribeElasticsearchDomainsResponse: es.EsDescribeElasticsearchDomainsResponse = { ... }
```

##### `domainStatusList`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsDescribeElasticsearchDomainsResponse.property.domainStatusList"></a>

- *Type:* [`aws-cdk-sdk.es.EsElasticsearchDomainStatus`](#aws-cdk-sdk.es.EsElasticsearchDomainStatus)[]

---

### EsDescribeElasticsearchInstanceTypeLimitsRequest <a name="aws-cdk-sdk.es.EsDescribeElasticsearchInstanceTypeLimitsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esDescribeElasticsearchInstanceTypeLimitsRequest: es.EsDescribeElasticsearchInstanceTypeLimitsRequest = { ... }
```

##### `elasticsearchVersion`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsDescribeElasticsearchInstanceTypeLimitsRequest.property.elasticsearchVersion"></a>

- *Type:* `string`

---

##### `instanceType`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsDescribeElasticsearchInstanceTypeLimitsRequest.property.instanceType"></a>

- *Type:* `string`

---

##### `domainName`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsDescribeElasticsearchInstanceTypeLimitsRequest.property.domainName"></a>

- *Type:* `string`

---

### EsDescribeElasticsearchInstanceTypeLimitsResponse <a name="aws-cdk-sdk.es.EsDescribeElasticsearchInstanceTypeLimitsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esDescribeElasticsearchInstanceTypeLimitsResponse: es.EsDescribeElasticsearchInstanceTypeLimitsResponse = { ... }
```

##### `limitsByRole`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsDescribeElasticsearchInstanceTypeLimitsResponse.property.limitsByRole"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.es.EsLimits`](#aws-cdk-sdk.es.EsLimits)}

---

### EsDescribeInboundCrossClusterSearchConnectionsRequest <a name="aws-cdk-sdk.es.EsDescribeInboundCrossClusterSearchConnectionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esDescribeInboundCrossClusterSearchConnectionsRequest: es.EsDescribeInboundCrossClusterSearchConnectionsRequest = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsDescribeInboundCrossClusterSearchConnectionsRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.es.EsFilter`](#aws-cdk-sdk.es.EsFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsDescribeInboundCrossClusterSearchConnectionsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsDescribeInboundCrossClusterSearchConnectionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### EsDescribeInboundCrossClusterSearchConnectionsResponse <a name="aws-cdk-sdk.es.EsDescribeInboundCrossClusterSearchConnectionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esDescribeInboundCrossClusterSearchConnectionsResponse: es.EsDescribeInboundCrossClusterSearchConnectionsResponse = { ... }
```

##### `crossClusterSearchConnections`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsDescribeInboundCrossClusterSearchConnectionsResponse.property.crossClusterSearchConnections"></a>

- *Type:* [`aws-cdk-sdk.es.EsInboundCrossClusterSearchConnection`](#aws-cdk-sdk.es.EsInboundCrossClusterSearchConnection)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsDescribeInboundCrossClusterSearchConnectionsResponse.property.nextToken"></a>

- *Type:* `string`

---

### EsDescribeOutboundCrossClusterSearchConnectionsRequest <a name="aws-cdk-sdk.es.EsDescribeOutboundCrossClusterSearchConnectionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esDescribeOutboundCrossClusterSearchConnectionsRequest: es.EsDescribeOutboundCrossClusterSearchConnectionsRequest = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsDescribeOutboundCrossClusterSearchConnectionsRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.es.EsFilter`](#aws-cdk-sdk.es.EsFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsDescribeOutboundCrossClusterSearchConnectionsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsDescribeOutboundCrossClusterSearchConnectionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### EsDescribeOutboundCrossClusterSearchConnectionsResponse <a name="aws-cdk-sdk.es.EsDescribeOutboundCrossClusterSearchConnectionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esDescribeOutboundCrossClusterSearchConnectionsResponse: es.EsDescribeOutboundCrossClusterSearchConnectionsResponse = { ... }
```

##### `crossClusterSearchConnections`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsDescribeOutboundCrossClusterSearchConnectionsResponse.property.crossClusterSearchConnections"></a>

- *Type:* [`aws-cdk-sdk.es.EsOutboundCrossClusterSearchConnection`](#aws-cdk-sdk.es.EsOutboundCrossClusterSearchConnection)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsDescribeOutboundCrossClusterSearchConnectionsResponse.property.nextToken"></a>

- *Type:* `string`

---

### EsDescribePackagesFilter <a name="aws-cdk-sdk.es.EsDescribePackagesFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esDescribePackagesFilter: es.EsDescribePackagesFilter = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsDescribePackagesFilter.property.name"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsDescribePackagesFilter.property.value"></a>

- *Type:* `string`[]

---

### EsDescribePackagesRequest <a name="aws-cdk-sdk.es.EsDescribePackagesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esDescribePackagesRequest: es.EsDescribePackagesRequest = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsDescribePackagesRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribePackagesFilter`](#aws-cdk-sdk.es.EsDescribePackagesFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsDescribePackagesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsDescribePackagesRequest.property.nextToken"></a>

- *Type:* `string`

---

### EsDescribePackagesResponse <a name="aws-cdk-sdk.es.EsDescribePackagesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esDescribePackagesResponse: es.EsDescribePackagesResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsDescribePackagesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `packageDetailsList`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsDescribePackagesResponse.property.packageDetailsList"></a>

- *Type:* [`aws-cdk-sdk.es.EsPackageDetails`](#aws-cdk-sdk.es.EsPackageDetails)[]

---

### EsDescribeReservedElasticsearchInstanceOfferingsRequest <a name="aws-cdk-sdk.es.EsDescribeReservedElasticsearchInstanceOfferingsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esDescribeReservedElasticsearchInstanceOfferingsRequest: es.EsDescribeReservedElasticsearchInstanceOfferingsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsDescribeReservedElasticsearchInstanceOfferingsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsDescribeReservedElasticsearchInstanceOfferingsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `reservedElasticsearchInstanceOfferingId`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsDescribeReservedElasticsearchInstanceOfferingsRequest.property.reservedElasticsearchInstanceOfferingId"></a>

- *Type:* `string`

---

### EsDescribeReservedElasticsearchInstanceOfferingsResponse <a name="aws-cdk-sdk.es.EsDescribeReservedElasticsearchInstanceOfferingsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esDescribeReservedElasticsearchInstanceOfferingsResponse: es.EsDescribeReservedElasticsearchInstanceOfferingsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsDescribeReservedElasticsearchInstanceOfferingsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `reservedElasticsearchInstanceOfferings`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsDescribeReservedElasticsearchInstanceOfferingsResponse.property.reservedElasticsearchInstanceOfferings"></a>

- *Type:* [`aws-cdk-sdk.es.EsReservedElasticsearchInstanceOffering`](#aws-cdk-sdk.es.EsReservedElasticsearchInstanceOffering)[]

---

### EsDescribeReservedElasticsearchInstancesRequest <a name="aws-cdk-sdk.es.EsDescribeReservedElasticsearchInstancesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esDescribeReservedElasticsearchInstancesRequest: es.EsDescribeReservedElasticsearchInstancesRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsDescribeReservedElasticsearchInstancesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsDescribeReservedElasticsearchInstancesRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `reservedElasticsearchInstanceId`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsDescribeReservedElasticsearchInstancesRequest.property.reservedElasticsearchInstanceId"></a>

- *Type:* `string`

---

### EsDescribeReservedElasticsearchInstancesResponse <a name="aws-cdk-sdk.es.EsDescribeReservedElasticsearchInstancesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esDescribeReservedElasticsearchInstancesResponse: es.EsDescribeReservedElasticsearchInstancesResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsDescribeReservedElasticsearchInstancesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `reservedElasticsearchInstances`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsDescribeReservedElasticsearchInstancesResponse.property.reservedElasticsearchInstances"></a>

- *Type:* [`aws-cdk-sdk.es.EsReservedElasticsearchInstance`](#aws-cdk-sdk.es.EsReservedElasticsearchInstance)[]

---

### EsDissociatePackageRequest <a name="aws-cdk-sdk.es.EsDissociatePackageRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esDissociatePackageRequest: es.EsDissociatePackageRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsDissociatePackageRequest.property.domainName"></a>

- *Type:* `string`

---

##### `packageId`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsDissociatePackageRequest.property.packageId"></a>

- *Type:* `string`

---

### EsDissociatePackageResponse <a name="aws-cdk-sdk.es.EsDissociatePackageResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esDissociatePackageResponse: es.EsDissociatePackageResponse = { ... }
```

##### `domainPackageDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsDissociatePackageResponse.property.domainPackageDetails"></a>

- *Type:* [`aws-cdk-sdk.es.EsDomainPackageDetails`](#aws-cdk-sdk.es.EsDomainPackageDetails)

---

### EsDomainEndpointOptions <a name="aws-cdk-sdk.es.EsDomainEndpointOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esDomainEndpointOptions: es.EsDomainEndpointOptions = { ... }
```

##### `customEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsDomainEndpointOptions.property.customEndpoint"></a>

- *Type:* `string`

---

##### `customEndpointCertificateArn`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsDomainEndpointOptions.property.customEndpointCertificateArn"></a>

- *Type:* `string`

---

##### `customEndpointEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsDomainEndpointOptions.property.customEndpointEnabled"></a>

- *Type:* `boolean`

---

##### `enforceHttps`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsDomainEndpointOptions.property.enforceHttps"></a>

- *Type:* `boolean`

---

##### `tlsSecurityPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsDomainEndpointOptions.property.tlsSecurityPolicy"></a>

- *Type:* `string`

---

### EsDomainEndpointOptionsStatus <a name="aws-cdk-sdk.es.EsDomainEndpointOptionsStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esDomainEndpointOptionsStatus: es.EsDomainEndpointOptionsStatus = { ... }
```

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsDomainEndpointOptionsStatus.property.options"></a>

- *Type:* [`aws-cdk-sdk.es.EsDomainEndpointOptions`](#aws-cdk-sdk.es.EsDomainEndpointOptions)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsDomainEndpointOptionsStatus.property.status"></a>

- *Type:* [`aws-cdk-sdk.es.EsOptionStatus`](#aws-cdk-sdk.es.EsOptionStatus)

---

### EsDomainInfo <a name="aws-cdk-sdk.es.EsDomainInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esDomainInfo: es.EsDomainInfo = { ... }
```

##### `domainName`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsDomainInfo.property.domainName"></a>

- *Type:* `string`

---

### EsDomainInformation <a name="aws-cdk-sdk.es.EsDomainInformation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esDomainInformation: es.EsDomainInformation = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsDomainInformation.property.domainName"></a>

- *Type:* `string`

---

##### `ownerId`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsDomainInformation.property.ownerId"></a>

- *Type:* `string`

---

##### `region`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsDomainInformation.property.region"></a>

- *Type:* `string`

---

### EsDomainPackageDetails <a name="aws-cdk-sdk.es.EsDomainPackageDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esDomainPackageDetails: es.EsDomainPackageDetails = { ... }
```

##### `domainName`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsDomainPackageDetails.property.domainName"></a>

- *Type:* `string`

---

##### `domainPackageStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsDomainPackageDetails.property.domainPackageStatus"></a>

- *Type:* `string`

---

##### `errorDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsDomainPackageDetails.property.errorDetails"></a>

- *Type:* [`aws-cdk-sdk.es.EsErrorDetails`](#aws-cdk-sdk.es.EsErrorDetails)

---

##### `lastUpdated`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsDomainPackageDetails.property.lastUpdated"></a>

- *Type:* `string`

---

##### `packageId`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsDomainPackageDetails.property.packageId"></a>

- *Type:* `string`

---

##### `packageName`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsDomainPackageDetails.property.packageName"></a>

- *Type:* `string`

---

##### `packageType`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsDomainPackageDetails.property.packageType"></a>

- *Type:* `string`

---

##### `packageVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsDomainPackageDetails.property.packageVersion"></a>

- *Type:* `string`

---

##### `referencePath`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsDomainPackageDetails.property.referencePath"></a>

- *Type:* `string`

---

### EsebsOptions <a name="aws-cdk-sdk.es.EsebsOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esebsOptions: es.EsebsOptions = { ... }
```

##### `ebsEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsebsOptions.property.ebsEnabled"></a>

- *Type:* `boolean`

---

##### `iops`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsebsOptions.property.iops"></a>

- *Type:* `number`

---

##### `volumeSize`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsebsOptions.property.volumeSize"></a>

- *Type:* `number`

---

##### `volumeType`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsebsOptions.property.volumeType"></a>

- *Type:* `string`

---

### EsebsOptionsStatus <a name="aws-cdk-sdk.es.EsebsOptionsStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esebsOptionsStatus: es.EsebsOptionsStatus = { ... }
```

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsebsOptionsStatus.property.options"></a>

- *Type:* [`aws-cdk-sdk.es.EsebsOptions`](#aws-cdk-sdk.es.EsebsOptions)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsebsOptionsStatus.property.status"></a>

- *Type:* [`aws-cdk-sdk.es.EsOptionStatus`](#aws-cdk-sdk.es.EsOptionStatus)

---

### EsElasticsearchClusterConfig <a name="aws-cdk-sdk.es.EsElasticsearchClusterConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esElasticsearchClusterConfig: es.EsElasticsearchClusterConfig = { ... }
```

##### `dedicatedMasterCount`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsElasticsearchClusterConfig.property.dedicatedMasterCount"></a>

- *Type:* `number`

---

##### `dedicatedMasterEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsElasticsearchClusterConfig.property.dedicatedMasterEnabled"></a>

- *Type:* `boolean`

---

##### `dedicatedMasterType`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsElasticsearchClusterConfig.property.dedicatedMasterType"></a>

- *Type:* `string`

---

##### `instanceCount`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsElasticsearchClusterConfig.property.instanceCount"></a>

- *Type:* `number`

---

##### `instanceType`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsElasticsearchClusterConfig.property.instanceType"></a>

- *Type:* `string`

---

##### `warmCount`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsElasticsearchClusterConfig.property.warmCount"></a>

- *Type:* `number`

---

##### `warmEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsElasticsearchClusterConfig.property.warmEnabled"></a>

- *Type:* `boolean`

---

##### `warmType`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsElasticsearchClusterConfig.property.warmType"></a>

- *Type:* `string`

---

##### `zoneAwarenessConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsElasticsearchClusterConfig.property.zoneAwarenessConfig"></a>

- *Type:* [`aws-cdk-sdk.es.EsZoneAwarenessConfig`](#aws-cdk-sdk.es.EsZoneAwarenessConfig)

---

##### `zoneAwarenessEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsElasticsearchClusterConfig.property.zoneAwarenessEnabled"></a>

- *Type:* `boolean`

---

### EsElasticsearchClusterConfigStatus <a name="aws-cdk-sdk.es.EsElasticsearchClusterConfigStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esElasticsearchClusterConfigStatus: es.EsElasticsearchClusterConfigStatus = { ... }
```

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsElasticsearchClusterConfigStatus.property.options"></a>

- *Type:* [`aws-cdk-sdk.es.EsElasticsearchClusterConfig`](#aws-cdk-sdk.es.EsElasticsearchClusterConfig)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsElasticsearchClusterConfigStatus.property.status"></a>

- *Type:* [`aws-cdk-sdk.es.EsOptionStatus`](#aws-cdk-sdk.es.EsOptionStatus)

---

### EsElasticsearchDomainConfig <a name="aws-cdk-sdk.es.EsElasticsearchDomainConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esElasticsearchDomainConfig: es.EsElasticsearchDomainConfig = { ... }
```

##### `accessPolicies`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsElasticsearchDomainConfig.property.accessPolicies"></a>

- *Type:* [`aws-cdk-sdk.es.EsAccessPoliciesStatus`](#aws-cdk-sdk.es.EsAccessPoliciesStatus)

---

##### `advancedOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsElasticsearchDomainConfig.property.advancedOptions"></a>

- *Type:* [`aws-cdk-sdk.es.EsAdvancedOptionsStatus`](#aws-cdk-sdk.es.EsAdvancedOptionsStatus)

---

##### `advancedSecurityOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsElasticsearchDomainConfig.property.advancedSecurityOptions"></a>

- *Type:* [`aws-cdk-sdk.es.EsAdvancedSecurityOptionsStatus`](#aws-cdk-sdk.es.EsAdvancedSecurityOptionsStatus)

---

##### `cognitoOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsElasticsearchDomainConfig.property.cognitoOptions"></a>

- *Type:* [`aws-cdk-sdk.es.EsCognitoOptionsStatus`](#aws-cdk-sdk.es.EsCognitoOptionsStatus)

---

##### `domainEndpointOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsElasticsearchDomainConfig.property.domainEndpointOptions"></a>

- *Type:* [`aws-cdk-sdk.es.EsDomainEndpointOptionsStatus`](#aws-cdk-sdk.es.EsDomainEndpointOptionsStatus)

---

##### `ebsOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsElasticsearchDomainConfig.property.ebsOptions"></a>

- *Type:* [`aws-cdk-sdk.es.EsebsOptionsStatus`](#aws-cdk-sdk.es.EsebsOptionsStatus)

---

##### `elasticsearchClusterConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsElasticsearchDomainConfig.property.elasticsearchClusterConfig"></a>

- *Type:* [`aws-cdk-sdk.es.EsElasticsearchClusterConfigStatus`](#aws-cdk-sdk.es.EsElasticsearchClusterConfigStatus)

---

##### `elasticsearchVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsElasticsearchDomainConfig.property.elasticsearchVersion"></a>

- *Type:* [`aws-cdk-sdk.es.EsElasticsearchVersionStatus`](#aws-cdk-sdk.es.EsElasticsearchVersionStatus)

---

##### `encryptionAtRestOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsElasticsearchDomainConfig.property.encryptionAtRestOptions"></a>

- *Type:* [`aws-cdk-sdk.es.EsEncryptionAtRestOptionsStatus`](#aws-cdk-sdk.es.EsEncryptionAtRestOptionsStatus)

---

##### `logPublishingOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsElasticsearchDomainConfig.property.logPublishingOptions"></a>

- *Type:* [`aws-cdk-sdk.es.EsLogPublishingOptionsStatus`](#aws-cdk-sdk.es.EsLogPublishingOptionsStatus)

---

##### `nodeToNodeEncryptionOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsElasticsearchDomainConfig.property.nodeToNodeEncryptionOptions"></a>

- *Type:* [`aws-cdk-sdk.es.EsNodeToNodeEncryptionOptionsStatus`](#aws-cdk-sdk.es.EsNodeToNodeEncryptionOptionsStatus)

---

##### `snapshotOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsElasticsearchDomainConfig.property.snapshotOptions"></a>

- *Type:* [`aws-cdk-sdk.es.EsSnapshotOptionsStatus`](#aws-cdk-sdk.es.EsSnapshotOptionsStatus)

---

##### `vpcOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsElasticsearchDomainConfig.property.vpcOptions"></a>

- *Type:* [`aws-cdk-sdk.es.EsvpcDerivedInfoStatus`](#aws-cdk-sdk.es.EsvpcDerivedInfoStatus)

---

### EsElasticsearchDomainStatus <a name="aws-cdk-sdk.es.EsElasticsearchDomainStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esElasticsearchDomainStatus: es.EsElasticsearchDomainStatus = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsElasticsearchDomainStatus.property.arn"></a>

- *Type:* `string`

---

##### `domainId`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsElasticsearchDomainStatus.property.domainId"></a>

- *Type:* `string`

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsElasticsearchDomainStatus.property.domainName"></a>

- *Type:* `string`

---

##### `elasticsearchClusterConfig`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsElasticsearchDomainStatus.property.elasticsearchClusterConfig"></a>

- *Type:* [`aws-cdk-sdk.es.EsElasticsearchClusterConfig`](#aws-cdk-sdk.es.EsElasticsearchClusterConfig)

---

##### `accessPolicies`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsElasticsearchDomainStatus.property.accessPolicies"></a>

- *Type:* `string`

---

##### `advancedOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsElasticsearchDomainStatus.property.advancedOptions"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `advancedSecurityOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsElasticsearchDomainStatus.property.advancedSecurityOptions"></a>

- *Type:* [`aws-cdk-sdk.es.EsAdvancedSecurityOptions`](#aws-cdk-sdk.es.EsAdvancedSecurityOptions)

---

##### `cognitoOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsElasticsearchDomainStatus.property.cognitoOptions"></a>

- *Type:* [`aws-cdk-sdk.es.EsCognitoOptions`](#aws-cdk-sdk.es.EsCognitoOptions)

---

##### `created`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsElasticsearchDomainStatus.property.created"></a>

- *Type:* `boolean`

---

##### `deleted`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsElasticsearchDomainStatus.property.deleted"></a>

- *Type:* `boolean`

---

##### `domainEndpointOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsElasticsearchDomainStatus.property.domainEndpointOptions"></a>

- *Type:* [`aws-cdk-sdk.es.EsDomainEndpointOptions`](#aws-cdk-sdk.es.EsDomainEndpointOptions)

---

##### `ebsOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsElasticsearchDomainStatus.property.ebsOptions"></a>

- *Type:* [`aws-cdk-sdk.es.EsebsOptions`](#aws-cdk-sdk.es.EsebsOptions)

---

##### `elasticsearchVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsElasticsearchDomainStatus.property.elasticsearchVersion"></a>

- *Type:* `string`

---

##### `encryptionAtRestOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsElasticsearchDomainStatus.property.encryptionAtRestOptions"></a>

- *Type:* [`aws-cdk-sdk.es.EsEncryptionAtRestOptions`](#aws-cdk-sdk.es.EsEncryptionAtRestOptions)

---

##### `endpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsElasticsearchDomainStatus.property.endpoint"></a>

- *Type:* `string`

---

##### `endpoints`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsElasticsearchDomainStatus.property.endpoints"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `logPublishingOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsElasticsearchDomainStatus.property.logPublishingOptions"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.es.EsLogPublishingOption`](#aws-cdk-sdk.es.EsLogPublishingOption)}

---

##### `nodeToNodeEncryptionOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsElasticsearchDomainStatus.property.nodeToNodeEncryptionOptions"></a>

- *Type:* [`aws-cdk-sdk.es.EsNodeToNodeEncryptionOptions`](#aws-cdk-sdk.es.EsNodeToNodeEncryptionOptions)

---

##### `processing`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsElasticsearchDomainStatus.property.processing"></a>

- *Type:* `boolean`

---

##### `serviceSoftwareOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsElasticsearchDomainStatus.property.serviceSoftwareOptions"></a>

- *Type:* [`aws-cdk-sdk.es.EsServiceSoftwareOptions`](#aws-cdk-sdk.es.EsServiceSoftwareOptions)

---

##### `snapshotOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsElasticsearchDomainStatus.property.snapshotOptions"></a>

- *Type:* [`aws-cdk-sdk.es.EsSnapshotOptions`](#aws-cdk-sdk.es.EsSnapshotOptions)

---

##### `upgradeProcessing`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsElasticsearchDomainStatus.property.upgradeProcessing"></a>

- *Type:* `boolean`

---

##### `vpcOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsElasticsearchDomainStatus.property.vpcOptions"></a>

- *Type:* [`aws-cdk-sdk.es.EsvpcDerivedInfo`](#aws-cdk-sdk.es.EsvpcDerivedInfo)

---

### EsElasticsearchVersionStatus <a name="aws-cdk-sdk.es.EsElasticsearchVersionStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esElasticsearchVersionStatus: es.EsElasticsearchVersionStatus = { ... }
```

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsElasticsearchVersionStatus.property.options"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsElasticsearchVersionStatus.property.status"></a>

- *Type:* [`aws-cdk-sdk.es.EsOptionStatus`](#aws-cdk-sdk.es.EsOptionStatus)

---

### EsEncryptionAtRestOptions <a name="aws-cdk-sdk.es.EsEncryptionAtRestOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esEncryptionAtRestOptions: es.EsEncryptionAtRestOptions = { ... }
```

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsEncryptionAtRestOptions.property.enabled"></a>

- *Type:* `boolean`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsEncryptionAtRestOptions.property.kmsKeyId"></a>

- *Type:* `string`

---

### EsEncryptionAtRestOptionsStatus <a name="aws-cdk-sdk.es.EsEncryptionAtRestOptionsStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esEncryptionAtRestOptionsStatus: es.EsEncryptionAtRestOptionsStatus = { ... }
```

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsEncryptionAtRestOptionsStatus.property.options"></a>

- *Type:* [`aws-cdk-sdk.es.EsEncryptionAtRestOptions`](#aws-cdk-sdk.es.EsEncryptionAtRestOptions)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsEncryptionAtRestOptionsStatus.property.status"></a>

- *Type:* [`aws-cdk-sdk.es.EsOptionStatus`](#aws-cdk-sdk.es.EsOptionStatus)

---

### EsErrorDetails <a name="aws-cdk-sdk.es.EsErrorDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esErrorDetails: es.EsErrorDetails = { ... }
```

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsErrorDetails.property.errorMessage"></a>

- *Type:* `string`

---

##### `errorType`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsErrorDetails.property.errorType"></a>

- *Type:* `string`

---

### EsFilter <a name="aws-cdk-sdk.es.EsFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esFilter: es.EsFilter = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsFilter.property.name"></a>

- *Type:* `string`

---

##### `values`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsFilter.property.values"></a>

- *Type:* `string`[]

---

### EsGetCompatibleElasticsearchVersionsRequest <a name="aws-cdk-sdk.es.EsGetCompatibleElasticsearchVersionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esGetCompatibleElasticsearchVersionsRequest: es.EsGetCompatibleElasticsearchVersionsRequest = { ... }
```

##### `domainName`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsGetCompatibleElasticsearchVersionsRequest.property.domainName"></a>

- *Type:* `string`

---

### EsGetCompatibleElasticsearchVersionsResponse <a name="aws-cdk-sdk.es.EsGetCompatibleElasticsearchVersionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esGetCompatibleElasticsearchVersionsResponse: es.EsGetCompatibleElasticsearchVersionsResponse = { ... }
```

##### `compatibleElasticsearchVersions`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsGetCompatibleElasticsearchVersionsResponse.property.compatibleElasticsearchVersions"></a>

- *Type:* [`aws-cdk-sdk.es.EsCompatibleVersionsMap`](#aws-cdk-sdk.es.EsCompatibleVersionsMap)[]

---

### EsGetPackageVersionHistoryRequest <a name="aws-cdk-sdk.es.EsGetPackageVersionHistoryRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esGetPackageVersionHistoryRequest: es.EsGetPackageVersionHistoryRequest = { ... }
```

##### `packageId`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsGetPackageVersionHistoryRequest.property.packageId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsGetPackageVersionHistoryRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsGetPackageVersionHistoryRequest.property.nextToken"></a>

- *Type:* `string`

---

### EsGetPackageVersionHistoryResponse <a name="aws-cdk-sdk.es.EsGetPackageVersionHistoryResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esGetPackageVersionHistoryResponse: es.EsGetPackageVersionHistoryResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsGetPackageVersionHistoryResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `packageId`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsGetPackageVersionHistoryResponse.property.packageId"></a>

- *Type:* `string`

---

##### `packageVersionHistoryList`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsGetPackageVersionHistoryResponse.property.packageVersionHistoryList"></a>

- *Type:* [`aws-cdk-sdk.es.EsPackageVersionHistory`](#aws-cdk-sdk.es.EsPackageVersionHistory)[]

---

### EsGetUpgradeHistoryRequest <a name="aws-cdk-sdk.es.EsGetUpgradeHistoryRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esGetUpgradeHistoryRequest: es.EsGetUpgradeHistoryRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsGetUpgradeHistoryRequest.property.domainName"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsGetUpgradeHistoryRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsGetUpgradeHistoryRequest.property.nextToken"></a>

- *Type:* `string`

---

### EsGetUpgradeHistoryResponse <a name="aws-cdk-sdk.es.EsGetUpgradeHistoryResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esGetUpgradeHistoryResponse: es.EsGetUpgradeHistoryResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsGetUpgradeHistoryResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `upgradeHistories`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsGetUpgradeHistoryResponse.property.upgradeHistories"></a>

- *Type:* [`aws-cdk-sdk.es.EsUpgradeHistory`](#aws-cdk-sdk.es.EsUpgradeHistory)[]

---

### EsGetUpgradeStatusRequest <a name="aws-cdk-sdk.es.EsGetUpgradeStatusRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esGetUpgradeStatusRequest: es.EsGetUpgradeStatusRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsGetUpgradeStatusRequest.property.domainName"></a>

- *Type:* `string`

---

### EsGetUpgradeStatusResponse <a name="aws-cdk-sdk.es.EsGetUpgradeStatusResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esGetUpgradeStatusResponse: es.EsGetUpgradeStatusResponse = { ... }
```

##### `stepStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsGetUpgradeStatusResponse.property.stepStatus"></a>

- *Type:* `string`

---

##### `upgradeName`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsGetUpgradeStatusResponse.property.upgradeName"></a>

- *Type:* `string`

---

##### `upgradeStep`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsGetUpgradeStatusResponse.property.upgradeStep"></a>

- *Type:* `string`

---

### EsInboundCrossClusterSearchConnection <a name="aws-cdk-sdk.es.EsInboundCrossClusterSearchConnection"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esInboundCrossClusterSearchConnection: es.EsInboundCrossClusterSearchConnection = { ... }
```

##### `connectionStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsInboundCrossClusterSearchConnection.property.connectionStatus"></a>

- *Type:* [`aws-cdk-sdk.es.EsInboundCrossClusterSearchConnectionStatus`](#aws-cdk-sdk.es.EsInboundCrossClusterSearchConnectionStatus)

---

##### `crossClusterSearchConnectionId`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsInboundCrossClusterSearchConnection.property.crossClusterSearchConnectionId"></a>

- *Type:* `string`

---

##### `destinationDomainInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsInboundCrossClusterSearchConnection.property.destinationDomainInfo"></a>

- *Type:* [`aws-cdk-sdk.es.EsDomainInformation`](#aws-cdk-sdk.es.EsDomainInformation)

---

##### `sourceDomainInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsInboundCrossClusterSearchConnection.property.sourceDomainInfo"></a>

- *Type:* [`aws-cdk-sdk.es.EsDomainInformation`](#aws-cdk-sdk.es.EsDomainInformation)

---

### EsInboundCrossClusterSearchConnectionStatus <a name="aws-cdk-sdk.es.EsInboundCrossClusterSearchConnectionStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esInboundCrossClusterSearchConnectionStatus: es.EsInboundCrossClusterSearchConnectionStatus = { ... }
```

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsInboundCrossClusterSearchConnectionStatus.property.message"></a>

- *Type:* `string`

---

##### `statusCode`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsInboundCrossClusterSearchConnectionStatus.property.statusCode"></a>

- *Type:* `string`

---

### EsInstanceCountLimits <a name="aws-cdk-sdk.es.EsInstanceCountLimits"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esInstanceCountLimits: es.EsInstanceCountLimits = { ... }
```

##### `maximumInstanceCount`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsInstanceCountLimits.property.maximumInstanceCount"></a>

- *Type:* `number`

---

##### `minimumInstanceCount`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsInstanceCountLimits.property.minimumInstanceCount"></a>

- *Type:* `number`

---

### EsInstanceLimits <a name="aws-cdk-sdk.es.EsInstanceLimits"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esInstanceLimits: es.EsInstanceLimits = { ... }
```

##### `instanceCountLimits`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsInstanceLimits.property.instanceCountLimits"></a>

- *Type:* [`aws-cdk-sdk.es.EsInstanceCountLimits`](#aws-cdk-sdk.es.EsInstanceCountLimits)

---

### EsLimits <a name="aws-cdk-sdk.es.EsLimits"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esLimits: es.EsLimits = { ... }
```

##### `additionalLimits`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsLimits.property.additionalLimits"></a>

- *Type:* [`aws-cdk-sdk.es.EsAdditionalLimit`](#aws-cdk-sdk.es.EsAdditionalLimit)[]

---

##### `instanceLimits`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsLimits.property.instanceLimits"></a>

- *Type:* [`aws-cdk-sdk.es.EsInstanceLimits`](#aws-cdk-sdk.es.EsInstanceLimits)

---

##### `storageTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsLimits.property.storageTypes"></a>

- *Type:* [`aws-cdk-sdk.es.EsStorageType`](#aws-cdk-sdk.es.EsStorageType)[]

---

### EsListDomainNamesResponse <a name="aws-cdk-sdk.es.EsListDomainNamesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esListDomainNamesResponse: es.EsListDomainNamesResponse = { ... }
```

##### `domainNames`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsListDomainNamesResponse.property.domainNames"></a>

- *Type:* [`aws-cdk-sdk.es.EsDomainInfo`](#aws-cdk-sdk.es.EsDomainInfo)[]

---

### EsListDomainsForPackageRequest <a name="aws-cdk-sdk.es.EsListDomainsForPackageRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esListDomainsForPackageRequest: es.EsListDomainsForPackageRequest = { ... }
```

##### `packageId`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsListDomainsForPackageRequest.property.packageId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsListDomainsForPackageRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsListDomainsForPackageRequest.property.nextToken"></a>

- *Type:* `string`

---

### EsListDomainsForPackageResponse <a name="aws-cdk-sdk.es.EsListDomainsForPackageResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esListDomainsForPackageResponse: es.EsListDomainsForPackageResponse = { ... }
```

##### `domainPackageDetailsList`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsListDomainsForPackageResponse.property.domainPackageDetailsList"></a>

- *Type:* [`aws-cdk-sdk.es.EsDomainPackageDetails`](#aws-cdk-sdk.es.EsDomainPackageDetails)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsListDomainsForPackageResponse.property.nextToken"></a>

- *Type:* `string`

---

### EsListElasticsearchInstanceTypesRequest <a name="aws-cdk-sdk.es.EsListElasticsearchInstanceTypesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esListElasticsearchInstanceTypesRequest: es.EsListElasticsearchInstanceTypesRequest = { ... }
```

##### `elasticsearchVersion`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsListElasticsearchInstanceTypesRequest.property.elasticsearchVersion"></a>

- *Type:* `string`

---

##### `domainName`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsListElasticsearchInstanceTypesRequest.property.domainName"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsListElasticsearchInstanceTypesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsListElasticsearchInstanceTypesRequest.property.nextToken"></a>

- *Type:* `string`

---

### EsListElasticsearchInstanceTypesResponse <a name="aws-cdk-sdk.es.EsListElasticsearchInstanceTypesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esListElasticsearchInstanceTypesResponse: es.EsListElasticsearchInstanceTypesResponse = { ... }
```

##### `elasticsearchInstanceTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsListElasticsearchInstanceTypesResponse.property.elasticsearchInstanceTypes"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsListElasticsearchInstanceTypesResponse.property.nextToken"></a>

- *Type:* `string`

---

### EsListElasticsearchVersionsRequest <a name="aws-cdk-sdk.es.EsListElasticsearchVersionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esListElasticsearchVersionsRequest: es.EsListElasticsearchVersionsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsListElasticsearchVersionsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsListElasticsearchVersionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### EsListElasticsearchVersionsResponse <a name="aws-cdk-sdk.es.EsListElasticsearchVersionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esListElasticsearchVersionsResponse: es.EsListElasticsearchVersionsResponse = { ... }
```

##### `elasticsearchVersions`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsListElasticsearchVersionsResponse.property.elasticsearchVersions"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsListElasticsearchVersionsResponse.property.nextToken"></a>

- *Type:* `string`

---

### EsListPackagesForDomainRequest <a name="aws-cdk-sdk.es.EsListPackagesForDomainRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esListPackagesForDomainRequest: es.EsListPackagesForDomainRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsListPackagesForDomainRequest.property.domainName"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsListPackagesForDomainRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsListPackagesForDomainRequest.property.nextToken"></a>

- *Type:* `string`

---

### EsListPackagesForDomainResponse <a name="aws-cdk-sdk.es.EsListPackagesForDomainResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esListPackagesForDomainResponse: es.EsListPackagesForDomainResponse = { ... }
```

##### `domainPackageDetailsList`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsListPackagesForDomainResponse.property.domainPackageDetailsList"></a>

- *Type:* [`aws-cdk-sdk.es.EsDomainPackageDetails`](#aws-cdk-sdk.es.EsDomainPackageDetails)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsListPackagesForDomainResponse.property.nextToken"></a>

- *Type:* `string`

---

### EsListTagsRequest <a name="aws-cdk-sdk.es.EsListTagsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esListTagsRequest: es.EsListTagsRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsListTagsRequest.property.arn"></a>

- *Type:* `string`

---

### EsListTagsResponse <a name="aws-cdk-sdk.es.EsListTagsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esListTagsResponse: es.EsListTagsResponse = { ... }
```

##### `tagList`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsListTagsResponse.property.tagList"></a>

- *Type:* [`aws-cdk-sdk.es.EsTag`](#aws-cdk-sdk.es.EsTag)[]

---

### EsLogPublishingOption <a name="aws-cdk-sdk.es.EsLogPublishingOption"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esLogPublishingOption: es.EsLogPublishingOption = { ... }
```

##### `cloudWatchLogsLogGroupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsLogPublishingOption.property.cloudWatchLogsLogGroupArn"></a>

- *Type:* `string`

---

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsLogPublishingOption.property.enabled"></a>

- *Type:* `boolean`

---

### EsLogPublishingOptionsStatus <a name="aws-cdk-sdk.es.EsLogPublishingOptionsStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esLogPublishingOptionsStatus: es.EsLogPublishingOptionsStatus = { ... }
```

##### `options`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsLogPublishingOptionsStatus.property.options"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.es.EsLogPublishingOption`](#aws-cdk-sdk.es.EsLogPublishingOption)}

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsLogPublishingOptionsStatus.property.status"></a>

- *Type:* [`aws-cdk-sdk.es.EsOptionStatus`](#aws-cdk-sdk.es.EsOptionStatus)

---

### EsMasterUserOptions <a name="aws-cdk-sdk.es.EsMasterUserOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esMasterUserOptions: es.EsMasterUserOptions = { ... }
```

##### `masterUserArn`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsMasterUserOptions.property.masterUserArn"></a>

- *Type:* `string`

---

##### `masterUserName`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsMasterUserOptions.property.masterUserName"></a>

- *Type:* `string`

---

##### `masterUserPassword`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsMasterUserOptions.property.masterUserPassword"></a>

- *Type:* `string`

---

### EsNodeToNodeEncryptionOptions <a name="aws-cdk-sdk.es.EsNodeToNodeEncryptionOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esNodeToNodeEncryptionOptions: es.EsNodeToNodeEncryptionOptions = { ... }
```

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsNodeToNodeEncryptionOptions.property.enabled"></a>

- *Type:* `boolean`

---

### EsNodeToNodeEncryptionOptionsStatus <a name="aws-cdk-sdk.es.EsNodeToNodeEncryptionOptionsStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esNodeToNodeEncryptionOptionsStatus: es.EsNodeToNodeEncryptionOptionsStatus = { ... }
```

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsNodeToNodeEncryptionOptionsStatus.property.options"></a>

- *Type:* [`aws-cdk-sdk.es.EsNodeToNodeEncryptionOptions`](#aws-cdk-sdk.es.EsNodeToNodeEncryptionOptions)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsNodeToNodeEncryptionOptionsStatus.property.status"></a>

- *Type:* [`aws-cdk-sdk.es.EsOptionStatus`](#aws-cdk-sdk.es.EsOptionStatus)

---

### EsOptionStatus <a name="aws-cdk-sdk.es.EsOptionStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esOptionStatus: es.EsOptionStatus = { ... }
```

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsOptionStatus.property.creationDate"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsOptionStatus.property.state"></a>

- *Type:* `string`

---

##### `updateDate`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsOptionStatus.property.updateDate"></a>

- *Type:* `string`

---

##### `pendingDeletion`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsOptionStatus.property.pendingDeletion"></a>

- *Type:* `boolean`

---

##### `updateVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsOptionStatus.property.updateVersion"></a>

- *Type:* `number`

---

### EsOutboundCrossClusterSearchConnection <a name="aws-cdk-sdk.es.EsOutboundCrossClusterSearchConnection"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esOutboundCrossClusterSearchConnection: es.EsOutboundCrossClusterSearchConnection = { ... }
```

##### `connectionAlias`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsOutboundCrossClusterSearchConnection.property.connectionAlias"></a>

- *Type:* `string`

---

##### `connectionStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsOutboundCrossClusterSearchConnection.property.connectionStatus"></a>

- *Type:* [`aws-cdk-sdk.es.EsOutboundCrossClusterSearchConnectionStatus`](#aws-cdk-sdk.es.EsOutboundCrossClusterSearchConnectionStatus)

---

##### `crossClusterSearchConnectionId`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsOutboundCrossClusterSearchConnection.property.crossClusterSearchConnectionId"></a>

- *Type:* `string`

---

##### `destinationDomainInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsOutboundCrossClusterSearchConnection.property.destinationDomainInfo"></a>

- *Type:* [`aws-cdk-sdk.es.EsDomainInformation`](#aws-cdk-sdk.es.EsDomainInformation)

---

##### `sourceDomainInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsOutboundCrossClusterSearchConnection.property.sourceDomainInfo"></a>

- *Type:* [`aws-cdk-sdk.es.EsDomainInformation`](#aws-cdk-sdk.es.EsDomainInformation)

---

### EsOutboundCrossClusterSearchConnectionStatus <a name="aws-cdk-sdk.es.EsOutboundCrossClusterSearchConnectionStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esOutboundCrossClusterSearchConnectionStatus: es.EsOutboundCrossClusterSearchConnectionStatus = { ... }
```

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsOutboundCrossClusterSearchConnectionStatus.property.message"></a>

- *Type:* `string`

---

##### `statusCode`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsOutboundCrossClusterSearchConnectionStatus.property.statusCode"></a>

- *Type:* `string`

---

### EsPackageDetails <a name="aws-cdk-sdk.es.EsPackageDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esPackageDetails: es.EsPackageDetails = { ... }
```

##### `availablePackageVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsPackageDetails.property.availablePackageVersion"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsPackageDetails.property.createdAt"></a>

- *Type:* `string`

---

##### `errorDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsPackageDetails.property.errorDetails"></a>

- *Type:* [`aws-cdk-sdk.es.EsErrorDetails`](#aws-cdk-sdk.es.EsErrorDetails)

---

##### `lastUpdatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsPackageDetails.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `packageDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsPackageDetails.property.packageDescription"></a>

- *Type:* `string`

---

##### `packageId`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsPackageDetails.property.packageId"></a>

- *Type:* `string`

---

##### `packageName`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsPackageDetails.property.packageName"></a>

- *Type:* `string`

---

##### `packageStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsPackageDetails.property.packageStatus"></a>

- *Type:* `string`

---

##### `packageType`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsPackageDetails.property.packageType"></a>

- *Type:* `string`

---

### EsPackageSource <a name="aws-cdk-sdk.es.EsPackageSource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esPackageSource: es.EsPackageSource = { ... }
```

##### `s3BucketName`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsPackageSource.property.s3BucketName"></a>

- *Type:* `string`

---

##### `s3Key`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsPackageSource.property.s3Key"></a>

- *Type:* `string`

---

### EsPackageVersionHistory <a name="aws-cdk-sdk.es.EsPackageVersionHistory"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esPackageVersionHistory: es.EsPackageVersionHistory = { ... }
```

##### `commitMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsPackageVersionHistory.property.commitMessage"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsPackageVersionHistory.property.createdAt"></a>

- *Type:* `string`

---

##### `packageVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsPackageVersionHistory.property.packageVersion"></a>

- *Type:* `string`

---

### EsPurchaseReservedElasticsearchInstanceOfferingRequest <a name="aws-cdk-sdk.es.EsPurchaseReservedElasticsearchInstanceOfferingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esPurchaseReservedElasticsearchInstanceOfferingRequest: es.EsPurchaseReservedElasticsearchInstanceOfferingRequest = { ... }
```

##### `reservationName`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsPurchaseReservedElasticsearchInstanceOfferingRequest.property.reservationName"></a>

- *Type:* `string`

---

##### `reservedElasticsearchInstanceOfferingId`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsPurchaseReservedElasticsearchInstanceOfferingRequest.property.reservedElasticsearchInstanceOfferingId"></a>

- *Type:* `string`

---

##### `instanceCount`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsPurchaseReservedElasticsearchInstanceOfferingRequest.property.instanceCount"></a>

- *Type:* `number`

---

### EsPurchaseReservedElasticsearchInstanceOfferingResponse <a name="aws-cdk-sdk.es.EsPurchaseReservedElasticsearchInstanceOfferingResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esPurchaseReservedElasticsearchInstanceOfferingResponse: es.EsPurchaseReservedElasticsearchInstanceOfferingResponse = { ... }
```

##### `reservationName`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsPurchaseReservedElasticsearchInstanceOfferingResponse.property.reservationName"></a>

- *Type:* `string`

---

##### `reservedElasticsearchInstanceId`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsPurchaseReservedElasticsearchInstanceOfferingResponse.property.reservedElasticsearchInstanceId"></a>

- *Type:* `string`

---

### EsRecurringCharge <a name="aws-cdk-sdk.es.EsRecurringCharge"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esRecurringCharge: es.EsRecurringCharge = { ... }
```

##### `recurringChargeAmount`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsRecurringCharge.property.recurringChargeAmount"></a>

- *Type:* `number`

---

##### `recurringChargeFrequency`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsRecurringCharge.property.recurringChargeFrequency"></a>

- *Type:* `string`

---

### EsRejectInboundCrossClusterSearchConnectionRequest <a name="aws-cdk-sdk.es.EsRejectInboundCrossClusterSearchConnectionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esRejectInboundCrossClusterSearchConnectionRequest: es.EsRejectInboundCrossClusterSearchConnectionRequest = { ... }
```

##### `crossClusterSearchConnectionId`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsRejectInboundCrossClusterSearchConnectionRequest.property.crossClusterSearchConnectionId"></a>

- *Type:* `string`

---

### EsRejectInboundCrossClusterSearchConnectionResponse <a name="aws-cdk-sdk.es.EsRejectInboundCrossClusterSearchConnectionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esRejectInboundCrossClusterSearchConnectionResponse: es.EsRejectInboundCrossClusterSearchConnectionResponse = { ... }
```

##### `crossClusterSearchConnection`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsRejectInboundCrossClusterSearchConnectionResponse.property.crossClusterSearchConnection"></a>

- *Type:* [`aws-cdk-sdk.es.EsInboundCrossClusterSearchConnection`](#aws-cdk-sdk.es.EsInboundCrossClusterSearchConnection)

---

### EsRemoveTagsRequest <a name="aws-cdk-sdk.es.EsRemoveTagsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esRemoveTagsRequest: es.EsRemoveTagsRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsRemoveTagsRequest.property.arn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsRemoveTagsRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### EsReservedElasticsearchInstance <a name="aws-cdk-sdk.es.EsReservedElasticsearchInstance"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esReservedElasticsearchInstance: es.EsReservedElasticsearchInstance = { ... }
```

##### `currencyCode`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsReservedElasticsearchInstance.property.currencyCode"></a>

- *Type:* `string`

---

##### `duration`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsReservedElasticsearchInstance.property.duration"></a>

- *Type:* `number`

---

##### `elasticsearchInstanceCount`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsReservedElasticsearchInstance.property.elasticsearchInstanceCount"></a>

- *Type:* `number`

---

##### `elasticsearchInstanceType`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsReservedElasticsearchInstance.property.elasticsearchInstanceType"></a>

- *Type:* `string`

---

##### `fixedPrice`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsReservedElasticsearchInstance.property.fixedPrice"></a>

- *Type:* `number`

---

##### `paymentOption`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsReservedElasticsearchInstance.property.paymentOption"></a>

- *Type:* `string`

---

##### `recurringCharges`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsReservedElasticsearchInstance.property.recurringCharges"></a>

- *Type:* [`aws-cdk-sdk.es.EsRecurringCharge`](#aws-cdk-sdk.es.EsRecurringCharge)[]

---

##### `reservationName`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsReservedElasticsearchInstance.property.reservationName"></a>

- *Type:* `string`

---

##### `reservedElasticsearchInstanceId`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsReservedElasticsearchInstance.property.reservedElasticsearchInstanceId"></a>

- *Type:* `string`

---

##### `reservedElasticsearchInstanceOfferingId`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsReservedElasticsearchInstance.property.reservedElasticsearchInstanceOfferingId"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsReservedElasticsearchInstance.property.startTime"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsReservedElasticsearchInstance.property.state"></a>

- *Type:* `string`

---

##### `usagePrice`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsReservedElasticsearchInstance.property.usagePrice"></a>

- *Type:* `number`

---

### EsReservedElasticsearchInstanceOffering <a name="aws-cdk-sdk.es.EsReservedElasticsearchInstanceOffering"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esReservedElasticsearchInstanceOffering: es.EsReservedElasticsearchInstanceOffering = { ... }
```

##### `currencyCode`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsReservedElasticsearchInstanceOffering.property.currencyCode"></a>

- *Type:* `string`

---

##### `duration`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsReservedElasticsearchInstanceOffering.property.duration"></a>

- *Type:* `number`

---

##### `elasticsearchInstanceType`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsReservedElasticsearchInstanceOffering.property.elasticsearchInstanceType"></a>

- *Type:* `string`

---

##### `fixedPrice`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsReservedElasticsearchInstanceOffering.property.fixedPrice"></a>

- *Type:* `number`

---

##### `paymentOption`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsReservedElasticsearchInstanceOffering.property.paymentOption"></a>

- *Type:* `string`

---

##### `recurringCharges`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsReservedElasticsearchInstanceOffering.property.recurringCharges"></a>

- *Type:* [`aws-cdk-sdk.es.EsRecurringCharge`](#aws-cdk-sdk.es.EsRecurringCharge)[]

---

##### `reservedElasticsearchInstanceOfferingId`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsReservedElasticsearchInstanceOffering.property.reservedElasticsearchInstanceOfferingId"></a>

- *Type:* `string`

---

##### `usagePrice`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsReservedElasticsearchInstanceOffering.property.usagePrice"></a>

- *Type:* `number`

---

### EssamlIdp <a name="aws-cdk-sdk.es.EssamlIdp"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const essamlIdp: es.EssamlIdp = { ... }
```

##### `entityId`<sup>Required</sup> <a name="aws-cdk-sdk.es.EssamlIdp.property.entityId"></a>

- *Type:* `string`

---

##### `metadataContent`<sup>Required</sup> <a name="aws-cdk-sdk.es.EssamlIdp.property.metadataContent"></a>

- *Type:* `string`

---

### EssamlOptionsInput <a name="aws-cdk-sdk.es.EssamlOptionsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const essamlOptionsInput: es.EssamlOptionsInput = { ... }
```

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EssamlOptionsInput.property.enabled"></a>

- *Type:* `boolean`

---

##### `idp`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EssamlOptionsInput.property.idp"></a>

- *Type:* [`aws-cdk-sdk.es.EssamlIdp`](#aws-cdk-sdk.es.EssamlIdp)

---

##### `masterBackendRole`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EssamlOptionsInput.property.masterBackendRole"></a>

- *Type:* `string`

---

##### `masterUserName`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EssamlOptionsInput.property.masterUserName"></a>

- *Type:* `string`

---

##### `rolesKey`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EssamlOptionsInput.property.rolesKey"></a>

- *Type:* `string`

---

##### `sessionTimeoutMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EssamlOptionsInput.property.sessionTimeoutMinutes"></a>

- *Type:* `number`

---

##### `subjectKey`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EssamlOptionsInput.property.subjectKey"></a>

- *Type:* `string`

---

### EssamlOptionsOutput <a name="aws-cdk-sdk.es.EssamlOptionsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const essamlOptionsOutput: es.EssamlOptionsOutput = { ... }
```

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EssamlOptionsOutput.property.enabled"></a>

- *Type:* `boolean`

---

##### `idp`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EssamlOptionsOutput.property.idp"></a>

- *Type:* [`aws-cdk-sdk.es.EssamlIdp`](#aws-cdk-sdk.es.EssamlIdp)

---

##### `rolesKey`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EssamlOptionsOutput.property.rolesKey"></a>

- *Type:* `string`

---

##### `sessionTimeoutMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EssamlOptionsOutput.property.sessionTimeoutMinutes"></a>

- *Type:* `number`

---

##### `subjectKey`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EssamlOptionsOutput.property.subjectKey"></a>

- *Type:* `string`

---

### EsServiceSoftwareOptions <a name="aws-cdk-sdk.es.EsServiceSoftwareOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esServiceSoftwareOptions: es.EsServiceSoftwareOptions = { ... }
```

##### `automatedUpdateDate`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsServiceSoftwareOptions.property.automatedUpdateDate"></a>

- *Type:* `string`

---

##### `cancellable`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsServiceSoftwareOptions.property.cancellable"></a>

- *Type:* `boolean`

---

##### `currentVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsServiceSoftwareOptions.property.currentVersion"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsServiceSoftwareOptions.property.description"></a>

- *Type:* `string`

---

##### `newVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsServiceSoftwareOptions.property.newVersion"></a>

- *Type:* `string`

---

##### `optionalDeployment`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsServiceSoftwareOptions.property.optionalDeployment"></a>

- *Type:* `boolean`

---

##### `updateAvailable`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsServiceSoftwareOptions.property.updateAvailable"></a>

- *Type:* `boolean`

---

##### `updateStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsServiceSoftwareOptions.property.updateStatus"></a>

- *Type:* `string`

---

### EsSnapshotOptions <a name="aws-cdk-sdk.es.EsSnapshotOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esSnapshotOptions: es.EsSnapshotOptions = { ... }
```

##### `automatedSnapshotStartHour`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsSnapshotOptions.property.automatedSnapshotStartHour"></a>

- *Type:* `number`

---

### EsSnapshotOptionsStatus <a name="aws-cdk-sdk.es.EsSnapshotOptionsStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esSnapshotOptionsStatus: es.EsSnapshotOptionsStatus = { ... }
```

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsSnapshotOptionsStatus.property.options"></a>

- *Type:* [`aws-cdk-sdk.es.EsSnapshotOptions`](#aws-cdk-sdk.es.EsSnapshotOptions)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsSnapshotOptionsStatus.property.status"></a>

- *Type:* [`aws-cdk-sdk.es.EsOptionStatus`](#aws-cdk-sdk.es.EsOptionStatus)

---

### EsStartElasticsearchServiceSoftwareUpdateRequest <a name="aws-cdk-sdk.es.EsStartElasticsearchServiceSoftwareUpdateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esStartElasticsearchServiceSoftwareUpdateRequest: es.EsStartElasticsearchServiceSoftwareUpdateRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsStartElasticsearchServiceSoftwareUpdateRequest.property.domainName"></a>

- *Type:* `string`

---

### EsStartElasticsearchServiceSoftwareUpdateResponse <a name="aws-cdk-sdk.es.EsStartElasticsearchServiceSoftwareUpdateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esStartElasticsearchServiceSoftwareUpdateResponse: es.EsStartElasticsearchServiceSoftwareUpdateResponse = { ... }
```

##### `serviceSoftwareOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsStartElasticsearchServiceSoftwareUpdateResponse.property.serviceSoftwareOptions"></a>

- *Type:* [`aws-cdk-sdk.es.EsServiceSoftwareOptions`](#aws-cdk-sdk.es.EsServiceSoftwareOptions)

---

### EsStorageType <a name="aws-cdk-sdk.es.EsStorageType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esStorageType: es.EsStorageType = { ... }
```

##### `storageSubTypeName`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsStorageType.property.storageSubTypeName"></a>

- *Type:* `string`

---

##### `storageTypeLimits`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsStorageType.property.storageTypeLimits"></a>

- *Type:* [`aws-cdk-sdk.es.EsStorageTypeLimit`](#aws-cdk-sdk.es.EsStorageTypeLimit)[]

---

##### `storageTypeName`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsStorageType.property.storageTypeName"></a>

- *Type:* `string`

---

### EsStorageTypeLimit <a name="aws-cdk-sdk.es.EsStorageTypeLimit"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esStorageTypeLimit: es.EsStorageTypeLimit = { ... }
```

##### `limitName`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsStorageTypeLimit.property.limitName"></a>

- *Type:* `string`

---

##### `limitValues`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsStorageTypeLimit.property.limitValues"></a>

- *Type:* `string`[]

---

### EsTag <a name="aws-cdk-sdk.es.EsTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esTag: es.EsTag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsTag.property.value"></a>

- *Type:* `string`

---

### EsUpdateElasticsearchDomainConfigRequest <a name="aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esUpdateElasticsearchDomainConfigRequest: es.EsUpdateElasticsearchDomainConfigRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest.property.domainName"></a>

- *Type:* `string`

---

##### `accessPolicies`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest.property.accessPolicies"></a>

- *Type:* `string`

---

##### `advancedOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest.property.advancedOptions"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `advancedSecurityOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest.property.advancedSecurityOptions"></a>

- *Type:* [`aws-cdk-sdk.es.EsAdvancedSecurityOptionsInput`](#aws-cdk-sdk.es.EsAdvancedSecurityOptionsInput)

---

##### `cognitoOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest.property.cognitoOptions"></a>

- *Type:* [`aws-cdk-sdk.es.EsCognitoOptions`](#aws-cdk-sdk.es.EsCognitoOptions)

---

##### `domainEndpointOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest.property.domainEndpointOptions"></a>

- *Type:* [`aws-cdk-sdk.es.EsDomainEndpointOptions`](#aws-cdk-sdk.es.EsDomainEndpointOptions)

---

##### `ebsOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest.property.ebsOptions"></a>

- *Type:* [`aws-cdk-sdk.es.EsebsOptions`](#aws-cdk-sdk.es.EsebsOptions)

---

##### `elasticsearchClusterConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest.property.elasticsearchClusterConfig"></a>

- *Type:* [`aws-cdk-sdk.es.EsElasticsearchClusterConfig`](#aws-cdk-sdk.es.EsElasticsearchClusterConfig)

---

##### `logPublishingOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest.property.logPublishingOptions"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.es.EsLogPublishingOption`](#aws-cdk-sdk.es.EsLogPublishingOption)}

---

##### `snapshotOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest.property.snapshotOptions"></a>

- *Type:* [`aws-cdk-sdk.es.EsSnapshotOptions`](#aws-cdk-sdk.es.EsSnapshotOptions)

---

##### `vpcOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest.property.vpcOptions"></a>

- *Type:* [`aws-cdk-sdk.es.EsvpcOptions`](#aws-cdk-sdk.es.EsvpcOptions)

---

### EsUpdateElasticsearchDomainConfigResponse <a name="aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esUpdateElasticsearchDomainConfigResponse: es.EsUpdateElasticsearchDomainConfigResponse = { ... }
```

##### `domainConfig`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigResponse.property.domainConfig"></a>

- *Type:* [`aws-cdk-sdk.es.EsElasticsearchDomainConfig`](#aws-cdk-sdk.es.EsElasticsearchDomainConfig)

---

### EsUpdatePackageRequest <a name="aws-cdk-sdk.es.EsUpdatePackageRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esUpdatePackageRequest: es.EsUpdatePackageRequest = { ... }
```

##### `packageId`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsUpdatePackageRequest.property.packageId"></a>

- *Type:* `string`

---

##### `packageSource`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsUpdatePackageRequest.property.packageSource"></a>

- *Type:* [`aws-cdk-sdk.es.EsPackageSource`](#aws-cdk-sdk.es.EsPackageSource)

---

##### `commitMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsUpdatePackageRequest.property.commitMessage"></a>

- *Type:* `string`

---

##### `packageDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsUpdatePackageRequest.property.packageDescription"></a>

- *Type:* `string`

---

### EsUpdatePackageResponse <a name="aws-cdk-sdk.es.EsUpdatePackageResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esUpdatePackageResponse: es.EsUpdatePackageResponse = { ... }
```

##### `packageDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsUpdatePackageResponse.property.packageDetails"></a>

- *Type:* [`aws-cdk-sdk.es.EsPackageDetails`](#aws-cdk-sdk.es.EsPackageDetails)

---

### EsUpgradeElasticsearchDomainRequest <a name="aws-cdk-sdk.es.EsUpgradeElasticsearchDomainRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esUpgradeElasticsearchDomainRequest: es.EsUpgradeElasticsearchDomainRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsUpgradeElasticsearchDomainRequest.property.domainName"></a>

- *Type:* `string`

---

##### `targetVersion`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsUpgradeElasticsearchDomainRequest.property.targetVersion"></a>

- *Type:* `string`

---

##### `performCheckOnly`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsUpgradeElasticsearchDomainRequest.property.performCheckOnly"></a>

- *Type:* `boolean`

---

### EsUpgradeElasticsearchDomainResponse <a name="aws-cdk-sdk.es.EsUpgradeElasticsearchDomainResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esUpgradeElasticsearchDomainResponse: es.EsUpgradeElasticsearchDomainResponse = { ... }
```

##### `domainName`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsUpgradeElasticsearchDomainResponse.property.domainName"></a>

- *Type:* `string`

---

##### `performCheckOnly`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsUpgradeElasticsearchDomainResponse.property.performCheckOnly"></a>

- *Type:* `boolean`

---

##### `targetVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsUpgradeElasticsearchDomainResponse.property.targetVersion"></a>

- *Type:* `string`

---

### EsUpgradeHistory <a name="aws-cdk-sdk.es.EsUpgradeHistory"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esUpgradeHistory: es.EsUpgradeHistory = { ... }
```

##### `startTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsUpgradeHistory.property.startTimestamp"></a>

- *Type:* `string`

---

##### `stepsList`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsUpgradeHistory.property.stepsList"></a>

- *Type:* [`aws-cdk-sdk.es.EsUpgradeStepItem`](#aws-cdk-sdk.es.EsUpgradeStepItem)[]

---

##### `upgradeName`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsUpgradeHistory.property.upgradeName"></a>

- *Type:* `string`

---

##### `upgradeStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsUpgradeHistory.property.upgradeStatus"></a>

- *Type:* `string`

---

### EsUpgradeStepItem <a name="aws-cdk-sdk.es.EsUpgradeStepItem"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esUpgradeStepItem: es.EsUpgradeStepItem = { ... }
```

##### `issues`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsUpgradeStepItem.property.issues"></a>

- *Type:* `string`[]

---

##### `progressPercent`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsUpgradeStepItem.property.progressPercent"></a>

- *Type:* `number`

---

##### `upgradeStep`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsUpgradeStepItem.property.upgradeStep"></a>

- *Type:* `string`

---

##### `upgradeStepStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsUpgradeStepItem.property.upgradeStepStatus"></a>

- *Type:* `string`

---

### EsvpcDerivedInfo <a name="aws-cdk-sdk.es.EsvpcDerivedInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esvpcDerivedInfo: es.EsvpcDerivedInfo = { ... }
```

##### `availabilityZones`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsvpcDerivedInfo.property.availabilityZones"></a>

- *Type:* `string`[]

---

##### `securityGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsvpcDerivedInfo.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnetIds`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsvpcDerivedInfo.property.subnetIds"></a>

- *Type:* `string`[]

---

##### `vpcId`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsvpcDerivedInfo.property.vpcId"></a>

- *Type:* `string`

---

### EsvpcDerivedInfoStatus <a name="aws-cdk-sdk.es.EsvpcDerivedInfoStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esvpcDerivedInfoStatus: es.EsvpcDerivedInfoStatus = { ... }
```

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsvpcDerivedInfoStatus.property.options"></a>

- *Type:* [`aws-cdk-sdk.es.EsvpcDerivedInfo`](#aws-cdk-sdk.es.EsvpcDerivedInfo)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.es.EsvpcDerivedInfoStatus.property.status"></a>

- *Type:* [`aws-cdk-sdk.es.EsOptionStatus`](#aws-cdk-sdk.es.EsOptionStatus)

---

### EsvpcOptions <a name="aws-cdk-sdk.es.EsvpcOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esvpcOptions: es.EsvpcOptions = { ... }
```

##### `securityGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsvpcOptions.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnetIds`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsvpcOptions.property.subnetIds"></a>

- *Type:* `string`[]

---

### EsZoneAwarenessConfig <a name="aws-cdk-sdk.es.EsZoneAwarenessConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

const esZoneAwarenessConfig: es.EsZoneAwarenessConfig = { ... }
```

##### `availabilityZoneCount`<sup>Optional</sup> <a name="aws-cdk-sdk.es.EsZoneAwarenessConfig.property.availabilityZoneCount"></a>

- *Type:* `number`

---

## Classes <a name="Classes"></a>

### ESResponsesAcceptInboundCrossClusterSearchConnection <a name="aws-cdk-sdk.es.ESResponsesAcceptInboundCrossClusterSearchConnection"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesAcceptInboundCrossClusterSearchConnection.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesAcceptInboundCrossClusterSearchConnection(__scope: Construct, __resources: string[], __input: EsAcceptInboundCrossClusterSearchConnectionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesAcceptInboundCrossClusterSearchConnection.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesAcceptInboundCrossClusterSearchConnection.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesAcceptInboundCrossClusterSearchConnection.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsAcceptInboundCrossClusterSearchConnectionRequest`](#aws-cdk-sdk.es.EsAcceptInboundCrossClusterSearchConnectionRequest)

---



#### Properties <a name="Properties"></a>

##### `crossClusterSearchConnection`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesAcceptInboundCrossClusterSearchConnection.property.crossClusterSearchConnection"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesAcceptInboundCrossClusterSearchConnectionCrossClusterSearchConnection`](#aws-cdk-sdk.es.ESResponsesAcceptInboundCrossClusterSearchConnectionCrossClusterSearchConnection)

---


### ESResponsesAcceptInboundCrossClusterSearchConnectionCrossClusterSearchConnection <a name="aws-cdk-sdk.es.ESResponsesAcceptInboundCrossClusterSearchConnectionCrossClusterSearchConnection"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesAcceptInboundCrossClusterSearchConnectionCrossClusterSearchConnection.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesAcceptInboundCrossClusterSearchConnectionCrossClusterSearchConnection(__scope: Construct, __resources: string[], __input: EsAcceptInboundCrossClusterSearchConnectionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesAcceptInboundCrossClusterSearchConnectionCrossClusterSearchConnection.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesAcceptInboundCrossClusterSearchConnectionCrossClusterSearchConnection.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesAcceptInboundCrossClusterSearchConnectionCrossClusterSearchConnection.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsAcceptInboundCrossClusterSearchConnectionRequest`](#aws-cdk-sdk.es.EsAcceptInboundCrossClusterSearchConnectionRequest)

---



#### Properties <a name="Properties"></a>

##### `connectionStatus`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesAcceptInboundCrossClusterSearchConnectionCrossClusterSearchConnection.property.connectionStatus"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesAcceptInboundCrossClusterSearchConnectionCrossClusterSearchConnectionConnectionStatus`](#aws-cdk-sdk.es.ESResponsesAcceptInboundCrossClusterSearchConnectionCrossClusterSearchConnectionConnectionStatus)

---

##### `crossClusterSearchConnectionId`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesAcceptInboundCrossClusterSearchConnectionCrossClusterSearchConnection.property.crossClusterSearchConnectionId"></a>

- *Type:* `string`

---

##### `destinationDomainInfo`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesAcceptInboundCrossClusterSearchConnectionCrossClusterSearchConnection.property.destinationDomainInfo"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesAcceptInboundCrossClusterSearchConnectionCrossClusterSearchConnectionDestinationDomainInfo`](#aws-cdk-sdk.es.ESResponsesAcceptInboundCrossClusterSearchConnectionCrossClusterSearchConnectionDestinationDomainInfo)

---

##### `sourceDomainInfo`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesAcceptInboundCrossClusterSearchConnectionCrossClusterSearchConnection.property.sourceDomainInfo"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesAcceptInboundCrossClusterSearchConnectionCrossClusterSearchConnectionSourceDomainInfo`](#aws-cdk-sdk.es.ESResponsesAcceptInboundCrossClusterSearchConnectionCrossClusterSearchConnectionSourceDomainInfo)

---


### ESResponsesAcceptInboundCrossClusterSearchConnectionCrossClusterSearchConnectionConnectionStatus <a name="aws-cdk-sdk.es.ESResponsesAcceptInboundCrossClusterSearchConnectionCrossClusterSearchConnectionConnectionStatus"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesAcceptInboundCrossClusterSearchConnectionCrossClusterSearchConnectionConnectionStatus.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesAcceptInboundCrossClusterSearchConnectionCrossClusterSearchConnectionConnectionStatus(__scope: Construct, __resources: string[], __input: EsAcceptInboundCrossClusterSearchConnectionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesAcceptInboundCrossClusterSearchConnectionCrossClusterSearchConnectionConnectionStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesAcceptInboundCrossClusterSearchConnectionCrossClusterSearchConnectionConnectionStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesAcceptInboundCrossClusterSearchConnectionCrossClusterSearchConnectionConnectionStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsAcceptInboundCrossClusterSearchConnectionRequest`](#aws-cdk-sdk.es.EsAcceptInboundCrossClusterSearchConnectionRequest)

---



#### Properties <a name="Properties"></a>

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesAcceptInboundCrossClusterSearchConnectionCrossClusterSearchConnectionConnectionStatus.property.message"></a>

- *Type:* `string`

---

##### `statusCode`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesAcceptInboundCrossClusterSearchConnectionCrossClusterSearchConnectionConnectionStatus.property.statusCode"></a>

- *Type:* `string`

---


### ESResponsesAcceptInboundCrossClusterSearchConnectionCrossClusterSearchConnectionDestinationDomainInfo <a name="aws-cdk-sdk.es.ESResponsesAcceptInboundCrossClusterSearchConnectionCrossClusterSearchConnectionDestinationDomainInfo"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesAcceptInboundCrossClusterSearchConnectionCrossClusterSearchConnectionDestinationDomainInfo.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesAcceptInboundCrossClusterSearchConnectionCrossClusterSearchConnectionDestinationDomainInfo(__scope: Construct, __resources: string[], __input: EsAcceptInboundCrossClusterSearchConnectionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesAcceptInboundCrossClusterSearchConnectionCrossClusterSearchConnectionDestinationDomainInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesAcceptInboundCrossClusterSearchConnectionCrossClusterSearchConnectionDestinationDomainInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesAcceptInboundCrossClusterSearchConnectionCrossClusterSearchConnectionDestinationDomainInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsAcceptInboundCrossClusterSearchConnectionRequest`](#aws-cdk-sdk.es.EsAcceptInboundCrossClusterSearchConnectionRequest)

---



#### Properties <a name="Properties"></a>

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesAcceptInboundCrossClusterSearchConnectionCrossClusterSearchConnectionDestinationDomainInfo.property.domainName"></a>

- *Type:* `string`

---

##### `ownerId`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesAcceptInboundCrossClusterSearchConnectionCrossClusterSearchConnectionDestinationDomainInfo.property.ownerId"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesAcceptInboundCrossClusterSearchConnectionCrossClusterSearchConnectionDestinationDomainInfo.property.region"></a>

- *Type:* `string`

---


### ESResponsesAcceptInboundCrossClusterSearchConnectionCrossClusterSearchConnectionSourceDomainInfo <a name="aws-cdk-sdk.es.ESResponsesAcceptInboundCrossClusterSearchConnectionCrossClusterSearchConnectionSourceDomainInfo"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesAcceptInboundCrossClusterSearchConnectionCrossClusterSearchConnectionSourceDomainInfo.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesAcceptInboundCrossClusterSearchConnectionCrossClusterSearchConnectionSourceDomainInfo(__scope: Construct, __resources: string[], __input: EsAcceptInboundCrossClusterSearchConnectionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesAcceptInboundCrossClusterSearchConnectionCrossClusterSearchConnectionSourceDomainInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesAcceptInboundCrossClusterSearchConnectionCrossClusterSearchConnectionSourceDomainInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesAcceptInboundCrossClusterSearchConnectionCrossClusterSearchConnectionSourceDomainInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsAcceptInboundCrossClusterSearchConnectionRequest`](#aws-cdk-sdk.es.EsAcceptInboundCrossClusterSearchConnectionRequest)

---



#### Properties <a name="Properties"></a>

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesAcceptInboundCrossClusterSearchConnectionCrossClusterSearchConnectionSourceDomainInfo.property.domainName"></a>

- *Type:* `string`

---

##### `ownerId`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesAcceptInboundCrossClusterSearchConnectionCrossClusterSearchConnectionSourceDomainInfo.property.ownerId"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesAcceptInboundCrossClusterSearchConnectionCrossClusterSearchConnectionSourceDomainInfo.property.region"></a>

- *Type:* `string`

---


### ESResponsesAssociatePackage <a name="aws-cdk-sdk.es.ESResponsesAssociatePackage"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesAssociatePackage.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesAssociatePackage(__scope: Construct, __resources: string[], __input: EsAssociatePackageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesAssociatePackage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesAssociatePackage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesAssociatePackage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsAssociatePackageRequest`](#aws-cdk-sdk.es.EsAssociatePackageRequest)

---



#### Properties <a name="Properties"></a>

##### `domainPackageDetails`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesAssociatePackage.property.domainPackageDetails"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesAssociatePackageDomainPackageDetails`](#aws-cdk-sdk.es.ESResponsesAssociatePackageDomainPackageDetails)

---


### ESResponsesAssociatePackageDomainPackageDetails <a name="aws-cdk-sdk.es.ESResponsesAssociatePackageDomainPackageDetails"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesAssociatePackageDomainPackageDetails.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesAssociatePackageDomainPackageDetails(__scope: Construct, __resources: string[], __input: EsAssociatePackageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesAssociatePackageDomainPackageDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesAssociatePackageDomainPackageDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesAssociatePackageDomainPackageDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsAssociatePackageRequest`](#aws-cdk-sdk.es.EsAssociatePackageRequest)

---



#### Properties <a name="Properties"></a>

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesAssociatePackageDomainPackageDetails.property.domainName"></a>

- *Type:* `string`

---

##### `domainPackageStatus`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesAssociatePackageDomainPackageDetails.property.domainPackageStatus"></a>

- *Type:* `string`

---

##### `errorDetails`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesAssociatePackageDomainPackageDetails.property.errorDetails"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesAssociatePackageDomainPackageDetailsErrorDetails`](#aws-cdk-sdk.es.ESResponsesAssociatePackageDomainPackageDetailsErrorDetails)

---

##### `lastUpdated`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesAssociatePackageDomainPackageDetails.property.lastUpdated"></a>

- *Type:* `string`

---

##### `packageId`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesAssociatePackageDomainPackageDetails.property.packageId"></a>

- *Type:* `string`

---

##### `packageName`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesAssociatePackageDomainPackageDetails.property.packageName"></a>

- *Type:* `string`

---

##### `packageType`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesAssociatePackageDomainPackageDetails.property.packageType"></a>

- *Type:* `string`

---

##### `packageVersion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesAssociatePackageDomainPackageDetails.property.packageVersion"></a>

- *Type:* `string`

---

##### `referencePath`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesAssociatePackageDomainPackageDetails.property.referencePath"></a>

- *Type:* `string`

---


### ESResponsesAssociatePackageDomainPackageDetailsErrorDetails <a name="aws-cdk-sdk.es.ESResponsesAssociatePackageDomainPackageDetailsErrorDetails"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesAssociatePackageDomainPackageDetailsErrorDetails.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesAssociatePackageDomainPackageDetailsErrorDetails(__scope: Construct, __resources: string[], __input: EsAssociatePackageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesAssociatePackageDomainPackageDetailsErrorDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesAssociatePackageDomainPackageDetailsErrorDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesAssociatePackageDomainPackageDetailsErrorDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsAssociatePackageRequest`](#aws-cdk-sdk.es.EsAssociatePackageRequest)

---



#### Properties <a name="Properties"></a>

##### `errorMessage`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesAssociatePackageDomainPackageDetailsErrorDetails.property.errorMessage"></a>

- *Type:* `string`

---

##### `errorType`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesAssociatePackageDomainPackageDetailsErrorDetails.property.errorType"></a>

- *Type:* `string`

---


### ESResponsesCancelElasticsearchServiceSoftwareUpdate <a name="aws-cdk-sdk.es.ESResponsesCancelElasticsearchServiceSoftwareUpdate"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesCancelElasticsearchServiceSoftwareUpdate.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesCancelElasticsearchServiceSoftwareUpdate(__scope: Construct, __resources: string[], __input: EsCancelElasticsearchServiceSoftwareUpdateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCancelElasticsearchServiceSoftwareUpdate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCancelElasticsearchServiceSoftwareUpdate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCancelElasticsearchServiceSoftwareUpdate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsCancelElasticsearchServiceSoftwareUpdateRequest`](#aws-cdk-sdk.es.EsCancelElasticsearchServiceSoftwareUpdateRequest)

---



#### Properties <a name="Properties"></a>

##### `serviceSoftwareOptions`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCancelElasticsearchServiceSoftwareUpdate.property.serviceSoftwareOptions"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesCancelElasticsearchServiceSoftwareUpdateServiceSoftwareOptions`](#aws-cdk-sdk.es.ESResponsesCancelElasticsearchServiceSoftwareUpdateServiceSoftwareOptions)

---


### ESResponsesCancelElasticsearchServiceSoftwareUpdateServiceSoftwareOptions <a name="aws-cdk-sdk.es.ESResponsesCancelElasticsearchServiceSoftwareUpdateServiceSoftwareOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesCancelElasticsearchServiceSoftwareUpdateServiceSoftwareOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesCancelElasticsearchServiceSoftwareUpdateServiceSoftwareOptions(__scope: Construct, __resources: string[], __input: EsCancelElasticsearchServiceSoftwareUpdateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCancelElasticsearchServiceSoftwareUpdateServiceSoftwareOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCancelElasticsearchServiceSoftwareUpdateServiceSoftwareOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCancelElasticsearchServiceSoftwareUpdateServiceSoftwareOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsCancelElasticsearchServiceSoftwareUpdateRequest`](#aws-cdk-sdk.es.EsCancelElasticsearchServiceSoftwareUpdateRequest)

---



#### Properties <a name="Properties"></a>

##### `automatedUpdateDate`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCancelElasticsearchServiceSoftwareUpdateServiceSoftwareOptions.property.automatedUpdateDate"></a>

- *Type:* `string`

---

##### `cancellable`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCancelElasticsearchServiceSoftwareUpdateServiceSoftwareOptions.property.cancellable"></a>

- *Type:* `boolean`

---

##### `currentVersion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCancelElasticsearchServiceSoftwareUpdateServiceSoftwareOptions.property.currentVersion"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCancelElasticsearchServiceSoftwareUpdateServiceSoftwareOptions.property.description"></a>

- *Type:* `string`

---

##### `newVersion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCancelElasticsearchServiceSoftwareUpdateServiceSoftwareOptions.property.newVersion"></a>

- *Type:* `string`

---

##### `optionalDeployment`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCancelElasticsearchServiceSoftwareUpdateServiceSoftwareOptions.property.optionalDeployment"></a>

- *Type:* `boolean`

---

##### `updateAvailable`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCancelElasticsearchServiceSoftwareUpdateServiceSoftwareOptions.property.updateAvailable"></a>

- *Type:* `boolean`

---

##### `updateStatus`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCancelElasticsearchServiceSoftwareUpdateServiceSoftwareOptions.property.updateStatus"></a>

- *Type:* `string`

---


### ESResponsesCreateElasticsearchDomain <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomain"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomain.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesCreateElasticsearchDomain(__scope: Construct, __resources: string[], __input: EsCreateElasticsearchDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomain.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomain.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomain.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsCreateElasticsearchDomainRequest`](#aws-cdk-sdk.es.EsCreateElasticsearchDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `domainStatus`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomain.property.domainStatus"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatus`](#aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatus)

---


### ESResponsesCreateElasticsearchDomainDomainStatus <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatus"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatus.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesCreateElasticsearchDomainDomainStatus(__scope: Construct, __resources: string[], __input: EsCreateElasticsearchDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsCreateElasticsearchDomainRequest`](#aws-cdk-sdk.es.EsCreateElasticsearchDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `accessPolicies`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatus.property.accessPolicies"></a>

- *Type:* `string`

---

##### `advancedOptions`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatus.property.advancedOptions"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `advancedSecurityOptions`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatus.property.advancedSecurityOptions"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusAdvancedSecurityOptions`](#aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusAdvancedSecurityOptions)

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatus.property.arn"></a>

- *Type:* `string`

---

##### `cognitoOptions`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatus.property.cognitoOptions"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusCognitoOptions`](#aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusCognitoOptions)

---

##### `created`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatus.property.created"></a>

- *Type:* `boolean`

---

##### `deleted`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatus.property.deleted"></a>

- *Type:* `boolean`

---

##### `domainEndpointOptions`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatus.property.domainEndpointOptions"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusDomainEndpointOptions`](#aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusDomainEndpointOptions)

---

##### `domainId`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatus.property.domainId"></a>

- *Type:* `string`

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatus.property.domainName"></a>

- *Type:* `string`

---

##### `ebsOptions`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatus.property.ebsOptions"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusEbsOptions`](#aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusEbsOptions)

---

##### `elasticsearchClusterConfig`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatus.property.elasticsearchClusterConfig"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusElasticsearchClusterConfig`](#aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusElasticsearchClusterConfig)

---

##### `elasticsearchVersion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatus.property.elasticsearchVersion"></a>

- *Type:* `string`

---

##### `encryptionAtRestOptions`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatus.property.encryptionAtRestOptions"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusEncryptionAtRestOptions`](#aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusEncryptionAtRestOptions)

---

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatus.property.endpoint"></a>

- *Type:* `string`

---

##### `endpoints`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatus.property.endpoints"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `logPublishingOptions`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatus.property.logPublishingOptions"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.es.EsLogPublishingOption`](#aws-cdk-sdk.es.EsLogPublishingOption)}

---

##### `nodeToNodeEncryptionOptions`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatus.property.nodeToNodeEncryptionOptions"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusNodeToNodeEncryptionOptions`](#aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusNodeToNodeEncryptionOptions)

---

##### `processing`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatus.property.processing"></a>

- *Type:* `boolean`

---

##### `serviceSoftwareOptions`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatus.property.serviceSoftwareOptions"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusServiceSoftwareOptions`](#aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusServiceSoftwareOptions)

---

##### `snapshotOptions`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatus.property.snapshotOptions"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusSnapshotOptions`](#aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusSnapshotOptions)

---

##### `upgradeProcessing`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatus.property.upgradeProcessing"></a>

- *Type:* `boolean`

---

##### `vpcOptions`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatus.property.vpcOptions"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusVpcOptions`](#aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusVpcOptions)

---


### ESResponsesCreateElasticsearchDomainDomainStatusAdvancedSecurityOptions <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusAdvancedSecurityOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusAdvancedSecurityOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesCreateElasticsearchDomainDomainStatusAdvancedSecurityOptions(__scope: Construct, __resources: string[], __input: EsCreateElasticsearchDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusAdvancedSecurityOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusAdvancedSecurityOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusAdvancedSecurityOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsCreateElasticsearchDomainRequest`](#aws-cdk-sdk.es.EsCreateElasticsearchDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusAdvancedSecurityOptions.property.enabled"></a>

- *Type:* `boolean`

---

##### `internalUserDatabaseEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusAdvancedSecurityOptions.property.internalUserDatabaseEnabled"></a>

- *Type:* `boolean`

---

##### `samlOptions`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusAdvancedSecurityOptions.property.samlOptions"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptions`](#aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptions)

---


### ESResponsesCreateElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptions <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesCreateElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptions(__scope: Construct, __resources: string[], __input: EsCreateElasticsearchDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsCreateElasticsearchDomainRequest`](#aws-cdk-sdk.es.EsCreateElasticsearchDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptions.property.enabled"></a>

- *Type:* `boolean`

---

##### `idp`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptions.property.idp"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptionsIdp`](#aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptionsIdp)

---

##### `rolesKey`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptions.property.rolesKey"></a>

- *Type:* `string`

---

##### `sessionTimeoutMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptions.property.sessionTimeoutMinutes"></a>

- *Type:* `number`

---

##### `subjectKey`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptions.property.subjectKey"></a>

- *Type:* `string`

---


### ESResponsesCreateElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptionsIdp <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptionsIdp"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptionsIdp.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesCreateElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptionsIdp(__scope: Construct, __resources: string[], __input: EsCreateElasticsearchDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptionsIdp.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptionsIdp.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptionsIdp.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsCreateElasticsearchDomainRequest`](#aws-cdk-sdk.es.EsCreateElasticsearchDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `entityId`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptionsIdp.property.entityId"></a>

- *Type:* `string`

---

##### `metadataContent`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptionsIdp.property.metadataContent"></a>

- *Type:* `string`

---


### ESResponsesCreateElasticsearchDomainDomainStatusCognitoOptions <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusCognitoOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusCognitoOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesCreateElasticsearchDomainDomainStatusCognitoOptions(__scope: Construct, __resources: string[], __input: EsCreateElasticsearchDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusCognitoOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusCognitoOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusCognitoOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsCreateElasticsearchDomainRequest`](#aws-cdk-sdk.es.EsCreateElasticsearchDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusCognitoOptions.property.enabled"></a>

- *Type:* `boolean`

---

##### `identityPoolId`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusCognitoOptions.property.identityPoolId"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusCognitoOptions.property.roleArn"></a>

- *Type:* `string`

---

##### `userPoolId`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusCognitoOptions.property.userPoolId"></a>

- *Type:* `string`

---


### ESResponsesCreateElasticsearchDomainDomainStatusDomainEndpointOptions <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusDomainEndpointOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusDomainEndpointOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesCreateElasticsearchDomainDomainStatusDomainEndpointOptions(__scope: Construct, __resources: string[], __input: EsCreateElasticsearchDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusDomainEndpointOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusDomainEndpointOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusDomainEndpointOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsCreateElasticsearchDomainRequest`](#aws-cdk-sdk.es.EsCreateElasticsearchDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `customEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusDomainEndpointOptions.property.customEndpoint"></a>

- *Type:* `string`

---

##### `customEndpointCertificateArn`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusDomainEndpointOptions.property.customEndpointCertificateArn"></a>

- *Type:* `string`

---

##### `customEndpointEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusDomainEndpointOptions.property.customEndpointEnabled"></a>

- *Type:* `boolean`

---

##### `enforceHttps`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusDomainEndpointOptions.property.enforceHttps"></a>

- *Type:* `boolean`

---

##### `tlsSecurityPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusDomainEndpointOptions.property.tlsSecurityPolicy"></a>

- *Type:* `string`

---


### ESResponsesCreateElasticsearchDomainDomainStatusEbsOptions <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusEbsOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusEbsOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesCreateElasticsearchDomainDomainStatusEbsOptions(__scope: Construct, __resources: string[], __input: EsCreateElasticsearchDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusEbsOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusEbsOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusEbsOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsCreateElasticsearchDomainRequest`](#aws-cdk-sdk.es.EsCreateElasticsearchDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `ebsEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusEbsOptions.property.ebsEnabled"></a>

- *Type:* `boolean`

---

##### `iops`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusEbsOptions.property.iops"></a>

- *Type:* `number`

---

##### `volumeSize`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusEbsOptions.property.volumeSize"></a>

- *Type:* `number`

---

##### `volumeType`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusEbsOptions.property.volumeType"></a>

- *Type:* `string`

---


### ESResponsesCreateElasticsearchDomainDomainStatusElasticsearchClusterConfig <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusElasticsearchClusterConfig"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusElasticsearchClusterConfig.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesCreateElasticsearchDomainDomainStatusElasticsearchClusterConfig(__scope: Construct, __resources: string[], __input: EsCreateElasticsearchDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusElasticsearchClusterConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusElasticsearchClusterConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusElasticsearchClusterConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsCreateElasticsearchDomainRequest`](#aws-cdk-sdk.es.EsCreateElasticsearchDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `dedicatedMasterCount`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusElasticsearchClusterConfig.property.dedicatedMasterCount"></a>

- *Type:* `number`

---

##### `dedicatedMasterEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusElasticsearchClusterConfig.property.dedicatedMasterEnabled"></a>

- *Type:* `boolean`

---

##### `dedicatedMasterType`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusElasticsearchClusterConfig.property.dedicatedMasterType"></a>

- *Type:* `string`

---

##### `instanceCount`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusElasticsearchClusterConfig.property.instanceCount"></a>

- *Type:* `number`

---

##### `instanceType`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusElasticsearchClusterConfig.property.instanceType"></a>

- *Type:* `string`

---

##### `warmCount`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusElasticsearchClusterConfig.property.warmCount"></a>

- *Type:* `number`

---

##### `warmEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusElasticsearchClusterConfig.property.warmEnabled"></a>

- *Type:* `boolean`

---

##### `warmType`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusElasticsearchClusterConfig.property.warmType"></a>

- *Type:* `string`

---

##### `zoneAwarenessConfig`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusElasticsearchClusterConfig.property.zoneAwarenessConfig"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusElasticsearchClusterConfigZoneAwarenessConfig`](#aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusElasticsearchClusterConfigZoneAwarenessConfig)

---

##### `zoneAwarenessEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusElasticsearchClusterConfig.property.zoneAwarenessEnabled"></a>

- *Type:* `boolean`

---


### ESResponsesCreateElasticsearchDomainDomainStatusElasticsearchClusterConfigZoneAwarenessConfig <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusElasticsearchClusterConfigZoneAwarenessConfig"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusElasticsearchClusterConfigZoneAwarenessConfig.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesCreateElasticsearchDomainDomainStatusElasticsearchClusterConfigZoneAwarenessConfig(__scope: Construct, __resources: string[], __input: EsCreateElasticsearchDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusElasticsearchClusterConfigZoneAwarenessConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusElasticsearchClusterConfigZoneAwarenessConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusElasticsearchClusterConfigZoneAwarenessConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsCreateElasticsearchDomainRequest`](#aws-cdk-sdk.es.EsCreateElasticsearchDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `availabilityZoneCount`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusElasticsearchClusterConfigZoneAwarenessConfig.property.availabilityZoneCount"></a>

- *Type:* `number`

---


### ESResponsesCreateElasticsearchDomainDomainStatusEncryptionAtRestOptions <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusEncryptionAtRestOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusEncryptionAtRestOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesCreateElasticsearchDomainDomainStatusEncryptionAtRestOptions(__scope: Construct, __resources: string[], __input: EsCreateElasticsearchDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusEncryptionAtRestOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusEncryptionAtRestOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusEncryptionAtRestOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsCreateElasticsearchDomainRequest`](#aws-cdk-sdk.es.EsCreateElasticsearchDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusEncryptionAtRestOptions.property.enabled"></a>

- *Type:* `boolean`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusEncryptionAtRestOptions.property.kmsKeyId"></a>

- *Type:* `string`

---


### ESResponsesCreateElasticsearchDomainDomainStatusNodeToNodeEncryptionOptions <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusNodeToNodeEncryptionOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusNodeToNodeEncryptionOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesCreateElasticsearchDomainDomainStatusNodeToNodeEncryptionOptions(__scope: Construct, __resources: string[], __input: EsCreateElasticsearchDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusNodeToNodeEncryptionOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusNodeToNodeEncryptionOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusNodeToNodeEncryptionOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsCreateElasticsearchDomainRequest`](#aws-cdk-sdk.es.EsCreateElasticsearchDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusNodeToNodeEncryptionOptions.property.enabled"></a>

- *Type:* `boolean`

---


### ESResponsesCreateElasticsearchDomainDomainStatusServiceSoftwareOptions <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusServiceSoftwareOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusServiceSoftwareOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesCreateElasticsearchDomainDomainStatusServiceSoftwareOptions(__scope: Construct, __resources: string[], __input: EsCreateElasticsearchDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusServiceSoftwareOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusServiceSoftwareOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusServiceSoftwareOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsCreateElasticsearchDomainRequest`](#aws-cdk-sdk.es.EsCreateElasticsearchDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `automatedUpdateDate`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusServiceSoftwareOptions.property.automatedUpdateDate"></a>

- *Type:* `string`

---

##### `cancellable`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusServiceSoftwareOptions.property.cancellable"></a>

- *Type:* `boolean`

---

##### `currentVersion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusServiceSoftwareOptions.property.currentVersion"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusServiceSoftwareOptions.property.description"></a>

- *Type:* `string`

---

##### `newVersion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusServiceSoftwareOptions.property.newVersion"></a>

- *Type:* `string`

---

##### `optionalDeployment`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusServiceSoftwareOptions.property.optionalDeployment"></a>

- *Type:* `boolean`

---

##### `updateAvailable`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusServiceSoftwareOptions.property.updateAvailable"></a>

- *Type:* `boolean`

---

##### `updateStatus`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusServiceSoftwareOptions.property.updateStatus"></a>

- *Type:* `string`

---


### ESResponsesCreateElasticsearchDomainDomainStatusSnapshotOptions <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusSnapshotOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusSnapshotOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesCreateElasticsearchDomainDomainStatusSnapshotOptions(__scope: Construct, __resources: string[], __input: EsCreateElasticsearchDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusSnapshotOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusSnapshotOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusSnapshotOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsCreateElasticsearchDomainRequest`](#aws-cdk-sdk.es.EsCreateElasticsearchDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `automatedSnapshotStartHour`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusSnapshotOptions.property.automatedSnapshotStartHour"></a>

- *Type:* `number`

---


### ESResponsesCreateElasticsearchDomainDomainStatusVpcOptions <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusVpcOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusVpcOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesCreateElasticsearchDomainDomainStatusVpcOptions(__scope: Construct, __resources: string[], __input: EsCreateElasticsearchDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusVpcOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusVpcOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusVpcOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsCreateElasticsearchDomainRequest`](#aws-cdk-sdk.es.EsCreateElasticsearchDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `availabilityZones`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusVpcOptions.property.availabilityZones"></a>

- *Type:* `string`[]

---

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusVpcOptions.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnetIds`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusVpcOptions.property.subnetIds"></a>

- *Type:* `string`[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateElasticsearchDomainDomainStatusVpcOptions.property.vpcId"></a>

- *Type:* `string`

---


### ESResponsesCreateOutboundCrossClusterSearchConnection <a name="aws-cdk-sdk.es.ESResponsesCreateOutboundCrossClusterSearchConnection"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesCreateOutboundCrossClusterSearchConnection.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesCreateOutboundCrossClusterSearchConnection(__scope: Construct, __resources: string[], __input: EsCreateOutboundCrossClusterSearchConnectionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateOutboundCrossClusterSearchConnection.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateOutboundCrossClusterSearchConnection.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateOutboundCrossClusterSearchConnection.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsCreateOutboundCrossClusterSearchConnectionRequest`](#aws-cdk-sdk.es.EsCreateOutboundCrossClusterSearchConnectionRequest)

---



#### Properties <a name="Properties"></a>

##### `connectionAlias`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateOutboundCrossClusterSearchConnection.property.connectionAlias"></a>

- *Type:* `string`

---

##### `connectionStatus`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateOutboundCrossClusterSearchConnection.property.connectionStatus"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesCreateOutboundCrossClusterSearchConnectionConnectionStatus`](#aws-cdk-sdk.es.ESResponsesCreateOutboundCrossClusterSearchConnectionConnectionStatus)

---

##### `crossClusterSearchConnectionId`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateOutboundCrossClusterSearchConnection.property.crossClusterSearchConnectionId"></a>

- *Type:* `string`

---

##### `destinationDomainInfo`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateOutboundCrossClusterSearchConnection.property.destinationDomainInfo"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesCreateOutboundCrossClusterSearchConnectionDestinationDomainInfo`](#aws-cdk-sdk.es.ESResponsesCreateOutboundCrossClusterSearchConnectionDestinationDomainInfo)

---

##### `sourceDomainInfo`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateOutboundCrossClusterSearchConnection.property.sourceDomainInfo"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesCreateOutboundCrossClusterSearchConnectionSourceDomainInfo`](#aws-cdk-sdk.es.ESResponsesCreateOutboundCrossClusterSearchConnectionSourceDomainInfo)

---


### ESResponsesCreateOutboundCrossClusterSearchConnectionConnectionStatus <a name="aws-cdk-sdk.es.ESResponsesCreateOutboundCrossClusterSearchConnectionConnectionStatus"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesCreateOutboundCrossClusterSearchConnectionConnectionStatus.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesCreateOutboundCrossClusterSearchConnectionConnectionStatus(__scope: Construct, __resources: string[], __input: EsCreateOutboundCrossClusterSearchConnectionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateOutboundCrossClusterSearchConnectionConnectionStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateOutboundCrossClusterSearchConnectionConnectionStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateOutboundCrossClusterSearchConnectionConnectionStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsCreateOutboundCrossClusterSearchConnectionRequest`](#aws-cdk-sdk.es.EsCreateOutboundCrossClusterSearchConnectionRequest)

---



#### Properties <a name="Properties"></a>

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateOutboundCrossClusterSearchConnectionConnectionStatus.property.message"></a>

- *Type:* `string`

---

##### `statusCode`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateOutboundCrossClusterSearchConnectionConnectionStatus.property.statusCode"></a>

- *Type:* `string`

---


### ESResponsesCreateOutboundCrossClusterSearchConnectionDestinationDomainInfo <a name="aws-cdk-sdk.es.ESResponsesCreateOutboundCrossClusterSearchConnectionDestinationDomainInfo"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesCreateOutboundCrossClusterSearchConnectionDestinationDomainInfo.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesCreateOutboundCrossClusterSearchConnectionDestinationDomainInfo(__scope: Construct, __resources: string[], __input: EsCreateOutboundCrossClusterSearchConnectionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateOutboundCrossClusterSearchConnectionDestinationDomainInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateOutboundCrossClusterSearchConnectionDestinationDomainInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateOutboundCrossClusterSearchConnectionDestinationDomainInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsCreateOutboundCrossClusterSearchConnectionRequest`](#aws-cdk-sdk.es.EsCreateOutboundCrossClusterSearchConnectionRequest)

---



#### Properties <a name="Properties"></a>

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateOutboundCrossClusterSearchConnectionDestinationDomainInfo.property.domainName"></a>

- *Type:* `string`

---

##### `ownerId`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateOutboundCrossClusterSearchConnectionDestinationDomainInfo.property.ownerId"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateOutboundCrossClusterSearchConnectionDestinationDomainInfo.property.region"></a>

- *Type:* `string`

---


### ESResponsesCreateOutboundCrossClusterSearchConnectionSourceDomainInfo <a name="aws-cdk-sdk.es.ESResponsesCreateOutboundCrossClusterSearchConnectionSourceDomainInfo"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesCreateOutboundCrossClusterSearchConnectionSourceDomainInfo.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesCreateOutboundCrossClusterSearchConnectionSourceDomainInfo(__scope: Construct, __resources: string[], __input: EsCreateOutboundCrossClusterSearchConnectionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateOutboundCrossClusterSearchConnectionSourceDomainInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateOutboundCrossClusterSearchConnectionSourceDomainInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateOutboundCrossClusterSearchConnectionSourceDomainInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsCreateOutboundCrossClusterSearchConnectionRequest`](#aws-cdk-sdk.es.EsCreateOutboundCrossClusterSearchConnectionRequest)

---



#### Properties <a name="Properties"></a>

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateOutboundCrossClusterSearchConnectionSourceDomainInfo.property.domainName"></a>

- *Type:* `string`

---

##### `ownerId`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateOutboundCrossClusterSearchConnectionSourceDomainInfo.property.ownerId"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreateOutboundCrossClusterSearchConnectionSourceDomainInfo.property.region"></a>

- *Type:* `string`

---


### ESResponsesCreatePackage <a name="aws-cdk-sdk.es.ESResponsesCreatePackage"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesCreatePackage.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesCreatePackage(__scope: Construct, __resources: string[], __input: EsCreatePackageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreatePackage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreatePackage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreatePackage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsCreatePackageRequest`](#aws-cdk-sdk.es.EsCreatePackageRequest)

---



#### Properties <a name="Properties"></a>

##### `packageDetails`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreatePackage.property.packageDetails"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesCreatePackagePackageDetails`](#aws-cdk-sdk.es.ESResponsesCreatePackagePackageDetails)

---


### ESResponsesCreatePackagePackageDetails <a name="aws-cdk-sdk.es.ESResponsesCreatePackagePackageDetails"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesCreatePackagePackageDetails.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesCreatePackagePackageDetails(__scope: Construct, __resources: string[], __input: EsCreatePackageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreatePackagePackageDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreatePackagePackageDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreatePackagePackageDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsCreatePackageRequest`](#aws-cdk-sdk.es.EsCreatePackageRequest)

---



#### Properties <a name="Properties"></a>

##### `availablePackageVersion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreatePackagePackageDetails.property.availablePackageVersion"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreatePackagePackageDetails.property.createdAt"></a>

- *Type:* `string`

---

##### `errorDetails`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreatePackagePackageDetails.property.errorDetails"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesCreatePackagePackageDetailsErrorDetails`](#aws-cdk-sdk.es.ESResponsesCreatePackagePackageDetailsErrorDetails)

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreatePackagePackageDetails.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `packageDescription`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreatePackagePackageDetails.property.packageDescription"></a>

- *Type:* `string`

---

##### `packageId`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreatePackagePackageDetails.property.packageId"></a>

- *Type:* `string`

---

##### `packageName`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreatePackagePackageDetails.property.packageName"></a>

- *Type:* `string`

---

##### `packageStatus`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreatePackagePackageDetails.property.packageStatus"></a>

- *Type:* `string`

---

##### `packageType`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreatePackagePackageDetails.property.packageType"></a>

- *Type:* `string`

---


### ESResponsesCreatePackagePackageDetailsErrorDetails <a name="aws-cdk-sdk.es.ESResponsesCreatePackagePackageDetailsErrorDetails"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesCreatePackagePackageDetailsErrorDetails.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesCreatePackagePackageDetailsErrorDetails(__scope: Construct, __resources: string[], __input: EsCreatePackageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreatePackagePackageDetailsErrorDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreatePackagePackageDetailsErrorDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreatePackagePackageDetailsErrorDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsCreatePackageRequest`](#aws-cdk-sdk.es.EsCreatePackageRequest)

---



#### Properties <a name="Properties"></a>

##### `errorMessage`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreatePackagePackageDetailsErrorDetails.property.errorMessage"></a>

- *Type:* `string`

---

##### `errorType`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesCreatePackagePackageDetailsErrorDetails.property.errorType"></a>

- *Type:* `string`

---


### ESResponsesDeleteElasticsearchDomain <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomain"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomain.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDeleteElasticsearchDomain(__scope: Construct, __resources: string[], __input: EsDeleteElasticsearchDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomain.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomain.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomain.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDeleteElasticsearchDomainRequest`](#aws-cdk-sdk.es.EsDeleteElasticsearchDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `domainStatus`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomain.property.domainStatus"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatus`](#aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatus)

---


### ESResponsesDeleteElasticsearchDomainDomainStatus <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatus"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatus.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDeleteElasticsearchDomainDomainStatus(__scope: Construct, __resources: string[], __input: EsDeleteElasticsearchDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDeleteElasticsearchDomainRequest`](#aws-cdk-sdk.es.EsDeleteElasticsearchDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `accessPolicies`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatus.property.accessPolicies"></a>

- *Type:* `string`

---

##### `advancedOptions`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatus.property.advancedOptions"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `advancedSecurityOptions`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatus.property.advancedSecurityOptions"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusAdvancedSecurityOptions`](#aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusAdvancedSecurityOptions)

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatus.property.arn"></a>

- *Type:* `string`

---

##### `cognitoOptions`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatus.property.cognitoOptions"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusCognitoOptions`](#aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusCognitoOptions)

---

##### `created`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatus.property.created"></a>

- *Type:* `boolean`

---

##### `deleted`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatus.property.deleted"></a>

- *Type:* `boolean`

---

##### `domainEndpointOptions`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatus.property.domainEndpointOptions"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusDomainEndpointOptions`](#aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusDomainEndpointOptions)

---

##### `domainId`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatus.property.domainId"></a>

- *Type:* `string`

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatus.property.domainName"></a>

- *Type:* `string`

---

##### `ebsOptions`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatus.property.ebsOptions"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusEbsOptions`](#aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusEbsOptions)

---

##### `elasticsearchClusterConfig`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatus.property.elasticsearchClusterConfig"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusElasticsearchClusterConfig`](#aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusElasticsearchClusterConfig)

---

##### `elasticsearchVersion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatus.property.elasticsearchVersion"></a>

- *Type:* `string`

---

##### `encryptionAtRestOptions`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatus.property.encryptionAtRestOptions"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusEncryptionAtRestOptions`](#aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusEncryptionAtRestOptions)

---

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatus.property.endpoint"></a>

- *Type:* `string`

---

##### `endpoints`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatus.property.endpoints"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `logPublishingOptions`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatus.property.logPublishingOptions"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.es.EsLogPublishingOption`](#aws-cdk-sdk.es.EsLogPublishingOption)}

---

##### `nodeToNodeEncryptionOptions`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatus.property.nodeToNodeEncryptionOptions"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusNodeToNodeEncryptionOptions`](#aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusNodeToNodeEncryptionOptions)

---

##### `processing`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatus.property.processing"></a>

- *Type:* `boolean`

---

##### `serviceSoftwareOptions`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatus.property.serviceSoftwareOptions"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusServiceSoftwareOptions`](#aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusServiceSoftwareOptions)

---

##### `snapshotOptions`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatus.property.snapshotOptions"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusSnapshotOptions`](#aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusSnapshotOptions)

---

##### `upgradeProcessing`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatus.property.upgradeProcessing"></a>

- *Type:* `boolean`

---

##### `vpcOptions`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatus.property.vpcOptions"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusVpcOptions`](#aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusVpcOptions)

---


### ESResponsesDeleteElasticsearchDomainDomainStatusAdvancedSecurityOptions <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusAdvancedSecurityOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusAdvancedSecurityOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDeleteElasticsearchDomainDomainStatusAdvancedSecurityOptions(__scope: Construct, __resources: string[], __input: EsDeleteElasticsearchDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusAdvancedSecurityOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusAdvancedSecurityOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusAdvancedSecurityOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDeleteElasticsearchDomainRequest`](#aws-cdk-sdk.es.EsDeleteElasticsearchDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusAdvancedSecurityOptions.property.enabled"></a>

- *Type:* `boolean`

---

##### `internalUserDatabaseEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusAdvancedSecurityOptions.property.internalUserDatabaseEnabled"></a>

- *Type:* `boolean`

---

##### `samlOptions`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusAdvancedSecurityOptions.property.samlOptions"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptions`](#aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptions)

---


### ESResponsesDeleteElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptions <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDeleteElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptions(__scope: Construct, __resources: string[], __input: EsDeleteElasticsearchDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDeleteElasticsearchDomainRequest`](#aws-cdk-sdk.es.EsDeleteElasticsearchDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptions.property.enabled"></a>

- *Type:* `boolean`

---

##### `idp`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptions.property.idp"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptionsIdp`](#aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptionsIdp)

---

##### `rolesKey`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptions.property.rolesKey"></a>

- *Type:* `string`

---

##### `sessionTimeoutMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptions.property.sessionTimeoutMinutes"></a>

- *Type:* `number`

---

##### `subjectKey`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptions.property.subjectKey"></a>

- *Type:* `string`

---


### ESResponsesDeleteElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptionsIdp <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptionsIdp"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptionsIdp.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDeleteElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptionsIdp(__scope: Construct, __resources: string[], __input: EsDeleteElasticsearchDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptionsIdp.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptionsIdp.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptionsIdp.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDeleteElasticsearchDomainRequest`](#aws-cdk-sdk.es.EsDeleteElasticsearchDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `entityId`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptionsIdp.property.entityId"></a>

- *Type:* `string`

---

##### `metadataContent`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptionsIdp.property.metadataContent"></a>

- *Type:* `string`

---


### ESResponsesDeleteElasticsearchDomainDomainStatusCognitoOptions <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusCognitoOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusCognitoOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDeleteElasticsearchDomainDomainStatusCognitoOptions(__scope: Construct, __resources: string[], __input: EsDeleteElasticsearchDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusCognitoOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusCognitoOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusCognitoOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDeleteElasticsearchDomainRequest`](#aws-cdk-sdk.es.EsDeleteElasticsearchDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusCognitoOptions.property.enabled"></a>

- *Type:* `boolean`

---

##### `identityPoolId`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusCognitoOptions.property.identityPoolId"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusCognitoOptions.property.roleArn"></a>

- *Type:* `string`

---

##### `userPoolId`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusCognitoOptions.property.userPoolId"></a>

- *Type:* `string`

---


### ESResponsesDeleteElasticsearchDomainDomainStatusDomainEndpointOptions <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusDomainEndpointOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusDomainEndpointOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDeleteElasticsearchDomainDomainStatusDomainEndpointOptions(__scope: Construct, __resources: string[], __input: EsDeleteElasticsearchDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusDomainEndpointOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusDomainEndpointOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusDomainEndpointOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDeleteElasticsearchDomainRequest`](#aws-cdk-sdk.es.EsDeleteElasticsearchDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `customEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusDomainEndpointOptions.property.customEndpoint"></a>

- *Type:* `string`

---

##### `customEndpointCertificateArn`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusDomainEndpointOptions.property.customEndpointCertificateArn"></a>

- *Type:* `string`

---

##### `customEndpointEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusDomainEndpointOptions.property.customEndpointEnabled"></a>

- *Type:* `boolean`

---

##### `enforceHttps`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusDomainEndpointOptions.property.enforceHttps"></a>

- *Type:* `boolean`

---

##### `tlsSecurityPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusDomainEndpointOptions.property.tlsSecurityPolicy"></a>

- *Type:* `string`

---


### ESResponsesDeleteElasticsearchDomainDomainStatusEbsOptions <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusEbsOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusEbsOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDeleteElasticsearchDomainDomainStatusEbsOptions(__scope: Construct, __resources: string[], __input: EsDeleteElasticsearchDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusEbsOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusEbsOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusEbsOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDeleteElasticsearchDomainRequest`](#aws-cdk-sdk.es.EsDeleteElasticsearchDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `ebsEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusEbsOptions.property.ebsEnabled"></a>

- *Type:* `boolean`

---

##### `iops`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusEbsOptions.property.iops"></a>

- *Type:* `number`

---

##### `volumeSize`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusEbsOptions.property.volumeSize"></a>

- *Type:* `number`

---

##### `volumeType`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusEbsOptions.property.volumeType"></a>

- *Type:* `string`

---


### ESResponsesDeleteElasticsearchDomainDomainStatusElasticsearchClusterConfig <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusElasticsearchClusterConfig"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusElasticsearchClusterConfig.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDeleteElasticsearchDomainDomainStatusElasticsearchClusterConfig(__scope: Construct, __resources: string[], __input: EsDeleteElasticsearchDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusElasticsearchClusterConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusElasticsearchClusterConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusElasticsearchClusterConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDeleteElasticsearchDomainRequest`](#aws-cdk-sdk.es.EsDeleteElasticsearchDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `dedicatedMasterCount`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusElasticsearchClusterConfig.property.dedicatedMasterCount"></a>

- *Type:* `number`

---

##### `dedicatedMasterEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusElasticsearchClusterConfig.property.dedicatedMasterEnabled"></a>

- *Type:* `boolean`

---

##### `dedicatedMasterType`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusElasticsearchClusterConfig.property.dedicatedMasterType"></a>

- *Type:* `string`

---

##### `instanceCount`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusElasticsearchClusterConfig.property.instanceCount"></a>

- *Type:* `number`

---

##### `instanceType`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusElasticsearchClusterConfig.property.instanceType"></a>

- *Type:* `string`

---

##### `warmCount`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusElasticsearchClusterConfig.property.warmCount"></a>

- *Type:* `number`

---

##### `warmEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusElasticsearchClusterConfig.property.warmEnabled"></a>

- *Type:* `boolean`

---

##### `warmType`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusElasticsearchClusterConfig.property.warmType"></a>

- *Type:* `string`

---

##### `zoneAwarenessConfig`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusElasticsearchClusterConfig.property.zoneAwarenessConfig"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusElasticsearchClusterConfigZoneAwarenessConfig`](#aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusElasticsearchClusterConfigZoneAwarenessConfig)

---

##### `zoneAwarenessEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusElasticsearchClusterConfig.property.zoneAwarenessEnabled"></a>

- *Type:* `boolean`

---


### ESResponsesDeleteElasticsearchDomainDomainStatusElasticsearchClusterConfigZoneAwarenessConfig <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusElasticsearchClusterConfigZoneAwarenessConfig"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusElasticsearchClusterConfigZoneAwarenessConfig.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDeleteElasticsearchDomainDomainStatusElasticsearchClusterConfigZoneAwarenessConfig(__scope: Construct, __resources: string[], __input: EsDeleteElasticsearchDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusElasticsearchClusterConfigZoneAwarenessConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusElasticsearchClusterConfigZoneAwarenessConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusElasticsearchClusterConfigZoneAwarenessConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDeleteElasticsearchDomainRequest`](#aws-cdk-sdk.es.EsDeleteElasticsearchDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `availabilityZoneCount`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusElasticsearchClusterConfigZoneAwarenessConfig.property.availabilityZoneCount"></a>

- *Type:* `number`

---


### ESResponsesDeleteElasticsearchDomainDomainStatusEncryptionAtRestOptions <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusEncryptionAtRestOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusEncryptionAtRestOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDeleteElasticsearchDomainDomainStatusEncryptionAtRestOptions(__scope: Construct, __resources: string[], __input: EsDeleteElasticsearchDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusEncryptionAtRestOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusEncryptionAtRestOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusEncryptionAtRestOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDeleteElasticsearchDomainRequest`](#aws-cdk-sdk.es.EsDeleteElasticsearchDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusEncryptionAtRestOptions.property.enabled"></a>

- *Type:* `boolean`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusEncryptionAtRestOptions.property.kmsKeyId"></a>

- *Type:* `string`

---


### ESResponsesDeleteElasticsearchDomainDomainStatusNodeToNodeEncryptionOptions <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusNodeToNodeEncryptionOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusNodeToNodeEncryptionOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDeleteElasticsearchDomainDomainStatusNodeToNodeEncryptionOptions(__scope: Construct, __resources: string[], __input: EsDeleteElasticsearchDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusNodeToNodeEncryptionOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusNodeToNodeEncryptionOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusNodeToNodeEncryptionOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDeleteElasticsearchDomainRequest`](#aws-cdk-sdk.es.EsDeleteElasticsearchDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusNodeToNodeEncryptionOptions.property.enabled"></a>

- *Type:* `boolean`

---


### ESResponsesDeleteElasticsearchDomainDomainStatusServiceSoftwareOptions <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusServiceSoftwareOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusServiceSoftwareOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDeleteElasticsearchDomainDomainStatusServiceSoftwareOptions(__scope: Construct, __resources: string[], __input: EsDeleteElasticsearchDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusServiceSoftwareOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusServiceSoftwareOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusServiceSoftwareOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDeleteElasticsearchDomainRequest`](#aws-cdk-sdk.es.EsDeleteElasticsearchDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `automatedUpdateDate`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusServiceSoftwareOptions.property.automatedUpdateDate"></a>

- *Type:* `string`

---

##### `cancellable`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusServiceSoftwareOptions.property.cancellable"></a>

- *Type:* `boolean`

---

##### `currentVersion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusServiceSoftwareOptions.property.currentVersion"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusServiceSoftwareOptions.property.description"></a>

- *Type:* `string`

---

##### `newVersion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusServiceSoftwareOptions.property.newVersion"></a>

- *Type:* `string`

---

##### `optionalDeployment`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusServiceSoftwareOptions.property.optionalDeployment"></a>

- *Type:* `boolean`

---

##### `updateAvailable`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusServiceSoftwareOptions.property.updateAvailable"></a>

- *Type:* `boolean`

---

##### `updateStatus`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusServiceSoftwareOptions.property.updateStatus"></a>

- *Type:* `string`

---


### ESResponsesDeleteElasticsearchDomainDomainStatusSnapshotOptions <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusSnapshotOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusSnapshotOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDeleteElasticsearchDomainDomainStatusSnapshotOptions(__scope: Construct, __resources: string[], __input: EsDeleteElasticsearchDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusSnapshotOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusSnapshotOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusSnapshotOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDeleteElasticsearchDomainRequest`](#aws-cdk-sdk.es.EsDeleteElasticsearchDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `automatedSnapshotStartHour`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusSnapshotOptions.property.automatedSnapshotStartHour"></a>

- *Type:* `number`

---


### ESResponsesDeleteElasticsearchDomainDomainStatusVpcOptions <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusVpcOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusVpcOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDeleteElasticsearchDomainDomainStatusVpcOptions(__scope: Construct, __resources: string[], __input: EsDeleteElasticsearchDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusVpcOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusVpcOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusVpcOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDeleteElasticsearchDomainRequest`](#aws-cdk-sdk.es.EsDeleteElasticsearchDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `availabilityZones`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusVpcOptions.property.availabilityZones"></a>

- *Type:* `string`[]

---

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusVpcOptions.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnetIds`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusVpcOptions.property.subnetIds"></a>

- *Type:* `string`[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteElasticsearchDomainDomainStatusVpcOptions.property.vpcId"></a>

- *Type:* `string`

---


### ESResponsesDeleteInboundCrossClusterSearchConnection <a name="aws-cdk-sdk.es.ESResponsesDeleteInboundCrossClusterSearchConnection"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDeleteInboundCrossClusterSearchConnection.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDeleteInboundCrossClusterSearchConnection(__scope: Construct, __resources: string[], __input: EsDeleteInboundCrossClusterSearchConnectionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteInboundCrossClusterSearchConnection.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteInboundCrossClusterSearchConnection.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteInboundCrossClusterSearchConnection.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDeleteInboundCrossClusterSearchConnectionRequest`](#aws-cdk-sdk.es.EsDeleteInboundCrossClusterSearchConnectionRequest)

---



#### Properties <a name="Properties"></a>

##### `crossClusterSearchConnection`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteInboundCrossClusterSearchConnection.property.crossClusterSearchConnection"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDeleteInboundCrossClusterSearchConnectionCrossClusterSearchConnection`](#aws-cdk-sdk.es.ESResponsesDeleteInboundCrossClusterSearchConnectionCrossClusterSearchConnection)

---


### ESResponsesDeleteInboundCrossClusterSearchConnectionCrossClusterSearchConnection <a name="aws-cdk-sdk.es.ESResponsesDeleteInboundCrossClusterSearchConnectionCrossClusterSearchConnection"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDeleteInboundCrossClusterSearchConnectionCrossClusterSearchConnection.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDeleteInboundCrossClusterSearchConnectionCrossClusterSearchConnection(__scope: Construct, __resources: string[], __input: EsDeleteInboundCrossClusterSearchConnectionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteInboundCrossClusterSearchConnectionCrossClusterSearchConnection.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteInboundCrossClusterSearchConnectionCrossClusterSearchConnection.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteInboundCrossClusterSearchConnectionCrossClusterSearchConnection.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDeleteInboundCrossClusterSearchConnectionRequest`](#aws-cdk-sdk.es.EsDeleteInboundCrossClusterSearchConnectionRequest)

---



#### Properties <a name="Properties"></a>

##### `connectionStatus`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteInboundCrossClusterSearchConnectionCrossClusterSearchConnection.property.connectionStatus"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDeleteInboundCrossClusterSearchConnectionCrossClusterSearchConnectionConnectionStatus`](#aws-cdk-sdk.es.ESResponsesDeleteInboundCrossClusterSearchConnectionCrossClusterSearchConnectionConnectionStatus)

---

##### `crossClusterSearchConnectionId`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteInboundCrossClusterSearchConnectionCrossClusterSearchConnection.property.crossClusterSearchConnectionId"></a>

- *Type:* `string`

---

##### `destinationDomainInfo`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteInboundCrossClusterSearchConnectionCrossClusterSearchConnection.property.destinationDomainInfo"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDeleteInboundCrossClusterSearchConnectionCrossClusterSearchConnectionDestinationDomainInfo`](#aws-cdk-sdk.es.ESResponsesDeleteInboundCrossClusterSearchConnectionCrossClusterSearchConnectionDestinationDomainInfo)

---

##### `sourceDomainInfo`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteInboundCrossClusterSearchConnectionCrossClusterSearchConnection.property.sourceDomainInfo"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDeleteInboundCrossClusterSearchConnectionCrossClusterSearchConnectionSourceDomainInfo`](#aws-cdk-sdk.es.ESResponsesDeleteInboundCrossClusterSearchConnectionCrossClusterSearchConnectionSourceDomainInfo)

---


### ESResponsesDeleteInboundCrossClusterSearchConnectionCrossClusterSearchConnectionConnectionStatus <a name="aws-cdk-sdk.es.ESResponsesDeleteInboundCrossClusterSearchConnectionCrossClusterSearchConnectionConnectionStatus"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDeleteInboundCrossClusterSearchConnectionCrossClusterSearchConnectionConnectionStatus.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDeleteInboundCrossClusterSearchConnectionCrossClusterSearchConnectionConnectionStatus(__scope: Construct, __resources: string[], __input: EsDeleteInboundCrossClusterSearchConnectionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteInboundCrossClusterSearchConnectionCrossClusterSearchConnectionConnectionStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteInboundCrossClusterSearchConnectionCrossClusterSearchConnectionConnectionStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteInboundCrossClusterSearchConnectionCrossClusterSearchConnectionConnectionStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDeleteInboundCrossClusterSearchConnectionRequest`](#aws-cdk-sdk.es.EsDeleteInboundCrossClusterSearchConnectionRequest)

---



#### Properties <a name="Properties"></a>

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteInboundCrossClusterSearchConnectionCrossClusterSearchConnectionConnectionStatus.property.message"></a>

- *Type:* `string`

---

##### `statusCode`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteInboundCrossClusterSearchConnectionCrossClusterSearchConnectionConnectionStatus.property.statusCode"></a>

- *Type:* `string`

---


### ESResponsesDeleteInboundCrossClusterSearchConnectionCrossClusterSearchConnectionDestinationDomainInfo <a name="aws-cdk-sdk.es.ESResponsesDeleteInboundCrossClusterSearchConnectionCrossClusterSearchConnectionDestinationDomainInfo"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDeleteInboundCrossClusterSearchConnectionCrossClusterSearchConnectionDestinationDomainInfo.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDeleteInboundCrossClusterSearchConnectionCrossClusterSearchConnectionDestinationDomainInfo(__scope: Construct, __resources: string[], __input: EsDeleteInboundCrossClusterSearchConnectionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteInboundCrossClusterSearchConnectionCrossClusterSearchConnectionDestinationDomainInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteInboundCrossClusterSearchConnectionCrossClusterSearchConnectionDestinationDomainInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteInboundCrossClusterSearchConnectionCrossClusterSearchConnectionDestinationDomainInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDeleteInboundCrossClusterSearchConnectionRequest`](#aws-cdk-sdk.es.EsDeleteInboundCrossClusterSearchConnectionRequest)

---



#### Properties <a name="Properties"></a>

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteInboundCrossClusterSearchConnectionCrossClusterSearchConnectionDestinationDomainInfo.property.domainName"></a>

- *Type:* `string`

---

##### `ownerId`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteInboundCrossClusterSearchConnectionCrossClusterSearchConnectionDestinationDomainInfo.property.ownerId"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteInboundCrossClusterSearchConnectionCrossClusterSearchConnectionDestinationDomainInfo.property.region"></a>

- *Type:* `string`

---


### ESResponsesDeleteInboundCrossClusterSearchConnectionCrossClusterSearchConnectionSourceDomainInfo <a name="aws-cdk-sdk.es.ESResponsesDeleteInboundCrossClusterSearchConnectionCrossClusterSearchConnectionSourceDomainInfo"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDeleteInboundCrossClusterSearchConnectionCrossClusterSearchConnectionSourceDomainInfo.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDeleteInboundCrossClusterSearchConnectionCrossClusterSearchConnectionSourceDomainInfo(__scope: Construct, __resources: string[], __input: EsDeleteInboundCrossClusterSearchConnectionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteInboundCrossClusterSearchConnectionCrossClusterSearchConnectionSourceDomainInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteInboundCrossClusterSearchConnectionCrossClusterSearchConnectionSourceDomainInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteInboundCrossClusterSearchConnectionCrossClusterSearchConnectionSourceDomainInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDeleteInboundCrossClusterSearchConnectionRequest`](#aws-cdk-sdk.es.EsDeleteInboundCrossClusterSearchConnectionRequest)

---



#### Properties <a name="Properties"></a>

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteInboundCrossClusterSearchConnectionCrossClusterSearchConnectionSourceDomainInfo.property.domainName"></a>

- *Type:* `string`

---

##### `ownerId`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteInboundCrossClusterSearchConnectionCrossClusterSearchConnectionSourceDomainInfo.property.ownerId"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteInboundCrossClusterSearchConnectionCrossClusterSearchConnectionSourceDomainInfo.property.region"></a>

- *Type:* `string`

---


### ESResponsesDeleteOutboundCrossClusterSearchConnection <a name="aws-cdk-sdk.es.ESResponsesDeleteOutboundCrossClusterSearchConnection"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDeleteOutboundCrossClusterSearchConnection.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDeleteOutboundCrossClusterSearchConnection(__scope: Construct, __resources: string[], __input: EsDeleteOutboundCrossClusterSearchConnectionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteOutboundCrossClusterSearchConnection.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteOutboundCrossClusterSearchConnection.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteOutboundCrossClusterSearchConnection.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDeleteOutboundCrossClusterSearchConnectionRequest`](#aws-cdk-sdk.es.EsDeleteOutboundCrossClusterSearchConnectionRequest)

---



#### Properties <a name="Properties"></a>

##### `crossClusterSearchConnection`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteOutboundCrossClusterSearchConnection.property.crossClusterSearchConnection"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDeleteOutboundCrossClusterSearchConnectionCrossClusterSearchConnection`](#aws-cdk-sdk.es.ESResponsesDeleteOutboundCrossClusterSearchConnectionCrossClusterSearchConnection)

---


### ESResponsesDeleteOutboundCrossClusterSearchConnectionCrossClusterSearchConnection <a name="aws-cdk-sdk.es.ESResponsesDeleteOutboundCrossClusterSearchConnectionCrossClusterSearchConnection"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDeleteOutboundCrossClusterSearchConnectionCrossClusterSearchConnection.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDeleteOutboundCrossClusterSearchConnectionCrossClusterSearchConnection(__scope: Construct, __resources: string[], __input: EsDeleteOutboundCrossClusterSearchConnectionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteOutboundCrossClusterSearchConnectionCrossClusterSearchConnection.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteOutboundCrossClusterSearchConnectionCrossClusterSearchConnection.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteOutboundCrossClusterSearchConnectionCrossClusterSearchConnection.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDeleteOutboundCrossClusterSearchConnectionRequest`](#aws-cdk-sdk.es.EsDeleteOutboundCrossClusterSearchConnectionRequest)

---



#### Properties <a name="Properties"></a>

##### `connectionAlias`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteOutboundCrossClusterSearchConnectionCrossClusterSearchConnection.property.connectionAlias"></a>

- *Type:* `string`

---

##### `connectionStatus`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteOutboundCrossClusterSearchConnectionCrossClusterSearchConnection.property.connectionStatus"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDeleteOutboundCrossClusterSearchConnectionCrossClusterSearchConnectionConnectionStatus`](#aws-cdk-sdk.es.ESResponsesDeleteOutboundCrossClusterSearchConnectionCrossClusterSearchConnectionConnectionStatus)

---

##### `crossClusterSearchConnectionId`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteOutboundCrossClusterSearchConnectionCrossClusterSearchConnection.property.crossClusterSearchConnectionId"></a>

- *Type:* `string`

---

##### `destinationDomainInfo`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteOutboundCrossClusterSearchConnectionCrossClusterSearchConnection.property.destinationDomainInfo"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDeleteOutboundCrossClusterSearchConnectionCrossClusterSearchConnectionDestinationDomainInfo`](#aws-cdk-sdk.es.ESResponsesDeleteOutboundCrossClusterSearchConnectionCrossClusterSearchConnectionDestinationDomainInfo)

---

##### `sourceDomainInfo`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteOutboundCrossClusterSearchConnectionCrossClusterSearchConnection.property.sourceDomainInfo"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDeleteOutboundCrossClusterSearchConnectionCrossClusterSearchConnectionSourceDomainInfo`](#aws-cdk-sdk.es.ESResponsesDeleteOutboundCrossClusterSearchConnectionCrossClusterSearchConnectionSourceDomainInfo)

---


### ESResponsesDeleteOutboundCrossClusterSearchConnectionCrossClusterSearchConnectionConnectionStatus <a name="aws-cdk-sdk.es.ESResponsesDeleteOutboundCrossClusterSearchConnectionCrossClusterSearchConnectionConnectionStatus"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDeleteOutboundCrossClusterSearchConnectionCrossClusterSearchConnectionConnectionStatus.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDeleteOutboundCrossClusterSearchConnectionCrossClusterSearchConnectionConnectionStatus(__scope: Construct, __resources: string[], __input: EsDeleteOutboundCrossClusterSearchConnectionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteOutboundCrossClusterSearchConnectionCrossClusterSearchConnectionConnectionStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteOutboundCrossClusterSearchConnectionCrossClusterSearchConnectionConnectionStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteOutboundCrossClusterSearchConnectionCrossClusterSearchConnectionConnectionStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDeleteOutboundCrossClusterSearchConnectionRequest`](#aws-cdk-sdk.es.EsDeleteOutboundCrossClusterSearchConnectionRequest)

---



#### Properties <a name="Properties"></a>

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteOutboundCrossClusterSearchConnectionCrossClusterSearchConnectionConnectionStatus.property.message"></a>

- *Type:* `string`

---

##### `statusCode`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteOutboundCrossClusterSearchConnectionCrossClusterSearchConnectionConnectionStatus.property.statusCode"></a>

- *Type:* `string`

---


### ESResponsesDeleteOutboundCrossClusterSearchConnectionCrossClusterSearchConnectionDestinationDomainInfo <a name="aws-cdk-sdk.es.ESResponsesDeleteOutboundCrossClusterSearchConnectionCrossClusterSearchConnectionDestinationDomainInfo"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDeleteOutboundCrossClusterSearchConnectionCrossClusterSearchConnectionDestinationDomainInfo.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDeleteOutboundCrossClusterSearchConnectionCrossClusterSearchConnectionDestinationDomainInfo(__scope: Construct, __resources: string[], __input: EsDeleteOutboundCrossClusterSearchConnectionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteOutboundCrossClusterSearchConnectionCrossClusterSearchConnectionDestinationDomainInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteOutboundCrossClusterSearchConnectionCrossClusterSearchConnectionDestinationDomainInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteOutboundCrossClusterSearchConnectionCrossClusterSearchConnectionDestinationDomainInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDeleteOutboundCrossClusterSearchConnectionRequest`](#aws-cdk-sdk.es.EsDeleteOutboundCrossClusterSearchConnectionRequest)

---



#### Properties <a name="Properties"></a>

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteOutboundCrossClusterSearchConnectionCrossClusterSearchConnectionDestinationDomainInfo.property.domainName"></a>

- *Type:* `string`

---

##### `ownerId`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteOutboundCrossClusterSearchConnectionCrossClusterSearchConnectionDestinationDomainInfo.property.ownerId"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteOutboundCrossClusterSearchConnectionCrossClusterSearchConnectionDestinationDomainInfo.property.region"></a>

- *Type:* `string`

---


### ESResponsesDeleteOutboundCrossClusterSearchConnectionCrossClusterSearchConnectionSourceDomainInfo <a name="aws-cdk-sdk.es.ESResponsesDeleteOutboundCrossClusterSearchConnectionCrossClusterSearchConnectionSourceDomainInfo"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDeleteOutboundCrossClusterSearchConnectionCrossClusterSearchConnectionSourceDomainInfo.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDeleteOutboundCrossClusterSearchConnectionCrossClusterSearchConnectionSourceDomainInfo(__scope: Construct, __resources: string[], __input: EsDeleteOutboundCrossClusterSearchConnectionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteOutboundCrossClusterSearchConnectionCrossClusterSearchConnectionSourceDomainInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteOutboundCrossClusterSearchConnectionCrossClusterSearchConnectionSourceDomainInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteOutboundCrossClusterSearchConnectionCrossClusterSearchConnectionSourceDomainInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDeleteOutboundCrossClusterSearchConnectionRequest`](#aws-cdk-sdk.es.EsDeleteOutboundCrossClusterSearchConnectionRequest)

---



#### Properties <a name="Properties"></a>

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteOutboundCrossClusterSearchConnectionCrossClusterSearchConnectionSourceDomainInfo.property.domainName"></a>

- *Type:* `string`

---

##### `ownerId`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteOutboundCrossClusterSearchConnectionCrossClusterSearchConnectionSourceDomainInfo.property.ownerId"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeleteOutboundCrossClusterSearchConnectionCrossClusterSearchConnectionSourceDomainInfo.property.region"></a>

- *Type:* `string`

---


### ESResponsesDeletePackage <a name="aws-cdk-sdk.es.ESResponsesDeletePackage"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDeletePackage.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDeletePackage(__scope: Construct, __resources: string[], __input: EsDeletePackageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeletePackage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeletePackage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeletePackage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDeletePackageRequest`](#aws-cdk-sdk.es.EsDeletePackageRequest)

---



#### Properties <a name="Properties"></a>

##### `packageDetails`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeletePackage.property.packageDetails"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDeletePackagePackageDetails`](#aws-cdk-sdk.es.ESResponsesDeletePackagePackageDetails)

---


### ESResponsesDeletePackagePackageDetails <a name="aws-cdk-sdk.es.ESResponsesDeletePackagePackageDetails"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDeletePackagePackageDetails.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDeletePackagePackageDetails(__scope: Construct, __resources: string[], __input: EsDeletePackageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeletePackagePackageDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeletePackagePackageDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeletePackagePackageDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDeletePackageRequest`](#aws-cdk-sdk.es.EsDeletePackageRequest)

---



#### Properties <a name="Properties"></a>

##### `availablePackageVersion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeletePackagePackageDetails.property.availablePackageVersion"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeletePackagePackageDetails.property.createdAt"></a>

- *Type:* `string`

---

##### `errorDetails`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeletePackagePackageDetails.property.errorDetails"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDeletePackagePackageDetailsErrorDetails`](#aws-cdk-sdk.es.ESResponsesDeletePackagePackageDetailsErrorDetails)

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeletePackagePackageDetails.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `packageDescription`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeletePackagePackageDetails.property.packageDescription"></a>

- *Type:* `string`

---

##### `packageId`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeletePackagePackageDetails.property.packageId"></a>

- *Type:* `string`

---

##### `packageName`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeletePackagePackageDetails.property.packageName"></a>

- *Type:* `string`

---

##### `packageStatus`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeletePackagePackageDetails.property.packageStatus"></a>

- *Type:* `string`

---

##### `packageType`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeletePackagePackageDetails.property.packageType"></a>

- *Type:* `string`

---


### ESResponsesDeletePackagePackageDetailsErrorDetails <a name="aws-cdk-sdk.es.ESResponsesDeletePackagePackageDetailsErrorDetails"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDeletePackagePackageDetailsErrorDetails.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDeletePackagePackageDetailsErrorDetails(__scope: Construct, __resources: string[], __input: EsDeletePackageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeletePackagePackageDetailsErrorDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeletePackagePackageDetailsErrorDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeletePackagePackageDetailsErrorDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDeletePackageRequest`](#aws-cdk-sdk.es.EsDeletePackageRequest)

---



#### Properties <a name="Properties"></a>

##### `errorMessage`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeletePackagePackageDetailsErrorDetails.property.errorMessage"></a>

- *Type:* `string`

---

##### `errorType`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDeletePackagePackageDetailsErrorDetails.property.errorType"></a>

- *Type:* `string`

---


### ESResponsesDescribeElasticsearchDomain <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomain"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomain.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDescribeElasticsearchDomain(__scope: Construct, __resources: string[], __input: EsDescribeElasticsearchDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomain.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomain.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomain.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeElasticsearchDomainRequest`](#aws-cdk-sdk.es.EsDescribeElasticsearchDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `domainStatus`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomain.property.domainStatus"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatus`](#aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatus)

---


### ESResponsesDescribeElasticsearchDomainConfig <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfig"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfig.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDescribeElasticsearchDomainConfig(__scope: Construct, __resources: string[], __input: EsDescribeElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `domainConfig`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfig.property.domainConfig"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfig`](#aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfig)

---


### ESResponsesDescribeElasticsearchDomainConfigDomainConfig <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfig"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfig.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDescribeElasticsearchDomainConfigDomainConfig(__scope: Construct, __resources: string[], __input: EsDescribeElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `accessPolicies`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfig.property.accessPolicies"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAccessPolicies`](#aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAccessPolicies)

---

##### `advancedOptions`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfig.property.advancedOptions"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedOptions`](#aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedOptions)

---

##### `advancedSecurityOptions`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfig.property.advancedSecurityOptions"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedSecurityOptions`](#aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedSecurityOptions)

---

##### `cognitoOptions`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfig.property.cognitoOptions"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigCognitoOptions`](#aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigCognitoOptions)

---

##### `domainEndpointOptions`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfig.property.domainEndpointOptions"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigDomainEndpointOptions`](#aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigDomainEndpointOptions)

---

##### `ebsOptions`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfig.property.ebsOptions"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEbsOptions`](#aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEbsOptions)

---

##### `elasticsearchClusterConfig`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfig.property.elasticsearchClusterConfig"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchClusterConfig`](#aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchClusterConfig)

---

##### `elasticsearchVersion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfig.property.elasticsearchVersion"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchVersion`](#aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchVersion)

---

##### `encryptionAtRestOptions`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfig.property.encryptionAtRestOptions"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEncryptionAtRestOptions`](#aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEncryptionAtRestOptions)

---

##### `logPublishingOptions`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfig.property.logPublishingOptions"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigLogPublishingOptions`](#aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigLogPublishingOptions)

---

##### `nodeToNodeEncryptionOptions`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfig.property.nodeToNodeEncryptionOptions"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptions`](#aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptions)

---

##### `snapshotOptions`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfig.property.snapshotOptions"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigSnapshotOptions`](#aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigSnapshotOptions)

---

##### `vpcOptions`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfig.property.vpcOptions"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigVpcOptions`](#aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigVpcOptions)

---


### ESResponsesDescribeElasticsearchDomainConfigDomainConfigAccessPolicies <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAccessPolicies"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAccessPolicies.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAccessPolicies(__scope: Construct, __resources: string[], __input: EsDescribeElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAccessPolicies.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAccessPolicies.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAccessPolicies.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAccessPolicies.property.options"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAccessPolicies.property.status"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAccessPoliciesStatus`](#aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAccessPoliciesStatus)

---


### ESResponsesDescribeElasticsearchDomainConfigDomainConfigAccessPoliciesStatus <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAccessPoliciesStatus"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAccessPoliciesStatus.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAccessPoliciesStatus(__scope: Construct, __resources: string[], __input: EsDescribeElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAccessPoliciesStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAccessPoliciesStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAccessPoliciesStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAccessPoliciesStatus.property.creationDate"></a>

- *Type:* `string`

---

##### `pendingDeletion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAccessPoliciesStatus.property.pendingDeletion"></a>

- *Type:* `boolean`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAccessPoliciesStatus.property.state"></a>

- *Type:* `string`

---

##### `updateDate`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAccessPoliciesStatus.property.updateDate"></a>

- *Type:* `string`

---

##### `updateVersion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAccessPoliciesStatus.property.updateVersion"></a>

- *Type:* `number`

---


### ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedOptions <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedOptions(__scope: Construct, __resources: string[], __input: EsDescribeElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedOptions.property.options"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedOptions.property.status"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedOptionsStatus`](#aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedOptionsStatus)

---


### ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedOptionsStatus <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedOptionsStatus"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedOptionsStatus.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedOptionsStatus(__scope: Construct, __resources: string[], __input: EsDescribeElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedOptionsStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedOptionsStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedOptionsStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedOptionsStatus.property.creationDate"></a>

- *Type:* `string`

---

##### `pendingDeletion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedOptionsStatus.property.pendingDeletion"></a>

- *Type:* `boolean`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedOptionsStatus.property.state"></a>

- *Type:* `string`

---

##### `updateDate`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedOptionsStatus.property.updateDate"></a>

- *Type:* `string`

---

##### `updateVersion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedOptionsStatus.property.updateVersion"></a>

- *Type:* `number`

---


### ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedSecurityOptions <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedSecurityOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedSecurityOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedSecurityOptions(__scope: Construct, __resources: string[], __input: EsDescribeElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedSecurityOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedSecurityOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedSecurityOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedSecurityOptions.property.options"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptions`](#aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptions)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedSecurityOptions.property.status"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsStatus`](#aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsStatus)

---


### ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptions <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptions(__scope: Construct, __resources: string[], __input: EsDescribeElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptions.property.enabled"></a>

- *Type:* `boolean`

---

##### `internalUserDatabaseEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptions.property.internalUserDatabaseEnabled"></a>

- *Type:* `boolean`

---

##### `samlOptions`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptions.property.samlOptions"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptionsSamlOptions`](#aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptionsSamlOptions)

---


### ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptionsSamlOptions <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptionsSamlOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptionsSamlOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptionsSamlOptions(__scope: Construct, __resources: string[], __input: EsDescribeElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptionsSamlOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptionsSamlOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptionsSamlOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptionsSamlOptions.property.enabled"></a>

- *Type:* `boolean`

---

##### `idp`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptionsSamlOptions.property.idp"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptionsSamlOptionsIdp`](#aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptionsSamlOptionsIdp)

---

##### `rolesKey`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptionsSamlOptions.property.rolesKey"></a>

- *Type:* `string`

---

##### `sessionTimeoutMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptionsSamlOptions.property.sessionTimeoutMinutes"></a>

- *Type:* `number`

---

##### `subjectKey`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptionsSamlOptions.property.subjectKey"></a>

- *Type:* `string`

---


### ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptionsSamlOptionsIdp <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptionsSamlOptionsIdp"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptionsSamlOptionsIdp.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptionsSamlOptionsIdp(__scope: Construct, __resources: string[], __input: EsDescribeElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptionsSamlOptionsIdp.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptionsSamlOptionsIdp.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptionsSamlOptionsIdp.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `entityId`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptionsSamlOptionsIdp.property.entityId"></a>

- *Type:* `string`

---

##### `metadataContent`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptionsSamlOptionsIdp.property.metadataContent"></a>

- *Type:* `string`

---


### ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsStatus <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsStatus"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsStatus.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsStatus(__scope: Construct, __resources: string[], __input: EsDescribeElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsStatus.property.creationDate"></a>

- *Type:* `string`

---

##### `pendingDeletion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsStatus.property.pendingDeletion"></a>

- *Type:* `boolean`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsStatus.property.state"></a>

- *Type:* `string`

---

##### `updateDate`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsStatus.property.updateDate"></a>

- *Type:* `string`

---

##### `updateVersion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsStatus.property.updateVersion"></a>

- *Type:* `number`

---


### ESResponsesDescribeElasticsearchDomainConfigDomainConfigCognitoOptions <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigCognitoOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigCognitoOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigCognitoOptions(__scope: Construct, __resources: string[], __input: EsDescribeElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigCognitoOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigCognitoOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigCognitoOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigCognitoOptions.property.options"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigCognitoOptionsOptions`](#aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigCognitoOptionsOptions)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigCognitoOptions.property.status"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigCognitoOptionsStatus`](#aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigCognitoOptionsStatus)

---


### ESResponsesDescribeElasticsearchDomainConfigDomainConfigCognitoOptionsOptions <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigCognitoOptionsOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigCognitoOptionsOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigCognitoOptionsOptions(__scope: Construct, __resources: string[], __input: EsDescribeElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigCognitoOptionsOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigCognitoOptionsOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigCognitoOptionsOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigCognitoOptionsOptions.property.enabled"></a>

- *Type:* `boolean`

---

##### `identityPoolId`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigCognitoOptionsOptions.property.identityPoolId"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigCognitoOptionsOptions.property.roleArn"></a>

- *Type:* `string`

---

##### `userPoolId`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigCognitoOptionsOptions.property.userPoolId"></a>

- *Type:* `string`

---


### ESResponsesDescribeElasticsearchDomainConfigDomainConfigCognitoOptionsStatus <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigCognitoOptionsStatus"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigCognitoOptionsStatus.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigCognitoOptionsStatus(__scope: Construct, __resources: string[], __input: EsDescribeElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigCognitoOptionsStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigCognitoOptionsStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigCognitoOptionsStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigCognitoOptionsStatus.property.creationDate"></a>

- *Type:* `string`

---

##### `pendingDeletion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigCognitoOptionsStatus.property.pendingDeletion"></a>

- *Type:* `boolean`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigCognitoOptionsStatus.property.state"></a>

- *Type:* `string`

---

##### `updateDate`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigCognitoOptionsStatus.property.updateDate"></a>

- *Type:* `string`

---

##### `updateVersion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigCognitoOptionsStatus.property.updateVersion"></a>

- *Type:* `number`

---


### ESResponsesDescribeElasticsearchDomainConfigDomainConfigDomainEndpointOptions <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigDomainEndpointOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigDomainEndpointOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigDomainEndpointOptions(__scope: Construct, __resources: string[], __input: EsDescribeElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigDomainEndpointOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigDomainEndpointOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigDomainEndpointOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigDomainEndpointOptions.property.options"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigDomainEndpointOptionsOptions`](#aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigDomainEndpointOptionsOptions)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigDomainEndpointOptions.property.status"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigDomainEndpointOptionsStatus`](#aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigDomainEndpointOptionsStatus)

---


### ESResponsesDescribeElasticsearchDomainConfigDomainConfigDomainEndpointOptionsOptions <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigDomainEndpointOptionsOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigDomainEndpointOptionsOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigDomainEndpointOptionsOptions(__scope: Construct, __resources: string[], __input: EsDescribeElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigDomainEndpointOptionsOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigDomainEndpointOptionsOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigDomainEndpointOptionsOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `customEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigDomainEndpointOptionsOptions.property.customEndpoint"></a>

- *Type:* `string`

---

##### `customEndpointCertificateArn`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigDomainEndpointOptionsOptions.property.customEndpointCertificateArn"></a>

- *Type:* `string`

---

##### `customEndpointEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigDomainEndpointOptionsOptions.property.customEndpointEnabled"></a>

- *Type:* `boolean`

---

##### `enforceHttps`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigDomainEndpointOptionsOptions.property.enforceHttps"></a>

- *Type:* `boolean`

---

##### `tlsSecurityPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigDomainEndpointOptionsOptions.property.tlsSecurityPolicy"></a>

- *Type:* `string`

---


### ESResponsesDescribeElasticsearchDomainConfigDomainConfigDomainEndpointOptionsStatus <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigDomainEndpointOptionsStatus"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigDomainEndpointOptionsStatus.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigDomainEndpointOptionsStatus(__scope: Construct, __resources: string[], __input: EsDescribeElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigDomainEndpointOptionsStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigDomainEndpointOptionsStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigDomainEndpointOptionsStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigDomainEndpointOptionsStatus.property.creationDate"></a>

- *Type:* `string`

---

##### `pendingDeletion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigDomainEndpointOptionsStatus.property.pendingDeletion"></a>

- *Type:* `boolean`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigDomainEndpointOptionsStatus.property.state"></a>

- *Type:* `string`

---

##### `updateDate`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigDomainEndpointOptionsStatus.property.updateDate"></a>

- *Type:* `string`

---

##### `updateVersion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigDomainEndpointOptionsStatus.property.updateVersion"></a>

- *Type:* `number`

---


### ESResponsesDescribeElasticsearchDomainConfigDomainConfigEbsOptions <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEbsOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEbsOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEbsOptions(__scope: Construct, __resources: string[], __input: EsDescribeElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEbsOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEbsOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEbsOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEbsOptions.property.options"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEbsOptionsOptions`](#aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEbsOptionsOptions)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEbsOptions.property.status"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEbsOptionsStatus`](#aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEbsOptionsStatus)

---


### ESResponsesDescribeElasticsearchDomainConfigDomainConfigEbsOptionsOptions <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEbsOptionsOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEbsOptionsOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEbsOptionsOptions(__scope: Construct, __resources: string[], __input: EsDescribeElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEbsOptionsOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEbsOptionsOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEbsOptionsOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `ebsEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEbsOptionsOptions.property.ebsEnabled"></a>

- *Type:* `boolean`

---

##### `iops`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEbsOptionsOptions.property.iops"></a>

- *Type:* `number`

---

##### `volumeSize`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEbsOptionsOptions.property.volumeSize"></a>

- *Type:* `number`

---

##### `volumeType`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEbsOptionsOptions.property.volumeType"></a>

- *Type:* `string`

---


### ESResponsesDescribeElasticsearchDomainConfigDomainConfigEbsOptionsStatus <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEbsOptionsStatus"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEbsOptionsStatus.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEbsOptionsStatus(__scope: Construct, __resources: string[], __input: EsDescribeElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEbsOptionsStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEbsOptionsStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEbsOptionsStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEbsOptionsStatus.property.creationDate"></a>

- *Type:* `string`

---

##### `pendingDeletion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEbsOptionsStatus.property.pendingDeletion"></a>

- *Type:* `boolean`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEbsOptionsStatus.property.state"></a>

- *Type:* `string`

---

##### `updateDate`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEbsOptionsStatus.property.updateDate"></a>

- *Type:* `string`

---

##### `updateVersion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEbsOptionsStatus.property.updateVersion"></a>

- *Type:* `number`

---


### ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchClusterConfig <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchClusterConfig"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchClusterConfig.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchClusterConfig(__scope: Construct, __resources: string[], __input: EsDescribeElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchClusterConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchClusterConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchClusterConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchClusterConfig.property.options"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigOptions`](#aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigOptions)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchClusterConfig.property.status"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigStatus`](#aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigStatus)

---


### ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigOptions <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigOptions(__scope: Construct, __resources: string[], __input: EsDescribeElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `dedicatedMasterCount`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigOptions.property.dedicatedMasterCount"></a>

- *Type:* `number`

---

##### `dedicatedMasterEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigOptions.property.dedicatedMasterEnabled"></a>

- *Type:* `boolean`

---

##### `dedicatedMasterType`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigOptions.property.dedicatedMasterType"></a>

- *Type:* `string`

---

##### `instanceCount`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigOptions.property.instanceCount"></a>

- *Type:* `number`

---

##### `instanceType`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigOptions.property.instanceType"></a>

- *Type:* `string`

---

##### `warmCount`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigOptions.property.warmCount"></a>

- *Type:* `number`

---

##### `warmEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigOptions.property.warmEnabled"></a>

- *Type:* `boolean`

---

##### `warmType`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigOptions.property.warmType"></a>

- *Type:* `string`

---

##### `zoneAwarenessConfig`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigOptions.property.zoneAwarenessConfig"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigOptionsZoneAwarenessConfig`](#aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigOptionsZoneAwarenessConfig)

---

##### `zoneAwarenessEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigOptions.property.zoneAwarenessEnabled"></a>

- *Type:* `boolean`

---


### ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigOptionsZoneAwarenessConfig <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigOptionsZoneAwarenessConfig"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigOptionsZoneAwarenessConfig.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigOptionsZoneAwarenessConfig(__scope: Construct, __resources: string[], __input: EsDescribeElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigOptionsZoneAwarenessConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigOptionsZoneAwarenessConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigOptionsZoneAwarenessConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `availabilityZoneCount`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigOptionsZoneAwarenessConfig.property.availabilityZoneCount"></a>

- *Type:* `number`

---


### ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigStatus <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigStatus"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigStatus.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigStatus(__scope: Construct, __resources: string[], __input: EsDescribeElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigStatus.property.creationDate"></a>

- *Type:* `string`

---

##### `pendingDeletion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigStatus.property.pendingDeletion"></a>

- *Type:* `boolean`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigStatus.property.state"></a>

- *Type:* `string`

---

##### `updateDate`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigStatus.property.updateDate"></a>

- *Type:* `string`

---

##### `updateVersion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigStatus.property.updateVersion"></a>

- *Type:* `number`

---


### ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchVersion <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchVersion"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchVersion.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchVersion(__scope: Construct, __resources: string[], __input: EsDescribeElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchVersion.property.options"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchVersion.property.status"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchVersionStatus`](#aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchVersionStatus)

---


### ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchVersionStatus <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchVersionStatus"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchVersionStatus.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchVersionStatus(__scope: Construct, __resources: string[], __input: EsDescribeElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchVersionStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchVersionStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchVersionStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchVersionStatus.property.creationDate"></a>

- *Type:* `string`

---

##### `pendingDeletion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchVersionStatus.property.pendingDeletion"></a>

- *Type:* `boolean`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchVersionStatus.property.state"></a>

- *Type:* `string`

---

##### `updateDate`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchVersionStatus.property.updateDate"></a>

- *Type:* `string`

---

##### `updateVersion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigElasticsearchVersionStatus.property.updateVersion"></a>

- *Type:* `number`

---


### ESResponsesDescribeElasticsearchDomainConfigDomainConfigEncryptionAtRestOptions <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEncryptionAtRestOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEncryptionAtRestOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEncryptionAtRestOptions(__scope: Construct, __resources: string[], __input: EsDescribeElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEncryptionAtRestOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEncryptionAtRestOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEncryptionAtRestOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEncryptionAtRestOptions.property.options"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEncryptionAtRestOptionsOptions`](#aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEncryptionAtRestOptionsOptions)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEncryptionAtRestOptions.property.status"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEncryptionAtRestOptionsStatus`](#aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEncryptionAtRestOptionsStatus)

---


### ESResponsesDescribeElasticsearchDomainConfigDomainConfigEncryptionAtRestOptionsOptions <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEncryptionAtRestOptionsOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEncryptionAtRestOptionsOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEncryptionAtRestOptionsOptions(__scope: Construct, __resources: string[], __input: EsDescribeElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEncryptionAtRestOptionsOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEncryptionAtRestOptionsOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEncryptionAtRestOptionsOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEncryptionAtRestOptionsOptions.property.enabled"></a>

- *Type:* `boolean`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEncryptionAtRestOptionsOptions.property.kmsKeyId"></a>

- *Type:* `string`

---


### ESResponsesDescribeElasticsearchDomainConfigDomainConfigEncryptionAtRestOptionsStatus <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEncryptionAtRestOptionsStatus"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEncryptionAtRestOptionsStatus.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEncryptionAtRestOptionsStatus(__scope: Construct, __resources: string[], __input: EsDescribeElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEncryptionAtRestOptionsStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEncryptionAtRestOptionsStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEncryptionAtRestOptionsStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEncryptionAtRestOptionsStatus.property.creationDate"></a>

- *Type:* `string`

---

##### `pendingDeletion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEncryptionAtRestOptionsStatus.property.pendingDeletion"></a>

- *Type:* `boolean`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEncryptionAtRestOptionsStatus.property.state"></a>

- *Type:* `string`

---

##### `updateDate`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEncryptionAtRestOptionsStatus.property.updateDate"></a>

- *Type:* `string`

---

##### `updateVersion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigEncryptionAtRestOptionsStatus.property.updateVersion"></a>

- *Type:* `number`

---


### ESResponsesDescribeElasticsearchDomainConfigDomainConfigLogPublishingOptions <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigLogPublishingOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigLogPublishingOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigLogPublishingOptions(__scope: Construct, __resources: string[], __input: EsDescribeElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigLogPublishingOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigLogPublishingOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigLogPublishingOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigLogPublishingOptions.property.options"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.es.EsLogPublishingOption`](#aws-cdk-sdk.es.EsLogPublishingOption)}

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigLogPublishingOptions.property.status"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigLogPublishingOptionsStatus`](#aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigLogPublishingOptionsStatus)

---


### ESResponsesDescribeElasticsearchDomainConfigDomainConfigLogPublishingOptionsStatus <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigLogPublishingOptionsStatus"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigLogPublishingOptionsStatus.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigLogPublishingOptionsStatus(__scope: Construct, __resources: string[], __input: EsDescribeElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigLogPublishingOptionsStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigLogPublishingOptionsStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigLogPublishingOptionsStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigLogPublishingOptionsStatus.property.creationDate"></a>

- *Type:* `string`

---

##### `pendingDeletion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigLogPublishingOptionsStatus.property.pendingDeletion"></a>

- *Type:* `boolean`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigLogPublishingOptionsStatus.property.state"></a>

- *Type:* `string`

---

##### `updateDate`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigLogPublishingOptionsStatus.property.updateDate"></a>

- *Type:* `string`

---

##### `updateVersion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigLogPublishingOptionsStatus.property.updateVersion"></a>

- *Type:* `number`

---


### ESResponsesDescribeElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptions <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptions(__scope: Construct, __resources: string[], __input: EsDescribeElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptions.property.options"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptionsOptions`](#aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptionsOptions)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptions.property.status"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptionsStatus`](#aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptionsStatus)

---


### ESResponsesDescribeElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptionsOptions <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptionsOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptionsOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptionsOptions(__scope: Construct, __resources: string[], __input: EsDescribeElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptionsOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptionsOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptionsOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptionsOptions.property.enabled"></a>

- *Type:* `boolean`

---


### ESResponsesDescribeElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptionsStatus <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptionsStatus"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptionsStatus.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptionsStatus(__scope: Construct, __resources: string[], __input: EsDescribeElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptionsStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptionsStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptionsStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptionsStatus.property.creationDate"></a>

- *Type:* `string`

---

##### `pendingDeletion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptionsStatus.property.pendingDeletion"></a>

- *Type:* `boolean`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptionsStatus.property.state"></a>

- *Type:* `string`

---

##### `updateDate`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptionsStatus.property.updateDate"></a>

- *Type:* `string`

---

##### `updateVersion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptionsStatus.property.updateVersion"></a>

- *Type:* `number`

---


### ESResponsesDescribeElasticsearchDomainConfigDomainConfigSnapshotOptions <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigSnapshotOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigSnapshotOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigSnapshotOptions(__scope: Construct, __resources: string[], __input: EsDescribeElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigSnapshotOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigSnapshotOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigSnapshotOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigSnapshotOptions.property.options"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigSnapshotOptionsOptions`](#aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigSnapshotOptionsOptions)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigSnapshotOptions.property.status"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigSnapshotOptionsStatus`](#aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigSnapshotOptionsStatus)

---


### ESResponsesDescribeElasticsearchDomainConfigDomainConfigSnapshotOptionsOptions <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigSnapshotOptionsOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigSnapshotOptionsOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigSnapshotOptionsOptions(__scope: Construct, __resources: string[], __input: EsDescribeElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigSnapshotOptionsOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigSnapshotOptionsOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigSnapshotOptionsOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `automatedSnapshotStartHour`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigSnapshotOptionsOptions.property.automatedSnapshotStartHour"></a>

- *Type:* `number`

---


### ESResponsesDescribeElasticsearchDomainConfigDomainConfigSnapshotOptionsStatus <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigSnapshotOptionsStatus"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigSnapshotOptionsStatus.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigSnapshotOptionsStatus(__scope: Construct, __resources: string[], __input: EsDescribeElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigSnapshotOptionsStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigSnapshotOptionsStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigSnapshotOptionsStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigSnapshotOptionsStatus.property.creationDate"></a>

- *Type:* `string`

---

##### `pendingDeletion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigSnapshotOptionsStatus.property.pendingDeletion"></a>

- *Type:* `boolean`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigSnapshotOptionsStatus.property.state"></a>

- *Type:* `string`

---

##### `updateDate`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigSnapshotOptionsStatus.property.updateDate"></a>

- *Type:* `string`

---

##### `updateVersion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigSnapshotOptionsStatus.property.updateVersion"></a>

- *Type:* `number`

---


### ESResponsesDescribeElasticsearchDomainConfigDomainConfigVpcOptions <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigVpcOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigVpcOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigVpcOptions(__scope: Construct, __resources: string[], __input: EsDescribeElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigVpcOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigVpcOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigVpcOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigVpcOptions.property.options"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigVpcOptionsOptions`](#aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigVpcOptionsOptions)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigVpcOptions.property.status"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigVpcOptionsStatus`](#aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigVpcOptionsStatus)

---


### ESResponsesDescribeElasticsearchDomainConfigDomainConfigVpcOptionsOptions <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigVpcOptionsOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigVpcOptionsOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigVpcOptionsOptions(__scope: Construct, __resources: string[], __input: EsDescribeElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigVpcOptionsOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigVpcOptionsOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigVpcOptionsOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `availabilityZones`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigVpcOptionsOptions.property.availabilityZones"></a>

- *Type:* `string`[]

---

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigVpcOptionsOptions.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnetIds`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigVpcOptionsOptions.property.subnetIds"></a>

- *Type:* `string`[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigVpcOptionsOptions.property.vpcId"></a>

- *Type:* `string`

---


### ESResponsesDescribeElasticsearchDomainConfigDomainConfigVpcOptionsStatus <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigVpcOptionsStatus"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigVpcOptionsStatus.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigVpcOptionsStatus(__scope: Construct, __resources: string[], __input: EsDescribeElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigVpcOptionsStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigVpcOptionsStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigVpcOptionsStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsDescribeElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigVpcOptionsStatus.property.creationDate"></a>

- *Type:* `string`

---

##### `pendingDeletion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigVpcOptionsStatus.property.pendingDeletion"></a>

- *Type:* `boolean`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigVpcOptionsStatus.property.state"></a>

- *Type:* `string`

---

##### `updateDate`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigVpcOptionsStatus.property.updateDate"></a>

- *Type:* `string`

---

##### `updateVersion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainConfigDomainConfigVpcOptionsStatus.property.updateVersion"></a>

- *Type:* `number`

---


### ESResponsesDescribeElasticsearchDomainDomainStatus <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatus"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatus.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDescribeElasticsearchDomainDomainStatus(__scope: Construct, __resources: string[], __input: EsDescribeElasticsearchDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeElasticsearchDomainRequest`](#aws-cdk-sdk.es.EsDescribeElasticsearchDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `accessPolicies`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatus.property.accessPolicies"></a>

- *Type:* `string`

---

##### `advancedOptions`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatus.property.advancedOptions"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `advancedSecurityOptions`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatus.property.advancedSecurityOptions"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusAdvancedSecurityOptions`](#aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusAdvancedSecurityOptions)

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatus.property.arn"></a>

- *Type:* `string`

---

##### `cognitoOptions`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatus.property.cognitoOptions"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusCognitoOptions`](#aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusCognitoOptions)

---

##### `created`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatus.property.created"></a>

- *Type:* `boolean`

---

##### `deleted`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatus.property.deleted"></a>

- *Type:* `boolean`

---

##### `domainEndpointOptions`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatus.property.domainEndpointOptions"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusDomainEndpointOptions`](#aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusDomainEndpointOptions)

---

##### `domainId`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatus.property.domainId"></a>

- *Type:* `string`

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatus.property.domainName"></a>

- *Type:* `string`

---

##### `ebsOptions`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatus.property.ebsOptions"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusEbsOptions`](#aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusEbsOptions)

---

##### `elasticsearchClusterConfig`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatus.property.elasticsearchClusterConfig"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusElasticsearchClusterConfig`](#aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusElasticsearchClusterConfig)

---

##### `elasticsearchVersion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatus.property.elasticsearchVersion"></a>

- *Type:* `string`

---

##### `encryptionAtRestOptions`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatus.property.encryptionAtRestOptions"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusEncryptionAtRestOptions`](#aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusEncryptionAtRestOptions)

---

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatus.property.endpoint"></a>

- *Type:* `string`

---

##### `endpoints`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatus.property.endpoints"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `logPublishingOptions`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatus.property.logPublishingOptions"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.es.EsLogPublishingOption`](#aws-cdk-sdk.es.EsLogPublishingOption)}

---

##### `nodeToNodeEncryptionOptions`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatus.property.nodeToNodeEncryptionOptions"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusNodeToNodeEncryptionOptions`](#aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusNodeToNodeEncryptionOptions)

---

##### `processing`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatus.property.processing"></a>

- *Type:* `boolean`

---

##### `serviceSoftwareOptions`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatus.property.serviceSoftwareOptions"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusServiceSoftwareOptions`](#aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusServiceSoftwareOptions)

---

##### `snapshotOptions`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatus.property.snapshotOptions"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusSnapshotOptions`](#aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusSnapshotOptions)

---

##### `upgradeProcessing`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatus.property.upgradeProcessing"></a>

- *Type:* `boolean`

---

##### `vpcOptions`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatus.property.vpcOptions"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusVpcOptions`](#aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusVpcOptions)

---


### ESResponsesDescribeElasticsearchDomainDomainStatusAdvancedSecurityOptions <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusAdvancedSecurityOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusAdvancedSecurityOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDescribeElasticsearchDomainDomainStatusAdvancedSecurityOptions(__scope: Construct, __resources: string[], __input: EsDescribeElasticsearchDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusAdvancedSecurityOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusAdvancedSecurityOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusAdvancedSecurityOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeElasticsearchDomainRequest`](#aws-cdk-sdk.es.EsDescribeElasticsearchDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusAdvancedSecurityOptions.property.enabled"></a>

- *Type:* `boolean`

---

##### `internalUserDatabaseEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusAdvancedSecurityOptions.property.internalUserDatabaseEnabled"></a>

- *Type:* `boolean`

---

##### `samlOptions`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusAdvancedSecurityOptions.property.samlOptions"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptions`](#aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptions)

---


### ESResponsesDescribeElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptions <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDescribeElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptions(__scope: Construct, __resources: string[], __input: EsDescribeElasticsearchDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeElasticsearchDomainRequest`](#aws-cdk-sdk.es.EsDescribeElasticsearchDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptions.property.enabled"></a>

- *Type:* `boolean`

---

##### `idp`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptions.property.idp"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptionsIdp`](#aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptionsIdp)

---

##### `rolesKey`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptions.property.rolesKey"></a>

- *Type:* `string`

---

##### `sessionTimeoutMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptions.property.sessionTimeoutMinutes"></a>

- *Type:* `number`

---

##### `subjectKey`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptions.property.subjectKey"></a>

- *Type:* `string`

---


### ESResponsesDescribeElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptionsIdp <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptionsIdp"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptionsIdp.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDescribeElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptionsIdp(__scope: Construct, __resources: string[], __input: EsDescribeElasticsearchDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptionsIdp.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptionsIdp.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptionsIdp.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeElasticsearchDomainRequest`](#aws-cdk-sdk.es.EsDescribeElasticsearchDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `entityId`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptionsIdp.property.entityId"></a>

- *Type:* `string`

---

##### `metadataContent`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusAdvancedSecurityOptionsSamlOptionsIdp.property.metadataContent"></a>

- *Type:* `string`

---


### ESResponsesDescribeElasticsearchDomainDomainStatusCognitoOptions <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusCognitoOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusCognitoOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDescribeElasticsearchDomainDomainStatusCognitoOptions(__scope: Construct, __resources: string[], __input: EsDescribeElasticsearchDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusCognitoOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusCognitoOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusCognitoOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeElasticsearchDomainRequest`](#aws-cdk-sdk.es.EsDescribeElasticsearchDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusCognitoOptions.property.enabled"></a>

- *Type:* `boolean`

---

##### `identityPoolId`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusCognitoOptions.property.identityPoolId"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusCognitoOptions.property.roleArn"></a>

- *Type:* `string`

---

##### `userPoolId`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusCognitoOptions.property.userPoolId"></a>

- *Type:* `string`

---


### ESResponsesDescribeElasticsearchDomainDomainStatusDomainEndpointOptions <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusDomainEndpointOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusDomainEndpointOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDescribeElasticsearchDomainDomainStatusDomainEndpointOptions(__scope: Construct, __resources: string[], __input: EsDescribeElasticsearchDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusDomainEndpointOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusDomainEndpointOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusDomainEndpointOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeElasticsearchDomainRequest`](#aws-cdk-sdk.es.EsDescribeElasticsearchDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `customEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusDomainEndpointOptions.property.customEndpoint"></a>

- *Type:* `string`

---

##### `customEndpointCertificateArn`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusDomainEndpointOptions.property.customEndpointCertificateArn"></a>

- *Type:* `string`

---

##### `customEndpointEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusDomainEndpointOptions.property.customEndpointEnabled"></a>

- *Type:* `boolean`

---

##### `enforceHttps`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusDomainEndpointOptions.property.enforceHttps"></a>

- *Type:* `boolean`

---

##### `tlsSecurityPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusDomainEndpointOptions.property.tlsSecurityPolicy"></a>

- *Type:* `string`

---


### ESResponsesDescribeElasticsearchDomainDomainStatusEbsOptions <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusEbsOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusEbsOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDescribeElasticsearchDomainDomainStatusEbsOptions(__scope: Construct, __resources: string[], __input: EsDescribeElasticsearchDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusEbsOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusEbsOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusEbsOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeElasticsearchDomainRequest`](#aws-cdk-sdk.es.EsDescribeElasticsearchDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `ebsEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusEbsOptions.property.ebsEnabled"></a>

- *Type:* `boolean`

---

##### `iops`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusEbsOptions.property.iops"></a>

- *Type:* `number`

---

##### `volumeSize`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusEbsOptions.property.volumeSize"></a>

- *Type:* `number`

---

##### `volumeType`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusEbsOptions.property.volumeType"></a>

- *Type:* `string`

---


### ESResponsesDescribeElasticsearchDomainDomainStatusElasticsearchClusterConfig <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusElasticsearchClusterConfig"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusElasticsearchClusterConfig.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDescribeElasticsearchDomainDomainStatusElasticsearchClusterConfig(__scope: Construct, __resources: string[], __input: EsDescribeElasticsearchDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusElasticsearchClusterConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusElasticsearchClusterConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusElasticsearchClusterConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeElasticsearchDomainRequest`](#aws-cdk-sdk.es.EsDescribeElasticsearchDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `dedicatedMasterCount`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusElasticsearchClusterConfig.property.dedicatedMasterCount"></a>

- *Type:* `number`

---

##### `dedicatedMasterEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusElasticsearchClusterConfig.property.dedicatedMasterEnabled"></a>

- *Type:* `boolean`

---

##### `dedicatedMasterType`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusElasticsearchClusterConfig.property.dedicatedMasterType"></a>

- *Type:* `string`

---

##### `instanceCount`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusElasticsearchClusterConfig.property.instanceCount"></a>

- *Type:* `number`

---

##### `instanceType`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusElasticsearchClusterConfig.property.instanceType"></a>

- *Type:* `string`

---

##### `warmCount`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusElasticsearchClusterConfig.property.warmCount"></a>

- *Type:* `number`

---

##### `warmEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusElasticsearchClusterConfig.property.warmEnabled"></a>

- *Type:* `boolean`

---

##### `warmType`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusElasticsearchClusterConfig.property.warmType"></a>

- *Type:* `string`

---

##### `zoneAwarenessConfig`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusElasticsearchClusterConfig.property.zoneAwarenessConfig"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusElasticsearchClusterConfigZoneAwarenessConfig`](#aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusElasticsearchClusterConfigZoneAwarenessConfig)

---

##### `zoneAwarenessEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusElasticsearchClusterConfig.property.zoneAwarenessEnabled"></a>

- *Type:* `boolean`

---


### ESResponsesDescribeElasticsearchDomainDomainStatusElasticsearchClusterConfigZoneAwarenessConfig <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusElasticsearchClusterConfigZoneAwarenessConfig"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusElasticsearchClusterConfigZoneAwarenessConfig.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDescribeElasticsearchDomainDomainStatusElasticsearchClusterConfigZoneAwarenessConfig(__scope: Construct, __resources: string[], __input: EsDescribeElasticsearchDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusElasticsearchClusterConfigZoneAwarenessConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusElasticsearchClusterConfigZoneAwarenessConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusElasticsearchClusterConfigZoneAwarenessConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeElasticsearchDomainRequest`](#aws-cdk-sdk.es.EsDescribeElasticsearchDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `availabilityZoneCount`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusElasticsearchClusterConfigZoneAwarenessConfig.property.availabilityZoneCount"></a>

- *Type:* `number`

---


### ESResponsesDescribeElasticsearchDomainDomainStatusEncryptionAtRestOptions <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusEncryptionAtRestOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusEncryptionAtRestOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDescribeElasticsearchDomainDomainStatusEncryptionAtRestOptions(__scope: Construct, __resources: string[], __input: EsDescribeElasticsearchDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusEncryptionAtRestOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusEncryptionAtRestOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusEncryptionAtRestOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeElasticsearchDomainRequest`](#aws-cdk-sdk.es.EsDescribeElasticsearchDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusEncryptionAtRestOptions.property.enabled"></a>

- *Type:* `boolean`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusEncryptionAtRestOptions.property.kmsKeyId"></a>

- *Type:* `string`

---


### ESResponsesDescribeElasticsearchDomainDomainStatusNodeToNodeEncryptionOptions <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusNodeToNodeEncryptionOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusNodeToNodeEncryptionOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDescribeElasticsearchDomainDomainStatusNodeToNodeEncryptionOptions(__scope: Construct, __resources: string[], __input: EsDescribeElasticsearchDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusNodeToNodeEncryptionOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusNodeToNodeEncryptionOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusNodeToNodeEncryptionOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeElasticsearchDomainRequest`](#aws-cdk-sdk.es.EsDescribeElasticsearchDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusNodeToNodeEncryptionOptions.property.enabled"></a>

- *Type:* `boolean`

---


### ESResponsesDescribeElasticsearchDomainDomainStatusServiceSoftwareOptions <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusServiceSoftwareOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusServiceSoftwareOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDescribeElasticsearchDomainDomainStatusServiceSoftwareOptions(__scope: Construct, __resources: string[], __input: EsDescribeElasticsearchDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusServiceSoftwareOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusServiceSoftwareOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusServiceSoftwareOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeElasticsearchDomainRequest`](#aws-cdk-sdk.es.EsDescribeElasticsearchDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `automatedUpdateDate`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusServiceSoftwareOptions.property.automatedUpdateDate"></a>

- *Type:* `string`

---

##### `cancellable`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusServiceSoftwareOptions.property.cancellable"></a>

- *Type:* `boolean`

---

##### `currentVersion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusServiceSoftwareOptions.property.currentVersion"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusServiceSoftwareOptions.property.description"></a>

- *Type:* `string`

---

##### `newVersion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusServiceSoftwareOptions.property.newVersion"></a>

- *Type:* `string`

---

##### `optionalDeployment`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusServiceSoftwareOptions.property.optionalDeployment"></a>

- *Type:* `boolean`

---

##### `updateAvailable`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusServiceSoftwareOptions.property.updateAvailable"></a>

- *Type:* `boolean`

---

##### `updateStatus`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusServiceSoftwareOptions.property.updateStatus"></a>

- *Type:* `string`

---


### ESResponsesDescribeElasticsearchDomainDomainStatusSnapshotOptions <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusSnapshotOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusSnapshotOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDescribeElasticsearchDomainDomainStatusSnapshotOptions(__scope: Construct, __resources: string[], __input: EsDescribeElasticsearchDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusSnapshotOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusSnapshotOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusSnapshotOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeElasticsearchDomainRequest`](#aws-cdk-sdk.es.EsDescribeElasticsearchDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `automatedSnapshotStartHour`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusSnapshotOptions.property.automatedSnapshotStartHour"></a>

- *Type:* `number`

---


### ESResponsesDescribeElasticsearchDomainDomainStatusVpcOptions <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusVpcOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusVpcOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDescribeElasticsearchDomainDomainStatusVpcOptions(__scope: Construct, __resources: string[], __input: EsDescribeElasticsearchDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusVpcOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusVpcOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusVpcOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeElasticsearchDomainRequest`](#aws-cdk-sdk.es.EsDescribeElasticsearchDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `availabilityZones`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusVpcOptions.property.availabilityZones"></a>

- *Type:* `string`[]

---

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusVpcOptions.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnetIds`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusVpcOptions.property.subnetIds"></a>

- *Type:* `string`[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomainDomainStatusVpcOptions.property.vpcId"></a>

- *Type:* `string`

---


### ESResponsesDescribeElasticsearchDomains <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomains"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomains.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDescribeElasticsearchDomains(__scope: Construct, __resources: string[], __input: EsDescribeElasticsearchDomainsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomains.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomains.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomains.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeElasticsearchDomainsRequest`](#aws-cdk-sdk.es.EsDescribeElasticsearchDomainsRequest)

---



#### Properties <a name="Properties"></a>

##### `domainStatusList`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchDomains.property.domainStatusList"></a>

- *Type:* [`aws-cdk-sdk.es.EsElasticsearchDomainStatus`](#aws-cdk-sdk.es.EsElasticsearchDomainStatus)[]

---


### ESResponsesDescribeElasticsearchInstanceTypeLimits <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchInstanceTypeLimits"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchInstanceTypeLimits.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDescribeElasticsearchInstanceTypeLimits(__scope: Construct, __resources: string[], __input: EsDescribeElasticsearchInstanceTypeLimitsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchInstanceTypeLimits.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchInstanceTypeLimits.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchInstanceTypeLimits.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeElasticsearchInstanceTypeLimitsRequest`](#aws-cdk-sdk.es.EsDescribeElasticsearchInstanceTypeLimitsRequest)

---



#### Properties <a name="Properties"></a>

##### `limitsByRole`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeElasticsearchInstanceTypeLimits.property.limitsByRole"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.es.EsLimits`](#aws-cdk-sdk.es.EsLimits)}

---


### ESResponsesDescribeInboundCrossClusterSearchConnections <a name="aws-cdk-sdk.es.ESResponsesDescribeInboundCrossClusterSearchConnections"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDescribeInboundCrossClusterSearchConnections.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDescribeInboundCrossClusterSearchConnections(__scope: Construct, __resources: string[], __input: EsDescribeInboundCrossClusterSearchConnectionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeInboundCrossClusterSearchConnections.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeInboundCrossClusterSearchConnections.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeInboundCrossClusterSearchConnections.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeInboundCrossClusterSearchConnectionsRequest`](#aws-cdk-sdk.es.EsDescribeInboundCrossClusterSearchConnectionsRequest)

---



#### Properties <a name="Properties"></a>

##### `crossClusterSearchConnections`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeInboundCrossClusterSearchConnections.property.crossClusterSearchConnections"></a>

- *Type:* [`aws-cdk-sdk.es.EsInboundCrossClusterSearchConnection`](#aws-cdk-sdk.es.EsInboundCrossClusterSearchConnection)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeInboundCrossClusterSearchConnections.property.nextToken"></a>

- *Type:* `string`

---


### ESResponsesDescribeOutboundCrossClusterSearchConnections <a name="aws-cdk-sdk.es.ESResponsesDescribeOutboundCrossClusterSearchConnections"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDescribeOutboundCrossClusterSearchConnections.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDescribeOutboundCrossClusterSearchConnections(__scope: Construct, __resources: string[], __input: EsDescribeOutboundCrossClusterSearchConnectionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeOutboundCrossClusterSearchConnections.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeOutboundCrossClusterSearchConnections.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeOutboundCrossClusterSearchConnections.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeOutboundCrossClusterSearchConnectionsRequest`](#aws-cdk-sdk.es.EsDescribeOutboundCrossClusterSearchConnectionsRequest)

---



#### Properties <a name="Properties"></a>

##### `crossClusterSearchConnections`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeOutboundCrossClusterSearchConnections.property.crossClusterSearchConnections"></a>

- *Type:* [`aws-cdk-sdk.es.EsOutboundCrossClusterSearchConnection`](#aws-cdk-sdk.es.EsOutboundCrossClusterSearchConnection)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeOutboundCrossClusterSearchConnections.property.nextToken"></a>

- *Type:* `string`

---


### ESResponsesDescribePackages <a name="aws-cdk-sdk.es.ESResponsesDescribePackages"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDescribePackages.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDescribePackages(__scope: Construct, __resources: string[], __input: EsDescribePackagesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribePackages.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribePackages.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribePackages.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribePackagesRequest`](#aws-cdk-sdk.es.EsDescribePackagesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribePackages.property.nextToken"></a>

- *Type:* `string`

---

##### `packageDetailsList`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribePackages.property.packageDetailsList"></a>

- *Type:* [`aws-cdk-sdk.es.EsPackageDetails`](#aws-cdk-sdk.es.EsPackageDetails)[]

---


### ESResponsesDescribeReservedElasticsearchInstanceOfferings <a name="aws-cdk-sdk.es.ESResponsesDescribeReservedElasticsearchInstanceOfferings"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDescribeReservedElasticsearchInstanceOfferings.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDescribeReservedElasticsearchInstanceOfferings(__scope: Construct, __resources: string[], __input: EsDescribeReservedElasticsearchInstanceOfferingsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeReservedElasticsearchInstanceOfferings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeReservedElasticsearchInstanceOfferings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeReservedElasticsearchInstanceOfferings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeReservedElasticsearchInstanceOfferingsRequest`](#aws-cdk-sdk.es.EsDescribeReservedElasticsearchInstanceOfferingsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeReservedElasticsearchInstanceOfferings.property.nextToken"></a>

- *Type:* `string`

---

##### `reservedElasticsearchInstanceOfferings`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeReservedElasticsearchInstanceOfferings.property.reservedElasticsearchInstanceOfferings"></a>

- *Type:* [`aws-cdk-sdk.es.EsReservedElasticsearchInstanceOffering`](#aws-cdk-sdk.es.EsReservedElasticsearchInstanceOffering)[]

---


### ESResponsesDescribeReservedElasticsearchInstances <a name="aws-cdk-sdk.es.ESResponsesDescribeReservedElasticsearchInstances"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDescribeReservedElasticsearchInstances.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDescribeReservedElasticsearchInstances(__scope: Construct, __resources: string[], __input: EsDescribeReservedElasticsearchInstancesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeReservedElasticsearchInstances.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeReservedElasticsearchInstances.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeReservedElasticsearchInstances.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDescribeReservedElasticsearchInstancesRequest`](#aws-cdk-sdk.es.EsDescribeReservedElasticsearchInstancesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeReservedElasticsearchInstances.property.nextToken"></a>

- *Type:* `string`

---

##### `reservedElasticsearchInstances`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDescribeReservedElasticsearchInstances.property.reservedElasticsearchInstances"></a>

- *Type:* [`aws-cdk-sdk.es.EsReservedElasticsearchInstance`](#aws-cdk-sdk.es.EsReservedElasticsearchInstance)[]

---


### ESResponsesDissociatePackage <a name="aws-cdk-sdk.es.ESResponsesDissociatePackage"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDissociatePackage.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDissociatePackage(__scope: Construct, __resources: string[], __input: EsDissociatePackageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDissociatePackage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDissociatePackage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDissociatePackage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDissociatePackageRequest`](#aws-cdk-sdk.es.EsDissociatePackageRequest)

---



#### Properties <a name="Properties"></a>

##### `domainPackageDetails`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDissociatePackage.property.domainPackageDetails"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDissociatePackageDomainPackageDetails`](#aws-cdk-sdk.es.ESResponsesDissociatePackageDomainPackageDetails)

---


### ESResponsesDissociatePackageDomainPackageDetails <a name="aws-cdk-sdk.es.ESResponsesDissociatePackageDomainPackageDetails"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDissociatePackageDomainPackageDetails.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDissociatePackageDomainPackageDetails(__scope: Construct, __resources: string[], __input: EsDissociatePackageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDissociatePackageDomainPackageDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDissociatePackageDomainPackageDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDissociatePackageDomainPackageDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDissociatePackageRequest`](#aws-cdk-sdk.es.EsDissociatePackageRequest)

---



#### Properties <a name="Properties"></a>

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDissociatePackageDomainPackageDetails.property.domainName"></a>

- *Type:* `string`

---

##### `domainPackageStatus`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDissociatePackageDomainPackageDetails.property.domainPackageStatus"></a>

- *Type:* `string`

---

##### `errorDetails`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDissociatePackageDomainPackageDetails.property.errorDetails"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesDissociatePackageDomainPackageDetailsErrorDetails`](#aws-cdk-sdk.es.ESResponsesDissociatePackageDomainPackageDetailsErrorDetails)

---

##### `lastUpdated`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDissociatePackageDomainPackageDetails.property.lastUpdated"></a>

- *Type:* `string`

---

##### `packageId`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDissociatePackageDomainPackageDetails.property.packageId"></a>

- *Type:* `string`

---

##### `packageName`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDissociatePackageDomainPackageDetails.property.packageName"></a>

- *Type:* `string`

---

##### `packageType`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDissociatePackageDomainPackageDetails.property.packageType"></a>

- *Type:* `string`

---

##### `packageVersion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDissociatePackageDomainPackageDetails.property.packageVersion"></a>

- *Type:* `string`

---

##### `referencePath`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDissociatePackageDomainPackageDetails.property.referencePath"></a>

- *Type:* `string`

---


### ESResponsesDissociatePackageDomainPackageDetailsErrorDetails <a name="aws-cdk-sdk.es.ESResponsesDissociatePackageDomainPackageDetailsErrorDetails"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesDissociatePackageDomainPackageDetailsErrorDetails.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesDissociatePackageDomainPackageDetailsErrorDetails(__scope: Construct, __resources: string[], __input: EsDissociatePackageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDissociatePackageDomainPackageDetailsErrorDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDissociatePackageDomainPackageDetailsErrorDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDissociatePackageDomainPackageDetailsErrorDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsDissociatePackageRequest`](#aws-cdk-sdk.es.EsDissociatePackageRequest)

---



#### Properties <a name="Properties"></a>

##### `errorMessage`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDissociatePackageDomainPackageDetailsErrorDetails.property.errorMessage"></a>

- *Type:* `string`

---

##### `errorType`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesDissociatePackageDomainPackageDetailsErrorDetails.property.errorType"></a>

- *Type:* `string`

---


### ESResponsesFetchCompatibleElasticsearchVersions <a name="aws-cdk-sdk.es.ESResponsesFetchCompatibleElasticsearchVersions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesFetchCompatibleElasticsearchVersions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesFetchCompatibleElasticsearchVersions(__scope: Construct, __resources: string[], __input: EsGetCompatibleElasticsearchVersionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesFetchCompatibleElasticsearchVersions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesFetchCompatibleElasticsearchVersions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesFetchCompatibleElasticsearchVersions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsGetCompatibleElasticsearchVersionsRequest`](#aws-cdk-sdk.es.EsGetCompatibleElasticsearchVersionsRequest)

---



#### Properties <a name="Properties"></a>

##### `compatibleElasticsearchVersions`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesFetchCompatibleElasticsearchVersions.property.compatibleElasticsearchVersions"></a>

- *Type:* [`aws-cdk-sdk.es.EsCompatibleVersionsMap`](#aws-cdk-sdk.es.EsCompatibleVersionsMap)[]

---


### ESResponsesFetchPackageVersionHistory <a name="aws-cdk-sdk.es.ESResponsesFetchPackageVersionHistory"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesFetchPackageVersionHistory.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesFetchPackageVersionHistory(__scope: Construct, __resources: string[], __input: EsGetPackageVersionHistoryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesFetchPackageVersionHistory.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesFetchPackageVersionHistory.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesFetchPackageVersionHistory.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsGetPackageVersionHistoryRequest`](#aws-cdk-sdk.es.EsGetPackageVersionHistoryRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesFetchPackageVersionHistory.property.nextToken"></a>

- *Type:* `string`

---

##### `packageId`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesFetchPackageVersionHistory.property.packageId"></a>

- *Type:* `string`

---

##### `packageVersionHistoryList`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesFetchPackageVersionHistory.property.packageVersionHistoryList"></a>

- *Type:* [`aws-cdk-sdk.es.EsPackageVersionHistory`](#aws-cdk-sdk.es.EsPackageVersionHistory)[]

---


### ESResponsesFetchUpgradeHistory <a name="aws-cdk-sdk.es.ESResponsesFetchUpgradeHistory"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesFetchUpgradeHistory.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesFetchUpgradeHistory(__scope: Construct, __resources: string[], __input: EsGetUpgradeHistoryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesFetchUpgradeHistory.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesFetchUpgradeHistory.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesFetchUpgradeHistory.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsGetUpgradeHistoryRequest`](#aws-cdk-sdk.es.EsGetUpgradeHistoryRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesFetchUpgradeHistory.property.nextToken"></a>

- *Type:* `string`

---

##### `upgradeHistories`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesFetchUpgradeHistory.property.upgradeHistories"></a>

- *Type:* [`aws-cdk-sdk.es.EsUpgradeHistory`](#aws-cdk-sdk.es.EsUpgradeHistory)[]

---


### ESResponsesFetchUpgradeStatus <a name="aws-cdk-sdk.es.ESResponsesFetchUpgradeStatus"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesFetchUpgradeStatus.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesFetchUpgradeStatus(__scope: Construct, __resources: string[], __input: EsGetUpgradeStatusRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesFetchUpgradeStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesFetchUpgradeStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesFetchUpgradeStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsGetUpgradeStatusRequest`](#aws-cdk-sdk.es.EsGetUpgradeStatusRequest)

---



#### Properties <a name="Properties"></a>

##### `stepStatus`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesFetchUpgradeStatus.property.stepStatus"></a>

- *Type:* `string`

---

##### `upgradeName`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesFetchUpgradeStatus.property.upgradeName"></a>

- *Type:* `string`

---

##### `upgradeStep`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesFetchUpgradeStatus.property.upgradeStep"></a>

- *Type:* `string`

---


### ESResponsesListDomainNames <a name="aws-cdk-sdk.es.ESResponsesListDomainNames"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesListDomainNames.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesListDomainNames(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesListDomainNames.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesListDomainNames.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `domainNames`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesListDomainNames.property.domainNames"></a>

- *Type:* [`aws-cdk-sdk.es.EsDomainInfo`](#aws-cdk-sdk.es.EsDomainInfo)[]

---


### ESResponsesListDomainsForPackage <a name="aws-cdk-sdk.es.ESResponsesListDomainsForPackage"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesListDomainsForPackage.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesListDomainsForPackage(__scope: Construct, __resources: string[], __input: EsListDomainsForPackageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesListDomainsForPackage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesListDomainsForPackage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesListDomainsForPackage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsListDomainsForPackageRequest`](#aws-cdk-sdk.es.EsListDomainsForPackageRequest)

---



#### Properties <a name="Properties"></a>

##### `domainPackageDetailsList`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesListDomainsForPackage.property.domainPackageDetailsList"></a>

- *Type:* [`aws-cdk-sdk.es.EsDomainPackageDetails`](#aws-cdk-sdk.es.EsDomainPackageDetails)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesListDomainsForPackage.property.nextToken"></a>

- *Type:* `string`

---


### ESResponsesListElasticsearchInstanceTypes <a name="aws-cdk-sdk.es.ESResponsesListElasticsearchInstanceTypes"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesListElasticsearchInstanceTypes.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesListElasticsearchInstanceTypes(__scope: Construct, __resources: string[], __input: EsListElasticsearchInstanceTypesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesListElasticsearchInstanceTypes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesListElasticsearchInstanceTypes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesListElasticsearchInstanceTypes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsListElasticsearchInstanceTypesRequest`](#aws-cdk-sdk.es.EsListElasticsearchInstanceTypesRequest)

---



#### Properties <a name="Properties"></a>

##### `elasticsearchInstanceTypes`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesListElasticsearchInstanceTypes.property.elasticsearchInstanceTypes"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesListElasticsearchInstanceTypes.property.nextToken"></a>

- *Type:* `string`

---


### ESResponsesListElasticsearchVersions <a name="aws-cdk-sdk.es.ESResponsesListElasticsearchVersions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesListElasticsearchVersions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesListElasticsearchVersions(__scope: Construct, __resources: string[], __input: EsListElasticsearchVersionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesListElasticsearchVersions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesListElasticsearchVersions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesListElasticsearchVersions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsListElasticsearchVersionsRequest`](#aws-cdk-sdk.es.EsListElasticsearchVersionsRequest)

---



#### Properties <a name="Properties"></a>

##### `elasticsearchVersions`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesListElasticsearchVersions.property.elasticsearchVersions"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesListElasticsearchVersions.property.nextToken"></a>

- *Type:* `string`

---


### ESResponsesListPackagesForDomain <a name="aws-cdk-sdk.es.ESResponsesListPackagesForDomain"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesListPackagesForDomain.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesListPackagesForDomain(__scope: Construct, __resources: string[], __input: EsListPackagesForDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesListPackagesForDomain.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesListPackagesForDomain.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesListPackagesForDomain.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsListPackagesForDomainRequest`](#aws-cdk-sdk.es.EsListPackagesForDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `domainPackageDetailsList`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesListPackagesForDomain.property.domainPackageDetailsList"></a>

- *Type:* [`aws-cdk-sdk.es.EsDomainPackageDetails`](#aws-cdk-sdk.es.EsDomainPackageDetails)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesListPackagesForDomain.property.nextToken"></a>

- *Type:* `string`

---


### ESResponsesListTags <a name="aws-cdk-sdk.es.ESResponsesListTags"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesListTags.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesListTags(__scope: Construct, __resources: string[], __input: EsListTagsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesListTags.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesListTags.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesListTags.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsListTagsRequest`](#aws-cdk-sdk.es.EsListTagsRequest)

---



#### Properties <a name="Properties"></a>

##### `tagList`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesListTags.property.tagList"></a>

- *Type:* [`aws-cdk-sdk.es.EsTag`](#aws-cdk-sdk.es.EsTag)[]

---


### ESResponsesPurchaseReservedElasticsearchInstanceOffering <a name="aws-cdk-sdk.es.ESResponsesPurchaseReservedElasticsearchInstanceOffering"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesPurchaseReservedElasticsearchInstanceOffering.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesPurchaseReservedElasticsearchInstanceOffering(__scope: Construct, __resources: string[], __input: EsPurchaseReservedElasticsearchInstanceOfferingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesPurchaseReservedElasticsearchInstanceOffering.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesPurchaseReservedElasticsearchInstanceOffering.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesPurchaseReservedElasticsearchInstanceOffering.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsPurchaseReservedElasticsearchInstanceOfferingRequest`](#aws-cdk-sdk.es.EsPurchaseReservedElasticsearchInstanceOfferingRequest)

---



#### Properties <a name="Properties"></a>

##### `reservationName`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesPurchaseReservedElasticsearchInstanceOffering.property.reservationName"></a>

- *Type:* `string`

---

##### `reservedElasticsearchInstanceId`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesPurchaseReservedElasticsearchInstanceOffering.property.reservedElasticsearchInstanceId"></a>

- *Type:* `string`

---


### ESResponsesRejectInboundCrossClusterSearchConnection <a name="aws-cdk-sdk.es.ESResponsesRejectInboundCrossClusterSearchConnection"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesRejectInboundCrossClusterSearchConnection.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesRejectInboundCrossClusterSearchConnection(__scope: Construct, __resources: string[], __input: EsRejectInboundCrossClusterSearchConnectionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesRejectInboundCrossClusterSearchConnection.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesRejectInboundCrossClusterSearchConnection.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesRejectInboundCrossClusterSearchConnection.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsRejectInboundCrossClusterSearchConnectionRequest`](#aws-cdk-sdk.es.EsRejectInboundCrossClusterSearchConnectionRequest)

---



#### Properties <a name="Properties"></a>

##### `crossClusterSearchConnection`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesRejectInboundCrossClusterSearchConnection.property.crossClusterSearchConnection"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesRejectInboundCrossClusterSearchConnectionCrossClusterSearchConnection`](#aws-cdk-sdk.es.ESResponsesRejectInboundCrossClusterSearchConnectionCrossClusterSearchConnection)

---


### ESResponsesRejectInboundCrossClusterSearchConnectionCrossClusterSearchConnection <a name="aws-cdk-sdk.es.ESResponsesRejectInboundCrossClusterSearchConnectionCrossClusterSearchConnection"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesRejectInboundCrossClusterSearchConnectionCrossClusterSearchConnection.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesRejectInboundCrossClusterSearchConnectionCrossClusterSearchConnection(__scope: Construct, __resources: string[], __input: EsRejectInboundCrossClusterSearchConnectionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesRejectInboundCrossClusterSearchConnectionCrossClusterSearchConnection.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesRejectInboundCrossClusterSearchConnectionCrossClusterSearchConnection.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesRejectInboundCrossClusterSearchConnectionCrossClusterSearchConnection.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsRejectInboundCrossClusterSearchConnectionRequest`](#aws-cdk-sdk.es.EsRejectInboundCrossClusterSearchConnectionRequest)

---



#### Properties <a name="Properties"></a>

##### `connectionStatus`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesRejectInboundCrossClusterSearchConnectionCrossClusterSearchConnection.property.connectionStatus"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesRejectInboundCrossClusterSearchConnectionCrossClusterSearchConnectionConnectionStatus`](#aws-cdk-sdk.es.ESResponsesRejectInboundCrossClusterSearchConnectionCrossClusterSearchConnectionConnectionStatus)

---

##### `crossClusterSearchConnectionId`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesRejectInboundCrossClusterSearchConnectionCrossClusterSearchConnection.property.crossClusterSearchConnectionId"></a>

- *Type:* `string`

---

##### `destinationDomainInfo`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesRejectInboundCrossClusterSearchConnectionCrossClusterSearchConnection.property.destinationDomainInfo"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesRejectInboundCrossClusterSearchConnectionCrossClusterSearchConnectionDestinationDomainInfo`](#aws-cdk-sdk.es.ESResponsesRejectInboundCrossClusterSearchConnectionCrossClusterSearchConnectionDestinationDomainInfo)

---

##### `sourceDomainInfo`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesRejectInboundCrossClusterSearchConnectionCrossClusterSearchConnection.property.sourceDomainInfo"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesRejectInboundCrossClusterSearchConnectionCrossClusterSearchConnectionSourceDomainInfo`](#aws-cdk-sdk.es.ESResponsesRejectInboundCrossClusterSearchConnectionCrossClusterSearchConnectionSourceDomainInfo)

---


### ESResponsesRejectInboundCrossClusterSearchConnectionCrossClusterSearchConnectionConnectionStatus <a name="aws-cdk-sdk.es.ESResponsesRejectInboundCrossClusterSearchConnectionCrossClusterSearchConnectionConnectionStatus"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesRejectInboundCrossClusterSearchConnectionCrossClusterSearchConnectionConnectionStatus.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesRejectInboundCrossClusterSearchConnectionCrossClusterSearchConnectionConnectionStatus(__scope: Construct, __resources: string[], __input: EsRejectInboundCrossClusterSearchConnectionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesRejectInboundCrossClusterSearchConnectionCrossClusterSearchConnectionConnectionStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesRejectInboundCrossClusterSearchConnectionCrossClusterSearchConnectionConnectionStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesRejectInboundCrossClusterSearchConnectionCrossClusterSearchConnectionConnectionStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsRejectInboundCrossClusterSearchConnectionRequest`](#aws-cdk-sdk.es.EsRejectInboundCrossClusterSearchConnectionRequest)

---



#### Properties <a name="Properties"></a>

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesRejectInboundCrossClusterSearchConnectionCrossClusterSearchConnectionConnectionStatus.property.message"></a>

- *Type:* `string`

---

##### `statusCode`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesRejectInboundCrossClusterSearchConnectionCrossClusterSearchConnectionConnectionStatus.property.statusCode"></a>

- *Type:* `string`

---


### ESResponsesRejectInboundCrossClusterSearchConnectionCrossClusterSearchConnectionDestinationDomainInfo <a name="aws-cdk-sdk.es.ESResponsesRejectInboundCrossClusterSearchConnectionCrossClusterSearchConnectionDestinationDomainInfo"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesRejectInboundCrossClusterSearchConnectionCrossClusterSearchConnectionDestinationDomainInfo.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesRejectInboundCrossClusterSearchConnectionCrossClusterSearchConnectionDestinationDomainInfo(__scope: Construct, __resources: string[], __input: EsRejectInboundCrossClusterSearchConnectionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesRejectInboundCrossClusterSearchConnectionCrossClusterSearchConnectionDestinationDomainInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesRejectInboundCrossClusterSearchConnectionCrossClusterSearchConnectionDestinationDomainInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesRejectInboundCrossClusterSearchConnectionCrossClusterSearchConnectionDestinationDomainInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsRejectInboundCrossClusterSearchConnectionRequest`](#aws-cdk-sdk.es.EsRejectInboundCrossClusterSearchConnectionRequest)

---



#### Properties <a name="Properties"></a>

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesRejectInboundCrossClusterSearchConnectionCrossClusterSearchConnectionDestinationDomainInfo.property.domainName"></a>

- *Type:* `string`

---

##### `ownerId`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesRejectInboundCrossClusterSearchConnectionCrossClusterSearchConnectionDestinationDomainInfo.property.ownerId"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesRejectInboundCrossClusterSearchConnectionCrossClusterSearchConnectionDestinationDomainInfo.property.region"></a>

- *Type:* `string`

---


### ESResponsesRejectInboundCrossClusterSearchConnectionCrossClusterSearchConnectionSourceDomainInfo <a name="aws-cdk-sdk.es.ESResponsesRejectInboundCrossClusterSearchConnectionCrossClusterSearchConnectionSourceDomainInfo"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesRejectInboundCrossClusterSearchConnectionCrossClusterSearchConnectionSourceDomainInfo.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesRejectInboundCrossClusterSearchConnectionCrossClusterSearchConnectionSourceDomainInfo(__scope: Construct, __resources: string[], __input: EsRejectInboundCrossClusterSearchConnectionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesRejectInboundCrossClusterSearchConnectionCrossClusterSearchConnectionSourceDomainInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesRejectInboundCrossClusterSearchConnectionCrossClusterSearchConnectionSourceDomainInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesRejectInboundCrossClusterSearchConnectionCrossClusterSearchConnectionSourceDomainInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsRejectInboundCrossClusterSearchConnectionRequest`](#aws-cdk-sdk.es.EsRejectInboundCrossClusterSearchConnectionRequest)

---



#### Properties <a name="Properties"></a>

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesRejectInboundCrossClusterSearchConnectionCrossClusterSearchConnectionSourceDomainInfo.property.domainName"></a>

- *Type:* `string`

---

##### `ownerId`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesRejectInboundCrossClusterSearchConnectionCrossClusterSearchConnectionSourceDomainInfo.property.ownerId"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesRejectInboundCrossClusterSearchConnectionCrossClusterSearchConnectionSourceDomainInfo.property.region"></a>

- *Type:* `string`

---


### ESResponsesStartElasticsearchServiceSoftwareUpdate <a name="aws-cdk-sdk.es.ESResponsesStartElasticsearchServiceSoftwareUpdate"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesStartElasticsearchServiceSoftwareUpdate.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesStartElasticsearchServiceSoftwareUpdate(__scope: Construct, __resources: string[], __input: EsStartElasticsearchServiceSoftwareUpdateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesStartElasticsearchServiceSoftwareUpdate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesStartElasticsearchServiceSoftwareUpdate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesStartElasticsearchServiceSoftwareUpdate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsStartElasticsearchServiceSoftwareUpdateRequest`](#aws-cdk-sdk.es.EsStartElasticsearchServiceSoftwareUpdateRequest)

---



#### Properties <a name="Properties"></a>

##### `serviceSoftwareOptions`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesStartElasticsearchServiceSoftwareUpdate.property.serviceSoftwareOptions"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesStartElasticsearchServiceSoftwareUpdateServiceSoftwareOptions`](#aws-cdk-sdk.es.ESResponsesStartElasticsearchServiceSoftwareUpdateServiceSoftwareOptions)

---


### ESResponsesStartElasticsearchServiceSoftwareUpdateServiceSoftwareOptions <a name="aws-cdk-sdk.es.ESResponsesStartElasticsearchServiceSoftwareUpdateServiceSoftwareOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesStartElasticsearchServiceSoftwareUpdateServiceSoftwareOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesStartElasticsearchServiceSoftwareUpdateServiceSoftwareOptions(__scope: Construct, __resources: string[], __input: EsStartElasticsearchServiceSoftwareUpdateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesStartElasticsearchServiceSoftwareUpdateServiceSoftwareOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesStartElasticsearchServiceSoftwareUpdateServiceSoftwareOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesStartElasticsearchServiceSoftwareUpdateServiceSoftwareOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsStartElasticsearchServiceSoftwareUpdateRequest`](#aws-cdk-sdk.es.EsStartElasticsearchServiceSoftwareUpdateRequest)

---



#### Properties <a name="Properties"></a>

##### `automatedUpdateDate`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesStartElasticsearchServiceSoftwareUpdateServiceSoftwareOptions.property.automatedUpdateDate"></a>

- *Type:* `string`

---

##### `cancellable`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesStartElasticsearchServiceSoftwareUpdateServiceSoftwareOptions.property.cancellable"></a>

- *Type:* `boolean`

---

##### `currentVersion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesStartElasticsearchServiceSoftwareUpdateServiceSoftwareOptions.property.currentVersion"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesStartElasticsearchServiceSoftwareUpdateServiceSoftwareOptions.property.description"></a>

- *Type:* `string`

---

##### `newVersion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesStartElasticsearchServiceSoftwareUpdateServiceSoftwareOptions.property.newVersion"></a>

- *Type:* `string`

---

##### `optionalDeployment`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesStartElasticsearchServiceSoftwareUpdateServiceSoftwareOptions.property.optionalDeployment"></a>

- *Type:* `boolean`

---

##### `updateAvailable`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesStartElasticsearchServiceSoftwareUpdateServiceSoftwareOptions.property.updateAvailable"></a>

- *Type:* `boolean`

---

##### `updateStatus`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesStartElasticsearchServiceSoftwareUpdateServiceSoftwareOptions.property.updateStatus"></a>

- *Type:* `string`

---


### ESResponsesUpdateElasticsearchDomainConfig <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfig"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfig.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesUpdateElasticsearchDomainConfig(__scope: Construct, __resources: string[], __input: EsUpdateElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `domainConfig`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfig.property.domainConfig"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfig`](#aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfig)

---


### ESResponsesUpdateElasticsearchDomainConfigDomainConfig <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfig"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfig.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesUpdateElasticsearchDomainConfigDomainConfig(__scope: Construct, __resources: string[], __input: EsUpdateElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `accessPolicies`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfig.property.accessPolicies"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAccessPolicies`](#aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAccessPolicies)

---

##### `advancedOptions`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfig.property.advancedOptions"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedOptions`](#aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedOptions)

---

##### `advancedSecurityOptions`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfig.property.advancedSecurityOptions"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedSecurityOptions`](#aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedSecurityOptions)

---

##### `cognitoOptions`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfig.property.cognitoOptions"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigCognitoOptions`](#aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigCognitoOptions)

---

##### `domainEndpointOptions`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfig.property.domainEndpointOptions"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigDomainEndpointOptions`](#aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigDomainEndpointOptions)

---

##### `ebsOptions`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfig.property.ebsOptions"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEbsOptions`](#aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEbsOptions)

---

##### `elasticsearchClusterConfig`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfig.property.elasticsearchClusterConfig"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchClusterConfig`](#aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchClusterConfig)

---

##### `elasticsearchVersion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfig.property.elasticsearchVersion"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchVersion`](#aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchVersion)

---

##### `encryptionAtRestOptions`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfig.property.encryptionAtRestOptions"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEncryptionAtRestOptions`](#aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEncryptionAtRestOptions)

---

##### `logPublishingOptions`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfig.property.logPublishingOptions"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigLogPublishingOptions`](#aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigLogPublishingOptions)

---

##### `nodeToNodeEncryptionOptions`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfig.property.nodeToNodeEncryptionOptions"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptions`](#aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptions)

---

##### `snapshotOptions`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfig.property.snapshotOptions"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigSnapshotOptions`](#aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigSnapshotOptions)

---

##### `vpcOptions`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfig.property.vpcOptions"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigVpcOptions`](#aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigVpcOptions)

---


### ESResponsesUpdateElasticsearchDomainConfigDomainConfigAccessPolicies <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAccessPolicies"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAccessPolicies.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAccessPolicies(__scope: Construct, __resources: string[], __input: EsUpdateElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAccessPolicies.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAccessPolicies.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAccessPolicies.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAccessPolicies.property.options"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAccessPolicies.property.status"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAccessPoliciesStatus`](#aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAccessPoliciesStatus)

---


### ESResponsesUpdateElasticsearchDomainConfigDomainConfigAccessPoliciesStatus <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAccessPoliciesStatus"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAccessPoliciesStatus.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAccessPoliciesStatus(__scope: Construct, __resources: string[], __input: EsUpdateElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAccessPoliciesStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAccessPoliciesStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAccessPoliciesStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAccessPoliciesStatus.property.creationDate"></a>

- *Type:* `string`

---

##### `pendingDeletion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAccessPoliciesStatus.property.pendingDeletion"></a>

- *Type:* `boolean`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAccessPoliciesStatus.property.state"></a>

- *Type:* `string`

---

##### `updateDate`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAccessPoliciesStatus.property.updateDate"></a>

- *Type:* `string`

---

##### `updateVersion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAccessPoliciesStatus.property.updateVersion"></a>

- *Type:* `number`

---


### ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedOptions <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedOptions(__scope: Construct, __resources: string[], __input: EsUpdateElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedOptions.property.options"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedOptions.property.status"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedOptionsStatus`](#aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedOptionsStatus)

---


### ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedOptionsStatus <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedOptionsStatus"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedOptionsStatus.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedOptionsStatus(__scope: Construct, __resources: string[], __input: EsUpdateElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedOptionsStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedOptionsStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedOptionsStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedOptionsStatus.property.creationDate"></a>

- *Type:* `string`

---

##### `pendingDeletion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedOptionsStatus.property.pendingDeletion"></a>

- *Type:* `boolean`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedOptionsStatus.property.state"></a>

- *Type:* `string`

---

##### `updateDate`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedOptionsStatus.property.updateDate"></a>

- *Type:* `string`

---

##### `updateVersion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedOptionsStatus.property.updateVersion"></a>

- *Type:* `number`

---


### ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedSecurityOptions <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedSecurityOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedSecurityOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedSecurityOptions(__scope: Construct, __resources: string[], __input: EsUpdateElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedSecurityOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedSecurityOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedSecurityOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedSecurityOptions.property.options"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptions`](#aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptions)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedSecurityOptions.property.status"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsStatus`](#aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsStatus)

---


### ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptions <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptions(__scope: Construct, __resources: string[], __input: EsUpdateElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptions.property.enabled"></a>

- *Type:* `boolean`

---

##### `internalUserDatabaseEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptions.property.internalUserDatabaseEnabled"></a>

- *Type:* `boolean`

---

##### `samlOptions`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptions.property.samlOptions"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptionsSamlOptions`](#aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptionsSamlOptions)

---


### ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptionsSamlOptions <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptionsSamlOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptionsSamlOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptionsSamlOptions(__scope: Construct, __resources: string[], __input: EsUpdateElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptionsSamlOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptionsSamlOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptionsSamlOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptionsSamlOptions.property.enabled"></a>

- *Type:* `boolean`

---

##### `idp`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptionsSamlOptions.property.idp"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptionsSamlOptionsIdp`](#aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptionsSamlOptionsIdp)

---

##### `rolesKey`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptionsSamlOptions.property.rolesKey"></a>

- *Type:* `string`

---

##### `sessionTimeoutMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptionsSamlOptions.property.sessionTimeoutMinutes"></a>

- *Type:* `number`

---

##### `subjectKey`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptionsSamlOptions.property.subjectKey"></a>

- *Type:* `string`

---


### ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptionsSamlOptionsIdp <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptionsSamlOptionsIdp"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptionsSamlOptionsIdp.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptionsSamlOptionsIdp(__scope: Construct, __resources: string[], __input: EsUpdateElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptionsSamlOptionsIdp.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptionsSamlOptionsIdp.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptionsSamlOptionsIdp.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `entityId`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptionsSamlOptionsIdp.property.entityId"></a>

- *Type:* `string`

---

##### `metadataContent`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsOptionsSamlOptionsIdp.property.metadataContent"></a>

- *Type:* `string`

---


### ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsStatus <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsStatus"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsStatus.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsStatus(__scope: Construct, __resources: string[], __input: EsUpdateElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsStatus.property.creationDate"></a>

- *Type:* `string`

---

##### `pendingDeletion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsStatus.property.pendingDeletion"></a>

- *Type:* `boolean`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsStatus.property.state"></a>

- *Type:* `string`

---

##### `updateDate`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsStatus.property.updateDate"></a>

- *Type:* `string`

---

##### `updateVersion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigAdvancedSecurityOptionsStatus.property.updateVersion"></a>

- *Type:* `number`

---


### ESResponsesUpdateElasticsearchDomainConfigDomainConfigCognitoOptions <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigCognitoOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigCognitoOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigCognitoOptions(__scope: Construct, __resources: string[], __input: EsUpdateElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigCognitoOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigCognitoOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigCognitoOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigCognitoOptions.property.options"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigCognitoOptionsOptions`](#aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigCognitoOptionsOptions)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigCognitoOptions.property.status"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigCognitoOptionsStatus`](#aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigCognitoOptionsStatus)

---


### ESResponsesUpdateElasticsearchDomainConfigDomainConfigCognitoOptionsOptions <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigCognitoOptionsOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigCognitoOptionsOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigCognitoOptionsOptions(__scope: Construct, __resources: string[], __input: EsUpdateElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigCognitoOptionsOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigCognitoOptionsOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigCognitoOptionsOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigCognitoOptionsOptions.property.enabled"></a>

- *Type:* `boolean`

---

##### `identityPoolId`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigCognitoOptionsOptions.property.identityPoolId"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigCognitoOptionsOptions.property.roleArn"></a>

- *Type:* `string`

---

##### `userPoolId`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigCognitoOptionsOptions.property.userPoolId"></a>

- *Type:* `string`

---


### ESResponsesUpdateElasticsearchDomainConfigDomainConfigCognitoOptionsStatus <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigCognitoOptionsStatus"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigCognitoOptionsStatus.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigCognitoOptionsStatus(__scope: Construct, __resources: string[], __input: EsUpdateElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigCognitoOptionsStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigCognitoOptionsStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigCognitoOptionsStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigCognitoOptionsStatus.property.creationDate"></a>

- *Type:* `string`

---

##### `pendingDeletion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigCognitoOptionsStatus.property.pendingDeletion"></a>

- *Type:* `boolean`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigCognitoOptionsStatus.property.state"></a>

- *Type:* `string`

---

##### `updateDate`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigCognitoOptionsStatus.property.updateDate"></a>

- *Type:* `string`

---

##### `updateVersion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigCognitoOptionsStatus.property.updateVersion"></a>

- *Type:* `number`

---


### ESResponsesUpdateElasticsearchDomainConfigDomainConfigDomainEndpointOptions <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigDomainEndpointOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigDomainEndpointOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigDomainEndpointOptions(__scope: Construct, __resources: string[], __input: EsUpdateElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigDomainEndpointOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigDomainEndpointOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigDomainEndpointOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigDomainEndpointOptions.property.options"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigDomainEndpointOptionsOptions`](#aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigDomainEndpointOptionsOptions)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigDomainEndpointOptions.property.status"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigDomainEndpointOptionsStatus`](#aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigDomainEndpointOptionsStatus)

---


### ESResponsesUpdateElasticsearchDomainConfigDomainConfigDomainEndpointOptionsOptions <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigDomainEndpointOptionsOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigDomainEndpointOptionsOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigDomainEndpointOptionsOptions(__scope: Construct, __resources: string[], __input: EsUpdateElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigDomainEndpointOptionsOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigDomainEndpointOptionsOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigDomainEndpointOptionsOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `customEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigDomainEndpointOptionsOptions.property.customEndpoint"></a>

- *Type:* `string`

---

##### `customEndpointCertificateArn`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigDomainEndpointOptionsOptions.property.customEndpointCertificateArn"></a>

- *Type:* `string`

---

##### `customEndpointEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigDomainEndpointOptionsOptions.property.customEndpointEnabled"></a>

- *Type:* `boolean`

---

##### `enforceHttps`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigDomainEndpointOptionsOptions.property.enforceHttps"></a>

- *Type:* `boolean`

---

##### `tlsSecurityPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigDomainEndpointOptionsOptions.property.tlsSecurityPolicy"></a>

- *Type:* `string`

---


### ESResponsesUpdateElasticsearchDomainConfigDomainConfigDomainEndpointOptionsStatus <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigDomainEndpointOptionsStatus"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigDomainEndpointOptionsStatus.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigDomainEndpointOptionsStatus(__scope: Construct, __resources: string[], __input: EsUpdateElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigDomainEndpointOptionsStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigDomainEndpointOptionsStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigDomainEndpointOptionsStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigDomainEndpointOptionsStatus.property.creationDate"></a>

- *Type:* `string`

---

##### `pendingDeletion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigDomainEndpointOptionsStatus.property.pendingDeletion"></a>

- *Type:* `boolean`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigDomainEndpointOptionsStatus.property.state"></a>

- *Type:* `string`

---

##### `updateDate`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigDomainEndpointOptionsStatus.property.updateDate"></a>

- *Type:* `string`

---

##### `updateVersion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigDomainEndpointOptionsStatus.property.updateVersion"></a>

- *Type:* `number`

---


### ESResponsesUpdateElasticsearchDomainConfigDomainConfigEbsOptions <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEbsOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEbsOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEbsOptions(__scope: Construct, __resources: string[], __input: EsUpdateElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEbsOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEbsOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEbsOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEbsOptions.property.options"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEbsOptionsOptions`](#aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEbsOptionsOptions)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEbsOptions.property.status"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEbsOptionsStatus`](#aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEbsOptionsStatus)

---


### ESResponsesUpdateElasticsearchDomainConfigDomainConfigEbsOptionsOptions <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEbsOptionsOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEbsOptionsOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEbsOptionsOptions(__scope: Construct, __resources: string[], __input: EsUpdateElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEbsOptionsOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEbsOptionsOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEbsOptionsOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `ebsEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEbsOptionsOptions.property.ebsEnabled"></a>

- *Type:* `boolean`

---

##### `iops`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEbsOptionsOptions.property.iops"></a>

- *Type:* `number`

---

##### `volumeSize`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEbsOptionsOptions.property.volumeSize"></a>

- *Type:* `number`

---

##### `volumeType`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEbsOptionsOptions.property.volumeType"></a>

- *Type:* `string`

---


### ESResponsesUpdateElasticsearchDomainConfigDomainConfigEbsOptionsStatus <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEbsOptionsStatus"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEbsOptionsStatus.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEbsOptionsStatus(__scope: Construct, __resources: string[], __input: EsUpdateElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEbsOptionsStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEbsOptionsStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEbsOptionsStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEbsOptionsStatus.property.creationDate"></a>

- *Type:* `string`

---

##### `pendingDeletion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEbsOptionsStatus.property.pendingDeletion"></a>

- *Type:* `boolean`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEbsOptionsStatus.property.state"></a>

- *Type:* `string`

---

##### `updateDate`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEbsOptionsStatus.property.updateDate"></a>

- *Type:* `string`

---

##### `updateVersion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEbsOptionsStatus.property.updateVersion"></a>

- *Type:* `number`

---


### ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchClusterConfig <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchClusterConfig"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchClusterConfig.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchClusterConfig(__scope: Construct, __resources: string[], __input: EsUpdateElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchClusterConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchClusterConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchClusterConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchClusterConfig.property.options"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigOptions`](#aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigOptions)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchClusterConfig.property.status"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigStatus`](#aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigStatus)

---


### ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigOptions <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigOptions(__scope: Construct, __resources: string[], __input: EsUpdateElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `dedicatedMasterCount`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigOptions.property.dedicatedMasterCount"></a>

- *Type:* `number`

---

##### `dedicatedMasterEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigOptions.property.dedicatedMasterEnabled"></a>

- *Type:* `boolean`

---

##### `dedicatedMasterType`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigOptions.property.dedicatedMasterType"></a>

- *Type:* `string`

---

##### `instanceCount`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigOptions.property.instanceCount"></a>

- *Type:* `number`

---

##### `instanceType`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigOptions.property.instanceType"></a>

- *Type:* `string`

---

##### `warmCount`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigOptions.property.warmCount"></a>

- *Type:* `number`

---

##### `warmEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigOptions.property.warmEnabled"></a>

- *Type:* `boolean`

---

##### `warmType`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigOptions.property.warmType"></a>

- *Type:* `string`

---

##### `zoneAwarenessConfig`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigOptions.property.zoneAwarenessConfig"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigOptionsZoneAwarenessConfig`](#aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigOptionsZoneAwarenessConfig)

---

##### `zoneAwarenessEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigOptions.property.zoneAwarenessEnabled"></a>

- *Type:* `boolean`

---


### ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigOptionsZoneAwarenessConfig <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigOptionsZoneAwarenessConfig"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigOptionsZoneAwarenessConfig.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigOptionsZoneAwarenessConfig(__scope: Construct, __resources: string[], __input: EsUpdateElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigOptionsZoneAwarenessConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigOptionsZoneAwarenessConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigOptionsZoneAwarenessConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `availabilityZoneCount`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigOptionsZoneAwarenessConfig.property.availabilityZoneCount"></a>

- *Type:* `number`

---


### ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigStatus <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigStatus"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigStatus.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigStatus(__scope: Construct, __resources: string[], __input: EsUpdateElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigStatus.property.creationDate"></a>

- *Type:* `string`

---

##### `pendingDeletion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigStatus.property.pendingDeletion"></a>

- *Type:* `boolean`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigStatus.property.state"></a>

- *Type:* `string`

---

##### `updateDate`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigStatus.property.updateDate"></a>

- *Type:* `string`

---

##### `updateVersion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchClusterConfigStatus.property.updateVersion"></a>

- *Type:* `number`

---


### ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchVersion <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchVersion"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchVersion.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchVersion(__scope: Construct, __resources: string[], __input: EsUpdateElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchVersion.property.options"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchVersion.property.status"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchVersionStatus`](#aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchVersionStatus)

---


### ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchVersionStatus <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchVersionStatus"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchVersionStatus.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchVersionStatus(__scope: Construct, __resources: string[], __input: EsUpdateElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchVersionStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchVersionStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchVersionStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchVersionStatus.property.creationDate"></a>

- *Type:* `string`

---

##### `pendingDeletion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchVersionStatus.property.pendingDeletion"></a>

- *Type:* `boolean`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchVersionStatus.property.state"></a>

- *Type:* `string`

---

##### `updateDate`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchVersionStatus.property.updateDate"></a>

- *Type:* `string`

---

##### `updateVersion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigElasticsearchVersionStatus.property.updateVersion"></a>

- *Type:* `number`

---


### ESResponsesUpdateElasticsearchDomainConfigDomainConfigEncryptionAtRestOptions <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEncryptionAtRestOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEncryptionAtRestOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEncryptionAtRestOptions(__scope: Construct, __resources: string[], __input: EsUpdateElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEncryptionAtRestOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEncryptionAtRestOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEncryptionAtRestOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEncryptionAtRestOptions.property.options"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEncryptionAtRestOptionsOptions`](#aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEncryptionAtRestOptionsOptions)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEncryptionAtRestOptions.property.status"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEncryptionAtRestOptionsStatus`](#aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEncryptionAtRestOptionsStatus)

---


### ESResponsesUpdateElasticsearchDomainConfigDomainConfigEncryptionAtRestOptionsOptions <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEncryptionAtRestOptionsOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEncryptionAtRestOptionsOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEncryptionAtRestOptionsOptions(__scope: Construct, __resources: string[], __input: EsUpdateElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEncryptionAtRestOptionsOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEncryptionAtRestOptionsOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEncryptionAtRestOptionsOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEncryptionAtRestOptionsOptions.property.enabled"></a>

- *Type:* `boolean`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEncryptionAtRestOptionsOptions.property.kmsKeyId"></a>

- *Type:* `string`

---


### ESResponsesUpdateElasticsearchDomainConfigDomainConfigEncryptionAtRestOptionsStatus <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEncryptionAtRestOptionsStatus"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEncryptionAtRestOptionsStatus.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEncryptionAtRestOptionsStatus(__scope: Construct, __resources: string[], __input: EsUpdateElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEncryptionAtRestOptionsStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEncryptionAtRestOptionsStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEncryptionAtRestOptionsStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEncryptionAtRestOptionsStatus.property.creationDate"></a>

- *Type:* `string`

---

##### `pendingDeletion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEncryptionAtRestOptionsStatus.property.pendingDeletion"></a>

- *Type:* `boolean`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEncryptionAtRestOptionsStatus.property.state"></a>

- *Type:* `string`

---

##### `updateDate`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEncryptionAtRestOptionsStatus.property.updateDate"></a>

- *Type:* `string`

---

##### `updateVersion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigEncryptionAtRestOptionsStatus.property.updateVersion"></a>

- *Type:* `number`

---


### ESResponsesUpdateElasticsearchDomainConfigDomainConfigLogPublishingOptions <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigLogPublishingOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigLogPublishingOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigLogPublishingOptions(__scope: Construct, __resources: string[], __input: EsUpdateElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigLogPublishingOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigLogPublishingOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigLogPublishingOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigLogPublishingOptions.property.options"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.es.EsLogPublishingOption`](#aws-cdk-sdk.es.EsLogPublishingOption)}

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigLogPublishingOptions.property.status"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigLogPublishingOptionsStatus`](#aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigLogPublishingOptionsStatus)

---


### ESResponsesUpdateElasticsearchDomainConfigDomainConfigLogPublishingOptionsStatus <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigLogPublishingOptionsStatus"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigLogPublishingOptionsStatus.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigLogPublishingOptionsStatus(__scope: Construct, __resources: string[], __input: EsUpdateElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigLogPublishingOptionsStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigLogPublishingOptionsStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigLogPublishingOptionsStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigLogPublishingOptionsStatus.property.creationDate"></a>

- *Type:* `string`

---

##### `pendingDeletion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigLogPublishingOptionsStatus.property.pendingDeletion"></a>

- *Type:* `boolean`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigLogPublishingOptionsStatus.property.state"></a>

- *Type:* `string`

---

##### `updateDate`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigLogPublishingOptionsStatus.property.updateDate"></a>

- *Type:* `string`

---

##### `updateVersion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigLogPublishingOptionsStatus.property.updateVersion"></a>

- *Type:* `number`

---


### ESResponsesUpdateElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptions <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptions(__scope: Construct, __resources: string[], __input: EsUpdateElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptions.property.options"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptionsOptions`](#aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptionsOptions)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptions.property.status"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptionsStatus`](#aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptionsStatus)

---


### ESResponsesUpdateElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptionsOptions <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptionsOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptionsOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptionsOptions(__scope: Construct, __resources: string[], __input: EsUpdateElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptionsOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptionsOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptionsOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptionsOptions.property.enabled"></a>

- *Type:* `boolean`

---


### ESResponsesUpdateElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptionsStatus <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptionsStatus"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptionsStatus.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptionsStatus(__scope: Construct, __resources: string[], __input: EsUpdateElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptionsStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptionsStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptionsStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptionsStatus.property.creationDate"></a>

- *Type:* `string`

---

##### `pendingDeletion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptionsStatus.property.pendingDeletion"></a>

- *Type:* `boolean`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptionsStatus.property.state"></a>

- *Type:* `string`

---

##### `updateDate`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptionsStatus.property.updateDate"></a>

- *Type:* `string`

---

##### `updateVersion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigNodeToNodeEncryptionOptionsStatus.property.updateVersion"></a>

- *Type:* `number`

---


### ESResponsesUpdateElasticsearchDomainConfigDomainConfigSnapshotOptions <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigSnapshotOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigSnapshotOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigSnapshotOptions(__scope: Construct, __resources: string[], __input: EsUpdateElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigSnapshotOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigSnapshotOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigSnapshotOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigSnapshotOptions.property.options"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigSnapshotOptionsOptions`](#aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigSnapshotOptionsOptions)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigSnapshotOptions.property.status"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigSnapshotOptionsStatus`](#aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigSnapshotOptionsStatus)

---


### ESResponsesUpdateElasticsearchDomainConfigDomainConfigSnapshotOptionsOptions <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigSnapshotOptionsOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigSnapshotOptionsOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigSnapshotOptionsOptions(__scope: Construct, __resources: string[], __input: EsUpdateElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigSnapshotOptionsOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigSnapshotOptionsOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigSnapshotOptionsOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `automatedSnapshotStartHour`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigSnapshotOptionsOptions.property.automatedSnapshotStartHour"></a>

- *Type:* `number`

---


### ESResponsesUpdateElasticsearchDomainConfigDomainConfigSnapshotOptionsStatus <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigSnapshotOptionsStatus"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigSnapshotOptionsStatus.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigSnapshotOptionsStatus(__scope: Construct, __resources: string[], __input: EsUpdateElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigSnapshotOptionsStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigSnapshotOptionsStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigSnapshotOptionsStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigSnapshotOptionsStatus.property.creationDate"></a>

- *Type:* `string`

---

##### `pendingDeletion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigSnapshotOptionsStatus.property.pendingDeletion"></a>

- *Type:* `boolean`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigSnapshotOptionsStatus.property.state"></a>

- *Type:* `string`

---

##### `updateDate`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigSnapshotOptionsStatus.property.updateDate"></a>

- *Type:* `string`

---

##### `updateVersion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigSnapshotOptionsStatus.property.updateVersion"></a>

- *Type:* `number`

---


### ESResponsesUpdateElasticsearchDomainConfigDomainConfigVpcOptions <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigVpcOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigVpcOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigVpcOptions(__scope: Construct, __resources: string[], __input: EsUpdateElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigVpcOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigVpcOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigVpcOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigVpcOptions.property.options"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigVpcOptionsOptions`](#aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigVpcOptionsOptions)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigVpcOptions.property.status"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigVpcOptionsStatus`](#aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigVpcOptionsStatus)

---


### ESResponsesUpdateElasticsearchDomainConfigDomainConfigVpcOptionsOptions <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigVpcOptionsOptions"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigVpcOptionsOptions.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigVpcOptionsOptions(__scope: Construct, __resources: string[], __input: EsUpdateElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigVpcOptionsOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigVpcOptionsOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigVpcOptionsOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `availabilityZones`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigVpcOptionsOptions.property.availabilityZones"></a>

- *Type:* `string`[]

---

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigVpcOptionsOptions.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnetIds`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigVpcOptionsOptions.property.subnetIds"></a>

- *Type:* `string`[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigVpcOptionsOptions.property.vpcId"></a>

- *Type:* `string`

---


### ESResponsesUpdateElasticsearchDomainConfigDomainConfigVpcOptionsStatus <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigVpcOptionsStatus"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigVpcOptionsStatus.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigVpcOptionsStatus(__scope: Construct, __resources: string[], __input: EsUpdateElasticsearchDomainConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigVpcOptionsStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigVpcOptionsStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigVpcOptionsStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest`](#aws-cdk-sdk.es.EsUpdateElasticsearchDomainConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigVpcOptionsStatus.property.creationDate"></a>

- *Type:* `string`

---

##### `pendingDeletion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigVpcOptionsStatus.property.pendingDeletion"></a>

- *Type:* `boolean`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigVpcOptionsStatus.property.state"></a>

- *Type:* `string`

---

##### `updateDate`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigVpcOptionsStatus.property.updateDate"></a>

- *Type:* `string`

---

##### `updateVersion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdateElasticsearchDomainConfigDomainConfigVpcOptionsStatus.property.updateVersion"></a>

- *Type:* `number`

---


### ESResponsesUpdatePackage <a name="aws-cdk-sdk.es.ESResponsesUpdatePackage"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesUpdatePackage.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesUpdatePackage(__scope: Construct, __resources: string[], __input: EsUpdatePackageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdatePackage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdatePackage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdatePackage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsUpdatePackageRequest`](#aws-cdk-sdk.es.EsUpdatePackageRequest)

---



#### Properties <a name="Properties"></a>

##### `packageDetails`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdatePackage.property.packageDetails"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesUpdatePackagePackageDetails`](#aws-cdk-sdk.es.ESResponsesUpdatePackagePackageDetails)

---


### ESResponsesUpdatePackagePackageDetails <a name="aws-cdk-sdk.es.ESResponsesUpdatePackagePackageDetails"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesUpdatePackagePackageDetails.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesUpdatePackagePackageDetails(__scope: Construct, __resources: string[], __input: EsUpdatePackageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdatePackagePackageDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdatePackagePackageDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdatePackagePackageDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsUpdatePackageRequest`](#aws-cdk-sdk.es.EsUpdatePackageRequest)

---



#### Properties <a name="Properties"></a>

##### `availablePackageVersion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdatePackagePackageDetails.property.availablePackageVersion"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdatePackagePackageDetails.property.createdAt"></a>

- *Type:* `string`

---

##### `errorDetails`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdatePackagePackageDetails.property.errorDetails"></a>

- *Type:* [`aws-cdk-sdk.es.ESResponsesUpdatePackagePackageDetailsErrorDetails`](#aws-cdk-sdk.es.ESResponsesUpdatePackagePackageDetailsErrorDetails)

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdatePackagePackageDetails.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `packageDescription`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdatePackagePackageDetails.property.packageDescription"></a>

- *Type:* `string`

---

##### `packageId`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdatePackagePackageDetails.property.packageId"></a>

- *Type:* `string`

---

##### `packageName`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdatePackagePackageDetails.property.packageName"></a>

- *Type:* `string`

---

##### `packageStatus`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdatePackagePackageDetails.property.packageStatus"></a>

- *Type:* `string`

---

##### `packageType`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdatePackagePackageDetails.property.packageType"></a>

- *Type:* `string`

---


### ESResponsesUpdatePackagePackageDetailsErrorDetails <a name="aws-cdk-sdk.es.ESResponsesUpdatePackagePackageDetailsErrorDetails"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesUpdatePackagePackageDetailsErrorDetails.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesUpdatePackagePackageDetailsErrorDetails(__scope: Construct, __resources: string[], __input: EsUpdatePackageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdatePackagePackageDetailsErrorDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdatePackagePackageDetailsErrorDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdatePackagePackageDetailsErrorDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsUpdatePackageRequest`](#aws-cdk-sdk.es.EsUpdatePackageRequest)

---



#### Properties <a name="Properties"></a>

##### `errorMessage`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdatePackagePackageDetailsErrorDetails.property.errorMessage"></a>

- *Type:* `string`

---

##### `errorType`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpdatePackagePackageDetailsErrorDetails.property.errorType"></a>

- *Type:* `string`

---


### ESResponsesUpgradeElasticsearchDomain <a name="aws-cdk-sdk.es.ESResponsesUpgradeElasticsearchDomain"></a>

#### Initializer <a name="aws-cdk-sdk.es.ESResponsesUpgradeElasticsearchDomain.Initializer"></a>

```typescript
import { es } from 'aws-cdk-sdk'

new es.ESResponsesUpgradeElasticsearchDomain(__scope: Construct, __resources: string[], __input: EsUpgradeElasticsearchDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpgradeElasticsearchDomain.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpgradeElasticsearchDomain.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpgradeElasticsearchDomain.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.es.EsUpgradeElasticsearchDomainRequest`](#aws-cdk-sdk.es.EsUpgradeElasticsearchDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpgradeElasticsearchDomain.property.domainName"></a>

- *Type:* `string`

---

##### `performCheckOnly`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpgradeElasticsearchDomain.property.performCheckOnly"></a>

- *Type:* `boolean`

---

##### `targetVersion`<sup>Required</sup> <a name="aws-cdk-sdk.es.ESResponsesUpgradeElasticsearchDomain.property.targetVersion"></a>

- *Type:* `string`

---



