# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### IoTSiteWiseClient <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `associateAssets` <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.associateAssets"></a>

```typescript
public associateAssets(input: IoTSiteWiseAssociateAssetsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseAssociateAssetsRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseAssociateAssetsRequest)

---

##### `batchAssociateProjectAssets` <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.batchAssociateProjectAssets"></a>

```typescript
public batchAssociateProjectAssets(input: IoTSiteWiseBatchAssociateProjectAssetsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseBatchAssociateProjectAssetsRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseBatchAssociateProjectAssetsRequest)

---

##### `batchDisassociateProjectAssets` <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.batchDisassociateProjectAssets"></a>

```typescript
public batchDisassociateProjectAssets(input: IoTSiteWiseBatchDisassociateProjectAssetsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseBatchDisassociateProjectAssetsRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseBatchDisassociateProjectAssetsRequest)

---

##### `batchPutAssetPropertyValue` <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.batchPutAssetPropertyValue"></a>

```typescript
public batchPutAssetPropertyValue(input: IoTSiteWiseBatchPutAssetPropertyValueRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseBatchPutAssetPropertyValueRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseBatchPutAssetPropertyValueRequest)

---

##### `createAccessPolicy` <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.createAccessPolicy"></a>

```typescript
public createAccessPolicy(input: IoTSiteWiseCreateAccessPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateAccessPolicyRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateAccessPolicyRequest)

---

##### `createAsset` <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.createAsset"></a>

```typescript
public createAsset(input: IoTSiteWiseCreateAssetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateAssetRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateAssetRequest)

---

##### `createAssetModel` <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.createAssetModel"></a>

```typescript
public createAssetModel(input: IoTSiteWiseCreateAssetModelRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateAssetModelRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateAssetModelRequest)

---

##### `createDashboard` <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.createDashboard"></a>

```typescript
public createDashboard(input: IoTSiteWiseCreateDashboardRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateDashboardRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateDashboardRequest)

---

##### `createGateway` <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.createGateway"></a>

```typescript
public createGateway(input: IoTSiteWiseCreateGatewayRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateGatewayRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateGatewayRequest)

---

##### `createPortal` <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.createPortal"></a>

```typescript
public createPortal(input: IoTSiteWiseCreatePortalRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseCreatePortalRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseCreatePortalRequest)

---

##### `createPresignedPortalUrl` <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.createPresignedPortalUrl"></a>

```typescript
public createPresignedPortalUrl(input: IoTSiteWiseCreatePresignedPortalUrlRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseCreatePresignedPortalUrlRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseCreatePresignedPortalUrlRequest)

---

##### `createProject` <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.createProject"></a>

```typescript
public createProject(input: IoTSiteWiseCreateProjectRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateProjectRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateProjectRequest)

---

##### `deleteAccessPolicy` <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.deleteAccessPolicy"></a>

```typescript
public deleteAccessPolicy(input: IoTSiteWiseDeleteAccessPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseDeleteAccessPolicyRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseDeleteAccessPolicyRequest)

---

##### `deleteAsset` <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.deleteAsset"></a>

```typescript
public deleteAsset(input: IoTSiteWiseDeleteAssetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseDeleteAssetRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseDeleteAssetRequest)

---

##### `deleteAssetModel` <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.deleteAssetModel"></a>

```typescript
public deleteAssetModel(input: IoTSiteWiseDeleteAssetModelRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseDeleteAssetModelRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseDeleteAssetModelRequest)

---

##### `deleteDashboard` <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.deleteDashboard"></a>

```typescript
public deleteDashboard(input: IoTSiteWiseDeleteDashboardRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseDeleteDashboardRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseDeleteDashboardRequest)

---

##### `deleteGateway` <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.deleteGateway"></a>

```typescript
public deleteGateway(input: IoTSiteWiseDeleteGatewayRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseDeleteGatewayRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseDeleteGatewayRequest)

---

##### `deletePortal` <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.deletePortal"></a>

```typescript
public deletePortal(input: IoTSiteWiseDeletePortalRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseDeletePortalRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseDeletePortalRequest)

---

##### `deleteProject` <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.deleteProject"></a>

```typescript
public deleteProject(input: IoTSiteWiseDeleteProjectRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseDeleteProjectRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseDeleteProjectRequest)

---

##### `describeAccessPolicy` <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.describeAccessPolicy"></a>

```typescript
public describeAccessPolicy(input: IoTSiteWiseDescribeAccessPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAccessPolicyRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAccessPolicyRequest)

---

##### `describeAsset` <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.describeAsset"></a>

```typescript
public describeAsset(input: IoTSiteWiseDescribeAssetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetRequest)

---

##### `describeAssetModel` <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.describeAssetModel"></a>

```typescript
public describeAssetModel(input: IoTSiteWiseDescribeAssetModelRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetModelRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetModelRequest)

---

##### `describeAssetProperty` <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.describeAssetProperty"></a>

```typescript
public describeAssetProperty(input: IoTSiteWiseDescribeAssetPropertyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetPropertyRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetPropertyRequest)

---

##### `describeDashboard` <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.describeDashboard"></a>

```typescript
public describeDashboard(input: IoTSiteWiseDescribeDashboardRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeDashboardRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeDashboardRequest)

---

##### `describeDefaultEncryptionConfiguration` <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.describeDefaultEncryptionConfiguration"></a>

```typescript
public describeDefaultEncryptionConfiguration()
```

##### `describeGateway` <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.describeGateway"></a>

```typescript
public describeGateway(input: IoTSiteWiseDescribeGatewayRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeGatewayRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeGatewayRequest)

---

##### `describeGatewayCapabilityConfiguration` <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.describeGatewayCapabilityConfiguration"></a>

```typescript
public describeGatewayCapabilityConfiguration(input: IoTSiteWiseDescribeGatewayCapabilityConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeGatewayCapabilityConfigurationRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeGatewayCapabilityConfigurationRequest)

---

##### `describeLoggingOptions` <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.describeLoggingOptions"></a>

```typescript
public describeLoggingOptions()
```

##### `describePortal` <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.describePortal"></a>

```typescript
public describePortal(input: IoTSiteWiseDescribePortalRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribePortalRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribePortalRequest)

---

##### `describeProject` <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.describeProject"></a>

```typescript
public describeProject(input: IoTSiteWiseDescribeProjectRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeProjectRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeProjectRequest)

---

##### `disassociateAssets` <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.disassociateAssets"></a>

```typescript
public disassociateAssets(input: IoTSiteWiseDisassociateAssetsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseDisassociateAssetsRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseDisassociateAssetsRequest)

---

##### `fetchAssetPropertyAggregates` <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.fetchAssetPropertyAggregates"></a>

```typescript
public fetchAssetPropertyAggregates(input: IoTSiteWiseGetAssetPropertyAggregatesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseGetAssetPropertyAggregatesRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseGetAssetPropertyAggregatesRequest)

---

##### `fetchAssetPropertyValue` <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.fetchAssetPropertyValue"></a>

```typescript
public fetchAssetPropertyValue(input: IoTSiteWiseGetAssetPropertyValueRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseGetAssetPropertyValueRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseGetAssetPropertyValueRequest)

---

##### `fetchAssetPropertyValueHistory` <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.fetchAssetPropertyValueHistory"></a>

```typescript
public fetchAssetPropertyValueHistory(input: IoTSiteWiseGetAssetPropertyValueHistoryRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseGetAssetPropertyValueHistoryRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseGetAssetPropertyValueHistoryRequest)

---

##### `listAccessPolicies` <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.listAccessPolicies"></a>

```typescript
public listAccessPolicies(input: IoTSiteWiseListAccessPoliciesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseListAccessPoliciesRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseListAccessPoliciesRequest)

---

##### `listAssetModels` <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.listAssetModels"></a>

```typescript
public listAssetModels(input: IoTSiteWiseListAssetModelsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseListAssetModelsRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseListAssetModelsRequest)

---

##### `listAssets` <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.listAssets"></a>

```typescript
public listAssets(input: IoTSiteWiseListAssetsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseListAssetsRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseListAssetsRequest)

---

##### `listAssociatedAssets` <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.listAssociatedAssets"></a>

```typescript
public listAssociatedAssets(input: IoTSiteWiseListAssociatedAssetsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseListAssociatedAssetsRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseListAssociatedAssetsRequest)

---

##### `listDashboards` <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.listDashboards"></a>

```typescript
public listDashboards(input: IoTSiteWiseListDashboardsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseListDashboardsRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseListDashboardsRequest)

---

##### `listGateways` <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.listGateways"></a>

```typescript
public listGateways(input: IoTSiteWiseListGatewaysRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseListGatewaysRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseListGatewaysRequest)

---

##### `listPortals` <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.listPortals"></a>

```typescript
public listPortals(input: IoTSiteWiseListPortalsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseListPortalsRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseListPortalsRequest)

---

##### `listProjectAssets` <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.listProjectAssets"></a>

```typescript
public listProjectAssets(input: IoTSiteWiseListProjectAssetsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseListProjectAssetsRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseListProjectAssetsRequest)

---

##### `listProjects` <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.listProjects"></a>

```typescript
public listProjects(input: IoTSiteWiseListProjectsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseListProjectsRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseListProjectsRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: IoTSiteWiseListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseListTagsForResourceRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseListTagsForResourceRequest)

---

##### `putDefaultEncryptionConfiguration` <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.putDefaultEncryptionConfiguration"></a>

```typescript
public putDefaultEncryptionConfiguration(input: IoTSiteWisePutDefaultEncryptionConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWisePutDefaultEncryptionConfigurationRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWisePutDefaultEncryptionConfigurationRequest)

---

##### `putLoggingOptions` <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.putLoggingOptions"></a>

```typescript
public putLoggingOptions(input: IoTSiteWisePutLoggingOptionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWisePutLoggingOptionsRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWisePutLoggingOptionsRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.tagResource"></a>

```typescript
public tagResource(input: IoTSiteWiseTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseTagResourceRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.untagResource"></a>

```typescript
public untagResource(input: IoTSiteWiseUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseUntagResourceRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseUntagResourceRequest)

---

##### `updateAccessPolicy` <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.updateAccessPolicy"></a>

```typescript
public updateAccessPolicy(input: IoTSiteWiseUpdateAccessPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateAccessPolicyRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateAccessPolicyRequest)

---

##### `updateAsset` <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.updateAsset"></a>

```typescript
public updateAsset(input: IoTSiteWiseUpdateAssetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateAssetRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateAssetRequest)

---

##### `updateAssetModel` <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.updateAssetModel"></a>

```typescript
public updateAssetModel(input: IoTSiteWiseUpdateAssetModelRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateAssetModelRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateAssetModelRequest)

---

##### `updateAssetProperty` <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.updateAssetProperty"></a>

```typescript
public updateAssetProperty(input: IoTSiteWiseUpdateAssetPropertyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateAssetPropertyRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateAssetPropertyRequest)

---

##### `updateDashboard` <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.updateDashboard"></a>

```typescript
public updateDashboard(input: IoTSiteWiseUpdateDashboardRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateDashboardRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateDashboardRequest)

---

##### `updateGateway` <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.updateGateway"></a>

```typescript
public updateGateway(input: IoTSiteWiseUpdateGatewayRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateGatewayRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateGatewayRequest)

---

##### `updateGatewayCapabilityConfiguration` <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.updateGatewayCapabilityConfiguration"></a>

```typescript
public updateGatewayCapabilityConfiguration(input: IoTSiteWiseUpdateGatewayCapabilityConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateGatewayCapabilityConfigurationRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateGatewayCapabilityConfigurationRequest)

---

##### `updatePortal` <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.updatePortal"></a>

```typescript
public updatePortal(input: IoTSiteWiseUpdatePortalRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdatePortalRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdatePortalRequest)

---

##### `updateProject` <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.updateProject"></a>

```typescript
public updateProject(input: IoTSiteWiseUpdateProjectRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateProjectRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateProjectRequest)

---




## Structs <a name="Structs"></a>

### IoTSiteWiseAccessPolicySummary <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAccessPolicySummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseAccessPolicySummary: iotsitewise.IoTSiteWiseAccessPolicySummary = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAccessPolicySummary.property.id"></a>

- *Type:* `string`

---

##### `identity`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAccessPolicySummary.property.identity"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseIdentity`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseIdentity)

---

##### `permission`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAccessPolicySummary.property.permission"></a>

- *Type:* `string`

---

##### `resource`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAccessPolicySummary.property.resource"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseResource`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseResource)

---

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAccessPolicySummary.property.creationDate"></a>

- *Type:* `string`

---

##### `lastUpdateDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAccessPolicySummary.property.lastUpdateDate"></a>

- *Type:* `string`

---

### IoTSiteWiseAggregatedValue <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAggregatedValue"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseAggregatedValue: iotsitewise.IoTSiteWiseAggregatedValue = { ... }
```

##### `timestamp`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAggregatedValue.property.timestamp"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAggregatedValue.property.value"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseAggregates`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseAggregates)

---

##### `quality`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAggregatedValue.property.quality"></a>

- *Type:* `string`

---

### IoTSiteWiseAggregates <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAggregates"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseAggregates: iotsitewise.IoTSiteWiseAggregates = { ... }
```

##### `average`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAggregates.property.average"></a>

- *Type:* `number`

---

##### `count`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAggregates.property.count"></a>

- *Type:* `number`

---

##### `maximum`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAggregates.property.maximum"></a>

- *Type:* `number`

---

##### `minimum`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAggregates.property.minimum"></a>

- *Type:* `number`

---

##### `standardDeviation`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAggregates.property.standardDeviation"></a>

- *Type:* `number`

---

##### `sum`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAggregates.property.sum"></a>

- *Type:* `number`

---

### IoTSiteWiseAssetErrorDetails <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetErrorDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseAssetErrorDetails: iotsitewise.IoTSiteWiseAssetErrorDetails = { ... }
```

##### `assetId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetErrorDetails.property.assetId"></a>

- *Type:* `string`

---

##### `code`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetErrorDetails.property.code"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetErrorDetails.property.message"></a>

- *Type:* `string`

---

### IoTSiteWiseAssetHierarchy <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetHierarchy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseAssetHierarchy: iotsitewise.IoTSiteWiseAssetHierarchy = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetHierarchy.property.name"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetHierarchy.property.id"></a>

- *Type:* `string`

---

### IoTSiteWiseAssetModelHierarchy <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetModelHierarchy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseAssetModelHierarchy: iotsitewise.IoTSiteWiseAssetModelHierarchy = { ... }
```

##### `childAssetModelId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetModelHierarchy.property.childAssetModelId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetModelHierarchy.property.name"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetModelHierarchy.property.id"></a>

- *Type:* `string`

---

### IoTSiteWiseAssetModelHierarchyDefinition <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetModelHierarchyDefinition"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseAssetModelHierarchyDefinition: iotsitewise.IoTSiteWiseAssetModelHierarchyDefinition = { ... }
```

##### `childAssetModelId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetModelHierarchyDefinition.property.childAssetModelId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetModelHierarchyDefinition.property.name"></a>

- *Type:* `string`

---

### IoTSiteWiseAssetModelProperty <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetModelProperty"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseAssetModelProperty: iotsitewise.IoTSiteWiseAssetModelProperty = { ... }
```

##### `dataType`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetModelProperty.property.dataType"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetModelProperty.property.name"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetModelProperty.property.type"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWisePropertyType`](#aws-cdk-sdk.iotsitewise.IoTSiteWisePropertyType)

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetModelProperty.property.id"></a>

- *Type:* `string`

---

##### `unit`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetModelProperty.property.unit"></a>

- *Type:* `string`

---

### IoTSiteWiseAssetModelPropertyDefinition <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetModelPropertyDefinition"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseAssetModelPropertyDefinition: iotsitewise.IoTSiteWiseAssetModelPropertyDefinition = { ... }
```

##### `dataType`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetModelPropertyDefinition.property.dataType"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetModelPropertyDefinition.property.name"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetModelPropertyDefinition.property.type"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWisePropertyType`](#aws-cdk-sdk.iotsitewise.IoTSiteWisePropertyType)

---

##### `unit`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetModelPropertyDefinition.property.unit"></a>

- *Type:* `string`

---

### IoTSiteWiseAssetModelStatus <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetModelStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseAssetModelStatus: iotsitewise.IoTSiteWiseAssetModelStatus = { ... }
```

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetModelStatus.property.state"></a>

- *Type:* `string`

---

##### `error`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetModelStatus.property.error"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseErrorDetails`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseErrorDetails)

---

### IoTSiteWiseAssetModelSummary <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetModelSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseAssetModelSummary: iotsitewise.IoTSiteWiseAssetModelSummary = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetModelSummary.property.arn"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetModelSummary.property.creationDate"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetModelSummary.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetModelSummary.property.id"></a>

- *Type:* `string`

---

##### `lastUpdateDate`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetModelSummary.property.lastUpdateDate"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetModelSummary.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetModelSummary.property.status"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetModelStatus`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetModelStatus)

---

### IoTSiteWiseAssetProperty <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetProperty"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseAssetProperty: iotsitewise.IoTSiteWiseAssetProperty = { ... }
```

##### `dataType`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetProperty.property.dataType"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetProperty.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetProperty.property.name"></a>

- *Type:* `string`

---

##### `alias`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetProperty.property.alias"></a>

- *Type:* `string`

---

##### `notification`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetProperty.property.notification"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWisePropertyNotification`](#aws-cdk-sdk.iotsitewise.IoTSiteWisePropertyNotification)

---

##### `unit`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetProperty.property.unit"></a>

- *Type:* `string`

---

### IoTSiteWiseAssetPropertyValue <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetPropertyValue"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseAssetPropertyValue: iotsitewise.IoTSiteWiseAssetPropertyValue = { ... }
```

##### `timestamp`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetPropertyValue.property.timestamp"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseTimeInNanos`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseTimeInNanos)

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetPropertyValue.property.value"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseVariant`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseVariant)

---

##### `quality`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetPropertyValue.property.quality"></a>

- *Type:* `string`

---

### IoTSiteWiseAssetStatus <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseAssetStatus: iotsitewise.IoTSiteWiseAssetStatus = { ... }
```

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetStatus.property.state"></a>

- *Type:* `string`

---

##### `error`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetStatus.property.error"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseErrorDetails`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseErrorDetails)

---

### IoTSiteWiseAssetSummary <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseAssetSummary: iotsitewise.IoTSiteWiseAssetSummary = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetSummary.property.arn"></a>

- *Type:* `string`

---

##### `assetModelId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetSummary.property.assetModelId"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetSummary.property.creationDate"></a>

- *Type:* `string`

---

