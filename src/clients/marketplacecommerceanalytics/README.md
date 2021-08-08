# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### MarketplaceCommerceAnalyticsClient <a name="aws-cdk-sdk.marketplacecommerceanalytics.MarketplaceCommerceAnalyticsClient"></a>

#### Initializer <a name="aws-cdk-sdk.marketplacecommerceanalytics.MarketplaceCommerceAnalyticsClient.Initializer"></a>

```typescript
import { marketplacecommerceanalytics } from 'aws-cdk-sdk'

new marketplacecommerceanalytics.MarketplaceCommerceAnalyticsClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecommerceanalytics.MarketplaceCommerceAnalyticsClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecommerceanalytics.MarketplaceCommerceAnalyticsClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecommerceanalytics.MarketplaceCommerceAnalyticsClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `generateDataSet` <a name="aws-cdk-sdk.marketplacecommerceanalytics.MarketplaceCommerceAnalyticsClient.generateDataSet"></a>

```typescript
public generateDataSet(input: MarketplaceCommerceAnalyticsGenerateDataSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecommerceanalytics.MarketplaceCommerceAnalyticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.marketplacecommerceanalytics.MarketplaceCommerceAnalyticsGenerateDataSetRequest`](#aws-cdk-sdk.marketplacecommerceanalytics.MarketplaceCommerceAnalyticsGenerateDataSetRequest)

---

##### `startSupportDataExport` <a name="aws-cdk-sdk.marketplacecommerceanalytics.MarketplaceCommerceAnalyticsClient.startSupportDataExport"></a>

```typescript
public startSupportDataExport(input: MarketplaceCommerceAnalyticsStartSupportDataExportRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecommerceanalytics.MarketplaceCommerceAnalyticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.marketplacecommerceanalytics.MarketplaceCommerceAnalyticsStartSupportDataExportRequest`](#aws-cdk-sdk.marketplacecommerceanalytics.MarketplaceCommerceAnalyticsStartSupportDataExportRequest)

---




## Structs <a name="Structs"></a>

### MarketplaceCommerceAnalyticsGenerateDataSetRequest <a name="aws-cdk-sdk.marketplacecommerceanalytics.MarketplaceCommerceAnalyticsGenerateDataSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { marketplacecommerceanalytics } from 'aws-cdk-sdk'

const marketplaceCommerceAnalyticsGenerateDataSetRequest: marketplacecommerceanalytics.MarketplaceCommerceAnalyticsGenerateDataSetRequest = { ... }
```

##### `dataSetPublicationDate`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecommerceanalytics.MarketplaceCommerceAnalyticsGenerateDataSetRequest.property.dataSetPublicationDate"></a>

- *Type:* `string`

---

##### `dataSetType`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecommerceanalytics.MarketplaceCommerceAnalyticsGenerateDataSetRequest.property.dataSetType"></a>

- *Type:* `string`

---

##### `destinationS3BucketName`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecommerceanalytics.MarketplaceCommerceAnalyticsGenerateDataSetRequest.property.destinationS3BucketName"></a>

- *Type:* `string`

---

##### `roleNameArn`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecommerceanalytics.MarketplaceCommerceAnalyticsGenerateDataSetRequest.property.roleNameArn"></a>

- *Type:* `string`

---

##### `snsTopicArn`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecommerceanalytics.MarketplaceCommerceAnalyticsGenerateDataSetRequest.property.snsTopicArn"></a>

- *Type:* `string`

---

##### `customerDefinedValues`<sup>Optional</sup> <a name="aws-cdk-sdk.marketplacecommerceanalytics.MarketplaceCommerceAnalyticsGenerateDataSetRequest.property.customerDefinedValues"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `destinationS3Prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.marketplacecommerceanalytics.MarketplaceCommerceAnalyticsGenerateDataSetRequest.property.destinationS3Prefix"></a>

- *Type:* `string`

---

### MarketplaceCommerceAnalyticsGenerateDataSetResult <a name="aws-cdk-sdk.marketplacecommerceanalytics.MarketplaceCommerceAnalyticsGenerateDataSetResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { marketplacecommerceanalytics } from 'aws-cdk-sdk'

const marketplaceCommerceAnalyticsGenerateDataSetResult: marketplacecommerceanalytics.MarketplaceCommerceAnalyticsGenerateDataSetResult = { ... }
```

##### `dataSetRequestId`<sup>Optional</sup> <a name="aws-cdk-sdk.marketplacecommerceanalytics.MarketplaceCommerceAnalyticsGenerateDataSetResult.property.dataSetRequestId"></a>

- *Type:* `string`

---

### MarketplaceCommerceAnalyticsStartSupportDataExportRequest <a name="aws-cdk-sdk.marketplacecommerceanalytics.MarketplaceCommerceAnalyticsStartSupportDataExportRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { marketplacecommerceanalytics } from 'aws-cdk-sdk'

const marketplaceCommerceAnalyticsStartSupportDataExportRequest: marketplacecommerceanalytics.MarketplaceCommerceAnalyticsStartSupportDataExportRequest = { ... }
```

##### `dataSetType`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecommerceanalytics.MarketplaceCommerceAnalyticsStartSupportDataExportRequest.property.dataSetType"></a>

- *Type:* `string`

---

##### `destinationS3BucketName`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecommerceanalytics.MarketplaceCommerceAnalyticsStartSupportDataExportRequest.property.destinationS3BucketName"></a>

- *Type:* `string`

---

##### `fromDate`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecommerceanalytics.MarketplaceCommerceAnalyticsStartSupportDataExportRequest.property.fromDate"></a>

- *Type:* `string`

---

##### `roleNameArn`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecommerceanalytics.MarketplaceCommerceAnalyticsStartSupportDataExportRequest.property.roleNameArn"></a>

- *Type:* `string`

---

##### `snsTopicArn`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecommerceanalytics.MarketplaceCommerceAnalyticsStartSupportDataExportRequest.property.snsTopicArn"></a>

- *Type:* `string`

---

##### `customerDefinedValues`<sup>Optional</sup> <a name="aws-cdk-sdk.marketplacecommerceanalytics.MarketplaceCommerceAnalyticsStartSupportDataExportRequest.property.customerDefinedValues"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `destinationS3Prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.marketplacecommerceanalytics.MarketplaceCommerceAnalyticsStartSupportDataExportRequest.property.destinationS3Prefix"></a>

- *Type:* `string`

---

### MarketplaceCommerceAnalyticsStartSupportDataExportResult <a name="aws-cdk-sdk.marketplacecommerceanalytics.MarketplaceCommerceAnalyticsStartSupportDataExportResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { marketplacecommerceanalytics } from 'aws-cdk-sdk'

const marketplaceCommerceAnalyticsStartSupportDataExportResult: marketplacecommerceanalytics.MarketplaceCommerceAnalyticsStartSupportDataExportResult = { ... }
```

##### `dataSetRequestId`<sup>Optional</sup> <a name="aws-cdk-sdk.marketplacecommerceanalytics.MarketplaceCommerceAnalyticsStartSupportDataExportResult.property.dataSetRequestId"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### MarketplaceCommerceAnalyticsResponsesGenerateDataSet <a name="aws-cdk-sdk.marketplacecommerceanalytics.MarketplaceCommerceAnalyticsResponsesGenerateDataSet"></a>

#### Initializer <a name="aws-cdk-sdk.marketplacecommerceanalytics.MarketplaceCommerceAnalyticsResponsesGenerateDataSet.Initializer"></a>

```typescript
import { marketplacecommerceanalytics } from 'aws-cdk-sdk'

new marketplacecommerceanalytics.MarketplaceCommerceAnalyticsResponsesGenerateDataSet(__scope: Construct, __resources: string[], __input: MarketplaceCommerceAnalyticsGenerateDataSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecommerceanalytics.MarketplaceCommerceAnalyticsResponsesGenerateDataSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecommerceanalytics.MarketplaceCommerceAnalyticsResponsesGenerateDataSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecommerceanalytics.MarketplaceCommerceAnalyticsResponsesGenerateDataSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.marketplacecommerceanalytics.MarketplaceCommerceAnalyticsGenerateDataSetRequest`](#aws-cdk-sdk.marketplacecommerceanalytics.MarketplaceCommerceAnalyticsGenerateDataSetRequest)

---



#### Properties <a name="Properties"></a>

##### `dataSetRequestId`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecommerceanalytics.MarketplaceCommerceAnalyticsResponsesGenerateDataSet.property.dataSetRequestId"></a>

- *Type:* `string`

---


### MarketplaceCommerceAnalyticsResponsesStartSupportDataExport <a name="aws-cdk-sdk.marketplacecommerceanalytics.MarketplaceCommerceAnalyticsResponsesStartSupportDataExport"></a>

#### Initializer <a name="aws-cdk-sdk.marketplacecommerceanalytics.MarketplaceCommerceAnalyticsResponsesStartSupportDataExport.Initializer"></a>

```typescript
import { marketplacecommerceanalytics } from 'aws-cdk-sdk'

new marketplacecommerceanalytics.MarketplaceCommerceAnalyticsResponsesStartSupportDataExport(__scope: Construct, __resources: string[], __input: MarketplaceCommerceAnalyticsStartSupportDataExportRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecommerceanalytics.MarketplaceCommerceAnalyticsResponsesStartSupportDataExport.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecommerceanalytics.MarketplaceCommerceAnalyticsResponsesStartSupportDataExport.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecommerceanalytics.MarketplaceCommerceAnalyticsResponsesStartSupportDataExport.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.marketplacecommerceanalytics.MarketplaceCommerceAnalyticsStartSupportDataExportRequest`](#aws-cdk-sdk.marketplacecommerceanalytics.MarketplaceCommerceAnalyticsStartSupportDataExportRequest)

---



#### Properties <a name="Properties"></a>

##### `dataSetRequestId`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecommerceanalytics.MarketplaceCommerceAnalyticsResponsesStartSupportDataExport.property.dataSetRequestId"></a>

- *Type:* `string`

---



