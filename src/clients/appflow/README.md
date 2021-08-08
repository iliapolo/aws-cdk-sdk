# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### AppflowClient <a name="aws-cdk-sdk.appflow.AppflowClient"></a>

#### Initializer <a name="aws-cdk-sdk.appflow.AppflowClient.Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

new appflow.AppflowClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `createConnectorProfile` <a name="aws-cdk-sdk.appflow.AppflowClient.createConnectorProfile"></a>

```typescript
public createConnectorProfile(input: AppflowCreateConnectorProfileRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowCreateConnectorProfileRequest`](#aws-cdk-sdk.appflow.AppflowCreateConnectorProfileRequest)

---

##### `createFlow` <a name="aws-cdk-sdk.appflow.AppflowClient.createFlow"></a>

```typescript
public createFlow(input: AppflowCreateFlowRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowCreateFlowRequest`](#aws-cdk-sdk.appflow.AppflowCreateFlowRequest)

---

##### `deleteConnectorProfile` <a name="aws-cdk-sdk.appflow.AppflowClient.deleteConnectorProfile"></a>

```typescript
public deleteConnectorProfile(input: AppflowDeleteConnectorProfileRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowDeleteConnectorProfileRequest`](#aws-cdk-sdk.appflow.AppflowDeleteConnectorProfileRequest)

---

##### `deleteFlow` <a name="aws-cdk-sdk.appflow.AppflowClient.deleteFlow"></a>

```typescript
public deleteFlow(input: AppflowDeleteFlowRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowDeleteFlowRequest`](#aws-cdk-sdk.appflow.AppflowDeleteFlowRequest)

---

##### `describeConnectorEntity` <a name="aws-cdk-sdk.appflow.AppflowClient.describeConnectorEntity"></a>

```typescript
public describeConnectorEntity(input: AppflowDescribeConnectorEntityRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowDescribeConnectorEntityRequest`](#aws-cdk-sdk.appflow.AppflowDescribeConnectorEntityRequest)

---

##### `describeConnectorProfiles` <a name="aws-cdk-sdk.appflow.AppflowClient.describeConnectorProfiles"></a>

```typescript
public describeConnectorProfiles(input: AppflowDescribeConnectorProfilesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowDescribeConnectorProfilesRequest`](#aws-cdk-sdk.appflow.AppflowDescribeConnectorProfilesRequest)

---

##### `describeConnectors` <a name="aws-cdk-sdk.appflow.AppflowClient.describeConnectors"></a>

```typescript
public describeConnectors(input: AppflowDescribeConnectorsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowDescribeConnectorsRequest`](#aws-cdk-sdk.appflow.AppflowDescribeConnectorsRequest)

---

##### `describeFlow` <a name="aws-cdk-sdk.appflow.AppflowClient.describeFlow"></a>

```typescript
public describeFlow(input: AppflowDescribeFlowRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowDescribeFlowRequest`](#aws-cdk-sdk.appflow.AppflowDescribeFlowRequest)

---

##### `describeFlowExecutionRecords` <a name="aws-cdk-sdk.appflow.AppflowClient.describeFlowExecutionRecords"></a>

```typescript
public describeFlowExecutionRecords(input: AppflowDescribeFlowExecutionRecordsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowDescribeFlowExecutionRecordsRequest`](#aws-cdk-sdk.appflow.AppflowDescribeFlowExecutionRecordsRequest)

---

##### `listConnectorEntities` <a name="aws-cdk-sdk.appflow.AppflowClient.listConnectorEntities"></a>

```typescript
public listConnectorEntities(input: AppflowListConnectorEntitiesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowListConnectorEntitiesRequest`](#aws-cdk-sdk.appflow.AppflowListConnectorEntitiesRequest)

---

##### `listFlows` <a name="aws-cdk-sdk.appflow.AppflowClient.listFlows"></a>

```typescript
public listFlows(input: AppflowListFlowsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowListFlowsRequest`](#aws-cdk-sdk.appflow.AppflowListFlowsRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.appflow.AppflowClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: AppflowListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowListTagsForResourceRequest`](#aws-cdk-sdk.appflow.AppflowListTagsForResourceRequest)

---

##### `startFlow` <a name="aws-cdk-sdk.appflow.AppflowClient.startFlow"></a>

```typescript
public startFlow(input: AppflowStartFlowRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowStartFlowRequest`](#aws-cdk-sdk.appflow.AppflowStartFlowRequest)

---

##### `stopFlow` <a name="aws-cdk-sdk.appflow.AppflowClient.stopFlow"></a>

```typescript
public stopFlow(input: AppflowStopFlowRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowStopFlowRequest`](#aws-cdk-sdk.appflow.AppflowStopFlowRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.appflow.AppflowClient.tagResource"></a>

```typescript
public tagResource(input: AppflowTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowTagResourceRequest`](#aws-cdk-sdk.appflow.AppflowTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.appflow.AppflowClient.untagResource"></a>

```typescript
public untagResource(input: AppflowUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowUntagResourceRequest`](#aws-cdk-sdk.appflow.AppflowUntagResourceRequest)

---

##### `updateConnectorProfile` <a name="aws-cdk-sdk.appflow.AppflowClient.updateConnectorProfile"></a>

```typescript
public updateConnectorProfile(input: AppflowUpdateConnectorProfileRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowUpdateConnectorProfileRequest`](#aws-cdk-sdk.appflow.AppflowUpdateConnectorProfileRequest)

---

##### `updateFlow` <a name="aws-cdk-sdk.appflow.AppflowClient.updateFlow"></a>

```typescript
public updateFlow(input: AppflowUpdateFlowRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowUpdateFlowRequest`](#aws-cdk-sdk.appflow.AppflowUpdateFlowRequest)

---




## Structs <a name="Structs"></a>

### AppflowAggregationConfig <a name="aws-cdk-sdk.appflow.AppflowAggregationConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowAggregationConfig: appflow.AppflowAggregationConfig = { ... }
```

##### `aggregationType`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowAggregationConfig.property.aggregationType"></a>

- *Type:* `string`

---

### AppflowAmplitudeConnectorProfileCredentials <a name="aws-cdk-sdk.appflow.AppflowAmplitudeConnectorProfileCredentials"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowAmplitudeConnectorProfileCredentials: appflow.AppflowAmplitudeConnectorProfileCredentials = { ... }
```

##### `apiKey`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowAmplitudeConnectorProfileCredentials.property.apiKey"></a>

- *Type:* `string`

---

##### `secretKey`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowAmplitudeConnectorProfileCredentials.property.secretKey"></a>

- *Type:* `string`

---

### AppflowAmplitudeConnectorProfileProperties <a name="aws-cdk-sdk.appflow.AppflowAmplitudeConnectorProfileProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowAmplitudeConnectorProfileProperties: appflow.AppflowAmplitudeConnectorProfileProperties = { ... }
```

### AppflowAmplitudeMetadata <a name="aws-cdk-sdk.appflow.AppflowAmplitudeMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowAmplitudeMetadata: appflow.AppflowAmplitudeMetadata = { ... }
```

### AppflowAmplitudeSourceProperties <a name="aws-cdk-sdk.appflow.AppflowAmplitudeSourceProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowAmplitudeSourceProperties: appflow.AppflowAmplitudeSourceProperties = { ... }
```

##### `object`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowAmplitudeSourceProperties.property.object"></a>

- *Type:* `string`

---

### AppflowConnectorConfiguration <a name="aws-cdk-sdk.appflow.AppflowConnectorConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowConnectorConfiguration: appflow.AppflowConnectorConfiguration = { ... }
```

##### `canUseAsDestination`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorConfiguration.property.canUseAsDestination"></a>

- *Type:* `boolean`

---

##### `canUseAsSource`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorConfiguration.property.canUseAsSource"></a>

- *Type:* `boolean`

---

##### `connectorMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorConfiguration.property.connectorMetadata"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowConnectorMetadata`](#aws-cdk-sdk.appflow.AppflowConnectorMetadata)

---

##### `isPrivateLinkEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorConfiguration.property.isPrivateLinkEnabled"></a>

- *Type:* `boolean`

---

##### `isPrivateLinkEndpointUrlRequired`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorConfiguration.property.isPrivateLinkEndpointUrlRequired"></a>

- *Type:* `boolean`

---

##### `supportedDestinationConnectors`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorConfiguration.property.supportedDestinationConnectors"></a>

- *Type:* `string`[]

---

##### `supportedSchedulingFrequencies`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorConfiguration.property.supportedSchedulingFrequencies"></a>

- *Type:* `string`[]

---

##### `supportedTriggerTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorConfiguration.property.supportedTriggerTypes"></a>

- *Type:* `string`[]

---

### AppflowConnectorEntity <a name="aws-cdk-sdk.appflow.AppflowConnectorEntity"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowConnectorEntity: appflow.AppflowConnectorEntity = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorEntity.property.name"></a>

- *Type:* `string`

---

##### `hasNestedEntities`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorEntity.property.hasNestedEntities"></a>

- *Type:* `boolean`

---

##### `label`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorEntity.property.label"></a>

- *Type:* `string`

---

### AppflowConnectorEntityField <a name="aws-cdk-sdk.appflow.AppflowConnectorEntityField"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowConnectorEntityField: appflow.AppflowConnectorEntityField = { ... }
```

##### `identifier`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorEntityField.property.identifier"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorEntityField.property.description"></a>

- *Type:* `string`

---

##### `destinationProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorEntityField.property.destinationProperties"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowDestinationFieldProperties`](#aws-cdk-sdk.appflow.AppflowDestinationFieldProperties)

---

##### `label`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorEntityField.property.label"></a>

- *Type:* `string`

---

##### `sourceProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorEntityField.property.sourceProperties"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowSourceFieldProperties`](#aws-cdk-sdk.appflow.AppflowSourceFieldProperties)

---

##### `supportedFieldTypeDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorEntityField.property.supportedFieldTypeDetails"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowSupportedFieldTypeDetails`](#aws-cdk-sdk.appflow.AppflowSupportedFieldTypeDetails)

---

### AppflowConnectorMetadata <a name="aws-cdk-sdk.appflow.AppflowConnectorMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowConnectorMetadata: appflow.AppflowConnectorMetadata = { ... }
```

##### `amplitude`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorMetadata.property.amplitude"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowAmplitudeMetadata`](#aws-cdk-sdk.appflow.AppflowAmplitudeMetadata)

---

##### `datadog`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorMetadata.property.datadog"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowDatadogMetadata`](#aws-cdk-sdk.appflow.AppflowDatadogMetadata)

---

##### `dynatrace`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorMetadata.property.dynatrace"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowDynatraceMetadata`](#aws-cdk-sdk.appflow.AppflowDynatraceMetadata)

---

##### `eventBridge`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorMetadata.property.eventBridge"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowEventBridgeMetadata`](#aws-cdk-sdk.appflow.AppflowEventBridgeMetadata)

---

##### `googleAnalytics`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorMetadata.property.googleAnalytics"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowGoogleAnalyticsMetadata`](#aws-cdk-sdk.appflow.AppflowGoogleAnalyticsMetadata)

---

##### `inforNexus`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorMetadata.property.inforNexus"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowInforNexusMetadata`](#aws-cdk-sdk.appflow.AppflowInforNexusMetadata)

---

##### `marketo`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorMetadata.property.marketo"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowMarketoMetadata`](#aws-cdk-sdk.appflow.AppflowMarketoMetadata)

---

##### `redshift`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorMetadata.property.redshift"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowRedshiftMetadata`](#aws-cdk-sdk.appflow.AppflowRedshiftMetadata)

---

##### `s3`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorMetadata.property.s3"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowS3Metadata`](#aws-cdk-sdk.appflow.AppflowS3Metadata)

---

##### `salesforce`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorMetadata.property.salesforce"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowSalesforceMetadata`](#aws-cdk-sdk.appflow.AppflowSalesforceMetadata)

---

##### `serviceNow`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorMetadata.property.serviceNow"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowServiceNowMetadata`](#aws-cdk-sdk.appflow.AppflowServiceNowMetadata)

---

##### `singular`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorMetadata.property.singular"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowSingularMetadata`](#aws-cdk-sdk.appflow.AppflowSingularMetadata)

---

##### `slack`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorMetadata.property.slack"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowSlackMetadata`](#aws-cdk-sdk.appflow.AppflowSlackMetadata)

---

##### `snowflake`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorMetadata.property.snowflake"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowSnowflakeMetadata`](#aws-cdk-sdk.appflow.AppflowSnowflakeMetadata)

---

##### `trendmicro`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorMetadata.property.trendmicro"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowTrendmicroMetadata`](#aws-cdk-sdk.appflow.AppflowTrendmicroMetadata)

---

##### `upsolver`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorMetadata.property.upsolver"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowUpsolverMetadata`](#aws-cdk-sdk.appflow.AppflowUpsolverMetadata)

---

##### `veeva`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorMetadata.property.veeva"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowVeevaMetadata`](#aws-cdk-sdk.appflow.AppflowVeevaMetadata)

---

##### `zendesk`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorMetadata.property.zendesk"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowZendeskMetadata`](#aws-cdk-sdk.appflow.AppflowZendeskMetadata)

---

### AppflowConnectorOAuthRequest <a name="aws-cdk-sdk.appflow.AppflowConnectorOAuthRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowConnectorOAuthRequest: appflow.AppflowConnectorOAuthRequest = { ... }
```

##### `authCode`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorOAuthRequest.property.authCode"></a>

- *Type:* `string`

---

##### `redirectUri`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorOAuthRequest.property.redirectUri"></a>

- *Type:* `string`

---

### AppflowConnectorOperator <a name="aws-cdk-sdk.appflow.AppflowConnectorOperator"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowConnectorOperator: appflow.AppflowConnectorOperator = { ... }
```

##### `amplitude`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorOperator.property.amplitude"></a>

- *Type:* `string`

---

##### `datadog`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorOperator.property.datadog"></a>

- *Type:* `string`

---

##### `dynatrace`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorOperator.property.dynatrace"></a>

- *Type:* `string`

---

##### `googleAnalytics`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorOperator.property.googleAnalytics"></a>

- *Type:* `string`

---

##### `inforNexus`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorOperator.property.inforNexus"></a>

- *Type:* `string`

---

##### `marketo`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorOperator.property.marketo"></a>

- *Type:* `string`

---

##### `s3`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorOperator.property.s3"></a>

- *Type:* `string`

---

##### `salesforce`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorOperator.property.salesforce"></a>

- *Type:* `string`

---

##### `serviceNow`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorOperator.property.serviceNow"></a>

- *Type:* `string`

---

##### `singular`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorOperator.property.singular"></a>

- *Type:* `string`

---

##### `slack`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorOperator.property.slack"></a>

- *Type:* `string`

---

##### `trendmicro`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorOperator.property.trendmicro"></a>

- *Type:* `string`

---

##### `veeva`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorOperator.property.veeva"></a>

- *Type:* `string`

---

##### `zendesk`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorOperator.property.zendesk"></a>

- *Type:* `string`

---

### AppflowConnectorProfile <a name="aws-cdk-sdk.appflow.AppflowConnectorProfile"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowConnectorProfile: appflow.AppflowConnectorProfile = { ... }
```

##### `connectionMode`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorProfile.property.connectionMode"></a>

- *Type:* `string`

---

##### `connectorProfileArn`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorProfile.property.connectorProfileArn"></a>

- *Type:* `string`

---

##### `connectorProfileName`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorProfile.property.connectorProfileName"></a>

- *Type:* `string`

---

##### `connectorProfileProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorProfile.property.connectorProfileProperties"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowConnectorProfileProperties`](#aws-cdk-sdk.appflow.AppflowConnectorProfileProperties)

---

##### `connectorType`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorProfile.property.connectorType"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorProfile.property.createdAt"></a>

- *Type:* `string`

---

##### `credentialsArn`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorProfile.property.credentialsArn"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorProfile.property.lastUpdatedAt"></a>

- *Type:* `string`

---

### AppflowConnectorProfileConfig <a name="aws-cdk-sdk.appflow.AppflowConnectorProfileConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowConnectorProfileConfig: appflow.AppflowConnectorProfileConfig = { ... }
```

##### `connectorProfileCredentials`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorProfileConfig.property.connectorProfileCredentials"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowConnectorProfileCredentials`](#aws-cdk-sdk.appflow.AppflowConnectorProfileCredentials)

---

##### `connectorProfileProperties`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorProfileConfig.property.connectorProfileProperties"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowConnectorProfileProperties`](#aws-cdk-sdk.appflow.AppflowConnectorProfileProperties)

---

### AppflowConnectorProfileCredentials <a name="aws-cdk-sdk.appflow.AppflowConnectorProfileCredentials"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowConnectorProfileCredentials: appflow.AppflowConnectorProfileCredentials = { ... }
```

##### `amplitude`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorProfileCredentials.property.amplitude"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowAmplitudeConnectorProfileCredentials`](#aws-cdk-sdk.appflow.AppflowAmplitudeConnectorProfileCredentials)

---

##### `datadog`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorProfileCredentials.property.datadog"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowDatadogConnectorProfileCredentials`](#aws-cdk-sdk.appflow.AppflowDatadogConnectorProfileCredentials)

---

##### `dynatrace`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorProfileCredentials.property.dynatrace"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowDynatraceConnectorProfileCredentials`](#aws-cdk-sdk.appflow.AppflowDynatraceConnectorProfileCredentials)

---

##### `googleAnalytics`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorProfileCredentials.property.googleAnalytics"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowGoogleAnalyticsConnectorProfileCredentials`](#aws-cdk-sdk.appflow.AppflowGoogleAnalyticsConnectorProfileCredentials)

---

##### `inforNexus`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorProfileCredentials.property.inforNexus"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowInforNexusConnectorProfileCredentials`](#aws-cdk-sdk.appflow.AppflowInforNexusConnectorProfileCredentials)

---

##### `marketo`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorProfileCredentials.property.marketo"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowMarketoConnectorProfileCredentials`](#aws-cdk-sdk.appflow.AppflowMarketoConnectorProfileCredentials)

---

##### `redshift`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorProfileCredentials.property.redshift"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowRedshiftConnectorProfileCredentials`](#aws-cdk-sdk.appflow.AppflowRedshiftConnectorProfileCredentials)

---

##### `salesforce`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorProfileCredentials.property.salesforce"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowSalesforceConnectorProfileCredentials`](#aws-cdk-sdk.appflow.AppflowSalesforceConnectorProfileCredentials)

---

##### `serviceNow`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorProfileCredentials.property.serviceNow"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowServiceNowConnectorProfileCredentials`](#aws-cdk-sdk.appflow.AppflowServiceNowConnectorProfileCredentials)

---

##### `singular`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorProfileCredentials.property.singular"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowSingularConnectorProfileCredentials`](#aws-cdk-sdk.appflow.AppflowSingularConnectorProfileCredentials)

---

##### `slack`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorProfileCredentials.property.slack"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowSlackConnectorProfileCredentials`](#aws-cdk-sdk.appflow.AppflowSlackConnectorProfileCredentials)

---

##### `snowflake`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorProfileCredentials.property.snowflake"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowSnowflakeConnectorProfileCredentials`](#aws-cdk-sdk.appflow.AppflowSnowflakeConnectorProfileCredentials)

---

##### `trendmicro`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorProfileCredentials.property.trendmicro"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowTrendmicroConnectorProfileCredentials`](#aws-cdk-sdk.appflow.AppflowTrendmicroConnectorProfileCredentials)

---

##### `veeva`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorProfileCredentials.property.veeva"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowVeevaConnectorProfileCredentials`](#aws-cdk-sdk.appflow.AppflowVeevaConnectorProfileCredentials)

---

##### `zendesk`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorProfileCredentials.property.zendesk"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowZendeskConnectorProfileCredentials`](#aws-cdk-sdk.appflow.AppflowZendeskConnectorProfileCredentials)

---

### AppflowConnectorProfileProperties <a name="aws-cdk-sdk.appflow.AppflowConnectorProfileProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowConnectorProfileProperties: appflow.AppflowConnectorProfileProperties = { ... }
```

##### `amplitude`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorProfileProperties.property.amplitude"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowAmplitudeConnectorProfileProperties`](#aws-cdk-sdk.appflow.AppflowAmplitudeConnectorProfileProperties)

---

##### `datadog`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorProfileProperties.property.datadog"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowDatadogConnectorProfileProperties`](#aws-cdk-sdk.appflow.AppflowDatadogConnectorProfileProperties)

---

##### `dynatrace`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorProfileProperties.property.dynatrace"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowDynatraceConnectorProfileProperties`](#aws-cdk-sdk.appflow.AppflowDynatraceConnectorProfileProperties)

---

##### `googleAnalytics`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorProfileProperties.property.googleAnalytics"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowGoogleAnalyticsConnectorProfileProperties`](#aws-cdk-sdk.appflow.AppflowGoogleAnalyticsConnectorProfileProperties)

---

##### `inforNexus`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorProfileProperties.property.inforNexus"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowInforNexusConnectorProfileProperties`](#aws-cdk-sdk.appflow.AppflowInforNexusConnectorProfileProperties)

---

##### `marketo`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorProfileProperties.property.marketo"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowMarketoConnectorProfileProperties`](#aws-cdk-sdk.appflow.AppflowMarketoConnectorProfileProperties)

---

##### `redshift`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorProfileProperties.property.redshift"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowRedshiftConnectorProfileProperties`](#aws-cdk-sdk.appflow.AppflowRedshiftConnectorProfileProperties)

---

##### `salesforce`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorProfileProperties.property.salesforce"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowSalesforceConnectorProfileProperties`](#aws-cdk-sdk.appflow.AppflowSalesforceConnectorProfileProperties)

---

##### `serviceNow`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorProfileProperties.property.serviceNow"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowServiceNowConnectorProfileProperties`](#aws-cdk-sdk.appflow.AppflowServiceNowConnectorProfileProperties)

---

##### `singular`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorProfileProperties.property.singular"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowSingularConnectorProfileProperties`](#aws-cdk-sdk.appflow.AppflowSingularConnectorProfileProperties)

---

##### `slack`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorProfileProperties.property.slack"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowSlackConnectorProfileProperties`](#aws-cdk-sdk.appflow.AppflowSlackConnectorProfileProperties)

---

##### `snowflake`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorProfileProperties.property.snowflake"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowSnowflakeConnectorProfileProperties`](#aws-cdk-sdk.appflow.AppflowSnowflakeConnectorProfileProperties)

---

##### `trendmicro`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorProfileProperties.property.trendmicro"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowTrendmicroConnectorProfileProperties`](#aws-cdk-sdk.appflow.AppflowTrendmicroConnectorProfileProperties)

---

##### `veeva`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorProfileProperties.property.veeva"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowVeevaConnectorProfileProperties`](#aws-cdk-sdk.appflow.AppflowVeevaConnectorProfileProperties)

---

##### `zendesk`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowConnectorProfileProperties.property.zendesk"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowZendeskConnectorProfileProperties`](#aws-cdk-sdk.appflow.AppflowZendeskConnectorProfileProperties)

---

### AppflowCreateConnectorProfileRequest <a name="aws-cdk-sdk.appflow.AppflowCreateConnectorProfileRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowCreateConnectorProfileRequest: appflow.AppflowCreateConnectorProfileRequest = { ... }
```

##### `connectionMode`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowCreateConnectorProfileRequest.property.connectionMode"></a>

- *Type:* `string`

---

##### `connectorProfileConfig`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowCreateConnectorProfileRequest.property.connectorProfileConfig"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowConnectorProfileConfig`](#aws-cdk-sdk.appflow.AppflowConnectorProfileConfig)

---

##### `connectorProfileName`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowCreateConnectorProfileRequest.property.connectorProfileName"></a>

- *Type:* `string`

---

##### `connectorType`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowCreateConnectorProfileRequest.property.connectorType"></a>

- *Type:* `string`

---

##### `kmsArn`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowCreateConnectorProfileRequest.property.kmsArn"></a>

- *Type:* `string`

---

### AppflowCreateConnectorProfileResponse <a name="aws-cdk-sdk.appflow.AppflowCreateConnectorProfileResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowCreateConnectorProfileResponse: appflow.AppflowCreateConnectorProfileResponse = { ... }
```

##### `connectorProfileArn`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowCreateConnectorProfileResponse.property.connectorProfileArn"></a>

- *Type:* `string`

---

### AppflowCreateFlowRequest <a name="aws-cdk-sdk.appflow.AppflowCreateFlowRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowCreateFlowRequest: appflow.AppflowCreateFlowRequest = { ... }
```

##### `destinationFlowConfigList`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowCreateFlowRequest.property.destinationFlowConfigList"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowDestinationFlowConfig`](#aws-cdk-sdk.appflow.AppflowDestinationFlowConfig)[]

---

##### `flowName`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowCreateFlowRequest.property.flowName"></a>

- *Type:* `string`

---

##### `sourceFlowConfig`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowCreateFlowRequest.property.sourceFlowConfig"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowSourceFlowConfig`](#aws-cdk-sdk.appflow.AppflowSourceFlowConfig)

---

##### `tasks`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowCreateFlowRequest.property.tasks"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowTask`](#aws-cdk-sdk.appflow.AppflowTask)[]

---

##### `triggerConfig`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowCreateFlowRequest.property.triggerConfig"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowTriggerConfig`](#aws-cdk-sdk.appflow.AppflowTriggerConfig)

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowCreateFlowRequest.property.description"></a>

- *Type:* `string`

---

##### `kmsArn`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowCreateFlowRequest.property.kmsArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowCreateFlowRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### AppflowCreateFlowResponse <a name="aws-cdk-sdk.appflow.AppflowCreateFlowResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowCreateFlowResponse: appflow.AppflowCreateFlowResponse = { ... }
```

##### `flowArn`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowCreateFlowResponse.property.flowArn"></a>

- *Type:* `string`

---

##### `flowStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowCreateFlowResponse.property.flowStatus"></a>

- *Type:* `string`

---

### AppflowDatadogConnectorProfileCredentials <a name="aws-cdk-sdk.appflow.AppflowDatadogConnectorProfileCredentials"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowDatadogConnectorProfileCredentials: appflow.AppflowDatadogConnectorProfileCredentials = { ... }
```

##### `apiKey`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowDatadogConnectorProfileCredentials.property.apiKey"></a>

- *Type:* `string`

---

##### `applicationKey`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowDatadogConnectorProfileCredentials.property.applicationKey"></a>

- *Type:* `string`

---

### AppflowDatadogConnectorProfileProperties <a name="aws-cdk-sdk.appflow.AppflowDatadogConnectorProfileProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowDatadogConnectorProfileProperties: appflow.AppflowDatadogConnectorProfileProperties = { ... }
```

##### `instanceUrl`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowDatadogConnectorProfileProperties.property.instanceUrl"></a>

- *Type:* `string`

---

### AppflowDatadogMetadata <a name="aws-cdk-sdk.appflow.AppflowDatadogMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowDatadogMetadata: appflow.AppflowDatadogMetadata = { ... }
```

### AppflowDatadogSourceProperties <a name="aws-cdk-sdk.appflow.AppflowDatadogSourceProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowDatadogSourceProperties: appflow.AppflowDatadogSourceProperties = { ... }
```

##### `object`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowDatadogSourceProperties.property.object"></a>

- *Type:* `string`

---

### AppflowDeleteConnectorProfileRequest <a name="aws-cdk-sdk.appflow.AppflowDeleteConnectorProfileRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowDeleteConnectorProfileRequest: appflow.AppflowDeleteConnectorProfileRequest = { ... }
```

##### `connectorProfileName`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowDeleteConnectorProfileRequest.property.connectorProfileName"></a>

- *Type:* `string`

---

##### `forceDelete`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowDeleteConnectorProfileRequest.property.forceDelete"></a>

- *Type:* `boolean`

---

### AppflowDeleteConnectorProfileResponse <a name="aws-cdk-sdk.appflow.AppflowDeleteConnectorProfileResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowDeleteConnectorProfileResponse: appflow.AppflowDeleteConnectorProfileResponse = { ... }
```

### AppflowDeleteFlowRequest <a name="aws-cdk-sdk.appflow.AppflowDeleteFlowRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowDeleteFlowRequest: appflow.AppflowDeleteFlowRequest = { ... }
```

##### `flowName`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowDeleteFlowRequest.property.flowName"></a>

- *Type:* `string`

---

##### `forceDelete`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowDeleteFlowRequest.property.forceDelete"></a>

- *Type:* `boolean`

---

### AppflowDeleteFlowResponse <a name="aws-cdk-sdk.appflow.AppflowDeleteFlowResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowDeleteFlowResponse: appflow.AppflowDeleteFlowResponse = { ... }
```

### AppflowDescribeConnectorEntityRequest <a name="aws-cdk-sdk.appflow.AppflowDescribeConnectorEntityRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowDescribeConnectorEntityRequest: appflow.AppflowDescribeConnectorEntityRequest = { ... }
```

##### `connectorEntityName`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowDescribeConnectorEntityRequest.property.connectorEntityName"></a>

- *Type:* `string`

---

##### `connectorProfileName`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowDescribeConnectorEntityRequest.property.connectorProfileName"></a>

- *Type:* `string`

---

##### `connectorType`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowDescribeConnectorEntityRequest.property.connectorType"></a>

- *Type:* `string`

---

### AppflowDescribeConnectorEntityResponse <a name="aws-cdk-sdk.appflow.AppflowDescribeConnectorEntityResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowDescribeConnectorEntityResponse: appflow.AppflowDescribeConnectorEntityResponse = { ... }
```

##### `connectorEntityFields`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowDescribeConnectorEntityResponse.property.connectorEntityFields"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowConnectorEntityField`](#aws-cdk-sdk.appflow.AppflowConnectorEntityField)[]

---

### AppflowDescribeConnectorProfilesRequest <a name="aws-cdk-sdk.appflow.AppflowDescribeConnectorProfilesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowDescribeConnectorProfilesRequest: appflow.AppflowDescribeConnectorProfilesRequest = { ... }
```

##### `connectorProfileNames`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowDescribeConnectorProfilesRequest.property.connectorProfileNames"></a>

- *Type:* `string`[]

---

##### `connectorType`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowDescribeConnectorProfilesRequest.property.connectorType"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowDescribeConnectorProfilesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowDescribeConnectorProfilesRequest.property.nextToken"></a>

- *Type:* `string`

---

### AppflowDescribeConnectorProfilesResponse <a name="aws-cdk-sdk.appflow.AppflowDescribeConnectorProfilesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowDescribeConnectorProfilesResponse: appflow.AppflowDescribeConnectorProfilesResponse = { ... }
```

##### `connectorProfileDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowDescribeConnectorProfilesResponse.property.connectorProfileDetails"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowConnectorProfile`](#aws-cdk-sdk.appflow.AppflowConnectorProfile)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowDescribeConnectorProfilesResponse.property.nextToken"></a>

- *Type:* `string`

---

### AppflowDescribeConnectorsRequest <a name="aws-cdk-sdk.appflow.AppflowDescribeConnectorsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowDescribeConnectorsRequest: appflow.AppflowDescribeConnectorsRequest = { ... }
```

##### `connectorTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowDescribeConnectorsRequest.property.connectorTypes"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowDescribeConnectorsRequest.property.nextToken"></a>

- *Type:* `string`

---

### AppflowDescribeConnectorsResponse <a name="aws-cdk-sdk.appflow.AppflowDescribeConnectorsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowDescribeConnectorsResponse: appflow.AppflowDescribeConnectorsResponse = { ... }
```

##### `connectorConfigurations`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowDescribeConnectorsResponse.property.connectorConfigurations"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.appflow.AppflowConnectorConfiguration`](#aws-cdk-sdk.appflow.AppflowConnectorConfiguration)}

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowDescribeConnectorsResponse.property.nextToken"></a>

- *Type:* `string`

---

### AppflowDescribeFlowExecutionRecordsRequest <a name="aws-cdk-sdk.appflow.AppflowDescribeFlowExecutionRecordsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowDescribeFlowExecutionRecordsRequest: appflow.AppflowDescribeFlowExecutionRecordsRequest = { ... }
```

##### `flowName`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowDescribeFlowExecutionRecordsRequest.property.flowName"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowDescribeFlowExecutionRecordsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowDescribeFlowExecutionRecordsRequest.property.nextToken"></a>

- *Type:* `string`

---

### AppflowDescribeFlowExecutionRecordsResponse <a name="aws-cdk-sdk.appflow.AppflowDescribeFlowExecutionRecordsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowDescribeFlowExecutionRecordsResponse: appflow.AppflowDescribeFlowExecutionRecordsResponse = { ... }
```

##### `flowExecutions`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowDescribeFlowExecutionRecordsResponse.property.flowExecutions"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowExecutionRecord`](#aws-cdk-sdk.appflow.AppflowExecutionRecord)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowDescribeFlowExecutionRecordsResponse.property.nextToken"></a>

- *Type:* `string`

---

### AppflowDescribeFlowRequest <a name="aws-cdk-sdk.appflow.AppflowDescribeFlowRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowDescribeFlowRequest: appflow.AppflowDescribeFlowRequest = { ... }
```

##### `flowName`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowDescribeFlowRequest.property.flowName"></a>

- *Type:* `string`

---

### AppflowDescribeFlowResponse <a name="aws-cdk-sdk.appflow.AppflowDescribeFlowResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowDescribeFlowResponse: appflow.AppflowDescribeFlowResponse = { ... }
```

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowDescribeFlowResponse.property.createdAt"></a>

- *Type:* `string`

---

##### `createdBy`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowDescribeFlowResponse.property.createdBy"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowDescribeFlowResponse.property.description"></a>

- *Type:* `string`

---

##### `destinationFlowConfigList`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowDescribeFlowResponse.property.destinationFlowConfigList"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowDestinationFlowConfig`](#aws-cdk-sdk.appflow.AppflowDestinationFlowConfig)[]

---

##### `flowArn`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowDescribeFlowResponse.property.flowArn"></a>

- *Type:* `string`

---

##### `flowName`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowDescribeFlowResponse.property.flowName"></a>

- *Type:* `string`

---

##### `flowStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowDescribeFlowResponse.property.flowStatus"></a>

- *Type:* `string`

---

##### `flowStatusMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowDescribeFlowResponse.property.flowStatusMessage"></a>

- *Type:* `string`

---

##### `kmsArn`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowDescribeFlowResponse.property.kmsArn"></a>

- *Type:* `string`

---

##### `lastRunExecutionDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowDescribeFlowResponse.property.lastRunExecutionDetails"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowExecutionDetails`](#aws-cdk-sdk.appflow.AppflowExecutionDetails)

---

##### `lastUpdatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowDescribeFlowResponse.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `lastUpdatedBy`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowDescribeFlowResponse.property.lastUpdatedBy"></a>

- *Type:* `string`

---

##### `sourceFlowConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowDescribeFlowResponse.property.sourceFlowConfig"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowSourceFlowConfig`](#aws-cdk-sdk.appflow.AppflowSourceFlowConfig)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowDescribeFlowResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `tasks`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowDescribeFlowResponse.property.tasks"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowTask`](#aws-cdk-sdk.appflow.AppflowTask)[]

---

##### `triggerConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowDescribeFlowResponse.property.triggerConfig"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowTriggerConfig`](#aws-cdk-sdk.appflow.AppflowTriggerConfig)

---

### AppflowDestinationConnectorProperties <a name="aws-cdk-sdk.appflow.AppflowDestinationConnectorProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowDestinationConnectorProperties: appflow.AppflowDestinationConnectorProperties = { ... }
```

##### `eventBridge`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowDestinationConnectorProperties.property.eventBridge"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowEventBridgeDestinationProperties`](#aws-cdk-sdk.appflow.AppflowEventBridgeDestinationProperties)

---

##### `redshift`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowDestinationConnectorProperties.property.redshift"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowRedshiftDestinationProperties`](#aws-cdk-sdk.appflow.AppflowRedshiftDestinationProperties)

---

##### `s3`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowDestinationConnectorProperties.property.s3"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowS3DestinationProperties`](#aws-cdk-sdk.appflow.AppflowS3DestinationProperties)

---

##### `salesforce`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowDestinationConnectorProperties.property.salesforce"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowSalesforceDestinationProperties`](#aws-cdk-sdk.appflow.AppflowSalesforceDestinationProperties)

---

##### `snowflake`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowDestinationConnectorProperties.property.snowflake"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowSnowflakeDestinationProperties`](#aws-cdk-sdk.appflow.AppflowSnowflakeDestinationProperties)

---

##### `upsolver`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowDestinationConnectorProperties.property.upsolver"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowUpsolverDestinationProperties`](#aws-cdk-sdk.appflow.AppflowUpsolverDestinationProperties)

---

### AppflowDestinationFieldProperties <a name="aws-cdk-sdk.appflow.AppflowDestinationFieldProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowDestinationFieldProperties: appflow.AppflowDestinationFieldProperties = { ... }
```

##### `isCreatable`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowDestinationFieldProperties.property.isCreatable"></a>

- *Type:* `boolean`

---

##### `isNullable`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowDestinationFieldProperties.property.isNullable"></a>

- *Type:* `boolean`

---

##### `isUpdatable`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowDestinationFieldProperties.property.isUpdatable"></a>

- *Type:* `boolean`

---

##### `isUpsertable`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowDestinationFieldProperties.property.isUpsertable"></a>

- *Type:* `boolean`

---

##### `supportedWriteOperations`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowDestinationFieldProperties.property.supportedWriteOperations"></a>

- *Type:* `string`[]

---

### AppflowDestinationFlowConfig <a name="aws-cdk-sdk.appflow.AppflowDestinationFlowConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowDestinationFlowConfig: appflow.AppflowDestinationFlowConfig = { ... }
```

##### `connectorType`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowDestinationFlowConfig.property.connectorType"></a>

- *Type:* `string`

---

##### `destinationConnectorProperties`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowDestinationFlowConfig.property.destinationConnectorProperties"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowDestinationConnectorProperties`](#aws-cdk-sdk.appflow.AppflowDestinationConnectorProperties)

---

##### `connectorProfileName`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowDestinationFlowConfig.property.connectorProfileName"></a>

- *Type:* `string`

---

### AppflowDynatraceConnectorProfileCredentials <a name="aws-cdk-sdk.appflow.AppflowDynatraceConnectorProfileCredentials"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowDynatraceConnectorProfileCredentials: appflow.AppflowDynatraceConnectorProfileCredentials = { ... }
```

##### `apiToken`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowDynatraceConnectorProfileCredentials.property.apiToken"></a>

- *Type:* `string`

---

### AppflowDynatraceConnectorProfileProperties <a name="aws-cdk-sdk.appflow.AppflowDynatraceConnectorProfileProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowDynatraceConnectorProfileProperties: appflow.AppflowDynatraceConnectorProfileProperties = { ... }
```

##### `instanceUrl`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowDynatraceConnectorProfileProperties.property.instanceUrl"></a>

- *Type:* `string`

---

### AppflowDynatraceMetadata <a name="aws-cdk-sdk.appflow.AppflowDynatraceMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowDynatraceMetadata: appflow.AppflowDynatraceMetadata = { ... }
```

### AppflowDynatraceSourceProperties <a name="aws-cdk-sdk.appflow.AppflowDynatraceSourceProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowDynatraceSourceProperties: appflow.AppflowDynatraceSourceProperties = { ... }
```

##### `object`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowDynatraceSourceProperties.property.object"></a>

- *Type:* `string`

---

### AppflowErrorHandlingConfig <a name="aws-cdk-sdk.appflow.AppflowErrorHandlingConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowErrorHandlingConfig: appflow.AppflowErrorHandlingConfig = { ... }
```

##### `bucketName`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowErrorHandlingConfig.property.bucketName"></a>

- *Type:* `string`

---

##### `bucketPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowErrorHandlingConfig.property.bucketPrefix"></a>

- *Type:* `string`

---

##### `failOnFirstDestinationError`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowErrorHandlingConfig.property.failOnFirstDestinationError"></a>

- *Type:* `boolean`

---

### AppflowErrorInfo <a name="aws-cdk-sdk.appflow.AppflowErrorInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowErrorInfo: appflow.AppflowErrorInfo = { ... }
```

##### `executionMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowErrorInfo.property.executionMessage"></a>

- *Type:* `string`

---

##### `putFailuresCount`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowErrorInfo.property.putFailuresCount"></a>

- *Type:* `number`

---

### AppflowEventBridgeDestinationProperties <a name="aws-cdk-sdk.appflow.AppflowEventBridgeDestinationProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowEventBridgeDestinationProperties: appflow.AppflowEventBridgeDestinationProperties = { ... }
```

##### `object`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowEventBridgeDestinationProperties.property.object"></a>

- *Type:* `string`

---

##### `errorHandlingConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowEventBridgeDestinationProperties.property.errorHandlingConfig"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowErrorHandlingConfig`](#aws-cdk-sdk.appflow.AppflowErrorHandlingConfig)

---

### AppflowEventBridgeMetadata <a name="aws-cdk-sdk.appflow.AppflowEventBridgeMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowEventBridgeMetadata: appflow.AppflowEventBridgeMetadata = { ... }
```

### AppflowExecutionDetails <a name="aws-cdk-sdk.appflow.AppflowExecutionDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowExecutionDetails: appflow.AppflowExecutionDetails = { ... }
```

##### `mostRecentExecutionMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowExecutionDetails.property.mostRecentExecutionMessage"></a>

- *Type:* `string`

---

##### `mostRecentExecutionStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowExecutionDetails.property.mostRecentExecutionStatus"></a>

- *Type:* `string`

---

##### `mostRecentExecutionTime`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowExecutionDetails.property.mostRecentExecutionTime"></a>

- *Type:* `string`

---

### AppflowExecutionRecord <a name="aws-cdk-sdk.appflow.AppflowExecutionRecord"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowExecutionRecord: appflow.AppflowExecutionRecord = { ... }
```

##### `executionId`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowExecutionRecord.property.executionId"></a>

- *Type:* `string`

---

##### `executionResult`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowExecutionRecord.property.executionResult"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowExecutionResult`](#aws-cdk-sdk.appflow.AppflowExecutionResult)

---

##### `executionStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowExecutionRecord.property.executionStatus"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowExecutionRecord.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `startedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowExecutionRecord.property.startedAt"></a>

- *Type:* `string`

---

### AppflowExecutionResult <a name="aws-cdk-sdk.appflow.AppflowExecutionResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowExecutionResult: appflow.AppflowExecutionResult = { ... }
```

##### `bytesProcessed`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowExecutionResult.property.bytesProcessed"></a>

- *Type:* `number`

---

##### `bytesWritten`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowExecutionResult.property.bytesWritten"></a>

- *Type:* `number`

---

##### `errorInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowExecutionResult.property.errorInfo"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowErrorInfo`](#aws-cdk-sdk.appflow.AppflowErrorInfo)

---

##### `recordsProcessed`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowExecutionResult.property.recordsProcessed"></a>

- *Type:* `number`

---

### AppflowFieldTypeDetails <a name="aws-cdk-sdk.appflow.AppflowFieldTypeDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowFieldTypeDetails: appflow.AppflowFieldTypeDetails = { ... }
```

##### `fieldType`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowFieldTypeDetails.property.fieldType"></a>

- *Type:* `string`

---

##### `filterOperators`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowFieldTypeDetails.property.filterOperators"></a>

- *Type:* `string`[]

---

##### `supportedValues`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowFieldTypeDetails.property.supportedValues"></a>

- *Type:* `string`[]

---

### AppflowFlowDefinition <a name="aws-cdk-sdk.appflow.AppflowFlowDefinition"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowFlowDefinition: appflow.AppflowFlowDefinition = { ... }
```

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowFlowDefinition.property.createdAt"></a>

- *Type:* `string`

---

##### `createdBy`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowFlowDefinition.property.createdBy"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowFlowDefinition.property.description"></a>

- *Type:* `string`

---

##### `destinationConnectorType`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowFlowDefinition.property.destinationConnectorType"></a>

- *Type:* `string`

---

##### `flowArn`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowFlowDefinition.property.flowArn"></a>

- *Type:* `string`

---

##### `flowName`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowFlowDefinition.property.flowName"></a>

- *Type:* `string`

---

##### `flowStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowFlowDefinition.property.flowStatus"></a>

- *Type:* `string`

---

##### `lastRunExecutionDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowFlowDefinition.property.lastRunExecutionDetails"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowExecutionDetails`](#aws-cdk-sdk.appflow.AppflowExecutionDetails)

---

##### `lastUpdatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowFlowDefinition.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `lastUpdatedBy`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowFlowDefinition.property.lastUpdatedBy"></a>

- *Type:* `string`

---

##### `sourceConnectorType`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowFlowDefinition.property.sourceConnectorType"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowFlowDefinition.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `triggerType`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowFlowDefinition.property.triggerType"></a>

- *Type:* `string`

---

### AppflowGoogleAnalyticsConnectorProfileCredentials <a name="aws-cdk-sdk.appflow.AppflowGoogleAnalyticsConnectorProfileCredentials"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowGoogleAnalyticsConnectorProfileCredentials: appflow.AppflowGoogleAnalyticsConnectorProfileCredentials = { ... }
```

##### `clientId`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowGoogleAnalyticsConnectorProfileCredentials.property.clientId"></a>

- *Type:* `string`

---

##### `clientSecret`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowGoogleAnalyticsConnectorProfileCredentials.property.clientSecret"></a>

- *Type:* `string`

---

##### `accessToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowGoogleAnalyticsConnectorProfileCredentials.property.accessToken"></a>

- *Type:* `string`

---

##### `oAuthRequest`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowGoogleAnalyticsConnectorProfileCredentials.property.oAuthRequest"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowConnectorOAuthRequest`](#aws-cdk-sdk.appflow.AppflowConnectorOAuthRequest)

---

##### `refreshToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowGoogleAnalyticsConnectorProfileCredentials.property.refreshToken"></a>

- *Type:* `string`

---

### AppflowGoogleAnalyticsConnectorProfileProperties <a name="aws-cdk-sdk.appflow.AppflowGoogleAnalyticsConnectorProfileProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowGoogleAnalyticsConnectorProfileProperties: appflow.AppflowGoogleAnalyticsConnectorProfileProperties = { ... }
```

### AppflowGoogleAnalyticsMetadata <a name="aws-cdk-sdk.appflow.AppflowGoogleAnalyticsMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowGoogleAnalyticsMetadata: appflow.AppflowGoogleAnalyticsMetadata = { ... }
```

##### `oAuthScopes`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowGoogleAnalyticsMetadata.property.oAuthScopes"></a>

- *Type:* `string`[]

---

### AppflowGoogleAnalyticsSourceProperties <a name="aws-cdk-sdk.appflow.AppflowGoogleAnalyticsSourceProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowGoogleAnalyticsSourceProperties: appflow.AppflowGoogleAnalyticsSourceProperties = { ... }
```

##### `object`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowGoogleAnalyticsSourceProperties.property.object"></a>

- *Type:* `string`

---

### AppflowIncrementalPullConfig <a name="aws-cdk-sdk.appflow.AppflowIncrementalPullConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowIncrementalPullConfig: appflow.AppflowIncrementalPullConfig = { ... }
```

##### `datetimeTypeFieldName`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowIncrementalPullConfig.property.datetimeTypeFieldName"></a>

- *Type:* `string`

---

### AppflowInforNexusConnectorProfileCredentials <a name="aws-cdk-sdk.appflow.AppflowInforNexusConnectorProfileCredentials"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowInforNexusConnectorProfileCredentials: appflow.AppflowInforNexusConnectorProfileCredentials = { ... }
```

##### `accessKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowInforNexusConnectorProfileCredentials.property.accessKeyId"></a>

- *Type:* `string`

---

##### `datakey`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowInforNexusConnectorProfileCredentials.property.datakey"></a>

- *Type:* `string`

---

##### `secretAccessKey`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowInforNexusConnectorProfileCredentials.property.secretAccessKey"></a>

- *Type:* `string`

---

##### `userId`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowInforNexusConnectorProfileCredentials.property.userId"></a>

- *Type:* `string`

---

### AppflowInforNexusConnectorProfileProperties <a name="aws-cdk-sdk.appflow.AppflowInforNexusConnectorProfileProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowInforNexusConnectorProfileProperties: appflow.AppflowInforNexusConnectorProfileProperties = { ... }
```

##### `instanceUrl`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowInforNexusConnectorProfileProperties.property.instanceUrl"></a>

- *Type:* `string`

---

### AppflowInforNexusMetadata <a name="aws-cdk-sdk.appflow.AppflowInforNexusMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowInforNexusMetadata: appflow.AppflowInforNexusMetadata = { ... }
```

### AppflowInforNexusSourceProperties <a name="aws-cdk-sdk.appflow.AppflowInforNexusSourceProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowInforNexusSourceProperties: appflow.AppflowInforNexusSourceProperties = { ... }
```

##### `object`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowInforNexusSourceProperties.property.object"></a>

- *Type:* `string`

---

### AppflowListConnectorEntitiesRequest <a name="aws-cdk-sdk.appflow.AppflowListConnectorEntitiesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowListConnectorEntitiesRequest: appflow.AppflowListConnectorEntitiesRequest = { ... }
```

##### `connectorProfileName`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowListConnectorEntitiesRequest.property.connectorProfileName"></a>

- *Type:* `string`

---

##### `connectorType`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowListConnectorEntitiesRequest.property.connectorType"></a>

- *Type:* `string`

---

##### `entitiesPath`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowListConnectorEntitiesRequest.property.entitiesPath"></a>

- *Type:* `string`

---

### AppflowListConnectorEntitiesResponse <a name="aws-cdk-sdk.appflow.AppflowListConnectorEntitiesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowListConnectorEntitiesResponse: appflow.AppflowListConnectorEntitiesResponse = { ... }
```

##### `connectorEntityMap`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowListConnectorEntitiesResponse.property.connectorEntityMap"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.appflow.AppflowConnectorEntity`](#aws-cdk-sdk.appflow.AppflowConnectorEntity)[]}

---

### AppflowListFlowsRequest <a name="aws-cdk-sdk.appflow.AppflowListFlowsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowListFlowsRequest: appflow.AppflowListFlowsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowListFlowsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowListFlowsRequest.property.nextToken"></a>

- *Type:* `string`

---

### AppflowListFlowsResponse <a name="aws-cdk-sdk.appflow.AppflowListFlowsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowListFlowsResponse: appflow.AppflowListFlowsResponse = { ... }
```

##### `flows`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowListFlowsResponse.property.flows"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowFlowDefinition`](#aws-cdk-sdk.appflow.AppflowFlowDefinition)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowListFlowsResponse.property.nextToken"></a>

- *Type:* `string`

---

### AppflowListTagsForResourceRequest <a name="aws-cdk-sdk.appflow.AppflowListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowListTagsForResourceRequest: appflow.AppflowListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### AppflowListTagsForResourceResponse <a name="aws-cdk-sdk.appflow.AppflowListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowListTagsForResourceResponse: appflow.AppflowListTagsForResourceResponse = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowListTagsForResourceResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### AppflowMarketoConnectorProfileCredentials <a name="aws-cdk-sdk.appflow.AppflowMarketoConnectorProfileCredentials"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowMarketoConnectorProfileCredentials: appflow.AppflowMarketoConnectorProfileCredentials = { ... }
```

##### `clientId`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowMarketoConnectorProfileCredentials.property.clientId"></a>

- *Type:* `string`

---

##### `clientSecret`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowMarketoConnectorProfileCredentials.property.clientSecret"></a>

- *Type:* `string`

---

##### `accessToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowMarketoConnectorProfileCredentials.property.accessToken"></a>

- *Type:* `string`

---

##### `oAuthRequest`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowMarketoConnectorProfileCredentials.property.oAuthRequest"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowConnectorOAuthRequest`](#aws-cdk-sdk.appflow.AppflowConnectorOAuthRequest)

---

### AppflowMarketoConnectorProfileProperties <a name="aws-cdk-sdk.appflow.AppflowMarketoConnectorProfileProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowMarketoConnectorProfileProperties: appflow.AppflowMarketoConnectorProfileProperties = { ... }
```

##### `instanceUrl`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowMarketoConnectorProfileProperties.property.instanceUrl"></a>

- *Type:* `string`

---

### AppflowMarketoMetadata <a name="aws-cdk-sdk.appflow.AppflowMarketoMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowMarketoMetadata: appflow.AppflowMarketoMetadata = { ... }
```

### AppflowMarketoSourceProperties <a name="aws-cdk-sdk.appflow.AppflowMarketoSourceProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowMarketoSourceProperties: appflow.AppflowMarketoSourceProperties = { ... }
```

##### `object`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowMarketoSourceProperties.property.object"></a>

- *Type:* `string`

---

### AppflowPrefixConfig <a name="aws-cdk-sdk.appflow.AppflowPrefixConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowPrefixConfig: appflow.AppflowPrefixConfig = { ... }
```

##### `prefixFormat`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowPrefixConfig.property.prefixFormat"></a>

- *Type:* `string`

---

##### `prefixType`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowPrefixConfig.property.prefixType"></a>

- *Type:* `string`

---

### AppflowRedshiftConnectorProfileCredentials <a name="aws-cdk-sdk.appflow.AppflowRedshiftConnectorProfileCredentials"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowRedshiftConnectorProfileCredentials: appflow.AppflowRedshiftConnectorProfileCredentials = { ... }
```

##### `password`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowRedshiftConnectorProfileCredentials.property.password"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowRedshiftConnectorProfileCredentials.property.username"></a>

- *Type:* `string`

---

### AppflowRedshiftConnectorProfileProperties <a name="aws-cdk-sdk.appflow.AppflowRedshiftConnectorProfileProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowRedshiftConnectorProfileProperties: appflow.AppflowRedshiftConnectorProfileProperties = { ... }
```

##### `bucketName`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowRedshiftConnectorProfileProperties.property.bucketName"></a>

- *Type:* `string`

---

##### `databaseUrl`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowRedshiftConnectorProfileProperties.property.databaseUrl"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowRedshiftConnectorProfileProperties.property.roleArn"></a>

- *Type:* `string`

---

##### `bucketPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowRedshiftConnectorProfileProperties.property.bucketPrefix"></a>

- *Type:* `string`

---

### AppflowRedshiftDestinationProperties <a name="aws-cdk-sdk.appflow.AppflowRedshiftDestinationProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowRedshiftDestinationProperties: appflow.AppflowRedshiftDestinationProperties = { ... }
```

##### `intermediateBucketName`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowRedshiftDestinationProperties.property.intermediateBucketName"></a>

- *Type:* `string`

---

##### `object`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowRedshiftDestinationProperties.property.object"></a>

- *Type:* `string`

---

##### `bucketPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowRedshiftDestinationProperties.property.bucketPrefix"></a>

- *Type:* `string`

---

##### `errorHandlingConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowRedshiftDestinationProperties.property.errorHandlingConfig"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowErrorHandlingConfig`](#aws-cdk-sdk.appflow.AppflowErrorHandlingConfig)

---

### AppflowRedshiftMetadata <a name="aws-cdk-sdk.appflow.AppflowRedshiftMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowRedshiftMetadata: appflow.AppflowRedshiftMetadata = { ... }
```

### AppflowS3DestinationProperties <a name="aws-cdk-sdk.appflow.AppflowS3DestinationProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowS3DestinationProperties: appflow.AppflowS3DestinationProperties = { ... }
```

##### `bucketName`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowS3DestinationProperties.property.bucketName"></a>

- *Type:* `string`

---

##### `bucketPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowS3DestinationProperties.property.bucketPrefix"></a>

- *Type:* `string`

---

##### `s3OutputFormatConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowS3DestinationProperties.property.s3OutputFormatConfig"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowS3OutputFormatConfig`](#aws-cdk-sdk.appflow.AppflowS3OutputFormatConfig)

---

### AppflowS3Metadata <a name="aws-cdk-sdk.appflow.AppflowS3Metadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowS3Metadata: appflow.AppflowS3Metadata = { ... }
```

### AppflowS3OutputFormatConfig <a name="aws-cdk-sdk.appflow.AppflowS3OutputFormatConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowS3OutputFormatConfig: appflow.AppflowS3OutputFormatConfig = { ... }
```

##### `aggregationConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowS3OutputFormatConfig.property.aggregationConfig"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowAggregationConfig`](#aws-cdk-sdk.appflow.AppflowAggregationConfig)

---

##### `fileType`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowS3OutputFormatConfig.property.fileType"></a>

- *Type:* `string`

---

##### `prefixConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowS3OutputFormatConfig.property.prefixConfig"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowPrefixConfig`](#aws-cdk-sdk.appflow.AppflowPrefixConfig)

---

### AppflowS3SourceProperties <a name="aws-cdk-sdk.appflow.AppflowS3SourceProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowS3SourceProperties: appflow.AppflowS3SourceProperties = { ... }
```

##### `bucketName`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowS3SourceProperties.property.bucketName"></a>

- *Type:* `string`

---

##### `bucketPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowS3SourceProperties.property.bucketPrefix"></a>

- *Type:* `string`

---

### AppflowSalesforceConnectorProfileCredentials <a name="aws-cdk-sdk.appflow.AppflowSalesforceConnectorProfileCredentials"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowSalesforceConnectorProfileCredentials: appflow.AppflowSalesforceConnectorProfileCredentials = { ... }
```

##### `accessToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowSalesforceConnectorProfileCredentials.property.accessToken"></a>

- *Type:* `string`

---

##### `clientCredentialsArn`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowSalesforceConnectorProfileCredentials.property.clientCredentialsArn"></a>

- *Type:* `string`

---

##### `oAuthRequest`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowSalesforceConnectorProfileCredentials.property.oAuthRequest"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowConnectorOAuthRequest`](#aws-cdk-sdk.appflow.AppflowConnectorOAuthRequest)

---

##### `refreshToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowSalesforceConnectorProfileCredentials.property.refreshToken"></a>

- *Type:* `string`

---

### AppflowSalesforceConnectorProfileProperties <a name="aws-cdk-sdk.appflow.AppflowSalesforceConnectorProfileProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowSalesforceConnectorProfileProperties: appflow.AppflowSalesforceConnectorProfileProperties = { ... }
```

##### `instanceUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowSalesforceConnectorProfileProperties.property.instanceUrl"></a>

- *Type:* `string`

---

##### `isSandboxEnvironment`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowSalesforceConnectorProfileProperties.property.isSandboxEnvironment"></a>

- *Type:* `boolean`

---

### AppflowSalesforceDestinationProperties <a name="aws-cdk-sdk.appflow.AppflowSalesforceDestinationProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowSalesforceDestinationProperties: appflow.AppflowSalesforceDestinationProperties = { ... }
```

##### `object`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowSalesforceDestinationProperties.property.object"></a>

- *Type:* `string`

---

##### `errorHandlingConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowSalesforceDestinationProperties.property.errorHandlingConfig"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowErrorHandlingConfig`](#aws-cdk-sdk.appflow.AppflowErrorHandlingConfig)

---

##### `idFieldNames`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowSalesforceDestinationProperties.property.idFieldNames"></a>

- *Type:* `string`[]

---

##### `writeOperationType`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowSalesforceDestinationProperties.property.writeOperationType"></a>

- *Type:* `string`

---

### AppflowSalesforceMetadata <a name="aws-cdk-sdk.appflow.AppflowSalesforceMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowSalesforceMetadata: appflow.AppflowSalesforceMetadata = { ... }
```

##### `oAuthScopes`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowSalesforceMetadata.property.oAuthScopes"></a>

- *Type:* `string`[]

---

### AppflowSalesforceSourceProperties <a name="aws-cdk-sdk.appflow.AppflowSalesforceSourceProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowSalesforceSourceProperties: appflow.AppflowSalesforceSourceProperties = { ... }
```

##### `object`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowSalesforceSourceProperties.property.object"></a>

- *Type:* `string`

---

##### `enableDynamicFieldUpdate`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowSalesforceSourceProperties.property.enableDynamicFieldUpdate"></a>

- *Type:* `boolean`

---

##### `includeDeletedRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowSalesforceSourceProperties.property.includeDeletedRecords"></a>

- *Type:* `boolean`

---

### AppflowScheduledTriggerProperties <a name="aws-cdk-sdk.appflow.AppflowScheduledTriggerProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowScheduledTriggerProperties: appflow.AppflowScheduledTriggerProperties = { ... }
```

##### `scheduleExpression`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowScheduledTriggerProperties.property.scheduleExpression"></a>

- *Type:* `string`

---

##### `dataPullMode`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowScheduledTriggerProperties.property.dataPullMode"></a>

- *Type:* `string`

---

##### `scheduleEndTime`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowScheduledTriggerProperties.property.scheduleEndTime"></a>

- *Type:* `string`

---

##### `scheduleStartTime`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowScheduledTriggerProperties.property.scheduleStartTime"></a>

- *Type:* `string`

---

##### `timezone`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowScheduledTriggerProperties.property.timezone"></a>

- *Type:* `string`

---

### AppflowServiceNowConnectorProfileCredentials <a name="aws-cdk-sdk.appflow.AppflowServiceNowConnectorProfileCredentials"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowServiceNowConnectorProfileCredentials: appflow.AppflowServiceNowConnectorProfileCredentials = { ... }
```

##### `password`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowServiceNowConnectorProfileCredentials.property.password"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowServiceNowConnectorProfileCredentials.property.username"></a>

- *Type:* `string`

---

### AppflowServiceNowConnectorProfileProperties <a name="aws-cdk-sdk.appflow.AppflowServiceNowConnectorProfileProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowServiceNowConnectorProfileProperties: appflow.AppflowServiceNowConnectorProfileProperties = { ... }
```

##### `instanceUrl`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowServiceNowConnectorProfileProperties.property.instanceUrl"></a>

- *Type:* `string`

---

### AppflowServiceNowMetadata <a name="aws-cdk-sdk.appflow.AppflowServiceNowMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowServiceNowMetadata: appflow.AppflowServiceNowMetadata = { ... }
```

### AppflowServiceNowSourceProperties <a name="aws-cdk-sdk.appflow.AppflowServiceNowSourceProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowServiceNowSourceProperties: appflow.AppflowServiceNowSourceProperties = { ... }
```

##### `object`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowServiceNowSourceProperties.property.object"></a>

- *Type:* `string`

---

### AppflowSingularConnectorProfileCredentials <a name="aws-cdk-sdk.appflow.AppflowSingularConnectorProfileCredentials"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowSingularConnectorProfileCredentials: appflow.AppflowSingularConnectorProfileCredentials = { ... }
```

##### `apiKey`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowSingularConnectorProfileCredentials.property.apiKey"></a>

- *Type:* `string`

---

### AppflowSingularConnectorProfileProperties <a name="aws-cdk-sdk.appflow.AppflowSingularConnectorProfileProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowSingularConnectorProfileProperties: appflow.AppflowSingularConnectorProfileProperties = { ... }
```

### AppflowSingularMetadata <a name="aws-cdk-sdk.appflow.AppflowSingularMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowSingularMetadata: appflow.AppflowSingularMetadata = { ... }
```

### AppflowSingularSourceProperties <a name="aws-cdk-sdk.appflow.AppflowSingularSourceProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowSingularSourceProperties: appflow.AppflowSingularSourceProperties = { ... }
```

##### `object`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowSingularSourceProperties.property.object"></a>

- *Type:* `string`

---

### AppflowSlackConnectorProfileCredentials <a name="aws-cdk-sdk.appflow.AppflowSlackConnectorProfileCredentials"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowSlackConnectorProfileCredentials: appflow.AppflowSlackConnectorProfileCredentials = { ... }
```

##### `clientId`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowSlackConnectorProfileCredentials.property.clientId"></a>

- *Type:* `string`

---

##### `clientSecret`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowSlackConnectorProfileCredentials.property.clientSecret"></a>

- *Type:* `string`

---

##### `accessToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowSlackConnectorProfileCredentials.property.accessToken"></a>

- *Type:* `string`

---

##### `oAuthRequest`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowSlackConnectorProfileCredentials.property.oAuthRequest"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowConnectorOAuthRequest`](#aws-cdk-sdk.appflow.AppflowConnectorOAuthRequest)

---

### AppflowSlackConnectorProfileProperties <a name="aws-cdk-sdk.appflow.AppflowSlackConnectorProfileProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowSlackConnectorProfileProperties: appflow.AppflowSlackConnectorProfileProperties = { ... }
```

##### `instanceUrl`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowSlackConnectorProfileProperties.property.instanceUrl"></a>

- *Type:* `string`

---

### AppflowSlackMetadata <a name="aws-cdk-sdk.appflow.AppflowSlackMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowSlackMetadata: appflow.AppflowSlackMetadata = { ... }
```

##### `oAuthScopes`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowSlackMetadata.property.oAuthScopes"></a>

- *Type:* `string`[]

---

### AppflowSlackSourceProperties <a name="aws-cdk-sdk.appflow.AppflowSlackSourceProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowSlackSourceProperties: appflow.AppflowSlackSourceProperties = { ... }
```

##### `object`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowSlackSourceProperties.property.object"></a>

- *Type:* `string`

---

### AppflowSnowflakeConnectorProfileCredentials <a name="aws-cdk-sdk.appflow.AppflowSnowflakeConnectorProfileCredentials"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowSnowflakeConnectorProfileCredentials: appflow.AppflowSnowflakeConnectorProfileCredentials = { ... }
```

##### `password`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowSnowflakeConnectorProfileCredentials.property.password"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowSnowflakeConnectorProfileCredentials.property.username"></a>

- *Type:* `string`

---

### AppflowSnowflakeConnectorProfileProperties <a name="aws-cdk-sdk.appflow.AppflowSnowflakeConnectorProfileProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowSnowflakeConnectorProfileProperties: appflow.AppflowSnowflakeConnectorProfileProperties = { ... }
```

##### `bucketName`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowSnowflakeConnectorProfileProperties.property.bucketName"></a>

- *Type:* `string`

---

##### `stage`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowSnowflakeConnectorProfileProperties.property.stage"></a>

- *Type:* `string`

---

##### `warehouse`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowSnowflakeConnectorProfileProperties.property.warehouse"></a>

- *Type:* `string`

---

##### `accountName`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowSnowflakeConnectorProfileProperties.property.accountName"></a>

- *Type:* `string`

---

##### `bucketPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowSnowflakeConnectorProfileProperties.property.bucketPrefix"></a>

- *Type:* `string`

---

##### `privateLinkServiceName`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowSnowflakeConnectorProfileProperties.property.privateLinkServiceName"></a>

- *Type:* `string`

---

##### `region`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowSnowflakeConnectorProfileProperties.property.region"></a>

- *Type:* `string`

---

### AppflowSnowflakeDestinationProperties <a name="aws-cdk-sdk.appflow.AppflowSnowflakeDestinationProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowSnowflakeDestinationProperties: appflow.AppflowSnowflakeDestinationProperties = { ... }
```

##### `intermediateBucketName`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowSnowflakeDestinationProperties.property.intermediateBucketName"></a>

- *Type:* `string`

---

##### `object`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowSnowflakeDestinationProperties.property.object"></a>

- *Type:* `string`

---

##### `bucketPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowSnowflakeDestinationProperties.property.bucketPrefix"></a>

- *Type:* `string`

---

##### `errorHandlingConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowSnowflakeDestinationProperties.property.errorHandlingConfig"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowErrorHandlingConfig`](#aws-cdk-sdk.appflow.AppflowErrorHandlingConfig)

---

### AppflowSnowflakeMetadata <a name="aws-cdk-sdk.appflow.AppflowSnowflakeMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowSnowflakeMetadata: appflow.AppflowSnowflakeMetadata = { ... }
```

##### `supportedRegions`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowSnowflakeMetadata.property.supportedRegions"></a>

- *Type:* `string`[]

---

### AppflowSourceConnectorProperties <a name="aws-cdk-sdk.appflow.AppflowSourceConnectorProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowSourceConnectorProperties: appflow.AppflowSourceConnectorProperties = { ... }
```

##### `amplitude`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowSourceConnectorProperties.property.amplitude"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowAmplitudeSourceProperties`](#aws-cdk-sdk.appflow.AppflowAmplitudeSourceProperties)

---

##### `datadog`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowSourceConnectorProperties.property.datadog"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowDatadogSourceProperties`](#aws-cdk-sdk.appflow.AppflowDatadogSourceProperties)

---

##### `dynatrace`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowSourceConnectorProperties.property.dynatrace"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowDynatraceSourceProperties`](#aws-cdk-sdk.appflow.AppflowDynatraceSourceProperties)

---

##### `googleAnalytics`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowSourceConnectorProperties.property.googleAnalytics"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowGoogleAnalyticsSourceProperties`](#aws-cdk-sdk.appflow.AppflowGoogleAnalyticsSourceProperties)

---

##### `inforNexus`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowSourceConnectorProperties.property.inforNexus"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowInforNexusSourceProperties`](#aws-cdk-sdk.appflow.AppflowInforNexusSourceProperties)

---

##### `marketo`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowSourceConnectorProperties.property.marketo"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowMarketoSourceProperties`](#aws-cdk-sdk.appflow.AppflowMarketoSourceProperties)

---

##### `s3`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowSourceConnectorProperties.property.s3"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowS3SourceProperties`](#aws-cdk-sdk.appflow.AppflowS3SourceProperties)

---

##### `salesforce`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowSourceConnectorProperties.property.salesforce"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowSalesforceSourceProperties`](#aws-cdk-sdk.appflow.AppflowSalesforceSourceProperties)

---

##### `serviceNow`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowSourceConnectorProperties.property.serviceNow"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowServiceNowSourceProperties`](#aws-cdk-sdk.appflow.AppflowServiceNowSourceProperties)

---

##### `singular`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowSourceConnectorProperties.property.singular"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowSingularSourceProperties`](#aws-cdk-sdk.appflow.AppflowSingularSourceProperties)

---

##### `slack`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowSourceConnectorProperties.property.slack"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowSlackSourceProperties`](#aws-cdk-sdk.appflow.AppflowSlackSourceProperties)

---

##### `trendmicro`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowSourceConnectorProperties.property.trendmicro"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowTrendmicroSourceProperties`](#aws-cdk-sdk.appflow.AppflowTrendmicroSourceProperties)

---

##### `veeva`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowSourceConnectorProperties.property.veeva"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowVeevaSourceProperties`](#aws-cdk-sdk.appflow.AppflowVeevaSourceProperties)

---

##### `zendesk`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowSourceConnectorProperties.property.zendesk"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowZendeskSourceProperties`](#aws-cdk-sdk.appflow.AppflowZendeskSourceProperties)

---

### AppflowSourceFieldProperties <a name="aws-cdk-sdk.appflow.AppflowSourceFieldProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowSourceFieldProperties: appflow.AppflowSourceFieldProperties = { ... }
```

##### `isQueryable`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowSourceFieldProperties.property.isQueryable"></a>

- *Type:* `boolean`

---

##### `isRetrievable`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowSourceFieldProperties.property.isRetrievable"></a>

- *Type:* `boolean`

---

### AppflowSourceFlowConfig <a name="aws-cdk-sdk.appflow.AppflowSourceFlowConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowSourceFlowConfig: appflow.AppflowSourceFlowConfig = { ... }
```

##### `connectorType`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowSourceFlowConfig.property.connectorType"></a>

- *Type:* `string`

---

##### `sourceConnectorProperties`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowSourceFlowConfig.property.sourceConnectorProperties"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowSourceConnectorProperties`](#aws-cdk-sdk.appflow.AppflowSourceConnectorProperties)

---

##### `connectorProfileName`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowSourceFlowConfig.property.connectorProfileName"></a>

- *Type:* `string`

---

##### `incrementalPullConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowSourceFlowConfig.property.incrementalPullConfig"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowIncrementalPullConfig`](#aws-cdk-sdk.appflow.AppflowIncrementalPullConfig)

---

### AppflowStartFlowRequest <a name="aws-cdk-sdk.appflow.AppflowStartFlowRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowStartFlowRequest: appflow.AppflowStartFlowRequest = { ... }
```

##### `flowName`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowStartFlowRequest.property.flowName"></a>

- *Type:* `string`

---

### AppflowStartFlowResponse <a name="aws-cdk-sdk.appflow.AppflowStartFlowResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowStartFlowResponse: appflow.AppflowStartFlowResponse = { ... }
```

##### `executionId`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowStartFlowResponse.property.executionId"></a>

- *Type:* `string`

---

##### `flowArn`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowStartFlowResponse.property.flowArn"></a>

- *Type:* `string`

---

##### `flowStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowStartFlowResponse.property.flowStatus"></a>

- *Type:* `string`

---

### AppflowStopFlowRequest <a name="aws-cdk-sdk.appflow.AppflowStopFlowRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowStopFlowRequest: appflow.AppflowStopFlowRequest = { ... }
```

##### `flowName`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowStopFlowRequest.property.flowName"></a>

- *Type:* `string`

---

### AppflowStopFlowResponse <a name="aws-cdk-sdk.appflow.AppflowStopFlowResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowStopFlowResponse: appflow.AppflowStopFlowResponse = { ... }
```

##### `flowArn`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowStopFlowResponse.property.flowArn"></a>

- *Type:* `string`

---

##### `flowStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowStopFlowResponse.property.flowStatus"></a>

- *Type:* `string`

---

### AppflowSupportedFieldTypeDetails <a name="aws-cdk-sdk.appflow.AppflowSupportedFieldTypeDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowSupportedFieldTypeDetails: appflow.AppflowSupportedFieldTypeDetails = { ... }
```

##### `v1`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowSupportedFieldTypeDetails.property.v1"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowFieldTypeDetails`](#aws-cdk-sdk.appflow.AppflowFieldTypeDetails)

---

### AppflowTagResourceRequest <a name="aws-cdk-sdk.appflow.AppflowTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowTagResourceRequest: appflow.AppflowTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowTagResourceRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### AppflowTagResourceResponse <a name="aws-cdk-sdk.appflow.AppflowTagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowTagResourceResponse: appflow.AppflowTagResourceResponse = { ... }
```

### AppflowTask <a name="aws-cdk-sdk.appflow.AppflowTask"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowTask: appflow.AppflowTask = { ... }
```

##### `sourceFields`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowTask.property.sourceFields"></a>

- *Type:* `string`[]

---

##### `taskType`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowTask.property.taskType"></a>

- *Type:* `string`

---

##### `connectorOperator`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowTask.property.connectorOperator"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowConnectorOperator`](#aws-cdk-sdk.appflow.AppflowConnectorOperator)

---

##### `destinationField`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowTask.property.destinationField"></a>

- *Type:* `string`

---

##### `taskProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowTask.property.taskProperties"></a>

- *Type:* {[ key: string ]: `string`}

---

### AppflowTrendmicroConnectorProfileCredentials <a name="aws-cdk-sdk.appflow.AppflowTrendmicroConnectorProfileCredentials"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowTrendmicroConnectorProfileCredentials: appflow.AppflowTrendmicroConnectorProfileCredentials = { ... }
```

##### `apiSecretKey`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowTrendmicroConnectorProfileCredentials.property.apiSecretKey"></a>

- *Type:* `string`

---

### AppflowTrendmicroConnectorProfileProperties <a name="aws-cdk-sdk.appflow.AppflowTrendmicroConnectorProfileProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowTrendmicroConnectorProfileProperties: appflow.AppflowTrendmicroConnectorProfileProperties = { ... }
```

### AppflowTrendmicroMetadata <a name="aws-cdk-sdk.appflow.AppflowTrendmicroMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowTrendmicroMetadata: appflow.AppflowTrendmicroMetadata = { ... }
```

### AppflowTrendmicroSourceProperties <a name="aws-cdk-sdk.appflow.AppflowTrendmicroSourceProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowTrendmicroSourceProperties: appflow.AppflowTrendmicroSourceProperties = { ... }
```

##### `object`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowTrendmicroSourceProperties.property.object"></a>

- *Type:* `string`

---

### AppflowTriggerConfig <a name="aws-cdk-sdk.appflow.AppflowTriggerConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowTriggerConfig: appflow.AppflowTriggerConfig = { ... }
```

##### `triggerType`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowTriggerConfig.property.triggerType"></a>

- *Type:* `string`

---

##### `triggerProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowTriggerConfig.property.triggerProperties"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowTriggerProperties`](#aws-cdk-sdk.appflow.AppflowTriggerProperties)

---

### AppflowTriggerProperties <a name="aws-cdk-sdk.appflow.AppflowTriggerProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowTriggerProperties: appflow.AppflowTriggerProperties = { ... }
```

##### `scheduled`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowTriggerProperties.property.scheduled"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowScheduledTriggerProperties`](#aws-cdk-sdk.appflow.AppflowScheduledTriggerProperties)

---

### AppflowUntagResourceRequest <a name="aws-cdk-sdk.appflow.AppflowUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowUntagResourceRequest: appflow.AppflowUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### AppflowUntagResourceResponse <a name="aws-cdk-sdk.appflow.AppflowUntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowUntagResourceResponse: appflow.AppflowUntagResourceResponse = { ... }
```

### AppflowUpdateConnectorProfileRequest <a name="aws-cdk-sdk.appflow.AppflowUpdateConnectorProfileRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowUpdateConnectorProfileRequest: appflow.AppflowUpdateConnectorProfileRequest = { ... }
```

##### `connectionMode`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowUpdateConnectorProfileRequest.property.connectionMode"></a>

- *Type:* `string`

---

##### `connectorProfileConfig`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowUpdateConnectorProfileRequest.property.connectorProfileConfig"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowConnectorProfileConfig`](#aws-cdk-sdk.appflow.AppflowConnectorProfileConfig)

---

##### `connectorProfileName`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowUpdateConnectorProfileRequest.property.connectorProfileName"></a>

- *Type:* `string`

---

### AppflowUpdateConnectorProfileResponse <a name="aws-cdk-sdk.appflow.AppflowUpdateConnectorProfileResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowUpdateConnectorProfileResponse: appflow.AppflowUpdateConnectorProfileResponse = { ... }
```

##### `connectorProfileArn`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowUpdateConnectorProfileResponse.property.connectorProfileArn"></a>

- *Type:* `string`

---

### AppflowUpdateFlowRequest <a name="aws-cdk-sdk.appflow.AppflowUpdateFlowRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowUpdateFlowRequest: appflow.AppflowUpdateFlowRequest = { ... }
```

##### `destinationFlowConfigList`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowUpdateFlowRequest.property.destinationFlowConfigList"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowDestinationFlowConfig`](#aws-cdk-sdk.appflow.AppflowDestinationFlowConfig)[]

---

##### `flowName`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowUpdateFlowRequest.property.flowName"></a>

- *Type:* `string`

---

##### `tasks`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowUpdateFlowRequest.property.tasks"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowTask`](#aws-cdk-sdk.appflow.AppflowTask)[]

---

##### `triggerConfig`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowUpdateFlowRequest.property.triggerConfig"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowTriggerConfig`](#aws-cdk-sdk.appflow.AppflowTriggerConfig)

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowUpdateFlowRequest.property.description"></a>

- *Type:* `string`

---

##### `sourceFlowConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowUpdateFlowRequest.property.sourceFlowConfig"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowSourceFlowConfig`](#aws-cdk-sdk.appflow.AppflowSourceFlowConfig)

---

### AppflowUpdateFlowResponse <a name="aws-cdk-sdk.appflow.AppflowUpdateFlowResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowUpdateFlowResponse: appflow.AppflowUpdateFlowResponse = { ... }
```

##### `flowStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowUpdateFlowResponse.property.flowStatus"></a>

- *Type:* `string`

---

### AppflowUpsolverDestinationProperties <a name="aws-cdk-sdk.appflow.AppflowUpsolverDestinationProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowUpsolverDestinationProperties: appflow.AppflowUpsolverDestinationProperties = { ... }
```

##### `bucketName`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowUpsolverDestinationProperties.property.bucketName"></a>

- *Type:* `string`

---

##### `s3OutputFormatConfig`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowUpsolverDestinationProperties.property.s3OutputFormatConfig"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowUpsolverS3OutputFormatConfig`](#aws-cdk-sdk.appflow.AppflowUpsolverS3OutputFormatConfig)

---

##### `bucketPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowUpsolverDestinationProperties.property.bucketPrefix"></a>

- *Type:* `string`

---

### AppflowUpsolverMetadata <a name="aws-cdk-sdk.appflow.AppflowUpsolverMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowUpsolverMetadata: appflow.AppflowUpsolverMetadata = { ... }
```

### AppflowUpsolverS3OutputFormatConfig <a name="aws-cdk-sdk.appflow.AppflowUpsolverS3OutputFormatConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowUpsolverS3OutputFormatConfig: appflow.AppflowUpsolverS3OutputFormatConfig = { ... }
```

##### `prefixConfig`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowUpsolverS3OutputFormatConfig.property.prefixConfig"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowPrefixConfig`](#aws-cdk-sdk.appflow.AppflowPrefixConfig)

---

##### `aggregationConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowUpsolverS3OutputFormatConfig.property.aggregationConfig"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowAggregationConfig`](#aws-cdk-sdk.appflow.AppflowAggregationConfig)

---

##### `fileType`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowUpsolverS3OutputFormatConfig.property.fileType"></a>

- *Type:* `string`

---

### AppflowVeevaConnectorProfileCredentials <a name="aws-cdk-sdk.appflow.AppflowVeevaConnectorProfileCredentials"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowVeevaConnectorProfileCredentials: appflow.AppflowVeevaConnectorProfileCredentials = { ... }
```

##### `password`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowVeevaConnectorProfileCredentials.property.password"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowVeevaConnectorProfileCredentials.property.username"></a>

- *Type:* `string`

---

### AppflowVeevaConnectorProfileProperties <a name="aws-cdk-sdk.appflow.AppflowVeevaConnectorProfileProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowVeevaConnectorProfileProperties: appflow.AppflowVeevaConnectorProfileProperties = { ... }
```

##### `instanceUrl`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowVeevaConnectorProfileProperties.property.instanceUrl"></a>

- *Type:* `string`

---

### AppflowVeevaMetadata <a name="aws-cdk-sdk.appflow.AppflowVeevaMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowVeevaMetadata: appflow.AppflowVeevaMetadata = { ... }
```

### AppflowVeevaSourceProperties <a name="aws-cdk-sdk.appflow.AppflowVeevaSourceProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowVeevaSourceProperties: appflow.AppflowVeevaSourceProperties = { ... }
```

##### `object`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowVeevaSourceProperties.property.object"></a>

- *Type:* `string`

---

### AppflowZendeskConnectorProfileCredentials <a name="aws-cdk-sdk.appflow.AppflowZendeskConnectorProfileCredentials"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowZendeskConnectorProfileCredentials: appflow.AppflowZendeskConnectorProfileCredentials = { ... }
```

##### `clientId`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowZendeskConnectorProfileCredentials.property.clientId"></a>

- *Type:* `string`

---

##### `clientSecret`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowZendeskConnectorProfileCredentials.property.clientSecret"></a>

- *Type:* `string`

---

##### `accessToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowZendeskConnectorProfileCredentials.property.accessToken"></a>

- *Type:* `string`

---

##### `oAuthRequest`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowZendeskConnectorProfileCredentials.property.oAuthRequest"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowConnectorOAuthRequest`](#aws-cdk-sdk.appflow.AppflowConnectorOAuthRequest)

---

### AppflowZendeskConnectorProfileProperties <a name="aws-cdk-sdk.appflow.AppflowZendeskConnectorProfileProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowZendeskConnectorProfileProperties: appflow.AppflowZendeskConnectorProfileProperties = { ... }
```

##### `instanceUrl`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowZendeskConnectorProfileProperties.property.instanceUrl"></a>

- *Type:* `string`

---

### AppflowZendeskMetadata <a name="aws-cdk-sdk.appflow.AppflowZendeskMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowZendeskMetadata: appflow.AppflowZendeskMetadata = { ... }
```

##### `oAuthScopes`<sup>Optional</sup> <a name="aws-cdk-sdk.appflow.AppflowZendeskMetadata.property.oAuthScopes"></a>

- *Type:* `string`[]

---

### AppflowZendeskSourceProperties <a name="aws-cdk-sdk.appflow.AppflowZendeskSourceProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

const appflowZendeskSourceProperties: appflow.AppflowZendeskSourceProperties = { ... }
```

##### `object`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowZendeskSourceProperties.property.object"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### AppflowResponsesCreateConnectorProfile <a name="aws-cdk-sdk.appflow.AppflowResponsesCreateConnectorProfile"></a>

#### Initializer <a name="aws-cdk-sdk.appflow.AppflowResponsesCreateConnectorProfile.Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

new appflow.AppflowResponsesCreateConnectorProfile(__scope: Construct, __resources: string[], __input: AppflowCreateConnectorProfileRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesCreateConnectorProfile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesCreateConnectorProfile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesCreateConnectorProfile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowCreateConnectorProfileRequest`](#aws-cdk-sdk.appflow.AppflowCreateConnectorProfileRequest)

---



#### Properties <a name="Properties"></a>

##### `connectorProfileArn`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesCreateConnectorProfile.property.connectorProfileArn"></a>

- *Type:* `string`

---


### AppflowResponsesCreateFlow <a name="aws-cdk-sdk.appflow.AppflowResponsesCreateFlow"></a>

#### Initializer <a name="aws-cdk-sdk.appflow.AppflowResponsesCreateFlow.Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

new appflow.AppflowResponsesCreateFlow(__scope: Construct, __resources: string[], __input: AppflowCreateFlowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesCreateFlow.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesCreateFlow.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesCreateFlow.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowCreateFlowRequest`](#aws-cdk-sdk.appflow.AppflowCreateFlowRequest)

---



#### Properties <a name="Properties"></a>

##### `flowArn`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesCreateFlow.property.flowArn"></a>

- *Type:* `string`

---

##### `flowStatus`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesCreateFlow.property.flowStatus"></a>

- *Type:* `string`

---


### AppflowResponsesDescribeConnectorEntity <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeConnectorEntity"></a>

#### Initializer <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeConnectorEntity.Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

new appflow.AppflowResponsesDescribeConnectorEntity(__scope: Construct, __resources: string[], __input: AppflowDescribeConnectorEntityRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeConnectorEntity.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeConnectorEntity.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeConnectorEntity.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowDescribeConnectorEntityRequest`](#aws-cdk-sdk.appflow.AppflowDescribeConnectorEntityRequest)

---



#### Properties <a name="Properties"></a>

##### `connectorEntityFields`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeConnectorEntity.property.connectorEntityFields"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowConnectorEntityField`](#aws-cdk-sdk.appflow.AppflowConnectorEntityField)[]

---


### AppflowResponsesDescribeConnectorProfiles <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeConnectorProfiles"></a>

#### Initializer <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeConnectorProfiles.Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

new appflow.AppflowResponsesDescribeConnectorProfiles(__scope: Construct, __resources: string[], __input: AppflowDescribeConnectorProfilesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeConnectorProfiles.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeConnectorProfiles.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeConnectorProfiles.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowDescribeConnectorProfilesRequest`](#aws-cdk-sdk.appflow.AppflowDescribeConnectorProfilesRequest)

---



#### Properties <a name="Properties"></a>

##### `connectorProfileDetails`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeConnectorProfiles.property.connectorProfileDetails"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowConnectorProfile`](#aws-cdk-sdk.appflow.AppflowConnectorProfile)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeConnectorProfiles.property.nextToken"></a>

- *Type:* `string`

---


### AppflowResponsesDescribeConnectors <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeConnectors"></a>

#### Initializer <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeConnectors.Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

new appflow.AppflowResponsesDescribeConnectors(__scope: Construct, __resources: string[], __input: AppflowDescribeConnectorsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeConnectors.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeConnectors.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeConnectors.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowDescribeConnectorsRequest`](#aws-cdk-sdk.appflow.AppflowDescribeConnectorsRequest)

---



#### Properties <a name="Properties"></a>

##### `connectorConfigurations`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeConnectors.property.connectorConfigurations"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.appflow.AppflowConnectorConfiguration`](#aws-cdk-sdk.appflow.AppflowConnectorConfiguration)}

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeConnectors.property.nextToken"></a>

- *Type:* `string`

---


### AppflowResponsesDescribeFlow <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlow"></a>

#### Initializer <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlow.Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

new appflow.AppflowResponsesDescribeFlow(__scope: Construct, __resources: string[], __input: AppflowDescribeFlowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlow.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlow.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlow.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowDescribeFlowRequest`](#aws-cdk-sdk.appflow.AppflowDescribeFlowRequest)

---



#### Properties <a name="Properties"></a>

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlow.property.createdAt"></a>

- *Type:* `string`

---

##### `createdBy`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlow.property.createdBy"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlow.property.description"></a>

- *Type:* `string`

---

##### `destinationFlowConfigList`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlow.property.destinationFlowConfigList"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowDestinationFlowConfig`](#aws-cdk-sdk.appflow.AppflowDestinationFlowConfig)[]

---

##### `flowArn`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlow.property.flowArn"></a>

- *Type:* `string`

---

##### `flowName`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlow.property.flowName"></a>

- *Type:* `string`

---

##### `flowStatus`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlow.property.flowStatus"></a>

- *Type:* `string`

---

##### `flowStatusMessage`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlow.property.flowStatusMessage"></a>

- *Type:* `string`

---

##### `kmsArn`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlow.property.kmsArn"></a>

- *Type:* `string`

---

##### `lastRunExecutionDetails`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlow.property.lastRunExecutionDetails"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowLastRunExecutionDetails`](#aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowLastRunExecutionDetails)

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlow.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `lastUpdatedBy`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlow.property.lastUpdatedBy"></a>

- *Type:* `string`

---

##### `sourceFlowConfig`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlow.property.sourceFlowConfig"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfig`](#aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfig)

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlow.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `tasks`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlow.property.tasks"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowTask`](#aws-cdk-sdk.appflow.AppflowTask)[]

---

##### `triggerConfig`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlow.property.triggerConfig"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowTriggerConfig`](#aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowTriggerConfig)

---


### AppflowResponsesDescribeFlowExecutionRecords <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowExecutionRecords"></a>

#### Initializer <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowExecutionRecords.Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

new appflow.AppflowResponsesDescribeFlowExecutionRecords(__scope: Construct, __resources: string[], __input: AppflowDescribeFlowExecutionRecordsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowExecutionRecords.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowExecutionRecords.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowExecutionRecords.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowDescribeFlowExecutionRecordsRequest`](#aws-cdk-sdk.appflow.AppflowDescribeFlowExecutionRecordsRequest)

---



#### Properties <a name="Properties"></a>

##### `flowExecutions`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowExecutionRecords.property.flowExecutions"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowExecutionRecord`](#aws-cdk-sdk.appflow.AppflowExecutionRecord)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowExecutionRecords.property.nextToken"></a>

- *Type:* `string`

---


### AppflowResponsesDescribeFlowLastRunExecutionDetails <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowLastRunExecutionDetails"></a>

#### Initializer <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowLastRunExecutionDetails.Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

new appflow.AppflowResponsesDescribeFlowLastRunExecutionDetails(__scope: Construct, __resources: string[], __input: AppflowDescribeFlowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowLastRunExecutionDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowLastRunExecutionDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowLastRunExecutionDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowDescribeFlowRequest`](#aws-cdk-sdk.appflow.AppflowDescribeFlowRequest)

---



#### Properties <a name="Properties"></a>

##### `mostRecentExecutionMessage`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowLastRunExecutionDetails.property.mostRecentExecutionMessage"></a>

- *Type:* `string`

---

##### `mostRecentExecutionStatus`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowLastRunExecutionDetails.property.mostRecentExecutionStatus"></a>

- *Type:* `string`

---

##### `mostRecentExecutionTime`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowLastRunExecutionDetails.property.mostRecentExecutionTime"></a>

- *Type:* `string`

---


### AppflowResponsesDescribeFlowSourceFlowConfig <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfig"></a>

#### Initializer <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfig.Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

new appflow.AppflowResponsesDescribeFlowSourceFlowConfig(__scope: Construct, __resources: string[], __input: AppflowDescribeFlowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowDescribeFlowRequest`](#aws-cdk-sdk.appflow.AppflowDescribeFlowRequest)

---



#### Properties <a name="Properties"></a>

##### `connectorProfileName`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfig.property.connectorProfileName"></a>

- *Type:* `string`

---

##### `connectorType`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfig.property.connectorType"></a>

- *Type:* `string`

---

##### `incrementalPullConfig`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfig.property.incrementalPullConfig"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigIncrementalPullConfig`](#aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigIncrementalPullConfig)

---

##### `sourceConnectorProperties`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfig.property.sourceConnectorProperties"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorProperties`](#aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorProperties)

---


### AppflowResponsesDescribeFlowSourceFlowConfigIncrementalPullConfig <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigIncrementalPullConfig"></a>

#### Initializer <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigIncrementalPullConfig.Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

new appflow.AppflowResponsesDescribeFlowSourceFlowConfigIncrementalPullConfig(__scope: Construct, __resources: string[], __input: AppflowDescribeFlowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigIncrementalPullConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigIncrementalPullConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigIncrementalPullConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowDescribeFlowRequest`](#aws-cdk-sdk.appflow.AppflowDescribeFlowRequest)

---



#### Properties <a name="Properties"></a>

##### `datetimeTypeFieldName`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigIncrementalPullConfig.property.datetimeTypeFieldName"></a>

- *Type:* `string`

---


### AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorProperties <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorProperties"></a>

#### Initializer <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorProperties.Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

new appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorProperties(__scope: Construct, __resources: string[], __input: AppflowDescribeFlowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorProperties.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorProperties.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorProperties.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowDescribeFlowRequest`](#aws-cdk-sdk.appflow.AppflowDescribeFlowRequest)

---



#### Properties <a name="Properties"></a>

##### `amplitude`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorProperties.property.amplitude"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesAmplitude`](#aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesAmplitude)

---

##### `datadog`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorProperties.property.datadog"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesDatadog`](#aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesDatadog)

---

##### `dynatrace`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorProperties.property.dynatrace"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesDynatrace`](#aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesDynatrace)

---

##### `googleAnalytics`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorProperties.property.googleAnalytics"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics`](#aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics)

---

##### `inforNexus`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorProperties.property.inforNexus"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesInforNexus`](#aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesInforNexus)

---

##### `marketo`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorProperties.property.marketo"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesMarketo`](#aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesMarketo)

---

##### `s3`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorProperties.property.s3"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesS3`](#aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesS3)

---

##### `salesforce`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorProperties.property.salesforce"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesSalesforce`](#aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesSalesforce)

---

##### `serviceNow`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorProperties.property.serviceNow"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesServiceNow`](#aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesServiceNow)

---

##### `singular`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorProperties.property.singular"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesSingular`](#aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesSingular)

---

##### `slack`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorProperties.property.slack"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesSlack`](#aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesSlack)

---

##### `trendmicro`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorProperties.property.trendmicro"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesTrendmicro`](#aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesTrendmicro)

---

##### `veeva`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorProperties.property.veeva"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesVeeva`](#aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesVeeva)

---

##### `zendesk`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorProperties.property.zendesk"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesZendesk`](#aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesZendesk)

---


### AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesAmplitude <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesAmplitude"></a>

#### Initializer <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesAmplitude.Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

new appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesAmplitude(__scope: Construct, __resources: string[], __input: AppflowDescribeFlowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesAmplitude.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesAmplitude.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesAmplitude.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowDescribeFlowRequest`](#aws-cdk-sdk.appflow.AppflowDescribeFlowRequest)

---



#### Properties <a name="Properties"></a>

##### `object`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesAmplitude.property.object"></a>

- *Type:* `string`

---


### AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesDatadog <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesDatadog"></a>

#### Initializer <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesDatadog.Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

new appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesDatadog(__scope: Construct, __resources: string[], __input: AppflowDescribeFlowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesDatadog.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesDatadog.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesDatadog.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowDescribeFlowRequest`](#aws-cdk-sdk.appflow.AppflowDescribeFlowRequest)

---



#### Properties <a name="Properties"></a>

##### `object`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesDatadog.property.object"></a>

- *Type:* `string`

---


### AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesDynatrace <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesDynatrace"></a>

#### Initializer <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesDynatrace.Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

new appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesDynatrace(__scope: Construct, __resources: string[], __input: AppflowDescribeFlowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesDynatrace.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesDynatrace.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesDynatrace.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowDescribeFlowRequest`](#aws-cdk-sdk.appflow.AppflowDescribeFlowRequest)

---



#### Properties <a name="Properties"></a>

##### `object`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesDynatrace.property.object"></a>

- *Type:* `string`

---


### AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics"></a>

#### Initializer <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics.Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

new appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics(__scope: Construct, __resources: string[], __input: AppflowDescribeFlowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowDescribeFlowRequest`](#aws-cdk-sdk.appflow.AppflowDescribeFlowRequest)

---



#### Properties <a name="Properties"></a>

##### `object`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics.property.object"></a>

- *Type:* `string`

---


### AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesInforNexus <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesInforNexus"></a>

#### Initializer <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesInforNexus.Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

new appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesInforNexus(__scope: Construct, __resources: string[], __input: AppflowDescribeFlowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesInforNexus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesInforNexus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesInforNexus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowDescribeFlowRequest`](#aws-cdk-sdk.appflow.AppflowDescribeFlowRequest)

---



#### Properties <a name="Properties"></a>

##### `object`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesInforNexus.property.object"></a>

- *Type:* `string`

---


### AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesMarketo <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesMarketo"></a>

#### Initializer <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesMarketo.Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

new appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesMarketo(__scope: Construct, __resources: string[], __input: AppflowDescribeFlowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesMarketo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesMarketo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesMarketo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowDescribeFlowRequest`](#aws-cdk-sdk.appflow.AppflowDescribeFlowRequest)

---



#### Properties <a name="Properties"></a>

##### `object`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesMarketo.property.object"></a>

- *Type:* `string`

---


### AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesS3 <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesS3"></a>

#### Initializer <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesS3.Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

new appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesS3(__scope: Construct, __resources: string[], __input: AppflowDescribeFlowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesS3.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesS3.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesS3.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowDescribeFlowRequest`](#aws-cdk-sdk.appflow.AppflowDescribeFlowRequest)

---



#### Properties <a name="Properties"></a>

##### `bucketName`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesS3.property.bucketName"></a>

- *Type:* `string`

---

##### `bucketPrefix`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesS3.property.bucketPrefix"></a>

- *Type:* `string`

---


### AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesSalesforce <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesSalesforce"></a>

#### Initializer <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesSalesforce.Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

new appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesSalesforce(__scope: Construct, __resources: string[], __input: AppflowDescribeFlowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesSalesforce.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesSalesforce.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesSalesforce.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowDescribeFlowRequest`](#aws-cdk-sdk.appflow.AppflowDescribeFlowRequest)

---



#### Properties <a name="Properties"></a>

##### `enableDynamicFieldUpdate`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesSalesforce.property.enableDynamicFieldUpdate"></a>

- *Type:* `boolean`

---

##### `includeDeletedRecords`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesSalesforce.property.includeDeletedRecords"></a>

- *Type:* `boolean`

---

##### `object`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesSalesforce.property.object"></a>

- *Type:* `string`

---


### AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesServiceNow <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesServiceNow"></a>

#### Initializer <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesServiceNow.Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

new appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesServiceNow(__scope: Construct, __resources: string[], __input: AppflowDescribeFlowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesServiceNow.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesServiceNow.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesServiceNow.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowDescribeFlowRequest`](#aws-cdk-sdk.appflow.AppflowDescribeFlowRequest)

---



#### Properties <a name="Properties"></a>

##### `object`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesServiceNow.property.object"></a>

- *Type:* `string`

---


### AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesSingular <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesSingular"></a>

#### Initializer <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesSingular.Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

new appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesSingular(__scope: Construct, __resources: string[], __input: AppflowDescribeFlowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesSingular.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesSingular.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesSingular.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowDescribeFlowRequest`](#aws-cdk-sdk.appflow.AppflowDescribeFlowRequest)

---



#### Properties <a name="Properties"></a>

##### `object`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesSingular.property.object"></a>

- *Type:* `string`

---


### AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesSlack <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesSlack"></a>

#### Initializer <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesSlack.Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

new appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesSlack(__scope: Construct, __resources: string[], __input: AppflowDescribeFlowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesSlack.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesSlack.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesSlack.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowDescribeFlowRequest`](#aws-cdk-sdk.appflow.AppflowDescribeFlowRequest)

---



#### Properties <a name="Properties"></a>

##### `object`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesSlack.property.object"></a>

- *Type:* `string`

---


### AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesTrendmicro <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesTrendmicro"></a>

#### Initializer <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesTrendmicro.Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

new appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesTrendmicro(__scope: Construct, __resources: string[], __input: AppflowDescribeFlowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesTrendmicro.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesTrendmicro.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesTrendmicro.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowDescribeFlowRequest`](#aws-cdk-sdk.appflow.AppflowDescribeFlowRequest)

---



#### Properties <a name="Properties"></a>

##### `object`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesTrendmicro.property.object"></a>

- *Type:* `string`

---


### AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesVeeva <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesVeeva"></a>

#### Initializer <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesVeeva.Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

new appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesVeeva(__scope: Construct, __resources: string[], __input: AppflowDescribeFlowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesVeeva.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesVeeva.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesVeeva.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowDescribeFlowRequest`](#aws-cdk-sdk.appflow.AppflowDescribeFlowRequest)

---



#### Properties <a name="Properties"></a>

##### `object`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesVeeva.property.object"></a>

- *Type:* `string`

---


### AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesZendesk <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesZendesk"></a>

#### Initializer <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesZendesk.Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

new appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesZendesk(__scope: Construct, __resources: string[], __input: AppflowDescribeFlowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesZendesk.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesZendesk.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesZendesk.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowDescribeFlowRequest`](#aws-cdk-sdk.appflow.AppflowDescribeFlowRequest)

---



#### Properties <a name="Properties"></a>

##### `object`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesZendesk.property.object"></a>

- *Type:* `string`

---


### AppflowResponsesDescribeFlowTriggerConfig <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowTriggerConfig"></a>

#### Initializer <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowTriggerConfig.Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

new appflow.AppflowResponsesDescribeFlowTriggerConfig(__scope: Construct, __resources: string[], __input: AppflowDescribeFlowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowTriggerConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowTriggerConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowTriggerConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowDescribeFlowRequest`](#aws-cdk-sdk.appflow.AppflowDescribeFlowRequest)

---



#### Properties <a name="Properties"></a>

##### `triggerProperties`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowTriggerConfig.property.triggerProperties"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowTriggerConfigTriggerProperties`](#aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowTriggerConfigTriggerProperties)

---

##### `triggerType`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowTriggerConfig.property.triggerType"></a>

- *Type:* `string`

---


### AppflowResponsesDescribeFlowTriggerConfigTriggerProperties <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowTriggerConfigTriggerProperties"></a>

#### Initializer <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowTriggerConfigTriggerProperties.Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

new appflow.AppflowResponsesDescribeFlowTriggerConfigTriggerProperties(__scope: Construct, __resources: string[], __input: AppflowDescribeFlowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowTriggerConfigTriggerProperties.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowTriggerConfigTriggerProperties.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowTriggerConfigTriggerProperties.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowDescribeFlowRequest`](#aws-cdk-sdk.appflow.AppflowDescribeFlowRequest)

---



#### Properties <a name="Properties"></a>

##### `scheduled`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowTriggerConfigTriggerProperties.property.scheduled"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowTriggerConfigTriggerPropertiesScheduled`](#aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowTriggerConfigTriggerPropertiesScheduled)

---


### AppflowResponsesDescribeFlowTriggerConfigTriggerPropertiesScheduled <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowTriggerConfigTriggerPropertiesScheduled"></a>

#### Initializer <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowTriggerConfigTriggerPropertiesScheduled.Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

new appflow.AppflowResponsesDescribeFlowTriggerConfigTriggerPropertiesScheduled(__scope: Construct, __resources: string[], __input: AppflowDescribeFlowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowTriggerConfigTriggerPropertiesScheduled.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowTriggerConfigTriggerPropertiesScheduled.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowTriggerConfigTriggerPropertiesScheduled.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowDescribeFlowRequest`](#aws-cdk-sdk.appflow.AppflowDescribeFlowRequest)

---



#### Properties <a name="Properties"></a>

##### `dataPullMode`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowTriggerConfigTriggerPropertiesScheduled.property.dataPullMode"></a>

- *Type:* `string`

---

##### `scheduleEndTime`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowTriggerConfigTriggerPropertiesScheduled.property.scheduleEndTime"></a>

- *Type:* `string`

---

##### `scheduleExpression`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowTriggerConfigTriggerPropertiesScheduled.property.scheduleExpression"></a>

- *Type:* `string`

---

##### `scheduleStartTime`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowTriggerConfigTriggerPropertiesScheduled.property.scheduleStartTime"></a>

- *Type:* `string`

---

##### `timezone`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesDescribeFlowTriggerConfigTriggerPropertiesScheduled.property.timezone"></a>

- *Type:* `string`

---


### AppflowResponsesListConnectorEntities <a name="aws-cdk-sdk.appflow.AppflowResponsesListConnectorEntities"></a>

#### Initializer <a name="aws-cdk-sdk.appflow.AppflowResponsesListConnectorEntities.Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

new appflow.AppflowResponsesListConnectorEntities(__scope: Construct, __resources: string[], __input: AppflowListConnectorEntitiesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesListConnectorEntities.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesListConnectorEntities.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesListConnectorEntities.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowListConnectorEntitiesRequest`](#aws-cdk-sdk.appflow.AppflowListConnectorEntitiesRequest)

---



#### Properties <a name="Properties"></a>

##### `connectorEntityMap`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesListConnectorEntities.property.connectorEntityMap"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.appflow.AppflowConnectorEntity`](#aws-cdk-sdk.appflow.AppflowConnectorEntity)[]}

---


### AppflowResponsesListFlows <a name="aws-cdk-sdk.appflow.AppflowResponsesListFlows"></a>

#### Initializer <a name="aws-cdk-sdk.appflow.AppflowResponsesListFlows.Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

new appflow.AppflowResponsesListFlows(__scope: Construct, __resources: string[], __input: AppflowListFlowsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesListFlows.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesListFlows.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesListFlows.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowListFlowsRequest`](#aws-cdk-sdk.appflow.AppflowListFlowsRequest)

---



#### Properties <a name="Properties"></a>

##### `flows`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesListFlows.property.flows"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowFlowDefinition`](#aws-cdk-sdk.appflow.AppflowFlowDefinition)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesListFlows.property.nextToken"></a>

- *Type:* `string`

---


### AppflowResponsesListTagsForResource <a name="aws-cdk-sdk.appflow.AppflowResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.appflow.AppflowResponsesListTagsForResource.Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

new appflow.AppflowResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: AppflowListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowListTagsForResourceRequest`](#aws-cdk-sdk.appflow.AppflowListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesListTagsForResource.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### AppflowResponsesStartFlow <a name="aws-cdk-sdk.appflow.AppflowResponsesStartFlow"></a>

#### Initializer <a name="aws-cdk-sdk.appflow.AppflowResponsesStartFlow.Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

new appflow.AppflowResponsesStartFlow(__scope: Construct, __resources: string[], __input: AppflowStartFlowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesStartFlow.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesStartFlow.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesStartFlow.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowStartFlowRequest`](#aws-cdk-sdk.appflow.AppflowStartFlowRequest)

---



#### Properties <a name="Properties"></a>

##### `executionId`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesStartFlow.property.executionId"></a>

- *Type:* `string`

---

##### `flowArn`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesStartFlow.property.flowArn"></a>

- *Type:* `string`

---

##### `flowStatus`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesStartFlow.property.flowStatus"></a>

- *Type:* `string`

---


### AppflowResponsesStopFlow <a name="aws-cdk-sdk.appflow.AppflowResponsesStopFlow"></a>

#### Initializer <a name="aws-cdk-sdk.appflow.AppflowResponsesStopFlow.Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

new appflow.AppflowResponsesStopFlow(__scope: Construct, __resources: string[], __input: AppflowStopFlowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesStopFlow.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesStopFlow.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesStopFlow.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowStopFlowRequest`](#aws-cdk-sdk.appflow.AppflowStopFlowRequest)

---



#### Properties <a name="Properties"></a>

##### `flowArn`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesStopFlow.property.flowArn"></a>

- *Type:* `string`

---

##### `flowStatus`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesStopFlow.property.flowStatus"></a>

- *Type:* `string`

---


### AppflowResponsesUpdateConnectorProfile <a name="aws-cdk-sdk.appflow.AppflowResponsesUpdateConnectorProfile"></a>

#### Initializer <a name="aws-cdk-sdk.appflow.AppflowResponsesUpdateConnectorProfile.Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

new appflow.AppflowResponsesUpdateConnectorProfile(__scope: Construct, __resources: string[], __input: AppflowUpdateConnectorProfileRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesUpdateConnectorProfile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesUpdateConnectorProfile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesUpdateConnectorProfile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowUpdateConnectorProfileRequest`](#aws-cdk-sdk.appflow.AppflowUpdateConnectorProfileRequest)

---



#### Properties <a name="Properties"></a>

##### `connectorProfileArn`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesUpdateConnectorProfile.property.connectorProfileArn"></a>

- *Type:* `string`

---


### AppflowResponsesUpdateFlow <a name="aws-cdk-sdk.appflow.AppflowResponsesUpdateFlow"></a>

#### Initializer <a name="aws-cdk-sdk.appflow.AppflowResponsesUpdateFlow.Initializer"></a>

```typescript
import { appflow } from 'aws-cdk-sdk'

new appflow.AppflowResponsesUpdateFlow(__scope: Construct, __resources: string[], __input: AppflowUpdateFlowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesUpdateFlow.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesUpdateFlow.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesUpdateFlow.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appflow.AppflowUpdateFlowRequest`](#aws-cdk-sdk.appflow.AppflowUpdateFlowRequest)

---



#### Properties <a name="Properties"></a>

##### `flowStatus`<sup>Required</sup> <a name="aws-cdk-sdk.appflow.AppflowResponsesUpdateFlow.property.flowStatus"></a>

- *Type:* `string`

---