##### `hierarchies`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetSummary.property.hierarchies"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetHierarchy`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetHierarchy)[]

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetSummary.property.id"></a>

- *Type:* `string`

---

##### `lastUpdateDate`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetSummary.property.lastUpdateDate"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetSummary.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetSummary.property.status"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetStatus`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetStatus)

---

### IoTSiteWiseAssociateAssetsRequest <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssociateAssetsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseAssociateAssetsRequest: iotsitewise.IoTSiteWiseAssociateAssetsRequest = { ... }
```

##### `assetId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssociateAssetsRequest.property.assetId"></a>

- *Type:* `string`

---

##### `childAssetId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssociateAssetsRequest.property.childAssetId"></a>

- *Type:* `string`

---

##### `hierarchyId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssociateAssetsRequest.property.hierarchyId"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssociateAssetsRequest.property.clientToken"></a>

- *Type:* `string`

---

### IoTSiteWiseAssociatedAssetsSummary <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssociatedAssetsSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseAssociatedAssetsSummary: iotsitewise.IoTSiteWiseAssociatedAssetsSummary = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssociatedAssetsSummary.property.arn"></a>

- *Type:* `string`

---

##### `assetModelId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssociatedAssetsSummary.property.assetModelId"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssociatedAssetsSummary.property.creationDate"></a>

- *Type:* `string`

---

##### `hierarchies`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssociatedAssetsSummary.property.hierarchies"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetHierarchy`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetHierarchy)[]

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssociatedAssetsSummary.property.id"></a>

- *Type:* `string`

---

##### `lastUpdateDate`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssociatedAssetsSummary.property.lastUpdateDate"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssociatedAssetsSummary.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAssociatedAssetsSummary.property.status"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetStatus`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetStatus)

---

### IoTSiteWiseAttribute <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAttribute"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseAttribute: iotsitewise.IoTSiteWiseAttribute = { ... }
```

##### `defaultValue`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseAttribute.property.defaultValue"></a>

- *Type:* `string`

---

### IoTSiteWiseBatchAssociateProjectAssetsRequest <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseBatchAssociateProjectAssetsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseBatchAssociateProjectAssetsRequest: iotsitewise.IoTSiteWiseBatchAssociateProjectAssetsRequest = { ... }
```

##### `assetIds`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseBatchAssociateProjectAssetsRequest.property.assetIds"></a>

- *Type:* `string`[]

---

##### `projectId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseBatchAssociateProjectAssetsRequest.property.projectId"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseBatchAssociateProjectAssetsRequest.property.clientToken"></a>

- *Type:* `string`

---

### IoTSiteWiseBatchAssociateProjectAssetsResponse <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseBatchAssociateProjectAssetsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseBatchAssociateProjectAssetsResponse: iotsitewise.IoTSiteWiseBatchAssociateProjectAssetsResponse = { ... }
```

##### `errors`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseBatchAssociateProjectAssetsResponse.property.errors"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetErrorDetails`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetErrorDetails)[]

---

### IoTSiteWiseBatchDisassociateProjectAssetsRequest <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseBatchDisassociateProjectAssetsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseBatchDisassociateProjectAssetsRequest: iotsitewise.IoTSiteWiseBatchDisassociateProjectAssetsRequest = { ... }
```

##### `assetIds`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseBatchDisassociateProjectAssetsRequest.property.assetIds"></a>

- *Type:* `string`[]

---

##### `projectId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseBatchDisassociateProjectAssetsRequest.property.projectId"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseBatchDisassociateProjectAssetsRequest.property.clientToken"></a>

- *Type:* `string`

---

### IoTSiteWiseBatchDisassociateProjectAssetsResponse <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseBatchDisassociateProjectAssetsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseBatchDisassociateProjectAssetsResponse: iotsitewise.IoTSiteWiseBatchDisassociateProjectAssetsResponse = { ... }
```

##### `errors`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseBatchDisassociateProjectAssetsResponse.property.errors"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetErrorDetails`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetErrorDetails)[]

---

### IoTSiteWiseBatchPutAssetPropertyError <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseBatchPutAssetPropertyError"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseBatchPutAssetPropertyError: iotsitewise.IoTSiteWiseBatchPutAssetPropertyError = { ... }
```

##### `errorCode`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseBatchPutAssetPropertyError.property.errorCode"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseBatchPutAssetPropertyError.property.errorMessage"></a>

- *Type:* `string`

---

##### `timestamps`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseBatchPutAssetPropertyError.property.timestamps"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseTimeInNanos`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseTimeInNanos)[]

---

### IoTSiteWiseBatchPutAssetPropertyErrorEntry <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseBatchPutAssetPropertyErrorEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseBatchPutAssetPropertyErrorEntry: iotsitewise.IoTSiteWiseBatchPutAssetPropertyErrorEntry = { ... }
```

##### `entryId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseBatchPutAssetPropertyErrorEntry.property.entryId"></a>

- *Type:* `string`

---

##### `errors`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseBatchPutAssetPropertyErrorEntry.property.errors"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseBatchPutAssetPropertyError`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseBatchPutAssetPropertyError)[]

---

### IoTSiteWiseBatchPutAssetPropertyValueRequest <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseBatchPutAssetPropertyValueRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseBatchPutAssetPropertyValueRequest: iotsitewise.IoTSiteWiseBatchPutAssetPropertyValueRequest = { ... }
```

##### `entries`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseBatchPutAssetPropertyValueRequest.property.entries"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWisePutAssetPropertyValueEntry`](#aws-cdk-sdk.iotsitewise.IoTSiteWisePutAssetPropertyValueEntry)[]

---

### IoTSiteWiseBatchPutAssetPropertyValueResponse <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseBatchPutAssetPropertyValueResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseBatchPutAssetPropertyValueResponse: iotsitewise.IoTSiteWiseBatchPutAssetPropertyValueResponse = { ... }
```

##### `errorEntries`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseBatchPutAssetPropertyValueResponse.property.errorEntries"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseBatchPutAssetPropertyErrorEntry`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseBatchPutAssetPropertyErrorEntry)[]

---

### IoTSiteWiseConfigurationErrorDetails <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseConfigurationErrorDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseConfigurationErrorDetails: iotsitewise.IoTSiteWiseConfigurationErrorDetails = { ... }
```

##### `code`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseConfigurationErrorDetails.property.code"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseConfigurationErrorDetails.property.message"></a>

- *Type:* `string`

---

### IoTSiteWiseConfigurationStatus <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseConfigurationStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseConfigurationStatus: iotsitewise.IoTSiteWiseConfigurationStatus = { ... }
```

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseConfigurationStatus.property.state"></a>

- *Type:* `string`

---

##### `error`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseConfigurationStatus.property.error"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseConfigurationErrorDetails`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseConfigurationErrorDetails)

---

### IoTSiteWiseCreateAccessPolicyRequest <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateAccessPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseCreateAccessPolicyRequest: iotsitewise.IoTSiteWiseCreateAccessPolicyRequest = { ... }
```

##### `accessPolicyIdentity`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateAccessPolicyRequest.property.accessPolicyIdentity"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseIdentity`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseIdentity)

---

##### `accessPolicyPermission`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateAccessPolicyRequest.property.accessPolicyPermission"></a>

- *Type:* `string`

---

##### `accessPolicyResource`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateAccessPolicyRequest.property.accessPolicyResource"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseResource`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseResource)

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateAccessPolicyRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateAccessPolicyRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### IoTSiteWiseCreateAccessPolicyResponse <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateAccessPolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseCreateAccessPolicyResponse: iotsitewise.IoTSiteWiseCreateAccessPolicyResponse = { ... }
```

##### `accessPolicyArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateAccessPolicyResponse.property.accessPolicyArn"></a>

- *Type:* `string`

---

##### `accessPolicyId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateAccessPolicyResponse.property.accessPolicyId"></a>

- *Type:* `string`

---

### IoTSiteWiseCreateAssetModelRequest <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateAssetModelRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseCreateAssetModelRequest: iotsitewise.IoTSiteWiseCreateAssetModelRequest = { ... }
```

##### `assetModelName`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateAssetModelRequest.property.assetModelName"></a>

- *Type:* `string`

---

##### `assetModelDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateAssetModelRequest.property.assetModelDescription"></a>

- *Type:* `string`

---

##### `assetModelHierarchies`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateAssetModelRequest.property.assetModelHierarchies"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetModelHierarchyDefinition`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetModelHierarchyDefinition)[]

---

##### `assetModelProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateAssetModelRequest.property.assetModelProperties"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetModelPropertyDefinition`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetModelPropertyDefinition)[]

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateAssetModelRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateAssetModelRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### IoTSiteWiseCreateAssetModelResponse <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateAssetModelResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseCreateAssetModelResponse: iotsitewise.IoTSiteWiseCreateAssetModelResponse = { ... }
```

##### `assetModelArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateAssetModelResponse.property.assetModelArn"></a>

- *Type:* `string`

---

##### `assetModelId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateAssetModelResponse.property.assetModelId"></a>

- *Type:* `string`

---

##### `assetModelStatus`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateAssetModelResponse.property.assetModelStatus"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetModelStatus`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetModelStatus)

---

### IoTSiteWiseCreateAssetRequest <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateAssetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseCreateAssetRequest: iotsitewise.IoTSiteWiseCreateAssetRequest = { ... }
```

##### `assetModelId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateAssetRequest.property.assetModelId"></a>

- *Type:* `string`

---

##### `assetName`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateAssetRequest.property.assetName"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateAssetRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateAssetRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### IoTSiteWiseCreateAssetResponse <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateAssetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseCreateAssetResponse: iotsitewise.IoTSiteWiseCreateAssetResponse = { ... }
```

##### `assetArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateAssetResponse.property.assetArn"></a>

- *Type:* `string`

---

##### `assetId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateAssetResponse.property.assetId"></a>

- *Type:* `string`

---

##### `assetStatus`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateAssetResponse.property.assetStatus"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetStatus`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetStatus)

---

### IoTSiteWiseCreateDashboardRequest <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateDashboardRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseCreateDashboardRequest: iotsitewise.IoTSiteWiseCreateDashboardRequest = { ... }
```

##### `dashboardDefinition`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateDashboardRequest.property.dashboardDefinition"></a>

- *Type:* `string`

---

##### `dashboardName`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateDashboardRequest.property.dashboardName"></a>

- *Type:* `string`

---

##### `projectId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateDashboardRequest.property.projectId"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateDashboardRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `dashboardDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateDashboardRequest.property.dashboardDescription"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateDashboardRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### IoTSiteWiseCreateDashboardResponse <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateDashboardResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseCreateDashboardResponse: iotsitewise.IoTSiteWiseCreateDashboardResponse = { ... }
```

##### `dashboardArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateDashboardResponse.property.dashboardArn"></a>

- *Type:* `string`

---

##### `dashboardId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateDashboardResponse.property.dashboardId"></a>

- *Type:* `string`

---

### IoTSiteWiseCreateGatewayRequest <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateGatewayRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseCreateGatewayRequest: iotsitewise.IoTSiteWiseCreateGatewayRequest = { ... }
```

##### `gatewayName`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateGatewayRequest.property.gatewayName"></a>

- *Type:* `string`

---

##### `gatewayPlatform`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateGatewayRequest.property.gatewayPlatform"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseGatewayPlatform`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseGatewayPlatform)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateGatewayRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### IoTSiteWiseCreateGatewayResponse <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateGatewayResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseCreateGatewayResponse: iotsitewise.IoTSiteWiseCreateGatewayResponse = { ... }
```

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateGatewayResponse.property.gatewayArn"></a>

- *Type:* `string`

---

##### `gatewayId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateGatewayResponse.property.gatewayId"></a>

- *Type:* `string`

---

### IoTSiteWiseCreatePortalRequest <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreatePortalRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseCreatePortalRequest: iotsitewise.IoTSiteWiseCreatePortalRequest = { ... }
```

##### `portalContactEmail`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreatePortalRequest.property.portalContactEmail"></a>

- *Type:* `string`

---

##### `portalName`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreatePortalRequest.property.portalName"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreatePortalRequest.property.roleArn"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreatePortalRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `portalAuthMode`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreatePortalRequest.property.portalAuthMode"></a>

- *Type:* `string`

---

##### `portalDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreatePortalRequest.property.portalDescription"></a>

- *Type:* `string`

---

##### `portalLogoImageFile`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreatePortalRequest.property.portalLogoImageFile"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseImageFile`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseImageFile)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreatePortalRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### IoTSiteWiseCreatePortalResponse <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreatePortalResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseCreatePortalResponse: iotsitewise.IoTSiteWiseCreatePortalResponse = { ... }
```

##### `portalArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreatePortalResponse.property.portalArn"></a>

- *Type:* `string`

---

##### `portalId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreatePortalResponse.property.portalId"></a>

- *Type:* `string`

---

##### `portalStartUrl`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreatePortalResponse.property.portalStartUrl"></a>

- *Type:* `string`

---

##### `portalStatus`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreatePortalResponse.property.portalStatus"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWisePortalStatus`](#aws-cdk-sdk.iotsitewise.IoTSiteWisePortalStatus)

---

##### `ssoApplicationId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreatePortalResponse.property.ssoApplicationId"></a>

- *Type:* `string`

---

### IoTSiteWiseCreatePresignedPortalUrlRequest <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreatePresignedPortalUrlRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseCreatePresignedPortalUrlRequest: iotsitewise.IoTSiteWiseCreatePresignedPortalUrlRequest = { ... }
```

##### `portalId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreatePresignedPortalUrlRequest.property.portalId"></a>

- *Type:* `string`

---

##### `sessionDurationSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreatePresignedPortalUrlRequest.property.sessionDurationSeconds"></a>

- *Type:* `number`

---

### IoTSiteWiseCreatePresignedPortalUrlResponse <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreatePresignedPortalUrlResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseCreatePresignedPortalUrlResponse: iotsitewise.IoTSiteWiseCreatePresignedPortalUrlResponse = { ... }
```

##### `presignedPortalUrl`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreatePresignedPortalUrlResponse.property.presignedPortalUrl"></a>

- *Type:* `string`

---

### IoTSiteWiseCreateProjectRequest <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateProjectRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseCreateProjectRequest: iotsitewise.IoTSiteWiseCreateProjectRequest = { ... }
```

##### `portalId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateProjectRequest.property.portalId"></a>

- *Type:* `string`

---

##### `projectName`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateProjectRequest.property.projectName"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateProjectRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `projectDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateProjectRequest.property.projectDescription"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateProjectRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### IoTSiteWiseCreateProjectResponse <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateProjectResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseCreateProjectResponse: iotsitewise.IoTSiteWiseCreateProjectResponse = { ... }
```

##### `projectArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateProjectResponse.property.projectArn"></a>

- *Type:* `string`

---

##### `projectId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateProjectResponse.property.projectId"></a>

- *Type:* `string`

---

### IoTSiteWiseDashboardSummary <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDashboardSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseDashboardSummary: iotsitewise.IoTSiteWiseDashboardSummary = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDashboardSummary.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDashboardSummary.property.name"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDashboardSummary.property.creationDate"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDashboardSummary.property.description"></a>

- *Type:* `string`

---

##### `lastUpdateDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDashboardSummary.property.lastUpdateDate"></a>

- *Type:* `string`

---

### IoTSiteWiseDeleteAccessPolicyRequest <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDeleteAccessPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseDeleteAccessPolicyRequest: iotsitewise.IoTSiteWiseDeleteAccessPolicyRequest = { ... }
```

##### `accessPolicyId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDeleteAccessPolicyRequest.property.accessPolicyId"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDeleteAccessPolicyRequest.property.clientToken"></a>

- *Type:* `string`

---

### IoTSiteWiseDeleteAccessPolicyResponse <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDeleteAccessPolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseDeleteAccessPolicyResponse: iotsitewise.IoTSiteWiseDeleteAccessPolicyResponse = { ... }
```

### IoTSiteWiseDeleteAssetModelRequest <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDeleteAssetModelRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseDeleteAssetModelRequest: iotsitewise.IoTSiteWiseDeleteAssetModelRequest = { ... }
```

##### `assetModelId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDeleteAssetModelRequest.property.assetModelId"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDeleteAssetModelRequest.property.clientToken"></a>

- *Type:* `string`

---

### IoTSiteWiseDeleteAssetModelResponse <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDeleteAssetModelResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseDeleteAssetModelResponse: iotsitewise.IoTSiteWiseDeleteAssetModelResponse = { ... }
```

##### `assetModelStatus`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDeleteAssetModelResponse.property.assetModelStatus"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetModelStatus`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetModelStatus)

---

### IoTSiteWiseDeleteAssetRequest <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDeleteAssetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseDeleteAssetRequest: iotsitewise.IoTSiteWiseDeleteAssetRequest = { ... }
```

##### `assetId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDeleteAssetRequest.property.assetId"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDeleteAssetRequest.property.clientToken"></a>

- *Type:* `string`

---

### IoTSiteWiseDeleteAssetResponse <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDeleteAssetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseDeleteAssetResponse: iotsitewise.IoTSiteWiseDeleteAssetResponse = { ... }
```

##### `assetStatus`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDeleteAssetResponse.property.assetStatus"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetStatus`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetStatus)

---

### IoTSiteWiseDeleteDashboardRequest <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDeleteDashboardRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseDeleteDashboardRequest: iotsitewise.IoTSiteWiseDeleteDashboardRequest = { ... }
```

##### `dashboardId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDeleteDashboardRequest.property.dashboardId"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDeleteDashboardRequest.property.clientToken"></a>

- *Type:* `string`

---

### IoTSiteWiseDeleteDashboardResponse <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDeleteDashboardResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseDeleteDashboardResponse: iotsitewise.IoTSiteWiseDeleteDashboardResponse = { ... }
```

### IoTSiteWiseDeleteGatewayRequest <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDeleteGatewayRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseDeleteGatewayRequest: iotsitewise.IoTSiteWiseDeleteGatewayRequest = { ... }
```

##### `gatewayId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDeleteGatewayRequest.property.gatewayId"></a>

- *Type:* `string`

---

### IoTSiteWiseDeletePortalRequest <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDeletePortalRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseDeletePortalRequest: iotsitewise.IoTSiteWiseDeletePortalRequest = { ... }
```

##### `portalId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDeletePortalRequest.property.portalId"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDeletePortalRequest.property.clientToken"></a>

- *Type:* `string`

---

### IoTSiteWiseDeletePortalResponse <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDeletePortalResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseDeletePortalResponse: iotsitewise.IoTSiteWiseDeletePortalResponse = { ... }
```

##### `portalStatus`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDeletePortalResponse.property.portalStatus"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWisePortalStatus`](#aws-cdk-sdk.iotsitewise.IoTSiteWisePortalStatus)

---

### IoTSiteWiseDeleteProjectRequest <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDeleteProjectRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseDeleteProjectRequest: iotsitewise.IoTSiteWiseDeleteProjectRequest = { ... }
```

##### `projectId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDeleteProjectRequest.property.projectId"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDeleteProjectRequest.property.clientToken"></a>

- *Type:* `string`

---

### IoTSiteWiseDeleteProjectResponse <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDeleteProjectResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseDeleteProjectResponse: iotsitewise.IoTSiteWiseDeleteProjectResponse = { ... }
```

### IoTSiteWiseDescribeAccessPolicyRequest <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAccessPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseDescribeAccessPolicyRequest: iotsitewise.IoTSiteWiseDescribeAccessPolicyRequest = { ... }
```

##### `accessPolicyId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAccessPolicyRequest.property.accessPolicyId"></a>

- *Type:* `string`

---

### IoTSiteWiseDescribeAccessPolicyResponse <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAccessPolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseDescribeAccessPolicyResponse: iotsitewise.IoTSiteWiseDescribeAccessPolicyResponse = { ... }
```

##### `accessPolicyArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAccessPolicyResponse.property.accessPolicyArn"></a>

- *Type:* `string`

---

##### `accessPolicyCreationDate`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAccessPolicyResponse.property.accessPolicyCreationDate"></a>

- *Type:* `string`

---

##### `accessPolicyId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAccessPolicyResponse.property.accessPolicyId"></a>

- *Type:* `string`

---

##### `accessPolicyIdentity`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAccessPolicyResponse.property.accessPolicyIdentity"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseIdentity`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseIdentity)

---

##### `accessPolicyLastUpdateDate`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAccessPolicyResponse.property.accessPolicyLastUpdateDate"></a>

- *Type:* `string`

---

##### `accessPolicyPermission`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAccessPolicyResponse.property.accessPolicyPermission"></a>

- *Type:* `string`

---

##### `accessPolicyResource`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAccessPolicyResponse.property.accessPolicyResource"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseResource`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseResource)

---

### IoTSiteWiseDescribeAssetModelRequest <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetModelRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseDescribeAssetModelRequest: iotsitewise.IoTSiteWiseDescribeAssetModelRequest = { ... }
```

##### `assetModelId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetModelRequest.property.assetModelId"></a>

- *Type:* `string`

---

### IoTSiteWiseDescribeAssetModelResponse <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetModelResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseDescribeAssetModelResponse: iotsitewise.IoTSiteWiseDescribeAssetModelResponse = { ... }
```

##### `assetModelArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetModelResponse.property.assetModelArn"></a>

- *Type:* `string`

---

##### `assetModelCreationDate`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetModelResponse.property.assetModelCreationDate"></a>

- *Type:* `string`

---

##### `assetModelDescription`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetModelResponse.property.assetModelDescription"></a>

- *Type:* `string`

---

##### `assetModelHierarchies`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetModelResponse.property.assetModelHierarchies"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetModelHierarchy`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetModelHierarchy)[]

---

##### `assetModelId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetModelResponse.property.assetModelId"></a>

- *Type:* `string`

---

##### `assetModelLastUpdateDate`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetModelResponse.property.assetModelLastUpdateDate"></a>

- *Type:* `string`

---

##### `assetModelName`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetModelResponse.property.assetModelName"></a>

- *Type:* `string`

---

##### `assetModelProperties`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetModelResponse.property.assetModelProperties"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetModelProperty`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetModelProperty)[]

---

##### `assetModelStatus`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetModelResponse.property.assetModelStatus"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetModelStatus`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetModelStatus)

---

### IoTSiteWiseDescribeAssetPropertyRequest <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetPropertyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseDescribeAssetPropertyRequest: iotsitewise.IoTSiteWiseDescribeAssetPropertyRequest = { ... }
```

##### `assetId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetPropertyRequest.property.assetId"></a>

- *Type:* `string`

---

##### `propertyId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetPropertyRequest.property.propertyId"></a>

- *Type:* `string`

---

### IoTSiteWiseDescribeAssetPropertyResponse <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetPropertyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseDescribeAssetPropertyResponse: iotsitewise.IoTSiteWiseDescribeAssetPropertyResponse = { ... }
```

##### `assetId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetPropertyResponse.property.assetId"></a>

- *Type:* `string`

---

##### `assetModelId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetPropertyResponse.property.assetModelId"></a>

- *Type:* `string`

---

##### `assetName`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetPropertyResponse.property.assetName"></a>

- *Type:* `string`

---

##### `assetProperty`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetPropertyResponse.property.assetProperty"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseProperty`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseProperty)

---

### IoTSiteWiseDescribeAssetRequest <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseDescribeAssetRequest: iotsitewise.IoTSiteWiseDescribeAssetRequest = { ... }
```

##### `assetId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetRequest.property.assetId"></a>

- *Type:* `string`

---

### IoTSiteWiseDescribeAssetResponse <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseDescribeAssetResponse: iotsitewise.IoTSiteWiseDescribeAssetResponse = { ... }
```

##### `assetArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetResponse.property.assetArn"></a>

- *Type:* `string`

---

##### `assetCreationDate`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetResponse.property.assetCreationDate"></a>

- *Type:* `string`

---

##### `assetHierarchies`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetResponse.property.assetHierarchies"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetHierarchy`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetHierarchy)[]

---

##### `assetId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetResponse.property.assetId"></a>

- *Type:* `string`

---

##### `assetLastUpdateDate`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetResponse.property.assetLastUpdateDate"></a>

- *Type:* `string`

---

##### `assetModelId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetResponse.property.assetModelId"></a>

- *Type:* `string`

---

##### `assetName`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetResponse.property.assetName"></a>

- *Type:* `string`

---

##### `assetProperties`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetResponse.property.assetProperties"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetProperty`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetProperty)[]

---

##### `assetStatus`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetResponse.property.assetStatus"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetStatus`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetStatus)

---

### IoTSiteWiseDescribeDashboardRequest <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeDashboardRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseDescribeDashboardRequest: iotsitewise.IoTSiteWiseDescribeDashboardRequest = { ... }
```

##### `dashboardId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeDashboardRequest.property.dashboardId"></a>

- *Type:* `string`

---

### IoTSiteWiseDescribeDashboardResponse <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeDashboardResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseDescribeDashboardResponse: iotsitewise.IoTSiteWiseDescribeDashboardResponse = { ... }
```

##### `dashboardArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeDashboardResponse.property.dashboardArn"></a>

- *Type:* `string`

---

##### `dashboardCreationDate`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeDashboardResponse.property.dashboardCreationDate"></a>

- *Type:* `string`

---

##### `dashboardDefinition`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeDashboardResponse.property.dashboardDefinition"></a>

- *Type:* `string`

---

##### `dashboardId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeDashboardResponse.property.dashboardId"></a>

- *Type:* `string`

---

##### `dashboardLastUpdateDate`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeDashboardResponse.property.dashboardLastUpdateDate"></a>

- *Type:* `string`

---

##### `dashboardName`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeDashboardResponse.property.dashboardName"></a>

- *Type:* `string`

---

##### `projectId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeDashboardResponse.property.projectId"></a>

- *Type:* `string`

---

##### `dashboardDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeDashboardResponse.property.dashboardDescription"></a>

- *Type:* `string`

---

### IoTSiteWiseDescribeDefaultEncryptionConfigurationRequest <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeDefaultEncryptionConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseDescribeDefaultEncryptionConfigurationRequest: iotsitewise.IoTSiteWiseDescribeDefaultEncryptionConfigurationRequest = { ... }
```

### IoTSiteWiseDescribeDefaultEncryptionConfigurationResponse <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeDefaultEncryptionConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseDescribeDefaultEncryptionConfigurationResponse: iotsitewise.IoTSiteWiseDescribeDefaultEncryptionConfigurationResponse = { ... }
```

##### `configurationStatus`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeDefaultEncryptionConfigurationResponse.property.configurationStatus"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseConfigurationStatus`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseConfigurationStatus)

---

##### `encryptionType`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeDefaultEncryptionConfigurationResponse.property.encryptionType"></a>

- *Type:* `string`

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeDefaultEncryptionConfigurationResponse.property.kmsKeyArn"></a>

- *Type:* `string`

---

### IoTSiteWiseDescribeGatewayCapabilityConfigurationRequest <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeGatewayCapabilityConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseDescribeGatewayCapabilityConfigurationRequest: iotsitewise.IoTSiteWiseDescribeGatewayCapabilityConfigurationRequest = { ... }
```

##### `capabilityNamespace`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeGatewayCapabilityConfigurationRequest.property.capabilityNamespace"></a>

- *Type:* `string`

---

##### `gatewayId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeGatewayCapabilityConfigurationRequest.property.gatewayId"></a>

- *Type:* `string`

---

### IoTSiteWiseDescribeGatewayCapabilityConfigurationResponse <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeGatewayCapabilityConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseDescribeGatewayCapabilityConfigurationResponse: iotsitewise.IoTSiteWiseDescribeGatewayCapabilityConfigurationResponse = { ... }
```

##### `capabilityConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeGatewayCapabilityConfigurationResponse.property.capabilityConfiguration"></a>

- *Type:* `string`

---

##### `capabilityNamespace`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeGatewayCapabilityConfigurationResponse.property.capabilityNamespace"></a>

- *Type:* `string`

---

##### `capabilitySyncStatus`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeGatewayCapabilityConfigurationResponse.property.capabilitySyncStatus"></a>

- *Type:* `string`

---

##### `gatewayId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeGatewayCapabilityConfigurationResponse.property.gatewayId"></a>

- *Type:* `string`

---

### IoTSiteWiseDescribeGatewayRequest <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeGatewayRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseDescribeGatewayRequest: iotsitewise.IoTSiteWiseDescribeGatewayRequest = { ... }
```

##### `gatewayId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeGatewayRequest.property.gatewayId"></a>

- *Type:* `string`

---

### IoTSiteWiseDescribeGatewayResponse <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeGatewayResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseDescribeGatewayResponse: iotsitewise.IoTSiteWiseDescribeGatewayResponse = { ... }
```

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeGatewayResponse.property.creationDate"></a>

- *Type:* `string`

---

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeGatewayResponse.property.gatewayArn"></a>

- *Type:* `string`

---

##### `gatewayCapabilitySummaries`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeGatewayResponse.property.gatewayCapabilitySummaries"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseGatewayCapabilitySummary`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseGatewayCapabilitySummary)[]

---

##### `gatewayId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeGatewayResponse.property.gatewayId"></a>

- *Type:* `string`

---

##### `gatewayName`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeGatewayResponse.property.gatewayName"></a>

- *Type:* `string`

---

##### `lastUpdateDate`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeGatewayResponse.property.lastUpdateDate"></a>

- *Type:* `string`

---

##### `gatewayPlatform`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeGatewayResponse.property.gatewayPlatform"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseGatewayPlatform`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseGatewayPlatform)

---

### IoTSiteWiseDescribeLoggingOptionsRequest <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeLoggingOptionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseDescribeLoggingOptionsRequest: iotsitewise.IoTSiteWiseDescribeLoggingOptionsRequest = { ... }
```

### IoTSiteWiseDescribeLoggingOptionsResponse <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeLoggingOptionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseDescribeLoggingOptionsResponse: iotsitewise.IoTSiteWiseDescribeLoggingOptionsResponse = { ... }
```

##### `loggingOptions`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeLoggingOptionsResponse.property.loggingOptions"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseLoggingOptions`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseLoggingOptions)

---

### IoTSiteWiseDescribePortalRequest <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribePortalRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseDescribePortalRequest: iotsitewise.IoTSiteWiseDescribePortalRequest = { ... }
```

##### `portalId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribePortalRequest.property.portalId"></a>

- *Type:* `string`

---

### IoTSiteWiseDescribePortalResponse <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribePortalResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseDescribePortalResponse: iotsitewise.IoTSiteWiseDescribePortalResponse = { ... }
```

##### `portalArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribePortalResponse.property.portalArn"></a>

- *Type:* `string`

---

##### `portalClientId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribePortalResponse.property.portalClientId"></a>

- *Type:* `string`

---

##### `portalContactEmail`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribePortalResponse.property.portalContactEmail"></a>

- *Type:* `string`

---

##### `portalCreationDate`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribePortalResponse.property.portalCreationDate"></a>

- *Type:* `string`

---

##### `portalId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribePortalResponse.property.portalId"></a>

- *Type:* `string`

---

##### `portalLastUpdateDate`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribePortalResponse.property.portalLastUpdateDate"></a>

- *Type:* `string`

---

##### `portalName`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribePortalResponse.property.portalName"></a>

- *Type:* `string`

---

##### `portalStartUrl`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribePortalResponse.property.portalStartUrl"></a>

- *Type:* `string`

---

##### `portalStatus`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribePortalResponse.property.portalStatus"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWisePortalStatus`](#aws-cdk-sdk.iotsitewise.IoTSiteWisePortalStatus)

---

##### `portalAuthMode`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribePortalResponse.property.portalAuthMode"></a>

- *Type:* `string`

---

##### `portalDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribePortalResponse.property.portalDescription"></a>

- *Type:* `string`

---

##### `portalLogoImageLocation`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribePortalResponse.property.portalLogoImageLocation"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseImageLocation`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseImageLocation)

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribePortalResponse.property.roleArn"></a>

- *Type:* `string`

---

### IoTSiteWiseDescribeProjectRequest <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeProjectRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseDescribeProjectRequest: iotsitewise.IoTSiteWiseDescribeProjectRequest = { ... }
```

##### `projectId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeProjectRequest.property.projectId"></a>

- *Type:* `string`

---

### IoTSiteWiseDescribeProjectResponse <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeProjectResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseDescribeProjectResponse: iotsitewise.IoTSiteWiseDescribeProjectResponse = { ... }
```

##### `portalId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeProjectResponse.property.portalId"></a>

- *Type:* `string`

---

##### `projectArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeProjectResponse.property.projectArn"></a>

- *Type:* `string`

---

##### `projectCreationDate`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeProjectResponse.property.projectCreationDate"></a>

- *Type:* `string`

---

##### `projectId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeProjectResponse.property.projectId"></a>

- *Type:* `string`

---

##### `projectLastUpdateDate`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeProjectResponse.property.projectLastUpdateDate"></a>

- *Type:* `string`

---

##### `projectName`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeProjectResponse.property.projectName"></a>

- *Type:* `string`

---

##### `projectDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeProjectResponse.property.projectDescription"></a>

- *Type:* `string`

---

### IoTSiteWiseDisassociateAssetsRequest <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDisassociateAssetsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseDisassociateAssetsRequest: iotsitewise.IoTSiteWiseDisassociateAssetsRequest = { ... }
```

##### `assetId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDisassociateAssetsRequest.property.assetId"></a>

- *Type:* `string`

---

##### `childAssetId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDisassociateAssetsRequest.property.childAssetId"></a>

- *Type:* `string`

---

##### `hierarchyId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDisassociateAssetsRequest.property.hierarchyId"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseDisassociateAssetsRequest.property.clientToken"></a>

- *Type:* `string`

---

### IoTSiteWiseErrorDetails <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseErrorDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseErrorDetails: iotsitewise.IoTSiteWiseErrorDetails = { ... }
```

##### `code`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseErrorDetails.property.code"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseErrorDetails.property.message"></a>

- *Type:* `string`

---

### IoTSiteWiseExpressionVariable <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseExpressionVariable"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseExpressionVariable: iotsitewise.IoTSiteWiseExpressionVariable = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseExpressionVariable.property.name"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseExpressionVariable.property.value"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseVariableValue`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseVariableValue)

---

### IoTSiteWiseGatewayCapabilitySummary <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseGatewayCapabilitySummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseGatewayCapabilitySummary: iotsitewise.IoTSiteWiseGatewayCapabilitySummary = { ... }
```

##### `capabilityNamespace`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseGatewayCapabilitySummary.property.capabilityNamespace"></a>

- *Type:* `string`

---

##### `capabilitySyncStatus`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseGatewayCapabilitySummary.property.capabilitySyncStatus"></a>

- *Type:* `string`

---

### IoTSiteWiseGatewayPlatform <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseGatewayPlatform"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseGatewayPlatform: iotsitewise.IoTSiteWiseGatewayPlatform = { ... }
```

##### `greengrass`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseGatewayPlatform.property.greengrass"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseGreengrass`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseGreengrass)

---

### IoTSiteWiseGatewaySummary <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseGatewaySummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseGatewaySummary: iotsitewise.IoTSiteWiseGatewaySummary = { ... }
```

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseGatewaySummary.property.creationDate"></a>

- *Type:* `string`

---

##### `gatewayId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseGatewaySummary.property.gatewayId"></a>

- *Type:* `string`

---

##### `gatewayName`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseGatewaySummary.property.gatewayName"></a>

- *Type:* `string`

---

##### `lastUpdateDate`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseGatewaySummary.property.lastUpdateDate"></a>

- *Type:* `string`

---

##### `gatewayCapabilitySummaries`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseGatewaySummary.property.gatewayCapabilitySummaries"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseGatewayCapabilitySummary`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseGatewayCapabilitySummary)[]

---

### IoTSiteWiseGetAssetPropertyAggregatesRequest <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseGetAssetPropertyAggregatesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseGetAssetPropertyAggregatesRequest: iotsitewise.IoTSiteWiseGetAssetPropertyAggregatesRequest = { ... }
```

##### `aggregateTypes`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseGetAssetPropertyAggregatesRequest.property.aggregateTypes"></a>

- *Type:* `string`[]

---

##### `endDate`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseGetAssetPropertyAggregatesRequest.property.endDate"></a>

- *Type:* `string`

---

##### `resolution`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseGetAssetPropertyAggregatesRequest.property.resolution"></a>

- *Type:* `string`

---

##### `startDate`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseGetAssetPropertyAggregatesRequest.property.startDate"></a>

- *Type:* `string`

---

##### `assetId`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseGetAssetPropertyAggregatesRequest.property.assetId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseGetAssetPropertyAggregatesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseGetAssetPropertyAggregatesRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `propertyAlias`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseGetAssetPropertyAggregatesRequest.property.propertyAlias"></a>

- *Type:* `string`

---

##### `propertyId`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseGetAssetPropertyAggregatesRequest.property.propertyId"></a>

- *Type:* `string`

---

##### `qualities`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseGetAssetPropertyAggregatesRequest.property.qualities"></a>

- *Type:* `string`[]

---

##### `timeOrdering`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseGetAssetPropertyAggregatesRequest.property.timeOrdering"></a>

- *Type:* `string`

---

### IoTSiteWiseGetAssetPropertyAggregatesResponse <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseGetAssetPropertyAggregatesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseGetAssetPropertyAggregatesResponse: iotsitewise.IoTSiteWiseGetAssetPropertyAggregatesResponse = { ... }
```

##### `aggregatedValues`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseGetAssetPropertyAggregatesResponse.property.aggregatedValues"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseAggregatedValue`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseAggregatedValue)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseGetAssetPropertyAggregatesResponse.property.nextToken"></a>

- *Type:* `string`

---

### IoTSiteWiseGetAssetPropertyValueHistoryRequest <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseGetAssetPropertyValueHistoryRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseGetAssetPropertyValueHistoryRequest: iotsitewise.IoTSiteWiseGetAssetPropertyValueHistoryRequest = { ... }
```

##### `assetId`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseGetAssetPropertyValueHistoryRequest.property.assetId"></a>

- *Type:* `string`

---

##### `endDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseGetAssetPropertyValueHistoryRequest.property.endDate"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseGetAssetPropertyValueHistoryRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseGetAssetPropertyValueHistoryRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `propertyAlias`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseGetAssetPropertyValueHistoryRequest.property.propertyAlias"></a>

- *Type:* `string`

---

##### `propertyId`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseGetAssetPropertyValueHistoryRequest.property.propertyId"></a>

- *Type:* `string`

---

##### `qualities`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseGetAssetPropertyValueHistoryRequest.property.qualities"></a>

- *Type:* `string`[]

---

##### `startDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseGetAssetPropertyValueHistoryRequest.property.startDate"></a>

- *Type:* `string`

---

##### `timeOrdering`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseGetAssetPropertyValueHistoryRequest.property.timeOrdering"></a>

- *Type:* `string`

---

### IoTSiteWiseGetAssetPropertyValueHistoryResponse <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseGetAssetPropertyValueHistoryResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseGetAssetPropertyValueHistoryResponse: iotsitewise.IoTSiteWiseGetAssetPropertyValueHistoryResponse = { ... }
```

##### `assetPropertyValueHistory`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseGetAssetPropertyValueHistoryResponse.property.assetPropertyValueHistory"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetPropertyValue`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetPropertyValue)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseGetAssetPropertyValueHistoryResponse.property.nextToken"></a>

- *Type:* `string`

---

### IoTSiteWiseGetAssetPropertyValueRequest <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseGetAssetPropertyValueRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseGetAssetPropertyValueRequest: iotsitewise.IoTSiteWiseGetAssetPropertyValueRequest = { ... }
```

##### `assetId`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseGetAssetPropertyValueRequest.property.assetId"></a>

- *Type:* `string`

---

##### `propertyAlias`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseGetAssetPropertyValueRequest.property.propertyAlias"></a>

- *Type:* `string`

---

##### `propertyId`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseGetAssetPropertyValueRequest.property.propertyId"></a>

- *Type:* `string`

---

### IoTSiteWiseGetAssetPropertyValueResponse <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseGetAssetPropertyValueResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseGetAssetPropertyValueResponse: iotsitewise.IoTSiteWiseGetAssetPropertyValueResponse = { ... }
```

##### `propertyValue`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseGetAssetPropertyValueResponse.property.propertyValue"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetPropertyValue`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetPropertyValue)

---

### IoTSiteWiseGreengrass <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseGreengrass"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseGreengrass: iotsitewise.IoTSiteWiseGreengrass = { ... }
```

##### `groupArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseGreengrass.property.groupArn"></a>

- *Type:* `string`

---

### IoTSiteWiseGroupIdentity <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseGroupIdentity"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseGroupIdentity: iotsitewise.IoTSiteWiseGroupIdentity = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseGroupIdentity.property.id"></a>

- *Type:* `string`

---

### IoTSiteWiseIamUserIdentity <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseIamUserIdentity"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseIamUserIdentity: iotsitewise.IoTSiteWiseIamUserIdentity = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseIamUserIdentity.property.arn"></a>

- *Type:* `string`

---

### IoTSiteWiseIdentity <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseIdentity"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseIdentity: iotsitewise.IoTSiteWiseIdentity = { ... }
```

##### `group`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseIdentity.property.group"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseGroupIdentity`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseGroupIdentity)

---

##### `iamUser`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseIdentity.property.iamUser"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseIamUserIdentity`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseIamUserIdentity)

---

##### `user`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseIdentity.property.user"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseUserIdentity`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseUserIdentity)

---

### IoTSiteWiseImage <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseImage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseImage: iotsitewise.IoTSiteWiseImage = { ... }
```

##### `file`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseImage.property.file"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseImageFile`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseImageFile)

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseImage.property.id"></a>

- *Type:* `string`

---

### IoTSiteWiseImageFile <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseImageFile"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseImageFile: iotsitewise.IoTSiteWiseImageFile = { ... }
```

##### `data`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseImageFile.property.data"></a>

- *Type:* `any`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseImageFile.property.type"></a>

- *Type:* `string`

---

### IoTSiteWiseImageLocation <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseImageLocation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseImageLocation: iotsitewise.IoTSiteWiseImageLocation = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseImageLocation.property.id"></a>

- *Type:* `string`

---

##### `url`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseImageLocation.property.url"></a>

- *Type:* `string`

---

### IoTSiteWiseListAccessPoliciesRequest <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListAccessPoliciesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseListAccessPoliciesRequest: iotsitewise.IoTSiteWiseListAccessPoliciesRequest = { ... }
```

##### `iamArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListAccessPoliciesRequest.property.iamArn"></a>

- *Type:* `string`

---

##### `identityId`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListAccessPoliciesRequest.property.identityId"></a>

- *Type:* `string`

---

##### `identityType`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListAccessPoliciesRequest.property.identityType"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListAccessPoliciesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListAccessPoliciesRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListAccessPoliciesRequest.property.resourceId"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListAccessPoliciesRequest.property.resourceType"></a>

- *Type:* `string`

---

### IoTSiteWiseListAccessPoliciesResponse <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListAccessPoliciesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseListAccessPoliciesResponse: iotsitewise.IoTSiteWiseListAccessPoliciesResponse = { ... }
```

##### `accessPolicySummaries`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListAccessPoliciesResponse.property.accessPolicySummaries"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseAccessPolicySummary`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseAccessPolicySummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListAccessPoliciesResponse.property.nextToken"></a>

- *Type:* `string`

---

### IoTSiteWiseListAssetModelsRequest <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListAssetModelsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseListAssetModelsRequest: iotsitewise.IoTSiteWiseListAssetModelsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListAssetModelsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListAssetModelsRequest.property.nextToken"></a>

- *Type:* `string`

---

### IoTSiteWiseListAssetModelsResponse <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListAssetModelsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseListAssetModelsResponse: iotsitewise.IoTSiteWiseListAssetModelsResponse = { ... }
```

##### `assetModelSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListAssetModelsResponse.property.assetModelSummaries"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetModelSummary`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetModelSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListAssetModelsResponse.property.nextToken"></a>

- *Type:* `string`

---

### IoTSiteWiseListAssetsRequest <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListAssetsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseListAssetsRequest: iotsitewise.IoTSiteWiseListAssetsRequest = { ... }
```

##### `assetModelId`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListAssetsRequest.property.assetModelId"></a>

- *Type:* `string`

---

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListAssetsRequest.property.filter"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListAssetsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListAssetsRequest.property.nextToken"></a>

- *Type:* `string`

---

### IoTSiteWiseListAssetsResponse <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListAssetsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseListAssetsResponse: iotsitewise.IoTSiteWiseListAssetsResponse = { ... }
```

##### `assetSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListAssetsResponse.property.assetSummaries"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetSummary`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListAssetsResponse.property.nextToken"></a>

- *Type:* `string`

---

### IoTSiteWiseListAssociatedAssetsRequest <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListAssociatedAssetsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseListAssociatedAssetsRequest: iotsitewise.IoTSiteWiseListAssociatedAssetsRequest = { ... }
```

##### `assetId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListAssociatedAssetsRequest.property.assetId"></a>

- *Type:* `string`

---

##### `hierarchyId`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListAssociatedAssetsRequest.property.hierarchyId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListAssociatedAssetsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListAssociatedAssetsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `traversalDirection`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListAssociatedAssetsRequest.property.traversalDirection"></a>

- *Type:* `string`

---

### IoTSiteWiseListAssociatedAssetsResponse <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListAssociatedAssetsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseListAssociatedAssetsResponse: iotsitewise.IoTSiteWiseListAssociatedAssetsResponse = { ... }
```

##### `assetSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListAssociatedAssetsResponse.property.assetSummaries"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseAssociatedAssetsSummary`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseAssociatedAssetsSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListAssociatedAssetsResponse.property.nextToken"></a>

- *Type:* `string`

---

### IoTSiteWiseListDashboardsRequest <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListDashboardsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseListDashboardsRequest: iotsitewise.IoTSiteWiseListDashboardsRequest = { ... }
```

##### `projectId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListDashboardsRequest.property.projectId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListDashboardsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListDashboardsRequest.property.nextToken"></a>

- *Type:* `string`

---

### IoTSiteWiseListDashboardsResponse <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListDashboardsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseListDashboardsResponse: iotsitewise.IoTSiteWiseListDashboardsResponse = { ... }
```

##### `dashboardSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListDashboardsResponse.property.dashboardSummaries"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseDashboardSummary`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseDashboardSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListDashboardsResponse.property.nextToken"></a>

- *Type:* `string`

---

### IoTSiteWiseListGatewaysRequest <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListGatewaysRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseListGatewaysRequest: iotsitewise.IoTSiteWiseListGatewaysRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListGatewaysRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListGatewaysRequest.property.nextToken"></a>

- *Type:* `string`

---

### IoTSiteWiseListGatewaysResponse <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListGatewaysResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseListGatewaysResponse: iotsitewise.IoTSiteWiseListGatewaysResponse = { ... }
```

##### `gatewaySummaries`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListGatewaysResponse.property.gatewaySummaries"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseGatewaySummary`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseGatewaySummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListGatewaysResponse.property.nextToken"></a>

- *Type:* `string`

---

### IoTSiteWiseListPortalsRequest <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListPortalsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseListPortalsRequest: iotsitewise.IoTSiteWiseListPortalsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListPortalsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListPortalsRequest.property.nextToken"></a>

- *Type:* `string`

---

### IoTSiteWiseListPortalsResponse <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListPortalsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseListPortalsResponse: iotsitewise.IoTSiteWiseListPortalsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListPortalsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `portalSummaries`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListPortalsResponse.property.portalSummaries"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWisePortalSummary`](#aws-cdk-sdk.iotsitewise.IoTSiteWisePortalSummary)[]

---

### IoTSiteWiseListProjectAssetsRequest <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListProjectAssetsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseListProjectAssetsRequest: iotsitewise.IoTSiteWiseListProjectAssetsRequest = { ... }
```

##### `projectId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListProjectAssetsRequest.property.projectId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListProjectAssetsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListProjectAssetsRequest.property.nextToken"></a>

- *Type:* `string`

---

### IoTSiteWiseListProjectAssetsResponse <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListProjectAssetsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseListProjectAssetsResponse: iotsitewise.IoTSiteWiseListProjectAssetsResponse = { ... }
```

##### `assetIds`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListProjectAssetsResponse.property.assetIds"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListProjectAssetsResponse.property.nextToken"></a>

- *Type:* `string`

---

### IoTSiteWiseListProjectsRequest <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListProjectsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseListProjectsRequest: iotsitewise.IoTSiteWiseListProjectsRequest = { ... }
```

##### `portalId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListProjectsRequest.property.portalId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListProjectsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListProjectsRequest.property.nextToken"></a>

- *Type:* `string`

---

### IoTSiteWiseListProjectsResponse <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListProjectsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseListProjectsResponse: iotsitewise.IoTSiteWiseListProjectsResponse = { ... }
```

##### `projectSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListProjectsResponse.property.projectSummaries"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseProjectSummary`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseProjectSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListProjectsResponse.property.nextToken"></a>

- *Type:* `string`

---

### IoTSiteWiseListTagsForResourceRequest <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseListTagsForResourceRequest: iotsitewise.IoTSiteWiseListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### IoTSiteWiseListTagsForResourceResponse <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseListTagsForResourceResponse: iotsitewise.IoTSiteWiseListTagsForResourceResponse = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseListTagsForResourceResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### IoTSiteWiseLoggingOptions <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseLoggingOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseLoggingOptions: iotsitewise.IoTSiteWiseLoggingOptions = { ... }
```

##### `level`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseLoggingOptions.property.level"></a>

- *Type:* `string`

---

### IoTSiteWiseMeasurement <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseMeasurement"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseMeasurement: iotsitewise.IoTSiteWiseMeasurement = { ... }
```

### IoTSiteWiseMetric <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseMetric"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseMetric: iotsitewise.IoTSiteWiseMetric = { ... }
```

##### `expression`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseMetric.property.expression"></a>

- *Type:* `string`

---

##### `variables`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseMetric.property.variables"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseExpressionVariable`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseExpressionVariable)[]

---

##### `window`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseMetric.property.window"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseMetricWindow`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseMetricWindow)

---

### IoTSiteWiseMetricWindow <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseMetricWindow"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseMetricWindow: iotsitewise.IoTSiteWiseMetricWindow = { ... }
```

##### `tumbling`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseMetricWindow.property.tumbling"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseTumblingWindow`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseTumblingWindow)

---

### IoTSiteWiseMonitorErrorDetails <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseMonitorErrorDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseMonitorErrorDetails: iotsitewise.IoTSiteWiseMonitorErrorDetails = { ... }
```

##### `code`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseMonitorErrorDetails.property.code"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseMonitorErrorDetails.property.message"></a>

- *Type:* `string`

---

### IoTSiteWisePortalResource <a name="aws-cdk-sdk.iotsitewise.IoTSiteWisePortalResource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWisePortalResource: iotsitewise.IoTSiteWisePortalResource = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWisePortalResource.property.id"></a>

- *Type:* `string`

---

### IoTSiteWisePortalStatus <a name="aws-cdk-sdk.iotsitewise.IoTSiteWisePortalStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWisePortalStatus: iotsitewise.IoTSiteWisePortalStatus = { ... }
```

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWisePortalStatus.property.state"></a>

- *Type:* `string`

---

##### `error`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWisePortalStatus.property.error"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseMonitorErrorDetails`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseMonitorErrorDetails)

---

### IoTSiteWisePortalSummary <a name="aws-cdk-sdk.iotsitewise.IoTSiteWisePortalSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWisePortalSummary: iotsitewise.IoTSiteWisePortalSummary = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWisePortalSummary.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWisePortalSummary.property.name"></a>

- *Type:* `string`

---

##### `startUrl`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWisePortalSummary.property.startUrl"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWisePortalSummary.property.status"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWisePortalStatus`](#aws-cdk-sdk.iotsitewise.IoTSiteWisePortalStatus)

---

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWisePortalSummary.property.creationDate"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWisePortalSummary.property.description"></a>

- *Type:* `string`

---

##### `lastUpdateDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWisePortalSummary.property.lastUpdateDate"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWisePortalSummary.property.roleArn"></a>

- *Type:* `string`

---

### IoTSiteWiseProjectResource <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseProjectResource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseProjectResource: iotsitewise.IoTSiteWiseProjectResource = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseProjectResource.property.id"></a>

- *Type:* `string`

---

### IoTSiteWiseProjectSummary <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseProjectSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseProjectSummary: iotsitewise.IoTSiteWiseProjectSummary = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseProjectSummary.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseProjectSummary.property.name"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseProjectSummary.property.creationDate"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseProjectSummary.property.description"></a>

- *Type:* `string`

---

##### `lastUpdateDate`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseProjectSummary.property.lastUpdateDate"></a>

- *Type:* `string`

---

### IoTSiteWiseProperty <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseProperty"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseProperty: iotsitewise.IoTSiteWiseProperty = { ... }
```

##### `dataType`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseProperty.property.dataType"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseProperty.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseProperty.property.name"></a>

- *Type:* `string`

---

##### `alias`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseProperty.property.alias"></a>

- *Type:* `string`

---

##### `notification`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseProperty.property.notification"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWisePropertyNotification`](#aws-cdk-sdk.iotsitewise.IoTSiteWisePropertyNotification)

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseProperty.property.type"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWisePropertyType`](#aws-cdk-sdk.iotsitewise.IoTSiteWisePropertyType)

---

##### `unit`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseProperty.property.unit"></a>

- *Type:* `string`

---

### IoTSiteWisePropertyNotification <a name="aws-cdk-sdk.iotsitewise.IoTSiteWisePropertyNotification"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWisePropertyNotification: iotsitewise.IoTSiteWisePropertyNotification = { ... }
```

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWisePropertyNotification.property.state"></a>

- *Type:* `string`

---

##### `topic`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWisePropertyNotification.property.topic"></a>

- *Type:* `string`

---

### IoTSiteWisePropertyType <a name="aws-cdk-sdk.iotsitewise.IoTSiteWisePropertyType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWisePropertyType: iotsitewise.IoTSiteWisePropertyType = { ... }
```

##### `attribute`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWisePropertyType.property.attribute"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseAttribute`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseAttribute)

---

##### `measurement`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWisePropertyType.property.measurement"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseMeasurement`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseMeasurement)

---

##### `metric`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWisePropertyType.property.metric"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseMetric`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseMetric)

---

##### `transform`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWisePropertyType.property.transform"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseTransform`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseTransform)

---

### IoTSiteWisePutAssetPropertyValueEntry <a name="aws-cdk-sdk.iotsitewise.IoTSiteWisePutAssetPropertyValueEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWisePutAssetPropertyValueEntry: iotsitewise.IoTSiteWisePutAssetPropertyValueEntry = { ... }
```

##### `entryId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWisePutAssetPropertyValueEntry.property.entryId"></a>

- *Type:* `string`

---

##### `propertyValues`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWisePutAssetPropertyValueEntry.property.propertyValues"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetPropertyValue`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetPropertyValue)[]

---

##### `assetId`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWisePutAssetPropertyValueEntry.property.assetId"></a>

- *Type:* `string`

---

##### `propertyAlias`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWisePutAssetPropertyValueEntry.property.propertyAlias"></a>

- *Type:* `string`

---

##### `propertyId`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWisePutAssetPropertyValueEntry.property.propertyId"></a>

- *Type:* `string`

---

### IoTSiteWisePutDefaultEncryptionConfigurationRequest <a name="aws-cdk-sdk.iotsitewise.IoTSiteWisePutDefaultEncryptionConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWisePutDefaultEncryptionConfigurationRequest: iotsitewise.IoTSiteWisePutDefaultEncryptionConfigurationRequest = { ... }
```

##### `encryptionType`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWisePutDefaultEncryptionConfigurationRequest.property.encryptionType"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWisePutDefaultEncryptionConfigurationRequest.property.kmsKeyId"></a>

- *Type:* `string`

---

### IoTSiteWisePutDefaultEncryptionConfigurationResponse <a name="aws-cdk-sdk.iotsitewise.IoTSiteWisePutDefaultEncryptionConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWisePutDefaultEncryptionConfigurationResponse: iotsitewise.IoTSiteWisePutDefaultEncryptionConfigurationResponse = { ... }
```

##### `configurationStatus`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWisePutDefaultEncryptionConfigurationResponse.property.configurationStatus"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseConfigurationStatus`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseConfigurationStatus)

---

##### `encryptionType`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWisePutDefaultEncryptionConfigurationResponse.property.encryptionType"></a>

- *Type:* `string`

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWisePutDefaultEncryptionConfigurationResponse.property.kmsKeyArn"></a>

- *Type:* `string`

---

### IoTSiteWisePutLoggingOptionsRequest <a name="aws-cdk-sdk.iotsitewise.IoTSiteWisePutLoggingOptionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWisePutLoggingOptionsRequest: iotsitewise.IoTSiteWisePutLoggingOptionsRequest = { ... }
```

##### `loggingOptions`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWisePutLoggingOptionsRequest.property.loggingOptions"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseLoggingOptions`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseLoggingOptions)

---

### IoTSiteWisePutLoggingOptionsResponse <a name="aws-cdk-sdk.iotsitewise.IoTSiteWisePutLoggingOptionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWisePutLoggingOptionsResponse: iotsitewise.IoTSiteWisePutLoggingOptionsResponse = { ... }
```

### IoTSiteWiseResource <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseResource: iotsitewise.IoTSiteWiseResource = { ... }
```

##### `portal`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResource.property.portal"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWisePortalResource`](#aws-cdk-sdk.iotsitewise.IoTSiteWisePortalResource)

---

##### `project`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResource.property.project"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseProjectResource`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseProjectResource)

---

### IoTSiteWiseTagResourceRequest <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseTagResourceRequest: iotsitewise.IoTSiteWiseTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseTagResourceRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### IoTSiteWiseTagResourceResponse <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseTagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseTagResourceResponse: iotsitewise.IoTSiteWiseTagResourceResponse = { ... }
```

### IoTSiteWiseTimeInNanos <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseTimeInNanos"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseTimeInNanos: iotsitewise.IoTSiteWiseTimeInNanos = { ... }
```

##### `timeInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseTimeInNanos.property.timeInSeconds"></a>

- *Type:* `number`

---

##### `offsetInNanos`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseTimeInNanos.property.offsetInNanos"></a>

- *Type:* `number`

---

### IoTSiteWiseTransform <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseTransform"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseTransform: iotsitewise.IoTSiteWiseTransform = { ... }
```

##### `expression`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseTransform.property.expression"></a>

- *Type:* `string`

---

##### `variables`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseTransform.property.variables"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseExpressionVariable`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseExpressionVariable)[]

---

### IoTSiteWiseTumblingWindow <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseTumblingWindow"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseTumblingWindow: iotsitewise.IoTSiteWiseTumblingWindow = { ... }
```

##### `interval`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseTumblingWindow.property.interval"></a>

- *Type:* `string`

---

### IoTSiteWiseUntagResourceRequest <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseUntagResourceRequest: iotsitewise.IoTSiteWiseUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### IoTSiteWiseUntagResourceResponse <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseUntagResourceResponse: iotsitewise.IoTSiteWiseUntagResourceResponse = { ... }
```

### IoTSiteWiseUpdateAccessPolicyRequest <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateAccessPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseUpdateAccessPolicyRequest: iotsitewise.IoTSiteWiseUpdateAccessPolicyRequest = { ... }
```

##### `accessPolicyId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateAccessPolicyRequest.property.accessPolicyId"></a>

- *Type:* `string`

---

##### `accessPolicyIdentity`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateAccessPolicyRequest.property.accessPolicyIdentity"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseIdentity`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseIdentity)

---

##### `accessPolicyPermission`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateAccessPolicyRequest.property.accessPolicyPermission"></a>

- *Type:* `string`

---

##### `accessPolicyResource`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateAccessPolicyRequest.property.accessPolicyResource"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseResource`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseResource)

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateAccessPolicyRequest.property.clientToken"></a>

- *Type:* `string`

---

### IoTSiteWiseUpdateAccessPolicyResponse <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateAccessPolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseUpdateAccessPolicyResponse: iotsitewise.IoTSiteWiseUpdateAccessPolicyResponse = { ... }
```

### IoTSiteWiseUpdateAssetModelRequest <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateAssetModelRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseUpdateAssetModelRequest: iotsitewise.IoTSiteWiseUpdateAssetModelRequest = { ... }
```

##### `assetModelId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateAssetModelRequest.property.assetModelId"></a>

- *Type:* `string`

---

##### `assetModelName`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateAssetModelRequest.property.assetModelName"></a>

- *Type:* `string`

---

##### `assetModelDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateAssetModelRequest.property.assetModelDescription"></a>

- *Type:* `string`

---

##### `assetModelHierarchies`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateAssetModelRequest.property.assetModelHierarchies"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetModelHierarchy`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetModelHierarchy)[]

---

##### `assetModelProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateAssetModelRequest.property.assetModelProperties"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetModelProperty`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetModelProperty)[]

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateAssetModelRequest.property.clientToken"></a>

- *Type:* `string`

---

### IoTSiteWiseUpdateAssetModelResponse <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateAssetModelResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseUpdateAssetModelResponse: iotsitewise.IoTSiteWiseUpdateAssetModelResponse = { ... }
```

##### `assetModelStatus`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateAssetModelResponse.property.assetModelStatus"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetModelStatus`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetModelStatus)

---

### IoTSiteWiseUpdateAssetPropertyRequest <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateAssetPropertyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseUpdateAssetPropertyRequest: iotsitewise.IoTSiteWiseUpdateAssetPropertyRequest = { ... }
```

##### `assetId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateAssetPropertyRequest.property.assetId"></a>

- *Type:* `string`

---

##### `propertyId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateAssetPropertyRequest.property.propertyId"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateAssetPropertyRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `propertyAlias`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateAssetPropertyRequest.property.propertyAlias"></a>

- *Type:* `string`

---

##### `propertyNotificationState`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateAssetPropertyRequest.property.propertyNotificationState"></a>

- *Type:* `string`

---

### IoTSiteWiseUpdateAssetRequest <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateAssetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseUpdateAssetRequest: iotsitewise.IoTSiteWiseUpdateAssetRequest = { ... }
```

##### `assetId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateAssetRequest.property.assetId"></a>

- *Type:* `string`

---

##### `assetName`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateAssetRequest.property.assetName"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateAssetRequest.property.clientToken"></a>

- *Type:* `string`

---

### IoTSiteWiseUpdateAssetResponse <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateAssetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseUpdateAssetResponse: iotsitewise.IoTSiteWiseUpdateAssetResponse = { ... }
```

##### `assetStatus`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateAssetResponse.property.assetStatus"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetStatus`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetStatus)

---

### IoTSiteWiseUpdateDashboardRequest <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateDashboardRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseUpdateDashboardRequest: iotsitewise.IoTSiteWiseUpdateDashboardRequest = { ... }
```

##### `dashboardDefinition`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateDashboardRequest.property.dashboardDefinition"></a>

- *Type:* `string`

---

##### `dashboardId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateDashboardRequest.property.dashboardId"></a>

- *Type:* `string`

---

##### `dashboardName`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateDashboardRequest.property.dashboardName"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateDashboardRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `dashboardDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateDashboardRequest.property.dashboardDescription"></a>

- *Type:* `string`

---

### IoTSiteWiseUpdateDashboardResponse <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateDashboardResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseUpdateDashboardResponse: iotsitewise.IoTSiteWiseUpdateDashboardResponse = { ... }
```

### IoTSiteWiseUpdateGatewayCapabilityConfigurationRequest <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateGatewayCapabilityConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseUpdateGatewayCapabilityConfigurationRequest: iotsitewise.IoTSiteWiseUpdateGatewayCapabilityConfigurationRequest = { ... }
```

##### `capabilityConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateGatewayCapabilityConfigurationRequest.property.capabilityConfiguration"></a>

- *Type:* `string`

---

##### `capabilityNamespace`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateGatewayCapabilityConfigurationRequest.property.capabilityNamespace"></a>

- *Type:* `string`

---

##### `gatewayId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateGatewayCapabilityConfigurationRequest.property.gatewayId"></a>

- *Type:* `string`

---

### IoTSiteWiseUpdateGatewayCapabilityConfigurationResponse <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateGatewayCapabilityConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseUpdateGatewayCapabilityConfigurationResponse: iotsitewise.IoTSiteWiseUpdateGatewayCapabilityConfigurationResponse = { ... }
```

##### `capabilityNamespace`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateGatewayCapabilityConfigurationResponse.property.capabilityNamespace"></a>

- *Type:* `string`

---

##### `capabilitySyncStatus`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateGatewayCapabilityConfigurationResponse.property.capabilitySyncStatus"></a>

- *Type:* `string`

---

### IoTSiteWiseUpdateGatewayRequest <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateGatewayRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseUpdateGatewayRequest: iotsitewise.IoTSiteWiseUpdateGatewayRequest = { ... }
```

##### `gatewayId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateGatewayRequest.property.gatewayId"></a>

- *Type:* `string`

---

##### `gatewayName`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateGatewayRequest.property.gatewayName"></a>

- *Type:* `string`

---

### IoTSiteWiseUpdatePortalRequest <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdatePortalRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseUpdatePortalRequest: iotsitewise.IoTSiteWiseUpdatePortalRequest = { ... }
```

##### `portalContactEmail`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdatePortalRequest.property.portalContactEmail"></a>

- *Type:* `string`

---

##### `portalId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdatePortalRequest.property.portalId"></a>

- *Type:* `string`

---

##### `portalName`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdatePortalRequest.property.portalName"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdatePortalRequest.property.roleArn"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdatePortalRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `portalDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdatePortalRequest.property.portalDescription"></a>

- *Type:* `string`

---

##### `portalLogoImage`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdatePortalRequest.property.portalLogoImage"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseImage`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseImage)

---

### IoTSiteWiseUpdatePortalResponse <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdatePortalResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseUpdatePortalResponse: iotsitewise.IoTSiteWiseUpdatePortalResponse = { ... }
```

##### `portalStatus`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdatePortalResponse.property.portalStatus"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWisePortalStatus`](#aws-cdk-sdk.iotsitewise.IoTSiteWisePortalStatus)

---

### IoTSiteWiseUpdateProjectRequest <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateProjectRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseUpdateProjectRequest: iotsitewise.IoTSiteWiseUpdateProjectRequest = { ... }
```

##### `projectId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateProjectRequest.property.projectId"></a>

- *Type:* `string`

---

##### `projectName`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateProjectRequest.property.projectName"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateProjectRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `projectDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateProjectRequest.property.projectDescription"></a>

- *Type:* `string`

---

### IoTSiteWiseUpdateProjectResponse <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateProjectResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseUpdateProjectResponse: iotsitewise.IoTSiteWiseUpdateProjectResponse = { ... }
```

### IoTSiteWiseUserIdentity <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUserIdentity"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseUserIdentity: iotsitewise.IoTSiteWiseUserIdentity = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseUserIdentity.property.id"></a>

- *Type:* `string`

---

### IoTSiteWiseVariableValue <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseVariableValue"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseVariableValue: iotsitewise.IoTSiteWiseVariableValue = { ... }
```

##### `propertyId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseVariableValue.property.propertyId"></a>

- *Type:* `string`

---

##### `hierarchyId`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseVariableValue.property.hierarchyId"></a>

- *Type:* `string`

---

### IoTSiteWiseVariant <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseVariant"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

const ioTSiteWiseVariant: iotsitewise.IoTSiteWiseVariant = { ... }
```

##### `booleanValue`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseVariant.property.booleanValue"></a>

- *Type:* `boolean`

---

##### `doubleValue`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseVariant.property.doubleValue"></a>

- *Type:* `number`

---

##### `integerValue`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseVariant.property.integerValue"></a>

- *Type:* `number`

---

##### `stringValue`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseVariant.property.stringValue"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### IoTSiteWiseResponsesBatchAssociateProjectAssets <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesBatchAssociateProjectAssets"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesBatchAssociateProjectAssets.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesBatchAssociateProjectAssets(__scope: Construct, __resources: string[], __input: IoTSiteWiseBatchAssociateProjectAssetsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesBatchAssociateProjectAssets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesBatchAssociateProjectAssets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesBatchAssociateProjectAssets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseBatchAssociateProjectAssetsRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseBatchAssociateProjectAssetsRequest)

---



#### Properties <a name="Properties"></a>

##### `errors`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesBatchAssociateProjectAssets.property.errors"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetErrorDetails`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetErrorDetails)[]

---


### IoTSiteWiseResponsesBatchDisassociateProjectAssets <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesBatchDisassociateProjectAssets"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesBatchDisassociateProjectAssets.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesBatchDisassociateProjectAssets(__scope: Construct, __resources: string[], __input: IoTSiteWiseBatchDisassociateProjectAssetsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesBatchDisassociateProjectAssets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesBatchDisassociateProjectAssets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesBatchDisassociateProjectAssets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseBatchDisassociateProjectAssetsRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseBatchDisassociateProjectAssetsRequest)

---



#### Properties <a name="Properties"></a>

##### `errors`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesBatchDisassociateProjectAssets.property.errors"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetErrorDetails`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetErrorDetails)[]

---


### IoTSiteWiseResponsesBatchPutAssetPropertyValue <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesBatchPutAssetPropertyValue"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesBatchPutAssetPropertyValue.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesBatchPutAssetPropertyValue(__scope: Construct, __resources: string[], __input: IoTSiteWiseBatchPutAssetPropertyValueRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesBatchPutAssetPropertyValue.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesBatchPutAssetPropertyValue.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesBatchPutAssetPropertyValue.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseBatchPutAssetPropertyValueRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseBatchPutAssetPropertyValueRequest)

---



#### Properties <a name="Properties"></a>

##### `errorEntries`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesBatchPutAssetPropertyValue.property.errorEntries"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseBatchPutAssetPropertyErrorEntry`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseBatchPutAssetPropertyErrorEntry)[]

---


### IoTSiteWiseResponsesCreateAccessPolicy <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateAccessPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateAccessPolicy.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesCreateAccessPolicy(__scope: Construct, __resources: string[], __input: IoTSiteWiseCreateAccessPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateAccessPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateAccessPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateAccessPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateAccessPolicyRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateAccessPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `accessPolicyArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateAccessPolicy.property.accessPolicyArn"></a>

- *Type:* `string`

---

##### `accessPolicyId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateAccessPolicy.property.accessPolicyId"></a>

- *Type:* `string`

---


### IoTSiteWiseResponsesCreateAsset <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateAsset"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateAsset.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesCreateAsset(__scope: Construct, __resources: string[], __input: IoTSiteWiseCreateAssetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateAsset.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateAsset.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateAsset.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateAssetRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateAssetRequest)

---



#### Properties <a name="Properties"></a>

##### `assetArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateAsset.property.assetArn"></a>

- *Type:* `string`

---

##### `assetId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateAsset.property.assetId"></a>

- *Type:* `string`

---

##### `assetStatus`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateAsset.property.assetStatus"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateAssetAssetStatus`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateAssetAssetStatus)

---


### IoTSiteWiseResponsesCreateAssetAssetStatus <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateAssetAssetStatus"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateAssetAssetStatus.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesCreateAssetAssetStatus(__scope: Construct, __resources: string[], __input: IoTSiteWiseCreateAssetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateAssetAssetStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateAssetAssetStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateAssetAssetStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateAssetRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateAssetRequest)

---



#### Properties <a name="Properties"></a>

##### `error`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateAssetAssetStatus.property.error"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateAssetAssetStatusError`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateAssetAssetStatusError)

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateAssetAssetStatus.property.state"></a>

- *Type:* `string`

---


### IoTSiteWiseResponsesCreateAssetAssetStatusError <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateAssetAssetStatusError"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateAssetAssetStatusError.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesCreateAssetAssetStatusError(__scope: Construct, __resources: string[], __input: IoTSiteWiseCreateAssetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateAssetAssetStatusError.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateAssetAssetStatusError.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateAssetAssetStatusError.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateAssetRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateAssetRequest)

---



#### Properties <a name="Properties"></a>

##### `code`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateAssetAssetStatusError.property.code"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateAssetAssetStatusError.property.message"></a>

- *Type:* `string`

---


### IoTSiteWiseResponsesCreateAssetModel <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateAssetModel"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateAssetModel.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesCreateAssetModel(__scope: Construct, __resources: string[], __input: IoTSiteWiseCreateAssetModelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateAssetModel.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateAssetModel.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateAssetModel.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateAssetModelRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateAssetModelRequest)

---



#### Properties <a name="Properties"></a>

##### `assetModelArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateAssetModel.property.assetModelArn"></a>

- *Type:* `string`

---

##### `assetModelId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateAssetModel.property.assetModelId"></a>

- *Type:* `string`

---

##### `assetModelStatus`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateAssetModel.property.assetModelStatus"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateAssetModelAssetModelStatus`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateAssetModelAssetModelStatus)

---


### IoTSiteWiseResponsesCreateAssetModelAssetModelStatus <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateAssetModelAssetModelStatus"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateAssetModelAssetModelStatus.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesCreateAssetModelAssetModelStatus(__scope: Construct, __resources: string[], __input: IoTSiteWiseCreateAssetModelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateAssetModelAssetModelStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateAssetModelAssetModelStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateAssetModelAssetModelStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateAssetModelRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateAssetModelRequest)

---



#### Properties <a name="Properties"></a>

##### `error`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateAssetModelAssetModelStatus.property.error"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateAssetModelAssetModelStatusError`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateAssetModelAssetModelStatusError)

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateAssetModelAssetModelStatus.property.state"></a>

- *Type:* `string`

---


### IoTSiteWiseResponsesCreateAssetModelAssetModelStatusError <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateAssetModelAssetModelStatusError"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateAssetModelAssetModelStatusError.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesCreateAssetModelAssetModelStatusError(__scope: Construct, __resources: string[], __input: IoTSiteWiseCreateAssetModelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateAssetModelAssetModelStatusError.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateAssetModelAssetModelStatusError.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateAssetModelAssetModelStatusError.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateAssetModelRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateAssetModelRequest)

---



#### Properties <a name="Properties"></a>

##### `code`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateAssetModelAssetModelStatusError.property.code"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateAssetModelAssetModelStatusError.property.message"></a>

- *Type:* `string`

---


### IoTSiteWiseResponsesCreateDashboard <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateDashboard"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateDashboard.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesCreateDashboard(__scope: Construct, __resources: string[], __input: IoTSiteWiseCreateDashboardRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateDashboard.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateDashboard.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateDashboard.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateDashboardRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateDashboardRequest)

---



#### Properties <a name="Properties"></a>

##### `dashboardArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateDashboard.property.dashboardArn"></a>

- *Type:* `string`

---

##### `dashboardId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateDashboard.property.dashboardId"></a>

- *Type:* `string`

---


### IoTSiteWiseResponsesCreateGateway <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateGateway"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateGateway.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesCreateGateway(__scope: Construct, __resources: string[], __input: IoTSiteWiseCreateGatewayRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateGateway.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateGateway.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateGateway.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateGatewayRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateGatewayRequest)

---



#### Properties <a name="Properties"></a>

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateGateway.property.gatewayArn"></a>

- *Type:* `string`

---

##### `gatewayId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateGateway.property.gatewayId"></a>

- *Type:* `string`

---


### IoTSiteWiseResponsesCreatePortal <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreatePortal"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreatePortal.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesCreatePortal(__scope: Construct, __resources: string[], __input: IoTSiteWiseCreatePortalRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreatePortal.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreatePortal.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreatePortal.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseCreatePortalRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseCreatePortalRequest)

---



#### Properties <a name="Properties"></a>

##### `portalArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreatePortal.property.portalArn"></a>

- *Type:* `string`

---

##### `portalId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreatePortal.property.portalId"></a>

- *Type:* `string`

---

##### `portalStartUrl`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreatePortal.property.portalStartUrl"></a>

- *Type:* `string`

---

##### `portalStatus`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreatePortal.property.portalStatus"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreatePortalPortalStatus`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreatePortalPortalStatus)

---

##### `ssoApplicationId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreatePortal.property.ssoApplicationId"></a>

- *Type:* `string`

---


### IoTSiteWiseResponsesCreatePortalPortalStatus <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreatePortalPortalStatus"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreatePortalPortalStatus.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesCreatePortalPortalStatus(__scope: Construct, __resources: string[], __input: IoTSiteWiseCreatePortalRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreatePortalPortalStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreatePortalPortalStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreatePortalPortalStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseCreatePortalRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseCreatePortalRequest)

---



#### Properties <a name="Properties"></a>

##### `error`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreatePortalPortalStatus.property.error"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreatePortalPortalStatusError`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreatePortalPortalStatusError)

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreatePortalPortalStatus.property.state"></a>

- *Type:* `string`

---


### IoTSiteWiseResponsesCreatePortalPortalStatusError <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreatePortalPortalStatusError"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreatePortalPortalStatusError.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesCreatePortalPortalStatusError(__scope: Construct, __resources: string[], __input: IoTSiteWiseCreatePortalRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreatePortalPortalStatusError.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreatePortalPortalStatusError.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreatePortalPortalStatusError.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseCreatePortalRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseCreatePortalRequest)

---



#### Properties <a name="Properties"></a>

##### `code`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreatePortalPortalStatusError.property.code"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreatePortalPortalStatusError.property.message"></a>

- *Type:* `string`

---


### IoTSiteWiseResponsesCreatePresignedPortalUrl <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreatePresignedPortalUrl"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreatePresignedPortalUrl.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesCreatePresignedPortalUrl(__scope: Construct, __resources: string[], __input: IoTSiteWiseCreatePresignedPortalUrlRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreatePresignedPortalUrl.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreatePresignedPortalUrl.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreatePresignedPortalUrl.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseCreatePresignedPortalUrlRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseCreatePresignedPortalUrlRequest)

---



#### Properties <a name="Properties"></a>

##### `presignedPortalUrl`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreatePresignedPortalUrl.property.presignedPortalUrl"></a>

- *Type:* `string`

---


### IoTSiteWiseResponsesCreateProject <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateProject"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateProject.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesCreateProject(__scope: Construct, __resources: string[], __input: IoTSiteWiseCreateProjectRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateProject.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateProject.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateProject.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateProjectRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseCreateProjectRequest)

---



#### Properties <a name="Properties"></a>

##### `projectArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateProject.property.projectArn"></a>

- *Type:* `string`

---

##### `projectId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesCreateProject.property.projectId"></a>

- *Type:* `string`

---


### IoTSiteWiseResponsesDeleteAsset <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeleteAsset"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeleteAsset.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesDeleteAsset(__scope: Construct, __resources: string[], __input: IoTSiteWiseDeleteAssetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeleteAsset.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeleteAsset.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeleteAsset.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseDeleteAssetRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseDeleteAssetRequest)

---



#### Properties <a name="Properties"></a>

##### `assetStatus`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeleteAsset.property.assetStatus"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeleteAssetAssetStatus`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeleteAssetAssetStatus)

---


### IoTSiteWiseResponsesDeleteAssetAssetStatus <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeleteAssetAssetStatus"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeleteAssetAssetStatus.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesDeleteAssetAssetStatus(__scope: Construct, __resources: string[], __input: IoTSiteWiseDeleteAssetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeleteAssetAssetStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeleteAssetAssetStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeleteAssetAssetStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseDeleteAssetRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseDeleteAssetRequest)

---



#### Properties <a name="Properties"></a>

##### `error`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeleteAssetAssetStatus.property.error"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeleteAssetAssetStatusError`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeleteAssetAssetStatusError)

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeleteAssetAssetStatus.property.state"></a>

- *Type:* `string`

---


### IoTSiteWiseResponsesDeleteAssetAssetStatusError <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeleteAssetAssetStatusError"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeleteAssetAssetStatusError.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesDeleteAssetAssetStatusError(__scope: Construct, __resources: string[], __input: IoTSiteWiseDeleteAssetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeleteAssetAssetStatusError.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeleteAssetAssetStatusError.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeleteAssetAssetStatusError.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseDeleteAssetRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseDeleteAssetRequest)

---



#### Properties <a name="Properties"></a>

##### `code`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeleteAssetAssetStatusError.property.code"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeleteAssetAssetStatusError.property.message"></a>

- *Type:* `string`

---


### IoTSiteWiseResponsesDeleteAssetModel <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeleteAssetModel"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeleteAssetModel.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesDeleteAssetModel(__scope: Construct, __resources: string[], __input: IoTSiteWiseDeleteAssetModelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeleteAssetModel.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeleteAssetModel.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeleteAssetModel.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseDeleteAssetModelRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseDeleteAssetModelRequest)

---



#### Properties <a name="Properties"></a>

##### `assetModelStatus`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeleteAssetModel.property.assetModelStatus"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeleteAssetModelAssetModelStatus`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeleteAssetModelAssetModelStatus)

---


### IoTSiteWiseResponsesDeleteAssetModelAssetModelStatus <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeleteAssetModelAssetModelStatus"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeleteAssetModelAssetModelStatus.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesDeleteAssetModelAssetModelStatus(__scope: Construct, __resources: string[], __input: IoTSiteWiseDeleteAssetModelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeleteAssetModelAssetModelStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeleteAssetModelAssetModelStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeleteAssetModelAssetModelStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseDeleteAssetModelRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseDeleteAssetModelRequest)

---



#### Properties <a name="Properties"></a>

##### `error`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeleteAssetModelAssetModelStatus.property.error"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeleteAssetModelAssetModelStatusError`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeleteAssetModelAssetModelStatusError)

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeleteAssetModelAssetModelStatus.property.state"></a>

- *Type:* `string`

---


### IoTSiteWiseResponsesDeleteAssetModelAssetModelStatusError <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeleteAssetModelAssetModelStatusError"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeleteAssetModelAssetModelStatusError.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesDeleteAssetModelAssetModelStatusError(__scope: Construct, __resources: string[], __input: IoTSiteWiseDeleteAssetModelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeleteAssetModelAssetModelStatusError.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeleteAssetModelAssetModelStatusError.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeleteAssetModelAssetModelStatusError.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseDeleteAssetModelRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseDeleteAssetModelRequest)

---



#### Properties <a name="Properties"></a>

##### `code`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeleteAssetModelAssetModelStatusError.property.code"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeleteAssetModelAssetModelStatusError.property.message"></a>

- *Type:* `string`

---


### IoTSiteWiseResponsesDeletePortal <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeletePortal"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeletePortal.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesDeletePortal(__scope: Construct, __resources: string[], __input: IoTSiteWiseDeletePortalRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeletePortal.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeletePortal.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeletePortal.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseDeletePortalRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseDeletePortalRequest)

---



#### Properties <a name="Properties"></a>

##### `portalStatus`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeletePortal.property.portalStatus"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeletePortalPortalStatus`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeletePortalPortalStatus)

---


### IoTSiteWiseResponsesDeletePortalPortalStatus <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeletePortalPortalStatus"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeletePortalPortalStatus.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesDeletePortalPortalStatus(__scope: Construct, __resources: string[], __input: IoTSiteWiseDeletePortalRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeletePortalPortalStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeletePortalPortalStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeletePortalPortalStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseDeletePortalRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseDeletePortalRequest)

---



#### Properties <a name="Properties"></a>

##### `error`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeletePortalPortalStatus.property.error"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeletePortalPortalStatusError`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeletePortalPortalStatusError)

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeletePortalPortalStatus.property.state"></a>

- *Type:* `string`

---


### IoTSiteWiseResponsesDeletePortalPortalStatusError <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeletePortalPortalStatusError"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeletePortalPortalStatusError.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesDeletePortalPortalStatusError(__scope: Construct, __resources: string[], __input: IoTSiteWiseDeletePortalRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeletePortalPortalStatusError.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeletePortalPortalStatusError.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeletePortalPortalStatusError.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseDeletePortalRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseDeletePortalRequest)

---



#### Properties <a name="Properties"></a>

##### `code`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeletePortalPortalStatusError.property.code"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDeletePortalPortalStatusError.property.message"></a>

- *Type:* `string`

---


### IoTSiteWiseResponsesDescribeAccessPolicy <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicy.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicy(__scope: Construct, __resources: string[], __input: IoTSiteWiseDescribeAccessPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAccessPolicyRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAccessPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `accessPolicyArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicy.property.accessPolicyArn"></a>

- *Type:* `string`

---

##### `accessPolicyCreationDate`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicy.property.accessPolicyCreationDate"></a>

- *Type:* `string`

---

##### `accessPolicyId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicy.property.accessPolicyId"></a>

- *Type:* `string`

---

##### `accessPolicyIdentity`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicy.property.accessPolicyIdentity"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyIdentity`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyIdentity)

---

##### `accessPolicyLastUpdateDate`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicy.property.accessPolicyLastUpdateDate"></a>

- *Type:* `string`

---

##### `accessPolicyPermission`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicy.property.accessPolicyPermission"></a>

- *Type:* `string`

---

##### `accessPolicyResource`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicy.property.accessPolicyResource"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyResource`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyResource)

---


### IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyIdentity <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyIdentity"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyIdentity.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyIdentity(__scope: Construct, __resources: string[], __input: IoTSiteWiseDescribeAccessPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyIdentity.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyIdentity.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyIdentity.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAccessPolicyRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAccessPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `group`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyIdentity.property.group"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyIdentityGroup`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyIdentityGroup)

---

##### `iamUser`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyIdentity.property.iamUser"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyIdentityIamUser`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyIdentityIamUser)

---

##### `user`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyIdentity.property.user"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyIdentityUser`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyIdentityUser)

---


### IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyIdentityGroup <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyIdentityGroup"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyIdentityGroup.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyIdentityGroup(__scope: Construct, __resources: string[], __input: IoTSiteWiseDescribeAccessPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyIdentityGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyIdentityGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyIdentityGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAccessPolicyRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAccessPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyIdentityGroup.property.id"></a>

- *Type:* `string`

---


### IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyIdentityIamUser <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyIdentityIamUser"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyIdentityIamUser.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyIdentityIamUser(__scope: Construct, __resources: string[], __input: IoTSiteWiseDescribeAccessPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyIdentityIamUser.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyIdentityIamUser.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyIdentityIamUser.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAccessPolicyRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAccessPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyIdentityIamUser.property.arn"></a>

- *Type:* `string`

---


### IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyIdentityUser <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyIdentityUser"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyIdentityUser.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyIdentityUser(__scope: Construct, __resources: string[], __input: IoTSiteWiseDescribeAccessPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyIdentityUser.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyIdentityUser.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyIdentityUser.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAccessPolicyRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAccessPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyIdentityUser.property.id"></a>

- *Type:* `string`

---


### IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyResource <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyResource"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyResource.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyResource(__scope: Construct, __resources: string[], __input: IoTSiteWiseDescribeAccessPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAccessPolicyRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAccessPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `portal`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyResource.property.portal"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyResourcePortal`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyResourcePortal)

---

##### `project`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyResource.property.project"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyResourceProject`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyResourceProject)

---


### IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyResourcePortal <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyResourcePortal"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyResourcePortal.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyResourcePortal(__scope: Construct, __resources: string[], __input: IoTSiteWiseDescribeAccessPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyResourcePortal.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyResourcePortal.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyResourcePortal.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAccessPolicyRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAccessPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyResourcePortal.property.id"></a>

- *Type:* `string`

---


### IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyResourceProject <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyResourceProject"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyResourceProject.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyResourceProject(__scope: Construct, __resources: string[], __input: IoTSiteWiseDescribeAccessPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyResourceProject.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyResourceProject.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyResourceProject.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAccessPolicyRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAccessPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAccessPolicyAccessPolicyResourceProject.property.id"></a>

- *Type:* `string`

---


### IoTSiteWiseResponsesDescribeAsset <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAsset"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAsset.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesDescribeAsset(__scope: Construct, __resources: string[], __input: IoTSiteWiseDescribeAssetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAsset.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAsset.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAsset.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetRequest)

---



#### Properties <a name="Properties"></a>

##### `assetArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAsset.property.assetArn"></a>

- *Type:* `string`

---

##### `assetCreationDate`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAsset.property.assetCreationDate"></a>

- *Type:* `string`

---

##### `assetHierarchies`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAsset.property.assetHierarchies"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetHierarchy`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetHierarchy)[]

---

##### `assetId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAsset.property.assetId"></a>

- *Type:* `string`

---

##### `assetLastUpdateDate`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAsset.property.assetLastUpdateDate"></a>

- *Type:* `string`

---

##### `assetModelId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAsset.property.assetModelId"></a>

- *Type:* `string`

---

##### `assetName`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAsset.property.assetName"></a>

- *Type:* `string`

---

##### `assetProperties`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAsset.property.assetProperties"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetProperty`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetProperty)[]

---

##### `assetStatus`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAsset.property.assetStatus"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetAssetStatus`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetAssetStatus)

---


### IoTSiteWiseResponsesDescribeAssetAssetStatus <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetAssetStatus"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetAssetStatus.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesDescribeAssetAssetStatus(__scope: Construct, __resources: string[], __input: IoTSiteWiseDescribeAssetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetAssetStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetAssetStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetAssetStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetRequest)

---



#### Properties <a name="Properties"></a>

##### `error`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetAssetStatus.property.error"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetAssetStatusError`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetAssetStatusError)

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetAssetStatus.property.state"></a>

- *Type:* `string`

---


### IoTSiteWiseResponsesDescribeAssetAssetStatusError <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetAssetStatusError"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetAssetStatusError.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesDescribeAssetAssetStatusError(__scope: Construct, __resources: string[], __input: IoTSiteWiseDescribeAssetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetAssetStatusError.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetAssetStatusError.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetAssetStatusError.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetRequest)

---



#### Properties <a name="Properties"></a>

##### `code`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetAssetStatusError.property.code"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetAssetStatusError.property.message"></a>

- *Type:* `string`

---


### IoTSiteWiseResponsesDescribeAssetModel <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetModel"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetModel.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesDescribeAssetModel(__scope: Construct, __resources: string[], __input: IoTSiteWiseDescribeAssetModelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetModel.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetModel.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetModel.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetModelRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetModelRequest)

---



#### Properties <a name="Properties"></a>

##### `assetModelArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetModel.property.assetModelArn"></a>

- *Type:* `string`

---

##### `assetModelCreationDate`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetModel.property.assetModelCreationDate"></a>

- *Type:* `string`

---

##### `assetModelDescription`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetModel.property.assetModelDescription"></a>

- *Type:* `string`

---

##### `assetModelHierarchies`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetModel.property.assetModelHierarchies"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetModelHierarchy`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetModelHierarchy)[]

---

##### `assetModelId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetModel.property.assetModelId"></a>

- *Type:* `string`

---

##### `assetModelLastUpdateDate`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetModel.property.assetModelLastUpdateDate"></a>

- *Type:* `string`

---

##### `assetModelName`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetModel.property.assetModelName"></a>

- *Type:* `string`

---

##### `assetModelProperties`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetModel.property.assetModelProperties"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetModelProperty`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetModelProperty)[]

---

##### `assetModelStatus`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetModel.property.assetModelStatus"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetModelAssetModelStatus`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetModelAssetModelStatus)

---


### IoTSiteWiseResponsesDescribeAssetModelAssetModelStatus <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetModelAssetModelStatus"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetModelAssetModelStatus.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesDescribeAssetModelAssetModelStatus(__scope: Construct, __resources: string[], __input: IoTSiteWiseDescribeAssetModelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetModelAssetModelStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetModelAssetModelStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetModelAssetModelStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetModelRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetModelRequest)

---



#### Properties <a name="Properties"></a>

##### `error`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetModelAssetModelStatus.property.error"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetModelAssetModelStatusError`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetModelAssetModelStatusError)

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetModelAssetModelStatus.property.state"></a>

- *Type:* `string`

---


### IoTSiteWiseResponsesDescribeAssetModelAssetModelStatusError <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetModelAssetModelStatusError"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetModelAssetModelStatusError.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesDescribeAssetModelAssetModelStatusError(__scope: Construct, __resources: string[], __input: IoTSiteWiseDescribeAssetModelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetModelAssetModelStatusError.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetModelAssetModelStatusError.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetModelAssetModelStatusError.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetModelRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetModelRequest)

---



#### Properties <a name="Properties"></a>

##### `code`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetModelAssetModelStatusError.property.code"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetModelAssetModelStatusError.property.message"></a>

- *Type:* `string`

---


### IoTSiteWiseResponsesDescribeAssetProperty <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetProperty"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetProperty.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesDescribeAssetProperty(__scope: Construct, __resources: string[], __input: IoTSiteWiseDescribeAssetPropertyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetProperty.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetProperty.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetProperty.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetPropertyRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetPropertyRequest)

---



#### Properties <a name="Properties"></a>

##### `assetId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetProperty.property.assetId"></a>

- *Type:* `string`

---

##### `assetModelId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetProperty.property.assetModelId"></a>

- *Type:* `string`

---

##### `assetName`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetProperty.property.assetName"></a>

- *Type:* `string`

---

##### `assetProperty`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetProperty.property.assetProperty"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetProperty`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetProperty)

---


### IoTSiteWiseResponsesDescribeAssetPropertyAssetProperty <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetProperty"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetProperty.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetProperty(__scope: Construct, __resources: string[], __input: IoTSiteWiseDescribeAssetPropertyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetProperty.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetProperty.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetProperty.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetPropertyRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetPropertyRequest)

---



#### Properties <a name="Properties"></a>

##### `alias`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetProperty.property.alias"></a>

- *Type:* `string`

---

##### `dataType`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetProperty.property.dataType"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetProperty.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetProperty.property.name"></a>

- *Type:* `string`

---

##### `notification`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetProperty.property.notification"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyNotification`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyNotification)

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetProperty.property.type"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyType`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyType)

---

##### `unit`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetProperty.property.unit"></a>

- *Type:* `string`

---


### IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyNotification <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyNotification"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyNotification.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyNotification(__scope: Construct, __resources: string[], __input: IoTSiteWiseDescribeAssetPropertyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyNotification.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyNotification.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyNotification.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetPropertyRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetPropertyRequest)

---



#### Properties <a name="Properties"></a>

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyNotification.property.state"></a>

- *Type:* `string`

---

##### `topic`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyNotification.property.topic"></a>

- *Type:* `string`

---


### IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyType <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyType"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyType.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyType(__scope: Construct, __resources: string[], __input: IoTSiteWiseDescribeAssetPropertyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyType.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyType.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyType.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetPropertyRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetPropertyRequest)

---



#### Properties <a name="Properties"></a>

##### `attribute`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyType.property.attribute"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeAttribute`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeAttribute)

---

##### `measurement`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyType.property.measurement"></a>

- *Type:* `any`

---

##### `metric`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyType.property.metric"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeMetric`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeMetric)

---

##### `transform`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyType.property.transform"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeTransform`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeTransform)

---


### IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeAttribute <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeAttribute"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeAttribute.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeAttribute(__scope: Construct, __resources: string[], __input: IoTSiteWiseDescribeAssetPropertyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeAttribute.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeAttribute.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeAttribute.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetPropertyRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetPropertyRequest)

---



#### Properties <a name="Properties"></a>

##### `defaultValue`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeAttribute.property.defaultValue"></a>

- *Type:* `string`

---


### IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeMetric <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeMetric"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeMetric.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeMetric(__scope: Construct, __resources: string[], __input: IoTSiteWiseDescribeAssetPropertyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeMetric.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeMetric.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeMetric.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetPropertyRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetPropertyRequest)

---



#### Properties <a name="Properties"></a>

##### `expression`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeMetric.property.expression"></a>

- *Type:* `string`

---

##### `variables`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeMetric.property.variables"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseExpressionVariable`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseExpressionVariable)[]

---

##### `window`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeMetric.property.window"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeMetricWindow`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeMetricWindow)

---


### IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeMetricWindow <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeMetricWindow"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeMetricWindow.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeMetricWindow(__scope: Construct, __resources: string[], __input: IoTSiteWiseDescribeAssetPropertyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeMetricWindow.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeMetricWindow.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeMetricWindow.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetPropertyRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetPropertyRequest)

---



#### Properties <a name="Properties"></a>

##### `tumbling`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeMetricWindow.property.tumbling"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeMetricWindowTumbling`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeMetricWindowTumbling)

---


### IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeMetricWindowTumbling <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeMetricWindowTumbling"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeMetricWindowTumbling.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeMetricWindowTumbling(__scope: Construct, __resources: string[], __input: IoTSiteWiseDescribeAssetPropertyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeMetricWindowTumbling.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeMetricWindowTumbling.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeMetricWindowTumbling.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetPropertyRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetPropertyRequest)

---



#### Properties <a name="Properties"></a>

##### `interval`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeMetricWindowTumbling.property.interval"></a>

- *Type:* `string`

---


### IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeTransform <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeTransform"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeTransform.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeTransform(__scope: Construct, __resources: string[], __input: IoTSiteWiseDescribeAssetPropertyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeTransform.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeTransform.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeTransform.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetPropertyRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeAssetPropertyRequest)

---



#### Properties <a name="Properties"></a>

##### `expression`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeTransform.property.expression"></a>

- *Type:* `string`

---

##### `variables`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeAssetPropertyAssetPropertyTypeTransform.property.variables"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseExpressionVariable`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseExpressionVariable)[]

---


### IoTSiteWiseResponsesDescribeDashboard <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeDashboard"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeDashboard.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesDescribeDashboard(__scope: Construct, __resources: string[], __input: IoTSiteWiseDescribeDashboardRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeDashboard.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeDashboard.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeDashboard.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeDashboardRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeDashboardRequest)

---



#### Properties <a name="Properties"></a>

##### `dashboardArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeDashboard.property.dashboardArn"></a>

- *Type:* `string`

---

##### `dashboardCreationDate`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeDashboard.property.dashboardCreationDate"></a>

- *Type:* `string`

---

##### `dashboardDefinition`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeDashboard.property.dashboardDefinition"></a>

- *Type:* `string`

---

##### `dashboardDescription`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeDashboard.property.dashboardDescription"></a>

- *Type:* `string`

---

##### `dashboardId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeDashboard.property.dashboardId"></a>

- *Type:* `string`

---

##### `dashboardLastUpdateDate`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeDashboard.property.dashboardLastUpdateDate"></a>

- *Type:* `string`

---

##### `dashboardName`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeDashboard.property.dashboardName"></a>

- *Type:* `string`

---

##### `projectId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeDashboard.property.projectId"></a>

- *Type:* `string`

---


### IoTSiteWiseResponsesDescribeDefaultEncryptionConfiguration <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeDefaultEncryptionConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeDefaultEncryptionConfiguration.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesDescribeDefaultEncryptionConfiguration(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeDefaultEncryptionConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeDefaultEncryptionConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `configurationStatus`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeDefaultEncryptionConfiguration.property.configurationStatus"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeDefaultEncryptionConfigurationConfigurationStatus`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeDefaultEncryptionConfigurationConfigurationStatus)

---

##### `encryptionType`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeDefaultEncryptionConfiguration.property.encryptionType"></a>

- *Type:* `string`

---

##### `kmsKeyArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeDefaultEncryptionConfiguration.property.kmsKeyArn"></a>

- *Type:* `string`

---


### IoTSiteWiseResponsesDescribeDefaultEncryptionConfigurationConfigurationStatus <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeDefaultEncryptionConfigurationConfigurationStatus"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeDefaultEncryptionConfigurationConfigurationStatus.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesDescribeDefaultEncryptionConfigurationConfigurationStatus(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeDefaultEncryptionConfigurationConfigurationStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeDefaultEncryptionConfigurationConfigurationStatus.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `error`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeDefaultEncryptionConfigurationConfigurationStatus.property.error"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeDefaultEncryptionConfigurationConfigurationStatusError`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeDefaultEncryptionConfigurationConfigurationStatusError)

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeDefaultEncryptionConfigurationConfigurationStatus.property.state"></a>

- *Type:* `string`

---


### IoTSiteWiseResponsesDescribeDefaultEncryptionConfigurationConfigurationStatusError <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeDefaultEncryptionConfigurationConfigurationStatusError"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeDefaultEncryptionConfigurationConfigurationStatusError.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesDescribeDefaultEncryptionConfigurationConfigurationStatusError(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeDefaultEncryptionConfigurationConfigurationStatusError.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeDefaultEncryptionConfigurationConfigurationStatusError.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `code`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeDefaultEncryptionConfigurationConfigurationStatusError.property.code"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeDefaultEncryptionConfigurationConfigurationStatusError.property.message"></a>

- *Type:* `string`

---


### IoTSiteWiseResponsesDescribeGateway <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeGateway"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeGateway.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesDescribeGateway(__scope: Construct, __resources: string[], __input: IoTSiteWiseDescribeGatewayRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeGateway.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeGateway.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeGateway.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeGatewayRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeGatewayRequest)

---



#### Properties <a name="Properties"></a>

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeGateway.property.creationDate"></a>

- *Type:* `string`

---

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeGateway.property.gatewayArn"></a>

- *Type:* `string`

---

##### `gatewayCapabilitySummaries`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeGateway.property.gatewayCapabilitySummaries"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseGatewayCapabilitySummary`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseGatewayCapabilitySummary)[]

---

##### `gatewayId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeGateway.property.gatewayId"></a>

- *Type:* `string`

---

##### `gatewayName`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeGateway.property.gatewayName"></a>

- *Type:* `string`

---

##### `gatewayPlatform`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeGateway.property.gatewayPlatform"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeGatewayGatewayPlatform`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeGatewayGatewayPlatform)

---

##### `lastUpdateDate`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeGateway.property.lastUpdateDate"></a>

- *Type:* `string`

---


### IoTSiteWiseResponsesDescribeGatewayCapabilityConfiguration <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeGatewayCapabilityConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeGatewayCapabilityConfiguration.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesDescribeGatewayCapabilityConfiguration(__scope: Construct, __resources: string[], __input: IoTSiteWiseDescribeGatewayCapabilityConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeGatewayCapabilityConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeGatewayCapabilityConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeGatewayCapabilityConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeGatewayCapabilityConfigurationRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeGatewayCapabilityConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `capabilityConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeGatewayCapabilityConfiguration.property.capabilityConfiguration"></a>

- *Type:* `string`

---

##### `capabilityNamespace`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeGatewayCapabilityConfiguration.property.capabilityNamespace"></a>

- *Type:* `string`

---

##### `capabilitySyncStatus`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeGatewayCapabilityConfiguration.property.capabilitySyncStatus"></a>

- *Type:* `string`

---

##### `gatewayId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeGatewayCapabilityConfiguration.property.gatewayId"></a>

- *Type:* `string`

---


### IoTSiteWiseResponsesDescribeGatewayGatewayPlatform <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeGatewayGatewayPlatform"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeGatewayGatewayPlatform.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesDescribeGatewayGatewayPlatform(__scope: Construct, __resources: string[], __input: IoTSiteWiseDescribeGatewayRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeGatewayGatewayPlatform.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeGatewayGatewayPlatform.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeGatewayGatewayPlatform.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeGatewayRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeGatewayRequest)

---



#### Properties <a name="Properties"></a>

##### `greengrass`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeGatewayGatewayPlatform.property.greengrass"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeGatewayGatewayPlatformGreengrass`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeGatewayGatewayPlatformGreengrass)

---


### IoTSiteWiseResponsesDescribeGatewayGatewayPlatformGreengrass <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeGatewayGatewayPlatformGreengrass"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeGatewayGatewayPlatformGreengrass.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesDescribeGatewayGatewayPlatformGreengrass(__scope: Construct, __resources: string[], __input: IoTSiteWiseDescribeGatewayRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeGatewayGatewayPlatformGreengrass.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeGatewayGatewayPlatformGreengrass.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeGatewayGatewayPlatformGreengrass.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeGatewayRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeGatewayRequest)

---



#### Properties <a name="Properties"></a>

##### `groupArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeGatewayGatewayPlatformGreengrass.property.groupArn"></a>

- *Type:* `string`

---


### IoTSiteWiseResponsesDescribeLoggingOptions <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeLoggingOptions"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeLoggingOptions.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesDescribeLoggingOptions(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeLoggingOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeLoggingOptions.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `loggingOptions`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeLoggingOptions.property.loggingOptions"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeLoggingOptionsLoggingOptions`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeLoggingOptionsLoggingOptions)

---


### IoTSiteWiseResponsesDescribeLoggingOptionsLoggingOptions <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeLoggingOptionsLoggingOptions"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeLoggingOptionsLoggingOptions.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesDescribeLoggingOptionsLoggingOptions(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeLoggingOptionsLoggingOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeLoggingOptionsLoggingOptions.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `level`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeLoggingOptionsLoggingOptions.property.level"></a>

- *Type:* `string`

---


### IoTSiteWiseResponsesDescribePortal <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribePortal"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribePortal.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesDescribePortal(__scope: Construct, __resources: string[], __input: IoTSiteWiseDescribePortalRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribePortal.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribePortal.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribePortal.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribePortalRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribePortalRequest)

---



#### Properties <a name="Properties"></a>

##### `portalArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribePortal.property.portalArn"></a>

- *Type:* `string`

---

##### `portalAuthMode`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribePortal.property.portalAuthMode"></a>

- *Type:* `string`

---

##### `portalClientId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribePortal.property.portalClientId"></a>

- *Type:* `string`

---

##### `portalContactEmail`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribePortal.property.portalContactEmail"></a>

- *Type:* `string`

---

##### `portalCreationDate`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribePortal.property.portalCreationDate"></a>

- *Type:* `string`

---

##### `portalDescription`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribePortal.property.portalDescription"></a>

- *Type:* `string`

---

##### `portalId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribePortal.property.portalId"></a>

- *Type:* `string`

---

##### `portalLastUpdateDate`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribePortal.property.portalLastUpdateDate"></a>

- *Type:* `string`

---

##### `portalLogoImageLocation`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribePortal.property.portalLogoImageLocation"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribePortalPortalLogoImageLocation`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribePortalPortalLogoImageLocation)

---

##### `portalName`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribePortal.property.portalName"></a>

- *Type:* `string`

---

##### `portalStartUrl`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribePortal.property.portalStartUrl"></a>

- *Type:* `string`

---

##### `portalStatus`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribePortal.property.portalStatus"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribePortalPortalStatus`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribePortalPortalStatus)

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribePortal.property.roleArn"></a>

- *Type:* `string`

---


### IoTSiteWiseResponsesDescribePortalPortalLogoImageLocation <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribePortalPortalLogoImageLocation"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribePortalPortalLogoImageLocation.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesDescribePortalPortalLogoImageLocation(__scope: Construct, __resources: string[], __input: IoTSiteWiseDescribePortalRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribePortalPortalLogoImageLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribePortalPortalLogoImageLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribePortalPortalLogoImageLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribePortalRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribePortalRequest)

---



#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribePortalPortalLogoImageLocation.property.id"></a>

- *Type:* `string`

---

##### `url`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribePortalPortalLogoImageLocation.property.url"></a>

- *Type:* `string`

---


### IoTSiteWiseResponsesDescribePortalPortalStatus <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribePortalPortalStatus"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribePortalPortalStatus.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesDescribePortalPortalStatus(__scope: Construct, __resources: string[], __input: IoTSiteWiseDescribePortalRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribePortalPortalStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribePortalPortalStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribePortalPortalStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribePortalRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribePortalRequest)

---



#### Properties <a name="Properties"></a>

##### `error`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribePortalPortalStatus.property.error"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribePortalPortalStatusError`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribePortalPortalStatusError)

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribePortalPortalStatus.property.state"></a>

- *Type:* `string`

---


### IoTSiteWiseResponsesDescribePortalPortalStatusError <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribePortalPortalStatusError"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribePortalPortalStatusError.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesDescribePortalPortalStatusError(__scope: Construct, __resources: string[], __input: IoTSiteWiseDescribePortalRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribePortalPortalStatusError.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribePortalPortalStatusError.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribePortalPortalStatusError.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribePortalRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribePortalRequest)

---



#### Properties <a name="Properties"></a>

##### `code`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribePortalPortalStatusError.property.code"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribePortalPortalStatusError.property.message"></a>

- *Type:* `string`

---


### IoTSiteWiseResponsesDescribeProject <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeProject"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeProject.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesDescribeProject(__scope: Construct, __resources: string[], __input: IoTSiteWiseDescribeProjectRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeProject.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeProject.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeProject.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeProjectRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseDescribeProjectRequest)

---



#### Properties <a name="Properties"></a>

##### `portalId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeProject.property.portalId"></a>

- *Type:* `string`

---

##### `projectArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeProject.property.projectArn"></a>

- *Type:* `string`

---

##### `projectCreationDate`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeProject.property.projectCreationDate"></a>

- *Type:* `string`

---

##### `projectDescription`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeProject.property.projectDescription"></a>

- *Type:* `string`

---

##### `projectId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeProject.property.projectId"></a>

- *Type:* `string`

---

##### `projectLastUpdateDate`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeProject.property.projectLastUpdateDate"></a>

- *Type:* `string`

---

##### `projectName`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesDescribeProject.property.projectName"></a>

- *Type:* `string`

---


### IoTSiteWiseResponsesFetchAssetPropertyAggregates <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesFetchAssetPropertyAggregates"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesFetchAssetPropertyAggregates.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesFetchAssetPropertyAggregates(__scope: Construct, __resources: string[], __input: IoTSiteWiseGetAssetPropertyAggregatesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesFetchAssetPropertyAggregates.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesFetchAssetPropertyAggregates.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesFetchAssetPropertyAggregates.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseGetAssetPropertyAggregatesRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseGetAssetPropertyAggregatesRequest)

---



#### Properties <a name="Properties"></a>

##### `aggregatedValues`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesFetchAssetPropertyAggregates.property.aggregatedValues"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseAggregatedValue`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseAggregatedValue)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesFetchAssetPropertyAggregates.property.nextToken"></a>

- *Type:* `string`

---


### IoTSiteWiseResponsesFetchAssetPropertyValue <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesFetchAssetPropertyValue"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesFetchAssetPropertyValue.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesFetchAssetPropertyValue(__scope: Construct, __resources: string[], __input: IoTSiteWiseGetAssetPropertyValueRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesFetchAssetPropertyValue.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesFetchAssetPropertyValue.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesFetchAssetPropertyValue.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseGetAssetPropertyValueRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseGetAssetPropertyValueRequest)

---



#### Properties <a name="Properties"></a>

##### `propertyValue`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesFetchAssetPropertyValue.property.propertyValue"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesFetchAssetPropertyValuePropertyValue`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesFetchAssetPropertyValuePropertyValue)

---


### IoTSiteWiseResponsesFetchAssetPropertyValueHistory <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesFetchAssetPropertyValueHistory"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesFetchAssetPropertyValueHistory.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesFetchAssetPropertyValueHistory(__scope: Construct, __resources: string[], __input: IoTSiteWiseGetAssetPropertyValueHistoryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesFetchAssetPropertyValueHistory.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesFetchAssetPropertyValueHistory.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesFetchAssetPropertyValueHistory.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseGetAssetPropertyValueHistoryRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseGetAssetPropertyValueHistoryRequest)

---



#### Properties <a name="Properties"></a>

##### `assetPropertyValueHistory`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesFetchAssetPropertyValueHistory.property.assetPropertyValueHistory"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetPropertyValue`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetPropertyValue)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesFetchAssetPropertyValueHistory.property.nextToken"></a>

- *Type:* `string`

---


### IoTSiteWiseResponsesFetchAssetPropertyValuePropertyValue <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesFetchAssetPropertyValuePropertyValue"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesFetchAssetPropertyValuePropertyValue.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesFetchAssetPropertyValuePropertyValue(__scope: Construct, __resources: string[], __input: IoTSiteWiseGetAssetPropertyValueRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesFetchAssetPropertyValuePropertyValue.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesFetchAssetPropertyValuePropertyValue.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesFetchAssetPropertyValuePropertyValue.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseGetAssetPropertyValueRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseGetAssetPropertyValueRequest)

---



#### Properties <a name="Properties"></a>

##### `quality`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesFetchAssetPropertyValuePropertyValue.property.quality"></a>

- *Type:* `string`

---

##### `timestamp`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesFetchAssetPropertyValuePropertyValue.property.timestamp"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesFetchAssetPropertyValuePropertyValueTimestamp`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesFetchAssetPropertyValuePropertyValueTimestamp)

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesFetchAssetPropertyValuePropertyValue.property.value"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesFetchAssetPropertyValuePropertyValueValue`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesFetchAssetPropertyValuePropertyValueValue)

---


### IoTSiteWiseResponsesFetchAssetPropertyValuePropertyValueTimestamp <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesFetchAssetPropertyValuePropertyValueTimestamp"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesFetchAssetPropertyValuePropertyValueTimestamp.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesFetchAssetPropertyValuePropertyValueTimestamp(__scope: Construct, __resources: string[], __input: IoTSiteWiseGetAssetPropertyValueRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesFetchAssetPropertyValuePropertyValueTimestamp.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesFetchAssetPropertyValuePropertyValueTimestamp.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesFetchAssetPropertyValuePropertyValueTimestamp.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseGetAssetPropertyValueRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseGetAssetPropertyValueRequest)

---



#### Properties <a name="Properties"></a>

##### `offsetInNanos`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesFetchAssetPropertyValuePropertyValueTimestamp.property.offsetInNanos"></a>

- *Type:* `number`

---

##### `timeInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesFetchAssetPropertyValuePropertyValueTimestamp.property.timeInSeconds"></a>

- *Type:* `number`

---


### IoTSiteWiseResponsesFetchAssetPropertyValuePropertyValueValue <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesFetchAssetPropertyValuePropertyValueValue"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesFetchAssetPropertyValuePropertyValueValue.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesFetchAssetPropertyValuePropertyValueValue(__scope: Construct, __resources: string[], __input: IoTSiteWiseGetAssetPropertyValueRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesFetchAssetPropertyValuePropertyValueValue.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesFetchAssetPropertyValuePropertyValueValue.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesFetchAssetPropertyValuePropertyValueValue.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseGetAssetPropertyValueRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseGetAssetPropertyValueRequest)

---



#### Properties <a name="Properties"></a>

##### `booleanValue`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesFetchAssetPropertyValuePropertyValueValue.property.booleanValue"></a>

- *Type:* `boolean`

---

##### `doubleValue`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesFetchAssetPropertyValuePropertyValueValue.property.doubleValue"></a>

- *Type:* `number`

---

##### `integerValue`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesFetchAssetPropertyValuePropertyValueValue.property.integerValue"></a>

- *Type:* `number`

---

##### `stringValue`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesFetchAssetPropertyValuePropertyValueValue.property.stringValue"></a>

- *Type:* `string`

---


### IoTSiteWiseResponsesListAccessPolicies <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListAccessPolicies"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListAccessPolicies.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesListAccessPolicies(__scope: Construct, __resources: string[], __input: IoTSiteWiseListAccessPoliciesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListAccessPolicies.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListAccessPolicies.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListAccessPolicies.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseListAccessPoliciesRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseListAccessPoliciesRequest)

---



#### Properties <a name="Properties"></a>

##### `accessPolicySummaries`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListAccessPolicies.property.accessPolicySummaries"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseAccessPolicySummary`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseAccessPolicySummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListAccessPolicies.property.nextToken"></a>

- *Type:* `string`

---


### IoTSiteWiseResponsesListAssetModels <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListAssetModels"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListAssetModels.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesListAssetModels(__scope: Construct, __resources: string[], __input: IoTSiteWiseListAssetModelsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListAssetModels.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListAssetModels.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListAssetModels.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseListAssetModelsRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseListAssetModelsRequest)

---



#### Properties <a name="Properties"></a>

##### `assetModelSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListAssetModels.property.assetModelSummaries"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetModelSummary`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetModelSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListAssetModels.property.nextToken"></a>

- *Type:* `string`

---


### IoTSiteWiseResponsesListAssets <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListAssets"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListAssets.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesListAssets(__scope: Construct, __resources: string[], __input: IoTSiteWiseListAssetsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListAssets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListAssets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListAssets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseListAssetsRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseListAssetsRequest)

---



#### Properties <a name="Properties"></a>

##### `assetSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListAssets.property.assetSummaries"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetSummary`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseAssetSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListAssets.property.nextToken"></a>

- *Type:* `string`

---


### IoTSiteWiseResponsesListAssociatedAssets <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListAssociatedAssets"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListAssociatedAssets.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesListAssociatedAssets(__scope: Construct, __resources: string[], __input: IoTSiteWiseListAssociatedAssetsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListAssociatedAssets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListAssociatedAssets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListAssociatedAssets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseListAssociatedAssetsRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseListAssociatedAssetsRequest)

---



#### Properties <a name="Properties"></a>

##### `assetSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListAssociatedAssets.property.assetSummaries"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseAssociatedAssetsSummary`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseAssociatedAssetsSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListAssociatedAssets.property.nextToken"></a>

- *Type:* `string`

---


### IoTSiteWiseResponsesListDashboards <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListDashboards"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListDashboards.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesListDashboards(__scope: Construct, __resources: string[], __input: IoTSiteWiseListDashboardsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListDashboards.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListDashboards.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListDashboards.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseListDashboardsRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseListDashboardsRequest)

---



#### Properties <a name="Properties"></a>

##### `dashboardSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListDashboards.property.dashboardSummaries"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseDashboardSummary`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseDashboardSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListDashboards.property.nextToken"></a>

- *Type:* `string`

---


### IoTSiteWiseResponsesListGateways <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListGateways"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListGateways.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesListGateways(__scope: Construct, __resources: string[], __input: IoTSiteWiseListGatewaysRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListGateways.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListGateways.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListGateways.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseListGatewaysRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseListGatewaysRequest)

---



#### Properties <a name="Properties"></a>

##### `gatewaySummaries`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListGateways.property.gatewaySummaries"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseGatewaySummary`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseGatewaySummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListGateways.property.nextToken"></a>

- *Type:* `string`

---


### IoTSiteWiseResponsesListPortals <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListPortals"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListPortals.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesListPortals(__scope: Construct, __resources: string[], __input: IoTSiteWiseListPortalsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListPortals.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListPortals.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListPortals.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseListPortalsRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseListPortalsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListPortals.property.nextToken"></a>

- *Type:* `string`

---

##### `portalSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListPortals.property.portalSummaries"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWisePortalSummary`](#aws-cdk-sdk.iotsitewise.IoTSiteWisePortalSummary)[]

---


### IoTSiteWiseResponsesListProjectAssets <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListProjectAssets"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListProjectAssets.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesListProjectAssets(__scope: Construct, __resources: string[], __input: IoTSiteWiseListProjectAssetsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListProjectAssets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListProjectAssets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListProjectAssets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseListProjectAssetsRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseListProjectAssetsRequest)

---



#### Properties <a name="Properties"></a>

##### `assetIds`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListProjectAssets.property.assetIds"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListProjectAssets.property.nextToken"></a>

- *Type:* `string`

---


### IoTSiteWiseResponsesListProjects <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListProjects"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListProjects.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesListProjects(__scope: Construct, __resources: string[], __input: IoTSiteWiseListProjectsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListProjects.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListProjects.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListProjects.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseListProjectsRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseListProjectsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListProjects.property.nextToken"></a>

- *Type:* `string`

---

##### `projectSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListProjects.property.projectSummaries"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseProjectSummary`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseProjectSummary)[]

---


### IoTSiteWiseResponsesListTagsForResource <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListTagsForResource.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: IoTSiteWiseListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseListTagsForResourceRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesListTagsForResource.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### IoTSiteWiseResponsesPutDefaultEncryptionConfiguration <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesPutDefaultEncryptionConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesPutDefaultEncryptionConfiguration.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesPutDefaultEncryptionConfiguration(__scope: Construct, __resources: string[], __input: IoTSiteWisePutDefaultEncryptionConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesPutDefaultEncryptionConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesPutDefaultEncryptionConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesPutDefaultEncryptionConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWisePutDefaultEncryptionConfigurationRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWisePutDefaultEncryptionConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `configurationStatus`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesPutDefaultEncryptionConfiguration.property.configurationStatus"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesPutDefaultEncryptionConfigurationConfigurationStatus`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesPutDefaultEncryptionConfigurationConfigurationStatus)

---

##### `encryptionType`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesPutDefaultEncryptionConfiguration.property.encryptionType"></a>

- *Type:* `string`

---

##### `kmsKeyArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesPutDefaultEncryptionConfiguration.property.kmsKeyArn"></a>

- *Type:* `string`

---


### IoTSiteWiseResponsesPutDefaultEncryptionConfigurationConfigurationStatus <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesPutDefaultEncryptionConfigurationConfigurationStatus"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesPutDefaultEncryptionConfigurationConfigurationStatus.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesPutDefaultEncryptionConfigurationConfigurationStatus(__scope: Construct, __resources: string[], __input: IoTSiteWisePutDefaultEncryptionConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesPutDefaultEncryptionConfigurationConfigurationStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesPutDefaultEncryptionConfigurationConfigurationStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesPutDefaultEncryptionConfigurationConfigurationStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWisePutDefaultEncryptionConfigurationRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWisePutDefaultEncryptionConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `error`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesPutDefaultEncryptionConfigurationConfigurationStatus.property.error"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesPutDefaultEncryptionConfigurationConfigurationStatusError`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesPutDefaultEncryptionConfigurationConfigurationStatusError)

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesPutDefaultEncryptionConfigurationConfigurationStatus.property.state"></a>

- *Type:* `string`

---


### IoTSiteWiseResponsesPutDefaultEncryptionConfigurationConfigurationStatusError <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesPutDefaultEncryptionConfigurationConfigurationStatusError"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesPutDefaultEncryptionConfigurationConfigurationStatusError.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesPutDefaultEncryptionConfigurationConfigurationStatusError(__scope: Construct, __resources: string[], __input: IoTSiteWisePutDefaultEncryptionConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesPutDefaultEncryptionConfigurationConfigurationStatusError.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesPutDefaultEncryptionConfigurationConfigurationStatusError.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesPutDefaultEncryptionConfigurationConfigurationStatusError.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWisePutDefaultEncryptionConfigurationRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWisePutDefaultEncryptionConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `code`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesPutDefaultEncryptionConfigurationConfigurationStatusError.property.code"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesPutDefaultEncryptionConfigurationConfigurationStatusError.property.message"></a>

- *Type:* `string`

---


### IoTSiteWiseResponsesUpdateAsset <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdateAsset"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdateAsset.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesUpdateAsset(__scope: Construct, __resources: string[], __input: IoTSiteWiseUpdateAssetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdateAsset.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdateAsset.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdateAsset.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateAssetRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateAssetRequest)

---



#### Properties <a name="Properties"></a>

##### `assetStatus`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdateAsset.property.assetStatus"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdateAssetAssetStatus`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdateAssetAssetStatus)

---


### IoTSiteWiseResponsesUpdateAssetAssetStatus <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdateAssetAssetStatus"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdateAssetAssetStatus.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesUpdateAssetAssetStatus(__scope: Construct, __resources: string[], __input: IoTSiteWiseUpdateAssetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdateAssetAssetStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdateAssetAssetStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdateAssetAssetStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateAssetRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateAssetRequest)

---



#### Properties <a name="Properties"></a>

##### `error`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdateAssetAssetStatus.property.error"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdateAssetAssetStatusError`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdateAssetAssetStatusError)

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdateAssetAssetStatus.property.state"></a>

- *Type:* `string`

---


### IoTSiteWiseResponsesUpdateAssetAssetStatusError <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdateAssetAssetStatusError"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdateAssetAssetStatusError.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesUpdateAssetAssetStatusError(__scope: Construct, __resources: string[], __input: IoTSiteWiseUpdateAssetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdateAssetAssetStatusError.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdateAssetAssetStatusError.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdateAssetAssetStatusError.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateAssetRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateAssetRequest)

---



#### Properties <a name="Properties"></a>

##### `code`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdateAssetAssetStatusError.property.code"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdateAssetAssetStatusError.property.message"></a>

- *Type:* `string`

---


### IoTSiteWiseResponsesUpdateAssetModel <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdateAssetModel"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdateAssetModel.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesUpdateAssetModel(__scope: Construct, __resources: string[], __input: IoTSiteWiseUpdateAssetModelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdateAssetModel.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdateAssetModel.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdateAssetModel.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateAssetModelRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateAssetModelRequest)

---



#### Properties <a name="Properties"></a>

##### `assetModelStatus`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdateAssetModel.property.assetModelStatus"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdateAssetModelAssetModelStatus`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdateAssetModelAssetModelStatus)

---


### IoTSiteWiseResponsesUpdateAssetModelAssetModelStatus <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdateAssetModelAssetModelStatus"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdateAssetModelAssetModelStatus.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesUpdateAssetModelAssetModelStatus(__scope: Construct, __resources: string[], __input: IoTSiteWiseUpdateAssetModelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdateAssetModelAssetModelStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdateAssetModelAssetModelStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdateAssetModelAssetModelStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateAssetModelRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateAssetModelRequest)

---



#### Properties <a name="Properties"></a>

##### `error`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdateAssetModelAssetModelStatus.property.error"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdateAssetModelAssetModelStatusError`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdateAssetModelAssetModelStatusError)

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdateAssetModelAssetModelStatus.property.state"></a>

- *Type:* `string`

---


### IoTSiteWiseResponsesUpdateAssetModelAssetModelStatusError <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdateAssetModelAssetModelStatusError"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdateAssetModelAssetModelStatusError.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesUpdateAssetModelAssetModelStatusError(__scope: Construct, __resources: string[], __input: IoTSiteWiseUpdateAssetModelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdateAssetModelAssetModelStatusError.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdateAssetModelAssetModelStatusError.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdateAssetModelAssetModelStatusError.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateAssetModelRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateAssetModelRequest)

---



#### Properties <a name="Properties"></a>

##### `code`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdateAssetModelAssetModelStatusError.property.code"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdateAssetModelAssetModelStatusError.property.message"></a>

- *Type:* `string`

---


### IoTSiteWiseResponsesUpdateGatewayCapabilityConfiguration <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdateGatewayCapabilityConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdateGatewayCapabilityConfiguration.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesUpdateGatewayCapabilityConfiguration(__scope: Construct, __resources: string[], __input: IoTSiteWiseUpdateGatewayCapabilityConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdateGatewayCapabilityConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdateGatewayCapabilityConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdateGatewayCapabilityConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateGatewayCapabilityConfigurationRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdateGatewayCapabilityConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `capabilityNamespace`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdateGatewayCapabilityConfiguration.property.capabilityNamespace"></a>

- *Type:* `string`

---

##### `capabilitySyncStatus`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdateGatewayCapabilityConfiguration.property.capabilitySyncStatus"></a>

- *Type:* `string`

---


### IoTSiteWiseResponsesUpdatePortal <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdatePortal"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdatePortal.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesUpdatePortal(__scope: Construct, __resources: string[], __input: IoTSiteWiseUpdatePortalRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdatePortal.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdatePortal.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdatePortal.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdatePortalRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdatePortalRequest)

---



#### Properties <a name="Properties"></a>

##### `portalStatus`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdatePortal.property.portalStatus"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdatePortalPortalStatus`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdatePortalPortalStatus)

---


### IoTSiteWiseResponsesUpdatePortalPortalStatus <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdatePortalPortalStatus"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdatePortalPortalStatus.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesUpdatePortalPortalStatus(__scope: Construct, __resources: string[], __input: IoTSiteWiseUpdatePortalRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdatePortalPortalStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdatePortalPortalStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdatePortalPortalStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdatePortalRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdatePortalRequest)

---



#### Properties <a name="Properties"></a>

##### `error`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdatePortalPortalStatus.property.error"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdatePortalPortalStatusError`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdatePortalPortalStatusError)

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdatePortalPortalStatus.property.state"></a>

- *Type:* `string`

---


### IoTSiteWiseResponsesUpdatePortalPortalStatusError <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdatePortalPortalStatusError"></a>

#### Initializer <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdatePortalPortalStatusError.Initializer"></a>

```typescript
import { iotsitewise } from 'aws-cdk-sdk'

new iotsitewise.IoTSiteWiseResponsesUpdatePortalPortalStatusError(__scope: Construct, __resources: string[], __input: IoTSiteWiseUpdatePortalRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdatePortalPortalStatusError.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdatePortalPortalStatusError.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdatePortalPortalStatusError.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdatePortalRequest`](#aws-cdk-sdk.iotsitewise.IoTSiteWiseUpdatePortalRequest)

---



#### Properties <a name="Properties"></a>

##### `code`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdatePortalPortalStatusError.property.code"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.iotsitewise.IoTSiteWiseResponsesUpdatePortalPortalStatusError.property.message"></a>

- *Type:* `string`

---



